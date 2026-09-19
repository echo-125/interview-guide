/**
 * PDF 结构化导出 (Phase 3 POC)
 *
 * 使用 @react-pdf/renderer（Reactive Resume / OpenResume 同款方案）：
 * - 由同一份 ResumeDocument 声明式渲染为 PDF 文档（非截图/非 HTML 打印）
 * - 中文字体走 pdfFonts 注册的 NotoSansSC
 * - 分页由 react-pdf 自动流式处理，A4 尺寸
 */

import { Document, Page, StyleSheet, Text, View, pdf } from '@react-pdf/renderer';
import type { ReactNode } from 'react';
import type { ResumeBullet, ResumeDocument } from '../../types/resumeDocument';
import { ensurePdfFonts, PDF_FONT_STACK } from '../../utils/resumeDocument/pdfFonts';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    lineHeight: 1.55,
    fontFamily: PDF_FONT_STACK,
    color: '#1f2937',
  },
  header: { marginBottom: 12 },
  name: { fontSize: 26, fontWeight: 700, marginBottom: 2 },
  title: { fontSize: 14, color: '#0f766e', marginBottom: 4 },
  contact: { fontSize: 11, color: '#6b7280' },
  summary: { fontSize: 12.5, marginTop: 6, color: '#374151' },
  section: { marginTop: 12 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 2,
    marginBottom: 6,
  },
  entry: { marginBottom: 7 },
  entryHead: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 2 },
  entryMain: { fontSize: 13, fontWeight: 700 },
  entrySub: { fontSize: 11, color: '#6b7280', marginLeft: 6 },
  entryDates: { fontSize: 11, color: '#6b7280', marginLeft: 'auto' },
  bullet: { flexDirection: 'row', marginBottom: 1 },
  bulletMark: { width: 8 },
  bulletText: { flex: 1 },
  skillLine: { fontSize: 11.5, marginBottom: 2 },
  skillLabel: { fontWeight: 700 },
});

function Bullets({ bullets }: { bullets: ResumeBullet[] }) {
  if (bullets.length === 0) return null;
  return (
    <>
      {bullets.map(b => (
        <View key={b.id} style={styles.bullet}>
          <Text style={styles.bulletMark}>•</Text>
          <Text style={styles.bulletText}>{b.text}</Text>
        </View>
      ))}
    </>
  );
}

function Section({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

/** PDF 文档组件（Modern 风格，单页自动流式分页） */
export function ResumePdfDocument({ doc }: { doc: ResumeDocument }) {
  ensurePdfFonts();
  const { basics } = doc;

  return (
    <Document title={`${basics.name || 'resume'}-简历`}>
      <Page size="A4" style={styles.page}>
        {/* 头部 */}
        <View style={styles.header}>
          <Text style={styles.name}>{basics.name}</Text>
          {basics.title ? <Text style={styles.title}>{basics.title}</Text> : null}
          <Text style={styles.contact}>
            {[basics.gender, basics.age, basics.email, basics.phone, basics.location, basics.website].filter(Boolean).join('  |  ')}
          </Text>
          {basics.summary ? <Text style={styles.summary}>{basics.summary}</Text> : null}
        </View>

        {/* 工作经历 */}
        {doc.experience.length > 0 && (
          <Section title="工作经历">
            {doc.experience.map(e => (
              <View key={e.id} style={styles.entry}>
                <View style={styles.entryHead}>
                  <Text style={styles.entryMain}>{e.company}</Text>
                  {e.title ? <Text style={styles.entrySub}>{e.title}</Text> : null}
                  {e.startDate || e.endDate ? (
                    <Text style={styles.entryDates}>{`${e.startDate} — ${e.endDate}`}</Text>
                  ) : null}
                </View>
                <Bullets bullets={e.bullets} />
              </View>
            ))}
          </Section>
        )}

        {/* 项目经历 */}
        {doc.projects.length > 0 && (
          <Section title="项目经历">
            {doc.projects.map(p => (
              <View key={p.id} style={styles.entry}>
                <View style={styles.entryHead}>
                  <Text style={styles.entryMain}>{p.name}</Text>
                  {p.role ? <Text style={styles.entrySub}>{p.role}</Text> : null}
                  {p.startDate || p.endDate ? (
                    <Text style={styles.entryDates}>{`${p.startDate || ''} — ${p.endDate || ''}`}</Text>
                  ) : null}
                </View>
                <Bullets bullets={p.bullets} />
              </View>
            ))}
          </Section>
        )}

        {/* 技能 */}
        {doc.skills.length > 0 && (
          <Section title="专业技能">
            {doc.skills.map(g => (
              <Text key={g.id} style={styles.skillLine}>
                <Text style={styles.skillLabel}>{g.category}：</Text>
                {g.items.join('、')}
              </Text>
            ))}
          </Section>
        )}

        {/* 教育 */}
        {doc.education.length > 0 && (
          <Section title="教育背景">
            {doc.education.map(e => (
              <View key={e.id} style={styles.entry}>
                <View style={styles.entryHead}>
                  <Text style={styles.entryMain}>{e.school}</Text>
                  {e.degree || e.major ? (
                    <Text style={styles.entrySub}>{[e.degree, e.major].filter(Boolean).join(' · ')}</Text>
                  ) : null}
                  {e.startDate || e.endDate ? (
                    <Text style={styles.entryDates}>{`${e.startDate || ''} — ${e.endDate || ''}`}</Text>
                  ) : null}
                </View>
                <Bullets bullets={e.bullets} />
              </View>
            ))}
          </Section>
        )}

        {/* 证书 / 获奖 / 语言 */}
        {doc.certifications.length > 0 && (
          <Section title="证书资质">
            {doc.certifications.map(c => (
              <Text key={c.id} style={styles.skillLine}>
                {c.name}
                {c.date ? `  (${c.date})` : ''}
              </Text>
            ))}
          </Section>
        )}
        {doc.awards.length > 0 && (
          <Section title="获奖荣誉">
            {doc.awards.map(a => (
              <Text key={a.id} style={styles.skillLine}>
                {a.title}
                {a.date ? `  (${a.date})` : ''}
              </Text>
            ))}
          </Section>
        )}
        {doc.languages.length > 0 && (
          <Section title="语言能力">
            {doc.languages.map(l => (
              <Text key={l.id} style={styles.skillLine}>
                {l.name}
                {l.level ? `  (${l.level})` : ''}
              </Text>
            ))}
          </Section>
        )}

        {doc.customSections.map(s => (
          <Section key={s.id} title={s.title}>
            {s.blocks.map(b => (
              <Text key={b.id} style={{ fontSize: 12, marginBottom: 2 }}>{b.text}</Text>
            ))}
          </Section>
        ))}
      </Page>
    </Document>
  );
}

/** 生成 PDF Blob（结构化渲染） */
export async function buildResumePdfBlob(doc: ResumeDocument): Promise<Blob> {
  ensurePdfFonts();
  return pdf(<ResumePdfDocument doc={doc} />).toBlob();
}

/** 触发浏览器下载 PDF；basename 用于文件名（缺省取 basics.name 或 resume） */
export async function exportResumePdf(doc: ResumeDocument, basename?: string): Promise<void> {
  const blob = await buildResumePdfBlob(doc);
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
