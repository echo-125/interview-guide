package interview.guide.common.exception;

import java.io.IOException;
import java.net.ConnectException;
import java.net.NoRouteToHostException;
import java.net.SocketTimeoutException;
import java.net.UnknownHostException;
import java.util.function.Predicate;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 把异常翻译成「能直接展示给用户」的失败原因。
 *
 * <p>背景：异步任务失败后原先只落库一条固定文案（如「题目生成失败，请稍后重试」），
 * 真正的根因（例如本地向量服务没启动导致的 Connection refused）只能翻日志才能看到。
 * 本类把常见基础设施异常归类成中文提示并带上具体地址，让用户能自助排查。</p>
 *
 * <p>安全约定：只输出<b>固定文案 + 地址</b>，不透出异常原文里可能存在的账号、密钥、
 * SQL 或内部主机名；无法归类时返回 {@code null}，由调用方回退到通用文案。</p>
 */
public final class ErrorMessageResolver {

  /** 用户可见原因的最大长度（与 question_gen_error 列宽 500 一致）。 */
  public static final int MAX_USER_MESSAGE_LENGTH = 500;

  /** 从异常文案里提取 http(s)/ws(s) 地址。 */
  private static final Pattern URL_PATTERN =
      Pattern.compile("(?:https?|wss?)://[^\\s'\"）)]+", Pattern.CASE_INSENSITIVE);

  private static final String FAILED_TO_CONNECT = "failed to connect to ";

  private static final String VECTOR_ADVICE =
      "请到「设置 → 模型服务 → 向量」检查 Base URL、API Key 以及该服务是否已启动";

  private ErrorMessageResolver() {
  }

  /**
   * 解析异常链，返回可展示给用户的原因。
   *
   * @param error 业务异常或原始异常
   * @return 可读原因；无法归类时返回 {@code null}
   */
  public static String resolve(Throwable error) {
    if (error == null) {
      return null;
    }

    Throwable infrastructureCause = findFirst(error, ErrorMessageResolver::isInfrastructureError);
    if (infrastructureCause != null) {
      return describeInfrastructure(infrastructureCause, isEmbeddingRelated(error));
    }

    Throwable businessCause = findFirst(error, BusinessException.class::isInstance);
    if (businessCause instanceof BusinessException business) {
      String message = business.getMessage();
      return isMeaningful(message) ? truncate(message) : null;
    }

    if (findFirst(error, IOException.class::isInstance) != null) {
      return "外部服务连接异常，请稍后重试";
    }

    // 未归类的异常：返回单行化后的原始文案，比「请稍后重试」更有排查价值
    return sanitize(rootMessage(error), null);
  }

  private static String rootMessage(Throwable error) {
    Throwable root = error;
    int depth = 0;
    while (root.getCause() != null && root.getCause() != root && depth < 20) {
      root = root.getCause();
      depth++;
    }
    return root.getMessage();
  }

  /**
   * 兜底：解析不出具体原因时返回给定通用文案。
   *
   * @param fallback 通用文案
   * @param error    原始异常
   * @return 具体原因，或 {@code fallback}
   */
  public static String resolveOr(String fallback, Throwable error) {
    String resolved = resolve(error);
    return resolved != null ? resolved : fallback;
  }

  /**
   * 兜底 {@link #resolve(Throwable)}：没有异常对象、只有原始文案时的入口。
   *
   * @param rawMessage 原始文案（可能是异常 message）
   * @param fallback   通用文案
   * @return 单行、截断后的文案；为空时返回 {@code fallback}
   */
  public static String sanitize(String rawMessage, String fallback) {
    String normalized = truncate(rawMessage);
    return normalized == null || normalized.isBlank() ? fallback : normalized;
  }

  /**
   * 压成单行并截断，避免换行破坏前端提示排版、或超出数据库列宽。
   */
  public static String truncate(String text) {
    if (text == null) {
      return null;
    }
    String oneLine = text.replace('\r', ' ').replace('\n', ' ').replaceAll("\\s{2,}", " ").trim();
    if (oneLine.length() <= MAX_USER_MESSAGE_LENGTH) {
      return oneLine;
    }
    return oneLine.substring(0, MAX_USER_MESSAGE_LENGTH - 3) + "...";
  }

