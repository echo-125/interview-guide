package interview.guide.common.ai;

import java.util.List;
import java.util.Locale;
import java.util.regex.Pattern;

/**
 * AI 调用异常分类。
 *
 * 为什么要分类：限流（429）与「模型输出不是合法 JSON」是两类完全不同的失败。
 * <ul>
 *   <li>限流：服务端配额窗口未恢复，正确策略是等待后重发<b>同一提示词</b>；</li>
 *   <li>解析失败：模型输出格式不对，正确策略是注入修复提示词重试。</li>
 * </ul>
 * 此前两者被一视同仁地消耗重试额度并立即重发，导致限流场景必然连败。
 */
public final class AiErrorClassifier {

    /**
     * 独立的 HTTP 429 匹配。
     * 用词边界而非 contains，避免异常信息里恰好出现 "429" 数字片段时误判。
     */
    private static final Pattern HTTP_429 = Pattern.compile("\\b429\\b");

    /**
     * 限流/配额特征词（小写匹配）。出现任一即认为是限流类错误。
     */
    private static final List<String> RATE_LIMIT_MARKERS = List.of(
        "too many requests",
        "rate limit",
        "rate_limit",
        "ratelimit",
        "tpm/rpm",
        "exceeds tpm",
        "exceeds rpm",
        "quota exceeded",
        "insufficient_quota",
        "throttling"
    );

    private AiErrorClassifier() {
    }

    /**
     * 判断异常是否为限流/配额类错误。
     *
     * 会遍历整条 cause 链：Spring AI 等框架常把原始 HTTP 错误包在外层异常里，
     * 只看顶层 message 会漏判。
     *
     * @param error 待判断的异常，可为 null
     * @return true 表示限流/配额类错误
     */
    public static boolean isRateLimited(Throwable error) {
        for (Throwable current = error; current != null; current = current.getCause()) {
            // 防御异常链自引用导致死循环
            if (current.getCause() == current) {
                break;
            }
            String message = current.getMessage();
            if (message == null || message.isBlank()) {
                continue;
            }
            String lower = message.toLowerCase(Locale.ROOT);
            if (HTTP_429.matcher(lower).find()) {
                return true;
            }
            for (String marker : RATE_LIMIT_MARKERS) {
                if (lower.contains(marker)) {
                    return true;
                }
            }
        }
        return false;
    }
}
