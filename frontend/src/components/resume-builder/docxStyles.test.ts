import assert from 'node:assert/strict';
import test from 'node:test';

import { DOCX_STYLES } from './templates/docxStyles.ts';

test('三模板 DOCX 样式参数各不相同（导出跟随模板生效）', () => {
  assert.notEqual(DOCX_STYLES.developer.nameAlign, DOCX_STYLES.ats.nameAlign); // center vs left
  assert.notEqual(DOCX_STYLES.developer.nameSize, DOCX_STYLES.ats.nameSize); // 52 vs 44
  assert.notEqual(DOCX_STYLES.developer.titleColor, DOCX_STYLES.classic.titleColor);
  assert.equal(DOCX_STYLES.developer.sectionBorder, true);
  assert.equal(DOCX_STYLES.ats.sectionBorder, false); // 极简模板关闭下边框
});

test('三种模板 key 完整且字号为正数', () => {
  for (const id of ['developer', 'classic', 'ats'] as const) {
    assert.ok(DOCX_STYLES[id]);
    assert.ok(DOCX_STYLES[id].nameSize > 0);
    assert.ok(DOCX_STYLES[id].titleSize > 0);
  }
});
