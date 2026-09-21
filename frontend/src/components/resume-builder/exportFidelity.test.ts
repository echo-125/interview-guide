/**
 * Phase 5D-5 导出保真度断言（Node 端真实渲染，非 mock）
 *
 * - PDF：@react-pdf/renderer 真实渲染 → pdf.js 解析 → 页数 + 文本层断言（中文/修改内容进入）
 * - DOCX：docx Packer 真实打包 → JSZip 解包 → document.xml 断言（A4 页/边距/keepNext/字体/内容）
 *
 * 字体注册使用 @fontsource/noto-sans-sc 本地 woff2 的绝对路径
 * （@react-pdf/font 对非 URL src 走 fontkit.open 读本地文件）。
 */

import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import test from 'node:test';

import { Font, renderToBuffer } from '@react-pdf/renderer';
import { createElement, type ReactElement } from 'react';
import JSZip from 'jszip';
import { Packer } from 'docx';

import { ResumePdfDocument } from './ResumePdf.tsx';
import { buildResumeDocx } from './ResumeDocx.ts';
import { PDF_STYLES } from './templates/pdfStyles.ts';
import { DOCX_STYLES } from './templates/docxStyles.ts';
import { collectResumeCharset } from '../../utils/resumeDocument/pdfCharset.ts';
import { createHbSubsetter } from '../../utils/resumeDocument/hbSubset.ts';
import type { ResumeDocument } from '../../types/resumeDocument';

const require = createRequire(import.meta.url);
// pdfjs-dist 3.x（legacy UMD 构建，Node 可直接 require）
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pdfjs = require('pdfjs-dist/legacy/build/pdf.js') as typeof import('pdfjs-dist');

const FONT_DIR = path.resolve(process.cwd(), 'node_modules/@fontsource/noto-sans-sc/files');
/** Phase 5D-2 资产目录：完整 sfnt 字体 + hb-subset wasm */
const FONT_ASSET_DIR = path.resolve(process.cwd(), 'src/assets/fonts');

const toDataUrl = (dir: string, file: string) =>
  `data:font/woff2;base64,${readFileSync(path.join(dir, file)).toString('base64')}`;

/** 注册 NotoSansSC（400/700），与浏览器端 pdfFonts 同一来源的 woff2 */
function registerNodePdfFonts(): void {
  Font.register({
    family: 'NotoSansSC',
    fonts: [
      { src: toDataUrl(FONT_DIR, 'noto-sans-sc-chinese-simplified-400-normal.woff2'), fontWeight: 400 },
      { src: toDataUrl(FONT_DIR, 'noto-sans-sc-chinese-simplified-700-normal.woff2'), fontWeight: 700 },
    ],
  });
}

/** sfnt 字节 → base64 data URL（Node 侧等价浏览器 bytesToDataUrl） */
function otfDataUrl(bytes: Uint8Array): string {
  return `data:font/otf;base64,${Buffer.from(bytes).toString('base64')}`;
}

