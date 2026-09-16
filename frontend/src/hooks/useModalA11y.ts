import { useEffect, useRef } from 'react';

/**
 * 模态框无障碍行为
 *
 * 之前两个结果弹窗只有「点遮罩关闭」一种退出方式，键盘用户既无法用 Esc 关闭，
 * Tab 也会跑到弹窗背后的页面上。这里补齐四件事：
 * 1. Esc 关闭；
 * 2. 打开时锁定 body 滚动，关闭后还原（否则背景会跟着一起滚）；
 * 3. 打开时把焦点移进弹窗，关闭后归还给触发它的元素；
 * 4. Tab / Shift+Tab 在弹窗内循环，不逃到背景。
 *
 * @param open   是否打开
 * @param onClose 关闭回调
 * @returns 需要挂到弹窗容器上的 ref（容器本身要能接收焦点，见 tabIndex={-1}）
 */
export function useModalA11y<T extends HTMLElement = HTMLDivElement>(
  open: boolean,
  onClose: () => void
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const FOCUSABLE =
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !containerRef.current) return;

      const focusables = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter(el => el.offsetParent !== null || el === document.activeElement);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      const target = containerRef.current?.querySelector<HTMLElement>(FOCUSABLE);
      (target ?? containerRef.current)?.focus();
    }, 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      // 关闭后把焦点还给触发弹窗的元素，否则键盘用户会掉到页面顶部
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  return containerRef;
}
