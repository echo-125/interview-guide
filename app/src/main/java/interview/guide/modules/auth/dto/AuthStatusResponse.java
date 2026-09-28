package interview.guide.modules.auth.dto;

/**
 * 登录状态响应，供前端启动时判断是否需要跳转登录页。
 *
 * @param enabled       服务端是否启用了登录认证（false 表示免登录调试模式）
 * @param authenticated 当前请求是否已登录
 * @param username      已登录时的用户名，未登录为 null
 */
public record AuthStatusResponse(boolean enabled, boolean authenticated, String username) {
}
