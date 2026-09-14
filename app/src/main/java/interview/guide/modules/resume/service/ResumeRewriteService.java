package interview.guide.modules.resume.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.util.TextUtil;
import interview.guide.modules.interview.model.ResumeAnalysisResponse;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeRewriteResponse;
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
import java.util.Map;

/**
 * 简历 AI 整篇重写服务
 * 按需同步调用：基于原文与最新诊断结果生成优化后全文，不落库
 */
@Service
public class ResumeRewriteService {

    private static final Logger log = LoggerFactory.getLogger(ResumeRewriteService.class);

    /** 诊断摘要注入 prompt 的长度上限，保护上下文预算 */
    private static final int MAX_DIGEST_LENGTH = 6000;

    private final ResumePersistenceService resumePersistenceService;
    private final LlmProviderRegistry llmProviderRegistry;
    private final StructuredOutputInvoker structuredOutputInvoker;
    private final PromptTemplate systemPromptTemplate;
    private final PromptTemplate userPromptTemplate;
    private final BeanOutputConverter<RewriteDTO> outputConverter;

    // 中间DTO用于接收AI响应（包级可见以便单测构造）
    record RewriteDTO(String rewrittenText, String changeSummary) {}

    public ResumeRewriteService(
            ResumePersistenceService resumePersistenceService,
            LlmProviderRegistry llmProviderRegistry,
            StructuredOutputInvoker structuredOutputInvoker,
            ResumeRewriteProperties properties,
            ResourceLoader resourceLoader) throws IOException {
        this.resumePersistenceService = resumePersistenceService;
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
        this.outputConverter = new BeanOutputConverter<>(RewriteDTO.class);
    }

    /**
     * 基于简历原文与最新诊断结果重写整份简历
     *
     * @param resumeId    简历ID
     * @param llmProvider 使用的 Provider（空 = 跟随系统默认）
     * @return 重写结果
     */
    public ResumeRewriteResponse rewrite(Long resumeId, String llmProvider) {
        String provider = TextUtil.trimToNull(llmProvider);
        if (provider != null && !llmProviderRegistry.hasProvider(provider)) {
            throw new BusinessException(ErrorCode.BAD_REQUEST,
                "LLM Provider '" + provider + "' 不存在或未启用");
        }

        ResumeEntity resume = resumePersistenceService.findById(resumeId)
            .orElseThrow(() -> new BusinessException(ErrorCode.RESUME_NOT_FOUND));
        String resumeText = resume.getResumeText();
        if (!TextUtil.hasText(resumeText)) {
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历文本为空，无法重写");
        }

        String diagnosticDigest = resumePersistenceService.getLatestAnalysisAsDTO(resumeId)
            .map(this::buildDiagnosticDigest)
            .orElse("（暂无诊断数据，请仅优化表达，不要新增内容）");

        Map<String, Object> variables = new HashMap<>();
        variables.put("resumeText", resumeText);
        variables.put("diagnosticDigest", diagnosticDigest);

        String systemPrompt = systemPromptTemplate.render() + "\n\n" + outputConverter.getFormat();
        String userPrompt = userPromptTemplate.render(variables);

        try {
            ChatClient chatClient = llmProviderRegistry.getPlainChatClient(provider);
            RewriteDTO dto = structuredOutputInvoker.invoke(
                chatClient,
                systemPrompt,
                userPrompt,
                outputConverter,
                ErrorCode.RESUME_ANALYSIS_FAILED,
                "简历重写失败：",
                "简历重写",
                log
            );
            log.info("简历重写完成: resumeId={}, changeSummary长度={}", resumeId,
                dto.changeSummary() == null ? 0 : dto.changeSummary().length());
            return new ResumeRewriteResponse(dto.rewrittenText(), dto.changeSummary());
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("简历重写失败: resumeId={}", resumeId, e);
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历重写失败：" + e.getMessage());
        }
    }

    /**
     * 把最新诊断结果压缩成纯文本摘要，供重写 prompt 吸收
     */
    private String buildDiagnosticDigest(ResumeAnalysisResponse analysis) {
        StringBuilder sb = new StringBuilder();
        if (TextUtil.hasText(analysis.headline())) {
            sb.append("一句话结论：").append(analysis.headline()).append('\n');
        }
        if (analysis.topActions() != null && !analysis.topActions().isEmpty()) {
            sb.append("优先行动：\n");
            analysis.topActions().forEach(t ->
                sb.append("- ").append(t.title()).append("（").append(t.reason()).append("）\n"));
        }
        if (analysis.bulletAudits() != null && !analysis.bulletAudits().isEmpty()) {
            sb.append("逐条改写（原句 → 优化句）：\n");
            analysis.bulletAudits().forEach(b -> {
                if (TextUtil.hasText(b.quote()) && TextUtil.hasText(b.rewrite())) {
                    sb.append("- ").append(b.quote()).append(" → ").append(b.rewrite()).append('\n');
                }
            });
        }
        if (analysis.suggestions() != null && !analysis.suggestions().isEmpty()) {
            sb.append("改进建议：\n");
            analysis.suggestions().forEach(s -> {
                sb.append("- [").append(s.priority()).append("]").append(s.issue());
                if (TextUtil.hasText(s.recommendation())) {
                    sb.append("；建议：").append(s.recommendation());
                }
                sb.append('\n');
            });
        }

        String digest = sb.toString();
        if (digest.length() > MAX_DIGEST_LENGTH) {
            digest = digest.substring(0, MAX_DIGEST_LENGTH) + "\n（诊断摘要过长已截断）";
        }
        return digest;
    }
}
