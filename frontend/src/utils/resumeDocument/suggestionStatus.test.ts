import assert from 'node:assert/strict';
import test from 'node:test';

import type { ResumeDocument } from '../../types/resumeDocument.ts';
import {
  activeAppliedSuggestionIds,
  aiApply,
  createWorkingResumeDocument,
  deriveSuggestionStatus,
  isQuoteStillApplicable,
  manualEdit,
  mapSuggestionToDocument,
  redo,
  revertSuggestion,
  undo,
  type SuggestionMapping,
} from './structuredMapping.ts';

function makeDoc(): ResumeDocument {
  return {
    version: 1,
    basics: {
      name: '张三',
      title: 'Java 工程师',
      email: 'zs@example.com',
      phone: '138-0000-0000',
      location: '深圳',
      summary: '负责支付系统开发和性能优化，实践经验丰富。',
    },
    skills: [{ id: 's1', category: '后端', items: ['Java', 'Spring Boot', 'Redis'] }],
    experience: [
      {
        id: 'e1',
        company: '某某支付',
        title: '后端开发',
        startDate: '2021.03',
        endDate: '至今',
        bullets: [
          { id: 'eb1', text: '负责支付系统性能优化，将 P99 降低 40%。' },
          { id: 'eb2', text: '设计订单扣款流程。' },
        ],
      },
    ],
    projects: [
      { id: 'p1', name: '高可用网关', role: '负责人', bullets: [{ id: 'pb1', text: '设计三级缓存架构。' }] },
    ],
    education: [{ id: 'pd1', school: '某某大学', degree: '本科', major: '计算机科学', bullets: [] }],
    certifications: [{ id: 'c1', name: 'PMP' }],
    awards: [{ id: 'a1', title: '优秀员工' }],
    languages: [{ id: 'l1', name: '英语', level: '流利' }],
    customSections: [{ id: 'cs1', title: '其他内容', blocks: [{ id: 'cb1', type: 'bullet', text: '喜欢开源贡献。' }] }],
  };
}

/** 构造 suggestion 输入（straw：mapping 直接沿用 mapSuggestionToDocument 结果） */
function sug(id: string, document: ResumeDocument, quote: string, hint?: Parameters<typeof mapSuggestionToDocument>[1]['sectionHint']):
  { id: string; mapping: SuggestionMapping; improvement: { originalText: string } } {
  const mapping = mapSuggestionToDocument(document, {
    quote,
    ...(hint ? { sectionHint: hint } : {}),
  }) as SuggestionMapping;
  return { id, mapping, improvement: { originalText: quote } };
}

/* ---------- isQuoteStillApplicable ---------- */

test('S1 quote 整字段命中 → 可应用', () => {
  const doc = makeDoc();
  const m = sug('s1', doc, '设计订单扣款流程。');
  assert.equal(m.mapping.strategy, 'structured-path');
  assert.equal(isQuoteStillApplicable(doc, m.mapping, '设计订单扣款流程。'), true);
});

test('S2 字段内局部唯一命中 → 可应用', () => {
  const doc = makeDoc();
  assert.equal(isQuoteStillApplicable(doc, { documentPath: { kind: 'summary' } }, '性能优化'), true);
});

test('S3 字段内重复命中 → 不可应用', () => {
  const doc = { ...makeDoc(), basics: { ...makeDoc().basics, summary: '性能优化 A 性能优化 B' } };
  assert.equal(isQuoteStillApplicable(doc, { documentPath: { kind: 'summary' } }, '性能优化'), false);
});

test('S4 quote 未命中 → 不可应用（manual edit 后 stale）', () => {
  const doc = makeDoc();
  // summary 已被手改成完全不同的内容
  doc.basics.summary = '全新的一句话总结。';
  assert.equal(isQuoteStillApplicable(doc, { documentPath: { kind: 'summary' } }, '性能优化'), false);
});

test('S5 目标字段被删除 / 无 path → 不可应用', () => {
  const doc = makeDoc();
  doc.experience = []; // 经历条目整体删除
  assert.equal(isQuoteStillApplicable(doc, { documentPath: { kind: 'experience-bullet', experienceId: 'e1', bulletId: 'eb1' } }, '设计订单扣款流程。'), false);
  assert.equal(isQuoteStillApplicable(doc, { documentPath: undefined }, 'x'), false);
});

/* ---------- deriveSuggestionStatus ---------- */

test('D1 未应用 → pending（唯一结构化建议，不 stale）', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s = sug('top-1', st.currentDocument, '设计订单扣款流程。');
  const d = deriveSuggestionStatus(st, s);
  assert.deepEqual(d, { status: 'pending', stale: false });
});

test('D2 AI Apply → applied', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s = sug('top-1', st.currentDocument, '设计订单扣款流程。');
  st = aiApply(st, 'top-1', s.mapping, '设计订单扣款流程。', '设计订单扣款与对账流程。').state;
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'applied');
  assert.equal(d.stale, false);
});

