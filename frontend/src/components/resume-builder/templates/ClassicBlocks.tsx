/**
 * Classic 模板的「分页友好块」版本。
 *
 * 与 ClassicTemplate.tsx 视觉一致（单栏居中、统一无衬线、日期右对齐），但把内容拆成 PageBlock[]，
 * 供 A4Preview 做块级分页：标题与下一条目同页、正文可跨页但不切词。
 * 块与块之间用内边距分隔（不用跨块 margin），保证「测量高度 = 展示高度」。
 *
 * 与 DeveloperBlocks 的差异：
 * - 头部居中
 * - Section 标题居中、带下划线分隔
 * - 字号略大（name 32）
 */

import type { CSSProperties } from 'react';
import type { ResumeDocument } from '../../../types/resumeDocument';
import type { PageBlock } from './pagination';
import { COLOR, LINE_HEIGHT, TEMPLATE_NAME_PX, TYPE } from './tokens';

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
const INK = COLOR.ink;
const MUTED = COLOR.muted;
const SANS = "-apple-system,'Segoe UI',Roboto,'Noto Sans SC','Microsoft YaHei',sans-serif";

function st(style: CSSProperties): CSSProperties {
  return { fontFamily: SANS, color: INK, ...style };
}

function SectionTitle({ text, pad }: { text: string; pad: number }) {
  return (
    <div style={st({ display: 'flex', alignItems: 'baseline', gap: 6, paddingBottom: 3, marginTop: pad, justifyContent: 'center' })}>
      <span style={{ fontSize: FONT.section, fontWeight: 700, letterSpacing: 0.5, color: INK }}>{text}</span>
      <span style={{ flex: 1, height: 1.5, background: '#d1d5db' }} />
    </div>
  );
}

function BulletText({ text, mark = '•' }: { text: string; mark?: string }) {
  return (
    <li style={st({ display: 'flex', gap: 6, fontSize: FONT.body, lineHeight: LINE, marginBottom: 2 })}>
      <span style={{ flexShrink: 0, color: MUTED }}>{mark}</span>
      <span>{text}</span>
    </li>
  );
}

function Head({ main, sub, dates, pad }: { main: string; sub?: string; dates?: string; pad: number }) {
  return (
    <div style={st({ display: 'flex', alignItems: 'baseline', gap: 8, paddingTop: pad })}>
      <span style={{ fontWeight: 700, fontSize: FONT.company, color: INK }}>{main}</span>
      {sub ? <span style={{ fontSize: FONT.jobTitle, fontWeight: 500, color: COLOR.text }}>{sub}</span> : null}
      {dates ? (
        <span style={{ marginLeft: 'auto', fontSize: FONT.meta, color: MUTED, whiteSpace: 'nowrap' }}>{dates}</span>
      ) : null}
    </div>
  );
}

