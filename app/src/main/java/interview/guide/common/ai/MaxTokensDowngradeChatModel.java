package interview.guide.common.ai;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.ChatOptions;
import org.springframework.ai.chat.prompt.Prompt;
import reactor.core.publisher.Flux;

/**
 * 带 max_tokens 自动降档的 ChatModel 装饰器。
 *
 * <p><b>解决的问题</b>：默认兜底 max_tokens 为了适配大上限模型（如支持 65536 的模型）
 * 会设得较大，但小上限平台（如上限 4096）遇到超限值通常<b>直接返回 400</b>，
 * 而不是静默截断。这会让「调大默认值」反而导致任务彻底失败。
 *
 * <p><b>做法</b>：捕获「max_tokens 超限」类错误后，按 {@link MaxTokensDowngrade} 的阶梯
 * 逐级下调并重试，成功后把可用值记住（进程内），后续请求直接使用。
 * 首次遇到小上限平台会多消耗一两次调用，之后零额外开销。
 *
 * <p><b>为什么用装饰器而不是请求级覆盖</b>：Spring AI 的
 * {@code OpenAiChatModel.buildRequestPrompt} 在 {@code prompt.getOptions() != null} 时
 * 直接使用请求级选项（整体替换，不做字段合并）。因此这里主动把选项写入 Prompt，
 * 保证学习到的值一定能生效，不依赖 ChatClient 是否预设了选项。
 */
public class MaxTokensDowngradeChatModel implements ChatModel {

    private static final Logger log = LoggerFactory.getLogger(MaxTokensDowngradeChatModel.class);

    private final ChatModel delegate;
    private final String providerId;

    /**
     * 当前生效的 max_tokens。null 表示不下发该字段（沿用服务端默认）。
     * 降档成功后会被更新，进程内后续请求直接复用。
     */
    private volatile Integer currentMaxTokens;

    public MaxTokensDowngradeChatModel(ChatModel delegate, String providerId, Integer initialMaxTokens) {
        this.delegate = delegate;
        this.providerId = providerId;
        this.currentMaxTokens = initialMaxTokens;
    }

    /**
     * 当前生效值，供日志/诊断读取。
     */
    public Integer currentMaxTokens() {
        return currentMaxTokens;
    }

    @Override
    public ChatResponse call(Prompt prompt) {
        Integer candidate = currentMaxTokens;
        // 首次尝试 + 后续降档尝试共用同一循环：
        // 首次失败即进入降档分支，阶梯用尽则用最后尝试的值再打一次，
        // 把该次异常原样抛给上层（让 StructuredOutputInvoker 决定重试策略）。
        while (true) {
            try {
                ChatResponse result = delegate.call(applyMaxTokens(prompt, candidate));
                if (!java.util.Objects.equals(candidate, currentMaxTokens)) {
                    rememberDowngrade(candidate);
                }
                return result;
            } catch (Exception e) {
                if (!MaxTokensDowngrade.isMaxTokensRejection(e)) {
                    throw e;
                }
                Integer next = MaxTokensDowngrade.nextCandidate(candidate, e);
                if (next == null) {
                    log.error("[MaxTokens降档] Provider={} 的 maxTokens 已降至最低档 {} 仍被拒绝，放弃降档: {}",
                        providerId, candidate, e.getMessage());
                    throw e;
                }
                log.warn("[MaxTokens降档] Provider={} 的 maxTokens={} 被服务端拒绝，降档为 {} 重试: {}",
                    providerId, candidate, next, e.getMessage());
                candidate = next;
            }
        }
    }

    private void rememberDowngrade(Integer accepted) {
        Integer previous = currentMaxTokens;
        currentMaxTokens = accepted;
        log.warn("[MaxTokens降档] Provider={} 的 maxTokens 由 {} 降档为 {}，后续请求将复用该值。"
                + "建议在「设置 → 模型服务」中把该 Provider 的 maxTokens 显式设为 {} 以避免每次都试探",
            providerId, previous, accepted, accepted);
    }

    /**
     * 把当前 max_tokens 写入 Prompt 的选项。
     *
     * maxTokens 为 null 时不下发该字段（沿用服务端默认）。
     *
     * 选项基础一律取自被装饰模型（{@code delegate.getOptions()}），而不是 prompt 自带选项：
     * Spring AI 的 ChatModel 会对 Prompt 选项做类型校验，要求选项类型与模型匹配
     * （OpenAiChatModel 只接受 OpenAiChatOptions）。delegate 的选项天然是该类型，
     * 且已包含 Provider 配置中的 model / temperature / topP 等字段，
     * 经 mutate() 复制可保证这些字段不丢失。
     */
    private Prompt applyMaxTokens(Prompt prompt, Integer maxTokens) {
        if (maxTokens == null) {
            return prompt;
        }
        ChatOptions base = delegate.getOptions();
        if (base == null) {
            return prompt;
        }
        return prompt.mutate()
            .chatOptions(base.mutate().maxTokens(maxTokens).build())
            .build();
    }

    /**
     * 流式请求不做降档重试。
     *
     * 原因：Flux 是惰性的，错误在订阅后才发生，此时无法在返回前决定是否降档；
     * 且流式重试会把已产出的分片重复推给下游。
     * 流式场景直接沿用当前档位，降档能力由非流式路径（结构化输出等）覆盖。
     */
    @Override
    public Flux<ChatResponse> stream(Prompt prompt) {
        return delegate.stream(applyMaxTokens(prompt, currentMaxTokens));
    }

    @Override
    public ChatOptions getOptions() {
        ChatOptions base = delegate.getOptions();
        if (currentMaxTokens == null || base == null) {
            return base;
        }
        return base.mutate().maxTokens(currentMaxTokens).build();
    }
}
