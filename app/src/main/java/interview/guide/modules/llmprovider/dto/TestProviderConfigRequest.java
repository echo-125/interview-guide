package interview.guide.modules.llmprovider.dto;

import jakarta.validation.constraints.NotBlank;

public record TestProviderConfigRequest(
    String id,
    @NotBlank(message = "Base URL 不能为空") String baseUrl,
    String apiKey,
    String model,
    String apiFormat,
    String embeddingModel,
    Integer embeddingDimensions,
    Boolean supportsEmbedding,
    String rerankModel,
    String rerankApiFormat,
    Integer maxTokens,
    Double topP,
    Double temperature
) {
}
