/**
 * Phase 5B：EditorFieldRegistry React 壳
 *
 * - EditorFieldRegistryProvider：为编辑器子树提供字段注册表（React context + 稳定 ref）
 * - useEditorFieldRegistry / useEditorFieldLocator：注册与 O(1) 定位入口
 * - FieldAnchor：给单个可编辑字段注册 DocumentPath + DOM ref 的轻量封装
 *   （负责注册/注销/data-editor-path/focus 委托/聚焦反向联动，避免编辑器内复制大量 useRef 代码）
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  EditorFieldRegistryCore,
  type EditorFieldKey,
  type EditorFieldRecord,
} from '../../utils/resumeDocument/editorFieldRegistry';
import { serializePath, type DocumentPath } from '../../utils/resumeDocument/structuredMapping';

interface FieldRegistryApi {
  register: (key: EditorFieldKey, record: EditorFieldRecord) => void;
  unregister: (key: EditorFieldKey) => void;
  /** O(1) 按 path 查找（含 skill-item 归一化） */
  get: (key: EditorFieldKey) => EditorFieldRecord | undefined;
}

const FieldRegistryContext = createContext<FieldRegistryApi | null>(null);

export function EditorFieldRegistryProvider({ children }: { children: React.ReactNode }) {
  // 注册表生命周期跟随 Provider 挂载，Map 为稳定引用，不随 render 重建
  const coreRef = useRef<EditorFieldRegistryCore | null>(null);
  if (!coreRef.current) coreRef.current = new EditorFieldRegistryCore();

  const register = useCallback((key: EditorFieldKey, record: EditorFieldRecord) => {
    coreRef.current?.register(key, record);
  }, []);
  const unregister = useCallback((key: EditorFieldKey) => {
    coreRef.current?.unregister(key);
  }, []);
  const get = useCallback((key: EditorFieldKey) => coreRef.current?.get(key), []);

  const value = useMemo(
    () => ({ register, unregister, get }),
    [register, unregister, get]
  );

  return <FieldRegistryContext.Provider value={value}>{children}</FieldRegistryContext.Provider>;
}

/** 组件内取注册/注销能力（供 FieldAnchor 使用） */
export function useEditorFieldRegistry(): FieldRegistryApi {
  const ctx = useContext(FieldRegistryContext);
  if (!ctx) {
    throw new Error('useEditorFieldRegistry 必须在 EditorFieldRegistryProvider 内使用');
  }
  return ctx;
}

/** 组件内取 O(1) 定位能力（供 StructuredEditor 定位高亮使用） */
export function useEditorFieldLocator(): Pick<FieldRegistryApi, 'get'> {
  const { get } = useEditorFieldRegistry();
  return useMemo(() => ({ get }), [get]);
}

export interface FieldAnchorProps {
  /** 该字段的 DocumentPath（定位主坐标） */
  path: DocumentPath;
  /** 必须是单个原生元素（input / textarea），FieldAnchor 会注入 ref 与定位回调 */
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  /** 聚焦字段时的反向联动（Editor → Suggestion），与 children 原有 onFocus 叠加 */
  onFieldFocus?: (path: DocumentPath) => void;
}

const cloneElement = React.cloneElement;

/**
 * 注册一个可定位字段。children 的原生元素会获得：
 * - ref 注册回调（挂载 register / 卸载 unregister，StrictMode 安全）
 * - data-editor-path 属性（调试辅助，非定位主机制）
 * - onFocus 合并（保留原有 focus 行为 + 触发 onFieldFocus 反向联动）
 */
export function FieldAnchor({ path, children, onFieldFocus }: FieldAnchorProps) {
  const { register, unregister } = useEditorFieldRegistry();
  const key = serializePath(path);

  // 用 ref 缓存 children 最新 onFocus，保证注入的回调 identity 稳定，避免每 render 重挂 ref
  const focusRef = useRef<((e: React.FocusEvent) => void) | undefined>(undefined);
  useEffect(() => {
    focusRef.current = children.props.onFocus as ((e: React.FocusEvent) => void) | undefined;
  });

  const refCallback = useCallback(
    (el: HTMLElement | null) => {
      if (el) {
        register(key, { path, element: el, focus: () => el.focus() });
      } else {
        unregister(key);
      }
    },
    [key, path, register, unregister]
  );

  const combinedOnFocus = useCallback(
    (e: React.FocusEvent) => {
      focusRef.current?.(e);
      onFieldFocus?.(path);
    },
    [onFieldFocus, path]
  );

  return cloneElement(
    children as React.ReactElement<{
      ref?: React.Ref<HTMLElement>;
      onFocus?: (e: React.FocusEvent) => void;
      [key: string]: unknown;
    }>,
    {
      ref: refCallback,
      'data-editor-path': key,
      onFocus: combinedOnFocus,
    }
  );
}