package interview.guide.modules.resume.service;

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
        if (dto == null) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区快照不能为空");
        }
        String docJson = dto.document();
        String origJson = dto.originalDocument();
        if (!isJsonObject(docJson)) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区 document 不能为空");
        }
        if (!isJsonObject(origJson)) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区 originalDocument 不能为空");
        }
        String sourceTextHash = dto.sourceTextHash();
        if (sourceTextHash == null || sourceTextHash.isBlank()) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "工作区 sourceTextHash 不能为空");
        }
        ResumeWorkingDocumentEntity entity = repository.findByResumeId(resumeId).orElseGet(() -> {
            ResumeWorkingDocumentEntity e = new ResumeWorkingDocumentEntity();
            e.setResumeId(resumeId);
            return e;
        });
        entity.setParser(dto.parser() == null || dto.parser().isBlank() ? "llm" : dto.parser());
        entity.setSourceTextHash(sourceTextHash);
        entity.setOriginalDocumentJson(origJson);
        entity.setDocumentJson(docJson);
        entity.setRevisionIndex(Math.max(-1, dto.revisionIndex()));
        entity.setRevisionSeq(Math.max(0, dto.revisionSeq()));
        String revisionsJson = dto.revisions();
        entity.setRevisionsJson(revisionsJson == null || revisionsJson.isBlank()
            ? WorkingDocumentSnapshotDTO.EMPTY_REVISIONS : revisionsJson);
        ResumeWorkingDocumentEntity saved = repository.save(entity);
        log.info("简历工作区已保存: resumeId={}, revisions={}, parser={}",
            resumeId, entity.getRevisionsJson().length(), entity.getParser());
        return toDto(saved);
    }

    /** 校验字符串是否为合法 JSON 对象（DTO 以 JSON 文本透传） */
    private boolean isJsonObject(String json) {
        if (json == null || json.isBlank()) {
            return false;
        }
        try {
            return objectMapper.readTree(json).isObject();
        } catch (Exception e) {
            return false;
        }
    }

    private WorkingDocumentSnapshotDTO toDto(ResumeWorkingDocumentEntity e) {
        return new WorkingDocumentSnapshotDTO(
            e.getParser(), e.getSourceTextHash(),
            e.getOriginalDocumentJson(), e.getDocumentJson(),
            e.getRevisionIndex(), e.getRevisionSeq(), e.getRevisionsJson());
    }
}
