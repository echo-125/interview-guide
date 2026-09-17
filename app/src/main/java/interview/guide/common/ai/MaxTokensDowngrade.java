package interview.guide.common.ai;

import java.util.List;
import java.util.Locale;
import java.util.regex.Pattern;

/**
 * max_tokens 降档决策。
 *
 * <p><b>为什么需要</b>：各模型服务商的输出上限差异极大——有的支持 65536，
 * 有的只支持 4096；而 OpenAI 兼容接口在 {@code max_tokens} 超过上限时
 * 通常<b>直接返回 400 拒绝</b>（例如 "max_tokens is too large: 65536.
 * This model supports at most 16384"），而不是静默截断。
 *
 * <p>所以「把默认兜底值调大」与「兼容多平台」是冲突的：调大后小上限平台会直接失败，
 * 比截断更糟（会耗尽全部重试次数）。解决办法是遇到拒绝时逐级降档并记住可用值。
 */
public final class MaxTokensDowngrade {

    /**
     * 降档阶梯（严格降序）。
     * 取值覆盖主流服务商上限：65536 / 32768 / 16384 常见于新模型，
     * 8192 是较早的通用上限，4096 / 2048 用于更保守的服务端。
     */
    private static final int[] LADDER = {65536, 32768, 16384, 8192, 4096, 2048};

    /** 明确的「上限超限」短语，命中即判定为拒绝。 */
    private static final List<String> EXPLICIT_PHRASES = List.of(
        "max_tokens is too large",
        "max_completion_tokens is too large",
        "integer above maximum value",
        "maximum allowed number of output tokens",
        "exceeds the maximum",
        "exceed max_tokens",
        "too many tokens"
    );

    /** 参数名字样：必须与「超限」类词汇同时出现才判定，避免误伤无关错误。 */
    private static final List<String> PARAM_MARKERS = List.of(
        "max_tokens",
        "max_completion_tokens",
        "maxtokens",
        "max tokens"
    );

    /** 超限类词汇。 */
    private static final List<String> EXCEED_MARKERS = List.of(
        "too large",
        "exceed",
        "above the maximum",
        "above maximum",
        "greater than",
        "invalid"
    );

    /**
     * Anthropic 风格报错：{@code max_tokens: 65536 > 8192, which is the maximum allowed}。
     * 这类消息里 max_tokens 与数字之间隔着 "> N" 或 ":"，短语匹配覆盖不到，单独用正则。
     */
    private static final Pattern MAX_TOKENS_WITH_LIMIT = Pattern.compile(
        "max_?(completion_)?tokens\\D{0,20}\\d+\\s*>\\s*\\d+");

    /** 提取消息中的数字串。 */
    private static final Pattern NUMBER = Pattern.compile("\\d+");

    /**
     * 可信上限区间。
     *
     * 下限取 1024：真实模型的输出上限最小也在此之上（2048 / 4096 / 8192 …），
     * 而 HTTP 状态码不超过 599，据此可自然排除 {@code status 400} 这类噪声数字。
     * 上限取 100 万：超出任何现实模型的输出能力，多为请求 ID 之类的时间戳数字。
     *
     * 在区间内取「严格小于当前值」的最大数字：拒绝消息里通常会先出现请求值、
     * 再出现服务端上限（如 "max_tokens is too large: 65536. This model supports at most 16384"），
     * 取最大即取到上限 16384。
     */
    private static final long MIN_PLAUSIBLE_LIMIT = 1024;
    private static final long MAX_PLAUSIBLE_LIMIT = 1_000_000;

    private MaxTokensDowngrade() {
    }

    /**
     * 计算下一档 max_tokens。
     *
     * @param current 当前值，可为 null
     * @return 阶梯中第一个严格小于 {@code current} 的值；已到最低档或入参为 null 时返回 null
     */
    public static Integer next(Integer current) {
        if (current == null) {
            return null;
        }
        for (int candidate : LADDER) {
            if (candidate < current) {
                return candidate;
            }
        }
        return null;
    }

