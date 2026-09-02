package interview.guide.modules.resume.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse;
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
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ResumeJdAnalysisServiceTest {

  @Mock
  private LlmProviderRegistry llmProviderRegistry;

  @Mock
  private StructuredOutputInvoker structuredOutputInvoker;

  @Mock
  private ResourceLoader resourceLoader;

  private ResumeJdAnalysisService service;

  @BeforeEach
  void setUp() throws IOException {
    when(resourceLoader.getResource(anyString())).thenAnswer(inv ->
        new ByteArrayResource("测试提示词".getBytes(StandardCharsets.UTF_8)));
    service = new ResumeJdAnalysisService(
        llmProviderRegistry, structuredOutputInvoker, new ResumeJdAnalysisProperties(), resourceLoader);
  }

  @Test
  @DisplayName("JD 匹配分析成功：返回匹配度总分、技能缺口、薄弱点与补强建议")
  void shouldReturnAnalysisResultOnSuccess() {
    ResumeJdAnalysisService.JdAnalysisResponseDTO dto =
        new ResumeJdAnalysisService.JdAnalysisResponseDTO(
            72,
            "整体匹配良好，存在两处技能缺口",
            List.of(new ResumeJdAnalysisService.SkillGapDTO(
                "Kafka", "熟悉 Kafka 高吞吐消息架构", "简历未提及", "高")),
            List.of(new ResumeJdAnalysisService.WeaknessDTO(
                "JVM 调优", "JD 要求生产调优经验，简历仅提及基础参数", "结合 GC 日志分析做专项复习")),
            List.of("JVM GC 调优实战", "Kafka 消息可靠性")
        );
    when(llmProviderRegistry.getPlainChatClient("provider-1")).thenReturn(mock(ChatClient.class));
    when(structuredOutputInvoker.invoke(
        any(ChatClient.class), anyString(), anyString(), any(), eq(ErrorCode.RESUME_JD_ANALYSIS_FAILED),
        anyString(), anyString(), any(Logger.class)
    )).thenReturn(dto);

    ResumeJdAnalysisResponse result = service.analyze("简历文本", "JD 文本", "provider-1");

    assertThat(result.matchScore()).isEqualTo(72);
    assertThat(result.summary()).isEqualTo("整体匹配良好，存在两处技能缺口");
    assertThat(result.skillGaps()).hasSize(1);
    assertThat(result.skillGaps().get(0).gapSkill()).isEqualTo("Kafka");
    assertThat(result.skillGaps().get(0).severity()).isEqualTo("高");
    assertThat(result.weaknesses()).hasSize(1);
    assertThat(result.weaknesses().get(0).advice()).contains("GC 日志");
    assertThat(result.recommendations()).containsExactly("JVM GC 调优实战", "Kafka 消息可靠性");
  }

  @Test
  @DisplayName("AI 返回的空列表字段被安全转换为空集合")
  void shouldTolerateNullListsFromAiResponse() {
    ResumeJdAnalysisService.JdAnalysisResponseDTO dto =
        new ResumeJdAnalysisService.JdAnalysisResponseDTO(85, "高度匹配", null, null, null);
    when(llmProviderRegistry.getPlainChatClient(null)).thenReturn(mock(ChatClient.class));
    when(structuredOutputInvoker.invoke(
        any(ChatClient.class), anyString(), anyString(), any(), eq(ErrorCode.RESUME_JD_ANALYSIS_FAILED),
        anyString(), anyString(), any(Logger.class)
    )).thenReturn(dto);

    ResumeJdAnalysisResponse result = service.analyze("简历文本", "JD 文本", null);

    assertThat(result.matchScore()).isEqualTo(85);
    assertThat(result.skillGaps()).isEmpty();
    assertThat(result.weaknesses()).isEmpty();
    assertThat(result.recommendations()).isEmpty();
  }

  @Test
  @DisplayName("AI 调用失败时抛出业务异常并保留原始错误信息")
  void shouldThrowBusinessExceptionWhenAiFails() {
    when(llmProviderRegistry.getPlainChatClient("provider-1")).thenReturn(mock(ChatClient.class));
    when(structuredOutputInvoker.invoke(
        any(ChatClient.class), anyString(), anyString(), any(), eq(ErrorCode.RESUME_JD_ANALYSIS_FAILED),
        anyString(), anyString(), any(Logger.class)
    )).thenThrow(new RuntimeException("模型超时"));

    assertThatThrownBy(() -> service.analyze("简历文本", "JD 文本", "provider-1"))
        .isInstanceOf(BusinessException.class)
        .hasMessageContaining("JD 匹配分析失败")
        .hasMessageContaining("模型超时");
  }
}
