package interview.guide.modules.resume.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.interview.model.ResumeAnalysisResponse;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.BulletAudit;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.DimensionExplanation;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.Evidence;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.RecruiterView;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.ScoreDetail;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.Suggestion;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.TermIssue;
import interview.guide.modules.interview.model.ResumeAnalysisResponse.TopAction;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.converter.BeanOutputConverter;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 简历评分服务
 * 使用Spring AI调用LLM对简历进行评分和建议
 */
@Service
public class ResumeGradingService {

    private static final Logger log = LoggerFactory.getLogger(ResumeGradingService.class);

    /** 各维度满分，与 prompts/resume-analysis-system.st 的 Scoring Rubrics 一致，合计 100 */
    private static final int MAX_PROJECT = 40;
    private static final int MAX_SKILL_MATCH = 20;
    private static final int MAX_CONTENT = 15;
    private static final int MAX_STRUCTURE = 15;
    private static final int MAX_EXPRESSION = 10;

    private final LlmProviderRegistry llmProviderRegistry;
    private final PromptTemplate systemPromptTemplate;
    private final PromptTemplate userPromptTemplate;
    private final BeanOutputConverter<ResumeAnalysisResponseDTO> outputConverter;
    private final StructuredOutputInvoker structuredOutputInvoker;
    private final ResumeTermChecker termChecker;

    // 中间DTO用于接收AI响应
    private record ResumeAnalysisResponseDTO(
        int overallScore,
        ScoreDetailDTO scoreDetail,
        String summary,
        List<String> strengths,
        List<SuggestionDTO> suggestions,
        List<BulletAuditDTO> bulletAudits,
        String headline,
        List<DimensionExplanationDTO> dimensionExplanations,
        List<TopActionDTO> topActions,
        List<String> risks,
        RecruiterViewDTO recruiterView
    ) {}

    private record ScoreDetailDTO(
        int contentScore,
        int structureScore,
        int skillMatchScore,
        int expressionScore,
        int projectScore
    ) {}

    private record SuggestionDTO(
        String category,
        String priority,
        String issue,
        String recommendation,
        String section,
        String quote,
        String rewrite,
        String impact
    ) {}

    private record BulletAuditDTO(
        String quote,
        List<String> problems,
        String rewrite
    ) {}

    private record DimensionExplanationDTO(
        String dimension,
        Integer score,
        Integer maxScore,
        Integer impactOnTotal,
        String explanation,
        List<EvidenceDTO> evidences
    ) {}

    private record EvidenceDTO(
        String item,
        String status,
        String note
    ) {}

    private record TopActionDTO(
        Integer rank,
        String title,
        Integer estimatedGain,
        String reason,
        String relatedQuote
    ) {}

    private record RecruiterViewDTO(
        String firstImpression,
        String verdict,
        List<String> concerns
    ) {}
    
    public ResumeGradingService(
            LlmProviderRegistry llmProviderRegistry,
            StructuredOutputInvoker structuredOutputInvoker,
            ResumeAnalysisProperties properties,
            ResourceLoader resourceLoader,
            ResumeTermChecker termChecker) throws IOException {
        this.llmProviderRegistry = llmProviderRegistry;
        this.structuredOutputInvoker = structuredOutputInvoker;
        this.termChecker = termChecker;
        this.systemPromptTemplate = new PromptTemplate(
            resourceLoader.getResource(properties.getSystemPromptPath())
                .getContentAsString(StandardCharsets.UTF_8)
        );
        this.userPromptTemplate = new PromptTemplate(
            resourceLoader.getResource(properties.getUserPromptPath())
                .getContentAsString(StandardCharsets.UTF_8)
        );
        this.outputConverter = new BeanOutputConverter<>(ResumeAnalysisResponseDTO.class);
    }
    
    /**
     * 分析简历并返回评分和建议（使用系统默认 Provider）
     *
     * @param resumeText 简历文本内容
     * @return 分析结果
     */
    public ResumeAnalysisResponse analyzeResume(String resumeText) {
        return analyzeResume(resumeText, null);
    }

