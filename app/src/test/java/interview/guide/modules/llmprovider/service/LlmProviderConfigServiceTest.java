package interview.guide.modules.llmprovider.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.config.LlmProviderProperties;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.llmprovider.dto.CreateProviderRequest;
import interview.guide.modules.llmprovider.dto.DefaultProviderDTO;
import interview.guide.modules.llmprovider.dto.UpdateProviderRequest;
import interview.guide.modules.voiceinterview.config.VoiceInterviewProperties;
import interview.guide.modules.voiceinterview.service.QwenAsrService;
import interview.guide.modules.voiceinterview.service.QwenTtsService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("LlmProviderConfigService 测试")
class LlmProviderConfigServiceTest {

    @Mock private LlmProviderProperties properties;
    @Mock private LlmProviderRegistry registry;
    @Mock private VoiceInterviewProperties voiceProperties;
    @Mock private QwenAsrService asrService;
    @Mock private QwenTtsService ttsService;

    private LlmProviderConfigService service;

    @BeforeEach
    void setUp() {
        service = new LlmProviderConfigService(
            properties,
            registry,
            voiceProperties,
            asrService,
            ttsService
        );
    }

    @Nested
    @DisplayName("基础行为")
    class BasicBehavior {

        @Test
        @DisplayName("maskApiKey 返回脱敏值")
        void maskApiKeyReturnsMaskedValue() {
            assertEquals("sk-***xyz", service.maskApiKey("sk-abcdefxyz"));
            assertEquals("***", service.maskApiKey("ab"));
            assertEquals("abc***fgh", service.maskApiKey("abcdefgh"));
        }

        @Test
        @DisplayName("listProviders 在 providers 为空时返回空列表")
        void listProvidersReturnsEmptyWhenProvidersNull() {
            when(properties.getProviders()).thenReturn(null);

            assertTrue(service.listProviders().isEmpty());
        }

        @Test
        @DisplayName("getProvider 对未知 provider 抛出异常")
        void getProviderThrowsWhenProviderMissing() {
            when(properties.getProviders()).thenReturn(new HashMap<>());

            assertThrows(BusinessException.class, () -> service.getProvider("unknown"));
        }

        @Test
        @DisplayName("GLM base-url 测试连接不应重复拼接 /v1")
        void buildConnectivityUrlsAvoidsDoubleVersionForGlm() throws Exception {
            List<String> urls = invokeConnectivityUrls("https://open.bigmodel.cn/api/coding/paas/v4");

            assertEquals(List.of("https://open.bigmodel.cn/api/coding/paas/v4/chat/completions"), urls);
        }

        @Test
        @DisplayName("测试连接请求体不再强制携带 temperature")
        void connectivityRequestBodyOmitsTemperature() throws Exception {
            Map<String, Object> body = invokeConnectivityRequestBody("kimi-latest");

            assertEquals("kimi-latest", body.get("model"));
            assertEquals(1, body.get("max_tokens"));
            assertTrue(body.containsKey("messages"));
            assertTrue(!body.containsKey("temperature"));
        }
    }

    @Nested
    @DisplayName("Provider 管理")
    class ProviderManagement {

        @Test
        @DisplayName("createProvider 对重复 id 抛出异常")
        void createProviderThrowsForDuplicateId() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new HashMap<>();
            providers.put("existing", createProviderConfig("http://localhost:1234", "key", "model", null));
            when(properties.getProviders()).thenReturn(providers);

            CreateProviderRequest request = new CreateProviderRequest(
                "existing",
                "http://localhost:1234",
                "key",
                "model",
                null,
                null
            );

            assertThrows(BusinessException.class, () -> service.createProvider(request));
        }

        @Test
        @DisplayName("deleteProvider 删除默认 provider 时抛出异常")
        void deleteProviderThrowsForDefaultProvider() {
            when(properties.getDefaultProvider()).thenReturn("dashscope");

            assertThrows(BusinessException.class, () -> service.deleteProvider("dashscope"));
        }

        @Test
        @DisplayName("updateProvider 允许清空 embedding model")
        void updateProviderAllowsClearingEmbeddingModel() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            LlmProviderProperties.ProviderConfig config = createProviderConfig(
                "https://dashscope.aliyuncs.com/compatible-mode/v1",
                "secret",
                "qwen-plus",
                "text-embedding-v3"
            );
            providers.put("dashscope", config);
            when(properties.getProviders()).thenReturn(providers);

            service.updateProvider("dashscope", new UpdateProviderRequest(null, null, null, "", null));

