import { j as s, m as A, L as ce, n as je, k as ke, R as Xe, T as Qe, o as we, p as Pe, q as Gt, M as et, e as Wt, f as tt, r as Vt, h as Jt, S as Ut, F as Ht, C as qt, a as Zt, s as Yt, t as Xt, A as Qt } from "./ui-vendor-D79l2AJO.js";
import { r as l, g as at, u as ea } from "./react-vendor-ek4qDQiW.js";
import { a as Ne, h as F, u as ta, L as aa, g as ra } from "./index-ahWF3Ci-.js";
import { n as Ce, c as sa, a as na, b as rt } from "./score-3bjDqiWg.js";
import { c as K, s as ee, r as ia, a as N, b as G, p as W, d as la, e as Se, f as oa, g as q, h as ca, i as da, j as ua, k as st, l as ma, m as xa, n as pa, o as fa, q as ga, t as ha, u as va, v as ba, w as ya, x as ja, y as de, z as ka, A as nt, B as wa, C as it, D as Oe, E as Pa, F as Na, G as Sa, H as Oa, I as Aa, J as T, K as lt, Z as pe, L as fe, M as L, N as $, O as ot, P as ct, Q as ne, R as Ae, S as Ea, T as Da, U as Ia, V as z, W as Ra, X as Ca, Y as dt, _ as ut, $ as mt, a0 as xt, a1 as Ta, a2 as La, a3 as $a, a4 as pt, a5 as _a, a6 as ue, a7 as Ma, a8 as Te, a9 as Ba, aa as Fa, ab as za, ac as ft, ad as Ka, ae as Ga, af as Wa, ag as Le, ah as Va, ai as Ja, aj as Ua, ak as Ha, al as le, am as qa, an as Za, ao as Ya, ap as Xa, aq as Qa, ar as er, as as tr, at as ar, au as gt, av as ht, aw as rr, ax as sr, ay as nr, az as ir, aA as lr } from "./LineChart-DHmYT-uS.js";
import { a as be, f as me } from "./date-DBJmXC5z.js";
import { C as or } from "./ConfirmDialog-DJIdcjoY.js";
import cr from "./InterviewDetailPanel-ZEaa4FTU.js";
import { r as $e } from "./resume-CeEi11Jc.js";
import "./syntax-highlighter-BG_RSeav.js";
var dr = ["points", "className", "baseLinePoints", "connectNulls"], _e;
function H() {
  return H = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, H.apply(null, arguments);
}
function ur(e, t) {
  if (e == null) return {};
  var a, r, n = mr(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function mr(e, t) {
  if (e == null) return {};
  var a = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    a[r] = e[r];
  }
  return a;
}
function xr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Me = (e) => e && e.x === +e.x && e.y === +e.y, pr = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = [[]];
  return t.forEach((r) => {
    Me(r) ? a[a.length - 1].push(r) : a[a.length - 1].length > 0 && a.push([]);
  }), Me(t[0]) && a[a.length - 1].push(t[0]), a[a.length - 1].length <= 0 && (a = a.slice(0, -1)), a;
}, te = (e, t) => {
  var a = pr(e);
  t && (a = [a.reduce((n, i) => [...n, ...i], [])]);
  var r = a.map((n) => n.reduce((i, o, c) => ia(_e || (_e = xr(["", "", "", ",", ""])), i, c === 0 ? "M" : "L", o.x, o.y), "")).join("");
  return a.length === 1 ? "".concat(r, "Z") : r;
}, fr = (e, t, a) => {
  var r = te(e, a);
  return "".concat(r.slice(-1) === "Z" ? r.slice(0, -1) : r, "L").concat(te(Array.from(t).reverse(), a).slice(1));
}, vt = (e) => {
  var { points: t, className: a, baseLinePoints: r, connectNulls: n } = e, i = ur(e, dr);
  if (!t || !t.length) return null;
  var o = K("recharts-polygon", a);
  if (r && r.length) {
    var c = i.stroke && i.stroke !== "none", d = fr(t, r, n);
    return l.createElement("g", { className: o }, l.createElement("path", H({}, ee(i), { fill: d.slice(-1) === "Z" ? i.fill : "none", stroke: "none", d })), c ? l.createElement("path", H({}, ee(i), { fill: "none", d: te(t, n) })) : null, c ? l.createElement("path", H({}, ee(i), { fill: "none", d: te(r, n) })) : null);
  }
  var u = te(t, n);
  return l.createElement("path", H({}, ee(i), { fill: u.slice(-1) === "Z" ? i.fill : "none", className: o, d: u }));
}, bt = (e) => e.graphicalItems.polarItems, gr = N([W, ya], ja), ge = N([bt, G, gr], ga), hr = N([ge], ha), he = N([hr, st], ma), yt = N([he, G, ge], ua);
N([he, G, ge], (e, t, a) => a.length > 0 ? e.flatMap((r) => a.flatMap((n) => {
  var i, o = de(r, (i = t.dataKey) !== null && i !== void 0 ? i : n.dataKey);
  return { value: o, errorDomain: [] };
})).filter(Boolean) : (t == null ? void 0 : t.dataKey) != null ? e.map((r) => ({ value: de(r, t.dataKey), errorDomain: [] })) : e.map((r) => ({ value: r, errorDomain: [] })));
var Be = () => {
}, vr = N([he, G, ge, va, W], ba), br = N([G, xa, pa, Be, vr, Be, q, W], fa), jt = N([G, q, he, yt, ca, W, br], da), kt = N([jt, G, Se], oa), yr = N([G, jt, kt, W], la), Ee = (e, t, a) => {
  switch (t) {
    case "angleAxis":
      return Oe(e, a);
    case "radiusAxis":
      return it(e, a);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, De = (e, t, a) => {
  switch (t) {
    case "angleAxis":
      return Na(e, a);
    case "radiusAxis":
      return Pa(e, a);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Z = N([Ee, Se, yr, De], ka), wt = N([q, yt, Sa, W], Oa), Y = N([q, Ee, Se, Z, kt, De, nt, wt, W], wa), jr = N([Y], (e) => {
  if (e) {
    var t = /* @__PURE__ */ new Map();
    return e.forEach((a) => {
      var r = (a.coordinate + 360) % 360;
      t.has(r) || t.set(r, a);
    }), Array.from(t.values());
  }
});
N([q, Ee, Z, De, nt, wt, W], Aa);
var kr = (e, t) => Y(e, "angleAxis", t, false), wr = N([kr], (e) => {
  if (e) return e.map((t) => t.coordinate);
}), Pr = (e, t) => Y(e, "radiusAxis", t, false), Nr = N([Pr], (e) => {
  if (e) return e.map((t) => t.coordinate);
}), Sr = ["gridType", "radialLines", "angleAxisId", "radiusAxisId", "cx", "cy", "innerRadius", "outerRadius", "polarAngles", "polarRadius"];
function Or(e, t) {
  if (e == null) return {};
  var a, r, n = Ar(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Ar(e, t) {
  if (e == null) return {};
  var a = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    a[r] = e[r];
  }
  return a;
}
function C() {
  return C = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, C.apply(null, arguments);
}
function Fe(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fe(Object(a), true).forEach(function(r) {
      Er(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Fe(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function Er(e, t, a) {
  return (t = Dr(t)) in e ? Object.defineProperty(e, t, { value: a, enumerable: true, configurable: true, writable: true }) : e[t] = a, e;
}
function Dr(e) {
  var t = Ir(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ir(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rr = (e, t, a, r) => {
  var n = "";
  return r.forEach((i, o) => {
    var c = $(t, a, e, i);
    o ? n += "L ".concat(c.x, ",").concat(c.y) : n += "M ".concat(c.x, ",").concat(c.y);
  }), n += "Z", n;
}, Cr = (e) => {
  var { cx: t, cy: a, innerRadius: r, outerRadius: n, polarAngles: i, radialLines: o } = e;
  if (!i || !i.length || !o) return null;
  var c = ae({ stroke: "#ccc" }, L(e));
  return l.createElement("g", { className: "recharts-polar-grid-angle" }, i.map((d) => {
    var u = $(t, a, r, d), p = $(t, a, n, d);
    return l.createElement("line", C({ key: "line-".concat(d) }, c, { x1: u.x, y1: u.y, x2: p.x, y2: p.y }));
  }));
}, ze = (e) => {
  var { cx: t, cy: a, radius: r } = e, n = ae({ stroke: "#ccc", fill: "none" }, L(e));
  return l.createElement("circle", C({}, n, { className: K("recharts-polar-grid-concentric-circle", e.className), cx: t, cy: a, r }));
}, Ke = (e) => {
  var { radius: t } = e, a = ae({ stroke: "#ccc", fill: "none" }, L(e));
  return l.createElement("path", C({}, a, { className: K("recharts-polar-grid-concentric-polygon", e.className), d: Rr(t, e.cx, e.cy, e.polarAngles) }));
}, Tr = (e) => {
  var { polarRadius: t, gridType: a } = e;
  if (!t || !t.length) return null;
  var r = Math.max(...t), n = e.fill && e.fill !== "none";
  return l.createElement("g", { className: "recharts-polar-grid-concentric" }, n && a === "circle" && l.createElement(ze, C({}, e, { radius: r })), n && a !== "circle" && l.createElement(Ke, C({}, e, { radius: r })), t.map((i, o) => {
    var c = o;
    return a === "circle" ? l.createElement(ze, C({ key: c }, e, { fill: "none", radius: i })) : l.createElement(Ke, C({ key: c }, e, { fill: "none", radius: i }));
  }));
}, Pt = (e) => {
  var t, a, r, n, i, o, c, d, u, { gridType: p = "polygon", radialLines: m = true, angleAxisId: f = 0, radiusAxisId: g = 0, cx: w, cy: h, innerRadius: j, outerRadius: O, polarAngles: P, polarRadius: b } = e, k = Or(e, Sr), y = T(fe), x = T((J) => wr(J, f)), S = T((J) => Nr(J, g)), E = Array.isArray(P) ? P : x, M = Array.isArray(b) ? b : S;
  if (E == null || M == null) return null;
  var V = ae(ae({ cx: (t = (a = y == null ? void 0 : y.cx) !== null && a !== void 0 ? a : w) !== null && t !== void 0 ? t : 0, cy: (r = (n = y == null ? void 0 : y.cy) !== null && n !== void 0 ? n : h) !== null && r !== void 0 ? r : 0, innerRadius: (i = (o = y == null ? void 0 : y.innerRadius) !== null && o !== void 0 ? o : j) !== null && i !== void 0 ? i : 0, outerRadius: (c = (d = y == null ? void 0 : y.outerRadius) !== null && d !== void 0 ? d : O) !== null && c !== void 0 ? c : 0, polarAngles: E, polarRadius: M }, k), {}, { zIndex: (u = k.zIndex) !== null && u !== void 0 ? u : lt.grid }), { outerRadius: ie } = V;
  return ie <= 0 ? null : l.createElement(pe, { zIndex: V.zIndex }, l.createElement("g", { className: "recharts-polar-grid" }, l.createElement(Tr, C({ gridType: p, radialLines: m }, V, { polarAngles: E, polarRadius: M })), l.createElement(Cr, C({ gridType: p, radialLines: m }, V, { polarAngles: E, polarRadius: M }))));
};
Pt.displayName = "PolarGrid";
var Nt = {}, St = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(a, r) {
    if (a.length === 0) return;
    let n = a[0], i = r(n);
    for (let o = 1; o < a.length; o++) {
      const c = a[o], d = r(c);
      d > i && (i = d, n = c);
    }
    return n;
  }
  e.maxBy = t;
})(St);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = St, a = ct, r = ot;
  function n(i, o) {
    if (i != null) return t.maxBy(Array.from(i), r.iteratee(o ?? a.identity));
  }
  e.maxBy = n;
})(Nt);
var Lr = Nt.maxBy;
const $r = at(Lr);
var Ot = {}, At = {};
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  function t(a, r) {
    if (a.length === 0) return;
    let n = a[0], i = r(n);
    for (let o = 1; o < a.length; o++) {
      const c = a[o], d = r(c);
      d < i && (i = d, n = c);
    }
    return n;
  }
  e.minBy = t;
})(At);
(function(e) {
  Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
  const t = At, a = ct, r = ot;
  function n(i, o) {
    if (i != null) return t.minBy(Array.from(i), r.iteratee(o ?? a.identity));
  }
  e.minBy = n;
})(Ot);
var _r = Ot.minBy;
const Mr = at(_r);
var Br = ["cx", "cy", "angle", "axisLine"], Fr = ["angle", "tickFormatter", "stroke", "tick"];
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, re.apply(null, arguments);
}
function Ge(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ge(Object(a), true).forEach(function(r) {
      zr(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ge(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function zr(e, t, a) {
  return (t = Kr(t)) in e ? Object.defineProperty(e, t, { value: a, enumerable: true, configurable: true, writable: true }) : e[t] = a, e;
}
function Kr(e) {
  var t = Gr(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Gr(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Et(e, t) {
  if (e == null) return {};
  var a, r, n = Wr(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Wr(e, t) {
  if (e == null) return {};
  var a = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    a[r] = e[r];
  }
  return a;
}
var Vr = "radiusAxis";
function Jr(e) {
  var t = Ae();
  return l.useEffect(() => (t(Ea(e)), () => {
    t(Da(e));
  })), null;
}
var Ur = (e, t, a, r) => {
  var { coordinate: n } = e;
  return $(a, r, n, t);
}, Hr = (e) => {
  var t;
  switch (e) {
    case "left":
      t = "end";
      break;
    case "right":
      t = "start";
      break;
    default:
      t = "middle";
      break;
  }
  return t;
}, qr = (e, t, a, r) => {
  var n = $r(r, (o) => o.coordinate || 0), i = Mr(r, (o) => o.coordinate || 0);
  return { cx: t, cy: a, startAngle: e, endAngle: e, innerRadius: (i == null ? void 0 : i.coordinate) || 0, outerRadius: (n == null ? void 0 : n.coordinate) || 0, clockWise: false };
}, Zr = (e, t) => {
  var { cx: a, cy: r, angle: n, axisLine: i } = e, o = Et(e, Br), c = t.reduce((m, f) => [Math.min(m[0], f.coordinate), Math.max(m[1], f.coordinate)], [1 / 0, -1 / 0]), d = $(a, r, c[0], n), u = $(a, r, c[1], n), p = B(B(B({}, L(o)), {}, { fill: "none" }, L(i)), {}, { x1: d.x, y1: d.y, x2: u.x, y2: u.y });
  return l.createElement("line", re({ className: "recharts-polar-radius-axis-line" }, p));
}, Yr = (e, t, a) => {
  var r;
  return l.isValidElement(e) ? r = l.cloneElement(e, t) : typeof e == "function" ? r = e(t) : r = l.createElement(xt, re({}, t, { className: "recharts-polar-radius-axis-tick-value" }), a), r;
}, Xr = (e, t) => {
  var { angle: a, tickFormatter: r, stroke: n, tick: i } = e, o = Et(e, Fr), c = Hr(e.orientation), d = L(o), u = dt(i), p = t.map((m, f) => {
    var g = Ur(m, e.angle, e.cx, e.cy), w = B(B(B(B({ textAnchor: c, transform: "rotate(".concat(90 - a, ", ").concat(g.x, ", ").concat(g.y, ")") }, d), {}, { stroke: "none", fill: n }, u), {}, { index: f }, g), {}, { payload: m });
    return l.createElement(z, re({ className: K("recharts-polar-radius-axis-tick", mt(i)), key: "tick-".concat(m.coordinate) }, ut(e, m, f)), Yr(i, w, r ? r(m.value, f) : m.value));
  });
  return l.createElement(z, { className: "recharts-polar-radius-axis-ticks" }, p);
}, Qr = (e) => {
  var { radiusAxisId: t } = e, a = T(fe), r = T((d) => Z(d, "radiusAxis", t)), n = T((d) => Y(d, "radiusAxis", t, false));
  if (a == null || !n || !n.length || r == null) return null;
  var i = B(B({}, e), {}, { scale: r }, a), { tick: o, axisLine: c } = i;
  return l.createElement(pe, { zIndex: i.zIndex }, l.createElement(z, { className: K("recharts-polar-radius-axis", Vr, i.className) }, c && Zr(i, n), o && Xr(i, n), l.createElement(Ra, qr(i.angle, i.cx, i.cy, n), l.createElement(Ca, { label: i.label }), i.children)));
};
function Dt(e) {
  var t = ne(e, Ia);
  return l.createElement(l.Fragment, null, l.createElement(Jr, { domain: t.domain, id: t.radiusAxisId, scale: t.scale, type: t.type, dataKey: t.dataKey, unit: void 0, name: t.name, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDataOverflow: t.allowDataOverflow, reversed: t.reversed, includeHidden: t.includeHidden, allowDecimals: t.allowDecimals, ticks: t.ticks, tickCount: t.tickCount, tick: t.tick }), l.createElement(Qr, t));
}
Dt.displayName = "PolarRadiusAxis";
var es = ["children"];
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, U.apply(null, arguments);
}
function We(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? We(Object(a), true).forEach(function(r) {
      ts(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : We(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function ts(e, t, a) {
  return (t = as(t)) in e ? Object.defineProperty(e, t, { value: a, enumerable: true, configurable: true, writable: true }) : e[t] = a, e;
}
function as(e) {
  var t = rs(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function rs(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ss(e, t) {
  if (e == null) return {};
  var a, r, n = ns(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function ns(e, t) {
  if (e == null) return {};
  var a = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    a[r] = e[r];
  }
  return a;
}
var Ve = 1e-5, is = Math.cos(ue(45)), ls = "angleAxis";
function os(e) {
  var t = Ae(), a = l.useMemo(() => {
    var { children: i } = e, o = ss(e, es);
    return o;
  }, [e]), r = T((i) => Oe(i, a.id)), n = a === r;
  return l.useEffect(() => (t(Ta(a)), () => {
    t(La(a));
  }), [t, a]), n ? e.children : null;
}
var cs = (e, t) => {
  var { cx: a, cy: r, radius: n, orientation: i, tickSize: o } = t, c = o || 8, d = $(a, r, n, e.coordinate), u = $(a, r, n + (i === "inner" ? -1 : 1) * c, e.coordinate);
  return { x1: d.x, y1: d.y, x2: u.x, y2: u.y };
}, ds = (e, t) => {
  var a = Math.cos(ue(-e.coordinate));
  return a > Ve ? t === "outer" ? "start" : "end" : a < -Ve ? t === "outer" ? "end" : "start" : "middle";
}, us = (e) => {
  var t = Math.cos(ue(-e.coordinate)), a = Math.sin(ue(-e.coordinate));
  return Math.abs(t) <= is ? a > 0 ? "start" : "end" : "middle";
}, ms = (e) => {
  var { cx: t, cy: a, radius: r, axisLineType: n, axisLine: i, ticks: o } = e;
  if (!i) return null;
  var c = _(_({}, L(e)), {}, { fill: "none" }, L(i));
  if (n === "circle") return l.createElement(_a, U({ className: "recharts-polar-angle-axis-line" }, c, { cx: t, cy: a, r }));
  var d = o.map((u) => $(t, a, r, u.coordinate));
  return l.createElement(vt, U({ className: "recharts-polar-angle-axis-line" }, c, { points: d }));
}, xs = (e) => {
  var { tick: t, tickProps: a, value: r } = e;
  return t ? l.isValidElement(t) ? l.cloneElement(t, a) : typeof t == "function" ? t(a) : l.createElement(xt, U({}, a, { className: "recharts-polar-angle-axis-tick-value" }), r) : null;
}, ps = (e) => {
  var { tick: t, tickLine: a, tickFormatter: r, stroke: n, ticks: i } = e, o = L(e), c = dt(t), d = _(_({}, o), {}, { fill: "none" }, L(a)), u = i.map((p, m) => {
    var f = cs(p, e), g = ds(p, e.orientation), w = us(p), h = _(_(_({}, o), {}, { textAnchor: g, verticalAnchor: w, stroke: "none", fill: n }, c), {}, { index: m, payload: p, x: f.x2, y: f.y2 });
    return l.createElement(z, U({ className: K("recharts-polar-angle-axis-tick", mt(t)), key: "tick-".concat(p.coordinate) }, ut(e, p, m)), a && l.createElement("line", U({ className: "recharts-polar-angle-axis-tick-line" }, d, f)), l.createElement(xs, { tick: t, tickProps: h, value: r ? r(p.value, m) : p.value }));
  });
  return l.createElement(z, { className: "recharts-polar-angle-axis-ticks" }, u);
}, fs = (e) => {
  var { angleAxisId: t } = e, a = T(fe), r = T((c) => Z(c, "angleAxis", t)), n = pt(), i = T((c) => jr(c, "angleAxis", t, n));
  if (a == null || !i || !i.length || r == null) return null;
  var o = _(_(_({}, e), {}, { scale: r }, a), {}, { radius: a.outerRadius, ticks: i });
  return l.createElement(pe, { zIndex: o.zIndex }, l.createElement(z, { className: K("recharts-polar-angle-axis", ls, o.className) }, l.createElement(ms, o), l.createElement(ps, o)));
};
function It(e) {
  var t = ne(e, $a);
  return l.createElement(os, { id: t.angleAxisId, scale: t.scale, type: t.type, dataKey: t.dataKey, unit: void 0, name: t.name, allowDuplicatedCategory: false, allowDataOverflow: false, reversed: t.reversed, includeHidden: false, allowDecimals: t.allowDecimals, tickCount: t.tickCount, ticks: t.ticks, tick: t.tick, domain: t.domain }, l.createElement(fs, t));
}
It.displayName = "PolarAngleAxis";
function Je(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Je(Object(a), true).forEach(function(r) {
      gs(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Je(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function gs(e, t, a) {
  return (t = hs(t)) in e ? Object.defineProperty(e, t, { value: a, enumerable: true, configurable: true, writable: true }) : e[t] = a, e;
}
function hs(e) {
  var t = vs(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vs(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rt = (e, t) => Z(e, "radiusAxis", t), bs = N([Rt], (e) => {
  if (e != null) return { scale: e };
}), ys = N([it, Rt], (e, t) => {
  if (!(e == null || t == null)) return xe(xe({}, e), {}, { scale: t });
}), js = (e, t, a, r) => Y(e, "radiusAxis", t, r), Ct = (e, t, a) => Oe(e, a), Tt = (e, t, a) => Z(e, "angleAxis", a), ks = N([Ct, Tt], (e, t) => {
  if (!(e == null || t == null)) return xe(xe({}, e), {}, { scale: t });
}), ws = (e, t, a, r) => Y(e, "angleAxis", a, r), Ps = N([Ct, Tt, fe], (e, t, a) => {
  if (!(a == null || t == null)) return { scale: t, type: e.type, dataKey: e.dataKey, cx: a.cx, cy: a.cy };
}), Ns = (e, t, a, r, n) => n, Ss = N([q, ys, js, ks, ws], (e, t, a, r, n) => Ma(e, "radiusAxis") ? Te(t, a, false) : Te(r, n, false)), Os = N([bt, Ns], (e, t) => {
  if (e != null) {
    var a = e.find((r) => r.type === "radar" && t === r.id);
    return a == null ? void 0 : a.dataKey;
  }
}), As = N([bs, Ps, st, Os, Ss], (e, t, a, r, n) => {
  var { chartData: i, dataStartIndex: o, dataEndIndex: c } = a;
  if (!(e == null || t == null || i == null || n == null || r == null)) {
    var d = i.slice(o, c + 1);
    return Ms({ radiusAxis: e, angleAxis: t, displayedData: d, dataKey: r, bandSize: n });
  }
}), Es = ["id"];
function se() {
  return se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, se.apply(null, arguments);
}
function Ue(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ue(Object(a), true).forEach(function(r) {
      Ds(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ue(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function Ds(e, t, a) {
  return (t = Is(t)) in e ? Object.defineProperty(e, t, { value: a, enumerable: true, configurable: true, writable: true }) : e[t] = a, e;
}
function Is(e) {
  var t = Rs(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Rs(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cs(e, t) {
  if (e == null) return {};
  var a, r, n = Ts(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function Ts(e, t) {
  if (e == null) return {};
  var a = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    a[r] = e[r];
  }
  return a;
}
function Ie(e, t) {
  return e && e !== "none" ? e : t;
}
var Ls = (e) => {
  var { dataKey: t, name: a, stroke: r, fill: n, legendType: i, hide: o } = e;
  return [{ inactive: o, dataKey: t, type: i, color: Ie(r, n), value: ft(a, t), payload: e }];
}, $s = l.memo((e) => {
  var { dataKey: t, stroke: a, strokeWidth: r, fill: n, name: i, hide: o, tooltipType: c, id: d } = e, u = { dataDefinedOnItem: void 0, positions: void 0, settings: { stroke: a, strokeWidth: r, fill: n, nameKey: void 0, dataKey: t, name: ft(i, t), hide: o, type: c, color: Ie(a, n), unit: "", graphicalItemId: d } };
  return l.createElement(Ka, { tooltipEntrySettings: u });
});
function _s(e) {
  var { points: t, props: a } = e, { dot: r, dataKey: n } = a, { id: i } = a, o = Cs(a, Es), c = L(o);
  return l.createElement(qa, { points: t, dot: r, className: "recharts-radar-dots", dotClassName: "recharts-radar-dot", dataKey: n, baseProps: c });
}
function Ms(e) {
  var { radiusAxis: t, angleAxis: a, displayedData: r, dataKey: n, bandSize: i } = e, { cx: o, cy: c } = a, d = false, u = [], p = a.type !== "number" ? i ?? 0 : 0;
  r.forEach((f, g) => {
    var w = de(f, a.dataKey, g), h = de(f, n), j = a.scale(w) + p, O = Array.isArray(h) ? Wa(h) : h, P = Le(O) ? 0 : t.scale(O);
    Array.isArray(h) && h.length >= 2 && (d = true), u.push(I(I({}, $(o, c, P, j)), {}, { name: w, value: h, cx: o, cy: c, radius: P, angle: j, payload: f }));
  });
  var m = [];
  return d && u.forEach((f) => {
    if (Array.isArray(f.value)) {
      var g = f.value[0], w = Le(g) ? 0 : t.scale(g);
      m.push(I(I({}, f), {}, { radius: w }, $(o, c, w, f.angle)));
    } else m.push(f);
  }), { points: u, isRange: d, baseLinePoints: m };
}
function Bs(e) {
  var { showLabels: t, points: a, children: r } = e, n = a.map((i) => {
    var o, c = { x: i.x, y: i.y, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return I(I({}, c), {}, { value: (o = i.value) !== null && o !== void 0 ? o : "", payload: i.payload, parentViewBox: void 0, viewBox: c, fill: void 0 });
  });
  return l.createElement(Ha, { value: t ? n : void 0 }, r);
}
function Fs(e) {
  var { points: t, baseLinePoints: a, props: r } = e;
  if (t == null) return null;
  var { shape: n, isRange: i, connectNulls: o } = r, c = (p) => {
    var { onMouseEnter: m } = r;
    m && m(r, p);
  }, d = (p) => {
    var { onMouseLeave: m } = r;
    m && m(r, p);
  }, u;
  return l.isValidElement(n) ? u = l.cloneElement(n, I(I({}, r), {}, { points: t })) : typeof n == "function" ? u = n(I(I({}, r), {}, { points: t })) : u = l.createElement(vt, se({}, ee(r), { onMouseEnter: c, onMouseLeave: d, points: t, baseLinePoints: i ? a : void 0, connectNulls: o })), l.createElement(z, { className: "recharts-radar-polygon" }, u, l.createElement(_s, { props: r, points: t }));
}
var He = (e, t, a) => (r, n) => {
  var i = e && e[Math.floor(n * t)];
  return i ? I(I({}, r), {}, { x: le(i.x, r.x, a), y: le(i.y, r.y, a) }) : I(I({}, r), {}, { x: le(r.cx, r.x, a), y: le(r.cy, r.y, a) });
};
function zs(e) {
  var { props: t, previousPointsRef: a, previousBaseLinePointsRef: r } = e, { points: n, baseLinePoints: i, isAnimationActive: o, animationBegin: c, animationDuration: d, animationEasing: u, onAnimationEnd: p, onAnimationStart: m } = t, f = a.current, g = r.current, w = f ? f.length / n.length : 1, h = g ? g.length / i.length : 1, j = Va(t, "recharts-radar-"), [O, P] = l.useState(false), b = !O, k = l.useCallback(() => {
    typeof p == "function" && p(), P(false);
  }, [p]), y = l.useCallback(() => {
    typeof m == "function" && m(), P(true);
  }, [m]);
  return l.createElement(Bs, { showLabels: b, points: n }, l.createElement(Ja, { animationId: j, begin: c, duration: d, isActive: o, easing: u, key: "radar-".concat(j), onAnimationEnd: k, onAnimationStart: y }, (x) => {
    var S = x === 1 ? n : n.map(He(f, w, x)), E = x === 1 ? i : i == null ? void 0 : i.map(He(g, h, x));
    return x > 0 && (a.current = S, r.current = E), l.createElement(Fs, { points: S, baseLinePoints: E, props: t });
  }), l.createElement(Ua, { label: t.label }), t.children);
}
function Ks(e) {
  var t = l.useRef(void 0), a = l.useRef(void 0);
  return l.createElement(zs, { props: e, previousPointsRef: t, previousBaseLinePointsRef: a });
}
var Gs = { activeDot: true, angleAxisId: 0, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", dot: false, hide: false, isAnimationActive: "auto", label: false, legendType: "rect", radiusAxisId: 0, zIndex: lt.area };
function Ws(e) {
  var { hide: t, className: a, points: r } = e;
  if (t) return null;
  var n = K("recharts-radar", a);
  return l.createElement(pe, { zIndex: e.zIndex }, l.createElement(z, { className: n }, l.createElement(Ks, e)), l.createElement(Ga, { points: r, mainColor: Ie(e.stroke, e.fill), itemDataKey: e.dataKey, activeDot: e.activeDot }));
}
function Vs(e) {
  var t = pt(), a = T((r) => As(r, e.radiusAxisId, e.angleAxisId, t, e.id));
  return (a == null ? void 0 : a.points) == null ? null : l.createElement(Ws, se({}, e, { points: a == null ? void 0 : a.points, baseLinePoints: a == null ? void 0 : a.baseLinePoints, isRange: a == null ? void 0 : a.isRange }));
}
function Lt(e) {
  var t = ne(e, Gs);
  return l.createElement(Ba, { id: t.id, type: "radar" }, (a) => l.createElement(l.Fragment, null, l.createElement(Fa, { type: "radar", id: a, data: void 0, dataKey: t.dataKey, hide: t.hide, angleAxisId: t.angleAxisId, radiusAxisId: t.radiusAxisId }), l.createElement(za, { legendPayload: Ls(t) }), l.createElement($s, { dataKey: t.dataKey, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, tooltipType: t.tooltipType, id: a }), l.createElement(Vs, se({}, t, { id: a }))));
}
Lt.displayName = "Radar";
function Js(e) {
  var t = Ae();
  return l.useEffect(() => {
    t(Za(e));
  }, [t, e]), null;
}
var Us = ["layout"];
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var r in a) ({}).hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, ye.apply(null, arguments);
}
function Hs(e, t) {
  if (e == null) return {};
  var a, r, n = qs(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) a = i[r], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function qs(e, t) {
  if (e == null) return {};
  var a = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    a[r] = e[r];
  }
  return a;
}
var Zs = { top: 5, right: 5, bottom: 5, left: 5 }, $t = { accessibilityLayer: true, stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: Zs, reverseStackOrder: false, syncMethod: "index", layout: "radial", responsive: false, cx: "50%", cy: "50%", innerRadius: 0, outerRadius: "80%" }, Ys = l.forwardRef(function(t, a) {
  var r, n = ne(t.categoricalChartProps, $t), { layout: i } = n, o = Hs(n, Us), { chartName: c, defaultTooltipEventType: d, validateTooltipEventTypes: u, tooltipPayloadSearcher: p } = t, m = { chartName: c, defaultTooltipEventType: d, validateTooltipEventTypes: u, tooltipPayloadSearcher: p, eventEmitter: void 0 };
  return l.createElement(Ya, { preloadedState: { options: m }, reduxStoreName: (r = n.id) !== null && r !== void 0 ? r : c }, l.createElement(Xa, { chartData: n.data }), l.createElement(Qa, { layout: i, margin: n.margin }), l.createElement(er, { baseValue: void 0, accessibilityLayer: n.accessibilityLayer, barCategoryGap: n.barCategoryGap, maxBarSize: n.maxBarSize, stackOffset: n.stackOffset, barGap: n.barGap, barSize: n.barSize, syncId: n.syncId, syncMethod: n.syncMethod, className: n.className, reverseStackOrder: n.reverseStackOrder }), l.createElement(Js, { cx: n.cx, cy: n.cy, startAngle: n.startAngle, endAngle: n.endAngle, innerRadius: n.innerRadius, outerRadius: n.outerRadius }), l.createElement(tr, ye({}, o, { ref: a })));
});
function qe(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), a.push.apply(a, r);
  }
  return a;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qe(Object(a), true).forEach(function(r) {
      Xs(e, r, a[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : qe(Object(a)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r));
    });
  }
  return e;
}
function Xs(e, t, a) {
  return (t = Qs(t)) in e ? Object.defineProperty(e, t, { value: a, enumerable: true, configurable: true, writable: true }) : e[t] = a, e;
}
function Qs(e) {
  var t = en(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function en(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var r = a.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tn = ["axis"], an = Ze(Ze({}, $t), {}, { layout: "centric", startAngle: 90, endAngle: -270 }), rn = l.forwardRef((e, t) => {
  var a = ne(e, an);
  return l.createElement(Ys, { chartName: "RadarChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: tn, tooltipPayloadSearcher: ar, categoricalChartProps: a, ref: t });
});
function sn({ data: e, height: t = 320, className: a = "" }) {
  const r = l.useMemo(() => {
    if (!e || e.length === 0) return [];
    const u = Math.max(...e.map((g) => g.fullMark)), p = e.map((g) => Ce(g.score, g.fullMark, u)), m = Math.max(...p, u), f = Math.max(u, m);
    return e.map((g) => ({ subject: g.subject, score: Ce(g.score, g.fullMark, u), fullMark: f, originalScore: g.score, originalFullMark: g.fullMark }));
  }, [e]), n = typeof window < "u" && document.documentElement.classList.contains("dark"), i = n ? "#334155" : "#e2e8f0", o = n ? "#94a3b8" : "#64748b", c = n ? "#1e293b" : "#fff", d = n ? "#334155" : "#e2e8f0";
  return s.jsx("div", { className: a, style: { height: t }, children: s.jsx(gt, { width: "100%", height: "100%", children: s.jsxs(rn, { data: r, children: [s.jsx(Pt, { stroke: i }), s.jsx(It, { dataKey: "subject", tick: { fill: o, fontSize: 12, fontWeight: 500 } }), s.jsx(Dt, { angle: 90, domain: [0, r.length > 0 ? r[0].fullMark : 40], tick: { fill: o, fontSize: 10 }, tickFormatter: (u) => u.toString() }), s.jsx(Lt, { name: "\u5F97\u5206", dataKey: "score", stroke: "#6366f1", fill: "#6366f1", fillOpacity: 0.6, strokeWidth: 2 }), s.jsx(ht, { contentStyle: { backgroundColor: c, border: `1px solid ${d}`, borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }, formatter: (u, p, m) => {
    var _a2, _b;
    const f = ((_a2 = m == null ? void 0 : m.payload) == null ? void 0 : _a2.originalScore) ?? 0, g = ((_b = m == null ? void 0 : m.payload) == null ? void 0 : _b.originalFullMark) ?? 40, w = g > 0 ? Math.round(f / g * 100) : 0;
    return [`${f}/${g} (${w}%)`, "\u5F97\u5206"];
  } })] }) }) });
}
function Q({ label: e, score: t, maxScore: a, color: r = "bg-primary-500", delay: n = 0, className: i = "" }) {
  const o = sa(t, a);
  return s.jsxs("div", { className: `bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 ${i}`, children: [s.jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400 mb-1", children: e }), s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("div", { className: "flex-1 h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden", children: s.jsx(A.div, { className: `h-full ${r} rounded-full`, initial: { width: 0 }, animate: { width: `${o}%` }, transition: { duration: 0.8, delay: n } }) }), s.jsxs("span", { className: "text-sm font-semibold text-slate-700 dark:text-slate-300 w-8 text-right", children: [t, "/", a] })] })] });
}
function nn({ analysis: e, analyzeStatus: t, analyzeError: a, onExport: r, exporting: n, onReanalyze: i, reanalyzing: o }) {
  var _a2, _b;
  const c = l.useMemo(() => {
    if (!e) return [];
    const k = e.projectScore || 0, y = e.skillMatchScore || 0, x = e.contentScore || 0, S = e.structureScore || 0;
    return [{ subject: "\u8868\u8FBE\u4E13\u4E1A\u6027", score: e.expressionScore || 0, fullMark: 10 }, { subject: "\u6280\u80FD\u5339\u914D", score: y, fullMark: 20 }, { subject: "\u5185\u5BB9\u5B8C\u6574\u6027", score: x, fullMark: 15 }, { subject: "\u7ED3\u6784\u6E05\u6670\u5EA6", score: S, fullMark: 15 }, { subject: "\u9879\u76EE\u7ECF\u9A8C", score: k, fullMark: 40 }];
  }, [e]), d = l.useMemo(() => {
    if (!(e == null ? void 0 : e.suggestions)) return { high: [], medium: [], low: [] };
    const k = e.suggestions;
    return { high: k.filter((y) => y.priority === "\u9AD8"), medium: k.filter((y) => y.priority === "\u4E2D"), low: k.filter((y) => y.priority === "\u4F4E") };
  }, [e]), u = (k) => {
    switch (k) {
      case "\u9AD8":
        return "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-400";
      case "\u4E2D":
        return "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400";
      case "\u4F4E":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400";
      default:
        return "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300";
    }
  }, p = (k) => {
    switch (k) {
      case "\u9AD8":
        return "bg-red-500 text-white";
      case "\u4E2D":
        return "bg-amber-500 text-white";
      case "\u4F4E":
        return "bg-blue-500 text-white";
      default:
        return "bg-slate-500 text-white";
    }
  }, m = (k) => ({ \u9879\u76EE: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300", \u6280\u80FD: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300", \u5185\u5BB9: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300", \u683C\u5F0F: "bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300", \u7ED3\u6784: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300", \u8868\u8FBE: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300" })[k] || "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300", f = (e == null ? void 0 : e.summary) && (e.summary.includes("I/O error") || e.summary.includes("\u5206\u6790\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF") || e.summary.includes("\u7B80\u5386\u5206\u6790\u5931\u8D25") || e.summary.includes("Remote host terminated") || e.summary.includes("handshake")), g = e && e.overallScore >= 10 && e.summary && !f;
  if (t === "PENDING" || t === "PROCESSING" || t === void 0 && !e) {
    const k = t === "PROCESSING";
    return s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [s.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center", children: k ? s.jsx(ce, { className: "w-8 h-8 text-blue-500 dark:text-blue-400 animate-spin" }) : s.jsx(je, { className: "w-8 h-8 text-yellow-500 dark:text-yellow-400" }) }), s.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: k ? "AI \u6B63\u5728\u5206\u6790\u4E2D..." : "\u7B49\u5F85\u5206\u6790" }), s.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: k ? "\u8BF7\u7A0D\u5019\uFF0CAI \u6B63\u5728\u5BF9\u60A8\u7684\u7B80\u5386\u8FDB\u884C\u6DF1\u5EA6\u5206\u6790" : "\u7B80\u5386\u5DF2\u4E0A\u4F20\u6210\u529F\uFF0C\u5373\u5C06\u5F00\u59CB AI \u5206\u6790" }), s.jsx("p", { className: "text-sm text-slate-400 dark:text-slate-500", children: "\u9875\u9762\u5C06\u81EA\u52A8\u5237\u65B0\u663E\u793A\u5206\u6790\u7ED3\u679C" })] });
  }
  if (t === "FAILED" || !g) return s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [s.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/50 rounded-full flex items-center justify-center", children: s.jsx(ke, { className: "w-8 h-8 text-red-500 dark:text-red-400" }) }), s.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u5206\u6790\u5931\u8D25" }), s.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-4", children: "AI \u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" }), (a || (e == null ? void 0 : e.summary)) && s.jsx("div", { className: "mt-4 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg text-left mb-4", children: s.jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: a || e.summary }) }), i && s.jsxs(A.button, { onClick: i, disabled: o, className: "px-6 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 flex items-center gap-2 mx-auto", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [s.jsx(Xe, { className: `w-4 h-4 ${o ? "animate-spin" : ""}` }), o ? "\u91CD\u65B0\u5206\u6790\u4E2D..." : "\u91CD\u65B0\u5206\u6790"] })] });
  const h = e.projectScore || 0, j = e.skillMatchScore || 0, O = e.contentScore || 0, P = e.structureScore || 0, b = e.expressionScore || 0;
  return s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [s.jsxs(A.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: [s.jsxs("div", { className: "flex items-center justify-between mb-6", children: [s.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400", children: [s.jsx(Qe, { className: "w-5 h-5" }), s.jsx("span", { className: "font-semibold", children: "\u6838\u5FC3\u8BC4\u4EF7" })] }), s.jsxs(A.button, { onClick: r, disabled: n, className: "px-4 py-2 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [s.jsx(we, { className: "w-4 h-4" }), n ? "\u5BFC\u51FA\u4E2D..." : "\u5BFC\u51FA\u5206\u6790\u62A5\u544A"] })] }), s.jsxs("div", { className: "bg-gradient-to-br from-emerald-50 dark:from-emerald-900/30 to-green-50 dark:to-slate-800 rounded-xl p-6", children: [s.jsx("p", { className: "text-lg text-slate-800 dark:text-white leading-relaxed mb-6", children: e.summary || "\u5019\u9009\u4EBA\u5177\u5907\u624E\u5B9E\u7684\u6280\u672F\u57FA\u7840\uFF0C\u6709\u5927\u578B\u9879\u76EE\u67B6\u6784\u7ECF\u9A8C\u3002" }), s.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-4", children: [s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-5", children: [s.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2", children: "\u603B\u5206" }), s.jsx("span", { className: "text-4xl font-bold text-slate-900 dark:text-white", children: e.overallScore || 0 }), s.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: "/ 100" })] }), s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-5", children: [s.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-2", children: "\u5206\u6790\u65F6\u95F4" }), s.jsx("span", { className: "text-sm text-slate-700 dark:text-slate-300", children: be(e.analyzedAt) })] })] }), e.strengths && e.strengths.length > 0 && s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-xl p-4", children: [s.jsx("span", { className: "text-sm font-semibold text-emerald-600 dark:text-emerald-400 block mb-3", children: "\u4F18\u52BF\u4EAE\u70B9" }), s.jsx("div", { className: "flex flex-wrap gap-2", children: e.strengths.map((k, y) => s.jsx("span", { className: "px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-lg text-sm font-medium", children: k }, y)) })] })] })] }), s.jsxs(A.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2 }, children: [s.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6", children: [s.jsx(Pe, { className: "w-5 h-5" }), s.jsx("span", { className: "font-semibold", children: "\u591A\u7EF4\u5EA6\u8BC4\u5206" })] }), s.jsx(sn, { data: c, height: 320 }), s.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [s.jsx(Q, { label: "\u9879\u76EE\u7ECF\u9A8C", score: h, maxScore: 40, color: "bg-purple-500", delay: 0.3, className: "col-span-2" }), s.jsx(Q, { label: "\u6280\u80FD\u5339\u914D", score: j, maxScore: 20, color: "bg-blue-500", delay: 0.4 }), s.jsx(Q, { label: "\u5185\u5BB9\u5B8C\u6574\u6027", score: O, maxScore: 15, color: "bg-emerald-500", delay: 0.5 }), s.jsx(Q, { label: "\u7ED3\u6784\u6E05\u6670\u5EA6", score: P, maxScore: 15, color: "bg-cyan-500", delay: 0.6 }), s.jsx(Q, { label: "\u8868\u8FBE\u4E13\u4E1A\u6027", score: b, maxScore: 10, color: "bg-orange-500", delay: 0.7 })] })] })] }), s.jsxs(A.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.3 }, children: [s.jsxs("div", { className: "flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-6", children: [s.jsx(Gt, { className: "w-5 h-5" }), s.jsx("span", { className: "font-semibold", children: "\u6539\u8FDB\u5EFA\u8BAE" }), s.jsxs("span", { className: "text-sm text-slate-400 dark:text-slate-500", children: ["(", ((_a2 = e.suggestions) == null ? void 0 : _a2.length) || 0, " \u6761)"] })] }), s.jsxs("div", { className: "space-y-6", children: [d.high.length > 0 && s.jsx(ve, { priority: "\u9AD8", suggestions: d.high, getPriorityColor: u, getPriorityBadgeColor: p, getCategoryColor: m, delay: 0.4 }), d.medium.length > 0 && s.jsx(ve, { priority: "\u4E2D", suggestions: d.medium, getPriorityColor: u, getPriorityBadgeColor: p, getCategoryColor: m, delay: 0.5 }), d.low.length > 0 && s.jsx(ve, { priority: "\u4F4E", suggestions: d.low, getPriorityColor: u, getPriorityBadgeColor: p, getCategoryColor: m, delay: 0.6 }), ((_b = e.suggestions) == null ? void 0 : _b.length) === 0 && s.jsx("div", { className: "text-center py-8 text-slate-500 dark:text-slate-400", children: "\u6682\u65E0\u6539\u8FDB\u5EFA\u8BAE" })] })] })] });
}
function ve({ priority: e, suggestions: t, getPriorityColor: a, getPriorityBadgeColor: r, getCategoryColor: n, delay: i }) {
  const o = { \u9AD8: { bg: "bg-red-100 dark:bg-red-900/50", text: "text-red-700 dark:text-red-300", border: "bg-red-100 dark:bg-red-900/50" }, \u4E2D: { bg: "bg-amber-100 dark:bg-amber-900/50", text: "text-amber-700 dark:text-amber-300", border: "bg-amber-100 dark:bg-amber-900/50" }, \u4F4E: { bg: "bg-blue-100 dark:bg-blue-900/50", text: "text-blue-700 dark:text-blue-300", border: "bg-blue-100 dark:bg-blue-900/50" } }, c = o[e] || o.\u4E2D;
  return s.jsxs("div", { children: [s.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [s.jsxs("span", { className: `px-3 py-1 ${c.bg} ${c.text} rounded-full text-sm font-semibold`, children: [e, "\u4F18\u5148\u7EA7 (", t.length, ")"] }), s.jsx("div", { className: `flex-1 h-px ${c.border}` })] }), s.jsx("div", { className: "space-y-3", children: t.map((d, u) => s.jsxs(A.div, { className: `p-4 rounded-xl border-2 ${a(e)}`, initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: i + u * 0.1 }, children: [s.jsxs("div", { className: "flex items-start gap-3 mb-2", children: [s.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-semibold ${r(e)}`, children: e }), s.jsx("span", { className: `px-2 py-0.5 rounded text-xs font-medium ${n(d.category || "\u5176\u4ED6")}`, children: d.category || "\u5176\u4ED6" })] }), s.jsxs("div", { className: "mb-2", children: [s.jsx("p", { className: "font-semibold text-slate-900 dark:text-white mb-1", children: d.issue || "\u95EE\u9898\u63CF\u8FF0" }), s.jsx("p", { className: "text-sm leading-relaxed text-slate-700 dark:text-slate-300", children: d.recommendation || d })] })] }, `${e}-${u}`)) })] });
}
function ln({ interviews: e, onStartInterview: t, onViewInterview: a, onExportInterview: r, onDeleteInterview: n, exporting: i, loadingInterview: o }) {
  const { showToast: c } = Ne(), [d, u] = l.useState(null), [p, m] = l.useState(null), f = (h, j) => {
    j.stopPropagation(), m({ sessionId: h });
  }, g = async () => {
    if (!p) return;
    const { sessionId: h } = p;
    u(h);
    try {
      await F.deleteInterview(h), n(h), m(null);
    } catch (j) {
      c(j instanceof Error ? j.message : "\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5", "error");
    } finally {
      u(null);
    }
  }, w = l.useMemo(() => e.filter((h) => h.overallScore !== null).map((h) => ({ name: me(h.createdAt), score: h.overallScore || 0, index: e.length - e.indexOf(h) })).reverse(), [e]);
  return e.length === 0 ? s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-12 text-center", children: [s.jsx("div", { className: "w-16 h-16 mx-auto mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center", children: s.jsx(et, { className: "w-8 h-8 text-slate-400" }) }), s.jsx("h3", { className: "text-xl font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }), s.jsx("p", { className: "text-slate-500 dark:text-slate-400 mb-6", children: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5\uFF0C\u83B7\u53D6\u4E13\u4E1A\u8BC4\u4F30" }), s.jsx(A.button, { onClick: t, className: "px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5" })] }) : s.jsxs("div", { className: "space-y-6", children: [w.length > 0 && s.jsxs(A.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [s.jsxs("div", { className: "flex items-center justify-between mb-6", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(Qe, { className: "w-5 h-5 text-primary-500" }), s.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u9762\u8BD5\u8868\u73B0\u8D8B\u52BF" })] }), s.jsxs("span", { className: "text-sm text-slate-500 dark:text-slate-400", children: ["\u5171 ", w.length, " \u573A\u7EC3\u4E60"] })] }), s.jsx("div", { className: "h-48", children: s.jsx(gt, { width: "100%", height: "100%", children: s.jsxs(rr, { data: w, margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [s.jsx(sr, { strokeDasharray: "3 3", stroke: "#e2e8f0", className: "dark:stroke-slate-700" }), s.jsx(nr, { dataKey: "name", axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), s.jsx(ir, { domain: [0, 100], axisLine: false, tickLine: false, tick: { fill: "#94a3b8", fontSize: 12 } }), s.jsx(ht, { contentStyle: { backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }, formatter: (h) => [`${h} \u5206`, "\u5F97\u5206"] }), s.jsx(lr, { type: "monotone", dataKey: "score", stroke: "#6366f1", strokeWidth: 3, dot: { fill: "#6366f1", strokeWidth: 2, r: 5 }, activeDot: { r: 8, fill: "#6366f1" } })] }) }) })] }), s.jsxs(A.div, { className: "bg-white dark:bg-slate-800 rounded-2xl p-6", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.1 }, children: [s.jsx("div", { className: "flex items-center justify-between mb-6", children: s.jsx("span", { className: "font-semibold text-slate-800 dark:text-white", children: "\u5386\u53F2\u9762\u8BD5\u573A\u6B21" }) }), s.jsx("div", { className: "space-y-4", children: e.map((h, j) => s.jsx(on, { interview: h, index: j, total: e.length, exporting: i === h.sessionId, deleting: d === h.sessionId, onView: () => a(h.sessionId), onExport: () => r(h.sessionId), onDelete: (O) => f(h.sessionId, O) }, h.id)) }), s.jsx(or, { open: p !== null, title: "\u5220\u9664\u9762\u8BD5\u8BB0\u5F55", message: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u9762\u8BD5\u8BB0\u5F55\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002", confirmText: "\u786E\u5B9A\u5220\u9664", cancelText: "\u53D6\u6D88", confirmVariant: "danger", loading: d !== null, onConfirm: g, onCancel: () => m(null) }), o && s.jsx("div", { className: "fixed inset-0 bg-black/20 dark:bg-black/50 flex items-center justify-center z-50", children: s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-6 flex items-center gap-4", children: [s.jsx(A.div, { className: "w-8 h-8 border-3 border-slate-200 dark:border-slate-600 border-t-primary-500 rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }), s.jsx("span", { className: "text-slate-600 dark:text-slate-300", children: "\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5..." })] }) })] })] });
}
function on({ interview: e, index: t, total: a, exporting: r, deleting: n, onView: i, onExport: o, onDelete: c }) {
  return s.jsxs(A.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: t * 0.1 }, onClick: i, className: "flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 cursor-pointer transition-colors group", children: [s.jsx("div", { className: `w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg ${e.overallScore !== null ? na(e.overallScore, [85, 70]) : "bg-slate-100 dark:bg-slate-600 text-slate-400"}`, children: e.overallScore ?? "-" }), s.jsxs("div", { className: "flex-1 min-w-0", children: [s.jsxs("p", { className: "font-medium text-slate-800 dark:text-white truncate", children: ["\u6A21\u62DF\u9762\u8BD5 #", a - t] }), s.jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400", children: [s.jsxs("span", { className: "flex items-center gap-1", children: [s.jsx(Wt, { className: "w-4 h-4" }), me(e.createdAt)] }), s.jsxs("span", { className: "flex items-center gap-1", children: [s.jsx(tt, { className: "w-4 h-4" }), e.totalQuestions, " \u9898"] })] })] }), s.jsxs("div", { className: "flex items-center gap-2 opacity-0 group-hover:opacity-100", children: [s.jsx(A.button, { onClick: (d) => {
    d.stopPropagation(), o();
  }, disabled: r, className: "px-3 py-2 text-slate-400 hover:text-primary-500 hover:bg-white dark:hover:bg-slate-600 rounded-lg transition-all", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: s.jsx(we, { className: "w-5 h-5" }) }), s.jsx("button", { onClick: c, disabled: n, className: "p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed", title: "\u5220\u9664\u9762\u8BD5\u8BB0\u5F55", children: n ? s.jsx(A.div, { className: "w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }) : s.jsx(Vt, { className: "w-5 h-5" }) })] }), s.jsx(Jt, { className: "w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0" })] });
}
const oe = 50, Ye = { \u9AD8: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300", \u4E2D: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", \u4F4E: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300" };
function cn(e) {
  if (!e) return null;
  const t = Ye[e] || Ye.\u4F4E;
  return s.jsx("span", { className: `px-2 py-0.5 rounded text-[10px] font-medium flex-shrink-0 ${t}`, children: e });
}
function dn(e) {
  return e.analysisStatus === "PENDING" || e.analysisStatus === "PROCESSING" ? s.jsxs("span", { className: "flex items-center gap-1 text-xs text-blue-500", children: [s.jsx(Xe, { className: "w-3 h-3 animate-spin" }), " \u5206\u6790\u4E2D"] }) : e.analysisStatus === "FAILED" ? s.jsxs("span", { className: "flex items-center gap-1 text-xs text-red-500", children: [s.jsx(ke, { className: "w-3 h-3" }), " \u5206\u6790\u5931\u8D25"] }) : e.matchScore !== null && e.matchScore !== void 0 ? s.jsxs("span", { className: "text-xs text-slate-600 dark:text-slate-300", children: ["\u5339\u914D\u5EA6 ", s.jsx("span", { className: `font-bold ${rt(e.matchScore)}`, children: e.matchScore })] }) : null;
}
function un({ resumeId: e }) {
  const { showToast: t } = Ne(), a = ta(), [r, n] = l.useState(""), [i, o] = l.useState(""), [c, d] = l.useState([]), [u, p] = l.useState(null), [m, f] = l.useState(true), [g, w] = l.useState(false), [h, j] = l.useState(false), O = l.useCallback(async (x = false) => {
    x || f(true);
    try {
      const S = await $e.listJdAnalyses(e);
      d(S);
    } catch (S) {
      console.error("\u52A0\u8F7D JD \u5339\u914D\u8BCA\u65AD\u8BB0\u5F55\u5931\u8D25", S);
    } finally {
      x || f(false);
    }
  }, [e]);
  l.useEffect(() => {
    O();
  }, [O]), l.useEffect(() => {
    if (c.length === 0) {
      p(null);
      return;
    }
    p((x) => x && c.some((S) => S.id === x) ? x : c[0].id);
  }, [c]), l.useEffect(() => {
    j(false);
  }, [u]);
  const P = c[0], b = c.find((x) => x.id === u) ?? P, k = (P == null ? void 0 : P.analysisStatus) === "PENDING" || (P == null ? void 0 : P.analysisStatus) === "PROCESSING";
  l.useEffect(() => {
    if (k) {
      const x = setInterval(() => O(true), 5e3);
      return () => clearInterval(x);
    }
  }, [k, O]);
  const y = async () => {
    if (r.trim().length < oe) {
      t(`\u8BF7\u7C98\u8D34\u81F3\u5C11 ${oe} \u5B57\u7684\u804C\u4F4D\u63CF\u8FF0`, "error");
      return;
    }
    w(true);
    try {
      await $e.startJdAnalysis(e, r.trim(), i || void 0), n(""), await O(true);
    } catch (x) {
      t(ra(x) || "\u53D1\u8D77\u8BCA\u65AD\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      w(false);
    }
  };
  return m ? s.jsx("div", { className: "flex items-center justify-center py-16", children: s.jsx(ce, { className: "w-6 h-6 text-primary-500 animate-spin" }) }) : s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6", children: [s.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.jsx(Pe, { className: "w-5 h-5 text-primary-500" }), s.jsx("h3", { className: "font-bold text-slate-800 dark:text-white", children: "JD \u5339\u914D\u8BCA\u65AD" })] }), s.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mb-4", children: "\u7C98\u8D34\u76EE\u6807\u5C97\u4F4D\u7684\u804C\u4F4D\u63CF\u8FF0\uFF08JD\uFF09\uFF0CAI \u5C06\u5BF9\u6BD4\u7B80\u5386\u7ED9\u51FA\u5339\u914D\u5EA6\u8BC4\u5206\u3001\u6280\u80FD\u7F3A\u53E3\u4E0E\u9762\u8BD5\u524D\u8865\u5F3A\u5EFA\u8BAE\uFF1B\u8BCA\u65AD\u51FA\u7684\u8584\u5F31\u70B9\u4F1A\u81EA\u52A8\u878D\u5165\u4E4B\u540E\u7684\u6A21\u62DF\u9762\u8BD5\u51FA\u9898\u3002" }), s.jsx("textarea", { value: r, onChange: (x) => n(x.target.value), placeholder: `\u7C98\u8D34\u76EE\u6807\u5C97\u4F4D\u7684\u804C\u4F4D\u63CF\u8FF0\uFF08JD\uFF09\uFF0C\u81F3\u5C11 ${oe} \u5B57...`, rows: 5, className: `w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700
            bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white
            placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2
            focus:ring-primary-500/50 focus:border-primary-400 transition-shadow` }), s.jsxs("div", { className: "mt-3 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end", children: [s.jsxs("div", { children: [s.jsxs("label", { className: "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300", children: ["\u5206\u6790\u6A21\u578B ", s.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B\uFF0C\u9ED8\u8BA4\u8DDF\u968F\u7CFB\u7EDF\u8BBE\u7F6E)" })] }), s.jsx(aa, { providers: a, value: i, onChange: o, disabled: g })] }), s.jsxs("button", { onClick: y, disabled: g || r.trim().length < oe, className: `px-5 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center justify-center gap-2
              bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25
              hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`, children: [g ? s.jsx(ce, { className: "w-4 h-4 animate-spin" }) : s.jsx(Ut, { className: "w-4 h-4" }), g ? "\u63D0\u4EA4\u4E2D..." : "\u5F00\u59CB\u8BCA\u65AD"] })] })] }), b && s.jsxs("div", { className: "space-y-4", children: [c.length > 1 && s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-4", children: [s.jsxs("p", { className: "text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2", children: ["\u8BCA\u65AD\u5386\u53F2\uFF08", c.length, " \u6761\uFF09"] }), s.jsx("div", { className: "flex flex-wrap gap-2", children: c.map((x, S) => {
    const E = x.id === u;
    return s.jsxs("button", { onClick: () => p(x.id), className: `flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border
                        ${E ? "border-primary-500 bg-primary-50/80 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"}`, children: [s.jsx("span", { className: "tabular-nums", children: x.matchScore !== null && x.matchScore !== void 0 ? `${x.matchScore}\u5206` : x.analysisStatus === "FAILED" ? "\u5931\u8D25" : x.analysisStatus === "PENDING" || x.analysisStatus === "PROCESSING" ? "\u5206\u6790\u4E2D" : "\u5F85\u51FA\u5206" }), s.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "\xB7" }), s.jsx("span", { children: be(x.createdAt) }), S === 0 && s.jsx("span", { className: "px-1.5 py-0.5 rounded text-[10px] bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400", children: "\u6700\u65B0" })] }, x.id);
  }) })] }), s.jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6", children: [s.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2 mb-4", children: [s.jsx("h3", { className: "font-bold text-slate-800 dark:text-white", children: "\u8BCA\u65AD\u7ED3\u679C" }), s.jsxs("span", { className: "flex items-center gap-3 text-xs text-slate-400", children: [dn(b), s.jsxs("span", { className: "flex items-center gap-1", children: [s.jsx(je, { className: "w-3 h-3" }), " ", be(b.createdAt)] })] })] }), b.analysisStatus === "FAILED" ? s.jsxs("div", { className: "flex items-start gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-sm text-red-600 dark:text-red-300", children: [s.jsx(ke, { className: "w-4 h-4 mt-0.5 flex-shrink-0" }), s.jsx("span", { children: b.analysisError || "\u5206\u6790\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u8D77\u8BCA\u65AD" })] }) : b.analysisStatus === "PENDING" || b.analysisStatus === "PROCESSING" ? s.jsxs("div", { className: "flex items-center justify-center gap-2 py-10 text-sm text-slate-500 dark:text-slate-400", children: [s.jsx(ce, { className: "w-5 h-5 text-primary-500 animate-spin" }), "AI \u6B63\u5728\u5BF9\u6BD4\u7B80\u5386\u4E0E JD\uFF0C\u8BF7\u7A0D\u5019..."] }) : s.jsxs("div", { className: "space-y-5", children: [b.matchScore !== null && b.matchScore !== void 0 && s.jsxs("div", { className: "flex items-center gap-4 p-4 rounded-xl bg-primary-50/80 dark:bg-primary-900/20", children: [s.jsx("div", { className: `text-4xl font-bold tabular-nums ${rt(b.matchScore)}`, children: b.matchScore }), s.jsxs("div", { className: "text-sm text-slate-600 dark:text-slate-300 flex-1 min-w-0", children: [s.jsx("p", { className: "font-semibold text-slate-800 dark:text-white mb-0.5", children: "JD \u5339\u914D\u5EA6\uFF08\u6EE1\u5206 100\uFF09" }), b.summary && s.jsx("p", { className: "text-xs leading-relaxed", children: b.summary })] })] }), b.jdText && s.jsxs("div", { className: "rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 overflow-hidden", children: [s.jsxs("button", { onClick: () => j(!h), className: "w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors", children: [s.jsx(Ht, { className: "w-4 h-4 text-slate-400" }), s.jsx("span", { children: "\u8BCA\u65AD\u4F7F\u7528\u7684 JD \u539F\u6587" }), h ? s.jsx(qt, { className: "w-4 h-4 ml-auto text-slate-400" }) : s.jsx(Zt, { className: "w-4 h-4 ml-auto text-slate-400" })] }), h && s.jsx("pre", { className: "px-4 pb-3 text-xs text-slate-500 dark:text-slate-400 whitespace-pre-wrap break-words leading-relaxed", children: b.jdText })] }), b.skillGaps.length > 0 && s.jsxs("div", { children: [s.jsxs("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2", children: ["\u6280\u80FD\u7F3A\u53E3\uFF08", b.skillGaps.length, "\uFF09"] }), s.jsx("div", { className: "space-y-2", children: b.skillGaps.map((x, S) => s.jsxs("div", { className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("span", { className: "text-sm font-medium text-slate-800 dark:text-white", children: x.gapSkill }), cn(x.severity)] }), x.jdRequirement && s.jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: ["\u5C97\u4F4D\u8981\u6C42\uFF1A", x.jdRequirement] }), x.resumeEvidence && s.jsxs("p", { className: "text-xs text-slate-500 dark:text-slate-400", children: ["\u7B80\u5386\u73B0\u72B6\uFF1A", x.resumeEvidence] })] }, S)) })] }), b.weaknesses.length > 0 && s.jsxs("div", { children: [s.jsxs("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2", children: ["\u8584\u5F31\u70B9\uFF08", b.weaknesses.length, "\uFF09"] }), s.jsx("div", { className: "space-y-2", children: b.weaknesses.map((x, S) => s.jsxs("div", { className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700", children: [s.jsx("p", { className: "text-sm font-medium text-slate-800 dark:text-white", children: x.area }), x.description && s.jsx("p", { className: "text-xs text-slate-500 dark:text-slate-400 mt-1", children: x.description }), x.advice && s.jsxs("p", { className: "text-xs text-primary-600 dark:text-primary-400 mt-1", children: ["\u5EFA\u8BAE\uFF1A", x.advice] })] }, S)) })] }), b.recommendations.length > 0 && s.jsxs("div", { children: [s.jsx("p", { className: "text-sm font-semibold text-slate-700 dark:text-slate-200 mb-2", children: "\u9762\u8BD5\u524D\u5EFA\u8BAE\u8865\u5F3A" }), s.jsx("div", { className: "flex flex-wrap gap-2", children: b.recommendations.map((x, S) => s.jsx("span", { className: "px-3 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300", children: x }, S)) })] })] })] })] })] });
}
function kn({ resumeId: e, onBack: t, onStartInterview: a }) {
  var _a2, _b, _c;
  const r = ea(), { showToast: n } = Ne(), [i, o] = l.useState(null), [c, d] = l.useState(true), [u, p] = l.useState("analysis"), [m, f] = l.useState(null), [[g, w], h] = l.useState([0, 0]), [j, O] = l.useState("list"), [P, b] = l.useState(null), [k, y] = l.useState(false), [x, S] = l.useState(false), E = l.useCallback(async () => {
    try {
      const v = await F.getResumeDetail(e);
      o(v);
    } catch (v) {
      console.error("\u52A0\u8F7D\u7B80\u5386\u8BE6\u60C5\u5931\u8D25", v);
    }
  }, [e]), M = l.useCallback(async () => {
    d(true);
    try {
      const v = await F.getResumeDetail(e);
      o(v);
    } catch (v) {
      console.error("\u52A0\u8F7D\u7B80\u5386\u8BE6\u60C5\u5931\u8D25", v);
    } finally {
      d(false);
    }
  }, [e]);
  l.useEffect(() => {
    M();
  }, [M]), l.useEffect(() => {
    if (i && (i.analyzeStatus === "PENDING" || i.analyzeStatus === "PROCESSING" || i.analyzeStatus === void 0 && (!i.analyses || i.analyses.length === 0)) && !c) {
      const D = setInterval(() => {
        E();
      }, 5e3);
      return () => clearInterval(D);
    }
  }, [i, c, E]);
  const V = async () => {
    try {
      S(true), await F.reanalyze(e), await E();
    } catch (v) {
      console.error("\u91CD\u65B0\u5206\u6790\u5931\u8D25", v);
    } finally {
      S(false);
    }
  };
  l.useEffect(() => {
    var _a3;
    const v = (_a3 = r.state) == null ? void 0 : _a3.viewInterview;
    v && i && (p("interview"), (async () => {
      y(true);
      try {
        const R = await F.getInterviewDetail(v);
        b(R), O("interviewDetail");
      } catch (R) {
        console.error("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25", R);
      } finally {
        y(false);
      }
    })());
  }, [r.state, i]);
  const ie = async () => {
    f("analysis");
    try {
      const v = await F.exportAnalysisPdf(e), D = window.URL.createObjectURL(v), R = document.createElement("a");
      R.href = D, R.download = `\u7B80\u5386\u5206\u6790\u62A5\u544A_${(i == null ? void 0 : i.filename) || e}.pdf`, document.body.appendChild(R), R.click(), document.body.removeChild(R), window.URL.revokeObjectURL(D);
    } catch {
      n("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      f(null);
    }
  }, J = async (v) => {
    f(v);
    try {
      const D = await F.exportInterviewPdf(v), R = window.URL.createObjectURL(D), X = document.createElement("a");
      X.href = R, X.download = `\u9762\u8BD5\u62A5\u544A_${v}.pdf`, document.body.appendChild(X), X.click(), document.body.removeChild(X), window.URL.revokeObjectURL(R);
    } catch {
      n("\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    } finally {
      f(null);
    }
  }, Re = async (v) => {
    y(true);
    try {
      const D = await F.getInterviewDetail(v);
      b(D), O("interviewDetail");
    } catch {
      n("\u52A0\u8F7D\u9762\u8BD5\u8BE6\u60C5\u5931\u8D25", "error");
    } finally {
      y(false);
    }
  }, _t = () => {
    O("list"), b(null);
  }, Mt = async (v) => {
    await M(), (P == null ? void 0 : P.sessionId) === v && (O("list"), b(null));
  }, Bt = (v) => {
    const D = v === "analysis" ? 0 : v === "jd" ? 1 : 2;
    h([D, D > g ? 1 : -1]), p(v), O("list"), b(null);
  }, Ft = { enter: (v) => ({ x: v > 0 ? 300 : -300, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (v) => ({ x: v < 0 ? 300 : -300, opacity: 0 }) };
  if (c) return s.jsx("div", { className: "flex items-center justify-center h-96", children: s.jsx(A.div, { className: "w-12 h-12 border-4 border-slate-200 dark:border-slate-600 border-t-primary-500 rounded-full", animate: { rotate: 360 }, transition: { duration: 1, repeat: 1 / 0, ease: "linear" } }) });
  if (!i) return s.jsxs("div", { className: "text-center py-20", children: [s.jsx("p", { className: "text-red-500 mb-4", children: "\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u8FD4\u56DE\u91CD\u8BD5" }), s.jsx("button", { onClick: t, className: "px-6 py-2 bg-primary-500 text-white rounded-lg", children: "\u8FD4\u56DE\u5217\u8868" })] });
  const zt = (_a2 = i.analyses) == null ? void 0 : _a2[0], Kt = [{ id: "analysis", label: "\u7B80\u5386\u5206\u6790", icon: Yt }, { id: "jd", label: "JD \u5339\u914D", icon: Pe }, { id: "interview", label: "\u9762\u8BD5\u8BB0\u5F55", icon: tt, count: ((_b = i.interviews) == null ? void 0 : _b.length) || 0 }];
  return s.jsxs(A.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "w-full", children: [s.jsxs("div", { className: "flex justify-between items-center mb-8 flex-wrap gap-4", children: [s.jsxs("div", { className: "flex items-center gap-4", children: [s.jsx(A.button, { onClick: j === "interviewDetail" ? _t : t, className: "w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-300 transition-all shadow-sm", whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: s.jsx(Xt, { className: "w-5 h-5" }) }), s.jsxs("div", { children: [s.jsx("h2", { className: "text-xl font-bold text-slate-900 dark:text-white", children: j === "interviewDetail" ? `\u9762\u8BD5\u8BE6\u60C5 #${((_c = P == null ? void 0 : P.sessionId) == null ? void 0 : _c.slice(-6)) || ""}` : i.filename }), s.jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5", children: [s.jsx(je, { className: "w-4 h-4" }), j === "interviewDetail" ? `\u5B8C\u6210\u4E8E ${me((P == null ? void 0 : P.completedAt) || (P == null ? void 0 : P.createdAt) || "")}` : `\u4E0A\u4F20\u4E8E ${me(i.uploadedAt)}`] })] })] }), s.jsxs("div", { className: "flex gap-3", children: [j === "interviewDetail" && P && s.jsxs(A.button, { onClick: () => J(P.sessionId), disabled: m === P.sessionId, className: "px-5 py-2.5 border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 transition-all disabled:opacity-50 flex items-center gap-2", whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [s.jsx(we, { className: "w-4 h-4" }), m === P.sessionId ? "\u5BFC\u51FA\u4E2D..." : "\u5BFC\u51FA PDF"] }), j !== "interviewDetail" && s.jsxs(A.button, { onClick: () => a(e), className: "px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl transition-all flex items-center gap-2", whileHover: { scale: 1.02, y: -1 }, whileTap: { scale: 0.98 }, children: [s.jsx(et, { className: "w-4 h-4" }), "\u5F00\u59CB\u6A21\u62DF\u9762\u8BD5"] })] })] }), j !== "interviewDetail" && s.jsx("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-2 mb-6 inline-flex gap-1", children: Kt.map((v) => s.jsxs(A.button, { onClick: () => Bt(v.id), className: `relative px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-colors
                ${u === v.id ? "text-primary-600 dark:text-primary-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, children: [u === v.id && s.jsx(A.div, { layoutId: "activeTab", className: "absolute inset-0 bg-primary-50 dark:bg-primary-900 rounded-xl", transition: { type: "spring", bounce: 0.2, duration: 0.6 } }), s.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [s.jsx(v.icon, { className: "w-5 h-5" }), v.label, v.count !== void 0 && v.count > 0 && s.jsx("span", { className: "px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs rounded-full", children: v.count })] })] }, v.id)) }), s.jsx("div", { className: "relative overflow-hidden", children: j === "interviewDetail" && P ? s.jsx(cr, { interview: P }) : s.jsx(Qt, { initial: false, custom: w, mode: "wait", children: s.jsx(A.div, { custom: w, variants: Ft, initial: "enter", animate: "center", exit: "exit", transition: { type: "spring", stiffness: 300, damping: 30 }, children: u === "analysis" ? s.jsx(nn, { analysis: zt, analyzeStatus: i.analyzeStatus, analyzeError: i.analyzeError, onExport: ie, exporting: m === "analysis", onReanalyze: V, reanalyzing: x }) : u === "jd" ? s.jsx(un, { resumeId: e }) : s.jsx(ln, { interviews: i.interviews || [], onStartInterview: () => a(e), onViewInterview: Re, onExportInterview: J, onDeleteInterview: Mt, exporting: m, loadingInterview: k }) }, u) }) })] });
}
export {
  kn as default
};
