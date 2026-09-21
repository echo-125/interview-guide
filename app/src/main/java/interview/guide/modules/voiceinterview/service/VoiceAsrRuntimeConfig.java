package interview.guide.modules.voiceinterview.service;

/**
 * ASR 运行时配置（通用平台 API 配置 → 语音服务运行时）。
 * 由 LlmProviderConfigService 从 DB（voice_platform_config）组装后下发，
 * 替代原先「单一平台 Qwen YAML 配置」的直接耦合。
 */
public record VoiceAsrRuntimeConfig(
    String platform,
    String url,
    String model,
    String apiKey,
    String language,
    String format,
    Integer sampleRate,
    Boolean enableTurnDetection,
    String turnDetectionType,
    Float turnDetectionThreshold,
    Integer turnDetectionSilenceDurationMs) {

  public static VoiceAsrRuntimeConfig of(
      String url, String model, String apiKey, String language, String format,
      Integer sampleRate, Boolean enableTurnDetection, String turnDetectionType,
      Float turnDetectionThreshold, Integer turnDetectionSilenceDurationMs) {
    return new VoiceAsrRuntimeConfig("qwen", url, model, apiKey, language, format,
        sampleRate, enableTurnDetection, turnDetectionType, turnDetectionThreshold,
        turnDetectionSilenceDurationMs);
  }
}