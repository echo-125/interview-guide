package interview.guide.modules.resume.model;

import java.util.List;

/**
 * LLM 结构化解析的目标 DTO（与前端 ResumeDocument 对齐）。
 *
 * 只承载结构化事实，不含任何字体/字号/颜色等视觉字段。
 * 作为 StructuredOutputInvoker + BeanOutputConverter 的输出目标。
 */
public record ResumeStructuredParseDTO(
    BasicsDTO basics,
    String summary,
    List<SkillDTO> skills,
    List<ExperienceDTO> experience,
    List<ProjectDTO> projects,
    List<EducationDTO> education,
    List<CertificationDTO> certifications,
    List<AwardDTO> awards,
    List<LanguageDTO> languages,
    List<CustomSectionDTO> customSections
) {
    public record BasicsDTO(String name, String headline, String email, String phone, String location, List<String> links) {}
    public record SkillDTO(String id, String name, List<String> items) {}
    public record BulletDTO(String id, String text) {}
    public record ExperienceDTO(
        String id, String company, String title, String startDate, String endDate,
        String location, String description, List<BulletDTO> bullets
    ) {}
    public record ProjectDTO(
        String id, String name, String role, String startDate, String endDate,
        List<String> technologies, String description, List<BulletDTO> bullets
    ) {}
    public record EducationDTO(String id, String school, String degree, String major, String startDate, String endDate) {}
    public record CertificationDTO(String id, String name, String issuer, String date) {}
    public record AwardDTO(String id, String title, String date, String description) {}
    public record LanguageDTO(String id, String name, String level) {}
    public record BlockDTO(String id, String type, String text) {}
    public record CustomSectionDTO(String id, String title, List<BlockDTO> blocks) {}
}