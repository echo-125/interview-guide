package interview.guide.common.ai;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "app.ai")
public class StructuredOutputProperties {

    private int structuredMaxAttempts = 2;
    private boolean structuredIncludeLastError = true;
    private boolean structuredRetryUseRepairPrompt = true;
    private boolean structuredRetryAppendStrictJsonInstruction = true;
    private int structuredErrorMessageMaxLength = 200;
    private boolean structuredMetricsEnabled = true;
    private boolean structuredSchemaValidationEnabled = true;

    /**
     * 限流（429 tpm/rpm）退避重试的首次等待基数（毫秒）。
     *
     * 与结构化重试额度相互独立：限流是服务端配额窗口未恢复，重发同一提示词才有意义，
     * 因此不消耗 structuredMaxAttempts，也不注入修复提示词。
     * 设为 0 表示限流不退避（保留旧行为：立即重试）。
     */
    private long structuredRateLimitBaseBackoffMillis = 60_000;

    /**
     * 限流退避等待上限（毫秒），防止指数增长到不可接受的时长。
     *
     * 上限需明显小于 {@code AsyncTaskStreamConstants.PENDING_IDLE_TIMEOUT_MS}（5 分钟）：
     * 异步场景下整个 processMessage 期间原消息保持 pending，一旦总耗时超过该阈值，
     * 同组其他消费者会把它当作空闲超时认领走，造成同一任务被并发分析（重复消耗配额）。
     * 这里刻意压到 90 秒，把「更长时间的等待」交给外层 Stream 重投退避处理。
     */
    private long structuredRateLimitMaxBackoffMillis = 90_000;

    /**
     * 限流退避重试的最大次数。超出后按失败返回，避免无限等待。
     *
     * 时间预算必须小于 {@code PENDING_IDLE_TIMEOUT_MS}（300s），否则整个 processMessage
     * 期间消息一直处于 pending，会被同组其他消费者当作空闲超时认领走，导致重复分析。
     * 按默认值算最坏组合（限流 1 次 + 格式修复 1 次）：
     * 3 次 LLM 调用（约 180s）+ 1 次退避（60s）= 约 240s，仍在 300s 之内。
     * 更长时间的等待交由外层 Stream 重投退避承担，那里每次重投都会重置 pending 计时。
     */
    private int structuredRateLimitMaxRetries = 1;
}
