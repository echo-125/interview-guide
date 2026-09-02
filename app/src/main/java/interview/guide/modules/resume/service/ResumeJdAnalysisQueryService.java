package interview.guide.modules.resume.service;

import interview.guide.common.ai.PromptSanitizer;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.modules.resume.listener.ResumeJdAnalysisStreamProducer;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeJdAnalysisEntity;
import interview.guide.modules.resume.model.ResumeJdAnalysisRequest;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse.SkillGap;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse.Weakness;
import interview.guide.modules.resume.repository.ResumeJdAnalysisRepository;
import interview.guide.modules.resume.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import tools.jackson.core.JacksonException;
import tools.jackson.core.type.TypeReference;
import tools.jackson.databind.ObjectMapper;

import java.util.List;
import java.util.Optional;

/**
 * JD 匹配诊断记录服务
 * 负责诊断的发起、查询、实体/DTO 转换，以及出题用的薄弱点文本构建
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class ResumeJdAnalysisQueryService {

    private final ResumeRepository resumeRepository;
    private final ResumeJdAnalysisRepository jdAnalysisRepository;
    private final ResumeJdAnalysisStreamProducer jdAnalysisStreamProducer;
    private final ObjectMapper objectMapper;
    private final PromptSanitizer promptSanitizer;

    /**
     * 发起 JD vs 简历匹配诊断
     * 创建 PENDING 记录并投递异步分析任务
     */
    public ResumeJdAnalysisResponse startAnalysis(Long resumeId, ResumeJdAnalysisRequest request) {
        ResumeEntity resume = resumeRepository.findById(resumeId)
            .orElseThrow(() -> new BusinessException(ErrorCode.RESUME_NOT_FOUND));

        if (resume.getResumeText() == null || resume.getResumeText().trim().isEmpty()) {
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED, "简历文本为空，无法进行 JD 匹配分析");
        }

        ResumeJdAnalysisEntity entity = new ResumeJdAnalysisEntity();
        entity.setResume(resume);
        entity.setJdText(request.jdText().trim());
        entity.setLlmProvider(trimOrNull(request.llmProvider()));

        ResumeJdAnalysisEntity saved = jdAnalysisRepository.save(entity);
        jdAnalysisStreamProducer.sendJdAnalyzeTask(saved.getId(), entity.getLlmProvider());
        log.info("JD 匹配分析任务已创建: analysisId={}, resumeId={}", saved.getId(), resumeId);

        return entityToDTO(saved);
    }

    /**
     * 查询简历的所有 JD 匹配诊断记录（最新在前）
     */
    public List<ResumeJdAnalysisResponse> listByResumeId(Long resumeId) {
        return jdAnalysisRepository.findByResumeIdOrderByCreatedAtDescIdDesc(resumeId).stream()
            .map(this::entityToDTO)
            .toList();
    }

    /**
     * 查询简历最新一条已完成的诊断
     */
    public Optional<ResumeJdAnalysisEntity> findLatestCompleted(Long resumeId) {
        return jdAnalysisRepository.findFirstByResumeIdAndAnalysisStatusOrderByIdDesc(
            resumeId, AsyncTaskStatus.COMPLETED);
    }

    /**
     * 将实体转换为DTO
     */
    public ResumeJdAnalysisResponse entityToDTO(ResumeJdAnalysisEntity entity) {
        try {
            List<SkillGap> skillGaps = objectMapper.readValue(
                entity.getSkillGapsJson() != null ? entity.getSkillGapsJson() : "[]",
                new TypeReference<>() {
                }
            );

            List<Weakness> weaknesses = objectMapper.readValue(
                entity.getWeaknessesJson() != null ? entity.getWeaknessesJson() : "[]",
                new TypeReference<>() {
                }
            );

            List<String> recommendations = objectMapper.readValue(
                entity.getRecommendationsJson() != null ? entity.getRecommendationsJson() : "[]",
                new TypeReference<>() {
                }
            );

            return new ResumeJdAnalysisResponse(
                entity.getId(),
                entity.getResume() != null ? entity.getResume().getId() : null,
                entity.getJdText(),
                entity.getMatchScore(),
                entity.getSummary(),
                skillGaps,
                weaknesses,
                recommendations,
                entity.getAnalysisStatus(),
                entity.getAnalysisError(),
                entity.getCreatedAt()
            );
        } catch (JacksonException e) {
            log.error("反序列化 JD 匹配诊断结果失败: analysisId={}", entity.getId(), e);
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED, "获取 JD 匹配诊断结果失败");
        }
    }

    /**
     * 构建出题注入用的薄弱点文本段落
     * 取最新一条已完成诊断，无诊断或内容为空时返回空串（出题行为与现状一致）
     */
    public String buildWeaknessSection(Long resumeId) {
        Optional<ResumeJdAnalysisEntity> latestOpt = findLatestCompleted(resumeId);
        if (latestOpt.isEmpty()) {
            return "";
        }

        ResumeJdAnalysisEntity entity = latestOpt.get();
        try {
            List<SkillGap> skillGaps = readList(entity.getSkillGapsJson(), new TypeReference<>() {
            });
            List<Weakness> weaknesses = readList(entity.getWeaknessesJson(), new TypeReference<>() {
            });
            if (skillGaps.isEmpty() && weaknesses.isEmpty()) {
                return "";
            }

            StringBuilder sb = new StringBuilder();
            if (!skillGaps.isEmpty()) {
                sb.append("### 技能缺口（JD 要求但简历缺失/不足）\n");
                for (SkillGap gap : skillGaps) {
                    sb.append("- ").append(gap.gapSkill());
                    if (gap.severity() != null && !gap.severity().isBlank()) {
                        sb.append("（严重程度：").append(gap.severity()).append("）");
                    }
                    sb.append('\n');
                }
            }
            if (!weaknesses.isEmpty()) {
                sb.append("### 薄弱点（简历有涉及但深度不足）\n");
                for (Weakness weakness : weaknesses) {
                    sb.append("- ").append(weakness.area());
                    if (weakness.description() != null && !weakness.description().isBlank()) {
                        sb.append("：").append(weakness.description());
                    }
                    sb.append('\n');
                }
            }

            String content = promptSanitizer.sanitize(sb.toString());
            return "## 候选人薄弱点与技能缺口（来自 JD 匹配诊断）\n"
                + "适当增加针对以下内容的考察以检验真实水平，请勿在题目中直接提及“诊断”“匹配度”等字眼：\n"
                + promptSanitizer.wrapWithDelimiters("jd_weakness", content) + "\n";
        } catch (JacksonException e) {
            log.warn("解析薄弱点数据失败，出题时不注入: analysisId={}", entity.getId(), e);
            return "";
        }
    }

    private <T> List<T> readList(String json, TypeReference<List<T>> type) {
        return objectMapper.readValue(json != null ? json : "[]", type);
    }

    private String trimOrNull(String value) {
        if (value == null) {
            return null;
        }
        String trimmed = value.trim();
        return trimmed.isEmpty() ? null : trimmed;
    }
}
