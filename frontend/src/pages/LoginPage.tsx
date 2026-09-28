import { FormEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader2, Lock, LogIn, Sparkles, User } from 'lucide-react';
import { authApi } from '../api/auth';
import { getErrorMessage } from '../api/request';
import { saveToken } from '../utils/authToken';
import { setAuthEnabled } from '../utils/authState';

const DEFAULT_REDIRECT = '/history';

/** 只接受站内相对路径，避免被构造成跳转到外部站点的开放重定向 */
function resolveRedirect(raw: string | null | undefined): string {
  if (!raw) {
    return DEFAULT_REDIRECT;
  }
  return raw.startsWith('/') && !raw.startsWith('//') ? raw : DEFAULT_REDIRECT;
}

/**
 * 登录页。
 *
 * 管理员账号由服务端配置文件提供（.env 的 ADMIN_USERNAME / ADMIN_PASSWORD），不开放注册。
 */
export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const redirect = resolveRedirect(new URLSearchParams(location.search).get('redirect'));

  // 已登录（或服务端关闭了认证）时不必停留在此页，直接进入应用
  useEffect(() => {
    let cancelled = false;
    authApi
      .status()
      .then((status) => {
        if (cancelled) {
          return;
        }
        setAuthEnabled(status.enabled);
        if (!status.enabled || status.authenticated) {
          navigate(redirect, { replace: true });
        }
      })
      .catch(() => {
        // 探测失败时留在登录页，由用户手动尝试登录
      });
    return () => {
      cancelled = true;
    };
  }, [navigate, redirect]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (submitting) {
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      const result = await authApi.login({ username: username.trim(), password });
      saveToken(result.tokenName, result.tokenValue);
      navigate(redirect, { replace: true });
    } catch (err) {
      setError(getErrorMessage(err, '登录失败，请稍后重试'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30 mb-4">
            <Sparkles className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">AI Interview</h1>
          <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">智能面试助手 · 请登录后使用</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                用户名
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="请输入用户名"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                密码
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                />
              </div>
            </div>

            {error && (
              <div className="px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/40">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || !username.trim() || !password}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium transition-colors"
            >
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
              {submitting ? '登录中...' : '登录'}
            </button>
          </div>
        </form>

        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-6">
          账号由服务器配置文件提供，如需修改请联系部署者
        </p>
      </div>
    </div>
  );
}
