package interview.guide.modules.llmprovider.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AsrConfigDTO {
  /** 平台标识（默认 qwen，预留其它平台） */
  private String platform;
  private String url;
  private String model;
  private String maskedApiKey;
  private String language;
  private String format;
  private int sampleRate;
  private boolean enableTurnDetection;
  private String turnDetectionType;
  private float turnDetectionThreshold;
  private int turnDetectionSilenceDurationMs;
}
