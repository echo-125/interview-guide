import { j as e, m as h, $ as J } from "./ui-vendor-D79l2AJO.js";
import { r as n } from "./react-vendor-ek4qDQiW.js";
import { i as C } from "./interview-BsOMBsdV.js";
import { C as _, g as X } from "./index-ahWF3Ci-.js";
import { C as Z } from "./ConfirmDialog-DJIdcjoY.js";
import { Y as ee } from "./index-qDlAe4C1.js";
import { I as te, a as se } from "./InterviewPageHeader-WHjtOE0h.js";
import "./syntax-highlighter-BG_RSeav.js";
function re({ session: o, currentQuestion: i, messages: x, answer: d, onAnswerChange: l, onSubmit: f, isSubmitting: a, onShowCompleteConfirm: I }) {
  const p = n.useRef(null), b = n.useMemo(() => !o || !i ? 0 : (i.questionIndex + 1) / o.totalQuestions * 100, [o, i]), y = (r) => {
    r.key === "Enter" && (r.metaKey || r.ctrlKey) && f();
  };
  return e.jsxs("div", { className: "flex flex-col h-[calc(100vh-200px)] max-w-4xl mx-auto", children: [e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-6 mb-4 shadow-sm dark:shadow-slate-900/50 border border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("span", { className: "text-sm font-semibold text-slate-700 dark:text-slate-300", children: ["\u9898\u76EE ", i ? i.questionIndex + 1 : 0, " / ", o.totalQuestions] }), e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: [Math.round(b), "%"] })] }), e.jsx("div", { className: "h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden", children: e.jsx(h.div, { className: "h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full", initial: { width: 0 }, animate: { width: `${b}%` }, transition: { duration: 0.3 } }) })] }), e.jsxs("div", { className: "flex-1 bg-white dark:bg-slate-800 rounded-2xl shadow-sm dark:shadow-slate-900/50 overflow-hidden flex flex-col min-h-0 border border-slate-100 dark:border-slate-700", children: [e.jsx(ee, { ref: p, data: x, initialTopMostItemIndex: x.length - 1, followOutput: "smooth", className: "flex-1", itemContent: (r, m) => e.jsx("div", { className: "pb-4 px-6 first:pt-6", children: e.jsx(te, { role: m.type === "interviewer" ? "interviewer" : "user", text: m.content, category: m.category }) }) }), e.jsx("div", { className: "border-t border-slate-200 dark:border-slate-600 p-4 bg-slate-50 dark:bg-slate-700/50", children: e.jsxs("div", { className: "flex gap-3", children: [e.jsx("textarea", { value: d, onChange: (r) => l(r.target.value), onKeyDown: y, placeholder: "\u8F93\u5165\u4F60\u7684\u56DE\u7B54... (Ctrl/Cmd + Enter \u63D0\u4EA4)", className: "flex-1 px-4 py-3 border border-slate-300 dark:border-slate-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500", rows: 3, disabled: a }), e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsx(h.button, { onClick: f, disabled: !d.trim() || a, className: "px-6 py-3 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2", whileHover: { scale: a || !d.trim() ? 1 : 1.02 }, whileTap: { scale: a || !d.trim() ? 1 : 0.98 }, children: a ? e.jsxs(e.Fragment, { children: [e.jsx(h.div, { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }), "\u63D0\u4EA4\u4E2D"] }) : e.jsxs(e.Fragment, { children: [e.jsx(J, { className: "w-4 h-4" }), "\u63D0\u4EA4"] }) }), e.jsx(h.button, { onClick: () => I(true), disabled: a, className: "px-6 py-3 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-xl font-medium hover:bg-slate-300 dark:hover:bg-slate-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm", whileHover: { scale: a ? 1 : 1.02 }, whileTap: { scale: a ? 1 : 0.98 }, children: "\u63D0\u524D\u4EA4\u5377" })] })] }) })] })] });
}
function $(o) {
  return o ? { type: "resume", sessionId: o } : { type: "create" };
}
function xe({ resumeText: o, resumeId: i, sessionIdToResume: x, requestId: d, initialConfig: l, title: f = "\u6A21\u62DF\u9762\u8BD5", subtitle: a = "\u8BA4\u771F\u56DE\u7B54\u6BCF\u4E2A\u95EE\u9898\uFF0C\u5C55\u793A\u60A8\u7684\u5B9E\u529B", loadingText: I = "\u6B63\u5728\u751F\u6210\u9762\u8BD5\u9898\u76EE...", onBack: p, onSessionCreated: b, onInterviewComplete: y }) {
  const [r, m] = n.useState(null), [v, Q] = n.useState(null), [z, q] = n.useState([]), [g, S] = n.useState(""), [A, j] = n.useState(false), [T, c] = n.useState(""), [F, w] = n.useState(true), [K, M] = n.useState(false), P = n.useRef(false), O = (l == null ? void 0 : l.questionCount) ?? 8, V = (l == null ? void 0 : l.llmProvider) ?? "", E = (l == null ? void 0 : l.skillId) ?? "java-backend", Y = (l == null ? void 0 : l.difficulty) ?? "mid", B = l == null ? void 0 : l.customCategories, U = l == null ? void 0 : l.jdText;
  n.useEffect(() => {
    if (!P.current) {
      P.current = true;
      const t = $(x);
      t.type === "resume" ? D(t.sessionId) : W();
    }
  }, []);
  const W = async () => {
    w(true), c("");
    try {
      const t = await C.createSession({ resumeText: o, questionCount: O, resumeId: i, forceCreate: true, llmProvider: V, skillId: E, difficulty: Y, customCategories: E === _ ? B : void 0, jdText: E === _ ? U : void 0, requestId: d });
      H(t), b == null ? void 0 : b(t.sessionId);
    } catch (t) {
      c(`\u521B\u5EFA\u9762\u8BD5\u5931\u8D25\uFF1A${X(t)}`), console.error(t);
    } finally {
      w(false);
    }
  }, D = async (t) => {
    w(true), c("");
    try {
      const s = await C.getSession(t);
      H(s);
      const u = s.questions[s.currentQuestionIndex];
      (u == null ? void 0 : u.userAnswer) && S(u.userAnswer);
    } catch (s) {
      c("\u6062\u590D\u9762\u8BD5\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(s);
    } finally {
      w(false);
    }
  }, H = (t) => {
    if (m(t), t.questions.length > 0) {
      const s = Math.min(t.currentQuestionIndex, t.questions.length - 1), u = t.questions[s];
      Q(u);
      const L = [];
      for (let k = 0; k <= s; k++) {
        const N = t.questions[k];
        L.push({ type: "interviewer", content: N.question, category: N.category, questionIndex: k }), N.userAnswer && L.push({ type: "user", content: N.userAnswer });
      }
      q(L);
    }
  }, G = async () => {
    if (!g.trim() || !r || !v) return;
    j(true);
    const t = { type: "user", content: g };
    q((s) => [...s, t]);
    try {
      const s = await C.submitAnswer({ sessionId: r.sessionId, questionIndex: v.questionIndex, answer: g.trim() });
      S(""), s.hasNextQuestion && s.nextQuestion ? (Q(s.nextQuestion), q((u) => [...u, { type: "interviewer", content: s.nextQuestion.question, category: s.nextQuestion.category, questionIndex: s.nextQuestion.questionIndex }])) : y();
    } catch (s) {
      c("\u63D0\u4EA4\u7B54\u6848\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(s);
    } finally {
      j(false);
    }
  }, R = async () => {
    if (r) {
      j(true);
      try {
        await C.completeInterview(r.sessionId), M(false), y();
      } catch (t) {
        c("\u63D0\u524D\u4EA4\u5377\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), console.error(t);
      } finally {
        j(false);
      }
    }
  };
  return F ? e.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full mx-auto mb-4 animate-spin" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: I })] }) }) : T && !r ? e.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-red-500 dark:text-red-400 mb-4", children: T }), e.jsxs("div", { className: "flex gap-3 justify-center", children: [e.jsx("button", { onClick: () => {
    const t = $(x);
    t.type === "resume" ? D(t.sessionId) : W();
  }, className: "px-5 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600", children: "\u91CD\u8BD5" }), e.jsx("button", { onClick: p, className: "px-5 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600", children: "\u8FD4\u56DE" })] })] }) }) : !r || !v ? e.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: e.jsxs("div", { className: "text-center", children: [e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: "\u6682\u65E0\u53EF\u5C55\u793A\u7684\u9762\u8BD5\u5185\u5BB9" }), e.jsx("button", { onClick: p, className: "px-5 py-2 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600", children: "\u8FD4\u56DE" })] }) }) : e.jsxs("div", { className: "pb-10", children: [e.jsx(se, { title: f, subtitle: a, icon: e.jsxs("svg", { className: "w-6 h-6 text-white", viewBox: "0 0 24 24", fill: "none", children: [e.jsx("path", { d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), e.jsx("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), e.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), e.jsx("line", { x1: "8", y1: "23", x2: "16", y2: "23", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }) }), e.jsx(h.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 }, children: e.jsx(re, { session: r, currentQuestion: v, messages: z, answer: g, onAnswerChange: S, onSubmit: G, onCompleteEarly: R, isSubmitting: A, showCompleteConfirm: K, onShowCompleteConfirm: M }) }), e.jsx(Z, { open: K, title: "\u63D0\u524D\u4EA4\u5377", message: "\u786E\u5B9A\u8981\u63D0\u524D\u4EA4\u5377\u5417\uFF1F\u672A\u56DE\u7B54\u7684\u95EE\u9898\u5C06\u63090\u5206\u8BA1\u7B97\u3002", confirmText: "\u786E\u5B9A\u4EA4\u5377", cancelText: "\u53D6\u6D88", confirmVariant: "warning", loading: A, onConfirm: R, onCancel: () => M(false) })] });
}
export {
  xe as default
};
