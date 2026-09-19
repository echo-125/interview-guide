/**
 * customSections 结构化块（blocks）辅助：
 * - 把兜底文本按行拆成 paragraph / bullet 块（保留段落、换行、bullet、空行分隔）
 * - 渲染时逐块输出（不再拼成单个 textarea）
 */

import { newId, type ResumeSectionBlock, type ResumeSectionBlockType } from '../../types/resumeDocument.ts';

const BULLET_RE = /^\s*[-–—•·*▪◦]?\s*(.+)$/;

/** 按行把文本拆为 blocks：短行当 bullet（若有列表标记或顿号分隔），长句当 paragraph */
export function textToBlocks(text: string): ResumeSectionBlock[] {
  const lines = text
    .split(/\r?\n/)
    .map(l => l.replace(/^\s*[-–—•·*▪◦]\s+/, '').trim())
    .filter(Boolean);
  const blocks: ResumeSectionBlock[] = [];
  for (const line of lines) {
    // 含列表分隔符（顿号/竖线/分号）或本身就是短句 → bullet；否则 paragraph
    const type: ResumeSectionBlockType = /[、,，|｜;；]/.test(line) || line.length <= 60 ? 'bullet' : 'paragraph';
    blocks.push({ id: newId('blk'), type, text: line });
  }
  return blocks;
}

/** 单条 customSection 的纯文本（用于 coverage 估算与兼容旧消费者） */
export function sectionText(section: { blocks: ResumeSectionBlock[] }): string {
  if (!section?.blocks) return '';
  return section.blocks.map(b => b.text).join('\n');
}

export { BULLET_RE };
export type { ResumeSectionBlock };