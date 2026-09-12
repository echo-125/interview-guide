import { j as nt } from "./ui-vendor-CqaAdWtE.js";
import { c as Ue, g as Hn } from "./react-vendor-BA2qNj4G.js";
import { s as At, h as Xr, f as Jr, a as Kr, b as Zr, c as ei, d as Tt } from "./syntax-highlighter-CeD-urYA.js";
const ti = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ni = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ri = {};
function Yt(e2, n) {
  return (ri.jsx ? ni : ti).test(e2);
}
const ii = /[ \t\n\f\r]/g;
function li(e2) {
  return typeof e2 == "object" ? e2.type === "text" ? Xt(e2.value) : false : Xt(e2);
}
function Xt(e2) {
  return e2.replace(ii, "") === "";
}
var zt = {}, Jt = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, oi = /\n/g, ui = /^\s*/, ai = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, si = /^:\s*/, ci = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, fi = /^[;\s]*/, hi = /^\s+|\s+$/g, pi = `
`, Kt = "/", Zt = "*", xe = "", mi = "comment", gi = "declaration";
function di(e2, n) {
  if (typeof e2 != "string") throw new TypeError("First argument must be a string");
  if (!e2) return [];
  n = n || {};
  var t = 1, r = 1;
  function i(d) {
    var y = d.match(oi);
    y && (t += y.length);
    var S = d.lastIndexOf(pi);
    r = ~S ? d.length - S : r + d.length;
  }
  function o() {
    var d = { line: t, column: r };
    return function(y) {
      return y.position = new l(d), s(), y;
    };
  }
  function l(d) {
    this.start = d, this.end = { line: t, column: r }, this.source = n.source;
  }
  l.prototype.content = e2;
  function u(d) {
    var y = new Error(n.source + ":" + t + ":" + r + ": " + d);
    if (y.reason = d, y.filename = n.source, y.line = t, y.column = r, y.source = e2, !n.silent) throw y;
  }
  function a(d) {
    var y = d.exec(e2);
    if (y) {
      var S = y[0];
      return i(S), e2 = e2.slice(S.length), y;
    }
  }
  function s() {
    a(ui);
  }
  function f(d) {
    var y;
    for (d = d || []; y = c(); ) y !== false && d.push(y);
    return d;
  }
  function c() {
    var d = o();
    if (!(Kt != e2.charAt(0) || Zt != e2.charAt(1))) {
      for (var y = 2; xe != e2.charAt(y) && (Zt != e2.charAt(y) || Kt != e2.charAt(y + 1)); ) ++y;
      if (y += 2, xe === e2.charAt(y - 1)) return u("End of comment missing");
      var S = e2.slice(2, y - 2);
      return r += 2, i(S), e2 = e2.slice(y), r += 2, d({ type: mi, comment: S });
    }
  }
  function p() {
    var d = o(), y = a(ai);
    if (y) {
      if (c(), !a(si)) return u("property missing ':'");
      var S = a(ci), x = d({ type: gi, property: en(y[0].replace(Jt, xe)), value: S ? en(S[0].replace(Jt, xe)) : xe });
      return a(fi), x;
    }
  }
  function h() {
    var d = [];
    f(d);
    for (var y; y = p(); ) y !== false && (d.push(y), f(d));
    return d;
  }
  return s(), h();
}
function en(e2) {
  return e2 ? e2.replace(hi, xe) : xe;
}
var xi = di, ki = Ue && Ue.__importDefault || function(e2) {
  return e2 && e2.__esModule ? e2 : { default: e2 };
};
Object.defineProperty(zt, "__esModule", { value: true });
zt.default = bi;
const yi = ki(xi);
function bi(e2, n) {
  let t = null;
  if (!e2 || typeof e2 != "string") return t;
  const r = (0, yi.default)(e2), i = typeof n == "function";
  return r.forEach((o) => {
    if (o.type !== "declaration") return;
    const { property: l, value: u } = o;
    i ? n(l, u, o) : u && (t = t || {}, t[l] = u);
  }), t;
}
var Xe = {};
Object.defineProperty(Xe, "__esModule", { value: true });
Xe.camelCase = void 0;
var wi = /^--[a-zA-Z0-9_-]+$/, Si = /-([a-z])/g, Ci = /^[^-]+$/, Ei = /^-(webkit|moz|ms|o|khtml)-/, Ii = /^-(ms)-/, Ai = function(e2) {
  return !e2 || Ci.test(e2) || wi.test(e2);
}, Ti = function(e2, n) {
  return n.toUpperCase();
}, tn = function(e2, n) {
  return "".concat(n, "-");
}, zi = function(e2, n) {
  return n === void 0 && (n = {}), Ai(e2) ? e2 : (e2 = e2.toLowerCase(), n.reactCompat ? e2 = e2.replace(Ii, tn) : e2 = e2.replace(Ei, tn), e2.replace(Si, Ti));
};
Xe.camelCase = zi;
var Fi = Ue && Ue.__importDefault || function(e2) {
  return e2 && e2.__esModule ? e2 : { default: e2 };
}, _i = Fi(zt), Pi = Xe;
function xt(e2, n) {
  var t = {};
  return !e2 || typeof e2 != "string" || (0, _i.default)(e2, function(r, i) {
    r && i && (t[(0, Pi.camelCase)(r, n)] = i);
  }), t;
}
xt.default = xt;
var Di = xt;
const Li = Hn(Di), Vn = qn("end"), Ft = qn("start");
function qn(e2) {
  return n;
  function n(t) {
    const r = t && t.position && t.position[e2] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return { line: r.line, column: r.column, offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0 };
  }
}
function Ri(e2) {
  const n = Ft(e2), t = Vn(e2);
  if (n && t) return { start: n, end: t };
}
function Pe(e2) {
  return !e2 || typeof e2 != "object" ? "" : "position" in e2 || "type" in e2 ? nn(e2.position) : "start" in e2 || "end" in e2 ? nn(e2) : "line" in e2 || "column" in e2 ? kt(e2) : "";
}
function kt(e2) {
  return rn(e2 && e2.line) + ":" + rn(e2 && e2.column);
}
function nn(e2) {
  return kt(e2 && e2.start) + "-" + kt(e2 && e2.end);
}
function rn(e2) {
  return e2 && typeof e2 == "number" ? e2 : 1;
}
class Q extends Error {
  constructor(n, t, r) {
    super(), typeof t == "string" && (r = t, t = void 0);
    let i = "", o = {}, l = false;
    if (t && ("line" in t && "column" in t ? o = { place: t } : "start" in t && "end" in t ? o = { place: t } : "type" in t ? o = { ancestors: [t], place: t.position } : o = { ...t }), typeof n == "string" ? i = n : !o.cause && n && (l = true, i = n.message, o.cause = n), !o.ruleId && !o.source && typeof r == "string") {
      const a = r.indexOf(":");
      a === -1 ? o.ruleId = r : (o.source = r.slice(0, a), o.ruleId = r.slice(a + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const a = o.ancestors[o.ancestors.length - 1];
      a && (o.place = a.position);
    }
    const u = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = u ? u.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = u ? u.line : void 0, this.name = Pe(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = l && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Q.prototype.file = "";
Q.prototype.name = "";
Q.prototype.reason = "";
Q.prototype.message = "";
Q.prototype.stack = "";
Q.prototype.column = void 0;
Q.prototype.line = void 0;
Q.prototype.ancestors = void 0;
Q.prototype.cause = void 0;
Q.prototype.fatal = void 0;
Q.prototype.place = void 0;
Q.prototype.ruleId = void 0;
Q.prototype.source = void 0;
const _t = {}.hasOwnProperty, Ni = /* @__PURE__ */ new Map(), Oi = /[A-Z]/g, vi = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Mi = /* @__PURE__ */ new Set(["td", "th"]), Un = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Bi(e2, n) {
  if (!n || n.Fragment === void 0) throw new TypeError("Expected `Fragment` in options");
  const t = n.filePath || void 0;
  let r;
  if (n.development) {
    if (typeof n.jsxDEV != "function") throw new TypeError("Expected `jsxDEV` in options when `development: true`");
    r = Qi(t, n.jsxDEV);
  } else {
    if (typeof n.jsx != "function") throw new TypeError("Expected `jsx` in production options");
    if (typeof n.jsxs != "function") throw new TypeError("Expected `jsxs` in production options");
    r = Wi(t, n.jsx, n.jsxs);
  }
  const i = { Fragment: n.Fragment, ancestors: [], components: n.components || {}, create: r, elementAttributeNameCase: n.elementAttributeNameCase || "react", evaluater: n.createEvaluater ? n.createEvaluater() : void 0, filePath: t, ignoreInvalidStyle: n.ignoreInvalidStyle || false, passKeys: n.passKeys !== false, passNode: n.passNode || false, schema: n.space === "svg" ? At : Xr, stylePropertyNameCase: n.stylePropertyNameCase || "dom", tableCellAlignToStyle: n.tableCellAlignToStyle !== false }, o = Wn(i, e2, void 0);
  return o && typeof o != "string" ? o : i.create(e2, i.Fragment, { children: o || void 0 }, void 0);
}
function Wn(e2, n, t) {
  if (n.type === "element") return ji(e2, n, t);
  if (n.type === "mdxFlowExpression" || n.type === "mdxTextExpression") return $i(e2, n);
  if (n.type === "mdxJsxFlowElement" || n.type === "mdxJsxTextElement") return Vi(e2, n, t);
  if (n.type === "mdxjsEsm") return Hi(e2, n);
  if (n.type === "root") return qi(e2, n, t);
  if (n.type === "text") return Ui(e2, n);
}
function ji(e2, n, t) {
  const r = e2.schema;
  let i = r;
  n.tagName.toLowerCase() === "svg" && r.space === "html" && (i = At, e2.schema = i), e2.ancestors.push(n);
  const o = Gn(e2, n.tagName, false), l = Gi(e2, n);
  let u = Dt(e2, n);
  return vi.has(n.tagName) && (u = u.filter(function(a) {
    return typeof a == "string" ? !li(a) : true;
  })), Qn(e2, l, o, n), Pt(l, u), e2.ancestors.pop(), e2.schema = r, e2.create(n, o, l, t);
}
function $i(e2, n) {
  if (n.data && n.data.estree && e2.evaluater) {
    const r = n.data.estree.body[0];
    return r.type, e2.evaluater.evaluateExpression(r.expression);
  }
  Re(e2, n.position);
}
function Hi(e2, n) {
  if (n.data && n.data.estree && e2.evaluater) return e2.evaluater.evaluateProgram(n.data.estree);
  Re(e2, n.position);
}
function Vi(e2, n, t) {
  const r = e2.schema;
  let i = r;
  n.name === "svg" && r.space === "html" && (i = At, e2.schema = i), e2.ancestors.push(n);
  const o = n.name === null ? e2.Fragment : Gn(e2, n.name, true), l = Yi(e2, n), u = Dt(e2, n);
  return Qn(e2, l, o, n), Pt(l, u), e2.ancestors.pop(), e2.schema = r, e2.create(n, o, l, t);
}
function qi(e2, n, t) {
  const r = {};
  return Pt(r, Dt(e2, n)), e2.create(n, e2.Fragment, r, t);
}
function Ui(e2, n) {
  return n.value;
}
function Qn(e2, n, t, r) {
  typeof t != "string" && t !== e2.Fragment && e2.passNode && (n.node = r);
}
function Pt(e2, n) {
  if (n.length > 0) {
    const t = n.length > 1 ? n : n[0];
    t && (e2.children = t);
  }
}
function Wi(e2, n, t) {
  return r;
  function r(i, o, l, u) {
    const s = Array.isArray(l.children) ? t : n;
    return u ? s(o, l, u) : s(o, l);
  }
}
function Qi(e2, n) {
  return t;
  function t(r, i, o, l) {
    const u = Array.isArray(o.children), a = Ft(r);
    return n(i, o, l, u, { columnNumber: a ? a.column - 1 : void 0, fileName: e2, lineNumber: a ? a.line : void 0 }, void 0);
  }
}
function Gi(e2, n) {
  const t = {};
  let r, i;
  for (i in n.properties) if (i !== "children" && _t.call(n.properties, i)) {
    const o = Xi(e2, i, n.properties[i]);
    if (o) {
      const [l, u] = o;
      e2.tableCellAlignToStyle && l === "align" && typeof u == "string" && Mi.has(n.tagName) ? r = u : t[l] = u;
    }
  }
  if (r) {
    const o = t.style || (t.style = {});
    o[e2.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return t;
}
function Yi(e2, n) {
  const t = {};
  for (const r of n.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e2.evaluater) {
    const o = r.data.estree.body[0];
    o.type;
    const l = o.expression;
    l.type;
    const u = l.properties[0];
    u.type, Object.assign(t, e2.evaluater.evaluateExpression(u.argument));
  } else Re(e2, n.position);
  else {
    const i = r.name;
    let o;
    if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e2.evaluater) {
      const u = r.value.data.estree.body[0];
      u.type, o = e2.evaluater.evaluateExpression(u.expression);
    } else Re(e2, n.position);
    else o = r.value === null ? true : r.value;
    t[i] = o;
  }
  return t;
}
function Dt(e2, n) {
  const t = [];
  let r = -1;
  const i = e2.passKeys ? /* @__PURE__ */ new Map() : Ni;
  for (; ++r < n.children.length; ) {
    const o = n.children[r];
    let l;
    if (e2.passKeys) {
      const a = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (a) {
        const s = i.get(a) || 0;
        l = a + "-" + s, i.set(a, s + 1);
      }
    }
    const u = Wn(e2, o, l);
    u !== void 0 && t.push(u);
  }
  return t;
}
function Xi(e2, n, t) {
  const r = Jr(e2.schema, n);
  if (!(t == null || typeof t == "number" && Number.isNaN(t))) {
    if (Array.isArray(t) && (t = r.commaSeparated ? Kr(t) : Zr(t)), r.property === "style") {
      let i = typeof t == "object" ? t : Ji(e2, String(t));
      return e2.stylePropertyNameCase === "css" && (i = Ki(i)), ["style", i];
    }
    return [e2.elementAttributeNameCase === "react" && r.space ? ei[r.property] || r.property : r.attribute, t];
  }
}
function Ji(e2, n) {
  try {
    return Li(n, { reactCompat: true });
  } catch (t) {
    if (e2.ignoreInvalidStyle) return {};
    const r = t, i = new Q("Cannot parse `style` attribute", { ancestors: e2.ancestors, cause: r, ruleId: "style", source: "hast-util-to-jsx-runtime" });
    throw i.file = e2.filePath || void 0, i.url = Un + "#cannot-parse-style-attribute", i;
  }
}
function Gn(e2, n, t) {
  let r;
  if (!t) r = { type: "Literal", value: n };
  else if (n.includes(".")) {
    const i = n.split(".");
    let o = -1, l;
    for (; ++o < i.length; ) {
      const u = Yt(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      l = l ? { type: "MemberExpression", object: l, property: u, computed: !!(o && u.type === "Literal"), optional: false } : u;
    }
    r = l;
  } else r = Yt(n) && !/^[a-z]/.test(n) ? { type: "Identifier", name: n } : { type: "Literal", value: n };
  if (r.type === "Literal") {
    const i = r.value;
    return _t.call(e2.components, i) ? e2.components[i] : i;
  }
  if (e2.evaluater) return e2.evaluater.evaluateExpression(r);
  Re(e2);
}
function Re(e2, n) {
  const t = new Q("Cannot handle MDX estrees without `createEvaluater`", { ancestors: e2.ancestors, place: n, ruleId: "mdx-estree", source: "hast-util-to-jsx-runtime" });
  throw t.file = e2.filePath || void 0, t.url = Un + "#cannot-handle-mdx-estrees-without-createevaluater", t;
}
function Ki(e2) {
  const n = {};
  let t;
  for (t in e2) _t.call(e2, t) && (n[Zi(t)] = e2[t]);
  return n;
}
function Zi(e2) {
  let n = e2.replace(Oi, el);
  return n.slice(0, 3) === "ms-" && (n = "-" + n), n;
}
function el(e2) {
  return "-" + e2.toLowerCase();
}
const rt = { action: ["form"], cite: ["blockquote", "del", "ins", "q"], data: ["object"], formAction: ["button", "input"], href: ["a", "area", "base", "link"], icon: ["menuitem"], itemId: null, manifest: ["html"], ping: ["a", "area"], poster: ["video"], src: ["audio", "embed", "iframe", "img", "input", "script", "source", "track", "video"] }, tl = {};
function Lt(e2, n) {
  const t = tl, r = typeof t.includeImageAlt == "boolean" ? t.includeImageAlt : true, i = typeof t.includeHtml == "boolean" ? t.includeHtml : true;
  return Yn(e2, r, i);
}
function Yn(e2, n, t) {
  if (nl(e2)) {
    if ("value" in e2) return e2.type === "html" && !t ? "" : e2.value;
    if (n && "alt" in e2 && e2.alt) return e2.alt;
    if ("children" in e2) return ln(e2.children, n, t);
  }
  return Array.isArray(e2) ? ln(e2, n, t) : "";
}
function ln(e2, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e2.length; ) r[i] = Yn(e2[i], n, t);
  return r.join("");
}
function nl(e2) {
  return !!(e2 && typeof e2 == "object");
}
function J(e2, n, t, r) {
  const i = e2.length;
  let o = 0, l;
  if (n < 0 ? n = -n > i ? 0 : i + n : n = n > i ? i : n, t = t > 0 ? t : 0, r.length < 1e4) l = Array.from(r), l.unshift(n, t), e2.splice(...l);
  else for (t && e2.splice(n, t); o < r.length; ) l = r.slice(o, o + 1e4), l.unshift(n, 0), e2.splice(...l), o += 1e4, n += 1e4;
}
function K(e2, n) {
  return e2.length > 0 ? (J(e2, e2.length, 0, n), e2) : n;
}
const on = {}.hasOwnProperty;
function Xn(e2) {
  const n = {};
  let t = -1;
  for (; ++t < e2.length; ) rl(n, e2[t]);
  return n;
}
function rl(e2, n) {
  let t;
  for (t in n) {
    const i = (on.call(e2, t) ? e2[t] : void 0) || (e2[t] = {}), o = n[t];
    let l;
    if (o) for (l in o) {
      on.call(i, l) || (i[l] = []);
      const u = o[l];
      il(i[l], Array.isArray(u) ? u : u ? [u] : []);
    }
  }
}
function il(e2, n) {
  let t = -1;
  const r = [];
  for (; ++t < n.length; ) (n[t].add === "after" ? e2 : r).push(n[t]);
  J(e2, 0, 0, r);
}
function Jn(e2, n) {
  const t = Number.parseInt(e2, n);
  return t < 9 || t === 11 || t > 13 && t < 32 || t > 126 && t < 160 || t > 55295 && t < 57344 || t > 64975 && t < 65008 || (t & 65535) === 65535 || (t & 65535) === 65534 || t > 1114111 ? "\uFFFD" : String.fromCodePoint(t);
}
function re(e2) {
  return e2.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const G = pe(/[A-Za-z]/), W = pe(/[\dA-Za-z]/), ll = pe(/[#-'*+\--9=?A-Z^-~]/);
function We(e2) {
  return e2 !== null && (e2 < 32 || e2 === 127);
}
const yt = pe(/\d/), ol = pe(/[\dA-Fa-f]/), ul = pe(/[!-/:-@[-`{-~]/);
function z(e2) {
  return e2 !== null && e2 < -2;
}
function j(e2) {
  return e2 !== null && (e2 < 0 || e2 === 32);
}
function D(e2) {
  return e2 === -2 || e2 === -1 || e2 === 32;
}
const Je = pe(new RegExp("\\p{P}|\\p{S}", "u")), ke = pe(/\s/);
function pe(e2) {
  return n;
  function n(t) {
    return t !== null && t > -1 && e2.test(String.fromCharCode(t));
  }
}
function Ie(e2) {
  const n = [];
  let t = -1, r = 0, i = 0;
  for (; ++t < e2.length; ) {
    const o = e2.charCodeAt(t);
    let l = "";
    if (o === 37 && W(e2.charCodeAt(t + 1)) && W(e2.charCodeAt(t + 2))) i = 2;
    else if (o < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (l = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const u = e2.charCodeAt(t + 1);
      o < 56320 && u > 56319 && u < 57344 ? (l = String.fromCharCode(o, u), i = 1) : l = "\uFFFD";
    } else l = String.fromCharCode(o);
    l && (n.push(e2.slice(r, t), encodeURIComponent(l)), r = t + i + 1, l = ""), i && (t += i, i = 0);
  }
  return n.join("") + e2.slice(r);
}
function R(e2, n, t, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return l;
  function l(a) {
    return D(a) ? (e2.enter(t), u(a)) : n(a);
  }
  function u(a) {
    return D(a) && o++ < i ? (e2.consume(a), u) : (e2.exit(t), n(a));
  }
}
const al = { tokenize: sl };
function sl(e2) {
  const n = e2.attempt(this.parser.constructs.contentInitial, r, i);
  let t;
  return n;
  function r(u) {
    if (u === null) {
      e2.consume(u);
      return;
    }
    return e2.enter("lineEnding"), e2.consume(u), e2.exit("lineEnding"), R(e2, n, "linePrefix");
  }
  function i(u) {
    return e2.enter("paragraph"), o(u);
  }
  function o(u) {
    const a = e2.enter("chunkText", { contentType: "text", previous: t });
    return t && (t.next = a), t = a, l(u);
  }
  function l(u) {
    if (u === null) {
      e2.exit("chunkText"), e2.exit("paragraph"), e2.consume(u);
      return;
    }
    return z(u) ? (e2.consume(u), e2.exit("chunkText"), o) : (e2.consume(u), l);
  }
}
const cl = { tokenize: fl }, un = { tokenize: hl };
function fl(e2) {
  const n = this, t = [];
  let r = 0, i, o, l;
  return u;
  function u(C) {
    if (r < t.length) {
      const _ = t[r];
      return n.containerState = _[1], e2.attempt(_[0].continuation, a, s)(C);
    }
    return s(C);
  }
  function a(C) {
    if (r++, n.containerState._closeFlow) {
      n.containerState._closeFlow = void 0, i && I();
      const _ = n.events.length;
      let P = _, w;
      for (; P--; ) if (n.events[P][0] === "exit" && n.events[P][1].type === "chunkFlow") {
        w = n.events[P][1].end;
        break;
      }
      x(r);
      let N = _;
      for (; N < n.events.length; ) n.events[N][1].end = { ...w }, N++;
      return J(n.events, P + 1, 0, n.events.slice(_)), n.events.length = N, s(C);
    }
    return u(C);
  }
  function s(C) {
    if (r === t.length) {
      if (!i) return p(C);
      if (i.currentConstruct && i.currentConstruct.concrete) return d(C);
      n.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return n.containerState = {}, e2.check(un, f, c)(C);
  }
  function f(C) {
    return i && I(), x(r), p(C);
  }
  function c(C) {
    return n.parser.lazy[n.now().line] = r !== t.length, l = n.now().offset, d(C);
  }
  function p(C) {
    return n.containerState = {}, e2.attempt(un, h, d)(C);
  }
  function h(C) {
    return r++, t.push([n.currentConstruct, n.containerState]), p(C);
  }
  function d(C) {
    if (C === null) {
      i && I(), x(0), e2.consume(C);
      return;
    }
    return i = i || n.parser.flow(n.now()), e2.enter("chunkFlow", { _tokenizer: i, contentType: "flow", previous: o }), y(C);
  }
  function y(C) {
    if (C === null) {
      S(e2.exit("chunkFlow"), true), x(0), e2.consume(C);
      return;
    }
    return z(C) ? (e2.consume(C), S(e2.exit("chunkFlow")), r = 0, n.interrupt = void 0, u) : (e2.consume(C), y);
  }
  function S(C, _) {
    const P = n.sliceStream(C);
    if (_ && P.push(null), C.previous = o, o && (o.next = C), o = C, i.defineSkip(C.start), i.write(P), n.parser.lazy[C.start.line]) {
      let w = i.events.length;
      for (; w--; ) if (i.events[w][1].start.offset < l && (!i.events[w][1].end || i.events[w][1].end.offset > l)) return;
      const N = n.events.length;
      let $ = N, v, k;
      for (; $--; ) if (n.events[$][0] === "exit" && n.events[$][1].type === "chunkFlow") {
        if (v) {
          k = n.events[$][1].end;
          break;
        }
        v = true;
      }
      for (x(r), w = N; w < n.events.length; ) n.events[w][1].end = { ...k }, w++;
      J(n.events, $ + 1, 0, n.events.slice(N)), n.events.length = w;
    }
  }
  function x(C) {
    let _ = t.length;
    for (; _-- > C; ) {
      const P = t[_];
      n.containerState = P[1], P[0].exit.call(n, e2);
    }
    t.length = C;
  }
  function I() {
    i.write([null]), o = void 0, i = void 0, n.containerState._closeFlow = void 0;
  }
}
function hl(e2, n, t) {
  return R(e2, e2.attempt(this.parser.constructs.document, n, t), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Ee(e2) {
  if (e2 === null || j(e2) || ke(e2)) return 1;
  if (Je(e2)) return 2;
}
function Ke(e2, n, t) {
  const r = [];
  let i = -1;
  for (; ++i < e2.length; ) {
    const o = e2[i].resolveAll;
    o && !r.includes(o) && (n = o(n, t), r.push(o));
  }
  return n;
}
const bt = { name: "attention", resolveAll: pl, tokenize: ml };
function pl(e2, n) {
  let t = -1, r, i, o, l, u, a, s, f;
  for (; ++t < e2.length; ) if (e2[t][0] === "enter" && e2[t][1].type === "attentionSequence" && e2[t][1]._close) {
    for (r = t; r--; ) if (e2[r][0] === "exit" && e2[r][1].type === "attentionSequence" && e2[r][1]._open && n.sliceSerialize(e2[r][1]).charCodeAt(0) === n.sliceSerialize(e2[t][1]).charCodeAt(0)) {
      if ((e2[r][1]._close || e2[t][1]._open) && (e2[t][1].end.offset - e2[t][1].start.offset) % 3 && !((e2[r][1].end.offset - e2[r][1].start.offset + e2[t][1].end.offset - e2[t][1].start.offset) % 3)) continue;
      a = e2[r][1].end.offset - e2[r][1].start.offset > 1 && e2[t][1].end.offset - e2[t][1].start.offset > 1 ? 2 : 1;
      const c = { ...e2[r][1].end }, p = { ...e2[t][1].start };
      an(c, -a), an(p, a), l = { type: a > 1 ? "strongSequence" : "emphasisSequence", start: c, end: { ...e2[r][1].end } }, u = { type: a > 1 ? "strongSequence" : "emphasisSequence", start: { ...e2[t][1].start }, end: p }, o = { type: a > 1 ? "strongText" : "emphasisText", start: { ...e2[r][1].end }, end: { ...e2[t][1].start } }, i = { type: a > 1 ? "strong" : "emphasis", start: { ...l.start }, end: { ...u.end } }, e2[r][1].end = { ...l.start }, e2[t][1].start = { ...u.end }, s = [], e2[r][1].end.offset - e2[r][1].start.offset && (s = K(s, [["enter", e2[r][1], n], ["exit", e2[r][1], n]])), s = K(s, [["enter", i, n], ["enter", l, n], ["exit", l, n], ["enter", o, n]]), s = K(s, Ke(n.parser.constructs.insideSpan.null, e2.slice(r + 1, t), n)), s = K(s, [["exit", o, n], ["enter", u, n], ["exit", u, n], ["exit", i, n]]), e2[t][1].end.offset - e2[t][1].start.offset ? (f = 2, s = K(s, [["enter", e2[t][1], n], ["exit", e2[t][1], n]])) : f = 0, J(e2, r - 1, t - r + 3, s), t = r + s.length - f - 2;
      break;
    }
  }
  for (t = -1; ++t < e2.length; ) e2[t][1].type === "attentionSequence" && (e2[t][1].type = "data");
  return e2;
}
function ml(e2, n) {
  const t = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ee(r);
  let o;
  return l;
  function l(a) {
    return o = a, e2.enter("attentionSequence"), u(a);
  }
  function u(a) {
    if (a === o) return e2.consume(a), u;
    const s = e2.exit("attentionSequence"), f = Ee(a), c = !f || f === 2 && i || t.includes(a), p = !i || i === 2 && f || t.includes(r);
    return s._open = !!(o === 42 ? c : c && (i || !p)), s._close = !!(o === 42 ? p : p && (f || !c)), n(a);
  }
}
function an(e2, n) {
  e2.column += n, e2.offset += n, e2._bufferIndex += n;
}
const gl = { name: "autolink", tokenize: dl };
function dl(e2, n, t) {
  let r = 0;
  return i;
  function i(h) {
    return e2.enter("autolink"), e2.enter("autolinkMarker"), e2.consume(h), e2.exit("autolinkMarker"), e2.enter("autolinkProtocol"), o;
  }
  function o(h) {
    return G(h) ? (e2.consume(h), l) : h === 64 ? t(h) : s(h);
  }
  function l(h) {
    return h === 43 || h === 45 || h === 46 || W(h) ? (r = 1, u(h)) : s(h);
  }
  function u(h) {
    return h === 58 ? (e2.consume(h), r = 0, a) : (h === 43 || h === 45 || h === 46 || W(h)) && r++ < 32 ? (e2.consume(h), u) : (r = 0, s(h));
  }
  function a(h) {
    return h === 62 ? (e2.exit("autolinkProtocol"), e2.enter("autolinkMarker"), e2.consume(h), e2.exit("autolinkMarker"), e2.exit("autolink"), n) : h === null || h === 32 || h === 60 || We(h) ? t(h) : (e2.consume(h), a);
  }
  function s(h) {
    return h === 64 ? (e2.consume(h), f) : ll(h) ? (e2.consume(h), s) : t(h);
  }
  function f(h) {
    return W(h) ? c(h) : t(h);
  }
  function c(h) {
    return h === 46 ? (e2.consume(h), r = 0, f) : h === 62 ? (e2.exit("autolinkProtocol").type = "autolinkEmail", e2.enter("autolinkMarker"), e2.consume(h), e2.exit("autolinkMarker"), e2.exit("autolink"), n) : p(h);
  }
  function p(h) {
    if ((h === 45 || W(h)) && r++ < 63) {
      const d = h === 45 ? p : c;
      return e2.consume(h), d;
    }
    return t(h);
  }
}
const Oe = { partial: true, tokenize: xl };
function xl(e2, n, t) {
  return r;
  function r(o) {
    return D(o) ? R(e2, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || z(o) ? n(o) : t(o);
  }
}
const Kn = { continuation: { tokenize: yl }, exit: bl, name: "blockQuote", tokenize: kl };
function kl(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    if (l === 62) {
      const u = r.containerState;
      return u.open || (e2.enter("blockQuote", { _container: true }), u.open = true), e2.enter("blockQuotePrefix"), e2.enter("blockQuoteMarker"), e2.consume(l), e2.exit("blockQuoteMarker"), o;
    }
    return t(l);
  }
  function o(l) {
    return D(l) ? (e2.enter("blockQuotePrefixWhitespace"), e2.consume(l), e2.exit("blockQuotePrefixWhitespace"), e2.exit("blockQuotePrefix"), n) : (e2.exit("blockQuotePrefix"), n(l));
  }
}
function yl(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return D(l) ? R(e2, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : o(l);
  }
  function o(l) {
    return e2.attempt(Kn, n, t)(l);
  }
}
function bl(e2) {
  e2.exit("blockQuote");
}
const Zn = { name: "characterEscape", tokenize: wl };
function wl(e2, n, t) {
  return r;
  function r(o) {
    return e2.enter("characterEscape"), e2.enter("escapeMarker"), e2.consume(o), e2.exit("escapeMarker"), i;
  }
  function i(o) {
    return ul(o) ? (e2.enter("characterEscapeValue"), e2.consume(o), e2.exit("characterEscapeValue"), e2.exit("characterEscape"), n) : t(o);
  }
}
const er = { name: "characterReference", tokenize: Sl };
function Sl(e2, n, t) {
  const r = this;
  let i = 0, o, l;
  return u;
  function u(c) {
    return e2.enter("characterReference"), e2.enter("characterReferenceMarker"), e2.consume(c), e2.exit("characterReferenceMarker"), a;
  }
  function a(c) {
    return c === 35 ? (e2.enter("characterReferenceMarkerNumeric"), e2.consume(c), e2.exit("characterReferenceMarkerNumeric"), s) : (e2.enter("characterReferenceValue"), o = 31, l = W, f(c));
  }
  function s(c) {
    return c === 88 || c === 120 ? (e2.enter("characterReferenceMarkerHexadecimal"), e2.consume(c), e2.exit("characterReferenceMarkerHexadecimal"), e2.enter("characterReferenceValue"), o = 6, l = ol, f) : (e2.enter("characterReferenceValue"), o = 7, l = yt, f(c));
  }
  function f(c) {
    if (c === 59 && i) {
      const p = e2.exit("characterReferenceValue");
      return l === W && !Tt(r.sliceSerialize(p)) ? t(c) : (e2.enter("characterReferenceMarker"), e2.consume(c), e2.exit("characterReferenceMarker"), e2.exit("characterReference"), n);
    }
    return l(c) && i++ < o ? (e2.consume(c), f) : t(c);
  }
}
const sn = { partial: true, tokenize: El }, cn = { concrete: true, name: "codeFenced", tokenize: Cl };
function Cl(e2, n, t) {
  const r = this, i = { partial: true, tokenize: P };
  let o = 0, l = 0, u;
  return a;
  function a(w) {
    return s(w);
  }
  function s(w) {
    const N = r.events[r.events.length - 1];
    return o = N && N[1].type === "linePrefix" ? N[2].sliceSerialize(N[1], true).length : 0, u = w, e2.enter("codeFenced"), e2.enter("codeFencedFence"), e2.enter("codeFencedFenceSequence"), f(w);
  }
  function f(w) {
    return w === u ? (l++, e2.consume(w), f) : l < 3 ? t(w) : (e2.exit("codeFencedFenceSequence"), D(w) ? R(e2, c, "whitespace")(w) : c(w));
  }
  function c(w) {
    return w === null || z(w) ? (e2.exit("codeFencedFence"), r.interrupt ? n(w) : e2.check(sn, y, _)(w)) : (e2.enter("codeFencedFenceInfo"), e2.enter("chunkString", { contentType: "string" }), p(w));
  }
  function p(w) {
    return w === null || z(w) ? (e2.exit("chunkString"), e2.exit("codeFencedFenceInfo"), c(w)) : D(w) ? (e2.exit("chunkString"), e2.exit("codeFencedFenceInfo"), R(e2, h, "whitespace")(w)) : w === 96 && w === u ? t(w) : (e2.consume(w), p);
  }
  function h(w) {
    return w === null || z(w) ? c(w) : (e2.enter("codeFencedFenceMeta"), e2.enter("chunkString", { contentType: "string" }), d(w));
  }
  function d(w) {
    return w === null || z(w) ? (e2.exit("chunkString"), e2.exit("codeFencedFenceMeta"), c(w)) : w === 96 && w === u ? t(w) : (e2.consume(w), d);
  }
  function y(w) {
    return e2.attempt(i, _, S)(w);
  }
  function S(w) {
    return e2.enter("lineEnding"), e2.consume(w), e2.exit("lineEnding"), x;
  }
  function x(w) {
    return o > 0 && D(w) ? R(e2, I, "linePrefix", o + 1)(w) : I(w);
  }
  function I(w) {
    return w === null || z(w) ? e2.check(sn, y, _)(w) : (e2.enter("codeFlowValue"), C(w));
  }
  function C(w) {
    return w === null || z(w) ? (e2.exit("codeFlowValue"), I(w)) : (e2.consume(w), C);
  }
  function _(w) {
    return e2.exit("codeFenced"), n(w);
  }
  function P(w, N, $) {
    let v = 0;
    return k;
    function k(O) {
      return w.enter("lineEnding"), w.consume(O), w.exit("lineEnding"), A;
    }
    function A(O) {
      return w.enter("codeFencedFence"), D(O) ? R(w, T, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(O) : T(O);
    }
    function T(O) {
      return O === u ? (w.enter("codeFencedFenceSequence"), M(O)) : $(O);
    }
    function M(O) {
      return O === u ? (v++, w.consume(O), M) : v >= l ? (w.exit("codeFencedFenceSequence"), D(O) ? R(w, H, "whitespace")(O) : H(O)) : $(O);
    }
    function H(O) {
      return O === null || z(O) ? (w.exit("codeFencedFence"), N(O)) : $(O);
    }
  }
}
function El(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l === null ? t(l) : (e2.enter("lineEnding"), e2.consume(l), e2.exit("lineEnding"), o);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
const it = { name: "codeIndented", tokenize: Al }, Il = { partial: true, tokenize: Tl };
function Al(e2, n, t) {
  const r = this;
  return i;
  function i(s) {
    return e2.enter("codeIndented"), R(e2, o, "linePrefix", 5)(s);
  }
  function o(s) {
    const f = r.events[r.events.length - 1];
    return f && f[1].type === "linePrefix" && f[2].sliceSerialize(f[1], true).length >= 4 ? l(s) : t(s);
  }
  function l(s) {
    return s === null ? a(s) : z(s) ? e2.attempt(Il, l, a)(s) : (e2.enter("codeFlowValue"), u(s));
  }
  function u(s) {
    return s === null || z(s) ? (e2.exit("codeFlowValue"), l(s)) : (e2.consume(s), u);
  }
  function a(s) {
    return e2.exit("codeIndented"), n(s);
  }
}
function Tl(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return r.parser.lazy[r.now().line] ? t(l) : z(l) ? (e2.enter("lineEnding"), e2.consume(l), e2.exit("lineEnding"), i) : R(e2, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4 ? n(l) : z(l) ? i(l) : t(l);
  }
}
const zl = { name: "codeText", previous: _l, resolve: Fl, tokenize: Pl };
function Fl(e2) {
  let n = e2.length - 4, t = 3, r, i;
  if ((e2[t][1].type === "lineEnding" || e2[t][1].type === "space") && (e2[n][1].type === "lineEnding" || e2[n][1].type === "space")) {
    for (r = t; ++r < n; ) if (e2[r][1].type === "codeTextData") {
      e2[t][1].type = "codeTextPadding", e2[n][1].type = "codeTextPadding", t += 2, n -= 2;
      break;
    }
  }
  for (r = t - 1, n++; ++r <= n; ) i === void 0 ? r !== n && e2[r][1].type !== "lineEnding" && (i = r) : (r === n || e2[r][1].type === "lineEnding") && (e2[i][1].type = "codeTextData", r !== i + 2 && (e2[i][1].end = e2[r - 1][1].end, e2.splice(i + 2, r - i - 2), n -= r - i - 2, r = i + 2), i = void 0);
  return e2;
}
function _l(e2) {
  return e2 !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Pl(e2, n, t) {
  let r = 0, i, o;
  return l;
  function l(c) {
    return e2.enter("codeText"), e2.enter("codeTextSequence"), u(c);
  }
  function u(c) {
    return c === 96 ? (e2.consume(c), r++, u) : (e2.exit("codeTextSequence"), a(c));
  }
  function a(c) {
    return c === null ? t(c) : c === 32 ? (e2.enter("space"), e2.consume(c), e2.exit("space"), a) : c === 96 ? (o = e2.enter("codeTextSequence"), i = 0, f(c)) : z(c) ? (e2.enter("lineEnding"), e2.consume(c), e2.exit("lineEnding"), a) : (e2.enter("codeTextData"), s(c));
  }
  function s(c) {
    return c === null || c === 32 || c === 96 || z(c) ? (e2.exit("codeTextData"), a(c)) : (e2.consume(c), s);
  }
  function f(c) {
    return c === 96 ? (e2.consume(c), i++, f) : i === r ? (e2.exit("codeTextSequence"), e2.exit("codeText"), n(c)) : (o.type = "codeTextData", s(c));
  }
}
class Dl {
  constructor(n) {
    this.left = n ? [...n] : [], this.right = [];
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
    return r && Fe(this.left, r), o.reverse();
  }
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  push(n) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(n);
  }
  pushMany(n) {
    this.setCursor(Number.POSITIVE_INFINITY), Fe(this.left, n);
  }
  unshift(n) {
    this.setCursor(0), this.right.push(n);
  }
  unshiftMany(n) {
    this.setCursor(0), Fe(this.right, n.reverse());
  }
  setCursor(n) {
    if (!(n === this.left.length || n > this.left.length && this.right.length === 0 || n < 0 && this.left.length === 0)) if (n < this.left.length) {
      const t = this.left.splice(n, Number.POSITIVE_INFINITY);
      Fe(this.right, t.reverse());
    } else {
      const t = this.right.splice(this.left.length + this.right.length - n, Number.POSITIVE_INFINITY);
      Fe(this.left, t.reverse());
    }
  }
}
function Fe(e2, n) {
  let t = 0;
  if (n.length < 1e4) e2.push(...n);
  else for (; t < n.length; ) e2.push(...n.slice(t, t + 1e4)), t += 1e4;
}
function tr(e2) {
  const n = {};
  let t = -1, r, i, o, l, u, a, s;
  const f = new Dl(e2);
  for (; ++t < f.length; ) {
    for (; t in n; ) t = n[t];
    if (r = f.get(t), t && r[1].type === "chunkFlow" && f.get(t - 1)[1].type === "listItemPrefix" && (a = r[1]._tokenizer.events, o = 0, o < a.length && a[o][1].type === "lineEndingBlank" && (o += 2), o < a.length && a[o][1].type === "content")) for (; ++o < a.length && a[o][1].type !== "content"; ) a[o][1].type === "chunkText" && (a[o][1]._isInFirstContentOfListItem = true, o++);
    if (r[0] === "enter") r[1].contentType && (Object.assign(n, Ll(f, t)), t = n[t], s = true);
    else if (r[1]._container) {
      for (o = t, i = void 0; o--; ) if (l = f.get(o), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank") l[0] === "enter" && (i && (f.get(i)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", i = o);
      else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      i && (r[1].end = { ...f.get(i)[1].start }, u = f.slice(i, t), u.unshift(r), f.splice(i, t - i + 1, u));
    }
  }
  return J(e2, 0, Number.POSITIVE_INFINITY, f.slice(0)), !s;
}
function Ll(e2, n) {
  const t = e2.get(n)[1], r = e2.get(n)[2];
  let i = n - 1;
  const o = [];
  let l = t._tokenizer;
  l || (l = r.parser[t.contentType](t.start), t._contentTypeTextTrailing && (l._contentTypeTextTrailing = true));
  const u = l.events, a = [], s = {};
  let f, c, p = -1, h = t, d = 0, y = 0;
  const S = [y];
  for (; h; ) {
    for (; e2.get(++i)[1] !== h; ) ;
    o.push(i), h._tokenizer || (f = r.sliceStream(h), h.next || f.push(null), c && l.defineSkip(h.start), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = true), l.write(f), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), c = h, h = h.next;
  }
  for (h = t; ++p < u.length; ) u[p][0] === "exit" && u[p - 1][0] === "enter" && u[p][1].type === u[p - 1][1].type && u[p][1].start.line !== u[p][1].end.line && (y = p + 1, S.push(y), h._tokenizer = void 0, h.previous = void 0, h = h.next);
  for (l.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : S.pop(), p = S.length; p--; ) {
    const x = u.slice(S[p], S[p + 1]), I = o.pop();
    a.push([I, I + x.length - 1]), e2.splice(I, 2, x);
  }
  for (a.reverse(), p = -1; ++p < a.length; ) s[d + a[p][0]] = d + a[p][1], d += a[p][1] - a[p][0] - 1;
  return s;
}
const Rl = { resolve: Ol, tokenize: vl }, Nl = { partial: true, tokenize: Ml };
function Ol(e2) {
  return tr(e2), e2;
}
function vl(e2, n) {
  let t;
  return r;
  function r(u) {
    return e2.enter("content"), t = e2.enter("chunkContent", { contentType: "content" }), i(u);
  }
  function i(u) {
    return u === null ? o(u) : z(u) ? e2.check(Nl, l, o)(u) : (e2.consume(u), i);
  }
  function o(u) {
    return e2.exit("chunkContent"), e2.exit("content"), n(u);
  }
  function l(u) {
    return e2.consume(u), e2.exit("chunkContent"), t.next = e2.enter("chunkContent", { contentType: "content", previous: t }), t = t.next, i;
  }
}
function Ml(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e2.exit("chunkContent"), e2.enter("lineEnding"), e2.consume(l), e2.exit("lineEnding"), R(e2, o, "linePrefix");
  }
  function o(l) {
    if (l === null || z(l)) return t(l);
    const u = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], true).length >= 4 ? n(l) : e2.interrupt(r.parser.constructs.flow, t, n)(l);
  }
}
function nr(e2, n, t, r, i, o, l, u, a) {
  const s = a || Number.POSITIVE_INFINITY;
  let f = 0;
  return c;
  function c(x) {
    return x === 60 ? (e2.enter(r), e2.enter(i), e2.enter(o), e2.consume(x), e2.exit(o), p) : x === null || x === 32 || x === 41 || We(x) ? t(x) : (e2.enter(r), e2.enter(l), e2.enter(u), e2.enter("chunkString", { contentType: "string" }), y(x));
  }
  function p(x) {
    return x === 62 ? (e2.enter(o), e2.consume(x), e2.exit(o), e2.exit(i), e2.exit(r), n) : (e2.enter(u), e2.enter("chunkString", { contentType: "string" }), h(x));
  }
  function h(x) {
    return x === 62 ? (e2.exit("chunkString"), e2.exit(u), p(x)) : x === null || x === 60 || z(x) ? t(x) : (e2.consume(x), x === 92 ? d : h);
  }
  function d(x) {
    return x === 60 || x === 62 || x === 92 ? (e2.consume(x), h) : h(x);
  }
  function y(x) {
    return !f && (x === null || x === 41 || j(x)) ? (e2.exit("chunkString"), e2.exit(u), e2.exit(l), e2.exit(r), n(x)) : f < s && x === 40 ? (e2.consume(x), f++, y) : x === 41 ? (e2.consume(x), f--, y) : x === null || x === 32 || x === 40 || We(x) ? t(x) : (e2.consume(x), x === 92 ? S : y);
  }
  function S(x) {
    return x === 40 || x === 41 || x === 92 ? (e2.consume(x), y) : y(x);
  }
}
function rr(e2, n, t, r, i, o) {
  const l = this;
  let u = 0, a;
  return s;
  function s(h) {
    return e2.enter(r), e2.enter(i), e2.consume(h), e2.exit(i), e2.enter(o), f;
  }
  function f(h) {
    return u > 999 || h === null || h === 91 || h === 93 && !a || h === 94 && !u && "_hiddenFootnoteSupport" in l.parser.constructs ? t(h) : h === 93 ? (e2.exit(o), e2.enter(i), e2.consume(h), e2.exit(i), e2.exit(r), n) : z(h) ? (e2.enter("lineEnding"), e2.consume(h), e2.exit("lineEnding"), f) : (e2.enter("chunkString", { contentType: "string" }), c(h));
  }
  function c(h) {
    return h === null || h === 91 || h === 93 || z(h) || u++ > 999 ? (e2.exit("chunkString"), f(h)) : (e2.consume(h), a || (a = !D(h)), h === 92 ? p : c);
  }
  function p(h) {
    return h === 91 || h === 92 || h === 93 ? (e2.consume(h), u++, c) : c(h);
  }
}
function ir(e2, n, t, r, i, o) {
  let l;
  return u;
  function u(p) {
    return p === 34 || p === 39 || p === 40 ? (e2.enter(r), e2.enter(i), e2.consume(p), e2.exit(i), l = p === 40 ? 41 : p, a) : t(p);
  }
  function a(p) {
    return p === l ? (e2.enter(i), e2.consume(p), e2.exit(i), e2.exit(r), n) : (e2.enter(o), s(p));
  }
  function s(p) {
    return p === l ? (e2.exit(o), a(l)) : p === null ? t(p) : z(p) ? (e2.enter("lineEnding"), e2.consume(p), e2.exit("lineEnding"), R(e2, s, "linePrefix")) : (e2.enter("chunkString", { contentType: "string" }), f(p));
  }
  function f(p) {
    return p === l || p === null || z(p) ? (e2.exit("chunkString"), s(p)) : (e2.consume(p), p === 92 ? c : f);
  }
  function c(p) {
    return p === l || p === 92 ? (e2.consume(p), f) : f(p);
  }
}
function De(e2, n) {
  let t;
  return r;
  function r(i) {
    return z(i) ? (e2.enter("lineEnding"), e2.consume(i), e2.exit("lineEnding"), t = true, r) : D(i) ? R(e2, r, t ? "linePrefix" : "lineSuffix")(i) : n(i);
  }
}
const Bl = { name: "definition", tokenize: $l }, jl = { partial: true, tokenize: Hl };
function $l(e2, n, t) {
  const r = this;
  let i;
  return o;
  function o(h) {
    return e2.enter("definition"), l(h);
  }
  function l(h) {
    return rr.call(r, e2, u, t, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(h);
  }
  function u(h) {
    return i = re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), h === 58 ? (e2.enter("definitionMarker"), e2.consume(h), e2.exit("definitionMarker"), a) : t(h);
  }
  function a(h) {
    return j(h) ? De(e2, s)(h) : s(h);
  }
  function s(h) {
    return nr(e2, f, t, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(h);
  }
  function f(h) {
    return e2.attempt(jl, c, c)(h);
  }
  function c(h) {
    return D(h) ? R(e2, p, "whitespace")(h) : p(h);
  }
  function p(h) {
    return h === null || z(h) ? (e2.exit("definition"), r.parser.defined.push(i), n(h)) : t(h);
  }
}
function Hl(e2, n, t) {
  return r;
  function r(u) {
    return j(u) ? De(e2, i)(u) : t(u);
  }
  function i(u) {
    return ir(e2, o, t, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(u);
  }
  function o(u) {
    return D(u) ? R(e2, l, "whitespace")(u) : l(u);
  }
  function l(u) {
    return u === null || z(u) ? n(u) : t(u);
  }
}
const Vl = { name: "hardBreakEscape", tokenize: ql };
function ql(e2, n, t) {
  return r;
  function r(o) {
    return e2.enter("hardBreakEscape"), e2.consume(o), i;
  }
  function i(o) {
    return z(o) ? (e2.exit("hardBreakEscape"), n(o)) : t(o);
  }
}
const Ul = { name: "headingAtx", resolve: Wl, tokenize: Ql };
function Wl(e2, n) {
  let t = e2.length - 2, r = 3, i, o;
  return e2[r][1].type === "whitespace" && (r += 2), t - 2 > r && e2[t][1].type === "whitespace" && (t -= 2), e2[t][1].type === "atxHeadingSequence" && (r === t - 1 || t - 4 > r && e2[t - 2][1].type === "whitespace") && (t -= r + 1 === t ? 2 : 4), t > r && (i = { type: "atxHeadingText", start: e2[r][1].start, end: e2[t][1].end }, o = { type: "chunkText", start: e2[r][1].start, end: e2[t][1].end, contentType: "text" }, J(e2, r, t - r + 1, [["enter", i, n], ["enter", o, n], ["exit", o, n], ["exit", i, n]])), e2;
}
function Ql(e2, n, t) {
  let r = 0;
  return i;
  function i(f) {
    return e2.enter("atxHeading"), o(f);
  }
  function o(f) {
    return e2.enter("atxHeadingSequence"), l(f);
  }
  function l(f) {
    return f === 35 && r++ < 6 ? (e2.consume(f), l) : f === null || j(f) ? (e2.exit("atxHeadingSequence"), u(f)) : t(f);
  }
  function u(f) {
    return f === 35 ? (e2.enter("atxHeadingSequence"), a(f)) : f === null || z(f) ? (e2.exit("atxHeading"), n(f)) : D(f) ? R(e2, u, "whitespace")(f) : (e2.enter("atxHeadingText"), s(f));
  }
  function a(f) {
    return f === 35 ? (e2.consume(f), a) : (e2.exit("atxHeadingSequence"), u(f));
  }
  function s(f) {
    return f === null || f === 35 || j(f) ? (e2.exit("atxHeadingText"), u(f)) : (e2.consume(f), s);
  }
}
const Gl = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"], fn = ["pre", "script", "style", "textarea"], Yl = { concrete: true, name: "htmlFlow", resolveTo: Kl, tokenize: Zl }, Xl = { partial: true, tokenize: to }, Jl = { partial: true, tokenize: eo };
function Kl(e2) {
  let n = e2.length;
  for (; n-- && !(e2[n][0] === "enter" && e2[n][1].type === "htmlFlow"); ) ;
  return n > 1 && e2[n - 2][1].type === "linePrefix" && (e2[n][1].start = e2[n - 2][1].start, e2[n + 1][1].start = e2[n - 2][1].start, e2.splice(n - 2, 2)), e2;
}
function Zl(e2, n, t) {
  const r = this;
  let i, o, l, u, a;
  return s;
  function s(g) {
    return f(g);
  }
  function f(g) {
    return e2.enter("htmlFlow"), e2.enter("htmlFlowData"), e2.consume(g), c;
  }
  function c(g) {
    return g === 33 ? (e2.consume(g), p) : g === 47 ? (e2.consume(g), o = true, y) : g === 63 ? (e2.consume(g), i = 3, r.interrupt ? n : m) : G(g) ? (e2.consume(g), l = String.fromCharCode(g), S) : t(g);
  }
  function p(g) {
    return g === 45 ? (e2.consume(g), i = 2, h) : g === 91 ? (e2.consume(g), i = 5, u = 0, d) : G(g) ? (e2.consume(g), i = 4, r.interrupt ? n : m) : t(g);
  }
  function h(g) {
    return g === 45 ? (e2.consume(g), r.interrupt ? n : m) : t(g);
  }
  function d(g) {
    const te = "CDATA[";
    return g === te.charCodeAt(u++) ? (e2.consume(g), u === te.length ? r.interrupt ? n : T : d) : t(g);
  }
  function y(g) {
    return G(g) ? (e2.consume(g), l = String.fromCharCode(g), S) : t(g);
  }
  function S(g) {
    if (g === null || g === 47 || g === 62 || j(g)) {
      const te = g === 47, me = l.toLowerCase();
      return !te && !o && fn.includes(me) ? (i = 1, r.interrupt ? n(g) : T(g)) : Gl.includes(l.toLowerCase()) ? (i = 6, te ? (e2.consume(g), x) : r.interrupt ? n(g) : T(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? t(g) : o ? I(g) : C(g));
    }
    return g === 45 || W(g) ? (e2.consume(g), l += String.fromCharCode(g), S) : t(g);
  }
  function x(g) {
    return g === 62 ? (e2.consume(g), r.interrupt ? n : T) : t(g);
  }
  function I(g) {
    return D(g) ? (e2.consume(g), I) : k(g);
  }
  function C(g) {
    return g === 47 ? (e2.consume(g), k) : g === 58 || g === 95 || G(g) ? (e2.consume(g), _) : D(g) ? (e2.consume(g), C) : k(g);
  }
  function _(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || W(g) ? (e2.consume(g), _) : P(g);
  }
  function P(g) {
    return g === 61 ? (e2.consume(g), w) : D(g) ? (e2.consume(g), P) : C(g);
  }
  function w(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? t(g) : g === 34 || g === 39 ? (e2.consume(g), a = g, N) : D(g) ? (e2.consume(g), w) : $(g);
  }
  function N(g) {
    return g === a ? (e2.consume(g), a = null, v) : g === null || z(g) ? t(g) : (e2.consume(g), N);
  }
  function $(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || j(g) ? P(g) : (e2.consume(g), $);
  }
  function v(g) {
    return g === 47 || g === 62 || D(g) ? C(g) : t(g);
  }
  function k(g) {
    return g === 62 ? (e2.consume(g), A) : t(g);
  }
  function A(g) {
    return g === null || z(g) ? T(g) : D(g) ? (e2.consume(g), A) : t(g);
  }
  function T(g) {
    return g === 45 && i === 2 ? (e2.consume(g), U) : g === 60 && i === 1 ? (e2.consume(g), V) : g === 62 && i === 4 ? (e2.consume(g), ee) : g === 63 && i === 3 ? (e2.consume(g), m) : g === 93 && i === 5 ? (e2.consume(g), oe) : z(g) && (i === 6 || i === 7) ? (e2.exit("htmlFlowData"), e2.check(Xl, ue, M)(g)) : g === null || z(g) ? (e2.exit("htmlFlowData"), M(g)) : (e2.consume(g), T);
  }
  function M(g) {
    return e2.check(Jl, H, ue)(g);
  }
  function H(g) {
    return e2.enter("lineEnding"), e2.consume(g), e2.exit("lineEnding"), O;
  }
  function O(g) {
    return g === null || z(g) ? M(g) : (e2.enter("htmlFlowData"), T(g));
  }
  function U(g) {
    return g === 45 ? (e2.consume(g), m) : T(g);
  }
  function V(g) {
    return g === 47 ? (e2.consume(g), l = "", Z) : T(g);
  }
  function Z(g) {
    if (g === 62) {
      const te = l.toLowerCase();
      return fn.includes(te) ? (e2.consume(g), ee) : T(g);
    }
    return G(g) && l.length < 8 ? (e2.consume(g), l += String.fromCharCode(g), Z) : T(g);
  }
  function oe(g) {
    return g === 93 ? (e2.consume(g), m) : T(g);
  }
  function m(g) {
    return g === 62 ? (e2.consume(g), ee) : g === 45 && i === 2 ? (e2.consume(g), m) : T(g);
  }
  function ee(g) {
    return g === null || z(g) ? (e2.exit("htmlFlowData"), ue(g)) : (e2.consume(g), ee);
  }
  function ue(g) {
    return e2.exit("htmlFlow"), n(g);
  }
}
function eo(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return z(l) ? (e2.enter("lineEnding"), e2.consume(l), e2.exit("lineEnding"), o) : t(l);
  }
  function o(l) {
    return r.parser.lazy[r.now().line] ? t(l) : n(l);
  }
}
function to(e2, n, t) {
  return r;
  function r(i) {
    return e2.enter("lineEnding"), e2.consume(i), e2.exit("lineEnding"), e2.attempt(Oe, n, t);
  }
}
const no = { name: "htmlText", tokenize: ro };
function ro(e2, n, t) {
  const r = this;
  let i, o, l;
  return u;
  function u(m) {
    return e2.enter("htmlText"), e2.enter("htmlTextData"), e2.consume(m), a;
  }
  function a(m) {
    return m === 33 ? (e2.consume(m), s) : m === 47 ? (e2.consume(m), P) : m === 63 ? (e2.consume(m), C) : G(m) ? (e2.consume(m), $) : t(m);
  }
  function s(m) {
    return m === 45 ? (e2.consume(m), f) : m === 91 ? (e2.consume(m), o = 0, d) : G(m) ? (e2.consume(m), I) : t(m);
  }
  function f(m) {
    return m === 45 ? (e2.consume(m), h) : t(m);
  }
  function c(m) {
    return m === null ? t(m) : m === 45 ? (e2.consume(m), p) : z(m) ? (l = c, V(m)) : (e2.consume(m), c);
  }
  function p(m) {
    return m === 45 ? (e2.consume(m), h) : c(m);
  }
  function h(m) {
    return m === 62 ? U(m) : m === 45 ? p(m) : c(m);
  }
  function d(m) {
    const ee = "CDATA[";
    return m === ee.charCodeAt(o++) ? (e2.consume(m), o === ee.length ? y : d) : t(m);
  }
  function y(m) {
    return m === null ? t(m) : m === 93 ? (e2.consume(m), S) : z(m) ? (l = y, V(m)) : (e2.consume(m), y);
  }
  function S(m) {
    return m === 93 ? (e2.consume(m), x) : y(m);
  }
  function x(m) {
    return m === 62 ? U(m) : m === 93 ? (e2.consume(m), x) : y(m);
  }
  function I(m) {
    return m === null || m === 62 ? U(m) : z(m) ? (l = I, V(m)) : (e2.consume(m), I);
  }
  function C(m) {
    return m === null ? t(m) : m === 63 ? (e2.consume(m), _) : z(m) ? (l = C, V(m)) : (e2.consume(m), C);
  }
  function _(m) {
    return m === 62 ? U(m) : C(m);
  }
  function P(m) {
    return G(m) ? (e2.consume(m), w) : t(m);
  }
  function w(m) {
    return m === 45 || W(m) ? (e2.consume(m), w) : N(m);
  }
  function N(m) {
    return z(m) ? (l = N, V(m)) : D(m) ? (e2.consume(m), N) : U(m);
  }
  function $(m) {
    return m === 45 || W(m) ? (e2.consume(m), $) : m === 47 || m === 62 || j(m) ? v(m) : t(m);
  }
  function v(m) {
    return m === 47 ? (e2.consume(m), U) : m === 58 || m === 95 || G(m) ? (e2.consume(m), k) : z(m) ? (l = v, V(m)) : D(m) ? (e2.consume(m), v) : U(m);
  }
  function k(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || W(m) ? (e2.consume(m), k) : A(m);
  }
  function A(m) {
    return m === 61 ? (e2.consume(m), T) : z(m) ? (l = A, V(m)) : D(m) ? (e2.consume(m), A) : v(m);
  }
  function T(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? t(m) : m === 34 || m === 39 ? (e2.consume(m), i = m, M) : z(m) ? (l = T, V(m)) : D(m) ? (e2.consume(m), T) : (e2.consume(m), H);
  }
  function M(m) {
    return m === i ? (e2.consume(m), i = void 0, O) : m === null ? t(m) : z(m) ? (l = M, V(m)) : (e2.consume(m), M);
  }
  function H(m) {
    return m === null || m === 34 || m === 39 || m === 60 || m === 61 || m === 96 ? t(m) : m === 47 || m === 62 || j(m) ? v(m) : (e2.consume(m), H);
  }
  function O(m) {
    return m === 47 || m === 62 || j(m) ? v(m) : t(m);
  }
  function U(m) {
    return m === 62 ? (e2.consume(m), e2.exit("htmlTextData"), e2.exit("htmlText"), n) : t(m);
  }
  function V(m) {
    return e2.exit("htmlTextData"), e2.enter("lineEnding"), e2.consume(m), e2.exit("lineEnding"), Z;
  }
  function Z(m) {
    return D(m) ? R(e2, oe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(m) : oe(m);
  }
  function oe(m) {
    return e2.enter("htmlTextData"), l(m);
  }
}
const Rt = { name: "labelEnd", resolveAll: uo, resolveTo: ao, tokenize: so }, io = { tokenize: co }, lo = { tokenize: fo }, oo = { tokenize: ho };
function uo(e2) {
  let n = -1;
  const t = [];
  for (; ++n < e2.length; ) {
    const r = e2[n][1];
    if (t.push(e2[n]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", n += i;
    }
  }
  return e2.length !== t.length && J(e2, 0, e2.length, t), e2;
}
function ao(e2, n) {
  let t = e2.length, r = 0, i, o, l, u;
  for (; t--; ) if (i = e2[t][1], o) {
    if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
    e2[t][0] === "enter" && i.type === "labelLink" && (i._inactive = true);
  } else if (l) {
    if (e2[t][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = t, i.type !== "labelLink")) {
      r = 2;
      break;
    }
  } else i.type === "labelEnd" && (l = t);
  const a = { type: e2[o][1].type === "labelLink" ? "link" : "image", start: { ...e2[o][1].start }, end: { ...e2[e2.length - 1][1].end } }, s = { type: "label", start: { ...e2[o][1].start }, end: { ...e2[l][1].end } }, f = { type: "labelText", start: { ...e2[o + r + 2][1].end }, end: { ...e2[l - 2][1].start } };
  return u = [["enter", a, n], ["enter", s, n]], u = K(u, e2.slice(o + 1, o + r + 3)), u = K(u, [["enter", f, n]]), u = K(u, Ke(n.parser.constructs.insideSpan.null, e2.slice(o + r + 4, l - 3), n)), u = K(u, [["exit", f, n], e2[l - 2], e2[l - 1], ["exit", s, n]]), u = K(u, e2.slice(l + 1)), u = K(u, [["exit", a, n]]), J(e2, o, e2.length, u), e2;
}
function so(e2, n, t) {
  const r = this;
  let i = r.events.length, o, l;
  for (; i--; ) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
    o = r.events[i][1];
    break;
  }
  return u;
  function u(p) {
    return o ? o._inactive ? c(p) : (l = r.parser.defined.includes(re(r.sliceSerialize({ start: o.end, end: r.now() }))), e2.enter("labelEnd"), e2.enter("labelMarker"), e2.consume(p), e2.exit("labelMarker"), e2.exit("labelEnd"), a) : t(p);
  }
  function a(p) {
    return p === 40 ? e2.attempt(io, f, l ? f : c)(p) : p === 91 ? e2.attempt(lo, f, l ? s : c)(p) : l ? f(p) : c(p);
  }
  function s(p) {
    return e2.attempt(oo, f, c)(p);
  }
  function f(p) {
    return n(p);
  }
  function c(p) {
    return o._balanced = true, t(p);
  }
}
function co(e2, n, t) {
  return r;
  function r(c) {
    return e2.enter("resource"), e2.enter("resourceMarker"), e2.consume(c), e2.exit("resourceMarker"), i;
  }
  function i(c) {
    return j(c) ? De(e2, o)(c) : o(c);
  }
  function o(c) {
    return c === 41 ? f(c) : nr(e2, l, u, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function l(c) {
    return j(c) ? De(e2, a)(c) : f(c);
  }
  function u(c) {
    return t(c);
  }
  function a(c) {
    return c === 34 || c === 39 || c === 40 ? ir(e2, s, t, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : f(c);
  }
  function s(c) {
    return j(c) ? De(e2, f)(c) : f(c);
  }
  function f(c) {
    return c === 41 ? (e2.enter("resourceMarker"), e2.consume(c), e2.exit("resourceMarker"), e2.exit("resource"), n) : t(c);
  }
}
function fo(e2, n, t) {
  const r = this;
  return i;
  function i(u) {
    return rr.call(r, e2, o, l, "reference", "referenceMarker", "referenceString")(u);
  }
  function o(u) {
    return r.parser.defined.includes(re(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? n(u) : t(u);
  }
  function l(u) {
    return t(u);
  }
}
function ho(e2, n, t) {
  return r;
  function r(o) {
    return e2.enter("reference"), e2.enter("referenceMarker"), e2.consume(o), e2.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e2.enter("referenceMarker"), e2.consume(o), e2.exit("referenceMarker"), e2.exit("reference"), n) : t(o);
  }
}
const po = { name: "labelStartImage", resolveAll: Rt.resolveAll, tokenize: mo };
function mo(e2, n, t) {
  const r = this;
  return i;
  function i(u) {
    return e2.enter("labelImage"), e2.enter("labelImageMarker"), e2.consume(u), e2.exit("labelImageMarker"), o;
  }
  function o(u) {
    return u === 91 ? (e2.enter("labelMarker"), e2.consume(u), e2.exit("labelMarker"), e2.exit("labelImage"), l) : t(u);
  }
  function l(u) {
    return u === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(u) : n(u);
  }
}
const go = { name: "labelStartLink", resolveAll: Rt.resolveAll, tokenize: xo };
function xo(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return e2.enter("labelLink"), e2.enter("labelMarker"), e2.consume(l), e2.exit("labelMarker"), e2.exit("labelLink"), o;
  }
  function o(l) {
    return l === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? t(l) : n(l);
  }
}
const lt = { name: "lineEnding", tokenize: ko };
function ko(e2, n) {
  return t;
  function t(r) {
    return e2.enter("lineEnding"), e2.consume(r), e2.exit("lineEnding"), R(e2, n, "linePrefix");
  }
}
const Ve = { name: "thematicBreak", tokenize: yo };
function yo(e2, n, t) {
  let r = 0, i;
  return o;
  function o(s) {
    return e2.enter("thematicBreak"), l(s);
  }
  function l(s) {
    return i = s, u(s);
  }
  function u(s) {
    return s === i ? (e2.enter("thematicBreakSequence"), a(s)) : r >= 3 && (s === null || z(s)) ? (e2.exit("thematicBreak"), n(s)) : t(s);
  }
  function a(s) {
    return s === i ? (e2.consume(s), r++, a) : (e2.exit("thematicBreakSequence"), D(s) ? R(e2, u, "whitespace")(s) : u(s));
  }
}
const Y = { continuation: { tokenize: Co }, exit: Io, name: "list", tokenize: So }, bo = { partial: true, tokenize: Ao }, wo = { partial: true, tokenize: Eo };
function So(e2, n, t) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0, l = 0;
  return u;
  function u(h) {
    const d = r.containerState.type || (h === 42 || h === 43 || h === 45 ? "listUnordered" : "listOrdered");
    if (d === "listUnordered" ? !r.containerState.marker || h === r.containerState.marker : yt(h)) {
      if (r.containerState.type || (r.containerState.type = d, e2.enter(d, { _container: true })), d === "listUnordered") return e2.enter("listItemPrefix"), h === 42 || h === 45 ? e2.check(Ve, t, s)(h) : s(h);
      if (!r.interrupt || h === 49) return e2.enter("listItemPrefix"), e2.enter("listItemValue"), a(h);
    }
    return t(h);
  }
  function a(h) {
    return yt(h) && ++l < 10 ? (e2.consume(h), a) : (!r.interrupt || l < 2) && (r.containerState.marker ? h === r.containerState.marker : h === 41 || h === 46) ? (e2.exit("listItemValue"), s(h)) : t(h);
  }
  function s(h) {
    return e2.enter("listItemMarker"), e2.consume(h), e2.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || h, e2.check(Oe, r.interrupt ? t : f, e2.attempt(bo, p, c));
  }
  function f(h) {
    return r.containerState.initialBlankLine = true, o++, p(h);
  }
  function c(h) {
    return D(h) ? (e2.enter("listItemPrefixWhitespace"), e2.consume(h), e2.exit("listItemPrefixWhitespace"), p) : t(h);
  }
  function p(h) {
    return r.containerState.size = o + r.sliceSerialize(e2.exit("listItemPrefix"), true).length, n(h);
  }
}
function Co(e2, n, t) {
  const r = this;
  return r.containerState._closeFlow = void 0, e2.check(Oe, i, o);
  function i(u) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, R(e2, n, "listItemIndent", r.containerState.size + 1)(u);
  }
  function o(u) {
    return r.containerState.furtherBlankLines || !D(u) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, l(u)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e2.attempt(wo, n, l)(u));
  }
  function l(u) {
    return r.containerState._closeFlow = true, r.interrupt = void 0, R(e2, e2.attempt(Y, n, t), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(u);
  }
}
function Eo(e2, n, t) {
  const r = this;
  return R(e2, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], true).length === r.containerState.size ? n(o) : t(o);
  }
}
function Io(e2) {
  e2.exit(this.containerState.type);
}
function Ao(e2, n, t) {
  const r = this;
  return R(e2, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return !D(o) && l && l[1].type === "listItemPrefixWhitespace" ? n(o) : t(o);
  }
}
const hn = { name: "setextUnderline", resolveTo: To, tokenize: zo };
function To(e2, n) {
  let t = e2.length, r, i, o;
  for (; t--; ) if (e2[t][0] === "enter") {
    if (e2[t][1].type === "content") {
      r = t;
      break;
    }
    e2[t][1].type === "paragraph" && (i = t);
  } else e2[t][1].type === "content" && e2.splice(t, 1), !o && e2[t][1].type === "definition" && (o = t);
  const l = { type: "setextHeading", start: { ...e2[r][1].start }, end: { ...e2[e2.length - 1][1].end } };
  return e2[i][1].type = "setextHeadingText", o ? (e2.splice(i, 0, ["enter", l, n]), e2.splice(o + 1, 0, ["exit", e2[r][1], n]), e2[r][1].end = { ...e2[o][1].end }) : e2[r][1] = l, e2.push(["exit", l, n]), e2;
}
function zo(e2, n, t) {
  const r = this;
  let i;
  return o;
  function o(s) {
    let f = r.events.length, c;
    for (; f--; ) if (r.events[f][1].type !== "lineEnding" && r.events[f][1].type !== "linePrefix" && r.events[f][1].type !== "content") {
      c = r.events[f][1].type === "paragraph";
      break;
    }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (e2.enter("setextHeadingLine"), i = s, l(s)) : t(s);
  }
  function l(s) {
    return e2.enter("setextHeadingLineSequence"), u(s);
  }
  function u(s) {
    return s === i ? (e2.consume(s), u) : (e2.exit("setextHeadingLineSequence"), D(s) ? R(e2, a, "lineSuffix")(s) : a(s));
  }
  function a(s) {
    return s === null || z(s) ? (e2.exit("setextHeadingLine"), n(s)) : t(s);
  }
}
const Fo = { tokenize: _o };
function _o(e2) {
  const n = this, t = e2.attempt(Oe, r, e2.attempt(this.parser.constructs.flowInitial, i, R(e2, e2.attempt(this.parser.constructs.flow, i, e2.attempt(Rl, i)), "linePrefix")));
  return t;
  function r(o) {
    if (o === null) {
      e2.consume(o);
      return;
    }
    return e2.enter("lineEndingBlank"), e2.consume(o), e2.exit("lineEndingBlank"), n.currentConstruct = void 0, t;
  }
  function i(o) {
    if (o === null) {
      e2.consume(o);
      return;
    }
    return e2.enter("lineEnding"), e2.consume(o), e2.exit("lineEnding"), n.currentConstruct = void 0, t;
  }
}
const Po = { resolveAll: or() }, Do = lr("string"), Lo = lr("text");
function lr(e2) {
  return { resolveAll: or(e2 === "text" ? Ro : void 0), tokenize: n };
  function n(t) {
    const r = this, i = this.parser.constructs[e2], o = t.attempt(i, l, u);
    return l;
    function l(f) {
      return s(f) ? o(f) : u(f);
    }
    function u(f) {
      if (f === null) {
        t.consume(f);
        return;
      }
      return t.enter("data"), t.consume(f), a;
    }
    function a(f) {
      return s(f) ? (t.exit("data"), o(f)) : (t.consume(f), a);
    }
    function s(f) {
      if (f === null) return true;
      const c = i[f];
      let p = -1;
      if (c) for (; ++p < c.length; ) {
        const h = c[p];
        if (!h.previous || h.previous.call(r, r.previous)) return true;
      }
      return false;
    }
  }
}
function or(e2) {
  return n;
  function n(t, r) {
    let i = -1, o;
    for (; ++i <= t.length; ) o === void 0 ? t[i] && t[i][1].type === "data" && (o = i, i++) : (!t[i] || t[i][1].type !== "data") && (i !== o + 2 && (t[o][1].end = t[i - 1][1].end, t.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e2 ? e2(t, r) : t;
  }
}
function Ro(e2, n) {
  let t = 0;
  for (; ++t <= e2.length; ) if ((t === e2.length || e2[t][1].type === "lineEnding") && e2[t - 1][1].type === "data") {
    const r = e2[t - 1][1], i = n.sliceStream(r);
    let o = i.length, l = -1, u = 0, a;
    for (; o--; ) {
      const s = i[o];
      if (typeof s == "string") {
        for (l = s.length; s.charCodeAt(l - 1) === 32; ) u++, l--;
        if (l) break;
        l = -1;
      } else if (s === -2) a = true, u++;
      else if (s !== -1) {
        o++;
        break;
      }
    }
    if (n._contentTypeTextTrailing && t === e2.length && (u = 0), u) {
      const s = { type: t === e2.length || a || u < 2 ? "lineSuffix" : "hardBreakTrailing", start: { _bufferIndex: o ? l : r.start._bufferIndex + l, _index: r.start._index + o, line: r.end.line, column: r.end.column - u, offset: r.end.offset - u }, end: { ...r.end } };
      r.end = { ...s.start }, r.start.offset === r.end.offset ? Object.assign(r, s) : (e2.splice(t, 0, ["enter", s, n], ["exit", s, n]), t += 2);
    }
    t++;
  }
  return e2;
}
const No = { 42: Y, 43: Y, 45: Y, 48: Y, 49: Y, 50: Y, 51: Y, 52: Y, 53: Y, 54: Y, 55: Y, 56: Y, 57: Y, 62: Kn }, Oo = { 91: Bl }, vo = { [-2]: it, [-1]: it, 32: it }, Mo = { 35: Ul, 42: Ve, 45: [hn, Ve], 60: Yl, 61: hn, 95: Ve, 96: cn, 126: cn }, Bo = { 38: er, 92: Zn }, jo = { [-5]: lt, [-4]: lt, [-3]: lt, 33: po, 38: er, 42: bt, 60: [gl, no], 91: go, 92: [Vl, Zn], 93: Rt, 95: bt, 96: zl }, $o = { null: [bt, Po] }, Ho = { null: [42, 95] }, Vo = { null: [] }, qo = Object.freeze(Object.defineProperty({ __proto__: null, attentionMarkers: Ho, contentInitial: Oo, disable: Vo, document: No, flow: Mo, flowInitial: vo, insideSpan: $o, string: Bo, text: jo }, Symbol.toStringTag, { value: "Module" }));
function Uo(e2, n, t) {
  let r = { _bufferIndex: -1, _index: 0, line: t && t.line || 1, column: t && t.column || 1, offset: t && t.offset || 0 };
  const i = {}, o = [];
  let l = [], u = [];
  const a = { attempt: N(P), check: N(w), consume: I, enter: C, exit: _, interrupt: N(w, { interrupt: true }) }, s = { code: null, containerState: {}, defineSkip: y, events: [], now: d, parser: e2, previous: null, sliceSerialize: p, sliceStream: h, write: c };
  let f = n.tokenize.call(s, a);
  return n.resolveAll && o.push(n), s;
  function c(A) {
    return l = K(l, A), S(), l[l.length - 1] !== null ? [] : ($(n, 0), s.events = Ke(o, s.events, s), s.events);
  }
  function p(A, T) {
    return Qo(h(A), T);
  }
  function h(A) {
    return Wo(l, A);
  }
  function d() {
    const { _bufferIndex: A, _index: T, line: M, column: H, offset: O } = r;
    return { _bufferIndex: A, _index: T, line: M, column: H, offset: O };
  }
  function y(A) {
    i[A.line] = A.column, k();
  }
  function S() {
    let A;
    for (; r._index < l.length; ) {
      const T = l[r._index];
      if (typeof T == "string") for (A = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === A && r._bufferIndex < T.length; ) x(T.charCodeAt(r._bufferIndex));
      else x(T);
    }
  }
  function x(A) {
    f = f(A);
  }
  function I(A) {
    z(A) ? (r.line++, r.column = 1, r.offset += A === -3 ? 2 : 1, k()) : A !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === l[r._index].length && (r._bufferIndex = -1, r._index++)), s.previous = A;
  }
  function C(A, T) {
    const M = T || {};
    return M.type = A, M.start = d(), s.events.push(["enter", M, s]), u.push(M), M;
  }
  function _(A) {
    const T = u.pop();
    return T.end = d(), s.events.push(["exit", T, s]), T;
  }
  function P(A, T) {
    $(A, T.from);
  }
  function w(A, T) {
    T.restore();
  }
  function N(A, T) {
    return M;
    function M(H, O, U) {
      let V, Z, oe, m;
      return Array.isArray(H) ? ue(H) : "tokenize" in H ? ue([H]) : ee(H);
      function ee(q) {
        return Ae;
        function Ae(fe) {
          const ye = fe !== null && q[fe], be = fe !== null && q.null, Me = [...Array.isArray(ye) ? ye : ye ? [ye] : [], ...Array.isArray(be) ? be : be ? [be] : []];
          return ue(Me)(fe);
        }
      }
      function ue(q) {
        return V = q, Z = 0, q.length === 0 ? U : g(q[Z]);
      }
      function g(q) {
        return Ae;
        function Ae(fe) {
          return m = v(), oe = q, q.partial || (s.currentConstruct = q), q.name && s.parser.constructs.disable.null.includes(q.name) ? me() : q.tokenize.call(T ? Object.assign(Object.create(s), T) : s, a, te, me)(fe);
        }
      }
      function te(q) {
        return A(oe, m), O;
      }
      function me(q) {
        return m.restore(), ++Z < V.length ? g(V[Z]) : U;
      }
    }
  }
  function $(A, T) {
    A.resolveAll && !o.includes(A) && o.push(A), A.resolve && J(s.events, T, s.events.length - T, A.resolve(s.events.slice(T), s)), A.resolveTo && (s.events = A.resolveTo(s.events, s));
  }
  function v() {
    const A = d(), T = s.previous, M = s.currentConstruct, H = s.events.length, O = Array.from(u);
    return { from: H, restore: U };
    function U() {
      r = A, s.previous = T, s.currentConstruct = M, s.events.length = H, u = O, k();
    }
  }
  function k() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Wo(e2, n) {
  const t = n.start._index, r = n.start._bufferIndex, i = n.end._index, o = n.end._bufferIndex;
  let l;
  if (t === i) l = [e2[t].slice(r, o)];
  else {
    if (l = e2.slice(t, i), r > -1) {
      const u = l[0];
      typeof u == "string" ? l[0] = u.slice(r) : l.shift();
    }
    o > 0 && l.push(e2[i].slice(0, o));
  }
  return l;
}
function Qo(e2, n) {
  let t = -1;
  const r = [];
  let i;
  for (; ++t < e2.length; ) {
    const o = e2[t];
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
function Go(e2) {
  const r = { constructs: Xn([qo, ...(e2 || {}).extensions || []]), content: i(al), defined: [], document: i(cl), flow: i(Fo), lazy: {}, string: i(Do), text: i(Lo) };
  return r;
  function i(o) {
    return l;
    function l(u) {
      return Uo(r, o, u);
    }
  }
}
function Yo(e2) {
  for (; !tr(e2); ) ;
  return e2;
}
const pn = /[\0\t\n\r]/g;
function Xo() {
  let e2 = 1, n = "", t = true, r;
  return i;
  function i(o, l, u) {
    const a = [];
    let s, f, c, p, h;
    for (o = n + (typeof o == "string" ? o.toString() : new TextDecoder(l || void 0).decode(o)), c = 0, n = "", t && (o.charCodeAt(0) === 65279 && c++, t = void 0); c < o.length; ) {
      if (pn.lastIndex = c, s = pn.exec(o), p = s && s.index !== void 0 ? s.index : o.length, h = o.charCodeAt(p), !s) {
        n = o.slice(c);
        break;
      }
      if (h === 10 && c === p && r) a.push(-3), r = void 0;
      else switch (r && (a.push(-5), r = void 0), c < p && (a.push(o.slice(c, p)), e2 += p - c), h) {
        case 0: {
          a.push(65533), e2++;
          break;
        }
        case 9: {
          for (f = Math.ceil(e2 / 4) * 4, a.push(-2); e2++ < f; ) a.push(-1);
          break;
        }
        case 10: {
          a.push(-4), e2 = 1;
          break;
        }
        default:
          r = true, e2 = 1;
      }
      c = p + 1;
    }
    return u && (r && a.push(-5), n && a.push(n), a.push(null)), a;
  }
}
const Jo = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Ko(e2) {
  return e2.replace(Jo, Zo);
}
function Zo(e2, n, t) {
  if (n) return n;
  if (t.charCodeAt(0) === 35) {
    const i = t.charCodeAt(1), o = i === 120 || i === 88;
    return Jn(t.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return Tt(t) || e2;
}
const ur = {}.hasOwnProperty;
function eu(e2, n, t) {
  return typeof n != "string" && (t = n, n = void 0), tu(t)(Yo(Go(t).document().write(Xo()(e2, n, true))));
}
function tu(e2) {
  const n = { transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: { autolink: o(Qt), autolinkProtocol: v, autolinkEmail: v, atxHeading: o(qt), blockQuote: o(be), characterEscape: v, characterReference: v, codeFenced: o(Me), codeFencedFenceInfo: l, codeFencedFenceMeta: l, codeIndented: o(Me, l), codeText: o($r, l), codeTextData: v, data: v, codeFlowValue: v, definition: o(Hr), definitionDestinationString: l, definitionLabelString: l, definitionTitleString: l, emphasis: o(Vr), hardBreakEscape: o(Ut), hardBreakTrailing: o(Ut), htmlFlow: o(Wt, l), htmlFlowData: v, htmlText: o(Wt, l), htmlTextData: v, image: o(qr), label: l, link: o(Qt), listItem: o(Ur), listItemValue: p, listOrdered: o(Gt, c), listUnordered: o(Gt), paragraph: o(Wr), reference: g, referenceString: l, resourceDestinationString: l, resourceTitleString: l, setextHeading: o(qt), strong: o(Qr), thematicBreak: o(Yr) }, exit: { atxHeading: a(), atxHeadingSequence: P, autolink: a(), autolinkEmail: ye, autolinkProtocol: fe, blockQuote: a(), characterEscapeValue: k, characterReferenceMarkerHexadecimal: me, characterReferenceMarkerNumeric: me, characterReferenceValue: q, characterReference: Ae, codeFenced: a(S), codeFencedFence: y, codeFencedFenceInfo: h, codeFencedFenceMeta: d, codeFlowValue: k, codeIndented: a(x), codeText: a(O), codeTextData: k, data: k, definition: a(), definitionDestinationString: _, definitionLabelString: I, definitionTitleString: C, emphasis: a(), hardBreakEscape: a(T), hardBreakTrailing: a(T), htmlFlow: a(M), htmlFlowData: k, htmlText: a(H), htmlTextData: k, image: a(V), label: oe, labelText: Z, lineEnding: A, link: a(U), listItem: a(), listOrdered: a(), listUnordered: a(), paragraph: a(), referenceString: te, resourceDestinationString: m, resourceTitleString: ee, resource: ue, setextHeading: a($), setextHeadingLineSequence: N, setextHeadingText: w, strong: a(), thematicBreak: a() } };
  ar(n, (e2 || {}).mdastExtensions || []);
  const t = {};
  return r;
  function r(b) {
    let E = { type: "root", children: [] };
    const F = { stack: [E], tokenStack: [], config: n, enter: u, exit: s, buffer: l, resume: f, data: t }, L = [];
    let B = -1;
    for (; ++B < b.length; ) if (b[B][1].type === "listOrdered" || b[B][1].type === "listUnordered") if (b[B][0] === "enter") L.push(B);
    else {
      const ne = L.pop();
      B = i(b, ne, B);
    }
    for (B = -1; ++B < b.length; ) {
      const ne = n[b[B][0]];
      ur.call(ne, b[B][1].type) && ne[b[B][1].type].call(Object.assign({ sliceSerialize: b[B][2].sliceSerialize }, F), b[B][1]);
    }
    if (F.tokenStack.length > 0) {
      const ne = F.tokenStack[F.tokenStack.length - 1];
      (ne[1] || mn).call(F, void 0, ne[0]);
    }
    for (E.position = { start: he(b.length > 0 ? b[0][1].start : { line: 1, column: 1, offset: 0 }), end: he(b.length > 0 ? b[b.length - 2][1].end : { line: 1, column: 1, offset: 0 }) }, B = -1; ++B < n.transforms.length; ) E = n.transforms[B](E) || E;
    return E;
  }
  function i(b, E, F) {
    let L = E - 1, B = -1, ne = false, ge, ae, Te, ze;
    for (; ++L <= F; ) {
      const X = b[L];
      switch (X[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          X[0] === "enter" ? B++ : B--, ze = void 0;
          break;
        }
        case "lineEndingBlank": {
          X[0] === "enter" && (ge && !ze && !B && !Te && (Te = L), ze = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ze = void 0;
      }
      if (!B && X[0] === "enter" && X[1].type === "listItemPrefix" || B === -1 && X[0] === "exit" && (X[1].type === "listUnordered" || X[1].type === "listOrdered")) {
        if (ge) {
          let we = L;
          for (ae = void 0; we--; ) {
            const se = b[we];
            if (se[1].type === "lineEnding" || se[1].type === "lineEndingBlank") {
              if (se[0] === "exit") continue;
              ae && (b[ae][1].type = "lineEndingBlank", ne = true), se[1].type = "lineEnding", ae = we;
            } else if (!(se[1].type === "linePrefix" || se[1].type === "blockQuotePrefix" || se[1].type === "blockQuotePrefixWhitespace" || se[1].type === "blockQuoteMarker" || se[1].type === "listItemIndent")) break;
          }
          Te && (!ae || Te < ae) && (ge._spread = true), ge.end = Object.assign({}, ae ? b[ae][1].start : X[1].end), b.splice(ae || L, 0, ["exit", ge, X[2]]), L++, F++;
        }
        if (X[1].type === "listItemPrefix") {
          const we = { type: "listItem", _spread: false, start: Object.assign({}, X[1].start), end: void 0 };
          ge = we, b.splice(L, 0, ["enter", we, X[2]]), L++, F++, Te = void 0, ze = true;
        }
      }
    }
    return b[E][1]._spread = ne, F;
  }
  function o(b, E) {
    return F;
    function F(L) {
      u.call(this, b(L), L), E && E.call(this, L);
    }
  }
  function l() {
    this.stack.push({ type: "fragment", children: [] });
  }
  function u(b, E, F) {
    this.stack[this.stack.length - 1].children.push(b), this.stack.push(b), this.tokenStack.push([E, F || void 0]), b.position = { start: he(E.start), end: void 0 };
  }
  function a(b) {
    return E;
    function E(F) {
      b && b.call(this, F), s.call(this, F);
    }
  }
  function s(b, E) {
    const F = this.stack.pop(), L = this.tokenStack.pop();
    if (L) L[0].type !== b.type && (E ? E.call(this, b, L[0]) : (L[1] || mn).call(this, b, L[0]));
    else throw new Error("Cannot close `" + b.type + "` (" + Pe({ start: b.start, end: b.end }) + "): it\u2019s not open");
    F.position.end = he(b.end);
  }
  function f() {
    return Lt(this.stack.pop());
  }
  function c() {
    this.data.expectingFirstListItemValue = true;
  }
  function p(b) {
    if (this.data.expectingFirstListItemValue) {
      const E = this.stack[this.stack.length - 2];
      E.start = Number.parseInt(this.sliceSerialize(b), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function h() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.lang = b;
  }
  function d() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.meta = b;
  }
  function y() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
  }
  function S() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function x() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = b.replace(/(\r?\n|\r)$/g, "");
  }
  function I(b) {
    const E = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = E, F.identifier = re(this.sliceSerialize(b)).toLowerCase();
  }
  function C() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = b;
  }
  function _() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = b;
  }
  function P(b) {
    const E = this.stack[this.stack.length - 1];
    if (!E.depth) {
      const F = this.sliceSerialize(b).length;
      E.depth = F;
    }
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = true;
  }
  function N(b) {
    const E = this.stack[this.stack.length - 1];
    E.depth = this.sliceSerialize(b).codePointAt(0) === 61 ? 1 : 2;
  }
  function $() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function v(b) {
    const F = this.stack[this.stack.length - 1].children;
    let L = F[F.length - 1];
    (!L || L.type !== "text") && (L = Gr(), L.position = { start: he(b.start), end: void 0 }, F.push(L)), this.stack.push(L);
  }
  function k(b) {
    const E = this.stack.pop();
    E.value += this.sliceSerialize(b), E.position.end = he(b.end);
  }
  function A(b) {
    const E = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const F = E.children[E.children.length - 1];
      F.position.end = he(b.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && n.canContainEols.includes(E.type) && (v.call(this, b), k.call(this, b));
  }
  function T() {
    this.data.atHardBreak = true;
  }
  function M() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = b;
  }
  function H() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = b;
  }
  function O() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.value = b;
  }
  function U() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      b.type += "Reference", b.referenceType = E, delete b.url, delete b.title;
    } else delete b.identifier, delete b.label;
    this.data.referenceType = void 0;
  }
  function V() {
    const b = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const E = this.data.referenceType || "shortcut";
      b.type += "Reference", b.referenceType = E, delete b.url, delete b.title;
    } else delete b.identifier, delete b.label;
    this.data.referenceType = void 0;
  }
  function Z(b) {
    const E = this.sliceSerialize(b), F = this.stack[this.stack.length - 2];
    F.label = Ko(E), F.identifier = re(E).toLowerCase();
  }
  function oe() {
    const b = this.stack[this.stack.length - 1], E = this.resume(), F = this.stack[this.stack.length - 1];
    if (this.data.inReference = true, F.type === "link") {
      const L = b.children;
      F.children = L;
    } else F.alt = E;
  }
  function m() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.url = b;
  }
  function ee() {
    const b = this.resume(), E = this.stack[this.stack.length - 1];
    E.title = b;
  }
  function ue() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function te(b) {
    const E = this.resume(), F = this.stack[this.stack.length - 1];
    F.label = E, F.identifier = re(this.sliceSerialize(b)).toLowerCase(), this.data.referenceType = "full";
  }
  function me(b) {
    this.data.characterReferenceType = b.type;
  }
  function q(b) {
    const E = this.sliceSerialize(b), F = this.data.characterReferenceType;
    let L;
    F ? (L = Jn(E, F === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : L = Tt(E);
    const B = this.stack[this.stack.length - 1];
    B.value += L;
  }
  function Ae(b) {
    const E = this.stack.pop();
    E.position.end = he(b.end);
  }
  function fe(b) {
    k.call(this, b);
    const E = this.stack[this.stack.length - 1];
    E.url = this.sliceSerialize(b);
  }
  function ye(b) {
    k.call(this, b);
    const E = this.stack[this.stack.length - 1];
    E.url = "mailto:" + this.sliceSerialize(b);
  }
  function be() {
    return { type: "blockquote", children: [] };
  }
  function Me() {
    return { type: "code", lang: null, meta: null, value: "" };
  }
  function $r() {
    return { type: "inlineCode", value: "" };
  }
  function Hr() {
    return { type: "definition", identifier: "", label: null, title: null, url: "" };
  }
  function Vr() {
    return { type: "emphasis", children: [] };
  }
  function qt() {
    return { type: "heading", depth: 0, children: [] };
  }
  function Ut() {
    return { type: "break" };
  }
  function Wt() {
    return { type: "html", value: "" };
  }
  function qr() {
    return { type: "image", title: null, url: "", alt: null };
  }
  function Qt() {
    return { type: "link", title: null, url: "", children: [] };
  }
  function Gt(b) {
    return { type: "list", ordered: b.type === "listOrdered", start: null, spread: b._spread, children: [] };
  }
  function Ur(b) {
    return { type: "listItem", spread: b._spread, checked: null, children: [] };
  }
  function Wr() {
    return { type: "paragraph", children: [] };
  }
  function Qr() {
    return { type: "strong", children: [] };
  }
  function Gr() {
    return { type: "text", value: "" };
  }
  function Yr() {
    return { type: "thematicBreak" };
  }
}
function he(e2) {
  return { line: e2.line, column: e2.column, offset: e2.offset };
}
function ar(e2, n) {
  let t = -1;
  for (; ++t < n.length; ) {
    const r = n[t];
    Array.isArray(r) ? ar(e2, r) : nu(e2, r);
  }
}
function nu(e2, n) {
  let t;
  for (t in n) if (ur.call(n, t)) switch (t) {
    case "canContainEols": {
      const r = n[t];
      r && e2[t].push(...r);
      break;
    }
    case "transforms": {
      const r = n[t];
      r && e2[t].push(...r);
      break;
    }
    case "enter":
    case "exit": {
      const r = n[t];
      r && Object.assign(e2[t], r);
      break;
    }
  }
}
function mn(e2, n) {
  throw e2 ? new Error("Cannot close `" + e2.type + "` (" + Pe({ start: e2.start, end: e2.end }) + "): a different token (`" + n.type + "`, " + Pe({ start: n.start, end: n.end }) + ") is open") : new Error("Cannot close document, a token (`" + n.type + "`, " + Pe({ start: n.start, end: n.end }) + ") is still open");
}
function ru(e2) {
  const n = this;
  n.parser = t;
  function t(r) {
    return eu(r, { ...n.data("settings"), ...e2, extensions: n.data("micromarkExtensions") || [], mdastExtensions: n.data("fromMarkdownExtensions") || [] });
  }
}
function iu(e2, n) {
  const t = { type: "element", tagName: "blockquote", properties: {}, children: e2.wrap(e2.all(n), true) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function lu(e2, n) {
  const t = { type: "element", tagName: "br", properties: {}, children: [] };
  return e2.patch(n, t), [e2.applyData(n, t), { type: "text", value: `
` }];
}
function ou(e2, n) {
  const t = n.value ? n.value + `
` : "", r = {}, i = n.lang ? n.lang.split(/\s+/) : [];
  i.length > 0 && (r.className = ["language-" + i[0]]);
  let o = { type: "element", tagName: "code", properties: r, children: [{ type: "text", value: t }] };
  return n.meta && (o.data = { meta: n.meta }), e2.patch(n, o), o = e2.applyData(n, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e2.patch(n, o), o;
}
function uu(e2, n) {
  const t = { type: "element", tagName: "del", properties: {}, children: e2.all(n) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function au(e2, n) {
  const t = { type: "element", tagName: "em", properties: {}, children: e2.all(n) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function su(e2, n) {
  const t = typeof e2.options.clobberPrefix == "string" ? e2.options.clobberPrefix : "user-content-", r = String(n.identifier).toUpperCase(), i = Ie(r.toLowerCase()), o = e2.footnoteOrder.indexOf(r);
  let l, u = e2.footnoteCounts.get(r);
  u === void 0 ? (u = 0, e2.footnoteOrder.push(r), l = e2.footnoteOrder.length) : l = o + 1, u += 1, e2.footnoteCounts.set(r, u);
  const a = { type: "element", tagName: "a", properties: { href: "#" + t + "fn-" + i, id: t + "fnref-" + i + (u > 1 ? "-" + u : ""), dataFootnoteRef: true, ariaDescribedBy: ["footnote-label"] }, children: [{ type: "text", value: String(l) }] };
  e2.patch(n, a);
  const s = { type: "element", tagName: "sup", properties: {}, children: [a] };
  return e2.patch(n, s), e2.applyData(n, s);
}
function cu(e2, n) {
  const t = { type: "element", tagName: "h" + n.depth, properties: {}, children: e2.all(n) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function fu(e2, n) {
  if (e2.options.allowDangerousHtml) {
    const t = { type: "raw", value: n.value };
    return e2.patch(n, t), e2.applyData(n, t);
  }
}
function sr(e2, n) {
  const t = n.referenceType;
  let r = "]";
  if (t === "collapsed" ? r += "[]" : t === "full" && (r += "[" + (n.label || n.identifier) + "]"), n.type === "imageReference") return [{ type: "text", value: "![" + n.alt + r }];
  const i = e2.all(n), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const l = i[i.length - 1];
  return l && l.type === "text" ? l.value += r : i.push({ type: "text", value: r }), i;
}
function hu(e2, n) {
  const t = String(n.identifier).toUpperCase(), r = e2.definitionById.get(t);
  if (!r) return sr(e2, n);
  const i = { src: Ie(r.url || ""), alt: n.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e2.patch(n, o), e2.applyData(n, o);
}
function pu(e2, n) {
  const t = { src: Ie(n.url) };
  n.alt !== null && n.alt !== void 0 && (t.alt = n.alt), n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "img", properties: t, children: [] };
  return e2.patch(n, r), e2.applyData(n, r);
}
function mu(e2, n) {
  const t = { type: "text", value: n.value.replace(/\r?\n|\r/g, " ") };
  e2.patch(n, t);
  const r = { type: "element", tagName: "code", properties: {}, children: [t] };
  return e2.patch(n, r), e2.applyData(n, r);
}
function gu(e2, n) {
  const t = String(n.identifier).toUpperCase(), r = e2.definitionById.get(t);
  if (!r) return sr(e2, n);
  const i = { href: Ie(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "a", properties: i, children: e2.all(n) };
  return e2.patch(n, o), e2.applyData(n, o);
}
function du(e2, n) {
  const t = { href: Ie(n.url) };
  n.title !== null && n.title !== void 0 && (t.title = n.title);
  const r = { type: "element", tagName: "a", properties: t, children: e2.all(n) };
  return e2.patch(n, r), e2.applyData(n, r);
}
function xu(e2, n, t) {
  const r = e2.all(n), i = t ? ku(t) : cr(n), o = {}, l = [];
  if (typeof n.checked == "boolean") {
    const f = r[0];
    let c;
    f && f.type === "element" && f.tagName === "p" ? c = f : (c = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(c)), c.children.length > 0 && c.children.unshift({ type: "text", value: " " }), c.children.unshift({ type: "element", tagName: "input", properties: { type: "checkbox", checked: n.checked, disabled: true }, children: [] }), o.className = ["task-list-item"];
  }
  let u = -1;
  for (; ++u < r.length; ) {
    const f = r[u];
    (i || u !== 0 || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` }), f.type === "element" && f.tagName === "p" && !i ? l.push(...f.children) : l.push(f);
  }
  const a = r[r.length - 1];
  a && (i || a.type !== "element" || a.tagName !== "p") && l.push({ type: "text", value: `
` });
  const s = { type: "element", tagName: "li", properties: o, children: l };
  return e2.patch(n, s), e2.applyData(n, s);
}
function ku(e2) {
  let n = false;
  if (e2.type === "list") {
    n = e2.spread || false;
    const t = e2.children;
    let r = -1;
    for (; !n && ++r < t.length; ) n = cr(t[r]);
  }
  return n;
}
function cr(e2) {
  const n = e2.spread;
  return n ?? e2.children.length > 1;
}
function yu(e2, n) {
  const t = {}, r = e2.all(n);
  let i = -1;
  for (typeof n.start == "number" && n.start !== 1 && (t.start = n.start); ++i < r.length; ) {
    const l = r[i];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      t.className = ["contains-task-list"];
      break;
    }
  }
  const o = { type: "element", tagName: n.ordered ? "ol" : "ul", properties: t, children: e2.wrap(r, true) };
  return e2.patch(n, o), e2.applyData(n, o);
}
function bu(e2, n) {
  const t = { type: "element", tagName: "p", properties: {}, children: e2.all(n) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function wu(e2, n) {
  const t = { type: "root", children: e2.wrap(e2.all(n)) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function Su(e2, n) {
  const t = { type: "element", tagName: "strong", properties: {}, children: e2.all(n) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function Cu(e2, n) {
  const t = e2.all(n), r = t.shift(), i = [];
  if (r) {
    const l = { type: "element", tagName: "thead", properties: {}, children: e2.wrap([r], true) };
    e2.patch(n.children[0], l), i.push(l);
  }
  if (t.length > 0) {
    const l = { type: "element", tagName: "tbody", properties: {}, children: e2.wrap(t, true) }, u = Ft(n.children[1]), a = Vn(n.children[n.children.length - 1]);
    u && a && (l.position = { start: u, end: a }), i.push(l);
  }
  const o = { type: "element", tagName: "table", properties: {}, children: e2.wrap(i, true) };
  return e2.patch(n, o), e2.applyData(n, o);
}
function Eu(e2, n, t) {
  const r = t ? t.children : void 0, o = (r ? r.indexOf(n) : 1) === 0 ? "th" : "td", l = t && t.type === "table" ? t.align : void 0, u = l ? l.length : n.children.length;
  let a = -1;
  const s = [];
  for (; ++a < u; ) {
    const c = n.children[a], p = {}, h = l ? l[a] : void 0;
    h && (p.align = h);
    let d = { type: "element", tagName: o, properties: p, children: [] };
    c && (d.children = e2.all(c), e2.patch(c, d), d = e2.applyData(c, d)), s.push(d);
  }
  const f = { type: "element", tagName: "tr", properties: {}, children: e2.wrap(s, true) };
  return e2.patch(n, f), e2.applyData(n, f);
}
function Iu(e2, n) {
  const t = { type: "element", tagName: "td", properties: {}, children: e2.all(n) };
  return e2.patch(n, t), e2.applyData(n, t);
}
const gn = 9, dn = 32;
function Au(e2) {
  const n = String(e2), t = /\r?\n|\r/g;
  let r = t.exec(n), i = 0;
  const o = [];
  for (; r; ) o.push(xn(n.slice(i, r.index), i > 0, true), r[0]), i = r.index + r[0].length, r = t.exec(n);
  return o.push(xn(n.slice(i), i > 0, false)), o.join("");
}
function xn(e2, n, t) {
  let r = 0, i = e2.length;
  if (n) {
    let o = e2.codePointAt(r);
    for (; o === gn || o === dn; ) r++, o = e2.codePointAt(r);
  }
  if (t) {
    let o = e2.codePointAt(i - 1);
    for (; o === gn || o === dn; ) i--, o = e2.codePointAt(i - 1);
  }
  return i > r ? e2.slice(r, i) : "";
}
function Tu(e2, n) {
  const t = { type: "text", value: Au(String(n.value)) };
  return e2.patch(n, t), e2.applyData(n, t);
}
function zu(e2, n) {
  const t = { type: "element", tagName: "hr", properties: {}, children: [] };
  return e2.patch(n, t), e2.applyData(n, t);
}
const Fu = { blockquote: iu, break: lu, code: ou, delete: uu, emphasis: au, footnoteReference: su, heading: cu, html: fu, imageReference: hu, image: pu, inlineCode: mu, linkReference: gu, link: du, listItem: xu, list: yu, paragraph: bu, root: wu, strong: Su, table: Cu, tableCell: Iu, tableRow: Eu, text: Tu, thematicBreak: zu, toml: Be, yaml: Be, definition: Be, footnoteDefinition: Be };
function Be() {
}
const fr = -1, Ze = 0, Le = 1, Qe = 2, Nt = 3, Ot = 4, vt = 5, Mt = 6, hr = 7, pr = 8, kn = typeof self == "object" ? self : globalThis, _u = (e2, n) => {
  const t = (i, o) => (e2.set(o, i), i), r = (i) => {
    if (e2.has(i)) return e2.get(i);
    const [o, l] = n[i];
    switch (o) {
      case Ze:
      case fr:
        return t(l, i);
      case Le: {
        const u = t([], i);
        for (const a of l) u.push(r(a));
        return u;
      }
      case Qe: {
        const u = t({}, i);
        for (const [a, s] of l) u[r(a)] = r(s);
        return u;
      }
      case Nt:
        return t(new Date(l), i);
      case Ot: {
        const { source: u, flags: a } = l;
        return t(new RegExp(u, a), i);
      }
      case vt: {
        const u = t(/* @__PURE__ */ new Map(), i);
        for (const [a, s] of l) u.set(r(a), r(s));
        return u;
      }
      case Mt: {
        const u = t(/* @__PURE__ */ new Set(), i);
        for (const a of l) u.add(r(a));
        return u;
      }
      case hr: {
        const { name: u, message: a } = l;
        return t(new kn[u](a), i);
      }
      case pr:
        return t(BigInt(l), i);
      case "BigInt":
        return t(Object(BigInt(l)), i);
      case "ArrayBuffer":
        return t(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: u } = new Uint8Array(l);
        return t(new DataView(u), l);
      }
    }
    return t(new kn[o](l), i);
  };
  return r;
}, yn = (e2) => _u(/* @__PURE__ */ new Map(), e2)(0), Se = "", { toString: Pu } = {}, { keys: Du } = Object, _e = (e2) => {
  const n = typeof e2;
  if (n !== "object" || !e2) return [Ze, n];
  const t = Pu.call(e2).slice(8, -1);
  switch (t) {
    case "Array":
      return [Le, Se];
    case "Object":
      return [Qe, Se];
    case "Date":
      return [Nt, Se];
    case "RegExp":
      return [Ot, Se];
    case "Map":
      return [vt, Se];
    case "Set":
      return [Mt, Se];
    case "DataView":
      return [Le, t];
  }
  return t.includes("Array") ? [Le, t] : t.includes("Error") ? [hr, t] : [Qe, t];
}, je = ([e2, n]) => e2 === Ze && (n === "function" || n === "symbol"), Lu = (e2, n, t, r) => {
  const i = (l, u) => {
    const a = r.push(l) - 1;
    return t.set(u, a), a;
  }, o = (l) => {
    if (t.has(l)) return t.get(l);
    let [u, a] = _e(l);
    switch (u) {
      case Ze: {
        let f = l;
        switch (a) {
          case "bigint":
            u = pr, f = l.toString();
            break;
          case "function":
          case "symbol":
            if (e2) throw new TypeError("unable to serialize " + a);
            f = null;
            break;
          case "undefined":
            return i([fr], l);
        }
        return i([u, f], l);
      }
      case Le: {
        if (a) {
          let p = l;
          return a === "DataView" ? p = new Uint8Array(l.buffer) : a === "ArrayBuffer" && (p = new Uint8Array(l)), i([a, [...p]], l);
        }
        const f = [], c = i([u, f], l);
        for (const p of l) f.push(o(p));
        return c;
      }
      case Qe: {
        if (a) switch (a) {
          case "BigInt":
            return i([a, l.toString()], l);
          case "Boolean":
          case "Number":
          case "String":
            return i([a, l.valueOf()], l);
        }
        if (n && "toJSON" in l) return o(l.toJSON());
        const f = [], c = i([u, f], l);
        for (const p of Du(l)) (e2 || !je(_e(l[p]))) && f.push([o(p), o(l[p])]);
        return c;
      }
      case Nt:
        return i([u, l.toISOString()], l);
      case Ot: {
        const { source: f, flags: c } = l;
        return i([u, { source: f, flags: c }], l);
      }
      case vt: {
        const f = [], c = i([u, f], l);
        for (const [p, h] of l) (e2 || !(je(_e(p)) || je(_e(h)))) && f.push([o(p), o(h)]);
        return c;
      }
      case Mt: {
        const f = [], c = i([u, f], l);
        for (const p of l) (e2 || !je(_e(p))) && f.push(o(p));
        return c;
      }
    }
    const { message: s } = l;
    return i([u, { name: a, message: s }], l);
  };
  return o;
}, bn = (e2, { json: n, lossy: t } = {}) => {
  const r = [];
  return Lu(!(n || t), !!n, /* @__PURE__ */ new Map(), r)(e2), r;
}, Ge = typeof structuredClone == "function" ? (e2, n) => n && ("json" in n || "lossy" in n) ? yn(bn(e2, n)) : structuredClone(e2) : (e2, n) => yn(bn(e2, n));
function Ru(e2, n) {
  const t = [{ type: "text", value: "\u21A9" }];
  return n > 1 && t.push({ type: "element", tagName: "sup", properties: {}, children: [{ type: "text", value: String(n) }] }), t;
}
function Nu(e2, n) {
  return "Back to reference " + (e2 + 1) + (n > 1 ? "-" + n : "");
}
function Ou(e2) {
  const n = typeof e2.options.clobberPrefix == "string" ? e2.options.clobberPrefix : "user-content-", t = e2.options.footnoteBackContent || Ru, r = e2.options.footnoteBackLabel || Nu, i = e2.options.footnoteLabel || "Footnotes", o = e2.options.footnoteLabelTagName || "h2", l = e2.options.footnoteLabelProperties || { className: ["sr-only"] }, u = [];
  let a = -1;
  for (; ++a < e2.footnoteOrder.length; ) {
    const s = e2.footnoteById.get(e2.footnoteOrder[a]);
    if (!s) continue;
    const f = e2.all(s), c = String(s.identifier).toUpperCase(), p = Ie(c.toLowerCase());
    let h = 0;
    const d = [], y = e2.footnoteCounts.get(c);
    for (; y !== void 0 && ++h <= y; ) {
      d.length > 0 && d.push({ type: "text", value: " " });
      let I = typeof t == "string" ? t : t(a, h);
      typeof I == "string" && (I = { type: "text", value: I }), d.push({ type: "element", tagName: "a", properties: { href: "#" + n + "fnref-" + p + (h > 1 ? "-" + h : ""), dataFootnoteBackref: "", ariaLabel: typeof r == "string" ? r : r(a, h), className: ["data-footnote-backref"] }, children: Array.isArray(I) ? I : [I] });
    }
    const S = f[f.length - 1];
    if (S && S.type === "element" && S.tagName === "p") {
      const I = S.children[S.children.length - 1];
      I && I.type === "text" ? I.value += " " : S.children.push({ type: "text", value: " " }), S.children.push(...d);
    } else f.push(...d);
    const x = { type: "element", tagName: "li", properties: { id: n + "fn-" + p }, children: e2.wrap(f, true) };
    e2.patch(s, x), u.push(x);
  }
  if (u.length !== 0) return { type: "element", tagName: "section", properties: { dataFootnotes: true, className: ["footnotes"] }, children: [{ type: "element", tagName: o, properties: { ...Ge(l), id: "footnote-label" }, children: [{ type: "text", value: i }] }, { type: "text", value: `
` }, { type: "element", tagName: "ol", properties: {}, children: e2.wrap(u, true) }, { type: "text", value: `
` }] };
}
const et = function(e2) {
  if (e2 == null) return ju;
  if (typeof e2 == "function") return tt(e2);
  if (typeof e2 == "object") return Array.isArray(e2) ? vu(e2) : Mu(e2);
  if (typeof e2 == "string") return Bu(e2);
  throw new Error("Expected function, string, or object as test");
};
function vu(e2) {
  const n = [];
  let t = -1;
  for (; ++t < e2.length; ) n[t] = et(e2[t]);
  return tt(r);
  function r(...i) {
    let o = -1;
    for (; ++o < n.length; ) if (n[o].apply(this, i)) return true;
    return false;
  }
}
function Mu(e2) {
  const n = e2;
  return tt(t);
  function t(r) {
    const i = r;
    let o;
    for (o in e2) if (i[o] !== n[o]) return false;
    return true;
  }
}
function Bu(e2) {
  return tt(n);
  function n(t) {
    return t && t.type === e2;
  }
}
function tt(e2) {
  return n;
  function n(t, r, i) {
    return !!($u(t) && e2.call(this, t, typeof r == "number" ? r : void 0, i || void 0));
  }
}
function ju() {
  return true;
}
function $u(e2) {
  return e2 !== null && typeof e2 == "object" && "type" in e2;
}
const mr = [], Hu = true, wt = false, Vu = "skip";
function gr(e2, n, t, r) {
  let i;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : i = n;
  const o = et(i), l = r ? -1 : 1;
  u(e2, void 0, [])();
  function u(a, s, f) {
    const c = a && typeof a == "object" ? a : {};
    if (typeof c.type == "string") {
      const h = typeof c.tagName == "string" ? c.tagName : typeof c.name == "string" ? c.name : void 0;
      Object.defineProperty(p, "name", { value: "node (" + (a.type + (h ? "<" + h + ">" : "")) + ")" });
    }
    return p;
    function p() {
      let h = mr, d, y, S;
      if ((!n || o(a, s, f[f.length - 1] || void 0)) && (h = qu(t(a, f)), h[0] === wt)) return h;
      if ("children" in a && a.children) {
        const x = a;
        if (x.children && h[0] !== Vu) for (y = (r ? x.children.length : -1) + l, S = f.concat(x); y > -1 && y < x.children.length; ) {
          const I = x.children[y];
          if (d = u(I, y, S)(), d[0] === wt) return d;
          y = typeof d[1] == "number" ? d[1] : y + l;
        }
      }
      return h;
    }
  }
}
function qu(e2) {
  return Array.isArray(e2) ? e2 : typeof e2 == "number" ? [Hu, e2] : e2 == null ? mr : [e2];
}
function Bt(e2, n, t, r) {
  let i, o, l;
  typeof n == "function" && typeof t != "function" ? (o = void 0, l = n, i = t) : (o = n, l = t, i = r), gr(e2, o, u, i);
  function u(a, s) {
    const f = s[s.length - 1], c = f ? f.children.indexOf(a) : void 0;
    return l(a, c, f);
  }
}
const St = {}.hasOwnProperty, Uu = {};
function Wu(e2, n) {
  const t = n || Uu, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = { ...Fu, ...t.handlers }, u = { all: s, applyData: Gu, definitionById: r, footnoteById: i, footnoteCounts: o, footnoteOrder: [], handlers: l, one: a, options: t, patch: Qu, wrap: Xu };
  return Bt(e2, function(f) {
    if (f.type === "definition" || f.type === "footnoteDefinition") {
      const c = f.type === "definition" ? r : i, p = String(f.identifier).toUpperCase();
      c.has(p) || c.set(p, f);
    }
  }), u;
  function a(f, c) {
    const p = f.type, h = u.handlers[p];
    if (St.call(u.handlers, p) && h) return h(u, f, c);
    if (u.options.passThrough && u.options.passThrough.includes(p)) {
      if ("children" in f) {
        const { children: y, ...S } = f, x = Ge(S);
        return x.children = u.all(f), x;
      }
      return Ge(f);
    }
    return (u.options.unknownHandler || Yu)(u, f, c);
  }
  function s(f) {
    const c = [];
    if ("children" in f) {
      const p = f.children;
      let h = -1;
      for (; ++h < p.length; ) {
        const d = u.one(p[h], f);
        if (d) {
          if (h && p[h - 1].type === "break" && (!Array.isArray(d) && d.type === "text" && (d.value = wn(d.value)), !Array.isArray(d) && d.type === "element")) {
            const y = d.children[0];
            y && y.type === "text" && (y.value = wn(y.value));
          }
          Array.isArray(d) ? c.push(...d) : c.push(d);
        }
      }
    }
    return c;
  }
}
function Qu(e2, n) {
  e2.position && (n.position = Ri(e2));
}
function Gu(e2, n) {
  let t = n;
  if (e2 && e2.data) {
    const r = e2.data.hName, i = e2.data.hChildren, o = e2.data.hProperties;
    if (typeof r == "string") if (t.type === "element") t.tagName = r;
    else {
      const l = "children" in t ? t.children : [t];
      t = { type: "element", tagName: r, properties: {}, children: l };
    }
    t.type === "element" && o && Object.assign(t.properties, Ge(o)), "children" in t && t.children && i !== null && i !== void 0 && (t.children = i);
  }
  return t;
}
function Yu(e2, n) {
  const t = n.data || {}, r = "value" in n && !(St.call(t, "hProperties") || St.call(t, "hChildren")) ? { type: "text", value: n.value } : { type: "element", tagName: "div", properties: {}, children: e2.all(n) };
  return e2.patch(n, r), e2.applyData(n, r);
}
function Xu(e2, n) {
  const t = [];
  let r = -1;
  for (n && t.push({ type: "text", value: `
` }); ++r < e2.length; ) r && t.push({ type: "text", value: `
` }), t.push(e2[r]);
  return n && e2.length > 0 && t.push({ type: "text", value: `
` }), t;
}
function wn(e2) {
  let n = 0, t = e2.charCodeAt(n);
  for (; t === 9 || t === 32; ) n++, t = e2.charCodeAt(n);
  return e2.slice(n);
}
function Sn(e2, n) {
  const t = Wu(e2, n), r = t.one(e2, void 0), i = Ou(t), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Ju(e2, n) {
  return e2 && "run" in e2 ? async function(t, r) {
    const i = Sn(t, { file: r, ...n });
    await e2.run(i, r);
  } : function(t, r) {
    return Sn(t, { file: r, ...e2 || n });
  };
}
function Cn(e2) {
  if (e2) throw e2;
}
var qe = Object.prototype.hasOwnProperty, dr = Object.prototype.toString, En = Object.defineProperty, In = Object.getOwnPropertyDescriptor, An = function(n) {
  return typeof Array.isArray == "function" ? Array.isArray(n) : dr.call(n) === "[object Array]";
}, Tn = function(n) {
  if (!n || dr.call(n) !== "[object Object]") return false;
  var t = qe.call(n, "constructor"), r = n.constructor && n.constructor.prototype && qe.call(n.constructor.prototype, "isPrototypeOf");
  if (n.constructor && !t && !r) return false;
  var i;
  for (i in n) ;
  return typeof i > "u" || qe.call(n, i);
}, zn = function(n, t) {
  En && t.name === "__proto__" ? En(n, t.name, { enumerable: true, configurable: true, value: t.newValue, writable: true }) : n[t.name] = t.newValue;
}, Fn = function(n, t) {
  if (t === "__proto__") if (qe.call(n, t)) {
    if (In) return In(n, t).value;
  } else return;
  return n[t];
}, Ku = function e() {
  var n, t, r, i, o, l, u = arguments[0], a = 1, s = arguments.length, f = false;
  for (typeof u == "boolean" && (f = u, u = arguments[1] || {}, a = 2), (u == null || typeof u != "object" && typeof u != "function") && (u = {}); a < s; ++a) if (n = arguments[a], n != null) for (t in n) r = Fn(u, t), i = Fn(n, t), u !== i && (f && i && (Tn(i) || (o = An(i))) ? (o ? (o = false, l = r && An(r) ? r : []) : l = r && Tn(r) ? r : {}, zn(u, { name: t, newValue: e(f, l, i) })) : typeof i < "u" && zn(u, { name: t, newValue: i }));
  return u;
};
const ot = Hn(Ku);
function Ct(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  const n = Object.getPrototypeOf(e2);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e2) && !(Symbol.iterator in e2);
}
function Zu() {
  const e2 = [], n = { run: t, use: r };
  return n;
  function t(...i) {
    let o = -1;
    const l = i.pop();
    if (typeof l != "function") throw new TypeError("Expected function as last argument, not " + l);
    u(null, ...i);
    function u(a, ...s) {
      const f = e2[++o];
      let c = -1;
      if (a) {
        l(a);
        return;
      }
      for (; ++c < i.length; ) (s[c] === null || s[c] === void 0) && (s[c] = i[c]);
      i = s, f ? ea(f, u)(...s) : l(null, ...s);
    }
  }
  function r(i) {
    if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
    return e2.push(i), n;
  }
}
function ea(e2, n) {
  let t;
  return r;
  function r(...l) {
    const u = e2.length > l.length;
    let a;
    u && l.push(i);
    try {
      a = e2.apply(this, l);
    } catch (s) {
      const f = s;
      if (u && t) throw f;
      return i(f);
    }
    u || (a && a.then && typeof a.then == "function" ? a.then(o, i) : a instanceof Error ? i(a) : o(a));
  }
  function i(l, ...u) {
    t || (t = true, n(l, ...u));
  }
  function o(l) {
    i(null, l);
  }
}
const ie = { basename: ta, dirname: na, extname: ra, join: ia, sep: "/" };
function ta(e2, n) {
  if (n !== void 0 && typeof n != "string") throw new TypeError('"ext" argument must be a string');
  ve(e2);
  let t = 0, r = -1, i = e2.length, o;
  if (n === void 0 || n.length === 0 || n.length > e2.length) {
    for (; i--; ) if (e2.codePointAt(i) === 47) {
      if (o) {
        t = i + 1;
        break;
      }
    } else r < 0 && (o = true, r = i + 1);
    return r < 0 ? "" : e2.slice(t, r);
  }
  if (n === e2) return "";
  let l = -1, u = n.length - 1;
  for (; i--; ) if (e2.codePointAt(i) === 47) {
    if (o) {
      t = i + 1;
      break;
    }
  } else l < 0 && (o = true, l = i + 1), u > -1 && (e2.codePointAt(i) === n.codePointAt(u--) ? u < 0 && (r = i) : (u = -1, r = l));
  return t === r ? r = l : r < 0 && (r = e2.length), e2.slice(t, r);
}
function na(e2) {
  if (ve(e2), e2.length === 0) return ".";
  let n = -1, t = e2.length, r;
  for (; --t; ) if (e2.codePointAt(t) === 47) {
    if (r) {
      n = t;
      break;
    }
  } else r || (r = true);
  return n < 0 ? e2.codePointAt(0) === 47 ? "/" : "." : n === 1 && e2.codePointAt(0) === 47 ? "//" : e2.slice(0, n);
}
function ra(e2) {
  ve(e2);
  let n = e2.length, t = -1, r = 0, i = -1, o = 0, l;
  for (; n--; ) {
    const u = e2.codePointAt(n);
    if (u === 47) {
      if (l) {
        r = n + 1;
        break;
      }
      continue;
    }
    t < 0 && (l = true, t = n + 1), u === 46 ? i < 0 ? i = n : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || t < 0 || o === 0 || o === 1 && i === t - 1 && i === r + 1 ? "" : e2.slice(i, t);
}
function ia(...e2) {
  let n = -1, t;
  for (; ++n < e2.length; ) ve(e2[n]), e2[n] && (t = t === void 0 ? e2[n] : t + "/" + e2[n]);
  return t === void 0 ? "." : la(t);
}
function la(e2) {
  ve(e2);
  const n = e2.codePointAt(0) === 47;
  let t = oa(e2, !n);
  return t.length === 0 && !n && (t = "."), t.length > 0 && e2.codePointAt(e2.length - 1) === 47 && (t += "/"), n ? "/" + t : t;
}
function oa(e2, n) {
  let t = "", r = 0, i = -1, o = 0, l = -1, u, a;
  for (; ++l <= e2.length; ) {
    if (l < e2.length) u = e2.codePointAt(l);
    else {
      if (u === 47) break;
      u = 47;
    }
    if (u === 47) {
      if (!(i === l - 1 || o === 1)) if (i !== l - 1 && o === 2) {
        if (t.length < 2 || r !== 2 || t.codePointAt(t.length - 1) !== 46 || t.codePointAt(t.length - 2) !== 46) {
          if (t.length > 2) {
            if (a = t.lastIndexOf("/"), a !== t.length - 1) {
              a < 0 ? (t = "", r = 0) : (t = t.slice(0, a), r = t.length - 1 - t.lastIndexOf("/")), i = l, o = 0;
              continue;
            }
          } else if (t.length > 0) {
            t = "", r = 0, i = l, o = 0;
            continue;
          }
        }
        n && (t = t.length > 0 ? t + "/.." : "..", r = 2);
      } else t.length > 0 ? t += "/" + e2.slice(i + 1, l) : t = e2.slice(i + 1, l), r = l - i - 1;
      i = l, o = 0;
    } else u === 46 && o > -1 ? o++ : o = -1;
  }
  return t;
}
function ve(e2) {
  if (typeof e2 != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e2));
}
const ua = { cwd: aa };
function aa() {
  return "/";
}
function Et(e2) {
  return !!(e2 !== null && typeof e2 == "object" && "href" in e2 && e2.href && "protocol" in e2 && e2.protocol && e2.auth === void 0);
}
function sa(e2) {
  if (typeof e2 == "string") e2 = new URL(e2);
  else if (!Et(e2)) {
    const n = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e2 + "`");
    throw n.code = "ERR_INVALID_ARG_TYPE", n;
  }
  if (e2.protocol !== "file:") {
    const n = new TypeError("The URL must be of scheme file");
    throw n.code = "ERR_INVALID_URL_SCHEME", n;
  }
  return ca(e2);
}
function ca(e2) {
  if (e2.hostname !== "") {
    const r = new TypeError('File URL host must be "localhost" or empty on darwin');
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const n = e2.pathname;
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
const ut = ["history", "path", "basename", "stem", "extname", "dirname"];
class xr {
  constructor(n) {
    let t;
    n ? Et(n) ? t = { path: n } : typeof n == "string" || fa(n) ? t = { value: n } : t = n : t = {}, this.cwd = "cwd" in t ? "" : ua.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < ut.length; ) {
      const o = ut[r];
      o in t && t[o] !== void 0 && t[o] !== null && (this[o] = o === "history" ? [...t[o]] : t[o]);
    }
    let i;
    for (i in t) ut.includes(i) || (this[i] = t[i]);
  }
  get basename() {
    return typeof this.path == "string" ? ie.basename(this.path) : void 0;
  }
  set basename(n) {
    st(n, "basename"), at(n, "basename"), this.path = ie.join(this.dirname || "", n);
  }
  get dirname() {
    return typeof this.path == "string" ? ie.dirname(this.path) : void 0;
  }
  set dirname(n) {
    _n(this.basename, "dirname"), this.path = ie.join(n || "", this.basename);
  }
  get extname() {
    return typeof this.path == "string" ? ie.extname(this.path) : void 0;
  }
  set extname(n) {
    if (at(n, "extname"), _n(this.dirname, "extname"), n) {
      if (n.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
      if (n.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ie.join(this.dirname, this.stem + (n || ""));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(n) {
    Et(n) && (n = sa(n)), st(n, "path"), this.path !== n && this.history.push(n);
  }
  get stem() {
    return typeof this.path == "string" ? ie.basename(this.path, this.extname) : void 0;
  }
  set stem(n) {
    st(n, "stem"), at(n, "stem"), this.path = ie.join(this.dirname || "", n + (this.extname || ""));
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
    const i = new Q(n, t, r);
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = false, this.messages.push(i), i;
  }
  toString(n) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(n || void 0).decode(this.value);
  }
}
function at(e2, n) {
  if (e2 && e2.includes(ie.sep)) throw new Error("`" + n + "` cannot be a path: did not expect `" + ie.sep + "`");
}
function st(e2, n) {
  if (!e2) throw new Error("`" + n + "` cannot be empty");
}
function _n(e2, n) {
  if (!e2) throw new Error("Setting `" + n + "` requires `path` to be set too");
}
function fa(e2) {
  return !!(e2 && typeof e2 == "object" && "byteLength" in e2 && "byteOffset" in e2);
}
const ha = function(e2) {
  const r = this.constructor.prototype, i = r[e2], o = function() {
    return i.apply(o, arguments);
  };
  return Object.setPrototypeOf(o, r), o;
}, pa = {}.hasOwnProperty;
class jt extends ha {
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Zu();
  }
  copy() {
    const n = new jt();
    let t = -1;
    for (; ++t < this.attachers.length; ) {
      const r = this.attachers[t];
      n.use(...r);
    }
    return n.data(ot(true, {}, this.namespace)), n;
  }
  data(n, t) {
    return typeof n == "string" ? arguments.length === 2 ? (ht("data", this.frozen), this.namespace[n] = t, this) : pa.call(this.namespace, n) && this.namespace[n] || void 0 : n ? (ht("data", this.frozen), this.namespace = n, this) : this.namespace;
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
    const t = $e(n), r = this.parser || this.Parser;
    return ct("parse", r), r(String(t), t);
  }
  process(n, t) {
    const r = this;
    return this.freeze(), ct("process", this.parser || this.Parser), ft("process", this.compiler || this.Compiler), t ? i(void 0, t) : new Promise(i);
    function i(o, l) {
      const u = $e(n), a = r.parse(u);
      r.run(a, u, function(f, c, p) {
        if (f || !c || !p) return s(f);
        const h = c, d = r.stringify(h, p);
        da(d) ? p.value = d : p.result = d, s(f, p);
      });
      function s(f, c) {
        f || !c ? l(f) : o ? o(c) : t(void 0, c);
      }
    }
  }
  processSync(n) {
    let t = false, r;
    return this.freeze(), ct("processSync", this.parser || this.Parser), ft("processSync", this.compiler || this.Compiler), this.process(n, i), Dn("processSync", "process", t), r;
    function i(o, l) {
      t = true, Cn(o), r = l;
    }
  }
  run(n, t, r) {
    Pn(n), this.freeze();
    const i = this.transformers;
    return !r && typeof t == "function" && (r = t, t = void 0), r ? o(void 0, r) : new Promise(o);
    function o(l, u) {
      const a = $e(t);
      i.run(n, a, s);
      function s(f, c, p) {
        const h = c || n;
        f ? u(f) : l ? l(h) : r(void 0, h, p);
      }
    }
  }
  runSync(n, t) {
    let r = false, i;
    return this.run(n, t, o), Dn("runSync", "run", r), i;
    function o(l, u) {
      Cn(l), i = u, r = true;
    }
  }
  stringify(n, t) {
    this.freeze();
    const r = $e(t), i = this.compiler || this.Compiler;
    return ft("stringify", i), Pn(n), i(n, r);
  }
  use(n, ...t) {
    const r = this.attachers, i = this.namespace;
    if (ht("use", this.frozen), n != null) if (typeof n == "function") a(n, t);
    else if (typeof n == "object") Array.isArray(n) ? u(n) : l(n);
    else throw new TypeError("Expected usable value, not `" + n + "`");
    return this;
    function o(s) {
      if (typeof s == "function") a(s, []);
      else if (typeof s == "object") if (Array.isArray(s)) {
        const [f, ...c] = s;
        a(f, c);
      } else l(s);
      else throw new TypeError("Expected usable value, not `" + s + "`");
    }
    function l(s) {
      if (!("plugins" in s) && !("settings" in s)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
      u(s.plugins), s.settings && (i.settings = ot(true, i.settings, s.settings));
    }
    function u(s) {
      let f = -1;
      if (s != null) if (Array.isArray(s)) for (; ++f < s.length; ) {
        const c = s[f];
        o(c);
      }
      else throw new TypeError("Expected a list of plugins, not `" + s + "`");
    }
    function a(s, f) {
      let c = -1, p = -1;
      for (; ++c < r.length; ) if (r[c][0] === s) {
        p = c;
        break;
      }
      if (p === -1) r.push([s, ...f]);
      else if (f.length > 0) {
        let [h, ...d] = f;
        const y = r[p][1];
        Ct(y) && Ct(h) && (h = ot(true, y, h)), r[p] = [s, h, ...d];
      }
    }
  }
}
const ma = new jt().freeze();
function ct(e2, n) {
  if (typeof n != "function") throw new TypeError("Cannot `" + e2 + "` without `parser`");
}
function ft(e2, n) {
  if (typeof n != "function") throw new TypeError("Cannot `" + e2 + "` without `compiler`");
}
function ht(e2, n) {
  if (n) throw new Error("Cannot call `" + e2 + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function Pn(e2) {
  if (!Ct(e2) || typeof e2.type != "string") throw new TypeError("Expected node, got `" + e2 + "`");
}
function Dn(e2, n, t) {
  if (!t) throw new Error("`" + e2 + "` finished async. Use `" + n + "` instead");
}
function $e(e2) {
  return ga(e2) ? e2 : new xr(e2);
}
function ga(e2) {
  return !!(e2 && typeof e2 == "object" && "message" in e2 && "messages" in e2);
}
function da(e2) {
  return typeof e2 == "string" || xa(e2);
}
function xa(e2) {
  return !!(e2 && typeof e2 == "object" && "byteLength" in e2 && "byteOffset" in e2);
}
const ka = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Ln = [], Rn = { allowDangerousHtml: true }, ya = /^(https?|ircs?|mailto|xmpp)$/i, ba = [{ from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" }, { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" }, { from: "allowNode", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "allowElement" }, { from: "allowedTypes", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "allowedElements" }, { from: "disallowedTypes", id: "replace-allownode-allowedtypes-and-disallowedtypes", to: "disallowedElements" }, { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" }, { from: "includeElementIndex", id: "#remove-includeelementindex" }, { from: "includeNodeIndex", id: "change-includenodeindex-to-includeelementindex" }, { from: "linkTarget", id: "remove-linktarget" }, { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" }, { from: "rawSourcePos", id: "#remove-rawsourcepos" }, { from: "renderers", id: "change-renderers-to-components", to: "components" }, { from: "source", id: "change-source-to-children", to: "children" }, { from: "sourcePos", id: "#remove-sourcepos" }, { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" }, { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }];
function Oc(e2) {
  const n = wa(e2), t = Sa(e2);
  return Ca(n.runSync(n.parse(t), t), e2);
}
function wa(e2) {
  const n = e2.rehypePlugins || Ln, t = e2.remarkPlugins || Ln, r = e2.remarkRehypeOptions ? { ...e2.remarkRehypeOptions, ...Rn } : Rn;
  return ma().use(ru).use(t).use(Ju, r).use(n);
}
function Sa(e2) {
  const n = e2.children || "", t = new xr();
  return typeof n == "string" && (t.value = n), t;
}
function Ca(e2, n) {
  const t = n.allowedElements, r = n.allowElement, i = n.components, o = n.disallowedElements, l = n.skipHtml, u = n.unwrapDisallowed, a = n.urlTransform || Ea;
  for (const f of ba) Object.hasOwn(n, f.from) && ("" + f.from + (f.to ? "use `" + f.to + "` instead" : "remove it") + ka + f.id, void 0);
  return n.className && (e2 = { type: "element", tagName: "div", properties: { className: n.className }, children: e2.type === "root" ? e2.children : [e2] }), Bt(e2, s), Bi(e2, { Fragment: nt.Fragment, components: i, ignoreInvalidStyle: true, jsx: nt.jsx, jsxs: nt.jsxs, passKeys: true, passNode: true });
  function s(f, c, p) {
    if (f.type === "raw" && p && typeof c == "number") return l ? p.children.splice(c, 1) : p.children[c] = { type: "text", value: f.value }, c;
    if (f.type === "element") {
      let h;
      for (h in rt) if (Object.hasOwn(rt, h) && Object.hasOwn(f.properties, h)) {
        const d = f.properties[h], y = rt[h];
        (y === null || y.includes(f.tagName)) && (f.properties[h] = a(String(d || ""), h, f));
      }
    }
    if (f.type === "element") {
      let h = t ? !t.includes(f.tagName) : o ? o.includes(f.tagName) : false;
      if (!h && r && typeof c == "number" && (h = !r(f, c, p)), h && p && typeof c == "number") return u && f.children ? p.children.splice(c, 1, ...f.children) : p.children.splice(c, 1), c;
    }
  }
}
function Ea(e2) {
  const n = e2.indexOf(":"), t = e2.indexOf("?"), r = e2.indexOf("#"), i = e2.indexOf("/");
  return n === -1 || i !== -1 && n > i || t !== -1 && n > t || r !== -1 && n > r || ya.test(e2.slice(0, n)) ? e2 : "";
}
function Nn(e2, n) {
  const t = String(e2);
  if (typeof n != "string") throw new TypeError("Expected character");
  let r = 0, i = t.indexOf(n);
  for (; i !== -1; ) r++, i = t.indexOf(n, i + n.length);
  return r;
}
function Ia(e2) {
  if (typeof e2 != "string") throw new TypeError("Expected a string");
  return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Aa(e2, n, t) {
  const i = et((t || {}).ignore || []), o = Ta(n);
  let l = -1;
  for (; ++l < o.length; ) gr(e2, "text", u);
  function u(s, f) {
    let c = -1, p;
    for (; ++c < f.length; ) {
      const h = f[c], d = p ? p.children : void 0;
      if (i(h, d ? d.indexOf(h) : void 0, p)) return;
      p = h;
    }
    if (p) return a(s, f);
  }
  function a(s, f) {
    const c = f[f.length - 1], p = o[l][0], h = o[l][1];
    let d = 0;
    const S = c.children.indexOf(s);
    let x = false, I = [];
    p.lastIndex = 0;
    let C = p.exec(s.value);
    for (; C; ) {
      const _ = C.index, P = { index: C.index, input: C.input, stack: [...f, s] };
      let w = h(...C, P);
      if (typeof w == "string" && (w = w.length > 0 ? { type: "text", value: w } : void 0), w === false ? p.lastIndex = _ + 1 : (d !== _ && I.push({ type: "text", value: s.value.slice(d, _) }), Array.isArray(w) ? I.push(...w) : w && I.push(w), d = _ + C[0].length, x = true), !p.global) break;
      C = p.exec(s.value);
    }
    return x ? (d < s.value.length && I.push({ type: "text", value: s.value.slice(d) }), c.children.splice(S, 1, ...I)) : I = [s], S + I.length;
  }
}
function Ta(e2) {
  const n = [];
  if (!Array.isArray(e2)) throw new TypeError("Expected find and replace tuple or list of tuples");
  const t = !e2[0] || Array.isArray(e2[0]) ? e2 : [e2];
  let r = -1;
  for (; ++r < t.length; ) {
    const i = t[r];
    n.push([za(i[0]), Fa(i[1])]);
  }
  return n;
}
function za(e2) {
  return typeof e2 == "string" ? new RegExp(Ia(e2), "g") : e2;
}
function Fa(e2) {
  return typeof e2 == "function" ? e2 : function() {
    return e2;
  };
}
const pt = "phrasing", mt = ["autolink", "link", "image", "label"];
function _a() {
  return { transforms: [va], enter: { literalAutolink: Da, literalAutolinkEmail: gt, literalAutolinkHttp: gt, literalAutolinkWww: gt }, exit: { literalAutolink: Oa, literalAutolinkEmail: Na, literalAutolinkHttp: La, literalAutolinkWww: Ra } };
}
function Pa() {
  return { unsafe: [{ character: "@", before: "[+\\-.\\w]", after: "[\\-.\\w]", inConstruct: pt, notInConstruct: mt }, { character: ".", before: "[Ww]", after: "[\\-.\\w]", inConstruct: pt, notInConstruct: mt }, { character: ":", before: "[ps]", after: "\\/", inConstruct: pt, notInConstruct: mt }] };
}
function Da(e2) {
  this.enter({ type: "link", title: null, url: "", children: [] }, e2);
}
function gt(e2) {
  this.config.enter.autolinkProtocol.call(this, e2);
}
function La(e2) {
  this.config.exit.autolinkProtocol.call(this, e2);
}
function Ra(e2) {
  this.config.exit.data.call(this, e2);
  const n = this.stack[this.stack.length - 1];
  n.type, n.url = "http://" + this.sliceSerialize(e2);
}
function Na(e2) {
  this.config.exit.autolinkEmail.call(this, e2);
}
function Oa(e2) {
  this.exit(e2);
}
function va(e2) {
  Aa(e2, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ma], [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), Ba]], { ignore: ["link", "linkReference"] });
}
function Ma(e2, n, t, r, i) {
  let o = "";
  if (!kr(i) || (/^w/i.test(n) && (t = n + t, n = "", o = "http://"), !ja(t))) return false;
  const l = $a(t + r);
  if (!l[0]) return false;
  const u = { type: "link", title: null, url: o + n + l[0], children: [{ type: "text", value: n + l[0] }] };
  return l[1] ? [u, { type: "text", value: l[1] }] : u;
}
function Ba(e2, n, t, r) {
  return !kr(r, true) || /[-\d_]$/.test(t) ? false : { type: "link", title: null, url: "mailto:" + n + "@" + t, children: [{ type: "text", value: n + "@" + t }] };
}
function ja(e2) {
  const n = e2.split(".");
  return !(n.length < 2 || n[n.length - 1] && (/_/.test(n[n.length - 1]) || !/[a-zA-Z\d]/.test(n[n.length - 1])) || n[n.length - 2] && (/_/.test(n[n.length - 2]) || !/[a-zA-Z\d]/.test(n[n.length - 2])));
}
function $a(e2) {
  const n = /[!"&'),.:;<>?\]}]+$/.exec(e2);
  if (!n) return [e2, void 0];
  e2 = e2.slice(0, n.index);
  let t = n[0], r = t.indexOf(")");
  const i = Nn(e2, "(");
  let o = Nn(e2, ")");
  for (; r !== -1 && i > o; ) e2 += t.slice(0, r + 1), t = t.slice(r + 1), r = t.indexOf(")"), o++;
  return [e2, t];
}
function kr(e2, n) {
  const t = e2.input.charCodeAt(e2.index - 1);
  return (e2.index === 0 || ke(t) || Je(t)) && (!n || t !== 47);
}
yr.peek = Xa;
function Ha() {
  this.buffer();
}
function Va(e2) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, e2);
}
function qa() {
  this.buffer();
}
function Ua(e2) {
  this.enter({ type: "footnoteDefinition", identifier: "", label: "", children: [] }, e2);
}
function Wa(e2) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.identifier = re(this.sliceSerialize(e2)).toLowerCase(), t.label = n;
}
function Qa(e2) {
  this.exit(e2);
}
function Ga(e2) {
  const n = this.resume(), t = this.stack[this.stack.length - 1];
  t.type, t.identifier = re(this.sliceSerialize(e2)).toLowerCase(), t.label = n;
}
function Ya(e2) {
  this.exit(e2);
}
function Xa() {
  return "[";
}
function yr(e2, n, t, r) {
  const i = t.createTracker(r);
  let o = i.move("[^");
  const l = t.enter("footnoteReference"), u = t.enter("reference");
  return o += i.move(t.safe(t.associationId(e2), { after: "]", before: o })), u(), l(), o += i.move("]"), o;
}
function Ja() {
  return { enter: { gfmFootnoteCallString: Ha, gfmFootnoteCall: Va, gfmFootnoteDefinitionLabelString: qa, gfmFootnoteDefinition: Ua }, exit: { gfmFootnoteCallString: Wa, gfmFootnoteCall: Qa, gfmFootnoteDefinitionLabelString: Ga, gfmFootnoteDefinition: Ya } };
}
function Ka(e2) {
  let n = false;
  return e2 && e2.firstLineBlank && (n = true), { handlers: { footnoteDefinition: t, footnoteReference: yr }, unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }] };
  function t(r, i, o, l) {
    const u = o.createTracker(l);
    let a = u.move("[^");
    const s = o.enter("footnoteDefinition"), f = o.enter("label");
    return a += u.move(o.safe(o.associationId(r), { before: a, after: "]" })), f(), a += u.move("]:"), r.children && r.children.length > 0 && (u.shift(4), a += u.move((n ? `
` : " ") + o.indentLines(o.containerFlow(r, u.current()), n ? br : Za))), s(), a;
  }
}
function Za(e2, n, t) {
  return n === 0 ? e2 : br(e2, n, t);
}
function br(e2, n, t) {
  return (t ? "" : "    ") + e2;
}
const es = ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"];
wr.peek = ls;
function ts() {
  return { canContainEols: ["delete"], enter: { strikethrough: rs }, exit: { strikethrough: is } };
}
function ns() {
  return { unsafe: [{ character: "~", inConstruct: "phrasing", notInConstruct: es }], handlers: { delete: wr } };
}
function rs(e2) {
  this.enter({ type: "delete", children: [] }, e2);
}
function is(e2) {
  this.exit(e2);
}
function wr(e2, n, t, r) {
  const i = t.createTracker(r), o = t.enter("strikethrough");
  let l = i.move("~~");
  return l += t.containerPhrasing(e2, { ...i.current(), before: l, after: "~" }), l += i.move("~~"), o(), l;
}
function ls() {
  return "~";
}
function os(e2) {
  return e2.length;
}
function us(e2, n) {
  const t = n || {}, r = (t.align || []).concat(), i = t.stringLength || os, o = [], l = [], u = [], a = [];
  let s = 0, f = -1;
  for (; ++f < e2.length; ) {
    const y = [], S = [];
    let x = -1;
    for (e2[f].length > s && (s = e2[f].length); ++x < e2[f].length; ) {
      const I = as(e2[f][x]);
      if (t.alignDelimiters !== false) {
        const C = i(I);
        S[x] = C, (a[x] === void 0 || C > a[x]) && (a[x] = C);
      }
      y.push(I);
    }
    l[f] = y, u[f] = S;
  }
  let c = -1;
  if (typeof r == "object" && "length" in r) for (; ++c < s; ) o[c] = On(r[c]);
  else {
    const y = On(r);
    for (; ++c < s; ) o[c] = y;
  }
  c = -1;
  const p = [], h = [];
  for (; ++c < s; ) {
    const y = o[c];
    let S = "", x = "";
    y === 99 ? (S = ":", x = ":") : y === 108 ? S = ":" : y === 114 && (x = ":");
    let I = t.alignDelimiters === false ? 1 : Math.max(1, a[c] - S.length - x.length);
    const C = S + "-".repeat(I) + x;
    t.alignDelimiters !== false && (I = S.length + I + x.length, I > a[c] && (a[c] = I), h[c] = I), p[c] = C;
  }
  l.splice(1, 0, p), u.splice(1, 0, h), f = -1;
  const d = [];
  for (; ++f < l.length; ) {
    const y = l[f], S = u[f];
    c = -1;
    const x = [];
    for (; ++c < s; ) {
      const I = y[c] || "";
      let C = "", _ = "";
      if (t.alignDelimiters !== false) {
        const P = a[c] - (S[c] || 0), w = o[c];
        w === 114 ? C = " ".repeat(P) : w === 99 ? P % 2 ? (C = " ".repeat(P / 2 + 0.5), _ = " ".repeat(P / 2 - 0.5)) : (C = " ".repeat(P / 2), _ = C) : _ = " ".repeat(P);
      }
      t.delimiterStart !== false && !c && x.push("|"), t.padding !== false && !(t.alignDelimiters === false && I === "") && (t.delimiterStart !== false || c) && x.push(" "), t.alignDelimiters !== false && x.push(C), x.push(I), t.alignDelimiters !== false && x.push(_), t.padding !== false && x.push(" "), (t.delimiterEnd !== false || c !== s - 1) && x.push("|");
    }
    d.push(t.delimiterEnd === false ? x.join("").replace(/ +$/, "") : x.join(""));
  }
  return d.join(`
`);
}
function as(e2) {
  return e2 == null ? "" : String(e2);
}
function On(e2) {
  const n = typeof e2 == "string" ? e2.codePointAt(0) : 0;
  return n === 67 || n === 99 ? 99 : n === 76 || n === 108 ? 108 : n === 82 || n === 114 ? 114 : 0;
}
function ss(e2, n, t, r) {
  const i = t.enter("blockquote"), o = t.createTracker(r);
  o.move("> "), o.shift(2);
  const l = t.indentLines(t.containerFlow(e2, o.current()), cs);
  return i(), l;
}
function cs(e2, n, t) {
  return ">" + (t ? "" : " ") + e2;
}
function fs(e2, n) {
  return vn(e2, n.inConstruct, true) && !vn(e2, n.notInConstruct, false);
}
function vn(e2, n, t) {
  if (typeof n == "string" && (n = [n]), !n || n.length === 0) return t;
  let r = -1;
  for (; ++r < n.length; ) if (e2.includes(n[r])) return true;
  return false;
}
function Mn(e2, n, t, r) {
  let i = -1;
  for (; ++i < t.unsafe.length; ) if (t.unsafe[i].character === `
` && fs(t.stack, t.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
  return `\\
`;
}
function hs(e2, n) {
  const t = String(e2);
  let r = t.indexOf(n), i = r, o = 0, l = 0;
  if (typeof n != "string") throw new TypeError("Expected substring");
  for (; r !== -1; ) r === i ? ++o > l && (l = o) : o = 1, i = r + n.length, r = t.indexOf(n, i);
  return l;
}
function ps(e2, n) {
  return !!(n.options.fences === false && e2.value && !e2.lang && /[^ \r\n]/.test(e2.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e2.value));
}
function ms(e2) {
  const n = e2.options.fence || "`";
  if (n !== "`" && n !== "~") throw new Error("Cannot serialize code with `" + n + "` for `options.fence`, expected `` ` `` or `~`");
  return n;
}
function gs(e2, n, t, r) {
  const i = ms(t), o = e2.value || "", l = i === "`" ? "GraveAccent" : "Tilde";
  if (ps(e2, t)) {
    const c = t.enter("codeIndented"), p = t.indentLines(o, ds);
    return c(), p;
  }
  const u = t.createTracker(r), a = i.repeat(Math.max(hs(o, i) + 1, 3)), s = t.enter("codeFenced");
  let f = u.move(a);
  if (e2.lang) {
    const c = t.enter(`codeFencedLang${l}`);
    f += u.move(t.safe(e2.lang, { before: f, after: " ", encode: ["`"], ...u.current() })), c();
  }
  if (e2.lang && e2.meta) {
    const c = t.enter(`codeFencedMeta${l}`);
    f += u.move(" "), f += u.move(t.safe(e2.meta, { before: f, after: `
`, encode: ["`"], ...u.current() })), c();
  }
  return f += u.move(`
`), o && (f += u.move(o + `
`)), f += u.move(a), s(), f;
}
function ds(e2, n, t) {
  return (t ? "" : "    ") + e2;
}
function $t(e2) {
  const n = e2.options.quote || '"';
  if (n !== '"' && n !== "'") throw new Error("Cannot serialize title with `" + n + "` for `options.quote`, expected `\"`, or `'`");
  return n;
}
function xs(e2, n, t, r) {
  const i = $t(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("definition");
  let u = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("[");
  return s += a.move(t.safe(t.associationId(e2), { before: s, after: "]", ...a.current() })), s += a.move("]: "), u(), !e2.url || /[\0- \u007F]/.test(e2.url) ? (u = t.enter("destinationLiteral"), s += a.move("<"), s += a.move(t.safe(e2.url, { before: s, after: ">", ...a.current() })), s += a.move(">")) : (u = t.enter("destinationRaw"), s += a.move(t.safe(e2.url, { before: s, after: e2.title ? " " : `
`, ...a.current() }))), u(), e2.title && (u = t.enter(`title${o}`), s += a.move(" " + i), s += a.move(t.safe(e2.title, { before: s, after: i, ...a.current() })), s += a.move(i), u()), l(), s;
}
function ks(e2) {
  const n = e2.options.emphasis || "*";
  if (n !== "*" && n !== "_") throw new Error("Cannot serialize emphasis with `" + n + "` for `options.emphasis`, expected `*`, or `_`");
  return n;
}
function Ne(e2) {
  return "&#x" + e2.toString(16).toUpperCase() + ";";
}
function Ye(e2, n, t) {
  const r = Ee(e2), i = Ee(n);
  return r === void 0 ? i === void 0 ? t === "_" ? { inside: true, outside: true } : { inside: false, outside: false } : i === 1 ? { inside: true, outside: true } : { inside: false, outside: true } : r === 1 ? i === void 0 ? { inside: false, outside: false } : i === 1 ? { inside: true, outside: true } : { inside: false, outside: false } : i === void 0 ? { inside: false, outside: false } : i === 1 ? { inside: true, outside: false } : { inside: false, outside: false };
}
Sr.peek = ys;
function Sr(e2, n, t, r) {
  const i = ks(t), o = t.enter("emphasis"), l = t.createTracker(r), u = l.move(i);
  let a = l.move(t.containerPhrasing(e2, { after: i, before: u, ...l.current() }));
  const s = a.charCodeAt(0), f = Ye(r.before.charCodeAt(r.before.length - 1), s, i);
  f.inside && (a = Ne(s) + a.slice(1));
  const c = a.charCodeAt(a.length - 1), p = Ye(r.after.charCodeAt(0), c, i);
  p.inside && (a = a.slice(0, -1) + Ne(c));
  const h = l.move(i);
  return o(), t.attentionEncodeSurroundingInfo = { after: p.outside, before: f.outside }, u + a + h;
}
function ys(e2, n, t) {
  return t.options.emphasis || "*";
}
function bs(e2, n) {
  let t = false;
  return Bt(e2, function(r) {
    if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break") return t = true, wt;
  }), !!((!e2.depth || e2.depth < 3) && Lt(e2) && (n.options.setext || t));
}
function ws(e2, n, t, r) {
  const i = Math.max(Math.min(6, e2.depth || 1), 1), o = t.createTracker(r);
  if (bs(e2, t)) {
    const f = t.enter("headingSetext"), c = t.enter("phrasing"), p = t.containerPhrasing(e2, { ...o.current(), before: `
`, after: `
` });
    return c(), f(), p + `
` + (i === 1 ? "=" : "-").repeat(p.length - (Math.max(p.lastIndexOf("\r"), p.lastIndexOf(`
`)) + 1));
  }
  const l = "#".repeat(i), u = t.enter("headingAtx"), a = t.enter("phrasing");
  o.move(l + " ");
  let s = t.containerPhrasing(e2, { before: "# ", after: `
`, ...o.current() });
  return /^[\t ]/.test(s) && (s = Ne(s.charCodeAt(0)) + s.slice(1)), s = s ? l + " " + s : l, t.options.closeAtx && (s += " " + l), a(), u(), s;
}
Cr.peek = Ss;
function Cr(e2) {
  return e2.value || "";
}
function Ss() {
  return "<";
}
Er.peek = Cs;
function Er(e2, n, t, r) {
  const i = $t(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.enter("image");
  let u = t.enter("label");
  const a = t.createTracker(r);
  let s = a.move("![");
  return s += a.move(t.safe(e2.alt, { before: s, after: "]", ...a.current() })), s += a.move("]("), u(), !e2.url && e2.title || /[\0- \u007F]/.test(e2.url) ? (u = t.enter("destinationLiteral"), s += a.move("<"), s += a.move(t.safe(e2.url, { before: s, after: ">", ...a.current() })), s += a.move(">")) : (u = t.enter("destinationRaw"), s += a.move(t.safe(e2.url, { before: s, after: e2.title ? " " : ")", ...a.current() }))), u(), e2.title && (u = t.enter(`title${o}`), s += a.move(" " + i), s += a.move(t.safe(e2.title, { before: s, after: i, ...a.current() })), s += a.move(i), u()), s += a.move(")"), l(), s;
}
function Cs() {
  return "!";
}
Ir.peek = Es;
function Ir(e2, n, t, r) {
  const i = e2.referenceType, o = t.enter("imageReference");
  let l = t.enter("label");
  const u = t.createTracker(r);
  let a = u.move("![");
  const s = t.safe(e2.alt, { before: a, after: "]", ...u.current() });
  a += u.move(s + "]["), l();
  const f = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e2), { before: a, after: "]", ...u.current() });
  return l(), t.stack = f, o(), i === "full" || !s || s !== c ? a += u.move(c + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += u.move("]"), a;
}
function Es() {
  return "!";
}
Ar.peek = Is;
function Ar(e2, n, t) {
  let r = e2.value || "", i = "`", o = -1;
  for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
  for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++o < t.unsafe.length; ) {
    const l = t.unsafe[o], u = t.compilePattern(l);
    let a;
    if (l.atBreak) for (; a = u.exec(r); ) {
      let s = a.index;
      r.charCodeAt(s) === 10 && r.charCodeAt(s - 1) === 13 && s--, r = r.slice(0, s) + " " + r.slice(a.index + 1);
    }
  }
  return i + r + i;
}
function Is() {
  return "`";
}
function Tr(e2, n) {
  const t = Lt(e2);
  return !!(!n.options.resourceLink && e2.url && !e2.title && e2.children && e2.children.length === 1 && e2.children[0].type === "text" && (t === e2.url || "mailto:" + t === e2.url) && /^[a-z][a-z+.-]+:/i.test(e2.url) && !/[\0- <>\u007F]/.test(e2.url));
}
zr.peek = As;
function zr(e2, n, t, r) {
  const i = $t(t), o = i === '"' ? "Quote" : "Apostrophe", l = t.createTracker(r);
  let u, a;
  if (Tr(e2, t)) {
    const f = t.stack;
    t.stack = [], u = t.enter("autolink");
    let c = l.move("<");
    return c += l.move(t.containerPhrasing(e2, { before: c, after: ">", ...l.current() })), c += l.move(">"), u(), t.stack = f, c;
  }
  u = t.enter("link"), a = t.enter("label");
  let s = l.move("[");
  return s += l.move(t.containerPhrasing(e2, { before: s, after: "](", ...l.current() })), s += l.move("]("), a(), !e2.url && e2.title || /[\0- \u007F]/.test(e2.url) ? (a = t.enter("destinationLiteral"), s += l.move("<"), s += l.move(t.safe(e2.url, { before: s, after: ">", ...l.current() })), s += l.move(">")) : (a = t.enter("destinationRaw"), s += l.move(t.safe(e2.url, { before: s, after: e2.title ? " " : ")", ...l.current() }))), a(), e2.title && (a = t.enter(`title${o}`), s += l.move(" " + i), s += l.move(t.safe(e2.title, { before: s, after: i, ...l.current() })), s += l.move(i), a()), s += l.move(")"), u(), s;
}
function As(e2, n, t) {
  return Tr(e2, t) ? "<" : "[";
}
Fr.peek = Ts;
function Fr(e2, n, t, r) {
  const i = e2.referenceType, o = t.enter("linkReference");
  let l = t.enter("label");
  const u = t.createTracker(r);
  let a = u.move("[");
  const s = t.containerPhrasing(e2, { before: a, after: "]", ...u.current() });
  a += u.move(s + "]["), l();
  const f = t.stack;
  t.stack = [], l = t.enter("reference");
  const c = t.safe(t.associationId(e2), { before: a, after: "]", ...u.current() });
  return l(), t.stack = f, o(), i === "full" || !s || s !== c ? a += u.move(c + "]") : i === "shortcut" ? a = a.slice(0, -1) : a += u.move("]"), a;
}
function Ts() {
  return "[";
}
function Ht(e2) {
  const n = e2.options.bullet || "*";
  if (n !== "*" && n !== "+" && n !== "-") throw new Error("Cannot serialize items with `" + n + "` for `options.bullet`, expected `*`, `+`, or `-`");
  return n;
}
function zs(e2) {
  const n = Ht(e2), t = e2.options.bulletOther;
  if (!t) return n === "*" ? "-" : "*";
  if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
  if (t === n) throw new Error("Expected `bullet` (`" + n + "`) and `bulletOther` (`" + t + "`) to be different");
  return t;
}
function Fs(e2) {
  const n = e2.options.bulletOrdered || ".";
  if (n !== "." && n !== ")") throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOrdered`, expected `.` or `)`");
  return n;
}
function _r(e2) {
  const n = e2.options.rule || "*";
  if (n !== "*" && n !== "-" && n !== "_") throw new Error("Cannot serialize rules with `" + n + "` for `options.rule`, expected `*`, `-`, or `_`");
  return n;
}
function _s(e2, n, t, r) {
  const i = t.enter("list"), o = t.bulletCurrent;
  let l = e2.ordered ? Fs(t) : Ht(t);
  const u = e2.ordered ? l === "." ? ")" : "." : zs(t);
  let a = n && t.bulletLastUsed ? l === t.bulletLastUsed : false;
  if (!e2.ordered) {
    const f = e2.children ? e2.children[0] : void 0;
    if ((l === "*" || l === "-") && f && (!f.children || !f.children[0]) && t.stack[t.stack.length - 1] === "list" && t.stack[t.stack.length - 2] === "listItem" && t.stack[t.stack.length - 3] === "list" && t.stack[t.stack.length - 4] === "listItem" && t.indexStack[t.indexStack.length - 1] === 0 && t.indexStack[t.indexStack.length - 2] === 0 && t.indexStack[t.indexStack.length - 3] === 0 && (a = true), _r(t) === l && f) {
      let c = -1;
      for (; ++c < e2.children.length; ) {
        const p = e2.children[c];
        if (p && p.type === "listItem" && p.children && p.children[0] && p.children[0].type === "thematicBreak") {
          a = true;
          break;
        }
      }
    }
  }
  a && (l = u), t.bulletCurrent = l;
  const s = t.containerFlow(e2, r);
  return t.bulletLastUsed = l, t.bulletCurrent = o, i(), s;
}
function Ps(e2) {
  const n = e2.options.listItemIndent || "one";
  if (n !== "tab" && n !== "one" && n !== "mixed") throw new Error("Cannot serialize items with `" + n + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
  return n;
}
function Ds(e2, n, t, r) {
  const i = Ps(t);
  let o = t.bulletCurrent || Ht(t);
  n && n.type === "list" && n.ordered && (o = (typeof n.start == "number" && n.start > -1 ? n.start : 1) + (t.options.incrementListMarker === false ? 0 : n.children.indexOf(e2)) + o);
  let l = o.length + 1;
  (i === "tab" || i === "mixed" && (n && n.type === "list" && n.spread || e2.spread)) && (l = Math.ceil(l / 4) * 4);
  const u = t.createTracker(r);
  u.move(o + " ".repeat(l - o.length)), u.shift(l);
  const a = t.enter("listItem"), s = t.indentLines(t.containerFlow(e2, u.current()), f);
  return a(), s;
  function f(c, p, h) {
    return p ? (h ? "" : " ".repeat(l)) + c : (h ? o : o + " ".repeat(l - o.length)) + c;
  }
}
function Ls(e2, n, t, r) {
  const i = t.enter("paragraph"), o = t.enter("phrasing"), l = t.containerPhrasing(e2, r);
  return o(), i(), l;
}
const Rs = et(["break", "delete", "emphasis", "footnote", "footnoteReference", "image", "imageReference", "inlineCode", "inlineMath", "link", "linkReference", "mdxJsxTextElement", "mdxTextExpression", "strong", "text", "textDirective"]);
function Ns(e2, n, t, r) {
  return (e2.children.some(function(l) {
    return Rs(l);
  }) ? t.containerPhrasing : t.containerFlow).call(t, e2, r);
}
function Os(e2) {
  const n = e2.options.strong || "*";
  if (n !== "*" && n !== "_") throw new Error("Cannot serialize strong with `" + n + "` for `options.strong`, expected `*`, or `_`");
  return n;
}
Pr.peek = vs;
function Pr(e2, n, t, r) {
  const i = Os(t), o = t.enter("strong"), l = t.createTracker(r), u = l.move(i + i);
  let a = l.move(t.containerPhrasing(e2, { after: i, before: u, ...l.current() }));
  const s = a.charCodeAt(0), f = Ye(r.before.charCodeAt(r.before.length - 1), s, i);
  f.inside && (a = Ne(s) + a.slice(1));
  const c = a.charCodeAt(a.length - 1), p = Ye(r.after.charCodeAt(0), c, i);
  p.inside && (a = a.slice(0, -1) + Ne(c));
  const h = l.move(i + i);
  return o(), t.attentionEncodeSurroundingInfo = { after: p.outside, before: f.outside }, u + a + h;
}
function vs(e2, n, t) {
  return t.options.strong || "*";
}
function Ms(e2, n, t, r) {
  return t.safe(e2.value, r);
}
function Bs(e2) {
  const n = e2.options.ruleRepetition || 3;
  if (n < 3) throw new Error("Cannot serialize rules with repetition `" + n + "` for `options.ruleRepetition`, expected `3` or more");
  return n;
}
function js(e2, n, t) {
  const r = (_r(t) + (t.options.ruleSpaces ? " " : "")).repeat(Bs(t));
  return t.options.ruleSpaces ? r.slice(0, -1) : r;
}
const Dr = { blockquote: ss, break: Mn, code: gs, definition: xs, emphasis: Sr, hardBreak: Mn, heading: ws, html: Cr, image: Er, imageReference: Ir, inlineCode: Ar, link: zr, linkReference: Fr, list: _s, listItem: Ds, paragraph: Ls, root: Ns, strong: Pr, text: Ms, thematicBreak: js };
function $s() {
  return { enter: { table: Hs, tableData: Bn, tableHeader: Bn, tableRow: qs }, exit: { codeText: Us, table: Vs, tableData: dt, tableHeader: dt, tableRow: dt } };
}
function Hs(e2) {
  const n = e2._align;
  this.enter({ type: "table", align: n.map(function(t) {
    return t === "none" ? null : t;
  }), children: [] }, e2), this.data.inTable = true;
}
function Vs(e2) {
  this.exit(e2), this.data.inTable = void 0;
}
function qs(e2) {
  this.enter({ type: "tableRow", children: [] }, e2);
}
function dt(e2) {
  this.exit(e2);
}
function Bn(e2) {
  this.enter({ type: "tableCell", children: [] }, e2);
}
function Us(e2) {
  let n = this.resume();
  this.data.inTable && (n = n.replace(/\\([\\|])/g, Ws));
  const t = this.stack[this.stack.length - 1];
  t.type, t.value = n, this.exit(e2);
}
function Ws(e2, n) {
  return n === "|" ? n : e2;
}
function Qs(e2) {
  const n = e2 || {}, t = n.tableCellPadding, r = n.tablePipeAlign, i = n.stringLength, o = t ? " " : "|";
  return { unsafe: [{ character: "\r", inConstruct: "tableCell" }, { character: `
`, inConstruct: "tableCell" }, { atBreak: true, character: "|", after: "[	 :-]" }, { character: "|", inConstruct: "tableCell" }, { atBreak: true, character: ":", after: "-" }, { atBreak: true, character: "-", after: "[:|-]" }], handlers: { inlineCode: p, table: l, tableCell: a, tableRow: u } };
  function l(h, d, y, S) {
    return s(f(h, y, S), h.align);
  }
  function u(h, d, y, S) {
    const x = c(h, y, S), I = s([x]);
    return I.slice(0, I.indexOf(`
`));
  }
  function a(h, d, y, S) {
    const x = y.enter("tableCell"), I = y.enter("phrasing"), C = y.containerPhrasing(h, { ...S, before: o, after: o });
    return I(), x(), C;
  }
  function s(h, d) {
    return us(h, { align: d, alignDelimiters: r, padding: t, stringLength: i });
  }
  function f(h, d, y) {
    const S = h.children;
    let x = -1;
    const I = [], C = d.enter("table");
    for (; ++x < S.length; ) I[x] = c(S[x], d, y);
    return C(), I;
  }
  function c(h, d, y) {
    const S = h.children;
    let x = -1;
    const I = [], C = d.enter("tableRow");
    for (; ++x < S.length; ) I[x] = a(S[x], h, d, y);
    return C(), I;
  }
  function p(h, d, y) {
    let S = Dr.inlineCode(h, d, y);
    return y.stack.includes("tableCell") && (S = S.replace(/\|/g, "\\$&")), S;
  }
}
function Gs() {
  return { exit: { taskListCheckValueChecked: jn, taskListCheckValueUnchecked: jn, paragraph: Xs } };
}
function Ys() {
  return { unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }], handlers: { listItem: Js } };
}
function jn(e2) {
  const n = this.stack[this.stack.length - 2];
  n.type, n.checked = e2.type === "taskListCheckValueChecked";
}
function Xs(e2) {
  const n = this.stack[this.stack.length - 2];
  if (n && n.type === "listItem" && typeof n.checked == "boolean") {
    const t = this.stack[this.stack.length - 1];
    t.type;
    const r = t.children[0];
    if (r && r.type === "text") {
      const i = n.children;
      let o = -1, l;
      for (; ++o < i.length; ) {
        const u = i[o];
        if (u.type === "paragraph") {
          l = u;
          break;
        }
      }
      l === t && (r.value = r.value.slice(1), r.value.length === 0 ? t.children.shift() : t.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, t.position.start = Object.assign({}, r.position.start)));
    }
  }
  this.exit(e2);
}
function Js(e2, n, t, r) {
  const i = e2.children[0], o = typeof e2.checked == "boolean" && i && i.type === "paragraph", l = "[" + (e2.checked ? "x" : " ") + "] ", u = t.createTracker(r);
  o && u.move(l);
  let a = Dr.listItem(e2, n, t, { ...r, ...u.current() });
  return o && (a = a.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, s)), a;
  function s(f) {
    return f + l;
  }
}
function Ks() {
  return [_a(), Ja(), ts(), $s(), Gs()];
}
function Zs(e2) {
  return { extensions: [Pa(), Ka(e2), ns(), Qs(e2), Ys()] };
}
const ec = { tokenize: oc, partial: true }, Lr = { tokenize: uc, partial: true }, Rr = { tokenize: ac, partial: true }, Nr = { tokenize: sc, partial: true }, tc = { tokenize: cc, partial: true }, Or = { name: "wwwAutolink", tokenize: ic, previous: Mr }, vr = { name: "protocolAutolink", tokenize: lc, previous: Br }, ce = { name: "emailAutolink", tokenize: rc, previous: jr }, le = {};
function nc() {
  return { text: le };
}
let de = 48;
for (; de < 123; ) le[de] = ce, de++, de === 58 ? de = 65 : de === 91 && (de = 97);
le[43] = ce;
le[45] = ce;
le[46] = ce;
le[95] = ce;
le[72] = [ce, vr];
le[104] = [ce, vr];
le[87] = [ce, Or];
le[119] = [ce, Or];
function rc(e2, n, t) {
  const r = this;
  let i, o;
  return l;
  function l(c) {
    return !It(c) || !jr.call(r, r.previous) || Vt(r.events) ? t(c) : (e2.enter("literalAutolink"), e2.enter("literalAutolinkEmail"), u(c));
  }
  function u(c) {
    return It(c) ? (e2.consume(c), u) : c === 64 ? (e2.consume(c), a) : t(c);
  }
  function a(c) {
    return c === 46 ? e2.check(tc, f, s)(c) : c === 45 || c === 95 || W(c) ? (o = true, e2.consume(c), a) : f(c);
  }
  function s(c) {
    return e2.consume(c), i = true, a;
  }
  function f(c) {
    return o && i && G(r.previous) ? (e2.exit("literalAutolinkEmail"), e2.exit("literalAutolink"), n(c)) : t(c);
  }
}
function ic(e2, n, t) {
  const r = this;
  return i;
  function i(l) {
    return l !== 87 && l !== 119 || !Mr.call(r, r.previous) || Vt(r.events) ? t(l) : (e2.enter("literalAutolink"), e2.enter("literalAutolinkWww"), e2.check(ec, e2.attempt(Lr, e2.attempt(Rr, o), t), t)(l));
  }
  function o(l) {
    return e2.exit("literalAutolinkWww"), e2.exit("literalAutolink"), n(l);
  }
}
function lc(e2, n, t) {
  const r = this;
  let i = "", o = false;
  return l;
  function l(c) {
    return (c === 72 || c === 104) && Br.call(r, r.previous) && !Vt(r.events) ? (e2.enter("literalAutolink"), e2.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), e2.consume(c), u) : t(c);
  }
  function u(c) {
    if (G(c) && i.length < 5) return i += String.fromCodePoint(c), e2.consume(c), u;
    if (c === 58) {
      const p = i.toLowerCase();
      if (p === "http" || p === "https") return e2.consume(c), a;
    }
    return t(c);
  }
  function a(c) {
    return c === 47 ? (e2.consume(c), o ? s : (o = true, a)) : t(c);
  }
  function s(c) {
    return c === null || We(c) || j(c) || ke(c) || Je(c) ? t(c) : e2.attempt(Lr, e2.attempt(Rr, f), t)(c);
  }
  function f(c) {
    return e2.exit("literalAutolinkHttp"), e2.exit("literalAutolink"), n(c);
  }
}
function oc(e2, n, t) {
  let r = 0;
  return i;
  function i(l) {
    return (l === 87 || l === 119) && r < 3 ? (r++, e2.consume(l), i) : l === 46 && r === 3 ? (e2.consume(l), o) : t(l);
  }
  function o(l) {
    return l === null ? t(l) : n(l);
  }
}
function uc(e2, n, t) {
  let r, i, o;
  return l;
  function l(s) {
    return s === 46 || s === 95 ? e2.check(Nr, a, u)(s) : s === null || j(s) || ke(s) || s !== 45 && Je(s) ? a(s) : (o = true, e2.consume(s), l);
  }
  function u(s) {
    return s === 95 ? r = true : (i = r, r = void 0), e2.consume(s), l;
  }
  function a(s) {
    return i || r || !o ? t(s) : n(s);
  }
}
function ac(e2, n) {
  let t = 0, r = 0;
  return i;
  function i(l) {
    return l === 40 ? (t++, e2.consume(l), i) : l === 41 && r < t ? o(l) : l === 33 || l === 34 || l === 38 || l === 39 || l === 41 || l === 42 || l === 44 || l === 46 || l === 58 || l === 59 || l === 60 || l === 63 || l === 93 || l === 95 || l === 126 ? e2.check(Nr, n, o)(l) : l === null || j(l) || ke(l) ? n(l) : (e2.consume(l), i);
  }
  function o(l) {
    return l === 41 && r++, e2.consume(l), i;
  }
}
function sc(e2, n, t) {
  return r;
  function r(u) {
    return u === 33 || u === 34 || u === 39 || u === 41 || u === 42 || u === 44 || u === 46 || u === 58 || u === 59 || u === 63 || u === 95 || u === 126 ? (e2.consume(u), r) : u === 38 ? (e2.consume(u), o) : u === 93 ? (e2.consume(u), i) : u === 60 || u === null || j(u) || ke(u) ? n(u) : t(u);
  }
  function i(u) {
    return u === null || u === 40 || u === 91 || j(u) || ke(u) ? n(u) : r(u);
  }
  function o(u) {
    return G(u) ? l(u) : t(u);
  }
  function l(u) {
    return u === 59 ? (e2.consume(u), r) : G(u) ? (e2.consume(u), l) : t(u);
  }
}
function cc(e2, n, t) {
  return r;
  function r(o) {
    return e2.consume(o), i;
  }
  function i(o) {
    return W(o) ? t(o) : n(o);
  }
}
function Mr(e2) {
  return e2 === null || e2 === 40 || e2 === 42 || e2 === 95 || e2 === 91 || e2 === 93 || e2 === 126 || j(e2);
}
function Br(e2) {
  return !G(e2);
}
function jr(e2) {
  return !(e2 === 47 || It(e2));
}
function It(e2) {
  return e2 === 43 || e2 === 45 || e2 === 46 || e2 === 95 || W(e2);
}
function Vt(e2) {
  let n = e2.length, t = false;
  for (; n--; ) {
    const r = e2[n][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      t = true;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      t = false;
      break;
    }
  }
  return e2.length > 0 && !t && (e2[e2.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), t;
}
const fc = { tokenize: yc, partial: true };
function hc() {
  return { document: { 91: { name: "gfmFootnoteDefinition", tokenize: dc, continuation: { tokenize: xc }, exit: kc } }, text: { 91: { name: "gfmFootnoteCall", tokenize: gc }, 93: { name: "gfmPotentialFootnoteCall", add: "after", tokenize: pc, resolveTo: mc } } };
}
function pc(e2, n, t) {
  const r = this;
  let i = r.events.length;
  const o = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let l;
  for (; i--; ) {
    const a = r.events[i][1];
    if (a.type === "labelImage") {
      l = a;
      break;
    }
    if (a.type === "gfmFootnoteCall" || a.type === "labelLink" || a.type === "label" || a.type === "image" || a.type === "link") break;
  }
  return u;
  function u(a) {
    if (!l || !l._balanced) return t(a);
    const s = re(r.sliceSerialize({ start: l.end, end: r.now() }));
    return s.codePointAt(0) !== 94 || !o.includes(s.slice(1)) ? t(a) : (e2.enter("gfmFootnoteCallLabelMarker"), e2.consume(a), e2.exit("gfmFootnoteCallLabelMarker"), n(a));
  }
}
function mc(e2, n) {
  let t = e2.length;
  for (; t--; ) if (e2[t][1].type === "labelImage" && e2[t][0] === "enter") {
    e2[t][1];
    break;
  }
  e2[t + 1][1].type = "data", e2[t + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = { type: "gfmFootnoteCall", start: Object.assign({}, e2[t + 3][1].start), end: Object.assign({}, e2[e2.length - 1][1].end) }, i = { type: "gfmFootnoteCallMarker", start: Object.assign({}, e2[t + 3][1].end), end: Object.assign({}, e2[t + 3][1].end) };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const o = { type: "gfmFootnoteCallString", start: Object.assign({}, i.end), end: Object.assign({}, e2[e2.length - 1][1].start) }, l = { type: "chunkString", contentType: "string", start: Object.assign({}, o.start), end: Object.assign({}, o.end) }, u = [e2[t + 1], e2[t + 2], ["enter", r, n], e2[t + 3], e2[t + 4], ["enter", i, n], ["exit", i, n], ["enter", o, n], ["enter", l, n], ["exit", l, n], ["exit", o, n], e2[e2.length - 2], e2[e2.length - 1], ["exit", r, n]];
  return e2.splice(t, e2.length - t + 1, ...u), e2;
}
function gc(e2, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o = 0, l;
  return u;
  function u(c) {
    return e2.enter("gfmFootnoteCall"), e2.enter("gfmFootnoteCallLabelMarker"), e2.consume(c), e2.exit("gfmFootnoteCallLabelMarker"), a;
  }
  function a(c) {
    return c !== 94 ? t(c) : (e2.enter("gfmFootnoteCallMarker"), e2.consume(c), e2.exit("gfmFootnoteCallMarker"), e2.enter("gfmFootnoteCallString"), e2.enter("chunkString").contentType = "string", s);
  }
  function s(c) {
    if (o > 999 || c === 93 && !l || c === null || c === 91 || j(c)) return t(c);
    if (c === 93) {
      e2.exit("chunkString");
      const p = e2.exit("gfmFootnoteCallString");
      return i.includes(re(r.sliceSerialize(p))) ? (e2.enter("gfmFootnoteCallLabelMarker"), e2.consume(c), e2.exit("gfmFootnoteCallLabelMarker"), e2.exit("gfmFootnoteCall"), n) : t(c);
    }
    return j(c) || (l = true), o++, e2.consume(c), c === 92 ? f : s;
  }
  function f(c) {
    return c === 91 || c === 92 || c === 93 ? (e2.consume(c), o++, s) : s(c);
  }
}
function dc(e2, n, t) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let o, l = 0, u;
  return a;
  function a(d) {
    return e2.enter("gfmFootnoteDefinition")._container = true, e2.enter("gfmFootnoteDefinitionLabel"), e2.enter("gfmFootnoteDefinitionLabelMarker"), e2.consume(d), e2.exit("gfmFootnoteDefinitionLabelMarker"), s;
  }
  function s(d) {
    return d === 94 ? (e2.enter("gfmFootnoteDefinitionMarker"), e2.consume(d), e2.exit("gfmFootnoteDefinitionMarker"), e2.enter("gfmFootnoteDefinitionLabelString"), e2.enter("chunkString").contentType = "string", f) : t(d);
  }
  function f(d) {
    if (l > 999 || d === 93 && !u || d === null || d === 91 || j(d)) return t(d);
    if (d === 93) {
      e2.exit("chunkString");
      const y = e2.exit("gfmFootnoteDefinitionLabelString");
      return o = re(r.sliceSerialize(y)), e2.enter("gfmFootnoteDefinitionLabelMarker"), e2.consume(d), e2.exit("gfmFootnoteDefinitionLabelMarker"), e2.exit("gfmFootnoteDefinitionLabel"), p;
    }
    return j(d) || (u = true), l++, e2.consume(d), d === 92 ? c : f;
  }
  function c(d) {
    return d === 91 || d === 92 || d === 93 ? (e2.consume(d), l++, f) : f(d);
  }
  function p(d) {
    return d === 58 ? (e2.enter("definitionMarker"), e2.consume(d), e2.exit("definitionMarker"), i.includes(o) || i.push(o), R(e2, h, "gfmFootnoteDefinitionWhitespace")) : t(d);
  }
  function h(d) {
    return n(d);
  }
}
function xc(e2, n, t) {
  return e2.check(Oe, n, e2.attempt(fc, n, t));
}
function kc(e2) {
  e2.exit("gfmFootnoteDefinition");
}
function yc(e2, n, t) {
  const r = this;
  return R(e2, i, "gfmFootnoteDefinitionIndent", 5);
  function i(o) {
    const l = r.events[r.events.length - 1];
    return l && l[1].type === "gfmFootnoteDefinitionIndent" && l[2].sliceSerialize(l[1], true).length === 4 ? n(o) : t(o);
  }
}
function bc(e2) {
  let t = (e2 || {}).singleTilde;
  const r = { name: "strikethrough", tokenize: o, resolveAll: i };
  return t == null && (t = true), { text: { 126: r }, insideSpan: { null: [r] }, attentionMarkers: { null: [126] } };
  function i(l, u) {
    let a = -1;
    for (; ++a < l.length; ) if (l[a][0] === "enter" && l[a][1].type === "strikethroughSequenceTemporary" && l[a][1]._close) {
      let s = a;
      for (; s--; ) if (l[s][0] === "exit" && l[s][1].type === "strikethroughSequenceTemporary" && l[s][1]._open && l[a][1].end.offset - l[a][1].start.offset === l[s][1].end.offset - l[s][1].start.offset) {
        l[a][1].type = "strikethroughSequence", l[s][1].type = "strikethroughSequence";
        const f = { type: "strikethrough", start: Object.assign({}, l[s][1].start), end: Object.assign({}, l[a][1].end) }, c = { type: "strikethroughText", start: Object.assign({}, l[s][1].end), end: Object.assign({}, l[a][1].start) }, p = [["enter", f, u], ["enter", l[s][1], u], ["exit", l[s][1], u], ["enter", c, u]], h = u.parser.constructs.insideSpan.null;
        h && J(p, p.length, 0, Ke(h, l.slice(s + 1, a), u)), J(p, p.length, 0, [["exit", c, u], ["enter", l[a][1], u], ["exit", l[a][1], u], ["exit", f, u]]), J(l, s - 1, a - s + 3, p), a = s + p.length - 2;
        break;
      }
    }
    for (a = -1; ++a < l.length; ) l[a][1].type === "strikethroughSequenceTemporary" && (l[a][1].type = "data");
    return l;
  }
  function o(l, u, a) {
    const s = this.previous, f = this.events;
    let c = 0;
    return p;
    function p(d) {
      return s === 126 && f[f.length - 1][1].type !== "characterEscape" ? a(d) : (l.enter("strikethroughSequenceTemporary"), h(d));
    }
    function h(d) {
      const y = Ee(s);
      if (d === 126) return c > 1 ? a(d) : (l.consume(d), c++, h);
      if (c < 2 && !t) return a(d);
      const S = l.exit("strikethroughSequenceTemporary"), x = Ee(d);
      return S._open = !x || x === 2 && !!y, S._close = !y || y === 2 && !!x, u(d);
    }
  }
}
class wc {
  constructor() {
    this.map = [];
  }
  add(n, t, r) {
    Sc(this, n, t, r);
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
function Sc(e2, n, t, r) {
  let i = 0;
  if (!(t === 0 && r.length === 0)) {
    for (; i < e2.map.length; ) {
      if (e2.map[i][0] === n) {
        e2.map[i][1] += t, e2.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    e2.map.push([n, t, r]);
  }
}
function Cc(e2, n) {
  let t = false;
  const r = [];
  for (; n < e2.length; ) {
    const i = e2[n];
    if (t) {
      if (i[0] === "enter") i[1].type === "tableContent" && r.push(e2[n + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (e2[n - 1][1].type === "tableDelimiterMarker") {
          const o = r.length - 1;
          r[o] = r[o] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow") break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (t = true);
    n += 1;
  }
  return r;
}
function Ec() {
  return { flow: { null: { name: "table", tokenize: Ic, resolveAll: Ac } } };
}
function Ic(e2, n, t) {
  const r = this;
  let i = 0, o = 0, l;
  return u;
  function u(k) {
    let A = r.events.length - 1;
    for (; A > -1; ) {
      const H = r.events[A][1].type;
      if (H === "lineEnding" || H === "linePrefix") A--;
      else break;
    }
    const T = A > -1 ? r.events[A][1].type : null, M = T === "tableHead" || T === "tableRow" ? w : a;
    return M === w && r.parser.lazy[r.now().line] ? t(k) : M(k);
  }
  function a(k) {
    return e2.enter("tableHead"), e2.enter("tableRow"), s(k);
  }
  function s(k) {
    return k === 124 || (l = true, o += 1), f(k);
  }
  function f(k) {
    return k === null ? t(k) : z(k) ? o > 1 ? (o = 0, r.interrupt = true, e2.exit("tableRow"), e2.enter("lineEnding"), e2.consume(k), e2.exit("lineEnding"), h) : t(k) : D(k) ? R(e2, f, "whitespace")(k) : (o += 1, l && (l = false, i += 1), k === 124 ? (e2.enter("tableCellDivider"), e2.consume(k), e2.exit("tableCellDivider"), l = true, f) : (e2.enter("data"), c(k)));
  }
  function c(k) {
    return k === null || k === 124 || j(k) ? (e2.exit("data"), f(k)) : (e2.consume(k), k === 92 ? p : c);
  }
  function p(k) {
    return k === 92 || k === 124 ? (e2.consume(k), c) : c(k);
  }
  function h(k) {
    return r.interrupt = false, r.parser.lazy[r.now().line] ? t(k) : (e2.enter("tableDelimiterRow"), l = false, D(k) ? R(e2, d, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(k) : d(k));
  }
  function d(k) {
    return k === 45 || k === 58 ? S(k) : k === 124 ? (l = true, e2.enter("tableCellDivider"), e2.consume(k), e2.exit("tableCellDivider"), y) : P(k);
  }
  function y(k) {
    return D(k) ? R(e2, S, "whitespace")(k) : S(k);
  }
  function S(k) {
    return k === 58 ? (o += 1, l = true, e2.enter("tableDelimiterMarker"), e2.consume(k), e2.exit("tableDelimiterMarker"), x) : k === 45 ? (o += 1, x(k)) : k === null || z(k) ? _(k) : P(k);
  }
  function x(k) {
    return k === 45 ? (e2.enter("tableDelimiterFiller"), I(k)) : P(k);
  }
  function I(k) {
    return k === 45 ? (e2.consume(k), I) : k === 58 ? (l = true, e2.exit("tableDelimiterFiller"), e2.enter("tableDelimiterMarker"), e2.consume(k), e2.exit("tableDelimiterMarker"), C) : (e2.exit("tableDelimiterFiller"), C(k));
  }
  function C(k) {
    return D(k) ? R(e2, _, "whitespace")(k) : _(k);
  }
  function _(k) {
    return k === 124 ? d(k) : k === null || z(k) ? !l || i !== o ? P(k) : (e2.exit("tableDelimiterRow"), e2.exit("tableHead"), n(k)) : P(k);
  }
  function P(k) {
    return t(k);
  }
  function w(k) {
    return e2.enter("tableRow"), N(k);
  }
  function N(k) {
    return k === 124 ? (e2.enter("tableCellDivider"), e2.consume(k), e2.exit("tableCellDivider"), N) : k === null || z(k) ? (e2.exit("tableRow"), n(k)) : D(k) ? R(e2, N, "whitespace")(k) : (e2.enter("data"), $(k));
  }
  function $(k) {
    return k === null || k === 124 || j(k) ? (e2.exit("data"), N(k)) : (e2.consume(k), k === 92 ? v : $);
  }
  function v(k) {
    return k === 92 || k === 124 ? (e2.consume(k), $) : $(k);
  }
}
function Ac(e2, n) {
  let t = -1, r = true, i = 0, o = [0, 0, 0, 0], l = [0, 0, 0, 0], u = false, a = 0, s, f, c;
  const p = new wc();
  for (; ++t < e2.length; ) {
    const h = e2[t], d = h[1];
    h[0] === "enter" ? d.type === "tableHead" ? (u = false, a !== 0 && ($n(p, n, a, s, f), f = void 0, a = 0), s = { type: "table", start: Object.assign({}, d.start), end: Object.assign({}, d.end) }, p.add(t, 0, [["enter", s, n]])) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (r = true, c = void 0, o = [0, 0, 0, 0], l = [0, t + 1, 0, 0], u && (u = false, f = { type: "tableBody", start: Object.assign({}, d.start), end: Object.assign({}, d.end) }, p.add(t, 0, [["enter", f, n]])), i = d.type === "tableDelimiterRow" ? 2 : f ? 3 : 1) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") ? (r = false, l[2] === 0 && (o[1] !== 0 && (l[0] = l[1], c = He(p, n, o, i, void 0, c), o = [0, 0, 0, 0]), l[2] = t)) : d.type === "tableCellDivider" && (r ? r = false : (o[1] !== 0 && (l[0] = l[1], c = He(p, n, o, i, void 0, c)), o = l, l = [o[1], t, 0, 0])) : d.type === "tableHead" ? (u = true, a = t) : d.type === "tableRow" || d.type === "tableDelimiterRow" ? (a = t, o[1] !== 0 ? (l[0] = l[1], c = He(p, n, o, i, t, c)) : l[1] !== 0 && (c = He(p, n, l, i, t, c)), i = 0) : i && (d.type === "data" || d.type === "tableDelimiterMarker" || d.type === "tableDelimiterFiller") && (l[3] = t);
  }
  for (a !== 0 && $n(p, n, a, s, f), p.consume(n.events), t = -1; ++t < n.events.length; ) {
    const h = n.events[t];
    h[0] === "enter" && h[1].type === "table" && (h[1]._align = Cc(n.events, t));
  }
  return e2;
}
function He(e2, n, t, r, i, o) {
  const l = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", u = "tableContent";
  t[0] !== 0 && (o.end = Object.assign({}, Ce(n.events, t[0])), e2.add(t[0], 0, [["exit", o, n]]));
  const a = Ce(n.events, t[1]);
  if (o = { type: l, start: Object.assign({}, a), end: Object.assign({}, a) }, e2.add(t[1], 0, [["enter", o, n]]), t[2] !== 0) {
    const s = Ce(n.events, t[2]), f = Ce(n.events, t[3]), c = { type: u, start: Object.assign({}, s), end: Object.assign({}, f) };
    if (e2.add(t[2], 0, [["enter", c, n]]), r !== 2) {
      const p = n.events[t[2]], h = n.events[t[3]];
      if (p[1].end = Object.assign({}, h[1].end), p[1].type = "chunkText", p[1].contentType = "text", t[3] > t[2] + 1) {
        const d = t[2] + 1, y = t[3] - t[2] - 1;
        e2.add(d, y, []);
      }
    }
    e2.add(t[3] + 1, 0, [["exit", c, n]]);
  }
  return i !== void 0 && (o.end = Object.assign({}, Ce(n.events, i)), e2.add(i, 0, [["exit", o, n]]), o = void 0), o;
}
function $n(e2, n, t, r, i) {
  const o = [], l = Ce(n.events, t);
  i && (i.end = Object.assign({}, l), o.push(["exit", i, n])), r.end = Object.assign({}, l), o.push(["exit", r, n]), e2.add(t + 1, 0, o);
}
function Ce(e2, n) {
  const t = e2[n], r = t[0] === "enter" ? "start" : "end";
  return t[1][r];
}
const Tc = { name: "tasklistCheck", tokenize: Fc };
function zc() {
  return { text: { 91: Tc } };
}
function Fc(e2, n, t) {
  const r = this;
  return i;
  function i(a) {
    return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? t(a) : (e2.enter("taskListCheck"), e2.enter("taskListCheckMarker"), e2.consume(a), e2.exit("taskListCheckMarker"), o);
  }
  function o(a) {
    return j(a) ? (e2.enter("taskListCheckValueUnchecked"), e2.consume(a), e2.exit("taskListCheckValueUnchecked"), l) : a === 88 || a === 120 ? (e2.enter("taskListCheckValueChecked"), e2.consume(a), e2.exit("taskListCheckValueChecked"), l) : t(a);
  }
  function l(a) {
    return a === 93 ? (e2.enter("taskListCheckMarker"), e2.consume(a), e2.exit("taskListCheckMarker"), e2.exit("taskListCheck"), u) : t(a);
  }
  function u(a) {
    return z(a) ? n(a) : D(a) ? e2.check({ tokenize: _c }, n, t)(a) : t(a);
  }
}
function _c(e2, n, t) {
  return R(e2, r, "whitespace");
  function r(i) {
    return i === null ? t(i) : n(i);
  }
}
function Pc(e2) {
  return Xn([nc(), hc(), bc(e2), Ec(), zc()]);
}
const Dc = {};
function vc(e2) {
  const n = this, t = e2 || Dc, r = n.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), o = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
  i.push(Pc(t)), o.push(Ks()), l.push(Zs(t));
}
export {
  Oc as M,
  vc as r
};
