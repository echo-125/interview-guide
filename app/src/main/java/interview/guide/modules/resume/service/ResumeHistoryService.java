package interview.guide.modules.resume.service;

import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.util.TextUtil;
import interview.guide.infrastructure.export.PdfExportService;
import interview.guide.infrastructure.file.FileStorageService;
import interview.guide.infrastructure.mapper.InterviewMapper;
import interview.guide.infrastructure.mapper.ResumeMapper;
import interview.guide.modules.interview.model.InterviewHistoryItemDTO;
import interview.guide.modules.interview.model.ResumeAnalysisResponse;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.BulletAudit;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.DimensionExplanation;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.RecruiterView;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.TermIssue;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.TopAction;
import interview.guide.modules.interview.service.InterviewPersistenceService;
import interview.guide.modules.resume.model.ResumeAnalysisEntity;
import interview.guide.modules.resume.model.ResumeDetailDTO;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeListItemDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tools.jackson.core.JacksonException;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * 简历历史服务
 * 简历历史和导出简历分析报告
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeHistoryService {

    private final ResumePersistenceService resumePersistenceService;
    private final InterviewPersistenceService interviewPersistenceService;
    private final PdfExportService pdfExportService;
    private final FileStorageService fileStorageService;
    private final ObjectMapper objectMapper;
    private final ResumeMapper resumeMapper;
    private final InterviewMapper interviewMapper;

    /**
     * 获取所有简历列表
     * 批量查询最新分析与面试次数，避免 N+1
     */
    @Transactional(readOnly = true)
    public List<ResumeListItemDTO> getAllResumes() {
        List<ResumeEntity> resumes = resumePersistenceService.findAllResumes();
        if (resumes.isEmpty()) {
            return List.of();
        }

        List<Long> resumeIds = resumes.stream().map(ResumeEntity::getId).toList();
        // 批量取每个简历最新分析
        Map<Long, ResumeAnalysisEntity> latestAnalysisById = resumePersistenceService.findLatestAnalyses(resumeIds)
            .stream()
            .collect(Collectors.toMap(a -> a.getResume().getId(), a -> a, (a, b) -> a));
        // 单条 GROUP BY 统计各简历的面试次数（替代逐条 COUNT）
        Map<Long, Long> interviewCountById = interviewPersistenceService.countByResumeIds(resumeIds);

        return resumes.stream().map(resume -> {
            // 获取最新分析结果的分数
            Integer latestScore = null;
            LocalDateTime lastAnalyzedAt = null;
            ResumeAnalysisEntity analysis = latestAnalysisById.get(resume.getId());
            if (analysis != null) {
                latestScore = analysis.getOverallScore();
                lastAnalyzedAt = analysis.getAnalyzedAt();
            }

            // 获取面试次数
            long interviewCount = interviewCountById.getOrDefault(resume.getId(), 0L);

            // 使用 MapStruct 映射
            return new ResumeListItemDTO(
                resume.getId(),
                resume.getOriginalFilename(),
                resume.getFileSize(),
                resume.getUploadedAt(),
                resume.getAccessCount(),
                latestScore,
                lastAnalyzedAt,
                (int) interviewCount,
                resume.getAnalyzeStatus(),
                resume.getAnalyzeError()
            );
        }).toList();
    }

    /**
     * 获取简历详情（包含分析历史）
     */
    public ResumeDetailDTO getResumeDetail(Long id) {
        Optional<ResumeEntity> resumeOpt = resumePersistenceService.findById(id);
        if (resumeOpt.isEmpty()) {
            throw new BusinessException(ErrorCode.RESUME_NOT_FOUND);
        }

        ResumeEntity resume = resumeOpt.get();

        // 获取所有分析记录，使用 MapStruct 批量转换
        List<ResumeAnalysisEntity> analyses = resumePersistenceService.findAnalysesByResumeId(id);
        List<ResumeDetailDTO.AnalysisHistoryDTO> analysisHistory = resumeMapper.toAnalysisHistoryDTOList(
            analyses,
            this::extractStrengths,
            this::extractSuggestions,
            this::extractBulletAudits,
            this::extractTermIssues,
            this::extractDimensionExplanations,
            this::extractTopActions,
            this::extractRisks,
            this::extractRecruiterView
        );

        // 使用 InterviewMapper 转换面试历史
        List<InterviewHistoryItemDTO> interviewHistory = interviewMapper.toInterviewHistoryList(
            interviewPersistenceService.findByResumeId(id)
        );

        return new ResumeDetailDTO(
            resume.getId(),
            resume.getOriginalFilename(),
            resume.getFileSize(),
            resume.getContentType(),
            resume.getStorageUrl(),
            resume.getUploadedAt(),
            resume.getAccessCount(),
            resume.getResumeText(),
            resume.getAnalyzeStatus(),
            resume.getAnalyzeError(),
            analysisHistory,
            interviewHistory
        );
    }

    /**
     * 简历原文件（用于网页预览）
     */
    public record ResumeFile(byte[] content, String contentType, String filename) {
    }

    /**
     * 获取简历原文件内容
     *
     * @param id 简历ID
     * @return 文件字节、内容类型与原始文件名
     */
    public ResumeFile getResumeFile(Long id) {
        ResumeEntity resume = resumePersistenceService.findById(id)
            .orElseThrow(() -> new BusinessException(ErrorCode.RESUME_NOT_FOUND));

        if (!TextUtil.hasText(resume.getStorageKey())) {
            throw new BusinessException(ErrorCode.STORAGE_DOWNLOAD_FAILED, "简历原文件不可用");
        }

        byte[] content = fileStorageService.downloadFile(resume.getStorageKey());
        String contentType = TextUtil.trimToNull(resume.getContentType());
        return new ResumeFile(
            content,
            contentType != null ? contentType : "application/octet-stream",
            resume.getOriginalFilename()
        );
    }

    /**
     * 从 JSON 提取 strengths
     */
    private List<String> extractStrengths(ResumeAnalysisEntity entity) {
        try {
            if (entity.getStrengthsJson() != null) {
                return objectMapper.readValue(
                    entity.getStrengthsJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 strengths JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 suggestions
     */
    private List<Object> extractSuggestions(ResumeAnalysisEntity entity) {
        try {
            if (entity.getSuggestionsJson() != null) {
                return objectMapper.readValue(
                    entity.getSuggestionsJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 suggestions JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 bulletAudits（旧数据无此字段时返回空列表）
     */
    private List<BulletAudit> extractBulletAudits(ResumeAnalysisEntity entity) {
        try {
            if (entity.getBulletAuditsJson() != null) {
                return objectMapper.readValue(
                    entity.getBulletAuditsJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 bulletAudits JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 termIssues（旧数据无此字段时返回空列表）
     */
    private List<TermIssue> extractTermIssues(ResumeAnalysisEntity entity) {
        try {
            if (entity.getTermIssuesJson() != null) {
                return objectMapper.readValue(
                    entity.getTermIssuesJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 termIssues JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 dimensionExplanations（旧数据无此字段时返回空列表）
     */
    private List<DimensionExplanation> extractDimensionExplanations(ResumeAnalysisEntity entity) {
        try {
            if (entity.getDimensionExplanationsJson() != null) {
                return objectMapper.readValue(
                    entity.getDimensionExplanationsJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 dimensionExplanations JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 topActions（旧数据无此字段时返回空列表）
     */
    private List<TopAction> extractTopActions(ResumeAnalysisEntity entity) {
        try {
            if (entity.getTopActionsJson() != null) {
                return objectMapper.readValue(
                    entity.getTopActionsJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 topActions JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 risks（旧数据无此字段时返回空列表）
     */
    private List<String> extractRisks(ResumeAnalysisEntity entity) {
        try {
            if (entity.getRisksJson() != null) {
                return objectMapper.readValue(
                    entity.getRisksJson(),
                        new TypeReference<>() {
                        }
                );
            }
        } catch (JacksonException e) {
            log.error("解析 risks JSON 失败", e);
        }
        return List.of();
    }

    /**
     * 从 JSON 提取 recruiterView（旧数据无此字段时返回 null）
     */
    private RecruiterView extractRecruiterView(ResumeAnalysisEntity entity) {
        try {
            if (entity.getRecruiterViewJson() != null) {
                return objectMapper.readValue(entity.getRecruiterViewJson(), RecruiterView.class);
            }
        } catch (JacksonException e) {
            log.error("解析 recruiterView JSON 失败", e);
        }
        return null;
    }

    /**
     * 导出简历分析报告为PDF
     */
    public ExportResult exportAnalysisPdf(Long resumeId) {
        Optional<ResumeEntity> resumeOpt = resumePersistenceService.findById(resumeId);
        if (resumeOpt.isEmpty()) {
            throw new BusinessException(ErrorCode.RESUME_NOT_FOUND);
        }

        ResumeEntity resume = resumeOpt.get();
        Optional<ResumeAnalysisResponse> analysisOpt = resumePersistenceService.getLatestAnalysisAsDTO(resumeId);
        if (analysisOpt.isEmpty()) {
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_NOT_FOUND);
        }

        try {
            byte[] pdfBytes = pdfExportService.exportResumeAnalysis(resume, analysisOpt.get());
            String filename = "简历分析报告_" + resume.getOriginalFilename() + ".pdf";

            return new ExportResult(pdfBytes, filename);
        } catch (Exception e) {
            log.error("导出PDF失败: resumeId={}", resumeId, e);
            throw new BusinessException(ErrorCode.EXPORT_PDF_FAILED, "导出PDF失败: " + e.getMessage());
        }
    }

    /**
     * PDF导出结果
     */
    public record ExportResult(byte[] pdfBytes, String filename) {}
}

