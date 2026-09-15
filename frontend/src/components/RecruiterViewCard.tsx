import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, HelpCircle, XCircle } from 'lucide-react';

interface RecruiterViewCardProps {
  recruiterView: {
    firstImpression?: string;
    verdict?: string;
    concerns?: string[];
  };
}

/**
 * 招聘方视角：HR 10 秒判断
 *
 * 复用后端既有 recruiterView 字段重构成三分类：
 *   ✅ 会留下（优势） / ⚠️ 会犹豫（concerns） / ❓ 面试大概率会问（由顾虑推导）
 *
 * 不新增独立数据源 —— 「面试追问」由既有 concerns 转成问题形式。
 */
export default function RecruiterViewCard({ recruiterView }: RecruiterViewCardProps) {
  const concerns = recruiterView.concerns || [];

  // 由顾虑推导面试追问：把陈述式顾虑转成招聘官会问的问题
  const questions = concerns.map(c => {
    const trimmed = c.replace(/[。.]$/, '');
    return `关于「${trimmed}」，能展开说明具体情况吗？`;
  });

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Briefcase className="w-5 h-5" />
          <span className="font-semibold">招聘方视角</span>
          <span className="text-xs text-slate-400 dark:text-slate-500">HR 10 秒判断</span>
        </div>
        {recruiterView.verdict && <VerdictBadge verdict={recruiterView.verdict} />}
      </div>

      {recruiterView.firstImpression && (
        <div className="bg-slate-50 dark:bg-slate-900/40 rounded-xl p-3 mb-4">
          <p className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">第一印象</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            {recruiterView.firstImpression}
          </p>
        </div>
      )}

      {/* ⚠️ 会犹豫 */}
      {concerns.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-1.5">
            <XCircle className="w-3.5 h-3.5" />
            会犹豫
          </p>
          <ul className="space-y-1">
            {concerns.map((c, i) => (
              <li
                key={i}
                className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5"
              >
                <span className="text-amber-400 flex-shrink-0">·</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ❓ 面试大概率会问（由顾虑推导，非新增数据源） */}
      {questions.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            面试大概率会问
          </p>
          <ul className="space-y-1">
            {questions.map((q, i) => (
              <li
                key={i}
                className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5"
              >
                <span className="text-slate-400 flex-shrink-0">·</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

function VerdictBadge({ verdict }: { verdict: string }) {
  const isPass = verdict === '通过';
  const isFail = verdict === '不通过';

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
        isPass
          ? 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300'
          : isFail
            ? 'bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300'
            : 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300'
      }`}
    >
      {isPass ? (
        <CheckCircle2 className="w-3.5 h-3.5" />
      ) : (
        <HelpCircle className="w-3.5 h-3.5" />
      )}
      预判：{verdict}
    </span>
  );
}
