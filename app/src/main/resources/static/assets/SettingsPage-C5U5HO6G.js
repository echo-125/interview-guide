import { j as e, g as Jt, L as j, A as O, m as i, P as Xt, a9 as ct, aa as mt, D as xt, ab as ut, l as Le, ac as Ke, a8 as Ue, R as bt, r as Yt, M as ht, ad as pt, ae as Qt, I as Zt, af as gt, a as ft } from "./ui-vendor-D79l2AJO.js";
import { r as s } from "./react-vendor-ek4qDQiW.js";
import { l as c } from "./index-ahWF3Ci-.js";
import { C as Be } from "./ConfirmDialog-DJIdcjoY.js";
import "./syntax-highlighter-BG_RSeav.js";
const _e = `flex h-full min-h-[330px] flex-col rounded-xl border border-slate-200
  bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700
  dark:bg-slate-800`, ze = `flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg
  bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-300`, Oe = `mb-4 flex-1 space-y-1 rounded-lg border border-slate-100 bg-slate-50/70
  p-3 dark:border-slate-700/80 dark:bg-slate-900/30`, He = `mt-auto flex min-h-12 flex-wrap items-center gap-2 border-t
  border-slate-100 pt-3 dark:border-slate-700`, y = `inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs
  font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50`, Ve = { chat: "\u804A\u5929\u6A21\u578B", embedding: "\u5411\u91CF\u6A21\u578B", rerank: "\u91CD\u6392\u6A21\u578B" };
