package interview.guide.infrastructure.file;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;

import java.nio.charset.StandardCharsets;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * ContentTypeDetectionService 测试类
 * 验证 Tika 对 Markdown 等格式的 MIME 检测结果，
 * 确保简历上传白名单配置与实际检测值一致
 */
@DisplayName("内容类型检测服务测试")
class ContentTypeDetectionServiceTest {

    private final ContentTypeDetectionService detectionService = new ContentTypeDetectionService();

    @Test
    @DisplayName("检测 .md 文件为 Markdown MIME 类型")
    void detectMarkdownFile() {
        // Given: 与真实简历格式一致的 Markdown 内容
        String content = """
            # 个人简历

            ## 基本信息
            - 姓名：李四
            - 邮箱：lisi@example.com

            ## 工作经验
            2020-2023 某公司 - 高级工程师
            """;
        MockMultipartFile file = new MockMultipartFile(
            "file",
            "Java高级开发 - 脱敏.md",
            "text/markdown",
            content.getBytes(StandardCharsets.UTF_8)
        );

        // When
        String contentType = detectionService.detectContentType(file);

        // Then: Tika 应识别为 Markdown 相关 MIME，否则上传白名单会拦截
        assertNotNull(contentType);
        assertTrue(contentType.toLowerCase().contains("markdown"),
            "Tika 应将 .md 检测为 Markdown MIME，实际: " + contentType);
    }

    @Test
    @DisplayName("检测 .markdown 扩展名文件为 Markdown MIME 类型")
    void detectMarkdownExtensionFile() {
        // Given
        String content = "# 个人简历\n\n- 姓名：王五\n";
        MockMultipartFile file = new MockMultipartFile(
            "file",
            "resume.markdown",
            "text/markdown",
            content.getBytes(StandardCharsets.UTF_8)
        );

        // When
        String contentType = detectionService.detectContentType(file);

        // Then
        assertNotNull(contentType);
        assertTrue(contentType.toLowerCase().contains("markdown"),
            "Tika 应将 .markdown 检测为 Markdown MIME，实际: " + contentType);
    }
}
