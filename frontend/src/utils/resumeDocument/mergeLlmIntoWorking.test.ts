import assert from 'node:assert/strict';
import test from 'node:test';

import type { ResumeDocument } from '../../types/resumeDocument.ts';
import {
  aiApply,
  createWorkingResumeDocument,
  deriveSuggestionStatus,
  manualEdit,
  mapSuggestionToDocument,
  redo,
  serializePath,
  undo,
} from './structuredMapping.ts';
import {
  applyLlmMerge,
  collectActiveEditedPaths,
  diffDocumentFields,
  mergeLlmIntoWorkingDocument,
  reconcileSuggestionMappings,
  shouldAcceptLlmDiagnostics,
} from './mergeLlmIntoWorking.ts';

function makeCurrent(): ResumeDocument {
  return {
    version: 1,
    basics: {
      name: '张三',
      title: 'Java 工程师',
      email: 'zs@example.com',
      phone: '138-0000-0000',
      location: '深圳',
      website: '',
      summary: '负责支付系统开发和性能优化，实践经验丰富。',
    },
    skills: [{ id: 'sk1', category: '后端', items: ['Java', 'MySQL'] }],
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
    rawText: '原始简历全文（绝不能被 LLM 文本替换）。',
  };
}

/** LLM 增强文档：技能更丰富、summary 更长、补齐 website、同公司经历、新增公司（应被忽略）、新 custom block */
function makeLlm(): ResumeDocument {
  return {
    version: 1,
    basics: {
      name: '张三',
      title: 'Java 后端工程师',
      email: 'zs@example.com',
      phone: '',
      location: '广东深圳',
      website: 'https://github.com/zhangsan',
      summary: '拥有 4 年 Java 后端开发经验，专注高并发支付系统，精通分布式事务、消息队列与缓存架构，实践经验丰富。',
    },
    skills: [
      { id: 'lsk1', category: '后端', items: ['Java', 'MySQL', 'Redis', 'Spring Boot'] },
      { id: 'lsk2', category: '工具', items: ['Git', 'Docker'] },
    ],
    experience: [
      {
        id: 'lex1',
        company: '某某支付',
        title: '高级后端开发',
        startDate: '2021.03',
        endDate: '至今',
        bullets: [
          { id: 'leb1', text: '负责支付系统性能优化，将 P99 降低 40%。' },
          { id: 'leb2', text: '设计订单扣款流程。' },
          { id: 'leb3', text: '新增：引入分库分表提升写入吞吐。' },
        ],
      },
      {
        id: 'lex2',
        company: '另一家公司',
        title: '开发',
        startDate: '2019.01',
        endDate: '2021.02',
        bullets: [],
      },
    ],
    projects: [
      { id: 'lprj1', name: '高可用网关', role: '项目负责人', bullets: [{ id: 'lpb1', text: '设计三级缓存架构。' }] },
    ],
    education: [{ id: 'ledu1', school: '某某大学', degree: '本科', major: '计算机科学与技术', bullets: [] }],
    certifications: [{ id: 'lcer1', name: 'PMP' }, { id: 'lcer2', name: 'CKA' }],
    awards: [{ id: 'law1', title: '优秀员工' }],
    languages: [{ id: 'llan1', name: '英语', level: '流利' }],
    customSections: [
      { id: 'lcs1', title: '其他内容', blocks: [
        { id: 'lcb1', type: 'bullet', text: '喜欢开源贡献。' },
        { id: 'lcb2', type: 'paragraph', text: 'LLM 识别出的新段落内容。' },
      ] },
      { id: 'lcs2', title: '开源项目', blocks: [{ id: 'lcb3', type: 'bullet', text: '维护开源工具库。' }] },
    ],
    rawText: 'LLM 生成的伪 rawText（不应进入最终文档）。',
  };
}

const NO_EDIT = new Set<string>();

