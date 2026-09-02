package interview.guide.modules.resume.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * 发起 JD vs 简历匹配诊断请求
 */
public record ResumeJdAnalysisRequest(
    @NotBlank(message = "JD 内容不能为空")
    @Size(max = 20000, message = "JD 内容过长，请控制在 20000 字以内")
    String jdText,

    String llmProvider
) {
}
