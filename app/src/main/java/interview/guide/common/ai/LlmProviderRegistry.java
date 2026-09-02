package interview.guide.common.ai;

import com.openai.client.OpenAIClient;
import interview.guide.common.config.LlmProviderProperties;
import interview.guide.common.config.LlmProviderProperties.AdvisorConfig;
import interview.guide.common.config.LlmProviderProperties.ProviderConfig;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.llmprovider.model.LlmGlobalSettingEntity;
import interview.guide.modules.llmprovider.model.LlmProviderEntity;
import interview.guide.modules.llmprovider.repository.LlmGlobalSettingRepository;
import interview.guide.modules.llmprovider.repository.LlmProviderRepository;
import interview.guide.modules.llmprovider.service.ApiKeyEncryptionService;
import io.micrometer.observation.ObservationRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.client.advisor.SafeGuardAdvisor;
import org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;
import org.springframework.ai.chat.client.advisor.ToolCallingAdvisor;
import org.springframework.ai.chat.client.advisor.api.Advisor;
import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.document.MetadataMode;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.chat.memory.MessageWindowChatMemory;
import org.springframework.ai.model.tool.ToolCallingManager;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.OpenAiEmbeddingModel;
import org.springframework.ai.openai.OpenAiEmbeddingOptions;
import org.springframework.ai.tool.ToolCallback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Registry for managing and caching LLM providers.
 * Supports dynamic creation of ChatClient based on provider configurations.
 */
@Component
@Slf4j
public class LlmProviderRegistry {

    private final LlmProviderProperties properties;
    private final Map<String, ChatClient> clientCache = new ConcurrentHashMap<>();
    private final Map<String, ChatModel> chatModelCache = new ConcurrentHashMap<>();
    private final Map<String, EmbeddingModel> embeddingModelCache = new ConcurrentHashMap<>();
    private final Map<String, Long> clientCacheVersion = new ConcurrentHashMap<>();
    private final Map<String, Long> chatModelCacheVersion = new ConcurrentHashMap<>();
    private final Map<String, Long> embeddingModelCacheVersion = new ConcurrentHashMap<>();
    private final LlmProviderRepository providerRepository;
    private final LlmGlobalSettingRepository globalSettingRepository;
    private final ApiKeyEncryptionService encryptionService;

    /**
     * 配置版本号：每次 reload() 自增，缓存访问时比对版本，配置变更后自动重建。
     * 解决「改 Key/BaseUrl 后旧客户端仍持有旧配置」以及 reload 并发窗口残留旧条目的问题。
     */
    private volatile long configVersion = 0;

    private final ToolCallingManager toolCallingManager;
    private final ObservationRegistry observationRegistry;
    private final ToolCallback interviewSkillsToolCallback;
    private static final Map<String, String> RECOMMENDED_EMBEDDING_MODELS = Map.of(
        "dashscope", "text-embedding-v3",
        "glm", "embedding-3",
        "zhipu", "embedding-3",
        "baidu", "Embedding-V1",
        "minimax", "embo-01"
    );

    private static final String API_FORMAT_ANTHROPIC = "anthropic";
    private static final int DEFAULT_ANTHROPIC_MAX_TOKENS = 4096;

    @Autowired
    public LlmProviderRegistry(
            LlmProviderProperties properties,
            LlmProviderRepository providerRepository,
            LlmGlobalSettingRepository globalSettingRepository,
            ApiKeyEncryptionService encryptionService,
            @Autowired(required = false) ToolCallingManager toolCallingManager,
            @Autowired(required = false) ObservationRegistry observationRegistry,
            @Autowired(required = false) @Qualifier("interviewSkillsToolCallback") ToolCallback interviewSkillsToolCallback) {
        this.properties = properties;
        this.providerRepository = providerRepository;
        this.globalSettingRepository = globalSettingRepository;
        this.encryptionService = encryptionService;
        this.toolCallingManager = toolCallingManager;
        this.observationRegistry = observationRegistry;
        this.interviewSkillsToolCallback = interviewSkillsToolCallback;
    }

    public LlmProviderRegistry(
            LlmProviderProperties properties,
            ToolCallingManager toolCallingManager,
            ObservationRegistry observationRegistry,
            ToolCallback interviewSkillsToolCallback) {
        this(properties, null, null, null, toolCallingManager, observationRegistry, interviewSkillsToolCallback);
    }

