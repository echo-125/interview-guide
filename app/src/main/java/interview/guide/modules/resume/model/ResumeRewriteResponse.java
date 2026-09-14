package interview.guide.modules.resume.model;

/**
 * AI 整篇重写简历的响应
 */
public record ResumeRewriteResponse(
    String rewrittenText,    // 重写后的完整简历纯文本
    String changeSummary     // 修改概述
) {
}
