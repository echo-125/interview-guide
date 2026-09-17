package interview.guide.common.ai;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.ai.chat.client.ChatClientRequest;
import org.springframework.ai.chat.client.ChatClientResponse;
import org.springframework.ai.chat.client.advisor.api.CallAdvisorChain;
import org.springframework.ai.chat.messages.AssistantMessage;
import org.springframework.ai.chat.metadata.ChatGenerationMetadata;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@DisplayName("LLM 原始响应诊断 Advisor")
class LlmResponseDiagnosticsAdvisorTest {

    private ChatClientRequest request() {
        return mock(ChatClientRequest.class);
    }

    private CallAdvisorChain chainReturning(ChatClientResponse response) {
        CallAdvisorChain chain = mock(CallAdvisorChain.class);
        when(chain.nextCall(any())).thenReturn(response);
        return chain;
    }

    private ChatClientResponse responseWith(String text, String finishReason) {
        AssistantMessage message = new AssistantMessage(text);
        ChatGenerationMetadata genMetadata = ChatGenerationMetadata.builder()
            .finishReason(finishReason)
            .build();
        Generation generation = new Generation(message, genMetadata);
        ChatResponse chatResponse = new ChatResponse(List.of(generation));
        return new ChatClientResponse(chatResponse, java.util.Map.of());
    }

    @Test
    @DisplayName("原样透传响应，不影响主流程")
    void passesResponseThrough() {
        LlmResponseDiagnosticsAdvisor advisor = new LlmResponseDiagnosticsAdvisor(100);
        ChatClientResponse expected = responseWith("{}", "stop");
        CallAdvisorChain chain = chainReturning(expected);

        ChatClientResponse actual = advisor.adviseCall(request(), chain);

        assertThat(actual).isSameAs(expected);
        verify(chain).nextCall(any());
    }

    @Test
    @DisplayName("响应为 null 时不抛异常")
    void nullResponseIsSafe() {
        LlmResponseDiagnosticsAdvisor advisor = new LlmResponseDiagnosticsAdvisor(100);
        CallAdvisorChain chain = chainReturning(null);

        assertThatCode(() -> advisor.adviseCall(request(), chain)).doesNotThrowAnyException();
    }

    @Test
    @DisplayName("results 为空时不抛异常")
    void emptyResultsIsSafe() {
        LlmResponseDiagnosticsAdvisor advisor = new LlmResponseDiagnosticsAdvisor(100);
        ChatResponse chatResponse = new ChatResponse(List.of());
        CallAdvisorChain chain = chainReturning(new ChatClientResponse(chatResponse, java.util.Map.of()));

        assertThatCode(() -> advisor.adviseCall(request(), chain)).doesNotThrowAnyException();
    }

    @Test
    @DisplayName("输出为空字符串时记录 finishReason，不抛异常")
    void emptyTextIsSafe() {
        LlmResponseDiagnosticsAdvisor advisor = new LlmResponseDiagnosticsAdvisor(100);
        CallAdvisorChain chain = chainReturning(responseWith("", "length"));

        assertThatCode(() -> advisor.adviseCall(request(), chain)).doesNotThrowAnyException();
    }

    @Test
    @DisplayName("超长文本只记录片段，不整体打印")
    void longTextIsTruncated() {
        LlmResponseDiagnosticsAdvisor advisor = new LlmResponseDiagnosticsAdvisor(100);
        String huge = "x".repeat(50_000);
        CallAdvisorChain chain = chainReturning(responseWith(huge, "stop"));

        assertThatCode(() -> advisor.adviseCall(request(), chain)).doesNotThrowAnyException();
    }

    @Test
    @DisplayName("getOrder 返回构造时传入的 order")
    void exposesOrder() {
        assertThat(new LlmResponseDiagnosticsAdvisor(2147483597).getOrder()).isEqualTo(2147483597);
    }
}