    /**
     * Get a ChatClient for the specified provider ID.
     * If the client is not in the cache, it will be created based on the provider's configuration.
     *
     * @param providerId The ID of the provider (e.g., "dashscope", "lmstudio")
     * @return A ChatClient instance
     * @throws IllegalArgumentException if the providerId is unknown
     */
    public ChatClient getChatClient(String providerId) {
        Long version = clientCacheVersion.get(providerId);
        if (version != null && isStale(version)) {
            clientCache.remove(providerId);
            clientCacheVersion.remove(providerId);
        }
        return clientCache.computeIfAbsent(providerId, id -> {
            log.info("[LlmProviderRegistry] Creating new client for provider: {}", id);
            clientCacheVersion.put(id, configVersion);
            return createChatClient(id);
        });
    }

    /**
     * Get the default ChatClient based on app.ai.default-provider.
     *
     * @return The default ChatClient instance
     */
    public ChatClient getDefaultChatClient() {
        return getChatClient(resolveDefaultChatProviderId());
    }

    /**
     * 获取默认 provider 的不带 SkillsTool 的 ChatClient，用于纯粹的摘要 / 结构化文本场景。
     * 与 {@link #getDefaultChatClient()} 的区别在于不挂 Skill 工具与记忆 Advisor，避免无关上下文干扰。
     */
    public ChatClient getPlainChatClient() {
        return getPlainChatClient(resolveDefaultChatProviderId());
    }

    /**
     * Get a ChatClient for the specified provider, falling back to the default if null, blank, or
     * the legacy "default" alias.
     */
    public ChatClient getChatClientOrDefault(String providerId) {
        return getChatClient(resolveProviderId(providerId));
    }

    /**
     * 获取不带 SkillsTool 的 ChatClient，用于结构化输出场景（出题、简历评分等）。
     * 这些场景要求模型一次性返回可解析 JSON，不应混入工具调用消息。
     */
    public ChatClient getPlainChatClient(String providerId) {
        String id = resolveProviderId(providerId);
        String cacheKey = id + ":plain";
        evictIfStale(clientCache, clientCacheVersion, cacheKey);
        return clientCache.computeIfAbsent(cacheKey, key -> {
            clientCacheVersion.put(cacheKey, configVersion);
            return createPlainChatClient(id);
        });
    }

    /**
     * 获取语音面试专用 ChatClient：SkillsTool + ToolCallAdvisor（流式）。
     * 不加 Memory Advisor（语音面试手动管理对话历史）。
     */
    public ChatClient getVoiceChatClient(String providerId) {
        String id = resolveProviderId(providerId);
        String cacheKey = id + ":voice";
        evictIfStale(clientCache, clientCacheVersion, cacheKey);
        return clientCache.computeIfAbsent(cacheKey, key -> {
            clientCacheVersion.put(cacheKey, configVersion);
            return createVoiceChatClient(id);
        });
    }

    /**
     * 判断 Provider 是否存在（含 enabled 检查；用于业务入口入参校验）。
     */
    public boolean hasProvider(String providerId) {
        if (isBlank(providerId) || "default".equalsIgnoreCase(providerId.trim())) {
            return true;
        }
        if (providerRepository == null) {
            return properties.getProviders() != null
                && properties.getProviders().containsKey(providerId);
        }
        return providerRepository.findById(providerId)
            .filter(LlmProviderEntity::isEnabled)
            .isPresent();
    }

    /**
     * 清空缓存，重新加载所有 provider。
     */
    public void reload() {
        int size = clientCache.size() + chatModelCache.size() + embeddingModelCache.size();
        clientCache.clear();
        chatModelCache.clear();
        embeddingModelCache.clear();
        clientCacheVersion.clear();
        chatModelCacheVersion.clear();
        embeddingModelCacheVersion.clear();
        configVersion++;
        log.info("[LlmProviderRegistry] Cache cleared ({} entries). Next access will re-create clients.", size);
    }

    /**
     * 缓存条目是否已过期（configVersion 不一致表示配置已变更）。
     */
    private boolean isStale(long entryVersion) {
        return entryVersion != configVersion;
    }

    /**
     * 若条目已过期则从缓存移除（配置变更后下次访问重建）。
     */
    private <K, V> void evictIfStale(Map<K, V> cache, Map<K, Long> versionMap, K key) {
        Long version = versionMap.get(key);
        if (version != null && isStale(version)) {
            cache.remove(key);
            versionMap.remove(key);
        }
    }

