package interview.guide.modules.llmprovider.dto;

import lombok.Builder;

@Builder
public record ProviderDTO(
    String id,
    String baseUrl,
    String maskedApiKey,
    String model,
    String apiFormat,
    String embeddingModel,
    String rerankModel,
    String rerankApiFormat,
    Integer maxTokens,
    Double topP,
    Integer embeddingDimensions,
    boolean supportsEmbedding,
    Double temperature,
    boolean defaultChatProvider,
    boolean defaultEmbeddingProvider,
    boolean defaultRerankProvider
) {}
