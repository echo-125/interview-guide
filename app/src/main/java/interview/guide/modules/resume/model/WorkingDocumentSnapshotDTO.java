package interview.guide.modules.resume.model;

import com.fasterxml.jackson.databind.JsonNode;

import java.util.List;

/**
 * 简历工作区快照 DTO。
 * document / originalDocument / revisions 以 JsonNode 透传，后端不耦合前端结构化模型的具体结构。
 */
public record WorkingDocumentSnapshotDTO(
    String parser,
    String sourceTextHash,
    JsonNode originalDocument,
    JsonNode document,
    int revisionIndex,
    int revisionSeq,
    List<JsonNode> revisions
) {
}
