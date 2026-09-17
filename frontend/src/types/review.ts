/**
 * AI 简历审阅与文档锚点定位模型 (Phase 1 POC)
 */

import type { Improvement } from './optimization';

/**
 * 几何矩形区域（相对于所属页面容器的像素坐标）
 */
export interface HighlightRect {
  left: number;
  top: number;
  width: number;
  height: number;
  pageNumber: number; // 从 1 开始
}

/**
 * 统一文档锚点模型
 */
export interface DocumentAnchor {
  /** 目标引用的精确文本 */
  exactQuote: string;
  /** 前置上下文（用于同名消歧） */
  prefix?: string;
  /** 后置上下文（用于同名消歧） */
  suffix?: string;
  /** 所属页码（从 1 开始，单页或多页的首页） */
  page?: number;
  /** 跨越的所有页码 */
  pages?: number[];
  /** 真实 Text Layer 节点计算出的矩形区域列表（支持单行/跨行） */
  rects?: HighlightRect[];
  /** 纯文本字符偏移量（DOCX / 纯文本使用） */
  textRange?: {
    start: number;
    end: number;
  };
  /** 定位置信度 (0.0 ~ 1.0) */
  confidence: number;
  /** 定位算法命中的级别 */
  matchLevel: 'exact' | 'whitespace' | 'disambiguated' | 'fuzzy' | 'unlocated';
  /** 是否可靠定位成功 */
  located: boolean;
  /** 定位失败原因说明（若无法定位） */
  failReason?: string;
}

/**
 * 审阅项：在已有的 Improvement 基础上增加文档锚点和 UI 状态
 */
export interface ReviewSuggestion {
  id: string;
  improvement: Improvement;
  anchor: DocumentAnchor;
}

/**
 * 文本节点在 PDF 全文流中的映射信息（用于将连续文本位置映射回真实 DOM Span）
 */
export interface TextSpanNodeInfo {
  pageNumber: number;
  spanIndex: number;
  text: string;
  startOffsetInDoc: number;
  endOffsetInDoc: number;
  // 浏览器运行时绑定的 DOM 节点引用（可选）
  domNode?: Node;
}
