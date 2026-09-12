import { j as t, k as I, R as S, Z as D } from "./ui-vendor-CqaAdWtE.js";
import { h as P, d as C, r as s } from "./react-vendor-BA2qNj4G.js";
import { v as u } from "./voiceInterview-ClZBxuw_.js";
import L from "./InterviewDetailPanel-TdpZP0Yk.js";
import { g as R } from "./voiceEvaluationStatus-B6NgctRI.js";
import "./index-CxLe-kJW.js";
import "./syntax-highlighter-CeD-urYA.js";
import "./score-3bjDqiWg.js";
function Z() {
  const { sessionId: a } = P(), d = C(), [r, p] = s.useState(null), [E, n] = s.useState(true), [g, m] = s.useState(null), [w, x] = s.useState(null), [b, v] = s.useState(() => Date.now()), [j, l] = s.useState(null), o = s.useRef(null);
  s.useEffect(() => (A(), () => {
    o.current && clearTimeout(o.current);
  }), [a]);
  const A = async () => {
    if (a) {
      n(true), l(null);
      try {
        const e = await u.getEvaluation(parseInt(a));
        h(e);
      } catch {
        try {
          const e = await u.generateEvaluation(parseInt(a));
          h(e);
        } catch (e) {
          console.error("Failed to trigger evaluation:", e), l("\u89E6\u53D1\u8BC4\u4F30\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), n(false);
        }
      }
    }
  }, h = (e) => {
    const i = e.evaluateStatus;
    m(i), v(Date.now()), x((f) => e.evaluateStatusUpdatedAt ?? f ?? (/* @__PURE__ */ new Date()).toISOString()), i === "COMPLETED" && e.evaluation ? (p(e.evaluation), n(false)) : i === "FAILED" ? (l("\u8BC4\u4F30\u4EFB\u52A1\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210"), n(false)) : N();
  }, N = s.useCallback(() => {
    o.current && clearTimeout(o.current), o.current = setTimeout(async () => {
      if (a) try {
        const e = await u.getEvaluation(parseInt(a)), i = e.evaluateStatus;
        m(i), v(Date.now()), x((f) => e.evaluateStatusUpdatedAt ?? f ?? (/* @__PURE__ */ new Date()).toISOString()), i === "COMPLETED" && e.evaluation ? (p(e.evaluation), n(false)) : i === "FAILED" ? (l("\u8BC4\u4F30\u4EFB\u52A1\u672A\u80FD\u5B8C\u6210\uFF0C\u8BF7\u91CD\u65B0\u751F\u6210"), n(false)) : N();
      } catch {
        l("\u83B7\u53D6\u8BC4\u4F30\u72B6\u6001\u5931\u8D25"), n(false);
      }
    }, 3e3);
  }, [a]), y = async () => {
    if (a) {
      n(true), l(null), m(null), x((/* @__PURE__ */ new Date()).toISOString()), v(Date.now());
      try {
        const e = await u.generateEvaluation(parseInt(a));
        h(e);
      } catch (e) {
        console.error("Failed to retry evaluation:", e), l("\u91CD\u8BD5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"), n(false);
      }
    }
  }, k = s.useMemo(() => r ? { id: 0, sessionId: a, totalQuestions: r.totalQuestions, status: "COMPLETED", overallScore: r.overallScore, overallFeedback: r.overallFeedback, createdAt: "", completedAt: "", strengths: r.strengths, improvements: r.improvements, answers: r.answers.map((e) => ({ questionIndex: e.questionIndex, question: e.question, category: e.category, userAnswer: e.userAnswer, score: e.score, feedback: e.feedback, referenceAnswer: e.referenceAnswer ?? void 0, keyPoints: e.keyPoints ?? void 0, answeredAt: "" })) } : null, [r, a]), c = s.useMemo(() => R({ status: g, statusUpdatedAt: w, now: b }), [g, w, b]);
  return E ? t.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: t.jsxs("div", { className: "text-center max-w-md px-6", children: [c.tone === "warning" ? t.jsx("div", { className: "w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-4", children: t.jsx(I, { className: "w-6 h-6 text-amber-600 dark:text-amber-400" }) }) : t.jsx("div", { className: "w-10 h-10 border-3 border-slate-200 dark:border-slate-700 border-t-primary-500 rounded-full animate-spin mx-auto mb-4" }), t.jsx("p", { className: "text-lg font-medium text-slate-700 dark:text-slate-200", children: c.title }), t.jsx("p", { className: "text-slate-400 text-sm mt-2", children: c.description }), t.jsxs("div", { className: "flex items-center gap-3 justify-center mt-6", children: [c.retryable && t.jsxs("button", { onClick: y, className: "px-5 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 flex items-center gap-2", children: [t.jsx(S, { className: "w-4 h-4" }), "\u91CD\u65B0\u751F\u6210"] }), t.jsx("button", { onClick: () => d("/interviews"), className: "px-5 py-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600", children: "\u8FD4\u56DE\u9762\u8BD5\u8BB0\u5F55" })] })] }) }) : j && !r ? t.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: t.jsxs("div", { className: "text-center", children: [t.jsx("p", { className: "text-slate-600 dark:text-slate-300 text-lg mb-2", children: "\u8BC4\u4F30\u62A5\u544A\u751F\u6210\u5931\u8D25" }), t.jsx("p", { className: "text-slate-400 text-sm mb-6", children: j }), t.jsxs("div", { className: "flex items-center gap-3 justify-center", children: [t.jsxs("button", { onClick: y, className: "px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 flex items-center gap-2", children: [t.jsx(S, { className: "w-4 h-4" }), "\u91CD\u65B0\u751F\u6210"] }), t.jsx("button", { onClick: () => d("/interviews"), className: "px-6 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600", children: "\u8FD4\u56DE\u5217\u8868" })] })] }) }) : !r || !k ? null : t.jsx("div", { className: "pb-10", children: t.jsxs("div", { className: "max-w-6xl mx-auto", children: [t.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [t.jsx("button", { onClick: () => d("/interviews"), className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors", children: t.jsx(D, { className: "w-5 h-5" }) }), t.jsxs("div", { children: [t.jsx("h1", { className: "text-xl font-bold text-slate-900 dark:text-white", children: "\u9762\u8BD5\u8BC4\u4F30\u62A5\u544A" }), t.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u8BED\u97F3\u4F1A\u8BDD ID: ", a] })] })] }), t.jsx(L, { interview: k })] }) });
}
export {
  Z as default
};
