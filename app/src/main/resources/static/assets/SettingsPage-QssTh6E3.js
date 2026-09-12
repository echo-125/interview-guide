import { j as e, g as Xt, L as w, A as H, m as n, P as Yt, a9 as mt, aa as xt, D as ut, ab as bt, l as Ke, ac as Ue, a8 as Be, R as ht, r as Qt, M as pt, ad as gt, ae as Zt, I as ea, af as ft, a as kt } from "./ui-vendor-CqaAdWtE.js";
import { l as c, g as h } from "./index-CxLe-kJW.js";
import { r as s } from "./react-vendor-BA2qNj4G.js";
import { C as _e } from "./ConfirmDialog-Cn876c6T.js";
import "./syntax-highlighter-CeD-urYA.js";
const ze = `flex h-full min-h-[330px] flex-col rounded-xl border border-slate-200
  bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700
  dark:bg-slate-800`, Oe = `flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
  bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-300`, He = `mb-4 flex-1 space-y-1 rounded-lg border border-slate-100 bg-slate-50/70
  p-3 dark:border-slate-700/80 dark:bg-slate-900/30`, Ve = `mt-auto flex min-h-12 flex-wrap items-center gap-2 border-t
  border-slate-100 pt-3 dark:border-slate-700`, j = `inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs
  font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50`, We = { chat: "\u804A\u5929\u6A21\u578B", embedding: "\u5411\u91CF\u6A21\u578B", rerank: "\u91CD\u6392\u6A21\u578B" };