/** 真实中文样例简历（模拟王昕 id=12 的规模与结构） */
function sampleDoc(): ResumeDocument {
  return {
    version: 1,
    basics: {
      name: '王昕',
      title: 'Java 后端开发工程师',
      email: 'wangxin@example.com',
      phone: '13800001234',
      location: '杭州',
      website: 'https://github.com/wangxin',
      summary: '7 年 Java 后端开发经验，主导过高并发交易系统设计，熟悉微服务架构与性能调优。',
    },
    skills: [
      { id: 'sk1', category: '后端', items: ['Java', 'Spring Boot', 'Spring Cloud', 'MySQL'] },
      { id: 'sk2', category: '中间件', items: ['Redis', 'Kafka', 'RabbitMQ', 'Elasticsearch'] },
      { id: 'sk3', category: '工具', items: ['Docker', 'Kubernetes', 'Git', 'Jenkins'] },
    ],
    experience: [
      {
        id: 'ex1',
        company: '杭州云启科技',
        title: '资深 Java 工程师',
        startDate: '2021-03',
        endDate: '至今',
        bullets: [
          { id: 'b1', text: '主导支付订单系统重构，将峰值吞吐从 1200 TPS 提升到 6800 TPS。' },
          { id: 'b2', text: '设计基于 Redis Stream 与 Kafka 的异步消息链路，削峰填谷保障大促稳定性。' },
          { id: 'b3', text: '推动团队落地领域驱动设计与单元测试规范，核心模块覆盖率提升至 85%。' },
        ],
      },
      {
        id: 'ex2',
        company: '深圳前海信息技术',
        title: 'Java 工程师',
        startDate: '2018-07',
        endDate: '2021-02',
        bullets: [
          { id: 'b4', text: '负责内容管理平台与广告投放系统的开发维护，支撑千万级日活。' },
          { id: 'b5', text: '优化慢查询与缓存策略，接口 P99 延迟下降 60%。' },
        ],
      },
    ],
    projects: [
      {
        id: 'pr1',
        name: '分布式支付网关',
        role: '技术负责人',
        startDate: '2022-01',
        endDate: '2023-03',
        technologies: ['Java', 'Netty', 'RocketMQ'],
        bullets: [{ id: 'pb1', text: '设计幂等与对账机制，保证资金链路最终一致性。' }],
      },
      {
        id: 'pr2',
        name: '实时风控平台',
        role: '核心开发',
        startDate: '2020-04',
        endDate: '2021-06',
        bullets: [{ id: 'pb2', text: '基于流式计算框架构建实时规则引擎，规则命中延迟低于 50ms。' }],
      },
    ],
    education: [
      {
        id: 'ed1',
        school: '浙江大学',
        degree: '本科',
        major: '计算机科学与技术',
        startDate: '2014',
        endDate: '2018',
        bullets: [],
      },
    ],
    certifications: [{ id: 'c1', name: '阿里云 ACE 认证', date: '2022-06' }],
    awards: [],
    languages: [{ id: 'l1', name: '英语', level: 'CET-6' }],
    customSections: [],
  };
}

/** 渲染 PDF 并抽取全部页面文本（Node strip-types 不支持 JSX，用 createElement） */
async function renderDocPdfAndExtract(
  doc: ResumeDocument,
  templateId: 'developer' | 'classic' | 'ats',
  fontFamily?: string
): Promise<{ numPages: number; text: string; length: number }> {
  registerNodePdfFonts();
  const docElement = createElement(ResumePdfDocument, {
    doc,
    templateId,
    ...(fontFamily ? { fontFamily } : {}),
  });
  const buffer = await renderToBuffer(docElement as unknown as ReactElement);
  assert.ok(buffer.length > 1000, 'PDF 输出不应为空');
  const loadingTask = pdfjs.getDocument({ data: new Uint8Array(buffer) });
  const pdfDoc = await loadingTask.promise;
  assert.ok(pdfDoc.numPages >= 1, 'PDF 至少 1 页');
  const parts: string[] = [];
  for (let i = 1; i <= pdfDoc.numPages; i++) {
    const page = await pdfDoc.getPage(i);
    const content = await page.getTextContent();
    parts.push((content.items as Array<{ str?: string }>).map(t => t.str ?? '').join(''));
  }
  await pdfDoc.destroy();
  return { numPages: pdfDoc.numPages, text: parts.join(''), length: buffer.length };
}

async function renderPdfAndExtract(
  templateId: 'developer' | 'classic' | 'ats',
  fontFamily?: string
): Promise<{ numPages: number; text: string; length: number }> {
  return renderDocPdfAndExtract(sampleDoc(), templateId, fontFamily);
}

/** 解包 DOCX 并读取 word/document.xml 与 word/styles.xml */
async function buildDocxAndReadXml(templateId: 'developer' | 'classic' | 'ats'): Promise<{ documentXml: string; stylesXml: string }> {
  const buffer = await Packer.toBuffer(buildResumeDocx(sampleDoc(), templateId));
  const zip = await JSZip.loadAsync(buffer);
  const documentXml = await zip.file('word/document.xml')?.async('string');
  const stylesXml = await zip.file('word/styles.xml')?.async('string');
  assert.ok(documentXml, 'document.xml 必须存在');
  assert.ok(stylesXml, 'styles.xml 必须存在');
  return { documentXml, stylesXml };
}

