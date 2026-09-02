package interview.guide.modules.resume.model;

import interview.guide.common.model.AsyncTaskStatus;
import jakarta.persistence.*;

import java.time.LocalDateTime;

/**
 * 简历 vs JD 匹配度诊断实体
 * 记录目标岗位 JD 与简历的匹配分析结果（技能缺口、薄弱点、补强建议）
 */
@Entity
@Table(name = "resume_jd_analyses", indexes = {
    @Index(name = "idx_jd_analysis_resume", columnList = "resume_id")
})
public class ResumeJdAnalysisEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // 关联的简历
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private ResumeEntity resume;

    // 目标岗位 JD 原文
    @Column(columnDefinition = "TEXT")
    private String jdText;

    // 匹配度总分 (0-100)
    private Integer matchScore;

    // 匹配度总结
    @Column(columnDefinition = "TEXT")
    private String summary;

    // 技能缺口列表 (JSON格式: [{gapSkill, jdRequirement, resumeEvidence, severity}])
    @Column(columnDefinition = "TEXT")
    private String skillGapsJson;

    // 薄弱点列表 (JSON格式: [{area, description, advice}])
    @Column(columnDefinition = "TEXT")
    private String weaknessesJson;

    // 建议补强的知识点列表 (JSON格式: [string])
    @Column(columnDefinition = "TEXT")
    private String recommendationsJson;

    // 分析状态（创建时为 PENDING，异步分析完成后变为 COMPLETED）
    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private AsyncTaskStatus analysisStatus = AsyncTaskStatus.PENDING;

    // 分析错误信息（失败时记录）
    @Column(length = 500)
    private String analysisError;

    // 分析使用的 LLM Provider（空 = 跟随系统默认）
    @Column(name = "llm_provider", length = 50)
    private String llmProvider;

    // 创建时间
    @Column(nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ResumeEntity getResume() {
        return resume;
    }

    public void setResume(ResumeEntity resume) {
        this.resume = resume;
    }

    public String getJdText() {
        return jdText;
    }

    public void setJdText(String jdText) {
        this.jdText = jdText;
    }

    public Integer getMatchScore() {
        return matchScore;
    }

    public void setMatchScore(Integer matchScore) {
        this.matchScore = matchScore;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getSkillGapsJson() {
        return skillGapsJson;
    }

    public void setSkillGapsJson(String skillGapsJson) {
        this.skillGapsJson = skillGapsJson;
    }

    public String getWeaknessesJson() {
        return weaknessesJson;
    }

    public void setWeaknessesJson(String weaknessesJson) {
        this.weaknessesJson = weaknessesJson;
    }

    public String getRecommendationsJson() {
        return recommendationsJson;
    }

    public void setRecommendationsJson(String recommendationsJson) {
        this.recommendationsJson = recommendationsJson;
    }

    public AsyncTaskStatus getAnalysisStatus() {
        return analysisStatus;
    }

    public void setAnalysisStatus(AsyncTaskStatus analysisStatus) {
        this.analysisStatus = analysisStatus;
    }

    public String getAnalysisError() {
        return analysisError;
    }

    public void setAnalysisError(String analysisError) {
        this.analysisError = analysisError;
    }

    public String getLlmProvider() {
        return llmProvider;
    }

    public void setLlmProvider(String llmProvider) {
        this.llmProvider = llmProvider;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
