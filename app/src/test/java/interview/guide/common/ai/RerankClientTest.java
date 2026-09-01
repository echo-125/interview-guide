package interview.guide.common.ai;

import com.sun.net.httpserver.HttpServer;
import interview.guide.common.ai.LlmProviderRegistry.RerankProviderSnapshot;
import interview.guide.common.exception.BusinessException;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;
import java.io.InputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("RerankClient 测试")
class RerankClientTest {

    @Mock
    private LlmProviderRegistry registry;

    private RerankClient client;

    @BeforeEach
    void setUp() {
        client = new RerankClient(registry);
    }

    @Nested
    @DisplayName("默认 Rerank 解析")
    class DefaultResolution {

        @Test
        @DisplayName("未配置默认 Rerank 服务时抛出业务异常")
        void throwsWhenNoDefaultProvider() {
            when(registry.getDefaultRerankProvider()).thenReturn(Optional.empty());

            assertThrows(BusinessException.class, () -> client.rerank("q", List.of("a"), 5));
        }
    }

    @Nested
    @DisplayName("Cohere 兼容格式")
    class CohereFormat {

        private HttpServer server;
        private final AtomicReference<String> requestBody = new AtomicReference<>();
        private final AtomicReference<String> requestPath = new AtomicReference<>();

        @BeforeEach
        void startServer() throws IOException {
            server = HttpServer.create(new InetSocketAddress(0), 0);
            server.createContext("/v1/rerank", exchange -> {
                try (InputStream in = exchange.getRequestBody()) {
                    requestBody.set(new String(in.readAllBytes(), StandardCharsets.UTF_8));
                }
                requestPath.set(exchange.getRequestURI().getPath());
                byte[] response = """
                    {"results":[
                      {"index":1,"relevance_score":0.9},
                      {"index":0,"relevance_score":0.2}
                    ]}
                    """.getBytes(StandardCharsets.UTF_8);
                exchange.getResponseHeaders().set("Content-Type", "application/json");
                exchange.sendResponseHeaders(200, response.length);
                exchange.getResponseBody().write(response);
                exchange.close();
            });
            server.start();
        }

        @AfterEach
        void stopServer() {
            server.stop(0);
        }

        @Test
        @DisplayName("POST /rerank 并按相关性解析结果")
        void postsAndParsesResults() {
            String baseUrl = "http://localhost:" + server.getAddress().getPort() + "/v1";
            when(registry.getDefaultRerankProvider()).thenReturn(Optional.of(
                new RerankProviderSnapshot("rerank-p", baseUrl, "secret-key", "bge-reranker-v2-m3", "cohere")));

            List<RerankClient.RerankResult> results =
                client.rerank("什么是向量检索", List.of("doc-a", "doc-b"), 2);

            assertEquals(2, results.size());
            assertEquals(1, results.get(0).index());
            assertEquals(0.9, results.get(0).score(), 1e-6);
            assertEquals(0, results.get(1).index());
            assertEquals("/v1/rerank", requestPath.get());
            assertTrue(requestBody.get().contains("\"model\":\"bge-reranker-v2-m3\""));
            assertTrue(requestBody.get().contains("\"query\":\"什么是向量检索\""));
            assertTrue(requestBody.get().contains("\"top_n\":2"));
        }

        @Test
        @DisplayName("服务返回 500 时抛出业务异常")
        void throwsOnServerError() {
            HttpServer failingServer = null;
            try {
                failingServer = HttpServer.create(new InetSocketAddress(0), 0);
                failingServer.createContext("/rerank", exchange -> {
                    byte[] response = "boom".getBytes(StandardCharsets.UTF_8);
                    exchange.sendResponseHeaders(500, response.length);
                    exchange.getResponseBody().write(response);
                    exchange.close();
                });
                failingServer.start();
                String baseUrl = "http://localhost:" + failingServer.getAddress().getPort() + "/v1";
                when(registry.getDefaultRerankProvider()).thenReturn(Optional.of(
                    new RerankProviderSnapshot("rerank-p", baseUrl, "key", "bge-reranker-v2-m3", "cohere")));

                assertThrows(BusinessException.class, () ->
                    client.rerank("q", List.of("a"), 1));
            } catch (IOException e) {
                throw new RuntimeException(e);
            } finally {
                if (failingServer != null) {
                    failingServer.stop(0);
                }
            }
        }
    }
}
