import { request } from './request';
import type { AuthStatus, LoginRequestPayload, LoginResult } from '../types/auth';

export const authApi = {
  /** 登录，成功后需调用 saveToken 保存返回的 token */
  login(payload: LoginRequestPayload): Promise<LoginResult> {
    return request.post<LoginResult>('/api/auth/login', payload);
  },

  /** 退出登录 */
  logout(): Promise<void> {
    return request.post<void>('/api/auth/logout');
  },

  /** 查询登录状态：前端启动时据此决定是否跳转登录页 */
  status(): Promise<AuthStatus> {
    return request.get<AuthStatus>('/api/auth/status');
  },
};

export default authApi;
