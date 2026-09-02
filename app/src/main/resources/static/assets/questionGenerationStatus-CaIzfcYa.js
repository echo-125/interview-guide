import { j as e, A as E, m, S as y, X as I, L as O } from "./ui-vendor-D79l2AJO.js";
import { r as c } from "./react-vendor-ek4qDQiW.js";
import { u as w, L } from "./index-ahWF3Ci-.js";
const P = [{ value: "", label: "\u5168\u90E8" }, { value: "DRAFT", label: "\u8349\u7A3F" }, { value: "ACTIVE", label: "\u5DF2\u542F\u7528" }, { value: "ARCHIVED", label: "\u5DF2\u5F52\u6863" }, { value: "STALE", label: "\u5DF2\u8FC7\u671F" }], S = [{ value: "junior", label: "\u6821\u62DB" }, { value: "mid", label: "\u4E2D\u7EA7" }, { value: "senior", label: "\u9AD8\u7EA7" }], Y = [1, 3, 5, 8, 10], U = [0, 1, 2, 3], A = [3, 5, 10, 15], _ = [1, 2, 3, 5], x = "w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500", F = "mid", D = 3;
function q(s) {
  var _a;
  return ((_a = P.find((t) => t.value === s)) == null ? void 0 : _a.label) || s;
}
function z(s) {
  var _a;
  return ((_a = S.find((t) => t.value === s)) == null ? void 0 : _a.label) || s;
}
function $(s, t) {
  return s.find((l) => l.followUpCount === t) ?? null;
}
function H(s, t, l) {
  const r = $(s, t);
  if (!r) return "\u6682\u65F6\u65E0\u6CD5\u786E\u8BA4\u5F53\u524D\u914D\u7F6E\u7684\u53EF\u7528\u9898\u6570\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002";
  if (r.selectable) return `\u5F53\u524D\u6761\u4EF6\u53EF\u7528 ${r.availableQuestionCount} \u9053\u4E3B\u95EE\u9898\u3002`;
  const n = s.filter((i) => i.availableQuestionCount >= l);
  if (n.length === 0) return `\u5F53\u524D\u4EC5\u6709 ${r.availableQuestionCount} \u9053\u9898\u5305\u542B\u81F3\u5C11 ${t} \u4E2A\u8FFD\u95EE\uFF0C\u65E0\u6CD5\u62BD\u53D6 ${l} \u9053\u4E3B\u95EE\u9898\u3002\u5F53\u524D\u9898\u91CF\u4E0B\u6CA1\u6709\u8DB3\u591F\u7684\u5DF2\u542F\u7528\u4E3B\u95EE\u9898\uFF0C\u8BF7\u51CF\u5C11\u4E3B\u95EE\u9898\u6570\u6216\u8865\u5145\u9898\u5E93\u3002`;
  const o = n.reduce((i, d) => Math.max(i, d.followUpCount), 0);
  return `\u5F53\u524D\u4EC5\u6709 ${r.availableQuestionCount} \u9053\u9898\u5305\u542B\u81F3\u5C11 ${t} \u4E2A\u8FFD\u95EE\uFF0C\u65E0\u6CD5\u62BD\u53D6 ${l} \u9053\u4E3B\u95EE\u9898\u3002\u5728\u5F53\u524D\u9898\u91CF\u4E0B\uFF0C\u6BCF\u9898\u6700\u591A\u53EF\u4E25\u683C\u4FDD\u8BC1 ${o} \u4E2A\u8FFD\u95EE\u3002`;
}
function V(s, t) {
  return t == null || s >= t ? null : `\u8FFD\u95EE\u4E0D\u8DB3\uFF1A\u5B9E\u9645 ${s} / \u76EE\u6807 ${t}`;
}
function W({ open: s, knowledgeBaseName: t, defaultDifficulty: l = F, defaultCategoryLimit: r = D, initialConfig: n, submitting: o, error: i, onClose: d, onSubmit: C }) {
  const [u, b] = c.useState(l), [p, h] = c.useState(5), [v, N] = c.useState(2), [f, j] = c.useState(r), [g, k] = c.useState(""), T = w();
  return c.useEffect(() => {
    s && (b((n == null ? void 0 : n.difficulty) || l), h((n == null ? void 0 : n.questionCount) || 5), N((n == null ? void 0 : n.followUpCount) ?? 2), j((n == null ? void 0 : n.categoryLimit) || r), k((n == null ? void 0 : n.llmProvider) ?? ""));
  }, [s, l, r, n]), e.jsx(E, { children: s && e.jsxs(e.Fragment, { children: [e.jsx(m.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: d, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(m.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (a) => a.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full", children: [e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(y, { className: "w-5 h-5 text-primary-500" }), e.jsx("h3", { className: "text-lg font-bold text-slate-900 dark:text-white", children: "\u751F\u6210\u9898\u76EE" })] }), e.jsx("button", { type: "button", onClick: d, disabled: o, className: "p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50", children: e.jsx(I, { className: "w-5 h-5" }) })] }), e.jsxs("div", { className: "px-6 py-5 space-y-4", children: [e.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u57FA\u4E8E\u77E5\u8BC6\u5E93 ", e.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-200", children: t }), " \u7684\u5185\u5BB9\uFF0C \u6309\u96BE\u5EA6\u548C\u65B9\u5411\u751F\u6210\u8349\u7A3F\u9898\u3002\u9762\u8BD5\u65B9\u5411\u7531\u6A21\u578B\u57FA\u4E8E\u77E5\u8BC6\u5E93\u5185\u5BB9\u81EA\u52A8\u5F52\u7C7B\uFF0C\u5E76\u4F18\u5148\u590D\u7528\u5DF2\u6709\u65B9\u5411\u3002"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u96BE\u5EA6" }), e.jsx("select", { value: u, onChange: (a) => b(a.target.value), className: x, children: S.map((a) => e.jsx("option", { value: a.value, children: a.label }, a.value)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u9898\u91CF" }), e.jsx("select", { value: p, onChange: (a) => h(parseInt(a.target.value, 10)), className: x, children: A.map((a) => e.jsxs("option", { value: a, children: [a, " \u9898"] }, a)) })] })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u65B9\u5411\u4E0A\u9650" }), e.jsx("select", { value: f, onChange: (a) => j(parseInt(a.target.value, 10)), className: x, children: _.map((a) => e.jsxs("option", { value: a, children: [a, " \u4E2A"] }, a)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u6BCF\u9898\u8FFD\u95EE\u6570" }), e.jsx("select", { value: v, onChange: (a) => N(parseInt(a.target.value, 10)), className: x, children: U.map((a) => e.jsxs("option", { value: a, children: [a, " \u4E2A"] }, a)) })] })] }), e.jsxs("label", { className: "block", children: [e.jsxs("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: ["\u51FA\u9898\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B\uFF0C\u9ED8\u8BA4\u8DDF\u968F\u7CFB\u7EDF\u8BBE\u7F6E)" })] }), e.jsx(L, { providers: T, value: g, onChange: k })] }), i && e.jsx("p", { className: "text-sm text-red-500", children: i })] }), e.jsxs("div", { className: "flex gap-3 justify-end px-6 py-4 border-t border-slate-100 dark:border-slate-700", children: [e.jsx("button", { type: "button", onClick: d, disabled: o, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50", children: "\u53D6\u6D88" }), e.jsxs(m.button, { type: "button", onClick: () => C({ difficulty: u, questionCount: p, followUpCount: v, categoryLimit: f, llmProvider: g || void 0 }), disabled: o, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "px-5 py-2.5 inline-flex items-center gap-2 text-white rounded-xl font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", children: [o ? e.jsx(O, { className: "w-4 h-4 animate-spin" }) : e.jsx(y, { className: "w-4 h-4" }), o ? "\u63D0\u4EA4\u4E2D\u2026" : "\u5F00\u59CB\u751F\u6210"] })] })] }) })] }) });
}
function G(s) {
  return s === "QUEUED" || s === "PROCESSING";
}
function B(s, t, l) {
  return l && G(s) && t === "COMPLETED";
}
function K(s) {
  switch (s.questionGenStatus) {
    case "QUEUED":
      return { tone: "info", text: "\u4EFB\u52A1\u5DF2\u63D0\u4EA4\uFF0C\u6B63\u5728\u7B49\u5F85\u751F\u6210\u9898\u76EE\u2026" };
    case "PROCESSING":
      return { tone: "info", text: "\u6B63\u5728\u751F\u6210\u9898\u76EE\uFF0C\u671F\u95F4\u53EF\u4EE5\u7EE7\u7EED\u7BA1\u7406\u5DF2\u6709\u9898\u76EE\u2026" };
    case "COMPLETED":
      return { tone: s.skippedCount > 0 ? "warning" : "success", text: s.message || `\u5DF2\u751F\u6210 ${s.savedCount} \u9053\u9898\uFF0C\u8DF3\u8FC7 ${s.skippedCount} \u9053\u9898` };
    case "FAILED":
      return { tone: "error", text: "\u9898\u76EE\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" };
    case "NONE":
    default:
      return null;
  }
}
export {
  F as D,
  U as F,
  W as G,
  x as I,
  Y as M,
  P as S,
  S as a,
  H as b,
  D as c,
  V as d,
  q as e,
  z as f,
  $ as g,
  K as h,
  G as i,
  B as s
};