test('D3 Apply 后 Undo → pending；Redo → applied（Case C）', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s = sug('top-1', st.currentDocument, '设计订单扣款流程。');
  st = aiApply(st, 'top-1', s.mapping, '设计订单扣款流程。', 'A').state;
  st = undo(st);
  assert.equal(deriveSuggestionStatus(st, s).status, 'pending');
  st = redo(st);
  assert.equal(deriveSuggestionStatus(st, s).status, 'applied');
});

test('D4 Apply 后手工修改同一字段 → blocked-by-manual-edit（Case D）', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s = sug('top-1', st.currentDocument, '设计订单扣款流程。');
  st = aiApply(st, 'top-1', s.mapping, '设计订单扣款流程。', 'AI 版本').state;
  const edited = structuredClone(st.currentDocument);
  edited.experience[0].bullets[1] = { ...edited.experience[0].bullets[1], text: '用户手写改版' };
  st = manualEdit(st, edited);
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'blocked-by-manual-edit');
  // revert 保护依然有效
  const r = revertSuggestion(st, 'top-1');
  assert.equal(r.status, 'blocked-by-manual-edit');
});

test('D5 Apply 后手工修改其他字段 → 仍 applied', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s = sug('top-1', st.currentDocument, '设计订单扣款流程。');
  st = aiApply(st, 'top-1', s.mapping, '设计订单扣款流程。', 'AI 版本').state;
  const edited = { ...st.currentDocument, basics: { ...st.currentDocument.basics, name: '张三丰' } };
  st = manualEdit(st, edited);
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'applied');
});

test('D6 revertSuggestion 后 → pending（Case C 撤销恢复）', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s = sug('top-1', st.currentDocument, '设计订单扣款流程。');
  st = aiApply(st, 'top-1', s.mapping, '设计订单扣款流程。', 'AI 版本').state;
  st = revertSuggestion(st, 'top-1').state;
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'pending');
  assert.equal(activeAppliedSuggestionIds(st).has('top-1'), false);
});

test('D7 未应用但字段已被手工改 → stale（禁止假装可 Apply）', () => {
  // mapping 基于原始文档生成（summary → structured-path）
  const s = sug('top-1', makeDoc(), '负责支付系统开发和性能优化，实践经验丰富。', 'summary');
  assert.equal(s.mapping.strategy, 'structured-path');
  // 用户随后手工重写了 summary
  let st = createWorkingResumeDocument(makeDoc());
  st = manualEdit(st, { ...st.currentDocument, basics: { ...st.currentDocument.basics, summary: '重写后的总结。' } });
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'pending');
  assert.equal(d.stale, true);
});

test('D8 未应用但目标字段已删除 → stale（Case H 不崩溃）', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const rest = structuredClone(st.currentDocument);
  rest.experience = [];
  st = manualEdit(st, rest);
  const s = sug('top-1', makeDoc(), '设计订单扣款流程。');
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'pending');
  assert.equal(d.stale, true);
});

test('D9 quote-only suggestion（无 structured path）→ pending 且不 stale', () => {
  const st = createWorkingResumeDocument(makeDoc());
  const s = { id: 'q-1', mapping: { strategy: 'quote-anchor' as const, confidence: 0.5 }, improvement: { originalText: '某段原文' } };
  const d = deriveSuggestionStatus(st, s);
  assert.deepEqual(d, { status: 'pending', stale: false });
});

test('D10 未映射 suggestion（unmapped）→ pending 且不 stale', () => {
  const st = createWorkingResumeDocument(makeDoc());
  const s = { id: 'u-1', mapping: { strategy: 'unmapped' as const, confidence: 0 }, improvement: { originalText: '' } };
  const d = deriveSuggestionStatus(st, s);
  assert.deepEqual(d, { status: 'pending', stale: false });
});

test('D11 activeAppliedSuggestionIds：多建议 apply / revert 混合', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const s1 = sug('s1', st.currentDocument, '设计订单扣款流程。');
  const s2 = sug('s2', st.currentDocument, '设计三级缓存架构。');
  st = aiApply(st, 's1', s1.mapping, '设计订单扣款流程。', 'A').state;
  st = aiApply(st, 's2', s2.mapping, '设计三级缓存架构。', 'B').state;
  assert.deepEqual([...activeAppliedSuggestionIds(st).values()].sort(), ['s1', 's2']);
  st = revertSuggestion(st, 's1').state;
  assert.deepEqual([...activeAppliedSuggestionIds(st).values()], ['s2']);
  st = undo(st); // 回退 revert revision → s1 重新回到激活链
  assert.deepEqual([...activeAppliedSuggestionIds(st).values()].sort(), ['s1', 's2']);
});