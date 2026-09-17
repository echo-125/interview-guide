package interview.guide.common.ai;

import interview.guide.common.config.LlmProviderProperties;
import interview.guide.common.config.LlmProviderProperties.ProviderConfig;
import interview.guide.common.exception.BusinessException;
import io.micrometer.observation.ObservationRegistry;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.model.tool.ToolCallingManager;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("LLM Provider Registry Test")
class LlmProviderRegistryTest {

    @Mock
    private LlmProviderProperties properties;

    @Mock
    private org.springframework.ai.model.tool.ToolCallingManager toolCallingManager;

    @Mock
    private io.micrometer.observation.ObservationRegistry observationRegistry;

    @InjectMocks
    private LlmProviderRegistry registry;

    @BeforeEach
    void setUp() {
        // No need to manually create registry when using @InjectMocks
    }

    @Test
    @DisplayName("Successfully get ChatClient for a valid provider")
    void testGetChatClient_Success() {
        // Given
        String providerId = "test-provider";
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("http://localhost:1234/v1");
        config.setApiKey("test-key");
        config.setModel("test-model");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put(providerId, config);

        when(properties.getProviders()).thenReturn(providers);

        // When
        ChatClient client = registry.getChatClient(providerId);

        // Then
        assertNotNull(client);
    }

    @Test
    @DisplayName("Verify that ChatClients are cached")
    void testGetChatClient_Caching() {
        // Given
        String providerId = "test-provider";
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("http://localhost:1234/v1");
        config.setApiKey("test-key");
        config.setModel("test-model");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put(providerId, config);

        when(properties.getProviders()).thenReturn(providers);

        // When
        ChatClient client1 = registry.getChatClient(providerId);
        ChatClient client2 = registry.getChatClient(providerId);

        // Then
        assertSame(client1, client2, "Clients should be cached and returned as the same instance");
    }

    @Test
    @DisplayName("不同 ChatClient 配方共享同一个 provider 级 ChatModel")
    void chatClientVariantsShareProviderChatModel() {
        String providerId = "test-provider";
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("http://localhost:1234/v1");
        config.setApiKey("test-key");
        config.setModel("test-model");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put(providerId, config);

        when(properties.getProviders()).thenReturn(providers);

        ChatClient defaultClient = registry.getChatClient(providerId);
        ChatClient plainClient = registry.getPlainChatClient(providerId);
        ChatClient voiceClient = registry.getVoiceChatClient(providerId);

        assertNotNull(defaultClient);
        assertNotNull(plainClient);
        assertNotNull(voiceClient);
        assertNotSame(defaultClient, plainClient, "Default and plain clients should keep advisor recipes isolated");
        assertNotSame(defaultClient, voiceClient, "Default and voice clients should keep advisor recipes isolated");
        verify(properties, times(1)).getProviders();
    }

    @Test
    @DisplayName("Throw exception for unknown provider")
    void testGetChatClient_UnknownProvider() {
        // Given
        when(properties.getProviders()).thenReturn(new HashMap<>());

        // When & Then
        assertThrows(BusinessException.class, () -> registry.getChatClient("unknown"));
    }

    @Test
    @DisplayName("零配置时抛出引导用户去设置页配置模型的业务异常")
    void testGetChatClient_NothingConfigured() {
        // Given：无任何 Provider，默认指针为空（预设移除后的全新状态）
        when(properties.getProviders()).thenReturn(new HashMap<>());
        when(properties.getDefaultProvider()).thenReturn("");

        // When & Then
        BusinessException ex = assertThrows(BusinessException.class, registry::getDefaultChatClient);
        assertTrue(ex.getMessage().contains("设置"), "错误信息应引导用户到设置页配置: " + ex.getMessage());
    }

    @Test
    @DisplayName("Successfully get default ChatClient")
    void testGetDefaultChatClient() {
        // Given
        String defaultProviderId = "dashscope";
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1");
        config.setApiKey("dashscope-key");
        config.setModel("qwen3.5-flash");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put(defaultProviderId, config);

        when(properties.getDefaultProvider()).thenReturn(defaultProviderId);
        when(properties.getProviders()).thenReturn(providers);

        // When
        ChatClient client = registry.getDefaultChatClient();

        // Then
        assertNotNull(client);
    }

    @Test
    @DisplayName("reload clears cache and allows re-creation")
    void testReload() {
        String providerId = "test-provider";
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("http://localhost:1234/v1");
        config.setApiKey("test-key");
        config.setModel("test-model");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put(providerId, config);

        when(properties.getProviders()).thenReturn(providers);

        ChatClient client1 = registry.getChatClient(providerId);
        registry.reload();
        when(properties.getProviders()).thenReturn(providers);
        ChatClient client2 = registry.getChatClient(providerId);

        assertNotNull(client1);
        assertNotNull(client2);
        assertNotSame(client1, client2, "After reload, new client should be created");
    }

    @Nested
    @DisplayName("getChatClientOrDefault 回退逻辑")
    class GetChatClientOrDefault {

        private ProviderConfig defaultConfig;
        private ProviderConfig explicitConfig;
        private Map<String, ProviderConfig> providers;

        @BeforeEach
        void setUpProviders() {
            defaultConfig = new ProviderConfig();
            defaultConfig.setBaseUrl("https://dashscope.aliyuncs.com/compatible-mode/v1");
            defaultConfig.setApiKey("default-key");
            defaultConfig.setModel("qwen3.5-flash");

            explicitConfig = new ProviderConfig();
            explicitConfig.setBaseUrl("https://api.moonshot.cn/v1");
            explicitConfig.setApiKey("kimi-key");
            explicitConfig.setModel("kimi-latest");

            providers = new HashMap<>();
            providers.put("dashscope", defaultConfig);
            providers.put("kimi", explicitConfig);

            lenient().when(properties.getDefaultProvider()).thenReturn("dashscope");
            when(properties.getProviders()).thenReturn(providers);
        }