    public EmbeddingModel getEmbeddingModel(String providerId) {
        evictIfStale(embeddingModelCache, embeddingModelCacheVersion, providerId);
        return embeddingModelCache.computeIfAbsent(providerId, id -> {
            log.info("[LlmProviderRegistry] Creating new embedding model for provider: {}", id);
            embeddingModelCacheVersion.put(id, configVersion);
            return createEmbeddingModel(id);
        });
    }

    public EmbeddingModel getDefaultEmbeddingModel() {
        return getEmbeddingModel(resolveDefaultEmbeddingProviderId());
    }

    private ChatClient createChatClient(String providerId) {
        ChatModel chatModel = getChatModel(providerId);

        ChatClient.Builder builder = ChatClient.builder(chatModel);
        if (interviewSkillsToolCallback != null) {
            builder.defaultTools(interviewSkillsToolCallback);
        }
        List<Advisor> advisors = buildDefaultAdvisors(providerId);
        if (!advisors.isEmpty()) {
            builder.defaultAdvisors(advisors);
            log.info("[LlmProviderRegistry] Applied {} advisors for provider {}", advisors.size(), providerId);
        }

        return builder.build();
    }

    private ChatClient createPlainChatClient(String providerId) {
        ChatModel chatModel = getChatModel(providerId);
        ChatClient.Builder builder = ChatClient.builder(chatModel);
        buildSafeGuardAdvisor().ifPresent(advisor -> builder.defaultAdvisors(List.of(advisor)));
        log.info("[LlmProviderRegistry] Created plain ChatClient (no tools) for {}", providerId);
        return builder.build();
    }

    private ChatClient createVoiceChatClient(String providerId) {
        ChatModel chatModel = getChatModel(providerId);

        ChatClient.Builder builder = ChatClient.builder(chatModel);
        if (interviewSkillsToolCallback != null) {
            builder.defaultTools(interviewSkillsToolCallback);
        }
        List<Advisor> advisors = new ArrayList<>();
        if (toolCallingManager != null) {
            advisors.add(buildToolCallAdvisor(true));
        }
        buildSafeGuardAdvisor().ifPresent(advisors::add);
        if (!advisors.isEmpty()) {
            builder.defaultAdvisors(advisors);
        }
        log.info("[LlmProviderRegistry] Created voice ChatClient (SkillsTool + streaming ToolCall) for {}", providerId);
        return builder.build();
    }

    private ChatModel getChatModel(String providerId) {
        evictIfStale(chatModelCache, chatModelCacheVersion, providerId);
        return chatModelCache.computeIfAbsent(providerId, id -> {
            log.info("[LlmProviderRegistry] Creating new ChatModel for provider: {}", id);
            chatModelCacheVersion.put(id, configVersion);
            return buildChatModel(id);
        });
    }

    private ChatModel buildChatModel(String providerId) {
        ProviderSnapshot config = loadProviderOrThrow(providerId);
        if (isBlank(config.model())) {
            throw new BusinessException(ErrorCode.PROVIDER_CONFIG_READ_FAILED,
                "Provider '" + providerId + "' 未配置聊天模型，无法创建 ChatClient");
        }
        if (API_FORMAT_ANTHROPIC.equalsIgnoreCase(config.apiFormat())) {
            return buildAnthropicChatModel(providerId, config);
        }
        return buildOpenAiChatModel(providerId, config);
    }

    private ChatModel buildOpenAiChatModel(String providerId, ProviderSnapshot config) {
        log.info("[LlmProviderRegistry] Building OpenAI ChatModel - Provider: {}, BaseUrl: {}, Model: {}",
                 providerId, config.baseUrl(), config.model());

        OpenAIClient openAiClient = ApiPathResolver.buildOpenAiClient(config.baseUrl(), config.apiKey());

        OpenAiChatOptions.Builder optionsBuilder = OpenAiChatOptions.builder()
                .model(config.model())
                .temperature(config.temperature() != null ? config.temperature() : 0.2);
        if (config.maxTokens() != null) {
            optionsBuilder.maxTokens(config.maxTokens());
        }
        if (config.topP() != null) {
            optionsBuilder.topP(config.topP());
        }

        return OpenAiChatModel.builder()
            .openAiClient(openAiClient)
            .openAiClientAsync(openAiClient.async())
            .options(optionsBuilder.build())
            .observationRegistry(observationRegistry != null ? observationRegistry : ObservationRegistry.NOOP)
            .build();
    }