            assertNull(config.getEmbeddingModel());
            verify(registry).reload();
        }

        @Test
        @DisplayName("updateProvider 对纯空白 embedding model 等价于清空")
        void updateProviderTreatsBlankEmbeddingModelAsClear() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            LlmProviderProperties.ProviderConfig config = createProviderConfig(
                "https://dashscope.aliyuncs.com/compatible-mode/v1",
                "secret",
                "qwen-plus",
                "text-embedding-v3"
            );
            providers.put("dashscope", config);
            when(properties.getProviders()).thenReturn(providers);

            service.updateProvider("dashscope", new UpdateProviderRequest(null, null, null, "   ", null));

            assertNull(config.getEmbeddingModel());
            verify(registry).reload();
        }

        @Test
        @DisplayName("updateProvider 拒绝空串 baseUrl / apiKey")
        void updateProviderRejectsBlankRequiredFields() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            providers.put("dashscope",
                createProviderConfig("https://dashscope.aliyuncs.com", "secret", "qwen-plus", null));
            when(properties.getProviders()).thenReturn(providers);

            assertThrows(BusinessException.class, () ->
                service.updateProvider("dashscope",
                    new UpdateProviderRequest("", null, null, null, null)));
            assertThrows(BusinessException.class, () ->
                service.updateProvider("dashscope",
                    new UpdateProviderRequest("   ", null, null, null, null)));
            assertThrows(BusinessException.class, () ->
                service.updateProvider("dashscope",
                    new UpdateProviderRequest(null, "  ", null, null, null)));
        }
    }

    @Nested
    @DisplayName("全局默认 Provider")
    class DefaultProviderBehavior {

        @Test
        @DisplayName("updateDefaultProvider 拒绝未知 provider")
        void updateDefaultProviderRejectsUnknownProvider() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            providers.put("dashscope", createProviderConfig("https://dashscope.aliyuncs.com", "key", "qwen", null));
            when(properties.getProviders()).thenReturn(providers);

            BusinessException exception = assertThrows(
                BusinessException.class,
                () -> service.updateDefaultProvider(new DefaultProviderDTO("unknown"))
            );

            assertEquals(ErrorCode.PROVIDER_NOT_FOUND.getCode(), exception.getCode());
            verify(properties, never()).setDefaultProvider("unknown");
            verify(registry, never()).reload();
        }

        @Test
        @DisplayName("updateDefaultProvider 写入新的默认 provider")
        void updateDefaultProviderPersistsValue() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            providers.put("dashscope", createProviderConfig("https://dashscope.aliyuncs.com", "key", "qwen", null));
            providers.put("glm", createProviderConfig("https://open.bigmodel.cn/api/coding/paas/v4", "key", "glm-4-flash", null));
            when(properties.getProviders()).thenReturn(providers);

            service.updateDefaultProvider(new DefaultProviderDTO("glm"));

            verify(properties).setDefaultProvider("glm");
            verify(registry).reload();
        }
    }

    @Nested
    @DisplayName("Provider 能力拆分")
    class CapabilitySplit {

        @Test
        @DisplayName("createProvider 支持纯向量 Provider（不填聊天模型）")
        void createEmbeddingOnlyProviderWithoutChatModel() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            service.createProvider(new CreateProviderRequest(
                "emb-only", "https://api.example.com/v1", "key",
                null, null, "text-embedding-v3", 1024, true,
                null, null, null, null, null));

            assertTrue(providers.containsKey("emb-only"));
            assertNull(providers.get("emb-only").getModel());
            assertEquals("text-embedding-v3", providers.get("emb-only").getEmbeddingModel());
        }

        @Test
        @DisplayName("createProvider 聊天/向量/Rerank 都为空时拒绝")
        void createProviderRejectsWhenNoCapability() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            BusinessException exception = assertThrows(BusinessException.class, () ->
                service.createProvider(new CreateProviderRequest(
                    "empty", "https://api.example.com/v1", "key",
                    null, null, null, null, null, null, null, null, null, null)));

            assertEquals(ErrorCode.BAD_REQUEST.getCode(), exception.getCode());
        }

        @Test
        @DisplayName("向量模型名含 embed（如 Ollama 的 qwen3-embedding:4b）不会被误判为聊天模型")
        void createProviderAcceptsEmbeddingModelWithEmbedInName() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            service.createProvider(new CreateProviderRequest(
                "ollama-emb", "http://localhost:11434/v1", "key",
                null, null, "qwen3-embedding:4b", 1024, true,
                null, null, null, null, null));

            assertEquals("qwen3-embedding:4b", providers.get("ollama-emb").getEmbeddingModel());
        }

        @Test
        @DisplayName("向量模型填真实聊天模型名（如 qwen-plus）仍然拒绝")
        void createProviderRejectsChatModelAsEmbeddingModel() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            BusinessException exception = assertThrows(BusinessException.class, () ->
                service.createProvider(new CreateProviderRequest(
                    "bad-emb", "https://api.example.com/v1", "key",
                    null, null, "qwen-plus", 1024, true,
                    null, null, null, null, null)));

            assertEquals(ErrorCode.BAD_REQUEST.getCode(), exception.getCode());
        }

        @Test
        @DisplayName("createProvider 支持纯 Rerank Provider 并写入协议格式")
        void createRerankOnlyProvider() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            service.createProvider(new CreateProviderRequest(
                "rerank-only", "https://api.example.com/v1", "key",
                null, null, null, null, null,
                "bge-reranker-v2-m3", "cohere", null, null, null));

            assertEquals("bge-reranker-v2-m3", providers.get("rerank-only").getRerankModel());
            assertEquals("cohere", providers.get("rerank-only").getRerankApiFormat());
        }

        @Test
        @DisplayName("createProvider 支持 anthropic 聊天协议格式")
        void createAnthropicProvider() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            service.createProvider(new CreateProviderRequest(
                "claude", "https://api.anthropic.com", "key",
                "claude-sonnet-4-5", "anthropic", null, null, null,
                null, null, 4096, 0.9, null));

            assertEquals("anthropic", providers.get("claude").getApiFormat());
            assertEquals(Integer.valueOf(4096), providers.get("claude").getMaxTokens());
            assertEquals(Double.valueOf(0.9), providers.get("claude").getTopP());
        }

        @Test
        @DisplayName("createProvider 拒绝非法协议格式")
        void createProviderRejectsInvalidApiFormat() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            when(properties.getProviders()).thenReturn(providers);

            assertThrows(BusinessException.class, () ->
                service.createProvider(new CreateProviderRequest(
                    "bad", "https://api.example.com/v1", "key",
                    "model", "grpc", null, null, null, null, null, null, null, null)));
        }

        @Test
        @DisplayName("updateProvider 允许清空聊天模型（仍有向量能力时）")
        void updateProviderAllowsClearingChatModel() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            LlmProviderProperties.ProviderConfig config = createProviderConfig(
                "https://dashscope.aliyuncs.com/compatible-mode/v1", "secret", "qwen-plus", "text-embedding-v3");
            providers.put("dashscope", config);
            when(properties.getProviders()).thenReturn(providers);

            service.updateProvider("dashscope", new UpdateProviderRequest(null, null, "", null, null));

            assertNull(config.getModel());
            verify(registry).reload();
        }

        @Test
        @DisplayName("updateProvider 清空所有能力时拒绝")
        void updateProviderRejectsWhenAllCapabilitiesCleared() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            providers.put("dashscope",
                createProviderConfig("https://dashscope.aliyuncs.com", "secret", "qwen-plus", null));
            when(properties.getProviders()).thenReturn(providers);

            assertThrows(BusinessException.class, () ->
                service.updateProvider("dashscope", new UpdateProviderRequest(null, null, "", null, null)));
        }

        @Test
        @DisplayName("updateDefaultRerankProvider 未配置 Rerank 时拒绝")
        void updateDefaultRerankProviderRejectsMissingRerank() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            providers.put("chat-only",
                createProviderConfig("https://api.example.com/v1", "key", "model-x", null));
            when(properties.getProviders()).thenReturn(providers);

            BusinessException exception = assertThrows(BusinessException.class, () ->
                service.updateDefaultRerankProvider(new DefaultProviderDTO(null, null, "chat-only")));

            assertEquals(ErrorCode.BAD_REQUEST.getCode(), exception.getCode());
        }

        @Test
        @DisplayName("updateDefaultRerankProvider 成功写入默认重排服务")
        void updateDefaultRerankProviderPersistsValue() {
            Map<String, LlmProviderProperties.ProviderConfig> providers = new LinkedHashMap<>();
            LlmProviderProperties.ProviderConfig config =
                createProviderConfig("https://api.example.com/v1", "key", null, null);
            config.setRerankModel("bge-reranker-v2-m3");
            providers.put("rerank-p", config);
            when(properties.getProviders()).thenReturn(providers);

            service.updateDefaultRerankProvider(new DefaultProviderDTO(null, null, "rerank-p"));

            verify(properties).setDefaultRerankProvider("rerank-p");
            verify(registry).reload();
        }

    }

    private LlmProviderProperties.ProviderConfig createProviderConfig(
        String baseUrl,
        String apiKey,
        String model,
        String embeddingModel
    ) {
        LlmProviderProperties.ProviderConfig config = new LlmProviderProperties.ProviderConfig();
        config.setBaseUrl(baseUrl);
        config.setApiKey(apiKey);
        config.setModel(model);
        config.setEmbeddingModel(embeddingModel);
        return config;
    }

    @SuppressWarnings("unchecked")
    private List<String> invokeConnectivityUrls(String baseUrl)
        throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Method method = LlmProviderConfigService.class.getDeclaredMethod(
            "buildConnectivityTestUrls",
            String.class
        );
        method.setAccessible(true);
        return (List<String>) method.invoke(service, baseUrl);
    }

    @SuppressWarnings("unchecked")
    private Map<String, Object> invokeConnectivityRequestBody(String model)
        throws NoSuchMethodException, InvocationTargetException, IllegalAccessException {
        Method method = LlmProviderConfigService.class.getDeclaredMethod(
            "buildConnectivityTestRequestBody",
            String.class
        );
        method.setAccessible(true);
        return (Map<String, Object>) method.invoke(service, model);
    }
}
