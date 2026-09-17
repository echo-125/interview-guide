import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { buildImprovements } from './improvements.ts';
import { locateQuoteInText, locateQuoteInSpanStream } from './anchorMatcher.ts';
import type { TextSpanNodeInfo } from '../types/review.ts';

// 读取项目中真实的简历样本文件
const sampleResumePath = resolve(
  __dirname,
  '../../../app/src/test/resources/test-files/sample-resume.txt'
);
const sampleResumeText = readFileSync(sampleResumePath, 'utf-8');

test('真实简历与真实 AI 分析项 A、B、C 场景端到端验证', () => {
  // 构造与后端真实输出完全一致的 Analysis 对象
  const mockRealAnalysis = {
    overallScore: 82,
    projectScore: 32,
    bulletAudits: [
      {
        quote: '优化系统性能，P99 延迟从 200ms 降至 50ms',
        problems: ['未说明具体技术手段与业务影响'],
        rewrite: '通过引入本地多级缓存与异步批量处理，将核心推荐接口P99延迟从200ms优化至50ms',
      },
      {
        quote: '使用 Java Spring Boot 框架开发 RESTful API\n- 负责数据库设计和优化，处理日均千万级交易',
        problems: ['两句话缺乏系统化陈述，缺少量化支撑'],
        rewrite: '基于Spring Boot构建高可用支付网关，主导分库分表与读写分离，日均承载千万级交易且零资损',
      },
    ],
    suggestions: [
      {
        category: '项目经验',
        priority: '高' as const,
        issue: '支付系统可用性指标缺乏对比基准',
        recommendation: '增加与改造前的可用性对比及容灾机制',
        quote: '系统可用性达到 99.99%',
        rewrite: '构建多机房双活容灾体系，系统可用性由99.9%提升至99.99%',
      },
    ],
    topActions: [
      {
        rank: 1,
        title: '补充大规模云原生与K8s实战经验',
        reason: '目标资深工程师岗位对容器化编排要求较高',
        estimatedGain: 4,
        // C 场景：全局建议，无关联原句
      },
    ],
  };

  const improvements = buildImprovements(mockRealAnalysis);
  assert.ok(improvements.length >= 3);

  // A 场景：有明确 quote 且唯一
  const itemA = improvements.find(i => i.originalText.includes('P99 延迟'));
  assert.ok(itemA, '必须找到建议 A');
  const anchorA = locateQuoteInText(sampleResumeText, itemA.originalText);
  assert.equal(anchorA.located, true);
  assert.equal(anchorA.matchLevel, 'exact');
  assert.equal(anchorA.confidence, 1.0);
  assert.ok(anchorA.textRange);
  assert.equal(
    sampleResumeText.slice(anchorA.textRange.start, anchorA.textRange.end),
    itemA.originalText
  );

  // B 场景：quote 跨行（含换行符与前导短横线）
  const itemB = improvements.find(i => i.originalText.includes('Spring Boot'));
  assert.ok(itemB, '必须找到建议 B');
  const anchorB = locateQuoteInText(sampleResumeText, itemB.originalText);
  assert.equal(anchorB.located, true);
  // 空白/换行容错匹配
  assert.ok(['exact', 'whitespace'].includes(anchorB.matchLevel));
  assert.ok(anchorB.confidence >= 0.9);
  assert.ok(anchorB.textRange);

  // C 场景：quote 不存在 / 全局建议
  const itemC = improvements.find(i => i.title.includes('K8s'));
  assert.ok(itemC, '必须找到全局建议 C');
  assert.equal(itemC.originalText, ''); // 全局建议无原句
  const anchorC = locateQuoteInText(sampleResumeText, itemC.originalText);
  assert.equal(anchorC.located, false);
  assert.equal(anchorC.matchLevel, 'unlocated');
  assert.equal(anchorC.confidence, 0);
  assert.equal(anchorC.textRange, undefined);
  assert.ok(anchorC.failReason);
});

test('多 Span 真实 PDF 跨行与双栏模拟计算验证', () => {
  // 模拟 PDF.js Text Layer 分解出的 spans（两栏布局）
  const spans: TextSpanNodeInfo[] = [
    // 栏目一（工作经历）
    { pageNumber: 1, spanIndex: 0, text: '2022.03 - 至今 ', startOffsetInDoc: 0, endOffsetInDoc: 15 },
    { pageNumber: 1, spanIndex: 1, text: '字节跳动 ', startOffsetInDoc: 15, endOffsetInDoc: 20 },
    { pageNumber: 1, spanIndex: 2, text: '高级后端工程师', startOffsetInDoc: 20, endOffsetInDoc: 27 },
    { pageNumber: 1, spanIndex: 3, text: '优化系统性能，', startOffsetInDoc: 27, endOffsetInDoc: 34 },
    { pageNumber: 1, spanIndex: 4, text: 'P99 延迟从 200ms 降至 50ms', startOffsetInDoc: 34, endOffsetInDoc: 60 },
  ];
  const fullText = spans.map(s => s.text).join('');

  const crossSpanQuote = '优化系统性能，P99 延迟从 200ms 降至 50ms';
  const anchor = locateQuoteInSpanStream(spans, fullText, crossSpanQuote);

  assert.equal(anchor.located, true);
  assert.equal(anchor.page, 1);
  assert.deepEqual(anchor.pages, [1]);
  assert.ok(anchor.textRange);
});
