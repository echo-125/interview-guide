package interview.guide.modules.interviewschedule.service;

import com.sun.net.httpserver.HttpServer;
import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.PromptSanitizer;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.ai.StructuredOutputProperties;
import interview.guide.common.config.LlmProviderProperties;
import interview.guide.common.config.LlmProviderProperties.ProviderConfig;
import interview.guide.modules.interviewschedule.model.ParseResponse;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.ai.model.tool.DefaultToolCallingManager;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * 回归测试：规则解析失败后，AI 回退必须走**系统默认 Provider**。
 *
 * <p>历史缺陷：把文本来源平台（feishu/tencent/zoom）当作 LLM Provider ID 透传给
 * {@code getChatClientOrDefault}。注册表里没有名为 "feishu" 的模型，于是抛
 * PROVIDER_NOT_FOUND；该异常又被 parseWithAI 的 catch 吞掉，最终表现为
 * 「规则解析失败 → AI 解析也永远失败」，AI 回退形同虚设。
 */
@DisplayName("面试邀约 AI 回退必须使用默认 Provider")
class InterviewParseServiceAiFallbackTest {

  private HttpServer server;
  private final List<String> receivedPaths = new CopyOnWriteArrayList<>();
  private int port;

  @BeforeEach
  void startServer() throws IOException {
    server = HttpServer.create(new java.net.InetSocketAddress("127.0.0.1", 0), 0);
    server.createContext("/", exchange -> {
      receivedPaths.add(exchange.getRequestURI().getPath());
      String body = """
          {
            "id": "chatcmpl-test",
            "object": "chat.completion",
            "created": 0,
            "model": "test",
            "choices": [{
              "index": 0,
              "message": {
                "role": "assistant",
                "content": "{\\"companyName\\":\\"字节跳动\\",\\"position\\":\\"后端工程师\\",\\"interviewTime\\":\\"2026-10-01T14:00:00\\"}"
              },
              "finish_reason": "stop"
            }],
            "usage": {"prompt_tokens": 1, "completion_tokens": 1, "total_tokens": 2}
          }
          """;
      byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
      exchange.getResponseHeaders().add("Content-Type", "application/json");
      exchange.sendResponseHeaders(200, bytes.length);
      try (OutputStream os = exchange.getResponseBody()) {
        os.write(bytes);
      }
    });
    server.start();
    port = server.getAddress().getPort();
  }

  @AfterEach
  void stopServer() {
    server.stop(0);
  }

  private InterviewParseService buildService() {
    LlmProviderProperties properties = new LlmProviderProperties();
    ProviderConfig config = new ProviderConfig();
    config.setBaseUrl("http://127.0.0.1:" + port);
    config.setApiKey("test-key");
    config.setModel("test-model");
    Map<String, ProviderConfig> providers = new HashMap<>();
    providers.put("dashscope", config);
    properties.setProviders(providers);
    // 默认 Provider 名为 dashscope —— 与来源平台（feishu）毫无关系
    properties.setDefaultProvider("dashscope");

    LlmProviderRegistry registry = new LlmProviderRegistry(
        properties, DefaultToolCallingManager.builder().build(), null, null);
    // 关闭 schema validation：本测试只需验证「走默认 Provider」，走 content 解析路径最确定
    StructuredOutputProperties outputProps = new StructuredOutputProperties();
    outputProps.setStructuredSchemaValidationEnabled(false);
    StructuredOutputInvoker invoker = new StructuredOutputInvoker(outputProps, null);
    return new InterviewParseService(registry, invoker, new PromptSanitizer(properties));
  }

  @Test
  @DisplayName("source=feishu 且规则解析失败时，AI 回退仍能命中默认 Provider")
  void aiFallbackWithSourceAsPlatformStillSucceeds() {
    InterviewParseService service = buildService();
    // 文本刻意不匹配任何规则格式，强制走到 AI 回退分支
    String rawText = "这是一段无法被规则解析的面试邀约文本，没有链接与可用时间格式";

    ParseResponse response = service.parse(rawText, "feishu");

    assertThat(receivedPaths)
        .as("必须真的向默认 Provider 发起请求，而不是因查不到 'feishu' 而短路")
        .isNotEmpty();
    assertThat(response.getParseMethod()).isEqualTo("ai");
    assertThat(response.getSuccess()).isTrue();
    assertThat(response.getData().getCompanyName()).isEqualTo("字节跳动");
  }

  @Test
  @DisplayName("source 为 null 时同样走默认 Provider")
  void aiFallbackWithoutSourceSucceeds() {
    InterviewParseService service = buildService();
    String rawText = "一段没有规则可识别特征的邀约文本";

    ParseResponse response = service.parse(rawText, null);

    assertThat(receivedPaths).isNotEmpty();
    assertThat(response.getParseMethod()).isEqualTo("ai");
  }
}