    private ChatModel buildAnthropicChatModel(String providerId, ProviderSnapshot config) {
        // Anthropic SDK 的 baseUrl 约定为根地址（SDK 自动补 /v1），兼容用户填入 OpenAI 风格带 /v1 的写法
        String baseUrl = ApiPathResolver.stripTrailingSlashes(config.baseUrl())
            .replaceAll("/v\\d+[a-zA-Z0-9]*$", "");
        log.info("[LlmProviderRegistry] Building Anthropic ChatModel - Provider: {}, BaseUrl: {}, Model: {}",
                 providerId, baseUrl, config.model());

        org.springframework.ai.anthropic.AnthropicChatOptions.Builder optionsBuilder =
            org.springframework.ai.anthropic.AnthropicChatOptions.builder()
                .model(config.model())
                .apiKey(config.apiKey())
                .baseUrl(baseUrl)
                // Anthropic Messages API 强制要求 max_tokens
                .maxTokens(config.maxTokens() != null ? config.maxTokens() : DEFAULT_ANTHROPIC_MAX_TOKENS)
                .temperature(config.temperature() != null ? config.temperature() : 0.2);
        if (config.topP() != null) {
            optionsBuilder.topP(config.topP());
        }

        return org.springframework.ai.anthropic.AnthropicChatModel.builder()
            .options(optionsBuilder.build())
            .observationRegistry(observationRegistry != null ? observationRegistry : ObservationRegistry.NOOP)
            .build();
    }

    private EmbeddingModel createEmbeddingModel(String providerId) {
        ProviderSnapshot config = loadProviderOrThrow(providerId);
        if (!config.supportsEmbedding() || isBlank(config.embeddingModel())) {
            throw new BusinessException(ErrorCode.PROVIDER_CONFIG_READ_FAILED,
                "Provider '" + providerId + "' 未配置可用的 Embedding 模型，无法执行知识库向量化");
        }
        if (looksLikeChatModel(config.embeddingModel())) {
            String recommendation = RECOMMENDED_EMBEDDING_MODELS.get(providerId.toLowerCase());
            String suffix = recommendation != null
                ? "，推荐填写 " + recommendation
                : "，请填写该厂商真实的 Embedding 模型名";
            throw new BusinessException(ErrorCode.PROVIDER_CONFIG_READ_FAILED,
                "Provider '" + providerId + "' 的 Embedding Model 配成了聊天模型 '"
                    + config.embeddingModel() + "'" + suffix);
        }
        log.info("[LlmProviderRegistry] Building EmbeddingModel - Provider: {}, BaseUrl: {}, Model: {}",
            providerId, config.baseUrl(), config.embeddingModel());

        OpenAIClient openAiClient = ApiPathResolver.buildOpenAiClient(config.baseUrl(), config.apiKey());
        OpenAiEmbeddingOptions options = OpenAiEmbeddingOptions.builder()
            .model(config.embeddingModel())
            .dimensions(resolveEmbeddingDimensions(config.embeddingDimensions()))
            .build();

        return OpenAiEmbeddingModel.builder()
            .openAiClient(openAiClient)
            .metadataMode(MetadataMode.EMBED)
            .options(options)
            .observationRegistry(observationRegistry != null ? observationRegistry : ObservationRegistry.NOOP)
            .build();
    }

    private List<Advisor> buildDefaultAdvisors(String providerId) {
        AdvisorConfig config = properties.getAdvisors();
        if (config == null || !config.isEnabled()) {
            return List.of();
        }

        List<Advisor> advisors = new ArrayList<>();

        if (config.isToolCallEnabled()) {
            if (toolCallingManager != null) {
                advisors.add(buildToolCallAdvisor(config.isToolCallConversationHistoryEnabled()));
            } else {
                log.warn("[LlmProviderRegistry] ToolCallAdvisor skipped: ToolCallingManager unavailable, provider={}", providerId);
            }
        }

        if (config.isMessageChatMemoryEnabled()) {
            int maxMessages = Math.max(20, config.getMessageChatMemoryMaxMessages());
            MessageChatMemoryAdvisor memoryAdvisor = MessageChatMemoryAdvisor.builder(
                MessageWindowChatMemory.builder()
                    .maxMessages(maxMessages)
                    .build()
            ).build();
            advisors.add(memoryAdvisor);
        }

        if (config.isSimpleLoggerEnabled()) {
            advisors.add(new SimpleLoggerAdvisor());
        }

        buildSafeGuardAdvisor().ifPresent(advisors::add);

        return advisors;
    }

