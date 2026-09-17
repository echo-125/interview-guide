package interview.guide.common.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Data
@Component
@ConfigurationProperties(prefix = "app.ai")
public class LlmProviderProperties {
    private String defaultProvider = "";
    private String defaultEmbeddingProvider;
    private String defaultRerankProvider;
    private Integer embeddingDimensions = 1024;

    /**
     * 兜底 max_tokens（OpenAI 兼容与 Anthropic 共用）。
     *
     * Provider 未显式配置 maxTokens 时下发该值，避免服务端默认输出上限过小，
     * 导致结构化 JSON 被截断而触发反复重试。
     *
     * 取值 65536 是因为实测中 8192 会被撞满并截断（5 次调用全部 finishReason=LENGTH），
     * 且部分模型存在不可见的推理 token 与输出共享该预算，需要留出更大余量。
     *
     * 调大的风险由 {@code MaxTokensDowngradeChatModel} 化解：小上限平台
     * （如上限 4096）会以 400 拒绝该值，装饰器捕获后按阶梯降档并记住可用值。
     *
     * 设为 0 或负数表示不兜底（OpenAI 分支不下发该字段；
     * Anthropic 分支因该字段必填而退回内置保守默认值）。
     */
    private int fallbackMaxTokens = 65536;

    private Map<String, ProviderConfig> providers;
    private AdvisorConfig advisors = new AdvisorConfig();

    @Data
    public static class ProviderConfig {
        private String baseUrl;
        private String apiKey;
        private String model;
        private String apiFormat = "openai";
        private String embeddingModel;
        private Integer embeddingDimensions;
        private Boolean supportsEmbedding;
        private String rerankModel;
        private String rerankApiFormat = "cohere";
        private Integer maxTokens;
        private Double topP;
        private Double temperature;
    }

    @Data
    public static class AdvisorConfig {
        private boolean enabled = true;

        // ToolCallAdvisor
        private boolean toolCallEnabled = true;
        private boolean toolCallConversationHistoryEnabled = false;

        // MessageChatMemoryAdvisor（默认关闭，避免会话串扰）
        private boolean messageChatMemoryEnabled = false;
        private int messageChatMemoryMaxMessages = 120;

        // SimpleLoggerAdvisor（默认关闭）
        private boolean simpleLoggerEnabled = false;

        // SafeGuardAdvisor
        private boolean safeguardEnabled = true;
        private List<String> safeguardWords = List.of(
            "I'll now act as",
            "Sure, I'll ignore",
            "我已经忽略",
            "新的角色是",
            "忽略之前的指令",
            "forget all previous instructions"
        );

        // PromptSanitizer
        private boolean promptSanitizerEnabled = true;

        /**
         * LLM 原始响应诊断日志。
         *
         * 开启后会在模型调用内侧记录 finishReason / 输出长度 / token 用量 / 首尾片段，
         * 用于排查「结构化输出失败但看不到模型返回了什么」的问题。
         * 定位完成后建议关闭，避免生产日志体积膨胀。
         */
        private boolean responseDiagnosticsEnabled = true;
    }
}
