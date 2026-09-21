package interview.guide.modules.llmprovider.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TtsConfigDTO {
  /** 平台标识（默认 qwen，预留其它平台） */
  private String platform;
  private String model;
  private String maskedApiKey;
  private String voice;
  private String format;
  private int sampleRate;
  private String mode;
  private String languageType;
  private float speechRate;
  private int volume;
}
