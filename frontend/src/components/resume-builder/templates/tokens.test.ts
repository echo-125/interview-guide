import assert from 'node:assert/strict';
import test from 'node:test';

import {
  PAGE,
  TYPE,
  TEMPLATE_NAME_PX,
  pxToPt,
  ptToHalfPoint,
  pxToHalfPoint,
  ptToTwip,
  pxToTwip,
} from './tokens.ts';

test('px → pt 换算（1px = 0.75pt，保留 0.5pt）', () => {
  assert.equal(pxToPt(30), 22.5); // 姓名（developer 30px）
  assert.equal(pxToPt(15.5), 11.5); // 公司名
  assert.equal(pxToPt(14.5), 11); // 职位副标题
  assert.equal(pxToPt(14), 10.5); // 正文
  assert.equal(pxToPt(12.5), 9.5); // 元信息
});

test('px → half-points：DOCX 字号 = px × 1.5', () => {
  assert.equal(pxToHalfPoint(30), 45); // developer 姓名 22.5pt = 45 半磅
  assert.equal(pxToHalfPoint(32), 48); // classic 姓名 = 48 半磅（与历史值一致）
  assert.equal(pxToHalfPoint(28), 42); // ats 姓名
  assert.equal(pxToHalfPoint(14), 21); // 正文 10.5pt
  assert.equal(ptToHalfPoint(22.5), 45);
});

test('px → twip：DOCX 页边距 = px × 15', () => {
  assert.equal(pxToTwip(42), 630); // developer 左右边距
  assert.equal(pxToTwip(36), 540); // 上下边距
  assert.equal(pxToTwip(44), 660); // classic 左右边距
  assert.equal(pxToTwip(40), 600); // ats 左右边距
  assert.equal(ptToTwip(22.5), 450);
});

test('三模板姓名字号各不相同（模板差异保留）', () => {
  assert.notEqual(TEMPLATE_NAME_PX.developer, TEMPLATE_NAME_PX.classic);
  assert.notEqual(TEMPLATE_NAME_PX.developer, TEMPLATE_NAME_PX.ats);
});

test('统一令牌自洽：A4 页与字阶为正数且正文小于标题', () => {
  assert.ok(PAGE.widthPx > 0 && PAGE.heightPx > 0);
  assert.ok(TYPE.section > TYPE.body);
  assert.ok(TYPE.company > TYPE.body);
  assert.ok(TYPE.body > TYPE.meta);
});