function V({ icon: v, children: M }) {
  return e.jsxs("span", { className: "inline-flex h-6 items-center gap-1.5 rounded-full bg-primary-50 px-2.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300", children: [v, M] });
}
function d({ label: v, value: M, title: D, monospace: ne = false, emphasis: T = false }) {
  return e.jsxs("div", { className: `grid grid-cols-[108px_minmax(0,1fr)] items-start gap-3 rounded-md px-2 py-2 text-xs ${T ? "bg-white shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-700" : ""}`, children: [e.jsx("dt", { className: "whitespace-nowrap text-slate-500 dark:text-slate-400", children: v }), e.jsx("dd", { className: `min-w-0 truncate text-right font-medium text-slate-700 dark:text-slate-200 ${ne ? "font-mono" : ""}`, title: D, children: M })] });
}
function na() {
  const [v, M] = s.useState([]), [D, ne] = s.useState(""), [T, yt] = s.useState(""), [jt, wt] = s.useState(""), [vt, Nt] = s.useState(true), [m, Ct] = s.useState("chat"), [x, Ge] = s.useState("chat"), [St, oe] = s.useState(false), [p, de] = s.useState(null), [ce, W] = s.useState(false), [me, xe] = s.useState(""), [N, ue] = s.useState(""), [C, be] = s.useState(""), [P, G] = s.useState(""), [R, he] = s.useState("openai"), [A, q] = s.useState(""), [pe, ge] = s.useState("1024"), [fe, qe] = s.useState(false), [E, ke] = s.useState(""), [ye, je] = s.useState("cohere"), [I, we] = s.useState(""), [$, ve] = s.useState(""), [L, Ne] = s.useState(""), [Ce, Se] = s.useState(false), [Je, K] = s.useState(false), [Xe, U] = s.useState(false), [Ye, De] = s.useState([]), [J, Qe] = s.useState(false), g = s.useMemo(() => Ye.map((t) => ({ value: t, label: "\u5728\u7EBF\u83B7\u53D6" })), [Ye]), [Ze, et] = s.useState(null), [X, Te] = s.useState({}), [Y, Q] = s.useState(null), [Pe, tt] = s.useState(false), [B, Ae] = s.useState(null), [S, Fe] = s.useState(null), [_, Me] = s.useState(null), [Re, at] = s.useState(false), [Ee, st] = s.useState(false), [Ie, rt] = s.useState(false), Z = s.useMemo(() => v.find((t) => t.id === S) ?? null, [S, v]), [i, Dt] = s.useState(null), [o, Tt] = s.useState(null), [ee, F] = s.useState(null), [lt, it] = s.useState(false), [te, $e] = s.useState(null), [Le, ae] = s.useState(false), [u, b] = s.useState({}), [f, k] = s.useState({}), [se, nt] = s.useState(null), l = s.useCallback((t, a = "success") => {
    nt({ message: t, type: a }), setTimeout(() => nt(null), 3e3);
  }, []), Pt = s.useCallback((t) => D === t, [D]), At = s.useCallback((t) => T === t, [T]), y = s.useCallback(async () => {
    try {
      const [t, a, r, z] = await Promise.all([c.list(), c.getDefaultProvider(), c.getAsrConfig(), c.getTtsConfig()]);
      M(t), ne(a.defaultProvider), yt(a.defaultEmbeddingProvider), wt(a.defaultRerankProvider ?? ""), Dt(r), Tt(z);
    } catch (t) {
      console.error("Failed to load settings:", t), l("\u52A0\u8F7D\u6570\u636E\u5931\u8D25", "error");
    } finally {
      Nt(false);
    }
  }, [l]);
  s.useEffect(() => {
    y();
  }, [y]);
  const Ft = (t) => {
    de(null), Ge(t), xe(""), ue(""), be(""), G(""), he("openai"), q(""), ge("1024"), qe(t === "embedding"), ke(""), je("cohere"), we(""), ve(""), Ne(""), De([]), Se(false), oe(true);
  }, Mt = (t, a) => {
    de(t), Ge(a), xe(t.id), ue(t.baseUrl), be(""), G(t.model ?? ""), he(t.apiFormat || "openai"), q(t.embeddingModel || ""), ge(t.embeddingDimensions != null ? String(t.embeddingDimensions) : "1024"), qe(t.supportsEmbedding), ke(t.rerankModel ?? ""), je(t.rerankApiFormat || "cohere"), we(t.maxTokens != null ? String(t.maxTokens) : ""), ve(t.topP != null ? String(t.topP) : ""), Ne(t.temperature != null ? String(t.temperature) : ""), De([]), Se(false), oe(true);
  }, re = () => {
    oe(false), de(null);
  }, ot = fe && !!A.trim(), dt = x === "chat" ? !!P.trim() : x === "embedding" ? !!A.trim() : !!E.trim(), Rt = async () => {
    if (!me.trim() || !N.trim() || !C.trim()) {
      l("\u8BF7\u586B\u5199\u5FC5\u586B\u5B57\u6BB5", "error");
      return;
    }
    if (!dt) {
      l(`\u8BF7\u586B\u5199${We[x]}`, "error");
      return;
    }
    const t = parseInt(pe.trim(), 10);
    if (x === "embedding" && (!Number.isFinite(t) || t <= 0)) {
      l("\u5411\u91CF\u7EF4\u5EA6\u5FC5\u987B\u4E3A\u6B63\u6574\u6570\uFF0C\u9700\u4E0E\u5411\u91CF\u5E93\u7EF4\u5EA6\u4E00\u81F4\uFF08\u9ED8\u8BA4 1024\uFF09", "error");
      return;
    }
    W(true);
    try {
      const a = { id: me.trim(), baseUrl: N.trim(), apiKey: C.trim(), supportsEmbedding: fe, apiFormat: R, rerankApiFormat: ye };
      if (P.trim() && (a.model = P.trim()), ot && (a.embeddingModel = A.trim(), a.embeddingDimensions = t), E.trim() && (a.rerankModel = E.trim()), I.trim()) {
        const r = parseInt(I.trim(), 10);
        Number.isFinite(r) && r > 0 && (a.maxTokens = r);
      }
      if ($.trim()) {
        const r = parseFloat($.trim());
        Number.isFinite(r) && r > 0 && (a.topP = r);
      }
      if (L.trim()) {
        const r = parseFloat(L.trim());
        isNaN(r) || (a.temperature = r);
      }
      await c.create(a), l("\u6A21\u578B\u521B\u5EFA\u6210\u529F"), re(), await y();
    } catch (a) {
      console.error("Failed to create provider:", a), l(h(a, "\u521B\u5EFA\u5931\u8D25"), "error");
    } finally {
      W(false);
    }
  }, Et = async () => {
    if (!p) return;
    if (!N.trim()) {
      l("\u8BF7\u586B\u5199\u5FC5\u586B\u5B57\u6BB5", "error");
      return;
    }
    if (!dt) {
      l(`\u8BF7\u586B\u5199${We[x]}`, "error");
      return;
    }
    const t = parseInt(pe.trim(), 10);
    if (x === "embedding" && (!Number.isFinite(t) || t <= 0)) {
      l("\u5411\u91CF\u7EF4\u5EA6\u5FC5\u987B\u4E3A\u6B63\u6574\u6570\uFF0C\u9700\u4E0E\u5411\u91CF\u5E93\u7EF4\u5EA6\u4E00\u81F4\uFF08\u9ED8\u8BA4 1024\uFF09", "error");
      return;
    }
    W(true);
    try {
      const a = { baseUrl: N.trim(), model: P.trim(), apiFormat: R, embeddingModel: A.trim(), supportsEmbedding: fe, rerankModel: E.trim(), rerankApiFormat: ye };
      if (ot && (a.embeddingDimensions = t), I.trim()) {
        const r = parseInt(I.trim(), 10);
        Number.isFinite(r) && r > 0 && (a.maxTokens = r);
      }
      if ($.trim()) {
        const r = parseFloat($.trim());
        Number.isFinite(r) && r > 0 && (a.topP = r);
      }
      if (C.trim() && (a.apiKey = C.trim()), L.trim()) {
        const r = parseFloat(L.trim());
        isNaN(r) || (a.temperature = r);
      }
      await c.update(p.id, a), l("\u6A21\u578B\u66F4\u65B0\u6210\u529F"), re(), await y();
    } catch (a) {
      console.error("Failed to update provider:", a), l(h(a, "\u66F4\u65B0\u5931\u8D25"), "error");
    } finally {
      W(false);
    }
  }, ct = async () => {
    if (!N.trim() || !C.trim() && !p) {
      l("\u8BF7\u5148\u586B\u5199 Base URL \u548C API Key", "error");
      return;
    }
    Qe(true);
    try {
      const t = await c.fetchModels({ providerId: p == null ? void 0 : p.id, baseUrl: N.trim(), apiKey: C.trim() || void 0, apiFormat: R });
      De(t ?? []), l((t == null ? void 0 : t.length) ? `\u5DF2\u83B7\u53D6 ${t.length} \u4E2A\u6A21\u578B` : "\u8BE5\u7AEF\u70B9\u672A\u8FD4\u56DE\u6A21\u578B\u5217\u8868");
    } catch (t) {
      console.error("Failed to fetch models:", t), l(h(t, "\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25"), "error");
    } finally {
      Qe(false);
    }
  }, It = async () => {
    if (Y) {
      tt(true);
      try {
        await c.delete(Y), l("\u6A21\u578B\u5DF2\u5220\u9664"), Q(null), await y();
      } catch (t) {
        console.error("Failed to delete provider:", t), l(h(t, "\u5220\u9664\u5931\u8D25"), "error");
      } finally {
        tt(false);
      }
    }
  }, $t = async (t) => {
    et(t), Te((a) => {
      const r = { ...a };
      return delete r[t], r;
    });
    try {
      const a = await c.test(t);
      Te((r) => ({ ...r, [t]: a }));
    } catch (a) {
      console.error("Test failed:", a), Te((r) => ({ ...r, [t]: { success: false, message: h(a, "\u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25"), model: "" } }));
    } finally {
      et(null);
    }
  }, Lt = async (t) => {
    Ae(t);
  }, Kt = async () => {
    if (B) {
      at(true);
      try {
        await c.updateDefaultProvider({ defaultProvider: B, defaultEmbeddingProvider: T }), l(`\u5DF2\u5C06 "${B}" \u8BBE\u4E3A\u9ED8\u8BA4\u804A\u5929\u670D\u52A1`), Ae(null), await y();
      } catch (t) {
        console.error("Failed to set default:", t), l(h(t, "\u8BBE\u7F6E\u9ED8\u8BA4\u6A21\u578B\u5931\u8D25"), "error");
      } finally {
        at(false);
      }
    }
  }, Ut = async (t) => {
    if (!t.supportsEmbedding || !t.embeddingModel) {
      l("\u8BE5\u6A21\u578B\u4E0D\u652F\u6301\u5411\u91CF\u5316\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u77E5\u8BC6\u5E93\u5411\u91CF\u670D\u52A1", "error");
      return;
    }
    Fe(t.id);
  }, Bt = async () => {
    if (S) {
      st(true);
      try {
        await c.updateDefaultEmbeddingProvider({ defaultProvider: D, defaultEmbeddingProvider: S }), l(`\u5DF2\u5C06 "${S}" \u7684 ${(Z == null ? void 0 : Z.embeddingModel) ?? "\u5411\u91CF\u6A21\u578B"} (${(Z == null ? void 0 : Z.embeddingDimensions) ?? 1024}\u7EF4) \u8BBE\u4E3A\u9ED8\u8BA4\u5411\u91CF\u670D\u52A1`), Fe(null), await y();
      } catch (t) {
        console.error("Failed to set embedding default:", t), l(h(t, "\u8BBE\u7F6E\u9ED8\u8BA4\u5411\u91CF\u6A21\u578B\u5931\u8D25"), "error");
      } finally {
        st(false);
      }
    }
  }, _t = (t) => {
    if (!t.rerankModel) {
      l("\u8BE5\u6A21\u578B\u672A\u914D\u7F6E\u91CD\u6392\u6A21\u578B\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1", "error");
      return;
    }
    Me(t.id);
  }, zt = async () => {
    if (_) {
      rt(true);
      try {
        await c.updateDefaultRerankProvider({ defaultProvider: D, defaultEmbeddingProvider: T, defaultRerankProvider: _ }), l(`\u5DF2\u5C06 "${_}" \u8BBE\u4E3A\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1`), Me(null), await y();
      } catch (t) {
        console.error("Failed to set rerank default:", t), l(h(t, "\u8BBE\u7F6E\u9ED8\u8BA4\u91CD\u6392\u6A21\u578B\u5931\u8D25"), "error");
      } finally {
        rt(false);
      }
    }
  }, Ot = () => {
    p ? Et() : Rt();
  }, Ht = () => {
    i && (b({ url: i.url, model: i.model, language: i.language, format: i.format, sampleRate: i.sampleRate, enableTurnDetection: i.enableTurnDetection, turnDetectionType: i.turnDetectionType, turnDetectionThreshold: i.turnDetectionThreshold, turnDetectionSilenceDurationMs: i.turnDetectionSilenceDurationMs }), F("asr"));
  }, Vt = () => {
    o && (k({ model: o.model, voice: o.voice, format: o.format, sampleRate: o.sampleRate, mode: o.mode, languageType: o.languageType, speechRate: o.speechRate, volume: o.volume }), F("tts"));
  }, Wt = async () => {
    ae(true);
    try {
      await c.updateAsrConfig(u), l("ASR \u914D\u7F6E\u5DF2\u66F4\u65B0"), F(null), await y();
    } catch (t) {
      l(h(t, "\u66F4\u65B0\u5931\u8D25"), "error");
    } finally {
      ae(false);
    }
  }, Gt = async () => {
    ae(true);
    try {
      await c.updateTtsConfig(f), l("TTS \u914D\u7F6E\u5DF2\u66F4\u65B0"), F(null), await y();
    } catch (t) {
      l(h(t, "\u66F4\u65B0\u5931\u8D25"), "error");
    } finally {
      ae(false);
    }
  }, qt = async () => {
    it(true), $e(null);
    try {
      const t = await c.testAsr();
      $e(t);
    } catch (t) {
      $e({ success: false, message: h(t, "\u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25"), model: "" });
    } finally {
      it(false);
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto", children: [e.jsx("div", { className: "mb-8", children: e.jsxs("div", { className: "flex items-center gap-4 mb-2", children: [e.jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25", children: e.jsx(Xt, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold text-slate-800 dark:text-white", children: "\u7CFB\u7EDF\u8BBE\u7F6E" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-0.5 text-sm", children: "\u7BA1\u7406\u804A\u5929\u6A21\u578B\u3001\u5411\u91CF\u6A21\u578B\u548C\u6A21\u5757\u914D\u7F6E" })] })] }) }), vt ? e.jsx("div", { className: "flex items-center justify-center py-20", children: e.jsx(w, { className: "w-8 h-8 text-primary-500 animate-spin" }) }) : e.jsx(H, { mode: "wait", children: e.jsxs(n.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.15 }, children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsx("h2", { className: "text-lg font-bold text-slate-800 dark:text-white", children: "\u6A21\u578B\u670D\u52A1" }), m !== "voice" && e.jsxs(n.button, { onClick: () => Ft(m), whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm\r
                      bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25\r
                      hover:from-primary-600 hover:to-primary-700 transition-all`, children: [e.jsx(Yt, { className: "w-4 h-4" }), "\u65B0\u589E\u6A21\u578B"] })] }), e.jsx("div", { className: "mb-4 flex flex-wrap items-center gap-2", children: [{ key: "chat", label: "\u804A\u5929\u6A21\u578B" }, { key: "embedding", label: "\u5411\u91CF\u6A21\u578B" }, { key: "rerank", label: "\u91CD\u6392\u6A21\u578B" }, { key: "voice", label: "\u8BED\u97F3\u670D\u52A1" }].map((t) => e.jsx("button", { onClick: () => Ct(t.key), className: `h-9 rounded-xl px-4 text-sm font-medium transition-colors ${m === t.key ? "bg-primary-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"}`, children: t.label }, t.key)) }), m !== "voice" && (() => {
    const t = v.filter((a) => m === "chat" ? !!a.model : m === "embedding" ? a.supportsEmbedding && !!a.embeddingModel : !!a.rerankModel);
    return t.length === 0 ? e.jsxs("div", { className: "rounded-xl border border-slate-200 bg-white py-16 text-center dark:border-slate-700 dark:bg-slate-800", children: [e.jsx(mt, { className: "mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600" }), e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u8BE5\u7C7B\u578B\u7684\u6A21\u578B\uFF0C\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u65B0\u589E" })] }) : e.jsx("div", { className: "grid grid-cols-1 items-stretch gap-4 md:grid-cols-2", children: t.map((a, r) => {
      const z = Pt(a.id), O = At(a.id), le = jt === a.id, ie = a.supportsEmbedding && !!a.embeddingModel, Jt = [a.model ? a.apiFormat === "anthropic" ? "\u804A\u5929 \xB7 Anthropic" : "\u804A\u5929 \xB7 OpenAI" : null, ie ? "\u5411\u91CF" : null, a.rerankModel ? `\u91CD\u6392 \xB7 ${a.rerankApiFormat === "dashscope" ? "\u767E\u70BC" : "Cohere"}` : null].filter(Boolean).join(" / ") || "\u672A\u914D\u7F6E\u80FD\u529B";
      return e.jsxs(n.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: r * 0.05 }, className: ze, children: [e.jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [e.jsx("div", { className: Oe, children: e.jsx(mt, { className: "h-4 w-4" }) }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("h3", { className: "truncate text-sm font-semibold text-slate-800 dark:text-white", children: a.id }), e.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: Jt })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [m === "chat" && z && e.jsx(V, { icon: e.jsx(xt, { className: "h-3 w-3" }), children: "\u9ED8\u8BA4" }), m === "embedding" && O && e.jsx(V, { icon: e.jsx(ut, { className: "h-3 w-3" }), children: "\u9ED8\u8BA4" }), m === "rerank" && le && e.jsx(V, { icon: e.jsx(bt, { className: "h-3 w-3" }), children: "\u9ED8\u8BA4" })] })] }), e.jsxs("dl", { className: He, children: [e.jsx(d, { label: "Base URL", value: a.baseUrl, title: a.baseUrl, emphasis: true }), e.jsx(d, { label: "\u804A\u5929\u6A21\u578B", value: a.model ?? "\u672A\u914D\u7F6E", title: a.model ?? "\u672A\u914D\u7F6E\u804A\u5929\u6A21\u578B", emphasis: !!a.model }), e.jsx(d, { label: "\u5411\u91CF\u6A21\u578B", value: ie ? "\u652F\u6301" : "\u4E0D\u652F\u6301", title: ie ? a.embeddingModel ?? "" : "\u4E0D\u80FD\u7528\u4E8E\u77E5\u8BC6\u5E93\u5411\u91CF\u5316" }), a.embeddingModel && e.jsx(d, { label: "\u5B9E\u9645\u5411\u91CF", value: a.embeddingModel, title: a.embeddingModel, emphasis: O }), ie && e.jsx(d, { label: "\u5411\u91CF\u7EF4\u5EA6", value: `${a.embeddingDimensions ?? 1024} \u7EF4`, emphasis: O }), a.rerankModel && e.jsx(d, { label: "\u91CD\u6392\u6A21\u578B", value: `${a.rerankModel}\uFF08${a.rerankApiFormat === "dashscope" ? "\u767E\u70BC" : "Cohere"}\uFF09`, title: a.rerankModel, emphasis: le }), a.temperature != null && e.jsx(d, { label: "\u6E29\u5EA6", value: a.temperature }), e.jsx(d, { label: "API Key", value: a.maskedApiKey, title: a.maskedApiKey, monospace: true, emphasis: true })] }), X[a.id] && e.jsx(n.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, className: `mb-3 px-3 py-2 rounded-lg text-xs font-medium ${X[a.id].success ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300" : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"}`, children: e.jsxs("div", { className: "flex items-center gap-1.5", children: [X[a.id].success ? e.jsx(Ke, { className: "w-3.5 h-3.5 flex-shrink-0" }) : e.jsx(Ue, { className: "w-3.5 h-3.5 flex-shrink-0" }), e.jsx("span", { children: X[a.id].message })] }) }), e.jsxs("div", { className: Ve, children: [e.jsxs("button", { onClick: () => Mt(a, m), className: `${j} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`, title: "\u7F16\u8F91", children: [e.jsx(Be, { className: "w-3.5 h-3.5" }), "\u7F16\u8F91"] }), e.jsxs("button", { onClick: () => $t(a.id), disabled: Ze === a.id, className: `${j} text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20`, title: "\u6D4B\u8BD5\u8FDE\u63A5", children: [Ze === a.id ? e.jsx(w, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(ht, { className: "w-3.5 h-3.5" }), "\u6D4B\u8BD5"] }), m === "chat" && e.jsxs("button", { onClick: () => Lt(a.id), disabled: z || Re, className: `${j} text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`, title: z ? "\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4" : "\u5728\u591A\u4E2A\u6A21\u578B\u4E2D\u8BBE\u4E3A\u9ED8\u8BA4", children: [e.jsx(xt, { className: "w-3.5 h-3.5" }), "\u8BBE\u4E3A\u9ED8\u8BA4"] }), m === "embedding" && e.jsxs("button", { onClick: () => Ut(a), disabled: O || Ee, className: `${j} text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`, title: O ? "\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4" : "\u5728\u591A\u4E2A\u6A21\u578B\u4E2D\u8BBE\u4E3A\u9ED8\u8BA4", children: [e.jsx(ut, { className: "w-3.5 h-3.5" }), "\u8BBE\u4E3A\u9ED8\u8BA4"] }), m === "rerank" && e.jsxs("button", { onClick: () => _t(a), disabled: le || Ie, className: `${j} text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`, title: le ? "\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4" : "\u5728\u591A\u4E2A\u6A21\u578B\u4E2D\u8BBE\u4E3A\u9ED8\u8BA4", children: [e.jsx(bt, { className: "w-3.5 h-3.5" }), "\u8BBE\u4E3A\u9ED8\u8BA4"] }), e.jsx("button", { onClick: () => Q(a.id), className: `${j} ml-auto text-slate-400 hover:bg-red-50 hover:text-red-500 dark:text-slate-500 dark:hover:bg-red-900/20 dark:hover:text-red-300`, title: "\u5220\u9664", children: e.jsx(Qt, { className: "w-3.5 h-3.5" }) })] })] }, a.id);
    }) });
  })(), m === "voice" && e.jsxs("div", { className: "mt-6", children: [e.jsx("h2", { className: "text-lg font-bold text-slate-800 dark:text-white mb-4", children: "\u8BED\u97F3\u670D\u52A1" }), e.jsxs("div", { className: "grid grid-cols-1 items-stretch gap-4 md:grid-cols-2", children: [i && e.jsxs(n.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: ze, children: [e.jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [e.jsx("div", { className: Oe, children: e.jsx(pt, { className: "h-4 w-4" }) }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("h3", { className: "truncate text-sm font-semibold text-slate-800 dark:text-white", children: "ASR \u8BED\u97F3\u8BC6\u522B" }), e.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "\u5B9E\u65F6\u8BED\u97F3\u8F6C\u5199\u914D\u7F6E" })] })] }), e.jsx(V, { icon: e.jsx(pt, { className: "h-3 w-3" }), children: "\u8BED\u97F3\u670D\u52A1" })] }), e.jsxs("dl", { className: He, children: [e.jsx(d, { label: "WebSocket URL", value: i.url, title: i.url, emphasis: true }), e.jsx(d, { label: "\u8BC6\u522B\u6A21\u578B", value: i.model, title: i.model, emphasis: true }), e.jsx(d, { label: "\u8BC6\u522B\u8BED\u8A00", value: i.language }), e.jsx(d, { label: "\u91C7\u6837\u7387", value: `${i.sampleRate}Hz` }), e.jsx(d, { label: "API Key", value: i.maskedApiKey, title: i.maskedApiKey, monospace: true, emphasis: true })] }), te && e.jsx("div", { className: `mb-3 px-3 py-2 rounded-lg text-xs font-medium ${te.success ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300" : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"}`, children: e.jsxs("div", { className: "flex items-center gap-1.5", children: [te.success ? e.jsx(Ke, { className: "w-3.5 h-3.5 flex-shrink-0" }) : e.jsx(Ue, { className: "w-3.5 h-3.5 flex-shrink-0" }), e.jsx("span", { children: te.message })] }) }), e.jsxs("div", { className: Ve, children: [e.jsxs("button", { onClick: Ht, className: `${j} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`, children: [e.jsx(Be, { className: "w-3.5 h-3.5" }), "\u7F16\u8F91"] }), e.jsxs("button", { onClick: qt, disabled: lt, className: `${j} text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20`, children: [lt ? e.jsx(w, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(ht, { className: "w-3.5 h-3.5" }), "\u6D4B\u8BD5"] })] })] }), o && e.jsxs(n.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 }, className: ze, children: [e.jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [e.jsx("div", { className: Oe, children: e.jsx(gt, { className: "h-4 w-4" }) }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("h3", { className: "truncate text-sm font-semibold text-slate-800 dark:text-white", children: "TTS \u8BED\u97F3\u5408\u6210" }), e.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "\u6587\u672C\u8F6C\u8BED\u97F3\u8F93\u51FA\u914D\u7F6E" })] })] }), e.jsx(V, { icon: e.jsx(gt, { className: "h-3 w-3" }), children: "\u8BED\u97F3\u670D\u52A1" })] }), e.jsxs("dl", { className: He, children: [e.jsx(d, { label: "\u5408\u6210\u6A21\u578B", value: o.model, title: o.model, emphasis: true }), e.jsx(d, { label: "\u97F3\u8272", value: o.voice, title: o.voice, emphasis: true }), e.jsx(d, { label: "\u91C7\u6837\u7387", value: `${o.sampleRate}Hz` }), e.jsx(d, { label: "\u97F3\u91CF", value: o.volume }), e.jsx(d, { label: "API Key", value: o.maskedApiKey, title: o.maskedApiKey, monospace: true, emphasis: true })] }), e.jsx("div", { className: Ve, children: e.jsxs("button", { onClick: Vt, className: `${j} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`, children: [e.jsx(Be, { className: "w-3.5 h-3.5" }), "\u7F16\u8F91"] }) })] })] })] })] }, "providers") }), e.jsx(H, { children: St && e.jsxs(e.Fragment, { children: [e.jsx(n.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: re, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(n.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-6", children: [e.jsxs("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-5", children: [p ? "\u7F16\u8F91" : "\u65B0\u589E", We[x]] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["\u6A21\u578B ID ", e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsx("input", { type: "text", value: me, onChange: (t) => xe(t.target.value), disabled: !!p, placeholder: "\u81EA\u5B9A\u4E49\u552F\u4E00 ID\uFF0C\u4F8B\u5982: bailian-chat", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow\r
                        disabled:opacity-50 disabled:cursor-not-allowed` })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Base URL ", e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsx("input", { type: "text", value: N, onChange: (t) => ue(t.target.value), placeholder: "\u4F8B\u5982: https://api.openai.com/v1", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["API Key", " ", p && e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539)" }), !p && e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsxs("div", { className: "relative", children: [e.jsx("input", { type: Ce ? "text" : "password", value: C, onChange: (t) => be(t.target.value), placeholder: p ? "\u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C" : "\u8F93\u5165 API Key", className: `w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), e.jsx("button", { type: "button", onClick: () => Se(!Ce), className: `absolute right-3 top-1/2 -translate-y-1/2 text-slate-400\r
                          hover:text-slate-600 dark:hover:text-slate-300 transition-colors`, children: Ce ? e.jsx(Zt, { className: "w-4 h-4" }) : e.jsx(ea, { className: "w-4 h-4" }) })] })] }), x === "chat" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { children: [e.jsxs("div", { className: "mb-1.5 flex items-center justify-between gap-3", children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300", children: "\u804A\u5929\u6A21\u578B" }), e.jsxs("button", { type: "button", onClick: ct, disabled: J, className: `inline-flex h-7 items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 text-xs\r
                          font-medium text-slate-600 transition-colors hover:bg-slate-200\r
                          disabled:cursor-not-allowed disabled:opacity-50\r
                          dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600`, title: "\u4ECE\u8BE5\u7AEF\u70B9\u62C9\u53D6\u53EF\u7528\u6A21\u578B\u5217\u8868", children: [J ? e.jsx(w, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(ft, { className: "w-3.5 h-3.5" }), "\u83B7\u53D6\u6A21\u578B\u5217\u8868"] })] }), e.jsxs("div", { className: "relative", children: [e.jsx("input", { type: "text", value: P, onChange: (t) => {
    G(t.target.value), K(false);
  }, onFocus: () => g.length > 0 && K(true), onBlur: () => setTimeout(() => K(false), 150), placeholder: g.length > 0 ? "\u4ECE\u4E0B\u62C9\u5217\u8868\u9009\u62E9\u6216\u8F93\u5165\u81EA\u5B9A\u4E49\u804A\u5929\u6A21\u578B\u540D" : "\u4F8B\u5982: qwen3.5-flash, deepseek-v4-flash, glm-5", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), g.length > 0 && e.jsx("button", { type: "button", onClick: () => K(!Je), className: `absolute right-3 top-1/2 -translate-y-1/2 text-slate-400\r
                            hover:text-slate-600 dark:hover:text-slate-300 transition-colors`, children: e.jsx(kt, { className: "w-4 h-4" }) }), Je && g.length > 0 && e.jsx("div", { className: `absolute z-10 mt-1 w-full bg-white dark:bg-slate-700\r
                          border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg\r
                          max-h-60 overflow-auto`, children: g.map((t) => e.jsxs("button", { type: "button", onClick: () => {
    G(t.value), K(false);
  }, className: `w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50
                                dark:hover:bg-slate-600 transition-colors flex justify-between items-center
                                ${P === t.value ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-slate-600" : "text-slate-700 dark:text-slate-200"}`, children: [e.jsx("span", { className: "font-mono", children: t.value }), e.jsx("span", { className: "text-xs text-slate-400 dark:text-slate-500 ml-2 whitespace-nowrap", children: t.label })] }, t.value)) })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "\u804A\u5929\u534F\u8BAE\u683C\u5F0F" }), e.jsx("div", { className: "grid grid-cols-2 gap-2", children: [{ value: "openai", label: "OpenAI \u517C\u5BB9", hint: "/chat/completions" }, { value: "anthropic", label: "Anthropic", hint: "/v1/messages" }].map((t) => e.jsxs("button", { type: "button", onClick: () => he(t.value), className: `rounded-xl border px-3 py-2 text-left text-sm transition-colors ${R === t.value ? "border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/30 dark:text-primary-300" : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"}`, children: [e.jsx("span", { className: "block font-medium", children: t.label }), e.jsx("span", { className: "block text-xs text-slate-400 dark:text-slate-500", children: t.hint })] }, t.value)) }), R === "anthropic" && e.jsx("p", { className: "mt-1.5 text-xs text-slate-400 dark:text-slate-500", children: "Anthropic \u534F\u8BAE\u7684 Base URL \u586B\u6839\u5730\u5740\uFF08\u5982 https://api.anthropic.com\uFF09\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u8865 /v1" })] })] }), x === "embedding" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { children: [e.jsxs("div", { className: "mb-1.5 flex items-center justify-between gap-3", children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300", children: ["\u5411\u91CF\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7528\u4E8E\u77E5\u8BC6\u5E93\u5411\u91CF\u5316)" })] }), e.jsxs("button", { type: "button", onClick: ct, disabled: J, className: `inline-flex h-7 items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 text-xs\r
                          font-medium text-slate-600 transition-colors hover:bg-slate-200\r
                          disabled:cursor-not-allowed disabled:opacity-50\r
                          dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600`, title: "\u4ECE\u8BE5\u7AEF\u70B9\u62C9\u53D6\u53EF\u7528\u6A21\u578B\u5217\u8868", children: [J ? e.jsx(w, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(ft, { className: "w-3.5 h-3.5" }), "\u83B7\u53D6\u6A21\u578B\u5217\u8868"] })] }), e.jsxs("div", { className: "relative", children: [e.jsx("input", { type: "text", value: A, onChange: (t) => {
    q(t.target.value), U(false);
  }, onFocus: () => g.length > 0 && U(true), onBlur: () => setTimeout(() => U(false), 150), placeholder: g.length > 0 ? "\u4ECE\u4E0B\u62C9\u5217\u8868\u9009\u62E9\u6216\u8F93\u5165\u81EA\u5B9A\u4E49\u5411\u91CF\u6A21\u578B\u540D" : "\u4F8B\u5982: text-embedding-v3, embedding-3", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), g.length > 0 && e.jsx("button", { type: "button", onClick: () => U(!Xe), className: `absolute right-3 top-1/2 -translate-y-1/2 text-slate-400\r
                            hover:text-slate-600 dark:hover:text-slate-300 transition-colors`, children: e.jsx(kt, { className: "w-4 h-4" }) }), Xe && g.length > 0 && e.jsx("div", { className: `absolute z-10 mt-1 w-full bg-white dark:bg-slate-700\r
                          border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg\r
                          max-h-60 overflow-auto`, children: g.map((t) => e.jsxs("button", { type: "button", onClick: () => {
    q(t.value), U(false);
  }, className: `w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50
                                dark:hover:bg-slate-600 transition-colors flex justify-between items-center
                                ${A === t.value ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-slate-600" : "text-slate-700 dark:text-slate-200"}`, children: [e.jsx("span", { className: "font-mono", children: t.value }), e.jsx("span", { className: "text-xs text-slate-400 dark:text-slate-500 ml-2 whitespace-nowrap", children: t.label })] }, t.value)) })] })] }), x === "embedding" && e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["\u5411\u91CF\u7EF4\u5EA6 ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9700\u4E0E\u5411\u91CF\u5E93\u7EF4\u5EA6\u4E00\u81F4\uFF0C\u9ED8\u8BA4 1024\uFF0C\u53EF\u7528 APP_VECTOR_DIMENSIONS \u914D\u7F6E)" })] }), e.jsx("input", { type: "number", min: 1, value: pe, onChange: (t) => ge(t.target.value), placeholder: "1024", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] })] }), x === "rerank" && e.jsx(e.Fragment, { children: e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["\u91CD\u6392\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7528\u4E8E\u77E5\u8BC6\u5E93\u68C0\u7D22\u91CD\u6392)" })] }), e.jsx("input", { type: "text", value: E, onChange: (t) => ke(t.target.value), placeholder: "\u4F8B\u5982: gte-rerank, jina-reranker-v2-base-multilingual, bge-reranker-v2-m3", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), e.jsx("div", { className: "mt-2 grid grid-cols-2 gap-2", children: [{ value: "cohere", label: "Cohere \u517C\u5BB9", hint: "Jina / SiliconFlow / vLLM" }, { value: "dashscope", label: "\u767E\u70BC\u539F\u751F", hint: "DashScope gte-rerank" }].map((t) => e.jsxs("button", { type: "button", onClick: () => je(t.value), className: `rounded-xl border px-3 py-2 text-left text-sm transition-colors ${ye === t.value ? "border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/30 dark:text-primary-300" : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"}`, children: [e.jsx("span", { className: "block font-medium", children: t.label }), e.jsx("span", { className: "block text-xs text-slate-400 dark:text-slate-500", children: t.hint })] }, t.value)) })] }) }), x === "chat" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Max Tokens ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B)" })] }), e.jsx("input", { type: "number", min: 1, value: I, onChange: (t) => we(t.target.value), placeholder: "\u5982 4096", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Top P ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B)" })] }), e.jsx("input", { type: "number", min: 0, max: 1, step: "0.05", value: $, onChange: (t) => ve(t.target.value), placeholder: "\u5982 0.9", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Temperature ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u53EF\u9009, \u9ED8\u8BA4 0.2)" })] }), e.jsx("input", { type: "text", value: L, onChange: (t) => Ne(t.target.value), placeholder: "\u4F8B\u5982: 0.2, 0.7, 1", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] })] })] }), e.jsxs("div", { className: "flex gap-3 justify-end mt-6", children: [e.jsx(n.button, { onClick: re, disabled: ce, className: `px-5 py-2.5 border border-slate-200 dark:border-slate-600\r
                      text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm\r
                      hover:bg-slate-50 dark:hover:bg-slate-700 transition-all\r
                      disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u53D6\u6D88" }), e.jsx(n.button, { onClick: Ot, disabled: ce, className: `px-5 py-2.5 text-white rounded-xl font-semibold text-sm\r
                      bg-gradient-to-r from-primary-500 to-primary-600\r
                      shadow-lg shadow-primary-500/25\r
                      hover:from-primary-600 hover:to-primary-700\r
                      transition-all disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: ce ? e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx(w, { className: "w-4 h-4 animate-spin" }), "\u4FDD\u5B58\u4E2D..."] }) : "\u4FDD\u5B58" })] })] }) })] }) }), e.jsx(H, { children: ee && e.jsxs(e.Fragment, { children: [e.jsx(n.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => F(null), className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(n.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto", children: [e.jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-5", children: ee === "asr" ? "\u7F16\u8F91 ASR \u8BED\u97F3\u8BC6\u522B" : "\u7F16\u8F91 TTS \u8BED\u97F3\u5408\u6210" }), ee === "asr" ? e.jsxs("div", { className: "space-y-4", children: [e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider", children: "\u8FDE\u63A5\u914D\u7F6E" }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "WebSocket URL" }), e.jsx("input", { type: "text", value: u.url || "", onChange: (t) => b((a) => ({ ...a, url: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Model" }), e.jsx("input", { type: "text", value: u.model || "", onChange: (t) => b((a) => ({ ...a, model: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["API Key ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7559\u7A7A\u4E0D\u6539)" })] }), e.jsx("input", { type: "password", value: u.apiKey || "", onChange: (t) => b((a) => ({ ...a, apiKey: t.target.value })), placeholder: "\u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C", className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Language" }), e.jsx("input", { type: "text", value: u.language || "", onChange: (t) => b((a) => ({ ...a, language: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "\u97F3\u9891\u53C2\u6570" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Format" }), e.jsx("input", { type: "text", value: u.format || "", onChange: (t) => b((a) => ({ ...a, format: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Sample Rate" }), e.jsx("input", { type: "number", value: u.sampleRate || 0, onChange: (t) => b((a) => ({ ...a, sampleRate: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "VAD \u53C2\u6570" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Turn Detection" }), e.jsxs("select", { value: u.enableTurnDetection ? "true" : "false", onChange: (t) => b((a) => ({ ...a, enableTurnDetection: t.target.value === "true" })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow", children: [e.jsx("option", { value: "true", children: "Enabled" }), e.jsx("option", { value: "false", children: "Disabled" })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Detection Type" }), e.jsx("input", { type: "text", value: u.turnDetectionType || "", onChange: (t) => b((a) => ({ ...a, turnDetectionType: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Threshold" }), e.jsx("input", { type: "number", step: "0.1", value: u.turnDetectionThreshold || 0, onChange: (t) => b((a) => ({ ...a, turnDetectionThreshold: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Silence Duration (ms)" }), e.jsx("input", { type: "number", value: u.turnDetectionSilenceDurationMs || 0, onChange: (t) => b((a) => ({ ...a, turnDetectionSilenceDurationMs: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] })] }) : e.jsxs("div", { className: "space-y-4", children: [e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider", children: "\u8FDE\u63A5\u914D\u7F6E" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Model" }), e.jsx("input", { type: "text", value: f.model || "", onChange: (t) => k((a) => ({ ...a, model: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["API Key ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7559\u7A7A\u4E0D\u6539)" })] }), e.jsx("input", { type: "password", value: f.apiKey || "", onChange: (t) => k((a) => ({ ...a, apiKey: t.target.value })), placeholder: "\u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C", className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "\u8BED\u97F3\u53C2\u6570" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Voice" }), e.jsx("input", { type: "text", value: f.voice || "", onChange: (t) => k((a) => ({ ...a, voice: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Format" }), e.jsx("input", { type: "text", value: f.format || "", onChange: (t) => k((a) => ({ ...a, format: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Sample Rate" }), e.jsx("input", { type: "number", value: f.sampleRate || 0, onChange: (t) => k((a) => ({ ...a, sampleRate: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Mode" }), e.jsx("input", { type: "text", value: f.mode || "", onChange: (t) => k((a) => ({ ...a, mode: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Language" }), e.jsx("input", { type: "text", value: f.languageType || "", onChange: (t) => k((a) => ({ ...a, languageType: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "\u8F93\u51FA\u63A7\u5236" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Speech Rate" }), e.jsx("input", { type: "number", step: "0.1", value: f.speechRate || 0, onChange: (t) => k((a) => ({ ...a, speechRate: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Volume" }), e.jsx("input", { type: "number", value: f.volume || 0, onChange: (t) => k((a) => ({ ...a, volume: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] })] }), e.jsxs("div", { className: "flex gap-3 justify-end mt-6", children: [e.jsx(n.button, { onClick: () => F(null), disabled: Le, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u53D6\u6D88" }), e.jsx(n.button, { onClick: ee === "asr" ? Wt : Gt, disabled: Le, className: "px-5 py-2.5 text-white rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: Le ? e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx(w, { className: "w-4 h-4 animate-spin" }), "\u4FDD\u5B58\u4E2D..."] }) : "\u4FDD\u5B58" })] })] }) })] }) }), e.jsx(_e, { open: B !== null, title: "\u8BBE\u4E3A\u9ED8\u8BA4\u804A\u5929\u670D\u52A1", message: `\u786E\u5B9A\u8981\u5C06 "${B ?? ""}" \u8BBE\u4E3A\u9ED8\u8BA4\u804A\u5929\u670D\u52A1\u5417\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u6539\u53D8\u77E5\u8BC6\u5E93\u4F7F\u7528\u7684\u5411\u91CF\u6A21\u578B\u3002`, confirmText: "\u786E\u8BA4\u8BBE\u7F6E", cancelText: "\u53D6\u6D88", loading: Re, onConfirm: Kt, onCancel: () => {
    Re || Ae(null);
  } }), e.jsx(_e, { open: S !== null, title: "\u8BBE\u4E3A\u9ED8\u8BA4\u5411\u91CF\u670D\u52A1", message: `\u786E\u5B9A\u8981\u5C06 "${S ?? ""}" \u7684\u5411\u91CF\u6A21\u578B "${(Z == null ? void 0 : Z.embeddingModel) ?? ""}"\uFF08${(Z == null ? void 0 : Z.embeddingDimensions) ?? 1024}\u7EF4\uFF09\u8BBE\u4E3A\u77E5\u8BC6\u5E93\u9ED8\u8BA4\u5411\u91CF\u670D\u52A1\u5417\uFF1F\u540E\u7EED\u4E0A\u4F20\u548C\u91CD\u65B0\u5411\u91CF\u5316\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u5411\u91CF\u6A21\u578B\uFF0C\u4E0D\u4F1A\u4F7F\u7528\u804A\u5929\u6A21\u578B\u3002`, confirmText: "\u786E\u8BA4\u8BBE\u7F6E", cancelText: "\u53D6\u6D88", loading: Ee, onConfirm: Bt, onCancel: () => {
    Ee || Fe(null);
  } }), e.jsx(_e, { open: _ !== null, title: "\u8BBE\u4E3A\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1", message: `\u786E\u5B9A\u8981\u5C06 "${_ ?? ""}" \u8BBE\u4E3A\u77E5\u8BC6\u5E93\u68C0\u7D22\u7684\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1\u5417\uFF1F\u5411\u91CF\u53EC\u56DE\u540E\u5C06\u4F7F\u7528\u8BE5\u6A21\u578B\u5BF9\u5019\u9009\u7247\u6BB5\u91CD\u6392\uFF0C\u672A\u914D\u7F6E\u6216\u8C03\u7528\u5931\u8D25\u65F6\u81EA\u52A8\u56DE\u9000\u5411\u91CF\u6392\u5E8F\u3002`, confirmText: "\u786E\u8BA4\u8BBE\u7F6E", cancelText: "\u53D6\u6D88", loading: Ie, onConfirm: zt, onCancel: () => {
    Ie || Me(null);
  } }), e.jsx(H, { children: Y && e.jsxs(e.Fragment, { children: [e.jsx(n.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => Q(null), className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(n.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6", children: [e.jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-4", children: "\u5220\u9664\u6A21\u578B" }), e.jsxs("p", { className: "text-slate-600 dark:text-slate-300 mb-6", children: ["\u786E\u5B9A\u8981\u5220\u9664\u6A21\u578B \u201C", Y, "\u201D \u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002 \u5982\u679C\u6709\u6A21\u5757\u6B63\u5728\u4F7F\u7528\u6B64\u6A21\u578B\uFF0C\u8BF7\u5148\u5207\u6362\u5230\u5176\u4ED6\u6A21\u578B\u3002"] }), e.jsxs("div", { className: "flex gap-3 justify-end", children: [e.jsx(n.button, { onClick: () => Q(null), disabled: Pe, className: `px-5 py-2.5 border border-slate-200 dark:border-slate-600\r
                      text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm\r
                      hover:bg-slate-50 dark:hover:bg-slate-700 transition-all\r
                      disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u53D6\u6D88" }), e.jsx(n.button, { onClick: It, disabled: Pe, className: `px-5 py-2.5 text-white rounded-xl font-semibold text-sm\r
                      bg-gradient-to-r from-red-500 to-red-600\r
                      hover:from-red-600 hover:to-red-700\r
                      transition-all disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: Pe ? e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx(w, { className: "w-4 h-4 animate-spin" }), "\u5220\u9664\u4E2D..."] }) : "\u786E\u5B9A\u5220\u9664" })] })] }) })] }) }), e.jsx(H, { children: se && e.jsxs(n.div, { initial: { opacity: 0, y: 50, x: "-50%" }, animate: { opacity: 1, y: 0, x: "-50%" }, exit: { opacity: 0, y: 50, x: "-50%" }, className: `fixed bottom-6 left-1/2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium
              flex items-center gap-2 z-[60] ${se.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`, children: [se.type === "success" ? e.jsx(Ke, { className: "w-4 h-4" }) : e.jsx(Ue, { className: "w-4 h-4" }), se.message] }) })] });
}
export {
  na as default
};
