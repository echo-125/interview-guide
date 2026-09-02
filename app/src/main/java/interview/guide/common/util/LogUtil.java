package interview.guide.common.util;

/**
 * 日志脱敏工具：统一截断/脱敏用户敏感文本，避免完整内容进入日志。
 */
public final class LogUtil {

  private LogUtil() {}

  /** 默认截断长度 */
  private static final int DEFAULT_MAX = 100;

  /**
   * 截断文本，仅保留前 max 字符，避免敏感内容完整落日志。
   */
  public static String abbreviate(String text, int max) {
    if (text == null) {
      return "null";
    }
    String normalized = text.replaceAll("\\s+", " ").trim();
    int limit = max > 0 ? max : DEFAULT_MAX;
    return normalized.length() <= limit ? normalized : normalized.substring(0, limit) + "...";
  }

  /**
   * 截断文本（默认 100 字符）。
   */
  public static String abbreviate(String text) {
    return abbreviate(text, DEFAULT_MAX);
  }
}
