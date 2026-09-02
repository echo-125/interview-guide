package interview.guide.modules.resume.model;

import interview.guide.common.model.AsyncTaskStatus;

import java.time.LocalDateTime;
import java.util.List;

/**
 * JD vs 简历匹配诊断结果
 */
public record ResumeJdAnalysisResponse(
    Long id,
    Long resumeId,
    String jdText,
    Integer matchScore,
    String summary,
    List<SkillGap> skillGaps,
    List<Weakness> weaknesses,
    List<String> recommendations,
    AsyncTaskStatus analysisStatus,
    String analysisError,
    LocalDateTime createdAt
) {

    /**
     * 技能缺口：JD 要求但简历缺失/不足的技能
     */
    public record SkillGap(
        String gapSkill,
        String jdRequirement,
        String resumeEvidence,
        String severity
    ) {
    }

    /**
     * 薄弱点：简历有涉及但达不到 JD 要求的领域
     */
    public record Weakness(
        String area,
        String description,
        String advice
    ) {
    }
}
