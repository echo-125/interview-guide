/** 登录请求参数 */
export interface LoginRequestPayload {
  username: string;
  password: string;
}

/** 登录成功返回的 token 信息 */
export interface LoginResult {
  /** 提交 token 时使用的请求头名称 */
  tokenName: string;
  /** token 值 */
  tokenValue: string;
  username: string;
}

/** 登录状态（用于判断是否需要跳转登录页） */
export interface AuthStatus {
  /** 服务端是否启用了登录认证 */
  enabled: boolean;
  /** 当前请求是否已登录 */
  authenticated: boolean;
  username: string | null;
}
