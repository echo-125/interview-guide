package interview.guide.modules.resume.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.resume.model.ResumeWorkingDocumentEntity;
import interview.guide.modules.resume.model.WorkingDocumentSnapshotDTO;
import interview.guide.modules.resume.repository.ResumeWorkingDocumentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * 简历工作区持久化服务。
 *
 * 存储结构化工作简历（ResumeDocument + revisions 全量快照），一简历一行、整体覆盖。
 * - load：按 resumeId 取最新快照；前端再根据 sourceTextHash 判断是否过期（前端为 hash 算法唯一来源）。
 * - upsert：幂等覆盖保存，不追加。
 * 不调用 LLM / S3 / 外部 HTTP（无事务内外部调用风险）。
 */
@Service
public class ResumeWorkingDocumentService {

    private static final Logger log = LoggerFactory.getLogger(ResumeWorkingDocumentService.class);

    private final ResumeWorkingDocumentRepository repository;
    private final ResumePersistenceService resumePersistenceService;
    /** 本地自建 ObjectMapper（Spring Boot 4 + starter-webmvc 不自动注册该 bean，避免依赖容器） */
    private final ObjectMapper objectMapper = new ObjectMapper();

    public ResumeWorkingDocumentService(
            ResumeWorkingDocumentRepository repository,
            ResumePersistenceService resumePersistenceService) {
        this.repository = repository;
        this.resumePersistenceService = resumePersistenceService;
    }

    /** 读取最新工作区快照；无记录返回 empty。过期判定由前端用 sourceTextHash 完成。 */
    public Optional<WorkingDocumentSnapshotDTO> load(Long resumeId) {
        return repository.findByResumeId(resumeId).map(this::toDto);
    }

    /** 保存（创建或整体覆盖）工作区快照，返回落库后的快照。 */
    @Transactional
    public WorkingDocumentSnapshotDTO upsert(Long resumeId, WorkingDocumentSnapshotDTO dto) {
        resumePersistenceService.findById(resumeId)
            .orElseThrow(() -> new BusinessException(ErrorCode.RESUME_NOT_FOUND));
        if (dto == null || dto.document() == null || !dto.document().isObject()) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区 document 不能为空");
        }
        if (dto.originalDocument() == null || !dto.originalDocument().isObject()) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区 originalDocument 不能为空");
        }
        String sourceTextHash = dto.sourceTextHash();
        if (sourceTextHash == null || sourceTextHash.isBlank()) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区 sourceTextHash 不能为空");
        }
        try {
            ResumeWorkingDocumentEntity entity = repository.findByResumeId(resumeId).orElseGet(() -> {
                ResumeWorkingDocumentEntity e = new ResumeWorkingDocumentEntity();
                e.setResumeId(resumeId);
                return e;
            });
            entity.setParser(dto.parser() == null || dto.parser().isBlank() ? "llm" : dto.parser());
            entity.setSourceTextHash(sourceTextHash);
            entity.setOriginalDocumentJson(objectMapper.writeValueAsString(dto.originalDocument()));
            entity.setDocumentJson(objectMapper.writeValueAsString(dto.document()));
            entity.setRevisionIndex(Math.max(-1, dto.revisionIndex()));
            entity.setRevisionSeq(Math.max(0, dto.revisionSeq()));
            entity.setRevisionsJson(objectMapper.writeValueAsString(
                dto.revisions() == null ? List.of() : dto.revisions()));
            ResumeWorkingDocumentEntity saved = repository.save(entity);
            log.info("简历工作区已保存: resumeId={}, revisions={}, parser={}",
                resumeId, entity.getRevisionsJson().length(), entity.getParser());
            return toDto(saved);
        } catch (JsonProcessingException e) {
            log.error("简历工作区序列化失败: resumeId={}", resumeId, e);
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历工作区序列化失败");
        }
    }

    private WorkingDocumentSnapshotDTO toDto(ResumeWorkingDocumentEntity e) {
        try {
            JsonNode originalDocument = objectMapper.readTree(e.getOriginalDocumentJson());
            JsonNode document = objectMapper.readTree(e.getDocumentJson());
            List<JsonNode> revisions = objectMapper.readValue(
                e.getRevisionsJson(), new TypeReference<List<JsonNode>>() { });
            return new WorkingDocumentSnapshotDTO(
                e.getParser(), e.getSourceTextHash(), originalDocument, document,
                e.getRevisionIndex(), e.getRevisionSeq(), revisions);
        } catch (JsonProcessingException ex) {
            log.error("简历工作区反序列化失败: resumeId={}", e.getResumeId(), ex);
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历工作区读取失败");
        }
    }
}
