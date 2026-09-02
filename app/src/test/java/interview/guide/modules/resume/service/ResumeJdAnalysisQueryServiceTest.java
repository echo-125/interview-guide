package interview.guide.modules.resume.service;

import interview.guide.common.ai.PromptSanitizer;
import interview.guide.common.config.LlmProviderProperties;
import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.modules.resume.listener.ResumeJdAnalysisStreamProducer;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeJdAnalysisEntity;
import interview.guide.modules.resume.repository.ResumeJdAnalysisRepository;
import interview.guide.modules.resume.repository.ResumeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tools.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ResumeJdAnalysisQueryServiceTest {

  @Mock
  private ResumeRepository resumeRepository;

  @Mock
  private ResumeJdAnalysisRepository jdAnalysisRepository;

  @Mock
  private ResumeJdAnalysisStreamProducer jdAnalysisStreamProducer;

  private ResumeJdAnalysisQueryService service;

  @BeforeEach
  void setUp() {
    // LlmProviderProperties 默认开启 prompt sanitizer，走真实净化与边界包裹逻辑
    service = new ResumeJdAnalysisQueryService(
        resumeRepository,
        jdAnalysisRepository,
        jdAnalysisStreamProducer,
        new ObjectMapper(),
        new PromptSanitizer(new LlmProviderProperties()));
  }

  private ResumeJdAnalysisEntity completedEntity(Long analysisId, String skillGapsJson, String weaknessesJson) {
    ResumeEntity resume = new ResumeEntity();
    resume.setId(1L);

    ResumeJdAnalysisEntity entity = new ResumeJdAnalysisEntity();
    entity.setId(analysisId);
    entity.setResume(resume);
    entity.setJdText("JD 文本");
    entity.setAnalysisStatus(AsyncTaskStatus.COMPLETED);
    entity.setSkillGapsJson(skillGapsJson);
    entity.setWeaknessesJson(weaknessesJson);
    entity.setRecommendationsJson("[]");
    return entity;
  }

  @Test
  @DisplayName("没有已完成的诊断记录时返回空串，出题行为保持不变")
  void shouldReturnEmptyWhenNoCompletedAnalysis() {
    when(jdAnalysisRepository.findFirstByResumeIdAndAnalysisStatusOrderByIdDesc(1L, AsyncTaskStatus.COMPLETED))
        .thenReturn(Optional.empty());

    assertThat(service.buildWeaknessSection(1L)).isEmpty();
  }

  @Test
  @DisplayName("有诊断记录时构建包含技能缺口与薄弱点的文本段落，并用边界分隔符包裹")
  void shouldBuildWeaknessSectionWithGapsAndWeaknesses() {
    when(jdAnalysisRepository.findFirstByResumeIdAndAnalysisStatusOrderByIdDesc(1L, AsyncTaskStatus.COMPLETED))
        .thenReturn(Optional.of(completedEntity(
            10L,
            "[{\"gapSkill\":\"Kafka\",\"jdRequirement\":\"高吞吐消息\",\"resumeEvidence\":\"未提及\",\"severity\":\"高\"}]",
            "[{\"area\":\"JVM 调优\",\"description\":\"深度不足\",\"advice\":\"复习 GC 日志\"}]"
        )));

    String section = service.buildWeaknessSection(1L);

    assertThat(section).contains("候选人薄弱点与技能缺口");
    assertThat(section).contains("Kafka").contains("严重程度：高");
    assertThat(section).contains("JVM 调优");
    assertThat(section).contains("<data-boundary-").contains("</data-boundary-");
  }

  @Test
  @DisplayName("诊断数据为空列表时返回空串，不注入空段落")
  void shouldReturnEmptyWhenListsBlank() {
    when(jdAnalysisRepository.findFirstByResumeIdAndAnalysisStatusOrderByIdDesc(1L, AsyncTaskStatus.COMPLETED))
        .thenReturn(Optional.of(completedEntity(10L, "[]", "[]")));

    assertThat(service.buildWeaknessSection(1L)).isEmpty();
  }

  @Test
  @DisplayName("JSON 解析失败时降级返回空串，不阻断出题")
  void shouldFallbackToEmptyWhenJsonBroken() {
    when(jdAnalysisRepository.findFirstByResumeIdAndAnalysisStatusOrderByIdDesc(1L, AsyncTaskStatus.COMPLETED))
        .thenReturn(Optional.of(completedEntity(10L, "not-a-json", "[]")));

    assertThat(service.buildWeaknessSection(1L)).isEmpty();
  }

  @Test
  @DisplayName("startAnalysis：创建 PENDING 记录并投递异步任务")
  void shouldCreatePendingRecordAndDispatchTask() {
    ResumeEntity resume = new ResumeEntity();
    resume.setId(1L);
    resume.setResumeText("简历文本");
    when(resumeRepository.findById(1L)).thenReturn(Optional.of(resume));
    when(jdAnalysisRepository.save(any())).thenAnswer(inv -> {
      interview.guide.modules.resume.model.ResumeJdAnalysisEntity entity = inv.getArgument(0);
      entity.setId(99L);
      return entity;
    });

    var response = service.startAnalysis(1L,
        new interview.guide.modules.resume.model.ResumeJdAnalysisRequest("目标岗位 JD", " provider-1 "));

    assertThat(response.analysisStatus()).isEqualTo(AsyncTaskStatus.PENDING);
    assertThat(response.matchScore()).isNull();
    ArgumentCaptor<ResumeJdAnalysisEntity> captor = ArgumentCaptor.forClass(ResumeJdAnalysisEntity.class);
    verify(jdAnalysisRepository).save(captor.capture());
    assertThat(captor.getValue().getLlmProvider()).isEqualTo("provider-1");
    verify(jdAnalysisStreamProducer).sendJdAnalyzeTask(captor.getValue().getId(), "provider-1");
  }
}
