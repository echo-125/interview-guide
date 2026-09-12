var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as h, g as Pt, a as sv, b as Yg } from "./react-vendor-BA2qNj4G.js";
function fv(e2) {
  var t, r, n = "";
  if (typeof e2 == "string" || typeof e2 == "number") n += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var i = e2.length;
    for (t = 0; t < i; t++) e2[t] && (r = fv(e2[t])) && (n && (n += " "), n += r);
  } else for (r in e2) e2[r] && (n && (n += " "), n += r);
  return n;
}
function B() {
  for (var e2, t, r = 0, n = "", i = arguments.length; r < i; r++) (e2 = arguments[r]) && (t = fv(e2)) && (n && (n += " "), n += t);
  return n;
}
var Vg = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Iu(e2) {
  if (typeof e2 != "string") return false;
  var t = Vg;
  return t.includes(e2);
}
var Xg = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Zg = new Set(Xg);
function dv(e2) {
  return typeof e2 != "string" ? false : Zg.has(e2);
}
function vv(e2) {
  return typeof e2 == "string" && e2.startsWith("data-");
}
function le(e2) {
  if (typeof e2 != "object" || e2 === null) return {};
  var t = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && (dv(r) || vv(r)) && (t[r] = e2[r]);
  return t;
}
function zr(e2) {
  if (e2 == null) return null;
  if (h.isValidElement(e2) && typeof e2.props == "object" && e2.props !== null) {
    var t = e2.props;
    return le(t);
  }
  return typeof e2 == "object" && !Array.isArray(e2) ? le(e2) : null;
}
function se(e2) {
  var t = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && (dv(r) || vv(r) || Iu(r)) && (t[r] = e2[r]);
  return t;
}
function Qg(e2) {
  return e2 == null ? null : h.isValidElement(e2) ? se(e2.props) : typeof e2 == "object" && !Array.isArray(e2) ? se(e2) : null;
}
var Jg = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, $o.apply(null, arguments);
}
function e0(e2, t) {
  if (e2 == null) return {};
  var r, n, i = t0(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function t0(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var hv = h.forwardRef((e2, t) => {
  var { children: r, width: n, height: i, viewBox: a, className: o, style: u, title: l, desc: s } = e2, c = e0(e2, Jg), f = a || { width: n, height: i, x: 0, y: 0 }, d = B("recharts-surface", o);
  return h.createElement("svg", $o({}, se(c), { className: d, width: n, height: i, style: u, viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height), ref: t }), h.createElement("title", null, l), h.createElement("desc", null, s), r);
}), r0 = ["children", "className"];
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Lo.apply(null, arguments);
}
function n0(e2, t) {
  if (e2 == null) return {};
  var r, n, i = i0(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function i0(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var ke = h.forwardRef((e2, t) => {
  var { children: r, className: n } = e2, i = n0(e2, r0), a = B("recharts-layer", n);
  return h.createElement("g", Lo({ className: a }, se(i), { ref: t }), r);
}), a0 = h.createContext(null);
function Q(e2) {
  return function() {
    return e2;
  };
}
const pv = Math.cos, Si = Math.sin, ft = Math.sqrt, Ei = Math.PI, pa = 2 * Ei, Ro = Math.PI, zo = 2 * Ro, nr = 1e-6, o0 = zo - nr;
function mv(e2) {
  this._ += e2[0];
  for (let t = 1, r = e2.length; t < r; ++t) this._ += arguments[t] + e2[t];
}
function u0(e2) {
  let t = Math.floor(e2);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e2}`);
  if (t > 15) return mv;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class l0 {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? mv : u0(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, l = n - t, s = i - r, c = o - t, f = u - r, d = c * c + f * f;
    if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > nr) if (!(Math.abs(f * l - s * c) > nr) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - o, p = i - u, m = l * l + s * s, y = v * v + p * p, g = Math.sqrt(m), w = Math.sqrt(d), b = a * Math.tan((Ro - Math.acos((m + d - y) / (2 * g * w))) / 2), O = b / w, x = b / g;
      Math.abs(O - 1) > nr && this._append`L${t + O * c},${r + O * f}`, this._append`A${a},${a},0,0,${+(f * v > c * p)},${this._x1 = t + x * l},${this._y1 = r + x * s}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), l = n * Math.sin(i), s = t + u, c = r + l, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${c}` : (Math.abs(this._x1 - s) > nr || Math.abs(this._y1 - c) > nr) && this._append`L${s},${c}`, n && (d < 0 && (d = d % zo + zo), d > o0 ? this._append`A${n},${n},0,1,${f},${t - u},${r - l}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = c}` : d > nr && this._append`A${n},${n},0,${+(d >= Ro)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Du(e2) {
  let t = 3;
  return e2.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e2;
  }, () => new l0(t);
}
function Nu(e2) {
  return typeof e2 == "object" && "length" in e2 ? e2 : Array.from(e2);
}
function yv(e2) {
  this._context = e2;
}
yv.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e2, t) {
  switch (e2 = +e2, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e2, t);
      break;
  }
} };
function ma(e2) {
  return new yv(e2);
}
function gv(e2) {
  return e2[0];
}
function bv(e2) {
  return e2[1];
}
function wv(e2, t) {
  var r = Q(true), n = null, i = ma, a = null, o = Du(u);
  e2 = typeof e2 == "function" ? e2 : e2 === void 0 ? gv : Q(e2), t = typeof t == "function" ? t : t === void 0 ? bv : Q(t);
  function u(l) {
    var s, c = (l = Nu(l)).length, f, d = false, v;
    for (n == null && (a = i(v = o())), s = 0; s <= c; ++s) !(s < c && r(f = l[s], s, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e2(f, s, l), +t(f, s, l));
    if (v) return a = null, v + "" || null;
  }
  return u.x = function(l) {
    return arguments.length ? (e2 = typeof l == "function" ? l : Q(+l), u) : e2;
  }, u.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Q(+l), u) : t;
  }, u.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Q(!!l), u) : r;
  }, u.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), u) : i;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), u) : n;
  }, u;
}
function ii(e2, t, r) {
  var n = null, i = Q(true), a = null, o = ma, u = null, l = Du(s);
  e2 = typeof e2 == "function" ? e2 : e2 === void 0 ? gv : Q(+e2), t = typeof t == "function" ? t : Q(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? bv : Q(+r);
  function s(f) {
    var d, v, p, m = (f = Nu(f)).length, y, g = false, w, b = new Array(m), O = new Array(m);
    for (a == null && (u = o(w = l())), d = 0; d <= m; ++d) {
      if (!(d < m && i(y = f[d], d, f)) === g) if (g = !g) v = d, u.areaStart(), u.lineStart();
      else {
        for (u.lineEnd(), u.lineStart(), p = d - 1; p >= v; --p) u.point(b[p], O[p]);
        u.lineEnd(), u.areaEnd();
      }
      g && (b[d] = +e2(y, d, f), O[d] = +t(y, d, f), u.point(n ? +n(y, d, f) : b[d], r ? +r(y, d, f) : O[d]));
    }
    if (w) return u = null, w + "" || null;
  }
  function c() {
    return wv().defined(i).curve(o).context(a);
  }
  return s.x = function(f) {
    return arguments.length ? (e2 = typeof f == "function" ? f : Q(+f), n = null, s) : e2;
  }, s.x0 = function(f) {
    return arguments.length ? (e2 = typeof f == "function" ? f : Q(+f), s) : e2;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : Q(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Q(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Q(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : Q(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return c().x(e2).y(t);
  }, s.lineY1 = function() {
    return c().x(e2).y(r);
  }, s.lineX1 = function() {
    return c().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Q(!!f), s) : i;
  }, s.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), s) : o;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), s) : a;
  }, s;
}
class xv {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function c0(e2) {
  return new xv(e2, true);
}
function s0(e2) {
  return new xv(e2, false);
}
const $u = { draw(e2, t) {
  const r = ft(t / Ei);
  e2.moveTo(r, 0), e2.arc(0, 0, r, 0, pa);
} }, f0 = { draw(e2, t) {
  const r = ft(t / 5) / 2;
  e2.moveTo(-3 * r, -r), e2.lineTo(-r, -r), e2.lineTo(-r, -3 * r), e2.lineTo(r, -3 * r), e2.lineTo(r, -r), e2.lineTo(3 * r, -r), e2.lineTo(3 * r, r), e2.lineTo(r, r), e2.lineTo(r, 3 * r), e2.lineTo(-r, 3 * r), e2.lineTo(-r, r), e2.lineTo(-3 * r, r), e2.closePath();
} }, Pv = ft(1 / 3), d0 = Pv * 2, v0 = { draw(e2, t) {
  const r = ft(t / d0), n = r * Pv;
  e2.moveTo(0, -r), e2.lineTo(n, 0), e2.lineTo(0, r), e2.lineTo(-n, 0), e2.closePath();
} }, h0 = { draw(e2, t) {
  const r = ft(t), n = -r / 2;
  e2.rect(n, n, r, r);
} }, p0 = 0.8908130915292852, Ov = Si(Ei / 10) / Si(7 * Ei / 10), m0 = Si(pa / 10) * Ov, y0 = -pv(pa / 10) * Ov, g0 = { draw(e2, t) {
  const r = ft(t * p0), n = m0 * r, i = y0 * r;
  e2.moveTo(0, -r), e2.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = pa * a / 5, u = pv(o), l = Si(o);
    e2.lineTo(l * r, -u * r), e2.lineTo(u * n - l * i, l * n + u * i);
  }
  e2.closePath();
} }, vo = ft(3), b0 = { draw(e2, t) {
  const r = -ft(t / (vo * 3));
  e2.moveTo(0, r * 2), e2.lineTo(-vo * r, -r), e2.lineTo(vo * r, -r), e2.closePath();
} }, Ze = -0.5, Qe = ft(3) / 2, Bo = 1 / ft(12), w0 = (Bo / 2 + 1) * 3, x0 = { draw(e2, t) {
  const r = ft(t / w0), n = r / 2, i = r * Bo, a = n, o = r * Bo + r, u = -a, l = o;
  e2.moveTo(n, i), e2.lineTo(a, o), e2.lineTo(u, l), e2.lineTo(Ze * n - Qe * i, Qe * n + Ze * i), e2.lineTo(Ze * a - Qe * o, Qe * a + Ze * o), e2.lineTo(Ze * u - Qe * l, Qe * u + Ze * l), e2.lineTo(Ze * n + Qe * i, Ze * i - Qe * n), e2.lineTo(Ze * a + Qe * o, Ze * o - Qe * a), e2.lineTo(Ze * u + Qe * l, Ze * l - Qe * u), e2.closePath();
} };
function P0(e2, t) {
  let r = null, n = Du(i);
  e2 = typeof e2 == "function" ? e2 : Q(e2 || $u), t = typeof t == "function" ? t : Q(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e2.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e2 = typeof a == "function" ? a : Q(a), i) : e2;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : Q(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function _i() {
}
function ji(e2, t, r) {
  e2._context.bezierCurveTo((2 * e2._x0 + e2._x1) / 3, (2 * e2._y0 + e2._y1) / 3, (e2._x0 + 2 * e2._x1) / 3, (e2._y0 + 2 * e2._y1) / 3, (e2._x0 + 4 * e2._x1 + t) / 6, (e2._y0 + 4 * e2._y1 + r) / 6);
}
function Av(e2) {
  this._context = e2;
}
Av.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      ji(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e2, t) {
  switch (e2 = +e2, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      ji(this, e2, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t;
} };
function O0(e2) {
  return new Av(e2);
}
function Sv(e2) {
  this._context = e2;
}
Sv.prototype = { areaStart: _i, areaEnd: _i, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e2, t) {
  switch (e2 = +e2, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e2, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e2, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e2, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e2) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      ji(this, e2, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t;
} };
function A0(e2) {
  return new Sv(e2);
}
function Ev(e2) {
  this._context = e2;
}
Ev.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e2, t) {
  switch (e2 = +e2, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e2) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      ji(this, e2, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t;
} };
function S0(e2) {
  return new Ev(e2);
}
function _v(e2) {
  this._context = e2;
}
_v.prototype = { areaStart: _i, areaEnd: _i, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e2, t) {
  e2 = +e2, t = +t, this._point ? this._context.lineTo(e2, t) : (this._point = 1, this._context.moveTo(e2, t));
} };
function E0(e2) {
  return new _v(e2);
}
function kc(e2) {
  return e2 < 0 ? -1 : 1;
}
function Tc(e2, t, r) {
  var n = e2._x1 - e2._x0, i = t - e2._x1, a = (e2._y1 - e2._y0) / (n || i < 0 && -0), o = (r - e2._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (kc(a) + kc(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Mc(e2, t) {
  var r = e2._x1 - e2._x0;
  return r ? (3 * (e2._y1 - e2._y0) / r - t) / 2 : t;
}
function ho(e2, t, r) {
  var n = e2._x0, i = e2._y0, a = e2._x1, o = e2._y1, u = (a - n) / 3;
  e2._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Ci(e2) {
  this._context = e2;
}
Ci.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      ho(this, this._t0, Mc(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e2, t) {
  var r = NaN;
  if (e2 = +e2, t = +t, !(e2 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, ho(this, Mc(this, r = Tc(this, e2, t)), r);
        break;
      default:
        ho(this, this._t0, r = Tc(this, e2, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function jv(e2) {
  this._context = new Cv(e2);
}
(jv.prototype = Object.create(Ci.prototype)).point = function(e2, t) {
  Ci.prototype.point.call(this, t, e2);
};
function Cv(e2) {
  this._context = e2;
}
Cv.prototype = { moveTo: function(e2, t) {
  this._context.moveTo(t, e2);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e2, t) {
  this._context.lineTo(t, e2);
}, bezierCurveTo: function(e2, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e2, n, r, a, i);
} };
function _0(e2) {
  return new Ci(e2);
}
function j0(e2) {
  return new jv(e2);
}
function kv(e2) {
  this._context = e2;
}
kv.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e2 = this._x, t = this._y, r = e2.length;
  if (r) if (this._line ? this._context.lineTo(e2[0], t[0]) : this._context.moveTo(e2[0], t[0]), r === 2) this._context.lineTo(e2[1], t[1]);
  else for (var n = Ic(e2), i = Ic(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e2[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e2, t) {
  this._x.push(+e2), this._y.push(+t);
} };
function Ic(e2) {
  var t, r = e2.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e2[0] + 2 * e2[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e2[t] + 2 * e2[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e2[r - 1] + e2[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e2[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e2[t + 1] - i[t + 1];
  return [i, a];
}
function C0(e2) {
  return new kv(e2);
}
function ya(e2, t) {
  this._context = e2, this._t = t;
}
ya.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e2, t) {
  switch (e2 = +e2, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e2, t) : this._context.moveTo(e2, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e2, t);
      else {
        var r = this._x * (1 - this._t) + e2 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e2, this._y = t;
} };
function k0(e2) {
  return new ya(e2, 0.5);
}
function T0(e2) {
  return new ya(e2, 0);
}
function M0(e2) {
  return new ya(e2, 1);
}
function vr(e2, t) {
  if ((o = e2.length) > 1) for (var r = 1, n, i, a = e2[t[0]], o, u = a.length; r < o; ++r) for (i = a, a = e2[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Fo(e2) {
  for (var t = e2.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function I0(e2, t) {
  return e2[t];
}
function D0(e2) {
  const t = [];
  return t.key = e2, t;
}
function N0() {
  var e2 = Q([]), t = Fo, r = vr, n = I0;
  function i(a) {
    var o = Array.from(e2.apply(this, arguments), D0), u, l = o.length, s = -1, c;
    for (const f of a) for (u = 0, ++s; u < l; ++u) (o[u][s] = [0, +n(f, o[u].key, s, a)]).data = f;
    for (u = 0, c = Nu(t(o)); u < l; ++u) o[c[u]].index = u;
    return r(o, c), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e2 = typeof a == "function" ? a : Q(Array.from(a)), i) : e2;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : Q(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Fo : typeof a == "function" ? a : Q(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? vr, i) : r;
  }, i;
}
function $0(e2, t) {
  if ((n = e2.length) > 0) {
    for (var r, n, i = 0, a = e2[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e2[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e2[r][i][1] /= o;
    }
    vr(e2, t);
  }
}
function L0(e2, t) {
  if ((i = e2.length) > 0) {
    for (var r = 0, n = e2[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e2[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    vr(e2, t);
  }
}
function R0(e2, t) {
  if (!(!((o = e2.length) > 0) || !((a = (i = e2[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, s = 0; u < o; ++u) {
        for (var c = e2[t[u]], f = c[n][1] || 0, d = c[n - 1][1] || 0, v = (f - d) / 2, p = 0; p < u; ++p) {
          var m = e2[t[p]], y = m[n][1] || 0, g = m[n - 1][1] || 0;
          v += y - g;
        }
        l += f, s += v * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= s / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, vr(e2, t);
  }
}
var ga = {}, Tv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r === "__proto__";
  }
  e2.isUnsafeProperty = t;
})(Tv);
var Lu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    switch (typeof r) {
      case "number":
      case "symbol":
        return false;
      case "string":
        return r.includes(".") || r.includes("[") || r.includes("]");
    }
  }
  e2.isDeepKey = t;
})(Lu);
var ba = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    var _a2;
    return typeof r == "string" || typeof r == "symbol" ? r : Object.is((_a2 = r == null ? void 0 : r.valueOf) == null ? void 0 : _a2.call(r), -0) ? "-0" : String(r);
  }
  e2.toKey = t;
})(ba);
var wa = {}, Mv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    if (r == null) return "";
    if (typeof r == "string") return r;
    if (Array.isArray(r)) return r.map(t).join(",");
    const n = String(r);
    return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
  }
  e2.toString = t;
})(Mv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Mv, r = ba;
  function n(i) {
    if (Array.isArray(i)) return i.map(r.toKey);
    if (typeof i == "symbol") return [i];
    i = t.toString(i);
    const a = [], o = i.length;
    if (o === 0) return a;
    let u = 0, l = "", s = "", c = false;
    for (i.charCodeAt(0) === 46 && (a.push(""), u++); u < o; ) {
      const f = i[u];
      s ? f === "\\" && u + 1 < o ? (u++, l += i[u]) : f === s ? s = "" : l += f : c ? f === '"' || f === "'" ? s = f : f === "]" ? (c = false, a.push(l), l = "") : l += f : f === "[" ? (c = true, l && (a.push(l), l = "")) : f === "." ? l && (a.push(l), l = "") : l += f, u++;
    }
    return l && a.push(l), a;
  }
  e2.toPath = n;
})(wa);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Tv, r = Lu, n = ba, i = wa;
  function a(u, l, s) {
    if (u == null) return s;
    switch (typeof l) {
      case "string": {
        if (t.isUnsafeProperty(l)) return s;
        const c = u[l];
        return c === void 0 ? r.isDeepKey(l) ? a(u, i.toPath(l), s) : s : c;
      }
      case "number":
      case "symbol": {
        typeof l == "number" && (l = n.toKey(l));
        const c = u[l];
        return c === void 0 ? s : c;
      }
      default: {
        if (Array.isArray(l)) return o(u, l, s);
        if (Object.is(l == null ? void 0 : l.valueOf(), -0) ? l = "-0" : l = String(l), t.isUnsafeProperty(l)) return s;
        const c = u[l];
        return c === void 0 ? s : c;
      }
    }
  }
  function o(u, l, s) {
    if (l.length === 0) return s;
    let c = u;
    for (let f = 0; f < l.length; f++) {
      if (c == null || t.isUnsafeProperty(l[f])) return s;
      c = c[l[f]];
    }
    return c === void 0 ? s : c;
  }
  e2.get = a;
})(ga);
var z0 = ga.get;
const xa = Pt(z0);
var B0 = 4;
function Gt(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B0, r = 10 ** t, n = Math.round(e2 * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function ne(e2) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return e2.reduce((i, a, o) => {
    var u = r[o - 1];
    return typeof u == "string" ? i + u + a : u !== void 0 ? i + Gt(u) + a : i + a;
  }, "");
}
var et = (e2) => e2 === 0 ? 0 : e2 > 0 ? 1 : -1, gt = (e2) => typeof e2 == "number" && e2 != +e2, Tt = (e2) => typeof e2 == "string" && e2.indexOf("%") === e2.length - 1, N = (e2) => (typeof e2 == "number" || e2 instanceof Number) && !gt(e2), bt = (e2) => N(e2) || typeof e2 == "string", F0 = 0, vn = (e2) => {
  var t = ++F0;
  return "".concat(e2 || "").concat(t);
}, Vt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!N(t) && typeof t != "string") return n;
  var a;
  if (Tt(t)) {
    if (r == null) return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return gt(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Iv = (e2) => {
  if (!Array.isArray(e2)) return false;
  for (var t = e2.length, r = {}, n = 0; n < t; n++) if (!r[String(e2[n])]) r[String(e2[n])] = true;
  else return true;
  return false;
};
function Oe(e2, t, r) {
  return N(e2) && N(t) ? Gt(e2 + r * (t - e2)) : t;
}
function Dv(e2, t, r) {
  if (!(!e2 || !e2.length)) return e2.find((n) => n && (typeof t == "function" ? t(n) : xa(n, t)) === r);
}
var fe = (e2) => e2 === null || typeof e2 > "u", In = (e2) => fe(e2) ? e2 : "".concat(e2.charAt(0).toUpperCase()).concat(e2.slice(1));
function W0(e2) {
  return e2 != null;
}
function Dn() {
}
var K0 = ["type", "size", "sizeType"];
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Wo.apply(null, arguments);
}
function Dc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nc(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dc(Object(r), true).forEach(function(n) {
      U0(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Dc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function U0(e2, t, r) {
  return (t = H0(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function H0(e2) {
  var t = q0(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q0(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function G0(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Y0(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Y0(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var Nv = { symbolCircle: $u, symbolCross: f0, symbolDiamond: v0, symbolSquare: h0, symbolStar: g0, symbolTriangle: b0, symbolWye: x0 }, V0 = Math.PI / 180, X0 = (e2) => {
  var t = "symbol".concat(In(e2));
  return Nv[t] || $u;
}, Z0 = (e2, t, r) => {
  if (t === "area") return e2;
  switch (r) {
    case "cross":
      return 5 * e2 * e2 / 9;
    case "diamond":
      return 0.5 * e2 * e2 / Math.sqrt(3);
    case "square":
      return e2 * e2;
    case "star": {
      var n = 18 * V0;
      return 1.25 * e2 * e2 * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e2 * e2 / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e2 * e2 / 8;
    default:
      return Math.PI * e2 * e2 / 4;
  }
}, Q0 = (e2, t) => {
  Nv["symbol".concat(In(e2))] = t;
}, $v = (e2) => {
  var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e2, i = G0(e2, K0), a = Nc(Nc({}, i), {}, { type: t, size: r, sizeType: n }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = X0(o), v = P0().type(d).size(Z0(r, n, o)), p = v();
    if (p !== null) return p;
  }, { className: l, cx: s, cy: c } = a, f = se(a);
  return N(s) && N(c) && N(r) ? h.createElement("path", Wo({}, f, { className: B("recharts-symbols", l), transform: "translate(".concat(s, ", ").concat(c, ")"), d: u() })) : null;
};
$v.registerSymbol = Q0;
var Lv = (e2) => "radius" in e2 && "startAngle" in e2 && "endAngle" in e2, Ru = (e2, t) => {
  if (!e2 || typeof e2 == "function" || typeof e2 == "boolean") return null;
  var r = e2;
  if (h.isValidElement(e2) && (r = e2.props), typeof r != "object" && typeof r != "function") return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    Iu(i) && (n[i] = (a) => r[i](r, a));
  }), n;
}, J0 = (e2, t, r) => (n) => (e2(t, r, n), null), zu = (e2, t, r) => {
  if (e2 === null || typeof e2 != "object" && typeof e2 != "function") return null;
  var n = null;
  return Object.keys(e2).forEach((i) => {
    var a = e2[i];
    Iu(i) && typeof a == "function" && (n || (n = {}), n[i] = J0(a, t, r));
  }), n;
};
function $c(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function eb(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $c(Object(r), true).forEach(function(n) {
      tb(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : $c(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function tb(e2, t, r) {
  return (t = rb(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function rb(e2) {
  var t = nb(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nb(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function me(e2, t) {
  var r = eb({}, e2), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
var Rv = {}, zv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    const i = /* @__PURE__ */ new Map();
    for (let a = 0; a < r.length; a++) {
      const o = r[a], u = n(o);
      i.has(u) || i.set(u, o);
    }
    return Array.from(i.values());
  }
  e2.uniqBy = t;
})(zv);
var Nn = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r;
  }
  e2.identity = t;
})(Nn);
var Bv = {}, Pa = {}, Fv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Number.isSafeInteger(r) && r >= 0;
  }
  e2.isLength = t;
})(Fv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Fv;
  function r(n) {
    return n != null && typeof n != "function" && t.isLength(n.length);
  }
  e2.isArrayLike = r;
})(Pa);
var Wv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "object" && r !== null;
  }
  e2.isObjectLike = t;
})(Wv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Pa, r = Wv;
  function n(i) {
    return r.isObjectLike(i) && t.isArrayLike(i);
  }
  e2.isArrayLikeObject = n;
})(Bv);
var Oa = {}, Kv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = ga;
  function r(n) {
    return function(i) {
      return t.get(i, n);
    };
  }
  e2.property = r;
})(Kv);
var Uv = {}, Bu = {}, Hv = {}, Fu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r !== null && (typeof r == "object" || typeof r == "function");
  }
  e2.isObject = t;
})(Fu);
var Wu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null || typeof r != "object" && typeof r != "function";
  }
  e2.isPrimitive = t;
})(Wu);
var Ku = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    return r === n || Number.isNaN(r) && Number.isNaN(n);
  }
  e2.eq = t;
})(Ku);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Fu, r = Wu, n = Ku;
  function i(c, f, d) {
    return typeof d != "function" ? i(c, f, () => {
    }) : a(c, f, function v(p, m, y, g, w, b) {
      const O = d(p, m, y, g, w, b);
      return O !== void 0 ? !!O : a(p, m, v, b);
    }, /* @__PURE__ */ new Map());
  }
  function a(c, f, d, v) {
    if (f === c) return true;
    switch (typeof f) {
      case "object":
        return o(c, f, d, v);
      case "function":
        return Object.keys(f).length > 0 ? a(c, { ...f }, d, v) : n.eq(c, f);
      default:
        return t.isObject(c) ? typeof f == "string" ? f === "" : true : n.eq(c, f);
    }
  }
  function o(c, f, d, v) {
    if (f == null) return true;
    if (Array.isArray(f)) return l(c, f, d, v);
    if (f instanceof Map) return u(c, f, d, v);
    if (f instanceof Set) return s(c, f, d, v);
    const p = Object.keys(f);
    if (c == null || r.isPrimitive(c)) return p.length === 0;
    if (p.length === 0) return true;
    if (v == null ? void 0 : v.has(f)) return v.get(f) === c;
    v == null ? void 0 : v.set(f, c);
    try {
      for (let m = 0; m < p.length; m++) {
        const y = p[m];
        if (!r.isPrimitive(c) && !(y in c) || f[y] === void 0 && c[y] !== void 0 || f[y] === null && c[y] !== null || !d(c[y], f[y], y, c, f, v)) return false;
      }
      return true;
    } finally {
      v == null ? void 0 : v.delete(f);
    }
  }
  function u(c, f, d, v) {
    if (f.size === 0) return true;
    if (!(c instanceof Map)) return false;
    for (const [p, m] of f.entries()) {
      const y = c.get(p);
      if (d(y, m, p, c, f, v) === false) return false;
    }
    return true;
  }
  function l(c, f, d, v) {
    if (f.length === 0) return true;
    if (!Array.isArray(c)) return false;
    const p = /* @__PURE__ */ new Set();
    for (let m = 0; m < f.length; m++) {
      const y = f[m];
      let g = false;
      for (let w = 0; w < c.length; w++) {
        if (p.has(w)) continue;
        const b = c[w];
        let O = false;
        if (d(b, y, m, c, f, v) && (O = true), O) {
          p.add(w), g = true;
          break;
        }
      }
      if (!g) return false;
    }
    return true;
  }
  function s(c, f, d, v) {
    return f.size === 0 ? true : c instanceof Set ? l([...c], [...f], d, v) : false;
  }
  e2.isMatchWith = i, e2.isSetMatch = s;
})(Hv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Hv;
  function r(n, i) {
    return t.isMatchWith(n, i, () => {
    });
  }
  e2.isMatch = r;
})(Bu);
var qv = {}, Uu = {}, Gv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
  }
  e2.getSymbols = t;
})(Gv);
var Hu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
  }
  e2.getTag = t;
})(Hu);
var qu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", l = "[object Map]", s = "[object Set]", c = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", v = "[object Object]", p = "[object Error]", m = "[object DataView]", y = "[object Uint8Array]", g = "[object Uint8ClampedArray]", w = "[object Uint16Array]", b = "[object Uint32Array]", O = "[object BigUint64Array]", x = "[object Int8Array]", A = "[object Int16Array]", S = "[object Int32Array]", k = "[object BigInt64Array]", T = "[object Float32Array]", D = "[object Float64Array]";
  e2.argumentsTag = a, e2.arrayBufferTag = d, e2.arrayTag = c, e2.bigInt64ArrayTag = k, e2.bigUint64ArrayTag = O, e2.booleanTag = i, e2.dataViewTag = m, e2.dateTag = u, e2.errorTag = p, e2.float32ArrayTag = T, e2.float64ArrayTag = D, e2.functionTag = f, e2.int16ArrayTag = A, e2.int32ArrayTag = S, e2.int8ArrayTag = x, e2.mapTag = l, e2.numberTag = n, e2.objectTag = v, e2.regexpTag = t, e2.setTag = s, e2.stringTag = r, e2.symbolTag = o, e2.uint16ArrayTag = w, e2.uint32ArrayTag = b, e2.uint8ArrayTag = y, e2.uint8ClampedArrayTag = g;
})(qu);
var Yv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  }
  e2.isTypedArray = t;
})(Yv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Gv, r = Hu, n = qu, i = Wu, a = Yv;
  function o(c, f) {
    return u(c, void 0, c, /* @__PURE__ */ new Map(), f);
  }
  function u(c, f, d, v = /* @__PURE__ */ new Map(), p = void 0) {
    const m = p == null ? void 0 : p(c, f, d, v);
    if (m !== void 0) return m;
    if (i.isPrimitive(c)) return c;
    if (v.has(c)) return v.get(c);
    if (Array.isArray(c)) {
      const y = new Array(c.length);
      v.set(c, y);
      for (let g = 0; g < c.length; g++) y[g] = u(c[g], g, d, v, p);
      return Object.hasOwn(c, "index") && (y.index = c.index), Object.hasOwn(c, "input") && (y.input = c.input), y;
    }
    if (c instanceof Date) return new Date(c.getTime());
    if (c instanceof RegExp) {
      const y = new RegExp(c.source, c.flags);
      return y.lastIndex = c.lastIndex, y;
    }
    if (c instanceof Map) {
      const y = /* @__PURE__ */ new Map();
      v.set(c, y);
      for (const [g, w] of c) y.set(g, u(w, g, d, v, p));
      return y;
    }
    if (c instanceof Set) {
      const y = /* @__PURE__ */ new Set();
      v.set(c, y);
      for (const g of c) y.add(u(g, void 0, d, v, p));
      return y;
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(c)) return c.subarray();
    if (a.isTypedArray(c)) {
      const y = new (Object.getPrototypeOf(c)).constructor(c.length);
      v.set(c, y);
      for (let g = 0; g < c.length; g++) y[g] = u(c[g], g, d, v, p);
      return y;
    }
    if (c instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer) return c.slice(0);
    if (c instanceof DataView) {
      const y = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    if (typeof File < "u" && c instanceof File) {
      const y = new File([c], c.name, { type: c.type });
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    if (typeof Blob < "u" && c instanceof Blob) {
      const y = new Blob([c], { type: c.type });
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    if (c instanceof Error) {
      const y = new c.constructor();
      return v.set(c, y), y.message = c.message, y.name = c.name, y.stack = c.stack, y.cause = c.cause, l(y, c, d, v, p), y;
    }
    if (c instanceof Boolean) {
      const y = new Boolean(c.valueOf());
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    if (c instanceof Number) {
      const y = new Number(c.valueOf());
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    if (c instanceof String) {
      const y = new String(c.valueOf());
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    if (typeof c == "object" && s(c)) {
      const y = Object.create(Object.getPrototypeOf(c));
      return v.set(c, y), l(y, c, d, v, p), y;
    }
    return c;
  }
  function l(c, f, d = c, v, p) {
    const m = [...Object.keys(f), ...t.getSymbols(f)];
    for (let y = 0; y < m.length; y++) {
      const g = m[y], w = Object.getOwnPropertyDescriptor(c, g);
      (w == null || w.writable) && (c[g] = u(f[g], g, d, v, p));
    }
  }
  function s(c) {
    switch (r.getTag(c)) {
      case n.argumentsTag:
      case n.arrayTag:
      case n.arrayBufferTag:
      case n.dataViewTag:
      case n.booleanTag:
      case n.dateTag:
      case n.float32ArrayTag:
      case n.float64ArrayTag:
      case n.int8ArrayTag:
      case n.int16ArrayTag:
      case n.int32ArrayTag:
      case n.mapTag:
      case n.numberTag:
      case n.objectTag:
      case n.regexpTag:
      case n.setTag:
      case n.stringTag:
      case n.symbolTag:
      case n.uint8ArrayTag:
      case n.uint8ClampedArrayTag:
      case n.uint16ArrayTag:
      case n.uint32ArrayTag:
        return true;
      default:
        return false;
    }
  }
  e2.cloneDeepWith = o, e2.cloneDeepWithImpl = u, e2.copyProperties = l;
})(Uu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Uu;
  function r(n) {
    return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
  }
  e2.cloneDeep = r;
})(qv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Bu, r = qv;
  function n(i) {
    return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
  }
  e2.matches = n;
})(Uv);
var Vv = {}, Xv = {}, Zv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Uu, r = qu;
  function n(i, a) {
    return t.cloneDeepWith(i, (o, u, l, s) => {
      const c = a == null ? void 0 : a(o, u, l, s);
      if (c !== void 0) return c;
      if (typeof i == "object") switch (Object.prototype.toString.call(i)) {
        case r.numberTag:
        case r.stringTag:
        case r.booleanTag: {
          const f = new i.constructor(i == null ? void 0 : i.valueOf());
          return t.copyProperties(f, i), f;
        }
        case r.argumentsTag: {
          const f = {};
          return t.copyProperties(f, i), f.length = i.length, f[Symbol.iterator] = i[Symbol.iterator], f;
        }
        default:
          return;
      }
    });
  }
  e2.cloneDeepWith = n;
})(Zv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Zv;
  function r(n) {
    return t.cloneDeepWith(n);
  }
  e2.cloneDeep = r;
})(Xv);
var Qv = {}, Gu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = /^(?:0|[1-9]\d*)$/;
  function r(n, i = Number.MAX_SAFE_INTEGER) {
    switch (typeof n) {
      case "number":
        return Number.isInteger(n) && n >= 0 && n < i;
      case "symbol":
        return false;
      case "string":
        return t.test(n);
    }
  }
  e2.isIndex = r;
})(Gu);
var Jv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Hu;
  function r(n) {
    return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
  }
  e2.isArguments = r;
})(Jv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Lu, r = Gu, n = Jv, i = wa;
  function a(o, u) {
    let l;
    if (Array.isArray(u) ? l = u : typeof u == "string" && t.isDeepKey(u) && (o == null ? void 0 : o[u]) == null ? l = i.toPath(u) : l = [u], l.length === 0) return false;
    let s = o;
    for (let c = 0; c < l.length; c++) {
      const f = l[c];
      if ((s == null || !Object.hasOwn(s, f)) && !((Array.isArray(s) || n.isArguments(s)) && r.isIndex(f) && f < s.length)) return false;
      s = s[f];
    }
    return true;
  }
  e2.has = a;
})(Qv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Bu, r = ba, n = Xv, i = ga, a = Qv;
  function o(u, l) {
    switch (typeof u) {
      case "object": {
        Object.is(u == null ? void 0 : u.valueOf(), -0) && (u = "-0");
        break;
      }
      case "number": {
        u = r.toKey(u);
        break;
      }
    }
    return l = n.cloneDeep(l), function(s) {
      const c = i.get(s, u);
      return c === void 0 ? a.has(s, u) : l === void 0 ? c === void 0 : t.isMatch(c, l);
    };
  }
  e2.matchesProperty = o;
})(Vv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Nn, r = Kv, n = Uv, i = Vv;
  function a(o) {
    if (o == null) return t.identity;
    switch (typeof o) {
      case "function":
        return o;
      case "object":
        return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
      case "string":
      case "symbol":
      case "number":
        return r.property(o);
    }
  }
  e2.iteratee = a;
})(Oa);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = zv, r = Nn, n = Bv, i = Oa;
  function a(o, u = r.identity) {
    return n.isArrayLikeObject(o) ? t.uniqBy(Array.from(o), i.iteratee(u)) : [];
  }
  e2.uniqBy = a;
})(Rv);
var ib = Rv.uniqBy;
const Lc = Pt(ib);
function ab(e2, t, r) {
  return t === true ? Lc(e2, r) : typeof t == "function" ? Lc(e2, t) : e2;
}
var eh = { exports: {} }, th = {}, rh = { exports: {} }, nh = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Mr = h;
function ob(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var ub = typeof Object.is == "function" ? Object.is : ob, lb = Mr.useState, cb = Mr.useEffect, sb = Mr.useLayoutEffect, fb = Mr.useDebugValue;
function db(e2, t) {
  var r = t(), n = lb({ inst: { value: r, getSnapshot: t } }), i = n[0].inst, a = n[1];
  return sb(function() {
    i.value = r, i.getSnapshot = t, po(i) && a({ inst: i });
  }, [e2, r, t]), cb(function() {
    return po(i) && a({ inst: i }), e2(function() {
      po(i) && a({ inst: i });
    });
  }, [e2]), fb(r), r;
}
function po(e2) {
  var t = e2.getSnapshot;
  e2 = e2.value;
  try {
    var r = t();
    return !ub(e2, r);
  } catch {
    return true;
  }
}
function vb(e2, t) {
  return t();
}
var hb = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? vb : db;
nh.useSyncExternalStore = Mr.useSyncExternalStore !== void 0 ? Mr.useSyncExternalStore : hb;
rh.exports = nh;
var pb = rh.exports;
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Aa = h, mb = pb;
function yb(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var gb = typeof Object.is == "function" ? Object.is : yb, bb = mb.useSyncExternalStore, wb = Aa.useRef, xb = Aa.useEffect, Pb = Aa.useMemo, Ob = Aa.useDebugValue;
th.useSyncExternalStoreWithSelector = function(e2, t, r, n, i) {
  var a = wb(null);
  if (a.current === null) {
    var o = { hasValue: false, value: null };
    a.current = o;
  } else o = a.current;
  a = Pb(function() {
    function l(v) {
      if (!s) {
        if (s = true, c = v, v = n(v), i !== void 0 && o.hasValue) {
          var p = o.value;
          if (i(p, v)) return f = p;
        }
        return f = v;
      }
      if (p = f, gb(c, v)) return p;
      var m = n(v);
      return i !== void 0 && i(p, m) ? (c = v, p) : (c = v, f = m);
    }
    var s = false, c, f, d = r === void 0 ? null : r;
    return [function() {
      return l(t());
    }, d === null ? void 0 : function() {
      return l(d());
    }];
  }, [t, r, n, i]);
  var u = bb(e2, a[0], a[1]);
  return xb(function() {
    o.hasValue = true, o.value = u;
  }, [u]), Ob(u), u;
};
eh.exports = th;
var Ab = eh.exports, Yu = h.createContext(null), Sb = (e2) => e2, ie = () => {
  var e2 = h.useContext(Yu);
  return e2 ? e2.store.dispatch : Sb;
}, wi = () => {
}, Eb = () => wi, _b = (e2, t) => e2 === t;
function I(e2) {
  var t = h.useContext(Yu);
  return Ab.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : Eb, t ? t.store.getState : wi, t ? t.store.getState : wi, t ? e2 : wi, _b);
}
function jb(e2, t = `expected a function, instead received ${typeof e2}`) {
  if (typeof e2 != "function") throw new TypeError(t);
}
function Cb(e2, t = `expected an object, instead received ${typeof e2}`) {
  if (typeof e2 != "object") throw new TypeError(t);
}
function kb(e2, t = "expected all items to be functions, instead received the following types: ") {
  if (!e2.every((r) => typeof r == "function")) {
    const r = e2.map((n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Rc = (e2) => Array.isArray(e2) ? e2 : [e2];
function Tb(e2) {
  const t = Array.isArray(e2[0]) ? e2[0] : e2;
  return kb(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function Mb(e2, t) {
  const r = [], { length: n } = e2;
  for (let i = 0; i < n; i++) r.push(e2[i].apply(null, t));
  return r;
}
var Ib = class {
  constructor(e2) {
    this.value = e2;
  }
  deref() {
    return this.value;
  }
}, Db = typeof WeakRef < "u" ? WeakRef : Ib, Nb = 0, zc = 1;
function ai() {
  return { s: Nb, v: void 0, o: null, p: null };
}
function ih(e2, t = {}) {
  let r = ai();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    var _a2;
    let u = r;
    const { length: l } = arguments;
    for (let f = 0, d = l; f < d; f++) {
      const v = arguments[f];
      if (typeof v == "function" || typeof v == "object" && v !== null) {
        let p = u.o;
        p === null && (u.o = p = /* @__PURE__ */ new WeakMap());
        const m = p.get(v);
        m === void 0 ? (u = ai(), p.set(v, u)) : u = m;
      } else {
        let p = u.p;
        p === null && (u.p = p = /* @__PURE__ */ new Map());
        const m = p.get(v);
        m === void 0 ? (u = ai(), p.set(v, u)) : u = m;
      }
    }
    const s = u;
    let c;
    if (u.s === zc) c = u.v;
    else if (c = e2.apply(null, arguments), a++, n) {
      const f = ((_a2 = i == null ? void 0 : i.deref) == null ? void 0 : _a2.call(i)) ?? i;
      f != null && n(f, c) && (c = f, a !== 0 && a--), i = typeof c == "object" && c !== null || typeof c == "function" ? new Db(c) : c;
    }
    return s.s = zc, s.v = c, c;
  }
  return o.clearCache = () => {
    r = ai(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function $b(e2, ...t) {
  const r = typeof e2 == "function" ? { memoize: e2, memoizeOptions: t } : e2, n = (...i) => {
    let a = 0, o = 0, u, l = {}, s = i.pop();
    typeof s == "object" && (l = s, s = i.pop()), jb(s, `createSelector expects an output function after the inputs, but received: [${typeof s}]`);
    const c = { ...r, ...l }, { memoize: f, memoizeOptions: d = [], argsMemoize: v = ih, argsMemoizeOptions: p = [] } = c, m = Rc(d), y = Rc(p), g = Tb(i), w = f(function() {
      return a++, s.apply(null, arguments);
    }, ...m), b = v(function() {
      o++;
      const x = Mb(g, arguments);
      return u = w.apply(null, x), u;
    }, ...y);
    return Object.assign(b, { resultFunc: s, memoizedResultFunc: w, dependencies: g, dependencyRecomputations: () => o, resetDependencyRecomputations: () => {
      o = 0;
    }, lastResult: () => u, recomputations: () => a, resetRecomputations: () => {
      a = 0;
    }, memoize: f, argsMemoize: v });
  };
  return Object.assign(n, { withTypes: () => n }), n;
}
var P = $b(ih), Lb = Object.assign((e2, t = P) => {
  Cb(e2, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e2}`);
  const r = Object.keys(e2), n = r.map((a) => e2[a]);
  return t(n, (...a) => a.reduce((o, u, l) => (o[r[l]] = u, o), {}));
}, { withTypes: () => Lb }), ah = {}, oh = {}, uh = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(n) {
    return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
  }
  const r = (n, i, a) => {
    if (n !== i) {
      const o = t(n), u = t(i);
      if (o === u && o === 0) {
        if (n < i) return a === "desc" ? 1 : -1;
        if (n > i) return a === "desc" ? -1 : 1;
      }
      return a === "desc" ? u - o : o - u;
    }
    return 0;
  };
  e2.compareValues = r;
})(uh);
var lh = {}, Vu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "symbol" || r instanceof Symbol;
  }
  e2.isSymbol = t;
})(Vu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Vu, r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    return Array.isArray(a) ? false : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? true : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
  }
  e2.isKey = i;
})(lh);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = uh, r = lh, n = wa;
  function i(a, o, u, l) {
    if (a == null) return [];
    u = l ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((v) => String(v));
    const s = (v, p) => {
      let m = v;
      for (let y = 0; y < p.length && m != null; ++y) m = m[p[y]];
      return m;
    }, c = (v, p) => p == null || v == null ? p : typeof v == "object" && "key" in v ? Object.hasOwn(p, v.key) ? p[v.key] : s(p, v.path) : typeof v == "function" ? v(p) : Array.isArray(v) ? s(p, v) : typeof p == "object" ? p[v] : p, f = o.map((v) => (Array.isArray(v) && v.length === 1 && (v = v[0]), v == null || typeof v == "function" || Array.isArray(v) || r.isKey(v) ? v : { key: v, path: n.toPath(v) }));
    return a.map((v) => ({ original: v, criteria: f.map((p) => c(p, v)) })).slice().sort((v, p) => {
      for (let m = 0; m < f.length; m++) {
        const y = t.compareValues(v.criteria[m], p.criteria[m], u[m]);
        if (y !== 0) return y;
      }
      return 0;
    }).map((v) => v.original);
  }
  e2.orderBy = i;
})(oh);
var ch = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n = 1) {
    const i = [], a = Math.floor(n), o = (u, l) => {
      for (let s = 0; s < u.length; s++) {
        const c = u[s];
        Array.isArray(c) && l < a ? o(c, l + 1) : i.push(c);
      }
    };
    return o(r, 0), i;
  }
  e2.flatten = t;
})(ch);
var Xu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Gu, r = Pa, n = Fu, i = Ku;
  function a(o, u, l) {
    return n.isObject(l) && (typeof u == "number" && r.isArrayLike(l) && t.isIndex(u) && u < l.length || typeof u == "string" && u in l) ? i.eq(l[u], o) : false;
  }
  e2.isIterateeCall = a;
})(Xu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = oh, r = ch, n = Xu;
  function i(a, ...o) {
    const u = o.length;
    return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
  }
  e2.sortBy = i;
})(ah);
var Rb = ah.sortBy;
const Sa = Pt(Rb);
var sh = (e2) => e2.legend.settings, zb = (e2) => e2.legend.size, Bb = (e2) => e2.legend.payload;
P([Bb, sh], (e2, t) => {
  var { itemSorter: r } = t, n = e2.flat(1);
  return r ? Sa(n, r) : n;
});
var oi = 1;
function Fb() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = h.useState({ height: 0, left: 0, top: 0, width: 0 }), n = h.useCallback((i) => {
    if (i != null) {
      var a = i.getBoundingClientRect(), o = { height: a.height, left: a.left, top: a.top, width: a.width };
      (Math.abs(o.height - t.height) > oi || Math.abs(o.left - t.left) > oi || Math.abs(o.top - t.top) > oi || Math.abs(o.width - t.width) > oi) && r({ height: o.height, left: o.left, top: o.top, width: o.width });
    }
  }, [t.width, t.height, t.top, t.left, ...e2]);
  return [t, n];
}
function Se(e2) {
  return `Minified Redux error #${e2}; visit https://redux.js.org/Errors?code=${e2} for the full message or use the non-minified dev environment for full errors. `;
}
var Wb = typeof Symbol == "function" && Symbol.observable || "@@observable", Bc = Wb, mo = () => Math.random().toString(36).substring(7).split("").join("."), Kb = { INIT: `@@redux/INIT${mo()}`, REPLACE: `@@redux/REPLACE${mo()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${mo()}` }, ki = Kb;
function Zu(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  let t = e2;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e2) === t || Object.getPrototypeOf(e2) === null;
}
function fh(e2, t, r) {
  if (typeof e2 != "function") throw new Error(Se(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(Se(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(Se(1));
    return r(fh)(e2, t);
  }
  let n = e2, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, l = false;
  function s() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((y, g) => {
      o.set(g, y);
    }));
  }
  function c() {
    if (l) throw new Error(Se(3));
    return i;
  }
  function f(y) {
    if (typeof y != "function") throw new Error(Se(4));
    if (l) throw new Error(Se(5));
    let g = true;
    s();
    const w = u++;
    return o.set(w, y), function() {
      if (g) {
        if (l) throw new Error(Se(6));
        g = false, s(), o.delete(w), a = null;
      }
    };
  }
  function d(y) {
    if (!Zu(y)) throw new Error(Se(7));
    if (typeof y.type > "u") throw new Error(Se(8));
    if (typeof y.type != "string") throw new Error(Se(17));
    if (l) throw new Error(Se(9));
    try {
      l = true, i = n(i, y);
    } finally {
      l = false;
    }
    return (a = o).forEach((w) => {
      w();
    }), y;
  }
  function v(y) {
    if (typeof y != "function") throw new Error(Se(10));
    n = y, d({ type: ki.REPLACE });
  }
  function p() {
    const y = f;
    return { subscribe(g) {
      if (typeof g != "object" || g === null) throw new Error(Se(11));
      function w() {
        const O = g;
        O.next && O.next(c());
      }
      return w(), { unsubscribe: y(w) };
    }, [Bc]() {
      return this;
    } };
  }
  return d({ type: ki.INIT }), { dispatch: d, subscribe: f, getState: c, replaceReducer: v, [Bc]: p };
}
function Ub(e2) {
  Object.keys(e2).forEach((t) => {
    const r = e2[t];
    if (typeof r(void 0, { type: ki.INIT }) > "u") throw new Error(Se(12));
    if (typeof r(void 0, { type: ki.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(Se(13));
  });
}
function dh(e2) {
  const t = Object.keys(e2), r = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    typeof e2[o] == "function" && (r[o] = e2[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    Ub(r);
  } catch (a) {
    i = a;
  }
  return function(o = {}, u) {
    if (i) throw i;
    let l = false;
    const s = {};
    for (let c = 0; c < n.length; c++) {
      const f = n[c], d = r[f], v = o[f], p = d(v, u);
      if (typeof p > "u") throw u && u.type, new Error(Se(14));
      s[f] = p, l = l || p !== v;
    }
    return l = l || n.length !== Object.keys(o).length, l ? s : o;
  };
}
function Ti(...e2) {
  return e2.length === 0 ? (t) => t : e2.length === 1 ? e2[0] : e2.reduce((t, r) => (...n) => t(r(...n)));
}
function Hb(...e2) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(Se(15));
    };
    const o = { getState: i.getState, dispatch: (l, ...s) => a(l, ...s) }, u = e2.map((l) => l(o));
    return a = Ti(...u)(i.dispatch), { ...i, dispatch: a };
  };
}
function vh(e2) {
  return Zu(e2) && "type" in e2 && typeof e2.type == "string";
}
var hh = Symbol.for("immer-nothing"), Fc = Symbol.for("immer-draftable"), Ie = Symbol.for("immer-state");
function at(e2, ...t) {
  throw new Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var qe = Object, Ir = qe.getPrototypeOf, Mi = "constructor", Ea = "prototype", Ko = "configurable", Ii = "enumerable", xi = "writable", hn = "value", Mt = (e2) => !!e2 && !!e2[Ie];
function st(e2) {
  var _a2;
  return e2 ? ph(e2) || _a(e2) || !!e2[Fc] || !!((_a2 = e2[Mi]) == null ? void 0 : _a2[Fc]) || ja(e2) || Ca(e2) : false;
}
var qb = qe[Ea][Mi].toString(), Wc = /* @__PURE__ */ new WeakMap();
function ph(e2) {
  if (!e2 || !Qu(e2)) return false;
  const t = Ir(e2);
  if (t === null || t === qe[Ea]) return true;
  const r = qe.hasOwnProperty.call(t, Mi) && t[Mi];
  if (r === Object) return true;
  if (!Er(r)) return false;
  let n = Wc.get(r);
  return n === void 0 && (n = Function.toString.call(r), Wc.set(r, n)), n === qb;
}
function $n(e2, t, r = true) {
  Ln(e2) === 0 ? (r ? Reflect.ownKeys(e2) : qe.keys(e2)).forEach((i) => {
    t(i, e2[i], e2);
  }) : e2.forEach((n, i) => t(i, n, e2));
}
function Ln(e2) {
  const t = e2[Ie];
  return t ? t.type_ : _a(e2) ? 1 : ja(e2) ? 2 : Ca(e2) ? 3 : 0;
}
var Kc = (e2, t, r = Ln(e2)) => r === 2 ? e2.has(t) : qe[Ea].hasOwnProperty.call(e2, t), Uo = (e2, t, r = Ln(e2)) => r === 2 ? e2.get(t) : e2[t], Di = (e2, t, r, n = Ln(e2)) => {
  n === 2 ? e2.set(t, r) : n === 3 ? e2.add(r) : e2[t] = r;
};
function Gb(e2, t) {
  return e2 === t ? e2 !== 0 || 1 / e2 === 1 / t : e2 !== e2 && t !== t;
}
var _a = Array.isArray, ja = (e2) => e2 instanceof Map, Ca = (e2) => e2 instanceof Set, Qu = (e2) => typeof e2 == "object", Er = (e2) => typeof e2 == "function", yo = (e2) => typeof e2 == "boolean";
function Yb(e2) {
  const t = +e2;
  return Number.isInteger(t) && String(t) === e2;
}
var At = (e2) => e2.copy_ || e2.base_, Ju = (e2) => e2.modified_ ? e2.copy_ : e2.base_;
function Ho(e2, t) {
  if (ja(e2)) return new Map(e2);
  if (Ca(e2)) return new Set(e2);
  if (_a(e2)) return Array[Ea].slice.call(e2);
  const r = ph(e2);
  if (t === true || t === "class_only" && !r) {
    const n = qe.getOwnPropertyDescriptors(e2);
    delete n[Ie];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u[xi] === false && (u[xi] = true, u[Ko] = true), (u.get || u.set) && (n[o] = { [Ko]: true, [xi]: true, [Ii]: u[Ii], [hn]: e2[o] });
    }
    return qe.create(Ir(e2), n);
  } else {
    const n = Ir(e2);
    if (n !== null && r) return { ...e2 };
    const i = qe.create(n);
    return qe.assign(i, e2);
  }
}
function el(e2, t = false) {
  return ka(e2) || Mt(e2) || !st(e2) || (Ln(e2) > 1 && qe.defineProperties(e2, { set: ui, add: ui, clear: ui, delete: ui }), qe.freeze(e2), t && $n(e2, (r, n) => {
    el(n, true);
  }, false)), e2;
}
function Vb() {
  at(2);
}
var ui = { [hn]: Vb };
function ka(e2) {
  return e2 === null || !Qu(e2) ? true : qe.isFrozen(e2);
}
var Ni = "MapSet", qo = "Patches", Uc = "ArrayMethods", mh = {};
function hr(e2) {
  const t = mh[e2];
  return t || at(0, e2), t;
}
var Hc = (e2) => !!mh[e2], pn, yh = () => pn, Xb = (e2, t) => ({ drafts_: [], parent_: e2, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0, handledSet_: /* @__PURE__ */ new Set(), processedForPatches_: /* @__PURE__ */ new Set(), mapSetPlugin_: Hc(Ni) ? hr(Ni) : void 0, arrayMethodsPlugin_: Hc(Uc) ? hr(Uc) : void 0 });
function qc(e2, t) {
  t && (e2.patchPlugin_ = hr(qo), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t);
}
function Go(e2) {
  Yo(e2), e2.drafts_.forEach(Zb), e2.drafts_ = null;
}
function Yo(e2) {
  e2 === pn && (pn = e2.parent_);
}
var Gc = (e2) => pn = Xb(pn, e2);
function Zb(e2) {
  const t = e2[Ie];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function Yc(e2, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e2 !== void 0 && e2 !== r) {
    r[Ie].modified_ && (Go(t), at(4)), st(e2) && (e2 = Vc(t, e2));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(r[Ie].base_, e2, t);
  } else e2 = Vc(t, r);
  return Qb(t, e2, true), Go(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e2 !== hh ? e2 : void 0;
}
function Vc(e2, t) {
  if (ka(t)) return t;
  const r = t[Ie];
  if (!r) return tl(t, e2.handledSet_, e2);
  if (!Ta(r, e2)) return t;
  if (!r.modified_) return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n) for (; n.length > 0; ) n.pop()(e2);
    wh(r, e2);
  }
  return r.copy_;
}
function Qb(e2, t, r = false) {
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && el(t, r);
}
function gh(e2) {
  e2.finalized_ = true, e2.scope_.unfinalizedDrafts_--;
}
var Ta = (e2, t) => e2.scope_ === t, Jb = [];
function bh(e2, t, r, n) {
  const i = At(e2), a = e2.type_;
  if (n !== void 0 && Uo(i, n, a) === t) {
    Di(i, n, r, a);
    return;
  }
  if (!e2.draftLocations_) {
    const u = e2.draftLocations_ = /* @__PURE__ */ new Map();
    $n(i, (l, s) => {
      if (Mt(s)) {
        const c = u.get(s) || [];
        c.push(l), u.set(s, c);
      }
    });
  }
  const o = e2.draftLocations_.get(t) ?? Jb;
  for (const u of o) Di(i, u, r, a);
}
function ew(e2, t, r) {
  e2.callbacks_.push(function(i) {
    var _a2;
    const a = t;
    if (!a || !Ta(a, i)) return;
    (_a2 = i.mapSetPlugin_) == null ? void 0 : _a2.fixSetContents(a);
    const o = Ju(a);
    bh(e2, a.draft_ ?? a, o, r), wh(a, i);
  });
}
function wh(e2, t) {
  var _a2;
  if (e2.modified_ && !e2.finalized_ && (e2.type_ === 3 || e2.type_ === 1 && e2.allIndicesReassigned_ || (((_a2 = e2.assigned_) == null ? void 0 : _a2.size) ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e2);
      i && n.generatePatches_(e2, i, t);
    }
    gh(e2);
  }
}
function tw(e2, t, r) {
  const { scope_: n } = e2;
  if (Mt(r)) {
    const i = r[Ie];
    Ta(i, n) && i.callbacks_.push(function() {
      Pi(e2);
      const o = Ju(i);
      bh(e2, r, o, t);
    });
  } else st(r) && e2.callbacks_.push(function() {
    const a = At(e2);
    Uo(a, t, e2.type_) === r && n.drafts_.length > 1 && (e2.assigned_.get(t) ?? false) === true && e2.copy_ && tl(Uo(e2.copy_, t, e2.type_), n.handledSet_, n);
  });
}
function tl(e2, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Mt(e2) || t.has(e2) || !st(e2) || ka(e2) || (t.add(e2), $n(e2, (n, i) => {
    if (Mt(i)) {
      const a = i[Ie];
      if (Ta(a, r)) {
        const o = Ju(a);
        Di(e2, n, o, e2.type_), gh(a);
      }
    } else st(i) && tl(i, t, r);
  })), e2;
}
function rw(e2, t) {
  const r = _a(e2), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : yh(), modified_: false, finalized_: false, assigned_: void 0, parent_: t, base_: e2, draft_: null, copy_: null, revoke_: null, isManual_: false, callbacks_: void 0 };
  let i = n, a = rl;
  r && (i = [n], a = mn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, [u, n];
}
var rl = { get(e2, t) {
  if (t === Ie) return e2;
  let r = e2.scope_.arrayMethodsPlugin_;
  const n = e2.type_ === 1 && typeof t == "string";
  if (n && (r == null ? void 0 : r.isArrayOperationMethod(t))) return r.createMethodInterceptor(e2, t);
  const i = At(e2);
  if (!Kc(i, t, e2.type_)) return nw(e2, i, t);
  const a = i[t];
  if (e2.finalized_ || !st(a) || n && e2.operationMethod && (r == null ? void 0 : r.isMutatingArrayMethod(e2.operationMethod)) && Yb(t)) return a;
  if (a === go(e2.base_, t)) {
    Pi(e2);
    const o = e2.type_ === 1 ? +t : t, u = Xo(e2.scope_, a, e2, o);
    return e2.copy_[o] = u;
  }
  return a;
}, has(e2, t) {
  return t in At(e2);
}, ownKeys(e2) {
  return Reflect.ownKeys(At(e2));
}, set(e2, t, r) {
  const n = xh(At(e2), t);
  if (n == null ? void 0 : n.set) return n.set.call(e2.draft_, r), true;
  if (!e2.modified_) {
    const i = go(At(e2), t), a = i == null ? void 0 : i[Ie];
    if (a && a.base_ === r) return e2.copy_[t] = r, e2.assigned_.set(t, false), true;
    if (Gb(r, i) && (r !== void 0 || Kc(e2.base_, t, e2.type_))) return true;
    Pi(e2), Vo(e2);
  }
  return e2.copy_[t] === r && (r !== void 0 || t in e2.copy_) || Number.isNaN(r) && Number.isNaN(e2.copy_[t]) || (e2.copy_[t] = r, e2.assigned_.set(t, true), tw(e2, t, r)), true;
}, deleteProperty(e2, t) {
  return Pi(e2), go(e2.base_, t) !== void 0 || t in e2.base_ ? (e2.assigned_.set(t, false), Vo(e2)) : e2.assigned_.delete(t), e2.copy_ && delete e2.copy_[t], true;
}, getOwnPropertyDescriptor(e2, t) {
  const r = At(e2), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { [xi]: true, [Ko]: e2.type_ !== 1 || t !== "length", [Ii]: n[Ii], [hn]: r[t] };
}, defineProperty() {
  at(11);
}, getPrototypeOf(e2) {
  return Ir(e2.base_);
}, setPrototypeOf() {
  at(12);
} }, mn = {};
$n(rl, (e2, t) => {
  mn[e2] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
});
mn.deleteProperty = function(e2, t) {
  return mn.set.call(this, e2, t, void 0);
};
mn.set = function(e2, t, r) {
  return rl.set.call(this, e2[0], t, r, e2[0]);
};
function go(e2, t) {
  const r = e2[Ie];
  return (r ? At(r) : e2)[t];
}
function nw(e2, t, r) {
  var _a2;
  const n = xh(t, r);
  return n ? hn in n ? n[hn] : (_a2 = n.get) == null ? void 0 : _a2.call(e2.draft_) : void 0;
}
function xh(e2, t) {
  if (!(t in e2)) return;
  let r = Ir(e2);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = Ir(r);
  }
}
function Vo(e2) {
  e2.modified_ || (e2.modified_ = true, e2.parent_ && Vo(e2.parent_));
}
function Pi(e2) {
  e2.copy_ || (e2.assigned_ = /* @__PURE__ */ new Map(), e2.copy_ = Ho(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
var iw = class {
  constructor(t) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = false, this.produce = (r, n, i) => {
      if (Er(r) && !Er(n)) {
        const o = n;
        n = r;
        const u = this;
        return function(s = o, ...c) {
          return u.produce(s, (f) => n.call(this, f, ...c));
        };
      }
      Er(n) || at(6), i !== void 0 && !Er(i) && at(7);
      let a;
      if (st(r)) {
        const o = Gc(this), u = Xo(o, r, void 0);
        let l = true;
        try {
          a = n(u), l = false;
        } finally {
          l ? Go(o) : Yo(o);
        }
        return qc(o, i), Yc(a, o);
      } else if (!r || !Qu(r)) {
        if (a = n(r), a === void 0 && (a = r), a === hh && (a = void 0), this.autoFreeze_ && el(a, true), i) {
          const o = [], u = [];
          hr(qo).generateReplacementPatches_(r, a, { patches_: o, inversePatches_: u }), i(o, u);
        }
        return a;
      } else at(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (Er(r)) return (u, ...l) => this.produceWithPatches(u, (s) => r(s, ...l));
      let i, a;
      return [this.produce(r, n, (u, l) => {
        i = u, a = l;
      }), i, a];
    }, yo(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), yo(t == null ? void 0 : t.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), yo(t == null ? void 0 : t.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    st(t) || at(8), Mt(t) && (t = ct(t));
    const r = Gc(this), n = Xo(r, t, void 0);
    return n[Ie].isManual_ = true, Yo(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[Ie];
    (!n || !n.isManual_) && at(9);
    const { scope_: i } = n;
    return qc(i, r), Yc(void 0, i);
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const a = r[n];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = hr(qo).applyPatches_;
    return Mt(t) ? i(t, r) : this.produce(t, (a) => i(a, r));
  }
};
function Xo(e2, t, r, n) {
  const [i, a] = ja(t) ? hr(Ni).proxyMap_(t, r) : Ca(t) ? hr(Ni).proxySet_(t, r) : rw(t, r);
  return ((r == null ? void 0 : r.scope_) ?? yh()).drafts_.push(i), a.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], a.key_ = n, r && n !== void 0 ? ew(r, a, n) : a.callbacks_.push(function(l) {
    var _a2;
    (_a2 = l.mapSetPlugin_) == null ? void 0 : _a2.fixSetContents(a);
    const { patchPlugin_: s } = l;
    a.modified_ && s && s.generatePatches_(a, [], l);
  }), i;
}
function ct(e2) {
  return Mt(e2) || at(10, e2), Ph(e2);
}
function Ph(e2) {
  if (!st(e2) || ka(e2)) return e2;
  const t = e2[Ie];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = Ho(e2, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = Ho(e2, true);
  return $n(r, (i, a) => {
    Di(r, i, Ph(a));
  }, n), t && (t.finalized_ = false), r;
}
var aw = new iw(), Oh = aw.produce;
function Ah(e2) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e2) : i(a);
}
var ow = Ah(), uw = Ah, lw = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? Ti : Ti.apply(null, arguments);
};
function rt(e2, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(Ge(0));
      return { type: e2, payload: i.payload, ..."meta" in i && { meta: i.meta }, ..."error" in i && { error: i.error } };
    }
    return { type: e2, payload: n[0] };
  }
  return r.toString = () => `${e2}`, r.type = e2, r.match = (n) => vh(n) && n.type === e2, r;
}
var Sh = class cn extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, cn.prototype);
  }
  static get [Symbol.species]() {
    return cn;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new cn(...t[0].concat(this)) : new cn(...t.concat(this));
  }
};
function Xc(e2) {
  return st(e2) ? Oh(e2, () => {
  }) : e2;
}
function li(e2, t, r) {
  return e2.has(t) ? e2.get(t) : e2.set(t, r(t)).get(t);
}
function cw(e2) {
  return typeof e2 == "boolean";
}
var sw = () => function(t) {
  const { thunk: r = true, immutableCheck: n = true, serializableCheck: i = true, actionCreatorCheck: a = true } = t ?? {};
  let o = new Sh();
  return r && (cw(r) ? o.push(ow) : o.push(uw(r.extraArgument))), o;
}, Eh = "RTK_autoBatch", te = () => (e2) => ({ payload: e2, meta: { [Eh]: true } }), Zc = (e2) => (t) => {
  setTimeout(t, e2);
}, _h = (e2 = { type: "raf" }) => (t) => (...r) => {
  const n = t(...r);
  let i = true, a = false, o = false;
  const u = /* @__PURE__ */ new Set(), l = e2.type === "tick" ? queueMicrotask : e2.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Zc(10) : e2.type === "callback" ? e2.queueNotification : Zc(e2.timeout), s = () => {
    o = false, a && (a = false, u.forEach((c) => c()));
  };
  return Object.assign({}, n, { subscribe(c) {
    const f = () => i && c(), d = n.subscribe(f);
    return u.add(c), () => {
      d(), u.delete(c);
    };
  }, dispatch(c) {
    var _a2;
    try {
      return i = !((_a2 = c == null ? void 0 : c.meta) == null ? void 0 : _a2[Eh]), a = !i, a && (o || (o = true, l(s))), n.dispatch(c);
    } finally {
      i = true;
    }
  } });
}, fw = (e2) => function(r) {
  const { autoBatch: n = true } = r ?? {};
  let i = new Sh(e2);
  return n && i.push(_h(typeof n == "object" ? n : void 0)), i;
};
function dw(e2) {
  const t = sw(), { reducer: r = void 0, middleware: n, devTools: i = true, preloadedState: a = void 0, enhancers: o = void 0 } = e2 || {};
  let u;
  if (typeof r == "function") u = r;
  else if (Zu(r)) u = dh(r);
  else throw new Error(Ge(1));
  let l;
  typeof n == "function" ? l = n(t) : l = t();
  let s = Ti;
  i && (s = lw({ trace: false, ...typeof i == "object" && i }));
  const c = Hb(...l), f = fw(c);
  let d = typeof o == "function" ? o(f) : f();
  const v = s(...d);
  return fh(u, a, v);
}
function jh(e2) {
  const t = {}, r = [];
  let n;
  const i = { addCase(a, o) {
    const u = typeof a == "string" ? a : a.type;
    if (!u) throw new Error(Ge(28));
    if (u in t) throw new Error(Ge(29));
    return t[u] = o, i;
  }, addAsyncThunk(a, o) {
    return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({ matcher: a.settled, reducer: o.settled }), i;
  }, addMatcher(a, o) {
    return r.push({ matcher: a, reducer: o }), i;
  }, addDefaultCase(a) {
    return n = a, i;
  } };
  return e2(i), [t, r, n];
}
function vw(e2) {
  return typeof e2 == "function";
}
function hw(e2, t) {
  let [r, n, i] = jh(t), a;
  if (vw(e2)) a = () => Xc(e2());
  else {
    const u = Xc(e2);
    a = () => u;
  }
  function o(u = a(), l) {
    let s = [r[l.type], ...n.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c)];
    return s.filter((c) => !!c).length === 0 && (s = [i]), s.reduce((c, f) => {
      if (f) if (Mt(c)) {
        const v = f(c, l);
        return v === void 0 ? c : v;
      } else {
        if (st(c)) return Oh(c, (d) => f(d, l));
        {
          const d = f(c, l);
          if (d === void 0) {
            if (c === null) return c;
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return d;
        }
      }
      return c;
    }, u);
  }
  return o.getInitialState = a, o;
}
var pw = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", mw = (e2 = 21) => {
  let t = "", r = e2;
  for (; r--; ) t += pw[Math.random() * 64 | 0];
  return t;
}, yw = Symbol.for("rtk-slice-createasyncthunk");
function gw(e2, t) {
  return `${e2}/${t}`;
}
function bw({ creators: e2 } = {}) {
  var _a2;
  const t = (_a2 = e2 == null ? void 0 : e2.asyncThunk) == null ? void 0 : _a2[yw];
  return function(n) {
    const { name: i, reducerPath: a = i } = n;
    if (!i) throw new Error(Ge(11));
    const o = (typeof n.reducers == "function" ? n.reducers(xw()) : n.reducers) || {}, u = Object.keys(o), l = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, s = { addCase(b, O) {
      const x = typeof b == "string" ? b : b.type;
      if (!x) throw new Error(Ge(12));
      if (x in l.sliceCaseReducersByType) throw new Error(Ge(13));
      return l.sliceCaseReducersByType[x] = O, s;
    }, addMatcher(b, O) {
      return l.sliceMatchers.push({ matcher: b, reducer: O }), s;
    }, exposeAction(b, O) {
      return l.actionCreators[b] = O, s;
    }, exposeCaseReducer(b, O) {
      return l.sliceCaseReducersByName[b] = O, s;
    } };
    u.forEach((b) => {
      const O = o[b], x = { reducerName: b, type: gw(i, b), createNotation: typeof n.reducers == "function" };
      Ow(O) ? Sw(x, O, s, t) : Pw(x, O, s);
    });
    function c() {
      const [b = {}, O = [], x = void 0] = typeof n.extraReducers == "function" ? jh(n.extraReducers) : [n.extraReducers], A = { ...b, ...l.sliceCaseReducersByType };
      return hw(n.initialState, (S) => {
        for (let k in A) S.addCase(k, A[k]);
        for (let k of l.sliceMatchers) S.addMatcher(k.matcher, k.reducer);
        for (let k of O) S.addMatcher(k.matcher, k.reducer);
        x && S.addDefaultCase(x);
      });
    }
    const f = (b) => b, d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new WeakMap();
    let p;
    function m(b, O) {
      return p || (p = c()), p(b, O);
    }
    function y() {
      return p || (p = c()), p.getInitialState();
    }
    function g(b, O = false) {
      function x(S) {
        let k = S[b];
        return typeof k > "u" && O && (k = li(v, x, y)), k;
      }
      function A(S = f) {
        const k = li(d, O, () => /* @__PURE__ */ new WeakMap());
        return li(k, S, () => {
          const T = {};
          for (const [D, E] of Object.entries(n.selectors ?? {})) T[D] = ww(E, S, () => li(v, S, y), O);
          return T;
        });
      }
      return { reducerPath: b, getSelectors: A, get selectors() {
        return A(x);
      }, selectSlice: x };
    }
    const w = { name: i, reducer: m, actions: l.actionCreators, caseReducers: l.sliceCaseReducersByName, getInitialState: y, ...g(a), injectInto(b, { reducerPath: O, ...x } = {}) {
      const A = O ?? a;
      return b.inject({ reducerPath: A, reducer: m }, x), { ...w, ...g(A, true) };
    } };
    return w;
  };
}
function ww(e2, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    return typeof u > "u" && n && (u = r()), e2(u, ...o);
  }
  return i.unwrapped = e2, i;
}
var Fe = bw();
function xw() {
  function e2(t, r) {
    return { _reducerDefinitionType: "asyncThunk", payloadCreator: t, ...r };
  }
  return e2.withTypes = () => e2, { reducer(t) {
    return Object.assign({ [t.name](...r) {
      return t(...r);
    } }[t.name], { _reducerDefinitionType: "reducer" });
  }, preparedReducer(t, r) {
    return { _reducerDefinitionType: "reducerWithPrepare", prepare: t, reducer: r };
  }, asyncThunk: e2 };
}
function Pw({ type: e2, reducerName: t, createNotation: r }, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !Aw(n)) throw new Error(Ge(17));
    a = n.reducer, o = n.prepare;
  } else a = n;
  i.addCase(e2, a).exposeCaseReducer(t, a).exposeAction(t, o ? rt(e2, o) : rt(e2));
}
function Ow(e2) {
  return e2._reducerDefinitionType === "asyncThunk";
}
function Aw(e2) {
  return e2._reducerDefinitionType === "reducerWithPrepare";
}
function Sw({ type: e2, reducerName: t }, r, n, i) {
  if (!i) throw new Error(Ge(18));
  const { payloadCreator: a, fulfilled: o, pending: u, rejected: l, settled: s, options: c } = r, f = i(e2, a, c);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), l && n.addCase(f.rejected, l), s && n.addMatcher(f.settled, s), n.exposeCaseReducer(t, { fulfilled: o || ci, pending: u || ci, rejected: l || ci, settled: s || ci });
}
function ci() {
}
var Ew = "task", Ch = "listener", kh = "completed", nl = "cancelled", _w = `task-${nl}`, jw = `task-${kh}`, Zo = `${Ch}-${nl}`, Cw = `${Ch}-${kh}`, Ma = class {
  constructor(e2) {
    __publicField(this, "name", "TaskAbortError");
    __publicField(this, "message");
    this.code = e2, this.message = `${Ew} ${nl} (reason: ${e2})`;
  }
}, il = (e2, t) => {
  if (typeof e2 != "function") throw new TypeError(Ge(32));
}, $i = () => {
}, Th = (e2, t = $i) => (e2.catch(t), e2), Mh = (e2, t) => (e2.addEventListener("abort", t, { once: true }), () => e2.removeEventListener("abort", t)), sr = (e2) => {
  if (e2.aborted) throw new Ma(e2.reason);
};
function Ih(e2, t) {
  let r = $i;
  return new Promise((n, i) => {
    const a = () => i(new Ma(e2.reason));
    if (e2.aborted) {
      a();
      return;
    }
    r = Mh(e2, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = $i;
  });
}
var kw = async (e2, t) => {
  try {
    return await Promise.resolve(), { status: "ok", value: await e2() };
  } catch (r) {
    return { status: r instanceof Ma ? "cancelled" : "rejected", error: r };
  } finally {
    t == null ? void 0 : t();
  }
}, Li = (e2) => (t) => Th(Ih(e2, t).then((r) => (sr(e2), r))), Dh = (e2) => {
  const t = Li(e2);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, { assign: kr } = Object, Qc = {}, Ia = "listenerMiddleware", Tw = (e2, t) => {
  const r = (n) => Mh(e2, () => n.abort(e2.reason));
  return (n, i) => {
    il(n);
    const a = new AbortController();
    r(a);
    const o = kw(async () => {
      sr(e2), sr(a.signal);
      const u = await n({ pause: Li(a.signal), delay: Dh(a.signal), signal: a.signal });
      return sr(a.signal), u;
    }, () => a.abort(jw));
    return (i == null ? void 0 : i.autoJoin) && t.push(o.catch($i)), { result: Li(e2)(o), cancel() {
      a.abort(_w);
    } };
  };
}, Mw = (e2, t) => {
  const r = async (n, i) => {
    sr(t);
    let a = () => {
    };
    const u = [new Promise((l, s) => {
      let c = e2({ predicate: n, effect: (f, d) => {
        d.unsubscribe(), l([f, d.getState(), d.getOriginalState()]);
      } });
      a = () => {
        c(), s();
      };
    })];
    i != null && u.push(new Promise((l) => setTimeout(l, i, null)));
    try {
      const l = await Ih(t, Promise.race(u));
      return sr(t), l;
    } finally {
      a();
    }
  };
  return (n, i) => Th(r(n, i));
}, Nh = (e2) => {
  let { type: t, actionCreator: r, matcher: n, predicate: i, effect: a } = e2;
  if (t) i = rt(t).match;
  else if (r) t = r.type, i = r.match;
  else if (n) i = n;
  else if (!i) throw new Error(Ge(21));
  return il(a), { predicate: i, type: t, effect: a };
}, $h = kr((e2) => {
  const { type: t, predicate: r, effect: n } = Nh(e2);
  return { id: mw(), effect: n, type: t, predicate: r, pending: /* @__PURE__ */ new Set(), unsubscribe: () => {
    throw new Error(Ge(22));
  } };
}, { withTypes: () => $h }), Jc = (e2, t) => {
  const { type: r, effect: n, predicate: i } = Nh(t);
  return Array.from(e2.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, Qo = (e2) => {
  e2.pending.forEach((t) => {
    t.abort(Zo);
  });
}, Iw = (e2, t) => () => {
  for (const r of t.keys()) Qo(r);
  e2.clear();
}, es = (e2, t, r) => {
  try {
    e2(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Lh = kr(rt(`${Ia}/add`), { withTypes: () => Lh }), Dw = rt(`${Ia}/removeAll`), Rh = kr(rt(`${Ia}/remove`), { withTypes: () => Rh }), Nw = (...e2) => {
  console.error(`${Ia}/error`, ...e2);
}, Rn = (e2 = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (v) => {
    const p = r.get(v) ?? 0;
    r.set(v, p + 1);
  }, i = (v) => {
    const p = r.get(v) ?? 1;
    p === 1 ? r.delete(v) : r.set(v, p - 1);
  }, { extra: a, onError: o = Nw } = e2;
  il(o);
  const u = (v) => (v.unsubscribe = () => t.delete(v.id), t.set(v.id, v), (p) => {
    v.unsubscribe(), (p == null ? void 0 : p.cancelActive) && Qo(v);
  }), l = (v) => {
    const p = Jc(t, v) ?? $h(v);
    return u(p);
  };
  kr(l, { withTypes: () => l });
  const s = (v) => {
    const p = Jc(t, v);
    return p && (p.unsubscribe(), v.cancelActive && Qo(p)), !!p;
  };
  kr(s, { withTypes: () => s });
  const c = async (v, p, m, y) => {
    const g = new AbortController(), w = Mw(l, g.signal), b = [];
    try {
      v.pending.add(g), n(v), await Promise.resolve(v.effect(p, kr({}, m, { getOriginalState: y, condition: (O, x) => w(O, x).then(Boolean), take: w, delay: Dh(g.signal), pause: Li(g.signal), extra: a, signal: g.signal, fork: Tw(g.signal, b), unsubscribe: v.unsubscribe, subscribe: () => {
        t.set(v.id, v);
      }, cancelActiveListeners: () => {
        v.pending.forEach((O, x, A) => {
          O !== g && (O.abort(Zo), A.delete(O));
        });
      }, cancel: () => {
        g.abort(Zo), v.pending.delete(g);
      }, throwIfCancelled: () => {
        sr(g.signal);
      } })));
    } catch (O) {
      O instanceof Ma || es(o, O, { raisedBy: "effect" });
    } finally {
      await Promise.all(b), g.abort(Cw), i(v), v.pending.delete(g);
    }
  }, f = Iw(t, r);
  return { middleware: (v) => (p) => (m) => {
    if (!vh(m)) return p(m);
    if (Lh.match(m)) return l(m.payload);
    if (Dw.match(m)) {
      f();
      return;
    }
    if (Rh.match(m)) return s(m.payload);
    let y = v.getState();
    const g = () => {
      if (y === Qc) throw new Error(Ge(23));
      return y;
    };
    let w;
    try {
      if (w = p(m), t.size > 0) {
        const b = v.getState(), O = Array.from(t.values());
        for (const x of O) {
          let A = false;
          try {
            A = x.predicate(m, b, y);
          } catch (S) {
            A = false, es(o, S, { raisedBy: "predicate" });
          }
          A && c(x, m, v, g);
        }
      }
    } finally {
      y = Qc;
    }
    return w;
  }, startListening: l, stopListening: s, clearListeners: f };
};
function Ge(e2) {
  return `Minified Redux Toolkit error #${e2}; visit https://redux-toolkit.js.org/Errors?code=${e2} for the full message or use the non-minified dev environment for full errors. `;
}
var $w = { layoutType: "horizontal", width: 0, height: 0, margin: { top: 5, right: 5, bottom: 5, left: 5 }, scale: 1 }, zh = Fe({ name: "chartLayout", initialState: $w, reducers: { setLayout(e2, t) {
  e2.layoutType = t.payload;
}, setChartSize(e2, t) {
  e2.width = t.payload.width, e2.height = t.payload.height;
}, setMargin(e2, t) {
  var r, n, i, a;
  e2.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e2.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e2.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e2.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
}, setScale(e2, t) {
  e2.scale = t.payload;
} } }), { setMargin: Lw, setLayout: Rw, setChartSize: zw, setScale: Bw } = zh.actions, Fw = zh.reducer;
function Bh(e2, t, r) {
  return Array.isArray(e2) && e2 && t + r !== 0 ? e2.slice(t, r + 1) : e2;
}
function ve(e2) {
  return Number.isFinite(e2);
}
function wt(e2) {
  return typeof e2 == "number" && e2 > 0 && Number.isFinite(e2);
}
function ts(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _r(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ts(Object(r), true).forEach(function(n) {
      Ww(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Ww(e2, t, r) {
  return (t = Kw(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Kw(e2) {
  var t = Uw(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Uw(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function ue(e2, t, r) {
  return fe(e2) || fe(t) ? r : bt(t) ? xa(e2, t, r) : typeof t == "function" ? t(e2) : r;
}
var Hw = (e2, t, r) => {
  if (t && r) {
    var { width: n, height: i } = r, { align: a, verticalAlign: o, layout: u } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && N(e2[a])) return _r(_r({}, e2), {}, { [a]: e2[a] + (n || 0) });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && N(e2[o])) return _r(_r({}, e2), {}, { [o]: e2[o] + (i || 0) });
  }
  return e2;
}, Lt = (e2, t) => e2 === "horizontal" && t === "xAxis" || e2 === "vertical" && t === "yAxis" || e2 === "centric" && t === "angleAxis" || e2 === "radial" && t === "radiusAxis", Fh = (e2, t, r, n) => {
  if (n) return e2.map((u) => u.coordinate);
  var i, a, o = e2.map((u) => (u.coordinate === t && (i = true), u.coordinate === r && (a = true), u.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, Wh = (e2, t, r) => {
  if (!e2) return null;
  var { duplicateDomain: n, type: i, range: a, scale: o, realScaleType: u, isCategorical: l, categoricalDomain: s, tickCount: c, ticks: f, niceTicks: d, axisType: v } = e2;
  if (!o) return null;
  var p = u === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, m = i === "category" && o.bandwidth ? o.bandwidth() / p : 0;
  if (m = v === "angleAxis" && a && a.length >= 2 ? et(a[0] - a[1]) * 2 * m : m, f || d) {
    var y = (f || d || []).map((g, w) => {
      var b = n ? n.indexOf(g) : g;
      return { coordinate: o(b) + m, value: g, offset: m, index: w };
    });
    return y.filter((g) => !gt(g.coordinate));
  }
  return l && s ? s.map((g, w) => ({ coordinate: o(g) + m, value: g, index: w, offset: m })) : o.ticks && c != null ? o.ticks(c).map((g, w) => ({ coordinate: o(g) + m, value: g, offset: m, index: w })) : o.domain().map((g, w) => ({ coordinate: o(g) + m, value: n ? n[g] : g, index: w, offset: m }));
}, rs = 1e-4, qw = (e2) => {
  var t = e2.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e2.range(), i = Math.min(n[0], n[1]) - rs, a = Math.max(n[0], n[1]) + rs, o = e2(t[0]), u = e2(t[r - 1]);
    (o < i || o > a || u < i || u > a) && e2.domain([t[0], t[r - 1]]);
  }
}, Gw = (e2) => {
  var t, r = e2.length;
  if (!(r <= 0)) {
    var n = (t = e2[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var a = 0, o = 0, u = 0; u < r; ++u) {
      var l = e2[u], s = l == null ? void 0 : l[i];
      if (s != null) {
        var c = s[1], f = s[0], d = gt(c) ? f : c;
        d >= 0 ? (s[0] = a, s[1] = a + d, a = c) : (s[0] = o, s[1] = o + d, o = c);
      }
    }
  }
}, Yw = (e2) => {
  var t, r = e2.length;
  if (!(r <= 0)) {
    var n = (t = e2[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var a = 0, o = 0; o < r; ++o) {
      var u = e2[o], l = u == null ? void 0 : u[i];
      if (l != null) {
        var s = gt(l[1]) ? l[0] : l[1];
        s >= 0 ? (l[0] = a, l[1] = a + s, a = l[1]) : (l[0] = 0, l[1] = 0);
      }
    }
  }
}, Vw = { sign: Gw, expand: $0, none: vr, silhouette: L0, wiggle: R0, positive: Yw }, Xw = (e2, t, r) => {
  var n, i = (n = Vw[r]) !== null && n !== void 0 ? n : vr, a = N0().keys(t).value((u, l) => Number(ue(u, l, 0))).order(Fo).offset(i), o = a(e2);
  return o.forEach((u, l) => {
    u.forEach((s, c) => {
      var f = ue(e2[c], t[l], 0);
      Array.isArray(f) && f.length === 2 && N(f[0]) && N(f[1]) && (s[0] = f[0], s[1] = f[1]);
    });
  }), o;
};
function ns(e2) {
  var { axis: t, ticks: r, bandSize: n, entry: i, index: a, dataKey: o } = e2;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !fe(i[t.dataKey])) {
      var u = Dv(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = ue(i, fe(o) ? t.dataKey : o);
  return fe(l) ? null : t.scale(l);
}
var Zw = (e2) => {
  var t = e2.flat(2).filter(N);
  return [Math.min(...t), Math.max(...t)];
}, Qw = (e2) => [e2[0] === 1 / 0 ? 0 : e2[0], e2[1] === -1 / 0 ? 0 : e2[1]], Jw = (e2, t, r) => {
  if (e2 != null) return Qw(Object.keys(e2).reduce((n, i) => {
    var a = e2[i];
    if (!a) return n;
    var { stackedData: o } = a, u = o.reduce((l, s) => {
      var c = Bh(s, t, r), f = Zw(c);
      return !ve(f[0]) || !ve(f[1]) ? l : [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
  }, [1 / 0, -1 / 0]));
}, is = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, as = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Dr = (e2, t, r) => {
  if (e2 && e2.scale && e2.scale.bandwidth) {
    var n = e2.scale.bandwidth();
    if (!r || n > 0) return n;
  }
  if (e2 && t && t.length >= 2) {
    for (var i = Sa(t, (c) => c.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var l = i[o], s = i[o - 1];
      a = Math.min(((l == null ? void 0 : l.coordinate) || 0) - ((s == null ? void 0 : s.coordinate) || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function os(e2) {
  var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: a } = e2;
  return _r(_r({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
}
function Da(e2, t) {
  if (e2) return String(e2);
  if (typeof t == "string") return t;
}
var ex = (e2, t) => {
  if (t === "horizontal") return e2.chartX;
  if (t === "vertical") return e2.chartY;
}, tx = (e2, t) => t === "centric" ? e2.angle : e2.radius, Rt = (e2) => e2.layout.width, zt = (e2) => e2.layout.height, rx = (e2) => e2.layout.scale, Kh = (e2) => e2.layout.margin, Na = P((e2) => e2.cartesianAxis.xAxis, (e2) => Object.values(e2)), $a = P((e2) => e2.cartesianAxis.yAxis, (e2) => Object.values(e2)), nx = "data-recharts-item-index", ix = "data-recharts-item-id", zn = 60;
function us(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function si(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? us(Object(r), true).forEach(function(n) {
      ax(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : us(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function ax(e2, t, r) {
  return (t = ox(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function ox(e2) {
  var t = ux(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ux(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var lx = (e2) => e2.brush.height;
function cx(e2) {
  var t = $a(e2);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : zn;
      return r + i;
    }
    return r;
  }, 0);
}
function sx(e2) {
  var t = $a(e2);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : zn;
      return r + i;
    }
    return r;
  }, 0);
}
function fx(e2) {
  var t = Na(e2);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function dx(e2) {
  var t = Na(e2);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var _e = P([Rt, zt, Kh, lx, cx, sx, fx, dx, sh, zb], (e2, t, r, n, i, a, o, u, l, s) => {
  var c = { left: (r.left || 0) + i, right: (r.right || 0) + a }, f = { top: (r.top || 0) + o, bottom: (r.bottom || 0) + u }, d = si(si({}, f), c), v = d.bottom;
  d.bottom += n, d = Hw(d, l, s);
  var p = e2 - d.left - d.right, m = t - d.top - d.bottom;
  return si(si({ brushBottom: v }, d), {}, { width: Math.max(p, 0), height: Math.max(m, 0) });
}), vx = P(_e, (e2) => ({ x: e2.left, y: e2.top, width: e2.width, height: e2.height })), Uh = P(Rt, zt, (e2, t) => ({ x: 0, y: 0, width: e2, height: t })), hx = h.createContext(null), Te = () => h.useContext(hx) != null, La = (e2) => e2.brush, Ra = P([La, _e, Kh], (e2, t, r) => ({ height: e2.height, x: N(e2.x) ? e2.x : t.left, y: N(e2.y) ? e2.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0), width: N(e2.width) ? e2.width : t.width })), Hh = {}, qh = {}, Gh = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n, { signal: i, edges: a } = {}) {
    let o, u = null;
    const l = a != null && a.includes("leading"), s = a == null || a.includes("trailing"), c = () => {
      u !== null && (r.apply(o, u), o = void 0, u = null);
    }, f = () => {
      s && c(), m();
    };
    let d = null;
    const v = () => {
      d != null && clearTimeout(d), d = setTimeout(() => {
        d = null, f();
      }, n);
    }, p = () => {
      d !== null && (clearTimeout(d), d = null);
    }, m = () => {
      p(), o = void 0, u = null;
    }, y = () => {
      c();
    }, g = function(...w) {
      if (i == null ? void 0 : i.aborted) return;
      o = this, u = w;
      const b = d == null;
      v(), l && b && c();
    };
    return g.schedule = v, g.cancel = m, g.flush = y, i == null ? void 0 : i.addEventListener("abort", m, { once: true }), g;
  }
  e2.debounce = t;
})(Gh);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Gh;
  function r(n, i = 0, a = {}) {
    typeof a != "object" && (a = {});
    const { leading: o = false, trailing: u = true, maxWait: l } = a, s = Array(2);
    o && (s[0] = "leading"), u && (s[1] = "trailing");
    let c, f = null;
    const d = t.debounce(function(...m) {
      c = n.apply(this, m), f = null;
    }, i, { edges: s }), v = function(...m) {
      return l != null && (f === null && (f = Date.now()), Date.now() - f >= l) ? (c = n.apply(this, m), f = Date.now(), d.cancel(), d.schedule(), c) : (d.apply(this, m), c);
    }, p = () => (d.flush(), c);
    return v.cancel = d.cancel, v.flush = p, v;
  }
  e2.debounce = r;
})(qh);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = qh;
  function r(n, i = 0, a = {}) {
    const { leading: o = true, trailing: u = true } = a;
    return t.debounce(n, i, { leading: o, maxWait: i, trailing: u });
  }
  e2.throttle = r;
})(Hh);
var px = Hh.throttle;
const mx = Pt(px);
var Ri = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t)) if (r === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  else {
    var o = 0;
    console.warn(r.replace(/%s/g, () => i[o++]));
  }
}, Yh = (e2, t, r) => {
  var { width: n = "100%", height: i = "100%", aspect: a, maxHeight: o } = r, u = Tt(n) ? e2 : Number(n), l = Tt(i) ? t : Number(i);
  return a && a > 0 && (u ? l = u / a : l && (u = l * a), o && l != null && l > o && (l = o)), { calculatedWidth: u, calculatedHeight: l };
}, yx = { width: 0, height: 0, overflow: "visible" }, gx = { width: 0, overflowX: "visible" }, bx = { height: 0, overflowY: "visible" }, wx = {}, xx = (e2) => {
  var { width: t, height: r } = e2, n = Tt(t), i = Tt(r);
  return n && i ? yx : n ? gx : i ? bx : wx;
};
function Px(e2) {
  var { width: t, height: r, aspect: n } = e2, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = "100%", a = "100%") : i === void 0 ? i = n && n > 0 ? void 0 : "100%" : a === void 0 && (a = n && n > 0 ? void 0 : "100%"), { width: i, height: a };
}
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Jo.apply(null, arguments);
}
function ls(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cs(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ls(Object(r), true).forEach(function(n) {
      Ox(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ls(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Ox(e2, t, r) {
  return (t = Ax(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Ax(e2) {
  var t = Sx(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Sx(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Vh = h.createContext({ width: -1, height: -1 });
function Ex(e2) {
  return wt(e2.width) && wt(e2.height);
}
function Xh(e2) {
  var { children: t, width: r, height: n } = e2, i = h.useMemo(() => ({ width: r, height: n }), [r, n]);
  return Ex(i) ? h.createElement(Vh.Provider, { value: i }, t) : null;
}
var al = () => h.useContext(Vh), _x = h.forwardRef((e2, t) => {
  var { aspect: r, initialDimension: n = { width: -1, height: -1 }, width: i, height: a, minWidth: o = 0, minHeight: u, maxHeight: l, children: s, debounce: c = 0, id: f, className: d, onResize: v, style: p = {} } = e2, m = h.useRef(null), y = h.useRef();
  y.current = v, h.useImperativeHandle(t, () => m.current);
  var [g, w] = h.useState({ containerWidth: n.width, containerHeight: n.height }), b = h.useCallback((k, T) => {
    w((D) => {
      var E = Math.round(k), C = Math.round(T);
      return D.containerWidth === E && D.containerHeight === C ? D : { containerWidth: E, containerHeight: C };
    });
  }, []);
  h.useEffect(() => {
    if (m.current == null || typeof ResizeObserver > "u") return Dn;
    var k = (C) => {
      var R, { width: L, height: H } = C[0].contentRect;
      b(L, H), (R = y.current) === null || R === void 0 || R.call(y, L, H);
    };
    c > 0 && (k = mx(k, c, { trailing: true, leading: false }));
    var T = new ResizeObserver(k), { width: D, height: E } = m.current.getBoundingClientRect();
    return b(D, E), T.observe(m.current), () => {
      T.disconnect();
    };
  }, [b, c]);
  var { containerWidth: O, containerHeight: x } = g;
  Ri(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var { calculatedWidth: A, calculatedHeight: S } = Yh(O, x, { width: i, height: a, aspect: r, maxHeight: l });
  return Ri(A != null && A > 0 || S != null && S > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, A, S, i, a, o, u, r), h.createElement("div", { id: f ? "".concat(f) : void 0, className: B("recharts-responsive-container", d), style: cs(cs({}, p), {}, { width: i, height: a, minWidth: o, minHeight: u, maxHeight: l }), ref: m }, h.createElement("div", { style: xx({ width: i, height: a }) }, h.createElement(Xh, { width: A, height: S }, s)));
}), _N = h.forwardRef((e2, t) => {
  var r = al();
  if (wt(r.width) && wt(r.height)) return e2.children;
  var { width: n, height: i } = Px({ width: e2.width, height: e2.height, aspect: e2.aspect }), { calculatedWidth: a, calculatedHeight: o } = Yh(void 0, void 0, { width: n, height: i, aspect: e2.aspect, maxHeight: e2.maxHeight });
  return N(a) && N(o) ? h.createElement(Xh, { width: a, height: o }, e2.children) : h.createElement(_x, Jo({}, e2, { width: n, height: i, ref: t }));
});
function Zh(e2) {
  if (e2) return { x: e2.x, y: e2.y, upperWidth: "upperWidth" in e2 ? e2.upperWidth : e2.width, lowerWidth: "lowerWidth" in e2 ? e2.lowerWidth : e2.width, width: e2.width, height: e2.height };
}
var za = () => {
  var e2, t = Te(), r = I(vx), n = I(Ra), i = (e2 = I(La)) === null || e2 === void 0 ? void 0 : e2.padding;
  return !t || !n || !i ? r : { width: n.width - i.left - i.right, height: n.height - i.top - i.bottom, x: i.left, y: i.top };
}, jx = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 }, Qh = () => {
  var e2;
  return (e2 = I(_e)) !== null && e2 !== void 0 ? e2 : jx;
}, Jh = () => I(Rt), ep = () => I(zt), U = (e2) => e2.layout.layoutType, Bn = () => I(U), Cx = () => {
  var e2 = Bn();
  return e2 !== void 0;
}, Ba = (e2) => {
  var t = ie(), r = Te(), { width: n, height: i } = e2, a = al(), o = n, u = i;
  return a && (o = a.width > 0 ? a.width : n, u = a.height > 0 ? a.height : i), h.useEffect(() => {
    !r && wt(o) && wt(u) && t(zw({ width: o, height: u }));
  }, [t, r, o, u]), null;
}, tp = Symbol.for("immer-nothing"), ss = Symbol.for("immer-draftable"), Ye = Symbol.for("immer-state");
function ot(e2, ...t) {
  throw new Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var yn = Object.getPrototypeOf;
function Nr(e2) {
  return !!e2 && !!e2[Ye];
}
function pr(e2) {
  var _a2;
  return e2 ? rp(e2) || Array.isArray(e2) || !!e2[ss] || !!((_a2 = e2.constructor) == null ? void 0 : _a2[ss]) || Fn(e2) || Wa(e2) : false;
}
var kx = Object.prototype.constructor.toString(), fs = /* @__PURE__ */ new WeakMap();
function rp(e2) {
  if (!e2 || typeof e2 != "object") return false;
  const t = Object.getPrototypeOf(e2);
  if (t === null || t === Object.prototype) return true;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object) return true;
  if (typeof r != "function") return false;
  let n = fs.get(r);
  return n === void 0 && (n = Function.toString.call(r), fs.set(r, n)), n === kx;
}
function zi(e2, t, r = true) {
  Fa(e2) === 0 ? (r ? Reflect.ownKeys(e2) : Object.keys(e2)).forEach((i) => {
    t(i, e2[i], e2);
  }) : e2.forEach((n, i) => t(i, n, e2));
}
function Fa(e2) {
  const t = e2[Ye];
  return t ? t.type_ : Array.isArray(e2) ? 1 : Fn(e2) ? 2 : Wa(e2) ? 3 : 0;
}
function eu(e2, t) {
  return Fa(e2) === 2 ? e2.has(t) : Object.prototype.hasOwnProperty.call(e2, t);
}
function np(e2, t, r) {
  const n = Fa(e2);
  n === 2 ? e2.set(t, r) : n === 3 ? e2.add(r) : e2[t] = r;
}
function Tx(e2, t) {
  return e2 === t ? e2 !== 0 || 1 / e2 === 1 / t : e2 !== e2 && t !== t;
}
function Fn(e2) {
  return e2 instanceof Map;
}
function Wa(e2) {
  return e2 instanceof Set;
}
function ir(e2) {
  return e2.copy_ || e2.base_;
}
function tu(e2, t) {
  if (Fn(e2)) return new Map(e2);
  if (Wa(e2)) return new Set(e2);
  if (Array.isArray(e2)) return Array.prototype.slice.call(e2);
  const r = rp(e2);
  if (t === true || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e2);
    delete n[Ye];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === false && (u.writable = true, u.configurable = true), (u.get || u.set) && (n[o] = { configurable: true, writable: true, enumerable: u.enumerable, value: e2[o] });
    }
    return Object.create(yn(e2), n);
  } else {
    const n = yn(e2);
    if (n !== null && r) return { ...e2 };
    const i = Object.create(n);
    return Object.assign(i, e2);
  }
}
function ol(e2, t = false) {
  return Ka(e2) || Nr(e2) || !pr(e2) || (Fa(e2) > 1 && Object.defineProperties(e2, { set: fi, add: fi, clear: fi, delete: fi }), Object.freeze(e2), t && Object.values(e2).forEach((r) => ol(r, true))), e2;
}
function Mx() {
  ot(2);
}
var fi = { value: Mx };
function Ka(e2) {
  return e2 === null || typeof e2 != "object" ? true : Object.isFrozen(e2);
}
var Ix = {};
function mr(e2) {
  const t = Ix[e2];
  return t || ot(0, e2), t;
}
var gn;
function ip() {
  return gn;
}
function Dx(e2, t) {
  return { drafts_: [], parent_: e2, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function ds(e2, t) {
  t && (mr("Patches"), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t);
}
function ru(e2) {
  nu(e2), e2.drafts_.forEach(Nx), e2.drafts_ = null;
}
function nu(e2) {
  e2 === gn && (gn = e2.parent_);
}
function vs(e2) {
  return gn = Dx(gn, e2);
}
function Nx(e2) {
  const t = e2[Ye];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function hs(e2, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e2 !== void 0 && e2 !== r ? (r[Ye].modified_ && (ru(t), ot(4)), pr(e2) && (e2 = Bi(t, e2), t.parent_ || Fi(t, e2)), t.patches_ && mr("Patches").generateReplacementPatches_(r[Ye].base_, e2, t.patches_, t.inversePatches_)) : e2 = Bi(t, r, []), ru(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e2 !== tp ? e2 : void 0;
}
function Bi(e2, t, r) {
  if (Ka(t)) return t;
  const n = e2.immer_.shouldUseStrictIteration(), i = t[Ye];
  if (!i) return zi(t, (a, o) => ps(e2, i, t, a, o, r), n), t;
  if (i.scope_ !== e2) return t;
  if (!i.modified_) return Fi(e2, i.base_, true), i.base_;
  if (!i.finalized_) {
    i.finalized_ = true, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, u = false;
    i.type_ === 3 && (o = new Set(a), a.clear(), u = true), zi(o, (l, s) => ps(e2, i, a, l, s, r, u), n), Fi(e2, a, false), r && e2.patches_ && mr("Patches").generatePatches_(i, r, e2.patches_, e2.inversePatches_);
  }
  return i.copy_;
}
function ps(e2, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o) return;
  const u = Ka(i);
  if (!(u && !o)) {
    if (Nr(i)) {
      const l = a && t && t.type_ !== 3 && !eu(t.assigned_, n) ? a.concat(n) : void 0, s = Bi(e2, i, l);
      if (np(r, n, s), Nr(s)) e2.canAutoFreeze_ = false;
      else return;
    } else o && r.add(i);
    if (pr(i) && !u) {
      if (!e2.immer_.autoFreeze_ && e2.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && u) return;
      Bi(e2, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Fn(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && Fi(e2, i);
    }
  }
}
function Fi(e2, t, r = false) {
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && ol(t, r);
}
function $x(e2, t) {
  const r = Array.isArray(e2), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : ip(), modified_: false, finalized_: false, assigned_: {}, parent_: t, base_: e2, draft_: null, copy_: null, revoke_: null, isManual_: false };
  let i = n, a = ul;
  r && (i = [n], a = bn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var ul = { get(e2, t) {
  if (t === Ye) return e2;
  const r = ir(e2);
  if (!eu(r, t)) return Lx(e2, r, t);
  const n = r[t];
  return e2.finalized_ || !pr(n) ? n : n === bo(e2.base_, t) ? (wo(e2), e2.copy_[t] = au(n, e2)) : n;
}, has(e2, t) {
  return t in ir(e2);
}, ownKeys(e2) {
  return Reflect.ownKeys(ir(e2));
}, set(e2, t, r) {
  const n = ap(ir(e2), t);
  if (n == null ? void 0 : n.set) return n.set.call(e2.draft_, r), true;
  if (!e2.modified_) {
    const i = bo(ir(e2), t), a = i == null ? void 0 : i[Ye];
    if (a && a.base_ === r) return e2.copy_[t] = r, e2.assigned_[t] = false, true;
    if (Tx(r, i) && (r !== void 0 || eu(e2.base_, t))) return true;
    wo(e2), iu(e2);
  }
  return e2.copy_[t] === r && (r !== void 0 || t in e2.copy_) || Number.isNaN(r) && Number.isNaN(e2.copy_[t]) || (e2.copy_[t] = r, e2.assigned_[t] = true), true;
}, deleteProperty(e2, t) {
  return bo(e2.base_, t) !== void 0 || t in e2.base_ ? (e2.assigned_[t] = false, wo(e2), iu(e2)) : delete e2.assigned_[t], e2.copy_ && delete e2.copy_[t], true;
}, getOwnPropertyDescriptor(e2, t) {
  const r = ir(e2), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e2.type_ !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty() {
  ot(11);
}, getPrototypeOf(e2) {
  return yn(e2.base_);
}, setPrototypeOf() {
  ot(12);
} }, bn = {};
zi(ul, (e2, t) => {
  bn[e2] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
bn.deleteProperty = function(e2, t) {
  return bn.set.call(this, e2, t, void 0);
};
bn.set = function(e2, t, r) {
  return ul.set.call(this, e2[0], t, r, e2[0]);
};
function bo(e2, t) {
  const r = e2[Ye];
  return (r ? ir(r) : e2)[t];
}
function Lx(e2, t, r) {
  var _a2;
  const n = ap(t, r);
  return n ? "value" in n ? n.value : (_a2 = n.get) == null ? void 0 : _a2.call(e2.draft_) : void 0;
}
function ap(e2, t) {
  if (!(t in e2)) return;
  let r = yn(e2);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = yn(r);
  }
}
function iu(e2) {
  e2.modified_ || (e2.modified_ = true, e2.parent_ && iu(e2.parent_));
}
function wo(e2) {
  e2.copy_ || (e2.copy_ = tu(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
var Rx = class {
  constructor(e2) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = true, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(l = a, ...s) {
          return o.produce(l, (c) => r.call(this, c, ...s));
        };
      }
      typeof r != "function" && ot(6), n !== void 0 && typeof n != "function" && ot(7);
      let i;
      if (pr(t)) {
        const a = vs(this), o = au(t, void 0);
        let u = true;
        try {
          i = r(o), u = false;
        } finally {
          u ? ru(a) : nu(a);
        }
        return ds(a, n), hs(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === tp && (i = void 0), this.autoFreeze_ && ol(i, true), n) {
          const a = [], o = [];
          mr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else ot(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function") return (o, ...u) => this.produceWithPatches(o, (l) => t(l, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (e2 == null ? void 0 : e2.autoFreeze) == "boolean" && this.setAutoFreeze(e2.autoFreeze), typeof (e2 == null ? void 0 : e2.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e2.useStrictShallowCopy), typeof (e2 == null ? void 0 : e2.useStrictIteration) == "boolean" && this.setUseStrictIteration(e2.useStrictIteration);
  }
  createDraft(e2) {
    pr(e2) || ot(8), Nr(e2) && (e2 = zx(e2));
    const t = vs(this), r = au(e2, void 0);
    return r[Ye].isManual_ = true, nu(t), r;
  }
  finishDraft(e2, t) {
    const r = e2 && e2[Ye];
    (!r || !r.isManual_) && ot(9);
    const { scope_: n } = r;
    return ds(n, t), hs(void 0, n);
  }
  setAutoFreeze(e2) {
    this.autoFreeze_ = e2;
  }
  setUseStrictShallowCopy(e2) {
    this.useStrictShallowCopy_ = e2;
  }
  setUseStrictIteration(e2) {
    this.useStrictIteration_ = e2;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e2, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e2 = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = mr("Patches").applyPatches_;
    return Nr(e2) ? n(e2, t) : this.produce(e2, (i) => n(i, t));
  }
};
function au(e2, t) {
  const r = Fn(e2) ? mr("MapSet").proxyMap_(e2, t) : Wa(e2) ? mr("MapSet").proxySet_(e2, t) : $x(e2, t);
  return (t ? t.scope_ : ip()).drafts_.push(r), r;
}
function zx(e2) {
  return Nr(e2) || ot(10, e2), op(e2);
}
function op(e2) {
  if (!pr(e2) || Ka(e2)) return e2;
  const t = e2[Ye];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = tu(e2, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = tu(e2, true);
  return zi(r, (i, a) => {
    np(r, i, op(a));
  }, n), t && (t.finalized_ = false), r;
}
var Bx = new Rx();
Bx.produce;
var Fx = { settings: { layout: "horizontal", align: "center", verticalAlign: "middle", itemSorter: "value" }, size: { width: 0, height: 0 }, payload: [] }, up = Fe({ name: "legend", initialState: Fx, reducers: { setLegendSize(e2, t) {
  e2.size.width = t.payload.width, e2.size.height = t.payload.height;
}, setLegendSettings(e2, t) {
  e2.settings.align = t.payload.align, e2.settings.layout = t.payload.layout, e2.settings.verticalAlign = t.payload.verticalAlign, e2.settings.itemSorter = t.payload.itemSorter;
}, addLegendPayload: { reducer(e2, t) {
  e2.payload.push(t.payload);
}, prepare: te() }, replaceLegendPayload: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload, i = ct(e2).payload.indexOf(r);
  i > -1 && (e2.payload[i] = n);
}, prepare: te() }, removeLegendPayload: { reducer(e2, t) {
  var r = ct(e2).payload.indexOf(t.payload);
  r > -1 && e2.payload.splice(r, 1);
}, prepare: te() } } }), { setLegendSize: jN, setLegendSettings: CN, addLegendPayload: lp, replaceLegendPayload: cp, removeLegendPayload: sp } = up.actions, Wx = up.reducer;
function ou() {
  return ou = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, ou.apply(null, arguments);
}
function ms(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xo(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ms(Object(r), true).forEach(function(n) {
      Kx(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ms(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Kx(e2, t, r) {
  return (t = Ux(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Ux(e2) {
  var t = Hx(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hx(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function qx(e2) {
  return Array.isArray(e2) && bt(e2[0]) && bt(e2[1]) ? e2.join(" ~ ") : e2;
}
var Gx = (e2) => {
  var { separator: t = " : ", contentStyle: r = {}, itemStyle: n = {}, labelStyle: i = {}, payload: a, formatter: o, itemSorter: u, wrapperClassName: l, labelClassName: s, label: c, labelFormatter: f, accessibilityLayer: d = false } = e2, v = () => {
    if (a && a.length) {
      var x = { padding: 0, margin: 0 }, A = (u ? Sa(a, u) : a).map((S, k) => {
        if (S.type === "none") return null;
        var T = S.formatter || o || qx, { value: D, name: E } = S, C = D, R = E;
        if (T) {
          var L = T(D, E, S, k, a);
          if (Array.isArray(L)) [C, R] = L;
          else if (L != null) C = L;
          else return null;
        }
        var H = xo({ display: "block", paddingTop: 4, paddingBottom: 4, color: S.color || "#000" }, n);
        return h.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(k), style: H }, bt(R) ? h.createElement("span", { className: "recharts-tooltip-item-name" }, R) : null, bt(R) ? h.createElement("span", { className: "recharts-tooltip-item-separator" }, t) : null, h.createElement("span", { className: "recharts-tooltip-item-value" }, C), h.createElement("span", { className: "recharts-tooltip-item-unit" }, S.unit || ""));
      });
      return h.createElement("ul", { className: "recharts-tooltip-item-list", style: x }, A);
    }
    return null;
  }, p = xo({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, r), m = xo({ margin: 0 }, i), y = !fe(c), g = y ? c : "", w = B("recharts-default-tooltip", l), b = B("recharts-tooltip-label", s);
  y && f && a !== void 0 && a !== null && (g = f(c, a));
  var O = d ? { role: "status", "aria-live": "assertive" } : {};
  return h.createElement("div", ou({ className: w, style: p }, O), h.createElement("p", { className: b, style: m }, h.isValidElement(g) ? g : "".concat(g)), v());
}, en = "recharts-tooltip-wrapper", Yx = { visibility: "hidden" };
function Vx(e2) {
  var { coordinate: t, translateX: r, translateY: n } = e2;
  return B(en, { ["".concat(en, "-right")]: N(r) && t && N(t.x) && r >= t.x, ["".concat(en, "-left")]: N(r) && t && N(t.x) && r < t.x, ["".concat(en, "-bottom")]: N(n) && t && N(t.y) && n >= t.y, ["".concat(en, "-top")]: N(n) && t && N(t.y) && n < t.y });
}
function ys(e2) {
  var { allowEscapeViewBox: t, coordinate: r, key: n, offsetTopLeft: i, position: a, reverseDirection: o, tooltipDimension: u, viewBox: l, viewBoxDimension: s } = e2;
  if (a && N(a[n])) return a[n];
  var c = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n]) return o[n] ? c : f;
  var d = l[n];
  if (d == null) return 0;
  if (o[n]) {
    var v = c, p = d;
    return v < p ? Math.max(f, d) : Math.max(c, d);
  }
  if (s == null) return 0;
  var m = f + u, y = d + s;
  return m > y ? Math.max(c, d) : Math.max(f, d);
}
function Xx(e2) {
  var { translateX: t, translateY: r, useTranslate3d: n } = e2;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function Zx(e2) {
  var { allowEscapeViewBox: t, coordinate: r, offsetTopLeft: n, position: i, reverseDirection: a, tooltipBox: o, useTranslate3d: u, viewBox: l } = e2, s, c, f;
  return o.height > 0 && o.width > 0 && r ? (c = ys({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: l, viewBoxDimension: l.width }), f = ys({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: l, viewBoxDimension: l.height }), s = Xx({ translateX: c, translateY: f, useTranslate3d: u })) : s = Yx, { cssProperties: s, cssClasses: Vx({ translateX: c, translateY: f, coordinate: r }) };
}
function gs(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function di(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gs(Object(r), true).forEach(function(n) {
      uu(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : gs(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function uu(e2, t, r) {
  return (t = Qx(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Qx(e2) {
  var t = Jx(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Jx(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
class eP extends h.PureComponent {
  constructor() {
    super(...arguments), uu(this, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 } }), uu(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, i, a;
        this.setState({ dismissed: true, dismissedAtCoordinate: { x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0, y: (i = (a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0 } });
      }
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed && (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || ((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  }
  render() {
    var { active: t, allowEscapeViewBox: r, animationDuration: n, animationEasing: i, children: a, coordinate: o, hasPayload: u, isAnimationActive: l, offset: s, position: c, reverseDirection: f, useTranslate3d: d, viewBox: v, wrapperStyle: p, lastBoundingBox: m, innerRef: y, hasPortalFromProps: g } = this.props, { cssClasses: w, cssProperties: b } = Zx({ allowEscapeViewBox: r, coordinate: o, offsetTopLeft: s, position: c, reverseDirection: f, tooltipBox: { height: m.height, width: m.width }, useTranslate3d: d, viewBox: v }), O = g ? {} : di(di({ transition: l && t ? "transform ".concat(n, "ms ").concat(i) : void 0 }, b), {}, { pointerEvents: "none", visibility: !this.state.dismissed && t && u ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }), x = di(di({}, O), {}, { visibility: !this.state.dismissed && t && u ? "visible" : "hidden" }, p);
    return h.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: w, style: x, ref: y }, a);
  }
}
var fp = () => {
  var e2;
  return (e2 = I((t) => t.rootProps.accessibilityLayer)) !== null && e2 !== void 0 ? e2 : true;
};
function lu() {
  return lu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, lu.apply(null, arguments);
}
function bs(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ws(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bs(Object(r), true).forEach(function(n) {
      tP(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : bs(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function tP(e2, t, r) {
  return (t = rP(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function rP(e2) {
  var t = nP(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nP(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var xs = { curveBasisClosed: A0, curveBasisOpen: S0, curveBasis: O0, curveBumpX: c0, curveBumpY: s0, curveLinearClosed: E0, curveLinear: ma, curveMonotoneX: _0, curveMonotoneY: j0, curveNatural: C0, curveStep: k0, curveStepAfter: M0, curveStepBefore: T0 }, Wi = (e2) => ve(e2.x) && ve(e2.y), Ps = (e2) => e2.base != null && Wi(e2.base) && Wi(e2), tn = (e2) => e2.x, rn = (e2) => e2.y, iP = (e2, t) => {
  if (typeof e2 == "function") return e2;
  var r = "curve".concat(In(e2));
  return (r === "curveMonotone" || r === "curveBump") && t ? xs["".concat(r).concat(t === "vertical" ? "Y" : "X")] : xs[r] || ma;
}, aP = (e2) => {
  var { type: t = "linear", points: r = [], baseLine: n, layout: i, connectNulls: a = false } = e2, o = iP(t, i), u = a ? r.filter(Wi) : r, l;
  if (Array.isArray(n)) {
    var s = r.map((v, p) => ws(ws({}, v), {}, { base: n[p] }));
    i === "vertical" ? l = ii().y(rn).x1(tn).x0((v) => v.base.x) : l = ii().x(tn).y1(rn).y0((v) => v.base.y);
    var c = l.defined(Ps).curve(o), f = a ? s.filter(Ps) : s;
    return c(f);
  }
  i === "vertical" && N(n) ? l = ii().y(rn).x1(tn).x0(n) : N(n) ? l = ii().x(tn).y1(rn).y0(n) : l = wv().x(tn).y(rn);
  var d = l.defined(Wi).curve(o);
  return d(u);
}, dp = (e2) => {
  var { className: t, points: r, path: n, pathRef: i } = e2, a = Bn();
  if ((!r || !r.length) && !n) return null;
  var o = { type: e2.type, points: e2.points, baseLine: e2.baseLine, layout: e2.layout || a, connectNulls: e2.connectNulls }, u = r && r.length ? aP(o) : n;
  return h.createElement("path", lu({}, le(e2), Ru(e2), { className: B("recharts-curve", t), d: u === null ? void 0 : u, ref: i }));
}, oP = ["x", "y", "top", "left", "width", "height", "className"];
function cu() {
  return cu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, cu.apply(null, arguments);
}
function Os(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uP(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Os(Object(r), true).forEach(function(n) {
      lP(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Os(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function lP(e2, t, r) {
  return (t = cP(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function cP(e2) {
  var t = sP(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sP(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function fP(e2, t) {
  if (e2 == null) return {};
  var r, n, i = dP(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function dP(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var vP = (e2, t, r, n, i, a) => "M".concat(e2, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), hP = (e2) => {
  var { x: t = 0, y: r = 0, top: n = 0, left: i = 0, width: a = 0, height: o = 0, className: u } = e2, l = fP(e2, oP), s = uP({ x: t, y: r, top: n, left: i, width: a, height: o }, l);
  return !N(t) || !N(r) || !N(a) || !N(o) || !N(n) || !N(i) ? null : h.createElement("path", cu({}, se(s), { className: B("recharts-cross", u), d: vP(t, r, a, o, n, i) }));
};
function pP(e2, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e2 === "horizontal" ? t.x - i : r.left + 0.5, y: e2 === "horizontal" ? r.top + 0.5 : t.y - i, width: e2 === "horizontal" ? n : r.width - 1, height: e2 === "horizontal" ? r.height - 1 : n };
}
function As(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ss(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? As(Object(r), true).forEach(function(n) {
      mP(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : As(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function mP(e2, t, r) {
  return (t = yP(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function yP(e2) {
  var t = gP(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gP(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var bP = (e2) => e2.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), vp = (e2, t, r) => e2.map((n) => "".concat(bP(n), " ").concat(t, "ms ").concat(r)).join(","), wP = (e2, t) => [Object.keys(e2), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), wn = (e2, t) => Object.keys(t).reduce((r, n) => Ss(Ss({}, r), {}, { [n]: e2(n, t[n]) }), {});
function Es(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function he(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Es(Object(r), true).forEach(function(n) {
      xP(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Es(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function xP(e2, t, r) {
  return (t = PP(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function PP(e2) {
  var t = OP(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function OP(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Ki = (e2, t, r) => e2 + (t - e2) * r, su = (e2) => {
  var { from: t, to: r } = e2;
  return t !== r;
}, hp = (e2, t, r) => {
  var n = wn((i, a) => {
    if (su(a)) {
      var [o, u] = e2(a.from, a.to, a.velocity);
      return he(he({}, a), {}, { from: o, velocity: u });
    }
    return a;
  }, t);
  return r < 1 ? wn((i, a) => su(a) && n[i] != null ? he(he({}, a), {}, { velocity: Ki(a.velocity, n[i].velocity, r), from: Ki(a.from, n[i].from, r) }) : a, t) : hp(e2, n, r - 1);
};
function AP(e2, t, r, n, i, a) {
  var o, u = n.reduce((d, v) => he(he({}, d), {}, { [v]: { from: e2[v], velocity: 0, to: t[v] } }), {}), l = () => wn((d, v) => v.from, u), s = () => !Object.values(u).filter(su).length, c = null, f = (d) => {
    o || (o = d);
    var v = d - o, p = v / r.dt;
    u = hp(r, u, p), i(he(he(he({}, e2), t), l())), o = d, s() || (c = a.setTimeout(f));
  };
  return () => (c = a.setTimeout(f), () => {
    var d;
    (d = c) === null || d === void 0 || d();
  });
}
function SP(e2, t, r, n, i, a, o) {
  var u = null, l = i.reduce((f, d) => {
    var v = e2[d], p = t[d];
    return v == null || p == null ? f : he(he({}, f), {}, { [d]: [v, p] });
  }, {}), s, c = (f) => {
    s || (s = f);
    var d = (f - s) / n, v = wn((m, y) => Ki(...y, r(d)), l);
    if (a(he(he(he({}, e2), t), v)), d < 1) u = o.setTimeout(c);
    else {
      var p = wn((m, y) => Ki(...y, r(1)), l);
      a(he(he(he({}, e2), t), p));
    }
  };
  return () => (u = o.setTimeout(c), () => {
    var f;
    (f = u) === null || f === void 0 || f();
  });
}
const EP = (e2, t, r, n, i, a) => {
  var o = wP(e2, t);
  return r == null ? () => (i(he(he({}, e2), t)), () => {
  }) : r.isStepper === true ? AP(e2, t, r, o, i, a) : SP(e2, t, r, n, o, i, a);
};
var Ui = 1e-4, pp = (e2, t) => [0, 3 * e2, 3 * t - 6 * e2, 3 * e2 - 3 * t + 1], mp = (e2, t) => e2.map((r, n) => r * t ** n).reduce((r, n) => r + n), _s = (e2, t) => (r) => {
  var n = pp(e2, t);
  return mp(n, r);
}, _P = (e2, t) => (r) => {
  var n = pp(e2, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return mp(i, r);
}, jP = (e2) => {
  var t, r = e2.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier") return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4) return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, CP = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (r.length === 1) switch (r[0]) {
    case "linear":
      return [0, 0, 1, 1];
    case "ease":
      return [0.25, 0.1, 0.25, 1];
    case "ease-in":
      return [0.42, 0, 1, 1];
    case "ease-out":
      return [0.42, 0, 0.58, 1];
    case "ease-in-out":
      return [0, 0, 0.58, 1];
    default: {
      var i = jP(r[0]);
      if (i) return i;
    }
  }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, kP = (e2, t, r, n) => {
  var i = _s(e2, r), a = _s(t, n), o = _P(e2, r), u = (s) => s > 1 ? 1 : s < 0 ? 0 : s, l = (s) => {
    for (var c = s > 1 ? 1 : s, f = c, d = 0; d < 8; ++d) {
      var v = i(f) - c, p = o(f);
      if (Math.abs(v - c) < Ui || p < Ui) return a(f);
      f = u(f - v / p);
    }
    return a(f);
  };
  return l.isStepper = false, l;
}, js = function() {
  return kP(...CP(...arguments));
}, TP = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { stiff: r = 100, damping: n = 8, dt: i = 17 } = t, a = (o, u, l) => {
    var s = -(o - u) * r, c = l * n, f = l + (s - c) * i / 1e3, d = l * i / 1e3 + o;
    return Math.abs(d - u) < Ui && Math.abs(f) < Ui ? [u, 0] : [d, f];
  };
  return a.isStepper = true, a.dt = i, a;
}, MP = (e2) => {
  if (typeof e2 == "string") switch (e2) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return js(e2);
    case "spring":
      return TP();
    default:
      if (e2.split("(")[0] === "cubic-bezier") return js(e2);
  }
  return typeof e2 == "function" ? e2 : null;
};
function IP(e2) {
  var t, r = () => null, n = false, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length) return;
        var u = o, [l, ...s] = u;
        if (typeof l == "number") {
          i = e2.setTimeout(a.bind(null, s), l);
          return;
        }
        a(l), i = e2.setTimeout(a.bind(null, s));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return { stop: () => {
    n = true;
  }, start: (o) => {
    n = false, i && (i(), i = null), a(o);
  }, subscribe: (o) => (r = o, () => {
    r = () => null;
  }), getTimeoutController: () => e2 };
}
class DP {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function NP() {
  return IP(new DP());
}
var $P = h.createContext(NP);
function LP(e2, t) {
  var r = h.useContext($P);
  return h.useMemo(() => t ?? r(e2), [e2, t, r]);
}
var RP = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), Ua = { isSsr: RP() }, zP = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} }, Cs = { t: 0 }, Po = { t: 1 };
function Ha(e2) {
  var t = me(e2, zP), { isActive: r, canBegin: n, duration: i, easing: a, begin: o, onAnimationEnd: u, onAnimationStart: l, children: s } = t, c = r === "auto" ? !Ua.isSsr : r, f = LP(t.animationId, t.animationManager), [d, v] = h.useState(c ? Cs : Po), p = h.useRef(null);
  return h.useEffect(() => {
    c || v(Po);
  }, [c]), h.useEffect(() => {
    if (!c || !n) return Dn;
    var m = EP(Cs, Po, MP(a), i, v, f.getTimeoutController()), y = () => {
      p.current = m();
    };
    return f.start([l, o, y, i, u]), () => {
      f.stop(), p.current && p.current(), u();
    };
  }, [c, n, i, a, o, l, u, f]), s(d.t);
}
function qa(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = h.useRef(vn(t)), n = h.useRef(e2);
  return n.current !== e2 && (r.current = vn(t), n.current = e2), r.current;
}
var BP = ["radius"], FP = ["radius"], ks, Ts, Ms, Is, Ds, Ns, $s, Ls, Rs, zs;
function Bs(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fs(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bs(Object(r), true).forEach(function(n) {
      WP(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Bs(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function WP(e2, t, r) {
  return (t = KP(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function KP(e2) {
  var t = UP(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UP(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Hi.apply(null, arguments);
}
function Ws(e2, t) {
  if (e2 == null) return {};
  var r, n, i = HP(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function HP(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function dt(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var Ks = (e2, t, r, n, i) => {
  var a = Gt(r), o = Gt(n), u = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), l = o >= 0 ? 1 : -1, s = a >= 0 ? 1 : -1, c = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, f;
  if (u > 0 && i instanceof Array) {
    for (var d = [0, 0, 0, 0], v = 0, p = 4; v < p; v++) d[v] = i[v] > u ? u : i[v];
    f = ne(ks || (ks = dt(["M", ",", ""])), e2, t + l * d[0]), d[0] > 0 && (f += ne(Ts || (Ts = dt(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], c, e2 + s * d[0], t)), f += ne(Ms || (Ms = dt(["L ", ",", ""])), e2 + r - s * d[1], t), d[1] > 0 && (f += ne(Is || (Is = dt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], c, e2 + r, t + l * d[1])), f += ne(Ds || (Ds = dt(["L ", ",", ""])), e2 + r, t + n - l * d[2]), d[2] > 0 && (f += ne(Ns || (Ns = dt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], c, e2 + r - s * d[2], t + n)), f += ne($s || ($s = dt(["L ", ",", ""])), e2 + s * d[3], t + n), d[3] > 0 && (f += ne(Ls || (Ls = dt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], c, e2, t + n - l * d[3])), f += "Z";
  } else if (u > 0 && i === +i && i > 0) {
    var m = Math.min(u, i);
    f = ne(Rs || (Rs = dt(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e2, t + l * m, m, m, c, e2 + s * m, t, e2 + r - s * m, t, m, m, c, e2 + r, t + l * m, e2 + r, t + n - l * m, m, m, c, e2 + r - s * m, t + n, e2 + s * m, t + n, m, m, c, e2, t + n - l * m);
  } else f = ne(zs || (zs = dt(["M ", ",", " h ", " v ", " h ", " Z"])), e2, t, r, n, -r);
  return f;
}, Us = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, yp = (e2) => {
  var t = me(e2, Us), r = h.useRef(null), [n, i] = h.useState(-1);
  h.useEffect(() => {
    if (r.current && r.current.getTotalLength) try {
      var F = r.current.getTotalLength();
      F && i(F);
    } catch {
    }
  }, []);
  var { x: a, y: o, width: u, height: l, radius: s, className: c } = t, { animationEasing: f, animationDuration: d, animationBegin: v, isAnimationActive: p, isUpdateAnimationActive: m } = t, y = h.useRef(u), g = h.useRef(l), w = h.useRef(a), b = h.useRef(o), O = h.useMemo(() => ({ x: a, y: o, width: u, height: l, radius: s }), [a, o, u, l, s]), x = qa(O, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || l !== +l || u === 0 || l === 0) return null;
  var A = B("recharts-rectangle", c);
  if (!m) {
    var S = se(t), { radius: k } = S, T = Ws(S, BP);
    return h.createElement("path", Hi({}, T, { x: Gt(a), y: Gt(o), width: Gt(u), height: Gt(l), radius: typeof s == "number" ? s : void 0, className: A, d: Ks(a, o, u, l, s) }));
  }
  var D = y.current, E = g.current, C = w.current, R = b.current, L = "0px ".concat(n === -1 ? 1 : n, "px"), H = "".concat(n, "px 0px"), J = vp(["strokeDasharray"], d, typeof f == "string" ? f : Us.animationEasing);
  return h.createElement(Ha, { animationId: x, key: x, canBegin: n > 0, duration: d, easing: f, isActive: m, begin: v }, (F) => {
    var G = Oe(D, u, F), $ = Oe(E, l, F), De = Oe(C, a, F), We = Oe(R, o, F);
    r.current && (y.current = G, g.current = $, w.current = De, b.current = We);
    var Ne;
    p ? F > 0 ? Ne = { transition: J, strokeDasharray: H } : Ne = { strokeDasharray: L } : Ne = { strokeDasharray: H };
    var Ot = se(t), { radius: Xe } = Ot, tr = Ws(Ot, FP);
    return h.createElement("path", Hi({}, tr, { radius: typeof s == "number" ? s : void 0, className: A, d: Ks(De, We, G, $, s), ref: r, style: Fs(Fs({}, Ne), t.style) }));
  });
};
function Hs(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qs(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hs(Object(r), true).forEach(function(n) {
      qP(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function qP(e2, t, r) {
  return (t = GP(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function GP(e2) {
  var t = YP(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YP(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var qi = Math.PI / 180, Gi = (e2) => e2 * Math.PI / 180, VP = (e2) => e2 * 180 / Math.PI, Y = (e2, t, r, n) => ({ x: e2 + Math.cos(-qi * n) * r, y: t + Math.sin(-qi * n) * r }), XP = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, ZP = (e2, t) => {
  var { x: r, y: n } = e2, { x: i, y: a } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, QP = (e2, t) => {
  var { x: r, y: n } = e2, { cx: i, cy: a } = t, o = ZP({ x: r, y: n }, { x: i, y: a });
  if (o <= 0) return { radius: o, angle: 0 };
  var u = (r - i) / o, l = Math.acos(u);
  return n > a && (l = 2 * Math.PI - l), { radius: o, angle: VP(l), angleInRadian: l };
}, JP = (e2) => {
  var { startAngle: t, endAngle: r } = e2, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return { startAngle: t - a * 360, endAngle: r - a * 360 };
}, eO = (e2, t) => {
  var { startAngle: r, endAngle: n } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e2 + o * 360;
}, tO = (e2, t) => {
  var { chartX: r, chartY: n } = e2, { radius: i, angle: a } = QP({ x: r, y: n }, t), { innerRadius: o, outerRadius: u } = t;
  if (i < o || i > u || i === 0) return null;
  var { startAngle: l, endAngle: s } = JP(t), c = a, f;
  if (l <= s) {
    for (; c > s; ) c -= 360;
    for (; c < l; ) c += 360;
    f = c >= l && c <= s;
  } else {
    for (; c > l; ) c -= 360;
    for (; c < s; ) c += 360;
    f = c >= s && c <= l;
  }
  return f ? qs(qs({}, t), {}, { radius: i, angle: eO(c, t) }) : null;
}, gp = (e2) => !h.isValidElement(e2) && typeof e2 != "function" && typeof e2 != "boolean" && e2 != null ? e2.className : "";
function bp(e2) {
  var { cx: t, cy: r, radius: n, startAngle: i, endAngle: a } = e2, o = Y(t, r, n, i), u = Y(t, r, n, a);
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
var Gs, Ys, Vs, Xs, Zs, Qs, Js;
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, fu.apply(null, arguments);
}
function or(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var rO = (e2, t) => {
  var r = et(t - e2), n = Math.min(Math.abs(t - e2), 359.999);
  return r * n;
}, vi = (e2) => {
  var { cx: t, cy: r, radius: n, angle: i, sign: a, isExternal: o, cornerRadius: u, cornerIsExternal: l } = e2, s = u * (o ? 1 : -1) + n, c = Math.asin(u / s) / qi, f = l ? i : i + a * c, d = Y(t, r, s, f), v = Y(t, r, n, f), p = l ? i - a * c : i, m = Y(t, r, s * Math.cos(c * qi), p);
  return { center: d, circleTangency: v, lineTangency: m, theta: c };
}, wp = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o } = e2, u = rO(a, o), l = a + u, s = Y(t, r, i, a), c = Y(t, r, i, l), f = ne(Gs || (Gs = or(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), s.x, s.y, i, i, +(Math.abs(u) > 180), +(a > l), c.x, c.y);
  if (n > 0) {
    var d = Y(t, r, n, a), v = Y(t, r, n, l);
    f += ne(Ys || (Ys = or(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), v.x, v.y, n, n, +(Math.abs(u) > 180), +(a <= l), d.x, d.y);
  } else f += ne(Vs || (Vs = or(["L ", ",", " Z"])), t, r);
  return f;
}, nO = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, cornerRadius: a, forceCornerRadius: o, cornerIsExternal: u, startAngle: l, endAngle: s } = e2, c = et(s - l), { circleTangency: f, lineTangency: d, theta: v } = vi({ cx: t, cy: r, radius: i, angle: l, sign: c, cornerRadius: a, cornerIsExternal: u }), { circleTangency: p, lineTangency: m, theta: y } = vi({ cx: t, cy: r, radius: i, angle: s, sign: -c, cornerRadius: a, cornerIsExternal: u }), g = u ? Math.abs(l - s) : Math.abs(l - s) - v - y;
  if (g < 0) return o ? ne(Xs || (Xs = or(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : wp({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: l, endAngle: s });
  var w = ne(Zs || (Zs = or(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(c < 0), f.x, f.y, i, i, +(g > 180), +(c < 0), p.x, p.y, a, a, +(c < 0), m.x, m.y);
  if (n > 0) {
    var { circleTangency: b, lineTangency: O, theta: x } = vi({ cx: t, cy: r, radius: n, angle: l, sign: c, isExternal: true, cornerRadius: a, cornerIsExternal: u }), { circleTangency: A, lineTangency: S, theta: k } = vi({ cx: t, cy: r, radius: n, angle: s, sign: -c, isExternal: true, cornerRadius: a, cornerIsExternal: u }), T = u ? Math.abs(l - s) : Math.abs(l - s) - x - k;
    if (T < 0 && a === 0) return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += ne(Qs || (Qs = or(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), S.x, S.y, a, a, +(c < 0), A.x, A.y, n, n, +(T > 180), +(c > 0), b.x, b.y, a, a, +(c < 0), O.x, O.y);
  } else w += ne(Js || (Js = or(["L", ",", "Z"])), t, r);
  return w;
}, iO = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, xp = (e2) => {
  var t = me(e2, iO), { cx: r, cy: n, innerRadius: i, outerRadius: a, cornerRadius: o, forceCornerRadius: u, cornerIsExternal: l, startAngle: s, endAngle: c, className: f } = t;
  if (a < i || s === c) return null;
  var d = B("recharts-sector", f), v = a - i, p = Vt(o, v, 0, true), m;
  return p > 0 && Math.abs(s - c) < 360 ? m = nO({ cx: r, cy: n, innerRadius: i, outerRadius: a, cornerRadius: Math.min(p, v / 2), forceCornerRadius: u, cornerIsExternal: l, startAngle: s, endAngle: c }) : m = wp({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: s, endAngle: c }), h.createElement("path", fu({}, se(t), { className: d, d: m }));
};
function aO(e2, t, r) {
  if (e2 === "horizontal") return [{ x: t.x, y: r.top }, { x: t.x, y: r.top + r.height }];
  if (e2 === "vertical") return [{ x: r.left, y: t.y }, { x: r.left + r.width, y: t.y }];
  if (Lv(t)) {
    if (e2 === "centric") {
      var { cx: n, cy: i, innerRadius: a, outerRadius: o, angle: u } = t, l = Y(n, i, a, u), s = Y(n, i, o, u);
      return [{ x: l.x, y: l.y }, { x: s.x, y: s.y }];
    }
    return bp(t);
  }
}
var Pp = {}, Op = {}, Ap = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Vu;
  function r(n) {
    return t.isSymbol(n) ? NaN : Number(n);
  }
  e2.toNumber = r;
})(Ap);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Ap;
  function r(n) {
    return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
  }
  e2.toFinite = r;
})(Op);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Xu, r = Op;
  function n(i, a, o) {
    o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
    const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), l = new Array(u);
    for (let s = 0; s < u; s++) l[s] = i, i += o;
    return l;
  }
  e2.range = n;
})(Pp);
var oO = Pp.range;
const Sp = Pt(oO);
function Yt(e2, t) {
  return e2 == null || t == null ? NaN : e2 < t ? -1 : e2 > t ? 1 : e2 >= t ? 0 : NaN;
}
function uO(e2, t) {
  return e2 == null || t == null ? NaN : t < e2 ? -1 : t > e2 ? 1 : t >= e2 ? 0 : NaN;
}
function ll(e2) {
  let t, r, n;
  e2.length !== 2 ? (t = Yt, r = (u, l) => Yt(e2(u), l), n = (u, l) => e2(u) - l) : (t = e2 === Yt || e2 === uO ? e2 : lO, r = e2, n = e2);
  function i(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = s + c >>> 1;
        r(u[f], l) < 0 ? s = f + 1 : c = f;
      } while (s < c);
    }
    return s;
  }
  function a(u, l, s = 0, c = u.length) {
    if (s < c) {
      if (t(l, l) !== 0) return c;
      do {
        const f = s + c >>> 1;
        r(u[f], l) <= 0 ? s = f + 1 : c = f;
      } while (s < c);
    }
    return s;
  }
  function o(u, l, s = 0, c = u.length) {
    const f = i(u, l, s, c - 1);
    return f > s && n(u[f - 1], l) > -n(u[f], l) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function lO() {
  return 0;
}
function Ep(e2) {
  return e2 === null ? NaN : +e2;
}
function* cO(e2, t) {
  for (let r of e2) r != null && (r = +r) >= r && (yield r);
}
const sO = ll(Yt), Wn = sO.right;
ll(Ep).center;
class ef extends Map {
  constructor(t, r = vO) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(tf(this, t));
  }
  has(t) {
    return super.has(tf(this, t));
  }
  set(t, r) {
    return super.set(fO(this, t), r);
  }
  delete(t) {
    return super.delete(dO(this, t));
  }
}
function tf({ _intern: e2, _key: t }, r) {
  const n = t(r);
  return e2.has(n) ? e2.get(n) : r;
}
function fO({ _intern: e2, _key: t }, r) {
  const n = t(r);
  return e2.has(n) ? e2.get(n) : (e2.set(n, r), r);
}
function dO({ _intern: e2, _key: t }, r) {
  const n = t(r);
  return e2.has(n) && (r = e2.get(n), e2.delete(n)), r;
}
function vO(e2) {
  return e2 !== null && typeof e2 == "object" ? e2.valueOf() : e2;
}
function hO(e2 = Yt) {
  if (e2 === Yt) return _p;
  if (typeof e2 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e2(t, r);
    return n || n === 0 ? n : (e2(r, r) === 0) - (e2(t, t) === 0);
  };
}
function _p(e2, t) {
  return (e2 == null || !(e2 >= e2)) - (t == null || !(t >= t)) || (e2 < t ? -1 : e2 > t ? 1 : 0);
}
const pO = Math.sqrt(50), mO = Math.sqrt(10), yO = Math.sqrt(2);
function Yi(e2, t, r) {
  const n = (t - e2) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= pO ? 10 : a >= mO ? 5 : a >= yO ? 2 : 1;
  let u, l, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e2 * s), l = Math.round(t * s), u / s < e2 && ++u, l / s > t && --l, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e2 / s), l = Math.round(t / s), u * s < e2 && ++u, l * s > t && --l), l < u && 0.5 <= r && r < 2 ? Yi(e2, t, r * 2) : [u, l, s];
}
function du(e2, t, r) {
  if (t = +t, e2 = +e2, r = +r, !(r > 0)) return [];
  if (e2 === t) return [e2];
  const n = t < e2, [i, a, o] = n ? Yi(t, e2, r) : Yi(e2, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, l = new Array(u);
  if (n) if (o < 0) for (let s = 0; s < u; ++s) l[s] = (a - s) / -o;
  else for (let s = 0; s < u; ++s) l[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * o;
  return l;
}
function vu(e2, t, r) {
  return t = +t, e2 = +e2, r = +r, Yi(e2, t, r)[2];
}
function hu(e2, t, r) {
  t = +t, e2 = +e2, r = +r;
  const n = t < e2, i = n ? vu(t, e2, r) : vu(e2, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function rf(e2, t) {
  let r;
  for (const n of e2) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function nf(e2, t) {
  let r;
  for (const n of e2) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function jp(e2, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e2.length - 1, n)), !(r <= t && t <= n)) return e2;
  for (i = i === void 0 ? _p : hO(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, s = t - r + 1, c = Math.log(l), f = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * f * (l - f) / l) * (s - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - s * f / l + d)), p = Math.min(n, Math.floor(t + (l - s) * f / l + d));
      jp(e2, t, v, p, i);
    }
    const a = e2[t];
    let o = r, u = n;
    for (nn(e2, r, t), i(e2[n], a) > 0 && nn(e2, r, n); o < u; ) {
      for (nn(e2, o, u), ++o, --u; i(e2[o], a) < 0; ) ++o;
      for (; i(e2[u], a) > 0; ) --u;
    }
    i(e2[r], a) === 0 ? nn(e2, r, u) : (++u, nn(e2, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e2;
}
function nn(e2, t, r) {
  const n = e2[t];
  e2[t] = e2[r], e2[r] = n;
}
function gO(e2, t, r) {
  if (e2 = Float64Array.from(cO(e2)), !(!(n = e2.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return nf(e2);
    if (t >= 1) return rf(e2);
    var n, i = (n - 1) * t, a = Math.floor(i), o = rf(jp(e2, a).subarray(0, a + 1)), u = nf(e2.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function bO(e2, t, r = Ep) {
  if (!(!(n = e2.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e2[0], 0, e2);
    if (t >= 1) return +r(e2[n - 1], n - 1, e2);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e2[a], a, e2), u = +r(e2[a + 1], a + 1, e2);
    return o + (u - o) * (i - a);
  }
}
function wO(e2, t, r) {
  e2 = +e2, t = +t, r = (i = arguments.length) < 2 ? (t = e2, e2 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e2) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e2 + n * r;
  return a;
}
function it(e2, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e2);
      break;
    default:
      this.range(t).domain(e2);
      break;
  }
  return this;
}
function Bt(e2, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e2 == "function" ? this.interpolator(e2) : this.range(e2);
      break;
    }
    default: {
      this.domain(e2), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const pu = Symbol("implicit");
function cl() {
  var e2 = new ef(), t = [], r = [], n = pu;
  function i(a) {
    let o = e2.get(a);
    if (o === void 0) {
      if (n !== pu) return n;
      e2.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e2 = new ef();
    for (const o of a) e2.has(o) || e2.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return cl(t, r).unknown(n);
  }, it.apply(i, arguments), i;
}
function sl() {
  var e2 = cl().unknown(void 0), t = e2.domain, r = e2.range, n = 0, i = 1, a, o, u = false, l = 0, s = 0, c = 0.5;
  delete e2.unknown;
  function f() {
    var d = t().length, v = i < n, p = v ? i : n, m = v ? n : i;
    a = (m - p) / Math.max(1, d - l + s * 2), u && (a = Math.floor(a)), p += (m - p - a * (d - l)) * c, o = a * (1 - l), u && (p = Math.round(p), o = Math.round(o));
    var y = wO(d).map(function(g) {
      return p + a * g;
    });
    return r(v ? y.reverse() : y);
  }
  return e2.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e2.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e2.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = true, f();
  }, e2.bandwidth = function() {
    return o;
  }, e2.step = function() {
    return a;
  }, e2.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e2.padding = function(d) {
    return arguments.length ? (l = Math.min(1, s = +d), f()) : l;
  }, e2.paddingInner = function(d) {
    return arguments.length ? (l = Math.min(1, d), f()) : l;
  }, e2.paddingOuter = function(d) {
    return arguments.length ? (s = +d, f()) : s;
  }, e2.align = function(d) {
    return arguments.length ? (c = Math.max(0, Math.min(1, d)), f()) : c;
  }, e2.copy = function() {
    return sl(t(), [n, i]).round(u).paddingInner(l).paddingOuter(s).align(c);
  }, it.apply(f(), arguments);
}
function Cp(e2) {
  var t = e2.copy;
  return e2.padding = e2.paddingOuter, delete e2.paddingInner, delete e2.paddingOuter, e2.copy = function() {
    return Cp(t());
  }, e2;
}
function xO() {
  return Cp(sl.apply(null, arguments).paddingInner(1));
}
function fl(e2, t, r) {
  e2.prototype = t.prototype = r, r.constructor = e2;
}
function kp(e2, t) {
  var r = Object.create(e2.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Kn() {
}
var xn = 0.7, Vi = 1 / xn, Tr = "\\s*([+-]?\\d+)\\s*", Pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", PO = /^#([0-9a-f]{3,8})$/, OO = new RegExp(`^rgb\\(${Tr},${Tr},${Tr}\\)$`), AO = new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`), SO = new RegExp(`^rgba\\(${Tr},${Tr},${Tr},${Pn}\\)$`), EO = new RegExp(`^rgba\\(${yt},${yt},${yt},${Pn}\\)$`), _O = new RegExp(`^hsl\\(${Pn},${yt},${yt}\\)$`), jO = new RegExp(`^hsla\\(${Pn},${yt},${yt},${Pn}\\)$`), af = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
fl(Kn, On, { copy(e2) {
  return Object.assign(new this.constructor(), this, e2);
}, displayable() {
  return this.rgb().displayable();
}, hex: of, formatHex: of, formatHex8: CO, formatHsl: kO, formatRgb: uf, toString: uf });
function of() {
  return this.rgb().formatHex();
}
function CO() {
  return this.rgb().formatHex8();
}
function kO() {
  return Tp(this).formatHsl();
}
function uf() {
  return this.rgb().formatRgb();
}
function On(e2) {
  var t, r;
  return e2 = (e2 + "").trim().toLowerCase(), (t = PO.exec(e2)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? lf(t) : r === 3 ? new ze(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? hi(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? hi(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = OO.exec(e2)) ? new ze(t[1], t[2], t[3], 1) : (t = AO.exec(e2)) ? new ze(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = SO.exec(e2)) ? hi(t[1], t[2], t[3], t[4]) : (t = EO.exec(e2)) ? hi(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = _O.exec(e2)) ? ff(t[1], t[2] / 100, t[3] / 100, 1) : (t = jO.exec(e2)) ? ff(t[1], t[2] / 100, t[3] / 100, t[4]) : af.hasOwnProperty(e2) ? lf(af[e2]) : e2 === "transparent" ? new ze(NaN, NaN, NaN, 0) : null;
}
function lf(e2) {
  return new ze(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
}
function hi(e2, t, r, n) {
  return n <= 0 && (e2 = t = r = NaN), new ze(e2, t, r, n);
}
function TO(e2) {
  return e2 instanceof Kn || (e2 = On(e2)), e2 ? (e2 = e2.rgb(), new ze(e2.r, e2.g, e2.b, e2.opacity)) : new ze();
}
function mu(e2, t, r, n) {
  return arguments.length === 1 ? TO(e2) : new ze(e2, t, r, n ?? 1);
}
function ze(e2, t, r, n) {
  this.r = +e2, this.g = +t, this.b = +r, this.opacity = +n;
}
fl(ze, mu, kp(Kn, { brighter(e2) {
  return e2 = e2 == null ? Vi : Math.pow(Vi, e2), new ze(this.r * e2, this.g * e2, this.b * e2, this.opacity);
}, darker(e2) {
  return e2 = e2 == null ? xn : Math.pow(xn, e2), new ze(this.r * e2, this.g * e2, this.b * e2, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new ze(fr(this.r), fr(this.g), fr(this.b), Xi(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: cf, formatHex: cf, formatHex8: MO, formatRgb: sf, toString: sf }));
function cf() {
  return `#${ur(this.r)}${ur(this.g)}${ur(this.b)}`;
}
function MO() {
  return `#${ur(this.r)}${ur(this.g)}${ur(this.b)}${ur((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function sf() {
  const e2 = Xi(this.opacity);
  return `${e2 === 1 ? "rgb(" : "rgba("}${fr(this.r)}, ${fr(this.g)}, ${fr(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
}
function Xi(e2) {
  return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
}
function fr(e2) {
  return Math.max(0, Math.min(255, Math.round(e2) || 0));
}
function ur(e2) {
  return e2 = fr(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
}
function ff(e2, t, r, n) {
  return n <= 0 ? e2 = t = r = NaN : r <= 0 || r >= 1 ? e2 = t = NaN : t <= 0 && (e2 = NaN), new ut(e2, t, r, n);
}
function Tp(e2) {
  if (e2 instanceof ut) return new ut(e2.h, e2.s, e2.l, e2.opacity);
  if (e2 instanceof Kn || (e2 = On(e2)), !e2) return new ut();
  if (e2 instanceof ut) return e2;
  e2 = e2.rgb();
  var t = e2.r / 255, r = e2.g / 255, n = e2.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new ut(o, u, l, e2.opacity);
}
function IO(e2, t, r, n) {
  return arguments.length === 1 ? Tp(e2) : new ut(e2, t, r, n ?? 1);
}
function ut(e2, t, r, n) {
  this.h = +e2, this.s = +t, this.l = +r, this.opacity = +n;
}
fl(ut, IO, kp(Kn, { brighter(e2) {
  return e2 = e2 == null ? Vi : Math.pow(Vi, e2), new ut(this.h, this.s, this.l * e2, this.opacity);
}, darker(e2) {
  return e2 = e2 == null ? xn : Math.pow(xn, e2), new ut(this.h, this.s, this.l * e2, this.opacity);
}, rgb() {
  var e2 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e2) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new ze(Oo(e2 >= 240 ? e2 - 240 : e2 + 120, i, n), Oo(e2, i, n), Oo(e2 < 120 ? e2 + 240 : e2 - 120, i, n), this.opacity);
}, clamp() {
  return new ut(df(this.h), pi(this.s), pi(this.l), Xi(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e2 = Xi(this.opacity);
  return `${e2 === 1 ? "hsl(" : "hsla("}${df(this.h)}, ${pi(this.s) * 100}%, ${pi(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
} }));
function df(e2) {
  return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
}
function pi(e2) {
  return Math.max(0, Math.min(1, e2 || 0));
}
function Oo(e2, t, r) {
  return (e2 < 60 ? t + (r - t) * e2 / 60 : e2 < 180 ? r : e2 < 240 ? t + (r - t) * (240 - e2) / 60 : t) * 255;
}
const dl = (e2) => () => e2;
function DO(e2, t) {
  return function(r) {
    return e2 + r * t;
  };
}
function NO(e2, t, r) {
  return e2 = Math.pow(e2, r), t = Math.pow(t, r) - e2, r = 1 / r, function(n) {
    return Math.pow(e2 + n * t, r);
  };
}
function $O(e2) {
  return (e2 = +e2) == 1 ? Mp : function(t, r) {
    return r - t ? NO(t, r, e2) : dl(isNaN(t) ? r : t);
  };
}
function Mp(e2, t) {
  var r = t - e2;
  return r ? DO(e2, r) : dl(isNaN(e2) ? t : e2);
}
const vf = function e(t) {
  var r = $O(t);
  function n(i, a) {
    var o = r((i = mu(i)).r, (a = mu(a)).r), u = r(i.g, a.g), l = r(i.b, a.b), s = Mp(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = u(c), i.b = l(c), i.opacity = s(c), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function LO(e2, t) {
  t || (t = []);
  var r = e2 ? Math.min(t.length, e2.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e2[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function RO(e2) {
  return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
}
function zO(e2, t) {
  var r = t ? t.length : 0, n = e2 ? Math.min(r, e2.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Br(e2[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function BO(e2, t) {
  var r = /* @__PURE__ */ new Date();
  return e2 = +e2, t = +t, function(n) {
    return r.setTime(e2 * (1 - n) + t * n), r;
  };
}
function Zi(e2, t) {
  return e2 = +e2, t = +t, function(r) {
    return e2 * (1 - r) + t * r;
  };
}
function FO(e2, t) {
  var r = {}, n = {}, i;
  (e2 === null || typeof e2 != "object") && (e2 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e2 ? r[i] = Br(e2[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var yu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ao = new RegExp(yu.source, "g");
function WO(e2) {
  return function() {
    return e2;
  };
}
function KO(e2) {
  return function(t) {
    return e2(t) + "";
  };
}
function UO(e2, t) {
  var r = yu.lastIndex = Ao.lastIndex = 0, n, i, a, o = -1, u = [], l = [];
  for (e2 = e2 + "", t = t + ""; (n = yu.exec(e2)) && (i = Ao.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: Zi(n, i) })), r = Ao.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? KO(l[0].x) : WO(t) : (t = l.length, function(s) {
    for (var c = 0, f; c < t; ++c) u[(f = l[c]).i] = f.x(s);
    return u.join("");
  });
}
function Br(e2, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? dl(t) : (r === "number" ? Zi : r === "string" ? (n = On(t)) ? (t = n, vf) : UO : t instanceof On ? vf : t instanceof Date ? BO : RO(t) ? LO : Array.isArray(t) ? zO : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? FO : Zi)(e2, t);
}
function vl(e2, t) {
  return e2 = +e2, t = +t, function(r) {
    return Math.round(e2 * (1 - r) + t * r);
  };
}
function HO(e2, t) {
  t === void 0 && (t = e2, e2 = Br);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e2(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function qO(e2) {
  return function() {
    return e2;
  };
}
function Qi(e2) {
  return +e2;
}
var hf = [0, 1];
function Me(e2) {
  return e2;
}
function gu(e2, t) {
  return (t -= e2 = +e2) ? function(r) {
    return (r - e2) / t;
  } : qO(isNaN(t) ? NaN : 0.5);
}
function GO(e2, t) {
  var r;
  return e2 > t && (r = e2, e2 = t, t = r), function(n) {
    return Math.max(e2, Math.min(t, n));
  };
}
function YO(e2, t, r) {
  var n = e2[0], i = e2[1], a = t[0], o = t[1];
  return i < n ? (n = gu(i, n), a = r(o, a)) : (n = gu(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function VO(e2, t, r) {
  var n = Math.min(e2.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e2[n] < e2[0] && (e2 = e2.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = gu(e2[o], e2[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var l = Wn(e2, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}
function Un(e2, t) {
  return t.domain(e2.domain()).range(e2.range()).interpolate(e2.interpolate()).clamp(e2.clamp()).unknown(e2.unknown());
}
function Ga() {
  var e2 = hf, t = hf, r = Br, n, i, a, o = Me, u, l, s;
  function c() {
    var d = Math.min(e2.length, t.length);
    return o !== Me && (o = GO(e2[0], e2[d - 1])), u = d > 2 ? VO : YO, l = s = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = u(e2.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((s || (s = u(t, e2.map(n), Zi)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e2 = Array.from(d, Qi), c()) : e2.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), c()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = vl, c();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? true : Me, c()) : o !== Me;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, c()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, v) {
    return n = d, i = v, c();
  };
}
function hl() {
  return Ga()(Me, Me);
}
function XO(e2) {
  return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
}
function Ji(e2, t) {
  if ((r = (e2 = t ? e2.toExponential(t - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e2.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e2.slice(r + 1)];
}
function $r(e2) {
  return e2 = Ji(Math.abs(e2)), e2 ? e2[1] : NaN;
}
function ZO(e2, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e2[0], l = 0; i > 0 && u > 0 && (l + u + 1 > n && (u = Math.max(1, n - l)), a.push(r.substring(i -= u, i + u)), !((l += u + 1) > n)); ) u = e2[o = (o + 1) % e2.length];
    return a.reverse().join(t);
  };
}
function QO(e2) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e2[+r];
    });
  };
}
var JO = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function An(e2) {
  if (!(t = JO.exec(e2))) throw new Error("invalid format: " + e2);
  var t;
  return new pl({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
An.prototype = pl.prototype;
function pl(e2) {
  this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
}
pl.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function e1(e2) {
  e: for (var t = e2.length, r = 1, n = -1, i; r < t; ++r) switch (e2[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e2[r]) break e;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e2.slice(0, n) + e2.slice(i + 1) : e2;
}
var Ip;
function t1(e2, t) {
  var r = Ji(e2, t);
  if (!r) return e2 + "";
  var n = r[0], i = r[1], a = i - (Ip = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Ji(e2, Math.max(0, t + a - 1))[0];
}
function pf(e2, t) {
  var r = Ji(e2, t);
  if (!r) return e2 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const mf = { "%": (e2, t) => (e2 * 100).toFixed(t), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: XO, e: (e2, t) => e2.toExponential(t), f: (e2, t) => e2.toFixed(t), g: (e2, t) => e2.toPrecision(t), o: (e2) => Math.round(e2).toString(8), p: (e2, t) => pf(e2 * 100, t), r: pf, s: t1, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
function yf(e2) {
  return e2;
}
var gf = Array.prototype.map, bf = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function r1(e2) {
  var t = e2.grouping === void 0 || e2.thousands === void 0 ? yf : ZO(gf.call(e2.grouping, Number), e2.thousands + ""), r = e2.currency === void 0 ? "" : e2.currency[0] + "", n = e2.currency === void 0 ? "" : e2.currency[1] + "", i = e2.decimal === void 0 ? "." : e2.decimal + "", a = e2.numerals === void 0 ? yf : QO(gf.call(e2.numerals, String)), o = e2.percent === void 0 ? "%" : e2.percent + "", u = e2.minus === void 0 ? "\u2212" : e2.minus + "", l = e2.nan === void 0 ? "NaN" : e2.nan + "";
  function s(f) {
    f = An(f);
    var d = f.fill, v = f.align, p = f.sign, m = f.symbol, y = f.zero, g = f.width, w = f.comma, b = f.precision, O = f.trim, x = f.type;
    x === "n" ? (w = true, x = "g") : mf[x] || (b === void 0 && (b = 12), O = true, x = "g"), (y || d === "0" && v === "=") && (y = true, d = "0", v = "=");
    var A = m === "$" ? r : m === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", S = m === "$" ? n : /[%p]/.test(x) ? o : "", k = mf[x], T = /[defgprs%]/.test(x);
    b = b === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function D(E) {
      var C = A, R = S, L, H, J;
      if (x === "c") R = k(E) + R, E = "";
      else {
        E = +E;
        var F = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? l : k(Math.abs(E), b), O && (E = e1(E)), F && +E == 0 && p !== "+" && (F = false), C = (F ? p === "(" ? p : u : p === "-" || p === "(" ? "" : p) + C, R = (x === "s" ? bf[8 + Ip / 3] : "") + R + (F && p === "(" ? ")" : ""), T) {
          for (L = -1, H = E.length; ++L < H; ) if (J = E.charCodeAt(L), 48 > J || J > 57) {
            R = (J === 46 ? i + E.slice(L + 1) : E.slice(L)) + R, E = E.slice(0, L);
            break;
          }
        }
      }
      w && !y && (E = t(E, 1 / 0));
      var G = C.length + E.length + R.length, $ = G < g ? new Array(g - G + 1).join(d) : "";
      switch (w && y && (E = t($ + E, $.length ? g - R.length : 1 / 0), $ = ""), v) {
        case "<":
          E = C + E + R + $;
          break;
        case "=":
          E = C + $ + E + R;
          break;
        case "^":
          E = $.slice(0, G = $.length >> 1) + C + E + R + $.slice(G);
          break;
        default:
          E = $ + C + E + R;
          break;
      }
      return a(E);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function c(f, d) {
    var v = s((f = An(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor($r(d) / 3))) * 3, m = Math.pow(10, -p), y = bf[8 + p / 3];
    return function(g) {
      return v(m * g) + y;
    };
  }
  return { format: s, formatPrefix: c };
}
var mi, ml, Dp;
n1({ thousands: ",", grouping: [3], currency: ["$", ""] });
function n1(e2) {
  return mi = r1(e2), ml = mi.format, Dp = mi.formatPrefix, mi;
}
function i1(e2) {
  return Math.max(0, -$r(Math.abs(e2)));
}
function a1(e2, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor($r(t) / 3))) * 3 - $r(Math.abs(e2)));
}
function o1(e2, t) {
  return e2 = Math.abs(e2), t = Math.abs(t) - e2, Math.max(0, $r(t) - $r(e2)) + 1;
}
function Np(e2, t, r, n) {
  var i = hu(e2, t, r), a;
  switch (n = An(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e2), Math.abs(t));
      return n.precision == null && !isNaN(a = a1(i, o)) && (n.precision = a), Dp(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = o1(i, Math.max(Math.abs(e2), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = i1(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return ml(n);
}
function Zt(e2) {
  var t = e2.domain;
  return e2.ticks = function(r) {
    var n = t();
    return du(n[0], n[n.length - 1], r ?? 10);
  }, e2.tickFormat = function(r, n) {
    var i = t();
    return Np(i[0], i[i.length - 1], r ?? 10, n);
  }, e2.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], l, s, c = 10;
    for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); c-- > 0; ) {
      if (s = vu(o, u, r), s === l) return n[i] = o, n[a] = u, t(n);
      if (s > 0) o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0) o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
      else break;
      l = s;
    }
    return e2;
  }, e2;
}
function $p() {
  var e2 = hl();
  return e2.copy = function() {
    return Un(e2, $p());
  }, it.apply(e2, arguments), Zt(e2);
}
function Lp(e2) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e2 = Array.from(n, Qi), r) : e2.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Lp(e2).unknown(t);
  }, e2 = arguments.length ? Array.from(e2, Qi) : [0, 1], Zt(r);
}
function Rp(e2, t) {
  e2 = e2.slice();
  var r = 0, n = e2.length - 1, i = e2[r], a = e2[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e2[r] = t.floor(i), e2[n] = t.ceil(a), e2;
}
function wf(e2) {
  return Math.log(e2);
}
function xf(e2) {
  return Math.exp(e2);
}
function u1(e2) {
  return -Math.log(-e2);
}
function l1(e2) {
  return -Math.exp(-e2);
}
function c1(e2) {
  return isFinite(e2) ? +("1e" + e2) : e2 < 0 ? 0 : e2;
}
function s1(e2) {
  return e2 === 10 ? c1 : e2 === Math.E ? Math.exp : (t) => Math.pow(e2, t);
}
function f1(e2) {
  return e2 === Math.E ? Math.log : e2 === 10 && Math.log10 || e2 === 2 && Math.log2 || (e2 = Math.log(e2), (t) => Math.log(t) / e2);
}
function Pf(e2) {
  return (t, r) => -e2(-t, r);
}
function yl(e2) {
  const t = e2(wf, xf), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = f1(n), a = s1(n), r()[0] < 0 ? (i = Pf(i), a = Pf(a), e2(u1, l1)) : e2(wf, xf), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const l = r();
    let s = l[0], c = l[l.length - 1];
    const f = c < s;
    f && ([s, c] = [c, s]);
    let d = i(s), v = i(c), p, m;
    const y = u == null ? 10 : +u;
    let g = [];
    if (!(n % 1) && v - d < y) {
      if (d = Math.floor(d), v = Math.ceil(v), s > 0) {
        for (; d <= v; ++d) for (p = 1; p < n; ++p) if (m = d < 0 ? p / a(-d) : p * a(d), !(m < s)) {
          if (m > c) break;
          g.push(m);
        }
      } else for (; d <= v; ++d) for (p = n - 1; p >= 1; --p) if (m = d > 0 ? p / a(-d) : p * a(d), !(m < s)) {
        if (m > c) break;
        g.push(m);
      }
      g.length * 2 < y && (g = du(s, c, y));
    } else g = du(d, v, Math.min(v - d, y)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (u, l) => {
    if (u == null && (u = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = An(l)).precision == null && (l.trim = true), l = ml(l)), u === 1 / 0) return l;
    const s = Math.max(1, n * u / t.ticks().length);
    return (c) => {
      let f = c / a(Math.round(i(c)));
      return f * n < n - 0.5 && (f *= n), f <= s ? l(c) : "";
    };
  }, t.nice = () => r(Rp(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) })), t;
}
function zp() {
  const e2 = yl(Ga()).domain([1, 10]);
  return e2.copy = () => Un(e2, zp()).base(e2.base()), it.apply(e2, arguments), e2;
}
function Of(e2) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e2));
  };
}
function Af(e2) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e2;
  };
}
function gl(e2) {
  var t = 1, r = e2(Of(t), Af(t));
  return r.constant = function(n) {
    return arguments.length ? e2(Of(t = +n), Af(t)) : t;
  }, Zt(r);
}
function Bp() {
  var e2 = gl(Ga());
  return e2.copy = function() {
    return Un(e2, Bp()).constant(e2.constant());
  }, it.apply(e2, arguments);
}
function Sf(e2) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e2) : Math.pow(t, e2);
  };
}
function d1(e2) {
  return e2 < 0 ? -Math.sqrt(-e2) : Math.sqrt(e2);
}
function v1(e2) {
  return e2 < 0 ? -e2 * e2 : e2 * e2;
}
function bl(e2) {
  var t = e2(Me, Me), r = 1;
  function n() {
    return r === 1 ? e2(Me, Me) : r === 0.5 ? e2(d1, v1) : e2(Sf(r), Sf(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Zt(t);
}
function wl() {
  var e2 = bl(Ga());
  return e2.copy = function() {
    return Un(e2, wl()).exponent(e2.exponent());
  }, it.apply(e2, arguments), e2;
}
function h1() {
  return wl.apply(null, arguments).exponent(0.5);
}
function Ef(e2) {
  return Math.sign(e2) * e2 * e2;
}
function p1(e2) {
  return Math.sign(e2) * Math.sqrt(Math.abs(e2));
}
function Fp() {
  var e2 = hl(), t = [0, 1], r = false, n;
  function i(a) {
    var o = p1(e2(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e2.invert(Ef(a));
  }, i.domain = function(a) {
    return arguments.length ? (e2.domain(a), i) : e2.domain();
  }, i.range = function(a) {
    return arguments.length ? (e2.range((t = Array.from(a, Qi)).map(Ef)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e2.clamp(a), i) : e2.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Fp(e2.domain(), t).round(r).clamp(e2.clamp()).unknown(n);
  }, it.apply(i, arguments), Zt(i);
}
function Wp() {
  var e2 = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = bO(e2, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Wn(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e2[0], u < r.length ? r[u] : e2[e2.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e2.slice();
    e2 = [];
    for (let u of o) u != null && !isNaN(u = +u) && e2.push(u);
    return e2.sort(Yt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Wp().domain(e2).range(t).unknown(n);
  }, it.apply(a, arguments);
}
function Kp() {
  var e2 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[Wn(n, l, 0, r)] : a;
  }
  function u() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e2) / (r + 1);
    return o;
  }
  return o.domain = function(l) {
    return arguments.length ? ([e2, t] = l, e2 = +e2, t = +t, u()) : [e2, t];
  }, o.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(l) {
    var s = i.indexOf(l);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e2, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(l) {
    return arguments.length && (a = l), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Kp().domain([e2, t]).range(i).unknown(a);
  }, it.apply(Zt(o), arguments);
}
function Up() {
  var e2 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Wn(e2, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e2 = Array.from(a), n = Math.min(e2.length, t.length - 1), i) : e2.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e2.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e2[o - 1], e2[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Up().domain(e2).range(t).unknown(r);
  }, it.apply(i, arguments);
}
const So = /* @__PURE__ */ new Date(), Eo = /* @__PURE__ */ new Date();
function ye(e2, t, r, n) {
  function i(a) {
    return e2(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e2(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e2(a = new Date(a - 1)), t(a, 1), e2(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const l = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return l;
    let s;
    do
      l.push(s = /* @__PURE__ */ new Date(+a)), t(a, u), e2(a);
    while (s < a && a < o);
    return l;
  }, i.filter = (a) => ye((o) => {
    if (o >= o) for (; e2(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o) if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --u >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (So.setTime(+a), Eo.setTime(+o), e2(So), e2(Eo), Math.floor(r(So, Eo))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const ea = ye(() => {
}, (e2, t) => {
  e2.setTime(+e2 + t);
}, (e2, t) => t - e2);
ea.every = (e2) => (e2 = Math.floor(e2), !isFinite(e2) || !(e2 > 0) ? null : e2 > 1 ? ye((t) => {
  t.setTime(Math.floor(t / e2) * e2);
}, (t, r) => {
  t.setTime(+t + r * e2);
}, (t, r) => (r - t) / e2) : ea);
ea.range;
const Et = 1e3, tt = Et * 60, _t = tt * 60, It = _t * 24, xl = It * 7, _f = It * 30, _o = It * 365, lr = ye((e2) => {
  e2.setTime(e2 - e2.getMilliseconds());
}, (e2, t) => {
  e2.setTime(+e2 + t * Et);
}, (e2, t) => (t - e2) / Et, (e2) => e2.getUTCSeconds());
lr.range;
const Pl = ye((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * Et);
}, (e2, t) => {
  e2.setTime(+e2 + t * tt);
}, (e2, t) => (t - e2) / tt, (e2) => e2.getMinutes());
Pl.range;
const Ol = ye((e2) => {
  e2.setUTCSeconds(0, 0);
}, (e2, t) => {
  e2.setTime(+e2 + t * tt);
}, (e2, t) => (t - e2) / tt, (e2) => e2.getUTCMinutes());
Ol.range;
const Al = ye((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * Et - e2.getMinutes() * tt);
}, (e2, t) => {
  e2.setTime(+e2 + t * _t);
}, (e2, t) => (t - e2) / _t, (e2) => e2.getHours());
Al.range;
const Sl = ye((e2) => {
  e2.setUTCMinutes(0, 0, 0);
}, (e2, t) => {
  e2.setTime(+e2 + t * _t);
}, (e2, t) => (t - e2) / _t, (e2) => e2.getUTCHours());
Sl.range;
const Hn = ye((e2) => e2.setHours(0, 0, 0, 0), (e2, t) => e2.setDate(e2.getDate() + t), (e2, t) => (t - e2 - (t.getTimezoneOffset() - e2.getTimezoneOffset()) * tt) / It, (e2) => e2.getDate() - 1);
Hn.range;
const Ya = ye((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCDate(e2.getUTCDate() + t);
}, (e2, t) => (t - e2) / It, (e2) => e2.getUTCDate() - 1);
Ya.range;
const Hp = ye((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCDate(e2.getUTCDate() + t);
}, (e2, t) => (t - e2) / It, (e2) => Math.floor(e2 / It));
Hp.range;
function xr(e2) {
  return ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e2) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * tt) / xl);
}
const Va = xr(0), ta = xr(1), m1 = xr(2), y1 = xr(3), Lr = xr(4), g1 = xr(5), b1 = xr(6);
Va.range;
ta.range;
m1.range;
y1.range;
Lr.range;
g1.range;
b1.range;
function Pr(e2) {
  return ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e2) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / xl);
}
const Xa = Pr(0), ra = Pr(1), w1 = Pr(2), x1 = Pr(3), Rr = Pr(4), P1 = Pr(5), O1 = Pr(6);
Xa.range;
ra.range;
w1.range;
x1.range;
Rr.range;
P1.range;
O1.range;
const El = ye((e2) => {
  e2.setDate(1), e2.setHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setMonth(e2.getMonth() + t);
}, (e2, t) => t.getMonth() - e2.getMonth() + (t.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
El.range;
const _l = ye((e2) => {
  e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCMonth(e2.getUTCMonth() + t);
}, (e2, t) => t.getUTCMonth() - e2.getUTCMonth() + (t.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
_l.range;
const Dt = ye((e2) => {
  e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setFullYear(e2.getFullYear() + t);
}, (e2, t) => t.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
Dt.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e2) * e2), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e2);
});
Dt.range;
const Nt = ye((e2) => {
  e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCFullYear(e2.getUTCFullYear() + t);
}, (e2, t) => t.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
Nt.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : ye((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e2) * e2), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e2);
});
Nt.range;
function qp(e2, t, r, n, i, a) {
  const o = [[lr, 1, Et], [lr, 5, 5 * Et], [lr, 15, 15 * Et], [lr, 30, 30 * Et], [a, 1, tt], [a, 5, 5 * tt], [a, 15, 15 * tt], [a, 30, 30 * tt], [i, 1, _t], [i, 3, 3 * _t], [i, 6, 6 * _t], [i, 12, 12 * _t], [n, 1, It], [n, 2, 2 * It], [r, 1, xl], [t, 1, _f], [t, 3, 3 * _f], [e2, 1, _o]];
  function u(s, c, f) {
    const d = c < s;
    d && ([s, c] = [c, s]);
    const v = f && typeof f.range == "function" ? f : l(s, c, f), p = v ? v.range(s, +c + 1) : [];
    return d ? p.reverse() : p;
  }
  function l(s, c, f) {
    const d = Math.abs(c - s) / f, v = ll(([, , y]) => y).right(o, d);
    if (v === o.length) return e2.every(hu(s / _o, c / _o, f));
    if (v === 0) return ea.every(Math.max(hu(s, c, f), 1));
    const [p, m] = o[d / o[v - 1][2] < o[v][2] / d ? v - 1 : v];
    return p.every(m);
  }
  return [u, l];
}
const [A1, S1] = qp(Nt, _l, Xa, Hp, Sl, Ol), [E1, _1] = qp(Dt, El, Va, Hn, Al, Pl);
function jo(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t = new Date(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
    return t.setFullYear(e2.y), t;
  }
  return new Date(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
}
function Co(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t = new Date(Date.UTC(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
    return t.setUTCFullYear(e2.y), t;
  }
  return new Date(Date.UTC(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
}
function an(e2, t, r) {
  return { y: e2, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function j1(e2) {
  var t = e2.dateTime, r = e2.date, n = e2.time, i = e2.periods, a = e2.days, o = e2.shortDays, u = e2.months, l = e2.shortMonths, s = on(i), c = un(i), f = on(a), d = un(a), v = on(o), p = un(o), m = on(u), y = un(u), g = on(l), w = un(l), b = { a: F, A: G, b: $, B: De, c: null, d: If, e: If, f: Z1, g: uA, G: cA, H: Y1, I: V1, j: X1, L: Gp, m: Q1, M: J1, p: We, q: Ne, Q: $f, s: Lf, S: eA, u: tA, U: rA, V: nA, w: iA, W: aA, x: null, X: null, y: oA, Y: lA, Z: sA, "%": Nf }, O = { a: Ot, A: Xe, b: tr, B: Jr, c: null, d: Df, e: Df, f: hA, g: AA, G: EA, H: fA, I: dA, j: vA, L: Vp, m: pA, M: mA, p: $e, q: fo, Q: $f, s: Lf, S: yA, u: gA, U: bA, V: wA, w: xA, W: PA, x: null, X: null, y: OA, Y: SA, Z: _A, "%": Nf }, x = { a: D, A: E, b: C, B: R, c: L, d: Tf, e: Tf, f: U1, g: kf, G: Cf, H: Mf, I: Mf, j: B1, L: K1, m: z1, M: F1, p: T, q: R1, Q: q1, s: G1, S: W1, u: I1, U: D1, V: N1, w: M1, W: $1, x: H, X: J, y: kf, Y: Cf, Z: L1, "%": H1 };
  b.x = A(r, b), b.X = A(n, b), b.c = A(t, b), O.x = A(r, O), O.X = A(n, O), O.c = A(t, O);
  function A(_, z) {
    return function(W) {
      var j = [], Le = -1, Z = 0, Ke = _.length, Ue, rr, Cc;
      for (W instanceof Date || (W = /* @__PURE__ */ new Date(+W)); ++Le < Ke; ) _.charCodeAt(Le) === 37 && (j.push(_.slice(Z, Le)), (rr = jf[Ue = _.charAt(++Le)]) != null ? Ue = _.charAt(++Le) : rr = Ue === "e" ? " " : "0", (Cc = z[Ue]) && (Ue = Cc(W, rr)), j.push(Ue), Z = Le + 1);
      return j.push(_.slice(Z, Le)), j.join("");
    };
  }
  function S(_, z) {
    return function(W) {
      var j = an(1900, void 0, 1), Le = k(j, _, W += "", 0), Z, Ke;
      if (Le != W.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (z && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (Z = Co(an(j.y, 0, 1)), Ke = Z.getUTCDay(), Z = Ke > 4 || Ke === 0 ? ra.ceil(Z) : ra(Z), Z = Ya.offset(Z, (j.V - 1) * 7), j.y = Z.getUTCFullYear(), j.m = Z.getUTCMonth(), j.d = Z.getUTCDate() + (j.w + 6) % 7) : (Z = jo(an(j.y, 0, 1)), Ke = Z.getDay(), Z = Ke > 4 || Ke === 0 ? ta.ceil(Z) : ta(Z), Z = Hn.offset(Z, (j.V - 1) * 7), j.y = Z.getFullYear(), j.m = Z.getMonth(), j.d = Z.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), Ke = "Z" in j ? Co(an(j.y, 0, 1)).getUTCDay() : jo(an(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (Ke + 5) % 7 : j.w + j.U * 7 - (Ke + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, Co(j)) : jo(j);
    };
  }
  function k(_, z, W, j) {
    for (var Le = 0, Z = z.length, Ke = W.length, Ue, rr; Le < Z; ) {
      if (j >= Ke) return -1;
      if (Ue = z.charCodeAt(Le++), Ue === 37) {
        if (Ue = z.charAt(Le++), rr = x[Ue in jf ? z.charAt(Le++) : Ue], !rr || (j = rr(_, W, j)) < 0) return -1;
      } else if (Ue != W.charCodeAt(j++)) return -1;
    }
    return j;
  }
  function T(_, z, W) {
    var j = s.exec(z.slice(W));
    return j ? (_.p = c.get(j[0].toLowerCase()), W + j[0].length) : -1;
  }
  function D(_, z, W) {
    var j = v.exec(z.slice(W));
    return j ? (_.w = p.get(j[0].toLowerCase()), W + j[0].length) : -1;
  }
  function E(_, z, W) {
    var j = f.exec(z.slice(W));
    return j ? (_.w = d.get(j[0].toLowerCase()), W + j[0].length) : -1;
  }
  function C(_, z, W) {
    var j = g.exec(z.slice(W));
    return j ? (_.m = w.get(j[0].toLowerCase()), W + j[0].length) : -1;
  }
  function R(_, z, W) {
    var j = m.exec(z.slice(W));
    return j ? (_.m = y.get(j[0].toLowerCase()), W + j[0].length) : -1;
  }
  function L(_, z, W) {
    return k(_, t, z, W);
  }
  function H(_, z, W) {
    return k(_, r, z, W);
  }
  function J(_, z, W) {
    return k(_, n, z, W);
  }
  function F(_) {
    return o[_.getDay()];
  }
  function G(_) {
    return a[_.getDay()];
  }
  function $(_) {
    return l[_.getMonth()];
  }
  function De(_) {
    return u[_.getMonth()];
  }
  function We(_) {
    return i[+(_.getHours() >= 12)];
  }
  function Ne(_) {
    return 1 + ~~(_.getMonth() / 3);
  }
  function Ot(_) {
    return o[_.getUTCDay()];
  }
  function Xe(_) {
    return a[_.getUTCDay()];
  }
  function tr(_) {
    return l[_.getUTCMonth()];
  }
  function Jr(_) {
    return u[_.getUTCMonth()];
  }
  function $e(_) {
    return i[+(_.getUTCHours() >= 12)];
  }
  function fo(_) {
    return 1 + ~~(_.getUTCMonth() / 3);
  }
  return { format: function(_) {
    var z = A(_ += "", b);
    return z.toString = function() {
      return _;
    }, z;
  }, parse: function(_) {
    var z = S(_ += "", false);
    return z.toString = function() {
      return _;
    }, z;
  }, utcFormat: function(_) {
    var z = A(_ += "", O);
    return z.toString = function() {
      return _;
    }, z;
  }, utcParse: function(_) {
    var z = S(_ += "", true);
    return z.toString = function() {
      return _;
    }, z;
  } };
}
var jf = { "-": "", _: " ", 0: "0" }, Ae = /^\s*\d+/, C1 = /^%/, k1 = /[\\^$*+?|[\]().{}]/g;
function K(e2, t, r) {
  var n = e2 < 0 ? "-" : "", i = (n ? -e2 : e2) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function T1(e2) {
  return e2.replace(k1, "\\$&");
}
function on(e2) {
  return new RegExp("^(?:" + e2.map(T1).join("|") + ")", "i");
}
function un(e2) {
  return new Map(e2.map((t, r) => [t.toLowerCase(), r]));
}
function M1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e2.w = +n[0], r + n[0].length) : -1;
}
function I1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e2.u = +n[0], r + n[0].length) : -1;
}
function D1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.U = +n[0], r + n[0].length) : -1;
}
function N1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.V = +n[0], r + n[0].length) : -1;
}
function $1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.W = +n[0], r + n[0].length) : -1;
}
function Cf(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 4));
  return n ? (e2.y = +n[0], r + n[0].length) : -1;
}
function kf(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function L1(e2, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e2.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function R1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e2.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function z1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.m = n[0] - 1, r + n[0].length) : -1;
}
function Tf(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.d = +n[0], r + n[0].length) : -1;
}
function B1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 3));
  return n ? (e2.m = 0, e2.d = +n[0], r + n[0].length) : -1;
}
function Mf(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.H = +n[0], r + n[0].length) : -1;
}
function F1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.M = +n[0], r + n[0].length) : -1;
}
function W1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e2.S = +n[0], r + n[0].length) : -1;
}
function K1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 3));
  return n ? (e2.L = +n[0], r + n[0].length) : -1;
}
function U1(e2, t, r) {
  var n = Ae.exec(t.slice(r, r + 6));
  return n ? (e2.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function H1(e2, t, r) {
  var n = C1.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function q1(e2, t, r) {
  var n = Ae.exec(t.slice(r));
  return n ? (e2.Q = +n[0], r + n[0].length) : -1;
}
function G1(e2, t, r) {
  var n = Ae.exec(t.slice(r));
  return n ? (e2.s = +n[0], r + n[0].length) : -1;
}
function If(e2, t) {
  return K(e2.getDate(), t, 2);
}
function Y1(e2, t) {
  return K(e2.getHours(), t, 2);
}
function V1(e2, t) {
  return K(e2.getHours() % 12 || 12, t, 2);
}
function X1(e2, t) {
  return K(1 + Hn.count(Dt(e2), e2), t, 3);
}
function Gp(e2, t) {
  return K(e2.getMilliseconds(), t, 3);
}
function Z1(e2, t) {
  return Gp(e2, t) + "000";
}
function Q1(e2, t) {
  return K(e2.getMonth() + 1, t, 2);
}
function J1(e2, t) {
  return K(e2.getMinutes(), t, 2);
}
function eA(e2, t) {
  return K(e2.getSeconds(), t, 2);
}
function tA(e2) {
  var t = e2.getDay();
  return t === 0 ? 7 : t;
}
function rA(e2, t) {
  return K(Va.count(Dt(e2) - 1, e2), t, 2);
}
function Yp(e2) {
  var t = e2.getDay();
  return t >= 4 || t === 0 ? Lr(e2) : Lr.ceil(e2);
}
function nA(e2, t) {
  return e2 = Yp(e2), K(Lr.count(Dt(e2), e2) + (Dt(e2).getDay() === 4), t, 2);
}
function iA(e2) {
  return e2.getDay();
}
function aA(e2, t) {
  return K(ta.count(Dt(e2) - 1, e2), t, 2);
}
function oA(e2, t) {
  return K(e2.getFullYear() % 100, t, 2);
}
function uA(e2, t) {
  return e2 = Yp(e2), K(e2.getFullYear() % 100, t, 2);
}
function lA(e2, t) {
  return K(e2.getFullYear() % 1e4, t, 4);
}
function cA(e2, t) {
  var r = e2.getDay();
  return e2 = r >= 4 || r === 0 ? Lr(e2) : Lr.ceil(e2), K(e2.getFullYear() % 1e4, t, 4);
}
function sA(e2) {
  var t = e2.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + K(t / 60 | 0, "0", 2) + K(t % 60, "0", 2);
}
function Df(e2, t) {
  return K(e2.getUTCDate(), t, 2);
}
function fA(e2, t) {
  return K(e2.getUTCHours(), t, 2);
}
function dA(e2, t) {
  return K(e2.getUTCHours() % 12 || 12, t, 2);
}
function vA(e2, t) {
  return K(1 + Ya.count(Nt(e2), e2), t, 3);
}
function Vp(e2, t) {
  return K(e2.getUTCMilliseconds(), t, 3);
}
function hA(e2, t) {
  return Vp(e2, t) + "000";
}
function pA(e2, t) {
  return K(e2.getUTCMonth() + 1, t, 2);
}
function mA(e2, t) {
  return K(e2.getUTCMinutes(), t, 2);
}
function yA(e2, t) {
  return K(e2.getUTCSeconds(), t, 2);
}
function gA(e2) {
  var t = e2.getUTCDay();
  return t === 0 ? 7 : t;
}
function bA(e2, t) {
  return K(Xa.count(Nt(e2) - 1, e2), t, 2);
}
function Xp(e2) {
  var t = e2.getUTCDay();
  return t >= 4 || t === 0 ? Rr(e2) : Rr.ceil(e2);
}
function wA(e2, t) {
  return e2 = Xp(e2), K(Rr.count(Nt(e2), e2) + (Nt(e2).getUTCDay() === 4), t, 2);
}
function xA(e2) {
  return e2.getUTCDay();
}
function PA(e2, t) {
  return K(ra.count(Nt(e2) - 1, e2), t, 2);
}
function OA(e2, t) {
  return K(e2.getUTCFullYear() % 100, t, 2);
}
function AA(e2, t) {
  return e2 = Xp(e2), K(e2.getUTCFullYear() % 100, t, 2);
}
function SA(e2, t) {
  return K(e2.getUTCFullYear() % 1e4, t, 4);
}
function EA(e2, t) {
  var r = e2.getUTCDay();
  return e2 = r >= 4 || r === 0 ? Rr(e2) : Rr.ceil(e2), K(e2.getUTCFullYear() % 1e4, t, 4);
}
function _A() {
  return "+0000";
}
function Nf() {
  return "%";
}
function $f(e2) {
  return +e2;
}
function Lf(e2) {
  return Math.floor(+e2 / 1e3);
}
var Or, Zp, Qp;
jA({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function jA(e2) {
  return Or = j1(e2), Zp = Or.format, Or.parse, Qp = Or.utcFormat, Or.utcParse, Or;
}
function CA(e2) {
  return new Date(e2);
}
function kA(e2) {
  return e2 instanceof Date ? +e2 : +/* @__PURE__ */ new Date(+e2);
}
function jl(e2, t, r, n, i, a, o, u, l, s) {
  var c = hl(), f = c.invert, d = c.domain, v = s(".%L"), p = s(":%S"), m = s("%I:%M"), y = s("%I %p"), g = s("%a %d"), w = s("%b %d"), b = s("%B"), O = s("%Y");
  function x(A) {
    return (l(A) < A ? v : u(A) < A ? p : o(A) < A ? m : a(A) < A ? y : n(A) < A ? i(A) < A ? g : w : r(A) < A ? b : O)(A);
  }
  return c.invert = function(A) {
    return new Date(f(A));
  }, c.domain = function(A) {
    return arguments.length ? d(Array.from(A, kA)) : d().map(CA);
  }, c.ticks = function(A) {
    var S = d();
    return e2(S[0], S[S.length - 1], A ?? 10);
  }, c.tickFormat = function(A, S) {
    return S == null ? x : s(S);
  }, c.nice = function(A) {
    var S = d();
    return (!A || typeof A.range != "function") && (A = t(S[0], S[S.length - 1], A ?? 10)), A ? d(Rp(S, A)) : c;
  }, c.copy = function() {
    return Un(c, jl(e2, t, r, n, i, a, o, u, l, s));
  }, c;
}
function TA() {
  return it.apply(jl(E1, _1, Dt, El, Va, Hn, Al, Pl, lr, Zp).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function MA() {
  return it.apply(jl(A1, S1, Nt, _l, Xa, Ya, Sl, Ol, lr, Qp).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Za() {
  var e2 = 0, t = 1, r, n, i, a, o = Me, u = false, l;
  function s(f) {
    return f == null || isNaN(f = +f) ? l : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  s.domain = function(f) {
    return arguments.length ? ([e2, t] = f, r = a(e2 = +e2), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e2, t];
  }, s.clamp = function(f) {
    return arguments.length ? (u = !!f, s) : u;
  }, s.interpolator = function(f) {
    return arguments.length ? (o = f, s) : o;
  };
  function c(f) {
    return function(d) {
      var v, p;
      return arguments.length ? ([v, p] = d, o = f(v, p), s) : [o(0), o(1)];
    };
  }
  return s.range = c(Br), s.rangeRound = c(vl), s.unknown = function(f) {
    return arguments.length ? (l = f, s) : l;
  }, function(f) {
    return a = f, r = f(e2), n = f(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function Qt(e2, t) {
  return t.domain(e2.domain()).interpolator(e2.interpolator()).clamp(e2.clamp()).unknown(e2.unknown());
}
function Jp() {
  var e2 = Zt(Za()(Me));
  return e2.copy = function() {
    return Qt(e2, Jp());
  }, Bt.apply(e2, arguments);
}
function em() {
  var e2 = yl(Za()).domain([1, 10]);
  return e2.copy = function() {
    return Qt(e2, em()).base(e2.base());
  }, Bt.apply(e2, arguments);
}
function tm() {
  var e2 = gl(Za());
  return e2.copy = function() {
    return Qt(e2, tm()).constant(e2.constant());
  }, Bt.apply(e2, arguments);
}
function Cl() {
  var e2 = bl(Za());
  return e2.copy = function() {
    return Qt(e2, Cl()).exponent(e2.exponent());
  }, Bt.apply(e2, arguments);
}
function IA() {
  return Cl.apply(null, arguments).exponent(0.5);
}
function rm() {
  var e2 = [], t = Me;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Wn(e2, n, 1) - 1) / (e2.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e2.slice();
    e2 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e2.push(i);
    return e2.sort(Yt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e2.map((n, i) => t(i / (e2.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => gO(e2, a / n));
  }, r.copy = function() {
    return rm(t).domain(e2);
  }, Bt.apply(r, arguments);
}
function Qa() {
  var e2 = 0, t = 0.5, r = 1, n = 1, i, a, o, u, l, s = Me, c, f = false, d;
  function v(m) {
    return isNaN(m = +m) ? d : (m = 0.5 + ((m = +c(m)) - a) * (n * m < n * a ? u : l), s(f ? Math.max(0, Math.min(1, m)) : m));
  }
  v.domain = function(m) {
    return arguments.length ? ([e2, t, r] = m, i = c(e2 = +e2), a = c(t = +t), o = c(r = +r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v) : [e2, t, r];
  }, v.clamp = function(m) {
    return arguments.length ? (f = !!m, v) : f;
  }, v.interpolator = function(m) {
    return arguments.length ? (s = m, v) : s;
  };
  function p(m) {
    return function(y) {
      var g, w, b;
      return arguments.length ? ([g, w, b] = y, s = HO(m, [g, w, b]), v) : [s(0), s(0.5), s(1)];
    };
  }
  return v.range = p(Br), v.rangeRound = p(vl), v.unknown = function(m) {
    return arguments.length ? (d = m, v) : d;
  }, function(m) {
    return c = m, i = m(e2), a = m(t), o = m(r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v;
  };
}
function nm() {
  var e2 = Zt(Qa()(Me));
  return e2.copy = function() {
    return Qt(e2, nm());
  }, Bt.apply(e2, arguments);
}
function im() {
  var e2 = yl(Qa()).domain([0.1, 1, 10]);
  return e2.copy = function() {
    return Qt(e2, im()).base(e2.base());
  }, Bt.apply(e2, arguments);
}
function am() {
  var e2 = gl(Qa());
  return e2.copy = function() {
    return Qt(e2, am()).constant(e2.constant());
  }, Bt.apply(e2, arguments);
}
function kl() {
  var e2 = bl(Qa());
  return e2.copy = function() {
    return Qt(e2, kl()).exponent(e2.exponent());
  }, Bt.apply(e2, arguments);
}
function DA() {
  return kl.apply(null, arguments).exponent(0.5);
}
const sn = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: sl, scaleDiverging: nm, scaleDivergingLog: im, scaleDivergingPow: kl, scaleDivergingSqrt: DA, scaleDivergingSymlog: am, scaleIdentity: Lp, scaleImplicit: pu, scaleLinear: $p, scaleLog: zp, scaleOrdinal: cl, scalePoint: xO, scalePow: wl, scaleQuantile: Wp, scaleQuantize: Kp, scaleRadial: Fp, scaleSequential: Jp, scaleSequentialLog: em, scaleSequentialPow: Cl, scaleSequentialQuantile: rm, scaleSequentialSqrt: IA, scaleSequentialSymlog: tm, scaleSqrt: h1, scaleSymlog: Bp, scaleThreshold: Up, scaleTime: TA, scaleUtc: MA, tickFormat: Np }, Symbol.toStringTag, { value: "Module" }));
var Jt = (e2) => e2.chartData, Tl = P([Jt], (e2) => {
  var t = e2.chartData != null ? e2.chartData.length - 1 : 0;
  return { chartData: e2.chartData, computedData: e2.computedData, dataEndIndex: t, dataStartIndex: 0 };
}), Ml = (e2, t, r, n) => n ? Tl(e2) : Jt(e2);
function Xt(e2) {
  if (Array.isArray(e2) && e2.length === 2) {
    var [t, r] = e2;
    if (ve(t) && ve(r)) return true;
  }
  return false;
}
function Rf(e2, t, r) {
  return r ? e2 : [Math.min(e2[0], t[0]), Math.max(e2[1], t[1])];
}
function om(e2, t) {
  if (t && typeof e2 != "function" && Array.isArray(e2) && e2.length === 2) {
    var [r, n] = e2, i, a;
    if (ve(r)) i = r;
    else if (typeof r == "function") return;
    if (ve(n)) a = n;
    else if (typeof n == "function") return;
    var o = [i, a];
    if (Xt(o)) return o;
  }
}
function NA(e2, t, r) {
  if (!(!r && t == null)) {
    if (typeof e2 == "function" && t != null) try {
      var n = e2(t, r);
      if (Xt(n)) return Rf(n, t, r);
    } catch {
    }
    if (Array.isArray(e2) && e2.length === 2) {
      var [i, a] = e2, o, u;
      if (i === "auto") t != null && (o = Math.min(...t));
      else if (N(i)) o = i;
      else if (typeof i == "function") try {
        t != null && (o = i(t == null ? void 0 : t[0]));
      } catch {
      }
      else if (typeof i == "string" && is.test(i)) {
        var l = is.exec(i);
        if (l == null || l[1] == null || t == null) o = void 0;
        else {
          var s = +l[1];
          o = t[0] - s;
        }
      } else o = t == null ? void 0 : t[0];
      if (a === "auto") t != null && (u = Math.max(...t));
      else if (N(a)) u = a;
      else if (typeof a == "function") try {
        t != null && (u = a(t == null ? void 0 : t[1]));
      } catch {
      }
      else if (typeof a == "string" && as.test(a)) {
        var c = as.exec(a);
        if (c == null || c[1] == null || t == null) u = void 0;
        else {
          var f = +c[1];
          u = t[1] + f;
        }
      } else u = t == null ? void 0 : t[1];
      var d = [o, u];
      if (Xt(d)) return t == null ? d : Rf(d, t, r);
    }
  }
}
var Fr = 1e9, $A = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, Dl, re = true, nt = "[DecimalError] ", dr = nt + "Invalid argument: ", Il = nt + "Exponent out of range: ", Wr = Math.floor, ar = Math.pow, LA = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, He, Pe = 1e7, ee = 7, um = 9007199254740991, na = Wr(um / ee), M = {};
M.absoluteValue = M.abs = function() {
  var e2 = new this.constructor(this);
  return e2.s && (e2.s = 1), e2;
};
M.comparedTo = M.cmp = function(e2) {
  var t, r, n, i, a = this;
  if (e2 = new a.constructor(e2), a.s !== e2.s) return a.s || -e2.s;
  if (a.e !== e2.e) return a.e > e2.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e2.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e2.d[t]) return a.d[t] > e2.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
M.decimalPlaces = M.dp = function() {
  var e2 = this, t = e2.d.length - 1, r = (t - e2.e) * ee;
  if (t = e2.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
M.dividedBy = M.div = function(e2) {
  return Ct(this, new this.constructor(e2));
};
M.dividedToIntegerBy = M.idiv = function(e2) {
  var t = this, r = t.constructor;
  return V(Ct(t, new r(e2), 0, 1), r.precision);
};
M.equals = M.eq = function(e2) {
  return !this.cmp(e2);
};
M.exponent = function() {
  return de(this);
};
M.greaterThan = M.gt = function(e2) {
  return this.cmp(e2) > 0;
};
M.greaterThanOrEqualTo = M.gte = function(e2) {
  return this.cmp(e2) >= 0;
};
M.isInteger = M.isint = function() {
  return this.e > this.d.length - 2;
};
M.isNegative = M.isneg = function() {
  return this.s < 0;
};
M.isPositive = M.ispos = function() {
  return this.s > 0;
};
M.isZero = function() {
  return this.s === 0;
};
M.lessThan = M.lt = function(e2) {
  return this.cmp(e2) < 0;
};
M.lessThanOrEqualTo = M.lte = function(e2) {
  return this.cmp(e2) < 1;
};
M.logarithm = M.log = function(e2) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e2 === void 0) e2 = new n(10);
  else if (e2 = new n(e2), e2.s < 1 || e2.eq(He)) throw Error(nt + "NaN");
  if (r.s < 1) throw Error(nt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(He) ? new n(0) : (re = false, t = Ct(Sn(r, a), Sn(e2, a), a), re = true, V(t, i));
};
M.minus = M.sub = function(e2) {
  var t = this;
  return e2 = new t.constructor(e2), t.s == e2.s ? sm(t, e2) : lm(t, (e2.s = -e2.s, e2));
};
M.modulo = M.mod = function(e2) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e2 = new n(e2), !e2.s) throw Error(nt + "NaN");
  return r.s ? (re = false, t = Ct(r, e2, 0, 1).times(e2), re = true, r.minus(t)) : V(new n(r), i);
};
M.naturalExponential = M.exp = function() {
  return cm(this);
};
M.naturalLogarithm = M.ln = function() {
  return Sn(this);
};
M.negated = M.neg = function() {
  var e2 = new this.constructor(this);
  return e2.s = -e2.s || 0, e2;
};
M.plus = M.add = function(e2) {
  var t = this;
  return e2 = new t.constructor(e2), t.s == e2.s ? lm(t, e2) : sm(t, (e2.s = -e2.s, e2));
};
M.precision = M.sd = function(e2) {
  var t, r, n, i = this;
  if (e2 !== void 0 && e2 !== !!e2 && e2 !== 1 && e2 !== 0) throw Error(dr + e2);
  if (t = de(i) + 1, n = i.d.length - 1, r = n * ee + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e2 && t > r ? t : r;
};
M.squareRoot = M.sqrt = function() {
  var e2, t, r, n, i, a, o, u = this, l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(nt + "NaN");
  }
  for (e2 = de(u), re = false, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = mt(u.d), (t.length + e2) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e2 = Wr((e2 + 1) / 2) - (e2 < 0 || e2 % 2), i == 1 / 0 ? t = "5e" + e2 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e2), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Ct(u, a, o + 2)).times(0.5), mt(a.d).slice(0, o) === (t = mt(n.d)).slice(0, o)) {
    if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
      if (V(a, r + 1, 0), a.times(a).eq(u)) {
        n = a;
        break;
      }
    } else if (t != "9999") break;
    o += 4;
  }
  return re = true, V(n, r);
};
M.times = M.mul = function(e2) {
  var t, r, n, i, a, o, u, l, s, c = this, f = c.constructor, d = c.d, v = (e2 = new f(e2)).d;
  if (!c.s || !e2.s) return new f(0);
  for (e2.s *= c.s, r = c.e + e2.e, l = d.length, s = v.length, l < s && (a = d, d = v, v = a, o = l, l = s, s = o), a = [], o = l + s, n = o; n--; ) a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; ) u = a[i] + v[n] * d[i - n - 1] + t, a[i--] = u % Pe | 0, t = u / Pe | 0;
    a[i] = (a[i] + t) % Pe | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e2.d = a, e2.e = r, re ? V(e2, f.precision) : e2;
};
M.toDecimalPlaces = M.todp = function(e2, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e2 === void 0 ? r : (xt(e2, 0, Fr), t === void 0 ? t = n.rounding : xt(t, 0, 8), V(r, e2 + de(r) + 1, t));
};
M.toExponential = function(e2, t) {
  var r, n = this, i = n.constructor;
  return e2 === void 0 ? r = yr(n, true) : (xt(e2, 0, Fr), t === void 0 ? t = i.rounding : xt(t, 0, 8), n = V(new i(n), e2 + 1, t), r = yr(n, true, e2 + 1)), r;
};
M.toFixed = function(e2, t) {
  var r, n, i = this, a = i.constructor;
  return e2 === void 0 ? yr(i) : (xt(e2, 0, Fr), t === void 0 ? t = a.rounding : xt(t, 0, 8), n = V(new a(i), e2 + de(i) + 1, t), r = yr(n.abs(), false, e2 + de(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
M.toInteger = M.toint = function() {
  var e2 = this, t = e2.constructor;
  return V(new t(e2), de(e2) + 1, t.rounding);
};
M.toNumber = function() {
  return +this;
};
M.toPower = M.pow = function(e2) {
  var t, r, n, i, a, o, u = this, l = u.constructor, s = 12, c = +(e2 = new l(e2));
  if (!e2.s) return new l(He);
  if (u = new l(u), !u.s) {
    if (e2.s < 1) throw Error(nt + "Infinity");
    return u;
  }
  if (u.eq(He)) return u;
  if (n = l.precision, e2.eq(He)) return V(u, n);
  if (t = e2.e, r = e2.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = c < 0 ? -c : c) <= um) {
      for (i = new l(He), t = Math.ceil(n / ee + 4), re = false; r % 2 && (i = i.times(u), Bf(i.d, t)), r = Wr(r / 2), r !== 0; ) u = u.times(u), Bf(u.d, t);
      return re = true, e2.s < 0 ? new l(He).div(i) : V(i, n);
    }
  } else if (a < 0) throw Error(nt + "NaN");
  return a = a < 0 && e2.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, re = false, i = e2.times(Sn(u, n + s)), re = true, i = cm(i), i.s = a, i;
};
M.toPrecision = function(e2, t) {
  var r, n, i = this, a = i.constructor;
  return e2 === void 0 ? (r = de(i), n = yr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (xt(e2, 1, Fr), t === void 0 ? t = a.rounding : xt(t, 0, 8), i = V(new a(i), e2, t), r = de(i), n = yr(i, e2 <= r || r <= a.toExpNeg, e2)), n;
};
M.toSignificantDigits = M.tosd = function(e2, t) {
  var r = this, n = r.constructor;
  return e2 === void 0 ? (e2 = n.precision, t = n.rounding) : (xt(e2, 1, Fr), t === void 0 ? t = n.rounding : xt(t, 0, 8)), V(new n(r), e2, t);
};
M.toString = M.valueOf = M.val = M.toJSON = M[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e2 = this, t = de(e2), r = e2.constructor;
  return yr(e2, t <= r.toExpNeg || t >= r.toExpPos);
};
function lm(e2, t) {
  var r, n, i, a, o, u, l, s, c = e2.constructor, f = c.precision;
  if (!e2.s || !t.s) return t.s || (t = new c(e2)), re ? V(t, f) : t;
  if (l = e2.d, s = t.d, o = e2.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, u = s.length) : (n = s, i = o, u = l.length), o = Math.ceil(f / ee), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = l.length, a = s.length, u - a < 0 && (a = u, n = s, s = l, l = n), r = 0; a; ) r = (l[--a] = l[a] + s[a] + r) / Pe | 0, l[a] %= Pe;
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return t.d = l, t.e = i, re ? V(t, f) : t;
}
function xt(e2, t, r) {
  if (e2 !== ~~e2 || e2 < t || e2 > r) throw Error(dr + e2);
}
function mt(e2) {
  var t, r, n, i = e2.length - 1, a = "", o = e2[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e2[t] + "", r = ee - n.length, r && (a += Ut(r)), a += n;
    o = e2[t], n = o + "", r = ee - n.length, r && (a += Ut(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Ct = /* @__PURE__ */ function() {
  function e2(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; ) a = n[u] * i + o, n[u] = a % Pe | 0, o = a / Pe | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, l;
    if (a != o) l = a > o ? 1 : -1;
    else for (u = l = 0; u < a; u++) if (n[u] != i[u]) {
      l = n[u] > i[u] ? 1 : -1;
      break;
    }
    return l;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Pe + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, l, s, c, f, d, v, p, m, y, g, w, b, O, x, A, S, k, T = n.constructor, D = n.s == i.s ? 1 : -1, E = n.d, C = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(nt + "Division by zero");
    for (l = n.e - i.e, S = C.length, x = E.length, v = new T(D), p = v.d = [], s = 0; C[s] == (E[s] || 0); ) ++s;
    if (C[s] > (E[s] || 0) && --l, a == null ? w = a = T.precision : o ? w = a + (de(n) - de(i)) + 1 : w = a, w < 0) return new T(0);
    if (w = w / ee + 2 | 0, s = 0, S == 1) for (c = 0, C = C[0], w++; (s < x || c) && w--; s++) b = c * Pe + (E[s] || 0), p[s] = b / C | 0, c = b % C | 0;
    else {
      for (c = Pe / (C[0] + 1) | 0, c > 1 && (C = e2(C, c), E = e2(E, c), S = C.length, x = E.length), O = S, m = E.slice(0, S), y = m.length; y < S; ) m[y++] = 0;
      k = C.slice(), k.unshift(0), A = C[0], C[1] >= Pe / 2 && ++A;
      do
        c = 0, u = t(C, m, S, y), u < 0 ? (g = m[0], S != y && (g = g * Pe + (m[1] || 0)), c = g / A | 0, c > 1 ? (c >= Pe && (c = Pe - 1), f = e2(C, c), d = f.length, y = m.length, u = t(f, m, d, y), u == 1 && (c--, r(f, S < d ? k : C, d))) : (c == 0 && (u = c = 1), f = C.slice()), d = f.length, d < y && f.unshift(0), r(m, f, y), u == -1 && (y = m.length, u = t(C, m, S, y), u < 1 && (c++, r(m, S < y ? k : C, y))), y = m.length) : u === 0 && (c++, m = [0]), p[s++] = c, u && m[0] ? m[y++] = E[O] || 0 : (m = [E[O]], y = 1);
      while ((O++ < x || m[0] !== void 0) && w--);
    }
    return p[0] || p.shift(), v.e = l, V(v, o ? a + de(v) + 1 : a);
  };
}();
function cm(e2, t) {
  var r, n, i, a, o, u, l = 0, s = 0, c = e2.constructor, f = c.precision;
  if (de(e2) > 16) throw Error(Il + de(e2));
  if (!e2.s) return new c(He);
  for (re = false, u = f, o = new c(0.03125); e2.abs().gte(0.1); ) e2 = e2.times(o), s += 5;
  for (n = Math.log(ar(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new c(He), c.precision = u; ; ) {
    if (i = V(i.times(e2), u), r = r.times(++l), o = a.plus(Ct(i, r, u)), mt(o.d).slice(0, u) === mt(a.d).slice(0, u)) {
      for (; s--; ) a = V(a.times(a), u);
      return c.precision = f, t == null ? (re = true, V(a, f)) : a;
    }
    a = o;
  }
}
function de(e2) {
  for (var t = e2.e * ee, r = e2.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ko(e2, t, r) {
  if (t > e2.LN10.sd()) throw re = true, r && (e2.precision = r), Error(nt + "LN10 precision limit exceeded");
  return V(new e2(e2.LN10), t);
}
function Ut(e2) {
  for (var t = ""; e2--; ) t += "0";
  return t;
}
function Sn(e2, t) {
  var r, n, i, a, o, u, l, s, c, f = 1, d = 10, v = e2, p = v.d, m = v.constructor, y = m.precision;
  if (v.s < 1) throw Error(nt + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(He)) return new m(0);
  if (t == null ? (re = false, s = y) : s = t, v.eq(10)) return t == null && (re = true), ko(m, s);
  if (s += d, m.precision = s, r = mt(p), n = r.charAt(0), a = de(v), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) v = v.times(e2), r = mt(v.d), n = r.charAt(0), f++;
    a = de(v), n > 1 ? (v = new m("0." + r), a++) : v = new m(n + "." + r.slice(1));
  } else return l = ko(m, s + 2, y).times(a + ""), v = Sn(new m(n + "." + r.slice(1)), s - d).plus(l), m.precision = y, t == null ? (re = true, V(v, y)) : v;
  for (u = o = v = Ct(v.minus(He), v.plus(He), s), c = V(v.times(v), s), i = 3; ; ) {
    if (o = V(o.times(c), s), l = u.plus(Ct(o, new m(i), s)), mt(l.d).slice(0, s) === mt(u.d).slice(0, s)) return u = u.times(2), a !== 0 && (u = u.plus(ko(m, s + 2, y).times(a + ""))), u = Ct(u, new m(f), s), m.precision = y, t == null ? (re = true, V(u, y)) : u;
    u = l, i += 2;
  }
}
function zf(e2, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e2.e = Wr(r / ee), e2.d = [], n = (r + 1) % ee, r < 0 && (n += ee), n < i) {
      for (n && e2.d.push(+t.slice(0, n)), i -= ee; n < i; ) e2.d.push(+t.slice(n, n += ee));
      t = t.slice(n), n = ee - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e2.d.push(+t), re && (e2.e > na || e2.e < -na)) throw Error(Il + r);
  } else e2.s = 0, e2.e = 0, e2.d = [0];
  return e2;
}
function V(e2, t, r) {
  var n, i, a, o, u, l, s, c, f = e2.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += ee, i = t, s = f[c = 0];
  else {
    if (c = Math.ceil((n + 1) / ee), a = f.length, c >= a) return e2;
    for (s = a = f[c], o = 1; a >= 10; a /= 10) o++;
    n %= ee, i = n - ee + o;
  }
  if (r !== void 0 && (a = ar(10, o - i - 1), u = s / a % 10 | 0, l = t < 0 || f[c + 1] !== void 0 || s % a, l = r < 4 ? (u || l) && (r == 0 || r == (e2.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? s / ar(10, o - i) : 0 : f[c - 1]) % 10 & 1 || r == (e2.s < 0 ? 8 : 7))), t < 1 || !f[0]) return l ? (a = de(e2), f.length = 1, t = t - a - 1, f[0] = ar(10, (ee - t % ee) % ee), e2.e = Wr(-t / ee) || 0) : (f.length = 1, f[0] = e2.e = e2.s = 0), e2;
  if (n == 0 ? (f.length = c, a = 1, c--) : (f.length = c + 1, a = ar(10, ee - n), f[c] = i > 0 ? (s / ar(10, o - i) % ar(10, i) | 0) * a : 0), l) for (; ; ) if (c == 0) {
    (f[0] += a) == Pe && (f[0] = 1, ++e2.e);
    break;
  } else {
    if (f[c] += a, f[c] != Pe) break;
    f[c--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (re && (e2.e > na || e2.e < -na)) throw Error(Il + de(e2));
  return e2;
}
function sm(e2, t) {
  var r, n, i, a, o, u, l, s, c, f, d = e2.constructor, v = d.precision;
  if (!e2.s || !t.s) return t.s ? t.s = -t.s : t = new d(e2), re ? V(t, v) : t;
  if (l = e2.d, f = t.d, n = t.e, s = e2.e, l = l.slice(), o = s - n, o) {
    for (c = o < 0, c ? (r = l, o = -o, u = f.length) : (r = f, n = s, u = l.length), i = Math.max(Math.ceil(v / ee), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, u = f.length, c = i < u, c && (u = i), i = 0; i < u; i++) if (l[i] != f[i]) {
      c = l[i] < f[i];
      break;
    }
    o = 0;
  }
  for (c && (r = l, l = f, f = r, t.s = -t.s), u = l.length, i = f.length - u; i > 0; --i) l[u++] = 0;
  for (i = f.length; i > o; ) {
    if (l[--i] < f[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Pe - 1;
      --l[a], l[i] += Pe;
    }
    l[i] -= f[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, re ? V(t, v) : t) : new d(0);
}
function yr(e2, t, r) {
  var n, i = de(e2), a = mt(e2.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Ut(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Ut(-i - 1) + a, r && (n = r - o) > 0 && (a += Ut(n))) : i >= o ? (a += Ut(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Ut(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Ut(n))), e2.s < 0 ? "-" + a : a;
}
function Bf(e2, t) {
  if (e2.length > t) return e2.length = t, true;
}
function fm(e2) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(dr + a);
      if (a > 0) o.s = 1;
      else if (a < 0) a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return zf(o, a.toString());
    } else if (typeof a != "string") throw Error(dr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, LA.test(a)) zf(o, a);
    else throw Error(dr + a);
  }
  if (i.prototype = M, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = fm, i.config = i.set = RA, e2 === void 0 && (e2 = {}), e2) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e2.hasOwnProperty(r = n[t++]) || (e2[r] = this[r]);
  return i.config(e2), i;
}
function RA(e2) {
  if (!e2 || typeof e2 != "object") throw Error(nt + "Object expected");
  var t, r, n, i = ["precision", 1, Fr, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e2[r = i[t]]) !== void 0) if (Wr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(dr + r + ": " + n);
  if ((n = e2[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(dr + r + ": " + n);
  return this;
}
var Dl = fm($A);
He = new Dl(1);
const q = Dl;
var zA = (e2) => e2, dm = {}, vm = (e2) => e2 === dm, Ff = (e2) => function t() {
  return arguments.length === 0 || arguments.length === 1 && vm(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e2(...arguments);
}, hm = (e2, t) => e2 === 1 ? t : Ff(function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  var a = n.filter((o) => o !== dm).length;
  return a >= e2 ? t(...n) : hm(e2 - a, Ff(function() {
    for (var o = arguments.length, u = new Array(o), l = 0; l < o; l++) u[l] = arguments[l];
    var s = n.map((c) => vm(c) ? u.shift() : c);
    return t(...s, ...u);
  }));
}), BA = (e2) => hm(e2.length, e2), bu = (e2, t) => {
  for (var r = [], n = e2; n < t; ++n) r[n - e2] = n;
  return r;
}, FA = BA((e2, t) => Array.isArray(t) ? t.map(e2) : Object.keys(t).map((r) => t[r]).map(e2)), WA = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return zA;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce((u, l) => l(u), a(...arguments));
  };
};
function pm(e2) {
  var t;
  return e2 === 0 ? t = 1 : t = Math.floor(new q(e2).abs().log(10).toNumber()) + 1, t;
}
function mm(e2, t, r) {
  for (var n = new q(e2), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var ym = (e2) => {
  var [t, r] = e2, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, gm = (e2, t, r) => {
  if (e2.lte(0)) return new q(0);
  var n = pm(e2.toNumber()), i = new q(10).pow(n), a = e2.div(i), o = n !== 1 ? 0.05 : 0.1, u = new q(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = u.mul(i);
  return t ? new q(l.toNumber()) : new q(Math.ceil(l.toNumber()));
}, KA = (e2, t, r) => {
  var n = new q(1), i = new q(e2);
  if (!i.isint() && r) {
    var a = Math.abs(e2);
    a < 1 ? (n = new q(10).pow(pm(e2) - 1), i = new q(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new q(Math.floor(e2)));
  } else e2 === 0 ? i = new q(Math.floor((t - 1) / 2)) : r || (i = new q(Math.floor(e2)));
  var o = Math.floor((t - 1) / 2), u = WA(FA((l) => i.add(new q(l - o).mul(n)).toNumber()), bu);
  return u(0, t);
}, bm = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1))) return { step: new q(0), tickMin: new q(0), tickMax: new q(0) };
  var o = gm(new q(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new q(0) : (u = new q(t).add(r).div(2), u = u.sub(new q(u).mod(o)));
  var l = Math.ceil(u.sub(t).div(o).toNumber()), s = Math.ceil(new q(r).sub(u).div(o).toNumber()), c = l + s + 1;
  return c > n ? bm(t, r, n, i, a + 1) : (c < n && (s = r > 0 ? s + (n - c) : s, l = r > 0 ? l : l + (n - c)), { step: o, tickMin: u.sub(new q(l).mul(o)), tickMax: u.add(new q(s).mul(o)) });
}, UA = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), [u, l] = ym([r, n]);
  if (u === -1 / 0 || l === 1 / 0) {
    var s = l === 1 / 0 ? [u, ...bu(0, i - 1).map(() => 1 / 0)] : [...bu(0, i - 1).map(() => -1 / 0), l];
    return r > n ? s.reverse() : s;
  }
  if (u === l) return KA(u, i, a);
  var { step: c, tickMin: f, tickMax: d } = bm(u, l, o, a, 0), v = mm(f, d.add(new q(0.1).mul(c)), c);
  return r > n ? v.reverse() : v;
}, HA = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, [o, u] = ym([n, i]);
  if (o === -1 / 0 || u === 1 / 0) return [n, i];
  if (o === u) return [o];
  var l = Math.max(r, 2), s = gm(new q(u).sub(o).div(l - 1), a, 0), c = [...mm(new q(o), new q(u), s), u];
  return a === false && (c = c.map((f) => Math.round(f))), n > i ? c.reverse() : c;
}, qA = (e2) => e2.rootProps.barCategoryGap, qn = (e2) => e2.rootProps.stackOffset, wm = (e2) => e2.rootProps.reverseStackOrder, Nl = (e2) => e2.options.chartName, $l = (e2) => e2.rootProps.syncId, xm = (e2) => e2.rootProps.syncMethod, Ll = (e2) => e2.options.eventEmitter, pe = { grid: -100, barBackground: -50, area: 100, cursorRectangle: 200, bar: 300, line: 400, axis: 500, scatter: 600, activeBar: 1e3, cursorLine: 1100, activeDot: 1200, label: 2e3 }, ht = { allowDecimals: false, allowDuplicatedCategory: true, angleAxisId: 0, axisLine: true, axisLineType: "polygon", cx: 0, cy: 0, orientation: "outer", reversed: false, scale: "auto", tick: true, tickLine: true, tickSize: 8, type: "category", zIndex: pe.axis }, Re = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: true, angle: 0, axisLine: true, includeHidden: false, hide: false, label: false, orientation: "right", radiusAxisId: 0, reversed: false, scale: "auto", stroke: "#ccc", tick: true, tickCount: 5, type: "number", zIndex: pe.axis }, Ja = (e2, t) => {
  if (!(!e2 || !t)) return e2 != null && e2.reversed ? [t[1], t[0]] : t;
}, GA = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: false, dataKey: void 0, domain: void 0, id: ht.angleAxisId, includeHidden: false, name: void 0, reversed: ht.reversed, scale: ht.scale, tick: ht.tick, tickCount: void 0, ticks: void 0, type: ht.type, unit: void 0 }, YA = { allowDataOverflow: Re.allowDataOverflow, allowDecimals: false, allowDuplicatedCategory: Re.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Re.radiusAxisId, includeHidden: false, name: void 0, reversed: false, scale: Re.scale, tick: Re.tick, tickCount: Re.tickCount, ticks: void 0, type: Re.type, unit: void 0 }, VA = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: ht.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: ht.angleAxisId, includeHidden: false, name: void 0, reversed: false, scale: ht.scale, tick: ht.tick, tickCount: void 0, ticks: void 0, type: "number", unit: void 0 }, XA = { allowDataOverflow: Re.allowDataOverflow, allowDecimals: false, allowDuplicatedCategory: Re.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Re.radiusAxisId, includeHidden: false, name: void 0, reversed: false, scale: Re.scale, tick: Re.tick, tickCount: Re.tickCount, ticks: void 0, type: "category", unit: void 0 }, Kr = (e2, t) => e2.polarAxis.angleAxis[t] != null ? e2.polarAxis.angleAxis[t] : e2.layout.layoutType === "radial" ? VA : GA, Gn = (e2, t) => e2.polarAxis.radiusAxis[t] != null ? e2.polarAxis.radiusAxis[t] : e2.layout.layoutType === "radial" ? XA : YA, eo = (e2) => e2.polarOptions, Rl = P([Rt, zt, _e], XP), Pm = P([eo, Rl], (e2, t) => {
  if (e2 != null) return Vt(e2.innerRadius, t, 0);
}), Om = P([eo, Rl], (e2, t) => {
  if (e2 != null) return Vt(e2.outerRadius, t, t * 0.8);
}), ZA = (e2) => {
  if (e2 == null) return [0, 0];
  var { startAngle: t, endAngle: r } = e2;
  return [t, r];
}, Am = P([eo], ZA), QA = P([Kr, Am], Ja), Sm = P([Rl, Pm, Om], (e2, t, r) => {
  if (!(e2 == null || t == null || r == null)) return [t, r];
}), JA = P([Gn, Sm], Ja), Ur = P([U, eo, Pm, Om, Rt, zt], (e2, t, r, n, i, a) => {
  if (!(e2 !== "centric" && e2 !== "radial" || t == null || r == null || n == null)) {
    var { cx: o, cy: u, startAngle: l, endAngle: s } = t;
    return { cx: Vt(o, i, i / 2), cy: Vt(u, a, a / 2), innerRadius: r, outerRadius: n, startAngle: l, endAngle: s, clockWise: false };
  }
}), X = (e2, t) => t, Yn = (e2, t, r) => r;
function Em(e2) {
  return e2 == null ? void 0 : e2.id;
}
function _m(e2, t, r) {
  var { chartData: n = [] } = t, { allowDuplicatedCategory: i, dataKey: a } = r, o = /* @__PURE__ */ new Map();
  return e2.forEach((u) => {
    var l, s = (l = u.data) !== null && l !== void 0 ? l : n;
    if (!(s == null || s.length === 0)) {
      var c = Em(u);
      s.forEach((f, d) => {
        var v = a == null || i ? d : String(ue(f, a, null)), p = ue(f, u.dataKey, 0), m;
        o.has(v) ? m = o.get(v) : m = {}, Object.assign(m, { [c]: p }), o.set(v, m);
      });
    }
  }), Array.from(o.values());
}
function zl(e2) {
  return "stackId" in e2 && e2.stackId != null && e2.dataKey != null;
}
var to = (e2, t) => e2 === t ? true : e2 == null || t == null ? false : e2[0] === t[0] && e2[1] === t[1];
function ro(e2, t) {
  return Array.isArray(e2) && Array.isArray(t) && e2.length === 0 && t.length === 0 ? true : e2 === t;
}
function eS(e2, t) {
  if (e2.length === t.length) {
    for (var r = 0; r < e2.length; r++) if (e2[r] !== t[r]) return false;
    return true;
  }
  return false;
}
var ge = (e2) => {
  var t = U(e2);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, Hr = (e2) => e2.tooltip.settings.axisId;
function Wf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ia(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wf(Object(r), true).forEach(function(n) {
      tS(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Wf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function tS(e2, t, r) {
  return (t = rS(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function rS(e2) {
  var t = nS(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nS(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var wu = [0, "auto"], we = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: void 0, height: 30, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "bottom", padding: { left: 0, right: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "category", unit: void 0 }, jm = (e2, t) => e2.cartesianAxis.xAxis[t], Ft = (e2, t) => {
  var r = jm(e2, t);
  return r ?? we;
}, xe = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: wu, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "left", padding: { top: 0, bottom: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "number", unit: void 0, width: zn }, Cm = (e2, t) => e2.cartesianAxis.yAxis[t], Wt = (e2, t) => {
  var r = Cm(e2, t);
  return r ?? xe;
}, iS = { domain: [0, "auto"], includeHidden: false, reversed: false, allowDataOverflow: false, allowDuplicatedCategory: false, dataKey: void 0, id: 0, name: "", range: [64, 64], scale: "auto", type: "number", unit: "" }, Bl = (e2, t) => {
  var r = e2.cartesianAxis.zAxis[t];
  return r ?? iS;
}, ae = (e2, t, r) => {
  switch (t) {
    case "xAxis":
      return Ft(e2, r);
    case "yAxis":
      return Wt(e2, r);
    case "zAxis":
      return Bl(e2, r);
    case "angleAxis":
      return Kr(e2, r);
    case "radiusAxis":
      return Gn(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, aS = (e2, t, r) => {
  switch (t) {
    case "xAxis":
      return Ft(e2, r);
    case "yAxis":
      return Wt(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, qr = (e2, t, r) => {
  switch (t) {
    case "xAxis":
      return Ft(e2, r);
    case "yAxis":
      return Wt(e2, r);
    case "angleAxis":
      return Kr(e2, r);
    case "radiusAxis":
      return Gn(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, km = (e2) => e2.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e2.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Fl(e2, t) {
  return (r) => {
    switch (e2) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return false;
    }
  };
}
var Tm = (e2) => e2.graphicalItems.cartesianItems, oS = P([X, Yn], Fl), Wl = (e2, t, r) => e2.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === true ? true : !n.hide), Vn = P([Tm, ae, oS], Wl, { memoizeOptions: { resultEqualityCheck: ro } }), Mm = P([Vn], (e2) => e2.filter((t) => t.type === "area" || t.type === "bar").filter(zl)), Im = (e2) => e2.filter((t) => !("stackId" in t) || t.stackId === void 0), uS = P([Vn], Im), Kl = (e2) => e2.map((t) => t.data).filter(Boolean).flat(1), lS = P([Vn], Kl, { memoizeOptions: { resultEqualityCheck: ro } }), Ul = (e2, t) => {
  var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
  return e2.length > 0 ? e2 : r.slice(n, i + 1);
}, Hl = P([lS, Ml], Ul), ql = (e2, t, r) => (t == null ? void 0 : t.dataKey) != null ? e2.map((n) => ({ value: ue(n, t.dataKey) })) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e2.map((i) => ({ value: ue(i, n) }))) : e2.map((n) => ({ value: n })), no = P([Hl, ae, Vn], ql);
function Dm(e2, t) {
  switch (e2) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return false;
  }
}
function Oi(e2) {
  if (bt(e2) || e2 instanceof Date) {
    var t = Number(e2);
    if (ve(t)) return t;
  }
}
function Kf(e2) {
  if (Array.isArray(e2)) {
    var t = [Oi(e2[0]), Oi(e2[1])];
    return Xt(t) ? t : void 0;
  }
  var r = Oi(e2);
  if (r != null) return [r, r];
}
function $t(e2) {
  return e2.map(Oi).filter(W0);
}
function cS(e2, t, r) {
  return !r || typeof t != "number" || gt(t) ? [] : r.length ? $t(r.flatMap((n) => {
    var i = ue(e2, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!ve(a) || !ve(o))) return [t - a, t + o];
  })) : [];
}
var be = (e2) => {
  var t = ge(e2), r = Hr(e2);
  return qr(e2, t, r);
}, Xn = P([be], (e2) => e2 == null ? void 0 : e2.dataKey), sS = P([Mm, Ml, be], _m), Nm = (e2, t, r, n) => {
  var i = {}, a = t.reduce((o, u) => {
    if (u.stackId == null) return o;
    var l = o[u.stackId];
    return l == null && (l = []), l.push(u), o[u.stackId] = l, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [u, l] = o, s = n ? [...l].reverse() : l, c = s.map(Em);
    return [u, { stackedData: Xw(e2, c, r), graphicalItems: s }];
  }));
}, fS = P([sS, Mm, qn, wm], Nm), $m = (e2, t, r, n) => {
  var { dataStartIndex: i, dataEndIndex: a } = t;
  if (n == null && r !== "zAxis") {
    var o = Jw(e2, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0)) return o;
  }
}, dS = P([ae], (e2) => e2.allowDataOverflow), Gl = (e2) => {
  var t;
  if (e2 == null || !("domain" in e2)) return wu;
  if (e2.domain != null) return e2.domain;
  if ("ticks" in e2 && e2.ticks != null) {
    if (e2.type === "number") {
      var r = $t(e2.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e2.type === "category") return e2.ticks.map(String);
  }
  return (t = e2 == null ? void 0 : e2.domain) !== null && t !== void 0 ? t : wu;
}, Yl = P([ae], Gl), Vl = P([Yl, dS], om), vS = P([fS, Jt, X, Vl], $m, { memoizeOptions: { resultEqualityCheck: to } }), io = (e2) => e2.errorBars, hS = (e2, t, r) => e2.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Dm(r, n)), aa = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, Xl = (e2, t, r, n, i) => {
  var a, o;
  if (r.length > 0 && e2.forEach((u) => {
    r.forEach((l) => {
      var s, c, f = (s = n[l.id]) === null || s === void 0 ? void 0 : s.filter((g) => Dm(i, g)), d = ue(u, (c = t.dataKey) !== null && c !== void 0 ? c : l.dataKey), v = cS(u, d, f);
      if (v.length >= 2) {
        var p = Math.min(...v), m = Math.max(...v);
        (a == null || p < a) && (a = p), (o == null || m > o) && (o = m);
      }
      var y = Kf(d);
      y != null && (a = a == null ? y[0] : Math.min(a, y[0]), o = o == null ? y[1] : Math.max(o, y[1]));
    });
  }), (t == null ? void 0 : t.dataKey) != null && e2.forEach((u) => {
    var l = Kf(ue(u, t.dataKey));
    l != null && (a = a == null ? l[0] : Math.min(a, l[0]), o = o == null ? l[1] : Math.max(o, l[1]));
  }), ve(a) && ve(o)) return [a, o];
}, pS = P([Hl, ae, uS, io, X], Xl, { memoizeOptions: { resultEqualityCheck: to } });
function mS(e2) {
  var { value: t } = e2;
  if (bt(t) || t instanceof Date) return t;
}
var yS = (e2, t, r) => {
  var n = e2.map(mS).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Iv(n)) ? Sp(0, e2.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, Lm = (e2) => e2.referenceElements.dots, Gr = (e2, t, r) => e2.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), gS = P([Lm, X, Yn], Gr), Rm = (e2) => e2.referenceElements.areas, bS = P([Rm, X, Yn], Gr), zm = (e2) => e2.referenceElements.lines, wS = P([zm, X, Yn], Gr), Bm = (e2, t) => {
  if (e2 != null) {
    var r = $t(e2.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, xS = P(gS, X, Bm), Fm = (e2, t) => {
  if (e2 != null) {
    var r = $t(e2.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, PS = P([bS, X], Fm);
function OS(e2) {
  var t;
  if (e2.x != null) return $t([e2.x]);
  var r = (t = e2.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : $t(r);
}
function AS(e2) {
  var t;
  if (e2.y != null) return $t([e2.y]);
  var r = (t = e2.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : $t(r);
}
var Wm = (e2, t) => {
  if (e2 != null) {
    var r = e2.flatMap((n) => t === "xAxis" ? OS(n) : AS(n));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, SS = P([wS, X], Wm), ES = P(xS, SS, PS, (e2, t, r) => aa(e2, r, t)), Zl = (e2, t, r, n, i, a, o, u) => {
  if (r != null) return r;
  var l = o === "vertical" && u === "xAxis" || o === "horizontal" && u === "yAxis", s = l ? aa(n, a, i) : aa(a, i);
  return NA(t, s, e2.allowDataOverflow);
}, _S = P([ae, Yl, Vl, vS, pS, ES, U, X], Zl, { memoizeOptions: { resultEqualityCheck: to } }), jS = [0, 1], Ql = (e2, t, r, n, i, a, o) => {
  if (!((e2 == null || r == null || r.length === 0) && o === void 0)) {
    var { dataKey: u, type: l } = e2, s = Lt(t, a);
    if (s && u == null) {
      var c;
      return Sp(0, (c = r == null ? void 0 : r.length) !== null && c !== void 0 ? c : 0);
    }
    return l === "category" ? yS(n, e2, s) : i === "expand" ? jS : o;
  }
}, Jl = P([ae, U, Hl, no, qn, X, _S], Ql), Km = (e2, t, r, n, i) => {
  if (e2 != null) {
    var { scale: a, type: o } = e2;
    if (a === "auto") return t === "radial" && i === "radiusAxis" ? "band" : t === "radial" && i === "angleAxis" ? "linear" : o === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : o === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var u = "scale".concat(In(a));
      return u in sn ? u : "point";
    }
  }
}, er = P([ae, U, km, Nl, X], Km);
function CS(e2) {
  if (e2 != null) {
    if (e2 in sn) return sn[e2]();
    var t = "scale".concat(In(e2));
    if (t in sn) return sn[t]();
  }
}
function ao(e2, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e2.scale == "function") return e2.scale.copy().domain(r).range(n);
    var i = CS(t);
    if (i != null) {
      var a = i.domain(r).range(n);
      return qw(a), a;
    }
  }
}
var ec = (e2, t, r) => {
  var n = Gl(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && Xt(e2)) return UA(e2, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && Xt(e2)) return HA(e2, t.tickCount, t.allowDecimals);
  }
}, tc = P([Jl, qr, er], ec), rc = (e2, t, r, n) => {
  if (n !== "angleAxis" && (e2 == null ? void 0 : e2.type) === "number" && Xt(t) && Array.isArray(r) && r.length > 0) {
    var i = t[0], a = r[0], o = t[1], u = r[r.length - 1];
    return [Math.min(i, a), Math.max(o, u)];
  }
  return t;
}, kS = P([ae, Jl, tc, X], rc), TS = P(no, ae, (e2, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from($t(e2.map((f) => f.value))).sort((f, d) => f - d), i = n[0], a = n[n.length - 1];
    if (i == null || a == null) return 1 / 0;
    var o = a - i;
    if (o === 0) return 1 / 0;
    for (var u = 0; u < n.length - 1; u++) {
      var l = n[u], s = n[u + 1];
      if (!(l == null || s == null)) {
        var c = s - l;
        r = Math.min(r, c);
      }
    }
    return r / o;
  }
}), Um = P(TS, U, qA, _e, (e2, t, r, n, i) => i, (e2, t, r, n, i) => {
  if (!ve(e2)) return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap") return e2 * a / 2;
  if (i === "no-gap") {
    var o = Vt(r, e2 * a), u = e2 * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), MS = (e2, t, r) => {
  var n = Ft(e2, t);
  return n == null || typeof n.padding != "string" ? 0 : Um(e2, "xAxis", t, r, n.padding);
}, IS = (e2, t, r) => {
  var n = Wt(e2, t);
  return n == null || typeof n.padding != "string" ? 0 : Um(e2, "yAxis", t, r, n.padding);
}, DS = P(Ft, MS, (e2, t) => {
  var r, n;
  if (e2 == null) return { left: 0, right: 0 };
  var { padding: i } = e2;
  return typeof i == "string" ? { left: t, right: t } : { left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t, right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t };
}), NS = P(Wt, IS, (e2, t) => {
  var r, n;
  if (e2 == null) return { top: 0, bottom: 0 };
  var { padding: i } = e2;
  return typeof i == "string" ? { top: t, bottom: t } : { top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t, bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t };
}), $S = P([_e, DS, Ra, La, (e2, t, r) => r], (e2, t, r, n, i) => {
  var { padding: a } = n;
  return i ? [a.left, r.width - a.right] : [e2.left + t.left, e2.left + e2.width - t.right];
}), LS = P([_e, U, NS, Ra, La, (e2, t, r) => r], (e2, t, r, n, i, a) => {
  var { padding: o } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e2.top + e2.height - r.bottom, e2.top + r.top] : [e2.top + r.top, e2.top + e2.height - r.bottom];
}), Zn = (e2, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return $S(e2, r, n);
    case "yAxis":
      return LS(e2, r, n);
    case "zAxis":
      return (i = Bl(e2, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return Am(e2);
    case "radiusAxis":
      return Sm(e2, r);
    default:
      return;
  }
}, Hm = P([ae, Zn], Ja), oo = P([ae, er, kS, Hm], ao);
P([Vn, io, X], hS);
function qm(e2, t) {
  return e2.id < t.id ? -1 : e2.id > t.id ? 1 : 0;
}
var uo = (e2, t) => t, lo = (e2, t, r) => r, RS = P(Na, uo, lo, (e2, t, r) => e2.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(qm)), zS = P($a, uo, lo, (e2, t, r) => e2.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(qm)), Gm = (e2, t) => ({ width: e2.width, height: t.height }), BS = (e2, t) => {
  var r = typeof t.width == "number" ? t.width : zn;
  return { width: r, height: e2.height };
}, FS = P(_e, Ft, Gm), WS = (e2, t, r) => {
  switch (t) {
    case "top":
      return e2.top;
    case "bottom":
      return r - e2.bottom;
    default:
      return 0;
  }
}, KS = (e2, t, r) => {
  switch (t) {
    case "left":
      return e2.left;
    case "right":
      return r - e2.right;
    default:
      return 0;
  }
}, US = P(zt, _e, RS, uo, lo, (e2, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = Gm(t, u);
    o == null && (o = WS(t, n, e2));
    var s = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(s) * l.height, o += (s ? -1 : 1) * l.height;
  }), a;
}), HS = P(Rt, _e, zS, uo, lo, (e2, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = BS(t, u);
    o == null && (o = KS(t, n, e2));
    var s = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(s) * l.width, o += (s ? -1 : 1) * l.width;
  }), a;
}), qS = (e2, t) => {
  var r = Ft(e2, t);
  if (r != null) return US(e2, r.orientation, r.mirror);
}, GS = P([_e, Ft, qS, (e2, t) => t], (e2, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: e2.left, y: 0 } : { x: e2.left, y: i };
  }
}), YS = (e2, t) => {
  var r = Wt(e2, t);
  if (r != null) return HS(e2, r.orientation, r.mirror);
}, VS = P([_e, Wt, YS, (e2, t) => t], (e2, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: 0, y: e2.top } : { x: i, y: e2.top };
  }
}), XS = P(_e, Wt, (e2, t) => {
  var r = typeof t.width == "number" ? t.width : zn;
  return { width: r, height: e2.height };
}), Ym = (e2, t, r, n) => {
  if (r != null) {
    var { allowDuplicatedCategory: i, type: a, dataKey: o } = r, u = Lt(e2, n), l = t.map((s) => s.value);
    if (o && u && a === "category" && i && Iv(l)) return l;
  }
}, Qn = P([U, no, ae, X], Ym), nc = (e2, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var { type: i, scale: a } = r, o = Lt(e2, n);
    if (o && (i === "number" || a !== "auto")) return t.map((u) => u.value);
  }
}, ic = P([U, no, qr, X], nc), Uf = P([U, aS, er, oo, Qn, ic, Zn, tc, X], (e2, t, r, n, i, a, o, u, l) => {
  if (t != null) {
    var s = Lt(e2, l);
    return { angle: t.angle, interval: t.interval, minTickGap: t.minTickGap, orientation: t.orientation, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, axisType: l, categoricalDomain: a, duplicateDomain: i, isCategorical: s, niceTicks: u, range: o, realScaleType: r, scale: n };
  }
}), Vm = (e2, t, r, n, i, a, o, u, l) => {
  if (!(t == null || n == null)) {
    var s = Lt(e2, l), { type: c, ticks: f, tickCount: d } = t, v = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, p = c === "category" && n.bandwidth ? n.bandwidth() / v : 0;
    p = l === "angleAxis" && a != null && a.length >= 2 ? et(a[0] - a[1]) * 2 * p : p;
    var m = f || i;
    if (m) {
      var y = m.map((g, w) => {
        var b = o ? o.indexOf(g) : g;
        return { index: w, coordinate: n(b) + p, value: g, offset: p };
      });
      return y.filter((g) => ve(g.coordinate));
    }
    return s && u ? u.map((g, w) => ({ coordinate: n(g) + p, value: g, index: w, offset: p })).filter((g) => ve(g.coordinate)) : n.ticks ? n.ticks(d).map((g) => ({ coordinate: n(g) + p, value: g, offset: p })) : n.domain().map((g, w) => ({ coordinate: n(g) + p, value: o ? o[g] : g, index: w, offset: p }));
  }
}, Xm = P([U, qr, er, oo, tc, Zn, Qn, ic, X], Vm), Zm = (e2, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = Lt(e2, o), { tickCount: l } = t, s = 0;
    return s = o === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? et(n[0] - n[1]) * 2 * s : s, u && a ? a.map((c, f) => ({ coordinate: r(c) + s, value: c, index: f, offset: s })) : r.ticks ? r.ticks(l).map((c) => ({ coordinate: r(c) + s, value: c, offset: s })) : r.domain().map((c, f) => ({ coordinate: r(c) + s, value: i ? i[c] : c, index: f, offset: s }));
  }
}, Qm = P([U, qr, oo, Zn, Qn, ic, X], Zm), Jm = P(ae, oo, (e2, t) => {
  if (!(e2 == null || t == null)) return ia(ia({}, e2), {}, { scale: t });
}), ZS = P([ae, er, Jl, Hm], ao);
P((e2, t, r) => Bl(e2, r), ZS, (e2, t) => {
  if (!(e2 == null || t == null)) return ia(ia({}, e2), {}, { scale: t });
});
var QS = P([U, Na, $a], (e2, t, r) => {
  switch (e2) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), ey = (e2) => e2.options.defaultTooltipEventType, ty = (e2) => e2.options.validateTooltipEventTypes;
function ry(e2, t, r) {
  if (e2 == null) return t;
  var n = e2 ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function ac(e2, t) {
  var r = ey(e2), n = ty(e2);
  return ry(t, r, n);
}
function JS(e2) {
  return I((t) => ac(t, e2));
}
var ny = (e2, t) => {
  var r, n = Number(t);
  if (!(gt(n) || t == null)) return n >= 0 ? e2 == null || (r = e2[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, eE = (e2) => e2.tooltip.settings, qt = { active: false, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 }, tE = { itemInteraction: { click: qt, hover: qt }, axisInteraction: { click: qt, hover: qt }, keyboardInteraction: qt, syncInteraction: { active: false, index: null, dataKey: void 0, label: void 0, coordinate: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }, tooltipItemPayloads: [], settings: { shared: void 0, trigger: "hover", axisId: 0, active: false, defaultIndex: void 0 } }, iy = Fe({ name: "tooltip", initialState: tE, reducers: { addTooltipEntrySettings: { reducer(e2, t) {
  e2.tooltipItemPayloads.push(t.payload);
}, prepare: te() }, replaceTooltipEntrySettings: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload, i = ct(e2).tooltipItemPayloads.indexOf(r);
  i > -1 && (e2.tooltipItemPayloads[i] = n);
}, prepare: te() }, removeTooltipEntrySettings: { reducer(e2, t) {
  var r = ct(e2).tooltipItemPayloads.indexOf(t.payload);
  r > -1 && e2.tooltipItemPayloads.splice(r, 1);
}, prepare: te() }, setTooltipSettingsState(e2, t) {
  e2.settings = t.payload;
}, setActiveMouseOverItemIndex(e2, t) {
  e2.syncInteraction.active = false, e2.keyboardInteraction.active = false, e2.itemInteraction.hover.active = true, e2.itemInteraction.hover.index = t.payload.activeIndex, e2.itemInteraction.hover.dataKey = t.payload.activeDataKey, e2.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e2.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
}, mouseLeaveChart(e2) {
  e2.itemInteraction.hover.active = false, e2.axisInteraction.hover.active = false;
}, mouseLeaveItem(e2) {
  e2.itemInteraction.hover.active = false;
}, setActiveClickItemIndex(e2, t) {
  e2.syncInteraction.active = false, e2.itemInteraction.click.active = true, e2.keyboardInteraction.active = false, e2.itemInteraction.click.index = t.payload.activeIndex, e2.itemInteraction.click.dataKey = t.payload.activeDataKey, e2.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e2.itemInteraction.click.coordinate = t.payload.activeCoordinate;
}, setMouseOverAxisIndex(e2, t) {
  e2.syncInteraction.active = false, e2.axisInteraction.hover.active = true, e2.keyboardInteraction.active = false, e2.axisInteraction.hover.index = t.payload.activeIndex, e2.axisInteraction.hover.dataKey = t.payload.activeDataKey, e2.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
}, setMouseClickAxisIndex(e2, t) {
  e2.syncInteraction.active = false, e2.keyboardInteraction.active = false, e2.axisInteraction.click.active = true, e2.axisInteraction.click.index = t.payload.activeIndex, e2.axisInteraction.click.dataKey = t.payload.activeDataKey, e2.axisInteraction.click.coordinate = t.payload.activeCoordinate;
}, setSyncInteraction(e2, t) {
  e2.syncInteraction = t.payload;
}, setKeyboardInteraction(e2, t) {
  e2.keyboardInteraction.active = t.payload.active, e2.keyboardInteraction.index = t.payload.activeIndex, e2.keyboardInteraction.coordinate = t.payload.activeCoordinate;
} } }), { addTooltipEntrySettings: rE, replaceTooltipEntrySettings: nE, removeTooltipEntrySettings: iE, setTooltipSettingsState: aE, setActiveMouseOverItemIndex: oE, mouseLeaveItem: kN, mouseLeaveChart: ay, setActiveClickItemIndex: TN, setMouseOverAxisIndex: oy, setMouseClickAxisIndex: uE, setSyncInteraction: xu, setKeyboardInteraction: Pu } = iy.actions, lE = iy.reducer;
function Hf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yi(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hf(Object(r), true).forEach(function(n) {
      cE(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function cE(e2, t, r) {
  return (t = sE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function sE(e2) {
  var t = fE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function dE(e2, t, r) {
  return t === "axis" ? r === "click" ? e2.axisInteraction.click : e2.axisInteraction.hover : r === "click" ? e2.itemInteraction.click : e2.itemInteraction.hover;
}
function vE(e2) {
  return e2.index != null;
}
var uy = (e2, t, r, n) => {
  if (t == null) return qt;
  var i = dE(e2, t, r);
  if (i == null) return qt;
  if (i.active) return i;
  if (e2.keyboardInteraction.active) return e2.keyboardInteraction;
  if (e2.syncInteraction.active && e2.syncInteraction.index != null) return e2.syncInteraction;
  var a = e2.settings.active === true;
  if (vE(i)) {
    if (a) return yi(yi({}, i), {}, { active: true });
  } else if (n != null) return { active: true, coordinate: void 0, dataKey: void 0, index: n, graphicalItemId: void 0 };
  return yi(yi({}, qt), {}, { coordinate: i.coordinate });
};
function hE(e2) {
  if (typeof e2 == "number") return Number.isFinite(e2) ? e2 : void 0;
  if (e2 instanceof Date) {
    var t = e2.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e2);
  return Number.isFinite(r) ? r : void 0;
}
function pE(e2, t) {
  var r = hE(e2), n = t[0], i = t[1];
  if (r === void 0) return false;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function mE(e2, t, r) {
  if (r == null || t == null) return true;
  var n = ue(e2, t);
  return n == null || !Xt(r) ? true : pE(n, r);
}
var oc = (e2, t, r, n) => {
  var i = e2 == null ? void 0 : e2.index;
  if (i == null) return null;
  var a = Number(i);
  if (!ve(a)) return i;
  var o = 0, u = 1 / 0;
  t.length > 0 && (u = t.length - 1);
  var l = Math.max(o, Math.min(a, u)), s = t[l];
  return s == null || mE(s, r, n) ? String(l) : null;
}, ly = (e2, t, r, n, i, a, o, u) => {
  if (!(a == null || u == null)) {
    var l = o[0], s = l == null ? void 0 : u(l.positions, a);
    if (s != null) return s;
    var c = i == null ? void 0 : i[Number(a)];
    if (c) switch (r) {
      case "horizontal":
        return { x: c.coordinate, y: (n.top + t) / 2 };
      default:
        return { x: (n.left + e2) / 2, y: c.coordinate };
    }
  }
}, cy = (e2, t, r, n) => {
  if (t === "axis") return e2.tooltipItemPayloads;
  if (e2.tooltipItemPayloads.length === 0) return [];
  var i;
  if (r === "hover" ? i = e2.itemInteraction.hover.graphicalItemId : i = e2.itemInteraction.click.graphicalItemId, i == null && n != null) {
    var a = e2.tooltipItemPayloads[0];
    return a != null ? [a] : [];
  }
  return e2.tooltipItemPayloads.filter((o) => {
    var u;
    return ((u = o.settings) === null || u === void 0 ? void 0 : u.graphicalItemId) === i;
  });
}, Jn = (e2) => e2.options.tooltipPayloadSearcher, Yr = (e2) => e2.tooltip;
function qf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qf(Object(r), true).forEach(function(n) {
      yE(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function yE(e2, t, r) {
  return (t = gE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function gE(e2) {
  var t = bE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function bE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function wE(e2, t) {
  return e2 ?? t;
}
var sy = (e2, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var { chartData: u, computedData: l, dataStartIndex: s, dataEndIndex: c } = r, f = [];
    return e2.reduce((d, v) => {
      var p, { dataDefinedOnItem: m, settings: y } = v, g = wE(m, u), w = Array.isArray(g) ? Bh(g, s, c) : g, b = (p = y == null ? void 0 : y.dataKey) !== null && p !== void 0 ? p : n, O = y == null ? void 0 : y.nameKey, x;
      if (n && Array.isArray(w) && !Array.isArray(w[0]) && o === "axis" ? x = Dv(w, n, i) : x = a(w, t, l, O), Array.isArray(x)) x.forEach((S) => {
        var k = Gf(Gf({}, y), {}, { name: S.name, unit: S.unit, color: void 0, fill: void 0 });
        d.push(os({ tooltipEntrySettings: k, dataKey: S.dataKey, payload: S.payload, value: ue(S.payload, S.dataKey), name: S.name }));
      });
      else {
        var A;
        d.push(os({ tooltipEntrySettings: y, dataKey: b, payload: x, value: ue(x, b), name: (A = ue(x, O)) !== null && A !== void 0 ? A : y == null ? void 0 : y.name }));
      }
      return d;
    }, f);
  }
}, uc = P([be, U, km, Nl, ge], Km), xE = P([(e2) => e2.graphicalItems.cartesianItems, (e2) => e2.graphicalItems.polarItems], (e2, t) => [...e2, ...t]), PE = P([ge, Hr], Fl), Vr = P([xE, be, PE], Wl, { memoizeOptions: { resultEqualityCheck: ro } }), OE = P([Vr], (e2) => e2.filter(zl)), AE = P([Vr], Kl, { memoizeOptions: { resultEqualityCheck: ro } }), Xr = P([AE, Jt], Ul), SE = P([OE, Jt, be], _m), lc = P([Xr, be, Vr], ql), fy = P([be], Gl), EE = P([be], (e2) => e2.allowDataOverflow), dy = P([fy, EE], om), _E = P([Vr], (e2) => e2.filter(zl)), jE = P([SE, _E, qn, wm], Nm), CE = P([jE, Jt, ge, dy], $m), kE = P([Vr], Im), TE = P([Xr, be, kE, io, ge], Xl, { memoizeOptions: { resultEqualityCheck: to } }), ME = P([Lm, ge, Hr], Gr), IE = P([ME, ge], Bm), DE = P([Rm, ge, Hr], Gr), NE = P([DE, ge], Fm), $E = P([zm, ge, Hr], Gr), LE = P([$E, ge], Wm), RE = P([IE, LE, NE], aa), zE = P([be, fy, dy, CE, TE, RE, U, ge], Zl), ei = P([be, U, Xr, lc, qn, ge, zE], Ql), BE = P([ei, be, uc], ec), FE = P([be, ei, BE, ge], rc), vy = (e2) => {
  var t = ge(e2), r = Hr(e2), n = false;
  return Zn(e2, t, r, n);
}, hy = P([be, vy], Ja), py = P([be, uc, FE, hy], ao), WE = P([U, lc, be, ge], Ym), KE = P([U, lc, be, ge], nc), UE = (e2, t, r, n, i, a, o, u) => {
  if (t) {
    var { type: l } = t, s = Lt(e2, u);
    if (n) {
      var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = l === "category" && n.bandwidth ? n.bandwidth() / c : 0;
      return f = u === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? et(i[0] - i[1]) * 2 * f : f, s && o ? o.map((d, v) => ({ coordinate: n(d) + f, value: d, index: v, offset: f })) : n.domain().map((d, v) => ({ coordinate: n(d) + f, value: a ? a[d] : d, index: v, offset: f }));
    }
  }
}, Kt = P([U, be, uc, py, vy, WE, KE, ge], UE), cc = P([ey, ty, eE], (e2, t, r) => ry(r.shared, e2, t)), my = (e2) => e2.tooltip.settings.trigger, sc = (e2) => e2.tooltip.settings.defaultIndex, ti = P([Yr, cc, my, sc], uy), En = P([ti, Xr, Xn, ei], oc), yy = P([Kt, En], ny), HE = P([ti], (e2) => {
  if (e2) return e2.dataKey;
});
P([ti], (e2) => {
  if (e2) return e2.graphicalItemId;
});
var gy = P([Yr, cc, my, sc], cy), qE = P([Rt, zt, U, _e, Kt, sc, gy, Jn], ly), GE = P([ti, qE], (e2, t) => e2 != null && e2.coordinate ? e2.coordinate : t), YE = P([ti], (e2) => {
  var t;
  return (t = e2 == null ? void 0 : e2.active) !== null && t !== void 0 ? t : false;
}), VE = P([gy, En, Jt, Xn, yy, Jn, cc], sy), XE = P([VE], (e2) => {
  if (e2 != null) {
    var t = e2.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function Yf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(r), true).forEach(function(n) {
      ZE(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function ZE(e2, t, r) {
  return (t = QE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function QE(e2) {
  var t = JE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var e_ = () => I(be), t_ = () => {
  var e2 = e_(), t = I(Kt), r = I(py);
  return Dr(!e2 || !r ? void 0 : Vf(Vf({}, e2), {}, { scale: r }), t);
};
function Xf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ar(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xf(Object(r), true).forEach(function(n) {
      r_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function r_(e2, t, r) {
  return (t = n_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function n_(e2) {
  var t = i_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function i_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var a_ = (e2, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e2 === "horizontal") return { x: i.coordinate, y: n.chartY };
    if (e2 === "vertical") return { x: n.chartX, y: i.coordinate };
  }
  return { x: 0, y: 0 };
}, o_ = (e2, t, r, n) => {
  var i = t.find((s) => s && s.index === r);
  if (i) {
    if (e2 === "centric") {
      var a = i.coordinate, { radius: o } = n;
      return Ar(Ar(Ar({}, n), Y(n.cx, n.cy, o, a)), {}, { angle: a, radius: o });
    }
    var u = i.coordinate, { angle: l } = n;
    return Ar(Ar(Ar({}, n), Y(n.cx, n.cy, u, l)), {}, { angle: l, radius: u });
  }
  return { angle: 0, clockWise: false, cx: 0, cy: 0, endAngle: 0, innerRadius: 0, outerRadius: 0, radius: 0, startAngle: 0, x: 0, y: 0 };
};
function u_(e2, t) {
  var { chartX: r, chartY: n } = e2;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var by = (e2, t, r, n, i) => {
  var a, o = (a = t == null ? void 0 : t.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e2 == null) return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var u = 0; u < o; u++) {
    var l, s, c, f, d, v = u > 0 ? (l = r[u - 1]) === null || l === void 0 ? void 0 : l.coordinate : (s = r[o - 1]) === null || s === void 0 ? void 0 : s.coordinate, p = (c = r[u]) === null || c === void 0 ? void 0 : c.coordinate, m = u >= o - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (d = r[u + 1]) === null || d === void 0 ? void 0 : d.coordinate, y = void 0;
    if (!(v == null || p == null || m == null)) if (et(p - v) !== et(m - p)) {
      var g = [];
      if (et(m - p) === et(i[1] - i[0])) {
        y = m;
        var w = p + i[1] - i[0];
        g[0] = Math.min(w, (w + v) / 2), g[1] = Math.max(w, (w + v) / 2);
      } else {
        y = v;
        var b = m + i[1] - i[0];
        g[0] = Math.min(p, (b + p) / 2), g[1] = Math.max(p, (b + p) / 2);
      }
      var O = [Math.min(p, (y + p) / 2), Math.max(p, (y + p) / 2)];
      if (e2 > O[0] && e2 <= O[1] || e2 >= g[0] && e2 <= g[1]) {
        var x;
        return (x = r[u]) === null || x === void 0 ? void 0 : x.index;
      }
    } else {
      var A = Math.min(v, m), S = Math.max(v, m);
      if (e2 > (A + p) / 2 && e2 <= (S + p) / 2) {
        var k;
        return (k = r[u]) === null || k === void 0 ? void 0 : k.index;
      }
    }
  }
  else if (t) for (var T = 0; T < o; T++) {
    var D = t[T];
    if (D != null) {
      var E = t[T + 1], C = t[T - 1];
      if (T === 0 && E != null && e2 <= (D.coordinate + E.coordinate) / 2 || T === o - 1 && C != null && e2 > (D.coordinate + C.coordinate) / 2 || T > 0 && T < o - 1 && C != null && E != null && e2 > (D.coordinate + C.coordinate) / 2 && e2 <= (D.coordinate + E.coordinate) / 2) return D.index;
    }
  }
  return -1;
}, l_ = () => I(Nl), fc = (e2, t) => t, wy = (e2, t, r) => r, dc = (e2, t, r, n) => n, c_ = P(Kt, (e2) => Sa(e2, (t) => t.coordinate)), vc = P([Yr, fc, wy, dc], uy), hc = P([vc, Xr, Xn, ei], oc), s_ = (e2, t, r) => {
  if (t != null) {
    var n = Yr(e2);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, xy = P([Yr, fc, wy, dc], cy), oa = P([Rt, zt, U, _e, Kt, dc, xy, Jn], ly), f_ = P([vc, oa], (e2, t) => {
  var r;
  return (r = e2.coordinate) !== null && r !== void 0 ? r : t;
}), Py = P([Kt, hc], ny), d_ = P([xy, hc, Jt, Xn, Py, Jn, fc], sy), v_ = P([vc, hc], (e2, t) => ({ isActive: e2.active && t != null, activeIndex: t })), h_ = (e2, t, r, n, i, a, o) => {
  if (!(!e2 || !r || !n || !i) && u_(e2, o)) {
    var u = ex(e2, t), l = by(u, a, i, r, n), s = a_(t, i, l, e2);
    return { activeIndex: String(l), activeCoordinate: s };
  }
}, p_ = (e2, t, r, n, i, a, o) => {
  if (!(!e2 || !n || !i || !a || !r)) {
    var u = tO(e2, r);
    if (u) {
      var l = tx(u, t), s = by(l, o, a, n, i), c = o_(t, a, s, u);
      return { activeIndex: String(s), activeCoordinate: c };
    }
  }
}, m_ = (e2, t, r, n, i, a, o, u) => {
  if (!(!e2 || !t || !n || !i || !a)) return t === "horizontal" || t === "vertical" ? h_(e2, t, n, i, a, o, u) : p_(e2, t, r, n, i, a, o);
}, y_ = P((e2) => e2.zIndex.zIndexMap, (e2, t) => t, (e2, t, r) => r, (e2, t, r) => {
  if (t != null) {
    var n = e2[t];
    if (n != null) return r ? n.panoramaElement : n.element;
  }
}), g_ = P((e2) => e2.zIndex.zIndexMap, (e2) => {
  var t = Object.keys(e2).map((n) => parseInt(n, 10)).concat(Object.values(pe)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, { memoizeOptions: { resultEqualityCheck: eS } });
function Zf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zf(Object(r), true).forEach(function(n) {
      b_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function b_(e2, t, r) {
  return (t = w_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function w_(e2) {
  var t = x_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function x_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var P_ = {}, O_ = { zIndexMap: Object.values(pe).reduce((e2, t) => Qf(Qf({}, e2), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }), P_) }, A_ = new Set(Object.values(pe));
function S_(e2) {
  return A_.has(e2);
}
var Oy = Fe({ name: "zIndex", initialState: O_, reducers: { registerZIndexPortal: { reducer: (e2, t) => {
  var { zIndex: r } = t.payload;
  e2.zIndexMap[r] ? e2.zIndexMap[r].consumers += 1 : e2.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 };
}, prepare: te() }, unregisterZIndexPortal: { reducer: (e2, t) => {
  var { zIndex: r } = t.payload;
  e2.zIndexMap[r] && (e2.zIndexMap[r].consumers -= 1, e2.zIndexMap[r].consumers <= 0 && !S_(r) && delete e2.zIndexMap[r]);
}, prepare: te() }, registerZIndexPortalElement: { reducer: (e2, t) => {
  var { zIndex: r, element: n, isPanorama: i } = t.payload;
  e2.zIndexMap[r] ? i ? e2.zIndexMap[r].panoramaElement = n : e2.zIndexMap[r].element = n : e2.zIndexMap[r] = { consumers: 0, element: i ? void 0 : n, panoramaElement: i ? n : void 0 };
}, prepare: te() }, unregisterZIndexPortalElement: { reducer: (e2, t) => {
  var { zIndex: r } = t.payload;
  e2.zIndexMap[r] && (t.payload.isPanorama ? e2.zIndexMap[r].panoramaElement = void 0 : e2.zIndexMap[r].element = void 0);
}, prepare: te() } } }), { registerZIndexPortal: E_, unregisterZIndexPortal: __, registerZIndexPortalElement: j_, unregisterZIndexPortalElement: C_ } = Oy.actions, k_ = Oy.reducer;
function Ve(e2) {
  var { zIndex: t, children: r } = e2, n = Cx(), i = n && t !== void 0 && t !== 0, a = Te(), o = ie();
  h.useLayoutEffect(() => i ? (o(E_({ zIndex: t })), () => {
    o(__({ zIndex: t }));
  }) : Dn, [o, t, i]);
  var u = I((l) => y_(l, t, a));
  return i ? u ? sv.createPortal(r, u) : null : r;
}
function Ou() {
  return Ou = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Ou.apply(null, arguments);
}
function Jf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gi(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jf(Object(r), true).forEach(function(n) {
      T_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Jf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function T_(e2, t, r) {
  return (t = M_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function M_(e2) {
  var t = I_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function I_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function D_(e2) {
  var { cursor: t, cursorComp: r, cursorProps: n } = e2;
  return h.isValidElement(t) ? h.cloneElement(t, n) : h.createElement(r, n);
}
function N_(e2) {
  var t, { coordinate: r, payload: n, index: i, offset: a, tooltipAxisBandSize: o, layout: u, cursor: l, tooltipEventType: s, chartName: c } = e2, f = r, d = n, v = i;
  if (!l || !f || c !== "ScatterChart" && s !== "axis") return null;
  var p, m, y;
  if (c === "ScatterChart") p = f, m = hP, y = pe.cursorLine;
  else if (c === "BarChart") p = pP(u, f, a, o), m = yp, y = pe.cursorRectangle;
  else if (u === "radial" && Lv(f)) {
    var { cx: g, cy: w, radius: b, startAngle: O, endAngle: x } = bp(f);
    p = { cx: g, cy: w, startAngle: O, endAngle: x, innerRadius: b, outerRadius: b }, m = xp, y = pe.cursorLine;
  } else p = { points: aO(u, f, a) }, m = dp, y = pe.cursorLine;
  var A = typeof l == "object" && "className" in l ? l.className : void 0, S = gi(gi(gi(gi({ stroke: "#ccc", pointerEvents: "none" }, a), p), zr(l)), {}, { payload: d, payloadIndex: v, className: B("recharts-tooltip-cursor", A) });
  return h.createElement(Ve, { zIndex: (t = e2.zIndex) !== null && t !== void 0 ? t : y }, h.createElement(D_, { cursor: l, cursorComp: m, cursorProps: S }));
}
function $_(e2) {
  var t = t_(), r = Qh(), n = Bn(), i = l_();
  return t == null || r == null || n == null || i == null ? null : h.createElement(N_, Ou({}, e2, { offset: r, layout: n, tooltipAxisBandSize: t, chartName: i }));
}
var Ay = h.createContext(null), L_ = () => h.useContext(Ay), Sy = { exports: {} };
(function(e2) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
  function i(l, s, c) {
    this.fn = l, this.context = s, this.once = c || false;
  }
  function a(l, s, c, f, d) {
    if (typeof c != "function") throw new TypeError("The listener must be a function");
    var v = new i(c, f || l, d), p = r ? r + s : s;
    return l._events[p] ? l._events[p].fn ? l._events[p] = [l._events[p], v] : l._events[p].push(v) : (l._events[p] = v, l._eventsCount++), l;
  }
  function o(l, s) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[s];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var s = [], c, f;
    if (this._eventsCount === 0) return s;
    for (f in c = this._events) t.call(c, f) && s.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(c)) : s;
  }, u.prototype.listeners = function(s) {
    var c = r ? r + s : s, f = this._events[c];
    if (!f) return [];
    if (f.fn) return [f.fn];
    for (var d = 0, v = f.length, p = new Array(v); d < v; d++) p[d] = f[d].fn;
    return p;
  }, u.prototype.listenerCount = function(s) {
    var c = r ? r + s : s, f = this._events[c];
    return f ? f.fn ? 1 : f.length : 0;
  }, u.prototype.emit = function(s, c, f, d, v, p) {
    var m = r ? r + s : s;
    if (!this._events[m]) return false;
    var y = this._events[m], g = arguments.length, w, b;
    if (y.fn) {
      switch (y.once && this.removeListener(s, y.fn, void 0, true), g) {
        case 1:
          return y.fn.call(y.context), true;
        case 2:
          return y.fn.call(y.context, c), true;
        case 3:
          return y.fn.call(y.context, c, f), true;
        case 4:
          return y.fn.call(y.context, c, f, d), true;
        case 5:
          return y.fn.call(y.context, c, f, d, v), true;
        case 6:
          return y.fn.call(y.context, c, f, d, v, p), true;
      }
      for (b = 1, w = new Array(g - 1); b < g; b++) w[b - 1] = arguments[b];
      y.fn.apply(y.context, w);
    } else {
      var O = y.length, x;
      for (b = 0; b < O; b++) switch (y[b].once && this.removeListener(s, y[b].fn, void 0, true), g) {
        case 1:
          y[b].fn.call(y[b].context);
          break;
        case 2:
          y[b].fn.call(y[b].context, c);
          break;
        case 3:
          y[b].fn.call(y[b].context, c, f);
          break;
        case 4:
          y[b].fn.call(y[b].context, c, f, d);
          break;
        default:
          if (!w) for (x = 1, w = new Array(g - 1); x < g; x++) w[x - 1] = arguments[x];
          y[b].fn.apply(y[b].context, w);
      }
    }
    return true;
  }, u.prototype.on = function(s, c, f) {
    return a(this, s, c, f, false);
  }, u.prototype.once = function(s, c, f) {
    return a(this, s, c, f, true);
  }, u.prototype.removeListener = function(s, c, f, d) {
    var v = r ? r + s : s;
    if (!this._events[v]) return this;
    if (!c) return o(this, v), this;
    var p = this._events[v];
    if (p.fn) p.fn === c && (!d || p.once) && (!f || p.context === f) && o(this, v);
    else {
      for (var m = 0, y = [], g = p.length; m < g; m++) (p[m].fn !== c || d && !p[m].once || f && p[m].context !== f) && y.push(p[m]);
      y.length ? this._events[v] = y.length === 1 ? y[0] : y : o(this, v);
    }
    return this;
  }, u.prototype.removeAllListeners = function(s) {
    var c;
    return s ? (c = r ? r + s : s, this._events[c] && o(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e2.exports = u;
})(Sy);
var R_ = Sy.exports;
const z_ = Pt(R_);
var _n = new z_(), Au = "recharts.syncEvent.tooltip", ed = "recharts.syncEvent.brush";
function Ey(e2, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!gt(r)) return e2 == null ? void 0 : e2[r];
  }
}
var B_ = { chartName: "", tooltipPayloadSearcher: void 0, eventEmitter: void 0, defaultTooltipEventType: "axis" }, _y = Fe({ name: "options", initialState: B_, reducers: { createEventEmitter: (e2) => {
  e2.eventEmitter == null && (e2.eventEmitter = Symbol("rechartsEventEmitter"));
} } }), F_ = _y.reducer, { createEventEmitter: W_ } = _y.actions;
function K_(e2) {
  return e2.tooltip.syncInteraction;
}
var U_ = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 }, jy = Fe({ name: "chartData", initialState: U_, reducers: { setChartData(e2, t) {
  if (e2.chartData = t.payload, t.payload == null) {
    e2.dataStartIndex = 0, e2.dataEndIndex = 0;
    return;
  }
  t.payload.length > 0 && e2.dataEndIndex !== t.payload.length - 1 && (e2.dataEndIndex = t.payload.length - 1);
}, setComputedData(e2, t) {
  e2.computedData = t.payload;
}, setDataStartEndIndexes(e2, t) {
  var { startIndex: r, endIndex: n } = t.payload;
  r != null && (e2.dataStartIndex = r), n != null && (e2.dataEndIndex = n);
} } }), { setChartData: td, setDataStartEndIndexes: H_, setComputedData: MN } = jy.actions, q_ = jy.reducer, G_ = ["x", "y"];
function rd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sr(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rd(Object(r), true).forEach(function(n) {
      Y_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Y_(e2, t, r) {
  return (t = V_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function V_(e2) {
  var t = X_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function X_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Z_(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Q_(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Q_(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function J_() {
  var e2 = I($l), t = I(Ll), r = ie(), n = I(xm), i = I(Kt), a = Bn(), o = za(), u = I((l) => l.rootProps.className);
  h.useEffect(() => {
    if (e2 == null) return Dn;
    var l = (s, c, f) => {
      if (t !== f && e2 === s) {
        if (n === "index") {
          var d;
          if (o && c !== null && c !== void 0 && (d = c.payload) !== null && d !== void 0 && d.coordinate && c.payload.sourceViewBox) {
            var v = c.payload.coordinate, { x: p, y: m } = v, y = Z_(v, G_), { x: g, y: w, width: b, height: O } = c.payload.sourceViewBox, x = Sr(Sr({}, y), {}, { x: o.x + (b ? (p - g) / b : 0) * o.width, y: o.y + (O ? (m - w) / O : 0) * o.height });
            r(Sr(Sr({}, c), {}, { payload: Sr(Sr({}, c.payload), {}, { coordinate: x }) }));
          } else r(c);
          return;
        }
        if (i != null) {
          var A;
          if (typeof n == "function") {
            var S = { activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index), isTooltipActive: c.payload.active, activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index), activeLabel: c.payload.label, activeDataKey: c.payload.dataKey, activeCoordinate: c.payload.coordinate }, k = n(i, S);
            A = i[k];
          } else n === "value" && (A = i.find((J) => String(J.value) === c.payload.label));
          var { coordinate: T } = c.payload;
          if (A == null || c.payload.active === false || T == null || o == null) {
            r(xu({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
            return;
          }
          var { x: D, y: E } = T, C = Math.min(D, o.x + o.width), R = Math.min(E, o.y + o.height), L = { x: a === "horizontal" ? A.coordinate : C, y: a === "horizontal" ? R : A.coordinate }, H = xu({ active: c.payload.active, coordinate: L, dataKey: c.payload.dataKey, index: String(A.index), label: c.payload.label, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: c.payload.graphicalItemId });
          r(H);
        }
      }
    };
    return _n.on(Au, l), () => {
      _n.off(Au, l);
    };
  }, [u, r, t, e2, n, i, a, o]);
}
function ej() {
  var e2 = I($l), t = I(Ll), r = ie();
  h.useEffect(() => {
    if (e2 == null) return Dn;
    var n = (i, a, o) => {
      t !== o && e2 === i && r(H_(a));
    };
    return _n.on(ed, n), () => {
      _n.off(ed, n);
    };
  }, [r, t, e2]);
}
function tj() {
  var e2 = ie();
  h.useEffect(() => {
    e2(W_());
  }, [e2]), J_(), ej();
}
function rj(e2, t, r, n, i, a) {
  var o = I((v) => s_(v, e2, t)), u = I(Ll), l = I($l), s = I(xm), c = I(K_), f = c == null ? void 0 : c.active, d = za();
  h.useEffect(() => {
    if (!f && l != null && u != null) {
      var v = xu({ active: a, coordinate: r, dataKey: o, index: i, label: typeof n == "number" ? String(n) : n, sourceViewBox: d, graphicalItemId: void 0 });
      _n.emit(Au, l, v, u);
    }
  }, [f, r, o, i, n, u, l, s, a, d]);
}
function nd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function id(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nd(Object(r), true).forEach(function(n) {
      nj(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : nd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function nj(e2, t, r) {
  return (t = ij(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function ij(e2) {
  var t = aj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function oj(e2) {
  return e2.dataKey;
}
function uj(e2, t) {
  return h.isValidElement(e2) ? h.cloneElement(e2, t) : typeof e2 == "function" ? h.createElement(e2, t) : h.createElement(Gx, t);
}
var ad = [], lj = { allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", axisId: 0, contentStyle: {}, cursor: true, filterNull: true, includeHidden: false, isAnimationActive: "auto", itemSorter: "name", itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, wrapperStyle: {} };
function IN(e2) {
  var t, r, n = me(e2, lj), { active: i, allowEscapeViewBox: a, animationDuration: o, animationEasing: u, content: l, filterNull: s, isAnimationActive: c, offset: f, payloadUniqBy: d, position: v, reverseDirection: p, useTranslate3d: m, wrapperStyle: y, cursor: g, shared: w, trigger: b, defaultIndex: O, portal: x, axisId: A } = n, S = ie(), k = typeof O == "number" ? String(O) : O;
  h.useEffect(() => {
    S(aE({ shared: w, trigger: b, axisId: A, active: i, defaultIndex: k }));
  }, [S, w, b, A, i, k]);
  var T = za(), D = fp(), E = JS(w), { activeIndex: C, isActive: R } = (t = I(($e) => v_($e, E, b, k))) !== null && t !== void 0 ? t : {}, L = I(($e) => d_($e, E, b, k)), H = I(($e) => Py($e, E, b, k)), J = I(($e) => f_($e, E, b, k)), F = L, G = L_(), $ = (r = i ?? R) !== null && r !== void 0 ? r : false, [De, We] = Fb([F, $]), Ne = E === "axis" ? H : void 0;
  rj(E, b, J, Ne, C, $);
  var Ot = x ?? G;
  if (Ot == null || T == null || E == null) return null;
  var Xe = F ?? ad;
  $ || (Xe = ad), s && Xe.length && (Xe = ab(Xe.filter(($e) => $e.value != null && ($e.hide !== true || n.includeHidden)), d, oj));
  var tr = Xe.length > 0, Jr = h.createElement(eP, { allowEscapeViewBox: a, animationDuration: o, animationEasing: u, isAnimationActive: c, active: $, coordinate: J, hasPayload: tr, offset: f, position: v, reverseDirection: p, useTranslate3d: m, viewBox: T, wrapperStyle: y, lastBoundingBox: De, innerRef: We, hasPortalFromProps: !!x }, uj(l, id(id({}, n), {}, { payload: Xe, label: Ne, active: $, activeIndex: C, coordinate: J, accessibilityLayer: D })));
  return h.createElement(h.Fragment, null, sv.createPortal(Jr, Ot), $ && h.createElement($_, { cursor: g, tooltipEventType: E, coordinate: J, payload: Xe, index: C }));
}
function cj(e2, t, r) {
  return (t = sj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function sj(e2) {
  var t = fj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
class dj {
  constructor(t) {
    cj(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t)) this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function od(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vj(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? od(Object(r), true).forEach(function(n) {
      hj(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : od(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function hj(e2, t, r) {
  return (t = pj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function pj(e2) {
  var t = mj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var yj = { cacheSize: 2e3, enableCache: true }, Cy = vj({}, yj), ud = new dj(Cy.cacheSize), gj = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, ld = "recharts_measurement_span";
function bj(e2, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e2, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var cd = (e2, t) => {
  try {
    var r = document.getElementById(ld);
    r || (r = document.createElement("span"), r.setAttribute("id", ld), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, gj, t), r.textContent = "".concat(e2);
    var n = r.getBoundingClientRect();
    return { width: n.width, height: n.height };
  } catch {
    return { width: 0, height: 0 };
  }
}, fn = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Ua.isSsr) return { width: 0, height: 0 };
  if (!Cy.enableCache) return cd(t, r);
  var n = bj(t, r), i = ud.get(n);
  if (i) return i;
  var a = cd(t, r);
  return ud.set(n, a), a;
}, ky;
function wj(e2, t, r) {
  return (t = xj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function xj(e2) {
  var t = Pj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Pj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var sd = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, fd = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Oj = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, Aj = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, Sj = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, Ej = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function _j(e2) {
  return Ej.includes(e2);
}
var jr = "NaN";
function jj(e2, t) {
  return e2 * Sj[t];
}
class Ee {
  static parse(t) {
    var r, [, n, i] = (r = Aj.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? Ee.NaN : new Ee(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, gt(t) && (this.unit = ""), r !== "" && !Oj.test(r) && (this.num = NaN, this.unit = ""), _j(r) && (this.num = jj(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new Ee(NaN, "") : new Ee(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Ee(NaN, "") : new Ee(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ee(NaN, "") : new Ee(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ee(NaN, "") : new Ee(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return gt(this.num);
  }
}
ky = Ee;
wj(Ee, "NaN", new ky(NaN, ""));
function Ty(e2) {
  if (e2 == null || e2.includes(jr)) return jr;
  for (var t = e2; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = sd.exec(t)) !== null && r !== void 0 ? r : [], o = Ee.parse(n ?? ""), u = Ee.parse(a ?? ""), l = i === "*" ? o.multiply(u) : o.divide(u);
    if (l.isNaN()) return jr;
    t = t.replace(sd, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var s, [, c, f, d] = (s = fd.exec(t)) !== null && s !== void 0 ? s : [], v = Ee.parse(c ?? ""), p = Ee.parse(d ?? ""), m = f === "+" ? v.add(p) : v.subtract(p);
    if (m.isNaN()) return jr;
    t = t.replace(fd, m.toString());
  }
  return t;
}
var dd = /\(([^()]*)\)/;
function Cj(e2) {
  for (var t = e2, r; (r = dd.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(dd, Ty(n));
  }
  return t;
}
function kj(e2) {
  var t = e2.replace(/\s+/g, "");
  return t = Cj(t), t = Ty(t), t;
}
function Tj(e2) {
  try {
    return kj(e2);
  } catch {
    return jr;
  }
}
function To(e2) {
  var t = Tj(e2.slice(5, -1));
  return t === jr ? "" : t;
}
var Mj = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], Ij = ["dx", "dy", "angle", "className", "breakAll"];
function Su() {
  return Su = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Su.apply(null, arguments);
}
function vd(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Dj(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Dj(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var My = /[ \f\n\r\t\v\u2028\u2029]+/, Iy = (e2) => {
  var { children: t, breakAll: r, style: n } = e2;
  try {
    var i = [];
    fe(t) || (r ? i = t.toString().split("") : i = t.toString().split(My));
    var a = i.map((u) => ({ word: u, width: fn(u, n).width })), o = r ? 0 : fn("\xA0", n).width;
    return { wordsWithComputedWidth: a, spaceWidth: o };
  } catch {
    return null;
  }
};
function Nj(e2) {
  return e2 === "start" || e2 === "middle" || e2 === "end" || e2 === "inherit";
}
var Dy = (e2, t, r, n) => e2.reduce((i, a) => {
  var { word: o, width: u } = a, l = i[i.length - 1];
  if (l && u != null && (t == null || n || l.width + u + r < Number(t))) l.words.push(o), l.width += u + r;
  else {
    var s = { words: [o], width: u };
    i.push(s);
  }
  return i;
}, []), Ny = (e2) => e2.reduce((t, r) => t.width > r.width ? t : r), $j = "\u2026", hd = (e2, t, r, n, i, a, o, u) => {
  var l = e2.slice(0, t), s = Iy({ breakAll: r, style: n, children: l + $j });
  if (!s) return [false, []];
  var c = Dy(s.wordsWithComputedWidth, a, o, u), f = c.length > i || Ny(c).width > Number(a);
  return [f, c];
}, Lj = (e2, t, r, n, i) => {
  var { maxLines: a, children: o, style: u, breakAll: l } = e2, s = N(a), c = String(o), f = Dy(t, n, r, i);
  if (!s || i) return f;
  var d = f.length > a || Ny(f).width > Number(n);
  if (!d) return f;
  for (var v = 0, p = c.length - 1, m = 0, y; v <= p && m <= c.length - 1; ) {
    var g = Math.floor((v + p) / 2), w = g - 1, [b, O] = hd(c, w, l, u, a, n, r, i), [x] = hd(c, g, l, u, a, n, r, i);
    if (!b && !x && (v = g + 1), b && x && (p = g - 1), !b && x) {
      y = O;
      break;
    }
    m++;
  }
  return y || f;
}, pd = (e2) => {
  var t = fe(e2) ? [] : e2.toString().split(My);
  return [{ words: t, width: void 0 }];
}, Rj = (e2) => {
  var { width: t, scaleToFit: r, children: n, style: i, breakAll: a, maxLines: o } = e2;
  if ((t || r) && !Ua.isSsr) {
    var u, l, s = Iy({ breakAll: a, children: n, style: i });
    if (s) {
      var { wordsWithComputedWidth: c, spaceWidth: f } = s;
      u = c, l = f;
    } else return pd(n);
    return Lj({ breakAll: a, children: n, maxLines: o, style: i }, u, l, t, !!r);
  }
  return pd(n);
}, $y = "#808080", zj = { angle: 0, breakAll: false, capHeight: "0.71em", fill: $y, lineHeight: "1em", scaleToFit: false, textAnchor: "start", verticalAnchor: "end", x: 0, y: 0 }, ri = h.forwardRef((e2, t) => {
  var r = me(e2, zj), { x: n, y: i, lineHeight: a, capHeight: o, fill: u, scaleToFit: l, textAnchor: s, verticalAnchor: c } = r, f = vd(r, Mj), d = h.useMemo(() => Rj({ breakAll: f.breakAll, children: f.children, maxLines: f.maxLines, scaleToFit: l, style: f.style, width: f.width }), [f.breakAll, f.children, f.maxLines, l, f.style, f.width]), { dx: v, dy: p, angle: m, className: y, breakAll: g } = f, w = vd(f, Ij);
  if (!bt(n) || !bt(i) || d.length === 0) return null;
  var b = Number(n) + (N(v) ? v : 0), O = Number(i) + (N(p) ? p : 0);
  if (!ve(b) || !ve(O)) return null;
  var x;
  switch (c) {
    case "start":
      x = To("calc(".concat(o, ")"));
      break;
    case "middle":
      x = To("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      x = To("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var A = [];
  if (l) {
    var S = d[0].width, { width: k } = f;
    A.push("scale(".concat(N(k) && N(S) ? k / S : 1, ")"));
  }
  return m && A.push("rotate(".concat(m, ", ").concat(b, ", ").concat(O, ")")), A.length && (w.transform = A.join(" ")), h.createElement("text", Su({}, se(w), { ref: t, x: b, y: O, className: B("recharts-text", y), textAnchor: s, fill: u.includes("url") ? $y : u }), d.map((T, D) => {
    var E = T.words.join(g ? "" : " ");
    return h.createElement("tspan", { x: b, dy: D === 0 ? x : a, key: "".concat(E, "-").concat(D) }, E);
  }));
});
ri.displayName = "Text";
var Bj = ["labelRef"], Fj = ["content"];
function md(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Wj(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Wj(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function yd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oe(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yd(Object(r), true).forEach(function(n) {
      Kj(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Kj(e2, t, r) {
  return (t = Uj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Uj(e2) {
  var t = Hj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, St.apply(null, arguments);
}
var Ly = h.createContext(null), qj = (e2) => {
  var { x: t, y: r, upperWidth: n, lowerWidth: i, width: a, height: o, children: u } = e2, l = h.useMemo(() => ({ x: t, y: r, upperWidth: n, lowerWidth: i, width: a, height: o }), [t, r, n, i, a, o]);
  return h.createElement(Ly.Provider, { value: l }, u);
}, Ry = () => {
  var e2 = h.useContext(Ly), t = za();
  return e2 || Zh(t);
}, zy = h.createContext(null), Gj = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o, clockWise: u, children: l } = e2, s = h.useMemo(() => ({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o, clockWise: u }), [t, r, n, i, a, o, u]);
  return h.createElement(zy.Provider, { value: s }, l);
}, By = () => {
  var e2 = h.useContext(zy), t = I(Ur);
  return e2 || t;
}, Yj = (e2) => {
  var { value: t, formatter: r } = e2, n = fe(e2.children) ? t : e2.children;
  return typeof r == "function" ? r(n) : n;
}, pc = (e2) => e2 != null && typeof e2 == "function", Vj = (e2, t) => {
  var r = et(t - e2), n = Math.min(Math.abs(t - e2), 360);
  return r * n;
}, Xj = (e2, t, r, n, i) => {
  var { offset: a, className: o } = e2, { cx: u, cy: l, innerRadius: s, outerRadius: c, startAngle: f, endAngle: d, clockWise: v } = i, p = (s + c) / 2, m = Vj(f, d), y = m >= 0 ? 1 : -1, g, w;
  switch (t) {
    case "insideStart":
      g = f + y * a, w = v;
      break;
    case "insideEnd":
      g = d - y * a, w = !v;
      break;
    case "end":
      g = d + y * a, w = v;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = m <= 0 ? w : !w;
  var b = Y(u, l, p, g), O = Y(u, l, p, g + (w ? 1 : -1) * 359), x = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(O.x, ",").concat(O.y), A = fe(e2.id) ? vn("recharts-radial-line-") : e2.id;
  return h.createElement("text", St({}, n, { dominantBaseline: "central", className: B("recharts-radial-bar-label", o) }), h.createElement("defs", null, h.createElement("path", { id: A, d: x })), h.createElement("textPath", { xlinkHref: "#".concat(A) }, r));
}, Zj = (e2, t, r) => {
  var { cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: u, endAngle: l } = e2, s = (u + l) / 2;
  if (r === "outside") {
    var { x: c, y: f } = Y(n, i, o + t, s);
    return { x: c, y: f, textAnchor: c >= n ? "start" : "end", verticalAnchor: "middle" };
  }
  if (r === "center") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
  if (r === "centerTop") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
  if (r === "centerBottom") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
  var d = (a + o) / 2, { x: v, y: p } = Y(n, i, d, s);
  return { x: v, y: p, textAnchor: "middle", verticalAnchor: "middle" };
}, Eu = (e2) => "cx" in e2 && N(e2.cx), Qj = (e2, t) => {
  var { parentViewBox: r, offset: n, position: i } = e2, a;
  r != null && !Eu(r) && (a = r);
  var { x: o, y: u, upperWidth: l, lowerWidth: s, height: c } = t, f = o, d = o + (l - s) / 2, v = (f + d) / 2, p = (l + s) / 2, m = f + l / 2, y = c >= 0 ? 1 : -1, g = y * n, w = y > 0 ? "end" : "start", b = y > 0 ? "start" : "end", O = l >= 0 ? 1 : -1, x = O * n, A = O > 0 ? "end" : "start", S = O > 0 ? "start" : "end";
  if (i === "top") {
    var k = { x: f + l / 2, y: u - g, textAnchor: "middle", verticalAnchor: w };
    return oe(oe({}, k), a ? { height: Math.max(u - a.y, 0), width: l } : {});
  }
  if (i === "bottom") {
    var T = { x: d + s / 2, y: u + c + g, textAnchor: "middle", verticalAnchor: b };
    return oe(oe({}, T), a ? { height: Math.max(a.y + a.height - (u + c), 0), width: s } : {});
  }
  if (i === "left") {
    var D = { x: v - x, y: u + c / 2, textAnchor: A, verticalAnchor: "middle" };
    return oe(oe({}, D), a ? { width: Math.max(D.x - a.x, 0), height: c } : {});
  }
  if (i === "right") {
    var E = { x: v + p + x, y: u + c / 2, textAnchor: S, verticalAnchor: "middle" };
    return oe(oe({}, E), a ? { width: Math.max(a.x + a.width - E.x, 0), height: c } : {});
  }
  var C = a ? { width: p, height: c } : {};
  return i === "insideLeft" ? oe({ x: v + x, y: u + c / 2, textAnchor: S, verticalAnchor: "middle" }, C) : i === "insideRight" ? oe({ x: v + p - x, y: u + c / 2, textAnchor: A, verticalAnchor: "middle" }, C) : i === "insideTop" ? oe({ x: f + l / 2, y: u + g, textAnchor: "middle", verticalAnchor: b }, C) : i === "insideBottom" ? oe({ x: d + s / 2, y: u + c - g, textAnchor: "middle", verticalAnchor: w }, C) : i === "insideTopLeft" ? oe({ x: f + x, y: u + g, textAnchor: S, verticalAnchor: b }, C) : i === "insideTopRight" ? oe({ x: f + l - x, y: u + g, textAnchor: A, verticalAnchor: b }, C) : i === "insideBottomLeft" ? oe({ x: d + x, y: u + c - g, textAnchor: S, verticalAnchor: w }, C) : i === "insideBottomRight" ? oe({ x: d + s - x, y: u + c - g, textAnchor: A, verticalAnchor: w }, C) : i && typeof i == "object" && (N(i.x) || Tt(i.x)) && (N(i.y) || Tt(i.y)) ? oe({ x: o + Vt(i.x, p), y: u + Vt(i.y, c), textAnchor: "end", verticalAnchor: "end" }, C) : oe({ x: m, y: u + c / 2, textAnchor: "middle", verticalAnchor: "middle" }, C);
}, Jj = { angle: 0, offset: 5, zIndex: pe.label, position: "middle", textBreakAll: false };
function Ht(e2) {
  var t = me(e2, Jj), { viewBox: r, position: n, value: i, children: a, content: o, className: u = "", textBreakAll: l, labelRef: s } = t, c = By(), f = Ry(), d = n === "center" ? f : c ?? f, v, p, m;
  if (r == null ? v = d : Eu(r) ? v = r : v = Zh(r), !v || fe(i) && fe(a) && !h.isValidElement(o) && typeof o != "function") return null;
  var y = oe(oe({}, t), {}, { viewBox: v });
  if (h.isValidElement(o)) {
    var { labelRef: g } = y, w = md(y, Bj);
    return h.cloneElement(o, w);
  }
  if (typeof o == "function") {
    var { content: b } = y, O = md(y, Fj);
    if (p = h.createElement(o, O), h.isValidElement(p)) return p;
  } else p = Yj(t);
  var x = se(t);
  if (Eu(v)) {
    if (n === "insideStart" || n === "insideEnd" || n === "end") return Xj(t, n, p, x, v);
    m = Zj(v, t.offset, t.position);
  } else m = Qj(t, v);
  return h.createElement(Ve, { zIndex: t.zIndex }, h.createElement(ri, St({ ref: s, className: B("recharts-label", u) }, x, m, { textAnchor: Nj(x.textAnchor) ? x.textAnchor : m.textAnchor, breakAll: l }), p));
}
Ht.displayName = "Label";
var Fy = (e2, t, r) => {
  if (!e2) return null;
  var n = { viewBox: t, labelRef: r };
  return e2 === true ? h.createElement(Ht, St({ key: "label-implicit" }, n)) : bt(e2) ? h.createElement(Ht, St({ key: "label-implicit", value: e2 }, n)) : h.isValidElement(e2) ? e2.type === Ht ? h.cloneElement(e2, oe({ key: "label-implicit" }, n)) : h.createElement(Ht, St({ key: "label-implicit", content: e2 }, n)) : pc(e2) ? h.createElement(Ht, St({ key: "label-implicit", content: e2 }, n)) : e2 && typeof e2 == "object" ? h.createElement(Ht, St({}, e2, { key: "label-implicit" }, n)) : null;
};
function eC(e2) {
  var { label: t, labelRef: r } = e2, n = Ry();
  return Fy(t, n, r) || null;
}
function tC(e2) {
  var { label: t } = e2, r = By();
  return Fy(t, r) || null;
}
var Wy = {}, Ky = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r[r.length - 1];
  }
  e2.last = t;
})(Ky);
var Uy = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Array.isArray(r) ? r : Array.from(r);
  }
  e2.toArray = t;
})(Uy);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Ky, r = Uy, n = Pa;
  function i(a) {
    if (n.isArrayLike(a)) return t.last(r.toArray(a));
  }
  e2.last = i;
})(Wy);
var rC = Wy.last;
const Hy = Pt(rC);
var nC = ["valueAccessor"], iC = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function ua() {
  return ua = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, ua.apply(null, arguments);
}
function gd(e2, t) {
  if (e2 == null) return {};
  var r, n, i = aC(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function aC(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var oC = (e2) => Array.isArray(e2.value) ? Hy(e2.value) : e2.value, qy = h.createContext(void 0), Gy = qy.Provider, Yy = h.createContext(void 0);
Yy.Provider;
function uC() {
  return h.useContext(qy);
}
function lC() {
  return h.useContext(Yy);
}
function Ai(e2) {
  var { valueAccessor: t = oC } = e2, r = gd(e2, nC), { dataKey: n, clockWise: i, id: a, textBreakAll: o, zIndex: u } = r, l = gd(r, iC), s = uC(), c = lC(), f = s || c;
  return !f || !f.length ? null : h.createElement(Ve, { zIndex: u ?? pe.label }, h.createElement(ke, { className: "recharts-label-list" }, f.map((d, v) => {
    var p, m = fe(n) ? t(d, v) : ue(d && d.payload, n), y = fe(a) ? {} : { id: "".concat(a, "-").concat(v) };
    return h.createElement(Ht, ua({ key: "label-".concat(v) }, se(d), l, y, { fill: (p = r.fill) !== null && p !== void 0 ? p : d.fill, parentViewBox: d.parentViewBox, value: m, textBreakAll: o, viewBox: d.viewBox, index: v, zIndex: 0 }));
  })));
}
Ai.displayName = "LabelList";
function Vy(e2) {
  var { label: t } = e2;
  return t ? t === true ? h.createElement(Ai, { key: "labelList-implicit" }) : h.isValidElement(t) || pc(t) ? h.createElement(Ai, { key: "labelList-implicit", content: t }) : typeof t == "object" ? h.createElement(Ai, ua({ key: "labelList-implicit" }, t, { type: String(t.type) })) : null : null;
}
var cC = ["points", "className", "baseLinePoints", "connectNulls"], bd;
function Cr() {
  return Cr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Cr.apply(null, arguments);
}
function sC(e2, t) {
  if (e2 == null) return {};
  var r, n, i = fC(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function fC(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function dC(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var wd = (e2) => e2 && e2.x === +e2.x && e2.y === +e2.y, vC = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach((n) => {
    wd(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), wd(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, dn = (e2, t) => {
  var r = vC(e2);
  t && (r = [r.reduce((i, a) => [...i, ...a], [])]);
  var n = r.map((i) => i.reduce((a, o, u) => ne(bd || (bd = dC(["", "", "", ",", ""])), a, u === 0 ? "M" : "L", o.x, o.y), "")).join("");
  return r.length === 1 ? "".concat(n, "Z") : n;
}, hC = (e2, t, r) => {
  var n = dn(e2, r);
  return "".concat(n.slice(-1) === "Z" ? n.slice(0, -1) : n, "L").concat(dn(Array.from(t).reverse(), r).slice(1));
}, Xy = (e2) => {
  var { points: t, className: r, baseLinePoints: n, connectNulls: i } = e2, a = sC(e2, cC);
  if (!t || !t.length) return null;
  var o = B("recharts-polygon", r);
  if (n && n.length) {
    var u = a.stroke && a.stroke !== "none", l = hC(t, n, i);
    return h.createElement("g", { className: o }, h.createElement("path", Cr({}, se(a), { fill: l.slice(-1) === "Z" ? a.fill : "none", stroke: "none", d: l })), u ? h.createElement("path", Cr({}, se(a), { fill: "none", d: dn(t, i) })) : null, u ? h.createElement("path", Cr({}, se(a), { fill: "none", d: dn(n, i) })) : null);
  }
  var s = dn(t, i);
  return h.createElement("path", Cr({}, se(a), { fill: s.slice(-1) === "Z" ? a.fill : "none", className: o, d: s }));
};
function _u() {
  return _u = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, _u.apply(null, arguments);
}
var mc = (e2) => {
  var { cx: t, cy: r, r: n, className: i } = e2, a = B("recharts-dot", i);
  return N(t) && N(r) && N(n) ? h.createElement("circle", _u({}, le(e2), Ru(e2), { className: a, cx: t, cy: r, r: n })) : null;
}, Zy = (e2) => e2.graphicalItems.polarItems, pC = P([X, Yn], Fl), co = P([Zy, ae, pC], Wl), mC = P([co], Kl), so = P([mC, Tl], Ul), Qy = P([so, ae, co], ql);
P([so, ae, co], (e2, t, r) => r.length > 0 ? e2.flatMap((n) => r.flatMap((i) => {
  var a, o = ue(n, (a = t.dataKey) !== null && a !== void 0 ? a : i.dataKey);
  return { value: o, errorDomain: [] };
})).filter(Boolean) : (t == null ? void 0 : t.dataKey) != null ? e2.map((n) => ({ value: ue(n, t.dataKey), errorDomain: [] })) : e2.map((n) => ({ value: n, errorDomain: [] })));
var xd = () => {
}, yC = P([so, ae, co, io, X], Xl), gC = P([ae, Yl, Vl, xd, yC, xd, U, X], Zl), Jy = P([ae, U, so, Qy, qn, X, gC], Ql), eg = P([Jy, ae, er], ec), bC = P([ae, Jy, eg, X], rc), yc = (e2, t, r) => {
  switch (t) {
    case "angleAxis":
      return Kr(e2, r);
    case "radiusAxis":
      return Gn(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, gc = (e2, t, r) => {
  switch (t) {
    case "angleAxis":
      return QA(e2, r);
    case "radiusAxis":
      return JA(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Zr = P([yc, er, bC, gc], ao), tg = P([U, Qy, qr, X], nc), Qr = P([U, yc, er, Zr, eg, gc, Qn, tg, X], Vm), wC = P([Qr], (e2) => {
  if (e2) {
    var t = /* @__PURE__ */ new Map();
    return e2.forEach((r) => {
      var n = (r.coordinate + 360) % 360;
      t.has(n) || t.set(n, r);
    }), Array.from(t.values());
  }
});
P([U, yc, Zr, gc, Qn, tg, X], Zm);
var xC = (e2, t) => Qr(e2, "angleAxis", t, false), PC = P([xC], (e2) => {
  if (e2) return e2.map((t) => t.coordinate);
}), OC = (e2, t) => Qr(e2, "radiusAxis", t, false), AC = P([OC], (e2) => {
  if (e2) return e2.map((t) => t.coordinate);
}), SC = ["gridType", "radialLines", "angleAxisId", "radiusAxisId", "cx", "cy", "innerRadius", "outerRadius", "polarAngles", "polarRadius"];
function EC(e2, t) {
  if (e2 == null) return {};
  var r, n, i = _C(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function _C(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, lt.apply(null, arguments);
}
function Pd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jn(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(r), true).forEach(function(n) {
      jC(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function jC(e2, t, r) {
  return (t = CC(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function CC(e2) {
  var t = kC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var TC = (e2, t, r, n) => {
  var i = "";
  return n.forEach((a, o) => {
    var u = Y(t, r, e2, a);
    o ? i += "L ".concat(u.x, ",").concat(u.y) : i += "M ".concat(u.x, ",").concat(u.y);
  }), i += "Z", i;
}, MC = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, polarAngles: a, radialLines: o } = e2;
  if (!a || !a.length || !o) return null;
  var u = jn({ stroke: "#ccc" }, le(e2));
  return h.createElement("g", { className: "recharts-polar-grid-angle" }, a.map((l) => {
    var s = Y(t, r, n, l), c = Y(t, r, i, l);
    return h.createElement("line", lt({ key: "line-".concat(l) }, u, { x1: s.x, y1: s.y, x2: c.x, y2: c.y }));
  }));
}, Od = (e2) => {
  var { cx: t, cy: r, radius: n } = e2, i = jn({ stroke: "#ccc", fill: "none" }, le(e2));
  return h.createElement("circle", lt({}, i, { className: B("recharts-polar-grid-concentric-circle", e2.className), cx: t, cy: r, r: n }));
}, Ad = (e2) => {
  var { radius: t } = e2, r = jn({ stroke: "#ccc", fill: "none" }, le(e2));
  return h.createElement("path", lt({}, r, { className: B("recharts-polar-grid-concentric-polygon", e2.className), d: TC(t, e2.cx, e2.cy, e2.polarAngles) }));
}, IC = (e2) => {
  var { polarRadius: t, gridType: r } = e2;
  if (!t || !t.length) return null;
  var n = Math.max(...t), i = e2.fill && e2.fill !== "none";
  return h.createElement("g", { className: "recharts-polar-grid-concentric" }, i && r === "circle" && h.createElement(Od, lt({}, e2, { radius: n })), i && r !== "circle" && h.createElement(Ad, lt({}, e2, { radius: n })), t.map((a, o) => {
    var u = o;
    return r === "circle" ? h.createElement(Od, lt({ key: u }, e2, { fill: "none", radius: a })) : h.createElement(Ad, lt({ key: u }, e2, { fill: "none", radius: a }));
  }));
}, DC = (e2) => {
  var t, r, n, i, a, o, u, l, s, { gridType: c = "polygon", radialLines: f = true, angleAxisId: d = 0, radiusAxisId: v = 0, cx: p, cy: m, innerRadius: y, outerRadius: g, polarAngles: w, polarRadius: b } = e2, O = EC(e2, SC), x = I(Ur), A = I((C) => PC(C, d)), S = I((C) => AC(C, v)), k = Array.isArray(w) ? w : A, T = Array.isArray(b) ? b : S;
  if (k == null || T == null) return null;
  var D = jn(jn({ cx: (t = (r = x == null ? void 0 : x.cx) !== null && r !== void 0 ? r : p) !== null && t !== void 0 ? t : 0, cy: (n = (i = x == null ? void 0 : x.cy) !== null && i !== void 0 ? i : m) !== null && n !== void 0 ? n : 0, innerRadius: (a = (o = x == null ? void 0 : x.innerRadius) !== null && o !== void 0 ? o : y) !== null && a !== void 0 ? a : 0, outerRadius: (u = (l = x == null ? void 0 : x.outerRadius) !== null && l !== void 0 ? l : g) !== null && u !== void 0 ? u : 0, polarAngles: k, polarRadius: T }, O), {}, { zIndex: (s = O.zIndex) !== null && s !== void 0 ? s : pe.grid }), { outerRadius: E } = D;
  return E <= 0 ? null : h.createElement(Ve, { zIndex: D.zIndex }, h.createElement("g", { className: "recharts-polar-grid" }, h.createElement(IC, lt({ gridType: c, radialLines: f }, D, { polarAngles: k, polarRadius: T })), h.createElement(MC, lt({ gridType: c, radialLines: f }, D, { polarAngles: k, polarRadius: T }))));
};
DC.displayName = "PolarGrid";
var rg = {}, ng = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    if (r.length === 0) return;
    let i = r[0], a = n(i);
    for (let o = 1; o < r.length; o++) {
      const u = r[o], l = n(u);
      l > a && (a = l, i = u);
    }
    return i;
  }
  e2.maxBy = t;
})(ng);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = ng, r = Nn, n = Oa;
  function i(a, o) {
    if (a != null) return t.maxBy(Array.from(a), n.iteratee(o ?? r.identity));
  }
  e2.maxBy = i;
})(rg);
var NC = rg.maxBy;
const $C = Pt(NC);
var ig = {}, ag = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    if (r.length === 0) return;
    let i = r[0], a = n(i);
    for (let o = 1; o < r.length; o++) {
      const u = r[o], l = n(u);
      l < a && (a = l, i = u);
    }
    return i;
  }
  e2.minBy = t;
})(ag);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = ag, r = Nn, n = Oa;
  function i(a, o) {
    if (a != null) return t.minBy(Array.from(a), n.iteratee(o ?? r.identity));
  }
  e2.minBy = i;
})(ig);
var LC = ig.minBy;
const RC = Pt(LC);
var zC = { radiusAxis: {}, angleAxis: {} }, og = Fe({ name: "polarAxis", initialState: zC, reducers: { addRadiusAxis(e2, t) {
  e2.radiusAxis[t.payload.id] = t.payload;
}, removeRadiusAxis(e2, t) {
  delete e2.radiusAxis[t.payload.id];
}, addAngleAxis(e2, t) {
  e2.angleAxis[t.payload.id] = t.payload;
}, removeAngleAxis(e2, t) {
  delete e2.angleAxis[t.payload.id];
} } }), { addRadiusAxis: BC, removeRadiusAxis: FC, addAngleAxis: WC, removeAngleAxis: KC } = og.actions, UC = og.reducer, HC = ["cx", "cy", "angle", "axisLine"], qC = ["angle", "tickFormatter", "stroke", "tick"];
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Cn.apply(null, arguments);
}
function Sd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jt(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sd(Object(r), true).forEach(function(n) {
      GC(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Sd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function GC(e2, t, r) {
  return (t = YC(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function YC(e2) {
  var t = VC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function ug(e2, t) {
  if (e2 == null) return {};
  var r, n, i = XC(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function XC(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var ZC = "radiusAxis";
function QC(e2) {
  var t = ie();
  return h.useEffect(() => (t(BC(e2)), () => {
    t(FC(e2));
  })), null;
}
var JC = (e2, t, r, n) => {
  var { coordinate: i } = e2;
  return Y(r, n, i, t);
}, ek = (e2) => {
  var t;
  switch (e2) {
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
}, tk = (e2, t, r, n) => {
  var i = $C(n, (o) => o.coordinate || 0), a = RC(n, (o) => o.coordinate || 0);
  return { cx: t, cy: r, startAngle: e2, endAngle: e2, innerRadius: (a == null ? void 0 : a.coordinate) || 0, outerRadius: (i == null ? void 0 : i.coordinate) || 0, clockWise: false };
}, rk = (e2, t) => {
  var { cx: r, cy: n, angle: i, axisLine: a } = e2, o = ug(e2, HC), u = t.reduce((f, d) => [Math.min(f[0], d.coordinate), Math.max(f[1], d.coordinate)], [1 / 0, -1 / 0]), l = Y(r, n, u[0], i), s = Y(r, n, u[1], i), c = jt(jt(jt({}, le(o)), {}, { fill: "none" }, le(a)), {}, { x1: l.x, y1: l.y, x2: s.x, y2: s.y });
  return h.createElement("line", Cn({ className: "recharts-polar-radius-axis-line" }, c));
}, nk = (e2, t, r) => {
  var n;
  return h.isValidElement(e2) ? n = h.cloneElement(e2, t) : typeof e2 == "function" ? n = e2(t) : n = h.createElement(ri, Cn({}, t, { className: "recharts-polar-radius-axis-tick-value" }), r), n;
}, ik = (e2, t) => {
  var { angle: r, tickFormatter: n, stroke: i, tick: a } = e2, o = ug(e2, qC), u = ek(e2.orientation), l = le(o), s = zr(a), c = t.map((f, d) => {
    var v = JC(f, e2.angle, e2.cx, e2.cy), p = jt(jt(jt(jt({ textAnchor: u, transform: "rotate(".concat(90 - r, ", ").concat(v.x, ", ").concat(v.y, ")") }, l), {}, { stroke: "none", fill: i }, s), {}, { index: d }, v), {}, { payload: f });
    return h.createElement(ke, Cn({ className: B("recharts-polar-radius-axis-tick", gp(a)), key: "tick-".concat(f.coordinate) }, zu(e2, f, d)), nk(a, p, n ? n(f.value, d) : f.value));
  });
  return h.createElement(ke, { className: "recharts-polar-radius-axis-ticks" }, c);
}, ak = (e2) => {
  var { radiusAxisId: t } = e2, r = I(Ur), n = I((l) => Zr(l, "radiusAxis", t)), i = I((l) => Qr(l, "radiusAxis", t, false));
  if (r == null || !i || !i.length || n == null) return null;
  var a = jt(jt({}, e2), {}, { scale: n }, r), { tick: o, axisLine: u } = a;
  return h.createElement(Ve, { zIndex: a.zIndex }, h.createElement(ke, { className: B("recharts-polar-radius-axis", ZC, a.className) }, u && rk(a, i), o && ik(a, i), h.createElement(Gj, tk(a.angle, a.cx, a.cy, i), h.createElement(tC, { label: a.label }), a.children)));
};
function ok(e2) {
  var t = me(e2, Re);
  return h.createElement(h.Fragment, null, h.createElement(QC, { domain: t.domain, id: t.radiusAxisId, scale: t.scale, type: t.type, dataKey: t.dataKey, unit: void 0, name: t.name, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDataOverflow: t.allowDataOverflow, reversed: t.reversed, includeHidden: t.includeHidden, allowDecimals: t.allowDecimals, ticks: t.ticks, tickCount: t.tickCount, tick: t.tick }), h.createElement(ak, t));
}
ok.displayName = "PolarRadiusAxis";
var uk = ["children"];
function gr() {
  return gr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, gr.apply(null, arguments);
}
function Ed(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ed(Object(r), true).forEach(function(n) {
      lk(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function lk(e2, t, r) {
  return (t = ck(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function ck(e2) {
  var t = sk(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sk(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function fk(e2, t) {
  if (e2 == null) return {};
  var r, n, i = dk(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function dk(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var _d = 1e-5, vk = Math.cos(Gi(45)), hk = "angleAxis";
function pk(e2) {
  var t = ie(), r = h.useMemo(() => {
    var { children: a } = e2, o = fk(e2, uk);
    return o;
  }, [e2]), n = I((a) => Kr(a, r.id)), i = r === n;
  return h.useEffect(() => (t(WC(r)), () => {
    t(KC(r));
  }), [t, r]), i ? e2.children : null;
}
var mk = (e2, t) => {
  var { cx: r, cy: n, radius: i, orientation: a, tickSize: o } = t, u = o || 8, l = Y(r, n, i, e2.coordinate), s = Y(r, n, i + (a === "inner" ? -1 : 1) * u, e2.coordinate);
  return { x1: l.x, y1: l.y, x2: s.x, y2: s.y };
}, yk = (e2, t) => {
  var r = Math.cos(Gi(-e2.coordinate));
  return r > _d ? t === "outer" ? "start" : "end" : r < -_d ? t === "outer" ? "end" : "start" : "middle";
}, gk = (e2) => {
  var t = Math.cos(Gi(-e2.coordinate)), r = Math.sin(Gi(-e2.coordinate));
  return Math.abs(t) <= vk ? r > 0 ? "start" : "end" : "middle";
}, bk = (e2) => {
  var { cx: t, cy: r, radius: n, axisLineType: i, axisLine: a, ticks: o } = e2;
  if (!a) return null;
  var u = pt(pt({}, le(e2)), {}, { fill: "none" }, le(a));
  if (i === "circle") return h.createElement(mc, gr({ className: "recharts-polar-angle-axis-line" }, u, { cx: t, cy: r, r: n }));
  var l = o.map((s) => Y(t, r, n, s.coordinate));
  return h.createElement(Xy, gr({ className: "recharts-polar-angle-axis-line" }, u, { points: l }));
}, wk = (e2) => {
  var { tick: t, tickProps: r, value: n } = e2;
  return t ? h.isValidElement(t) ? h.cloneElement(t, r) : typeof t == "function" ? t(r) : h.createElement(ri, gr({}, r, { className: "recharts-polar-angle-axis-tick-value" }), n) : null;
}, xk = (e2) => {
  var { tick: t, tickLine: r, tickFormatter: n, stroke: i, ticks: a } = e2, o = le(e2), u = zr(t), l = pt(pt({}, o), {}, { fill: "none" }, le(r)), s = a.map((c, f) => {
    var d = mk(c, e2), v = yk(c, e2.orientation), p = gk(c), m = pt(pt(pt({}, o), {}, { textAnchor: v, verticalAnchor: p, stroke: "none", fill: i }, u), {}, { index: f, payload: c, x: d.x2, y: d.y2 });
    return h.createElement(ke, gr({ className: B("recharts-polar-angle-axis-tick", gp(t)), key: "tick-".concat(c.coordinate) }, zu(e2, c, f)), r && h.createElement("line", gr({ className: "recharts-polar-angle-axis-tick-line" }, l, d)), h.createElement(wk, { tick: t, tickProps: m, value: n ? n(c.value, f) : c.value }));
  });
  return h.createElement(ke, { className: "recharts-polar-angle-axis-ticks" }, s);
}, Pk = (e2) => {
  var { angleAxisId: t } = e2, r = I(Ur), n = I((u) => Zr(u, "angleAxis", t)), i = Te(), a = I((u) => wC(u, "angleAxis", t, i));
  if (r == null || !a || !a.length || n == null) return null;
  var o = pt(pt(pt({}, e2), {}, { scale: n }, r), {}, { radius: r.outerRadius, ticks: a });
  return h.createElement(Ve, { zIndex: o.zIndex }, h.createElement(ke, { className: B("recharts-polar-angle-axis", hk, o.className) }, h.createElement(bk, o), h.createElement(xk, o)));
};
function Ok(e2) {
  var t = me(e2, ht);
  return h.createElement(pk, { id: t.angleAxisId, scale: t.scale, type: t.type, dataKey: t.dataKey, unit: void 0, name: t.name, allowDuplicatedCategory: false, allowDataOverflow: false, reversed: t.reversed, includeHidden: false, allowDecimals: t.allowDecimals, tickCount: t.tickCount, ticks: t.ticks, tick: t.tick, domain: t.domain }, h.createElement(Pk, t));
}
Ok.displayName = "PolarAngleAxis";
var lg = (e2) => e2 && typeof e2 == "object" && "clipDot" in e2 ? !!e2.clipDot : true, cg = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    var _a2;
    if (typeof r != "object" || r == null) return false;
    if (Object.getPrototypeOf(r) === null) return true;
    if (Object.prototype.toString.call(r) !== "[object Object]") {
      const i = r[Symbol.toStringTag];
      return i == null || !((_a2 = Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)) == null ? void 0 : _a2.writable) ? false : r.toString() === `[object ${i}]`;
    }
    let n = r;
    for (; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n);
    return Object.getPrototypeOf(r) === n;
  }
  e2.isPlainObject = t;
})(cg);
var Ak = cg.isPlainObject;
const Sk = Pt(Ak);
var jd, Cd, kd, Td, Md;
function Id(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dd(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Id(Object(r), true).forEach(function(n) {
      Ek(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Id(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Ek(e2, t, r) {
  return (t = _k(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function _k(e2) {
  var t = jk(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jk(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function la() {
  return la = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, la.apply(null, arguments);
}
function ln(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var Nd = (e2, t, r, n, i) => {
  var a = r - n, o;
  return o = ne(jd || (jd = ln(["M ", ",", ""])), e2, t), o += ne(Cd || (Cd = ln(["L ", ",", ""])), e2 + r, t), o += ne(kd || (kd = ln(["L ", ",", ""])), e2 + r - a / 2, t + i), o += ne(Td || (Td = ln(["L ", ",", ""])), e2 + r - a / 2 - n, t + i), o += ne(Md || (Md = ln(["L ", ",", " Z"])), e2, t), o;
}, Ck = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, kk = (e2) => {
  var t = me(e2, Ck), { x: r, y: n, upperWidth: i, lowerWidth: a, height: o, className: u } = t, { animationEasing: l, animationDuration: s, animationBegin: c, isUpdateAnimationActive: f } = t, d = h.useRef(null), [v, p] = h.useState(-1), m = h.useRef(i), y = h.useRef(a), g = h.useRef(o), w = h.useRef(r), b = h.useRef(n), O = qa(e2, "trapezoid-");
  if (h.useEffect(() => {
    if (d.current && d.current.getTotalLength) try {
      var L = d.current.getTotalLength();
      L && p(L);
    } catch {
    }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0) return null;
  var x = B("recharts-trapezoid", u);
  if (!f) return h.createElement("g", null, h.createElement("path", la({}, se(t), { className: x, d: Nd(r, n, i, a, o) })));
  var A = m.current, S = y.current, k = g.current, T = w.current, D = b.current, E = "0px ".concat(v === -1 ? 1 : v, "px"), C = "".concat(v, "px 0px"), R = vp(["strokeDasharray"], s, l);
  return h.createElement(Ha, { animationId: O, key: O, canBegin: v > 0, duration: s, easing: l, isActive: f, begin: c }, (L) => {
    var H = Oe(A, i, L), J = Oe(S, a, L), F = Oe(k, o, L), G = Oe(T, r, L), $ = Oe(D, n, L);
    d.current && (m.current = H, y.current = J, g.current = F, w.current = G, b.current = $);
    var De = L > 0 ? { transition: R, strokeDasharray: C } : { strokeDasharray: E };
    return h.createElement("path", la({}, se(t), { className: x, d: Nd(G, $, H, J, F), ref: d, style: Dd(Dd({}, De), t.style) }));
  });
}, Tk = ["option", "shapeType", "activeClassName"];
function Mk(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Ik(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Ik(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function $d(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ca(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $d(Object(r), true).forEach(function(n) {
      Dk(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : $d(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Dk(e2, t, r) {
  return (t = Nk(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Nk(e2) {
  var t = $k(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $k(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Lk(e2, t) {
  return ca(ca({}, t), e2);
}
function Rk(e2, t) {
  return e2 === "symbols";
}
function Ld(e2) {
  var { shapeType: t, elementProps: r } = e2;
  switch (t) {
    case "rectangle":
      return h.createElement(yp, r);
    case "trapezoid":
      return h.createElement(kk, r);
    case "sector":
      return h.createElement(xp, r);
    case "symbols":
      if (Rk(t)) return h.createElement($v, r);
      break;
    case "curve":
      return h.createElement(dp, r);
    default:
      return null;
  }
}
function zk(e2) {
  return h.isValidElement(e2) ? e2.props : e2;
}
function Bk(e2) {
  var { option: t, shapeType: r, activeClassName: n = "recharts-active-shape" } = e2, i = Mk(e2, Tk), a;
  if (h.isValidElement(t)) a = h.cloneElement(t, ca(ca({}, i), zk(t)));
  else if (typeof t == "function") a = t(i, i.index);
  else if (Sk(t) && typeof t != "boolean") {
    var o = Lk(t, i);
    a = h.createElement(Ld, { shapeType: r, elementProps: o });
  } else {
    var u = i;
    a = h.createElement(Ld, { shapeType: r, elementProps: u });
  }
  return i.isActive ? h.createElement(ke, { className: n }, a) : a;
}
function sg(e2) {
  var { tooltipEntrySettings: t } = e2, r = ie(), n = Te(), i = h.useRef(null);
  return h.useLayoutEffect(() => {
    n || (i.current === null ? r(rE(t)) : i.current !== t && r(nE({ prev: i.current, next: t })), i.current = t);
  }, [t, r, n]), h.useLayoutEffect(() => () => {
    i.current && (r(iE(i.current)), i.current = null);
  }, [r]), null;
}
function Fk(e2) {
  var { legendPayload: t } = e2, r = ie(), n = Te(), i = h.useRef(null);
  return h.useLayoutEffect(() => {
    n || (i.current === null ? r(lp(t)) : i.current !== t && r(cp({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), h.useLayoutEffect(() => () => {
    i.current && (r(sp(i.current)), i.current = null);
  }, [r]), null;
}
function Wk(e2) {
  var { legendPayload: t } = e2, r = ie(), n = I(U), i = h.useRef(null);
  return h.useLayoutEffect(() => {
    n !== "centric" && n !== "radial" || (i.current === null ? r(lp(t)) : i.current !== t && r(cp({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), h.useLayoutEffect(() => () => {
    i.current && (r(sp(i.current)), i.current = null);
  }, [r]), null;
}
var Mo, Kk = () => {
  var [e2] = h.useState(() => vn("uid-"));
  return e2;
}, Uk = (Mo = Yg.useId) !== null && Mo !== void 0 ? Mo : Kk;
function Hk(e2, t) {
  var r = Uk();
  return t || (e2 ? "".concat(e2, "-").concat(r) : r);
}
var qk = h.createContext(void 0), fg = (e2) => {
  var { id: t, type: r, children: n } = e2, i = Hk("recharts-".concat(r), t);
  return h.createElement(qk.Provider, { value: i }, n(i));
}, Gk = { cartesianItems: [], polarItems: [] }, dg = Fe({ name: "graphicalItems", initialState: Gk, reducers: { addCartesianGraphicalItem: { reducer(e2, t) {
  e2.cartesianItems.push(t.payload);
}, prepare: te() }, replaceCartesianGraphicalItem: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload, i = ct(e2).cartesianItems.indexOf(r);
  i > -1 && (e2.cartesianItems[i] = n);
}, prepare: te() }, removeCartesianGraphicalItem: { reducer(e2, t) {
  var r = ct(e2).cartesianItems.indexOf(t.payload);
  r > -1 && e2.cartesianItems.splice(r, 1);
}, prepare: te() }, addPolarGraphicalItem: { reducer(e2, t) {
  e2.polarItems.push(t.payload);
}, prepare: te() }, removePolarGraphicalItem: { reducer(e2, t) {
  var r = ct(e2).polarItems.indexOf(t.payload);
  r > -1 && e2.polarItems.splice(r, 1);
}, prepare: te() } } }), { addCartesianGraphicalItem: Yk, replaceCartesianGraphicalItem: Vk, removeCartesianGraphicalItem: Xk, addPolarGraphicalItem: Zk, removePolarGraphicalItem: Qk } = dg.actions, Jk = dg.reducer, eT = (e2) => {
  var t = ie(), r = h.useRef(null);
  return h.useLayoutEffect(() => {
    r.current === null ? t(Yk(e2)) : r.current !== e2 && t(Vk({ prev: r.current, next: e2 })), r.current = e2;
  }, [t, e2]), h.useLayoutEffect(() => () => {
    r.current && (t(Xk(r.current)), r.current = null);
  }, [t]), null;
}, tT = h.memo(eT);
function rT(e2) {
  var t = ie();
  return h.useLayoutEffect(() => (t(Zk(e2)), () => {
    t(Qk(e2));
  }), [t, e2]), null;
}
var nT = ["points"];
function Rd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Io(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(r), true).forEach(function(n) {
      iT(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function iT(e2, t, r) {
  return (t = aT(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function aT(e2) {
  var t = oT(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oT(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function sa() {
  return sa = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, sa.apply(null, arguments);
}
function uT(e2, t) {
  if (e2 == null) return {};
  var r, n, i = lT(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function lT(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function cT(e2) {
  var { option: t, dotProps: r, className: n } = e2;
  if (h.isValidElement(t)) return h.cloneElement(t, r);
  if (typeof t == "function") return t(r);
  var i = B(n, typeof t != "boolean" ? t.className : ""), a = r ?? {}, { points: o } = a, u = uT(a, nT);
  return h.createElement(mc, sa({}, u, { className: i }));
}
function sT(e2, t) {
  return e2 == null ? false : t ? true : e2.length === 1;
}
function vg(e2) {
  var { points: t, dot: r, className: n, dotClassName: i, dataKey: a, baseProps: o, needClip: u, clipPathId: l, zIndex: s = pe.scatter } = e2;
  if (!sT(t, r)) return null;
  var c = lg(r), f = Qg(r), d = t.map((p, m) => {
    var y, g, w = Io(Io(Io({ r: 3 }, o), f), {}, { index: m, cx: (y = p.x) !== null && y !== void 0 ? y : void 0, cy: (g = p.y) !== null && g !== void 0 ? g : void 0, dataKey: a, value: p.value, payload: p.payload, points: t });
    return h.createElement(cT, { key: "dot-".concat(m), option: r, dotProps: w, className: i });
  }), v = {};
  return u && l != null && (v.clipPath = "url(#clipPath-".concat(c ? "" : "dots-").concat(l, ")")), h.createElement(Ve, { zIndex: s }, h.createElement(ke, sa({ className: n }, v), d));
}
function zd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bd(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zd(Object(r), true).forEach(function(n) {
      fT(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function fT(e2, t, r) {
  return (t = dT(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function dT(e2) {
  var t = vT(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vT(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var hT = { xAxis: {}, yAxis: {}, zAxis: {} }, hg = Fe({ name: "cartesianAxis", initialState: hT, reducers: { addXAxis: { reducer(e2, t) {
  e2.xAxis[t.payload.id] = t.payload;
}, prepare: te() }, replaceXAxis: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload;
  e2.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e2.xAxis[r.id], e2.xAxis[n.id] = n);
}, prepare: te() }, removeXAxis: { reducer(e2, t) {
  delete e2.xAxis[t.payload.id];
}, prepare: te() }, addYAxis: { reducer(e2, t) {
  e2.yAxis[t.payload.id] = t.payload;
}, prepare: te() }, replaceYAxis: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload;
  e2.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e2.yAxis[r.id], e2.yAxis[n.id] = n);
}, prepare: te() }, removeYAxis: { reducer(e2, t) {
  delete e2.yAxis[t.payload.id];
}, prepare: te() }, addZAxis: { reducer(e2, t) {
  e2.zAxis[t.payload.id] = t.payload;
}, prepare: te() }, replaceZAxis: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload;
  e2.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e2.zAxis[r.id], e2.zAxis[n.id] = n);
}, prepare: te() }, removeZAxis: { reducer(e2, t) {
  delete e2.zAxis[t.payload.id];
}, prepare: te() }, updateYAxisWidth(e2, t) {
  var { id: r, width: n } = t.payload, i = e2.yAxis[r];
  if (i) {
    var a = i.widthHistory || [];
    if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - a[0]) <= 1) return;
    var o = [...a, n].slice(-3);
    e2.yAxis[r] = Bd(Bd({}, e2.yAxis[r]), {}, { width: n, widthHistory: o });
  }
} } }), { addXAxis: pT, replaceXAxis: mT, removeXAxis: yT, addYAxis: gT, replaceYAxis: bT, removeYAxis: wT, addZAxis: DN, replaceZAxis: NN, removeZAxis: $N, updateYAxisWidth: xT } = hg.actions, PT = hg.reducer, OT = P([_e], (e2) => ({ top: e2.top, bottom: e2.bottom, left: e2.left, right: e2.right })), AT = P([OT, Rt, zt], (e2, t, r) => {
  if (!(!e2 || t == null || r == null)) return { x: e2.left, y: e2.top, width: Math.max(0, t - e2.left - e2.right), height: Math.max(0, r - e2.top - e2.bottom) };
}), bc = () => I(AT), ST = () => I(XE);
function Fd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Do(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fd(Object(r), true).forEach(function(n) {
      ET(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Fd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function ET(e2, t, r) {
  return (t = _T(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function _T(e2) {
  var t = jT(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function jT(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var CT = (e2) => {
  var { point: t, childIndex: r, mainColor: n, activeDot: i, dataKey: a, clipPath: o } = e2;
  if (i === false || t.x == null || t.y == null) return null;
  var u = { index: r, dataKey: a, cx: t.x, cy: t.y, r: 4, fill: n ?? "none", strokeWidth: 2, stroke: "#fff", payload: t.payload, value: t.value }, l = Do(Do(Do({}, u), zr(i)), Ru(i)), s;
  return h.isValidElement(i) ? s = h.cloneElement(i, l) : typeof i == "function" ? s = i(l) : s = h.createElement(mc, l), h.createElement(ke, { className: "recharts-active-dot", clipPath: o }, s);
};
function pg(e2) {
  var { points: t, mainColor: r, activeDot: n, itemDataKey: i, clipPath: a, zIndex: o = pe.activeDot } = e2, u = I(En), l = ST();
  if (t == null || l == null) return null;
  var s = t.find((c) => l.includes(c.payload));
  return fe(s) ? null : h.createElement(Ve, { zIndex: o }, h.createElement(CT, { point: s, childIndex: Number(u), mainColor: r, dataKey: i, activeDot: n, clipPath: a }));
}
function Wd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fa(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wd(Object(r), true).forEach(function(n) {
      kT(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Wd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function kT(e2, t, r) {
  return (t = TT(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function TT(e2) {
  var t = MT(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function MT(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var mg = (e2, t) => Zr(e2, "radiusAxis", t), IT = P([mg], (e2) => {
  if (e2 != null) return { scale: e2 };
}), DT = P([Gn, mg], (e2, t) => {
  if (!(e2 == null || t == null)) return fa(fa({}, e2), {}, { scale: t });
}), NT = (e2, t, r, n) => Qr(e2, "radiusAxis", t, n), yg = (e2, t, r) => Kr(e2, r), gg = (e2, t, r) => Zr(e2, "angleAxis", r), $T = P([yg, gg], (e2, t) => {
  if (!(e2 == null || t == null)) return fa(fa({}, e2), {}, { scale: t });
}), LT = (e2, t, r, n) => Qr(e2, "angleAxis", r, n), RT = P([yg, gg, Ur], (e2, t, r) => {
  if (!(r == null || t == null)) return { scale: t, type: e2.type, dataKey: e2.dataKey, cx: r.cx, cy: r.cy };
}), zT = (e2, t, r, n, i) => i, BT = P([U, DT, NT, $T, LT], (e2, t, r, n, i) => Lt(e2, "radiusAxis") ? Dr(t, r, false) : Dr(n, i, false)), FT = P([Zy, zT], (e2, t) => {
  if (e2 != null) {
    var r = e2.find((n) => n.type === "radar" && t === n.id);
    return r == null ? void 0 : r.dataKey;
  }
}), WT = P([IT, RT, Tl, FT, BT], (e2, t, r, n, i) => {
  var { chartData: a, dataStartIndex: o, dataEndIndex: u } = r;
  if (!(e2 == null || t == null || a == null || i == null || n == null)) {
    var l = a.slice(o, u + 1);
    return QT({ radiusAxis: e2, angleAxis: t, displayedData: l, dataKey: n, bandSize: i });
  }
}), KT = ["id"];
function kn() {
  return kn = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, kn.apply(null, arguments);
}
function Kd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Be(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kd(Object(r), true).forEach(function(n) {
      UT(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Kd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function UT(e2, t, r) {
  return (t = HT(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function HT(e2) {
  var t = qT(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qT(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function GT(e2, t) {
  if (e2 == null) return {};
  var r, n, i = YT(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function YT(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function wc(e2, t) {
  return e2 && e2 !== "none" ? e2 : t;
}
var VT = (e2) => {
  var { dataKey: t, name: r, stroke: n, fill: i, legendType: a, hide: o } = e2;
  return [{ inactive: o, dataKey: t, type: a, color: wc(n, i), value: Da(r, t), payload: e2 }];
}, XT = h.memo((e2) => {
  var { dataKey: t, stroke: r, strokeWidth: n, fill: i, name: a, hide: o, tooltipType: u, id: l } = e2, s = { dataDefinedOnItem: void 0, positions: void 0, settings: { stroke: r, strokeWidth: n, fill: i, nameKey: void 0, dataKey: t, name: Da(a, t), hide: o, type: u, color: wc(r, i), unit: "", graphicalItemId: l } };
  return h.createElement(sg, { tooltipEntrySettings: s });
});
function ZT(e2) {
  var { points: t, props: r } = e2, { dot: n, dataKey: i } = r, { id: a } = r, o = GT(r, KT), u = le(o);
  return h.createElement(vg, { points: t, dot: n, className: "recharts-radar-dots", dotClassName: "recharts-radar-dot", dataKey: i, baseProps: u });
}
function QT(e2) {
  var { radiusAxis: t, angleAxis: r, displayedData: n, dataKey: i, bandSize: a } = e2, { cx: o, cy: u } = r, l = false, s = [], c = r.type !== "number" ? a ?? 0 : 0;
  n.forEach((d, v) => {
    var p = ue(d, r.dataKey, v), m = ue(d, i), y = r.scale(p) + c, g = Array.isArray(m) ? Hy(m) : m, w = fe(g) ? 0 : t.scale(g);
    Array.isArray(m) && m.length >= 2 && (l = true), s.push(Be(Be({}, Y(o, u, w, y)), {}, { name: p, value: m, cx: o, cy: u, radius: w, angle: y, payload: d }));
  });
  var f = [];
  return l && s.forEach((d) => {
    if (Array.isArray(d.value)) {
      var v = d.value[0], p = fe(v) ? 0 : t.scale(v);
      f.push(Be(Be({}, d), {}, { radius: p }, Y(o, u, p, d.angle)));
    } else f.push(d);
  }), { points: s, isRange: l, baseLinePoints: f };
}
function JT(e2) {
  var { showLabels: t, points: r, children: n } = e2, i = r.map((a) => {
    var o, u = { x: a.x, y: a.y, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return Be(Be({}, u), {}, { value: (o = a.value) !== null && o !== void 0 ? o : "", payload: a.payload, parentViewBox: void 0, viewBox: u, fill: void 0 });
  });
  return h.createElement(Gy, { value: t ? i : void 0 }, n);
}
function eM(e2) {
  var { points: t, baseLinePoints: r, props: n } = e2;
  if (t == null) return null;
  var { shape: i, isRange: a, connectNulls: o } = n, u = (c) => {
    var { onMouseEnter: f } = n;
    f && f(n, c);
  }, l = (c) => {
    var { onMouseLeave: f } = n;
    f && f(n, c);
  }, s;
  return h.isValidElement(i) ? s = h.cloneElement(i, Be(Be({}, n), {}, { points: t })) : typeof i == "function" ? s = i(Be(Be({}, n), {}, { points: t })) : s = h.createElement(Xy, kn({}, se(n), { onMouseEnter: u, onMouseLeave: l, points: t, baseLinePoints: a ? r : void 0, connectNulls: o })), h.createElement(ke, { className: "recharts-radar-polygon" }, s, h.createElement(ZT, { props: n, points: t }));
}
var Ud = (e2, t, r) => (n, i) => {
  var a = e2 && e2[Math.floor(i * t)];
  return a ? Be(Be({}, n), {}, { x: Oe(a.x, n.x, r), y: Oe(a.y, n.y, r) }) : Be(Be({}, n), {}, { x: Oe(n.cx, n.x, r), y: Oe(n.cy, n.y, r) });
};
function tM(e2) {
  var { props: t, previousPointsRef: r, previousBaseLinePointsRef: n } = e2, { points: i, baseLinePoints: a, isAnimationActive: o, animationBegin: u, animationDuration: l, animationEasing: s, onAnimationEnd: c, onAnimationStart: f } = t, d = r.current, v = n.current, p = d ? d.length / i.length : 1, m = v ? v.length / a.length : 1, y = qa(t, "recharts-radar-"), [g, w] = h.useState(false), b = !g, O = h.useCallback(() => {
    typeof c == "function" && c(), w(false);
  }, [c]), x = h.useCallback(() => {
    typeof f == "function" && f(), w(true);
  }, [f]);
  return h.createElement(JT, { showLabels: b, points: i }, h.createElement(Ha, { animationId: y, begin: u, duration: l, isActive: o, easing: s, key: "radar-".concat(y), onAnimationEnd: O, onAnimationStart: x }, (A) => {
    var S = A === 1 ? i : i.map(Ud(d, p, A)), k = A === 1 ? a : a == null ? void 0 : a.map(Ud(v, m, A));
    return A > 0 && (r.current = S, n.current = k), h.createElement(eM, { points: S, baseLinePoints: k, props: t });
  }), h.createElement(Vy, { label: t.label }), t.children);
}
function rM(e2) {
  var t = h.useRef(void 0), r = h.useRef(void 0);
  return h.createElement(tM, { props: e2, previousPointsRef: t, previousBaseLinePointsRef: r });
}
var nM = { activeDot: true, angleAxisId: 0, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", dot: false, hide: false, isAnimationActive: "auto", label: false, legendType: "rect", radiusAxisId: 0, zIndex: pe.area };
function iM(e2) {
  var { hide: t, className: r, points: n } = e2;
  if (t) return null;
  var i = B("recharts-radar", r);
  return h.createElement(Ve, { zIndex: e2.zIndex }, h.createElement(ke, { className: i }, h.createElement(rM, e2)), h.createElement(pg, { points: n, mainColor: wc(e2.stroke, e2.fill), itemDataKey: e2.dataKey, activeDot: e2.activeDot }));
}
function aM(e2) {
  var t = Te(), r = I((n) => WT(n, e2.radiusAxisId, e2.angleAxisId, t, e2.id));
  return (r == null ? void 0 : r.points) == null ? null : h.createElement(iM, kn({}, e2, { points: r == null ? void 0 : r.points, baseLinePoints: r == null ? void 0 : r.baseLinePoints, isRange: r == null ? void 0 : r.isRange }));
}
function oM(e2) {
  var t = me(e2, nM);
  return h.createElement(fg, { id: t.id, type: "radar" }, (r) => h.createElement(h.Fragment, null, h.createElement(rT, { type: "radar", id: r, data: void 0, dataKey: t.dataKey, hide: t.hide, angleAxisId: t.angleAxisId, radiusAxisId: t.radiusAxisId }), h.createElement(Wk, { legendPayload: VT(t) }), h.createElement(XT, { dataKey: t.dataKey, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, tooltipType: t.tooltipType, id: r }), h.createElement(aM, kn({}, t, { id: r }))));
}
oM.displayName = "Radar";
var bg = (e2) => {
  var { chartData: t } = e2, r = ie(), n = Te();
  return h.useEffect(() => n ? () => {
  } : (r(td(t)), () => {
    r(td(void 0));
  }), [t, r, n]), null;
}, Hd = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }, wg = Fe({ name: "brush", initialState: Hd, reducers: { setBrushSettings(e2, t) {
  return t.payload == null ? Hd : t.payload;
} } }), { setBrushSettings: LN } = wg.actions, uM = wg.reducer;
function lM(e2, t, r) {
  return (t = cM(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function cM(e2) {
  var t = sM(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function sM(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
class xc {
  static create(t) {
    return new xc(t);
  }
  constructor(t) {
    this.scale = t;
  }
  get domain() {
    return this.scale.domain;
  }
  get range() {
    return this.scale.range;
  }
  get rangeMin() {
    return this.range()[0];
  }
  get rangeMax() {
    return this.range()[1];
  }
  get bandwidth() {
    return this.scale.bandwidth;
  }
  apply(t) {
    var { bandAware: r, position: n } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t !== void 0) {
      if (n) switch (n) {
        case "start":
          return this.scale(t);
        case "middle": {
          var i = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(t) + i;
        }
        case "end": {
          var a = this.bandwidth ? this.bandwidth() : 0;
          return this.scale(t) + a;
        }
        default:
          return this.scale(t);
      }
      if (r) {
        var o = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(t) + o;
      }
      return this.scale(t);
    }
  }
  isInRange(t) {
    var r = this.range(), n = r[0], i = r[r.length - 1];
    return n <= i ? t >= n && t <= i : t >= i && t <= n;
  }
}
lM(xc, "EPS", 1e-4);
function fM(e2) {
  return (e2 % 180 + 180) % 180;
}
var dM = function(t) {
  var { width: r, height: n } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = fM(i), o = a * Math.PI / 180, u = Math.atan(n / r), l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, vM = { dots: [], areas: [], lines: [] }, xg = Fe({ name: "referenceElements", initialState: vM, reducers: { addDot: (e2, t) => {
  e2.dots.push(t.payload);
}, removeDot: (e2, t) => {
  var r = ct(e2).dots.findIndex((n) => n === t.payload);
  r !== -1 && e2.dots.splice(r, 1);
}, addArea: (e2, t) => {
  e2.areas.push(t.payload);
}, removeArea: (e2, t) => {
  var r = ct(e2).areas.findIndex((n) => n === t.payload);
  r !== -1 && e2.areas.splice(r, 1);
}, addLine: (e2, t) => {
  e2.lines.push(t.payload);
}, removeLine: (e2, t) => {
  var r = ct(e2).lines.findIndex((n) => n === t.payload);
  r !== -1 && e2.lines.splice(r, 1);
} } }), { addDot: RN, removeDot: zN, addArea: BN, removeArea: FN, addLine: WN, removeLine: KN } = xg.actions, hM = xg.reducer, pM = h.createContext(void 0), mM = (e2) => {
  var { children: t } = e2, [r] = h.useState("".concat(vn("recharts"), "-clip")), n = bc();
  if (n == null) return null;
  var { x: i, y: a, width: o, height: u } = n;
  return h.createElement(pM.Provider, { value: r }, h.createElement("defs", null, h.createElement("clipPath", { id: r }, h.createElement("rect", { x: i, y: a, height: u, width: o }))), t);
};
function Pg(e2, t) {
  if (t < 1) return [];
  if (t === 1) return e2;
  for (var r = [], n = 0; n < e2.length; n += t) {
    var i = e2[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function yM(e2, t, r) {
  var n = { width: e2.width + t.width, height: e2.height + t.height };
  return dM(n, r);
}
function gM(e2, t, r) {
  var n = r === "width", { x: i, y: a, width: o, height: u } = e2;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + u } : { start: n ? i + o : a + u, end: n ? i : a };
}
function Tn(e2, t, r, n, i) {
  if (e2 * t < e2 * n || e2 * t > e2 * i) return false;
  var a = r();
  return e2 * (t - e2 * a / 2 - n) >= 0 && e2 * (t + e2 * a / 2 - i) <= 0;
}
function bM(e2, t) {
  return Pg(e2, t + 1);
}
function wM(e2, t, r, n, i) {
  for (var a = (n || []).slice(), { start: o, end: u } = t, l = 0, s = 1, c = o, f = function() {
    var p = n == null ? void 0 : n[l];
    if (p === void 0) return { v: Pg(n, s) };
    var m = l, y, g = () => (y === void 0 && (y = r(p, m)), y), w = p.coordinate, b = l === 0 || Tn(e2, w, g, c, u);
    b || (l = 0, c = o, s += 1), b && (c = w + e2 * (g() / 2 + i), l += s);
  }, d; s <= a.length; ) if (d = f(), d) return d.v;
  return [];
}
function xM(e2, t, r, n, i) {
  var a = (n || []).slice(), o = a.length;
  if (o === 0) return [];
  for (var { start: u, end: l } = t, s = 1; s <= o; s++) {
    for (var c = (o - 1) % s, f = u, d = true, v = function() {
      var w = n[p], b = p, O, x = () => (O === void 0 && (O = r(w, b)), O), A = w.coordinate, S = p === c || Tn(e2, A, x, f, l);
      if (!S) return d = false, 1;
      S && (f = A + e2 * (x() / 2 + i));
    }, p = c; p < o && !v(); p += s) ;
    if (d) {
      for (var m = [], y = c; y < o; y += s) m.push(n[y]);
      return m;
    }
  }
  return [];
}
function qd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function je(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qd(Object(r), true).forEach(function(n) {
      PM(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : qd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function PM(e2, t, r) {
  return (t = OM(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function OM(e2) {
  var t = AM(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AM(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function SM(e2, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, { start: u } = t, { end: l } = t, s = function(d) {
    var v = a[d], p, m = () => (p === void 0 && (p = r(v, d)), p);
    if (d === o - 1) {
      var y = e2 * (v.coordinate + e2 * m() / 2 - l);
      a[d] = v = je(je({}, v), {}, { tickCoord: y > 0 ? v.coordinate - y * e2 : v.coordinate });
    } else a[d] = v = je(je({}, v), {}, { tickCoord: v.coordinate });
    if (v.tickCoord != null) {
      var g = Tn(e2, v.tickCoord, m, u, l);
      g && (l = v.tickCoord - e2 * (m() / 2 + i), a[d] = je(je({}, v), {}, { isShow: true }));
    }
  }, c = o - 1; c >= 0; c--) s(c);
  return a;
}
function EM(e2, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, { start: l, end: s } = t;
  if (a) {
    var c = n[u - 1], f = r(c, u - 1), d = e2 * (c.coordinate + e2 * f / 2 - s);
    if (o[u - 1] = c = je(je({}, c), {}, { tickCoord: d > 0 ? c.coordinate - d * e2 : c.coordinate }), c.tickCoord != null) {
      var v = Tn(e2, c.tickCoord, () => f, l, s);
      v && (s = c.tickCoord - e2 * (f / 2 + i), o[u - 1] = je(je({}, c), {}, { isShow: true }));
    }
  }
  for (var p = a ? u - 1 : u, m = function(w) {
    var b = o[w], O, x = () => (O === void 0 && (O = r(b, w)), O);
    if (w === 0) {
      var A = e2 * (b.coordinate - e2 * x() / 2 - l);
      o[w] = b = je(je({}, b), {}, { tickCoord: A < 0 ? b.coordinate - A * e2 : b.coordinate });
    } else o[w] = b = je(je({}, b), {}, { tickCoord: b.coordinate });
    if (b.tickCoord != null) {
      var S = Tn(e2, b.tickCoord, x, l, s);
      S && (l = b.tickCoord + e2 * (x() / 2 + i), o[w] = je(je({}, b), {}, { isShow: true }));
    }
  }, y = 0; y < p; y++) m(y);
  return o;
}
function Pc(e2, t, r) {
  var { tick: n, ticks: i, viewBox: a, minTickGap: o, orientation: u, interval: l, tickFormatter: s, unit: c, angle: f } = e2;
  if (!i || !i.length || !n) return [];
  if (N(l) || Ua.isSsr) {
    var d;
    return (d = bM(i, N(l) ? l : 0)) !== null && d !== void 0 ? d : [];
  }
  var v = [], p = u === "top" || u === "bottom" ? "width" : "height", m = c && p === "width" ? fn(c, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, y = (b, O) => {
    var x = typeof s == "function" ? s(b.value, O) : b.value;
    return p === "width" ? yM(fn(x, { fontSize: t, letterSpacing: r }), m, f) : fn(x, { fontSize: t, letterSpacing: r })[p];
  }, g = i.length >= 2 ? et(i[1].coordinate - i[0].coordinate) : 1, w = gM(a, g, p);
  return l === "equidistantPreserveStart" ? wM(g, w, y, i, o) : l === "equidistantPreserveEnd" ? xM(g, w, y, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? v = EM(g, w, y, i, o, l === "preserveStartEnd") : v = SM(g, w, y, i, o), v.filter((b) => b.isShow));
}
var _M = (e2) => {
  var { ticks: t, label: r, labelGapWithTick: n = 5, tickSize: i = 0, tickMargin: a = 0 } = e2, o = 0;
  if (t) {
    Array.from(t).forEach((c) => {
      if (c) {
        var f = c.getBoundingClientRect();
        f.width > o && (o = f.width);
      }
    });
    var u = r ? r.getBoundingClientRect().width : 0, l = i + a, s = o + l + u + (r ? n : 0);
    return Math.round(s);
  }
  return 0;
}, jM = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType"];
function CM(e2, t) {
  if (e2 == null) return {};
  var r, n, i = kM(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function kM(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function br() {
  return br = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, br.apply(null, arguments);
}
function Gd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ce(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gd(Object(r), true).forEach(function(n) {
      TM(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Gd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function TM(e2, t, r) {
  return (t = MM(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function MM(e2) {
  var t = IM(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function IM(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var kt = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd", zIndex: pe.axis };
function DM(e2) {
  var { x: t, y: r, width: n, height: i, orientation: a, mirror: o, axisLine: u, otherSvgProps: l } = e2;
  if (!u) return null;
  var s = ce(ce(ce({}, l), le(u)), {}, { fill: "none" });
  if (a === "top" || a === "bottom") {
    var c = +(a === "top" && !o || a === "bottom" && o);
    s = ce(ce({}, s), {}, { x1: t, y1: r + c * i, x2: t + n, y2: r + c * i });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    s = ce(ce({}, s), {}, { x1: t + f * n, y1: r, x2: t + f * n, y2: r + i });
  }
  return h.createElement("line", br({}, s, { className: B("recharts-cartesian-axis-line", xa(u, "className")) }));
}
function NM(e2, t, r, n, i, a, o, u, l) {
  var s, c, f, d, v, p, m = u ? -1 : 1, y = e2.tickSize || o, g = N(e2.tickCoord) ? e2.tickCoord : e2.coordinate;
  switch (a) {
    case "top":
      s = c = e2.coordinate, d = r + +!u * i, f = d - m * y, p = f - m * l, v = g;
      break;
    case "left":
      f = d = e2.coordinate, c = t + +!u * n, s = c - m * y, v = s - m * l, p = g;
      break;
    case "right":
      f = d = e2.coordinate, c = t + +u * n, s = c + m * y, v = s + m * l, p = g;
      break;
    default:
      s = c = e2.coordinate, d = r + +u * i, f = d + m * y, p = f + m * l, v = g;
      break;
  }
  return { line: { x1: s, y1: f, x2: c, y2: d }, tick: { x: v, y: p } };
}
function $M(e2, t) {
  switch (e2) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function LM(e2, t) {
  switch (e2) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function RM(e2) {
  var { option: t, tickProps: r, value: n } = e2, i, a = B(r.className, "recharts-cartesian-axis-tick-value");
  if (h.isValidElement(t)) i = h.cloneElement(t, ce(ce({}, r), {}, { className: a }));
  else if (typeof t == "function") i = t(ce(ce({}, r), {}, { className: a }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = B(o, t == null ? void 0 : t.className)), i = h.createElement(ri, br({}, r, { className: o }), n);
  }
  return i;
}
var zM = h.forwardRef((e2, t) => {
  var { ticks: r = [], tick: n, tickLine: i, stroke: a, tickFormatter: o, unit: u, padding: l, tickTextProps: s, orientation: c, mirror: f, x: d, y: v, width: p, height: m, tickSize: y, tickMargin: g, fontSize: w, letterSpacing: b, getTicksConfig: O, events: x, axisType: A } = e2, S = Pc(ce(ce({}, O), {}, { ticks: r }), w, b), k = $M(c, f), T = LM(c, f), D = le(O), E = zr(n), C = {};
  typeof i == "object" && (C = i);
  var R = ce(ce({}, D), {}, { fill: "none" }, C), L = S.map((F) => ce({ entry: F }, NM(F, d, v, p, m, c, y, f, g))), H = L.map((F) => {
    var { entry: G, line: $ } = F;
    return h.createElement(ke, { className: "recharts-cartesian-axis-tick", key: "tick-".concat(G.value, "-").concat(G.coordinate, "-").concat(G.tickCoord) }, i && h.createElement("line", br({}, R, $, { className: B("recharts-cartesian-axis-tick-line", xa(i, "className")) })));
  }), J = L.map((F, G) => {
    var { entry: $, tick: De } = F, We = ce(ce(ce(ce({ textAnchor: k, verticalAnchor: T }, D), {}, { stroke: "none", fill: a }, E), De), {}, { index: G, payload: $, visibleTicksCount: S.length, tickFormatter: o, padding: l }, s);
    return h.createElement(ke, br({ className: "recharts-cartesian-axis-tick-label", key: "tick-label-".concat($.value, "-").concat($.coordinate, "-").concat($.tickCoord) }, zu(x, $, G)), n && h.createElement(RM, { option: n, tickProps: We, value: "".concat(typeof o == "function" ? o($.value, G) : $.value).concat(u || "") }));
  });
  return h.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(A, "-ticks") }, J.length > 0 && h.createElement(Ve, { zIndex: pe.label }, h.createElement("g", { className: "recharts-cartesian-axis-tick-labels recharts-".concat(A, "-tick-labels"), ref: t }, J)), H.length > 0 && h.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(A, "-tick-lines") }, H));
}), BM = h.forwardRef((e2, t) => {
  var { axisLine: r, width: n, height: i, className: a, hide: o, ticks: u, axisType: l } = e2, s = CM(e2, jM), [c, f] = h.useState(""), [d, v] = h.useState(""), p = h.useRef(null);
  h.useImperativeHandle(t, () => ({ getCalculatedWidth: () => {
    var y;
    return _M({ ticks: p.current, label: (y = e2.labelRef) === null || y === void 0 ? void 0 : y.current, labelGapWithTick: 5, tickSize: e2.tickSize, tickMargin: e2.tickMargin });
  } }));
  var m = h.useCallback((y) => {
    if (y) {
      var g = y.getElementsByClassName("recharts-cartesian-axis-tick-value");
      p.current = g;
      var w = g[0];
      if (w) {
        var b = window.getComputedStyle(w), O = b.fontSize, x = b.letterSpacing;
        (O !== c || x !== d) && (f(O), v(x));
      }
    }
  }, [c, d]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : h.createElement(Ve, { zIndex: e2.zIndex }, h.createElement(ke, { className: B("recharts-cartesian-axis", a) }, h.createElement(DM, { x: e2.x, y: e2.y, width: n, height: i, orientation: e2.orientation, mirror: e2.mirror, axisLine: r, otherSvgProps: le(e2) }), h.createElement(zM, { ref: m, axisType: l, events: s, fontSize: c, getTicksConfig: e2, height: e2.height, letterSpacing: d, mirror: e2.mirror, orientation: e2.orientation, padding: e2.padding, stroke: e2.stroke, tick: e2.tick, tickFormatter: e2.tickFormatter, tickLine: e2.tickLine, tickMargin: e2.tickMargin, tickSize: e2.tickSize, tickTextProps: e2.tickTextProps, ticks: u, unit: e2.unit, width: e2.width, x: e2.x, y: e2.y }), h.createElement(qj, { x: e2.x, y: e2.y, width: e2.width, height: e2.height, lowerWidth: e2.width, upperWidth: e2.width }, h.createElement(eC, { label: e2.label, labelRef: e2.labelRef }), e2.children)));
}), Oc = h.forwardRef((e2, t) => {
  var r = me(e2, kt);
  return h.createElement(BM, br({}, r, { ref: t }));
});
Oc.displayName = "CartesianAxis";
var FM = ["x1", "y1", "x2", "y2", "key"], WM = ["offset"], KM = ["xAxisId", "yAxisId"], UM = ["xAxisId", "yAxisId"];
function Yd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ce(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yd(Object(r), true).forEach(function(n) {
      HM(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Yd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function HM(e2, t, r) {
  return (t = qM(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function qM(e2) {
  var t = GM(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GM(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, cr.apply(null, arguments);
}
function da(e2, t) {
  if (e2 == null) return {};
  var r, n, i = YM(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function YM(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var VM = (e2) => {
  var { fill: t } = e2;
  if (!t || t === "none") return null;
  var { fillOpacity: r, x: n, y: i, width: a, height: o, ry: u } = e2;
  return h.createElement("rect", { x: n, y: i, ry: u, width: a, height: o, stroke: "none", fill: t, fillOpacity: r, className: "recharts-cartesian-grid-bg" });
};
function Og(e2) {
  var { option: t, lineItemProps: r } = e2, n;
  if (h.isValidElement(t)) n = h.cloneElement(t, r);
  else if (typeof t == "function") n = t(r);
  else {
    var i, { x1: a, y1: o, x2: u, y2: l, key: s } = r, c = da(r, FM), f = (i = le(c)) !== null && i !== void 0 ? i : {}, { offset: d } = f, v = da(f, WM);
    n = h.createElement("line", cr({}, v, { x1: a, y1: o, x2: u, y2: l, fill: "none", key: s }));
  }
  return n;
}
function XM(e2) {
  var { x: t, width: r, horizontal: n = true, horizontalPoints: i } = e2;
  if (!n || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e2, u = da(e2, KM), l = i.map((s, c) => {
    var f = Ce(Ce({}, u), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return h.createElement(Og, { key: "line-".concat(c), option: n, lineItemProps: f });
  });
  return h.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, l);
}
function ZM(e2) {
  var { y: t, height: r, vertical: n = true, verticalPoints: i } = e2;
  if (!n || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e2, u = da(e2, UM), l = i.map((s, c) => {
    var f = Ce(Ce({}, u), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return h.createElement(Og, { option: n, lineItemProps: f, key: "line-".concat(c) });
  });
  return h.createElement("g", { className: "recharts-cartesian-grid-vertical" }, l);
}
function QM(e2) {
  var { horizontalFill: t, fillOpacity: r, x: n, y: i, width: a, height: o, horizontalPoints: u, horizontal: l = true } = e2;
  if (!l || !t || !t.length || u == null) return null;
  var s = u.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== s[0] && s.unshift(0);
  var c = s.map((f, d) => {
    var v = !s[d + 1], p = v ? i + o - f : s[d + 1] - f;
    if (p <= 0) return null;
    var m = d % t.length;
    return h.createElement("rect", { key: "react-".concat(d), y: f, x: n, height: p, width: a, stroke: "none", fill: t[m], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
  });
  return h.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, c);
}
function JM(e2) {
  var { vertical: t = true, verticalFill: r, fillOpacity: n, x: i, y: a, width: o, height: u, verticalPoints: l } = e2;
  if (!t || !r || !r.length) return null;
  var s = l.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== s[0] && s.unshift(0);
  var c = s.map((f, d) => {
    var v = !s[d + 1], p = v ? i + o - f : s[d + 1] - f;
    if (p <= 0) return null;
    var m = d % r.length;
    return h.createElement("rect", { key: "react-".concat(d), x: f, y: a, width: p, height: u, stroke: "none", fill: r[m], fillOpacity: n, className: "recharts-cartesian-grid-bg" });
  });
  return h.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, c);
}
var eI = (e2, t) => {
  var { xAxis: r, width: n, height: i, offset: a } = e2;
  return Fh(Pc(Ce(Ce(Ce({}, kt), r), {}, { ticks: Wh(r), viewBox: { x: 0, y: 0, width: n, height: i } })), a.left, a.left + a.width, t);
}, tI = (e2, t) => {
  var { yAxis: r, width: n, height: i, offset: a } = e2;
  return Fh(Pc(Ce(Ce(Ce({}, kt), r), {}, { ticks: Wh(r), viewBox: { x: 0, y: 0, width: n, height: i } })), a.top, a.top + a.height, t);
}, rI = { horizontal: true, vertical: true, horizontalPoints: [], verticalPoints: [], stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [], xAxisId: 0, yAxisId: 0, syncWithTicks: false, zIndex: pe.grid };
function nI(e2) {
  var t = Jh(), r = ep(), n = Qh(), i = Ce(Ce({}, me(e2, rI)), {}, { x: N(e2.x) ? e2.x : n.left, y: N(e2.y) ? e2.y : n.top, width: N(e2.width) ? e2.width : n.width, height: N(e2.height) ? e2.height : n.height }), { xAxisId: a, yAxisId: o, x: u, y: l, width: s, height: c, syncWithTicks: f, horizontalValues: d, verticalValues: v } = i, p = Te(), m = I((T) => Uf(T, "xAxis", a, p)), y = I((T) => Uf(T, "yAxis", o, p));
  if (!wt(s) || !wt(c) || !N(u) || !N(l)) return null;
  var g = i.verticalCoordinatesGenerator || eI, w = i.horizontalCoordinatesGenerator || tI, { horizontalPoints: b, verticalPoints: O } = i;
  if ((!b || !b.length) && typeof w == "function") {
    var x = d && d.length, A = w({ yAxis: y ? Ce(Ce({}, y), {}, { ticks: x ? d : y.ticks }) : void 0, width: t ?? s, height: r ?? c, offset: n }, x ? true : f);
    Ri(Array.isArray(A), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof A, "]")), Array.isArray(A) && (b = A);
  }
  if ((!O || !O.length) && typeof g == "function") {
    var S = v && v.length, k = g({ xAxis: m ? Ce(Ce({}, m), {}, { ticks: S ? v : m.ticks }) : void 0, width: t ?? s, height: r ?? c, offset: n }, S ? true : f);
    Ri(Array.isArray(k), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof k, "]")), Array.isArray(k) && (O = k);
  }
  return h.createElement(Ve, { zIndex: i.zIndex }, h.createElement("g", { className: "recharts-cartesian-grid" }, h.createElement(VM, { fill: i.fill, fillOpacity: i.fillOpacity, x: i.x, y: i.y, width: i.width, height: i.height, ry: i.ry }), h.createElement(QM, cr({}, i, { horizontalPoints: b })), h.createElement(JM, cr({}, i, { verticalPoints: O })), h.createElement(XM, cr({}, i, { offset: n, horizontalPoints: b, xAxis: m, yAxis: y })), h.createElement(ZM, cr({}, i, { offset: n, verticalPoints: O, xAxis: m, yAxis: y }))));
}
nI.displayName = "CartesianGrid";
var iI = {}, Ag = Fe({ name: "errorBars", initialState: iI, reducers: { addErrorBar: (e2, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e2[r] || (e2[r] = []), e2[r].push(n);
}, replaceErrorBar: (e2, t) => {
  var { itemId: r, prev: n, next: i } = t.payload;
  e2[r] && (e2[r] = e2[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
}, removeErrorBar: (e2, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e2[r] && (e2[r] = e2[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
} } }), { addErrorBar: UN, replaceErrorBar: HN, removeErrorBar: qN } = Ag.actions, aI = Ag.reducer, oI = ["children"];
function uI(e2, t) {
  if (e2 == null) return {};
  var r, n, i = lI(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function lI(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var cI = { data: [], xAxisId: "xAxis-0", yAxisId: "yAxis-0", dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }), errorBarOffset: 0 }, sI = h.createContext(cI);
function fI(e2) {
  var { children: t } = e2, r = uI(e2, oI);
  return h.createElement(sI.Provider, { value: r }, t);
}
function Sg(e2, t) {
  var r, n, i = I((s) => Ft(s, e2)), a = I((s) => Wt(s, t)), o = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : we.allowDataOverflow, u = (n = a == null ? void 0 : a.allowDataOverflow) !== null && n !== void 0 ? n : xe.allowDataOverflow, l = o || u;
  return { needClip: l, needClipX: o, needClipY: u };
}
function dI(e2) {
  var { xAxisId: t, yAxisId: r, clipPathId: n } = e2, i = bc(), { needClipX: a, needClipY: o, needClip: u } = Sg(t, r);
  if (!u || !i) return null;
  var { x: l, y: s, width: c, height: f } = i;
  return h.createElement("clipPath", { id: "clipPath-".concat(n) }, h.createElement("rect", { x: a ? l : l - c / 2, y: o ? s : s - f / 2, width: a ? c : c * 2, height: o ? f : f * 2 }));
}
var Eg = (e2, t, r, n) => Jm(e2, "xAxis", t, n), _g = (e2, t, r, n) => Qm(e2, "xAxis", t, n), jg = (e2, t, r, n) => Jm(e2, "yAxis", r, n), Cg = (e2, t, r, n) => Qm(e2, "yAxis", r, n), vI = P([U, Eg, jg, _g, Cg], (e2, t, r, n, i) => Lt(e2, "xAxis") ? Dr(t, n, false) : Dr(r, i, false)), hI = (e2, t, r, n, i) => i;
function pI(e2) {
  return e2.type === "line";
}
var mI = P([Tm, hI], (e2, t) => e2.filter(pI).find((r) => r.id === t)), yI = P([U, Eg, jg, _g, Cg, mI, vI, Ml], (e2, t, r, n, i, a, o, u) => {
  var { chartData: l, dataStartIndex: s, dataEndIndex: c } = u;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null || e2 !== "horizontal" && e2 !== "vertical")) {
    var { dataKey: f, data: d } = a, v;
    if (d != null && d.length > 0 ? v = d : v = l == null ? void 0 : l.slice(s, c + 1), v != null) return sD({ layout: e2, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataKey: f, bandSize: o, displayedData: v });
  }
});
function gI(e2) {
  var t = zr(e2), r = 3, n = 2;
  if (t != null) {
    var { r: i, strokeWidth: a } = t, o = Number(i), u = Number(a);
    return (Number.isNaN(o) || o < 0) && (o = r), (Number.isNaN(u) || u < 0) && (u = n), { r: o, strokeWidth: u };
  }
  return { r, strokeWidth: n };
}
var bI = {};
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ni = h;
function wI(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var xI = typeof Object.is == "function" ? Object.is : wI, PI = ni.useSyncExternalStore, OI = ni.useRef, AI = ni.useEffect, SI = ni.useMemo, EI = ni.useDebugValue;
bI.useSyncExternalStoreWithSelector = function(e2, t, r, n, i) {
  var a = OI(null);
  if (a.current === null) {
    var o = { hasValue: false, value: null };
    a.current = o;
  } else o = a.current;
  a = SI(function() {
    function l(v) {
      if (!s) {
        if (s = true, c = v, v = n(v), i !== void 0 && o.hasValue) {
          var p = o.value;
          if (i(p, v)) return f = p;
        }
        return f = v;
      }
      if (p = f, xI(c, v)) return p;
      var m = n(v);
      return i !== void 0 && i(p, m) ? (c = v, p) : (c = v, f = m);
    }
    var s = false, c, f, d = r === void 0 ? null : r;
    return [function() {
      return l(t());
    }, d === null ? void 0 : function() {
      return l(d());
    }];
  }, [t, r, n, i]);
  var u = PI(e2, a[0], a[1]);
  return AI(function() {
    o.hasValue = true, o.value = u;
  }, [u]), EI(u), u;
};
function _I(e2) {
  e2();
}
function jI() {
  let e2 = null, t = null;
  return { clear() {
    e2 = null, t = null;
  }, notify() {
    _I(() => {
      let r = e2;
      for (; r; ) r.callback(), r = r.next;
    });
  }, get() {
    const r = [];
    let n = e2;
    for (; n; ) r.push(n), n = n.next;
    return r;
  }, subscribe(r) {
    let n = true;
    const i = t = { callback: r, next: null, prev: t };
    return i.prev ? i.prev.next = i : e2 = i, function() {
      !n || e2 === null || (n = false, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e2 = i.next);
    };
  } };
}
var Vd = { notify() {
}, get: () => [] };
function CI(e2, t) {
  let r, n = Vd, i = 0, a = false;
  function o(m) {
    c();
    const y = n.subscribe(m);
    let g = false;
    return () => {
      g || (g = true, y(), f());
    };
  }
  function u() {
    n.notify();
  }
  function l() {
    p.onStateChange && p.onStateChange();
  }
  function s() {
    return a;
  }
  function c() {
    i++, r || (r = e2.subscribe(l), n = jI());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Vd);
  }
  function d() {
    a || (a = true, c());
  }
  function v() {
    a && (a = false, f());
  }
  const p = { addNestedSub: o, notifyNestedSubs: u, handleChangeWrapper: l, isSubscribed: s, trySubscribe: d, tryUnsubscribe: v, getListeners: () => n };
  return p;
}
var kI = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", TI = kI(), MI = () => typeof navigator < "u" && navigator.product === "ReactNative", II = MI(), DI = () => TI || II ? h.useLayoutEffect : h.useEffect, NI = DI();
function Xd(e2, t) {
  return e2 === t ? e2 !== 0 || t !== 0 || 1 / e2 === 1 / t : e2 !== e2 && t !== t;
}
function $I(e2, t) {
  if (Xd(e2, t)) return true;
  if (typeof e2 != "object" || e2 === null || typeof t != "object" || t === null) return false;
  const r = Object.keys(e2), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (let i = 0; i < r.length; i++) if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Xd(e2[r[i]], t[r[i]])) return false;
  return true;
}
var LI = Symbol.for("react-redux-context"), RI = typeof globalThis < "u" ? globalThis : {};
function zI() {
  if (!h.createContext) return {};
  const e2 = RI[LI] ?? (RI[LI] = /* @__PURE__ */ new Map());
  let t = e2.get(h.createContext);
  return t || (t = h.createContext(null), e2.set(h.createContext, t)), t;
}
var BI = zI();
function FI(e2) {
  const { children: t, context: r, serverState: n, store: i } = e2, a = h.useMemo(() => {
    const l = CI(i);
    return { store: i, subscription: l, getServerState: n ? () => n : void 0 };
  }, [i, n]), o = h.useMemo(() => i.getState(), [i]);
  NI(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), o !== i.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || BI;
  return h.createElement(u.Provider, { value: a }, t);
}
var WI = FI, KI = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius"]);
function UI(e2, t) {
  return e2 == null && t == null ? true : typeof e2 == "number" && typeof t == "number" ? e2 === t || e2 !== e2 && t !== t : e2 === t;
}
function Ac(e2, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e2), ...Object.keys(t)]);
  for (var n of r) if (KI.has(n)) {
    if (e2[n] == null && t[n] == null) continue;
    if (!$I(e2[n], t[n])) return false;
  } else if (!UI(e2[n], t[n])) return false;
  return true;
}
var HI = ["id"], qI = ["type", "layout", "connectNulls", "needClip", "shape"], GI = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function Mn() {
  return Mn = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Mn.apply(null, arguments);
}
function Zd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vt(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zd(Object(r), true).forEach(function(n) {
      YI(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function YI(e2, t, r) {
  return (t = VI(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function VI(e2) {
  var t = XI(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XI(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Sc(e2, t) {
  if (e2 == null) return {};
  var r, n, i = ZI(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function ZI(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var QI = (e2) => {
  var { dataKey: t, name: r, stroke: n, legendType: i, hide: a } = e2;
  return [{ inactive: a, dataKey: t, type: i, color: n, value: Da(r, t), payload: e2 }];
}, JI = h.memo((e2) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: a, name: o, hide: u, unit: l, tooltipType: s, id: c } = e2, f = { dataDefinedOnItem: r, positions: void 0, settings: { stroke: n, strokeWidth: i, fill: a, dataKey: t, nameKey: void 0, name: Da(o, t), hide: u, type: s, color: n, unit: l, graphicalItemId: c } };
  return h.createElement(sg, { tooltipEntrySettings: f });
}), kg = (e2, t) => "".concat(t, "px ").concat(e2 - t, "px");
function eD(e2, t) {
  for (var r = e2.length % 2 !== 0 ? [...e2, 0] : e2, n = [], i = 0; i < t; ++i) n = [...n, ...r];
  return n;
}
var tD = (e2, t, r) => {
  var n = r.reduce((f, d) => f + d);
  if (!n) return kg(t, e2);
  for (var i = Math.floor(e2 / n), a = e2 % n, o = t - e2, u = [], l = 0, s = 0; l < r.length; s += r[l], ++l) if (s + r[l] > a) {
    u = [...r.slice(0, l), a - s];
    break;
  }
  var c = u.length % 2 === 0 ? [0, o] : [o];
  return [...eD(r, i), ...u, ...c].map((f) => "".concat(f, "px")).join(", ");
};
function rD(e2) {
  var { clipPathId: t, points: r, props: n } = e2, { dot: i, dataKey: a, needClip: o } = n, { id: u } = n, l = Sc(n, HI), s = le(l);
  return h.createElement(vg, { points: r, dot: i, className: "recharts-line-dots", dotClassName: "recharts-line-dot", dataKey: a, baseProps: s, needClip: o, clipPathId: t });
}
function nD(e2) {
  var { showLabels: t, children: r, points: n } = e2, i = h.useMemo(() => n == null ? void 0 : n.map((a) => {
    var o, u, l = { x: (o = a.x) !== null && o !== void 0 ? o : 0, y: (u = a.y) !== null && u !== void 0 ? u : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return vt(vt({}, l), {}, { value: a.value, payload: a.payload, viewBox: l, parentViewBox: void 0, fill: void 0 });
  }), [n]);
  return h.createElement(Gy, { value: t ? i : void 0 }, r);
}
function Qd(e2) {
  var { clipPathId: t, pathRef: r, points: n, strokeDasharray: i, props: a } = e2, { type: o, layout: u, connectNulls: l, needClip: s, shape: c } = a, f = Sc(a, qI), d = vt(vt({}, se(f)), {}, { fill: "none", className: "recharts-line-curve", clipPath: s ? "url(#clipPath-".concat(t, ")") : void 0, points: n, type: o, layout: u, connectNulls: l, strokeDasharray: i ?? a.strokeDasharray });
  return h.createElement(h.Fragment, null, (n == null ? void 0 : n.length) > 1 && h.createElement(Bk, Mn({ shapeType: "curve", option: c }, d, { pathRef: r })), h.createElement(rD, { points: n, clipPathId: t, props: a }));
}
function iD(e2) {
  try {
    return e2 && e2.getTotalLength && e2.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function aD(e2) {
  var { clipPathId: t, props: r, pathRef: n, previousPointsRef: i, longestAnimatedLengthRef: a } = e2, { points: o, strokeDasharray: u, isAnimationActive: l, animationBegin: s, animationDuration: c, animationEasing: f, animateNewValues: d, width: v, height: p, onAnimationEnd: m, onAnimationStart: y } = r, g = i.current, w = qa(o, "recharts-line-"), b = h.useRef(w), [O, x] = h.useState(false), A = !O, S = h.useCallback(() => {
    typeof m == "function" && m(), x(false);
  }, [m]), k = h.useCallback(() => {
    typeof y == "function" && y(), x(true);
  }, [y]), T = iD(n.current), D = h.useRef(0);
  b.current !== w && (D.current = a.current, b.current = w);
  var E = D.current;
  return h.createElement(nD, { points: o, showLabels: A }, r.children, h.createElement(Ha, { animationId: w, begin: s, duration: c, isActive: l, easing: f, onAnimationEnd: S, onAnimationStart: k, key: w }, (C) => {
    var R = Oe(E, T + E, C), L = Math.min(R, T), H;
    if (l) if (u) {
      var J = "".concat(u).split(/[,\s]+/gim).map(($) => parseFloat($));
      H = tD(L, T, J);
    } else H = kg(T, L);
    else H = u == null ? void 0 : String(u);
    if (C > 0 && T > 0 && (i.current = o, a.current = Math.max(a.current, L)), g) {
      var F = g.length / o.length, G = C === 1 ? o : o.map(($, De) => {
        var We = Math.floor(De * F);
        if (g[We]) {
          var Ne = g[We];
          return vt(vt({}, $), {}, { x: Oe(Ne.x, $.x, C), y: Oe(Ne.y, $.y, C) });
        }
        return d ? vt(vt({}, $), {}, { x: Oe(v * 2, $.x, C), y: Oe(p / 2, $.y, C) }) : vt(vt({}, $), {}, { x: $.x, y: $.y });
      });
      return i.current = G, h.createElement(Qd, { props: r, points: G, clipPathId: t, pathRef: n, strokeDasharray: H });
    }
    return h.createElement(Qd, { props: r, points: o, clipPathId: t, pathRef: n, strokeDasharray: H });
  }), h.createElement(Vy, { label: r.label }));
}
function oD(e2) {
  var { clipPathId: t, props: r } = e2, n = h.useRef(null), i = h.useRef(0), a = h.useRef(null);
  return h.createElement(aD, { props: r, clipPathId: t, previousPointsRef: n, longestAnimatedLengthRef: i, pathRef: a });
}
var uD = (e2, t) => {
  var r, n;
  return { x: (r = e2.x) !== null && r !== void 0 ? r : void 0, y: (n = e2.y) !== null && n !== void 0 ? n : void 0, value: e2.value, errorVal: ue(e2.payload, t) };
};
class lD extends h.Component {
  render() {
    var { hide: t, dot: r, points: n, className: i, xAxisId: a, yAxisId: o, top: u, left: l, width: s, height: c, id: f, needClip: d, zIndex: v } = this.props;
    if (t) return null;
    var p = B("recharts-line", i), m = f, { r: y, strokeWidth: g } = gI(r), w = lg(r), b = y * 2 + g, O = d ? "url(#clipPath-".concat(w ? "" : "dots-").concat(m, ")") : void 0;
    return h.createElement(Ve, { zIndex: v }, h.createElement(ke, { className: p }, d && h.createElement("defs", null, h.createElement(dI, { clipPathId: m, xAxisId: a, yAxisId: o }), !w && h.createElement("clipPath", { id: "clipPath-dots-".concat(m) }, h.createElement("rect", { x: l - b / 2, y: u - b / 2, width: s + b, height: c + b }))), h.createElement(fI, { xAxisId: a, yAxisId: o, data: n, dataPointFormatter: uD, errorBarOffset: 0 }, h.createElement(oD, { props: this.props, clipPathId: m }))), h.createElement(pg, { activeDot: this.props.activeDot, points: n, mainColor: this.props.stroke, itemDataKey: this.props.dataKey, clipPath: O }));
  }
}
var Tg = { activeDot: true, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: true, fill: "#fff", hide: false, isAnimationActive: "auto", label: false, legendType: "line", stroke: "#3182bd", strokeWidth: 1, xAxisId: 0, yAxisId: 0, zIndex: pe.line, type: "linear" };
function cD(e2) {
  var t = me(e2, Tg), { activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: a, animationEasing: o, connectNulls: u, dot: l, hide: s, isAnimationActive: c, label: f, legendType: d, xAxisId: v, yAxisId: p, id: m } = t, y = Sc(t, GI), { needClip: g } = Sg(v, p), w = bc(), b = Bn(), O = Te(), x = I((D) => yI(D, v, p, O, m));
  if (b !== "horizontal" && b !== "vertical" || x == null || w == null) return null;
  var { height: A, width: S, x: k, y: T } = w;
  return h.createElement(lD, Mn({}, y, { id: m, connectNulls: u, dot: l, activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: a, animationEasing: o, isAnimationActive: c, hide: s, label: f, legendType: d, xAxisId: v, yAxisId: p, points: x, layout: b, height: A, width: S, left: k, top: T, needClip: g }));
}
function sD(e2) {
  var { layout: t, xAxis: r, yAxis: n, xAxisTicks: i, yAxisTicks: a, dataKey: o, bandSize: u, displayedData: l } = e2;
  return l.map((s, c) => {
    var f = ue(s, o);
    if (t === "horizontal") {
      var d = ns({ axis: r, ticks: i, bandSize: u, entry: s, index: c }), v = fe(f) ? null : n.scale(f);
      return { x: d, y: v, value: f, payload: s };
    }
    var p = fe(f) ? null : r.scale(f), m = ns({ axis: n, ticks: a, bandSize: u, entry: s, index: c });
    return p == null || m == null ? null : { x: p, y: m, value: f, payload: s };
  }).filter(Boolean);
}
function fD(e2) {
  var t = me(e2, Tg), r = Te();
  return h.createElement(fg, { id: t.id, type: "line" }, (n) => h.createElement(h.Fragment, null, h.createElement(Fk, { legendPayload: QI(t) }), h.createElement(JI, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), h.createElement(tT, { type: "line", id: n, data: t.data, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, dataKey: t.dataKey, hide: t.hide, isPanorama: r }), h.createElement(cD, Mn({}, t, { id: n }))));
}
var dD = h.memo(fD, Ac);
dD.displayName = "Line";
var vD = ["domain", "range"], hD = ["domain", "range"];
function Jd(e2, t) {
  if (e2 == null) return {};
  var r, n, i = pD(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function pD(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function ev(e2, t) {
  return e2 === t ? true : Array.isArray(e2) && e2.length === 2 && Array.isArray(t) && t.length === 2 ? e2[0] === t[0] && e2[1] === t[1] : false;
}
function Mg(e2, t) {
  if (e2 === t) return true;
  var { domain: r, range: n } = e2, i = Jd(e2, vD), { domain: a, range: o } = t, u = Jd(t, hD);
  return !ev(r, a) || !ev(n, o) ? false : Ac(i, u);
}
var mD = ["dangerouslySetInnerHTML", "ticks", "scale"], yD = ["id", "scale"];
function ju() {
  return ju = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, ju.apply(null, arguments);
}
function tv(e2, t) {
  if (e2 == null) return {};
  var r, n, i = gD(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function gD(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function bD(e2) {
  var t = ie(), r = h.useRef(null);
  return h.useLayoutEffect(() => {
    r.current === null ? t(pT(e2)) : r.current !== e2 && t(mT({ prev: r.current, next: e2 })), r.current = e2;
  }, [e2, t]), h.useLayoutEffect(() => () => {
    r.current && (t(yT(r.current)), r.current = null);
  }, [t]), null;
}
var wD = (e2) => {
  var { xAxisId: t, className: r } = e2, n = I(Uh), i = Te(), a = "xAxis", o = I((g) => Xm(g, a, t, i)), u = I((g) => FS(g, t)), l = I((g) => GS(g, t)), s = I((g) => jm(g, t));
  if (u == null || l == null || s == null) return null;
  var { dangerouslySetInnerHTML: c, ticks: f, scale: d } = e2, v = tv(e2, mD), { id: p, scale: m } = s, y = tv(s, yD);
  return h.createElement(Oc, ju({}, v, y, { x: l.x, y: l.y, width: u.width, height: u.height, className: B("recharts-".concat(a, " ").concat(a), r), viewBox: n, ticks: o, axisType: a }));
}, xD = { allowDataOverflow: we.allowDataOverflow, allowDecimals: we.allowDecimals, allowDuplicatedCategory: we.allowDuplicatedCategory, angle: we.angle, axisLine: kt.axisLine, height: we.height, hide: false, includeHidden: we.includeHidden, interval: we.interval, minTickGap: we.minTickGap, mirror: we.mirror, orientation: we.orientation, padding: we.padding, reversed: we.reversed, scale: we.scale, tick: we.tick, tickCount: we.tickCount, tickLine: kt.tickLine, tickSize: kt.tickSize, type: we.type, xAxisId: 0 }, PD = (e2) => {
  var t = me(e2, xD);
  return h.createElement(h.Fragment, null, h.createElement(bD, { allowDataOverflow: t.allowDataOverflow, allowDecimals: t.allowDecimals, allowDuplicatedCategory: t.allowDuplicatedCategory, angle: t.angle, dataKey: t.dataKey, domain: t.domain, height: t.height, hide: t.hide, id: t.xAxisId, includeHidden: t.includeHidden, interval: t.interval, minTickGap: t.minTickGap, mirror: t.mirror, name: t.name, orientation: t.orientation, padding: t.padding, reversed: t.reversed, scale: t.scale, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit }), h.createElement(wD, t));
}, OD = h.memo(PD, Mg);
OD.displayName = "XAxis";
var AD = ["dangerouslySetInnerHTML", "ticks", "scale"], SD = ["id", "scale"];
function Cu() {
  return Cu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Cu.apply(null, arguments);
}
function rv(e2, t) {
  if (e2 == null) return {};
  var r, n, i = ED(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function ED(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function _D(e2) {
  var t = ie(), r = h.useRef(null);
  return h.useLayoutEffect(() => {
    r.current === null ? t(gT(e2)) : r.current !== e2 && t(bT({ prev: r.current, next: e2 })), r.current = e2;
  }, [e2, t]), h.useLayoutEffect(() => () => {
    r.current && (t(wT(r.current)), r.current = null);
  }, [t]), null;
}
var jD = (e2) => {
  var { yAxisId: t, className: r, width: n, label: i } = e2, a = h.useRef(null), o = h.useRef(null), u = I(Uh), l = Te(), s = ie(), c = "yAxis", f = I((A) => XS(A, t)), d = I((A) => VS(A, t)), v = I((A) => Xm(A, c, t, l)), p = I((A) => Cm(A, t));
  if (h.useLayoutEffect(() => {
    if (!(n !== "auto" || !f || pc(i) || h.isValidElement(i) || p == null)) {
      var A = a.current;
      if (A) {
        var S = A.getCalculatedWidth();
        Math.round(f.width) !== Math.round(S) && s(xT({ id: t, width: S }));
      }
    }
  }, [v, f, s, i, t, n, p]), f == null || d == null || p == null) return null;
  var { dangerouslySetInnerHTML: m, ticks: y, scale: g } = e2, w = rv(e2, AD), { id: b, scale: O } = p, x = rv(p, SD);
  return h.createElement(Oc, Cu({}, w, x, { ref: a, labelRef: o, x: d.x, y: d.y, tickTextProps: n === "auto" ? { width: void 0 } : { width: n }, width: f.width, height: f.height, className: B("recharts-".concat(c, " ").concat(c), r), viewBox: u, ticks: v, axisType: c }));
}, CD = { allowDataOverflow: xe.allowDataOverflow, allowDecimals: xe.allowDecimals, allowDuplicatedCategory: xe.allowDuplicatedCategory, angle: xe.angle, axisLine: kt.axisLine, hide: false, includeHidden: xe.includeHidden, interval: xe.interval, minTickGap: xe.minTickGap, mirror: xe.mirror, orientation: xe.orientation, padding: xe.padding, reversed: xe.reversed, scale: xe.scale, tick: xe.tick, tickCount: xe.tickCount, tickLine: kt.tickLine, tickSize: kt.tickSize, type: xe.type, width: xe.width, yAxisId: 0 }, kD = (e2) => {
  var t = me(e2, CD);
  return h.createElement(h.Fragment, null, h.createElement(_D, { interval: t.interval, id: t.yAxisId, scale: t.scale, type: t.type, domain: t.domain, allowDataOverflow: t.allowDataOverflow, dataKey: t.dataKey, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDecimals: t.allowDecimals, tickCount: t.tickCount, padding: t.padding, includeHidden: t.includeHidden, reversed: t.reversed, ticks: t.ticks, width: t.width, orientation: t.orientation, mirror: t.mirror, hide: t.hide, unit: t.unit, name: t.name, angle: t.angle, minTickGap: t.minTickGap, tick: t.tick, tickFormatter: t.tickFormatter }), h.createElement(jD, t));
}, TD = h.memo(kD, Mg);
TD.displayName = "YAxis";
var MD = (e2, t) => t, Ec = P([MD, U, Ur, ge, hy, Kt, c_, _e], m_), _c = (e2) => {
  var t = e2.currentTarget.getBoundingClientRect(), r = t.width / e2.currentTarget.offsetWidth, n = t.height / e2.currentTarget.offsetHeight;
  return { chartX: Math.round((e2.clientX - t.left) / r), chartY: Math.round((e2.clientY - t.top) / n) };
}, Ig = rt("mouseClick"), Dg = Rn();
Dg.startListening({ actionCreator: Ig, effect: (e2, t) => {
  var r = e2.payload, n = Ec(t.getState(), _c(r));
  (n == null ? void 0 : n.activeIndex) != null && t.dispatch(uE({ activeIndex: n.activeIndex, activeDataKey: void 0, activeCoordinate: n.activeCoordinate }));
} });
var ku = rt("mouseMove"), Ng = Rn(), bi = null;
Ng.startListening({ actionCreator: ku, effect: (e2, t) => {
  var r = e2.payload;
  bi !== null && cancelAnimationFrame(bi);
  var n = _c(r);
  bi = requestAnimationFrame(() => {
    var i = t.getState(), a = ac(i, i.tooltip.settings.shared);
    if (a === "axis") {
      var o = Ec(i, n);
      (o == null ? void 0 : o.activeIndex) != null ? t.dispatch(oy({ activeIndex: o.activeIndex, activeDataKey: void 0, activeCoordinate: o.activeCoordinate })) : t.dispatch(ay());
    }
    bi = null;
  });
} });
function ID(e2, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e2 === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var nv = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, barSize: void 0, className: void 0, maxBarSize: void 0, stackOffset: "none", syncId: void 0, syncMethod: "index", baseValue: void 0, reverseStackOrder: false }, $g = Fe({ name: "rootProps", initialState: nv, reducers: { updateOptions: (e2, t) => {
  var r;
  e2.accessibilityLayer = t.payload.accessibilityLayer, e2.barCategoryGap = t.payload.barCategoryGap, e2.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : nv.barGap, e2.barSize = t.payload.barSize, e2.maxBarSize = t.payload.maxBarSize, e2.stackOffset = t.payload.stackOffset, e2.syncId = t.payload.syncId, e2.syncMethod = t.payload.syncMethod, e2.className = t.payload.className, e2.baseValue = t.payload.baseValue, e2.reverseStackOrder = t.payload.reverseStackOrder;
} } }), DD = $g.reducer, { updateOptions: ND } = $g.actions, Lg = Fe({ name: "polarOptions", initialState: null, reducers: { updatePolarOptions: (e2, t) => t.payload } }), { updatePolarOptions: $D } = Lg.actions, LD = Lg.reducer, Rg = rt("keyDown"), zg = rt("focus"), jc = Rn();
jc.startListening({ actionCreator: Rg, effect: (e2, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip, a = e2.payload;
    if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
      var o = oc(i, Xr(r), Xn(r), ei(r)), u = o == null ? -1 : Number(o);
      if (!(!Number.isFinite(u) || u < 0)) {
        var l = Kt(r);
        if (a === "Enter") {
          var s = oa(r, "axis", "hover", String(i.index));
          t.dispatch(Pu({ active: !i.active, activeIndex: i.index, activeCoordinate: s }));
          return;
        }
        var c = QS(r), f = c === "left-to-right" ? 1 : -1, d = a === "ArrowRight" ? 1 : -1, v = u + d * f;
        if (!(l == null || v >= l.length || v < 0)) {
          var p = oa(r, "axis", "hover", String(v));
          t.dispatch(Pu({ active: true, activeIndex: v.toString(), activeCoordinate: p }));
        }
      }
    }
  }
} });
jc.startListening({ actionCreator: zg, effect: (e2, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    if (!i.active && i.index == null) {
      var a = "0", o = oa(r, "axis", "hover", String(a));
      t.dispatch(Pu({ active: true, activeIndex: a, activeCoordinate: o }));
    }
  }
} });
var Je = rt("externalEvent"), Bg = Rn(), No = /* @__PURE__ */ new Map();
Bg.startListening({ actionCreator: Je, effect: (e2, t) => {
  var { handler: r, reactEvent: n } = e2.payload;
  if (r != null) {
    n.persist();
    var i = n.type, a = No.get(i);
    a !== void 0 && cancelAnimationFrame(a);
    var o = requestAnimationFrame(() => {
      try {
        var u = t.getState(), l = { activeCoordinate: GE(u), activeDataKey: HE(u), activeIndex: En(u), activeLabel: yy(u), activeTooltipIndex: En(u), isTooltipActive: YE(u) };
        r(l, n);
      } finally {
        No.delete(i);
      }
    });
    No.set(i, o);
  }
} });
var RD = P([Yr], (e2) => e2.tooltipItemPayloads), zD = P([RD, Jn, (e2, t) => t, (e2, t, r) => r], (e2, t, r, n) => {
  var i = e2.find((u) => u.settings.graphicalItemId === n);
  if (i != null) {
    var { positions: a } = i;
    if (a != null) {
      var o = t(a, r);
      return o;
    }
  }
}), Fg = rt("touchMove"), Wg = Rn();
Wg.startListening({ actionCreator: Fg, effect: (e2, t) => {
  var r = e2.payload;
  if (!(r.touches == null || r.touches.length === 0)) {
    var n = t.getState(), i = ac(n, n.tooltip.settings.shared);
    if (i === "axis") {
      var a = r.touches[0];
      if (a == null) return;
      var o = Ec(n, _c({ clientX: a.clientX, clientY: a.clientY, currentTarget: r.currentTarget }));
      (o == null ? void 0 : o.activeIndex) != null && t.dispatch(oy({ activeIndex: o.activeIndex, activeDataKey: void 0, activeCoordinate: o.activeCoordinate }));
    } else if (i === "item") {
      var u, l = r.touches[0];
      if (document.elementFromPoint == null || l == null) return;
      var s = document.elementFromPoint(l.clientX, l.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(nx), f = (u = s.getAttribute(ix)) !== null && u !== void 0 ? u : void 0, d = Vr(n).find((m) => m.id === f);
      if (c == null || d == null || f == null) return;
      var { dataKey: v } = d, p = zD(n, c, f);
      t.dispatch(oE({ activeDataKey: v, activeIndex: c, activeCoordinate: p, activeGraphicalItemId: f }));
    }
  }
} });
var BD = dh({ brush: uM, cartesianAxis: PT, chartData: q_, errorBars: aI, graphicalItems: Jk, layout: Fw, legend: Wx, options: F_, polarAxis: UC, polarOptions: LD, referenceElements: hM, rootProps: DD, tooltip: lE, zIndex: k_ }), FD = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return dw({ reducer: BD, preloadedState: t, middleware: (n) => {
    var i;
    return n({ serializableCheck: false, immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "") }).concat([Dg.middleware, Ng.middleware, jc.middleware, Bg.middleware, Wg.middleware]);
  }, enhancers: (n) => {
    var i = n;
    return typeof n == "function" && (i = n()), i.concat(_h({ type: "raf" }));
  }, devTools: { serialize: { replacer: ID }, name: "recharts-".concat(r) } });
};
function Kg(e2) {
  var { preloadedState: t, children: r, reduxStoreName: n } = e2, i = Te(), a = h.useRef(null);
  if (i) return r;
  a.current == null && (a.current = FD(t, n));
  var o = Yu;
  return h.createElement(WI, { context: o, store: a.current }, r);
}
function WD(e2) {
  var { layout: t, margin: r } = e2, n = ie(), i = Te();
  return h.useEffect(() => {
    i || (n(Rw(t)), n(Lw(r)));
  }, [n, i, t, r]), null;
}
var Ug = h.memo(WD, Ac);
function Hg(e2) {
  var t = ie();
  return h.useEffect(() => {
    t(ND(e2));
  }, [t, e2]), null;
}
function iv(e2) {
  var { zIndex: t, isPanorama: r } = e2, n = h.useRef(null), i = ie();
  return h.useLayoutEffect(() => (n.current && i(j_({ zIndex: t, element: n.current, isPanorama: r })), () => {
    i(C_({ zIndex: t, isPanorama: r }));
  }), [i, t, r]), h.createElement("g", { tabIndex: -1, ref: n });
}
function av(e2) {
  var { children: t, isPanorama: r } = e2, n = I(g_);
  if (!n || n.length === 0) return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return h.createElement(h.Fragment, null, i.map((o) => h.createElement(iv, { key: o, zIndex: o, isPanorama: r })), t, a.map((o) => h.createElement(iv, { key: o, zIndex: o, isPanorama: r })));
}
var KD = ["children"];
function UD(e2, t) {
  if (e2 == null) return {};
  var r, n, i = HD(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function HD(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function va() {
  return va = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, va.apply(null, arguments);
}
var qD = { width: "100%", height: "100%", display: "block" }, GD = h.forwardRef((e2, t) => {
  var r = Jh(), n = ep(), i = fp();
  if (!wt(r) || !wt(n)) return null;
  var { children: a, otherAttributes: o, title: u, desc: l } = e2, s, c;
  return o != null && (typeof o.tabIndex == "number" ? s = o.tabIndex : s = i ? 0 : void 0, typeof o.role == "string" ? c = o.role : c = i ? "application" : void 0), h.createElement(hv, va({}, o, { title: u, desc: l, role: c, tabIndex: s, width: r, height: n, style: qD, ref: t }), a);
}), YD = (e2) => {
  var { children: t } = e2, r = I(Ra);
  if (!r) return null;
  var { width: n, height: i, y: a, x: o } = r;
  return h.createElement(hv, { width: n, height: i, x: o, y: a }, t);
}, ov = h.forwardRef((e2, t) => {
  var { children: r } = e2, n = UD(e2, KD), i = Te();
  return i ? h.createElement(YD, null, h.createElement(av, { isPanorama: true }, r)) : h.createElement(GD, va({ ref: t }, n), h.createElement(av, { isPanorama: false }, r));
});
function VD() {
  var e2 = ie(), [t, r] = h.useState(null), n = I(rx);
  return h.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      ve(a) && a !== n && e2(Bw(a));
    }
  }, [t, e2, n]), r;
}
function uv(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function XD(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uv(Object(r), true).forEach(function(n) {
      ZD(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : uv(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function ZD(e2, t, r) {
  return (t = QD(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function QD(e2) {
  var t = JD(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JD(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, wr.apply(null, arguments);
}
var eN = () => (tj(), null);
function ha(e2) {
  if (typeof e2 == "number") return e2;
  if (typeof e2 == "string") {
    var t = parseFloat(e2);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var tN = h.forwardRef((e2, t) => {
  var r, n, i = h.useRef(null), [a, o] = h.useState({ containerWidth: ha((r = e2.style) === null || r === void 0 ? void 0 : r.width), containerHeight: ha((n = e2.style) === null || n === void 0 ? void 0 : n.height) }), u = h.useCallback((s, c) => {
    o((f) => {
      var d = Math.round(s), v = Math.round(c);
      return f.containerWidth === d && f.containerHeight === v ? f : { containerWidth: d, containerHeight: v };
    });
  }, []), l = h.useCallback((s) => {
    if (typeof t == "function" && t(s), s != null && typeof ResizeObserver < "u") {
      var { width: c, height: f } = s.getBoundingClientRect();
      u(c, f);
      var d = (p) => {
        var { width: m, height: y } = p[0].contentRect;
        u(m, y);
      }, v = new ResizeObserver(d);
      v.observe(s), i.current = v;
    }
  }, [t, u]);
  return h.useEffect(() => () => {
    var s = i.current;
    s == null ? void 0 : s.disconnect();
  }, [u]), h.createElement(h.Fragment, null, h.createElement(Ba, { width: a.containerWidth, height: a.containerHeight }), h.createElement("div", wr({ ref: l }, e2)));
}), rN = h.forwardRef((e2, t) => {
  var { width: r, height: n } = e2, [i, a] = h.useState({ containerWidth: ha(r), containerHeight: ha(n) }), o = h.useCallback((l, s) => {
    a((c) => {
      var f = Math.round(l), d = Math.round(s);
      return c.containerWidth === f && c.containerHeight === d ? c : { containerWidth: f, containerHeight: d };
    });
  }, []), u = h.useCallback((l) => {
    if (typeof t == "function" && t(l), l != null) {
      var { width: s, height: c } = l.getBoundingClientRect();
      o(s, c);
    }
  }, [t, o]);
  return h.createElement(h.Fragment, null, h.createElement(Ba, { width: i.containerWidth, height: i.containerHeight }), h.createElement("div", wr({ ref: u }, e2)));
}), nN = h.forwardRef((e2, t) => {
  var { width: r, height: n } = e2;
  return h.createElement(h.Fragment, null, h.createElement(Ba, { width: r, height: n }), h.createElement("div", wr({ ref: t }, e2)));
}), iN = h.forwardRef((e2, t) => {
  var { width: r, height: n } = e2;
  return Tt(r) || Tt(n) ? h.createElement(rN, wr({}, e2, { ref: t })) : h.createElement(nN, wr({}, e2, { ref: t }));
});
function aN(e2) {
  return e2 === true ? tN : iN;
}
var oN = h.forwardRef((e2, t) => {
  var { children: r, className: n, height: i, onClick: a, onContextMenu: o, onDoubleClick: u, onMouseDown: l, onMouseEnter: s, onMouseLeave: c, onMouseMove: f, onMouseUp: d, onTouchEnd: v, onTouchMove: p, onTouchStart: m, style: y, width: g, responsive: w, dispatchTouchEvents: b = true } = e2, O = h.useRef(null), x = ie(), [A, S] = h.useState(null), [k, T] = h.useState(null), D = VD(), E = al(), C = (E == null ? void 0 : E.width) > 0 ? E.width : g, R = (E == null ? void 0 : E.height) > 0 ? E.height : i, L = h.useCallback((_) => {
    D(_), typeof t == "function" && t(_), S(_), T(_), _ != null && (O.current = _);
  }, [D, t, S, T]), H = h.useCallback((_) => {
    x(Ig(_)), x(Je({ handler: a, reactEvent: _ }));
  }, [x, a]), J = h.useCallback((_) => {
    x(ku(_)), x(Je({ handler: s, reactEvent: _ }));
  }, [x, s]), F = h.useCallback((_) => {
    x(ay()), x(Je({ handler: c, reactEvent: _ }));
  }, [x, c]), G = h.useCallback((_) => {
    x(ku(_)), x(Je({ handler: f, reactEvent: _ }));
  }, [x, f]), $ = h.useCallback(() => {
    x(zg());
  }, [x]), De = h.useCallback((_) => {
    x(Rg(_.key));
  }, [x]), We = h.useCallback((_) => {
    x(Je({ handler: o, reactEvent: _ }));
  }, [x, o]), Ne = h.useCallback((_) => {
    x(Je({ handler: u, reactEvent: _ }));
  }, [x, u]), Ot = h.useCallback((_) => {
    x(Je({ handler: l, reactEvent: _ }));
  }, [x, l]), Xe = h.useCallback((_) => {
    x(Je({ handler: d, reactEvent: _ }));
  }, [x, d]), tr = h.useCallback((_) => {
    x(Je({ handler: m, reactEvent: _ }));
  }, [x, m]), Jr = h.useCallback((_) => {
    b && x(Fg(_)), x(Je({ handler: p, reactEvent: _ }));
  }, [x, b, p]), $e = h.useCallback((_) => {
    x(Je({ handler: v, reactEvent: _ }));
  }, [x, v]), fo = aN(w);
  return h.createElement(Ay.Provider, { value: A }, h.createElement(a0.Provider, { value: k }, h.createElement(fo, { width: C ?? (y == null ? void 0 : y.width), height: R ?? (y == null ? void 0 : y.height), className: B("recharts-wrapper", n), style: XD({ position: "relative", cursor: "default", width: C, height: R }, y), onClick: H, onContextMenu: We, onDoubleClick: Ne, onFocus: $, onKeyDown: De, onMouseDown: Ot, onMouseEnter: J, onMouseLeave: F, onMouseMove: G, onMouseUp: Xe, onTouchEnd: $e, onTouchMove: Jr, onTouchStart: tr, ref: L }, h.createElement(eN, null), r)));
}), uN = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function lN(e2, t) {
  if (e2 == null) return {};
  var r, n, i = cN(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function cN(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var qg = h.forwardRef((e2, t) => {
  var { width: r, height: n, responsive: i, children: a, className: o, style: u, compact: l, title: s, desc: c } = e2, f = lN(e2, uN), d = le(f);
  return l ? h.createElement(h.Fragment, null, h.createElement(Ba, { width: r, height: n }), h.createElement(ov, { otherAttributes: d, title: s, desc: c }, a)) : h.createElement(oN, { className: o, style: u, width: r, height: n, responsive: i ?? false, onClick: e2.onClick, onMouseLeave: e2.onMouseLeave, onMouseEnter: e2.onMouseEnter, onMouseMove: e2.onMouseMove, onMouseDown: e2.onMouseDown, onMouseUp: e2.onMouseUp, onContextMenu: e2.onContextMenu, onDoubleClick: e2.onDoubleClick, onTouchStart: e2.onTouchStart, onTouchMove: e2.onTouchMove, onTouchEnd: e2.onTouchEnd }, h.createElement(ov, { otherAttributes: d, title: s, desc: c, ref: t }, h.createElement(mM, null, a)));
});
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Tu.apply(null, arguments);
}
var sN = { top: 5, right: 5, bottom: 5, left: 5 }, fN = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, layout: "horizontal", margin: sN, responsive: false, reverseStackOrder: false, stackOffset: "none", syncMethod: "index" }, dN = h.forwardRef(function(t, r) {
  var n, i = me(t.categoricalChartProps, fN), { chartName: a, defaultTooltipEventType: o, validateTooltipEventTypes: u, tooltipPayloadSearcher: l, categoricalChartProps: s } = t, c = { chartName: a, defaultTooltipEventType: o, validateTooltipEventTypes: u, tooltipPayloadSearcher: l, eventEmitter: void 0 };
  return h.createElement(Kg, { preloadedState: { options: c }, reduxStoreName: (n = s.id) !== null && n !== void 0 ? n : a }, h.createElement(bg, { chartData: s.data }), h.createElement(Ug, { layout: i.layout, margin: i.margin }), h.createElement(Hg, { baseValue: i.baseValue, accessibilityLayer: i.accessibilityLayer, barCategoryGap: i.barCategoryGap, maxBarSize: i.maxBarSize, stackOffset: i.stackOffset, barGap: i.barGap, barSize: i.barSize, syncId: i.syncId, syncMethod: i.syncMethod, className: i.className, reverseStackOrder: i.reverseStackOrder }), h.createElement(qg, Tu({}, i, { ref: r })));
}), vN = ["axis"], GN = h.forwardRef((e2, t) => h.createElement(dN, { chartName: "LineChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: vN, tooltipPayloadSearcher: Ey, categoricalChartProps: e2, ref: t }));
function hN(e2) {
  var t = ie();
  return h.useEffect(() => {
    t($D(e2));
  }, [t, e2]), null;
}
var pN = ["layout"];
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Mu.apply(null, arguments);
}
function mN(e2, t) {
  if (e2 == null) return {};
  var r, n, i = yN(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function yN(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var gN = { top: 5, right: 5, bottom: 5, left: 5 }, Gg = { accessibilityLayer: true, stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: gN, reverseStackOrder: false, syncMethod: "index", layout: "radial", responsive: false, cx: "50%", cy: "50%", innerRadius: 0, outerRadius: "80%" }, bN = h.forwardRef(function(t, r) {
  var n, i = me(t.categoricalChartProps, Gg), { layout: a } = i, o = mN(i, pN), { chartName: u, defaultTooltipEventType: l, validateTooltipEventTypes: s, tooltipPayloadSearcher: c } = t, f = { chartName: u, defaultTooltipEventType: l, validateTooltipEventTypes: s, tooltipPayloadSearcher: c, eventEmitter: void 0 };
  return h.createElement(Kg, { preloadedState: { options: f }, reduxStoreName: (n = i.id) !== null && n !== void 0 ? n : u }, h.createElement(bg, { chartData: i.data }), h.createElement(Ug, { layout: a, margin: i.margin }), h.createElement(Hg, { baseValue: void 0, accessibilityLayer: i.accessibilityLayer, barCategoryGap: i.barCategoryGap, maxBarSize: i.maxBarSize, stackOffset: i.stackOffset, barGap: i.barGap, barSize: i.barSize, syncId: i.syncId, syncMethod: i.syncMethod, className: i.className, reverseStackOrder: i.reverseStackOrder }), h.createElement(hN, { cx: i.cx, cy: i.cy, startAngle: i.startAngle, endAngle: i.endAngle, innerRadius: i.innerRadius, outerRadius: i.outerRadius }), h.createElement(qg, Mu({}, o, { ref: r })));
});
function lv(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cv(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(r), true).forEach(function(n) {
      wN(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function wN(e2, t, r) {
  return (t = xN(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function xN(e2) {
  var t = PN(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function PN(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var ON = ["axis"], AN = cv(cv({}, Gg), {}, { layout: "centric", startAngle: 90, endAngle: -270 }), YN = h.forwardRef((e2, t) => {
  var r = me(e2, AN);
  return h.createElement(bN, { chartName: "RadarChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: ON, tooltipPayloadSearcher: Ey, categoricalChartProps: r, ref: t });
});
export {
  nI as C,
  GN as L,
  DC as P,
  _N as R,
  IN as T,
  OD as X,
  TD as Y,
  YN as a,
  Ok as b,
  ok as c,
  oM as d,
  dD as e
};
