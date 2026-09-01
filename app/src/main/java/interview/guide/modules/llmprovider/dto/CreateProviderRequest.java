package interview.guide.modules.llmprovider.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateProviderRequest(
    @NotBlank String id,
    @NotBlank String baseUrl,
    @NotBlank String apiKey,
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
    public CreateProviderRequest(
        String id,
        String baseUrl,
        String apiKey,
        String model,
        String embeddingModel,
        Double temperature
    ) {
        this(id, baseUrl, apiKey, model, null, embeddingModel, null, null,
            null, null, null, null, temperature);
    }
}
