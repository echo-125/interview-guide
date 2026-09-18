import assert from 'node:assert/strict';
import test from 'node:test';

import type { ResumeDocument } from '../../types/resumeDocument.ts';
import {
  applySuggestionToDocument,
  aiApply,
  canRedo,
  canUndo,
  createWorkingResumeDocument,
  manualEdit,
  mapSuggestionToDocument,
  redo,
  revertSuggestion,
  undo,
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
    skills: [
      { id: 's1', category: '后端', items: ['Java', 'Spring Boot', 'Redis'] },
    ],
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
      {
        id: 'p1',
        name: '高可用网关',
        role: '负责人',
        bullets: [{ id: 'pb1', text: '设计三级缓存架构。' }],
      },
    ],
    education: [
      { id: 'pd1', school: '某某大学', degree: '本科', major: '计算机科学', bullets: [] },
    ],
    certifications: [{ id: 'c1', name: 'PMP' }],
    awards: [{ id: 'a1', title: '优秀员工' }],
    languages: [{ id: 'l1', name: '英语', level: '流利' }],
    customSections: [
      { id: 'cs1', title: '其他内容', blocks: [{ id: 'cb1', type: 'bullet', text: '喜欢开源贡献。' }] },
    ],
  };
}

/* ---------- A. Mapping ---------- */

test('A1 unique exact → structured-path', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '设计订单扣款流程。' });
  assert.equal(m.strategy, 'structured-path');
  assert.equal(m.documentPath!.kind, 'experience-bullet');
});

test('A2 unique whitespace → structured-path', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '设计订单扣款 流程。' });
  assert.equal(m.strategy, 'structured-path');
  assert.equal(m.documentPath!.kind, 'experience-bullet');
});

test('A3 duplicate → quote fallback', () => {
  const doc = makeDoc();
  // summary 与 experience bullet 都含「性能优化」→ 多候选
  const m = mapSuggestionToDocument(doc, { quote: '性能优化' });
  assert.equal(m.strategy, 'quote-anchor');
});

test('A4 no match → unmapped', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '完全不存在的内容XYZ' });
  assert.equal(m.strategy, 'unmapped');
});

test('A5 customSections → structured-path', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '喜欢开源贡献。' });
  assert.equal(m.strategy, 'structured-path');
  assert.equal(m.documentPath!.kind, 'custom-block');
});

test('A6 context disambiguation（section 提示）', () => {
  const doc = makeDoc();
  // 多候选：summary「性能优化」+ eb1「性能优化」
  const m = mapSuggestionToDocument(doc, { quote: '性能优化', sectionHint: 'experience' });
  assert.equal(m.strategy, 'structured-path');
  assert.equal(m.documentPath!.kind, 'experience-bullet');
});

test('A7 invalid path → fallback', () => {
  const doc = makeDoc();
  // quote 唯一时走 structured-path；无 path 时不产生 structured-path
  const m = mapSuggestionToDocument(doc, { quote: 'xxx-no-match-zzz' });
  assert.notEqual(m.strategy, 'structured-path');
});

test('A9 fuzzy only → 不得 structured-path', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '负责支付系统核心交易系统开发丰富' });
  // 高相似但非精确/子串 → 不匹配 → unmapped（禁止 fuzzy 结构化）
  assert.notEqual(m.strategy, 'structured-path');
});

/* ---------- B. Structured Apply ---------- */

test('B10 whole-field replacement（summary）', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '负责支付系统开发和性能优化，实践经验丰富。' });
  assert.equal(m.strategy, 'structured-path');
  const res = applySuggestionToDocument(doc, m, '负责支付系统开发和性能优化，实践经验丰富。', '专注高并发支付系统，精通分布式事务。');
  assert.ok(res.document);
  assert.equal(res.document.basics.summary, '专注高并发支付系统，精通分布式事务。');
  // 原文档不变
  assert.equal(doc.basics.summary, '负责支付系统开发和性能优化，实践经验丰富。');
});

test('B11 substring replacement（字段内局部替换），但 quote 唯一才允许', () => {
  const doc = makeDoc();
  // summary 唯一含「性能优化」
  const m = mapSuggestionToDocument(doc, { quote: '性能优化', sectionHint: 'summary' });
  const res = applySuggestionToDocument(doc, m, '性能优化', '性能与稳定性优化');
  assert.ok(res.document);
  assert.ok(res.document!.basics.summary.includes('性能与稳定性优化'));
});

test('B12 duplicate substring reject', () => {
  const doc = makeDoc();
  // 构造 summary 中「性能优化」出现两次
  doc.basics.summary = '性能优化 A 性能优化 B';
  const m = mapSuggestionToDocument(doc, { quote: '性能优化', sectionHint: 'summary' });
  // 重复 → 结构化应拒绝 apply（映射层可能只给 quote-anchor）
  if (m.strategy === 'structured-path') {
    const res = applySuggestionToDocument(doc, m, '性能优化', '优化');
    assert.equal(res.document, null);
  }
});

