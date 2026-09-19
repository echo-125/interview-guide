package interview.guide.modules.resume.service;

import interview.guide.common.ai.LlmProviderRegistry;
import interview.guide.common.ai.StructuredOutputInvoker;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.util.TextUtil;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeStructuredParseDTO;
import interview.guide.modules.resume.model.ResumeStructuredParseResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.converter.BeanOutputConverter;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 简历结构化解析（LLM）服务。
 *
 * 只做「从 resumeText 提取结构化事实」，不改写、不编造、不落库。
 * 复用 LlmProviderRegistry + StructuredOutputInvoker，不引入第二套 Provider。
 */
@Service
public class ResumeStructuredParseService {

    private static final Logger log = LoggerFactory.getLogger(ResumeStructuredParseService.class);

    /** 输入 resumeText 保护上限，防止超长输入拖垮上下文与 token 预算 */
    private static final int MAX_INPUT_CHARS = 12000;

    private final ResumePersistenceService resumePersistenceService;
    private final LlmProviderRegistry llmProviderRegistry;
    private final StructuredOutputInvoker structuredOutputInvoker;
    private final PromptTemplate systemPromptTemplate;
    private final PromptTemplate userPromptTemplate;
    private final BeanOutputConverter<ResumeStructuredParseDTO> outputConverter;

    public ResumeStructuredParseService(
            ResumePersistenceService resumePersistenceService,
            LlmProviderRegistry llmProviderRegistry,
            StructuredOutputInvoker structuredOutputInvoker,
            ResourceLoader resourceLoader) throws IOException {
        this.resumePersistenceService = resumePersistenceService;
        this.llmProviderRegistry = llmProviderRegistry;
        this.structuredOutputInvoker = structuredOutputInvoker;
        this.systemPromptTemplate = new PromptTemplate(
            resourceLoader.getResource("classpath:prompts/resume-structure-system.st")
                .getContentAsString(StandardCharsets.UTF_8)
        );
        this.userPromptTemplate = new PromptTemplate(
            resourceLoader.getResource("classpath:prompts/resume-structure-user.st")
                .getContentAsString(StandardCharsets.UTF_8)
        );
        this.outputConverter = new BeanOutputConverter<>(ResumeStructuredParseDTO.class);
    }

