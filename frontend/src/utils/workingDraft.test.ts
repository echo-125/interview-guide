import assert from 'node:assert/strict';
import test from 'node:test';

import {
  applySingleRewrite,
  buildWorkingSegments,
  buildWorkingText,
  locateUniqueQuote,
  undoAllRewrites,
  undoRewrite,
} from './workingDraft.ts';

test('1. 唯一 quote → 成功应用', () => {
  const result = applySingleRewrite('负责订单系统开发与维护。', [], {
    suggestionId: 's1',
    quote: '负责订单系统开发',
    rewrite: '负责订单系统开发，P99 延迟降低 60%',
  });
  assert.equal(result.status, 'applied');
  if (result.status !== 'applied') return;
  assert.equal(result.record.start, 0);
  assert.equal(result.record.end, '负责订单系统开发'.length);
  assert.equal(result.workingText, '负责订单系统开发，P99 延迟降低 60%与维护。');
  assert.equal(result.records.length, 1);
});

test('2. whitespace quote → 成功应用（只差空白）', () => {
  const result = applySingleRewrite('负责\n订单系统 开发与维护。', [], {
    suggestionId: 's1',
    quote: '负责 订单系统 开发',
    rewrite: '负责订单系统开发（优化）',
  });
  assert.equal(result.status, 'applied');
  if (result.status !== 'applied') return;
  assert.equal(result.workingText, '负责订单系统开发（优化）与维护。');
});

test('3. quote 不存在 → unavailable (not-found)', () => {
  const result = applySingleRewrite('原文第一段。', [], {
    suggestionId: 's1',
    quote: '原文中不存在的句子',
    rewrite: '改写',
  });
  assert.equal(result.status, 'unavailable');
  if (result.status !== 'unavailable') return;
  assert.equal(result.reason, 'not-found');
  assert.equal(result.records.length, 0);
  assert.equal(result.workingText, '原文第一段。'); // 失败不改动
});

test('4. quote 出现两次 → 不允许自动应用 (ambiguous)', () => {
  const text = '项目 A：负责系统性能优化。项目 B：负责系统性能优化。';
  const result = applySingleRewrite(text, [], {
    suggestionId: 's1',
    quote: '负责系统性能优化',
    rewrite: '负责系统性能优化，并降低 P99 延迟',
  });
  assert.equal(result.status, 'unavailable');
  if (result.status !== 'unavailable') return;
  assert.equal(result.reason, 'ambiguous');
  assert.equal(result.workingText, text);
});

test('4b. 重复 quote 但有唯一上下文消歧 → 只改目标位置', () => {
  const text = '项目 A：负责系统性能优化。项目 B：负责系统性能优化。';
  const result = applySingleRewrite(text, [], {
    suggestionId: 's1',
    quote: '负责系统性能优化',
    rewrite: '负责系统性能优化（B 项目优化）',
    prefix: '项目 B',
  });
  assert.equal(result.status, 'applied');
  if (result.status !== 'applied') return;
  // 只替换了项目 B 那一处，项目 A 保持原文
  assert.equal(result.workingText, '项目 A：负责系统性能优化。项目 B：负责系统性能优化（B 项目优化）。');
  assert.equal(result.records.length, 1);
});

test('5. 长 quote + 短 quote 重叠 → 长 quote 优先，短 quote 被拒 (conflict)', () => {
  const text = '负责订单系统开发';
  const long = applySingleRewrite(text, [], {
    suggestionId: 'long',
    quote: '负责订单系统开发',
    rewrite: '负责订单系统开发（长句改写）',
  });
  assert.equal(long.status, 'applied');
  if (long.status !== 'applied') return;

  const short = applySingleRewrite(text, long.records, {
    suggestionId: 'short',
    quote: '订单系统',
    rewrite: '订单系统【短】',
  });
  assert.equal(short.status, 'unavailable');
  if (short.status !== 'unavailable') return;
  assert.equal(short.reason, 'conflict');
  assert.equal(short.workingText, '负责订单系统开发（长句改写）'); // 长句改写保留
});

test('6. 已应用 A + 已应用 B → workingText 同时包含 A/B', () => {
  const text = '第一段负责前端开发。第二段负责后端开发。';
  const a = applySingleRewrite(text, [], {
    suggestionId: 'A',
    quote: '负责前端开发',
    rewrite: '负责前端开发（A 改写）',
  });
  assert.equal(a.status, 'applied');
  if (a.status !== 'applied') return;

  const b = applySingleRewrite(text, a.records, {
    suggestionId: 'B',
    quote: '负责后端开发',
    rewrite: '负责后端开发（B 改写）',
  });
  assert.equal(b.status, 'applied');
  if (b.status !== 'applied') return;

  assert.equal(b.workingText, '第一段负责前端开发（A 改写）。第二段负责后端开发（B 改写）。');
  assert.equal(b.records.length, 2);
});

