/**
 * 模板共享的小型展示组件（纯函数，仅依赖数据）
 */

import type { ReactNode } from 'react';
import type { ResumeBullet, ResumeDocument } from '../../../types/resumeDocument';

/** 分节标题（各模板通过 className/字号自定义风格） */
export function SectionTitle({
  children,
  className,
  size,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <h2
      className={`text-sm font-bold tracking-wide uppercase ${className || ''}`}
      style={{ borderBottom: '1px solid currentColor', paddingBottom: 2, marginBottom: 8, ...(size ? { fontSize: size } : {}) }}
    >
      {children}
    </h2>
  );
}

/** bullet 列表 */
export function BulletList({
  bullets,
  className,
  bulletMark = '•',
}: {
  bullets: ResumeBullet[];
  className?: string;
  bulletMark?: string;
}) {
  if (bullets.length === 0) return null;
  return (
    <ul className={className} style={{ listStyle: 'none', margin: 0, padding: 0 }}>
      {bullets.map(b => (
        <li key={b.id} style={{ display: 'flex', gap: 6, marginBottom: 2, lineHeight: 1.55, fontSize: 12.5 }}>
          <span style={{ flexShrink: 0 }}>{bulletMark}</span>
          <span>{b.text}</span>
        </li>
      ))}
    </ul>
  );
}

/** 经历/项目条目的头部行：标题 · 公司 | 日期 */
export function EntryHead({
  main,
  sub,
  dates,
  dateClassName,
}: {
  main: string;
  sub?: string;
  dates?: string;
  dateClassName?: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
      <span style={{ fontWeight: 700, fontSize: 12.5 }}>{main}</span>
      {sub ? (
        <span style={{ fontSize: 12.5, opacity: 0.75 }}>{sub}</span>
      ) : null}
      {dates ? (
        <span className={dateClassName} style={{ marginLeft: 'auto', fontSize: 11.5, opacity: 0.7, whiteSpace: 'nowrap' }}>
          {dates}
        </span>
      ) : null}
    </div>
  );
}

/** 技能标签行 */
export function SkillChips({ items }: { items: string[] }) {
  return (
    <p style={{ margin: 0, fontSize: 10.5, lineHeight: 1.7 }}>
      {items.map((s, i) => (
        <span
          key={`${s}-${i}`}
          style={{
            display: 'inline-block',
            background: 'rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: 999,
            padding: '0 7px',
            margin: '0 4px 4px 0',
          }}
        >
          {s}
        </span>
      ))}
    </p>
  );
}

/** 经历/项目条目通用渲染（Modern / ATS 复用） */
export function ExperienceEntry({
  item,
  dateClassName,
}: {
  item: { id: string; company: string; title: string; startDate: string; endDate: string; bullets: ResumeBullet[] };
  dateClassName?: string;
}) {
  const dates = item.startDate || item.endDate ? `${item.startDate} — ${item.endDate}` : '';
  return (
    <div key={item.id} style={{ marginBottom: 8 }}>
      <EntryHead
        main={item.company}
        sub={item.title}
        dates={dates}
        dateClassName={dateClassName}
      />
      <BulletList bullets={item.bullets} />
    </div>
  );
}

/** 项目条目渲染 */
export function ProjectEntry({
  item,
  dateClassName,
}: {
  item: { id: string; name: string; role?: string; startDate?: string; endDate?: string; bullets: ResumeBullet[] };
  dateClassName?: string;
}) {
  const dates = item.startDate || item.endDate ? `${item.startDate} — ${item.endDate}` : '';
  return (
    <div key={item.id} style={{ marginBottom: 8 }}>
      <EntryHead
        main={item.name}
        sub={item.role}
        dates={dates}
        dateClassName={dateClassName}
      />
      <BulletList bullets={item.bullets} />
    </div>
  );
}

/** 教育条目渲染 */
export function EducationEntry({
  item,
  dateClassName,
}: {
  item: { id: string; school: string; degree: string; major: string; startDate?: string; endDate?: string; bullets: ResumeBullet[] };
  dateClassName?: string;
}) {
  const dates = item.startDate || item.endDate ? `${item.startDate} — ${item.endDate}` : '';
  const sub = [item.degree, item.major].filter(Boolean).join(' · ');
  return (
    <div key={item.id} style={{ marginBottom: 6 }}>
      <EntryHead
        main={item.school}
        sub={sub || undefined}
        dates={dates}
        dateClassName={dateClassName}
      />
      <BulletList bullets={item.bullets} />
    </div>
  );
}

/** 节是否为空（决定是否渲染该区块） */
export function isEmptySection(doc: ResumeDocument): boolean {
  return (
    doc.experience.length === 0 &&
    doc.projects.length === 0 &&
    doc.education.length === 0 &&
    doc.skills.length === 0 &&
    doc.customSections.length === 0 &&
    !doc.basics.summary
  );
}

/** customSections 逐块渲染（paragraph / bullet / text） */
export function CustomSectionRenderer({
  sections,
  font = {},
}: {
  sections: ResumeDocument['customSections'];
  font?: React.CSSProperties;
}) {
  if (sections.length === 0) return null;
  return (
    <>
      {sections.map(s => (
        <div key={s.id} style={{ marginBottom: 14 }}>
          <SectionTitle>{s.title}</SectionTitle>
          {s.blocks.map(b =>
            b.type === 'bullet' ? (
              <div key={b.id} style={{ display: 'flex', gap: 6, ...font, lineHeight: 1.6 }}>
                <span style={{ flexShrink: 0 }}>•</span>
                <span>{b.text}</span>
              </div>
            ) : (
              <p key={b.id} style={{ margin: 0, ...font, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                {b.text}
              </p>
            )
          )}
        </div>
      ))}
    </>
  );
}

export type { ResumeDocument };
