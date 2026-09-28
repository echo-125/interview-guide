import { useEffect, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { authApi } from '../api/auth';
import { clearToken } from '../utils/authToken';
import { setAuthEnabled } from '../utils/authState';
import { ROUTES } from '../constants/routes';

type AuthState = 'checking' | 'allowed' | 'denied';

/**
 * 路由守卫：进入受保护页面前确认登录态。
 *
 * 使用后端 /api/auth/status 判断，而不是只看本地有没有 token，
 * 这样 token 过期或被顶下线时能直接回到登录页，而不是进去之后满屏报错。
 *
 * 若服务端关闭了认证（APP_AUTH_ENABLED=false）则直接放行。
 */
export default function RequireAuth({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [state, setState] = useState<AuthState>('checking');

  useEffect(() => {
    let cancelled = false;

    authApi
      .status()
      .then((status) => {
        if (cancelled) {
          return;
        }
        // 同步服务端开关：认证关闭时界面不再展示登录态相关入口
        setAuthEnabled(status.enabled);
        if (!status.enabled || status.authenticated) {
          setState('allowed');
          return;
        }
        clearToken();
        setState('denied');
      })
      .catch(() => {
        if (cancelled) {
          return;
        }
        // 探测接口本身异常（如后端未启动）时不强行跳登录页，
        // 让页面正常渲染，由各业务请求自行提示错误
        setState('allowed');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (state === 'checking') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
      </div>
    );
  }

  if (state === 'denied') {
    // 用 query 传回跳地址，与 request.ts handleUnauthorized 的处理保持一致
    const from = `${location.pathname}${location.search}`;
    return <Navigate to={`${ROUTES.login}?redirect=${encodeURIComponent(from)}`} replace />;
  }

  return <>{children}</>;
}
