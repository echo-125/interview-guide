/**
 * 服务端登录认证开关的运行时缓存。
 *
 * 由 RequireAuth / LoginPage 在调用 /api/auth/status 之后写入，
 * 供界面判断是否需要展示与登录态相关的入口（如"退出登录"）。
 * 认证关闭（app.auth.enabled=false）时这些入口应一并隐藏。
 */

let authEnabled = true;

/** 记录服务端是否启用了登录认证 */
export function setAuthEnabled(enabled: boolean): void {
  authEnabled = enabled;
}

/** 服务端是否启用了登录认证（未探测到时按启用处理，行为更保守） */
export function isAuthEnabled(): boolean {
  return authEnabled;
}
