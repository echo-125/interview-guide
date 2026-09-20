import assert from 'node:assert/strict';
import test from 'node:test';

import type { DocumentPath } from './structuredMapping.ts';
import { parsePath, serializePath } from './structuredMapping.ts';
import {
  EditorFieldRegistryCore,
  normalizeFieldKey,
  type EditorFieldKey,
} from './editorFieldRegistry.ts';

/** 全部 kind 的 path（编辑器可注册字段全集，Ediror Navigation 覆盖） */
const ALL_PATHS: readonly DocumentPath[] = [
  { kind: 'basic', field: 'name' },
  { kind: 'basic', field: 'title' },
  { kind: 'basic', field: 'email' },
  { kind: 'basic', field: 'phone' },
  { kind: 'basic', field: 'location' },
  { kind: 'basic', field: 'website' },
  { kind: 'summary' },
  { kind: 'skill-category', skillId: 's1' },
  { kind: 'skill-item', skillId: 's1', itemIndex: 0 },
  { kind: 'experience-field', experienceId: 'e1', field: 'company' },
  { kind: 'experience-field', experienceId: 'e1', field: 'title' },
  { kind: 'experience-field', experienceId: 'e1', field: 'startDate' },
  { kind: 'experience-field', experienceId: 'e1', field: 'endDate' },
  { kind: 'experience-field', experienceId: 'e1', field: 'location' },
  { kind: 'experience-field', experienceId: 'e1', field: 'description' },
  { kind: 'experience-bullet', experienceId: 'e1', bulletId: 'eb1' },
  { kind: 'project-field', projectId: 'p1', field: 'name' },
  { kind: 'project-field', projectId: 'p1', field: 'role' },
  { kind: 'project-field', projectId: 'p1', field: 'link' },
  { kind: 'project-field', projectId: 'p1', field: 'startDate' },
  { kind: 'project-field', projectId: 'p1', field: 'endDate' },
  { kind: 'project-bullet', projectId: 'p1', bulletId: 'pb1' },
  { kind: 'education-field', educationId: 'pd1', field: 'school' },
  { kind: 'education-field', educationId: 'pd1', field: 'degree' },
  { kind: 'education-field', educationId: 'pd1', field: 'major' },
  { kind: 'education-bullet', educationId: 'pd1', bulletId: 'x' },
  { kind: 'certification-item', itemId: 'c1' },
  { kind: 'award-item', itemId: 'a1' },
  { kind: 'language-item', itemId: 'l1' },
  { kind: 'custom-block', sectionId: 'cs1', blockId: 'cb1' },
];

test('R1 register/lookup 全字段类别（Editor Navigation 纯函数部分）', () => {
  const reg = new EditorFieldRegistryCore();
  const el = { tagName: 'INPUT' } as HTMLElement;
  for (const p of ALL_PATHS) {
    reg.register(serializePath(p), { path: p, element: el });
    const hit = reg.get(serializePath(p));
    assert.ok(hit, `missing lookup: ${p.kind}`);
    assert.equal(hit.element, el);
  }
  assert.equal(reg.size(), ALL_PATHS.length);
});

test('R2 未注册的 key → undefined（missing path 不崩溃）', () => {
  const reg = new EditorFieldRegistryCore();
  assert.equal(reg.get(serializePath({ kind: 'summary' as const })), undefined);
  assert.equal(reg.get('not-a-registered-key'), undefined);
  assert.equal(reg.size(), 0);
});

test('R3 unregister 幂等 / 存在性删除', () => {
  const reg = new EditorFieldRegistryCore();
  const key = serializePath({ kind: 'summary' as const });
  reg.register(key, { path: { kind: 'summary' } });
  reg.unregister(key);
  assert.equal(reg.get(key), undefined);
  // 重复 unregister / 未注册 key unregister 均无害
  reg.unregister(key);
  reg.unregister('never-registered');
  assert.equal(reg.size(), 0);
});

test('R4 duplicate path：同 key 二次注册以最后一次为准（StrictMode register/unregister/register 安全）', () => {
  const reg = new EditorFieldRegistryCore();
  const key = serializePath({ kind: 'summary' as const });
  const a = { tagName: 'TEXTAREA', value: 'a' } as unknown as HTMLElement;
  const b = { tagName: 'TEXTAREA', value: 'b' } as unknown as HTMLElement;
  reg.register(key, { path: { kind: 'summary' }, element: a });
  reg.register(key, { path: { kind: 'summary' }, element: b });
  assert.equal(reg.get(key)?.element, b);
  reg.unregister(key);
  assert.equal(reg.get(key), undefined);
  // StrictMode 模式：dismount 后 remount 再注册
  reg.register(key, { path: { kind: 'summary' }, element: a });
  assert.equal(reg.get(key)?.element, a);
});

test('R5 skill-item 归一化：任意 itemIndex 定位到同组 itemIndex=0 注册元素', () => {
  const reg = new EditorFieldRegistryCore();
  const el = { tagName: 'INPUT' } as HTMLElement;
  const base = { kind: 'skill-item', skillId: 's1', itemIndex: 0 } as const;
  reg.register(serializePath(base), { path: base, element: el });
  const hit3 = reg.get(serializePath({ kind: 'skill-item', skillId: 's1', itemIndex: 3 }));
  assert.equal(hit3?.element, el);
  assert.equal(normalizeFieldKey(serializePath({ kind: 'skill-item', skillId: 's1', itemIndex: 9 })),
    serializePath({ kind: 'skill-item', skillId: 's1', itemIndex: 0 }));
  // 非 skill-item key 不受归一化影响
  const summaryKey = serializePath({ kind: 'summary' as const });
  assert.equal(normalizeFieldKey(summaryKey), summaryKey);
});

test('R6 key 生命周期：使用的 key 就是 serializePath/parsePath 往返结果', () => {
  for (const p of ALL_PATHS) {
    const key: EditorFieldKey = serializePath(p);
    assert.deepEqual(parsePath(key), p);
  }
});

test('R7 clear 清空整表', () => {
  const reg = new EditorFieldRegistryCore();
  reg.register(serializePath({ kind: 'summary' as const }), { path: { kind: 'summary' } });
  reg.register(serializePath({ kind: 'basic', field: 'name' }), { path: { kind: 'basic', field: 'name' } });
  reg.clear();
  assert.equal(reg.size(), 0);
});