package interview.guide.common.util;

/**
 * 指数退避时长计算。
 *
 * 抽成纯函数便于单测：退避时长只由「重试序号 + 基数 + 上限」决定，
 * 不涉及线程睡眠，睡眠由调用方负责。
 *
 * 背景：LLM 限流（429 tpm/rpm）是滑动窗口限流，窗口恢复前重发必然再次失败。
 * 固定间隔重试等于把重试次数全部浪费在同一个窗口内。
 */
public final class RetryBackoff {

    /**
     * 指数增长的最大位移。
     * 避免 {@code 1L << n} 在 n 很大时溢出成负数或 0。
     */
    private static final int MAX_SHIFT = 20;

    private RetryBackoff() {
    }

    /**
     * 计算第 {@code retryCount} 次重试前的等待时长。
     *
     * @param retryCount 重试序号，从 1 开始（1 表示第一次重试）
     * @param baseMillis 首次重试的等待基数（毫秒）；非正数表示不退避
     * @param maxMillis  等待上限（毫秒）；非正数表示不设上限
     * @return 等待时长（毫秒）；0 表示不等待
     */
    public static long computeMillis(int retryCount, long baseMillis, long maxMillis) {
        if (baseMillis <= 0 || retryCount <= 0) {
            return 0L;
        }
        int shift = Math.min(retryCount - 1, MAX_SHIFT);
        long backoff = baseMillis << shift;
        if (backoff <= 0) {
            // 位移溢出保护：直接退到上限；未设上限时用 Long.MAX_VALUE 兜底
            backoff = maxMillis > 0 ? maxMillis : Long.MAX_VALUE;
        }
        return maxMillis > 0 ? Math.min(backoff, maxMillis) : backoff;
    }
}
