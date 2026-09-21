package interview.guide.modules.voiceinterview.service;

/**
 * TTS 运行时配置（通用平台 API 配置 → 语音服务运行时）。
 * 由 LlmProviderConfigService 从 DB（voice_platform_config）组装后下发。
 */
public record VoiceTtsRuntimeConfig(
    String platform,
    String model,
    String apiKey,
    String voice,
    String format,
    Integer sampleRate,
    String mode,
    String languageType,
    Float speechRate,
    Integer volume) {

  public static VoiceTtsRuntimeConfig of(
      String model, String apiKey, String voice, String format, Integer sampleRate,
      String mode, String languageType, Float speechRate, Integer volume) {
    return new VoiceTtsRuntimeConfig("qwen", model, apiKey, voice, format, sampleRate,
        mode, languageType, speechRate, volume);
  }
}