import assert from 'node:assert/strict';
import test from 'node:test';

import { addBlock, removeBlock, textToBlocks, updateBlock } from './customSection.ts';
import type { ResumeCustomSection } from '../../types/resumeDocument.ts';

function section(blocks: Array<{ id: string; type: 'paragraph' | 'bullet' | 'text'; text: string }>): ResumeCustomSection {
  return { id: 'cs1', title: '其他内容', blocks };
}

test('textToBlocks：短行/含分隔符 → bullet，长句 → paragraph', () => {
  const blocks = textToBlocks('负责开源社区维护。\n技术栈：Java、Redis、K8s');
  assert.equal(blocks.length, 2);
  assert.equal(blocks[0].type, 'bullet');
  assert.equal(blocks[1].type, 'bullet'); // 含顿号分隔
});

test('addBlock：不可变地追加空块', () => {
  const s = section([]);
  const next = addBlock(s, 'paragraph');
  assert.equal(s.blocks.length, 0); // 原对象不变
  assert.equal(next.blocks.length, 1);
  assert.equal(next.blocks[0].type, 'paragraph');
  assert.equal(next.blocks[0].text, '');
  assert.ok(next.blocks[0].id);
});

test('updateBlock：不可变地更新指定块文本', () => {
  const s = section([{ id: 'b1', type: 'paragraph', text: '旧文本' }]);
  const next = updateBlock(s, 'b1', '新文本');
  assert.equal(s.blocks[0].text, '旧文本'); // 原对象不变
  assert.equal(next.blocks[0].text, '新文本');
});

test('updateBlock：未知 blockId 不影响任何块', () => {
  const s = section([{ id: 'b1', type: 'paragraph', text: '旧文本' }]);
  const next = updateBlock(s, 'not-exist', 'x');
  assert.equal(next.blocks[0].text, '旧文本');
});

test('removeBlock：不可变地删除指定块', () => {
  const s = section([
    { id: 'b1', type: 'paragraph', text: '一' },
    { id: 'b2', type: 'bullet', text: '二' },
  ]);
  const next = removeBlock(s, 'b1');
  assert.equal(s.blocks.length, 2); // 原对象不变
  assert.equal(next.blocks.length, 1);
  assert.equal(next.blocks[0].id, 'b2');
});
