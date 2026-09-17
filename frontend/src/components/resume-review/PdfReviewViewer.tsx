import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AlertCircle, Download, Loader2, ZoomIn, ZoomOut } from 'lucide-react';
import { loadPdfJs } from '../../utils/pdfjsLoader';
import { locateQuoteInSpanStream } from '../../utils/anchorMatcher';
import type { HighlightRect, ReviewSuggestion, TextSpanNodeInfo } from '../../types/review';
// 关键：PDF.js 文本层必须配合官方 viewer 的 CSS，
// 否则 <span> 会退化成普通行内文本流，getClientRects() 返回的是「文本流位置」而非「PDF 页面位置」。
import './pdfReviewTextLayer.css';

interface PdfReviewViewerProps {
  fileUrl: string;
  filename: string;
  suggestions: ReviewSuggestion[];
  activeId: string | null;
  onSelectSuggestion: (id: string) => void;
  onFallbackToNative?: () => void;
}

interface PageMeta {
  pageNumber: number;
  /** scale = 1.0 时的自然视口尺寸（PDF 用户空间点） */
  naturalWidth: number;
  naturalHeight: number;
}

/** 每页的三层 DOM 节点（用 ref 直连，避免 getElementById 在同页多实例时串号） */
interface PageNodes {
  page: HTMLDivElement;
  canvas: HTMLCanvasElement;
  textLayer: HTMLDivElement;
}

interface CalculatedHighlight {
  suggestionId: string;
  priority: string;
  quote: string;
  matchLevel: string;
  confidence: number;
  rects: HighlightRect[];
}

interface PageDiagnostic {
  page: number;
  spanCount: number;
  firstSpans: string[];
  textLayerSize: string;
  viewportSize: string;
  /**
   * 决定性诊断：Canvas 底图相对页面容器的偏移与尺寸。
   * 若 offset ≠ (0,0) 或 size ≠ 页面尺寸，说明「可见文字(Cavas)」与「高亮图层」
   * 处在两套坐标系里 —— 这正是「高亮与原文错位」的根因。
   */
  canvasOffset: string;
  canvasSize: string;
  pageSize: string;
  dpr: number;
}

const MIN_SCALE = 0.6;
const MAX_SCALE = 2.4;
const SCALE_STEP = 0.15;

/**
 * 合并同一行内相邻的碎片矩形。
 *
 * PDF 文本层会把一句话拆成很多个 <span>（本项目中一条建议最多跨 9 个 span），
 * 于是 getClientRects() 返回 9 个首尾相接的小矩形，视觉上像一排碎块。
 * 这里把「同一页 + 同一行 + 水平间隙很小」的矩形合并成一条，观感立刻变干净。
 *
 * 安全边界：只合并水平间隙 ≤ max(3px, 0.5*行高) 的矩形。
 * 多栏 PDF 的分栏间隙通常远大于此，因此**不会**把左右两栏误合成横跨装订线的长条。
 */
function mergeAdjacentRects(rects: HighlightRect[]): HighlightRect[] {
  const sorted = [...rects].sort(
    (a, b) => a.pageNumber - b.pageNumber || a.top - b.top || a.left - b.left
  );

  const merged: HighlightRect[] = [];
  for (const r of sorted) {
    const last = merged[merged.length - 1];
    const gapTolerance = Math.max(3, r.height * 0.5);
    const sameLine =
      !!last &&
      last.pageNumber === r.pageNumber &&
      Math.abs(last.top - r.top) <= Math.max(2, r.height * 0.35) &&
      r.left <= last.left + last.width + gapTolerance;

    if (sameLine && last) {
      const left = Math.min(last.left, r.left);
      const right = Math.max(last.left + last.width, r.left + r.width);
      const top = Math.min(last.top, r.top);
      const bottom = Math.max(last.top + last.height, r.top + r.height);
      merged[merged.length - 1] = {
        pageNumber: last.pageNumber,
        left,
        top,
        width: right - left,
        height: bottom - top,
      };
    } else {
      merged.push({ ...r });
    }
  }
  return merged;
}

