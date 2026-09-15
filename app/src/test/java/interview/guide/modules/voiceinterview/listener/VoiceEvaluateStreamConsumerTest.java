package interview.guide.modules.voiceinterview.listener;

import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.infrastructure.redis.RedisService;
import interview.guide.modules.voiceinterview.repository.VoiceInterviewSessionRepository;
import interview.guide.modules.voiceinterview.service.VoiceInterviewEvaluationService;
import interview.guide.modules.voiceinterview.service.VoiceInterviewService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyMap;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;

/**
 * 回归测试：语音评估任务重试前必须把 DB 状态放回 FAILED。
 *
 * <p>与面试评估消费者同源缺陷：领取走 {@code claimEvaluation} 的 CAS（PENDING/FAILED），
 * 状态若停留在 PROCESSING，重投的消息将被永久跳过且不 ACK。
 */
@ExtendWith(MockitoExtension.class)
@DisplayName("VoiceEvaluateStreamConsumer 重试状态复位")
class VoiceEvaluateStreamConsumerTest {

    @Mock private RedisService redisService;
    @Mock private VoiceInterviewService voiceInterviewService;
    @Mock private VoiceInterviewEvaluationService evaluationService;
    @Mock private VoiceInterviewSessionRepository sessionRepository;

    private VoiceEvaluateStreamConsumer consumer;

    @BeforeEach
    void setUp() {
        consumer = new VoiceEvaluateStreamConsumer(
            redisService, voiceInterviewService, evaluationService, sessionRepository);
    }

    @Test
    @DisplayName("重试入队前先把状态置为 FAILED，使 CAS 可以再次领取")
    void retryResetsStatusBeforeEnqueue() {
        consumer.retryMessage(new VoiceEvaluateStreamConsumer.VoiceEvaluatePayload(42L), 1);

        // 先复位状态，再入队；顺序错误会让重试消息在复位前被别的消费者捞走
        var inOrder = org.mockito.Mockito.inOrder(voiceInterviewService, redisService);
        inOrder.verify(voiceInterviewService).updateEvaluateStatus(
            eq(42L), eq(AsyncTaskStatus.FAILED), anyString());
        inOrder.verify(redisService).streamAdd(anyString(), anyMap(), anyInt());
    }

    @Test
    @DisplayName("重放消息携带会话 ID 与递增后的重试次数")
    void retryMessageCarriesSessionIdAndRetryCount() {
        consumer.retryMessage(new VoiceEvaluateStreamConsumer.VoiceEvaluatePayload(7L), 2);

        ArgumentCaptor<Map<String, String>> captor = ArgumentCaptor.forClass(Map.class);
        verify(redisService).streamAdd(
            eq("voice:evaluate:stream"), captor.capture(), anyInt());

        assertThat(captor.getValue())
            .containsEntry("voiceSessionId", "7")
            .containsEntry("retryCount", "2");
    }

    @Test
    @DisplayName("重试入队失败时把失败原因写回状态并重抛")
    void retryFailureRecordsErrorAndRethrows() {
        org.mockito.Mockito.doThrow(new IllegalStateException("redis down"))
            .when(redisService).streamAdd(anyString(), anyMap(), anyInt());

        try {
            consumer.retryMessage(new VoiceEvaluateStreamConsumer.VoiceEvaluatePayload(9L), 3);
            org.junit.jupiter.api.Assertions.fail("应把异常重抛给模板，保留原消息由回收机制重投");
        } catch (IllegalStateException expected) {
            // 预期
        }

        // 复位与入队失败各写一次状态，最终都必须落在 FAILED
        ArgumentCaptor<AsyncTaskStatus> statusCaptor = ArgumentCaptor.forClass(AsyncTaskStatus.class);
        ArgumentCaptor<String> errorCaptor = ArgumentCaptor.forClass(String.class);
        verify(voiceInterviewService, org.mockito.Mockito.times(2)).updateEvaluateStatus(
            eq(9L), statusCaptor.capture(), errorCaptor.capture());

        assertThat(statusCaptor.getAllValues())
            .as("两次状态写入都应落在 FAILED，不能把任务留在 PROCESSING")
            .containsOnly(AsyncTaskStatus.FAILED);
        assertThat(errorCaptor.getAllValues().get(1))
            .as("最后一次写入应带出重试入队失败的真实原因")
            .contains("重试入队失败");
    }
}
