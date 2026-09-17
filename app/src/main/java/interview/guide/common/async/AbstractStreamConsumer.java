package interview.guide.common.async;

import interview.guide.common.constant.AsyncTaskStreamConstants;
import interview.guide.common.util.RetryBackoff;
import interview.guide.infrastructure.redis.RedisService;
import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.stream.StreamMessageId;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;

@Slf4j
public abstract class AbstractStreamConsumer<T> {

    private final RedisService redisService;
    private final AtomicBoolean running = new AtomicBoolean(false);
    private ExecutorService executorService;
    private String consumerName;

    /**
     * 重投退避的首次等待基数（毫秒）。设为 0 表示不退避（保留旧的立即重投行为）。
     *
     * 做成可覆写字段而非直接引用常量：测试需要在不真 sleep 的前提下驱动重试路径，
     * 否则反射调用 processMessage 的既有用例会真实阻塞数十秒。
     */
    protected long retryBaseBackoffMillis = AsyncTaskStreamConstants.RETRY_BASE_BACKOFF_MS;

    /**
     * 重投退避等待上限（毫秒）。
     */
    protected long retryMaxBackoffMillis = AsyncTaskStreamConstants.RETRY_MAX_BACKOFF_MS;

    protected AbstractStreamConsumer(RedisService redisService) {
        this.redisService = redisService;
    }

    @PostConstruct
    public void init() {
        this.consumerName = consumerPrefix() + UUID.randomUUID().toString().substring(0, 8);
        int threads = consumerThreads();
        this.executorService = new ThreadPoolExecutor(
            threads,
            threads,
            0L,
            TimeUnit.MILLISECONDS,
            new LinkedBlockingQueue<>(),
            r -> {
                Thread t = new Thread(r, threadName());
                t.setDaemon(true);
                return t;
            },
            new ThreadPoolExecutor.AbortPolicy()
        );

        running.set(true);
        executorService.submit(this::startConsumer);
        log.info("{} consumer started: consumerName={}, threads={}", taskDisplayName(), consumerName, threads);
    }

    /**
     * 消费线程数。单条消息处理可能包含 LLM 长耗时调用，默认 2 个线程避免
     * 单线程阻塞整个 Stream；子类可按需覆盖。
     */
    protected int consumerThreads() {
        return 2;
    }

    @PreDestroy
    public void shutdown() {
        running.set(false);
        if (executorService != null) {
            executorService.shutdown();
            try {
                if (!executorService.awaitTermination(10, TimeUnit.SECONDS)) {
                    executorService.shutdownNow();
                }
            } catch (InterruptedException e) {
                executorService.shutdownNow();
                Thread.currentThread().interrupt();
            }
        }
        log.info("{} consumer stopped: consumerName={}", taskDisplayName(), consumerName);
    }

    private void startConsumer() {
        try {
            redisService.createStreamGroup(streamKey(), groupName());
            log.info("Redis Stream group is ready: {}", groupName());
        } catch (Exception e) {
            log.warn("Failed to prepare Redis Stream group: groupName={}", groupName(), e);
        }

        consumeLoop();
    }

    private void consumeLoop() {
        while (running.get()) {
            try {
                redisService.streamConsumeMessages(
                    streamKey(),
                    groupName(),
                    consumerName,
                    AsyncTaskStreamConstants.BATCH_SIZE,
                    AsyncTaskStreamConstants.POLL_INTERVAL_MS,
                    AsyncTaskStreamConstants.PENDING_IDLE_TIMEOUT_MS,
                    AsyncTaskStreamConstants.PENDING_CLAIM_BATCH_SIZE,
                    this::processMessage
                );
            } catch (Exception e) {
                if (Thread.currentThread().isInterrupted()) {
                    log.info("Consumer thread interrupted");
                    break;
                }
                log.error("Failed to consume message", e);
            }
        }
    }

    void processMessage(StreamMessageId messageId, Map<String, String> data) {
        T payload;
        try {
            payload = parsePayload(messageId, data);
        } catch (Exception e) {
            Object fields = data == null ? null : data.keySet();
            log.warn("Failed to parse {} stream message, ack and discard: messageId={}, fields={}",
                taskDisplayName(), messageId, fields, e);
            ackMessage(messageId);
            return;
        }

        if (payload == null) {
            ackMessage(messageId);
            return;
        }

        int retryCount = parseRetryCount(data);
        log.info("Processing {} task: payload={}, messageId={}, retryCount={}",
            taskDisplayName(), payloadIdentifier(payload), messageId, retryCount);

        try {
            if (shouldSkip(payload)) {
                ackMessage(messageId);
                log.info("{} task skipped: {}", taskDisplayName(), payloadIdentifier(payload));
                return;
            }
            if (!tryMarkProcessing(payload)) {
                // 领取冲突（另一消费者正在处理）：不 ack，让消息留在 Pending 由回收机制处理
                log.info("{} task was not claimed: {}", taskDisplayName(), payloadIdentifier(payload));
                return;
            }
            processBusiness(payload);
            markCompleted(payload);
            ackMessage(messageId);
            log.info("{} task completed: {}", taskDisplayName(), payloadIdentifier(payload));
        } catch (Exception e) {
            log.error("{} task failed: {}", taskDisplayName(), payloadIdentifier(payload), e);
            if (retryCount < AsyncTaskStreamConstants.MAX_RETRY_COUNT) {
                // 退避后再重投：失败多因 LLM 限流，配额窗口未恢复时立即重投必然连败。
                // 等待期间原消息保持 pending，由重投成功后 ack 收尾；
                // 退避上限须小于 PENDING_IDLE_TIMEOUT_MS，避免被回收机制重复认领。
                if (!awaitRetryBackoff(retryCount + 1, payload)) {
                    return;
                }
                // 先重投成功再 ack，避免「ack 但任务未入队」导致任务丢失
                try {
                    retryMessage(payload, retryCount + 1);
                    ackMessage(messageId);
                } catch (Exception retryEx) {
                    log.error("{} task retry enqueue failed, leaving message unacked: {}",
                        taskDisplayName(), payloadIdentifier(payload), retryEx);
                }
            } else {
                markFailed(payload, truncateError(
                    taskDisplayName() + " failed after retry " + retryCount + ": " + e.getMessage()
                ));
                ackMessage(messageId);
            }
        }
    }

