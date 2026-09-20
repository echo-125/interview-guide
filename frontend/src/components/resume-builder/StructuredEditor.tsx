/**
 * 结构化简历编辑器（Phase 4B 正式功能）
 *
 * 左侧表单直接编辑 ResumeDocument 的稳定 id 字段：
 *   basics / summary / skills / experience[id].bullets[id] / projects / education
 *   certifications / awards / languages / customSections
 * 任何改动立即触发右侧 A4 预览重渲染。
 * 支持 activePath 定位（AI 建议 → 字段滚动/高亮）与 onFieldFocus 反向联动。
 * 纯受控组件，不改数据模型以外的任何状态。
 */

import React, { useCallback, useEffect, useRef } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  createBullet,
  newId,
  type ResumeDocument,
  type ResumeEducationItem,
  type ResumeExperienceItem,
  type ResumeProjectItem,
} from '../../types/resumeDocument';
import { serializePath, type DocumentPath } from '../../utils/resumeDocument/structuredMapping';
import { addBlock, removeBlock, updateBlock } from '../../utils/resumeDocument/customSection';

interface StructuredEditorProps {
  doc: ResumeDocument;
  onChange: (next: ResumeDocument) => void;
  /** 需要滚动定位并高亮的字段路径（AI 建议点击 → 编辑器定位） */
  activePath?: DocumentPath | null;
  /** 编辑器字段聚焦时的反向联动（结构化建议高亮） */
  onFieldFocus?: (path: DocumentPath | null) => void;
}

const inputCls =
  'w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50';
const labelCls = 'block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-0.5';

/** 字段级定位瞬时高亮（命令式添加，1.2s 后移除，不侵入字段样式） */
function Field({
  label,
  value,
  onChange,
  placeholder,
  dataPath,
  onFocus,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  dataPath?: string;
  onFocus?: () => void;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <input
        className={inputCls}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        data-path={dataPath}
        onFocus={onFocus}
      />
    </label>
  );
}