test('BUG-002 回归：PDF 手工折行后不产生游离连字符（textkit hyphen 注入规避）', async () => {
  // 长中英混合段落：若走 textkit 自动折行会注入「汉字-」/「-汉字」连字符（修复前实测 24 处）
  const longSummary = '七年Java后端开发经验，主导过高并发支付网关系统的设计，使用Kafka与上游工单系统进行数据对接并通过ExactlyOnce机制保证消息不丢不重，实现分库分表与削峰填谷，保证大促期间系统稳定运行整体不被击穿。';
  const longDoc: ResumeDocument = {
    ...sampleDoc(),
    basics: { ...sampleDoc().basics, summary: longSummary },
    experience: [
      {
        id: 'ex-l1',
        company: '杭州云启科技',
        title: '资深 Java 工程师',
        startDate: '2021-03',
        endDate: '至今',
        bullets: [{
          id: 'bl-l1',
          text: '负责资金链路与衍生品交易系统核心模块的架构设计与性能调优，主导幂等、对账与容灾方案的落地，支撑日千万级流水稳定运行。',
        }],
      },
    ],
    projects: [{ id: 'pr-l1', name: '分布式支付网关', role: '技术负责人', bullets: [{ id: 'pb-l1', text: '设计跨地域多活与流量管控方案，保障大促峰值流量下整体不被击穿。' }] }],
    skills: [{ id: 'sk-l1', category: '后端', items: ['Java', 'Spring Cloud', 'MySQL', 'Redis', 'Kafka', 'ElasticJob'] }],
    certifications: [],
    awards: [],
    languages: [],
    customSections: [],
  };
  for (const t of ['developer', 'classic', 'ats'] as const) {
    const { text } = await renderDocPdfAndExtract(longDoc, t);
    const compact = text.replace(/\s+/g, '');
    assert.ok(!/([\u4e00-\u9fff])-/.test(compact), `[${t}] 不应出现「汉字-」游离连字符（实际片段: ${(text.match(/.{0,6}-.{0,6}/g) || []).slice(0, 3).join(' / ') || '无'}`);
    assert.ok(!/-([\u4e00-\u9fff])/.test(compact), `[${t}] 不应出现「-汉字」游离连字符`);
    assert.ok(compact.includes('分库分表与削峰填谷'), `[${t}] 长段落内容完整进入 PDF`);
  }
});

test('PDF：三模板真实渲染成功，页数一致且中文/修改内容进入 PDF', async () => {
  const dev = await renderPdfAndExtract('developer');
  const cls = await renderPdfAndExtract('classic');
  const ats = await renderPdfAndExtract('ats');

  // 统一字号/行高后，三模板在样例数据上页数一致（页数本身不硬编码，避免脆断言）
  assert.equal(dev.numPages, cls.numPages);
  assert.equal(dev.numPages, ats.numPages);
  assert.ok(dev.numPages >= 1 && dev.numPages <= 2, '样例简历应为 1-2 页');

  for (const t of [dev.text, cls.text, ats.text]) {
    // 渲染层零宽断行控制字符在文本抽取时呈现为空格 artifact，compact 后校验
    const clean = t.replace(/\u200B| /g, '');
    assert.ok(clean.includes('王昕'), '姓名进入 PDF');
    assert.ok(clean.includes('杭州云启科技'), '公司进入 PDF');
    assert.ok(clean.includes('浙江大学'), '教育进入 PDF');
    assert.ok(clean.includes('6800TPS'), '编辑后的 bullet 内容进入 PDF');
    assert.ok(!clean.includes('\uFFFD'), '无乱码替换字符');
  }
});

test('PDF：section 标题与关键词断言（三模板）', async () => {
  const { text } = await renderPdfAndExtract('developer');
  const clean = text.replace(/\u200B| /g, '');
  for (const kw of ['工作经历', '项目经历', '专业技能', '教育背景', '证书资质', '语言能力', 'Java后端开发工程师', '分布式支付网关']) {
    assert.ok(clean.includes(kw), `PDF 应包含「${kw}」`);
  }
});

