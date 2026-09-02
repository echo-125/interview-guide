package interview.guide.modules.resume.listener;

import interview.guide.common.exception.BusinessException;
import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.infrastructure.redis.RedisService;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeJdAnalysisEntity;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse;
import interview.guide.modules.resume.repository.ResumeJdAnalysisRepository;
import interview.guide.modules.resume.repository.ResumeRepository;
import interview.guide.modules.resume.service.ResumeJdAnalysisService;
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
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ResumeJdAnalysisStreamConsumerTest {

  @Mock
  private RedisService redisService;

  @Mock
  private ResumeJdAnalysisService jdAnalysisService;

  @Mock
  private ResumeJdAnalysisRepository jdAnalysisRepository;

  @Mock
  private ResumeRepository resumeRepository;

  private ResumeJdAnalysisStreamConsumer consumer;

  @BeforeEach
  void setUp() {
    consumer = new ResumeJdAnalysisStreamConsumer(
        redisService, jdAnalysisService, jdAnalysisRepository, resumeRepository, new ObjectMapper());
  }

  private ResumeJdAnalysisEntity pendingEntity(Long analysisId, Long resumeId) {
    ResumeEntity resume = new ResumeEntity();
    resume.setId(resumeId);
    resume.setResumeText("候选人简历文本");

    ResumeJdAnalysisEntity entity = new ResumeJdAnalysisEntity();
    entity.setId(analysisId);
    entity.setResume(resume);
    entity.setJdText("目标岗位 JD 文本");
    entity.setAnalysisStatus(AsyncTaskStatus.PENDING);
    return entity;
  }

  @Test
  @DisplayName("正常消费：调用分析服务并把结果写回诊断记录")
  void shouldAnalyzeAndPersistResult() {
    ResumeJdAnalysisEntity entity = pendingEntity(10L, 1L);
    when(jdAnalysisRepository.findById(10L)).thenReturn(Optional.of(entity));
    when(resumeRepository.findById(1L)).thenReturn(Optional.of(entity.getResume()));
    when(jdAnalysisService.analyze(eq("候选人简历文本"), eq("目标岗位 JD 文本"), eq("provider-1")))
        .thenReturn(new ResumeJdAnalysisResponse(
            null, null, null, 66, "匹配一般",
            List.of(new ResumeJdAnalysisResponse.SkillGap("Kafka", "JD 要求", "简历未提及", "高")),
            List.of(), List.of("Kafka 入门"),
            AsyncTaskStatus.COMPLETED, null, null));

    consumer.processBusiness(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(10L, "provider-1"));

    ArgumentCaptor<ResumeJdAnalysisEntity> captor = ArgumentCaptor.forClass(ResumeJdAnalysisEntity.class);
    verify(jdAnalysisRepository).save(captor.capture());
    ResumeJdAnalysisEntity saved = captor.getValue();
    assertThat(saved.getMatchScore()).isEqualTo(66);
    assertThat(saved.getSkillGapsJson()).contains("Kafka");
    assertThat(saved.getWeaknessesJson()).isEqualTo("[]");
    assertThat(saved.getRecommendationsJson()).contains("Kafka 入门");
  }

  @Test
  @DisplayName("简历已被删除时抛业务异常，交给模板走 markFailed 而非误标 COMPLETED")
  void shouldFailWhenResumeDeleted() {
    ResumeJdAnalysisEntity entity = pendingEntity(10L, 99L);
    when(jdAnalysisRepository.findById(10L)).thenReturn(Optional.of(entity));
    when(resumeRepository.findById(99L)).thenReturn(Optional.empty());

    assertThatThrownBy(() -> consumer.processBusiness(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(10L, "provider-1")))
        .isInstanceOf(BusinessException.class)
        .hasMessageContaining("简历已被删除");
    verify(jdAnalysisService, never()).analyze(anyString(), anyString(), any());
    verify(jdAnalysisRepository, never()).save(any());
  }

  @Test
  @DisplayName("JD 内容为空时抛业务异常，交给模板走重试/失败流程")
  void shouldFailWhenJdTextBlank() {
    ResumeJdAnalysisEntity entity = pendingEntity(10L, 1L);
    entity.setJdText("   ");
    when(jdAnalysisRepository.findById(10L)).thenReturn(Optional.of(entity));
    when(resumeRepository.findById(1L)).thenReturn(Optional.of(entity.getResume()));

    assertThatThrownBy(() -> consumer.processBusiness(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(10L, null)))
        .isInstanceOf(BusinessException.class)
        .hasMessageContaining("JD 内容为空");
    verify(jdAnalysisService, never()).analyze(anyString(), anyString(), any());
  }

  @Test
  @DisplayName("markFailed 将诊断记录置为 FAILED 并记录错误")
  void shouldMarkEntityFailed() {
    when(jdAnalysisRepository.findById(10L)).thenReturn(Optional.of(pendingEntity(10L, 1L)));

    consumer.markFailed(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(10L, null), "分析失败原因");

    ArgumentCaptor<ResumeJdAnalysisEntity> captor = ArgumentCaptor.forClass(ResumeJdAnalysisEntity.class);
    verify(jdAnalysisRepository).save(captor.capture());
    assertThat(captor.getValue().getAnalysisStatus()).isEqualTo(AsyncTaskStatus.FAILED);
    assertThat(captor.getValue().getAnalysisError()).isEqualTo("分析失败原因");
  }

  @Test
  @DisplayName("markCompleted 将诊断记录置为 COMPLETED 并清空错误")
  void shouldMarkEntityCompleted() {
    when(jdAnalysisRepository.findById(10L)).thenReturn(Optional.of(pendingEntity(10L, 1L)));

    consumer.markCompleted(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(10L, null));

    ArgumentCaptor<ResumeJdAnalysisEntity> captor = ArgumentCaptor.forClass(ResumeJdAnalysisEntity.class);
    verify(jdAnalysisRepository).save(captor.capture());
    assertThat(captor.getValue().getAnalysisStatus()).isEqualTo(AsyncTaskStatus.COMPLETED);
    assertThat(captor.getValue().getAnalysisError()).isNull();
  }

  @Test
  @DisplayName("shouldSkip：记录已完成时跳过，记录不存在时也跳过")
  void shouldSkipCompletedOrMissingEntity() {
    ResumeJdAnalysisEntity completed = pendingEntity(10L, 1L);
    completed.setAnalysisStatus(AsyncTaskStatus.COMPLETED);
    when(jdAnalysisRepository.findById(10L)).thenReturn(Optional.of(completed));
    when(jdAnalysisRepository.findById(11L)).thenReturn(Optional.empty());

    assertThat(consumer.shouldSkip(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(10L, null))).isTrue();
    assertThat(consumer.shouldSkip(new ResumeJdAnalysisStreamConsumer.JdAnalyzePayload(11L, null))).isTrue();
  }
}
