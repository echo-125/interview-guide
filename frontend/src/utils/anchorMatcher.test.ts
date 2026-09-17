import test from 'node:test';
import assert from 'node:assert/strict';
import {
  locateQuoteInText,
  locateQuoteInSpanStream,
} from './anchorMatcher.ts';
import type { TextSpanNodeInfo } from '../types/review.ts';

test('1. 单行 quote 精确匹配测试', () => {
  const resumeText = `
个人信息
张三 | 5年Java开发经验 | 手机：13800000000

工作经历
2021.03 - 至今 某互联网大厂 后端核心架构师
- 负责电商核心结算链路性能调优，将P99响应延迟降低至85ms
- 主导分布式事务改造，采用Seata保证最终一致性
  `.trim();

  const quote = '负责电商核心结算链路性能调优，将P99响应延迟降低至85ms';
  const anchor = locateQuoteInText(resumeText, quote);

  assert.equal(anchor.located, true);
  assert.equal(anchor.matchLevel, 'exact');
  assert.equal(anchor.confidence, 1.0);
  assert.ok(anchor.textRange);
  assert.equal(resumeText.slice(anchor.textRange.start, anchor.textRange.end), quote);
});

test('2. 跨行 quote 与换行断句匹配测试', () => {
  const resumeText = `
工作经历
- 负责电商核心结算链路性能调优，
  通过多级缓存与批量查库重构，
  将P99延迟由450ms降至85ms
  `.trim();

  // quote 在换行处只有单空格或换行不一致
  const quote = '负责电商核心结算链路性能调优， 通过多级缓存与批量查库重构， 将P99延迟由450ms降至85ms';
  const anchor = locateQuoteInText(resumeText, quote);

  assert.equal(anchor.located, true);
  assert.equal(anchor.matchLevel, 'whitespace');
  assert.ok(anchor.confidence >= 0.9);
  assert.ok(anchor.textRange);
  const matched = resumeText.slice(anchor.textRange.start, anchor.textRange.end);
  assert.ok(matched.includes('通过多级缓存与批量查库重构'));
});

test('3. 多栏 PDF 排版（模拟双栏 Span 序列在各栏中的物理分布）测试', () => {
  // 模拟 PDF.js Text Layer 抽出的多栏简历片段：
  // 左栏（项目经历），右栏（专业技能）
  const spans: TextSpanNodeInfo[] = [
    { pageNumber: 1, spanIndex: 0, text: '项目经历：', startOffsetInDoc: 0, endOffsetInDoc: 5 },
    { pageNumber: 1, spanIndex: 1, text: '高并发秒杀系统开发', startOffsetInDoc: 5, endOffsetInDoc: 15 },
    { pageNumber: 1, spanIndex: 2, text: '专业技能：', startOffsetInDoc: 15, endOffsetInDoc: 20 },
    { pageNumber: 1, spanIndex: 3, text: '熟练掌握Spring Cloud微服务治理', startOffsetInDoc: 20, endOffsetInDoc: 40 },
  ];
  const fullDocText = spans.map(s => s.text).join('');

  // 测试命中左栏中的跨 span quote
  const quoteLeft = '高并发秒杀系统开发';
  const anchorLeft = locateQuoteInSpanStream(spans, fullDocText, quoteLeft);
  assert.equal(anchorLeft.located, true);
  assert.equal(anchorLeft.page, 1);
  assert.deepEqual(anchorLeft.pages, [1]);

  // 测试命中右栏
  const quoteRight = 'Spring Cloud微服务治理';
  const anchorRight = locateQuoteInSpanStream(spans, fullDocText, quoteRight);
  assert.equal(anchorRight.located, true);
  assert.equal(anchorRight.page, 1);
});

