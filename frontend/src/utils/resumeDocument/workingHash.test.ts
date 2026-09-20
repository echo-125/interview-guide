import assert from 'node:assert/strict';
import test from 'node:test';

import { hashText } from './workingHash.ts';

test('hashText：相同输入 → 相同哈希', () => {
  const text = '李阳\n7 年 Java 后端经验。';
  assert.equal(hashText(text), hashText(text));
});

test('hashText：不同输入 → 不同哈希（工作区过期判定依赖）', () => {
  assert.notEqual(hashText('原文一'), hashText('原文二'));
  assert.notEqual(hashText('简历内容'), hashText('简历内容 ')); // 尾随空格也应区分
});

test('hashText：空串可哈希且稳定', () => {
  assert.equal(hashText(''), hashText(''));
  assert.match(hashText(''), /^[0-9a-f]{8}$/);
});