    private ToolCallingAdvisor buildToolCallAdvisor(boolean conversationHistoryEnabled) {
        return ToolCallingAdvisor.builder()
            .toolCallingManager(toolCallingManager)
            .conversationHistoryEnabled(conversationHistoryEnabled)
            .build();
    }

    private Optional<SafeGuardAdvisor> buildSafeGuardAdvisor() {
        AdvisorConfig config = properties.getAdvisors();
        if (config == null || !config.isSafeguardEnabled()) {
            return Optional.empty();
        }
        SafeGuardAdvisor advisor = SafeGuardAdvisor.builder()
            .sensitiveWords(config.getSafeguardWords())
            .failureResponse("抱歉，我只能协助面试相关的任务。")
            .order(100)
            .build();
        return Optional.of(advisor);
    }

    private String resolveProviderId(String providerId) {
        if (providerId == null || providerId.isBlank() || "default".equalsIgnoreCase(providerId.trim())) {
            return resolveDefaultChatProviderId();
        }
        return providerId;
    }

    private String resolveDefaultChatProviderId() {
        if (globalSettingRepository == null) {
            return properties.getDefaultProvider();
        }
        String configured = globalSettingRepository.findById(LlmGlobalSettingEntity.SINGLETON_ID)
            .map(LlmGlobalSettingEntity::getDefaultChatProviderId)
            .filter(id -> !isBlank(id))
            .orElseGet(() -> {
                String fromProperties = properties.getDefaultProvider();
                return isBlank(fromProperties) ? null : fromProperties;
            });
        if (!isBlank(configured)) {
            return configured;
        }
        // 未显式配置默认时，回退到第一个启用的聊天 Provider，避免"跟随系统默认"直接失败
        String fallback = providerRepository == null ? "" : providerRepository.findAll().stream()
            .filter(p -> p.isEnabled() && !isBlank(p.getModel()))
            .map(LlmProviderEntity::getId)
            .sorted()
            .findFirst()
            .orElse("");
        log.debug("[LlmProviderRegistry] 未配置默认聊天 Provider，回退到第一个可用 Provider: {}", fallback);
        return fallback;
    }

    private String resolveDefaultEmbeddingProviderId() {
        if (globalSettingRepository == null) {
            return !isBlank(properties.getDefaultEmbeddingProvider())
                ? properties.getDefaultEmbeddingProvider()
                : properties.getDefaultProvider();
        }
        String configured = globalSettingRepository.findById(LlmGlobalSettingEntity.SINGLETON_ID)
            .map(LlmGlobalSettingEntity::getDefaultEmbeddingProviderId)
            .filter(id -> !isBlank(id))
            .orElseGet(() -> !isBlank(properties.getDefaultEmbeddingProvider())
                ? properties.getDefaultEmbeddingProvider()
                : null);
        if (!isBlank(configured)) {
            return configured;
        }
        // 向量默认未配置时，回退到第一个启用的向量 Provider（不回落到聊天默认，两者能力可能不同）
        String fallback = providerRepository == null ? "" : providerRepository.findAll().stream()
            .filter(p -> p.isEnabled() && p.isSupportsEmbedding() && !isBlank(p.getEmbeddingModel()))
            .map(LlmProviderEntity::getId)
            .sorted()
            .findFirst()
            .orElse("");
        log.debug("[LlmProviderRegistry] 未配置默认向量 Provider，回退到第一个可用 Provider: {}", fallback);
        return fallback;
    }

    private ProviderSnapshot loadProviderOrThrow(String providerId) {
        ProviderSnapshot snapshot = loadProviderOrNull(providerId);
        if (snapshot == null) {
            throw new BusinessException(ErrorCode.PROVIDER_NOT_FOUND,
                isBlank(providerId)
                    ? "尚未配置模型服务，请到「设置 → 模型服务」新增模型并设为默认"
                    : "模型 '" + providerId + "' 不存在或未启用，请到「设置 → 模型服务」检查配置");
        }
        return snapshot;
    }