    /**
     * 分析简历并返回评分和建议
     *
     * @param resumeText  简历文本内容
     * @param llmProvider 评分使用的 Provider（空 = 跟随系统默认）
     * @return 分析结果
     */
    public ResumeAnalysisResponse analyzeResume(String resumeText, String llmProvider) {
        log.info("开始分析简历，文本长度: {} 字符, provider: {}", resumeText.length(), llmProvider);

        try {
            // 加载系统提示词
            String systemPrompt = systemPromptTemplate.render();

            // 加载用户提示词并填充变量（简历文本按行编号，便于 AI 逐字引用原句）
            Map<String, Object> variables = new HashMap<>();
            variables.put("resumeText", numberLines(resumeText));
            String userPrompt = userPromptTemplate.render(variables);

            // 添加格式指令到系统提示词
            String systemPromptWithFormat = systemPrompt + "\n\n" + outputConverter.getFormat();

            // 调用AI
            ResumeAnalysisResponseDTO dto;
            try {
                ChatClient chatClient = llmProviderRegistry.getPlainChatClient(llmProvider);
                dto = structuredOutputInvoker.invoke(
                    chatClient,
                    systemPromptWithFormat,
                    userPrompt,
                    outputConverter,
                    ErrorCode.RESUME_ANALYSIS_FAILED,
                    "简历分析失败：",
                    "简历分析",
                    log
                );
                log.debug("AI响应解析成功: overallScore={}", dto.overallScore());
            } catch (BusinessException e) {
                // 业务异常原样抛出：StructuredOutputInvoker 已加过「简历分析失败：」前缀，
                // 此处再包一层会让用户看到「简历分析失败：简历分析失败：...」的重复前缀。
                log.error("简历分析AI调用失败: {}", e.getMessage(), e);
                throw e;
            } catch (Exception e) {
                log.error("简历分析AI调用失败: {}", e.getMessage(), e);
                throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历分析失败：" + e.getMessage());
            }

            // 转换为业务对象
            ResumeAnalysisResponse result = convertToResponse(dto, resumeText);
            log.info("简历分析完成，总分: {}", result.overallScore());

            return result;

        } catch (BusinessException e) {
            // 同上：保留原异常，避免第三层重复前缀
            log.error("简历分析失败: {}", e.getMessage(), e);
            throw e;
        } catch (Exception e) {
            log.error("简历分析失败: {}", e.getMessage(), e);
            // 失败必须显式抛出，让 Stream 消费者走 markFailed，避免 0 分结果被当作成功入库
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历分析失败：" + e.getMessage());
        }
    }
    
    /**
     * 转换DTO为业务对象（叠加 Java 侧确定性名词检查）
     */
    private ResumeAnalysisResponse convertToResponse(ResumeAnalysisResponseDTO dto, String originalText) {
        // 各维度先按评分细则收敛到合法区间：模型偶发给出超范围分数时，
        // 越界的分数会让后续「总分 vs 维度之和」的对账失去意义
        ScoreDetail scoreDetail = new ScoreDetail(
            clamp(dto.scoreDetail().contentScore(), MAX_CONTENT),
            clamp(dto.scoreDetail().structureScore(), MAX_STRUCTURE),
            clamp(dto.scoreDetail().skillMatchScore(), MAX_SKILL_MATCH),
            clamp(dto.scoreDetail().expressionScore(), MAX_EXPRESSION),
            clamp(dto.scoreDetail().projectScore(), MAX_PROJECT)
        );

        List<Suggestion> suggestions = dto.suggestions().stream()
            .map(s -> new Suggestion(s.category(), s.priority(), s.issue(), s.recommendation(),
                s.section(), s.quote(), s.rewrite(), s.impact()))
            .toList();

        List<BulletAudit> bulletAudits = dto.bulletAudits() == null ? List.of() : dto.bulletAudits().stream()
            .map(b -> new BulletAudit(b.quote(), b.problems() == null ? List.of() : b.problems(), b.rewrite()))
            .toList();

        List<TermIssue> termIssues = termChecker.check(originalText);

        List<DimensionExplanation> dimensionExplanations =
            reconcileDimensionExplanations(dto.dimensionExplanations(), scoreDetail);

        List<TopAction> topActions = dto.topActions() == null ? List.of() : dto.topActions().stream()
            .map(t -> new TopAction(t.rank() == null ? 0 : t.rank(), t.title(),
                t.estimatedGain() == null ? 0 : t.estimatedGain(), t.reason(), t.relatedQuote()))
            .toList();

        RecruiterView recruiterView = dto.recruiterView() == null ? null
            : new RecruiterView(dto.recruiterView().firstImpression(), dto.recruiterView().verdict(),
                dto.recruiterView().concerns() == null ? List.of() : dto.recruiterView().concerns());

        return new ResumeAnalysisResponse(
            reconcileOverallScore(dto.overallScore(), scoreDetail),
            scoreDetail,
            dto.summary(),
            dto.strengths(),
            suggestions,
            bulletAudits,
            termIssues,
            dto.headline(),
            dimensionExplanations,
            topActions,
            dto.risks(),
            recruiterView,
            originalText
        );
    }

