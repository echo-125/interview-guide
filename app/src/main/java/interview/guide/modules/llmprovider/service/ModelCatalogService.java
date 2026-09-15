package interview.guide.modules.llmprovider.service;

import com.anthropic.client.okhttp.AnthropicOkHttpClient;
import com.anthropic.models.models.ModelListPage;
import com.openai.client.OpenAIClient;
import com.openai.models.models.Model;
import interview.guide.common.ai.ApiPathResolver;
import interview.guide.common.ai.UrlAccessGuard;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.util.TextUtil;
import interview.guide.modules.llmprovider.dto.FetchModelsRequest;
import interview.guide.modules.llmprovider.model.LlmProviderEntity;
import interview.guide.modules.llmprovider.repository.LlmProviderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

/**
 * 从供应商端点拉取可用模型列表（OpenAI 兼容 /v1/models 与 Anthropic /v1/models）。
 */
@Service
@Slf4j
@RequiredArgsConstructor
public class ModelCatalogService {

  private static final String API_FORMAT_ANTHROPIC = "anthropic";
  private static final int MAX_PAGE_FETCHES = 10;

  private final LlmProviderRepository providerRepository;

  public List<String> fetchModels(FetchModelsRequest request) {
    String providerId = TextUtil.trimToNull(request.providerId());
    String baseUrl = TextUtil.trimToNull(request.baseUrl());
    String apiKey = TextUtil.trimToNull(request.apiKey());
    String apiFormat = TextUtil.trimToNull(request.apiFormat());

    if (providerId != null) {
      LlmProviderEntity provider = providerRepository.findById(providerId)
          .orElseThrow(() -> new BusinessException(ErrorCode.PROVIDER_NOT_FOUND,
              "Provider '" + providerId + "' 不存在"));
      if (baseUrl == null) {
        baseUrl = provider.getBaseUrl();
      }
      if (apiKey == null) {
        apiKey = provider.getApiKey();
      }
      if (apiFormat == null) {
        apiFormat = provider.getApiFormat();
      }
    }
    if (baseUrl == null || apiKey == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "baseUrl 与 apiKey 不能为空");
    }
    if (isBlank(apiFormat) || !"anthropic".equalsIgnoreCase(apiFormat)) {
      return fetchOpenAiModels(baseUrl, apiKey);
    }
    return fetchAnthropicModels(baseUrl, apiKey);
  }

  private List<String> fetchOpenAiModels(String baseUrl, String apiKey) {
    try {
      OpenAIClient client = ApiPathResolver.buildOpenAiClient(baseUrl, apiKey);
      Set<String> modelIds = new LinkedHashSet<>();
      com.openai.models.models.ModelListPage page = client.models().list();
      int fetches = 0;
      collectPage(page.data(), modelIds);
      while (page.hasNextPage() && ++fetches < MAX_PAGE_FETCHES) {
        page = page.nextPage();
        collectPage(page.data(), modelIds);
      }
      log.info("Fetched {} models from OpenAI-compatible endpoint: {}", modelIds.size(), baseUrl);
      return sorted(modelIds);
    } catch (BusinessException e) {
      throw e;
    } catch (Exception e) {
      log.warn("Failed to fetch model list: baseUrl={}, error={}", baseUrl, e.getMessage(), e);
      throw new BusinessException(ErrorCode.BAD_REQUEST, "获取模型列表失败: " + e.getMessage());
    }
  }

  private List<String> fetchAnthropicModels(String baseUrl, String apiKey) {
    // SSRF 防护：Anthropic SDK 不暴露自定义 OkHttpClient 入口，入口统一校验 baseUrl
    UrlAccessGuard.assertExternalUrl(baseUrl);
    com.anthropic.client.AnthropicClient client = AnthropicOkHttpClient.builder()
        .apiKey(apiKey)
        .baseUrl(ApiPathResolver.stripTrailingSlashes(baseUrl))
        .build();
    try {
      ModelListPage page = client.models().list();
      Set<String> modelIds = new LinkedHashSet<>();
      collectAnthropicPage(page, modelIds);
      log.info("Fetched {} models from Anthropic endpoint: {}", modelIds.size(), baseUrl);
      return sorted(modelIds);
    } catch (Exception e) {
      log.warn("Failed to fetch Anthropic model list: baseUrl={}, error={}", baseUrl, e.getMessage(), e);
      throw new BusinessException(ErrorCode.BAD_REQUEST, "获取模型列表失败: " + e.getMessage());
    } finally {
      client.close();
    }
  }

  private void collectPage(List<Model> models, Set<String> modelIds) {
    if (models == null) {
      return;
    }
    for (Model model : models) {
      if (model != null && model.id() != null && !model.id().isBlank()) {
        modelIds.add(model.id());
      }
    }
  }

  private void collectAnthropicPage(ModelListPage page, Set<String> modelIds) {
    if (page == null || page.data() == null) {
      return;
    }
    for (com.anthropic.models.models.ModelInfo model : page.data()) {
      if (model != null && model.id() != null && !model.id().isBlank()) {
        modelIds.add(model.id());
      }
    }
  }

  private List<String> sorted(Set<String> modelIds) {
    List<String> result = new ArrayList<>(modelIds);
    result.sort(Comparator.naturalOrder());
    return result;
  }

  private boolean isBlank(String value) {
    return value == null || value.isBlank();
  }
}
