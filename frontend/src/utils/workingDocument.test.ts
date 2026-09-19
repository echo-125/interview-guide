import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applyAISuggestion,
  checkApplyAvailability,
  countManualEdits,
  createWorkingDocument,
  deriveAppliedSuggestions,
  manualEditDocument,
  redoDocument,
  revertSuggestion,
  undoAllAI,
  undoDocument,
  wasEverApplied,
  type WorkingDocument,
} from './workingDocument.ts';

const ORIGINAL =
  '第一段负责前端开发。第二段负责后端开发。第三段负责性能优化。';

const A = { suggestionId: 'A', quote: '负责前端开发', rewrite: '负责前端开发（A 改写）' };
const B = { suggestionId: 'B', quote: '负责后端开发', rewrite: '负责后端开发（B 改写）' };
const C = { suggestionId: 'C', quote: '负责性能优化', rewrite: '负责性能优化（C 改写）' };

function applyA(doc: WorkingDocument): WorkingDocument {
  const r = applyAISuggestion(doc, A);
  assert.equal(r.status, 'applied');
  return (r as { doc: WorkingDocument }).doc;
}

test('1. 初始化 currentText = originalText，且 originalText 不可变', () => {
  const doc = createWorkingDocument(ORIGINAL);
  assert.equal(doc.currentText, ORIGINAL);
  assert.equal(doc.revisionIndex, -1);
  assert.deepEqual(doc.revisions, []);
  assert.deepEqual(doc.appliedSuggestions, {});
});

test('2. Apply A → currentText 含改写、appliedSuggestions 记录 A、产生 ai-apply revision', () => {
  const doc = applyA(createWorkingDocument(ORIGINAL));
  assert.ok(doc.currentText.includes('（A 改写）'));
  assert.ok(doc.appliedSuggestions.A);
  assert.equal(doc.appliedSuggestions.A.rewrite, A.rewrite);
  assert.equal(doc.revisionIndex, 0);
  assert.equal(doc.revisions[0].type, 'ai-apply');
  assert.equal(doc.revisions[0].suggestionId, 'A');
});

test('3. Manual Edit B → currentText 为编辑后文本、产生 manual-edit revision', () => {
  const doc = applyA(createWorkingDocument(ORIGINAL));
  const edited = doc.currentText.replace('（A 改写）', '（A 改写）手工再补充');
  const { doc: next, changed } = manualEditDocument(doc, edited);
  assert.equal(changed, true);
  assert.equal(next.currentText, edited);
  assert.equal(next.revisions[next.revisionIndex].type, 'manual-edit');
  assert.equal(countManualEdits(next), 1);
});

test('4. Apply C → appliedSuggestions 同时包含 A 与 C', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const r = applyAISuggestion(doc, C);
  assert.equal(r.status, 'applied');
  doc = (r as { doc: WorkingDocument }).doc;
  assert.ok(doc.appliedSuggestions.A);
  assert.ok(doc.appliedSuggestions.C);
});

test('5. Undo C（文档级）→ C 消失、A 仍在', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const c = applyAISuggestion(doc, C);
  doc = (c as { doc: WorkingDocument }).doc;
  const { doc: next } = undoDocument(doc);
  assert.ok(!next.currentText.includes('（C 改写）'));
  assert.ok(next.currentText.includes('（A 改写）'));
  assert.ok(next.appliedSuggestions.A);
  assert.ok(!next.appliedSuggestions.C);
});

test('6. Undo B（文档级）→ B 消失、A 仍在', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const afterA = doc.currentText;
  const edited = afterA.replace('（A 改写）', '（A 改写）手工再补充');
  const m = manualEditDocument(doc, edited);
  doc = m.doc;
  const { doc: next } = undoDocument(doc);
  // 撤销 manual-edit 后回到 Apply A 之后的文本
  assert.equal(next.currentText, afterA);
  assert.ok(next.appliedSuggestions.A);
});

test('7. Undo A（文档级）→ 回原文、applied 清空', () => {
  const doc = applyA(createWorkingDocument(ORIGINAL));
  const { doc: next } = undoDocument(doc);
  assert.equal(next.currentText, ORIGINAL);
  assert.deepEqual(next.appliedSuggestions, {});
});

test('8. Redo A（文档级）→ A 恢复', () => {
  const doc = applyA(createWorkingDocument(ORIGINAL));
  const undone = undoDocument(doc).doc;
  const { doc: next, changed } = redoDocument(undone);
  assert.equal(changed, true);
  assert.ok(next.currentText.includes('（A 改写）'));
  assert.ok(next.appliedSuggestions.A);
});

