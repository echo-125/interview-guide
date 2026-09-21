package interview.guide.modules.llmprovider.service;

import interview.guide.common.ai.ApiPathResolver;
import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.UrlAccessGuard;
import interview.guide.common.config.LlmProviderProperties;
import interview.guide.common.config.LlmProviderProperties.ProviderConfig;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.util.TextUtil;
import interview.guide.modules.llmprovider.dto.AsrConfigDTO;
import interview.guide.modules.llmprovider.dto.AsrConfigRequest;
import interview.guide.modules.llmprovider.dto.CreateProviderRequest;
import interview.guide.modules.llmprovider.dto.DefaultProviderDTO;
import interview.guide.modules.llmprovider.dto.OcrConfigDTO;
import interview.guide.modules.llmprovider.dto.OcrConfigRequest;
import interview.guide.modules.llmprovider.dto.ProviderDTO;
import interview.guide.modules.llmprovider.dto.ProviderTestResult;
import interview.guide.modules.llmprovider.dto.TtsConfigDTO;
import interview.guide.modules.llmprovider.dto.TtsConfigRequest;
import interview.guide.modules.llmprovider.dto.UpdateProviderRequest;
import interview.guide.modules.llmprovider.model.LlmGlobalSettingEntity;
import interview.guide.modules.llmprovider.model.LlmProviderEntity;
import interview.guide.modules.llmprovider.model.OcrPlatformConfigEntity;
import interview.guide.modules.llmprovider.model.VoicePlatformConfigEntity;
import interview.guide.modules.llmprovider.repository.LlmGlobalSettingRepository;
import interview.guide.modules.llmprovider.repository.LlmProviderRepository;
import interview.guide.modules.llmprovider.repository.OcrPlatformConfigRepository;
import interview.guide.modules.llmprovider.repository.VoicePlatformConfigRepository;
import interview.guide.modules.voiceinterview.config.VoiceInterviewProperties;
import interview.guide.modules.voiceinterview.service.QwenAsrService;
import interview.guide.modules.voiceinterview.service.QwenTtsService;
import interview.guide.modules.voiceinterview.service.VoiceAsrRuntimeConfig;
import interview.guide.modules.voiceinterview.service.VoiceTtsRuntimeConfig;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.http.client.ClientHttpRequestFactoryBuilder;
import org.springframework.boot.http.client.HttpClientSettings;
import org.springframework.boot.http.client.InetAddressFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.support.TransactionSynchronization;
import org.springframework.transaction.support.TransactionSynchronizationManager;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientResponseException;

import java.net.InetAddress;
import java.net.URI;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.locks.ReentrantReadWriteLock;

@Service
@Slf4j
public class LlmProviderConfigService {

  private final LlmProviderProperties properties;
  private final LlmProviderRegistry registry;
  private final LlmProviderRepository providerRepository;
  private final LlmGlobalSettingRepository globalSettingRepository;
  private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();
  private final VoiceInterviewProperties voiceProperties;
  private final QwenAsrService asrService;
  private final QwenTtsService ttsService;
  private final VoicePlatformConfigRepository voicePlatformConfigRepository;
  private final OcrPlatformConfigRepository ocrPlatformConfigRepository;

  /** OCR 本地模型默认值（Ollama + 本机已安装的 GLM-OCR；可在设置页修改） */
  static final String OCR_DEFAULT_PLATFORM = "ollama";
  static final String OCR_DEFAULT_BASE_URL = "http://localhost:11434";
  static final String OCR_DEFAULT_MODEL = "GLM-OCR";
  static final long OCR_SINGLE_ROW_ID = 1L;

  private static final Map<String, String> RECOMMENDED_EMBEDDING_MODELS = Map.of(
      "dashscope", "text-embedding-v3",
      "glm", "embedding-3",
      "zhipu", "embedding-3",
      "baidu", "Embedding-V1",
      "minimax", "embo-01"
  );

  private static final String API_FORMAT_OPENAI = "openai";
  private static final String API_FORMAT_ANTHROPIC = "anthropic";
  private static final String RERANK_API_FORMAT_COHERE = "cohere";
  private static final String RERANK_API_FORMAT_DASHSCOPE = "dashscope";
  private static final String ANTHROPIC_API_VERSION = "2023-06-01";
  private static final String DASHSCOPE_RERANK_PATH = "/api/v1/services/rerank/text-rerank/text-rerank";

  @Autowired
  public LlmProviderConfigService(
      LlmProviderProperties properties,
      LlmProviderRegistry registry,
      LlmProviderRepository providerRepository,
      LlmGlobalSettingRepository globalSettingRepository,
      VoiceInterviewProperties voiceProperties,
      QwenAsrService asrService,
      QwenTtsService ttsService,
      VoicePlatformConfigRepository voicePlatformConfigRepository,
      OcrPlatformConfigRepository ocrPlatformConfigRepository) {
    this.properties = properties;
    this.registry = registry;
    this.providerRepository = providerRepository;
    this.globalSettingRepository = globalSettingRepository;
    this.voiceProperties = voiceProperties;
    this.asrService = asrService;
    this.ttsService = ttsService;
    this.voicePlatformConfigRepository = voicePlatformConfigRepository;
    this.ocrPlatformConfigRepository = ocrPlatformConfigRepository;
  }

  public LlmProviderConfigService(
      LlmProviderProperties properties,
      LlmProviderRegistry registry,
      VoiceInterviewProperties voiceProperties,
      QwenAsrService asrService,
      QwenTtsService ttsService) {
    this(properties, registry, null, null, voiceProperties, asrService, ttsService, null, null);
  }

  // ===== Read operations (read lock) =====

  public List<ProviderDTO> listProviders() {
    rwLock.readLock().lock();
    try {
      if (!isDatabaseBacked()) {
        Map<String, ProviderConfig> providers = properties.getProviders();
        if (providers == null) return List.of();
        return providers.entrySet().stream()
            .map(e -> ProviderDTO.builder()
                .id(e.getKey())
                .baseUrl(e.getValue().getBaseUrl())
                .maskedApiKey(maskApiKey(e.getValue().getApiKey()))
                .model(e.getValue().getModel())
                .apiFormat(apiFormatOrDefault(e.getValue().getApiFormat()))
                .embeddingModel(e.getValue().getEmbeddingModel())
                .rerankModel(e.getValue().getRerankModel())
                .rerankApiFormat(rerankApiFormatOrDefault(e.getValue().getRerankApiFormat()))
                .maxTokens(e.getValue().getMaxTokens())
                .topP(e.getValue().getTopP())
                .embeddingDimensions(resolveEmbeddingDimensions(e.getValue().getEmbeddingDimensions()))
                .supportsEmbedding(Boolean.TRUE.equals(e.getValue().getSupportsEmbedding())
                    || TextUtil.trimToNull(e.getValue().getEmbeddingModel()) != null)
                .temperature(e.getValue().getTemperature())
                .defaultChatProvider(e.getKey().equals(properties.getDefaultProvider()))
                .defaultEmbeddingProvider(e.getKey().equals(properties.getDefaultEmbeddingProvider()))
                .defaultRerankProvider(e.getKey().equals(properties.getDefaultRerankProvider()))
                .build())
            .toList();
      }
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      return providerRepository.findAll().stream()
          .map(provider -> ProviderDTO.builder()
              .id(provider.getId())
              .baseUrl(provider.getBaseUrl())
              .maskedApiKey(maskApiKey(decryptApiKey(provider)))
              .model(provider.getModel())
              .apiFormat(apiFormatOrDefault(provider.getApiFormat()))
              .embeddingModel(provider.getEmbeddingModel())
              .rerankModel(provider.getRerankModel())
              .rerankApiFormat(rerankApiFormatOrDefault(provider.getRerankApiFormat()))
              .maxTokens(provider.getMaxTokens())
              .topP(provider.getTopP())
              .embeddingDimensions(resolveEmbeddingDimensions(provider.getEmbeddingDimensions()))
              .supportsEmbedding(provider.isSupportsEmbedding())
              .temperature(provider.getTemperature())
              .defaultChatProvider(provider.getId().equals(setting.getDefaultChatProviderId()))
              .defaultEmbeddingProvider(provider.getId().equals(setting.getDefaultEmbeddingProviderId()))
              .defaultRerankProvider(provider.getId().equals(setting.getDefaultRerankProviderId()))
              .build())
          .toList();
    } finally {
      rwLock.readLock().unlock();
    }
  }

