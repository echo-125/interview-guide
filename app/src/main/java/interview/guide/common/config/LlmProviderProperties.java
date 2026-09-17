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
     * OpenAI 兼容接口的兜底 max_tokens。
     *
     * Provider 未显式配置 maxTokens 时下发该值，避免服务端默认输出上限过小，
     * 导致结构化 JSON 被截断而触发反复重试。
     *
     * 设为 0 或负数表示不兜底（完全沿用旧行为：不下发该字段），
     * 便于在遇到「不接受 max_tokens 字段」的特殊服务端时快速回退。
     */
    private int fallbackMaxTokens = 8192;

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
    }
}
