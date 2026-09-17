package interview.guide.common.ai;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("AI 调用异常分类")
class AiErrorClassifierTest {

    @Nested
    @DisplayName("限流识别")
    class RateLimitDetection {

        @Test
        @DisplayName("实测出现的 429 限流文案能被识别")
        void detectsRealWorldMessages() {
            // 这两条是日志中真实出现过的错误文案
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("429: inference exceeds tpm/rpm limit"))).isTrue();
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("429: rpm exhausted"))).isTrue();
        }

        @Test
        @DisplayName("大小写不影响识别")
        void caseInsensitive() {
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("429 Too Many Requests"))).isTrue();
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("Rate Limit Exceeded"))).isTrue();
        }

        @Test
        @DisplayName("常见配额文案能被识别")
        void detectsQuotaMessages() {
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("insufficient_quota"))).isTrue();
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("quota exceeded for this month"))).isTrue();
        }

        @Test
        @DisplayName("异常链中任意一层命中即可识别")
        void detectsInCauseChain() {
            Exception root = new RuntimeException("429: inference exceeds tpm/rpm limit");
            Exception wrapped = new RuntimeException("AI 调用失败", root);

            assertThat(AiErrorClassifier.isRateLimited(wrapped)).isTrue();
        }
    }

    @Nested
    @DisplayName("非限流场景不误判")
    class NonRateLimitCases {

        @Test
        @DisplayName("JSON 解析失败不应被判为限流")
        void jsonErrorsAreNotRateLimited() {
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("Empty JSON output for validation."))).isFalse();
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException(
                    "Invalid JSON: Unexpected end-of-input: was expecting closing quote"))).isFalse();
        }

        @Test
        @DisplayName("普通网络错误不应被判为限流")
        void genericErrorsAreNotRateLimited() {
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("Connection reset by peer"))).isFalse();
        }

        @Test
        @DisplayName("数字片段中恰好含 429 时不误判")
        void digitFragmentDoesNotTrigger() {
            // 无词边界的 "4290" 不应被当成 HTTP 429
            assertThat(AiErrorClassifier.isRateLimited(
                new RuntimeException("token id 4290 not found"))).isFalse();
        }

        @Test
        @DisplayName("null 与空消息安全返回 false")
        void nullSafe() {
            assertThat(AiErrorClassifier.isRateLimited(null)).isFalse();
            assertThat(AiErrorClassifier.isRateLimited(new RuntimeException())).isFalse();
        }

        @Test
        @DisplayName("自引用异常链不会死循环")
        void selfReferencingCauseTerminates() {
            RuntimeException selfRef = new RuntimeException("boom") {
                @Override
                public synchronized Throwable getCause() {
                    return this;
                }
            };

            assertThat(AiErrorClassifier.isRateLimited(selfRef)).isFalse();
        }
    }
}
