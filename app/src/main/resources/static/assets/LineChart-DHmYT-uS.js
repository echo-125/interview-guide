var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as h, g as Ht, a as fd, h as Ny } from "./react-vendor-ek4qDQiW.js";
function dd(e2) {
  var t, r, n = "";
  if (typeof e2 == "string" || typeof e2 == "number") n += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) {
    var i = e2.length;
    for (t = 0; t < i; t++) e2[t] && (r = dd(e2[t])) && (n && (n += " "), n += r);
  } else for (r in e2) e2[r] && (n && (n += " "), n += r);
  return n;
}
function Y() {
  for (var e2, t, r = 0, n = "", i = arguments.length; r < i; r++) (e2 = arguments[r]) && (t = dd(e2)) && (n && (n += " "), n += t);
  return n;
}
var $y = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function iu(e2) {
  if (typeof e2 != "string") return false;
  var t = $y;
  return t.includes(e2);
}
var Ly = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], Ry = new Set(Ly);
function vd(e2) {
  return typeof e2 != "string" ? false : Ry.has(e2);
}
function hd(e2) {
  return typeof e2 == "string" && e2.startsWith("data-");
}
function ft(e2) {
  if (typeof e2 != "object" || e2 === null) return {};
  var t = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && (vd(r) || hd(r)) && (t[r] = e2[r]);
  return t;
}
function qi(e2) {
  if (e2 == null) return null;
  if (h.isValidElement(e2) && typeof e2.props == "object" && e2.props !== null) {
    var t = e2.props;
    return ft(t);
  }
  return typeof e2 == "object" && !Array.isArray(e2) ? ft(e2) : null;
}
function _e(e2) {
  var t = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && (vd(r) || hd(r) || iu(r)) && (t[r] = e2[r]);
  return t;
}
function zy(e2) {
  return e2 == null ? null : h.isValidElement(e2) ? _e(e2.props) : typeof e2 == "object" && !Array.isArray(e2) ? _e(e2) : null;
}
var By = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, uo.apply(null, arguments);
}
function Fy(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Wy(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Wy(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var pd = h.forwardRef((e2, t) => {
  var { children: r, width: n, height: i, viewBox: a, className: o, style: u, title: l, desc: s } = e2, c = Fy(e2, By), f = a || { width: n, height: i, x: 0, y: 0 }, d = Y("recharts-surface", o);
  return h.createElement("svg", uo({}, _e(c), { className: d, width: n, height: i, style: u, viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height), ref: t }), h.createElement("title", null, l), h.createElement("desc", null, s), r);
}), Uy = ["children", "className"];
function lo() {
  return lo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, lo.apply(null, arguments);
}
function Ky(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Hy(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Hy(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var Wt = h.forwardRef((e2, t) => {
  var { children: r, className: n } = e2, i = Ky(e2, Uy), a = Y("recharts-layer", n);
  return h.createElement("g", lo({ className: a }, _e(i), { ref: t }), r);
}), qy = h.createContext(null);
function V(e2) {
  return function() {
    return e2;
  };
}
const md = Math.cos, ni = Math.sin, ot = Math.sqrt, ii = Math.PI, Yi = 2 * ii, co = Math.PI, so = 2 * co, Qt = 1e-6, Yy = so - Qt;
function yd(e2) {
  this._ += e2[0];
  for (let t = 1, r = e2.length; t < r; ++t) this._ += arguments[t] + e2[t];
}
function Gy(e2) {
  let t = Math.floor(e2);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e2}`);
  if (t > 15) return yd;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class Vy {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? yd : Gy(t);
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
    else if (d > Qt) if (!(Math.abs(f * l - s * c) > Qt) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let v = n - o, p = i - u, y = l * l + s * s, m = v * v + p * p, g = Math.sqrt(y), w = Math.sqrt(d), b = a * Math.tan((co - Math.acos((y + d - m) / (2 * g * w))) / 2), P = b / w, x = b / g;
      Math.abs(P - 1) > Qt && this._append`L${t + P * c},${r + P * f}`, this._append`A${a},${a},0,0,${+(f * v > c * p)},${this._x1 = t + x * l},${this._y1 = r + x * s}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), l = n * Math.sin(i), s = t + u, c = r + l, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${c}` : (Math.abs(this._x1 - s) > Qt || Math.abs(this._y1 - c) > Qt) && this._append`L${s},${c}`, n && (d < 0 && (d = d % so + so), d > Yy ? this._append`A${n},${n},0,1,${f},${t - u},${r - l}A${n},${n},0,1,${f},${this._x1 = s},${this._y1 = c}` : d > Qt && this._append`A${n},${n},0,${+(d >= co)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function au(e2) {
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
  }, () => new Vy(t);
}
function ou(e2) {
  return typeof e2 == "object" && "length" in e2 ? e2 : Array.from(e2);
}
function gd(e2) {
  this._context = e2;
}
gd.prototype = { areaStart: function() {
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
function Gi(e2) {
  return new gd(e2);
}
function bd(e2) {
  return e2[0];
}
function wd(e2) {
  return e2[1];
}
function xd(e2, t) {
  var r = V(true), n = null, i = Gi, a = null, o = au(u);
  e2 = typeof e2 == "function" ? e2 : e2 === void 0 ? bd : V(e2), t = typeof t == "function" ? t : t === void 0 ? wd : V(t);
  function u(l) {
    var s, c = (l = ou(l)).length, f, d = false, v;
    for (n == null && (a = i(v = o())), s = 0; s <= c; ++s) !(s < c && r(f = l[s], s, l)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e2(f, s, l), +t(f, s, l));
    if (v) return a = null, v + "" || null;
  }
  return u.x = function(l) {
    return arguments.length ? (e2 = typeof l == "function" ? l : V(+l), u) : e2;
  }, u.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : V(+l), u) : t;
  }, u.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : V(!!l), u) : r;
  }, u.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), u) : i;
  }, u.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), u) : n;
  }, u;
}
function $n(e2, t, r) {
  var n = null, i = V(true), a = null, o = Gi, u = null, l = au(s);
  e2 = typeof e2 == "function" ? e2 : e2 === void 0 ? bd : V(+e2), t = typeof t == "function" ? t : V(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? wd : V(+r);
  function s(f) {
    var d, v, p, y = (f = ou(f)).length, m, g = false, w, b = new Array(y), P = new Array(y);
    for (a == null && (u = o(w = l())), d = 0; d <= y; ++d) {
      if (!(d < y && i(m = f[d], d, f)) === g) if (g = !g) v = d, u.areaStart(), u.lineStart();
      else {
        for (u.lineEnd(), u.lineStart(), p = d - 1; p >= v; --p) u.point(b[p], P[p]);
        u.lineEnd(), u.areaEnd();
      }
      g && (b[d] = +e2(m, d, f), P[d] = +t(m, d, f), u.point(n ? +n(m, d, f) : b[d], r ? +r(m, d, f) : P[d]));
    }
    if (w) return u = null, w + "" || null;
  }
  function c() {
    return xd().defined(i).curve(o).context(a);
  }
  return s.x = function(f) {
    return arguments.length ? (e2 = typeof f == "function" ? f : V(+f), n = null, s) : e2;
  }, s.x0 = function(f) {
    return arguments.length ? (e2 = typeof f == "function" ? f : V(+f), s) : e2;
  }, s.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : V(+f), s) : n;
  }, s.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : V(+f), r = null, s) : t;
  }, s.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : V(+f), s) : t;
  }, s.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : V(+f), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return c().x(e2).y(t);
  }, s.lineY1 = function() {
    return c().x(e2).y(r);
  }, s.lineX1 = function() {
    return c().x(n).y(t);
  }, s.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : V(!!f), s) : i;
  }, s.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), s) : o;
  }, s.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), s) : a;
  }, s;
}
class Pd {
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
function Xy(e2) {
  return new Pd(e2, true);
}
function Zy(e2) {
  return new Pd(e2, false);
}
const uu = { draw(e2, t) {
  const r = ot(t / ii);
  e2.moveTo(r, 0), e2.arc(0, 0, r, 0, Yi);
} }, Qy = { draw(e2, t) {
  const r = ot(t / 5) / 2;
  e2.moveTo(-3 * r, -r), e2.lineTo(-r, -r), e2.lineTo(-r, -3 * r), e2.lineTo(r, -3 * r), e2.lineTo(r, -r), e2.lineTo(3 * r, -r), e2.lineTo(3 * r, r), e2.lineTo(r, r), e2.lineTo(r, 3 * r), e2.lineTo(-r, 3 * r), e2.lineTo(-r, r), e2.lineTo(-3 * r, r), e2.closePath();
} }, Od = ot(1 / 3), Jy = Od * 2, eg = { draw(e2, t) {
  const r = ot(t / Jy), n = r * Od;
  e2.moveTo(0, -r), e2.lineTo(n, 0), e2.lineTo(0, r), e2.lineTo(-n, 0), e2.closePath();
} }, tg = { draw(e2, t) {
  const r = ot(t), n = -r / 2;
  e2.rect(n, n, r, r);
} }, rg = 0.8908130915292852, Sd = ni(ii / 10) / ni(7 * ii / 10), ng = ni(Yi / 10) * Sd, ig = -md(Yi / 10) * Sd, ag = { draw(e2, t) {
  const r = ot(t * rg), n = ng * r, i = ig * r;
  e2.moveTo(0, -r), e2.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = Yi * a / 5, u = md(o), l = ni(o);
    e2.lineTo(l * r, -u * r), e2.lineTo(u * n - l * i, l * n + u * i);
  }
  e2.closePath();
} }, Ra = ot(3), og = { draw(e2, t) {
  const r = -ot(t / (Ra * 3));
  e2.moveTo(0, r * 2), e2.lineTo(-Ra * r, -r), e2.lineTo(Ra * r, -r), e2.closePath();
} }, Ye = -0.5, Ge = ot(3) / 2, fo = 1 / ot(12), ug = (fo / 2 + 1) * 3, lg = { draw(e2, t) {
  const r = ot(t / ug), n = r / 2, i = r * fo, a = n, o = r * fo + r, u = -a, l = o;
  e2.moveTo(n, i), e2.lineTo(a, o), e2.lineTo(u, l), e2.lineTo(Ye * n - Ge * i, Ge * n + Ye * i), e2.lineTo(Ye * a - Ge * o, Ge * a + Ye * o), e2.lineTo(Ye * u - Ge * l, Ge * u + Ye * l), e2.lineTo(Ye * n + Ge * i, Ye * i - Ge * n), e2.lineTo(Ye * a + Ge * o, Ye * o - Ge * a), e2.lineTo(Ye * u + Ge * l, Ye * l - Ge * u), e2.closePath();
} };
function cg(e2, t) {
  let r = null, n = au(i);
  e2 = typeof e2 == "function" ? e2 : V(e2 || uu), t = typeof t == "function" ? t : V(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e2.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e2 = typeof a == "function" ? a : V(a), i) : e2;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : V(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function ai() {
}
function oi(e2, t, r) {
  e2._context.bezierCurveTo((2 * e2._x0 + e2._x1) / 3, (2 * e2._y0 + e2._y1) / 3, (e2._x0 + 2 * e2._x1) / 3, (e2._y0 + 2 * e2._y1) / 3, (e2._x0 + 4 * e2._x1 + t) / 6, (e2._y0 + 4 * e2._y1 + r) / 6);
}
function Ad(e2) {
  this._context = e2;
}
Ad.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      oi(this, this._x1, this._y1);
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
      oi(this, e2, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t;
} };
function sg(e2) {
  return new Ad(e2);
}
function _d(e2) {
  this._context = e2;
}
_d.prototype = { areaStart: ai, areaEnd: ai, lineStart: function() {
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
      oi(this, e2, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t;
} };
function fg(e2) {
  return new _d(e2);
}
function Ed(e2) {
  this._context = e2;
}
Ed.prototype = { areaStart: function() {
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
      oi(this, e2, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t;
} };
function dg(e2) {
  return new Ed(e2);
}
function Cd(e2) {
  this._context = e2;
}
Cd.prototype = { areaStart: ai, areaEnd: ai, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e2, t) {
  e2 = +e2, t = +t, this._point ? this._context.lineTo(e2, t) : (this._point = 1, this._context.moveTo(e2, t));
} };
function vg(e2) {
  return new Cd(e2);
}
function Hl(e2) {
  return e2 < 0 ? -1 : 1;
}
function ql(e2, t, r) {
  var n = e2._x1 - e2._x0, i = t - e2._x1, a = (e2._y1 - e2._y0) / (n || i < 0 && -0), o = (r - e2._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (Hl(a) + Hl(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Yl(e2, t) {
  var r = e2._x1 - e2._x0;
  return r ? (3 * (e2._y1 - e2._y0) / r - t) / 2 : t;
}
function za(e2, t, r) {
  var n = e2._x0, i = e2._y0, a = e2._x1, o = e2._y1, u = (a - n) / 3;
  e2._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function ui(e2) {
  this._context = e2;
}
ui.prototype = { areaStart: function() {
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
      za(this, this._t0, Yl(this, this._t0));
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
        this._point = 3, za(this, Yl(this, r = ql(this, e2, t)), r);
        break;
      default:
        za(this, this._t0, r = ql(this, e2, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e2, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function jd(e2) {
  this._context = new Md(e2);
}
(jd.prototype = Object.create(ui.prototype)).point = function(e2, t) {
  ui.prototype.point.call(this, t, e2);
};
function Md(e2) {
  this._context = e2;
}
Md.prototype = { moveTo: function(e2, t) {
  this._context.moveTo(t, e2);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e2, t) {
  this._context.lineTo(t, e2);
}, bezierCurveTo: function(e2, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e2, n, r, a, i);
} };
function hg(e2) {
  return new ui(e2);
}
function pg(e2) {
  return new jd(e2);
}
function kd(e2) {
  this._context = e2;
}
kd.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e2 = this._x, t = this._y, r = e2.length;
  if (r) if (this._line ? this._context.lineTo(e2[0], t[0]) : this._context.moveTo(e2[0], t[0]), r === 2) this._context.lineTo(e2[1], t[1]);
  else for (var n = Gl(e2), i = Gl(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e2[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e2, t) {
  this._x.push(+e2), this._y.push(+t);
} };
function Gl(e2) {
  var t, r = e2.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e2[0] + 2 * e2[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e2[t] + 2 * e2[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e2[r - 1] + e2[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e2[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e2[t + 1] - i[t + 1];
  return [i, a];
}
function mg(e2) {
  return new kd(e2);
}
function Vi(e2, t) {
  this._context = e2, this._t = t;
}
Vi.prototype = { areaStart: function() {
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
function yg(e2) {
  return new Vi(e2, 0.5);
}
function gg(e2) {
  return new Vi(e2, 0);
}
function bg(e2) {
  return new Vi(e2, 1);
}
function lr(e2, t) {
  if ((o = e2.length) > 1) for (var r = 1, n, i, a = e2[t[0]], o, u = a.length; r < o; ++r) for (i = a, a = e2[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function vo(e2) {
  for (var t = e2.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function wg(e2, t) {
  return e2[t];
}
function xg(e2) {
  const t = [];
  return t.key = e2, t;
}
function Pg() {
  var e2 = V([]), t = vo, r = lr, n = wg;
  function i(a) {
    var o = Array.from(e2.apply(this, arguments), xg), u, l = o.length, s = -1, c;
    for (const f of a) for (u = 0, ++s; u < l; ++u) (o[u][s] = [0, +n(f, o[u].key, s, a)]).data = f;
    for (u = 0, c = ou(t(o)); u < l; ++u) o[c[u]].index = u;
    return r(o, c), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e2 = typeof a == "function" ? a : V(Array.from(a)), i) : e2;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : V(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? vo : typeof a == "function" ? a : V(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? lr, i) : r;
  }, i;
}
function Og(e2, t) {
  if ((n = e2.length) > 0) {
    for (var r, n, i = 0, a = e2[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e2[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e2[r][i][1] /= o;
    }
    lr(e2, t);
  }
}
function Sg(e2, t) {
  if ((i = e2.length) > 0) {
    for (var r = 0, n = e2[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e2[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    lr(e2, t);
  }
}
function Ag(e2, t) {
  if (!(!((o = e2.length) > 0) || !((a = (i = e2[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, l = 0, s = 0; u < o; ++u) {
        for (var c = e2[t[u]], f = c[n][1] || 0, d = c[n - 1][1] || 0, v = (f - d) / 2, p = 0; p < u; ++p) {
          var y = e2[t[p]], m = y[n][1] || 0, g = y[n - 1][1] || 0;
          v += m - g;
        }
        l += f, s += v * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= s / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, lr(e2, t);
  }
}
var Xi = {}, Td = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r === "__proto__";
  }
  e2.isUnsafeProperty = t;
})(Td);
var lu = {};
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
})(lu);
var Zi = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    var _a2;
    return typeof r == "string" || typeof r == "symbol" ? r : Object.is((_a2 = r == null ? void 0 : r.valueOf) == null ? void 0 : _a2.call(r), -0) ? "-0" : String(r);
  }
  e2.toKey = t;
})(Zi);
var Qi = {}, Id = {};
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
})(Id);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Id, r = Zi;
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
})(Qi);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Td, r = lu, n = Zi, i = Qi;
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
})(Xi);
var _g = Xi.get;
const Ji = Ht(_g);
var Eg = 4;
function Bt(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Eg, r = 10 ** t, n = Math.round(e2 * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function te(e2) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  return e2.reduce((i, a, o) => {
    var u = r[o - 1];
    return typeof u == "string" ? i + u + a : u !== void 0 ? i + Bt(u) + a : i + a;
  }, "");
}
var Xe = (e2) => e2 === 0 ? 0 : e2 > 0 ? 1 : -1, dt = (e2) => typeof e2 == "number" && e2 != +e2, St = (e2) => typeof e2 == "string" && e2.indexOf("%") === e2.length - 1, I = (e2) => (typeof e2 == "number" || e2 instanceof Number) && !dt(e2), vt = (e2) => I(e2) || typeof e2 == "string", Cg = 0, Zr = (e2) => {
  var t = ++Cg;
  return "".concat(e2 || "").concat(t);
}, Ut = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!I(t) && typeof t != "string") return n;
  var a;
  if (St(t)) {
    if (r == null) return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return dt(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Dd = (e2) => {
  if (!Array.isArray(e2)) return false;
  for (var t = e2.length, r = {}, n = 0; n < t; n++) if (!r[String(e2[n])]) r[String(e2[n])] = true;
  else return true;
  return false;
};
function Ie(e2, t, r) {
  return I(e2) && I(t) ? Bt(e2 + r * (t - e2)) : t;
}
function Nd(e2, t, r) {
  if (!(!e2 || !e2.length)) return e2.find((n) => n && (typeof t == "function" ? t(n) : Ji(n, t)) === r);
}
var pe = (e2) => e2 === null || typeof e2 > "u", pn = (e2) => pe(e2) ? e2 : "".concat(e2.charAt(0).toUpperCase()).concat(e2.slice(1));
function jg(e2) {
  return e2 != null;
}
function mn() {
}
var Mg = ["type", "size", "sizeType"];
function ho() {
  return ho = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, ho.apply(null, arguments);
}
function Vl(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xl(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vl(Object(r), true).forEach(function(n) {
      kg(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Vl(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function kg(e2, t, r) {
  return (t = Tg(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Tg(e2) {
  var t = Ig(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ig(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Dg(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Ng(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Ng(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var $d = { symbolCircle: uu, symbolCross: Qy, symbolDiamond: eg, symbolSquare: tg, symbolStar: ag, symbolTriangle: og, symbolWye: lg }, $g = Math.PI / 180, Lg = (e2) => {
  var t = "symbol".concat(pn(e2));
  return $d[t] || uu;
}, Rg = (e2, t, r) => {
  if (t === "area") return e2;
  switch (r) {
    case "cross":
      return 5 * e2 * e2 / 9;
    case "diamond":
      return 0.5 * e2 * e2 / Math.sqrt(3);
    case "square":
      return e2 * e2;
    case "star": {
      var n = 18 * $g;
      return 1.25 * e2 * e2 * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e2 * e2 / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e2 * e2 / 8;
    default:
      return Math.PI * e2 * e2 / 4;
  }
}, zg = (e2, t) => {
  $d["symbol".concat(pn(e2))] = t;
}, Ld = (e2) => {
  var { type: t = "circle", size: r = 64, sizeType: n = "area" } = e2, i = Dg(e2, Mg), a = Xl(Xl({}, i), {}, { type: t, size: r, sizeType: n }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = Lg(o), v = cg().type(d).size(Rg(r, n, o)), p = v();
    if (p !== null) return p;
  }, { className: l, cx: s, cy: c } = a, f = _e(a);
  return I(s) && I(c) && I(r) ? h.createElement("path", ho({}, f, { className: Y("recharts-symbols", l), transform: "translate(".concat(s, ", ").concat(c, ")"), d: u() })) : null;
};
Ld.registerSymbol = zg;
var Rd = (e2) => "radius" in e2 && "startAngle" in e2 && "endAngle" in e2, cu = (e2, t) => {
  if (!e2 || typeof e2 == "function" || typeof e2 == "boolean") return null;
  var r = e2;
  if (h.isValidElement(e2) && (r = e2.props), typeof r != "object" && typeof r != "function") return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    iu(i) && (n[i] = (a) => r[i](r, a));
  }), n;
}, Bg = (e2, t, r) => (n) => (e2(t, r, n), null), Fg = (e2, t, r) => {
  if (e2 === null || typeof e2 != "object" && typeof e2 != "function") return null;
  var n = null;
  return Object.keys(e2).forEach((i) => {
    var a = e2[i];
    iu(i) && typeof a == "function" && (n || (n = {}), n[i] = Bg(a, t, r));
  }), n;
};
function Zl(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wg(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zl(Object(r), true).forEach(function(n) {
      Ug(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Zl(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Ug(e2, t, r) {
  return (t = Kg(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Kg(e2) {
  var t = Hg(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hg(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Ne(e2, t) {
  var r = Wg({}, e2), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
var zd = {}, Bd = {};
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
})(Bd);
var su = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r;
  }
  e2.identity = t;
})(su);
var Fd = {}, ea = {}, Wd = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Number.isSafeInteger(r) && r >= 0;
  }
  e2.isLength = t;
})(Wd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Wd;
  function r(n) {
    return n != null && typeof n != "function" && t.isLength(n.length);
  }
  e2.isArrayLike = r;
})(ea);
var Ud = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "object" && r !== null;
  }
  e2.isObjectLike = t;
})(Ud);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = ea, r = Ud;
  function n(i) {
    return r.isObjectLike(i) && t.isArrayLike(i);
  }
  e2.isArrayLikeObject = n;
})(Fd);
var Kd = {}, Hd = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Xi;
  function r(n) {
    return function(i) {
      return t.get(i, n);
    };
  }
  e2.property = r;
})(Hd);
var qd = {}, fu = {}, Yd = {}, du = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r !== null && (typeof r == "object" || typeof r == "function");
  }
  e2.isObject = t;
})(du);
var vu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null || typeof r != "object" && typeof r != "function";
  }
  e2.isPrimitive = t;
})(vu);
var hu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n) {
    return r === n || Number.isNaN(r) && Number.isNaN(n);
  }
  e2.eq = t;
})(hu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = du, r = vu, n = hu;
  function i(c, f, d) {
    return typeof d != "function" ? i(c, f, () => {
    }) : a(c, f, function v(p, y, m, g, w, b) {
      const P = d(p, y, m, g, w, b);
      return P !== void 0 ? !!P : a(p, y, v, b);
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
      for (let y = 0; y < p.length; y++) {
        const m = p[y];
        if (!r.isPrimitive(c) && !(m in c) || f[m] === void 0 && c[m] !== void 0 || f[m] === null && c[m] !== null || !d(c[m], f[m], m, c, f, v)) return false;
      }
      return true;
    } finally {
      v == null ? void 0 : v.delete(f);
    }
  }
  function u(c, f, d, v) {
    if (f.size === 0) return true;
    if (!(c instanceof Map)) return false;
    for (const [p, y] of f.entries()) {
      const m = c.get(p);
      if (d(m, y, p, c, f, v) === false) return false;
    }
    return true;
  }
  function l(c, f, d, v) {
    if (f.length === 0) return true;
    if (!Array.isArray(c)) return false;
    const p = /* @__PURE__ */ new Set();
    for (let y = 0; y < f.length; y++) {
      const m = f[y];
      let g = false;
      for (let w = 0; w < c.length; w++) {
        if (p.has(w)) continue;
        const b = c[w];
        let P = false;
        if (d(b, m, y, c, f, v) && (P = true), P) {
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
})(Yd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Yd;
  function r(n, i) {
    return t.isMatchWith(n, i, () => {
    });
  }
  e2.isMatch = r;
})(fu);
var Gd = {}, pu = {}, Vd = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
  }
  e2.getSymbols = t;
})(Vd);
var mu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
  }
  e2.getTag = t;
})(mu);
var yu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", l = "[object Map]", s = "[object Set]", c = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", v = "[object Object]", p = "[object Error]", y = "[object DataView]", m = "[object Uint8Array]", g = "[object Uint8ClampedArray]", w = "[object Uint16Array]", b = "[object Uint32Array]", P = "[object BigUint64Array]", x = "[object Int8Array]", O = "[object Int16Array]", A = "[object Int32Array]", M = "[object BigInt64Array]", T = "[object Float32Array]", D = "[object Float64Array]";
  e2.argumentsTag = a, e2.arrayBufferTag = d, e2.arrayTag = c, e2.bigInt64ArrayTag = M, e2.bigUint64ArrayTag = P, e2.booleanTag = i, e2.dataViewTag = y, e2.dateTag = u, e2.errorTag = p, e2.float32ArrayTag = T, e2.float64ArrayTag = D, e2.functionTag = f, e2.int16ArrayTag = O, e2.int32ArrayTag = A, e2.int8ArrayTag = x, e2.mapTag = l, e2.numberTag = n, e2.objectTag = v, e2.regexpTag = t, e2.setTag = s, e2.stringTag = r, e2.symbolTag = o, e2.uint16ArrayTag = w, e2.uint32ArrayTag = b, e2.uint8ArrayTag = m, e2.uint8ClampedArrayTag = g;
})(yu);
var Xd = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView);
  }
  e2.isTypedArray = t;
})(Xd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Vd, r = mu, n = yu, i = vu, a = Xd;
  function o(c, f) {
    return u(c, void 0, c, /* @__PURE__ */ new Map(), f);
  }
  function u(c, f, d, v = /* @__PURE__ */ new Map(), p = void 0) {
    const y = p == null ? void 0 : p(c, f, d, v);
    if (y !== void 0) return y;
    if (i.isPrimitive(c)) return c;
    if (v.has(c)) return v.get(c);
    if (Array.isArray(c)) {
      const m = new Array(c.length);
      v.set(c, m);
      for (let g = 0; g < c.length; g++) m[g] = u(c[g], g, d, v, p);
      return Object.hasOwn(c, "index") && (m.index = c.index), Object.hasOwn(c, "input") && (m.input = c.input), m;
    }
    if (c instanceof Date) return new Date(c.getTime());
    if (c instanceof RegExp) {
      const m = new RegExp(c.source, c.flags);
      return m.lastIndex = c.lastIndex, m;
    }
    if (c instanceof Map) {
      const m = /* @__PURE__ */ new Map();
      v.set(c, m);
      for (const [g, w] of c) m.set(g, u(w, g, d, v, p));
      return m;
    }
    if (c instanceof Set) {
      const m = /* @__PURE__ */ new Set();
      v.set(c, m);
      for (const g of c) m.add(u(g, void 0, d, v, p));
      return m;
    }
    if (typeof Buffer < "u" && Buffer.isBuffer(c)) return c.subarray();
    if (a.isTypedArray(c)) {
      const m = new (Object.getPrototypeOf(c)).constructor(c.length);
      v.set(c, m);
      for (let g = 0; g < c.length; g++) m[g] = u(c[g], g, d, v, p);
      return m;
    }
    if (c instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && c instanceof SharedArrayBuffer) return c.slice(0);
    if (c instanceof DataView) {
      const m = new DataView(c.buffer.slice(0), c.byteOffset, c.byteLength);
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    if (typeof File < "u" && c instanceof File) {
      const m = new File([c], c.name, { type: c.type });
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    if (typeof Blob < "u" && c instanceof Blob) {
      const m = new Blob([c], { type: c.type });
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    if (c instanceof Error) {
      const m = new c.constructor();
      return v.set(c, m), m.message = c.message, m.name = c.name, m.stack = c.stack, m.cause = c.cause, l(m, c, d, v, p), m;
    }
    if (c instanceof Boolean) {
      const m = new Boolean(c.valueOf());
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    if (c instanceof Number) {
      const m = new Number(c.valueOf());
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    if (c instanceof String) {
      const m = new String(c.valueOf());
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    if (typeof c == "object" && s(c)) {
      const m = Object.create(Object.getPrototypeOf(c));
      return v.set(c, m), l(m, c, d, v, p), m;
    }
    return c;
  }
  function l(c, f, d = c, v, p) {
    const y = [...Object.keys(f), ...t.getSymbols(f)];
    for (let m = 0; m < y.length; m++) {
      const g = y[m], w = Object.getOwnPropertyDescriptor(c, g);
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
})(pu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = pu;
  function r(n) {
    return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
  }
  e2.cloneDeep = r;
})(Gd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = fu, r = Gd;
  function n(i) {
    return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
  }
  e2.matches = n;
})(qd);
var Zd = {}, Qd = {}, Jd = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = pu, r = yu;
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
})(Jd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Jd;
  function r(n) {
    return t.cloneDeepWith(n);
  }
  e2.cloneDeep = r;
})(Qd);
var ev = {}, gu = {};
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
})(gu);
var tv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = mu;
  function r(n) {
    return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
  }
  e2.isArguments = r;
})(tv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = lu, r = gu, n = tv, i = Qi;
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
})(ev);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = fu, r = Zi, n = Qd, i = Xi, a = ev;
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
})(Zd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = su, r = Hd, n = qd, i = Zd;
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
})(Kd);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Bd, r = su, n = Fd, i = Kd;
  function a(o, u = r.identity) {
    return n.isArrayLikeObject(o) ? t.uniqBy(Array.from(o), i.iteratee(u)) : [];
  }
  e2.uniqBy = a;
})(zd);
var qg = zd.uniqBy;
const Ql = Ht(qg);
function Yg(e2, t, r) {
  return t === true ? Ql(e2, r) : typeof t == "function" ? Ql(e2, t) : e2;
}
var rv = { exports: {} }, nv = {}, iv = { exports: {} }, av = {};
/**
* @license React
* use-sync-external-store-shim.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ar = h;
function Gg(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var Vg = typeof Object.is == "function" ? Object.is : Gg, Xg = Ar.useState, Zg = Ar.useEffect, Qg = Ar.useLayoutEffect, Jg = Ar.useDebugValue;
function e0(e2, t) {
  var r = t(), n = Xg({ inst: { value: r, getSnapshot: t } }), i = n[0].inst, a = n[1];
  return Qg(function() {
    i.value = r, i.getSnapshot = t, Ba(i) && a({ inst: i });
  }, [e2, r, t]), Zg(function() {
    return Ba(i) && a({ inst: i }), e2(function() {
      Ba(i) && a({ inst: i });
    });
  }, [e2]), Jg(r), r;
}
function Ba(e2) {
  var t = e2.getSnapshot;
  e2 = e2.value;
  try {
    var r = t();
    return !Vg(e2, r);
  } catch {
    return true;
  }
}
function t0(e2, t) {
  return t();
}
var r0 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? t0 : e0;
av.useSyncExternalStore = Ar.useSyncExternalStore !== void 0 ? Ar.useSyncExternalStore : r0;
iv.exports = av;
var n0 = iv.exports;
/**
* @license React
* use-sync-external-store-shim/with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ta = h, i0 = n0;
function a0(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var o0 = typeof Object.is == "function" ? Object.is : a0, u0 = i0.useSyncExternalStore, l0 = ta.useRef, c0 = ta.useEffect, s0 = ta.useMemo, f0 = ta.useDebugValue;
nv.useSyncExternalStoreWithSelector = function(e2, t, r, n, i) {
  var a = l0(null);
  if (a.current === null) {
    var o = { hasValue: false, value: null };
    a.current = o;
  } else o = a.current;
  a = s0(function() {
    function l(v) {
      if (!s) {
        if (s = true, c = v, v = n(v), i !== void 0 && o.hasValue) {
          var p = o.value;
          if (i(p, v)) return f = p;
        }
        return f = v;
      }
      if (p = f, o0(c, v)) return p;
      var y = n(v);
      return i !== void 0 && i(p, y) ? (c = v, p) : (c = v, f = y);
    }
    var s = false, c, f, d = r === void 0 ? null : r;
    return [function() {
      return l(t());
    }, d === null ? void 0 : function() {
      return l(d());
    }];
  }, [t, r, n, i]);
  var u = u0(e2, a[0], a[1]);
  return c0(function() {
    o.hasValue = true, o.value = u;
  }, [u]), f0(u), u;
};
rv.exports = nv;
var d0 = rv.exports, bu = h.createContext(null), v0 = (e2) => e2, oe = () => {
  var e2 = h.useContext(bu);
  return e2 ? e2.store.dispatch : v0;
}, Qn = () => {
}, h0 = () => Qn, p0 = (e2, t) => e2 === t;
function N(e2) {
  var t = h.useContext(bu);
  return d0.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : h0, t ? t.store.getState : Qn, t ? t.store.getState : Qn, t ? e2 : Qn, p0);
}
function m0(e2, t = `expected a function, instead received ${typeof e2}`) {
  if (typeof e2 != "function") throw new TypeError(t);
}
function y0(e2, t = `expected an object, instead received ${typeof e2}`) {
  if (typeof e2 != "object") throw new TypeError(t);
}
function g0(e2, t = "expected all items to be functions, instead received the following types: ") {
  if (!e2.every((r) => typeof r == "function")) {
    const r = e2.map((n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Jl = (e2) => Array.isArray(e2) ? e2 : [e2];
function b0(e2) {
  const t = Array.isArray(e2[0]) ? e2[0] : e2;
  return g0(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
}
function w0(e2, t) {
  const r = [], { length: n } = e2;
  for (let i = 0; i < n; i++) r.push(e2[i].apply(null, t));
  return r;
}
var x0 = class {
  constructor(e2) {
    this.value = e2;
  }
  deref() {
    return this.value;
  }
}, P0 = typeof WeakRef < "u" ? WeakRef : x0, O0 = 0, ec = 1;
function Ln() {
  return { s: O0, v: void 0, o: null, p: null };
}
function ov(e2, t = {}) {
  let r = Ln();
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
        const y = p.get(v);
        y === void 0 ? (u = Ln(), p.set(v, u)) : u = y;
      } else {
        let p = u.p;
        p === null && (u.p = p = /* @__PURE__ */ new Map());
        const y = p.get(v);
        y === void 0 ? (u = Ln(), p.set(v, u)) : u = y;
      }
    }
    const s = u;
    let c;
    if (u.s === ec) c = u.v;
    else if (c = e2.apply(null, arguments), a++, n) {
      const f = ((_a2 = i == null ? void 0 : i.deref) == null ? void 0 : _a2.call(i)) ?? i;
      f != null && n(f, c) && (c = f, a !== 0 && a--), i = typeof c == "object" && c !== null || typeof c == "function" ? new P0(c) : c;
    }
    return s.s = ec, s.v = c, c;
  }
  return o.clearCache = () => {
    r = Ln(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function S0(e2, ...t) {
  const r = typeof e2 == "function" ? { memoize: e2, memoizeOptions: t } : e2, n = (...i) => {
    let a = 0, o = 0, u, l = {}, s = i.pop();
    typeof s == "object" && (l = s, s = i.pop()), m0(s, `createSelector expects an output function after the inputs, but received: [${typeof s}]`);
    const c = { ...r, ...l }, { memoize: f, memoizeOptions: d = [], argsMemoize: v = ov, argsMemoizeOptions: p = [] } = c, y = Jl(d), m = Jl(p), g = b0(i), w = f(function() {
      return a++, s.apply(null, arguments);
    }, ...y), b = v(function() {
      o++;
      const x = w0(g, arguments);
      return u = w.apply(null, x), u;
    }, ...m);
    return Object.assign(b, { resultFunc: s, memoizedResultFunc: w, dependencies: g, dependencyRecomputations: () => o, resetDependencyRecomputations: () => {
      o = 0;
    }, lastResult: () => u, recomputations: () => a, resetRecomputations: () => {
      a = 0;
    }, memoize: f, argsMemoize: v });
  };
  return Object.assign(n, { withTypes: () => n }), n;
}
var S = S0(ov), A0 = Object.assign((e2, t = S) => {
  y0(e2, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e2}`);
  const r = Object.keys(e2), n = r.map((a) => e2[a]);
  return t(n, (...a) => a.reduce((o, u, l) => (o[r[l]] = u, o), {}));
}, { withTypes: () => A0 }), uv = {}, lv = {}, cv = {};
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
})(cv);
var sv = {}, wu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return typeof r == "symbol" || r instanceof Symbol;
  }
  e2.isSymbol = t;
})(wu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = wu, r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function i(a, o) {
    return Array.isArray(a) ? false : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? true : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
  }
  e2.isKey = i;
})(sv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = cv, r = sv, n = Qi;
  function i(a, o, u, l) {
    if (a == null) return [];
    u = l ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((v) => String(v));
    const s = (v, p) => {
      let y = v;
      for (let m = 0; m < p.length && y != null; ++m) y = y[p[m]];
      return y;
    }, c = (v, p) => p == null || v == null ? p : typeof v == "object" && "key" in v ? Object.hasOwn(p, v.key) ? p[v.key] : s(p, v.path) : typeof v == "function" ? v(p) : Array.isArray(v) ? s(p, v) : typeof p == "object" ? p[v] : p, f = o.map((v) => (Array.isArray(v) && v.length === 1 && (v = v[0]), v == null || typeof v == "function" || Array.isArray(v) || r.isKey(v) ? v : { key: v, path: n.toPath(v) }));
    return a.map((v) => ({ original: v, criteria: f.map((p) => c(p, v)) })).slice().sort((v, p) => {
      for (let y = 0; y < f.length; y++) {
        const m = t.compareValues(v.criteria[y], p.criteria[y], u[y]);
        if (m !== 0) return m;
      }
      return 0;
    }).map((v) => v.original);
  }
  e2.orderBy = i;
})(lv);
var fv = {};
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
})(fv);
var xu = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = gu, r = ea, n = du, i = hu;
  function a(o, u, l) {
    return n.isObject(l) && (typeof u == "number" && r.isArrayLike(l) && t.isIndex(u) && u < l.length || typeof u == "string" && u in l) ? i.eq(l[u], o) : false;
  }
  e2.isIterateeCall = a;
})(xu);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = lv, r = fv, n = xu;
  function i(a, ...o) {
    const u = o.length;
    return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
  }
  e2.sortBy = i;
})(uv);
var _0 = uv.sortBy;
const ra = Ht(_0);
var dv = (e2) => e2.legend.settings, E0 = (e2) => e2.legend.size, C0 = (e2) => e2.legend.payload;
S([C0, dv], (e2, t) => {
  var { itemSorter: r } = t, n = e2.flat(1);
  return r ? ra(n, r) : n;
});
var Rn = 1;
function j0() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = h.useState({ height: 0, left: 0, top: 0, width: 0 }), n = h.useCallback((i) => {
    if (i != null) {
      var a = i.getBoundingClientRect(), o = { height: a.height, left: a.left, top: a.top, width: a.width };
      (Math.abs(o.height - t.height) > Rn || Math.abs(o.left - t.left) > Rn || Math.abs(o.top - t.top) > Rn || Math.abs(o.width - t.width) > Rn) && r({ height: o.height, left: o.left, top: o.top, width: o.width });
    }
  }, [t.width, t.height, t.top, t.left, ...e2]);
  return [t, n];
}
function ye(e2) {
  return `Minified Redux error #${e2}; visit https://redux.js.org/Errors?code=${e2} for the full message or use the non-minified dev environment for full errors. `;
}
var M0 = typeof Symbol == "function" && Symbol.observable || "@@observable", tc = M0, Fa = () => Math.random().toString(36).substring(7).split("").join("."), k0 = { INIT: `@@redux/INIT${Fa()}`, REPLACE: `@@redux/REPLACE${Fa()}`, PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Fa()}` }, li = k0;
function Pu(e2) {
  if (typeof e2 != "object" || e2 === null) return false;
  let t = e2;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e2) === t || Object.getPrototypeOf(e2) === null;
}
function vv(e2, t, r) {
  if (typeof e2 != "function") throw new Error(ye(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function") throw new Error(ye(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function") throw new Error(ye(1));
    return r(vv)(e2, t);
  }
  let n = e2, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, l = false;
  function s() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((m, g) => {
      o.set(g, m);
    }));
  }
  function c() {
    if (l) throw new Error(ye(3));
    return i;
  }
  function f(m) {
    if (typeof m != "function") throw new Error(ye(4));
    if (l) throw new Error(ye(5));
    let g = true;
    s();
    const w = u++;
    return o.set(w, m), function() {
      if (g) {
        if (l) throw new Error(ye(6));
        g = false, s(), o.delete(w), a = null;
      }
    };
  }
  function d(m) {
    if (!Pu(m)) throw new Error(ye(7));
    if (typeof m.type > "u") throw new Error(ye(8));
    if (typeof m.type != "string") throw new Error(ye(17));
    if (l) throw new Error(ye(9));
    try {
      l = true, i = n(i, m);
    } finally {
      l = false;
    }
    return (a = o).forEach((w) => {
      w();
    }), m;
  }
  function v(m) {
    if (typeof m != "function") throw new Error(ye(10));
    n = m, d({ type: li.REPLACE });
  }
  function p() {
    const m = f;
    return { subscribe(g) {
      if (typeof g != "object" || g === null) throw new Error(ye(11));
      function w() {
        const P = g;
        P.next && P.next(c());
      }
      return w(), { unsubscribe: m(w) };
    }, [tc]() {
      return this;
    } };
  }
  return d({ type: li.INIT }), { dispatch: d, subscribe: f, getState: c, replaceReducer: v, [tc]: p };
}
function T0(e2) {
  Object.keys(e2).forEach((t) => {
    const r = e2[t];
    if (typeof r(void 0, { type: li.INIT }) > "u") throw new Error(ye(12));
    if (typeof r(void 0, { type: li.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(ye(13));
  });
}
function hv(e2) {
  const t = Object.keys(e2), r = {};
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    typeof e2[o] == "function" && (r[o] = e2[o]);
  }
  const n = Object.keys(r);
  let i;
  try {
    T0(r);
  } catch (a) {
    i = a;
  }
  return function(o = {}, u) {
    if (i) throw i;
    let l = false;
    const s = {};
    for (let c = 0; c < n.length; c++) {
      const f = n[c], d = r[f], v = o[f], p = d(v, u);
      if (typeof p > "u") throw u && u.type, new Error(ye(14));
      s[f] = p, l = l || p !== v;
    }
    return l = l || n.length !== Object.keys(o).length, l ? s : o;
  };
}
function ci(...e2) {
  return e2.length === 0 ? (t) => t : e2.length === 1 ? e2[0] : e2.reduce((t, r) => (...n) => t(r(...n)));
}
function I0(...e2) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(ye(15));
    };
    const o = { getState: i.getState, dispatch: (l, ...s) => a(l, ...s) }, u = e2.map((l) => l(o));
    return a = ci(...u)(i.dispatch), { ...i, dispatch: a };
  };
}
function pv(e2) {
  return Pu(e2) && "type" in e2 && typeof e2.type == "string";
}
var mv = Symbol.for("immer-nothing"), rc = Symbol.for("immer-draftable"), Ee = Symbol.for("immer-state");
function tt(e2, ...t) {
  throw new Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var Ue = Object, _r = Ue.getPrototypeOf, si = "constructor", na = "prototype", po = "configurable", fi = "enumerable", Jn = "writable", Qr = "value", At = (e2) => !!e2 && !!e2[Ee];
function at(e2) {
  var _a2;
  return e2 ? yv(e2) || ia(e2) || !!e2[rc] || !!((_a2 = e2[si]) == null ? void 0 : _a2[rc]) || aa(e2) || oa(e2) : false;
}
var D0 = Ue[na][si].toString(), nc = /* @__PURE__ */ new WeakMap();
function yv(e2) {
  if (!e2 || !Ou(e2)) return false;
  const t = _r(e2);
  if (t === null || t === Ue[na]) return true;
  const r = Ue.hasOwnProperty.call(t, si) && t[si];
  if (r === Object) return true;
  if (!wr(r)) return false;
  let n = nc.get(r);
  return n === void 0 && (n = Function.toString.call(r), nc.set(r, n)), n === D0;
}
function yn(e2, t, r = true) {
  gn(e2) === 0 ? (r ? Reflect.ownKeys(e2) : Ue.keys(e2)).forEach((i) => {
    t(i, e2[i], e2);
  }) : e2.forEach((n, i) => t(i, n, e2));
}
function gn(e2) {
  const t = e2[Ee];
  return t ? t.type_ : ia(e2) ? 1 : aa(e2) ? 2 : oa(e2) ? 3 : 0;
}
var ic = (e2, t, r = gn(e2)) => r === 2 ? e2.has(t) : Ue[na].hasOwnProperty.call(e2, t), mo = (e2, t, r = gn(e2)) => r === 2 ? e2.get(t) : e2[t], di = (e2, t, r, n = gn(e2)) => {
  n === 2 ? e2.set(t, r) : n === 3 ? e2.add(r) : e2[t] = r;
};
function N0(e2, t) {
  return e2 === t ? e2 !== 0 || 1 / e2 === 1 / t : e2 !== e2 && t !== t;
}
var ia = Array.isArray, aa = (e2) => e2 instanceof Map, oa = (e2) => e2 instanceof Set, Ou = (e2) => typeof e2 == "object", wr = (e2) => typeof e2 == "function", Wa = (e2) => typeof e2 == "boolean";
function $0(e2) {
  const t = +e2;
  return Number.isInteger(t) && String(t) === e2;
}
var yt = (e2) => e2.copy_ || e2.base_, Su = (e2) => e2.modified_ ? e2.copy_ : e2.base_;
function yo(e2, t) {
  if (aa(e2)) return new Map(e2);
  if (oa(e2)) return new Set(e2);
  if (ia(e2)) return Array[na].slice.call(e2);
  const r = yv(e2);
  if (t === true || t === "class_only" && !r) {
    const n = Ue.getOwnPropertyDescriptors(e2);
    delete n[Ee];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u[Jn] === false && (u[Jn] = true, u[po] = true), (u.get || u.set) && (n[o] = { [po]: true, [Jn]: true, [fi]: u[fi], [Qr]: e2[o] });
    }
    return Ue.create(_r(e2), n);
  } else {
    const n = _r(e2);
    if (n !== null && r) return { ...e2 };
    const i = Ue.create(n);
    return Ue.assign(i, e2);
  }
}
function Au(e2, t = false) {
  return ua(e2) || At(e2) || !at(e2) || (gn(e2) > 1 && Ue.defineProperties(e2, { set: zn, add: zn, clear: zn, delete: zn }), Ue.freeze(e2), t && yn(e2, (r, n) => {
    Au(n, true);
  }, false)), e2;
}
function L0() {
  tt(2);
}
var zn = { [Qr]: L0 };
function ua(e2) {
  return e2 === null || !Ou(e2) ? true : Ue.isFrozen(e2);
}
var vi = "MapSet", go = "Patches", ac = "ArrayMethods", gv = {};
function cr(e2) {
  const t = gv[e2];
  return t || tt(0, e2), t;
}
var oc = (e2) => !!gv[e2], Jr, bv = () => Jr, R0 = (e2, t) => ({ drafts_: [], parent_: e2, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0, handledSet_: /* @__PURE__ */ new Set(), processedForPatches_: /* @__PURE__ */ new Set(), mapSetPlugin_: oc(vi) ? cr(vi) : void 0, arrayMethodsPlugin_: oc(ac) ? cr(ac) : void 0 });
function uc(e2, t) {
  t && (e2.patchPlugin_ = cr(go), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t);
}
function bo(e2) {
  wo(e2), e2.drafts_.forEach(z0), e2.drafts_ = null;
}
function wo(e2) {
  e2 === Jr && (Jr = e2.parent_);
}
var lc = (e2) => Jr = R0(Jr, e2);
function z0(e2) {
  const t = e2[Ee];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function cc(e2, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e2 !== void 0 && e2 !== r) {
    r[Ee].modified_ && (bo(t), tt(4)), at(e2) && (e2 = sc(t, e2));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(r[Ee].base_, e2, t);
  } else e2 = sc(t, r);
  return B0(t, e2, true), bo(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e2 !== mv ? e2 : void 0;
}
function sc(e2, t) {
  if (ua(t)) return t;
  const r = t[Ee];
  if (!r) return _u(t, e2.handledSet_, e2);
  if (!la(r, e2)) return t;
  if (!r.modified_) return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n) for (; n.length > 0; ) n.pop()(e2);
    Pv(r, e2);
  }
  return r.copy_;
}
function B0(e2, t, r = false) {
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && Au(t, r);
}
function wv(e2) {
  e2.finalized_ = true, e2.scope_.unfinalizedDrafts_--;
}
var la = (e2, t) => e2.scope_ === t, F0 = [];
function xv(e2, t, r, n) {
  const i = yt(e2), a = e2.type_;
  if (n !== void 0 && mo(i, n, a) === t) {
    di(i, n, r, a);
    return;
  }
  if (!e2.draftLocations_) {
    const u = e2.draftLocations_ = /* @__PURE__ */ new Map();
    yn(i, (l, s) => {
      if (At(s)) {
        const c = u.get(s) || [];
        c.push(l), u.set(s, c);
      }
    });
  }
  const o = e2.draftLocations_.get(t) ?? F0;
  for (const u of o) di(i, u, r, a);
}
function W0(e2, t, r) {
  e2.callbacks_.push(function(i) {
    var _a2;
    const a = t;
    if (!a || !la(a, i)) return;
    (_a2 = i.mapSetPlugin_) == null ? void 0 : _a2.fixSetContents(a);
    const o = Su(a);
    xv(e2, a.draft_ ?? a, o, r), Pv(a, i);
  });
}
function Pv(e2, t) {
  var _a2;
  if (e2.modified_ && !e2.finalized_ && (e2.type_ === 3 || e2.type_ === 1 && e2.allIndicesReassigned_ || (((_a2 = e2.assigned_) == null ? void 0 : _a2.size) ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e2);
      i && n.generatePatches_(e2, i, t);
    }
    wv(e2);
  }
}
function U0(e2, t, r) {
  const { scope_: n } = e2;
  if (At(r)) {
    const i = r[Ee];
    la(i, n) && i.callbacks_.push(function() {
      ei(e2);
      const o = Su(i);
      xv(e2, r, o, t);
    });
  } else at(r) && e2.callbacks_.push(function() {
    const a = yt(e2);
    mo(a, t, e2.type_) === r && n.drafts_.length > 1 && (e2.assigned_.get(t) ?? false) === true && e2.copy_ && _u(mo(e2.copy_, t, e2.type_), n.handledSet_, n);
  });
}
function _u(e2, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || At(e2) || t.has(e2) || !at(e2) || ua(e2) || (t.add(e2), yn(e2, (n, i) => {
    if (At(i)) {
      const a = i[Ee];
      if (la(a, r)) {
        const o = Su(a);
        di(e2, n, o, e2.type_), wv(a);
      }
    } else at(i) && _u(i, t, r);
  })), e2;
}
function K0(e2, t) {
  const r = ia(e2), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : bv(), modified_: false, finalized_: false, assigned_: void 0, parent_: t, base_: e2, draft_: null, copy_: null, revoke_: null, isManual_: false, callbacks_: void 0 };
  let i = n, a = Eu;
  r && (i = [n], a = en);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, [u, n];
}
var Eu = { get(e2, t) {
  if (t === Ee) return e2;
  let r = e2.scope_.arrayMethodsPlugin_;
  const n = e2.type_ === 1 && typeof t == "string";
  if (n && (r == null ? void 0 : r.isArrayOperationMethod(t))) return r.createMethodInterceptor(e2, t);
  const i = yt(e2);
  if (!ic(i, t, e2.type_)) return H0(e2, i, t);
  const a = i[t];
  if (e2.finalized_ || !at(a) || n && e2.operationMethod && (r == null ? void 0 : r.isMutatingArrayMethod(e2.operationMethod)) && $0(t)) return a;
  if (a === Ua(e2.base_, t)) {
    ei(e2);
    const o = e2.type_ === 1 ? +t : t, u = Po(e2.scope_, a, e2, o);
    return e2.copy_[o] = u;
  }
  return a;
}, has(e2, t) {
  return t in yt(e2);
}, ownKeys(e2) {
  return Reflect.ownKeys(yt(e2));
}, set(e2, t, r) {
  const n = Ov(yt(e2), t);
  if (n == null ? void 0 : n.set) return n.set.call(e2.draft_, r), true;
  if (!e2.modified_) {
    const i = Ua(yt(e2), t), a = i == null ? void 0 : i[Ee];
    if (a && a.base_ === r) return e2.copy_[t] = r, e2.assigned_.set(t, false), true;
    if (N0(r, i) && (r !== void 0 || ic(e2.base_, t, e2.type_))) return true;
    ei(e2), xo(e2);
  }
  return e2.copy_[t] === r && (r !== void 0 || t in e2.copy_) || Number.isNaN(r) && Number.isNaN(e2.copy_[t]) || (e2.copy_[t] = r, e2.assigned_.set(t, true), U0(e2, t, r)), true;
}, deleteProperty(e2, t) {
  return ei(e2), Ua(e2.base_, t) !== void 0 || t in e2.base_ ? (e2.assigned_.set(t, false), xo(e2)) : e2.assigned_.delete(t), e2.copy_ && delete e2.copy_[t], true;
}, getOwnPropertyDescriptor(e2, t) {
  const r = yt(e2), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { [Jn]: true, [po]: e2.type_ !== 1 || t !== "length", [fi]: n[fi], [Qr]: r[t] };
}, defineProperty() {
  tt(11);
}, getPrototypeOf(e2) {
  return _r(e2.base_);
}, setPrototypeOf() {
  tt(12);
} }, en = {};
yn(Eu, (e2, t) => {
  en[e2] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
});
en.deleteProperty = function(e2, t) {
  return en.set.call(this, e2, t, void 0);
};
en.set = function(e2, t, r) {
  return Eu.set.call(this, e2[0], t, r, e2[0]);
};
function Ua(e2, t) {
  const r = e2[Ee];
  return (r ? yt(r) : e2)[t];
}
function H0(e2, t, r) {
  var _a2;
  const n = Ov(t, r);
  return n ? Qr in n ? n[Qr] : (_a2 = n.get) == null ? void 0 : _a2.call(e2.draft_) : void 0;
}
function Ov(e2, t) {
  if (!(t in e2)) return;
  let r = _r(e2);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = _r(r);
  }
}
function xo(e2) {
  e2.modified_ || (e2.modified_ = true, e2.parent_ && xo(e2.parent_));
}
function ei(e2) {
  e2.copy_ || (e2.assigned_ = /* @__PURE__ */ new Map(), e2.copy_ = yo(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
var q0 = class {
  constructor(t) {
    this.autoFreeze_ = true, this.useStrictShallowCopy_ = false, this.useStrictIteration_ = false, this.produce = (r, n, i) => {
      if (wr(r) && !wr(n)) {
        const o = n;
        n = r;
        const u = this;
        return function(s = o, ...c) {
          return u.produce(s, (f) => n.call(this, f, ...c));
        };
      }
      wr(n) || tt(6), i !== void 0 && !wr(i) && tt(7);
      let a;
      if (at(r)) {
        const o = lc(this), u = Po(o, r, void 0);
        let l = true;
        try {
          a = n(u), l = false;
        } finally {
          l ? bo(o) : wo(o);
        }
        return uc(o, i), cc(a, o);
      } else if (!r || !Ou(r)) {
        if (a = n(r), a === void 0 && (a = r), a === mv && (a = void 0), this.autoFreeze_ && Au(a, true), i) {
          const o = [], u = [];
          cr(go).generateReplacementPatches_(r, a, { patches_: o, inversePatches_: u }), i(o, u);
        }
        return a;
      } else tt(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (wr(r)) return (u, ...l) => this.produceWithPatches(u, (s) => r(s, ...l));
      let i, a;
      return [this.produce(r, n, (u, l) => {
        i = u, a = l;
      }), i, a];
    }, Wa(t == null ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze), Wa(t == null ? void 0 : t.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), Wa(t == null ? void 0 : t.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    at(t) || tt(8), At(t) && (t = it(t));
    const r = lc(this), n = Po(r, t, void 0);
    return n[Ee].isManual_ = true, wo(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[Ee];
    (!n || !n.isManual_) && tt(9);
    const { scope_: i } = n;
    return uc(i, r), cc(void 0, i);
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
    const i = cr(go).applyPatches_;
    return At(t) ? i(t, r) : this.produce(t, (a) => i(a, r));
  }
};
function Po(e2, t, r, n) {
  const [i, a] = aa(t) ? cr(vi).proxyMap_(t, r) : oa(t) ? cr(vi).proxySet_(t, r) : K0(t, r);
  return ((r == null ? void 0 : r.scope_) ?? bv()).drafts_.push(i), a.callbacks_ = (r == null ? void 0 : r.callbacks_) ?? [], a.key_ = n, r && n !== void 0 ? W0(r, a, n) : a.callbacks_.push(function(l) {
    var _a2;
    (_a2 = l.mapSetPlugin_) == null ? void 0 : _a2.fixSetContents(a);
    const { patchPlugin_: s } = l;
    a.modified_ && s && s.generatePatches_(a, [], l);
  }), i;
}
function it(e2) {
  return At(e2) || tt(10, e2), Sv(e2);
}
function Sv(e2) {
  if (!at(e2) || ua(e2)) return e2;
  const t = e2[Ee];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = yo(e2, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = yo(e2, true);
  return yn(r, (i, a) => {
    di(r, i, Sv(a));
  }, n), t && (t.finalized_ = false), r;
}
var Y0 = new q0(), Av = Y0.produce;
function _v(e2) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e2) : i(a);
}
var G0 = _v(), V0 = _v, X0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0) return typeof arguments[0] == "object" ? ci : ci.apply(null, arguments);
};
function Qe(e2, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i) throw new Error(Ke(0));
      return { type: e2, payload: i.payload, ..."meta" in i && { meta: i.meta }, ..."error" in i && { error: i.error } };
    }
    return { type: e2, payload: n[0] };
  }
  return r.toString = () => `${e2}`, r.type = e2, r.match = (n) => pv(n) && n.type === e2, r;
}
var Ev = class Gr extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Gr.prototype);
  }
  static get [Symbol.species]() {
    return Gr;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Gr(...t[0].concat(this)) : new Gr(...t.concat(this));
  }
};
function fc(e2) {
  return at(e2) ? Av(e2, () => {
  }) : e2;
}
function Bn(e2, t, r) {
  return e2.has(t) ? e2.get(t) : e2.set(t, r(t)).get(t);
}
function Z0(e2) {
  return typeof e2 == "boolean";
}
var Q0 = () => function(t) {
  const { thunk: r = true, immutableCheck: n = true, serializableCheck: i = true, actionCreatorCheck: a = true } = t ?? {};
  let o = new Ev();
  return r && (Z0(r) ? o.push(G0) : o.push(V0(r.extraArgument))), o;
}, Cv = "RTK_autoBatch", J = () => (e2) => ({ payload: e2, meta: { [Cv]: true } }), dc = (e2) => (t) => {
  setTimeout(t, e2);
}, jv = (e2 = { type: "raf" }) => (t) => (...r) => {
  const n = t(...r);
  let i = true, a = false, o = false;
  const u = /* @__PURE__ */ new Set(), l = e2.type === "tick" ? queueMicrotask : e2.type === "raf" ? typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : dc(10) : e2.type === "callback" ? e2.queueNotification : dc(e2.timeout), s = () => {
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
      return i = !((_a2 = c == null ? void 0 : c.meta) == null ? void 0 : _a2[Cv]), a = !i, a && (o || (o = true, l(s))), n.dispatch(c);
    } finally {
      i = true;
    }
  } });
}, J0 = (e2) => function(r) {
  const { autoBatch: n = true } = r ?? {};
  let i = new Ev(e2);
  return n && i.push(jv(typeof n == "object" ? n : void 0)), i;
};
function eb(e2) {
  const t = Q0(), { reducer: r = void 0, middleware: n, devTools: i = true, preloadedState: a = void 0, enhancers: o = void 0 } = e2 || {};
  let u;
  if (typeof r == "function") u = r;
  else if (Pu(r)) u = hv(r);
  else throw new Error(Ke(1));
  let l;
  typeof n == "function" ? l = n(t) : l = t();
  let s = ci;
  i && (s = X0({ trace: false, ...typeof i == "object" && i }));
  const c = I0(...l), f = J0(c);
  let d = typeof o == "function" ? o(f) : f();
  const v = s(...d);
  return vv(u, a, v);
}
function Mv(e2) {
  const t = {}, r = [];
  let n;
  const i = { addCase(a, o) {
    const u = typeof a == "string" ? a : a.type;
    if (!u) throw new Error(Ke(28));
    if (u in t) throw new Error(Ke(29));
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
function tb(e2) {
  return typeof e2 == "function";
}
function rb(e2, t) {
  let [r, n, i] = Mv(t), a;
  if (tb(e2)) a = () => fc(e2());
  else {
    const u = fc(e2);
    a = () => u;
  }
  function o(u = a(), l) {
    let s = [r[l.type], ...n.filter(({ matcher: c }) => c(l)).map(({ reducer: c }) => c)];
    return s.filter((c) => !!c).length === 0 && (s = [i]), s.reduce((c, f) => {
      if (f) if (At(c)) {
        const v = f(c, l);
        return v === void 0 ? c : v;
      } else {
        if (at(c)) return Av(c, (d) => f(d, l));
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
var nb = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", ib = (e2 = 21) => {
  let t = "", r = e2;
  for (; r--; ) t += nb[Math.random() * 64 | 0];
  return t;
}, ab = Symbol.for("rtk-slice-createasyncthunk");
function ob(e2, t) {
  return `${e2}/${t}`;
}
function ub({ creators: e2 } = {}) {
  var _a2;
  const t = (_a2 = e2 == null ? void 0 : e2.asyncThunk) == null ? void 0 : _a2[ab];
  return function(n) {
    const { name: i, reducerPath: a = i } = n;
    if (!i) throw new Error(Ke(11));
    const o = (typeof n.reducers == "function" ? n.reducers(cb()) : n.reducers) || {}, u = Object.keys(o), l = { sliceCaseReducersByName: {}, sliceCaseReducersByType: {}, actionCreators: {}, sliceMatchers: [] }, s = { addCase(b, P) {
      const x = typeof b == "string" ? b : b.type;
      if (!x) throw new Error(Ke(12));
      if (x in l.sliceCaseReducersByType) throw new Error(Ke(13));
      return l.sliceCaseReducersByType[x] = P, s;
    }, addMatcher(b, P) {
      return l.sliceMatchers.push({ matcher: b, reducer: P }), s;
    }, exposeAction(b, P) {
      return l.actionCreators[b] = P, s;
    }, exposeCaseReducer(b, P) {
      return l.sliceCaseReducersByName[b] = P, s;
    } };
    u.forEach((b) => {
      const P = o[b], x = { reducerName: b, type: ob(i, b), createNotation: typeof n.reducers == "function" };
      fb(P) ? vb(x, P, s, t) : sb(x, P, s);
    });
    function c() {
      const [b = {}, P = [], x = void 0] = typeof n.extraReducers == "function" ? Mv(n.extraReducers) : [n.extraReducers], O = { ...b, ...l.sliceCaseReducersByType };
      return rb(n.initialState, (A) => {
        for (let M in O) A.addCase(M, O[M]);
        for (let M of l.sliceMatchers) A.addMatcher(M.matcher, M.reducer);
        for (let M of P) A.addMatcher(M.matcher, M.reducer);
        x && A.addDefaultCase(x);
      });
    }
    const f = (b) => b, d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new WeakMap();
    let p;
    function y(b, P) {
      return p || (p = c()), p(b, P);
    }
    function m() {
      return p || (p = c()), p.getInitialState();
    }
    function g(b, P = false) {
      function x(A) {
        let M = A[b];
        return typeof M > "u" && P && (M = Bn(v, x, m)), M;
      }
      function O(A = f) {
        const M = Bn(d, P, () => /* @__PURE__ */ new WeakMap());
        return Bn(M, A, () => {
          const T = {};
          for (const [D, E] of Object.entries(n.selectors ?? {})) T[D] = lb(E, A, () => Bn(v, A, m), P);
          return T;
        });
      }
      return { reducerPath: b, getSelectors: O, get selectors() {
        return O(x);
      }, selectSlice: x };
    }
    const w = { name: i, reducer: y, actions: l.actionCreators, caseReducers: l.sliceCaseReducersByName, getInitialState: m, ...g(a), injectInto(b, { reducerPath: P, ...x } = {}) {
      const O = P ?? a;
      return b.inject({ reducerPath: O, reducer: y }, x), { ...w, ...g(O, true) };
    } };
    return w;
  };
}
function lb(e2, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    return typeof u > "u" && n && (u = r()), e2(u, ...o);
  }
  return i.unwrapped = e2, i;
}
var $e = ub();
function cb() {
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
function sb({ type: e2, reducerName: t, createNotation: r }, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !db(n)) throw new Error(Ke(17));
    a = n.reducer, o = n.prepare;
  } else a = n;
  i.addCase(e2, a).exposeCaseReducer(t, a).exposeAction(t, o ? Qe(e2, o) : Qe(e2));
}
function fb(e2) {
  return e2._reducerDefinitionType === "asyncThunk";
}
function db(e2) {
  return e2._reducerDefinitionType === "reducerWithPrepare";
}
function vb({ type: e2, reducerName: t }, r, n, i) {
  if (!i) throw new Error(Ke(18));
  const { payloadCreator: a, fulfilled: o, pending: u, rejected: l, settled: s, options: c } = r, f = i(e2, a, c);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), l && n.addCase(f.rejected, l), s && n.addMatcher(f.settled, s), n.exposeCaseReducer(t, { fulfilled: o || Fn, pending: u || Fn, rejected: l || Fn, settled: s || Fn });
}
function Fn() {
}
var hb = "task", kv = "listener", Tv = "completed", Cu = "cancelled", pb = `task-${Cu}`, mb = `task-${Tv}`, Oo = `${kv}-${Cu}`, yb = `${kv}-${Tv}`, ca = class {
  constructor(e2) {
    __publicField(this, "name", "TaskAbortError");
    __publicField(this, "message");
    this.code = e2, this.message = `${hb} ${Cu} (reason: ${e2})`;
  }
}, ju = (e2, t) => {
  if (typeof e2 != "function") throw new TypeError(Ke(32));
}, hi = () => {
}, Iv = (e2, t = hi) => (e2.catch(t), e2), Dv = (e2, t) => (e2.addEventListener("abort", t, { once: true }), () => e2.removeEventListener("abort", t)), ar = (e2) => {
  if (e2.aborted) throw new ca(e2.reason);
};
function Nv(e2, t) {
  let r = hi;
  return new Promise((n, i) => {
    const a = () => i(new ca(e2.reason));
    if (e2.aborted) {
      a();
      return;
    }
    r = Dv(e2, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = hi;
  });
}
var gb = async (e2, t) => {
  try {
    return await Promise.resolve(), { status: "ok", value: await e2() };
  } catch (r) {
    return { status: r instanceof ca ? "cancelled" : "rejected", error: r };
  } finally {
    t == null ? void 0 : t();
  }
}, pi = (e2) => (t) => Iv(Nv(e2, t).then((r) => (ar(e2), r))), $v = (e2) => {
  const t = pi(e2);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, { assign: Or } = Object, vc = {}, sa = "listenerMiddleware", bb = (e2, t) => {
  const r = (n) => Dv(e2, () => n.abort(e2.reason));
  return (n, i) => {
    ju(n);
    const a = new AbortController();
    r(a);
    const o = gb(async () => {
      ar(e2), ar(a.signal);
      const u = await n({ pause: pi(a.signal), delay: $v(a.signal), signal: a.signal });
      return ar(a.signal), u;
    }, () => a.abort(mb));
    return (i == null ? void 0 : i.autoJoin) && t.push(o.catch(hi)), { result: pi(e2)(o), cancel() {
      a.abort(pb);
    } };
  };
}, wb = (e2, t) => {
  const r = async (n, i) => {
    ar(t);
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
      const l = await Nv(t, Promise.race(u));
      return ar(t), l;
    } finally {
      a();
    }
  };
  return (n, i) => Iv(r(n, i));
}, Lv = (e2) => {
  let { type: t, actionCreator: r, matcher: n, predicate: i, effect: a } = e2;
  if (t) i = Qe(t).match;
  else if (r) t = r.type, i = r.match;
  else if (n) i = n;
  else if (!i) throw new Error(Ke(21));
  return ju(a), { predicate: i, type: t, effect: a };
}, Rv = Or((e2) => {
  const { type: t, predicate: r, effect: n } = Lv(e2);
  return { id: ib(), effect: n, type: t, predicate: r, pending: /* @__PURE__ */ new Set(), unsubscribe: () => {
    throw new Error(Ke(22));
  } };
}, { withTypes: () => Rv }), hc = (e2, t) => {
  const { type: r, effect: n, predicate: i } = Lv(t);
  return Array.from(e2.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, So = (e2) => {
  e2.pending.forEach((t) => {
    t.abort(Oo);
  });
}, xb = (e2, t) => () => {
  for (const r of t.keys()) So(r);
  e2.clear();
}, pc = (e2, t, r) => {
  try {
    e2(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, zv = Or(Qe(`${sa}/add`), { withTypes: () => zv }), Pb = Qe(`${sa}/removeAll`), Bv = Or(Qe(`${sa}/remove`), { withTypes: () => Bv }), Ob = (...e2) => {
  console.error(`${sa}/error`, ...e2);
}, bn = (e2 = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (v) => {
    const p = r.get(v) ?? 0;
    r.set(v, p + 1);
  }, i = (v) => {
    const p = r.get(v) ?? 1;
    p === 1 ? r.delete(v) : r.set(v, p - 1);
  }, { extra: a, onError: o = Ob } = e2;
  ju(o);
  const u = (v) => (v.unsubscribe = () => t.delete(v.id), t.set(v.id, v), (p) => {
    v.unsubscribe(), (p == null ? void 0 : p.cancelActive) && So(v);
  }), l = (v) => {
    const p = hc(t, v) ?? Rv(v);
    return u(p);
  };
  Or(l, { withTypes: () => l });
  const s = (v) => {
    const p = hc(t, v);
    return p && (p.unsubscribe(), v.cancelActive && So(p)), !!p;
  };
  Or(s, { withTypes: () => s });
  const c = async (v, p, y, m) => {
    const g = new AbortController(), w = wb(l, g.signal), b = [];
    try {
      v.pending.add(g), n(v), await Promise.resolve(v.effect(p, Or({}, y, { getOriginalState: m, condition: (P, x) => w(P, x).then(Boolean), take: w, delay: $v(g.signal), pause: pi(g.signal), extra: a, signal: g.signal, fork: bb(g.signal, b), unsubscribe: v.unsubscribe, subscribe: () => {
        t.set(v.id, v);
      }, cancelActiveListeners: () => {
        v.pending.forEach((P, x, O) => {
          P !== g && (P.abort(Oo), O.delete(P));
        });
      }, cancel: () => {
        g.abort(Oo), v.pending.delete(g);
      }, throwIfCancelled: () => {
        ar(g.signal);
      } })));
    } catch (P) {
      P instanceof ca || pc(o, P, { raisedBy: "effect" });
    } finally {
      await Promise.all(b), g.abort(yb), i(v), v.pending.delete(g);
    }
  }, f = xb(t, r);
  return { middleware: (v) => (p) => (y) => {
    if (!pv(y)) return p(y);
    if (zv.match(y)) return l(y.payload);
    if (Pb.match(y)) {
      f();
      return;
    }
    if (Bv.match(y)) return s(y.payload);
    let m = v.getState();
    const g = () => {
      if (m === vc) throw new Error(Ke(23));
      return m;
    };
    let w;
    try {
      if (w = p(y), t.size > 0) {
        const b = v.getState(), P = Array.from(t.values());
        for (const x of P) {
          let O = false;
          try {
            O = x.predicate(y, b, m);
          } catch (A) {
            O = false, pc(o, A, { raisedBy: "predicate" });
          }
          O && c(x, y, v, g);
        }
      }
    } finally {
      m = vc;
    }
    return w;
  }, startListening: l, stopListening: s, clearListeners: f };
};
function Ke(e2) {
  return `Minified Redux Toolkit error #${e2}; visit https://redux-toolkit.js.org/Errors?code=${e2} for the full message or use the non-minified dev environment for full errors. `;
}
var Sb = { layoutType: "horizontal", width: 0, height: 0, margin: { top: 5, right: 5, bottom: 5, left: 5 }, scale: 1 }, Fv = $e({ name: "chartLayout", initialState: Sb, reducers: { setLayout(e2, t) {
  e2.layoutType = t.payload;
}, setChartSize(e2, t) {
  e2.width = t.payload.width, e2.height = t.payload.height;
}, setMargin(e2, t) {
  var r, n, i, a;
  e2.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e2.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e2.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e2.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
}, setScale(e2, t) {
  e2.scale = t.payload;
} } }), { setMargin: Ab, setLayout: _b, setChartSize: Eb, setScale: Cb } = Fv.actions, jb = Fv.reducer;
function Wv(e2, t, r) {
  return Array.isArray(e2) && e2 && t + r !== 0 ? e2.slice(t, r + 1) : e2;
}
function ae(e2) {
  return Number.isFinite(e2);
}
function ht(e2) {
  return typeof e2 == "number" && e2 > 0 && Number.isFinite(e2);
}
function mc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xr(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mc(Object(r), true).forEach(function(n) {
      Mb(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : mc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Mb(e2, t, r) {
  return (t = kb(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function kb(e2) {
  var t = Tb(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tb(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function xe(e2, t, r) {
  return pe(e2) || pe(t) ? r : vt(t) ? Ji(e2, t, r) : typeof t == "function" ? t(e2) : r;
}
var Ib = (e2, t, r) => {
  if (t && r) {
    var { width: n, height: i } = r, { align: a, verticalAlign: o, layout: u } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && I(e2[a])) return xr(xr({}, e2), {}, { [a]: e2[a] + (n || 0) });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && I(e2[o])) return xr(xr({}, e2), {}, { [o]: e2[o] + (i || 0) });
  }
  return e2;
}, qt = (e2, t) => e2 === "horizontal" && t === "xAxis" || e2 === "vertical" && t === "yAxis" || e2 === "centric" && t === "angleAxis" || e2 === "radial" && t === "radiusAxis", Uv = (e2, t, r, n) => {
  if (n) return e2.map((u) => u.coordinate);
  var i, a, o = e2.map((u) => (u.coordinate === t && (i = true), u.coordinate === r && (a = true), u.coordinate));
  return i || o.push(t), a || o.push(r), o;
}, Kv = (e2, t, r) => {
  if (!e2) return null;
  var { duplicateDomain: n, type: i, range: a, scale: o, realScaleType: u, isCategorical: l, categoricalDomain: s, tickCount: c, ticks: f, niceTicks: d, axisType: v } = e2;
  if (!o) return null;
  var p = u === "scaleBand" && o.bandwidth ? o.bandwidth() / 2 : 2, y = i === "category" && o.bandwidth ? o.bandwidth() / p : 0;
  if (y = v === "angleAxis" && a && a.length >= 2 ? Xe(a[0] - a[1]) * 2 * y : y, f || d) {
    var m = (f || d || []).map((g, w) => {
      var b = n ? n.indexOf(g) : g;
      return { coordinate: o(b) + y, value: g, offset: y, index: w };
    });
    return m.filter((g) => !dt(g.coordinate));
  }
  return l && s ? s.map((g, w) => ({ coordinate: o(g) + y, value: g, index: w, offset: y })) : o.ticks && c != null ? o.ticks(c).map((g, w) => ({ coordinate: o(g) + y, value: g, offset: y, index: w })) : o.domain().map((g, w) => ({ coordinate: o(g) + y, value: n ? n[g] : g, index: w, offset: y }));
}, yc = 1e-4, Db = (e2) => {
  var t = e2.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e2.range(), i = Math.min(n[0], n[1]) - yc, a = Math.max(n[0], n[1]) + yc, o = e2(t[0]), u = e2(t[r - 1]);
    (o < i || o > a || u < i || u > a) && e2.domain([t[0], t[r - 1]]);
  }
}, Nb = (e2) => {
  var t, r = e2.length;
  if (!(r <= 0)) {
    var n = (t = e2[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var a = 0, o = 0, u = 0; u < r; ++u) {
      var l = e2[u], s = l == null ? void 0 : l[i];
      if (s != null) {
        var c = s[1], f = s[0], d = dt(c) ? f : c;
        d >= 0 ? (s[0] = a, s[1] = a + d, a = c) : (s[0] = o, s[1] = o + d, o = c);
      }
    }
  }
}, $b = (e2) => {
  var t, r = e2.length;
  if (!(r <= 0)) {
    var n = (t = e2[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0)) for (var i = 0; i < n; ++i) for (var a = 0, o = 0; o < r; ++o) {
      var u = e2[o], l = u == null ? void 0 : u[i];
      if (l != null) {
        var s = dt(l[1]) ? l[0] : l[1];
        s >= 0 ? (l[0] = a, l[1] = a + s, a = l[1]) : (l[0] = 0, l[1] = 0);
      }
    }
  }
}, Lb = { sign: Nb, expand: Og, none: lr, silhouette: Sg, wiggle: Ag, positive: $b }, Rb = (e2, t, r) => {
  var n, i = (n = Lb[r]) !== null && n !== void 0 ? n : lr, a = Pg().keys(t).value((u, l) => Number(xe(u, l, 0))).order(vo).offset(i), o = a(e2);
  return o.forEach((u, l) => {
    u.forEach((s, c) => {
      var f = xe(e2[c], t[l], 0);
      Array.isArray(f) && f.length === 2 && I(f[0]) && I(f[1]) && (s[0] = f[0], s[1] = f[1]);
    });
  }), o;
};
function gc(e2) {
  var { axis: t, ticks: r, bandSize: n, entry: i, index: a, dataKey: o } = e2;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !pe(i[t.dataKey])) {
      var u = Nd(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = xe(i, pe(o) ? t.dataKey : o);
  return pe(l) ? null : t.scale(l);
}
var zb = (e2) => {
  var t = e2.flat(2).filter(I);
  return [Math.min(...t), Math.max(...t)];
}, Bb = (e2) => [e2[0] === 1 / 0 ? 0 : e2[0], e2[1] === -1 / 0 ? 0 : e2[1]], Fb = (e2, t, r) => {
  if (e2 != null) return Bb(Object.keys(e2).reduce((n, i) => {
    var a = e2[i];
    if (!a) return n;
    var { stackedData: o } = a, u = o.reduce((l, s) => {
      var c = Wv(s, t, r), f = zb(c);
      return !ae(f[0]) || !ae(f[1]) ? l : [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
  }, [1 / 0, -1 / 0]));
}, bc = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, wc = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, mi = (e2, t, r) => {
  if (e2 && e2.scale && e2.scale.bandwidth) {
    var n = e2.scale.bandwidth();
    if (!r || n > 0) return n;
  }
  if (e2 && t && t.length >= 2) {
    for (var i = ra(t, (c) => c.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var l = i[o], s = i[o - 1];
      a = Math.min(((l == null ? void 0 : l.coordinate) || 0) - ((s == null ? void 0 : s.coordinate) || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function xc(e2) {
  var { tooltipEntrySettings: t, dataKey: r, payload: n, value: i, name: a } = e2;
  return xr(xr({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
}
function Hv(e2, t) {
  if (e2) return String(e2);
  if (typeof t == "string") return t;
}
var Wb = (e2, t) => {
  if (t === "horizontal") return e2.chartX;
  if (t === "vertical") return e2.chartY;
}, Ub = (e2, t) => t === "centric" ? e2.angle : e2.radius, Mt = (e2) => e2.layout.width, kt = (e2) => e2.layout.height, Kb = (e2) => e2.layout.scale, qv = (e2) => e2.layout.margin, fa = S((e2) => e2.cartesianAxis.xAxis, (e2) => Object.values(e2)), da = S((e2) => e2.cartesianAxis.yAxis, (e2) => Object.values(e2)), Hb = "data-recharts-item-index", qb = "data-recharts-item-id", wn = 60;
function Pc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wn(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pc(Object(r), true).forEach(function(n) {
      Yb(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Pc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Yb(e2, t, r) {
  return (t = Gb(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Gb(e2) {
  var t = Vb(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Vb(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Xb = (e2) => e2.brush.height;
function Zb(e2) {
  var t = da(e2);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : wn;
      return r + i;
    }
    return r;
  }, 0);
}
function Qb(e2) {
  var t = da(e2);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : wn;
      return r + i;
    }
    return r;
  }, 0);
}
function Jb(e2) {
  var t = fa(e2);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function ew(e2) {
  var t = fa(e2);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Pe = S([Mt, kt, qv, Xb, Zb, Qb, Jb, ew, dv, E0], (e2, t, r, n, i, a, o, u, l, s) => {
  var c = { left: (r.left || 0) + i, right: (r.right || 0) + a }, f = { top: (r.top || 0) + o, bottom: (r.bottom || 0) + u }, d = Wn(Wn({}, f), c), v = d.bottom;
  d.bottom += n, d = Ib(d, l, s);
  var p = e2 - d.left - d.right, y = t - d.top - d.bottom;
  return Wn(Wn({ brushBottom: v }, d), {}, { width: Math.max(p, 0), height: Math.max(y, 0) });
}), tw = S(Pe, (e2) => ({ x: e2.left, y: e2.top, width: e2.width, height: e2.height })), Yv = S(Mt, kt, (e2, t) => ({ x: 0, y: 0, width: e2, height: t })), rw = h.createContext(null), Le = () => h.useContext(rw) != null, va = (e2) => e2.brush, ha = S([va, Pe, qv], (e2, t, r) => ({ height: e2.height, x: I(e2.x) ? e2.x : t.left, y: I(e2.y) ? e2.y : t.top + t.height + t.brushBottom - ((r == null ? void 0 : r.bottom) || 0), width: I(e2.width) ? e2.width : t.width })), Gv = {}, Vv = {}, Xv = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r, n, { signal: i, edges: a } = {}) {
    let o, u = null;
    const l = a != null && a.includes("leading"), s = a == null || a.includes("trailing"), c = () => {
      u !== null && (r.apply(o, u), o = void 0, u = null);
    }, f = () => {
      s && c(), y();
    };
    let d = null;
    const v = () => {
      d != null && clearTimeout(d), d = setTimeout(() => {
        d = null, f();
      }, n);
    }, p = () => {
      d !== null && (clearTimeout(d), d = null);
    }, y = () => {
      p(), o = void 0, u = null;
    }, m = () => {
      c();
    }, g = function(...w) {
      if (i == null ? void 0 : i.aborted) return;
      o = this, u = w;
      const b = d == null;
      v(), l && b && c();
    };
    return g.schedule = v, g.cancel = y, g.flush = m, i == null ? void 0 : i.addEventListener("abort", y, { once: true }), g;
  }
  e2.debounce = t;
})(Xv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Xv;
  function r(n, i = 0, a = {}) {
    typeof a != "object" && (a = {});
    const { leading: o = false, trailing: u = true, maxWait: l } = a, s = Array(2);
    o && (s[0] = "leading"), u && (s[1] = "trailing");
    let c, f = null;
    const d = t.debounce(function(...y) {
      c = n.apply(this, y), f = null;
    }, i, { edges: s }), v = function(...y) {
      return l != null && (f === null && (f = Date.now()), Date.now() - f >= l) ? (c = n.apply(this, y), f = Date.now(), d.cancel(), d.schedule(), c) : (d.apply(this, y), c);
    }, p = () => (d.flush(), c);
    return v.cancel = d.cancel, v.flush = p, v;
  }
  e2.debounce = r;
})(Vv);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = Vv;
  function r(n, i = 0, a = {}) {
    const { leading: o = true, trailing: u = true } = a;
    return t.debounce(n, i, { leading: o, maxWait: i, trailing: u });
  }
  e2.throttle = r;
})(Gv);
var nw = Gv.throttle;
const iw = Ht(nw);
var yi = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t)) if (r === void 0) console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
  else {
    var o = 0;
    console.warn(r.replace(/%s/g, () => i[o++]));
  }
}, Zv = (e2, t, r) => {
  var { width: n = "100%", height: i = "100%", aspect: a, maxHeight: o } = r, u = St(n) ? e2 : Number(n), l = St(i) ? t : Number(i);
  return a && a > 0 && (u ? l = u / a : l && (u = l * a), o && l != null && l > o && (l = o)), { calculatedWidth: u, calculatedHeight: l };
}, aw = { width: 0, height: 0, overflow: "visible" }, ow = { width: 0, overflowX: "visible" }, uw = { height: 0, overflowY: "visible" }, lw = {}, cw = (e2) => {
  var { width: t, height: r } = e2, n = St(t), i = St(r);
  return n && i ? aw : n ? ow : i ? uw : lw;
};
function sw(e2) {
  var { width: t, height: r, aspect: n } = e2, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = "100%", a = "100%") : i === void 0 ? i = n && n > 0 ? void 0 : "100%" : a === void 0 && (a = n && n > 0 ? void 0 : "100%"), { width: i, height: a };
}
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Ao.apply(null, arguments);
}
function Oc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sc(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oc(Object(r), true).forEach(function(n) {
      fw(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Oc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function fw(e2, t, r) {
  return (t = dw(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function dw(e2) {
  var t = vw(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vw(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Qv = h.createContext({ width: -1, height: -1 });
function hw(e2) {
  return ht(e2.width) && ht(e2.height);
}
function Jv(e2) {
  var { children: t, width: r, height: n } = e2, i = h.useMemo(() => ({ width: r, height: n }), [r, n]);
  return hw(i) ? h.createElement(Qv.Provider, { value: i }, t) : null;
}
var Mu = () => h.useContext(Qv), pw = h.forwardRef((e2, t) => {
  var { aspect: r, initialDimension: n = { width: -1, height: -1 }, width: i, height: a, minWidth: o = 0, minHeight: u, maxHeight: l, children: s, debounce: c = 0, id: f, className: d, onResize: v, style: p = {} } = e2, y = h.useRef(null), m = h.useRef();
  m.current = v, h.useImperativeHandle(t, () => y.current);
  var [g, w] = h.useState({ containerWidth: n.width, containerHeight: n.height }), b = h.useCallback((M, T) => {
    w((D) => {
      var E = Math.round(M), j = Math.round(T);
      return D.containerWidth === E && D.containerHeight === j ? D : { containerWidth: E, containerHeight: j };
    });
  }, []);
  h.useEffect(() => {
    if (y.current == null || typeof ResizeObserver > "u") return mn;
    var M = (j) => {
      var R, { width: L, height: U } = j[0].contentRect;
      b(L, U), (R = m.current) === null || R === void 0 || R.call(m, L, U);
    };
    c > 0 && (M = iw(M, c, { trailing: true, leading: false }));
    var T = new ResizeObserver(M), { width: D, height: E } = y.current.getBoundingClientRect();
    return b(D, E), T.observe(y.current), () => {
      T.disconnect();
    };
  }, [b, c]);
  var { containerWidth: P, containerHeight: x } = g;
  yi(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var { calculatedWidth: O, calculatedHeight: A } = Zv(P, x, { width: i, height: a, aspect: r, maxHeight: l });
  return yi(O != null && O > 0 || A != null && A > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, O, A, i, a, o, u, r), h.createElement("div", { id: f ? "".concat(f) : void 0, className: Y("recharts-responsive-container", d), style: Sc(Sc({}, p), {}, { width: i, height: a, minWidth: o, minHeight: u, maxHeight: l }), ref: y }, h.createElement("div", { style: cw({ width: i, height: a }) }, h.createElement(Jv, { width: O, height: A }, s)));
}), OT = h.forwardRef((e2, t) => {
  var r = Mu();
  if (ht(r.width) && ht(r.height)) return e2.children;
  var { width: n, height: i } = sw({ width: e2.width, height: e2.height, aspect: e2.aspect }), { calculatedWidth: a, calculatedHeight: o } = Zv(void 0, void 0, { width: n, height: i, aspect: e2.aspect, maxHeight: e2.maxHeight });
  return I(a) && I(o) ? h.createElement(Jv, { width: a, height: o }, e2.children) : h.createElement(pw, Ao({}, e2, { width: n, height: i, ref: t }));
});
function eh(e2) {
  if (e2) return { x: e2.x, y: e2.y, upperWidth: "upperWidth" in e2 ? e2.upperWidth : e2.width, lowerWidth: "lowerWidth" in e2 ? e2.lowerWidth : e2.width, width: e2.width, height: e2.height };
}
var pa = () => {
  var e2, t = Le(), r = N(tw), n = N(ha), i = (e2 = N(va)) === null || e2 === void 0 ? void 0 : e2.padding;
  return !t || !n || !i ? r : { width: n.width - i.left - i.right, height: n.height - i.top - i.bottom, x: i.left, y: i.top };
}, mw = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, brushBottom: 0 }, th = () => {
  var e2;
  return (e2 = N(Pe)) !== null && e2 !== void 0 ? e2 : mw;
}, rh = () => N(Mt), nh = () => N(kt), X = (e2) => e2.layout.layoutType, xn = () => N(X), yw = () => {
  var e2 = xn();
  return e2 !== void 0;
}, ma = (e2) => {
  var t = oe(), r = Le(), { width: n, height: i } = e2, a = Mu(), o = n, u = i;
  return a && (o = a.width > 0 ? a.width : n, u = a.height > 0 ? a.height : i), h.useEffect(() => {
    !r && ht(o) && ht(u) && t(Eb({ width: o, height: u }));
  }, [t, r, o, u]), null;
}, ih = Symbol.for("immer-nothing"), Ac = Symbol.for("immer-draftable"), He = Symbol.for("immer-state");
function rt(e2, ...t) {
  throw new Error(`[Immer] minified error nr: ${e2}. Full error at: https://bit.ly/3cXEKWf`);
}
var tn = Object.getPrototypeOf;
function Er(e2) {
  return !!e2 && !!e2[He];
}
function sr(e2) {
  var _a2;
  return e2 ? ah(e2) || Array.isArray(e2) || !!e2[Ac] || !!((_a2 = e2.constructor) == null ? void 0 : _a2[Ac]) || Pn(e2) || ga(e2) : false;
}
var gw = Object.prototype.constructor.toString(), _c = /* @__PURE__ */ new WeakMap();
function ah(e2) {
  if (!e2 || typeof e2 != "object") return false;
  const t = Object.getPrototypeOf(e2);
  if (t === null || t === Object.prototype) return true;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object) return true;
  if (typeof r != "function") return false;
  let n = _c.get(r);
  return n === void 0 && (n = Function.toString.call(r), _c.set(r, n)), n === gw;
}
function gi(e2, t, r = true) {
  ya(e2) === 0 ? (r ? Reflect.ownKeys(e2) : Object.keys(e2)).forEach((i) => {
    t(i, e2[i], e2);
  }) : e2.forEach((n, i) => t(i, n, e2));
}
function ya(e2) {
  const t = e2[He];
  return t ? t.type_ : Array.isArray(e2) ? 1 : Pn(e2) ? 2 : ga(e2) ? 3 : 0;
}
function _o(e2, t) {
  return ya(e2) === 2 ? e2.has(t) : Object.prototype.hasOwnProperty.call(e2, t);
}
function oh(e2, t, r) {
  const n = ya(e2);
  n === 2 ? e2.set(t, r) : n === 3 ? e2.add(r) : e2[t] = r;
}
function bw(e2, t) {
  return e2 === t ? e2 !== 0 || 1 / e2 === 1 / t : e2 !== e2 && t !== t;
}
function Pn(e2) {
  return e2 instanceof Map;
}
function ga(e2) {
  return e2 instanceof Set;
}
function Jt(e2) {
  return e2.copy_ || e2.base_;
}
function Eo(e2, t) {
  if (Pn(e2)) return new Map(e2);
  if (ga(e2)) return new Set(e2);
  if (Array.isArray(e2)) return Array.prototype.slice.call(e2);
  const r = ah(e2);
  if (t === true || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e2);
    delete n[He];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === false && (u.writable = true, u.configurable = true), (u.get || u.set) && (n[o] = { configurable: true, writable: true, enumerable: u.enumerable, value: e2[o] });
    }
    return Object.create(tn(e2), n);
  } else {
    const n = tn(e2);
    if (n !== null && r) return { ...e2 };
    const i = Object.create(n);
    return Object.assign(i, e2);
  }
}
function ku(e2, t = false) {
  return ba(e2) || Er(e2) || !sr(e2) || (ya(e2) > 1 && Object.defineProperties(e2, { set: Un, add: Un, clear: Un, delete: Un }), Object.freeze(e2), t && Object.values(e2).forEach((r) => ku(r, true))), e2;
}
function ww() {
  rt(2);
}
var Un = { value: ww };
function ba(e2) {
  return e2 === null || typeof e2 != "object" ? true : Object.isFrozen(e2);
}
var xw = {};
function fr(e2) {
  const t = xw[e2];
  return t || rt(0, e2), t;
}
var rn;
function uh() {
  return rn;
}
function Pw(e2, t) {
  return { drafts_: [], parent_: e2, immer_: t, canAutoFreeze_: true, unfinalizedDrafts_: 0 };
}
function Ec(e2, t) {
  t && (fr("Patches"), e2.patches_ = [], e2.inversePatches_ = [], e2.patchListener_ = t);
}
function Co(e2) {
  jo(e2), e2.drafts_.forEach(Ow), e2.drafts_ = null;
}
function jo(e2) {
  e2 === rn && (rn = e2.parent_);
}
function Cc(e2) {
  return rn = Pw(rn, e2);
}
function Ow(e2) {
  const t = e2[He];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = true;
}
function jc(e2, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e2 !== void 0 && e2 !== r ? (r[He].modified_ && (Co(t), rt(4)), sr(e2) && (e2 = bi(t, e2), t.parent_ || wi(t, e2)), t.patches_ && fr("Patches").generateReplacementPatches_(r[He].base_, e2, t.patches_, t.inversePatches_)) : e2 = bi(t, r, []), Co(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e2 !== ih ? e2 : void 0;
}
function bi(e2, t, r) {
  if (ba(t)) return t;
  const n = e2.immer_.shouldUseStrictIteration(), i = t[He];
  if (!i) return gi(t, (a, o) => Mc(e2, i, t, a, o, r), n), t;
  if (i.scope_ !== e2) return t;
  if (!i.modified_) return wi(e2, i.base_, true), i.base_;
  if (!i.finalized_) {
    i.finalized_ = true, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, u = false;
    i.type_ === 3 && (o = new Set(a), a.clear(), u = true), gi(o, (l, s) => Mc(e2, i, a, l, s, r, u), n), wi(e2, a, false), r && e2.patches_ && fr("Patches").generatePatches_(i, r, e2.patches_, e2.inversePatches_);
  }
  return i.copy_;
}
function Mc(e2, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o) return;
  const u = ba(i);
  if (!(u && !o)) {
    if (Er(i)) {
      const l = a && t && t.type_ !== 3 && !_o(t.assigned_, n) ? a.concat(n) : void 0, s = bi(e2, i, l);
      if (oh(r, n, s), Er(s)) e2.canAutoFreeze_ = false;
      else return;
    } else o && r.add(i);
    if (sr(i) && !u) {
      if (!e2.immer_.autoFreeze_ && e2.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && u) return;
      bi(e2, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Pn(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && wi(e2, i);
    }
  }
}
function wi(e2, t, r = false) {
  !e2.parent_ && e2.immer_.autoFreeze_ && e2.canAutoFreeze_ && ku(t, r);
}
function Sw(e2, t) {
  const r = Array.isArray(e2), n = { type_: r ? 1 : 0, scope_: t ? t.scope_ : uh(), modified_: false, finalized_: false, assigned_: {}, parent_: t, base_: e2, draft_: null, copy_: null, revoke_: null, isManual_: false };
  let i = n, a = Tu;
  r && (i = [n], a = nn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Tu = { get(e2, t) {
  if (t === He) return e2;
  const r = Jt(e2);
  if (!_o(r, t)) return Aw(e2, r, t);
  const n = r[t];
  return e2.finalized_ || !sr(n) ? n : n === Ka(e2.base_, t) ? (Ha(e2), e2.copy_[t] = ko(n, e2)) : n;
}, has(e2, t) {
  return t in Jt(e2);
}, ownKeys(e2) {
  return Reflect.ownKeys(Jt(e2));
}, set(e2, t, r) {
  const n = lh(Jt(e2), t);
  if (n == null ? void 0 : n.set) return n.set.call(e2.draft_, r), true;
  if (!e2.modified_) {
    const i = Ka(Jt(e2), t), a = i == null ? void 0 : i[He];
    if (a && a.base_ === r) return e2.copy_[t] = r, e2.assigned_[t] = false, true;
    if (bw(r, i) && (r !== void 0 || _o(e2.base_, t))) return true;
    Ha(e2), Mo(e2);
  }
  return e2.copy_[t] === r && (r !== void 0 || t in e2.copy_) || Number.isNaN(r) && Number.isNaN(e2.copy_[t]) || (e2.copy_[t] = r, e2.assigned_[t] = true), true;
}, deleteProperty(e2, t) {
  return Ka(e2.base_, t) !== void 0 || t in e2.base_ ? (e2.assigned_[t] = false, Ha(e2), Mo(e2)) : delete e2.assigned_[t], e2.copy_ && delete e2.copy_[t], true;
}, getOwnPropertyDescriptor(e2, t) {
  const r = Jt(e2), n = Reflect.getOwnPropertyDescriptor(r, t);
  return n && { writable: true, configurable: e2.type_ !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
}, defineProperty() {
  rt(11);
}, getPrototypeOf(e2) {
  return tn(e2.base_);
}, setPrototypeOf() {
  rt(12);
} }, nn = {};
gi(Tu, (e2, t) => {
  nn[e2] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
nn.deleteProperty = function(e2, t) {
  return nn.set.call(this, e2, t, void 0);
};
nn.set = function(e2, t, r) {
  return Tu.set.call(this, e2[0], t, r, e2[0]);
};
function Ka(e2, t) {
  const r = e2[He];
  return (r ? Jt(r) : e2)[t];
}
function Aw(e2, t, r) {
  var _a2;
  const n = lh(t, r);
  return n ? "value" in n ? n.value : (_a2 = n.get) == null ? void 0 : _a2.call(e2.draft_) : void 0;
}
function lh(e2, t) {
  if (!(t in e2)) return;
  let r = tn(e2);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n) return n;
    r = tn(r);
  }
}
function Mo(e2) {
  e2.modified_ || (e2.modified_ = true, e2.parent_ && Mo(e2.parent_));
}
function Ha(e2) {
  e2.copy_ || (e2.copy_ = Eo(e2.base_, e2.scope_.immer_.useStrictShallowCopy_));
}
var _w = class {
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
      typeof r != "function" && rt(6), n !== void 0 && typeof n != "function" && rt(7);
      let i;
      if (sr(t)) {
        const a = Cc(this), o = ko(t, void 0);
        let u = true;
        try {
          i = r(o), u = false;
        } finally {
          u ? Co(a) : jo(a);
        }
        return Ec(a, n), jc(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === ih && (i = void 0), this.autoFreeze_ && ku(i, true), n) {
          const a = [], o = [];
          fr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else rt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function") return (o, ...u) => this.produceWithPatches(o, (l) => t(l, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof (e2 == null ? void 0 : e2.autoFreeze) == "boolean" && this.setAutoFreeze(e2.autoFreeze), typeof (e2 == null ? void 0 : e2.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e2.useStrictShallowCopy), typeof (e2 == null ? void 0 : e2.useStrictIteration) == "boolean" && this.setUseStrictIteration(e2.useStrictIteration);
  }
  createDraft(e2) {
    sr(e2) || rt(8), Er(e2) && (e2 = Ew(e2));
    const t = Cc(this), r = ko(e2, void 0);
    return r[He].isManual_ = true, jo(t), r;
  }
  finishDraft(e2, t) {
    const r = e2 && e2[He];
    (!r || !r.isManual_) && rt(9);
    const { scope_: n } = r;
    return Ec(n, t), jc(void 0, n);
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
    const n = fr("Patches").applyPatches_;
    return Er(e2) ? n(e2, t) : this.produce(e2, (i) => n(i, t));
  }
};
function ko(e2, t) {
  const r = Pn(e2) ? fr("MapSet").proxyMap_(e2, t) : ga(e2) ? fr("MapSet").proxySet_(e2, t) : Sw(e2, t);
  return (t ? t.scope_ : uh()).drafts_.push(r), r;
}
function Ew(e2) {
  return Er(e2) || rt(10, e2), ch(e2);
}
function ch(e2) {
  if (!sr(e2) || ba(e2)) return e2;
  const t = e2[He];
  let r, n = true;
  if (t) {
    if (!t.modified_) return t.base_;
    t.finalized_ = true, r = Eo(e2, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else r = Eo(e2, true);
  return gi(r, (i, a) => {
    oh(r, i, ch(a));
  }, n), t && (t.finalized_ = false), r;
}
var Cw = new _w();
Cw.produce;
var jw = { settings: { layout: "horizontal", align: "center", verticalAlign: "middle", itemSorter: "value" }, size: { width: 0, height: 0 }, payload: [] }, sh = $e({ name: "legend", initialState: jw, reducers: { setLegendSize(e2, t) {
  e2.size.width = t.payload.width, e2.size.height = t.payload.height;
}, setLegendSettings(e2, t) {
  e2.settings.align = t.payload.align, e2.settings.layout = t.payload.layout, e2.settings.verticalAlign = t.payload.verticalAlign, e2.settings.itemSorter = t.payload.itemSorter;
}, addLegendPayload: { reducer(e2, t) {
  e2.payload.push(t.payload);
}, prepare: J() }, replaceLegendPayload: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload, i = it(e2).payload.indexOf(r);
  i > -1 && (e2.payload[i] = n);
}, prepare: J() }, removeLegendPayload: { reducer(e2, t) {
  var r = it(e2).payload.indexOf(t.payload);
  r > -1 && e2.payload.splice(r, 1);
}, prepare: J() } } }), { setLegendSize: ST, setLegendSettings: AT, addLegendPayload: fh, replaceLegendPayload: dh, removeLegendPayload: vh } = sh.actions, Mw = sh.reducer;
function To() {
  return To = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, To.apply(null, arguments);
}
function kc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qa(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kc(Object(r), true).forEach(function(n) {
      kw(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : kc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function kw(e2, t, r) {
  return (t = Tw(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Tw(e2) {
  var t = Iw(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Iw(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Dw(e2) {
  return Array.isArray(e2) && vt(e2[0]) && vt(e2[1]) ? e2.join(" ~ ") : e2;
}
var Nw = (e2) => {
  var { separator: t = " : ", contentStyle: r = {}, itemStyle: n = {}, labelStyle: i = {}, payload: a, formatter: o, itemSorter: u, wrapperClassName: l, labelClassName: s, label: c, labelFormatter: f, accessibilityLayer: d = false } = e2, v = () => {
    if (a && a.length) {
      var x = { padding: 0, margin: 0 }, O = (u ? ra(a, u) : a).map((A, M) => {
        if (A.type === "none") return null;
        var T = A.formatter || o || Dw, { value: D, name: E } = A, j = D, R = E;
        if (T) {
          var L = T(D, E, A, M, a);
          if (Array.isArray(L)) [j, R] = L;
          else if (L != null) j = L;
          else return null;
        }
        var U = qa({ display: "block", paddingTop: 4, paddingBottom: 4, color: A.color || "#000" }, n);
        return h.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: U }, vt(R) ? h.createElement("span", { className: "recharts-tooltip-item-name" }, R) : null, vt(R) ? h.createElement("span", { className: "recharts-tooltip-item-separator" }, t) : null, h.createElement("span", { className: "recharts-tooltip-item-value" }, j), h.createElement("span", { className: "recharts-tooltip-item-unit" }, A.unit || ""));
      });
      return h.createElement("ul", { className: "recharts-tooltip-item-list", style: x }, O);
    }
    return null;
  }, p = qa({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, r), y = qa({ margin: 0 }, i), m = !pe(c), g = m ? c : "", w = Y("recharts-default-tooltip", l), b = Y("recharts-tooltip-label", s);
  m && f && a !== void 0 && a !== null && (g = f(c, a));
  var P = d ? { role: "status", "aria-live": "assertive" } : {};
  return h.createElement("div", To({ className: w, style: p }, P), h.createElement("p", { className: b, style: y }, h.isValidElement(g) ? g : "".concat(g)), v());
}, Br = "recharts-tooltip-wrapper", $w = { visibility: "hidden" };
function Lw(e2) {
  var { coordinate: t, translateX: r, translateY: n } = e2;
  return Y(Br, { ["".concat(Br, "-right")]: I(r) && t && I(t.x) && r >= t.x, ["".concat(Br, "-left")]: I(r) && t && I(t.x) && r < t.x, ["".concat(Br, "-bottom")]: I(n) && t && I(t.y) && n >= t.y, ["".concat(Br, "-top")]: I(n) && t && I(t.y) && n < t.y });
}
function Tc(e2) {
  var { allowEscapeViewBox: t, coordinate: r, key: n, offsetTopLeft: i, position: a, reverseDirection: o, tooltipDimension: u, viewBox: l, viewBoxDimension: s } = e2;
  if (a && I(a[n])) return a[n];
  var c = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n]) return o[n] ? c : f;
  var d = l[n];
  if (d == null) return 0;
  if (o[n]) {
    var v = c, p = d;
    return v < p ? Math.max(f, d) : Math.max(c, d);
  }
  if (s == null) return 0;
  var y = f + u, m = d + s;
  return y > m ? Math.max(c, d) : Math.max(f, d);
}
function Rw(e2) {
  var { translateX: t, translateY: r, useTranslate3d: n } = e2;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function zw(e2) {
  var { allowEscapeViewBox: t, coordinate: r, offsetTopLeft: n, position: i, reverseDirection: a, tooltipBox: o, useTranslate3d: u, viewBox: l } = e2, s, c, f;
  return o.height > 0 && o.width > 0 && r ? (c = Tc({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: l, viewBoxDimension: l.width }), f = Tc({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: l, viewBoxDimension: l.height }), s = Rw({ translateX: c, translateY: f, useTranslate3d: u })) : s = $w, { cssProperties: s, cssClasses: Lw({ translateX: c, translateY: f, coordinate: r }) };
}
function Ic(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kn(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ic(Object(r), true).forEach(function(n) {
      Io(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Ic(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Io(e2, t, r) {
  return (t = Bw(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Bw(e2) {
  var t = Fw(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Fw(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
class Ww extends h.PureComponent {
  constructor() {
    super(...arguments), Io(this, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 } }), Io(this, "handleKeyDown", (t) => {
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
    var { active: t, allowEscapeViewBox: r, animationDuration: n, animationEasing: i, children: a, coordinate: o, hasPayload: u, isAnimationActive: l, offset: s, position: c, reverseDirection: f, useTranslate3d: d, viewBox: v, wrapperStyle: p, lastBoundingBox: y, innerRef: m, hasPortalFromProps: g } = this.props, { cssClasses: w, cssProperties: b } = zw({ allowEscapeViewBox: r, coordinate: o, offsetTopLeft: s, position: c, reverseDirection: f, tooltipBox: { height: y.height, width: y.width }, useTranslate3d: d, viewBox: v }), P = g ? {} : Kn(Kn({ transition: l && t ? "transform ".concat(n, "ms ").concat(i) : void 0 }, b), {}, { pointerEvents: "none", visibility: !this.state.dismissed && t && u ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }), x = Kn(Kn({}, P), {}, { visibility: !this.state.dismissed && t && u ? "visible" : "hidden" }, p);
    return h.createElement("div", { xmlns: "http://www.w3.org/1999/xhtml", tabIndex: -1, className: w, style: x, ref: m }, a);
  }
}
var hh = () => {
  var e2;
  return (e2 = N((t) => t.rootProps.accessibilityLayer)) !== null && e2 !== void 0 ? e2 : true;
};
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Do.apply(null, arguments);
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
      Uw(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Dc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Uw(e2, t, r) {
  return (t = Kw(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Kw(e2) {
  var t = Hw(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Hw(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var $c = { curveBasisClosed: fg, curveBasisOpen: dg, curveBasis: sg, curveBumpX: Xy, curveBumpY: Zy, curveLinearClosed: vg, curveLinear: Gi, curveMonotoneX: hg, curveMonotoneY: pg, curveNatural: mg, curveStep: yg, curveStepAfter: bg, curveStepBefore: gg }, xi = (e2) => ae(e2.x) && ae(e2.y), Lc = (e2) => e2.base != null && xi(e2.base) && xi(e2), Fr = (e2) => e2.x, Wr = (e2) => e2.y, qw = (e2, t) => {
  if (typeof e2 == "function") return e2;
  var r = "curve".concat(pn(e2));
  return (r === "curveMonotone" || r === "curveBump") && t ? $c["".concat(r).concat(t === "vertical" ? "Y" : "X")] : $c[r] || Gi;
}, Yw = (e2) => {
  var { type: t = "linear", points: r = [], baseLine: n, layout: i, connectNulls: a = false } = e2, o = qw(t, i), u = a ? r.filter(xi) : r, l;
  if (Array.isArray(n)) {
    var s = r.map((v, p) => Nc(Nc({}, v), {}, { base: n[p] }));
    i === "vertical" ? l = $n().y(Wr).x1(Fr).x0((v) => v.base.x) : l = $n().x(Fr).y1(Wr).y0((v) => v.base.y);
    var c = l.defined(Lc).curve(o), f = a ? s.filter(Lc) : s;
    return c(f);
  }
  i === "vertical" && I(n) ? l = $n().y(Wr).x1(Fr).x0(n) : I(n) ? l = $n().x(Fr).y1(Wr).y0(n) : l = xd().x(Fr).y(Wr);
  var d = l.defined(xi).curve(o);
  return d(u);
}, ph = (e2) => {
  var { className: t, points: r, path: n, pathRef: i } = e2, a = xn();
  if ((!r || !r.length) && !n) return null;
  var o = { type: e2.type, points: e2.points, baseLine: e2.baseLine, layout: e2.layout || a, connectNulls: e2.connectNulls }, u = r && r.length ? Yw(o) : n;
  return h.createElement("path", Do({}, ft(e2), cu(e2), { className: Y("recharts-curve", t), d: u === null ? void 0 : u, ref: i }));
}, Gw = ["x", "y", "top", "left", "width", "height", "className"];
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, No.apply(null, arguments);
}
function Rc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vw(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rc(Object(r), true).forEach(function(n) {
      Xw(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Rc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Xw(e2, t, r) {
  return (t = Zw(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Zw(e2) {
  var t = Qw(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qw(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Jw(e2, t) {
  if (e2 == null) return {};
  var r, n, i = ex(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function ex(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var tx = (e2, t, r, n, i, a) => "M".concat(e2, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), rx = (e2) => {
  var { x: t = 0, y: r = 0, top: n = 0, left: i = 0, width: a = 0, height: o = 0, className: u } = e2, l = Jw(e2, Gw), s = Vw({ x: t, y: r, top: n, left: i, width: a, height: o }, l);
  return !I(t) || !I(r) || !I(a) || !I(o) || !I(n) || !I(i) ? null : h.createElement("path", No({}, _e(s), { className: Y("recharts-cross", u), d: tx(t, r, a, o, n, i) }));
};
function nx(e2, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e2 === "horizontal" ? t.x - i : r.left + 0.5, y: e2 === "horizontal" ? r.top + 0.5 : t.y - i, width: e2 === "horizontal" ? n : r.width - 1, height: e2 === "horizontal" ? r.height - 1 : n };
}
function zc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bc(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zc(Object(r), true).forEach(function(n) {
      ix(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : zc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function ix(e2, t, r) {
  return (t = ax(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function ax(e2) {
  var t = ox(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ox(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var ux = (e2) => e2.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), mh = (e2, t, r) => e2.map((n) => "".concat(ux(n), " ").concat(t, "ms ").concat(r)).join(","), lx = (e2, t) => [Object.keys(e2), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), an = (e2, t) => Object.keys(t).reduce((r, n) => Bc(Bc({}, r), {}, { [n]: e2(n, t[n]) }), {});
function Fc(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ue(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fc(Object(r), true).forEach(function(n) {
      cx(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function cx(e2, t, r) {
  return (t = sx(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function sx(e2) {
  var t = fx(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fx(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Pi = (e2, t, r) => e2 + (t - e2) * r, $o = (e2) => {
  var { from: t, to: r } = e2;
  return t !== r;
}, yh = (e2, t, r) => {
  var n = an((i, a) => {
    if ($o(a)) {
      var [o, u] = e2(a.from, a.to, a.velocity);
      return ue(ue({}, a), {}, { from: o, velocity: u });
    }
    return a;
  }, t);
  return r < 1 ? an((i, a) => $o(a) && n[i] != null ? ue(ue({}, a), {}, { velocity: Pi(a.velocity, n[i].velocity, r), from: Pi(a.from, n[i].from, r) }) : a, t) : yh(e2, n, r - 1);
};
function dx(e2, t, r, n, i, a) {
  var o, u = n.reduce((d, v) => ue(ue({}, d), {}, { [v]: { from: e2[v], velocity: 0, to: t[v] } }), {}), l = () => an((d, v) => v.from, u), s = () => !Object.values(u).filter($o).length, c = null, f = (d) => {
    o || (o = d);
    var v = d - o, p = v / r.dt;
    u = yh(r, u, p), i(ue(ue(ue({}, e2), t), l())), o = d, s() || (c = a.setTimeout(f));
  };
  return () => (c = a.setTimeout(f), () => {
    var d;
    (d = c) === null || d === void 0 || d();
  });
}
function vx(e2, t, r, n, i, a, o) {
  var u = null, l = i.reduce((f, d) => {
    var v = e2[d], p = t[d];
    return v == null || p == null ? f : ue(ue({}, f), {}, { [d]: [v, p] });
  }, {}), s, c = (f) => {
    s || (s = f);
    var d = (f - s) / n, v = an((y, m) => Pi(...m, r(d)), l);
    if (a(ue(ue(ue({}, e2), t), v)), d < 1) u = o.setTimeout(c);
    else {
      var p = an((y, m) => Pi(...m, r(1)), l);
      a(ue(ue(ue({}, e2), t), p));
    }
  };
  return () => (u = o.setTimeout(c), () => {
    var f;
    (f = u) === null || f === void 0 || f();
  });
}
const hx = (e2, t, r, n, i, a) => {
  var o = lx(e2, t);
  return r == null ? () => (i(ue(ue({}, e2), t)), () => {
  }) : r.isStepper === true ? dx(e2, t, r, o, i, a) : vx(e2, t, r, n, o, i, a);
};
var Oi = 1e-4, gh = (e2, t) => [0, 3 * e2, 3 * t - 6 * e2, 3 * e2 - 3 * t + 1], bh = (e2, t) => e2.map((r, n) => r * t ** n).reduce((r, n) => r + n), Wc = (e2, t) => (r) => {
  var n = gh(e2, t);
  return bh(n, r);
}, px = (e2, t) => (r) => {
  var n = gh(e2, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return bh(i, r);
}, mx = (e2) => {
  var t, r = e2.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier") return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4) return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, yx = function() {
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
      var i = mx(r[0]);
      if (i) return i;
    }
  }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, gx = (e2, t, r, n) => {
  var i = Wc(e2, r), a = Wc(t, n), o = px(e2, r), u = (s) => s > 1 ? 1 : s < 0 ? 0 : s, l = (s) => {
    for (var c = s > 1 ? 1 : s, f = c, d = 0; d < 8; ++d) {
      var v = i(f) - c, p = o(f);
      if (Math.abs(v - c) < Oi || p < Oi) return a(f);
      f = u(f - v / p);
    }
    return a(f);
  };
  return l.isStepper = false, l;
}, Uc = function() {
  return gx(...yx(...arguments));
}, bx = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, { stiff: r = 100, damping: n = 8, dt: i = 17 } = t, a = (o, u, l) => {
    var s = -(o - u) * r, c = l * n, f = l + (s - c) * i / 1e3, d = l * i / 1e3 + o;
    return Math.abs(d - u) < Oi && Math.abs(f) < Oi ? [u, 0] : [d, f];
  };
  return a.isStepper = true, a.dt = i, a;
}, wx = (e2) => {
  if (typeof e2 == "string") switch (e2) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Uc(e2);
    case "spring":
      return bx();
    default:
      if (e2.split("(")[0] === "cubic-bezier") return Uc(e2);
  }
  return typeof e2 == "function" ? e2 : null;
};
function xx(e2) {
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
class Px {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function Ox() {
  return xx(new Px());
}
var Sx = h.createContext(Ox);
function Ax(e2, t) {
  var r = h.useContext(Sx);
  return h.useMemo(() => t ?? r(e2), [e2, t, r]);
}
var _x = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), wa = { isSsr: _x() }, Ex = { begin: 0, duration: 1e3, easing: "ease", isActive: true, canBegin: true, onAnimationEnd: () => {
}, onAnimationStart: () => {
} }, Kc = { t: 0 }, Ya = { t: 1 };
function Iu(e2) {
  var t = Ne(e2, Ex), { isActive: r, canBegin: n, duration: i, easing: a, begin: o, onAnimationEnd: u, onAnimationStart: l, children: s } = t, c = r === "auto" ? !wa.isSsr : r, f = Ax(t.animationId, t.animationManager), [d, v] = h.useState(c ? Kc : Ya), p = h.useRef(null);
  return h.useEffect(() => {
    c || v(Ya);
  }, [c]), h.useEffect(() => {
    if (!c || !n) return mn;
    var y = hx(Kc, Ya, wx(a), i, v, f.getTimeoutController()), m = () => {
      p.current = y();
    };
    return f.start([l, o, m, i, u]), () => {
      f.stop(), p.current && p.current(), u();
    };
  }, [c, n, i, a, o, l, u, f]), s(d.t);
}
function Du(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = h.useRef(Zr(t)), n = h.useRef(e2);
  return n.current !== e2 && (r.current = Zr(t), n.current = e2), r.current;
}
var Cx = ["radius"], jx = ["radius"], Hc, qc, Yc, Gc, Vc, Xc, Zc, Qc, Jc, es;
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
function rs(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ts(Object(r), true).forEach(function(n) {
      Mx(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Mx(e2, t, r) {
  return (t = kx(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function kx(e2) {
  var t = Tx(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Tx(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Si() {
  return Si = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Si.apply(null, arguments);
}
function ns(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Ix(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Ix(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function ut(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var is = (e2, t, r, n, i) => {
  var a = Bt(r), o = Bt(n), u = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), l = o >= 0 ? 1 : -1, s = a >= 0 ? 1 : -1, c = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, f;
  if (u > 0 && i instanceof Array) {
    for (var d = [0, 0, 0, 0], v = 0, p = 4; v < p; v++) d[v] = i[v] > u ? u : i[v];
    f = te(Hc || (Hc = ut(["M", ",", ""])), e2, t + l * d[0]), d[0] > 0 && (f += te(qc || (qc = ut(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], c, e2 + s * d[0], t)), f += te(Yc || (Yc = ut(["L ", ",", ""])), e2 + r - s * d[1], t), d[1] > 0 && (f += te(Gc || (Gc = ut(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], c, e2 + r, t + l * d[1])), f += te(Vc || (Vc = ut(["L ", ",", ""])), e2 + r, t + n - l * d[2]), d[2] > 0 && (f += te(Xc || (Xc = ut(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], c, e2 + r - s * d[2], t + n)), f += te(Zc || (Zc = ut(["L ", ",", ""])), e2 + s * d[3], t + n), d[3] > 0 && (f += te(Qc || (Qc = ut(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], c, e2, t + n - l * d[3])), f += "Z";
  } else if (u > 0 && i === +i && i > 0) {
    var y = Math.min(u, i);
    f = te(Jc || (Jc = ut(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e2, t + l * y, y, y, c, e2 + s * y, t, e2 + r - s * y, t, y, y, c, e2 + r, t + l * y, e2 + r, t + n - l * y, y, y, c, e2 + r - s * y, t + n, e2 + s * y, t + n, y, y, c, e2, t + n - l * y);
  } else f = te(es || (es = ut(["M ", ",", " h ", " v ", " h ", " Z"])), e2, t, r, n, -r);
  return f;
}, as = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, wh = (e2) => {
  var t = Ne(e2, as), r = h.useRef(null), [n, i] = h.useState(-1);
  h.useEffect(() => {
    if (r.current && r.current.getTotalLength) try {
      var B = r.current.getTotalLength();
      B && i(B);
    } catch {
    }
  }, []);
  var { x: a, y: o, width: u, height: l, radius: s, className: c } = t, { animationEasing: f, animationDuration: d, animationBegin: v, isAnimationActive: p, isUpdateAnimationActive: y } = t, m = h.useRef(u), g = h.useRef(l), w = h.useRef(a), b = h.useRef(o), P = h.useMemo(() => ({ x: a, y: o, width: u, height: l, radius: s }), [a, o, u, l, s]), x = Du(P, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || l !== +l || u === 0 || l === 0) return null;
  var O = Y("recharts-rectangle", c);
  if (!y) {
    var A = _e(t), { radius: M } = A, T = ns(A, Cx);
    return h.createElement("path", Si({}, T, { x: Bt(a), y: Bt(o), width: Bt(u), height: Bt(l), radius: typeof s == "number" ? s : void 0, className: O, d: is(a, o, u, l, s) }));
  }
  var D = m.current, E = g.current, j = w.current, R = b.current, L = "0px ".concat(n === -1 ? 1 : n, "px"), U = "".concat(n, "px 0px"), Z = mh(["strokeDasharray"], d, typeof f == "string" ? f : as.animationEasing);
  return h.createElement(Iu, { animationId: x, key: x, canBegin: n > 0, duration: d, easing: f, isActive: y, begin: v }, (B) => {
    var H = Ie(D, u, B), $ = Ie(E, l, B), je = Ie(j, a, B), Re = Ie(R, o, B);
    r.current && (m.current = H, g.current = $, w.current = je, b.current = Re);
    var Me;
    p ? B > 0 ? Me = { transition: Z, strokeDasharray: U } : Me = { strokeDasharray: L } : Me = { strokeDasharray: U };
    var mt = _e(t), { radius: qe } = mt, Xt = ns(mt, jx);
    return h.createElement("path", Si({}, Xt, { radius: typeof s == "number" ? s : void 0, className: O, d: is(je, Re, H, $, s), ref: r, style: rs(rs({}, Me), t.style) }));
  });
};
function os(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function us(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? os(Object(r), true).forEach(function(n) {
      Dx(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : os(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Dx(e2, t, r) {
  return (t = Nx(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Nx(e2) {
  var t = $x(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $x(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Ai = Math.PI / 180, _T = (e2) => e2 * Math.PI / 180, Lx = (e2) => e2 * 180 / Math.PI, be = (e2, t, r, n) => ({ x: e2 + Math.cos(-Ai * n) * r, y: t + Math.sin(-Ai * n) * r }), Rx = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, zx = (e2, t) => {
  var { x: r, y: n } = e2, { x: i, y: a } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, Bx = (e2, t) => {
  var { x: r, y: n } = e2, { cx: i, cy: a } = t, o = zx({ x: r, y: n }, { x: i, y: a });
  if (o <= 0) return { radius: o, angle: 0 };
  var u = (r - i) / o, l = Math.acos(u);
  return n > a && (l = 2 * Math.PI - l), { radius: o, angle: Lx(l), angleInRadian: l };
}, Fx = (e2) => {
  var { startAngle: t, endAngle: r } = e2, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return { startAngle: t - a * 360, endAngle: r - a * 360 };
}, Wx = (e2, t) => {
  var { startAngle: r, endAngle: n } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e2 + o * 360;
}, Ux = (e2, t) => {
  var { chartX: r, chartY: n } = e2, { radius: i, angle: a } = Bx({ x: r, y: n }, t), { innerRadius: o, outerRadius: u } = t;
  if (i < o || i > u || i === 0) return null;
  var { startAngle: l, endAngle: s } = Fx(t), c = a, f;
  if (l <= s) {
    for (; c > s; ) c -= 360;
    for (; c < l; ) c += 360;
    f = c >= l && c <= s;
  } else {
    for (; c > l; ) c -= 360;
    for (; c < s; ) c += 360;
    f = c >= s && c <= l;
  }
  return f ? us(us({}, t), {}, { radius: i, angle: Wx(c, t) }) : null;
}, ET = (e2) => !h.isValidElement(e2) && typeof e2 != "function" && typeof e2 != "boolean" && e2 != null ? e2.className : "";
function xh(e2) {
  var { cx: t, cy: r, radius: n, startAngle: i, endAngle: a } = e2, o = be(t, r, n, i), u = be(t, r, n, a);
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
var ls, cs, ss, fs, ds, vs, hs;
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Lo.apply(null, arguments);
}
function tr(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var Kx = (e2, t) => {
  var r = Xe(t - e2), n = Math.min(Math.abs(t - e2), 359.999);
  return r * n;
}, Hn = (e2) => {
  var { cx: t, cy: r, radius: n, angle: i, sign: a, isExternal: o, cornerRadius: u, cornerIsExternal: l } = e2, s = u * (o ? 1 : -1) + n, c = Math.asin(u / s) / Ai, f = l ? i : i + a * c, d = be(t, r, s, f), v = be(t, r, n, f), p = l ? i - a * c : i, y = be(t, r, s * Math.cos(c * Ai), p);
  return { center: d, circleTangency: v, lineTangency: y, theta: c };
}, Ph = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o } = e2, u = Kx(a, o), l = a + u, s = be(t, r, i, a), c = be(t, r, i, l), f = te(ls || (ls = tr(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), s.x, s.y, i, i, +(Math.abs(u) > 180), +(a > l), c.x, c.y);
  if (n > 0) {
    var d = be(t, r, n, a), v = be(t, r, n, l);
    f += te(cs || (cs = tr(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), v.x, v.y, n, n, +(Math.abs(u) > 180), +(a <= l), d.x, d.y);
  } else f += te(ss || (ss = tr(["L ", ",", " Z"])), t, r);
  return f;
}, Hx = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, cornerRadius: a, forceCornerRadius: o, cornerIsExternal: u, startAngle: l, endAngle: s } = e2, c = Xe(s - l), { circleTangency: f, lineTangency: d, theta: v } = Hn({ cx: t, cy: r, radius: i, angle: l, sign: c, cornerRadius: a, cornerIsExternal: u }), { circleTangency: p, lineTangency: y, theta: m } = Hn({ cx: t, cy: r, radius: i, angle: s, sign: -c, cornerRadius: a, cornerIsExternal: u }), g = u ? Math.abs(l - s) : Math.abs(l - s) - v - m;
  if (g < 0) return o ? te(fs || (fs = tr(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : Ph({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: l, endAngle: s });
  var w = te(ds || (ds = tr(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(c < 0), f.x, f.y, i, i, +(g > 180), +(c < 0), p.x, p.y, a, a, +(c < 0), y.x, y.y);
  if (n > 0) {
    var { circleTangency: b, lineTangency: P, theta: x } = Hn({ cx: t, cy: r, radius: n, angle: l, sign: c, isExternal: true, cornerRadius: a, cornerIsExternal: u }), { circleTangency: O, lineTangency: A, theta: M } = Hn({ cx: t, cy: r, radius: n, angle: s, sign: -c, isExternal: true, cornerRadius: a, cornerIsExternal: u }), T = u ? Math.abs(l - s) : Math.abs(l - s) - x - M;
    if (T < 0 && a === 0) return "".concat(w, "L").concat(t, ",").concat(r, "Z");
    w += te(vs || (vs = tr(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), A.x, A.y, a, a, +(c < 0), O.x, O.y, n, n, +(T > 180), +(c > 0), b.x, b.y, a, a, +(c < 0), P.x, P.y);
  } else w += te(hs || (hs = tr(["L", ",", "Z"])), t, r);
  return w;
}, qx = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, Oh = (e2) => {
  var t = Ne(e2, qx), { cx: r, cy: n, innerRadius: i, outerRadius: a, cornerRadius: o, forceCornerRadius: u, cornerIsExternal: l, startAngle: s, endAngle: c, className: f } = t;
  if (a < i || s === c) return null;
  var d = Y("recharts-sector", f), v = a - i, p = Ut(o, v, 0, true), y;
  return p > 0 && Math.abs(s - c) < 360 ? y = Hx({ cx: r, cy: n, innerRadius: i, outerRadius: a, cornerRadius: Math.min(p, v / 2), forceCornerRadius: u, cornerIsExternal: l, startAngle: s, endAngle: c }) : y = Ph({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: s, endAngle: c }), h.createElement("path", Lo({}, _e(t), { className: d, d: y }));
};
function Yx(e2, t, r) {
  if (e2 === "horizontal") return [{ x: t.x, y: r.top }, { x: t.x, y: r.top + r.height }];
  if (e2 === "vertical") return [{ x: r.left, y: t.y }, { x: r.left + r.width, y: t.y }];
  if (Rd(t)) {
    if (e2 === "centric") {
      var { cx: n, cy: i, innerRadius: a, outerRadius: o, angle: u } = t, l = be(n, i, a, u), s = be(n, i, o, u);
      return [{ x: l.x, y: l.y }, { x: s.x, y: s.y }];
    }
    return xh(t);
  }
}
var Sh = {}, Ah = {}, _h = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = wu;
  function r(n) {
    return t.isSymbol(n) ? NaN : Number(n);
  }
  e2.toNumber = r;
})(_h);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = _h;
  function r(n) {
    return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
  }
  e2.toFinite = r;
})(Ah);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = xu, r = Ah;
  function n(i, a, o) {
    o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
    const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), l = new Array(u);
    for (let s = 0; s < u; s++) l[s] = i, i += o;
    return l;
  }
  e2.range = n;
})(Sh);
var Gx = Sh.range;
const Eh = Ht(Gx);
function Ft(e2, t) {
  return e2 == null || t == null ? NaN : e2 < t ? -1 : e2 > t ? 1 : e2 >= t ? 0 : NaN;
}
function Vx(e2, t) {
  return e2 == null || t == null ? NaN : t < e2 ? -1 : t > e2 ? 1 : t >= e2 ? 0 : NaN;
}
function Nu(e2) {
  let t, r, n;
  e2.length !== 2 ? (t = Ft, r = (u, l) => Ft(e2(u), l), n = (u, l) => e2(u) - l) : (t = e2 === Ft || e2 === Vx ? e2 : Xx, r = e2, n = e2);
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
function Xx() {
  return 0;
}
function Ch(e2) {
  return e2 === null ? NaN : +e2;
}
function* Zx(e2, t) {
  for (let r of e2) r != null && (r = +r) >= r && (yield r);
}
const Qx = Nu(Ft), On = Qx.right;
Nu(Ch).center;
class ps extends Map {
  constructor(t, r = t1) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(ms(this, t));
  }
  has(t) {
    return super.has(ms(this, t));
  }
  set(t, r) {
    return super.set(Jx(this, t), r);
  }
  delete(t) {
    return super.delete(e1(this, t));
  }
}
function ms({ _intern: e2, _key: t }, r) {
  const n = t(r);
  return e2.has(n) ? e2.get(n) : r;
}
function Jx({ _intern: e2, _key: t }, r) {
  const n = t(r);
  return e2.has(n) ? e2.get(n) : (e2.set(n, r), r);
}
function e1({ _intern: e2, _key: t }, r) {
  const n = t(r);
  return e2.has(n) && (r = e2.get(n), e2.delete(n)), r;
}
function t1(e2) {
  return e2 !== null && typeof e2 == "object" ? e2.valueOf() : e2;
}
function r1(e2 = Ft) {
  if (e2 === Ft) return jh;
  if (typeof e2 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e2(t, r);
    return n || n === 0 ? n : (e2(r, r) === 0) - (e2(t, t) === 0);
  };
}
function jh(e2, t) {
  return (e2 == null || !(e2 >= e2)) - (t == null || !(t >= t)) || (e2 < t ? -1 : e2 > t ? 1 : 0);
}
const n1 = Math.sqrt(50), i1 = Math.sqrt(10), a1 = Math.sqrt(2);
function _i(e2, t, r) {
  const n = (t - e2) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= n1 ? 10 : a >= i1 ? 5 : a >= a1 ? 2 : 1;
  let u, l, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e2 * s), l = Math.round(t * s), u / s < e2 && ++u, l / s > t && --l, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e2 / s), l = Math.round(t / s), u * s < e2 && ++u, l * s > t && --l), l < u && 0.5 <= r && r < 2 ? _i(e2, t, r * 2) : [u, l, s];
}
function Ro(e2, t, r) {
  if (t = +t, e2 = +e2, r = +r, !(r > 0)) return [];
  if (e2 === t) return [e2];
  const n = t < e2, [i, a, o] = n ? _i(t, e2, r) : _i(e2, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, l = new Array(u);
  if (n) if (o < 0) for (let s = 0; s < u; ++s) l[s] = (a - s) / -o;
  else for (let s = 0; s < u; ++s) l[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) l[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) l[s] = (i + s) * o;
  return l;
}
function zo(e2, t, r) {
  return t = +t, e2 = +e2, r = +r, _i(e2, t, r)[2];
}
function Bo(e2, t, r) {
  t = +t, e2 = +e2, r = +r;
  const n = t < e2, i = n ? zo(t, e2, r) : zo(e2, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ys(e2, t) {
  let r;
  for (const n of e2) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function gs(e2, t) {
  let r;
  for (const n of e2) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Mh(e2, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e2.length - 1, n)), !(r <= t && t <= n)) return e2;
  for (i = i === void 0 ? jh : r1(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, s = t - r + 1, c = Math.log(l), f = 0.5 * Math.exp(2 * c / 3), d = 0.5 * Math.sqrt(c * f * (l - f) / l) * (s - l / 2 < 0 ? -1 : 1), v = Math.max(r, Math.floor(t - s * f / l + d)), p = Math.min(n, Math.floor(t + (l - s) * f / l + d));
      Mh(e2, t, v, p, i);
    }
    const a = e2[t];
    let o = r, u = n;
    for (Ur(e2, r, t), i(e2[n], a) > 0 && Ur(e2, r, n); o < u; ) {
      for (Ur(e2, o, u), ++o, --u; i(e2[o], a) < 0; ) ++o;
      for (; i(e2[u], a) > 0; ) --u;
    }
    i(e2[r], a) === 0 ? Ur(e2, r, u) : (++u, Ur(e2, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e2;
}
function Ur(e2, t, r) {
  const n = e2[t];
  e2[t] = e2[r], e2[r] = n;
}
function o1(e2, t, r) {
  if (e2 = Float64Array.from(Zx(e2)), !(!(n = e2.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return gs(e2);
    if (t >= 1) return ys(e2);
    var n, i = (n - 1) * t, a = Math.floor(i), o = ys(Mh(e2, a).subarray(0, a + 1)), u = gs(e2.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function u1(e2, t, r = Ch) {
  if (!(!(n = e2.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e2[0], 0, e2);
    if (t >= 1) return +r(e2[n - 1], n - 1, e2);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e2[a], a, e2), u = +r(e2[a + 1], a + 1, e2);
    return o + (u - o) * (i - a);
  }
}
function l1(e2, t, r) {
  e2 = +e2, t = +t, r = (i = arguments.length) < 2 ? (t = e2, e2 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e2) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e2 + n * r;
  return a;
}
function et(e2, t) {
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
function Tt(e2, t) {
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
const Fo = Symbol("implicit");
function $u() {
  var e2 = new ps(), t = [], r = [], n = Fo;
  function i(a) {
    let o = e2.get(a);
    if (o === void 0) {
      if (n !== Fo) return n;
      e2.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e2 = new ps();
    for (const o of a) e2.has(o) || e2.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return $u(t, r).unknown(n);
  }, et.apply(i, arguments), i;
}
function Lu() {
  var e2 = $u().unknown(void 0), t = e2.domain, r = e2.range, n = 0, i = 1, a, o, u = false, l = 0, s = 0, c = 0.5;
  delete e2.unknown;
  function f() {
    var d = t().length, v = i < n, p = v ? i : n, y = v ? n : i;
    a = (y - p) / Math.max(1, d - l + s * 2), u && (a = Math.floor(a)), p += (y - p - a * (d - l)) * c, o = a * (1 - l), u && (p = Math.round(p), o = Math.round(o));
    var m = l1(d).map(function(g) {
      return p + a * g;
    });
    return r(v ? m.reverse() : m);
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
    return Lu(t(), [n, i]).round(u).paddingInner(l).paddingOuter(s).align(c);
  }, et.apply(f(), arguments);
}
function kh(e2) {
  var t = e2.copy;
  return e2.padding = e2.paddingOuter, delete e2.paddingInner, delete e2.paddingOuter, e2.copy = function() {
    return kh(t());
  }, e2;
}
function c1() {
  return kh(Lu.apply(null, arguments).paddingInner(1));
}
function Ru(e2, t, r) {
  e2.prototype = t.prototype = r, r.constructor = e2;
}
function Th(e2, t) {
  var r = Object.create(e2.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Sn() {
}
var on = 0.7, Ei = 1 / on, Sr = "\\s*([+-]?\\d+)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", st = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", s1 = /^#([0-9a-f]{3,8})$/, f1 = new RegExp(`^rgb\\(${Sr},${Sr},${Sr}\\)$`), d1 = new RegExp(`^rgb\\(${st},${st},${st}\\)$`), v1 = new RegExp(`^rgba\\(${Sr},${Sr},${Sr},${un}\\)$`), h1 = new RegExp(`^rgba\\(${st},${st},${st},${un}\\)$`), p1 = new RegExp(`^hsl\\(${un},${st},${st}\\)$`), m1 = new RegExp(`^hsla\\(${un},${st},${st},${un}\\)$`), bs = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Ru(Sn, ln, { copy(e2) {
  return Object.assign(new this.constructor(), this, e2);
}, displayable() {
  return this.rgb().displayable();
}, hex: ws, formatHex: ws, formatHex8: y1, formatHsl: g1, formatRgb: xs, toString: xs });
function ws() {
  return this.rgb().formatHex();
}
function y1() {
  return this.rgb().formatHex8();
}
function g1() {
  return Ih(this).formatHsl();
}
function xs() {
  return this.rgb().formatRgb();
}
function ln(e2) {
  var t, r;
  return e2 = (e2 + "").trim().toLowerCase(), (t = s1.exec(e2)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ps(t) : r === 3 ? new De(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? qn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? qn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = f1.exec(e2)) ? new De(t[1], t[2], t[3], 1) : (t = d1.exec(e2)) ? new De(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = v1.exec(e2)) ? qn(t[1], t[2], t[3], t[4]) : (t = h1.exec(e2)) ? qn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = p1.exec(e2)) ? As(t[1], t[2] / 100, t[3] / 100, 1) : (t = m1.exec(e2)) ? As(t[1], t[2] / 100, t[3] / 100, t[4]) : bs.hasOwnProperty(e2) ? Ps(bs[e2]) : e2 === "transparent" ? new De(NaN, NaN, NaN, 0) : null;
}
function Ps(e2) {
  return new De(e2 >> 16 & 255, e2 >> 8 & 255, e2 & 255, 1);
}
function qn(e2, t, r, n) {
  return n <= 0 && (e2 = t = r = NaN), new De(e2, t, r, n);
}
function b1(e2) {
  return e2 instanceof Sn || (e2 = ln(e2)), e2 ? (e2 = e2.rgb(), new De(e2.r, e2.g, e2.b, e2.opacity)) : new De();
}
function Wo(e2, t, r, n) {
  return arguments.length === 1 ? b1(e2) : new De(e2, t, r, n ?? 1);
}
function De(e2, t, r, n) {
  this.r = +e2, this.g = +t, this.b = +r, this.opacity = +n;
}
Ru(De, Wo, Th(Sn, { brighter(e2) {
  return e2 = e2 == null ? Ei : Math.pow(Ei, e2), new De(this.r * e2, this.g * e2, this.b * e2, this.opacity);
}, darker(e2) {
  return e2 = e2 == null ? on : Math.pow(on, e2), new De(this.r * e2, this.g * e2, this.b * e2, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new De(or(this.r), or(this.g), or(this.b), Ci(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Os, formatHex: Os, formatHex8: w1, formatRgb: Ss, toString: Ss }));
function Os() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}`;
}
function w1() {
  return `#${rr(this.r)}${rr(this.g)}${rr(this.b)}${rr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ss() {
  const e2 = Ci(this.opacity);
  return `${e2 === 1 ? "rgb(" : "rgba("}${or(this.r)}, ${or(this.g)}, ${or(this.b)}${e2 === 1 ? ")" : `, ${e2})`}`;
}
function Ci(e2) {
  return isNaN(e2) ? 1 : Math.max(0, Math.min(1, e2));
}
function or(e2) {
  return Math.max(0, Math.min(255, Math.round(e2) || 0));
}
function rr(e2) {
  return e2 = or(e2), (e2 < 16 ? "0" : "") + e2.toString(16);
}
function As(e2, t, r, n) {
  return n <= 0 ? e2 = t = r = NaN : r <= 0 || r >= 1 ? e2 = t = NaN : t <= 0 && (e2 = NaN), new nt(e2, t, r, n);
}
function Ih(e2) {
  if (e2 instanceof nt) return new nt(e2.h, e2.s, e2.l, e2.opacity);
  if (e2 instanceof Sn || (e2 = ln(e2)), !e2) return new nt();
  if (e2 instanceof nt) return e2;
  e2 = e2.rgb();
  var t = e2.r / 255, r = e2.g / 255, n = e2.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, l = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= l < 0.5 ? a + i : 2 - a - i, o *= 60) : u = l > 0 && l < 1 ? 0 : o, new nt(o, u, l, e2.opacity);
}
function x1(e2, t, r, n) {
  return arguments.length === 1 ? Ih(e2) : new nt(e2, t, r, n ?? 1);
}
function nt(e2, t, r, n) {
  this.h = +e2, this.s = +t, this.l = +r, this.opacity = +n;
}
Ru(nt, x1, Th(Sn, { brighter(e2) {
  return e2 = e2 == null ? Ei : Math.pow(Ei, e2), new nt(this.h, this.s, this.l * e2, this.opacity);
}, darker(e2) {
  return e2 = e2 == null ? on : Math.pow(on, e2), new nt(this.h, this.s, this.l * e2, this.opacity);
}, rgb() {
  var e2 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e2) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new De(Ga(e2 >= 240 ? e2 - 240 : e2 + 120, i, n), Ga(e2, i, n), Ga(e2 < 120 ? e2 + 240 : e2 - 120, i, n), this.opacity);
}, clamp() {
  return new nt(_s(this.h), Yn(this.s), Yn(this.l), Ci(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e2 = Ci(this.opacity);
  return `${e2 === 1 ? "hsl(" : "hsla("}${_s(this.h)}, ${Yn(this.s) * 100}%, ${Yn(this.l) * 100}%${e2 === 1 ? ")" : `, ${e2})`}`;
} }));
function _s(e2) {
  return e2 = (e2 || 0) % 360, e2 < 0 ? e2 + 360 : e2;
}
function Yn(e2) {
  return Math.max(0, Math.min(1, e2 || 0));
}
function Ga(e2, t, r) {
  return (e2 < 60 ? t + (r - t) * e2 / 60 : e2 < 180 ? r : e2 < 240 ? t + (r - t) * (240 - e2) / 60 : t) * 255;
}
const zu = (e2) => () => e2;
function P1(e2, t) {
  return function(r) {
    return e2 + r * t;
  };
}
function O1(e2, t, r) {
  return e2 = Math.pow(e2, r), t = Math.pow(t, r) - e2, r = 1 / r, function(n) {
    return Math.pow(e2 + n * t, r);
  };
}
function S1(e2) {
  return (e2 = +e2) == 1 ? Dh : function(t, r) {
    return r - t ? O1(t, r, e2) : zu(isNaN(t) ? r : t);
  };
}
function Dh(e2, t) {
  var r = t - e2;
  return r ? P1(e2, r) : zu(isNaN(e2) ? t : e2);
}
const Es = function e(t) {
  var r = S1(t);
  function n(i, a) {
    var o = r((i = Wo(i)).r, (a = Wo(a)).r), u = r(i.g, a.g), l = r(i.b, a.b), s = Dh(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = u(c), i.b = l(c), i.opacity = s(c), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function A1(e2, t) {
  t || (t = []);
  var r = e2 ? Math.min(t.length, e2.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e2[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function _1(e2) {
  return ArrayBuffer.isView(e2) && !(e2 instanceof DataView);
}
function E1(e2, t) {
  var r = t ? t.length : 0, n = e2 ? Math.min(r, e2.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = kr(e2[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function C1(e2, t) {
  var r = /* @__PURE__ */ new Date();
  return e2 = +e2, t = +t, function(n) {
    return r.setTime(e2 * (1 - n) + t * n), r;
  };
}
function ji(e2, t) {
  return e2 = +e2, t = +t, function(r) {
    return e2 * (1 - r) + t * r;
  };
}
function j1(e2, t) {
  var r = {}, n = {}, i;
  (e2 === null || typeof e2 != "object") && (e2 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e2 ? r[i] = kr(e2[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Uo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Va = new RegExp(Uo.source, "g");
function M1(e2) {
  return function() {
    return e2;
  };
}
function k1(e2) {
  return function(t) {
    return e2(t) + "";
  };
}
function T1(e2, t) {
  var r = Uo.lastIndex = Va.lastIndex = 0, n, i, a, o = -1, u = [], l = [];
  for (e2 = e2 + "", t = t + ""; (n = Uo.exec(e2)) && (i = Va.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, l.push({ i: o, x: ji(n, i) })), r = Va.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? l[0] ? k1(l[0].x) : M1(t) : (t = l.length, function(s) {
    for (var c = 0, f; c < t; ++c) u[(f = l[c]).i] = f.x(s);
    return u.join("");
  });
}
function kr(e2, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? zu(t) : (r === "number" ? ji : r === "string" ? (n = ln(t)) ? (t = n, Es) : T1 : t instanceof ln ? Es : t instanceof Date ? C1 : _1(t) ? A1 : Array.isArray(t) ? E1 : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? j1 : ji)(e2, t);
}
function Bu(e2, t) {
  return e2 = +e2, t = +t, function(r) {
    return Math.round(e2 * (1 - r) + t * r);
  };
}
function I1(e2, t) {
  t === void 0 && (t = e2, e2 = kr);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e2(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function D1(e2) {
  return function() {
    return e2;
  };
}
function Mi(e2) {
  return +e2;
}
var Cs = [0, 1];
function Ae(e2) {
  return e2;
}
function Ko(e2, t) {
  return (t -= e2 = +e2) ? function(r) {
    return (r - e2) / t;
  } : D1(isNaN(t) ? NaN : 0.5);
}
function N1(e2, t) {
  var r;
  return e2 > t && (r = e2, e2 = t, t = r), function(n) {
    return Math.max(e2, Math.min(t, n));
  };
}
function $1(e2, t, r) {
  var n = e2[0], i = e2[1], a = t[0], o = t[1];
  return i < n ? (n = Ko(i, n), a = r(o, a)) : (n = Ko(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function L1(e2, t, r) {
  var n = Math.min(e2.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e2[n] < e2[0] && (e2 = e2.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = Ko(e2[o], e2[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var l = On(e2, u, 1, n) - 1;
    return a[l](i[l](u));
  };
}
function An(e2, t) {
  return t.domain(e2.domain()).range(e2.range()).interpolate(e2.interpolate()).clamp(e2.clamp()).unknown(e2.unknown());
}
function xa() {
  var e2 = Cs, t = Cs, r = kr, n, i, a, o = Ae, u, l, s;
  function c() {
    var d = Math.min(e2.length, t.length);
    return o !== Ae && (o = N1(e2[0], e2[d - 1])), u = d > 2 ? L1 : $1, l = s = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (l || (l = u(e2.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((s || (s = u(t, e2.map(n), ji)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e2 = Array.from(d, Mi), c()) : e2.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), c()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = Bu, c();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? true : Ae, c()) : o !== Ae;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, c()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, v) {
    return n = d, i = v, c();
  };
}
function Fu() {
  return xa()(Ae, Ae);
}
function R1(e2) {
  return Math.abs(e2 = Math.round(e2)) >= 1e21 ? e2.toLocaleString("en").replace(/,/g, "") : e2.toString(10);
}
function ki(e2, t) {
  if ((r = (e2 = t ? e2.toExponential(t - 1) : e2.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e2.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e2.slice(r + 1)];
}
function Cr(e2) {
  return e2 = ki(Math.abs(e2)), e2 ? e2[1] : NaN;
}
function z1(e2, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e2[0], l = 0; i > 0 && u > 0 && (l + u + 1 > n && (u = Math.max(1, n - l)), a.push(r.substring(i -= u, i + u)), !((l += u + 1) > n)); ) u = e2[o = (o + 1) % e2.length];
    return a.reverse().join(t);
  };
}
function B1(e2) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e2[+r];
    });
  };
}
var F1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function cn(e2) {
  if (!(t = F1.exec(e2))) throw new Error("invalid format: " + e2);
  var t;
  return new Wu({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
cn.prototype = Wu.prototype;
function Wu(e2) {
  this.fill = e2.fill === void 0 ? " " : e2.fill + "", this.align = e2.align === void 0 ? ">" : e2.align + "", this.sign = e2.sign === void 0 ? "-" : e2.sign + "", this.symbol = e2.symbol === void 0 ? "" : e2.symbol + "", this.zero = !!e2.zero, this.width = e2.width === void 0 ? void 0 : +e2.width, this.comma = !!e2.comma, this.precision = e2.precision === void 0 ? void 0 : +e2.precision, this.trim = !!e2.trim, this.type = e2.type === void 0 ? "" : e2.type + "";
}
Wu.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function W1(e2) {
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
var Nh;
function U1(e2, t) {
  var r = ki(e2, t);
  if (!r) return e2 + "";
  var n = r[0], i = r[1], a = i - (Nh = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + ki(e2, Math.max(0, t + a - 1))[0];
}
function js(e2, t) {
  var r = ki(e2, t);
  if (!r) return e2 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Ms = { "%": (e2, t) => (e2 * 100).toFixed(t), b: (e2) => Math.round(e2).toString(2), c: (e2) => e2 + "", d: R1, e: (e2, t) => e2.toExponential(t), f: (e2, t) => e2.toFixed(t), g: (e2, t) => e2.toPrecision(t), o: (e2) => Math.round(e2).toString(8), p: (e2, t) => js(e2 * 100, t), r: js, s: U1, X: (e2) => Math.round(e2).toString(16).toUpperCase(), x: (e2) => Math.round(e2).toString(16) };
function ks(e2) {
  return e2;
}
var Ts = Array.prototype.map, Is = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function K1(e2) {
  var t = e2.grouping === void 0 || e2.thousands === void 0 ? ks : z1(Ts.call(e2.grouping, Number), e2.thousands + ""), r = e2.currency === void 0 ? "" : e2.currency[0] + "", n = e2.currency === void 0 ? "" : e2.currency[1] + "", i = e2.decimal === void 0 ? "." : e2.decimal + "", a = e2.numerals === void 0 ? ks : B1(Ts.call(e2.numerals, String)), o = e2.percent === void 0 ? "%" : e2.percent + "", u = e2.minus === void 0 ? "\u2212" : e2.minus + "", l = e2.nan === void 0 ? "NaN" : e2.nan + "";
  function s(f) {
    f = cn(f);
    var d = f.fill, v = f.align, p = f.sign, y = f.symbol, m = f.zero, g = f.width, w = f.comma, b = f.precision, P = f.trim, x = f.type;
    x === "n" ? (w = true, x = "g") : Ms[x] || (b === void 0 && (b = 12), P = true, x = "g"), (m || d === "0" && v === "=") && (m = true, d = "0", v = "=");
    var O = y === "$" ? r : y === "#" && /[boxX]/.test(x) ? "0" + x.toLowerCase() : "", A = y === "$" ? n : /[%p]/.test(x) ? o : "", M = Ms[x], T = /[defgprs%]/.test(x);
    b = b === void 0 ? 6 : /[gprs]/.test(x) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function D(E) {
      var j = O, R = A, L, U, Z;
      if (x === "c") R = M(E) + R, E = "";
      else {
        E = +E;
        var B = E < 0 || 1 / E < 0;
        if (E = isNaN(E) ? l : M(Math.abs(E), b), P && (E = W1(E)), B && +E == 0 && p !== "+" && (B = false), j = (B ? p === "(" ? p : u : p === "-" || p === "(" ? "" : p) + j, R = (x === "s" ? Is[8 + Nh / 3] : "") + R + (B && p === "(" ? ")" : ""), T) {
          for (L = -1, U = E.length; ++L < U; ) if (Z = E.charCodeAt(L), 48 > Z || Z > 57) {
            R = (Z === 46 ? i + E.slice(L + 1) : E.slice(L)) + R, E = E.slice(0, L);
            break;
          }
        }
      }
      w && !m && (E = t(E, 1 / 0));
      var H = j.length + E.length + R.length, $ = H < g ? new Array(g - H + 1).join(d) : "";
      switch (w && m && (E = t($ + E, $.length ? g - R.length : 1 / 0), $ = ""), v) {
        case "<":
          E = j + E + R + $;
          break;
        case "=":
          E = j + $ + E + R;
          break;
        case "^":
          E = $.slice(0, H = $.length >> 1) + j + E + R + $.slice(H);
          break;
        default:
          E = $ + j + E + R;
          break;
      }
      return a(E);
    }
    return D.toString = function() {
      return f + "";
    }, D;
  }
  function c(f, d) {
    var v = s((f = cn(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(Cr(d) / 3))) * 3, y = Math.pow(10, -p), m = Is[8 + p / 3];
    return function(g) {
      return v(y * g) + m;
    };
  }
  return { format: s, formatPrefix: c };
}
var Gn, Uu, $h;
H1({ thousands: ",", grouping: [3], currency: ["$", ""] });
function H1(e2) {
  return Gn = K1(e2), Uu = Gn.format, $h = Gn.formatPrefix, Gn;
}
function q1(e2) {
  return Math.max(0, -Cr(Math.abs(e2)));
}
function Y1(e2, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Cr(t) / 3))) * 3 - Cr(Math.abs(e2)));
}
function G1(e2, t) {
  return e2 = Math.abs(e2), t = Math.abs(t) - e2, Math.max(0, Cr(t) - Cr(e2)) + 1;
}
function Lh(e2, t, r, n) {
  var i = Bo(e2, t, r), a;
  switch (n = cn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e2), Math.abs(t));
      return n.precision == null && !isNaN(a = Y1(i, o)) && (n.precision = a), $h(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = G1(i, Math.max(Math.abs(e2), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = q1(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Uu(n);
}
function Yt(e2) {
  var t = e2.domain;
  return e2.ticks = function(r) {
    var n = t();
    return Ro(n[0], n[n.length - 1], r ?? 10);
  }, e2.tickFormat = function(r, n) {
    var i = t();
    return Lh(i[0], i[i.length - 1], r ?? 10, n);
  }, e2.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], l, s, c = 10;
    for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); c-- > 0; ) {
      if (s = zo(o, u, r), s === l) return n[i] = o, n[a] = u, t(n);
      if (s > 0) o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0) o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
      else break;
      l = s;
    }
    return e2;
  }, e2;
}
function Rh() {
  var e2 = Fu();
  return e2.copy = function() {
    return An(e2, Rh());
  }, et.apply(e2, arguments), Yt(e2);
}
function zh(e2) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e2 = Array.from(n, Mi), r) : e2.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return zh(e2).unknown(t);
  }, e2 = arguments.length ? Array.from(e2, Mi) : [0, 1], Yt(r);
}
function Bh(e2, t) {
  e2 = e2.slice();
  var r = 0, n = e2.length - 1, i = e2[r], a = e2[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e2[r] = t.floor(i), e2[n] = t.ceil(a), e2;
}
function Ds(e2) {
  return Math.log(e2);
}
function Ns(e2) {
  return Math.exp(e2);
}
function V1(e2) {
  return -Math.log(-e2);
}
function X1(e2) {
  return -Math.exp(-e2);
}
function Z1(e2) {
  return isFinite(e2) ? +("1e" + e2) : e2 < 0 ? 0 : e2;
}
function Q1(e2) {
  return e2 === 10 ? Z1 : e2 === Math.E ? Math.exp : (t) => Math.pow(e2, t);
}
function J1(e2) {
  return e2 === Math.E ? Math.log : e2 === 10 && Math.log10 || e2 === 2 && Math.log2 || (e2 = Math.log(e2), (t) => Math.log(t) / e2);
}
function $s(e2) {
  return (t, r) => -e2(-t, r);
}
function Ku(e2) {
  const t = e2(Ds, Ns), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = J1(n), a = Q1(n), r()[0] < 0 ? (i = $s(i), a = $s(a), e2(V1, X1)) : e2(Ds, Ns), t;
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
    let d = i(s), v = i(c), p, y;
    const m = u == null ? 10 : +u;
    let g = [];
    if (!(n % 1) && v - d < m) {
      if (d = Math.floor(d), v = Math.ceil(v), s > 0) {
        for (; d <= v; ++d) for (p = 1; p < n; ++p) if (y = d < 0 ? p / a(-d) : p * a(d), !(y < s)) {
          if (y > c) break;
          g.push(y);
        }
      } else for (; d <= v; ++d) for (p = n - 1; p >= 1; --p) if (y = d > 0 ? p / a(-d) : p * a(d), !(y < s)) {
        if (y > c) break;
        g.push(y);
      }
      g.length * 2 < m && (g = Ro(s, c, m));
    } else g = Ro(d, v, Math.min(v - d, m)).map(a);
    return f ? g.reverse() : g;
  }, t.tickFormat = (u, l) => {
    if (u == null && (u = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = cn(l)).precision == null && (l.trim = true), l = Uu(l)), u === 1 / 0) return l;
    const s = Math.max(1, n * u / t.ticks().length);
    return (c) => {
      let f = c / a(Math.round(i(c)));
      return f * n < n - 0.5 && (f *= n), f <= s ? l(c) : "";
    };
  }, t.nice = () => r(Bh(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) })), t;
}
function Fh() {
  const e2 = Ku(xa()).domain([1, 10]);
  return e2.copy = () => An(e2, Fh()).base(e2.base()), et.apply(e2, arguments), e2;
}
function Ls(e2) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e2));
  };
}
function Rs(e2) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e2;
  };
}
function Hu(e2) {
  var t = 1, r = e2(Ls(t), Rs(t));
  return r.constant = function(n) {
    return arguments.length ? e2(Ls(t = +n), Rs(t)) : t;
  }, Yt(r);
}
function Wh() {
  var e2 = Hu(xa());
  return e2.copy = function() {
    return An(e2, Wh()).constant(e2.constant());
  }, et.apply(e2, arguments);
}
function zs(e2) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e2) : Math.pow(t, e2);
  };
}
function eP(e2) {
  return e2 < 0 ? -Math.sqrt(-e2) : Math.sqrt(e2);
}
function tP(e2) {
  return e2 < 0 ? -e2 * e2 : e2 * e2;
}
function qu(e2) {
  var t = e2(Ae, Ae), r = 1;
  function n() {
    return r === 1 ? e2(Ae, Ae) : r === 0.5 ? e2(eP, tP) : e2(zs(r), zs(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yt(t);
}
function Yu() {
  var e2 = qu(xa());
  return e2.copy = function() {
    return An(e2, Yu()).exponent(e2.exponent());
  }, et.apply(e2, arguments), e2;
}
function rP() {
  return Yu.apply(null, arguments).exponent(0.5);
}
function Bs(e2) {
  return Math.sign(e2) * e2 * e2;
}
function nP(e2) {
  return Math.sign(e2) * Math.sqrt(Math.abs(e2));
}
function Uh() {
  var e2 = Fu(), t = [0, 1], r = false, n;
  function i(a) {
    var o = nP(e2(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e2.invert(Bs(a));
  }, i.domain = function(a) {
    return arguments.length ? (e2.domain(a), i) : e2.domain();
  }, i.range = function(a) {
    return arguments.length ? (e2.range((t = Array.from(a, Mi)).map(Bs)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e2.clamp(a), i) : e2.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Uh(e2.domain(), t).round(r).clamp(e2.clamp()).unknown(n);
  }, et.apply(i, arguments), Yt(i);
}
function Kh() {
  var e2 = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = u1(e2, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[On(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e2[0], u < r.length ? r[u] : e2[e2.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e2.slice();
    e2 = [];
    for (let u of o) u != null && !isNaN(u = +u) && e2.push(u);
    return e2.sort(Ft), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Kh().domain(e2).range(t).unknown(n);
  }, et.apply(a, arguments);
}
function Hh() {
  var e2 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(l) {
    return l != null && l <= l ? i[On(n, l, 0, r)] : a;
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
    return Hh().domain([e2, t]).range(i).unknown(a);
  }, et.apply(Yt(o), arguments);
}
function qh() {
  var e2 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[On(e2, a, 0, n)] : r;
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
    return qh().domain(e2).range(t).unknown(r);
  }, et.apply(i, arguments);
}
const Xa = /* @__PURE__ */ new Date(), Za = /* @__PURE__ */ new Date();
function le(e2, t, r, n) {
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
  }, i.filter = (a) => le((o) => {
    if (o >= o) for (; e2(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o) if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --u >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (Xa.setTime(+a), Za.setTime(+o), e2(Xa), e2(Za), Math.floor(r(Xa, Za))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Ti = le(() => {
}, (e2, t) => {
  e2.setTime(+e2 + t);
}, (e2, t) => t - e2);
Ti.every = (e2) => (e2 = Math.floor(e2), !isFinite(e2) || !(e2 > 0) ? null : e2 > 1 ? le((t) => {
  t.setTime(Math.floor(t / e2) * e2);
}, (t, r) => {
  t.setTime(+t + r * e2);
}, (t, r) => (r - t) / e2) : Ti);
Ti.range;
const wt = 1e3, Ze = wt * 60, xt = Ze * 60, _t = xt * 24, Gu = _t * 7, Fs = _t * 30, Qa = _t * 365, nr = le((e2) => {
  e2.setTime(e2 - e2.getMilliseconds());
}, (e2, t) => {
  e2.setTime(+e2 + t * wt);
}, (e2, t) => (t - e2) / wt, (e2) => e2.getUTCSeconds());
nr.range;
const Vu = le((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * wt);
}, (e2, t) => {
  e2.setTime(+e2 + t * Ze);
}, (e2, t) => (t - e2) / Ze, (e2) => e2.getMinutes());
Vu.range;
const Xu = le((e2) => {
  e2.setUTCSeconds(0, 0);
}, (e2, t) => {
  e2.setTime(+e2 + t * Ze);
}, (e2, t) => (t - e2) / Ze, (e2) => e2.getUTCMinutes());
Xu.range;
const Zu = le((e2) => {
  e2.setTime(e2 - e2.getMilliseconds() - e2.getSeconds() * wt - e2.getMinutes() * Ze);
}, (e2, t) => {
  e2.setTime(+e2 + t * xt);
}, (e2, t) => (t - e2) / xt, (e2) => e2.getHours());
Zu.range;
const Qu = le((e2) => {
  e2.setUTCMinutes(0, 0, 0);
}, (e2, t) => {
  e2.setTime(+e2 + t * xt);
}, (e2, t) => (t - e2) / xt, (e2) => e2.getUTCHours());
Qu.range;
const _n = le((e2) => e2.setHours(0, 0, 0, 0), (e2, t) => e2.setDate(e2.getDate() + t), (e2, t) => (t - e2 - (t.getTimezoneOffset() - e2.getTimezoneOffset()) * Ze) / _t, (e2) => e2.getDate() - 1);
_n.range;
const Pa = le((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCDate(e2.getUTCDate() + t);
}, (e2, t) => (t - e2) / _t, (e2) => e2.getUTCDate() - 1);
Pa.range;
const Yh = le((e2) => {
  e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCDate(e2.getUTCDate() + t);
}, (e2, t) => (t - e2) / _t, (e2) => Math.floor(e2 / _t));
Yh.range;
function pr(e2) {
  return le((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e2) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ze) / Gu);
}
const Oa = pr(0), Ii = pr(1), iP = pr(2), aP = pr(3), jr = pr(4), oP = pr(5), uP = pr(6);
Oa.range;
Ii.range;
iP.range;
aP.range;
jr.range;
oP.range;
uP.range;
function mr(e2) {
  return le((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e2) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Gu);
}
const Sa = mr(0), Di = mr(1), lP = mr(2), cP = mr(3), Mr = mr(4), sP = mr(5), fP = mr(6);
Sa.range;
Di.range;
lP.range;
cP.range;
Mr.range;
sP.range;
fP.range;
const Ju = le((e2) => {
  e2.setDate(1), e2.setHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setMonth(e2.getMonth() + t);
}, (e2, t) => t.getMonth() - e2.getMonth() + (t.getFullYear() - e2.getFullYear()) * 12, (e2) => e2.getMonth());
Ju.range;
const el = le((e2) => {
  e2.setUTCDate(1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCMonth(e2.getUTCMonth() + t);
}, (e2, t) => t.getUTCMonth() - e2.getUTCMonth() + (t.getUTCFullYear() - e2.getUTCFullYear()) * 12, (e2) => e2.getUTCMonth());
el.range;
const Et = le((e2) => {
  e2.setMonth(0, 1), e2.setHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setFullYear(e2.getFullYear() + t);
}, (e2, t) => t.getFullYear() - e2.getFullYear(), (e2) => e2.getFullYear());
Et.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : le((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e2) * e2), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e2);
});
Et.range;
const Ct = le((e2) => {
  e2.setUTCMonth(0, 1), e2.setUTCHours(0, 0, 0, 0);
}, (e2, t) => {
  e2.setUTCFullYear(e2.getUTCFullYear() + t);
}, (e2, t) => t.getUTCFullYear() - e2.getUTCFullYear(), (e2) => e2.getUTCFullYear());
Ct.every = (e2) => !isFinite(e2 = Math.floor(e2)) || !(e2 > 0) ? null : le((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e2) * e2), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e2);
});
Ct.range;
function Gh(e2, t, r, n, i, a) {
  const o = [[nr, 1, wt], [nr, 5, 5 * wt], [nr, 15, 15 * wt], [nr, 30, 30 * wt], [a, 1, Ze], [a, 5, 5 * Ze], [a, 15, 15 * Ze], [a, 30, 30 * Ze], [i, 1, xt], [i, 3, 3 * xt], [i, 6, 6 * xt], [i, 12, 12 * xt], [n, 1, _t], [n, 2, 2 * _t], [r, 1, Gu], [t, 1, Fs], [t, 3, 3 * Fs], [e2, 1, Qa]];
  function u(s, c, f) {
    const d = c < s;
    d && ([s, c] = [c, s]);
    const v = f && typeof f.range == "function" ? f : l(s, c, f), p = v ? v.range(s, +c + 1) : [];
    return d ? p.reverse() : p;
  }
  function l(s, c, f) {
    const d = Math.abs(c - s) / f, v = Nu(([, , m]) => m).right(o, d);
    if (v === o.length) return e2.every(Bo(s / Qa, c / Qa, f));
    if (v === 0) return Ti.every(Math.max(Bo(s, c, f), 1));
    const [p, y] = o[d / o[v - 1][2] < o[v][2] / d ? v - 1 : v];
    return p.every(y);
  }
  return [u, l];
}
const [dP, vP] = Gh(Ct, el, Sa, Yh, Qu, Xu), [hP, pP] = Gh(Et, Ju, Oa, _n, Zu, Vu);
function Ja(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t = new Date(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
    return t.setFullYear(e2.y), t;
  }
  return new Date(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L);
}
function eo(e2) {
  if (0 <= e2.y && e2.y < 100) {
    var t = new Date(Date.UTC(-1, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
    return t.setUTCFullYear(e2.y), t;
  }
  return new Date(Date.UTC(e2.y, e2.m, e2.d, e2.H, e2.M, e2.S, e2.L));
}
function Kr(e2, t, r) {
  return { y: e2, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function mP(e2) {
  var t = e2.dateTime, r = e2.date, n = e2.time, i = e2.periods, a = e2.days, o = e2.shortDays, u = e2.months, l = e2.shortMonths, s = Hr(i), c = qr(i), f = Hr(a), d = qr(a), v = Hr(o), p = qr(o), y = Hr(u), m = qr(u), g = Hr(l), w = qr(l), b = { a: B, A: H, b: $, B: je, c: null, d: Ys, e: Ys, f: zP, g: VP, G: ZP, H: $P, I: LP, j: RP, L: Vh, m: BP, M: FP, p: Re, q: Me, Q: Xs, s: Zs, S: WP, u: UP, U: KP, V: HP, w: qP, W: YP, x: null, X: null, y: GP, Y: XP, Z: QP, "%": Vs }, P = { a: mt, A: qe, b: Xt, B: zr, c: null, d: Gs, e: Gs, f: rO, g: dO, G: hO, H: JP, I: eO, j: tO, L: Zh, m: nO, M: iO, p: ke, q: La, Q: Xs, s: Zs, S: aO, u: oO, U: uO, V: lO, w: cO, W: sO, x: null, X: null, y: fO, Y: vO, Z: pO, "%": Vs }, x = { a: D, A: E, b: j, B: R, c: L, d: Hs, e: Hs, f: TP, g: Ks, G: Us, H: qs, I: qs, j: CP, L: kP, m: EP, M: jP, p: T, q: _P, Q: DP, s: NP, S: MP, u: xP, U: PP, V: OP, w: wP, W: SP, x: U, X: Z, y: Ks, Y: Us, Z: AP, "%": IP };
  b.x = O(r, b), b.X = O(n, b), b.c = O(t, b), P.x = O(r, P), P.X = O(n, P), P.c = O(t, P);
  function O(_, z) {
    return function(F) {
      var C = [], Te = -1, G = 0, ze = _.length, Be, Zt, Kl;
      for (F instanceof Date || (F = /* @__PURE__ */ new Date(+F)); ++Te < ze; ) _.charCodeAt(Te) === 37 && (C.push(_.slice(G, Te)), (Zt = Ws[Be = _.charAt(++Te)]) != null ? Be = _.charAt(++Te) : Zt = Be === "e" ? " " : "0", (Kl = z[Be]) && (Be = Kl(F, Zt)), C.push(Be), G = Te + 1);
      return C.push(_.slice(G, Te)), C.join("");
    };
  }
  function A(_, z) {
    return function(F) {
      var C = Kr(1900, void 0, 1), Te = M(C, _, F += "", 0), G, ze;
      if (Te != F.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (z && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (G = eo(Kr(C.y, 0, 1)), ze = G.getUTCDay(), G = ze > 4 || ze === 0 ? Di.ceil(G) : Di(G), G = Pa.offset(G, (C.V - 1) * 7), C.y = G.getUTCFullYear(), C.m = G.getUTCMonth(), C.d = G.getUTCDate() + (C.w + 6) % 7) : (G = Ja(Kr(C.y, 0, 1)), ze = G.getDay(), G = ze > 4 || ze === 0 ? Ii.ceil(G) : Ii(G), G = _n.offset(G, (C.V - 1) * 7), C.y = G.getFullYear(), C.m = G.getMonth(), C.d = G.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), ze = "Z" in C ? eo(Kr(C.y, 0, 1)).getUTCDay() : Ja(Kr(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (ze + 5) % 7 : C.w + C.U * 7 - (ze + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, eo(C)) : Ja(C);
    };
  }
  function M(_, z, F, C) {
    for (var Te = 0, G = z.length, ze = F.length, Be, Zt; Te < G; ) {
      if (C >= ze) return -1;
      if (Be = z.charCodeAt(Te++), Be === 37) {
        if (Be = z.charAt(Te++), Zt = x[Be in Ws ? z.charAt(Te++) : Be], !Zt || (C = Zt(_, F, C)) < 0) return -1;
      } else if (Be != F.charCodeAt(C++)) return -1;
    }
    return C;
  }
  function T(_, z, F) {
    var C = s.exec(z.slice(F));
    return C ? (_.p = c.get(C[0].toLowerCase()), F + C[0].length) : -1;
  }
  function D(_, z, F) {
    var C = v.exec(z.slice(F));
    return C ? (_.w = p.get(C[0].toLowerCase()), F + C[0].length) : -1;
  }
  function E(_, z, F) {
    var C = f.exec(z.slice(F));
    return C ? (_.w = d.get(C[0].toLowerCase()), F + C[0].length) : -1;
  }
  function j(_, z, F) {
    var C = g.exec(z.slice(F));
    return C ? (_.m = w.get(C[0].toLowerCase()), F + C[0].length) : -1;
  }
  function R(_, z, F) {
    var C = y.exec(z.slice(F));
    return C ? (_.m = m.get(C[0].toLowerCase()), F + C[0].length) : -1;
  }
  function L(_, z, F) {
    return M(_, t, z, F);
  }
  function U(_, z, F) {
    return M(_, r, z, F);
  }
  function Z(_, z, F) {
    return M(_, n, z, F);
  }
  function B(_) {
    return o[_.getDay()];
  }
  function H(_) {
    return a[_.getDay()];
  }
  function $(_) {
    return l[_.getMonth()];
  }
  function je(_) {
    return u[_.getMonth()];
  }
  function Re(_) {
    return i[+(_.getHours() >= 12)];
  }
  function Me(_) {
    return 1 + ~~(_.getMonth() / 3);
  }
  function mt(_) {
    return o[_.getUTCDay()];
  }
  function qe(_) {
    return a[_.getUTCDay()];
  }
  function Xt(_) {
    return l[_.getUTCMonth()];
  }
  function zr(_) {
    return u[_.getUTCMonth()];
  }
  function ke(_) {
    return i[+(_.getUTCHours() >= 12)];
  }
  function La(_) {
    return 1 + ~~(_.getUTCMonth() / 3);
  }
  return { format: function(_) {
    var z = O(_ += "", b);
    return z.toString = function() {
      return _;
    }, z;
  }, parse: function(_) {
    var z = A(_ += "", false);
    return z.toString = function() {
      return _;
    }, z;
  }, utcFormat: function(_) {
    var z = O(_ += "", P);
    return z.toString = function() {
      return _;
    }, z;
  }, utcParse: function(_) {
    var z = A(_ += "", true);
    return z.toString = function() {
      return _;
    }, z;
  } };
}
var Ws = { "-": "", _: " ", 0: "0" }, me = /^\s*\d+/, yP = /^%/, gP = /[\\^$*+?|[\]().{}]/g;
function W(e2, t, r) {
  var n = e2 < 0 ? "-" : "", i = (n ? -e2 : e2) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function bP(e2) {
  return e2.replace(gP, "\\$&");
}
function Hr(e2) {
  return new RegExp("^(?:" + e2.map(bP).join("|") + ")", "i");
}
function qr(e2) {
  return new Map(e2.map((t, r) => [t.toLowerCase(), r]));
}
function wP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 1));
  return n ? (e2.w = +n[0], r + n[0].length) : -1;
}
function xP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 1));
  return n ? (e2.u = +n[0], r + n[0].length) : -1;
}
function PP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.U = +n[0], r + n[0].length) : -1;
}
function OP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.V = +n[0], r + n[0].length) : -1;
}
function SP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.W = +n[0], r + n[0].length) : -1;
}
function Us(e2, t, r) {
  var n = me.exec(t.slice(r, r + 4));
  return n ? (e2.y = +n[0], r + n[0].length) : -1;
}
function Ks(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function AP(e2, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e2.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function _P(e2, t, r) {
  var n = me.exec(t.slice(r, r + 1));
  return n ? (e2.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function EP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.m = n[0] - 1, r + n[0].length) : -1;
}
function Hs(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.d = +n[0], r + n[0].length) : -1;
}
function CP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 3));
  return n ? (e2.m = 0, e2.d = +n[0], r + n[0].length) : -1;
}
function qs(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.H = +n[0], r + n[0].length) : -1;
}
function jP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.M = +n[0], r + n[0].length) : -1;
}
function MP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 2));
  return n ? (e2.S = +n[0], r + n[0].length) : -1;
}
function kP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 3));
  return n ? (e2.L = +n[0], r + n[0].length) : -1;
}
function TP(e2, t, r) {
  var n = me.exec(t.slice(r, r + 6));
  return n ? (e2.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function IP(e2, t, r) {
  var n = yP.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function DP(e2, t, r) {
  var n = me.exec(t.slice(r));
  return n ? (e2.Q = +n[0], r + n[0].length) : -1;
}
function NP(e2, t, r) {
  var n = me.exec(t.slice(r));
  return n ? (e2.s = +n[0], r + n[0].length) : -1;
}
function Ys(e2, t) {
  return W(e2.getDate(), t, 2);
}
function $P(e2, t) {
  return W(e2.getHours(), t, 2);
}
function LP(e2, t) {
  return W(e2.getHours() % 12 || 12, t, 2);
}
function RP(e2, t) {
  return W(1 + _n.count(Et(e2), e2), t, 3);
}
function Vh(e2, t) {
  return W(e2.getMilliseconds(), t, 3);
}
function zP(e2, t) {
  return Vh(e2, t) + "000";
}
function BP(e2, t) {
  return W(e2.getMonth() + 1, t, 2);
}
function FP(e2, t) {
  return W(e2.getMinutes(), t, 2);
}
function WP(e2, t) {
  return W(e2.getSeconds(), t, 2);
}
function UP(e2) {
  var t = e2.getDay();
  return t === 0 ? 7 : t;
}
function KP(e2, t) {
  return W(Oa.count(Et(e2) - 1, e2), t, 2);
}
function Xh(e2) {
  var t = e2.getDay();
  return t >= 4 || t === 0 ? jr(e2) : jr.ceil(e2);
}
function HP(e2, t) {
  return e2 = Xh(e2), W(jr.count(Et(e2), e2) + (Et(e2).getDay() === 4), t, 2);
}
function qP(e2) {
  return e2.getDay();
}
function YP(e2, t) {
  return W(Ii.count(Et(e2) - 1, e2), t, 2);
}
function GP(e2, t) {
  return W(e2.getFullYear() % 100, t, 2);
}
function VP(e2, t) {
  return e2 = Xh(e2), W(e2.getFullYear() % 100, t, 2);
}
function XP(e2, t) {
  return W(e2.getFullYear() % 1e4, t, 4);
}
function ZP(e2, t) {
  var r = e2.getDay();
  return e2 = r >= 4 || r === 0 ? jr(e2) : jr.ceil(e2), W(e2.getFullYear() % 1e4, t, 4);
}
function QP(e2) {
  var t = e2.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + W(t / 60 | 0, "0", 2) + W(t % 60, "0", 2);
}
function Gs(e2, t) {
  return W(e2.getUTCDate(), t, 2);
}
function JP(e2, t) {
  return W(e2.getUTCHours(), t, 2);
}
function eO(e2, t) {
  return W(e2.getUTCHours() % 12 || 12, t, 2);
}
function tO(e2, t) {
  return W(1 + Pa.count(Ct(e2), e2), t, 3);
}
function Zh(e2, t) {
  return W(e2.getUTCMilliseconds(), t, 3);
}
function rO(e2, t) {
  return Zh(e2, t) + "000";
}
function nO(e2, t) {
  return W(e2.getUTCMonth() + 1, t, 2);
}
function iO(e2, t) {
  return W(e2.getUTCMinutes(), t, 2);
}
function aO(e2, t) {
  return W(e2.getUTCSeconds(), t, 2);
}
function oO(e2) {
  var t = e2.getUTCDay();
  return t === 0 ? 7 : t;
}
function uO(e2, t) {
  return W(Sa.count(Ct(e2) - 1, e2), t, 2);
}
function Qh(e2) {
  var t = e2.getUTCDay();
  return t >= 4 || t === 0 ? Mr(e2) : Mr.ceil(e2);
}
function lO(e2, t) {
  return e2 = Qh(e2), W(Mr.count(Ct(e2), e2) + (Ct(e2).getUTCDay() === 4), t, 2);
}
function cO(e2) {
  return e2.getUTCDay();
}
function sO(e2, t) {
  return W(Di.count(Ct(e2) - 1, e2), t, 2);
}
function fO(e2, t) {
  return W(e2.getUTCFullYear() % 100, t, 2);
}
function dO(e2, t) {
  return e2 = Qh(e2), W(e2.getUTCFullYear() % 100, t, 2);
}
function vO(e2, t) {
  return W(e2.getUTCFullYear() % 1e4, t, 4);
}
function hO(e2, t) {
  var r = e2.getUTCDay();
  return e2 = r >= 4 || r === 0 ? Mr(e2) : Mr.ceil(e2), W(e2.getUTCFullYear() % 1e4, t, 4);
}
function pO() {
  return "+0000";
}
function Vs() {
  return "%";
}
function Xs(e2) {
  return +e2;
}
function Zs(e2) {
  return Math.floor(+e2 / 1e3);
}
var yr, Jh, ep;
mO({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function mO(e2) {
  return yr = mP(e2), Jh = yr.format, yr.parse, ep = yr.utcFormat, yr.utcParse, yr;
}
function yO(e2) {
  return new Date(e2);
}
function gO(e2) {
  return e2 instanceof Date ? +e2 : +/* @__PURE__ */ new Date(+e2);
}
function tl(e2, t, r, n, i, a, o, u, l, s) {
  var c = Fu(), f = c.invert, d = c.domain, v = s(".%L"), p = s(":%S"), y = s("%I:%M"), m = s("%I %p"), g = s("%a %d"), w = s("%b %d"), b = s("%B"), P = s("%Y");
  function x(O) {
    return (l(O) < O ? v : u(O) < O ? p : o(O) < O ? y : a(O) < O ? m : n(O) < O ? i(O) < O ? g : w : r(O) < O ? b : P)(O);
  }
  return c.invert = function(O) {
    return new Date(f(O));
  }, c.domain = function(O) {
    return arguments.length ? d(Array.from(O, gO)) : d().map(yO);
  }, c.ticks = function(O) {
    var A = d();
    return e2(A[0], A[A.length - 1], O ?? 10);
  }, c.tickFormat = function(O, A) {
    return A == null ? x : s(A);
  }, c.nice = function(O) {
    var A = d();
    return (!O || typeof O.range != "function") && (O = t(A[0], A[A.length - 1], O ?? 10)), O ? d(Bh(A, O)) : c;
  }, c.copy = function() {
    return An(c, tl(e2, t, r, n, i, a, o, u, l, s));
  }, c;
}
function bO() {
  return et.apply(tl(hP, pP, Et, Ju, Oa, _n, Zu, Vu, nr, Jh).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function wO() {
  return et.apply(tl(dP, vP, Ct, el, Sa, Pa, Qu, Xu, nr, ep).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Aa() {
  var e2 = 0, t = 1, r, n, i, a, o = Ae, u = false, l;
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
  return s.range = c(kr), s.rangeRound = c(Bu), s.unknown = function(f) {
    return arguments.length ? (l = f, s) : l;
  }, function(f) {
    return a = f, r = f(e2), n = f(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function Gt(e2, t) {
  return t.domain(e2.domain()).interpolator(e2.interpolator()).clamp(e2.clamp()).unknown(e2.unknown());
}
function tp() {
  var e2 = Yt(Aa()(Ae));
  return e2.copy = function() {
    return Gt(e2, tp());
  }, Tt.apply(e2, arguments);
}
function rp() {
  var e2 = Ku(Aa()).domain([1, 10]);
  return e2.copy = function() {
    return Gt(e2, rp()).base(e2.base());
  }, Tt.apply(e2, arguments);
}
function np() {
  var e2 = Hu(Aa());
  return e2.copy = function() {
    return Gt(e2, np()).constant(e2.constant());
  }, Tt.apply(e2, arguments);
}
function rl() {
  var e2 = qu(Aa());
  return e2.copy = function() {
    return Gt(e2, rl()).exponent(e2.exponent());
  }, Tt.apply(e2, arguments);
}
function xO() {
  return rl.apply(null, arguments).exponent(0.5);
}
function ip() {
  var e2 = [], t = Ae;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((On(e2, n, 1) - 1) / (e2.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e2.slice();
    e2 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e2.push(i);
    return e2.sort(Ft), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e2.map((n, i) => t(i / (e2.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => o1(e2, a / n));
  }, r.copy = function() {
    return ip(t).domain(e2);
  }, Tt.apply(r, arguments);
}
function _a() {
  var e2 = 0, t = 0.5, r = 1, n = 1, i, a, o, u, l, s = Ae, c, f = false, d;
  function v(y) {
    return isNaN(y = +y) ? d : (y = 0.5 + ((y = +c(y)) - a) * (n * y < n * a ? u : l), s(f ? Math.max(0, Math.min(1, y)) : y));
  }
  v.domain = function(y) {
    return arguments.length ? ([e2, t, r] = y, i = c(e2 = +e2), a = c(t = +t), o = c(r = +r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v) : [e2, t, r];
  }, v.clamp = function(y) {
    return arguments.length ? (f = !!y, v) : f;
  }, v.interpolator = function(y) {
    return arguments.length ? (s = y, v) : s;
  };
  function p(y) {
    return function(m) {
      var g, w, b;
      return arguments.length ? ([g, w, b] = m, s = I1(y, [g, w, b]), v) : [s(0), s(0.5), s(1)];
    };
  }
  return v.range = p(kr), v.rangeRound = p(Bu), v.unknown = function(y) {
    return arguments.length ? (d = y, v) : d;
  }, function(y) {
    return c = y, i = y(e2), a = y(t), o = y(r), u = i === a ? 0 : 0.5 / (a - i), l = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, v;
  };
}
function ap() {
  var e2 = Yt(_a()(Ae));
  return e2.copy = function() {
    return Gt(e2, ap());
  }, Tt.apply(e2, arguments);
}
function op() {
  var e2 = Ku(_a()).domain([0.1, 1, 10]);
  return e2.copy = function() {
    return Gt(e2, op()).base(e2.base());
  }, Tt.apply(e2, arguments);
}
function up() {
  var e2 = Hu(_a());
  return e2.copy = function() {
    return Gt(e2, up()).constant(e2.constant());
  }, Tt.apply(e2, arguments);
}
function nl() {
  var e2 = qu(_a());
  return e2.copy = function() {
    return Gt(e2, nl()).exponent(e2.exponent());
  }, Tt.apply(e2, arguments);
}
function PO() {
  return nl.apply(null, arguments).exponent(0.5);
}
const Vr = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: Lu, scaleDiverging: ap, scaleDivergingLog: op, scaleDivergingPow: nl, scaleDivergingSqrt: PO, scaleDivergingSymlog: up, scaleIdentity: zh, scaleImplicit: Fo, scaleLinear: Rh, scaleLog: Fh, scaleOrdinal: $u, scalePoint: c1, scalePow: Yu, scaleQuantile: Kh, scaleQuantize: Hh, scaleRadial: Uh, scaleSequential: tp, scaleSequentialLog: rp, scaleSequentialPow: rl, scaleSequentialQuantile: ip, scaleSequentialSqrt: xO, scaleSequentialSymlog: np, scaleSqrt: rP, scaleSymlog: Wh, scaleThreshold: qh, scaleTime: bO, scaleUtc: wO, tickFormat: Lh }, Symbol.toStringTag, { value: "Module" }));
var Vt = (e2) => e2.chartData, OO = S([Vt], (e2) => {
  var t = e2.chartData != null ? e2.chartData.length - 1 : 0;
  return { chartData: e2.chartData, computedData: e2.computedData, dataEndIndex: t, dataStartIndex: 0 };
}), il = (e2, t, r, n) => n ? OO(e2) : Vt(e2);
function Kt(e2) {
  if (Array.isArray(e2) && e2.length === 2) {
    var [t, r] = e2;
    if (ae(t) && ae(r)) return true;
  }
  return false;
}
function Qs(e2, t, r) {
  return r ? e2 : [Math.min(e2[0], t[0]), Math.max(e2[1], t[1])];
}
function lp(e2, t) {
  if (t && typeof e2 != "function" && Array.isArray(e2) && e2.length === 2) {
    var [r, n] = e2, i, a;
    if (ae(r)) i = r;
    else if (typeof r == "function") return;
    if (ae(n)) a = n;
    else if (typeof n == "function") return;
    var o = [i, a];
    if (Kt(o)) return o;
  }
}
function SO(e2, t, r) {
  if (!(!r && t == null)) {
    if (typeof e2 == "function" && t != null) try {
      var n = e2(t, r);
      if (Kt(n)) return Qs(n, t, r);
    } catch {
    }
    if (Array.isArray(e2) && e2.length === 2) {
      var [i, a] = e2, o, u;
      if (i === "auto") t != null && (o = Math.min(...t));
      else if (I(i)) o = i;
      else if (typeof i == "function") try {
        t != null && (o = i(t == null ? void 0 : t[0]));
      } catch {
      }
      else if (typeof i == "string" && bc.test(i)) {
        var l = bc.exec(i);
        if (l == null || l[1] == null || t == null) o = void 0;
        else {
          var s = +l[1];
          o = t[0] - s;
        }
      } else o = t == null ? void 0 : t[0];
      if (a === "auto") t != null && (u = Math.max(...t));
      else if (I(a)) u = a;
      else if (typeof a == "function") try {
        t != null && (u = a(t == null ? void 0 : t[1]));
      } catch {
      }
      else if (typeof a == "string" && wc.test(a)) {
        var c = wc.exec(a);
        if (c == null || c[1] == null || t == null) u = void 0;
        else {
          var f = +c[1];
          u = t[1] + f;
        }
      } else u = t == null ? void 0 : t[1];
      var d = [o, u];
      if (Kt(d)) return t == null ? d : Qs(d, t, r);
    }
  }
}
var Tr = 1e9, AO = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, ol, ee = true, Je = "[DecimalError] ", ur = Je + "Invalid argument: ", al = Je + "Exponent out of range: ", Ir = Math.floor, er = Math.pow, _O = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, We, he = 1e7, Q = 7, cp = 9007199254740991, Ni = Ir(cp / Q), k = {};
k.absoluteValue = k.abs = function() {
  var e2 = new this.constructor(this);
  return e2.s && (e2.s = 1), e2;
};
k.comparedTo = k.cmp = function(e2) {
  var t, r, n, i, a = this;
  if (e2 = new a.constructor(e2), a.s !== e2.s) return a.s || -e2.s;
  if (a.e !== e2.e) return a.e > e2.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e2.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e2.d[t]) return a.d[t] > e2.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
k.decimalPlaces = k.dp = function() {
  var e2 = this, t = e2.d.length - 1, r = (t - e2.e) * Q;
  if (t = e2.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
k.dividedBy = k.div = function(e2) {
  return Pt(this, new this.constructor(e2));
};
k.dividedToIntegerBy = k.idiv = function(e2) {
  var t = this, r = t.constructor;
  return q(Pt(t, new r(e2), 0, 1), r.precision);
};
k.equals = k.eq = function(e2) {
  return !this.cmp(e2);
};
k.exponent = function() {
  return ie(this);
};
k.greaterThan = k.gt = function(e2) {
  return this.cmp(e2) > 0;
};
k.greaterThanOrEqualTo = k.gte = function(e2) {
  return this.cmp(e2) >= 0;
};
k.isInteger = k.isint = function() {
  return this.e > this.d.length - 2;
};
k.isNegative = k.isneg = function() {
  return this.s < 0;
};
k.isPositive = k.ispos = function() {
  return this.s > 0;
};
k.isZero = function() {
  return this.s === 0;
};
k.lessThan = k.lt = function(e2) {
  return this.cmp(e2) < 0;
};
k.lessThanOrEqualTo = k.lte = function(e2) {
  return this.cmp(e2) < 1;
};
k.logarithm = k.log = function(e2) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e2 === void 0) e2 = new n(10);
  else if (e2 = new n(e2), e2.s < 1 || e2.eq(We)) throw Error(Je + "NaN");
  if (r.s < 1) throw Error(Je + (r.s ? "NaN" : "-Infinity"));
  return r.eq(We) ? new n(0) : (ee = false, t = Pt(sn(r, a), sn(e2, a), a), ee = true, q(t, i));
};
k.minus = k.sub = function(e2) {
  var t = this;
  return e2 = new t.constructor(e2), t.s == e2.s ? dp(t, e2) : sp(t, (e2.s = -e2.s, e2));
};
k.modulo = k.mod = function(e2) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e2 = new n(e2), !e2.s) throw Error(Je + "NaN");
  return r.s ? (ee = false, t = Pt(r, e2, 0, 1).times(e2), ee = true, r.minus(t)) : q(new n(r), i);
};
k.naturalExponential = k.exp = function() {
  return fp(this);
};
k.naturalLogarithm = k.ln = function() {
  return sn(this);
};
k.negated = k.neg = function() {
  var e2 = new this.constructor(this);
  return e2.s = -e2.s || 0, e2;
};
k.plus = k.add = function(e2) {
  var t = this;
  return e2 = new t.constructor(e2), t.s == e2.s ? sp(t, e2) : dp(t, (e2.s = -e2.s, e2));
};
k.precision = k.sd = function(e2) {
  var t, r, n, i = this;
  if (e2 !== void 0 && e2 !== !!e2 && e2 !== 1 && e2 !== 0) throw Error(ur + e2);
  if (t = ie(i) + 1, n = i.d.length - 1, r = n * Q + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e2 && t > r ? t : r;
};
k.squareRoot = k.sqrt = function() {
  var e2, t, r, n, i, a, o, u = this, l = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new l(0);
    throw Error(Je + "NaN");
  }
  for (e2 = ie(u), ee = false, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = ct(u.d), (t.length + e2) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e2 = Ir((e2 + 1) / 2) - (e2 < 0 || e2 % 2), i == 1 / 0 ? t = "5e" + e2 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e2), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(Pt(u, a, o + 2)).times(0.5), ct(a.d).slice(0, o) === (t = ct(n.d)).slice(0, o)) {
    if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
      if (q(a, r + 1, 0), a.times(a).eq(u)) {
        n = a;
        break;
      }
    } else if (t != "9999") break;
    o += 4;
  }
  return ee = true, q(n, r);
};
k.times = k.mul = function(e2) {
  var t, r, n, i, a, o, u, l, s, c = this, f = c.constructor, d = c.d, v = (e2 = new f(e2)).d;
  if (!c.s || !e2.s) return new f(0);
  for (e2.s *= c.s, r = c.e + e2.e, l = d.length, s = v.length, l < s && (a = d, d = v, v = a, o = l, l = s, s = o), a = [], o = l + s, n = o; n--; ) a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; ) u = a[i] + v[n] * d[i - n - 1] + t, a[i--] = u % he | 0, t = u / he | 0;
    a[i] = (a[i] + t) % he | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e2.d = a, e2.e = r, ee ? q(e2, f.precision) : e2;
};
k.toDecimalPlaces = k.todp = function(e2, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e2 === void 0 ? r : (pt(e2, 0, Tr), t === void 0 ? t = n.rounding : pt(t, 0, 8), q(r, e2 + ie(r) + 1, t));
};
k.toExponential = function(e2, t) {
  var r, n = this, i = n.constructor;
  return e2 === void 0 ? r = dr(n, true) : (pt(e2, 0, Tr), t === void 0 ? t = i.rounding : pt(t, 0, 8), n = q(new i(n), e2 + 1, t), r = dr(n, true, e2 + 1)), r;
};
k.toFixed = function(e2, t) {
  var r, n, i = this, a = i.constructor;
  return e2 === void 0 ? dr(i) : (pt(e2, 0, Tr), t === void 0 ? t = a.rounding : pt(t, 0, 8), n = q(new a(i), e2 + ie(i) + 1, t), r = dr(n.abs(), false, e2 + ie(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
k.toInteger = k.toint = function() {
  var e2 = this, t = e2.constructor;
  return q(new t(e2), ie(e2) + 1, t.rounding);
};
k.toNumber = function() {
  return +this;
};
k.toPower = k.pow = function(e2) {
  var t, r, n, i, a, o, u = this, l = u.constructor, s = 12, c = +(e2 = new l(e2));
  if (!e2.s) return new l(We);
  if (u = new l(u), !u.s) {
    if (e2.s < 1) throw Error(Je + "Infinity");
    return u;
  }
  if (u.eq(We)) return u;
  if (n = l.precision, e2.eq(We)) return q(u, n);
  if (t = e2.e, r = e2.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = c < 0 ? -c : c) <= cp) {
      for (i = new l(We), t = Math.ceil(n / Q + 4), ee = false; r % 2 && (i = i.times(u), ef(i.d, t)), r = Ir(r / 2), r !== 0; ) u = u.times(u), ef(u.d, t);
      return ee = true, e2.s < 0 ? new l(We).div(i) : q(i, n);
    }
  } else if (a < 0) throw Error(Je + "NaN");
  return a = a < 0 && e2.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, ee = false, i = e2.times(sn(u, n + s)), ee = true, i = fp(i), i.s = a, i;
};
k.toPrecision = function(e2, t) {
  var r, n, i = this, a = i.constructor;
  return e2 === void 0 ? (r = ie(i), n = dr(i, r <= a.toExpNeg || r >= a.toExpPos)) : (pt(e2, 1, Tr), t === void 0 ? t = a.rounding : pt(t, 0, 8), i = q(new a(i), e2, t), r = ie(i), n = dr(i, e2 <= r || r <= a.toExpNeg, e2)), n;
};
k.toSignificantDigits = k.tosd = function(e2, t) {
  var r = this, n = r.constructor;
  return e2 === void 0 ? (e2 = n.precision, t = n.rounding) : (pt(e2, 1, Tr), t === void 0 ? t = n.rounding : pt(t, 0, 8)), q(new n(r), e2, t);
};
k.toString = k.valueOf = k.val = k.toJSON = k[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e2 = this, t = ie(e2), r = e2.constructor;
  return dr(e2, t <= r.toExpNeg || t >= r.toExpPos);
};
function sp(e2, t) {
  var r, n, i, a, o, u, l, s, c = e2.constructor, f = c.precision;
  if (!e2.s || !t.s) return t.s || (t = new c(e2)), ee ? q(t, f) : t;
  if (l = e2.d, s = t.d, o = e2.e, i = t.e, l = l.slice(), a = o - i, a) {
    for (a < 0 ? (n = l, a = -a, u = s.length) : (n = s, i = o, u = l.length), o = Math.ceil(f / Q), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = l.length, a = s.length, u - a < 0 && (a = u, n = s, s = l, l = n), r = 0; a; ) r = (l[--a] = l[a] + s[a] + r) / he | 0, l[a] %= he;
  for (r && (l.unshift(r), ++i), u = l.length; l[--u] == 0; ) l.pop();
  return t.d = l, t.e = i, ee ? q(t, f) : t;
}
function pt(e2, t, r) {
  if (e2 !== ~~e2 || e2 < t || e2 > r) throw Error(ur + e2);
}
function ct(e2) {
  var t, r, n, i = e2.length - 1, a = "", o = e2[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e2[t] + "", r = Q - n.length, r && (a += Lt(r)), a += n;
    o = e2[t], n = o + "", r = Q - n.length, r && (a += Lt(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var Pt = /* @__PURE__ */ function() {
  function e2(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; ) a = n[u] * i + o, n[u] = a % he | 0, o = a / he | 0;
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
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * he + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, l, s, c, f, d, v, p, y, m, g, w, b, P, x, O, A, M, T = n.constructor, D = n.s == i.s ? 1 : -1, E = n.d, j = i.d;
    if (!n.s) return new T(n);
    if (!i.s) throw Error(Je + "Division by zero");
    for (l = n.e - i.e, A = j.length, x = E.length, v = new T(D), p = v.d = [], s = 0; j[s] == (E[s] || 0); ) ++s;
    if (j[s] > (E[s] || 0) && --l, a == null ? w = a = T.precision : o ? w = a + (ie(n) - ie(i)) + 1 : w = a, w < 0) return new T(0);
    if (w = w / Q + 2 | 0, s = 0, A == 1) for (c = 0, j = j[0], w++; (s < x || c) && w--; s++) b = c * he + (E[s] || 0), p[s] = b / j | 0, c = b % j | 0;
    else {
      for (c = he / (j[0] + 1) | 0, c > 1 && (j = e2(j, c), E = e2(E, c), A = j.length, x = E.length), P = A, y = E.slice(0, A), m = y.length; m < A; ) y[m++] = 0;
      M = j.slice(), M.unshift(0), O = j[0], j[1] >= he / 2 && ++O;
      do
        c = 0, u = t(j, y, A, m), u < 0 ? (g = y[0], A != m && (g = g * he + (y[1] || 0)), c = g / O | 0, c > 1 ? (c >= he && (c = he - 1), f = e2(j, c), d = f.length, m = y.length, u = t(f, y, d, m), u == 1 && (c--, r(f, A < d ? M : j, d))) : (c == 0 && (u = c = 1), f = j.slice()), d = f.length, d < m && f.unshift(0), r(y, f, m), u == -1 && (m = y.length, u = t(j, y, A, m), u < 1 && (c++, r(y, A < m ? M : j, m))), m = y.length) : u === 0 && (c++, y = [0]), p[s++] = c, u && y[0] ? y[m++] = E[P] || 0 : (y = [E[P]], m = 1);
      while ((P++ < x || y[0] !== void 0) && w--);
    }
    return p[0] || p.shift(), v.e = l, q(v, o ? a + ie(v) + 1 : a);
  };
}();
function fp(e2, t) {
  var r, n, i, a, o, u, l = 0, s = 0, c = e2.constructor, f = c.precision;
  if (ie(e2) > 16) throw Error(al + ie(e2));
  if (!e2.s) return new c(We);
  for (ee = false, u = f, o = new c(0.03125); e2.abs().gte(0.1); ) e2 = e2.times(o), s += 5;
  for (n = Math.log(er(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new c(We), c.precision = u; ; ) {
    if (i = q(i.times(e2), u), r = r.times(++l), o = a.plus(Pt(i, r, u)), ct(o.d).slice(0, u) === ct(a.d).slice(0, u)) {
      for (; s--; ) a = q(a.times(a), u);
      return c.precision = f, t == null ? (ee = true, q(a, f)) : a;
    }
    a = o;
  }
}
function ie(e2) {
  for (var t = e2.e * Q, r = e2.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function to(e2, t, r) {
  if (t > e2.LN10.sd()) throw ee = true, r && (e2.precision = r), Error(Je + "LN10 precision limit exceeded");
  return q(new e2(e2.LN10), t);
}
function Lt(e2) {
  for (var t = ""; e2--; ) t += "0";
  return t;
}
function sn(e2, t) {
  var r, n, i, a, o, u, l, s, c, f = 1, d = 10, v = e2, p = v.d, y = v.constructor, m = y.precision;
  if (v.s < 1) throw Error(Je + (v.s ? "NaN" : "-Infinity"));
  if (v.eq(We)) return new y(0);
  if (t == null ? (ee = false, s = m) : s = t, v.eq(10)) return t == null && (ee = true), to(y, s);
  if (s += d, y.precision = s, r = ct(p), n = r.charAt(0), a = ie(v), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) v = v.times(e2), r = ct(v.d), n = r.charAt(0), f++;
    a = ie(v), n > 1 ? (v = new y("0." + r), a++) : v = new y(n + "." + r.slice(1));
  } else return l = to(y, s + 2, m).times(a + ""), v = sn(new y(n + "." + r.slice(1)), s - d).plus(l), y.precision = m, t == null ? (ee = true, q(v, m)) : v;
  for (u = o = v = Pt(v.minus(We), v.plus(We), s), c = q(v.times(v), s), i = 3; ; ) {
    if (o = q(o.times(c), s), l = u.plus(Pt(o, new y(i), s)), ct(l.d).slice(0, s) === ct(u.d).slice(0, s)) return u = u.times(2), a !== 0 && (u = u.plus(to(y, s + 2, m).times(a + ""))), u = Pt(u, new y(f), s), y.precision = m, t == null ? (ee = true, q(u, m)) : u;
    u = l, i += 2;
  }
}
function Js(e2, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e2.e = Ir(r / Q), e2.d = [], n = (r + 1) % Q, r < 0 && (n += Q), n < i) {
      for (n && e2.d.push(+t.slice(0, n)), i -= Q; n < i; ) e2.d.push(+t.slice(n, n += Q));
      t = t.slice(n), n = Q - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e2.d.push(+t), ee && (e2.e > Ni || e2.e < -Ni)) throw Error(al + r);
  } else e2.s = 0, e2.e = 0, e2.d = [0];
  return e2;
}
function q(e2, t, r) {
  var n, i, a, o, u, l, s, c, f = e2.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += Q, i = t, s = f[c = 0];
  else {
    if (c = Math.ceil((n + 1) / Q), a = f.length, c >= a) return e2;
    for (s = a = f[c], o = 1; a >= 10; a /= 10) o++;
    n %= Q, i = n - Q + o;
  }
  if (r !== void 0 && (a = er(10, o - i - 1), u = s / a % 10 | 0, l = t < 0 || f[c + 1] !== void 0 || s % a, l = r < 4 ? (u || l) && (r == 0 || r == (e2.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || l || r == 6 && (n > 0 ? i > 0 ? s / er(10, o - i) : 0 : f[c - 1]) % 10 & 1 || r == (e2.s < 0 ? 8 : 7))), t < 1 || !f[0]) return l ? (a = ie(e2), f.length = 1, t = t - a - 1, f[0] = er(10, (Q - t % Q) % Q), e2.e = Ir(-t / Q) || 0) : (f.length = 1, f[0] = e2.e = e2.s = 0), e2;
  if (n == 0 ? (f.length = c, a = 1, c--) : (f.length = c + 1, a = er(10, Q - n), f[c] = i > 0 ? (s / er(10, o - i) % er(10, i) | 0) * a : 0), l) for (; ; ) if (c == 0) {
    (f[0] += a) == he && (f[0] = 1, ++e2.e);
    break;
  } else {
    if (f[c] += a, f[c] != he) break;
    f[c--] = 0, a = 1;
  }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (ee && (e2.e > Ni || e2.e < -Ni)) throw Error(al + ie(e2));
  return e2;
}
function dp(e2, t) {
  var r, n, i, a, o, u, l, s, c, f, d = e2.constructor, v = d.precision;
  if (!e2.s || !t.s) return t.s ? t.s = -t.s : t = new d(e2), ee ? q(t, v) : t;
  if (l = e2.d, f = t.d, n = t.e, s = e2.e, l = l.slice(), o = s - n, o) {
    for (c = o < 0, c ? (r = l, o = -o, u = f.length) : (r = f, n = s, u = l.length), i = Math.max(Math.ceil(v / Q), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
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
      for (a = i; a && l[--a] === 0; ) l[a] = he - 1;
      --l[a], l[i] += he;
    }
    l[i] -= f[i];
  }
  for (; l[--u] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, ee ? q(t, v) : t) : new d(0);
}
function dr(e2, t, r) {
  var n, i = ie(e2), a = ct(e2.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + Lt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + Lt(-i - 1) + a, r && (n = r - o) > 0 && (a += Lt(n))) : i >= o ? (a += Lt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + Lt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += Lt(n))), e2.s < 0 ? "-" + a : a;
}
function ef(e2, t) {
  if (e2.length > t) return e2.length = t, true;
}
function vp(e2) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(ur + a);
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
      return Js(o, a.toString());
    } else if (typeof a != "string") throw Error(ur + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, _O.test(a)) Js(o, a);
    else throw Error(ur + a);
  }
  if (i.prototype = k, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = vp, i.config = i.set = EO, e2 === void 0 && (e2 = {}), e2) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e2.hasOwnProperty(r = n[t++]) || (e2[r] = this[r]);
  return i.config(e2), i;
}
function EO(e2) {
  if (!e2 || typeof e2 != "object") throw Error(Je + "Object expected");
  var t, r, n, i = ["precision", 1, Tr, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e2[r = i[t]]) !== void 0) if (Ir(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(ur + r + ": " + n);
  if ((n = e2[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(ur + r + ": " + n);
  return this;
}
var ol = vp(AO);
We = new ol(1);
const K = ol;
var CO = (e2) => e2, hp = {}, pp = (e2) => e2 === hp, tf = (e2) => function t() {
  return arguments.length === 0 || arguments.length === 1 && pp(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e2(...arguments);
}, mp = (e2, t) => e2 === 1 ? t : tf(function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
  var a = n.filter((o) => o !== hp).length;
  return a >= e2 ? t(...n) : mp(e2 - a, tf(function() {
    for (var o = arguments.length, u = new Array(o), l = 0; l < o; l++) u[l] = arguments[l];
    var s = n.map((c) => pp(c) ? u.shift() : c);
    return t(...s, ...u);
  }));
}), jO = (e2) => mp(e2.length, e2), Ho = (e2, t) => {
  for (var r = [], n = e2; n < t; ++n) r[n - e2] = n;
  return r;
}, MO = jO((e2, t) => Array.isArray(t) ? t.map(e2) : Object.keys(t).map((r) => t[r]).map(e2)), kO = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return CO;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce((u, l) => l(u), a(...arguments));
  };
};
function yp(e2) {
  var t;
  return e2 === 0 ? t = 1 : t = Math.floor(new K(e2).abs().log(10).toNumber()) + 1, t;
}
function gp(e2, t, r) {
  for (var n = new K(e2), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var bp = (e2) => {
  var [t, r] = e2, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, wp = (e2, t, r) => {
  if (e2.lte(0)) return new K(0);
  var n = yp(e2.toNumber()), i = new K(10).pow(n), a = e2.div(i), o = n !== 1 ? 0.05 : 0.1, u = new K(Math.ceil(a.div(o).toNumber())).add(r).mul(o), l = u.mul(i);
  return t ? new K(l.toNumber()) : new K(Math.ceil(l.toNumber()));
}, TO = (e2, t, r) => {
  var n = new K(1), i = new K(e2);
  if (!i.isint() && r) {
    var a = Math.abs(e2);
    a < 1 ? (n = new K(10).pow(yp(e2) - 1), i = new K(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new K(Math.floor(e2)));
  } else e2 === 0 ? i = new K(Math.floor((t - 1) / 2)) : r || (i = new K(Math.floor(e2)));
  var o = Math.floor((t - 1) / 2), u = kO(MO((l) => i.add(new K(l - o).mul(n)).toNumber()), Ho);
  return u(0, t);
}, xp = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1))) return { step: new K(0), tickMin: new K(0), tickMax: new K(0) };
  var o = wp(new K(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new K(0) : (u = new K(t).add(r).div(2), u = u.sub(new K(u).mod(o)));
  var l = Math.ceil(u.sub(t).div(o).toNumber()), s = Math.ceil(new K(r).sub(u).div(o).toNumber()), c = l + s + 1;
  return c > n ? xp(t, r, n, i, a + 1) : (c < n && (s = r > 0 ? s + (n - c) : s, l = r > 0 ? l : l + (n - c)), { step: o, tickMin: u.sub(new K(l).mul(o)), tickMax: u.add(new K(s).mul(o)) });
}, IO = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), [u, l] = bp([r, n]);
  if (u === -1 / 0 || l === 1 / 0) {
    var s = l === 1 / 0 ? [u, ...Ho(0, i - 1).map(() => 1 / 0)] : [...Ho(0, i - 1).map(() => -1 / 0), l];
    return r > n ? s.reverse() : s;
  }
  if (u === l) return TO(u, i, a);
  var { step: c, tickMin: f, tickMax: d } = xp(u, l, o, a, 0), v = gp(f, d.add(new K(0.1).mul(c)), c);
  return r > n ? v.reverse() : v;
}, DO = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, [o, u] = bp([n, i]);
  if (o === -1 / 0 || u === 1 / 0) return [n, i];
  if (o === u) return [o];
  var l = Math.max(r, 2), s = wp(new K(u).sub(o).div(l - 1), a, 0), c = [...gp(new K(o), new K(u), s), u];
  return a === false && (c = c.map((f) => Math.round(f))), n > i ? c.reverse() : c;
}, NO = (e2) => e2.rootProps.barCategoryGap, Ea = (e2) => e2.rootProps.stackOffset, Pp = (e2) => e2.rootProps.reverseStackOrder, ul = (e2) => e2.options.chartName, ll = (e2) => e2.rootProps.syncId, Op = (e2) => e2.rootProps.syncMethod, cl = (e2) => e2.options.eventEmitter, we = { grid: -100, barBackground: -50, area: 100, cursorRectangle: 200, bar: 300, line: 400, axis: 500, scatter: 600, activeBar: 1e3, cursorLine: 1100, activeDot: 1200, label: 2e3 }, gt = { allowDecimals: false, allowDuplicatedCategory: true, angleAxisId: 0, axisLine: true, axisLineType: "polygon", cx: 0, cy: 0, orientation: "outer", reversed: false, scale: "auto", tick: true, tickLine: true, tickSize: 8, type: "category", zIndex: we.axis }, Fe = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: true, angle: 0, axisLine: true, includeHidden: false, hide: false, label: false, orientation: "right", radiusAxisId: 0, reversed: false, scale: "auto", stroke: "#ccc", tick: true, tickCount: 5, type: "number", zIndex: we.axis }, Ca = (e2, t) => {
  if (!(!e2 || !t)) return e2 != null && e2.reversed ? [t[1], t[0]] : t;
}, $O = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: false, dataKey: void 0, domain: void 0, id: gt.angleAxisId, includeHidden: false, name: void 0, reversed: gt.reversed, scale: gt.scale, tick: gt.tick, tickCount: void 0, ticks: void 0, type: gt.type, unit: void 0 }, LO = { allowDataOverflow: Fe.allowDataOverflow, allowDecimals: false, allowDuplicatedCategory: Fe.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Fe.radiusAxisId, includeHidden: false, name: void 0, reversed: false, scale: Fe.scale, tick: Fe.tick, tickCount: Fe.tickCount, ticks: void 0, type: Fe.type, unit: void 0 }, RO = { allowDataOverflow: false, allowDecimals: false, allowDuplicatedCategory: gt.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: gt.angleAxisId, includeHidden: false, name: void 0, reversed: false, scale: gt.scale, tick: gt.tick, tickCount: void 0, ticks: void 0, type: "number", unit: void 0 }, zO = { allowDataOverflow: Fe.allowDataOverflow, allowDecimals: false, allowDuplicatedCategory: Fe.allowDuplicatedCategory, dataKey: void 0, domain: void 0, id: Fe.radiusAxisId, includeHidden: false, name: void 0, reversed: false, scale: Fe.scale, tick: Fe.tick, tickCount: Fe.tickCount, ticks: void 0, type: "category", unit: void 0 }, sl = (e2, t) => e2.polarAxis.angleAxis[t] != null ? e2.polarAxis.angleAxis[t] : e2.layout.layoutType === "radial" ? RO : $O, fl = (e2, t) => e2.polarAxis.radiusAxis[t] != null ? e2.polarAxis.radiusAxis[t] : e2.layout.layoutType === "radial" ? zO : LO, ja = (e2) => e2.polarOptions, dl = S([Mt, kt, Pe], Rx), Sp = S([ja, dl], (e2, t) => {
  if (e2 != null) return Ut(e2.innerRadius, t, 0);
}), Ap = S([ja, dl], (e2, t) => {
  if (e2 != null) return Ut(e2.outerRadius, t, t * 0.8);
}), BO = (e2) => {
  if (e2 == null) return [0, 0];
  var { startAngle: t, endAngle: r } = e2;
  return [t, r];
}, _p = S([ja], BO), CT = S([sl, _p], Ca), Ep = S([dl, Sp, Ap], (e2, t, r) => {
  if (!(e2 == null || t == null || r == null)) return [t, r];
}), jT = S([fl, Ep], Ca), Cp = S([X, ja, Sp, Ap, Mt, kt], (e2, t, r, n, i, a) => {
  if (!(e2 !== "centric" && e2 !== "radial" || t == null || r == null || n == null)) {
    var { cx: o, cy: u, startAngle: l, endAngle: s } = t;
    return { cx: Ut(o, i, i / 2), cy: Ut(u, a, a / 2), innerRadius: r, outerRadius: n, startAngle: l, endAngle: s, clockWise: false };
  }
}), ce = (e2, t) => t, Ma = (e2, t, r) => r;
function jp(e2) {
  return e2 == null ? void 0 : e2.id;
}
function Mp(e2, t, r) {
  var { chartData: n = [] } = t, { allowDuplicatedCategory: i, dataKey: a } = r, o = /* @__PURE__ */ new Map();
  return e2.forEach((u) => {
    var l, s = (l = u.data) !== null && l !== void 0 ? l : n;
    if (!(s == null || s.length === 0)) {
      var c = jp(u);
      s.forEach((f, d) => {
        var v = a == null || i ? d : String(xe(f, a, null)), p = xe(f, u.dataKey, 0), y;
        o.has(v) ? y = o.get(v) : y = {}, Object.assign(y, { [c]: p }), o.set(v, y);
      });
    }
  }), Array.from(o.values());
}
function vl(e2) {
  return "stackId" in e2 && e2.stackId != null && e2.dataKey != null;
}
var ka = (e2, t) => e2 === t ? true : e2 == null || t == null ? false : e2[0] === t[0] && e2[1] === t[1];
function Ta(e2, t) {
  return Array.isArray(e2) && Array.isArray(t) && e2.length === 0 && t.length === 0 ? true : e2 === t;
}
function FO(e2, t) {
  if (e2.length === t.length) {
    for (var r = 0; r < e2.length; r++) if (e2[r] !== t[r]) return false;
    return true;
  }
  return false;
}
var se = (e2) => {
  var t = X(e2);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, Dr = (e2) => e2.tooltip.settings.axisId;
function rf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $i(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rf(Object(r), true).forEach(function(n) {
      WO(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : rf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function WO(e2, t, r) {
  return (t = UO(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function UO(e2) {
  var t = KO(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KO(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var qo = [0, "auto"], de = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: void 0, height: 30, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "bottom", padding: { left: 0, right: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "category", unit: void 0 }, kp = (e2, t) => e2.cartesianAxis.xAxis[t], It = (e2, t) => {
  var r = kp(e2, t);
  return r ?? de;
}, ve = { allowDataOverflow: false, allowDecimals: true, allowDuplicatedCategory: true, angle: 0, dataKey: void 0, domain: qo, hide: true, id: 0, includeHidden: false, interval: "preserveEnd", minTickGap: 5, mirror: false, name: void 0, orientation: "left", padding: { top: 0, bottom: 0 }, reversed: false, scale: "auto", tick: true, tickCount: 5, tickFormatter: void 0, ticks: void 0, type: "number", unit: void 0, width: wn }, Tp = (e2, t) => e2.cartesianAxis.yAxis[t], Dt = (e2, t) => {
  var r = Tp(e2, t);
  return r ?? ve;
}, HO = { domain: [0, "auto"], includeHidden: false, reversed: false, allowDataOverflow: false, allowDuplicatedCategory: false, dataKey: void 0, id: 0, name: "", range: [64, 64], scale: "auto", type: "number", unit: "" }, hl = (e2, t) => {
  var r = e2.cartesianAxis.zAxis[t];
  return r ?? HO;
}, Ce = (e2, t, r) => {
  switch (t) {
    case "xAxis":
      return It(e2, r);
    case "yAxis":
      return Dt(e2, r);
    case "zAxis":
      return hl(e2, r);
    case "angleAxis":
      return sl(e2, r);
    case "radiusAxis":
      return fl(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, qO = (e2, t, r) => {
  switch (t) {
    case "xAxis":
      return It(e2, r);
    case "yAxis":
      return Dt(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, En = (e2, t, r) => {
  switch (t) {
    case "xAxis":
      return It(e2, r);
    case "yAxis":
      return Dt(e2, r);
    case "angleAxis":
      return sl(e2, r);
    case "radiusAxis":
      return fl(e2, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Ip = (e2) => e2.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e2.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Dp(e2, t) {
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
var Np = (e2) => e2.graphicalItems.cartesianItems, YO = S([ce, Ma], Dp), $p = (e2, t, r) => e2.filter(r).filter((n) => (t == null ? void 0 : t.includeHidden) === true ? true : !n.hide), Cn = S([Np, Ce, YO], $p, { memoizeOptions: { resultEqualityCheck: Ta } }), Lp = S([Cn], (e2) => e2.filter((t) => t.type === "area" || t.type === "bar").filter(vl)), Rp = (e2) => e2.filter((t) => !("stackId" in t) || t.stackId === void 0), GO = S([Cn], Rp), zp = (e2) => e2.map((t) => t.data).filter(Boolean).flat(1), VO = S([Cn], zp, { memoizeOptions: { resultEqualityCheck: Ta } }), Bp = (e2, t) => {
  var { chartData: r = [], dataStartIndex: n, dataEndIndex: i } = t;
  return e2.length > 0 ? e2 : r.slice(n, i + 1);
}, pl = S([VO, il], Bp), Fp = (e2, t, r) => (t == null ? void 0 : t.dataKey) != null ? e2.map((n) => ({ value: xe(n, t.dataKey) })) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e2.map((i) => ({ value: xe(i, n) }))) : e2.map((n) => ({ value: n })), Ia = S([pl, Ce, Cn], Fp);
function Wp(e2, t) {
  switch (e2) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return false;
  }
}
function ti(e2) {
  if (vt(e2) || e2 instanceof Date) {
    var t = Number(e2);
    if (ae(t)) return t;
  }
}
function nf(e2) {
  if (Array.isArray(e2)) {
    var t = [ti(e2[0]), ti(e2[1])];
    return Kt(t) ? t : void 0;
  }
  var r = ti(e2);
  if (r != null) return [r, r];
}
function jt(e2) {
  return e2.map(ti).filter(jg);
}
function XO(e2, t, r) {
  return !r || typeof t != "number" || dt(t) ? [] : r.length ? jt(r.flatMap((n) => {
    var i = xe(e2, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!ae(a) || !ae(o))) return [t - a, t + o];
  })) : [];
}
var fe = (e2) => {
  var t = se(e2), r = Dr(e2);
  return En(e2, t, r);
}, jn = S([fe], (e2) => e2 == null ? void 0 : e2.dataKey), ZO = S([Lp, il, fe], Mp), Up = (e2, t, r, n) => {
  var i = {}, a = t.reduce((o, u) => {
    if (u.stackId == null) return o;
    var l = o[u.stackId];
    return l == null && (l = []), l.push(u), o[u.stackId] = l, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [u, l] = o, s = n ? [...l].reverse() : l, c = s.map(jp);
    return [u, { stackedData: Rb(e2, c, r), graphicalItems: s }];
  }));
}, QO = S([ZO, Lp, Ea, Pp], Up), Kp = (e2, t, r, n) => {
  var { dataStartIndex: i, dataEndIndex: a } = t;
  if (n == null && r !== "zAxis") {
    var o = Fb(e2, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0)) return o;
  }
}, JO = S([Ce], (e2) => e2.allowDataOverflow), ml = (e2) => {
  var t;
  if (e2 == null || !("domain" in e2)) return qo;
  if (e2.domain != null) return e2.domain;
  if ("ticks" in e2 && e2.ticks != null) {
    if (e2.type === "number") {
      var r = jt(e2.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e2.type === "category") return e2.ticks.map(String);
  }
  return (t = e2 == null ? void 0 : e2.domain) !== null && t !== void 0 ? t : qo;
}, Hp = S([Ce], ml), qp = S([Hp, JO], lp), eS = S([QO, Vt, ce, qp], Kp, { memoizeOptions: { resultEqualityCheck: ka } }), yl = (e2) => e2.errorBars, tS = (e2, t, r) => e2.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Wp(r, n)), Li = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, Yp = (e2, t, r, n, i) => {
  var a, o;
  if (r.length > 0 && e2.forEach((u) => {
    r.forEach((l) => {
      var s, c, f = (s = n[l.id]) === null || s === void 0 ? void 0 : s.filter((g) => Wp(i, g)), d = xe(u, (c = t.dataKey) !== null && c !== void 0 ? c : l.dataKey), v = XO(u, d, f);
      if (v.length >= 2) {
        var p = Math.min(...v), y = Math.max(...v);
        (a == null || p < a) && (a = p), (o == null || y > o) && (o = y);
      }
      var m = nf(d);
      m != null && (a = a == null ? m[0] : Math.min(a, m[0]), o = o == null ? m[1] : Math.max(o, m[1]));
    });
  }), (t == null ? void 0 : t.dataKey) != null && e2.forEach((u) => {
    var l = nf(xe(u, t.dataKey));
    l != null && (a = a == null ? l[0] : Math.min(a, l[0]), o = o == null ? l[1] : Math.max(o, l[1]));
  }), ae(a) && ae(o)) return [a, o];
}, rS = S([pl, Ce, GO, yl, ce], Yp, { memoizeOptions: { resultEqualityCheck: ka } });
function nS(e2) {
  var { value: t } = e2;
  if (vt(t) || t instanceof Date) return t;
}
var iS = (e2, t, r) => {
  var n = e2.map(nS).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Dd(n)) ? Eh(0, e2.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, Gp = (e2) => e2.referenceElements.dots, Nr = (e2, t, r) => e2.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), aS = S([Gp, ce, Ma], Nr), Vp = (e2) => e2.referenceElements.areas, oS = S([Vp, ce, Ma], Nr), Xp = (e2) => e2.referenceElements.lines, uS = S([Xp, ce, Ma], Nr), Zp = (e2, t) => {
  if (e2 != null) {
    var r = jt(e2.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, lS = S(aS, ce, Zp), Qp = (e2, t) => {
  if (e2 != null) {
    var r = jt(e2.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, cS = S([oS, ce], Qp);
function sS(e2) {
  var t;
  if (e2.x != null) return jt([e2.x]);
  var r = (t = e2.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : jt(r);
}
function fS(e2) {
  var t;
  if (e2.y != null) return jt([e2.y]);
  var r = (t = e2.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : jt(r);
}
var Jp = (e2, t) => {
  if (e2 != null) {
    var r = e2.flatMap((n) => t === "xAxis" ? sS(n) : fS(n));
    if (r.length !== 0) return [Math.min(...r), Math.max(...r)];
  }
}, dS = S([uS, ce], Jp), vS = S(lS, dS, cS, (e2, t, r) => Li(e2, r, t)), em = (e2, t, r, n, i, a, o, u) => {
  if (r != null) return r;
  var l = o === "vertical" && u === "xAxis" || o === "horizontal" && u === "yAxis", s = l ? Li(n, a, i) : Li(a, i);
  return SO(t, s, e2.allowDataOverflow);
}, hS = S([Ce, Hp, qp, eS, rS, vS, X, ce], em, { memoizeOptions: { resultEqualityCheck: ka } }), pS = [0, 1], tm = (e2, t, r, n, i, a, o) => {
  if (!((e2 == null || r == null || r.length === 0) && o === void 0)) {
    var { dataKey: u, type: l } = e2, s = qt(t, a);
    if (s && u == null) {
      var c;
      return Eh(0, (c = r == null ? void 0 : r.length) !== null && c !== void 0 ? c : 0);
    }
    return l === "category" ? iS(n, e2, s) : i === "expand" ? pS : o;
  }
}, gl = S([Ce, X, pl, Ia, Ea, ce, hS], tm), rm = (e2, t, r, n, i) => {
  if (e2 != null) {
    var { scale: a, type: o } = e2;
    if (a === "auto") return t === "radial" && i === "radiusAxis" ? "band" : t === "radial" && i === "angleAxis" ? "linear" : o === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : o === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var u = "scale".concat(pn(a));
      return u in Vr ? u : "point";
    }
  }
}, Mn = S([Ce, X, Ip, ul, ce], rm);
function mS(e2) {
  if (e2 != null) {
    if (e2 in Vr) return Vr[e2]();
    var t = "scale".concat(pn(e2));
    if (t in Vr) return Vr[t]();
  }
}
function bl(e2, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e2.scale == "function") return e2.scale.copy().domain(r).range(n);
    var i = mS(t);
    if (i != null) {
      var a = i.domain(r).range(n);
      return Db(a), a;
    }
  }
}
var nm = (e2, t, r) => {
  var n = ml(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && Kt(e2)) return IO(e2, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && Kt(e2)) return DO(e2, t.tickCount, t.allowDecimals);
  }
}, wl = S([gl, En, Mn], nm), im = (e2, t, r, n) => {
  if (n !== "angleAxis" && (e2 == null ? void 0 : e2.type) === "number" && Kt(t) && Array.isArray(r) && r.length > 0) {
    var i = t[0], a = r[0], o = t[1], u = r[r.length - 1];
    return [Math.min(i, a), Math.max(o, u)];
  }
  return t;
}, yS = S([Ce, gl, wl, ce], im), gS = S(Ia, Ce, (e2, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(jt(e2.map((f) => f.value))).sort((f, d) => f - d), i = n[0], a = n[n.length - 1];
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
}), am = S(gS, X, NO, Pe, (e2, t, r, n, i) => i, (e2, t, r, n, i) => {
  if (!ae(e2)) return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap") return e2 * a / 2;
  if (i === "no-gap") {
    var o = Ut(r, e2 * a), u = e2 * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), bS = (e2, t, r) => {
  var n = It(e2, t);
  return n == null || typeof n.padding != "string" ? 0 : am(e2, "xAxis", t, r, n.padding);
}, wS = (e2, t, r) => {
  var n = Dt(e2, t);
  return n == null || typeof n.padding != "string" ? 0 : am(e2, "yAxis", t, r, n.padding);
}, xS = S(It, bS, (e2, t) => {
  var r, n;
  if (e2 == null) return { left: 0, right: 0 };
  var { padding: i } = e2;
  return typeof i == "string" ? { left: t, right: t } : { left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t, right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t };
}), PS = S(Dt, wS, (e2, t) => {
  var r, n;
  if (e2 == null) return { top: 0, bottom: 0 };
  var { padding: i } = e2;
  return typeof i == "string" ? { top: t, bottom: t } : { top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t, bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t };
}), OS = S([Pe, xS, ha, va, (e2, t, r) => r], (e2, t, r, n, i) => {
  var { padding: a } = n;
  return i ? [a.left, r.width - a.right] : [e2.left + t.left, e2.left + e2.width - t.right];
}), SS = S([Pe, X, PS, ha, va, (e2, t, r) => r], (e2, t, r, n, i, a) => {
  var { padding: o } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e2.top + e2.height - r.bottom, e2.top + r.top] : [e2.top + r.top, e2.top + e2.height - r.bottom];
}), kn = (e2, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return OS(e2, r, n);
    case "yAxis":
      return SS(e2, r, n);
    case "zAxis":
      return (i = hl(e2, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return _p(e2);
    case "radiusAxis":
      return Ep(e2, r);
    default:
      return;
  }
}, om = S([Ce, kn], Ca), Da = S([Ce, Mn, yS, om], bl);
S([Cn, yl, ce], tS);
function um(e2, t) {
  return e2.id < t.id ? -1 : e2.id > t.id ? 1 : 0;
}
var Na = (e2, t) => t, $a = (e2, t, r) => r, AS = S(fa, Na, $a, (e2, t, r) => e2.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(um)), _S = S(da, Na, $a, (e2, t, r) => e2.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(um)), lm = (e2, t) => ({ width: e2.width, height: t.height }), ES = (e2, t) => {
  var r = typeof t.width == "number" ? t.width : wn;
  return { width: r, height: e2.height };
}, CS = S(Pe, It, lm), jS = (e2, t, r) => {
  switch (t) {
    case "top":
      return e2.top;
    case "bottom":
      return r - e2.bottom;
    default:
      return 0;
  }
}, MS = (e2, t, r) => {
  switch (t) {
    case "left":
      return e2.left;
    case "right":
      return r - e2.right;
    default:
      return 0;
  }
}, kS = S(kt, Pe, AS, Na, $a, (e2, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = lm(t, u);
    o == null && (o = jS(t, n, e2));
    var s = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(s) * l.height, o += (s ? -1 : 1) * l.height;
  }), a;
}), TS = S(Mt, Pe, _S, Na, $a, (e2, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var l = ES(t, u);
    o == null && (o = MS(t, n, e2));
    var s = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(s) * l.width, o += (s ? -1 : 1) * l.width;
  }), a;
}), IS = (e2, t) => {
  var r = It(e2, t);
  if (r != null) return kS(e2, r.orientation, r.mirror);
}, DS = S([Pe, It, IS, (e2, t) => t], (e2, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: e2.left, y: 0 } : { x: e2.left, y: i };
  }
}), NS = (e2, t) => {
  var r = Dt(e2, t);
  if (r != null) return TS(e2, r.orientation, r.mirror);
}, $S = S([Pe, Dt, NS, (e2, t) => t], (e2, t, r, n) => {
  if (t != null) {
    var i = r == null ? void 0 : r[n];
    return i == null ? { x: 0, y: e2.top } : { x: i, y: e2.top };
  }
}), LS = S(Pe, Dt, (e2, t) => {
  var r = typeof t.width == "number" ? t.width : wn;
  return { width: r, height: e2.height };
}), cm = (e2, t, r, n) => {
  if (r != null) {
    var { allowDuplicatedCategory: i, type: a, dataKey: o } = r, u = qt(e2, n), l = t.map((s) => s.value);
    if (o && u && a === "category" && i && Dd(l)) return l;
  }
}, xl = S([X, Ia, Ce, ce], cm), sm = (e2, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var { type: i, scale: a } = r, o = qt(e2, n);
    if (o && (i === "number" || a !== "auto")) return t.map((u) => u.value);
  }
}, Pl = S([X, Ia, En, ce], sm), af = S([X, qO, Mn, Da, xl, Pl, kn, wl, ce], (e2, t, r, n, i, a, o, u, l) => {
  if (t != null) {
    var s = qt(e2, l);
    return { angle: t.angle, interval: t.interval, minTickGap: t.minTickGap, orientation: t.orientation, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit, axisType: l, categoricalDomain: a, duplicateDomain: i, isCategorical: s, niceTicks: u, range: o, realScaleType: r, scale: n };
  }
}), RS = (e2, t, r, n, i, a, o, u, l) => {
  if (!(t == null || n == null)) {
    var s = qt(e2, l), { type: c, ticks: f, tickCount: d } = t, v = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, p = c === "category" && n.bandwidth ? n.bandwidth() / v : 0;
    p = l === "angleAxis" && a != null && a.length >= 2 ? Xe(a[0] - a[1]) * 2 * p : p;
    var y = f || i;
    if (y) {
      var m = y.map((g, w) => {
        var b = o ? o.indexOf(g) : g;
        return { index: w, coordinate: n(b) + p, value: g, offset: p };
      });
      return m.filter((g) => ae(g.coordinate));
    }
    return s && u ? u.map((g, w) => ({ coordinate: n(g) + p, value: g, index: w, offset: p })).filter((g) => ae(g.coordinate)) : n.ticks ? n.ticks(d).map((g) => ({ coordinate: n(g) + p, value: g, offset: p })) : n.domain().map((g, w) => ({ coordinate: n(g) + p, value: o ? o[g] : g, index: w, offset: p }));
  }
}, fm = S([X, En, Mn, Da, wl, kn, xl, Pl, ce], RS), zS = (e2, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = qt(e2, o), { tickCount: l } = t, s = 0;
    return s = o === "angleAxis" && (n == null ? void 0 : n.length) >= 2 ? Xe(n[0] - n[1]) * 2 * s : s, u && a ? a.map((c, f) => ({ coordinate: r(c) + s, value: c, index: f, offset: s })) : r.ticks ? r.ticks(l).map((c) => ({ coordinate: r(c) + s, value: c, offset: s })) : r.domain().map((c, f) => ({ coordinate: r(c) + s, value: i ? i[c] : c, index: f, offset: s }));
  }
}, dm = S([X, En, Da, kn, xl, Pl, ce], zS), vm = S(Ce, Da, (e2, t) => {
  if (!(e2 == null || t == null)) return $i($i({}, e2), {}, { scale: t });
}), BS = S([Ce, Mn, gl, om], bl);
S((e2, t, r) => hl(e2, r), BS, (e2, t) => {
  if (!(e2 == null || t == null)) return $i($i({}, e2), {}, { scale: t });
});
var FS = S([X, fa, da], (e2, t, r) => {
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
}), hm = (e2) => e2.options.defaultTooltipEventType, pm = (e2) => e2.options.validateTooltipEventTypes;
function mm(e2, t, r) {
  if (e2 == null) return t;
  var n = e2 ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function Ol(e2, t) {
  var r = hm(e2), n = pm(e2);
  return mm(t, r, n);
}
function WS(e2) {
  return N((t) => Ol(t, e2));
}
var ym = (e2, t) => {
  var r, n = Number(t);
  if (!(dt(n) || t == null)) return n >= 0 ? e2 == null || (r = e2[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, US = (e2) => e2.tooltip.settings, zt = { active: false, index: null, dataKey: void 0, graphicalItemId: void 0, coordinate: void 0 }, KS = { itemInteraction: { click: zt, hover: zt }, axisInteraction: { click: zt, hover: zt }, keyboardInteraction: zt, syncInteraction: { active: false, index: null, dataKey: void 0, label: void 0, coordinate: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }, tooltipItemPayloads: [], settings: { shared: void 0, trigger: "hover", axisId: 0, active: false, defaultIndex: void 0 } }, gm = $e({ name: "tooltip", initialState: KS, reducers: { addTooltipEntrySettings: { reducer(e2, t) {
  e2.tooltipItemPayloads.push(t.payload);
}, prepare: J() }, replaceTooltipEntrySettings: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload, i = it(e2).tooltipItemPayloads.indexOf(r);
  i > -1 && (e2.tooltipItemPayloads[i] = n);
}, prepare: J() }, removeTooltipEntrySettings: { reducer(e2, t) {
  var r = it(e2).tooltipItemPayloads.indexOf(t.payload);
  r > -1 && e2.tooltipItemPayloads.splice(r, 1);
}, prepare: J() }, setTooltipSettingsState(e2, t) {
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
} } }), { addTooltipEntrySettings: HS, replaceTooltipEntrySettings: qS, removeTooltipEntrySettings: YS, setTooltipSettingsState: GS, setActiveMouseOverItemIndex: VS, mouseLeaveItem: MT, mouseLeaveChart: bm, setActiveClickItemIndex: kT, setMouseOverAxisIndex: wm, setMouseClickAxisIndex: XS, setSyncInteraction: Yo, setKeyboardInteraction: Go } = gm.actions, ZS = gm.reducer;
function of(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vn(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? of(Object(r), true).forEach(function(n) {
      QS(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : of(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function QS(e2, t, r) {
  return (t = JS(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function JS(e2) {
  var t = eA(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eA(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function tA(e2, t, r) {
  return t === "axis" ? r === "click" ? e2.axisInteraction.click : e2.axisInteraction.hover : r === "click" ? e2.itemInteraction.click : e2.itemInteraction.hover;
}
function rA(e2) {
  return e2.index != null;
}
var xm = (e2, t, r, n) => {
  if (t == null) return zt;
  var i = tA(e2, t, r);
  if (i == null) return zt;
  if (i.active) return i;
  if (e2.keyboardInteraction.active) return e2.keyboardInteraction;
  if (e2.syncInteraction.active && e2.syncInteraction.index != null) return e2.syncInteraction;
  var a = e2.settings.active === true;
  if (rA(i)) {
    if (a) return Vn(Vn({}, i), {}, { active: true });
  } else if (n != null) return { active: true, coordinate: void 0, dataKey: void 0, index: n, graphicalItemId: void 0 };
  return Vn(Vn({}, zt), {}, { coordinate: i.coordinate });
};
function nA(e2) {
  if (typeof e2 == "number") return Number.isFinite(e2) ? e2 : void 0;
  if (e2 instanceof Date) {
    var t = e2.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e2);
  return Number.isFinite(r) ? r : void 0;
}
function iA(e2, t) {
  var r = nA(e2), n = t[0], i = t[1];
  if (r === void 0) return false;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function aA(e2, t, r) {
  if (r == null || t == null) return true;
  var n = xe(e2, t);
  return n == null || !Kt(r) ? true : iA(n, r);
}
var Sl = (e2, t, r, n) => {
  var i = e2 == null ? void 0 : e2.index;
  if (i == null) return null;
  var a = Number(i);
  if (!ae(a)) return i;
  var o = 0, u = 1 / 0;
  t.length > 0 && (u = t.length - 1);
  var l = Math.max(o, Math.min(a, u)), s = t[l];
  return s == null || aA(s, r, n) ? String(l) : null;
}, Pm = (e2, t, r, n, i, a, o, u) => {
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
}, Om = (e2, t, r, n) => {
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
}, Tn = (e2) => e2.options.tooltipPayloadSearcher, $r = (e2) => e2.tooltip;
function uf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uf(Object(r), true).forEach(function(n) {
      oA(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function oA(e2, t, r) {
  return (t = uA(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function uA(e2) {
  var t = lA(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lA(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function cA(e2, t) {
  return e2 ?? t;
}
var Sm = (e2, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var { chartData: u, computedData: l, dataStartIndex: s, dataEndIndex: c } = r, f = [];
    return e2.reduce((d, v) => {
      var p, { dataDefinedOnItem: y, settings: m } = v, g = cA(y, u), w = Array.isArray(g) ? Wv(g, s, c) : g, b = (p = m == null ? void 0 : m.dataKey) !== null && p !== void 0 ? p : n, P = m == null ? void 0 : m.nameKey, x;
      if (n && Array.isArray(w) && !Array.isArray(w[0]) && o === "axis" ? x = Nd(w, n, i) : x = a(w, t, l, P), Array.isArray(x)) x.forEach((A) => {
        var M = lf(lf({}, m), {}, { name: A.name, unit: A.unit, color: void 0, fill: void 0 });
        d.push(xc({ tooltipEntrySettings: M, dataKey: A.dataKey, payload: A.payload, value: xe(A.payload, A.dataKey), name: A.name }));
      });
      else {
        var O;
        d.push(xc({ tooltipEntrySettings: m, dataKey: b, payload: x, value: xe(x, b), name: (O = xe(x, P)) !== null && O !== void 0 ? O : m == null ? void 0 : m.name }));
      }
      return d;
    }, f);
  }
}, Al = S([fe, X, Ip, ul, se], rm), sA = S([(e2) => e2.graphicalItems.cartesianItems, (e2) => e2.graphicalItems.polarItems], (e2, t) => [...e2, ...t]), fA = S([se, Dr], Dp), Lr = S([sA, fe, fA], $p, { memoizeOptions: { resultEqualityCheck: Ta } }), dA = S([Lr], (e2) => e2.filter(vl)), vA = S([Lr], zp, { memoizeOptions: { resultEqualityCheck: Ta } }), Rr = S([vA, Vt], Bp), hA = S([dA, Vt, fe], Mp), _l = S([Rr, fe, Lr], Fp), Am = S([fe], ml), pA = S([fe], (e2) => e2.allowDataOverflow), _m = S([Am, pA], lp), mA = S([Lr], (e2) => e2.filter(vl)), yA = S([hA, mA, Ea, Pp], Up), gA = S([yA, Vt, se, _m], Kp), bA = S([Lr], Rp), wA = S([Rr, fe, bA, yl, se], Yp, { memoizeOptions: { resultEqualityCheck: ka } }), xA = S([Gp, se, Dr], Nr), PA = S([xA, se], Zp), OA = S([Vp, se, Dr], Nr), SA = S([OA, se], Qp), AA = S([Xp, se, Dr], Nr), _A = S([AA, se], Jp), EA = S([PA, _A, SA], Li), CA = S([fe, Am, _m, gA, wA, EA, X, se], em), In = S([fe, X, Rr, _l, Ea, se, CA], tm), jA = S([In, fe, Al], nm), MA = S([fe, In, jA, se], im), Em = (e2) => {
  var t = se(e2), r = Dr(e2), n = false;
  return kn(e2, t, r, n);
}, Cm = S([fe, Em], Ca), jm = S([fe, Al, MA, Cm], bl), kA = S([X, _l, fe, se], cm), TA = S([X, _l, fe, se], sm), IA = (e2, t, r, n, i, a, o, u) => {
  if (t) {
    var { type: l } = t, s = qt(e2, u);
    if (n) {
      var c = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = l === "category" && n.bandwidth ? n.bandwidth() / c : 0;
      return f = u === "angleAxis" && i != null && (i == null ? void 0 : i.length) >= 2 ? Xe(i[0] - i[1]) * 2 * f : f, s && o ? o.map((d, v) => ({ coordinate: n(d) + f, value: d, index: v, offset: f })) : n.domain().map((d, v) => ({ coordinate: n(d) + f, value: a ? a[d] : d, index: v, offset: f }));
    }
  }
}, Nt = S([X, fe, Al, jm, Em, kA, TA, se], IA), El = S([hm, pm, US], (e2, t, r) => mm(r.shared, e2, t)), Mm = (e2) => e2.tooltip.settings.trigger, Cl = (e2) => e2.tooltip.settings.defaultIndex, Dn = S([$r, El, Mm, Cl], xm), fn = S([Dn, Rr, jn, In], Sl), km = S([Nt, fn], ym), DA = S([Dn], (e2) => {
  if (e2) return e2.dataKey;
});
S([Dn], (e2) => {
  if (e2) return e2.graphicalItemId;
});
var Tm = S([$r, El, Mm, Cl], Om), NA = S([Mt, kt, X, Pe, Nt, Cl, Tm, Tn], Pm), $A = S([Dn, NA], (e2, t) => e2 != null && e2.coordinate ? e2.coordinate : t), LA = S([Dn], (e2) => {
  var t;
  return (t = e2 == null ? void 0 : e2.active) !== null && t !== void 0 ? t : false;
}), RA = S([Tm, fn, Vt, jn, km, Tn, El], Sm), zA = S([RA], (e2) => {
  if (e2 != null) {
    var t = e2.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function cf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cf(Object(r), true).forEach(function(n) {
      BA(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : cf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function BA(e2, t, r) {
  return (t = FA(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function FA(e2) {
  var t = WA(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function WA(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var UA = () => N(fe), KA = () => {
  var e2 = UA(), t = N(Nt), r = N(jm);
  return mi(!e2 || !r ? void 0 : sf(sf({}, e2), {}, { scale: r }), t);
};
function ff(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gr(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ff(Object(r), true).forEach(function(n) {
      HA(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ff(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function HA(e2, t, r) {
  return (t = qA(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function qA(e2) {
  var t = YA(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YA(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var GA = (e2, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e2 === "horizontal") return { x: i.coordinate, y: n.chartY };
    if (e2 === "vertical") return { x: n.chartX, y: i.coordinate };
  }
  return { x: 0, y: 0 };
}, VA = (e2, t, r, n) => {
  var i = t.find((s) => s && s.index === r);
  if (i) {
    if (e2 === "centric") {
      var a = i.coordinate, { radius: o } = n;
      return gr(gr(gr({}, n), be(n.cx, n.cy, o, a)), {}, { angle: a, radius: o });
    }
    var u = i.coordinate, { angle: l } = n;
    return gr(gr(gr({}, n), be(n.cx, n.cy, u, l)), {}, { angle: l, radius: u });
  }
  return { angle: 0, clockWise: false, cx: 0, cy: 0, endAngle: 0, innerRadius: 0, outerRadius: 0, radius: 0, startAngle: 0, x: 0, y: 0 };
};
function XA(e2, t) {
  var { chartX: r, chartY: n } = e2;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var Im = (e2, t, r, n, i) => {
  var a, o = (a = t == null ? void 0 : t.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e2 == null) return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6) for (var u = 0; u < o; u++) {
    var l, s, c, f, d, v = u > 0 ? (l = r[u - 1]) === null || l === void 0 ? void 0 : l.coordinate : (s = r[o - 1]) === null || s === void 0 ? void 0 : s.coordinate, p = (c = r[u]) === null || c === void 0 ? void 0 : c.coordinate, y = u >= o - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (d = r[u + 1]) === null || d === void 0 ? void 0 : d.coordinate, m = void 0;
    if (!(v == null || p == null || y == null)) if (Xe(p - v) !== Xe(y - p)) {
      var g = [];
      if (Xe(y - p) === Xe(i[1] - i[0])) {
        m = y;
        var w = p + i[1] - i[0];
        g[0] = Math.min(w, (w + v) / 2), g[1] = Math.max(w, (w + v) / 2);
      } else {
        m = v;
        var b = y + i[1] - i[0];
        g[0] = Math.min(p, (b + p) / 2), g[1] = Math.max(p, (b + p) / 2);
      }
      var P = [Math.min(p, (m + p) / 2), Math.max(p, (m + p) / 2)];
      if (e2 > P[0] && e2 <= P[1] || e2 >= g[0] && e2 <= g[1]) {
        var x;
        return (x = r[u]) === null || x === void 0 ? void 0 : x.index;
      }
    } else {
      var O = Math.min(v, y), A = Math.max(v, y);
      if (e2 > (O + p) / 2 && e2 <= (A + p) / 2) {
        var M;
        return (M = r[u]) === null || M === void 0 ? void 0 : M.index;
      }
    }
  }
  else if (t) for (var T = 0; T < o; T++) {
    var D = t[T];
    if (D != null) {
      var E = t[T + 1], j = t[T - 1];
      if (T === 0 && E != null && e2 <= (D.coordinate + E.coordinate) / 2 || T === o - 1 && j != null && e2 > (D.coordinate + j.coordinate) / 2 || T > 0 && T < o - 1 && j != null && E != null && e2 > (D.coordinate + j.coordinate) / 2 && e2 <= (D.coordinate + E.coordinate) / 2) return D.index;
    }
  }
  return -1;
}, ZA = () => N(ul), jl = (e2, t) => t, Dm = (e2, t, r) => r, Ml = (e2, t, r, n) => n, QA = S(Nt, (e2) => ra(e2, (t) => t.coordinate)), kl = S([$r, jl, Dm, Ml], xm), Tl = S([kl, Rr, jn, In], Sl), JA = (e2, t, r) => {
  if (t != null) {
    var n = $r(e2);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Nm = S([$r, jl, Dm, Ml], Om), Ri = S([Mt, kt, X, Pe, Nt, Ml, Nm, Tn], Pm), e_ = S([kl, Ri], (e2, t) => {
  var r;
  return (r = e2.coordinate) !== null && r !== void 0 ? r : t;
}), $m = S([Nt, Tl], ym), t_ = S([Nm, Tl, Vt, jn, $m, Tn, jl], Sm), r_ = S([kl, Tl], (e2, t) => ({ isActive: e2.active && t != null, activeIndex: t })), n_ = (e2, t, r, n, i, a, o) => {
  if (!(!e2 || !r || !n || !i) && XA(e2, o)) {
    var u = Wb(e2, t), l = Im(u, a, i, r, n), s = GA(t, i, l, e2);
    return { activeIndex: String(l), activeCoordinate: s };
  }
}, i_ = (e2, t, r, n, i, a, o) => {
  if (!(!e2 || !n || !i || !a || !r)) {
    var u = Ux(e2, r);
    if (u) {
      var l = Ub(u, t), s = Im(l, o, a, n, i), c = VA(t, a, s, u);
      return { activeIndex: String(s), activeCoordinate: c };
    }
  }
}, a_ = (e2, t, r, n, i, a, o, u) => {
  if (!(!e2 || !t || !n || !i || !a)) return t === "horizontal" || t === "vertical" ? n_(e2, t, n, i, a, o, u) : i_(e2, t, r, n, i, a, o);
}, o_ = S((e2) => e2.zIndex.zIndexMap, (e2, t) => t, (e2, t, r) => r, (e2, t, r) => {
  if (t != null) {
    var n = e2[t];
    if (n != null) return r ? n.panoramaElement : n.element;
  }
}), u_ = S((e2) => e2.zIndex.zIndexMap, (e2) => {
  var t = Object.keys(e2).map((n) => parseInt(n, 10)).concat(Object.values(we)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, { memoizeOptions: { resultEqualityCheck: FO } });
function df(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? df(Object(r), true).forEach(function(n) {
      l_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : df(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function l_(e2, t, r) {
  return (t = c_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function c_(e2) {
  var t = s_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function s_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var f_ = {}, d_ = { zIndexMap: Object.values(we).reduce((e2, t) => vf(vf({}, e2), {}, { [t]: { element: void 0, panoramaElement: void 0, consumers: 0 } }), f_) }, v_ = new Set(Object.values(we));
function h_(e2) {
  return v_.has(e2);
}
var Lm = $e({ name: "zIndex", initialState: d_, reducers: { registerZIndexPortal: { reducer: (e2, t) => {
  var { zIndex: r } = t.payload;
  e2.zIndexMap[r] ? e2.zIndexMap[r].consumers += 1 : e2.zIndexMap[r] = { consumers: 1, element: void 0, panoramaElement: void 0 };
}, prepare: J() }, unregisterZIndexPortal: { reducer: (e2, t) => {
  var { zIndex: r } = t.payload;
  e2.zIndexMap[r] && (e2.zIndexMap[r].consumers -= 1, e2.zIndexMap[r].consumers <= 0 && !h_(r) && delete e2.zIndexMap[r]);
}, prepare: J() }, registerZIndexPortalElement: { reducer: (e2, t) => {
  var { zIndex: r, element: n, isPanorama: i } = t.payload;
  e2.zIndexMap[r] ? i ? e2.zIndexMap[r].panoramaElement = n : e2.zIndexMap[r].element = n : e2.zIndexMap[r] = { consumers: 0, element: i ? void 0 : n, panoramaElement: i ? n : void 0 };
}, prepare: J() }, unregisterZIndexPortalElement: { reducer: (e2, t) => {
  var { zIndex: r } = t.payload;
  e2.zIndexMap[r] && (t.payload.isPanorama ? e2.zIndexMap[r].panoramaElement = void 0 : e2.zIndexMap[r].element = void 0);
}, prepare: J() } } }), { registerZIndexPortal: p_, unregisterZIndexPortal: m_, registerZIndexPortalElement: y_, unregisterZIndexPortalElement: g_ } = Lm.actions, b_ = Lm.reducer;
function $t(e2) {
  var { zIndex: t, children: r } = e2, n = yw(), i = n && t !== void 0 && t !== 0, a = Le(), o = oe();
  h.useLayoutEffect(() => i ? (o(p_({ zIndex: t })), () => {
    o(m_({ zIndex: t }));
  }) : mn, [o, t, i]);
  var u = N((l) => o_(l, t, a));
  return i ? u ? fd.createPortal(r, u) : null : r;
}
function Vo() {
  return Vo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Vo.apply(null, arguments);
}
function hf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xn(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hf(Object(r), true).forEach(function(n) {
      w_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function w_(e2, t, r) {
  return (t = x_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function x_(e2) {
  var t = P_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function P_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function O_(e2) {
  var { cursor: t, cursorComp: r, cursorProps: n } = e2;
  return h.isValidElement(t) ? h.cloneElement(t, n) : h.createElement(r, n);
}
function S_(e2) {
  var t, { coordinate: r, payload: n, index: i, offset: a, tooltipAxisBandSize: o, layout: u, cursor: l, tooltipEventType: s, chartName: c } = e2, f = r, d = n, v = i;
  if (!l || !f || c !== "ScatterChart" && s !== "axis") return null;
  var p, y, m;
  if (c === "ScatterChart") p = f, y = rx, m = we.cursorLine;
  else if (c === "BarChart") p = nx(u, f, a, o), y = wh, m = we.cursorRectangle;
  else if (u === "radial" && Rd(f)) {
    var { cx: g, cy: w, radius: b, startAngle: P, endAngle: x } = xh(f);
    p = { cx: g, cy: w, startAngle: P, endAngle: x, innerRadius: b, outerRadius: b }, y = Oh, m = we.cursorLine;
  } else p = { points: Yx(u, f, a) }, y = ph, m = we.cursorLine;
  var O = typeof l == "object" && "className" in l ? l.className : void 0, A = Xn(Xn(Xn(Xn({ stroke: "#ccc", pointerEvents: "none" }, a), p), qi(l)), {}, { payload: d, payloadIndex: v, className: Y("recharts-tooltip-cursor", O) });
  return h.createElement($t, { zIndex: (t = e2.zIndex) !== null && t !== void 0 ? t : m }, h.createElement(O_, { cursor: l, cursorComp: y, cursorProps: A }));
}
function A_(e2) {
  var t = KA(), r = th(), n = xn(), i = ZA();
  return t == null || r == null || n == null || i == null ? null : h.createElement(S_, Vo({}, e2, { offset: r, layout: n, tooltipAxisBandSize: t, chartName: i }));
}
var Rm = h.createContext(null), __ = () => h.useContext(Rm), zm = { exports: {} };
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
    var y = r ? r + s : s;
    if (!this._events[y]) return false;
    var m = this._events[y], g = arguments.length, w, b;
    if (m.fn) {
      switch (m.once && this.removeListener(s, m.fn, void 0, true), g) {
        case 1:
          return m.fn.call(m.context), true;
        case 2:
          return m.fn.call(m.context, c), true;
        case 3:
          return m.fn.call(m.context, c, f), true;
        case 4:
          return m.fn.call(m.context, c, f, d), true;
        case 5:
          return m.fn.call(m.context, c, f, d, v), true;
        case 6:
          return m.fn.call(m.context, c, f, d, v, p), true;
      }
      for (b = 1, w = new Array(g - 1); b < g; b++) w[b - 1] = arguments[b];
      m.fn.apply(m.context, w);
    } else {
      var P = m.length, x;
      for (b = 0; b < P; b++) switch (m[b].once && this.removeListener(s, m[b].fn, void 0, true), g) {
        case 1:
          m[b].fn.call(m[b].context);
          break;
        case 2:
          m[b].fn.call(m[b].context, c);
          break;
        case 3:
          m[b].fn.call(m[b].context, c, f);
          break;
        case 4:
          m[b].fn.call(m[b].context, c, f, d);
          break;
        default:
          if (!w) for (x = 1, w = new Array(g - 1); x < g; x++) w[x - 1] = arguments[x];
          m[b].fn.apply(m[b].context, w);
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
      for (var y = 0, m = [], g = p.length; y < g; y++) (p[y].fn !== c || d && !p[y].once || f && p[y].context !== f) && m.push(p[y]);
      m.length ? this._events[v] = m.length === 1 ? m[0] : m : o(this, v);
    }
    return this;
  }, u.prototype.removeAllListeners = function(s) {
    var c;
    return s ? (c = r ? r + s : s, this._events[c] && o(this, c)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e2.exports = u;
})(zm);
var E_ = zm.exports;
const C_ = Ht(E_);
var dn = new C_(), Xo = "recharts.syncEvent.tooltip", pf = "recharts.syncEvent.brush";
function j_(e2, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!dt(r)) return e2 == null ? void 0 : e2[r];
  }
}
var M_ = { chartName: "", tooltipPayloadSearcher: void 0, eventEmitter: void 0, defaultTooltipEventType: "axis" }, Bm = $e({ name: "options", initialState: M_, reducers: { createEventEmitter: (e2) => {
  e2.eventEmitter == null && (e2.eventEmitter = Symbol("rechartsEventEmitter"));
} } }), k_ = Bm.reducer, { createEventEmitter: T_ } = Bm.actions;
function I_(e2) {
  return e2.tooltip.syncInteraction;
}
var D_ = { chartData: void 0, computedData: void 0, dataStartIndex: 0, dataEndIndex: 0 }, Fm = $e({ name: "chartData", initialState: D_, reducers: { setChartData(e2, t) {
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
} } }), { setChartData: mf, setDataStartEndIndexes: N_, setComputedData: TT } = Fm.actions, $_ = Fm.reducer, L_ = ["x", "y"];
function yf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function br(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yf(Object(r), true).forEach(function(n) {
      R_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function R_(e2, t, r) {
  return (t = z_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function z_(e2) {
  var t = B_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function B_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function F_(e2, t) {
  if (e2 == null) return {};
  var r, n, i = W_(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function W_(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function U_() {
  var e2 = N(ll), t = N(cl), r = oe(), n = N(Op), i = N(Nt), a = xn(), o = pa(), u = N((l) => l.rootProps.className);
  h.useEffect(() => {
    if (e2 == null) return mn;
    var l = (s, c, f) => {
      if (t !== f && e2 === s) {
        if (n === "index") {
          var d;
          if (o && c !== null && c !== void 0 && (d = c.payload) !== null && d !== void 0 && d.coordinate && c.payload.sourceViewBox) {
            var v = c.payload.coordinate, { x: p, y } = v, m = F_(v, L_), { x: g, y: w, width: b, height: P } = c.payload.sourceViewBox, x = br(br({}, m), {}, { x: o.x + (b ? (p - g) / b : 0) * o.width, y: o.y + (P ? (y - w) / P : 0) * o.height });
            r(br(br({}, c), {}, { payload: br(br({}, c.payload), {}, { coordinate: x }) }));
          } else r(c);
          return;
        }
        if (i != null) {
          var O;
          if (typeof n == "function") {
            var A = { activeTooltipIndex: c.payload.index == null ? void 0 : Number(c.payload.index), isTooltipActive: c.payload.active, activeIndex: c.payload.index == null ? void 0 : Number(c.payload.index), activeLabel: c.payload.label, activeDataKey: c.payload.dataKey, activeCoordinate: c.payload.coordinate }, M = n(i, A);
            O = i[M];
          } else n === "value" && (O = i.find((Z) => String(Z.value) === c.payload.label));
          var { coordinate: T } = c.payload;
          if (O == null || c.payload.active === false || T == null || o == null) {
            r(Yo({ active: false, coordinate: void 0, dataKey: void 0, index: null, label: void 0, sourceViewBox: void 0, graphicalItemId: void 0 }));
            return;
          }
          var { x: D, y: E } = T, j = Math.min(D, o.x + o.width), R = Math.min(E, o.y + o.height), L = { x: a === "horizontal" ? O.coordinate : j, y: a === "horizontal" ? R : O.coordinate }, U = Yo({ active: c.payload.active, coordinate: L, dataKey: c.payload.dataKey, index: String(O.index), label: c.payload.label, sourceViewBox: c.payload.sourceViewBox, graphicalItemId: c.payload.graphicalItemId });
          r(U);
        }
      }
    };
    return dn.on(Xo, l), () => {
      dn.off(Xo, l);
    };
  }, [u, r, t, e2, n, i, a, o]);
}
function K_() {
  var e2 = N(ll), t = N(cl), r = oe();
  h.useEffect(() => {
    if (e2 == null) return mn;
    var n = (i, a, o) => {
      t !== o && e2 === i && r(N_(a));
    };
    return dn.on(pf, n), () => {
      dn.off(pf, n);
    };
  }, [r, t, e2]);
}
function H_() {
  var e2 = oe();
  h.useEffect(() => {
    e2(T_());
  }, [e2]), U_(), K_();
}
function q_(e2, t, r, n, i, a) {
  var o = N((v) => JA(v, e2, t)), u = N(cl), l = N(ll), s = N(Op), c = N(I_), f = c == null ? void 0 : c.active, d = pa();
  h.useEffect(() => {
    if (!f && l != null && u != null) {
      var v = Yo({ active: a, coordinate: r, dataKey: o, index: i, label: typeof n == "number" ? String(n) : n, sourceViewBox: d, graphicalItemId: void 0 });
      dn.emit(Xo, l, v, u);
    }
  }, [f, r, o, i, n, u, l, s, a, d]);
}
function gf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function bf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gf(Object(r), true).forEach(function(n) {
      Y_(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : gf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Y_(e2, t, r) {
  return (t = G_(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function G_(e2) {
  var t = V_(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function V_(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function X_(e2) {
  return e2.dataKey;
}
function Z_(e2, t) {
  return h.isValidElement(e2) ? h.cloneElement(e2, t) : typeof e2 == "function" ? h.createElement(e2, t) : h.createElement(Nw, t);
}
var wf = [], Q_ = { allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", axisId: 0, contentStyle: {}, cursor: true, filterNull: true, includeHidden: false, isAnimationActive: "auto", itemSorter: "name", itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, wrapperStyle: {} };
function IT(e2) {
  var t, r, n = Ne(e2, Q_), { active: i, allowEscapeViewBox: a, animationDuration: o, animationEasing: u, content: l, filterNull: s, isAnimationActive: c, offset: f, payloadUniqBy: d, position: v, reverseDirection: p, useTranslate3d: y, wrapperStyle: m, cursor: g, shared: w, trigger: b, defaultIndex: P, portal: x, axisId: O } = n, A = oe(), M = typeof P == "number" ? String(P) : P;
  h.useEffect(() => {
    A(GS({ shared: w, trigger: b, axisId: O, active: i, defaultIndex: M }));
  }, [A, w, b, O, i, M]);
  var T = pa(), D = hh(), E = WS(w), { activeIndex: j, isActive: R } = (t = N((ke) => r_(ke, E, b, M))) !== null && t !== void 0 ? t : {}, L = N((ke) => t_(ke, E, b, M)), U = N((ke) => $m(ke, E, b, M)), Z = N((ke) => e_(ke, E, b, M)), B = L, H = __(), $ = (r = i ?? R) !== null && r !== void 0 ? r : false, [je, Re] = j0([B, $]), Me = E === "axis" ? U : void 0;
  q_(E, b, Z, Me, j, $);
  var mt = x ?? H;
  if (mt == null || T == null || E == null) return null;
  var qe = B ?? wf;
  $ || (qe = wf), s && qe.length && (qe = Yg(qe.filter((ke) => ke.value != null && (ke.hide !== true || n.includeHidden)), d, X_));
  var Xt = qe.length > 0, zr = h.createElement(Ww, { allowEscapeViewBox: a, animationDuration: o, animationEasing: u, isAnimationActive: c, active: $, coordinate: Z, hasPayload: Xt, offset: f, position: v, reverseDirection: p, useTranslate3d: y, viewBox: T, wrapperStyle: m, lastBoundingBox: je, innerRef: Re, hasPortalFromProps: !!x }, Z_(l, bf(bf({}, n), {}, { payload: qe, label: Me, active: $, activeIndex: j, coordinate: Z, accessibilityLayer: D })));
  return h.createElement(h.Fragment, null, fd.createPortal(zr, mt), $ && h.createElement(A_, { cursor: g, tooltipEventType: E, coordinate: Z, payload: qe, index: j }));
}
function J_(e2, t, r) {
  return (t = eE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function eE(e2) {
  var t = tE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
class rE {
  constructor(t) {
    J_(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
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
function xf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nE(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xf(Object(r), true).forEach(function(n) {
      iE(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function iE(e2, t, r) {
  return (t = aE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function aE(e2) {
  var t = oE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var uE = { cacheSize: 2e3, enableCache: true }, Wm = nE({}, uE), Pf = new rE(Wm.cacheSize), lE = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, Of = "recharts_measurement_span";
function cE(e2, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e2, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var Sf = (e2, t) => {
  try {
    var r = document.getElementById(Of);
    r || (r = document.createElement("span"), r.setAttribute("id", Of), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, lE, t), r.textContent = "".concat(e2);
    var n = r.getBoundingClientRect();
    return { width: n.width, height: n.height };
  } catch {
    return { width: 0, height: 0 };
  }
}, Xr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || wa.isSsr) return { width: 0, height: 0 };
  if (!Wm.enableCache) return Sf(t, r);
  var n = cE(t, r), i = Pf.get(n);
  if (i) return i;
  var a = Sf(t, r);
  return Pf.set(n, a), a;
}, Um;
function sE(e2, t, r) {
  return (t = fE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function fE(e2) {
  var t = dE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Af = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, _f = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, vE = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, hE = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, pE = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, mE = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function yE(e2) {
  return mE.includes(e2);
}
var Pr = "NaN";
function gE(e2, t) {
  return e2 * pE[t];
}
class ge {
  static parse(t) {
    var r, [, n, i] = (r = hE.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? ge.NaN : new ge(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, dt(t) && (this.unit = ""), r !== "" && !vE.test(r) && (this.num = NaN, this.unit = ""), yE(r) && (this.num = gE(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new ge(NaN, "") : new ge(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new ge(NaN, "") : new ge(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new ge(NaN, "") : new ge(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new ge(NaN, "") : new ge(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return dt(this.num);
  }
}
Um = ge;
sE(ge, "NaN", new Um(NaN, ""));
function Km(e2) {
  if (e2 == null || e2.includes(Pr)) return Pr;
  for (var t = e2; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = Af.exec(t)) !== null && r !== void 0 ? r : [], o = ge.parse(n ?? ""), u = ge.parse(a ?? ""), l = i === "*" ? o.multiply(u) : o.divide(u);
    if (l.isNaN()) return Pr;
    t = t.replace(Af, l.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var s, [, c, f, d] = (s = _f.exec(t)) !== null && s !== void 0 ? s : [], v = ge.parse(c ?? ""), p = ge.parse(d ?? ""), y = f === "+" ? v.add(p) : v.subtract(p);
    if (y.isNaN()) return Pr;
    t = t.replace(_f, y.toString());
  }
  return t;
}
var Ef = /\(([^()]*)\)/;
function bE(e2) {
  for (var t = e2, r; (r = Ef.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Ef, Km(n));
  }
  return t;
}
function wE(e2) {
  var t = e2.replace(/\s+/g, "");
  return t = bE(t), t = Km(t), t;
}
function xE(e2) {
  try {
    return wE(e2);
  } catch {
    return Pr;
  }
}
function ro(e2) {
  var t = xE(e2.slice(5, -1));
  return t === Pr ? "" : t;
}
var PE = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], OE = ["dx", "dy", "angle", "className", "breakAll"];
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Zo.apply(null, arguments);
}
function Cf(e2, t) {
  if (e2 == null) return {};
  var r, n, i = SE(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function SE(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var Hm = /[ \f\n\r\t\v\u2028\u2029]+/, qm = (e2) => {
  var { children: t, breakAll: r, style: n } = e2;
  try {
    var i = [];
    pe(t) || (r ? i = t.toString().split("") : i = t.toString().split(Hm));
    var a = i.map((u) => ({ word: u, width: Xr(u, n).width })), o = r ? 0 : Xr("\xA0", n).width;
    return { wordsWithComputedWidth: a, spaceWidth: o };
  } catch {
    return null;
  }
};
function AE(e2) {
  return e2 === "start" || e2 === "middle" || e2 === "end" || e2 === "inherit";
}
var Ym = (e2, t, r, n) => e2.reduce((i, a) => {
  var { word: o, width: u } = a, l = i[i.length - 1];
  if (l && u != null && (t == null || n || l.width + u + r < Number(t))) l.words.push(o), l.width += u + r;
  else {
    var s = { words: [o], width: u };
    i.push(s);
  }
  return i;
}, []), Gm = (e2) => e2.reduce((t, r) => t.width > r.width ? t : r), _E = "\u2026", jf = (e2, t, r, n, i, a, o, u) => {
  var l = e2.slice(0, t), s = qm({ breakAll: r, style: n, children: l + _E });
  if (!s) return [false, []];
  var c = Ym(s.wordsWithComputedWidth, a, o, u), f = c.length > i || Gm(c).width > Number(a);
  return [f, c];
}, EE = (e2, t, r, n, i) => {
  var { maxLines: a, children: o, style: u, breakAll: l } = e2, s = I(a), c = String(o), f = Ym(t, n, r, i);
  if (!s || i) return f;
  var d = f.length > a || Gm(f).width > Number(n);
  if (!d) return f;
  for (var v = 0, p = c.length - 1, y = 0, m; v <= p && y <= c.length - 1; ) {
    var g = Math.floor((v + p) / 2), w = g - 1, [b, P] = jf(c, w, l, u, a, n, r, i), [x] = jf(c, g, l, u, a, n, r, i);
    if (!b && !x && (v = g + 1), b && x && (p = g - 1), !b && x) {
      m = P;
      break;
    }
    y++;
  }
  return m || f;
}, Mf = (e2) => {
  var t = pe(e2) ? [] : e2.toString().split(Hm);
  return [{ words: t, width: void 0 }];
}, CE = (e2) => {
  var { width: t, scaleToFit: r, children: n, style: i, breakAll: a, maxLines: o } = e2;
  if ((t || r) && !wa.isSsr) {
    var u, l, s = qm({ breakAll: a, children: n, style: i });
    if (s) {
      var { wordsWithComputedWidth: c, spaceWidth: f } = s;
      u = c, l = f;
    } else return Mf(n);
    return EE({ breakAll: a, children: n, maxLines: o, style: i }, u, l, t, !!r);
  }
  return Mf(n);
}, Vm = "#808080", jE = { angle: 0, breakAll: false, capHeight: "0.71em", fill: Vm, lineHeight: "1em", scaleToFit: false, textAnchor: "start", verticalAnchor: "end", x: 0, y: 0 }, Il = h.forwardRef((e2, t) => {
  var r = Ne(e2, jE), { x: n, y: i, lineHeight: a, capHeight: o, fill: u, scaleToFit: l, textAnchor: s, verticalAnchor: c } = r, f = Cf(r, PE), d = h.useMemo(() => CE({ breakAll: f.breakAll, children: f.children, maxLines: f.maxLines, scaleToFit: l, style: f.style, width: f.width }), [f.breakAll, f.children, f.maxLines, l, f.style, f.width]), { dx: v, dy: p, angle: y, className: m, breakAll: g } = f, w = Cf(f, OE);
  if (!vt(n) || !vt(i) || d.length === 0) return null;
  var b = Number(n) + (I(v) ? v : 0), P = Number(i) + (I(p) ? p : 0);
  if (!ae(b) || !ae(P)) return null;
  var x;
  switch (c) {
    case "start":
      x = ro("calc(".concat(o, ")"));
      break;
    case "middle":
      x = ro("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      x = ro("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var O = [];
  if (l) {
    var A = d[0].width, { width: M } = f;
    O.push("scale(".concat(I(M) && I(A) ? M / A : 1, ")"));
  }
  return y && O.push("rotate(".concat(y, ", ").concat(b, ", ").concat(P, ")")), O.length && (w.transform = O.join(" ")), h.createElement("text", Zo({}, _e(w), { ref: t, x: b, y: P, className: Y("recharts-text", m), textAnchor: s, fill: u.includes("url") ? Vm : u }), d.map((T, D) => {
    var E = T.words.join(g ? "" : " ");
    return h.createElement("tspan", { x: b, dy: D === 0 ? x : a, key: "".concat(E, "-").concat(D) }, E);
  }));
});
Il.displayName = "Text";
var ME = ["labelRef"], kE = ["content"];
function kf(e2, t) {
  if (e2 == null) return {};
  var r, n, i = TE(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function TE(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function Tf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tf(Object(r), true).forEach(function(n) {
      IE(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Tf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function IE(e2, t, r) {
  return (t = DE(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function DE(e2) {
  var t = NE(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function NE(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, bt.apply(null, arguments);
}
var Xm = h.createContext(null), $E = (e2) => {
  var { x: t, y: r, upperWidth: n, lowerWidth: i, width: a, height: o, children: u } = e2, l = h.useMemo(() => ({ x: t, y: r, upperWidth: n, lowerWidth: i, width: a, height: o }), [t, r, n, i, a, o]);
  return h.createElement(Xm.Provider, { value: l }, u);
}, Zm = () => {
  var e2 = h.useContext(Xm), t = pa();
  return e2 || eh(t);
}, Qm = h.createContext(null), DT = (e2) => {
  var { cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o, clockWise: u, children: l } = e2, s = h.useMemo(() => ({ cx: t, cy: r, innerRadius: n, outerRadius: i, startAngle: a, endAngle: o, clockWise: u }), [t, r, n, i, a, o, u]);
  return h.createElement(Qm.Provider, { value: s }, l);
}, Jm = () => {
  var e2 = h.useContext(Qm), t = N(Cp);
  return e2 || t;
}, LE = (e2) => {
  var { value: t, formatter: r } = e2, n = pe(e2.children) ? t : e2.children;
  return typeof r == "function" ? r(n) : n;
}, Dl = (e2) => e2 != null && typeof e2 == "function", RE = (e2, t) => {
  var r = Xe(t - e2), n = Math.min(Math.abs(t - e2), 360);
  return r * n;
}, zE = (e2, t, r, n, i) => {
  var { offset: a, className: o } = e2, { cx: u, cy: l, innerRadius: s, outerRadius: c, startAngle: f, endAngle: d, clockWise: v } = i, p = (s + c) / 2, y = RE(f, d), m = y >= 0 ? 1 : -1, g, w;
  switch (t) {
    case "insideStart":
      g = f + m * a, w = v;
      break;
    case "insideEnd":
      g = d - m * a, w = !v;
      break;
    case "end":
      g = d + m * a, w = v;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  w = y <= 0 ? w : !w;
  var b = be(u, l, p, g), P = be(u, l, p, g + (w ? 1 : -1) * 359), x = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(p, ",").concat(p, ",0,1,").concat(w ? 0 : 1, `,
    `).concat(P.x, ",").concat(P.y), O = pe(e2.id) ? Zr("recharts-radial-line-") : e2.id;
  return h.createElement("text", bt({}, n, { dominantBaseline: "central", className: Y("recharts-radial-bar-label", o) }), h.createElement("defs", null, h.createElement("path", { id: O, d: x })), h.createElement("textPath", { xlinkHref: "#".concat(O) }, r));
}, BE = (e2, t, r) => {
  var { cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: u, endAngle: l } = e2, s = (u + l) / 2;
  if (r === "outside") {
    var { x: c, y: f } = be(n, i, o + t, s);
    return { x: c, y: f, textAnchor: c >= n ? "start" : "end", verticalAnchor: "middle" };
  }
  if (r === "center") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "middle" };
  if (r === "centerTop") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "start" };
  if (r === "centerBottom") return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
  var d = (a + o) / 2, { x: v, y: p } = be(n, i, d, s);
  return { x: v, y: p, textAnchor: "middle", verticalAnchor: "middle" };
}, Qo = (e2) => "cx" in e2 && I(e2.cx), FE = (e2, t) => {
  var { parentViewBox: r, offset: n, position: i } = e2, a;
  r != null && !Qo(r) && (a = r);
  var { x: o, y: u, upperWidth: l, lowerWidth: s, height: c } = t, f = o, d = o + (l - s) / 2, v = (f + d) / 2, p = (l + s) / 2, y = f + l / 2, m = c >= 0 ? 1 : -1, g = m * n, w = m > 0 ? "end" : "start", b = m > 0 ? "start" : "end", P = l >= 0 ? 1 : -1, x = P * n, O = P > 0 ? "end" : "start", A = P > 0 ? "start" : "end";
  if (i === "top") {
    var M = { x: f + l / 2, y: u - g, textAnchor: "middle", verticalAnchor: w };
    return re(re({}, M), a ? { height: Math.max(u - a.y, 0), width: l } : {});
  }
  if (i === "bottom") {
    var T = { x: d + s / 2, y: u + c + g, textAnchor: "middle", verticalAnchor: b };
    return re(re({}, T), a ? { height: Math.max(a.y + a.height - (u + c), 0), width: s } : {});
  }
  if (i === "left") {
    var D = { x: v - x, y: u + c / 2, textAnchor: O, verticalAnchor: "middle" };
    return re(re({}, D), a ? { width: Math.max(D.x - a.x, 0), height: c } : {});
  }
  if (i === "right") {
    var E = { x: v + p + x, y: u + c / 2, textAnchor: A, verticalAnchor: "middle" };
    return re(re({}, E), a ? { width: Math.max(a.x + a.width - E.x, 0), height: c } : {});
  }
  var j = a ? { width: p, height: c } : {};
  return i === "insideLeft" ? re({ x: v + x, y: u + c / 2, textAnchor: A, verticalAnchor: "middle" }, j) : i === "insideRight" ? re({ x: v + p - x, y: u + c / 2, textAnchor: O, verticalAnchor: "middle" }, j) : i === "insideTop" ? re({ x: f + l / 2, y: u + g, textAnchor: "middle", verticalAnchor: b }, j) : i === "insideBottom" ? re({ x: d + s / 2, y: u + c - g, textAnchor: "middle", verticalAnchor: w }, j) : i === "insideTopLeft" ? re({ x: f + x, y: u + g, textAnchor: A, verticalAnchor: b }, j) : i === "insideTopRight" ? re({ x: f + l - x, y: u + g, textAnchor: O, verticalAnchor: b }, j) : i === "insideBottomLeft" ? re({ x: d + x, y: u + c - g, textAnchor: A, verticalAnchor: w }, j) : i === "insideBottomRight" ? re({ x: d + s - x, y: u + c - g, textAnchor: O, verticalAnchor: w }, j) : i && typeof i == "object" && (I(i.x) || St(i.x)) && (I(i.y) || St(i.y)) ? re({ x: o + Ut(i.x, p), y: u + Ut(i.y, c), textAnchor: "end", verticalAnchor: "end" }, j) : re({ x: y, y: u + c / 2, textAnchor: "middle", verticalAnchor: "middle" }, j);
}, WE = { angle: 0, offset: 5, zIndex: we.label, position: "middle", textBreakAll: false };
function Rt(e2) {
  var t = Ne(e2, WE), { viewBox: r, position: n, value: i, children: a, content: o, className: u = "", textBreakAll: l, labelRef: s } = t, c = Jm(), f = Zm(), d = n === "center" ? f : c ?? f, v, p, y;
  if (r == null ? v = d : Qo(r) ? v = r : v = eh(r), !v || pe(i) && pe(a) && !h.isValidElement(o) && typeof o != "function") return null;
  var m = re(re({}, t), {}, { viewBox: v });
  if (h.isValidElement(o)) {
    var { labelRef: g } = m, w = kf(m, ME);
    return h.cloneElement(o, w);
  }
  if (typeof o == "function") {
    var { content: b } = m, P = kf(m, kE);
    if (p = h.createElement(o, P), h.isValidElement(p)) return p;
  } else p = LE(t);
  var x = _e(t);
  if (Qo(v)) {
    if (n === "insideStart" || n === "insideEnd" || n === "end") return zE(t, n, p, x, v);
    y = BE(v, t.offset, t.position);
  } else y = FE(t, v);
  return h.createElement($t, { zIndex: t.zIndex }, h.createElement(Il, bt({ ref: s, className: Y("recharts-label", u) }, x, y, { textAnchor: AE(x.textAnchor) ? x.textAnchor : y.textAnchor, breakAll: l }), p));
}
Rt.displayName = "Label";
var ey = (e2, t, r) => {
  if (!e2) return null;
  var n = { viewBox: t, labelRef: r };
  return e2 === true ? h.createElement(Rt, bt({ key: "label-implicit" }, n)) : vt(e2) ? h.createElement(Rt, bt({ key: "label-implicit", value: e2 }, n)) : h.isValidElement(e2) ? e2.type === Rt ? h.cloneElement(e2, re({ key: "label-implicit" }, n)) : h.createElement(Rt, bt({ key: "label-implicit", content: e2 }, n)) : Dl(e2) ? h.createElement(Rt, bt({ key: "label-implicit", content: e2 }, n)) : e2 && typeof e2 == "object" ? h.createElement(Rt, bt({}, e2, { key: "label-implicit" }, n)) : null;
};
function UE(e2) {
  var { label: t, labelRef: r } = e2, n = Zm();
  return ey(t, n, r) || null;
}
function NT(e2) {
  var { label: t } = e2, r = Jm();
  return ey(t, r) || null;
}
var ty = {}, ry = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return r[r.length - 1];
  }
  e2.last = t;
})(ry);
var ny = {};
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  function t(r) {
    return Array.isArray(r) ? r : Array.from(r);
  }
  e2.toArray = t;
})(ny);
(function(e2) {
  Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" });
  const t = ry, r = ny, n = ea;
  function i(a) {
    if (n.isArrayLike(a)) return t.last(r.toArray(a));
  }
  e2.last = i;
})(ty);
var KE = ty.last;
const HE = Ht(KE);
var qE = ["valueAccessor"], YE = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function zi() {
  return zi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, zi.apply(null, arguments);
}
function If(e2, t) {
  if (e2 == null) return {};
  var r, n, i = GE(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function GE(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var VE = (e2) => Array.isArray(e2.value) ? HE(e2.value) : e2.value, iy = h.createContext(void 0), XE = iy.Provider, ay = h.createContext(void 0);
ay.Provider;
function ZE() {
  return h.useContext(iy);
}
function QE() {
  return h.useContext(ay);
}
function ri(e2) {
  var { valueAccessor: t = VE } = e2, r = If(e2, qE), { dataKey: n, clockWise: i, id: a, textBreakAll: o, zIndex: u } = r, l = If(r, YE), s = ZE(), c = QE(), f = s || c;
  return !f || !f.length ? null : h.createElement($t, { zIndex: u ?? we.label }, h.createElement(Wt, { className: "recharts-label-list" }, f.map((d, v) => {
    var p, y = pe(n) ? t(d, v) : xe(d && d.payload, n), m = pe(a) ? {} : { id: "".concat(a, "-").concat(v) };
    return h.createElement(Rt, zi({ key: "label-".concat(v) }, _e(d), l, m, { fill: (p = r.fill) !== null && p !== void 0 ? p : d.fill, parentViewBox: d.parentViewBox, value: y, textBreakAll: o, viewBox: d.viewBox, index: v, zIndex: 0 }));
  })));
}
ri.displayName = "LabelList";
function JE(e2) {
  var { label: t } = e2;
  return t ? t === true ? h.createElement(ri, { key: "labelList-implicit" }) : h.isValidElement(t) || Dl(t) ? h.createElement(ri, { key: "labelList-implicit", content: t }) : typeof t == "object" ? h.createElement(ri, zi({ key: "labelList-implicit" }, t, { type: String(t.type) })) : null : null;
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
var oy = (e2) => {
  var { cx: t, cy: r, r: n, className: i } = e2, a = Y("recharts-dot", i);
  return I(t) && I(r) && I(n) ? h.createElement("circle", Jo({}, ft(e2), cu(e2), { className: a, cx: t, cy: r, r: n })) : null;
}, eC = { radiusAxis: {}, angleAxis: {} }, uy = $e({ name: "polarAxis", initialState: eC, reducers: { addRadiusAxis(e2, t) {
  e2.radiusAxis[t.payload.id] = t.payload;
}, removeRadiusAxis(e2, t) {
  delete e2.radiusAxis[t.payload.id];
}, addAngleAxis(e2, t) {
  e2.angleAxis[t.payload.id] = t.payload;
}, removeAngleAxis(e2, t) {
  delete e2.angleAxis[t.payload.id];
} } }), { addRadiusAxis: $T, removeRadiusAxis: LT, addAngleAxis: RT, removeAngleAxis: zT } = uy.actions, tC = uy.reducer, ly = (e2) => e2 && typeof e2 == "object" && "clipDot" in e2 ? !!e2.clipDot : true, cy = {};
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
})(cy);
var rC = cy.isPlainObject;
const nC = Ht(rC);
var Df, Nf, $f, Lf, Rf;
function zf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zf(Object(r), true).forEach(function(n) {
      iC(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function iC(e2, t, r) {
  return (t = aC(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function aC(e2) {
  var t = oC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function oC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Bi() {
  return Bi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Bi.apply(null, arguments);
}
function Yr(e2, t) {
  return t || (t = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t) } }));
}
var Ff = (e2, t, r, n, i) => {
  var a = r - n, o;
  return o = te(Df || (Df = Yr(["M ", ",", ""])), e2, t), o += te(Nf || (Nf = Yr(["L ", ",", ""])), e2 + r, t), o += te($f || ($f = Yr(["L ", ",", ""])), e2 + r - a / 2, t + i), o += te(Lf || (Lf = Yr(["L ", ",", ""])), e2 + r - a / 2 - n, t + i), o += te(Rf || (Rf = Yr(["L ", ",", " Z"])), e2, t), o;
}, uC = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, lC = (e2) => {
  var t = Ne(e2, uC), { x: r, y: n, upperWidth: i, lowerWidth: a, height: o, className: u } = t, { animationEasing: l, animationDuration: s, animationBegin: c, isUpdateAnimationActive: f } = t, d = h.useRef(null), [v, p] = h.useState(-1), y = h.useRef(i), m = h.useRef(a), g = h.useRef(o), w = h.useRef(r), b = h.useRef(n), P = Du(e2, "trapezoid-");
  if (h.useEffect(() => {
    if (d.current && d.current.getTotalLength) try {
      var L = d.current.getTotalLength();
      L && p(L);
    } catch {
    }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0) return null;
  var x = Y("recharts-trapezoid", u);
  if (!f) return h.createElement("g", null, h.createElement("path", Bi({}, _e(t), { className: x, d: Ff(r, n, i, a, o) })));
  var O = y.current, A = m.current, M = g.current, T = w.current, D = b.current, E = "0px ".concat(v === -1 ? 1 : v, "px"), j = "".concat(v, "px 0px"), R = mh(["strokeDasharray"], s, l);
  return h.createElement(Iu, { animationId: P, key: P, canBegin: v > 0, duration: s, easing: l, isActive: f, begin: c }, (L) => {
    var U = Ie(O, i, L), Z = Ie(A, a, L), B = Ie(M, o, L), H = Ie(T, r, L), $ = Ie(D, n, L);
    d.current && (y.current = U, m.current = Z, g.current = B, w.current = H, b.current = $);
    var je = L > 0 ? { transition: R, strokeDasharray: j } : { strokeDasharray: E };
    return h.createElement("path", Bi({}, _e(t), { className: x, d: Ff(H, $, U, Z, B), ref: d, style: Bf(Bf({}, je), t.style) }));
  });
}, cC = ["option", "shapeType", "activeClassName"];
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
function Fi(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wf(Object(r), true).forEach(function(n) {
      dC(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Wf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function dC(e2, t, r) {
  return (t = vC(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function vC(e2) {
  var t = hC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function pC(e2, t) {
  return Fi(Fi({}, t), e2);
}
function mC(e2, t) {
  return e2 === "symbols";
}
function Uf(e2) {
  var { shapeType: t, elementProps: r } = e2;
  switch (t) {
    case "rectangle":
      return h.createElement(wh, r);
    case "trapezoid":
      return h.createElement(lC, r);
    case "sector":
      return h.createElement(Oh, r);
    case "symbols":
      if (mC(t)) return h.createElement(Ld, r);
      break;
    case "curve":
      return h.createElement(ph, r);
    default:
      return null;
  }
}
function yC(e2) {
  return h.isValidElement(e2) ? e2.props : e2;
}
function gC(e2) {
  var { option: t, shapeType: r, activeClassName: n = "recharts-active-shape" } = e2, i = sC(e2, cC), a;
  if (h.isValidElement(t)) a = h.cloneElement(t, Fi(Fi({}, i), yC(t)));
  else if (typeof t == "function") a = t(i, i.index);
  else if (nC(t) && typeof t != "boolean") {
    var o = pC(t, i);
    a = h.createElement(Uf, { shapeType: r, elementProps: o });
  } else {
    var u = i;
    a = h.createElement(Uf, { shapeType: r, elementProps: u });
  }
  return i.isActive ? h.createElement(Wt, { className: n }, a) : a;
}
function bC(e2) {
  var { tooltipEntrySettings: t } = e2, r = oe(), n = Le(), i = h.useRef(null);
  return h.useLayoutEffect(() => {
    n || (i.current === null ? r(HS(t)) : i.current !== t && r(qS({ prev: i.current, next: t })), i.current = t);
  }, [t, r, n]), h.useLayoutEffect(() => () => {
    i.current && (r(YS(i.current)), i.current = null);
  }, [r]), null;
}
function wC(e2) {
  var { legendPayload: t } = e2, r = oe(), n = Le(), i = h.useRef(null);
  return h.useLayoutEffect(() => {
    n || (i.current === null ? r(fh(t)) : i.current !== t && r(dh({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), h.useLayoutEffect(() => () => {
    i.current && (r(vh(i.current)), i.current = null);
  }, [r]), null;
}
function BT(e2) {
  var { legendPayload: t } = e2, r = oe(), n = N(X), i = h.useRef(null);
  return h.useLayoutEffect(() => {
    n !== "centric" && n !== "radial" || (i.current === null ? r(fh(t)) : i.current !== t && r(dh({ prev: i.current, next: t })), i.current = t);
  }, [r, n, t]), h.useLayoutEffect(() => () => {
    i.current && (r(vh(i.current)), i.current = null);
  }, [r]), null;
}
var no, xC = () => {
  var [e2] = h.useState(() => Zr("uid-"));
  return e2;
}, PC = (no = Ny.useId) !== null && no !== void 0 ? no : xC;
function OC(e2, t) {
  var r = PC();
  return t || (e2 ? "".concat(e2, "-").concat(r) : r);
}
var SC = h.createContext(void 0), AC = (e2) => {
  var { id: t, type: r, children: n } = e2, i = OC("recharts-".concat(r), t);
  return h.createElement(SC.Provider, { value: i }, n(i));
}, _C = { cartesianItems: [], polarItems: [] }, sy = $e({ name: "graphicalItems", initialState: _C, reducers: { addCartesianGraphicalItem: { reducer(e2, t) {
  e2.cartesianItems.push(t.payload);
}, prepare: J() }, replaceCartesianGraphicalItem: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload, i = it(e2).cartesianItems.indexOf(r);
  i > -1 && (e2.cartesianItems[i] = n);
}, prepare: J() }, removeCartesianGraphicalItem: { reducer(e2, t) {
  var r = it(e2).cartesianItems.indexOf(t.payload);
  r > -1 && e2.cartesianItems.splice(r, 1);
}, prepare: J() }, addPolarGraphicalItem: { reducer(e2, t) {
  e2.polarItems.push(t.payload);
}, prepare: J() }, removePolarGraphicalItem: { reducer(e2, t) {
  var r = it(e2).polarItems.indexOf(t.payload);
  r > -1 && e2.polarItems.splice(r, 1);
}, prepare: J() } } }), { addCartesianGraphicalItem: EC, replaceCartesianGraphicalItem: CC, removeCartesianGraphicalItem: jC, addPolarGraphicalItem: MC, removePolarGraphicalItem: kC } = sy.actions, TC = sy.reducer, IC = (e2) => {
  var t = oe(), r = h.useRef(null);
  return h.useLayoutEffect(() => {
    r.current === null ? t(EC(e2)) : r.current !== e2 && t(CC({ prev: r.current, next: e2 })), r.current = e2;
  }, [t, e2]), h.useLayoutEffect(() => () => {
    r.current && (t(jC(r.current)), r.current = null);
  }, [t]), null;
}, DC = h.memo(IC);
function FT(e2) {
  var t = oe();
  return h.useLayoutEffect(() => (t(MC(e2)), () => {
    t(kC(e2));
  }), [t, e2]), null;
}
var NC = ["points"];
function Kf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function io(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kf(Object(r), true).forEach(function(n) {
      $C(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Kf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function $C(e2, t, r) {
  return (t = LC(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function LC(e2) {
  var t = RC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function RC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Wi.apply(null, arguments);
}
function zC(e2, t) {
  if (e2 == null) return {};
  var r, n, i = BC(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function BC(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function FC(e2) {
  var { option: t, dotProps: r, className: n } = e2;
  if (h.isValidElement(t)) return h.cloneElement(t, r);
  if (typeof t == "function") return t(r);
  var i = Y(n, typeof t != "boolean" ? t.className : ""), a = r ?? {}, { points: o } = a, u = zC(a, NC);
  return h.createElement(oy, Wi({}, u, { className: i }));
}
function WC(e2, t) {
  return e2 == null ? false : t ? true : e2.length === 1;
}
function UC(e2) {
  var { points: t, dot: r, className: n, dotClassName: i, dataKey: a, baseProps: o, needClip: u, clipPathId: l, zIndex: s = we.scatter } = e2;
  if (!WC(t, r)) return null;
  var c = ly(r), f = zy(r), d = t.map((p, y) => {
    var m, g, w = io(io(io({ r: 3 }, o), f), {}, { index: y, cx: (m = p.x) !== null && m !== void 0 ? m : void 0, cy: (g = p.y) !== null && g !== void 0 ? g : void 0, dataKey: a, value: p.value, payload: p.payload, points: t });
    return h.createElement(FC, { key: "dot-".concat(y), option: r, dotProps: w, className: i });
  }), v = {};
  return u && l != null && (v.clipPath = "url(#clipPath-".concat(c ? "" : "dots-").concat(l, ")")), h.createElement($t, { zIndex: s }, h.createElement(Wt, Wi({ className: n }, v), d));
}
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
function qf(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hf(Object(r), true).forEach(function(n) {
      KC(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function KC(e2, t, r) {
  return (t = HC(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function HC(e2) {
  var t = qC(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function qC(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var YC = { xAxis: {}, yAxis: {}, zAxis: {} }, fy = $e({ name: "cartesianAxis", initialState: YC, reducers: { addXAxis: { reducer(e2, t) {
  e2.xAxis[t.payload.id] = t.payload;
}, prepare: J() }, replaceXAxis: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload;
  e2.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e2.xAxis[r.id], e2.xAxis[n.id] = n);
}, prepare: J() }, removeXAxis: { reducer(e2, t) {
  delete e2.xAxis[t.payload.id];
}, prepare: J() }, addYAxis: { reducer(e2, t) {
  e2.yAxis[t.payload.id] = t.payload;
}, prepare: J() }, replaceYAxis: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload;
  e2.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e2.yAxis[r.id], e2.yAxis[n.id] = n);
}, prepare: J() }, removeYAxis: { reducer(e2, t) {
  delete e2.yAxis[t.payload.id];
}, prepare: J() }, addZAxis: { reducer(e2, t) {
  e2.zAxis[t.payload.id] = t.payload;
}, prepare: J() }, replaceZAxis: { reducer(e2, t) {
  var { prev: r, next: n } = t.payload;
  e2.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e2.zAxis[r.id], e2.zAxis[n.id] = n);
}, prepare: J() }, removeZAxis: { reducer(e2, t) {
  delete e2.zAxis[t.payload.id];
}, prepare: J() }, updateYAxisWidth(e2, t) {
  var { id: r, width: n } = t.payload, i = e2.yAxis[r];
  if (i) {
    var a = i.widthHistory || [];
    if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - a[0]) <= 1) return;
    var o = [...a, n].slice(-3);
    e2.yAxis[r] = qf(qf({}, e2.yAxis[r]), {}, { width: n, widthHistory: o });
  }
} } }), { addXAxis: GC, replaceXAxis: VC, removeXAxis: XC, addYAxis: ZC, replaceYAxis: QC, removeYAxis: JC, addZAxis: WT, replaceZAxis: UT, removeZAxis: KT, updateYAxisWidth: ej } = fy.actions, tj = fy.reducer, rj = S([Pe], (e2) => ({ top: e2.top, bottom: e2.bottom, left: e2.left, right: e2.right })), nj = S([rj, Mt, kt], (e2, t, r) => {
  if (!(!e2 || t == null || r == null)) return { x: e2.left, y: e2.top, width: Math.max(0, t - e2.left - e2.right), height: Math.max(0, r - e2.top - e2.bottom) };
}), Nl = () => N(nj), ij = () => N(zA);
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
function ao(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(r), true).forEach(function(n) {
      aj(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function aj(e2, t, r) {
  return (t = oj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function oj(e2) {
  var t = uj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function uj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var lj = (e2) => {
  var { point: t, childIndex: r, mainColor: n, activeDot: i, dataKey: a, clipPath: o } = e2;
  if (i === false || t.x == null || t.y == null) return null;
  var u = { index: r, dataKey: a, cx: t.x, cy: t.y, r: 4, fill: n ?? "none", strokeWidth: 2, stroke: "#fff", payload: t.payload, value: t.value }, l = ao(ao(ao({}, u), qi(i)), cu(i)), s;
  return h.isValidElement(i) ? s = h.cloneElement(i, l) : typeof i == "function" ? s = i(l) : s = h.createElement(oy, l), h.createElement(Wt, { className: "recharts-active-dot", clipPath: o }, s);
};
function cj(e2) {
  var { points: t, mainColor: r, activeDot: n, itemDataKey: i, clipPath: a, zIndex: o = we.activeDot } = e2, u = N(fn), l = ij();
  if (t == null || l == null) return null;
  var s = t.find((c) => l.includes(c.payload));
  return pe(s) ? null : h.createElement($t, { zIndex: o }, h.createElement(lj, { point: s, childIndex: Number(u), mainColor: r, dataKey: i, activeDot: n, clipPath: a }));
}
var sj = (e2) => {
  var { chartData: t } = e2, r = oe(), n = Le();
  return h.useEffect(() => n ? () => {
  } : (r(mf(t)), () => {
    r(mf(void 0));
  }), [t, r, n]), null;
}, Gf = { x: 0, y: 0, width: 0, height: 0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }, dy = $e({ name: "brush", initialState: Gf, reducers: { setBrushSettings(e2, t) {
  return t.payload == null ? Gf : t.payload;
} } }), { setBrushSettings: HT } = dy.actions, fj = dy.reducer;
function dj(e2, t, r) {
  return (t = vj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function vj(e2) {
  var t = hj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
class $l {
  static create(t) {
    return new $l(t);
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
dj($l, "EPS", 1e-4);
function pj(e2) {
  return (e2 % 180 + 180) % 180;
}
var mj = function(t) {
  var { width: r, height: n } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = pj(i), o = a * Math.PI / 180, u = Math.atan(n / r), l = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(l);
}, yj = { dots: [], areas: [], lines: [] }, vy = $e({ name: "referenceElements", initialState: yj, reducers: { addDot: (e2, t) => {
  e2.dots.push(t.payload);
}, removeDot: (e2, t) => {
  var r = it(e2).dots.findIndex((n) => n === t.payload);
  r !== -1 && e2.dots.splice(r, 1);
}, addArea: (e2, t) => {
  e2.areas.push(t.payload);
}, removeArea: (e2, t) => {
  var r = it(e2).areas.findIndex((n) => n === t.payload);
  r !== -1 && e2.areas.splice(r, 1);
}, addLine: (e2, t) => {
  e2.lines.push(t.payload);
}, removeLine: (e2, t) => {
  var r = it(e2).lines.findIndex((n) => n === t.payload);
  r !== -1 && e2.lines.splice(r, 1);
} } }), { addDot: qT, removeDot: YT, addArea: GT, removeArea: VT, addLine: XT, removeLine: ZT } = vy.actions, gj = vy.reducer, bj = h.createContext(void 0), wj = (e2) => {
  var { children: t } = e2, [r] = h.useState("".concat(Zr("recharts"), "-clip")), n = Nl();
  if (n == null) return null;
  var { x: i, y: a, width: o, height: u } = n;
  return h.createElement(bj.Provider, { value: r }, h.createElement("defs", null, h.createElement("clipPath", { id: r }, h.createElement("rect", { x: i, y: a, height: u, width: o }))), t);
};
function hy(e2, t) {
  if (t < 1) return [];
  if (t === 1) return e2;
  for (var r = [], n = 0; n < e2.length; n += t) {
    var i = e2[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function xj(e2, t, r) {
  var n = { width: e2.width + t.width, height: e2.height + t.height };
  return mj(n, r);
}
function Pj(e2, t, r) {
  var n = r === "width", { x: i, y: a, width: o, height: u } = e2;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + u } : { start: n ? i + o : a + u, end: n ? i : a };
}
function vn(e2, t, r, n, i) {
  if (e2 * t < e2 * n || e2 * t > e2 * i) return false;
  var a = r();
  return e2 * (t - e2 * a / 2 - n) >= 0 && e2 * (t + e2 * a / 2 - i) <= 0;
}
function Oj(e2, t) {
  return hy(e2, t + 1);
}
function Sj(e2, t, r, n, i) {
  for (var a = (n || []).slice(), { start: o, end: u } = t, l = 0, s = 1, c = o, f = function() {
    var p = n == null ? void 0 : n[l];
    if (p === void 0) return { v: hy(n, s) };
    var y = l, m, g = () => (m === void 0 && (m = r(p, y)), m), w = p.coordinate, b = l === 0 || vn(e2, w, g, c, u);
    b || (l = 0, c = o, s += 1), b && (c = w + e2 * (g() / 2 + i), l += s);
  }, d; s <= a.length; ) if (d = f(), d) return d.v;
  return [];
}
function Aj(e2, t, r, n, i) {
  var a = (n || []).slice(), o = a.length;
  if (o === 0) return [];
  for (var { start: u, end: l } = t, s = 1; s <= o; s++) {
    for (var c = (o - 1) % s, f = u, d = true, v = function() {
      var w = n[p], b = p, P, x = () => (P === void 0 && (P = r(w, b)), P), O = w.coordinate, A = p === c || vn(e2, O, x, f, l);
      if (!A) return d = false, 1;
      A && (f = O + e2 * (x() / 2 + i));
    }, p = c; p < o && !v(); p += s) ;
    if (d) {
      for (var y = [], m = c; m < o; m += s) y.push(n[m]);
      return y;
    }
  }
  return [];
}
function Vf(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oe(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vf(Object(r), true).forEach(function(n) {
      _j(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Vf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function _j(e2, t, r) {
  return (t = Ej(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Ej(e2) {
  var t = Cj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Cj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function jj(e2, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, { start: u } = t, { end: l } = t, s = function(d) {
    var v = a[d], p, y = () => (p === void 0 && (p = r(v, d)), p);
    if (d === o - 1) {
      var m = e2 * (v.coordinate + e2 * y() / 2 - l);
      a[d] = v = Oe(Oe({}, v), {}, { tickCoord: m > 0 ? v.coordinate - m * e2 : v.coordinate });
    } else a[d] = v = Oe(Oe({}, v), {}, { tickCoord: v.coordinate });
    if (v.tickCoord != null) {
      var g = vn(e2, v.tickCoord, y, u, l);
      g && (l = v.tickCoord - e2 * (y() / 2 + i), a[d] = Oe(Oe({}, v), {}, { isShow: true }));
    }
  }, c = o - 1; c >= 0; c--) s(c);
  return a;
}
function Mj(e2, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, { start: l, end: s } = t;
  if (a) {
    var c = n[u - 1], f = r(c, u - 1), d = e2 * (c.coordinate + e2 * f / 2 - s);
    if (o[u - 1] = c = Oe(Oe({}, c), {}, { tickCoord: d > 0 ? c.coordinate - d * e2 : c.coordinate }), c.tickCoord != null) {
      var v = vn(e2, c.tickCoord, () => f, l, s);
      v && (s = c.tickCoord - e2 * (f / 2 + i), o[u - 1] = Oe(Oe({}, c), {}, { isShow: true }));
    }
  }
  for (var p = a ? u - 1 : u, y = function(w) {
    var b = o[w], P, x = () => (P === void 0 && (P = r(b, w)), P);
    if (w === 0) {
      var O = e2 * (b.coordinate - e2 * x() / 2 - l);
      o[w] = b = Oe(Oe({}, b), {}, { tickCoord: O < 0 ? b.coordinate - O * e2 : b.coordinate });
    } else o[w] = b = Oe(Oe({}, b), {}, { tickCoord: b.coordinate });
    if (b.tickCoord != null) {
      var A = vn(e2, b.tickCoord, x, l, s);
      A && (l = b.tickCoord + e2 * (x() / 2 + i), o[w] = Oe(Oe({}, b), {}, { isShow: true }));
    }
  }, m = 0; m < p; m++) y(m);
  return o;
}
function Ll(e2, t, r) {
  var { tick: n, ticks: i, viewBox: a, minTickGap: o, orientation: u, interval: l, tickFormatter: s, unit: c, angle: f } = e2;
  if (!i || !i.length || !n) return [];
  if (I(l) || wa.isSsr) {
    var d;
    return (d = Oj(i, I(l) ? l : 0)) !== null && d !== void 0 ? d : [];
  }
  var v = [], p = u === "top" || u === "bottom" ? "width" : "height", y = c && p === "width" ? Xr(c, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, m = (b, P) => {
    var x = typeof s == "function" ? s(b.value, P) : b.value;
    return p === "width" ? xj(Xr(x, { fontSize: t, letterSpacing: r }), y, f) : Xr(x, { fontSize: t, letterSpacing: r })[p];
  }, g = i.length >= 2 ? Xe(i[1].coordinate - i[0].coordinate) : 1, w = Pj(a, g, p);
  return l === "equidistantPreserveStart" ? Sj(g, w, m, i, o) : l === "equidistantPreserveEnd" ? Aj(g, w, m, i, o) : (l === "preserveStart" || l === "preserveStartEnd" ? v = Mj(g, w, m, i, o, l === "preserveStartEnd") : v = jj(g, w, m, i, o), v.filter((b) => b.isShow));
}
var kj = (e2) => {
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
}, Tj = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType"];
function Ij(e2, t) {
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
function vr() {
  return vr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, vr.apply(null, arguments);
}
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
function ne(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xf(Object(r), true).forEach(function(n) {
      Nj(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Nj(e2, t, r) {
  return (t = $j(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function $j(e2) {
  var t = Lj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Lj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
var Ot = { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd", zIndex: we.axis };
function Rj(e2) {
  var { x: t, y: r, width: n, height: i, orientation: a, mirror: o, axisLine: u, otherSvgProps: l } = e2;
  if (!u) return null;
  var s = ne(ne(ne({}, l), ft(u)), {}, { fill: "none" });
  if (a === "top" || a === "bottom") {
    var c = +(a === "top" && !o || a === "bottom" && o);
    s = ne(ne({}, s), {}, { x1: t, y1: r + c * i, x2: t + n, y2: r + c * i });
  } else {
    var f = +(a === "left" && !o || a === "right" && o);
    s = ne(ne({}, s), {}, { x1: t + f * n, y1: r, x2: t + f * n, y2: r + i });
  }
  return h.createElement("line", vr({}, s, { className: Y("recharts-cartesian-axis-line", Ji(u, "className")) }));
}
function zj(e2, t, r, n, i, a, o, u, l) {
  var s, c, f, d, v, p, y = u ? -1 : 1, m = e2.tickSize || o, g = I(e2.tickCoord) ? e2.tickCoord : e2.coordinate;
  switch (a) {
    case "top":
      s = c = e2.coordinate, d = r + +!u * i, f = d - y * m, p = f - y * l, v = g;
      break;
    case "left":
      f = d = e2.coordinate, c = t + +!u * n, s = c - y * m, v = s - y * l, p = g;
      break;
    case "right":
      f = d = e2.coordinate, c = t + +u * n, s = c + y * m, v = s + y * l, p = g;
      break;
    default:
      s = c = e2.coordinate, d = r + +u * i, f = d + y * m, p = f + y * l, v = g;
      break;
  }
  return { line: { x1: s, y1: f, x2: c, y2: d }, tick: { x: v, y: p } };
}
function Bj(e2, t) {
  switch (e2) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function Fj(e2, t) {
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
function Wj(e2) {
  var { option: t, tickProps: r, value: n } = e2, i, a = Y(r.className, "recharts-cartesian-axis-tick-value");
  if (h.isValidElement(t)) i = h.cloneElement(t, ne(ne({}, r), {}, { className: a }));
  else if (typeof t == "function") i = t(ne(ne({}, r), {}, { className: a }));
  else {
    var o = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (o = Y(o, t == null ? void 0 : t.className)), i = h.createElement(Il, vr({}, r, { className: o }), n);
  }
  return i;
}
var Uj = h.forwardRef((e2, t) => {
  var { ticks: r = [], tick: n, tickLine: i, stroke: a, tickFormatter: o, unit: u, padding: l, tickTextProps: s, orientation: c, mirror: f, x: d, y: v, width: p, height: y, tickSize: m, tickMargin: g, fontSize: w, letterSpacing: b, getTicksConfig: P, events: x, axisType: O } = e2, A = Ll(ne(ne({}, P), {}, { ticks: r }), w, b), M = Bj(c, f), T = Fj(c, f), D = ft(P), E = qi(n), j = {};
  typeof i == "object" && (j = i);
  var R = ne(ne({}, D), {}, { fill: "none" }, j), L = A.map((B) => ne({ entry: B }, zj(B, d, v, p, y, c, m, f, g))), U = L.map((B) => {
    var { entry: H, line: $ } = B;
    return h.createElement(Wt, { className: "recharts-cartesian-axis-tick", key: "tick-".concat(H.value, "-").concat(H.coordinate, "-").concat(H.tickCoord) }, i && h.createElement("line", vr({}, R, $, { className: Y("recharts-cartesian-axis-tick-line", Ji(i, "className")) })));
  }), Z = L.map((B, H) => {
    var { entry: $, tick: je } = B, Re = ne(ne(ne(ne({ textAnchor: M, verticalAnchor: T }, D), {}, { stroke: "none", fill: a }, E), je), {}, { index: H, payload: $, visibleTicksCount: A.length, tickFormatter: o, padding: l }, s);
    return h.createElement(Wt, vr({ className: "recharts-cartesian-axis-tick-label", key: "tick-label-".concat($.value, "-").concat($.coordinate, "-").concat($.tickCoord) }, Fg(x, $, H)), n && h.createElement(Wj, { option: n, tickProps: Re, value: "".concat(typeof o == "function" ? o($.value, H) : $.value).concat(u || "") }));
  });
  return h.createElement("g", { className: "recharts-cartesian-axis-ticks recharts-".concat(O, "-ticks") }, Z.length > 0 && h.createElement($t, { zIndex: we.label }, h.createElement("g", { className: "recharts-cartesian-axis-tick-labels recharts-".concat(O, "-tick-labels"), ref: t }, Z)), U.length > 0 && h.createElement("g", { className: "recharts-cartesian-axis-tick-lines recharts-".concat(O, "-tick-lines") }, U));
}), Kj = h.forwardRef((e2, t) => {
  var { axisLine: r, width: n, height: i, className: a, hide: o, ticks: u, axisType: l } = e2, s = Ij(e2, Tj), [c, f] = h.useState(""), [d, v] = h.useState(""), p = h.useRef(null);
  h.useImperativeHandle(t, () => ({ getCalculatedWidth: () => {
    var m;
    return kj({ ticks: p.current, label: (m = e2.labelRef) === null || m === void 0 ? void 0 : m.current, labelGapWithTick: 5, tickSize: e2.tickSize, tickMargin: e2.tickMargin });
  } }));
  var y = h.useCallback((m) => {
    if (m) {
      var g = m.getElementsByClassName("recharts-cartesian-axis-tick-value");
      p.current = g;
      var w = g[0];
      if (w) {
        var b = window.getComputedStyle(w), P = b.fontSize, x = b.letterSpacing;
        (P !== c || x !== d) && (f(P), v(x));
      }
    }
  }, [c, d]);
  return o || n != null && n <= 0 || i != null && i <= 0 ? null : h.createElement($t, { zIndex: e2.zIndex }, h.createElement(Wt, { className: Y("recharts-cartesian-axis", a) }, h.createElement(Rj, { x: e2.x, y: e2.y, width: n, height: i, orientation: e2.orientation, mirror: e2.mirror, axisLine: r, otherSvgProps: ft(e2) }), h.createElement(Uj, { ref: y, axisType: l, events: s, fontSize: c, getTicksConfig: e2, height: e2.height, letterSpacing: d, mirror: e2.mirror, orientation: e2.orientation, padding: e2.padding, stroke: e2.stroke, tick: e2.tick, tickFormatter: e2.tickFormatter, tickLine: e2.tickLine, tickMargin: e2.tickMargin, tickSize: e2.tickSize, tickTextProps: e2.tickTextProps, ticks: u, unit: e2.unit, width: e2.width, x: e2.x, y: e2.y }), h.createElement($E, { x: e2.x, y: e2.y, width: e2.width, height: e2.height, lowerWidth: e2.width, upperWidth: e2.width }, h.createElement(UE, { label: e2.label, labelRef: e2.labelRef }), e2.children)));
}), Rl = h.forwardRef((e2, t) => {
  var r = Ne(e2, Ot);
  return h.createElement(Kj, vr({}, r, { ref: t }));
});
Rl.displayName = "CartesianAxis";
var Hj = ["x1", "y1", "x2", "y2", "key"], qj = ["offset"], Yj = ["xAxisId", "yAxisId"], Gj = ["xAxisId", "yAxisId"];
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
function Se(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zf(Object(r), true).forEach(function(n) {
      Vj(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Vj(e2, t, r) {
  return (t = Xj(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function Xj(e2) {
  var t = Zj(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Zj(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, ir.apply(null, arguments);
}
function Ui(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Qj(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Qj(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var Jj = (e2) => {
  var { fill: t } = e2;
  if (!t || t === "none") return null;
  var { fillOpacity: r, x: n, y: i, width: a, height: o, ry: u } = e2;
  return h.createElement("rect", { x: n, y: i, ry: u, width: a, height: o, stroke: "none", fill: t, fillOpacity: r, className: "recharts-cartesian-grid-bg" });
};
function py(e2) {
  var { option: t, lineItemProps: r } = e2, n;
  if (h.isValidElement(t)) n = h.cloneElement(t, r);
  else if (typeof t == "function") n = t(r);
  else {
    var i, { x1: a, y1: o, x2: u, y2: l, key: s } = r, c = Ui(r, Hj), f = (i = ft(c)) !== null && i !== void 0 ? i : {}, { offset: d } = f, v = Ui(f, qj);
    n = h.createElement("line", ir({}, v, { x1: a, y1: o, x2: u, y2: l, fill: "none", key: s }));
  }
  return n;
}
function eM(e2) {
  var { x: t, width: r, horizontal: n = true, horizontalPoints: i } = e2;
  if (!n || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e2, u = Ui(e2, Yj), l = i.map((s, c) => {
    var f = Se(Se({}, u), {}, { x1: t, y1: s, x2: t + r, y2: s, key: "line-".concat(c), index: c });
    return h.createElement(py, { key: "line-".concat(c), option: n, lineItemProps: f });
  });
  return h.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, l);
}
function tM(e2) {
  var { y: t, height: r, vertical: n = true, verticalPoints: i } = e2;
  if (!n || !i || !i.length) return null;
  var { xAxisId: a, yAxisId: o } = e2, u = Ui(e2, Gj), l = i.map((s, c) => {
    var f = Se(Se({}, u), {}, { x1: s, y1: t, x2: s, y2: t + r, key: "line-".concat(c), index: c });
    return h.createElement(py, { option: n, lineItemProps: f, key: "line-".concat(c) });
  });
  return h.createElement("g", { className: "recharts-cartesian-grid-vertical" }, l);
}
function rM(e2) {
  var { horizontalFill: t, fillOpacity: r, x: n, y: i, width: a, height: o, horizontalPoints: u, horizontal: l = true } = e2;
  if (!l || !t || !t.length || u == null) return null;
  var s = u.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== s[0] && s.unshift(0);
  var c = s.map((f, d) => {
    var v = !s[d + 1], p = v ? i + o - f : s[d + 1] - f;
    if (p <= 0) return null;
    var y = d % t.length;
    return h.createElement("rect", { key: "react-".concat(d), y: f, x: n, height: p, width: a, stroke: "none", fill: t[y], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
  });
  return h.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, c);
}
function nM(e2) {
  var { vertical: t = true, verticalFill: r, fillOpacity: n, x: i, y: a, width: o, height: u, verticalPoints: l } = e2;
  if (!t || !r || !r.length) return null;
  var s = l.map((f) => Math.round(f + i - i)).sort((f, d) => f - d);
  i !== s[0] && s.unshift(0);
  var c = s.map((f, d) => {
    var v = !s[d + 1], p = v ? i + o - f : s[d + 1] - f;
    if (p <= 0) return null;
    var y = d % r.length;
    return h.createElement("rect", { key: "react-".concat(d), x: f, y: a, width: p, height: u, stroke: "none", fill: r[y], fillOpacity: n, className: "recharts-cartesian-grid-bg" });
  });
  return h.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, c);
}
var iM = (e2, t) => {
  var { xAxis: r, width: n, height: i, offset: a } = e2;
  return Uv(Ll(Se(Se(Se({}, Ot), r), {}, { ticks: Kv(r), viewBox: { x: 0, y: 0, width: n, height: i } })), a.left, a.left + a.width, t);
}, aM = (e2, t) => {
  var { yAxis: r, width: n, height: i, offset: a } = e2;
  return Uv(Ll(Se(Se(Se({}, Ot), r), {}, { ticks: Kv(r), viewBox: { x: 0, y: 0, width: n, height: i } })), a.top, a.top + a.height, t);
}, oM = { horizontal: true, vertical: true, horizontalPoints: [], verticalPoints: [], stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [], xAxisId: 0, yAxisId: 0, syncWithTicks: false, zIndex: we.grid };
function uM(e2) {
  var t = rh(), r = nh(), n = th(), i = Se(Se({}, Ne(e2, oM)), {}, { x: I(e2.x) ? e2.x : n.left, y: I(e2.y) ? e2.y : n.top, width: I(e2.width) ? e2.width : n.width, height: I(e2.height) ? e2.height : n.height }), { xAxisId: a, yAxisId: o, x: u, y: l, width: s, height: c, syncWithTicks: f, horizontalValues: d, verticalValues: v } = i, p = Le(), y = N((T) => af(T, "xAxis", a, p)), m = N((T) => af(T, "yAxis", o, p));
  if (!ht(s) || !ht(c) || !I(u) || !I(l)) return null;
  var g = i.verticalCoordinatesGenerator || iM, w = i.horizontalCoordinatesGenerator || aM, { horizontalPoints: b, verticalPoints: P } = i;
  if ((!b || !b.length) && typeof w == "function") {
    var x = d && d.length, O = w({ yAxis: m ? Se(Se({}, m), {}, { ticks: x ? d : m.ticks }) : void 0, width: t ?? s, height: r ?? c, offset: n }, x ? true : f);
    yi(Array.isArray(O), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O, "]")), Array.isArray(O) && (b = O);
  }
  if ((!P || !P.length) && typeof g == "function") {
    var A = v && v.length, M = g({ xAxis: y ? Se(Se({}, y), {}, { ticks: A ? v : y.ticks }) : void 0, width: t ?? s, height: r ?? c, offset: n }, A ? true : f);
    yi(Array.isArray(M), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof M, "]")), Array.isArray(M) && (P = M);
  }
  return h.createElement($t, { zIndex: i.zIndex }, h.createElement("g", { className: "recharts-cartesian-grid" }, h.createElement(Jj, { fill: i.fill, fillOpacity: i.fillOpacity, x: i.x, y: i.y, width: i.width, height: i.height, ry: i.ry }), h.createElement(rM, ir({}, i, { horizontalPoints: b })), h.createElement(nM, ir({}, i, { verticalPoints: P })), h.createElement(eM, ir({}, i, { offset: n, horizontalPoints: b, xAxis: y, yAxis: m })), h.createElement(tM, ir({}, i, { offset: n, verticalPoints: P, xAxis: y, yAxis: m }))));
}
uM.displayName = "CartesianGrid";
var lM = {}, my = $e({ name: "errorBars", initialState: lM, reducers: { addErrorBar: (e2, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e2[r] || (e2[r] = []), e2[r].push(n);
}, replaceErrorBar: (e2, t) => {
  var { itemId: r, prev: n, next: i } = t.payload;
  e2[r] && (e2[r] = e2[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
}, removeErrorBar: (e2, t) => {
  var { itemId: r, errorBar: n } = t.payload;
  e2[r] && (e2[r] = e2[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
} } }), { addErrorBar: QT, replaceErrorBar: JT, removeErrorBar: eI } = my.actions, cM = my.reducer, sM = ["children"];
function fM(e2, t) {
  if (e2 == null) return {};
  var r, n, i = dM(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function dM(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var vM = { data: [], xAxisId: "xAxis-0", yAxisId: "yAxis-0", dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }), errorBarOffset: 0 }, hM = h.createContext(vM);
function pM(e2) {
  var { children: t } = e2, r = fM(e2, sM);
  return h.createElement(hM.Provider, { value: r }, t);
}
function yy(e2, t) {
  var r, n, i = N((s) => It(s, e2)), a = N((s) => Dt(s, t)), o = (r = i == null ? void 0 : i.allowDataOverflow) !== null && r !== void 0 ? r : de.allowDataOverflow, u = (n = a == null ? void 0 : a.allowDataOverflow) !== null && n !== void 0 ? n : ve.allowDataOverflow, l = o || u;
  return { needClip: l, needClipX: o, needClipY: u };
}
function mM(e2) {
  var { xAxisId: t, yAxisId: r, clipPathId: n } = e2, i = Nl(), { needClipX: a, needClipY: o, needClip: u } = yy(t, r);
  if (!u || !i) return null;
  var { x: l, y: s, width: c, height: f } = i;
  return h.createElement("clipPath", { id: "clipPath-".concat(n) }, h.createElement("rect", { x: a ? l : l - c / 2, y: o ? s : s - f / 2, width: a ? c : c * 2, height: o ? f : f * 2 }));
}
var gy = (e2, t, r, n) => vm(e2, "xAxis", t, n), by = (e2, t, r, n) => dm(e2, "xAxis", t, n), wy = (e2, t, r, n) => vm(e2, "yAxis", r, n), xy = (e2, t, r, n) => dm(e2, "yAxis", r, n), yM = S([X, gy, wy, by, xy], (e2, t, r, n, i) => qt(e2, "xAxis") ? mi(t, n, false) : mi(r, i, false)), gM = (e2, t, r, n, i) => i;
function bM(e2) {
  return e2.type === "line";
}
var wM = S([Np, gM], (e2, t) => e2.filter(bM).find((r) => r.id === t)), xM = S([X, gy, wy, by, xy, wM, yM, il], (e2, t, r, n, i, a, o, u) => {
  var { chartData: l, dataStartIndex: s, dataEndIndex: c } = u;
  if (!(a == null || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || o == null || e2 !== "horizontal" && e2 !== "vertical")) {
    var { dataKey: f, data: d } = a, v;
    if (d != null && d.length > 0 ? v = d : v = l == null ? void 0 : l.slice(s, c + 1), v != null) return hk({ layout: e2, xAxis: t, yAxis: r, xAxisTicks: n, yAxisTicks: i, dataKey: f, bandSize: o, displayedData: v });
  }
});
function PM(e2) {
  var t = qi(e2), r = 3, n = 2;
  if (t != null) {
    var { r: i, strokeWidth: a } = t, o = Number(i), u = Number(a);
    return (Number.isNaN(o) || o < 0) && (o = r), (Number.isNaN(u) || u < 0) && (u = n), { r: o, strokeWidth: u };
  }
  return { r, strokeWidth: n };
}
var OM = {};
/**
* @license React
* use-sync-external-store-with-selector.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nn = h;
function SM(e2, t) {
  return e2 === t && (e2 !== 0 || 1 / e2 === 1 / t) || e2 !== e2 && t !== t;
}
var AM = typeof Object.is == "function" ? Object.is : SM, _M = Nn.useSyncExternalStore, EM = Nn.useRef, CM = Nn.useEffect, jM = Nn.useMemo, MM = Nn.useDebugValue;
OM.useSyncExternalStoreWithSelector = function(e2, t, r, n, i) {
  var a = EM(null);
  if (a.current === null) {
    var o = { hasValue: false, value: null };
    a.current = o;
  } else o = a.current;
  a = jM(function() {
    function l(v) {
      if (!s) {
        if (s = true, c = v, v = n(v), i !== void 0 && o.hasValue) {
          var p = o.value;
          if (i(p, v)) return f = p;
        }
        return f = v;
      }
      if (p = f, AM(c, v)) return p;
      var y = n(v);
      return i !== void 0 && i(p, y) ? (c = v, p) : (c = v, f = y);
    }
    var s = false, c, f, d = r === void 0 ? null : r;
    return [function() {
      return l(t());
    }, d === null ? void 0 : function() {
      return l(d());
    }];
  }, [t, r, n, i]);
  var u = _M(e2, a[0], a[1]);
  return CM(function() {
    o.hasValue = true, o.value = u;
  }, [u]), MM(u), u;
};
function kM(e2) {
  e2();
}
function TM() {
  let e2 = null, t = null;
  return { clear() {
    e2 = null, t = null;
  }, notify() {
    kM(() => {
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
var Qf = { notify() {
}, get: () => [] };
function IM(e2, t) {
  let r, n = Qf, i = 0, a = false;
  function o(y) {
    c();
    const m = n.subscribe(y);
    let g = false;
    return () => {
      g || (g = true, m(), f());
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
    i++, r || (r = e2.subscribe(l), n = TM());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Qf);
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
var DM = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", NM = DM(), $M = () => typeof navigator < "u" && navigator.product === "ReactNative", LM = $M(), RM = () => NM || LM ? h.useLayoutEffect : h.useEffect, zM = RM();
function Jf(e2, t) {
  return e2 === t ? e2 !== 0 || t !== 0 || 1 / e2 === 1 / t : e2 !== e2 && t !== t;
}
function BM(e2, t) {
  if (Jf(e2, t)) return true;
  if (typeof e2 != "object" || e2 === null || typeof t != "object" || t === null) return false;
  const r = Object.keys(e2), n = Object.keys(t);
  if (r.length !== n.length) return false;
  for (let i = 0; i < r.length; i++) if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Jf(e2[r[i]], t[r[i]])) return false;
  return true;
}
var FM = Symbol.for("react-redux-context"), WM = typeof globalThis < "u" ? globalThis : {};
function UM() {
  if (!h.createContext) return {};
  const e2 = WM[FM] ?? (WM[FM] = /* @__PURE__ */ new Map());
  let t = e2.get(h.createContext);
  return t || (t = h.createContext(null), e2.set(h.createContext, t)), t;
}
var KM = UM();
function HM(e2) {
  const { children: t, context: r, serverState: n, store: i } = e2, a = h.useMemo(() => {
    const l = IM(i);
    return { store: i, subscription: l, getServerState: n ? () => n : void 0 };
  }, [i, n]), o = h.useMemo(() => i.getState(), [i]);
  zM(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), o !== i.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || KM;
  return h.createElement(u.Provider, { value: a }, t);
}
var qM = HM, YM = /* @__PURE__ */ new Set(["axisLine", "tickLine", "activeBar", "activeDot", "activeLabel", "activeShape", "allowEscapeViewBox", "background", "cursor", "dot", "label", "line", "margin", "padding", "position", "shape", "style", "tick", "wrapperStyle", "radius"]);
function GM(e2, t) {
  return e2 == null && t == null ? true : typeof e2 == "number" && typeof t == "number" ? e2 === t || e2 !== e2 && t !== t : e2 === t;
}
function zl(e2, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e2), ...Object.keys(t)]);
  for (var n of r) if (YM.has(n)) {
    if (e2[n] == null && t[n] == null) continue;
    if (!BM(e2[n], t[n])) return false;
  } else if (!GM(e2[n], t[n])) return false;
  return true;
}
var VM = ["id"], XM = ["type", "layout", "connectNulls", "needClip", "shape"], ZM = ["activeDot", "animateNewValues", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "hide", "isAnimationActive", "label", "legendType", "xAxisId", "yAxisId", "id"];
function hn() {
  return hn = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, hn.apply(null, arguments);
}
function ed(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lt(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ed(Object(r), true).forEach(function(n) {
      QM(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function QM(e2, t, r) {
  return (t = JM(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function JM(e2) {
  var t = ek(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ek(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function Bl(e2, t) {
  if (e2 == null) return {};
  var r, n, i = tk(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function tk(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var rk = (e2) => {
  var { dataKey: t, name: r, stroke: n, legendType: i, hide: a } = e2;
  return [{ inactive: a, dataKey: t, type: i, color: n, value: Hv(r, t), payload: e2 }];
}, nk = h.memo((e2) => {
  var { dataKey: t, data: r, stroke: n, strokeWidth: i, fill: a, name: o, hide: u, unit: l, tooltipType: s, id: c } = e2, f = { dataDefinedOnItem: r, positions: void 0, settings: { stroke: n, strokeWidth: i, fill: a, dataKey: t, nameKey: void 0, name: Hv(o, t), hide: u, type: s, color: n, unit: l, graphicalItemId: c } };
  return h.createElement(bC, { tooltipEntrySettings: f });
}), Py = (e2, t) => "".concat(t, "px ").concat(e2 - t, "px");
function ik(e2, t) {
  for (var r = e2.length % 2 !== 0 ? [...e2, 0] : e2, n = [], i = 0; i < t; ++i) n = [...n, ...r];
  return n;
}
var ak = (e2, t, r) => {
  var n = r.reduce((f, d) => f + d);
  if (!n) return Py(t, e2);
  for (var i = Math.floor(e2 / n), a = e2 % n, o = t - e2, u = [], l = 0, s = 0; l < r.length; s += r[l], ++l) if (s + r[l] > a) {
    u = [...r.slice(0, l), a - s];
    break;
  }
  var c = u.length % 2 === 0 ? [0, o] : [o];
  return [...ik(r, i), ...u, ...c].map((f) => "".concat(f, "px")).join(", ");
};
function ok(e2) {
  var { clipPathId: t, points: r, props: n } = e2, { dot: i, dataKey: a, needClip: o } = n, { id: u } = n, l = Bl(n, VM), s = ft(l);
  return h.createElement(UC, { points: r, dot: i, className: "recharts-line-dots", dotClassName: "recharts-line-dot", dataKey: a, baseProps: s, needClip: o, clipPathId: t });
}
function uk(e2) {
  var { showLabels: t, children: r, points: n } = e2, i = h.useMemo(() => n == null ? void 0 : n.map((a) => {
    var o, u, l = { x: (o = a.x) !== null && o !== void 0 ? o : 0, y: (u = a.y) !== null && u !== void 0 ? u : 0, width: 0, lowerWidth: 0, upperWidth: 0, height: 0 };
    return lt(lt({}, l), {}, { value: a.value, payload: a.payload, viewBox: l, parentViewBox: void 0, fill: void 0 });
  }), [n]);
  return h.createElement(XE, { value: t ? i : void 0 }, r);
}
function td(e2) {
  var { clipPathId: t, pathRef: r, points: n, strokeDasharray: i, props: a } = e2, { type: o, layout: u, connectNulls: l, needClip: s, shape: c } = a, f = Bl(a, XM), d = lt(lt({}, _e(f)), {}, { fill: "none", className: "recharts-line-curve", clipPath: s ? "url(#clipPath-".concat(t, ")") : void 0, points: n, type: o, layout: u, connectNulls: l, strokeDasharray: i ?? a.strokeDasharray });
  return h.createElement(h.Fragment, null, (n == null ? void 0 : n.length) > 1 && h.createElement(gC, hn({ shapeType: "curve", option: c }, d, { pathRef: r })), h.createElement(ok, { points: n, clipPathId: t, props: a }));
}
function lk(e2) {
  try {
    return e2 && e2.getTotalLength && e2.getTotalLength() || 0;
  } catch {
    return 0;
  }
}
function ck(e2) {
  var { clipPathId: t, props: r, pathRef: n, previousPointsRef: i, longestAnimatedLengthRef: a } = e2, { points: o, strokeDasharray: u, isAnimationActive: l, animationBegin: s, animationDuration: c, animationEasing: f, animateNewValues: d, width: v, height: p, onAnimationEnd: y, onAnimationStart: m } = r, g = i.current, w = Du(o, "recharts-line-"), b = h.useRef(w), [P, x] = h.useState(false), O = !P, A = h.useCallback(() => {
    typeof y == "function" && y(), x(false);
  }, [y]), M = h.useCallback(() => {
    typeof m == "function" && m(), x(true);
  }, [m]), T = lk(n.current), D = h.useRef(0);
  b.current !== w && (D.current = a.current, b.current = w);
  var E = D.current;
  return h.createElement(uk, { points: o, showLabels: O }, r.children, h.createElement(Iu, { animationId: w, begin: s, duration: c, isActive: l, easing: f, onAnimationEnd: A, onAnimationStart: M, key: w }, (j) => {
    var R = Ie(E, T + E, j), L = Math.min(R, T), U;
    if (l) if (u) {
      var Z = "".concat(u).split(/[,\s]+/gim).map(($) => parseFloat($));
      U = ak(L, T, Z);
    } else U = Py(T, L);
    else U = u == null ? void 0 : String(u);
    if (j > 0 && T > 0 && (i.current = o, a.current = Math.max(a.current, L)), g) {
      var B = g.length / o.length, H = j === 1 ? o : o.map(($, je) => {
        var Re = Math.floor(je * B);
        if (g[Re]) {
          var Me = g[Re];
          return lt(lt({}, $), {}, { x: Ie(Me.x, $.x, j), y: Ie(Me.y, $.y, j) });
        }
        return d ? lt(lt({}, $), {}, { x: Ie(v * 2, $.x, j), y: Ie(p / 2, $.y, j) }) : lt(lt({}, $), {}, { x: $.x, y: $.y });
      });
      return i.current = H, h.createElement(td, { props: r, points: H, clipPathId: t, pathRef: n, strokeDasharray: U });
    }
    return h.createElement(td, { props: r, points: o, clipPathId: t, pathRef: n, strokeDasharray: U });
  }), h.createElement(JE, { label: r.label }));
}
function sk(e2) {
  var { clipPathId: t, props: r } = e2, n = h.useRef(null), i = h.useRef(0), a = h.useRef(null);
  return h.createElement(ck, { props: r, clipPathId: t, previousPointsRef: n, longestAnimatedLengthRef: i, pathRef: a });
}
var fk = (e2, t) => {
  var r, n;
  return { x: (r = e2.x) !== null && r !== void 0 ? r : void 0, y: (n = e2.y) !== null && n !== void 0 ? n : void 0, value: e2.value, errorVal: xe(e2.payload, t) };
};
class dk extends h.Component {
  render() {
    var { hide: t, dot: r, points: n, className: i, xAxisId: a, yAxisId: o, top: u, left: l, width: s, height: c, id: f, needClip: d, zIndex: v } = this.props;
    if (t) return null;
    var p = Y("recharts-line", i), y = f, { r: m, strokeWidth: g } = PM(r), w = ly(r), b = m * 2 + g, P = d ? "url(#clipPath-".concat(w ? "" : "dots-").concat(y, ")") : void 0;
    return h.createElement($t, { zIndex: v }, h.createElement(Wt, { className: p }, d && h.createElement("defs", null, h.createElement(mM, { clipPathId: y, xAxisId: a, yAxisId: o }), !w && h.createElement("clipPath", { id: "clipPath-dots-".concat(y) }, h.createElement("rect", { x: l - b / 2, y: u - b / 2, width: s + b, height: c + b }))), h.createElement(pM, { xAxisId: a, yAxisId: o, data: n, dataPointFormatter: fk, errorBarOffset: 0 }, h.createElement(sk, { props: this.props, clipPathId: y }))), h.createElement(cj, { activeDot: this.props.activeDot, points: n, mainColor: this.props.stroke, itemDataKey: this.props.dataKey, clipPath: P }));
  }
}
var Oy = { activeDot: true, animateNewValues: true, animationBegin: 0, animationDuration: 1500, animationEasing: "ease", connectNulls: false, dot: true, fill: "#fff", hide: false, isAnimationActive: "auto", label: false, legendType: "line", stroke: "#3182bd", strokeWidth: 1, xAxisId: 0, yAxisId: 0, zIndex: we.line, type: "linear" };
function vk(e2) {
  var t = Ne(e2, Oy), { activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: a, animationEasing: o, connectNulls: u, dot: l, hide: s, isAnimationActive: c, label: f, legendType: d, xAxisId: v, yAxisId: p, id: y } = t, m = Bl(t, ZM), { needClip: g } = yy(v, p), w = Nl(), b = xn(), P = Le(), x = N((D) => xM(D, v, p, P, y));
  if (b !== "horizontal" && b !== "vertical" || x == null || w == null) return null;
  var { height: O, width: A, x: M, y: T } = w;
  return h.createElement(dk, hn({}, m, { id: y, connectNulls: u, dot: l, activeDot: r, animateNewValues: n, animationBegin: i, animationDuration: a, animationEasing: o, isAnimationActive: c, hide: s, label: f, legendType: d, xAxisId: v, yAxisId: p, points: x, layout: b, height: O, width: A, left: M, top: T, needClip: g }));
}
function hk(e2) {
  var { layout: t, xAxis: r, yAxis: n, xAxisTicks: i, yAxisTicks: a, dataKey: o, bandSize: u, displayedData: l } = e2;
  return l.map((s, c) => {
    var f = xe(s, o);
    if (t === "horizontal") {
      var d = gc({ axis: r, ticks: i, bandSize: u, entry: s, index: c }), v = pe(f) ? null : n.scale(f);
      return { x: d, y: v, value: f, payload: s };
    }
    var p = pe(f) ? null : r.scale(f), y = gc({ axis: n, ticks: a, bandSize: u, entry: s, index: c });
    return p == null || y == null ? null : { x: p, y, value: f, payload: s };
  }).filter(Boolean);
}
function pk(e2) {
  var t = Ne(e2, Oy), r = Le();
  return h.createElement(AC, { id: t.id, type: "line" }, (n) => h.createElement(h.Fragment, null, h.createElement(wC, { legendPayload: rk(t) }), h.createElement(nk, { dataKey: t.dataKey, data: t.data, stroke: t.stroke, strokeWidth: t.strokeWidth, fill: t.fill, name: t.name, hide: t.hide, unit: t.unit, tooltipType: t.tooltipType, id: n }), h.createElement(DC, { type: "line", id: n, data: t.data, xAxisId: t.xAxisId, yAxisId: t.yAxisId, zAxisId: 0, dataKey: t.dataKey, hide: t.hide, isPanorama: r }), h.createElement(vk, hn({}, t, { id: n }))));
}
var mk = h.memo(pk, zl);
mk.displayName = "Line";
var yk = ["domain", "range"], gk = ["domain", "range"];
function rd(e2, t) {
  if (e2 == null) return {};
  var r, n, i = bk(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function bk(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function nd(e2, t) {
  return e2 === t ? true : Array.isArray(e2) && e2.length === 2 && Array.isArray(t) && t.length === 2 ? e2[0] === t[0] && e2[1] === t[1] : false;
}
function Sy(e2, t) {
  if (e2 === t) return true;
  var { domain: r, range: n } = e2, i = rd(e2, yk), { domain: a, range: o } = t, u = rd(t, gk);
  return !nd(r, a) || !nd(n, o) ? false : zl(i, u);
}
var wk = ["dangerouslySetInnerHTML", "ticks", "scale"], xk = ["id", "scale"];
function eu() {
  return eu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, eu.apply(null, arguments);
}
function id(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Pk(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Pk(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function Ok(e2) {
  var t = oe(), r = h.useRef(null);
  return h.useLayoutEffect(() => {
    r.current === null ? t(GC(e2)) : r.current !== e2 && t(VC({ prev: r.current, next: e2 })), r.current = e2;
  }, [e2, t]), h.useLayoutEffect(() => () => {
    r.current && (t(XC(r.current)), r.current = null);
  }, [t]), null;
}
var Sk = (e2) => {
  var { xAxisId: t, className: r } = e2, n = N(Yv), i = Le(), a = "xAxis", o = N((g) => fm(g, a, t, i)), u = N((g) => CS(g, t)), l = N((g) => DS(g, t)), s = N((g) => kp(g, t));
  if (u == null || l == null || s == null) return null;
  var { dangerouslySetInnerHTML: c, ticks: f, scale: d } = e2, v = id(e2, wk), { id: p, scale: y } = s, m = id(s, xk);
  return h.createElement(Rl, eu({}, v, m, { x: l.x, y: l.y, width: u.width, height: u.height, className: Y("recharts-".concat(a, " ").concat(a), r), viewBox: n, ticks: o, axisType: a }));
}, Ak = { allowDataOverflow: de.allowDataOverflow, allowDecimals: de.allowDecimals, allowDuplicatedCategory: de.allowDuplicatedCategory, angle: de.angle, axisLine: Ot.axisLine, height: de.height, hide: false, includeHidden: de.includeHidden, interval: de.interval, minTickGap: de.minTickGap, mirror: de.mirror, orientation: de.orientation, padding: de.padding, reversed: de.reversed, scale: de.scale, tick: de.tick, tickCount: de.tickCount, tickLine: Ot.tickLine, tickSize: Ot.tickSize, type: de.type, xAxisId: 0 }, _k = (e2) => {
  var t = Ne(e2, Ak);
  return h.createElement(h.Fragment, null, h.createElement(Ok, { allowDataOverflow: t.allowDataOverflow, allowDecimals: t.allowDecimals, allowDuplicatedCategory: t.allowDuplicatedCategory, angle: t.angle, dataKey: t.dataKey, domain: t.domain, height: t.height, hide: t.hide, id: t.xAxisId, includeHidden: t.includeHidden, interval: t.interval, minTickGap: t.minTickGap, mirror: t.mirror, name: t.name, orientation: t.orientation, padding: t.padding, reversed: t.reversed, scale: t.scale, tick: t.tick, tickCount: t.tickCount, tickFormatter: t.tickFormatter, ticks: t.ticks, type: t.type, unit: t.unit }), h.createElement(Sk, t));
}, Ek = h.memo(_k, Sy);
Ek.displayName = "XAxis";
var Ck = ["dangerouslySetInnerHTML", "ticks", "scale"], jk = ["id", "scale"];
function tu() {
  return tu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, tu.apply(null, arguments);
}
function ad(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Mk(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Mk(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function kk(e2) {
  var t = oe(), r = h.useRef(null);
  return h.useLayoutEffect(() => {
    r.current === null ? t(ZC(e2)) : r.current !== e2 && t(QC({ prev: r.current, next: e2 })), r.current = e2;
  }, [e2, t]), h.useLayoutEffect(() => () => {
    r.current && (t(JC(r.current)), r.current = null);
  }, [t]), null;
}
var Tk = (e2) => {
  var { yAxisId: t, className: r, width: n, label: i } = e2, a = h.useRef(null), o = h.useRef(null), u = N(Yv), l = Le(), s = oe(), c = "yAxis", f = N((O) => LS(O, t)), d = N((O) => $S(O, t)), v = N((O) => fm(O, c, t, l)), p = N((O) => Tp(O, t));
  if (h.useLayoutEffect(() => {
    if (!(n !== "auto" || !f || Dl(i) || h.isValidElement(i) || p == null)) {
      var O = a.current;
      if (O) {
        var A = O.getCalculatedWidth();
        Math.round(f.width) !== Math.round(A) && s(ej({ id: t, width: A }));
      }
    }
  }, [v, f, s, i, t, n, p]), f == null || d == null || p == null) return null;
  var { dangerouslySetInnerHTML: y, ticks: m, scale: g } = e2, w = ad(e2, Ck), { id: b, scale: P } = p, x = ad(p, jk);
  return h.createElement(Rl, tu({}, w, x, { ref: a, labelRef: o, x: d.x, y: d.y, tickTextProps: n === "auto" ? { width: void 0 } : { width: n }, width: f.width, height: f.height, className: Y("recharts-".concat(c, " ").concat(c), r), viewBox: u, ticks: v, axisType: c }));
}, Ik = { allowDataOverflow: ve.allowDataOverflow, allowDecimals: ve.allowDecimals, allowDuplicatedCategory: ve.allowDuplicatedCategory, angle: ve.angle, axisLine: Ot.axisLine, hide: false, includeHidden: ve.includeHidden, interval: ve.interval, minTickGap: ve.minTickGap, mirror: ve.mirror, orientation: ve.orientation, padding: ve.padding, reversed: ve.reversed, scale: ve.scale, tick: ve.tick, tickCount: ve.tickCount, tickLine: Ot.tickLine, tickSize: Ot.tickSize, type: ve.type, width: ve.width, yAxisId: 0 }, Dk = (e2) => {
  var t = Ne(e2, Ik);
  return h.createElement(h.Fragment, null, h.createElement(kk, { interval: t.interval, id: t.yAxisId, scale: t.scale, type: t.type, domain: t.domain, allowDataOverflow: t.allowDataOverflow, dataKey: t.dataKey, allowDuplicatedCategory: t.allowDuplicatedCategory, allowDecimals: t.allowDecimals, tickCount: t.tickCount, padding: t.padding, includeHidden: t.includeHidden, reversed: t.reversed, ticks: t.ticks, width: t.width, orientation: t.orientation, mirror: t.mirror, hide: t.hide, unit: t.unit, name: t.name, angle: t.angle, minTickGap: t.minTickGap, tick: t.tick, tickFormatter: t.tickFormatter }), h.createElement(Tk, t));
}, Nk = h.memo(Dk, Sy);
Nk.displayName = "YAxis";
var $k = (e2, t) => t, Fl = S([$k, X, Cp, se, Cm, Nt, QA, Pe], a_), Wl = (e2) => {
  var t = e2.currentTarget.getBoundingClientRect(), r = t.width / e2.currentTarget.offsetWidth, n = t.height / e2.currentTarget.offsetHeight;
  return { chartX: Math.round((e2.clientX - t.left) / r), chartY: Math.round((e2.clientY - t.top) / n) };
}, Ay = Qe("mouseClick"), _y = bn();
_y.startListening({ actionCreator: Ay, effect: (e2, t) => {
  var r = e2.payload, n = Fl(t.getState(), Wl(r));
  (n == null ? void 0 : n.activeIndex) != null && t.dispatch(XS({ activeIndex: n.activeIndex, activeDataKey: void 0, activeCoordinate: n.activeCoordinate }));
} });
var ru = Qe("mouseMove"), Ey = bn(), Zn = null;
Ey.startListening({ actionCreator: ru, effect: (e2, t) => {
  var r = e2.payload;
  Zn !== null && cancelAnimationFrame(Zn);
  var n = Wl(r);
  Zn = requestAnimationFrame(() => {
    var i = t.getState(), a = Ol(i, i.tooltip.settings.shared);
    if (a === "axis") {
      var o = Fl(i, n);
      (o == null ? void 0 : o.activeIndex) != null ? t.dispatch(wm({ activeIndex: o.activeIndex, activeDataKey: void 0, activeCoordinate: o.activeCoordinate })) : t.dispatch(bm());
    }
    Zn = null;
  });
} });
function Lk(e2, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e2 === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var od = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, barSize: void 0, className: void 0, maxBarSize: void 0, stackOffset: "none", syncId: void 0, syncMethod: "index", baseValue: void 0, reverseStackOrder: false }, Cy = $e({ name: "rootProps", initialState: od, reducers: { updateOptions: (e2, t) => {
  var r;
  e2.accessibilityLayer = t.payload.accessibilityLayer, e2.barCategoryGap = t.payload.barCategoryGap, e2.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : od.barGap, e2.barSize = t.payload.barSize, e2.maxBarSize = t.payload.maxBarSize, e2.stackOffset = t.payload.stackOffset, e2.syncId = t.payload.syncId, e2.syncMethod = t.payload.syncMethod, e2.className = t.payload.className, e2.baseValue = t.payload.baseValue, e2.reverseStackOrder = t.payload.reverseStackOrder;
} } }), Rk = Cy.reducer, { updateOptions: zk } = Cy.actions, jy = $e({ name: "polarOptions", initialState: null, reducers: { updatePolarOptions: (e2, t) => t.payload } }), { updatePolarOptions: tI } = jy.actions, Bk = jy.reducer, My = Qe("keyDown"), ky = Qe("focus"), Ul = bn();
Ul.startListening({ actionCreator: My, effect: (e2, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip, a = e2.payload;
    if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
      var o = Sl(i, Rr(r), jn(r), In(r)), u = o == null ? -1 : Number(o);
      if (!(!Number.isFinite(u) || u < 0)) {
        var l = Nt(r);
        if (a === "Enter") {
          var s = Ri(r, "axis", "hover", String(i.index));
          t.dispatch(Go({ active: !i.active, activeIndex: i.index, activeCoordinate: s }));
          return;
        }
        var c = FS(r), f = c === "left-to-right" ? 1 : -1, d = a === "ArrowRight" ? 1 : -1, v = u + d * f;
        if (!(l == null || v >= l.length || v < 0)) {
          var p = Ri(r, "axis", "hover", String(v));
          t.dispatch(Go({ active: true, activeIndex: v.toString(), activeCoordinate: p }));
        }
      }
    }
  }
} });
Ul.startListening({ actionCreator: ky, effect: (e2, t) => {
  var r = t.getState(), n = r.rootProps.accessibilityLayer !== false;
  if (n) {
    var { keyboardInteraction: i } = r.tooltip;
    if (!i.active && i.index == null) {
      var a = "0", o = Ri(r, "axis", "hover", String(a));
      t.dispatch(Go({ active: true, activeIndex: a, activeCoordinate: o }));
    }
  }
} });
var Ve = Qe("externalEvent"), Ty = bn(), oo = /* @__PURE__ */ new Map();
Ty.startListening({ actionCreator: Ve, effect: (e2, t) => {
  var { handler: r, reactEvent: n } = e2.payload;
  if (r != null) {
    n.persist();
    var i = n.type, a = oo.get(i);
    a !== void 0 && cancelAnimationFrame(a);
    var o = requestAnimationFrame(() => {
      try {
        var u = t.getState(), l = { activeCoordinate: $A(u), activeDataKey: DA(u), activeIndex: fn(u), activeLabel: km(u), activeTooltipIndex: fn(u), isTooltipActive: LA(u) };
        r(l, n);
      } finally {
        oo.delete(i);
      }
    });
    oo.set(i, o);
  }
} });
var Fk = S([$r], (e2) => e2.tooltipItemPayloads), Wk = S([Fk, Tn, (e2, t) => t, (e2, t, r) => r], (e2, t, r, n) => {
  var i = e2.find((u) => u.settings.graphicalItemId === n);
  if (i != null) {
    var { positions: a } = i;
    if (a != null) {
      var o = t(a, r);
      return o;
    }
  }
}), Iy = Qe("touchMove"), Dy = bn();
Dy.startListening({ actionCreator: Iy, effect: (e2, t) => {
  var r = e2.payload;
  if (!(r.touches == null || r.touches.length === 0)) {
    var n = t.getState(), i = Ol(n, n.tooltip.settings.shared);
    if (i === "axis") {
      var a = r.touches[0];
      if (a == null) return;
      var o = Fl(n, Wl({ clientX: a.clientX, clientY: a.clientY, currentTarget: r.currentTarget }));
      (o == null ? void 0 : o.activeIndex) != null && t.dispatch(wm({ activeIndex: o.activeIndex, activeDataKey: void 0, activeCoordinate: o.activeCoordinate }));
    } else if (i === "item") {
      var u, l = r.touches[0];
      if (document.elementFromPoint == null || l == null) return;
      var s = document.elementFromPoint(l.clientX, l.clientY);
      if (!s || !s.getAttribute) return;
      var c = s.getAttribute(Hb), f = (u = s.getAttribute(qb)) !== null && u !== void 0 ? u : void 0, d = Lr(n).find((y) => y.id === f);
      if (c == null || d == null || f == null) return;
      var { dataKey: v } = d, p = Wk(n, c, f);
      t.dispatch(VS({ activeDataKey: v, activeIndex: c, activeCoordinate: p, activeGraphicalItemId: f }));
    }
  }
} });
var Uk = hv({ brush: fj, cartesianAxis: tj, chartData: $_, errorBars: cM, graphicalItems: TC, layout: jb, legend: Mw, options: k_, polarAxis: tC, polarOptions: Bk, referenceElements: gj, rootProps: Rk, tooltip: ZS, zIndex: b_ }), Kk = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return eb({ reducer: Uk, preloadedState: t, middleware: (n) => {
    var i;
    return n({ serializableCheck: false, immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "") }).concat([_y.middleware, Ey.middleware, Ul.middleware, Ty.middleware, Dy.middleware]);
  }, enhancers: (n) => {
    var i = n;
    return typeof n == "function" && (i = n()), i.concat(jv({ type: "raf" }));
  }, devTools: { serialize: { replacer: Lk }, name: "recharts-".concat(r) } });
};
function Hk(e2) {
  var { preloadedState: t, children: r, reduxStoreName: n } = e2, i = Le(), a = h.useRef(null);
  if (i) return r;
  a.current == null && (a.current = Kk(t, n));
  var o = bu;
  return h.createElement(qM, { context: o, store: a.current }, r);
}
function qk(e2) {
  var { layout: t, margin: r } = e2, n = oe(), i = Le();
  return h.useEffect(() => {
    i || (n(_b(t)), n(Ab(r)));
  }, [n, i, t, r]), null;
}
var Yk = h.memo(qk, zl);
function Gk(e2) {
  var t = oe();
  return h.useEffect(() => {
    t(zk(e2));
  }, [t, e2]), null;
}
function ud(e2) {
  var { zIndex: t, isPanorama: r } = e2, n = h.useRef(null), i = oe();
  return h.useLayoutEffect(() => (n.current && i(y_({ zIndex: t, element: n.current, isPanorama: r })), () => {
    i(g_({ zIndex: t, isPanorama: r }));
  }), [i, t, r]), h.createElement("g", { tabIndex: -1, ref: n });
}
function ld(e2) {
  var { children: t, isPanorama: r } = e2, n = N(u_);
  if (!n || n.length === 0) return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return h.createElement(h.Fragment, null, i.map((o) => h.createElement(ud, { key: o, zIndex: o, isPanorama: r })), t, a.map((o) => h.createElement(ud, { key: o, zIndex: o, isPanorama: r })));
}
var Vk = ["children"];
function Xk(e2, t) {
  if (e2 == null) return {};
  var r, n, i = Zk(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function Zk(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
function Ki() {
  return Ki = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, Ki.apply(null, arguments);
}
var Qk = { width: "100%", height: "100%", display: "block" }, Jk = h.forwardRef((e2, t) => {
  var r = rh(), n = nh(), i = hh();
  if (!ht(r) || !ht(n)) return null;
  var { children: a, otherAttributes: o, title: u, desc: l } = e2, s, c;
  return o != null && (typeof o.tabIndex == "number" ? s = o.tabIndex : s = i ? 0 : void 0, typeof o.role == "string" ? c = o.role : c = i ? "application" : void 0), h.createElement(pd, Ki({}, o, { title: u, desc: l, role: c, tabIndex: s, width: r, height: n, style: Qk, ref: t }), a);
}), eT = (e2) => {
  var { children: t } = e2, r = N(ha);
  if (!r) return null;
  var { width: n, height: i, y: a, x: o } = r;
  return h.createElement(pd, { width: n, height: i, x: o, y: a }, t);
}, cd = h.forwardRef((e2, t) => {
  var { children: r } = e2, n = Xk(e2, Vk), i = Le();
  return i ? h.createElement(eT, null, h.createElement(ld, { isPanorama: true }, r)) : h.createElement(Jk, Ki({ ref: t }, n), h.createElement(ld, { isPanorama: false }, r));
});
function tT() {
  var e2 = oe(), [t, r] = h.useState(null), n = N(Kb);
  return h.useEffect(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      ae(a) && a !== n && e2(Cb(a));
    }
  }, [t, e2, n]), r;
}
function sd(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e2, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rT(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sd(Object(r), true).forEach(function(n) {
      nT(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : sd(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function nT(e2, t, r) {
  return (t = iT(t)) in e2 ? Object.defineProperty(e2, t, { value: r, enumerable: true, configurable: true, writable: true }) : e2[t] = r, e2;
}
function iT(e2) {
  var t = aT(e2, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aT(e2, t) {
  if (typeof e2 != "object" || !e2) return e2;
  var r = e2[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e2, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e2);
}
function hr() {
  return hr = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, hr.apply(null, arguments);
}
var oT = () => (H_(), null);
function Hi(e2) {
  if (typeof e2 == "number") return e2;
  if (typeof e2 == "string") {
    var t = parseFloat(e2);
    if (!Number.isNaN(t)) return t;
  }
  return 0;
}
var uT = h.forwardRef((e2, t) => {
  var r, n, i = h.useRef(null), [a, o] = h.useState({ containerWidth: Hi((r = e2.style) === null || r === void 0 ? void 0 : r.width), containerHeight: Hi((n = e2.style) === null || n === void 0 ? void 0 : n.height) }), u = h.useCallback((s, c) => {
    o((f) => {
      var d = Math.round(s), v = Math.round(c);
      return f.containerWidth === d && f.containerHeight === v ? f : { containerWidth: d, containerHeight: v };
    });
  }, []), l = h.useCallback((s) => {
    if (typeof t == "function" && t(s), s != null && typeof ResizeObserver < "u") {
      var { width: c, height: f } = s.getBoundingClientRect();
      u(c, f);
      var d = (p) => {
        var { width: y, height: m } = p[0].contentRect;
        u(y, m);
      }, v = new ResizeObserver(d);
      v.observe(s), i.current = v;
    }
  }, [t, u]);
  return h.useEffect(() => () => {
    var s = i.current;
    s == null ? void 0 : s.disconnect();
  }, [u]), h.createElement(h.Fragment, null, h.createElement(ma, { width: a.containerWidth, height: a.containerHeight }), h.createElement("div", hr({ ref: l }, e2)));
}), lT = h.forwardRef((e2, t) => {
  var { width: r, height: n } = e2, [i, a] = h.useState({ containerWidth: Hi(r), containerHeight: Hi(n) }), o = h.useCallback((l, s) => {
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
  return h.createElement(h.Fragment, null, h.createElement(ma, { width: i.containerWidth, height: i.containerHeight }), h.createElement("div", hr({ ref: u }, e2)));
}), cT = h.forwardRef((e2, t) => {
  var { width: r, height: n } = e2;
  return h.createElement(h.Fragment, null, h.createElement(ma, { width: r, height: n }), h.createElement("div", hr({ ref: t }, e2)));
}), sT = h.forwardRef((e2, t) => {
  var { width: r, height: n } = e2;
  return St(r) || St(n) ? h.createElement(lT, hr({}, e2, { ref: t })) : h.createElement(cT, hr({}, e2, { ref: t }));
});
function fT(e2) {
  return e2 === true ? uT : sT;
}
var dT = h.forwardRef((e2, t) => {
  var { children: r, className: n, height: i, onClick: a, onContextMenu: o, onDoubleClick: u, onMouseDown: l, onMouseEnter: s, onMouseLeave: c, onMouseMove: f, onMouseUp: d, onTouchEnd: v, onTouchMove: p, onTouchStart: y, style: m, width: g, responsive: w, dispatchTouchEvents: b = true } = e2, P = h.useRef(null), x = oe(), [O, A] = h.useState(null), [M, T] = h.useState(null), D = tT(), E = Mu(), j = (E == null ? void 0 : E.width) > 0 ? E.width : g, R = (E == null ? void 0 : E.height) > 0 ? E.height : i, L = h.useCallback((_) => {
    D(_), typeof t == "function" && t(_), A(_), T(_), _ != null && (P.current = _);
  }, [D, t, A, T]), U = h.useCallback((_) => {
    x(Ay(_)), x(Ve({ handler: a, reactEvent: _ }));
  }, [x, a]), Z = h.useCallback((_) => {
    x(ru(_)), x(Ve({ handler: s, reactEvent: _ }));
  }, [x, s]), B = h.useCallback((_) => {
    x(bm()), x(Ve({ handler: c, reactEvent: _ }));
  }, [x, c]), H = h.useCallback((_) => {
    x(ru(_)), x(Ve({ handler: f, reactEvent: _ }));
  }, [x, f]), $ = h.useCallback(() => {
    x(ky());
  }, [x]), je = h.useCallback((_) => {
    x(My(_.key));
  }, [x]), Re = h.useCallback((_) => {
    x(Ve({ handler: o, reactEvent: _ }));
  }, [x, o]), Me = h.useCallback((_) => {
    x(Ve({ handler: u, reactEvent: _ }));
  }, [x, u]), mt = h.useCallback((_) => {
    x(Ve({ handler: l, reactEvent: _ }));
  }, [x, l]), qe = h.useCallback((_) => {
    x(Ve({ handler: d, reactEvent: _ }));
  }, [x, d]), Xt = h.useCallback((_) => {
    x(Ve({ handler: y, reactEvent: _ }));
  }, [x, y]), zr = h.useCallback((_) => {
    b && x(Iy(_)), x(Ve({ handler: p, reactEvent: _ }));
  }, [x, b, p]), ke = h.useCallback((_) => {
    x(Ve({ handler: v, reactEvent: _ }));
  }, [x, v]), La = fT(w);
  return h.createElement(Rm.Provider, { value: O }, h.createElement(qy.Provider, { value: M }, h.createElement(La, { width: j ?? (m == null ? void 0 : m.width), height: R ?? (m == null ? void 0 : m.height), className: Y("recharts-wrapper", n), style: rT({ position: "relative", cursor: "default", width: j, height: R }, m), onClick: U, onContextMenu: Re, onDoubleClick: Me, onFocus: $, onKeyDown: je, onMouseDown: mt, onMouseEnter: Z, onMouseLeave: B, onMouseMove: H, onMouseUp: qe, onTouchEnd: ke, onTouchMove: zr, onTouchStart: Xt, ref: L }, h.createElement(oT, null), r)));
}), vT = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function hT(e2, t) {
  if (e2 == null) return {};
  var r, n, i = pT(e2, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e2);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e2, r) && (i[r] = e2[r]);
  }
  return i;
}
function pT(e2, t) {
  if (e2 == null) return {};
  var r = {};
  for (var n in e2) if ({}.hasOwnProperty.call(e2, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e2[n];
  }
  return r;
}
var mT = h.forwardRef((e2, t) => {
  var { width: r, height: n, responsive: i, children: a, className: o, style: u, compact: l, title: s, desc: c } = e2, f = hT(e2, vT), d = ft(f);
  return l ? h.createElement(h.Fragment, null, h.createElement(ma, { width: r, height: n }), h.createElement(cd, { otherAttributes: d, title: s, desc: c }, a)) : h.createElement(dT, { className: o, style: u, width: r, height: n, responsive: i ?? false, onClick: e2.onClick, onMouseLeave: e2.onMouseLeave, onMouseEnter: e2.onMouseEnter, onMouseMove: e2.onMouseMove, onMouseDown: e2.onMouseDown, onMouseUp: e2.onMouseUp, onContextMenu: e2.onContextMenu, onDoubleClick: e2.onDoubleClick, onTouchStart: e2.onTouchStart, onTouchMove: e2.onTouchMove, onTouchEnd: e2.onTouchEnd }, h.createElement(cd, { otherAttributes: d, title: s, desc: c, ref: t }, h.createElement(wj, null, a)));
});
function nu() {
  return nu = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e2[n] = r[n]);
    }
    return e2;
  }, nu.apply(null, arguments);
}
var yT = { top: 5, right: 5, bottom: 5, left: 5 }, gT = { accessibilityLayer: true, barCategoryGap: "10%", barGap: 4, layout: "horizontal", margin: yT, responsive: false, reverseStackOrder: false, stackOffset: "none", syncMethod: "index" }, bT = h.forwardRef(function(t, r) {
  var n, i = Ne(t.categoricalChartProps, gT), { chartName: a, defaultTooltipEventType: o, validateTooltipEventTypes: u, tooltipPayloadSearcher: l, categoricalChartProps: s } = t, c = { chartName: a, defaultTooltipEventType: o, validateTooltipEventTypes: u, tooltipPayloadSearcher: l, eventEmitter: void 0 };
  return h.createElement(Hk, { preloadedState: { options: c }, reduxStoreName: (n = s.id) !== null && n !== void 0 ? n : a }, h.createElement(sj, { chartData: s.data }), h.createElement(Yk, { layout: i.layout, margin: i.margin }), h.createElement(Gk, { baseValue: i.baseValue, accessibilityLayer: i.accessibilityLayer, barCategoryGap: i.barCategoryGap, maxBarSize: i.maxBarSize, stackOffset: i.stackOffset, barGap: i.barGap, barSize: i.barSize, syncId: i.syncId, syncMethod: i.syncMethod, className: i.className, reverseStackOrder: i.reverseStackOrder }), h.createElement(mT, nu({}, i, { ref: r })));
}), wT = ["axis"], rI = h.forwardRef((e2, t) => h.createElement(bT, { chartName: "LineChart", defaultTooltipEventType: "axis", validateTooltipEventTypes: wT, tooltipPayloadSearcher: j_, categoricalChartProps: e2, ref: t }));
export {
  ET as $,
  xl as A,
  RS as B,
  fl as C,
  sl as D,
  jT as E,
  CT as F,
  En as G,
  sm as H,
  zS as I,
  N as J,
  we as K,
  Cp as L,
  ft as M,
  be as N,
  Kd as O,
  su as P,
  Ne as Q,
  oe as R,
  $T as S,
  LT as T,
  Fe as U,
  Wt as V,
  DT as W,
  NT as X,
  qi as Y,
  $t as Z,
  Fg as _,
  S as a,
  Il as a0,
  RT as a1,
  zT as a2,
  gt as a3,
  Le as a4,
  oy as a5,
  _T as a6,
  qt as a7,
  mi as a8,
  AC as a9,
  mk as aA,
  FT as aa,
  BT as ab,
  Hv as ac,
  bC as ad,
  cj as ae,
  HE as af,
  pe as ag,
  Du as ah,
  Iu as ai,
  JE as aj,
  XE as ak,
  Ie as al,
  UC as am,
  tI as an,
  Hk as ao,
  sj as ap,
  Yk as aq,
  Gk as ar,
  mT as as,
  j_ as at,
  OT as au,
  IT as av,
  rI as aw,
  uM as ax,
  Ek as ay,
  Nk as az,
  Ce as b,
  Y as c,
  im as d,
  Mn as e,
  nm as f,
  X as g,
  Ea as h,
  tm as i,
  Fp as j,
  OO as k,
  Bp as l,
  Hp as m,
  qp as n,
  em as o,
  ce as p,
  $p as q,
  te as r,
  _e as s,
  zp as t,
  yl as u,
  Yp as v,
  Ma as w,
  Dp as x,
  xe as y,
  bl as z
};