    /**
     * 以评分细则（scoreDetail）为准校正总分。
     *
     * 维度满分合计正好 100，总分本应等于维度之和。但 overallScore 与五个维度分是模型
     * 分别输出的，模型自相矛盾的情况并不罕见；一旦不一致，页面顶部的总分与「优化后
     * 评分」面板（按维度之和计算）会出现两个不同的当前分。细则是对账的权威来源。
     */
    private int reconcileOverallScore(int reported, ScoreDetail scoreDetail) {
        int sum = scoreDetail.contentScore() + scoreDetail.structureScore()
            + scoreDetail.skillMatchScore() + scoreDetail.expressionScore()
            + scoreDetail.projectScore();
        if (reported != sum) {
            log.warn("AI 返回总分 {} 与维度之和 {} 不一致，以维度之和为准", reported, sum);
        }
        return clamp(sum, 100);
    }

    /**
     * 以评分细则为准校正维度解释中的 score / maxScore / impactOnTotal。
     *
     * Prompt 只是"要求"模型让二者一致，没有强制力。解释是对细则的说明而非独立事实，
     * 因此这里用细则覆盖解释，保证 impactOnTotal 恒等于「满分 − 得分」。
     * 无法识别的维度（模型输出了细则之外的 dimension）原样保留，不凭空造分。
     */
    private List<DimensionExplanation> reconcileDimensionExplanations(
        List<DimensionExplanationDTO> raw, ScoreDetail scoreDetail) {
        if (raw == null) {
            return List.of();
        }
        return raw.stream()
            .map(d -> {
                List<Evidence> evidences = d.evidences() == null ? List.of() : d.evidences().stream()
                    .map(e -> new Evidence(e.item(), e.status(), e.note()))
                    .toList();

                int maxScore = maxScoreOf(d.dimension());
                if (maxScore <= 0) {
                    return new DimensionExplanation(d.dimension(),
                        d.score() == null ? 0 : d.score(),
                        d.maxScore() == null ? 0 : d.maxScore(),
                        d.impactOnTotal() == null ? 0 : d.impactOnTotal(),
                        d.explanation(), evidences);
                }

                int score = scoreOf(d.dimension(), scoreDetail);
                return new DimensionExplanation(d.dimension(), score, maxScore,
                    maxScore - score, d.explanation(), evidences);
            })
            .toList();
    }

    private static int maxScoreOf(String dimension) {
        return switch (dimension == null ? "" : dimension) {
            case "project" -> MAX_PROJECT;
            case "skillMatch" -> MAX_SKILL_MATCH;
            case "content" -> MAX_CONTENT;
            case "structure" -> MAX_STRUCTURE;
            case "expression" -> MAX_EXPRESSION;
            default -> 0;
        };
    }

    private static int scoreOf(String dimension, ScoreDetail scoreDetail) {
        return switch (dimension == null ? "" : dimension) {
            case "project" -> scoreDetail.projectScore();
            case "skillMatch" -> scoreDetail.skillMatchScore();
            case "content" -> scoreDetail.contentScore();
            case "structure" -> scoreDetail.structureScore();
            case "expression" -> scoreDetail.expressionScore();
            default -> 0;
        };
    }

    private static int clamp(int value, int max) {
        return Math.max(0, Math.min(value, max));
    }

    /**
     * 按行给简历文本编号（1. 2. 3. ...），要求 AI 引用原句时逐字摘录、便于锚定
     */
    private String numberLines(String resumeText) {
        String[] lines = resumeText.split("\n", -1);
        StringBuilder numbered = new StringBuilder(resumeText.length() + lines.length * 4);
        for (int i = 0; i < lines.length; i++) {
            numbered.append(i + 1).append(". ").append(lines[i]);
            if (i < lines.length - 1) {
                numbered.append('\n');
            }
        }
        return numbered.toString();
    }
}
