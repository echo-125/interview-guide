package interview.guide.modules.interview.model;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

/**
 * 提交/暂存答案的请求体（sessionId 由路径变量提供）。
 * answer 不做非空校验：暂存接口历史上允许空答案，保持行为不变。
 */
public record AnswerBodyRequest(
    @NotNull(message = "问题索引不能为空")
    @Min(value = 0, message = "问题索引无效")
    Integer questionIndex,

    String answer
) {}
