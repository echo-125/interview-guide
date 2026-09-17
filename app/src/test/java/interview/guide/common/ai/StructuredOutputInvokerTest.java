package interview.guide.common.ai;

import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.BeanOutputConverter;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@DisplayName("结构化输出调用器：限流退避与重试额度隔离")
class StructuredOutputInvokerTest {

    private static final Logger LOG = LoggerFactory.getLogger(StructuredOutputInvokerTest.class);
    private static final String RATE_LIMIT_MESSAGE = "429: inference exceeds tpm/rpm limit";

    private StructuredOutputProperties properties;
    private ChatClient.ChatClientRequestSpec requestSpec;
    private ChatClient.CallResponseSpec callResponseSpec;
    private BeanOutputConverter<String> converter;

    /** 记录退避时长并立即返回，避免测试真的睡满退避时间 */
    private static class RecordingInvoker extends StructuredOutputInvoker {

        private final List<Long> backoffs = new ArrayList<>();
        private boolean interrupted = false;

        RecordingInvoker(StructuredOutputProperties properties) {
            super(properties, null);
        }

        @Override
        boolean sleepForBackoff(long millis, String logContext, Logger log) {
            // 与父类语义保持一致：非正数表示不退避，不计入退避记录
            if (millis > 0) {
                backoffs.add(millis);
            }
            return !interrupted;
        }
    }

    @BeforeEach
    @SuppressWarnings("unchecked")
    void setUp() {
        properties = new StructuredOutputProperties();
        // 走 content() + 本地解析路径，测试聚焦重试编排本身
        properties.setStructuredSchemaValidationEnabled(false);
        properties.setStructuredMetricsEnabled(false);
        properties.setStructuredMaxAttempts(2);
        properties.setStructuredRateLimitBaseBackoffMillis(60_000);
        properties.setStructuredRateLimitMaxBackoffMillis(180_000);
        properties.setStructuredRateLimitMaxRetries(2);

        requestSpec = mock(ChatClient.ChatClientRequestSpec.class);
        callResponseSpec = mock(ChatClient.CallResponseSpec.class);
        when(requestSpec.system(anyString())).thenReturn(requestSpec);
        when(requestSpec.user(anyString())).thenReturn(requestSpec);
        when(requestSpec.call()).thenReturn(callResponseSpec);

        converter = mock(BeanOutputConverter.class);
    }

    private String invokeWith(ChatClient chatClient, StructuredOutputInvoker invoker) {
        return invoker.invoke(
            chatClient, "系统提示词", "用户提示词", converter,
            ErrorCode.RESUME_ANALYSIS_FAILED, "简历分析失败：", "简历分析", LOG);
    }

    private ChatClient stubChatClient() {
        ChatClient chatClient = mock(ChatClient.class);
        when(chatClient.prompt()).thenReturn(requestSpec);
        return chatClient;
    }

    @Nested
    @DisplayName("限流退避")
    class RateLimitBackoff {

        @Test
        @DisplayName("限流后先退避再重试，成功后返回结果")
        void backsOffThenSucceeds() {
            when(callResponseSpec.content())
                .thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE))
                .thenReturn("{}");
            when(converter.convert("{}")).thenReturn("parsed");
            RecordingInvoker invoker = new RecordingInvoker(properties);

            String result = invokeWith(stubChatClient(), invoker);

