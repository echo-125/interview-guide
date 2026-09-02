const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/UploadPage-cGcxxqph.js","assets/ui-vendor-D79l2AJO.js","assets/react-vendor-ek4qDQiW.js","assets/resume-CeEi11Jc.js","assets/FileUploadCard-Cj6RTU_p.js","assets/syntax-highlighter-BG_RSeav.js","assets/HistoryPage-wbfUAEb_.js","assets/DeleteConfirmDialog-DPzJH835.js","assets/ConfirmDialog-DJIdcjoY.js","assets/date-DBJmXC5z.js","assets/score-3bjDqiWg.js","assets/ResumeDetailPage-Buh1jQH4.js","assets/LineChart-DHmYT-uS.js","assets/InterviewDetailPanel-ZEaa4FTU.js","assets/InterviewPage-DMV-vcJo.js","assets/interview-BsOMBsdV.js","assets/index-qDlAe4C1.js","assets/InterviewPageHeader-WHjtOE0h.js","assets/InterviewHistoryPage-CXuQWOw3.js","assets/voiceInterview-DaxB5Ok2.js","assets/voiceEvaluationStatus-B6NgctRI.js","assets/voiceInterview-B6Enqy4T.js","assets/KnowledgeBaseQueryPage-C32ZahwH.js","assets/knowledgebase-Y9TBTJU4.js","assets/KnowledgeBaseUploadPage-yyxF2ldy.js","assets/KnowledgeBaseManagePage-BR0g1NOq.js","assets/KnowledgeBaseInterviewLandingPage-DtK0UBJi.js","assets/questionGenerationStatus-CaIzfcYa.js","assets/KnowledgeBaseInterviewQuestionsPage-LC1FgbiS.js","assets/KnowledgeBaseInterviewSessionPage-eQamn9C_.js","assets/VoiceInterviewPage-BxACDATe.js","assets/VoiceInterviewEvaluationPage-CiOFPOwf.js","assets/InterviewSchedulePage-BQpdCZv4.js","assets/InterviewSchedulePage-EFYCALuo.css","assets/InterviewHubPage-BQmOGbtm.js","assets/SettingsPage-C5U5HO6G.js"])))=>i.map(i=>d[i]);
import { j as a, A as De, m as G, S as Ee, X as ar, F as ir, M as or, L as Fe, C as lr, a as cr, b as Ct, c as dr, d as ur, U as fr, e as mr, D as pr, B as hr, f as xr, g as gr, h as br } from "./ui-vendor-D79l2AJO.js";
import { a as wr, r as b, R as K, u as Ke, b as B, L as tt, O as yr, B as vr, c as kr, d as k, N as Te, e as fe, f as Tt, __tla as __tla_0 } from "./react-vendor-ek4qDQiW.js";
import { _ as R } from "./syntax-highlighter-BG_RSeav.js";
let en, We, Nn, Ln, X, Rn, _a, On, Ve, Ia, et, Pn, er, v, yt, An;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
    new MutationObserver((n) => {
      for (const i of n) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function r(n) {
      const i = {};
      return n.integrity && (i.integrity = n.integrity), n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy), n.crossOrigin === "use-credentials" ? i.credentials = "include" : n.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function s(n) {
      if (n.ep) return;
      n.ep = true;
      const i = r(n);
      fetch(n.href, i);
    }
  })();
  var ze = {}, rt = wr;
  ze.createRoot = rt.createRoot, ze.hydrateRoot = rt.hydrateRoot;
  function jr() {
    const [e, t] = b.useState(() => {
      const s = localStorage.getItem("theme");
      return s || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });
    return b.useEffect(() => {
      const s = document.documentElement;
      e === "dark" ? s.classList.add("dark") : s.classList.remove("dark"), localStorage.setItem("theme", e);
    }, [
      e
    ]), {
      theme: e,
      toggleTheme: () => {
        t((s) => s === "light" ? "dark" : "light");
      }
    };
  }
  function Ot(e, t) {
    return function() {
      return e.apply(t, arguments);
    };
  }
  const { toString: Sr } = Object.prototype, { getPrototypeOf: Xe } = Object, { iterator: Oe, toStringTag: Pt } = Symbol, Pe = /* @__PURE__ */ ((e) => (t) => {
    const r = Sr.call(t);
    return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
  })(/* @__PURE__ */ Object.create(null)), M = (e) => (e = e.toLowerCase(), (t) => Pe(t) === e), _e = (e) => (t) => typeof t === e, { isArray: ae } = Array, ne = _e("undefined");
  function me(e) {
    return e !== null && !ne(e) && e.constructor !== null && !ne(e.constructor) && _(e.constructor.isBuffer) && e.constructor.isBuffer(e);
  }
  const _t = M("ArrayBuffer");
  function Er(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _t(e.buffer), t;
  }
  const Rr = _e("string"), _ = _e("function"), It = _e("number"), pe = (e) => e !== null && typeof e == "object", Nr = (e) => e === true || e === false, ke = (e) => {
    if (Pe(e) !== "object") return false;
    const t = Xe(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Pt in e) && !(Oe in e);
  }, Cr = (e) => {
    if (!pe(e) || me(e)) return false;
    try {
      return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
    } catch {
      return false;
    }
  }, Tr = M("Date"), Or = M("File"), Pr = M("Blob"), _r = M("FileList"), Ir = (e) => pe(e) && _(e.pipe), Ar = (e) => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || _(e.append) && ((t = Pe(e)) === "formdata" || t === "object" && _(e.toString) && e.toString() === "[object FormData]"));
  }, Lr = M("URLSearchParams"), [Dr, Br, Mr, Ur] = [
    "ReadableStream",
    "Request",
    "Response",
    "Headers"
  ].map(M), Fr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  function he(e, t, { allOwnKeys: r = false } = {}) {
    if (e === null || typeof e > "u") return;
    let s, n;
    if (typeof e != "object" && (e = [
      e
    ]), ae(e)) for (s = 0, n = e.length; s < n; s++) t.call(null, e[s], s, e);
    else {
      if (me(e)) return;
      const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
      let d;
      for (s = 0; s < o; s++) d = i[s], t.call(null, e[d], d, e);
    }
  }
  function At(e, t) {
    if (me(e)) return null;
    t = t.toLowerCase();
    const r = Object.keys(e);
    let s = r.length, n;
    for (; s-- > 0; ) if (n = r[s], t === n.toLowerCase()) return n;
    return null;
  }
  const Q = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Lt = (e) => !ne(e) && e !== Q;
  function $e() {
    const { caseless: e, skipUndefined: t } = Lt(this) && this || {}, r = {}, s = (n, i) => {
      const o = e && At(r, i) || i;
      ke(r[o]) && ke(n) ? r[o] = $e(r[o], n) : ke(n) ? r[o] = $e({}, n) : ae(n) ? r[o] = n.slice() : (!t || !ne(n)) && (r[o] = n);
    };
    for (let n = 0, i = arguments.length; n < i; n++) arguments[n] && he(arguments[n], s);
    return r;
  }
  const zr = (e, t, r, { allOwnKeys: s } = {}) => (he(t, (n, i) => {
    r && _(n) ? e[i] = Ot(n, r) : e[i] = n;
  }, {
    allOwnKeys: s
  }), e), $r = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), qr = (e, t, r, s) => {
    e.prototype = Object.create(t.prototype, s), e.prototype.constructor = e, Object.defineProperty(e, "super", {
      value: t.prototype
    }), r && Object.assign(e.prototype, r);
  }, Hr = (e, t, r, s) => {
    let n, i, o;
    const d = {};
    if (t = t || {}, e == null) return t;
    do {
      for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; ) o = n[i], (!s || s(o, e, t)) && !d[o] && (t[o] = e[o], d[o] = true);
      e = r !== false && Xe(e);
    } while (e && (!r || r(e, t)) && e !== Object.prototype);
    return t;
  }, Jr = (e, t, r) => {
    e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
    const s = e.indexOf(t, r);
    return s !== -1 && s === r;
  }, Vr = (e) => {
    if (!e) return null;
    if (ae(e)) return e;
    let t = e.length;
    if (!It(t)) return null;
    const r = new Array(t);
    for (; t-- > 0; ) r[t] = e[t];
    return r;
  }, Wr = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Xe(Uint8Array)), Kr = (e, t) => {
    const s = (e && e[Oe]).call(e);
    let n;
    for (; (n = s.next()) && !n.done; ) {
      const i = n.value;
      t.call(e, i[0], i[1]);
    }
  }, Xr = (e, t) => {
    let r;
    const s = [];
    for (; (r = e.exec(t)) !== null; ) s.push(r);
    return s;
  }, Gr = M("HTMLFormElement"), Qr = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(r, s, n) {
    return s.toUpperCase() + n;
  }), st = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Zr = M("RegExp"), Dt = (e, t) => {
    const r = Object.getOwnPropertyDescriptors(e), s = {};
    he(r, (n, i) => {
      let o;
      (o = t(n, i, e)) !== false && (s[i] = o || n);
    }), Object.defineProperties(e, s);
  }, Yr = (e) => {
    Dt(e, (t, r) => {
      if (_(e) && [
        "arguments",
        "caller",
        "callee"
      ].indexOf(r) !== -1) return false;
      const s = e[r];
      if (_(s)) {
        if (t.enumerable = false, "writable" in t) {
          t.writable = false;
          return;
        }
        t.set || (t.set = () => {
          throw Error("Can not rewrite read-only method '" + r + "'");
        });
      }
    });
  }, es = (e, t) => {
    const r = {}, s = (n) => {
      n.forEach((i) => {
        r[i] = true;
      });
    };
    return ae(e) ? s(e) : s(String(e).split(t)), r;
  }, ts = () => {
  }, rs = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
  function ss(e) {
    return !!(e && _(e.append) && e[Pt] === "FormData" && e[Oe]);
  }
  const ns = (e) => {
    const t = new Array(10), r = (s, n) => {
      if (pe(s)) {
        if (t.indexOf(s) >= 0) return;
        if (me(s)) return s;
        if (!("toJSON" in s)) {
          t[n] = s;
          const i = ae(s) ? [] : {};
          return he(s, (o, d) => {
            const h = r(o, n + 1);
            !ne(h) && (i[d] = h);
          }), t[n] = void 0, i;
        }
      }
      return s;
    };
    return r(e, 0);
  }, as = M("AsyncFunction"), is = (e) => e && (pe(e) || _(e)) && _(e.then) && _(e.catch), Bt = ((e, t) => e ? setImmediate : t ? ((r, s) => (Q.addEventListener("message", ({ source: n, data: i }) => {
    n === Q && i === r && s.length && s.shift()();
  }, false), (n) => {
    s.push(n), Q.postMessage(r, "*");
  }))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(typeof setImmediate == "function", _(Q.postMessage)), os = typeof queueMicrotask < "u" ? queueMicrotask.bind(Q) : typeof process < "u" && process.nextTick || Bt, ls = (e) => e != null && _(e[Oe]), c = {
    isArray: ae,
    isArrayBuffer: _t,
    isBuffer: me,
    isFormData: Ar,
    isArrayBufferView: Er,
    isString: Rr,
    isNumber: It,
    isBoolean: Nr,
    isObject: pe,
    isPlainObject: ke,
    isEmptyObject: Cr,
    isReadableStream: Dr,
    isRequest: Br,
    isResponse: Mr,
    isHeaders: Ur,
    isUndefined: ne,
    isDate: Tr,
    isFile: Or,
    isBlob: Pr,
    isRegExp: Zr,
    isFunction: _,
    isStream: Ir,
    isURLSearchParams: Lr,
    isTypedArray: Wr,
    isFileList: _r,
    forEach: he,
    merge: $e,
    extend: zr,
    trim: Fr,
    stripBOM: $r,
    inherits: qr,
    toFlatObject: Hr,
    kindOf: Pe,
    kindOfTest: M,
    endsWith: Jr,
    toArray: Vr,
    forEachEntry: Kr,
    matchAll: Xr,
    isHTMLForm: Gr,
    hasOwnProperty: st,
    hasOwnProp: st,
    reduceDescriptors: Dt,
    freezeMethods: Yr,
    toObjectSet: es,
    toCamelCase: Qr,
    noop: ts,
    toFiniteNumber: rs,
    findKey: At,
    global: Q,
    isContextDefined: Lt,
    isSpecCompliantForm: ss,
    toJSONObject: ns,
    isAsyncFn: as,
    isThenable: is,
    setImmediate: Bt,
    asap: os,
    isIterable: ls
  };
  function w(e, t, r, s, n) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), s && (this.request = s), n && (this.response = n, this.status = n.status ? n.status : null);
  }
  c.inherits(w, Error, {
    toJSON: function() {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: c.toJSONObject(this.config),
        code: this.code,
        status: this.status
      };
    }
  });
  const Mt = w.prototype, Ut = {};
  [
    "ERR_BAD_OPTION_VALUE",
    "ERR_BAD_OPTION",
    "ECONNABORTED",
    "ETIMEDOUT",
    "ERR_NETWORK",
    "ERR_FR_TOO_MANY_REDIRECTS",
    "ERR_DEPRECATED",
    "ERR_BAD_RESPONSE",
    "ERR_BAD_REQUEST",
    "ERR_CANCELED",
    "ERR_NOT_SUPPORT",
    "ERR_INVALID_URL"
  ].forEach((e) => {
    Ut[e] = {
      value: e
    };
  });
  Object.defineProperties(w, Ut);
  Object.defineProperty(Mt, "isAxiosError", {
    value: true
  });
  w.from = (e, t, r, s, n, i) => {
    const o = Object.create(Mt);
    c.toFlatObject(e, o, function(u) {
      return u !== Error.prototype;
    }, (l) => l !== "isAxiosError");
    const d = e && e.message ? e.message : "Error", h = t == null && e ? e.code : t;
    return w.call(o, d, h, r, s, n), e && o.cause == null && Object.defineProperty(o, "cause", {
      value: e,
      configurable: true
    }), o.name = e && e.name || "Error", i && Object.assign(o, i), o;
  };
  const cs = null;
  function qe(e) {
    return c.isPlainObject(e) || c.isArray(e);
  }
  function Ft(e) {
    return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
  }
  function nt(e, t, r) {
    return e ? e.concat(t).map(function(n, i) {
      return n = Ft(n), !r && i ? "[" + n + "]" : n;
    }).join(r ? "." : "") : t;
  }
  function ds(e) {
    return c.isArray(e) && !e.some(qe);
  }
  const us = c.toFlatObject(c, {}, null, function(t) {
    return /^is[A-Z]/.test(t);
  });
  function Ie(e, t, r) {
    if (!c.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData(), r = c.toFlatObject(r, {
      metaTokens: true,
      dots: false,
      indexes: false
    }, false, function(g, x) {
      return !c.isUndefined(x[g]);
    });
    const s = r.metaTokens, n = r.visitor || u, i = r.dots, o = r.indexes, h = (r.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
    if (!c.isFunction(n)) throw new TypeError("visitor must be a function");
    function l(f) {
      if (f === null) return "";
      if (c.isDate(f)) return f.toISOString();
      if (c.isBoolean(f)) return f.toString();
      if (!h && c.isBlob(f)) throw new w("Blob is not supported. Use a Buffer instead.");
      return c.isArrayBuffer(f) || c.isTypedArray(f) ? h && typeof Blob == "function" ? new Blob([
        f
      ]) : Buffer.from(f) : f;
    }
    function u(f, g, x) {
      let j = f;
      if (f && !x && typeof f == "object") {
        if (c.endsWith(g, "{}")) g = s ? g : g.slice(0, -2), f = JSON.stringify(f);
        else if (c.isArray(f) && ds(f) || (c.isFileList(f) || c.endsWith(g, "[]")) && (j = c.toArray(f))) return g = Ft(g), j.forEach(function(E, N) {
          !(c.isUndefined(E) || E === null) && t.append(o === true ? nt([
            g
          ], N, i) : o === null ? g : g + "[]", l(E));
        }), false;
      }
      return qe(f) ? true : (t.append(nt(x, g, i), l(f)), false);
    }
    const p = [], m = Object.assign(us, {
      defaultVisitor: u,
      convertValue: l,
      isVisitable: qe
    });
    function y(f, g) {
      if (!c.isUndefined(f)) {
        if (p.indexOf(f) !== -1) throw Error("Circular reference detected in " + g.join("."));
        p.push(f), c.forEach(f, function(j, T) {
          (!(c.isUndefined(j) || j === null) && n.call(t, j, c.isString(T) ? T.trim() : T, g, m)) === true && y(j, g ? g.concat(T) : [
            T
          ]);
        }), p.pop();
      }
    }
    if (!c.isObject(e)) throw new TypeError("data must be an object");
    return y(e), t;
  }
  function at(e) {
    const t = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
      "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(s) {
      return t[s];
    });
  }
  function Ge(e, t) {
    this._pairs = [], e && Ie(e, this, t);
  }
  const zt = Ge.prototype;
  zt.append = function(t, r) {
    this._pairs.push([
      t,
      r
    ]);
  };
  zt.toString = function(t) {
    const r = t ? function(s) {
      return t.call(this, s, at);
    } : at;
    return this._pairs.map(function(n) {
      return r(n[0]) + "=" + r(n[1]);
    }, "").join("&");
  };
  function fs(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
  }
  function $t(e, t, r) {
    if (!t) return e;
    const s = r && r.encode || fs;
    c.isFunction(r) && (r = {
      serialize: r
    });
    const n = r && r.serialize;
    let i;
    if (n ? i = n(t, r) : i = c.isURLSearchParams(t) ? t.toString() : new Ge(t, r).toString(s), i) {
      const o = e.indexOf("#");
      o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
    }
    return e;
  }
  class it {
    constructor() {
      this.handlers = [];
    }
    use(t, r, s) {
      return this.handlers.push({
        fulfilled: t,
        rejected: r,
        synchronous: s ? s.synchronous : false,
        runWhen: s ? s.runWhen : null
      }), this.handlers.length - 1;
    }
    eject(t) {
      this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
      this.handlers && (this.handlers = []);
    }
    forEach(t) {
      c.forEach(this.handlers, function(s) {
        s !== null && t(s);
      });
    }
  }
  const qt = {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  }, ms = typeof URLSearchParams < "u" ? URLSearchParams : Ge, ps = typeof FormData < "u" ? FormData : null, hs = typeof Blob < "u" ? Blob : null, xs = {
    isBrowser: true,
    classes: {
      URLSearchParams: ms,
      FormData: ps,
      Blob: hs
    },
    protocols: [
      "http",
      "https",
      "file",
      "blob",
      "url",
      "data"
    ]
  }, Qe = typeof window < "u" && typeof document < "u", He = typeof navigator == "object" && navigator || void 0, gs = Qe && (!He || [
    "ReactNative",
    "NativeScript",
    "NS"
  ].indexOf(He.product) < 0), bs = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ws = Qe && window.location.href || "http://localhost", ys = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: Qe,
    hasStandardBrowserEnv: gs,
    hasStandardBrowserWebWorkerEnv: bs,
    navigator: He,
    origin: ws
  }, Symbol.toStringTag, {
    value: "Module"
  })), C = {
    ...ys,
    ...xs
  };
  function vs(e, t) {
    return Ie(e, new C.classes.URLSearchParams(), {
      visitor: function(r, s, n, i) {
        return C.isNode && c.isBuffer(r) ? (this.append(s, r.toString("base64")), false) : i.defaultVisitor.apply(this, arguments);
      },
      ...t
    });
  }
  function ks(e) {
    return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
  }
  function js(e) {
    const t = {}, r = Object.keys(e);
    let s;
    const n = r.length;
    let i;
    for (s = 0; s < n; s++) i = r[s], t[i] = e[i];
    return t;
  }
  function Ht(e) {
    function t(r, s, n, i) {
      let o = r[i++];
      if (o === "__proto__") return true;
      const d = Number.isFinite(+o), h = i >= r.length;
      return o = !o && c.isArray(n) ? n.length : o, h ? (c.hasOwnProp(n, o) ? n[o] = [
        n[o],
        s
      ] : n[o] = s, !d) : ((!n[o] || !c.isObject(n[o])) && (n[o] = []), t(r, s, n[o], i) && c.isArray(n[o]) && (n[o] = js(n[o])), !d);
    }
    if (c.isFormData(e) && c.isFunction(e.entries)) {
      const r = {};
      return c.forEachEntry(e, (s, n) => {
        t(ks(s), n, r, 0);
      }), r;
    }
    return null;
  }
  function Ss(e, t, r) {
    if (c.isString(e)) try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
    return (r || JSON.stringify)(e);
  }
  const xe = {
    transitional: qt,
    adapter: [
      "xhr",
      "http",
      "fetch"
    ],
    transformRequest: [
      function(t, r) {
        const s = r.getContentType() || "", n = s.indexOf("application/json") > -1, i = c.isObject(t);
        if (i && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t)) return n ? JSON.stringify(Ht(t)) : t;
        if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t) || c.isReadableStream(t)) return t;
        if (c.isArrayBufferView(t)) return t.buffer;
        if (c.isURLSearchParams(t)) return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t.toString();
        let d;
        if (i) {
          if (s.indexOf("application/x-www-form-urlencoded") > -1) return vs(t, this.formSerializer).toString();
          if ((d = c.isFileList(t)) || s.indexOf("multipart/form-data") > -1) {
            const h = this.env && this.env.FormData;
            return Ie(d ? {
              "files[]": t
            } : t, h && new h(), this.formSerializer);
          }
        }
        return i || n ? (r.setContentType("application/json", false), Ss(t)) : t;
      }
    ],
    transformResponse: [
      function(t) {
        const r = this.transitional || xe.transitional, s = r && r.forcedJSONParsing, n = this.responseType === "json";
        if (c.isResponse(t) || c.isReadableStream(t)) return t;
        if (t && c.isString(t) && (s && !this.responseType || n)) {
          const o = !(r && r.silentJSONParsing) && n;
          try {
            return JSON.parse(t, this.parseReviver);
          } catch (d) {
            if (o) throw d.name === "SyntaxError" ? w.from(d, w.ERR_BAD_RESPONSE, this, null, this.response) : d;
          }
        }
        return t;
      }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
      FormData: C.classes.FormData,
      Blob: C.classes.Blob
    },
    validateStatus: function(t) {
      return t >= 200 && t < 300;
    },
    headers: {
      common: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": void 0
      }
    }
  };
  c.forEach([
    "delete",
    "get",
    "head",
    "post",
    "put",
    "patch"
  ], (e) => {
    xe.headers[e] = {};
  });
  const Es = c.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ]), Rs = (e) => {
    const t = {};
    let r, s, n;
    return e && e.split(`
`).forEach(function(o) {
      n = o.indexOf(":"), r = o.substring(0, n).trim().toLowerCase(), s = o.substring(n + 1).trim(), !(!r || t[r] && Es[r]) && (r === "set-cookie" ? t[r] ? t[r].push(s) : t[r] = [
        s
      ] : t[r] = t[r] ? t[r] + ", " + s : s);
    }), t;
  }, ot = Symbol("internals");
  function ue(e) {
    return e && String(e).trim().toLowerCase();
  }
  function je(e) {
    return e === false || e == null ? e : c.isArray(e) ? e.map(je) : String(e);
  }
  function Ns(e) {
    const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let s;
    for (; s = r.exec(e); ) t[s[1]] = s[2];
    return t;
  }
  const Cs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
  function Be(e, t, r, s, n) {
    if (c.isFunction(s)) return s.call(this, t, r);
    if (n && (t = r), !!c.isString(t)) {
      if (c.isString(s)) return t.indexOf(s) !== -1;
      if (c.isRegExp(s)) return s.test(t);
    }
  }
  function Ts(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, s) => r.toUpperCase() + s);
  }
  function Os(e, t) {
    const r = c.toCamelCase(" " + t);
    [
      "get",
      "set",
      "has"
    ].forEach((s) => {
      Object.defineProperty(e, s + r, {
        value: function(n, i, o) {
          return this[s].call(this, t, n, i, o);
        },
        configurable: true
      });
    });
  }
  let I = class {
    constructor(t) {
      t && this.set(t);
    }
    set(t, r, s) {
      const n = this;
      function i(d, h, l) {
        const u = ue(h);
        if (!u) throw new Error("header name must be a non-empty string");
        const p = c.findKey(n, u);
        (!p || n[p] === void 0 || l === true || l === void 0 && n[p] !== false) && (n[p || h] = je(d));
      }
      const o = (d, h) => c.forEach(d, (l, u) => i(l, u, h));
      if (c.isPlainObject(t) || t instanceof this.constructor) o(t, r);
      else if (c.isString(t) && (t = t.trim()) && !Cs(t)) o(Rs(t), r);
      else if (c.isObject(t) && c.isIterable(t)) {
        let d = {}, h, l;
        for (const u of t) {
          if (!c.isArray(u)) throw TypeError("Object iterator must return a key-value pair");
          d[l = u[0]] = (h = d[l]) ? c.isArray(h) ? [
            ...h,
            u[1]
          ] : [
            h,
            u[1]
          ] : u[1];
        }
        o(d, r);
      } else t != null && i(r, t, s);
      return this;
    }
    get(t, r) {
      if (t = ue(t), t) {
        const s = c.findKey(this, t);
        if (s) {
          const n = this[s];
          if (!r) return n;
          if (r === true) return Ns(n);
          if (c.isFunction(r)) return r.call(this, n, s);
          if (c.isRegExp(r)) return r.exec(n);
          throw new TypeError("parser must be boolean|regexp|function");
        }
      }
    }
    has(t, r) {
      if (t = ue(t), t) {
        const s = c.findKey(this, t);
        return !!(s && this[s] !== void 0 && (!r || Be(this, this[s], s, r)));
      }
      return false;
    }
    delete(t, r) {
      const s = this;
      let n = false;
      function i(o) {
        if (o = ue(o), o) {
          const d = c.findKey(s, o);
          d && (!r || Be(s, s[d], d, r)) && (delete s[d], n = true);
        }
      }
      return c.isArray(t) ? t.forEach(i) : i(t), n;
    }
    clear(t) {
      const r = Object.keys(this);
      let s = r.length, n = false;
      for (; s--; ) {
        const i = r[s];
        (!t || Be(this, this[i], i, t, true)) && (delete this[i], n = true);
      }
      return n;
    }
    normalize(t) {
      const r = this, s = {};
      return c.forEach(this, (n, i) => {
        const o = c.findKey(s, i);
        if (o) {
          r[o] = je(n), delete r[i];
          return;
        }
        const d = t ? Ts(i) : String(i).trim();
        d !== i && delete r[i], r[d] = je(n), s[d] = true;
      }), this;
    }
    concat(...t) {
      return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
      const r = /* @__PURE__ */ Object.create(null);
      return c.forEach(this, (s, n) => {
        s != null && s !== false && (r[n] = t && c.isArray(s) ? s.join(", ") : s);
      }), r;
    }
    [Symbol.iterator]() {
      return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
      return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
    }
    getSetCookie() {
      return this.get("set-cookie") || [];
    }
    get [Symbol.toStringTag]() {
      return "AxiosHeaders";
    }
    static from(t) {
      return t instanceof this ? t : new this(t);
    }
    static concat(t, ...r) {
      const s = new this(t);
      return r.forEach((n) => s.set(n)), s;
    }
    static accessor(t) {
      const s = (this[ot] = this[ot] = {
        accessors: {}
      }).accessors, n = this.prototype;
      function i(o) {
        const d = ue(o);
        s[d] || (Os(n, o), s[d] = true);
      }
      return c.isArray(t) ? t.forEach(i) : i(t), this;
    }
  };
  I.accessor([
    "Content-Type",
    "Content-Length",
    "Accept",
    "Accept-Encoding",
    "User-Agent",
    "Authorization"
  ]);
  c.reduceDescriptors(I.prototype, ({ value: e }, t) => {
    let r = t[0].toUpperCase() + t.slice(1);
    return {
      get: () => e,
      set(s) {
        this[r] = s;
      }
    };
  });
  c.freezeMethods(I);
  function Me(e, t) {
    const r = this || xe, s = t || r, n = I.from(s.headers);
    let i = s.data;
    return c.forEach(e, function(d) {
      i = d.call(r, i, n.normalize(), t ? t.status : void 0);
    }), n.normalize(), i;
  }
  function Jt(e) {
    return !!(e && e.__CANCEL__);
  }
  function ie(e, t, r) {
    w.call(this, e ?? "canceled", w.ERR_CANCELED, t, r), this.name = "CanceledError";
  }
  c.inherits(ie, w, {
    __CANCEL__: true
  });
  function Vt(e, t, r) {
    const s = r.config.validateStatus;
    !r.status || !s || s(r.status) ? e(r) : t(new w("Request failed with status code " + r.status, [
      w.ERR_BAD_REQUEST,
      w.ERR_BAD_RESPONSE
    ][Math.floor(r.status / 100) - 4], r.config, r.request, r));
  }
  function Ps(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || "";
  }
  function _s(e, t) {
    e = e || 10;
    const r = new Array(e), s = new Array(e);
    let n = 0, i = 0, o;
    return t = t !== void 0 ? t : 1e3, function(h) {
      const l = Date.now(), u = s[i];
      o || (o = l), r[n] = h, s[n] = l;
      let p = i, m = 0;
      for (; p !== n; ) m += r[p++], p = p % e;
      if (n = (n + 1) % e, n === i && (i = (i + 1) % e), l - o < t) return;
      const y = u && l - u;
      return y ? Math.round(m * 1e3 / y) : void 0;
    };
  }
  function Is(e, t) {
    let r = 0, s = 1e3 / t, n, i;
    const o = (l, u = Date.now()) => {
      r = u, n = null, i && (clearTimeout(i), i = null), e(...l);
    };
    return [
      (...l) => {
        const u = Date.now(), p = u - r;
        p >= s ? o(l, u) : (n = l, i || (i = setTimeout(() => {
          i = null, o(n);
        }, s - p)));
      },
      () => n && o(n)
    ];
  }
  const Re = (e, t, r = 3) => {
    let s = 0;
    const n = _s(50, 250);
    return Is((i) => {
      const o = i.loaded, d = i.lengthComputable ? i.total : void 0, h = o - s, l = n(h), u = o <= d;
      s = o;
      const p = {
        loaded: o,
        total: d,
        progress: d ? o / d : void 0,
        bytes: h,
        rate: l || void 0,
        estimated: l && d && u ? (d - o) / l : void 0,
        event: i,
        lengthComputable: d != null,
        [t ? "download" : "upload"]: true
      };
      e(p);
    }, r);
  }, lt = (e, t) => {
    const r = e != null;
    return [
      (s) => t[0]({
        lengthComputable: r,
        total: e,
        loaded: s
      }),
      t[1]
    ];
  }, ct = (e) => (...t) => c.asap(() => e(...t)), As = C.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (r) => (r = new URL(r, C.origin), e.protocol === r.protocol && e.host === r.host && (t || e.port === r.port)))(new URL(C.origin), C.navigator && /(msie|trident)/i.test(C.navigator.userAgent)) : () => true, Ls = C.hasStandardBrowserEnv ? {
    write(e, t, r, s, n, i, o) {
      if (typeof document > "u") return;
      const d = [
        `${e}=${encodeURIComponent(t)}`
      ];
      c.isNumber(r) && d.push(`expires=${new Date(r).toUTCString()}`), c.isString(s) && d.push(`path=${s}`), c.isString(n) && d.push(`domain=${n}`), i === true && d.push("secure"), c.isString(o) && d.push(`SameSite=${o}`), document.cookie = d.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie.match(new RegExp("(?:^|; )" + e + "=([^;]*)"));
      return t ? decodeURIComponent(t[1]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
    }
  } : {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  };
  function Ds(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
  }
  function Bs(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
  }
  function Wt(e, t, r) {
    let s = !Ds(t);
    return e && (s || r == false) ? Bs(e, t) : t;
  }
  const dt = (e) => e instanceof I ? {
    ...e
  } : e;
  function Y(e, t) {
    t = t || {};
    const r = {};
    function s(l, u, p, m) {
      return c.isPlainObject(l) && c.isPlainObject(u) ? c.merge.call({
        caseless: m
      }, l, u) : c.isPlainObject(u) ? c.merge({}, u) : c.isArray(u) ? u.slice() : u;
    }
    function n(l, u, p, m) {
      if (c.isUndefined(u)) {
        if (!c.isUndefined(l)) return s(void 0, l, p, m);
      } else return s(l, u, p, m);
    }
    function i(l, u) {
      if (!c.isUndefined(u)) return s(void 0, u);
    }
    function o(l, u) {
      if (c.isUndefined(u)) {
        if (!c.isUndefined(l)) return s(void 0, l);
      } else return s(void 0, u);
    }
    function d(l, u, p) {
      if (p in t) return s(l, u);
      if (p in e) return s(void 0, l);
    }
    const h = {
      url: i,
      method: i,
      data: i,
      baseURL: o,
      transformRequest: o,
      transformResponse: o,
      paramsSerializer: o,
      timeout: o,
      timeoutMessage: o,
      withCredentials: o,
      withXSRFToken: o,
      adapter: o,
      responseType: o,
      xsrfCookieName: o,
      xsrfHeaderName: o,
      onUploadProgress: o,
      onDownloadProgress: o,
      decompress: o,
      maxContentLength: o,
      maxBodyLength: o,
      beforeRedirect: o,
      transport: o,
      httpAgent: o,
      httpsAgent: o,
      cancelToken: o,
      socketPath: o,
      responseEncoding: o,
      validateStatus: d,
      headers: (l, u, p) => n(dt(l), dt(u), p, true)
    };
    return c.forEach(Object.keys({
      ...e,
      ...t
    }), function(u) {
      const p = h[u] || n, m = p(e[u], t[u], u);
      c.isUndefined(m) && p !== d || (r[u] = m);
    }), r;
  }
  const Kt = (e) => {
    const t = Y({}, e);
    let { data: r, withXSRFToken: s, xsrfHeaderName: n, xsrfCookieName: i, headers: o, auth: d } = t;
    if (t.headers = o = I.from(o), t.url = $t(Wt(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), d && o.set("Authorization", "Basic " + btoa((d.username || "") + ":" + (d.password ? unescape(encodeURIComponent(d.password)) : ""))), c.isFormData(r)) {
      if (C.hasStandardBrowserEnv || C.hasStandardBrowserWebWorkerEnv) o.setContentType(void 0);
      else if (c.isFunction(r.getHeaders)) {
        const h = r.getHeaders(), l = [
          "content-type",
          "content-length"
        ];
        Object.entries(h).forEach(([u, p]) => {
          l.includes(u.toLowerCase()) && o.set(u, p);
        });
      }
    }
    if (C.hasStandardBrowserEnv && (s && c.isFunction(s) && (s = s(t)), s || s !== false && As(t.url))) {
      const h = n && i && Ls.read(i);
      h && o.set(n, h);
    }
    return t;
  }, Ms = typeof XMLHttpRequest < "u", Us = Ms && function(e) {
    return new Promise(function(r, s) {
      const n = Kt(e);
      let i = n.data;
      const o = I.from(n.headers).normalize();
      let { responseType: d, onUploadProgress: h, onDownloadProgress: l } = n, u, p, m, y, f;
      function g() {
        y && y(), f && f(), n.cancelToken && n.cancelToken.unsubscribe(u), n.signal && n.signal.removeEventListener("abort", u);
      }
      let x = new XMLHttpRequest();
      x.open(n.method.toUpperCase(), n.url, true), x.timeout = n.timeout;
      function j() {
        if (!x) return;
        const E = I.from("getAllResponseHeaders" in x && x.getAllResponseHeaders()), A = {
          data: !d || d === "text" || d === "json" ? x.responseText : x.response,
          status: x.status,
          statusText: x.statusText,
          headers: E,
          config: e,
          request: x
        };
        Vt(function(P) {
          r(P), g();
        }, function(P) {
          s(P), g();
        }, A), x = null;
      }
      "onloadend" in x ? x.onloadend = j : x.onreadystatechange = function() {
        !x || x.readyState !== 4 || x.status === 0 && !(x.responseURL && x.responseURL.indexOf("file:") === 0) || setTimeout(j);
      }, x.onabort = function() {
        x && (s(new w("Request aborted", w.ECONNABORTED, e, x)), x = null);
      }, x.onerror = function(N) {
        const A = N && N.message ? N.message : "Network Error", $ = new w(A, w.ERR_NETWORK, e, x);
        $.event = N || null, s($), x = null;
      }, x.ontimeout = function() {
        let N = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
        const A = n.transitional || qt;
        n.timeoutErrorMessage && (N = n.timeoutErrorMessage), s(new w(N, A.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED, e, x)), x = null;
      }, i === void 0 && o.setContentType(null), "setRequestHeader" in x && c.forEach(o.toJSON(), function(N, A) {
        x.setRequestHeader(A, N);
      }), c.isUndefined(n.withCredentials) || (x.withCredentials = !!n.withCredentials), d && d !== "json" && (x.responseType = n.responseType), l && ([m, f] = Re(l, true), x.addEventListener("progress", m)), h && x.upload && ([p, y] = Re(h), x.upload.addEventListener("progress", p), x.upload.addEventListener("loadend", y)), (n.cancelToken || n.signal) && (u = (E) => {
        x && (s(!E || E.type ? new ie(null, e, x) : E), x.abort(), x = null);
      }, n.cancelToken && n.cancelToken.subscribe(u), n.signal && (n.signal.aborted ? u() : n.signal.addEventListener("abort", u)));
      const T = Ps(n.url);
      if (T && C.protocols.indexOf(T) === -1) {
        s(new w("Unsupported protocol " + T + ":", w.ERR_BAD_REQUEST, e));
        return;
      }
      x.send(i || null);
    });
  }, Fs = (e, t) => {
    const { length: r } = e = e ? e.filter(Boolean) : [];
    if (t || r) {
      let s = new AbortController(), n;
      const i = function(l) {
        if (!n) {
          n = true, d();
          const u = l instanceof Error ? l : this.reason;
          s.abort(u instanceof w ? u : new ie(u instanceof Error ? u.message : u));
        }
      };
      let o = t && setTimeout(() => {
        o = null, i(new w(`timeout ${t} of ms exceeded`, w.ETIMEDOUT));
      }, t);
      const d = () => {
        e && (o && clearTimeout(o), o = null, e.forEach((l) => {
          l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
        }), e = null);
      };
      e.forEach((l) => l.addEventListener("abort", i));
      const { signal: h } = s;
      return h.unsubscribe = () => c.asap(d), h;
    }
  }, zs = function* (e, t) {
    let r = e.byteLength;
    if (r < t) {
      yield e;
      return;
    }
    let s = 0, n;
    for (; s < r; ) n = s + t, yield e.slice(s, n), s = n;
  }, $s = async function* (e, t) {
    for await (const r of qs(e)) yield* zs(r, t);
  }, qs = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: r, value: s } = await t.read();
        if (r) break;
        yield s;
      }
    } finally {
      await t.cancel();
    }
  }, ut = (e, t, r, s) => {
    const n = $s(e, t);
    let i = 0, o, d = (h) => {
      o || (o = true, s && s(h));
    };
    return new ReadableStream({
      async pull(h) {
        try {
          const { done: l, value: u } = await n.next();
          if (l) {
            d(), h.close();
            return;
          }
          let p = u.byteLength;
          if (r) {
            let m = i += p;
            r(m);
          }
          h.enqueue(new Uint8Array(u));
        } catch (l) {
          throw d(l), l;
        }
      },
      cancel(h) {
        return d(h), n.return();
      }
    }, {
      highWaterMark: 2
    });
  }, ft = 64 * 1024, { isFunction: we } = c, Hs = (({ Request: e, Response: t }) => ({
    Request: e,
    Response: t
  }))(c.global), { ReadableStream: mt, TextEncoder: pt } = c.global, ht = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return false;
    }
  }, Js = (e) => {
    e = c.merge.call({
      skipUndefined: true
    }, Hs, e);
    const { fetch: t, Request: r, Response: s } = e, n = t ? we(t) : typeof fetch == "function", i = we(r), o = we(s);
    if (!n) return false;
    const d = n && we(mt), h = n && (typeof pt == "function" ? /* @__PURE__ */ ((f) => (g) => f.encode(g))(new pt()) : async (f) => new Uint8Array(await new r(f).arrayBuffer())), l = i && d && ht(() => {
      let f = false;
      const g = new r(C.origin, {
        body: new mt(),
        method: "POST",
        get duplex() {
          return f = true, "half";
        }
      }).headers.has("Content-Type");
      return f && !g;
    }), u = o && d && ht(() => c.isReadableStream(new s("").body)), p = {
      stream: u && ((f) => f.body)
    };
    n && [
      "text",
      "arrayBuffer",
      "blob",
      "formData",
      "stream"
    ].forEach((f) => {
      !p[f] && (p[f] = (g, x) => {
        let j = g && g[f];
        if (j) return j.call(g);
        throw new w(`Response type '${f}' is not supported`, w.ERR_NOT_SUPPORT, x);
      });
    });
    const m = async (f) => {
      if (f == null) return 0;
      if (c.isBlob(f)) return f.size;
      if (c.isSpecCompliantForm(f)) return (await new r(C.origin, {
        method: "POST",
        body: f
      }).arrayBuffer()).byteLength;
      if (c.isArrayBufferView(f) || c.isArrayBuffer(f)) return f.byteLength;
      if (c.isURLSearchParams(f) && (f = f + ""), c.isString(f)) return (await h(f)).byteLength;
    }, y = async (f, g) => {
      const x = c.toFiniteNumber(f.getContentLength());
      return x ?? m(g);
    };
    return async (f) => {
      let { url: g, method: x, data: j, signal: T, cancelToken: E, timeout: N, onDownloadProgress: A, onUploadProgress: $, responseType: P, headers: oe, withCredentials: ee = "same-origin", fetchOptions: ge } = Kt(f), q = t || fetch;
      P = P ? (P + "").toLowerCase() : "text";
      let te = Fs([
        T,
        E && E.toAbortSignal()
      ], N), H = null;
      const J = te && te.unsubscribe && (() => {
        te.unsubscribe();
      });
      let le;
      try {
        if ($ && l && x !== "get" && x !== "head" && (le = await y(oe, j)) !== 0) {
          let U = new r(g, {
            method: "POST",
            body: j,
            duplex: "half"
          }), V;
          if (c.isFormData(j) && (V = U.headers.get("content-type")) && oe.setContentType(V), U.body) {
            const [re, se] = lt(le, Re(ct($)));
            j = ut(U.body, ft, re, se);
          }
        }
        c.isString(ee) || (ee = ee ? "include" : "omit");
        const L = i && "credentials" in r.prototype, ce = {
          ...ge,
          signal: te,
          method: x.toUpperCase(),
          headers: oe.normalize().toJSON(),
          body: j,
          duplex: "half",
          credentials: L ? ee : void 0
        };
        H = i && new r(g, ce);
        let D = await (i ? q(H, ge) : q(g, ce));
        const de = u && (P === "stream" || P === "response");
        if (u && (A || de && J)) {
          const U = {};
          [
            "status",
            "statusText",
            "headers"
          ].forEach((O) => {
            U[O] = D[O];
          });
          const V = c.toFiniteNumber(D.headers.get("content-length")), [re, se] = A && lt(V, Re(ct(A), true)) || [];
          D = new s(ut(D.body, ft, re, () => {
            se && se(), J && J();
          }), U);
        }
        P = P || "text";
        let be = await p[c.findKey(p, P) || "text"](D, f);
        return !de && J && J(), await new Promise((U, V) => {
          Vt(U, V, {
            data: be,
            headers: I.from(D.headers),
            status: D.status,
            statusText: D.statusText,
            config: f,
            request: H
          });
        });
      } catch (L) {
        throw J && J(), L && L.name === "TypeError" && /Load failed|fetch/i.test(L.message) ? Object.assign(new w("Network Error", w.ERR_NETWORK, f, H), {
          cause: L.cause || L
        }) : w.from(L, L && L.code, f, H);
      }
    };
  }, Vs = /* @__PURE__ */ new Map(), Xt = (e) => {
    let t = e && e.env || {};
    const { fetch: r, Request: s, Response: n } = t, i = [
      s,
      n,
      r
    ];
    let o = i.length, d = o, h, l, u = Vs;
    for (; d--; ) h = i[d], l = u.get(h), l === void 0 && u.set(h, l = d ? /* @__PURE__ */ new Map() : Js(t)), u = l;
    return l;
  };
  Xt();
  const Ze = {
    http: cs,
    xhr: Us,
    fetch: {
      get: Xt
    }
  };
  c.forEach(Ze, (e, t) => {
    if (e) {
      try {
        Object.defineProperty(e, "name", {
          value: t
        });
      } catch {
      }
      Object.defineProperty(e, "adapterName", {
        value: t
      });
    }
  });
  const xt = (e) => `- ${e}`, Ws = (e) => c.isFunction(e) || e === null || e === false;
  function Ks(e, t) {
    e = c.isArray(e) ? e : [
      e
    ];
    const { length: r } = e;
    let s, n;
    const i = {};
    for (let o = 0; o < r; o++) {
      s = e[o];
      let d;
      if (n = s, !Ws(s) && (n = Ze[(d = String(s)).toLowerCase()], n === void 0)) throw new w(`Unknown adapter '${d}'`);
      if (n && (c.isFunction(n) || (n = n.get(t)))) break;
      i[d || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(i).map(([h, l]) => `adapter ${h} ` + (l === false ? "is not supported by the environment" : "is not available in the build"));
      let d = r ? o.length > 1 ? `since :
` + o.map(xt).join(`
`) : " " + xt(o[0]) : "as no adapter specified";
      throw new w("There is no suitable adapter to dispatch the request " + d, "ERR_NOT_SUPPORT");
    }
    return n;
  }
  const Gt = {
    getAdapter: Ks,
    adapters: Ze
  };
  function Ue(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ie(null, e);
  }
  function gt(e) {
    return Ue(e), e.headers = I.from(e.headers), e.data = Me.call(e, e.transformRequest), [
      "post",
      "put",
      "patch"
    ].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", false), Gt.getAdapter(e.adapter || xe.adapter, e)(e).then(function(s) {
      return Ue(e), s.data = Me.call(e, e.transformResponse, s), s.headers = I.from(s.headers), s;
    }, function(s) {
      return Jt(s) || (Ue(e), s && s.response && (s.response.data = Me.call(e, e.transformResponse, s.response), s.response.headers = I.from(s.response.headers))), Promise.reject(s);
    });
  }
  const Qt = "1.13.2", Ae = {};
  [
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
  ].forEach((e, t) => {
    Ae[e] = function(s) {
      return typeof s === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  });
  const bt = {};
  Ae.transitional = function(t, r, s) {
    function n(i, o) {
      return "[Axios v" + Qt + "] Transitional option '" + i + "'" + o + (s ? ". " + s : "");
    }
    return (i, o, d) => {
      if (t === false) throw new w(n(o, " has been removed" + (r ? " in " + r : "")), w.ERR_DEPRECATED);
      return r && !bt[o] && (bt[o] = true, console.warn(n(o, " has been deprecated since v" + r + " and will be removed in the near future"))), t ? t(i, o, d) : true;
    };
  };
  Ae.spelling = function(t) {
    return (r, s) => (console.warn(`${s} is likely a misspelling of ${t}`), true);
  };
  function Xs(e, t, r) {
    if (typeof e != "object") throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
    const s = Object.keys(e);
    let n = s.length;
    for (; n-- > 0; ) {
      const i = s[n], o = t[i];
      if (o) {
        const d = e[i], h = d === void 0 || o(d, i, e);
        if (h !== true) throw new w("option " + i + " must be " + h, w.ERR_BAD_OPTION_VALUE);
        continue;
      }
      if (r !== true) throw new w("Unknown option " + i, w.ERR_BAD_OPTION);
    }
  }
  const Se = {
    assertOptions: Xs,
    validators: Ae
  }, F = Se.validators;
  let Z = class {
    constructor(t) {
      this.defaults = t || {}, this.interceptors = {
        request: new it(),
        response: new it()
      };
    }
    async request(t, r) {
      try {
        return await this._request(t, r);
      } catch (s) {
        if (s instanceof Error) {
          let n = {};
          Error.captureStackTrace ? Error.captureStackTrace(n) : n = new Error();
          const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
          try {
            s.stack ? i && !String(s.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + i) : s.stack = i;
          } catch {
          }
        }
        throw s;
      }
    }
    _request(t, r) {
      typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Y(this.defaults, r);
      const { transitional: s, paramsSerializer: n, headers: i } = r;
      s !== void 0 && Se.assertOptions(s, {
        silentJSONParsing: F.transitional(F.boolean),
        forcedJSONParsing: F.transitional(F.boolean),
        clarifyTimeoutError: F.transitional(F.boolean)
      }, false), n != null && (c.isFunction(n) ? r.paramsSerializer = {
        serialize: n
      } : Se.assertOptions(n, {
        encode: F.function,
        serialize: F.function
      }, true)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = true), Se.assertOptions(r, {
        baseUrl: F.spelling("baseURL"),
        withXsrfToken: F.spelling("withXSRFToken")
      }, true), r.method = (r.method || this.defaults.method || "get").toLowerCase();
      let o = i && c.merge(i.common, i[r.method]);
      i && c.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
      ], (f) => {
        delete i[f];
      }), r.headers = I.concat(o, i);
      const d = [];
      let h = true;
      this.interceptors.request.forEach(function(g) {
        typeof g.runWhen == "function" && g.runWhen(r) === false || (h = h && g.synchronous, d.unshift(g.fulfilled, g.rejected));
      });
      const l = [];
      this.interceptors.response.forEach(function(g) {
        l.push(g.fulfilled, g.rejected);
      });
      let u, p = 0, m;
      if (!h) {
        const f = [
          gt.bind(this),
          void 0
        ];
        for (f.unshift(...d), f.push(...l), m = f.length, u = Promise.resolve(r); p < m; ) u = u.then(f[p++], f[p++]);
        return u;
      }
      m = d.length;
      let y = r;
      for (; p < m; ) {
        const f = d[p++], g = d[p++];
        try {
          y = f(y);
        } catch (x) {
          g.call(this, x);
          break;
        }
      }
      try {
        u = gt.call(this, y);
      } catch (f) {
        return Promise.reject(f);
      }
      for (p = 0, m = l.length; p < m; ) u = u.then(l[p++], l[p++]);
      return u;
    }
    getUri(t) {
      t = Y(this.defaults, t);
      const r = Wt(t.baseURL, t.url, t.allowAbsoluteUrls);
      return $t(r, t.params, t.paramsSerializer);
    }
  };
  c.forEach([
    "delete",
    "get",
    "head",
    "options"
  ], function(t) {
    Z.prototype[t] = function(r, s) {
      return this.request(Y(s || {}, {
        method: t,
        url: r,
        data: (s || {}).data
      }));
    };
  });
  c.forEach([
    "post",
    "put",
    "patch"
  ], function(t) {
    function r(s) {
      return function(i, o, d) {
        return this.request(Y(d || {}, {
          method: t,
          headers: s ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: i,
          data: o
        }));
      };
    }
    Z.prototype[t] = r(), Z.prototype[t + "Form"] = r(true);
  });
  let Gs = class Zt {
    constructor(t) {
      if (typeof t != "function") throw new TypeError("executor must be a function.");
      let r;
      this.promise = new Promise(function(i) {
        r = i;
      });
      const s = this;
      this.promise.then((n) => {
        if (!s._listeners) return;
        let i = s._listeners.length;
        for (; i-- > 0; ) s._listeners[i](n);
        s._listeners = null;
      }), this.promise.then = (n) => {
        let i;
        const o = new Promise((d) => {
          s.subscribe(d), i = d;
        }).then(n);
        return o.cancel = function() {
          s.unsubscribe(i);
        }, o;
      }, t(function(i, o, d) {
        s.reason || (s.reason = new ie(i, o, d), r(s.reason));
      });
    }
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      if (this.reason) {
        t(this.reason);
        return;
      }
      this._listeners ? this._listeners.push(t) : this._listeners = [
        t
      ];
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const r = this._listeners.indexOf(t);
      r !== -1 && this._listeners.splice(r, 1);
    }
    toAbortSignal() {
      const t = new AbortController(), r = (s) => {
        t.abort(s);
      };
      return this.subscribe(r), t.signal.unsubscribe = () => this.unsubscribe(r), t.signal;
    }
    static source() {
      let t;
      return {
        token: new Zt(function(n) {
          t = n;
        }),
        cancel: t
      };
    }
  };
  function Qs(e) {
    return function(r) {
      return e.apply(null, r);
    };
  }
  function Zs(e) {
    return c.isObject(e) && e.isAxiosError === true;
  }
  const Je = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
    WebServerIsDown: 521,
    ConnectionTimedOut: 522,
    OriginIsUnreachable: 523,
    TimeoutOccurred: 524,
    SslHandshakeFailed: 525,
    InvalidSslCertificate: 526
  };
  Object.entries(Je).forEach(([e, t]) => {
    Je[t] = e;
  });
  function Yt(e) {
    const t = new Z(e), r = Ot(Z.prototype.request, t);
    return c.extend(r, Z.prototype, t, {
      allOwnKeys: true
    }), c.extend(r, t, null, {
      allOwnKeys: true
    }), r.create = function(n) {
      return Yt(Y(e, n));
    }, r;
  }
  const S = Yt(xe);
  S.Axios = Z;
  S.CanceledError = ie;
  S.CancelToken = Gs;
  S.isCancel = Jt;
  S.VERSION = Qt;
  S.toFormData = Ie;
  S.AxiosError = w;
  S.Cancel = S.CanceledError;
  S.all = function(t) {
    return Promise.all(t);
  };
  S.spread = Qs;
  S.isAxiosError = Zs;
  S.mergeConfig = Y;
  S.AxiosHeaders = I;
  S.formToJSON = (e) => Ht(c.isHTMLForm(e) ? new FormData(e) : e);
  S.getAdapter = Gt.getAdapter;
  S.HttpStatusCode = Je;
  S.default = S;
  let xa, ga, ba, wa, ya, va, ka, ja, Sa, Ea, Ra, Na, Ca, Ta, Oa, Pa, Ye, Ys, W;
  ({ Axios: xa, AxiosError: ga, CanceledError: ba, isCancel: wa, CancelToken: ya, VERSION: va, all: ka, Cancel: ja, isAxiosError: Sa, spread: Ea, toFormData: Ra, AxiosHeaders: Na, HttpStatusCode: Ca, formToJSON: Ta, getAdapter: Oa, mergeConfig: Pa } = S);
  Ye = 200;
  Ys = 64 * 1024;
  en = "";
  W = S.create({
    baseURL: en,
    timeout: 6e4
  });
  function tn(e) {
    return e !== null && typeof e == "object";
  }
  function Le(e) {
    return tn(e) && typeof e.code == "number" && typeof e.message == "string";
  }
  _a = function(e) {
    return !Le(e) || e.code === Ye ? null : new Error(e.message || "\u8BF7\u6C42\u5931\u8D25");
  };
  function wt(e) {
    const t = e.trim();
    if (!t.startsWith("{")) return null;
    try {
      const r = JSON.parse(t);
      return Le(r) ? r : null;
    } catch {
      return null;
    }
  }
  function rn(e) {
    const t = e.type.toLowerCase();
    return t.includes("json") || t.startsWith("text/") || e.size <= Ys;
  }
  er = async function(e) {
    return Le(e) ? e : e instanceof Blob && rn(e) ? wt(await e.text()) : typeof e == "string" ? wt(e) : null;
  };
  async function sn(e) {
    const t = await er(e);
    if (!t) return e;
    throw t.code !== Ye ? new Error(t.message || "\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25") : new Error(t.message && t.message !== "success" ? t.message : "\u6587\u4EF6\u4E0B\u8F7D\u5931\u8D25\uFF1A\u670D\u52A1\u7AEF\u672A\u8FD4\u56DE\u6587\u4EF6\u5185\u5BB9");
  }
  async function nn(e) {
    const t = await er(e);
    return t ? new Error(t.message || "\u8BF7\u6C42\u5931\u8D25") : null;
  }
  W.interceptors.response.use((e) => {
    if (e.config.skipResultTransform) return e;
    const t = e.data;
    return Le(t) ? t.code === Ye ? (e.data = t.data, e) : Promise.reject(new Error(t.message || "\u8BF7\u6C42\u5931\u8D25")) : e;
  }, async (e) => {
    var _a2, _b, _c;
    if (e.response) {
      const { data: s } = e.response, n = await nn(s);
      return n ? Promise.reject(n) : Promise.reject(new Error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"));
    }
    const t = e.config;
    return t && (((_a2 = t.url) == null ? void 0 : _a2.includes("/upload")) || ((_c = (_b = t.headers) == null ? void 0 : _b["Content-Type"]) == null ? void 0 : _c.toString().includes("multipart"))) ? Promise.reject(new Error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u7F51\u7EDC\u8D85\u65F6\u6216\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u8BD5")) : Promise.reject(new Error("\u7F51\u7EDC\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC"));
  });
  v = {
    get(e, t) {
      return W.get(e, t).then((r) => r.data);
    },
    post(e, t, r) {
      return W.post(e, t, r).then((s) => s.data);
    },
    put(e, t, r) {
      return W.put(e, t, r).then((s) => s.data);
    },
    patch(e, t, r) {
      return W.patch(e, t, r).then((s) => s.data);
    },
    delete(e, t) {
      return W.delete(e, t).then((r) => r.data);
    },
    upload(e, t, r) {
      return W.post(e, t, {
        timeout: 3e5,
        headers: {
          "Content-Type": "multipart/form-data"
        },
        ...r
      }).then((s) => s.data);
    },
    async download(e, t) {
      const r = await W.get(e, {
        ...t,
        responseType: "blob",
        skipResultTransform: true
      });
      return sn(r.data);
    },
    getInstance() {
      return W;
    }
  };
  Ia = function(e) {
    return e instanceof Error ? e.message : "\u672A\u77E5\u9519\u8BEF";
  };
  yt = {
    async listSkills() {
      return v.get("/api/interview/skills");
    },
    async getSkill(e) {
      return v.get(`/api/interview/skills/${e}`);
    },
    async parseJd(e) {
      return v.post("/api/interview/skills/parse-jd", {
        jdText: e
      });
    }
  };
  et = {
    async getResumes() {
      return v.get("/api/resumes");
    },
    async getResumeDetail(e) {
      return v.get(`/api/resumes/${e}/detail`);
    },
    async getInterviewDetail(e) {
      return v.get(`/api/interview/sessions/${e}/details`);
    },
    async exportAnalysisPdf(e) {
      return v.download(`/api/resumes/${e}/export`);
    },
    async exportInterviewPdf(e) {
      return v.download(`/api/interview/sessions/${e}/export`);
    },
    async deleteResume(e) {
      return v.delete(`/api/resumes/${e}`);
    },
    async deleteInterview(e) {
      return v.delete(`/api/interview/sessions/${e}`);
    },
    async getStatistics() {
      return v.get("/api/resumes/statistics");
    },
    async reanalyze(e, t) {
      const r = t ? `?llmProvider=${encodeURIComponent(t)}` : "";
      return v.post(`/api/resumes/${e}/reanalyze${r}`);
    }
  };
  var tr = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, vt = K.createContext && K.createContext(tr), an = [
    "attr",
    "size",
    "title"
  ];
  function on(e, t) {
    if (e == null) return {};
    var r, s, n = ln(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (s = 0; s < i.length; s++) r = i[s], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
    }
    return n;
  }
  function ln(e, t) {
    if (e == null) return {};
    var r = {};
    for (var s in e) if ({}.hasOwnProperty.call(e, s)) {
      if (t.indexOf(s) !== -1) continue;
      r[s] = e[s];
    }
    return r;
  }
  function Ne() {
    return Ne = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var s in r) ({}).hasOwnProperty.call(r, s) && (e[s] = r[s]);
      }
      return e;
    }, Ne.apply(null, arguments);
  }
  function kt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      t && (s = s.filter(function(n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })), r.push.apply(r, s);
    }
    return r;
  }
  function Ce(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] != null ? arguments[t] : {};
      t % 2 ? kt(Object(r), true).forEach(function(s) {
        cn(e, s, r[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach(function(s) {
        Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s));
      });
    }
    return e;
  }
  function cn(e, t, r) {
    return (t = dn(t)) in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[t] = r, e;
  }
  function dn(e) {
    var t = un(e, "string");
    return typeof t == "symbol" ? t : t + "";
  }
  function un(e, t) {
    if (typeof e != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var s = r.call(e, t);
      if (typeof s != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (t === "string" ? String : Number)(e);
  }
  function rr(e) {
    return e && e.map((t, r) => K.createElement(t.tag, Ce({
      key: r
    }, t.attr), rr(t.child)));
  }
  function z(e) {
    return (t) => K.createElement(fn, Ne({
      attr: Ce({}, e.attr)
    }, t), rr(e.child));
  }
  function fn(e) {
    var t = (r) => {
      var { attr: s, size: n, title: i } = e, o = on(e, an), d = n || r.size || "1em", h;
      return r.className && (h = r.className), e.className && (h = (h ? h + " " : "") + e.className), K.createElement("svg", Ne({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, r.attr, s, o, {
        className: h,
        style: Ce(Ce({
          color: e.color || r.color
        }, r.style), e.style),
        height: d,
        width: d,
        xmlns: "http://www.w3.org/2000/svg"
      }), i && K.createElement("title", null, i), e.children);
    };
    return vt !== void 0 ? K.createElement(vt.Consumer, null, (r) => t(r)) : t(tr);
  }
  function mn(e) {
    return z({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
          },
          child: []
        }
      ]
    })(e);
  }
  function pn(e) {
    return z({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
          },
          child: []
        }
      ]
    })(e);
  }
  function hn(e) {
    return z({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M11.915 0 11.7.215C9.515 2.4 7.47 6.39 6.046 10.483c-1.064 1.024-3.633 2.81-3.711 3.551-.093.87 1.746 2.611 1.55 3.235-.198.625-1.304 1.408-1.014 1.939.1.188.823.011 1.277-.491a13.389 13.389 0 0 0-.017 2.14c.076.906.27 1.668.643 2.232.372.563.956.911 1.667.911.397 0 .727-.114 1.024-.264.298-.149.571-.33.91-.5.68-.34 1.634-.666 3.53-.604 1.903.062 2.872.39 3.559.704.687.314 1.15.664 1.925.664.767 0 1.395-.336 1.807-.9.412-.563.631-1.33.72-2.24.06-.623.055-1.32 0-2.066.454.45 1.117.604 1.213.424.29-.53-.816-1.314-1.013-1.937-.198-.624 1.642-2.366 1.549-3.236-.08-.748-2.707-2.568-3.748-3.586C16.428 6.374 14.308 2.394 12.13.215zm.175 6.038a2.95 2.95 0 0 1 2.943 2.942 2.95 2.95 0 0 1-2.943 2.943A2.95 2.95 0 0 1 9.148 8.98a2.95 2.95 0 0 1 2.942-2.942zM8.685 7.983a3.515 3.515 0 0 0-.145.997c0 1.951 1.6 3.55 3.55 3.55 1.95 0 3.55-1.598 3.55-3.55 0-.329-.046-.648-.132-.951.334.095.64.208.915.336a42.699 42.699 0 0 1 2.042 5.829c.678 2.545 1.01 4.92.846 6.607-.082.844-.29 1.51-.606 1.94-.315.431-.713.651-1.315.651-.593 0-.932-.27-1.673-.61-.741-.338-1.825-.694-3.792-.758-1.974-.064-3.073.293-3.821.669-.375.188-.659.373-.911.5s-.466.2-.752.2c-.53 0-.876-.209-1.16-.64-.285-.43-.474-1.101-.545-1.948-.141-1.693.176-4.069.823-6.614a43.155 43.155 0 0 1 1.934-5.783c.348-.167.749-.31 1.192-.425zm-3.382 4.362a.216.216 0 0 1 .13.031c-.166.56-.323 1.116-.463 1.665a33.849 33.849 0 0 0-.547 2.555 3.9 3.9 0 0 0-.2-.39c-.58-1.012-.914-1.642-1.16-2.08.315-.24 1.679-1.755 2.24-1.781zm13.394.01c.562.027 1.926 1.543 2.24 1.783-.246.438-.58 1.068-1.16 2.08a4.428 4.428 0 0 0-.163.309 32.354 32.354 0 0 0-.562-2.49 40.579 40.579 0 0 0-.482-1.652.216.216 0 0 1 .127-.03z"
          },
          child: []
        }
      ]
    })(e);
  }
  function xn(e) {
    return z({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M19.8772 1.4685L24 2.5326v18.9426l-4.1228 1.0563V1.4685zm-13.3481 9.428l4.115 1.0641v8.9786l-4.115 1.0642v-11.107zM0 2.572l4.115 1.0642v16.7354L0 21.428V2.572zm17.4553 5.6205v11.107l-4.1228-1.0642V9.2568l4.1228-1.0642z"
          },
          child: []
        }
      ]
    })(e);
  }
  function gn(e) {
    return z({
      attr: {
        role: "img",
        viewBox: "0 0 24 24"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M14.391 16.22c-.963.044-.865-.459-.302-1.234 1.32-1.768 3.82-4.236 3.906-5.982.151-2.283-2.143-3.026-4.501-3.004-1.645.022-3.344.492-4.501.906C5 8.315 2.489 10.576.909 13.076-.768 15.554-.216 17.923 3.322 18c2.716-.109 4.48-.862 6.32-1.802.01 0-5.086 1.453-6.958.383l-.008-.002c-.193-.11-.404-.264-.457-.683-.012-.885 1.46-1.802 2.283-2.097v-1.533a5.374 5.374 0 0 0 1.955.366 5.378 5.378 0 0 0 3.472-1.265c.037.13.056.278.044.447h.371c.048-.394-.172-.706-.172-.706-.333-.529-.915-.52-.915-.52s.315.137.529.466a4.953 4.953 0 0 1-4.665.932l1.21-1.2-.336-.874c2.435-.852 4.48-1.507 7.812-2.085l-.746-.624.389-.24c2.01.568 3.325.985 3.253 2.051a2.672 2.672 0 0 1-.202.611c-.584 1.158-2.326 3.09-3.029 3.898-.465.535-.92 1.06-1.245 1.562-.335.503-.54.971-.551 1.42.043 3.504 10.334-1.64 12.324-3.003-2.943 1.266-6.113 2.489-9.609 2.718Z"
          },
          child: []
        }
      ]
    })(e);
  }
  function bn(e) {
    return z({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M6 12h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M14 12h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 7l-2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M9 7l2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M11 14l-2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M13 14l2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 5h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 19h4"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M17 17l2 -3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M19 10l-2 -3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M7 7l-2 3"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M5 14l2 3"
          },
          child: []
        }
      ]
    })(e);
  }
  function wn(e) {
    return z({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M20 8.04l-12.122 12.124a2.857 2.857 0 1 1 -4.041 -4.04l12.122 -12.124"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M7 13h8"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M19 15l1.5 1.6a2 2 0 1 1 -3 0l1.5 -1.6z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 3l6 6"
          },
          child: []
        }
      ]
    })(e);
  }
  function yn(e) {
    return z({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"
          },
          child: []
        }
      ]
    })(e);
  }
  function vn(e) {
    return z({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M12 2v2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M9 12v9"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 12v9"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M5 16l4 -2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 14l4 2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M9 18h6"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M10 8v.01"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M14 8v.01"
          },
          child: []
        }
      ]
    })(e);
  }
  function kn(e) {
    return z({
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M3 19a2 2 0 0 0 2 2c2 0 2 -4 3 -9s1 -9 3 -9a2 2 0 0 1 2 2"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M5 12h6"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 12l6 6"
          },
          child: []
        },
        {
          tag: "path",
          attr: {
            d: "M15 18l6 -6"
          },
          child: []
        }
      ]
    })(e);
  }
  const jn = {
    "java-backend": hn,
    frontend: mn,
    "python-backend": pn,
    "bytedance-backend": xn,
    "ali-backend": gn,
    algorithm: kn,
    "system-design": bn,
    "test-development": wn,
    "ai-agent-dev": vn,
    custom: yn
  };
  Ve = function(e) {
    return jn[e] ?? null;
  };
  const sr = b.createContext(null);
  let Sn = 1;
  function En({ children: e }) {
    const [t, r] = b.useState([]), s = b.useRef(/* @__PURE__ */ new Map()), n = b.useCallback((d) => {
      r((l) => l.filter((u) => u.id !== d));
      const h = s.current.get(d);
      h && (clearTimeout(h), s.current.delete(d));
    }, []), o = {
      showToast: b.useCallback((d, h = "success") => {
        const l = Sn++;
        r((p) => [
          ...p.slice(-2),
          {
            id: l,
            message: d,
            type: h
          }
        ]);
        const u = setTimeout(() => n(l), 3e3);
        s.current.set(l, u);
      }, [
        n
      ])
    };
    return a.jsxs(sr.Provider, {
      value: o,
      children: [
        e,
        a.jsx("div", {
          className: "fixed top-4 right-4 z-[100] flex flex-col gap-2",
          children: t.map((d) => a.jsx("div", {
            className: `px-4 py-3 rounded-lg shadow-lg text-sm text-white transition-all ${d.type === "error" ? "bg-red-500" : "bg-primary-500"}`,
            onClick: () => n(d.id),
            children: d.message
          }, d.id))
        })
      ]
    });
  }
  Rn = function() {
    const e = b.useContext(sr);
    if (!e) throw new Error("useToast \u5FC5\u987B\u5728 <ToastProvider> \u5185\u4F7F\u7528");
    return e;
  };
  let Cn, Tn, jt;
  Nn = [
    {
      value: "junior",
      label: "\u6821\u62DB",
      desc: "0-1 \u5E74"
    },
    {
      value: "mid",
      label: "\u4E2D\u7EA7",
      desc: "1-3 \u5E74"
    },
    {
      value: "senior",
      label: "\u9AD8\u7EA7",
      desc: "3 \u5E74+"
    }
  ];
  We = "custom";
  Cn = "java-backend";
  Tn = "";
  jt = 50;
  On = function(e) {
    const { defaultMode: t = "text", defaultResumeId: r, autoLoad: s = true } = e ?? {}, { showToast: n } = Rn(), [i, o] = b.useState(t), [d, h] = b.useState(Cn), [l, u] = b.useState("mid"), [p, m] = b.useState([]), [y, f] = b.useState(false), [g, x] = b.useState(false), [j, T] = b.useState(void 0), [E, N] = b.useState([]), [A, $] = b.useState(6), [P, oe] = b.useState(30), [ee, ge] = b.useState(Tn), [q, te] = b.useState(""), [H, J] = b.useState(""), [le, L] = b.useState([]), [ce, D] = b.useState(false), de = d === We, be = H.length > 0 && q !== H, U = de && (le.length === 0 || be || ce), V = async () => {
      f(true);
      try {
        const O = await yt.listSkills();
        return m(O), O;
      } catch (O) {
        return console.error("Failed to load skills:", O), [];
      } finally {
        f(false);
      }
    }, re = async () => {
      try {
        const O = await et.getResumes();
        N(O);
      } catch (O) {
        console.error("Failed to load resumes:", O);
      }
    }, se = async () => {
      if (!q || q.length < jt) {
        n(`JD \u5185\u5BB9\u592A\u5C11\uFF08\u81F3\u5C11 ${jt} \u5B57\uFF09\uFF0C\u8BF7\u8865\u5145\u540E\u91CD\u8BD5`, "error");
        return;
      }
      D(true);
      try {
        const O = await yt.parseJd(q);
        L(O), J(q);
      } catch {
        n("JD \u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u6216\u9009\u62E9\u9884\u8BBE\u4E3B\u9898", "error");
      } finally {
        D(false);
      }
    };
    return b.useEffect(() => {
      s && (o(t), r != null && (T(r), x(true)), V(), re());
    }, [
      s,
      t,
      r
    ]), {
      mode: i,
      setMode: o,
      skillId: d,
      setSkillId: h,
      difficulty: l,
      setDifficulty: u,
      skills: p,
      setSkills: m,
      loadingSkills: y,
      showMore: g,
      setShowMore: x,
      resumeId: j,
      setResumeId: T,
      resumes: E,
      questionCount: A,
      setQuestionCount: $,
      plannedDuration: P,
      setPlannedDuration: oe,
      llmProvider: ee,
      setLlmProvider: ge,
      customJdText: q,
      setCustomJdText: te,
      parsedCustomJdText: H,
      customCategories: le,
      parsingJd: ce,
      jdNeedsReparse: be,
      isCustomStartDisabled: U,
      isCustomSkill: de,
      loadSkills: V,
      loadResumes: re,
      handleParseJd: se,
      getSkillIcon: Ve,
      get selectedSkill() {
        return p.find((O) => O.id === d);
      }
    };
  };
  Pn = {
    list: () => v.get("/api/llm-provider/list"),
    get: (e) => v.get(`/api/llm-provider/${e}`),
    create: (e) => v.post("/api/llm-provider", e),
    update: (e, t) => v.put(`/api/llm-provider/${e}`, t),
    delete: (e) => v.delete(`/api/llm-provider/${e}`),
    test: (e) => v.post(`/api/llm-provider/${e}/test`),
    reload: () => v.post("/api/llm-provider/reload"),
    getDefaultProvider: () => v.get("/api/llm-provider/default-provider"),
    updateDefaultProvider: (e) => v.put("/api/llm-provider/default-provider", e),
    updateDefaultEmbeddingProvider: (e) => v.put("/api/llm-provider/default-embedding-provider", e),
    updateDefaultRerankProvider: (e) => v.put("/api/llm-provider/default-rerank-provider", e),
    fetchModels: (e) => v.post("/api/llm-provider/models", e),
    getAsrConfig: () => v.get("/api/llm-provider/voice/asr"),
    updateAsrConfig: (e) => v.put("/api/llm-provider/voice/asr", e),
    getTtsConfig: () => v.get("/api/llm-provider/voice/tts"),
    updateTtsConfig: (e) => v.put("/api/llm-provider/voice/tts", e),
    testAsr: () => v.post("/api/llm-provider/voice/asr/test")
  };
  let ye = null, St = 0;
  const _n = 1e4;
  function In() {
    const e = Date.now();
    return ye && e - St < _n || (ye = Pn.list().then((t) => t.filter((r) => !!r.model)).finally(() => {
      St = Date.now();
    })), ye;
  }
  An = function() {
    const [e, t] = b.useState([]);
    return b.useEffect(() => {
      let r = false;
      return In().then((s) => {
        r || t(s);
      }).catch((s) => {
        console.error("Failed to load chat providers:", s);
      }), () => {
        r = true;
      };
    }, []), e;
  };
  const Et = `w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600
  bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white
  focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-400 transition-shadow
  disabled:cursor-not-allowed disabled:opacity-60`;
  Ln = function({ providers: e, value: t, onChange: r, disabled: s, id: n }) {
    return e.length === 0 ? a.jsx("select", {
      id: n,
      value: "",
      disabled: true,
      className: Et,
      children: a.jsx("option", {
        value: "",
        children: "\u8DDF\u968F\u7CFB\u7EDF\u9ED8\u8BA4\uFF08\u672A\u914D\u7F6E\u5176\u4ED6 Provider\uFF09"
      })
    }) : a.jsxs("select", {
      id: n,
      value: t,
      disabled: s,
      onChange: (i) => r(i.target.value),
      className: Et,
      children: [
        a.jsx("option", {
          value: "",
          children: "\u8DDF\u968F\u7CFB\u7EDF\u9ED8\u8BA4"
        }),
        e.map((i) => a.jsxs("option", {
          value: i.id,
          children: [
            i.id,
            " \xB7 ",
            i.model
          ]
        }, i.id))
      ]
    });
  };
  function Dn({ isOpen: e, onClose: t, onStart: r, defaultMode: s = "text", defaultResumeId: n, hideModeSwitch: i = false, title: o = "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5", subtitle: d = "\u9009\u62E9\u9762\u8BD5\u6A21\u5F0F\u548C\u4E3B\u9898\uFF0C\u5FEB\u901F\u5F00\u59CB", startButtonText: h = "\u5F00\u59CB\u9762\u8BD5" }) {
    const l = On({
      defaultMode: s,
      defaultResumeId: n,
      autoLoad: false
    }), u = An();
    b.useEffect(() => {
      e && (l.setMode(s), n != null && (l.setResumeId(n), l.setShowMore(true)), l.loadSkills(), l.loadResumes());
    }, [
      e,
      s,
      n
    ]);
    const p = () => {
      const m = l.selectedSkill;
      l.isCustomStartDisabled || r({
        mode: l.mode,
        skillId: l.skillId,
        skillName: (m == null ? void 0 : m.name) || "\u81EA\u5B9A\u4E49",
        difficulty: l.difficulty,
        resumeId: l.resumeId,
        llmProvider: l.llmProvider,
        questionCount: l.questionCount,
        techEnabled: true,
        projectEnabled: true,
        hrEnabled: true,
        plannedDuration: l.plannedDuration,
        customJdText: l.isCustomSkill ? l.parsedCustomJdText : void 0,
        customCategories: l.isCustomSkill ? l.customCategories : void 0
      });
    };
    return e ? a.jsx(De, {
      children: e && a.jsxs(a.Fragment, {
        children: [
          a.jsx(G.div, {
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1
            },
            exit: {
              opacity: 0
            },
            onClick: t,
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          }),
          a.jsx("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
            children: a.jsxs(G.div, {
              initial: {
                opacity: 0,
                scale: 0.95,
                y: 20
              },
              animate: {
                opacity: 1,
                scale: 1,
                y: 0
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                y: 20
              },
              onClick: (m) => m.stopPropagation(),
              className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              children: [
                a.jsx("div", {
                  className: "px-6 py-5 border-b border-slate-100 dark:border-slate-700/50",
                  children: a.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          a.jsx("div", {
                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25",
                            children: a.jsx(Ee, {
                              className: "w-5 h-5 text-white"
                            })
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("h2", {
                                className: "text-lg font-bold text-slate-900 dark:text-white",
                                children: o
                              }),
                              a.jsx("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400",
                                children: d
                              })
                            ]
                          })
                        ]
                      }),
                      a.jsx("button", {
                        onClick: t,
                        className: "p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
                        children: a.jsx(ar, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  })
                }),
                a.jsxs("div", {
                  className: "px-6 py-5 space-y-5",
                  children: [
                    !i && a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                          children: "\u9762\u8BD5\u6A21\u5F0F"
                        }),
                        a.jsx("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            {
                              value: "text",
                              label: "\u6587\u5B57\u9762\u8BD5",
                              icon: ir,
                              desc: "\u63A8\u8350\uFF1A\u66F4\u7A33\u5B9A\uFF0C\u66F4\u9002\u5408\u7CFB\u7EDF\u5316\u7EC3\u4E60",
                              recommended: true
                            },
                            {
                              value: "voice",
                              label: "\u8BED\u97F3\u9762\u8BD5",
                              icon: or,
                              desc: "\u5B9E\u65F6\u8BED\u97F3\u5BF9\u8BDD\uFF0C\u504F\u4E34\u573A\u6A21\u62DF",
                              recommended: false
                            }
                          ].map((m) => {
                            const y = m.icon, f = l.mode === m.value;
                            return a.jsxs("button", {
                              onClick: () => l.setMode(m.value),
                              className: `flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left
                              ${f ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"}`,
                              children: [
                                a.jsx(y, {
                                  className: `w-5 h-5 flex-shrink-0 ${f ? "text-primary-500" : "text-slate-400"}`
                                }),
                                a.jsxs("div", {
                                  className: "min-w-0",
                                  children: [
                                    a.jsxs("p", {
                                      className: `font-semibold text-sm flex items-center gap-2 ${f ? "text-primary-700 dark:text-primary-300" : "text-slate-900 dark:text-white"}`,
                                      children: [
                                        a.jsx("span", {
                                          children: m.label
                                        }),
                                        m.recommended && a.jsx("span", {
                                          className: "px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
                                          children: "\u63A8\u8350"
                                        })
                                      ]
                                    }),
                                    a.jsx("p", {
                                      className: "text-[11px] text-slate-500 dark:text-slate-400",
                                      children: m.desc
                                    })
                                  ]
                                })
                              ]
                            }, m.value);
                          })
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                          children: "\u9762\u8BD5\u65B9\u5411"
                        }),
                        l.loadingSkills ? a.jsxs("div", {
                          className: "flex items-center gap-2 py-4 text-slate-400",
                          children: [
                            a.jsx(Fe, {
                              className: "w-4 h-4 animate-spin"
                            }),
                            a.jsx("span", {
                              className: "text-sm",
                              children: "\u52A0\u8F7D\u4E2D..."
                            })
                          ]
                        }) : a.jsxs("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            l.skills.map((m) => {
                              var _a2, _b, _c, _d;
                              const y = l.skillId === m.id, f = Ve(m.id), g = ((_a2 = m.display) == null ? void 0 : _a2.icon) || "\u{1F4CB}";
                              return a.jsxs("button", {
                                onClick: () => l.setSkillId(m.id),
                                className: `flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left
                              ${y ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"}`,
                                children: [
                                  a.jsx("div", {
                                    className: `w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0 ${y ? ((_b = m.display) == null ? void 0 : _b.iconBg) || "bg-primary-100 dark:bg-primary-900/50" : "bg-slate-100 dark:bg-slate-700"}`,
                                    children: f ? a.jsx(f, {
                                      className: `w-5 h-5 ${y ? ((_c = m.display) == null ? void 0 : _c.iconColor) || "text-primary-600" : "text-slate-500 dark:text-slate-400"}`
                                    }) : a.jsx("span", {
                                      className: y ? ((_d = m.display) == null ? void 0 : _d.iconColor) || "text-primary-600" : "",
                                      children: g
                                    })
                                  }),
                                  a.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      a.jsx("span", {
                                        className: `text-xs font-medium block truncate ${y ? "text-primary-700 dark:text-primary-300" : "text-slate-700 dark:text-slate-300"}`,
                                        children: m.name
                                      }),
                                      a.jsx("span", {
                                        className: "text-[10px] text-slate-400 truncate block",
                                        children: m.description
                                      })
                                    ]
                                  })
                                ]
                              }, m.id);
                            }),
                            a.jsxs("button", {
                              onClick: () => l.setSkillId(We),
                              className: `flex items-center gap-3 p-3 rounded-xl border-2 border-dashed transition-all duration-200 text-left
                          ${l.isCustomSkill ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600"}`,
                              children: [
                                a.jsx("div", {
                                  className: `w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${l.isCustomSkill ? "bg-primary-100 dark:bg-primary-900/50" : "bg-slate-100 dark:bg-slate-700"}`,
                                  children: (() => {
                                    const m = Ve(We);
                                    return m ? a.jsx(m, {
                                      className: `w-5 h-5 ${l.isCustomSkill ? "text-primary-600 dark:text-primary-400" : "text-slate-500 dark:text-slate-400"}`
                                    }) : a.jsx("span", {
                                      className: "text-base",
                                      children: "\u2728"
                                    });
                                  })()
                                }),
                                a.jsx("div", {
                                  className: "flex-1 min-w-0",
                                  children: a.jsx("span", {
                                    className: `text-xs font-medium block ${l.isCustomSkill ? "text-primary-700 dark:text-primary-300" : "text-slate-500 dark:text-slate-400"}`,
                                    children: "\u81EA\u5B9A\u4E49 JD"
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    a.jsx(De, {
                      children: l.isCustomSkill && a.jsx(G.div, {
                        initial: {
                          height: 0,
                          opacity: 0
                        },
                        animate: {
                          height: "auto",
                          opacity: 1
                        },
                        exit: {
                          height: 0,
                          opacity: 0
                        },
                        className: "overflow-hidden",
                        children: a.jsxs("div", {
                          className: "space-y-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700",
                          children: [
                            a.jsx("textarea", {
                              value: l.customJdText,
                              onChange: (m) => l.setCustomJdText(m.target.value),
                              placeholder: "\u7C98\u8D34\u76EE\u6807\u5C97\u4F4D\u7684\u804C\u4F4D\u63CF\u8FF0\uFF08JD\uFF09\uFF0C\u81F3\u5C11 50 \u5B57...",
                              rows: 4,
                              className: `w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700\r
                            bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white\r
                            placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2\r
                            focus:ring-primary-500/50 focus:border-primary-400 transition-shadow`
                            }),
                            a.jsxs("button", {
                              onClick: l.handleParseJd,
                              disabled: l.parsingJd || !l.customJdText,
                              className: `flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg\r
                            bg-primary-500 text-white hover:bg-primary-600 disabled:opacity-50\r
                            disabled:cursor-not-allowed transition-colors`,
                              children: [
                                l.parsingJd ? a.jsx(Fe, {
                                  className: "w-4 h-4 animate-spin"
                                }) : a.jsx(Ee, {
                                  className: "w-4 h-4"
                                }),
                                "\u89E3\u6790\u9762\u8BD5\u65B9\u5411"
                              ]
                            }),
                            l.customCategories.length > 0 && a.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: l.customCategories.map((m, y) => a.jsxs("span", {
                                className: "px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300",
                                children: [
                                  m.label,
                                  a.jsxs("span", {
                                    className: "ml-1 text-[10px] text-primary-500",
                                    children: [
                                      "(",
                                      m.priority,
                                      ")"
                                    ]
                                  })
                                ]
                              }, y))
                            }),
                            l.jdNeedsReparse && a.jsx("p", {
                              className: "text-xs text-amber-600 dark:text-amber-400",
                              children: "JD \u5DF2\u4FEE\u6539\uFF0C\u8BF7\u91CD\u65B0\u89E3\u6790\u540E\u518D\u5F00\u59CB\u9762\u8BD5\u3002"
                            })
                          ]
                        })
                      })
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                          children: "\u96BE\u5EA6"
                        }),
                        a.jsx("div", {
                          className: "grid grid-cols-3 gap-2",
                          children: Nn.map((m) => {
                            const y = l.difficulty === m.value;
                            return a.jsxs("button", {
                              onClick: () => l.setDifficulty(m.value),
                              className: `py-2.5 px-3 rounded-xl border-2 transition-all duration-200 text-center
                            ${y ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600"}`,
                              children: [
                                a.jsx("p", {
                                  className: `text-sm font-semibold ${y ? "text-primary-700 dark:text-primary-300" : "text-slate-700 dark:text-slate-300"}`,
                                  children: m.label
                                }),
                                a.jsx("p", {
                                  className: "text-[11px] text-slate-400",
                                  children: m.desc
                                })
                              ]
                            }, m.value);
                          })
                        })
                      ]
                    }),
                    a.jsxs("button", {
                      onClick: () => l.setShowMore(!l.showMore),
                      className: "w-full flex items-center gap-2 py-2 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors",
                      children: [
                        l.showMore ? a.jsx(lr, {
                          className: "w-4 h-4"
                        }) : a.jsx(cr, {
                          className: "w-4 h-4"
                        }),
                        a.jsx("span", {
                          children: "\u66F4\u591A\u9009\u9879"
                        }),
                        a.jsx("div", {
                          className: "flex-1 border-t border-slate-200 dark:border-slate-700"
                        })
                      ]
                    }),
                    a.jsx(De, {
                      children: l.showMore && a.jsxs(G.div, {
                        initial: {
                          height: 0,
                          opacity: 0
                        },
                        animate: {
                          height: "auto",
                          opacity: 1
                        },
                        exit: {
                          height: 0,
                          opacity: 0
                        },
                        className: "overflow-hidden space-y-4",
                        children: [
                          a.jsxs("div", {
                            className: "bg-gradient-to-br from-primary-50/80 to-blue-50/80 dark:from-primary-900/20 dark:to-blue-900/10 rounded-xl p-4 border border-primary-100 dark:border-primary-800/30",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                  a.jsx(Ct, {
                                    className: "w-5 h-5 text-primary-500"
                                  }),
                                  a.jsx("p", {
                                    className: "font-semibold text-sm text-primary-900 dark:text-primary-100",
                                    children: "\u57FA\u4E8E\u7B80\u5386\u9762\u8BD5\uFF08\u53EF\u9009\uFF09"
                                  })
                                ]
                              }),
                              a.jsxs("select", {
                                value: l.resumeId || "",
                                onChange: (m) => l.setResumeId(m.target.value ? parseInt(m.target.value) : void 0),
                                className: `w-full px-4 py-2.5 rounded-lg border border-primary-200 dark:border-primary-700/50\r
                            bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white\r
                            focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-shadow`,
                                children: [
                                  a.jsx("option", {
                                    value: "",
                                    children: "\u4E0D\u4F7F\u7528\u7B80\u5386\uFF08\u901A\u7528\u63D0\u95EE\uFF09"
                                  }),
                                  l.resumes.map((m) => a.jsx("option", {
                                    value: m.id,
                                    children: m.filename
                                  }, m.id))
                                ]
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                className: "flex items-center gap-2 mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200",
                                children: "\u9762\u8BD5\u6A21\u578B"
                              }),
                              a.jsx(Ln, {
                                providers: u,
                                value: l.llmProvider,
                                onChange: l.setLlmProvider
                              }),
                              a.jsx("p", {
                                className: "mt-1 text-xs text-slate-400 dark:text-slate-500",
                                children: '\u672C\u6B21\u9762\u8BD5\u7684\u51FA\u9898\u4E0E\u8BC4\u4F30\u5C06\u4F7F\u7528\u6240\u9009\u6A21\u578B\uFF0C\u53EF\u5728"\u8BBE\u7F6E \u2192 \u6A21\u578B\u670D\u52A1"\u4E2D\u7BA1\u7406'
                              })
                            ]
                          }),
                          l.mode === "text" && a.jsxs("div", {
                            children: [
                              a.jsx("label", {
                                className: "flex items-center gap-2 mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200",
                                children: "\u9898\u76EE\u6570\u91CF"
                              }),
                              a.jsx("div", {
                                className: "flex gap-2",
                                children: [
                                  6,
                                  8,
                                  10,
                                  12
                                ].map((m) => a.jsxs("button", {
                                  onClick: () => l.setQuestionCount(m),
                                  className: `flex-1 py-2 rounded-lg text-sm font-medium transition-all
                                  ${l.questionCount === m ? "bg-primary-500 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"}`,
                                  children: [
                                    m,
                                    " \u9898"
                                  ]
                                }, m))
                              })
                            ]
                          }),
                          l.mode === "voice" && a.jsxs("div", {
                            className: "bg-slate-50/80 dark:bg-slate-900/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-center justify-between mb-3",
                                children: [
                                  a.jsx("p", {
                                    className: "font-semibold text-sm text-slate-900 dark:text-white",
                                    children: "\u8BA1\u5212\u9762\u8BD5\u65F6\u957F"
                                  }),
                                  a.jsxs("div", {
                                    className: "text-2xl font-bold tabular-nums text-primary-600 dark:text-primary-400",
                                    children: [
                                      l.plannedDuration,
                                      a.jsx("span", {
                                        className: "text-xs font-normal text-slate-400 ml-0.5",
                                        children: "min"
                                      })
                                    ]
                                  })
                                ]
                              }),
                              a.jsx("input", {
                                type: "range",
                                min: "15",
                                max: "60",
                                step: "5",
                                value: l.plannedDuration,
                                onChange: (m) => l.setPlannedDuration(parseInt(m.target.value)),
                                className: `w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer\r
                              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4\r
                              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full\r
                              [&::-webkit-slider-thumb]:bg-primary-500 [&::-webkit-slider-thumb]:cursor-pointer\r
                              [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:shadow-primary-500/30`
                              })
                            ]
                          })
                        ]
                      })
                    })
                  ]
                }),
                a.jsx("div", {
                  className: "px-6 py-4 bg-slate-50/80 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-700/50 rounded-b-2xl",
                  children: a.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      a.jsx(G.button, {
                        onClick: t,
                        whileHover: {
                          scale: 1.02
                        },
                        whileTap: {
                          scale: 0.98
                        },
                        className: `flex-1 px-5 py-3 border border-slate-200 dark:border-slate-700\r
                      text-slate-700 dark:text-slate-300 rounded-xl font-medium text-sm\r
                      hover:bg-slate-100 dark:hover:bg-slate-800 transition-all`,
                        children: "\u53D6\u6D88"
                      }),
                      a.jsx(G.button, {
                        onClick: p,
                        whileHover: {
                          scale: 1.02
                        },
                        whileTap: {
                          scale: 0.98
                        },
                        disabled: l.isCustomStartDisabled,
                        className: `flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-all\r
                      bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700\r
                      text-white shadow-lg shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed`,
                        children: h
                      })
                    ]
                  })
                })
              ]
            })
          })
        ]
      })
    }) : null;
  }
  let Rt;
  X = {
    interview: "/interview",
    interviewCreate: (e) => `/interview/create/${e}`,
    interviewSession: (e) => `/interview/session/${e}`,
    resumeUpload: "/upload",
    resumeDetail: (e) => `/history/${e}`,
    knowledgebaseUpload: "/knowledgebase/upload"
  };
  Rt = {
    interviewCreate: "interview/create/:requestId",
    interviewSession: "interview/session/:activeSessionId"
  };
  function Bn() {
    const t = Ke().pathname, { theme: r, toggleTheme: s } = jr(), n = B(), [i, o] = b.useState(null), d = (p) => {
      o({
        defaultMode: "text",
        defaultResumeId: p,
        title: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5",
        subtitle: "\u914D\u7F6E\u9762\u8BD5\u53C2\u6570\uFF0C\u5F00\u59CB\u7EC3\u4E60",
        startButtonText: "\u5F00\u59CB\u9762\u8BD5"
      });
    }, h = (p) => {
      if (o(null), p.mode === "text") {
        n(X.interviewCreate(crypto.randomUUID()), {
          state: {
            resumeId: p.resumeId,
            interviewConfig: {
              skillId: p.skillId,
              difficulty: p.difficulty,
              questionCount: p.questionCount,
              llmProvider: p.llmProvider
            }
          }
        });
        return;
      }
      const m = new URLSearchParams({
        skillId: p.skillId,
        difficulty: p.difficulty
      });
      n(`/voice-interview?${m.toString()}`, {
        state: {
          voiceConfig: {
            skillId: p.skillId,
            difficulty: p.difficulty,
            techEnabled: true,
            projectEnabled: true,
            hrEnabled: true,
            plannedDuration: p.plannedDuration,
            resumeId: p.resumeId,
            llmProvider: p.llmProvider
          }
        }
      });
    }, l = [
      {
        id: "interview",
        title: "\u9762\u8BD5\u51C6\u5907",
        items: [
          {
            id: "resumes",
            path: "/history",
            label: "\u7B80\u5386\u7BA1\u7406",
            icon: Ct,
            description: "\u7BA1\u7406\u7B80\u5386\uFF0CAI \u5206\u6790"
          },
          {
            id: "interview-hub",
            path: "/interview-hub",
            label: "\u6A21\u62DF\u9762\u8BD5",
            icon: Ee,
            description: "\u6587\u5B57/\u8BED\u97F3\u9762\u8BD5\u7EC3\u4E60"
          },
          {
            id: "interviews",
            path: "/interviews",
            label: "\u9762\u8BD5\u8BB0\u5F55",
            icon: fr,
            description: "\u67E5\u770B\u9762\u8BD5\u5386\u53F2"
          },
          {
            id: "interview-schedule",
            path: "/interview-schedule",
            label: "\u9762\u8BD5\u65E5\u7A0B",
            icon: mr,
            description: "\u7BA1\u7406\u9762\u8BD5\u5B89\u6392"
          }
        ]
      },
      {
        id: "knowledge",
        title: "\u77E5\u8BC6\u5E93",
        items: [
          {
            id: "kb-manage",
            path: "/knowledgebase",
            label: "\u77E5\u8BC6\u5E93\u7BA1\u7406",
            icon: pr,
            description: "\u7BA1\u7406\u77E5\u8BC6\u6587\u6863"
          },
          {
            id: "kb-interview",
            path: "/knowledgebase-interview",
            label: "\u77E5\u8BC6\u5E93\u9762\u8BD5",
            icon: hr,
            description: "\u9898\u5E93\u7EF4\u62A4\u4E0E\u9762\u8BD5"
          },
          {
            id: "chat",
            path: "/knowledgebase/chat",
            label: "\u95EE\u7B54\u52A9\u624B",
            icon: xr,
            description: "\u57FA\u4E8E\u77E5\u8BC6\u5E93\u95EE\u7B54"
          }
        ]
      },
      {
        id: "system",
        title: "\u7CFB\u7EDF",
        items: [
          {
            id: "settings",
            path: "/settings",
            label: "\u8BBE\u7F6E",
            icon: gr,
            description: "\u7BA1\u7406\u6A21\u578B\u548C\u8BED\u97F3\u670D\u52A1"
          }
        ]
      }
    ], u = (p) => p.startsWith("#") ? false : p === "/history" ? t === "/history" || t === "/" || t.startsWith("/history/") || t === "/upload" : p === "/interview-hub" ? t === "/interview-hub" || t === X.interview || t.startsWith("/interview/") || t.startsWith("/voice-interview") : p === "/knowledgebase" ? t === "/knowledgebase" || t === "/knowledgebase/upload" : t.startsWith(p);
    return a.jsxs("div", {
      className: "flex min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800",
      children: [
        a.jsxs("aside", {
          className: "w-64 bg-white dark:bg-slate-900 border-r border-slate-100 dark:border-slate-700 fixed h-screen left-0 top-0 z-50 flex flex-col",
          children: [
            a.jsx("div", {
              className: "p-6 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between",
              children: a.jsxs(tt, {
                to: "/history",
                className: "flex items-center gap-3",
                children: [
                  a.jsx("div", {
                    className: "w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30",
                    children: a.jsx(Ee, {
                      className: "w-5 h-5"
                    })
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("span", {
                        className: "text-lg font-bold text-slate-800 dark:text-white tracking-tight block",
                        children: "AI Interview"
                      }),
                      a.jsx("span", {
                        className: "text-xs text-slate-400 dark:text-slate-500",
                        children: "\u667A\u80FD\u9762\u8BD5\u52A9\u624B"
                      })
                    ]
                  })
                ]
              })
            }),
            a.jsx("div", {
              className: "px-4 pb-2",
              children: a.jsx("button", {
                onClick: s,
                className: "w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors",
                children: r === "dark" ? a.jsxs(a.Fragment, {
                  children: [
                    a.jsx(dr, {
                      className: "w-4 h-4"
                    }),
                    a.jsx("span", {
                      className: "text-sm font-medium",
                      children: "\u6D45\u8272\u6A21\u5F0F"
                    })
                  ]
                }) : a.jsxs(a.Fragment, {
                  children: [
                    a.jsx(ur, {
                      className: "w-4 h-4"
                    }),
                    a.jsx("span", {
                      className: "text-sm font-medium",
                      children: "\u6DF1\u8272\u6A21\u5F0F"
                    })
                  ]
                })
              })
            }),
            a.jsx("nav", {
              className: "flex-1 p-4 overflow-y-auto",
              children: a.jsx("div", {
                className: "space-y-6",
                children: l.map((p) => a.jsxs("div", {
                  children: [
                    a.jsx("div", {
                      className: "px-3 mb-2",
                      children: a.jsx("span", {
                        className: "text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                        children: p.title
                      })
                    }),
                    a.jsx("div", {
                      className: "space-y-1",
                      children: p.items.map((m) => {
                        const y = u(m.path);
                        return a.jsxs(tt, {
                          to: m.path,
                          className: `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                          ${y ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"}`,
                          children: [
                            a.jsx("div", {
                              className: `w-9 h-9 rounded-lg flex items-center justify-center transition-colors
                          ${y ? "bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400" : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 group-hover:text-slate-700 dark:group-hover:text-white"}`,
                              children: a.jsx(m.icon, {
                                className: "w-5 h-5"
                              })
                            }),
                            a.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                a.jsx("span", {
                                  className: `text-sm block ${y ? "font-semibold" : "font-medium"}`,
                                  children: m.label
                                }),
                                m.description && a.jsx("span", {
                                  className: "text-xs text-slate-400 dark:text-slate-500 truncate block",
                                  children: m.description
                                })
                              ]
                            }),
                            y && a.jsx(br, {
                              className: "w-4 h-4 text-primary-400"
                            })
                          ]
                        }, m.id);
                      })
                    })
                  ]
                }, p.id))
              })
            }),
            a.jsx("div", {
              className: "p-4 border-t border-slate-100 dark:border-slate-700",
              children: a.jsxs("div", {
                className: "px-3 py-2 bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-primary-900/30 dark:to-slate-800 rounded-xl",
                children: [
                  a.jsx("p", {
                    className: "text-xs text-primary-600 dark:text-primary-400 font-medium",
                    children: "AI \u9762\u8BD5\u52A9\u624B v1.0"
                  }),
                  a.jsx("p", {
                    className: "text-xs text-slate-400 dark:text-slate-500 mt-0.5",
                    children: "Powered by AI"
                  })
                ]
              })
            })
          ]
        }),
        a.jsx("main", {
          className: "flex-1 ml-64 p-10 min-h-screen overflow-y-auto",
          children: a.jsx(G.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            exit: {
              opacity: 0,
              y: -20
            },
            transition: {
              duration: 0.3
            },
            children: a.jsx(yr, {
              context: {
                openInterviewModalWithResume: d
              }
            })
          }, t)
        }),
        a.jsx(Dn, {
          isOpen: i !== null,
          onClose: () => o(null),
          onStart: h,
          defaultMode: (i == null ? void 0 : i.defaultMode) || "text",
          defaultResumeId: i == null ? void 0 : i.defaultResumeId,
          hideModeSwitch: (i == null ? void 0 : i.defaultResumeId) == null,
          title: (i == null ? void 0 : i.title) || "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5",
          subtitle: (i == null ? void 0 : i.subtitle) || "\u9009\u62E9\u9762\u8BD5\u6A21\u5F0F\u548C\u4E3B\u9898\uFF0C\u5FEB\u901F\u5F00\u59CB",
          startButtonText: (i == null ? void 0 : i.startButtonText) || "\u5F00\u59CB\u9762\u8BD5"
        })
      ]
    });
  }
  const Mn = b.lazy(() => R(() => import("./UploadPage-cGcxxqph.js"), __vite__mapDeps([0,1,2,3,4,5]))), Un = b.lazy(() => R(() => import("./HistoryPage-wbfUAEb_.js"), __vite__mapDeps([6,1,2,7,8,9,10,5]))), Fn = b.lazy(() => R(() => import("./ResumeDetailPage-Buh1jQH4.js"), __vite__mapDeps([11,1,2,10,12,9,8,13,3,5]))), zn = b.lazy(() => R(() => import("./InterviewPage-DMV-vcJo.js"), __vite__mapDeps([14,1,2,15,8,16,17,5]))), nr = b.lazy(() => R(() => import("./InterviewHistoryPage-CXuQWOw3.js"), __vite__mapDeps([18,1,2,15,19,9,10,20,21,7,8,12,5]))), $n = b.lazy(() => R(() => import("./KnowledgeBaseQueryPage-C32ZahwH.js").then(async (m) => {
    await m.__tla;
    return m;
  }), __vite__mapDeps([22,1,2,16,23,9,7,8,5]))), qn = b.lazy(() => R(() => import("./KnowledgeBaseUploadPage-yyxF2ldy.js"), __vite__mapDeps([24,1,2,23,4,5]))), Hn = b.lazy(() => R(() => import("./KnowledgeBaseManagePage-BR0g1NOq.js"), __vite__mapDeps([25,1,2,23,7,8,5]))), Jn = b.lazy(() => R(() => import("./KnowledgeBaseInterviewLandingPage-DtK0UBJi.js"), __vite__mapDeps([26,1,2,23,27,5]))), Vn = b.lazy(() => R(() => import("./KnowledgeBaseInterviewQuestionsPage-LC1FgbiS.js"), __vite__mapDeps([28,1,2,23,27,7,8,5]))), Wn = b.lazy(() => R(() => import("./KnowledgeBaseInterviewSessionPage-eQamn9C_.js"), __vite__mapDeps([29,1,2,15,14,8,16,17,5]))), Kn = b.lazy(() => R(() => import("./VoiceInterviewPage-BxACDATe.js"), __vite__mapDeps([30,1,2,17,21,19,5]))), Xn = b.lazy(() => R(() => import("./VoiceInterviewEvaluationPage-CiOFPOwf.js"), __vite__mapDeps([31,1,2,19,13,10,20,5]))), Gn = b.lazy(() => R(() => import("./InterviewSchedulePage-BQpdCZv4.js"), __vite__mapDeps([32,1,2,5,8,33]))), Qn = b.lazy(() => R(() => import("./InterviewHubPage-BQmOGbtm.js"), __vite__mapDeps([34,1,2,15,19,3,21,10,9,5]))), Zn = b.lazy(() => R(() => import("./SettingsPage-C5U5HO6G.js"), __vite__mapDeps([35,1,2,8,5]))), Yn = b.lazy(() => R(() => import("./InterviewDetailPanel-ZEaa4FTU.js"), __vite__mapDeps([13,1,2,10]))), ea = () => a.jsx("div", {
    className: "flex items-center justify-center min-h-[50vh]",
    children: a.jsx("div", {
      className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full animate-spin"
    })
  });
  function ta() {
    const e = B(), t = (r) => {
      e("/history", {
        state: {
          newResumeId: r
        }
      });
    };
    return a.jsx(Mn, {
      onUploadComplete: t
    });
  }
  function ra() {
    const e = B(), t = (r) => {
      e(`/history/${r}`);
    };
    return a.jsx(Un, {
      onSelectResume: t
    });
  }
  function sa() {
    const { resumeId: e } = fe(), t = B(), { openInterviewModalWithResume: r } = Tt();
    if (!e) return a.jsx(Te, {
      to: "/history",
      replace: true
    });
    const s = () => {
      t("/history");
    }, n = (i) => {
      r(i);
    };
    return a.jsx(Fn, {
      resumeId: parseInt(e, 10),
      onBack: s,
      onStartInterview: n
    });
  }
  function ve() {
    const { resumeId: e, requestId: t, activeSessionId: r } = fe(), s = B(), i = Ke().state ?? {}, [o, d] = b.useState(""), [h, l] = b.useState(true), u = e ? parseInt(e, 10) : i.resumeId;
    b.useEffect(() => {
      const f = i.resumeText;
      f ? (d(f), l(false)) : u ? et.getResumeDetail(u).then((g) => {
        d(g.resumeText), l(false);
      }).catch((g) => {
        console.error("\u83B7\u53D6\u7B80\u5386\u6587\u672C\u5931\u8D25", g), l(false);
      }) : l(false);
    }, [
      u,
      i.resumeText
    ]);
    const p = () => {
      if (u) {
        s(`/history/${u}`, {
          replace: false
        });
        return;
      }
      s("/history", {
        replace: false
      });
    }, m = () => {
      s("/interviews");
    }, y = (f) => {
      s(X.interviewSession(f), {
        replace: true,
        state: i
      });
    };
    return !t && !r && !i.sessionIdToResume ? a.jsx(Te, {
      to: X.interviewCreate(crypto.randomUUID()),
      replace: true,
      state: {
        ...i,
        resumeId: u
      }
    }) : h ? a.jsx("div", {
      className: "flex items-center justify-center min-h-screen",
      children: a.jsxs("div", {
        className: "text-center",
        children: [
          a.jsx("div", {
            className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full mx-auto mb-4 animate-spin"
          }),
          a.jsx("p", {
            className: "text-slate-500",
            children: "\u52A0\u8F7D\u4E2D..."
          })
        ]
      })
    }) : a.jsx(zn, {
      resumeText: o,
      resumeId: u,
      sessionIdToResume: r ?? i.sessionIdToResume,
      requestId: t,
      initialConfig: i.interviewConfig,
      onBack: p,
      onSessionCreated: y,
      onInterviewComplete: m
    });
  }
  function na() {
    return a.jsx(vr, {
      children: a.jsx(En, {
        children: a.jsx(b.Suspense, {
          fallback: a.jsx(ea, {}),
          children: a.jsx(kr, {
            children: a.jsxs(k, {
              path: "/",
              element: a.jsx(Bn, {}),
              children: [
                a.jsx(k, {
                  index: true,
                  element: a.jsx(Te, {
                    to: "/history",
                    replace: true
                  })
                }),
                a.jsx(k, {
                  path: "upload",
                  element: a.jsx(ta, {})
                }),
                a.jsx(k, {
                  path: "history",
                  element: a.jsx(ra, {})
                }),
                a.jsx(k, {
                  path: "history/:resumeId",
                  element: a.jsx(sa, {})
                }),
                a.jsx(k, {
                  path: "interview-hub",
                  element: a.jsx(Qn, {})
                }),
                a.jsx(k, {
                  path: "interviews",
                  element: a.jsx(aa, {})
                }),
                a.jsx(k, {
                  path: "interviews/:sessionId",
                  element: a.jsx(Nt, {})
                }),
                a.jsx(k, {
                  path: X.interview.slice(1),
                  element: a.jsx(ve, {})
                }),
                a.jsx(k, {
                  path: Rt.interviewCreate,
                  element: a.jsx(ve, {})
                }),
                a.jsx(k, {
                  path: Rt.interviewSession,
                  element: a.jsx(ve, {})
                }),
                a.jsx(k, {
                  path: "interview/:resumeId",
                  element: a.jsx(ve, {})
                }),
                a.jsx(k, {
                  path: "voice-interview",
                  element: a.jsx(da, {})
                }),
                a.jsx(k, {
                  path: "voice-interview/:sessionId/evaluation",
                  element: a.jsx(Xn, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase",
                  element: a.jsx(oa, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase-interview",
                  element: a.jsx(Jn, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase-interview/:knowledgeBaseId/questions",
                  element: a.jsx(Vn, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase-interview/:knowledgeBaseId/interviews",
                  element: a.jsx(ia, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase-interview/:knowledgeBaseId/interviews/:sessionId",
                  element: a.jsx(Nt, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase-interview/:sessionId",
                  element: a.jsx(Wn, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase/upload",
                  element: a.jsx(ca, {})
                }),
                a.jsx(k, {
                  path: "interview-schedule",
                  element: a.jsx(Gn, {})
                }),
                a.jsx(k, {
                  path: "settings",
                  element: a.jsx(Zn, {})
                }),
                a.jsx(k, {
                  path: "knowledgebase/chat",
                  element: a.jsx(la, {})
                })
              ]
            })
          })
        })
      })
    });
  }
  function aa() {
    const e = B(), { openInterviewModalWithResume: t } = Tt(), r = () => {
      e("/history");
    }, s = async (o, d) => {
      e(`/interviews/${o}`);
    }, n = (o) => {
      t(o);
    }, i = (o) => {
      e(X.interviewSession(o));
    };
    return a.jsx(nr, {
      onBack: r,
      onViewInterview: s,
      onRestartInterview: n,
      onContinueInterview: i
    });
  }
  function ia() {
    const e = B(), { knowledgeBaseId: t } = fe(), r = t ? Number(t) : NaN;
    if (Number.isNaN(r)) return a.jsx(Te, {
      to: "/knowledgebase-interview",
      replace: true
    });
    const s = () => {
      e(`/knowledgebase-interview/${r}/questions`);
    }, n = (o) => {
      e(`/knowledgebase-interview/${r}/interviews/${o}`);
    }, i = (o) => {
      e(`/knowledgebase-interview/${o}`, {
        state: {
          knowledgeBaseId: r
        }
      });
    };
    return a.jsx(nr, {
      knowledgeBaseId: r,
      onBack: s,
      onViewInterview: n,
      onContinueInterview: i
    });
  }
  function Nt() {
    const { sessionId: e } = fe(), { knowledgeBaseId: t } = fe(), r = B(), [s, n] = b.useState(null), [i, o] = b.useState(true), [d, h] = b.useState(""), l = t ? `/knowledgebase-interview/${t}/interviews` : "/interviews";
    return b.useEffect(() => {
      if (!e) {
        r(l);
        return;
      }
      et.getInterviewDetail(e).then((u) => {
        n(u), o(false);
      }).catch(() => {
        h("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25"), o(false);
      });
    }, [
      e,
      r,
      l
    ]), i ? a.jsx("div", {
      className: "flex items-center justify-center min-h-[50vh]",
      children: a.jsx(Fe, {
        className: "w-8 h-8 text-primary-500 animate-spin"
      })
    }) : d || !s ? a.jsx("div", {
      className: "flex items-center justify-center min-h-[50vh]",
      children: a.jsxs("div", {
        className: "text-center",
        children: [
          a.jsx("p", {
            className: "text-red-500 mb-4",
            children: d || "\u9762\u8BD5\u8BB0\u5F55\u4E0D\u5B58\u5728"
          }),
          a.jsx("button", {
            onClick: () => r(l),
            className: "px-5 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600",
            children: "\u8FD4\u56DE\u9762\u8BD5\u8BB0\u5F55"
          })
        ]
      })
    }) : a.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        a.jsxs("div", {
          className: "flex items-center gap-3 mb-6",
          children: [
            a.jsx("button", {
              onClick: () => r(l),
              className: "p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors",
              children: a.jsx("svg", {
                className: "w-5 h-5",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: a.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M15 19l-7-7 7-7"
                })
              })
            }),
            a.jsxs("h1", {
              className: "text-xl font-bold text-slate-900 dark:text-white",
              children: [
                "\u9762\u8BD5\u8BE6\u60C5 #",
                e.slice(-8)
              ]
            })
          ]
        }),
        a.jsx(Yn, {
          interview: s
        })
      ]
    });
  }
  function oa() {
    const e = B(), t = () => {
      e(X.knowledgebaseUpload);
    }, r = () => {
      e("/knowledgebase/chat");
    };
    return a.jsx(Hn, {
      onUpload: t,
      onChat: r
    });
  }
  function la() {
    const e = B(), r = Ke().pathname === "/knowledgebase/chat", s = () => {
      e(r ? "/knowledgebase" : "/history");
    }, n = () => {
      e(X.knowledgebaseUpload);
    };
    return a.jsx($n, {
      onBack: s,
      onUpload: n
    });
  }
  function ca() {
    const e = B(), t = (s) => {
      e("/knowledgebase");
    }, r = () => {
      e("/knowledgebase");
    };
    return a.jsx(qn, {
      onUploadComplete: t,
      onBack: r
    });
  }
  function da() {
    return a.jsx(Kn, {});
  }
  (function() {
    const t = localStorage.getItem("theme"), r = window.matchMedia("(prefers-color-scheme: dark)").matches;
    (t === "dark" || !t && r) && document.documentElement.classList.add("dark");
  })();
  ze.createRoot(document.getElementById("root")).render(a.jsx(K.StrictMode, {
    children: a.jsx(na, {})
  }));
});
export {
  en as A,
  We as C,
  Nn as D,
  Ln as L,
  X as R,
  __tla,
  Rn as a,
  _a as b,
  On as c,
  Ve as d,
  Ia as g,
  et as h,
  Pn as l,
  er as p,
  v as r,
  yt as s,
  An as u
};
