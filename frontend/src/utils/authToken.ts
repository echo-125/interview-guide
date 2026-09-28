/**
 * 登录 token 的本地存取。
 *
 * 后端登录响应会下发 token 的 Header 名（由 application.yml 的 sa-token.token-name 控制），
 * 这里一并保存，请求时按该名字写入请求头，避免前后端各自硬编码导致不一致。
 */

const TOKEN_NAME_KEY = 'interview-guide.token-name';
const TOKEN_VALUE_KEY = 'interview-guide.token-value';

/** 后端未返回 token 名时的兜底值，与 sa-token.token-name 的默认值一致 */
const DEFAULT_TOKEN_NAME = 'satoken';

export interface StoredToken {
  name: string;
  value: string;
}

/** 保存登录 token */
export function saveToken(name: string, value: string): void {
  localStorage.setItem(TOKEN_NAME_KEY, name || DEFAULT_TOKEN_NAME);
  localStorage.setItem(TOKEN_VALUE_KEY, value);
}

/** 读取登录 token，未登录返回 null */
export function getToken(): StoredToken | null {
  const value = localStorage.getItem(TOKEN_VALUE_KEY);
  if (!value) {
    return null;
  }
  return {
    name: localStorage.getItem(TOKEN_NAME_KEY) || DEFAULT_TOKEN_NAME,
    value,
  };
}

/** 清除登录 token */
export function clearToken(): void {
  localStorage.removeItem(TOKEN_NAME_KEY);
  localStorage.removeItem(TOKEN_VALUE_KEY);
}
