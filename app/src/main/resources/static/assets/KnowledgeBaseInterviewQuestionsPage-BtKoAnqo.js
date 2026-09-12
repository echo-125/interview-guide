import { j as e, X as re, L as G, F as Xe, a as qe, W as et, z as ve, Y as Ce, r as Se, Z as tt, _ as st, S as ye, P as at, u as rt } from "./ui-vendor-CqaAdWtE.js";
import { g as K } from "./index-CxLe-kJW.js";
import { r as l, h as lt, d as nt, u as it } from "./react-vendor-BA2qNj4G.js";
import { k as b } from "./knowledgebase-CIu6U8Sw.js";
import { a as Ae, I as f, S as ot, d as ct, e as dt, f as ut, h as xt, i as se, G as mt, c as pt, D as je, s as ht } from "./questionGenerationStatus-lPSHjvix.js";
import { D as ke } from "./DeleteConfirmDialog-DZTO-Ja9.js";
import "./syntax-highlighter-CeD-urYA.js";
import "./ConfirmDialog-Cn876c6T.js";
function we(t) {
  return { difficulty: (t == null ? void 0 : t.difficulty) || "mid", type: "KNOWLEDGE_BASE", category: (t == null ? void 0 : t.category) || "", question: "", topicSummary: "", referenceAnswer: "", keyPoints: "", scoringRubric: "", followUps: "", sourceContext: "", status: "DRAFT" };
}
function Te(t) {
  return t.split(`
`).map((i) => i.trim()).filter(Boolean);
}
function gt(t) {
  return (t ?? []).join(`
`);
}
function bt(t) {
  return t.map((i) => [i.question, i.referenceAnswer || "", (i.keyPoints || []).join(","), i.scoringRubric || ""].join(" | ")).join(`
`);
}
function ft(t) {
  return Te(t).map((i) => {
    const [d, u, m, n] = i.split("|").map((x) => x.trim());
    return { question: d, referenceAnswer: u || null, keyPoints: m ? m.split(",").map((x) => x.trim()).filter(Boolean) : [], scoringRubric: n || null };
  });
}
function yt(t) {
  return { difficulty: t.difficulty, type: t.type || "", category: t.category || "", question: t.question, topicSummary: t.topicSummary || "", referenceAnswer: t.referenceAnswer || "", keyPoints: gt(t.keyPoints), scoringRubric: t.scoringRubric || "", followUps: bt(t.followUps), sourceContext: t.sourceContext || "", status: t.status };
}
function jt(t) {
  return { difficulty: t.difficulty, type: t.type.trim() || null, category: t.category.trim(), question: t.question.trim(), topicSummary: t.topicSummary.trim() || null, referenceAnswer: t.referenceAnswer.trim() || null, keyPoints: Te(t.keyPoints), scoringRubric: t.scoringRubric.trim() || null, followUps: ft(t.followUps), sourceContext: t.sourceContext.trim() || null, status: t.status };
}
function kt({ form: t, editing: i, saving: d, error: u, categoryOptions: m = [], onChange: n, onClose: x, onSubmit: h }) {
  return e.jsxs("div", { className: "fixed inset-0 z-50", children: [e.jsx("button", { type: "button", className: "absolute inset-y-0 left-0 bg-black/40", style: { right: "min(42rem, 100vw)" }, onClick: x, "aria-label": "\u5173\u95ED\u8868\u5355" }), e.jsxs("form", { onSubmit: h, className: "absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-700", children: [e.jsxs("div", { className: "sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-700 px-5 py-4 flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "font-bold text-slate-900 dark:text-white", children: i ? "\u7F16\u8F91\u9898\u76EE" : "\u65B0\u589E\u9898\u76EE" }), e.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: "\u7EF4\u62A4\u9898\u5E72\u3001\u7B54\u6848\u3001\u8BC4\u5206\u89C4\u5219\u548C\u8FFD\u95EE" })] }), e.jsx("button", { type: "button", onClick: x, "aria-label": "\u5173\u95ED", className: "p-2 rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800", children: e.jsx(re, { className: "w-5 h-5" }) })] }), e.jsxs("div", { className: "p-5 space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [e.jsx(N, { label: "\u96BE\u5EA6", children: e.jsx("select", { value: t.difficulty, onChange: (r) => n({ ...t, difficulty: r.target.value }), className: f, children: Ae.map((r) => e.jsx("option", { value: r.value, children: r.label }, r.value)) }) }), e.jsx(N, { label: "\u72B6\u6001", children: e.jsx("select", { value: t.status, onChange: (r) => n({ ...t, status: r.target.value }), className: f, children: ot.filter((r) => r.value).map((r) => e.jsx("option", { value: r.value, children: r.label }, r.value)) }) })] }), e.jsxs(N, { label: "\u9762\u8BD5\u65B9\u5411\uFF08\u7528\u4E8E\u7B5B\u9009\u548C\u5F00\u59CB\u9762\u8BD5\uFF09", children: [e.jsx("input", { value: t.category, list: "knowledge-base-question-category-options", onChange: (r) => n({ ...t, category: r.target.value }), className: f, placeholder: "\u4F8B\u5982 \u6574\u6D01\u67B6\u6784 / Redis / JVM \u8C03\u4F18" }), m.length > 0 && e.jsx("datalist", { id: "knowledge-base-question-category-options", children: m.map((r) => e.jsx("option", { value: r }, r)) }), e.jsx("p", { className: "mt-1 text-xs text-slate-400 dark:text-slate-500", children: "\u53EF\u8F93\u5165\u65B0\u65B9\u5411\uFF0C\u6216\u4ECE\u5DF2\u6709\u65B9\u5411\u4E2D\u9009\u62E9\u3002" })] }), e.jsx(N, { label: "\u9898\u5E72", children: e.jsx("textarea", { value: t.question, onChange: (r) => n({ ...t, question: r.target.value }), className: `${f} min-h-24 resize-y` }) }), e.jsx(N, { label: "\u53C2\u8003\u7B54\u6848", children: e.jsx("textarea", { value: t.referenceAnswer, onChange: (r) => n({ ...t, referenceAnswer: r.target.value }), className: `${f} min-h-28 resize-y` }) }), e.jsx(N, { label: "\u8BC4\u5206\u8981\u70B9\uFF08\u6BCF\u884C\u4E00\u6761\uFF09", children: e.jsx("textarea", { value: t.keyPoints, onChange: (r) => n({ ...t, keyPoints: r.target.value }), className: `${f} min-h-20 resize-y` }) }), e.jsx(N, { label: "\u8BC4\u5206\u89C4\u5219", children: e.jsx("textarea", { value: t.scoringRubric, onChange: (r) => n({ ...t, scoringRubric: r.target.value }), className: `${f} min-h-20 resize-y` }) }), e.jsx(N, { label: "\u8FFD\u95EE\uFF08\u6BCF\u884C\uFF1A\u9898\u5E72 | \u53C2\u8003\u7B54\u6848 | \u8981\u70B91,\u8981\u70B92 | \u8BC4\u5206\u89C4\u5219\uFF09", children: e.jsx("textarea", { value: t.followUps, onChange: (r) => n({ ...t, followUps: r.target.value }), className: `${f} min-h-24 resize-y` }) }), u && e.jsx("p", { className: "text-sm text-red-500", children: u })] }), e.jsxs("div", { className: "sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700 px-5 py-4 flex items-center justify-end gap-3", children: [e.jsx("button", { type: "button", onClick: x, className: "px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800", children: "\u53D6\u6D88" }), e.jsxs("button", { type: "submit", disabled: d, className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 disabled:opacity-50", children: [d ? e.jsx(G, { className: "w-4 h-4 animate-spin" }) : e.jsx(Xe, { className: "w-4 h-4" }), "\u4FDD\u5B58"] })] })] })] });
}
function N({ label: t, children: i }) {
  return e.jsxs("label", { className: "block", children: [e.jsx("span", { className: "block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1", children: t }), i] });
}
function wt({ question: t, selected: i = false, targetFollowUpCount: d, onSelect: u, onEdit: m, onUpdateStatus: n, onDelete: x }) {
  const [h, r] = l.useState(false), S = t.followUps.filter((c) => {
    var _a;
    return (_a = c.question) == null ? void 0 : _a.trim();
  }).length, A = ct(S, d), T = !!(t.referenceAnswer || t.keyPoints.length > 0 || t.scoringRubric || t.followUps.length > 0);
  return e.jsx("div", { className: `bg-white dark:bg-slate-800 border rounded-xl p-4 transition-colors ${i ? "border-primary-300 dark:border-primary-700 bg-primary-50/40 dark:bg-primary-900/10" : "border-slate-100 dark:border-slate-700"}`, children: e.jsxs("div", { className: "flex items-start gap-3", children: [u && e.jsx("input", { type: "checkbox", checked: i, onChange: () => u(t.id), className: "mt-1 w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500/30 shrink-0" }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [e.jsx(O, { children: dt(t.status) }), t.category && e.jsx(O, { children: t.category }), e.jsx(O, { children: ut(t.difficulty) }), e.jsx(O, { children: `${S} \u4E2A\u8FFD\u95EE` }), A && e.jsx(O, { tone: "warning", children: A })] }), e.jsx("button", { type: "button", onClick: () => T && r((c) => !c), className: `block w-full text-left ${T ? "cursor-pointer" : "cursor-default"}`, children: e.jsx("h3", { className: "font-semibold text-slate-900 dark:text-white leading-relaxed", children: t.question }) }), !h && t.referenceAnswer && e.jsx("p", { className: "mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2", children: t.referenceAnswer }), T && e.jsxs("button", { type: "button", onClick: () => r((c) => !c), className: "mt-2 inline-flex items-center gap-1 text-xs text-primary-500 hover:text-primary-600", children: [e.jsx(qe, { className: `w-3.5 h-3.5 transition-transform ${h ? "rotate-180" : ""}` }), h ? "\u6536\u8D77\u8BE6\u60C5" : "\u67E5\u770B\u53C2\u8003\u7B54\u6848\u4E0E\u8FFD\u95EE"] }), h && e.jsxs("div", { className: "mt-3 space-y-3 border-t border-slate-100 dark:border-slate-700 pt-3", children: [t.topicSummary && e.jsx(ae, { title: "\u4E3B\u9898\u6458\u8981", body: t.topicSummary }), t.referenceAnswer && e.jsx(ae, { title: "\u53C2\u8003\u7B54\u6848", body: t.referenceAnswer }), t.keyPoints.length > 0 && e.jsxs("div", { children: [e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1", children: "\u8BC4\u5206\u8981\u70B9" }), e.jsx("ul", { className: "space-y-1", children: t.keyPoints.map((c, v) => e.jsxs("li", { className: "text-sm text-slate-700 dark:text-slate-200 flex gap-2", children: [e.jsx("span", { className: "text-primary-500 shrink-0", children: "\u2022" }), e.jsx("span", { children: c })] }, v)) })] }), t.scoringRubric && e.jsx(ae, { title: "\u8BC4\u5206\u89C4\u5219", body: t.scoringRubric }), t.followUps.length > 0 && e.jsxs("div", { children: [e.jsxs("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2", children: ["\u8FFD\u95EE\uFF08", t.followUps.length, "\uFF09"] }), e.jsx("div", { className: "space-y-2", children: t.followUps.map((c, v) => e.jsxs("div", { className: "rounded-lg bg-slate-50 dark:bg-slate-900 px-3 py-2", children: [e.jsxs("p", { className: "text-sm font-medium text-slate-800 dark:text-white", children: [v + 1, ". ", c.question] }), c.referenceAnswer && e.jsxs("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400 whitespace-pre-line", children: ["\u53C2\u8003\u7B54\u6848\uFF1A", c.referenceAnswer] }), c.keyPoints && c.keyPoints.length > 0 && e.jsxs("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: ["\u8981\u70B9\uFF1A", c.keyPoints.join("\u3001")] })] }, v)) })] })] })] }), e.jsxs("div", { className: "flex items-center gap-1 shrink-0", children: [e.jsx(H, { title: "\u7F16\u8F91", onClick: () => m(t), children: e.jsx(et, { className: "w-4 h-4" }) }), t.status !== "ACTIVE" && e.jsx(H, { title: "\u542F\u7528", onClick: () => n(t.id, "ACTIVE"), children: e.jsx(ve, { className: "w-4 h-4" }) }), t.status !== "ARCHIVED" && e.jsx(H, { title: "\u5F52\u6863", onClick: () => n(t.id, "ARCHIVED"), children: e.jsx(Ce, { className: "w-4 h-4" }) }), e.jsx(H, { title: "\u5220\u9664", onClick: () => x(t), children: e.jsx(Se, { className: "w-4 h-4" }) })] })] }) });
}
function O({ children: t, tone: i = "default" }) {
  const d = i === "warning" ? "bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300" : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300";
  return e.jsx("span", { className: `px-2 py-0.5 rounded text-xs ${d}`, children: t });
}
function ae({ title: t, body: i }) {
  return e.jsxs("div", { children: [e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1", children: t }), e.jsx("p", { className: "text-sm text-slate-700 dark:text-slate-200 whitespace-pre-line", children: i })] });
}
function H({ title: t, children: i, onClick: d }) {
  return e.jsx("button", { onClick: d, className: "p-2 rounded-lg text-slate-400 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30", title: t, children: i });
}
const Ne = { status: "", category: "", difficulty: "", keyword: "" }, Nt = [{ value: "", label: "\u5168\u90E8" }, { value: "DRAFT", label: "\u8349\u7A3F" }, { value: "ACTIVE", label: "\u5DF2\u542F\u7528" }, { value: "ARCHIVED", label: "\u5DF2\u5F52\u6863" }];
function Gt() {
  const { knowledgeBaseId: t } = lt(), i = nt(), u = it().state, m = u == null ? void 0 : u.highlightStatus, n = t ? parseInt(t, 10) : NaN, [x, h] = l.useState(null), [r, S] = l.useState(true), [A, T] = l.useState([]), [c, v] = l.useState([]), [Ee, le] = l.useState(false), [ne, ie] = l.useState([]), [j, E] = l.useState({ ...Ne, status: m ?? "" }), [Ie, F] = l.useState(false), [oe, ce] = l.useState(false), [Pe, $] = l.useState(""), [y, de] = l.useState(null), [R, ue] = l.useState((u == null ? void 0 : u.questionGenTaskId) || null), [Qe, z] = l.useState(false), [W, xe] = l.useState(null), [me, Z] = l.useState(we()), [De, U] = l.useState(""), [Ge, pe] = l.useState(false), [I, J] = l.useState(null), [Fe, X] = l.useState(false), [Re, he] = l.useState(false), [ge, w] = l.useState(""), [k, P] = l.useState(/* @__PURE__ */ new Set()), [Q, M] = l.useState(false), [Ue, q] = l.useState(0), [D, Le] = l.useState(10), ee = l.useCallback(async () => {
    if (Number.isNaN(n)) {
      S(false);
      return;
    }
    S(true);
    try {
      const s = await b.getKnowledgeBase(n);
      h(s);
    } catch {
      h(null);
    } finally {
      S(false);
    }
  }, [n]), C = l.useCallback(async () => {
    if (Number.isNaN(n)) {
      T([]), v([]), ie([]);
      return;
    }
    le(true);
    try {
      const [s, a] = await Promise.all([b.listQuestions(n), b.listQuestions(n, j)]);
      T(s), v(a);
      const o = /* @__PURE__ */ new Set();
      s.forEach((p) => {
        p.category && o.add(p.category);
      }), ie(Array.from(o).sort((p, g) => p.localeCompare(g)));
    } finally {
      le(false);
    }
  }, [j, n]);
  l.useEffect(() => {
    ee();
  }, [ee]), l.useEffect(() => {
    C();
  }, [C]), l.useEffect(() => {
    if (Number.isNaN(n)) return;
    let s = false, a, o = null;
    const p = async () => {
      var _a;
      try {
        const g = await b.getQuestionGenerationStatus(n);
        if (s) return;
        const Je = R === null || g.questionGenTaskId === R;
        de(g), g.questionGenTaskId && R === null && se(g.questionGenStatus) && ue(g.questionGenTaskId), ht(o, g.questionGenStatus, Je) && (E({ status: "DRAFT", category: "", difficulty: ((_a = g.questionGenConfig) == null ? void 0 : _a.difficulty) || "", keyword: "" }), ee()), o = g.questionGenStatus, se(g.questionGenStatus) && (a = setTimeout(p, 3e3));
      } catch {
        !s && R !== null && (a = setTimeout(p, 3e3));
      }
    };
    return p(), () => {
      s = true, a && clearTimeout(a);
    };
  }, [n, R]), l.useEffect(() => {
    P(/* @__PURE__ */ new Set()), q(0);
  }, [j]);
  const Be = l.useMemo(() => A.reduce((s, a) => (s[a.status] += 1, s), { DRAFT: 0, ACTIVE: 0, ARCHIVED: 0, STALE: 0 }), [A]), be = Math.max(1, Math.ceil(c.length / D)), _ = Math.min(Ue, be - 1), V = l.useMemo(() => c.slice(_ * D, _ * D + D), [c, _, D]), te = V.length > 0 && V.every((s) => k.has(s.id)), Oe = () => {
    P((s) => {
      const a = new Set(s);
      return V.forEach((o) => {
        te ? a.delete(o.id) : a.add(o.id);
      }), a;
    });
  }, $e = (s) => {
    P((a) => {
      const o = new Set(a);
      return o.has(s) ? o.delete(s) : o.add(s), o;
    });
  }, ze = () => P(/* @__PURE__ */ new Set()), Me = () => {
    xe(null), Z(we({ category: j.category, difficulty: j.difficulty || je })), U(""), z(true);
  }, _e = (s) => {
    xe(s), Z(yt(s)), U(""), z(true);
  }, Ve = async (s) => {
    if (!Number.isNaN(n)) {
      ce(true), $("");
      try {
        const a = await b.generateQuestions(n, { difficulty: s.difficulty, questionCount: s.questionCount, followUpCount: s.followUpCount, categoryLimit: s.categoryLimit, llmProvider: s.llmProvider });
        F(false), de(a), ue(a.questionGenTaskId);
      } catch (a) {
        $(K(a, "\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"));
      } finally {
        ce(false);
      }
    }
  }, L = y ? xt(y) : null, B = se(y == null ? void 0 : y.questionGenStatus), Ke = (y == null ? void 0 : y.questionGenConfig) ? { difficulty: y.questionGenConfig.difficulty, questionCount: y.questionGenConfig.questionCount, followUpCount: y.questionGenConfig.followUpCount, categoryLimit: y.questionGenConfig.categoryLimit } : null, He = async (s) => {
    if (s.preventDefault(), Number.isNaN(n)) return;
    const a = jt(me);
    if (!a.question) {
      U("\u9898\u5E72\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    if (!a.category) {
      U("\u9762\u8BD5\u65B9\u5411\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    pe(true);
    try {
      W ? await b.updateQuestion(W.id, a) : await b.createQuestion(n, a), z(false), await C();
    } catch (o) {
      U(K(o, "\u4FDD\u5B58\u5931\u8D25"));
    } finally {
      pe(false);
    }
  }, Ye = async () => {
    if (I) {
      he(true), w("");
      try {
        await b.deleteQuestion(I.id), J(null), await C();
      } catch (s) {
        w(K(s, "\u5220\u9664\u5931\u8D25"));
      } finally {
        he(false);
      }
    }
  }, We = async (s, a) => {
    w("");
    try {
      await b.updateQuestionStatus(s, a), await C();
    } catch (o) {
      w(K(o, "\u66F4\u65B0\u72B6\u6001\u5931\u8D25"));
    }
  }, fe = async (s) => {
    if (k.size === 0) return;
    M(true), w("");
    const a = Array.from(k);
    let o = 0;
    await Promise.all(a.map((p) => b.updateQuestionStatus(p, s).catch(() => {
      o += 1;
    }))), M(false), o > 0 && w(`${o} \u9053\u9898\u76EE\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5`), P(/* @__PURE__ */ new Set()), await C();
  }, Ze = async () => {
    if (k.size === 0) return;
    M(true), w("");
    const s = Array.from(k);
    let a = 0;
    await Promise.all(s.map((o) => b.deleteQuestion(o).catch(() => {
      a += 1;
    }))), M(false), X(false), a > 0 && w(`${a} \u9053\u9898\u76EE\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5`), P(/* @__PURE__ */ new Set()), await C();
  };
  return r ? e.jsx("div", { className: "flex justify-center py-24", children: e.jsx(G, { className: "w-8 h-8 animate-spin text-primary-500" }) }) : Number.isNaN(n) || !x ? e.jsxs("div", { className: "max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[320px] gap-4 text-center", children: [e.jsx("p", { className: "text-slate-500 dark:text-slate-400", children: "\u77E5\u8BC6\u5E93\u4E0D\u5B58\u5728\u6216\u5DF2\u88AB\u5220\u9664" }), e.jsx("button", { onClick: () => i("/knowledgebase-interview"), className: "px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600", children: "\u8FD4\u56DE\u9996\u9875" })] }) : e.jsxs("div", { className: "max-w-[1400px] mx-auto", children: [e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6", children: [e.jsxs("div", { className: "min-w-0", children: [e.jsxs("button", { onClick: () => i("/knowledgebase-interview"), className: "inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-primary-500 mb-2", children: [e.jsx(tt, { className: "w-4 h-4" }), "\u8FD4\u56DE\u77E5\u8BC6\u5E93\u9762\u8BD5"] }), e.jsxs("h1", { className: "text-2xl font-bold text-slate-900 dark:text-white truncate", children: ["\u9898\u5E93\u7BA1\u7406\uFF1A", x.name] }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-1 truncate", children: "\u7EF4\u62A4\u9898\u5E72\u3001\u7B54\u6848\u3001\u8FFD\u95EE\u4E0E\u72B6\u6001" })] }), e.jsxs("div", { className: "flex gap-2 shrink-0", children: [e.jsxs("button", { onClick: () => i(`/knowledgebase-interview/${n}/interviews`), className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 shadow-sm shadow-indigo-500/20 whitespace-nowrap", children: [e.jsx(st, { className: "w-4 h-4" }), "\u67E5\u770B\u9762\u8BD5\u8BB0\u5F55"] }), e.jsxs("button", { onClick: () => F(true), disabled: B, className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap", children: [B ? e.jsx(G, { className: "w-4 h-4 animate-spin" }) : e.jsx(ye, { className: "w-4 h-4" }), B ? "\u751F\u6210\u4E2D" : "\u751F\u6210\u9898\u76EE"] }), e.jsxs("button", { onClick: Me, className: "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 whitespace-nowrap", children: [e.jsx(at, { className: "w-4 h-4" }), "\u624B\u52A8\u65B0\u589E"] })] })] }), e.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: Nt.map((s) => {
    const a = s.value === "" ? A.length : Be[s.value] ?? 0, o = j.status === s.value;
    return e.jsxs("button", { onClick: () => E((p) => ({ ...p, status: s.value })), className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${o ? "bg-primary-500 text-white" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"}`, children: [s.label, e.jsx("span", { className: `px-1.5 py-0.5 rounded text-xs ${o ? "bg-white/20" : "bg-slate-100 dark:bg-slate-700 text-slate-500"}`, children: a })] }, s.value || "all");
  }) }), e.jsx("div", { className: "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-4 mb-4", children: e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "relative", children: [e.jsx(rt, { className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" }), e.jsx("input", { value: j.keyword, onChange: (s) => E((a) => ({ ...a, keyword: s.target.value })), className: `${f} pl-9`, placeholder: "\u641C\u7D22\u9898\u5E72 / \u53C2\u8003\u7B54\u6848" })] }), e.jsxs("select", { value: j.category, onChange: (s) => E((a) => ({ ...a, category: s.target.value })), className: f, children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u65B9\u5411" }), ne.map((s) => e.jsx("option", { value: s, children: s }, s))] }), e.jsxs("select", { value: j.difficulty, onChange: (s) => E((a) => ({ ...a, difficulty: s.target.value })), className: f, children: [e.jsx("option", { value: "", children: "\u5168\u90E8\u96BE\u5EA6" }), Ae.map((s) => e.jsx("option", { value: s.value, children: s.label }, s.value))] }), e.jsx("div", { className: "flex gap-2", children: e.jsxs("button", { onClick: () => E(Ne), className: "inline-flex min-h-10 flex-1 items-center justify-center gap-2 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 whitespace-nowrap", children: [e.jsx(re, { className: "w-4 h-4" }), "\u6E05\u7A7A"] }) })] }) }), c.length > 0 && e.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-4 px-1", children: [e.jsxs("label", { className: "inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer", children: [e.jsx("input", { type: "checkbox", checked: te, onChange: Oe, className: "w-4 h-4 rounded border-slate-300 text-primary-500 focus:ring-primary-500/30" }), te ? "\u53D6\u6D88\u672C\u9875\u5168\u9009" : "\u9009\u62E9\u672C\u9875\u5168\u90E8"] }), k.size > 0 && e.jsxs(e.Fragment, { children: [e.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u5DF2\u9009 ", e.jsx("span", { className: "font-semibold text-primary-600 dark:text-primary-400", children: k.size }), " \u9053"] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs("button", { onClick: () => fe("ACTIVE"), disabled: Q, className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 disabled:opacity-50 whitespace-nowrap", children: [e.jsx(ve, { className: "w-3.5 h-3.5" }), "\u6279\u91CF\u542F\u7528"] }), e.jsxs("button", { onClick: () => fe("ARCHIVED"), disabled: Q, className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 whitespace-nowrap", children: [e.jsx(Ce, { className: "w-3.5 h-3.5" }), "\u6279\u91CF\u5F52\u6863"] }), e.jsxs("button", { onClick: () => X(true), disabled: Q, className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-50 whitespace-nowrap", children: [e.jsx(Se, { className: "w-3.5 h-3.5" }), "\u6279\u91CF\u5220\u9664"] }), e.jsxs("button", { onClick: ze, disabled: Q, className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs whitespace-nowrap", children: [e.jsx(re, { className: "w-3.5 h-3.5" }), "\u6E05\u7A7A\u9009\u62E9"] })] }), Q && e.jsx(G, { className: "w-4 h-4 animate-spin text-primary-500" })] })] }), e.jsxs("div", { className: "space-y-3", children: [L && e.jsxs("div", { className: `flex items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm ${L.tone === "error" ? "border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400" : L.tone === "warning" ? "border-amber-200 bg-amber-50 text-amber-600 dark:border-amber-900 dark:bg-amber-900/20 dark:text-amber-400" : L.tone === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-900/20 dark:text-emerald-400" : "border-primary-200 bg-primary-50 text-primary-600 dark:border-primary-900 dark:bg-primary-900/20 dark:text-primary-400"}`, children: [e.jsxs("span", { className: "inline-flex items-center gap-2", children: [B && e.jsx(G, { className: "w-4 h-4 animate-spin" }), L.text] }), (y == null ? void 0 : y.questionGenStatus) === "FAILED" && e.jsx("button", { type: "button", onClick: () => {
    $(""), F(true);
  }, className: "shrink-0 font-medium underline underline-offset-2", children: "\u91CD\u65B0\u751F\u6210" })] }), ge && e.jsx("p", { className: "text-sm text-red-500", children: ge }), Ee ? e.jsx("div", { className: "flex justify-center py-16", children: e.jsx(G, { className: "w-8 h-8 animate-spin text-primary-500" }) }) : c.length === 0 ? e.jsxs("div", { className: "flex min-h-[220px] items-center justify-center rounded-xl border border-dashed border-slate-200 dark:border-slate-700 text-slate-400 flex-col gap-3", children: [e.jsx("p", { children: "\u5F53\u524D\u6761\u4EF6\u4E0B\u6682\u65E0\u9898\u76EE" }), e.jsxs("button", { onClick: () => F(true), disabled: B, className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 disabled:opacity-40 disabled:cursor-not-allowed", children: [e.jsx(ye, { className: "w-4 h-4" }), "\u751F\u6210\u7B2C\u4E00\u6279\u9898\u76EE"] })] }) : e.jsxs(e.Fragment, { children: [V.map((s) => {
    var _a;
    return e.jsx(wt, { question: s, targetFollowUpCount: (_a = y == null ? void 0 : y.questionGenConfig) == null ? void 0 : _a.followUpCount, selected: k.has(s.id), onSelect: $e, onEdit: _e, onUpdateStatus: We, onDelete: (a) => J(a) }, s.id);
  }), e.jsx(Ct, { page: _, pageSize: D, total: c.length, totalPages: be, onPageChange: q, onPageSizeChange: (s) => {
    Le(s), q(0);
  } })] })] }), Qe && e.jsx(kt, { form: me, editing: W !== null, saving: Ge, error: De, categoryOptions: ne, onChange: Z, onClose: () => z(false), onSubmit: He }), e.jsx(mt, { open: Ie, knowledgeBaseName: x.name, defaultDifficulty: je, defaultCategoryLimit: pt, initialConfig: Ke, submitting: oe, error: Pe, onClose: () => {
    oe || (F(false), $(""));
  }, onSubmit: Ve }), e.jsx(ke, { open: I !== null, item: I ? { id: I.id, title: I.question } : null, itemType: "\u9898\u76EE", loading: Re, onConfirm: Ye, onCancel: () => J(null) }), e.jsx(ke, { open: Fe, item: null, itemType: "\u9898\u76EE", loading: Q, customMessage: e.jsxs("span", { children: ["\u786E\u5B9A\u8981\u5220\u9664\u5DF2\u9009\u7684 ", e.jsx("strong", { children: k.size }), " \u9053\u9898\u76EE\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002"] }), onConfirm: Ze, onCancel: () => X(false) })] });
}
const vt = [10, 20, 50];
function Ct({ page: t, pageSize: i, total: d, totalPages: u, onPageChange: m, onPageSizeChange: n }) {
  if (d === 0) return null;
  const x = t * i + 1, h = Math.min((t + 1) * i, d);
  return e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3 mt-4 px-1 text-sm", children: [e.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400", children: [e.jsxs("span", { children: ["\u7B2C ", e.jsxs("span", { className: "font-semibold text-slate-700 dark:text-slate-200", children: [x, "-", h] }), " / \u5171 ", e.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-200", children: d }), " \u9053"] }), e.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "|" }), e.jsx("span", { children: "\u6BCF\u9875" }), e.jsx("select", { value: i, onChange: (r) => n(parseInt(r.target.value, 10)), className: "px-2 py-1 rounded border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20", children: vt.map((r) => e.jsx("option", { value: r, children: r }, r)) })] }), e.jsxs("div", { className: "flex items-center gap-1", children: [e.jsx(Y, { disabled: t === 0, onClick: () => m(0), title: "\u7B2C\u4E00\u9875", children: "\xAB" }), e.jsx(Y, { disabled: t === 0, onClick: () => m(t - 1), title: "\u4E0A\u4E00\u9875", children: "\u2039" }), e.jsxs("span", { className: "px-3 text-slate-700 dark:text-slate-200", children: [t + 1, " / ", u] }), e.jsx(Y, { disabled: t >= u - 1, onClick: () => m(t + 1), title: "\u4E0B\u4E00\u9875", children: "\u203A" }), e.jsx(Y, { disabled: t >= u - 1, onClick: () => m(u - 1), title: "\u6700\u540E\u4E00\u9875", children: "\xBB" })] })] });
}
function Y({ children: t, disabled: i, onClick: d, title: u }) {
  return e.jsx("button", { onClick: d, disabled: i, title: u, className: "w-9 h-9 inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed", children: t });
}
export {
  Gt as default
};