/**
 * PDF 审阅视图
 *
 * 渲染管线（严格对齐 PDF.js 官方 viewer 的三层结构）：
 *   1) page.render(canvas)    -> 像素底图
 *   2) renderTextLayer(div)   -> 真实 <span> 文本节点（含真实 left/top/fontSize）
 *   3) Range.getClientRects() -> 高亮矩形（唯一合法来源）
 *
 * 三层共用同一个 viewport / scale / 页面原点，坐标系完全一致。
 *
 * 【重要】所有 DOM 访问都走 ref，不使用 document.getElementById。
 * 原因：React.StrictMode 在 dev 下会双挂载，AnimatePresence 也会短暂保留退场树，
 * 此时全局 id 查找会命中「另一个实例」的节点，导致坐标换算整体错位。
 */
export const PdfReviewViewer: React.FC<PdfReviewViewerProps> = ({
  fileUrl,
  filename,
  suggestions,
  activeId,
  onSelectSuggestion,
  onFallbackToNative,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pdfjsRef = useRef<any>(null);
  const pdfDocRef = useRef<any>(null);
  /** 页码 -> 该页三层 DOM 节点（由 ref 回调填充） */
  const pageNodesRef = useRef<Map<number, PageNodes>>(new Map());
  /** 当前 scale 下 Text Layer 真实产出的 Span 元数据 */
  const spanNodesRef = useRef<TextSpanNodeInfo[]>([]);
  /** 渲染代次：用于丢弃过期的异步渲染结果 */
  const renderTokenRef = useRef(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1.2);
  const [pageMetas, setPageMetas] = useState<PageMeta[]>([]);
  const [highlights, setHighlights] = useState<CalculatedHighlight[]>([]);
  const [diagnostics, setDiagnostics] = useState<PageDiagnostic[]>([]);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  /** 诊断面板默认关闭：仅排查定位问题时手动开启，不干扰正常阅读 */
  const [showDebug, setShowDebug] = useState(false);
  /** 打开后把 Text Layer 文字显形，用于肉眼核对「文本层是否与底图文字重合」 */
  const [showTextLayer, setShowTextLayer] = useState(false);

  /* ------------------------------------------------------------------ */
  /* 1. 加载 PDF 文档；记录每页自然尺寸（与 scale 无关，只算一次）        */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    loadPdfJs()
      .then(async (pdfjs: any) => {
        pdfjsRef.current = pdfjs;
        const doc = await pdfjs.getDocument({ url: fileUrl }).promise;
        if (!isMounted) return;
        pdfDocRef.current = doc;

        const metas: PageMeta[] = [];
        for (let i = 1; i <= doc.numPages; i++) {
          const page = await doc.getPage(i);
          const natural = page.getViewport({ scale: 1.0 });
          metas.push({
            pageNumber: i,
            naturalWidth: natural.width,
            naturalHeight: natural.height,
          });
        }
        if (!isMounted) return;
        setPageMetas(metas);
        setLoading(false);
      })
      .catch((err: unknown) => {
        if (!isMounted) return;
        const message = err instanceof Error ? err.message : String(err);
        setError(`PDF.js 加载失败：${message}。可切换至「原文件预览」继续查看。`);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [fileUrl]);

  /* ------------------------------------------------------------------ */
  /* 2. 用真实 DOM Range 测量高亮矩形（纯派生，永远基于当前 DOM 重算）     */
  /* ------------------------------------------------------------------ */
  const measureHighlights = useCallback(
    (spans: TextSpanNodeInfo[]) => {
      const logs: string[] = [];

      if (spans.length === 0) {
        setHighlights([]);
        setDebugLogs(['[FAIL] Text Layer 未产出任何 <span>，无法进行任何高亮。']);
        return;
      }
      if (suggestions.length === 0) {
        setHighlights([]);
        setDebugLogs(['[SKIP] 当前分析结果没有任何可审阅的建议。']);
        return;
      }

      const fullDocText = spans.map(s => s.text).join('');
      const next: CalculatedHighlight[] = [];

      for (const sugg of suggestions) {
        const quote = (sugg.improvement.originalText || sugg.anchor?.exactQuote || '').trim();
        if (!quote) {
          logs.push(`[SKIP] ${sugg.id} — 无原句（全局建议）`);
          continue;
        }

        const anchor = locateQuoteInSpanStream(spans, fullDocText, quote);
        if (!anchor.located || !anchor.textRange) {
          logs.push(
            `[FAIL] ${sugg.id} — 未在文本层中找到原文 (matchLevel=${anchor.matchLevel}, confidence=${anchor.confidence})`
          );
          continue;
        }

        const { start, end } = anchor.textRange;

        // 逐 span 独立测量：
        // 1) 不构建「跨 span 的大 Range」—— 多栏 PDF 的 DOM 顺序与文本顺序不一致时
        //    会让 range 反向/塌陷，getClientRects() 直接返回空；
        //    改为对每个与 quote 相交的 span 单独建 Range，起止永远在同一节点内。
        // 2) 节点在测量时从 ref 直连的实时 Text Layer 取，避免拿到已销毁的旧节点。
        const rects: HighlightRect[] = [];
        const rawSamples: string[] = [];
        let overlappingSpans = 0;
        let rawTotal = 0;
        let staleCount = 0;
        let alignSample = '';

        for (const s of spans) {
          if (s.endOffsetInDoc <= start || s.startOffsetInDoc >= end) continue;
          overlappingSpans++;

          // 页面归属**直接取 span 自身记录的页码**，不做任何几何猜测
          const nodes = pageNodesRef.current.get(s.pageNumber);
          const liveSpan = nodes?.textLayer.querySelectorAll('span')[s.spanIndex];
          if (!nodes || !liveSpan) {
            staleCount++;
            continue;
          }

          const first = liveSpan.firstChild;
          const node: Node =
            first && first.nodeType === Node.TEXT_NODE ? first : liveSpan;

          const isText = node.nodeType === Node.TEXT_NODE;
          const localStart = Math.max(0, start - s.startOffsetInDoc);
          const localEnd = Math.min(s.text.length, end - s.startOffsetInDoc);
          if (localEnd <= localStart) continue;

          // 元素节点只能用子节点索引，文本节点用字符偏移
          const nodeMax = isText ? (node.textContent || '').length : node.childNodes.length;
          const from = isText ? Math.min(localStart, nodeMax) : 0;
          const to = isText ? Math.min(localEnd, nodeMax) : node.childNodes.length;
          if (to <= from) continue;

          try {
            const range = document.createRange();
            range.setStart(node, from);
            range.setEnd(node, to);
            if (range.collapsed) continue;

            // 唯一合法来源：浏览器排版引擎基于真实文本节点计算的物理矩形
            const rawRects = Array.from(range.getClientRects());
            rawTotal += rawRects.length;

            const pageRect = nodes.page.getBoundingClientRect();
            // 归一化：若祖先带 CSS transform，视口坐标与容器内 CSS px 会有缩放差
            const sx = nodes.page.offsetWidth > 0 ? pageRect.width / nodes.page.offsetWidth : 1;
            const sy = nodes.page.offsetHeight > 0 ? pageRect.height / nodes.page.offsetHeight : 1;
            const safeSx = Math.abs(sx) < 0.01 ? 1 : sx;
            const safeSy = Math.abs(sy) < 0.01 ? 1 : sy;

            // ---- 决定性自检：对比「span 自身几何」与「Range 几何」（均为页面局部坐标）----
            if (!alignSample && rawRects.length > 0) {
              const sr = liveSpan.getBoundingClientRect();
              const r0 = rawRects[0];
              const fmt = (l: number, t: number, w: number, h: number) =>
                `(${(l / safeSx).toFixed(0)},${(t / safeSy).toFixed(0)},${(w / safeSx).toFixed(
                  0
                )}x${(h / safeSy).toFixed(0)})`;
              alignSample =
                `span${fmt(sr.left - pageRect.left, sr.top - pageRect.top, sr.width, sr.height)} ` +
                `range${fmt(r0.left - pageRect.left, r0.top - pageRect.top, r0.width, r0.height)} ` +
                `tlOffset=(${(nodes.textLayer.getBoundingClientRect().left - pageRect.left).toFixed(
                  0
                )},${(nodes.textLayer.getBoundingClientRect().top - pageRect.top).toFixed(0)}) ` +
                `sx=${safeSx.toFixed(3)} sy=${safeSy.toFixed(3)}`;
            }

            for (const r of rawRects) {
              if (r.width <= 0 || r.height <= 0) continue;
              if (rawSamples.length < 4) {
                rawSamples.push(
                  `p${s.pageNumber}[${r.left.toFixed(0)},${r.top.toFixed(0)},${r.width.toFixed(
                    0
                  )}x${r.height.toFixed(0)}]`
                );
              }
              rects.push({
                pageNumber: s.pageNumber,
                left: (r.left - pageRect.left) / safeSx,
                top: (r.top - pageRect.top) / safeSy,
                width: r.width / safeSx,
                height: r.height / safeSy,
              });
            }
          } catch (err) {
            logs.push(`[FAIL] ${sugg.id} — 单 span 测量异常: ${String(err)}`);
          }
        }

        if (rects.length === 0) {
          logs.push(
            `[FAIL] ${sugg.id} — 无有效矩形 | quote="${quote.slice(0, 12)}" ` +
              `overlapSpans=${overlappingSpans} stale=${staleCount} rawRects=${rawTotal} ` +
              `sample=${rawSamples.join(',') || 'none'}`
          );
          continue;
        }

        // 合并同行碎片：把 9 个首尾相接的小矩形压成 2~3 条干净的行高亮
        const mergedRects = mergeAdjacentRects(rects);

        next.push({
          suggestionId: sugg.id,
          priority: sugg.improvement.priority,
          quote,
          matchLevel: anchor.matchLevel,
          confidence: anchor.confidence,
          rects: mergedRects,
        });

        const rectSample = mergedRects
          .slice(0, 2)
          .map(
            r =>
              `p${r.pageNumber}(${r.left.toFixed(0)},${r.top.toFixed(0)},${r.width.toFixed(
                0
              )}x${r.height.toFixed(0)})`
          )
          .join(' ');

        logs.push(
          `[VERIFIED] ${sugg.id} | anchorPage=${anchor.page} | spans=${overlappingSpans} | ` +
            `raw=${rects.length} merged=${mergedRects.length} | ` +
            `matchLevel=${anchor.matchLevel} | confidence=${anchor.confidence} | ${rectSample}` +
            (alignSample ? ` || ${alignSample}` : '')
        );
      }

      setHighlights(next);
      setDebugLogs(logs);
    },
    [suggestions]
  );

  /* ------------------------------------------------------------------ */
  /* 3. 逐页渲染 Canvas + Text Layer，然后测量高亮                        */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!pdfDocRef.current || pageMetas.length === 0) return;

    const token = ++renderTokenRef.current;
    const doc = pdfDocRef.current;
    let cancelled = false;

    const run = async () => {
      const allSpans: TextSpanNodeInfo[] = [];
      const diags: PageDiagnostic[] = [];
      let charCursor = 0;

      for (const meta of pageMetas) {
        if (cancelled || token !== renderTokenRef.current) return;

        const nodes = pageNodesRef.current.get(meta.pageNumber);
        if (!nodes) continue;

        const page = await doc.getPage(meta.pageNumber);
        const viewport = page.getViewport({ scale });

        // --- 3.1 Canvas 底图（DPR 感知，高分屏不模糊） ---
        const dpr = window.devicePixelRatio || 1;
        const canvas = nodes.canvas;
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) {
          const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined;
          await page.render({ canvasContext: ctx, viewport, transform }).promise;
        }

        if (cancelled || token !== renderTokenRef.current) return;

        // --- 3.2 Text Layer（真实文本节点，坐标由 pdf.js 依据 PDF 文字矩阵写入） ---
        const textLayerDiv = nodes.textLayer;
        textLayerDiv.innerHTML = '';
        textLayerDiv.style.width = `${viewport.width}px`;
        textLayerDiv.style.height = `${viewport.height}px`;
        textLayerDiv.style.setProperty('--scale-factor', String(viewport.scale));

        const textContent = await page.getTextContent();
        const pdfjsLib = pdfjsRef.current;

        if (!pdfjsLib || typeof pdfjsLib.renderTextLayer !== 'function') {
          throw new Error('pdfjsLib.renderTextLayer 不可用，无法构建文本层');
        }
        // 兼容 3.x(`textContent`) 与更高版本(`textContentSource`) 的参数命名差异
        await pdfjsLib.renderTextLayer({
          textContentSource: textContent,
          textContent,
          container: textLayerDiv,
          viewport,
          textDivs: [],
        }).promise;

        if (cancelled || token !== renderTokenRef.current) return;

        // --- 3.3 抽取真实 span 与 Text 节点 ---
        const spanEls = Array.from(textLayerDiv.querySelectorAll('span'));
        spanEls.forEach((spanEl, idx) => {
          const txt = spanEl.textContent || '';
          const startOffset = charCursor;
          const endOffset = charCursor + txt.length;
          charCursor = endOffset;

          allSpans.push({
            pageNumber: meta.pageNumber,
            spanIndex: idx,
            text: txt,
            startOffsetInDoc: startOffset,
            endOffsetInDoc: endOffset,
            // domNode 不再缓存：测量时从 ref 直连的实时 DOM 重新取
          });
        });

        // 决定性诊断：Canvas 底图（用户看到的文字）相对页面容器的偏移与尺寸。
        // 若 canvasOffset ≠ (0,0) 或 canvasSize ≠ pageSize，说明「可见文字」与
        // 「高亮图层」处于两套坐标系 —— 这就是视觉错位的根因。
        const pageBox = nodes.page.getBoundingClientRect();
        const canvasBox = canvas.getBoundingClientRect();

        diags.push({
          page: meta.pageNumber,
          spanCount: spanEls.length,
          firstSpans: spanEls.slice(0, 20).map(s => s.textContent || ''),
          textLayerSize: `${Math.round(viewport.width)}x${Math.round(viewport.height)}`,
          viewportSize: `${Math.round(viewport.width)}x${Math.round(viewport.height)}`,
          canvasOffset: `(${(canvasBox.left - pageBox.left).toFixed(1)},${(
            canvasBox.top - pageBox.top
          ).toFixed(1)})`,
          canvasSize: `${canvasBox.width.toFixed(1)}x${canvasBox.height.toFixed(1)}`,
          pageSize: `${pageBox.width.toFixed(1)}x${pageBox.height.toFixed(1)}`,
          dpr: Math.round((window.devicePixelRatio || 1) * 100) / 100,
        });
      }

      if (cancelled || token !== renderTokenRef.current) return;

      spanNodesRef.current = allSpans;
      setDiagnostics(diags);
      measureHighlights(allSpans);
    };

    run().catch((err: unknown) => {
      const message = err instanceof Error ? err.message : String(err);
      setError(`PDF 渲染失败：${message}`);
    });

    return () => {
      cancelled = true;
    };
  }, [pageMetas, scale, measureHighlights]);

  /* ------------------------------------------------------------------ */
  /* 4. 布局变化 -> 重新测量                                              */
  /*                                                                     */
  /* rect 是「派生数据」，它的有效性依赖当前布局。仅在 window.resize 时重测 */
  /* 是不够的：侧边栏渲染、滚动条出现、字体加载、flex 重排都会让页面容器在 */
  /* 测量之后发生位移，此时缓存的 rect 就变成过期数据 —— 表现为「高亮与原文 */
  /* 错位」。这里用 ResizeObserver 监听容器尺寸变化，一旦布局变动就重测。  */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    let timer: ReturnType<typeof setTimeout> | null = null;
    const schedule = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (spanNodesRef.current.length > 0) measureHighlights(spanNodesRef.current);
      }, 120);
    };

    const observer = new ResizeObserver(schedule);
    // 观察滚动容器与每个页面容器：任一尺寸变化都意味着坐标系可能已改变
    observer.observe(el);
    pageNodesRef.current.forEach(nodes => observer.observe(nodes.page));

    window.addEventListener('resize', schedule);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', schedule);
      if (timer) clearTimeout(timer);
    };
  }, [measureHighlights, pageMetas]);

  /* ------------------------------------------------------------------ */
  /* 5. 右侧点击 -> 左侧滚动并激活                                        */
  /* ------------------------------------------------------------------ */
  useEffect(() => {
    if (!activeId) return;
    const target = highlights.find(h => h.suggestionId === activeId);
    if (!target || target.rects.length === 0) return;

    const first = target.rects[0];
    const nodes = pageNodesRef.current.get(first.pageNumber);
    if (nodes && scrollRef.current) {
      const top = nodes.page.offsetTop + first.top - 120;
      scrollRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  }, [activeId, highlights]);

  const totalSpans = spanNodesRef.current.length;
  const locatedCount = highlights.length;

  return (
    <div className="flex flex-col h-full bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
      {/* 工具栏 */}
      <div className="px-4 py-2 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs gap-3 flex-wrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[160px]">
            {filename}
          </span>
          <span
            className={`px-2 py-0.5 rounded font-medium whitespace-nowrap ${
              totalSpans > 0
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                : 'bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-400'
            }`}
          >
            Text Layer {totalSpans} spans
          </span>
          <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">
            高亮 {locatedCount}/{suggestions.length}
          </span>
          <button
            onClick={() => setShowDebug(v => !v)}
            className="px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500 whitespace-nowrap"
          >
            {showDebug ? '隐藏诊断' : '显示诊断'}
          </button>
          <button
            onClick={() => setShowTextLayer(v => !v)}
            className={`px-2 py-0.5 rounded border whitespace-nowrap ${
              showTextLayer
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400'
                : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-500'
            }`}
            title="把 PDF 文本层文字显形，用于核对文本层是否与底图文字重合"
          >
            {showTextLayer ? '隐藏文本层' : '显示文本层'}
          </button>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={() => setScale(s => Math.max(MIN_SCALE, Number((s - SCALE_STEP).toFixed(2))))}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
            title="缩小"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="w-12 text-center text-slate-500 font-mono text-[11px]">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale(s => Math.min(MAX_SCALE, Number((s + SCALE_STEP).toFixed(2))))}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
            title="放大"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <a
            href={fileUrl}
            download={filename}
            className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 ml-1"
            title="下载原文件"
          >
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 诊断面板 */}
      {showDebug && (
        <div className="bg-slate-900 text-emerald-400 p-3 text-[11px] font-mono max-h-56 overflow-y-auto border-b border-slate-800 space-y-1 select-text">
          <div className="text-slate-400 font-semibold">
            === 渲染诊断 (scale={scale}, pages={pageMetas.length}, spans={totalSpans}, highlights=
            {locatedCount}) ===
          </div>
          {diagnostics.map(d => (
            <div key={d.page} className="text-cyan-300 break-all">
              {JSON.stringify({
                page: d.page,
                spanCount: d.spanCount,
                textLayer: d.textLayerSize,
                viewport: d.viewportSize,
                canvasOffset: d.canvasOffset,
                canvasSize: d.canvasSize,
                pageSize: d.pageSize,
                dpr: d.dpr,
                firstSpans: d.firstSpans.slice(0, 6),
              })}
            </div>
          ))}
          {debugLogs.map((log, i) => (
            <div
              key={i}
              className={log.startsWith('[VERIFIED]') ? 'text-emerald-400' : 'text-amber-400'}
            >
              {log}
            </div>
          ))}
        </div>
      )}

      {/* 滚动视口 */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 flex flex-col items-center gap-6">
        {loading && (
          <div className="py-24 text-center text-slate-400 flex flex-col items-center gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-primary-500" />
            <p className="text-xs">正在渲染 PDF 与文本图层...</p>
          </div>
        )}

        {error && (
          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-rose-200 dark:border-rose-900 max-w-md text-center">
            <AlertCircle className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <p className="text-xs text-rose-600 dark:text-rose-400 mb-3 font-medium">{error}</p>
            {onFallbackToNative && (
              <button
                onClick={onFallbackToNative}
                className="px-3 py-1.5 rounded-lg bg-primary-500 text-white text-xs hover:bg-primary-600 font-medium"
              >
                切换至原版式预览
              </button>
            )}
          </div>
        )}

        {!loading &&
          !error &&
          pageMetas.map(meta => {
            const cssWidth = Math.round(meta.naturalWidth * scale);
            const cssHeight = Math.round(meta.naturalHeight * scale);

            // 注意：页面容器必须带 `shrink-0`。
            // 它是 flex column 的子项，默认 flex-shrink:1，在容器高度不足时会被压缩
            // （实测 1010px 被压到 675px），而内部绝对定位的 Canvas / TextLayer
            // 尺寸不受影响 —— 于是「声明尺寸」与「实际布局尺寸」脱节，高亮随之错位。

            const pageRects = highlights.flatMap(h =>
              h.rects
                .filter(r => r.pageNumber === meta.pageNumber)
                .map(r => ({ ...r, suggestionId: h.suggestionId, priority: h.priority }))
            );

            return (
              <div
                key={meta.pageNumber}
                ref={el => {
                  // ref 回调：直连本实例的 DOM，避免全局 id 查找命中其它实例
                  if (!el) {
                    pageNodesRef.current.delete(meta.pageNumber);
                    return;
                  }
                  const existing = pageNodesRef.current.get(meta.pageNumber);
                  const canvas = el.querySelector<HTMLCanvasElement>('canvas');
                  const textLayer = el.querySelector<HTMLDivElement>('.pdf-review-text-layer');
                  if (!canvas || !textLayer) return;
                  if (
                    !existing ||
                    existing.page !== el ||
                    existing.canvas !== canvas ||
                    existing.textLayer !== textLayer
                  ) {
                    pageNodesRef.current.set(meta.pageNumber, { page: el, canvas, textLayer });
                  }
                }}
                data-pdf-page={meta.pageNumber}
                className="relative bg-white shadow-md select-none shrink-0"
                style={{ width: `${cssWidth}px`, height: `${cssHeight}px` }}
              >
                {/* 图层 1：Canvas 像素底图 */}
                <canvas className="absolute left-0 top-0 block" />

                {/* 图层 2：Text Layer（真实 <span>，绝对定位，样式见 pdfReviewTextLayer.css） */}
                <div
                  className={`textLayer pdf-review-text-layer ${
                    showTextLayer ? 'pdf-review-text-layer--visible' : ''
                  }`}
                />

                {/* 图层 3：Highlight Overlay（坐标来自 Range.getClientRects()） */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  {pageRects.map((rect, i) => {
                    const isActive = rect.suggestionId === activeId;
                    const tone =
                      rect.priority === '高'
                        ? 'bg-rose-400/30 border-rose-500'
                        : rect.priority === '中'
                        ? 'bg-amber-400/30 border-amber-500'
                        : 'bg-emerald-400/30 border-emerald-500';
                    return (
                      <button
                        key={`${rect.suggestionId}-${i}`}
                        type="button"
                        onClick={() => onSelectSuggestion(rect.suggestionId)}
                        className={`absolute border-b-2 rounded-[2px] cursor-pointer pointer-events-auto transition-colors ${tone} ${
                          isActive ? 'ring-2 ring-primary-500 ring-offset-1 bg-primary-400/45 z-30' : ''
                        }`}
                        style={{
                          left: `${rect.left}px`,
                          top: `${rect.top}px`,
                          width: `${rect.width}px`,
                          height: `${rect.height}px`,
                        }}
                        title="点击查看 AI 审阅建议"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