  public ProviderDTO getProvider(String id) {
    rwLock.readLock().lock();
    try {
      if (!isDatabaseBacked()) {
        ProviderConfig config = getLegacyProviderConfigOrThrow(id);
        return ProviderDTO.builder()
            .id(id)
            .baseUrl(config.getBaseUrl())
            .maskedApiKey(maskApiKey(config.getApiKey()))
            .model(config.getModel())
            .apiFormat(apiFormatOrDefault(config.getApiFormat()))
            .embeddingModel(config.getEmbeddingModel())
            .rerankModel(config.getRerankModel())
            .rerankApiFormat(rerankApiFormatOrDefault(config.getRerankApiFormat()))
            .maxTokens(config.getMaxTokens())
            .topP(config.getTopP())
            .embeddingDimensions(resolveEmbeddingDimensions(config.getEmbeddingDimensions()))
            .supportsEmbedding(Boolean.TRUE.equals(config.getSupportsEmbedding())
                || TextUtil.trimToNull(config.getEmbeddingModel()) != null)
            .temperature(config.getTemperature())
            .defaultChatProvider(id.equals(properties.getDefaultProvider()))
            .defaultEmbeddingProvider(id.equals(properties.getDefaultEmbeddingProvider()))
            .defaultRerankProvider(id.equals(properties.getDefaultRerankProvider()))
            .build();
      }
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      LlmProviderEntity provider = getProviderEntityOrThrow(id);
      return ProviderDTO.builder()
          .id(id)
          .baseUrl(provider.getBaseUrl())
          .maskedApiKey(maskApiKey(decryptApiKey(provider)))
          .model(provider.getModel())
          .apiFormat(apiFormatOrDefault(provider.getApiFormat()))
          .embeddingModel(provider.getEmbeddingModel())
          .rerankModel(provider.getRerankModel())
          .rerankApiFormat(rerankApiFormatOrDefault(provider.getRerankApiFormat()))
          .maxTokens(provider.getMaxTokens())
          .topP(provider.getTopP())
          .embeddingDimensions(resolveEmbeddingDimensions(provider.getEmbeddingDimensions()))
          .supportsEmbedding(provider.isSupportsEmbedding())
          .temperature(provider.getTemperature())
          .defaultChatProvider(id.equals(setting.getDefaultChatProviderId()))
          .defaultEmbeddingProvider(id.equals(setting.getDefaultEmbeddingProviderId()))
          .defaultRerankProvider(id.equals(setting.getDefaultRerankProviderId()))
          .build();
    } finally {
      rwLock.readLock().unlock();
    }
  }

  public DefaultProviderDTO getDefaultProvider() {
    rwLock.readLock().lock();
    try {
      if (!isDatabaseBacked()) {
        return new DefaultProviderDTO(
            properties.getDefaultProvider(),
            properties.getDefaultEmbeddingProvider(),
            properties.getDefaultRerankProvider());
      }
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      return new DefaultProviderDTO(
          setting.getDefaultChatProviderId(),
          setting.getDefaultEmbeddingProviderId(),
          setting.getDefaultRerankProviderId());
    } finally {
      rwLock.readLock().unlock();
    }
  }

  public AsrConfigDTO getAsrConfig() {
    rwLock.readLock().lock();
    try {
      VoicePlatformConfigEntity db = voicePlatformConfigRepository == null ? null
          : voicePlatformConfigRepository.findById("asr").orElse(null);
      if (db != null) {
        VoiceInterviewProperties.AsrConfig y = voiceProperties.getQwen().getAsr();
        return AsrConfigDTO.builder()
            .platform(platformOrDefault(db.getPlatform()))
            .url(TextUtil.trimToNull(db.getBaseUrl()) != null ? db.getBaseUrl() : "")
            .model(TextUtil.trimToNull(db.getModel()) != null ? db.getModel() : y.getModel())
            .maskedApiKey(maskApiKey(db.getApiKey()))
            .language(db.getLanguage() != null ? db.getLanguage() : y.getLanguage())
            .format(db.getFormat() != null ? db.getFormat() : y.getFormat())
            .sampleRate(db.getSampleRate() != null ? db.getSampleRate() : y.getSampleRate())
            .enableTurnDetection(db.getEnableTurnDetection() != null ? db.getEnableTurnDetection() : y.isEnableTurnDetection())
            .turnDetectionType(db.getTurnDetectionType() != null ? db.getTurnDetectionType() : y.getTurnDetectionType())
            .turnDetectionThreshold(db.getTurnDetectionThreshold() != null ? db.getTurnDetectionThreshold() : y.getTurnDetectionThreshold())
            .turnDetectionSilenceDurationMs(db.getTurnDetectionSilenceDurationMs() != null ? db.getTurnDetectionSilenceDurationMs() : y.getTurnDetectionSilenceDurationMs())
            .build();
      }
      VoiceInterviewProperties.AsrConfig asr = voiceProperties.getQwen().getAsr();
      return AsrConfigDTO.builder()
          .platform("qwen")
          .url(asr.getUrl())
          .model(asr.getModel())
          .maskedApiKey(maskApiKey(asr.getApiKey()))
          .language(asr.getLanguage())
          .format(asr.getFormat())
          .sampleRate(asr.getSampleRate())
          .enableTurnDetection(asr.isEnableTurnDetection())
          .turnDetectionType(asr.getTurnDetectionType())
          .turnDetectionThreshold(asr.getTurnDetectionThreshold())
          .turnDetectionSilenceDurationMs(asr.getTurnDetectionSilenceDurationMs())
          .build();
    } finally {
      rwLock.readLock().unlock();
    }
  }

  public TtsConfigDTO getTtsConfig() {
    rwLock.readLock().lock();
    try {
      VoicePlatformConfigEntity db = voicePlatformConfigRepository == null ? null
          : voicePlatformConfigRepository.findById("tts").orElse(null);
      if (db != null) {
        VoiceInterviewProperties.QwenTtsConfig y = voiceProperties.getQwen().getTts();
        return TtsConfigDTO.builder()
            .platform(platformOrDefault(db.getPlatform()))
            .model(TextUtil.trimToNull(db.getModel()) != null ? db.getModel() : y.getModel())
            .maskedApiKey(maskApiKey(db.getApiKey()))
            .voice(db.getVoice() != null ? db.getVoice() : y.getVoice())
            .format(db.getFormat() != null ? db.getFormat() : y.getFormat())
            .sampleRate(db.getSampleRate() != null ? db.getSampleRate() : y.getSampleRate())
            .mode(db.getMode() != null ? db.getMode() : y.getMode())
            .languageType(db.getLanguageType() != null ? db.getLanguageType() : y.getLanguageType())
            .speechRate(db.getSpeechRate() != null ? db.getSpeechRate() : y.getSpeechRate())
            .volume(db.getVolume() != null ? db.getVolume() : y.getVolume())
            .build();
      }
      VoiceInterviewProperties.QwenTtsConfig tts = voiceProperties.getQwen().getTts();
      return TtsConfigDTO.builder()
          .platform("qwen")
          .model(tts.getModel())
          .maskedApiKey(maskApiKey(tts.getApiKey()))
          .voice(tts.getVoice())
          .format(tts.getFormat())
          .sampleRate(tts.getSampleRate())
          .mode(tts.getMode())
          .languageType(tts.getLanguageType())
          .speechRate(tts.getSpeechRate())
          .volume(tts.getVolume())
          .build();
    } finally {
      rwLock.readLock().unlock();
    }
  }

