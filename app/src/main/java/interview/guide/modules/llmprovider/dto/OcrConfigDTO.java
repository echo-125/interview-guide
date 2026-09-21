package interview.guide.modules.llmprovider.dto;

import lombok.Builder;
import lombok.Data;

/** OCR 本地模型配置（设置页展示） */
@Data
@Builder
public class OcrConfigDTO {
  private String platform;
  private String baseUrl;
  private String maskedApiKey;
  private String model;
  private boolean enabled;
}