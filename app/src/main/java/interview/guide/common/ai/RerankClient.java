package interview.guide.common.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import interview.guide.common.ai.LlmProviderRegistry.RerankProviderSnapshot;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.http.client.ClientHttpRequestFactoryBuilder;
import org.springframework.boot.http.client.HttpClientSettings;
import org.springframework.boot.http.client.InetAddressFilter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;

import java.net.InetAddress;
import java.net.URI;
import java.time.Duration;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Rerank（重排）模型客户端，支持 cohere 兼容格式（Jina/SiliconFlow/Cohere/vLLM 等）
 * 与 dashscope 原生格式（百炼 gte-rerank）。
 *
 * <p>Provider 快照来自 {@link LlmProviderRegistry#getDefaultRerankProvider()}；
 * 未配置默认 Rerank 服务时 RAG 检索跳过重排。
 */
@Component
@Slf4j
public class RerankClient {

  private static final String RERANK_API_FORMAT_DASHSCOPE = "dashscope";
  private static final String DASHSCOPE_RERANK_PATH = "/api/v1/services/rerank/text-rerank/text-rerank";
  private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

  private final LlmProviderRegistry registry;
  /**
   * 按 apiKey 缓存 RestClient，避免每次重排调用都新建 JDK HttpClient。
   * RestClient 构建后线程安全；apiKey 变更时 computeIfAbsent 自动重建。
   */
  private final Map<String, RestClient> restClientCache = new ConcurrentHashMap<>();

  public RerankClient(LlmProviderRegistry registry) {
    this.registry = registry;
  }

  /**
   * 判断 Rerank 能力是否可用（是否配置了默认 Rerank Provider）。
   */
  public boolean isAvailable() {
    return registry.getDefaultRerankProvider().isPresent();
  }

  /**
   * 调用默认 Rerank 服务对文档重排。
   *
   * @return 按相关性降序的结果列表；仅包含服务返回的候选
   * @throws BusinessException 服务未配置或调用失败时抛出，由调用方决定是否回退向量排序
   */
  public List<RerankResult> rerank(String query, List<String> documents, int topN) {
    RerankProviderSnapshot provider = registry.getDefaultRerankProvider()
        .orElseThrow(() -> new BusinessException(ErrorCode.PROVIDER_CONFIG_READ_FAILED,
            "未配置默认 Rerank 服务，无法执行重排"));
    if (documents == null || documents.isEmpty()) {
      return List.of();
    }

    Map<String, Object> requestBody = RERANK_API_FORMAT_DASHSCOPE.equals(provider.rerankApiFormat())
        ? buildDashscopeRequest(provider.rerankModel(), query, documents, topN)
        : buildCohereRequest(provider.rerankModel(), query, documents, topN);
    List<String> candidateUrls = RERANK_API_FORMAT_DASHSCOPE.equals(provider.rerankApiFormat())
        ? buildDashscopeRerankUrls(provider.baseUrl())
        : buildCandidateUrls(provider.baseUrl(), "rerank");

    String responseBody = null;
    String lastFailure = "Unknown error";
    for (String targetUrl : candidateUrls) {
      try {
        // SSRF 纵深防御：入口对目标 URL 校验（客户端级 InetAddressFilter 保持不变）
        UrlAccessGuard.assertExternalUrl(targetUrl);
        responseBody = buildRestClient(provider.apiKey())
            .post()
            .uri(URI.create(targetUrl))
            .body(requestBody)
            .retrieve()
            .body(String.class);
        List<RerankResult> results = parseResults(responseBody, provider.rerankApiFormat());
        log.info("Rerank succeeded: provider={}, url={}, documents={}, results={}",
            provider.providerId(), targetUrl, documents.size(), results.size());
        return results;
      } catch (RestClientResponseException e) {
        lastFailure = String.format("HTTP %s on %s, body=%s",
            e.getStatusCode().value(), targetUrl,
            abbreviate(e.getResponseBodyAsString()));
        log.warn("Rerank call failed: provider={}, url={}, status={}, body={}",
            provider.providerId(), targetUrl, e.getStatusCode().value(),
            abbreviate(e.getResponseBodyAsString()), e);
      } catch (Exception e) {
        lastFailure = String.format("%s on %s: %s", e.getClass().getSimpleName(), targetUrl, e.getMessage());
        log.warn("Rerank call failed: provider={}, url={}, error={}",
            provider.providerId(), targetUrl, e.getMessage(), e);
      }
    }
    throw new BusinessException(ErrorCode.BAD_REQUEST, "Rerank 调用失败: " + lastFailure);
  }

  private RestClient buildRestClient(String apiKey) {
    return restClientCache.computeIfAbsent(apiKey, key -> {
      HttpClientSettings settings = HttpClientSettings.defaults()
          .withConnectTimeout(Duration.ofSeconds(5))
          .withReadTimeout(Duration.ofSeconds(10))
          .withInetAddressFilter(
              InetAddressFilter.externalAddresses()
                  .or(InetAddressFilter.adapt(InetAddress::isLoopbackAddress))
                  .or("198.18.0.0/15"));
      return RestClient.builder()
          .defaultHeader("Authorization", "Bearer " + apiKey)
          .requestFactory(ClientHttpRequestFactoryBuilder.jdk().build(settings))
          .build();
    });
  }

  private Map<String, Object> buildCohereRequest(String model, String query, List<String> documents, int topN) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("query", query);
    requestBody.put("documents", documents);
    if (topN > 0) {
      requestBody.put("top_n", topN);
    }
    return requestBody;
  }

  private Map<String, Object> buildDashscopeRequest(String model, String query, List<String> documents, int topN) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("input", Map.of(
        "query", query,
        "documents", documents));
    Map<String, Object> parameters = new LinkedHashMap<>();
    parameters.put("return_documents", false);
    if (topN > 0) {
      parameters.put("top_n", topN);
    }
    requestBody.put("parameters", parameters);
    return requestBody;
  }

  private List<String> buildCandidateUrls(String baseUrl, String path) {
    String normalized = ApiPathResolver.stripTrailingSlashes(baseUrl);
    LinkedHashSet<String> urls = new LinkedHashSet<>();
    urls.add(normalized + "/" + path);
    if (!ApiPathResolver.baseUrlContainsVersion(normalized)) {
      urls.add(normalized + "/v1/" + path);
    }
    return List.copyOf(urls);
  }

  private List<String> buildDashscopeRerankUrls(String baseUrl) {
    LinkedHashSet<String> urls = new LinkedHashSet<>();
    try {
      URI base = URI.create(ApiPathResolver.stripTrailingSlashes(baseUrl));
      if (base.getHost() != null && base.getHost().contains("dashscope")) {
        urls.add(new URI(base.getScheme(), base.getAuthority(), DASHSCOPE_RERANK_PATH, null, null).toString());
      }
    } catch (Exception e) {
      log.debug("Failed to derive dashscope rerank url from baseUrl {}: {}", baseUrl, e.getMessage());
    }
    urls.add("https://dashscope.aliyuncs.com" + DASHSCOPE_RERANK_PATH);
    return List.copyOf(urls);
  }

  /**
   * 统一解析两种格式的响应：{@code results[index, relevance_score]}，
   * dashscope 原生格式结果嵌在 {@code output} 节点下。
   */
  private List<RerankResult> parseResults(String responseBody, String rerankApiFormat) {
    try {
      JsonNode root = OBJECT_MAPPER.readTree(responseBody == null ? "{}" : responseBody);
      JsonNode resultsNode = RERANK_API_FORMAT_DASHSCOPE.equals(rerankApiFormat)
          ? root.path("output").path("results")
          : root.path("results");
      List<RerankResult> results = new ArrayList<>();
      if (resultsNode.isArray()) {
        for (JsonNode item : resultsNode) {
          JsonNode indexNode = item.path("index");
          JsonNode scoreNode = item.path("relevance_score");
          if (indexNode.isInt() && scoreNode.isNumber()) {
            results.add(new RerankResult(indexNode.asInt(), scoreNode.asDouble()));
          }
        }
      }
      if (results.isEmpty()) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "Rerank 响应中没有有效结果");
      }
      return results;
    } catch (BusinessException e) {
      throw e;
    } catch (Exception e) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "解析 Rerank 响应失败: " + e.getMessage());
    }
  }

  private String abbreviate(String text) {
    if (text == null || text.isBlank()) {
      return "[no body]";
    }
    String normalized = text.replaceAll("\\s+", " ").trim();
    return normalized.length() <= 200 ? normalized : normalized.substring(0, 200) + "...";
  }

  /**
   * @param index 候选文档在原始列表中的下标
   * @param score 相关性分数（越大越相关）
   */
  public record RerankResult(int index, double score) {
  }
}
