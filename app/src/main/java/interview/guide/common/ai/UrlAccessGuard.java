package interview.guide.common.ai;

import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import okhttp3.Dns;
import org.springframework.boot.http.client.InetAddressFilter;

import java.net.InetAddress;
import java.net.URI;
import java.net.UnknownHostException;
import java.util.List;

/**
 * 出站 URL 访问守卫，统一防止 SSRF（服务端请求伪造）。
 *
 * <p>规则与 {@code RerankClient} / {@code doTestProvider} 现有的
 * {@link InetAddressFilter} 先例保持一致：仅允许公网地址，放行回环，
 * 拦截 CGNAT 保留段（198.18.0.0/15，常用于云元数据地址 169.254.169.254 的模拟）。
 *
 * <p>对基于 OkHttp 的客户端（openai-java / anthropic-java）额外提供
 * {@link #guardDns()}，通过自定义 {@link Dns} 在每次解析时校验解析结果，
 * 避免「入口校验后 DNS 再次解析到内网」的 DNS rebinding 窗口。
 */
public final class UrlAccessGuard {

  private UrlAccessGuard() {}

  /**
   * 校验 URL 可安全访问：scheme 必须为 http/https，且解析出的所有 IP 均为公网地址。
   *
   * @throws BusinessException 当 URL 指向内网/回环/链路本地/保留地址或协议非法时
   */
  public static void assertExternalUrl(String url) {
    if (url == null || url.isBlank()) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "URL 不能为空");
    }
    URI uri;
    try {
      uri = URI.create(url.trim());
    } catch (IllegalArgumentException e) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "URL 格式非法: " + url);
    }
    String scheme = uri.getScheme();
    if (scheme == null || !(scheme.equalsIgnoreCase("http") || scheme.equalsIgnoreCase("https"))) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "仅支持 http/https 协议: " + url);
    }
    String host = uri.getHost();
    if (host == null || host.isBlank()) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "URL 缺少主机名: " + url);
    }
    assertExternalHost(host, url);
  }

  /**
   * 校验主机名解析出的所有 IP 均为公网地址。
   */
  public static void assertExternalHost(String host, String origin) {
    InetAddressFilter filter = externalFilter();
    try {
      InetAddress[] addresses = InetAddress.getAllByName(host);
      if (addresses.length == 0) {
        throw new BusinessException(ErrorCode.BAD_REQUEST, "无法解析主机: " + host);
      }
      for (InetAddress address : addresses) {
        // matches 返回 true 表示该地址被放行；被过滤（非公网）则拒绝
        if (!filter.matches(address)) {
          throw new BusinessException(ErrorCode.BAD_REQUEST,
              "拒绝访问非公网地址: " + host + " (" + address.getHostAddress() + ")，来源: " + origin);
        }
      }
    } catch (UnknownHostException e) {
      throw new BusinessException(ErrorCode.BAD_REQUEST, "无法解析主机: " + host);
    }
  }

  /**
   * 构造一个 OkHttp {@link Dns}，在每次解析时校验解析结果均为公网地址，
   * 用于 openai-java / anthropic-java 等基于 OkHttp 的客户端。
   */
  public static Dns guardDns() {
    InetAddressFilter filter = externalFilter();
    return hostname -> {
      try {
        List<InetAddress> addresses = Dns.SYSTEM.lookup(hostname);
        for (InetAddress address : addresses) {
          if (!filter.matches(address)) {
            throw new BusinessException(ErrorCode.BAD_REQUEST,
                "拒绝访问非公网地址: " + hostname + " (" + address.getHostAddress() + ")");
          }
        }
        return addresses;
      } catch (UnknownHostException e) {
        throw e;
      }
    };
  }

  private static InetAddressFilter externalFilter() {
    return InetAddressFilter.externalAddresses()
        .or(InetAddressFilter.adapt(InetAddress::isLoopbackAddress))
        .or("198.18.0.0/15");
  }
}