  public ProviderTestResult testProvider(String id) {
    rwLock.readLock().lock();
    try {
      ProviderRuntimeConfig config = isDatabaseBacked()
          ? getProviderRuntimeConfigOrThrow(id)
          : toRuntimeConfig(getLegacyProviderConfigOrThrow(id));
      return doTestProvider(config, id);
    } finally {
      rwLock.readLock().unlock();
    }
  }

  public ProviderTestResult testAsrConfig() {
    rwLock.readLock().lock();
    try {
      String url = getAsrConfigRuntime().url();
      String model = getAsrConfigRuntime().model();
      try {
        java.net.URI wsUri = java.net.URI.create(url);
        String host = wsUri.getHost();
        // SSRF 防护：仅允许公网地址，拒绝内网/回环/保留地址
        UrlAccessGuard.assertExternalHost(host, url);
        int port = wsUri.getPort() > 0 ? wsUri.getPort() : (wsUri.getScheme().equals("wss") ? 443 : 80);
        java.net.InetSocketAddress address = new java.net.InetSocketAddress(host, port);
        java.net.Socket socket = new java.net.Socket();
        socket.connect(address, 5000);
        socket.close();
        return ProviderTestResult.builder()
            .success(true)
            .message("ASR WebSocket 连接成功: " + host)
            .model(model)
            .build();
      } catch (Exception e) {
        return ProviderTestResult.builder()
            .success(false)
            .message("ASR 连接失败: " + e.getMessage())
            .model(model)
            .build();
      }
    } finally {
      rwLock.readLock().unlock();
    }
  }

  /** 组装当前生效的 ASR 运行时配置（DB 优先，YAML legacy 兜底） */
  private VoiceAsrRuntimeConfig getAsrConfigRuntime() {
    VoicePlatformConfigEntity db = voicePlatformConfigRepository == null ? null
        : voicePlatformConfigRepository.findById("asr").orElse(null);
    if (db != null) {
      return asrRuntimeFromEntity(db);
    }
    VoiceInterviewProperties.AsrConfig y = voiceProperties.getQwen().getAsr();
    return VoiceAsrRuntimeConfig.of(
        y.getUrl(), y.getModel(), y.getApiKey(), y.getLanguage(), y.getFormat(),
        y.getSampleRate(), y.isEnableTurnDetection(), y.getTurnDetectionType(),
        y.getTurnDetectionThreshold(), y.getTurnDetectionSilenceDurationMs());
  }

  /**
   * 从 DB 获取语音平台配置；不存在时以 YAML legacy 默认初始化并落库
   * （配置唯一来源收敛为「设置页 + DB」）。
   */
  private VoicePlatformConfigEntity getOrCreateVoice(String capability) {
    if (voicePlatformConfigRepository == null) {
      throw new BusinessException(ErrorCode.VOICE_CONFIG_READ_FAILED, "语音平台配置存储不可用（非 DB 模式）");
    }
    return voicePlatformConfigRepository.findById(capability)
        .orElseGet(() -> {
          VoicePlatformConfigEntity created = newVoiceEntityFromYaml(capability);
          voicePlatformConfigRepository.save(created);
          return created;
        });
  }

  private VoicePlatformConfigEntity newVoiceEntityFromYaml(String capability) {
    VoicePlatformConfigEntity e = VoicePlatformConfigEntity.builder()
        .capability(capability)
        .platform("qwen")
        .build();
    if ("asr".equals(capability)) {
      VoiceInterviewProperties.AsrConfig y = voiceProperties.getQwen().getAsr();
      e.setBaseUrl(y.getUrl());
      e.setModel(y.getModel());
      e.setApiKey(y.getApiKey());
      e.setLanguage(y.getLanguage());
      e.setFormat(y.getFormat());
      e.setSampleRate(y.getSampleRate());
      e.setEnableTurnDetection(y.isEnableTurnDetection());
      e.setTurnDetectionType(y.getTurnDetectionType());
      e.setTurnDetectionThreshold(y.getTurnDetectionThreshold());
      e.setTurnDetectionSilenceDurationMs(y.getTurnDetectionSilenceDurationMs());
    } else {
      VoiceInterviewProperties.QwenTtsConfig y = voiceProperties.getQwen().getTts();
      e.setModel(y.getModel());
      e.setApiKey(y.getApiKey());
      e.setVoice(y.getVoice());
      e.setFormat(y.getFormat());
      e.setSampleRate(y.getSampleRate());
      e.setMode(y.getMode());
      e.setLanguageType(y.getLanguageType());
      e.setSpeechRate(y.getSpeechRate());
      e.setVolume(y.getVolume());
    }
    return e;
  }

  private VoiceAsrRuntimeConfig asrRuntimeFromEntity(VoicePlatformConfigEntity e) {
    return new VoiceAsrRuntimeConfig(
        platformOrDefault(e.getPlatform()),
        e.getBaseUrl(), e.getModel(), e.getApiKey(), e.getLanguage(), e.getFormat(),
        e.getSampleRate(), e.getEnableTurnDetection(), e.getTurnDetectionType(),
        e.getTurnDetectionThreshold(), e.getTurnDetectionSilenceDurationMs());
  }

  private VoiceTtsRuntimeConfig ttsRuntimeFromEntity(VoicePlatformConfigEntity e) {
    return new VoiceTtsRuntimeConfig(
        platformOrDefault(e.getPlatform()),
        e.getModel(), e.getApiKey(), e.getVoice(), e.getFormat(),
        e.getSampleRate(), e.getMode(), e.getLanguageType(), e.getSpeechRate(), e.getVolume());
  }

  private void pushAsrToRuntime(VoicePlatformConfigEntity e) {
    if (asrService != null) asrService.applyRuntimeConfig(asrRuntimeFromEntity(e));
  }

  private void pushTtsToRuntime(VoicePlatformConfigEntity e) {
    if (ttsService != null) ttsService.applyRuntimeConfig(ttsRuntimeFromEntity(e));
  }

  private static String platformOrDefault(String platform) {
    return platform == null || platform.isBlank() ? "qwen" : platform;
  }

  // ===== Write operations (write lock) =====

