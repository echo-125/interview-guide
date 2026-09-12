import { j as e, m as x, U, u as ce, l as he, T as xe, v as Re, w as F, L as B, A as Pe, F as K, M as fe, x as Oe, y as W, o as _e, R as ve, r as Ue, h as Fe, k as ue, n as Be } from "./ui-vendor-CqaAdWtE.js";
import { a as Me, s as Ge, g as D, h as pe } from "./index-CxLe-kJW.js";
import { d as $e, r } from "./react-vendor-BA2qNj4G.js";
import { i as Ve } from "./interview-CJd-rDtP.js";
import { v as M } from "./voiceInterview-ClZBxuw_.js";
import { f as Ke, b as We } from "./date-DBJmXC5z.js";
import { g as ze } from "./score-3bjDqiWg.js";
import { s as Qe, g as Xe } from "./voiceEvaluationStatus-B6NgctRI.js";
import { g as G } from "./voiceInterview-B6Enqy4T.js";
import { D as Ye } from "./DeleteConfirmDialog-DZTO-Ja9.js";
import { R as qe, L as He, C as Je, X as Ze, Y as et, T as tt, e as at } from "./charts-vendor-BnQgIK0k.js";
import "./syntax-highlighter-CeD-urYA.js";
import "./ConfirmDialog-Cn876c6T.js";
function ge(a) {
  return a === "COMPLETED" || a === "EVALUATED";
}
function h(a) {
  return a.evaluateStatus === "COMPLETED" || a.status === "EVALUATED";
}
function st(a) {
  return (a == null ? void 0 : a.trim()) || "\u5168\u90E8\u65B9\u5411";
}
function lt(a, u, c) {
  const i = c ? u : a, d = i.filter(h), y = d.reduce((f, j) => f + (j.overallScore ?? 0), 0);
  return { totalCount: i.length, completedCount: d.length, averageScore: d.length > 0 ? Math.round(y / d.length) : 0 };
}
const rt = [{ value: "all", label: "\u5168\u90E8\u65F6\u95F4" }, { value: "7d", label: "\u6700\u8FD1 7 \u5929" }, { value: "30d", label: "\u6700\u8FD1 30 \u5929" }, { value: "90d", label: "\u6700\u8FD1 90 \u5929" }], nt = [{ value: "all", label: "\u5168\u90E8\u72B6\u6001" }, { value: "inProgress", label: "\u8FDB\u884C\u4E2D" }, { value: "completed", label: "\u5DF2\u5B8C\u6210" }], ot = "\u5168\u90E8\u65B9\u5411", $ = "__all_directions__";
function me(a) {
  return a === "IN_PROGRESS" || a === "PAUSED";
}
function R(a) {
  return a.evaluateStatus === "PENDING" || a.evaluateStatus === "PROCESSING";
}
function Q(a) {
  return a.evaluateStatus === "FAILED";
}
function be(a) {
  return Xe({ status: a.evaluateStatus, statusUpdatedAt: a.evaluateStatusUpdatedAt });
}
function z(a) {
  return a.type === "voice" && be(a).retryable;
}
function it({ item: a }) {
  return Q(a) ? e.jsx(ue, { className: "w-4 h-4 text-red-500 dark:text-red-400" }) : z(a) ? e.jsx(ue, { className: "w-4 h-4 text-amber-500 dark:text-amber-400" }) : R(a) ? e.jsx(ve, { className: "w-4 h-4 text-blue-500 dark:text-blue-400 animate-spin" }) : h(a) ? e.jsx(he, { className: "w-4 h-4 text-green-500 dark:text-green-400" }) : a.status === "IN_PROGRESS" ? e.jsx(W, { className: "w-4 h-4 text-blue-500 dark:text-blue-400" }) : e.jsx(Be, { className: "w-4 h-4 text-yellow-500 dark:text-yellow-400" });
}
function dt(a) {
  return Q(a) ? "\u8BC4\u4F30\u5931\u8D25" : a.type === "voice" && a.evaluateStatus ? be(a).label : R(a) ? a.evaluateStatus === "PROCESSING" ? "\u8BC4\u4F30\u4E2D" : "\u7B49\u5F85\u8BC4\u4F30" : h(a) ? "\u5DF2\u5B8C\u6210" : a.status === "IN_PROGRESS" ? "\u8FDB\u884C\u4E2D" : a.status === "PAUSED" ? "\u5DF2\u6682\u505C" : ge(a.status) ? "\u5DF2\u63D0\u4EA4" : "\u5DF2\u521B\u5EFA";
}
function ct(a) {
  if (!a) return "-";
  const u = Math.floor(a / 60), c = a % 60;
  return `${u}\u5206${c}\u79D2`;
}
function V({ icon: a, label: u, value: c, suffix: i, color: d }) {
  return e.jsx(x.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700", children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: `p-3 rounded-lg ${d}`, children: e.jsx(a, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: u }), e.jsxs("p", { className: "text-2xl font-bold text-slate-800 dark:text-white", children: [c, i && e.jsx("span", { className: "text-base font-normal text-slate-400 dark:text-slate-500 ml-1", children: i })] })] })] }) });
}
function xt({ item: a }) {
  return a.sourceType === "KNOWLEDGE_BASE" ? e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-medium", children: [e.jsx(K, { className: "w-3 h-3" }), "\u77E5\u8BC6\u5E93"] }) : a.type === "voice" ? e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium", children: [e.jsx(fe, { className: "w-3 h-3" }), "\u8BED\u97F3"] }) : e.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium", children: [e.jsx(K, { className: "w-3 h-3" }), "\u6587\u5B57"] });
}
function ut(a, u) {
  if (a.length !== u.length) return false;
  for (let c = 0; c < a.length; c++) {
    const i = a[c], d = u[c];
    if (i.id !== d.id || i.status !== d.status || i.evaluateStatus !== d.evaluateStatus || i.evaluateStatusUpdatedAt !== d.evaluateStatusUpdatedAt || i.overallScore !== d.overallScore) return false;
  }
  return true;
}
function It({ onBack: a, onViewInterview: u, onRestartInterview: c, onContinueInterview: i, knowledgeBaseId: d }) {
  const y = $e(), { showToast: f } = Me(), j = d ?? null, o = j !== null && !Number.isNaN(j), [p, ye] = r.useState([]), [E, X] = r.useState(true), [A, je] = r.useState(""), [T, ke] = r.useState("all"), [b, Y] = r.useState("all"), [k, q] = r.useState("all"), [N, H] = r.useState("all"), [J, Z] = r.useState(null), [m, P] = r.useState(null), [ee, te] = r.useState(null), [ae, se] = r.useState(null), v = r.useRef(null), le = r.useRef([]), re = r.useRef(false), ne = b !== "all" || k !== "all" || N !== "all", oe = () => {
    Y("all"), q("all"), H("all");
  }, w = r.useCallback(async (t = false) => {
    t || X(true);
    try {
      re.current || (le.current = await Ge.listSkills().catch(() => []), re.current = true);
      const l = le.current, s = await Ne(l).catch((n) => (console.error("\u52A0\u8F7D\u9762\u8BD5\u8BB0\u5F55\u5931\u8D25", n), t || f(D(n, "\u9762\u8BD5\u8BB0\u5F55\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"), "error"), [])), S = o ? s.filter((n) => n.knowledgeBaseId === j) : s.filter((n) => n.sourceType !== "KNOWLEDGE_BASE"), Le = (o ? [] : await we().catch((n) => (console.error("\u52A0\u8F7D\u8BED\u97F3\u9762\u8BD5\u8BB0\u5F55\u5931\u8D25", n), t || f(D(n, "\u8BED\u97F3\u9762\u8BD5\u8BB0\u5F55\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"), "error"), []))).map((n) => {
        const C = G(n.title, l);
        return C !== n.title ? { ...n, title: C } : n;
      }), L = [...S, ...Le];
      L.sort((n, C) => new Date(C.createdAt).getTime() - new Date(n.createdAt).getTime()), ye((n) => {
        const C = L.some((De) => Qe(De.evaluateStatus));
        return t && ut(n, L) && !C ? n : L;
      });
    } catch (l) {
      console.error("\u52A0\u8F7D\u9762\u8BD5\u8BB0\u5F55\u5931\u8D25", l), t || f(D(l, "\u52A0\u8F7D\u9762\u8BD5\u8BB0\u5F55\u5931\u8D25"), "error");
    } finally {
      t || X(false);
    }
  }, [o, j]);
  async function Ne(t) {
    return (await Ve.listSessions()).map((s) => ({ id: s.sessionId, type: "text", sourceType: s.sourceType, title: s.sourceType === "KNOWLEDGE_BASE" ? `${G(s.skillId, t)} \xB7 \u77E5\u8BC6\u5E93\u9762\u8BD5` : G(s.skillId, t), sessionId: s.sessionId, status: s.status, evaluateStatus: s.evaluateStatus ?? void 0, evaluateError: s.evaluateError ?? void 0, overallScore: s.overallScore, totalQuestions: s.totalQuestions, createdAt: s.createdAt, resumeId: s.resumeId ?? void 0, knowledgeBaseId: s.knowledgeBaseId ?? void 0, interviewCategory: s.interviewCategory ?? null }));
  }
  async function we() {
    return (await M.getAllSessions()).map((l) => ({ id: `voice-${l.sessionId}`, type: "voice", title: l.roleType, sessionId: String(l.sessionId), status: l.status, evaluateStatus: l.evaluateStatus, evaluateError: l.evaluateError, evaluateStatusUpdatedAt: l.updatedAt, overallScore: null, actualDuration: l.actualDuration, createdAt: l.createdAt, voiceSessionId: l.sessionId }));
  }
  r.useEffect(() => {
    w();
  }, [w]), r.useEffect(() => {
    const t = p.some((l) => R(l));
    return t && !v.current ? v.current = window.setInterval(() => w(true), 3e3) : !t && v.current && (clearInterval(v.current), v.current = null), () => {
      v.current && (clearInterval(v.current), v.current = null);
    };
  }, [p, w]);
  const Se = (t) => {
    t.type === "text" ? u(t.sessionId, t.resumeId) : t.voiceSessionId && (me(t.status) ? y("/voice-interview", { state: { voiceSessionId: t.voiceSessionId } }) : y(`/voice-interview/${t.voiceSessionId}/evaluation`));
  }, Ie = (t, l) => {
    l.stopPropagation(), P(t);
  }, Ce = async () => {
    if (m) {
      Z(m.sessionId);
      try {
        m.type === "voice" && m.voiceSessionId ? await M.deleteSession(m.voiceSessionId) : await pe.deleteInterview(m.sessionId), await w(), P(null);
      } catch (t) {
        f(D(t, "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"), "error");
      } finally {
        Z(null);
      }
    }
  }, Ee = async (t, l) => {
    l.stopPropagation(), te(t);
    try {
      const s = await pe.exportInterviewPdf(t), S = window.URL.createObjectURL(s), I = document.createElement("a");
      I.href = S, I.download = `\u9762\u8BD5\u62A5\u544A_${t.slice(-8)}.pdf`, document.body.appendChild(I), I.click(), document.body.removeChild(I), window.URL.revokeObjectURL(S);
    } catch {
      f("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      te(null);
    }
  }, Ae = async (t, l) => {
    if (l.stopPropagation(), !!t.voiceSessionId) {
      se(t.voiceSessionId);
      try {
        await M.generateEvaluation(t.voiceSessionId), await w(true);
      } catch {
        f("\u91CD\u65B0\u751F\u6210\u8BC4\u4F30\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "error");
      } finally {
        se(null);
      }
    }
  }, g = r.useMemo(() => p.filter((t) => {
    if (T !== "all" && t.type !== T || A && !t.title.toLowerCase().includes(A.toLowerCase())) return false;
    if (o) {
      if (b === $ && t.interviewCategory || b !== "all" && b !== $ && t.interviewCategory !== b) return false;
      if (k !== "all") {
        const l = k === "7d" ? 7 : k === "30d" ? 30 : 90, s = Date.now() - l * 24 * 60 * 60 * 1e3;
        if (new Date(t.createdAt).getTime() < s) return false;
      }
      if (N !== "all") {
        const l = h(t);
        if (N === "completed" && !l || N === "inProgress" && l) return false;
      }
    }
    return true;
  }), [p, T, A, o, b, k, N]), ie = r.useMemo(() => {
    const t = /* @__PURE__ */ new Set();
    let l = false;
    return p.forEach((s) => {
      s.interviewCategory ? t.add(s.interviewCategory) : l = true;
    }), { values: Array.from(t).sort((s, S) => s.localeCompare(S, "zh-CN")), hasUncategorized: l };
  }, [p]), O = r.useMemo(() => lt(p, g, o), [p, g, o]), _ = r.useMemo(() => g.filter((t) => h(t) && t.overallScore !== null).map((t) => ({ name: Ke(t.createdAt), score: t.overallScore || 0 })).reverse(), [g]), de = o && ne && p.length > 0 && g.length === 0, Te = g.length === 0 && !de;
  return e.jsxs(x.div, { className: "w-full", initial: { opacity: 0 }, animate: { opacity: 1 }, children: [e.jsxs("div", { className: "flex justify-between items-start mb-8 flex-wrap gap-6", children: [e.jsxs("div", { children: [e.jsxs(x.h1, { className: "text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, children: [e.jsx(U, { className: "w-7 h-7 text-primary-500" }), o ? "\u77E5\u8BC6\u5E93\u9762\u8BD5\u8BB0\u5F55" : "\u9762\u8BD5\u8BB0\u5F55"] }), e.jsx(x.p, { className: "text-slate-500 dark:text-slate-400 mt-1", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.1 }, children: o ? "\u67E5\u770B\u5F53\u524D\u77E5\u8BC6\u5E93\u7684\u9762\u8BD5\u8BB0\u5F55\u548C\u8868\u73B0\u8D8B\u52BF" : "\u67E5\u770B\u548C\u7BA1\u7406\u6240\u6709\u6A21\u62DF\u9762\u8BD5\u8BB0\u5F55" })] }), e.jsxs(x.div, { className: "flex items-center gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl px-4 py-2.5 min-w-[280px] focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100 dark:focus-within:ring-primary-900/30 transition-all", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, children: [e.jsx(ce, { className: "w-5 h-5 text-slate-400" }), e.jsx("input", { type: "text", placeholder: "\u641C\u7D22\u540D\u79F0...", value: A, onChange: (t) => je(t.target.value), className: "flex-1 outline-none text-slate-700 dark:text-slate-200 placeholder:text-slate-400 bg-transparent" })] })] }), !E && e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [e.jsx(V, { icon: U, label: "\u9762\u8BD5\u603B\u6570", value: O.totalCount, color: "bg-primary-500" }), e.jsx(V, { icon: he, label: "\u5DF2\u5B8C\u6210", value: O.completedCount, color: "bg-emerald-500" }), e.jsx(V, { icon: xe, label: "\u5E73\u5747\u5206\u6570", value: O.averageScore, suffix: "\u5206", color: "bg-indigo-500" })] }), o && _.length > 0 && e.jsxs(x.div, { className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 mb-8", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [e.jsxs("div", { className: "flex items-center justify-between mb-6", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(xe, { className: "w-5 h-5 text-primary-500" }), e.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u9762\u8BD5\u8868\u73B0\u8D8B\u52BF" })] }), e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u5171 ", _.length, " \u573A\u7EC3\u4E60"] })] }), e.jsx("div", { className: "h-48", children: e.jsx(qe, { width: "100%", height: "100%", children: e.jsxs(He, { data: _, margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [e.jsx(Je, { strokeDasharray: "3 3", stroke: "#e2e8f0", className: "dark:stroke-slate-700" }), e.jsx(Ze, { dataKey: "name", axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), e.jsx(et, { domain: [0, 100], axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), e.jsx(tt, { formatter: (t) => [`${t} \u5206`, "\u5F97\u5206"] }), e.jsx(at, { type: "monotone", dataKey: "score", stroke: "#6366f1", strokeWidth: 3, dot: { fill: "#6366f1", strokeWidth: 2, r: 5 }, activeDot: { r: 8, fill: "#6366f1" } })] }) }) })] }), o && e.jsxs(x.div, { className: "flex items-center gap-3 flex-wrap bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl px-4 py-3 mb-6 shadow-sm", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, children: [e.jsx(Re, { className: "w-4 h-4 text-slate-400 shrink-0" }), e.jsxs("select", { value: b, onChange: (t) => Y(t.target.value), "aria-label": "\u6309\u9762\u8BD5\u65B9\u5411\u7B5B\u9009", className: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary-500 transition-colors cursor-pointer", children: [e.jsx("option", { value: "all", children: "\u5168\u90E8\u8BB0\u5F55" }), ie.values.map((t) => e.jsx("option", { value: t, children: t }, t)), ie.hasUncategorized && e.jsx("option", { value: $, children: ot })] }), e.jsx("select", { value: k, onChange: (t) => q(t.target.value), "aria-label": "\u6309\u65F6\u95F4\u8303\u56F4\u7B5B\u9009", className: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary-500 transition-colors cursor-pointer", children: rt.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) }), e.jsx("select", { value: N, onChange: (t) => H(t.target.value), "aria-label": "\u6309\u5B8C\u6210\u72B6\u6001\u7B5B\u9009", className: "bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-primary-500 transition-colors cursor-pointer", children: nt.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) }), ne && e.jsxs("button", { onClick: oe, className: "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors", children: [e.jsx(F, { className: "w-3.5 h-3.5" }), "\u91CD\u7F6E\u7B5B\u9009"] })] }), !o && e.jsx("div", { className: "flex items-center gap-2 mb-6", children: [{ key: "all", label: "\u5168\u90E8" }, { key: "text", label: "\u6587\u5B57\u9762\u8BD5" }, { key: "voice", label: "\u8BED\u97F3\u9762\u8BD5" }].map((t) => e.jsx("button", { onClick: () => ke(t.key), className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${T === t.key ? "bg-primary-500 text-white" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"}`, children: t.label }, t.key)) }), E && e.jsx("div", { className: "flex items-center justify-center py-20", children: e.jsx(B, { className: "w-8 h-8 text-primary-500 animate-spin" }) }), !E && de && e.jsxs(x.div, { className: "text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, children: [e.jsx(ce, { className: "w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6CA1\u6709\u7B26\u5408\u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u7684\u9762\u8BD5\u8BB0\u5F55" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6", children: "\u53EF\u4EE5\u5C1D\u8BD5\u8C03\u6574\u9762\u8BD5\u65B9\u5411\u3001\u65F6\u95F4\u8303\u56F4\u6216\u5B8C\u6210\u72B6\u6001" }), e.jsxs("button", { onClick: oe, className: "inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium rounded-lg transition-colors", children: [e.jsx(F, { className: "w-4 h-4" }), "\u91CD\u7F6E\u7B5B\u9009"] })] }), !E && Te && e.jsxs(x.div, { className: "text-center py-20 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700", initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, children: [e.jsx(U, { className: "w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" }), e.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: o ? "\u5F00\u59CB\u4E00\u6B21\u77E5\u8BC6\u5E93\u9762\u8BD5\u540E\uFF0C\u8BB0\u5F55\u5C06\u663E\u793A\u5728\u8FD9\u91CC" : "\u5F00\u59CB\u4E00\u6B21\u6A21\u62DF\u9762\u8BD5\u540E\uFF0C\u8BB0\u5F55\u5C06\u663E\u793A\u5728\u8FD9\u91CC" })] }), !E && g.length > 0 && e.jsx(x.div, { className: "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: e.jsxs("table", { className: "w-full", children: [e.jsx("thead", { className: "bg-slate-50 dark:bg-slate-700/50 border-b border-slate-100 dark:border-slate-600", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u7C7B\u578B" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u540D\u79F0" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u72B6\u6001" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u5F97\u5206" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u8BE6\u60C5" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u65F6\u95F4" }), e.jsx("th", { className: "text-right px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u64CD\u4F5C" })] }) }), e.jsx("tbody", { children: e.jsx(Pe, { children: g.map((t, l) => e.jsxs(x.tr, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: l * 0.05 }, onClick: () => Se(t), className: "border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors group", children: [e.jsx("td", { className: "px-6 py-4", children: e.jsx(xt, { item: t }) }), e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [t.type === "text" ? e.jsx(K, { className: "w-5 h-5 text-slate-400" }) : e.jsx(fe, { className: "w-5 h-5 text-purple-400" }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [e.jsx("p", { className: "font-medium text-slate-800 dark:text-white", children: t.title }), o && t.type === "text" && e.jsxs("span", { className: "inline-flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded text-xs font-medium", title: "\u9762\u8BD5\u65B9\u5411", children: [e.jsx(Oe, { className: "w-3 h-3" }), st(t.interviewCategory)] })] }), e.jsxs("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: ["#", t.id.slice(-8)] })] })] }) }), e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(it, { item: t }), e.jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300", children: dt(t) })] }) }), e.jsx("td", { className: "px-6 py-4", children: h(t) && t.overallScore !== null ? e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-16 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden", children: e.jsx(x.div, { className: `h-full ${ze(t.overallScore)} rounded-full`, initial: { width: 0 }, animate: { width: `${t.overallScore}%` }, transition: { duration: 0.8, delay: l * 0.05 } }) }), e.jsx("span", { className: "font-bold text-slate-800 dark:text-white", children: t.overallScore })] }) : z(t) ? e.jsx("span", { className: "text-amber-600 dark:text-amber-400 text-sm", children: "\u53EF\u91CD\u65B0\u751F\u6210" }) : R(t) ? e.jsx("span", { className: "text-blue-500 dark:text-blue-400 text-sm", children: "\u751F\u6210\u4E2D..." }) : Q(t) ? e.jsx("span", { className: "text-red-500 dark:text-red-400 text-sm", children: "\u5931\u8D25" }) : e.jsx("span", { className: "text-slate-400 dark:text-slate-500", children: "-" }) }), e.jsx("td", { className: "px-6 py-4", children: t.type === "text" && t.totalQuestions != null ? e.jsxs("span", { className: "inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm", children: [t.totalQuestions, " \u9898"] }) : t.type === "voice" ? e.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ct(t.actualDuration) }) : e.jsx("span", { className: "text-slate-400", children: "-" }) }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-500 dark:text-slate-400", children: We(t.createdAt) }), e.jsx("td", { className: "px-6 py-4 text-right", children: e.jsxs("div", { className: "flex items-center justify-end gap-1", children: [t.type === "text" && !ge(t.status) && !h(t) && i && e.jsx("button", { onClick: (s) => {
    s.stopPropagation(), t.sourceType === "KNOWLEDGE_BASE" ? y(`/knowledgebase-interview/${t.sessionId}`, { state: { knowledgeBaseId: t.knowledgeBaseId } }) : i(t.sessionId);
  }, className: "p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", title: "\u7EE7\u7EED\u9762\u8BD5", children: e.jsx(W, { className: "w-4 h-4" }) }), t.type === "voice" && me(t.status) && t.voiceSessionId && e.jsx("button", { onClick: (s) => {
    s.stopPropagation(), y("/voice-interview", { state: { voiceSessionId: t.voiceSessionId } });
  }, className: "p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors", title: "\u7EE7\u7EED\u9762\u8BD5", children: e.jsx(W, { className: "w-4 h-4" }) }), h(t) && t.type === "text" && e.jsx("button", { onClick: (s) => Ee(t.sessionId, s), disabled: ee === t.sessionId, className: "p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u5BFC\u51FAPDF", children: ee === t.sessionId ? e.jsx(B, { className: "w-4 h-4 animate-spin" }) : e.jsx(_e, { className: "w-4 h-4" }) }), h(t) && t.type === "text" && t.resumeId && c && e.jsx("button", { onClick: (s) => {
    s.stopPropagation(), c(t.resumeId);
  }, className: "p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition-colors", title: "\u91CD\u65B0\u9762\u8BD5", children: e.jsx(F, { className: "w-4 h-4" }) }), z(t) && t.voiceSessionId && e.jsx("button", { onClick: (s) => Ae(t, s), disabled: ae === t.voiceSessionId, className: "p-2 text-amber-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u91CD\u65B0\u751F\u6210\u8BC4\u4F30", children: ae === t.voiceSessionId ? e.jsx(B, { className: "w-4 h-4 animate-spin" }) : e.jsx(ve, { className: "w-4 h-4" }) }), e.jsx("button", { onClick: (s) => Ie(t, s), disabled: J === t.sessionId, className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u5220\u9664", children: e.jsx(Ue, { className: "w-4 h-4" }) }), e.jsx(Fe, { className: "w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" })] }) })] }, t.id)) }) })] }) }), e.jsx(Ye, { open: m !== null, item: m ? { id: 0, sessionId: m.sessionId } : null, itemType: "\u9762\u8BD5\u8BB0\u5F55", loading: J !== null, onConfirm: Ce, onCancel: () => P(null) })] });
}
export {
  It as default
};
