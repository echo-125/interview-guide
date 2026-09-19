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
        int unparsedChars
    ) {}
}