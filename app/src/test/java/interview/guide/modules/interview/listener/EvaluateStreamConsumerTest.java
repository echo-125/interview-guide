package interview.guide.modules.interview.listener;

import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.infrastructure.redis.RedisService;
import interview.guide.modules.interview.model.InterviewSessionEntity;
import interview.guide.modules.interview.repository.InterviewSessionRepository;
import interview.guide.modules.interview.service.AnswerEvaluationService;
import interview.guide.modules.interview.service.InterviewPersistenceService;
import interview.guide.common.ai.LlmProviderRegistry;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import tools.jackson.databind.ObjectMapper;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/**
 * 回归测试：评估任务重试前必须把 DB 状态放回 FAILED。
 *
 * <p>领取走 {@code claimEvaluation} 的 CAS，只接受 PENDING/FAILED。若重投时状态仍停留在
 * PROCESSING，重试消息永远领取失败、既不处理也不 ACK，会被回收机制反复捞起形成死循环。
 */
@ExtendWith(MockitoExtension.class)
@DisplayName("EvaluateStreamConsumer 重试状态复位")
class EvaluateStreamConsumerTest {

    @Mock private RedisService redisService;
    @Mock private InterviewSessionRepository sessionRepository;
    @Mock private AnswerEvaluationService evaluationService;
    @Mock private InterviewPersistenceService persistenceService;
    @Mock private LlmProviderRegistry llmProviderRegistry;

    private EvaluateStreamConsumer consumer;

    @BeforeEach
    void setUp() {
        consumer = new EvaluateStreamConsumer(
            redisService, sessionRepository, evaluationService, persistenceService,
            new ObjectMapper(), llmProviderRegistry);
    }

    @Test
    @DisplayName("重试入队前先把状态置为 FAILED，使 CAS 可以再次领取")
    void retryResetsStatusBeforeEnqueue() {
        InterviewSessionEntity session = new InterviewSessionEntity();
        session.setSessionId("session-1");
        session.setEvaluateStatus(AsyncTaskStatus.PROCESSING);
        when(sessionRepository.findBySessionId("session-1")).thenReturn(Optional.of(session));

        consumer.retryMessage(new EvaluateStreamConsumer.EvaluatePayload("session-1"), 1);

        assertThat(session.getEvaluateStatus())
            .as("重试前状态必须回到 FAILED，否则 claimEvaluation 的 CAS（PENDING/FAILED）永远失配")
            .isEqualTo(AsyncTaskStatus.FAILED);
        verify(sessionRepository).save(session);
        verify(redisService).streamAdd(
            eq("interview:evaluate:stream"), anyMap(), anyInt());
    }

    @Test
    @DisplayName("重试入队失败时仍保留 FAILED 状态，不把任务留在 PROCESSING")
    void retryKeepsFailedStatusWhenEnqueueFails() {
        InterviewSessionEntity session = new InterviewSessionEntity();
        session.setSessionId("session-2");
        session.setEvaluateStatus(AsyncTaskStatus.PROCESSING);
        when(sessionRepository.findBySessionId("session-2")).thenReturn(Optional.of(session));
        when(redisService.streamAdd(anyString(), anyMap(), anyInt()))
            .thenThrow(new IllegalStateException("redis down"));

        try {
            consumer.retryMessage(new EvaluateStreamConsumer.EvaluatePayload("session-2"), 2);
        } catch (Exception ignored) {
            // 模板会重抛给上层，这里只关注状态
        }

        assertThat(session.getEvaluateStatus()).isEqualTo(AsyncTaskStatus.FAILED);
        assertThat(session.getEvaluateError()).contains("重试入队失败");
    }

    @Test
    @DisplayName("会话不存在时不因重置状态而报错")
    void retryToleratesMissingSession() {
        when(sessionRepository.findBySessionId("missing")).thenReturn(Optional.empty());

        consumer.retryMessage(new EvaluateStreamConsumer.EvaluatePayload("missing"), 1);

        verify(sessionRepository, never()).save(any());
    }
}
