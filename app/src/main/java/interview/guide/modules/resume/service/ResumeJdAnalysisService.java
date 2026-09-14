package interview.guide.modules.resume.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse.SkillGap;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse.Weakness;
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
 * JD vs 简历匹配诊断服务
 * 使用 LLM 对比简历文本与 JD 文本，输出匹配度总分、技能缺口、薄弱点与补强建议
 */
@Service
public class ResumeJdAnalysisService {

    private static final Logger log = LoggerFactory.getLogger(ResumeJdAnalysisService.class);

    private final LlmProviderRegistry llmProviderRegistry;
    private final PromptTemplate systemPromptTemplate;
    private final PromptTemplate userPromptTemplate;
    private final BeanOutputConverter<JdAnalysisResponseDTO> outputConverter;
    private final StructuredOutputInvoker structuredOutputInvoker;

    // 中间DTO用于接收AI响应（包级可见以便单测构造）
    record JdAnalysisResponseDTO(
        int matchScore,
        String summary,
        List<SkillGapDTO> skillGaps,
        List<WeaknessDTO> weaknesses,
        List<String> recommendations
    ) {}

    record SkillGapDTO(
        String gapSkill,
        String jdRequirement,
        String resumeEvidence,
        String severity,
        String status
    ) {}

    record WeaknessDTO(
        String area,
        String description,
        String advice
    ) {}

    public ResumeJdAnalysisService(
            LlmProviderRegistry llmProviderRegistry,
            StructuredOutputInvoker structuredOutputInvoker,
            ResumeJdAnalysisProperties properties,
            ResourceLoader resourceLoader) throws IOException {
        this.llmProviderRegistry = llmProviderRegistry;
        this.structuredOutputInvoker = structuredOutputInvoker;
        this.systemPromptTemplate = new PromptTemplate(
            resourceLoader.getResource(properties.getSystemPromptPath())
                .getContentAsString(StandardCharsets.UTF_8)
        );
        this.userPromptTemplate = new PromptTemplate(
            resourceLoader.getResource(properties.getUserPromptPath())
                .getContentAsString(StandardCharsets.UTF_8)
        );
        this.outputConverter = new BeanOutputConverter<>(JdAnalysisResponseDTO.class);
    }

    /**
     * 对比简历与 JD，输出匹配度诊断
     *
     * @param resumeText  简历文本
     * @param jdText      目标岗位 JD 文本
     * @param llmProvider 分析使用的 Provider（空 = 跟随系统默认）
     */
    public ResumeJdAnalysisResponse analyze(String resumeText, String jdText, String llmProvider) {
        log.info("开始 JD 匹配分析，简历长度: {} 字符, JD 长度: {} 字符, provider: {}",
            resumeText.length(), jdText.length(), llmProvider);

        try {
            Map<String, Object> variables = new HashMap<>();
            variables.put("resumeText", resumeText);
            variables.put("jdText", jdText);
            String userPrompt = userPromptTemplate.render(variables);

            String systemPromptWithFormat = systemPromptTemplate.render() + "\n\n" + outputConverter.getFormat();

            JdAnalysisResponseDTO dto;
            try {
                ChatClient chatClient = llmProviderRegistry.getPlainChatClient(llmProvider);
                dto = structuredOutputInvoker.invoke(
                    chatClient,
                    systemPromptWithFormat,
                    userPrompt,
                    outputConverter,
                    ErrorCode.RESUME_JD_ANALYSIS_FAILED,
                    "JD 匹配分析失败：",
                    "JD 匹配分析",
                    log
                );
                log.debug("AI响应解析成功: matchScore={}", dto.matchScore());
            } catch (Exception e) {
                log.error("JD 匹配分析AI调用失败: {}", e.getMessage(), e);
                throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED, "JD 匹配分析失败：" + e.getMessage());
            }

            ResumeJdAnalysisResponse result = convertToResponse(dto);
            log.info("JD 匹配分析完成，匹配度: {}", result.matchScore());
            return result;

        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("JD 匹配分析失败: {}", e.getMessage(), e);
            // 失败必须显式抛出，让 Stream 消费者走 markFailed，避免空结果被当作成功入库
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED, "JD 匹配分析失败：" + e.getMessage());
        }
    }

    private ResumeJdAnalysisResponse convertToResponse(JdAnalysisResponseDTO dto) {
        List<SkillGap> skillGaps = dto.skillGaps() == null ? List.of() : dto.skillGaps().stream()
            .map(g -> new SkillGap(g.gapSkill(), g.jdRequirement(), g.resumeEvidence(), g.severity(), g.status()))
            .toList();

        List<Weakness> weaknesses = dto.weaknesses() == null ? List.of() : dto.weaknesses().stream()
            .map(w -> new Weakness(w.area(), w.description(), w.advice()))
            .toList();

        List<String> recommendations = dto.recommendations() == null ? List.of() : dto.recommendations();

        return new ResumeJdAnalysisResponse(
            null,
            null,
            null,
            dto.matchScore(),
            dto.summary(),
            skillGaps,
            weaknesses,
            recommendations,
            null,
            null,
            null
        );
    }
}
