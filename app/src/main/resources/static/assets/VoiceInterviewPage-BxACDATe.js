import { j as t, M as He, a0 as nt, A as Le, m as ee, k as ze, Z as at, n as ct, a1 as lt, a2 as it, a3 as ot } from "./ui-vendor-D79l2AJO.js";
import { r, b as ut, u as dt } from "./react-vendor-ek4qDQiW.js";
import { a as _e, s as ft } from "./index-ahWF3Ci-.js";
import { I as Ce, a as mt } from "./InterviewPageHeader-WHjtOE0h.js";
import { g as xt } from "./voiceInterview-B6Enqy4T.js";
import { v as ne, c as ht } from "./voiceInterview-DaxB5Ok2.js";
import "./syntax-highlighter-BG_RSeav.js";
function pt({ isRecording: l, disabled: h = false, onRecordingChange: E, onAudioData: L, onSpeechStart: R, onSpeechEnd: C }) {
  const { showToast: _ } = _e(), [V, S] = r.useState(0), te = r.useRef(null), f = r.useRef(null), I = r.useRef(null), T = r.useRef(null), M = r.useRef(null), H = r.useRef(null), O = r.useRef(null), x = r.useRef(true), q = r.useRef(false), o = r.useRef(false), N = 16e3, k = (m = true) => {
    var _a, _b;
    if (q.current = false, M.current) {
      try {
        M.current.pause(), (_b = (_a = M.current).destroy) == null ? void 0 : _b.call(_a);
      } catch {
      }
      M.current = null;
    }
    if (T.current && (clearInterval(T.current), T.current = null), H.current) {
      try {
        H.current.port.onmessage = null, H.current.disconnect();
      } catch {
      }
      H.current = null;
    }
    if (O.current) {
      try {
        O.current.disconnect();
      } catch {
      }
      O.current = null;
    }
    if (I.current) {
      try {
        I.current.disconnect();
      } catch {
      }
      I.current = null;
    }
    if (te.current && (te.current.getTracks().forEach((c) => c.stop()), te.current = null), f.current) {
      try {
        f.current.close();
      } catch {
      }
      f.current = null;
    }
    m && S(0);
  }, ae = (m) => {
    const c = new Uint8Array(m);
    let b = "";
    const P = 32768;
    for (let g = 0; g < c.length; g += P) {
      const p = c.subarray(g, g + P);
      b += String.fromCharCode(...p);
    }
    return btoa(b);
  }, G = async () => {
    if (!o.current) {
      o.current = true;
      try {
        if (!window.AudioContext) throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 AudioWorklet\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7248 Chrome/Edge");
        const m = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: N } });
        if (!x.current) {
          m.getTracks().forEach((J) => J.stop()), o.current = false;
          return;
        }
        if (te.current = m, !window.vad || !window.vad.MicVAD) throw new Error("VAD library not loaded. Please refresh the page.");
        const c = await window.vad.MicVAD.new({ getStream: async () => m, onnxWASMBasePath: "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/", baseAssetPath: "https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.29/dist/", onSpeechStart: () => {
          x.current && (R == null ? void 0 : R());
        }, onSpeechEnd: () => {
          x.current && (C == null ? void 0 : C());
        } });
        if (M.current = c, await c.start(), !x.current) {
          k(false), o.current = false;
          return;
        }
        const b = new AudioContext({ sampleRate: N });
        if (!b.audioWorklet) throw await b.close(), new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 AudioWorklet\uFF0C\u8BF7\u4F7F\u7528\u65B0\u7248 Chrome/Edge");
        const P = b.createMediaStreamSource(m), g = b.createAnalyser();
        g.fftSize = 256, P.connect(g), f.current = b, I.current = g;
        const p = new Uint8Array(g.frequencyBinCount);
        if (T.current = setInterval(() => {
          if (!x.current || !I.current) return;
          g.getByteFrequencyData(p);
          const J = p.reduce((ce, D) => ce + D) / p.length;
          S(J);
        }, 100), await b.audioWorklet.addModule("/audio-worklet/pcm-processor.js"), !x.current) {
          k(false), o.current = false;
          return;
        }
        const F = new AudioWorkletNode(b, "pcm-processor");
        H.current = F, q.current = true, F.port.onmessage = (J) => {
          if (!x.current || !q.current || !H.current) return;
          const ce = J.data, D = ae(ce);
          L(D);
        };
        const u = b.createGain();
        u.gain.value = 0, O.current = u, P.connect(F), F.connect(u), u.connect(b.destination), o.current = false, x.current && E(true);
      } catch (m) {
        if (o.current = false, k(x.current), !x.current) return;
        console.error("Error accessing microphone:", m);
        const c = m instanceof Error ? m.message : "\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF0C\u8BF7\u68C0\u67E5\u6743\u9650\u8BBE\u7F6E";
        _(c, "error");
      }
    }
  }, U = () => {
    o.current = false, k(x.current), l && E(false);
  };
  r.useEffect(() => (x.current = true, () => {
    x.current = false, U();
  }), []), r.useEffect(() => {
    (h || !l) && q.current && (k(x.current), l && E(false));
  }, [h, l, E]);
  const ge = () => {
    h && !l || (l ? U() : G());
  };
  return t.jsxs("div", { className: "relative flex items-center justify-center", children: [l && t.jsx("div", { className: "absolute rounded-full border border-primary-500/50 pointer-events-none transition-all duration-75", style: { width: `${100 + V / 255 * 100}%`, height: `${100 + V / 255 * 100}%`, opacity: Math.max(0, 1 - V / 255 * 1.5) } }), t.jsx("button", { "data-testid": "voice-recorder-toggle", onClick: ge, disabled: h && !l, className: `
          relative z-10 w-16 h-16 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-xl
          ${h && !l ? "opacity-50 cursor-not-allowed shadow-none" : ""}
          ${l ? "bg-primary-500 hover:bg-primary-600 shadow-primary-500/40" : "bg-slate-700 hover:bg-slate-600 shadow-slate-900/50"}
        `, title: h && !l ? "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D" : l ? "\u505C\u6B62\u5F55\u97F3" : "\u5F00\u59CB\u8BF4\u8BDD", children: l ? t.jsx(He, { className: "w-7 h-7 text-white" }) : t.jsx(nt, { className: "w-7 h-7 text-slate-300" }) })] });
}
function bt({ messages: l, userText: h, aiText: E, isAiSpeaking: L }) {
  const R = r.useRef(null), C = E.trim(), _ = [...l].reverse().find((S) => S.role === "ai"), V = L && !!C && (_ == null ? void 0 : _.text.trim()) !== C.trim();
  return r.useEffect(() => {
    R.current && (R.current.scrollTop = R.current.scrollHeight);
  }, [l, h, C]), t.jsxs("div", { className: "flex flex-col h-full bg-white dark:bg-slate-800 overflow-hidden", children: [t.jsxs("div", { className: "px-5 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between bg-slate-50 dark:bg-slate-800/80", children: [t.jsx("h4", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 tracking-wide", children: "\u5BF9\u8BDD\u5B9E\u5F55" }), t.jsxs("div", { className: "flex items-center gap-3", children: [L && t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" }), t.jsx("span", { className: "text-[10px] uppercase tracking-wider text-primary-400 font-semibold", children: "AI \u8BF4" })] }), h && t.jsxs("div", { className: "flex items-center gap-1.5", children: [t.jsx("span", { className: "w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" }), t.jsx("span", { className: "text-[10px] uppercase tracking-wider text-green-400 font-semibold", children: "\u4F60\u5728\u8BF4" })] })] })] }), t.jsx("div", { ref: R, className: "flex-1 min-h-0 overflow-y-auto p-5 space-y-5 scroll-smooth", children: t.jsxs(Le, { initial: false, children: [l.map((S) => t.jsx("div", { children: t.jsx(Ce, { role: S.role === "user" ? "user" : "interviewer", text: S.text }) }, S.id)), V && t.jsx(ee.div, { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, children: t.jsx(Ce, { role: "interviewer", text: C, highlight: true, suffix: t.jsx(ee.span, { className: "inline-block w-1.5 h-1.5 bg-primary-500 ml-1.5 rounded-full", animate: { opacity: [1, 0.25, 1] }, transition: { duration: 0.9, repeat: 1 / 0 } }) }) }, "active-ai"), h && t.jsx(Ce, { role: "user", text: h, highlight: true, italic: true, suffix: t.jsx("span", { className: "ml-1 animate-pulse", children: "..." }) }), l.length === 0 && !h && !E && t.jsxs(ee.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "h-full flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 py-12", children: [t.jsx("div", { className: "w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-600", children: t.jsx("svg", { className: "w-5 h-5 text-slate-400 dark:text-slate-500", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }) }) }), t.jsx("p", { className: "text-sm", children: "\u9762\u8BD5\u5373\u5C06\u5F00\u59CB\uFF0C\u8BF7\u51C6\u5907" })] })] }) })] });
}
function Nt() {
  const l = ut(), h = dt(), { showToast: E } = _e(), L = h.state || {}, R = L.voiceSessionId, C = new URLSearchParams(h.search), _ = C.get("skillId") || void 0, V = C.get("difficulty") || void 0, S = Number(C.get("duration") || C.get("plannedDuration")), te = _ ? { skillId: _, difficulty: V, techEnabled: true, projectEnabled: true, hrEnabled: true, plannedDuration: Number.isFinite(S) && S > 0 ? S : 15 } : void 0, f = L.voiceConfig ?? te, I = (f == null ? void 0 : f.skillId) ?? _ ?? "java-backend", [T, M] = r.useState(false), [H, O] = r.useState(0), [x, q] = r.useState("INTRO"), [o, N] = r.useState("disconnected"), [k, ae] = r.useState(""), [G, U] = r.useState(""), [ge, m] = r.useState([]), [c, b] = r.useState(false), [P, g] = r.useState(""), [p, ye] = r.useState(null), [F, u] = r.useState(null), [J, ce] = r.useState(""), [D, Ve] = r.useState(false), [re, v] = r.useState(false), [we, Oe] = r.useState([]), B = r.useRef(null), y = r.useRef(null), ke = r.useRef(null), oe = r.useRef(null), ue = r.useRef(false), ve = r.useRef(false), de = r.useRef(false), Ae = r.useRef(false), je = r.useRef(false), se = r.useRef(false), Ee = r.useRef(""), Q = r.useRef(null), fe = r.useRef(null), le = r.useRef(null), me = r.useRef([]), xe = r.useRef(false), Se = r.useRef(null), $ = r.useRef(null), Ne = r.useRef("");
  r.useEffect(() => {
    Ne.current = G;
  }, [G]), r.useEffect(() => {
    Ae.current = re;
  }, [re]);
  const w = r.useCallback((e) => {
    de.current = e, b(e);
  }, []), A = r.useCallback((e) => {
    je.current = e, Ve(e);
  }, []), j = r.useCallback(() => {
    Q.current && (clearTimeout(Q.current), Q.current = null);
  }, []), Z = r.useCallback(() => {
    fe.current && (clearTimeout(fe.current), fe.current = null);
  }, []), K = r.useCallback((e) => {
    const s = (e || "").trim();
    !s || s === Ee.current || (m((n) => {
      const a = n[n.length - 1];
      return (a == null ? void 0 : a.role) === "ai" && a.text.trim() === s ? n : [...n, { role: "ai", text: s, id: `ai-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }];
    }), Ee.current = s, U((n) => (n == null ? void 0 : n.trim()) === s ? "" : n));
  }, []), Ie = r.useCallback((e) => {
    try {
      const s = atob(e.slice(0, 128)), n = new Uint8Array(s.length);
      for (let i = 0; i < s.length; i++) n[i] = s.charCodeAt(i);
      if (n.length < 44) return 15e3;
      const a = new DataView(n.buffer), d = a.getUint32(28, true), X = a.getUint32(40, true);
      return d <= 0 || X <= 0 ? 15e3 : Math.ceil(X / d * 1e3);
    } catch {
      return 15e3;
    }
  }, []), ie = r.useCallback(() => {
    se.current = false, Z(), w(false), A(false), j(), K(Ne.current.trim()), U(""), g("");
  }, [Z, j, K, w, A]), he = r.useCallback(() => ((!le.current || le.current.state === "closed") && (le.current = new AudioContext({ sampleRate: 24e3 })), le.current), []), Re = r.useCallback(() => {
    if (me.current.length === 0) {
      xe.current = false;
      return;
    }
    xe.current = true;
    const e = he();
    e.state === "suspended" && e.resume();
    const s = me.current.shift(), n = e.createBufferSource();
    n.buffer = s, n.connect(e.destination), Se.current = n, n.onended = () => {
      Se.current = null, Re();
    }, n.start(0);
  }, [he]), pe = r.useCallback(() => {
    const e = Date.now(), s = 3e4;
    $.current && clearInterval($.current), $.current = setInterval(() => {
      me.current.length === 0 && !xe.current ? (clearInterval($.current), $.current = null, w(false), A(false), j(), K(Ne.current.trim()), U("")) : Date.now() - e > s && (clearInterval($.current), $.current = null, w(false), A(false));
    }, 100);
  }, [j, K, w, A]), Te = r.useCallback((e, s, n) => {
    try {
      se.current = false, j();
      const a = atob(e), d = new Uint8Array(a.length);
      for (let z = 0; z < a.length; z++) d[z] = a.charCodeAt(z);
      const X = 44, i = new Int16Array(d.buffer, X, (d.length - X) / 2), W = new Float32Array(i.length);
      for (let z = 0; z < i.length; z++) W[z] = i[z] / 32768;
      const Be = he().createBuffer(1, W.length, 24e3);
      Be.getChannelData(0).set(W), me.current.push(Be), xe.current || Re(), w(true), n && pe();
    } catch (a) {
      console.error("[ChunkAudio] Decode/play error:", a);
    }
  }, [he, Re, pe, w]);
  r.useEffect(() => {
    ft.listSkills().then(Oe).catch(console.error);
  }, []), r.useEffect(() => {
    we.length > 0 && I && ce(xt(I, we));
  }, [we, I]), r.useEffect(() => () => {
    var _a, _b;
    B.current && clearInterval(B.current), y.current && (y.current.destroy(), y.current = null), Z(), (_a = Se.current) == null ? void 0 : _a.stop(), (_b = le.current) == null ? void 0 : _b.close(), $.current && (clearInterval($.current), $.current = null), j();
    const e = p;
    e && !ve.current && ne.pauseSession(e).catch(() => {
    });
  }, [Z, j, p]), r.useEffect(() => (p && o === "connected" ? qe() : B.current && clearInterval(B.current), () => {
    B.current && clearInterval(B.current);
  }), [p, o]), r.useEffect(() => {
    if (P && ke.current) {
      const e = ke.current.play();
      e !== void 0 && e.catch(() => {
        u("\u8BF7\u70B9\u51FB\u9875\u9762\u4EFB\u610F\u4F4D\u7F6E\u4EE5\u542F\u7528\u97F3\u9891\u64AD\u653E"), ie();
      });
    }
  }, [P, ie]);
  const qe = () => {
    B.current = setInterval(() => {
      O((e) => e + 1);
    }, 1e3);
  }, Ge = (e) => {
    const s = Math.floor(e / 60), n = e % 60;
    return `${s.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
  }, Fe = (e) => ({ INTRO: "\u81EA\u6211\u4ECB\u7ECD", TECH: "\u6280\u672F\u95EE\u9898", PROJECT: "\u9879\u76EE\u6DF1\u6316", HR: "HR\u95EE\u9898" })[e] || e, Je = r.useCallback(() => {
    if (!y.current || !y.current.isConnected() || !k.trim() || de.current || D) return;
    M(false), A(true);
    const e = k.trim();
    m((s) => [...s, { role: "user", text: e, id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }]), ae(""), y.current.sendControl("submit", { text: e });
  }, [k, D, A]), Me = r.useCallback(() => ({ onOpen: () => {
    N("connected"), v(false);
  }, onMessage: () => {
  }, onSubtitle: (e, s) => {
    !s && (je.current || de.current) || (s && e.trim() ? (m((n) => {
      const a = n[n.length - 1];
      return (a == null ? void 0 : a.role) === "user" && a.text.trim() === e.trim() ? n : [...n, { role: "user", text: e.trim(), id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` }];
    }), ae("")) : ae(e));
  }, onAudioResponse: (e, s) => {
    const n = !!(e && e.length > 0), a = (s || "").trim();
    if (n) {
      j(), Z(), se.current = false, g(e), U(a), w(true);
      const d = Ie(e);
      fe.current = setTimeout(ie, Math.min(Math.max(d + 1500, 4e3), 6e4));
      return;
    }
    if (g(""), U(a), w(false), !a) {
      A(false);
      return;
    }
    j(), Q.current = setTimeout(() => {
      K(a), A(false), w(false), Q.current = null;
    }, 2500);
  }, onTextResponse: (e, s) => {
    const n = (e || "").trim();
    n && (se.current = s, U(n), w(true), s && (j(), Q.current = setTimeout(() => {
      se.current && (se.current = false), K(n), A(false), w(false), Q.current = null;
    }, 15e3)));
  }, onClose: (e) => {
    N("disconnected"), v(false), j(), e.code !== 1e3 && u("\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5");
  }, onError: () => {
    j(), Z(), u("WebSocket \u8FDE\u63A5\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u91CD\u8BD5"), N("disconnected"), v(false);
  }, onAudioChunk: (e, s, n) => {
    Te(e, s, n);
  }, onControl: (e, s) => {
    if (e === "asr_ready") {
      v(true), u(null);
      return;
    }
    if (e === "asr_reconnecting") {
      v(false), s && u(s);
      return;
    }
    if (e === "audio_complete") {
      pe();
      return;
    }
    if (e === "pause_timeout_warning" && s) {
      u(s);
      return;
    }
    e === "pause_timeout" && s && (u(s), N("disconnected"), v(false));
  }, onErrorMessage: (e) => {
    u(e || "\u8BED\u97F3\u9762\u8BD5\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5"), e.includes("\u8BED\u97F3\u8BC6\u522B") && v(false);
  } }), [Z, j, K, Ie, ie, Te, pe, w, A]), be = r.useCallback((e, s) => {
    v(false), setTimeout(() => {
      try {
        y.current = ht(e, s, Me());
      } catch (n) {
        u("\u65E0\u6CD5\u5EFA\u7ACB WebSocket \u8FDE\u63A5: " + (n instanceof Error ? n.message : "\u672A\u77E5\u9519\u8BEF")), N("disconnected"), v(false);
      }
    }, 500);
  }, [Me]), Pe = r.useCallback((e) => `${window.location.protocol === "https:" ? "wss:" : "ws:"}//${window.location.host}/ws/voice-interview/${e}`, []), De = r.useCallback(async (e) => {
    u(null), N("connecting"), v(false);
    try {
      const s = await ne.createSession({ skillId: e.skillId, difficulty: e.difficulty, introEnabled: false, techEnabled: e.techEnabled, projectEnabled: e.projectEnabled, hrEnabled: e.hrEnabled, plannedDuration: e.plannedDuration, resumeId: e.resumeId, llmProvider: e.llmProvider });
      ye(s.sessionId), q(s.currentPhase);
      const n = s.webSocketUrl || Pe(s.sessionId);
      be(s.sessionId, n);
    } catch (s) {
      const n = s instanceof Error ? s.message : "\u521B\u5EFA\u9762\u8BD5\u4F1A\u8BDD\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5";
      u(n), N("disconnected"), v(false), E("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25\uFF1A" + n, "error");
    }
  }, [be]), $e = r.useCallback(async (e) => {
    var _a, _b;
    u(null), N("connecting"), v(false);
    try {
      const [s, n] = await Promise.all([ne.resumeSession(e), ne.getMessages(e)]);
      if (ye(s.sessionId), q(s.currentPhase), s.startTime) {
        const i = Math.floor((Date.now() - new Date(s.startTime).getTime()) / 1e3);
        O(i > 0 ? i : 0);
      }
      const a = [];
      let d = null;
      for (const i of n) {
        const W = (_a = i.aiGeneratedText) == null ? void 0 : _a.trim(), Y = (_b = i.userRecognizedText) == null ? void 0 : _b.trim();
        if (d) {
          a.push({ role: "ai", text: d.text, id: d.id }), d = null, Y && a.push({ role: "user", text: Y, id: `user-${i.id}` }), W && (d = { text: W, id: `ai-${i.id}` });
          continue;
        }
        W && Y ? (a.push({ role: "ai", text: W, id: `ai-${i.id}` }), a.push({ role: "user", text: Y, id: `user-${i.id}` })) : W ? d = { text: W, id: `ai-${i.id}` } : Y && a.push({ role: "user", text: Y, id: `user-${i.id}` });
      }
      d && a.push({ role: "ai", text: d.text, id: d.id }), m(a);
      const X = s.webSocketUrl || Pe(s.sessionId);
      be(s.sessionId, X);
    } catch (s) {
      u(s instanceof Error ? s.message : "\u6062\u590D\u4F1A\u8BDD\u5931\u8D25"), N("disconnected"), v(false);
    }
  }, [be]);
  r.useEffect(() => {
    ue.current || (f ? (ue.current = true, De({ skillId: f.skillId, difficulty: f.difficulty, techEnabled: f.techEnabled, projectEnabled: f.projectEnabled, hrEnabled: f.hrEnabled, plannedDuration: f.plannedDuration, resumeId: f.resumeId, llmProvider: f.llmProvider })) : R && (ue.current = true, $e(R)));
  }, [De, $e, f, R]);
  const Qe = (e) => {
    de.current || je.current || Ae.current && (y.current && y.current.isConnected() ? y.current.sendAudio(e) : u("\u672A\u8FDE\u63A5\u5230\u670D\u52A1\u5668\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u91CD\u8BD5"));
  }, Ze = () => {
  }, Ke = () => {
  }, Xe = async (e) => {
    p && (e === "short" ? (M(false), oe.current = setTimeout(() => {
      We();
    }, 5 * 60 * 1e3)) : await We());
  }, We = async () => {
    if (ve.current = true, oe.current && (clearTimeout(oe.current), oe.current = null), y.current && y.current.disconnect(), T && M(false), !!p) try {
      await ne.pauseSession(p), l("/interviews");
    } catch {
      E("\u6682\u505C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    }
  }, Ye = async () => {
    if (ve.current = true, B.current && clearInterval(B.current), y.current && y.current.disconnect(), p) try {
      await ne.endSession(p);
    } catch (e) {
      console.error("Failed to end session:", e);
    }
    l("/interviews");
  }, et = () => {
    l("/history");
  }, Ue = !!k.trim() && !c && !D && o === "connected", tt = o === "connected" && re && !c && !D, rt = o !== "connected" ? "\u6B63\u5728\u8FDE\u63A5\u670D\u52A1\u5668..." : re ? c ? "\u9762\u8BD5\u5B98\u6B63\u5728\u56DE\u7B54..." : D ? "\u6B63\u5728\u601D\u8003..." : T ? "\u6B63\u5728\u8046\u542C\uFF0C\u8BF4\u5B8C\u540E\u70B9\u51FB\u63D0\u4EA4\u56DE\u7B54..." : "\u70B9\u51FB\u9EA6\u514B\u98CE\u5F00\u59CB\u53D1\u8A00" : "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D...", st = c ? "\u9762\u8BD5\u5B98\u6B63\u5728\u56DE\u7B54..." : D ? "\u6B63\u5728\u601D\u8003..." : o !== "connected" ? "\u6B63\u5728\u8FDE\u63A5\u670D\u52A1\u5668" : re ? T ? "\u8BF4\u5B8C\u540E\u70B9\u51FB\u63D0\u4EA4\u56DE\u7B54" : "\u70B9\u51FB\u9EA6\u514B\u98CE\u53D1\u8A00" : "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D";
  return !ue.current && !f && !R ? t.jsx("div", { className: "min-h-[60vh] flex items-center justify-center p-6", children: t.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-8 text-center max-w-md w-full", children: [t.jsx(ze, { className: "w-12 h-12 text-yellow-500 mx-auto mb-4" }), t.jsx("p", { className: "text-slate-700 dark:text-slate-200 text-lg font-semibold mb-2", children: "\u672A\u68C0\u6D4B\u5230\u8BED\u97F3\u9762\u8BD5\u914D\u7F6E" }), t.jsx("p", { className: "text-slate-500 dark:text-slate-400 text-sm mb-6", children: '\u8BF7\u4ECE\u9762\u8BD5\u8BB0\u5F55\u6216"\u8BED\u97F3\u9762\u8BD5"\u5165\u53E3\u5F00\u59CB' }), t.jsx("button", { onClick: et, className: "px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors", children: "\u8FD4\u56DE\u91CD\u65B0\u5F00\u59CB" })] }) }) : t.jsxs("div", { className: "pb-10", children: [t.jsxs("div", { className: "max-w-7xl mx-auto", children: [t.jsx(mt, { title: "\u8BED\u97F3\u6A21\u62DF\u9762\u8BD5", subtitle: "\u5B9E\u65F6\u8BED\u97F3\u5BF9\u8BDD\uFF0C\u9762\u8BD5\u5B98\u4F1A\u6839\u636E\u4F60\u7684\u56DE\u7B54\u6301\u7EED\u8FFD\u95EE", icon: t.jsx(He, { className: "w-6 h-6 text-white" }) }), F && t.jsxs("div", { className: "mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 px-4 py-3 rounded-xl flex items-center gap-2", children: [t.jsx(ze, { className: "w-4 h-4" }), t.jsx("span", { className: "text-sm", children: F })] }), t.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [t.jsxs("div", { className: "xl:col-span-2 space-y-6", children: [t.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6", children: [t.jsxs("div", { className: "flex items-center justify-between mb-6 flex-wrap gap-3", children: [t.jsxs("div", { className: "flex items-center gap-3", children: [t.jsx("button", { onClick: () => l("/interviews"), className: "w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center", title: "\u8FD4\u56DE\u9762\u8BD5\u8BB0\u5F55", children: t.jsx(at, { className: "w-4 h-4" }) }), t.jsxs("div", { children: [t.jsx("h2", { className: "text-lg font-semibold text-slate-900 dark:text-white", children: J || I }), t.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [t.jsx("span", { className: "text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 rounded-full", children: Fe(x) }), t.jsx("span", { className: "text-xs text-slate-500 dark:text-slate-400", children: o === "connected" ? re ? "\u8BED\u97F3\u8BC6\u522B\u5C31\u7EEA" : "\u8BED\u97F3\u8BC6\u522B\u51C6\u5907\u4E2D" : o === "connecting" ? "\u8FDE\u63A5\u4E2D" : "\u8FDE\u63A5\u65AD\u5F00" })] })] })] }), t.jsxs("div", { className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200", children: [t.jsx(ct, { className: "w-4 h-4" }), t.jsx("span", { className: "font-mono text-sm tabular-nums", children: Ge(H) })] })] }), t.jsxs("div", { className: "flex flex-col items-center justify-center py-6", children: [t.jsx(ee.div, { animate: c ? { scale: [1, 1.05, 1] } : {}, transition: { repeat: 1 / 0, duration: 2 }, className: `w-32 h-32 rounded-full border-4 flex items-center justify-center mb-6 transition-colors
                    ${c ? "border-primary-500 bg-primary-50 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60"}`, children: t.jsx(lt, { className: `w-14 h-14 ${c ? "text-primary-500" : "text-slate-400 dark:text-slate-500"}` }) }), t.jsx("div", { className: "w-full max-w-2xl min-h-[130px] rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 px-6 py-5 text-center flex items-center justify-center", children: t.jsx(Le, { mode: "wait", children: c || G ? t.jsx(ee.p, { "data-testid": "voice-current-ai-text", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed", children: G || "\u601D\u8003\u4E2D..." }, "ai-active") : k ? t.jsx(ee.p, { "data-testid": "voice-current-user-text", initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0 }, className: "text-lg md:text-xl font-medium text-primary-600 dark:text-primary-300 italic leading-relaxed", children: k }, "user-active") : t.jsx(ee.p, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-slate-500 dark:text-slate-400", children: rt }, "idle") }) })] })] }), t.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-5", children: [t.jsxs("div", { className: "flex items-center justify-center gap-6", children: [t.jsx("button", { onClick: () => {
    const e = window.confirm(`\u6682\u505C\u9762\u8BD5\uFF1F
\u786E\u5B9A = \u77ED\u6682\u505C\uFF085\u5206\u949F\uFF09
\u53D6\u6D88 = \u79BB\u5F00\u5E76\u4FDD\u5B58`);
    Xe(e ? "short" : "long");
  }, disabled: o !== "connected", className: "px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors disabled:opacity-50", title: "\u6682\u505C", children: "\u6682\u505C" }), t.jsx(pt, { isRecording: T, disabled: !T && !tt, onRecordingChange: M, onAudioData: Qe, onSpeechStart: Ze, onSpeechEnd: Ke }), t.jsx("button", { "data-testid": "voice-submit-answer", onClick: Je, disabled: !Ue, className: `px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${Ue ? "bg-primary-500 text-white hover:bg-primary-600 shadow-md shadow-primary-500/30" : "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 cursor-not-allowed"}`, title: "\u63D0\u4EA4\u56DE\u7B54", children: t.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [t.jsx(it, { className: "w-4 h-4" }), "\u63D0\u4EA4\u56DE\u7B54"] }) }), t.jsx("button", { "data-testid": "voice-end-interview", onClick: Ye, disabled: o !== "connected", className: "px-4 py-2 rounded-xl bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors disabled:opacity-50", title: "\u7ED3\u675F\u9762\u8BD5", children: t.jsxs("span", { className: "inline-flex items-center gap-1", children: [t.jsx(ot, { className: "w-4 h-4" }), "\u7ED3\u675F"] }) })] }), t.jsx("p", { className: "text-center text-xs text-slate-500 dark:text-slate-400 mt-3", children: st })] })] }), t.jsx("div", { className: "h-[520px] md:h-[560px] xl:h-[calc(100vh-240px)] xl:max-h-[760px] bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden", children: t.jsx(bt, { messages: ge, userText: k, aiText: G, isAiSpeaking: c }) })] })] }), P && t.jsx("audio", { ref: ke, src: `data:audio/wav;base64,${P}`, onEnded: () => {
    ie();
  }, onPlay: () => w(true), autoPlay: true, style: { display: "none" } })] });
}
export {
  Nt as default
};
