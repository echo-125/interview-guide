package interview.guide.modules.resume.service;

import interview.guide.modules.interview.model.ResumeAnalysisResponse.TermIssue;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("简历技术名词规范检查器")
class ResumeTermCheckerTest {

    private final ResumeTermChecker checker = new ResumeTermChecker();

    @Test
    @DisplayName("不规范的大小写与连写变体被检出，并给出规范写法与行号")
    void detectsWrongCasingWithLineNumber() {
        String text = "熟悉 mysql 和 redis\n掌握 springboot 框架";

        List<TermIssue> issues = checker.check(text);

        assertThat(issues).extracting(TermIssue::wrongForm)
            .contains("mysql", "redis", "springboot");
        assertThat(issues).filteredOn(i -> i.wrongForm().equals("mysql"))
            .singleElement()
            .satisfies(i -> {
                assertThat(i.correctForm()).isEqualTo("MySQL");
                assertThat(i.line()).isEqualTo(1);
            });
        assertThat(issues).filteredOn(i -> i.wrongForm().equals("springboot"))
            .singleElement()
            .satisfies(i -> {
                assertThat(i.correctForm()).isEqualTo("Spring Boot");
                assertThat(i.line()).isEqualTo(2);
            });
    }

    @Test
    @DisplayName("规范写法不会被误报")
    void skipsCanonicalForms() {
        String text = "熟练使用 MySQL、Redis 与 Spring Boot，了解 Kafka 与 MyBatis";

        assertThat(checker.check(text)).isEmpty();
    }

    @Test
    @DisplayName("长短重叠命中时只保留更长的匹配")
    void prefersLongerMatchOverlapped() {
        String text = "使用 spring boot 完成开发";

        List<TermIssue> issues = checker.check(text);

        assertThat(issues).extracting(TermIssue::wrongForm)
            .containsExactly("spring boot")
            .doesNotContain("spring");
    }

    @Test
    @DisplayName("单词边界防止误伤（github 不触发 git）")
    void respectsWordBoundaries() {
        String text = "代码托管在 github 上，使用 Git 管理";

        List<TermIssue> issues = checker.check(text);

        assertThat(issues).extracting(TermIssue::wrongForm).containsExactly("github");
    }

    @Test
    @DisplayName("同一写法在同一行去重，空文本返回空结果")
    void dedupesAndHandlesEmptyText() {
        assertThat(checker.check("使用 redis 和 redis 做缓存")).hasSize(1);
        assertThat(checker.check(null)).isEmpty();
        assertThat(checker.check("")).isEmpty();
    }
}
