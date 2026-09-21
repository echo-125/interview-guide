package interview.guide.modules.llmprovider.dto;

public record OcrConfigRequest(
    String platform,
    String baseUrl,
    String apiKey,
    String model,
    Boolean enabled
) {}