test('B13 experience bullet', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '设计订单扣款流程。' });
  const res = applySuggestionToDocument(doc, m, '设计订单扣款流程。', '设计订单扣款与对账流程。');
  assert.ok(res.document);
  assert.equal(res.document!.experience[0].bullets[1].text, '设计订单扣款与对账流程。');
});

test('B14 project bullet', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '设计三级缓存架构。' });
  const res = applySuggestionToDocument(doc, m, '设计三级缓存架构。', '设计多级缓存与降级方案。');
  assert.ok(res.document);
  assert.equal(res.document!.projects[0].bullets[0].text, '设计多级缓存与降级方案。');
});

test('B15 summary whole replace', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '负责支付系统开发和性能优化，实践经验丰富。' });
  const res = applySuggestionToDocument(doc, m, '负责支付系统开发和性能优化，实践经验丰富。', '新总结。');
  assert.ok(res.document);
  assert.equal(res.document!.basics.summary, '新总结。');
});

test('B16 custom block', () => {
  const doc = makeDoc();
  const m = mapSuggestionToDocument(doc, { quote: '喜欢开源贡献。' });
  const res = applySuggestionToDocument(doc, m, '喜欢开源贡献。', '长期投入开源社区贡献。');
  assert.ok(res.document);
  assert.equal(res.document!.customSections[0].blocks[0].text, '长期投入开源社区贡献。');
});

test('B17 skill item', () => {
  const doc = makeDoc();
  const m2 = mapSuggestionToDocument(doc, { quote: 'Redis', sectionHint: 'skills' });
  assert.equal(m2.strategy, 'structured-path');
  const res = applySuggestionToDocument(doc, m2, 'Redis', 'Redis / Redisson');
  assert.ok(res.document);
  assert.ok(res.document!.skills[0].items.includes('Redis / Redisson'));
});

/* ---------- C. Revision / Undo / Redo ---------- */

test('C18+C19 Apply A then B', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m1 = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m1, '设计订单扣款流程。', '设计订单扣款与对账流程。').state;
  const m2 = mapSuggestionToDocument(st.currentDocument, { quote: '设计三级缓存架构。' });
  st = aiApply(st, 's2', m2, '设计三级缓存架构。', '设计多级缓存。').state;
  assert.equal(st.currentDocument.experience[0].bullets[1].text, '设计订单扣款与对账流程。');
  assert.equal(st.currentDocument.projects[0].bullets[0].text, '设计多级缓存。');
  assert.equal(st.revisionIndex, 1);
});

test('C20 Manual edit after AI', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m, '设计订单扣款流程。', '设计订单扣款与对账流程。').state;
  // 用户手工修改另一字段（深拷贝，不改引用对象）
  const edited = structuredClone(st.currentDocument);
  edited.experience[0].bullets[0] = { ...edited.experience[0].bullets[0], text: '用户手工改动。' };
  st = manualEdit(st, edited);
  assert.equal(st.currentDocument.experience[0].bullets[0].text, '用户手工改动。');
  assert.equal(st.currentDocument.experience[0].bullets[1].text, '设计订单扣款与对账流程。');
  assert.equal(st.revisions.length, 2);
});

test('C21-C24 Undo/Redo sequence', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m1 = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' }); // → eb2
  st = aiApply(st, 's1', m1, '设计订单扣款流程。', 'A1').state; // eb2='A1'
  const m2 = mapSuggestionToDocument(st.currentDocument, { quote: '设计三级缓存架构。' }); // → pb1
  st = aiApply(st, 's2', m2, '设计三级缓存架构。', 'A2').state; // pb1='A2'
  const edited = structuredClone(st.currentDocument);
  edited.projects[0].bullets[0] = { ...edited.projects[0].bullets[0], text: 'M' }; // pb1='M'
  st = manualEdit(st, edited); // C
  assert.equal(st.currentDocument.projects[0].bullets[0].text, 'M');
  // Undo C
  st = undo(st);
  assert.equal(st.currentDocument.projects[0].bullets[0].text, 'A2');
  // Undo B
  st = undo(st);
  assert.equal(st.currentDocument.projects[0].bullets[0].text, '设计三级缓存架构。');
  assert.equal(st.currentDocument.experience[0].bullets[1].text, 'A1');
  // Undo A
  st = undo(st);
  assert.equal(st.revisionIndex, -1);
  assert.equal(st.currentDocument.experience[0].bullets[1].text, '设计订单扣款流程。');
  // Redo A
  st = redo(st);
  assert.equal(st.currentDocument.experience[0].bullets[1].text, 'A1');
  // Redo B
  st = redo(st);
  assert.equal(st.currentDocument.projects[0].bullets[0].text, 'A2');
  // Redo C
  st = redo(st);
  assert.equal(st.currentDocument.projects[0].bullets[0].text, 'M');
  assert.equal(canUndo(st), true);
  assert.equal(canRedo(st), false);
});

