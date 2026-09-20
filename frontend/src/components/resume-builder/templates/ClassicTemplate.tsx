/**
 * Classic 模板：单栏居中、统一无衬线、日期右对齐（经典排版）
 *
 * 字体与 Developer 一致，避免 Georgia/Times New Roman 花体艺术字在不同字体下中英文数字混排错位。
 */

import type { ResumeDocument } from '../../../types/resumeDocument';
import { BulletList, EducationEntry, EntryHead, SectionTitle } from './shared';
import { COLOR, LINE_HEIGHT, TEMPLATE_NAME_PX, TYPE } from './tokens';

/** Classic 模板统一字号阶（Phase 5D：派生自 tokens） */
const FONT = {
  name: TEMPLATE_NAME_PX.classic,
  headline: TYPE.headline,
  section: TYPE.section,
  company: TYPE.company,
  jobTitle: TYPE.jobTitle,
  body: TYPE.body,
  meta: TYPE.meta,
} as const;
const LINE = LINE_HEIGHT;
/** 与 Developer 完全一致的无衬线字体系统 */
const SANS = "-apple-system,'Segoe UI',Roboto,'Noto Sans SC','Microsoft YaHei',sans-serif";

export function ClassicTemplate({ doc }: { doc: ResumeDocument }) {
  const { basics } = doc;
  const dateCls = 'rm-classic-date';
  const headCls = 'rm-classic-head';

  return (
    <div className="rm-classic" style={{ padding: '36px 44px', width: '100%', minHeight: '100%', fontFamily: SANS, color: COLOR.ink }}>
      {/* 头部 */}
      <div style={{ textAlign: 'center', marginBottom: 22 }}>
        {basics.name && <h1 style={{ margin: 0, fontSize: FONT.name, fontWeight: 700, letterSpacing: 2 }}>{basics.name}</h1>}
        {basics.title && <p style={{ margin: '6px 0 0', fontSize: FONT.headline, fontWeight: 600, color: COLOR.text }}>{basics.title}</p>}
        <p style={{ margin: '8px 0 0', fontSize: FONT.meta, color: COLOR.muted, lineHeight: LINE }}>
          {[basics.gender, basics.age, basics.email, basics.phone, basics.location, basics.website].filter(Boolean).join('  ·  ')}
        </p>
      </div>

      {/* 个人总结 */}
      {basics.summary && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>个人总结</SectionTitle>
          <p style={{ margin: 0, fontSize: FONT.body, lineHeight: LINE, color: COLOR.text }}>{basics.summary}</p>
        </div>
      )}

      {/* 工作经历 */}
      {doc.experience.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>工作经历</SectionTitle>
          {doc.experience.map(e => (
            <div key={e.id} style={{ marginBottom: 10 }}>
              <EntryHead main={e.company} sub={e.title} dates={e.startDate && e.endDate ? `${e.startDate} — ${e.endDate}` : ''} dateClassName={dateCls} />
              <BulletList bullets={e.bullets} />
            </div>
          ))}
        </div>
      )}

      {/* 项目经历 */}
      {doc.projects.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>项目经历</SectionTitle>
          {doc.projects.map(p => (
            <div key={p.id} style={{ marginBottom: 10 }}>
              <EntryHead main={p.name} sub={p.role} dates={p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : ''} dateClassName={dateCls} />
              <BulletList bullets={p.bullets} />
            </div>
          ))}
        </div>
      )}

      {/* 技能 */}
      {doc.skills.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>专业技能</SectionTitle>
          {doc.skills.map(g => (
            <p key={g.id} style={{ margin: '0 0 4px', fontSize: FONT.body, lineHeight: LINE }}>
              <span style={{ fontWeight: 700 }}>{g.category}：</span>
              {g.items.join('、')}
            </p>
          ))}
        </div>
      )}

      {/* 教育 */}
      {doc.education.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>教育背景</SectionTitle>
          {doc.education.map(e => (
            <EducationEntry key={e.id} item={e} dateClassName={dateCls} />
          ))}
        </div>
      )}

      {/* 证书 / 获奖 / 语言 */}
      {doc.certifications.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>证书资质</SectionTitle>
          {doc.certifications.map(c => (
            <p key={c.id} style={{ margin: '0 0 3px', fontSize: FONT.body }}>
              {c.name}
              {c.date ? <span style={{ color: COLOR.muted }}>（{c.date}）</span> : null}
            </p>
          ))}
        </div>
      )}
      {doc.awards.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>获奖荣誉</SectionTitle>
          {doc.awards.map(a => (
            <p key={a.id} style={{ margin: '0 0 3px', fontSize: FONT.body }}>
              {a.title}
              {a.date ? <span style={{ color: COLOR.muted }}>（{a.date}）</span> : null}
            </p>
          ))}
        </div>
      )}
      {doc.languages.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>语言能力</SectionTitle>
          {doc.languages.map(l => (
            <p key={l.id} style={{ margin: '0 0 3px', fontSize: FONT.body }}>
              {l.name}
              {l.level ? <span style={{ color: COLOR.muted }}>（{l.level}）</span> : null}
            </p>
          ))}
        </div>
      )}

      {doc.customSections.length > 0 && (
        <div style={{ marginBottom: 18 }}>
          <SectionTitle className={headCls}>其他内容</SectionTitle>
          {doc.customSections.map(s =>
            s.blocks.map(b =>
              b.type === 'bullet' ? (
                <div key={b.id} style={{ display: 'flex', gap: 6, fontSize: FONT.body, lineHeight: LINE }}>
                  <span style={{ flexShrink: 0 }}>•</span>
                  <span>{b.text}</span>
                </div>
              ) : (
                <p key={b.id} style={{ margin: 0, fontSize: FONT.body, lineHeight: LINE, whiteSpace: 'pre-wrap' }}>{b.text}</p>
              )
            )
          )}
        </div>
      )}
    </div>
  );
}

export type { ResumeDocument };
