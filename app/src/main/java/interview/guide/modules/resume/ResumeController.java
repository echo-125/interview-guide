package interview.guide.modules.resume;

import interview.guide.common.annotation.RateLimit;
import interview.guide.common.annotation.RateLimit.TimeUnit;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.result.Result;
import interview.guide.modules.resume.model.ResumeDetailDTO;
import interview.guide.modules.resume.model.ResumeJdAnalysisRequest;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse;
import interview.guide.modules.resume.model.ResumeListItemDTO;
import interview.guide.modules.resume.model.ResumeRewriteResponse;
import interview.guide.modules.resume.model.ResumeStructuredParseResponse;
import interview.guide.modules.resume.model.WorkingDocumentSnapshotDTO;
import interview.guide.modules.resume.service.ResumeDeleteService;
import interview.guide.modules.resume.service.ResumeHistoryService;
import interview.guide.modules.resume.service.ResumeJdAnalysisQueryService;
import interview.guide.modules.resume.service.ResumeRewriteService;
import interview.guide.modules.resume.service.ResumeStructuredParseService;
import interview.guide.modules.resume.service.ResumeUploadService;
import interview.guide.modules.resume.service.ResumeWorkingDocumentService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.InvalidMediaTypeException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

/**
 * 简历控制器
 * Resume Controller for upload and analysis
 */
@Slf4j
@RestController
@RequiredArgsConstructor
@Tag(name = "简历管理", description = "简历上传、分析、导出与删除")
public class ResumeController {

    private final ResumeUploadService uploadService;
    private final ResumeDeleteService deleteService;
    private final ResumeHistoryService historyService;
    private final ResumeJdAnalysisQueryService jdAnalysisQueryService;
    private final ResumeRewriteService rewriteService;
    private final ResumeStructuredParseService structuredParseService;
    private final ResumeWorkingDocumentService workingDocumentService;

    /**
     * 上传简历并获取分析结果
     *
     * @param file 简历文件（支持PDF、DOCX、DOC、TXT、MD等）
     * @return 简历分析结果，包含评分和建议
     */
    @PostMapping(value = "/api/resumes/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @RateLimit(dimension = RateLimit.Dimension.GLOBAL, count = 5)
    @RateLimit(dimension = RateLimit.Dimension.IP, count = 5)
    public Result<Map<String, Object>> uploadAndAnalyze(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "llmProvider", required = false) String llmProvider) {
        Map<String, Object> result = uploadService.uploadAndAnalyze(file, llmProvider);
        boolean isDuplicate = (Boolean) result.get("duplicate");
        if (isDuplicate) {
            return Result.success("检测到相同简历，已返回历史分析结果", result);
        }
        return Result.success(result);
    }

    /**
     * 获取所有简历列表
     */
    @GetMapping("/api/resumes")
    public Result<List<ResumeListItemDTO>> getAllResumes() {
        List<ResumeListItemDTO> resumes = historyService.getAllResumes();
        return Result.success(resumes);
    }

    /**
     * 获取简历详情（包含分析历史）
     */
    @GetMapping("/api/resumes/{id}/detail")
    public Result<ResumeDetailDTO> getResumeDetail(@PathVariable Long id) {
        ResumeDetailDTO detail = historyService.getResumeDetail(id);
        return Result.success(detail);
    }

    /**
     * 获取简历原文件（inline，用于网页预览）
     */
    @GetMapping("/api/resumes/{id}/file")
    public ResponseEntity<byte[]> getResumeFile(@PathVariable Long id) {
        var file = historyService.getResumeFile(id);
        String filename = URLEncoder.encode(file.filename(), StandardCharsets.UTF_8);

        MediaType mediaType;
        try {
            mediaType = MediaType.parseMediaType(file.contentType());
        } catch (InvalidMediaTypeException e) {
            log.warn("简历存储的内容类型无效，按二进制流返回: resumeId={}, contentType={}", id, file.contentType());
            mediaType = MediaType.APPLICATION_OCTET_STREAM;
        }

        return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename*=UTF-8''" + filename)
            .contentType(mediaType)
            .body(file.content());
    }

    /**
     * 导出简历分析报告为PDF
     */
    @GetMapping("/api/resumes/{id}/export")
    public ResponseEntity<byte[]> exportAnalysisPdf(@PathVariable Long id) {
        try {
            var result = historyService.exportAnalysisPdf(id);
            String filename = URLEncoder.encode(result.filename(), StandardCharsets.UTF_8);

            return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename*=UTF-8''" + filename)
                .contentType(MediaType.APPLICATION_PDF)
                .body(result.pdfBytes());
        } catch (Exception e) {
            log.error("导出PDF失败: resumeId={}", id, e);
            throw new BusinessException(ErrorCode.EXPORT_PDF_FAILED, "导出PDF失败，请稍后重试");
        }
    }

    /**
     * 删除简历
     *
     * @param id 简历ID
     * @return 删除结果
     */
    @DeleteMapping("/api/resumes/{id}")
    public Result<Void> deleteResume(@PathVariable Long id) {
        deleteService.deleteResume(id);
        return Result.success(null);
    }

