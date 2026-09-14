package interview.guide.modules.interview.model;

import java.util.List;

/**
 * 简历分析响应DTO
 */
public record ResumeAnalysisResponse(
    // 总分 (0-100)
    int overallScore,

    // 各维度评分
    ScoreDetail scoreDetail,

    // 简历摘要
    String summary,

    // 优点列表
    List<String> strengths,

    // 改进建议列表
    List<Suggestion> suggestions,

    // 逐条经历体检（针对简历中具体条目的原句级审计，可为 null）
    List<BulletAudit> bulletAudits,

    // 名词规范性检查结果（Java 侧确定性检查，可为 null）
    List<TermIssue> termIssues,

    // AI 一句话结论（可为 null）
    String headline,

    // 可解释评分：各维度得分、对总分影响与证据（可为 null）
    List<DimensionExplanation> dimensionExplanations,

    // 最值得修改的优先行动（预期 3 条，可为 null）
    List<TopAction> topActions,

    // 最大风险（可为 null）
    List<String> risks,

    // 招聘方视角（可为 null）
    RecruiterView recruiterView,

    // 原始简历文本
    String originalText
) {

    /**
     * 各维度评分详情
     */
    public record ScoreDetail(
        int contentScore,       // 内容完整性 (0-25)
        int structureScore,     // 结构清晰度 (0-20)
        int skillMatchScore,    // 技能匹配度 (0-25)
        int expressionScore,    // 表达专业性 (0-15)
        int projectScore        // 项目经验 (0-15)
    ) {}

    /**
     * 改进建议
     */
    public record Suggestion(
        String category,        // 建议类别：内容、格式、技能、项目等
        String priority,        // 优先级：高、中、低
        String issue,           // 问题描述
        String recommendation,  // 具体建议
        String section,         // 建议所属模块：专业技能、工作经历、项目经历等（可为 null）
        String quote,           // 简历原文逐字引用（可为 null）
        String rewrite,         // 原句对应的优化改写（可为 null）
        String impact           // 不修改的影响说明（可为 null）
    ) {}

    /**
     * 单条经历描述的体检结果
     */
    public record BulletAudit(
        String quote,           // 简历原文逐字引用的条目
        List<String> problems,  // 问题标签：弱动词开头、缺量化结果、表述过长、技术堆砌等
        String rewrite          // 基于原文的优化改写
    ) {}

    /**
     * 名词规范性问题（Java 侧词表检查产出）
     */
    public record TermIssue(
        String wrongForm,       // 简历中的写法
        String correctForm,     // 规范写法
        int line                // 所在行号（从 1 开始）
    ) {}

    /**
     * 可解释评分：单个维度的解释与证据
     */
    public record DimensionExplanation(
        String dimension,           // 维度标识：project/skillMatch/content/structure/expression
        int score,                  // 该维度得分（须与 ScoreDetail 一致）
        int maxScore,               // 该维度满分
        int impactOnTotal,          // 对总分的影响（满分 - 得分，正值表示失分）
        String explanation,         // 一句话解释为什么是这个分数
        List<Evidence> evidences    // 证据列表
    ) {}

    /**
     * 证据条目：带置信度状态
     */
    public record Evidence(
        String item,        // 证据内容（如：Java / Spring Boot / Redis）
        String status,      // 置信度：已确认 / 推测 / 缺失
        String note         // 补充说明（可为 null）
    ) {}

    /**
     * 最值得修改的优先行动
     */
    public record TopAction(
        int rank,               // 序号：1/2/3
        String title,           // 行动标题（祈使句）
        int estimatedGain,      // 预计提升分数（AI 估算）
        String reason,          // 为什么优先做这件事
        String relatedQuote     // 关联的简历原句（可为 null，用于定位对应条目）
    ) {}

    /**
     * 招聘方视角：模拟招聘官快速筛选
     */
    public record RecruiterView(
        String firstImpression,     // 第一印象（10 秒扫简历的感受）
        String verdict,             // 预判：通过 / 存疑 / 不通过
        List<String> concerns       // 招聘官的主要顾虑
    ) {}
}
