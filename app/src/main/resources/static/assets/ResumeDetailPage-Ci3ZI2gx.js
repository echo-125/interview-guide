import { j as e, m as b, L as $, n as J, k as V, R as Q, T as Z, o as U, p as H, q as me, M as ee, e as he, f as te, r as ue, h as be, S as pe, F as ge, C as fe, a as je, s as ke, t as ye, A as Ne } from "./ui-vendor-CqaAdWtE.js";
import { r as l, u as we } from "./react-vendor-BA2qNj4G.js";
import { a as B, h as P, g as se, u as ve, L as Se } from "./index-CxLe-kJW.js";
import { n as W, c as Ce, a as Ie, b as ae } from "./score-3bjDqiWg.js";
import { R as re, a as De, P as Ee, b as Pe, c as Me, d as Re, T as le, L as Ae, C as Te, X as Le, Y as $e, e as Fe } from "./charts-vendor-BnQgIK0k.js";
import { a as O, f as F } from "./date-DBJmXC5z.js";
import { C as Ge } from "./ConfirmDialog-Cn876c6T.js";
import ze from "./InterviewDetailPanel-TdpZP0Yk.js";
import { r as Y } from "./resume-DJXL9zzr.js";
import "./syntax-highlighter-CeD-urYA.js";
function Oe({ data: t, height: o = 320, className: j = "" }) {
  const p = l.useMemo(() => {
    if (!t || t.length === 0) return [];
    const d = Math.max(...t.map((x) => x.fullMark)), N = t.map((x) => W(x.score, x.fullMark, d)), f = Math.max(...N, d), v = Math.max(d, f);
    return t.map((x) => ({ subject: x.subject, score: W(x.score, x.fullMark, d), fullMark: v, originalScore: x.score, originalFullMark: x.fullMark }));
  }, [t]), h = typeof window < "u" && document.documentElement.classList.contains("dark"), r = h ? "#334155" : "#e2e8f0", g = h ? "#94a3b8" : "#64748b", c = h ? "#1e293b" : "#fff", m = h ? "#334155" : "#e2e8f0";
  return e.jsx("div", { className: j, style: { height: o }, children: e.jsx(re, { width: "100%", height: "100%", children: e.jsxs(De, { data: p, children: [e.jsx(Ee, { stroke: r }), e.jsx(Pe, { dataKey: "subject", tick: { fill: g, fontSize: 12, fontWeight: 500 } }), e.jsx(Me, { angle: 90, domain: [0, p.length > 0 ? p[0].fullMark : 40], tick: { fill: g, fontSize: 10 }, tickFormatter: (d) => d.toString() }), e.jsx(Re, { name: "\u5F97\u5206", dataKey: "score", stroke: "#6366f1", fill: "#6366f1", fillOpacity: 0.6, strokeWidth: 2 }), e.jsx(le, { contentStyle: { backgroundColor: c, border: `1px solid ${m}`, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }, formatter: (d, N, f) => {
    var _a, _b;
    const v = ((_a = f == null ? void 0 : f.payload) == null ? void 0 : _a.originalScore) ?? 0, x = ((_b = f == null ? void 0 : f.payload) == null ? void 0 : _b.originalFullMark) ?? 40, D = x > 0 ? Math.round(v / x * 100) : 0;
    return [`${v}/${x} (${D}%)`, "\u5F97\u5206"];
  } })] }) }) });
}
function A({ label: t, score: o, maxScore: j, color: p = "bg-primary-500", delay: h = 0, className: r = "" }) {
  const g = Ce(o, j);
  return e.jsxs("div", { className: `bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 ${r}`, children: [e.jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400 mb-1", children: t }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden", children: e.jsx(b.div, { className: `h-full ${p} rounded-full`, initial: { width: 0 }, animate: { width: `${g}%` }, transition: { duration: 0.8, delay: h } }) }), e.jsxs("span", { className: "text-sm font-semibold text-slate-700 dark:text-slate-300 w-8 text-right", children: [o, "/", j] })] })] });
}
function Je({ analysis: t, analyzeStatus: o, analyzeError: j, onExport: p, exporting: h, onReanalyze: r, reanalyzing: g }) {
  var _a, _b;
  const c = l.useMemo(() => {
    if (!t) return [];
    const u = t.projectScore || 0, w = t.skillMatchScore || 0, s = t.contentScore || 0, y = t.structureScore || 0;
    return [{ subject: "\u8868\u8FBE\u4E13\u4E1A\u6027", score: t.expressionScore || 0, fullMark: 10 }, { subject: "\u6280\u80FD\u5339\u914D", score: w, fullMark: 20 }, { subject: "\u5185\u5BB9\u5B8C\u6574\u6027", score: s, fullMark: 15 }, { subject: "\u7ED3\u6784\u6E05\u6670\u5EA6", score: y, fullMark: 15 }, { subject: "\u9879\u76EE\u7ECF\u9A8C", score: u, fullMark: 40 }];
  }, [t]), m = l.useMemo(() => {
    if (!(t == null ? void 0 : t.suggestions)) return { high: [], medium: [], low: [] };
    const u = t.suggestions;
    return { high: u.filter((w) => w.priority === "\u9AD8"), medium: u.filter((w) => w.priority === "\u4E2D"), low: u.filter((w) => w.priority === "\u4F4E") };
  }, [t]), d = (u) => {
    switch (u) {
      case "\u9AD8":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400";
      case "\u4E2D":
        return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400";
      case "\u4F4E":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400";
      default:
        return "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300";
    }
  }, N = (u) => {
    switch (u) {
      case "\u9AD8":
        return "bg-red-500 text-white";
      case "\u4E2D":
        return "bg-amber-500 text-white";
      case "\u4F4E":
        return "bg-blue-500 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  }, f = (u) => ({ \u9879\u76EE: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300", \u6280\u80FD: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300", \u5185\u5BB9: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300", \u683C\u5F0F: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300", \u7ED3\u6784: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300", \u8868\u8FBE: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300" })[u] || "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300", v = (t == null ? void 0 : t.summary) && (t.summary.includes("I/O error") || t.summary.includes("\u5206\u6790\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF") || t.summary.includes("\u7B80\u5386\u5206\u6790\u5931\u8D25") || t.summary.includes("Remote host terminated") || t.summary.includes("handshake")), x = t && t.overallScore >= 10 && t.summary && !v;
  if (o === "PENDING" || o === "PROCESSING" || o === void 0 && !t) {
    const u = o === "PROCESSING";
    return e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [e.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center", children: u ? e.jsx($, { className: "w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin" }) : e.jsx(J, { className: "w-8 h-8 text-yellow-500 dark:text-yellow-400" }) }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: u ? "AI \u6B63\u5728\u5206\u6790\u4E2D..." : "\u7B49\u5F85\u5206\u6790" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: u ? "\u8BF7\u7A0D\u5019\uFF0CAI \u6B63\u5728\u5BF9\u60A8\u7684\u7B80\u5386\u8FDB\u884C\u6DF1\u5EA6\u5206\u6790" : "\u7B80\u5386\u5DF2\u4E0A\u4F20\u6210\u529F\uFF0C\u5373\u5C06\u5F00\u59CB AI \u5206\u6790" }), e.jsx("p", { className: "text-sm text-slate-400 dark:text-slate-500", children: "\u9875\u9762\u5C06\u81EA\u52A8\u5237\u65B0\u663E\u793A\u5206\u6790\u7ED3\u679C" })] });
  }
  if (o === "FAILED" || !x) return e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [e.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center", children: e.jsx(V, { className: "w-8 h-8 text-red-500 dark:text-red-400" }) }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u5206\u6790\u5931\u8D25" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: "AI \u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" }), (j || (t == null ? void 0 : t.summary)) && e.jsx("div", { className: "mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-left mb-4", children: e.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: j || t.summary }) }), r && e.jsxs(b.button, { onClick: r, disabled: g, className: "px-6 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [e.jsx(Q, { className: `w-4 h-4 ${g ? "animate-spin" : ""}` }), g ? "\u91CD\u65B0\u5206\u6790\u4E2D..." : "\u91CD\u65B0\u5206\u6790"] })] });
  const n = t.projectScore || 0, k = t.skillMatchScore || 0, C = t.contentScore || 0, S = t.structureScore || 0, i = t.expressionScore || 0;
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [e.jsxs(b.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: [e.jsxs("div", { className: "flex items-center justify-between mb-6", children: [e.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400", children: [e.jsx(Z, { className: "w-5 h-5" }), e.jsx("span", { className: "font-semibold", children: "\u6838\u5FC3\u8BC4\u4EF7" })] }), e.jsxs(b.button, { onClick: p, disabled: h, className: "px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [e.jsx(U, { className: "w-4 h-4" }), h ? "\u5BFC\u51FA\u4E2D..." : "\u5BFC\u51FA\u5206\u6790\u62A5\u544A"] })] }), e.jsxs("div", { className: "bg-gradient-to-br from-emerald-50 dark:from-emerald-900/30 to-green-50 dark:to-slate-800 rounded-xl p-6", children: [e.jsx("p", { className: "text-lg text-slate-800 dark:text-white leading-relaxed mb-6", children: t.summary || "\u5019\u9009\u4EBA\u5177\u5907\u624E\u5B9E\u7684\u6280\u672F\u57FA\u7840\uFF0C\u6709\u5927\u578B\u9879\u76EE\u67B6\u6784\u7ECF\u9A8C\u3002" }), e.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-5", children: [e.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2", children: "\u603B\u5206" }), e.jsx("span", { className: "text-4xl font-bold text-slate-900 dark:text-white", children: t.overallScore || 0 }), e.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: "/ 100" })] }), e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-5", children: [e.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2", children: "\u5206\u6790\u65F6\u95F4" }), e.jsx("span", { className: "text-sm text-slate-700 dark:text-slate-300", children: O(t.analyzedAt) })] })] }), t.strengths && t.strengths.length > 0 && e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-4", children: [e.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-3", children: "\u4F18\u52BF\u4EAE\u70B9" }), e.jsx("div", { className: "flex flex-wrap gap-2", children: t.strengths.map((u, w) => e.jsx("span", { className: "px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm font-medium", children: u }, w)) })] })] })] }), e.jsxs(b.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: [e.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6", children: [e.jsx(H, { className: "w-5 h-5" }), e.jsx("span", { className: "font-semibold", children: "\u591A\u7EF4\u5EA6\u8BC4\u5206" })] }), e.jsx(Oe, { data: c, height: 320 }), e.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [e.jsx(A, { label: "\u9879\u76EE\u7ECF\u9A8C", score: n, maxScore: 40, color: "bg-purple-500", delay: 0.3, className: "col-span-2" }), e.jsx(A, { label: "\u6280\u80FD\u5339\u914D", score: k, maxScore: 20, color: "bg-blue-500", delay: 0.4 }), e.jsx(A, { label: "\u5185\u5BB9\u5B8C\u6574\u6027", score: C, maxScore: 15, color: "bg-emerald-500", delay: 0.5 }), e.jsx(A, { label: "\u7ED3\u6784\u6E05\u6670\u5EA6", score: S, maxScore: 15, color: "bg-cyan-500", delay: 0.6 }), e.jsx(A, { label: "\u8868\u8FBE\u4E13\u4E1A\u6027", score: i, maxScore: 10, color: "bg-orange-500", delay: 0.7 })] })] })] }), e.jsxs(b.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: [e.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6", children: [e.jsx(me, { className: "w-5 h-5" }), e.jsx("span", { className: "font-semibold", children: "\u6539\u8FDB\u5EFA\u8BAE" }), e.jsxs("span", { className: "text-sm text-slate-400 dark:text-slate-500", children: ["(", ((_a = t.suggestions) == null ? void 0 : _a.length) || 0, " \u6761)"] })] }), e.jsxs("div", { className: "space-y-6", children: [m.high.length > 0 && e.jsx(z, { priority: "\u9AD8", suggestions: m.high, getPriorityColor: d, getPriorityBadgeColor: N, getCategoryColor: f, delay: 0.4 }), m.medium.length > 0 && e.jsx(z, { priority: "\u4E2D", suggestions: m.medium, getPriorityColor: d, getPriorityBadgeColor: N, getCategoryColor: f, delay: 0.5 }), m.low.length > 0 && e.jsx(z, { priority: "\u4F4E", suggestions: m.low, getPriorityColor: d, getPriorityBadgeColor: N, getCategoryColor: f, delay: 0.6 }), ((_b = t.suggestions) == null ? void 0 : _b.length) === 0 && e.jsx("div", { className: "text-center py-8 text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u6539\u8FDB\u5EFA\u8BAE" })] })] })] });
}
function z({ priority: t, suggestions: o, getPriorityColor: j, getPriorityBadgeColor: p, getCategoryColor: h, delay: r }) {
  const g = { \u9AD8: { bg: "bg-red-100 dark:bg-red-900/50", text: "text-red-700 dark:text-red-300", border: "bg-red-100 dark:bg-red-900/50" }, \u4E2D: { bg: "bg-amber-100 dark:bg-amber-900/50", text: "text-amber-700 dark:text-amber-300", border: "bg-amber-100 dark:bg-amber-900/50" }, \u4F4E: { bg: "bg-blue-100 dark:bg-blue-900/50", text: "text-blue-700 dark:text-blue-300", border: "bg-blue-100 dark:bg-blue-900/50" } }, c = g[t] || g.\u4E2D;
  return e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [e.jsxs("span", { className: `px-3 py-1 ${c.bg} ${c.text} rounded-full text-sm font-semibold`, children: [t, "\u4F18\u5148\u7EA7 (", o.length, ")"] }), e.jsx("div", { className: `flex-1 h-px ${c.border}` })] }), e.jsx("div", { className: "space-y-3", children: o.map((m, d) => e.jsxs(b.div, { className: `p-4 rounded-xl border-2 ${j(t)}`, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: r + d * 0.1 }, children: [e.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [e.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-semibold ${p(t)}`, children: t }), e.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-medium ${h(m.category || "\u5176\u4ED6")}`, children: m.category || "\u5176\u4ED6" })] }), e.jsxs("div", { className: "mb-2", children: [e.jsx("p", { className: "font-semibold text-slate-900 dark:text-white mb-1", children: m.issue || "\u95EE\u9898\u63CF\u8FF0" }), e.jsx("p", { className: "text-sm leading-relaxed text-slate-700 dark:text-slate-300", children: m.recommendation || m })] })] }, `${t}-${d}`)) })] });
}
function Ve({ interviews: t, onStartInterview: o, onViewInterview: j, onExportInterview: p, onDeleteInterview: h, exporting: r, loadingInterview: g }) {
  const { showToast: c } = B(), [m, d] = l.useState(null), [N, f] = l.useState(null), v = (n, k) => {
    k.stopPropagation(), f({ sessionId: n });
  }, x = async () => {
    if (!N) return;
    const { sessionId: n } = N;
    d(n);
    try {
      await P.deleteInterview(n), h(n), f(null);
    } catch (k) {
      c(se(k, "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"), "error");
    } finally {
      d(null);
    }
  }, D = l.useMemo(() => t.filter((n) => n.overallScore !== null).map((n) => ({ name: F(n.createdAt), score: n.overallScore || 0, index: t.length - t.indexOf(n) })).reverse(), [t]);
  return t.length === 0 ? e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [e.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: e.jsx(ee, { className: "w-8 h-8 text-slate-400" }) }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6", children: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5\uFF0C\u83B7\u53D6\u4E13\u4E1A\u8BC4\u4F30" }), e.jsx(b.button, { onClick: o, className: "px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5" })] }) : e.jsxs("div", { className: "space-y-6", children: [D.length > 0 && e.jsxs(b.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [e.jsxs("div", { className: "flex items-center justify-between mb-6", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Z, { className: "w-5 h-5 text-primary-500" }), e.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u9762\u8BD5\u8868\u73B0\u8D8B\u52BF" })] }), e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u5171 ", D.length, " \u573A\u7EC3\u4E60"] })] }), e.jsx("div", { className: "h-48", children: e.jsx(re, { width: "100%", height: "100%", children: e.jsxs(Ae, { data: D, margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [e.jsx(Te, { strokeDasharray: "3 3", stroke: "#e2e8f0", className: "dark:stroke-slate-700" }), e.jsx(Le, { dataKey: "name", axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), e.jsx($e, { domain: [0, 100], axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), e.jsx(le, { contentStyle: { backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }, formatter: (n) => [`${n} \u5206`, "\u5F97\u5206"] }), e.jsx(Fe, { type: "monotone", dataKey: "score", stroke: "#6366f1", strokeWidth: 3, dot: { fill: "#6366f1", strokeWidth: 2, r: 5 }, activeDot: { r: 8, fill: "#6366f1" } })] }) }) })] }), e.jsxs(b.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: [e.jsx("div", { className: "flex items-center justify-between mb-6", children: e.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u5386\u53F2\u9762\u8BD5\u573A\u6B21" }) }), e.jsx("div", { className: "space-y-4", children: t.map((n, k) => e.jsx(Ue, { interview: n, index: k, total: t.length, exporting: r === n.sessionId, deleting: m === n.sessionId, onView: () => j(n.sessionId), onExport: () => p(n.sessionId), onDelete: (C) => v(n.sessionId, C) }, n.id)) }), e.jsx(Ge, { open: N !== null, title: "\u5220\u9664\u9762\u8BD5\u8BB0\u5F55", message: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u9762\u8BD5\u8BB0\u5F55\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002", confirmText: "\u786E\u5B9A\u5220\u9664", cancelText: "\u53D6\u6D88", confirmVariant: "danger", loading: m !== null, onConfirm: x, onCancel: () => f(null) }), g && e.jsx("div", { className: "fixed inset-0 bg-black/20 dark:bg-black/50 flex items-center justify-center z-50", children: e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-6 flex items-center gap-4", children: [e.jsx(b.div, { className: "w-8 h-8 border-3 border-slate-200 dark:border-slate-600 border-t-primary-500 rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }), e.jsx("span", { className: "text-slate-600 dark:text-slate-300", children: "\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5..." })] }) })] })] });
}
function Ue({ interview: t, index: o, total: j, exporting: p, deleting: h, onView: r, onExport: g, onDelete: c }) {
  return e.jsxs(b.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: o * 0.1 }, onClick: r, className: "flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-colors group", children: [e.jsx("div", { className: `w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${t.overallScore !== null ? Ie(t.overallScore, [85, 70]) : "bg-slate-100 dark:bg-slate-600 text-slate-400"}`, children: t.overallScore ?? "-" }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsxs("p", { className: "font-medium text-slate-800 dark:text-white truncate", children: ["\u6A21\u62DF\u9762\u8BD5 #", j - o] }), e.jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400", children: [e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(he, { className: "w-4 h-4" }), F(t.createdAt)] }), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(te, { className: "w-4 h-4" }), t.totalQuestions, " \u9898"] })] })] }), e.jsxs("div", { className: "flex items-center gap-2 opacity-0 group-hover:opacity-100", children: [e.jsx(b.button, { onClick: (m) => {
    m.stopPropagation(), g();
  }, disabled: p, className: "px-3 py-2 text-slate-400 hover:text-primary-500 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-all", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: e.jsx(U, { className: "w-5 h-5" }) }), e.jsx("button", { onClick: c, disabled: h, className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed", title: "\u5220\u9664\u9762\u8BD5\u8BB0\u5F55", children: h ? e.jsx(b.div, { className: "w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }) : e.jsx(ue, { className: "w-5 h-5" }) })] }), e.jsx(be, { className: "w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0" })] });
}
const L = 50, X = { \u9AD8: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300", \u4E2D: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", \u4F4E: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300" };
function He(t) {
  if (!t) return null;
  const o = X[t] || X.\u4F4E;
  return e.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ${o}`, children: t });
}
function Be(t) {
  return t.analysisStatus === "PENDING" || t.analysisStatus === "PROCESSING" ? e.jsxs("span", { className: "flex items-center gap-1 text-xs text-blue-500", children: [e.jsx(Q, { className: "w-3 h-3 animate-spin" }), " \u5206\u6790\u4E2D"] }) : t.analysisStatus === "FAILED" ? e.jsxs("span", { className: "flex items-center gap-1 text-xs text-red-500", children: [e.jsx(V, { className: "w-3 h-3" }), " \u5206\u6790\u5931\u8D25"] }) : t.matchScore !== null && t.matchScore !== void 0 ? e.jsxs("span", { className: "text-xs text-slate-600 dark:text-slate-300", children: ["\u5339\u914D\u5EA6 ", e.jsx("span", { className: `font-bold ${ae(t.matchScore)}`, children: t.matchScore })] }) : null;
}
function _e({ resumeId: t }) {
  const { showToast: o } = B(), j = ve(), [p, h] = l.useState(""), [r, g] = l.useState(""), [c, m] = l.useState([]), [d, N] = l.useState(null), [f, v] = l.useState(true), [x, D] = l.useState(false), [n, k] = l.useState(false), C = l.useCallback(async (s = false) => {
    s || v(true);
    try {
      const y = await Y.listJdAnalyses(t);
      m(y);
    } catch (y) {
      console.error("\u52A0\u8F7D JD \u5339\u914D\u8BCA\u65AD\u8BB0\u5F55\u5931\u8D25", y);
    } finally {
      s || v(false);
    }
  }, [t]);
  l.useEffect(() => {
    C();
  }, [C]), l.useEffect(() => {
    if (c.length === 0) {
      N(null);
      return;
    }
    N((s) => s && c.some((y) => y.id === s) ? s : c[0].id);
  }, [c]), l.useEffect(() => {
    k(false);
  }, [d]);
  const S = c[0], i = c.find((s) => s.id === d) ?? S, u = (S == null ? void 0 : S.analysisStatus) === "PENDING" || (S == null ? void 0 : S.analysisStatus) === "PROCESSING";
  l.useEffect(() => {
    if (u) {
      const s = setInterval(() => C(true), 5e3);
      return () => clearInterval(s);
    }
  }, [u, C]);
  const w = async () => {
    if (p.trim().length < L) {
      o(`\u8BF7\u7C98\u8D34\u81F3\u5C11 ${L} \u5B57\u7684\u804C\u4F4D\u63CF\u8FF0`, "error");
      return;
    }
    D(true);
    try {
      await Y.startJdAnalysis(t, p.trim(), r || void 0), h(""), await C(true);
    } catch (s) {
      o(se(s) || "\u53D1\u8D77\u8BCA\u65AD\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      D(false);
    }
  };
  return f ? e.jsx("div", { className: "flex items-center justify-center py-16", children: e.jsx($, { className: "w-6 h-6 text-primary-500 animate-spin" }) }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx(H, { className: "w-5 h-5 text-primary-500" }), e.jsx("h3", { className: "font-bold text-slate-800 dark:text-white", children: "JD \u5339\u914D\u8BCA\u65AD" })] }), e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mb-4", children: "\u7C98\u8D34\u76EE\u6807\u5C97\u4F4D\u7684\u804C\u4F4D\u63CF\u8FF0\uFF08JD\uFF09\uFF0CAI \u5C06\u5BF9\u6BD4\u7B80\u5386\u7ED9\u51FA\u5339\u914D\u5EA6\u8BC4\u5206\u3001\u6280\u80FD\u7F3A\u53E3\u4E0E\u9762\u8BD5\u524D\u8865\u5F3A\u5EFA\u8BAE\uFF1B\u8BCA\u65AD\u51FA\u7684\u8584\u5F31\u70B9\u4F1A\u81EA\u52A8\u878D\u5165\u4E4B\u540E\u7684\u6A21\u62DF\u9762\u8BD5\u51FA\u9898\u3002" }), e.jsx("textarea", { value: p, onChange: (s) => h(s.target.value), placeholder: `\u7C98\u8D34\u76EE\u6807\u5C97\u4F4D\u7684\u804C\u4F4D\u63CF\u8FF0\uFF08JD\uFF09\uFF0C\u81F3\u5C11 ${L} \u5B57...`, rows: 5, className: `w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700
            bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white
            placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2
            focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), e.jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end", children: [e.jsxs("div", { children: [e.jsxs("label", { className: "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300", children: ["\u5206\u6790\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B\uFF0C\u9ED8\u8BA4\u8DDF\u968F\u7CFB\u7EDF\u8BBE\u7F6E)" })] }), e.jsx(Se, { providers: j, value: r, onChange: g, disabled: x })] }), e.jsxs("button", { onClick: w, disabled: x || p.trim().length < L, className: `px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2
              bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25
              hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`, children: [x ? e.jsx($, { className: "w-4 h-4 animate-spin" }) : e.jsx(pe, { className: "w-4 h-4" }), x ? "\u63D0\u4EA4\u4E2D..." : "\u5F00\u59CB\u8BCA\u65AD"] })] })] }), i && e.jsxs("div", { className: "space-y-4", children: [c.length > 1 && e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-4", children: [e.jsxs("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2", children: ["\u8BCA\u65AD\u5386\u53F2\uFF08", c.length, " \u6761\uFF09"] }), e.jsx("div", { className: "flex flex-wrap gap-2", children: c.map((s, y) => {
    const M = s.id === d;
    return e.jsxs("button", { onClick: () => N(s.id), className: `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border
                        ${M ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"}`, children: [e.jsx("span", { className: "tabular-nums", children: s.matchScore !== null && s.matchScore !== void 0 ? `${s.matchScore}\u5206` : s.analysisStatus === "FAILED" ? "\u5931\u8D25" : s.analysisStatus === "PENDING" || s.analysisStatus === "PROCESSING" ? "\u5206\u6790\u4E2D" : "\u5F85\u51FA\u5206" }), e.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "\xB7" }), e.jsx("span", { children: O(s.createdAt) }), y === 0 && e.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400", children: "\u6700\u65B0" })] }, s.id);
  }) })] }), e.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6", children: [e.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 mb-4", children: [e.jsx("h3", { className: "font-bold text-slate-800 dark:text-white", children: "\u8BCA\u65AD\u7ED3\u679C" }), e.jsxs("span", { className: "flex items-center gap-3 text-xs text-slate-400", children: [Be(i), e.jsxs("span", { className: "flex items-center gap-1", children: [e.jsx(J, { className: "w-3 h-3" }), " ", O(i.createdAt)] })] })] }), i.analysisStatus === "FAILED" ? e.jsxs("div", { className: "flex items-start gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-sm text-red-600 dark:text-red-300", children: [e.jsx(V, { className: "w-4 h-4 mt-0.5 flex-shrink-0" }), e.jsx("span", { children: i.analysisError || "\u5206\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u8D77\u8BCA\u65AD" })] }) : i.analysisStatus === "PENDING" || i.analysisStatus === "PROCESSING" ? e.jsxs("div", { className: "flex items-center justify-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400", children: [e.jsx($, { className: "w-5 h-5 text-primary-500 animate-spin" }), "AI \u6B63\u5728\u5BF9\u6BD4\u7B80\u5386\u4E0E JD\uFF0C\u8BF7\u7A0D\u5019..."] }) : e.jsxs("div", { className: "space-y-5", children: [i.matchScore !== null && i.matchScore !== void 0 && e.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-primary-50/80 dark:bg-primary-900/20", children: [e.jsx("div", { className: `text-4xl font-bold tabular-nums ${ae(i.matchScore)}`, children: i.matchScore }), e.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-300 flex-1 min-w-0", children: [e.jsx("p", { className: "font-semibold text-slate-800 dark:text-white mb-0.5", children: "JD \u5339\u914D\u5EA6\uFF08\u6EE1\u5206 100\uFF09" }), i.summary && e.jsx("p", { className: "text-xs leading-relaxed", children: i.summary })] })] }), i.jdText && e.jsxs("div", { className: "rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden", children: [e.jsxs("button", { onClick: () => k(!n), className: "w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors", children: [e.jsx(ge, { className: "w-4 h-4 text-slate-400" }), e.jsx("span", { children: "\u8BCA\u65AD\u4F7F\u7528\u7684 JD \u539F\u6587" }), n ? e.jsx(fe, { className: "w-4 h-4 ml-auto text-slate-400" }) : e.jsx(je, { className: "w-4 h-4 ml-auto text-slate-400" })] }), n && e.jsx("pre", { className: "px-4 pb-3 text-xs text-slate-500 dark:text-slate-400 whitespace-pre-wrap break-words leading-relaxed", children: i.jdText })] }), i.skillGaps.length > 0 && e.jsxs("div", { children: [e.jsxs("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2", children: ["\u6280\u80FD\u7F3A\u53E3\uFF08", i.skillGaps.length, "\uFF09"] }), e.jsx("div", { className: "space-y-2", children: i.skillGaps.map((s, y) => e.jsxs("div", { className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-sm font-medium text-slate-800 dark:text-white", children: s.gapSkill }), He(s.severity)] }), s.jdRequirement && e.jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: ["\u5C97\u4F4D\u8981\u6C42\uFF1A", s.jdRequirement] }), s.resumeEvidence && e.jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: ["\u7B80\u5386\u73B0\u72B6\uFF1A", s.resumeEvidence] })] }, y)) })] }), i.weaknesses.length > 0 && e.jsxs("div", { children: [e.jsxs("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2", children: ["\u8584\u5F31\u70B9\uFF08", i.weaknesses.length, "\uFF09"] }), e.jsx("div", { className: "space-y-2", children: i.weaknesses.map((s, y) => e.jsxs("div", { className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700", children: [e.jsx("p", { className: "text-sm font-medium text-slate-800 dark:text-white", children: s.area }), s.description && e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: s.description }), s.advice && e.jsxs("p", { className: "text-xs text-primary-600 dark:text-primary-400 mt-1", children: ["\u5EFA\u8BAE\uFF1A", s.advice] })] }, y)) })] }), i.recommendations.length > 0 && e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2", children: "\u9762\u8BD5\u524D\u5EFA\u8BAE\u8865\u5F3A" }), e.jsx("div", { className: "flex flex-wrap gap-2", children: i.recommendations.map((s, y) => e.jsx("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300", children: s }, y)) })] })] })] })] })] });
}
function at({ resumeId: t, onBack: o, onStartInterview: j }) {
  var _a, _b, _c;
  const p = we(), { showToast: h } = B(), [r, g] = l.useState(null), [c, m] = l.useState(true), [d, N] = l.useState("analysis"), [f, v] = l.useState(null), [[x, D], n] = l.useState([0, 0]), [k, C] = l.useState("list"), [S, i] = l.useState(null), [u, w] = l.useState(false), [s, y] = l.useState(false), M = l.useCallback(async () => {
    try {
      const a = await P.getResumeDetail(t);
      g(a);
    } catch (a) {
      console.error("\u52A0\u8F7D\u7B80\u5386\u8BE6\u60C5\u5931\u8D25", a);
    }
  }, [t]), T = l.useCallback(async () => {
    m(true);
    try {
      const a = await P.getResumeDetail(t);
      g(a);
    } catch (a) {
      console.error("\u52A0\u8F7D\u7B80\u5386\u8BE6\u60C5\u5931\u8D25", a);
    } finally {
      m(false);
    }
  }, [t]);
  l.useEffect(() => {
    T();
  }, [T]), l.useEffect(() => {
    if (r && (r.analyzeStatus === "PENDING" || r.analyzeStatus === "PROCESSING" || r.analyzeStatus === void 0 && (!r.analyses || r.analyses.length === 0)) && !c) {
      const I = setInterval(() => {
        M();
      }, 5e3);
      return () => clearInterval(I);
    }
  }, [r, c, M]);
  const _ = async () => {
    try {
      y(true), await P.reanalyze(t), await M();
    } catch (a) {
      console.error("\u91CD\u65B0\u5206\u6790\u5931\u8D25", a);
    } finally {
      y(false);
    }
  };
  l.useEffect(() => {
    var _a2;
    const a = (_a2 = p.state) == null ? void 0 : _a2.viewInterview;
    a && r && (N("interview"), (async () => {
      w(true);
      try {
        const E = await P.getInterviewDetail(a);
        i(E), C("interviewDetail");
      } catch (E) {
        console.error("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25", E);
      } finally {
        w(false);
      }
    })());
  }, [p.state, r]);
  const q = async () => {
    v("analysis");
    try {
      const a = await P.exportAnalysisPdf(t), I = window.URL.createObjectURL(a), E = document.createElement("a");
      E.href = I, E.download = `\u7B80\u5386\u5206\u6790\u62A5\u544A_${(r == null ? void 0 : r.filename) || t}.pdf`, document.body.appendChild(E), E.click(), document.body.removeChild(E), window.URL.revokeObjectURL(I);
    } catch {
      h("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      v(null);
    }
  }, G = async (a) => {
    v(a);
    try {
      const I = await P.exportInterviewPdf(a), E = window.URL.createObjectURL(I), R = document.createElement("a");
      R.href = E, R.download = `\u9762\u8BD5\u62A5\u544A_${a}.pdf`, document.body.appendChild(R), R.click(), document.body.removeChild(R), window.URL.revokeObjectURL(E);
    } catch {
      h("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      v(null);
    }
  }, K = async (a) => {
    w(true);
    try {
      const I = await P.getInterviewDetail(a);
      i(I), C("interviewDetail");
    } catch {
      h("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25", "error");
    } finally {
      w(false);
    }
  }, ie = () => {
    C("list"), i(null);
  }, ne = async (a) => {
    await T(), (S == null ? void 0 : S.sessionId) === a && (C("list"), i(null));
  }, de = (a) => {
    const I = a === "analysis" ? 0 : a === "jd" ? 1 : 2;
    n([I, I > x ? 1 : -1]), N(a), C("list"), i(null);
  }, oe = { enter: (a) => ({ x: a > 0 ? 300 : -300, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (a) => ({ x: a < 0 ? 300 : -300, opacity: 0 }) };
  if (c) return e.jsx("div", { className: "flex items-center justify-center h-96", children: e.jsx(b.div, { className: "w-12 h-12 border-4 border-slate-200 dark:border-slate-600 border-t-primary-500 rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }) });
  if (!r) return e.jsxs("div", { className: "text-center py-20", children: [e.jsx("p", { className: "text-red-500 mb-4", children: "\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u8FD4\u56DE\u91CD\u8BD5" }), e.jsx("button", { onClick: o, className: "px-6 py-2 bg-primary-500 text-white rounded-lg", children: "\u8FD4\u56DE\u5217\u8868" })] });
  const ce = (_a = r.analyses) == null ? void 0 : _a[0], xe = [{ id: "analysis", label: "\u7B80\u5386\u5206\u6790", icon: ke }, { id: "jd", label: "JD \u5339\u914D", icon: H }, { id: "interview", label: "\u9762\u8BD5\u8BB0\u5F55", icon: te, count: ((_b = r.interviews) == null ? void 0 : _b.length) || 0 }];
  return e.jsxs(b.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "w-full", children: [e.jsxs("div", { className: "flex justify-between items-center mb-8 flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(b.button, { onClick: k === "interviewDetail" ? ie : o, className: "w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-300 transition-all shadow-sm", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: e.jsx(ye, { className: "w-5 h-5" }) }), e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-bold text-slate-900 dark:text-white", children: k === "interviewDetail" ? `\u9762\u8BD5\u8BE6\u60C5 #${((_c = S == null ? void 0 : S.sessionId) == null ? void 0 : _c.slice(-6)) || ""}` : r.filename }), e.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5", children: [e.jsx(J, { className: "w-4 h-4" }), k === "interviewDetail" ? `\u5B8C\u6210\u4E8E ${F((S == null ? void 0 : S.completedAt) || (S == null ? void 0 : S.createdAt) || "")}` : `\u4E0A\u4F20\u4E8E ${F(r.uploadedAt)}`] })] })] }), e.jsxs("div", { className: "flex gap-3", children: [k === "interviewDetail" && S && e.jsxs(b.button, { onClick: () => G(S.sessionId), disabled: f === S.sessionId, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [e.jsx(U, { className: "w-4 h-4" }), f === S.sessionId ? "\u5BFC\u51FA\u4E2D..." : "\u5BFC\u51FA PDF"] }), k !== "interviewDetail" && e.jsxs(b.button, { onClick: () => j(t), className: "px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all flex items-center gap-2", whileHover: { scale: 1.02, y: -1 }, whileTap: { scale: 0.98 }, children: [e.jsx(ee, { className: "w-4 h-4" }), "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5"] })] })] }), k !== "interviewDetail" && e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-2 mb-6 inline-flex gap-1", children: xe.map((a) => e.jsxs(b.button, { onClick: () => de(a.id), className: `relative px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors
                ${d === a.id ? "text-primary-600 dark:text-primary-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [d === a.id && e.jsx(b.div, { layoutId: "activeTab", className: "absolute inset-0 bg-primary-50 dark:bg-primary-900 rounded-xl", transition: { type: "spring", bounce: 0.2, duration: 0.6 } }), e.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [e.jsx(a.icon, { className: "w-5 h-5" }), a.label, a.count !== void 0 && a.count > 0 && e.jsx("span", { className: "px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full", children: a.count })] })] }, a.id)) }), e.jsx("div", { className: "relative overflow-hidden", children: k === "interviewDetail" && S ? e.jsx(ze, { interview: S }) : e.jsx(Ne, { initial: false, custom: D, mode: "wait", children: e.jsx(b.div, { custom: D, variants: oe, initial: "enter", animate: "center", exit: "exit", transition: { type: "spring", stiffness: 300, damping: 30 }, children: d === "analysis" ? e.jsx(Je, { analysis: ce, analyzeStatus: r.analyzeStatus, analyzeError: r.analyzeError, onExport: q, exporting: f === "analysis", onReanalyze: _, reanalyzing: s }) : d === "jd" ? e.jsx(_e, { resumeId: t }) : e.jsx(Ve, { interviews: r.interviews || [], onStartInterview: () => j(t), onViewInterview: K, onExportInterview: G, onDeleteInterview: ne, exporting: f, loadingInterview: u }) }, d) }) })] });
}
export {
  at as default
};