function BulletEditor({
  bullets,
  onChange,
  pathFor,
  onFieldFocus,
}: {
  bullets: Array<{ id: string; text: string }>;
  onChange: (next: Array<{ id: string; text: string }>) => void;
  /** 为每条 bullet 生成 DocumentPath（用于定位联动） */
  pathFor?: (b: { id: string }) => DocumentPath | undefined;
  onFieldFocus?: (path: DocumentPath | null) => void;
}) {
  return (
    <div className="space-y-1.5">
      {bullets.map((b, idx) => (
        <div key={b.id} className="flex items-start gap-1.5">
          <span className="mt-2 text-[10px] text-slate-400 select-none">{idx + 1}.</span>
          <input
            className={`${inputCls} text-xs`}
            value={b.text}
            onChange={e => onChange(bullets.map(x => (x.id === b.id ? { ...x, text: e.target.value } : x)))}
            data-path={pathFor ? serializePath(pathFor(b) as DocumentPath) : undefined}
            onFocus={pathFor ? () => onFieldFocus?.(pathFor(b) as DocumentPath) : undefined}
          />
          <button
            type="button"
            title="删除该条"
            onClick={() => onChange(bullets.filter(x => x.id !== b.id))}
            className="mt-1 p-1.5 rounded-md text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...bullets, createBullet()])}
        className="text-[11px] font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline"
      >
        <Plus className="w-3 h-3" />
        添加要点
      </button>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/60 space-y-2.5">
      <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">{title}</p>
      {children}
    </div>
  );
}

export function StructuredEditor({ doc, onChange, activePath, onFieldFocus }: StructuredEditorProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  // activePath 变化 → 滚动定位 + 瞬时高亮
  useEffect(() => {
    if (!activePath || !rootRef.current) return;
    const target = serializePath(activePath);
    const nodes = rootRef.current.querySelectorAll<HTMLElement>('[data-path]');
    let found: HTMLElement | null = null;
    for (const node of nodes) {
      if (node.dataset.path === target) {
        found = node;
        break;
      }
    }
    if (!found) return;
    found.scrollIntoView({ block: 'center', behavior: 'smooth' });
    found.classList.add('flash-target');
    const timer = window.setTimeout(() => found?.classList.remove('flash-target'), 1200);
    return () => window.clearTimeout(timer);
  }, [activePath]);

  const emitFocus = useCallback((p: DocumentPath | null) => onFieldFocus?.(p), [onFieldFocus]);
  const update = (patch: Partial<ResumeDocument>) => onChange({ ...doc, ...patch });
  const updateBasics = (field: keyof ResumeDocument['basics'], value: string) =>
    update({ basics: { ...doc.basics, [field]: value } });
  const updateSkills = (id: string, patch: Partial<{ category: string; items: string[] }>) =>
    update({ skills: doc.skills.map(g => (g.id === id ? { ...g, ...patch } : g)) });
  const updateExperience = (id: string, patch: Partial<ResumeExperienceItem>) =>
    update({ experience: doc.experience.map(e => (e.id === id ? { ...e, ...patch } : e)) });
  const updateProject = (id: string, patch: Partial<ResumeProjectItem>) =>
    update({ projects: doc.projects.map(p => (p.id === id ? { ...p, ...patch } : p)) });
  const updateEducation = (id: string, patch: Partial<ResumeEducationItem>) =>
    update({ education: doc.education.map(e => (e.id === id ? { ...e, ...patch } : e)) });

  return (
    <div ref={rootRef} className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
      <style>{`.flash-target { box-shadow: 0 0 0 2px rgb(99 102 241 / 0.7); background-color: rgb(238 242 255 / 0.9); transition: box-shadow 0.15s; }`}</style>
      {/* 基本信息 */}
      <Card title="基本信息">
        <div className="grid grid-cols-2 gap-2">
          <Field label="姓名" value={doc.basics.name} onChange={v => updateBasics('name', v)} dataPath={serializePath({ kind: 'basic', field: 'name' })} onFocus={() => emitFocus({ kind: 'basic', field: 'name' })} />
          <Field label="求职意向 / 职位" value={doc.basics.title} onChange={v => updateBasics('title', v)} dataPath={serializePath({ kind: 'basic', field: 'title' })} onFocus={() => emitFocus({ kind: 'basic', field: 'title' })} />
          <Field label="邮箱" value={doc.basics.email} onChange={v => updateBasics('email', v)} dataPath={serializePath({ kind: 'basic', field: 'email' })} onFocus={() => emitFocus({ kind: 'basic', field: 'email' })} />
          <Field label="电话" value={doc.basics.phone} onChange={v => updateBasics('phone', v)} dataPath={serializePath({ kind: 'basic', field: 'phone' })} onFocus={() => emitFocus({ kind: 'basic', field: 'phone' })} />
          <Field label="性别" value={doc.basics.gender || ''} onChange={v => updateBasics('gender', v)} />
          <Field label="年龄" value={doc.basics.age || ''} onChange={v => updateBasics('age', v)} />
          <Field label="城市" value={doc.basics.location} onChange={v => updateBasics('location', v)} dataPath={serializePath({ kind: 'basic', field: 'location' })} onFocus={() => emitFocus({ kind: 'basic', field: 'location' })} />
          <Field label="主页" value={doc.basics.website || ''} onChange={v => updateBasics('website', v)} dataPath={serializePath({ kind: 'basic', field: 'website' })} onFocus={() => emitFocus({ kind: 'basic', field: 'website' })} />
        </div>
        <label className="block">
          <span className={labelCls}>个人总结</span>
          <textarea
            className={`${inputCls} resize-none min-h-[64px]`}
            value={doc.basics.summary}
            onChange={e => updateBasics('summary', e.target.value)}
            data-path={serializePath({ kind: 'summary' })}
            onFocus={() => emitFocus({ kind: 'summary' })}
          />
        </label>
      </Card>

      {/* 技能 */}
      <Card title="技能">
        {doc.skills.length === 0 && <p className="text-xs text-slate-400">暂无技能分组</p>}
        {doc.skills.map(g => (
          <div key={g.id} className="space-y-2">
            <div className="flex gap-2">
              <input
                className={`${inputCls} w-28`}
                value={g.category}
                onChange={e => updateSkills(g.id, { category: e.target.value })}
                placeholder="分组"
                data-path={serializePath({ kind: 'skill-category', skillId: g.id })}
                onFocus={() => emitFocus({ kind: 'skill-category', skillId: g.id })}
              />
              <input
                className={inputCls}
                value={g.items.join('、')}
                onChange={e => updateSkills(g.id, { items: e.target.value.split(/[、,，]/).map(s => s.trim()).filter(Boolean) })}
                placeholder="技能，用顿号分隔"
                data-path={serializePath({ kind: 'skill-item', skillId: g.id, itemIndex: 0 })}
                onFocus={() => emitFocus({ kind: 'skill-item', skillId: g.id, itemIndex: 0 })}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={() => update({ skills: [...doc.skills, { id: newId('skill'), category: '新分组', items: [] }] })}
          className="text-[11px] font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline"
        >
          <Plus className="w-3 h-3" />
          添加技能分组
        </button>
      </Card>

      {/* 工作经历 */}
      <Card title="工作经历">
        {doc.experience.length === 0 && <p className="text-xs text-slate-400">暂无工作经历</p>}
        {doc.experience.map(e => (
          <div key={e.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Field label="公司" value={e.company} onChange={v => updateExperience(e.id, { company: v })} dataPath={serializePath({ kind: 'experience-field', experienceId: e.id, field: 'company' })} onFocus={() => emitFocus({ kind: 'experience-field', experienceId: e.id, field: 'company' })} />
              <Field label="职位" value={e.title} onChange={v => updateExperience(e.id, { title: v })} dataPath={serializePath({ kind: 'experience-field', experienceId: e.id, field: 'title' })} onFocus={() => emitFocus({ kind: 'experience-field', experienceId: e.id, field: 'title' })} />
              <Field label="开始时间" value={e.startDate} onChange={v => updateExperience(e.id, { startDate: v })} dataPath={serializePath({ kind: 'experience-field', experienceId: e.id, field: 'startDate' })} onFocus={() => emitFocus({ kind: 'experience-field', experienceId: e.id, field: 'startDate' })} />
              <Field label="结束时间" value={e.endDate} onChange={v => updateExperience(e.id, { endDate: v })} dataPath={serializePath({ kind: 'experience-field', experienceId: e.id, field: 'endDate' })} onFocus={() => emitFocus({ kind: 'experience-field', experienceId: e.id, field: 'endDate' })} />
              <Field label="地点" value={e.location || ''} onChange={v => updateExperience(e.id, { location: v })} dataPath={serializePath({ kind: 'experience-field', experienceId: e.id, field: 'location' })} onFocus={() => emitFocus({ kind: 'experience-field', experienceId: e.id, field: 'location' })} />
            </div>
            <div>
              <span className={labelCls}>工作要点（修改此处，右侧 A4 实时更新）</span>
              <BulletEditor
                bullets={e.bullets}
                onChange={bullets => updateExperience(e.id, { bullets })}
                pathFor={b => ({ kind: 'experience-bullet', experienceId: e.id, bulletId: b.id })}
                onFieldFocus={emitFocus}
              />
            </div>
          </div>
        ))}
      </Card>

      {/* 项目经历 */}
      <Card title="项目经历">
        {doc.projects.length === 0 && <p className="text-xs text-slate-400">暂无项目经历</p>}
        {doc.projects.map(p => (
          <div key={p.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <Field label="项目名" value={p.name} onChange={v => updateProject(p.id, { name: v })} dataPath={serializePath({ kind: 'project-field', projectId: p.id, field: 'name' })} onFocus={() => emitFocus({ kind: 'project-field', projectId: p.id, field: 'name' })} />
              <Field label="角色" value={p.role || ''} onChange={v => updateProject(p.id, { role: v })} dataPath={serializePath({ kind: 'project-field', projectId: p.id, field: 'role' })} onFocus={() => emitFocus({ kind: 'project-field', projectId: p.id, field: 'role' })} />
              <Field label="开始时间" value={p.startDate || ''} onChange={v => updateProject(p.id, { startDate: v })} dataPath={serializePath({ kind: 'project-field', projectId: p.id, field: 'startDate' })} onFocus={() => emitFocus({ kind: 'project-field', projectId: p.id, field: 'startDate' })} />
              <Field label="结束时间" value={p.endDate || ''} onChange={v => updateProject(p.id, { endDate: v })} dataPath={serializePath({ kind: 'project-field', projectId: p.id, field: 'endDate' })} onFocus={() => emitFocus({ kind: 'project-field', projectId: p.id, field: 'endDate' })} />
            </div>
            <div>
              <span className={labelCls}>项目要点</span>
              <BulletEditor
                bullets={p.bullets}
                onChange={bullets => updateProject(p.id, { bullets })}
                pathFor={b => ({ kind: 'project-bullet', projectId: p.id, bulletId: b.id })}
                onFieldFocus={emitFocus}
              />
            </div>
          </div>
        ))}
      </Card>

      {/* 教育 */}
      <Card title="教育经历">
        {doc.education.length === 0 && <p className="text-xs text-slate-400">暂无教育经历</p>}
        {doc.education.map(e => (
          <div key={e.id} className="grid grid-cols-2 gap-2">
            <Field label="学校" value={e.school} onChange={v => updateEducation(e.id, { school: v })} dataPath={serializePath({ kind: 'education-field', educationId: e.id, field: 'school' })} onFocus={() => emitFocus({ kind: 'education-field', educationId: e.id, field: 'school' })} />
            <Field label="学位" value={e.degree} onChange={v => updateEducation(e.id, { degree: v })} dataPath={serializePath({ kind: 'education-field', educationId: e.id, field: 'degree' })} onFocus={() => emitFocus({ kind: 'education-field', educationId: e.id, field: 'degree' })} />
            <Field label="专业" value={e.major} onChange={v => updateEducation(e.id, { major: v })} dataPath={serializePath({ kind: 'education-field', educationId: e.id, field: 'major' })} onFocus={() => emitFocus({ kind: 'education-field', educationId: e.id, field: 'major' })} />
            <Field label="时间" value={`${e.startDate || ''} — ${e.endDate || ''}`} onChange={() => {}} />
          </div>
        ))}
      </Card>

      {/* 证书 */}
      <Card title="证书资质">
        {doc.certifications.length === 0 && <p className="text-xs text-slate-400">暂无证书</p>}
        {doc.certifications.map(c => (
          <div key={c.id} className="grid grid-cols-2 gap-2">
            <Field label="证书名称" value={c.name} onChange={v => update({ certifications: doc.certifications.map(x => (x.id === c.id ? { ...x, name: v } : x)) })} dataPath={serializePath({ kind: 'certification-item', itemId: c.id })} onFocus={() => emitFocus({ kind: 'certification-item', itemId: c.id })} />
            <Field label="日期" value={c.date || ''} onChange={v => update({ certifications: doc.certifications.map(x => (x.id === c.id ? { ...x, date: v } : x)) })} />
          </div>
        ))}
      </Card>

      {/* 获奖 */}
      <Card title="获奖荣誉">
        {doc.awards.length === 0 && <p className="text-xs text-slate-400">暂无获奖</p>}
        {doc.awards.map(a => (
          <div key={a.id} className="grid grid-cols-2 gap-2">
            <Field label="奖项名称" value={a.title} onChange={v => update({ awards: doc.awards.map(x => (x.id === a.id ? { ...x, title: v } : x)) })} dataPath={serializePath({ kind: 'award-item', itemId: a.id })} onFocus={() => emitFocus({ kind: 'award-item', itemId: a.id })} />
            <Field label="日期" value={a.date || ''} onChange={v => update({ awards: doc.awards.map(x => (x.id === a.id ? { ...x, date: v } : x)) })} />
          </div>
        ))}
      </Card>

      {/* 语言 */}
      <Card title="语言能力">
        {doc.languages.length === 0 && <p className="text-xs text-slate-400">暂无语言</p>}
        {doc.languages.map(l => (
          <div key={l.id} className="grid grid-cols-2 gap-2">
            <Field label="语言" value={l.name} onChange={v => update({ languages: doc.languages.map(x => (x.id === l.id ? { ...x, name: v } : x)) })} dataPath={serializePath({ kind: 'language-item', itemId: l.id })} onFocus={() => emitFocus({ kind: 'language-item', itemId: l.id })} />
            <Field label="水平" value={l.level || ''} onChange={v => update({ languages: doc.languages.map(x => (x.id === l.id ? { ...x, level: v } : x)) })} />
          </div>
        ))}
      </Card>

      {/* 其他内容（customSections） */}
      <Card title="其他内容">
        {doc.customSections.length === 0 && <p className="text-xs text-slate-400">暂无其他内容</p>}
        {doc.customSections.map(s => (
          <div key={s.id} className="space-y-2">
            <input
              className={`${inputCls} font-medium`}
              value={s.title}
              onChange={e => update({ customSections: doc.customSections.map(x => (x.id === s.id ? { ...x, title: e.target.value } : x)) })}
              placeholder="小节标题"
            />
            {(s.blocks || []).map((b, bi) => (
              <div key={b.id} className="flex items-start gap-1.5">
                <span className="mt-2 text-[10px] text-slate-400 select-none">{bi + 1}.</span>
                <textarea
                  className={`${inputCls} text-xs resize-none min-h-[36px]`}
                  value={b.text}
                  onChange={e => update({ customSections: doc.customSections.map(x => (x.id === s.id ? updateBlock(x, b.id, e.target.value) : x)) })}
                  data-path={serializePath({ kind: 'custom-block', sectionId: s.id, blockId: b.id })}
                  onFocus={() => emitFocus({ kind: 'custom-block', sectionId: s.id, blockId: b.id })}
                />
                <button
                  type="button"
                  title="删除该块"
                  onClick={() => update({ customSections: doc.customSections.map(x => (x.id === s.id ? removeBlock(x, b.id) : x)) })}
                  className="mt-1 p-1.5 rounded-md text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => update({ customSections: doc.customSections.map(x => (x.id === s.id ? addBlock(x, 'paragraph') : x)) })}
                className="text-[11px] font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3 h-3" />
                添加段落
              </button>
              <button
                type="button"
                onClick={() => update({ customSections: doc.customSections.map(x => (x.id === s.id ? addBlock(x, 'bullet') : x)) })}
                className="text-[11px] font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 hover:underline"
              >
                <Plus className="w-3 h-3" />
                添加要点
              </button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
