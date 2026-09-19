/**
 * Resume Builder 最小 POC 页面 (Phase 3)
 *
 * 四步链路：Structured Resume JSON → React Editor → A4 Live Preview → PDF Export
 * 独立 Demo 路由，不触碰现有正式页面。
 */

import { useMemo, useState } from 'react';
import { Download, FileDown, FileText, Loader2, RefreshCcw, Wand2 } from 'lucide-react';
import type { ResumeDocument } from '../types/resumeDocument';
import { DEMO_RESUME } from '../utils/resumeDocument/demo';
import { parseResumeToDocument } from '../utils/resumeDocument/parser';
import { RESUME_TEMPLATES, renderResumeTemplate } from '../components/resume-builder/templates';
import type { ResumeTemplateId } from '../components/resume-builder/templates/types';
import { A4Preview } from '../components/resume-builder/A4Preview';
import { StructuredEditor } from '../components/resume-builder/StructuredEditor';
import { exportResumePdf } from '../components/resume-builder/ResumePdf';
import { exportResumeDocx } from '../components/resume-builder/ResumeDocx';
import { useToast } from '../components/Toast';
import { getErrorMessage } from '../api/request';

/** 演示用 resumeText（用于验证 parseResumeToDocument 转换链路） */
const DEMO_RESUME_TEXT = `李阳
Java 高级开发工程师
liyang.dev@example.com
138-0000-1234
上海

个人总结：
7 年 Java 后端开发经验，专注高并发、分布式系统设计与性能优化，具备从需求分析到线上稳定性保障的完整闭环能力。

技能：
后端：Java、Spring Boot、Spring Cloud、MyBatis
中间件：Redis、Kafka、RabbitMQ、Elasticsearch
数据库：MySQL、PostgreSQL、分库分表
部署运维：Docker、Kubernetes、Prometheus

工作经历：
某头部支付科技公司 | 高级 Java 开发工程师 | 2021-07 - 至今
设计和开发了短链接基础服务，显著提高电子发票二维码识别速度，提高了用户体验和效率。
参与了数据库的分库分表设计，支撑日开票量 400w+ 的稳定写入与查询。
主导亿级动账表按月份 RANGE 分区改造，查询耗时从秒级降低到毫秒级。

某电商平台 | Java 开发工程师 | 2019-03 - 2021-06
负责订单中心与库存系统模块开发，支撑大促峰值 10w QPS 的稳定运行。
基于 Redis 构建热点数据缓存，接口平均响应时间降低 40%。

项目经历：
高可用短链接服务 | 技术负责人 | 2022-01 - 2022-06
设计发号器 + 缓存 + 落库三级架构，单机 QPS 达 5w，可用性 99.99%。
通过 Redis 缓存优化进一步提升高峰期稳定性，P99 延迟从 200ms 降低至 50ms。

教育经历：
某理工大学 计算机科学与技术
`;

export default function ResumeBuilderDemoPage() {
  const { showToast } = useToast();
  const [doc, setDoc] = useState<ResumeDocument>(() => DEMO_RESUME);
  const [templateId, setTemplateId] = useState<ResumeTemplateId>('developer');
  const [exporting, setExporting] = useState<'pdf' | 'docx' | null>(null);
  const [resumeText, setResumeText] = useState(DEMO_RESUME_TEXT);

  const preview = useMemo(() => renderResumeTemplate(templateId, doc), [templateId, doc]);

  const handleExportPdf = async () => {
    setExporting('pdf');
    try {
      await exportResumePdf(doc);
      showToast('PDF 已导出（结构化渲染，中文正常）', 'success');
    } catch (err) {
      showToast(getErrorMessage(err, 'PDF 导出失败'), 'error');
    } finally {
      setExporting(null);
    }
  };

  const handleExportDocx = async () => {
    setExporting('docx');
    try {
      await exportResumeDocx(doc);
      showToast('DOCX 已导出（技术验证）', 'success');
    } catch (err) {
      showToast(getErrorMessage(err, 'DOCX 导出失败'), 'error');
    } finally {
      setExporting(null);
    }
  };

  const handleParseText = () => {
    const parsed = parseResumeToDocument(resumeText);
    setDoc(parsed);
    showToast(
      `已从 resumeText 解析：工作经历 ${parsed.experience.length} 条、项目 ${parsed.projects.length} 条、技能 ${parsed.skills.length} 组`,
      'success'
    );
  };

  return (
    <div className="w-full space-y-4">
      {/* 顶部工具栏 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-500 flex-shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900 dark:text-white truncate">Resume Builder 技术验证 Demo</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              结构化 JSON → 编辑器 → A4 实时预览 → PDF/DOCX 导出（不修改原简历）
            </p>
          </div>
        </div>

        {/* 模板切换 */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-700/80 rounded-xl">
          {Object.values(RESUME_TEMPLATES).map(t => (
            <button
              key={t.id}
              type="button"
              title={t.description}
              onClick={() => setTemplateId(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                templateId === t.id
                  ? 'bg-white dark:bg-slate-800 text-primary-600 dark:text-primary-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDoc(DEMO_RESUME)}
            className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            重置 Demo
          </button>
          <button
            type="button"
            onClick={handleExportDocx}
            disabled={exporting !== null}
            className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-600 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-1.5 disabled:opacity-50"
          >
            {exporting === 'docx' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
            导出 DOCX
          </button>
          <button
            type="button"
            onClick={handleExportPdf}
            disabled={exporting !== null}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold shadow-sm hover:from-primary-600 hover:to-primary-700 transition-all flex items-center gap-1.5 disabled:opacity-50"
          >
            {exporting === 'pdf' ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
            导出 PDF
          </button>
        </div>
      </div>

      {/* 主体：左编辑 / 右预览 */}
      <div className="flex flex-col lg:flex-row gap-4 h-[80vh] min-h-[600px]">
        {/* 左侧：结构化编辑器 */}
        <div className="w-full lg:w-[46%] xl:w-[42%] flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Wand2 className="w-3.5 h-3.5 text-primary-500" />
            结构化编辑器（实时驱动右侧 A4 预览）
          </div>
          <StructuredEditor doc={doc} onChange={setDoc} />
        </div>

        {/* 右侧：A4 实时预览 */}
        <div className="flex-1 min-w-0 flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60 text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center justify-between">
            <span>A4 实时预览 · {RESUME_TEMPLATES[templateId].label}</span>
            <span className="font-normal text-slate-400">210mm × 297mm · 仅浏览器内预览，不写入原始文件</span>
          </div>
          <A4Preview>{preview}</A4Preview>
        </div>
      </div>

      {/* 底部：resumeText → ResumeDocument 解析演示 */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            resumeText → ResumeDocument（parseResumeToDocument 转换演示）
          </p>
          <button
            type="button"
            onClick={handleParseText}
            className="px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-950/40 text-primary-600 dark:text-primary-400 text-xs font-medium border border-primary-200 dark:border-primary-800 hover:bg-primary-100 transition-colors"
          >
            解析为结构化文档
          </button>
        </div>
        <textarea
          value={resumeText}
          onChange={e => setResumeText(e.target.value)}
          spellCheck={false}
          className="w-full h-40 resize-y rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/40 p-3 text-xs font-mono text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
        />
      </div>
    </div>
  );
}