  @Transactional
  public void createProvider(CreateProviderRequest request) {
    rwLock.writeLock().lock();
    try {
      if (!isDatabaseBacked()) {
        createProviderLegacy(request);
        return;
      }
      String providerId = TextUtil.trimToNull(request.id());
      if (providerRepository.existsById(providerId)) {
        throw new BusinessException(ErrorCode.PROVIDER_ALREADY_EXISTS,
            "Provider '" + request.id() + "' 已存在");
      }
      String baseUrl = requireNonBlank(request.baseUrl(), "baseUrl");
      String model = TextUtil.trimToNull(request.model());
      String apiKey = requireNonBlank(request.apiKey(), "apiKey");
      String embeddingModel = TextUtil.trimToNull(request.embeddingModel());
      Integer embeddingDimensions = resolveEmbeddingDimensions(request.embeddingDimensions());
      boolean supportsEmbedding = request.supportsEmbedding() != null
          ? request.supportsEmbedding()
          : embeddingModel != null;
      String rerankModel = TextUtil.trimToNull(request.rerankModel());
      validateAtLeastOneCapability(providerId, model, supportsEmbedding && embeddingModel != null, rerankModel);
      validateEmbeddingConfig(providerId, supportsEmbedding, embeddingModel, embeddingDimensions);
      String apiFormat = requireValidApiFormat(request.apiFormat());
      String rerankApiFormat = requireValidRerankApiFormat(request.rerankApiFormat());

      providerRepository.save(LlmProviderEntity.builder()
          .id(providerId)
          .baseUrl(baseUrl)
          .apiKey(apiKey)
          .model(model)
          .apiFormat(apiFormat)
          .embeddingModel(embeddingModel)
          .rerankModel(rerankModel)
          .rerankApiFormat(rerankApiFormat)
          .maxTokens(request.maxTokens())
          .topP(request.topP())
          .embeddingDimensions(embeddingDimensions)
          .supportsEmbedding(supportsEmbedding)
          .temperature(request.temperature())
          .enabled(true)
          .builtin(false)
          .build());
      reloadRegistryAfterCommit();
      log.info("Created provider: id={}, baseUrl={}, model={}, apiFormat={}, rerankModel={}",
          providerId, baseUrl, model, apiFormat, rerankModel);
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void updateProvider(String id, UpdateProviderRequest request) {
    rwLock.writeLock().lock();
    try {
      if (!isDatabaseBacked()) {
        updateProviderLegacy(id, request);
        return;
      }
      LlmProviderEntity provider = getProviderEntityOrThrow(id);

      String trimmedBaseUrl = TextUtil.trimToNull(request.baseUrl());
      if (request.baseUrl() != null && trimmedBaseUrl == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "baseUrl 不能为空字符串");
      }
      String trimmedModel = TextUtil.trimToNull(request.model());
      String trimmedApiKey = TextUtil.trimToNull(request.apiKey());
      if (request.apiKey() != null && trimmedApiKey == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "apiKey 不能为空字符串");
      }

      if (trimmedBaseUrl != null) provider.setBaseUrl(trimmedBaseUrl);
      if (request.model() != null) provider.setModel(trimmedModel);
      if (request.apiFormat() != null) {
        provider.setApiFormat(requireValidApiFormat(request.apiFormat()));
      }
      if (request.embeddingModel() != null) {
        provider.setEmbeddingModel(TextUtil.trimToNull(request.embeddingModel()));
      }
      if (request.embeddingDimensions() != null) {
        provider.setEmbeddingDimensions(resolveEmbeddingDimensions(request.embeddingDimensions()));
      }
      if (request.supportsEmbedding() != null) {
        provider.setSupportsEmbedding(request.supportsEmbedding());
      }
      if (request.rerankModel() != null) {
        provider.setRerankModel(TextUtil.trimToNull(request.rerankModel()));
      }
      if (request.rerankApiFormat() != null) {
        provider.setRerankApiFormat(requireValidRerankApiFormat(request.rerankApiFormat()));
      }
      validateAtLeastOneCapability(id, provider.getModel(),
          provider.isSupportsEmbedding() && TextUtil.trimToNull(provider.getEmbeddingModel()) != null,
          TextUtil.trimToNull(provider.getRerankModel()));
      validateEmbeddingConfig(
          id,
          provider.isSupportsEmbedding(),
          provider.getEmbeddingModel(),
          resolveEmbeddingDimensions(provider.getEmbeddingDimensions()));
      if (request.maxTokens() != null) {
        provider.setMaxTokens(request.maxTokens());
      }
      if (request.topP() != null) {
        provider.setTopP(request.topP());
      }
      if (request.temperature() != null) {
        provider.setTemperature(request.temperature());
      }
      if (trimmedApiKey != null) {
        provider.setApiKey(trimmedApiKey);
      }

      providerRepository.save(provider);
      reloadRegistryAfterCommit();
      log.info("Updated provider: id={}", id);
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void deleteProvider(String id) {
    rwLock.writeLock().lock();
    try {
      if (!isDatabaseBacked()) {
        deleteProviderLegacy(id);
        return;
      }
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      if (id.equals(setting.getDefaultChatProviderId()) || id.equals(setting.getDefaultEmbeddingProviderId())) {
        throw new BusinessException(ErrorCode.PROVIDER_DEFAULT_CANNOT_DELETE,
            "默认 Provider '" + id + "' 不可删除，请先切换默认 Provider");
      }
      getProviderEntityOrThrow(id);

      providerRepository.deleteById(id);
      reloadRegistryAfterCommit();
      log.info("Deleted provider: id={}", id);
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void updateDefaultProvider(DefaultProviderDTO request) {
    rwLock.writeLock().lock();
    try {
      if (!isDatabaseBacked()) {
        updateDefaultProviderLegacy(request);
        return;
      }
      String providerId = TextUtil.trimToNull(request.defaultProvider());
      if (providerId == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "defaultProvider 不能为空");
      }
      LlmProviderEntity provider = getProviderEntityOrThrow(providerId);
      if (TextUtil.trimToNull(provider.getModel()) == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST,
            "Provider '" + providerId + "' 未配置聊天模型，不能设为默认聊天服务");
      }
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      setting.setDefaultChatProviderId(providerId);
      globalSettingRepository.save(setting);
      reloadRegistryAfterCommit();
      log.info("Updated default provider: {}", providerId);
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void updateDefaultEmbeddingProvider(DefaultProviderDTO request) {
    rwLock.writeLock().lock();
    try {
      String providerId = TextUtil.trimToNull(request.defaultEmbeddingProvider());
      if (providerId == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "defaultEmbeddingProvider 不能为空");
      }
      LlmProviderEntity provider = getProviderEntityOrThrow(providerId);
      String embeddingModel = TextUtil.trimToNull(provider.getEmbeddingModel());
      if (!provider.isSupportsEmbedding() || embeddingModel == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST,
            "Provider '" + providerId + "' 不支持 Embedding，不能设为默认向量服务");
      }
      validateEmbeddingConfig(
          providerId,
          true,
          embeddingModel,
          resolveEmbeddingDimensions(provider.getEmbeddingDimensions()));
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      setting.setDefaultEmbeddingProviderId(providerId);
      globalSettingRepository.save(setting);
      reloadRegistryAfterCommit();
      log.info("Updated default embedding provider: {}", providerId);
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void updateDefaultRerankProvider(DefaultProviderDTO request) {
    rwLock.writeLock().lock();
    try {
      if (!isDatabaseBacked()) {
        updateDefaultRerankProviderLegacy(request);
        return;
      }
      String providerId = TextUtil.trimToNull(request.defaultRerankProvider());
      if (providerId == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "defaultRerankProvider 不能为空");
      }
      LlmProviderEntity provider = getProviderEntityOrThrow(providerId);
      if (TextUtil.trimToNull(provider.getRerankModel()) == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST,
            "Provider '" + providerId + "' 未配置 Rerank 模型，不能设为默认重排服务");
      }
      LlmGlobalSettingEntity setting = getGlobalSettingOrThrow();
      setting.setDefaultRerankProviderId(providerId);
      globalSettingRepository.save(setting);
      reloadRegistryAfterCommit();
      log.info("Updated default rerank provider: {}", providerId);
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void updateAsrConfig(AsrConfigRequest request) {
    rwLock.writeLock().lock();
    try {
      if (voicePlatformConfigRepository == null) {
        throw new BusinessException(ErrorCode.VOICE_CONFIG_READ_FAILED, "语音平台配置存储不可用（非 DB 模式）");
      }
      VoicePlatformConfigEntity db = getOrCreateVoice("asr");
      if (request.platform() != null) db.setPlatform(platformOrDefault(request.platform()));
      if (request.url() != null) db.setBaseUrl(request.url());
      if (request.model() != null) db.setModel(request.model());
      if (request.language() != null) db.setLanguage(request.language());
      if (request.format() != null) db.setFormat(request.format());
      if (request.sampleRate() != null) db.setSampleRate(request.sampleRate());
      if (request.enableTurnDetection() != null) db.setEnableTurnDetection(request.enableTurnDetection());
      if (request.turnDetectionType() != null) db.setTurnDetectionType(request.turnDetectionType());
      if (request.turnDetectionThreshold() != null) db.setTurnDetectionThreshold(request.turnDetectionThreshold());
      if (request.turnDetectionSilenceDurationMs() != null) db.setTurnDetectionSilenceDurationMs(request.turnDetectionSilenceDurationMs());
      if (request.apiKey() != null && !request.apiKey().isBlank()) {
        db.setApiKey(request.apiKey());
      }
      voicePlatformConfigRepository.save(db);
      pushAsrToRuntime(db);
      // ASR/TTS 共享密钥的既有语义：更新 ASR Key 时同步 TTS（仅 Key）
      if (request.apiKey() != null && !request.apiKey().isBlank()) {
        VoicePlatformConfigEntity tts = getOrCreateVoice("tts");
        tts.setApiKey(db.getApiKey());
        voicePlatformConfigRepository.save(tts);
        pushTtsToRuntime(tts);
      }
      log.info("Updated ASR platform config: platform={}, model={}, url={}", db.getPlatform(), db.getModel(), db.getBaseUrl());
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  @Transactional
  public void updateTtsConfig(TtsConfigRequest request) {
    rwLock.writeLock().lock();
    try {
      if (voicePlatformConfigRepository == null) {
        throw new BusinessException(ErrorCode.VOICE_CONFIG_READ_FAILED, "语音平台配置存储不可用（非 DB 模式）");
      }
      VoicePlatformConfigEntity db = getOrCreateVoice("tts");
      if (request.platform() != null) db.setPlatform(platformOrDefault(request.platform()));
      if (request.model() != null) db.setModel(request.model());
      if (request.voice() != null) db.setVoice(request.voice());
      if (request.format() != null) db.setFormat(request.format());
      if (request.sampleRate() != null) db.setSampleRate(request.sampleRate());
      if (request.mode() != null) db.setMode(request.mode());
      if (request.languageType() != null) db.setLanguageType(request.languageType());
      if (request.speechRate() != null) db.setSpeechRate(request.speechRate());
      if (request.volume() != null) db.setVolume(request.volume());
      if (request.apiKey() != null && !request.apiKey().isBlank()) {
        db.setApiKey(request.apiKey());
      }
      voicePlatformConfigRepository.save(db);
      pushTtsToRuntime(db);
      // ASR/TTS 共享密钥的既有语义：更新 TTS Key 时同步 ASR（仅 Key）
      if (request.apiKey() != null && !request.apiKey().isBlank()) {
        VoicePlatformConfigEntity asr = getOrCreateVoice("asr");
        asr.setApiKey(db.getApiKey());
        voicePlatformConfigRepository.save(asr);
        pushAsrToRuntime(asr);
      }
      log.info("Updated TTS platform config: platform={}, model={}, voice={}", db.getPlatform(), db.getModel(), db.getVoice());
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  // ===== OCR 本地模型配置（预留能力：仅配置管理与可用性测试，不接入文档解析逻辑）=====

  public OcrConfigDTO getOcrConfig() {
    rwLock.readLock().lock();
    try {
      OcrPlatformConfigEntity e = getOrCreateOcr();
      return OcrConfigDTO.builder()
          .platform(e.getPlatform())
          .baseUrl(e.getBaseUrl())
          .maskedApiKey(maskApiKey(e.getApiKey()))
          .model(e.getModel())
          .enabled(e.isEnabled())
          .build();
    } finally {
      rwLock.readLock().unlock();
    }
  }

  @Transactional
  public void updateOcrConfig(OcrConfigRequest request) {
    rwLock.writeLock().lock();
    try {
      OcrPlatformConfigEntity e = getOrCreateOcr();
      if (request.platform() != null) e.setPlatform(request.platform());
      if (request.baseUrl() != null) e.setBaseUrl(TextUtil.trimToNull(request.baseUrl()));
      if (request.model() != null) e.setModel(TextUtil.trimToNull(request.model()));
      if (request.apiKey() != null && !request.apiKey().isBlank()) e.setApiKey(request.apiKey());
      if (request.enabled() != null) e.setEnabled(request.enabled());
      if (e.getBaseUrl() == null || e.getModel() == null) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "OCR baseUrl 与模型不能为空");
      }
      ocrPlatformConfigRepository.save(e);
      log.info("Updated OCR platform config: platform={}, baseUrl={}, model={}", e.getPlatform(), e.getBaseUrl(), e.getModel());
    } finally {
      rwLock.writeLock().unlock();
    }
  }

  public ProviderTestResult testOcrConfig() {
    rwLock.readLock().lock();
    try {
      OcrPlatformConfigEntity e = getOrCreateOcr();
      if (!e.isEnabled()) {
        return ProviderTestResult.builder()
            .success(false).message("OCR 本地模型服务未启用").model(e.getModel()).build();
      }
      String baseUrl = e.getBaseUrl().replaceAll("/+$", "");
      String model = e.getModel();
      try {
        java.net.http.HttpClient client = java.net.http.HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(5)).build();
        java.net.http.HttpRequest req = java.net.http.HttpRequest.newBuilder()
            .uri(URI.create(baseUrl + "/api/tags"))
            .timeout(Duration.ofSeconds(8))
            .header("Accept", "application/json")
            .build();
        java.net.http.HttpResponse<String> resp = client.send(req,
            java.net.http.HttpResponse.BodyHandlers.ofString());
        if (resp.statusCode() != 200) {
          return ProviderTestResult.builder()
              .success(false).message("OCR 服务响应异常: HTTP " + resp.statusCode()).model(model).build();
        }
        boolean found = containsModelEntry(resp.body(), model);
        if (!found) {
          return ProviderTestResult.builder()
              .success(false)
              .message("连接成功但未找到模型 " + model + "（Ollama 端可执行 ollama pull " + model + "）")
              .model(model).build();
        }
        return ProviderTestResult.builder()
            .success(true).message("OCR 本地模型可达：模型 " + model + " 已就绪").model(model).build();
      } catch (Exception ex) {
        return ProviderTestResult.builder()
            .success(false).message("OCR 连接失败: " + ex.getMessage()).model(model).build();
      }
    } finally {
      rwLock.readLock().unlock();
    }
  }

  /** 粗糙但可靠的模型存在性检测：JSON 中查找 name/model 字段与模型名匹配 */
  private static boolean containsModelEntry(String json, String model) {
    if (json == null || model == null || model.isBlank()) return false;
    String lower = json.toLowerCase();
    String m = model.trim().toLowerCase();
    return lower.contains("\"name\":\"" + m + "\"")
        || lower.contains("\"name\":\"" + m + ":")
        || lower.contains("\"model\":\"" + m + "\"")
        || lower.contains("\"model\":\"" + m + ":");
  }

  private OcrPlatformConfigEntity getOrCreateOcr() {
    if (ocrPlatformConfigRepository == null) {
      throw new BusinessException(ErrorCode.VOICE_CONFIG_READ_FAILED, "OCR 配置存储不可用（非 DB 模式）");
    }
    return ocrPlatformConfigRepository.findById(OCR_SINGLE_ROW_ID)
        .orElseGet(() -> ocrPlatformConfigRepository.save(OcrPlatformConfigEntity.builder()
            .id(OCR_SINGLE_ROW_ID)
            .platform(OCR_DEFAULT_PLATFORM)
            .baseUrl(OCR_DEFAULT_BASE_URL)
            .model(OCR_DEFAULT_MODEL)
            .enabled(true)
            .build()));
  }

  /**
   * 应用启动时将 DB 中的语音平台配置推送到运行时（覆盖 YAML legacy 默认）。
   * 配置唯一来源 = 设置页 + DB。
   */
  @PostConstruct
  public void initVoicePlatformRuntime() {
    if (voicePlatformConfigRepository == null) {
      log.info("Voice platform config storage unavailable (legacy YAML mode), skip DB push");
      return;
    }
    try {
      voicePlatformConfigRepository.findById("asr").ifPresent(this::pushAsrToRuntime);
      voicePlatformConfigRepository.findById("tts").ifPresent(this::pushTtsToRuntime);
      OcrPlatformConfigEntity ocr = ocrPlatformConfigRepository.findById(OCR_SINGLE_ROW_ID).orElse(null);
      if (ocr != null) {
        log.info("OCR platform config loaded: platform={}, baseUrl={}, model={}, enabled={}",
            ocr.getPlatform(), ocr.getBaseUrl(), ocr.getModel(), ocr.isEnabled());
      }
    } catch (Exception e) {
      log.warn("初始化语音/OCR 平台配置失败（继续使用 legacy YAML 默认）: {}", e.getMessage(), e);
    }
  }

  public void reloadProviders() {
    registry.reload();
    log.info("Manual provider reload triggered");
  }

  // ===== Internal helpers =====

  /**
   * Registry 缓存重建必须读到已提交数据：事务内写库后立即 reload，
   * 会把未提交数据装进缓存，事务回滚后缓存将持续提供已回滚的配置。
   * 有活动事务时挂起 afterCommit 回调，否则立即重建（legacy 轨/手动 reload）。
   */
  private void reloadRegistryAfterCommit() {
    if (TransactionSynchronizationManager.isSynchronizationActive()) {
      TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronization() {
        @Override
        public void afterCommit() {
          registry.reload();
        }
      });
      log.debug("Registry reload 已挂起至事务提交后执行");
    } else {
      registry.reload();
    }
  }

  /**
   * 是否走「数据库持久化」轨。
   *
   * <p>此前还要求 encryptionService 非空，取消加密后若不移除该条件，
   * 判定会恒为 false，导致设置页所有 Provider 操作静默退化到不持久化的
   * legacy 内存轨（配置重启即丢）。
   */
  private boolean isDatabaseBacked() {
    return providerRepository != null && globalSettingRepository != null;
  }

  private Map<String, ProviderConfig> getLegacyProvidersOrThrow() {
    Map<String, ProviderConfig> providers = properties.getProviders();
    if (providers == null) {
      throw new BusinessException(ErrorCode.PROVIDER_CONFIG_READ_FAILED,
          "Provider 配置未初始化");
    }
    return providers;
  }

  ProviderConfig getLegacyProviderConfigOrThrow(String id) {
    ProviderConfig config = getLegacyProvidersOrThrow().get(id);
    if (config == null) {
      throw new BusinessException(ErrorCode.PROVIDER_NOT_FOUND,
          "Provider '" + id + "' 不存在");
    }
    return config;
  }

  private void createProviderLegacy(CreateProviderRequest request) {
    Map<String, ProviderConfig> providers = getLegacyProvidersOrThrow();
    if (providers.containsKey(request.id())) {
      throw new BusinessException(ErrorCode.PROVIDER_ALREADY_EXISTS,
          "Provider '" + request.id() + "' 已存在");
    }

    ProviderConfig config = new ProviderConfig();
    config.setBaseUrl(request.baseUrl());
    config.setApiKey(request.apiKey());
    String model = TextUtil.trimToNull(request.model());
    String embeddingModel = TextUtil.trimToNull(request.embeddingModel());
    String rerankModel = TextUtil.trimToNull(request.rerankModel());
    validateAtLeastOneCapability(request.id(), model, embeddingModel != null, rerankModel);
    validateEmbeddingConfig(
        request.id(),
        Boolean.TRUE.equals(request.supportsEmbedding()) || embeddingModel != null,
        embeddingModel,
        resolveEmbeddingDimensions(request.embeddingDimensions()));
    config.setModel(model);
    config.setApiFormat(requireValidApiFormat(request.apiFormat()));
    config.setEmbeddingModel(embeddingModel);
    config.setEmbeddingDimensions(request.embeddingDimensions());
    config.setSupportsEmbedding(request.supportsEmbedding());
    config.setRerankModel(rerankModel);
    config.setRerankApiFormat(requireValidRerankApiFormat(request.rerankApiFormat()));
    config.setMaxTokens(request.maxTokens());
    config.setTopP(request.topP());
    config.setTemperature(request.temperature());
    providers.put(request.id(), config);

    registry.reload();
  }

  private void updateProviderLegacy(String id, UpdateProviderRequest request) {
    ProviderConfig config = getLegacyProviderConfigOrThrow(id);
    String trimmedBaseUrl = TextUtil.trimToNull(request.baseUrl());
    if (request.baseUrl() != null && trimmedBaseUrl == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "baseUrl 不能为空字符串");
    }
    String trimmedApiKey = TextUtil.trimToNull(request.apiKey());
    if (request.apiKey() != null && trimmedApiKey == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "apiKey 不能为空字符串");
    }

    if (trimmedBaseUrl != null) config.setBaseUrl(trimmedBaseUrl);
    if (request.model() != null) config.setModel(TextUtil.trimToNull(request.model()));
    if (request.apiFormat() != null) {
      config.setApiFormat(requireValidApiFormat(request.apiFormat()));
    }
    if (request.embeddingModel() != null) {
      config.setEmbeddingModel(TextUtil.trimToNull(request.embeddingModel()));
    }
    if (request.embeddingDimensions() != null) {
      config.setEmbeddingDimensions(resolveEmbeddingDimensions(request.embeddingDimensions()));
    }
    if (request.supportsEmbedding() != null) {
      config.setSupportsEmbedding(request.supportsEmbedding());
    }
    if (request.rerankModel() != null) {
      config.setRerankModel(TextUtil.trimToNull(request.rerankModel()));
    }
    if (request.rerankApiFormat() != null) {
      config.setRerankApiFormat(requireValidRerankApiFormat(request.rerankApiFormat()));
    }
    if (request.maxTokens() != null) {
      config.setMaxTokens(request.maxTokens());
    }
    if (request.topP() != null) {
      config.setTopP(request.topP());
    }
    if (request.temperature() != null) {
      config.setTemperature(request.temperature());
    }
    validateAtLeastOneCapability(id, TextUtil.trimToNull(config.getModel()),
        TextUtil.trimToNull(config.getEmbeddingModel()) != null, TextUtil.trimToNull(config.getRerankModel()));
    if (trimmedApiKey != null) {
      config.setApiKey(trimmedApiKey);
    }

    registry.reload();
  }

  private void deleteProviderLegacy(String id) {
    if (id.equals(properties.getDefaultProvider())) {
      throw new BusinessException(ErrorCode.PROVIDER_DEFAULT_CANNOT_DELETE,
          "默认 Provider '" + id + "' 不可删除，请先切换默认 Provider");
    }
    getLegacyProviderConfigOrThrow(id);
    getLegacyProvidersOrThrow().remove(id);
    registry.reload();
  }

  private void updateDefaultProviderLegacy(DefaultProviderDTO request) {
    String providerId = TextUtil.trimToNull(request.defaultProvider());
    if (providerId == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "defaultProvider 不能为空");
    }
    getLegacyProviderConfigOrThrow(providerId);
    properties.setDefaultProvider(providerId);
    registry.reload();
  }

  private void updateDefaultRerankProviderLegacy(DefaultProviderDTO request) {
    String providerId = TextUtil.trimToNull(request.defaultRerankProvider());
    if (providerId == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "defaultRerankProvider 不能为空");
    }
    ProviderConfig provider = getLegacyProviderConfigOrThrow(providerId);
    if (TextUtil.trimToNull(provider.getRerankModel()) == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST,
          "Provider '" + providerId + "' 未配置 Rerank 模型，不能设为默认重排服务");
    }
    properties.setDefaultRerankProvider(providerId);
    registry.reload();
  }

  private ProviderRuntimeConfig toRuntimeConfig(ProviderConfig config) {
    return new ProviderRuntimeConfig(
        config.getBaseUrl(),
        config.getApiKey(),
        config.getModel(),
        apiFormatOrDefault(config.getApiFormat()),
        config.getEmbeddingModel(),
        config.getRerankModel(),
        rerankApiFormatOrDefault(config.getRerankApiFormat()),
        resolveEmbeddingDimensions(config.getEmbeddingDimensions()),
        Boolean.TRUE.equals(config.getSupportsEmbedding()) || TextUtil.trimToNull(config.getEmbeddingModel()) != null,
        config.getTemperature()
    );
  }

  LlmProviderEntity getProviderEntityOrThrow(String id) {
    return providerRepository.findById(id)
        .orElseThrow(() -> new BusinessException(ErrorCode.PROVIDER_NOT_FOUND,
            "Provider '" + id + "' 不存在"));
  }

  private LlmGlobalSettingEntity getGlobalSettingOrThrow() {
    return globalSettingRepository.findById(LlmGlobalSettingEntity.SINGLETON_ID)
        .orElseThrow(() -> new BusinessException(ErrorCode.PROVIDER_CONFIG_READ_FAILED,
            "默认 Provider 配置未初始化"));
  }

  private ProviderRuntimeConfig getProviderRuntimeConfigOrThrow(String id) {
    LlmProviderEntity provider = getProviderEntityOrThrow(id);
    return new ProviderRuntimeConfig(
        provider.getBaseUrl(),
        decryptApiKey(provider),
        provider.getModel(),
        apiFormatOrDefault(provider.getApiFormat()),
        provider.getEmbeddingModel(),
        provider.getRerankModel(),
        rerankApiFormatOrDefault(provider.getRerankApiFormat()),
        resolveEmbeddingDimensions(provider.getEmbeddingDimensions()),
        provider.isSupportsEmbedding(),
        provider.getTemperature()
    );
  }

  private String decryptApiKey(LlmProviderEntity provider) {
    return provider.getApiKey();
  }

  String maskApiKey(String apiKey) {
    if (apiKey == null || apiKey.length() <= 6) {
      return "***";
    }
    return apiKey.substring(0, 3) + "***" + apiKey.substring(apiKey.length() - 3);
  }

  private String abbreviate(String text) {
    if (text == null || text.isBlank()) {
      return "[no body]";
    }
    String normalized = text.replaceAll("\\s+", " ").trim();
    if (normalized.length() <= 200) {
      return normalized;
    }
    return normalized.substring(0, 200) + "...";
  }

  private List<String> buildConnectivityTestUrls(String baseUrl) {
    return buildCandidateUrls(baseUrl, "chat/completions");
  }

  private List<String> buildCandidateUrls(String baseUrl, String path) {
    String normalizedBaseUrl = ApiPathResolver.stripTrailingSlashes(baseUrl);
    LinkedHashSet<String> candidateUrls = new LinkedHashSet<>();

    candidateUrls.add(normalizedBaseUrl + "/" + path);
    if (!ApiPathResolver.baseUrlContainsVersion(normalizedBaseUrl)) {
      candidateUrls.add(normalizedBaseUrl + "/v1/" + path);
    }

    return List.copyOf(candidateUrls);
  }

  private List<String> buildDashscopeRerankUrls(String baseUrl) {
    LinkedHashSet<String> candidateUrls = new LinkedHashSet<>();
    try {
      URI base = URI.create(ApiPathResolver.stripTrailingSlashes(baseUrl));
      if (base.getHost() != null && base.getHost().contains("dashscope")) {
        candidateUrls.add(new URI(base.getScheme(), base.getAuthority(),
            DASHSCOPE_RERANK_PATH, null, null).toString());
      }
    } catch (Exception e) {
      log.debug("Failed to derive dashscope rerank url from baseUrl {}: {}", baseUrl, e.getMessage());
    }
    candidateUrls.add("https://dashscope.aliyuncs.com" + DASHSCOPE_RERANK_PATH);
    return List.copyOf(candidateUrls);
  }

  private Map<String, Object> buildConnectivityTestRequestBody(String model) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("messages", List.of(Map.of(
        "role", "user",
        "content", "Reply with OK only."
    )));
    requestBody.put("max_tokens", 1);
    return requestBody;
  }

  private Map<String, Object> buildAnthropicTestRequestBody(String model) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("max_tokens", 1);
    requestBody.put("messages", List.of(Map.of(
        "role", "user",
        "content", "Reply with OK only."
    )));
    return requestBody;
  }

  private Map<String, Object> buildEmbeddingTestRequestBody(String model) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("input", List.of("ping"));
    return requestBody;
  }

  private Map<String, Object> buildCohereRerankTestRequestBody(String model) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("query", "ping");
    requestBody.put("documents", List.of("interview platform"));
    requestBody.put("top_n", 1);
    return requestBody;
  }

  private Map<String, Object> buildDashscopeRerankTestRequestBody(String model) {
    Map<String, Object> requestBody = new LinkedHashMap<>();
    requestBody.put("model", model);
    requestBody.put("input", Map.of(
        "query", "ping",
        "documents", List.of("interview platform")));
    requestBody.put("parameters", Map.of(
        "return_documents", false,
        "top_n", 1));
    return requestBody;
  }

  private String requireNonBlank(String value, String fieldName) {
    String normalized = TextUtil.trimToNull(value);
    if (normalized == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, fieldName + " 不能为空");
    }
    return normalized;
  }

  private void validateAtLeastOneCapability(
      String providerId,
      String model,
      boolean hasEmbedding,
      String rerankModel) {
    if (TextUtil.trimToNull(model) == null && !hasEmbedding && TextUtil.trimToNull(rerankModel) == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST,
          "Provider '" + providerId + "' 至少需要配置 聊天模型 / 向量模型 / Rerank 模型 中的一项");
    }
  }

  private String requireValidApiFormat(String raw) {
    if (raw == null || raw.isBlank()) {
      return API_FORMAT_OPENAI;
    }
    String normalized = raw.trim().toLowerCase();
    if (!API_FORMAT_OPENAI.equals(normalized) && !API_FORMAT_ANTHROPIC.equals(normalized)) {
      throw new BusinessException(ErrorCode.BAD_REQUEST,
          "apiFormat 仅支持 openai 或 anthropic，当前值: " + raw);
    }
    return normalized;
  }

  private String requireValidRerankApiFormat(String raw) {
    if (raw == null || raw.isBlank()) {
      return RERANK_API_FORMAT_COHERE;
    }
    String normalized = raw.trim().toLowerCase();
    if (!RERANK_API_FORMAT_COHERE.equals(normalized) && !RERANK_API_FORMAT_DASHSCOPE.equals(normalized)) {
      throw new BusinessException(ErrorCode.BAD_REQUEST,
          "rerankApiFormat 仅支持 cohere 或 dashscope，当前值: " + raw);
    }
    return normalized;
  }

  private String apiFormatOrDefault(String raw) {
    return API_FORMAT_ANTHROPIC.equalsIgnoreCase(raw) ? API_FORMAT_ANTHROPIC : API_FORMAT_OPENAI;
  }

  private String rerankApiFormatOrDefault(String raw) {
    return RERANK_API_FORMAT_DASHSCOPE.equalsIgnoreCase(raw)
        ? RERANK_API_FORMAT_DASHSCOPE
        : RERANK_API_FORMAT_COHERE;
  }

  private void validateEmbeddingConfig(
      String providerId,
      boolean supportsEmbedding,
      String embeddingModel,
      Integer embeddingDimensions) {
    String normalizedModel = TextUtil.trimToNull(embeddingModel);
    if (!supportsEmbedding) {
      return;
    }
    if (normalizedModel == null) {
      throw new BusinessException(ErrorCode.BAD_REQUEST,
          "支持 Embedding 的 Provider 必须填写 embeddingModel");
    }
    if (looksLikeChatModel(normalizedModel)) {
      String recommendation = RECOMMENDED_EMBEDDING_MODELS.get(providerId.toLowerCase());
      String suffix = recommendation != null
          ? "，推荐填写 " + recommendation
          : "，请填写该厂商真实的 Embedding 模型名";
      throw new BusinessException(ErrorCode.BAD_REQUEST,
          "Embedding Model 不能填写聊天模型 '" + normalizedModel + "'" + suffix);
    }
    if (embeddingDimensions == null || embeddingDimensions <= 0) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "向量维度必须为正整数");
    }
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

  // ===== Provider test logic (called under read lock) =====

  private ProviderTestResult doTestProvider(ProviderRuntimeConfig config, String id) {
    try {
      HttpClientSettings settings = HttpClientSettings.defaults()
          .withConnectTimeout(Duration.ofSeconds(5))
          .withReadTimeout(Duration.ofSeconds(10))
          .withInetAddressFilter(
              InetAddressFilter.externalAddresses()
                  .or(InetAddressFilter.adapt(InetAddress::isLoopbackAddress))
                  .or("198.18.0.0/15"));

      RestClient restClient = RestClient.builder()
          .defaultHeader("Authorization", "Bearer " + config.apiKey())
          .requestFactory(ClientHttpRequestFactoryBuilder.jdk().build(settings))
          .build();

      List<String> outcomes = new ArrayList<>();
      boolean allSuccess = true;

      if (TextUtil.trimToNull(config.model()) != null) {
        ConnectivityOutcome outcome = "anthropic".equals(config.apiFormat())
            ? tryPost(restClient, id, config, buildCandidateUrls(config.baseUrl(), "messages"),
                buildAnthropicTestRequestBody(config.model()),
                Map.of("x-api-key", config.apiKey(), "anthropic-version", ANTHROPIC_API_VERSION),
                "聊天(anthropic)")
            : tryPost(restClient, id, config, buildConnectivityTestUrls(config.baseUrl()),
                buildConnectivityTestRequestBody(config.model()), Map.of(), "聊天");
        allSuccess &= outcome.success();
        outcomes.add(capabilityOutcome("聊天", outcome));
      }
      if (config.supportsEmbedding() && TextUtil.trimToNull(config.embeddingModel()) != null) {
        ConnectivityOutcome outcome = tryPost(restClient, id, config,
            buildCandidateUrls(config.baseUrl(), "embeddings"),
            buildEmbeddingTestRequestBody(config.embeddingModel()), Map.of(), "向量");
        allSuccess &= outcome.success();
        outcomes.add(capabilityOutcome("向量", outcome));
      }
      if (TextUtil.trimToNull(config.rerankModel()) != null) {
        ConnectivityOutcome outcome = "dashscope".equals(config.rerankApiFormat())
            ? tryPost(restClient, id, config, buildDashscopeRerankUrls(config.baseUrl()),
                buildDashscopeRerankTestRequestBody(config.rerankModel()), Map.of(), "Rerank(dashscope)")
            : tryPost(restClient, id, config, buildCandidateUrls(config.baseUrl(), "rerank"),
                buildCohereRerankTestRequestBody(config.rerankModel()), Map.of(), "Rerank");
        allSuccess &= outcome.success();
        outcomes.add(capabilityOutcome("Rerank", outcome));
      }

      if (outcomes.isEmpty()) {
        return ProviderTestResult.builder()
            .success(false)
            .message("未配置任何可测试的能力（聊天/向量/Rerank）")
            .model(config.model())
            .build();
      }
      return ProviderTestResult.builder()
          .success(allSuccess)
          .message(String.join("；", outcomes))
          .model(resolveTestResultModel(config))
          .build();
    } catch (Exception e) {
      log.warn("Provider connectivity test setup failed: providerId={}, baseUrl={}, model={}, error={}",
          id, config.baseUrl(), config.model(), e.getMessage(), e);
      return ProviderTestResult.builder()
          .success(false)
          .message("连接失败: " + e.getMessage())
          .model(config.model())
          .build();
    }
  }

  private ConnectivityOutcome tryPost(
      RestClient restClient,
      String id,
      ProviderRuntimeConfig config,
      List<String> candidateUrls,
      Map<String, Object> requestBody,
      Map<String, String> extraHeaders,
      String capabilityLabel) {
    String lastFailureMessage = "Unknown error";

    for (String targetUrl : candidateUrls) {
      try {
        restClient.post()
            .uri(URI.create(targetUrl))
            .headers(headers -> extraHeaders.forEach(headers::set))
            .body(requestBody)
            .retrieve()
            .toEntity(String.class);
        log.info("Provider connectivity test succeeded: providerId={}, baseUrl={}, targetUrl={}, capability={}, model={}",
            id, config.baseUrl(), targetUrl, capabilityLabel, requestBody.get("model"));
        return new ConnectivityOutcome(true, null);
      } catch (RestClientResponseException e) {
        String responseBody = abbreviate(e.getResponseBodyAsString());
        lastFailureMessage = String.format(
            "HTTP %s on %s, body=%s",
            e.getStatusCode().value(),
            targetUrl,
            responseBody
        );
        log.warn(
            "Provider connectivity test failed with response: providerId={}, baseUrl={}, targetUrl={}, capability={}, model={}, status={}, body={}",
            id,
            config.baseUrl(),
            targetUrl,
            capabilityLabel,
            requestBody.get("model"),
            e.getStatusCode().value(),
            responseBody,
            e
        );
      } catch (Exception e) {
        lastFailureMessage = String.format(
            "%s on %s: %s",
            e.getClass().getSimpleName(),
            targetUrl,
            e.getMessage()
        );
        log.warn(
            "Provider connectivity test failed: providerId={}, baseUrl={}, targetUrl={}, capability={}, model={}, error={}",
            id,
            config.baseUrl(),
            targetUrl,
            capabilityLabel,
            requestBody.get("model"),
            e.getMessage(),
            e
        );
      }
    }
    return new ConnectivityOutcome(false, lastFailureMessage);
  }

  private String capabilityOutcome(String capabilityLabel, ConnectivityOutcome outcome) {
    return capabilityLabel + ": " + (outcome.success() ? "连接成功" : "连接失败: " + outcome.detail());
  }

  private String resolveTestResultModel(ProviderRuntimeConfig config) {
    if (TextUtil.trimToNull(config.model()) != null) {
      return config.model();
    }
    if (TextUtil.trimToNull(config.embeddingModel()) != null) {
      return config.embeddingModel();
    }
    return config.rerankModel();
  }

  private record ConnectivityOutcome(boolean success, String detail) {
  }

  // ===== YAML/env 写入逻辑已移除 =====
  // Provider 与语音配置的唯一持久化来源是数据库（llm_provider_config /
  // llm_global_setting）与运行时内存（VoiceInterviewProperties）。
  // 历史实现会把配置镜像写到 ~/.interview-guide/llm-providers.yml 与
  // llm-providers.env，但全仓没有任何加载入口（无 spring.config.import、
  // 无 EnvironmentPostProcessor），属于只写不读的副作用，故整体删除。

  private record ProviderRuntimeConfig(
      String baseUrl,
      String apiKey,
      String model,
      String apiFormat,
      String embeddingModel,
      String rerankModel,
      String rerankApiFormat,
      Integer embeddingDimensions,
      boolean supportsEmbedding,
      Double temperature
  ) {
  }
}
