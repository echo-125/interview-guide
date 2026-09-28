package interview.guide.modules.auth.controller;

import interview.guide.common.annotation.RateLimit;
import interview.guide.common.result.Result;
import interview.guide.modules.auth.dto.AuthStatusResponse;
import interview.guide.modules.auth.dto.LoginRequest;
import interview.guide.modules.auth.dto.LoginResponse;
import interview.guide.modules.auth.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 登录认证接口。
 *
 * <p>login 与 status 在 SaTokenAuthConfig 白名单中放行，无需登录即可调用；
 * logout 需要已登录。
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

  private final AuthService authService;

  /**
   * 登录。
   *
   * <p>该接口匿名可访问，因此额外按 IP 限流，避免公网环境下被暴力破解。
   */
  @PostMapping("/login")
  @RateLimit(dimension = RateLimit.Dimension.IP, count = 10, interval = 1,
      timeUnit = RateLimit.TimeUnit.MINUTES)
  public Result<LoginResponse> login(@RequestBody @Valid LoginRequest request) {
    return Result.success("登录成功", authService.login(request));
  }

  /**
   * 注销当前会话（退出登录）。
   */
  @PostMapping("/logout")
  public Result<Void> logout() {
    authService.logout();
    return Result.success();
  }

  /**
   * 登录状态探测：前端启动时据此决定进入应用还是跳转登录页。
   */
  @GetMapping("/status")
  public Result<AuthStatusResponse> status() {
    return Result.success(authService.status());
  }
}
