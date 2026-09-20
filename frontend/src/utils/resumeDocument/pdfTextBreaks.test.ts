import assert from 'node:assert/strict';
import test from 'node:test';

import { insertCjkBreaks } from './pdfTextBreaks.ts';

test('CJK 文本逐字插入零宽空格（提供断行机会）', () => {
  const r = insertCjkBreaks('热爱编程');
  assert.equal(r, '热\u200B爱\u200B编\u200B程\u200B');
});

test('英文单词内部保持完整（token 不被拆）', () => {
  const r = insertCjkBreaks('基于SpringBoot与Mybatis构建');
  // 字母段内无零宽空格
  assert.ok(!/S\u200Bpring/.test(r));
  assert.ok(!/My\u200Bbatis/.test(r));
  // 中文与英文边界处有断行机会
  assert.ok(r.includes('于\u200BSpringBoot'));
});

test('全角标点后插入断行机会，空白与已有零宽空格不重复插入', () => {
  const r = insertCjkBreaks('高效、易维护的代码');
  assert.ok(r.includes('、\u200B'));
  assert.ok(!r.includes('\u200B\u200B'), '不应出现连续零宽空格');
});

test('空串与纯 ASCII 原样返回', () => {
  assert.equal(insertCjkBreaks(''), '');
  assert.equal(insertCjkBreaks('Java 2021.06'), 'Java 2021.06');
});