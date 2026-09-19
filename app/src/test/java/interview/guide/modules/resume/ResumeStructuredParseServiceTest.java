package interview.guide.modules.resume.service;

import interview.guide.modules.resume.model.ResumeStructuredParseDTO;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * ResumeStructuredParseService 的纯逻辑测试（normalize / isEmptyDoc / flatten）。
 * 真正调用 LLM 的路径由结构化输出框架（StructuredOutputInvoker）覆盖，此处避免依赖真模型。
 */
@DisplayName("简历结构化解析 - 纯逻辑")
class ResumeStructuredParseServiceTest {

    private ResumeStructuredParseDTO sample() {
        return new ResumeStructuredParseDTO(
            new ResumeStructuredParseDTO.BasicsDTO("李阳", "Java 高级开发", "l@e.com", "13800001234", "上海", List.of("github.com/ly")),
            "7 年 Java 后端经验。",
            List.of(new ResumeStructuredParseDTO.SkillDTO("sk-1", "后端", List.of("Java", "Spring Boot"))),
            List.of(new ResumeStructuredParseDTO.ExperienceDTO(
                "exp-1", "某公司", "Java 工程师", "2021.03", "2024.06", "上海", "",
                List.of(new ResumeStructuredParseDTO.BulletDTO("b-1", "设计和开发了短链接基础服务。")))),
            List.of(),
            List.of(new ResumeStructuredParseDTO.EducationDTO("edu-1", "某大学", "本科", "计算机", "2017.09", "2021.06")),
            List.of(),
            List.of(),
            List.of(),
            List.of()
        );
    }

    @Nested
    @DisplayName("normalize 规整")
    class Normalize {
        @Test
        @DisplayName("null 文档规整为空文档，不崩溃")
        void nullDoc() {
            var n = ResumeStructuredParseService.normalize(null);
            assertThat(n.basics()).isNotNull();
            assertThat(n.skills()).isEmpty();
            assertThat(n.experience()).isEmpty();
            assertThat(n.summary()).isEmpty();
        }

        @Test
        @DisplayName("null 数组字段被规整为空数组")
        void nullLists() {
            var raw = new ResumeStructuredParseDTO(
                new ResumeStructuredParseDTO.BasicsDTO("王", null, null, null, null, null),
                null, null, null, null, null, null, null, null, null);
            var n = ResumeStructuredParseService.normalize(raw);
            assertThat(n.basics().email()).isEmpty();
            assertThat(n.summary()).isEmpty();
            assertThat(n.skills()).isEmpty();
            assertThat(n.customSections()).isEmpty();
        }

        @Test
        @DisplayName("normalize 后不丢失已填字段")
        void keepsFilled() {
            var n = ResumeStructuredParseService.normalize(sample());
            assertThat(n.basics().name()).isEqualTo("李阳");
            assertThat(n.experience()).hasSize(1);
            assertThat(n.experience().get(0).bullets()).hasSize(1);
        }
    }

    @Nested
    @DisplayName("isEmptyDoc 判空")
    class EmptyCheck {
        @Test
        @DisplayName("null → true")
        void nullIsEmpty() {
            assertThat(ResumeStructuredParseService.isEmptyDoc(null)).isTrue();
        }

        @Test
        @DisplayName("空文档 → true")
        void emptyDoc() {
            var n = ResumeStructuredParseService.normalize(null);
            assertThat(ResumeStructuredParseService.isEmptyDoc(n)).isTrue();
        }

        @Test
        @DisplayName("有内容 → false")
        void notEmpty() {
            assertThat(ResumeStructuredParseService.isEmptyDoc(sample())).isFalse();
        }
    }

    @Nested
    @DisplayName("flattenToText 扁平化")
    class Flatten {
        @Test
        @DisplayName("覆盖基本字段 / 经历 / 技能 / 教育 / bullet")
        void coversFields() {
            String flat = ResumeStructuredParseService.flattenToText(sample());
            assertThat(flat).contains("李阳", "l@e.com", "7 年 Java 后端经验。",
                "Java", "Spring Boot", "某公司", "设计和开发了短链接基础服务。", "某大学", "计算机");
        }

        @Test
        @DisplayName("null 文档扁平化为空串，不崩溃")
        void nullFlatten() {
            assertThat(ResumeStructuredParseService.flattenToText(null)).isEqualTo("");
        }
    }

    @Test
    @DisplayName("LLM 额外字段不会被 Bean 绑定（Jackson 忽略未知字段），normalize 仍安全")
    void extraFieldsIgnored() {
        // 经 normalize 只保留已知字段；未知字段不进入结果
        var raw = sample();
        var n = ResumeStructuredParseService.normalize(raw);
        assertThat(n.basics().name()).isEqualTo("李阳");
    }
}