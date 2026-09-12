import { j as e, D as G, i as _, f as O, I as ee, u as te, a as U, L as S, J as ae, m as f, F as se, A as re, z as le, X as ne, K as ie, o as oe, R as ce, r as de, l as q, k as xe, n as me } from "./ui-vendor-CqaAdWtE.js";
import { r as s } from "./react-vendor-BA2qNj4G.js";
import { k as l } from "./knowledgebase-CIu6U8Sw.js";
import { D as he } from "./DeleteConfirmDialog-DZTO-Ja9.js";
import "./index-CxLe-kJW.js";
import "./syntax-highlighter-CeD-urYA.js";
import "./ConfirmDialog-Cn876c6T.js";
function ue(r) {
  if (r === 0) return "0 B";
  const o = 1024, i = ["B", "KB", "MB", "GB"], c = Math.floor(Math.log(r) / Math.log(o));
  return parseFloat((r / Math.pow(o, c)).toFixed(1)) + " " + i[c];
}
function ge(r) {
  return new Date(r).toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function pe({ status: r }) {
  switch (r) {
    case "COMPLETED":
      return e.jsx(q, { className: "w-4 h-4 text-green-500" });
    case "PROCESSING":
      return e.jsx(S, { className: "w-4 h-4 text-blue-500 animate-spin" });
    case "PENDING":
      return e.jsx(me, { className: "w-4 h-4 text-yellow-500" });
    case "FAILED":
      return e.jsx(xe, { className: "w-4 h-4 text-red-500" });
    default:
      return e.jsx(q, { className: "w-4 h-4 text-green-500" });
  }
}
function ye(r) {
  switch (r) {
    case "COMPLETED":
      return "\u5DF2\u5B8C\u6210";
    case "PROCESSING":
      return "\u5904\u7406\u4E2D";
    case "PENDING":
      return "\u5F85\u5904\u7406";
    case "FAILED":
      return "\u5931\u8D25";
    default:
      return "\u672A\u77E5";
  }
}
function C({ icon: r, label: o, value: i, color: c }) {
  return e.jsx(f.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-700", children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx("div", { className: `p-3 rounded-lg ${c}`, children: e.jsx(r, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: o }), e.jsx("p", { className: "text-2xl font-bold text-slate-800 dark:text-white", children: i.toLocaleString() })] })] }) });
}
function Ce({ onUpload: r, onChat: o }) {
  const [i, c] = s.useState(null), [g, D] = s.useState([]), [v, E] = s.useState(true), [d, N] = s.useState(""), [m, V] = s.useState("time"), [x, I] = s.useState(null), [L, B] = s.useState([]), [p, b] = s.useState(null), [$, P] = s.useState(false), [H, w] = s.useState(null), [R, y] = s.useState(""), [j, A] = s.useState(false), K = s.useRef(null), [z, F] = s.useState(null), k = s.useCallback(async () => {
    try {
      const [t, a, n] = await Promise.all([l.getStatistics(), d ? l.search(d) : x ? l.getByCategory(x) : l.getAllKnowledgeBases(m), l.getAllCategories()]);
      c(t), D(a), B(n);
    } catch (t) {
      console.error("\u52A0\u8F7D\u6570\u636E\u5931\u8D25:", t);
    }
  }, [d, m, x]), h = s.useCallback(async () => {
    try {
      E(true);
      const [t, a, n] = await Promise.all([l.getStatistics(), d ? l.search(d) : x ? l.getByCategory(x) : l.getAllKnowledgeBases(m), l.getAllCategories()]);
      c(t), D(a), B(n);
    } catch (t) {
      console.error("\u52A0\u8F7D\u6570\u636E\u5931\u8D25:", t);
    } finally {
      E(false);
    }
  }, [d, m, x]);
  s.useEffect(() => {
    h();
  }, [h]), s.useEffect(() => {
    if (g.some((a) => a.vectorStatus === "PENDING" || a.vectorStatus === "PROCESSING") && !v) {
      const a = setInterval(() => {
        k();
      }, 5e3);
      return () => clearInterval(a);
    }
  }, [g, v, k]);
  const J = async (t) => {
    try {
      F(t), await l.revectorize(t), await k();
    } catch (a) {
      console.error("\u91CD\u65B0\u5411\u91CF\u5316\u5931\u8D25:", a);
    } finally {
      F(null);
    }
  }, Q = async () => {
    if (p) try {
      P(true), await l.deleteKnowledgeBase(p.id), b(null), await h();
    } catch (t) {
      console.error("\u5220\u9664\u5931\u8D25:", t);
    } finally {
      P(false);
    }
  }, X = async (t) => {
    try {
      const a = await l.downloadKnowledgeBase(t.id), n = window.URL.createObjectURL(a), u = document.createElement("a");
      u.href = n, u.download = t.originalFilename, document.body.appendChild(u), u.click(), document.body.removeChild(u), window.URL.revokeObjectURL(n);
    } catch (a) {
      console.error("\u4E0B\u8F7D\u5931\u8D25:", a);
    }
  }, W = (t) => {
    w(t.id), y(t.category || ""), setTimeout(() => {
      var _a;
      (_a = K.current) == null ? void 0 : _a.focus();
    }, 50);
  }, M = () => {
    w(null), y("");
  }, T = async (t) => {
    try {
      A(true);
      const a = R.trim() || null;
      await l.updateCategory(t, a), w(null), y(""), await h();
    } catch (a) {
      console.error("\u66F4\u65B0\u5206\u7C7B\u5931\u8D25:", a);
    } finally {
      A(false);
    }
  }, Y = (t, a) => {
    t.key === "Enter" ? (t.preventDefault(), T(a)) : t.key === "Escape" && M();
  }, Z = (t) => {
    t.preventDefault(), h();
  };
  return e.jsxs("div", { className: "max-w-7xl mx-auto", children: [e.jsxs("div", { className: "flex items-center justify-between mb-8", children: [e.jsxs("div", { children: [e.jsxs("h1", { className: "text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3", children: [e.jsx(G, { className: "w-7 h-7 text-primary-500" }), "\u77E5\u8BC6\u5E93\u7BA1\u7406"] }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-1", children: "\u7BA1\u7406\u60A8\u7684\u77E5\u8BC6\u5E93\u6587\u4EF6\uFF0C\u67E5\u770B\u4F7F\u7528\u7EDF\u8BA1" })] }), e.jsxs("div", { className: "flex gap-3", children: [e.jsxs("button", { onClick: r, className: "flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors", children: [e.jsx(_, { className: "w-4 h-4" }), "\u4E0A\u4F20\u77E5\u8BC6\u5E93"] }), e.jsxs("button", { onClick: o, className: "flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors", children: [e.jsx(O, { className: "w-4 h-4" }), "\u95EE\u7B54\u52A9\u624B"] })] })] }), i && e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [e.jsx(C, { icon: G, label: "\u77E5\u8BC6\u5E93\u603B\u6570", value: i.totalCount, color: "bg-primary-500" }), e.jsx(C, { icon: O, label: "\u603B\u63D0\u95EE\u6B21\u6570", value: i.totalQuestionCount, color: "bg-indigo-500" }), e.jsx(C, { icon: ee, label: "\u603B\u8BBF\u95EE\u6B21\u6570", value: i.totalAccessCount, color: "bg-emerald-500" })] }), e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 mb-6", children: e.jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [e.jsx("form", { onSubmit: Z, className: "flex-1 min-w-[200px]", children: e.jsxs("div", { className: "relative", children: [e.jsx(te, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }), e.jsx("input", { type: "text", value: d, onChange: (t) => N(t.target.value), placeholder: "\u641C\u7D22\u77E5\u8BC6\u5E93\u540D\u79F0...", className: "w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white" })] }) }), e.jsxs("div", { className: "relative", children: [e.jsxs("select", { value: m, onChange: (t) => {
    V(t.target.value), N(""), I(null);
  }, className: "appearance-none pl-4 pr-10 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white cursor-pointer", children: [e.jsx("option", { value: "time", children: "\u6309\u65F6\u95F4\u6392\u5E8F" }), e.jsx("option", { value: "size", children: "\u6309\u5927\u5C0F\u6392\u5E8F" }), e.jsx("option", { value: "access", children: "\u6309\u8BBF\u95EE\u6392\u5E8F" }), e.jsx("option", { value: "question", children: "\u6309\u63D0\u95EE\u6392\u5E8F" })] }), e.jsx(U, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })] }), e.jsxs("div", { className: "relative", children: [e.jsxs("select", { value: x || "", onChange: (t) => {
    I(t.target.value || null), N("");
  }, className: "appearance-none pl-4 pr-10 py-2 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white cursor-pointer", children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u5206\u7C7B" }), L.map((t) => e.jsx("option", { value: t, children: t }, t))] }), e.jsx(U, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" })] })] }) }), e.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden", children: v ? e.jsx("div", { className: "flex items-center justify-center py-20", children: e.jsx(S, { className: "w-8 h-8 text-primary-500 animate-spin" }) }) : g.length === 0 ? e.jsxs("div", { className: "text-center py-20", children: [e.jsx(ae, { className: "w-16 h-16 text-slate-300 mx-auto mb-4" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u77E5\u8BC6\u5E93" }), e.jsx("button", { onClick: r, className: "mt-4 text-primary-500 hover:text-primary-600", children: "\u4E0A\u4F20\u7B2C\u4E00\u4E2A\u77E5\u8BC6\u5E93" })] }) : e.jsxs("table", { className: "w-full", children: [e.jsx("thead", { className: "bg-slate-50 dark:bg-slate-700 border-b border-slate-100 dark:border-slate-600", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u540D\u79F0" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u5206\u7C7B" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u5927\u5C0F" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u72B6\u6001" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u63D0\u95EE" }), e.jsx("th", { className: "text-left px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u4E0A\u4F20\u65F6\u95F4" }), e.jsx("th", { className: "text-right px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300", children: "\u64CD\u4F5C" })] }) }), e.jsx("tbody", { children: g.map((t, a) => e.jsxs(f.tr, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: a * 0.05 }, className: "border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors", children: [e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(se, { className: "w-5 h-5 text-slate-400" }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-slate-800 dark:text-white", children: t.name }), e.jsx("p", { className: "text-xs text-slate-400 dark:text-slate-500", children: t.originalFilename })] })] }) }), e.jsx("td", { className: "px-6 py-4", children: e.jsx(re, { mode: "wait", children: H === t.id ? e.jsxs(f.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center gap-2", children: [e.jsx("input", { ref: K, type: "text", value: R, onChange: (n) => y(n.target.value), onKeyDown: (n) => Y(n, t.id), placeholder: "\u8F93\u5165\u5206\u7C7B\u540D\u79F0", list: "category-suggestions", className: "w-24 px-2 py-1 text-sm border border-primary-300 dark:border-primary-600 rounded focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white", disabled: j }), e.jsx("datalist", { id: "category-suggestions", children: L.map((n) => e.jsx("option", { value: n }, n)) }), e.jsx("button", { onClick: () => T(t.id), disabled: j, className: "p-1 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors disabled:opacity-50", title: "\u4FDD\u5B58", children: j ? e.jsx(S, { className: "w-4 h-4 animate-spin" }) : e.jsx(le, { className: "w-4 h-4" }) }), e.jsx("button", { onClick: M, disabled: j, className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 rounded transition-colors disabled:opacity-50", title: "\u53D6\u6D88", children: e.jsx(ne, { className: "w-4 h-4" }) })] }, "editing") : e.jsxs(f.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "flex items-center gap-2 group/category", children: [t.category ? e.jsx("span", { className: "px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-sm", children: t.category }) : e.jsx("span", { className: "text-slate-400 dark:text-slate-500 text-sm", children: "\u672A\u5206\u7C7B" }), e.jsx("button", { onClick: () => W(t), className: "p-1 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded opacity-0 group-hover/category:opacity-100 transition-all", title: "\u7F16\u8F91\u5206\u7C7B", children: e.jsx(ie, { className: "w-3.5 h-3.5" }) })] }, "display") }) }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-600 dark:text-slate-300", children: ue(t.fileSize) }), e.jsx("td", { className: "px-6 py-4", children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(pe, { status: t.vectorStatus }), e.jsx("span", { className: "text-sm text-slate-600 dark:text-slate-300", children: ye(t.vectorStatus) })] }) }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-600 dark:text-slate-300", children: t.questionCount }), e.jsx("td", { className: "px-6 py-4 text-sm text-slate-500 dark:text-slate-400", children: ge(t.uploadedAt) }), e.jsx("td", { className: "px-6 py-4 text-right", children: e.jsxs("div", { className: "flex items-center justify-end gap-1", children: [e.jsx("button", { onClick: () => X(t), className: "p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors", title: "\u4E0B\u8F7D", children: e.jsx(oe, { className: "w-4 h-4" }) }), t.vectorStatus === "FAILED" && e.jsx("button", { onClick: () => J(t.id), disabled: z === t.id, className: "p-2 text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50", title: "\u91CD\u65B0\u5411\u91CF\u5316", children: e.jsx(ce, { className: `w-4 h-4 ${z === t.id ? "animate-spin" : ""}` }) }), e.jsx("button", { onClick: () => b(t), className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors", title: "\u5220\u9664", children: e.jsx(de, { className: "w-4 h-4" }) })] }) })] }, t.id)) })] }) }), e.jsx(he, { open: p !== null, item: p, itemType: "\u77E5\u8BC6\u5E93", loading: $, onConfirm: Q, onCancel: () => b(null) })] });
}
export {
  Ce as default
};