test('7. 撤销 A → B 仍然存在', () => {
  const text = '第一段负责前端开发。第二段负责后端开发。';
  const a = applySingleRewrite(text, [], {
    suggestionId: 'A',
    quote: '负责前端开发',
    rewrite: '负责前端开发（A 改写）',
  });
  const b = a.status === 'applied'
    ? applySingleRewrite(text, a.records, {
        suggestionId: 'B',
        quote: '负责后端开发',
        rewrite: '负责后端开发（B 改写）',
      })
    : null;
  assert.equal(b?.status, 'applied');
  if (b?.status !== 'applied') return;

  const afterUndoA = undoRewrite(b.records, 'A');
  const workingText = buildWorkingText(text, afterUndoA);
  // A 恢复原文，B 仍然保留
  assert.equal(workingText, '第一段负责前端开发。第二段负责后端开发（B 改写）。');
  assert.equal(afterUndoA.length, 1);
  assert.equal(afterUndoA[0].suggestionId, 'B');
});

test('8. 撤销全部 → 恢复 originalText', () => {
  const text = '第一段负责前端开发。第二段负责后端开发。';
  const a = applySingleRewrite(text, [], {
    suggestionId: 'A',
    quote: '负责前端开发',
    rewrite: '负责前端开发（A 改写）',
  });
  const b = a.status === 'applied'
    ? applySingleRewrite(text, a.records, {
        suggestionId: 'B',
        quote: '负责后端开发',
        rewrite: '负责后端开发（B 改写）',
      })
    : null;
  if (b?.status !== 'applied') return;

  const cleared = undoAllRewrites();
  assert.equal(cleared.length, 0);
  assert.equal(buildWorkingText(text, cleared), text);
});

test('9. 多次 Apply 不应重复替换（同一建议只替换一次）', () => {
  const text = '负责订单系统开发';
  const first = applySingleRewrite(text, [], {
    suggestionId: 's1',
    quote: '负责订单系统开发',
    rewrite: '负责订单系统开发（优化）',
  });
  assert.equal(first.status, 'applied');
  if (first.status !== 'applied') return;

  // 再次对该记录集合 apply 同一条（比如 React 状态未及时刷新时）
  const second = applySingleRewrite(text, first.records, {
    suggestionId: 's1',
    quote: '负责订单系统开发',
    rewrite: '负责订单系统开发（优化）',
  });
  assert.equal(second.status, 'unchanged');
  assert.equal(second.records.length, 1);
  assert.equal(second.workingText, '负责订单系统开发（优化）'); // 不叠加、不重复
});

test('10. Apply 后再点击 Apply → 不重复执行（幂等）', () => {
  const text = '负责订单系统开发';
  const result = applySingleRewrite(text, [], {
    suggestionId: 's1',
    quote: '负责订单系统开发',
    rewrite: '负责订单系统开发（优化）',
  });
  assert.equal(result.status, 'applied');
  if (result.status !== 'applied') return;

  // 基于最新 records 再次执行（模拟用户再次点击同一按钮）
  const again = applySingleRewrite(text, result.records, {
    suggestionId: 's1',
    quote: '负责订单系统开发',
    rewrite: '负责订单系统开发（优化）',
  });
  assert.equal(again.status, 'unchanged');
  // 替换后的文本里如果再次替换会翻倍，这里断言没有翻倍
  assert.ok(!again.workingText.includes('（优化）（优化）'));
  assert.equal(again.workingText.match(/（优化）/g)?.length, 1);
});

test('locateUniqueQuote：空 quote → not-found', () => {
  assert.deepEqual(locateUniqueQuote('原文', ''), { ok: false, reason: 'not-found' });
});

test('buildWorkingSegments 与 buildWorkingText 结果一致', () => {
  const text = '第一段负责前端开发。第二段负责后端开发。';
  const a = applySingleRewrite(text, [], {
    suggestionId: 'A',
    quote: '负责前端开发',
    rewrite: '负责前端开发（A 改写）',
  });
  const b = a.status === 'applied'
    ? applySingleRewrite(text, a.records, {
        suggestionId: 'B',
        quote: '负责后端开发',
        rewrite: '负责后端开发（B 改写）',
      })
    : null;
  if (b?.status !== 'applied') return;

  const segments = buildWorkingSegments(text, b.records);
  const rendered = segments
    .map(seg => (seg.type === 'plain' ? seg.text : seg.rewrite))
    .join('');
  assert.equal(rendered, b.workingText);

  const changed = segments.filter(s => s.type === 'changed');
  assert.equal(changed.length, 2);
  const [first, second] = changed as Array<{ type: 'changed'; newStart: number; newEnd: number; rewrite: string }>;
  // 新文本区间必须真实落在 workingText 上
  assert.equal(b.workingText.slice(first.newStart, first.newEnd), first.rewrite);
  assert.equal(b.workingText.slice(second.newStart, second.newEnd), second.rewrite);
});
