package interview.guide.common.async;

import interview.guide.common.constant.AsyncTaskStreamConstants;
import interview.guide.infrastructure.redis.RedisService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.redisson.api.stream.StreamMessageId;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;

@DisplayName("Stream 消费者重试退避")
class AbstractStreamConsumerTest {

    /**
     * 测试用消费者：记录退避时长并立即返回，避免真的睡满退避时间。
     * 通过 processBusiness 抛异常驱动重试路径。
     */
    private static class TestConsumer extends AbstractStreamConsumer<String> {

        final List<Long> backoffs = new ArrayList<>();
        final List<Integer> retriedCounts = new ArrayList<>();
        boolean interruptBackoff = false;

        TestConsumer() {
            super(mock(RedisService.class));
        }

        @Override
        protected boolean sleepForBackoff(long millis, String payload) {
            if (millis > 0) {
                backoffs.add(millis);
            }
            return !interruptBackoff;
        }

        @Override
        protected String taskDisplayName() {
            return "测试任务";
        }

        @Override
        protected String streamKey() {
            return "test:stream";
        }

        @Override
        protected String groupName() {
            return "test-group";
        }

        @Override
        protected String consumerPrefix() {
            return "test-consumer-";
        }

        @Override
        protected String threadName() {
            return "test-consumer";
        }

        @Override
        protected String parsePayload(StreamMessageId messageId, Map<String, String> data) {
            return data.get("id");
        }

        @Override
        protected String payloadIdentifier(String payload) {
            return "id=" + payload;
        }

        @Override
        protected void markProcessing(String payload) {
        }

        @Override
        protected void processBusiness(String payload) {
            throw new RuntimeException("429: inference exceeds tpm/rpm limit");
        }

        @Override
        protected void markCompleted(String payload) {
        }

        @Override
        protected void markFailed(String payload, String error) {
        }

        @Override
        protected void retryMessage(String payload, int retryCount) {
            retriedCounts.add(retryCount);
        }
    }

    /**
     * 模拟 Stream 重投语义：一次 processMessage 失败后只重投一次，
     * 重投的消息由消费循环再次拉取处理。这里循环驱动直到不再重投。
     */
    private static void driveUntilRetryExhausted(TestConsumer consumer, int initialRetryCount) {
        int retryCount = initialRetryCount;
        for (int round = 0; round <= AsyncTaskStreamConstants.MAX_RETRY_COUNT + 1; round++) {
            int before = consumer.retriedCounts.size();
            consumer.processMessage(
                StreamMessageId.ALL, payloadWithRetry(String.valueOf(retryCount)));
            if (consumer.retriedCounts.size() == before) {
                return;
            }
            retryCount = consumer.retriedCounts.getLast();
        }
        throw new AssertionError("重投未收敛，疑似死循环");
    }

    private static Map<String, String> payloadWithRetry(String retryCount) {
        return Map.of("id", "1", AsyncTaskStreamConstants.FIELD_RETRY_COUNT, retryCount);
    }

    @Test
    @DisplayName("重投前按指数退避，避免把重试次数消耗在同一个限流窗口内")
    void retriesWithExponentialBackoff() {
        TestConsumer consumer = new TestConsumer();

        driveUntilRetryExhausted(consumer, 0);

        long base = AsyncTaskStreamConstants.RETRY_BASE_BACKOFF_MS;
        assertThat(consumer.backoffs).containsExactly(base, base * 2, base * 4);
    }

    @Test
    @DisplayName("退避上限不超过 pending 回收阈值，避免任务被重复认领")
    void backoffNeverExceedsPendingIdleTimeout() {
        TestConsumer consumer = new TestConsumer();

        driveUntilRetryExhausted(consumer, 0);

        assertThat(consumer.backoffs)
            .isNotEmpty()
            .allSatisfy(millis -> assertThat(millis)
                .isLessThanOrEqualTo(AsyncTaskStreamConstants.PENDING_IDLE_TIMEOUT_MS));
    }

    @Test
    @DisplayName("每次重投的 retryCount 递增且不超过最大重试次数")
    void retryCountIncrementsWithinLimit() {
        TestConsumer consumer = new TestConsumer();

        driveUntilRetryExhausted(consumer, 0);

        assertThat(consumer.retriedCounts).containsExactly(1, 2, 3);
        assertThat(consumer.retriedCounts)
            .allSatisfy(count -> assertThat(count)
                .isLessThanOrEqualTo(AsyncTaskStreamConstants.MAX_RETRY_COUNT));
    }

    @Test
    @DisplayName("退避被中断时停止重投，不继续消耗重试次数")
    void interruptedBackoffStopsRetrying() {
        TestConsumer consumer = new TestConsumer();
        consumer.interruptBackoff = true;

        driveUntilRetryExhausted(consumer, 0);

        assertThat(consumer.backoffs).hasSize(1);
        assertThat(consumer.retriedCounts).isEmpty();
    }

    @Test
    @DisplayName("已达到最大重试次数时不再退避，直接标记失败")
    void noBackoffWhenRetryLimitReached() {
        TestConsumer consumer = new TestConsumer();

        driveUntilRetryExhausted(consumer, AsyncTaskStreamConstants.MAX_RETRY_COUNT);

        assertThat(consumer.backoffs).isEmpty();
        assertThat(consumer.retriedCounts).isEmpty();
    }

    @Test
    @DisplayName("入队越晚等待越久：retryCount=1 的首次退避等于 retryCount=0 的第二次退避")
    void backoffGrowsWithIncomingRetryCount() {
        TestConsumer fromZero = new TestConsumer();
        TestConsumer fromOne = new TestConsumer();

        driveUntilRetryExhausted(fromZero, 0);
        driveUntilRetryExhausted(fromOne, 1);

        assertThat(fromOne.backoffs.getFirst()).isEqualTo(fromZero.backoffs.get(1));
    }
}
