import { r as m } from "./react-vendor-BA2qNj4G.js";
var Fs = { exports: {} }, Yt = {};
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var vr = m, xr = Symbol.for("react.element"), Tr = Symbol.for("react.fragment"), Pr = Object.prototype.hasOwnProperty, kr = vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, wr = { key: true, ref: true, __self: true, __source: true };
function js(t, e, n) {
  var s, i = {}, o = null, r = null;
  n !== void 0 && (o = "" + n), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (r = e.ref);
  for (s in e) Pr.call(e, s) && !wr.hasOwnProperty(s) && (i[s] = e[s]);
  if (t && t.defaultProps) for (s in e = t.defaultProps, e) i[s] === void 0 && (i[s] = e[s]);
  return { $$typeof: xr, type: t, key: o, ref: r, props: i, _owner: kr.current };
}
Yt.Fragment = Tr;
Yt.jsx = js;
Yt.jsxs = js;
Fs.exports = Yt;
var G = Fs.exports;
const Oe = m.createContext({});
function Ne(t) {
  const e = m.useRef(null);
  return e.current === null && (e.current = t()), e.current;
}
const Ue = typeof window < "u", Bs = Ue ? m.useLayoutEffect : m.useEffect, Zt = m.createContext(null);
function ze(t, e) {
  t.indexOf(e) === -1 && t.push(e);
}
function He(t, e) {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}
const X = (t, e, n) => n > e ? e : n < t ? t : n;
let We = () => {
};
const Y = {}, Is = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Os(t) {
  return typeof t == "object" && t !== null;
}
const Ns = (t) => /^0[^.\s]+$/u.test(t);
function Ke(t) {
  let e;
  return () => (e === void 0 && (e = t()), e);
}
const W = (t) => t, Mr = (t, e) => (n) => e(t(n)), Et = (...t) => t.reduce(Mr), At = (t, e, n) => {
  const s = e - t;
  return s === 0 ? 1 : (n - t) / s;
};
class $e {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return ze(this.subscriptions, e), () => He(this.subscriptions, e);
  }
  notify(e, n, s) {
    const i = this.subscriptions.length;
    if (i) if (i === 1) this.subscriptions[0](e, n, s);
    else for (let o = 0; o < i; o++) {
      const r = this.subscriptions[o];
      r && r(e, n, s);
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const _ = (t) => t * 1e3, H = (t) => t / 1e3;
function Us(t, e) {
  return e ? t * (1e3 / e) : 0;
}
const zs = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t, Sr = 1e-7, br = 12;
function Ar(t, e, n, s, i) {
  let o, r, a = 0;
  do
    r = e + (n - e) / 2, o = zs(r, s, i) - t, o > 0 ? n = r : e = r;
  while (Math.abs(o) > Sr && ++a < br);
  return r;
}
function Lt(t, e, n, s) {
  if (t === e && n === s) return W;
  const i = (o) => Ar(o, 0, 1, t, n);
  return (o) => o === 0 || o === 1 ? o : zs(i(o), e, s);
}
const Hs = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2, Ws = (t) => (e) => 1 - t(1 - e), Ks = Lt(0.33, 1.53, 0.69, 0.99), _e = Ws(Ks), $s = Hs(_e), _s = (t) => (t *= 2) < 1 ? 0.5 * _e(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))), qe = (t) => 1 - Math.sin(Math.acos(t)), qs = Ws(qe), Gs = Hs(qe), Vr = Lt(0.42, 0, 1, 1), Cr = Lt(0, 0, 0.58, 1), Xs = Lt(0.42, 0, 0.58, 1), Dr = (t) => Array.isArray(t) && typeof t[0] != "number", Ys = (t) => Array.isArray(t) && typeof t[0] == "number", Rr = { linear: W, easeIn: Vr, easeInOut: Xs, easeOut: Cr, circIn: qe, circInOut: Gs, circOut: qs, backIn: _e, backInOut: $s, backOut: Ks, anticipate: _s }, Er = (t) => typeof t == "string", Pn = (t) => {
  if (Ys(t)) {
    We(t.length === 4);
    const [e, n, s, i] = t;
    return Lt(e, n, s, i);
  } else if (Er(t)) return Rr[t];
  return t;
}, Bt = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function Lr(t, e) {
  let n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), i = false, o = false;
  const r = /* @__PURE__ */ new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: false };
  function l(c) {
    r.has(c) && (u.schedule(c), t()), c(a);
  }
  const u = { schedule: (c, h = false, f = false) => {
    const p = f && i ? n : s;
    return h && r.add(c), p.has(c) || p.add(c), c;
  }, cancel: (c) => {
    s.delete(c), r.delete(c);
  }, process: (c) => {
    if (a = c, i) {
      o = true;
      return;
    }
    i = true, [n, s] = [s, n], n.forEach(l), n.clear(), i = false, o && (o = false, u.process(c));
  } };
  return u;
}
const Fr = 40;
function Zs(t, e) {
  let n = false, s = true;
  const i = { delta: 0, timestamp: 0, isProcessing: false }, o = () => n = true, r = Bt.reduce((x, S) => (x[S] = Lr(o), x), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: h, preRender: f, render: d, postRender: p } = r, v = () => {
    const x = Y.useManualTiming ? i.timestamp : performance.now();
    n = false, Y.useManualTiming || (i.delta = s ? 1e3 / 60 : Math.max(Math.min(x - i.timestamp, Fr), 1)), i.timestamp = x, i.isProcessing = true, a.process(i), l.process(i), u.process(i), c.process(i), h.process(i), f.process(i), d.process(i), p.process(i), i.isProcessing = false, n && e && (s = false, t(v));
  }, T = () => {
    n = true, s = true, i.isProcessing || t(v);
  };
  return { schedule: Bt.reduce((x, S) => {
    const k = r[S];
    return x[S] = (b, A = false, M = false) => (n || T(), k.schedule(b, A, M)), x;
  }, {}), cancel: (x) => {
    for (let S = 0; S < Bt.length; S++) r[Bt[S]].cancel(x);
  }, state: i, steps: r };
}
const { schedule: V, cancel: Q, state: j, steps: ee } = Zs(typeof requestAnimationFrame < "u" ? requestAnimationFrame : W, true);
let Ut;
function jr() {
  Ut = void 0;
}
const N = { now: () => (Ut === void 0 && N.set(j.isProcessing || Y.useManualTiming ? j.timestamp : performance.now()), Ut), set: (t) => {
  Ut = t, queueMicrotask(jr);
} }, Js = (t) => (e) => typeof e == "string" && e.startsWith(t), Qs = Js("--"), Br = Js("var(--"), Ge = (t) => Br(t) ? Ir.test(t.split("/*")[0].trim()) : false, Ir = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, vt = { test: (t) => typeof t == "number", parse: parseFloat, transform: (t) => t }, Vt = { ...vt, transform: (t) => X(0, 1, t) }, It = { ...vt, default: 1 }, wt = (t) => Math.round(t * 1e5) / 1e5, Xe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Or(t) {
  return t == null;
}
const Nr = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ye = (t, e) => (n) => !!(typeof n == "string" && Nr.test(n) && n.startsWith(t) || e && !Or(n) && Object.prototype.hasOwnProperty.call(n, e)), ti = (t, e, n) => (s) => {
  if (typeof s != "string") return s;
  const [i, o, r, a] = s.match(Xe);
  return { [t]: parseFloat(i), [e]: parseFloat(o), [n]: parseFloat(r), alpha: a !== void 0 ? parseFloat(a) : 1 };
}, Ur = (t) => X(0, 255, t), ne = { ...vt, transform: (t) => Math.round(Ur(t)) }, rt = { test: Ye("rgb", "red"), parse: ti("red", "green", "blue"), transform: ({ red: t, green: e, blue: n, alpha: s = 1 }) => "rgba(" + ne.transform(t) + ", " + ne.transform(e) + ", " + ne.transform(n) + ", " + wt(Vt.transform(s)) + ")" };
function zr(t) {
  let e = "", n = "", s = "", i = "";
  return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), s = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), s = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, s += s, i += i), { red: parseInt(e, 16), green: parseInt(n, 16), blue: parseInt(s, 16), alpha: i ? parseInt(i, 16) / 255 : 1 };
}
const ye = { test: Ye("#"), parse: zr, transform: rt.transform }, Ft = (t) => ({ test: (e) => typeof e == "string" && e.endsWith(t) && e.split(" ").length === 1, parse: parseFloat, transform: (e) => `${e}${t}` }), J = Ft("deg"), q = Ft("%"), w = Ft("px"), Hr = Ft("vh"), Wr = Ft("vw"), kn = { ...q, parse: (t) => q.parse(t) / 100, transform: (t) => q.transform(t * 100) }, ut = { test: Ye("hsl", "hue"), parse: ti("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: e, lightness: n, alpha: s = 1 }) => "hsla(" + Math.round(t) + ", " + q.transform(wt(e)) + ", " + q.transform(wt(n)) + ", " + wt(Vt.transform(s)) + ")" }, R = { test: (t) => rt.test(t) || ye.test(t) || ut.test(t), parse: (t) => rt.test(t) ? rt.parse(t) : ut.test(t) ? ut.parse(t) : ye.parse(t), transform: (t) => typeof t == "string" ? t : t.hasOwnProperty("red") ? rt.transform(t) : ut.transform(t), getAnimatableNone: (t) => {
  const e = R.parse(t);
  return e.alpha = 0, R.transform(e);
} }, Kr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function $r(t) {
  var _a2, _b;
  return isNaN(t) && typeof t == "string" && (((_a2 = t.match(Xe)) == null ? void 0 : _a2.length) || 0) + (((_b = t.match(Kr)) == null ? void 0 : _b.length) || 0) > 0;
}
const ei = "number", ni = "color", _r = "var", qr = "var(", wn = "${}", Gr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ct(t) {
  const e = t.toString(), n = [], s = { color: [], number: [], var: [] }, i = [];
  let o = 0;
  const a = e.replace(Gr, (l) => (R.test(l) ? (s.color.push(o), i.push(ni), n.push(R.parse(l))) : l.startsWith(qr) ? (s.var.push(o), i.push(_r), n.push(l)) : (s.number.push(o), i.push(ei), n.push(parseFloat(l))), ++o, wn)).split(wn);
  return { values: n, split: a, indexes: s, types: i };
}
function si(t) {
  return Ct(t).values;
}
function ii(t) {
  const { split: e, types: n } = Ct(t), s = e.length;
  return (i) => {
    let o = "";
    for (let r = 0; r < s; r++) if (o += e[r], i[r] !== void 0) {
      const a = n[r];
      a === ei ? o += wt(i[r]) : a === ni ? o += R.transform(i[r]) : o += i[r];
    }
    return o;
  };
}
const Xr = (t) => typeof t == "number" ? 0 : R.test(t) ? R.getAnimatableNone(t) : t;
function Yr(t) {
  const e = si(t);
  return ii(t)(e.map(Xr));
}
const tt = { test: $r, parse: si, createTransformer: ii, getAnimatableNone: Yr };
function se(t, e, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
}
function Zr({ hue: t, saturation: e, lightness: n, alpha: s }) {
  t /= 360, e /= 100, n /= 100;
  let i = 0, o = 0, r = 0;
  if (!e) i = o = r = n;
  else {
    const a = n < 0.5 ? n * (1 + e) : n + e - n * e, l = 2 * n - a;
    i = se(l, a, t + 1 / 3), o = se(l, a, t), r = se(l, a, t - 1 / 3);
  }
  return { red: Math.round(i * 255), green: Math.round(o * 255), blue: Math.round(r * 255), alpha: s };
}
function Kt(t, e) {
  return (n) => n > 0 ? e : t;
}
const C = (t, e, n) => t + (e - t) * n, ie = (t, e, n) => {
  const s = t * t, i = n * (e * e - s) + s;
  return i < 0 ? 0 : Math.sqrt(i);
}, Jr = [ye, rt, ut], Qr = (t) => Jr.find((e) => e.test(t));
function Mn(t) {
  const e = Qr(t);
  if (!e) return false;
  let n = e.parse(t);
  return e === ut && (n = Zr(n)), n;
}
const Sn = (t, e) => {
  const n = Mn(t), s = Mn(e);
  if (!n || !s) return Kt(t, e);
  const i = { ...n };
  return (o) => (i.red = ie(n.red, s.red, o), i.green = ie(n.green, s.green, o), i.blue = ie(n.blue, s.blue, o), i.alpha = C(n.alpha, s.alpha, o), rt.transform(i));
}, ge = /* @__PURE__ */ new Set(["none", "hidden"]);
function to(t, e) {
  return ge.has(t) ? (n) => n <= 0 ? t : e : (n) => n >= 1 ? e : t;
}
function eo(t, e) {
  return (n) => C(t, e, n);
}
function Ze(t) {
  return typeof t == "number" ? eo : typeof t == "string" ? Ge(t) ? Kt : R.test(t) ? Sn : io : Array.isArray(t) ? ri : typeof t == "object" ? R.test(t) ? Sn : no : Kt;
}
function ri(t, e) {
  const n = [...t], s = n.length, i = t.map((o, r) => Ze(o)(o, e[r]));
  return (o) => {
    for (let r = 0; r < s; r++) n[r] = i[r](o);
    return n;
  };
}
function no(t, e) {
  const n = { ...t, ...e }, s = {};
  for (const i in n) t[i] !== void 0 && e[i] !== void 0 && (s[i] = Ze(t[i])(t[i], e[i]));
  return (i) => {
    for (const o in s) n[o] = s[o](i);
    return n;
  };
}
function so(t, e) {
  const n = [], s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < e.values.length; i++) {
    const o = e.types[i], r = t.indexes[o][s[o]], a = t.values[r] ?? 0;
    n[i] = a, s[o]++;
  }
  return n;
}
const io = (t, e) => {
  const n = tt.createTransformer(e), s = Ct(t), i = Ct(e);
  return s.indexes.var.length === i.indexes.var.length && s.indexes.color.length === i.indexes.color.length && s.indexes.number.length >= i.indexes.number.length ? ge.has(t) && !i.values.length || ge.has(e) && !s.values.length ? to(t, e) : Et(ri(so(s, i), i.values), n) : Kt(t, e);
};
function oi(t, e, n) {
  return typeof t == "number" && typeof e == "number" && typeof n == "number" ? C(t, e, n) : Ze(t)(t, e);
}
const ro = (t) => {
  const e = ({ timestamp: n }) => t(n);
  return { start: (n = true) => V.update(e, n), stop: () => Q(e), now: () => j.isProcessing ? j.timestamp : N.now() };
}, ai = (t, e, n = 10) => {
  let s = "";
  const i = Math.max(Math.round(e / n), 2);
  for (let o = 0; o < i; o++) s += Math.round(t(o / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${s.substring(0, s.length - 2)})`;
}, $t = 2e4;
function Je(t) {
  let e = 0;
  const n = 50;
  let s = t.next(e);
  for (; !s.done && e < $t; ) e += n, s = t.next(e);
  return e >= $t ? 1 / 0 : e;
}
function oo(t, e = 100, n) {
  const s = n({ ...t, keyframes: [0, e] }), i = Math.min(Je(s), $t);
  return { type: "keyframes", ease: (o) => s.next(i * o).value / e, duration: H(i) };
}
const ao = 5;
function li(t, e, n) {
  const s = Math.max(e - ao, 0);
  return Us(n - t(s), e - s);
}
const D = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 }, re = 1e-3;
function lo({ duration: t = D.duration, bounce: e = D.bounce, velocity: n = D.velocity, mass: s = D.mass }) {
  let i, o, r = 1 - e;
  r = X(D.minDamping, D.maxDamping, r), t = X(D.minDuration, D.maxDuration, H(t)), r < 1 ? (i = (u) => {
    const c = u * r, h = c * t, f = c - n, d = ve(u, r), p = Math.exp(-h);
    return re - f / d * p;
  }, o = (u) => {
    const h = u * r * t, f = h * n + n, d = Math.pow(r, 2) * Math.pow(u, 2) * t, p = Math.exp(-h), v = ve(Math.pow(u, 2), r);
    return (-i(u) + re > 0 ? -1 : 1) * ((f - d) * p) / v;
  }) : (i = (u) => {
    const c = Math.exp(-u * t), h = (u - n) * t + 1;
    return -re + c * h;
  }, o = (u) => {
    const c = Math.exp(-u * t), h = (n - u) * (t * t);
    return c * h;
  });
  const a = 5 / t, l = uo(i, o, a);
  if (t = _(t), isNaN(l)) return { stiffness: D.stiffness, damping: D.damping, duration: t };
  {
    const u = Math.pow(l, 2) * s;
    return { stiffness: u, damping: r * 2 * Math.sqrt(s * u), duration: t };
  }
}
const co = 12;
function uo(t, e, n) {
  let s = n;
  for (let i = 1; i < co; i++) s = s - t(s) / e(s);
  return s;
}
function ve(t, e) {
  return t * Math.sqrt(1 - e * e);
}
const ho = ["duration", "bounce"], fo = ["stiffness", "damping", "mass"];
function bn(t, e) {
  return e.some((n) => t[n] !== void 0);
}
function po(t) {
  let e = { velocity: D.velocity, stiffness: D.stiffness, damping: D.damping, mass: D.mass, isResolvedFromDuration: false, ...t };
  if (!bn(t, fo) && bn(t, ho)) if (t.visualDuration) {
    const n = t.visualDuration, s = 2 * Math.PI / (n * 1.2), i = s * s, o = 2 * X(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
    e = { ...e, mass: D.mass, stiffness: i, damping: o };
  } else {
    const n = lo(t);
    e = { ...e, ...n, mass: D.mass }, e.isResolvedFromDuration = true;
  }
  return e;
}
function _t(t = D.visualDuration, e = D.bounce) {
  const n = typeof t != "object" ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
  let { restSpeed: s, restDelta: i } = n;
  const o = n.keyframes[0], r = n.keyframes[n.keyframes.length - 1], a = { done: false, value: o }, { stiffness: l, damping: u, mass: c, duration: h, velocity: f, isResolvedFromDuration: d } = po({ ...n, velocity: -H(n.velocity || 0) }), p = f || 0, v = u / (2 * Math.sqrt(l * c)), T = r - o, g = H(Math.sqrt(l / c)), P = Math.abs(T) < 5;
  s || (s = P ? D.restSpeed.granular : D.restSpeed.default), i || (i = P ? D.restDelta.granular : D.restDelta.default);
  let x;
  if (v < 1) {
    const k = ve(g, v);
    x = (b) => {
      const A = Math.exp(-v * g * b);
      return r - A * ((p + v * g * T) / k * Math.sin(k * b) + T * Math.cos(k * b));
    };
  } else if (v === 1) x = (k) => r - Math.exp(-g * k) * (T + (p + g * T) * k);
  else {
    const k = g * Math.sqrt(v * v - 1);
    x = (b) => {
      const A = Math.exp(-v * g * b), M = Math.min(k * b, 300);
      return r - A * ((p + v * g * T) * Math.sinh(M) + k * T * Math.cosh(M)) / k;
    };
  }
  const S = { calculatedDuration: d && h || null, next: (k) => {
    const b = x(k);
    if (d) a.done = k >= h;
    else {
      let A = k === 0 ? p : 0;
      v < 1 && (A = k === 0 ? _(p) : li(x, k, b));
      const M = Math.abs(A) <= s, L = Math.abs(r - b) <= i;
      a.done = M && L;
    }
    return a.value = a.done ? r : b, a;
  }, toString: () => {
    const k = Math.min(Je(S), $t), b = ai((A) => S.next(k * A).value, k, 30);
    return k + "ms " + b;
  }, toTransition: () => {
  } };
  return S;
}
_t.applyToOptions = (t) => {
  const e = oo(t, 100, _t);
  return t.ease = e.ease, t.duration = _(e.duration), t.type = "keyframes", t;
};
function xe({ keyframes: t, velocity: e = 0, power: n = 0.8, timeConstant: s = 325, bounceDamping: i = 10, bounceStiffness: o = 500, modifyTarget: r, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const h = t[0], f = { done: false, value: h }, d = (M) => a !== void 0 && M < a || l !== void 0 && M > l, p = (M) => a === void 0 ? l : l === void 0 || Math.abs(a - M) < Math.abs(l - M) ? a : l;
  let v = n * e;
  const T = h + v, g = r === void 0 ? T : r(T);
  g !== T && (v = g - h);
  const P = (M) => -v * Math.exp(-M / s), x = (M) => g + P(M), S = (M) => {
    const L = P(M), I = x(M);
    f.done = Math.abs(L) <= u, f.value = f.done ? g : I;
  };
  let k, b;
  const A = (M) => {
    d(f.value) && (k = M, b = _t({ keyframes: [f.value, p(f.value)], velocity: li(x, M, f.value), damping: i, stiffness: o, restDelta: u, restSpeed: c }));
  };
  return A(0), { calculatedDuration: null, next: (M) => {
    let L = false;
    return !b && k === void 0 && (L = true, S(M), A(M)), k !== void 0 && M >= k ? b.next(M - k) : (!L && S(M), f);
  } };
}
function mo(t, e, n) {
  const s = [], i = n || Y.mix || oi, o = t.length - 1;
  for (let r = 0; r < o; r++) {
    let a = i(t[r], t[r + 1]);
    if (e) {
      const l = Array.isArray(e) ? e[r] || W : e;
      a = Et(l, a);
    }
    s.push(a);
  }
  return s;
}
function yo(t, e, { clamp: n = true, ease: s, mixer: i } = {}) {
  const o = t.length;
  if (We(o === e.length), o === 1) return () => e[0];
  if (o === 2 && e[0] === e[1]) return () => e[1];
  const r = t[0] === t[1];
  t[0] > t[o - 1] && (t = [...t].reverse(), e = [...e].reverse());
  const a = mo(e, s, i), l = a.length, u = (c) => {
    if (r && c < t[0]) return e[0];
    let h = 0;
    if (l > 1) for (; h < t.length - 2 && !(c < t[h + 1]); h++) ;
    const f = At(t[h], t[h + 1], c);
    return a[h](f);
  };
  return n ? (c) => u(X(t[0], t[o - 1], c)) : u;
}
function go(t, e) {
  const n = t[t.length - 1];
  for (let s = 1; s <= e; s++) {
    const i = At(0, e, s);
    t.push(C(n, 1, i));
  }
}
function vo(t) {
  const e = [0];
  return go(e, t.length - 1), e;
}
function xo(t, e) {
  return t.map((n) => n * e);
}
function To(t, e) {
  return t.map(() => e || Xs).splice(0, t.length - 1);
}
function Mt({ duration: t = 300, keyframes: e, times: n, ease: s = "easeInOut" }) {
  const i = Dr(s) ? s.map(Pn) : Pn(s), o = { done: false, value: e[0] }, r = xo(n && n.length === e.length ? n : vo(e), t), a = yo(r, e, { ease: Array.isArray(i) ? i : To(e, i) });
  return { calculatedDuration: t, next: (l) => (o.value = a(l), o.done = l >= t, o) };
}
const Po = (t) => t !== null;
function Qe(t, { repeat: e, repeatType: n = "loop" }, s, i = 1) {
  const o = t.filter(Po), a = i < 0 || e && n !== "loop" && e % 2 === 1 ? 0 : o.length - 1;
  return !a || s === void 0 ? o[a] : s;
}
const ko = { decay: xe, inertia: xe, tween: Mt, keyframes: Mt, spring: _t };
function ci(t) {
  typeof t.type == "string" && (t.type = ko[t.type]);
}
class tn {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((e) => {
      this.resolve = e;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
}
const wo = (t) => t / 100;
class en extends tn {
  constructor(e) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var _a2, _b;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== N.now() && this.tick(N.now()), this.isStopped = true, this.state !== "idle" && (this.teardown(), (_b = (_a2 = this.options).onStop) == null ? void 0 : _b.call(_a2));
    }, this.options = e, this.initAnimation(), this.play(), e.autoplay === false && this.pause();
  }
  initAnimation() {
    const { options: e } = this;
    ci(e);
    const { type: n = Mt, repeat: s = 0, repeatDelay: i = 0, repeatType: o, velocity: r = 0 } = e;
    let { keyframes: a } = e;
    const l = n || Mt;
    l !== Mt && typeof a[0] != "number" && (this.mixKeyframes = Et(wo, oi(a[0], a[1])), a = [0, 100]);
    const u = l({ ...e, keyframes: a });
    o === "mirror" && (this.mirroredGenerator = l({ ...e, keyframes: [...a].reverse(), velocity: -r })), u.calculatedDuration === null && (u.calculatedDuration = Je(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + i, this.totalDuration = this.resolvedDuration * (s + 1) - i, this.generator = u;
  }
  updateTime(e) {
    const n = Math.round(e - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(e, n = false) {
    const { generator: s, totalDuration: i, mixKeyframes: o, mirroredGenerator: r, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null) return s.next(0);
    const { delay: u = 0, keyframes: c, repeat: h, repeatType: f, repeatDelay: d, type: p, onUpdate: v, finalKeyframe: T } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - i / this.speed, this.startTime)), n ? this.currentTime = e : this.updateTime(e);
    const g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), P = this.playbackSpeed >= 0 ? g < 0 : g > i;
    this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let x = this.currentTime, S = s;
    if (h) {
      const M = Math.min(this.currentTime, i) / a;
      let L = Math.floor(M), I = M % 1;
      !I && M >= 1 && (I = 1), I === 1 && L--, L = Math.min(L, h + 1), !!(L % 2) && (f === "reverse" ? (I = 1 - I, d && (I -= d / a)) : f === "mirror" && (S = r)), x = X(0, 1, I) * a;
    }
    const k = P ? { done: false, value: c[0] } : S.next(x);
    o && (k.value = o(k.value));
    let { done: b } = k;
    !P && l !== null && (b = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const A = this.holdTime === null && (this.state === "finished" || this.state === "running" && b);
    return A && p !== xe && (k.value = Qe(c, this.options, T, this.speed)), v && v(k.value), A && this.finish(), k;
  }
  then(e, n) {
    return this.finished.then(e, n);
  }
  get duration() {
    return H(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + H(e);
  }
  get time() {
    return H(this.currentTime);
  }
  set time(e) {
    var _a2;
    e = _(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), (_a2 = this.driver) == null ? void 0 : _a2.start(false);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.updateTime(N.now());
    const n = this.playbackSpeed !== e;
    this.playbackSpeed = e, n && (this.time = H(this.currentTime));
  }
  play() {
    var _a2, _b;
    if (this.isStopped) return;
    const { driver: e = ro, startTime: n } = this.options;
    this.driver || (this.driver = e((i) => this.tick(i))), (_b = (_a2 = this.options).onPlay) == null ? void 0 : _b.call(_a2);
    const s = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = n ?? s), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(N.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var _a2, _b;
    this.notifyFinished(), this.teardown(), this.state = "finished", (_b = (_a2 = this.options).onComplete) == null ? void 0 : _b.call(_a2);
  }
  cancel() {
    var _a2, _b;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (_b = (_a2 = this.options).onCancel) == null ? void 0 : _b.call(_a2);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(e) {
    return this.startTime = 0, this.tick(e, true);
  }
  attachTimeline(e) {
    var _a2;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (_a2 = this.driver) == null ? void 0 : _a2.stop(), e.observe(this);
  }
}
function Mo(t) {
  for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
}
const ot = (t) => t * 180 / Math.PI, Te = (t) => {
  const e = ot(Math.atan2(t[1], t[0]));
  return Pe(e);
}, So = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2, rotate: Te, rotateZ: Te, skewX: (t) => ot(Math.atan(t[1])), skewY: (t) => ot(Math.atan(t[2])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2 }, Pe = (t) => (t = t % 360, t < 0 && (t += 360), t), An = Te, Vn = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]), Cn = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]), bo = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Vn, scaleY: Cn, scale: (t) => (Vn(t) + Cn(t)) / 2, rotateX: (t) => Pe(ot(Math.atan2(t[6], t[5]))), rotateY: (t) => Pe(ot(Math.atan2(-t[2], t[0]))), rotateZ: An, rotate: An, skewX: (t) => ot(Math.atan(t[4])), skewY: (t) => ot(Math.atan(t[1])), skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2 };
function ke(t) {
  return t.includes("scale") ? 1 : 0;
}
function we(t, e) {
  if (!t || t === "none") return ke(e);
  const n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let s, i;
  if (n) s = bo, i = n;
  else {
    const a = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    s = So, i = a;
  }
  if (!i) return ke(e);
  const o = s[e], r = i[1].split(",").map(Vo);
  return typeof o == "function" ? o(r) : r[o];
}
const Ao = (t, e) => {
  const { transform: n = "none" } = getComputedStyle(t);
  return we(n, e);
};
function Vo(t) {
  return parseFloat(t.trim());
}
const xt = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], Tt = new Set(xt), Dn = (t) => t === vt || t === w, Co = /* @__PURE__ */ new Set(["x", "y", "z"]), Do = xt.filter((t) => !Co.has(t));
function Ro(t) {
  const e = [];
  return Do.forEach((n) => {
    const s = t.getValue(n);
    s !== void 0 && (e.push([n, s.get()]), s.set(n.startsWith("scale") ? 1 : 0));
  }), e;
}
const at = { width: ({ x: t }, { paddingLeft: e = "0", paddingRight: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), height: ({ y: t }, { paddingTop: e = "0", paddingBottom: n = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(n), top: (t, { top: e }) => parseFloat(e), left: (t, { left: e }) => parseFloat(e), bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min), right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min), x: (t, { transform: e }) => we(e, "x"), y: (t, { transform: e }) => we(e, "y") };
at.translateX = at.x;
at.translateY = at.y;
const lt = /* @__PURE__ */ new Set();
let Me = false, Se = false, be = false;
function ui() {
  if (Se) {
    const t = Array.from(lt).filter((s) => s.needsMeasurement), e = new Set(t.map((s) => s.element)), n = /* @__PURE__ */ new Map();
    e.forEach((s) => {
      const i = Ro(s);
      i.length && (n.set(s, i), s.render());
    }), t.forEach((s) => s.measureInitialState()), e.forEach((s) => {
      s.render();
      const i = n.get(s);
      i && i.forEach(([o, r]) => {
        var _a2;
        (_a2 = s.getValue(o)) == null ? void 0 : _a2.set(r);
      });
    }), t.forEach((s) => s.measureEndState()), t.forEach((s) => {
      s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
    });
  }
  Se = false, Me = false, lt.forEach((t) => t.complete(be)), lt.clear();
}
function hi() {
  lt.forEach((t) => {
    t.readKeyframes(), t.needsMeasurement && (Se = true);
  });
}
function Eo() {
  be = true, hi(), ui(), be = false;
}
class nn {
  constructor(e, n, s, i, o, r = false) {
    this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...e], this.onComplete = n, this.name = s, this.motionValue = i, this.element = o, this.isAsync = r;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (lt.add(this), Me || (Me = true, V.read(hi), V.resolveKeyframes(ui))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, name: n, element: s, motionValue: i } = this;
    if (e[0] === null) {
      const o = i == null ? void 0 : i.get(), r = e[e.length - 1];
      if (o !== void 0) e[0] = o;
      else if (s && n) {
        const a = s.readValue(n, r);
        a != null && (e[0] = a);
      }
      e[0] === void 0 && (e[0] = r), i && o === void 0 && i.set(e[0]);
    }
    Mo(e);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(e = false) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), lt.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (lt.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Lo = (t) => t.startsWith("--");
function Fo(t, e, n) {
  Lo(e) ? t.style.setProperty(e, n) : t.style[e] = n;
}
const jo = Ke(() => window.ScrollTimeline !== void 0), Bo = {};
function Io(t, e) {
  const n = Ke(t);
  return () => Bo[e] ?? n();
}
const fi = Io(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return false;
  }
  return true;
}, "linearEasing"), kt = ([t, e, n, s]) => `cubic-bezier(${t}, ${e}, ${n}, ${s})`, Rn = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: kt([0, 0.65, 0.55, 1]), circOut: kt([0.55, 0, 1, 0.45]), backIn: kt([0.31, 0.01, 0.66, -0.59]), backOut: kt([0.33, 1.53, 0.69, 0.99]) };
function di(t, e) {
  if (t) return typeof t == "function" ? fi() ? ai(t, e) : "ease-out" : Ys(t) ? kt(t) : Array.isArray(t) ? t.map((n) => di(n, e) || Rn.easeOut) : Rn[t];
}
function Oo(t, e, n, { delay: s = 0, duration: i = 300, repeat: o = 0, repeatType: r = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = { [e]: n };
  l && (c.offset = l);
  const h = di(a, i);
  Array.isArray(h) && (c.easing = h);
  const f = { delay: s, duration: i, easing: Array.isArray(h) ? "linear" : h, fill: "both", iterations: o + 1, direction: r === "reverse" ? "alternate" : "normal" };
  return u && (f.pseudoElement = u), t.animate(c, f);
}
function pi(t) {
  return typeof t == "function" && "applyToOptions" in t;
}
function No({ type: t, ...e }) {
  return pi(t) && fi() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e);
}
class Uo extends tn {
  constructor(e) {
    if (super(), this.finishedTime = null, this.isStopped = false, !e) return;
    const { element: n, name: s, keyframes: i, pseudoElement: o, allowFlatten: r = false, finalKeyframe: a, onComplete: l } = e;
    this.isPseudoElement = !!o, this.allowFlatten = r, this.options = e, We(typeof e.type != "string");
    const u = No(e);
    this.animation = Oo(n, s, i, u, o), u.autoplay === false && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !o) {
        const c = Qe(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : Fo(n, s, c), this.animation.cancel();
      }
      l == null ? void 0 : l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var _a2, _b;
    (_b = (_a2 = this.animation).finish) == null ? void 0 : _b.call(_a2);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = true;
    const { state: e } = this;
    e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var _a2, _b;
    this.isPseudoElement || ((_b = (_a2 = this.animation).commitStyles) == null ? void 0 : _b.call(_a2));
  }
  get duration() {
    var _a2, _b;
    const e = ((_b = (_a2 = this.animation.effect) == null ? void 0 : _a2.getComputedTiming) == null ? void 0 : _b.call(_a2).duration) || 0;
    return H(Number(e));
  }
  get iterationDuration() {
    const { delay: e = 0 } = this.options || {};
    return this.duration + H(e);
  }
  get time() {
    return H(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    this.finishedTime = null, this.animation.currentTime = _(e);
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(e) {
    this.animation.startTime = e;
  }
  attachTimeline({ timeline: e, observe: n }) {
    var _a2;
    return this.allowFlatten && ((_a2 = this.animation.effect) == null ? void 0 : _a2.updateTiming({ easing: "linear" })), this.animation.onfinish = null, e && jo() ? (this.animation.timeline = e, W) : n(this);
  }
}
const mi = { anticipate: _s, backInOut: $s, circInOut: Gs };
function zo(t) {
  return t in mi;
}
function Ho(t) {
  typeof t.ease == "string" && zo(t.ease) && (t.ease = mi[t.ease]);
}
const En = 10;
class Wo extends Uo {
  constructor(e) {
    Ho(e), ci(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
  }
  updateMotionValue(e) {
    const { motionValue: n, onUpdate: s, onComplete: i, element: o, ...r } = this.options;
    if (!n) return;
    if (e !== void 0) {
      n.set(e);
      return;
    }
    const a = new en({ ...r, autoplay: false }), l = _(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - En).value, a.sample(l).value, En), a.stop();
  }
}
const Ln = (t, e) => e === "zIndex" ? false : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (tt.test(t) || t === "0") && !t.startsWith("url("));
function Ko(t) {
  const e = t[0];
  if (t.length === 1) return true;
  for (let n = 0; n < t.length; n++) if (t[n] !== e) return true;
}
function $o(t, e, n, s) {
  const i = t[0];
  if (i === null) return false;
  if (e === "display" || e === "visibility") return true;
  const o = t[t.length - 1], r = Ln(i, e), a = Ln(o, e);
  return !r || !a ? false : Ko(t) || (n === "spring" || pi(n)) && s;
}
function Ae(t) {
  t.duration = 0, t.type = "keyframes";
}
const _o = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), qo = Ke(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Go(t) {
  var _a2;
  const { motionValue: e, name: n, repeatDelay: s, repeatType: i, damping: o, type: r } = t;
  if (!(((_a2 = e == null ? void 0 : e.owner) == null ? void 0 : _a2.current) instanceof HTMLElement)) return false;
  const { onUpdate: l, transformTemplate: u } = e.owner.getProps();
  return qo() && n && _o.has(n) && (n !== "transform" || !u) && !l && !s && i !== "mirror" && o !== 0 && r !== "inertia";
}
const Xo = 40;
class Yo extends tn {
  constructor({ autoplay: e = true, delay: n = 0, type: s = "keyframes", repeat: i = 0, repeatDelay: o = 0, repeatType: r = "loop", keyframes: a, name: l, motionValue: u, element: c, ...h }) {
    var _a2;
    super(), this.stop = () => {
      var _a3, _b;
      this._animation && (this._animation.stop(), (_a3 = this.stopTimeline) == null ? void 0 : _a3.call(this)), (_b = this.keyframeResolver) == null ? void 0 : _b.cancel();
    }, this.createdAt = N.now();
    const f = { autoplay: e, delay: n, type: s, repeat: i, repeatDelay: o, repeatType: r, name: l, motionValue: u, element: c, ...h }, d = (c == null ? void 0 : c.KeyframeResolver) || nn;
    this.keyframeResolver = new d(a, (p, v, T) => this.onKeyframesResolved(p, v, f, !T), l, u, c), (_a2 = this.keyframeResolver) == null ? void 0 : _a2.scheduleResolve();
  }
  onKeyframesResolved(e, n, s, i) {
    this.keyframeResolver = void 0;
    const { name: o, type: r, velocity: a, delay: l, isHandoff: u, onUpdate: c } = s;
    this.resolvedAt = N.now(), $o(e, o, r, a) || ((Y.instantAnimations || !l) && (c == null ? void 0 : c(Qe(e, s, n))), e[0] = e[e.length - 1], Ae(s), s.repeat = 0);
    const f = { startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Xo ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: n, ...s, keyframes: e }, d = !u && Go(f) ? new Wo({ ...f, element: f.motionValue.owner.current }) : new en(f);
    d.finished.then(() => this.notifyFinished()).catch(W), this.pendingTimeline && (this.stopTimeline = d.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(e, n) {
    return this.finished.finally(e).then(() => {
    });
  }
  get animation() {
    var _a2;
    return this._animation || ((_a2 = this.keyframeResolver) == null ? void 0 : _a2.resume(), Eo()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var _a2;
    this._animation && this.animation.cancel(), (_a2 = this.keyframeResolver) == null ? void 0 : _a2.cancel();
  }
}
const Zo = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Jo(t) {
  const e = Zo.exec(t);
  if (!e) return [,];
  const [, n, s, i] = e;
  return [`--${n ?? s}`, i];
}
function yi(t, e, n = 1) {
  const [s, i] = Jo(t);
  if (!s) return;
  const o = window.getComputedStyle(e).getPropertyValue(s);
  if (o) {
    const r = o.trim();
    return Is(r) ? parseFloat(r) : r;
  }
  return Ge(i) ? yi(i, e, n + 1) : i;
}
function sn(t, e) {
  return (t == null ? void 0 : t[e]) ?? (t == null ? void 0 : t.default) ?? t;
}
const gi = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...xt]), Qo = { test: (t) => t === "auto", parse: (t) => t }, vi = (t) => (e) => e.test(t), xi = [vt, w, q, J, Wr, Hr, Qo], Fn = (t) => xi.find(vi(t));
function ta(t) {
  return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Ns(t) : true;
}
const ea = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function na(t) {
  const [e, n] = t.slice(0, -1).split("(");
  if (e === "drop-shadow") return t;
  const [s] = n.match(Xe) || [];
  if (!s) return t;
  const i = n.replace(s, "");
  let o = ea.has(e) ? 1 : 0;
  return s !== n && (o *= 100), e + "(" + o + i + ")";
}
const sa = /\b([a-z-]*)\(.*?\)/gu, Ve = { ...tt, getAnimatableNone: (t) => {
  const e = t.match(sa);
  return e ? e.map(na).join(" ") : t;
} }, jn = { ...vt, transform: Math.round }, ia = { rotate: J, rotateX: J, rotateY: J, rotateZ: J, scale: It, scaleX: It, scaleY: It, scaleZ: It, skew: J, skewX: J, skewY: J, distance: w, translateX: w, translateY: w, translateZ: w, x: w, y: w, z: w, perspective: w, transformPerspective: w, opacity: Vt, originX: kn, originY: kn, originZ: w }, rn = { borderWidth: w, borderTopWidth: w, borderRightWidth: w, borderBottomWidth: w, borderLeftWidth: w, borderRadius: w, radius: w, borderTopLeftRadius: w, borderTopRightRadius: w, borderBottomRightRadius: w, borderBottomLeftRadius: w, width: w, maxWidth: w, height: w, maxHeight: w, top: w, right: w, bottom: w, left: w, padding: w, paddingTop: w, paddingRight: w, paddingBottom: w, paddingLeft: w, margin: w, marginTop: w, marginRight: w, marginBottom: w, marginLeft: w, backgroundPositionX: w, backgroundPositionY: w, ...ia, zIndex: jn, fillOpacity: Vt, strokeOpacity: Vt, numOctaves: jn }, ra = { ...rn, color: R, backgroundColor: R, outlineColor: R, fill: R, stroke: R, borderColor: R, borderTopColor: R, borderRightColor: R, borderBottomColor: R, borderLeftColor: R, filter: Ve, WebkitFilter: Ve }, Ti = (t) => ra[t];
function Pi(t, e) {
  let n = Ti(t);
  return n !== Ve && (n = tt), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0;
}
const oa = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function aa(t, e, n) {
  let s = 0, i;
  for (; s < t.length && !i; ) {
    const o = t[s];
    typeof o == "string" && !oa.has(o) && Ct(o).values.length && (i = t[s]), s++;
  }
  if (i && n) for (const o of e) t[o] = Pi(n, i);
}
class la extends nn {
  constructor(e, n, s, i, o) {
    super(e, n, s, i, o, true);
  }
  readKeyframes() {
    const { unresolvedKeyframes: e, element: n, name: s } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < e.length; l++) {
      let u = e[l];
      if (typeof u == "string" && (u = u.trim(), Ge(u))) {
        const c = yi(u, n.current);
        c !== void 0 && (e[l] = c), l === e.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !gi.has(s) || e.length !== 2) return;
    const [i, o] = e, r = Fn(i), a = Fn(o);
    if (r !== a) if (Dn(r) && Dn(a)) for (let l = 0; l < e.length; l++) {
      const u = e[l];
      typeof u == "string" && (e[l] = parseFloat(u));
    }
    else at[s] && (this.needsMeasurement = true);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: e, name: n } = this, s = [];
    for (let i = 0; i < e.length; i++) (e[i] === null || ta(e[i])) && s.push(i);
    s.length && aa(e, s, n);
  }
  measureInitialState() {
    const { element: e, unresolvedKeyframes: n, name: s } = this;
    if (!e || !e.current) return;
    s === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = at[s](e.measureViewportBox(), window.getComputedStyle(e.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && e.getValue(s, i).jump(i, false);
  }
  measureEndState() {
    var _a2;
    const { element: e, name: n, unresolvedKeyframes: s } = this;
    if (!e || !e.current) return;
    const i = e.getValue(n);
    i && i.jump(this.measuredOrigin, false);
    const o = s.length - 1, r = s[o];
    s[o] = at[n](e.measureViewportBox(), window.getComputedStyle(e.current)), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), ((_a2 = this.removedTransforms) == null ? void 0 : _a2.length) && this.removedTransforms.forEach(([a, l]) => {
      e.getValue(a).set(l);
    }), this.resolveNoneKeyframes();
  }
}
function ca(t, e, n) {
  if (t instanceof EventTarget) return [t];
  if (typeof t == "string") {
    let s = document;
    const i = (n == null ? void 0 : n[t]) ?? s.querySelectorAll(t);
    return i ? Array.from(i) : [];
  }
  return Array.from(t);
}
const ki = (t, e) => e && typeof t == "number" ? e.transform(t) : t;
function wi(t) {
  return Os(t) && "offsetHeight" in t;
}
const Bn = 30, ua = (t) => !isNaN(parseFloat(t));
class ha {
  constructor(e, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
      var _a2;
      const i = N.now();
      if (this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && ((_a2 = this.events.change) == null ? void 0 : _a2.notify(this.current), this.dependents)) for (const o of this.dependents) o.dirty();
    }, this.hasAnimated = false, this.setCurrent(e), this.owner = n.owner;
  }
  setCurrent(e) {
    this.current = e, this.updatedAt = N.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = ua(this.current));
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, n) {
    this.events[e] || (this.events[e] = new $e());
    const s = this.events[e].add(n);
    return e === "change" ? () => {
      s(), V.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : s;
  }
  clearListeners() {
    for (const e in this.events) this.events[e].clear();
  }
  attach(e, n) {
    this.passiveEffect = e, this.stopPassiveEffect = n;
  }
  set(e) {
    this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
  }
  setWithVelocity(e, n, s) {
    this.set(n), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s;
  }
  jump(e, n = true) {
    this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var _a2;
    (_a2 = this.events.change) == null ? void 0 : _a2.notify(this.current);
  }
  addDependent(e) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(e);
  }
  removeDependent(e) {
    this.dependents && this.dependents.delete(e);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const e = N.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Bn) return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Bn);
    return Us(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(e) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = true, this.animation = e(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var _a2, _b;
    (_a2 = this.dependents) == null ? void 0 : _a2.clear(), (_b = this.events.destroy) == null ? void 0 : _b.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function yt(t, e) {
  return new ha(t, e);
}
const { schedule: on } = Zs(queueMicrotask, false), $ = { x: false, y: false };
function Mi() {
  return $.x || $.y;
}
function fa(t) {
  return t === "x" || t === "y" ? $[t] ? null : ($[t] = true, () => {
    $[t] = false;
  }) : $.x || $.y ? null : ($.x = $.y = true, () => {
    $.x = $.y = false;
  });
}
function Si(t, e) {
  const n = ca(t), s = new AbortController(), i = { passive: true, ...e, signal: s.signal };
  return [n, i, () => s.abort()];
}
function In(t) {
  return !(t.pointerType === "touch" || Mi());
}
function da(t, e, n = {}) {
  const [s, i, o] = Si(t, n), r = (a) => {
    if (!In(a)) return;
    const { target: l } = a, u = e(l, a);
    if (typeof u != "function" || !l) return;
    const c = (h) => {
      In(h) && (u(h), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, i);
  };
  return s.forEach((a) => {
    a.addEventListener("pointerenter", r, i);
  }), o;
}
const bi = (t, e) => e ? t === e ? true : bi(t, e.parentElement) : false, an = (t) => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== false, pa = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function ma(t) {
  return pa.has(t.tagName) || t.tabIndex !== -1;
}
const zt = /* @__PURE__ */ new WeakSet();
function On(t) {
  return (e) => {
    e.key === "Enter" && t(e);
  };
}
function oe(t, e) {
  t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: true, bubbles: true }));
}
const ya = (t, e) => {
  const n = t.currentTarget;
  if (!n) return;
  const s = On(() => {
    if (zt.has(n)) return;
    oe(n, "down");
    const i = On(() => {
      oe(n, "up");
    }), o = () => oe(n, "cancel");
    n.addEventListener("keyup", i, e), n.addEventListener("blur", o, e);
  });
  n.addEventListener("keydown", s, e), n.addEventListener("blur", () => n.removeEventListener("keydown", s), e);
};
function Nn(t) {
  return an(t) && !Mi();
}
function ga(t, e, n = {}) {
  const [s, i, o] = Si(t, n), r = (a) => {
    const l = a.currentTarget;
    if (!Nn(a)) return;
    zt.add(l);
    const u = e(l, a), c = (d, p) => {
      window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", f), zt.has(l) && zt.delete(l), Nn(d) && typeof u == "function" && u(d, { success: p });
    }, h = (d) => {
      c(d, l === window || l === document || n.useGlobalTarget || bi(l, d.target));
    }, f = (d) => {
      c(d, false);
    };
    window.addEventListener("pointerup", h, i), window.addEventListener("pointercancel", f, i);
  };
  return s.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", r, i), wi(a) && (a.addEventListener("focus", (u) => ya(u, i)), !ma(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), o;
}
function Ai(t) {
  return Os(t) && "ownerSVGElement" in t;
}
function va(t) {
  return Ai(t) && t.tagName === "svg";
}
const B = (t) => !!(t && t.getVelocity), xa = [...xi, R, tt], Ta = (t) => xa.find(vi(t)), ln = m.createContext({ transformPagePoint: (t) => t, isStatic: false, reducedMotion: "never" });
function Un(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function Pa(...t) {
  return (e) => {
    let n = false;
    const s = t.map((i) => {
      const o = Un(i, e);
      return !n && typeof o == "function" && (n = true), o;
    });
    if (n) return () => {
      for (let i = 0; i < s.length; i++) {
        const o = s[i];
        typeof o == "function" ? o() : Un(t[i], null);
      }
    };
  };
}
function ka(...t) {
  return m.useCallback(Pa(...t), t);
}
class wa extends m.Component {
  getSnapshotBeforeUpdate(e) {
    const n = this.props.childRef.current;
    if (n && e.isPresent && !this.props.isPresent) {
      const s = n.offsetParent, i = wi(s) && s.offsetWidth || 0, o = this.props.sizeRef.current;
      o.height = n.offsetHeight || 0, o.width = n.offsetWidth || 0, o.top = n.offsetTop, o.left = n.offsetLeft, o.right = i - o.width - o.left;
    }
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Ma({ children: t, isPresent: e, anchorX: n, root: s }) {
  const i = m.useId(), o = m.useRef(null), r = m.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }), { nonce: a } = m.useContext(ln), l = ka(o, t == null ? void 0 : t.ref);
  return m.useInsertionEffect(() => {
    const { width: u, height: c, top: h, left: f, right: d } = r.current;
    if (e || !o.current || !u || !c) return;
    const p = n === "left" ? `left: ${f}` : `right: ${d}`;
    o.current.dataset.motionPopId = i;
    const v = document.createElement("style");
    a && (v.nonce = a);
    const T = s ?? document.head;
    return T.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${p}px !important;
            top: ${h}px !important;
          }
        `), () => {
      T.contains(v) && T.removeChild(v);
    };
  }, [e]), G.jsx(wa, { isPresent: e, childRef: o, sizeRef: r, children: m.cloneElement(t, { ref: l }) });
}
const Sa = ({ children: t, initial: e, isPresent: n, onExitComplete: s, custom: i, presenceAffectsLayout: o, mode: r, anchorX: a, root: l }) => {
  const u = Ne(ba), c = m.useId();
  let h = true, f = m.useMemo(() => (h = false, { id: c, initial: e, isPresent: n, custom: i, onExitComplete: (d) => {
    u.set(d, true);
    for (const p of u.values()) if (!p) return;
    s && s();
  }, register: (d) => (u.set(d, false), () => u.delete(d)) }), [n, u, s]);
  return o && h && (f = { ...f }), m.useMemo(() => {
    u.forEach((d, p) => u.set(p, false));
  }, [n]), m.useEffect(() => {
    !n && !u.size && s && s();
  }, [n]), r === "popLayout" && (t = G.jsx(Ma, { isPresent: n, anchorX: a, root: l, children: t })), G.jsx(Zt.Provider, { value: f, children: t });
};
function ba() {
  return /* @__PURE__ */ new Map();
}
function Vi(t = true) {
  const e = m.useContext(Zt);
  if (e === null) return [true, null];
  const { isPresent: n, onExitComplete: s, register: i } = e, o = m.useId();
  m.useEffect(() => {
    if (t) return i(o);
  }, [t]);
  const r = m.useCallback(() => t && s && s(o), [o, s, t]);
  return !n && s ? [false, r] : [true];
}
const Ot = (t) => t.key || "";
function zn(t) {
  const e = [];
  return m.Children.forEach(t, (n) => {
    m.isValidElement(n) && e.push(n);
  }), e;
}
const lu = ({ children: t, custom: e, initial: n = true, onExitComplete: s, presenceAffectsLayout: i = true, mode: o = "sync", propagate: r = false, anchorX: a = "left", root: l }) => {
  const [u, c] = Vi(r), h = m.useMemo(() => zn(t), [t]), f = r && !u ? [] : h.map(Ot), d = m.useRef(true), p = m.useRef(h), v = Ne(() => /* @__PURE__ */ new Map()), [T, g] = m.useState(h), [P, x] = m.useState(h);
  Bs(() => {
    d.current = false, p.current = h;
    for (let b = 0; b < P.length; b++) {
      const A = Ot(P[b]);
      f.includes(A) ? v.delete(A) : v.get(A) !== true && v.set(A, false);
    }
  }, [P, f.length, f.join("-")]);
  const S = [];
  if (h !== T) {
    let b = [...h];
    for (let A = 0; A < P.length; A++) {
      const M = P[A], L = Ot(M);
      f.includes(L) || (b.splice(A, 0, M), S.push(M));
    }
    return o === "wait" && S.length && (b = S), x(zn(b)), g(h), null;
  }
  const { forceRender: k } = m.useContext(Oe);
  return G.jsx(G.Fragment, { children: P.map((b) => {
    const A = Ot(b), M = r && !u ? false : h === P || f.includes(A), L = () => {
      if (v.has(A)) v.set(A, true);
      else return;
      let I = true;
      v.forEach((Z) => {
        Z || (I = false);
      }), I && (k == null ? void 0 : k(), x(p.current), r && (c == null ? void 0 : c()), s && s());
    };
    return G.jsx(Sa, { isPresent: M, initial: !d.current || n ? void 0 : false, custom: e, presenceAffectsLayout: i, mode: o, root: l, onExitComplete: M ? void 0 : L, anchorX: a, children: b }, A);
  }) });
}, Ci = m.createContext({ strict: false }), Hn = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, gt = {};
for (const t in Hn) gt[t] = { isEnabled: (e) => Hn[t].some((n) => !!e[n]) };
function Aa(t) {
  for (const e in t) gt[e] = { ...gt[e], ...t[e] };
}
const Va = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function qt(t) {
  return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || Va.has(t);
}
let Di = (t) => !qt(t);
function Ca(t) {
  typeof t == "function" && (Di = (e) => e.startsWith("on") ? !qt(e) : t(e));
}
try {
  Ca(require("@emotion/is-prop-valid").default);
} catch {
}
function Da(t, e, n) {
  const s = {};
  for (const i in t) i === "values" && typeof t.values == "object" || (Di(i) || n === true && qt(i) || !e && !qt(i) || t.draggable && i.startsWith("onDrag")) && (s[i] = t[i]);
  return s;
}
const Jt = m.createContext({});
function Qt(t) {
  return t !== null && typeof t == "object" && typeof t.start == "function";
}
function Dt(t) {
  return typeof t == "string" || Array.isArray(t);
}
const cn = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], un = ["initial", ...cn];
function te(t) {
  return Qt(t.animate) || un.some((e) => Dt(t[e]));
}
function Ri(t) {
  return !!(te(t) || t.variants);
}
function Ra(t, e) {
  if (te(t)) {
    const { initial: n, animate: s } = t;
    return { initial: n === false || Dt(n) ? n : void 0, animate: Dt(s) ? s : void 0 };
  }
  return t.inherit !== false ? e : {};
}
function Ea(t) {
  const { initial: e, animate: n } = Ra(t, m.useContext(Jt));
  return m.useMemo(() => ({ initial: e, animate: n }), [Wn(e), Wn(n)]);
}
function Wn(t) {
  return Array.isArray(t) ? t.join(" ") : t;
}
function Kn(t, e) {
  return e.max === e.min ? 0 : t / (e.max - e.min) * 100;
}
const Pt = { correct: (t, e) => {
  if (!e.target) return t;
  if (typeof t == "string") if (w.test(t)) t = parseFloat(t);
  else return t;
  const n = Kn(t, e.target.x), s = Kn(t, e.target.y);
  return `${n}% ${s}%`;
} }, La = { correct: (t, { treeScale: e, projectionDelta: n }) => {
  const s = t, i = tt.parse(t);
  if (i.length > 5) return s;
  const o = tt.createTransformer(t), r = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * e.x, l = n.y.scale * e.y;
  i[0 + r] /= a, i[1 + r] /= l;
  const u = C(a, l, 0.5);
  return typeof i[2 + r] == "number" && (i[2 + r] /= u), typeof i[3 + r] == "number" && (i[3 + r] /= u), o(i);
} }, Ce = { borderRadius: { ...Pt, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: Pt, borderTopRightRadius: Pt, borderBottomLeftRadius: Pt, borderBottomRightRadius: Pt, boxShadow: La };
function Ei(t, { layout: e, layoutId: n }) {
  return Tt.has(t) || t.startsWith("origin") || (e || n !== void 0) && (!!Ce[t] || t === "opacity");
}
const Fa = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, ja = xt.length;
function Ba(t, e, n) {
  let s = "", i = true;
  for (let o = 0; o < ja; o++) {
    const r = xt[o], a = t[r];
    if (a === void 0) continue;
    let l = true;
    if (typeof a == "number" ? l = a === (r.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = ki(a, rn[r]);
      if (!l) {
        i = false;
        const c = Fa[r] || r;
        s += `${c}(${u}) `;
      }
      n && (e[r] = u);
    }
  }
  return s = s.trim(), n ? s = n(e, i ? "" : s) : i && (s = "none"), s;
}
function hn(t, e, n) {
  const { style: s, vars: i, transformOrigin: o } = t;
  let r = false, a = false;
  for (const l in e) {
    const u = e[l];
    if (Tt.has(l)) {
      r = true;
      continue;
    } else if (Qs(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ki(u, rn[l]);
      l.startsWith("origin") ? (a = true, o[l] = c) : s[l] = c;
    }
  }
  if (e.transform || (r || n ? s.transform = Ba(e, t.transform, n) : s.transform && (s.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    s.transformOrigin = `${l} ${u} ${c}`;
  }
}
const fn = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Li(t, e, n) {
  for (const s in e) !B(e[s]) && !Ei(s, n) && (t[s] = e[s]);
}
function Ia({ transformTemplate: t }, e) {
  return m.useMemo(() => {
    const n = fn();
    return hn(n, e, t), Object.assign({}, n.vars, n.style);
  }, [e]);
}
function Oa(t, e) {
  const n = t.style || {}, s = {};
  return Li(s, n, t), Object.assign(s, Ia(t, e)), s;
}
function Na(t, e) {
  const n = {}, s = Oa(t, e);
  return t.drag && t.dragListener !== false && (n.draggable = false, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = t.drag === true ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`), t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (n.tabIndex = 0), n.style = s, n;
}
const Ua = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, za = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Ha(t, e, n = 1, s = 0, i = true) {
  t.pathLength = 1;
  const o = i ? Ua : za;
  t[o.offset] = w.transform(-s);
  const r = w.transform(e), a = w.transform(n);
  t[o.array] = `${r} ${a}`;
}
function Fi(t, { attrX: e, attrY: n, attrScale: s, pathLength: i, pathSpacing: o = 1, pathOffset: r = 0, ...a }, l, u, c) {
  if (hn(t, a, u), l) {
    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
    return;
  }
  t.attrs = t.style, t.style = {};
  const { attrs: h, style: f } = t;
  h.transform && (f.transform = h.transform, delete h.transform), (f.transform || h.transformOrigin) && (f.transformOrigin = h.transformOrigin ?? "50% 50%", delete h.transformOrigin), f.transform && (f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box", delete h.transformBox), e !== void 0 && (h.x = e), n !== void 0 && (h.y = n), s !== void 0 && (h.scale = s), i !== void 0 && Ha(h, i, o, r, false);
}
const ji = () => ({ ...fn(), attrs: {} }), Bi = (t) => typeof t == "string" && t.toLowerCase() === "svg";
function Wa(t, e, n, s) {
  const i = m.useMemo(() => {
    const o = ji();
    return Fi(o, e, Bi(s), t.transformTemplate, t.style), { ...o.attrs, style: { ...o.style } };
  }, [e]);
  if (t.style) {
    const o = {};
    Li(o, t.style, t), i.style = { ...o, ...i.style };
  }
  return i;
}
const Ka = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function dn(t) {
  return typeof t != "string" || t.includes("-") ? false : !!(Ka.indexOf(t) > -1 || /[A-Z]/u.test(t));
}
function $a(t, e, n, { latestValues: s }, i, o = false) {
  const a = (dn(t) ? Wa : Na)(e, s, i, t), l = Da(e, typeof t == "string", o), u = t !== m.Fragment ? { ...l, ...a, ref: n } : {}, { children: c } = e, h = m.useMemo(() => B(c) ? c.get() : c, [c]);
  return m.createElement(t, { ...u, children: h });
}
function $n(t) {
  const e = [{}, {}];
  return t == null ? void 0 : t.values.forEach((n, s) => {
    e[0][s] = n.get(), e[1][s] = n.getVelocity();
  }), e;
}
function pn(t, e, n, s) {
  if (typeof e == "function") {
    const [i, o] = $n(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  if (typeof e == "string" && (e = t.variants && t.variants[e]), typeof e == "function") {
    const [i, o] = $n(s);
    e = e(n !== void 0 ? n : t.custom, i, o);
  }
  return e;
}
function Ht(t) {
  return B(t) ? t.get() : t;
}
function _a({ scrapeMotionValuesFromProps: t, createRenderState: e }, n, s, i) {
  return { latestValues: qa(n, s, i, t), renderState: e() };
}
function qa(t, e, n, s) {
  const i = {}, o = s(t, {});
  for (const f in o) i[f] = Ht(o[f]);
  let { initial: r, animate: a } = t;
  const l = te(t), u = Ri(t);
  e && u && !l && t.inherit !== false && (r === void 0 && (r = e.initial), a === void 0 && (a = e.animate));
  let c = n ? n.initial === false : false;
  c = c || r === false;
  const h = c ? a : r;
  if (h && typeof h != "boolean" && !Qt(h)) {
    const f = Array.isArray(h) ? h : [h];
    for (let d = 0; d < f.length; d++) {
      const p = pn(t, f[d]);
      if (p) {
        const { transitionEnd: v, transition: T, ...g } = p;
        for (const P in g) {
          let x = g[P];
          if (Array.isArray(x)) {
            const S = c ? x.length - 1 : 0;
            x = x[S];
          }
          x !== null && (i[P] = x);
        }
        for (const P in v) i[P] = v[P];
      }
    }
  }
  return i;
}
const Ii = (t) => (e, n) => {
  const s = m.useContext(Jt), i = m.useContext(Zt), o = () => _a(t, e, s, i);
  return n ? o() : Ne(o);
};
function mn(t, e, n) {
  var _a2;
  const { style: s } = t, i = {};
  for (const o in s) (B(s[o]) || e.style && B(e.style[o]) || Ei(o, t) || ((_a2 = n == null ? void 0 : n.getValue(o)) == null ? void 0 : _a2.liveStyle) !== void 0) && (i[o] = s[o]);
  return i;
}
const Ga = Ii({ scrapeMotionValuesFromProps: mn, createRenderState: fn });
function Oi(t, e, n) {
  const s = mn(t, e, n);
  for (const i in t) if (B(t[i]) || B(e[i])) {
    const o = xt.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
    s[o] = t[i];
  }
  return s;
}
const Xa = Ii({ scrapeMotionValuesFromProps: Oi, createRenderState: ji }), Ya = Symbol.for("motionComponentSymbol");
function ht(t) {
  return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current");
}
function Za(t, e, n) {
  return m.useCallback((s) => {
    s && t.onMount && t.onMount(s), e && (s ? e.mount(s) : e.unmount()), n && (typeof n == "function" ? n(s) : ht(n) && (n.current = s));
  }, [e]);
}
const yn = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Ja = "framerAppearId", Ni = "data-" + yn(Ja), Ui = m.createContext({});
function Qa(t, e, n, s, i) {
  var _a2, _b;
  const { visualElement: o } = m.useContext(Jt), r = m.useContext(Ci), a = m.useContext(Zt), l = m.useContext(ln).reducedMotion, u = m.useRef(null);
  s = s || r.renderer, !u.current && s && (u.current = s(t, { visualState: e, parent: o, props: n, presenceContext: a, blockInitialAnimation: a ? a.initial === false : false, reducedMotionConfig: l }));
  const c = u.current, h = m.useContext(Ui);
  c && !c.projection && i && (c.type === "html" || c.type === "svg") && tl(u.current, n, i, h);
  const f = m.useRef(false);
  m.useInsertionEffect(() => {
    c && f.current && c.update(n, a);
  });
  const d = n[Ni], p = m.useRef(!!d && !((_a2 = window.MotionHandoffIsComplete) == null ? void 0 : _a2.call(window, d)) && ((_b = window.MotionHasOptimisedAnimation) == null ? void 0 : _b.call(window, d)));
  return Bs(() => {
    c && (f.current = true, window.MotionIsMounted = true, c.updateFeatures(), c.scheduleRenderMicrotask(), p.current && c.animationState && c.animationState.animateChanges());
  }), m.useEffect(() => {
    c && (!p.current && c.animationState && c.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      var _a3;
      (_a3 = window.MotionHandoffMarkAsComplete) == null ? void 0 : _a3.call(window, d);
    }), p.current = false), c.enteringChildren = void 0);
  }), c;
}
function tl(t, e, n, s) {
  const { layoutId: i, layout: o, drag: r, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = e;
  t.projection = new n(t.latestValues, e["data-framer-portal-id"] ? void 0 : zi(t.parent)), t.projection.setOptions({ layoutId: i, layout: o, alwaysMeasureLayout: !!r || a && ht(a), visualElement: t, animationType: typeof o == "string" ? o : "both", initialPromotionConfig: s, crossfade: c, layoutScroll: l, layoutRoot: u });
}
function zi(t) {
  if (t) return t.options.allowProjection !== false ? t.projection : zi(t.parent);
}
function ae(t, { forwardMotionProps: e = false } = {}, n, s) {
  n && Aa(n);
  const i = dn(t) ? Xa : Ga;
  function o(a, l) {
    let u;
    const c = { ...m.useContext(ln), ...a, layoutId: el(a) }, { isStatic: h } = c, f = Ea(a), d = i(a, h);
    if (!h && Ue) {
      nl();
      const p = sl(c);
      u = p.MeasureLayout, f.visualElement = Qa(t, d, c, s, p.ProjectionNode);
    }
    return G.jsxs(Jt.Provider, { value: f, children: [u && f.visualElement ? G.jsx(u, { visualElement: f.visualElement, ...c }) : null, $a(t, a, Za(d, f.visualElement, l), d, h, e)] });
  }
  o.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
  const r = m.forwardRef(o);
  return r[Ya] = t, r;
}
function el({ layoutId: t }) {
  const e = m.useContext(Oe).id;
  return e && t !== void 0 ? e + "-" + t : t;
}
function nl(t, e) {
  m.useContext(Ci).strict;
}
function sl(t) {
  const { drag: e, layout: n } = gt;
  if (!e && !n) return {};
  const s = { ...e, ...n };
  return { MeasureLayout: (e == null ? void 0 : e.isEnabled(t)) || (n == null ? void 0 : n.isEnabled(t)) ? s.MeasureLayout : void 0, ProjectionNode: s.ProjectionNode };
}
function il(t, e) {
  if (typeof Proxy > "u") return ae;
  const n = /* @__PURE__ */ new Map(), s = (o, r) => ae(o, r, t, e), i = (o, r) => s(o, r);
  return new Proxy(i, { get: (o, r) => r === "create" ? s : (n.has(r) || n.set(r, ae(r, void 0, t, e)), n.get(r)) });
}
function Hi({ top: t, left: e, right: n, bottom: s }) {
  return { x: { min: e, max: n }, y: { min: t, max: s } };
}
function rl({ x: t, y: e }) {
  return { top: e.min, right: t.max, bottom: e.max, left: t.min };
}
function ol(t, e) {
  if (!e) return t;
  const n = e({ x: t.left, y: t.top }), s = e({ x: t.right, y: t.bottom });
  return { top: n.y, left: n.x, bottom: s.y, right: s.x };
}
function le(t) {
  return t === void 0 || t === 1;
}
function De({ scale: t, scaleX: e, scaleY: n }) {
  return !le(t) || !le(e) || !le(n);
}
function it(t) {
  return De(t) || Wi(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
}
function Wi(t) {
  return _n(t.x) || _n(t.y);
}
function _n(t) {
  return t && t !== "0%";
}
function Gt(t, e, n) {
  const s = t - n, i = e * s;
  return n + i;
}
function qn(t, e, n, s, i) {
  return i !== void 0 && (t = Gt(t, i, s)), Gt(t, n, s) + e;
}
function Re(t, e = 0, n = 1, s, i) {
  t.min = qn(t.min, e, n, s, i), t.max = qn(t.max, e, n, s, i);
}
function Ki(t, { x: e, y: n }) {
  Re(t.x, e.translate, e.scale, e.originPoint), Re(t.y, n.translate, n.scale, n.originPoint);
}
const Gn = 0.999999999999, Xn = 1.0000000000001;
function al(t, e, n, s = false) {
  const i = n.length;
  if (!i) return;
  e.x = e.y = 1;
  let o, r;
  for (let a = 0; a < i; a++) {
    o = n[a], r = o.projectionDelta;
    const { visualElement: l } = o.options;
    l && l.props.style && l.props.style.display === "contents" || (s && o.options.layoutScroll && o.scroll && o !== o.root && dt(t, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }), r && (e.x *= r.x.scale, e.y *= r.y.scale, Ki(t, r)), s && it(o.latestValues) && dt(t, o.latestValues));
  }
  e.x < Xn && e.x > Gn && (e.x = 1), e.y < Xn && e.y > Gn && (e.y = 1);
}
function ft(t, e) {
  t.min = t.min + e, t.max = t.max + e;
}
function Yn(t, e, n, s, i = 0.5) {
  const o = C(t.min, t.max, i);
  Re(t, e, n, o, s);
}
function dt(t, e) {
  Yn(t.x, e.x, e.scaleX, e.scale, e.originX), Yn(t.y, e.y, e.scaleY, e.scale, e.originY);
}
function $i(t, e) {
  return Hi(ol(t.getBoundingClientRect(), e));
}
function ll(t, e, n) {
  const s = $i(t, n), { scroll: i } = e;
  return i && (ft(s.x, i.offset.x), ft(s.y, i.offset.y)), s;
}
const Zn = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), pt = () => ({ x: Zn(), y: Zn() }), Jn = () => ({ min: 0, max: 0 }), E = () => ({ x: Jn(), y: Jn() }), Ee = { current: null }, _i = { current: false };
function cl() {
  if (_i.current = true, !!Ue) if (window.matchMedia) {
    const t = window.matchMedia("(prefers-reduced-motion)"), e = () => Ee.current = t.matches;
    t.addEventListener("change", e), e();
  } else Ee.current = false;
}
const ul = /* @__PURE__ */ new WeakMap();
function hl(t, e, n) {
  for (const s in e) {
    const i = e[s], o = n[s];
    if (B(i)) t.addValue(s, i);
    else if (B(o)) t.addValue(s, yt(i, { owner: t }));
    else if (o !== i) if (t.hasValue(s)) {
      const r = t.getValue(s);
      r.liveStyle === true ? r.jump(i) : r.hasAnimated || r.set(i);
    } else {
      const r = t.getStaticValue(s);
      t.addValue(s, yt(r !== void 0 ? r : i, { owner: t }));
    }
  }
  for (const s in n) e[s] === void 0 && t.removeValue(s);
  return e;
}
const Qn = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class fl {
  scrapeMotionValuesFromProps(e, n, s) {
    return {};
  }
  constructor({ parent: e, props: n, presenceContext: s, reducedMotionConfig: i, blockInitialAnimation: o, visualState: r }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = nn, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = N.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, V.render(this.render, false, true));
    };
    const { latestValues: l, renderState: u } = r;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = e, this.props = n, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!o, this.isControllingVariants = te(n), this.isVariantNode = Ri(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
    const { willChange: c, ...h } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in h) {
      const d = h[f];
      l[f] !== void 0 && B(d) && d.set(l[f]);
    }
  }
  mount(e) {
    var _a2;
    this.current = e, ul.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), _i.current || cl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : Ee.current, (_a2 = this.parent) == null ? void 0 : _a2.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var _a2;
    this.projection && this.projection.unmount(), Q(this.notifyUpdate), Q(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (_a2 = this.parent) == null ? void 0 : _a2.removeChild(this);
    for (const e in this.events) this.events[e].clear();
    for (const e in this.features) {
      const n = this.features[e];
      n && (n.unmount(), n.isMounted = false);
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(e);
  }
  removeChild(e) {
    this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
  }
  bindToMotionValue(e, n) {
    this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
    const s = Tt.has(e);
    s && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (r) => {
      this.latestValues[e] = r, this.props.onUpdate && V.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = true), this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, e, n)), this.valueSubscriptions.set(e, () => {
      i(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
  }
  updateFeatures() {
    let e = "animation";
    for (e in gt) {
      const n = gt[e];
      if (!n) continue;
      const { isEnabled: s, Feature: i } = n;
      if (!this.features[e] && i && s(this.props) && (this.features[e] = new i(this)), this.features[e]) {
        const o = this.features[e];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = true);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : E();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, n) {
    this.latestValues[e] = n;
  }
  update(e, n) {
    (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let s = 0; s < Qn.length; s++) {
      const i = Qn[s];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const o = "on" + i, r = e[o];
      r && (this.propEventSubscriptions[i] = this.on(i, r));
    }
    this.prevMotionValues = hl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  addVariantChild(e) {
    const n = this.getClosestVariantNode();
    if (n) return n.variantChildren && n.variantChildren.add(e), () => n.variantChildren.delete(e);
  }
  addValue(e, n) {
    const s = this.values.get(e);
    n !== s && (s && this.removeValue(e), this.bindToMotionValue(e, n), this.values.set(e, n), this.latestValues[e] = n.get());
  }
  removeValue(e) {
    this.values.delete(e);
    const n = this.valueSubscriptions.get(e);
    n && (n(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, n) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let s = this.values.get(e);
    return s === void 0 && n !== void 0 && (s = yt(n === null ? void 0 : n, { owner: this }), this.addValue(e, s)), s;
  }
  readValue(e, n) {
    let s = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    return s != null && (typeof s == "string" && (Is(s) || Ns(s)) ? s = parseFloat(s) : !Ta(s) && tt.test(n) && (s = Pi(e, n)), this.setBaseTarget(e, B(s) ? s.get() : s)), B(s) ? s.get() : s;
  }
  setBaseTarget(e, n) {
    this.baseTarget[e] = n;
  }
  getBaseTarget(e) {
    var _a2;
    const { initial: n } = this.props;
    let s;
    if (typeof n == "string" || typeof n == "object") {
      const o = pn(this.props, n, (_a2 = this.presenceContext) == null ? void 0 : _a2.custom);
      o && (s = o[e]);
    }
    if (n && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !B(i) ? i : this.initialValues[e] !== void 0 && s === void 0 ? void 0 : this.baseTarget[e];
  }
  on(e, n) {
    return this.events[e] || (this.events[e] = new $e()), this.events[e].add(n);
  }
  notify(e, ...n) {
    this.events[e] && this.events[e].notify(...n);
  }
  scheduleRenderMicrotask() {
    on.render(this.render);
  }
}
class qi extends fl {
  constructor() {
    super(...arguments), this.KeyframeResolver = la;
  }
  sortInstanceNodePosition(e, n) {
    return e.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, n) {
    return e.style ? e.style[n] : void 0;
  }
  removeValueFromRenderState(e, { vars: n, style: s }) {
    delete n[e], delete s[e];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: e } = this.props;
    B(e) && (this.childSubscription = e.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Gi(t, { style: e, vars: n }, s, i) {
  const o = t.style;
  let r;
  for (r in e) o[r] = e[r];
  i == null ? void 0 : i.applyProjectionStyles(o, s);
  for (r in n) o.setProperty(r, n[r]);
}
function dl(t) {
  return window.getComputedStyle(t);
}
class pl extends qi {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Gi;
  }
  readValueFromInstance(e, n) {
    var _a2;
    if (Tt.has(n)) return ((_a2 = this.projection) == null ? void 0 : _a2.isProjecting) ? ke(n) : Ao(e, n);
    {
      const s = dl(e), i = (Qs(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(e, { transformPagePoint: n }) {
    return $i(e, n);
  }
  build(e, n, s) {
    hn(e, n, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return mn(e, n, s);
  }
}
const Xi = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function ml(t, e, n, s) {
  Gi(t, e, void 0, s);
  for (const i in e.attrs) t.setAttribute(Xi.has(i) ? i : yn(i), e.attrs[i]);
}
class yl extends qi {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = E;
  }
  getBaseTargetFromProps(e, n) {
    return e[n];
  }
  readValueFromInstance(e, n) {
    if (Tt.has(n)) {
      const s = Ti(n);
      return s && s.default || 0;
    }
    return n = Xi.has(n) ? n : yn(n), e.getAttribute(n);
  }
  scrapeMotionValuesFromProps(e, n, s) {
    return Oi(e, n, s);
  }
  build(e, n, s) {
    Fi(e, n, this.isSVGTag, s.transformTemplate, s.style);
  }
  renderInstance(e, n, s, i) {
    ml(e, n, s, i);
  }
  mount(e) {
    this.isSVGTag = Bi(e.tagName), super.mount(e);
  }
}
const gl = (t, e) => dn(t) ? new yl(e) : new pl(e, { allowProjection: t !== m.Fragment });
function mt(t, e, n) {
  const s = t.getProps();
  return pn(s, e, n !== void 0 ? n : s.custom, t);
}
const Le = (t) => Array.isArray(t);
function vl(t, e, n) {
  t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, yt(n));
}
function xl(t) {
  return Le(t) ? t[t.length - 1] || 0 : t;
}
function Tl(t, e) {
  const n = mt(t, e);
  let { transitionEnd: s = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...s };
  for (const r in o) {
    const a = xl(o[r]);
    vl(t, r, a);
  }
}
function Pl(t) {
  return !!(B(t) && t.add);
}
function Fe(t, e) {
  const n = t.getValue("willChange");
  if (Pl(n)) return n.add(e);
  if (!n && Y.WillChange) {
    const s = new Y.WillChange("auto");
    t.addValue("willChange", s), s.add(e);
  }
}
function Yi(t) {
  return t.props[Ni];
}
const kl = (t) => t !== null;
function wl(t, { repeat: e, repeatType: n = "loop" }, s) {
  const i = t.filter(kl), o = e && n !== "loop" && e % 2 === 1 ? 0 : i.length - 1;
  return i[o];
}
const Ml = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, Sl = (t) => ({ type: "spring", stiffness: 550, damping: t === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), bl = { type: "keyframes", duration: 0.8 }, Al = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, Vl = (t, { keyframes: e }) => e.length > 2 ? bl : Tt.has(t) ? t.startsWith("scale") ? Sl(e[1]) : Ml : Al;
function Cl({ when: t, delay: e, delayChildren: n, staggerChildren: s, staggerDirection: i, repeat: o, repeatType: r, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const gn = (t, e, n, s = {}, i, o) => (r) => {
  const a = sn(s, t) || {}, l = a.delay || s.delay || 0;
  let { elapsed: u = 0 } = s;
  u = u - _(l);
  const c = { keyframes: Array.isArray(n) ? n : [null, n], ease: "easeOut", velocity: e.getVelocity(), ...a, delay: -u, onUpdate: (f) => {
    e.set(f), a.onUpdate && a.onUpdate(f);
  }, onComplete: () => {
    r(), a.onComplete && a.onComplete();
  }, name: t, motionValue: e, element: o ? void 0 : i };
  Cl(a) || Object.assign(c, Vl(t, c)), c.duration && (c.duration = _(c.duration)), c.repeatDelay && (c.repeatDelay = _(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let h = false;
  if ((c.type === false || c.duration === 0 && !c.repeatDelay) && (Ae(c), c.delay === 0 && (h = true)), (Y.instantAnimations || Y.skipAnimations) && (h = true, Ae(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, h && !o && e.get() !== void 0) {
    const f = wl(c.keyframes, a);
    if (f !== void 0) {
      V.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new en(c) : new Yo(c);
};
function Dl({ protectedKeys: t, needsAnimating: e }, n) {
  const s = t.hasOwnProperty(n) && e[n] !== true;
  return e[n] = false, s;
}
function Zi(t, e, { delay: n = 0, transitionOverride: s, type: i } = {}) {
  let { transition: o = t.getDefaultTransition(), transitionEnd: r, ...a } = e;
  s && (o = s);
  const l = [], u = i && t.animationState && t.animationState.getState()[i];
  for (const c in a) {
    const h = t.getValue(c, t.latestValues[c] ?? null), f = a[c];
    if (f === void 0 || u && Dl(u, c)) continue;
    const d = { delay: n, ...sn(o || {}, c) }, p = h.get();
    if (p !== void 0 && !h.isAnimating && !Array.isArray(f) && f === p && !d.velocity) continue;
    let v = false;
    if (window.MotionHandoffAnimation) {
      const g = Yi(t);
      if (g) {
        const P = window.MotionHandoffAnimation(g, c, V);
        P !== null && (d.startTime = P, v = true);
      }
    }
    Fe(t, c), h.start(gn(c, h, f, t.shouldReduceMotion && gi.has(c) ? { type: false } : d, t, v));
    const T = h.animation;
    T && l.push(T);
  }
  return r && Promise.all(l).then(() => {
    V.update(() => {
      r && Tl(t, r);
    });
  }), l;
}
function Ji(t, e, n, s = 0, i = 1) {
  const o = Array.from(t).sort((u, c) => u.sortNodePosition(c)).indexOf(e), r = t.size, a = (r - 1) * s;
  return typeof n == "function" ? n(o, r) : i === 1 ? o * s : a - o * s;
}
function je(t, e, n = {}) {
  var _a2;
  const s = mt(t, e, n.type === "exit" ? (_a2 = t.presenceContext) == null ? void 0 : _a2.custom : void 0);
  let { transition: i = t.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(Zi(t, s, n)) : () => Promise.resolve(), r = t.variantChildren && t.variantChildren.size ? (l = 0) => {
    const { delayChildren: u = 0, staggerChildren: c, staggerDirection: h } = i;
    return Rl(t, e, l, u, c, h, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, r] : [r, o];
    return l().then(() => u());
  } else return Promise.all([o(), r(n.delay)]);
}
function Rl(t, e, n = 0, s = 0, i = 0, o = 1, r) {
  const a = [];
  for (const l of t.variantChildren) l.notify("AnimationStart", e), a.push(je(l, e, { ...r, delay: n + (typeof s == "function" ? 0 : s) + Ji(t.variantChildren, l, s, i, o) }).then(() => l.notify("AnimationComplete", e)));
  return Promise.all(a);
}
function El(t, e, n = {}) {
  t.notify("AnimationStart", e);
  let s;
  if (Array.isArray(e)) {
    const i = e.map((o) => je(t, o, n));
    s = Promise.all(i);
  } else if (typeof e == "string") s = je(t, e, n);
  else {
    const i = typeof e == "function" ? mt(t, e, n.custom) : e;
    s = Promise.all(Zi(t, i, n));
  }
  return s.then(() => {
    t.notify("AnimationComplete", e);
  });
}
function Qi(t, e) {
  if (!Array.isArray(e)) return false;
  const n = e.length;
  if (n !== t.length) return false;
  for (let s = 0; s < n; s++) if (e[s] !== t[s]) return false;
  return true;
}
const Ll = un.length;
function tr(t) {
  if (!t) return;
  if (!t.isControllingVariants) {
    const n = t.parent ? tr(t.parent) || {} : {};
    return t.props.initial !== void 0 && (n.initial = t.props.initial), n;
  }
  const e = {};
  for (let n = 0; n < Ll; n++) {
    const s = un[n], i = t.props[s];
    (Dt(i) || i === false) && (e[s] = i);
  }
  return e;
}
const Fl = [...cn].reverse(), jl = cn.length;
function Bl(t) {
  return (e) => Promise.all(e.map(({ animation: n, options: s }) => El(t, n, s)));
}
function Il(t) {
  let e = Bl(t), n = ts(), s = true;
  const i = (l) => (u, c) => {
    var _a2;
    const h = mt(t, c, l === "exit" ? (_a2 = t.presenceContext) == null ? void 0 : _a2.custom : void 0);
    if (h) {
      const { transition: f, transitionEnd: d, ...p } = h;
      u = { ...u, ...p, ...d };
    }
    return u;
  };
  function o(l) {
    e = l(t);
  }
  function r(l) {
    const { props: u } = t, c = tr(t.parent) || {}, h = [], f = /* @__PURE__ */ new Set();
    let d = {}, p = 1 / 0;
    for (let T = 0; T < jl; T++) {
      const g = Fl[T], P = n[g], x = u[g] !== void 0 ? u[g] : c[g], S = Dt(x), k = g === l ? P.isActive : null;
      k === false && (p = T);
      let b = x === c[g] && x !== u[g] && S;
      if (b && s && t.manuallyAnimateOnMount && (b = false), P.protectedKeys = { ...d }, !P.isActive && k === null || !x && !P.prevProp || Qt(x) || typeof x == "boolean") continue;
      const A = Ol(P.prevProp, x);
      let M = A || g === l && P.isActive && !b && S || T > p && S, L = false;
      const I = Array.isArray(x) ? x : [x];
      let Z = I.reduce(i(g), {});
      k === false && (Z = {});
      const { prevResolvedValues: vn = {} } = P, yr = { ...vn, ...Z }, xn = (F) => {
        M = true, f.has(F) && (L = true, f.delete(F)), P.needsAnimating[F] = true;
        const U = t.getValue(F);
        U && (U.liveStyle = false);
      };
      for (const F in yr) {
        const U = Z[F], nt = vn[F];
        if (d.hasOwnProperty(F)) continue;
        let ct = false;
        Le(U) && Le(nt) ? ct = !Qi(U, nt) : ct = U !== nt, ct ? U != null ? xn(F) : f.add(F) : U !== void 0 && f.has(F) ? xn(F) : P.protectedKeys[F] = true;
      }
      P.prevProp = x, P.prevResolvedValues = Z, P.isActive && (d = { ...d, ...Z }), s && t.blockInitialAnimation && (M = false);
      const Tn = b && A;
      M && (!Tn || L) && h.push(...I.map((F) => {
        const U = { type: g };
        if (typeof F == "string" && s && !Tn && t.manuallyAnimateOnMount && t.parent) {
          const { parent: nt } = t, ct = mt(nt, F);
          if (nt.enteringChildren && ct) {
            const { delayChildren: gr } = ct.transition || {};
            U.delay = Ji(nt.enteringChildren, t, gr);
          }
        }
        return { animation: F, options: U };
      }));
    }
    if (f.size) {
      const T = {};
      if (typeof u.initial != "boolean") {
        const g = mt(t, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        g && g.transition && (T.transition = g.transition);
      }
      f.forEach((g) => {
        const P = t.getBaseTarget(g), x = t.getValue(g);
        x && (x.liveStyle = true), T[g] = P ?? null;
      }), h.push({ animation: T });
    }
    let v = !!h.length;
    return s && (u.initial === false || u.initial === u.animate) && !t.manuallyAnimateOnMount && (v = false), s = false, v ? e(h) : Promise.resolve();
  }
  function a(l, u) {
    var _a2;
    if (n[l].isActive === u) return Promise.resolve();
    (_a2 = t.variantChildren) == null ? void 0 : _a2.forEach((h) => {
      var _a3;
      return (_a3 = h.animationState) == null ? void 0 : _a3.setActive(l, u);
    }), n[l].isActive = u;
    const c = r(l);
    for (const h in n) n[h].protectedKeys = {};
    return c;
  }
  return { animateChanges: r, setActive: a, setAnimateFunction: o, getState: () => n, reset: () => {
    n = ts();
  } };
}
function Ol(t, e) {
  return typeof e == "string" ? e !== t : Array.isArray(e) ? !Qi(e, t) : false;
}
function st(t = false) {
  return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function ts() {
  return { animate: st(true), whileInView: st(), whileHover: st(), whileTap: st(), whileDrag: st(), whileFocus: st(), exit: st() };
}
class et {
  constructor(e) {
    this.isMounted = false, this.node = e;
  }
  update() {
  }
}
class Nl extends et {
  constructor(e) {
    super(e), e.animationState || (e.animationState = Il(e));
  }
  updateAnimationControlsSubscription() {
    const { animate: e } = this.node.getProps();
    Qt(e) && (this.unmountControls = e.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: e } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    e !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var _a2;
    this.node.animationState.reset(), (_a2 = this.unmountControls) == null ? void 0 : _a2.call(this);
  }
}
let Ul = 0;
class zl extends et {
  constructor() {
    super(...arguments), this.id = Ul++;
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: e, onExitComplete: n } = this.node.presenceContext, { isPresent: s } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || e === s) return;
    const i = this.node.animationState.setActive("exit", !e);
    n && !e && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: e, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), e && (this.unmount = e(this.id));
  }
  unmount() {
  }
}
const Hl = { animation: { Feature: Nl }, exit: { Feature: zl } };
function Rt(t, e, n, s = { passive: true }) {
  return t.addEventListener(e, n, s), () => t.removeEventListener(e, n);
}
function jt(t) {
  return { point: { x: t.pageX, y: t.pageY } };
}
const Wl = (t) => (e) => an(e) && t(e, jt(e));
function St(t, e, n, s) {
  return Rt(t, e, Wl(n), s);
}
const er = 1e-4, Kl = 1 - er, $l = 1 + er, nr = 0.01, _l = 0 - nr, ql = 0 + nr;
function O(t) {
  return t.max - t.min;
}
function Gl(t, e, n) {
  return Math.abs(t - e) <= n;
}
function es(t, e, n, s = 0.5) {
  t.origin = s, t.originPoint = C(e.min, e.max, t.origin), t.scale = O(n) / O(e), t.translate = C(n.min, n.max, t.origin) - t.originPoint, (t.scale >= Kl && t.scale <= $l || isNaN(t.scale)) && (t.scale = 1), (t.translate >= _l && t.translate <= ql || isNaN(t.translate)) && (t.translate = 0);
}
function bt(t, e, n, s) {
  es(t.x, e.x, n.x, s ? s.originX : void 0), es(t.y, e.y, n.y, s ? s.originY : void 0);
}
function ns(t, e, n) {
  t.min = n.min + e.min, t.max = t.min + O(e);
}
function Xl(t, e, n) {
  ns(t.x, e.x, n.x), ns(t.y, e.y, n.y);
}
function ss(t, e, n) {
  t.min = e.min - n.min, t.max = t.min + O(e);
}
function Xt(t, e, n) {
  ss(t.x, e.x, n.x), ss(t.y, e.y, n.y);
}
function z(t) {
  return [t("x"), t("y")];
}
const sr = ({ current: t }) => t ? t.ownerDocument.defaultView : null, is = (t, e) => Math.abs(t - e);
function Yl(t, e) {
  const n = is(t.x, e.x), s = is(t.y, e.y);
  return Math.sqrt(n ** 2 + s ** 2);
}
class ir {
  constructor(e, n, { transformPagePoint: s, contextWindow: i = window, dragSnapToOrigin: o = false, distanceThreshold: r = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const f = ue(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, p = Yl(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!d && !p) return;
      const { point: v } = f, { timestamp: T } = j;
      this.history.push({ ...v, timestamp: T });
      const { onStart: g, onMove: P } = this.handlers;
      d || (g && g(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), P && P(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, d) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = ce(d, this.transformPagePoint), V.update(this.updatePoint, true);
    }, this.handlePointerUp = (f, d) => {
      this.end();
      const { onEnd: p, onSessionEnd: v, resumeAnimation: T } = this.handlers;
      if (this.dragSnapToOrigin && T && T(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
      const g = ue(f.type === "pointercancel" ? this.lastMoveEventInfo : ce(d, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, g), v && v(f, g);
    }, !an(e)) return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = s, this.distanceThreshold = r, this.contextWindow = i || window;
    const a = jt(e), l = ce(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = j;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: h } = n;
    h && h(e, ue(l, this.history)), this.removeListeners = Et(St(this.contextWindow, "pointermove", this.handlePointerMove), St(this.contextWindow, "pointerup", this.handlePointerUp), St(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Q(this.updatePoint);
  }
}
function ce(t, e) {
  return e ? { point: e(t.point) } : t;
}
function rs(t, e) {
  return { x: t.x - e.x, y: t.y - e.y };
}
function ue({ point: t }, e) {
  return { point: t, delta: rs(t, rr(e)), offset: rs(t, Zl(e)), velocity: Jl(e, 0.1) };
}
function Zl(t) {
  return t[0];
}
function rr(t) {
  return t[t.length - 1];
}
function Jl(t, e) {
  if (t.length < 2) return { x: 0, y: 0 };
  let n = t.length - 1, s = null;
  const i = rr(t);
  for (; n >= 0 && (s = t[n], !(i.timestamp - s.timestamp > _(e))); ) n--;
  if (!s) return { x: 0, y: 0 };
  const o = H(i.timestamp - s.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const r = { x: (i.x - s.x) / o, y: (i.y - s.y) / o };
  return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r;
}
function Ql(t, { min: e, max: n }, s) {
  return e !== void 0 && t < e ? t = s ? C(e, t, s.min) : Math.max(t, e) : n !== void 0 && t > n && (t = s ? C(n, t, s.max) : Math.min(t, n)), t;
}
function os(t, e, n) {
  return { min: e !== void 0 ? t.min + e : void 0, max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0 };
}
function tc(t, { top: e, left: n, bottom: s, right: i }) {
  return { x: os(t.x, n, i), y: os(t.y, e, s) };
}
function as(t, e) {
  let n = e.min - t.min, s = e.max - t.max;
  return e.max - e.min < t.max - t.min && ([n, s] = [s, n]), { min: n, max: s };
}
function ec(t, e) {
  return { x: as(t.x, e.x), y: as(t.y, e.y) };
}
function nc(t, e) {
  let n = 0.5;
  const s = O(t), i = O(e);
  return i > s ? n = At(e.min, e.max - s, t.min) : s > i && (n = At(t.min, t.max - i, e.min)), X(0, 1, n);
}
function sc(t, e) {
  const n = {};
  return e.min !== void 0 && (n.min = e.min - t.min), e.max !== void 0 && (n.max = e.max - t.min), n;
}
const Be = 0.35;
function ic(t = Be) {
  return t === false ? t = 0 : t === true && (t = Be), { x: ls(t, "left", "right"), y: ls(t, "top", "bottom") };
}
function ls(t, e, n) {
  return { min: cs(t, e), max: cs(t, n) };
}
function cs(t, e) {
  return typeof t == "number" ? t : t[e] || 0;
}
const rc = /* @__PURE__ */ new WeakMap();
class oc {
  constructor(e) {
    this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = E(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e;
  }
  start(e, { snapToCursor: n = false, distanceThreshold: s } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === false) return;
    const o = (h) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(jt(h).point);
    }, r = (h, f) => {
      const { drag: d, dragPropagation: p, onDragStart: v } = this.getProps();
      if (d && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = fa(d), !this.openDragLock)) return;
      this.latestPointerEvent = h, this.latestPanInfo = f, this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), z((g) => {
        let P = this.getAxisMotionValue(g).get() || 0;
        if (q.test(P)) {
          const { projection: x } = this.visualElement;
          if (x && x.layout) {
            const S = x.layout.layoutBox[g];
            S && (P = O(S) * (parseFloat(P) / 100));
          }
        }
        this.originPoint[g] = P;
      }), v && V.postRender(() => v(h, f)), Fe(this.visualElement, "transform");
      const { animationState: T } = this.visualElement;
      T && T.setActive("whileDrag", true);
    }, a = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f;
      const { dragPropagation: d, dragDirectionLock: p, onDirectionLock: v, onDrag: T } = this.getProps();
      if (!d && !this.openDragLock) return;
      const { offset: g } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = ac(g), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, g), this.updateAxis("y", f.point, g), this.visualElement.render(), T && T(h, f);
    }, l = (h, f) => {
      this.latestPointerEvent = h, this.latestPanInfo = f, this.stop(h, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => z((h) => {
      var _a2;
      return this.getAnimationState(h) === "paused" && ((_a2 = this.getAxisMotionValue(h).animation) == null ? void 0 : _a2.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new ir(e, { onSessionStart: o, onStart: r, onMove: a, onSessionEnd: l, resumeAnimation: u }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: c, distanceThreshold: s, contextWindow: sr(this.visualElement) });
  }
  stop(e, n) {
    const s = e || this.latestPointerEvent, i = n || this.latestPanInfo, o = this.isDragging;
    if (this.cancel(), !o || !i || !s) return;
    const { velocity: r } = i;
    this.startAnimation(r);
    const { onDragEnd: a } = this.getProps();
    a && V.postRender(() => a(s, i));
  }
  cancel() {
    this.isDragging = false;
    const { projection: e, animationState: n } = this.visualElement;
    e && (e.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: s } = this.getProps();
    !s && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", false);
  }
  updateAxis(e, n, s) {
    const { drag: i } = this.getProps();
    if (!s || !Nt(e, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(e);
    let r = this.originPoint[e] + s[e];
    this.constraints && this.constraints[e] && (r = Ql(r, this.constraints[e], this.elastic[e])), o.set(r);
  }
  resolveConstraints() {
    var _a2;
    const { dragConstraints: e, dragElastic: n } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : (_a2 = this.visualElement.projection) == null ? void 0 : _a2.layout, i = this.constraints;
    e && ht(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && s ? this.constraints = tc(s.layoutBox, e) : this.constraints = false, this.elastic = ic(n), i !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && z((o) => {
      this.constraints !== false && this.getAxisMotionValue(o) && (this.constraints[o] = sc(s.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: e, onMeasureDragConstraints: n } = this.getProps();
    if (!e || !ht(e)) return false;
    const s = e.current, { projection: i } = this.visualElement;
    if (!i || !i.layout) return false;
    const o = ll(s, i.root, this.visualElement.getTransformPagePoint());
    let r = ec(i.layout.layoutBox, o);
    if (n) {
      const a = n(rl(r));
      this.hasMutatedConstraints = !!a, a && (r = Hi(a));
    }
    return r;
  }
  startAnimation(e) {
    const { drag: n, dragMomentum: s, dragElastic: i, dragTransition: o, dragSnapToOrigin: r, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = z((c) => {
      if (!Nt(c, n, this.currentDirection)) return;
      let h = l && l[c] || {};
      r && (h = { min: 0, max: 0 });
      const f = i ? 200 : 1e6, d = i ? 40 : 1e7, p = { type: "inertia", velocity: s ? e[c] : 0, bounceStiffness: f, bounceDamping: d, timeConstant: 750, restDelta: 1, restSpeed: 10, ...o, ...h };
      return this.startAxisValueAnimation(c, p);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(e, n) {
    const s = this.getAxisMotionValue(e);
    return Fe(this.visualElement, e), s.start(gn(e, s, 0, n, this.visualElement, false));
  }
  stopAnimation() {
    z((e) => this.getAxisMotionValue(e).stop());
  }
  pauseAnimation() {
    z((e) => {
      var _a2;
      return (_a2 = this.getAxisMotionValue(e).animation) == null ? void 0 : _a2.pause();
    });
  }
  getAnimationState(e) {
    var _a2;
    return (_a2 = this.getAxisMotionValue(e).animation) == null ? void 0 : _a2.state;
  }
  getAxisMotionValue(e) {
    const n = `_drag${e.toUpperCase()}`, s = this.visualElement.getProps(), i = s[n];
    return i || this.visualElement.getValue(e, (s.initial ? s.initial[e] : void 0) || 0);
  }
  snapToCursor(e) {
    z((n) => {
      const { drag: s } = this.getProps();
      if (!Nt(n, s, this.currentDirection)) return;
      const { projection: i } = this.visualElement, o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: r, max: a } = i.layout.layoutBox[n];
        o.set(e[n] - C(r, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: e, dragConstraints: n } = this.getProps(), { projection: s } = this.visualElement;
    if (!ht(n) || !s || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    z((r) => {
      const a = this.getAxisMotionValue(r);
      if (a && this.constraints !== false) {
        const l = a.get();
        i[r] = nc({ min: l, max: l }, this.constraints[r]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), z((r) => {
      if (!Nt(r, e, null)) return;
      const a = this.getAxisMotionValue(r), { min: l, max: u } = this.constraints[r];
      a.set(C(l, u, i[r]));
    });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    rc.set(this.visualElement, this);
    const e = this.visualElement.current, n = St(e, "pointerdown", (l) => {
      const { drag: u, dragListener: c = true } = this.getProps();
      u && c && this.start(l);
    }), s = () => {
      const { dragConstraints: l } = this.getProps();
      ht(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, o = i.addEventListener("measure", s);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), V.read(s);
    const r = Rt(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (z((c) => {
        const h = this.getAxisMotionValue(c);
        h && (this.originPoint[c] += l[c].translate, h.set(h.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      r(), n(), o(), a && a();
    };
  }
  getProps() {
    const e = this.visualElement.getProps(), { drag: n = false, dragDirectionLock: s = false, dragPropagation: i = false, dragConstraints: o = false, dragElastic: r = Be, dragMomentum: a = true } = e;
    return { ...e, drag: n, dragDirectionLock: s, dragPropagation: i, dragConstraints: o, dragElastic: r, dragMomentum: a };
  }
}
function Nt(t, e, n) {
  return (e === true || e === t) && (n === null || n === t);
}
function ac(t, e = 10) {
  let n = null;
  return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n;
}
class lc extends et {
  constructor(e) {
    super(e), this.removeGroupControls = W, this.removeListeners = W, this.controls = new oc(e);
  }
  mount() {
    const { dragControls: e } = this.node.getProps();
    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || W;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const us = (t) => (e, n) => {
  t && V.postRender(() => t(e, n));
};
class cc extends et {
  constructor() {
    super(...arguments), this.removePointerDownListener = W;
  }
  onPointerDown(e) {
    this.session = new ir(e, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: sr(this.node) });
  }
  createPanHandlers() {
    const { onPanSessionStart: e, onPanStart: n, onPan: s, onPanEnd: i } = this.node.getProps();
    return { onSessionStart: us(e), onStart: us(n), onMove: s, onEnd: (o, r) => {
      delete this.session, i && V.postRender(() => i(o, r));
    } };
  }
  mount() {
    this.removePointerDownListener = St(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Wt = { hasAnimatedSinceResize: true, hasEverUpdated: false };
let he = false;
class uc extends m.Component {
  componentDidMount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s, layoutId: i } = this.props, { projection: o } = e;
    o && (n.group && n.group.add(o), s && s.register && i && s.register(o), he && o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({ ...o.options, onExitComplete: () => this.safeToRemove() })), Wt.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(e) {
    const { layoutDependency: n, visualElement: s, drag: i, isPresent: o } = this.props, { projection: r } = s;
    return r && (r.isPresent = o, he = true, i || e.layoutDependency !== n || n === void 0 || e.isPresent !== o ? r.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? r.promote() : r.relegate() || V.postRender(() => {
      const a = r.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: e } = this.props.visualElement;
    e && (e.root.didUpdate(), on.postRender(() => {
      !e.currentAnimation && e.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: e, layoutGroup: n, switchLayoutGroup: s } = this.props, { projection: i } = e;
    he = true, i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), s && s.deregister && s.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: e } = this.props;
    e && e();
  }
  render() {
    return null;
  }
}
function or(t) {
  const [e, n] = Vi(), s = m.useContext(Oe);
  return G.jsx(uc, { ...t, layoutGroup: s, switchLayoutGroup: m.useContext(Ui), isPresent: e, safeToRemove: n });
}
function hc(t, e, n) {
  const s = B(t) ? t : yt(t);
  return s.start(gn("", s, e, n)), s.animation;
}
const fc = (t, e) => t.depth - e.depth;
class dc {
  constructor() {
    this.children = [], this.isDirty = false;
  }
  add(e) {
    ze(this.children, e), this.isDirty = true;
  }
  remove(e) {
    He(this.children, e), this.isDirty = true;
  }
  forEach(e) {
    this.isDirty && this.children.sort(fc), this.isDirty = false, this.children.forEach(e);
  }
}
function pc(t, e) {
  const n = N.now(), s = ({ timestamp: i }) => {
    const o = i - n;
    o >= e && (Q(s), t(o - e));
  };
  return V.setup(s, true), () => Q(s);
}
const ar = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], mc = ar.length, hs = (t) => typeof t == "string" ? parseFloat(t) : t, fs = (t) => typeof t == "number" || w.test(t);
function yc(t, e, n, s, i, o) {
  i ? (t.opacity = C(0, n.opacity ?? 1, gc(s)), t.opacityExit = C(e.opacity ?? 1, 0, vc(s))) : o && (t.opacity = C(e.opacity ?? 1, n.opacity ?? 1, s));
  for (let r = 0; r < mc; r++) {
    const a = `border${ar[r]}Radius`;
    let l = ds(e, a), u = ds(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0), u || (u = 0), l === 0 || u === 0 || fs(l) === fs(u) ? (t[a] = Math.max(C(hs(l), hs(u), s), 0), (q.test(u) || q.test(l)) && (t[a] += "%")) : t[a] = u;
  }
  (e.rotate || n.rotate) && (t.rotate = C(e.rotate || 0, n.rotate || 0, s));
}
function ds(t, e) {
  return t[e] !== void 0 ? t[e] : t.borderRadius;
}
const gc = lr(0, 0.5, qs), vc = lr(0.5, 0.95, W);
function lr(t, e, n) {
  return (s) => s < t ? 0 : s > e ? 1 : n(At(t, e, s));
}
function ps(t, e) {
  t.min = e.min, t.max = e.max;
}
function K(t, e) {
  ps(t.x, e.x), ps(t.y, e.y);
}
function ms(t, e) {
  t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin;
}
function ys(t, e, n, s, i) {
  return t -= e, t = Gt(t, 1 / n, s), i !== void 0 && (t = Gt(t, 1 / i, s)), t;
}
function xc(t, e = 0, n = 1, s = 0.5, i, o = t, r = t) {
  if (q.test(e) && (e = parseFloat(e), e = C(r.min, r.max, e / 100) - r.min), typeof e != "number") return;
  let a = C(o.min, o.max, s);
  t === o && (a -= e), t.min = ys(t.min, e, n, a, i), t.max = ys(t.max, e, n, a, i);
}
function gs(t, e, [n, s, i], o, r) {
  xc(t, e[n], e[s], e[i], e.scale, o, r);
}
const Tc = ["x", "scaleX", "originX"], Pc = ["y", "scaleY", "originY"];
function vs(t, e, n, s) {
  gs(t.x, e, Tc, n ? n.x : void 0, s ? s.x : void 0), gs(t.y, e, Pc, n ? n.y : void 0, s ? s.y : void 0);
}
function xs(t) {
  return t.translate === 0 && t.scale === 1;
}
function cr(t) {
  return xs(t.x) && xs(t.y);
}
function Ts(t, e) {
  return t.min === e.min && t.max === e.max;
}
function kc(t, e) {
  return Ts(t.x, e.x) && Ts(t.y, e.y);
}
function Ps(t, e) {
  return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
}
function ur(t, e) {
  return Ps(t.x, e.x) && Ps(t.y, e.y);
}
function ks(t) {
  return O(t.x) / O(t.y);
}
function ws(t, e) {
  return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
}
class wc {
  constructor() {
    this.members = [];
  }
  add(e) {
    ze(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (He(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(e) {
    const n = this.members.findIndex((i) => e === i);
    if (n === 0) return false;
    let s;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== false) {
        s = o;
        break;
      }
    }
    return s ? (this.promote(s), true) : false;
  }
  promote(e, n) {
    const s = this.lead;
    if (e !== s && (this.prevLead = s, this.lead = e, e.show(), s)) {
      s.instance && s.scheduleRender(), e.scheduleRender(), e.resumeFrom = s, n && (e.resumeFrom.preserveOpacity = true), s.snapshot && (e.snapshot = s.snapshot, e.snapshot.latestValues = s.animationValues || s.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = true);
      const { crossfade: i } = e.options;
      i === false && s.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      const { options: n, resumingFrom: s } = e;
      n.onExitComplete && n.onExitComplete(), s && s.options.onExitComplete && s.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Mc(t, e, n) {
  let s = "";
  const i = t.x.translate / e.x, o = t.y.translate / e.y, r = (n == null ? void 0 : n.z) || 0;
  if ((i || o || r) && (s = `translate3d(${i}px, ${o}px, ${r}px) `), (e.x !== 1 || e.y !== 1) && (s += `scale(${1 / e.x}, ${1 / e.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: h, rotateY: f, skewX: d, skewY: p } = n;
    u && (s = `perspective(${u}px) ${s}`), c && (s += `rotate(${c}deg) `), h && (s += `rotateX(${h}deg) `), f && (s += `rotateY(${f}deg) `), d && (s += `skewX(${d}deg) `), p && (s += `skewY(${p}deg) `);
  }
  const a = t.x.scale * e.x, l = t.y.scale * e.y;
  return (a !== 1 || l !== 1) && (s += `scale(${a}, ${l})`), s || "none";
}
const fe = ["", "X", "Y", "Z"], Sc = 1e3;
let bc = 0;
function de(t, e, n, s) {
  const { latestValues: i } = e;
  i[t] && (n[t] = i[t], e.setStaticValue(t, 0), s && (s[t] = 0));
}
function hr(t) {
  if (t.hasCheckedOptimisedAppear = true, t.root === t) return;
  const { visualElement: e } = t.options;
  if (!e) return;
  const n = Yi(e);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = t.options;
    window.MotionCancelOptimisedAnimation(n, "transform", V, !(i || o));
  }
  const { parent: s } = t;
  s && !s.hasCheckedOptimisedAppear && hr(s);
}
function fr({ attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: s, resetTransform: i }) {
  return class {
    constructor(r = {}, a = e == null ? void 0 : e()) {
      this.id = bc++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.layoutVersion = 0, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = false, this.nodes.forEach(Cc), this.nodes.forEach(Lc), this.nodes.forEach(Fc), this.nodes.forEach(Dc);
      }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = r, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = true;
      this.root === this && (this.nodes = new dc());
    }
    addEventListener(r, a) {
      return this.eventHandlers.has(r) || this.eventHandlers.set(r, new $e()), this.eventHandlers.get(r).add(a);
    }
    notifyListeners(r, ...a) {
      const l = this.eventHandlers.get(r);
      l && l.notify(...a);
    }
    hasListeners(r) {
      return this.eventHandlers.has(r);
    }
    mount(r) {
      if (this.instance) return;
      this.isSVG = Ai(r) && !va(r), this.instance = r;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(r), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = true), t) {
        let c, h = 0;
        const f = () => this.root.updateBlockedByResize = false;
        V.read(() => {
          h = window.innerWidth;
        }), t(r, () => {
          const d = window.innerWidth;
          d !== h && (h = d, this.root.updateBlockedByResize = true, c && c(), c = pc(f, 250), Wt.hasAnimatedSinceResize && (Wt.hasAnimatedSinceResize = false, this.nodes.forEach(bs)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== false && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: h, hasRelativeLayoutChanged: f, layout: d }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || Nc, { onLayoutAnimationStart: v, onLayoutAnimationComplete: T } = u.getProps(), g = !this.targetLayout || !ur(this.targetLayout, d), P = !h && f;
        if (this.options.layoutRoot || this.resumeFrom || P || h && (g || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const x = { ...sn(p, "layout"), onPlay: v, onComplete: T };
          (u.shouldReduceMotion || this.options.layoutRoot) && (x.delay = 0, x.type = false), this.startAnimation(x), this.setAnimationOrigin(c, P);
        } else h || bs(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = d;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const r = this.getStack();
      r && r.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Q(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = true, this.nodes && this.nodes.forEach(jc), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: r } = this.options;
      return r && r.getProps().transformTemplate;
    }
    willUpdate(r = true) {
      if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hr(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
      this.isLayoutDirty = true;
      for (let c = 0; c < this.path.length; c++) {
        const h = this.path[c];
        h.shouldResetTransform = true, h.updateScroll("snapshot"), h.options.layoutRoot && h.willUpdate(false);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), r && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = false, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ms);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Ss);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = false, this.nodes.forEach(Ec), this.nodes.forEach(Ac), this.nodes.forEach(Vc)) : this.nodes.forEach(Ss), this.clearAllSnapshots();
      const a = N.now();
      j.delta = X(0, 1e3 / 60, a - j.timestamp), j.timestamp = a, j.isProcessing = true, ee.update.process(j), ee.preRender.process(j), ee.render.process(j), j.isProcessing = false;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = true, on.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Rc), this.sharedNodes.forEach(Bc);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, V.preRender(this.updateProjection, false, true));
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !O(this.snapshot.measuredBox.x) && !O(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
      if (this.resumeFrom && !this.resumeFrom.instance) for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const r = this.layout;
      this.layout = this.measure(false), this.layoutVersion++, this.layoutCorrected = E(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, r ? r.layoutBox : void 0);
    }
    updateScroll(r = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === r && (a = false), a && this.instance) {
        const l = s(this.instance);
        this.scroll = { animationId: this.root.animationId, phase: r, isRoot: l, offset: n(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : l };
      }
    }
    resetTransform() {
      if (!i) return;
      const r = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !cr(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      r && this.instance && (a || it(this.latestValues) || c) && (i(this.instance, u), this.shouldResetTransform = false, this.scheduleRender());
    }
    measure(r = true) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return r && (l = this.removeTransform(l)), Uc(l), { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id };
    }
    measurePageBox() {
      var _a2;
      const { visualElement: r } = this.options;
      if (!r) return E();
      const a = r.measureViewportBox();
      if (!(((_a2 = this.scroll) == null ? void 0 : _a2.wasRoot) || this.path.some(zc))) {
        const { scroll: u } = this.root;
        u && (ft(a.x, u.offset.x), ft(a.y, u.offset.y));
      }
      return a;
    }
    removeElementScroll(r) {
      var _a2;
      const a = E();
      if (K(a, r), (_a2 = this.scroll) == null ? void 0 : _a2.wasRoot) return a;
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l], { scroll: c, options: h } = u;
        u !== this.root && c && h.layoutScroll && (c.wasRoot && K(a, r), ft(a.x, c.offset.x), ft(a.y, c.offset.y));
      }
      return a;
    }
    applyTransform(r, a = false) {
      const l = E();
      K(l, r);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && dt(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }), it(c.latestValues) && dt(l, c.latestValues);
      }
      return it(this.latestValues) && dt(l, this.latestValues), l;
    }
    removeTransform(r) {
      const a = E();
      K(a, r);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !it(u.latestValues)) continue;
        De(u.latestValues) && u.updateSnapshot();
        const c = E(), h = u.measurePageBox();
        K(c, h), vs(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return it(this.latestValues) && vs(a, this.latestValues), a;
    }
    setTargetDelta(r) {
      this.targetDelta = r, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
    }
    setOptions(r) {
      this.options = { ...this.options, ...r, crossfade: r.crossfade !== void 0 ? r.crossfade : true };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== j.timestamp && this.relativeParent.resolveTargetDelta(true);
    }
    resolveTargetDelta(r = false) {
      var _a2;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(r || l && this.isSharedProjectionDirty || this.isProjectionDirty || ((_a2 = this.parent) == null ? void 0 : _a2.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
      const { layout: c, layoutId: h } = this.options;
      if (!this.layout || !(c || h)) return;
      this.resolvedRelativeTargetAt = j.timestamp;
      const f = this.getClosestProjectingParent();
      f && this.linkedParentVersion !== f.layoutVersion && !f.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (f && f.layout ? this.createRelativeTarget(f, this.layout.layoutBox, f.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = E(), this.targetWithTransforms = E()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Xl(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : K(this.target, this.layout.layoutBox), Ki(this.target, this.targetDelta)) : K(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = false, f && !!f.resumingFrom == !!this.resumingFrom && !f.options.layoutScroll && f.target && this.animationProgress !== 1 ? this.createRelativeTarget(f, this.target, f.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || De(this.parent.latestValues) || Wi(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(r, a, l) {
      this.relativeParent = r, this.linkedParentVersion = r.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = E(), this.relativeTargetOrigin = E(), Xt(this.relativeTargetOrigin, a, l), K(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var _a2;
      const r = this.getLead(), a = !!this.resumingFrom || this !== r;
      let l = true;
      if ((this.isProjectionDirty || ((_a2 = this.parent) == null ? void 0 : _a2.isProjectionDirty)) && (l = false), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = false), this.resolvedRelativeTargetAt === j.timestamp && (l = false), l) return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c)) return;
      K(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, f = this.treeScale.y;
      al(this.layoutCorrected, this.treeScale, this.path, a), r.layout && !r.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (r.target = r.layout.layoutBox, r.targetWithTransforms = E());
      const { target: d } = r;
      if (!d) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (ms(this.prevProjectionDelta.x, this.projectionDelta.x), ms(this.prevProjectionDelta.y, this.projectionDelta.y)), bt(this.projectionDelta, this.layoutCorrected, d, this.latestValues), (this.treeScale.x !== h || this.treeScale.y !== f || !ws(this.projectionDelta.x, this.prevProjectionDelta.x) || !ws(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", d));
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(r = true) {
      var _a2;
      if ((_a2 = this.options.visualElement) == null ? void 0 : _a2.scheduleRender(), r) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = pt(), this.projectionDelta = pt(), this.projectionDeltaWithTransform = pt();
    }
    setAnimationOrigin(r, a = false) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, h = pt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = E(), d = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, v = d !== p, T = this.getStack(), g = !T || T.members.length <= 1, P = !!(v && !g && this.options.crossfade === true && !this.path.some(Oc));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (S) => {
        const k = S / 1e3;
        As(h.x, r.x, k), As(h.y, r.y, k), this.setTargetDelta(h), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xt(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ic(this.relativeTarget, this.relativeTargetOrigin, f, k), x && kc(this.relativeTarget, x) && (this.isProjectionDirty = false), x || (x = E()), K(x, this.relativeTarget)), v && (this.animationValues = c, yc(c, u, this.latestValues, k, P, g)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = k;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(r) {
      var _a2, _b, _c2;
      this.notifyListeners("animationStart"), (_a2 = this.currentAnimation) == null ? void 0 : _a2.stop(), (_c2 = (_b = this.resumingFrom) == null ? void 0 : _b.currentAnimation) == null ? void 0 : _c2.stop(), this.pendingAnimation && (Q(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = V.update(() => {
        Wt.hasAnimatedSinceResize = true, this.motionValue || (this.motionValue = yt(0)), this.currentAnimation = hc(this.motionValue, [0, 1e3], { ...r, velocity: 0, isSync: true, onUpdate: (a) => {
          this.mixTargetDelta(a), r.onUpdate && r.onUpdate(a);
        }, onStop: () => {
        }, onComplete: () => {
          r.onComplete && r.onComplete(), this.completeAnimation();
        } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const r = this.getStack();
      r && r.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Sc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const r = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = r;
      if (!(!a || !l || !u)) {
        if (this !== r && this.layout && u && dr(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || E();
          const h = O(this.layout.layoutBox.x);
          l.x.min = r.target.x.min, l.x.max = l.x.min + h;
          const f = O(this.layout.layoutBox.y);
          l.y.min = r.target.y.min, l.y.max = l.y.min + f;
        }
        K(a, l), dt(a, c), bt(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(r, a) {
      this.sharedNodes.has(r) || this.sharedNodes.set(r, new wc()), this.sharedNodes.get(r).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({ transition: u ? u.transition : void 0, preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0 });
    }
    isLead() {
      const r = this.getStack();
      return r ? r.lead === this : true;
    }
    getLead() {
      var _a2;
      const { layoutId: r } = this.options;
      return r ? ((_a2 = this.getStack()) == null ? void 0 : _a2.lead) || this : this;
    }
    getPrevLead() {
      var _a2;
      const { layoutId: r } = this.options;
      return r ? (_a2 = this.getStack()) == null ? void 0 : _a2.prevLead : void 0;
    }
    getStack() {
      const { layoutId: r } = this.options;
      if (r) return this.root.sharedNodes.get(r);
    }
    promote({ needsReset: r, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), r && (this.projectionDelta = void 0, this.needsReset = true), a && this.setOptions({ transition: a });
    }
    relegate() {
      const r = this.getStack();
      return r ? r.relegate(this) : false;
    }
    resetSkewAndRotation() {
      const { visualElement: r } = this.options;
      if (!r) return;
      let a = false;
      const { latestValues: l } = r;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = true), !a) return;
      const u = {};
      l.z && de("z", r, u, this.animationValues);
      for (let c = 0; c < fe.length; c++) de(`rotate${fe[c]}`, r, u, this.animationValues), de(`skew${fe[c]}`, r, u, this.animationValues);
      r.render();
      for (const c in u) r.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      r.scheduleRender();
    }
    applyProjectionStyles(r, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        r.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false, r.visibility = "", r.opacity = "", r.pointerEvents = Ht(a == null ? void 0 : a.pointerEvents) || "", r.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (r.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, r.pointerEvents = Ht(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !it(this.latestValues) && (r.transform = l ? l({}, "") : "none", this.hasProjected = false);
        return;
      }
      r.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let h = Mc(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (h = l(c, h)), r.transform = h;
      const { x: f, y: d } = this.projectionDelta;
      r.transformOrigin = `${f.origin * 100}% ${d.origin * 100}% 0`, u.animationValues ? r.opacity = u === this ? c.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : r.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const p in Ce) {
        if (c[p] === void 0) continue;
        const { correct: v, applyTo: T, isCSSVariable: g } = Ce[p], P = h === "none" ? c[p] : v(c[p], u);
        if (T) {
          const x = T.length;
          for (let S = 0; S < x; S++) r[T[S]] = P;
        } else g ? this.options.visualElement.renderState.vars[p] = P : r[p] = P;
      }
      this.options.layoutId && (r.pointerEvents = u === this ? Ht(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((r) => {
        var _a2;
        return (_a2 = r.currentAnimation) == null ? void 0 : _a2.stop();
      }), this.root.nodes.forEach(Ms), this.root.sharedNodes.clear();
    }
  };
}
function Ac(t) {
  t.updateLayout();
}
function Vc(t) {
  var _a2;
  const e = ((_a2 = t.resumeFrom) == null ? void 0 : _a2.snapshot) || t.snapshot;
  if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: s } = t.layout, { animationType: i } = t.options, o = e.source !== t.layout.source;
    i === "size" ? z((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = O(h);
      h.min = n[c].min, h.max = h.min + f;
    }) : dr(i, e.layoutBox, n) && z((c) => {
      const h = o ? e.measuredBox[c] : e.layoutBox[c], f = O(n[c]);
      h.max = h.min + f, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = true, t.relativeTarget[c].max = t.relativeTarget[c].min + f);
    });
    const r = pt();
    bt(r, n, e.layoutBox);
    const a = pt();
    o ? bt(a, t.applyTransform(s, true), e.measuredBox) : bt(a, n, e.layoutBox);
    const l = !cr(r);
    let u = false;
    if (!t.resumeFrom) {
      const c = t.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: h, layout: f } = c;
        if (h && f) {
          const d = E();
          Xt(d, e.layoutBox, h.layoutBox);
          const p = E();
          Xt(p, n, f.layoutBox), ur(d, p) || (u = true), c.options.layoutRoot && (t.relativeTarget = p, t.relativeTargetOrigin = d, t.relativeParent = c);
        }
      }
    }
    t.notifyListeners("didUpdate", { layout: n, snapshot: e, delta: a, layoutDelta: r, hasLayoutChanged: l, hasRelativeLayoutChanged: u });
  } else if (t.isLead()) {
    const { onExitComplete: n } = t.options;
    n && n();
  }
  t.options.transition = void 0;
}
function Cc(t) {
  t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
}
function Dc(t) {
  t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = false;
}
function Rc(t) {
  t.clearSnapshot();
}
function Ms(t) {
  t.clearMeasurements();
}
function Ss(t) {
  t.isLayoutDirty = false;
}
function Ec(t) {
  const { visualElement: e } = t.options;
  e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
}
function bs(t) {
  t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = true;
}
function Lc(t) {
  t.resolveTargetDelta();
}
function Fc(t) {
  t.calcProjection();
}
function jc(t) {
  t.resetSkewAndRotation();
}
function Bc(t) {
  t.removeLeadSnapshot();
}
function As(t, e, n) {
  t.translate = C(e.translate, 0, n), t.scale = C(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint;
}
function Vs(t, e, n, s) {
  t.min = C(e.min, n.min, s), t.max = C(e.max, n.max, s);
}
function Ic(t, e, n, s) {
  Vs(t.x, e.x, n.x, s), Vs(t.y, e.y, n.y, s);
}
function Oc(t) {
  return t.animationValues && t.animationValues.opacityExit !== void 0;
}
const Nc = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, Cs = (t) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t), Ds = Cs("applewebkit/") && !Cs("chrome/") ? Math.round : W;
function Rs(t) {
  t.min = Ds(t.min), t.max = Ds(t.max);
}
function Uc(t) {
  Rs(t.x), Rs(t.y);
}
function dr(t, e, n) {
  return t === "position" || t === "preserve-aspect" && !Gl(ks(e), ks(n), 0.2);
}
function zc(t) {
  var _a2;
  return t !== t.root && ((_a2 = t.scroll) == null ? void 0 : _a2.wasRoot);
}
const Hc = fr({ attachResizeListener: (t, e) => Rt(t, "resize", e), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), pe = { current: void 0 }, pr = fr({ measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }), defaultParent: () => {
  if (!pe.current) {
    const t = new Hc({});
    t.mount(window), t.setOptions({ layoutScroll: true }), pe.current = t;
  }
  return pe.current;
}, resetTransform: (t, e) => {
  t.style.transform = e !== void 0 ? e : "none";
}, checkIsScrollRoot: (t) => window.getComputedStyle(t).position === "fixed" }), Wc = { pan: { Feature: cc }, drag: { Feature: lc, ProjectionNode: pr, MeasureLayout: or } };
function Es(t, e, n) {
  const { props: s } = t;
  t.animationState && s.whileHover && t.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, o = s[i];
  o && V.postRender(() => o(e, jt(e)));
}
class Kc extends et {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = da(e, (n, s) => (Es(this.node, s, "Start"), (i) => Es(this.node, i, "End"))));
  }
  unmount() {
  }
}
class $c extends et {
  constructor() {
    super(...arguments), this.isActive = false;
  }
  onFocus() {
    let e = false;
    try {
      e = this.node.current.matches(":focus-visible");
    } catch {
      e = true;
    }
    !e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
  }
  mount() {
    this.unmount = Et(Rt(this.node.current, "focus", () => this.onFocus()), Rt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Ls(t, e, n) {
  const { props: s } = t;
  if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
  t.animationState && s.whileTap && t.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), o = s[i];
  o && V.postRender(() => o(e, jt(e)));
}
class _c extends et {
  mount() {
    const { current: e } = this.node;
    e && (this.unmount = ga(e, (n, s) => (Ls(this.node, s, "Start"), (i, { success: o }) => Ls(this.node, i, o ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Ie = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), qc = (t) => {
  const e = Ie.get(t.target);
  e && e(t);
}, Gc = (t) => {
  t.forEach(qc);
};
function Xc({ root: t, ...e }) {
  const n = t || document;
  me.has(n) || me.set(n, {});
  const s = me.get(n), i = JSON.stringify(e);
  return s[i] || (s[i] = new IntersectionObserver(Gc, { root: t, ...e })), s[i];
}
function Yc(t, e, n) {
  const s = Xc(e);
  return Ie.set(t, n), s.observe(t), () => {
    Ie.delete(t), s.unobserve(t);
  };
}
const Zc = { some: 0, all: 1 };
class Jc extends et {
  constructor() {
    super(...arguments), this.hasEnteredView = false, this.isInView = false;
  }
  startObserver() {
    this.unmount();
    const { viewport: e = {} } = this.node.getProps(), { root: n, margin: s, amount: i = "some", once: o } = e, r = { root: n ? n.current : void 0, rootMargin: s, threshold: typeof i == "number" ? i : Zc[i] }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, o && !u && this.hasEnteredView)) return;
      u && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: h } = this.node.getProps(), f = u ? c : h;
      f && f(l);
    };
    return Yc(this.node.current, r, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: e, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Qc(e, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Qc({ viewport: t = {} }, { viewport: e = {} } = {}) {
  return (n) => t[n] !== e[n];
}
const tu = { inView: { Feature: Jc }, tap: { Feature: _c }, focus: { Feature: $c }, hover: { Feature: Kc } }, eu = { layout: { ProjectionNode: pr, MeasureLayout: or } }, nu = { ...Hl, ...tu, ...Wc, ...eu }, uu = il(nu, gl);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const su = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mr = (...t) => t.filter((e, n, s) => !!e && e.trim() !== "" && s.indexOf(e) === n).join(" ").trim();
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var iu = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ru = m.forwardRef(({ color: t = "currentColor", size: e = 24, strokeWidth: n = 2, absoluteStrokeWidth: s, className: i = "", children: o, iconNode: r, ...a }, l) => m.createElement("svg", { ref: l, ...iu, width: e, height: e, stroke: t, strokeWidth: s ? Number(n) * 24 / Number(e) : n, className: mr("lucide", i), ...a }, [...r.map(([u, c]) => m.createElement(u, c)), ...Array.isArray(o) ? o : [o]]));
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const y = (t, e) => {
  const n = m.forwardRef(({ className: s, ...i }, o) => m.createElement(ru, { ref: o, iconNode: e, className: mr(`lucide-${su(t)}`, s), ...i }));
  return n.displayName = `${t}`, n;
};
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hu = y("Archive", [["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }], ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }], ["path", { d: "M10 12h4", key: "a56b0p" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fu = y("ArrowDownUp", [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }], ["path", { d: "M17 4v16", key: "7dpous" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const du = y("ArrowDownWideNarrow", [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "M11 4h10", key: "1w87gc" }], ["path", { d: "M11 8h7", key: "djye34" }], ["path", { d: "M11 12h4", key: "q8tih4" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pu = y("ArrowLeft", [["path", { d: "m12 19-7-7 7-7", key: "1l729n" }], ["path", { d: "M19 12H5", key: "x3x0zl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mu = y("BookOpen", [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yu = y("Bot", [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gu = y("Calendar", [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vu = y("ChartColumn", [["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }], ["path", { d: "M18 17V9", key: "2bz60n" }], ["path", { d: "M13 17V5", key: "1frdt8" }], ["path", { d: "M8 17v-3", key: "17ska0" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xu = y("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tu = y("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Pu = y("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ku = y("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wu = y("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mu = y("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Su = y("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const bu = y("CircleCheck", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Au = y("CirclePlay", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polygon", { points: "10 8 16 12 10 16 10 8", key: "1cimsy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vu = y("CircleX", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "m15 9-6 6", key: "1uzhvr" }], ["path", { d: "m9 9 6 6", key: "z0biqf" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Cu = y("Clock", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Du = y("Copy", [["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }], ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ru = y("Database", [["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }], ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }], ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Eu = y("Download", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }], ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lu = y("ExternalLink", [["path", { d: "M15 3h6v6", key: "1q9fwt" }], ["path", { d: "M10 14 21 3", key: "gplh6r" }], ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Fu = y("EyeOff", [["path", { d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49", key: "ct8e1f" }], ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }], ["path", { d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143", key: "13bj9a" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ju = y("Eye", [["path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0", key: "1nclc0" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bu = y("FileStack", [["path", { d: "M21 7h-3a2 2 0 0 1-2-2V2", key: "9rb54x" }], ["path", { d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z", key: "1059l0" }], ["path", { d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15", key: "16874u" }], ["path", { d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11", key: "k2ox98" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Iu = y("FileText", [["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }], ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }], ["path", { d: "M10 9H8", key: "b1mrlr" }], ["path", { d: "M16 13H8", key: "t4e002" }], ["path", { d: "M16 17H8", key: "z1uh3a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ou = y("Filter", [["polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nu = y("HardDrive", [["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }], ["path", { d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z", key: "oot6mr" }], ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }], ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Uu = y("Layers", [["path", { d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z", key: "zw3jo" }], ["path", { d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12", key: "1wduqc" }], ["path", { d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17", key: "kqbvx6" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const zu = y("LayoutGrid", [["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }], ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }], ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }], ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hu = y("ListPlus", [["path", { d: "M11 12H3", key: "51ecnj" }], ["path", { d: "M16 6H3", key: "1wxfjs" }], ["path", { d: "M16 18H3", key: "12xzn7" }], ["path", { d: "M18 9v6", key: "1twb98" }], ["path", { d: "M21 12h-6", key: "bt1uis" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Wu = y("List", [["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M3 18h.01", key: "1tta3j" }], ["path", { d: "M3 6h.01", key: "1rqtza" }], ["path", { d: "M8 12h13", key: "1za7za" }], ["path", { d: "M8 18h13", key: "1lx6n3" }], ["path", { d: "M8 6h13", key: "ik3vkj" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ku = y("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const $u = y("MessageSquare", [["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _u = y("MicOff", [["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }], ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }], ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }], ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }], ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qu = y("Mic", [["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }], ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }], ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gu = y("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Xu = y("PenLine", [["path", { d: "M12 20h9", key: "t2du7b" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z", key: "1ykcvy" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Yu = y("Pen", [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Zu = y("Pencil", [["path", { d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z", key: "1a8usu" }], ["path", { d: "m15 5 4 4", key: "1mk7zo" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ju = y("PhoneOff", [["path", { d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91", key: "z86iuo" }], ["line", { x1: "22", x2: "2", y1: "2", y2: "22", key: "11kh81" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qu = y("Pin", [["path", { d: "M12 17v5", key: "bb1du9" }], ["path", { d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z", key: "1nkz8b" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const th = y("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const eh = y("Plug", [["path", { d: "M12 22v-5", key: "1ega77" }], ["path", { d: "M9 8V2", key: "14iosj" }], ["path", { d: "M15 8V2", key: "18g5xt" }], ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const nh = y("Plus", [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const sh = y("RefreshCw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ih = y("RotateCcw", [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const rh = y("Search", [["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }], ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const oh = y("SendHorizontal", [["path", { d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z", key: "117uat" }], ["path", { d: "M6 12h16", key: "s4cdu5" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ah = y("Send", [["path", { d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z", key: "1ffxy3" }], ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const lh = y("Server", [["rect", { width: "20", height: "8", x: "2", y: "2", rx: "2", ry: "2", key: "ngkwjq" }], ["rect", { width: "20", height: "8", x: "2", y: "14", rx: "2", ry: "2", key: "iecqi9" }], ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }], ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ch = y("Settings2", [["path", { d: "M20 7h-9", key: "3s1dr2" }], ["path", { d: "M14 17H5", key: "gfn3mx" }], ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }], ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const uh = y("Settings", [["path", { d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z", key: "1qme2f" }], ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const hh = y("Sparkles", [["path", { d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z", key: "4pj2yx" }], ["path", { d: "M20 3v4", key: "1olli1" }], ["path", { d: "M22 5h-4", key: "1gvqau" }], ["path", { d: "M4 17v2", key: "vumght" }], ["path", { d: "M5 18H3", key: "zchphs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const fh = y("SquareCheckBig", [["path", { d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5", key: "1uzm8b" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const dh = y("SquarePen", [["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }], ["path", { d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z", key: "ohrbg2" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ph = y("Sun", [["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 20v2", key: "1lh1kg" }], ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }], ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "M20 12h2", key: "1q8mjw" }], ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }], ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const mh = y("Tag", [["path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z", key: "vktsd0" }], ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const yh = y("Target", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }], ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const gh = y("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const vh = y("TrendingUp", [["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }], ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const xh = y("Upload", [["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }], ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }], ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Th = y("User", [["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }], ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ph = y("Users", [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const kh = y("Volume2", [["path", { d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z", key: "uqj9uw" }], ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }], ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }]]);
/**
* @license lucide-react v0.468.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const wh = y("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]);
export {
  ah as $,
  lu as A,
  mu as B,
  wu as C,
  Ru as D,
  Du as E,
  Iu as F,
  Qu as G,
  dh as H,
  ju as I,
  Nu as J,
  Xu as K,
  Ku as L,
  qu as M,
  th as N,
  Uu as O,
  nh as P,
  ch as Q,
  sh as R,
  hh as S,
  vh as T,
  Ph as U,
  fu as V,
  Zu as W,
  wh as X,
  hu as Y,
  pu as Z,
  vu as _,
  Tu as a,
  _u as a0,
  yu as a1,
  oh as a2,
  Ju as a3,
  Th as a4,
  zu as a5,
  Wu as a6,
  Lu as a7,
  Yu as a8,
  lh as a9,
  eh as aa,
  du as ab,
  Vu as ac,
  kh as ad,
  Fu as ae,
  Hu as af,
  Bu as b,
  ph as c,
  Gu as d,
  gu as e,
  $u as f,
  uh as g,
  ku as h,
  xh as i,
  G as j,
  Mu as k,
  Su as l,
  uu as m,
  Cu as n,
  Eu as o,
  yh as p,
  bu as q,
  gh as r,
  fh as s,
  Pu as t,
  rh as u,
  Ou as v,
  ih as w,
  mh as x,
  Au as y,
  xu as z
};