    /**
     * 计算第 {@code nextRetryCount} 次重投前的退避时长。
     *
     * 退避上限与 pending 回收阈值的关系：等待期间原消息仍是 pending，
     * 若等待时长超过 {@link AsyncTaskStreamConstants#PENDING_IDLE_TIMEOUT_MS}，
     * 同组其他消费者会把它当作「空闲超时」认领走，造成同一任务被并发处理。
     * 这里对上限做一次收窄保护。
     *
     * 抽成 protected 方法便于单测覆写，避免测试真的睡满退避时长。
     *
     * @return 退避时长（毫秒）；0 表示不等待
     */
    protected long awaitRetryBackoffMillis(int nextRetryCount) {
        long safeMax = Math.min(retryMaxBackoffMillis, AsyncTaskStreamConstants.PENDING_IDLE_TIMEOUT_MS);
        return RetryBackoff.computeMillis(nextRetryCount, retryBaseBackoffMillis, safeMax);
    }

    /**
     * 重投前的退避等待。
     *
     * @return true 表示可以继续重投；false 表示线程被中断，应放弃本轮重投
     */
    private boolean awaitRetryBackoff(int nextRetryCount, T payload) {
        long waitMillis = awaitRetryBackoffMillis(nextRetryCount);
        if (waitMillis <= 0) {
            return true;
        }
        log.info("{} task retry backoff: {}ms, retryCount={}, payload={}",
            taskDisplayName(), waitMillis, nextRetryCount, payloadIdentifier(payload));
        return sleepForBackoff(waitMillis, payload);
    }

    /**
     * 实际睡眠。抽成 protected 方法便于单测覆写，避免测试真的睡满退避时长。
     *
     * @return true 表示睡眠完成；false 表示线程被中断，应放弃本轮重投
     */
    protected boolean sleepForBackoff(long millis, T payload) {
        try {
            Thread.sleep(millis);
            return true;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.warn("{} task retry backoff interrupted, leaving message unacked: {}",
                taskDisplayName(), payloadIdentifier(payload));
            return false;
        }
    }

    protected int parseRetryCount(Map<String, String> data) {
        if (data == null) {
            return 0;
        }
        try {
            return Integer.parseInt(data.getOrDefault(AsyncTaskStreamConstants.FIELD_RETRY_COUNT, "0"));
        } catch (NumberFormatException e) {
            return 0;
        }
    }

    protected String truncateError(String error) {
        if (error == null) {
            return null;
        }
        return error.length() > 500 ? error.substring(0, 500) : error;
    }

    private void ackMessage(StreamMessageId messageId) {
        try {
            redisService.streamAck(streamKey(), groupName(), messageId);
        } catch (Exception e) {
            log.error("Failed to ack stream message: messageId={}", messageId, e);
        }
    }

    protected RedisService redisService() {
        return redisService;
    }

    protected abstract String taskDisplayName();

    protected abstract String streamKey();

    protected abstract String groupName();

    protected abstract String consumerPrefix();

    protected abstract String threadName();

    protected abstract T parsePayload(StreamMessageId messageId, Map<String, String> data);

    protected abstract String payloadIdentifier(T payload);

    protected boolean shouldSkip(T payload) {
        return false;
    }

    protected abstract void markProcessing(T payload);

    /**
     * 尝试领取任务。默认保持原有消费者的状态更新语义。
     */
    protected boolean tryMarkProcessing(T payload) {
        markProcessing(payload);
        return true;
    }

    protected abstract void processBusiness(T payload);

    protected abstract void markCompleted(T payload);

    protected abstract void markFailed(T payload, String error);

    /**
     * 重新入队重试任务。入队失败时必须抛出异常：模板会保留原消息 pending
     * 交给回收机制重投；若吞掉异常，原消息将被 ack，任务会静默丢失。
     */
    protected abstract void retryMessage(T payload, int retryCount);
}
