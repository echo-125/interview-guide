package interview.guide.modules.auth.service;

import cn.dev33.satoken.stp.SaTokenInfo;
import cn.dev33.satoken.stp.StpUtil;
import interview.guide.common.config.AuthProperties;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.modules.auth.dto.AuthStatusResponse;
import interview.guide.modules.auth.dto.LoginRequest;
import interview.guide.modules.auth.dto.LoginResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

/**
 * 登录认证服务。
 *
 * <p>系统只保留一个管理员账号（配置见 {@link AuthProperties}），不开放注册、也不建用户表：
 * Sa-Token 的会话只需要一个 loginId，这里直接用管理员用户名。
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

  private final AuthProperties authProperties;

  /**
   * 校验账号密码并建立会话。
   *
   * @throws BusinessException 未配置管理员密码，或账号密码不匹配
   */
  public LoginResponse login(LoginRequest request) {
    AuthProperties.Admin admin = authProperties.getAdmin();

    if (!StringUtils.hasText(admin.getPassword())) {
      // 未配置密码时一律拒绝，避免公网部署后变成"空密码即可登录"
      log.error("登录被拒绝：服务端未配置管理员密码，请在服务器 .env 中设置 ADMIN_PASSWORD");
      throw new BusinessException(ErrorCode.UNAUTHORIZED, "服务端尚未配置管理员密码，暂时无法登录");
    }

    // 用户名与密码均使用恒定时间比较，避免通过响应耗时逐字节试探凭据
    boolean usernameMatched = matches(admin.getUsername(), request.username());
    boolean passwordMatched = matches(admin.getPassword(), request.password());
    if (!usernameMatched || !passwordMatched) {
      log.warn("登录失败：用户名或密码错误, username={}", request.username());
      throw new BusinessException(ErrorCode.UNAUTHORIZED, "用户名或密码错误");
    }

    StpUtil.login(admin.getUsername());
    SaTokenInfo tokenInfo = StpUtil.getTokenInfo();
    log.info("登录成功: username={}", admin.getUsername());
    return new LoginResponse(tokenInfo.getTokenName(), tokenInfo.getTokenValue(), admin.getUsername());
  }

  /**
   * 注销当前会话。
   *
   * <p>先判断登录态再注销：认证被关闭时该接口仍可达，未登录时无需走会话查找。
   */
  public void logout() {
    if (StpUtil.isLogin()) {
      StpUtil.logout();
    }
  }

  /**
   * 查询当前请求的登录状态（匿名接口，供前端启动时判断是否跳转登录页）。
   */
  public AuthStatusResponse status() {
    boolean authenticated = StpUtil.isLogin();
    return new AuthStatusResponse(
        authProperties.isEnabled(),
        authenticated,
        authenticated ? StpUtil.getLoginIdAsString() : null);
  }

  private static boolean matches(String expected, String actual) {
    if (expected == null || actual == null) {
      return false;
    }
    return MessageDigest.isEqual(
        expected.getBytes(StandardCharsets.UTF_8),
        actual.getBytes(StandardCharsets.UTF_8));
  }
}
