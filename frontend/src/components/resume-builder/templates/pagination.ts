/**
 * 分页友好的「块」模型。
 *
 * 模板把内容拆成一系列 PageBlock 交给 A4Preview 做块级分页：
 * - 每块自带内边距（不依赖跨块 margin），保证测量高度与展示一致；
 * - avoid='after' 的块（如 section 标题、条目头）尽量与下一块同页，避免孤立标题；
 * - 正文/bullet 块允许跨页断行（块内部为整个段落/单条，绝不把一个词切开）。
 */

import type { ReactNode } from 'react';

export interface PageBlock {
  /** 稳定 key */
  key: string;
  node: ReactNode;
  /** 分页提示 */
  avoid?: 'after' | 'none';
}

/**
 * 贪心分页打包：把块依次放入高度为 pageH 的页中。
 * - 当前块放得下则放置；
 * - avoid='after' 的块若放在本页会导致它成为页尾（孤立标题），则推到下一页；
 * - 块放不下时换页；单个块高于一页时置入并裁剪（尽量不发生）。
 */
export function packBlocks(blocks: PageBlock[], heights: number[], pageH: number): PageBlock[][] {
  const pages: PageBlock[][] = [];
  let cur: PageBlock[] = [];
  let used = 0;

  const flush = () => {
    if (cur.length > 0) {
      pages.push(cur);
      cur = [];
      used = 0;
    }
  };

  for (let i = 0; i < blocks.length; i++) {
    const h = heights[i];
    const nextH = i + 1 < blocks.length ? heights[i + 1] : 0;
    const avoidAfter = blocks[i].avoid === 'after';

    if (used + h <= pageH) {
      // 若 avoidAfter 且放进来会使其成为页尾（下一块放不下）→ 推到下一页
      const wouldBeLast = used + h + nextH > pageH;
      if (avoidAfter && nextH > 0 && wouldBeLast && used > 0) {
        flush();
      }
      cur.push(blocks[i]);
      used += h;
    } else {
      flush();
      // 单独放置该块；若其高于一页，则按整页高度占用（极少发生，内部会被裁剪）
      cur.push(blocks[i]);
      used = Math.min(h, pageH);
    }
  }
  flush();
  return pages.length > 0 ? pages : [[]];
}