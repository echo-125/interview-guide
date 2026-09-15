package interview.guide.modules.voiceinterview.service;

import interview.guide.modules.voiceinterview.config.VoiceInterviewProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Field;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * 回归测试：ASR 重连必须在**原会话锁**上完成，不得把锁对象从 sessionLocks 移除。
 *
 * <p>历史缺陷：{@code restartTranscription} 在持有 lockForSession(sessionId) 的临界区内
 * 调用了 {@code stopTranscription}，后者会 {@code sessionLocks.remove(sessionId)}。
 * 于是并发线程再调 lockForSession 时 computeIfAbsent 出一个**全新的锁对象**，两个线程
 * 各自持有不同锁、同时进入 startTranscriptionLocked，向 DashScope 建立两份 WebSocket
 * 会话（表现为 "Session already exists" 或消息帧错乱）。
 */
@DisplayName("QwenAsrService 重连锁语义")
class QwenAsrServiceLockTest {

    private QwenAsrService asrService;

    @BeforeEach
    void setUp() {
        VoiceInterviewProperties properties = new VoiceInterviewProperties();
        VoiceInterviewProperties.AsrConfig asr = properties.getQwen().getAsr();
        asr.setUrl("wss://dashscope.aliyuncs.com/api-ws/v1/realtime");
        asr.setModel("qwen3-asr-flash-realtime");
        asr.setApiKey("test-api-key");
        asr.setLanguage("zh");
        asr.setFormat("pcm");
        asr.setSampleRate(16000);

        asrService = new QwenAsrService(properties);
        asrService.init();
    }

    @SuppressWarnings("unchecked")
    private static Map<String, Object> sessionLocksOf(QwenAsrService service) throws Exception {
        Field field = QwenAsrService.class.getDeclaredField("sessionLocks");
        field.setAccessible(true);
        return (Map<String, Object>) field.get(service);
    }

    @Test
    @DisplayName("重连后会话锁仍是同一个对象，不会被移除")
    void restartKeepsSameSessionLock() throws Exception {
        String sessionId = "lock-session";
        asrService.startTranscription(sessionId, text -> {}, error -> {});

        Map<String, Object> locks = sessionLocksOf(asrService);
        Object lockBefore = locks.get(sessionId);
        assertThat(lockBefore).as("启动后应存在会话锁").isNotNull();

        try {
            asrService.restartTranscription(sessionId, text -> {}, null, error -> {});

            Map<String, Object> locksAfter = sessionLocksOf(asrService);
            assertThat(locksAfter)
                .as("重连不得移除会话锁；一旦移除，并发线程会拿到新锁并同时进入临界区")
                .containsKey(sessionId);
            assertThat(locksAfter.get(sessionId))
                .as("必须复用原锁对象，而不是 computeIfAbsent 出的新对象")
                .isSameAs(lockBefore);
        } finally {
            asrService.stopTranscription(sessionId);
        }
    }

    @Test
    @DisplayName("终态停止时仍会清理会话锁，避免内存泄漏")
    void stopRemovesSessionLock() throws Exception {
        String sessionId = "stop-session";
        asrService.startTranscription(sessionId, text -> {}, error -> {});

        assertThat(sessionLocksOf(asrService)).containsKey(sessionId);

        asrService.stopTranscription(sessionId);

        assertThat(sessionLocksOf(asrService))
            .as("不再重启的终态停止应释放锁，否则 sessionLocks 会随会话数无限增长")
            .doesNotContainKey(sessionId);
    }
}
