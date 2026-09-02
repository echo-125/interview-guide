package interview.guide.common.ai;

import com.openai.client.OpenAIClient;
import com.openai.client.OpenAIClientImpl;
import com.openai.core.ClientOptions;
import com.openai.core.Timeout;
import com.openai.credential.BearerTokenCredential;
import okhttp3.Interceptor;
import okhttp3.Response;
import org.springframework.ai.openai.http.okhttp.SpringAiOpenAiHttpClient;

import java.io.IOException;
import java.time.Duration;
import java.util.regex.Pattern;

public final class ApiPathResolver {

  private static final int DEFAULT_CONNECT_TIMEOUT = 10000;
  private static final int DEFAULT_READ_TIMEOUT = 300000;

  private static final Pattern TRAILING_VERSION = Pattern.compile("/v\\d+[a-zA-Z0-9]*$");

  private ApiPathResolver() {}

  public static OpenAIClient buildOpenAiClient(String baseUrl, String apiKey) {
    return buildOpenAiClient(baseUrl, apiKey, DEFAULT_CONNECT_TIMEOUT, DEFAULT_READ_TIMEOUT);
  }

  /**
   * 构造 OpenAI 兼容客户端。入口校验 baseUrl 防 SSRF，并通过 OkHttp Interceptor
   * 在每个请求发出前对 host 做实时 DNS 校验，防止 DNS rebinding。
   */
  public static OpenAIClient buildOpenAiClient(String baseUrl, String apiKey,
      int connectTimeout, int readTimeout) {
    UrlAccessGuard.assertExternalUrl(baseUrl);
    String resolvedBaseUrl = resolveVersionedBaseUrl(baseUrl);
    Timeout timeout = Timeout.builder()
        .connect(Duration.ofMillis(connectTimeout))
        .read(Duration.ofMillis(readTimeout))
        .build();
    ClientOptions options = ClientOptions.Companion.builder()
        .apiKey(apiKey)
        .credential(BearerTokenCredential.create(apiKey))
        .baseUrl(resolvedBaseUrl)
        .timeout(timeout)
        .httpClient(SpringAiOpenAiHttpClient.builder()
            .timeout(timeout)
            .interceptor(ssrfGuardInterceptor())
            .build())
        .build();
    return new OpenAIClientImpl(options);
  }

  /**
   * 在每个请求发出前对目标 host 做实时 DNS 校验，防止「入口校验后 DNS 再次解析到内网」的
   * DNS rebinding 窗口。校验逻辑与 {@link UrlAccessGuard#guardDns()} 一致。
   */
  private static Interceptor ssrfGuardInterceptor() {
    okhttp3.Dns guardedDns = UrlAccessGuard.guardDns();
    return new Interceptor() {
      @Override
      public Response intercept(Chain chain) throws IOException {
        okhttp3.Request request = chain.request();
        if (request.url().host() != null) {
          try {
            guardedDns.lookup(request.url().host());
          } catch (IOException e) {
            throw new IOException("SSRF 防护：拒绝访问非公网地址: " + request.url().host(), e);
          }
        }
        return chain.proceed(request);
      }
    };
  }

  public static String resolveVersionedBaseUrl(String baseUrl) {
    String stripped = stripTrailingSlashes(baseUrl);
    if (baseUrlContainsVersion(stripped)) {
      return stripped;
    }
    return stripped + "/v1";
  }

  public static boolean baseUrlContainsVersion(String baseUrl) {
    if (baseUrl == null || baseUrl.isBlank()) {
      return false;
    }
    String stripped = stripTrailingSlashes(baseUrl.trim());
    return TRAILING_VERSION.matcher(stripped).find();
  }

  public static String stripTrailingSlashes(String value) {
    if (value == null) {
      return "";
    }
    String result = value.trim();
    while (result.endsWith("/")) {
      result = result.substring(0, result.length() - 1);
    }
    return result;
  }
}