  private static String describeInfrastructure(Throwable cause, boolean embeddingRelated) {
    String url = extractUrl(cause);
    String where = url == null ? "" : " " + url;

    if (cause instanceof ConnectException) {
      // OkHttp 把目标写成 "Failed to connect to /127.0.0.1:9932"，端口信息只在 message 里
      String target = extractConnectTarget(cause);
      String targetText = target != null ? " " + target : where;
      return "无法连接外部服务" + targetText + "（连接被拒绝），"
          + (embeddingRelated ? VECTOR_ADVICE : "请确认该服务已启动");
    }
    if (cause instanceof SocketTimeoutException) {
      return "连接外部服务" + where + "超时，请检查网络或稍后重试";
    }
    if (cause instanceof UnknownHostException) {
      // UnknownHostException 的 message 只有主机名，没有 scheme 前缀
      String host = isMeaningful(cause.getMessage()) ? " " + cause.getMessage().trim() : where;
      return "无法解析外部服务域名" + host + "，请检查 Base URL 配置";
    }
    if (cause instanceof NoRouteToHostException) {
      return "无法路由到外部服务" + where + "，请检查网络配置";
    }
    if (belongsTo(cause, "PSQLException", "SQLException")) {
      return "数据库访问失败，请检查数据库连接与服务状态";
    }
    if (isRedis(cause)) {
      return "Redis 访问失败，请检查 Redis 服务状态";
    }
    if (isAiCallFailure(cause)) {
      return "调用大模型服务失败" + where + "，请到「设置 → 模型服务」检查该 Provider 的 Base URL、API Key 与额度";
    }
    return "外部服务连接异常，请稍后重试";
  }

  private static boolean isInfrastructureError(Throwable cause) {
    return cause instanceof ConnectException
        || cause instanceof SocketTimeoutException
        || cause instanceof UnknownHostException
        || cause instanceof NoRouteToHostException
        || belongsTo(cause, "PSQLException", "SQLException")
        || isRedis(cause)
        || isAiCallFailure(cause);
  }

  /**
   * 异常链里出现 Spring AI 的 Embedding 调用、或业务文案提到「向量」时，
   * 提示语应指向「模型服务 → 向量」配置，而不是泛泛的「服务未启动」。
   */
  private static boolean isEmbeddingRelated(Throwable error) {
    for (Throwable current = error; current != null; current = current.getCause()) {
      if (current.getCause() == current) {
        break;
      }
      String typeName = current.getClass().getName();
      if (typeName.contains("Embedding") || typeName.contains("EmbeddingModel")) {
        return true;
      }
      String message = current.getMessage();
      if (message != null && message.contains("向量")) {
        return true;
      }
    }
    return false;
  }

  private static boolean isAiCallFailure(Throwable cause) {
    String typeName = cause.getClass().getName();
    return typeName.startsWith("com.openai.")
        || typeName.startsWith("org.springframework.ai.openai.")
        || typeName.contains("NonTransientAiException");
  }

  private static boolean isRedis(Throwable cause) {
    if (!(cause instanceof IOException)) {
      return false;
    }
    String packageName = cause.getClass().getPackageName();
    return packageName.startsWith("org.redisson") || packageName.startsWith("io.lettuce");
  }

  private static boolean belongsTo(Throwable cause, String... simpleNames) {
    String actual = cause.getClass().getSimpleName();
    for (String expected : simpleNames) {
      if (expected.equals(actual)) {
        return true;
      }
    }
    return false;
  }

  private static String extractUrl(Throwable cause) {
    String message = cause.getMessage();
    if (message == null) {
      return null;
    }
    Matcher matcher = URL_PATTERN.matcher(message);
    return matcher.find() ? matcher.group() : null;
  }

  /**
   * 从 OkHttp「Failed to connect to /127.0.0.1:9932」这类文案里取出 host:port。
   */
  private static String extractConnectTarget(Throwable cause) {
    String message = cause.getMessage();
    if (message == null) {
      return null;
    }
    int marker = message.toLowerCase().indexOf(FAILED_TO_CONNECT);
    if (marker < 0) {
      return null;
    }
    String rest = message.substring(marker + FAILED_TO_CONNECT.length()).trim();
    int end = 0;
    while (end < rest.length() && !Character.isWhitespace(rest.charAt(end))) {
      end++;
    }
    return end == 0 ? null : rest.substring(0, end);
  }

  private static boolean isMeaningful(String message) {
    return message != null && !message.isBlank();
  }

  private static Throwable findFirst(Throwable error, Predicate<Throwable> matcher) {
    int depth = 0;
    for (Throwable current = error; current != null && depth < 20; current = current.getCause(), depth++) {
      if (current.getCause() == current) {
        break;
      }
      if (matcher.test(current)) {
        return current;
      }
    }
    return null;
  }
}
