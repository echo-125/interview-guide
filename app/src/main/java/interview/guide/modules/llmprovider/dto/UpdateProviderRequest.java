package interview.guide.modules.llmprovider.dto;

public record UpdateProviderRequest(
    String baseUrl,
    String apiKey,
    String model,
    String apiFormat,
    String embeddingModel,
    String rerankModel,
    String rerankApiFormat,
    Integer maxTokens,
    Double topP,
    Integer embeddingDimensions,
    Boolean supportsEmbedding,
    Double temperature
) {
    public UpdateProviderRequest(
        String baseUrl,
        String apiKey,
        String model,
        String embeddingModel,
        Double temperature
    ) {
        this(baseUrl, apiKey, model, null, embeddingModel, null, null,
            null, null, null, null, temperature);
    }
}