    /**
     * 重新分析简历（手动重试）
     * 用于分析失败后的重试
     *
     * @param id 简历ID
     * @return 结果
     */
    @PostMapping("/api/resumes/{id}/reanalyze")
    @RateLimit(dimension = RateLimit.Dimension.GLOBAL, count = 2)
    @RateLimit(dimension = RateLimit.Dimension.IP, count = 2)
    public Result<Void> reanalyze(
            @PathVariable Long id,
            @RequestParam(value = "llmProvider", required = false) String llmProvider) {
        uploadService.reanalyze(id, llmProvider);
        return Result.success(null);
    }

    /**
     * AI 整篇重写简历（同步，按需调用）
     * 基于原文与最新诊断结果生成优化后全文，不落库
     *
     * @param id 简历ID
     * @param llmProvider 使用的 Provider（空 = 跟随系统默认）
     * @return 重写结果
     */
    @PostMapping("/api/resumes/{id}/rewrite")
    // 整篇重写是一次完整简历出入参的重量级 LLM 调用。
    // 时间单位必须显式写 MINUTES：注解默认 SECONDS，写成 count=2 会变成「全局每秒 2 次」，
    // 多用户同时使用时互相误伤。GLOBAL 用于保护下游模型容量，IP 用于限制单用户刷调用。
    @RateLimit(dimension = RateLimit.Dimension.GLOBAL, count = 30, interval = 1, timeUnit = TimeUnit.MINUTES)
    @RateLimit(dimension = RateLimit.Dimension.IP, count = 5, interval = 1, timeUnit = TimeUnit.MINUTES)
    public Result<ResumeRewriteResponse> rewriteResume(
            @PathVariable Long id,
            @RequestParam(value = "llmProvider", required = false) String llmProvider) {
        return Result.success(rewriteService.rewrite(id, llmProvider));
    }

    /**
     * 简历结构化解析（LLM，按需同步调用）
     * 基于原文提取结构化事实（不改写、不落库），供结构化编辑器使用
     *
     * @param id 简历ID
     * @param llmProvider 使用的 Provider（空 = 跟随系统默认）
     * @return 结构化文档 + 诊断（coverage / warnings）
     */
    @PostMapping("/api/resumes/{id}/parse-structured")
    @RateLimit(dimension = RateLimit.Dimension.GLOBAL, count = 30, interval = 1, timeUnit = TimeUnit.MINUTES)
    @RateLimit(dimension = RateLimit.Dimension.IP, count = 10, interval = 1, timeUnit = TimeUnit.MINUTES)
    public Result<ResumeStructuredParseResponse> parseStructured(
            @PathVariable Long id,
            @RequestParam(value = "llmProvider", required = false) String llmProvider) {
        return Result.success(structuredParseService.parse(id, llmProvider));
    }

    /**
     * 读取简历工作区快照（ResumeDocument + revisions，一简历一行）
     * 无记录时返回 null；过期判定由前端用 sourceTextHash 与当前 resumeText 比对完成。
     *
     * @param id 简历ID
     * @return 工作区快照（可能为 null）
     */
    @GetMapping("/api/resumes/{id}/working-document")
    public Result<WorkingDocumentSnapshotDTO> getWorkingDocument(@PathVariable Long id) {
        return Result.success(workingDocumentService.load(id).orElse(null));
    }

    /**
     * 保存简历工作区快照（幂等整体覆盖，不追加）
     * 前端 debounce 自动保存调用；不调用 LLM、不修改原始文件。
     *
     * @param id  简历ID
     * @param dto 工作区快照（document + revisions）
     * @return 落库后的快照
     */
    @PutMapping("/api/resumes/{id}/working-document")
    public Result<WorkingDocumentSnapshotDTO> saveWorkingDocument(
            @PathVariable Long id,
            @RequestBody WorkingDocumentSnapshotDTO dto) {
        return Result.success(workingDocumentService.upsert(id, dto));
    }

    /**
     * 发起 JD vs 简历匹配诊断（异步）
     * 创建 PENDING 诊断记录并投递异步分析任务，前端轮询列表接口获取状态
     *
     * @param id 简历ID
     * @param request 请求体：JD 文本 + 可选 Provider
     * @return 新建的诊断记录（PENDING 状态）
     */
    @PostMapping("/api/resumes/{id}/jd-analysis")
    @RateLimit(dimension = RateLimit.Dimension.GLOBAL, count = 5)
    @RateLimit(dimension = RateLimit.Dimension.IP, count = 5)
    public Result<ResumeJdAnalysisResponse> startJdAnalysis(
            @PathVariable Long id,
            @Valid @RequestBody ResumeJdAnalysisRequest request) {
        return Result.success(jdAnalysisQueryService.startAnalysis(id, request));
    }

    /**
     * 获取简历的 JD 匹配诊断记录列表（最新在前，含分析状态）
     */
    @GetMapping("/api/resumes/{id}/jd-analyses")
    public Result<List<ResumeJdAnalysisResponse>> listJdAnalyses(@PathVariable Long id) {
        return Result.success(jdAnalysisQueryService.listByResumeId(id));
    }

    /**
     * 健康检查接口
     */
    @GetMapping("/api/resumes/health")
    public Result<Map<String, String>> health() {
        return Result.success(Map.of(
            "status", "UP",
            "service", "AI Interview Platform - Resume Service"
        ));
    }

}