test('9. Apply A 后重复 Apply A → unchanged、文本不重复', () => {
  const doc = applyA(createWorkingDocument(ORIGINAL));
  const again = applyAISuggestion(doc, A);
  assert.equal(again.status, 'unchanged');
  assert.equal(doc.currentText.match(/（A 改写）/g)?.length, 1);
});

test('10. AI 状态与当前文本解耦：手动改掉 AI 区域后状态仍为 applied', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  // 用户手动改掉了 A 产生的文本
  const edited = doc.currentText.replace('（A 改写）', '完全改写成别的内容');
  const m = manualEditDocument(doc, edited);
  doc = m.doc;
  // 状态仍为 applied（不通过文本推断状态）
  assert.ok(doc.appliedSuggestions.A);
  assert.equal(wasEverApplied(doc, 'A'), true);
});

test('11. AI Apply + Manual Edit 共存', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const edited = doc.currentText.replace('第二段', '第二段【人工补充】');
  const m = manualEditDocument(doc, edited);
  doc = m.doc;
  assert.ok(doc.currentText.includes('（A 改写）'));
  assert.ok(doc.currentText.includes('【人工补充】'));
});

test('12. 用户手动修改后撤销 AI 不得丢失用户修改（blocked）', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const edited = doc.currentText.replace('（A 改写）', '用户自己的重写内容');
  const m = manualEditDocument(doc, edited);
  doc = m.doc;

  const result = revertSuggestion(doc, 'A');
  assert.equal(result.status, 'blocked');
  if (result.status !== 'blocked') return;
  assert.equal(result.reason, 'region-modified');
  // 用户文本保留，未被覆盖
  assert.ok(result.doc.currentText.includes('用户自己的重写内容'));
  assert.ok(result.doc.appliedSuggestions.A);
});

test('12b. 未手动修改区域 → 建议级撤销可安全执行', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const edited = doc.currentText.replace('第二段', '第二段【人工补充】');
  doc = manualEditDocument(doc, edited).doc;

  const result = revertSuggestion(doc, 'A');
  assert.equal(result.status, 'reverted');
  if (result.status !== 'reverted') return;
  assert.ok(result.doc.currentText.includes('负责前端开发')); // 恢复为原句
  assert.ok(!result.doc.currentText.includes('（A 改写）'));
  assert.ok(!result.doc.appliedSuggestions.A);
  // 人工修改不受影响
  assert.ok(result.doc.currentText.includes('【人工补充】'));
  // 产生 ai-revert revision
  assert.equal(result.doc.revisions[result.doc.revisionIndex].type, 'ai-revert');
});

test('13. 多次 Undo / Redo：混合序列逐步回退再恢复', () => {
  // A apply → B manual → C apply
  let doc = applyA(createWorkingDocument(ORIGINAL));
  doc = manualEditDocument(doc, doc.currentText.replace('第二段', '第二段【人工】')).doc;
  const c = applyAISuggestion(doc, C);
  doc = (c as { doc: WorkingDocument }).doc;
  assert.ok(doc.currentText.includes('（C 改写）'));

  // Undo C
  doc = undoDocument(doc).doc;
  assert.ok(!doc.currentText.includes('（C 改写）'));
  assert.ok(doc.currentText.includes('【人工】'));
  assert.ok(doc.appliedSuggestions.A);

  // Undo B（人工）
  doc = undoDocument(doc).doc;
  assert.ok(!doc.currentText.includes('【人工】'));
  assert.ok(doc.currentText.includes('（A 改写）'));

  // Undo A
  doc = undoDocument(doc).doc;
  assert.equal(doc.currentText, ORIGINAL);
  assert.deepEqual(doc.appliedSuggestions, {});

  // Redo A
  doc = redoDocument(doc).doc;
  assert.ok(doc.currentText.includes('（A 改写）'));
  // Redo B
  doc = redoDocument(doc).doc;
  assert.ok(doc.currentText.includes('【人工】'));
  // Redo C
  doc = redoDocument(doc).doc;
  assert.ok(doc.currentText.includes('（C 改写）'));
  assert.ok(doc.appliedSuggestions.A && doc.appliedSuggestions.C);
  // 到头后 redo 无效
  const atEnd = redoDocument(doc);
  assert.equal(atEnd.changed, false);
});

test('14. Undo 后重新编辑 → Redo 分支正确清空', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  doc = manualEditDocument(doc, doc.currentText.replace('第二段', '第二段【旧人工】')).doc;

  const undone = undoDocument(doc).doc; // 撤销人工编辑
  assert.ok(!undone.currentText.includes('【旧人工】'));

  // 重新编辑（新分支）
  const edited = undone.currentText.replace('第二段', '第二段【新人工】');
  const { doc: next } = manualEditDocument(undone, edited);
  assert.ok(next.currentText.includes('【新人工】'));
  assert.ok(!next.currentText.includes('【旧人工】'));
  // Redo 分支已被清空：无法 redo 到旧人工
  const redo = redoDocument(next);
  assert.equal(redo.changed, false);
});

