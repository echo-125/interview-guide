package interview.guide.modules.resume.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

import java.time.LocalDateTime;

/**
 * 简历工作区持久化实体。
 * 一简历一行（resume_id 唯一），存储结构化工作简历的当前文档与修订历史全量快照。
 * 仅承载序列化后的 JSON，前端为结构化模型的唯一事实源。
 */
@Entity
@Table(name = "resume_working_documents", uniqueConstraints = {
    @UniqueConstraint(name = "uk_resume_working_document", columnNames = "resume_id")
})
public class ResumeWorkingDocumentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "resume_id", nullable = false)
    private Long resumeId;

    /** 解析器：llm / rule */
    @Column(nullable = false, length = 10)
    private String parser = "llm";

    /** 生成工作区时 resumeText 的哈希，前端用于判断工作区是否随重新解析而过期 */
    @Column(name = "source_text_hash", nullable = false, length = 64)
    private String sourceTextHash;

    /** 原始 ResumeDocument（撤销基线，前端 JSON） */
    @Column(name = "original_document_json", nullable = false, columnDefinition = "TEXT")
    private String originalDocumentJson = "{}";

    /** 当前 ResumeDocument（前端 JSON） */
    @Column(name = "document_json", nullable = false, columnDefinition = "TEXT")
    private String documentJson;

    /** 当前 revision 指针：-1 = 原始文档 */
    @Column(name = "revision_index", nullable = false)
    private int revisionIndex = -1;

    /** revision 自增序号 */
    @Column(name = "revision_seq", nullable = false)
    private int revisionSeq = 0;

    /** 修订历史（DocumentRevision[] 前端 JSON） */
    @Column(name = "revisions_json", nullable = false, columnDefinition = "TEXT")
    private String revisionsJson = "[]";

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();
        createdAt = now;
        updatedAt = now;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getResumeId() {
        return resumeId;
    }

    public void setResumeId(Long resumeId) {
        this.resumeId = resumeId;
    }

    public String getParser() {
        return parser;
    }

    public void setParser(String parser) {
        this.parser = parser;
    }

    public String getSourceTextHash() {
        return sourceTextHash;
    }

    public void setSourceTextHash(String sourceTextHash) {
        this.sourceTextHash = sourceTextHash;
    }

    public String getOriginalDocumentJson() {
        return originalDocumentJson;
    }

    public void setOriginalDocumentJson(String originalDocumentJson) {
        this.originalDocumentJson = originalDocumentJson;
    }

    public String getDocumentJson() {
        return documentJson;
    }

    public void setDocumentJson(String documentJson) {
        this.documentJson = documentJson;
    }

    public int getRevisionIndex() {
        return revisionIndex;
    }

    public void setRevisionIndex(int revisionIndex) {
        this.revisionIndex = revisionIndex;
    }

    public int getRevisionSeq() {
        return revisionSeq;
    }

    public void setRevisionSeq(int revisionSeq) {
        this.revisionSeq = revisionSeq;
    }

    public String getRevisionsJson() {
        return revisionsJson;
    }

    public void setRevisionsJson(String revisionsJson) {
        this.revisionsJson = revisionsJson;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
