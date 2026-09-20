package interview.guide.modules.resume.model;

/**
 * 简历工作区快照 DTO。
 *
 * originalDocument / document / revisions 以 JSON 文本（String）透传，前后端契约保持 JSON，
 * 后端不耦合前端结构化模型的具体结构。选择 String 而非 JsonNode：
 * Spring Boot 4 运行时 JSON 转换是 Jackson 3（tools.jackson），若字段声明为 Jackson 2 的
 * com.fasterxml……JsonNode 会因抽象树类型无法被实例化，导致 @RequestBody 反序列化必然 500。
 */
public record WorkingDocumentSnapshotDTO(
    String parser,
    String sourceTextHash,
    String originalDocument,
    String document,
    int revisionIndex,
    int revisionSeq,
    String revisions
) {
    /** 兼容：返回空 revisions 定值（DTO 不再用 List<JsonNode>） */
    public static final String EMPTY_REVISIONS = "[]";
}