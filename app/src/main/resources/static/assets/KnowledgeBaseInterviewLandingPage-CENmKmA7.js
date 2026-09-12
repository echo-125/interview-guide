import { j as e, A as z, m as F, N as K, X as V, L as A, k as H, D as R, O as W, S as X, Q as J, B as Z, R as ee, P as te, u as se, V as ae } from "./ui-vendor-CqaAdWtE.js";
import { u as le, g as Q, L as re } from "./index-CxLe-kJW.js";
import { r as a, d as ie } from "./react-vendor-BA2qNj4G.js";
import { k as I } from "./knowledgebase-CIu6U8Sw.js";
import { D as _, g as $, I as E, a as ne, M as oe, F as de, b as ce, i as B, G as me, c as xe } from "./questionGenerationStatus-lPSHjvix.js";
import "./syntax-highlighter-CeD-urYA.js";
function ue({ open: l, knowledgeBase: r, defaultDifficulty: c = _, starting: g, error: v, onClose: o, onStart: N }) {
  const [n, y] = a.useState(""), [d, m] = a.useState(c), [u, p] = a.useState(5), [f, h] = a.useState(1), [x, j] = a.useState(""), [L, k] = a.useState(null), [C, w] = a.useState(false), [S, T] = a.useState(""), U = le();
  a.useEffect(() => {
    if (!l || !r) {
      k(null), T("");
      return;
    }
    y(""), m(c), p(5), h(1), j("");
  }, [l, r, c]), a.useEffect(() => {
    if (!l || !r) return;
    let t = false;
    return w(true), k(null), T(""), I.getInterviewCapacity(r.id, { category: n || void 0, difficulty: d, mainQuestionCount: u }).then((i) => {
      t || k(i);
    }).catch((i) => {
      t || T(Q(i, "\u52A0\u8F7D\u9762\u8BD5\u5BB9\u91CF\u5931\u8D25"));
    }).finally(() => {
      t || w(false);
    }), () => {
      t = true;
    };
  }, [l, r, n, d, u]);
  const P = (L == null ? void 0 : L.followUpOptions) ?? [], q = $(P, f), D = (q == null ? void 0 : q.availableQuestionCount) ?? 0, O = (q == null ? void 0 : q.selectable) === true && !C, G = (L == null ? void 0 : L.categories) ?? [], s = n && !G.some((t) => t.category === n);
  return e.jsx(z, { children: l && e.jsxs(e.Fragment, { children: [e.jsx(F.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: o, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(F.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full", children: [e.jsxs("div", { className: "flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-700", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(K, { className: "w-5 h-5 text-primary-500" }), e.jsxs("div", { children: [e.jsx("h3", { className: "text-lg font-bold text-slate-900 dark:text-white", children: "\u5F00\u59CB\u77E5\u8BC6\u5E93\u9762\u8BD5" }), e.jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5", children: ["\u4EC5\u4ECE ", e.jsx("span", { className: "font-medium", children: r == null ? void 0 : r.name }), " \u7684\u5DF2\u542F\u7528\u9898\u76EE\u62BD\u9898"] })] })] }), e.jsx("button", { type: "button", onClick: o, disabled: g, className: "p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-50", children: e.jsx(V, { className: "w-5 h-5" }) })] }), e.jsxs("div", { className: "px-6 py-5 space-y-4", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u9762\u8BD5\u65B9\u5411" }), e.jsxs("select", { value: n, onChange: (t) => y(t.target.value), className: E, disabled: C, children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u65B9\u5411" }), s && e.jsxs("option", { value: n, children: [n, "\uFF08\u5F53\u524D\u96BE\u5EA6 0 \u9898\uFF09"] }), G.map((t) => e.jsxs("option", { value: t.category, children: [t.category, "\uFF08", t.availableQuestionCount, " \u9898\uFF09"] }, t.category))] })] }), e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u96BE\u5EA6" }), e.jsx("select", { value: d, onChange: (t) => m(t.target.value), className: E, children: ne.map((t) => e.jsx("option", { value: t.value, children: t.label }, t.value)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u4E3B\u95EE\u9898\u6570" }), e.jsx("select", { value: u, onChange: (t) => p(parseInt(t.target.value, 10)), className: E, children: oe.map((t) => e.jsxs("option", { value: t, children: [t, " \u9053"] }, t)) })] }), e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: "\u6BCF\u9898\u8FFD\u95EE" }), e.jsx("select", { value: f, onChange: (t) => h(parseInt(t.target.value, 10)), className: E, children: de.map((t) => {
    const i = $(P, t), b = i ? `${t} \u4E2A\uFF08${i.availableQuestionCount} \u9053\u9898\u53EF\u7528\uFF09` : `${t} \u4E2A`;
    return e.jsx("option", { value: t, disabled: !(i == null ? void 0 : i.selectable), children: b }, t);
  }) })] })] }), e.jsxs("label", { className: "block", children: [e.jsxs("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: ["\u9762\u8BD5\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B\uFF0C\u9ED8\u8BA4\u8DDF\u968F\u7CFB\u7EDF\u8BBE\u7F6E)" })] }), e.jsx(re, { providers: U, value: x, onChange: j })] }), e.jsxs("div", { className: "rounded-lg bg-slate-50 dark:bg-slate-900 px-4 py-3 text-sm text-slate-600 dark:text-slate-300", children: [C ? e.jsxs("span", { className: "inline-flex items-center gap-2", children: [e.jsx(A, { className: "w-4 h-4 animate-spin" }), " \u6B63\u5728\u7EDF\u8BA1\u53EF\u7528\u9898\u76EE\u2026"] }) : e.jsxs(e.Fragment, { children: ["\u5F53\u524D\u6761\u4EF6\u53EF\u7528", " ", e.jsx("span", { className: `font-bold ${O ? "text-primary-600 dark:text-primary-400" : "text-red-500"}`, children: D }), " ", "\u9053\u4E3B\u95EE\u9898", !O && e.jsx("span", { className: "block mt-1 text-xs text-red-500", children: ce(P, f, u) })] }), S && e.jsx("p", { className: "mt-1 text-xs text-red-500", children: S })] }), v && e.jsxs("div", { className: "flex items-start gap-2 text-sm text-red-500", children: [e.jsx(H, { className: "w-4 h-4 mt-0.5 shrink-0" }), e.jsx("span", { children: v })] })] }), e.jsxs("div", { className: "flex gap-3 justify-end px-6 py-4 border-t border-slate-100 dark:border-slate-700", children: [e.jsx("button", { type: "button", onClick: o, disabled: g, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50", children: "\u53D6\u6D88" }), e.jsxs(F.button, { type: "button", onClick: () => N({ category: n, difficulty: d, mainQuestionCount: u, followUpCount: f, llmProvider: x || void 0 }), disabled: !O || g || C, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "px-5 py-2.5 inline-flex items-center gap-2 text-white rounded-xl font-semibold shadow-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", children: [g ? e.jsx(A, { className: "w-4 h-4 animate-spin" }) : e.jsx(K, { className: "w-4 h-4" }), g ? "\u521B\u5EFA\u4E2D\u2026" : "\u5F00\u59CB\u9762\u8BD5"] })] })] }) })] }) });
}
const Y = { total: 0, draft: 0, active: 0, archived: 0 };
function pe(l) {
  return l.reduce((r, c) => (r.total += 1, c.status === "DRAFT" ? r.draft += 1 : c.status === "ACTIVE" ? r.active += 1 : c.status === "ARCHIVED" && (r.archived += 1), r), { ...Y });
}
function he({ kb: l, onStart: r, onGenerate: c, onManage: g }) {
  const v = a.useRef(null), [o, N] = a.useState(null), [n, y] = a.useState(false);
  a.useEffect(() => {
    const u = v.current;
    if (!u) return;
    let p = false;
    const f = () => {
      y(true), I.listQuestions(l.id).then((x) => {
        p || N(pe(x));
      }).catch(() => {
        p || N({ ...Y });
      }).finally(() => {
        p || y(false);
      });
    };
    if (typeof IntersectionObserver > "u") return f(), () => {
      p = true;
    };
    const h = new IntersectionObserver((x) => {
      x.some((j) => j.isIntersecting) && (h.disconnect(), f());
    }, { rootMargin: "200px" });
    return h.observe(u), () => {
      p = true, h.disconnect();
    };
  }, [l.id]);
  const d = n || !o ? { total: "\u2013", draft: "\u2013", active: "\u2013", archived: "\u2013" } : o, m = B(l.questionGenStatus);
  return e.jsxs("div", { ref: v, className: "flex flex-col bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow", children: [e.jsxs("div", { className: "flex items-start gap-3 mb-4", children: [e.jsx("div", { className: "w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-500 flex items-center justify-center shrink-0", children: e.jsx(R, { className: "w-5 h-5" }) }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("h3", { className: "font-semibold text-slate-900 dark:text-white truncate", children: l.name }), e.jsx("p", { className: "text-xs text-slate-400 truncate mt-0.5", children: l.originalFilename })] }), e.jsx("div", { className: `shrink-0 px-2 py-0.5 rounded text-xs font-medium ${m ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400" : o && o.active > 0 ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" : "bg-slate-100 dark:bg-slate-700 text-slate-400"}`, children: m ? l.questionGenStatus === "QUEUED" ? "\u7B49\u5F85\u751F\u6210" : "\u751F\u6210\u4E2D" : n ? "\u52A0\u8F7D\u4E2D" : o && o.active > 0 ? "\u53EF\u9762\u8BD5" : "\u672A\u542F\u7528" })] }), n ? e.jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-400 mb-4", children: [e.jsx(A, { className: "w-3 h-3 animate-spin" }), " \u7EDF\u8BA1\u9898\u76EE\u4E2D\u2026"] }) : e.jsxs("div", { className: "grid grid-cols-4 gap-2 mb-5 text-center", children: [e.jsx(M, { label: "\u603B\u6570", value: d.total }), e.jsx(M, { label: "\u8349\u7A3F", value: d.draft }), e.jsx(M, { label: "\u5DF2\u542F\u7528", value: d.active, highlight: !!o && o.active > 0 }), e.jsx(M, { label: "\u5DF2\u5F52\u6863", value: d.archived })] }), e.jsxs("div", { className: "mt-auto flex flex-col gap-2", children: [e.jsxs("button", { onClick: () => r(l), disabled: !o || o.active === 0, className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-semibold hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap", children: [e.jsx(W, { className: "w-4 h-4" }), "\u5F00\u59CB\u9762\u8BD5"] }), e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [e.jsxs("button", { onClick: () => c(l), disabled: m, className: "inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap", children: [m ? e.jsx(A, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(X, { className: "w-3.5 h-3.5" }), m ? "\u751F\u6210\u4E2D" : "\u751F\u6210\u9898\u76EE"] }), e.jsxs("button", { onClick: () => g(l), className: "inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 whitespace-nowrap", children: [e.jsx(J, { className: "w-3.5 h-3.5" }), "\u7BA1\u7406\u9898\u5E93"] })] })] })] });
}
function M({ label: l, value: r, highlight: c = false }) {
  return e.jsxs("div", { className: "rounded-lg bg-slate-50 dark:bg-slate-900 py-2", children: [e.jsx("p", { className: `text-lg font-bold ${c ? "text-primary-600 dark:text-primary-400" : "text-slate-900 dark:text-white"}`, children: r }), e.jsx("p", { className: "text-xs text-slate-400", children: l })] });
}
const ge = [{ value: "time", label: "\u6309\u65F6\u95F4" }, { value: "name", label: "\u6309\u540D\u79F0" }, { value: "question", label: "\u6309\u9898\u76EE\u6570" }];
function Ne() {
  const l = ie(), [r, c] = a.useState([]), [g, v] = a.useState(true), [o, N] = a.useState(""), [n, y] = a.useState("time"), [d, m] = a.useState(null), [u, p] = a.useState(false), [f, h] = a.useState(""), [x, j] = a.useState(null), [L, k] = a.useState(false), [C, w] = a.useState(""), S = a.useCallback(async () => {
    v(true);
    try {
      const s = await I.getAllKnowledgeBases(n === "question" ? "question" : "time", "COMPLETED");
      c(s);
    } finally {
      v(false);
    }
  }, [n]);
  a.useEffect(() => {
    S();
  }, [S]);
  const T = r.some((s) => B(s.questionGenStatus));
  a.useEffect(() => {
    if (!T) return;
    let s = false, t;
    const i = async () => {
      try {
        const b = await I.getAllKnowledgeBases(n === "question" ? "question" : "time", "COMPLETED");
        s || c(b);
      } finally {
        s || (t = setTimeout(i, 5e3));
      }
    };
    return t = setTimeout(i, 5e3), () => {
      s = true, t && clearTimeout(t);
    };
  }, [T, n]);
  const U = a.useMemo(() => {
    const s = o.trim().toLowerCase(), t = s ? r.filter((i) => i.name.toLowerCase().includes(s) || (i.originalFilename || "").toLowerCase().includes(s)) : [...r];
    switch (n) {
      case "name":
        t.sort((i, b) => i.name.localeCompare(b.name, "zh"));
        break;
      case "question":
        t.sort((i, b) => b.questionCount - i.questionCount);
        break;
      case "time":
      default:
        t.sort((i, b) => (b.uploadedAt || "").localeCompare(i.uploadedAt || ""));
        break;
    }
    return t;
  }, [r, o, n]), P = (s) => {
    m(s), h("");
  }, q = (s) => {
    B(s.questionGenStatus) || (j(s), w(""));
  }, D = (s) => {
    l(`/knowledgebase-interview/${s.id}/questions`);
  }, O = async (s) => {
    if (d) {
      p(true), h("");
      try {
        const t = await I.createInterviewSession({ knowledgeBaseId: d.id, category: s.category.trim() || void 0, difficulty: s.difficulty, mainQuestionCount: s.mainQuestionCount, followUpCount: s.followUpCount, llmProvider: s.llmProvider }), i = d.id;
        m(null), l(`/knowledgebase-interview/${t.sessionId}`, { state: { knowledgeBaseId: i } });
      } catch (t) {
        h(Q(t, "\u521B\u5EFA\u77E5\u8BC6\u5E93\u9762\u8BD5\u5931\u8D25"));
      } finally {
        p(false);
      }
    }
  }, G = async (s) => {
    if (x) {
      k(true), w("");
      try {
        const t = await I.generateQuestions(x.id, { difficulty: s.difficulty, questionCount: s.questionCount, followUpCount: s.followUpCount, categoryLimit: s.categoryLimit, llmProvider: s.llmProvider });
        j(null), l(`/knowledgebase-interview/${x.id}/questions`, { state: { highlightStatus: "DRAFT", questionGenTaskId: t.questionGenTaskId } });
      } catch (t) {
        w(Q(t, "\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"));
      } finally {
        k(false);
      }
    }
  };
  return e.jsxs("div", { className: "max-w-[1400px] mx-auto", children: [e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6", children: [e.jsxs("div", { children: [e.jsxs("h1", { className: "text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3", children: [e.jsx(Z, { className: "w-7 h-7 text-primary-500" }), "\u77E5\u8BC6\u5E93\u9762\u8BD5"] }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-1", children: "\u9009\u62E9\u77E5\u8BC6\u5E93\u8FDB\u5165\u9762\u8BD5\uFF0C\u6216\u7EF4\u62A4\u9898\u5E93" })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs("button", { onClick: S, className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 whitespace-nowrap", children: [e.jsx(ee, { className: "w-4 h-4" }), "\u5237\u65B0"] }), e.jsxs("button", { onClick: () => l("/knowledgebase/upload"), className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 whitespace-nowrap", children: [e.jsx(te, { className: "w-4 h-4" }), "\u4E0A\u4F20\u77E5\u8BC6\u5E93"] })] })] }), e.jsxs("div", { className: "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-3 mb-6 flex flex-col sm:flex-row gap-3 sm:items-center", children: [e.jsxs("div", { className: "relative flex-1", children: [e.jsx(se, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }), e.jsx("input", { value: o, onChange: (s) => N(s.target.value), className: `${E} pl-9`, placeholder: "\u6309\u540D\u79F0\u6216\u6587\u4EF6\u540D\u641C\u7D22" })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ae, { className: "w-4 h-4 text-slate-400 shrink-0" }), e.jsx("select", { value: n, onChange: (s) => y(s.target.value), className: `${E} sm:w-40`, children: ge.map((s) => e.jsx("option", { value: s.value, children: s.label }, s.value)) })] })] }), g ? e.jsx("div", { className: "flex justify-center py-24", children: e.jsx(A, { className: "w-8 h-8 animate-spin text-primary-500" }) }) : U.length === 0 ? e.jsxs("div", { className: "flex flex-col items-center justify-center min-h-[320px] rounded-2xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 gap-3", children: [e.jsx(R, { className: "w-10 h-10" }), e.jsx("p", { className: "text-sm", children: o.trim() ? "\u6CA1\u6709\u5339\u914D\u7684\u77E5\u8BC6\u5E93" : "\u6682\u65E0\u5DF2\u5B8C\u6210\u77E5\u8BC6\u5E93\uFF0C\u5148\u4E0A\u4F20\u5E76\u7B49\u5F85\u5411\u91CF\u5316\u5B8C\u6210" })] }) : e.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5", children: U.map((s) => e.jsx(he, { kb: s, onStart: P, onGenerate: q, onManage: D }, s.id)) }), e.jsx(ue, { open: d !== null, knowledgeBase: d, defaultDifficulty: _, starting: u, error: f, onClose: () => {
    u || (m(null), h(""));
  }, onStart: O }), e.jsx(me, { open: x !== null, knowledgeBaseName: (x == null ? void 0 : x.name) || "", defaultDifficulty: _, defaultCategoryLimit: xe, submitting: L, error: C, onClose: () => {
    L || (j(null), w(""));
  }, onSubmit: G })] });
}
export {
  Ne as default
};