            assertThat(result).isEqualTo("parsed");
            assertThat(invoker.backoffs).containsExactly(60_000L);
        }

        @Test
        @DisplayName("连续限流时退避时长按指数增长")
        void backoffGrowsExponentially() {
            when(callResponseSpec.content())
                .thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE))
                .thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE))
                .thenReturn("{}");
            when(converter.convert("{}")).thenReturn("parsed");
            RecordingInvoker invoker = new RecordingInvoker(properties);

            invokeWith(stubChatClient(), invoker);

            assertThat(invoker.backoffs).containsExactly(60_000L, 120_000L);
        }

        @Test
        @DisplayName("限流重试不消耗结构化重试额度：maxAttempts=1 时仍可退避重试")
        void rateLimitDoesNotConsumeStructuredAttempts() {
            properties.setStructuredMaxAttempts(1);
            properties.setStructuredRateLimitMaxRetries(2);
            when(callResponseSpec.content())
                .thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE))
                .thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE))
                .thenReturn("{}");
            when(converter.convert("{}")).thenReturn("parsed");
            RecordingInvoker invoker = new RecordingInvoker(properties);

            String result = invokeWith(stubChatClient(), invoker);

            assertThat(result).isEqualTo("parsed");
            assertThat(invoker.backoffs).hasSize(2);
        }

        @Test
        @DisplayName("限流退避次数耗尽后抛出业务异常并保留原始限流信息")
        void exhaustedRateLimitRetriesThrows() {
            properties.setStructuredRateLimitMaxRetries(1);
            when(callResponseSpec.content()).thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE));
            RecordingInvoker invoker = new RecordingInvoker(properties);

            assertThatThrownBy(() -> invokeWith(stubChatClient(), invoker))
                .isInstanceOf(BusinessException.class)
                .hasMessageContaining("429");
            // 初始 1 次 + 退避重试 1 次
            verify(callResponseSpec, times(2)).content();
        }

        @Test
        @DisplayName("退避等待被中断时停止重试，不继续打服务端")
        void interruptedBackoffStopsRetrying() {
            properties.setStructuredRateLimitMaxRetries(3);
            when(callResponseSpec.content()).thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE));
            RecordingInvoker invoker = new RecordingInvoker(properties);
            invoker.interrupted = true;

            assertThatThrownBy(() -> invokeWith(stubChatClient(), invoker))
                .isInstanceOf(BusinessException.class);
            verify(callResponseSpec, times(1)).content();
        }

        @Test
        @DisplayName("退避基数设为 0 时不等待，保留旧的立即重试行为")
        void zeroBaseMeansNoWait() {
            properties.setStructuredRateLimitBaseBackoffMillis(0);
            when(callResponseSpec.content())
                .thenThrow(new RuntimeException(RATE_LIMIT_MESSAGE))
                .thenReturn("{}");
            when(converter.convert("{}")).thenReturn("parsed");
            RecordingInvoker invoker = new RecordingInvoker(properties);

            String result = invokeWith(stubChatClient(), invoker);

            assertThat(result).isEqualTo("parsed");
            assertThat(invoker.backoffs).isEmpty();
        }
    }

    @Nested
    @DisplayName("非限流失败仍走原有重试语义")
    class NonRateLimitRetry {

        @Test
        @DisplayName("JSON 解析失败按 maxAttempts 消耗重试额度，且不退避")
        void jsonFailureConsumesAttempts() {
            properties.setStructuredMaxAttempts(2);
            when(callResponseSpec.content()).thenReturn("not-json");
            when(converter.convert("not-json"))
                .thenThrow(new RuntimeException("Empty JSON output for validation."));
            RecordingInvoker invoker = new RecordingInvoker(properties);

            assertThatThrownBy(() -> invokeWith(stubChatClient(), invoker))
                .isInstanceOf(BusinessException.class)
                .hasMessageContaining("Empty JSON output");
            verify(callResponseSpec, times(2)).content();
            assertThat(invoker.backoffs).isEmpty();
        }

        @Test
        @DisplayName("解析失败后重试成功即返回")
        void jsonFailureThenSuccess() {
            when(callResponseSpec.content()).thenReturn("bad", "{}");
            when(converter.convert("bad"))
                .thenThrow(new RuntimeException("Empty JSON output for validation."));
            when(converter.convert("{}")).thenReturn("parsed");
            RecordingInvoker invoker = new RecordingInvoker(properties);

            String result = invokeWith(stubChatClient(), invoker);

            assertThat(result).isEqualTo("parsed");
            assertThat(invoker.backoffs).isEmpty();
        }
    }
}