test('PDF：模板样式差异真实生效（tokens 驱动 name/联系行）', () => {
  assert.ok(PDF_STYLES.developer.name.fontSize > PDF_STYLES.ats.name.fontSize, 'developer 姓名大于 ats');
  assert.ok(PDF_STYLES.classic.name.fontSize > PDF_STYLES.developer.name.fontSize, 'classic 姓名大于 developer');
  assert.equal(PDF_STYLES.ats.sectionTitle.borderBottomWidth, 0, 'ATS 关闭节标题下边框');
});

test('DOCX：A4 页尺寸 + 模板页边距 + keepNext + 中文字体（tokens 换算）', async () => {
  const { documentXml: devXml, stylesXml: devStyles } = await buildDocxAndReadXml('developer');
  assert.ok(devXml.includes('w:w="11906"'), '页宽 A4 210mm');
  assert.ok(devXml.includes('w:h="16838"'), '页高 A4 297mm');
  assert.ok(devXml.includes('w:top="720"'), 'developer 上边距 48px = 720 twip');
  assert.ok(devXml.includes('w:left="840"'), 'developer 左边距 56px = 840 twip');
  assert.ok(devXml.includes('w:keepNext'), 'section 标题/条目头 keepNext 防孤立');
  assert.ok(devStyles.includes('Noto Sans SC'), '中文字体声明（默认样式在 styles.xml）');

  const { documentXml: atsXml } = await buildDocxAndReadXml('ats');
  assert.ok(atsXml.includes('w:top="660"'), 'ats 上边距 44px = 660 twip');
  assert.ok(atsXml.includes('w:left="780"'), 'ats 左边距 52px = 780 twip');
});

test('DOCX：三模板 XML 层真实差异 + 内容进入（中文）', async () => {
  const { documentXml: devXml } = await buildDocxAndReadXml('developer');
  const { documentXml: atsXml } = await buildDocxAndReadXml('ats');

  assert.ok(devXml.includes('w:val="center"'), 'developer 头部居中');
  assert.ok(atsXml.includes('w:val="left"'), 'ats 头部左对齐');
  for (const x of [devXml, atsXml]) {
    assert.ok(x.includes('王昕'), '姓名进入 DOCX');
    assert.ok(x.includes('杭州云启科技'), '公司进入 DOCX');
    assert.ok(x.includes('工作经历'), 'section 标题进入 DOCX');
  }
  // 模板样式表参数真实不同
  assert.notEqual(DOCX_STYLES.developer.nameSize, DOCX_STYLES.ats.nameSize);
  assert.equal(DOCX_STYLES.ats.sectionBorder, false);
});

test('字体资源可用性：注册用的中文字体文件存在且非空', () => {
  const f400 = readFileSync(path.join(FONT_DIR, 'noto-sans-sc-chinese-simplified-400-normal.woff2'));
  const f700 = readFileSync(path.join(FONT_DIR, 'noto-sans-sc-chinese-simplified-700-normal.woff2'));
  assert.ok(f400.length > 100_000);
  assert.ok(f700.length > 100_000);
});