    private ProviderSnapshot loadProviderOrNull(String providerId) {
        if (providerRepository == null) {
            Map<String, ProviderConfig> providers = properties.getProviders();
            ProviderConfig config = providers == null ? null : providers.get(providerId);
            if (config == null) {
                return null;
            }
            boolean supportsEmbedding = Boolean.TRUE.equals(config.getSupportsEmbedding())
                || !isBlank(config.getEmbeddingModel());
            return new ProviderSnapshot(
                providerId,
                config.getBaseUrl(),
                config.getApiKey(),
                config.getModel(),
                config.getApiFormat(),
                config.getEmbeddingModel(),
                config.getRerankModel(),
                config.getRerankApiFormat(),
                config.getEmbeddingDimensions(),
                supportsEmbedding,
                config.getMaxTokens(),
                config.getTopP(),
                config.getTemperature()
            );
        }
        LlmProviderEntity entity = providerRepository.findById(providerId)
            .filter(LlmProviderEntity::isEnabled)
            .orElse(null);
        if (entity == null) {
            return null;
        }
        return new ProviderSnapshot(
            entity.getId(),
            entity.getBaseUrl(),
            encryptionService.decrypt(entity.getApiKeyNonce(), entity.getApiKeyCiphertext()),
            entity.getModel(),
            entity.getApiFormat(),
            entity.getEmbeddingModel(),
            entity.getRerankModel(),
            entity.getRerankApiFormat(),
            entity.getEmbeddingDimensions(),
            entity.isSupportsEmbedding(),
            entity.getMaxTokens(),
            entity.getTopP(),
            entity.getTemperature()
        );
    }

    private boolean isBlank(String value) {
        return value == null || value.isBlank();
    }

    private Integer resolveEmbeddingDimensions(Integer configuredDimensions) {
        if (configuredDimensions != null && configuredDimensions > 0) {
            return configuredDimensions;
        }
        return properties.getEmbeddingDimensions();
    }

    private boolean looksLikeChatModel(String model) {
        String lower = model.toLowerCase();
        if (lower.contains("embed") || lower.contains("rerank")) {
            return false;
        }
        return lower.startsWith("glm-")
            || lower.startsWith("deepseek")
            || lower.startsWith("kimi")
            || lower.startsWith("moonshot")
            || lower.startsWith("qwen")
            || lower.startsWith("ernie");
    }

    private record ProviderSnapshot(
        String id,
        String baseUrl,
        String apiKey,
        String model,
        String apiFormat,
        String embeddingModel,
        String rerankModel,
        String rerankApiFormat,
        Integer embeddingDimensions,
        boolean supportsEmbedding,
        Integer maxTokens,
        Double topP,
        Double temperature
    ) {
    }

    /**
     * 默认 Rerank 服务的运行时快照。
     */
    public record RerankProviderSnapshot(
        String providerId,
        String baseUrl,
        String apiKey,
        String rerankModel,
        String rerankApiFormat
    ) {
    }

    /**
     * 解析默认 Rerank Provider；未配置时返回 empty（表示 Rerank 能力关闭）。
     */
    public Optional<RerankProviderSnapshot> getDefaultRerankProvider() {
        String providerId = resolveDefaultRerankProviderId();
        if (isBlank(providerId)) {
            return Optional.empty();
        }
        ProviderSnapshot config = loadProviderOrNull(providerId);
        if (config == null || isBlank(config.rerankModel())) {
            log.warn("[LlmProviderRegistry] Default rerank provider '{}' missing or has no rerank model", providerId);
            return Optional.empty();
        }
        return Optional.of(new RerankProviderSnapshot(
            providerId, config.baseUrl(), config.apiKey(), config.rerankModel(), config.rerankApiFormat()));
    }

    private String resolveDefaultRerankProviderId() {
        if (globalSettingRepository != null) {
            String fromSetting = globalSettingRepository.findById(LlmGlobalSettingEntity.SINGLETON_ID)
                .map(LlmGlobalSettingEntity::getDefaultRerankProviderId)
                .filter(id -> !isBlank(id))
                .orElse(null);
            if (!isBlank(fromSetting)) {
                return fromSetting;
            }
        }
        return !isBlank(properties.getDefaultRerankProvider())
            ? properties.getDefaultRerankProvider()
            : null;
    }
}
