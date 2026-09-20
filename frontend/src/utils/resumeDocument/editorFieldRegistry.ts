/**
 * Phase 5B：EditorFieldRegistryCore —— 结构化编辑器字段注册表（纯逻辑，无 React 依赖）
 *
 * 职责：Editor 中每一个可编辑字段用自己的 DocumentPath 注册 DOM 映射，
 * 供 AI Suggestion → Editor 定位（O(1) lookup），替换旧的 querySelectorAll 扫描。
 *
 * 设计要点（Spec 四 / 五 / 二十六 / 二十七）：
 * - key = serializePath(DocumentPath)，类型安全，不依赖 UI 文案
 * - register 是 Map 幂等覆盖：StrictMode 下 register/unregister/register 安全
 * - unregister 幂等：组件卸载重复调用无害
 * - skill-item 归一化：技能组所有 item 共用一个输入框，任意 itemIndex 归一化到 itemIndex=0
 */

import { parsePath, serializePath, type DocumentPath } from './structuredMapping.ts';

/** registry key：序列化后的 DocumentPath（稳定字符串） */
export type EditorFieldKey = string;

/** 注册在案的一个字段 */
export interface EditorFieldRecord {
  /** 半结构化定位描述（Debug / 展示辅助） */
  path: DocumentPath;
  /** 对应 DOM 元素（React 组件层注入；纯逻辑测试可缺省） */
  element?: HTMLElement;
  /** 聚焦委托（若不提供则定位时不 focus） */
  focus?: () => void;
}

/**
 * skill-item 归一化：同组技能的 items 编辑共用同一个输入框。
 * 定位任意 itemIndex 的 skill-item 时，落到该组第一个注册元素（itemIndex=0）。
 */
export function normalizeFieldKey(key: EditorFieldKey): EditorFieldKey {
  const path = parsePath(key);
  if (path?.kind === 'skill-item') {
    return serializePath({ kind: 'skill-item', skillId: path.skillId, itemIndex: 0 });
  }
  return key;
}

/** 字段注册表本体（可独立单测；React 壳见 components/resume-builder/EditorFieldRegistryProvider） */
export class EditorFieldRegistryCore {
  private fields = new Map<EditorFieldKey, EditorFieldRecord>();

  /** 注册字段：Map 幂等覆盖，同 key 重复注册以最后一次为准（StrictMode 安全） */
  register(key: EditorFieldKey, record: EditorFieldRecord): void {
    this.fields.set(key, record);
  }

  /** 注销字段：未注册 key 幂等无为 */
  unregister(key: EditorFieldKey): void {
    this.fields.delete(key);
  }

  /** O(1) 查找（内部做 skill-item 归一化） */
  get(key: EditorFieldKey): EditorFieldRecord | undefined {
    return this.fields.get(normalizeFieldKey(key));
  }

  has(key: EditorFieldKey): boolean {
    return this.fields.has(normalizeFieldKey(key));
  }

  size(): number {
    return this.fields.size;
  }

  /** 清空（卸载整树时） */
  clear(): void {
    this.fields.clear();
  }
}