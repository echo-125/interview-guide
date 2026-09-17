package interview.guide.common.ai;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("max_tokens 降档决策")
class MaxTokensDowngradeTest {

    @Nested
    @DisplayName("阶梯降档")
    class Ladder {

        @Test
        @DisplayName("按阶梯返回下一个更小的值")
        void returnsNextSmallerValue() {
            assertThat(MaxTokensDowngrade.next(65536)).isEqualTo(32768);
            assertThat(MaxTokensDowngrade.next(32768)).isEqualTo(16384);
            assertThat(MaxTokensDowngrade.next(8192)).isEqualTo(4096);
            assertThat(MaxTokensDowngrade.next(2048)).isNull();
        }

        @Test
        @DisplayName("非阶梯值也能落到下一个更小的档位")
        void nonLadderValueFallsToNextSmaller() {
            assertThat(MaxTokensDowngrade.next(20000)).isEqualTo(16384);
            assertThat(MaxTokensDowngrade.next(3000)).isEqualTo(2048);
        }

        @Test
        @DisplayName("已到最低档或入参为 null 时返回 null")
        void exhaustedLadderReturnsNull() {
            assertThat(MaxTokensDowngrade.next(1024)).isNull();
            assertThat(MaxTokensDowngrade.next(null)).isNull();
        }
    }

    @Nested
    @DisplayName("拒绝识别")
    class RejectionDetection {

        @Test
        @DisplayName("OpenAI 风格超限文案能被识别")
        void detectsOpenAiStyle() {
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(new RuntimeException(
                "max_tokens is too large: 65536. This model supports at most 16384"))).isTrue();
        }

        @Test
        @DisplayName("Anthropic 风格超限文案能被识别")
        void detectsAnthropicStyle() {
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(new RuntimeException(
                "max_tokens: 65536 > 8192, which is the maximum allowed"))).isTrue();
        }

        @Test
        @DisplayName("异常链任意一层命中即可识别")
        void detectsInCauseChain() {
            Exception root = new RuntimeException("max_tokens is too large: 65536");
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(
                new RuntimeException("AI 调用失败", root))).isTrue();
        }

        @Test
        @DisplayName("限流等其他错误不误判为 max_tokens 拒绝")
        void doesNotMatchOtherErrors() {
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(
                new RuntimeException("429: inference exceeds tpm/rpm limit"))).isFalse();
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(
                new RuntimeException("Empty JSON output for validation."))).isFalse();
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(
                new RuntimeException("Connection reset"))).isFalse();
        }

        @Test
        @DisplayName("null 与空消息安全返回 false")
        void nullSafe() {
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(null)).isFalse();
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(new RuntimeException())).isFalse();
        }

        @Test
        @DisplayName("自引用异常链不会死循环")
        void selfReferencingTerminates() {
            RuntimeException selfRef = new RuntimeException("max_tokens is too large: 65536") {
                @Override
                public synchronized Throwable getCause() {
                    return this;
                }
            };
            assertThat(MaxTokensDowngrade.isMaxTokensRejection(selfRef)).isTrue();
        }
    }

    @Nested
    @DisplayName("直接解析服务端上限")
    class ServerLimitExtraction {

        @Test
        @DisplayName("OpenAI 文案中直接取到上限，省去逐档试探")
        void parsesOpenAiLimit() {
            Throwable error = new RuntimeException(
                "max_tokens is too large: 65536. This model supports at most 16384");

            assertThat(MaxTokensDowngrade.nextCandidate(65536, error)).isEqualTo(16384);
        }

        @Test
        @DisplayName("Anthropic 文案中直接取到上限")
        void parsesAnthropicLimit() {
            Throwable error = new RuntimeException(
                "max_tokens: 65536 > 8192, which is the maximum allowed");

            // 消息里同时出现 65536 与 8192，应取严格小于当前值且最大的那个
            assertThat(MaxTokensDowngrade.nextCandidate(65536, error)).isEqualTo(8192);
        }

        @Test
        @DisplayName("解析不出可信数字时退回阶梯降档")
        void fallsBackToLadder() {
            Throwable error = new RuntimeException("max_tokens is too large");

            assertThat(MaxTokensDowngrade.nextCandidate(65536, error)).isEqualTo(32768);
        }

        @Test
        @DisplayName("忽略不合理的数字片段，避免跳到荒唐档位")
        void ignoresImplausibleNumbers() {
            // 150 小于可信下限，1000 与 9999999 中后者超上限；应取阶梯值而非这些噪声
            Throwable error = new RuntimeException("max_tokens invalid, request id 150, status 400");

            assertThat(MaxTokensDowngrade.nextCandidate(65536, error)).isEqualTo(32768);
        }
    }
}
