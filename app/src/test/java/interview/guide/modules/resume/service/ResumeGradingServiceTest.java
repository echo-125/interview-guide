package interview.guide.modules.resume.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ResourceLoader;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("ResumeGradingService 测试")
class ResumeGradingServiceTest {

  @Mock
  private LlmProviderRegistry llmProviderRegistry;

  @Mock
  private StructuredOutputInvoker structuredOutputInvoker;

  @Mock
  private ResourceLoader resourceLoader;

  private ResumeGradingService service;

  @BeforeEach
  void setUp() throws IOException {
    when(resourceLoader.getResource(anyString())).thenAnswer(inv ->
        new ByteArrayResource("测试提示词".getBytes(StandardCharsets.UTF_8)));
    service = new ResumeGradingService(
        llmProviderRegistry,
        structuredOutputInvoker,
        new ResumeAnalysisProperties(),
        resourceLoader,
        mock(ResumeTermChecker.class)
    );
  }

  @Test
  @DisplayName("AI 调用失败时抛出业务异常并保留原始错误信息")
  void shouldThrowBusinessExceptionWhenAiFails() {
    when(llmProviderRegistry.getPlainChatClient(any())).thenReturn(mock(ChatClient.class));
    when(structuredOutputInvoker.invoke(
        any(ChatClient.class), anyString(), anyString(), any(), eq(ErrorCode.RESUME_ANALYSIS_FAILED),
        anyString(), anyString(), any(Logger.class)
    )).thenThrow(new RuntimeException("模型超时"));

    assertThatThrownBy(() -> service.analyzeResume("简历文本"))
        .isInstanceOf(BusinessException.class)
        .hasMessageContaining("简历分析失败")
        .hasMessageContaining("模型超时");
  }

  @Test
  @DisplayName("StructuredOutputInvoker 抛业务异常时不再叠加失败前缀")
  void shouldNotDuplicatePrefixWhenInvokerThrowsBusinessException() {
    when(llmProviderRegistry.getPlainChatClient(any())).thenReturn(mock(ChatClient.class));
    // Invoker 内部已拼好「简历分析失败：」前缀，Service 不得再包一层，
    // 否则用户会看到「简历分析失败：简历分析失败：简历分析失败：400...」
    when(structuredOutputInvoker.invoke(
        any(ChatClient.class), anyString(), anyString(), any(), eq(ErrorCode.RESUME_ANALYSIS_FAILED),
        anyString(), anyString(), any(Logger.class)
    )).thenThrow(new BusinessException(
        ErrorCode.RESUME_ANALYSIS_FAILED, "简历分析失败：400: field Temperature invalid"));

    assertThatThrownBy(() -> service.analyzeResume("简历文本"))
        .isInstanceOf(BusinessException.class)
        .hasMessage("简历分析失败：400: field Temperature invalid");
  }
}
