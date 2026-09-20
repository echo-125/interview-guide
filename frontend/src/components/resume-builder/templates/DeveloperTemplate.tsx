/**
 * Developer 模板（程序员单栏 · ATS 友好 · 统一字体系统）
 *
 * 设计要点：
 * - 单栏，A4，黑白为主 + 少量强调色，信息密度高
 * - 字体系统由模板统一控制（ResumeDocument 不携带 fontSize）
 * - 工作经历优先、项目清晰、技术栈明显、日期右对齐
 * - section heading / bullet 统一，不使用花哨图标作为信息载体
 * - 不使用双栏 sidebar / 大面积彩色侧栏
 */

import type { ResumeBullet, ResumeDocument } from '../../../types/resumeDocument';
import { SectionTitle } from './shared';
import { COLOR, LINE_HEIGHT, TEMPLATE_NAME_PX, TYPE } from './tokens';

/** 统一字体阶（Phase 5D：派生自 tokens，与块版/PDF/DOCX 一致） */
const FONT = {
  name: TEMPLATE_NAME_PX.developer,
  headline: TYPE.headline,
  section: TYPE.section,
  company: TYPE.company,
  jobTitle: TYPE.jobTitle,
  body: TYPE.body,
  meta: TYPE.meta,
} as const;
const LINE = LINE_HEIGHT;

const INK = COLOR.ink;
const MUTED = COLOR.muted;
const ACCENT = COLOR.accent;

function BulletList({ bullets, mark = '•' }: { bullets: ResumeBullet[]; mark?: string }) {
  return (
    <>
      {bullets.map(b => (
        <li key={b.id} style={{ display: 'flex', gap: 6, fontSize: FONT.body, lineHeight: LINE, marginBottom: 2 }}>
          <span style={{ flexShrink: 0, color: ACCENT }}>{mark}</span>
          <span>{b.text}</span>
        </li>
      ))}
    </>
  );
}

function EntryHead({ main, sub, dates }: { main: string; sub?: string; dates?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
      <span style={{ fontWeight: 700, fontSize: FONT.company }}>{main}</span>
      {sub ? <span style={{ fontSize: FONT.jobTitle, fontWeight: 500 }}>{sub}</span> : null}
      {dates ? (
        <span style={{ marginLeft: 'auto', fontSize: FONT.meta, color: MUTED, whiteSpace: 'nowrap' }}>{dates}</span>
      ) : null}
    </div>
  );
}

export function DeveloperTemplate({ doc }: { doc: ResumeDocument }) {
  const b = doc.basics;
  const skills = doc.skills;
  const experience = doc.experience;
  const projects = doc.projects;
  const education = doc.education;
  const certs = doc.certifications;
  const languages = doc.languages;

  return (
    <div style={{ padding: '36px 42px', width: '100%', minHeight: '100%', color: INK, fontFamily: "-apple-system,'Segoe UI',Roboto,'Noto Sans SC','Microsoft YaHei',sans-serif" }}>
      {/* 头部 */}
      {b.name && <h1 style={{ margin: 0, fontSize: FONT.name, fontWeight: 700, letterSpacing: 0.5 }}>{b.name}</h1>}
      {b.title && <p style={{ margin: '4px 0 0', fontSize: FONT.headline, color: ACCENT, fontWeight: 600 }}>{b.title}</p>}
      {(b.email || b.phone || b.location || b.gender || b.age) && (
        <p style={{ margin: '8px 0 0', fontSize: FONT.meta, color: MUTED, lineHeight: LINE }}>
          {[b.gender, b.age, b.email, b.phone, b.location, b.website].filter(Boolean).join('  ·  ')}
        </p>
      )}
      {b.summary && (
        <div style={{ marginTop: 12 }}>
          <SectionTitle size={FONT.section}>个人总结</SectionTitle>
          <p style={{ margin: 0, fontSize: FONT.body, lineHeight: LINE, color: COLOR.text }}>{b.summary}</p>
        </div>
      )}

      {/* 工作经历 */}
      {experience.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <SectionTitle size={FONT.section}>工作经历</SectionTitle>
          {experience.map(e => {
            const dates = e.startDate || e.endDate ? `${e.startDate} — ${e.endDate}` : '';
            return (
              <div key={e.id} style={{ marginBottom: 9 }}>
                <EntryHead main={e.company} sub={e.title} dates={dates} />
                {e.description ? <p style={{ margin: '2px 0 3px', fontSize: FONT.body, lineHeight: LINE, color: COLOR.text }}>{e.description}</p> : null}
                <ul style={{ listStyle: 'none', margin: '2px 0 0', padding: 0 }}>
                  <BulletList bullets={e.bullets} />
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* 项目经历 */}
      {projects.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <SectionTitle size={FONT.section}>项目经历</SectionTitle>
          {projects.map(p => {
            const dates = p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : '';
            return (
              <div key={p.id} style={{ marginBottom: 9 }}>
                <EntryHead main={p.name} sub={p.role} dates={dates} />
                {p.technologies && p.technologies.length > 0 && (
                  <p style={{ margin: '2px 0 3px', fontSize: FONT.meta, color: MUTED }}>
                    技术栈：{p.technologies.join('、')}
                  </p>
                )}
                <ul style={{ listStyle: 'none', margin: '2px 0 0', padding: 0 }}>
                  <BulletList bullets={p.bullets} />
                </ul>
              </div>
            );
          })}
        </div>
      )}

      {/* 技能 */}
      {skills.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <SectionTitle size={FONT.section}>专业技能</SectionTitle>
          {skills.map(g => (
            <p key={g.id} style={{ margin: '0 0 4px', fontSize: FONT.body, lineHeight: LINE }}>
              <span style={{ fontWeight: 600 }}>{g.category || g.name || '技能'}：</span>
              {g.items.join('、')}
            </p>
          ))}
        </div>
      )}

      {/* 教育 */}
      {education.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <SectionTitle size={FONT.section}>教育背景</SectionTitle>
          {education.map(e => (
            <div key={e.id} style={{ marginBottom: 6 }}>
              <EntryHead
                main={e.school}
                sub={[e.degree, e.major].filter(Boolean).join(' · ')}
                dates={e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : ''}
              />
            </div>
          ))}
        </div>
      )}

      {/* 证书 / 语言 */}
      {(certs.length > 0 || languages.length > 0) && (
        <div style={{ marginTop: 14 }}>
          <SectionTitle size={FONT.section}>证书与语言</SectionTitle>
          {certs.map(c => (
            <p key={c.id} style={{ margin: '0 0 3px', fontSize: FONT.body }}>
              {c.name}
              {c.date ? <span style={{ color: MUTED, fontSize: FONT.meta }}>（{c.date}）</span> : null}
            </p>
          ))}
          {languages.map(l => (
            <p key={l.id} style={{ margin: '0 0 3px', fontSize: FONT.body }}>
              {l.name}
              {l.level ? <span style={{ color: MUTED, fontSize: FONT.meta }}>（{l.level}）</span> : null}
            </p>
          ))}
        </div>
      )}

      {/* 其他内容（若仍有未结构化内容，清晰分块展示，不挤成一团） */}
      {doc.customSections.length > 0 && (
        <div style={{ marginTop: 14 }}>
          <SectionTitle size={FONT.section}>其他内容</SectionTitle>
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