/* ---------- Test 1 — LLM richer（无修改时采用增强） ---------- */
test('T1 LLM richer skills 无用户修改 → 接受增强且不重复', () => {
  const merged = mergeLlmIntoWorkingDocument(makeCurrent(), makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  const items = merged!.skills[0].items;
  assert.deepEqual(items, ['Java', 'MySQL', 'Redis', 'Spring Boot']);
  // 出现 LLM 新分组（工具）
  assert.ok(merged!.skills.some(g => g.category === '工具'));
});

/* ---------- Test 2 — User edit wins ---------- */
test('T2 用户编辑 summary → merge 后保留用户内容', () => {
  const current = makeCurrent();
  const edited = new Set([serializePath({ kind: 'summary' })]);
  const merged = mergeLlmIntoWorkingDocument(current, makeLlm(), { editedPaths: edited });
  assert.ok(merged);
  assert.equal(merged!.basics.summary, current.basics.summary);
});

/* ---------- Test 3/4 — LLM 空值不擦除 ---------- */
test('T3/T4 LLM 空字符串 / null => 保留 current', () => {
  const current = makeCurrent();
  const llm = makeLlm();
  llm.basics.phone = '';
  llm.basics.location = '' as never; // 模拟缺失
  const merged = mergeLlmIntoWorkingDocument(current, llm, { editedPaths: NO_EDIT });
  assert.ok(merged);
  assert.equal(merged!.basics.phone, '138-0000-0000');
  assert.equal(merged!.basics.location, '深圳');
});

/* ---------- Test 5 — LLM 低质量 → 拒绝 ---------- */
test('T5 shouldAcceptLlmDiagnostics：LLM 质量明显低于 Rule → false', () => {
  assert.equal(shouldAcceptLlmDiagnostics({ coverage: 0.9 }, { coverage: 0.3, confidence: 0.5 }), false);
  assert.equal(shouldAcceptLlmDiagnostics({ coverage: 0.9 }, { coverage: 0.85, confidence: 0.9 }), true);
  assert.equal(shouldAcceptLlmDiagnostics({ coverage: 0.7 }, null), false);
  assert.equal(shouldAcceptLlmDiagnostics(null, { coverage: 0.8, confidence: 0.9 }), false);
});

/* ---------- Test 6 — current 为空时采用 LLM ---------- */
test('T6 current website 空 → 采用 LLM', () => {
  const merged = mergeLlmIntoWorkingDocument(makeCurrent(), makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  assert.equal(merged!.basics.website, 'https://github.com/zhangsan');
});

/* ---------- Test 7 — Stable IDs（merge 前后条目/bullet id 稳定） ---------- */
test('T7 Stable IDs：experience/project/education entry 与 bullet id 不变、不重建整树', () => {
  const current = makeCurrent();
  const merged = mergeLlmIntoWorkingDocument(current, makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  assert.equal(merged!.experience[0].id, 'e1');
  assert.equal(merged!.experience[0].bullets[0].id, 'eb1');
  assert.equal(merged!.experience[0].bullets[1].id, 'eb2');
  assert.equal(merged!.projects[0].id, 'p1');
  assert.equal(merged!.projects[0].bullets[0].id, 'pb1');
  assert.equal(merged!.education[0].id, 'pd1');
});

/* ---------- Test 8 — 数组保守合并（无重复 entry / 不错误覆盖 / 不全重建） ---------- */
test('T8 数组 merge：current 条目保留，LLM 额外公司不重复追加', () => {
  const merged = mergeLlmIntoWorkingDocument(makeCurrent(), makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  // 不重复：另一个公司被忽略，仍只有 1 条经历
  assert.equal(merged!.experience.length, 1);
  assert.equal(merged!.experience[0].company, '某某支付');
  // education 字段增强采纳；certification 新增 CKA 补充（去重后）
  assert.equal(merged!.education[0].major, '计算机科学与技术');
  assert.deepEqual(merged!.certifications.map(c => c.name).sort(), ['CKA', 'PMP']);
});

/* ---------- Test 9 — CustomSections 不丢失，新增可信块补充 ---------- */
test('T9 customSections：原块保留，LLM 新块/新小节补充且文本去重', () => {
  const merged = mergeLlmIntoWorkingDocument(makeCurrent(), makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  const other = merged!.customSections.find(s => s.title === '其他内容');
  assert.ok(other);
  assert.ok(other!.blocks.some(b => b.text === '喜欢开源贡献.'.replace('.', '。') || b.text.includes('喜欢开源贡献')));
  // 新小节「开源项目」被补充
  assert.ok(merged!.customSections.some(s => s.title === '开源项目'));
});

/* ---------- Test 10 — rawText 语义保持 ---------- */
test('T10 rawText：不被 LLM 生成文本替换', () => {
  const merged = mergeLlmIntoWorkingDocument(makeCurrent(), makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  assert.equal(merged!.rawText, '原始简历全文（绝不能被 LLM 文本替换）。');
});

/* ---------- Test 11 — Suggestion Mapping Reconciliation（G2） ---------- */
test('T11 Reconcile：merge 后 mapping 依据 final currentDocument，path/value/target 一致', () => {
  const current = makeCurrent();
  const quote = '设计订单扣款流程。';
  const suggestions = [
    {
      id: 's1',
      improvement: { originalText: quote, currentProblem: '' },
      mapping: mapSuggestionToDocument(current, { quote }),
    },
  ];
  const merged = mergeLlmIntoWorkingDocument(current, makeLlm(), { editedPaths: NO_EDIT });
  assert.ok(merged);
  const reconciled = reconcileSuggestionMappings(suggestions, merged!);
  assert.equal(reconciled[0].mapping.strategy, 'structured-path');
  const path = reconciled[0].mapping.documentPath;
  assert.equal(path!.kind, 'experience-bullet');
  // path 对应字段值仍包含 quote（target 一致）
  const hit = merged!.experience[0].bullets.find(b => b.text.includes(quote));
  // experience-bullet path 使用 bulletId 定位
  const bullet = merged!.experience[0].bullets.find(b => b.id === (path as { bulletId: string }).bulletId);
  assert.ok(bullet && bullet.text.includes(quote));
  void hit;
});

/* ---------- Test 12 — Merge 后 Suggestion Apply（现有路径） ---------- */
test('T12 merge → locate suggestion → aiApply 走 WorkingResumeDocument', () => {
  let st = createWorkingResumeDocument(makeCurrent());
  const llm = makeLlm();
  st = applyLlmMerge(st, { llmDocument: llm, editedPaths: collectActiveEditedPaths(st) }).state;
  const quote = '设计订单扣款流程。';
  const m = mapSuggestionToDocument(st.currentDocument, { quote });
  assert.equal(m.strategy, 'structured-path');
  const before = st.currentDocument.experience[0].bullets[1].text;
  st = aiApply(st, 's-x', m, quote, '设计订单扣款与对账流程。').state;
  assert.equal(st.currentDocument.experience[0].bullets[1].text, '设计订单扣款与对账流程。');
  assert.notEqual(st.currentDocument.experience[0].bullets[1].text, before);
});

/* ---------- Test 13/14 — merge 后 Undo/Redo 一致 ---------- */
test('T13/T14 merge → manual edit → undo → redo 状态正确', () => {
  let st = createWorkingResumeDocument(makeCurrent());
  st = applyLlmMerge(st, { llmDocument: makeLlm(), editedPaths: new Set() }).state;
  // merge 产生了 auto-merge revision（可撤销增强）
  assert.equal(st.revisions[st.revisions.length - 1].type, 'auto-merge');
  assert.equal(st.currentDocument.basics.website, 'https://github.com/zhangsan');
  // 用户后续编辑
  st = manualEdit(st, { ...st.currentDocument, basics: { ...st.currentDocument.basics, summary: '用户新总结' } });
  assert.equal(st.currentDocument.basics.summary, '用户新总结');
  // Undo → 回到 merged 文档（增强仍在）
  st = undo(st);
  assert.equal(st.currentDocument.basics.summary, makeLlm().basics.summary);
  assert.equal(st.currentDocument.basics.website, 'https://github.com/zhangsan');
  // Undo → 回到 merge 前（rule 基线，增强可回退）
  st = undo(st);
  assert.equal(st.currentDocument.basics.website, '');
  // Redo → 增强恢复
  st = redo(st);
  assert.equal(st.currentDocument.basics.website, 'https://github.com/zhangsan');
  assert.equal(st.currentDocument.basics.summary, makeLlm().basics.summary);
  // Redo → 用户编辑恢复
  st = redo(st);
  assert.equal(st.currentDocument.basics.summary, '用户新总结');
});

/* ---------- Test 15 — Merge 后 suggestion stale ---------- */
test('T15 merge 使 quote 不再匹配 → 派生状态 stale', () => {
  let st = createWorkingResumeDocument(makeCurrent());
  // 建议基于原始 rule 文档
  const s = { id: 's1', mapping: mapSuggestionToDocument(makeCurrent(), { quote: '负责支付系统开发和性能优化，实践经验丰富。' }), improvement: { originalText: '负责支付系统开发和性能优化，实践经验丰富。' } };
  assert.equal(s.mapping.strategy, 'structured-path');
  // merge 未编辑 → summary 被 LLM 采纳替换
  st = applyLlmMerge(st, { llmDocument: makeLlm(), editedPaths: new Set() }).state;
  const d = deriveSuggestionStatus(st, s);
  assert.equal(d.status, 'pending');
  assert.equal(d.stale, true); // quote 已不在 summary 中 → 禁止假装可 Apply
});

/* ---------- Test 16 — Persist / Restore 兼容 ---------- */
test('T16 merge → snapshot JSON 序列化 → 反序列化 roundtrip 一致（持久化兼容）', () => {
  let st = createWorkingResumeDocument(makeCurrent());
  st = applyLlmMerge(st, { llmDocument: makeLlm(), editedPaths: new Set() }).state;
  const snap = {
    sourceTextHash: 'hash',
    originalDocument: JSON.stringify(st.originalDocument),
    document: JSON.stringify(st.currentDocument),
    revisionIndex: st.revisionIndex,
    revisionSeq: st.revisionSeq,
    revisions: JSON.stringify(st.revisions),
  };
  const restored = {
    originalDocument: JSON.parse(snap.originalDocument) as ResumeDocument,
    currentDocument: JSON.parse(snap.document) as ResumeDocument,
    revisions: JSON.parse(snap.revisions) as typeof st.revisions,
  };
  // 关键内容与结构往返一致（可选字段 undefined/null 序列化差异是既有行为，不做严格全等）
  assert.equal(restored.currentDocument.basics.website, 'https://github.com/zhangsan');
  assert.equal(restored.currentDocument.basics.summary, makeLlm().basics.summary);
  assert.equal(restored.currentDocument.experience[0].id, 'e1');
  assert.equal(restored.currentDocument.experience.length, 1);
  assert.equal(restored.currentDocument.projects[0].id, 'p1');
  assert.equal(restored.currentDocument.rawText, '原始简历全文（绝不能被 LLM 文本替换）。');
  assert.equal(restored.revisions.length, st.revisions.length);
  assert.equal(restored.revisions[restored.revisions.length - 1].type, 'auto-merge');
});

/* ---------- 附加：diff / collectActiveEditedPaths 用户编辑区域识别 ---------- */
test('T17a collectActiveEditedPaths：手动编辑字段被识别，合并时该字段不被覆盖', () => {
  let st = createWorkingResumeDocument(makeCurrent());
  // 用户编辑了 「项目经历 name」
  const edited = { ...st.currentDocument, projects: st.currentDocument.projects.map(p => ({ ...p, name: '高可用网关 V2' })) };
  st = manualEdit(st, edited);
  const editedPaths = collectActiveEditedPaths(st);
  const projectNamePath = serializePath({ kind: 'project-field', projectId: 'p1', field: 'name' });
  assert.ok(editedPaths.has(projectNamePath));
  // merge：用户改过的项目名保留
  const merged = mergeLlmIntoWorkingDocument(st.currentDocument, makeLlm(), { editedPaths });
  assert.ok(merged);
  assert.equal(merged!.projects[0].name, '高可用网关 V2');
});

test('T17b diffDocumentFields：不同字段变化被识别，未变字段不产生变化', () => {
  const a = makeCurrent();
  const b = { ...makeCurrent(), basics: { ...makeCurrent().basics, summary: '新总结。' } };
  const changed = diffDocumentFields(a, b);
  assert.ok(changed.has(serializePath({ kind: 'summary' })));
  assert.ok(!changed.has(serializePath({ kind: 'experience-field', experienceId: 'e1', field: 'title' })));
});

test('T17c applyLlmMerge 无变化时不产生 revision（幂等 guard）', () => {
  let st = createWorkingResumeDocument(makeCurrent());
  const r1 = applyLlmMerge(st, { llmDocument: makeLlm(), editedPaths: new Set() });
  assert.equal(r1.changed, true);
  const r2 = applyLlmMerge(r1.state, { llmDocument: makeLlm(), editedPaths: new Set() });
  assert.equal(r2.changed, false);
  assert.equal(r2.state.revisions.length, r1.state.revisions.length);
});