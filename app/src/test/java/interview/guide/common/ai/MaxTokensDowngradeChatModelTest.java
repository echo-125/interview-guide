package interview.guide.common.ai;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.ChatOptions;
import org.springframework.ai.chat.prompt.Prompt;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@DisplayName("max_tokens 降档 ChatModel 装饰器")
class MaxTokensDowngradeChatModelTest {

    /** 用 ChatOptions 的真实实现承载 maxTokens，便于断言下发的值。 */
    private ChatOptions optionsWith(Integer maxTokens) {
        return ChatOptions.builder().model("test-model").maxTokens(maxTokens).build();
    }

    /**
     * 可控的假模型：按预设脚本对每次调用返回结果或抛异常，
     * 并记录每次实际收到的 maxTokens。
     */
    private static class FakeChatModel implements ChatModel {

        final List<Integer> observedMaxTokens = new java.util.ArrayList<>();
        final List<RuntimeException> scriptedErrors = new java.util.ArrayList<>();
        final AtomicInteger calls = new AtomicInteger();
        private final ChatOptions defaultOptions;

        FakeChatModel(ChatOptions defaultOptions) {
            this.defaultOptions = defaultOptions;
        }

        @Override
        public ChatResponse call(Prompt prompt) {
            calls.incrementAndGet();
            ChatOptions options = prompt.getOptions() != null ? prompt.getOptions() : defaultOptions;
            observedMaxTokens.add(options == null ? null : options.getMaxTokens());
            int index = calls.get() - 1;
            if (index < scriptedErrors.size()) {
                RuntimeException error = scriptedErrors.get(index);
                if (error != null) {
                    throw error;
                }
            }
            return mock(ChatResponse.class);
        }

        @Override
        public ChatOptions getOptions() {
            return defaultOptions;
        }
    }

    @Test
    @DisplayName("正常情况按初始值下发，不做多余调用")
    void usesInitialValueOnSuccess() {
        FakeChatModel fake = new FakeChatModel(optionsWith(65536));
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", 65536);

        ChatResponse response = model.call(new Prompt("hi"));

        assertThat(response).isNotNull();
        assertThat(fake.observedMaxTokens).containsExactly(65536);
    }

    @Test
    @DisplayName("被拒绝时直接跳到服务端声明的上限，不逐档试探")
    void jumpsStraightToServerLimit() {
        FakeChatModel fake = new FakeChatModel(optionsWith(65536));
        fake.scriptedErrors.add(new RuntimeException(
            "max_tokens is too large: 65536. This model supports at most 8192"));
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", 65536);

        model.call(new Prompt("hi"));

        // 一次失败 + 一次成功后即返回，中间不经过 32768 / 16384
        assertThat(fake.observedMaxTokens).containsExactly(65536, 8192);
    }

    @Test
    @DisplayName("降档成功后记住可用值，后续请求直接用新值")
    void remembersAcceptedValue() {
        FakeChatModel fake = new FakeChatModel(optionsWith(65536));
        fake.scriptedErrors.add(new RuntimeException(
            "max_tokens is too large: 65536. This model supports at most 8192"));
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", 65536);

        model.call(new Prompt("hi"));
        assertThat(model.currentMaxTokens()).isEqualTo(8192);

        fake.scriptedErrors.clear();
        fake.observedMaxTokens.clear();
        model.call(new Prompt("hi again"));

        assertThat(fake.observedMaxTokens).containsExactly(8192);
    }

    @Test
    @DisplayName("非 max_tokens 类异常原样抛出，不触发降档")
    void nonRejectionErrorPropagates() {
        FakeChatModel fake = new FakeChatModel(optionsWith(65536));
        fake.scriptedErrors.add(new RuntimeException("429: inference exceeds tpm/rpm limit"));
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", 65536);

        assertThatThrownBy(() -> model.call(new Prompt("hi")))
            .isInstanceOf(RuntimeException.class)
            .hasMessageContaining("429");
        assertThat(fake.observedMaxTokens).hasSize(1);
    }

    @Test
    @DisplayName("阶梯用尽仍被拒绝时抛出异常，不再无限重试")
    void throwsWhenLadderExhausted() {
        FakeChatModel fake = new FakeChatModel(optionsWith(2048));
        // 每次调用都报同一个不可解析上限的拒绝
        for (int i = 0; i < 10; i++) {
            fake.scriptedErrors.add(new RuntimeException("max_tokens is too large"));
        }
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", 2048);

        assertThatThrownBy(() -> model.call(new Prompt("hi")))
            .isInstanceOf(RuntimeException.class)
            .hasMessageContaining("max_tokens is too large");
        // 2048 已是阶梯最低档，只应尝试一次
        assertThat(fake.observedMaxTokens).hasSize(1);
    }

    @Test
    @DisplayName("getOptions 反映当前档位")
    void getOptionsReflectsCurrentValue() {
        FakeChatModel fake = new FakeChatModel(optionsWith(65536));
        fake.scriptedErrors.add(new RuntimeException(
            "max_tokens is too large: 65536. This model supports at most 4096"));
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", 65536);

        model.call(new Prompt("hi"));

        assertThat(model.getOptions().getMaxTokens()).isEqualTo(4096);
        // 其它字段不应丢失
        assertThat(model.getOptions().getModel()).isEqualTo("test-model");
    }

    @Test
    @DisplayName("初始值为 null 时不包装下发逻辑，直接委托")
    void nullInitialValueDelegates() {
        FakeChatModel fake = new FakeChatModel(optionsWith(null));
        MaxTokensDowngradeChatModel model = new MaxTokensDowngradeChatModel(fake, "p", null);

        model.call(new Prompt("hi"));

        assertThat(fake.observedMaxTokens).containsExactly((Integer) null);
    }
}
