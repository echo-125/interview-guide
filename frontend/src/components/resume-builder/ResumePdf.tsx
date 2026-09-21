/**
 * PDF 结构化导出（Phase 4B 正式功能；Phase 5D 分页对齐与中文断行修复）
 *
 * 使用 @react-pdf/renderer（Reactive Resume / OpenResume 同款方案）：
 * - 由同一份 ResumeDocument 声明式渲染为 PDF 文档（非截图/非 HTML 打印）
 * - 中文字体走 pdfFonts 注册（Phase 5D-2 按文档字符子集化）
 * - 分页由 react-pdf 自动流式处理，A4 尺寸
 * - 版式按 templateId 参数化；字号/行高/边距派生自统一 tokens（与 Preview 一致）
 *
 * Phase 5D 修复：
 * - textkit 对无空格 CJK 文本不产生断行机会（整段一行溢出页面），
 *   所有中文动态文本经 insertCjkBreaks 插入零宽空格提供断行机会；
 * - section 标题与首条目（含第一条 bullet）捆绑 <View wrap={false}>，
 *   对齐 Preview packBlocks 的 keep-with-next、避免孤立 bullet 标记。
 */

import { Document, Page, Text, View, pdf } from '@react-pdf/renderer';
import type { ReactNode } from 'react';
import type { ResumeBullet, ResumeDocument } from '../../types/resumeDocument';
import { PDF_STYLES, type PdfStyles } from './templates/pdfStyles.ts';
import type { ResumeTemplateId } from './templates/types';
import { insertCjkBreaks } from '../../utils/resumeDocument/pdfTextBreaks';
import { wrapCjkText } from '../../utils/resumeDocument/cjkWrap';

/** 中文动态文本的断行处理（短别名） */
const b = insertCjkBreaks;

/** A4 页面宽度（pt），用于按内容宽手工折行 */
const PAGE_WIDTH_PT = 595.28;

function Bullets({ bullets, style, bw }: { bullets: ResumeBullet[]; style: PdfStyles; bw: (t: string, fs?: number, reserve?: number) => string }) {
  if (bullets.length === 0) return null;
  return (
    <>
      {bullets.map(bul => (
        // wrap=false：单条 bullet 不跨页碎开，避免页尾只剩 bullet 标记
        <View key={bul.id} style={style.bullet} wrap={false}>
          <Text style={style.bulletMark}>•</Text>
          <Text style={style.bulletText}>{bw(bul.text, style.page.fontSize, 24)}</Text>
        </View>
      ))}
    </>
  );
}

/** 条目头部行：主标题 + 副标题 + 日期 */
function EntryHeadView({
  main,
  sub,
  dates,
  styles,
}: {
  main: string;
  sub?: string;
  dates?: string;
  styles: PdfStyles;
}) {
  return (
    <View style={styles.entryHead}>
      <Text style={styles.entryMain}>{b(main)}</Text>
      {sub ? <Text style={styles.entrySub}>{b(sub)}</Text> : null}
      {dates ? <Text style={styles.entryDates}>{dates}</Text> : null}
    </View>
  );
}

/**
 * Section 容器（Phase 5D）：标题与首条目（first，含第一条 bullet）捆绑在不可分页
 * 的 View 内，页尾放不下则整块移至下一页——标题不孤立、条目头不孤立、bullet 标记不孤立。
 * first 之后的其余内容（children）仍允许流式跨页。
 */
function Section({
  title,
  styles,
  first,
  children,
}: {
  title: string;
  styles: PdfStyles;
  first?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <View style={styles.section}>
      <View wrap={false}>
        <Text style={styles.sectionTitle}>{title}</Text>
        {first}
      </View>
      {children}
    </View>
  );
}

/** 首条目（仅条目头，供 Section 捆绑；bullet 不捆绑以避免大块跳页空白） */
function FirstExperience({ e, styles }: { e: ResumeDocument['experience'][number]; styles: PdfStyles }) {
  return (
    <EntryHeadView
      main={e.company}
      sub={e.title}
      dates={e.startDate || e.endDate ? `${e.startDate} — ${e.endDate}` : undefined}
      styles={styles}
    />
  );
}

function FirstProject({ p, styles }: { p: ResumeDocument['projects'][number]; styles: PdfStyles }) {
  return (
    <EntryHeadView
      main={p.name}
      sub={p.role}
      dates={p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : undefined}
      styles={styles}
    />
  );
}

