package interview.guide.modules.resume.model;

import java.util.List;

/** 结构化解析的返回体：document + diagnostics */
public record ResumeStructuredParseResponse(
    ResumeStructuredParseDTO document,
    ResumeStructuredParseDiagnostics diagnostics
) {
    public record ResumeStructuredParseDiagnostics(
        String parser,
        double confidence,
        List<String> warnings,
        int sourceChars,
        int structuredChars,
        int unparsedChars,
        /** 行级核对未归档的原文片段清单（L行号: 前80字符），空 = 全部行均已归档 */
        List<String> unmappedLines,
        /** 原文是否因超过单次解析上限被截断 */
        boolean truncated
    ) {}
}