test('C25 新 revision 清空 redo branch', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m, '设计订单扣款流程。', 'A').state; // eb2='A'
  const m2 = mapSuggestionToDocument(st.currentDocument, { quote: '设计三级缓存架构。' });
  st = aiApply(st, 's2', m2, '设计三级缓存架构。', 'B').state; // pb1='B'
  st = undo(st); // 回退 B，当前 pb1='设计三级缓存架构。'
  // 在 B 之前追加新 AI 应用到不同字段（summary）
  const m3 = mapSuggestionToDocument(st.currentDocument, { quote: '负责支付系统开发和性能优化，实践经验丰富。' });
  st = aiApply(st, 's3', m3, '负责支付系统开发和性能优化，实践经验丰富。', 'C').state;
  assert.equal(st.revisions.length, 2); // redo 分支 B 被丢弃
  assert.equal(st.revisionIndex, 1);
  assert.equal(canRedo(st), false);
  assert.equal(st.currentDocument.basics.summary, 'C');
});

/* ---------- D. AI / Manual 共存 ---------- */

test('D26 AI Apply + manual edit 共存', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m, '设计订单扣款流程。', 'AI 改').state;
  const ed = { ...st.currentDocument, basics: { ...st.currentDocument.basics, name: '张三丰' } };
  st = manualEdit(st, ed);
  assert.equal(st.currentDocument.experience[0].bullets[1].text, 'AI 改');
  assert.equal(st.currentDocument.basics.name, '张三丰');
});

test('D28 AI apply 后人工修改同一区域 → 撤销被阻止', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' }); // → eb2
  st = aiApply(st, 's1', m, '设计订单扣款流程。', 'AI 改').state; // eb2='AI 改'
  // 用户手工修改 AI 改过的同一字段（eb2）
  const edited = structuredClone(st.currentDocument);
  edited.experience[0].bullets[1] = { ...edited.experience[0].bullets[1], text: '用户手写改动' };
  st = manualEdit(st, edited);
  const r = revertSuggestion(st, 's1');
  assert.equal(r.status, 'blocked-by-manual-edit');
  assert.equal(r.state.currentDocument.experience[0].bullets[1].text, '用户手写改动'); // 不覆盖用户内容
});

test('D29 指定 AI 撤销在未被手动修改时安全恢复', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m, '设计订单扣款流程。', 'AI 改').state;
  const r = revertSuggestion(st, 's1');
  assert.equal(r.status, 'applied');
  assert.equal(r.state.currentDocument.experience[0].bullets[1].text, '设计订单扣款流程。');
});

test('A10 (manual prevent field) 不覆盖用户内容', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m, '设计订单扣款流程。', 'AI 改').state;
  // 直接把 AI 改过的那段再改掉
  const ed = { ...st.currentDocument, experience: st.currentDocument.experience.map((e) =>
    ({ ...e, bullets: e.bullets.map(b => b.id === 'eb2' ? { ...b, text: '用户覆盖该字段' } : b) })) };
  st = manualEdit(st, ed);
  const r = revertSuggestion(st, 's1');
  assert.equal(r.status, 'blocked-by-manual-edit');
  assert.equal(r.state.currentDocument.experience[0].bullets[1].text, '用户覆盖该字段');
});

test('特定撤销不影响其他 suggestion', () => {
  let st = createWorkingResumeDocument(makeDoc());
  const m1 = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m1, '设计订单扣款流程。', 'A1').state;
  const m2 = mapSuggestionToDocument(st.currentDocument, { quote: '设计三级缓存架构。' });
  st = aiApply(st, 's2', m2, '设计三级缓存架构。', 'A2').state;
  const r = revertSuggestion(st, 's1');
  assert.equal(r.status, 'applied');
  // s2 的修改仍然保留
  assert.equal(r.state.currentDocument.projects[0].bullets[0].text, 'A2');
});

/* ---------- E. Export（currentDocument 约束） ---------- */

test('E 导出对象引用 currentDocument 而非 originalDocument', () => {
  const orig = makeDoc();
  let st = createWorkingResumeDocument(orig);
  const m = mapSuggestionToDocument(st.currentDocument, { quote: '设计订单扣款流程。' });
  st = aiApply(st, 's1', m, '设计订单扣款流程。', '导出版本内容').state;
  // PDF/DOCX 应使用 st.currentDocument
  assert.notEqual(st.currentDocument, orig);
  assert.equal(st.currentDocument.experience[0].bullets[1].text, '导出版本内容');
  assert.equal(orig.experience[0].bullets[1].text, '设计订单扣款流程。');
  // undo 后 currentDocument 回退
  st = undo(st);
  assert.equal(st.currentDocument.experience[0].bullets[1].text, '设计订单扣款流程。');
});