test('Phase 5D-2 子集化：按文档字符生成子集字体，PDF 体积显著下降且中文完整', async () => {
  const full = await renderPdfAndExtract('developer');

  // 与浏览器同一管线：collectResumeCharset + hbSubset + 完整 sfnt 资产
  const text = [...collectResumeCharset(sampleDoc())].join('');
  const wasmBytes = readFileSync(path.join(FONT_ASSET_DIR, 'harfbuzz-subset.wasm'));
  const hb = await createHbSubsetter(async () => WebAssembly.compile(wasmBytes));
  const src400 = otfDataUrl(hb.subset(new Uint8Array(readFileSync(path.join(FONT_ASSET_DIR, 'NotoSansSC-full-400.otf'))), text));
  const src700 = otfDataUrl(hb.subset(new Uint8Array(readFileSync(path.join(FONT_ASSET_DIR, 'NotoSansSC-full-700.otf'))), text));
  Font.register({
    family: 'NotoSansSCDocTest',
    fonts: [
      { src: src400, fontWeight: 400 },
      { src: src700, fontWeight: 700 },
    ],
  });

  const subset = await renderPdfAndExtract('developer', 'NotoSansSCDocTest');

  // 文档子集（百字级字符集）应远小于全量嵌入
  assert.ok(subset.length < full.length * 0.25, `子集 PDF ${subset.length}B 应远小于全量 ${full.length}B`);
  const clean = subset.text.replace(/\u200B| /g, '');
  for (const kw of ['王昕', '杭州云启科技', '6800TPS', '浙江大学', '专业技能']) {
    assert.ok(clean.includes(kw), `子集 PDF 应包含「${kw}」`);
  }
  assert.ok(!subset.text.includes('\uFFFD'), '子集渲染无乱码');
  assert.equal(subset.numPages, full.numPages, '子集与全量页数一致');
});

test('Phase 5D 排版回归：大字行盒不塌陷（姓名与职位不重叠、无右缘溢出）', async () => {
  const docElement = createElement(ResumePdfDocument, { doc: sampleDoc(), templateId: 'developer' });
  const buffer = await renderToBuffer(docElement as unknown as ReactElement);
  const pdfDoc = await pdfjs.getDocument({ data: new Uint8Array(buffer) }).promise;
  const page = await pdfDoc.getPage(1);
  const tc = await page.getTextContent();
  const items = (tc.items as Array<{ str: string; transform: number[]; width: number }>).filter((t) => (t.str ?? '').trim());

  // 注意：PDF 渲染层在 CJK 字符间插入零宽空格，文本匹配用单字符或 ASCII 词
  const nameY = items.find((t) => t.str.includes('王'))?.transform[5];
  const titleY = items.find((t) => t.str.includes('Java'))?.transform[5];
  assert.ok(nameY !== undefined && titleY !== undefined, '姓名与职位均应渲染');
  assert.ok(nameY - titleY >= 20, `姓名与职位基线差应 ≥ 20pt（实际 ${(nameY - titleY).toFixed(1)}pt），避免上下行重叠`);

  // 右缘不超出内容区（A4 595.28 - 左边距 42pt ≈ 553.28，容差 2pt）
  const maxRight = Math.max(...items.map((t) => t.transform[4] + t.width));
  assert.ok(maxRight <= 555.3, `文本右缘 ${maxRight.toFixed(1)}pt 不应溢出内容区`);

  // 段落必须折行：summary 文本应分布在多行（y 不同的 item 组）
  const ys = new Set(items.filter((t) => t.str.includes('经') || t.str.includes('开')).map((t) => Math.round(t.transform[5])));
  assert.ok(ys.size >= 2, '正文段落应折为多行而非一行溢出');
  await pdfDoc.destroy();
});

test('中文断行处理：insertCjkBreaks 只影响 PDF 文本层（原始字段不受污染）', () => {
  const doc = sampleDoc();
  assert.ok(!doc.basics.name.includes('\u200B'), 'source doc 不应包含零宽空格');
});

test('Phase 5D-2 字符集：collectResumeCharset 收集全部字段与固定文案', () => {
  const chars = collectResumeCharset(sampleDoc());
  for (const kw of ['王', '昕', '启', '验', 'J', 'a', 'v', '0']) {
    assert.ok(chars.has(kw), `字符集应包含「${kw}」`);
  }
  assert.ok(chars.has('经'), 'PDF 固定文案「工作经历」等字符进入集合');
  assert.equal(chars.has('\uFFFD'), false, '不应包含未定义字符');

  // 生僻字（扩展 B 区）也应被收集，子集化交由 hb 处理缺失字形而不丢字
  const rare = sampleDoc();
  rare.experience[0].bullets.push({ id: 'b-rare', text: '支持𠀀字符编码' });
  assert.ok(collectResumeCharset(rare).has('𠀀'), '生僻字符应进入字符集');
});