function FirstEducation({ e, styles }: { e: ResumeDocument['education'][number]; styles: PdfStyles }) {
  return (
    <EntryHeadView
      main={e.school}
      sub={[e.degree, e.major].filter(Boolean).join(' · ')}
      dates={e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : undefined}
      styles={styles}
    />
  );
}

/** PDF 文档组件（按 templateId 选择版式，自动流式分页） */
export function ResumePdfDocument({
  doc,
  templateId = 'developer',
  fontFamily,
}: {
  doc: ResumeDocument;
  templateId?: ResumeTemplateId;
  /** Phase 5D：可选字体族覆盖（运行时子集字体注册为独立 family 时使用） */
  fontFamily?: string;
}) {
  const baseStyles = PDF_STYLES[templateId] ?? PDF_STYLES.developer;
  const styles = (fontFamily
    ? { ...baseStyles, page: { ...baseStyles.page, fontFamily: [fontFamily, 'Helvetica'] } }
    : baseStyles) as PdfStyles;
  const { basics } = doc;

  // BUG-002：手工折行——按模板页边距计算内容宽，长文本拆成多行（\n 分段），
  // 每行不超宽 → textkit 不自行折行 → 不注入连字符「-」。
  const pageStyle = baseStyles.page as { paddingLeft?: number; paddingRight?: number; fontSize?: number };
  const contentWidth = PAGE_WIDTH_PT - (pageStyle.paddingLeft ?? 42) - (pageStyle.paddingRight ?? 42);
  const bw = (t: string, fs?: number, extraReserve = 16) =>
    wrapCjkText(t, fs ?? pageStyle.fontSize ?? 12, Math.max(60, contentWidth - extraReserve));

  return (
    <Document title={`${basics.name || 'resume'}-简历`}>
      <Page size="A4" style={styles.page}>
        {/* 头部 */}
        <View style={styles.header}>
          <Text style={styles.name}>{bw(basics.name || '', styles.name.fontSize)}</Text>
          {basics.title ? <Text style={styles.title}>{bw(basics.title, styles.title.fontSize)}</Text> : null}
          <Text style={styles.contact}>
            {[basics.gender, basics.age, basics.email, basics.phone, basics.location, basics.website].filter(Boolean).join('  |  ')}
          </Text>
          {basics.summary ? <Text style={styles.summary}>{bw(basics.summary, styles.summary.fontSize, 14)}</Text> : null}
        </View>

        {/* 工作经历 */}
        {doc.experience.length > 0 && (
          <Section title="工作经历" styles={styles} first={<FirstExperience e={doc.experience[0]} styles={styles} />}>
            {doc.experience.map((e, i) => (
              <View key={e.id} style={styles.entry}>
                {i > 0 ? (
                  <EntryHeadView
                    main={e.company}
                    sub={e.title}
                    dates={e.startDate || e.endDate ? `${e.startDate} — ${e.endDate}` : undefined}
                    styles={styles}
                  />
                ) : null}
                <Bullets bullets={e.bullets} style={styles} bw={bw} />
              </View>
            ))}
          </Section>
        )}

        {/* 项目经历 */}
        {doc.projects.length > 0 && (
          <Section title="项目经历" styles={styles} first={<FirstProject p={doc.projects[0]} styles={styles} />}>
            {doc.projects.map((p, i) => (
              <View key={p.id} style={styles.entry}>
                {i > 0 ? (
                  <EntryHeadView
                    main={p.name}
                    sub={p.role}
                    dates={p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : undefined}
                    styles={styles}
                  />
                ) : null}
                <Bullets bullets={p.bullets} style={styles} bw={bw} />
              </View>
            ))}
          </Section>
        )}

        {/* 技能 */}
        {doc.skills.length > 0 && (
          <Section
            title="专业技能"
            styles={styles}
            first={
              (() => {
                const g = doc.skills[0];
                return (
                  <Text style={styles.skillLine}>
                    <Text style={styles.skillLabel}>{b(g.category)}：</Text>
                    {bw(g.items.join('、'), styles.skillLine.fontSize, 18)}
                  </Text>
                );
              })()
            }
          >
            {doc.skills.slice(1).map(g => (
              <Text key={g.id} style={styles.skillLine}>
                <Text style={styles.skillLabel}>{b(g.category)}：</Text>
                {bw(g.items.join('、'), styles.skillLine.fontSize, 18)}
              </Text>
            ))}
          </Section>
        )}

        {/* 教育 */}
        {doc.education.length > 0 && (
          <Section title="教育背景" styles={styles} first={<FirstEducation e={doc.education[0]} styles={styles} />}>
            {doc.education.map((e, i) => (
              <View key={e.id} style={styles.entry}>
                {i > 0 ? (
                  <EntryHeadView
                    main={e.school}
                    sub={[e.degree, e.major].filter(Boolean).join(' · ')}
                    dates={e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : undefined}
                    styles={styles}
                  />
                ) : null}
                <Bullets bullets={e.bullets} style={styles} bw={bw} />
              </View>
            ))}
          </Section>
        )}

        {/* 证书 / 获奖 / 语言：标题与首行捆绑 */}
        {doc.certifications.length > 0 && (
          <Section
            title="证书资质"
            styles={styles}
            first={
              <Text style={styles.skillLine}>
                {bw(doc.certifications[0].name, styles.skillLine.fontSize, 18)}
                {doc.certifications[0].date ? `  (${doc.certifications[0].date})` : ''}
              </Text>
            }
          >
            {doc.certifications.slice(1).map(c => (
              <Text key={c.id} style={styles.skillLine}>
                {bw(c.name, styles.skillLine.fontSize, 18)}
                {c.date ? `  (${c.date})` : ''}
              </Text>
            ))}
          </Section>
        )}
        {doc.awards.length > 0 && (
          <Section
            title="获奖荣誉"
            styles={styles}
            first={
              <Text style={styles.skillLine}>
                {bw(doc.awards[0].title, styles.skillLine.fontSize, 18)}
                {doc.awards[0].date ? `  (${doc.awards[0].date})` : ''}
              </Text>
            }
          >
            {doc.awards.slice(1).map(a => (
              <Text key={a.id} style={styles.skillLine}>
                {bw(a.title, styles.skillLine.fontSize, 18)}
                {a.date ? `  (${a.date})` : ''}
              </Text>
            ))}
          </Section>
        )}
        {doc.languages.length > 0 && (
          <Section
            title="语言能力"
            styles={styles}
            first={
              <Text style={styles.skillLine}>
                {bw(doc.languages[0].name, styles.skillLine.fontSize, 18)}
                {doc.languages[0].level ? `  (${doc.languages[0].level})` : ''}
              </Text>
            }
          >
            {doc.languages.slice(1).map(l => (
              <Text key={l.id} style={styles.skillLine}>
                {bw(l.name, styles.skillLine.fontSize, 18)}
                {l.level ? `  (${l.level})` : ''}
              </Text>
            ))}
          </Section>
        )}

        {doc.customSections.map(s => (
          <Section
            key={s.id}
            title={bw(s.title, styles.sectionTitle.fontSize, 18)}
            styles={styles}
            first={
              s.blocks.length > 0 ? (
                <Text style={{ fontSize: styles.page.fontSize, lineHeight: 1.65, marginBottom: 2 }}>{bw(s.blocks[0].text, styles.page.fontSize, 16)}</Text>
              ) : undefined
            }
          >
            {s.blocks.slice(1).map(bl => (
              <Text key={bl.id} style={{ fontSize: styles.page.fontSize, lineHeight: 1.65, marginBottom: 2 }}>{bw(bl.text, styles.page.fontSize, 16)}</Text>
            ))}
          </Section>
        ))}
      </Page>
    </Document>
  );
}

/** 生成 PDF Blob（结构化渲染，按 templateId 选版式；Phase 5D-2 按文档字符子集化字体） */
export async function buildResumePdfBlob(
  doc: ResumeDocument,
  templateId: ResumeTemplateId = 'developer'
): Promise<Blob> {
  const { resolvePdfFont, ensurePdfFont } = await import('../../utils/resumeDocument/pdfFonts');
  // 文档子集字体（体积小）；任一步失败内部回退全量（缺字率 0 兜底）
  const family = ensurePdfFont(await resolvePdfFont(doc));
  return pdf(<ResumePdfDocument doc={doc} templateId={templateId} fontFamily={family} />).toBlob();
}

/** 触发浏览器下载 PDF（按当前模板导出）；basename 用于文件名（缺省取 basics.name 或 resume） */
export async function exportResumePdf(
  doc: ResumeDocument,
  templateId: ResumeTemplateId = 'developer',
  basename?: string
): Promise<void> {
  const blob = await buildResumePdfBlob(doc, templateId);
  const safe = (basename || doc.basics.name || 'resume').replace(/[\\/:*?"<>|]/g, '');
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${safe}-优化版.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}