function H({ icon: w, children: F }) {
  return e.jsxs("span", { className: "inline-flex h-6 items-center gap-1.5 rounded-full bg-primary-50 px-2.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300", children: [w, F] });
}
function d({ label: w, value: F, title: S, monospace: ne = false, emphasis: D = false }) {
  return e.jsxs("div", { className: `grid grid-cols-[108px_minmax(0,1fr)] items-start gap-3 rounded-md px-2 py-2 text-xs ${D ? "bg-white shadow-sm ring-1 ring-slate-100 dark:bg-slate-800/80 dark:ring-slate-700" : ""}`, children: [e.jsx("dt", { className: "whitespace-nowrap text-slate-500 dark:text-slate-400", children: w }), e.jsx("dd", { className: `min-w-0 truncate text-right font-medium text-slate-700 dark:text-slate-200 ${ne ? "font-mono" : ""}`, title: S, children: F })] });
}
function na() {
  const [w, F] = s.useState([]), [S, ne] = s.useState(""), [D, kt] = s.useState(""), [yt, jt] = s.useState(""), [wt, vt] = s.useState(true), [m, Nt] = s.useState("chat"), [x, We] = s.useState("chat"), [Ct, ie] = s.useState(false), [h, oe] = s.useState(null), [de, V] = s.useState(false), [ce, me] = s.useState(""), [v, xe] = s.useState(""), [N, ue] = s.useState(""), [T, W] = s.useState(""), [M, be] = s.useState("openai"), [P, G] = s.useState(""), [he, pe] = s.useState("1024"), [ge, Ge] = s.useState(false), [E, fe] = s.useState(""), [ke, ye] = s.useState("cohere"), [R, je] = s.useState(""), [I, we] = s.useState(""), [$, ve] = s.useState(""), [Ne, Ce] = s.useState(false), [qe, L] = s.useState(false), [Je, K] = s.useState(false), [Xe, Se] = s.useState([]), [q, Ye] = s.useState(false), p = s.useMemo(() => Xe.map((t) => ({ value: t, label: "\u5728\u7EBF\u83B7\u53D6" })), [Xe]), [Qe, Ze] = s.useState(null), [J, De] = s.useState({}), [X, Y] = s.useState(null), [Te, et] = s.useState(false), [U, Pe] = s.useState(null), [C, Ae] = s.useState(null), [B, Fe] = s.useState(null), [Me, tt] = s.useState(false), [Ee, at] = s.useState(false), [Re, st] = s.useState(false), Q = s.useMemo(() => w.find((t) => t.id === C) ?? null, [C, w]), [n, St] = s.useState(null), [o, Dt] = s.useState(null), [Z, A] = s.useState(null), [rt, lt] = s.useState(false), [ee, Ie] = s.useState(null), [$e, te] = s.useState(false), [u, b] = s.useState({}), [g, f] = s.useState({}), [ae, nt] = s.useState(null), l = s.useCallback((t, a = "success") => {
    nt({ message: t, type: a }), setTimeout(() => nt(null), 3e3);
  }, []), Tt = s.useCallback((t) => S === t, [S]), Pt = s.useCallback((t) => D === t, [D]), k = s.useCallback(async () => {
    try {
      const [t, a, r, _] = await Promise.all([c.list(), c.getDefaultProvider(), c.getAsrConfig(), c.getTtsConfig()]);
      F(t), ne(a.defaultProvider), kt(a.defaultEmbeddingProvider), jt(a.defaultRerankProvider ?? ""), St(r), Dt(_);
    } catch (t) {
      console.error("Failed to load settings:", t), l("\u52A0\u8F7D\u6570\u636E\u5931\u8D25", "error");
    } finally {
      vt(false);
    }
  }, [l]);
  s.useEffect(() => {
    k();
  }, [k]);
  const At = (t) => {
    oe(null), We(t), me(""), xe(""), ue(""), W(""), be("openai"), G(""), pe("1024"), Ge(t === "embedding"), fe(""), ye("cohere"), je(""), we(""), ve(""), Se([]), Ce(false), ie(true);
  }, Ft = (t, a) => {
    oe(t), We(a), me(t.id), xe(t.baseUrl), ue(""), W(t.model ?? ""), be(t.apiFormat || "openai"), G(t.embeddingModel || ""), pe(t.embeddingDimensions != null ? String(t.embeddingDimensions) : "1024"), Ge(t.supportsEmbedding), fe(t.rerankModel ?? ""), ye(t.rerankApiFormat || "cohere"), je(t.maxTokens != null ? String(t.maxTokens) : ""), we(t.topP != null ? String(t.topP) : ""), ve(t.temperature != null ? String(t.temperature) : ""), Se([]), Ce(false), ie(true);
  }, se = () => {
    ie(false), oe(null);
  }, it = ge && !!P.trim(), ot = x === "chat" ? !!T.trim() : x === "embedding" ? !!P.trim() : !!E.trim(), Mt = async () => {
    if (!ce.trim() || !v.trim() || !N.trim()) {
      l("\u8BF7\u586B\u5199\u5FC5\u586B\u5B57\u6BB5", "error");
      return;
    }
    if (!ot) {
      l(`\u8BF7\u586B\u5199${Ve[x]}`, "error");
      return;
    }
    const t = parseInt(he.trim(), 10);
    if (x === "embedding" && (!Number.isFinite(t) || t <= 0)) {
      l("\u5411\u91CF\u7EF4\u5EA6\u5FC5\u987B\u4E3A\u6B63\u6574\u6570\uFF0C\u9700\u4E0E\u5411\u91CF\u5E93\u7EF4\u5EA6\u4E00\u81F4\uFF08\u9ED8\u8BA4 1024\uFF09", "error");
      return;
    }
    V(true);
    try {
      const a = { id: ce.trim(), baseUrl: v.trim(), apiKey: N.trim(), supportsEmbedding: ge, apiFormat: M, rerankApiFormat: ke };
      if (T.trim() && (a.model = T.trim()), it && (a.embeddingModel = P.trim(), a.embeddingDimensions = t), E.trim() && (a.rerankModel = E.trim()), R.trim()) {
        const r = parseInt(R.trim(), 10);
        Number.isFinite(r) && r > 0 && (a.maxTokens = r);
      }
      if (I.trim()) {
        const r = parseFloat(I.trim());
        Number.isFinite(r) && r > 0 && (a.topP = r);
      }
      if ($.trim()) {
        const r = parseFloat($.trim());
        isNaN(r) || (a.temperature = r);
      }
      await c.create(a), l("\u6A21\u578B\u521B\u5EFA\u6210\u529F"), se(), await k();
    } catch (a) {
      console.error("Failed to create provider:", a), l(a instanceof Error ? a.message : "\u521B\u5EFA\u5931\u8D25", "error");
    } finally {
      V(false);
    }
  }, Et = async () => {
    if (!h) return;
    if (!v.trim()) {
      l("\u8BF7\u586B\u5199\u5FC5\u586B\u5B57\u6BB5", "error");
      return;
    }
    if (!ot) {
      l(`\u8BF7\u586B\u5199${Ve[x]}`, "error");
      return;
    }
    const t = parseInt(he.trim(), 10);
    if (x === "embedding" && (!Number.isFinite(t) || t <= 0)) {
      l("\u5411\u91CF\u7EF4\u5EA6\u5FC5\u987B\u4E3A\u6B63\u6574\u6570\uFF0C\u9700\u4E0E\u5411\u91CF\u5E93\u7EF4\u5EA6\u4E00\u81F4\uFF08\u9ED8\u8BA4 1024\uFF09", "error");
      return;
    }
    V(true);
    try {
      const a = { baseUrl: v.trim(), model: T.trim(), apiFormat: M, embeddingModel: P.trim(), supportsEmbedding: ge, rerankModel: E.trim(), rerankApiFormat: ke };
      if (it && (a.embeddingDimensions = t), R.trim()) {
        const r = parseInt(R.trim(), 10);
        Number.isFinite(r) && r > 0 && (a.maxTokens = r);
      }
      if (I.trim()) {
        const r = parseFloat(I.trim());
        Number.isFinite(r) && r > 0 && (a.topP = r);
      }
      if (N.trim() && (a.apiKey = N.trim()), $.trim()) {
        const r = parseFloat($.trim());
        isNaN(r) || (a.temperature = r);
      }
      await c.update(h.id, a), l("\u6A21\u578B\u66F4\u65B0\u6210\u529F"), se(), await k();
    } catch (a) {
      console.error("Failed to update provider:", a), l(a instanceof Error ? a.message : "\u66F4\u65B0\u5931\u8D25", "error");
    } finally {
      V(false);
    }
  }, dt = async () => {
    if (!v.trim() || !N.trim() && !h) {
      l("\u8BF7\u5148\u586B\u5199 Base URL \u548C API Key", "error");
      return;
    }
    Ye(true);
    try {
      const t = await c.fetchModels({ providerId: h == null ? void 0 : h.id, baseUrl: v.trim(), apiKey: N.trim() || void 0, apiFormat: M });
      Se(t ?? []), l((t == null ? void 0 : t.length) ? `\u5DF2\u83B7\u53D6 ${t.length} \u4E2A\u6A21\u578B` : "\u8BE5\u7AEF\u70B9\u672A\u8FD4\u56DE\u6A21\u578B\u5217\u8868");
    } catch (t) {
      console.error("Failed to fetch models:", t), l(t instanceof Error ? t.message : "\u83B7\u53D6\u6A21\u578B\u5217\u8868\u5931\u8D25", "error");
    } finally {
      Ye(false);
    }
  }, Rt = async () => {
    if (X) {
      et(true);
      try {
        await c.delete(X), l("\u6A21\u578B\u5DF2\u5220\u9664"), Y(null), await k();
      } catch (t) {
        console.error("Failed to delete provider:", t), l(t instanceof Error ? t.message : "\u5220\u9664\u5931\u8D25", "error");
      } finally {
        et(false);
      }
    }
  }, It = async (t) => {
    Ze(t), De((a) => {
      const r = { ...a };
      return delete r[t], r;
    });
    try {
      const a = await c.test(t);
      De((r) => ({ ...r, [t]: a }));
    } catch (a) {
      console.error("Test failed:", a), De((r) => ({ ...r, [t]: { success: false, message: a instanceof Error ? a.message : "\u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25", model: "" } }));
    } finally {
      Ze(null);
    }
  }, $t = async (t) => {
    Pe(t);
  }, Lt = async () => {
    if (U) {
      tt(true);
      try {
        await c.updateDefaultProvider({ defaultProvider: U, defaultEmbeddingProvider: D }), l(`\u5DF2\u5C06 "${U}" \u8BBE\u4E3A\u9ED8\u8BA4\u804A\u5929\u670D\u52A1`), Pe(null), await k();
      } catch (t) {
        console.error("Failed to set default:", t), l(t instanceof Error ? t.message : "\u8BBE\u7F6E\u9ED8\u8BA4\u6A21\u578B\u5931\u8D25", "error");
      } finally {
        tt(false);
      }
    }
  }, Kt = async (t) => {
    if (!t.supportsEmbedding || !t.embeddingModel) {
      l("\u8BE5\u6A21\u578B\u4E0D\u652F\u6301\u5411\u91CF\u5316\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u77E5\u8BC6\u5E93\u5411\u91CF\u670D\u52A1", "error");
      return;
    }
    Ae(t.id);
  }, Ut = async () => {
    if (C) {
      at(true);
      try {
        await c.updateDefaultEmbeddingProvider({ defaultProvider: S, defaultEmbeddingProvider: C }), l(`\u5DF2\u5C06 "${C}" \u7684 ${(Q == null ? void 0 : Q.embeddingModel) ?? "\u5411\u91CF\u6A21\u578B"} (${(Q == null ? void 0 : Q.embeddingDimensions) ?? 1024}\u7EF4) \u8BBE\u4E3A\u9ED8\u8BA4\u5411\u91CF\u670D\u52A1`), Ae(null), await k();
      } catch (t) {
        console.error("Failed to set embedding default:", t), l(t instanceof Error ? t.message : "\u8BBE\u7F6E\u9ED8\u8BA4\u5411\u91CF\u6A21\u578B\u5931\u8D25", "error");
      } finally {
        at(false);
      }
    }
  }, Bt = (t) => {
    if (!t.rerankModel) {
      l("\u8BE5\u6A21\u578B\u672A\u914D\u7F6E\u91CD\u6392\u6A21\u578B\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1", "error");
      return;
    }
    Fe(t.id);
  }, _t = async () => {
    if (B) {
      st(true);
      try {
        await c.updateDefaultRerankProvider({ defaultProvider: S, defaultEmbeddingProvider: D, defaultRerankProvider: B }), l(`\u5DF2\u5C06 "${B}" \u8BBE\u4E3A\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1`), Fe(null), await k();
      } catch (t) {
        console.error("Failed to set rerank default:", t), l(t instanceof Error ? t.message : "\u8BBE\u7F6E\u9ED8\u8BA4\u91CD\u6392\u6A21\u578B\u5931\u8D25", "error");
      } finally {
        st(false);
      }
    }
  }, zt = () => {
    h ? Et() : Mt();
  }, Ot = () => {
    n && (b({ url: n.url, model: n.model, language: n.language, format: n.format, sampleRate: n.sampleRate, enableTurnDetection: n.enableTurnDetection, turnDetectionType: n.turnDetectionType, turnDetectionThreshold: n.turnDetectionThreshold, turnDetectionSilenceDurationMs: n.turnDetectionSilenceDurationMs }), A("asr"));
  }, Ht = () => {
    o && (f({ model: o.model, voice: o.voice, format: o.format, sampleRate: o.sampleRate, mode: o.mode, languageType: o.languageType, speechRate: o.speechRate, volume: o.volume }), A("tts"));
  }, Vt = async () => {
    te(true);
    try {
      await c.updateAsrConfig(u), l("ASR \u914D\u7F6E\u5DF2\u66F4\u65B0"), A(null), await k();
    } catch (t) {
      l(t instanceof Error ? t.message : "\u66F4\u65B0\u5931\u8D25", "error");
    } finally {
      te(false);
    }
  }, Wt = async () => {
    te(true);
    try {
      await c.updateTtsConfig(g), l("TTS \u914D\u7F6E\u5DF2\u66F4\u65B0"), A(null), await k();
    } catch (t) {
      l(t instanceof Error ? t.message : "\u66F4\u65B0\u5931\u8D25", "error");
    } finally {
      te(false);
    }
  }, Gt = async () => {
    lt(true), Ie(null);
    try {
      const t = await c.testAsr();
      Ie(t);
    } catch (t) {
      Ie({ success: false, message: t instanceof Error ? t.message : "\u8FDE\u63A5\u6D4B\u8BD5\u5931\u8D25", model: "" });
    } finally {
      lt(false);
    }
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto", children: [e.jsx("div", { className: "mb-8", children: e.jsxs("div", { className: "flex items-center gap-4 mb-2", children: [e.jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25", children: e.jsx(Jt, { className: "w-6 h-6 text-white" }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold text-slate-800 dark:text-white", children: "\u7CFB\u7EDF\u8BBE\u7F6E" }), e.jsx("p", { className: "text-slate-500 dark:text-slate-400 mt-0.5 text-sm", children: "\u7BA1\u7406\u804A\u5929\u6A21\u578B\u3001\u5411\u91CF\u6A21\u578B\u548C\u6A21\u5757\u914D\u7F6E" })] })] }) }), wt ? e.jsx("div", { className: "flex items-center justify-center py-20", children: e.jsx(j, { className: "w-8 h-8 text-primary-500 animate-spin" }) }) : e.jsx(O, { mode: "wait", children: e.jsxs(i.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.15 }, children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsx("h2", { className: "text-lg font-bold text-slate-800 dark:text-white", children: "\u6A21\u578B\u670D\u52A1" }), m !== "voice" && e.jsxs(i.button, { onClick: () => At(m), whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: `flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm\r
                      bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25\r
                      hover:from-primary-600 hover:to-primary-700 transition-all`, children: [e.jsx(Xt, { className: "w-4 h-4" }), "\u65B0\u589E\u6A21\u578B"] })] }), e.jsx("div", { className: "mb-4 flex flex-wrap items-center gap-2", children: [{ key: "chat", label: "\u804A\u5929\u6A21\u578B" }, { key: "embedding", label: "\u5411\u91CF\u6A21\u578B" }, { key: "rerank", label: "\u91CD\u6392\u6A21\u578B" }, { key: "voice", label: "\u8BED\u97F3\u670D\u52A1" }].map((t) => e.jsx("button", { onClick: () => Nt(t.key), className: `h-9 rounded-xl px-4 text-sm font-medium transition-colors ${m === t.key ? "bg-primary-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"}`, children: t.label }, t.key)) }), m !== "voice" && (() => {
    const t = w.filter((a) => m === "chat" ? !!a.model : m === "embedding" ? a.supportsEmbedding && !!a.embeddingModel : !!a.rerankModel);
    return t.length === 0 ? e.jsxs("div", { className: "rounded-xl border border-slate-200 bg-white py-16 text-center dark:border-slate-700 dark:bg-slate-800", children: [e.jsx(ct, { className: "mx-auto mb-3 h-12 w-12 text-slate-300 dark:text-slate-600" }), e.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u8BE5\u7C7B\u578B\u7684\u6A21\u578B\uFF0C\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u65B0\u589E" })] }) : e.jsx("div", { className: "grid grid-cols-1 items-stretch gap-4 md:grid-cols-2", children: t.map((a, r) => {
      const _ = Tt(a.id), z = Pt(a.id), re = yt === a.id, le = a.supportsEmbedding && !!a.embeddingModel, qt = [a.model ? a.apiFormat === "anthropic" ? "\u804A\u5929 \xB7 Anthropic" : "\u804A\u5929 \xB7 OpenAI" : null, le ? "\u5411\u91CF" : null, a.rerankModel ? `\u91CD\u6392 \xB7 ${a.rerankApiFormat === "dashscope" ? "\u767E\u70BC" : "Cohere"}` : null].filter(Boolean).join(" / ") || "\u672A\u914D\u7F6E\u80FD\u529B";
      return e.jsxs(i.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: r * 0.05 }, className: _e, children: [e.jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [e.jsx("div", { className: ze, children: e.jsx(ct, { className: "h-4 w-4" }) }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("h3", { className: "truncate text-sm font-semibold text-slate-800 dark:text-white", children: a.id }), e.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: qt })] })] }), e.jsxs("div", { className: "flex flex-col items-end gap-1", children: [m === "chat" && _ && e.jsx(H, { icon: e.jsx(mt, { className: "h-3 w-3" }), children: "\u9ED8\u8BA4" }), m === "embedding" && z && e.jsx(H, { icon: e.jsx(xt, { className: "h-3 w-3" }), children: "\u9ED8\u8BA4" }), m === "rerank" && re && e.jsx(H, { icon: e.jsx(ut, { className: "h-3 w-3" }), children: "\u9ED8\u8BA4" })] })] }), e.jsxs("dl", { className: Oe, children: [e.jsx(d, { label: "Base URL", value: a.baseUrl, title: a.baseUrl, emphasis: true }), e.jsx(d, { label: "\u804A\u5929\u6A21\u578B", value: a.model ?? "\u672A\u914D\u7F6E", title: a.model ?? "\u672A\u914D\u7F6E\u804A\u5929\u6A21\u578B", emphasis: !!a.model }), e.jsx(d, { label: "\u5411\u91CF\u6A21\u578B", value: le ? "\u652F\u6301" : "\u4E0D\u652F\u6301", title: le ? a.embeddingModel ?? "" : "\u4E0D\u80FD\u7528\u4E8E\u77E5\u8BC6\u5E93\u5411\u91CF\u5316" }), a.embeddingModel && e.jsx(d, { label: "\u5B9E\u9645\u5411\u91CF", value: a.embeddingModel, title: a.embeddingModel, emphasis: z }), le && e.jsx(d, { label: "\u5411\u91CF\u7EF4\u5EA6", value: `${a.embeddingDimensions ?? 1024} \u7EF4`, emphasis: z }), a.rerankModel && e.jsx(d, { label: "\u91CD\u6392\u6A21\u578B", value: `${a.rerankModel}\uFF08${a.rerankApiFormat === "dashscope" ? "\u767E\u70BC" : "Cohere"}\uFF09`, title: a.rerankModel, emphasis: re }), a.temperature != null && e.jsx(d, { label: "\u6E29\u5EA6", value: a.temperature }), e.jsx(d, { label: "API Key", value: a.maskedApiKey, title: a.maskedApiKey, monospace: true, emphasis: true })] }), J[a.id] && e.jsx(i.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, className: `mb-3 px-3 py-2 rounded-lg text-xs font-medium ${J[a.id].success ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300" : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"}`, children: e.jsxs("div", { className: "flex items-center gap-1.5", children: [J[a.id].success ? e.jsx(Le, { className: "w-3.5 h-3.5 flex-shrink-0" }) : e.jsx(Ke, { className: "w-3.5 h-3.5 flex-shrink-0" }), e.jsx("span", { children: J[a.id].message })] }) }), e.jsxs("div", { className: He, children: [e.jsxs("button", { onClick: () => Ft(a, m), className: `${y} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`, title: "\u7F16\u8F91", children: [e.jsx(Ue, { className: "w-3.5 h-3.5" }), "\u7F16\u8F91"] }), e.jsxs("button", { onClick: () => It(a.id), disabled: Qe === a.id, className: `${y} text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20`, title: "\u6D4B\u8BD5\u8FDE\u63A5", children: [Qe === a.id ? e.jsx(j, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(bt, { className: "w-3.5 h-3.5" }), "\u6D4B\u8BD5"] }), m === "chat" && e.jsxs("button", { onClick: () => $t(a.id), disabled: _ || Me, className: `${y} text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`, title: _ ? "\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4" : "\u5728\u591A\u4E2A\u6A21\u578B\u4E2D\u8BBE\u4E3A\u9ED8\u8BA4", children: [e.jsx(mt, { className: "w-3.5 h-3.5" }), "\u8BBE\u4E3A\u9ED8\u8BA4"] }), m === "embedding" && e.jsxs("button", { onClick: () => Kt(a), disabled: z || Ee, className: `${y} text-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`, title: z ? "\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4" : "\u5728\u591A\u4E2A\u6A21\u578B\u4E2D\u8BBE\u4E3A\u9ED8\u8BA4", children: [e.jsx(xt, { className: "w-3.5 h-3.5" }), "\u8BBE\u4E3A\u9ED8\u8BA4"] }), m === "rerank" && e.jsxs("button", { onClick: () => Bt(a), disabled: re || Re, className: `${y} text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-900/20 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent`, title: re ? "\u5F53\u524D\u5DF2\u662F\u9ED8\u8BA4" : "\u5728\u591A\u4E2A\u6A21\u578B\u4E2D\u8BBE\u4E3A\u9ED8\u8BA4", children: [e.jsx(ut, { className: "w-3.5 h-3.5" }), "\u8BBE\u4E3A\u9ED8\u8BA4"] }), e.jsx("button", { onClick: () => Y(a.id), className: `${y} ml-auto text-slate-400 hover:bg-red-50 hover:text-red-500 dark:text-slate-500 dark:hover:bg-red-900/20 dark:hover:text-red-300`, title: "\u5220\u9664", children: e.jsx(Yt, { className: "w-3.5 h-3.5" }) })] })] }, a.id);
    }) });
  })(), m === "voice" && e.jsxs("div", { className: "mt-6", children: [e.jsx("h2", { className: "text-lg font-bold text-slate-800 dark:text-white mb-4", children: "\u8BED\u97F3\u670D\u52A1" }), e.jsxs("div", { className: "grid grid-cols-1 items-stretch gap-4 md:grid-cols-2", children: [n && e.jsxs(i.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, className: _e, children: [e.jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [e.jsx("div", { className: ze, children: e.jsx(ht, { className: "h-4 w-4" }) }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("h3", { className: "truncate text-sm font-semibold text-slate-800 dark:text-white", children: "ASR \u8BED\u97F3\u8BC6\u522B" }), e.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "\u5B9E\u65F6\u8BED\u97F3\u8F6C\u5199\u914D\u7F6E" })] })] }), e.jsx(H, { icon: e.jsx(ht, { className: "h-3 w-3" }), children: "\u8BED\u97F3\u670D\u52A1" })] }), e.jsxs("dl", { className: Oe, children: [e.jsx(d, { label: "WebSocket URL", value: n.url, title: n.url, emphasis: true }), e.jsx(d, { label: "\u8BC6\u522B\u6A21\u578B", value: n.model, title: n.model, emphasis: true }), e.jsx(d, { label: "\u8BC6\u522B\u8BED\u8A00", value: n.language }), e.jsx(d, { label: "\u91C7\u6837\u7387", value: `${n.sampleRate}Hz` }), e.jsx(d, { label: "API Key", value: n.maskedApiKey, title: n.maskedApiKey, monospace: true, emphasis: true })] }), ee && e.jsx("div", { className: `mb-3 px-3 py-2 rounded-lg text-xs font-medium ${ee.success ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300" : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"}`, children: e.jsxs("div", { className: "flex items-center gap-1.5", children: [ee.success ? e.jsx(Le, { className: "w-3.5 h-3.5 flex-shrink-0" }) : e.jsx(Ke, { className: "w-3.5 h-3.5 flex-shrink-0" }), e.jsx("span", { children: ee.message })] }) }), e.jsxs("div", { className: He, children: [e.jsxs("button", { onClick: Ot, className: `${y} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`, children: [e.jsx(Ue, { className: "w-3.5 h-3.5" }), "\u7F16\u8F91"] }), e.jsxs("button", { onClick: Gt, disabled: rt, className: `${y} text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20`, children: [rt ? e.jsx(j, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(bt, { className: "w-3.5 h-3.5" }), "\u6D4B\u8BD5"] })] })] }), o && e.jsxs(i.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.05 }, className: _e, children: [e.jsxs("div", { className: "mb-4 flex items-start justify-between gap-3", children: [e.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [e.jsx("div", { className: ze, children: e.jsx(pt, { className: "h-4 w-4" }) }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("h3", { className: "truncate text-sm font-semibold text-slate-800 dark:text-white", children: "TTS \u8BED\u97F3\u5408\u6210" }), e.jsx("p", { className: "mt-1 text-xs text-slate-500 dark:text-slate-400", children: "\u6587\u672C\u8F6C\u8BED\u97F3\u8F93\u51FA\u914D\u7F6E" })] })] }), e.jsx(H, { icon: e.jsx(pt, { className: "h-3 w-3" }), children: "\u8BED\u97F3\u670D\u52A1" })] }), e.jsxs("dl", { className: Oe, children: [e.jsx(d, { label: "\u5408\u6210\u6A21\u578B", value: o.model, title: o.model, emphasis: true }), e.jsx(d, { label: "\u97F3\u8272", value: o.voice, title: o.voice, emphasis: true }), e.jsx(d, { label: "\u91C7\u6837\u7387", value: `${o.sampleRate}Hz` }), e.jsx(d, { label: "\u97F3\u91CF", value: o.volume }), e.jsx(d, { label: "API Key", value: o.maskedApiKey, title: o.maskedApiKey, monospace: true, emphasis: true })] }), e.jsx("div", { className: He, children: e.jsxs("button", { onClick: Ht, className: `${y} text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700`, children: [e.jsx(Ue, { className: "w-3.5 h-3.5" }), "\u7F16\u8F91"] }) })] })] })] })] }, "providers") }), e.jsx(O, { children: Ct && e.jsxs(e.Fragment, { children: [e.jsx(i.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: se, className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(i.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-6", children: [e.jsxs("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-5", children: [h ? "\u7F16\u8F91" : "\u65B0\u589E", Ve[x]] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["\u6A21\u578B ID ", e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsx("input", { type: "text", value: ce, onChange: (t) => me(t.target.value), disabled: !!h, placeholder: "\u81EA\u5B9A\u4E49\u552F\u4E00 ID\uFF0C\u4F8B\u5982: bailian-chat", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow\r
                        disabled:opacity-50 disabled:cursor-not-allowed` })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Base URL ", e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsx("input", { type: "text", value: v, onChange: (t) => xe(t.target.value), placeholder: "\u4F8B\u5982: https://api.openai.com/v1", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["API Key", " ", h && e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7559\u7A7A\u5219\u4E0D\u4FEE\u6539)" }), !h && e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsxs("div", { className: "relative", children: [e.jsx("input", { type: Ne ? "text" : "password", value: N, onChange: (t) => ue(t.target.value), placeholder: h ? "\u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C" : "\u8F93\u5165 API Key", className: `w-full px-4 py-2.5 pr-10 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), e.jsx("button", { type: "button", onClick: () => Ce(!Ne), className: `absolute right-3 top-1/2 -translate-y-1/2 text-slate-400\r
                          hover:text-slate-600 dark:hover:text-slate-300 transition-colors`, children: Ne ? e.jsx(Qt, { className: "w-4 h-4" }) : e.jsx(Zt, { className: "w-4 h-4" }) })] })] }), x === "chat" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { children: [e.jsxs("div", { className: "mb-1.5 flex items-center justify-between gap-3", children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300", children: "\u804A\u5929\u6A21\u578B" }), e.jsxs("button", { type: "button", onClick: dt, disabled: q, className: `inline-flex h-7 items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 text-xs\r
                          font-medium text-slate-600 transition-colors hover:bg-slate-200\r
                          disabled:cursor-not-allowed disabled:opacity-50\r
                          dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600`, title: "\u4ECE\u8BE5\u7AEF\u70B9\u62C9\u53D6\u53EF\u7528\u6A21\u578B\u5217\u8868", children: [q ? e.jsx(j, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(gt, { className: "w-3.5 h-3.5" }), "\u83B7\u53D6\u6A21\u578B\u5217\u8868"] })] }), e.jsxs("div", { className: "relative", children: [e.jsx("input", { type: "text", value: T, onChange: (t) => {
    W(t.target.value), L(false);
  }, onFocus: () => p.length > 0 && L(true), onBlur: () => setTimeout(() => L(false), 150), placeholder: p.length > 0 ? "\u4ECE\u4E0B\u62C9\u5217\u8868\u9009\u62E9\u6216\u8F93\u5165\u81EA\u5B9A\u4E49\u804A\u5929\u6A21\u578B\u540D" : "\u4F8B\u5982: qwen3.5-flash, deepseek-v4-flash, glm-5", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), p.length > 0 && e.jsx("button", { type: "button", onClick: () => L(!qe), className: `absolute right-3 top-1/2 -translate-y-1/2 text-slate-400\r
                            hover:text-slate-600 dark:hover:text-slate-300 transition-colors`, children: e.jsx(ft, { className: "w-4 h-4" }) }), qe && p.length > 0 && e.jsx("div", { className: `absolute z-10 mt-1 w-full bg-white dark:bg-slate-700\r
                          border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg\r
                          max-h-60 overflow-auto`, children: p.map((t) => e.jsxs("button", { type: "button", onClick: () => {
    W(t.value), L(false);
  }, className: `w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50
                                dark:hover:bg-slate-600 transition-colors flex justify-between items-center
                                ${T === t.value ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-slate-600" : "text-slate-700 dark:text-slate-200"}`, children: [e.jsx("span", { className: "font-mono", children: t.value }), e.jsx("span", { className: "text-xs text-slate-400 dark:text-slate-500 ml-2 whitespace-nowrap", children: t.label })] }, t.value)) })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "\u804A\u5929\u534F\u8BAE\u683C\u5F0F" }), e.jsx("div", { className: "grid grid-cols-2 gap-2", children: [{ value: "openai", label: "OpenAI \u517C\u5BB9", hint: "/chat/completions" }, { value: "anthropic", label: "Anthropic", hint: "/v1/messages" }].map((t) => e.jsxs("button", { type: "button", onClick: () => be(t.value), className: `rounded-xl border px-3 py-2 text-left text-sm transition-colors ${M === t.value ? "border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/30 dark:text-primary-300" : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"}`, children: [e.jsx("span", { className: "block font-medium", children: t.label }), e.jsx("span", { className: "block text-xs text-slate-400 dark:text-slate-500", children: t.hint })] }, t.value)) }), M === "anthropic" && e.jsx("p", { className: "mt-1.5 text-xs text-slate-400 dark:text-slate-500", children: "Anthropic \u534F\u8BAE\u7684 Base URL \u586B\u6839\u5730\u5740\uFF08\u5982 https://api.anthropic.com\uFF09\uFF0C\u7CFB\u7EDF\u81EA\u52A8\u8865 /v1" })] })] }), x === "embedding" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { children: [e.jsxs("div", { className: "mb-1.5 flex items-center justify-between gap-3", children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300", children: ["\u5411\u91CF\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7528\u4E8E\u77E5\u8BC6\u5E93\u5411\u91CF\u5316)" })] }), e.jsxs("button", { type: "button", onClick: dt, disabled: q, className: `inline-flex h-7 items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 text-xs\r
                          font-medium text-slate-600 transition-colors hover:bg-slate-200\r
                          disabled:cursor-not-allowed disabled:opacity-50\r
                          dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600`, title: "\u4ECE\u8BE5\u7AEF\u70B9\u62C9\u53D6\u53EF\u7528\u6A21\u578B\u5217\u8868", children: [q ? e.jsx(j, { className: "w-3.5 h-3.5 animate-spin" }) : e.jsx(gt, { className: "w-3.5 h-3.5" }), "\u83B7\u53D6\u6A21\u578B\u5217\u8868"] })] }), e.jsxs("div", { className: "relative", children: [e.jsx("input", { type: "text", value: P, onChange: (t) => {
    G(t.target.value), K(false);
  }, onFocus: () => p.length > 0 && K(true), onBlur: () => setTimeout(() => K(false), 150), placeholder: p.length > 0 ? "\u4ECE\u4E0B\u62C9\u5217\u8868\u9009\u62E9\u6216\u8F93\u5165\u81EA\u5B9A\u4E49\u5411\u91CF\u6A21\u578B\u540D" : "\u4F8B\u5982: text-embedding-v3, embedding-3", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), p.length > 0 && e.jsx("button", { type: "button", onClick: () => K(!Je), className: `absolute right-3 top-1/2 -translate-y-1/2 text-slate-400\r
                            hover:text-slate-600 dark:hover:text-slate-300 transition-colors`, children: e.jsx(ft, { className: "w-4 h-4" }) }), Je && p.length > 0 && e.jsx("div", { className: `absolute z-10 mt-1 w-full bg-white dark:bg-slate-700\r
                          border border-slate-200 dark:border-slate-600 rounded-xl shadow-lg\r
                          max-h-60 overflow-auto`, children: p.map((t) => e.jsxs("button", { type: "button", onClick: () => {
    G(t.value), K(false);
  }, className: `w-full px-4 py-2.5 text-left text-sm hover:bg-primary-50
                                dark:hover:bg-slate-600 transition-colors flex justify-between items-center
                                ${P === t.value ? "text-primary-600 dark:text-primary-400 font-medium bg-primary-50 dark:bg-slate-600" : "text-slate-700 dark:text-slate-200"}`, children: [e.jsx("span", { className: "font-mono", children: t.value }), e.jsx("span", { className: "text-xs text-slate-400 dark:text-slate-500 ml-2 whitespace-nowrap", children: t.label })] }, t.value)) })] })] }), x === "embedding" && e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["\u5411\u91CF\u7EF4\u5EA6 ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9700\u4E0E\u5411\u91CF\u5E93\u7EF4\u5EA6\u4E00\u81F4\uFF0C\u9ED8\u8BA4 1024\uFF0C\u53EF\u7528 APP_VECTOR_DIMENSIONS \u914D\u7F6E)" })] }), e.jsx("input", { type: "number", min: 1, value: he, onChange: (t) => pe(t.target.value), placeholder: "1024", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] })] }), x === "rerank" && e.jsx(e.Fragment, { children: e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["\u91CD\u6392\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7528\u4E8E\u77E5\u8BC6\u5E93\u68C0\u7D22\u91CD\u6392)" })] }), e.jsx("input", { type: "text", value: E, onChange: (t) => fe(t.target.value), placeholder: "\u4F8B\u5982: gte-rerank, jina-reranker-v2-base-multilingual, bge-reranker-v2-m3", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), e.jsx("div", { className: "mt-2 grid grid-cols-2 gap-2", children: [{ value: "cohere", label: "Cohere \u517C\u5BB9", hint: "Jina / SiliconFlow / vLLM" }, { value: "dashscope", label: "\u767E\u70BC\u539F\u751F", hint: "DashScope gte-rerank" }].map((t) => e.jsxs("button", { type: "button", onClick: () => ye(t.value), className: `rounded-xl border px-3 py-2 text-left text-sm transition-colors ${ke === t.value ? "border-primary-400 bg-primary-50 text-primary-700 dark:border-primary-500 dark:bg-primary-900/30 dark:text-primary-300" : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700"}`, children: [e.jsx("span", { className: "block font-medium", children: t.label }), e.jsx("span", { className: "block text-xs text-slate-400 dark:text-slate-500", children: t.hint })] }, t.value)) })] }) }), x === "chat" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Max Tokens ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B)" })] }), e.jsx("input", { type: "number", min: 1, value: R, onChange: (t) => je(t.target.value), placeholder: "\u5982 4096", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Top P ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B)" })] }), e.jsx("input", { type: "number", min: 0, max: 1, step: "0.05", value: I, onChange: (t) => we(t.target.value), placeholder: "\u5982 0.9", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                          bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                          placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                          focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["Temperature ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u53EF\u9009, \u9ED8\u8BA4 0.2)" })] }), e.jsx("input", { type: "text", value: $, onChange: (t) => ve(t.target.value), placeholder: "\u4F8B\u5982: 0.2, 0.7, 1", className: `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600\r
                        bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white\r
                        placeholder:text-slate-400 focus:outline-none focus:ring-2\r
                        focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` })] })] })] }), e.jsxs("div", { className: "flex gap-3 justify-end mt-6", children: [e.jsx(i.button, { onClick: se, disabled: de, className: `px-5 py-2.5 border border-slate-200 dark:border-slate-600\r
                      text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm\r
                      hover:bg-slate-50 dark:hover:bg-slate-700 transition-all\r
                      disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u53D6\u6D88" }), e.jsx(i.button, { onClick: zt, disabled: de, className: `px-5 py-2.5 text-white rounded-xl font-semibold text-sm\r
                      bg-gradient-to-r from-primary-500 to-primary-600\r
                      shadow-lg shadow-primary-500/25\r
                      hover:from-primary-600 hover:to-primary-700\r
                      transition-all disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: de ? e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx(j, { className: "w-4 h-4 animate-spin" }), "\u4FDD\u5B58\u4E2D..."] }) : "\u4FDD\u5B58" })] })] }) })] }) }), e.jsx(O, { children: Z && e.jsxs(e.Fragment, { children: [e.jsx(i.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => A(null), className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(i.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-lg w-full p-6 max-h-[85vh] overflow-y-auto", children: [e.jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-5", children: Z === "asr" ? "\u7F16\u8F91 ASR \u8BED\u97F3\u8BC6\u522B" : "\u7F16\u8F91 TTS \u8BED\u97F3\u5408\u6210" }), Z === "asr" ? e.jsxs("div", { className: "space-y-4", children: [e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider", children: "\u8FDE\u63A5\u914D\u7F6E" }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "WebSocket URL" }), e.jsx("input", { type: "text", value: u.url || "", onChange: (t) => b((a) => ({ ...a, url: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Model" }), e.jsx("input", { type: "text", value: u.model || "", onChange: (t) => b((a) => ({ ...a, model: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["API Key ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7559\u7A7A\u4E0D\u6539)" })] }), e.jsx("input", { type: "password", value: u.apiKey || "", onChange: (t) => b((a) => ({ ...a, apiKey: t.target.value })), placeholder: "\u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C", className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Language" }), e.jsx("input", { type: "text", value: u.language || "", onChange: (t) => b((a) => ({ ...a, language: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "\u97F3\u9891\u53C2\u6570" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Format" }), e.jsx("input", { type: "text", value: u.format || "", onChange: (t) => b((a) => ({ ...a, format: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Sample Rate" }), e.jsx("input", { type: "number", value: u.sampleRate || 0, onChange: (t) => b((a) => ({ ...a, sampleRate: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "VAD \u53C2\u6570" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Turn Detection" }), e.jsxs("select", { value: u.enableTurnDetection ? "true" : "false", onChange: (t) => b((a) => ({ ...a, enableTurnDetection: t.target.value === "true" })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow", children: [e.jsx("option", { value: "true", children: "Enabled" }), e.jsx("option", { value: "false", children: "Disabled" })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Detection Type" }), e.jsx("input", { type: "text", value: u.turnDetectionType || "", onChange: (t) => b((a) => ({ ...a, turnDetectionType: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Threshold" }), e.jsx("input", { type: "number", step: "0.1", value: u.turnDetectionThreshold || 0, onChange: (t) => b((a) => ({ ...a, turnDetectionThreshold: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Silence Duration (ms)" }), e.jsx("input", { type: "number", value: u.turnDetectionSilenceDurationMs || 0, onChange: (t) => b((a) => ({ ...a, turnDetectionSilenceDurationMs: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] })] }) : e.jsxs("div", { className: "space-y-4", children: [e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider", children: "\u8FDE\u63A5\u914D\u7F6E" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Model" }), e.jsx("input", { type: "text", value: g.model || "", onChange: (t) => f((a) => ({ ...a, model: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsxs("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: ["API Key ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u7559\u7A7A\u4E0D\u6539)" })] }), e.jsx("input", { type: "password", value: g.apiKey || "", onChange: (t) => f((a) => ({ ...a, apiKey: t.target.value })), placeholder: "\u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C", className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "\u8BED\u97F3\u53C2\u6570" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Voice" }), e.jsx("input", { type: "text", value: g.voice || "", onChange: (t) => f((a) => ({ ...a, voice: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Format" }), e.jsx("input", { type: "text", value: g.format || "", onChange: (t) => f((a) => ({ ...a, format: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Sample Rate" }), e.jsx("input", { type: "number", value: g.sampleRate || 0, onChange: (t) => f((a) => ({ ...a, sampleRate: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Mode" }), e.jsx("input", { type: "text", value: g.mode || "", onChange: (t) => f((a) => ({ ...a, mode: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Language" }), e.jsx("input", { type: "text", value: g.languageType || "", onChange: (t) => f((a) => ({ ...a, languageType: t.target.value })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] }), e.jsx("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-2", children: "\u8F93\u51FA\u63A7\u5236" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Speech Rate" }), e.jsx("input", { type: "number", step: "0.1", value: g.speechRate || 0, onChange: (t) => f((a) => ({ ...a, speechRate: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5", children: "Volume" }), e.jsx("input", { type: "number", value: g.volume || 0, onChange: (t) => f((a) => ({ ...a, volume: Number(t.target.value) })), className: "w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow" })] })] })] }), e.jsxs("div", { className: "flex gap-3 justify-end mt-6", children: [e.jsx(i.button, { onClick: () => A(null), disabled: $e, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u53D6\u6D88" }), e.jsx(i.button, { onClick: Z === "asr" ? Vt : Wt, disabled: $e, className: "px-5 py-2.5 text-white rounded-xl font-semibold text-sm bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg shadow-primary-500/25 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: $e ? e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx(j, { className: "w-4 h-4 animate-spin" }), "\u4FDD\u5B58\u4E2D..."] }) : "\u4FDD\u5B58" })] })] }) })] }) }), e.jsx(Be, { open: U !== null, title: "\u8BBE\u4E3A\u9ED8\u8BA4\u804A\u5929\u670D\u52A1", message: `\u786E\u5B9A\u8981\u5C06 "${U ?? ""}" \u8BBE\u4E3A\u9ED8\u8BA4\u804A\u5929\u670D\u52A1\u5417\uFF1F\u8BE5\u64CD\u4F5C\u4E0D\u4F1A\u6539\u53D8\u77E5\u8BC6\u5E93\u4F7F\u7528\u7684\u5411\u91CF\u6A21\u578B\u3002`, confirmText: "\u786E\u8BA4\u8BBE\u7F6E", cancelText: "\u53D6\u6D88", loading: Me, onConfirm: Lt, onCancel: () => {
    Me || Pe(null);
  } }), e.jsx(Be, { open: C !== null, title: "\u8BBE\u4E3A\u9ED8\u8BA4\u5411\u91CF\u670D\u52A1", message: `\u786E\u5B9A\u8981\u5C06 "${C ?? ""}" \u7684\u5411\u91CF\u6A21\u578B "${(Q == null ? void 0 : Q.embeddingModel) ?? ""}"\uFF08${(Q == null ? void 0 : Q.embeddingDimensions) ?? 1024}\u7EF4\uFF09\u8BBE\u4E3A\u77E5\u8BC6\u5E93\u9ED8\u8BA4\u5411\u91CF\u670D\u52A1\u5417\uFF1F\u540E\u7EED\u4E0A\u4F20\u548C\u91CD\u65B0\u5411\u91CF\u5316\u4F1A\u4F7F\u7528\u8FD9\u4E2A\u5411\u91CF\u6A21\u578B\uFF0C\u4E0D\u4F1A\u4F7F\u7528\u804A\u5929\u6A21\u578B\u3002`, confirmText: "\u786E\u8BA4\u8BBE\u7F6E", cancelText: "\u53D6\u6D88", loading: Ee, onConfirm: Ut, onCancel: () => {
    Ee || Ae(null);
  } }), e.jsx(Be, { open: B !== null, title: "\u8BBE\u4E3A\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1", message: `\u786E\u5B9A\u8981\u5C06 "${B ?? ""}" \u8BBE\u4E3A\u77E5\u8BC6\u5E93\u68C0\u7D22\u7684\u9ED8\u8BA4\u91CD\u6392\u670D\u52A1\u5417\uFF1F\u5411\u91CF\u53EC\u56DE\u540E\u5C06\u4F7F\u7528\u8BE5\u6A21\u578B\u5BF9\u5019\u9009\u7247\u6BB5\u91CD\u6392\uFF0C\u672A\u914D\u7F6E\u6216\u8C03\u7528\u5931\u8D25\u65F6\u81EA\u52A8\u56DE\u9000\u5411\u91CF\u6392\u5E8F\u3002`, confirmText: "\u786E\u8BA4\u8BBE\u7F6E", cancelText: "\u53D6\u6D88", loading: Re, onConfirm: _t, onCancel: () => {
    Re || Fe(null);
  } }), e.jsx(O, { children: X && e.jsxs(e.Fragment, { children: [e.jsx(i.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, onClick: () => Y(null), className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50" }), e.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4", children: e.jsxs(i.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, onClick: (t) => t.stopPropagation(), className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6", children: [e.jsx("h3", { className: "text-xl font-bold text-slate-900 dark:text-white mb-4", children: "\u5220\u9664\u6A21\u578B" }), e.jsxs("p", { className: "text-slate-600 dark:text-slate-300 mb-6", children: ["\u786E\u5B9A\u8981\u5220\u9664\u6A21\u578B \u201C", X, "\u201D \u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002 \u5982\u679C\u6709\u6A21\u5757\u6B63\u5728\u4F7F\u7528\u6B64\u6A21\u578B\uFF0C\u8BF7\u5148\u5207\u6362\u5230\u5176\u4ED6\u6A21\u578B\u3002"] }), e.jsxs("div", { className: "flex gap-3 justify-end", children: [e.jsx(i.button, { onClick: () => Y(null), disabled: Te, className: `px-5 py-2.5 border border-slate-200 dark:border-slate-600\r
                      text-slate-600 dark:text-slate-300 rounded-xl font-medium text-sm\r
                      hover:bg-slate-50 dark:hover:bg-slate-700 transition-all\r
                      disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u53D6\u6D88" }), e.jsx(i.button, { onClick: Rt, disabled: Te, className: `px-5 py-2.5 text-white rounded-xl font-semibold text-sm\r
                      bg-gradient-to-r from-red-500 to-red-600\r
                      hover:from-red-600 hover:to-red-700\r
                      transition-all disabled:opacity-50 disabled:cursor-not-allowed`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: Te ? e.jsxs("span", { className: "flex items-center gap-2", children: [e.jsx(j, { className: "w-4 h-4 animate-spin" }), "\u5220\u9664\u4E2D..."] }) : "\u786E\u5B9A\u5220\u9664" })] })] }) })] }) }), e.jsx(O, { children: ae && e.jsxs(i.div, { initial: { opacity: 0, y: 50, x: "-50%" }, animate: { opacity: 1, y: 0, x: "-50%" }, exit: { opacity: 0, y: 50, x: "-50%" }, className: `fixed bottom-6 left-1/2 px-5 py-3 rounded-xl shadow-lg text-sm font-medium
              flex items-center gap-2 z-[60] ${ae.type === "success" ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`, children: [ae.type === "success" ? e.jsx(Le, { className: "w-4 h-4" }) : e.jsx(Ke, { className: "w-4 h-4" }), ae.message] }) })] });
}
export {
  na as default
};
