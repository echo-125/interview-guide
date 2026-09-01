package interview.guide.modules.llmprovider.dto;

/**
 * 拉取供应商可用模型列表的请求。
 *
 * @param providerId 已保存的 Provider ID（编辑场景；提供后可复用已存的 Base URL / API Key / 协议格式）
 * @param baseUrl    未保存时直接填写
 * @param apiKey     未保存时直接填写
 * @param apiFormat  openai / anthropic，缺省 openai
 */
public record FetchModelsRequest(
    String providerId,
    String baseUrl,
    String apiKey,
    String apiFormat
) {}
