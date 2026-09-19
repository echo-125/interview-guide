/**
 * 结构化简历编辑器（Phase 3 POC）
 *
 * 左侧表单直接编辑 ResumeDocument 的稳定 id 字段：
 *   basics / skills / experience[id].bullets[id] / projects / education
 * 任何改动立即触发右侧 A4 预览重渲染。
 * 纯受控组件，不改数据模型以外的任何状态。
 */

import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import {
  createBullet,
  newId,
  type ResumeDocument,
  type ResumeEducationItem,
  type ResumeExperienceItem,
  type ResumeProjectItem,
} from '../../types/resumeDocument';

interface StructuredEditorProps {
  doc: ResumeDocument;
  onChange: (next: ResumeDocument) => void;
}

const inputCls =
  'w-full px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50';
const labelCls = 'block text-[11px] font-medium text-slate-500 dark:text-slate-400 mb-0.5';

function Field({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <input className={inputCls} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
    </label>
  );
}

function BulletEditor({
  bullets,
  onChange,
}: {
  bullets: Array<{ id: string; text: string }>;
  onChange: (next: Array<{ id: string; text: string }>) => void;
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

export function StructuredEditor({ doc, onChange }: StructuredEditorProps) {
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
    <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-4">
      {/* 基本信息 */}
      <Card title="基本信息">
        <div className="grid grid-cols-2 gap-2">
          <Field label="姓名" value={doc.basics.name} onChange={v => updateBasics('name', v)} />
          <Field label="求职意向 / 职位" value={doc.basics.title} onChange={v => updateBasics('title', v)} />
          <Field label="邮箱" value={doc.basics.email} onChange={v => updateBasics('email', v)} />
          <Field label="电话" value={doc.basics.phone} onChange={v => updateBasics('phone', v)} />
          <Field label="性别" value={doc.basics.gender || ''} onChange={v => updateBasics('gender', v)} />
          <Field label="年龄" value={doc.basics.age || ''} onChange={v => updateBasics('age', v)} />
          <Field label="城市" value={doc.basics.location} onChange={v => updateBasics('location', v)} />
          <Field label="主页" value={doc.basics.website || ''} onChange={v => updateBasics('website', v)} />
        </div>
        <label className="block">
          <span className={labelCls}>个人总结</span>
          <textarea
            className={`${inputCls} resize-none min-h-[64px]`}
            value={doc.basics.summary}
            onChange={e => updateBasics('summary', e.target.value)}
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
              />
              <input
                className={inputCls}
                value={g.items.join('、')}
                onChange={e => updateSkills(g.id, { items: e.target.value.split(/[、,，]/).map(s => s.trim()).filter(Boolean) })}
                placeholder="技能，用顿号分隔"
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
              <Field label="公司" value={e.company} onChange={v => updateExperience(e.id, { company: v })} />
              <Field label="职位" value={e.title} onChange={v => updateExperience(e.id, { title: v })} />
              <Field label="开始时间" value={e.startDate} onChange={v => updateExperience(e.id, { startDate: v })} />
              <Field label="结束时间" value={e.endDate} onChange={v => updateExperience(e.id, { endDate: v })} />
              <Field label="地点" value={e.location || ''} onChange={v => updateExperience(e.id, { location: v })} />
            </div>
            <div>
              <span className={labelCls}>工作要点（修改此处，右侧 A4 实时更新）</span>
              <BulletEditor
                bullets={e.bullets}
                onChange={bullets => updateExperience(e.id, { bullets })}
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
              <Field label="项目名" value={p.name} onChange={v => updateProject(p.id, { name: v })} />
              <Field label="角色" value={p.role || ''} onChange={v => updateProject(p.id, { role: v })} />
              <Field label="开始时间" value={p.startDate || ''} onChange={v => updateProject(p.id, { startDate: v })} />
              <Field label="结束时间" value={p.endDate || ''} onChange={v => updateProject(p.id, { endDate: v })} />
            </div>
            <div>
              <span className={labelCls}>项目要点</span>
              <BulletEditor bullets={p.bullets} onChange={bullets => updateProject(p.id, { bullets })} />
            </div>
          </div>
        ))}
      </Card>

      {/* 教育 */}
      <Card title="教育经历">
        {doc.education.length === 0 && <p className="text-xs text-slate-400">暂无教育经历</p>}
        {doc.education.map(e => (
          <div key={e.id} className="grid grid-cols-2 gap-2">
            <Field label="学校" value={e.school} onChange={v => updateEducation(e.id, { school: v })} />
            <Field label="学位" value={e.degree} onChange={v => updateEducation(e.id, { degree: v })} />
            <Field label="专业" value={e.major} onChange={v => updateEducation(e.id, { major: v })} />
            <Field label="时间" value={`${e.startDate || ''} — ${e.endDate || ''}`} onChange={() => {}} />
          </div>
        ))}
      </Card>

      {/* 证书 */}
      <Card title="证书资质">
        {doc.certifications.length === 0 && <p className="text-xs text-slate-400">暂无证书</p>}
        {doc.certifications.map(c => (
          <div key={c.id} className="grid grid-cols-2 gap-2">
            <Field label="证书名称" value={c.name} onChange={v => update({ certifications: doc.certifications.map(x => (x.id === c.id ? { ...x, name: v } : x)) })} />
            <Field label="日期" value={c.date || ''} onChange={v => update({ certifications: doc.certifications.map(x => (x.id === c.id ? { ...x, date: v } : x)) })} />
          </div>
        ))}
      </Card>

      {/* 获奖 */}
      <Card title="获奖荣誉">
        {doc.awards.length === 0 && <p className="text-xs text-slate-400">暂无获奖</p>}
        {doc.awards.map(a => (
          <div key={a.id} className="grid grid-cols-2 gap-2">
            <Field label="奖项名称" value={a.title} onChange={v => update({ awards: doc.awards.map(x => (x.id === a.id ? { ...x, title: v } : x)) })} />
            <Field label="日期" value={a.date || ''} onChange={v => update({ awards: doc.awards.map(x => (x.id === a.id ? { ...x, date: v } : x)) })} />
          </div>
        ))}
      </Card>

      {/* 语言 */}
      <Card title="语言能力">
        {doc.languages.length === 0 && <p className="text-xs text-slate-400">暂无语言</p>}
        {doc.languages.map(l => (
          <div key={l.id} className="grid grid-cols-2 gap-2">
            <Field label="语言" value={l.name} onChange={v => update({ languages: doc.languages.map(x => (x.id === l.id ? { ...x, name: v } : x)) })} />
            <Field label="水平" value={l.level || ''} onChange={v => update({ languages: doc.languages.map(x => (x.id === l.id ? { ...x, level: v } : x)) })} />
          </div>
        ))}
      </Card>
    </div>
  );
}
