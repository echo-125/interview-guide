package interview.guide.common.config;

import jakarta.annotation.PostConstruct;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 登录认证配置（对应 application.yml 的 app.auth.*）。
 *
 * <p>管理员账号密码来自服务器本地 .env（ADMIN_USERNAME / ADMIN_PASSWORD），不写入仓库。
 * 密码留空时登录接口会一律拒绝，避免公网部署时出现"无密码即可登录"的裸奔状态。
 */
@Data
@Slf4j
@Component
@ConfigurationProperties(prefix = "app.auth")
public class AuthProperties {

  /**
   * 登录认证总开关。
   *
   * <p>默认开启。可通过 application.yml 的 app.auth.enabled 或环境变量 APP_AUTH_ENABLED 设置；
   * 关闭后不再注册登录拦截器与 Redis 会话存储，所有接口匿名可访问，仅限本机调试使用。
   */
  private boolean enabled = true;

  private Admin admin = new Admin();

  /**
   * 启动时把认证开关状态写进日志，避免出现"以为开着、实际关着"的误判。
   */
  @PostConstruct
  void logStatus() {
    if (enabled) {
      log.info("登录认证已启用：/api 接口需登录后访问");
    } else {
      log.warn("登录认证已关闭（app.auth.enabled=false）：/api 接口匿名可访问，请确认当前不是公网环境");
    }
  }

  @Data
  public static class Admin {

    /** 管理员用户名。 */
    private String username = "admin";

    /** 管理员密码，留空表示未配置（此时拒绝所有登录）。 */
    private String password = "";
  }
}
