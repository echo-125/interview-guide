/**
 * A4 多页实时预览：一页一页显示（不把多页压缩成一张长图，也不硬切词）。
 *
 * block 模式（推荐）：模板产出 PageBlock[]，先隐藏测量各块高度，再按 A4 高度贪心打包成 N 页。
 * 页断点必然落在「块」的边界（段落 / bullet / 条目头之间），因此不会把一个词从中间切开，
 * 标题也尽量与其下一条目同页。
 *
 * Phase 5D：页内边距按模板参数化（pagePadding），pageH = A4高 - 上边距 - 下边距，
 * 与 PDF（react-pdf padding）/ DOCX（页边距 twip）使用同一份 tokens 换算，三端几何基础一致。
 *
 * children 兜底模式：对未接入块模型的模板退化为「整树测量 + translateY 切片」（保持原行为）。
 */

import { useEffect, useRef, useState, type ReactNode } from 'react';
import type { PageBlock } from './templates/pagination';
import { packBlocks } from './templates/pagination';
import { PAGE } from './templates/tokens';

export const A4_WIDTH_PX = PAGE.widthPx;
export const A4_HEIGHT_PX = PAGE.heightPx;

/** 页内边距（px）；bottom 缺省取 topPx */
export interface A4PagePadding {
  topPx: number;
  bottomPx?: number;
  xPx: number;
}

const DEFAULT_PADDING: A4PagePadding = { topPx: 36, bottomPx: 36, xPx: 42 };

interface A4PreviewProps {
  children: ReactNode;
  /** 模板分页块（可选）；提供时用块级分页，否则退化为切片分页 */
  blocks?: PageBlock[];
  /** 模板页内边距（与 PDF/DOCX 同一 tokens 来源） */
  pagePadding?: A4PagePadding;
  viewportWidth?: number;
}

/** 隐藏测量：把所有块按列排布（flex 不合并 margin），读出每块真实高度 */
function Measure({ blocks, pad }: { blocks: PageBlock[]; pad: A4PagePadding }) {
  return (
    <div aria-hidden style={{ position: 'absolute', visibility: 'hidden', width: A4_WIDTH_PX }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: A4_WIDTH_PX,
          padding: `${pad.topPx}px ${pad.xPx}px ${pad.bottomPx ?? pad.topPx}px`,
          boxSizing: 'border-box',
        }}
      >
        {blocks.map((bk) => (
          <div key={bk.key} data-block-key={bk.key}>
            {bk.node}
          </div>
        ))}
      </div>
    </div>
  );
}

export function A4Preview({ children, blocks, pagePadding, viewportWidth = 620 }: A4PreviewProps) {
  const pad = pagePadding ?? DEFAULT_PADDING;
  const padBottom = pad.bottomPx ?? pad.topPx;
  // 自适应容器宽度：A4 纸按实际容器宽度缩放，避免固定 620px 在窄中栏里水平溢出/截断
  const sheetAreaRef = useRef<HTMLDivElement>(null);
  const [areaW, setAreaW] = useState(viewportWidth);
  useEffect(() => {
    const el = sheetAreaRef.current;
    if (!el) return;
    // 容器 p-6 左右 padding 各 24px，缩放基准取内容可用宽度
    const update = () => setAreaW(Math.max(320, Math.floor(el.clientWidth) - 48));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const scale = Math.min(1, areaW / A4_WIDTH_PX);
  const measureRef = useRef<HTMLDivElement>(null);
  // 兜底（children）模式的分页数
  const [fallbackCount, setFallbackCount] = useState(1);
  // block 模式的打包结果
  const [packedBlocks, setPackedBlocks] = useState<PageBlock[][] | null>(null);

  const useBlocks = Array.isArray(blocks) && blocks.length > 0;

  // children 兜底：测量隐藏测量 div 的实际高度 → 页数
  // 注意不能用容器 scrollHeight：测量 div 为 position:absolute（脱离文档流），
  // 父容器高度不包含它，会导致页数恒为 1（内容被裁成单页）。改为读 hidden 测量子树高度。
  useEffect(() => {
    if (useBlocks) return;
    const el = measureRef.current?.firstElementChild as HTMLElement | null;
    if (!el) return;
    const update = () => setFallbackCount(Math.max(1, Math.ceil(el.getBoundingClientRect().height / A4_HEIGHT_PX)));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [useBlocks, children]);

  // block 模式：测量各块高度 → 贪心打包
  useEffect(() => {
    if (!useBlocks || !blocks) return;
    const root = measureRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-block-key]'));
    if (items.length !== blocks.length) return;
    const heights = items.map((el) => el.getBoundingClientRect().height);
    // contentHeight = pageHeight - topMargin - bottomMargin（Phase 5D：引用统一页面令牌）
    setPackedBlocks(packBlocks(blocks, heights, A4_HEIGHT_PX - pad.topPx - padBottom));
  }, [useBlocks, blocks, pad.topPx, padBottom]);

  const pages = useBlocks ? (packedBlocks ?? []) : Array.from({ length: fallbackCount }, (_, i) => i);

  return (
    <div ref={sheetAreaRef} className="flex-1 min-h-0 bg-slate-200 dark:bg-slate-900 overflow-auto" style={{ height: '100%' }}>
      {/* 测量容器 */}
      <div ref={measureRef}>
        {useBlocks && blocks ? <Measure blocks={blocks} pad={pad} /> : <div aria-hidden style={{ position: 'absolute', visibility: 'hidden', width: A4_WIDTH_PX }} data-measure>{children}</div>}
      </div>

      {/* 分页展示：占满容器宽度并水平居中每张 A4 纸，避免纸张靠左、右侧留白 */}
      <div className="w-full flex flex-col items-center gap-8 p-6">
        {pages.map((page, pi) => (
          <div key={pi} className="shadow-xl flex-shrink-0" style={{
            background: 'white',
            width: A4_WIDTH_PX * scale,
            height: A4_HEIGHT_PX * scale,
            overflow: 'hidden',
          }}>
            <div
              data-a4-sheet
              style={{
                width: A4_WIDTH_PX,
                height: A4_HEIGHT_PX,
                overflow: 'hidden',
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            >
              {useBlocks && blocks ? (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: A4_WIDTH_PX,
                    padding: `${pad.topPx}px ${pad.xPx}px ${padBottom}px`,
                    boxSizing: 'border-box',
                    fontFamily: "-apple-system,'Segoe UI',Roboto,'Noto Sans SC','Microsoft YaHei',sans-serif",
                  }}
                >
                  {(page as PageBlock[]).map((bk) => (
                    <div key={bk.key} data-block-key={bk.key}>
                      {bk.node}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ transform: `translateY(${-pi * A4_HEIGHT_PX}px)` }}>{children}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}