    /**
     * 判断异常是否为「max_tokens 超出服务端上限」导致的拒绝。
     *
     * 遍历整条 cause 链：HTTP 客户端通常把原始响应包在外层异常里。
     *
     * @param error 待判断异常，可为 null
     * @return true 表示应尝试降档
     */
    public static boolean isMaxTokensRejection(Throwable error) {
        // 先检查当前异常的消息，再前进到 cause：
        // 若先判自引用就 break，异常自身的消息会被漏掉。
        for (Throwable current = error; current != null; ) {
            String message = current.getMessage();
            if (message != null && !message.isBlank()
                && matchesRejection(message.toLowerCase(Locale.ROOT))) {
                return true;
            }
            Throwable cause = current.getCause();
            if (cause == current) {
                break;
            }
            current = cause;
        }
        return false;
    }

    /**
     * 计算下一次尝试的 max_tokens。
     *
     * 优先从错误信息里解析服务端声明的真实上限，直接跳到该值——
     * 否则 65536 遇到上限 8192 的服务端，要经过 32768、16384 两次无效往返（每次都是一轮 LLM 调用）。
     * 解析不出来时退回阶梯降档。
     *
     * @param current 当前失败的 max_tokens 值
     * @param error   触发降档的异常，可为 null
     * @return 下一个候选值；null 表示阶梯已用尽
     */
    public static Integer nextCandidate(Integer current, Throwable error) {
        Integer serverLimit = extractServerLimit(error, current);
        if (serverLimit != null) {
            return serverLimit;
        }
        return next(current);
    }

    /**
     * 从错误信息中解析服务端声明的 max_tokens 上限。
     *
     * 典型措辞：
     * <ul>
     *   <li>OpenAI：{@code max_tokens is too large: 65536. This model supports at most 16384}</li>
     *   <li>Anthropic：{@code max_tokens: 65536 > 8192, which is the maximum allowed}</li>
     * </ul>
     *
     * 取「消息中出现的、位于合法区间内且严格小于当前值」的最大整数：
     * 拒绝消息里的上限必然是那个较小的数字。解析结果不可信时返回 null 走阶梯降档。
     */
    static Integer extractServerLimit(Throwable error, Integer current) {
        if (current == null) {
            return null;
        }
        Integer best = null;
        for (Throwable t = error; t != null; ) {
            String message = t.getMessage();
            if (message != null && !message.isBlank()) {
                Integer candidate = extractLimitFromMessage(message, current);
                if (candidate != null && (best == null || candidate > best)) {
                    best = candidate;
                }
            }
            Throwable cause = t.getCause();
            if (cause == t) {
                break;
            }
            t = cause;
        }
        return best;
    }

    /**
     * 从单条消息中提取可信的上限数字。
     *
     * 取区间内「严格小于当前值」的最大数，从而跳过 HTTP 状态码等噪声，
     * 命中服务端声明的真实上限。
     */
    private static Integer extractLimitFromMessage(String message, int current) {
        var matcher = NUMBER.matcher(message);
        Integer best = null;
        while (matcher.find()) {
            try {
                long value = Long.parseLong(matcher.group());
                if (value >= MIN_PLAUSIBLE_LIMIT && value <= MAX_PLAUSIBLE_LIMIT && value < current) {
                    int asInt = (int) value;
                    if (best == null || asInt > best) {
                        best = asInt;
                    }
                }
            } catch (NumberFormatException ignored) {
                // 超长数字串，忽略
            }
        }
        return best;
    }

    private static boolean matchesRejection(String lowerMessage) {
        for (String phrase : EXPLICIT_PHRASES) {
            if (lowerMessage.contains(phrase)) {
                return true;
            }
        }
        // Anthropic 风格 "max_tokens: 65536 > 8192"
        if (MAX_TOKENS_WITH_LIMIT.matcher(lowerMessage).find()) {
            return true;
        }
        // 组合判定：提到 max_tokens 参数，且出现超限类词汇
        boolean mentionsParam = PARAM_MARKERS.stream().anyMatch(lowerMessage::contains);
        if (!mentionsParam) {
            return false;
        }
        return EXCEED_MARKERS.stream().anyMatch(lowerMessage::contains);
    }
}
