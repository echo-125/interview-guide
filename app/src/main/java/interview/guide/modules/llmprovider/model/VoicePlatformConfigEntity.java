package interview.guide.modules.llmprovider.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 语音平台（ASR / TTS）通用 API 配置（DB 驱动，设置页唯一来源）。
 *
 * capability = 'asr'（实时语音识别）| 'tts'（实时语音合成）。
 * 平台字段 platform 标识当前实现平台（默认 qwen）；后续接入其它平台
 * 时只需扩展实现并按设置页选择的平台分发，无需再改配置结构。
 * 仅设置页可读写，启动时若缺省则由 YAML legacy 默认兜底落库。
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "voice_platform_config")
public class VoicePlatformConfigEntity {

  @Id
  @Column(length = 16)
  private String capability;

  @Builder.Default
  @Column(nullable = false, length = 32)
  private String platform = "qwen";

  /** ASR 端点（WebSocket）或通用 API Base URL */
  @Column(name = "base_url", length = 512)
  private String baseUrl;

  @Column(name = "api_key", length = 4096)
  private String apiKey;

  @Column(length = 128)
  private String model;

  // ---- ASR 专属 ----
  @Column(length = 16)
  private String language;

  @Column(length = 16)
  private String format;

  private Integer sampleRate;

  @Column(name = "enable_turn_detection")
  private Boolean enableTurnDetection;

  @Column(name = "turn_detection_type", length = 32)
  private String turnDetectionType;

  @Column(name = "turn_detection_threshold")
  private Float turnDetectionThreshold;

  @Column(name = "turn_detection_silence_ms")
  private Integer turnDetectionSilenceDurationMs;

  // ---- TTS 专属 ----
  @Column(length = 64)
  private String voice;

  @Column(length = 16)
  private String mode;

  @Column(name = "language_type", length = 32)
  private String languageType;

  @Column(name = "speech_rate")
  private Float speechRate;

  private Integer volume;
}