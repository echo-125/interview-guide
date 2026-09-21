package interview.guide.modules.llmprovider.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.config.LlmProviderProperties;
import interview.guide.modules.llmprovider.dto.AsrConfigDTO;
import interview.guide.modules.llmprovider.dto.AsrConfigRequest;
import interview.guide.modules.llmprovider.dto.OcrConfigDTO;
import interview.guide.modules.llmprovider.dto.OcrConfigRequest;
import interview.guide.modules.llmprovider.dto.ProviderTestResult;
import interview.guide.modules.llmprovider.model.OcrPlatformConfigEntity;
import interview.guide.modules.llmprovider.model.VoicePlatformConfigEntity;
import interview.guide.modules.llmprovider.repository.LlmGlobalSettingRepository;
import interview.guide.modules.llmprovider.repository.LlmProviderRepository;
import interview.guide.modules.llmprovider.repository.OcrPlatformConfigRepository;
import interview.guide.modules.llmprovider.repository.VoicePlatformConfigRepository;
import interview.guide.modules.voiceinterview.config.VoiceInterviewProperties;
import interview.guide.modules.voiceinterview.service.QwenAsrService;
import interview.guide.modules.voiceinterview.service.QwenTtsService;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/** 语音平台通用配置（DB 驱动）与 OCR 本地模型配置（预留）的读写/测试逻辑 */
class VoiceAndOcrConfigTest {

  private VoicePlatformConfigRepository voiceRepo;
  private OcrPlatformConfigRepository ocrRepo;
  private QwenAsrService asrService;
  private QwenTtsService ttsService;
  private LlmProviderConfigService service;
  private VoiceInterviewProperties voiceProperties;

  @BeforeEach
  void setUp() {
    voiceRepo = mock(VoicePlatformConfigRepository.class);
    ocrRepo = mock(OcrPlatformConfigRepository.class);
    asrService = mock(QwenAsrService.class);
    ttsService = mock(QwenTtsService.class);
    voiceProperties = new VoiceInterviewProperties();
    service = new LlmProviderConfigService(
        mock(LlmProviderProperties.class),
        mock(LlmProviderRegistry.class),
        mock(LlmProviderRepository.class),
        mock(LlmGlobalSettingRepository.class),
        voiceProperties,
        asrService,
        ttsService,
        voiceRepo,
        ocrRepo);
    // JPA repository mock：save 默认返回 null，改为原样返回入参，避免 orElseGet 链 NPE
    org.mockito.BDDMockito.willAnswer(inv -> inv.getArgument(0))
        .given(ocrRepo).save(org.mockito.ArgumentMatchers.any(OcrPlatformConfigEntity.class));
    org.mockito.BDDMockito.willAnswer(inv -> inv.getArgument(0))
        .given(voiceRepo).save(org.mockito.ArgumentMatchers.any(VoicePlatformConfigEntity.class));
  }

  @Test
  @DisplayName("ASR 配置：DB 有记录时优先返回 DB 值并脱敏密钥")
  void getAsrFromDb() {
    VoicePlatformConfigEntity db = VoicePlatformConfigEntity.builder()
        .capability("asr").platform("qwen").baseUrl("wss://example.com/ws")
        .apiKey("sk-abcdef").model("demo-asr").language("zh")
        .format("pcm").sampleRate(16000).enableTurnDetection(true)
        .turnDetectionType("server_vad").turnDetectionThreshold(0.1f).turnDetectionSilenceDurationMs(900)
        .build();
    when(voiceRepo.findById("asr")).thenReturn(Optional.of(db));

    AsrConfigDTO dto = service.getAsrConfig();

    assertThat(dto.getPlatform()).isEqualTo("qwen");
    assertThat(dto.getUrl()).isEqualTo("wss://example.com/ws");
    assertThat(dto.getModel()).isEqualTo("demo-asr");
    assertThat(dto.getMaskedApiKey()).doesNotContain("sk-abcdef");
    assertThat(dto.getMaskedApiKey()).contains("*");
  }

  @Test
  @DisplayName("ASR 配置：DB 无记录时回退 YAML legacy 默认")
  void getAsrYamlFallback() {
    when(voiceRepo.findById("asr")).thenReturn(Optional.empty());
    when(voiceRepo.findById("tts")).thenReturn(Optional.empty());

    AsrConfigDTO dto = service.getAsrConfig();

    assertThat(dto.getPlatform()).isEqualTo("qwen");
    assertThat(dto.getUrl()).isEqualTo(voiceProperties.getQwen().getAsr().getUrl());
    assertThat(dto.getModel()).isEqualTo(voiceProperties.getQwen().getAsr().getModel());
  }

  @Test
  @DisplayName("更新 ASR 配置：持久化并推送运行时")
  void updateAsrPersistsAndPushes() {
    VoicePlatformConfigEntity existing = VoicePlatformConfigEntity.builder()
        .capability("asr").platform("qwen").baseUrl("wss://old").model("m1").build();
    when(voiceRepo.findById("asr")).thenReturn(Optional.of(existing));
    when(voiceRepo.findById("tts")).thenReturn(Optional.of(VoicePlatformConfigEntity.builder().capability("tts").build()));

    service.updateAsrConfig(new AsrConfigRequest(
        "qwen", "wss://new", "m2", null, null, null, null, null, null, null, null));

    verify(voiceRepo).save(existing);
    assertThat(existing.getBaseUrl()).isEqualTo("wss://new");
    assertThat(existing.getModel()).isEqualTo("m2");
    verify(asrService).applyRuntimeConfig(org.mockito.ArgumentMatchers.any());
  }

  @Test
  @DisplayName("OCR 配置：无记录时返回默认值（Ollama + GLM-4V-OCR）")
  void getOcrDefaults() {
    when(ocrRepo.findById(1L)).thenReturn(Optional.empty());

    OcrConfigDTO dto = service.getOcrConfig();

    assertThat(dto.getPlatform()).isEqualTo("ollama");
    assertThat(dto.getBaseUrl()).isEqualTo("http://localhost:11434");
    assertThat(dto.getModel()).isEqualTo("GLM-OCR");
    assertThat(dto.isEnabled()).isTrue();
    // 无记录触发了默认落库
    verify(ocrRepo).save(org.mockito.ArgumentMatchers.any(OcrPlatformConfigEntity.class));
  }

  @Test
  @DisplayName("更新 OCR 配置：合并字段并持久化")
  void updateOcrPersists() {
    OcrPlatformConfigEntity existing = OcrPlatformConfigEntity.builder()
        .id(1L).platform("ollama").baseUrl("http://localhost:11434").model("glm-4v-ocr").enabled(true).build();
    when(ocrRepo.findById(1L)).thenReturn(Optional.of(existing));

    service.updateOcrConfig(new OcrConfigRequest("openai-compatible", "https://ocr.example.com/v1", "sk-key", "vision-model", null));

    assertThat(existing.getBaseUrl()).isEqualTo("https://ocr.example.com/v1");
    assertThat(existing.getModel()).isEqualTo("vision-model");
    verify(ocrRepo).save(existing);
  }

  @Test
  @DisplayName("OCR 测试：未启用时不发起网络调用并给出明确提示")
  void testOcrDisabled() {
    OcrPlatformConfigEntity disabled = OcrPlatformConfigEntity.builder()
        .id(1L).platform("ollama").baseUrl("http://localhost:11434").model("GLM-OCR").enabled(false).build();
    when(ocrRepo.findById(1L)).thenReturn(Optional.of(disabled));

    ProviderTestResult r = service.testOcrConfig();

    assertThat(r.success()).isFalse();
    assertThat(r.message()).contains("未启用");
  }
}