const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/syntax-highlighter-BG_RSeav.js","assets/react-vendor-ek4qDQiW.js"])))=>i.map(i=>d[i]);
import { j as x, z as ii, E as li, m as me, P as oi, G as cn, H as ai, r as si, f as ui, A as wt, t as ci, h as hn } from "./ui-vendor-D79l2AJO.js";
import { i as ot, g as lr, r as U, __tla as __tla_0 } from "./react-vendor-ek4qDQiW.js";
import { Y as hi } from "./index-qDlAe4C1.js";
import { s as fi, k as fn } from "./knowledgebase-Y9TBTJU4.js";
import { r as ve, u as pi, L as mi, __tla as __tla_1 } from "./index-ahWF3Ci-.js";
import { f as di } from "./date-DBJmXC5z.js";
import { D as gi } from "./DeleteConfirmDialog-DPzJH835.js";
import { s as Ut, h as xi, f as ki, a as bi, b as yi, c as wi, d as Wt, _ as Si } from "./syntax-highlighter-BG_RSeav.js";
import "./ConfirmDialog-DJIdcjoY.js";
let dh;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const Ci = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ei = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Ii = {};
  function pn(e, n) {
    return (Ii.jsx ? Ei : Ci).test(e);
  }
  const vi = /[ \t\n\f\r]/g;
  function Ai(e) {
    return typeof e == "object" ? e.type === "text" ? mn(e.value) : false : mn(e);
  }
  function mn(e) {
    return e.replace(vi, "") === "";
  }
  var Qt = {}, dn = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Ti = /\n/g, zi = /^\s*/, Ni = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, ji = /^:\s*/, Fi = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Pi = /^[;\s]*/, _i = /^\s+|\s+$/g, Di = `
`, gn = "/", xn = "*", ze = "", Li = "comment", Ri = "declaration";
  function Mi(e, n) {
    if (typeof e != "string") throw new TypeError("First argument must be a string");
    if (!e) return [];
    n = n || {};
    var t = 1, r = 1;
    function i(g) {
      var w = g.match(Ti);
      w && (t += w.length);
      var v = g.lastIndexOf(Di);
      r = ~v ? g.length - v : r + g.length;
    }
    function o() {
      var g = {
        line: t,
        column: r
      };
      return function(w) {
        return w.position = new l(g), u(), w;
      };
    }
    function l(g) {
      this.start = g, this.end = {
        line: t,
        column: r
      }, this.source = n.source;
    }
    l.prototype.content = e;
    function a(g) {
      var w = new Error(n.source + ":" + t + ":" + r + ": " + g);
      if (w.reason = g, w.filename = n.source, w.line = t, w.column = r, w.source = e, !n.silent) throw w;
    }
    function s(g) {
      var w = g.exec(e);
      if (w) {
        var v = w[0];
        return i(v), e = e.slice(v.length), w;
      }
    }
    function u() {
      s(zi);
    }
    function h(g) {
      var w;
      for (g = g || []; w = c(); ) w !== false && g.push(w);
      return g;
    }
    function c() {
      var g = o();
      if (!(gn != e.charAt(0) || xn != e.charAt(1))) {
        for (var w = 2; ze != e.charAt(w) && (xn != e.charAt(w) || gn != e.charAt(w + 1)); ) ++w;
        if (w += 2, ze === e.charAt(w - 1)) return a("End of comment missing");
        var v = e.slice(2, w - 2);
        return r += 2, i(v), e = e.slice(w), r += 2, g({
          type: Li,
          comment: v
        });
      }
    }
    function p() {
      var g = o(), w = s(Ni);
      if (w) {
        if (c(), !s(ji)) return a("property missing ':'");
        var v = s(Fi), y = g({
          type: Ri,
          property: kn(w[0].replace(dn, ze)),
          value: v ? kn(v[0].replace(dn, ze)) : ze
        });
        return s(Pi), y;
      }
    }
    function f() {
      var g = [];
      h(g);
      for (var w; w = p(); ) w !== false && (g.push(w), h(g));
      return g;
    }
    return u(), f();
  }
  function kn(e) {
    return e ? e.replace(_i, ze) : ze;
  }
  var Oi = Mi, Bi = ot && ot.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  };
  Object.defineProperty(Qt, "__esModule", {
    value: true
  });
  Qt.default = Hi;
  const $i = Bi(Oi);
  function Hi(e, n) {
    let t = null;
    if (!e || typeof e != "string") return t;
    const r = (0, $i.default)(e), i = typeof n == "function";
    return r.forEach((o) => {
      if (o.type !== "declaration") return;
      const { property: l, value: a } = o;
      i ? n(l, a, o) : a && (t = t || {}, t[l] = a);
    }), t;
  }
  var ht = {};
  Object.defineProperty(ht, "__esModule", {
    value: true
  });
  ht.camelCase = void 0;
  var Vi = /^--[a-zA-Z0-9_-]+$/, qi = /-([a-z])/g, Ui = /^[^-]+$/, Wi = /^-(webkit|moz|ms|o|khtml)-/, Qi = /^-(ms)-/, Gi = function(e) {
    return !e || Ui.test(e) || Vi.test(e);
  }, Ki = function(e, n) {
    return n.toUpperCase();
  }, bn = function(e, n) {
    return "".concat(n, "-");
  }, Yi = function(e, n) {
    return n === void 0 && (n = {}), Gi(e) ? e : (e = e.toLowerCase(), n.reactCompat ? e = e.replace(Qi, bn) : e = e.replace(Wi, bn), e.replace(qi, Ki));
  };
  ht.camelCase = Yi;
  var Ji = ot && ot.__importDefault || function(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }, Xi = Ji(Qt), Zi = ht;
  function Lt(e, n) {
    var t = {};
    return !e || typeof e != "string" || (0, Xi.default)(e, function(r, i) {
      r && i && (t[(0, Zi.camelCase)(r, n)] = i);
    }), t;
  }
  Lt.default = Lt;
  var el = Lt;
  const tl = lr(el), or = ar("end"), Gt = ar("start");
  function ar(e) {
    return n;
    function n(t) {
      const r = t && t.position && t.position[e] || {};
      if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
    }
  }
  function nl(e) {
    const n = Gt(e), t = or(e);
    if (n && t) return {
      start: n,
      end: t
    };
  }
  function He(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? yn(e.position) : "start" in e || "end" in e ? yn(e) : "line" in e || "column" in e ? Rt(e) : "";
  }
  function Rt(e) {
    return wn(e && e.line) + ":" + wn(e && e.column);
  }
  function yn(e) {
    return Rt(e && e.start) + "-" + Rt(e && e.end);
  }
  function wn(e) {
    return e && typeof e == "number" ? e : 1;
  }
  class ee extends Error {
    constructor(n, t, r) {
      super(), typeof t == "string" && (r = t, t = void 0);
      let i = "", o = {}, l = false;
      if (t && ("line" in t && "column" in t ? o = {
        place: t
      } : "start" in t && "end" in t ? o = {
        place: t
      } : "type" in t ? o = {
        ancestors: [
          t
        ],
        place: t.position
      } : o = {
        ...t
      }), typeof n == "string" ? i = n : !o.cause && n && (l = true, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
        const s = r.indexOf(":");
        s === -1 ? o.ruleId = r : (o.source = r.slice(0, s), o.ruleId = r.slice(s + 1));
      }
      if (!o.place && o.ancestors && o.ancestors) {
        const s = o.ancestors[o.ancestors.length - 1];
        s && (o.place = s.position);
      }
      const a = o.place && "start" in o.place ? o.place.start : o.place;
      this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = He(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  ee.prototype.file = "";
  ee.prototype.name = "";
  ee.prototype.reason = "";
  ee.prototype.message = "";
  ee.prototype.stack = "";
  ee.prototype.column = void 0;
  ee.prototype.line = void 0;
  ee.prototype.ancestors = void 0;
  ee.prototype.cause = void 0;
  ee.prototype.fatal = void 0;
  ee.prototype.place = void 0;
  ee.prototype.ruleId = void 0;
  ee.prototype.source = void 0;
  const Kt = {}.hasOwnProperty, rl = /* @__PURE__ */ new Map(), il = /[A-Z]/g, ll = /* @__PURE__ */ new Set([
    "table",
    "tbody",
    "thead",
    "tfoot",
    "tr"
  ]), ol = /* @__PURE__ */ new Set([
    "td",
    "th"
  ]), sr = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
  function al(e, n) {
    if (!n || n.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
    const t = n.filePath || void 0;
    let r;
    if (n.development) {
      if (typeof n.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
      r = dl(t, n.jsxDEV);
    } else {
      if (typeof n.jsx != "function") throw new TypeError("Expected `jsx` in production options");
      if (typeof n.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
      r = ml(t, n.jsx, n.jsxs);
    }
    const i = {
      Fragment: n.Fragment,
      ancestors: [],
      components: n.components || {},
      create: r,
      elementAttributeNameCase: n.elementAttributeNameCase || "react",
      evaluater: n.createEvaluater ? n.createEvaluater() : void 0,
      filePath: t,
      ignoreInvalidStyle: n.ignoreInvalidStyle || false,
      passKeys: n.passKeys !== false,
      passNode: n.passNode || false,
      schema: n.space === "svg" ? Ut : xi,
      stylePropertyNameCase: n.stylePropertyNameCase || "dom",
      tableCellAlignToStyle: n.tableCellAlignToStyle !== false
    }, o = ur(i, e, void 0);
    return o && typeof o != "string" ? o : i.create(e, i.Fragment, {
      children: o || void 0
    }, void 0);
  }
  function ur(e, n, t) {
    if (n.type === "element") return sl(e, n, t);
    if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression") return ul(e, n);
    if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") return hl(e, n, t);
    if (n.type === "mdxjsEsm") return cl(e, n);
    if (n.type === "root") return fl(e, n, t);
    if (n.type === "text") return pl(e, n);
  }
  function sl(e, n, t) {
    const r = e.schema;
    let i = r;
    n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Ut, e.schema = i), e.ancestors.push(n);
    const o = hr(e, n.tagName, false), l = gl(e, n);
    let a = Jt(e, n);
    return ll.has(n.tagName) && (a = a.filter(function(s) {
      return typeof s == "string" ? !Ai(s) : true;
    })), cr(e, l, o, n), Yt(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
  }
  function ul(e, n) {
    if (n.data && n.data.estree && e.evaluater) {
      const r = n.data.estree.body[0];
      return r.type, e.evaluater.evaluateExpression(r.expression);
    }
    Ue(e, n.position);
  }
  function cl(e, n) {
    if (n.data && n.data.estree && e.evaluater) return e.evaluater.evaluateProgram(n.data.estree);
    Ue(e, n.position);
  }
  function hl(e, n, t) {
    const r = e.schema;
    let i = r;
    n.name === "svg" && r.space === "html" && (i = Ut, e.schema = i), e.ancestors.push(n);
    const o = n.name === null ? e.Fragment : hr(e, n.name, true), l = xl(e, n), a = Jt(e, n);
    return cr(e, l, o, n), Yt(l, a), e.ancestors.pop(), e.schema = r, e.create(n, o, l, t);
  }
  function fl(e, n, t) {
    const r = {};
    return Yt(r, Jt(e, n)), e.create(n, e.Fragment, r, t);
  }
  function pl(e, n) {
    return n.value;
  }
  function cr(e, n, t, r) {
    typeof t != "string" && t !== e.Fragment && e.passNode && (n.node = r);
  }
  function Yt(e, n) {
    if (n.length > 0) {
      const t = n.length > 1 ? n : n[0];
      t && (e.children = t);
    }
  }
  function ml(e, n, t) {
    return r;
    function r(i, o, l, a) {
      const u = Array.isArray(l.children) ? t : n;
      return a ? u(o, l, a) : u(o, l);
    }
  }
  function dl(e, n) {
    return t;
    function t(r, i, o, l) {
      const a = Array.isArray(o.children), s = Gt(r);
      return n(i, o, l, a, {
        columnNumber: s ? s.column - 1 : void 0,
        fileName: e,
        lineNumber: s ? s.line : void 0
      }, void 0);
    }
  }
  function gl(e, n) {
    const t = {};
    let r, i;
    for (i in n.properties) if (i !== "children" && Kt.call(n.properties, i)) {
      const o = kl(e, i, n.properties[i]);
      if (o) {
        const [l, a] = o;
        e.tableCellAlignToStyle && l === "align" && typeof a == "string" && ol.has(n.tagName) ? r = a : t[l] = a;
      }
    }
    if (r) {
      const o = t.style || (t.style = {});
      o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
    }
    return t;
  }
  function xl(e, n) {
    const t = {};
    for (const r of n.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
      const o = r.data.estree.body[0];
      o.type;
      const l = o.expression;
      l.type;
      const a = l.properties[0];
      a.type, Object.assign(t, e.evaluater.evaluateExpression(a.argument));
    } else Ue(e, n.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
        const a = r.value.data.estree.body[0];
        a.type, o = e.evaluater.evaluateExpression(a.expression);
      } else Ue(e, n.position);
      else o = r.value === null ? true : r.value;
      t[i] = o;
    }
    return t;
  }
  function Jt(e, n) {
    const t = [];
    let r = -1;
    const i = e.passKeys ? /* @__PURE__ */ new Map() : rl;
    for (; ++r < n.children.length; ) {
      const o = n.children[r];
      let l;
      if (e.passKeys) {
        const s = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
        if (s) {
          const u = i.get(s) || 0;
          l = s + "-" + u, i.set(s, u + 1);
        }
      }
      const a = ur(e, o, l);
      a !== void 0 && t.push(a);
    }
    return t;
  }
  function kl(e, n, t) {
    const r = ki(e.schema, n);
    if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
      if (Array.isArray(t) && (t = r.commaSeparated ? bi(t) : yi(t)), r.property === "style") {
        let i = typeof t == "object" ? t : bl(e, String(t));
        return e.stylePropertyNameCase === "css" && (i = yl(i)), [
          "style",
          i
        ];
      }
      return [
        e.elementAttributeNameCase === "react" && r.space ? wi[r.property] || r.property : r.attribute,
        t
      ];
    }
  }
  function bl(e, n) {
    try {
      return tl(n, {
        reactCompat: true
      });
    } catch (t) {
      if (e.ignoreInvalidStyle) return {};
      const r = t, i = new ee("Cannot parse `style` attribute", {
        ancestors: e.ancestors,
        cause: r,
        ruleId: "style",
        source: "hast-util-to-jsx-runtime"
      });
      throw i.file = e.filePath || void 0, i.url = sr + "#cannot-parse-style-attribute", i;
    }
  }
  function hr(e, n, t) {
    let r;
    if (!t) r = {
      type: "Literal",
      value: n
    };
    else if (n.includes(".")) {
      const i = n.split(".");
      let o = -1, l;
      for (; ++o < i.length; ) {
        const a = pn(i[o]) ? {
          type: "Identifier",
          name: i[o]
        } : {
          type: "Literal",
          value: i[o]
        };
        l = l ? {
          type: "MemberExpression",
          object: l,
          property: a,
          computed: !!(o && a.type === "Literal"),
          optional: false
        } : a;
      }
      r = l;
    } else r = pn(n) && !/^[a-z]/.test(n) ? {
      type: "Identifier",
      name: n
    } : {
      type: "Literal",
      value: n
    };
    if (r.type === "Literal") {
      const i = r.value;
      return Kt.call(e.components, i) ? e.components[i] : i;
    }
    if (e.evaluater) return e.evaluater.evaluateExpression(r);
    Ue(e);
  }
  function Ue(e, n) {
    const t = new ee("Cannot handle MDX estrees without `createEvaluater`", {
      ancestors: e.ancestors,
      place: n,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    });
    throw t.file = e.filePath || void 0, t.url = sr + "#cannot-handle-mdx-estrees-without-createevaluater", t;
  }
  function yl(e) {
    const n = {};
    let t;
    for (t in e) Kt.call(e, t) && (n[wl(t)] = e[t]);
    return n;
  }
  function wl(e) {
    let n = e.replace(il, Sl);
    return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
  }
  function Sl(e) {
    return "-" + e.toLowerCase();
  }
  const St = {
    action: [
      "form"
    ],
    cite: [
      "blockquote",
      "del",
      "ins",
      "q"
    ],
    data: [
      "object"
    ],
    formAction: [
      "button",
      "input"
    ],
    href: [
      "a",
      "area",
      "base",
      "link"
    ],
    icon: [
      "menuitem"
    ],
    itemId: null,
    manifest: [
      "html"
    ],
    ping: [
      "a",
      "area"
    ],
    poster: [
      "video"
    ],
    src: [
      "audio",
      "embed",
      "iframe",
      "img",
      "input",
      "script",
      "source",
      "track",
      "video"
    ]
  }, Cl = {};
  function Xt(e, n) {
    const t = Cl, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : true, i = typeof t.includeHtml == "boolean" ? t.includeHtml : true;
    return fr(e, r, i);
  }
  function fr(e, n, t) {
    if (El(e)) {
      if ("value" in e) return e.type === "html" && !t ? "" : e.value;
      if (n && "alt" in e && e.alt) return e.alt;
      if ("children" in e) return Sn(e.children, n, t);
    }
    return Array.isArray(e) ? Sn(e, n, t) : "";
  }
  function Sn(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) r[i] = fr(e[i], n, t);
    return r.join("");
  }
  function El(e) {
    return !!(e && typeof e == "object");
  }
  function ue(e, n, t, r) {
    const i = e.length;
    let o = 0, l;
    if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4) l = Array.from(r), l.unshift(n, t), e.splice(...l);
    else for (t && e.splice(n, t); o < r.length; ) l = r.slice(o, o + 1e4), l.unshift(n, 0), e.splice(...l), o += 1e4, n += 1e4;
  }
  function he(e, n) {
    return e.length > 0 ? (ue(e, e.length, 0, n), e) : n;
  }
  const Cn = {}.hasOwnProperty;
  function pr(e) {
    const n = {};
    let t = -1;
    for (; ++t < e.length; ) Il(n, e[t]);
    return n;
  }
  function Il(e, n) {
    let t;
    for (t in n) {
      const i = (Cn.call(e, t) ? e[t] : void 0) || (e[t] = {}), o = n[t];
      let l;
      if (o) for (l in o) {
        Cn.call(i, l) || (i[l] = []);
        const a = o[l];
        vl(i[l], Array.isArray(a) ? a : a ? [
          a
        ] : []);
      }
    }
  }
  function vl(e, n) {
    let t = -1;
    const r = [];
    for (; ++t < n.length; ) (n[t].add === "after" ? e : r).push(n[t]);
    ue(e, 0, 0, r);
  }
  function mr(e, n) {
    const t = Number.parseInt(e, n);
    return t < 9 || t === 11 || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || (t & 65535) === 65535 || (t & 65535) === 65534 || t > 1114111 ? "\uFFFD" : String.fromCodePoint(t);
  }
  function de(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const ne = Ie(/[A-Za-z]/), Z = Ie(/[\dA-Za-z]/), Al = Ie(/[#-'*+\--9=?A-Z^-~]/);
  function at(e) {
    return e !== null && (e < 32 || e === 127);
  }
  const Mt = Ie(/\d/), Tl = Ie(/[\dA-Fa-f]/), zl = Ie(/[!-/:-@[-`{-~]/);
  function N(e) {
    return e !== null && e < -2;
  }
  function Q(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function R(e) {
    return e === -2 || e === -1 || e === 32;
  }
  const ft = Ie(new RegExp("\\p{P}|\\p{S}", "u")), Ne = Ie(/\s/);
  function Ie(e) {
    return n;
    function n(t) {
      return t !== null && t > -1 && e.test(String.fromCharCode(t));
    }
  }
  function De(e) {
    const n = [];
    let t = -1, r = 0, i = 0;
    for (; ++t < e.length; ) {
      const o = e.charCodeAt(t);
      let l = "";
      if (o === 37 && Z(e.charCodeAt(t + 1)) && Z(e.charCodeAt(t + 2))) i = 2;
      else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
      else if (o > 55295 && o < 57344) {
        const a = e.charCodeAt(t + 1);
        o < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(o, a), i = 1) : l = "\uFFFD";
      } else l = String.fromCharCode(o);
      l && (n.push(e.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
    }
    return n.join("") + e.slice(r);
  }
  function $(e, n, t, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let o = 0;
    return l;
    function l(s) {
      return R(s) ? (e.enter(t), a(s)) : n(s);
    }
    function a(s) {
      return R(s) && o++ < i ? (e.consume(s), a) : (e.exit(t), n(s));
    }
  }
  const Nl = {
    tokenize: jl
  };
  function jl(e) {
    const n = e.attempt(this.parser.constructs.contentInitial, r, i);
    let t;
    return n;
    function r(a) {
      if (a === null) {
        e.consume(a);
        return;
      }
      return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), $(e, n, "linePrefix");
    }
    function i(a) {
      return e.enter("paragraph"), o(a);
    }
    function o(a) {
      const s = e.enter("chunkText", {
        contentType: "text",
        previous: t
      });
      return t && (t.next = s), t = s, l(a);
    }
    function l(a) {
      if (a === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
        return;
      }
      return N(a) ? (e.consume(a), e.exit("chunkText"), o) : (e.consume(a), l);
    }
  }
  const Fl = {
    tokenize: Pl
  }, En = {
    tokenize: _l
  };
  function Pl(e) {
    const n = this, t = [];
    let r = 0, i, o, l;
    return a;
    function a(I) {
      if (r < t.length) {
        const L = t[r];
        return n.containerState = L[1], e.attempt(L[0].continuation, s, u)(I);
      }
      return u(I);
    }
    function s(I) {
      if (r++, n.containerState._closeFlow) {
        n.containerState._closeFlow = void 0, i && A();
        const L = n.events.length;
        let _ = L, S;
        for (; _--; ) if (n.events[_][0] === "exit" && n.events[_][1].type === "chunkFlow") {
          S = n.events[_][1].end;
          break;
        }
        y(r);
        let M = L;
        for (; M < n.events.length; ) n.events[M][1].end = {
          ...S
        }, M++;
        return ue(n.events, _ + 1, 0, n.events.slice(L)), n.events.length = M, u(I);
      }
      return a(I);
    }
    function u(I) {
      if (r === t.length) {
        if (!i) return p(I);
        if (i.currentConstruct && i.currentConstruct.concrete) return g(I);
        n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
      }
      return n.containerState = {}, e.check(En, h, c)(I);
    }
    function h(I) {
      return i && A(), y(r), p(I);
    }
    function c(I) {
      return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, g(I);
    }
    function p(I) {
      return n.containerState = {}, e.attempt(En, f, g)(I);
    }
    function f(I) {
      return r++, t.push([
        n.currentConstruct,
        n.containerState
      ]), p(I);
    }
    function g(I) {
      if (I === null) {
        i && A(), y(0), e.consume(I);
        return;
      }
      return i = i || n.parser.flow(n.now()), e.enter("chunkFlow", {
        _tokenizer: i,
        contentType: "flow",
        previous: o
      }), w(I);
    }
    function w(I) {
      if (I === null) {
        v(e.exit("chunkFlow"), true), y(0), e.consume(I);
        return;
      }
      return N(I) ? (e.consume(I), v(e.exit("chunkFlow")), r = 0, n.interrupt = void 0, a) : (e.consume(I), w);
    }
    function v(I, L) {
      const _ = n.sliceStream(I);
      if (L && _.push(null), I.previous = o, o && (o.next = I), o = I, i.defineSkip(I.start), i.write(_), n.parser.lazy[I.start.line]) {
        let S = i.events.length;
        for (; S--; ) if (i.events[S][1].start.offset < l && (!i.events[S][1].end || i.events[S][1].end.offset > l)) return;
        const M = n.events.length;
        let q = M, H, b;
        for (; q--; ) if (n.events[q][0] === "exit" && n.events[q][1].type === "chunkFlow") {
          if (H) {
            b = n.events[q][1].end;
            break;
          }
          H = true;
        }
        for (y(r), S = M; S < n.events.length; ) n.events[S][1].end = {
          ...b
        }, S++;
        ue(n.events, q + 1, 0, n.events.slice(M)), n.events.length = S;
      }
    }
    function y(I) {
      let L = t.length;
      for (; L-- > I; ) {
        const _ = t[L];
        n.containerState = _[1], _[0].exit.call(n, e);
      }
      t.length = I;
    }
    function A() {
      i.write([
        null
      ]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
    }
  }
  function _l(e, n, t) {
    return $(e, e.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function _e(e) {
    if (e === null || Q(e) || Ne(e)) return 1;
    if (ft(e)) return 2;
  }
  function pt(e, n, t) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) {
      const o = e[i].resolveAll;
      o && !r.includes(o) && (n = o(n, t), r.push(o));
    }
    return n;
  }
  const Ot = {
    name: "attention",
    resolveAll: Dl,
    tokenize: Ll
  };
  function Dl(e, n) {
    let t = -1, r, i, o, l, a, s, u, h;
    for (; ++t < e.length; ) if (e[t][0] === "enter" && e[t][1].type === "attentionSequence" && e[t][1]._close) {
      for (r = t; r--; ) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && n.sliceSerialize(e[r][1]).charCodeAt(0) === n.sliceSerialize(e[t][1]).charCodeAt(0)) {
        if ((e[r][1]._close || e[t][1]._open) && (e[t][1].end.offset - e[t][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[t][1].end.offset - e[t][1].start.offset) % 3)) continue;
        s = e[r][1].end.offset - e[r][1].start.offset > 1 && e[t][1].end.offset - e[t][1].start.offset > 1 ? 2 : 1;
        const c = {
          ...e[r][1].end
        }, p = {
          ...e[t][1].start
        };
        In(c, -s), In(p, s), l = {
          type: s > 1 ? "strongSequence" : "emphasisSequence",
          start: c,
          end: {
            ...e[r][1].end
          }
        }, a = {
          type: s > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...e[t][1].start
          },
          end: p
        }, o = {
          type: s > 1 ? "strongText" : "emphasisText",
          start: {
            ...e[r][1].end
          },
          end: {
            ...e[t][1].start
          }
        }, i = {
          type: s > 1 ? "strong" : "emphasis",
          start: {
            ...l.start
          },
          end: {
            ...a.end
          }
        }, e[r][1].end = {
          ...l.start
        }, e[t][1].start = {
          ...a.end
        }, u = [], e[r][1].end.offset - e[r][1].start.offset && (u = he(u, [
          [
            "enter",
            e[r][1],
            n
          ],
          [
            "exit",
            e[r][1],
            n
          ]
        ])), u = he(u, [
          [
            "enter",
            i,
            n
          ],
          [
            "enter",
            l,
            n
          ],
          [
            "exit",
            l,
            n
          ],
          [
            "enter",
            o,
            n
          ]
        ]), u = he(u, pt(n.parser.constructs.insideSpan.null, e.slice(r + 1, t), n)), u = he(u, [
          [
            "exit",
            o,
            n
          ],
          [
            "enter",
            a,
            n
          ],
          [
            "exit",
            a,
            n
          ],
          [
            "exit",
            i,
            n
          ]
        ]), e[t][1].end.offset - e[t][1].start.offset ? (h = 2, u = he(u, [
          [
            "enter",
            e[t][1],
            n
          ],
          [
            "exit",
            e[t][1],
            n
          ]
        ])) : h = 0, ue(e, r - 1, t - r + 3, u), t = r + u.length - h - 2;
        break;
      }
    }
    for (t = -1; ++t < e.length; ) e[t][1].type === "attentionSequence" && (e[t][1].type = "data");
    return e;
  }
  function Ll(e, n) {
    const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = _e(r);
    let o;
    return l;
    function l(s) {
      return o = s, e.enter("attentionSequence"), a(s);
    }
    function a(s) {
      if (s === o) return e.consume(s), a;
      const u = e.exit("attentionSequence"), h = _e(s), c = !h || h === 2 && i || t.includes(s), p = !i || i === 2 && h || t.includes(r);
      return u._open = !!(o === 42 ? c : c && (i || !p)), u._close = !!(o === 42 ? p : p && (h || !c)), n(s);
    }
  }
  function In(e, n) {
    e.column += n, e.offset += n, e._bufferIndex += n;
  }
  const Rl = {
    name: "autolink",
    tokenize: Ml
  };
  function Ml(e, n, t) {
    let r = 0;
    return i;
    function i(f) {
      return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
    }
    function o(f) {
      return ne(f) ? (e.consume(f), l) : f === 64 ? t(f) : u(f);
    }
    function l(f) {
      return f === 43 || f === 45 || f === 46 || Z(f) ? (r = 1, a(f)) : u(f);
    }
    function a(f) {
      return f === 58 ? (e.consume(f), r = 0, s) : (f === 43 || f === 45 || f === 46 || Z(f)) && r++ < 32 ? (e.consume(f), a) : (r = 0, u(f));
    }
    function s(f) {
      return f === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : f === null || f === 32 || f === 60 || at(f) ? t(f) : (e.consume(f), s);
    }
    function u(f) {
      return f === 64 ? (e.consume(f), h) : Al(f) ? (e.consume(f), u) : t(f);
    }
    function h(f) {
      return Z(f) ? c(f) : t(f);
    }
    function c(f) {
      return f === 46 ? (e.consume(f), r = 0, h) : f === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(f), e.exit("autolinkMarker"), e.exit("autolink"), n) : p(f);
    }
    function p(f) {
      if ((f === 45 || Z(f)) && r++ < 63) {
        const g = f === 45 ? p : c;
        return e.consume(f), g;
      }
      return t(f);
    }
  }
  const Qe = {
    partial: true,
    tokenize: Ol
  };
  function Ol(e, n, t) {
    return r;
    function r(o) {
      return R(o) ? $(e, i, "linePrefix")(o) : i(o);
    }
    function i(o) {
      return o === null || N(o) ? n(o) : t(o);
    }
  }
  const dr = {
    continuation: {
      tokenize: $l
    },
    exit: Hl,
    name: "blockQuote",
    tokenize: Bl
  };
  function Bl(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      if (l === 62) {
        const a = r.containerState;
        return a.open || (e.enter("blockQuote", {
          _container: true
        }), a.open = true), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), o;
      }
      return t(l);
    }
    function o(l) {
      return R(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), n) : (e.exit("blockQuotePrefix"), n(l));
    }
  }
  function $l(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return R(l) ? $(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
    }
    function o(l) {
      return e.attempt(dr, n, t)(l);
    }
  }
  function Hl(e) {
    e.exit("blockQuote");
  }
  const gr = {
    name: "characterEscape",
    tokenize: Vl
  };
  function Vl(e, n, t) {
    return r;
    function r(o) {
      return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
    }
    function i(o) {
      return zl(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), n) : t(o);
    }
  }
  const xr = {
    name: "characterReference",
    tokenize: ql
  };
  function ql(e, n, t) {
    const r = this;
    let i = 0, o, l;
    return a;
    function a(c) {
      return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), s;
    }
    function s(c) {
      return c === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(c), e.exit("characterReferenceMarkerNumeric"), u) : (e.enter("characterReferenceValue"), o = 31, l = Z, h(c));
    }
    function u(c) {
      return c === 88 || c === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(c), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, l = Tl, h) : (e.enter("characterReferenceValue"), o = 7, l = Mt, h(c));
    }
    function h(c) {
      if (c === 59 && i) {
        const p = e.exit("characterReferenceValue");
        return l === Z && !Wt(r.sliceSerialize(p)) ? t(c) : (e.enter("characterReferenceMarker"), e.consume(c), e.exit("characterReferenceMarker"), e.exit("characterReference"), n);
      }
      return l(c) && i++ < o ? (e.consume(c), h) : t(c);
    }
  }
  const vn = {
    partial: true,
    tokenize: Wl
  }, An = {
    concrete: true,
    name: "codeFenced",
    tokenize: Ul
  };
  function Ul(e, n, t) {
    const r = this, i = {
      partial: true,
      tokenize: _
    };
    let o = 0, l = 0, a;
    return s;
    function s(S) {
      return u(S);
    }
    function u(S) {
      const M = r.events[r.events.length - 1];
      return o = M && M[1].type === "linePrefix" ? M[2].sliceSerialize(M[1], true).length : 0, a = S, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(S);
    }
    function h(S) {
      return S === a ? (l++, e.consume(S), h) : l < 3 ? t(S) : (e.exit("codeFencedFenceSequence"), R(S) ? $(e, c, "whitespace")(S) : c(S));
    }
    function c(S) {
      return S === null || N(S) ? (e.exit("codeFencedFence"), r.interrupt ? n(S) : e.check(vn, w, L)(S)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
        contentType: "string"
      }), p(S));
    }
    function p(S) {
      return S === null || N(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), c(S)) : R(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), $(e, f, "whitespace")(S)) : S === 96 && S === a ? t(S) : (e.consume(S), p);
    }
    function f(S) {
      return S === null || N(S) ? c(S) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
        contentType: "string"
      }), g(S));
    }
    function g(S) {
      return S === null || N(S) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), c(S)) : S === 96 && S === a ? t(S) : (e.consume(S), g);
    }
    function w(S) {
      return e.attempt(i, L, v)(S);
    }
    function v(S) {
      return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), y;
    }
    function y(S) {
      return o > 0 && R(S) ? $(e, A, "linePrefix", o + 1)(S) : A(S);
    }
    function A(S) {
      return S === null || N(S) ? e.check(vn, w, L)(S) : (e.enter("codeFlowValue"), I(S));
    }
    function I(S) {
      return S === null || N(S) ? (e.exit("codeFlowValue"), A(S)) : (e.consume(S), I);
    }
    function L(S) {
      return e.exit("codeFenced"), n(S);
    }
    function _(S, M, q) {
      let H = 0;
      return b;
      function b(O) {
        return S.enter("lineEnding"), S.consume(O), S.exit("lineEnding"), T;
      }
      function T(O) {
        return S.enter("codeFencedFence"), R(O) ? $(S, z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(O) : z(O);
      }
      function z(O) {
        return O === a ? (S.enter("codeFencedFenceSequence"), V(O)) : q(O);
      }
      function V(O) {
        return O === a ? (H++, S.consume(O), V) : H >= l ? (S.exit("codeFencedFenceSequence"), R(O) ? $(S, W, "whitespace")(O) : W(O)) : q(O);
      }
      function W(O) {
        return O === null || N(O) ? (S.exit("codeFencedFence"), M(O)) : q(O);
      }
    }
  }
  function Wl(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return l === null ? t(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o);
    }
    function o(l) {
      return r.parser.lazy[r.now().line] ? t(l) : n(l);
    }
  }
  const Ct = {
    name: "codeIndented",
    tokenize: Gl
  }, Ql = {
    partial: true,
    tokenize: Kl
  };
  function Gl(e, n, t) {
    const r = this;
    return i;
    function i(u) {
      return e.enter("codeIndented"), $(e, o, "linePrefix", 5)(u);
    }
    function o(u) {
      const h = r.events[r.events.length - 1];
      return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], true).length >= 4 ? l(u) : t(u);
    }
    function l(u) {
      return u === null ? s(u) : N(u) ? e.attempt(Ql, l, s)(u) : (e.enter("codeFlowValue"), a(u));
    }
    function a(u) {
      return u === null || N(u) ? (e.exit("codeFlowValue"), l(u)) : (e.consume(u), a);
    }
    function s(u) {
      return e.exit("codeIndented"), n(u);
    }
  }
  function Kl(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return r.parser.lazy[r.now().line] ? t(l) : N(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), i) : $(e, o, "linePrefix", 5)(l);
    }
    function o(l) {
      const a = r.events[r.events.length - 1];
      return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], true).length >= 4 ? n(l) : N(l) ? i(l) : t(l);
    }
  }
  const Yl = {
    name: "codeText",
    previous: Xl,
    resolve: Jl,
    tokenize: Zl
  };
  function Jl(e) {
    let n = e.length - 4, t = 3, r, i;
    if ((e[t][1].type === "lineEnding" || e[t][1].type === "space") && (e[n][1].type === "lineEnding" || e[n][1].type === "space")) {
      for (r = t; ++r < n; ) if (e[r][1].type === "codeTextData") {
        e[t][1].type = "codeTextPadding", e[n][1].type = "codeTextPadding", t += 2, n -= 2;
        break;
      }
    }
    for (r = t - 1, n++; ++r <= n; ) i === void 0 ? r !== n && e[r][1].type !== "lineEnding" && (i = r) : (r === n || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
    return e;
  }
  function Xl(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Zl(e, n, t) {
    let r = 0, i, o;
    return l;
    function l(c) {
      return e.enter("codeText"), e.enter("codeTextSequence"), a(c);
    }
    function a(c) {
      return c === 96 ? (e.consume(c), r++, a) : (e.exit("codeTextSequence"), s(c));
    }
    function s(c) {
      return c === null ? t(c) : c === 32 ? (e.enter("space"), e.consume(c), e.exit("space"), s) : c === 96 ? (o = e.enter("codeTextSequence"), i = 0, h(c)) : N(c) ? (e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), s) : (e.enter("codeTextData"), u(c));
    }
    function u(c) {
      return c === null || c === 32 || c === 96 || N(c) ? (e.exit("codeTextData"), s(c)) : (e.consume(c), u);
    }
    function h(c) {
      return c === 96 ? (e.consume(c), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), n(c)) : (o.type = "codeTextData", u(c));
    }
  }
  class eo {
    constructor(n) {
      this.left = n ? [
        ...n
      ] : [], this.right = [];
    }
    get(n) {
      if (n < 0 || n >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + n + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return n < this.left.length ? this.left[n] : this.right[this.right.length - n + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(n, t) {
      const r = t ?? Number.POSITIVE_INFINITY;
      return r < this.left.length ? this.left.slice(n, r) : n > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - n + this.left.length).reverse() : this.left.slice(n).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
    }
    splice(n, t, r) {
      const i = t || 0;
      this.setCursor(Math.trunc(n));
      const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
      return r && Be(this.left, r), o.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(n) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
    }
    pushMany(n) {
      this.setCursor(Number.POSITIVE_INFINITY), Be(this.left, n);
    }
    unshift(n) {
      this.setCursor(0), this.right.push(n);
    }
    unshiftMany(n) {
      this.setCursor(0), Be(this.right, n.reverse());
    }
    setCursor(n) {
      if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0)) if (n < this.left.length) {
        const t = this.left.splice(n, Number.POSITIVE_INFINITY);
        Be(this.right, t.reverse());
      } else {
        const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
        Be(this.left, t.reverse());
      }
    }
  }
  function Be(e, n) {
    let t = 0;
    if (n.length < 1e4) e.push(...n);
    else for (; t < n.length; ) e.push(...n.slice(t, t + 1e4)), t += 1e4;
  }
  function kr(e) {
    const n = {};
    let t = -1, r, i, o, l, a, s, u;
    const h = new eo(e);
    for (; ++t < h.length; ) {
      for (; t in n; ) t = n[t];
      if (r = h.get(t), t && r[1].type === "chunkFlow" && h.get(t - 1)[1].type === "listItemPrefix" && (s = r[1]._tokenizer.events, o = 0, o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2), o < s.length && s[o][1].type === "content")) for (; ++o < s.length && s[o][1].type !== "content"; ) s[o][1].type === "chunkText" && (s[o][1]._isInFirstContentOfListItem = true, o++);
      if (r[0] === "enter") r[1].contentType && (Object.assign(n, to(h, t)), t = n[t], u = true);
      else if (r[1]._container) {
        for (o = t, i = void 0; o--; ) if (l = h.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank") l[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
        i && (r[1].end = {
          ...h.get(i)[1].start
        }, a = h.slice(i, t), a.unshift(r), h.splice(i, t - i + 1, a));
      }
    }
    return ue(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
  }
  function to(e, n) {
    const t = e.get(n)[1], r = e.get(n)[2];
    let i = n - 1;
    const o = [];
    let l = t._tokenizer;
    l || (l = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (l._contentTypeTextTrailing = true));
    const a = l.events, s = [], u = {};
    let h, c, p = -1, f = t, g = 0, w = 0;
    const v = [
      w
    ];
    for (; f; ) {
      for (; e.get(++i)[1] !== f; ) ;
      o.push(i), f._tokenizer || (h = r.sliceStream(f), f.next || h.push(null), c && l.defineSkip(f.start), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = true), l.write(h), f._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = f, f = f.next;
    }
    for (f = t; ++p < a.length; ) a[p][0] === "exit" && a[p - 1][0] === "enter" && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (w = p + 1, v.push(w), f._tokenizer = void 0, f.previous = void 0, f = f.next);
    for (l.events = [], f ? (f._tokenizer = void 0, f.previous = void 0) : v.pop(), p = v.length; p--; ) {
      const y = a.slice(v[p], v[p + 1]), A = o.pop();
      s.push([
        A,
        A + y.length - 1
      ]), e.splice(A, 2, y);
    }
    for (s.reverse(), p = -1; ++p < s.length; ) u[g + s[p][0]] = g + s[p][1], g += s[p][1] - s[p][0] - 1;
    return u;
  }
  const no = {
    resolve: io,
    tokenize: lo
  }, ro = {
    partial: true,
    tokenize: oo
  };
  function io(e) {
    return kr(e), e;
  }
  function lo(e, n) {
    let t;
    return r;
    function r(a) {
      return e.enter("content"), t = e.enter("chunkContent", {
        contentType: "content"
      }), i(a);
    }
    function i(a) {
      return a === null ? o(a) : N(a) ? e.check(ro, l, o)(a) : (e.consume(a), i);
    }
    function o(a) {
      return e.exit("chunkContent"), e.exit("content"), n(a);
    }
    function l(a) {
      return e.consume(a), e.exit("chunkContent"), t.next = e.enter("chunkContent", {
        contentType: "content",
        previous: t
      }), t = t.next, i;
    }
  }
  function oo(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), $(e, o, "linePrefix");
    }
    function o(l) {
      if (l === null || N(l)) return t(l);
      const a = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], true).length >= 4 ? n(l) : e.interrupt(r.parser.constructs.flow, t, n)(l);
    }
  }
  function br(e, n, t, r, i, o, l, a, s) {
    const u = s || Number.POSITIVE_INFINITY;
    let h = 0;
    return c;
    function c(y) {
      return y === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(y), e.exit(o), p) : y === null || y === 32 || y === 41 || at(y) ? t(y) : (e.enter(r), e.enter(l), e.enter(a), e.enter("chunkString", {
        contentType: "string"
      }), w(y));
    }
    function p(y) {
      return y === 62 ? (e.enter(o), e.consume(y), e.exit(o), e.exit(i), e.exit(r), n) : (e.enter(a), e.enter("chunkString", {
        contentType: "string"
      }), f(y));
    }
    function f(y) {
      return y === 62 ? (e.exit("chunkString"), e.exit(a), p(y)) : y === null || y === 60 || N(y) ? t(y) : (e.consume(y), y === 92 ? g : f);
    }
    function g(y) {
      return y === 60 || y === 62 || y === 92 ? (e.consume(y), f) : f(y);
    }
    function w(y) {
      return !h && (y === null || y === 41 || Q(y)) ? (e.exit("chunkString"), e.exit(a), e.exit(l), e.exit(r), n(y)) : h < u && y === 40 ? (e.consume(y), h++, w) : y === 41 ? (e.consume(y), h--, w) : y === null || y === 32 || y === 40 || at(y) ? t(y) : (e.consume(y), y === 92 ? v : w);
    }
    function v(y) {
      return y === 40 || y === 41 || y === 92 ? (e.consume(y), w) : w(y);
    }
  }
  function yr(e, n, t, r, i, o) {
    const l = this;
    let a = 0, s;
    return u;
    function u(f) {
      return e.enter(r), e.enter(i), e.consume(f), e.exit(i), e.enter(o), h;
    }
    function h(f) {
      return a > 999 || f === null || f === 91 || f === 93 && !s || f === 94 && !a && "_hiddenFootnoteSupport" in l.parser.constructs ? t(f) : f === 93 ? (e.exit(o), e.enter(i), e.consume(f), e.exit(i), e.exit(r), n) : N(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), h) : (e.enter("chunkString", {
        contentType: "string"
      }), c(f));
    }
    function c(f) {
      return f === null || f === 91 || f === 93 || N(f) || a++ > 999 ? (e.exit("chunkString"), h(f)) : (e.consume(f), s || (s = !R(f)), f === 92 ? p : c);
    }
    function p(f) {
      return f === 91 || f === 92 || f === 93 ? (e.consume(f), a++, c) : c(f);
    }
  }
  function wr(e, n, t, r, i, o) {
    let l;
    return a;
    function a(p) {
      return p === 34 || p === 39 || p === 40 ? (e.enter(r), e.enter(i), e.consume(p), e.exit(i), l = p === 40 ? 41 : p, s) : t(p);
    }
    function s(p) {
      return p === l ? (e.enter(i), e.consume(p), e.exit(i), e.exit(r), n) : (e.enter(o), u(p));
    }
    function u(p) {
      return p === l ? (e.exit(o), s(l)) : p === null ? t(p) : N(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), $(e, u, "linePrefix")) : (e.enter("chunkString", {
        contentType: "string"
      }), h(p));
    }
    function h(p) {
      return p === l || p === null || N(p) ? (e.exit("chunkString"), u(p)) : (e.consume(p), p === 92 ? c : h);
    }
    function c(p) {
      return p === l || p === 92 ? (e.consume(p), h) : h(p);
    }
  }
  function Ve(e, n) {
    let t;
    return r;
    function r(i) {
      return N(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), t = true, r) : R(i) ? $(e, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
    }
  }
  const ao = {
    name: "definition",
    tokenize: uo
  }, so = {
    partial: true,
    tokenize: co
  };
  function uo(e, n, t) {
    const r = this;
    let i;
    return o;
    function o(f) {
      return e.enter("definition"), l(f);
    }
    function l(f) {
      return yr.call(r, e, a, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(f);
    }
    function a(f) {
      return i = de(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), f === 58 ? (e.enter("definitionMarker"), e.consume(f), e.exit("definitionMarker"), s) : t(f);
    }
    function s(f) {
      return Q(f) ? Ve(e, u)(f) : u(f);
    }
    function u(f) {
      return br(e, h, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(f);
    }
    function h(f) {
      return e.attempt(so, c, c)(f);
    }
    function c(f) {
      return R(f) ? $(e, p, "whitespace")(f) : p(f);
    }
    function p(f) {
      return f === null || N(f) ? (e.exit("definition"), r.parser.defined.push(i), n(f)) : t(f);
    }
  }
  function co(e, n, t) {
    return r;
    function r(a) {
      return Q(a) ? Ve(e, i)(a) : t(a);
    }
    function i(a) {
      return wr(e, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
    }
    function o(a) {
      return R(a) ? $(e, l, "whitespace")(a) : l(a);
    }
    function l(a) {
      return a === null || N(a) ? n(a) : t(a);
    }
  }
  const ho = {
    name: "hardBreakEscape",
    tokenize: fo
  };
  function fo(e, n, t) {
    return r;
    function r(o) {
      return e.enter("hardBreakEscape"), e.consume(o), i;
    }
    function i(o) {
      return N(o) ? (e.exit("hardBreakEscape"), n(o)) : t(o);
    }
  }
  const po = {
    name: "headingAtx",
    resolve: mo,
    tokenize: go
  };
  function mo(e, n) {
    let t = e.length - 2, r = 3, i, o;
    return e[r][1].type === "whitespace" && (r += 2), t - 2 > r && e[t][1].type === "whitespace" && (t -= 2), e[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = {
      type: "atxHeadingText",
      start: e[r][1].start,
      end: e[t][1].end
    }, o = {
      type: "chunkText",
      start: e[r][1].start,
      end: e[t][1].end,
      contentType: "text"
    }, ue(e, r, t - r + 1, [
      [
        "enter",
        i,
        n
      ],
      [
        "enter",
        o,
        n
      ],
      [
        "exit",
        o,
        n
      ],
      [
        "exit",
        i,
        n
      ]
    ])), e;
  }
  function go(e, n, t) {
    let r = 0;
    return i;
    function i(h) {
      return e.enter("atxHeading"), o(h);
    }
    function o(h) {
      return e.enter("atxHeadingSequence"), l(h);
    }
    function l(h) {
      return h === 35 && r++ < 6 ? (e.consume(h), l) : h === null || Q(h) ? (e.exit("atxHeadingSequence"), a(h)) : t(h);
    }
    function a(h) {
      return h === 35 ? (e.enter("atxHeadingSequence"), s(h)) : h === null || N(h) ? (e.exit("atxHeading"), n(h)) : R(h) ? $(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), u(h));
    }
    function s(h) {
      return h === 35 ? (e.consume(h), s) : (e.exit("atxHeadingSequence"), a(h));
    }
    function u(h) {
      return h === null || h === 35 || Q(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), u);
    }
  }
  const xo = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ], Tn = [
    "pre",
    "script",
    "style",
    "textarea"
  ], ko = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: wo,
    tokenize: So
  }, bo = {
    partial: true,
    tokenize: Eo
  }, yo = {
    partial: true,
    tokenize: Co
  };
  function wo(e) {
    let n = e.length;
    for (; n-- && !(e[n][0] === "enter" && e[n][1].type === "htmlFlow"); ) ;
    return n > 1 && e[n - 2][1].type === "linePrefix" && (e[n][1].start = e[n - 2][1].start, e[n + 1][1].start = e[n - 2][1].start, e.splice(n - 2, 2)), e;
  }
  function So(e, n, t) {
    const r = this;
    let i, o, l, a, s;
    return u;
    function u(d) {
      return h(d);
    }
    function h(d) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(d), c;
    }
    function c(d) {
      return d === 33 ? (e.consume(d), p) : d === 47 ? (e.consume(d), o = true, w) : d === 63 ? (e.consume(d), i = 3, r.interrupt ? n : m) : ne(d) ? (e.consume(d), l = String.fromCharCode(d), v) : t(d);
    }
    function p(d) {
      return d === 45 ? (e.consume(d), i = 2, f) : d === 91 ? (e.consume(d), i = 5, a = 0, g) : ne(d) ? (e.consume(d), i = 4, r.interrupt ? n : m) : t(d);
    }
    function f(d) {
      return d === 45 ? (e.consume(d), r.interrupt ? n : m) : t(d);
    }
    function g(d) {
      const X = "CDATA[";
      return d === X.charCodeAt(a++) ? (e.consume(d), a === X.length ? r.interrupt ? n : z : g) : t(d);
    }
    function w(d) {
      return ne(d) ? (e.consume(d), l = String.fromCharCode(d), v) : t(d);
    }
    function v(d) {
      if (d === null || d === 47 || d === 62 || Q(d)) {
        const X = d === 47, ce = l.toLowerCase();
        return !X && !o && Tn.includes(ce) ? (i = 1, r.interrupt ? n(d) : z(d)) : xo.includes(l.toLowerCase()) ? (i = 6, X ? (e.consume(d), y) : r.interrupt ? n(d) : z(d)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(d) : o ? A(d) : I(d));
      }
      return d === 45 || Z(d) ? (e.consume(d), l += String.fromCharCode(d), v) : t(d);
    }
    function y(d) {
      return d === 62 ? (e.consume(d), r.interrupt ? n : z) : t(d);
    }
    function A(d) {
      return R(d) ? (e.consume(d), A) : b(d);
    }
    function I(d) {
      return d === 47 ? (e.consume(d), b) : d === 58 || d === 95 || ne(d) ? (e.consume(d), L) : R(d) ? (e.consume(d), I) : b(d);
    }
    function L(d) {
      return d === 45 || d === 46 || d === 58 || d === 95 || Z(d) ? (e.consume(d), L) : _(d);
    }
    function _(d) {
      return d === 61 ? (e.consume(d), S) : R(d) ? (e.consume(d), _) : I(d);
    }
    function S(d) {
      return d === null || d === 60 || d === 61 || d === 62 || d === 96 ? t(d) : d === 34 || d === 39 ? (e.consume(d), s = d, M) : R(d) ? (e.consume(d), S) : q(d);
    }
    function M(d) {
      return d === s ? (e.consume(d), s = null, H) : d === null || N(d) ? t(d) : (e.consume(d), M);
    }
    function q(d) {
      return d === null || d === 34 || d === 39 || d === 47 || d === 60 || d === 61 || d === 62 || d === 96 || Q(d) ? _(d) : (e.consume(d), q);
    }
    function H(d) {
      return d === 47 || d === 62 || R(d) ? I(d) : t(d);
    }
    function b(d) {
      return d === 62 ? (e.consume(d), T) : t(d);
    }
    function T(d) {
      return d === null || N(d) ? z(d) : R(d) ? (e.consume(d), T) : t(d);
    }
    function z(d) {
      return d === 45 && i === 2 ? (e.consume(d), K) : d === 60 && i === 1 ? (e.consume(d), G) : d === 62 && i === 4 ? (e.consume(d), le) : d === 63 && i === 3 ? (e.consume(d), m) : d === 93 && i === 5 ? (e.consume(d), te) : N(d) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(bo, fe, V)(d)) : d === null || N(d) ? (e.exit("htmlFlowData"), V(d)) : (e.consume(d), z);
    }
    function V(d) {
      return e.check(yo, W, fe)(d);
    }
    function W(d) {
      return e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), O;
    }
    function O(d) {
      return d === null || N(d) ? V(d) : (e.enter("htmlFlowData"), z(d));
    }
    function K(d) {
      return d === 45 ? (e.consume(d), m) : z(d);
    }
    function G(d) {
      return d === 47 ? (e.consume(d), l = "", J) : z(d);
    }
    function J(d) {
      if (d === 62) {
        const X = l.toLowerCase();
        return Tn.includes(X) ? (e.consume(d), le) : z(d);
      }
      return ne(d) && l.length < 8 ? (e.consume(d), l += String.fromCharCode(d), J) : z(d);
    }
    function te(d) {
      return d === 93 ? (e.consume(d), m) : z(d);
    }
    function m(d) {
      return d === 62 ? (e.consume(d), le) : d === 45 && i === 2 ? (e.consume(d), m) : z(d);
    }
    function le(d) {
      return d === null || N(d) ? (e.exit("htmlFlowData"), fe(d)) : (e.consume(d), le);
    }
    function fe(d) {
      return e.exit("htmlFlow"), n(d);
    }
  }
  function Co(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return N(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : t(l);
    }
    function o(l) {
      return r.parser.lazy[r.now().line] ? t(l) : n(l);
    }
  }
  function Eo(e, n, t) {
    return r;
    function r(i) {
      return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(Qe, n, t);
    }
  }
  const Io = {
    name: "htmlText",
    tokenize: vo
  };
  function vo(e, n, t) {
    const r = this;
    let i, o, l;
    return a;
    function a(m) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), s;
    }
    function s(m) {
      return m === 33 ? (e.consume(m), u) : m === 47 ? (e.consume(m), _) : m === 63 ? (e.consume(m), I) : ne(m) ? (e.consume(m), q) : t(m);
    }
    function u(m) {
      return m === 45 ? (e.consume(m), h) : m === 91 ? (e.consume(m), o = 0, g) : ne(m) ? (e.consume(m), A) : t(m);
    }
    function h(m) {
      return m === 45 ? (e.consume(m), f) : t(m);
    }
    function c(m) {
      return m === null ? t(m) : m === 45 ? (e.consume(m), p) : N(m) ? (l = c, G(m)) : (e.consume(m), c);
    }
    function p(m) {
      return m === 45 ? (e.consume(m), f) : c(m);
    }
    function f(m) {
      return m === 62 ? K(m) : m === 45 ? p(m) : c(m);
    }
    function g(m) {
      const le = "CDATA[";
      return m === le.charCodeAt(o++) ? (e.consume(m), o === le.length ? w : g) : t(m);
    }
    function w(m) {
      return m === null ? t(m) : m === 93 ? (e.consume(m), v) : N(m) ? (l = w, G(m)) : (e.consume(m), w);
    }
    function v(m) {
      return m === 93 ? (e.consume(m), y) : w(m);
    }
    function y(m) {
      return m === 62 ? K(m) : m === 93 ? (e.consume(m), y) : w(m);
    }
    function A(m) {
      return m === null || m === 62 ? K(m) : N(m) ? (l = A, G(m)) : (e.consume(m), A);
    }
    function I(m) {
      return m === null ? t(m) : m === 63 ? (e.consume(m), L) : N(m) ? (l = I, G(m)) : (e.consume(m), I);
    }
    function L(m) {
      return m === 62 ? K(m) : I(m);
    }
    function _(m) {
      return ne(m) ? (e.consume(m), S) : t(m);
    }
    function S(m) {
      return m === 45 || Z(m) ? (e.consume(m), S) : M(m);
    }
    function M(m) {
      return N(m) ? (l = M, G(m)) : R(m) ? (e.consume(m), M) : K(m);
    }
    function q(m) {
      return m === 45 || Z(m) ? (e.consume(m), q) : m === 47 || m === 62 || Q(m) ? H(m) : t(m);
    }
    function H(m) {
      return m === 47 ? (e.consume(m), K) : m === 58 || m === 95 || ne(m) ? (e.consume(m), b) : N(m) ? (l = H, G(m)) : R(m) ? (e.consume(m), H) : K(m);
    }
    function b(m) {
      return m === 45 || m === 46 || m === 58 || m === 95 || Z(m) ? (e.consume(m), b) : T(m);
    }
    function T(m) {
      return m === 61 ? (e.consume(m), z) : N(m) ? (l = T, G(m)) : R(m) ? (e.consume(m), T) : H(m);
    }
    function z(m) {
      return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? t(m) : m === 34 || m === 39 ? (e.consume(m), i = m, V) : N(m) ? (l = z, G(m)) : R(m) ? (e.consume(m), z) : (e.consume(m), W);
    }
    function V(m) {
      return m === i ? (e.consume(m), i = void 0, O) : m === null ? t(m) : N(m) ? (l = V, G(m)) : (e.consume(m), V);
    }
    function W(m) {
      return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? t(m) : m === 47 || m === 62 || Q(m) ? H(m) : (e.consume(m), W);
    }
    function O(m) {
      return m === 47 || m === 62 || Q(m) ? H(m) : t(m);
    }
    function K(m) {
      return m === 62 ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), n) : t(m);
    }
    function G(m) {
      return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), J;
    }
    function J(m) {
      return R(m) ? $(e, te, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : te(m);
    }
    function te(m) {
      return e.enter("htmlTextData"), l(m);
    }
  }
  const Zt = {
    name: "labelEnd",
    resolveAll: No,
    resolveTo: jo,
    tokenize: Fo
  }, Ao = {
    tokenize: Po
  }, To = {
    tokenize: _o
  }, zo = {
    tokenize: Do
  };
  function No(e) {
    let n = -1;
    const t = [];
    for (; ++n < e.length; ) {
      const r = e[n][1];
      if (t.push(e[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
        const i = r.type === "labelImage" ? 4 : 2;
        r.type = "data", n += i;
      }
    }
    return e.length !== t.length && ue(e, 0, e.length, t), e;
  }
  function jo(e, n) {
    let t = e.length, r = 0, i, o, l, a;
    for (; t--; ) if (i = e[t][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
      e[t][0] === "enter" && i.type === "labelLink" && (i._inactive = true);
    } else if (l) {
      if (e[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (l = t);
    const s = {
      type: e[o][1].type === "labelLink" ? "link" : "image",
      start: {
        ...e[o][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    }, u = {
      type: "label",
      start: {
        ...e[o][1].start
      },
      end: {
        ...e[l][1].end
      }
    }, h = {
      type: "labelText",
      start: {
        ...e[o + r + 2][1].end
      },
      end: {
        ...e[l - 2][1].start
      }
    };
    return a = [
      [
        "enter",
        s,
        n
      ],
      [
        "enter",
        u,
        n
      ]
    ], a = he(a, e.slice(o + 1, o + r + 3)), a = he(a, [
      [
        "enter",
        h,
        n
      ]
    ]), a = he(a, pt(n.parser.constructs.insideSpan.null, e.slice(o + r + 4, l - 3), n)), a = he(a, [
      [
        "exit",
        h,
        n
      ],
      e[l - 2],
      e[l - 1],
      [
        "exit",
        u,
        n
      ]
    ]), a = he(a, e.slice(l + 1)), a = he(a, [
      [
        "exit",
        s,
        n
      ]
    ]), ue(e, o, e.length, a), e;
  }
  function Fo(e, n, t) {
    const r = this;
    let i = r.events.length, o, l;
    for (; i--; ) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
    return a;
    function a(p) {
      return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(de(r.sliceSerialize({
        start: o.end,
        end: r.now()
      }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(p), e.exit("labelMarker"), e.exit("labelEnd"), s) : t(p);
    }
    function s(p) {
      return p === 40 ? e.attempt(Ao, h, l ? h : c)(p) : p === 91 ? e.attempt(To, h, l ? u : c)(p) : l ? h(p) : c(p);
    }
    function u(p) {
      return e.attempt(zo, h, c)(p);
    }
    function h(p) {
      return n(p);
    }
    function c(p) {
      return o._balanced = true, t(p);
    }
  }
  function Po(e, n, t) {
    return r;
    function r(c) {
      return e.enter("resource"), e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), i;
    }
    function i(c) {
      return Q(c) ? Ve(e, o)(c) : o(c);
    }
    function o(c) {
      return c === 41 ? h(c) : br(e, l, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
    }
    function l(c) {
      return Q(c) ? Ve(e, s)(c) : h(c);
    }
    function a(c) {
      return t(c);
    }
    function s(c) {
      return c === 34 || c === 39 || c === 40 ? wr(e, u, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
    }
    function u(c) {
      return Q(c) ? Ve(e, h)(c) : h(c);
    }
    function h(c) {
      return c === 41 ? (e.enter("resourceMarker"), e.consume(c), e.exit("resourceMarker"), e.exit("resource"), n) : t(c);
    }
  }
  function _o(e, n, t) {
    const r = this;
    return i;
    function i(a) {
      return yr.call(r, e, o, l, "reference", "referenceMarker", "referenceString")(a);
    }
    function o(a) {
      return r.parser.defined.includes(de(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(a) : t(a);
    }
    function l(a) {
      return t(a);
    }
  }
  function Do(e, n, t) {
    return r;
    function r(o) {
      return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
    }
    function i(o) {
      return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), n) : t(o);
    }
  }
  const Lo = {
    name: "labelStartImage",
    resolveAll: Zt.resolveAll,
    tokenize: Ro
  };
  function Ro(e, n, t) {
    const r = this;
    return i;
    function i(a) {
      return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), o;
    }
    function o(a) {
      return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), l) : t(a);
    }
    function l(a) {
      return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(a) : n(a);
    }
  }
  const Mo = {
    name: "labelStartLink",
    resolveAll: Zt.resolveAll,
    tokenize: Oo
  };
  function Oo(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), o;
    }
    function o(l) {
      return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
    }
  }
  const Et = {
    name: "lineEnding",
    tokenize: Bo
  };
  function Bo(e, n) {
    return t;
    function t(r) {
      return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), $(e, n, "linePrefix");
    }
  }
  const it = {
    name: "thematicBreak",
    tokenize: $o
  };
  function $o(e, n, t) {
    let r = 0, i;
    return o;
    function o(u) {
      return e.enter("thematicBreak"), l(u);
    }
    function l(u) {
      return i = u, a(u);
    }
    function a(u) {
      return u === i ? (e.enter("thematicBreakSequence"), s(u)) : r >= 3 && (u === null || N(u)) ? (e.exit("thematicBreak"), n(u)) : t(u);
    }
    function s(u) {
      return u === i ? (e.consume(u), r++, s) : (e.exit("thematicBreakSequence"), R(u) ? $(e, a, "whitespace")(u) : a(u));
    }
  }
  const ie = {
    continuation: {
      tokenize: Uo
    },
    exit: Qo,
    name: "list",
    tokenize: qo
  }, Ho = {
    partial: true,
    tokenize: Go
  }, Vo = {
    partial: true,
    tokenize: Wo
  };
  function qo(e, n, t) {
    const r = this, i = r.events[r.events.length - 1];
    let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0, l = 0;
    return a;
    function a(f) {
      const g = r.containerState.type || (f === 42 || f === 43 || f === 45 ? "listUnordered" : "listOrdered");
      if (g === "listUnordered" ? !r.containerState.marker || f === r.containerState.marker : Mt(f)) {
        if (r.containerState.type || (r.containerState.type = g, e.enter(g, {
          _container: true
        })), g === "listUnordered") return e.enter("listItemPrefix"), f === 42 || f === 45 ? e.check(it, t, u)(f) : u(f);
        if (!r.interrupt || f === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), s(f);
      }
      return t(f);
    }
    function s(f) {
      return Mt(f) && ++l < 10 ? (e.consume(f), s) : (!r.interrupt || l < 2) && (r.containerState.marker ? f === r.containerState.marker : f === 41 || f === 46) ? (e.exit("listItemValue"), u(f)) : t(f);
    }
    function u(f) {
      return e.enter("listItemMarker"), e.consume(f), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || f, e.check(Qe, r.interrupt ? t : h, e.attempt(Ho, p, c));
    }
    function h(f) {
      return r.containerState.initialBlankLine = true, o++, p(f);
    }
    function c(f) {
      return R(f) ? (e.enter("listItemPrefixWhitespace"), e.consume(f), e.exit("listItemPrefixWhitespace"), p) : t(f);
    }
    function p(f) {
      return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), true).length, n(f);
    }
  }
  function Uo(e, n, t) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(Qe, i, o);
    function i(a) {
      return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, $(e, n, "listItemIndent", r.containerState.size + 1)(a);
    }
    function o(a) {
      return r.containerState.furtherBlankLines || !R(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Vo, n, l)(a));
    }
    function l(a) {
      return r.containerState._closeFlow = true, r.interrupt = void 0, $(e, e.attempt(ie, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
    }
  }
  function Wo(e, n, t) {
    const r = this;
    return $(e, i, "listItemIndent", r.containerState.size + 1);
    function i(o) {
      const l = r.events[r.events.length - 1];
      return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], true).length === r.containerState.size ? n(o) : t(o);
    }
  }
  function Qo(e) {
    e.exit(this.containerState.type);
  }
  function Go(e, n, t) {
    const r = this;
    return $(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function i(o) {
      const l = r.events[r.events.length - 1];
      return !R(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
    }
  }
  const zn = {
    name: "setextUnderline",
    resolveTo: Ko,
    tokenize: Yo
  };
  function Ko(e, n) {
    let t = e.length, r, i, o;
    for (; t--; ) if (e[t][0] === "enter") {
      if (e[t][1].type === "content") {
        r = t;
        break;
      }
      e[t][1].type === "paragraph" && (i = t);
    } else e[t][1].type === "content" && e.splice(t, 1), !o && e[t][1].type === "definition" && (o = t);
    const l = {
      type: "setextHeading",
      start: {
        ...e[r][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    };
    return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, [
      "enter",
      l,
      n
    ]), e.splice(o + 1, 0, [
      "exit",
      e[r][1],
      n
    ]), e[r][1].end = {
      ...e[o][1].end
    }) : e[r][1] = l, e.push([
      "exit",
      l,
      n
    ]), e;
  }
  function Yo(e, n, t) {
    const r = this;
    let i;
    return o;
    function o(u) {
      let h = r.events.length, c;
      for (; h--; ) if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
      return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e.enter("setextHeadingLine"), i = u, l(u)) : t(u);
    }
    function l(u) {
      return e.enter("setextHeadingLineSequence"), a(u);
    }
    function a(u) {
      return u === i ? (e.consume(u), a) : (e.exit("setextHeadingLineSequence"), R(u) ? $(e, s, "lineSuffix")(u) : s(u));
    }
    function s(u) {
      return u === null || N(u) ? (e.exit("setextHeadingLine"), n(u)) : t(u);
    }
  }
  const Jo = {
    tokenize: Xo
  };
  function Xo(e) {
    const n = this, t = e.attempt(Qe, r, e.attempt(this.parser.constructs.flowInitial, i, $(e, e.attempt(this.parser.constructs.flow, i, e.attempt(no, i)), "linePrefix")));
    return t;
    function r(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
    }
    function i(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), n.currentConstruct = void 0, t;
    }
  }
  const Zo = {
    resolveAll: Cr()
  }, ea = Sr("string"), ta = Sr("text");
  function Sr(e) {
    return {
      resolveAll: Cr(e === "text" ? na : void 0),
      tokenize: n
    };
    function n(t) {
      const r = this, i = this.parser.constructs[e], o = t.attempt(i, l, a);
      return l;
      function l(h) {
        return u(h) ? o(h) : a(h);
      }
      function a(h) {
        if (h === null) {
          t.consume(h);
          return;
        }
        return t.enter("data"), t.consume(h), s;
      }
      function s(h) {
        return u(h) ? (t.exit("data"), o(h)) : (t.consume(h), s);
      }
      function u(h) {
        if (h === null) return true;
        const c = i[h];
        let p = -1;
        if (c) for (; ++p < c.length; ) {
          const f = c[p];
          if (!f.previous || f.previous.call(r, r.previous)) return true;
        }
        return false;
      }
    }
  }
  function Cr(e) {
    return n;
    function n(t, r) {
      let i = -1, o;
      for (; ++i <= t.length; ) o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
      return e ? e(t, r) : t;
    }
  }
  function na(e, n) {
    let t = 0;
    for (; ++t <= e.length; ) if ((t === e.length || e[t][1].type === "lineEnding") && e[t - 1][1].type === "data") {
      const r = e[t - 1][1], i = n.sliceStream(r);
      let o = i.length, l = -1, a = 0, s;
      for (; o--; ) {
        const u = i[o];
        if (typeof u == "string") {
          for (l = u.length; u.charCodeAt(l - 1) === 32; ) a++, l--;
          if (l) break;
          l = -1;
        } else if (u === -2) s = true, a++;
        else if (u !== -1) {
          o++;
          break;
        }
      }
      if (n._contentTypeTextTrailing && t === e.length && (a = 0), a) {
        const u = {
          type: t === e.length || s || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? l : r.start._bufferIndex + l,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (e.splice(t, 0, [
          "enter",
          u,
          n
        ], [
          "exit",
          u,
          n
        ]), t += 2);
      }
      t++;
    }
    return e;
  }
  const ra = {
    42: ie,
    43: ie,
    45: ie,
    48: ie,
    49: ie,
    50: ie,
    51: ie,
    52: ie,
    53: ie,
    54: ie,
    55: ie,
    56: ie,
    57: ie,
    62: dr
  }, ia = {
    91: ao
  }, la = {
    [-2]: Ct,
    [-1]: Ct,
    32: Ct
  }, oa = {
    35: po,
    42: it,
    45: [
      zn,
      it
    ],
    60: ko,
    61: zn,
    95: it,
    96: An,
    126: An
  }, aa = {
    38: xr,
    92: gr
  }, sa = {
    [-5]: Et,
    [-4]: Et,
    [-3]: Et,
    33: Lo,
    38: xr,
    42: Ot,
    60: [
      Rl,
      Io
    ],
    91: Mo,
    92: [
      ho,
      gr
    ],
    93: Zt,
    95: Ot,
    96: Yl
  }, ua = {
    null: [
      Ot,
      Zo
    ]
  }, ca = {
    null: [
      42,
      95
    ]
  }, ha = {
    null: []
  }, fa = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: ca,
    contentInitial: ia,
    disable: ha,
    document: ra,
    flow: oa,
    flowInitial: la,
    insideSpan: ua,
    string: aa,
    text: sa
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function pa(e, n, t) {
    let r = {
      _bufferIndex: -1,
      _index: 0,
      line: t && t.line || 1,
      column: t && t.column || 1,
      offset: t && t.offset || 0
    };
    const i = {}, o = [];
    let l = [], a = [];
    const s = {
      attempt: M(_),
      check: M(S),
      consume: A,
      enter: I,
      exit: L,
      interrupt: M(S, {
        interrupt: true
      })
    }, u = {
      code: null,
      containerState: {},
      defineSkip: w,
      events: [],
      now: g,
      parser: e,
      previous: null,
      sliceSerialize: p,
      sliceStream: f,
      write: c
    };
    let h = n.tokenize.call(u, s);
    return n.resolveAll && o.push(n), u;
    function c(T) {
      return l = he(l, T), v(), l[l.length - 1] !== null ? [] : (q(n, 0), u.events = pt(o, u.events, u), u.events);
    }
    function p(T, z) {
      return da(f(T), z);
    }
    function f(T) {
      return ma(l, T);
    }
    function g() {
      const { _bufferIndex: T, _index: z, line: V, column: W, offset: O } = r;
      return {
        _bufferIndex: T,
        _index: z,
        line: V,
        column: W,
        offset: O
      };
    }
    function w(T) {
      i[T.line] = T.column, b();
    }
    function v() {
      let T;
      for (; r._index < l.length; ) {
        const z = l[r._index];
        if (typeof z == "string") for (T = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === T && r._bufferIndex < z.length; ) y(z.charCodeAt(r._bufferIndex));
        else y(z);
      }
    }
    function y(T) {
      h = h(T);
    }
    function A(T) {
      N(T) ? (r.line++, r.column = 1, r.offset += T === -3 ? 2 : 1, b()) : T !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = T;
    }
    function I(T, z) {
      const V = z || {};
      return V.type = T, V.start = g(), u.events.push([
        "enter",
        V,
        u
      ]), a.push(V), V;
    }
    function L(T) {
      const z = a.pop();
      return z.end = g(), u.events.push([
        "exit",
        z,
        u
      ]), z;
    }
    function _(T, z) {
      q(T, z.from);
    }
    function S(T, z) {
      z.restore();
    }
    function M(T, z) {
      return V;
      function V(W, O, K) {
        let G, J, te, m;
        return Array.isArray(W) ? fe(W) : "tokenize" in W ? fe([
          W
        ]) : le(W);
        function le(Y) {
          return be;
          function be(pe) {
            const Se = pe !== null && Y[pe], Ce = pe !== null && Y.null, ge = [
              ...Array.isArray(Se) ? Se : Se ? [
                Se
              ] : [],
              ...Array.isArray(Ce) ? Ce : Ce ? [
                Ce
              ] : []
            ];
            return fe(ge)(pe);
          }
        }
        function fe(Y) {
          return G = Y, J = 0, Y.length === 0 ? K : d(Y[J]);
        }
        function d(Y) {
          return be;
          function be(pe) {
            return m = H(), te = Y, Y.partial || (u.currentConstruct = Y), Y.name && u.parser.constructs.disable.null.includes(Y.name) ? ce() : Y.tokenize.call(z ? Object.assign(Object.create(u), z) : u, s, X, ce)(pe);
          }
        }
        function X(Y) {
          return T(te, m), O;
        }
        function ce(Y) {
          return m.restore(), ++J < G.length ? d(G[J]) : K;
        }
      }
    }
    function q(T, z) {
      T.resolveAll && !o.includes(T) && o.push(T), T.resolve && ue(u.events, z, u.events.length - z, T.resolve(u.events.slice(z), u)), T.resolveTo && (u.events = T.resolveTo(u.events, u));
    }
    function H() {
      const T = g(), z = u.previous, V = u.currentConstruct, W = u.events.length, O = Array.from(a);
      return {
        from: W,
        restore: K
      };
      function K() {
        r = T, u.previous = z, u.currentConstruct = V, u.events.length = W, a = O, b();
      }
    }
    function b() {
      r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
    }
  }
  function ma(e, n) {
    const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
    let l;
    if (t === i) l = [
      e[t].slice(r, o)
    ];
    else {
      if (l = e.slice(t, i), r > -1) {
        const a = l[0];
        typeof a == "string" ? l[0] = a.slice(r) : l.shift();
      }
      o > 0 && l.push(e[i].slice(0, o));
    }
    return l;
  }
  function da(e, n) {
    let t = -1;
    const r = [];
    let i;
    for (; ++t < e.length; ) {
      const o = e[t];
      let l;
      if (typeof o == "string") l = o;
      else switch (o) {
        case -5: {
          l = "\r";
          break;
        }
        case -4: {
          l = `
`;
          break;
        }
        case -3: {
          l = `\r
`;
          break;
        }
        case -2: {
          l = n ? " " : "	";
          break;
        }
        case -1: {
          if (!n && i) continue;
          l = " ";
          break;
        }
        default:
          l = String.fromCharCode(o);
      }
      i = o === -2, r.push(l);
    }
    return r.join("");
  }
  function ga(e) {
    const r = {
      constructs: pr([
        fa,
        ...(e || {}).extensions || []
      ]),
      content: i(Nl),
      defined: [],
      document: i(Fl),
      flow: i(Jo),
      lazy: {},
      string: i(ea),
      text: i(ta)
    };
    return r;
    function i(o) {
      return l;
      function l(a) {
        return pa(r, o, a);
      }
    }
  }
  function xa(e) {
    for (; !kr(e); ) ;
    return e;
  }
  const Nn = /[\0\t\n\r]/g;
  function ka() {
    let e = 1, n = "", t = true, r;
    return i;
    function i(o, l, a) {
      const s = [];
      let u, h, c, p, f;
      for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, n = "", t && (o.charCodeAt(0) === 65279 && c++, t = void 0); c < o.length; ) {
        if (Nn.lastIndex = c, u = Nn.exec(o), p = u && u.index !== void 0 ? u.index : o.length, f = o.charCodeAt(p), !u) {
          n = o.slice(c);
          break;
        }
        if (f === 10 && c === p && r) s.push(-3), r = void 0;
        else switch (r && (s.push(-5), r = void 0), c < p && (s.push(o.slice(c, p)), e += p - c), f) {
          case 0: {
            s.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, s.push(-2); e++ < h; ) s.push(-1);
            break;
          }
          case 10: {
            s.push(-4), e = 1;
            break;
          }
          default:
            r = true, e = 1;
        }
        c = p + 1;
      }
      return a && (r && s.push(-5), n && s.push(n), s.push(null)), s;
    }
  }
  const ba = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function ya(e) {
    return e.replace(ba, wa);
  }
  function wa(e, n, t) {
    if (n) return n;
    if (t.charCodeAt(0) === 35) {
      const i = t.charCodeAt(1), o = i === 120 || i === 88;
      return mr(t.slice(o ? 2 : 1), o ? 16 : 10);
    }
    return Wt(t) || e;
  }
  const Er = {}.hasOwnProperty;
  function Sa(e, n, t) {
    return typeof n != "string" && (t = n, n = void 0), Ca(t)(xa(ga(t).document().write(ka()(e, n, true))));
  }
  function Ca(e) {
    const n = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: o(Ze),
        autolinkProtocol: H,
        autolinkEmail: H,
        atxHeading: o(Je),
        blockQuote: o(Ce),
        characterEscape: H,
        characterReference: H,
        codeFenced: o(ge),
        codeFencedFenceInfo: l,
        codeFencedFenceMeta: l,
        codeIndented: o(ge, l),
        codeText: o(Ke, l),
        codeTextData: H,
        data: H,
        codeFlowValue: H,
        definition: o(Ye),
        definitionDestinationString: l,
        definitionLabelString: l,
        definitionTitleString: l,
        emphasis: o(xt),
        hardBreakEscape: o(Xe),
        hardBreakTrailing: o(Xe),
        htmlFlow: o(Le, l),
        htmlFlowData: H,
        htmlText: o(Le, l),
        htmlTextData: H,
        image: o(kt),
        label: l,
        link: o(Ze),
        listItem: o(bt),
        listItemValue: p,
        listOrdered: o(Re, c),
        listUnordered: o(Re),
        paragraph: o(yt),
        reference: d,
        referenceString: l,
        resourceDestinationString: l,
        resourceTitleString: l,
        setextHeading: o(Je),
        strong: o(C),
        thematicBreak: o(B)
      },
      exit: {
        atxHeading: s(),
        atxHeadingSequence: _,
        autolink: s(),
        autolinkEmail: Se,
        autolinkProtocol: pe,
        blockQuote: s(),
        characterEscapeValue: b,
        characterReferenceMarkerHexadecimal: ce,
        characterReferenceMarkerNumeric: ce,
        characterReferenceValue: Y,
        characterReference: be,
        codeFenced: s(v),
        codeFencedFence: w,
        codeFencedFenceInfo: f,
        codeFencedFenceMeta: g,
        codeFlowValue: b,
        codeIndented: s(y),
        codeText: s(O),
        codeTextData: b,
        data: b,
        definition: s(),
        definitionDestinationString: L,
        definitionLabelString: A,
        definitionTitleString: I,
        emphasis: s(),
        hardBreakEscape: s(z),
        hardBreakTrailing: s(z),
        htmlFlow: s(V),
        htmlFlowData: b,
        htmlText: s(W),
        htmlTextData: b,
        image: s(G),
        label: te,
        labelText: J,
        lineEnding: T,
        link: s(K),
        listItem: s(),
        listOrdered: s(),
        listUnordered: s(),
        paragraph: s(),
        referenceString: X,
        resourceDestinationString: m,
        resourceTitleString: le,
        resource: fe,
        setextHeading: s(q),
        setextHeadingLineSequence: M,
        setextHeadingText: S,
        strong: s(),
        thematicBreak: s()
      }
    };
    Ir(n, (e || {}).mdastExtensions || []);
    const t = {};
    return r;
    function r(k) {
      let E = {
        type: "root",
        children: []
      };
      const j = {
        stack: [
          E
        ],
        tokenStack: [],
        config: n,
        enter: a,
        exit: u,
        buffer: l,
        resume: h,
        data: t
      }, D = [];
      let P = -1;
      for (; ++P < k.length; ) if (k[P][1].type === "listOrdered" || k[P][1].type === "listUnordered") if (k[P][0] === "enter") D.push(P);
      else {
        const oe = D.pop();
        P = i(k, oe, P);
      }
      for (P = -1; ++P < k.length; ) {
        const oe = n[k[P][0]];
        Er.call(oe, k[P][1].type) && oe[k[P][1].type].call(Object.assign({
          sliceSerialize: k[P][2].sliceSerialize
        }, j), k[P][1]);
      }
      if (j.tokenStack.length > 0) {
        const oe = j.tokenStack[j.tokenStack.length - 1];
        (oe[1] || jn).call(j, void 0, oe[0]);
      }
      for (E.position = {
        start: Ee(k.length > 0 ? k[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: Ee(k.length > 0 ? k[k.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, P = -1; ++P < n.transforms.length; ) E = n.transforms[P](E) || E;
      return E;
    }
    function i(k, E, j) {
      let D = E - 1, P = -1, oe = false, ae, re, Me, Oe;
      for (; ++D <= j; ) {
        const se = k[D];
        switch (se[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            se[0] === "enter" ? P++ : P--, Oe = void 0;
            break;
          }
          case "lineEndingBlank": {
            se[0] === "enter" && (ae && !Oe && !P && !Me && (Me = D), Oe = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            Oe = void 0;
        }
        if (!P && se[0] === "enter" && se[1].type === "listItemPrefix" || P === -1 && se[0] === "exit" && (se[1].type === "listUnordered" || se[1].type === "listOrdered")) {
          if (ae) {
            let je = D;
            for (re = void 0; je--; ) {
              const ye = k[je];
              if (ye[1].type === "lineEnding" || ye[1].type === "lineEndingBlank") {
                if (ye[0] === "exit") continue;
                re && (k[re][1].type = "lineEndingBlank", oe = true), ye[1].type = "lineEnding", re = je;
              } else if (!(ye[1].type === "linePrefix" || ye[1].type === "blockQuotePrefix" || ye[1].type === "blockQuotePrefixWhitespace" || ye[1].type === "blockQuoteMarker" || ye[1].type === "listItemIndent")) break;
            }
            Me && (!re || Me < re) && (ae._spread = true), ae.end = Object.assign({}, re ? k[re][1].start : se[1].end), k.splice(re || D, 0, [
              "exit",
              ae,
              se[2]
            ]), D++, j++;
          }
          if (se[1].type === "listItemPrefix") {
            const je = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, se[1].start),
              end: void 0
            };
            ae = je, k.splice(D, 0, [
              "enter",
              je,
              se[2]
            ]), D++, j++, Me = void 0, Oe = true;
          }
        }
      }
      return k[E][1]._spread = oe, j;
    }
    function o(k, E) {
      return j;
      function j(D) {
        a.call(this, k(D), D), E && E.call(this, D);
      }
    }
    function l() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function a(k, E, j) {
      this.stack[this.stack.length - 1].children.push(k), this.stack.push(k), this.tokenStack.push([
        E,
        j || void 0
      ]), k.position = {
        start: Ee(E.start),
        end: void 0
      };
    }
    function s(k) {
      return E;
      function E(j) {
        k && k.call(this, j), u.call(this, j);
      }
    }
    function u(k, E) {
      const j = this.stack.pop(), D = this.tokenStack.pop();
      if (D) D[0].type !== k.type && (E ? E.call(this, k, D[0]) : (D[1] || jn).call(this, k, D[0]));
      else throw new Error("Cannot close `" + k.type + "` (" + He({
        start: k.start,
        end: k.end
      }) + "): it\u2019s not open");
      j.position.end = Ee(k.end);
    }
    function h() {
      return Xt(this.stack.pop());
    }
    function c() {
      this.data.expectingFirstListItemValue = true;
    }
    function p(k) {
      if (this.data.expectingFirstListItemValue) {
        const E = this.stack[this.stack.length - 2];
        E.start = Number.parseInt(this.sliceSerialize(k), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function f() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.lang = k;
    }
    function g() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.meta = k;
    }
    function w() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function v() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function y() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = k.replace(/(\r?\n|\r)$/g, "");
    }
    function A(k) {
      const E = this.resume(), j = this.stack[this.stack.length - 1];
      j.label = E, j.identifier = de(this.sliceSerialize(k)).toLowerCase();
    }
    function I() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.title = k;
    }
    function L() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.url = k;
    }
    function _(k) {
      const E = this.stack[this.stack.length - 1];
      if (!E.depth) {
        const j = this.sliceSerialize(k).length;
        E.depth = j;
      }
    }
    function S() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function M(k) {
      const E = this.stack[this.stack.length - 1];
      E.depth = this.sliceSerialize(k).codePointAt(0) === 61 ? 1 : 2;
    }
    function q() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function H(k) {
      const j = this.stack[this.stack.length - 1].children;
      let D = j[j.length - 1];
      (!D || D.type !== "text") && (D = F(), D.position = {
        start: Ee(k.start),
        end: void 0
      }, j.push(D)), this.stack.push(D);
    }
    function b(k) {
      const E = this.stack.pop();
      E.value += this.sliceSerialize(k), E.position.end = Ee(k.end);
    }
    function T(k) {
      const E = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const j = E.children[E.children.length - 1];
        j.position.end = Ee(k.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(E.type) && (H.call(this, k), b.call(this, k));
    }
    function z() {
      this.data.atHardBreak = true;
    }
    function V() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = k;
    }
    function W() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = k;
    }
    function O() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.value = k;
    }
    function K() {
      const k = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const E = this.data.referenceType || "shortcut";
        k.type += "Reference", k.referenceType = E, delete k.url, delete k.title;
      } else delete k.identifier, delete k.label;
      this.data.referenceType = void 0;
    }
    function G() {
      const k = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const E = this.data.referenceType || "shortcut";
        k.type += "Reference", k.referenceType = E, delete k.url, delete k.title;
      } else delete k.identifier, delete k.label;
      this.data.referenceType = void 0;
    }
    function J(k) {
      const E = this.sliceSerialize(k), j = this.stack[this.stack.length - 2];
      j.label = ya(E), j.identifier = de(E).toLowerCase();
    }
    function te() {
      const k = this.stack[this.stack.length - 1], E = this.resume(), j = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, j.type === "link") {
        const D = k.children;
        j.children = D;
      } else j.alt = E;
    }
    function m() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.url = k;
    }
    function le() {
      const k = this.resume(), E = this.stack[this.stack.length - 1];
      E.title = k;
    }
    function fe() {
      this.data.inReference = void 0;
    }
    function d() {
      this.data.referenceType = "collapsed";
    }
    function X(k) {
      const E = this.resume(), j = this.stack[this.stack.length - 1];
      j.label = E, j.identifier = de(this.sliceSerialize(k)).toLowerCase(), this.data.referenceType = "full";
    }
    function ce(k) {
      this.data.characterReferenceType = k.type;
    }
    function Y(k) {
      const E = this.sliceSerialize(k), j = this.data.characterReferenceType;
      let D;
      j ? (D = mr(E, j === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : D = Wt(E);
      const P = this.stack[this.stack.length - 1];
      P.value += D;
    }
    function be(k) {
      const E = this.stack.pop();
      E.position.end = Ee(k.end);
    }
    function pe(k) {
      b.call(this, k);
      const E = this.stack[this.stack.length - 1];
      E.url = this.sliceSerialize(k);
    }
    function Se(k) {
      b.call(this, k);
      const E = this.stack[this.stack.length - 1];
      E.url = "mailto:" + this.sliceSerialize(k);
    }
    function Ce() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function ge() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Ke() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function Ye() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function xt() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function Je() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function Xe() {
      return {
        type: "break"
      };
    }
    function Le() {
      return {
        type: "html",
        value: ""
      };
    }
    function kt() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function Ze() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function Re(k) {
      return {
        type: "list",
        ordered: k.type === "listOrdered",
        start: null,
        spread: k._spread,
        children: []
      };
    }
    function bt(k) {
      return {
        type: "listItem",
        spread: k._spread,
        checked: null,
        children: []
      };
    }
    function yt() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function C() {
      return {
        type: "strong",
        children: []
      };
    }
    function F() {
      return {
        type: "text",
        value: ""
      };
    }
    function B() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function Ee(e) {
    return {
      line: e.line,
      column: e.column,
      offset: e.offset
    };
  }
  function Ir(e, n) {
    let t = -1;
    for (; ++t < n.length; ) {
      const r = n[t];
      Array.isArray(r) ? Ir(e, r) : Ea(e, r);
    }
  }
  function Ea(e, n) {
    let t;
    for (t in n) if (Er.call(n, t)) switch (t) {
      case "canContainEols": {
        const r = n[t];
        r && e[t].push(...r);
        break;
      }
      case "transforms": {
        const r = n[t];
        r && e[t].push(...r);
        break;
      }
      case "enter":
      case "exit": {
        const r = n[t];
        r && Object.assign(e[t], r);
        break;
      }
    }
  }
  function jn(e, n) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + He({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + n.type + "`, " + He({
      start: n.start,
      end: n.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + He({
      start: n.start,
      end: n.end
    }) + ") is still open");
  }
  function Ia(e) {
    const n = this;
    n.parser = t;
    function t(r) {
      return Sa(r, {
        ...n.data("settings"),
        ...e,
        extensions: n.data("micromarkExtensions") || [],
        mdastExtensions: n.data("fromMarkdownExtensions") || []
      });
    }
  }
  function va(e, n) {
    const t = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(n), true)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Aa(e, n) {
    const t = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return e.patch(n, t), [
      e.applyData(n, t),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function Ta(e, n) {
    const t = n.value ? n.value + `
` : "", r = {}, i = n.lang ? n.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = [
      "language-" + i[0]
    ]);
    let o = {
      type: "element",
      tagName: "code",
      properties: r,
      children: [
        {
          type: "text",
          value: t
        }
      ]
    };
    return n.meta && (o.data = {
      meta: n.meta
    }), e.patch(n, o), o = e.applyData(n, o), o = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        o
      ]
    }, e.patch(n, o), o;
  }
  function za(e, n) {
    const t = {
      type: "element",
      tagName: "del",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Na(e, n) {
    const t = {
      type: "element",
      tagName: "em",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function ja(e, n) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = De(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
    let l, a = e.footnoteCounts.get(r);
    a === void 0 ? (a = 0, e.footnoteOrder.push(r), l = e.footnoteOrder.length) : l = o + 1, a += 1, e.footnoteCounts.set(r, a);
    const s = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + t + "fn-" + i,
        id: t + "fnref-" + i + (a > 1 ? "-" + a : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(l)
        }
      ]
    };
    e.patch(n, s);
    const u = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        s
      ]
    };
    return e.patch(n, u), e.applyData(n, u);
  }
  function Fa(e, n) {
    const t = {
      type: "element",
      tagName: "h" + n.depth,
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Pa(e, n) {
    if (e.options.allowDangerousHtml) {
      const t = {
        type: "raw",
        value: n.value
      };
      return e.patch(n, t), e.applyData(n, t);
    }
  }
  function vr(e, n) {
    const t = n.referenceType;
    let r = "]";
    if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference") return [
      {
        type: "text",
        value: "![" + n.alt + r
      }
    ];
    const i = e.all(n), o = i[0];
    o && o.type === "text" ? o.value = "[" + o.value : i.unshift({
      type: "text",
      value: "["
    });
    const l = i[i.length - 1];
    return l && l.type === "text" ? l.value += r : i.push({
      type: "text",
      value: r
    }), i;
  }
  function _a(e, n) {
    const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
    if (!r) return vr(e, n);
    const i = {
      src: De(r.url || ""),
      alt: n.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
      type: "element",
      tagName: "img",
      properties: i,
      children: []
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Da(e, n) {
    const t = {
      src: De(n.url)
    };
    n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = {
      type: "element",
      tagName: "img",
      properties: t,
      children: []
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function La(e, n) {
    const t = {
      type: "text",
      value: n.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(n, t);
    const r = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        t
      ]
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function Ra(e, n) {
    const t = String(n.identifier).toUpperCase(), r = e.definitionById.get(t);
    if (!r) return vr(e, n);
    const i = {
      href: De(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const o = {
      type: "element",
      tagName: "a",
      properties: i,
      children: e.all(n)
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Ma(e, n) {
    const t = {
      href: De(n.url)
    };
    n.title !== null && n.title !== void 0 && (t.title = n.title);
    const r = {
      type: "element",
      tagName: "a",
      properties: t,
      children: e.all(n)
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function Oa(e, n, t) {
    const r = e.all(n), i = t ? Ba(t) : Ar(n), o = {}, l = [];
    if (typeof n.checked == "boolean") {
      const h = r[0];
      let c;
      h && h.type === "element" && h.tagName === "p" ? c = h : (c = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, r.unshift(c)), c.children.length > 0 && c.children.unshift({
        type: "text",
        value: " "
      }), c.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: n.checked,
          disabled: true
        },
        children: []
      }), o.className = [
        "task-list-item"
      ];
    }
    let a = -1;
    for (; ++a < r.length; ) {
      const h = r[a];
      (i || a !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({
        type: "text",
        value: `
`
      }), h.type === "element" && h.tagName === "p" && !i ? l.push(...h.children) : l.push(h);
    }
    const s = r[r.length - 1];
    s && (i || s.type !== "element" || s.tagName !== "p") && l.push({
      type: "text",
      value: `
`
    });
    const u = {
      type: "element",
      tagName: "li",
      properties: o,
      children: l
    };
    return e.patch(n, u), e.applyData(n, u);
  }
  function Ba(e) {
    let n = false;
    if (e.type === "list") {
      n = e.spread || false;
      const t = e.children;
      let r = -1;
      for (; !n && ++r < t.length; ) n = Ar(t[r]);
    }
    return n;
  }
  function Ar(e) {
    const n = e.spread;
    return n ?? e.children.length > 1;
  }
  function $a(e, n) {
    const t = {}, r = e.all(n);
    let i = -1;
    for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
      const l = r[i];
      if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
        t.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const o = {
      type: "element",
      tagName: n.ordered ? "ol" : "ul",
      properties: t,
      children: e.wrap(r, true)
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Ha(e, n) {
    const t = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Va(e, n) {
    const t = {
      type: "root",
      children: e.wrap(e.all(n))
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function qa(e, n) {
    const t = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Ua(e, n) {
    const t = e.all(n), r = t.shift(), i = [];
    if (r) {
      const l = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: e.wrap([
          r
        ], true)
      };
      e.patch(n.children[0], l), i.push(l);
    }
    if (t.length > 0) {
      const l = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(t, true)
      }, a = Gt(n.children[1]), s = or(n.children[n.children.length - 1]);
      a && s && (l.position = {
        start: a,
        end: s
      }), i.push(l);
    }
    const o = {
      type: "element",
      tagName: "table",
      properties: {},
      children: e.wrap(i, true)
    };
    return e.patch(n, o), e.applyData(n, o);
  }
  function Wa(e, n, t) {
    const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, a = l ? l.length : n.children.length;
    let s = -1;
    const u = [];
    for (; ++s < a; ) {
      const c = n.children[s], p = {}, f = l ? l[s] : void 0;
      f && (p.align = f);
      let g = {
        type: "element",
        tagName: o,
        properties: p,
        children: []
      };
      c && (g.children = e.all(c), e.patch(c, g), g = e.applyData(c, g)), u.push(g);
    }
    const h = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: e.wrap(u, true)
    };
    return e.patch(n, h), e.applyData(n, h);
  }
  function Qa(e, n) {
    const t = {
      type: "element",
      tagName: "td",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  const Fn = 9, Pn = 32;
  function Ga(e) {
    const n = String(e), t = /\r?\n|\r/g;
    let r = t.exec(n), i = 0;
    const o = [];
    for (; r; ) o.push(_n(n.slice(i, r.index), i > 0, true), r[0]), i = r.index + r[0].length, r = t.exec(n);
    return o.push(_n(n.slice(i), i > 0, false)), o.join("");
  }
  function _n(e, n, t) {
    let r = 0, i = e.length;
    if (n) {
      let o = e.codePointAt(r);
      for (; o === Fn || o === Pn; ) r++, o = e.codePointAt(r);
    }
    if (t) {
      let o = e.codePointAt(i - 1);
      for (; o === Fn || o === Pn; ) i--, o = e.codePointAt(i - 1);
    }
    return i > r ? e.slice(r, i) : "";
  }
  function Ka(e, n) {
    const t = {
      type: "text",
      value: Ga(String(n.value))
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  function Ya(e, n) {
    const t = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return e.patch(n, t), e.applyData(n, t);
  }
  const Ja = {
    blockquote: va,
    break: Aa,
    code: Ta,
    delete: za,
    emphasis: Na,
    footnoteReference: ja,
    heading: Fa,
    html: Pa,
    imageReference: _a,
    image: Da,
    inlineCode: La,
    linkReference: Ra,
    link: Ma,
    listItem: Oa,
    list: $a,
    paragraph: Ha,
    root: Va,
    strong: qa,
    table: Ua,
    tableCell: Qa,
    tableRow: Wa,
    text: Ka,
    thematicBreak: Ya,
    toml: et,
    yaml: et,
    definition: et,
    footnoteDefinition: et
  };
  function et() {
  }
  const Tr = -1, mt = 0, qe = 1, st = 2, en = 3, tn = 4, nn = 5, rn = 6, zr = 7, Nr = 8, Dn = typeof self == "object" ? self : globalThis, Xa = (e, n) => {
    const t = (i, o) => (e.set(o, i), i), r = (i) => {
      if (e.has(i)) return e.get(i);
      const [o, l] = n[i];
      switch (o) {
        case mt:
        case Tr:
          return t(l, i);
        case qe: {
          const a = t([], i);
          for (const s of l) a.push(r(s));
          return a;
        }
        case st: {
          const a = t({}, i);
          for (const [s, u] of l) a[r(s)] = r(u);
          return a;
        }
        case en:
          return t(new Date(l), i);
        case tn: {
          const { source: a, flags: s } = l;
          return t(new RegExp(a, s), i);
        }
        case nn: {
          const a = t(/* @__PURE__ */ new Map(), i);
          for (const [s, u] of l) a.set(r(s), r(u));
          return a;
        }
        case rn: {
          const a = t(/* @__PURE__ */ new Set(), i);
          for (const s of l) a.add(r(s));
          return a;
        }
        case zr: {
          const { name: a, message: s } = l;
          return t(new Dn[a](s), i);
        }
        case Nr:
          return t(BigInt(l), i);
        case "BigInt":
          return t(Object(BigInt(l)), i);
        case "ArrayBuffer":
          return t(new Uint8Array(l).buffer, l);
        case "DataView": {
          const { buffer: a } = new Uint8Array(l);
          return t(new DataView(a), l);
        }
      }
      return t(new Dn[o](l), i);
    };
    return r;
  }, Ln = (e) => Xa(/* @__PURE__ */ new Map(), e)(0), Fe = "", { toString: Za } = {}, { keys: es } = Object, $e = (e) => {
    const n = typeof e;
    if (n !== "object" || !e) return [
      mt,
      n
    ];
    const t = Za.call(e).slice(8, -1);
    switch (t) {
      case "Array":
        return [
          qe,
          Fe
        ];
      case "Object":
        return [
          st,
          Fe
        ];
      case "Date":
        return [
          en,
          Fe
        ];
      case "RegExp":
        return [
          tn,
          Fe
        ];
      case "Map":
        return [
          nn,
          Fe
        ];
      case "Set":
        return [
          rn,
          Fe
        ];
      case "DataView":
        return [
          qe,
          t
        ];
    }
    return t.includes("Array") ? [
      qe,
      t
    ] : t.includes("Error") ? [
      zr,
      t
    ] : [
      st,
      t
    ];
  }, tt = ([e, n]) => e === mt && (n === "function" || n === "symbol"), ts = (e, n, t, r) => {
    const i = (l, a) => {
      const s = r.push(l) - 1;
      return t.set(a, s), s;
    }, o = (l) => {
      if (t.has(l)) return t.get(l);
      let [a, s] = $e(l);
      switch (a) {
        case mt: {
          let h = l;
          switch (s) {
            case "bigint":
              a = Nr, h = l.toString();
              break;
            case "function":
            case "symbol":
              if (e) throw new TypeError("unable to serialize " + s);
              h = null;
              break;
            case "undefined":
              return i([
                Tr
              ], l);
          }
          return i([
            a,
            h
          ], l);
        }
        case qe: {
          if (s) {
            let p = l;
            return s === "DataView" ? p = new Uint8Array(l.buffer) : s === "ArrayBuffer" && (p = new Uint8Array(l)), i([
              s,
              [
                ...p
              ]
            ], l);
          }
          const h = [], c = i([
            a,
            h
          ], l);
          for (const p of l) h.push(o(p));
          return c;
        }
        case st: {
          if (s) switch (s) {
            case "BigInt":
              return i([
                s,
                l.toString()
              ], l);
            case "Boolean":
            case "Number":
            case "String":
              return i([
                s,
                l.valueOf()
              ], l);
          }
          if (n && "toJSON" in l) return o(l.toJSON());
          const h = [], c = i([
            a,
            h
          ], l);
          for (const p of es(l)) (e || !tt($e(l[p]))) && h.push([
            o(p),
            o(l[p])
          ]);
          return c;
        }
        case en:
          return i([
            a,
            l.toISOString()
          ], l);
        case tn: {
          const { source: h, flags: c } = l;
          return i([
            a,
            {
              source: h,
              flags: c
            }
          ], l);
        }
        case nn: {
          const h = [], c = i([
            a,
            h
          ], l);
          for (const [p, f] of l) (e || !(tt($e(p)) || tt($e(f)))) && h.push([
            o(p),
            o(f)
          ]);
          return c;
        }
        case rn: {
          const h = [], c = i([
            a,
            h
          ], l);
          for (const p of l) (e || !tt($e(p))) && h.push(o(p));
          return c;
        }
      }
      const { message: u } = l;
      return i([
        a,
        {
          name: s,
          message: u
        }
      ], l);
    };
    return o;
  }, Rn = (e, { json: n, lossy: t } = {}) => {
    const r = [];
    return ts(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e), r;
  }, ut = typeof structuredClone == "function" ? (e, n) => n && ("json" in n || "lossy" in n) ? Ln(Rn(e, n)) : structuredClone(e) : (e, n) => Ln(Rn(e, n));
  function ns(e, n) {
    const t = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return n > 1 && t.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(n)
        }
      ]
    }), t;
  }
  function rs(e, n) {
    return "Back to reference " + (e + 1) + (n > 1 ? "-" + n : "");
  }
  function is(e) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", t = e.options.footnoteBackContent || ns, r = e.options.footnoteBackLabel || rs, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, a = [];
    let s = -1;
    for (; ++s < e.footnoteOrder.length; ) {
      const u = e.footnoteById.get(e.footnoteOrder[s]);
      if (!u) continue;
      const h = e.all(u), c = String(u.identifier).toUpperCase(), p = De(c.toLowerCase());
      let f = 0;
      const g = [], w = e.footnoteCounts.get(c);
      for (; w !== void 0 && ++f <= w; ) {
        g.length > 0 && g.push({
          type: "text",
          value: " "
        });
        let A = typeof t == "string" ? t : t(s, f);
        typeof A == "string" && (A = {
          type: "text",
          value: A
        }), g.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + n + "fnref-" + p + (f > 1 ? "-" + f : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(s, f),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(A) ? A : [
            A
          ]
        });
      }
      const v = h[h.length - 1];
      if (v && v.type === "element" && v.tagName === "p") {
        const A = v.children[v.children.length - 1];
        A && A.type === "text" ? A.value += " " : v.children.push({
          type: "text",
          value: " "
        }), v.children.push(...g);
      } else h.push(...g);
      const y = {
        type: "element",
        tagName: "li",
        properties: {
          id: n + "fn-" + p
        },
        children: e.wrap(h, true)
      };
      e.patch(u, y), a.push(y);
    }
    if (a.length !== 0) return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: [
          "footnotes"
        ]
      },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...ut(l),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: i
            }
          ]
        },
        {
          type: "text",
          value: `
`
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const dt = function(e) {
    if (e == null) return ss;
    if (typeof e == "function") return gt(e);
    if (typeof e == "object") return Array.isArray(e) ? ls(e) : os(e);
    if (typeof e == "string") return as(e);
    throw new Error("Expected function, string, or object as test");
  };
  function ls(e) {
    const n = [];
    let t = -1;
    for (; ++t < e.length; ) n[t] = dt(e[t]);
    return gt(r);
    function r(...i) {
      let o = -1;
      for (; ++o < n.length; ) if (n[o].apply(this, i)) return true;
      return false;
    }
  }
  function os(e) {
    const n = e;
    return gt(t);
    function t(r) {
      const i = r;
      let o;
      for (o in e) if (i[o] !== n[o]) return false;
      return true;
    }
  }
  function as(e) {
    return gt(n);
    function n(t) {
      return t && t.type === e;
    }
  }
  function gt(e) {
    return n;
    function n(t, r, i) {
      return !!(us(t) && e.call(this, t, typeof r == "number" ? r : void 0, i || void 0));
    }
  }
  function ss() {
    return true;
  }
  function us(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  const jr = [], cs = true, Bt = false, hs = "skip";
  function Fr(e, n, t, r) {
    let i;
    typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
    const o = dt(i), l = r ? -1 : 1;
    a(e, void 0, [])();
    function a(s, u, h) {
      const c = s && typeof s == "object" ? s : {};
      if (typeof c.type == "string") {
        const f = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0;
        Object.defineProperty(p, "name", {
          value: "node (" + (s.type + (f ? "<" + f + ">" : "")) + ")"
        });
      }
      return p;
      function p() {
        let f = jr, g, w, v;
        if ((!n || o(s, u, h[h.length - 1] || void 0)) && (f = fs(t(s, h)), f[0] === Bt)) return f;
        if ("children" in s && s.children) {
          const y = s;
          if (y.children && f[0] !== hs) for (w = (r ? y.children.length : -1) + l, v = h.concat(y); w > -1 && w < y.children.length; ) {
            const A = y.children[w];
            if (g = a(A, w, v)(), g[0] === Bt) return g;
            w = typeof g[1] == "number" ? g[1] : w + l;
          }
        }
        return f;
      }
    }
  }
  function fs(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [
      cs,
      e
    ] : e == null ? jr : [
      e
    ];
  }
  function ln(e, n, t, r) {
    let i, o, l;
    typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), Fr(e, o, a, i);
    function a(s, u) {
      const h = u[u.length - 1], c = h ? h.children.indexOf(s) : void 0;
      return l(s, c, h);
    }
  }
  const $t = {}.hasOwnProperty, ps = {};
  function ms(e, n) {
    const t = n || ps, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = {
      ...Ja,
      ...t.handlers
    }, a = {
      all: u,
      applyData: gs,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: o,
      footnoteOrder: [],
      handlers: l,
      one: s,
      options: t,
      patch: ds,
      wrap: ks
    };
    return ln(e, function(h) {
      if (h.type === "definition" || h.type === "footnoteDefinition") {
        const c = h.type === "definition" ? r : i, p = String(h.identifier).toUpperCase();
        c.has(p) || c.set(p, h);
      }
    }), a;
    function s(h, c) {
      const p = h.type, f = a.handlers[p];
      if ($t.call(a.handlers, p) && f) return f(a, h, c);
      if (a.options.passThrough && a.options.passThrough.includes(p)) {
        if ("children" in h) {
          const { children: w, ...v } = h, y = ut(v);
          return y.children = a.all(h), y;
        }
        return ut(h);
      }
      return (a.options.unknownHandler || xs)(a, h, c);
    }
    function u(h) {
      const c = [];
      if ("children" in h) {
        const p = h.children;
        let f = -1;
        for (; ++f < p.length; ) {
          const g = a.one(p[f], h);
          if (g) {
            if (f && p[f - 1].type === "break" && (!Array.isArray(g) && g.type === "text" && (g.value = Mn(g.value)), !Array.isArray(g) && g.type === "element")) {
              const w = g.children[0];
              w && w.type === "text" && (w.value = Mn(w.value));
            }
            Array.isArray(g) ? c.push(...g) : c.push(g);
          }
        }
      }
      return c;
    }
  }
  function ds(e, n) {
    e.position && (n.position = nl(e));
  }
  function gs(e, n) {
    let t = n;
    if (e && e.data) {
      const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
      if (typeof r == "string") if (t.type === "element") t.tagName = r;
      else {
        const l = "children" in t ? t.children : [
          t
        ];
        t = {
          type: "element",
          tagName: r,
          properties: {},
          children: l
        };
      }
      t.type === "element" && o && Object.assign(t.properties, ut(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
    }
    return t;
  }
  function xs(e, n) {
    const t = n.data || {}, r = "value" in n && !($t.call(t, "hProperties") || $t.call(t, "hChildren")) ? {
      type: "text",
      value: n.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: e.all(n)
    };
    return e.patch(n, r), e.applyData(n, r);
  }
  function ks(e, n) {
    const t = [];
    let r = -1;
    for (n && t.push({
      type: "text",
      value: `
`
    }); ++r < e.length; ) r && t.push({
      type: "text",
      value: `
`
    }), t.push(e[r]);
    return n && e.length > 0 && t.push({
      type: "text",
      value: `
`
    }), t;
  }
  function Mn(e) {
    let n = 0, t = e.charCodeAt(n);
    for (; t === 9 || t === 32; ) n++, t = e.charCodeAt(n);
    return e.slice(n);
  }
  function On(e, n) {
    const t = ms(e, n), r = t.one(e, void 0), i = is(t), o = Array.isArray(r) ? {
      type: "root",
      children: r
    } : r || {
      type: "root",
      children: []
    };
    return i && o.children.push({
      type: "text",
      value: `
`
    }, i), o;
  }
  function bs(e, n) {
    return e && "run" in e ? async function(t, r) {
      const i = On(t, {
        file: r,
        ...n
      });
      await e.run(i, r);
    } : function(t, r) {
      return On(t, {
        file: r,
        ...e || n
      });
    };
  }
  function Bn(e) {
    if (e) throw e;
  }
  var lt = Object.prototype.hasOwnProperty, Pr = Object.prototype.toString, $n = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Vn = function(n) {
    return typeof Array.isArray == "function" ? Array.isArray(n) : Pr.call(n) === "[object Array]";
  }, qn = function(n) {
    if (!n || Pr.call(n) !== "[object Object]") return false;
    var t = lt.call(n, "constructor"), r = n.constructor && n.constructor.prototype && lt.call(n.constructor.prototype, "isPrototypeOf");
    if (n.constructor && !t && !r) return false;
    var i;
    for (i in n) ;
    return typeof i > "u" || lt.call(n, i);
  }, Un = function(n, t) {
    $n && t.name === "__proto__" ? $n(n, t.name, {
      enumerable: true,
      configurable: true,
      value: t.newValue,
      writable: true
    }) : n[t.name] = t.newValue;
  }, Wn = function(n, t) {
    if (t === "__proto__") if (lt.call(n, t)) {
      if (Hn) return Hn(n, t).value;
    } else return;
    return n[t];
  }, ys = function e() {
    var n, t, r, i, o, l, a = arguments[0], s = 1, u = arguments.length, h = false;
    for (typeof a == "boolean" && (h = a, a = arguments[1] || {}, s = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); s < u; ++s) if (n = arguments[s], n != null) for (t in n) r = Wn(a, t), i = Wn(n, t), a !== i && (h && i && (qn(i) || (o = Vn(i))) ? (o ? (o = false, l = r && Vn(r) ? r : []) : l = r && qn(r) ? r : {}, Un(a, {
      name: t,
      newValue: e(h, l, i)
    })) : typeof i < "u" && Un(a, {
      name: t,
      newValue: i
    }));
    return a;
  };
  const It = lr(ys);
  function Ht(e) {
    if (typeof e != "object" || e === null) return false;
    const n = Object.getPrototypeOf(e);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function ws() {
    const e = [], n = {
      run: t,
      use: r
    };
    return n;
    function t(...i) {
      let o = -1;
      const l = i.pop();
      if (typeof l != "function") throw new TypeError("Expected function as last argument, not " + l);
      a(null, ...i);
      function a(s, ...u) {
        const h = e[++o];
        let c = -1;
        if (s) {
          l(s);
          return;
        }
        for (; ++c < i.length; ) (u[c] === null || u[c] === void 0) && (u[c] = i[c]);
        i = u, h ? Ss(h, a)(...u) : l(null, ...u);
      }
    }
    function r(i) {
      if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
      return e.push(i), n;
    }
  }
  function Ss(e, n) {
    let t;
    return r;
    function r(...l) {
      const a = e.length > l.length;
      let s;
      a && l.push(i);
      try {
        s = e.apply(this, l);
      } catch (u) {
        const h = u;
        if (a && t) throw h;
        return i(h);
      }
      a || (s && s.then && typeof s.then == "function" ? s.then(o, i) : s instanceof Error ? i(s) : o(s));
    }
    function i(l, ...a) {
      t || (t = true, n(l, ...a));
    }
    function o(l) {
      i(null, l);
    }
  }
  const xe = {
    basename: Cs,
    dirname: Es,
    extname: Is,
    join: vs,
    sep: "/"
  };
  function Cs(e, n) {
    if (n !== void 0 && typeof n != "string") throw new TypeError('"ext" argument must be a string');
    Ge(e);
    let t = 0, r = -1, i = e.length, o;
    if (n === void 0 || n.length === 0 || n.length > e.length) {
      for (; i--; ) if (e.codePointAt(i) === 47) {
        if (o) {
          t = i + 1;
          break;
        }
      } else r < 0 && (o = true, r = i + 1);
      return r < 0 ? "" : e.slice(t, r);
    }
    if (n === e) return "";
    let l = -1, a = n.length - 1;
    for (; i--; ) if (e.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else l < 0 && (o = true, l = i + 1), a > -1 && (e.codePointAt(i) === n.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = l));
    return t === r ? r = l : r < 0 && (r = e.length), e.slice(t, r);
  }
  function Es(e) {
    if (Ge(e), e.length === 0) return ".";
    let n = -1, t = e.length, r;
    for (; --t; ) if (e.codePointAt(t) === 47) {
      if (r) {
        n = t;
        break;
      }
    } else r || (r = true);
    return n < 0 ? e.codePointAt(0) === 47 ? "/" : "." : n === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, n);
  }
  function Is(e) {
    Ge(e);
    let n = e.length, t = -1, r = 0, i = -1, o = 0, l;
    for (; n--; ) {
      const a = e.codePointAt(n);
      if (a === 47) {
        if (l) {
          r = n + 1;
          break;
        }
        continue;
      }
      t < 0 && (l = true, t = n + 1), a === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
    }
    return i < 0 || t < 0 || o === 0 || o === 1 && i === t - 1 && i === r + 1 ? "" : e.slice(i, t);
  }
  function vs(...e) {
    let n = -1, t;
    for (; ++n < e.length; ) Ge(e[n]), e[n] && (t = t === void 0 ? e[n] : t + "/" + e[n]);
    return t === void 0 ? "." : As(t);
  }
  function As(e) {
    Ge(e);
    const n = e.codePointAt(0) === 47;
    let t = Ts(e, !n);
    return t.length === 0 && !n && (t = "."), t.length > 0 && e.codePointAt(e.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
  }
  function Ts(e, n) {
    let t = "", r = 0, i = -1, o = 0, l = -1, a, s;
    for (; ++l <= e.length; ) {
      if (l < e.length) a = e.codePointAt(l);
      else {
        if (a === 47) break;
        a = 47;
      }
      if (a === 47) {
        if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
          if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
            if (t.length > 2) {
              if (s = t.lastIndexOf("/"), s !== t.length - 1) {
                s < 0 ? (t = "", r = 0) : (t = t.slice(0, s), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
                continue;
              }
            } else if (t.length > 0) {
              t = "", r = 0, i = l, o = 0;
              continue;
            }
          }
          n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
        } else t.length > 0 ? t += "/" + e.slice(i + 1, l) : t = e.slice(i + 1, l), r = l - i - 1;
        i = l, o = 0;
      } else a === 46 && o > -1 ? o++ : o = -1;
    }
    return t;
  }
  function Ge(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  const zs = {
    cwd: Ns
  };
  function Ns() {
    return "/";
  }
  function Vt(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
  }
  function js(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!Vt(e)) {
      const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
      throw n.code = "ERR_INVALID_ARG_TYPE", n;
    }
    if (e.protocol !== "file:") {
      const n = new TypeError("The URL must be of scheme file");
      throw n.code = "ERR_INVALID_URL_SCHEME", n;
    }
    return Fs(e);
  }
  function Fs(e) {
    if (e.hostname !== "") {
      const r = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
    }
    const n = e.pathname;
    let t = -1;
    for (; ++t < n.length; ) if (n.codePointAt(t) === 37 && n.codePointAt(t + 1) === 50) {
      const r = n.codePointAt(t + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError("File URL path must not include encoded / characters");
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
    return decodeURIComponent(n);
  }
  const vt = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class _r {
    constructor(n) {
      let t;
      n ? Vt(n) ? t = {
        path: n
      } : typeof n == "string" || Ps(n) ? t = {
        value: n
      } : t = n : t = {}, this.cwd = "cwd" in t ? "" : zs.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let r = -1;
      for (; ++r < vt.length; ) {
        const o = vt[r];
        o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [
          ...t[o]
        ] : t[o]);
      }
      let i;
      for (i in t) vt.includes(i) || (this[i] = t[i]);
    }
    get basename() {
      return typeof this.path == "string" ? xe.basename(this.path) : void 0;
    }
    set basename(n) {
      Tt(n, "basename"), At(n, "basename"), this.path = xe.join(this.dirname || "", n);
    }
    get dirname() {
      return typeof this.path == "string" ? xe.dirname(this.path) : void 0;
    }
    set dirname(n) {
      Qn(this.basename, "dirname"), this.path = xe.join(n || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? xe.extname(this.path) : void 0;
    }
    set extname(n) {
      if (At(n, "extname"), Qn(this.dirname, "extname"), n) {
        if (n.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (n.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = xe.join(this.dirname, this.stem + (n || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(n) {
      Vt(n) && (n = js(n)), Tt(n, "path"), this.path !== n && this.history.push(n);
    }
    get stem() {
      return typeof this.path == "string" ? xe.basename(this.path, this.extname) : void 0;
    }
    set stem(n) {
      Tt(n, "stem"), At(n, "stem"), this.path = xe.join(this.dirname || "", n + (this.extname || ""));
    }
    fail(n, t, r) {
      const i = this.message(n, t, r);
      throw i.fatal = true, i;
    }
    info(n, t, r) {
      const i = this.message(n, t, r);
      return i.fatal = void 0, i;
    }
    message(n, t, r) {
      const i = new ee(n, t, r);
      return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = false, this.messages.push(i), i;
    }
    toString(n) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
    }
  }
  function At(e, n) {
    if (e && e.includes(xe.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + xe.sep + "`");
  }
  function Tt(e, n) {
    if (!e) throw new Error("`" + n + "` cannot be empty");
  }
  function Qn(e, n) {
    if (!e) throw new Error("Setting `" + n + "` requires `path` to be set too");
  }
  function Ps(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const _s = function(e) {
    const r = this.constructor.prototype, i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }, Ds = {}.hasOwnProperty;
  class on extends _s {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ws();
    }
    copy() {
      const n = new on();
      let t = -1;
      for (; ++t < this.attachers.length; ) {
        const r = this.attachers[t];
        n.use(...r);
      }
      return n.data(It(true, {}, this.namespace)), n;
    }
    data(n, t) {
      return typeof n == "string" ? arguments.length === 2 ? (jt("data", this.frozen), this.namespace[n] = t, this) : Ds.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (jt("data", this.frozen), this.namespace = n, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const n = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [t, ...r] = this.attachers[this.freezeIndex];
        if (r[0] === false) continue;
        r[0] === true && (r[0] = void 0);
        const i = t.call(n, ...r);
        typeof i == "function" && this.transformers.use(i);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(n) {
      this.freeze();
      const t = nt(n), r = this.parser || this.Parser;
      return zt("parse", r), r(String(t), t);
    }
    process(n, t) {
      const r = this;
      return this.freeze(), zt("process", this.parser || this.Parser), Nt("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
      function i(o, l) {
        const a = nt(n), s = r.parse(a);
        r.run(s, a, function(h, c, p) {
          if (h || !c || !p) return u(h);
          const f = c, g = r.stringify(f, p);
          Ms(g) ? p.value = g : p.result = g, u(h, p);
        });
        function u(h, c) {
          h || !c ? l(h) : o ? o(c) : t(void 0, c);
        }
      }
    }
    processSync(n) {
      let t = false, r;
      return this.freeze(), zt("processSync", this.parser || this.Parser), Nt("processSync", this.compiler || this.Compiler), this.process(n, i), Kn("processSync", "process", t), r;
      function i(o, l) {
        t = true, Bn(o), r = l;
      }
    }
    run(n, t, r) {
      Gn(n), this.freeze();
      const i = this.transformers;
      return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
      function o(l, a) {
        const s = nt(t);
        i.run(n, s, u);
        function u(h, c, p) {
          const f = c || n;
          h ? a(h) : l ? l(f) : r(void 0, f, p);
        }
      }
    }
    runSync(n, t) {
      let r = false, i;
      return this.run(n, t, o), Kn("runSync", "run", r), i;
      function o(l, a) {
        Bn(l), i = a, r = true;
      }
    }
    stringify(n, t) {
      this.freeze();
      const r = nt(t), i = this.compiler || this.Compiler;
      return Nt("stringify", i), Gn(n), i(n, r);
    }
    use(n, ...t) {
      const r = this.attachers, i = this.namespace;
      if (jt("use", this.frozen), n != null) if (typeof n == "function") s(n, t);
      else if (typeof n == "object") Array.isArray(n) ? a(n) : l(n);
      else throw new TypeError("Expected usable value, not `" + n + "`");
      return this;
      function o(u) {
        if (typeof u == "function") s(u, []);
        else if (typeof u == "object") if (Array.isArray(u)) {
          const [h, ...c] = u;
          s(h, c);
        } else l(u);
        else throw new TypeError("Expected usable value, not `" + u + "`");
      }
      function l(u) {
        if (!("plugins" in u) && !("settings" in u)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        a(u.plugins), u.settings && (i.settings = It(true, i.settings, u.settings));
      }
      function a(u) {
        let h = -1;
        if (u != null) if (Array.isArray(u)) for (; ++h < u.length; ) {
          const c = u[h];
          o(c);
        }
        else throw new TypeError("Expected a list of plugins, not `" + u + "`");
      }
      function s(u, h) {
        let c = -1, p = -1;
        for (; ++c < r.length; ) if (r[c][0] === u) {
          p = c;
          break;
        }
        if (p === -1) r.push([
          u,
          ...h
        ]);
        else if (h.length > 0) {
          let [f, ...g] = h;
          const w = r[p][1];
          Ht(w) && Ht(f) && (f = It(true, w, f)), r[p] = [
            u,
            f,
            ...g
          ];
        }
      }
    }
  }
  const Ls = new on().freeze();
  function zt(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
  }
  function Nt(e, n) {
    if (typeof n != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
  function jt(e, n) {
    if (n) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function Gn(e) {
    if (!Ht(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
  }
  function Kn(e, n, t) {
    if (!t) throw new Error("`" + e + "` finished async. Use `" + n + "` instead");
  }
  function nt(e) {
    return Rs(e) ? e : new _r(e);
  }
  function Rs(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
  }
  function Ms(e) {
    return typeof e == "string" || Os(e);
  }
  function Os(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const Bs = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Yn = [], Jn = {
    allowDangerousHtml: true
  }, $s = /^(https?|ircs?|mailto|xmpp)$/i, Hs = [
    {
      from: "astPlugins",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowDangerousHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "allowNode",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowElement"
    },
    {
      from: "allowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "allowedElements"
    },
    {
      from: "disallowedTypes",
      id: "replace-allownode-allowedtypes-and-disallowedtypes",
      to: "disallowedElements"
    },
    {
      from: "escapeHtml",
      id: "remove-buggy-html-in-markdown-parser"
    },
    {
      from: "includeElementIndex",
      id: "#remove-includeelementindex"
    },
    {
      from: "includeNodeIndex",
      id: "change-includenodeindex-to-includeelementindex"
    },
    {
      from: "linkTarget",
      id: "remove-linktarget"
    },
    {
      from: "plugins",
      id: "change-plugins-to-remarkplugins",
      to: "remarkPlugins"
    },
    {
      from: "rawSourcePos",
      id: "#remove-rawsourcepos"
    },
    {
      from: "renderers",
      id: "change-renderers-to-components",
      to: "components"
    },
    {
      from: "source",
      id: "change-source-to-children",
      to: "children"
    },
    {
      from: "sourcePos",
      id: "#remove-sourcepos"
    },
    {
      from: "transformImageUri",
      id: "#add-urltransform",
      to: "urlTransform"
    },
    {
      from: "transformLinkUri",
      id: "#add-urltransform",
      to: "urlTransform"
    }
  ];
  function Vs(e) {
    const n = qs(e), t = Us(e);
    return Ws(n.runSync(n.parse(t), t), e);
  }
  function qs(e) {
    const n = e.rehypePlugins || Yn, t = e.remarkPlugins || Yn, r = e.remarkRehypeOptions ? {
      ...e.remarkRehypeOptions,
      ...Jn
    } : Jn;
    return Ls().use(Ia).use(t).use(bs, r).use(n);
  }
  function Us(e) {
    const n = e.children || "", t = new _r();
    return typeof n == "string" && (t.value = n), t;
  }
  function Ws(e, n) {
    const t = n.allowedElements, r = n.allowElement, i = n.components, o = n.disallowedElements, l = n.skipHtml, a = n.unwrapDisallowed, s = n.urlTransform || Qs;
    for (const h of Hs) Object.hasOwn(n, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + Bs + h.id, void 0);
    return n.className && (e = {
      type: "element",
      tagName: "div",
      properties: {
        className: n.className
      },
      children: e.type === "root" ? e.children : [
        e
      ]
    }), ln(e, u), al(e, {
      Fragment: x.Fragment,
      components: i,
      ignoreInvalidStyle: true,
      jsx: x.jsx,
      jsxs: x.jsxs,
      passKeys: true,
      passNode: true
    });
    function u(h, c, p) {
      if (h.type === "raw" && p && typeof c == "number") return l ? p.children.splice(c, 1) : p.children[c] = {
        type: "text",
        value: h.value
      }, c;
      if (h.type === "element") {
        let f;
        for (f in St) if (Object.hasOwn(St, f) && Object.hasOwn(h.properties, f)) {
          const g = h.properties[f], w = St[f];
          (w === null || w.includes(h.tagName)) && (h.properties[f] = s(String(g || ""), f, h));
        }
      }
      if (h.type === "element") {
        let f = t ? !t.includes(h.tagName) : o ? o.includes(h.tagName) : false;
        if (!f && r && typeof c == "number" && (f = !r(h, c, p)), f && p && typeof c == "number") return a && h.children ? p.children.splice(c, 1, ...h.children) : p.children.splice(c, 1), c;
      }
    }
  }
  function Qs(e) {
    const n = e.indexOf(":"), t = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
    return n === -1 || i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || $s.test(e.slice(0, n)) ? e : "";
  }
  function Xn(e, n) {
    const t = String(e);
    if (typeof n != "string") throw new TypeError("Expected character");
    let r = 0, i = t.indexOf(n);
    for (; i !== -1; ) r++, i = t.indexOf(n, i + n.length);
    return r;
  }
  function Gs(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  function Ks(e, n, t) {
    const i = dt((t || {}).ignore || []), o = Ys(n);
    let l = -1;
    for (; ++l < o.length; ) Fr(e, "text", a);
    function a(u, h) {
      let c = -1, p;
      for (; ++c < h.length; ) {
        const f = h[c], g = p ? p.children : void 0;
        if (i(f, g ? g.indexOf(f) : void 0, p)) return;
        p = f;
      }
      if (p) return s(u, h);
    }
    function s(u, h) {
      const c = h[h.length - 1], p = o[l][0], f = o[l][1];
      let g = 0;
      const v = c.children.indexOf(u);
      let y = false, A = [];
      p.lastIndex = 0;
      let I = p.exec(u.value);
      for (; I; ) {
        const L = I.index, _ = {
          index: I.index,
          input: I.input,
          stack: [
            ...h,
            u
          ]
        };
        let S = f(...I, _);
        if (typeof S == "string" && (S = S.length > 0 ? {
          type: "text",
          value: S
        } : void 0), S === false ? p.lastIndex = L + 1 : (g !== L && A.push({
          type: "text",
          value: u.value.slice(g, L)
        }), Array.isArray(S) ? A.push(...S) : S && A.push(S), g = L + I[0].length, y = true), !p.global) break;
        I = p.exec(u.value);
      }
      return y ? (g < u.value.length && A.push({
        type: "text",
        value: u.value.slice(g)
      }), c.children.splice(v, 1, ...A)) : A = [
        u
      ], v + A.length;
    }
  }
  function Ys(e) {
    const n = [];
    if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
    const t = !e[0] || Array.isArray(e[0]) ? e : [
      e
    ];
    let r = -1;
    for (; ++r < t.length; ) {
      const i = t[r];
      n.push([
        Js(i[0]),
        Xs(i[1])
      ]);
    }
    return n;
  }
  function Js(e) {
    return typeof e == "string" ? new RegExp(Gs(e), "g") : e;
  }
  function Xs(e) {
    return typeof e == "function" ? e : function() {
      return e;
    };
  }
  const Ft = "phrasing", Pt = [
    "autolink",
    "link",
    "image",
    "label"
  ];
  function Zs() {
    return {
      transforms: [
        ou
      ],
      enter: {
        literalAutolink: tu,
        literalAutolinkEmail: _t,
        literalAutolinkHttp: _t,
        literalAutolinkWww: _t
      },
      exit: {
        literalAutolink: lu,
        literalAutolinkEmail: iu,
        literalAutolinkHttp: nu,
        literalAutolinkWww: ru
      }
    };
  }
  function eu() {
    return {
      unsafe: [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct: Ft,
          notInConstruct: Pt
        },
        {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct: Ft,
          notInConstruct: Pt
        },
        {
          character: ":",
          before: "[ps]",
          after: "\\/",
          inConstruct: Ft,
          notInConstruct: Pt
        }
      ]
    };
  }
  function tu(e) {
    this.enter({
      type: "link",
      title: null,
      url: "",
      children: []
    }, e);
  }
  function _t(e) {
    this.config.enter.autolinkProtocol.call(this, e);
  }
  function nu(e) {
    this.config.exit.autolinkProtocol.call(this, e);
  }
  function ru(e) {
    this.config.exit.data.call(this, e);
    const n = this.stack[this.stack.length - 1];
    n.type, n.url = "http://" + this.sliceSerialize(e);
  }
  function iu(e) {
    this.config.exit.autolinkEmail.call(this, e);
  }
  function lu(e) {
    this.exit(e);
  }
  function ou(e) {
    Ks(e, [
      [
        /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
        au
      ],
      [
        new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"),
        su
      ]
    ], {
      ignore: [
        "link",
        "linkReference"
      ]
    });
  }
  function au(e, n, t, r, i) {
    let o = "";
    if (!Dr(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !uu(t))) return false;
    const l = cu(t + r);
    if (!l[0]) return false;
    const a = {
      type: "link",
      title: null,
      url: o + n + l[0],
      children: [
        {
          type: "text",
          value: n + l[0]
        }
      ]
    };
    return l[1] ? [
      a,
      {
        type: "text",
        value: l[1]
      }
    ] : a;
  }
  function su(e, n, t, r) {
    return !Dr(r, true) || /[-\d_]$/.test(t) ? false : {
      type: "link",
      title: null,
      url: "mailto:" + n + "@" + t,
      children: [
        {
          type: "text",
          value: n + "@" + t
        }
      ]
    };
  }
  function uu(e) {
    const n = e.split(".");
    return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
  }
  function cu(e) {
    const n = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!n) return [
      e,
      void 0
    ];
    e = e.slice(0, n.index);
    let t = n[0], r = t.indexOf(")");
    const i = Xn(e, "(");
    let o = Xn(e, ")");
    for (; r !== -1 && i > o; ) e += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
    return [
      e,
      t
    ];
  }
  function Dr(e, n) {
    const t = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || Ne(t) || ft(t)) && (!n || t !== 47);
  }
  Lr.peek = bu;
  function hu() {
    this.buffer();
  }
  function fu(e) {
    this.enter({
      type: "footnoteReference",
      identifier: "",
      label: ""
    }, e);
  }
  function pu() {
    this.buffer();
  }
  function mu(e) {
    this.enter({
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: []
    }, e);
  }
  function du(e) {
    const n = this.resume(), t = this.stack[this.stack.length - 1];
    t.type, t.identifier = de(this.sliceSerialize(e)).toLowerCase(), t.label = n;
  }
  function gu(e) {
    this.exit(e);
  }
  function xu(e) {
    const n = this.resume(), t = this.stack[this.stack.length - 1];
    t.type, t.identifier = de(this.sliceSerialize(e)).toLowerCase(), t.label = n;
  }
  function ku(e) {
    this.exit(e);
  }
  function bu() {
    return "[";
  }
  function Lr(e, n, t, r) {
    const i = t.createTracker(r);
    let o = i.move("[^");
    const l = t.enter("footnoteReference"), a = t.enter("reference");
    return o += i.move(t.safe(t.associationId(e), {
      after: "]",
      before: o
    })), a(), l(), o += i.move("]"), o;
  }
  function yu() {
    return {
      enter: {
        gfmFootnoteCallString: hu,
        gfmFootnoteCall: fu,
        gfmFootnoteDefinitionLabelString: pu,
        gfmFootnoteDefinition: mu
      },
      exit: {
        gfmFootnoteCallString: du,
        gfmFootnoteCall: gu,
        gfmFootnoteDefinitionLabelString: xu,
        gfmFootnoteDefinition: ku
      }
    };
  }
  function wu(e) {
    let n = false;
    return e && e.firstLineBlank && (n = true), {
      handlers: {
        footnoteDefinition: t,
        footnoteReference: Lr
      },
      unsafe: [
        {
          character: "[",
          inConstruct: [
            "label",
            "phrasing",
            "reference"
          ]
        }
      ]
    };
    function t(r, i, o, l) {
      const a = o.createTracker(l);
      let s = a.move("[^");
      const u = o.enter("footnoteDefinition"), h = o.enter("label");
      return s += a.move(o.safe(o.associationId(r), {
        before: s,
        after: "]"
      })), h(), s += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), s += a.move((n ? `
` : " ") + o.indentLines(o.containerFlow(r, a.current()), n ? Rr : Su))), u(), s;
    }
  }
  function Su(e, n, t) {
    return n === 0 ? e : Rr(e, n, t);
  }
  function Rr(e, n, t) {
    return (t ? "" : "    ") + e;
  }
  const Cu = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
  ];
  Mr.peek = Tu;
  function Eu() {
    return {
      canContainEols: [
        "delete"
      ],
      enter: {
        strikethrough: vu
      },
      exit: {
        strikethrough: Au
      }
    };
  }
  function Iu() {
    return {
      unsafe: [
        {
          character: "~",
          inConstruct: "phrasing",
          notInConstruct: Cu
        }
      ],
      handlers: {
        delete: Mr
      }
    };
  }
  function vu(e) {
    this.enter({
      type: "delete",
      children: []
    }, e);
  }
  function Au(e) {
    this.exit(e);
  }
  function Mr(e, n, t, r) {
    const i = t.createTracker(r), o = t.enter("strikethrough");
    let l = i.move("~~");
    return l += t.containerPhrasing(e, {
      ...i.current(),
      before: l,
      after: "~"
    }), l += i.move("~~"), o(), l;
  }
  function Tu() {
    return "~";
  }
  function zu(e) {
    return e.length;
  }
  function Nu(e, n) {
    const t = n || {}, r = (t.align || []).concat(), i = t.stringLength || zu, o = [], l = [], a = [], s = [];
    let u = 0, h = -1;
    for (; ++h < e.length; ) {
      const w = [], v = [];
      let y = -1;
      for (e[h].length > u && (u = e[h].length); ++y < e[h].length; ) {
        const A = ju(e[h][y]);
        if (t.alignDelimiters !== false) {
          const I = i(A);
          v[y] = I, (s[y] === void 0 || I > s[y]) && (s[y] = I);
        }
        w.push(A);
      }
      l[h] = w, a[h] = v;
    }
    let c = -1;
    if (typeof r == "object" && "length" in r) for (; ++c < u; ) o[c] = Zn(r[c]);
    else {
      const w = Zn(r);
      for (; ++c < u; ) o[c] = w;
    }
    c = -1;
    const p = [], f = [];
    for (; ++c < u; ) {
      const w = o[c];
      let v = "", y = "";
      w === 99 ? (v = ":", y = ":") : w === 108 ? v = ":" : w === 114 && (y = ":");
      let A = t.alignDelimiters === false ? 1 : Math.max(1, s[c] - v.length - y.length);
      const I = v + "-".repeat(A) + y;
      t.alignDelimiters !== false && (A = v.length + A + y.length, A > s[c] && (s[c] = A), f[c] = A), p[c] = I;
    }
    l.splice(1, 0, p), a.splice(1, 0, f), h = -1;
    const g = [];
    for (; ++h < l.length; ) {
      const w = l[h], v = a[h];
      c = -1;
      const y = [];
      for (; ++c < u; ) {
        const A = w[c] || "";
        let I = "", L = "";
        if (t.alignDelimiters !== false) {
          const _ = s[c] - (v[c] || 0), S = o[c];
          S === 114 ? I = " ".repeat(_) : S === 99 ? _ % 2 ? (I = " ".repeat(_ / 2 + 0.5), L = " ".repeat(_ / 2 - 0.5)) : (I = " ".repeat(_ / 2), L = I) : L = " ".repeat(_);
        }
        t.delimiterStart !== false && !c && y.push("|"), t.padding !== false && !(t.alignDelimiters === false && A === "") && (t.delimiterStart !== false || c) && y.push(" "), t.alignDelimiters !== false && y.push(I), y.push(A), t.alignDelimiters !== false && y.push(L), t.padding !== false && y.push(" "), (t.delimiterEnd !== false || c !== u - 1) && y.push("|");
      }
      g.push(t.delimiterEnd === false ? y.join("").replace(/ +$/, "") : y.join(""));
    }
    return g.join(`
`);
  }
  function ju(e) {
    return e == null ? "" : String(e);
  }
  function Zn(e) {
    const n = typeof e == "string" ? e.codePointAt(0) : 0;
    return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
  }
  function Fu(e, n, t, r) {
    const i = t.enter("blockquote"), o = t.createTracker(r);
    o.move("> "), o.shift(2);
    const l = t.indentLines(t.containerFlow(e, o.current()), Pu);
    return i(), l;
  }
  function Pu(e, n, t) {
    return ">" + (t ? "" : " ") + e;
  }
  function _u(e, n) {
    return er(e, n.inConstruct, true) && !er(e, n.notInConstruct, false);
  }
  function er(e, n, t) {
    if (typeof n == "string" && (n = [
      n
    ]), !n || n.length === 0) return t;
    let r = -1;
    for (; ++r < n.length; ) if (e.includes(n[r])) return true;
    return false;
  }
  function tr(e, n, t, r) {
    let i = -1;
    for (; ++i < t.unsafe.length; ) if (t.unsafe[i].character === `
` && _u(t.stack, t.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
    return `\\
`;
  }
  function Du(e, n) {
    const t = String(e);
    let r = t.indexOf(n), i = r, o = 0, l = 0;
    if (typeof n != "string") throw new TypeError("Expected substring");
    for (; r !== -1; ) r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
    return l;
  }
  function Lu(e, n) {
    return !!(n.options.fences === false && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
  }
  function Ru(e) {
    const n = e.options.fence || "`";
    if (n !== "`" && n !== "~") throw new Error("Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`");
    return n;
  }
  function Mu(e, n, t, r) {
    const i = Ru(t), o = e.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
    if (Lu(e, t)) {
      const c = t.enter("codeIndented"), p = t.indentLines(o, Ou);
      return c(), p;
    }
    const a = t.createTracker(r), s = i.repeat(Math.max(Du(o, i) + 1, 3)), u = t.enter("codeFenced");
    let h = a.move(s);
    if (e.lang) {
      const c = t.enter(`codeFencedLang${l}`);
      h += a.move(t.safe(e.lang, {
        before: h,
        after: " ",
        encode: [
          "`"
        ],
        ...a.current()
      })), c();
    }
    if (e.lang && e.meta) {
      const c = t.enter(`codeFencedMeta${l}`);
      h += a.move(" "), h += a.move(t.safe(e.meta, {
        before: h,
        after: `
`,
        encode: [
          "`"
        ],
        ...a.current()
      })), c();
    }
    return h += a.move(`
`), o && (h += a.move(o + `
`)), h += a.move(s), u(), h;
  }
  function Ou(e, n, t) {
    return (t ? "" : "    ") + e;
  }
  function an(e) {
    const n = e.options.quote || '"';
    if (n !== '"' && n !== "'") throw new Error("Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`");
    return n;
  }
  function Bu(e, n, t, r) {
    const i = an(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
    let a = t.enter("label");
    const s = t.createTracker(r);
    let u = s.move("[");
    return u += s.move(t.safe(t.associationId(e), {
      before: u,
      after: "]",
      ...s.current()
    })), u += s.move("]: "), a(), !e.url || /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(t.safe(e.url, {
      before: u,
      after: ">",
      ...s.current()
    })), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(t.safe(e.url, {
      before: u,
      after: e.title ? " " : `
`,
      ...s.current()
    }))), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })), u += s.move(i), a()), l(), u;
  }
  function $u(e) {
    const n = e.options.emphasis || "*";
    if (n !== "*" && n !== "_") throw new Error("Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`");
    return n;
  }
  function We(e) {
    return "&#x" + e.toString(16).toUpperCase() + ";";
  }
  function ct(e, n, t) {
    const r = _e(e), i = _e(n);
    return r === void 0 ? i === void 0 ? t === "_" ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: true
    } : r === 1 ? i === void 0 ? {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : i === void 0 ? {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: false
    } : {
      inside: false,
      outside: false
    };
  }
  Or.peek = Hu;
  function Or(e, n, t, r) {
    const i = $u(t), o = t.enter("emphasis"), l = t.createTracker(r), a = l.move(i);
    let s = l.move(t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    }));
    const u = s.charCodeAt(0), h = ct(r.before.charCodeAt(r.before.length - 1), u, i);
    h.inside && (s = We(u) + s.slice(1));
    const c = s.charCodeAt(s.length - 1), p = ct(r.after.charCodeAt(0), c, i);
    p.inside && (s = s.slice(0, -1) + We(c));
    const f = l.move(i);
    return o(), t.attentionEncodeSurroundingInfo = {
      after: p.outside,
      before: h.outside
    }, a + s + f;
  }
  function Hu(e, n, t) {
    return t.options.emphasis || "*";
  }
  function Vu(e, n) {
    let t = false;
    return ln(e, function(r) {
      if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break") return t = true, Bt;
    }), !!((!e.depth || e.depth < 3) && Xt(e) && (n.options.setext || t));
  }
  function qu(e, n, t, r) {
    const i = Math.max(Math.min(6, e.depth || 1), 1), o = t.createTracker(r);
    if (Vu(e, t)) {
      const h = t.enter("headingSetext"), c = t.enter("phrasing"), p = t.containerPhrasing(e, {
        ...o.current(),
        before: `
`,
        after: `
`
      });
      return c(), h(), p + `
` + (i === 1 ? "=" : "-").repeat(p.length - (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1));
    }
    const l = "#".repeat(i), a = t.enter("headingAtx"), s = t.enter("phrasing");
    o.move(l + " ");
    let u = t.containerPhrasing(e, {
      before: "# ",
      after: `
`,
      ...o.current()
    });
    return /^[\t ]/.test(u) && (u = We(u.charCodeAt(0)) + u.slice(1)), u = u ? l + " " + u : l, t.options.closeAtx && (u += " " + l), s(), a(), u;
  }
  Br.peek = Uu;
  function Br(e) {
    return e.value || "";
  }
  function Uu() {
    return "<";
  }
  $r.peek = Wu;
  function $r(e, n, t, r) {
    const i = an(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
    let a = t.enter("label");
    const s = t.createTracker(r);
    let u = s.move("![");
    return u += s.move(t.safe(e.alt, {
      before: u,
      after: "]",
      ...s.current()
    })), u += s.move("]("), a(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (a = t.enter("destinationLiteral"), u += s.move("<"), u += s.move(t.safe(e.url, {
      before: u,
      after: ">",
      ...s.current()
    })), u += s.move(">")) : (a = t.enter("destinationRaw"), u += s.move(t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...s.current()
    }))), a(), e.title && (a = t.enter(`title${o}`), u += s.move(" " + i), u += s.move(t.safe(e.title, {
      before: u,
      after: i,
      ...s.current()
    })), u += s.move(i), a()), u += s.move(")"), l(), u;
  }
  function Wu() {
    return "!";
  }
  Hr.peek = Qu;
  function Hr(e, n, t, r) {
    const i = e.referenceType, o = t.enter("imageReference");
    let l = t.enter("label");
    const a = t.createTracker(r);
    let s = a.move("![");
    const u = t.safe(e.alt, {
      before: s,
      after: "]",
      ...a.current()
    });
    s += a.move(u + "]["), l();
    const h = t.stack;
    t.stack = [], l = t.enter("reference");
    const c = t.safe(t.associationId(e), {
      before: s,
      after: "]",
      ...a.current()
    });
    return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
  }
  function Qu() {
    return "!";
  }
  Vr.peek = Gu;
  function Vr(e, n, t) {
    let r = e.value || "", i = "`", o = -1;
    for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
    for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
      const l = t.unsafe[o], a = t.compilePattern(l);
      let s;
      if (l.atBreak) for (; s = a.exec(r); ) {
        let u = s.index;
        r.charCodeAt(u) === 10 && r.charCodeAt(u - 1) === 13 && u--, r = r.slice(0, u) + " " + r.slice(s.index + 1);
      }
    }
    return i + r + i;
  }
  function Gu() {
    return "`";
  }
  function qr(e, n) {
    const t = Xt(e);
    return !!(!n.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (t === e.url || "mailto:" + t === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
  }
  Ur.peek = Ku;
  function Ur(e, n, t, r) {
    const i = an(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
    let a, s;
    if (qr(e, t)) {
      const h = t.stack;
      t.stack = [], a = t.enter("autolink");
      let c = l.move("<");
      return c += l.move(t.containerPhrasing(e, {
        before: c,
        after: ">",
        ...l.current()
      })), c += l.move(">"), a(), t.stack = h, c;
    }
    a = t.enter("link"), s = t.enter("label");
    let u = l.move("[");
    return u += l.move(t.containerPhrasing(e, {
      before: u,
      after: "](",
      ...l.current()
    })), u += l.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = t.enter("destinationLiteral"), u += l.move("<"), u += l.move(t.safe(e.url, {
      before: u,
      after: ">",
      ...l.current()
    })), u += l.move(">")) : (s = t.enter("destinationRaw"), u += l.move(t.safe(e.url, {
      before: u,
      after: e.title ? " " : ")",
      ...l.current()
    }))), s(), e.title && (s = t.enter(`title${o}`), u += l.move(" " + i), u += l.move(t.safe(e.title, {
      before: u,
      after: i,
      ...l.current()
    })), u += l.move(i), s()), u += l.move(")"), a(), u;
  }
  function Ku(e, n, t) {
    return qr(e, t) ? "<" : "[";
  }
  Wr.peek = Yu;
  function Wr(e, n, t, r) {
    const i = e.referenceType, o = t.enter("linkReference");
    let l = t.enter("label");
    const a = t.createTracker(r);
    let s = a.move("[");
    const u = t.containerPhrasing(e, {
      before: s,
      after: "]",
      ...a.current()
    });
    s += a.move(u + "]["), l();
    const h = t.stack;
    t.stack = [], l = t.enter("reference");
    const c = t.safe(t.associationId(e), {
      before: s,
      after: "]",
      ...a.current()
    });
    return l(), t.stack = h, o(), i === "full" || !u || u !== c ? s += a.move(c + "]") : i === "shortcut" ? s = s.slice(0, -1) : s += a.move("]"), s;
  }
  function Yu() {
    return "[";
  }
  function sn(e) {
    const n = e.options.bullet || "*";
    if (n !== "*" && n !== "+" && n !== "-") throw new Error("Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return n;
  }
  function Ju(e) {
    const n = sn(e), t = e.options.bulletOther;
    if (!t) return n === "*" ? "-" : "*";
    if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (t === n) throw new Error("Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different");
    return t;
  }
  function Xu(e) {
    const n = e.options.bulletOrdered || ".";
    if (n !== "." && n !== ")") throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`");
    return n;
  }
  function Qr(e) {
    const n = e.options.rule || "*";
    if (n !== "*" && n !== "-" && n !== "_") throw new Error("Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`");
    return n;
  }
  function Zu(e, n, t, r) {
    const i = t.enter("list"), o = t.bulletCurrent;
    let l = e.ordered ? Xu(t) : sn(t);
    const a = e.ordered ? l === "." ? ")" : "." : Ju(t);
    let s = n && t.bulletLastUsed ? l === t.bulletLastUsed : false;
    if (!e.ordered) {
      const h = e.children ? e.children[0] : void 0;
      if ((l === "*" || l === "-") && h && (!h.children || !h.children[0]) && t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (s = true), Qr(t) === l && h) {
        let c = -1;
        for (; ++c < e.children.length; ) {
          const p = e.children[c];
          if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
            s = true;
            break;
          }
        }
      }
    }
    s && (l = a), t.bulletCurrent = l;
    const u = t.containerFlow(e, r);
    return t.bulletLastUsed = l, t.bulletCurrent = o, i(), u;
  }
  function ec(e) {
    const n = e.options.listItemIndent || "one";
    if (n !== "tab" && n !== "one" && n !== "mixed") throw new Error("Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return n;
  }
  function tc(e, n, t, r) {
    const i = ec(t);
    let o = t.bulletCurrent || sn(t);
    n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === false ? 0 : n.children.indexOf(e)) + o);
    let l = o.length + 1;
    (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e.spread)) && (l = Math.ceil(l / 4) * 4);
    const a = t.createTracker(r);
    a.move(o + " ".repeat(l - o.length)), a.shift(l);
    const s = t.enter("listItem"), u = t.indentLines(t.containerFlow(e, a.current()), h);
    return s(), u;
    function h(c, p, f) {
      return p ? (f ? "" : " ".repeat(l)) + c : (f ? o : o + " ".repeat(l - o.length)) + c;
    }
  }
  function nc(e, n, t, r) {
    const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e, r);
    return o(), i(), l;
  }
  const rc = dt([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective"
  ]);
  function ic(e, n, t, r) {
    return (e.children.some(function(l) {
      return rc(l);
    }) ? t.containerPhrasing : t.containerFlow).call(t, e, r);
  }
  function lc(e) {
    const n = e.options.strong || "*";
    if (n !== "*" && n !== "_") throw new Error("Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`");
    return n;
  }
  Gr.peek = oc;
  function Gr(e, n, t, r) {
    const i = lc(t), o = t.enter("strong"), l = t.createTracker(r), a = l.move(i + i);
    let s = l.move(t.containerPhrasing(e, {
      after: i,
      before: a,
      ...l.current()
    }));
    const u = s.charCodeAt(0), h = ct(r.before.charCodeAt(r.before.length - 1), u, i);
    h.inside && (s = We(u) + s.slice(1));
    const c = s.charCodeAt(s.length - 1), p = ct(r.after.charCodeAt(0), c, i);
    p.inside && (s = s.slice(0, -1) + We(c));
    const f = l.move(i + i);
    return o(), t.attentionEncodeSurroundingInfo = {
      after: p.outside,
      before: h.outside
    }, a + s + f;
  }
  function oc(e, n, t) {
    return t.options.strong || "*";
  }
  function ac(e, n, t, r) {
    return t.safe(e.value, r);
  }
  function sc(e) {
    const n = e.options.ruleRepetition || 3;
    if (n < 3) throw new Error("Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more");
    return n;
  }
  function uc(e, n, t) {
    const r = (Qr(t) + (t.options.ruleSpaces ? " " : "")).repeat(sc(t));
    return t.options.ruleSpaces ? r.slice(0, -1) : r;
  }
  const Kr = {
    blockquote: Fu,
    break: tr,
    code: Mu,
    definition: Bu,
    emphasis: Or,
    hardBreak: tr,
    heading: qu,
    html: Br,
    image: $r,
    imageReference: Hr,
    inlineCode: Vr,
    link: Ur,
    linkReference: Wr,
    list: Zu,
    listItem: tc,
    paragraph: nc,
    root: ic,
    strong: Gr,
    text: ac,
    thematicBreak: uc
  };
  function cc() {
    return {
      enter: {
        table: hc,
        tableData: nr,
        tableHeader: nr,
        tableRow: pc
      },
      exit: {
        codeText: mc,
        table: fc,
        tableData: Dt,
        tableHeader: Dt,
        tableRow: Dt
      }
    };
  }
  function hc(e) {
    const n = e._align;
    this.enter({
      type: "table",
      align: n.map(function(t) {
        return t === "none" ? null : t;
      }),
      children: []
    }, e), this.data.inTable = true;
  }
  function fc(e) {
    this.exit(e), this.data.inTable = void 0;
  }
  function pc(e) {
    this.enter({
      type: "tableRow",
      children: []
    }, e);
  }
  function Dt(e) {
    this.exit(e);
  }
  function nr(e) {
    this.enter({
      type: "tableCell",
      children: []
    }, e);
  }
  function mc(e) {
    let n = this.resume();
    this.data.inTable && (n = n.replace(/\\([\\|])/g, dc));
    const t = this.stack[this.stack.length - 1];
    t.type, t.value = n, this.exit(e);
  }
  function dc(e, n) {
    return n === "|" ? n : e;
  }
  function gc(e) {
    const n = e || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
    return {
      unsafe: [
        {
          character: "\r",
          inConstruct: "tableCell"
        },
        {
          character: `
`,
          inConstruct: "tableCell"
        },
        {
          atBreak: true,
          character: "|",
          after: "[	 :-]"
        },
        {
          character: "|",
          inConstruct: "tableCell"
        },
        {
          atBreak: true,
          character: ":",
          after: "-"
        },
        {
          atBreak: true,
          character: "-",
          after: "[:|-]"
        }
      ],
      handlers: {
        inlineCode: p,
        table: l,
        tableCell: s,
        tableRow: a
      }
    };
    function l(f, g, w, v) {
      return u(h(f, w, v), f.align);
    }
    function a(f, g, w, v) {
      const y = c(f, w, v), A = u([
        y
      ]);
      return A.slice(0, A.indexOf(`
`));
    }
    function s(f, g, w, v) {
      const y = w.enter("tableCell"), A = w.enter("phrasing"), I = w.containerPhrasing(f, {
        ...v,
        before: o,
        after: o
      });
      return A(), y(), I;
    }
    function u(f, g) {
      return Nu(f, {
        align: g,
        alignDelimiters: r,
        padding: t,
        stringLength: i
      });
    }
    function h(f, g, w) {
      const v = f.children;
      let y = -1;
      const A = [], I = g.enter("table");
      for (; ++y < v.length; ) A[y] = c(v[y], g, w);
      return I(), A;
    }
    function c(f, g, w) {
      const v = f.children;
      let y = -1;
      const A = [], I = g.enter("tableRow");
      for (; ++y < v.length; ) A[y] = s(v[y], f, g, w);
      return I(), A;
    }
    function p(f, g, w) {
      let v = Kr.inlineCode(f, g, w);
      return w.stack.includes("tableCell") && (v = v.replace(/\|/g, "\\$&")), v;
    }
  }
  function xc() {
    return {
      exit: {
        taskListCheckValueChecked: rr,
        taskListCheckValueUnchecked: rr,
        paragraph: bc
      }
    };
  }
  function kc() {
    return {
      unsafe: [
        {
          atBreak: true,
          character: "-",
          after: "[:|-]"
        }
      ],
      handlers: {
        listItem: yc
      }
    };
  }
  function rr(e) {
    const n = this.stack[this.stack.length - 2];
    n.type, n.checked = e.type === "taskListCheckValueChecked";
  }
  function bc(e) {
    const n = this.stack[this.stack.length - 2];
    if (n && n.type === "listItem" && typeof n.checked == "boolean") {
      const t = this.stack[this.stack.length - 1];
      t.type;
      const r = t.children[0];
      if (r && r.type === "text") {
        const i = n.children;
        let o = -1, l;
        for (; ++o < i.length; ) {
          const a = i[o];
          if (a.type === "paragraph") {
            l = a;
            break;
          }
        }
        l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
      }
    }
    this.exit(e);
  }
  function yc(e, n, t, r) {
    const i = e.children[0], o = typeof e.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e.checked ? "x" : " ") + "] ", a = t.createTracker(r);
    o && a.move(l);
    let s = Kr.listItem(e, n, t, {
      ...r,
      ...a.current()
    });
    return o && (s = s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, u)), s;
    function u(h) {
      return h + l;
    }
  }
  function wc() {
    return [
      Zs(),
      yu(),
      Eu(),
      cc(),
      xc()
    ];
  }
  function Sc(e) {
    return {
      extensions: [
        eu(),
        wu(e),
        Iu(),
        gc(e),
        kc()
      ]
    };
  }
  const Cc = {
    tokenize: zc,
    partial: true
  }, Yr = {
    tokenize: Nc,
    partial: true
  }, Jr = {
    tokenize: jc,
    partial: true
  }, Xr = {
    tokenize: Fc,
    partial: true
  }, Ec = {
    tokenize: Pc,
    partial: true
  }, Zr = {
    name: "wwwAutolink",
    tokenize: Ac,
    previous: ti
  }, ei = {
    name: "protocolAutolink",
    tokenize: Tc,
    previous: ni
  }, we = {
    name: "emailAutolink",
    tokenize: vc,
    previous: ri
  }, ke = {};
  function Ic() {
    return {
      text: ke
    };
  }
  let Ae = 48;
  for (; Ae < 123; ) ke[Ae] = we, Ae++, Ae === 58 ? Ae = 65 : Ae === 91 && (Ae = 97);
  ke[43] = we;
  ke[45] = we;
  ke[46] = we;
  ke[95] = we;
  ke[72] = [
    we,
    ei
  ];
  ke[104] = [
    we,
    ei
  ];
  ke[87] = [
    we,
    Zr
  ];
  ke[119] = [
    we,
    Zr
  ];
  function vc(e, n, t) {
    const r = this;
    let i, o;
    return l;
    function l(c) {
      return !qt(c) || !ri.call(r, r.previous) || un(r.events) ? t(c) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(c));
    }
    function a(c) {
      return qt(c) ? (e.consume(c), a) : c === 64 ? (e.consume(c), s) : t(c);
    }
    function s(c) {
      return c === 46 ? e.check(Ec, h, u)(c) : c === 45 || c === 95 || Z(c) ? (o = true, e.consume(c), s) : h(c);
    }
    function u(c) {
      return e.consume(c), i = true, s;
    }
    function h(c) {
      return o && i && ne(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), n(c)) : t(c);
    }
  }
  function Ac(e, n, t) {
    const r = this;
    return i;
    function i(l) {
      return l !== 87 && l !== 119 || !ti.call(r, r.previous) || un(r.events) ? t(l) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(Cc, e.attempt(Yr, e.attempt(Jr, o), t), t)(l));
    }
    function o(l) {
      return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), n(l);
    }
  }
  function Tc(e, n, t) {
    const r = this;
    let i = "", o = false;
    return l;
    function l(c) {
      return (c === 72 || c === 104) && ni.call(r, r.previous) && !un(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e.consume(c), a) : t(c);
    }
    function a(c) {
      if (ne(c) && i.length < 5) return i += String.fromCodePoint(c), e.consume(c), a;
      if (c === 58) {
        const p = i.toLowerCase();
        if (p === "http" || p === "https") return e.consume(c), s;
      }
      return t(c);
    }
    function s(c) {
      return c === 47 ? (e.consume(c), o ? u : (o = true, s)) : t(c);
    }
    function u(c) {
      return c === null || at(c) || Q(c) || Ne(c) || ft(c) ? t(c) : e.attempt(Yr, e.attempt(Jr, h), t)(c);
    }
    function h(c) {
      return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), n(c);
    }
  }
  function zc(e, n, t) {
    let r = 0;
    return i;
    function i(l) {
      return (l === 87 || l === 119) && r < 3 ? (r++, e.consume(l), i) : l === 46 && r === 3 ? (e.consume(l), o) : t(l);
    }
    function o(l) {
      return l === null ? t(l) : n(l);
    }
  }
  function Nc(e, n, t) {
    let r, i, o;
    return l;
    function l(u) {
      return u === 46 || u === 95 ? e.check(Xr, s, a)(u) : u === null || Q(u) || Ne(u) || u !== 45 && ft(u) ? s(u) : (o = true, e.consume(u), l);
    }
    function a(u) {
      return u === 95 ? r = true : (i = r, r = void 0), e.consume(u), l;
    }
    function s(u) {
      return i || r || !o ? t(u) : n(u);
    }
  }
  function jc(e, n) {
    let t = 0, r = 0;
    return i;
    function i(l) {
      return l === 40 ? (t++, e.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e.check(Xr, n, o)(l) : l === null || Q(l) || Ne(l) ? n(l) : (e.consume(l), i);
    }
    function o(l) {
      return l === 41 && r++, e.consume(l), i;
    }
  }
  function Fc(e, n, t) {
    return r;
    function r(a) {
      return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), o) : a === 93 ? (e.consume(a), i) : a === 60 || a === null || Q(a) || Ne(a) ? n(a) : t(a);
    }
    function i(a) {
      return a === null || a === 40 || a === 91 || Q(a) || Ne(a) ? n(a) : r(a);
    }
    function o(a) {
      return ne(a) ? l(a) : t(a);
    }
    function l(a) {
      return a === 59 ? (e.consume(a), r) : ne(a) ? (e.consume(a), l) : t(a);
    }
  }
  function Pc(e, n, t) {
    return r;
    function r(o) {
      return e.consume(o), i;
    }
    function i(o) {
      return Z(o) ? t(o) : n(o);
    }
  }
  function ti(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || Q(e);
  }
  function ni(e) {
    return !ne(e);
  }
  function ri(e) {
    return !(e === 47 || qt(e));
  }
  function qt(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || Z(e);
  }
  function un(e) {
    let n = e.length, t = false;
    for (; n--; ) {
      const r = e[n][1];
      if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
        t = true;
        break;
      }
      if (r._gfmAutolinkLiteralWalkedInto) {
        t = false;
        break;
      }
    }
    return e.length > 0 && !t && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), t;
  }
  const _c = {
    tokenize: Hc,
    partial: true
  };
  function Dc() {
    return {
      document: {
        91: {
          name: "gfmFootnoteDefinition",
          tokenize: Oc,
          continuation: {
            tokenize: Bc
          },
          exit: $c
        }
      },
      text: {
        91: {
          name: "gfmFootnoteCall",
          tokenize: Mc
        },
        93: {
          name: "gfmPotentialFootnoteCall",
          add: "after",
          tokenize: Lc,
          resolveTo: Rc
        }
      }
    };
  }
  function Lc(e, n, t) {
    const r = this;
    let i = r.events.length;
    const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let l;
    for (; i--; ) {
      const s = r.events[i][1];
      if (s.type === "labelImage") {
        l = s;
        break;
      }
      if (s.type === "gfmFootnoteCall" || s.type === "labelLink" || s.type === "label" || s.type === "image" || s.type === "link") break;
    }
    return a;
    function a(s) {
      if (!l || !l._balanced) return t(s);
      const u = de(r.sliceSerialize({
        start: l.end,
        end: r.now()
      }));
      return u.codePointAt(0) !== 94 || !o.includes(u.slice(1)) ? t(s) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), n(s));
    }
  }
  function Rc(e, n) {
    let t = e.length;
    for (; t--; ) if (e[t][1].type === "labelImage" && e[t][0] === "enter") {
      e[t][1];
      break;
    }
    e[t + 1][1].type = "data", e[t + 3][1].type = "gfmFootnoteCallLabelMarker";
    const r = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[t + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end)
    }, i = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[t + 3][1].end),
      end: Object.assign({}, e[t + 3][1].end)
    };
    i.end.column++, i.end.offset++, i.end._bufferIndex++;
    const o = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start)
    }, l = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, o.start),
      end: Object.assign({}, o.end)
    }, a = [
      e[t + 1],
      e[t + 2],
      [
        "enter",
        r,
        n
      ],
      e[t + 3],
      e[t + 4],
      [
        "enter",
        i,
        n
      ],
      [
        "exit",
        i,
        n
      ],
      [
        "enter",
        o,
        n
      ],
      [
        "enter",
        l,
        n
      ],
      [
        "exit",
        l,
        n
      ],
      [
        "exit",
        o,
        n
      ],
      e[e.length - 2],
      e[e.length - 1],
      [
        "exit",
        r,
        n
      ]
    ];
    return e.splice(t, e.length - t + 1, ...a), e;
  }
  function Mc(e, n, t) {
    const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let o = 0, l;
    return a;
    function a(c) {
      return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), s;
    }
    function s(c) {
      return c !== 94 ? t(c) : (e.enter("gfmFootnoteCallMarker"), e.consume(c), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", u);
    }
    function u(c) {
      if (o > 999 || c === 93 && !l || c === null || c === 91 || Q(c)) return t(c);
      if (c === 93) {
        e.exit("chunkString");
        const p = e.exit("gfmFootnoteCallString");
        return i.includes(de(r.sliceSerialize(p))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(c), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), n) : t(c);
      }
      return Q(c) || (l = true), o++, e.consume(c), c === 92 ? h : u;
    }
    function h(c) {
      return c === 91 || c === 92 || c === 93 ? (e.consume(c), o++, u) : u(c);
    }
  }
  function Oc(e, n, t) {
    const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let o, l = 0, a;
    return s;
    function s(g) {
      return e.enter("gfmFootnoteDefinition")._container = true, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), u;
    }
    function u(g) {
      return g === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : t(g);
    }
    function h(g) {
      if (l > 999 || g === 93 && !a || g === null || g === 91 || Q(g)) return t(g);
      if (g === 93) {
        e.exit("chunkString");
        const w = e.exit("gfmFootnoteDefinitionLabelString");
        return o = de(r.sliceSerialize(w)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(g), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p;
      }
      return Q(g) || (a = true), l++, e.consume(g), g === 92 ? c : h;
    }
    function c(g) {
      return g === 91 || g === 92 || g === 93 ? (e.consume(g), l++, h) : h(g);
    }
    function p(g) {
      return g === 58 ? (e.enter("definitionMarker"), e.consume(g), e.exit("definitionMarker"), i.includes(o) || i.push(o), $(e, f, "gfmFootnoteDefinitionWhitespace")) : t(g);
    }
    function f(g) {
      return n(g);
    }
  }
  function Bc(e, n, t) {
    return e.check(Qe, n, e.attempt(_c, n, t));
  }
  function $c(e) {
    e.exit("gfmFootnoteDefinition");
  }
  function Hc(e, n, t) {
    const r = this;
    return $(e, i, "gfmFootnoteDefinitionIndent", 5);
    function i(o) {
      const l = r.events[r.events.length - 1];
      return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], true).length === 4 ? n(o) : t(o);
    }
  }
  function Vc(e) {
    let t = (e || {}).singleTilde;
    const r = {
      name: "strikethrough",
      tokenize: o,
      resolveAll: i
    };
    return t == null && (t = true), {
      text: {
        126: r
      },
      insideSpan: {
        null: [
          r
        ]
      },
      attentionMarkers: {
        null: [
          126
        ]
      }
    };
    function i(l, a) {
      let s = -1;
      for (; ++s < l.length; ) if (l[s][0] === "enter" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._close) {
        let u = s;
        for (; u--; ) if (l[u][0] === "exit" && l[u][1].type === "strikethroughSequenceTemporary" && l[u][1]._open && l[s][1].end.offset - l[s][1].start.offset === l[u][1].end.offset - l[u][1].start.offset) {
          l[s][1].type = "strikethroughSequence", l[u][1].type = "strikethroughSequence";
          const h = {
            type: "strikethrough",
            start: Object.assign({}, l[u][1].start),
            end: Object.assign({}, l[s][1].end)
          }, c = {
            type: "strikethroughText",
            start: Object.assign({}, l[u][1].end),
            end: Object.assign({}, l[s][1].start)
          }, p = [
            [
              "enter",
              h,
              a
            ],
            [
              "enter",
              l[u][1],
              a
            ],
            [
              "exit",
              l[u][1],
              a
            ],
            [
              "enter",
              c,
              a
            ]
          ], f = a.parser.constructs.insideSpan.null;
          f && ue(p, p.length, 0, pt(f, l.slice(u + 1, s), a)), ue(p, p.length, 0, [
            [
              "exit",
              c,
              a
            ],
            [
              "enter",
              l[s][1],
              a
            ],
            [
              "exit",
              l[s][1],
              a
            ],
            [
              "exit",
              h,
              a
            ]
          ]), ue(l, u - 1, s - u + 3, p), s = u + p.length - 2;
          break;
        }
      }
      for (s = -1; ++s < l.length; ) l[s][1].type === "strikethroughSequenceTemporary" && (l[s][1].type = "data");
      return l;
    }
    function o(l, a, s) {
      const u = this.previous, h = this.events;
      let c = 0;
      return p;
      function p(g) {
        return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? s(g) : (l.enter("strikethroughSequenceTemporary"), f(g));
      }
      function f(g) {
        const w = _e(u);
        if (g === 126) return c > 1 ? s(g) : (l.consume(g), c++, f);
        if (c < 2 && !t) return s(g);
        const v = l.exit("strikethroughSequenceTemporary"), y = _e(g);
        return v._open = !y || y === 2 && !!w, v._close = !w || w === 2 && !!y, a(g);
      }
    }
  }
  class qc {
    constructor() {
      this.map = [];
    }
    add(n, t, r) {
      Uc(this, n, t, r);
    }
    consume(n) {
      if (this.map.sort(function(o, l) {
        return o[0] - l[0];
      }), this.map.length === 0) return;
      let t = this.map.length;
      const r = [];
      for (; t > 0; ) t -= 1, r.push(n.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), n.length = this.map[t][0];
      r.push(n.slice()), n.length = 0;
      let i = r.pop();
      for (; i; ) {
        for (const o of i) n.push(o);
        i = r.pop();
      }
      this.map.length = 0;
    }
  }
  function Uc(e, n, t, r) {
    let i = 0;
    if (!(t === 0 && r.length === 0)) {
      for (; i < e.map.length; ) {
        if (e.map[i][0] === n) {
          e.map[i][1] += t, e.map[i][2].push(...r);
          return;
        }
        i += 1;
      }
      e.map.push([
        n,
        t,
        r
      ]);
    }
  }
  function Wc(e, n) {
    let t = false;
    const r = [];
    for (; n < e.length; ) {
      const i = e[n];
      if (t) {
        if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        else if (i[1].type === "tableContent") {
          if (e[n - 1][1].type === "tableDelimiterMarker") {
            const o = r.length - 1;
            r[o] = r[o] === "left" ? "center" : "right";
          }
        } else if (i[1].type === "tableDelimiterRow") break;
      } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = true);
      n += 1;
    }
    return r;
  }
  function Qc() {
    return {
      flow: {
        null: {
          name: "table",
          tokenize: Gc,
          resolveAll: Kc
        }
      }
    };
  }
  function Gc(e, n, t) {
    const r = this;
    let i = 0, o = 0, l;
    return a;
    function a(b) {
      let T = r.events.length - 1;
      for (; T > -1; ) {
        const W = r.events[T][1].type;
        if (W === "lineEnding" || W === "linePrefix") T--;
        else break;
      }
      const z = T > -1 ? r.events[T][1].type : null, V = z === "tableHead" || z === "tableRow" ? S : s;
      return V === S && r.parser.lazy[r.now().line] ? t(b) : V(b);
    }
    function s(b) {
      return e.enter("tableHead"), e.enter("tableRow"), u(b);
    }
    function u(b) {
      return b === 124 || (l = true, o += 1), h(b);
    }
    function h(b) {
      return b === null ? t(b) : N(b) ? o > 1 ? (o = 0, r.interrupt = true, e.exit("tableRow"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), f) : t(b) : R(b) ? $(e, h, "whitespace")(b) : (o += 1, l && (l = false, i += 1), b === 124 ? (e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), l = true, h) : (e.enter("data"), c(b)));
    }
    function c(b) {
      return b === null || b === 124 || Q(b) ? (e.exit("data"), h(b)) : (e.consume(b), b === 92 ? p : c);
    }
    function p(b) {
      return b === 92 || b === 124 ? (e.consume(b), c) : c(b);
    }
    function f(b) {
      return r.interrupt = false, r.parser.lazy[r.now().line] ? t(b) : (e.enter("tableDelimiterRow"), l = false, R(b) ? $(e, g, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : g(b));
    }
    function g(b) {
      return b === 45 || b === 58 ? v(b) : b === 124 ? (l = true, e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), w) : _(b);
    }
    function w(b) {
      return R(b) ? $(e, v, "whitespace")(b) : v(b);
    }
    function v(b) {
      return b === 58 ? (o += 1, l = true, e.enter("tableDelimiterMarker"), e.consume(b), e.exit("tableDelimiterMarker"), y) : b === 45 ? (o += 1, y(b)) : b === null || N(b) ? L(b) : _(b);
    }
    function y(b) {
      return b === 45 ? (e.enter("tableDelimiterFiller"), A(b)) : _(b);
    }
    function A(b) {
      return b === 45 ? (e.consume(b), A) : b === 58 ? (l = true, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(b), e.exit("tableDelimiterMarker"), I) : (e.exit("tableDelimiterFiller"), I(b));
    }
    function I(b) {
      return R(b) ? $(e, L, "whitespace")(b) : L(b);
    }
    function L(b) {
      return b === 124 ? g(b) : b === null || N(b) ? !l || i !== o ? _(b) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), n(b)) : _(b);
    }
    function _(b) {
      return t(b);
    }
    function S(b) {
      return e.enter("tableRow"), M(b);
    }
    function M(b) {
      return b === 124 ? (e.enter("tableCellDivider"), e.consume(b), e.exit("tableCellDivider"), M) : b === null || N(b) ? (e.exit("tableRow"), n(b)) : R(b) ? $(e, M, "whitespace")(b) : (e.enter("data"), q(b));
    }
    function q(b) {
      return b === null || b === 124 || Q(b) ? (e.exit("data"), M(b)) : (e.consume(b), b === 92 ? H : q);
    }
    function H(b) {
      return b === 92 || b === 124 ? (e.consume(b), q) : q(b);
    }
  }
  function Kc(e, n) {
    let t = -1, r = true, i = 0, o = [
      0,
      0,
      0,
      0
    ], l = [
      0,
      0,
      0,
      0
    ], a = false, s = 0, u, h, c;
    const p = new qc();
    for (; ++t < e.length; ) {
      const f = e[t], g = f[1];
      f[0] === "enter" ? g.type === "tableHead" ? (a = false, s !== 0 && (ir(p, n, s, u, h), h = void 0, s = 0), u = {
        type: "table",
        start: Object.assign({}, g.start),
        end: Object.assign({}, g.end)
      }, p.add(t, 0, [
        [
          "enter",
          u,
          n
        ]
      ])) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (r = true, c = void 0, o = [
        0,
        0,
        0,
        0
      ], l = [
        0,
        t + 1,
        0,
        0
      ], a && (a = false, h = {
        type: "tableBody",
        start: Object.assign({}, g.start),
        end: Object.assign({}, g.end)
      }, p.add(t, 0, [
        [
          "enter",
          h,
          n
        ]
      ])), i = g.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") ? (r = false, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = rt(p, n, o, i, void 0, c), o = [
        0,
        0,
        0,
        0
      ]), l[2] = t)) : g.type === "tableCellDivider" && (r ? r = false : (o[1] !== 0 && (l[0] = l[1], c = rt(p, n, o, i, void 0, c)), o = l, l = [
        o[1],
        t,
        0,
        0
      ])) : g.type === "tableHead" ? (a = true, s = t) : g.type === "tableRow" || g.type === "tableDelimiterRow" ? (s = t, o[1] !== 0 ? (l[0] = l[1], c = rt(p, n, o, i, t, c)) : l[1] !== 0 && (c = rt(p, n, l, i, t, c)), i = 0) : i && (g.type === "data" || g.type === "tableDelimiterMarker" || g.type === "tableDelimiterFiller") && (l[3] = t);
    }
    for (s !== 0 && ir(p, n, s, u, h), p.consume(n.events), t = -1; ++t < n.events.length; ) {
      const f = n.events[t];
      f[0] === "enter" && f[1].type === "table" && (f[1]._align = Wc(n.events, t));
    }
    return e;
  }
  function rt(e, n, t, r, i, o) {
    const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
    t[0] !== 0 && (o.end = Object.assign({}, Pe(n.events, t[0])), e.add(t[0], 0, [
      [
        "exit",
        o,
        n
      ]
    ]));
    const s = Pe(n.events, t[1]);
    if (o = {
      type: l,
      start: Object.assign({}, s),
      end: Object.assign({}, s)
    }, e.add(t[1], 0, [
      [
        "enter",
        o,
        n
      ]
    ]), t[2] !== 0) {
      const u = Pe(n.events, t[2]), h = Pe(n.events, t[3]), c = {
        type: a,
        start: Object.assign({}, u),
        end: Object.assign({}, h)
      };
      if (e.add(t[2], 0, [
        [
          "enter",
          c,
          n
        ]
      ]), r !== 2) {
        const p = n.events[t[2]], f = n.events[t[3]];
        if (p[1].end = Object.assign({}, f[1].end), p[1].type = "chunkText", p[1].contentType = "text", t[3] > t[2] + 1) {
          const g = t[2] + 1, w = t[3] - t[2] - 1;
          e.add(g, w, []);
        }
      }
      e.add(t[3] + 1, 0, [
        [
          "exit",
          c,
          n
        ]
      ]);
    }
    return i !== void 0 && (o.end = Object.assign({}, Pe(n.events, i)), e.add(i, 0, [
      [
        "exit",
        o,
        n
      ]
    ]), o = void 0), o;
  }
  function ir(e, n, t, r, i) {
    const o = [], l = Pe(n.events, t);
    i && (i.end = Object.assign({}, l), o.push([
      "exit",
      i,
      n
    ])), r.end = Object.assign({}, l), o.push([
      "exit",
      r,
      n
    ]), e.add(t + 1, 0, o);
  }
  function Pe(e, n) {
    const t = e[n], r = t[0] === "enter" ? "start" : "end";
    return t[1][r];
  }
  const Yc = {
    name: "tasklistCheck",
    tokenize: Xc
  };
  function Jc() {
    return {
      text: {
        91: Yc
      }
    };
  }
  function Xc(e, n, t) {
    const r = this;
    return i;
    function i(s) {
      return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? t(s) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), o);
    }
    function o(s) {
      return Q(s) ? (e.enter("taskListCheckValueUnchecked"), e.consume(s), e.exit("taskListCheckValueUnchecked"), l) : s === 88 || s === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(s), e.exit("taskListCheckValueChecked"), l) : t(s);
    }
    function l(s) {
      return s === 93 ? (e.enter("taskListCheckMarker"), e.consume(s), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : t(s);
    }
    function a(s) {
      return N(s) ? n(s) : R(s) ? e.check({
        tokenize: Zc
      }, n, t)(s) : t(s);
    }
  }
  function Zc(e, n, t) {
    return $(e, r, "whitespace");
    function r(i) {
      return i === null ? t(i) : n(i);
    }
  }
  function eh(e) {
    return pr([
      Ic(),
      Dc(),
      Vc(e),
      Qc(),
      Jc()
    ]);
  }
  const th = {};
  function nh(e) {
    const n = this, t = e || th, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    i.push(eh(t)), o.push(wc()), l.push(Sc(t));
  }
  const Te = {
    async createSession(e, n, t) {
      return ve.post("/api/rag-chat/sessions", {
        knowledgeBaseIds: e,
        title: n,
        llmProvider: t || void 0
      });
    },
    async listSessions() {
      return ve.get("/api/rag-chat/sessions");
    },
    async getSessionDetail(e) {
      return ve.get(`/api/rag-chat/sessions/${e}`);
    },
    async updateSessionTitle(e, n) {
      return ve.put(`/api/rag-chat/sessions/${e}/title`, {
        title: n
      });
    },
    async updateKnowledgeBases(e, n) {
      return ve.put(`/api/rag-chat/sessions/${e}/knowledge-bases`, {
        knowledgeBaseIds: n
      });
    },
    async togglePin(e) {
      return ve.put(`/api/rag-chat/sessions/${e}/pin`);
    },
    async deleteSession(e) {
      return ve.delete(`/api/rag-chat/sessions/${e}`);
    },
    async sendMessageStream(e, n, t, r, i, o) {
      return fi({
        url: `/api/rag-chat/sessions/${e}/messages/stream`,
        init: {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: n
          })
        },
        onMessage: t,
        onComplete: r,
        onError: i,
        parseMode: "event",
        trimDataPrefixSpace: false,
        unescapeEscapedNewlines: true,
        dataJoiner: "",
        signal: o
      });
    }
  }, rh = {
    'code[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none"
    },
    'pre[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em"
    },
    'code[class*="language-"]::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'pre[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"]::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'pre[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    ':not(pre) > code[class*="language-"]': {
      padding: "0.2em 0.3em",
      borderRadius: "0.3em",
      whiteSpace: "normal"
    },
    comment: {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    prolog: {
      color: "hsl(220, 10%, 40%)"
    },
    cdata: {
      color: "hsl(220, 10%, 40%)"
    },
    doctype: {
      color: "hsl(220, 14%, 71%)"
    },
    punctuation: {
      color: "hsl(220, 14%, 71%)"
    },
    entity: {
      color: "hsl(220, 14%, 71%)",
      cursor: "help"
    },
    "attr-name": {
      color: "hsl(29, 54%, 61%)"
    },
    "class-name": {
      color: "hsl(29, 54%, 61%)"
    },
    boolean: {
      color: "hsl(29, 54%, 61%)"
    },
    constant: {
      color: "hsl(29, 54%, 61%)"
    },
    number: {
      color: "hsl(29, 54%, 61%)"
    },
    atrule: {
      color: "hsl(29, 54%, 61%)"
    },
    keyword: {
      color: "hsl(286, 60%, 67%)"
    },
    property: {
      color: "hsl(355, 65%, 65%)"
    },
    tag: {
      color: "hsl(355, 65%, 65%)"
    },
    symbol: {
      color: "hsl(355, 65%, 65%)"
    },
    deleted: {
      color: "hsl(355, 65%, 65%)"
    },
    important: {
      color: "hsl(355, 65%, 65%)"
    },
    selector: {
      color: "hsl(95, 38%, 62%)"
    },
    string: {
      color: "hsl(95, 38%, 62%)"
    },
    char: {
      color: "hsl(95, 38%, 62%)"
    },
    builtin: {
      color: "hsl(95, 38%, 62%)"
    },
    inserted: {
      color: "hsl(95, 38%, 62%)"
    },
    regex: {
      color: "hsl(95, 38%, 62%)"
    },
    "attr-value": {
      color: "hsl(95, 38%, 62%)"
    },
    "attr-value > .token.punctuation": {
      color: "hsl(95, 38%, 62%)"
    },
    variable: {
      color: "hsl(207, 82%, 66%)"
    },
    operator: {
      color: "hsl(207, 82%, 66%)"
    },
    function: {
      color: "hsl(207, 82%, 66%)"
    },
    url: {
      color: "hsl(187, 47%, 55%)"
    },
    "attr-value > .token.punctuation.attr-equals": {
      color: "hsl(220, 14%, 71%)"
    },
    "special-attr > .token.attr-value > .token.value.css": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-css .token.selector": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-css .token.property": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-css .token.function": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.function": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.string.url": {
      color: "hsl(95, 38%, 62%)"
    },
    ".language-css .token.important": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-css .token.atrule .token.rule": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.operator": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
      color: "hsl(5, 48%, 51%)"
    },
    ".language-json .token.operator": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-json .token.null.keyword": {
      color: "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.url": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.operator": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url-reference.url > .token.string": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.content": {
      color: "hsl(207, 82%, 66%)"
    },
    ".language-markdown .token.url > .token.url": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.url-reference.url": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.blockquote.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    ".language-markdown .token.hr.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    ".language-markdown .token.code-snippet": {
      color: "hsl(95, 38%, 62%)"
    },
    ".language-markdown .token.bold .token.content": {
      color: "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.italic .token.content": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-markdown .token.strike .token.content": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.strike .token.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.list.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.title.important > .token.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    bold: {
      fontWeight: "bold"
    },
    italic: {
      fontStyle: "italic"
    },
    namespace: {
      Opacity: "0.8"
    },
    "token.tab:not(:empty):before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.cr:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.lf:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.space:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
      marginRight: "0.4em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    ".line-highlight.line-highlight": {
      background: "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-highlight.line-highlight:before": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
      backgroundColor: "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)"
    },
    ".command-line .command-line-prompt": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)"
    },
    ".line-numbers .line-numbers-rows > span:before": {
      color: "hsl(220, 14%, 45%)"
    },
    ".command-line .command-line-prompt > span:before": {
      color: "hsl(220, 14%, 45%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
      color: "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
      color: "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
      color: "hsl(286, 60%, 67%)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    ".prism-previewer.prism-previewer:before": {
      borderColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
      borderColor: "hsl(224, 13%, 17%)",
      borderRadius: "0.3em"
    },
    ".prism-previewer-color.prism-previewer-color:before": {
      borderRadius: "0.3em"
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
      borderRadius: "0.3em"
    },
    ".prism-previewer.prism-previewer:after": {
      borderTopColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
      borderBottomColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-time.prism-previewer-time:before": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-easing.prism-previewer-easing": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1"
    },
    ".prism-previewer-time.prism-previewer-time circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1"
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
      stroke: "hsl(220, 14%, 71%)",
      fill: "transparent"
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
      stroke: "hsl(220, 14%, 71%)"
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
      stroke: "hsl(220, 14%, 71%)"
    }
  }, ih = U.lazy(() => Si(() => import("./syntax-highlighter-BG_RSeav.js").then((e) => e.w), __vite__mapDeps([0,1])).then((e) => ({
    default: e.default
  })));
  function lh({ language: e, children: n }) {
    const [t, r] = U.useState(false), i = async () => {
      try {
        await navigator.clipboard.writeText(n), r(true), setTimeout(() => r(false), 2e3);
      } catch (l) {
        console.error("\u590D\u5236\u5931\u8D25:", l);
      }
    }, o = (n == null ? void 0 : n.trim()) || "";
    return x.jsxs("div", {
      className: "relative group my-3",
      children: [
        x.jsxs("div", {
          className: "flex items-center justify-between px-4 py-2 bg-slate-700 rounded-t-xl border-b border-slate-600",
          children: [
            x.jsx("span", {
              className: "text-xs text-slate-400 font-mono",
              children: e || "code"
            }),
            x.jsx("button", {
              onClick: i,
              className: "flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-600 rounded transition-colors",
              title: "\u590D\u5236\u4EE3\u7801",
              children: t ? x.jsxs(x.Fragment, {
                children: [
                  x.jsx(ii, {
                    className: "w-3.5 h-3.5 text-green-400"
                  }),
                  x.jsx("span", {
                    className: "text-green-400",
                    children: "\u5DF2\u590D\u5236"
                  })
                ]
              }) : x.jsxs(x.Fragment, {
                children: [
                  x.jsx(li, {
                    className: "w-3.5 h-3.5"
                  }),
                  x.jsx("span", {
                    children: "\u590D\u5236"
                  })
                ]
              })
            })
          ]
        }),
        x.jsx("div", {
          className: "bg-[#282c34] rounded-b-xl text-sm leading-6",
          children: x.jsx(U.Suspense, {
            fallback: x.jsx("div", {
              className: "p-4 text-slate-400 font-mono text-xs",
              children: "Loading code..."
            }),
            children: x.jsx(ih, {
              language: e || "text",
              style: rh,
              customStyle: {
                margin: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: "0.75rem",
                borderBottomRightRadius: "0.75rem",
                fontSize: "0.875rem",
                lineHeight: "1.5"
              },
              showLineNumbers: o.split(`
`).length > 3,
              wrapLines: true,
              children: o
            })
          })
        })
      ]
    });
  }
  dh = function({ onBack: e, onUpload: n }) {
    var _a2;
    const [t, r] = U.useState([]), [i, o] = U.useState(/* @__PURE__ */ new Set()), [l, a] = U.useState(true), [s, u] = U.useState(""), [h, c] = U.useState("time"), [p, f] = U.useState(/* @__PURE__ */ new Set([
      "\u672A\u5206\u7C7B"
    ])), [g, w] = U.useState(true), [v, y] = U.useState([]), [A, I] = U.useState(null), [L, _] = U.useState(""), [S, M] = U.useState(false), [q, H] = U.useState(null), [b, T] = U.useState(null), [z, V] = U.useState(""), [W, O] = U.useState(""), [K, G] = U.useState([]), [J, te] = U.useState(false), [m, le] = U.useState(""), fe = pi(), d = U.useRef(null), X = U.useRef(), ce = U.useRef(null), [, Y] = U.useTransition();
    U.useEffect(() => {
      be(), ge();
    }, []), U.useEffect(() => () => {
      var _a3;
      (_a3 = ce.current) == null ? void 0 : _a3.abort(), ce.current = null, X.current && cancelAnimationFrame(X.current);
    }, []), U.useEffect(() => {
      s || be();
    }, [
      h
    ]);
    const be = async () => {
      a(true);
      try {
        const C = await fn.getAllKnowledgeBases(h, "COMPLETED");
        r(C);
      } catch (C) {
        console.error("\u52A0\u8F7D\u77E5\u8BC6\u5E93\u5217\u8868\u5931\u8D25", C);
      } finally {
        a(false);
      }
    }, pe = async () => {
      if (!s.trim()) {
        be();
        return;
      }
      a(true);
      try {
        const C = await fn.search(s.trim());
        r(C);
      } catch (C) {
        console.error("\u641C\u7D22\u77E5\u8BC6\u5E93\u5931\u8D25", C);
      } finally {
        a(false);
      }
    }, Se = U.useMemo(() => {
      const C = /* @__PURE__ */ new Map();
      t.forEach((k) => {
        const E = k.category || "\u672A\u5206\u7C7B";
        C.has(E) || C.set(E, []), C.get(E).push(k);
      });
      const F = [];
      return Array.from(C.keys()).sort((k, E) => k === "\u672A\u5206\u7C7B" ? 1 : E === "\u672A\u5206\u7C7B" ? -1 : k.localeCompare(E)).forEach((k) => {
        F.push({
          name: k,
          items: C.get(k),
          isExpanded: p.has(k)
        });
      }), F;
    }, [
      t,
      p
    ]), Ce = (C) => {
      f((F) => {
        const B = new Set(F);
        return B.has(C) ? B.delete(C) : B.add(C), B;
      });
    }, ge = async () => {
      M(true);
      try {
        const C = await Te.listSessions();
        y(C);
      } catch (C) {
        console.error("\u52A0\u8F7D\u4F1A\u8BDD\u5217\u8868\u5931\u8D25", C);
      } finally {
        M(false);
      }
    }, Ke = (C) => {
      o((F) => {
        const B = new Set(F);
        return B.has(C) ? B.delete(C) : B.add(C), B.size !== F.size && A && (I(null), _(""), G([])), B;
      });
    }, Ye = () => {
      I(null), _(""), G([]);
    }, xt = async (C) => {
      try {
        const F = await Te.getSessionDetail(C);
        I(F.id), _(F.title), o(new Set(F.knowledgeBases.map((B) => B.id))), G(F.messages.map((B) => ({
          id: B.id,
          type: B.type,
          content: B.content,
          timestamp: new Date(B.createdAt)
        })));
      } catch (F) {
        console.error("\u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25", F);
      }
    }, Je = async () => {
      if (q) try {
        await Te.deleteSession(q.id), await ge(), A === q.id && Ye(), H(null);
      } catch (C) {
        console.error("\u5220\u9664\u4F1A\u8BDD\u5931\u8D25", C);
      }
    }, Xe = (C, F) => {
      T({
        id: C,
        title: F
      }), V(F);
    }, Le = async () => {
      if (!(!b || !z.trim())) try {
        await Te.updateSessionTitle(b.id, z.trim()), await ge(), A === b.id && _(z.trim()), T(null), V("");
      } catch (C) {
        console.error("\u66F4\u65B0\u4F1A\u8BDD\u6807\u9898\u5931\u8D25", C);
      }
    }, kt = async (C, F) => {
      F.stopPropagation();
      try {
        await Te.togglePin(C), await ge();
      } catch (B) {
        console.error("\u5207\u6362\u7F6E\u9876\u72B6\u6001\u5931\u8D25", B);
      }
    }, Ze = (C) => C ? C.replace(/\\n/g, `
`).replace(/^(#{1,6})([^\s#\n])/gm, "$1 $2").replace(/^(\s*)(\d+)\.([^\s\n])/gm, "$1$2. $3").replace(/^(\s*[-*])([^\s\n-])/gm, "$1 $2").replace(/\n{3,}/g, `

`) : "", Re = async () => {
      var _a3;
      if (!W.trim() || i.size === 0 || J) return;
      const C = W.trim();
      O(""), te(true), (_a3 = ce.current) == null ? void 0 : _a3.abort();
      const F = new AbortController();
      ce.current = F;
      let B = A;
      if (!B) try {
        const P = await Te.createSession(Array.from(i), void 0, m || void 0);
        B = P.id, I(B), _(P.title);
      } catch (P) {
        console.error("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25", P), te(false);
        return;
      }
      const k = {
        type: "user",
        content: C,
        timestamp: /* @__PURE__ */ new Date()
      };
      G((P) => [
        ...P,
        k
      ]);
      const E = {
        type: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date()
      };
      G((P) => [
        ...P,
        E
      ]);
      let j = "";
      const D = (P) => {
        G((oe) => {
          const ae = [
            ...oe
          ], re = ae.length - 1;
          return re >= 0 && ae[re].type === "assistant" && (ae[re] = {
            ...ae[re],
            content: P
          }), ae;
        });
      };
      try {
        await Te.sendMessageStream(B, C, (P) => {
          j += P, X.current && cancelAnimationFrame(X.current), X.current = requestAnimationFrame(() => {
            Y(() => {
              D(j);
            });
          });
        }, () => {
          te(false), ge();
        }, (P) => {
          console.error("\u6D41\u5F0F\u67E5\u8BE2\u5931\u8D25:", P), D(j || P.message || "\u56DE\u7B54\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), te(false);
        }, F.signal);
      } catch (P) {
        console.error("\u53D1\u8D77\u6D41\u5F0F\u67E5\u8BE2\u5931\u8D25:", P), D(P instanceof Error ? P.message : "\u56DE\u7B54\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), te(false);
      }
    }, bt = (C) => C < 1024 ? C + " B" : C < 1024 * 1024 ? (C / 1024).toFixed(1) + " KB" : (C / (1024 * 1024)).toFixed(1) + " MB", yt = (C) => {
      const F = new Date(C), k = (/* @__PURE__ */ new Date()).getTime() - F.getTime(), E = Math.floor(k / 6e4), j = Math.floor(k / 36e5), D = Math.floor(k / 864e5);
      return E < 1 ? "\u521A\u521A" : E < 60 ? `${E} \u5206\u949F\u524D` : j < 24 ? `${j} \u5C0F\u65F6\u524D` : D < 7 ? `${D} \u5929\u524D` : di(C);
    };
    return x.jsxs("div", {
      className: "max-w-7xl mx-auto pt-8 pb-10 px-4",
      children: [
        x.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            x.jsxs("div", {
              children: [
                x.jsx("h1", {
                  className: "text-2xl font-bold text-slate-900 dark:text-white mb-1",
                  children: "\u95EE\u7B54\u52A9\u624B"
                }),
                x.jsx("p", {
                  className: "text-slate-500 dark:text-slate-400 text-sm",
                  children: "\u9009\u62E9\u77E5\u8BC6\u5E93\uFF0C\u5411 AI \u63D0\u95EE"
                })
              ]
            }),
            x.jsxs("div", {
              className: "flex gap-3",
              children: [
                x.jsx(me.button, {
                  onClick: n,
                  className: "px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm",
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  children: "\u4E0A\u4F20\u77E5\u8BC6\u5E93"
                }),
                x.jsx(me.button, {
                  onClick: e,
                  className: "px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm",
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  children: "\u8FD4\u56DE"
                })
              ]
            })
          ]
        }),
        x.jsxs("div", {
          className: "flex gap-4 h-[calc(100vh-10rem)]",
          children: [
            x.jsx("div", {
              className: "w-64 flex-shrink-0",
              children: x.jsxs("div", {
                className: "bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm h-full flex flex-col border border-slate-100 dark:border-slate-700",
                children: [
                  x.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      x.jsx("h2", {
                        className: "text-base font-semibold text-slate-800 dark:text-white",
                        children: "\u5BF9\u8BDD\u5386\u53F2"
                      }),
                      x.jsx(me.button, {
                        onClick: Ye,
                        disabled: i.size === 0,
                        className: "p-1.5 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        whileHover: {
                          scale: 1.05
                        },
                        whileTap: {
                          scale: 0.95
                        },
                        title: "\u65B0\u5EFA\u5BF9\u8BDD",
                        children: x.jsx(oi, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  }),
                  x.jsx("div", {
                    className: "flex-1 overflow-y-auto",
                    children: S ? x.jsx("div", {
                      className: "text-center py-6",
                      children: x.jsx(me.div, {
                        className: "w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full mx-auto",
                        animate: {
                          rotate: 360
                        },
                        transition: {
                          duration: 1,
                          repeat: 1 / 0,
                          ease: "linear"
                        }
                      })
                    }) : v.length === 0 ? x.jsx("div", {
                      className: "text-center py-6 text-slate-400 dark:text-slate-500 text-sm",
                      children: "\u6682\u65E0\u5BF9\u8BDD\u5386\u53F2"
                    }) : x.jsx("div", {
                      className: "space-y-2",
                      children: v.map((C) => x.jsx("div", {
                        onClick: () => xt(C.id),
                        className: `p-3 rounded-lg cursor-pointer transition-all group ${A === C.id ? "bg-primary-50 dark:bg-primary-900/30 border border-primary-500" : "bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 border border-transparent"} ${C.isPinned ? "border-l-4 border-l-primary-500" : ""}`,
                        children: x.jsxs("div", {
                          className: "flex items-start justify-between gap-2",
                          children: [
                            x.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                x.jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    C.isPinned && x.jsx(cn, {
                                      className: "w-3.5 h-3.5 text-primary-500 fill-primary-500 flex-shrink-0"
                                    }),
                                    x.jsx("p", {
                                      className: "font-medium text-slate-800 dark:text-white text-sm truncate",
                                      children: C.title
                                    })
                                  ]
                                }),
                                x.jsxs("p", {
                                  className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                  children: [
                                    C.messageCount,
                                    " \u6761\u6D88\u606F \xB7 ",
                                    yt(C.updatedAt)
                                  ]
                                })
                              ]
                            }),
                            x.jsxs("div", {
                              className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all",
                              children: [
                                x.jsx("button", {
                                  onClick: (F) => kt(C.id, F),
                                  className: `p-1 rounded transition-colors ${C.isPinned ? "text-primary-500 hover:text-primary-600" : "text-slate-400 hover:text-primary-500"}`,
                                  title: C.isPinned ? "\u53D6\u6D88\u7F6E\u9876" : "\u7F6E\u9876",
                                  children: x.jsx(cn, {
                                    className: `w-4 h-4 ${C.isPinned ? "fill-primary-500" : ""}`
                                  })
                                }),
                                x.jsx("button", {
                                  onClick: (F) => {
                                    F.stopPropagation(), Xe(C.id, C.title);
                                  },
                                  className: "p-1 text-slate-400 hover:text-primary-500 rounded transition-colors",
                                  title: "\u7F16\u8F91\u6807\u9898",
                                  children: x.jsx(ai, {
                                    className: "w-4 h-4"
                                  })
                                }),
                                x.jsx("button", {
                                  onClick: (F) => {
                                    F.stopPropagation(), H({
                                      id: C.id,
                                      title: C.title
                                    });
                                  },
                                  className: "p-1 text-slate-400 hover:text-red-500 rounded transition-colors",
                                  title: "\u5220\u9664",
                                  children: x.jsx(si, {
                                    className: "w-4 h-4"
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      }, C.id))
                    })
                  })
                ]
              })
            }),
            x.jsx("div", {
              className: "flex-1 min-w-0",
              children: x.jsx("div", {
                className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex flex-col h-full border border-slate-100 dark:border-slate-700",
                children: i.size > 0 ? x.jsxs(x.Fragment, {
                  children: [
                    x.jsxs("div", {
                      className: "p-4 border-b border-slate-200 dark:border-slate-600",
                      children: [
                        x.jsx("h2", {
                          className: "text-base font-semibold text-slate-800 dark:text-white",
                          children: L || (i.size === 1 ? ((_a2 = t.find((C) => C.id === Array.from(i)[0])) == null ? void 0 : _a2.name) || "\u65B0\u5BF9\u8BDD" : `${i.size} \u4E2A\u77E5\u8BC6\u5E93 - \u65B0\u5BF9\u8BDD`)
                        }),
                        x.jsx("div", {
                          className: "flex flex-wrap gap-1.5 mt-2",
                          children: Array.from(i).map((C) => {
                            const F = t.find((B) => B.id === C);
                            return F ? x.jsx("span", {
                              className: "px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full",
                              children: F.name
                            }, C) : null;
                          })
                        })
                      ]
                    }),
                    x.jsx("div", {
                      className: "flex-1 min-h-0 relative dark:bg-slate-800",
                      children: K.length === 0 ? x.jsxs("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500",
                        children: [
                          x.jsx(ui, {
                            className: "w-12 h-12 mx-auto mb-3 opacity-50"
                          }),
                          x.jsx("p", {
                            className: "text-sm",
                            children: "\u5F00\u59CB\u63D0\u95EE\u5427\uFF01"
                          })
                        ]
                      }) : x.jsx(hi, {
                        ref: d,
                        data: K,
                        initialTopMostItemIndex: K.length - 1,
                        followOutput: "smooth",
                        className: "h-full w-full",
                        itemContent: (C, F) => x.jsx("div", {
                          className: "pb-4 px-4 first:pt-4 dark:bg-slate-800",
                          children: x.jsx(me.div, {
                            initial: {
                              opacity: 0,
                              y: 10
                            },
                            animate: {
                              opacity: 1,
                              y: 0
                            },
                            className: `flex ${F.type === "user" ? "justify-end" : "justify-start"}`,
                            children: x.jsx("div", {
                              className: `max-w-[85%] rounded-2xl p-4 shadow-sm ${F.type === "user" ? "bg-primary-600 text-white" : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-600 text-slate-800 dark:text-slate-100"}`,
                              children: F.type === "user" ? x.jsx("p", {
                                className: "whitespace-pre-wrap leading-relaxed text-sm",
                                children: F.content
                              }) : x.jsxs("div", {
                                className: "prose prose-slate dark:prose-invert prose-sm max-w-none",
                                children: [
                                  x.jsx(Vs, {
                                    remarkPlugins: [
                                      nh
                                    ],
                                    components: {
                                      code: ({ className: B, children: k }) => {
                                        const E = /language-(\w+)/.exec(B || "");
                                        return E ? x.jsx(lh, {
                                          language: E[1],
                                          children: String(k).replace(/\n$/, "")
                                        }) : x.jsx("code", {
                                          className: "bg-slate-100 dark:bg-slate-600 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded-md text-sm font-normal",
                                          children: k
                                        });
                                      },
                                      pre: ({ children: B }) => x.jsx(x.Fragment, {
                                        children: B
                                      })
                                    },
                                    children: Ze(F.content)
                                  }),
                                  J && C === K.length - 1 && x.jsx("span", {
                                    className: "inline-block w-0.5 h-5 bg-primary-500 ml-1 animate-pulse"
                                  })
                                ]
                              })
                            })
                          })
                        })
                      })
                    }),
                    x.jsxs("div", {
                      className: "p-4 border-t border-slate-200 dark:border-slate-600",
                      children: [
                        !A && x.jsxs("div", {
                          className: "mb-2 flex items-center gap-2",
                          children: [
                            x.jsx("span", {
                              className: "shrink-0 text-xs text-slate-400 dark:text-slate-500",
                              children: "\u95EE\u7B54\u6A21\u578B"
                            }),
                            x.jsx("div", {
                              className: "max-w-xs flex-1",
                              children: x.jsx(mi, {
                                providers: fe,
                                value: m,
                                onChange: le
                              })
                            }),
                            x.jsx("span", {
                              className: "text-xs text-slate-400 dark:text-slate-500",
                              children: "\u65B0\u4F1A\u8BDD\u5F00\u59CB\u540E\u56FA\u5B9A"
                            })
                          ]
                        }),
                        x.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            x.jsx("input", {
                              type: "text",
                              value: W,
                              onChange: (C) => O(C.target.value),
                              onKeyPress: (C) => C.key === "Enter" && !C.shiftKey && Re(),
                              placeholder: "\u8F93\u5165\u60A8\u7684\u95EE\u9898...",
                              className: "flex-1 px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400",
                              disabled: J
                            }),
                            x.jsx(me.button, {
                              onClick: Re,
                              disabled: !W.trim() || i.size === 0 || J,
                              className: "px-5 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                              whileHover: {
                                scale: J ? 1 : 1.02
                              },
                              whileTap: {
                                scale: J ? 1 : 0.98
                              },
                              children: "\u53D1\u9001"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }) : x.jsx("div", {
                  className: "flex-1 flex items-center justify-center text-slate-400 dark:text-slate-500",
                  children: x.jsxs("div", {
                    className: "text-center",
                    children: [
                      x.jsx("svg", {
                        className: "w-12 h-12 mx-auto mb-3 opacity-50",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: x.jsx("path", {
                          d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })
                      }),
                      x.jsx("p", {
                        className: "text-sm",
                        children: "\u8BF7\u5148\u5728\u53F3\u4FA7\u9009\u62E9\u77E5\u8BC6\u5E93"
                      })
                    ]
                  })
                })
              })
            }),
            x.jsx(wt, {
              children: g && x.jsx(me.div, {
                initial: {
                  width: 0,
                  opacity: 0
                },
                animate: {
                  width: 280,
                  opacity: 1
                },
                exit: {
                  width: 0,
                  opacity: 0
                },
                transition: {
                  duration: 0.2
                },
                className: "flex-shrink-0 overflow-hidden",
                children: x.jsxs("div", {
                  className: "bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm h-full flex flex-col w-[280px] border border-slate-100 dark:border-slate-700",
                  children: [
                    x.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        x.jsx("h2", {
                          className: "text-base font-semibold text-slate-800 dark:text-white",
                          children: "\u9009\u62E9\u77E5\u8BC6\u5E93"
                        }),
                        x.jsx("button", {
                          onClick: () => w(false),
                          className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded",
                          children: x.jsx(ci, {
                            className: "w-5 h-5"
                          })
                        })
                      ]
                    }),
                    x.jsxs("div", {
                      className: "flex gap-2 mb-3",
                      children: [
                        x.jsx("input", {
                          type: "text",
                          value: s,
                          onChange: (C) => u(C.target.value),
                          onKeyPress: (C) => C.key === "Enter" && pe(),
                          placeholder: "\u641C\u7D22...",
                          className: "flex-1 px-3 py-1.5 text-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400"
                        }),
                        x.jsx("button", {
                          onClick: pe,
                          className: "px-3 py-1.5 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600",
                          children: "\u641C\u7D22"
                        })
                      ]
                    }),
                    x.jsx("div", {
                      className: "mb-3",
                      children: x.jsxs("select", {
                        value: h,
                        onChange: (C) => {
                          c(C.target.value), u("");
                        },
                        className: "w-full px-2 py-1 text-xs border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300",
                        children: [
                          x.jsx("option", {
                            value: "time",
                            children: "\u65F6\u95F4\u6392\u5E8F"
                          }),
                          x.jsx("option", {
                            value: "size",
                            children: "\u5927\u5C0F\u6392\u5E8F"
                          }),
                          x.jsx("option", {
                            value: "access",
                            children: "\u8BBF\u95EE\u6392\u5E8F"
                          }),
                          x.jsx("option", {
                            value: "question",
                            children: "\u63D0\u95EE\u6392\u5E8F"
                          })
                        ]
                      })
                    }),
                    x.jsx("div", {
                      className: "flex-1 overflow-y-auto",
                      children: l ? x.jsx("div", {
                        className: "text-center py-6",
                        children: x.jsx(me.div, {
                          className: "w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full mx-auto",
                          animate: {
                            rotate: 360
                          },
                          transition: {
                            duration: 1,
                            repeat: 1 / 0,
                            ease: "linear"
                          }
                        })
                      }) : t.length === 0 ? x.jsxs("div", {
                        className: "text-center py-6 text-slate-500 dark:text-slate-400",
                        children: [
                          x.jsx("p", {
                            className: "mb-2 text-sm",
                            children: s ? "\u672A\u627E\u5230" : "\u6682\u65E0\u77E5\u8BC6\u5E93"
                          }),
                          !s && x.jsx("button", {
                            onClick: n,
                            className: "text-primary-500 hover:text-primary-600 font-medium text-sm",
                            children: "\u7ACB\u5373\u4E0A\u4F20"
                          })
                        ]
                      }) : x.jsx("div", {
                        className: "space-y-2",
                        children: Se.map((C) => x.jsxs("div", {
                          className: "border border-slate-100 dark:border-slate-700 rounded-lg overflow-hidden",
                          children: [
                            x.jsxs("button", {
                              onClick: () => Ce(C.name),
                              className: "w-full flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
                              children: [
                                x.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    x.jsx(hn, {
                                      className: `w-3.5 h-3.5 text-slate-400 transition-transform ${C.isExpanded ? "rotate-90" : ""}`
                                    }),
                                    x.jsx("span", {
                                      className: "font-medium text-slate-700 dark:text-slate-300 text-sm",
                                      children: C.name
                                    })
                                  ]
                                }),
                                x.jsx("span", {
                                  className: "text-xs text-slate-400",
                                  children: C.items.length
                                })
                              ]
                            }),
                            x.jsx(wt, {
                              children: C.isExpanded && x.jsx(me.div, {
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
                                transition: {
                                  duration: 0.2
                                },
                                className: "overflow-hidden",
                                children: x.jsx("div", {
                                  className: "p-2 space-y-1",
                                  children: C.items.map((F) => x.jsxs("div", {
                                    onClick: () => Ke(F.id),
                                    className: `p-2 rounded-lg cursor-pointer transition-all ${i.has(F.id) ? "bg-primary-50 dark:bg-primary-900/30 border border-primary-500" : "bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent"}`,
                                    children: [
                                      x.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          x.jsx("input", {
                                            type: "checkbox",
                                            checked: i.has(F.id),
                                            onChange: () => Ke(F.id),
                                            onClick: (B) => B.stopPropagation(),
                                            className: "w-3.5 h-3.5 text-primary-500 rounded focus:ring-primary-500"
                                          }),
                                          x.jsx("span", {
                                            className: "font-medium text-slate-800 dark:text-white text-xs truncate flex-1",
                                            children: F.name
                                          })
                                        ]
                                      }),
                                      x.jsx("p", {
                                        className: "text-xs text-slate-400 dark:text-slate-500 mt-0.5 ml-5",
                                        children: bt(F.fileSize)
                                      })
                                    ]
                                  }, F.id))
                                })
                              })
                            })
                          ]
                        }, C.name))
                      })
                    })
                  ]
                })
              })
            }),
            !g && x.jsx("button", {
              onClick: () => w(true),
              className: "flex-shrink-0 w-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
              title: "\u5C55\u5F00\u77E5\u8BC6\u5E93\u9762\u677F",
              children: x.jsx(hn, {
                className: "w-5 h-5 text-slate-400"
              })
            })
          ]
        }),
        x.jsx(gi, {
          open: !!q,
          item: q ? {
            id: 0,
            title: q.title
          } : null,
          itemType: "\u5BF9\u8BDD",
          onConfirm: Je,
          onCancel: () => H(null)
        }),
        x.jsx(wt, {
          children: b && x.jsxs(x.Fragment, {
            children: [
              x.jsx(me.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                onClick: () => {
                  T(null), V("");
                },
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              }),
              x.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: x.jsxs(me.div, {
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
                  onClick: (C) => C.stopPropagation(),
                  className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-100 dark:border-slate-700",
                  children: [
                    x.jsx("h3", {
                      className: "text-xl font-bold text-slate-900 dark:text-white mb-4",
                      children: "\u7F16\u8F91\u6807\u9898"
                    }),
                    x.jsx("input", {
                      type: "text",
                      value: z,
                      onChange: (C) => V(C.target.value),
                      onKeyPress: (C) => C.key === "Enter" && Le(),
                      placeholder: "\u8BF7\u8F93\u5165\u65B0\u6807\u9898",
                      className: "w-full px-4 py-3 text-sm border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400",
                      autoFocus: true
                    }),
                    x.jsxs("div", {
                      className: "flex justify-end gap-3",
                      children: [
                        x.jsx("button", {
                          onClick: () => {
                            T(null), V("");
                          },
                          className: "px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white",
                          children: "\u53D6\u6D88"
                        }),
                        x.jsx("button", {
                          onClick: Le,
                          disabled: !z.trim(),
                          className: "px-4 py-2 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50",
                          children: "\u4FDD\u5B58"
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    });
  };
});
export {
  __tla,
  dh as default
};