/** 生成 Classic 模板的分页块（视觉与 ClassicTemplate 一致） */
export function buildClassicBlocks(doc: ResumeDocument): PageBlock[] {
  const b = doc.basics;
  const blocks: PageBlock[] = [];
  const key = (p: string) => `cls-${p}`;

  // 头部（居中）
  blocks.push({
    key: key('header'),
    node: (
      <div style={st({ textAlign: 'center', paddingBottom: 12 })}>
        {b.name ? (
          <h1 style={{ margin: 0, fontSize: FONT.name, fontWeight: 700, letterSpacing: 2 }}>{b.name}</h1>
        ) : null}
        {b.title ? (
          <p style={{ margin: '6px 0 0', fontSize: FONT.headline, fontWeight: 600, color: COLOR.text }}>{b.title}</p>
        ) : null}
        {(b.email || b.phone || b.location || b.website || b.gender || b.age || b.workYears) ? (
          <p style={{ margin: '8px 0 0', fontSize: FONT.meta, color: MUTED, lineHeight: LINE }}>
            {[b.gender, b.age, b.workYears, b.email, b.phone, b.location, b.website].filter(Boolean).join('  ·  ')}
          </p>
        ) : null}
        {b.summary ? (
          <p style={{ margin: '10px 0 0', fontSize: FONT.body, lineHeight: LINE, color: COLOR.text }}>{b.summary}</p>
        ) : null}
      </div>
    ),
  });

  // 工作经历
  if (doc.experience.length > 0) {
    blocks.push({ key: key('exp-title'), node: <SectionTitle text="工作经历" pad={16} />, avoid: 'after' });
    doc.experience.forEach((e, idx) => {
      const dates = e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : '';
      blocks.push({
        key: key(`exp-${e.id}-head`),
        node: <Head main={e.company} sub={e.title} dates={dates} pad={idx === 0 ? 6 : 9} />,
        avoid: 'after',
      });
      if (e.description) {
        blocks.push({
          key: key(`exp-${e.id}-desc`),
          node: (
            <p style={st({ margin: '2px 0 3px', fontSize: FONT.body, lineHeight: LINE, color: COLOR.text })}>
              {e.description}
            </p>
          ),
        });
      }
      e.bullets.forEach((bl) =>
        blocks.push({
          key: key(`exp-${e.id}-bl-${bl.id}`),
          node: (
            <ul style={st({ listStyle: 'none', margin: '2px 0 0', padding: 0, display: 'flex', flexDirection: 'column' })}>
              <BulletText text={bl.text} />
            </ul>
          ),
        }),
      );
    });
  }

  // 项目经历
  if (doc.projects.length > 0) {
    blocks.push({ key: key('prj-title'), node: <SectionTitle text="项目经历" pad={14} />, avoid: 'after' });
    doc.projects.forEach((p, idx) => {
      const dates = p.startDate || p.endDate ? `${p.startDate || ''} — ${p.endDate || ''}` : '';
      blocks.push({
        key: key(`prj-${p.id}-head`),
        node: <Head main={p.name} sub={p.role} dates={dates} pad={idx === 0 ? 6 : 9} />,
        avoid: 'after',
      });
      if (p.technologies && p.technologies.length > 0) {
        blocks.push({
          key: key(`prj-${p.id}-tech`),
          node: (
            <p style={st({ margin: '2px 0 3px', fontSize: FONT.meta, color: MUTED })}>
              技术栈：{p.technologies.join('、')}
            </p>
          ),
        });
      }
      p.bullets.forEach((bl) =>
        blocks.push({
          key: key(`prj-${p.id}-bl-${bl.id}`),
          node: (
            <ul style={st({ listStyle: 'none', margin: '2px 0 0', padding: 0, display: 'flex', flexDirection: 'column' })}>
              <BulletText text={bl.text} mark="•" />
            </ul>
          ),
        }),
      );
    });
  }

  // 专业技能
  if (doc.skills.length > 0) {
    blocks.push({ key: key('skill-title'), node: <SectionTitle text="专业技能" pad={14} />, avoid: 'after' });
    doc.skills.forEach((g) =>
      blocks.push({
        key: key(`skill-${g.id}`),
        node: (
          <p style={st({ margin: '6px 0 0', fontSize: FONT.body, lineHeight: LINE })}>
            <span style={{ fontWeight: 700 }}>{g.category || g.name || '技能'}：</span>
            {g.items.join('、')}
          </p>
        ),
      }),
    );
  }

  // 教育
  if (doc.education.length > 0) {
    blocks.push({ key: key('edu-title'), node: <SectionTitle text="教育背景" pad={14} />, avoid: 'after' });
    doc.education.forEach((e) => {
      const dates = e.startDate || e.endDate ? `${e.startDate || ''} — ${e.endDate || ''}` : '';
      blocks.push({
        key: key(`edu-${e.id}`),
        node: (
          <div style={st({ paddingTop: 6, paddingBottom: 4 })}>
            <div style={st({ display: 'flex', alignItems: 'baseline', gap: 8 })}>
              <span style={{ fontWeight: 700, fontSize: FONT.company }}>{e.school}</span>
              <span style={{ fontSize: FONT.jobTitle, color: COLOR.text }}>
                {[e.degree, e.major].filter(Boolean).join(' · ')}
              </span>
              {dates ? <span style={{ marginLeft: 'auto', fontSize: FONT.meta, color: MUTED, whiteSpace: 'nowrap' }}>{dates}</span> : null}
            </div>
          </div>
        ),
      });
    });
  }

  // 证书 / 获奖 / 语言
  const hasCertsAwardsLangs = doc.certifications.length > 0 || doc.awards.length > 0 || doc.languages.length > 0;
  if (hasCertsAwardsLangs) {
    blocks.push({ key: key('cert-title'), node: <SectionTitle text="证书 / 获奖 / 语言" pad={14} />, avoid: 'after' });
    doc.certifications.forEach((c) =>
      blocks.push({
        key: key(`cert-${c.id}`),
        node: (
          <p style={st({ margin: '6px 0 0', fontSize: FONT.body, lineHeight: LINE })}>
            {c.name}
            {c.date ? <span style={{ color: MUTED, fontSize: FONT.meta }}>（{c.date}）</span> : null}
          </p>
        ),
      }),
    );
    doc.awards.forEach((a) =>
      blocks.push({
        key: key(`award-${a.id}`),
        node: (
          <p style={st({ margin: '6px 0 0', fontSize: FONT.body, lineHeight: LINE })}>
            {a.title}
            {a.date ? <span style={{ color: MUTED, fontSize: FONT.meta }}>（{a.date}）</span> : null}
          </p>
        ),
      }),
    );
    doc.languages.forEach((l) =>
      blocks.push({
        key: key(`lang-${l.id}`),
        node: (
          <p style={st({ margin: '6px 0 0', fontSize: FONT.body, lineHeight: LINE })}>
            {l.name}
            {l.level ? <span style={{ color: MUTED, fontSize: FONT.meta }}>（{l.level}）</span> : null}
          </p>
        ),
      }),
    );
  }

  // 其他内容
  if (doc.customSections.length > 0) {
    blocks.push({ key: key('other-title'), node: <SectionTitle text="其他内容" pad={14} />, avoid: 'after' });
    for (const s of doc.customSections) {
      for (const bl of s.blocks) {
        blocks.push({
          key: key(`other-${bl.id}`),
          node:
            bl.type === 'bullet' ? (
              <div style={st({ display: 'flex', gap: 6, fontSize: FONT.body, lineHeight: LINE, paddingTop: 5 })}>
                <span style={{ flexShrink: 0 }}>•</span>
                <span>{bl.text}</span>
              </div>
            ) : (
              <p style={st({ margin: 0, fontSize: FONT.body, lineHeight: LINE, whiteSpace: 'pre-wrap', paddingTop: 5 })}>
                {bl.text}
              </p>
            ),
        });
      }
    }
  }

  return blocks;
}
