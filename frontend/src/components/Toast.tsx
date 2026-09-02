import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';

interface ToastItem {
  id: number;
  message: string;
  type: 'success' | 'error';
}

interface ToastContextValue {
  showToast: (message: string, type?: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

let nextId = 1;

/**
 * 全局轻量 Toast 提示，替代散落的 alert()。
 * 在 App 根部挂载 <ToastProvider>，业务组件用 useToast() 取 showToast。
 */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    const id = nextId++;
    setToasts(prev => [...prev.slice(-2), { id, message, type }]);
    const timer = setTimeout(() => dismiss(id), 3000);
    timersRef.current.set(id, timer);
  }, [dismiss]);

  const value: ToastContextValue = { showToast };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`px-4 py-3 rounded-lg shadow-lg text-sm text-white transition-all ${
              toast.type === 'error' ? 'bg-red-500' : 'bg-primary-500'
            }`}
            onClick={() => dismiss(toast.id)}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

/**
 * 获取全局 toast 方法。必须在 <ToastProvider> 内使用。
 */
export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error('useToast 必须在 <ToastProvider> 内使用');
  }
  return ctx;
}