    /**
     * LLM 结构化解析简历原文。失败抛 BusinessException，由前端回退到规则解析。
     */
    public ResumeStructuredParseResponse parse(Long resumeId, String llmProvider) {
        String provider = TextUtil.trimToNull(llmProvider);
        if (provider != null && !llmProviderRegistry.hasProvider(provider)) {
            throw new BusinessException(ErrorCode.BAD_REQUEST, "LLM Provider '" + provider + "' 不存在或未启用");
        }

        ResumeEntity resume = resumePersistenceService.findById(resumeId)
            .orElseThrow(() -> new BusinessException(ErrorCode.RESUME_NOT_FOUND));
        String resumeText = resume.getResumeText();
        if (!TextUtil.hasText(resumeText)) {
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历文本为空，无法结构化解析");
        }

        List<String> warnings = new ArrayList<>();
        String input = resumeText.trim();
        if (input.length() > MAX_INPUT_CHARS) {
            input = input.substring(0, MAX_INPUT_CHARS);
            warnings.add("原文过长已截断（取前 " + MAX_INPUT_CHARS + " 字）");
        }
        int sourceChars = stripWhitespace(input).length();

        Map<String, Object> variables = new HashMap<>();
        variables.put("resumeText", input);

        String systemPrompt = systemPromptTemplate.render() + "\n\n" + outputConverter.getFormat();
        String userPrompt = userPromptTemplate.render(variables);

        try {
            ChatClient chatClient = llmProviderRegistry.getPlainChatClient(provider);
            ResumeStructuredParseDTO raw = structuredOutputInvoker.invoke(
                chatClient,
                systemPrompt,
                userPrompt,
                outputConverter,
                ErrorCode.RESUME_ANALYSIS_FAILED,
                "简历结构化解析失败：",
                "简历结构化解析",
                log
            );
            ResumeStructuredParseDTO normalized = normalize(raw);
            if (isEmptyDoc(normalized)) {
                throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "AI 未能解析出任何结构化内容");
            }

            // 内容完整性检查：structuredChars 基于规整后的文档
            int structuredChars = Math.min(sourceChars, stripWhitespace(flattenToText(normalized)).length());
            int unparsedChars = Math.max(0, sourceChars - structuredChars);
            if (unparsedChars > sourceChars * 0.5) {
                warnings.add("大量原文未能进入结构化字段（约 " + unparsedChars + " 字），已归入 customSections");
            }

            double confidence = Math.max(0, Math.min(0.98, 0.9 - warnings.size() * 0.03));
            log.info("简历结构化解析完成: resumeId={}, sourceChars={}, warnings={}",
                resumeId, sourceChars, warnings.size());
            return new ResumeStructuredParseResponse(
                normalized,
                new ResumeStructuredParseResponse.ResumeStructuredParseDiagnostics(
                    "llm", confidence, warnings, sourceChars, structuredChars, unparsedChars
                )
            );
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("简历结构化解析失败: resumeId={}", resumeId, e);
            throw new BusinessException(ErrorCode.RESUME_ANALYSIS_FAILED, "简历结构化解析失败：" + e.getMessage());
        }
    }

    /**
     * 规整：把 LLM 可能返回的 null 字段/数组置为空，保证前端拿到稳定的结构。
     */
    static ResumeStructuredParseDTO normalize(ResumeStructuredParseDTO dto) {
        if (dto == null) return new ResumeStructuredParseDTO(
            new ResumeStructuredParseDTO.BasicsDTO("", "", "", "", "" , List.of()), "", List.of(),
            List.of(), List.of(), List.of(), List.of(), List.of(), List.of(), List.of());
        ResumeStructuredParseDTO.BasicsDTO b = dto.basics() != null ? dto.basics() :
            new ResumeStructuredParseDTO.BasicsDTO("", "", "", "", "", List.of());
        return new ResumeStructuredParseDTO(
            new ResumeStructuredParseDTO.BasicsDTO(
                nz(b.name()), nz(b.headline()), nz(b.email()), nz(b.phone()), nz(b.location()),
                b.links() != null ? b.links() : List.of()),
            nz(dto.summary()),
            safe(dto.skills()),
            safe(dto.experience()),
            safe(dto.projects()),
            safe(dto.education()),
            safe(dto.certifications()),
            safe(dto.awards()),
            safe(dto.languages()),
            safe(dto.customSections())
        );
    }

    static boolean isEmptyDoc(ResumeStructuredParseDTO dto) {
        if (dto == null) return true;
        ResumeStructuredParseDTO.BasicsDTO b = dto.basics();
        boolean basicsEmpty = b == null || (
            isBlank(b.name()) && isBlank(b.headline()) && isBlank(b.email()) && isBlank(b.phone()) && isBlank(b.location()));
        return basicsEmpty && isBlank(dto.summary())
            && listEmpty(dto.skills()) && listEmpty(dto.experience()) && listEmpty(dto.projects())
            && listEmpty(dto.education()) && listEmpty(dto.certifications()) && listEmpty(dto.languages())
            && listEmpty(dto.customSections());
    }

    /** 把规范化文档拍平成纯文本（用于 coverage 估算） */
    static String flattenToText(ResumeStructuredParseDTO dto) {
        ResumeStructuredParseDTO n = normalize(dto);
        java.util.List<String> parts = new ArrayList<>();
        ResumeStructuredParseDTO.BasicsDTO b = n.basics();
        if (b != null) {
            parts.addAll(List.of(b.name(), b.headline(), b.email(), b.phone(), b.location()));
            if (b.links() != null) parts.addAll(b.links());
        }
        if (n.summary() != null && !n.summary().isBlank()) parts.add(n.summary());
        appendSkills(parts, n.skills());
        appendExperiences(parts, n.experience());
        appendProjects(parts, n.projects());
        appendEducation(parts, n.education());
        if (n.certifications() != null) n.certifications().forEach(c -> parts.add(c.name()));
        if (n.awards() != null) n.awards().forEach(a -> parts.add(a.title()));
        if (n.languages() != null) n.languages().forEach(l -> parts.add(l.name()));
        if (n.customSections() != null) n.customSections().forEach(cs -> {
            if (cs.title() != null) parts.add(cs.title());
            if (cs.blocks() != null) cs.blocks().forEach(bl -> parts.add(bl.text()));
        });
        return parts.stream().filter(p -> p != null && !p.isBlank()).collect(java.util.stream.Collectors.joining("\n"));
    }

    private static void appendSkills(List<String> parts, List<ResumeStructuredParseDTO.SkillDTO> skills) {
        if (skills == null) return;
        skills.forEach(s -> { if (s.name() != null) parts.add(s.name()); if (s.items() != null) parts.addAll(s.items()); });
    }
    private static void appendExperiences(List<String> parts, List<ResumeStructuredParseDTO.ExperienceDTO> list) {
        if (list == null) return;
        list.forEach(e -> {
            parts.add(e.company());
            parts.add(e.title());
            parts.add(nz(e.startDate()));
            parts.add(nz(e.endDate()));
            if (e.description() != null) parts.add(e.description());
            if (e.bullets() != null) e.bullets().forEach(bl -> parts.add(nz(bl.text())));
        });
    }
    private static void appendProjects(List<String> parts, List<ResumeStructuredParseDTO.ProjectDTO> list) {
        if (list == null) return;
        list.forEach(p -> {
            parts.add(p.name());
            parts.add(nz(p.role()));
            if (p.technologies() != null) parts.addAll(p.technologies());
            if (p.description() != null) parts.add(p.description());
            if (p.bullets() != null) p.bullets().forEach(bl -> parts.add(nz(bl.text())));
        });
    }
    private static void appendEducation(List<String> parts, List<ResumeStructuredParseDTO.EducationDTO> list) {
        if (list == null) return;
        list.forEach(e -> {
            parts.add(nz(e.school()));
            parts.add(nz(e.degree()));
            parts.add(nz(e.major()));
        });
    }

    private static String stripWhitespace(String s) {
        return s == null ? "" : s.replaceAll("\\s+", "");
    }
    private static String nz(String s) { return s == null ? "" : s.trim(); }
    private static boolean isBlank(String s) { return s == null || s.isBlank(); }
    private static <T> boolean listEmpty(List<T> list) { return list == null || list.isEmpty(); }
    private static <T> List<T> safe(List<T> list) { return list != null ? list : List.of(); }
}