test('4. 同一句 quote 出现多次时的前缀/后缀消歧测试', () => {
  const resumeText = `
项目一：在线教育平台
- 技术栈：Spring Boot, Redis, MySQL
- 主要负责核心微服务接口开发与优化。

项目二：金融风控系统
- 技术栈：Spring Boot, Flink, Kafka
- 主要负责核心微服务接口开发与优化。
  `.trim();

  const repeatedQuote = '主要负责核心微服务接口开发与优化。';

  // 期望命中项目二
  const anchorProject2 = locateQuoteInText(resumeText, repeatedQuote, {
    prefix: '金融风控系统\n- 技术栈：Spring Boot, Flink, Kafka\n- ',
  });
  assert.equal(anchorProject2.located, true);
  assert.equal(anchorProject2.matchLevel, 'disambiguated');
  assert.ok(anchorProject2.textRange);
  // 校验命中位置确实是后面的金融风控系统
  const textBeforeMatch = resumeText.slice(0, anchorProject2.textRange.start);
  assert.ok(textBeforeMatch.includes('金融风控系统'));

  // 期望命中项目一
  const anchorProject1 = locateQuoteInText(resumeText, repeatedQuote, {
    prefix: '在线教育平台',
  });
  assert.equal(anchorProject1.located, true);
  assert.equal(anchorProject1.matchLevel, 'disambiguated');
  assert.ok(anchorProject1.textRange);
  const textBeforeProject1 = resumeText.slice(0, anchorProject1.textRange.start);
  assert.ok(!textBeforeProject1.includes('金融风控系统'));
});

test('5. quote 不存在且无法达到阈值时：坚决不画假高亮', () => {
  const resumeText = `
个人技能：Java, Spring Boot, MySQL, Redis.
工作职责：主导系统重构。
  `.trim();

  // 完全虚构或来自其他简历的句子
  const nonExistentQuote = '负责带队完成Kubernetes云原生全链路改造并在纳斯达克成功敲钟';
  const anchor = locateQuoteInText(resumeText, nonExistentQuote);

  assert.equal(anchor.located, false);
  assert.equal(anchor.matchLevel, 'unlocated');
  assert.equal(anchor.confidence, 0);
  assert.ok(anchor.failReason);
  assert.equal(anchor.textRange, undefined);
});

test('6. quote 存在空格、换行、全角空格及轻微排版差异测试', () => {
  const resumeText = `主导了　智能语音面试系统　的端到端架构设计。`;
  // AI 传来的 quote 去掉了全角空格
  const quote = '主导了 智能语音面试系统 的端到端架构设计。';

  const anchor = locateQuoteInText(resumeText, quote);
  assert.equal(anchor.located, true);
  assert.equal(anchor.matchLevel, 'whitespace');
  assert.ok(anchor.confidence >= 0.9);
});

test('7. 多页 PDF 跨页 quote 匹配测试', () => {
  // Page 1 包含前段，Page 2 包含后段
  const spanPage1: TextSpanNodeInfo = {
    pageNumber: 1,
    spanIndex: 99,
    text: '负责公司核心支付网关建设，期间深入参与了',
    startOffsetInDoc: 0,
    endOffsetInDoc: 20,
  };
  const spanPage2: TextSpanNodeInfo = {
    pageNumber: 2,
    spanIndex: 0,
    text: '高并发双十一大促资损防控演练与兜底预案保障。',
    startOffsetInDoc: 20,
    endOffsetInDoc: 43,
  };

  const spans = [spanPage1, spanPage2];
  const fullDocText = spans.map(s => s.text).join('');

  const crossPageQuote = '期间深入参与了高并发双十一大促资损防控演练';
  const anchor = locateQuoteInSpanStream(spans, fullDocText, crossPageQuote);

  assert.equal(anchor.located, true);
  assert.equal(anchor.page, 1); // 首页为 1
  assert.deepEqual(anchor.pages, [1, 2]); // 成功跨越 Page 1 和 Page 2！
});

test('8. DOCX 长文本与大量段落定位测试', () => {
  // 构建一段 5000 字以上的复杂长简历
  const paragraphs: string[] = [];
  for (let i = 1; i <= 30; i++) {
    paragraphs.push(
      `第 ${i} 阶段项目经验：负责业务线第 ${i} 代微服务中台迭代，重构了用户权限模块并编写了对应的单元测试，覆盖率提升至85%。`
    );
  }
  const longResume = paragraphs.join('\n\n');

  // 定位深处的第 23 阶段
  const targetQuote = '负责业务线第 23 代微服务中台迭代，重构了用户权限模块';
  const anchor = locateQuoteInText(longResume, targetQuote);

  assert.equal(anchor.located, true);
  assert.equal(anchor.matchLevel, 'exact');
  assert.ok(anchor.textRange);
  assert.equal(longResume.slice(anchor.textRange.start, anchor.textRange.end), targetQuote);
});