test('15. 连续输入合并为一条 manual-edit（撤销整批回退）', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  // 模拟连续击键：在文末逐字符追加
  let d = doc;
  for (const ch of ['好', '的', '！']) {
    d = manualEditDocument(d, d.currentText + ch).doc;
  }
  assert.ok(d.currentText.endsWith('好的！'));
  // 最终只有一条 manual-edit revision
  const manualCount = d.revisions.filter(r => r.type === 'manual-edit').length;
  assert.equal(manualCount, 1);
  // 一次撤销即可回到 Apply A 之后的文本
  const undone = undoDocument(d).doc;
  assert.equal(undone.currentText, applyA(createWorkingDocument(ORIGINAL)).currentText);
});

test('16. Working Draft 与 originalText 隔离：编辑不影响原文常量', () => {
  const original = '原文内容。';
  const doc = createWorkingDocument(original);
  const edited = doc.currentText.replace('原文内容', '改过的内容');
  const next = manualEditDocument(doc, edited).doc;
  assert.notEqual(next.currentText, original);
  assert.equal(next.originalText, original);
  // 文档级撤销全部回到 originalText
  let d = next;
  while (d.revisionIndex >= 0) d = undoDocument(d).doc;
  assert.equal(d.currentText, original);
});

test('undoAllAI：撤销全部 AI 修改、保留人工修改', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const b = applyAISuggestion(doc, B);
  doc = (b as { doc: WorkingDocument }).doc;
  doc = manualEditDocument(doc, doc.currentText.replace('第二段', '第二段【人工】')).doc;

  const result = undoAllAI(doc);
  assert.equal(result.reverted, 2);
  assert.equal(result.blocked.length, 0);
  assert.deepEqual(result.doc.appliedSuggestions, {});
  assert.ok(!result.doc.currentText.includes('（A 改写）'));
  assert.ok(!result.doc.currentText.includes('（B 改写）'));
  assert.ok(result.doc.currentText.includes('【人工】')); // 人工修改保留
});

test('undoAllAI：被手动修改的区域不被撤销（blocked 且保留）', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  doc = manualEditDocument(doc, doc.currentText.replace('（A 改写）', '用户重写')).doc;
  const result = undoAllAI(doc);
  assert.equal(result.reverted, 0);
  assert.equal(result.blocked.length, 1);
  assert.equal(result.blocked[0].suggestionId, 'A');
  assert.ok(result.doc.currentText.includes('用户重写'));
  assert.ok(result.doc.appliedSuggestions.A);
});

test('checkApplyAvailability：唯一 quote 可应用；重复 quote 不可用', () => {
  const doc = createWorkingDocument('项目A：负责系统优化。项目B：负责系统优化。');
  assert.deepEqual(checkApplyAvailability(doc, { quote: '负责系统优化', rewrite: 'x' }), {
    ok: false,
    reason: 'ambiguous',
  });
  const doc2 = createWorkingDocument('只出现一次的句子在这里。');
  assert.deepEqual(checkApplyAvailability(doc2, { quote: '只出现一次的句子', rewrite: 'x' }), { ok: true });
});

test('apply 与已应用 rewrite 区间重叠 → conflict', () => {
  let doc = applyA(createWorkingDocument('第一段负责前端开发。'));
  // 短 quote 恰好是已应用 rewrite 的子串 → conflict
  const r = applyAISuggestion(doc, { suggestionId: 'X', quote: '前端开发', rewrite: '【短句】' });
  assert.equal(r.status, 'unavailable');
  if (r.status === 'unavailable') assert.equal(r.reason, 'conflict');
});

test('suggestion 级撤销产生 ai-revert revision，且 derive 派生一致', () => {
  let doc = applyA(createWorkingDocument(ORIGINAL));
  const result = revertSuggestion(doc, 'A');
  assert.equal(result.status, 'reverted');
  if (result.status !== 'reverted') return;
  const next = result.doc;
  assert.equal(next.revisions[next.revisionIndex].type, 'ai-revert');
  // 重新从历史派生，applied 应该为空（A 已 revert）
  assert.deepEqual(deriveAppliedSuggestions(next.revisions, next.revisionIndex), {});
  // 再次 revert → unchanged（未采用）
  const again = revertSuggestion(next, 'A');
  assert.equal(again.status, 'unchanged');
});
