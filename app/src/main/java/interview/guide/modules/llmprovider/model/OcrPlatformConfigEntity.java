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
 * OCR 本地模型配置（预留能力：设置页可配置并测试可达性，不接入文档解析逻辑）。
 *
 * 默认对接本机 Ollama（http://localhost:11434）+ glm-4v-ocr，
 * 亦可配置为 OpenAI 兼容的视觉模型端点。enabled=false 表示未启用。
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "ocr_platform_config")
public class OcrPlatformConfigEntity {

  /** 单行配置，固定主键 1 */
  @Id
  private Long id;

  @Builder.Default
  @Column(nullable = false, length = 32)
  private String platform = "ollama";

  @Builder.Default
  @Column(name = "base_url", nullable = false, length = 512)
  private String baseUrl = "http://localhost:11434";

  @Column(name = "api_key", length = 4096)
  private String apiKey;

  @Builder.Default
  @Column(nullable = false, length = 128)
  private String model = "glm-4v-ocr";

  @Builder.Default
  @Column(nullable = false)
  private boolean enabled = true;
}