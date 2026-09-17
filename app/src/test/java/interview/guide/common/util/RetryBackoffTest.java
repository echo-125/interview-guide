package interview.guide.common.util;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("重试退避时长计算")
class RetryBackoffTest {

    @Nested
    @DisplayName("指数增长")
    class ExponentialGrowth {

        @Test
        @DisplayName("首次重试使用基数")
        void firstRetryUsesBase() {
            assertThat(RetryBackoff.computeMillis(1, 1000, 10_000)).isEqualTo(1000);
        }

        @Test
        @DisplayName("后续重试按 2 的幂次增长")
        void subsequentRetriesDouble() {
            assertThat(RetryBackoff.computeMillis(2, 1000, 100_000)).isEqualTo(2000);
            assertThat(RetryBackoff.computeMillis(3, 1000, 100_000)).isEqualTo(4000);
            assertThat(RetryBackoff.computeMillis(4, 1000, 100_000)).isEqualTo(8000);
        }

        @Test
        @DisplayName("超过上限后被截断到上限，不会无限增长")
        void cappedAtMax() {
            assertThat(RetryBackoff.computeMillis(10, 1000, 30_000)).isEqualTo(30_000);
            assertThat(RetryBackoff.computeMillis(100, 1000, 30_000)).isEqualTo(30_000);
        }
    }

    @Nested
    @DisplayName("边界与关闭退避")
    class EdgeCases {

        @Test
        @DisplayName("基数为 0 或负数表示不退避")
        void nonPositiveBaseMeansNoBackoff() {
            assertThat(RetryBackoff.computeMillis(1, 0, 10_000)).isZero();
            assertThat(RetryBackoff.computeMillis(3, -5, 10_000)).isZero();
        }

        @Test
        @DisplayName("重试序号非正数时不退避")
        void nonPositiveRetryCountMeansNoBackoff() {
            assertThat(RetryBackoff.computeMillis(0, 1000, 10_000)).isZero();
            assertThat(RetryBackoff.computeMillis(-1, 1000, 10_000)).isZero();
        }

        @Test
        @DisplayName("未设上限时按指数增长")
        void noMaxGrowsExponentially() {
            long result = RetryBackoff.computeMillis(5, 1000, 0);

            assertThat(result).isEqualTo(16_000);
        }

        @Test
        @DisplayName("极大的重试序号被截断到上限，不会溢出为负数")
        void hugeRetryCountCappedAtMax() {
            assertThat(RetryBackoff.computeMillis(64, 1000, 60_000)).isEqualTo(60_000);
            assertThat(RetryBackoff.computeMillis(1000, 1000, 60_000)).isEqualTo(60_000);
        }

        @Test
        @DisplayName("位移真正溢出时不返回负数")
        void realOverflowDoesNotReturnNegative() {
            // 基数取 Long.MAX_VALUE/2，位移 2 位（retryCount=3）必然溢出为负数
            long hugeBase = Long.MAX_VALUE / 2;

            assertThat(RetryBackoff.computeMillis(3, hugeBase, 0)).isPositive();
            assertThat(RetryBackoff.computeMillis(3, hugeBase, 60_000)).isEqualTo(60_000);
        }
    }
}