        @Test
        @DisplayName("非 null providerId 委托给 getChatClient")
        void explicitProvider() {
            ChatClient client = registry.getChatClientOrDefault("kimi");

            assertNotNull(client);
            // Should be cached under "kimi" key, not default
            assertSame(client, registry.getChatClient("kimi"));
        }

        @Test
        @DisplayName("null providerId 回退到默认 provider")
        void nullProviderFallsBackToDefault() {
            ChatClient client = registry.getChatClientOrDefault(null);

            assertNotNull(client);
            assertSame(client, registry.getChatClient("dashscope"));
        }

        @Test
        @DisplayName("空白 providerId 回退到默认 provider")
        void blankProviderFallsBackToDefault() {
            ChatClient client = registry.getChatClientOrDefault("   ");

            assertNotNull(client);
            assertSame(client, registry.getChatClient("dashscope"));
        }

        @Test
        @DisplayName("default providerId 作为默认 provider 别名")
        void defaultAliasFallsBackToDefault() {
            ChatClient client = registry.getChatClientOrDefault("default");

            assertNotNull(client);
            assertSame(client, registry.getChatClient("dashscope"));
        }
    }

    @Test
    @DisplayName("纯向量 Provider 调 getChatClient 抛出业务异常")
    void embeddingOnlyProviderChatClientThrows() {
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("http://localhost:1234/v1");
        config.setApiKey("key");
        config.setEmbeddingModel("text-embedding-v3");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put("emb-only", config);
        when(properties.getProviders()).thenReturn(providers);

        assertThrows(BusinessException.class, () -> registry.getChatClient("emb-only"));
    }

    @Test
    @DisplayName("纯向量 Provider 可创建 EmbeddingModel")
    void embeddingOnlyProviderEmbeddingModelWorks() {
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("http://localhost:1234/v1");
        config.setApiKey("key");
        config.setEmbeddingModel("text-embedding-v3");
        config.setEmbeddingDimensions(1024);

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put("emb-only", config);
        when(properties.getProviders()).thenReturn(providers);

        assertNotNull(registry.getEmbeddingModel("emb-only"));
    }

    @Test
    @DisplayName("默认 Rerank Provider：未配置时返回空")
    void defaultRerankProviderEmptyWhenNotConfigured() {
        when(properties.getDefaultRerankProvider()).thenReturn(null);

        assertTrue(registry.getDefaultRerankProvider().isEmpty());
    }

    @Test
    @DisplayName("默认 Rerank Provider：配置后返回快照")
    void defaultRerankProviderResolved() {
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("https://api.example.com/v1");
        config.setApiKey("key");
        config.setRerankModel("bge-reranker-v2-m3");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put("rerank-p", config);
        when(properties.getDefaultRerankProvider()).thenReturn("rerank-p");
        when(properties.getProviders()).thenReturn(providers);

        var snapshot = registry.getDefaultRerankProvider();

        assertTrue(snapshot.isPresent());
        assertEquals("bge-reranker-v2-m3", snapshot.get().rerankModel());
        assertEquals("cohere", snapshot.get().rerankApiFormat());
    }

    @Test
    @DisplayName("默认 Rerank Provider：目标 Provider 缺少 rerank 模型时返回空")
    void defaultRerankProviderEmptyWithoutRerankModel() {
        ProviderConfig config = new ProviderConfig();
        config.setBaseUrl("https://api.example.com/v1");
        config.setApiKey("key");

        Map<String, ProviderConfig> providers = new HashMap<>();
        providers.put("rerank-p", config);
        when(properties.getDefaultRerankProvider()).thenReturn("rerank-p");
        when(properties.getProviders()).thenReturn(providers);

        assertTrue(registry.getDefaultRerankProvider().isEmpty());
    }

    @Test
    @org.junit.jupiter.api.Disabled(
        "Pending: ProviderConfig.enabled flag + PROVIDER_DISABLED error code not yet implemented"
    )
    @DisplayName("getChatClient 对 disabled provider 应抛 PROVIDER_DISABLED（占位，待实现）")
    void testGetChatClient_disabledProvider() {
        // 占位测试：等 ProviderConfig 补齐 enabled 字段 + Registry 实现禁用分支后恢复断言。
        // 不写任何 mock，避免 Mockito 严格模式把占位记为异常失败。
    }

    @Nested
    @DisplayName("OpenAI max_tokens 兜底决策")
    class ResolveOpenAiMaxTokens {

        @Test
        @DisplayName("显式配置时优先使用配置值，不被兜底覆盖")
        void configuredValueWins() {
            assertEquals(4096, LlmProviderRegistry.resolveOpenAiMaxTokens(4096, 8192));
        }

        @Test
        @DisplayName("未配置时使用兜底值，避免 JSON 被截断")
        void nullFallsBackToDefault() {
            assertEquals(8192, LlmProviderRegistry.resolveOpenAiMaxTokens(null, 8192));
        }

        @Test
        @DisplayName("兜底值非正数时不下发该字段（保留旧行为，便于特殊服务端回退）")
        void nonPositiveFallbackMeansOmit() {
            assertNull(LlmProviderRegistry.resolveOpenAiMaxTokens(null, 0));
            assertNull(LlmProviderRegistry.resolveOpenAiMaxTokens(null, -1));
        }

        @Test
        @DisplayName("兜底被关闭时仍尊重显式配置值")
        void explicitValueSurvivesDisabledFallback() {
            assertEquals(2048, LlmProviderRegistry.resolveOpenAiMaxTokens(2048, 0));
        }
    }
}
