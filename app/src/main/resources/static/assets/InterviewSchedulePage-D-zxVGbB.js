var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { j as w, m as X, t as As, h as Ms, e as zo, a5 as Nu, a6 as Ru, P as ju, a7 as Lu, a8 as Iu, r as Ps, X as Fu, l as Wu, k as Bo } from "./ui-vendor-CqaAdWtE.js";
import { g as ne, c as xe, r as W, R as x, j as Ns, k as Sr } from "./react-vendor-BA2qNj4G.js";
import { r as ft, a as Hu } from "./index-CxLe-kJW.js";
import { e as ht, g as zu, i as Yo, j as Rs, k as Bu, l as ae, m as Na, n as Yu, o as oe, p as ve, q as ie, r as Ra, t as We, u as Qr, v as Ht } from "./syntax-highlighter-CeD-urYA.js";
import { C as Uu } from "./ConfirmDialog-Cn876c6T.js";
var js = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    var r = 1e3, n = 6e4, a = 36e5, o = "millisecond", i = "second", s = "minute", l = "hour", c = "day", u = "week", d = "month", f = "quarter", v = "year", h = "date", p = "Invalid Date", m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, g = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var O = ["th", "st", "nd", "rd"], S = T % 100;
      return "[" + T + (O[(S - 20) % 10] || O[S] || O[0]) + "]";
    } }, $ = function(T, O, S) {
      var R = String(T);
      return !R || R.length >= O ? T : "" + Array(O + 1 - R.length).join(S) + T;
    }, b = { s: $, z: function(T) {
      var O = -T.utcOffset(), S = Math.abs(O), R = Math.floor(S / 60), L = S % 60;
      return (O <= 0 ? "+" : "-") + $(R, 2, "0") + ":" + $(L, 2, "0");
    }, m: function T(O, S) {
      if (O.date() < S.date()) return -T(S, O);
      var R = 12 * (S.year() - O.year()) + (S.month() - O.month()), L = O.clone().add(R, d), B = S - L < 0, U = O.clone().add(R + (B ? -1 : 1), d);
      return +(-(R + (S - L) / (B ? L - U : U - L)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: d, y: v, w: u, d: c, D: h, h: l, m: s, s: i, ms: o, Q: f }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, E = "en", _ = {};
    _[E] = g;
    var P = "$isDayjsObject", N = function(T) {
      return T instanceof z || !(!T || !T[P]);
    }, M = function T(O, S, R) {
      var L;
      if (!O) return E;
      if (typeof O == "string") {
        var B = O.toLowerCase();
        _[B] && (L = B), S && (_[B] = S, L = B);
        var U = O.split("-");
        if (!L && U.length > 1) return T(U[0]);
      } else {
        var q = O.name;
        _[q] = O, L = q;
      }
      return !R && L && (E = L), L || !R && E;
    }, C = function(T, O) {
      if (N(T)) return T.clone();
      var S = typeof O == "object" ? O : {};
      return S.date = T, S.args = arguments, new z(S);
    }, D = b;
    D.l = M, D.i = N, D.w = function(T, O) {
      return C(T, { locale: O.$L, utc: O.$u, x: O.$x, $offset: O.$offset });
    };
    var z = function() {
      function T(S) {
        this.$L = M(S.locale, null, true), this.parse(S), this.$x = this.$x || S.x || {}, this[P] = true;
      }
      var O = T.prototype;
      return O.parse = function(S) {
        this.$d = function(R) {
          var L = R.date, B = R.utc;
          if (L === null) return /* @__PURE__ */ new Date(NaN);
          if (D.u(L)) return /* @__PURE__ */ new Date();
          if (L instanceof Date) return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var U = L.match(m);
            if (U) {
              var q = U[2] - 1 || 0, k = (U[7] || "0").substring(0, 3);
              return B ? new Date(Date.UTC(U[1], q, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, k)) : new Date(U[1], q, U[3] || 1, U[4] || 0, U[5] || 0, U[6] || 0, k);
            }
          }
          return new Date(L);
        }(S), this.init();
      }, O.init = function() {
        var S = this.$d;
        this.$y = S.getFullYear(), this.$M = S.getMonth(), this.$D = S.getDate(), this.$W = S.getDay(), this.$H = S.getHours(), this.$m = S.getMinutes(), this.$s = S.getSeconds(), this.$ms = S.getMilliseconds();
      }, O.$utils = function() {
        return D;
      }, O.isValid = function() {
        return this.$d.toString() !== p;
      }, O.isSame = function(S, R) {
        var L = C(S);
        return this.startOf(R) <= L && L <= this.endOf(R);
      }, O.isAfter = function(S, R) {
        return C(S) < this.startOf(R);
      }, O.isBefore = function(S, R) {
        return this.endOf(R) < C(S);
      }, O.$g = function(S, R, L) {
        return D.u(S) ? this[R] : this.set(L, S);
      }, O.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, O.valueOf = function() {
        return this.$d.getTime();
      }, O.startOf = function(S, R) {
        var L = this, B = !!D.u(R) || R, U = D.p(S), q = function(V, re) {
          var se = D.w(L.$u ? Date.UTC(L.$y, re, V) : new Date(L.$y, re, V), L);
          return B ? se : se.endOf(c);
        }, k = function(V, re) {
          return D.w(L.toDate()[V].apply(L.toDate("s"), (B ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(re)), L);
        }, A = this.$W, j = this.$M, H = this.$D, Y = "set" + (this.$u ? "UTC" : "");
        switch (U) {
          case v:
            return B ? q(1, 0) : q(31, 11);
          case d:
            return B ? q(1, j) : q(0, j + 1);
          case u:
            var K = this.$locale().weekStart || 0, G = (A < K ? A + 7 : A) - K;
            return q(B ? H - G : H + (6 - G), j);
          case c:
          case h:
            return k(Y + "Hours", 0);
          case l:
            return k(Y + "Minutes", 1);
          case s:
            return k(Y + "Seconds", 2);
          case i:
            return k(Y + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, O.endOf = function(S) {
        return this.startOf(S, false);
      }, O.$set = function(S, R) {
        var L, B = D.p(S), U = "set" + (this.$u ? "UTC" : ""), q = (L = {}, L[c] = U + "Date", L[h] = U + "Date", L[d] = U + "Month", L[v] = U + "FullYear", L[l] = U + "Hours", L[s] = U + "Minutes", L[i] = U + "Seconds", L[o] = U + "Milliseconds", L)[B], k = B === c ? this.$D + (R - this.$W) : R;
        if (B === d || B === v) {
          var A = this.clone().set(h, 1);
          A.$d[q](k), A.init(), this.$d = A.set(h, Math.min(this.$D, A.daysInMonth())).$d;
        } else q && this.$d[q](k);
        return this.init(), this;
      }, O.set = function(S, R) {
        return this.clone().$set(S, R);
      }, O.get = function(S) {
        return this[D.p(S)]();
      }, O.add = function(S, R) {
        var L, B = this;
        S = Number(S);
        var U = D.p(R), q = function(j) {
          var H = C(B);
          return D.w(H.date(H.date() + Math.round(j * S)), B);
        };
        if (U === d) return this.set(d, this.$M + S);
        if (U === v) return this.set(v, this.$y + S);
        if (U === c) return q(1);
        if (U === u) return q(7);
        var k = (L = {}, L[s] = n, L[l] = a, L[i] = r, L)[U] || 1, A = this.$d.getTime() + S * k;
        return D.w(A, this);
      }, O.subtract = function(S, R) {
        return this.add(-1 * S, R);
      }, O.format = function(S) {
        var R = this, L = this.$locale();
        if (!this.isValid()) return L.invalidDate || p;
        var B = S || "YYYY-MM-DDTHH:mm:ssZ", U = D.z(this), q = this.$H, k = this.$m, A = this.$M, j = L.weekdays, H = L.months, Y = L.meridiem, K = function(re, se, Te, ke) {
          return re && (re[se] || re(R, B)) || Te[se].slice(0, ke);
        }, G = function(re) {
          return D.s(q % 12 || 12, re, "0");
        }, V = Y || function(re, se, Te) {
          var ke = re < 12 ? "AM" : "PM";
          return Te ? ke.toLowerCase() : ke;
        };
        return B.replace(y, function(re, se) {
          return se || function(Te) {
            switch (Te) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return D.s(R.$y, 4, "0");
              case "M":
                return A + 1;
              case "MM":
                return D.s(A + 1, 2, "0");
              case "MMM":
                return K(L.monthsShort, A, H, 3);
              case "MMMM":
                return K(H, A);
              case "D":
                return R.$D;
              case "DD":
                return D.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return K(L.weekdaysMin, R.$W, j, 2);
              case "ddd":
                return K(L.weekdaysShort, R.$W, j, 3);
              case "dddd":
                return j[R.$W];
              case "H":
                return String(q);
              case "HH":
                return D.s(q, 2, "0");
              case "h":
                return G(1);
              case "hh":
                return G(2);
              case "a":
                return V(q, k, true);
              case "A":
                return V(q, k, false);
              case "m":
                return String(k);
              case "mm":
                return D.s(k, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return D.s(R.$s, 2, "0");
              case "SSS":
                return D.s(R.$ms, 3, "0");
              case "Z":
                return U;
            }
            return null;
          }(re) || U.replace(":", "");
        });
      }, O.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, O.diff = function(S, R, L) {
        var B, U = this, q = D.p(R), k = C(S), A = (k.utcOffset() - this.utcOffset()) * n, j = this - k, H = function() {
          return D.m(U, k);
        };
        switch (q) {
          case v:
            B = H() / 12;
            break;
          case d:
            B = H();
            break;
          case f:
            B = H() / 3;
            break;
          case u:
            B = (j - A) / 6048e5;
            break;
          case c:
            B = (j - A) / 864e5;
            break;
          case l:
            B = j / a;
            break;
          case s:
            B = j / n;
            break;
          case i:
            B = j / r;
            break;
          default:
            B = j;
        }
        return L ? B : D.a(B);
      }, O.daysInMonth = function() {
        return this.endOf(d).$D;
      }, O.$locale = function() {
        return _[this.$L];
      }, O.locale = function(S, R) {
        if (!S) return this.$L;
        var L = this.clone(), B = M(S, R, true);
        return B && (L.$L = B), L;
      }, O.clone = function() {
        return D.w(this.$d, this);
      }, O.toDate = function() {
        return new Date(this.valueOf());
      }, O.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, O.toISOString = function() {
        return this.$d.toISOString();
      }, O.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), F = z.prototype;
    return C.prototype = F, [["$ms", o], ["$s", i], ["$m", s], ["$H", l], ["$W", c], ["$M", d], ["$y", v], ["$D", h]].forEach(function(T) {
      F[T[1]] = function(O) {
        return this.$g(O, T[0], T[1]);
      };
    }), C.extend = function(T, O) {
      return T.$i || (T(O, z, C), T.$i = true), C;
    }, C.locale = M, C.isDayjs = N, C.unix = function(T) {
      return C(1e3 * T);
    }, C.en = _[E], C.Ls = _, C.p = {}, C;
  });
})(js);
var qu = js.exports;
const le = ne(qu), Mt = { parse: async (e2, t) => {
  const r = { rawText: e2, source: t };
  return await ft.post("/api/interview-schedule/parse", r);
}, create: async (e2) => await ft.post("/api/interview-schedule", e2), getById: async (e2) => await ft.get(`/api/interview-schedule/${e2}`), getAll: async (e2) => await ft.get("/api/interview-schedule", { params: e2 }), update: async (e2, t) => await ft.put(`/api/interview-schedule/${e2}`, t), delete: async (e2) => {
  await ft.delete(`/api/interview-schedule/${e2}`);
}, updateStatus: async (e2, t) => await ft.patch(`/api/interview-schedule/${e2}/status`, null, { params: { status: t } }) };
function Ku() {
  const [e2, t] = W.useState([]), [r, n] = W.useState(false), [a, o] = W.useState(null), i = W.useCallback(async (d) => {
    n(true), o(null);
    try {
      const f = await Mt.getAll(d);
      t(f);
    } catch (f) {
      o(f.message || "\u83B7\u53D6\u9762\u8BD5\u5217\u8868\u5931\u8D25"), console.error("Failed to fetch interviews:", f);
    } finally {
      n(false);
    }
  }, []), s = async (d) => {
    const f = await Mt.create(d);
    return await i(), f;
  }, l = async (d, f) => {
    const v = await Mt.update(d, f);
    return await i(), v;
  }, c = async (d) => {
    await Mt.delete(d), t(e2.filter((f) => f.id !== d));
  }, u = async (d, f) => {
    const v = await Mt.updateStatus(d, f);
    return await i(), v;
  };
  return W.useEffect(() => {
    i();
  }, [i]), { interviews: e2, loading: r, error: a, fetchInterviews: i, createInterview: s, updateInterview: l, deleteInterview: c, updateStatus: u };
}
const Gu = ({ view: e2, onViewChange: t, date: r, onDateChange: n, onAddClick: a }) => {
  const o = () => {
    const c = new Date(r);
    e2 === "day" ? c.setDate(c.getDate() - 1) : e2 === "week" ? c.setDate(c.getDate() - 7) : e2 === "month" && c.setMonth(c.getMonth() - 1), n(c);
  }, i = () => {
    const c = new Date(r);
    e2 === "day" ? c.setDate(c.getDate() + 1) : e2 === "week" ? c.setDate(c.getDate() + 7) : e2 === "month" && c.setMonth(c.getMonth() + 1), n(c);
  }, s = () => {
    n(/* @__PURE__ */ new Date());
  }, l = () => e2 === "list" ? "\u9762\u8BD5\u5217\u8868" : le(r).format(e2 === "month" ? "YYYY\u5E74MM\u6708" : "YYYY\u5E74MM\u6708DD\u65E5");
  return w.jsx(X.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 mb-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50", children: w.jsxs("div", { className: "flex items-center justify-between", children: [w.jsxs("div", { className: "flex items-center gap-6", children: [w.jsx(X.h2, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, className: "text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight", children: l() }, l()), e2 !== "list" && w.jsxs("div", { className: "flex items-center gap-2", children: [w.jsx(X.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: o, className: "p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors", title: "\u4E0A\u4E00\u9875", children: w.jsx(As, { className: "w-5 h-5" }) }), w.jsx(X.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: s, className: "px-4 py-2 text-sm font-medium rounded-xl bg-primary-100/80 dark:bg-primary-500/20 text-primary-700 dark:text-primary-300 hover:bg-primary-200/90 dark:hover:bg-primary-500/30 border border-primary-200/50 dark:border-primary-400/30 backdrop-blur-sm transition-all", children: "\u4ECA\u5929" }), w.jsx(X.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: i, className: "p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors", title: "\u4E0B\u4E00\u9875", children: w.jsx(Ms, { className: "w-5 h-5" }) })] })] }), w.jsxs("div", { className: "flex items-center gap-3", children: [w.jsx("div", { className: "flex bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-1.5 gap-1", children: [{ key: "day", icon: zo, label: "\u65E5\u89C6\u56FE" }, { key: "week", icon: zo, label: "\u5468\u89C6\u56FE" }, { key: "month", icon: Nu, label: "\u6708\u89C6\u56FE" }, { key: "list", icon: Ru, label: "\u5217\u8868" }].map(({ key: c, icon: u, label: d }) => w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => t(c), className: `px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-sm transition-all ${e2 === c ? "bg-white/95 dark:bg-slate-700/80 backdrop-blur-sm shadow-md text-primary-700 dark:text-primary-200 border border-slate-200/50 dark:border-slate-600/50" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-700/50"}`, children: [w.jsx(u, { className: "w-4 h-4" }), d] }, c)) }), w.jsxs(X.button, { whileHover: { scale: 1.05, y: -1 }, whileTap: { scale: 0.95 }, onClick: a, className: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 flex items-center gap-2 transition-all", children: [w.jsx(ju, { className: "w-4 h-4" }), "\u6DFB\u52A0\u9762\u8BD5"] })] })] }) });
};
function Uo(e2, t) {
  var r = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e2);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e2, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Z(e2) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uo(Object(r), true).forEach(function(n) {
      ht(e2, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(r)) : Uo(Object(r)).forEach(function(n) {
      Object.defineProperty(e2, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e2;
}
function Ls() {
  try {
    var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ls = function() {
    return !!e2;
  })();
}
function pe(e2, t, r) {
  return t = Yo(t), zu(e2, Ls() ? Reflect.construct(t, r || [], Yo(e2).constructor) : t.apply(e2, r));
}
function Is(e2) {
  if (Array.isArray(e2)) return e2;
}
function Vu(e2, t) {
  var r = e2 == null ? null : typeof Symbol < "u" && e2[Symbol.iterator] || e2["@@iterator"];
  if (r != null) {
    var n, a, o, i, s = [], l = true, c = false;
    try {
      if (o = (r = r.call(e2)).next, t === 0) {
        if (Object(r) !== r) return;
        l = false;
      } else for (; !(l = (n = o.call(r)).done) && (s.push(n.value), s.length !== t); l = true) ;
    } catch (u) {
      c = true, a = u;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw a;
      }
    }
    return s;
  }
}
function Fs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function De(e2, t) {
  return Is(e2) || Vu(e2, t) || Rs(e2, t) || Fs();
}
function Ws(e2) {
  var t, r, n = "";
  if (typeof e2 == "string" || typeof e2 == "number") n += e2;
  else if (typeof e2 == "object") if (Array.isArray(e2)) for (t = 0; t < e2.length; t++) e2[t] && (r = Ws(e2[t])) && (n && (n += " "), n += r);
  else for (t in e2) e2[t] && (n && (n += " "), n += t);
  return n;
}
function te() {
  for (var e2, t, r = 0, n = ""; r < arguments.length; ) (e2 = arguments[r++]) && (t = Ws(e2)) && (n && (n += " "), n += t);
  return n;
}
const Xu = Object.freeze(Object.defineProperty({ __proto__: null, clsx: te, default: te }, Symbol.toStringTag, { value: "Module" }));
var Zu = function(e2, t, r, n, a, o, i, s) {
  if (!e2) {
    var l;
    if (t === void 0) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [r, n, a, o, i, s], u = 0;
      l = new Error(t.replace(/%s/g, function() {
        return c[u++];
      })), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Ju = Zu;
const ur = ne(Ju);
var Qu = function() {
};
function ed(e2, t) {
  var r = {};
  return Object.keys(e2).forEach(function(n) {
    r[en(n)] = Qu;
  }), r;
}
function qo(e2, t) {
  return e2[t] !== void 0;
}
function en(e2) {
  return "default" + e2.charAt(0).toUpperCase() + e2.substr(1);
}
function td(e2) {
  return !!e2 && (typeof e2 != "function" || e2.prototype && e2.prototype.isReactComponent);
}
function rd(e2, t) {
  e2.prototype = Object.create(t.prototype), e2.prototype.constructor = e2, Bu(e2, t);
}
function Hs() {
  var e2 = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e2 != null && this.setState(e2);
}
function zs(e2) {
  function t(r) {
    var n = this.constructor.getDerivedStateFromProps(e2, r);
    return n ?? null;
  }
  this.setState(t.bind(this));
}
function Bs(e2, t) {
  try {
    var r = this.props, n = this.state;
    this.props = e2, this.state = t, this.__reactInternalSnapshotFlag = true, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n);
  } finally {
    this.props = r, this.state = n;
  }
}
Hs.__suppressDeprecationWarning = true;
zs.__suppressDeprecationWarning = true;
Bs.__suppressDeprecationWarning = true;
function nd(e2) {
  var t = e2.prototype;
  if (!t || !t.isReactComponent) throw new Error("Can only polyfill class components");
  if (typeof e2.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function") return e2;
  var r = null, n = null, a = null;
  if (typeof t.componentWillMount == "function" ? r = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (r = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? n = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (n = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? a = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (a = "UNSAFE_componentWillUpdate"), r !== null || n !== null || a !== null) {
    var o = e2.displayName || e2.name, i = typeof e2.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

` + o + " uses " + i + " but also contains the following legacy lifecycles:" + (r !== null ? `
  ` + r : "") + (n !== null ? `
  ` + n : "") + (a !== null ? `
  ` + a : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`);
  }
  if (typeof e2.getDerivedStateFromProps == "function" && (t.componentWillMount = Hs, t.componentWillReceiveProps = zs), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function") throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
    t.componentWillUpdate = Bs;
    var s = t.componentDidUpdate;
    t.componentDidUpdate = function(c, u, d) {
      var f = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : d;
      s.call(this, c, u, f);
    };
  }
  return e2;
}
var ad = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";
function Ys(e2, t, r) {
  r === void 0 && (r = []);
  var n = e2.displayName || e2.name || "Component", a = td(e2), o = Object.keys(t), i = o.map(en);
  a || !r.length || ur(false);
  var s = function(c) {
    rd(u, c);
    function u() {
      for (var f, v = arguments.length, h = new Array(v), p = 0; p < v; p++) h[p] = arguments[p];
      f = c.call.apply(c, [this].concat(h)) || this, f.handlers = /* @__PURE__ */ Object.create(null), o.forEach(function(y) {
        var g = t[y], $ = function(E) {
          if (f.props[g]) {
            var _;
            f._notifying = true;
            for (var P = arguments.length, N = new Array(P > 1 ? P - 1 : 0), M = 1; M < P; M++) N[M - 1] = arguments[M];
            (_ = f.props)[g].apply(_, [E].concat(N)), f._notifying = false;
          }
          f.unmounted || f.setState(function(C) {
            var D, z = C.values;
            return { values: ae(/* @__PURE__ */ Object.create(null), z, (D = {}, D[y] = E, D)) };
          });
        };
        f.handlers[g] = $;
      }), r.length && (f.attachRef = function(y) {
        f.inner = y;
      });
      var m = /* @__PURE__ */ Object.create(null);
      return o.forEach(function(y) {
        m[y] = f.props[en(y)];
      }), f.state = { values: m, prevProps: {} }, f;
    }
    var d = u.prototype;
    return d.shouldComponentUpdate = function() {
      return !this._notifying;
    }, u.getDerivedStateFromProps = function(v, h) {
      var p = h.values, m = h.prevProps, y = { values: ae(/* @__PURE__ */ Object.create(null), p), prevProps: {} };
      return o.forEach(function(g) {
        y.prevProps[g] = v[g], !qo(v, g) && qo(m, g) && (y.values[g] = v[en(g)]);
      }), y;
    }, d.componentWillUnmount = function() {
      this.unmounted = true;
    }, d.render = function() {
      var v = this, h = this.props, p = h.innerRef, m = Na(h, ["innerRef"]);
      i.forEach(function(g) {
        delete m[g];
      });
      var y = {};
      return o.forEach(function(g) {
        var $ = v.props[g];
        y[g] = $ !== void 0 ? $ : v.state.values[g];
      }), x.createElement(e2, ae({}, m, y, this.handlers, { ref: p || this.attachRef }));
    }, u;
  }(x.Component);
  nd(s), s.displayName = "Uncontrolled(" + n + ")", s.propTypes = ae({ innerRef: function() {
  } }, ed(t)), r.forEach(function(c) {
    s.prototype[c] = function() {
      var d;
      return (d = this.inner)[c].apply(d, arguments);
    };
  });
  var l = s;
  return x.forwardRef && (l = x.forwardRef(function(c, u) {
    return x.createElement(s, ae({}, c, { innerRef: u, __source: { fileName: ad, lineNumber: 128 }, __self: this }));
  }), l.propTypes = s.propTypes), l.ControlledComponent = e2, l.deferControlTo = function(c, u, d) {
    return u === void 0 && (u = {}), Ys(c, ae({}, t, u), d);
  }, l;
}
var Us = { exports: {} }, od = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", id = od, sd = id;
function qs() {
}
function Ks() {
}
Ks.resetWarningCache = qs;
var ld = function() {
  function e2(n, a, o, i, s, l) {
    if (l !== sd) {
      var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw c.name = "Invariant Violation", c;
    }
  }
  e2.isRequired = e2;
  function t() {
    return e2;
  }
  var r = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t, element: e2, elementType: e2, instanceOf: t, node: e2, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Ks, resetWarningCache: qs };
  return r.PropTypes = r, r;
};
Us.exports = ld();
var ja = Us.exports;
const I = ne(ja);
var on = "milliseconds", dr = "seconds", fr = "minutes", vr = "hours", yt = "day", Pt = "week", pr = "month", bt = "year", wt = "decade", xt = "century", Gs = { milliseconds: 1, seconds: 1e3, minutes: 60 * 1e3, hours: 60 * 60 * 1e3, day: 24 * 60 * 60 * 1e3, week: 7 * 24 * 60 * 60 * 1e3 }, cd = { month: 1, year: 12, decade: 10 * 12, century: 100 * 12 };
function ud(e2) {
  return [31, dd(e2), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
}
function dd(e2) {
  return e2 % 4 === 0 && e2 % 100 !== 0 || e2 % 400 === 0 ? 29 : 28;
}
function Me(e2, t, r) {
  switch (e2 = new Date(e2), r) {
    case on:
    case dr:
    case fr:
    case vr:
    case yt:
    case Pt:
      return fd(e2, t * Gs[r]);
    case pr:
    case bt:
    case wt:
    case xt:
      return vd(e2, t * cd[r]);
  }
  throw new TypeError('Invalid units: "' + r + '"');
}
function fd(e2, t) {
  var r = new Date(+e2 + t);
  return pd(e2, r);
}
function vd(e2, t) {
  var r = e2.getFullYear(), n = e2.getMonth(), a = e2.getDate(), o = r * 12 + n + t, i = Math.trunc(o / 12), s = o % 12, l = Math.min(a, ud(i)[s]), c = new Date(e2);
  return c.setFullYear(i), c.setDate(1), c.setMonth(s), c.setDate(l), c;
}
function pd(e2, t) {
  var r = e2.getTimezoneOffset(), n = t.getTimezoneOffset(), a = n - r;
  return new Date(+t + a * Gs.minutes);
}
function hr(e2, t, r) {
  return Me(e2, -t, r);
}
function ue(e2, t, r) {
  switch (e2 = new Date(e2), t) {
    case xt:
    case wt:
    case bt:
      e2 = ln(e2, 0);
    case pr:
      e2 = Qs(e2, 1);
    case Pt:
    case yt:
      e2 = yr(e2, 0);
    case vr:
      e2 = Nt(e2, 0);
    case fr:
      e2 = gr(e2, 0);
    case dr:
      e2 = mr(e2, 0);
  }
  return t === wt && (e2 = hr(e2, $t(e2) % 10, "year")), t === xt && (e2 = hr(e2, $t(e2) % 100, "year")), t === Pt && (e2 = el(e2, 0, r)), e2;
}
function sn(e2, t, r) {
  switch (e2 = new Date(e2), e2 = ue(e2, t, r), t) {
    case xt:
    case wt:
    case bt:
    case pr:
    case Pt:
      e2 = Me(e2, 1, t), e2 = hr(e2, 1, yt), e2.setHours(23, 59, 59, 999);
      break;
    case yt:
      e2.setHours(23, 59, 59, 999);
      break;
    case vr:
    case fr:
    case dr:
      e2 = Me(e2, 1, t), e2 = hr(e2, 1, on);
  }
  return e2;
}
var Or = Bt(function(e2, t) {
  return e2 === t;
}), La = Bt(function(e2, t) {
  return e2 !== t;
}), hn = Bt(function(e2, t) {
  return e2 > t;
}), Tr = Bt(function(e2, t) {
  return e2 >= t;
}), Ia = Bt(function(e2, t) {
  return e2 < t;
}), zt = Bt(function(e2, t) {
  return e2 <= t;
});
function Vs() {
  return new Date(Math.min.apply(Math, arguments));
}
function Xs() {
  return new Date(Math.max.apply(Math, arguments));
}
function Zs(e2, t, r, n) {
  return n = n || "day", (!t || Tr(e2, t, n)) && (!r || zt(e2, r, n));
}
var mr = tt("Milliseconds"), gr = tt("Seconds"), Nt = tt("Minutes"), yr = tt("Hours"), Js = tt("Day"), Qs = tt("Date"), ln = tt("Month"), $t = tt("FullYear");
function hd(e2, t) {
  return t === void 0 ? $t(ue(e2, wt)) : Me(e2, t + 10, bt);
}
function md(e2, t) {
  return t === void 0 ? $t(ue(e2, xt)) : Me(e2, t + 100, bt);
}
function el(e2, t, r) {
  var n = (Js(e2) + 7 - (r || 0)) % 7;
  return t === void 0 ? n : Me(e2, t - n, yt);
}
function gd(e2, t, r, n) {
  var a, o, i;
  switch (r) {
    case on:
    case dr:
    case fr:
    case vr:
    case yt:
    case Pt:
      a = t.getTime() - e2.getTime();
      break;
    case pr:
    case bt:
    case wt:
    case xt:
      a = ($t(t) - $t(e2)) * 12 + ln(t) - ln(e2);
      break;
    default:
      throw new TypeError('Invalid units: "' + r + '"');
  }
  switch (r) {
    case on:
      o = 1;
      break;
    case dr:
      o = 1e3;
      break;
    case fr:
      o = 1e3 * 60;
      break;
    case vr:
      o = 1e3 * 60 * 60;
      break;
    case yt:
      o = 1e3 * 60 * 60 * 24;
      break;
    case Pt:
      o = 1e3 * 60 * 60 * 24 * 7;
      break;
    case pr:
      o = 1;
      break;
    case bt:
      o = 12;
      break;
    case wt:
      o = 120;
      break;
    case xt:
      o = 1200;
      break;
    default:
      throw new TypeError('Invalid units: "' + r + '"');
  }
  return i = a / o, n ? i : Math.round(i);
}
function tt(e2) {
  var t = function(r) {
    switch (r) {
      case "Milliseconds":
        return 36e5;
      case "Seconds":
        return 3600;
      case "Minutes":
        return 60;
      case "Hours":
        return 1;
      default:
        return null;
    }
  }(e2);
  return function(r, n) {
    if (n === void 0) return r["get" + e2]();
    var a = new Date(r);
    return a["set" + e2](n), t && a["get" + e2]() != n && (e2 === "Hours" || n >= t && a.getHours() - r.getHours() < Math.floor(n / t)) && a["set" + e2](n + t), a;
  };
}
function Bt(e2) {
  return function(t, r, n) {
    return e2(+ue(t, n), +ue(r, n));
  };
}
const Ko = Object.freeze(Object.defineProperty({ __proto__: null, add: Me, century: md, date: Qs, day: Js, decade: hd, diff: gd, endOf: sn, eq: Or, gt: hn, gte: Tr, hours: yr, inRange: Zs, lt: Ia, lte: zt, max: Xs, milliseconds: mr, min: Vs, minutes: Nt, month: ln, neq: La, seconds: gr, startOf: ue, subtract: hr, weekday: el, year: $t }, Symbol.toStringTag, { value: "Module" }));
function yd(e2, t, r) {
  var n = -1, a = e2.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var o = Array(a); ++n < a; ) o[n] = e2[n + t];
  return o;
}
var tl = yd;
function bd(e2, t) {
  return e2 === t || e2 !== e2 && t !== t;
}
var kr = bd, wd = typeof xe == "object" && xe && xe.Object === Object && xe, rl = wd, xd = rl, $d = typeof self == "object" && self && self.Object === Object && self, Ed = xd || $d || Function("return this")(), He = Ed, Dd = He, _d = Dd.Symbol, Yt = _d, Go = Yt, nl = Object.prototype, Sd = nl.hasOwnProperty, Od = nl.toString, rr = Go ? Go.toStringTag : void 0;
function Td(e2) {
  var t = Sd.call(e2, rr), r = e2[rr];
  try {
    e2[rr] = void 0;
    var n = true;
  } catch {
  }
  var a = Od.call(e2);
  return n && (t ? e2[rr] = r : delete e2[rr]), a;
}
var kd = Td, Cd = Object.prototype, Ad = Cd.toString;
function Md(e2) {
  return Ad.call(e2);
}
var Pd = Md, Vo = Yt, Nd = kd, Rd = Pd, jd = "[object Null]", Ld = "[object Undefined]", Xo = Vo ? Vo.toStringTag : void 0;
function Id(e2) {
  return e2 == null ? e2 === void 0 ? Ld : jd : Xo && Xo in Object(e2) ? Nd(e2) : Rd(e2);
}
var Ut = Id;
function Fd(e2) {
  var t = typeof e2;
  return e2 != null && (t == "object" || t == "function");
}
var qe = Fd, Wd = Ut, Hd = qe, zd = "[object AsyncFunction]", Bd = "[object Function]", Yd = "[object GeneratorFunction]", Ud = "[object Proxy]";
function qd(e2) {
  if (!Hd(e2)) return false;
  var t = Wd(e2);
  return t == Bd || t == Yd || t == zd || t == Ud;
}
var Fa = qd, Kd = 9007199254740991;
function Gd(e2) {
  return typeof e2 == "number" && e2 > -1 && e2 % 1 == 0 && e2 <= Kd;
}
var Wa = Gd, Vd = Fa, Xd = Wa;
function Zd(e2) {
  return e2 != null && Xd(e2.length) && !Vd(e2);
}
var Cr = Zd, Jd = 9007199254740991, Qd = /^(?:0|[1-9]\d*)$/;
function ef(e2, t) {
  var r = typeof e2;
  return t = t ?? Jd, !!t && (r == "number" || r != "symbol" && Qd.test(e2)) && e2 > -1 && e2 % 1 == 0 && e2 < t;
}
var Ha = ef, tf = kr, rf = Cr, nf = Ha, af = qe;
function of(e2, t, r) {
  if (!af(r)) return false;
  var n = typeof t;
  return (n == "number" ? rf(r) && nf(t, r.length) : n == "string" && t in r) ? tf(r[t], e2) : false;
}
var mn = of, sf = /\s/;
function lf(e2) {
  for (var t = e2.length; t-- && sf.test(e2.charAt(t)); ) ;
  return t;
}
var cf = lf, uf = cf, df = /^\s+/;
function ff(e2) {
  return e2 && e2.slice(0, uf(e2) + 1).replace(df, "");
}
var vf = ff;
function pf(e2) {
  return e2 != null && typeof e2 == "object";
}
var rt = pf, hf = Ut, mf = rt, gf = "[object Symbol]";
function yf(e2) {
  return typeof e2 == "symbol" || mf(e2) && hf(e2) == gf;
}
var Ar = yf, bf = vf, Zo = qe, wf = Ar, Jo = NaN, xf = /^[-+]0x[0-9a-f]+$/i, $f = /^0b[01]+$/i, Ef = /^0o[0-7]+$/i, Df = parseInt;
function _f(e2) {
  if (typeof e2 == "number") return e2;
  if (wf(e2)) return Jo;
  if (Zo(e2)) {
    var t = typeof e2.valueOf == "function" ? e2.valueOf() : e2;
    e2 = Zo(t) ? t + "" : t;
  }
  if (typeof e2 != "string") return e2 === 0 ? e2 : +e2;
  e2 = bf(e2);
  var r = $f.test(e2);
  return r || Ef.test(e2) ? Df(e2.slice(2), r ? 2 : 8) : xf.test(e2) ? Jo : +e2;
}
var Sf = _f, Of = Sf, Qo = 1 / 0, Tf = 17976931348623157e292;
function kf(e2) {
  if (!e2) return e2 === 0 ? e2 : 0;
  if (e2 = Of(e2), e2 === Qo || e2 === -Qo) {
    var t = e2 < 0 ? -1 : 1;
    return t * Tf;
  }
  return e2 === e2 ? e2 : 0;
}
var al = kf, Cf = al;
function Af(e2) {
  var t = Cf(e2), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var ol = Af, Mf = tl, Pf = mn, Nf = ol, Rf = Math.ceil, jf = Math.max;
function Lf(e2, t, r) {
  (r ? Pf(e2, t, r) : t === void 0) ? t = 1 : t = jf(Nf(t), 0);
  var n = e2 == null ? 0 : e2.length;
  if (!n || t < 1) return [];
  for (var a = 0, o = 0, i = Array(Rf(n / t)); a < n; ) i[o++] = Mf(e2, a, a += t);
  return i;
}
var If = Lf;
const Ff = ne(If);
function nt(e2) {
  return e2 && e2.ownerDocument || document;
}
function za(e2) {
  var t = nt(e2);
  return t && t.defaultView || window;
}
function Ba(e2, t) {
  return za(e2).getComputedStyle(e2, t);
}
var Wf = /([A-Z])/g;
function il(e2) {
  return e2.replace(Wf, "-$1").toLowerCase();
}
var Hf = /^ms-/;
function Br(e2) {
  return il(e2).replace(Hf, "-ms-");
}
var zf = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function sl(e2) {
  return !!(e2 && zf.test(e2));
}
function ce(e2, t) {
  var r = "", n = "";
  if (typeof t == "string") return e2.style.getPropertyValue(Br(t)) || Ba(e2).getPropertyValue(Br(t));
  Object.keys(t).forEach(function(a) {
    var o = t[a];
    !o && o !== 0 ? e2.style.removeProperty(Br(a)) : sl(a) ? n += a + "(" + o + ") " : r += Br(a) + ": " + o + ";";
  }), n && (r += "transform: " + n + ";"), e2.style.cssText += ";" + r;
}
function Ye(e2, t) {
  if (e2.contains) return e2.contains(t);
  if (e2.compareDocumentPosition) return e2 === t || !!(e2.compareDocumentPosition(t) & 16);
}
const Bf = Object.freeze(Object.defineProperty({ __proto__: null, default: Ye }, Symbol.toStringTag, { value: "Module" }));
function ll(e2) {
  return "nodeType" in e2 && e2.nodeType === document.DOCUMENT_NODE;
}
function gn(e2) {
  return "window" in e2 && e2.window === e2 ? e2 : ll(e2) && e2.defaultView || false;
}
function cl(e2) {
  var t = e2 === "pageXOffset" ? "scrollLeft" : "scrollTop";
  function r(n, a) {
    var o = gn(n);
    if (a === void 0) return o ? o[e2] : n[t];
    o ? o.scrollTo(o[e2], a) : n[t] = a;
  }
  return r;
}
const yn = cl("pageXOffset"), Rt = cl("pageYOffset");
function Ae(e2) {
  var t = nt(e2), r = { top: 0, left: 0, height: 0, width: 0 }, n = t && t.documentElement;
  return !n || !Ye(n, e2) || (e2.getBoundingClientRect !== void 0 && (r = e2.getBoundingClientRect()), r = { top: r.top + Rt(n) - (n.clientTop || 0), left: r.left + yn(n) - (n.clientLeft || 0), width: r.width, height: r.height }), r;
}
var Yf = function(t) {
  return !!t && "offsetParent" in t;
};
function Ya(e2) {
  for (var t = nt(e2), r = e2 && e2.offsetParent; Yf(r) && r.nodeName !== "HTML" && ce(r, "position") === "static"; ) r = r.offsetParent;
  return r || t.documentElement;
}
var Uf = function(t) {
  return t.nodeName && t.nodeName.toLowerCase();
};
function bn(e2, t) {
  var r = { top: 0, left: 0 }, n;
  if (ce(e2, "position") === "fixed") n = e2.getBoundingClientRect();
  else {
    var a = t || Ya(e2);
    n = Ae(e2), Uf(a) !== "html" && (r = Ae(a));
    var o = String(ce(a, "borderTopWidth") || 0);
    r.top += parseInt(o, 10) - Rt(a) || 0;
    var i = String(ce(a, "borderLeftWidth") || 0);
    r.left += parseInt(i, 10) - yn(a) || 0;
  }
  var s = String(ce(e2, "marginTop") || 0), l = String(ce(e2, "marginLeft") || 0);
  return ae({}, n, { top: n.top - r.top - (parseInt(s, 10) || 0), left: n.left - r.left - (parseInt(l, 10) || 0) });
}
const Ua = !!(typeof window < "u" && window.document && window.document.createElement);
var ei = (/* @__PURE__ */ new Date()).getTime();
function qf(e2) {
  var t = (/* @__PURE__ */ new Date()).getTime(), r = Math.max(0, 16 - (t - ei)), n = setTimeout(e2, r);
  return ei = t, n;
}
var Kf = ["", "webkit", "moz", "o", "ms"], ha = "clearTimeout", ma = qf, ti = function(t, r) {
  return t + (t ? r[0].toUpperCase() + r.substr(1) : r) + "AnimationFrame";
};
Ua && Kf.some(function(e2) {
  var t = ti(e2, "request");
  return t in window && (ha = ti(e2, "cancel"), ma = function(n) {
    return window[t](n);
  }), !!ma;
});
var br = function(t) {
  typeof window[ha] == "function" && window[ha](t);
}, Mr = ma, ta;
function wn(e2, t) {
  if (!ta) {
    var r = document.body, n = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector;
    ta = function(o, i) {
      return n.call(o, i);
    };
  }
  return ta(e2, t);
}
var Gf = Function.prototype.bind.call(Function.prototype.call, [].slice);
function xn(e2, t) {
  return Gf(e2.querySelectorAll(t));
}
var ga = false, ya = false;
try {
  var ra = { get passive() {
    return ga = true;
  }, get once() {
    return ya = ga = true;
  } };
  Ua && (window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, true));
} catch {
}
function qa(e2, t, r, n) {
  if (n && typeof n != "boolean" && !ya) {
    var a = n.once, o = n.capture, i = r;
    !ya && a && (i = r.__once || function s(l) {
      this.removeEventListener(t, s, o), r.call(this, l);
    }, r.__once = i), e2.addEventListener(t, i, ga ? n : o);
  }
  e2.addEventListener(t, r, n);
}
function Vf(e2) {
  const t = W.useRef(e2);
  return W.useEffect(() => {
    t.current = e2;
  }, [e2]), t;
}
function ri(e2) {
  const t = Vf(e2);
  return W.useCallback(function(...r) {
    return t.current && t.current(...r);
  }, [t]);
}
function ni() {
  return W.useState(null);
}
function Xf() {
  const e2 = W.useRef(true), t = W.useRef(() => e2.current);
  return W.useEffect(() => (e2.current = true, () => {
    e2.current = false;
  }), []), t.current;
}
function Zf(e2) {
  const t = Xf();
  return [e2[0], W.useCallback((r) => {
    if (t()) return e2[1](r);
  }, [t, e2[1]])];
}
var ye = "top", _e = "bottom", Se = "right", be = "left", Ka = "auto", Pr = [ye, _e, Se, be], jt = "start", wr = "end", Jf = "clippingParents", ul = "viewport", nr = "popper", Qf = "reference", ai = Pr.reduce(function(e2, t) {
  return e2.concat([t + "-" + jt, t + "-" + wr]);
}, []), Ga = [].concat(Pr, [Ka]).reduce(function(e2, t) {
  return e2.concat([t, t + "-" + jt, t + "-" + wr]);
}, []), ev = "beforeRead", tv = "read", rv = "afterRead", nv = "beforeMain", av = "main", ov = "afterMain", iv = "beforeWrite", sv = "write", lv = "afterWrite", cv = [ev, tv, rv, nv, av, ov, iv, sv, lv];
function Ie(e2) {
  return e2.split("-")[0];
}
function $e(e2) {
  if (e2 == null) return window;
  if (e2.toString() !== "[object Window]") {
    var t = e2.ownerDocument;
    return t && t.defaultView || window;
  }
  return e2;
}
function Et(e2) {
  var t = $e(e2).Element;
  return e2 instanceof t || e2 instanceof Element;
}
function Fe(e2) {
  var t = $e(e2).HTMLElement;
  return e2 instanceof t || e2 instanceof HTMLElement;
}
function Va(e2) {
  if (typeof ShadowRoot > "u") return false;
  var t = $e(e2).ShadowRoot;
  return e2 instanceof t || e2 instanceof ShadowRoot;
}
var mt = Math.max, cn = Math.min, Lt = Math.round;
function ba() {
  var e2 = navigator.userAgentData;
  return e2 != null && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function dl() {
  return !/^((?!chrome|android).)*safari/i.test(ba());
}
function It(e2, t, r) {
  t === void 0 && (t = false), r === void 0 && (r = false);
  var n = e2.getBoundingClientRect(), a = 1, o = 1;
  t && Fe(e2) && (a = e2.offsetWidth > 0 && Lt(n.width) / e2.offsetWidth || 1, o = e2.offsetHeight > 0 && Lt(n.height) / e2.offsetHeight || 1);
  var i = Et(e2) ? $e(e2) : window, s = i.visualViewport, l = !dl() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / a, u = (n.top + (l && s ? s.offsetTop : 0)) / o, d = n.width / a, f = n.height / o;
  return { width: d, height: f, top: u, right: c + d, bottom: u + f, left: c, x: c, y: u };
}
function Xa(e2) {
  var t = It(e2), r = e2.offsetWidth, n = e2.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), { x: e2.offsetLeft, y: e2.offsetTop, width: r, height: n };
}
function fl(e2, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e2.contains(t)) return true;
  if (r && Va(r)) {
    var n = t;
    do {
      if (n && e2.isSameNode(n)) return true;
      n = n.parentNode || n.host;
    } while (n);
  }
  return false;
}
function Qe(e2) {
  return e2 ? (e2.nodeName || "").toLowerCase() : null;
}
function Ue(e2) {
  return $e(e2).getComputedStyle(e2);
}
function uv(e2) {
  return ["table", "td", "th"].indexOf(Qe(e2)) >= 0;
}
function at(e2) {
  return ((Et(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
}
function $n(e2) {
  return Qe(e2) === "html" ? e2 : e2.assignedSlot || e2.parentNode || (Va(e2) ? e2.host : null) || at(e2);
}
function oi(e2) {
  return !Fe(e2) || Ue(e2).position === "fixed" ? null : e2.offsetParent;
}
function dv(e2) {
  var t = /firefox/i.test(ba()), r = /Trident/i.test(ba());
  if (r && Fe(e2)) {
    var n = Ue(e2);
    if (n.position === "fixed") return null;
  }
  var a = $n(e2);
  for (Va(a) && (a = a.host); Fe(a) && ["html", "body"].indexOf(Qe(a)) < 0; ) {
    var o = Ue(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none") return a;
    a = a.parentNode;
  }
  return null;
}
function Nr(e2) {
  for (var t = $e(e2), r = oi(e2); r && uv(r) && Ue(r).position === "static"; ) r = oi(r);
  return r && (Qe(r) === "html" || Qe(r) === "body" && Ue(r).position === "static") ? t : r || dv(e2) || t;
}
function Za(e2) {
  return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
}
function lr(e2, t, r) {
  return mt(e2, cn(t, r));
}
function fv(e2, t, r) {
  var n = lr(e2, t, r);
  return n > r ? r : n;
}
function vl() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function pl(e2) {
  return Object.assign({}, vl(), e2);
}
function hl(e2, t) {
  return t.reduce(function(r, n) {
    return r[n] = e2, r;
  }, {});
}
var vv = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, { placement: r.placement })) : t, pl(typeof t != "number" ? t : hl(t, Pr));
};
function pv(e2) {
  var t, r = e2.state, n = e2.name, a = e2.options, o = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Ie(r.placement), l = Za(s), c = [be, Se].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!o || !i)) {
    var d = vv(a.padding, r), f = Xa(o), v = l === "y" ? ye : be, h = l === "y" ? _e : Se, p = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], m = i[l] - r.rects.reference[l], y = Nr(o), g = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, $ = p / 2 - m / 2, b = d[v], E = g - f[u] - d[h], _ = g / 2 - f[u] / 2 + $, P = lr(b, _, E), N = l;
    r.modifiersData[n] = (t = {}, t[N] = P, t.centerOffset = P - _, t);
  }
}
function hv(e2) {
  var t = e2.state, r = e2.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || fl(t.elements.popper, a) && (t.elements.arrow = a));
}
const mv = { name: "arrow", enabled: true, phase: "main", fn: pv, effect: hv, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ft(e2) {
  return e2.split("-")[1];
}
var gv = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function yv(e2, t) {
  var r = e2.x, n = e2.y, a = t.devicePixelRatio || 1;
  return { x: Lt(r * a) / a || 0, y: Lt(n * a) / a || 0 };
}
function ii(e2) {
  var t, r = e2.popper, n = e2.popperRect, a = e2.placement, o = e2.variation, i = e2.offsets, s = e2.position, l = e2.gpuAcceleration, c = e2.adaptive, u = e2.roundOffsets, d = e2.isFixed, f = i.x, v = f === void 0 ? 0 : f, h = i.y, p = h === void 0 ? 0 : h, m = typeof u == "function" ? u({ x: v, y: p }) : { x: v, y: p };
  v = m.x, p = m.y;
  var y = i.hasOwnProperty("x"), g = i.hasOwnProperty("y"), $ = be, b = ye, E = window;
  if (c) {
    var _ = Nr(r), P = "clientHeight", N = "clientWidth";
    if (_ === $e(r) && (_ = at(r), Ue(_).position !== "static" && s === "absolute" && (P = "scrollHeight", N = "scrollWidth")), _ = _, a === ye || (a === be || a === Se) && o === wr) {
      b = _e;
      var M = d && _ === E && E.visualViewport ? E.visualViewport.height : _[P];
      p -= M - n.height, p *= l ? 1 : -1;
    }
    if (a === be || (a === ye || a === _e) && o === wr) {
      $ = Se;
      var C = d && _ === E && E.visualViewport ? E.visualViewport.width : _[N];
      v -= C - n.width, v *= l ? 1 : -1;
    }
  }
  var D = Object.assign({ position: s }, c && gv), z = u === true ? yv({ x: v, y: p }, $e(r)) : { x: v, y: p };
  if (v = z.x, p = z.y, l) {
    var F;
    return Object.assign({}, D, (F = {}, F[b] = g ? "0" : "", F[$] = y ? "0" : "", F.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", F));
  }
  return Object.assign({}, D, (t = {}, t[b] = g ? p + "px" : "", t[$] = y ? v + "px" : "", t.transform = "", t));
}
function bv(e2) {
  var t = e2.state, r = e2.options, n = r.gpuAcceleration, a = n === void 0 ? true : n, o = r.adaptive, i = o === void 0 ? true : o, s = r.roundOffsets, l = s === void 0 ? true : s, c = { placement: Ie(t.placement), variation: Ft(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ii(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: i, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ii(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
const wv = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: bv, data: {} };
var Yr = { passive: true };
function xv(e2) {
  var t = e2.state, r = e2.instance, n = e2.options, a = n.scroll, o = a === void 0 ? true : a, i = n.resize, s = i === void 0 ? true : i, l = $e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Yr);
  }), s && l.addEventListener("resize", r.update, Yr), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Yr);
    }), s && l.removeEventListener("resize", r.update, Yr);
  };
}
const $v = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: xv, data: {} };
var Ev = { left: "right", right: "left", bottom: "top", top: "bottom" };
function tn(e2) {
  return e2.replace(/left|right|bottom|top/g, function(t) {
    return Ev[t];
  });
}
var Dv = { start: "end", end: "start" };
function si(e2) {
  return e2.replace(/start|end/g, function(t) {
    return Dv[t];
  });
}
function Ja(e2) {
  var t = $e(e2), r = t.pageXOffset, n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function Qa(e2) {
  return It(at(e2)).left + Ja(e2).scrollLeft;
}
function _v(e2, t) {
  var r = $e(e2), n = at(e2), a = r.visualViewport, o = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (a) {
    o = a.width, i = a.height;
    var c = dl();
    (c || !c && t === "fixed") && (s = a.offsetLeft, l = a.offsetTop);
  }
  return { width: o, height: i, x: s + Qa(e2), y: l };
}
function Sv(e2) {
  var t, r = at(e2), n = Ja(e2), a = (t = e2.ownerDocument) == null ? void 0 : t.body, o = mt(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), i = mt(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -n.scrollLeft + Qa(e2), l = -n.scrollTop;
  return Ue(a || r).direction === "rtl" && (s += mt(r.clientWidth, a ? a.clientWidth : 0) - o), { width: o, height: i, x: s, y: l };
}
function eo(e2) {
  var t = Ue(e2), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function ml(e2) {
  return ["html", "body", "#document"].indexOf(Qe(e2)) >= 0 ? e2.ownerDocument.body : Fe(e2) && eo(e2) ? e2 : ml($n(e2));
}
function cr(e2, t) {
  var r;
  t === void 0 && (t = []);
  var n = ml(e2), a = n === ((r = e2.ownerDocument) == null ? void 0 : r.body), o = $e(n), i = a ? [o].concat(o.visualViewport || [], eo(n) ? n : []) : n, s = t.concat(i);
  return a ? s : s.concat(cr($n(i)));
}
function wa(e2) {
  return Object.assign({}, e2, { left: e2.x, top: e2.y, right: e2.x + e2.width, bottom: e2.y + e2.height });
}
function Ov(e2, t) {
  var r = It(e2, false, t === "fixed");
  return r.top = r.top + e2.clientTop, r.left = r.left + e2.clientLeft, r.bottom = r.top + e2.clientHeight, r.right = r.left + e2.clientWidth, r.width = e2.clientWidth, r.height = e2.clientHeight, r.x = r.left, r.y = r.top, r;
}
function li(e2, t, r) {
  return t === ul ? wa(_v(e2, r)) : Et(t) ? Ov(t, r) : wa(Sv(at(e2)));
}
function Tv(e2) {
  var t = cr($n(e2)), r = ["absolute", "fixed"].indexOf(Ue(e2).position) >= 0, n = r && Fe(e2) ? Nr(e2) : e2;
  return Et(n) ? t.filter(function(a) {
    return Et(a) && fl(a, n) && Qe(a) !== "body";
  }) : [];
}
function kv(e2, t, r, n) {
  var a = t === "clippingParents" ? Tv(e2) : [].concat(t), o = [].concat(a, [r]), i = o[0], s = o.reduce(function(l, c) {
    var u = li(e2, c, n);
    return l.top = mt(u.top, l.top), l.right = cn(u.right, l.right), l.bottom = cn(u.bottom, l.bottom), l.left = mt(u.left, l.left), l;
  }, li(e2, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function gl(e2) {
  var t = e2.reference, r = e2.element, n = e2.placement, a = n ? Ie(n) : null, o = n ? Ft(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (a) {
    case ye:
      l = { x: i, y: t.y - r.height };
      break;
    case _e:
      l = { x: i, y: t.y + t.height };
      break;
    case Se:
      l = { x: t.x + t.width, y: s };
      break;
    case be:
      l = { x: t.x - r.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = a ? Za(a) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case jt:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case wr:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function xr(e2, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e2.placement : n, o = r.strategy, i = o === void 0 ? e2.strategy : o, s = r.boundary, l = s === void 0 ? Jf : s, c = r.rootBoundary, u = c === void 0 ? ul : c, d = r.elementContext, f = d === void 0 ? nr : d, v = r.altBoundary, h = v === void 0 ? false : v, p = r.padding, m = p === void 0 ? 0 : p, y = pl(typeof m != "number" ? m : hl(m, Pr)), g = f === nr ? Qf : nr, $ = e2.rects.popper, b = e2.elements[h ? g : f], E = kv(Et(b) ? b : b.contextElement || at(e2.elements.popper), l, u, i), _ = It(e2.elements.reference), P = gl({ reference: _, element: $, placement: a }), N = wa(Object.assign({}, $, P)), M = f === nr ? N : _, C = { top: E.top - M.top + y.top, bottom: M.bottom - E.bottom + y.bottom, left: E.left - M.left + y.left, right: M.right - E.right + y.right }, D = e2.modifiersData.offset;
  if (f === nr && D) {
    var z = D[a];
    Object.keys(C).forEach(function(F) {
      var T = [Se, _e].indexOf(F) >= 0 ? 1 : -1, O = [ye, _e].indexOf(F) >= 0 ? "y" : "x";
      C[F] += z[O] * T;
    });
  }
  return C;
}
function Cv(e2, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? Ga : l, u = Ft(n), d = u ? s ? ai : ai.filter(function(h) {
    return Ft(h) === u;
  }) : Pr, f = d.filter(function(h) {
    return c.indexOf(h) >= 0;
  });
  f.length === 0 && (f = d);
  var v = f.reduce(function(h, p) {
    return h[p] = xr(e2, { placement: p, boundary: a, rootBoundary: o, padding: i })[Ie(p)], h;
  }, {});
  return Object.keys(v).sort(function(h, p) {
    return v[h] - v[p];
  });
}
function Av(e2) {
  if (Ie(e2) === Ka) return [];
  var t = tn(e2);
  return [si(e2), t, si(t)];
}
function Mv(e2) {
  var t = e2.state, r = e2.options, n = e2.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? true : a, i = r.altAxis, s = i === void 0 ? true : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, v = r.flipVariations, h = v === void 0 ? true : v, p = r.allowedAutoPlacements, m = t.options.placement, y = Ie(m), g = y === m, $ = l || (g || !h ? [tn(m)] : Av(m)), b = [m].concat($).reduce(function(j, H) {
      return j.concat(Ie(H) === Ka ? Cv(t, { placement: H, boundary: u, rootBoundary: d, padding: c, flipVariations: h, allowedAutoPlacements: p }) : H);
    }, []), E = t.rects.reference, _ = t.rects.popper, P = /* @__PURE__ */ new Map(), N = true, M = b[0], C = 0; C < b.length; C++) {
      var D = b[C], z = Ie(D), F = Ft(D) === jt, T = [ye, _e].indexOf(z) >= 0, O = T ? "width" : "height", S = xr(t, { placement: D, boundary: u, rootBoundary: d, altBoundary: f, padding: c }), R = T ? F ? Se : be : F ? _e : ye;
      E[O] > _[O] && (R = tn(R));
      var L = tn(R), B = [];
      if (o && B.push(S[z] <= 0), s && B.push(S[R] <= 0, S[L] <= 0), B.every(function(j) {
        return j;
      })) {
        M = D, N = false;
        break;
      }
      P.set(D, B);
    }
    if (N) for (var U = h ? 3 : 1, q = function(H) {
      var Y = b.find(function(K) {
        var G = P.get(K);
        if (G) return G.slice(0, H).every(function(V) {
          return V;
        });
      });
      if (Y) return M = Y, "break";
    }, k = U; k > 0; k--) {
      var A = q(k);
      if (A === "break") break;
    }
    t.placement !== M && (t.modifiersData[n]._skip = true, t.placement = M, t.reset = true);
  }
}
const Pv = { name: "flip", enabled: true, phase: "main", fn: Mv, requiresIfExists: ["offset"], data: { _skip: false } };
function ci(e2, t, r) {
  return r === void 0 && (r = { x: 0, y: 0 }), { top: e2.top - t.height - r.y, right: e2.right - t.width + r.x, bottom: e2.bottom - t.height + r.y, left: e2.left - t.width - r.x };
}
function ui(e2) {
  return [ye, Se, _e, be].some(function(t) {
    return e2[t] >= 0;
  });
}
function Nv(e2) {
  var t = e2.state, r = e2.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, i = xr(t, { elementContext: "reference" }), s = xr(t, { altBoundary: true }), l = ci(i, n), c = ci(s, a, o), u = ui(l), d = ui(c);
  t.modifiersData[r] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: d }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": d });
}
const Rv = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: Nv };
function jv(e2, t, r) {
  var n = Ie(e2), a = [be, ye].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, { placement: e2 })) : r, i = o[0], s = o[1];
  return i = i || 0, s = (s || 0) * a, [be, Se].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s };
}
function Lv(e2) {
  var t = e2.state, r = e2.options, n = e2.name, a = r.offset, o = a === void 0 ? [0, 0] : a, i = Ga.reduce(function(u, d) {
    return u[d] = jv(d, t.rects, o), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const Iv = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Lv };
function Fv(e2) {
  var t = e2.state, r = e2.name;
  t.modifiersData[r] = gl({ reference: t.rects.reference, element: t.rects.popper, placement: t.placement });
}
const Wv = { name: "popperOffsets", enabled: true, phase: "read", fn: Fv, data: {} };
function Hv(e2) {
  return e2 === "x" ? "y" : "x";
}
function zv(e2) {
  var t = e2.state, r = e2.options, n = e2.name, a = r.mainAxis, o = a === void 0 ? true : a, i = r.altAxis, s = i === void 0 ? false : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, v = f === void 0 ? true : f, h = r.tetherOffset, p = h === void 0 ? 0 : h, m = xr(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }), y = Ie(t.placement), g = Ft(t.placement), $ = !g, b = Za(y), E = Hv(b), _ = t.modifiersData.popperOffsets, P = t.rects.reference, N = t.rects.popper, M = typeof p == "function" ? p(Object.assign({}, t.rects, { placement: t.placement })) : p, C = typeof M == "number" ? { mainAxis: M, altAxis: M } : Object.assign({ mainAxis: 0, altAxis: 0 }, M), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, z = { x: 0, y: 0 };
  if (_) {
    if (o) {
      var F, T = b === "y" ? ye : be, O = b === "y" ? _e : Se, S = b === "y" ? "height" : "width", R = _[b], L = R + m[T], B = R - m[O], U = v ? -N[S] / 2 : 0, q = g === jt ? P[S] : N[S], k = g === jt ? -N[S] : -P[S], A = t.elements.arrow, j = v && A ? Xa(A) : { width: 0, height: 0 }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : vl(), Y = H[T], K = H[O], G = lr(0, P[S], j[S]), V = $ ? P[S] / 2 - U - G - Y - C.mainAxis : q - G - Y - C.mainAxis, re = $ ? -P[S] / 2 + U + G + K + C.mainAxis : k + G + K + C.mainAxis, se = t.elements.arrow && Nr(t.elements.arrow), Te = se ? b === "y" ? se.clientTop || 0 : se.clientLeft || 0 : 0, ke = (F = D == null ? void 0 : D[b]) != null ? F : 0, Jn = R + V - ke - Te, Qn = R + re - ke, No = lr(v ? cn(L, Jn) : L, R, v ? mt(B, Qn) : B);
      _[b] = No, z[b] = No - R;
    }
    if (s) {
      var Ro, Mu = b === "x" ? ye : be, Pu = b === "x" ? _e : Se, dt = _[E], zr = E === "y" ? "height" : "width", jo = dt + m[Mu], Lo = dt - m[Pu], ea = [ye, be].indexOf(y) !== -1, Io = (Ro = D == null ? void 0 : D[E]) != null ? Ro : 0, Fo = ea ? jo : dt - P[zr] - N[zr] - Io + C.altAxis, Wo = ea ? dt + P[zr] + N[zr] - Io - C.altAxis : Lo, Ho = v && ea ? fv(Fo, dt, Wo) : lr(v ? Fo : jo, dt, v ? Wo : Lo);
      _[E] = Ho, z[E] = Ho - dt;
    }
    t.modifiersData[n] = z;
  }
}
const Bv = { name: "preventOverflow", enabled: true, phase: "main", fn: zv, requiresIfExists: ["offset"] };
function Yv(e2) {
  return { scrollLeft: e2.scrollLeft, scrollTop: e2.scrollTop };
}
function Uv(e2) {
  return e2 === $e(e2) || !Fe(e2) ? Ja(e2) : Yv(e2);
}
function qv(e2) {
  var t = e2.getBoundingClientRect(), r = Lt(t.width) / e2.offsetWidth || 1, n = Lt(t.height) / e2.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Kv(e2, t, r) {
  r === void 0 && (r = false);
  var n = Fe(t), a = Fe(t) && qv(t), o = at(t), i = It(e2, a, r), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (n || !n && !r) && ((Qe(t) !== "body" || eo(o)) && (s = Uv(t)), Fe(t) ? (l = It(t, true), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Qa(o))), { x: i.left + s.scrollLeft - l.x, y: i.top + s.scrollTop - l.y, width: i.width, height: i.height };
}
function Gv(e2) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e2.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && a(l);
      }
    }), n.push(o);
  }
  return e2.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function Vv(e2) {
  var t = Gv(e2);
  return cv.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
function Xv(e2) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e2());
      });
    })), t;
  };
}
function Zv(e2) {
  var t = e2.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, { options: Object.assign({}, a.options, n.options), data: Object.assign({}, a.data, n.data) }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var di = { placement: "bottom", modifiers: [], strategy: "absolute" };
function fi() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Jv(e2) {
  e2 === void 0 && (e2 = {});
  var t = e2, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? di : a;
  return function(s, l, c) {
    c === void 0 && (c = o);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, di, o), modifiersData: {}, elements: { reference: s, popper: l }, attributes: {}, styles: {} }, d = [], f = false, v = { state: u, setOptions: function(y) {
      var g = typeof y == "function" ? y(u.options) : y;
      p(), u.options = Object.assign({}, o, u.options, g), u.scrollParents = { reference: Et(s) ? cr(s) : s.contextElement ? cr(s.contextElement) : [], popper: cr(l) };
      var $ = Vv(Zv([].concat(n, u.options.modifiers)));
      return u.orderedModifiers = $.filter(function(b) {
        return b.enabled;
      }), h(), v.update();
    }, forceUpdate: function() {
      if (!f) {
        var y = u.elements, g = y.reference, $ = y.popper;
        if (fi(g, $)) {
          u.rects = { reference: Kv(g, Nr($), u.options.strategy === "fixed"), popper: Xa($) }, u.reset = false, u.placement = u.options.placement, u.orderedModifiers.forEach(function(C) {
            return u.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var b = 0; b < u.orderedModifiers.length; b++) {
            if (u.reset === true) {
              u.reset = false, b = -1;
              continue;
            }
            var E = u.orderedModifiers[b], _ = E.fn, P = E.options, N = P === void 0 ? {} : P, M = E.name;
            typeof _ == "function" && (u = _({ state: u, options: N, name: M, instance: v }) || u);
          }
        }
      }
    }, update: Xv(function() {
      return new Promise(function(m) {
        v.forceUpdate(), m(u);
      });
    }), destroy: function() {
      p(), f = true;
    } };
    if (!fi(s, l)) return v;
    v.setOptions(c).then(function(m) {
      !f && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function h() {
      u.orderedModifiers.forEach(function(m) {
        var y = m.name, g = m.options, $ = g === void 0 ? {} : g, b = m.effect;
        if (typeof b == "function") {
          var E = b({ state: u, name: y, instance: v, options: $ }), _ = function() {
          };
          d.push(E || _);
        }
      });
    }
    function p() {
      d.forEach(function(m) {
        return m();
      }), d = [];
    }
    return v;
  };
}
var Qv = Jv({ defaultModifiers: [Rv, Wv, wv, $v, Iv, Pv, Bv, mv] }), vi = function(t) {
  return { position: t, top: "0", left: "0", opacity: "0", pointerEvents: "none" };
}, ep = { name: "applyStyles", enabled: false }, tp = { name: "ariaDescribedBy", enabled: true, phase: "afterWrite", effect: function(t) {
  var r = t.state;
  return function() {
    var n = r.elements, a = n.reference, o = n.popper;
    if ("removeAttribute" in a) {
      var i = (a.getAttribute("aria-describedby") || "").split(",").filter(function(s) {
        return s.trim() !== o.id;
      });
      i.length ? a.setAttribute("aria-describedby", i.join(",")) : a.removeAttribute("aria-describedby");
    }
  };
}, fn: function(t) {
  var r, n = t.state, a = n.elements, o = a.popper, i = a.reference, s = (r = o.getAttribute("role")) == null ? void 0 : r.toLowerCase();
  if (o.id && s === "tooltip" && "setAttribute" in i) {
    var l = i.getAttribute("aria-describedby");
    if (l && l.split(",").indexOf(o.id) !== -1) return;
    i.setAttribute("aria-describedby", l ? l + "," + o.id : o.id);
  }
} }, rp = [];
function np(e2, t, r) {
  var n = r === void 0 ? {} : r, a = n.enabled, o = a === void 0 ? true : a, i = n.placement, s = i === void 0 ? "bottom" : i, l = n.strategy, c = l === void 0 ? "absolute" : l, u = n.modifiers, d = u === void 0 ? rp : u, f = Na(n, ["enabled", "placement", "strategy", "modifiers"]), v = W.useRef(), h = W.useCallback(function() {
    var b;
    (b = v.current) == null || b.update();
  }, []), p = W.useCallback(function() {
    var b;
    (b = v.current) == null || b.forceUpdate();
  }, []), m = Zf(W.useState({ placement: s, update: h, forceUpdate: p, attributes: {}, styles: { popper: vi(c), arrow: {} } })), y = m[0], g = m[1], $ = W.useMemo(function() {
    return { name: "updateStateModifier", enabled: true, phase: "write", requires: ["computeStyles"], fn: function(E) {
      var _ = E.state, P = {}, N = {};
      Object.keys(_.elements).forEach(function(M) {
        P[M] = _.styles[M], N[M] = _.attributes[M];
      }), g({ state: _, styles: P, attributes: N, update: h, forceUpdate: p, placement: _.placement });
    } };
  }, [h, p, g]);
  return W.useEffect(function() {
    !v.current || !o || v.current.setOptions({ placement: s, strategy: c, modifiers: [].concat(d, [$, ep]) });
  }, [c, s, $, o]), W.useEffect(function() {
    if (!(!o || e2 == null || t == null)) return v.current = Qv(e2, t, ae({}, f, { placement: s, strategy: c, modifiers: [].concat(d, [tp, $]) })), function() {
      v.current != null && (v.current.destroy(), v.current = void 0, g(function(b) {
        return ae({}, b, { attributes: {}, styles: { popper: vi(c) } });
      }));
    };
  }, [o, e2, t]), y;
}
function to(e2, t, r, n) {
  var a = n && typeof n != "boolean" ? n.capture : n;
  e2.removeEventListener(t, r, a), r.__once && e2.removeEventListener(t, r.__once, a);
}
function Le(e2, t, r, n) {
  return qa(e2, t, r, n), function() {
    to(e2, t, r, n);
  };
}
const ap = Object.freeze(Object.defineProperty({ __proto__: null, default: Le }, Symbol.toStringTag, { value: "Module" }));
var op = function() {
}, ip = op;
const sp = ne(ip);
function lp(e2) {
  return e2 && "setState" in e2 ? Ns.findDOMNode(e2) : e2 ?? null;
}
const cp = function(e2) {
  return nt(lp(e2));
};
var up = 27, pi = function() {
};
function dp(e2) {
  return e2.button === 0;
}
function fp(e2) {
  return !!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey);
}
var hi = function(t) {
  return t && ("current" in t ? t.current : t);
};
function vp(e2, t, r) {
  var n = r === void 0 ? {} : r, a = n.disabled, o = n.clickTrigger, i = o === void 0 ? "click" : o, s = W.useRef(false), l = t || pi, c = W.useCallback(function(f) {
    var v, h = hi(e2);
    sp(!!h, "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"), s.current = !h || fp(f) || !dp(f) || !!Ye(h, (v = f.composedPath == null ? void 0 : f.composedPath()[0]) != null ? v : f.target);
  }, [e2]), u = ri(function(f) {
    s.current || l(f);
  }), d = ri(function(f) {
    f.keyCode === up && l(f);
  });
  W.useEffect(function() {
    if (!(a || e2 == null)) {
      var f = window.event, v = cp(hi(e2)), h = Le(v, i, c, true), p = Le(v, i, function(g) {
        if (g === f) {
          f = void 0;
          return;
        }
        u(g);
      }), m = Le(v, "keyup", function(g) {
        if (g === f) {
          f = void 0;
          return;
        }
        d(g);
      }), y = [];
      return "ontouchstart" in v.documentElement && (y = [].slice.call(v.body.children).map(function(g) {
        return Le(g, "mousemove", pi);
      })), function() {
        h(), p(), m(), y.forEach(function(g) {
          return g();
        });
      };
    }
  }, [e2, a, i, c, u, d]);
}
function pp(e2) {
  var t = {};
  return Array.isArray(e2) ? (e2 == null ? void 0 : e2.forEach(function(r) {
    t[r.name] = r;
  }), t) : e2 || t;
}
function hp(e2) {
  return e2 === void 0 && (e2 = {}), Array.isArray(e2) ? e2 : Object.keys(e2).map(function(t) {
    return e2[t].name = t, e2[t];
  });
}
function mp(e2) {
  var t, r, n, a, o = e2.enabled, i = e2.enableEvents, s = e2.placement, l = e2.flip, c = e2.offset, u = e2.fixed, d = e2.containerPadding, f = e2.arrowElement, v = e2.popperConfig, h = v === void 0 ? {} : v, p = pp(h.modifiers);
  return ae({}, h, { placement: s, enabled: o, strategy: u ? "fixed" : h.strategy, modifiers: hp(ae({}, p, { eventListeners: { enabled: i }, preventOverflow: ae({}, p.preventOverflow, { options: d ? ae({ padding: d }, (t = p.preventOverflow) == null ? void 0 : t.options) : (r = p.preventOverflow) == null ? void 0 : r.options }), offset: { options: ae({ offset: c }, (n = p.offset) == null ? void 0 : n.options) }, arrow: ae({}, p.arrow, { enabled: !!f, options: ae({}, (a = p.arrow) == null ? void 0 : a.options, { element: f }) }), flip: ae({ enabled: !!l }, p.flip) })) });
}
function yl(e2) {
  e2 === void 0 && (e2 = nt());
  try {
    var t = e2.activeElement;
    return !t || !t.nodeName ? null : t;
  } catch {
    return e2.body;
  }
}
function En(e2, t) {
  return e2.classList ? !!t && e2.classList.contains(t) : (" " + (e2.className.baseVal || e2.className) + " ").indexOf(" " + t + " ") !== -1;
}
function Dn(e2, t) {
  e2.classList ? e2.classList.add(t) : En(e2, t) || (typeof e2.className == "string" ? e2.className = e2.className + " " + t : e2.setAttribute("class", (e2.className && e2.className.baseVal || "") + " " + t));
}
function mi(e2, t) {
  return e2.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function _n(e2, t) {
  e2.classList ? e2.classList.remove(t) : typeof e2.className == "string" ? e2.className = mi(e2.className, t) : e2.setAttribute("class", mi(e2.className && e2.className.baseVal || "", t));
}
var Ur;
function Rr(e2) {
  if ((!Ur && Ur !== 0 || e2) && Ua) {
    var t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), Ur = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return Ur;
}
var na = function(t) {
  var r;
  return typeof document > "u" ? null : t == null ? nt().body : (typeof t == "function" && (t = t()), t && "current" in t && (t = t.current), (r = t) != null && r.nodeType && t || null);
};
function gi(e2, t) {
  var r = W.useState(function() {
    return na(e2);
  }), n = r[0], a = r[1];
  if (!n) {
    var o = na(e2);
    o && a(o);
  }
  return W.useEffect(function() {
  }, [t, n]), W.useEffect(function() {
    var i = na(e2);
    i !== n && a(i);
  }, [e2, n]), n;
}
const yi = (e2) => !e2 || typeof e2 == "function" ? e2 : (t) => {
  e2.current = t;
};
function gp(e2, t) {
  const r = yi(e2), n = yi(t);
  return (a) => {
    r && r(a), n && n(a);
  };
}
function yp(e2, t) {
  return W.useMemo(() => gp(e2, t), [e2, t]);
}
var ro = x.forwardRef(function(e2, t) {
  var r = e2.flip, n = e2.offset, a = e2.placement, o = e2.containerPadding, i = o === void 0 ? 5 : o, s = e2.popperConfig, l = s === void 0 ? {} : s, c = e2.transition, u = ni(), d = u[0], f = u[1], v = ni(), h = v[0], p = v[1], m = yp(f, t), y = gi(e2.container), g = gi(e2.target), $ = W.useState(!e2.show), b = $[0], E = $[1], _ = np(g, d, mp({ placement: a, enableEvents: !!e2.show, containerPadding: i || 5, flip: r, offset: n, arrowElement: h, popperConfig: l })), P = _.styles, N = _.attributes, M = Na(_, ["styles", "attributes"]);
  e2.show ? b && E(false) : !e2.transition && !b && E(true);
  var C = function() {
    E(true), e2.onExited && e2.onExited.apply(e2, arguments);
  }, D = e2.show || c && !b;
  if (vp(d, e2.onHide, { disabled: !e2.rootClose || e2.rootCloseDisabled, clickTrigger: e2.rootCloseEvent }), !D) return null;
  var z = e2.children(ae({}, M, { show: !!e2.show, props: ae({}, N.popper, { style: P.popper, ref: m }), arrowProps: ae({}, N.arrow, { style: P.arrow, ref: p }) }));
  if (c) {
    var F = e2.onExit, T = e2.onExiting, O = e2.onEnter, S = e2.onEntering, R = e2.onEntered;
    z = x.createElement(c, { in: e2.show, appear: true, onExit: F, onExiting: T, onExited: C, onEnter: O, onEntering: S, onEntered: R }, z);
  }
  return y ? Ns.createPortal(z, y) : null;
});
ro.displayName = "Overlay";
ro.propTypes = { show: I.bool, placement: I.oneOf(Ga), target: I.any, container: I.any, flip: I.bool, children: I.func.isRequired, containerPadding: I.number, popperConfig: I.object, rootClose: I.bool, rootCloseEvent: I.oneOf(["click", "mousedown"]), rootCloseDisabled: I.bool, onHide: function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) n[a - 1] = arguments[a];
  if (t.rootClose) {
    var o;
    return (o = I.func).isRequired.apply(o, [t].concat(n));
  }
  return I.func.apply(I, [t].concat(n));
}, transition: I.elementType, onEnter: I.func, onEntering: I.func, onEntered: I.func, onExit: I.func, onExiting: I.func, onExited: I.func };
function bp() {
  this.__data__ = [], this.size = 0;
}
var wp = bp, xp = kr;
function $p(e2, t) {
  for (var r = e2.length; r--; ) if (xp(e2[r][0], t)) return r;
  return -1;
}
var Sn = $p, Ep = Sn, Dp = Array.prototype, _p = Dp.splice;
function Sp(e2) {
  var t = this.__data__, r = Ep(t, e2);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : _p.call(t, r, 1), --this.size, true;
}
var Op = Sp, Tp = Sn;
function kp(e2) {
  var t = this.__data__, r = Tp(t, e2);
  return r < 0 ? void 0 : t[r][1];
}
var Cp = kp, Ap = Sn;
function Mp(e2) {
  return Ap(this.__data__, e2) > -1;
}
var Pp = Mp, Np = Sn;
function Rp(e2, t) {
  var r = this.__data__, n = Np(r, e2);
  return n < 0 ? (++this.size, r.push([e2, t])) : r[n][1] = t, this;
}
var jp = Rp, Lp = wp, Ip = Op, Fp = Cp, Wp = Pp, Hp = jp;
function qt(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
qt.prototype.clear = Lp;
qt.prototype.delete = Ip;
qt.prototype.get = Fp;
qt.prototype.has = Wp;
qt.prototype.set = Hp;
var On = qt, zp = On;
function Bp() {
  this.__data__ = new zp(), this.size = 0;
}
var Yp = Bp;
function Up(e2) {
  var t = this.__data__, r = t.delete(e2);
  return this.size = t.size, r;
}
var qp = Up;
function Kp(e2) {
  return this.__data__.get(e2);
}
var Gp = Kp;
function Vp(e2) {
  return this.__data__.has(e2);
}
var Xp = Vp, Zp = He, Jp = Zp["__core-js_shared__"], Qp = Jp, aa = Qp, bi = function() {
  var e2 = /[^.]+$/.exec(aa && aa.keys && aa.keys.IE_PROTO || "");
  return e2 ? "Symbol(src)_1." + e2 : "";
}();
function eh(e2) {
  return !!bi && bi in e2;
}
var th = eh, rh = Function.prototype, nh = rh.toString;
function ah(e2) {
  if (e2 != null) {
    try {
      return nh.call(e2);
    } catch {
    }
    try {
      return e2 + "";
    } catch {
    }
  }
  return "";
}
var bl = ah, oh = Fa, ih = th, sh = qe, lh = bl, ch = /[\\^$.*+?()[\]{}|]/g, uh = /^\[object .+?Constructor\]$/, dh = Function.prototype, fh = Object.prototype, vh = dh.toString, ph = fh.hasOwnProperty, hh = RegExp("^" + vh.call(ph).replace(ch, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function mh(e2) {
  if (!sh(e2) || ih(e2)) return false;
  var t = oh(e2) ? hh : uh;
  return t.test(lh(e2));
}
var gh = mh;
function yh(e2, t) {
  return e2 == null ? void 0 : e2[t];
}
var bh = yh, wh = gh, xh = bh;
function $h(e2, t) {
  var r = xh(e2, t);
  return wh(r) ? r : void 0;
}
var _t = $h, Eh = _t, Dh = He, _h = Eh(Dh, "Map"), no = _h, Sh = _t, Oh = Sh(Object, "create"), Tn = Oh, wi = Tn;
function Th() {
  this.__data__ = wi ? wi(null) : {}, this.size = 0;
}
var kh = Th;
function Ch(e2) {
  var t = this.has(e2) && delete this.__data__[e2];
  return this.size -= t ? 1 : 0, t;
}
var Ah = Ch, Mh = Tn, Ph = "__lodash_hash_undefined__", Nh = Object.prototype, Rh = Nh.hasOwnProperty;
function jh(e2) {
  var t = this.__data__;
  if (Mh) {
    var r = t[e2];
    return r === Ph ? void 0 : r;
  }
  return Rh.call(t, e2) ? t[e2] : void 0;
}
var Lh = jh, Ih = Tn, Fh = Object.prototype, Wh = Fh.hasOwnProperty;
function Hh(e2) {
  var t = this.__data__;
  return Ih ? t[e2] !== void 0 : Wh.call(t, e2);
}
var zh = Hh, Bh = Tn, Yh = "__lodash_hash_undefined__";
function Uh(e2, t) {
  var r = this.__data__;
  return this.size += this.has(e2) ? 0 : 1, r[e2] = Bh && t === void 0 ? Yh : t, this;
}
var qh = Uh, Kh = kh, Gh = Ah, Vh = Lh, Xh = zh, Zh = qh;
function Kt(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
Kt.prototype.clear = Kh;
Kt.prototype.delete = Gh;
Kt.prototype.get = Vh;
Kt.prototype.has = Xh;
Kt.prototype.set = Zh;
var Jh = Kt, xi = Jh, Qh = On, em = no;
function tm() {
  this.size = 0, this.__data__ = { hash: new xi(), map: new (em || Qh)(), string: new xi() };
}
var rm = tm;
function nm(e2) {
  var t = typeof e2;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e2 !== "__proto__" : e2 === null;
}
var am = nm, om = am;
function im(e2, t) {
  var r = e2.__data__;
  return om(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var kn = im, sm = kn;
function lm(e2) {
  var t = sm(this, e2).delete(e2);
  return this.size -= t ? 1 : 0, t;
}
var cm = lm, um = kn;
function dm(e2) {
  return um(this, e2).get(e2);
}
var fm = dm, vm = kn;
function pm(e2) {
  return vm(this, e2).has(e2);
}
var hm = pm, mm = kn;
function gm(e2, t) {
  var r = mm(this, e2), n = r.size;
  return r.set(e2, t), this.size += r.size == n ? 0 : 1, this;
}
var ym = gm, bm = rm, wm = cm, xm = fm, $m = hm, Em = ym;
function Gt(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.clear(); ++t < r; ) {
    var n = e2[t];
    this.set(n[0], n[1]);
  }
}
Gt.prototype.clear = bm;
Gt.prototype.delete = wm;
Gt.prototype.get = xm;
Gt.prototype.has = $m;
Gt.prototype.set = Em;
var ao = Gt, Dm = On, _m = no, Sm = ao, Om = 200;
function Tm(e2, t) {
  var r = this.__data__;
  if (r instanceof Dm) {
    var n = r.__data__;
    if (!_m || n.length < Om - 1) return n.push([e2, t]), this.size = ++r.size, this;
    r = this.__data__ = new Sm(n);
  }
  return r.set(e2, t), this.size = r.size, this;
}
var km = Tm, Cm = On, Am = Yp, Mm = qp, Pm = Gp, Nm = Xp, Rm = km;
function Vt(e2) {
  var t = this.__data__ = new Cm(e2);
  this.size = t.size;
}
Vt.prototype.clear = Am;
Vt.prototype.delete = Mm;
Vt.prototype.get = Pm;
Vt.prototype.has = Nm;
Vt.prototype.set = Rm;
var oo = Vt, jm = "__lodash_hash_undefined__";
function Lm(e2) {
  return this.__data__.set(e2, jm), this;
}
var Im = Lm;
function Fm(e2) {
  return this.__data__.has(e2);
}
var Wm = Fm, Hm = ao, zm = Im, Bm = Wm;
function un(e2) {
  var t = -1, r = e2 == null ? 0 : e2.length;
  for (this.__data__ = new Hm(); ++t < r; ) this.add(e2[t]);
}
un.prototype.add = un.prototype.push = zm;
un.prototype.has = Bm;
var Ym = un;
function Um(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length; ++r < n; ) if (t(e2[r], r, e2)) return true;
  return false;
}
var qm = Um;
function Km(e2, t) {
  return e2.has(t);
}
var Gm = Km, Vm = Ym, Xm = qm, Zm = Gm, Jm = 1, Qm = 2;
function eg(e2, t, r, n, a, o) {
  var i = r & Jm, s = e2.length, l = t.length;
  if (s != l && !(i && l > s)) return false;
  var c = o.get(e2), u = o.get(t);
  if (c && u) return c == t && u == e2;
  var d = -1, f = true, v = r & Qm ? new Vm() : void 0;
  for (o.set(e2, t), o.set(t, e2); ++d < s; ) {
    var h = e2[d], p = t[d];
    if (n) var m = i ? n(p, h, d, t, e2, o) : n(h, p, d, e2, t, o);
    if (m !== void 0) {
      if (m) continue;
      f = false;
      break;
    }
    if (v) {
      if (!Xm(t, function(y, g) {
        if (!Zm(v, g) && (h === y || a(h, y, r, n, o))) return v.push(g);
      })) {
        f = false;
        break;
      }
    } else if (!(h === p || a(h, p, r, n, o))) {
      f = false;
      break;
    }
  }
  return o.delete(e2), o.delete(t), f;
}
var wl = eg, tg = He, rg = tg.Uint8Array, xl = rg;
function ng(e2) {
  var t = -1, r = Array(e2.size);
  return e2.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
var ag = ng;
function og(e2) {
  var t = -1, r = Array(e2.size);
  return e2.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var ig = og, $i = Yt, Ei = xl, sg = kr, lg = wl, cg = ag, ug = ig, dg = 1, fg = 2, vg = "[object Boolean]", pg = "[object Date]", hg = "[object Error]", mg = "[object Map]", gg = "[object Number]", yg = "[object RegExp]", bg = "[object Set]", wg = "[object String]", xg = "[object Symbol]", $g = "[object ArrayBuffer]", Eg = "[object DataView]", Di = $i ? $i.prototype : void 0, oa = Di ? Di.valueOf : void 0;
function Dg(e2, t, r, n, a, o, i) {
  switch (r) {
    case Eg:
      if (e2.byteLength != t.byteLength || e2.byteOffset != t.byteOffset) return false;
      e2 = e2.buffer, t = t.buffer;
    case $g:
      return !(e2.byteLength != t.byteLength || !o(new Ei(e2), new Ei(t)));
    case vg:
    case pg:
    case gg:
      return sg(+e2, +t);
    case hg:
      return e2.name == t.name && e2.message == t.message;
    case yg:
    case wg:
      return e2 == t + "";
    case mg:
      var s = cg;
    case bg:
      var l = n & dg;
      if (s || (s = ug), e2.size != t.size && !l) return false;
      var c = i.get(e2);
      if (c) return c == t;
      n |= fg, i.set(e2, t);
      var u = lg(s(e2), s(t), n, a, o, i);
      return i.delete(e2), u;
    case xg:
      if (oa) return oa.call(e2) == oa.call(t);
  }
  return false;
}
var _g = Dg;
function Sg(e2, t) {
  for (var r = -1, n = t.length, a = e2.length; ++r < n; ) e2[a + r] = t[r];
  return e2;
}
var io = Sg, Og = Array.isArray, Oe = Og, Tg = io, kg = Oe;
function Cg(e2, t, r) {
  var n = t(e2);
  return kg(e2) ? n : Tg(n, r(e2));
}
var $l = Cg;
function Ag(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length, a = 0, o = []; ++r < n; ) {
    var i = e2[r];
    t(i, r, e2) && (o[a++] = i);
  }
  return o;
}
var Mg = Ag;
function Pg() {
  return [];
}
var El = Pg, Ng = Mg, Rg = El, jg = Object.prototype, Lg = jg.propertyIsEnumerable, _i = Object.getOwnPropertySymbols, Ig = _i ? function(e2) {
  return e2 == null ? [] : (e2 = Object(e2), Ng(_i(e2), function(t) {
    return Lg.call(e2, t);
  }));
} : Rg, so = Ig;
function Fg(e2, t) {
  for (var r = -1, n = Array(e2); ++r < e2; ) n[r] = t(r);
  return n;
}
var Wg = Fg, Hg = Ut, zg = rt, Bg = "[object Arguments]";
function Yg(e2) {
  return zg(e2) && Hg(e2) == Bg;
}
var Ug = Yg, Si = Ug, qg = rt, Dl = Object.prototype, Kg = Dl.hasOwnProperty, Gg = Dl.propertyIsEnumerable, Vg = Si(/* @__PURE__ */ function() {
  return arguments;
}()) ? Si : function(e2) {
  return qg(e2) && Kg.call(e2, "callee") && !Gg.call(e2, "callee");
}, lo = Vg, dn = { exports: {} };
function Xg() {
  return false;
}
var Zg = Xg;
dn.exports;
(function(e2, t) {
  var r = He, n = Zg, a = t && !t.nodeType && t, o = a && true && e2 && !e2.nodeType && e2, i = o && o.exports === a, s = i ? r.Buffer : void 0, l = s ? s.isBuffer : void 0, c = l || n;
  e2.exports = c;
})(dn, dn.exports);
var Cn = dn.exports, Jg = Ut, Qg = Wa, ey = rt, ty = "[object Arguments]", ry = "[object Array]", ny = "[object Boolean]", ay = "[object Date]", oy = "[object Error]", iy = "[object Function]", sy = "[object Map]", ly = "[object Number]", cy = "[object Object]", uy = "[object RegExp]", dy = "[object Set]", fy = "[object String]", vy = "[object WeakMap]", py = "[object ArrayBuffer]", hy = "[object DataView]", my = "[object Float32Array]", gy = "[object Float64Array]", yy = "[object Int8Array]", by = "[object Int16Array]", wy = "[object Int32Array]", xy = "[object Uint8Array]", $y = "[object Uint8ClampedArray]", Ey = "[object Uint16Array]", Dy = "[object Uint32Array]", Q = {};
Q[my] = Q[gy] = Q[yy] = Q[by] = Q[wy] = Q[xy] = Q[$y] = Q[Ey] = Q[Dy] = true;
Q[ty] = Q[ry] = Q[py] = Q[ny] = Q[hy] = Q[ay] = Q[oy] = Q[iy] = Q[sy] = Q[ly] = Q[cy] = Q[uy] = Q[dy] = Q[fy] = Q[vy] = false;
function _y(e2) {
  return ey(e2) && Qg(e2.length) && !!Q[Jg(e2)];
}
var Sy = _y;
function Oy(e2) {
  return function(t) {
    return e2(t);
  };
}
var An = Oy, fn = { exports: {} };
fn.exports;
(function(e2, t) {
  var r = rl, n = t && !t.nodeType && t, a = n && true && e2 && !e2.nodeType && e2, o = a && a.exports === n, i = o && r.process, s = function() {
    try {
      var l = a && a.require && a.require("util").types;
      return l || i && i.binding && i.binding("util");
    } catch {
    }
  }();
  e2.exports = s;
})(fn, fn.exports);
var co = fn.exports, Ty = Sy, ky = An, Oi = co, Ti = Oi && Oi.isTypedArray, Cy = Ti ? ky(Ti) : Ty, uo = Cy, Ay = Wg, My = lo, Py = Oe, Ny = Cn, Ry = Ha, jy = uo, Ly = Object.prototype, Iy = Ly.hasOwnProperty;
function Fy(e2, t) {
  var r = Py(e2), n = !r && My(e2), a = !r && !n && Ny(e2), o = !r && !n && !a && jy(e2), i = r || n || a || o, s = i ? Ay(e2.length, String) : [], l = s.length;
  for (var c in e2) (t || Iy.call(e2, c)) && !(i && (c == "length" || a && (c == "offset" || c == "parent") || o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ry(c, l))) && s.push(c);
  return s;
}
var _l = Fy, Wy = Object.prototype;
function Hy(e2) {
  var t = e2 && e2.constructor, r = typeof t == "function" && t.prototype || Wy;
  return e2 === r;
}
var fo = Hy;
function zy(e2, t) {
  return function(r) {
    return e2(t(r));
  };
}
var Sl = zy, By = Sl, Yy = By(Object.keys, Object), Uy = Yy, qy = fo, Ky = Uy, Gy = Object.prototype, Vy = Gy.hasOwnProperty;
function Xy(e2) {
  if (!qy(e2)) return Ky(e2);
  var t = [];
  for (var r in Object(e2)) Vy.call(e2, r) && r != "constructor" && t.push(r);
  return t;
}
var Zy = Xy, Jy = _l, Qy = Zy, e0 = Cr;
function t0(e2) {
  return e0(e2) ? Jy(e2) : Qy(e2);
}
var jr = t0, r0 = $l, n0 = so, a0 = jr;
function o0(e2) {
  return r0(e2, a0, n0);
}
var Ol = o0, ki = Ol, i0 = 1, s0 = Object.prototype, l0 = s0.hasOwnProperty;
function c0(e2, t, r, n, a, o) {
  var i = r & i0, s = ki(e2), l = s.length, c = ki(t), u = c.length;
  if (l != u && !i) return false;
  for (var d = l; d--; ) {
    var f = s[d];
    if (!(i ? f in t : l0.call(t, f))) return false;
  }
  var v = o.get(e2), h = o.get(t);
  if (v && h) return v == t && h == e2;
  var p = true;
  o.set(e2, t), o.set(t, e2);
  for (var m = i; ++d < l; ) {
    f = s[d];
    var y = e2[f], g = t[f];
    if (n) var $ = i ? n(g, y, f, t, e2, o) : n(y, g, f, e2, t, o);
    if (!($ === void 0 ? y === g || a(y, g, r, n, o) : $)) {
      p = false;
      break;
    }
    m || (m = f == "constructor");
  }
  if (p && !m) {
    var b = e2.constructor, E = t.constructor;
    b != E && "constructor" in e2 && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof E == "function" && E instanceof E) && (p = false);
  }
  return o.delete(e2), o.delete(t), p;
}
var u0 = c0, d0 = _t, f0 = He, v0 = d0(f0, "DataView"), p0 = v0, h0 = _t, m0 = He, g0 = h0(m0, "Promise"), y0 = g0, b0 = _t, w0 = He, x0 = b0(w0, "Set"), $0 = x0, E0 = _t, D0 = He, _0 = E0(D0, "WeakMap"), S0 = _0, xa = p0, $a = no, Ea = y0, Da = $0, _a = S0, Tl = Ut, Xt = bl, Ci = "[object Map]", O0 = "[object Object]", Ai = "[object Promise]", Mi = "[object Set]", Pi = "[object WeakMap]", Ni = "[object DataView]", T0 = Xt(xa), k0 = Xt($a), C0 = Xt(Ea), A0 = Xt(Da), M0 = Xt(_a), pt = Tl;
(xa && pt(new xa(new ArrayBuffer(1))) != Ni || $a && pt(new $a()) != Ci || Ea && pt(Ea.resolve()) != Ai || Da && pt(new Da()) != Mi || _a && pt(new _a()) != Pi) && (pt = function(e2) {
  var t = Tl(e2), r = t == O0 ? e2.constructor : void 0, n = r ? Xt(r) : "";
  if (n) switch (n) {
    case T0:
      return Ni;
    case k0:
      return Ci;
    case C0:
      return Ai;
    case A0:
      return Mi;
    case M0:
      return Pi;
  }
  return t;
});
var Mn = pt, ia = oo, P0 = wl, N0 = _g, R0 = u0, Ri = Mn, ji = Oe, Li = Cn, j0 = uo, L0 = 1, Ii = "[object Arguments]", Fi = "[object Array]", qr = "[object Object]", I0 = Object.prototype, Wi = I0.hasOwnProperty;
function F0(e2, t, r, n, a, o) {
  var i = ji(e2), s = ji(t), l = i ? Fi : Ri(e2), c = s ? Fi : Ri(t);
  l = l == Ii ? qr : l, c = c == Ii ? qr : c;
  var u = l == qr, d = c == qr, f = l == c;
  if (f && Li(e2)) {
    if (!Li(t)) return false;
    i = true, u = false;
  }
  if (f && !u) return o || (o = new ia()), i || j0(e2) ? P0(e2, t, r, n, a, o) : N0(e2, t, l, r, n, a, o);
  if (!(r & L0)) {
    var v = u && Wi.call(e2, "__wrapped__"), h = d && Wi.call(t, "__wrapped__");
    if (v || h) {
      var p = v ? e2.value() : e2, m = h ? t.value() : t;
      return o || (o = new ia()), a(p, m, r, n, o);
    }
  }
  return f ? (o || (o = new ia()), R0(e2, t, r, n, a, o)) : false;
}
var W0 = F0, H0 = W0, Hi = rt;
function kl(e2, t, r, n, a) {
  return e2 === t ? true : e2 == null || t == null || !Hi(e2) && !Hi(t) ? e2 !== e2 && t !== t : H0(e2, t, r, n, kl, a);
}
var vo = kl, z0 = vo;
function B0(e2, t) {
  return z0(e2, t);
}
var Cl = B0;
const Y0 = ne(Cl);
function gt(e2, t) {
  var r = gn(e2);
  return r ? r.innerHeight : t ? e2.clientHeight : Ae(e2).height;
}
function Lr(e2, t, r) {
  e2.closest && !r && e2.closest(t);
  var n = e2;
  do {
    if (wn(n, t)) return n;
    n = n.parentElement;
  } while (n && n !== r && n.nodeType === document.ELEMENT_NODE);
  return null;
}
const U0 = Object.freeze(Object.defineProperty({ __proto__: null, default: Lr }, Symbol.toStringTag, { value: "Module" }));
function q0(e2, t, r, n) {
  for (var a = e2.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; ) if (t(e2[o], o, e2)) return o;
  return -1;
}
var K0 = q0, G0 = oo, V0 = vo, X0 = 1, Z0 = 2;
function J0(e2, t, r, n) {
  var a = r.length, o = a, i = !n;
  if (e2 == null) return !o;
  for (e2 = Object(e2); a--; ) {
    var s = r[a];
    if (i && s[2] ? s[1] !== e2[s[0]] : !(s[0] in e2)) return false;
  }
  for (; ++a < o; ) {
    s = r[a];
    var l = s[0], c = e2[l], u = s[1];
    if (i && s[2]) {
      if (c === void 0 && !(l in e2)) return false;
    } else {
      var d = new G0();
      if (n) var f = n(c, u, l, e2, t, d);
      if (!(f === void 0 ? V0(u, c, X0 | Z0, n, d) : f)) return false;
    }
  }
  return true;
}
var Q0 = J0, eb = qe;
function tb(e2) {
  return e2 === e2 && !eb(e2);
}
var Al = tb, rb = Al, nb = jr;
function ab(e2) {
  for (var t = nb(e2), r = t.length; r--; ) {
    var n = t[r], a = e2[n];
    t[r] = [n, a, rb(a)];
  }
  return t;
}
var ob = ab;
function ib(e2, t) {
  return function(r) {
    return r == null ? false : r[e2] === t && (t !== void 0 || e2 in Object(r));
  };
}
var Ml = ib, sb = Q0, lb = ob, cb = Ml;
function ub(e2) {
  var t = lb(e2);
  return t.length == 1 && t[0][2] ? cb(t[0][0], t[0][1]) : function(r) {
    return r === e2 || sb(r, e2, t);
  };
}
var db = ub, fb = Oe, vb = Ar, pb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hb = /^\w*$/;
function mb(e2, t) {
  if (fb(e2)) return false;
  var r = typeof e2;
  return r == "number" || r == "symbol" || r == "boolean" || e2 == null || vb(e2) ? true : hb.test(e2) || !pb.test(e2) || t != null && e2 in Object(t);
}
var po = mb, Pl = ao, gb = "Expected a function";
function ho(e2, t) {
  if (typeof e2 != "function" || t != null && typeof t != "function") throw new TypeError(gb);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], o = r.cache;
    if (o.has(a)) return o.get(a);
    var i = e2.apply(this, n);
    return r.cache = o.set(a, i) || o, i;
  };
  return r.cache = new (ho.Cache || Pl)(), r;
}
ho.Cache = Pl;
var yb = ho, bb = yb, wb = 500;
function xb(e2) {
  var t = bb(e2, function(n) {
    return r.size === wb && r.clear(), n;
  }), r = t.cache;
  return t;
}
var $b = xb, Eb = $b, Db = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, _b = /\\(\\)?/g, Sb = Eb(function(e2) {
  var t = [];
  return e2.charCodeAt(0) === 46 && t.push(""), e2.replace(Db, function(r, n, a, o) {
    t.push(a ? o.replace(_b, "$1") : n || r);
  }), t;
}), Ob = Sb;
function Tb(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length, a = Array(n); ++r < n; ) a[r] = t(e2[r], r, e2);
  return a;
}
var mo = Tb, zi = Yt, kb = mo, Cb = Oe, Ab = Ar, Bi = zi ? zi.prototype : void 0, Yi = Bi ? Bi.toString : void 0;
function Nl(e2) {
  if (typeof e2 == "string") return e2;
  if (Cb(e2)) return kb(e2, Nl) + "";
  if (Ab(e2)) return Yi ? Yi.call(e2) : "";
  var t = e2 + "";
  return t == "0" && 1 / e2 == -1 / 0 ? "-0" : t;
}
var Mb = Nl, Pb = Mb;
function Nb(e2) {
  return e2 == null ? "" : Pb(e2);
}
var Rb = Nb, jb = Oe, Lb = po, Ib = Ob, Fb = Rb;
function Wb(e2, t) {
  return jb(e2) ? e2 : Lb(e2, t) ? [e2] : Ib(Fb(e2));
}
var Pn = Wb, Hb = Ar;
function zb(e2) {
  if (typeof e2 == "string" || Hb(e2)) return e2;
  var t = e2 + "";
  return t == "0" && 1 / e2 == -1 / 0 ? "-0" : t;
}
var Ir = zb, Bb = Pn, Yb = Ir;
function Ub(e2, t) {
  t = Bb(t, e2);
  for (var r = 0, n = t.length; e2 != null && r < n; ) e2 = e2[Yb(t[r++])];
  return r && r == n ? e2 : void 0;
}
var Nn = Ub, qb = Nn;
function Kb(e2, t, r) {
  var n = e2 == null ? void 0 : qb(e2, t);
  return n === void 0 ? r : n;
}
var Gb = Kb;
function Vb(e2, t) {
  return e2 != null && t in Object(e2);
}
var Xb = Vb, Zb = Pn, Jb = lo, Qb = Oe, ew = Ha, tw = Wa, rw = Ir;
function nw(e2, t, r) {
  t = Zb(t, e2);
  for (var n = -1, a = t.length, o = false; ++n < a; ) {
    var i = rw(t[n]);
    if (!(o = e2 != null && r(e2, i))) break;
    e2 = e2[i];
  }
  return o || ++n != a ? o : (a = e2 == null ? 0 : e2.length, !!a && tw(a) && ew(i, a) && (Qb(e2) || Jb(e2)));
}
var aw = nw, ow = Xb, iw = aw;
function sw(e2, t) {
  return e2 != null && iw(e2, t, ow);
}
var lw = sw, cw = vo, uw = Gb, dw = lw, fw = po, vw = Al, pw = Ml, hw = Ir, mw = 1, gw = 2;
function yw(e2, t) {
  return fw(e2) && vw(t) ? pw(hw(e2), t) : function(r) {
    var n = uw(r, e2);
    return n === void 0 && n === t ? dw(r, e2) : cw(t, n, mw | gw);
  };
}
var bw = yw;
function ww(e2) {
  return e2;
}
var Rn = ww;
function xw(e2) {
  return function(t) {
    return t == null ? void 0 : t[e2];
  };
}
var $w = xw, Ew = Nn;
function Dw(e2) {
  return function(t) {
    return Ew(t, e2);
  };
}
var _w = Dw, Sw = $w, Ow = _w, Tw = po, kw = Ir;
function Cw(e2) {
  return Tw(e2) ? Sw(kw(e2)) : Ow(e2);
}
var Aw = Cw, Mw = db, Pw = bw, Nw = Rn, Rw = Oe, jw = Aw;
function Lw(e2) {
  return typeof e2 == "function" ? e2 : e2 == null ? Nw : typeof e2 == "object" ? Rw(e2) ? Pw(e2[0], e2[1]) : Mw(e2) : jw(e2);
}
var jn = Lw, Iw = K0, Fw = jn, Ww = ol, Hw = Math.max;
function zw(e2, t, r) {
  var n = e2 == null ? 0 : e2.length;
  if (!n) return -1;
  var a = r == null ? 0 : Ww(r);
  return a < 0 && (a = Hw(n + a, 0)), Iw(e2, Fw(t), a);
}
var Rl = zw;
const Bw = ne(Rl);
var Yw = Math.ceil, Uw = Math.max;
function qw(e2, t, r, n) {
  for (var a = -1, o = Uw(Yw((t - e2) / (r || 1)), 0), i = Array(o); o--; ) i[n ? o : ++a] = e2, e2 += r;
  return i;
}
var Kw = qw, Gw = Kw, Vw = mn, sa = al;
function Xw(e2) {
  return function(t, r, n) {
    return n && typeof n != "number" && Vw(t, r, n) && (r = n = void 0), t = sa(t), r === void 0 ? (r = t, t = 0) : r = sa(r), n = n === void 0 ? t < r ? 1 : -1 : sa(n), Gw(t, r, n, e2);
  };
}
var Zw = Xw, Jw = Zw, Qw = Jw(), ex = Qw;
const tx = ne(ex);
var Ui = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function rx(e2, t) {
  return !!(e2 === t || Ui(e2) && Ui(t));
}
function nx(e2, t) {
  if (e2.length !== t.length) return false;
  for (var r = 0; r < e2.length; r++) if (!rx(e2[r], t[r])) return false;
  return true;
}
function jl(e2, t) {
  t === void 0 && (t = nx);
  var r = null;
  function n() {
    for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
    if (r && r.lastThis === this && t(a, r.lastArgs)) return r.lastResult;
    var i = e2.apply(this, a);
    return r = { lastResult: i, lastArgs: a, lastThis: this }, i;
  }
  return n.clear = function() {
    r = null;
  }, n;
}
function $r(e2, t) {
  var r = gn(e2);
  return r ? r.innerWidth : t ? e2.clientWidth : Ae(e2).width;
}
var qi = Yt, ax = lo, ox = Oe, Ki = qi ? qi.isConcatSpreadable : void 0;
function ix(e2) {
  return ox(e2) || ax(e2) || !!(Ki && e2 && e2[Ki]);
}
var sx = ix, lx = io, cx = sx;
function Ll(e2, t, r, n, a) {
  var o = -1, i = e2.length;
  for (r || (r = cx), a || (a = []); ++o < i; ) {
    var s = e2[o];
    t > 0 && r(s) ? t > 1 ? Ll(s, t - 1, r, n, a) : lx(a, s) : n || (a[a.length] = s);
  }
  return a;
}
var Il = Ll;
function ux(e2) {
  return function(t, r, n) {
    for (var a = -1, o = Object(t), i = n(t), s = i.length; s--; ) {
      var l = i[e2 ? s : ++a];
      if (r(o[l], l, o) === false) break;
    }
    return t;
  };
}
var dx = ux, fx = dx, vx = fx(), px = vx, hx = px, mx = jr;
function gx(e2, t) {
  return e2 && hx(e2, t, mx);
}
var go = gx, yx = Cr;
function bx(e2, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!yx(r)) return e2(r, n);
    for (var a = r.length, o = t ? a : -1, i = Object(r); (t ? o-- : ++o < a) && n(i[o], o, i) !== false; ) ;
    return r;
  };
}
var wx = bx, xx = go, $x = wx, Ex = $x(xx), Dx = Ex, _x = Dx, Sx = Cr;
function Ox(e2, t) {
  var r = -1, n = Sx(e2) ? Array(e2.length) : [];
  return _x(e2, function(a, o, i) {
    n[++r] = t(a, o, i);
  }), n;
}
var Tx = Ox;
function kx(e2, t) {
  var r = e2.length;
  for (e2.sort(t); r--; ) e2[r] = e2[r].value;
  return e2;
}
var Cx = kx, Gi = Ar;
function Ax(e2, t) {
  if (e2 !== t) {
    var r = e2 !== void 0, n = e2 === null, a = e2 === e2, o = Gi(e2), i = t !== void 0, s = t === null, l = t === t, c = Gi(t);
    if (!s && !c && !o && e2 > t || o && i && l && !s && !c || n && i && l || !r && l || !a) return 1;
    if (!n && !o && !c && e2 < t || c && r && a && !n && !o || s && r && a || !i && a || !l) return -1;
  }
  return 0;
}
var Mx = Ax, Px = Mx;
function Nx(e2, t, r) {
  for (var n = -1, a = e2.criteria, o = t.criteria, i = a.length, s = r.length; ++n < i; ) {
    var l = Px(a[n], o[n]);
    if (l) {
      if (n >= s) return l;
      var c = r[n];
      return l * (c == "desc" ? -1 : 1);
    }
  }
  return e2.index - t.index;
}
var Rx = Nx, la = mo, jx = Nn, Lx = jn, Ix = Tx, Fx = Cx, Wx = An, Hx = Rx, zx = Rn, Bx = Oe;
function Yx(e2, t, r) {
  t.length ? t = la(t, function(o) {
    return Bx(o) ? function(i) {
      return jx(i, o.length === 1 ? o[0] : o);
    } : o;
  }) : t = [zx];
  var n = -1;
  t = la(t, Wx(Lx));
  var a = Ix(e2, function(o, i, s) {
    var l = la(t, function(c) {
      return c(o);
    });
    return { criteria: l, index: ++n, value: o };
  });
  return Fx(a, function(o, i) {
    return Hx(o, i, r);
  });
}
var Ux = Yx;
function qx(e2, t, r) {
  switch (r.length) {
    case 0:
      return e2.call(t);
    case 1:
      return e2.call(t, r[0]);
    case 2:
      return e2.call(t, r[0], r[1]);
    case 3:
      return e2.call(t, r[0], r[1], r[2]);
  }
  return e2.apply(t, r);
}
var Kx = qx, Gx = Kx, Vi = Math.max;
function Vx(e2, t, r) {
  return t = Vi(t === void 0 ? e2.length - 1 : t, 0), function() {
    for (var n = arguments, a = -1, o = Vi(n.length - t, 0), i = Array(o); ++a < o; ) i[a] = n[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
    return s[t] = r(i), Gx(e2, this, s);
  };
}
var Fl = Vx;
function Xx(e2) {
  return function() {
    return e2;
  };
}
var Zx = Xx, Jx = _t, Qx = function() {
  try {
    var e2 = Jx(Object, "defineProperty");
    return e2({}, "", {}), e2;
  } catch {
  }
}(), Wl = Qx, e$ = Zx, Xi = Wl, t$ = Rn, r$ = Xi ? function(e2, t) {
  return Xi(e2, "toString", { configurable: true, enumerable: false, value: e$(t), writable: true });
} : t$, n$ = r$, a$ = 800, o$ = 16, i$ = Date.now;
function s$(e2) {
  var t = 0, r = 0;
  return function() {
    var n = i$(), a = o$ - (n - r);
    if (r = n, a > 0) {
      if (++t >= a$) return arguments[0];
    } else t = 0;
    return e2.apply(void 0, arguments);
  };
}
var l$ = s$, c$ = n$, u$ = l$, d$ = u$(c$), Hl = d$, f$ = Rn, v$ = Fl, p$ = Hl;
function h$(e2, t) {
  return p$(v$(e2, t, f$), e2 + "");
}
var zl = h$, m$ = Il, g$ = Ux, y$ = zl, Zi = mn, b$ = y$(function(e2, t) {
  if (e2 == null) return [];
  var r = t.length;
  return r > 1 && Zi(e2, t[0], t[1]) ? t = [] : r > 2 && Zi(t[0], t[1], t[2]) && (t = [t[0]]), g$(e2, m$(t, 1), []);
}), w$ = b$;
const x$ = ne(w$);
function Bl(e2) {
  return Is(e2) || Yu(e2) || Rs(e2) || Fs();
}
function $$(e2) {
  var t = [];
  if (e2 != null) for (var r in Object(e2)) t.push(r);
  return t;
}
var E$ = $$, D$ = qe, _$ = fo, S$ = E$, O$ = Object.prototype, T$ = O$.hasOwnProperty;
function k$(e2) {
  if (!D$(e2)) return S$(e2);
  var t = _$(e2), r = [];
  for (var n in e2) n == "constructor" && (t || !T$.call(e2, n)) || r.push(n);
  return r;
}
var C$ = k$, A$ = _l, M$ = C$, P$ = Cr;
function N$(e2) {
  return P$(e2) ? A$(e2, true) : M$(e2);
}
var Ln = N$, R$ = zl, j$ = kr, L$ = mn, I$ = Ln, Yl = Object.prototype, F$ = Yl.hasOwnProperty, W$ = R$(function(e2, t) {
  e2 = Object(e2);
  var r = -1, n = t.length, a = n > 2 ? t[2] : void 0;
  for (a && L$(t[0], t[1], a) && (n = 1); ++r < n; ) for (var o = t[r], i = I$(o), s = -1, l = i.length; ++s < l; ) {
    var c = i[s], u = e2[c];
    (u === void 0 || j$(u, Yl[c]) && !F$.call(e2, c)) && (e2[c] = o[c]);
  }
  return e2;
}), H$ = W$;
const z$ = ne(H$);
var Ji = Wl;
function B$(e2, t, r) {
  t == "__proto__" && Ji ? Ji(e2, t, { configurable: true, enumerable: true, value: r, writable: true }) : e2[t] = r;
}
var yo = B$, Y$ = yo, U$ = go, q$ = jn;
function K$(e2, t) {
  var r = {};
  return t = q$(t), U$(e2, function(n, a, o) {
    Y$(r, a, t(n, a, o));
  }), r;
}
var G$ = K$;
const V$ = ne(G$);
function X$(e2, t) {
  for (var r = -1, n = e2 == null ? 0 : e2.length; ++r < n && t(e2[r], r, e2) !== false; ) ;
  return e2;
}
var Ul = X$, Z$ = yo, J$ = kr, Q$ = Object.prototype, eE = Q$.hasOwnProperty;
function tE(e2, t, r) {
  var n = e2[t];
  (!(eE.call(e2, t) && J$(n, r)) || r === void 0 && !(t in e2)) && Z$(e2, t, r);
}
var ql = tE, rE = ql, nE = yo;
function aE(e2, t, r, n) {
  var a = !r;
  r || (r = {});
  for (var o = -1, i = t.length; ++o < i; ) {
    var s = t[o], l = n ? n(r[s], e2[s], s, r, e2) : void 0;
    l === void 0 && (l = e2[s]), a ? nE(r, s, l) : rE(r, s, l);
  }
  return r;
}
var Fr = aE, oE = Fr, iE = jr;
function sE(e2, t) {
  return e2 && oE(t, iE(t), e2);
}
var lE = sE, cE = Fr, uE = Ln;
function dE(e2, t) {
  return e2 && cE(t, uE(t), e2);
}
var fE = dE, vn = { exports: {} };
vn.exports;
(function(e2, t) {
  var r = He, n = t && !t.nodeType && t, a = n && true && e2 && !e2.nodeType && e2, o = a && a.exports === n, i = o ? r.Buffer : void 0, s = i ? i.allocUnsafe : void 0;
  function l(c, u) {
    if (u) return c.slice();
    var d = c.length, f = s ? s(d) : new c.constructor(d);
    return c.copy(f), f;
  }
  e2.exports = l;
})(vn, vn.exports);
var vE = vn.exports;
function pE(e2, t) {
  var r = -1, n = e2.length;
  for (t || (t = Array(n)); ++r < n; ) t[r] = e2[r];
  return t;
}
var hE = pE, mE = Fr, gE = so;
function yE(e2, t) {
  return mE(e2, gE(e2), t);
}
var bE = yE, wE = Sl, xE = wE(Object.getPrototypeOf, Object), In = xE, $E = io, EE = In, DE = so, _E = El, SE = Object.getOwnPropertySymbols, OE = SE ? function(e2) {
  for (var t = []; e2; ) $E(t, DE(e2)), e2 = EE(e2);
  return t;
} : _E, Kl = OE, TE = Fr, kE = Kl;
function CE(e2, t) {
  return TE(e2, kE(e2), t);
}
var AE = CE, ME = $l, PE = Kl, NE = Ln;
function RE(e2) {
  return ME(e2, NE, PE);
}
var Gl = RE, jE = Object.prototype, LE = jE.hasOwnProperty;
function IE(e2) {
  var t = e2.length, r = new e2.constructor(t);
  return t && typeof e2[0] == "string" && LE.call(e2, "index") && (r.index = e2.index, r.input = e2.input), r;
}
var FE = IE, Qi = xl;
function WE(e2) {
  var t = new e2.constructor(e2.byteLength);
  return new Qi(t).set(new Qi(e2)), t;
}
var bo = WE, HE = bo;
function zE(e2, t) {
  var r = t ? HE(e2.buffer) : e2.buffer;
  return new e2.constructor(r, e2.byteOffset, e2.byteLength);
}
var BE = zE, YE = /\w*$/;
function UE(e2) {
  var t = new e2.constructor(e2.source, YE.exec(e2));
  return t.lastIndex = e2.lastIndex, t;
}
var qE = UE, es = Yt, ts = es ? es.prototype : void 0, rs = ts ? ts.valueOf : void 0;
function KE(e2) {
  return rs ? Object(rs.call(e2)) : {};
}
var GE = KE, VE = bo;
function XE(e2, t) {
  var r = t ? VE(e2.buffer) : e2.buffer;
  return new e2.constructor(r, e2.byteOffset, e2.length);
}
var ZE = XE, JE = bo, QE = BE, eD = qE, tD = GE, rD = ZE, nD = "[object Boolean]", aD = "[object Date]", oD = "[object Map]", iD = "[object Number]", sD = "[object RegExp]", lD = "[object Set]", cD = "[object String]", uD = "[object Symbol]", dD = "[object ArrayBuffer]", fD = "[object DataView]", vD = "[object Float32Array]", pD = "[object Float64Array]", hD = "[object Int8Array]", mD = "[object Int16Array]", gD = "[object Int32Array]", yD = "[object Uint8Array]", bD = "[object Uint8ClampedArray]", wD = "[object Uint16Array]", xD = "[object Uint32Array]";
function $D(e2, t, r) {
  var n = e2.constructor;
  switch (t) {
    case dD:
      return JE(e2);
    case nD:
    case aD:
      return new n(+e2);
    case fD:
      return QE(e2, r);
    case vD:
    case pD:
    case hD:
    case mD:
    case gD:
    case yD:
    case bD:
    case wD:
    case xD:
      return rD(e2, r);
    case oD:
      return new n();
    case iD:
    case cD:
      return new n(e2);
    case sD:
      return eD(e2);
    case lD:
      return new n();
    case uD:
      return tD(e2);
  }
}
var ED = $D, DD = qe, ns = Object.create, _D = /* @__PURE__ */ function() {
  function e2() {
  }
  return function(t) {
    if (!DD(t)) return {};
    if (ns) return ns(t);
    e2.prototype = t;
    var r = new e2();
    return e2.prototype = void 0, r;
  };
}(), Vl = _D, SD = Vl, OD = In, TD = fo;
function kD(e2) {
  return typeof e2.constructor == "function" && !TD(e2) ? SD(OD(e2)) : {};
}
var CD = kD, AD = Mn, MD = rt, PD = "[object Map]";
function ND(e2) {
  return MD(e2) && AD(e2) == PD;
}
var RD = ND, jD = RD, LD = An, as = co, os = as && as.isMap, ID = os ? LD(os) : jD, FD = ID, WD = Mn, HD = rt, zD = "[object Set]";
function BD(e2) {
  return HD(e2) && WD(e2) == zD;
}
var YD = BD, UD = YD, qD = An, is = co, ss = is && is.isSet, KD = ss ? qD(ss) : UD, GD = KD, VD = oo, XD = Ul, ZD = ql, JD = lE, QD = fE, e_ = vE, t_ = hE, r_ = bE, n_ = AE, a_ = Ol, o_ = Gl, i_ = Mn, s_ = FE, l_ = ED, c_ = CD, u_ = Oe, d_ = Cn, f_ = FD, v_ = qe, p_ = GD, h_ = jr, m_ = Ln, g_ = 1, y_ = 2, b_ = 4, Xl = "[object Arguments]", w_ = "[object Array]", x_ = "[object Boolean]", $_ = "[object Date]", E_ = "[object Error]", Zl = "[object Function]", D_ = "[object GeneratorFunction]", __ = "[object Map]", S_ = "[object Number]", Jl = "[object Object]", O_ = "[object RegExp]", T_ = "[object Set]", k_ = "[object String]", C_ = "[object Symbol]", A_ = "[object WeakMap]", M_ = "[object ArrayBuffer]", P_ = "[object DataView]", N_ = "[object Float32Array]", R_ = "[object Float64Array]", j_ = "[object Int8Array]", L_ = "[object Int16Array]", I_ = "[object Int32Array]", F_ = "[object Uint8Array]", W_ = "[object Uint8ClampedArray]", H_ = "[object Uint16Array]", z_ = "[object Uint32Array]", J = {};
J[Xl] = J[w_] = J[M_] = J[P_] = J[x_] = J[$_] = J[N_] = J[R_] = J[j_] = J[L_] = J[I_] = J[__] = J[S_] = J[Jl] = J[O_] = J[T_] = J[k_] = J[C_] = J[F_] = J[W_] = J[H_] = J[z_] = true;
J[E_] = J[Zl] = J[A_] = false;
function rn(e2, t, r, n, a, o) {
  var i, s = t & g_, l = t & y_, c = t & b_;
  if (r && (i = a ? r(e2, n, a, o) : r(e2)), i !== void 0) return i;
  if (!v_(e2)) return e2;
  var u = u_(e2);
  if (u) {
    if (i = s_(e2), !s) return t_(e2, i);
  } else {
    var d = i_(e2), f = d == Zl || d == D_;
    if (d_(e2)) return e_(e2, s);
    if (d == Jl || d == Xl || f && !a) {
      if (i = l || f ? {} : c_(e2), !s) return l ? n_(e2, QD(i, e2)) : r_(e2, JD(i, e2));
    } else {
      if (!J[d]) return a ? e2 : {};
      i = l_(e2, d, s);
    }
  }
  o || (o = new VD());
  var v = o.get(e2);
  if (v) return v;
  o.set(e2, i), p_(e2) ? e2.forEach(function(m) {
    i.add(rn(m, t, r, m, e2, o));
  }) : f_(e2) && e2.forEach(function(m, y) {
    i.set(y, rn(m, t, r, y, e2, o));
  });
  var h = c ? l ? o_ : a_ : l ? m_ : h_, p = u ? void 0 : h(e2);
  return XD(p || e2, function(m, y) {
    p && (y = m, m = e2[y]), ZD(i, y, rn(m, t, r, y, e2, o));
  }), i;
}
var B_ = rn;
function Y_(e2) {
  var t = e2 == null ? 0 : e2.length;
  return t ? e2[t - 1] : void 0;
}
var U_ = Y_, q_ = Nn, K_ = tl;
function G_(e2, t) {
  return t.length < 2 ? e2 : q_(e2, K_(t, 0, -1));
}
var V_ = G_, X_ = Pn, Z_ = U_, J_ = V_, ls = Ir, Q_ = Object.prototype, e1 = Q_.hasOwnProperty;
function t1(e2, t) {
  t = X_(t, e2);
  var r = -1, n = t.length;
  if (!n) return true;
  for (; ++r < n; ) {
    var a = ls(t[r]);
    if (a === "__proto__" && !e1.call(e2, "__proto__") || (a === "constructor" || a === "prototype") && r < n - 1) return false;
  }
  var o = J_(e2, t);
  return o == null || delete o[ls(Z_(t))];
}
var r1 = t1, n1 = Ut, a1 = In, o1 = rt, i1 = "[object Object]", s1 = Function.prototype, l1 = Object.prototype, Ql = s1.toString, c1 = l1.hasOwnProperty, u1 = Ql.call(Object);
function d1(e2) {
  if (!o1(e2) || n1(e2) != i1) return false;
  var t = a1(e2);
  if (t === null) return true;
  var r = c1.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ql.call(r) == u1;
}
var f1 = d1, v1 = f1;
function p1(e2) {
  return v1(e2) ? void 0 : e2;
}
var h1 = p1, m1 = Il;
function g1(e2) {
  var t = e2 == null ? 0 : e2.length;
  return t ? m1(e2, 1) : [];
}
var y1 = g1, b1 = y1, w1 = Fl, x1 = Hl;
function $1(e2) {
  return x1(w1(e2, void 0, b1), e2 + "");
}
var E1 = $1, D1 = mo, _1 = B_, S1 = r1, O1 = Pn, T1 = Fr, k1 = h1, C1 = E1, A1 = Gl, M1 = 1, P1 = 2, N1 = 4, R1 = C1(function(e2, t) {
  var r = {};
  if (e2 == null) return r;
  var n = false;
  t = D1(t, function(o) {
    return o = O1(o, e2), n || (n = o.length > 1), o;
  }), T1(e2, A1(e2), r), n && (r = _1(r, M1 | P1 | N1, k1));
  for (var a = t.length; a--; ) S1(r, t[a]);
  return r;
}), j1 = R1;
const L1 = ne(j1);
var I1 = Ul, F1 = Vl, W1 = go, H1 = jn, z1 = In, B1 = Oe, Y1 = Cn, U1 = Fa, q1 = qe, K1 = uo;
function G1(e2, t, r) {
  var n = B1(e2), a = n || Y1(e2) || K1(e2);
  if (t = H1(t), r == null) {
    var o = e2 && e2.constructor;
    a ? r = n ? new o() : [] : q1(e2) ? r = U1(o) ? F1(z1(e2)) : {} : r = {};
  }
  return (a ? I1 : W1)(e2, function(i, s, l) {
    return t(r, i, s, l);
  }), r;
}
var V1 = G1;
const X1 = ne(V1);
var ec = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n, a) {
      n.prototype.isBetween = function(o, i, s, l) {
        var c = a(o), u = a(i), d = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (d ? this.isAfter(c, s) : !this.isBefore(c, s)) && (f ? this.isBefore(u, s) : !this.isAfter(u, s)) || (d ? this.isBefore(c, s) : !this.isAfter(c, s)) && (f ? this.isAfter(u, s) : !this.isBefore(u, s));
      };
    };
  });
})(ec);
var Z1 = ec.exports;
const J1 = ne(Z1);
var tc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n) {
      n.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(tc);
var Q1 = tc.exports;
const eS = ne(Q1);
var rc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n) {
      n.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(rc);
var tS = rc.exports;
const rS = ne(tS);
var nc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n, a) {
      var o = n.prototype, i = function(d) {
        return d && (d.indexOf ? d : d.s);
      }, s = function(d, f, v, h, p) {
        var m = d.name ? d : d.$locale(), y = i(m[f]), g = i(m[v]), $ = y || g.map(function(E) {
          return E.slice(0, h);
        });
        if (!p) return $;
        var b = m.weekStart;
        return $.map(function(E, _) {
          return $[(_ + (b || 0)) % 7];
        });
      }, l = function() {
        return a.Ls[a.locale()];
      }, c = function(d, f) {
        return d.formats[f] || function(v) {
          return v.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(h, p, m) {
            return p || m.slice(1);
          });
        }(d.formats[f.toUpperCase()]);
      }, u = function() {
        var d = this;
        return { months: function(f) {
          return f ? f.format("MMMM") : s(d, "months");
        }, monthsShort: function(f) {
          return f ? f.format("MMM") : s(d, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return d.$locale().weekStart || 0;
        }, weekdays: function(f) {
          return f ? f.format("dddd") : s(d, "weekdays");
        }, weekdaysMin: function(f) {
          return f ? f.format("dd") : s(d, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(f) {
          return f ? f.format("ddd") : s(d, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(f) {
          return c(d.$locale(), f);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      o.localeData = function() {
        return u.bind(this)();
      }, a.localeData = function() {
        var d = l();
        return { firstDayOfWeek: function() {
          return d.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(f) {
          return c(d, f);
        }, meridiem: d.meridiem, ordinal: d.ordinal };
      }, a.months = function() {
        return s(l(), "months");
      }, a.monthsShort = function() {
        return s(l(), "monthsShort", "months", 3);
      }, a.weekdays = function(d) {
        return s(l(), "weekdays", null, null, d);
      }, a.weekdaysShort = function(d) {
        return s(l(), "weekdaysShort", "weekdays", 3, d);
      }, a.weekdaysMin = function(d) {
        return s(l(), "weekdaysMin", "weekdays", 2, d);
      };
    };
  });
})(nc);
var nS = nc.exports;
const aS = ne(nS);
var ac = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(n, a, o) {
      var i = a.prototype, s = i.format;
      o.en.formats = r, i.format = function(l) {
        l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, u = function(d, f) {
          return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(v, h, p) {
            var m = p && p.toUpperCase();
            return h || f[p] || r[p] || f[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(y, g, $) {
              return g || $.slice(1);
            });
          });
        }(l, c === void 0 ? {} : c);
        return s.call(this, u);
      };
    };
  });
})(ac);
var oS = ac.exports;
const iS = ne(oS);
var oc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n, a) {
      var o = function(i, s) {
        if (!s || !s.length || s.length === 1 && !s[0] || s.length === 1 && Array.isArray(s[0]) && !s[0].length) return null;
        var l;
        s.length === 1 && s[0].length > 0 && (s = s[0]), l = (s = s.filter(function(u) {
          return u;
        }))[0];
        for (var c = 1; c < s.length; c += 1) s[c].isValid() && !s[c][i](l) || (l = s[c]);
        return l;
      };
      a.max = function() {
        var i = [].slice.call(arguments, 0);
        return o("isAfter", i);
      }, a.min = function() {
        var i = [].slice.call(arguments, 0);
        return o("isBefore", i);
      };
    };
  });
})(oc);
var sS = oc.exports;
const lS = ne(sS);
var ic = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    var r = "minute", n = /[+-]\d\d(?::?\d\d)?/g, a = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var l = i.prototype;
      s.utc = function(p) {
        var m = { date: p, utc: true, args: arguments };
        return new i(m);
      }, l.utc = function(p) {
        var m = s(this.toDate(), { locale: this.$L, utc: true });
        return p ? m.add(this.utcOffset(), r) : m;
      }, l.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: false });
      };
      var c = l.parse;
      l.parse = function(p) {
        p.utc && (this.$u = true), this.$utils().u(p.$offset) || (this.$offset = p.$offset), c.call(this, p);
      };
      var u = l.init;
      l.init = function() {
        if (this.$u) {
          var p = this.$d;
          this.$y = p.getUTCFullYear(), this.$M = p.getUTCMonth(), this.$D = p.getUTCDate(), this.$W = p.getUTCDay(), this.$H = p.getUTCHours(), this.$m = p.getUTCMinutes(), this.$s = p.getUTCSeconds(), this.$ms = p.getUTCMilliseconds();
        } else u.call(this);
      };
      var d = l.utcOffset;
      l.utcOffset = function(p, m) {
        var y = this.$utils().u;
        if (y(p)) return this.$u ? 0 : y(this.$offset) ? d.call(this) : this.$offset;
        if (typeof p == "string" && (p = function(E) {
          E === void 0 && (E = "");
          var _ = E.match(n);
          if (!_) return null;
          var P = ("" + _[0]).match(a) || ["-", 0, 0], N = P[0], M = 60 * +P[1] + +P[2];
          return M === 0 ? 0 : N === "+" ? M : -M;
        }(p), p === null)) return this;
        var g = Math.abs(p) <= 16 ? 60 * p : p;
        if (g === 0) return this.utc(m);
        var $ = this.clone();
        if (m) return $.$offset = g, $.$u = false, $;
        var b = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        return ($ = this.local().add(g + b, r)).$offset = g, $.$x.$localOffset = b, $;
      };
      var f = l.format;
      l.format = function(p) {
        var m = p || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return f.call(this, m);
      }, l.valueOf = function() {
        var p = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * p;
      }, l.isUTC = function() {
        return !!this.$u;
      }, l.toISOString = function() {
        return this.toDate().toISOString();
      }, l.toString = function() {
        return this.toDate().toUTCString();
      };
      var v = l.toDate;
      l.toDate = function(p) {
        return p === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : v.call(this);
      };
      var h = l.diff;
      l.diff = function(p, m, y) {
        if (p && this.$u === p.$u) return h.call(this, p, m, y);
        var g = this.local(), $ = s(p).local();
        return h.call(g, $, m, y);
      };
    };
  });
})(ic);
var cS = ic.exports;
const uS = ne(cS);
var sc = { exports: {} };
(function(e2, t) {
  (function(r, n) {
    e2.exports = n();
  })(xe, function() {
    return function(r, n) {
      n.prototype.isLeapYear = function() {
        return this.$y % 4 == 0 && this.$y % 100 != 0 || this.$y % 400 == 0;
      };
    };
  });
})(sc);
var dS = sc.exports;
const fS = ne(dS);
function je(e2) {
  return e2.children;
}
var we = { PREVIOUS: "PREV", NEXT: "NEXT", TODAY: "TODAY", DATE: "DATE" }, me = { MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda" }, cs = Object.keys(me).map(function(e2) {
  return me[e2];
});
I.oneOfType([I.string, I.func]);
I.any;
I.func;
I.oneOfType([I.arrayOf(I.oneOf(cs)), I.objectOf(function(e2, t) {
  var r = cs.indexOf(t) !== -1 && typeof e2[t] == "boolean";
  if (r) return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
  return I.elementType.apply(I, [e2, t].concat(a));
})]);
I.oneOfType([I.oneOf(["overlap", "no-overlap"]), I.func]);
var us = { seconds: 1e3, minutes: 1e3 * 60, hours: 1e3 * 60 * 60, day: 1e3 * 60 * 60 * 24 };
function lc(e2, t) {
  var r = ue(e2, "month");
  return ue(r, "week", t.startOfWeek());
}
function cc(e2, t) {
  var r = sn(e2, "month");
  return sn(r, "week", t.startOfWeek());
}
function vS(e2, t) {
  for (var r = lc(e2, t), n = cc(e2, t), a = []; zt(r, n, "day"); ) a.push(r), r = Me(r, 1, "day");
  return a;
}
function pS(e2, t) {
  var r = ue(e2, t);
  return Or(r, e2) ? r : Me(r, 1, t);
}
function hS(e2, t) {
  for (var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", n = e2, a = []; zt(n, t, r); ) a.push(n), n = Me(n, 1, r);
  return a;
}
function mS(e2, t) {
  return t == null && e2 == null ? null : (t == null && (t = /* @__PURE__ */ new Date()), e2 == null && (e2 = /* @__PURE__ */ new Date()), e2 = ue(e2, "day"), e2 = yr(e2, yr(t)), e2 = Nt(e2, Nt(t)), e2 = gr(e2, gr(t)), mr(e2, mr(t)));
}
function ds(e2) {
  return yr(e2) === 0 && Nt(e2) === 0 && gr(e2) === 0 && mr(e2) === 0;
}
function gS(e2, t, r, n) {
  return r === "day" && (r = "date"), Math.abs(Ko[r](e2, void 0, n) - Ko[r](t, void 0, n));
}
function wo(e2, t, r) {
  return !r || r === "milliseconds" ? Math.abs(+e2 - +t) : Math.round(Math.abs(+ue(e2, r) / us[r] - +ue(t, r) / us[r]));
}
var yS = I.oneOfType([I.string, I.func]);
function bS(e2, t, r, n, a) {
  var o = typeof n == "function" ? n(r, a, e2) : t.call(e2, r, n, a);
  return ur(o == null || typeof o == "string", "`localizer format(..)` must return a string, null, or undefined"), o;
}
function wS(e2, t, r) {
  return new Date(e2.getFullYear(), e2.getMonth(), e2.getDate(), 0, t + r, 0, 0);
}
function xo(e2, t) {
  return e2.getTimezoneOffset() - t.getTimezoneOffset();
}
function xS(e2, t) {
  return wo(e2, t, "minutes") + xo(e2, t);
}
function $S(e2) {
  var t = ue(e2, "day");
  return wo(t, e2, "minutes") + xo(t, e2);
}
function ES(e2, t) {
  return Ia(e2, t, "day");
}
function DS(e2, t, r) {
  var n = Or(e2, t, "minutes");
  return n ? Tr(t, r, "minutes") : hn(t, r, "minutes");
}
function Sa(e2, t) {
  return gS(e2, t, "day");
}
function _S(e2) {
  var t = e2.evtA, r = t.start, n = t.end, a = t.allDay, o = e2.evtB, i = o.start, s = o.end, l = o.allDay, c = +ue(r, "day") - +ue(i, "day"), u = Sa(r, n), d = Sa(i, s);
  return c || d - u || !!l - !!a || +r - +i || +n - +s;
}
function SS(e2) {
  var t = e2.event, r = t.start, n = t.end, a = e2.range, o = a.start, i = a.end, s = ue(r, "day"), l = zt(s, i, "day"), c = La(s, n, "minutes"), u = c ? hn(n, o, "minutes") : Tr(n, o, "minutes");
  return l && u;
}
function OS(e2, t) {
  return Or(e2, t, "day");
}
function TS(e2, t) {
  return ds(e2) && ds(t);
}
var kS = oe(function e(t) {
  var r = this;
  ie(this, e), ur(typeof t.format == "function", "date localizer `format(..)` must be a function"), ur(typeof t.firstOfWeek == "function", "date localizer `firstOfWeek(..)` must be a function"), this.propType = t.propType || yS, this.formats = t.formats, this.format = function() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return bS.apply(void 0, [r, t.format].concat(a));
  }, this.startOfWeek = t.firstOfWeek, this.merge = t.merge || mS, this.inRange = t.inRange || Zs, this.lt = t.lt || Ia, this.lte = t.lte || zt, this.gt = t.gt || hn, this.gte = t.gte || Tr, this.eq = t.eq || Or, this.neq = t.neq || La, this.startOf = t.startOf || ue, this.endOf = t.endOf || sn, this.add = t.add || Me, this.range = t.range || hS, this.diff = t.diff || wo, this.ceil = t.ceil || pS, this.min = t.min || Vs, this.max = t.max || Xs, this.minutes = t.minutes || Nt, this.daySpan = t.daySpan || Sa, this.firstVisibleDay = t.firstVisibleDay || lc, this.lastVisibleDay = t.lastVisibleDay || cc, this.visibleDays = t.visibleDays || vS, this.getSlotDate = t.getSlotDate || wS, this.getTimezoneOffset = t.getTimezoneOffset || function(n) {
    return n.getTimezoneOffset();
  }, this.getDstOffset = t.getDstOffset || xo, this.getTotalMin = t.getTotalMin || xS, this.getMinutesFromMidnight = t.getMinutesFromMidnight || $S, this.continuesPrior = t.continuesPrior || ES, this.continuesAfter = t.continuesAfter || DS, this.sortEvents = t.sortEvents || _S, this.inEventRange = t.inEventRange || SS, this.isSameDate = t.isSameDate || OS, this.startAndEndAreDateOnly = t.startAndEndAreDateOnly || TS, this.segmentOffset = t.browserTZOffset ? t.browserTZOffset() : 0;
});
function CS(e2, t, r, n) {
  var a = Z(Z({}, e2.formats), r);
  return Z(Z({}, e2), {}, { messages: n, startOfWeek: function() {
    return e2.startOfWeek(t);
  }, format: function(i, s) {
    return e2.format(i, a[s] || s, t);
  } });
}
var AS = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.navigate = function(i) {
      r.props.onNavigate(i);
    }, r.view = function(i) {
      r.props.onView(i);
    }, r;
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.localizer.messages, o = n.label;
    return x.createElement("div", { className: "rbc-toolbar" }, x.createElement("span", { className: "rbc-btn-group" }, x.createElement("button", { type: "button", onClick: this.navigate.bind(null, we.TODAY) }, a.today), x.createElement("button", { type: "button", onClick: this.navigate.bind(null, we.PREVIOUS) }, a.previous), x.createElement("button", { type: "button", onClick: this.navigate.bind(null, we.NEXT) }, a.next)), x.createElement("span", { className: "rbc-toolbar-label" }, o), x.createElement("span", { className: "rbc-btn-group" }, this.viewNamesGroup(a)));
  } }, { key: "viewNamesGroup", value: function(n) {
    var a = this, o = this.props.views, i = this.props.view;
    if (o.length > 1) return o.map(function(s) {
      return x.createElement("button", { type: "button", key: s, className: te({ "rbc-active": i === s }), onClick: a.view.bind(null, s) }, n[s]);
    });
  } }]);
}(x.Component);
function ee(e2, t) {
  e2 && e2.apply(null, [].concat(t));
}
var MS = { date: "Date", time: "Time", event: "Event", allDay: "All Day", week: "Week", work_week: "Work Week", day: "Day", month: "Month", previous: "Back", next: "Next", yesterday: "Yesterday", tomorrow: "Tomorrow", today: "Today", agenda: "Agenda", noEventsInRange: "There are no events in this range.", showMore: function(t) {
  return "+".concat(t, " more");
} };
function PS(e2) {
  return Z(Z({}, MS), e2);
}
function NS(e2) {
  var t = e2.ref, r = e2.callback;
  W.useEffect(function() {
    var n = function(o) {
      t.current && !t.current.contains(o.target) && r();
    };
    return document.addEventListener("mousedown", n), function() {
      document.removeEventListener("mousedown", n);
    };
  }, [t, r]);
}
var RS = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], uc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.style, o = n.className, i = n.event, s = n.selected, l = n.isAllDay, c = n.onSelect, u = n.onDoubleClick, d = n.onKeyPress, f = n.localizer, v = n.continuesPrior, h = n.continuesAfter, p = n.accessors, m = n.getters, y = n.children, g = n.components, $ = g.event, b = g.eventWrapper, E = n.slotStart, _ = n.slotEnd, P = We(n, RS);
    delete P.resizable;
    var N = p.title(i), M = p.tooltip(i), C = p.end(i), D = p.start(i), z = p.allDay(i), F = l || z || f.diff(D, f.ceil(C, "day"), "day") > 1, T = m.eventProp(i, D, C, s), O = x.createElement("div", { className: "rbc-event-content", title: M || void 0 }, $ ? x.createElement($, { event: i, continuesPrior: v, continuesAfter: h, title: N, isAllDay: z, localizer: f, slotStart: E, slotEnd: _ }) : N);
    return x.createElement(b, Object.assign({}, this.props, { type: "date" }), x.createElement("div", Object.assign({}, P, { style: Z(Z({}, T.style), a), className: te("rbc-event", o, T.className, { "rbc-selected": s, "rbc-event-allday": F, "rbc-event-continues-prior": v, "rbc-event-continues-after": h }), onClick: function(R) {
      return c && c(i, R);
    }, onDoubleClick: function(R) {
      return u && u(i, R);
    }, onKeyDown: function(R) {
      return d && d(i, R);
    } }), typeof y == "function" ? y(O) : O));
  } }]);
}(x.Component);
function Fn(e2, t) {
  return !e2 || t == null ? false : Y0(e2, t);
}
function dc(e2, t) {
  var r = e2.right - e2.left, n = r / t;
  return n;
}
function fc(e2, t, r, n) {
  var a = dc(e2, n);
  return r ? n - 1 - Math.floor((t - e2.left) / a) : Math.floor((t - e2.left) / a);
}
function jS(e2, t) {
  var r = t.x, n = t.y;
  return n >= e2.top && n <= e2.bottom && r >= e2.left && r <= e2.right;
}
function LS(e2, t, r, n, a) {
  var o = -1, i = -1, s = n - 1, l = dc(t, n), c = fc(t, r.x, a, n), u = t.top < r.y && t.bottom > r.y, d = t.top < e2.y && t.bottom > e2.y, f = e2.y > t.bottom, v = t.top > e2.y, h = r.top < t.top && r.bottom > t.bottom;
  return h && (o = 0, i = s), u && (v ? (o = 0, i = c) : f && (o = c, i = s)), d && (o = i = a ? s - Math.floor((e2.x - t.left) / l) : Math.floor((e2.x - t.left) / l), u ? c < o ? o = c : i = c : e2.y < r.y ? i = s : o = 0), { startIdx: o, endIdx: i };
}
function IS(e2) {
  var t = e2.target, r = e2.offset, n = e2.container, a = e2.box, o = Ae(t), i = o.top, s = o.left, l = o.width, c = o.height, u = Ae(n), d = u.top, f = u.left, v = u.width, h = u.height, p = Ae(a), m = p.width, y = p.height, g = d + h, $ = f + v, b = i + y, E = s + m, _ = r.x, P = r.y, N = b > g ? i - y - P : i + P + c, M = E > $ ? s + _ - m + l : s + _;
  return { topOffset: N, leftOffset: M };
}
function FS(e2) {
  var t = e2.containerRef, r = e2.accessors, n = e2.getters, a = e2.selected, o = e2.components, i = e2.localizer, s = e2.position, l = e2.show, c = e2.events, u = e2.slotStart, d = e2.slotEnd, f = e2.onSelect, v = e2.onDoubleClick, h = e2.onKeyPress, p = e2.handleDragStart, m = e2.popperRef, y = e2.target, g = e2.offset;
  NS({ ref: m, callback: l }), W.useLayoutEffect(function() {
    var E = IS({ target: y, offset: g, container: t.current, box: m.current }), _ = E.topOffset, P = E.leftOffset;
    m.current.style.top = "".concat(_, "px"), m.current.style.left = "".concat(P, "px");
  }, [g.x, g.y, y]);
  var $ = s.width, b = { minWidth: $ + $ / 2 };
  return x.createElement("div", { style: b, className: "rbc-overlay", ref: m }, x.createElement("div", { className: "rbc-overlay-header" }, i.format(u, "dayHeaderFormat")), c.map(function(E, _) {
    return x.createElement(uc, { key: _, type: "popup", localizer: i, event: E, getters: n, onSelect: f, accessors: r, components: o, onDoubleClick: v, onKeyPress: h, continuesPrior: i.lt(r.end(E), u, "day"), continuesAfter: i.gte(r.start(E), d, "day"), slotStart: u, slotEnd: d, selected: Fn(E, a), draggable: true, onDragStart: function() {
      return p(E);
    }, onDragEnd: function() {
      return l();
    } });
  }));
}
var vc = x.forwardRef(function(e2, t) {
  return x.createElement(FS, Object.assign({}, e2, { popperRef: t }));
});
vc.propTypes = { accessors: I.object.isRequired, getters: I.object.isRequired, selected: I.object, components: I.object.isRequired, localizer: I.object.isRequired, position: I.object.isRequired, show: I.func.isRequired, events: I.array.isRequired, slotStart: I.instanceOf(Date).isRequired, slotEnd: I.instanceOf(Date), onSelect: I.func, onDoubleClick: I.func, onKeyPress: I.func, handleDragStart: I.func, style: I.object, offset: I.shape({ x: I.number, y: I.number }) };
function WS(e2) {
  var t = e2.containerRef, r = e2.popupOffset, n = r === void 0 ? 5 : r, a = e2.overlay, o = e2.accessors, i = e2.localizer, s = e2.components, l = e2.getters, c = e2.selected, u = e2.handleSelectEvent, d = e2.handleDoubleClickEvent, f = e2.handleKeyPressEvent, v = e2.handleDragStart, h = e2.onHide, p = e2.overlayDisplay, m = W.useRef(null);
  if (!a.position) return null;
  var y = n;
  isNaN(n) || (y = { x: n, y: n });
  var g = a.position, $ = a.events, b = a.date, E = a.end;
  return x.createElement(ro, { rootClose: true, flip: true, show: true, placement: "bottom", onHide: h, target: a.target }, function(_) {
    var P = _.props;
    return x.createElement(vc, Object.assign({}, P, { containerRef: t, ref: m, target: a.target, offset: y, accessors: o, getters: l, selected: c, components: s, localizer: i, position: g, show: p, events: $, slotStart: b, slotEnd: E, onSelect: u, onDoubleClick: d, onKeyPress: f, handleDragStart: v }));
  });
}
var $o = x.forwardRef(function(e2, t) {
  return x.createElement(WS, Object.assign({}, e2, { containerRef: t }));
});
$o.propTypes = { popupOffset: I.oneOfType([I.number, I.shape({ x: I.number, y: I.number })]), overlay: I.shape({ position: I.object, events: I.array, date: I.instanceOf(Date), end: I.instanceOf(Date) }), accessors: I.object.isRequired, localizer: I.object.isRequired, components: I.object.isRequired, getters: I.object.isRequired, selected: I.object, handleSelectEvent: I.func, handleDoubleClickEvent: I.func, handleKeyPressEvent: I.func, handleDragStart: I.func, onHide: I.func, overlayDisplay: I.func };
function de(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return Le(r, e2, t, { passive: false });
}
function HS(e2, t, r) {
  return !e2 || Ye(e2, document.elementFromPoint(t, r));
}
function zS(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return Lr(a, ".rbc-event", e2);
}
function BS(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return Lr(a, ".rbc-show-more", e2);
}
function pn(e2, t) {
  return !!zS(e2, t);
}
function YS(e2, t) {
  return !!BS(e2, t);
}
function ar(e2) {
  var t = e2;
  return e2.touches && e2.touches.length && (t = e2.touches[0]), { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY };
}
var fs = 5, US = 250, pc = function() {
  function e2(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.global, a = n === void 0 ? false : n, o = r.longPressThreshold, i = o === void 0 ? 250 : o, s = r.validContainers, l = s === void 0 ? [] : s;
    ie(this, e2), this._initialEvent = null, this.selecting = false, this.isDetached = false, this.container = t, this.globalMouse = !t || a, this.longPressThreshold = i, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = de("touchmove", function() {
    }, window), this._removeKeyDownListener = de("keydown", this._keyListener), this._removeKeyUpListener = de("keyup", this._keyListener), this._removeDropFromOutsideListener = de("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = de("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return oe(e2, [{ key: "on", value: function(r, n) {
    var a = this._listeners[r] || (this._listeners[r] = []);
    return a.push(n), { remove: function() {
      var i = a.indexOf(n);
      i !== -1 && a.splice(i, 1);
    } };
  } }, { key: "emit", value: function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    var i, s = this._listeners[r] || [];
    return s.forEach(function(l) {
      i === void 0 && (i = l.apply(void 0, a));
    }), i;
  } }, { key: "teardown", value: function() {
    this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = false, this._lastClickData = null, this.isDetached = true, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
  } }, { key: "isSelected", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? false : vs(n, Dt(r));
  } }, { key: "filter", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? [] : r.filter(this.isSelected, this);
  } }, { key: "_addLongPressListener", value: function(r, n) {
    var a = this, o = null, i = null, s = null, l = function(f) {
      o = setTimeout(function() {
        u(), r(f);
      }, a.longPressThreshold), i = de("touchmove", function() {
        return u();
      }), s = de("touchend", function() {
        return u();
      });
    }, c = de("touchstart", l), u = function() {
      o && clearTimeout(o), i && i(), s && s(), o = null, i = null, s = null;
    };
    return n && l(n), function() {
      u(), c();
    };
  } }, { key: "_addInitialEventListener", value: function() {
    var r = this, n = de("mousedown", function(o) {
      r._removeInitialEventListener(), r._handleInitialEvent(o), r._removeInitialEventListener = de("mousedown", r._handleInitialEvent);
    }), a = de("touchstart", function(o) {
      r._removeInitialEventListener(), r._removeInitialEventListener = r._addLongPressListener(r._handleInitialEvent, o);
    });
    this._removeInitialEventListener = function() {
      n(), a();
    };
  } }, { key: "_dropFromOutsideListener", value: function(r) {
    var n = ar(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dropFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_dragOverFromOutsideListener", value: function(r) {
    var n = ar(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dragOverFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_handleInitialEvent", value: function(r) {
    if (this._initialEvent = r, !this.isDetached) {
      var n = ar(r), a = n.clientX, o = n.clientY, i = n.pageX, s = n.pageY, l = this.container(), c, u;
      if (!(r.which === 3 || r.button === 2 || !HS(l, a, o))) {
        if (!this.globalMouse && l && !Ye(l, r.target)) {
          var d = qS(0), f = d.top, v = d.left, h = d.bottom, p = d.right;
          if (u = Dt(l), c = vs({ top: u.top - f, left: u.left - v, bottom: u.bottom + h, right: u.right + p }, { top: s, left: i }), !c) return;
        }
        var m = this.emit("beforeSelect", this._initialEventData = { isTouch: /^touch/.test(r.type), x: i, y: s, clientX: a, clientY: o });
        if (m !== false) switch (r.type) {
          case "mousedown":
            this._removeEndListener = de("mouseup", this._handleTerminatingEvent), this._onEscListener = de("keydown", this._handleTerminatingEvent), this._removeMoveListener = de("mousemove", this._handleMoveEvent);
            break;
          case "touchstart":
            this._handleMoveEvent(r), this._removeEndListener = de("touchend", this._handleTerminatingEvent), this._removeMoveListener = de("touchmove", this._handleMoveEvent);
            break;
        }
      }
    }
  } }, { key: "_isWithinValidContainer", value: function(r) {
    var n = r.target, a = this.validContainers;
    return !a || !a.length || !n ? true : a.some(function(o) {
      return !!n.closest(o);
    });
  } }, { key: "_handleTerminatingEvent", value: function(r) {
    var n = this.selecting, a = this._selectRect;
    if (!n && r.type.includes("key") && (r = this._initialEvent), this.selecting = false, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!r) {
      var o = !this.container || Ye(this.container(), r.target), i = this._isWithinValidContainer(r);
      return r.key === "Escape" || !i ? this.emit("reset") : !n && o ? this._handleClickEvent(r) : n ? this.emit("select", a) : this.emit("reset");
    }
  } }, { key: "_handleClickEvent", value: function(r) {
    var n = ar(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
    return this._lastClickData && l - this._lastClickData.timestamp < US ? (this._lastClickData = null, this.emit("doubleClick", { x: a, y: o, clientX: i, clientY: s })) : (this._lastClickData = { timestamp: l }, this.emit("click", { x: a, y: o, clientX: i, clientY: s }));
  } }, { key: "_handleMoveEvent", value: function(r) {
    if (!(this._initialEventData === null || this.isDetached)) {
      var n = this._initialEventData, a = n.x, o = n.y, i = ar(r), s = i.pageX, l = i.pageY, c = Math.abs(a - s), u = Math.abs(o - l), d = Math.min(s, a), f = Math.min(l, o), v = this.selecting, h = this.isClick(s, l);
      h && !v && !(c || u) || (!v && !h && this.emit("selectStart", this._initialEventData), h || (this.selecting = true, this._selectRect = { top: f, left: d, x: s, y: l, right: d + c, bottom: f + u }, this.emit("selecting", this._selectRect)), r.preventDefault());
    }
  } }, { key: "_keyListener", value: function(r) {
    this.ctrl = r.metaKey || r.ctrlKey;
  } }, { key: "isClick", value: function(r, n) {
    var a = this._initialEventData, o = a.x, i = a.y, s = a.isTouch;
    return !s && Math.abs(r - o) <= fs && Math.abs(n - i) <= fs;
  } }]);
}();
function qS() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return Ra(e2) !== "object" && (e2 = { top: e2, left: e2, right: e2, bottom: e2 }), e2;
}
function vs(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = Dt(e2), a = n.top, o = n.left, i = n.right, s = i === void 0 ? o : i, l = n.bottom, c = l === void 0 ? a : l, u = Dt(t), d = u.top, f = u.left, v = u.right, h = v === void 0 ? f : v, p = u.bottom, m = p === void 0 ? d : p;
  return !(c - r < d || a + r > m || s - r < f || o + r > h);
}
function Dt(e2) {
  if (!e2.getBoundingClientRect) return e2;
  var t = e2.getBoundingClientRect(), r = t.left + ps("left"), n = t.top + ps("top");
  return { top: n, left: r, right: (e2.offsetWidth || 0) + r, bottom: (e2.offsetHeight || 0) + n };
}
function ps(e2) {
  if (e2 === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (e2 === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
var KS = function(e2) {
  function t(r, n) {
    var a;
    return ie(this, t), a = pe(this, t, [r, n]), a.state = { selecting: false }, a.containerRef = W.createRef(), a;
  }
  return ve(t, e2), oe(t, [{ key: "componentDidMount", value: function() {
    this.props.selectable && this._selectable();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable();
  } }, { key: "componentDidUpdate", value: function(n) {
    !n.selectable && this.props.selectable && this._selectable(), n.selectable && !this.props.selectable && this._teardownSelectable();
  } }, { key: "render", value: function() {
    var n = this.props, a = n.range, o = n.getNow, i = n.getters, s = n.date, l = n.components.dateCellWrapper, c = n.localizer, u = this.state, d = u.selecting, f = u.startIdx, v = u.endIdx, h = o();
    return x.createElement("div", { className: "rbc-row-bg", ref: this.containerRef }, a.map(function(p, m) {
      var y = d && m >= f && m <= v, g = i.dayProp(p), $ = g.className, b = g.style;
      return x.createElement(l, { key: m, value: p, range: a }, x.createElement("div", { style: b, className: te("rbc-day-bg", $, y && "rbc-selected-cell", c.isSameDate(p, h) && "rbc-today", s && c.neq(s, p, "month") && "rbc-off-range-bg") }));
    }));
  } }, { key: "_selectable", value: function() {
    var n = this, a = this.containerRef.current, o = this._selector = new pc(this.props.container, { longPressThreshold: this.props.longPressThreshold }), i = function(l, c) {
      if (!pn(a, l) && !YS(a, l)) {
        var u = Dt(a), d = n.props, f = d.range, v = d.rtl;
        if (jS(u, l)) {
          var h = fc(u, l.x, v, f.length);
          n._selectSlot({ startIdx: h, endIdx: h, action: c, box: l });
        }
      }
      n._initial = {}, n.setState({ selecting: false });
    };
    o.on("selecting", function(s) {
      var l = n.props, c = l.range, u = l.rtl, d = -1, f = -1;
      if (n.state.selecting || (ee(n.props.onSelectStart, [s]), n._initial = { x: s.x, y: s.y }), o.isSelected(a)) {
        var v = Dt(a), h = LS(n._initial, v, s, c.length, u);
        d = h.startIdx, f = h.endIdx;
      }
      n.setState({ selecting: true, startIdx: d, endIdx: f });
    }), o.on("beforeSelect", function(s) {
      if (n.props.selectable === "ignoreEvents") return !pn(n.containerRef.current, s);
    }), o.on("click", function(s) {
      return i(s, "click");
    }), o.on("doubleClick", function(s) {
      return i(s, "doubleClick");
    }), o.on("select", function(s) {
      n._selectSlot(Z(Z({}, n.state), {}, { action: "select", bounds: s })), n._initial = {}, n.setState({ selecting: false }), ee(n.props.onSelectEnd, [n.state]);
    });
  } }, { key: "_teardownSelectable", value: function() {
    this._selector && (this._selector.teardown(), this._selector = null);
  } }, { key: "_selectSlot", value: function(n) {
    var a = n.endIdx, o = n.startIdx, i = n.action, s = n.bounds, l = n.box;
    a !== -1 && o !== -1 && this.props.onSelectSlot && this.props.onSelectSlot({ start: o, end: a, action: i, bounds: s, box: l, resourceId: this.props.resourceId });
  } }]);
}(x.Component), Ee = { propTypes: { slotMetrics: I.object.isRequired, selected: I.object, isAllDay: I.bool, accessors: I.object.isRequired, localizer: I.object.isRequired, components: I.object.isRequired, getters: I.object.isRequired, onSelect: I.func, onDoubleClick: I.func, onKeyPress: I.func }, defaultProps: { segments: [], selected: {} }, renderEvent: function(t, r) {
  var n = t.selected;
  t.isAllDay;
  var a = t.accessors, o = t.getters, i = t.onSelect, s = t.onDoubleClick, l = t.onKeyPress, c = t.localizer, u = t.slotMetrics, d = t.components, f = t.resizable, v = u.continuesPrior(r), h = u.continuesAfter(r);
  return x.createElement(uc, { event: r, getters: o, localizer: c, accessors: a, components: d, onSelect: i, onDoubleClick: s, onKeyPress: l, continuesPrior: v, continuesAfter: h, slotStart: u.first, slotEnd: u.last, selected: Fn(r, n), resizable: f });
}, renderSpan: function(t, r, n) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", o = Math.abs(r) / t * 100 + "%";
  return x.createElement("div", { key: n, className: "rbc-row-segment", style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o } }, a);
} }, hc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this, a = this.props, o = a.segments, i = a.slotMetrics.slots, s = a.className, l = 1;
    return x.createElement("div", { className: te(s, "rbc-row") }, o.reduce(function(c, u, d) {
      var f = u.event, v = u.left, h = u.right, p = u.span, m = "_lvl_" + d, y = v - l, g = Ee.renderEvent(n.props, f);
      return y && c.push(Ee.renderSpan(i, y, "".concat(m, "_gap"))), c.push(Ee.renderSpan(i, p, m, g)), l = h + 1, c;
    }, []));
  } }]);
}(x.Component);
hc.defaultProps = Z({}, Ee.defaultProps);
function mc(e2) {
  var t = e2.dateRange, r = e2.unit, n = r === void 0 ? "day" : r, a = e2.localizer;
  return { first: t[0], last: a.add(t[t.length - 1], 1, n) };
}
function GS(e2, t, r, n) {
  var a = mc({ dateRange: t, localizer: n }), o = a.first, i = a.last, s = n.diff(o, i, "day"), l = n.max(n.startOf(r.start(e2), "day"), o), c = n.min(n.ceil(r.end(e2), "day"), i), u = Bw(t, function(f) {
    return n.isSameDate(f, l);
  }), d = n.diff(l, c, "day");
  return d = Math.min(d, s), d = Math.max(d - n.segmentOffset, 1), { event: e2, span: d, left: u + 1, right: Math.max(u + d, 1) };
}
function Oa(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, r, n, a, o = [], i = [];
  for (r = 0; r < e2.length; r++) {
    for (a = e2[r], n = 0; n < o.length && VS(a, o[n]); n++) ;
    n >= t ? i.push(a) : (o[n] || (o[n] = [])).push(a);
  }
  for (r = 0; r < o.length; r++) o[r].sort(function(s, l) {
    return s.left - l.left;
  });
  return { levels: o, extra: i };
}
function Er(e2, t, r, n, a) {
  var o = { start: n.start(e2), end: n.end(e2) }, i = { start: t, end: r };
  return a.inEventRange({ event: o, range: i });
}
function VS(e2, t) {
  return t.some(function(r) {
    return r.left <= e2.right && r.right >= e2.left;
  });
}
function XS(e2, t, r) {
  var n = Qr(e2), a = [], o = [];
  n.forEach(function(l) {
    var c = t.start(l), u = t.end(l);
    r.daySpan(c, u) > 1 ? a.push(l) : o.push(l);
  });
  var i = a.sort(function(l, c) {
    return Ta(l, c, t, r);
  }), s = o.sort(function(l, c) {
    return Ta(l, c, t, r);
  });
  return [].concat(Qr(i), Qr(s));
}
function Ta(e2, t, r, n) {
  var a = { start: r.start(e2), end: r.end(e2), allDay: r.allDay(e2) }, o = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
  return n.sortEvents({ evtA: a, evtB: o });
}
var ka = function(t, r) {
  return t.left <= r && t.right >= r;
}, ca = function(t, r) {
  return t.filter(function(n) {
    return ka(n, r);
  }).map(function(n) {
    return n.event;
  });
}, gc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    for (var n = this.props, a = n.segments, o = n.slotMetrics.slots, i = Oa(a).levels[0], s = 1, l = 1, c = []; s <= o; ) {
      var u = "_lvl_" + s, d = i.filter(function(b) {
        return ka(b, s);
      })[0] || {}, f = d.event, v = d.left, h = d.right, p = d.span;
      if (!f) {
        var m = this.getHiddenEventsForSlot(a, s);
        if (m.length > 0) {
          var y = s - l;
          y && c.push(Ee.renderSpan(o, y, u + "_gap")), c.push(Ee.renderSpan(o, 1, u, this.renderShowMore(a, s))), l = s = s + 1;
          continue;
        }
        s++;
        continue;
      }
      var g = Math.max(0, v - l);
      if (this.canRenderSlotEvent(v, p)) {
        var $ = Ee.renderEvent(this.props, f);
        g && c.push(Ee.renderSpan(o, g, u + "_gap")), c.push(Ee.renderSpan(o, p, u, $)), l = s = h + 1;
      } else g && c.push(Ee.renderSpan(o, g, u + "_gap")), c.push(Ee.renderSpan(o, 1, u, this.renderShowMore(a, s))), l = s = s + 1;
    }
    return x.createElement("div", { className: "rbc-row" }, c);
  } }, { key: "getHiddenEventsForSlot", value: function(n, a) {
    var o = ca(n, a), i = Oa(n).levels[0], s = i.filter(function(l) {
      return ka(l, a);
    }).map(function(l) {
      return l.event;
    });
    return o.filter(function(l) {
      return !s.some(function(c) {
        return c === l;
      });
    });
  } }, { key: "canRenderSlotEvent", value: function(n, a) {
    var o = this.props.segments;
    return tx(n, n + a).every(function(i) {
      var s = ca(o, i).length;
      return s === 1;
    });
  } }, { key: "renderShowMore", value: function(n, a) {
    var o = this, i = this.props, s = i.localizer, l = i.slotMetrics, c = i.components, u = l.getEventsForSlot(a), d = ca(n, a), f = d.length;
    if (c != null && c.showMore) {
      var v = c.showMore, h = l.getDateForSlot(a - 1);
      return f ? x.createElement(v, { localizer: s, slotDate: h, slot: a, count: f, events: u, remainingEvents: d }) : false;
    }
    return f ? x.createElement("button", { type: "button", key: "sm_" + a, className: te("rbc-button-link", "rbc-show-more"), onClick: function(m) {
      return o.showMore(a, m);
    } }, s.messages.showMore(f, d, u)) : false;
  } }, { key: "showMore", value: function(n, a) {
    a.preventDefault(), a.stopPropagation(), this.props.onShowMore(n, a.target);
  } }]);
}(x.Component);
gc.defaultProps = Z({}, Ee.defaultProps);
var ZS = function(t) {
  var r = t.children;
  return x.createElement("div", { className: "rbc-row-content-scroll-container" }, r);
}, JS = function(t, r) {
  return t.left <= r && t.right >= r;
}, QS = function(t, r) {
  return t[0].range === r[0].range && t[0].events === r[0].events;
};
function yc() {
  return jl(function(e2) {
    for (var t = e2.range, r = e2.events, n = e2.maxRows, a = e2.minRows, o = e2.accessors, i = e2.localizer, s = mc({ dateRange: t, localizer: i }), l = s.first, c = s.last, u = r.map(function(p) {
      return GS(p, t, o, i);
    }), d = Oa(u, Math.max(n - 1, 1)), f = d.levels, v = d.extra, h = v.length > 0 ? a - 1 : a; f.length < h; ) f.push([]);
    return { first: l, last: c, levels: f, extra: v, range: t, slots: t.length, clone: function(m) {
      var y = yc();
      return y(Z(Z({}, e2), m));
    }, getDateForSlot: function(m) {
      return t[m];
    }, getSlotForDate: function(m) {
      return t.find(function(y) {
        return i.isSameDate(y, m);
      });
    }, getEventsForSlot: function(m) {
      return u.filter(function(y) {
        return JS(y, m);
      }).map(function(y) {
        return y.event;
      });
    }, continuesPrior: function(m) {
      return i.continuesPrior(o.start(m), l);
    }, continuesAfter: function(m) {
      var y = o.start(m), g = o.end(m);
      return i.continuesAfter(y, g, c);
    } };
  }, QS);
}
var Dr = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.handleSelectSlot = function(i) {
      var s = r.props, l = s.range, c = s.onSelectSlot;
      c(l.slice(i.start, i.end + 1), i);
    }, r.handleShowMore = function(i, s) {
      var l = r.props, c = l.range, u = l.onShowMore, d = r.slotMetrics(r.props), f = xn(r.containerRef.current, ".rbc-row-bg")[0], v;
      f && (v = f.children[i - 1]);
      var h = d.getEventsForSlot(i);
      u(h, c[i - 1], v, i, s);
    }, r.getContainer = function() {
      var i = r.props.container;
      return i ? i() : r.containerRef.current;
    }, r.renderHeadingCell = function(i, s) {
      var l = r.props, c = l.renderHeader, u = l.getNow, d = l.localizer;
      return c({ date: i, key: "header_".concat(s), className: te("rbc-date-cell", d.isSameDate(i, u()) && "rbc-now") });
    }, r.renderDummy = function() {
      var i = r.props, s = i.className, l = i.range, c = i.renderHeader, u = i.showAllEvents;
      return x.createElement("div", { className: s, ref: r.containerRef }, x.createElement("div", { className: te("rbc-row-content", u && "rbc-row-content-scrollable") }, c && x.createElement("div", { className: "rbc-row", ref: r.headingRowRef }, l.map(r.renderHeadingCell)), x.createElement("div", { className: "rbc-row", ref: r.eventRowRef }, x.createElement("div", { className: "rbc-row-segment" }, x.createElement("div", { className: "rbc-event" }, x.createElement("div", { className: "rbc-event-content" }, "\xA0"))))));
    }, r.containerRef = W.createRef(), r.headingRowRef = W.createRef(), r.eventRowRef = W.createRef(), r.slotMetrics = yc(), r;
  }
  return ve(t, e2), oe(t, [{ key: "getRowLimit", value: function() {
    var n, a = gt(this.eventRowRef.current), o = (n = this.headingRowRef) !== null && n !== void 0 && n.current ? gt(this.headingRowRef.current) : 0, i = gt(this.containerRef.current) - o;
    return Math.max(Math.floor(i / a), 1);
  } }, { key: "render", value: function() {
    var n = this.props, a = n.date, o = n.rtl, i = n.range, s = n.className, l = n.selected, c = n.selectable, u = n.renderForMeasure, d = n.accessors, f = n.getters, v = n.components, h = n.getNow, p = n.renderHeader, m = n.onSelect, y = n.localizer, g = n.onSelectStart, $ = n.onSelectEnd, b = n.onDoubleClick, E = n.onKeyPress, _ = n.resourceId, P = n.longPressThreshold, N = n.isAllDay, M = n.resizable, C = n.showAllEvents;
    if (u) return this.renderDummy();
    var D = this.slotMetrics(this.props), z = D.levels, F = D.extra, T = C ? ZS : je, O = v.weekWrapper, S = { selected: l, accessors: d, getters: f, localizer: y, components: v, onSelect: m, onDoubleClick: b, onKeyPress: E, resourceId: _, slotMetrics: D, resizable: M };
    return x.createElement("div", { className: s, role: "rowgroup", ref: this.containerRef }, x.createElement(KS, { localizer: y, date: a, getNow: h, rtl: o, range: i, selectable: c, container: this.getContainer, getters: f, onSelectStart: g, onSelectEnd: $, onSelectSlot: this.handleSelectSlot, components: v, longPressThreshold: P, resourceId: _ }), x.createElement("div", { className: te("rbc-row-content", C && "rbc-row-content-scrollable"), role: "row" }, p && x.createElement("div", { className: "rbc-row ", ref: this.headingRowRef }, i.map(this.renderHeadingCell)), x.createElement(T, null, x.createElement(O, Object.assign({ isAllDay: N }, S, { rtl: this.props.rtl }), z.map(function(R, L) {
      return x.createElement(hc, Object.assign({ key: L, segments: R }, S));
    }), !!F.length && x.createElement(gc, Object.assign({ segments: F, onShowMore: this.handleShowMore }, S))))));
  } }]);
}(x.Component);
Dr.defaultProps = { minRows: 0, maxRows: 1 / 0 };
var Eo = function(t) {
  var r = t.label;
  return x.createElement("span", { role: "columnheader", "aria-sort": "none" }, r);
}, eO = function(t) {
  var r = t.label, n = t.drilldownView, a = t.onDrillDown;
  return n ? x.createElement("button", { type: "button", className: "rbc-button-link", onClick: a }, r) : x.createElement("span", null, r);
}, tO = ["date", "className"], rO = function(t, r, n, a, o) {
  return t.filter(function(i) {
    return Er(i, r, n, a, o);
  });
}, Wn = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.getContainer = function() {
      return r.containerRef.current;
    }, r.renderWeek = function(i, s) {
      var l = r.props, c = l.events, u = l.components, d = l.selectable, f = l.getNow, v = l.selected, h = l.date, p = l.localizer, m = l.longPressThreshold, y = l.accessors, g = l.getters, $ = l.showAllEvents, b = r.state, E = b.needLimitMeasure, _ = b.rowLimit, P = rO(Qr(c), i[0], i[i.length - 1], y, p), N = XS(P, y, p);
      return x.createElement(Dr, { key: s, ref: s === 0 ? r.slotRowRef : void 0, container: r.getContainer, className: "rbc-month-row", getNow: f, date: h, range: i, events: N, maxRows: $ ? 1 / 0 : _, selected: v, selectable: d, components: u, accessors: y, getters: g, localizer: p, renderHeader: r.readerDateHeading, renderForMeasure: E, onShowMore: r.handleShowMore, onSelect: r.handleSelectEvent, onDoubleClick: r.handleDoubleClickEvent, onKeyPress: r.handleKeyPressEvent, onSelectSlot: r.handleSelectSlot, longPressThreshold: m, rtl: r.props.rtl, resizable: r.props.resizable, showAllEvents: $ });
    }, r.readerDateHeading = function(i) {
      var s = i.date, l = i.className, c = We(i, tO), u = r.props, d = u.date, f = u.getDrilldownView, v = u.localizer, h = v.neq(d, s, "month"), p = v.isSameDate(s, d), m = f(s), y = v.format(s, "dateFormat"), g = r.props.components.dateHeader || eO;
      return x.createElement("div", Object.assign({}, c, { className: te(l, h && "rbc-off-range", p && "rbc-current"), role: "cell" }), x.createElement(g, { label: y, date: s, drilldownView: m, isOffRange: h, onDrillDown: function(b) {
        return r.handleHeadingClick(s, m, b);
      } }));
    }, r.handleSelectSlot = function(i, s) {
      r._pendingSelection = r._pendingSelection.concat(i), clearTimeout(r._selectTimer), r._selectTimer = setTimeout(function() {
        return r.selectDates(s);
      });
    }, r.handleHeadingClick = function(i, s, l) {
      l.preventDefault(), r.clearSelection(), ee(r.props.onDrillDown, [i, s]);
    }, r.handleSelectEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onSelectEvent, s);
    }, r.handleDoubleClickEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onDoubleClickEvent, s);
    }, r.handleKeyPressEvent = function() {
      r.clearSelection();
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onKeyPressEvent, s);
    }, r.handleShowMore = function(i, s, l, c, u) {
      var d = r.props, f = d.popup, v = d.onDrillDown, h = d.onShowMore, p = d.getDrilldownView, m = d.doShowMoreDrillDown;
      if (r.clearSelection(), f) {
        var y = bn(l, r.containerRef.current);
        r.setState({ overlay: { date: s, events: i, position: y, target: u } });
      } else m && ee(v, [s, p(s) || me.DAY]);
      ee(h, [i, s, c]);
    }, r.overlayDisplay = function() {
      r.setState({ overlay: null });
    }, r.state = { rowLimit: 5, needLimitMeasure: true, date: null }, r.containerRef = W.createRef(), r.slotRowRef = W.createRef(), r._bgRows = [], r._pendingSelection = [], r;
  }
  return ve(t, e2), oe(t, [{ key: "componentDidMount", value: function() {
    var n = this, a;
    this.state.needLimitMeasure && this.measureRowLimit(this.props), window.addEventListener("resize", this._resizeListener = function() {
      a || Mr(function() {
        a = false, n.setState({ needLimitMeasure: true });
      });
    }, false);
  } }, { key: "componentDidUpdate", value: function() {
    this.state.needLimitMeasure && this.measureRowLimit(this.props);
  } }, { key: "componentWillUnmount", value: function() {
    window.removeEventListener("resize", this._resizeListener, false);
  } }, { key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.className, s = o.visibleDays(a, o), l = Ff(s, 7);
    return this._weekCount = l.length, x.createElement("div", { className: te("rbc-month-view", i), role: "table", "aria-label": "Month View", ref: this.containerRef }, x.createElement("div", { className: "rbc-row rbc-month-header", role: "row" }, this.renderHeaders(l[0])), l.map(this.renderWeek), this.props.popup && this.renderOverlay());
  } }, { key: "renderHeaders", value: function(n) {
    var a = this.props, o = a.localizer, i = a.components, s = n[0], l = n[n.length - 1], c = i.header || Eo;
    return o.range(s, l, "day").map(function(u, d) {
      return x.createElement("div", { key: "header_" + d, className: "rbc-header" }, x.createElement(c, { date: u, localizer: o, label: o.format(u, "weekdayFormat") }));
    });
  } }, { key: "renderOverlay", value: function() {
    var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, d = s.getters, f = s.selected, v = s.popupOffset, h = s.handleDragStart, p = function() {
      return o.setState({ overlay: null });
    };
    return x.createElement($o, { overlay: i, accessors: l, localizer: c, components: u, getters: d, selected: f, popupOffset: v, ref: this.containerRef, handleKeyPressEvent: this.handleKeyPressEvent, handleSelectEvent: this.handleSelectEvent, handleDoubleClickEvent: this.handleDoubleClickEvent, handleDragStart: h, show: !!i.position, overlayDisplay: this.overlayDisplay, onHide: p });
  } }, { key: "measureRowLimit", value: function() {
    this.setState({ needLimitMeasure: false, rowLimit: this.slotRowRef.current.getRowLimit() });
  } }, { key: "selectDates", value: function(n) {
    var a = this._pendingSelection.slice();
    this._pendingSelection = [], a.sort(function(s, l) {
      return +s - +l;
    });
    var o = new Date(a[0]), i = new Date(a[a.length - 1]);
    i.setDate(a[a.length - 1].getDate() + 1), ee(this.props.onSelectSlot, { slots: a, start: o, end: i, action: n.action, bounds: n.bounds, box: n.box });
  } }, { key: "clearSelection", value: function() {
    clearTimeout(this._selectTimer), this._pendingSelection = [];
  } }], [{ key: "getDerivedStateFromProps", value: function(n, a) {
    var o = n.date, i = n.localizer;
    return { date: o, needLimitMeasure: i.neq(o, a.date, "month") };
  } }]);
}(x.Component);
Wn.range = function(e2, t) {
  var r = t.localizer, n = r.firstVisibleDay(e2, r), a = r.lastVisibleDay(e2, r);
  return { start: n, end: a };
};
Wn.navigate = function(e2, t, r) {
  var n = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return n.add(e2, -1, "month");
    case we.NEXT:
      return n.add(e2, 1, "month");
    default:
      return e2;
  }
};
Wn.title = function(e2, t) {
  var r = t.localizer;
  return r.format(e2, "monthHeaderFormat");
};
var hs = function(t) {
  var r = t.min, n = t.max, a = t.step, o = t.slots, i = t.localizer;
  return "".concat(+i.startOf(r, "minutes")) + "".concat(+i.startOf(n, "minutes")) + "".concat(a, "-").concat(o);
};
function Do(e2) {
  for (var t = e2.min, r = e2.max, n = e2.step, a = e2.timeslots, o = e2.localizer, i = hs({ step: n, localizer: o }), s = 1 + o.getTotalMin(t, r), l = o.getMinutesFromMidnight(t), c = Math.ceil((s - 1) / (n * a)), u = c * a, d = new Array(c), f = new Array(u), v = 0; v < c; v++) {
    d[v] = new Array(a);
    for (var h = 0; h < a; h++) {
      var p = v * a + h, m = p * n;
      f[p] = d[v][h] = o.getSlotDate(t, l, m);
    }
  }
  var y = f.length * n;
  f.push(o.getSlotDate(t, l, y));
  function g($) {
    var b = o.diff(t, $, "minutes") + o.getDstOffset(t, $);
    return Math.min(b, s);
  }
  return { groups: d, update: function(b) {
    return hs(b) !== i ? Do(b) : this;
  }, dateIsInGroup: function(b, E) {
    var _ = d[E + 1];
    return o.inRange(b, d[E][0], _ ? _[0] : r, "minutes");
  }, nextSlot: function(b) {
    var E = f[Math.min(f.findIndex(function(_) {
      return _ === b || o.eq(_, b);
    }) + 1, f.length - 1)];
    return o.eq(E, b) && (E = o.add(b, n, "minutes")), E;
  }, closestSlotToPosition: function(b) {
    var E = Math.min(f.length - 1, Math.max(0, Math.floor(b * u)));
    return f[E];
  }, closestSlotFromPoint: function(b, E) {
    var _ = Math.abs(E.top - E.bottom);
    return this.closestSlotToPosition((b.y - E.top) / _);
  }, closestSlotFromDate: function(b) {
    var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (o.lt(b, t, "minutes")) return f[0];
    if (o.gt(b, r, "minutes")) return f[f.length - 1];
    var _ = o.diff(t, b, "minutes");
    return f[(_ - _ % n) / n + E];
  }, startsBeforeDay: function(b) {
    return o.lt(b, t, "day");
  }, startsAfterDay: function(b) {
    return o.gt(b, r, "day");
  }, startsBefore: function(b) {
    return o.lt(o.merge(t, b), t, "minutes");
  }, startsAfter: function(b) {
    return o.gt(o.merge(r, b), r, "minutes");
  }, getRange: function(b, E, _, P) {
    _ || (b = o.min(r, o.max(t, b))), P || (E = o.min(r, o.max(t, E)));
    var N = g(b), M = g(E), C = M > n * u && !o.eq(r, E) ? (N - n) / (n * u) * 100 : N / (n * u) * 100;
    return { top: C, height: M / (n * u) * 100 - C, start: g(b), startDate: b, end: g(E), endDate: E };
  }, getCurrentTimePosition: function(b) {
    var E = g(b), _ = E / (n * u) * 100;
    return _;
  } };
}
var nO = function() {
  function e2(t, r) {
    var n = r.accessors, a = r.slotMetrics;
    ie(this, e2);
    var o = a.getRange(n.start(t), n.end(t)), i = o.start, s = o.startDate, l = o.end, c = o.endDate, u = o.top, d = o.height;
    this.start = i, this.end = l, this.startMs = +s, this.endMs = +c, this.top = u, this.height = d, this.data = t;
  }
  return oe(e2, [{ key: "_width", get: function() {
    if (this.rows) {
      var r = this.rows.reduce(function(a, o) {
        return Math.max(a, o.leaves.length + 1);
      }, 0) + 1;
      return 100 / r;
    }
    if (this.leaves) {
      var n = 100 - this.container._width;
      return n / (this.leaves.length + 1);
    }
    return this.row._width;
  } }, { key: "width", get: function() {
    var r = this._width, n = Math.min(100, this._width * 1.7);
    if (this.rows) return n;
    if (this.leaves) return this.leaves.length > 0 ? n : r;
    var a = this.row.leaves, o = a.indexOf(this);
    return o === a.length - 1 ? r : n;
  } }, { key: "xOffset", get: function() {
    if (this.rows) return 0;
    if (this.leaves) return this.container._width;
    var r = this.row, n = r.leaves, a = r.xOffset, o = r._width, i = n.indexOf(this) + 1;
    return a + i * o;
  } }]);
}();
function aO(e2, t, r) {
  return Math.abs(t.start - e2.start) < r || t.start > e2.start && t.start < e2.end;
}
function oO(e2) {
  for (var t = x$(e2, ["startMs", function(s) {
    return -s.endMs;
  }]), r = []; t.length > 0; ) {
    var n = t.shift();
    r.push(n);
    for (var a = 0; a < t.length; a++) {
      var o = t[a];
      if (!(n.endMs > o.startMs)) {
        if (a > 0) {
          var i = t.splice(a, 1)[0];
          r.push(i);
        }
        break;
      }
    }
  }
  return r;
}
function bc(e2) {
  for (var t = e2.events, r = e2.minimumStartDifference, n = e2.slotMetrics, a = e2.accessors, o = t.map(function(u) {
    return new nO(u, { slotMetrics: n, accessors: a });
  }), i = oO(o), s = [], l = function() {
    var d = i[c], f = s.find(function(p) {
      return p.end > d.start || Math.abs(d.start - p.start) < r;
    });
    if (!f) return d.rows = [], s.push(d), 1;
    d.container = f;
    for (var v = null, h = f.rows.length - 1; !v && h >= 0; h--) aO(f.rows[h], d, r) && (v = f.rows[h]);
    v ? (v.leaves.push(d), d.row = v) : (d.leaves = [], f.rows.push(d));
  }, c = 0; c < i.length; c++) l();
  return i.map(function(u) {
    return { event: u.data, style: { top: u.top, height: u.height, width: u.width, xOffset: Math.max(0, u.xOffset) } };
  });
}
function wc(e2, t, r) {
  for (var n = 0; n < e2.friends.length; ++n) if (!(r.indexOf(e2.friends[n]) > -1)) {
    t = t > e2.friends[n].idx ? t : e2.friends[n].idx, r.push(e2.friends[n]);
    var a = wc(e2.friends[n], t, r);
    t = t > a ? t : a;
  }
  return t;
}
function iO(e2) {
  var t = e2.events, r = e2.minimumStartDifference, n = e2.slotMetrics, a = e2.accessors, o = bc({ events: t, minimumStartDifference: r, slotMetrics: n, accessors: a });
  o.sort(function(O, S) {
    return O = O.style, S = S.style, O.top !== S.top ? O.top > S.top ? 1 : -1 : O.height !== S.height ? O.top + O.height < S.top + S.height ? 1 : -1 : 0;
  });
  for (var i = 0; i < o.length; ++i) o[i].friends = [], delete o[i].style.left, delete o[i].style.left, delete o[i].idx, delete o[i].size;
  for (var s = 0; s < o.length - 1; ++s) for (var l = o[s], c = l.style.top, u = l.style.top + l.style.height, d = s + 1; d < o.length; ++d) {
    var f = o[d], v = f.style.top, h = f.style.top + f.style.height;
    (v >= c && h <= u || h > c && h <= u || v >= c && v < u) && (l.friends.push(f), f.friends.push(l));
  }
  for (var p = 0; p < o.length; ++p) {
    for (var m = o[p], y = [], g = 0; g < 100; ++g) y.push(1);
    for (var $ = 0; $ < m.friends.length; ++$) m.friends[$].idx !== void 0 && (y[m.friends[$].idx] = 0);
    m.idx = y.indexOf(1);
  }
  for (var b = 0; b < o.length; ++b) {
    var E = 0;
    if (!o[b].size) {
      var _ = [], P = wc(o[b], 0, _);
      E = 100 / (P + 1), o[b].size = E;
      for (var N = 0; N < _.length; ++N) _[N].size = E;
    }
  }
  for (var M = 0; M < o.length; ++M) {
    var C = o[M];
    C.style.left = C.idx * C.size;
    for (var D = 0, z = 0; z < C.friends.length; ++z) {
      var F = C.friends[z].idx;
      D = D > F ? D : F;
    }
    D <= C.idx && (C.size = 100 - C.idx * C.size);
    var T = C.idx === 0 ? 0 : 3;
    C.style.width = "calc(".concat(C.size, "% - ").concat(T, "px)"), C.style.height = "calc(".concat(C.style.height, "% - 2px)"), C.style.xOffset = "calc(".concat(C.style.left, "% + ").concat(T, "px)");
  }
  return o;
}
var ms = { overlap: bc, "no-overlap": iO };
function sO(e2) {
  return !!(e2 && e2.constructor && e2.call && e2.apply);
}
function lO(e2) {
  e2.events, e2.minimumStartDifference, e2.slotMetrics, e2.accessors;
  var t = e2.dayLayoutAlgorithm, r = t;
  return t in ms && (r = ms[t]), sO(r) ? r.apply(this, arguments) : [];
}
var xc = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.renderSlot, o = n.resource, i = n.group, s = n.getters, l = n.components, c = l === void 0 ? {} : l, u = c.timeSlotWrapper, d = u === void 0 ? je : u, f = s ? s.slotGroupProp(i) : {};
    return x.createElement("div", Object.assign({ className: "rbc-timeslot-group" }, f), i.map(function(v, h) {
      var p = s ? s.slotProp(v, o) : {};
      return x.createElement(d, { key: h, value: v, resource: o }, x.createElement("div", Object.assign({}, p, { className: te("rbc-time-slot", p.className) }), a && a(v, h)));
    }));
  } }]);
}(W.Component);
function Kr(e2) {
  return typeof e2 == "string" ? e2 : e2 + "%";
}
function cO(e2) {
  var t = e2.style, r = e2.className, n = e2.event, a = e2.accessors, o = e2.rtl, i = e2.selected, s = e2.label, l = e2.continuesPrior, c = e2.continuesAfter, u = e2.getters, d = e2.onClick, f = e2.onDoubleClick, v = e2.isBackgroundEvent, h = e2.onKeyPress, p = e2.components, m = p.event, y = p.eventWrapper, g = a.title(n), $ = a.tooltip(n), b = a.end(n), E = a.start(n), _ = u.eventProp(n, E, b, i), P = [x.createElement("div", { key: "1", className: "rbc-event-label" }, s), x.createElement("div", { key: "2", className: "rbc-event-content" }, m ? x.createElement(m, { event: n, title: g }) : g)], N = t.height, M = t.top, C = t.width, D = t.xOffset, z = Z(Z({}, _.style), {}, ht({ top: Kr(M), height: Kr(N), width: Kr(C) }, o ? "right" : "left", Kr(D)));
  return x.createElement(y, Object.assign({ type: "time" }, e2), x.createElement("div", { role: "button", tabIndex: 0, onClick: d, onDoubleClick: f, style: z, onKeyDown: h, title: $ ? (typeof s == "string" ? s + ": " : "") + $ : void 0, className: te(v ? "rbc-background-event" : "rbc-event", r, _.className, { "rbc-selected": i, "rbc-event-continues-earlier": l, "rbc-event-continues-later": c }) }, P));
}
var uO = function(t) {
  var r = t.children, n = t.className, a = t.style, o = t.innerRef;
  return x.createElement("div", { className: n, style: a, ref: o }, r);
}, dO = x.forwardRef(function(e2, t) {
  return x.createElement(uO, Object.assign({}, e2, { innerRef: t }));
}), fO = ["dayProp"], vO = ["eventContainerWrapper", "timeIndicatorWrapper"], $c = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.state = { selecting: false, timeIndicatorPosition: null }, r.intervalTriggered = false, r.renderEvents = function(i) {
      var s = i.events, l = i.isBackgroundEvent, c = r.props, u = c.rtl, d = c.selected, f = c.accessors, v = c.localizer, h = c.getters, p = c.components, m = c.step, y = c.timeslots, g = c.dayLayoutAlgorithm, $ = c.resizable, b = r, E = b.slotMetrics, _ = v.messages, P = lO({ events: s, accessors: f, slotMetrics: E, minimumStartDifference: Math.ceil(m * y / 2), dayLayoutAlgorithm: g });
      return P.map(function(N, M) {
        var C, D = N.event, z = N.style, F = f.end(D), T = f.start(D), O = (C = f.eventId(D)) !== null && C !== void 0 ? C : "evt_" + M, S = "eventTimeRangeFormat", R, L = E.startsBeforeDay(T), B = E.startsAfterDay(F);
        L ? S = "eventTimeRangeEndFormat" : B && (S = "eventTimeRangeStartFormat"), L && B ? R = _.allDay : R = v.format({ start: T, end: F }, S);
        var U = L || E.startsBefore(T), q = B || E.startsAfter(F);
        return x.createElement(cO, { style: z, event: D, label: R, key: O, getters: h, rtl: u, components: p, continuesPrior: U, continuesAfter: q, accessors: f, resource: r.props.resource, selected: Fn(D, d), onClick: function(A) {
          return r._select(Z(Z(Z({}, D), r.props.resource && { sourceResource: r.props.resource }), l && { isBackgroundEvent: true }), A);
        }, onDoubleClick: function(A) {
          return r._doubleClick(D, A);
        }, isBackgroundEvent: l, onKeyPress: function(A) {
          return r._keyPress(D, A);
        }, resizable: $ });
      });
    }, r._selectable = function() {
      var i = r.containerRef.current, s = r.props, l = s.longPressThreshold, c = s.localizer, u = r._selector = new pc(function() {
        return i;
      }, { longPressThreshold: l }), d = function(p) {
        var m = r.props.onSelecting, y = r.state || {}, g = f(p), $ = g.startDate, b = g.endDate;
        m && (c.eq(y.startDate, $, "minutes") && c.eq(y.endDate, b, "minutes") || m({ start: $, end: b, resourceId: r.props.resource }) === false) || (r.state.start !== g.start || r.state.end !== g.end || r.state.selecting !== g.selecting) && r.setState(g);
      }, f = function(p) {
        var m = r.slotMetrics.closestSlotFromPoint(p, Dt(i));
        r.state.selecting || (r._initialSlot = m);
        var y = r._initialSlot;
        c.lte(y, m) ? m = r.slotMetrics.nextSlot(m) : c.gt(y, m) && (y = r.slotMetrics.nextSlot(y));
        var g = r.slotMetrics.getRange(c.min(y, m), c.max(y, m));
        return Z(Z({}, g), {}, { selecting: true, top: "".concat(g.top, "%"), height: "".concat(g.height, "%") });
      }, v = function(p, m) {
        if (!pn(r.containerRef.current, p)) {
          var y = f(p), g = y.startDate, $ = y.endDate;
          r._selectSlot({ startDate: g, endDate: $, action: m, box: p });
        }
        r.setState({ selecting: false });
      };
      u.on("selecting", d), u.on("selectStart", d), u.on("beforeSelect", function(h) {
        if (r.props.selectable === "ignoreEvents") return !pn(r.containerRef.current, h);
      }), u.on("click", function(h) {
        return v(h, "click");
      }), u.on("doubleClick", function(h) {
        return v(h, "doubleClick");
      }), u.on("select", function(h) {
        r.state.selecting && (r._selectSlot(Z(Z({}, r.state), {}, { action: "select", bounds: h })), r.setState({ selecting: false }));
      }), u.on("reset", function() {
        r.state.selecting && r.setState({ selecting: false });
      });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r._selectSlot = function(i) {
      for (var s = i.startDate, l = i.endDate, c = i.action, u = i.bounds, d = i.box, f = s, v = []; r.props.localizer.lte(f, l); ) v.push(f), f = new Date(+f + r.props.step * 60 * 1e3);
      ee(r.props.onSelectSlot, { slots: v, start: s, end: l, resourceId: r.props.resource, action: c, bounds: u, box: d });
    }, r._select = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onSelectEvent, s);
    }, r._doubleClick = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onDoubleClickEvent, s);
    }, r._keyPress = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onKeyPressEvent, s);
    }, r.slotMetrics = Do(r.props), r.containerRef = W.createRef(), r;
  }
  return ve(t, e2), oe(t, [{ key: "componentDidMount", value: function() {
    this.props.selectable && this._selectable(), this.props.isNow && this.setTimeIndicatorPositionUpdateInterval();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable(), this.clearTimeIndicatorInterval();
  } }, { key: "componentDidUpdate", value: function(n, a) {
    this.props.selectable && !n.selectable && this._selectable(), !this.props.selectable && n.selectable && this._teardownSelectable();
    var o = this.props, i = o.getNow, s = o.isNow, l = o.localizer, c = o.date, u = o.min, d = o.max, f = l.neq(n.getNow(), i(), "minutes");
    if (n.isNow !== s || f) {
      if (this.clearTimeIndicatorInterval(), s) {
        var v = !f && l.eq(n.date, c, "minutes") && a.timeIndicatorPosition === this.state.timeIndicatorPosition;
        this.setTimeIndicatorPositionUpdateInterval(v);
      }
    } else s && (l.neq(n.min, u, "minutes") || l.neq(n.max, d, "minutes")) && this.positionTimeIndicator();
  } }, { key: "setTimeIndicatorPositionUpdateInterval", value: function() {
    var n = this, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    !this.intervalTriggered && !a && this.positionTimeIndicator(), this._timeIndicatorTimeout = window.setTimeout(function() {
      n.intervalTriggered = true, n.positionTimeIndicator(), n.setTimeIndicatorPositionUpdateInterval();
    }, 6e4);
  } }, { key: "clearTimeIndicatorInterval", value: function() {
    this.intervalTriggered = false, window.clearTimeout(this._timeIndicatorTimeout);
  } }, { key: "positionTimeIndicator", value: function() {
    var n = this.props, a = n.min, o = n.max, i = n.getNow, s = i();
    if (s >= a && s <= o) {
      var l = this.slotMetrics.getCurrentTimePosition(s);
      this.intervalTriggered = true, this.setState({ timeIndicatorPosition: l });
    } else this.clearTimeIndicatorInterval();
  } }, { key: "render", value: function() {
    var n = this.props, a = n.date, o = n.max, i = n.rtl, s = n.isNow, l = n.resource, c = n.accessors, u = n.localizer, d = n.getters, f = d.dayProp, v = We(d, fO), h = n.components, p = h.eventContainerWrapper, m = h.timeIndicatorWrapper, y = We(h, vO);
    this.slotMetrics = this.slotMetrics.update(this.props);
    var g = this.slotMetrics, $ = this.state, b = $.selecting, E = $.top, _ = $.height, P = $.startDate, N = $.endDate, M = { start: P, end: N }, C = f(o, l), D = C.className, z = C.style, F = { className: "rbc-current-time-indicator", style: { top: "".concat(this.state.timeIndicatorPosition, "%") } }, T = y.dayColumnWrapper || dO;
    return x.createElement(T, { ref: this.containerRef, date: a, style: z, className: te(D, "rbc-day-slot", "rbc-time-column", s && "rbc-now", s && "rbc-today", b && "rbc-slot-selecting"), slotMetrics: g, resource: l }, g.groups.map(function(O, S) {
      return x.createElement(xc, { key: S, group: O, resource: l, getters: v, components: y });
    }), x.createElement(p, { localizer: u, resource: l, accessors: c, getters: v, components: y, slotMetrics: g }, x.createElement("div", { className: te("rbc-events-container", i && "rtl") }, this.renderEvents({ events: this.props.backgroundEvents, isBackgroundEvent: true }), this.renderEvents({ events: this.props.events }))), b && x.createElement("div", { className: "rbc-slot-selection", style: { top: E, height: _ } }, x.createElement("span", null, u.format(M, "selectRangeFormat"))), s && this.intervalTriggered && x.createElement(m, F, x.createElement("div", F)));
  } }]);
}(x.Component);
$c.defaultProps = { dragThroughEvents: true, timeslots: 2 };
var Ec = function(t) {
  var r = t.label;
  return x.createElement(x.Fragment, null, r);
}, pO = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.handleHeaderClick = function(i, s, l) {
      l.preventDefault(), ee(r.props.onDrillDown, [i, s]);
    }, r.renderRow = function(i) {
      var s = r.props, l = s.events, c = s.rtl, u = s.selectable, d = s.getNow, f = s.range, v = s.getters, h = s.localizer, p = s.accessors, m = s.components, y = s.resizable, g = p.resourceId(i), $ = i ? l.filter(function(b) {
        return p.resource(b) === g;
      }) : l;
      return x.createElement(Dr, { isAllDay: true, rtl: c, getNow: d, minRows: 2, maxRows: r.props.allDayMaxRows + 1, range: f, events: $, resourceId: g, className: "rbc-allday-cell", selectable: u, selected: r.props.selected, components: m, accessors: p, getters: v, localizer: h, onSelect: r.props.onSelectEvent, onShowMore: r.props.onShowMore, onDoubleClick: r.props.onDoubleClickEvent, onKeyPress: r.props.onKeyPressEvent, onSelectSlot: r.props.onSelectSlot, longPressThreshold: r.props.longPressThreshold, resizable: y });
    }, r;
  }
  return ve(t, e2), oe(t, [{ key: "renderHeaderCells", value: function(n) {
    var a = this, o = this.props, i = o.localizer, s = o.getDrilldownView, l = o.getNow, c = o.getters.dayProp, u = o.components.header, d = u === void 0 ? Eo : u, f = l();
    return n.map(function(v, h) {
      var p = s(v), m = i.format(v, "dayFormat"), y = c(v), g = y.className, $ = y.style, b = x.createElement(d, { date: v, label: m, localizer: i });
      return x.createElement("div", { key: h, style: $, className: te("rbc-header", g, i.isSameDate(v, f) && "rbc-today") }, p ? x.createElement("button", { type: "button", className: "rbc-button-link", onClick: function(_) {
        return a.handleHeaderClick(v, p, _);
      } }, b) : x.createElement("span", null, b));
    });
  } }, { key: "render", value: function() {
    var n = this, a = this.props, o = a.width, i = a.rtl, s = a.resources, l = a.range, c = a.events, u = a.getNow, d = a.accessors, f = a.selectable, v = a.components, h = a.getters, p = a.scrollRef, m = a.localizer, y = a.isOverflowing, g = a.components, $ = g.timeGutterHeader, b = g.resourceHeader, E = b === void 0 ? Ec : b, _ = a.resizable, P = {};
    y && (P[i ? "marginLeft" : "marginRight"] = "".concat(Rr() - 1, "px"));
    var N = s.groupEvents(c);
    return x.createElement("div", { style: P, ref: p, className: te("rbc-time-header", y && "rbc-overflowing") }, x.createElement("div", { className: "rbc-label rbc-time-header-gutter", style: { width: o, minWidth: o, maxWidth: o } }, $ && x.createElement($, null)), s.map(function(M, C) {
      var D = De(M, 2), z = D[0], F = D[1];
      return x.createElement("div", { className: "rbc-time-header-content", key: z || C }, F && x.createElement("div", { className: "rbc-row rbc-row-resource", key: "resource_".concat(C) }, x.createElement("div", { className: "rbc-header" }, x.createElement(E, { index: C, label: d.resourceTitle(F), resource: F }))), x.createElement("div", { className: "rbc-row rbc-time-header-cell".concat(l.length <= 1 ? " rbc-time-header-cell-single-day" : "") }, n.renderHeaderCells(l)), x.createElement(Dr, { isAllDay: true, rtl: i, getNow: u, minRows: 2, maxRows: n.props.allDayMaxRows + 1, range: l, events: N.get(z) || [], resourceId: F && z, className: "rbc-allday-cell", selectable: f, selected: n.props.selected, components: v, accessors: d, getters: h, localizer: m, onSelect: n.props.onSelectEvent, onShowMore: n.props.onShowMore, onDoubleClick: n.props.onDoubleClickEvent, onKeyDown: n.props.onKeyPressEvent, onSelectSlot: n.props.onSelectSlot, longPressThreshold: n.props.longPressThreshold, resizable: _ }));
    }));
  } }]);
}(x.Component), hO = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.handleHeaderClick = function(i, s, l) {
      l.preventDefault(), ee(r.props.onDrillDown, [i, s]);
    }, r;
  }
  return ve(t, e2), oe(t, [{ key: "renderHeaderCells", value: function(n) {
    var a = this, o = this.props, i = o.localizer, s = o.getDrilldownView, l = o.getNow, c = o.getters.dayProp, u = o.components, d = u.header, f = d === void 0 ? Eo : d, v = u.resourceHeader, h = v === void 0 ? Ec : v, p = o.resources, m = o.accessors, y = o.events, g = o.rtl, $ = o.selectable, b = o.components, E = o.getters, _ = o.resizable, P = l(), N = p.groupEvents(y);
    return n.map(function(M, C) {
      var D = s(M), z = i.format(M, "dayFormat"), F = c(M), T = F.className, O = F.style, S = x.createElement(f, { date: M, label: z, localizer: i });
      return x.createElement("div", { key: C, className: "rbc-time-header-content rbc-resource-grouping" }, x.createElement("div", { className: "rbc-row rbc-time-header-cell".concat(n.length <= 1 ? " rbc-time-header-cell-single-day" : "") }, x.createElement("div", { style: O, className: te("rbc-header", T, i.isSameDate(M, P) && "rbc-today") }, D ? x.createElement("button", { type: "button", className: "rbc-button-link", onClick: function(L) {
        return a.handleHeaderClick(M, D, L);
      } }, S) : x.createElement("span", null, S))), x.createElement("div", { className: "rbc-row" }, p.map(function(R, L) {
        var B = De(R, 2), U = B[0], q = B[1];
        return x.createElement("div", { key: "resource_".concat(U, "_").concat(L), className: te("rbc-header", T, i.isSameDate(M, P) && "rbc-today") }, x.createElement(h, { index: L, label: m.resourceTitle(q), resource: q }));
      })), x.createElement("div", { className: "rbc-row rbc-m-b-negative-3 rbc-h-full" }, p.map(function(R, L) {
        var B = De(R, 2), U = B[0], q = B[1], k = (N.get(U) || []).filter(function(A) {
          return i.isSameDate(A.start, M) || i.isSameDate(A.end, M);
        });
        return x.createElement(Dr, { key: "resource_".concat(U, "_").concat(L), isAllDay: true, rtl: g, getNow: l, minRows: 2, maxRows: a.props.allDayMaxRows + 1, range: [M], events: k, resourceId: q && U, className: "rbc-allday-cell", selectable: $, selected: a.props.selected, components: b, accessors: m, getters: E, localizer: i, onSelect: a.props.onSelectEvent, onShowMore: a.props.onShowMore, onDoubleClick: a.props.onDoubleClickEvent, onKeyDown: a.props.onKeyPressEvent, onSelectSlot: a.props.onSelectSlot, longPressThreshold: a.props.longPressThreshold, resizable: _ });
      })));
    });
  } }, { key: "render", value: function() {
    var n = this.props, a = n.width, o = n.rtl, i = n.range, s = n.scrollRef, l = n.isOverflowing, c = n.components.timeGutterHeader, u = {};
    return l && (u[o ? "marginLeft" : "marginRight"] = "".concat(Rr() - 1, "px")), x.createElement("div", { style: u, ref: s, className: te("rbc-time-header", l && "rbc-overflowing") }, x.createElement("div", { className: "rbc-label rbc-time-header-gutter", style: { width: a, minWidth: a, maxWidth: a } }, c && x.createElement(c, null)), this.renderHeaderCells(i));
  } }]);
}(x.Component);
function mO(e2) {
  var t = e2.min, r = e2.max, n = e2.localizer;
  return n.getTimezoneOffset(t) !== n.getTimezoneOffset(r) ? { start: n.add(t, -1, "day"), end: n.add(r, -1, "day") } : { start: t, end: r };
}
var gO = function(t) {
  var r = t.min, n = t.max, a = t.timeslots, o = t.step, i = t.localizer, s = t.getNow, l = t.resource, c = t.components, u = t.getters, d = t.gutterRef, f = c.timeGutterWrapper, v = W.useMemo(function() {
    return mO({ min: r, max: n, localizer: i });
  }, [r == null ? void 0 : r.toISOString(), n == null ? void 0 : n.toISOString(), i]), h = v.start, p = v.end, m = W.useState(Do({ min: h, max: p, timeslots: a, step: o, localizer: i })), y = De(m, 2), g = y[0], $ = y[1];
  W.useEffect(function() {
    g && $(g.update({ min: h, max: p, timeslots: a, step: o, localizer: i }));
  }, [h == null ? void 0 : h.toISOString(), p == null ? void 0 : p.toISOString(), a, o]);
  var b = W.useCallback(function(E, _) {
    if (_) return null;
    var P = g.dateIsInGroup(s(), _);
    return x.createElement("span", { className: te("rbc-label", P && "rbc-now") }, i.format(E, "timeGutterFormat"));
  }, [g, i, s]);
  return x.createElement(f, { slotMetrics: g }, x.createElement("div", { className: "rbc-time-gutter rbc-time-column", ref: d }, g.groups.map(function(E, _) {
    return x.createElement(xc, { key: _, group: E, resource: l, components: c, renderSlot: b, getters: u });
  })));
}, yO = x.forwardRef(function(e2, t) {
  return x.createElement(gO, Object.assign({ gutterRef: t }, e2));
}), ua = {};
function bO(e2, t) {
  return { map: function(n) {
    return e2 ? e2.map(function(a, o) {
      return n([t.resourceId(a), a], o);
    }) : [n([ua, null], 0)];
  }, groupEvents: function(n) {
    var a = /* @__PURE__ */ new Map();
    return e2 ? (n.forEach(function(o) {
      var i = t.resource(o) || ua;
      if (Array.isArray(i)) i.forEach(function(l) {
        var c = a.get(l) || [];
        c.push(o), a.set(l, c);
      });
      else {
        var s = a.get(i) || [];
        s.push(o), a.set(i, s);
      }
    }), a) : (a.set(ua, n), a);
  } };
}
var Zt = function(e2) {
  function t(r) {
    var n;
    return ie(this, t), n = pe(this, t, [r]), n.handleScroll = function(a) {
      n.scrollRef.current && (n.scrollRef.current.scrollLeft = a.target.scrollLeft);
    }, n.handleResize = function() {
      br(n.rafHandle), n.rafHandle = Mr(n.checkOverflow);
    }, n.handleKeyPressEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      ee(n.props.onKeyPressEvent, o);
    }, n.handleSelectEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      ee(n.props.onSelectEvent, o);
    }, n.handleDoubleClickEvent = function() {
      n.clearSelection();
      for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
      ee(n.props.onDoubleClickEvent, o);
    }, n.handleShowMore = function(a, o, i, s, l) {
      var c = n.props, u = c.popup, d = c.onDrillDown, f = c.onShowMore, v = c.getDrilldownView, h = c.doShowMoreDrillDown;
      if (n.clearSelection(), u) {
        var p = bn(i, n.containerRef.current);
        n.setState({ overlay: { date: o, events: a, position: Z(Z({}, p), {}, { width: "200px" }), target: l } });
      } else h && ee(d, [o, v(o) || me.DAY]);
      ee(f, [a, o, s]);
    }, n.handleSelectAllDaySlot = function(a, o) {
      var i = n.props.onSelectSlot, s = new Date(a[0]), l = new Date(a[a.length - 1]);
      l.setDate(a[a.length - 1].getDate() + 1), ee(i, { slots: a, start: s, end: l, action: o.action, resourceId: o.resourceId });
    }, n.overlayDisplay = function() {
      n.setState({ overlay: null });
    }, n.checkOverflow = function() {
      if (!n._updatingOverflow) {
        var a = n.contentRef.current;
        if (a != null && a.scrollHeight) {
          var o = a.scrollHeight > a.clientHeight;
          n.state.isOverflowing !== o && (n._updatingOverflow = true, n.setState({ isOverflowing: o }, function() {
            n._updatingOverflow = false;
          }));
        }
      }
    }, n.memoizedResources = jl(function(a, o) {
      return bO(a, o);
    }), n.state = { gutterWidth: void 0, isOverflowing: null }, n.scrollRef = x.createRef(), n.contentRef = x.createRef(), n.containerRef = x.createRef(), n._scrollRatio = null, n.gutterRef = W.createRef(), n;
  }
  return ve(t, e2), oe(t, [{ key: "getSnapshotBeforeUpdate", value: function() {
    return this.checkOverflow(), null;
  } }, { key: "componentDidMount", value: function() {
    this.props.width == null && this.measureGutter(), this.calculateScroll(), this.applyScroll(), window.addEventListener("resize", this.handleResize);
  } }, { key: "componentWillUnmount", value: function() {
    window.removeEventListener("resize", this.handleResize), br(this.rafHandle), this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest);
  } }, { key: "componentDidUpdate", value: function() {
    this.applyScroll();
  } }, { key: "renderDayColumn", value: function(n, a, o, i, s, l, c, u, d, f) {
    var v = this.props, h = v.min, p = v.max, m = (i.get(a) || []).filter(function(g) {
      return l.inRange(n, c.start(g), c.end(g), "day");
    }), y = (s.get(a) || []).filter(function(g) {
      return l.inRange(n, c.start(g), c.end(g), "day");
    });
    return x.createElement($c, Object.assign({}, this.props, { localizer: l, min: l.merge(n, h), max: l.merge(n, p), resource: o && a, components: u, isNow: l.isSameDate(n, f), key: "".concat(a, "-").concat(n), date: n, events: m, backgroundEvents: y, dayLayoutAlgorithm: d }));
  } }, { key: "renderResourcesFirst", value: function(n, a, o, i, s, l, c, u, d) {
    var f = this;
    return a.map(function(v) {
      var h = De(v, 2), p = h[0], m = h[1];
      return n.map(function(y) {
        return f.renderDayColumn(y, p, m, o, i, s, l, u, d, c);
      });
    });
  } }, { key: "renderRangeFirst", value: function(n, a, o, i, s, l, c, u, d) {
    var f = this;
    return n.map(function(v) {
      return x.createElement("div", { style: { display: "flex", minHeight: "100%", flex: 1 }, key: v }, a.map(function(h) {
        var p = De(h, 2), m = p[0], y = p[1];
        return x.createElement("div", { style: { flex: 1 }, key: l.resourceId(y) }, f.renderDayColumn(v, m, y, o, i, s, l, u, d, c));
      }));
    });
  } }, { key: "renderEvents", value: function(n, a, o, i) {
    var s = this.props, l = s.accessors, c = s.localizer, u = s.resourceGroupingLayout, d = s.components, f = s.dayLayoutAlgorithm, v = this.memoizedResources(this.props.resources, l), h = v.groupEvents(a), p = v.groupEvents(o);
    return u ? this.renderRangeFirst(n, v, h, p, c, l, i, d, f) : this.renderResourcesFirst(n, v, h, p, c, l, i, d, f);
  } }, { key: "render", value: function() {
    var n, a = this.props, o = a.events, i = a.backgroundEvents, s = a.range, l = a.width, c = a.rtl, u = a.selected, d = a.getNow, f = a.resources, v = a.components, h = a.accessors, p = a.getters, m = a.localizer, y = a.min, g = a.max, $ = a.showMultiDayTimes, b = a.longPressThreshold, E = a.resizable, _ = a.resourceGroupingLayout;
    l = l || this.state.gutterWidth;
    var P = s[0], N = s[s.length - 1];
    this.slots = s.length;
    var M = [], C = [], D = [];
    o.forEach(function(F) {
      if (Er(F, P, N, h, m)) {
        var T = h.start(F), O = h.end(F);
        h.allDay(F) || m.startAndEndAreDateOnly(T, O) || !$ && !m.isSameDate(T, O) ? M.push(F) : C.push(F);
      }
    }), i.forEach(function(F) {
      Er(F, P, N, h, m) && D.push(F);
    }), M.sort(function(F, T) {
      return Ta(F, T, h, m);
    });
    var z = { range: s, events: M, width: l, rtl: c, getNow: d, localizer: m, selected: u, allDayMaxRows: this.props.showAllEvents ? 1 / 0 : (n = this.props.allDayMaxRows) !== null && n !== void 0 ? n : 1 / 0, resources: this.memoizedResources(f, h), selectable: this.props.selectable, accessors: h, getters: p, components: v, scrollRef: this.scrollRef, isOverflowing: this.state.isOverflowing, longPressThreshold: b, onSelectSlot: this.handleSelectAllDaySlot, onSelectEvent: this.handleSelectEvent, onShowMore: this.handleShowMore, onDoubleClickEvent: this.props.onDoubleClickEvent, onKeyPressEvent: this.props.onKeyPressEvent, onDrillDown: this.props.onDrillDown, getDrilldownView: this.props.getDrilldownView, resizable: E };
    return x.createElement("div", { className: te("rbc-time-view", f && "rbc-time-view-resources"), ref: this.containerRef }, f && f.length > 1 && _ ? x.createElement(hO, z) : x.createElement(pO, z), this.props.popup && this.renderOverlay(), x.createElement("div", { ref: this.contentRef, className: "rbc-time-content", onScroll: this.handleScroll }, x.createElement(yO, { date: P, ref: this.gutterRef, localizer: m, min: m.merge(P, y), max: m.merge(P, g), step: this.props.step, getNow: this.props.getNow, timeslots: this.props.timeslots, components: v, className: "rbc-time-gutter", getters: p }), this.renderEvents(s, C, D, d())));
  } }, { key: "renderOverlay", value: function() {
    var n, a, o = this, i = (n = (a = this.state) === null || a === void 0 ? void 0 : a.overlay) !== null && n !== void 0 ? n : {}, s = this.props, l = s.accessors, c = s.localizer, u = s.components, d = s.getters, f = s.selected, v = s.popupOffset, h = s.handleDragStart, p = function() {
      return o.setState({ overlay: null });
    };
    return x.createElement($o, { overlay: i, accessors: l, localizer: c, components: u, getters: d, selected: f, popupOffset: v, ref: this.containerRef, handleKeyPressEvent: this.handleKeyPressEvent, handleSelectEvent: this.handleSelectEvent, handleDoubleClickEvent: this.handleDoubleClickEvent, handleDragStart: h, show: !!i.position, overlayDisplay: this.overlayDisplay, onHide: p });
  } }, { key: "clearSelection", value: function() {
    clearTimeout(this._selectTimer), this._pendingSelection = [];
  } }, { key: "measureGutter", value: function() {
    var n = this;
    this.measureGutterAnimationFrameRequest && window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest), this.measureGutterAnimationFrameRequest = window.requestAnimationFrame(function() {
      var a, o = (a = n.gutterRef) !== null && a !== void 0 && a.current ? $r(n.gutterRef.current) : void 0;
      o && n.state.gutterWidth !== o && n.setState({ gutterWidth: o });
    });
  } }, { key: "applyScroll", value: function() {
    if (this._scrollRatio != null && this.props.enableAutoScroll === true) {
      var n = this.contentRef.current;
      n.scrollTop = n.scrollHeight * this._scrollRatio, this._scrollRatio = null;
    }
  } }, { key: "calculateScroll", value: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.props, a = n.min, o = n.max, i = n.scrollToTime, s = n.localizer, l = s.diff(s.merge(i, a), i, "milliseconds"), c = s.diff(a, o, "milliseconds");
    this._scrollRatio = l / c;
  } }]);
}(W.Component);
Zt.defaultProps = { step: 30, timeslots: 2, resourceGroupingLayout: false };
var wO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], Hn = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, d = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, f = n.enableAutoScroll, v = f === void 0 ? true : f, h = We(n, wO), p = t.range(a, { localizer: o });
    return x.createElement(Zt, Object.assign({}, h, { range: p, eventOffset: 10, localizer: o, min: s, max: c, scrollToTime: d, enableAutoScroll: v }));
  } }]);
}(x.Component);
Hn.range = function(e2, t) {
  var r = t.localizer;
  return [r.startOf(e2, "day")];
};
Hn.navigate = function(e2, t, r) {
  var n = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return n.add(e2, -1, "day");
    case we.NEXT:
      return n.add(e2, 1, "day");
    default:
      return e2;
  }
};
Hn.title = function(e2, t) {
  var r = t.localizer;
  return r.format(e2, "dayHeaderFormat");
};
var xO = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"], et = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, d = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, f = n.enableAutoScroll, v = f === void 0 ? true : f, h = We(n, xO), p = t.range(a, this.props);
    return x.createElement(Zt, Object.assign({}, h, { range: p, eventOffset: 15, localizer: o, min: s, max: c, scrollToTime: d, enableAutoScroll: v }));
  } }]);
}(x.Component);
et.defaultProps = Zt.defaultProps;
et.navigate = function(e2, t, r) {
  var n = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return n.add(e2, -1, "week");
    case we.NEXT:
      return n.add(e2, 1, "week");
    default:
      return e2;
  }
};
et.range = function(e2, t) {
  var r = t.localizer, n = r.startOfWeek(), a = r.startOf(e2, "week", n), o = r.endOf(e2, "week", n);
  return r.range(a, o);
};
et.title = function(e2, t) {
  var r = t.localizer, n = et.range(e2, { localizer: r }), a = Bl(n), o = a[0], i = a.slice(1);
  return r.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
};
var $O = ["date", "localizer", "min", "max", "scrollToTime", "enableAutoScroll"];
function _o(e2, t) {
  return et.range(e2, t).filter(function(r) {
    return [6, 0].indexOf(r.getDay()) === -1;
  });
}
var Wr = function(e2) {
  function t() {
    return ie(this, t), pe(this, t, arguments);
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.date, o = n.localizer, i = n.min, s = i === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : i, l = n.max, c = l === void 0 ? o.endOf(/* @__PURE__ */ new Date(), "day") : l, u = n.scrollToTime, d = u === void 0 ? o.startOf(/* @__PURE__ */ new Date(), "day") : u, f = n.enableAutoScroll, v = f === void 0 ? true : f, h = We(n, $O), p = _o(a, this.props);
    return x.createElement(Zt, Object.assign({}, h, { range: p, eventOffset: 15, localizer: o, min: s, max: c, scrollToTime: d, enableAutoScroll: v }));
  } }]);
}(x.Component);
Wr.defaultProps = Zt.defaultProps;
Wr.range = _o;
Wr.navigate = et.navigate;
Wr.title = function(e2, t) {
  var r = t.localizer, n = _o(e2, { localizer: r }), a = Bl(n), o = a[0], i = a.slice(1);
  return r.format({ start: o, end: i.pop() }, "dayRangeHeaderFormat");
};
var zn = 30;
function Bn(e2) {
  var t = e2.accessors, r = e2.components, n = e2.date, a = e2.events, o = e2.getters, i = e2.length, s = i === void 0 ? zn : i, l = e2.localizer, c = e2.onDoubleClickEvent, u = e2.onSelectEvent, d = e2.selected, f = W.useRef(null), v = W.useRef(null), h = W.useRef(null), p = W.useRef(null), m = W.useRef(null);
  W.useEffect(function() {
    $();
  });
  var y = function(N, M, C) {
    var D = r.event, z = r.date;
    return M = M.filter(function(F) {
      return Er(F, l.startOf(N, "day"), l.endOf(N, "day"), t, l);
    }), M.map(function(F, T) {
      var O = t.title(F), S = t.end(F), R = t.start(F), L = o.eventProp(F, R, S, Fn(F, d)), B = T === 0 && l.format(N, "agendaDateFormat"), U = T === 0 ? x.createElement("td", { rowSpan: M.length, className: "rbc-agenda-date-cell" }, z ? x.createElement(z, { day: N, label: B }) : B) : false;
      return x.createElement("tr", { key: C + "_" + T, className: L.className, style: L.style }, U, x.createElement("td", { className: "rbc-agenda-time-cell" }, g(N, F)), x.createElement("td", { className: "rbc-agenda-event-cell", onClick: function(k) {
        return u && u(F, k);
      }, onDoubleClick: function(k) {
        return c && c(F, k);
      } }, D ? x.createElement(D, { event: F, title: O }) : O));
    }, []);
  }, g = function(N, M) {
    var C = "", D = r.time, z = l.messages.allDay, F = t.end(M), T = t.start(M);
    return t.allDay(M) || (l.eq(T, F) ? z = l.format(T, "agendaTimeFormat") : l.isSameDate(T, F) ? z = l.format({ start: T, end: F }, "agendaTimeRangeFormat") : l.isSameDate(N, T) ? z = l.format(T, "agendaTimeFormat") : l.isSameDate(N, F) && (z = l.format(F, "agendaTimeFormat"))), l.gt(N, T, "day") && (C = "rbc-continues-prior"), l.lt(N, F, "day") && (C += " rbc-continues-after"), x.createElement("span", { className: C.trim() }, D ? x.createElement(D, { event: M, day: N, label: z }) : z);
  }, $ = function() {
    if (m.current) {
      var N = f.current, M = m.current.firstChild;
      if (M) {
        var C = p.current.scrollHeight > p.current.clientHeight, D = [], z = D;
        D = [$r(M.children[0]), $r(M.children[1])], (z[0] !== D[0] || z[1] !== D[1]) && (v.current.style.width = D[0] + "px", h.current.style.width = D[1] + "px"), C ? (Dn(N, "rbc-header-overflowing"), N.style.marginRight = Rr() + "px") : _n(N, "rbc-header-overflowing");
      }
    }
  }, b = l.messages, E = l.add(n, s, "day"), _ = l.range(n, E, "day");
  return a = a.filter(function(P) {
    return Er(P, l.startOf(n, "day"), l.endOf(E, "day"), t, l);
  }), a.sort(function(P, N) {
    return +t.start(P) - +t.start(N);
  }), x.createElement("div", { className: "rbc-agenda-view" }, a.length !== 0 ? x.createElement(x.Fragment, null, x.createElement("table", { ref: f, className: "rbc-agenda-table" }, x.createElement("thead", null, x.createElement("tr", null, x.createElement("th", { className: "rbc-header", ref: v }, b.date), x.createElement("th", { className: "rbc-header", ref: h }, b.time), x.createElement("th", { className: "rbc-header" }, b.event)))), x.createElement("div", { className: "rbc-agenda-content", ref: p }, x.createElement("table", { className: "rbc-agenda-table" }, x.createElement("tbody", { ref: m }, _.map(function(P, N) {
    return y(P, a, N);
  }))))) : x.createElement("span", { className: "rbc-agenda-empty" }, b.noEventsInRange));
}
Bn.range = function(e2, t) {
  var r = t.length, n = r === void 0 ? zn : r, a = t.localizer, o = a.add(e2, n, "day");
  return { start: e2, end: o };
};
Bn.navigate = function(e2, t, r) {
  var n = r.length, a = n === void 0 ? zn : n, o = r.localizer;
  switch (t) {
    case we.PREVIOUS:
      return o.add(e2, -a, "day");
    case we.NEXT:
      return o.add(e2, a, "day");
    default:
      return e2;
  }
};
Bn.title = function(e2, t) {
  var r = t.length, n = r === void 0 ? zn : r, a = t.localizer, o = a.add(e2, n, "day");
  return a.format({ start: e2, end: o }, "agendaHeaderFormat");
};
var nn = ht(ht(ht(ht(ht({}, me.MONTH, Wn), me.WEEK, et), me.WORK_WEEK, Wr), me.DAY, Hn), me.AGENDA, Bn), EO = ["action", "date", "today"];
function DO(e2, t) {
  var r = t.action, n = t.date, a = t.today, o = We(t, EO);
  switch (e2 = typeof e2 == "string" ? nn[e2] : e2, r) {
    case we.TODAY:
      n = a || /* @__PURE__ */ new Date();
      break;
    case we.DATE:
      break;
    default:
      ur(e2 && typeof e2.navigate == "function", "Calendar View components must implement a static `.navigate(date, action)` method.s"), n = e2.navigate(n, r, o);
  }
  return n;
}
function _O(e2, t) {
  var r = null;
  return typeof t == "function" ? r = t(e2) : typeof t == "string" && Ra(e2) === "object" && e2 != null && t in e2 && (r = e2[t]), r;
}
var ze = function(t) {
  return function(r) {
    return _O(r, t);
  };
}, SO = ["view", "date", "getNow", "onNavigate"], OO = ["view", "toolbar", "events", "backgroundEvents", "resourceGroupingLayout", "style", "className", "elementProps", "date", "getNow", "length", "showMultiDayTimes", "onShowMore", "doShowMoreDrillDown", "components", "formats", "messages", "culture"];
function Dc(e2) {
  if (Array.isArray(e2)) return e2;
  for (var t = [], r = 0, n = Object.entries(e2); r < n.length; r++) {
    var a = De(n[r], 2), o = a[0], i = a[1];
    i && t.push(o);
  }
  return t;
}
function TO(e2, t) {
  var r = t.views, n = Dc(r);
  return n.indexOf(e2) !== -1;
}
var _c = function(e2) {
  function t() {
    var r;
    ie(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = pe(this, t, [].concat(a)), r.getViews = function() {
      var i = r.props.views;
      return Array.isArray(i) ? X1(i, function(s, l) {
        return s[l] = nn[l];
      }, {}) : Ra(i) === "object" ? V$(i, function(s, l) {
        return s === true ? nn[l] : s;
      }) : nn;
    }, r.getView = function() {
      var i = r.getViews();
      return i[r.props.view];
    }, r.getDrilldownView = function(i) {
      var s = r.props, l = s.view, c = s.drilldownView, u = s.getDrilldownView;
      return u ? u(i, l, Object.keys(r.getViews())) : c;
    }, r.handleRangeChange = function(i, s, l) {
      var c = r.props, u = c.onRangeChange, d = c.localizer;
      u && s.range && u(s.range(i, { localizer: d }), l);
    }, r.handleNavigate = function(i, s) {
      var l = r.props, c = l.view, u = l.date, d = l.getNow, f = l.onNavigate, v = We(l, SO), h = r.getView(), p = d();
      u = DO(h, Z(Z({}, v), {}, { action: i, date: s || u || p, today: p })), f(u, c, i), r.handleRangeChange(u, h);
    }, r.handleViewChange = function(i) {
      i !== r.props.view && TO(i, r.props) && r.props.onView(i);
      var s = r.getViews();
      r.handleRangeChange(r.props.date || r.props.getNow(), s[i], i);
    }, r.handleSelectEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onSelectEvent, s);
    }, r.handleDoubleClickEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onDoubleClickEvent, s);
    }, r.handleKeyPressEvent = function() {
      for (var i = arguments.length, s = new Array(i), l = 0; l < i; l++) s[l] = arguments[l];
      ee(r.props.onKeyPressEvent, s);
    }, r.handleSelectSlot = function(i) {
      ee(r.props.onSelectSlot, i);
    }, r.handleDrillDown = function(i, s) {
      var l = r.props.onDrillDown;
      if (l) {
        l(i, s, r.drilldownView);
        return;
      }
      s && r.handleViewChange(s), r.handleNavigate(we.DATE, i);
    }, r.state = { context: t.getContext(r.props) }, r;
  }
  return ve(t, e2), oe(t, [{ key: "render", value: function() {
    var n = this.props, a = n.view, o = n.toolbar, i = n.events, s = n.backgroundEvents, l = n.resourceGroupingLayout, c = n.style, u = n.className, d = n.elementProps, f = n.date, v = n.getNow, h = n.length, p = n.showMultiDayTimes, m = n.onShowMore, y = n.doShowMoreDrillDown;
    n.components, n.formats, n.messages, n.culture;
    var g = We(n, OO);
    f = f || v();
    var $ = this.getView(), b = this.state.context, E = b.accessors, _ = b.components, P = b.getters, N = b.localizer, M = b.viewNames, C = _.toolbar || AS, D = $.title(f, { localizer: N, length: h });
    return x.createElement("div", Object.assign({}, d, { className: te(u, "rbc-calendar", g.rtl && "rbc-rtl"), style: c }), o && x.createElement(C, { date: f, view: a, views: M, label: D, onView: this.handleViewChange, onNavigate: this.handleNavigate, localizer: N }), x.createElement($, Object.assign({}, g, { events: i, backgroundEvents: s, date: f, getNow: v, length: h, localizer: N, getters: P, components: _, accessors: E, showMultiDayTimes: p, getDrilldownView: this.getDrilldownView, onNavigate: this.handleNavigate, onDrillDown: this.handleDrillDown, onSelectEvent: this.handleSelectEvent, onDoubleClickEvent: this.handleDoubleClickEvent, onKeyPressEvent: this.handleKeyPressEvent, onSelectSlot: this.handleSelectSlot, onShowMore: m, doShowMoreDrillDown: y, resourceGroupingLayout: l })));
  } }], [{ key: "getDerivedStateFromProps", value: function(n) {
    return { context: t.getContext(n) };
  } }, { key: "getContext", value: function(n) {
    var a = n.startAccessor, o = n.endAccessor, i = n.allDayAccessor, s = n.tooltipAccessor, l = n.titleAccessor, c = n.resourceAccessor, u = n.resourceIdAccessor, d = n.resourceTitleAccessor, f = n.eventIdAccessor, v = n.eventPropGetter, h = n.backgroundEventPropGetter, p = n.slotPropGetter, m = n.slotGroupPropGetter, y = n.dayPropGetter, g = n.view, $ = n.views, b = n.localizer, E = n.culture, _ = n.messages, P = _ === void 0 ? {} : _, N = n.components, M = N === void 0 ? {} : N, C = n.formats, D = C === void 0 ? {} : C, z = Dc($), F = PS(P);
    return { viewNames: z, localizer: CS(b, E, D, F), getters: { eventProp: function() {
      return v && v.apply(void 0, arguments) || {};
    }, backgroundEventProp: function() {
      return h && h.apply(void 0, arguments) || {};
    }, slotProp: function() {
      return p && p.apply(void 0, arguments) || {};
    }, slotGroupProp: function() {
      return m && m.apply(void 0, arguments) || {};
    }, dayProp: function() {
      return y && y.apply(void 0, arguments) || {};
    } }, components: z$(M[g] || {}, L1(M, z), { eventWrapper: je, backgroundEventWrapper: je, eventContainerWrapper: je, dateCellWrapper: je, weekWrapper: je, timeSlotWrapper: je, timeGutterWrapper: je, timeIndicatorWrapper: je }), accessors: { start: ze(a), end: ze(o), allDay: ze(i), tooltip: ze(s), title: ze(l), resource: ze(c), resourceId: ze(u), resourceTitle: ze(d), eventId: ze(f) } };
  } }]);
}(x.Component);
_c.defaultProps = { events: [], backgroundEvents: [], elementProps: {}, popup: false, toolbar: true, view: me.MONTH, views: [me.MONTH, me.WEEK, me.DAY, me.AGENDA], step: 30, length: 30, allDayMaxRows: 1 / 0, doShowMoreDrillDown: true, drilldownView: me.DAY, titleAccessor: "title", tooltipAccessor: "title", allDayAccessor: "allDay", startAccessor: "start", endAccessor: "end", resourceAccessor: "resourceId", resourceIdAccessor: "id", resourceTitleAccessor: "title", eventIdAccessor: "id", longPressThreshold: 250, getNow: function() {
  return /* @__PURE__ */ new Date();
}, dayLayoutAlgorithm: "overlap" };
var kO = Ys(_c, { view: "onView", date: "onNavigate", selected: "onSelectEvent" }), CO = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "MMMM DD", r) + " \u2013 " + n.format(o, n.eq(a, o, "month") ? "DD" : "MMMM DD", r);
}, AO = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "L", r) + " \u2013 " + n.format(o, "L", r);
}, da = function(t, r, n) {
  var a = t.start, o = t.end;
  return n.format(a, "LT", r) + " \u2013 " + n.format(o, "LT", r);
}, MO = function(t, r, n) {
  var a = t.start;
  return n.format(a, "LT", r) + " \u2013 ";
}, PO = function(t, r, n) {
  var a = t.end;
  return " \u2013 " + n.format(a, "LT", r);
}, NO = { dateFormat: "DD", dayFormat: "DD ddd", weekdayFormat: "ddd", selectRangeFormat: da, eventTimeRangeFormat: da, eventTimeRangeStartFormat: MO, eventTimeRangeEndFormat: PO, timeGutterFormat: "LT", monthHeaderFormat: "MMMM YYYY", dayHeaderFormat: "dddd MMM DD", dayRangeHeaderFormat: CO, agendaHeaderFormat: AO, agendaDateFormat: "ddd MMM DD", agendaTimeFormat: "LT", agendaTimeRangeFormat: da };
function Ve(e2) {
  var t = e2 && e2.toLowerCase();
  return t === "FullYear" ? t = "year" : t || (t = void 0), t;
}
function RO(e2) {
  e2.extend(J1), e2.extend(eS), e2.extend(rS), e2.extend(aS), e2.extend(iS), e2.extend(lS), e2.extend(uS), e2.extend(fS);
  var t = function(A, j) {
    return j ? A.locale(j) : A;
  }, r = e2.tz ? e2.tz : e2;
  function n(k) {
    return r(k).toDate().getTimezoneOffset();
  }
  function a(k, A) {
    var j, H = r(k), Y = r(A);
    if (!r.tz) return H.toDate().getTimezoneOffset() - Y.toDate().getTimezoneOffset();
    var K = (j = H.tz().$x.$timezone) !== null && j !== void 0 ? j : e2.tz.guess(), G = -r.tz(+H, K).utcOffset(), V = -r.tz(+Y, K).utcOffset();
    return G - V;
  }
  function o(k) {
    var A = r(k).startOf("day");
    return a(A, k);
  }
  function i(k, A, j) {
    var H = Ve(j), Y = H ? r(k).startOf(H) : r(k), K = H ? r(A).startOf(H) : r(A);
    return [Y, K, H];
  }
  function s() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, A = arguments.length > 1 ? arguments[1] : void 0, j = Ve(A);
    return j ? r(k).startOf(j).toDate() : r(k).toDate();
  }
  function l() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, A = arguments.length > 1 ? arguments[1] : void 0, j = Ve(A);
    return j ? r(k).endOf(j).toDate() : r(k).toDate();
  }
  function c(k, A, j) {
    var H = i(k, A, j), Y = De(H, 3), K = Y[0], G = Y[1], V = Y[2];
    return K.isSame(G, V);
  }
  function u(k, A, j) {
    return !c(k, A, j);
  }
  function d(k, A, j) {
    var H = i(k, A, j), Y = De(H, 3), K = Y[0], G = Y[1], V = Y[2];
    return K.isAfter(G, V);
  }
  function f(k, A, j) {
    var H = i(k, A, j), Y = De(H, 3), K = Y[0], G = Y[1], V = Y[2];
    return K.isBefore(G, V);
  }
  function v(k, A, j) {
    var H = i(k, A, j), Y = De(H, 3), K = Y[0], G = Y[1], V = Y[2];
    return K.isSameOrBefore(G, V);
  }
  function h(k, A, j) {
    var H = i(k, A, j), Y = De(H, 3), K = Y[0], G = Y[1], V = Y[2];
    return K.isSameOrBefore(G, V);
  }
  function p(k, A, j) {
    var H = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "day", Y = Ve(H), K = r(k), G = r(A), V = r(j);
    return K.isBetween(G, V, Y, "[]");
  }
  function m(k, A) {
    var j = r(k), H = r(A), Y = e2.min(j, H);
    return Y.toDate();
  }
  function y(k, A) {
    var j = r(k), H = r(A), Y = e2.max(j, H);
    return Y.toDate();
  }
  function g(k, A) {
    if (!k && !A) return null;
    var j = r(A).format("HH:mm:ss"), H = r(k).startOf("day").format("MM/DD/YYYY");
    return r("".concat(H, " ").concat(j)).toDate();
  }
  function $(k, A, j) {
    var H = Ve(j);
    return r(k).add(A, H).toDate();
  }
  function b(k, A) {
    for (var j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", H = Ve(j), Y = r(k).toDate(), K = []; h(Y, A); ) K.push(Y), Y = $(Y, 1, H);
    return K;
  }
  function E(k, A) {
    var j = Ve(A), H = s(k, j);
    return c(H, k) ? H : $(H, 1, j);
  }
  function _(k, A) {
    var j = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "day", H = Ve(j), Y = r(k), K = r(A);
    return K.diff(Y, H);
  }
  function P(k) {
    var A = r(k);
    return A.minutes();
  }
  function N(k) {
    var A = k ? e2.localeData(k) : e2.localeData();
    return A ? A.firstDayOfWeek() : 0;
  }
  function M(k) {
    var A = r(k).startOf("month"), j = r(A).startOf("week");
    if (r(A).isLeapYear()) {
      var H = A.toDate().getDay(), Y = A.toDate().getDate() - H + (H == 0 ? -6 : 1);
      j.date(Y);
    }
    return j.toDate();
  }
  function C(k) {
    return r(k).endOf("month").endOf("week").toDate();
  }
  function D(k) {
    for (var A = M(k), j = C(k), H = []; h(A, j); ) H.push(A), A = $(A, 1, "d");
    return H;
  }
  function z(k, A, j) {
    return r(k).startOf("day").minute(A + j).toDate();
  }
  function F(k, A) {
    return _(k, A, "minutes");
  }
  function T(k) {
    var A = r(k).startOf("day"), j = r(k);
    return j.diff(A, "minutes") + o(k);
  }
  function O(k, A) {
    var j = r(k), H = r(A);
    return j.isBefore(H, "day");
  }
  function S(k, A, j) {
    var H = r(A), Y = r(j);
    return H.isSameOrAfter(Y, "minutes");
  }
  function R(k, A) {
    var j = r(k), H = r(A);
    return H.diff(j, "day");
  }
  function L(k) {
    var A = k.evtA, j = A.start, H = A.end, Y = A.allDay, K = k.evtB, G = K.start, V = K.end, re = K.allDay, se = +s(j, "day") - +s(G, "day"), Te = R(j, H), ke = R(G, V);
    return se || ke - Te || !!re - !!Y || +j - +G || +H - +V;
  }
  function B(k) {
    var A = k.event, j = A.start, H = A.end, Y = k.range, K = Y.start, G = Y.end, V = r(j).startOf("day"), re = r(H), se = r(K), Te = r(G), ke = V.isSameOrBefore(Te, "day"), Jn = !V.isSame(re, "minutes"), Qn = Jn ? re.isAfter(se, "minutes") : re.isSameOrAfter(se, "minutes");
    return ke && Qn;
  }
  function U(k, A) {
    var j = r(k), H = r(A);
    return j.isSame(H, "day");
  }
  function q() {
    var k = /* @__PURE__ */ new Date(), A = /-/.test(k.toString()) ? "-" : "", j = k.getTimezoneOffset(), H = Number("".concat(A).concat(Math.abs(j))), Y = r().utcOffset();
    return Y > H ? 1 : 0;
  }
  return new kS({ formats: NO, firstOfWeek: N, firstVisibleDay: M, lastVisibleDay: C, visibleDays: D, format: function(A, j, H) {
    return t(r(A), H).format(j);
  }, lt: f, lte: h, gt: d, gte: v, eq: c, neq: u, merge: g, inRange: p, startOf: s, endOf: l, range: b, add: $, diff: _, ceil: E, min: m, max: y, minutes: P, getSlotDate: z, getTimezoneOffset: n, getDstOffset: a, getTotalMin: F, getMinutesFromMidnight: T, continuesPrior: O, continuesAfter: S, sortEvents: L, inEventRange: B, isSameDate: U, browserTZOffset: q });
}
var So = {}, Sc = { exports: {} };
(function(e2) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Sc);
var he = Sc.exports, Oo = {}, Oc = { exports: {} }, Tc = { exports: {} }, kc = { exports: {} }, Cc = { exports: {} };
(function(e2) {
  var t = Ht.default;
  function r(n, a) {
    if (t(n) != "object" || !n) return n;
    var o = n[Symbol.toPrimitive];
    if (o !== void 0) {
      var i = o.call(n, a || "default");
      if (t(i) != "object") return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(n);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Cc);
var jO = Cc.exports;
(function(e2) {
  var t = Ht.default, r = jO;
  function n(a) {
    var o = r(a, "string");
    return t(o) == "symbol" ? o : o + "";
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(kc);
var Ac = kc.exports;
(function(e2) {
  var t = Ac;
  function r(n, a, o) {
    return (a = t(a)) in n ? Object.defineProperty(n, a, { value: o, enumerable: true, configurable: true, writable: true }) : n[a] = o, n;
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Tc);
var Mc = Tc.exports;
(function(e2) {
  var t = Mc;
  function r(a, o) {
    var i = Object.keys(a);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(a);
      o && (s = s.filter(function(l) {
        return Object.getOwnPropertyDescriptor(a, l).enumerable;
      })), i.push.apply(i, s);
    }
    return i;
  }
  function n(a) {
    for (var o = 1; o < arguments.length; o++) {
      var i = arguments[o] != null ? arguments[o] : {};
      o % 2 ? r(Object(i), true).forEach(function(s) {
        t(a, s, i[s]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : r(Object(i)).forEach(function(s) {
        Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(i, s));
      });
    }
    return a;
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Oc);
var ot = Oc.exports, Pc = { exports: {} }, Nc = { exports: {} };
(function(e2) {
  function t(r, n) {
    if (r == null) return {};
    var a = {};
    for (var o in r) if ({}.hasOwnProperty.call(r, o)) {
      if (n.indexOf(o) !== -1) continue;
      a[o] = r[o];
    }
    return a;
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Nc);
var LO = Nc.exports;
(function(e2) {
  var t = LO;
  function r(n, a) {
    if (n == null) return {};
    var o, i, s = t(n, a);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(n);
      for (i = 0; i < l.length; i++) o = l[i], a.indexOf(o) === -1 && {}.propertyIsEnumerable.call(n, o) && (s[o] = n[o]);
    }
    return s;
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Pc);
var To = Pc.exports, Rc = { exports: {} };
(function(e2) {
  function t(r, n) {
    if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Rc);
var St = Rc.exports, jc = { exports: {} };
(function(e2) {
  var t = Ac;
  function r(a, o) {
    for (var i = 0; i < o.length; i++) {
      var s = o[i];
      s.enumerable = s.enumerable || false, s.configurable = true, "value" in s && (s.writable = true), Object.defineProperty(a, t(s.key), s);
    }
  }
  function n(a, o, i) {
    return o && r(a.prototype, o), i && r(a, i), Object.defineProperty(a, "prototype", { writable: false }), a;
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(jc);
var Ot = jc.exports, Lc = { exports: {} }, Ic = { exports: {} };
(function(e2) {
  function t(r) {
    return e2.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
      return n.__proto__ || Object.getPrototypeOf(n);
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports, t(r);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Ic);
var IO = Ic.exports, Fc = { exports: {} };
(function(e2) {
  function t() {
    try {
      var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (e2.exports = t = function() {
      return !!r;
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports)();
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Fc);
var FO = Fc.exports, Wc = { exports: {} }, Hc = { exports: {} };
(function(e2) {
  function t(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Hc);
var WO = Hc.exports;
(function(e2) {
  var t = Ht.default, r = WO;
  function n(a, o) {
    if (o && (t(o) == "object" || typeof o == "function")) return o;
    if (o !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return r(a);
  }
  e2.exports = n, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Wc);
var HO = Wc.exports;
(function(e2) {
  var t = IO, r = FO, n = HO;
  function a(o, i, s) {
    return i = t(i), n(o, r() ? Reflect.construct(i, s || [], t(o).constructor) : i.apply(o, s));
  }
  e2.exports = a, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Lc);
var Jt = Lc.exports, zc = { exports: {} }, Bc = { exports: {} };
(function(e2) {
  function t(r, n) {
    return e2.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, o) {
      return a.__proto__ = o, a;
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports, t(r, n);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Bc);
var zO = Bc.exports;
(function(e2) {
  var t = zO;
  function r(n, a) {
    if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(a && a.prototype, { constructor: { value: n, writable: true, configurable: true } }), Object.defineProperty(n, "prototype", { writable: false }), a && t(n, a);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(zc);
var Qt = zc.exports;
const Hr = Sr(Xu);
var Ce = {}, Wt = {};
Object.defineProperty(Wt, "__esModule", { value: true });
Wt.views = Wt.navigate = void 0;
Wt.navigate = { PREVIOUS: "PREV", NEXT: "NEXT", TODAY: "TODAY", DATE: "DATE" };
Wt.views = { MONTH: "month", WEEK: "week", WORK_WEEK: "work_week", DAY: "day", AGENDA: "agenda" };
var BO = he.default;
Object.defineProperty(Ce, "__esModule", { value: true });
Ce.views = Ce.dateRangeFormat = Ce.dateFormat = Ce.accessor = Ce.DayLayoutAlgorithmPropType = void 0;
var ge = BO(ja), gs = Wt, ys = Object.keys(gs.views).map(function(e2) {
  return gs.views[e2];
});
Ce.accessor = ge.default.oneOfType([ge.default.string, ge.default.func]);
Ce.dateFormat = ge.default.any;
Ce.dateRangeFormat = ge.default.func;
Ce.views = ge.default.oneOfType([ge.default.arrayOf(ge.default.oneOf(ys)), ge.default.objectOf(function(e2, t) {
  var r = ys.indexOf(t) !== -1 && typeof e2[t] == "boolean";
  if (r) return null;
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++) a[o - 2] = arguments[o];
  return ge.default.elementType.apply(ge.default, [e2, t].concat(a));
})]);
Ce.DayLayoutAlgorithmPropType = ge.default.oneOfType([ge.default.oneOf(["overlap", "no-overlap"]), ge.default.func]);
var Yn = {}, er = {}, YO = he.default;
Object.defineProperty(er, "__esModule", { value: true });
er.accessor = Yc;
er.wrapAccessor = void 0;
var UO = YO(Ht);
function Yc(e2, t) {
  var r = null;
  return typeof t == "function" ? r = t(e2) : typeof t == "string" && (0, UO.default)(e2) === "object" && e2 != null && t in e2 && (r = e2[t]), r;
}
er.wrapAccessor = function(t) {
  return function(r) {
    return Yc(r, t);
  };
};
var Tt = {}, qO = he.default;
Object.defineProperty(Tt, "__esModule", { value: true });
Tt.DnDContext = void 0;
var KO = qO(W);
Tt.DnDContext = KO.default.createContext();
var kt = he.default;
Object.defineProperty(Yn, "__esModule", { value: true });
Yn.default = void 0;
var GO = kt(ot), VO = kt(St), XO = kt(Ot), ZO = kt(Jt), JO = kt(Qt), Ct = kt(W), bs = kt(Hr), ws = er, QO = Tt, Uc = function(e2) {
  function t() {
    var r;
    (0, VO.default)(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = (0, ZO.default)(this, t, [].concat(a)), r.handleResizeUp = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "UP");
    }, r.handleResizeDown = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "DOWN");
    }, r.handleResizeLeft = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "LEFT");
    }, r.handleResizeRight = function(i) {
      i.button === 0 && r.context.draggable.onBeginAction(r.props.event, "resize", "RIGHT");
    }, r.handleStartDragging = function(i) {
      var s;
      if (i.button === 0) {
        var l = (s = i.target.getAttribute("class")) === null || s === void 0 ? void 0 : s.includes("rbc-addons-dnd-resize");
        if (!l) {
          var c = (0, GO.default)({}, r.props.event);
          c.sourceResource = r.props.resource, r.context.draggable.onBeginAction(r.props.event, "move");
        }
      }
    }, r;
  }
  return (0, JO.default)(t, e2), (0, XO.default)(t, [{ key: "renderAnchor", value: function(n) {
    var a = n === "Up" || n === "Down" ? "ns" : "ew";
    return Ct.default.createElement("div", { className: "rbc-addons-dnd-resize-".concat(a, "-anchor"), onMouseDown: this["handleResize".concat(n)] }, Ct.default.createElement("div", { className: "rbc-addons-dnd-resize-".concat(a, "-icon") }));
  } }, { key: "render", value: function() {
    var n = this.props, a = n.event, o = n.type, i = n.continuesPrior, s = n.continuesAfter, l = n.resizable, c = this.props.children;
    if (a.__isPreview) return Ct.default.cloneElement(c, { className: (0, bs.default)(c.props.className, "rbc-addons-dnd-drag-preview") });
    var u = this.context.draggable, d = u.draggableAccessor, f = u.resizableAccessor, v = d ? !!(0, ws.accessor)(a, d) : true;
    if (!v) return c;
    var h = l && (f ? !!(0, ws.accessor)(a, f) : true);
    if (h || v) {
      var p = { onMouseDown: this.handleStartDragging, onTouchStart: this.handleStartDragging };
      if (h) {
        var m = null, y = null;
        o === "date" ? (m = !i && this.renderAnchor("Left"), y = !s && this.renderAnchor("Right")) : (m = !i && this.renderAnchor("Up"), y = !s && this.renderAnchor("Down")), p.children = Ct.default.createElement("div", { className: "rbc-addons-dnd-resizable" }, m, c.props.children, y);
      }
      u.dragAndDropAction.interacting && u.dragAndDropAction.event === a && (p.className = (0, bs.default)(c.props.className, "rbc-addons-dnd-dragged-event")), c = Ct.default.cloneElement(c, p);
    }
    return c;
  } }]);
}(Ct.default.Component);
Uc.contextType = QO.DnDContext;
Yn.default = Uc;
var Un = {}, qc = { exports: {} };
(function(e2) {
  var t = Ht.default;
  function r(n, a) {
    if (typeof WeakMap == "function") var o = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap();
    return (e2.exports = r = function(l, c) {
      if (!c && l && l.__esModule) return l;
      var u, d, f = { __proto__: null, default: l };
      if (l === null || t(l) != "object" && typeof l != "function") return f;
      if (u = c ? i : o) {
        if (u.has(l)) return u.get(l);
        u.set(l, f);
      }
      for (var v in l) v !== "default" && {}.hasOwnProperty.call(l, v) && ((d = (u = Object.defineProperty) && Object.getOwnPropertyDescriptor(l, v)) && (d.get || d.set) ? u(f, v, d) : f[v] = l[v]);
      return f;
    }, e2.exports.__esModule = true, e2.exports.default = e2.exports)(n, a);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(qc);
var Kc = qc.exports;
function ko(e2, t, r, n) {
  if (r === void 0 && (r = false), n === void 0 && (n = true), e2) {
    var a = document.createEvent("HTMLEvents");
    a.initEvent(t, r, n), e2.dispatchEvent(a);
  }
}
function eT(e2) {
  var t = ce(e2, "transitionDuration") || "", r = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * r;
}
function tT(e2, t, r) {
  r === void 0 && (r = 5);
  var n = false, a = setTimeout(function() {
    n || ko(e2, "transitionend", true);
  }, t + r), o = Le(e2, "transitionend", function() {
    n = true;
  }, { once: true });
  return function() {
    clearTimeout(a), o();
  };
}
function Co(e2, t, r, n) {
  r == null && (r = eT(e2) || 0);
  var a = tT(e2, r, n), o = Le(e2, "transitionend", t);
  return function() {
    a(), o();
  };
}
var xs = { transition: "", "transition-duration": "", "transition-delay": "", "transition-timing-function": "" };
function $s(e2) {
  var t = e2.node, r = e2.properties, n = e2.duration, a = n === void 0 ? 200 : n, o = e2.easing, i = e2.callback, s = [], l = {}, c = "";
  Object.keys(r).forEach(function(f) {
    var v = r[f];
    sl(f) ? c += f + "(" + v + ") " : (l[f] = v, s.push(il(f)));
  }), c && (l.transform = c, s.push("transform"));
  function u(f) {
    f.target === f.currentTarget && (ce(t, xs), i && i.call(this, f));
  }
  a > 0 && (l.transition = s.join(", "), l["transition-duration"] = a / 1e3 + "s", l["transition-delay"] = "0s", l["transition-timing-function"] = o || "linear");
  var d = Co(t, u, a);
  return t.clientLeft, ce(t, l), { cancel: function() {
    d(), ce(t, xs);
  } };
}
function Gc(e2, t, r, n, a) {
  if (!("nodeType" in e2)) return $s(e2);
  if (!t) throw new Error("must include properties to animate");
  return typeof n == "function" && (a = n, n = ""), $s({ node: e2, properties: t, duration: r, easing: n, callback: a });
}
function Vc(e2, t, r) {
  if (e2) {
    if (typeof r > "u") return e2.getAttribute(t);
    !r && r !== "" ? e2.removeAttribute(t) : e2.setAttribute(t, String(r));
  }
}
function Xc(e2) {
  return e2 ? Array.from(e2.children) : [];
}
function Zc(e2) {
  if (e2) {
    for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
    return e2;
  }
  return null;
}
var rT = Function.prototype.bind.call(Function.prototype.call, [].slice);
function Jc(e2) {
  return e2 ? rT(e2.childNodes) : [];
}
function Qc(e2, t) {
  return function(n) {
    var a = n.currentTarget, o = n.target, i = xn(a, e2);
    i.some(function(s) {
      return Ye(s, o);
    }) && t.call(this, n);
  };
}
function eu(e2, t) {
  return e2 && t && t.parentNode ? (t.nextSibling ? t.parentNode.insertBefore(e2, t.nextSibling) : t.parentNode.appendChild(e2), e2) : null;
}
var nT = /^(?:input|select|textarea|button)$/i;
function tu(e2) {
  return e2 ? nT.test(e2.nodeName) : false;
}
function ru(e2) {
  return e2 ? !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length) : false;
}
function nu(e2, t, r) {
  t === void 0 && (t = null), r === void 0 && (r = null);
  for (var n = []; e2; e2 = e2.nextElementSibling) if (e2 !== t) {
    if (r && wn(e2, r)) break;
    n.push(e2);
  }
  return n;
}
function au(e2, t) {
  return nu(e2, e2, t);
}
function aT(e2, t) {
  var r = null, n = [];
  for (r = e2 ? e2[t] : null; r && r.nodeType !== 9; ) n.push(r), r = r[t] || null;
  return n;
}
function ou(e2) {
  return aT(e2, "parentElement");
}
function iu(e2, t) {
  return e2 && t ? (t.firstElementChild ? t.insertBefore(e2, t.firstElementChild) : t.appendChild(e2), e2) : null;
}
function su(e2) {
  return e2 && e2.parentNode ? (e2.parentNode.removeChild(e2), e2) : null;
}
function Ao(e2, t) {
  var r = ce(e2, "position"), n = r === "absolute", a = e2.ownerDocument;
  if (r === "fixed") return a || document;
  for (; (e2 = e2.parentNode) && !ll(e2); ) {
    var o = n && ce(e2, "position") === "static", i = (ce(e2, "overflow") || "") + (ce(e2, "overflow-y") || "") + ce(e2, "overflow-x");
    if (!o && /(auto|scroll)/.test(i) && (t || gt(e2) < e2.scrollHeight)) return e2;
  }
  return a || document;
}
function lu(e2, t) {
  var r = Ae(e2), n = { top: 0, left: 0 };
  if (e2) {
    var a = t || Ao(e2), o = gn(a), i = Rt(a), s = gt(a, true);
    o || (n = Ae(a)), r = { top: r.top - n.top, left: r.left - n.left, height: r.height, width: r.width };
    var l = r.height, c = r.top + (o ? 0 : i), u = c + l;
    i = i > c ? c : u > i + s ? u - s : i;
    var d = Mr(function() {
      return Rt(a, i);
    });
    return function() {
      return br(d);
    };
  }
}
function cu(e2) {
  return nu(e2 && e2.parentElement ? e2.parentElement.firstElementChild : null, e2);
}
var oT = /&nbsp;/gi, iT = /\xA0/g, sT = /\s+([^\s])/gm;
function uu(e2, t, r) {
  t === void 0 && (t = true), r === void 0 && (r = true);
  var n = "";
  return e2 && (n = (e2.textContent || "").replace(oT, " ").replace(iT, " "), t && (n = n.trim()), r && (n = n.replace(sT, " $1"))), n;
}
function du(e2, t) {
  e2.classList ? e2.classList.toggle(t) : En(e2, t) ? _n(e2, t) : Dn(e2, t);
}
const lT = { addEventListener: qa, removeEventListener: to, triggerEvent: ko, animate: Gc, filter: Qc, listen: Le, style: ce, getComputedStyle: Ba, attribute: Vc, activeElement: yl, ownerDocument: nt, ownerWindow: za, requestAnimationFrame: Mr, cancelAnimationFrame: br, matches: wn, height: gt, width: $r, offset: Ae, offsetParent: Ya, position: bn, contains: Ye, scrollbarSize: Rr, scrollLeft: yn, scrollParent: Ao, scrollTo: lu, scrollTop: Rt, querySelectorAll: xn, closest: Lr, addClass: Dn, removeClass: _n, hasClass: En, toggleClass: du, transitionEnd: Co, childNodes: Jc, childElements: Xc, nextUntil: au, parents: ou, siblings: cu, clear: Zc, insertAfter: eu, isInput: tu, isVisible: ru, prepend: iu, remove: su, text: uu }, cT = Object.freeze(Object.defineProperty({ __proto__: null, activeElement: yl, addClass: Dn, addEventListener: qa, animate: Gc, attribute: Vc, cancelAnimationFrame: br, childElements: Xc, childNodes: Jc, clear: Zc, closest: Lr, contains: Ye, default: lT, filter: Qc, getComputedStyle: Ba, hasClass: En, height: gt, insertAfter: eu, isInput: tu, isVisible: ru, listen: Le, matches: wn, nextUntil: au, offset: Ae, offsetParent: Ya, ownerDocument: nt, ownerWindow: za, parents: ou, position: bn, prepend: iu, querySelectorAll: xn, remove: su, removeClass: _n, removeEventListener: to, requestAnimationFrame: Mr, scrollLeft: yn, scrollParent: Ao, scrollTo: lu, scrollTop: Rt, scrollbarSize: Rr, siblings: cu, style: ce, text: uu, toggleClass: du, transitionEnd: Co, triggerEvent: ko, width: $r }, Symbol.toStringTag, { value: "Module" })), uT = Sr(cT);
var Ca = { exports: {} };
(function(e2, t) {
  t.__esModule = true, t.default = n;
  var r = Function.prototype.bind.call(Function.prototype.call, [].slice);
  function n(a, o) {
    return r(a.querySelectorAll(o));
  }
  e2.exports = t.default;
})(Ca, Ca.exports);
var dT = Ca.exports, Pe = {};
const fT = Sr(Bf), vT = Sr(U0), pT = Sr(ap);
var tr = he.default;
Object.defineProperty(Pe, "__esModule", { value: true });
Pe.default = void 0;
Pe.getBoundsForNode = _r;
Pe.getEventNodeFromPoint = vu;
Pe.getShowMoreNodeFromPoint = pu;
Pe.isEvent = wT;
Pe.isShowMore = xT;
Pe.objectsCollide = Ma;
var hT = tr(Ht), mT = tr(St), gT = tr(Ot), Aa = tr(fT), fu = tr(vT), yT = tr(pT);
function fe(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document;
  return (0, yT.default)(r, e2, t, { passive: false });
}
function bT(e2, t, r) {
  return !e2 || (0, Aa.default)(e2, document.elementFromPoint(t, r));
}
function vu(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return (0, fu.default)(a, ".rbc-event", e2);
}
function pu(e2, t) {
  var r = t.clientX, n = t.clientY, a = document.elementFromPoint(r, n);
  return (0, fu.default)(a, ".rbc-show-more", e2);
}
function wT(e2, t) {
  return !!vu(e2, t);
}
function xT(e2, t) {
  return !!pu(e2, t);
}
function or(e2) {
  var t = e2;
  return e2.touches && e2.touches.length && (t = e2.touches[0]), { clientX: t.clientX, clientY: t.clientY, pageX: t.pageX, pageY: t.pageY };
}
var Es = 5, $T = 250, ET = function() {
  function e2(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.global, a = n === void 0 ? false : n, o = r.longPressThreshold, i = o === void 0 ? 250 : o, s = r.validContainers, l = s === void 0 ? [] : s;
    (0, mT.default)(this, e2), this._initialEvent = null, this.selecting = false, this.isDetached = false, this.container = t, this.globalMouse = !t || a, this.longPressThreshold = i, this.validContainers = l, this._listeners = /* @__PURE__ */ Object.create(null), this._handleInitialEvent = this._handleInitialEvent.bind(this), this._handleMoveEvent = this._handleMoveEvent.bind(this), this._handleTerminatingEvent = this._handleTerminatingEvent.bind(this), this._keyListener = this._keyListener.bind(this), this._dropFromOutsideListener = this._dropFromOutsideListener.bind(this), this._dragOverFromOutsideListener = this._dragOverFromOutsideListener.bind(this), this._removeTouchMoveWindowListener = fe("touchmove", function() {
    }, window), this._removeKeyDownListener = fe("keydown", this._keyListener), this._removeKeyUpListener = fe("keyup", this._keyListener), this._removeDropFromOutsideListener = fe("drop", this._dropFromOutsideListener), this._removeDragOverFromOutsideListener = fe("dragover", this._dragOverFromOutsideListener), this._addInitialEventListener();
  }
  return (0, gT.default)(e2, [{ key: "on", value: function(r, n) {
    var a = this._listeners[r] || (this._listeners[r] = []);
    return a.push(n), { remove: function() {
      var i = a.indexOf(n);
      i !== -1 && a.splice(i, 1);
    } };
  } }, { key: "emit", value: function(r) {
    for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
    var i, s = this._listeners[r] || [];
    return s.forEach(function(l) {
      i === void 0 && (i = l.apply(void 0, a));
    }), i;
  } }, { key: "teardown", value: function() {
    this._initialEvent = null, this._initialEventData = null, this._selectRect = null, this.selecting = false, this._lastClickData = null, this.isDetached = true, this._listeners = /* @__PURE__ */ Object.create(null), this._removeTouchMoveWindowListener && this._removeTouchMoveWindowListener(), this._removeInitialEventListener && this._removeInitialEventListener(), this._removeEndListener && this._removeEndListener(), this._onEscListener && this._onEscListener(), this._removeMoveListener && this._removeMoveListener(), this._removeKeyUpListener && this._removeKeyUpListener(), this._removeKeyDownListener && this._removeKeyDownListener(), this._removeDropFromOutsideListener && this._removeDropFromOutsideListener(), this._removeDragOverFromOutsideListener && this._removeDragOverFromOutsideListener();
  } }, { key: "isSelected", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? false : Ma(n, _r(r));
  } }, { key: "filter", value: function(r) {
    var n = this._selectRect;
    return !n || !this.selecting ? [] : r.filter(this.isSelected, this);
  } }, { key: "_addLongPressListener", value: function(r, n) {
    var a = this, o = null, i = null, s = null, l = function(f) {
      o = setTimeout(function() {
        u(), r(f);
      }, a.longPressThreshold), i = fe("touchmove", function() {
        return u();
      }), s = fe("touchend", function() {
        return u();
      });
    }, c = fe("touchstart", l), u = function() {
      o && clearTimeout(o), i && i(), s && s(), o = null, i = null, s = null;
    };
    return n && l(n), function() {
      u(), c();
    };
  } }, { key: "_addInitialEventListener", value: function() {
    var r = this, n = fe("mousedown", function(o) {
      r._removeInitialEventListener(), r._handleInitialEvent(o), r._removeInitialEventListener = fe("mousedown", r._handleInitialEvent);
    }), a = fe("touchstart", function(o) {
      r._removeInitialEventListener(), r._removeInitialEventListener = r._addLongPressListener(r._handleInitialEvent, o);
    });
    this._removeInitialEventListener = function() {
      n(), a();
    };
  } }, { key: "_dropFromOutsideListener", value: function(r) {
    var n = or(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dropFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_dragOverFromOutsideListener", value: function(r) {
    var n = or(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY;
    this.emit("dragOverFromOutside", { x: a, y: o, clientX: i, clientY: s }), r.preventDefault();
  } }, { key: "_handleInitialEvent", value: function(r) {
    if (this._initialEvent = r, !this.isDetached) {
      var n = or(r), a = n.clientX, o = n.clientY, i = n.pageX, s = n.pageY, l = this.container(), c, u;
      if (!(r.which === 3 || r.button === 2 || !bT(l, a, o))) {
        if (!this.globalMouse && l && !(0, Aa.default)(l, r.target)) {
          var d = DT(0), f = d.top, v = d.left, h = d.bottom, p = d.right;
          if (u = _r(l), c = Ma({ top: u.top - f, left: u.left - v, bottom: u.bottom + h, right: u.right + p }, { top: s, left: i }), !c) return;
        }
        var m = this.emit("beforeSelect", this._initialEventData = { isTouch: /^touch/.test(r.type), x: i, y: s, clientX: a, clientY: o });
        if (m !== false) switch (r.type) {
          case "mousedown":
            this._removeEndListener = fe("mouseup", this._handleTerminatingEvent), this._onEscListener = fe("keydown", this._handleTerminatingEvent), this._removeMoveListener = fe("mousemove", this._handleMoveEvent);
            break;
          case "touchstart":
            this._handleMoveEvent(r), this._removeEndListener = fe("touchend", this._handleTerminatingEvent), this._removeMoveListener = fe("touchmove", this._handleMoveEvent);
            break;
        }
      }
    }
  } }, { key: "_isWithinValidContainer", value: function(r) {
    var n = r.target, a = this.validContainers;
    return !a || !a.length || !n ? true : a.some(function(o) {
      return !!n.closest(o);
    });
  } }, { key: "_handleTerminatingEvent", value: function(r) {
    var n = this.selecting, a = this._selectRect;
    if (!n && r.type.includes("key") && (r = this._initialEvent), this.selecting = false, this._removeEndListener && this._removeEndListener(), this._removeMoveListener && this._removeMoveListener(), this._selectRect = null, this._initialEvent = null, this._initialEventData = null, !!r) {
      var o = !this.container || (0, Aa.default)(this.container(), r.target), i = this._isWithinValidContainer(r);
      return r.key === "Escape" || !i ? this.emit("reset") : !n && o ? this._handleClickEvent(r) : n ? this.emit("select", a) : this.emit("reset");
    }
  } }, { key: "_handleClickEvent", value: function(r) {
    var n = or(r), a = n.pageX, o = n.pageY, i = n.clientX, s = n.clientY, l = (/* @__PURE__ */ new Date()).getTime();
    return this._lastClickData && l - this._lastClickData.timestamp < $T ? (this._lastClickData = null, this.emit("doubleClick", { x: a, y: o, clientX: i, clientY: s })) : (this._lastClickData = { timestamp: l }, this.emit("click", { x: a, y: o, clientX: i, clientY: s }));
  } }, { key: "_handleMoveEvent", value: function(r) {
    if (!(this._initialEventData === null || this.isDetached)) {
      var n = this._initialEventData, a = n.x, o = n.y, i = or(r), s = i.pageX, l = i.pageY, c = Math.abs(a - s), u = Math.abs(o - l), d = Math.min(s, a), f = Math.min(l, o), v = this.selecting, h = this.isClick(s, l);
      h && !v && !(c || u) || (!v && !h && this.emit("selectStart", this._initialEventData), h || (this.selecting = true, this._selectRect = { top: f, left: d, x: s, y: l, right: d + c, bottom: f + u }, this.emit("selecting", this._selectRect)), r.preventDefault());
    }
  } }, { key: "_keyListener", value: function(r) {
    this.ctrl = r.metaKey || r.ctrlKey;
  } }, { key: "isClick", value: function(r, n) {
    var a = this._initialEventData, o = a.x, i = a.y, s = a.isTouch;
    return !s && Math.abs(r - o) <= Es && Math.abs(n - i) <= Es;
  } }]);
}();
function DT() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return (0, hT.default)(e2) !== "object" && (e2 = { top: e2, left: e2, right: e2, bottom: e2 }), e2;
}
function Ma(e2, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = _r(e2), a = n.top, o = n.left, i = n.right, s = i === void 0 ? o : i, l = n.bottom, c = l === void 0 ? a : l, u = _r(t), d = u.top, f = u.left, v = u.right, h = v === void 0 ? f : v, p = u.bottom, m = p === void 0 ? d : p;
  return !(c - r < d || a + r > m || s - r < f || o + r > h);
}
function _r(e2) {
  if (!e2.getBoundingClientRect) return e2;
  var t = e2.getBoundingClientRect(), r = t.left + Ds("left"), n = t.top + Ds("top");
  return { top: n, left: r, right: (e2.offsetWidth || 0) + r, bottom: (e2.offsetHeight || 0) + n };
}
function Ds(e2) {
  if (e2 === "left") return window.pageXOffset || document.body.scrollLeft || 0;
  if (e2 === "top") return window.pageYOffset || document.body.scrollTop || 0;
}
Pe.default = ET;
var qn = {}, Kn = he.default;
Object.defineProperty(qn, "__esModule", { value: true });
qn.default = void 0;
var _T = Kn(Mc), _s = Kn(ot), ST = Kn(Hr), ir = Kn(W);
function Gr(e2) {
  return typeof e2 == "string" ? e2 : e2 + "%";
}
function OT(e2) {
  var t = e2.style, r = e2.className, n = e2.event, a = e2.accessors, o = e2.rtl, i = e2.selected, s = e2.label, l = e2.continuesPrior, c = e2.continuesAfter, u = e2.getters, d = e2.onClick, f = e2.onDoubleClick, v = e2.isBackgroundEvent, h = e2.onKeyPress, p = e2.components, m = p.event, y = p.eventWrapper, g = a.title(n), $ = a.tooltip(n), b = a.end(n), E = a.start(n), _ = u.eventProp(n, E, b, i), P = [ir.default.createElement("div", { key: "1", className: "rbc-event-label" }, s), ir.default.createElement("div", { key: "2", className: "rbc-event-content" }, m ? ir.default.createElement(m, { event: n, title: g }) : g)], N = t.height, M = t.top, C = t.width, D = t.xOffset, z = (0, _s.default)((0, _s.default)({}, _.style), {}, (0, _T.default)({ top: Gr(M), height: Gr(N), width: Gr(C) }, o ? "right" : "left", Gr(D)));
  return ir.default.createElement(y, Object.assign({ type: "time" }, e2), ir.default.createElement("div", { role: "button", tabIndex: 0, onClick: d, onDoubleClick: f, style: z, onKeyDown: h, title: $ ? (typeof s == "string" ? s + ": " : "") + $ : void 0, className: (0, ST.default)(v ? "rbc-background-event" : "rbc-event", r, _.className, { "rbc-selected": i, "rbc-event-continues-earlier": l, "rbc-event-continues-later": c }) }, P));
}
qn.default = OT;
var Ke = {}, hu = he.default;
Object.defineProperty(Ke, "__esModule", { value: true });
Ke.dragAccessors = void 0;
Ke.eventTimes = RT;
Ke.mergeComponents = PT;
Ke.pointInColumn = NT;
var TT = hu(ot), kT = hu(To), Ss = er, CT = W, AT = ["children"];
Ke.dragAccessors = { start: (0, Ss.wrapAccessor)(function(e2) {
  return e2.start;
}), end: (0, Ss.wrapAccessor)(function(e2) {
  return e2.end;
}) };
function MT() {
  for (var e2 = arguments.length, t = new Array(e2), r = 0; r < e2; r++) t[r] = arguments[r];
  var n = function(o) {
    var i = o.children, s = (0, kT.default)(o, AT);
    return t.filter(Boolean).reduceRight(function(l, c) {
      return (0, CT.createElement)(c, s, l);
    }, i);
  };
  return n;
}
function PT() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, r = Object.keys(t), n = (0, TT.default)({}, e2);
  return r.forEach(function(a) {
    n[a] = e2[a] ? MT(e2[a], t[a]) : t[a];
  }), n;
}
function NT(e2, t) {
  var r = e2.left, n = e2.right, a = e2.top, o = t.x, i = t.y;
  return o < n + 10 && o > r && i > a;
}
function RT(e2, t, r) {
  var n = t.start(e2), a = t.end(e2), o = r.eq(n, a, "minutes") && r.diff(n, a, "minutes") === 0;
  o && (a = r.add(a, 1, "day"));
  var i = r.diff(n, a, "milliseconds");
  return { start: n, end: a, duration: i };
}
var jT = Kc.default, it = he.default;
Object.defineProperty(Un, "__esModule", { value: true });
Un.default = void 0;
var Xe = it(ot), LT = it(St), IT = it(Ot), FT = it(Jt), WT = it(Qt), fa = uT, HT = it(dT), vt = it(W), zT = Tt, Ze = jT(Pe), BT = it(qn), Be = Ke, mu = function(e2) {
  function t() {
    var r;
    (0, LT.default)(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = (0, FT.default)(this, t, [].concat(a)), r.handleMove = function(i, s) {
      if (!(0, Be.pointInColumn)(s, i)) return r.reset();
      var l = r.context.draggable.dragAndDropAction.event, c = r.props, u = c.accessors, d = c.slotMetrics, f = d.closestSlotFromPoint({ y: i.y - r.eventOffsetTop, x: i.x }, s), v = (0, Be.eventTimes)(l, u, r.props.localizer), h = v.duration, p = r.props.localizer.add(f, h, "milliseconds");
      r.update(l, d.getRange(f, p, false, true));
    }, r.handleDropFromOutside = function(i, s) {
      var l = r.props, c = l.slotMetrics, u = l.resource, d = c.closestSlotFromPoint({ y: i.y, x: i.x }, s), f = r._calculateDnDEnd(d);
      r.context.draggable.onDropFromOutside({ start: d, end: f, allDay: false, resource: u }), r.reset();
    }, r.handleDragOverFromOutside = function(i, s) {
      var l = r.props.slotMetrics, c = l.closestSlotFromPoint({ y: i.y, x: i.x }, s), u = r._calculateDnDEnd(c), d = r.context.draggable.dragFromOutsideItem();
      r.update(d, l.getRange(c, u, false, true));
    }, r._calculateDnDEnd = function(i) {
      var s = r.props, l = s.accessors, c = s.slotMetrics, u = s.localizer, d = r.context.draggable.dragFromOutsideItem(), f = (0, Be.eventTimes)(d, l, u), v = f.duration, h = c.nextSlot(i), p = !isNaN(v);
      if (p) {
        var m = u.add(i, v, "milliseconds");
        h = new Date(Math.max(m, h));
      }
      return h;
    }, r.updateParentScroll = function(i, s) {
      setTimeout(function() {
        var l = (0, HT.default)(s, ".rbc-addons-dnd-drag-preview")[0];
        l && (l.offsetTop < i.scrollTop ? (0, fa.scrollTop)(i, Math.max(l.offsetTop, 0)) : l.offsetTop + l.offsetHeight > i.scrollTop + i.clientHeight && (0, fa.scrollTop)(i, Math.min(l.offsetTop - i.offsetHeight + l.offsetHeight, i.scrollHeight)));
      });
    }, r._selectable = function() {
      var i = r.ref.current, s = i.children[0], l = false, c = r._selector = new Ze.default(function() {
        return i.closest(".rbc-time-view");
      }), u = (0, fa.scrollParent)(i);
      c.on("beforeSelect", function(d) {
        var f = r.context.draggable.dragAndDropAction;
        if (!f.action) return false;
        if (f.action === "resize") return (0, Be.pointInColumn)((0, Ze.getBoundsForNode)(s), d);
        var v = (0, Ze.getEventNodeFromPoint)(s, d);
        if (!v) return false;
        r.eventOffsetTop = d.y - (0, Ze.getBoundsForNode)(v).top;
      }), c.on("selecting", function(d) {
        var f = (0, Ze.getBoundsForNode)(s), v = r.context.draggable.dragAndDropAction;
        v.action === "move" && (r.updateParentScroll(u, s), r.handleMove(d, f)), v.action === "resize" && (r.updateParentScroll(u, s), r.handleResize(d, f));
      }), c.on("dropFromOutside", function(d) {
        if (r.context.draggable.onDropFromOutside) {
          var f = (0, Ze.getBoundsForNode)(s);
          (0, Be.pointInColumn)(f, d) && r.handleDropFromOutside(d, f);
        }
      }), c.on("dragOverFromOutside", function(d) {
        var f = r.context.draggable.dragFromOutsideItem ? r.context.draggable.dragFromOutsideItem() : null;
        if (f) {
          var v = (0, Ze.getBoundsForNode)(s);
          if (!(0, Be.pointInColumn)(v, d)) return r.reset();
          r.handleDragOverFromOutside(d, v);
        }
      }), c.on("selectStart", function() {
        l = true, r.context.draggable.onStart();
      }), c.on("select", function(d) {
        var f = (0, Ze.getBoundsForNode)(s);
        l = false;
        var v = r.context.draggable.dragAndDropAction;
        if (v.action === "resize") r.handleInteractionEnd();
        else {
          if (!r.state.event || !(0, Be.pointInColumn)(f, d)) return;
          r.handleInteractionEnd();
        }
      }), c.on("click", function() {
        l && r.reset(), r.context.draggable.onEnd(null);
      }), c.on("reset", function() {
        r.reset(), r.context.draggable.onEnd(null);
      });
    }, r.handleInteractionEnd = function() {
      var i = r.props.resource, s = r.state.event;
      r.reset(), r.context.draggable.onEnd({ start: s.start, end: s.end, resourceId: i });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r.state = {}, r.ref = vt.default.createRef(), r;
  }
  return (0, WT.default)(t, e2), (0, IT.default)(t, [{ key: "componentDidMount", value: function() {
    this._selectable();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable();
  } }, { key: "reset", value: function() {
    this.state.event && this.setState({ event: null, top: null, height: null });
  } }, { key: "update", value: function(n, a) {
    var o = a.startDate, i = a.endDate, s = a.top, l = a.height, c = this.state.event;
    c && o === c.start && i === c.end || this.setState({ top: s, height: l, event: (0, Xe.default)((0, Xe.default)({}, n), {}, { start: o, end: i }) });
  } }, { key: "handleResize", value: function(n, a) {
    var o = this.props, i = o.accessors, s = o.slotMetrics, l = o.localizer, c = this.context.draggable.dragAndDropAction, u = c.event, d = c.direction, f = s.closestSlotFromPoint(n, a), v = (0, Be.eventTimes)(u, i, l), h = v.start, p = v.end, m;
    if (d === "UP") {
      var y = l.min(f, s.closestSlotFromDate(p, -1));
      m = s.getRange(y, p), m = (0, Xe.default)((0, Xe.default)({}, m), {}, { endDate: p });
    } else if (d === "DOWN") {
      var g = l.max(f, s.closestSlotFromDate(h));
      m = s.getRange(h, g), m = (0, Xe.default)((0, Xe.default)({}, m), {}, { startDate: h });
    }
    this.update(u, m);
  } }, { key: "renderContent", value: function() {
    var n = this.props, a = n.children, o = n.accessors, i = n.components, s = n.getters, l = n.slotMetrics, c = n.localizer, u = this.state, d = u.event, f = u.top, v = u.height;
    if (!d) return a;
    var h = a.props.children, p = d.start, m = d.end, y, g = "eventTimeRangeFormat", $ = l.startsBeforeDay(p), b = l.startsAfterDay(m);
    return $ ? g = "eventTimeRangeEndFormat" : b && (g = "eventTimeRangeStartFormat"), $ && b ? y = c.messages.allDay : y = c.format({ start: p, end: m }, g), vt.default.cloneElement(a, { children: vt.default.createElement(vt.default.Fragment, null, h, d && vt.default.createElement(BT.default, { event: d, label: y, className: "rbc-addons-dnd-drag-preview", style: { top: f, height: v, width: 100 }, getters: s, components: i, accessors: (0, Xe.default)((0, Xe.default)({}, o), Be.dragAccessors), continuesPrior: $, continuesAfter: b })) });
  } }, { key: "render", value: function() {
    return vt.default.createElement("div", { ref: this.ref }, this.renderContent());
  } }]);
}(vt.default.Component);
mu.contextType = zT.DnDContext;
Un.default = mu;
var Gn = {}, gu = { exports: {} }, yu = { exports: {} }, bu = { exports: {} };
(function(e2) {
  function t(r, n) {
    (n == null || n > r.length) && (n = r.length);
    for (var a = 0, o = Array(n); a < n; a++) o[a] = r[a];
    return o;
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(bu);
var wu = bu.exports;
(function(e2) {
  var t = wu;
  function r(n) {
    if (Array.isArray(n)) return t(n);
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(yu);
var YT = yu.exports, xu = { exports: {} };
(function(e2) {
  function t(r) {
    if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(xu);
var UT = xu.exports, $u = { exports: {} };
(function(e2) {
  var t = wu;
  function r(n, a) {
    if (n) {
      if (typeof n == "string") return t(n, a);
      var o = {}.toString.call(n).slice(8, -1);
      return o === "Object" && n.constructor && (o = n.constructor.name), o === "Map" || o === "Set" ? Array.from(n) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? t(n, a) : void 0;
    }
  }
  e2.exports = r, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})($u);
var qT = $u.exports, Eu = { exports: {} };
(function(e2) {
  function t() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  e2.exports = t, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(Eu);
var KT = Eu.exports;
(function(e2) {
  var t = YT, r = UT, n = qT, a = KT;
  function o(i) {
    return t(i) || r(i) || n(i) || a();
  }
  e2.exports = o, e2.exports.__esModule = true, e2.exports.default = e2.exports;
})(gu);
var Du = gu.exports, Vn = {}, Xn = {}, Zn = {}, st = he.default;
Object.defineProperty(Zn, "__esModule", { value: true });
Zn.default = void 0;
var Os = st(ot), GT = st(To), VT = st(St), XT = st(Ot), ZT = st(Jt), JT = st(Qt), sr = st(W), QT = st(Hr), ek = ["style", "className", "event", "selected", "isAllDay", "onSelect", "onDoubleClick", "onKeyPress", "localizer", "continuesPrior", "continuesAfter", "accessors", "getters", "children", "components", "slotStart", "slotEnd"], tk = function(e2) {
  function t() {
    return (0, VT.default)(this, t), (0, ZT.default)(this, t, arguments);
  }
  return (0, JT.default)(t, e2), (0, XT.default)(t, [{ key: "render", value: function() {
    var n = this.props, a = n.style, o = n.className, i = n.event, s = n.selected, l = n.isAllDay, c = n.onSelect, u = n.onDoubleClick, d = n.onKeyPress, f = n.localizer, v = n.continuesPrior, h = n.continuesAfter, p = n.accessors, m = n.getters, y = n.children, g = n.components, $ = g.event, b = g.eventWrapper, E = n.slotStart, _ = n.slotEnd, P = (0, GT.default)(n, ek);
    delete P.resizable;
    var N = p.title(i), M = p.tooltip(i), C = p.end(i), D = p.start(i), z = p.allDay(i), F = l || z || f.diff(D, f.ceil(C, "day"), "day") > 1, T = m.eventProp(i, D, C, s), O = sr.default.createElement("div", { className: "rbc-event-content", title: M || void 0 }, $ ? sr.default.createElement($, { event: i, continuesPrior: v, continuesAfter: h, title: N, isAllDay: z, localizer: f, slotStart: E, slotEnd: _ }) : N);
    return sr.default.createElement(b, Object.assign({}, this.props, { type: "date" }), sr.default.createElement("div", Object.assign({}, P, { style: (0, Os.default)((0, Os.default)({}, T.style), a), className: (0, QT.default)("rbc-event", o, T.className, { "rbc-selected": s, "rbc-event-allday": F, "rbc-event-continues-prior": v, "rbc-event-continues-after": h }), onClick: function(R) {
      return c && c(i, R);
    }, onDoubleClick: function(R) {
      return u && u(i, R);
    }, onKeyDown: function(R) {
      return d && d(i, R);
    } }), typeof y == "function" ? y(O) : O));
  } }]);
}(sr.default.Component);
Zn.default = tk;
var lt = {}, rk = he.default;
Object.defineProperty(lt, "__esModule", { value: true });
lt.dateCellSelection = ik;
lt.getSlotAtX = _u;
lt.isSelected = ak;
lt.pointInBox = ok;
lt.slotWidth = Mo;
var nk = rk(Cl);
function ak(e2, t) {
  return !e2 || t == null ? false : (0, nk.default)(e2, t);
}
function Mo(e2, t) {
  var r = e2.right - e2.left, n = r / t;
  return n;
}
function _u(e2, t, r, n) {
  var a = Mo(e2, n);
  return r ? n - 1 - Math.floor((t - e2.left) / a) : Math.floor((t - e2.left) / a);
}
function ok(e2, t) {
  var r = t.x, n = t.y;
  return n >= e2.top && n <= e2.bottom && r >= e2.left && r <= e2.right;
}
function ik(e2, t, r, n, a) {
  var o = -1, i = -1, s = n - 1, l = Mo(t, n), c = _u(t, r.x, a, n), u = t.top < r.y && t.bottom > r.y, d = t.top < e2.y && t.bottom > e2.y, f = e2.y > t.bottom, v = t.top > e2.y, h = r.top < t.top && r.bottom > t.bottom;
  return h && (o = 0, i = s), u && (v ? (o = 0, i = c) : f && (o = c, i = s)), d && (o = i = a ? s - Math.floor((e2.x - t.left) / l) : Math.floor((e2.x - t.left) / l), u ? c < o ? o = c : i = c : e2.y < r.y ? i = s : o = 0), { startIdx: o, endIdx: i };
}
var Po = he.default;
Object.defineProperty(Xn, "__esModule", { value: true });
Xn.default = void 0;
var Re = Po(ja), Ts = Po(W), sk = Po(Zn), lk = lt;
Xn.default = { propTypes: { slotMetrics: Re.default.object.isRequired, selected: Re.default.object, isAllDay: Re.default.bool, accessors: Re.default.object.isRequired, localizer: Re.default.object.isRequired, components: Re.default.object.isRequired, getters: Re.default.object.isRequired, onSelect: Re.default.func, onDoubleClick: Re.default.func, onKeyPress: Re.default.func }, defaultProps: { segments: [], selected: {} }, renderEvent: function(t, r) {
  var n = t.selected;
  t.isAllDay;
  var a = t.accessors, o = t.getters, i = t.onSelect, s = t.onDoubleClick, l = t.onKeyPress, c = t.localizer, u = t.slotMetrics, d = t.components, f = t.resizable, v = u.continuesPrior(r), h = u.continuesAfter(r);
  return Ts.default.createElement(sk.default, { event: r, getters: o, localizer: c, accessors: a, components: d, onSelect: i, onDoubleClick: s, onKeyPress: l, continuesPrior: v, continuesAfter: h, slotStart: u.first, slotEnd: u.last, selected: (0, lk.isSelected)(r, n), resizable: f });
}, renderSpan: function(t, r, n) {
  var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : " ", o = Math.abs(r) / t * 100 + "%";
  return Ts.default.createElement("div", { key: n, className: "rbc-row-segment", style: { WebkitFlexBasis: o, flexBasis: o, maxWidth: o } }, a);
} };
var ct = he.default;
Object.defineProperty(Vn, "__esModule", { value: true });
Vn.default = void 0;
var ck = ct(ot), uk = ct(St), dk = ct(Ot), fk = ct(Jt), vk = ct(Qt), pk = ct(Hr), ks = ct(W), an = ct(Xn), Su = function(e2) {
  function t() {
    return (0, uk.default)(this, t), (0, fk.default)(this, t, arguments);
  }
  return (0, vk.default)(t, e2), (0, dk.default)(t, [{ key: "render", value: function() {
    var n = this, a = this.props, o = a.segments, i = a.slotMetrics.slots, s = a.className, l = 1;
    return ks.default.createElement("div", { className: (0, pk.default)(s, "rbc-row") }, o.reduce(function(c, u, d) {
      var f = u.event, v = u.left, h = u.right, p = u.span, m = "_lvl_" + d, y = v - l, g = an.default.renderEvent(n.props, f);
      return y && c.push(an.default.renderSpan(i, y, "".concat(m, "_gap"))), c.push(an.default.renderSpan(i, p, m, g)), l = h + 1, c;
    }, []));
  } }]);
}(ks.default.Component);
Su.defaultProps = (0, ck.default)({}, an.default.defaultProps);
Vn.default = Su;
var Ge = {}, Ou = he.default;
Object.defineProperty(Ge, "__esModule", { value: true });
Ge.endOfRange = Tu;
Ge.eventLevels = gk;
Ge.eventSegments = mk;
Ge.inRange = yk;
Ge.segsOverlap = ku;
Ge.sortEvents = Pa;
Ge.sortWeekEvents = bk;
var va = Ou(Du), hk = Ou(Rl);
function Tu(e2) {
  var t = e2.dateRange, r = e2.unit, n = r === void 0 ? "day" : r, a = e2.localizer;
  return { first: t[0], last: a.add(t[t.length - 1], 1, n) };
}
function mk(e2, t, r, n) {
  var a = Tu({ dateRange: t, localizer: n }), o = a.first, i = a.last, s = n.diff(o, i, "day"), l = n.max(n.startOf(r.start(e2), "day"), o), c = n.min(n.ceil(r.end(e2), "day"), i), u = (0, hk.default)(t, function(f) {
    return n.isSameDate(f, l);
  }), d = n.diff(l, c, "day");
  return d = Math.min(d, s), d = Math.max(d - n.segmentOffset, 1), { event: e2, span: d, left: u + 1, right: Math.max(u + d, 1) };
}
function gk(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0, r, n, a, o = [], i = [];
  for (r = 0; r < e2.length; r++) {
    for (a = e2[r], n = 0; n < o.length && ku(a, o[n]); n++) ;
    n >= t ? i.push(a) : (o[n] || (o[n] = [])).push(a);
  }
  for (r = 0; r < o.length; r++) o[r].sort(function(s, l) {
    return s.left - l.left;
  });
  return { levels: o, extra: i };
}
function yk(e2, t, r, n, a) {
  var o = { start: n.start(e2), end: n.end(e2) }, i = { start: t, end: r };
  return a.inEventRange({ event: o, range: i });
}
function ku(e2, t) {
  return t.some(function(r) {
    return r.left <= e2.right && r.right >= e2.left;
  });
}
function bk(e2, t, r) {
  var n = (0, va.default)(e2), a = [], o = [];
  n.forEach(function(l) {
    var c = t.start(l), u = t.end(l);
    r.daySpan(c, u) > 1 ? a.push(l) : o.push(l);
  });
  var i = a.sort(function(l, c) {
    return Pa(l, c, t, r);
  }), s = o.sort(function(l, c) {
    return Pa(l, c, t, r);
  });
  return [].concat((0, va.default)(i), (0, va.default)(s));
}
function Pa(e2, t, r, n) {
  var a = { start: r.start(e2), end: r.end(e2), allDay: r.allDay(e2) }, o = { start: r.start(t), end: r.end(t), allDay: r.allDay(t) };
  return n.sortEvents({ evtA: a, evtB: o });
}
var wk = Kc.default, ut = he.default;
Object.defineProperty(Gn, "__esModule", { value: true });
Gn.default = void 0;
var Vr = ut(ot), xk = ut(Du), $k = ut(St), Ek = ut(Ot), Dk = ut(Jt), _k = ut(Qt), Xr = ut(W), Sk = ut(Vn), At = wk(Pe), Ok = Ge, Je = lt, Zr = Ke, Tk = Tt, Cu = function(e2) {
  function t() {
    var r;
    (0, $k.default)(this, t);
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
    return r = (0, Dk.default)(this, t, [].concat(a)), r.handleMove = function(i, s, l) {
      if (!(0, Je.pointInBox)(s, i)) return r.reset();
      var c = r.context.draggable.dragAndDropAction.event || l, u = r.props, d = u.accessors, f = u.slotMetrics, v = u.rtl, h = u.localizer, p = (0, Je.getSlotAtX)(s, i.x, v, f.slots), m = f.getDateForSlot(p), y = (0, Zr.eventTimes)(c, d, h), g = y.start, $ = y.duration;
      g = h.merge(m, g);
      var b = h.add(g, $, "milliseconds");
      r.update(c, g, b);
    }, r.handleDropFromOutside = function(i, s) {
      if (r.context.draggable.onDropFromOutside) {
        var l = r.props, c = l.slotMetrics, u = l.rtl, d = l.localizer, f = (0, Je.getSlotAtX)(s, i.x, u, c.slots), v = c.getDateForSlot(f);
        r.context.draggable.onDropFromOutside({ start: v, end: d.add(v, 1, "day"), allDay: false });
      }
    }, r.handleDragOverFromOutside = function(i, s) {
      var l = r.context.draggable.dragFromOutsideItem ? r.context.draggable.dragFromOutsideItem() : null;
      l && r.handleMove(i, s, l);
    }, r._selectable = function() {
      var i = r.ref.current.closest(".rbc-month-row, .rbc-allday-cell"), s = i.closest(".rbc-month-view, .rbc-time-view"), l = i.classList.contains("rbc-month-row"), c = r._selector = new At.default(function() {
        return s;
      }, { validContainers: (0, xk.default)(l ? [] : [".rbc-day-slot", ".rbc-allday-cell"]) });
      c.on("beforeSelect", function(u) {
        var d = r.props.isAllDay, f = r.context.draggable.dragAndDropAction.action, v = (0, At.getBoundsForNode)(i), h = (0, Je.pointInBox)(v, u);
        return f === "move" || f === "resize" && (!d || h);
      }), c.on("selecting", function(u) {
        var d = (0, At.getBoundsForNode)(i), f = r.context.draggable.dragAndDropAction;
        f.action === "move" && r.handleMove(u, d), f.action === "resize" && r.handleResize(u, d);
      }), c.on("selectStart", function() {
        return r.context.draggable.onStart();
      }), c.on("select", function(u) {
        var d = (0, At.getBoundsForNode)(i);
        r.state.segment && ((0, Je.pointInBox)(d, u) ? r.handleInteractionEnd() : r.reset());
      }), c.on("dropFromOutside", function(u) {
        if (r.context.draggable.onDropFromOutside) {
          var d = (0, At.getBoundsForNode)(i);
          (0, Je.pointInBox)(d, u) && r.handleDropFromOutside(u, d);
        }
      }), c.on("dragOverFromOutside", function(u) {
        if (r.context.draggable.dragFromOutsideItem) {
          var d = (0, At.getBoundsForNode)(i);
          r.handleDragOverFromOutside(u, d);
        }
      }), c.on("click", function() {
        return r.context.draggable.onEnd(null);
      }), c.on("reset", function() {
        r.reset(), r.context.draggable.onEnd(null);
      });
    }, r.handleInteractionEnd = function() {
      var i = r.props, s = i.resourceId, l = i.isAllDay, c = r.state.segment.event;
      r.reset(), r.context.draggable.onEnd({ start: c.start, end: c.end, resourceId: s, isAllDay: l });
    }, r._teardownSelectable = function() {
      r._selector && (r._selector.teardown(), r._selector = null);
    }, r.state = {}, r.ref = Xr.default.createRef(), r;
  }
  return (0, _k.default)(t, e2), (0, Ek.default)(t, [{ key: "componentDidMount", value: function() {
    this._selectable();
  } }, { key: "componentWillUnmount", value: function() {
    this._teardownSelectable();
  } }, { key: "reset", value: function() {
    this.state.segment && this.setState({ segment: null });
  } }, { key: "update", value: function(n, a, o) {
    var i = (0, Ok.eventSegments)((0, Vr.default)((0, Vr.default)({}, n), {}, { end: o, start: a, __isPreview: true }), this.props.slotMetrics.range, Zr.dragAccessors, this.props.localizer), s = this.state.segment;
    s && i.span === s.span && i.left === s.left && i.right === s.right || this.setState({ segment: i });
  } }, { key: "handleResize", value: function(n, a) {
    var o = this.context.draggable.dragAndDropAction, i = o.event, s = o.direction, l = this.props, c = l.accessors, u = l.slotMetrics, d = l.rtl, f = l.localizer, v = (0, Zr.eventTimes)(i, c, f), h = v.start, p = v.end, m = (0, Je.getSlotAtX)(a, n.x, d, u.slots), y = u.getDateForSlot(m), g = (0, Je.pointInBox)(a, n);
    if (s === "RIGHT") {
      if (g) {
        if (u.last < h) return this.reset();
        f.eq(f.startOf(p, "day"), p) ? p = f.add(y, 1, "day") : p = y;
      } else if (f.inRange(h, u.first, u.last) || a.bottom < n.y && +u.first > +h) p = f.add(u.last, 1, "milliseconds");
      else {
        this.setState({ segment: null });
        return;
      }
      var $ = c.end(i);
      p = f.merge(p, $), f.lt(p, h) && (p = $);
    } else if (s === "LEFT") {
      if (g) {
        if (u.first > p) return this.reset();
        h = y;
      } else if (f.inRange(p, u.first, u.last) || a.top > n.y && f.lt(u.last, p)) h = f.add(u.first, -1, "milliseconds");
      else {
        this.reset();
        return;
      }
      var b = c.start(i);
      h = f.merge(h, b), f.gt(h, p) && (h = b);
    }
    this.update(i, h, p);
  } }, { key: "render", value: function() {
    var n = this.props, a = n.children, o = n.accessors, i = this.state.segment;
    return Xr.default.createElement("div", { ref: this.ref, className: "rbc-addons-dnd-row-body" }, a, i && Xr.default.createElement(Sk.default, Object.assign({}, this.props, { selected: null, className: "rbc-addons-dnd-drag-row", segments: [i], accessors: (0, Vr.default)((0, Vr.default)({}, o), Zr.dragAccessors) })));
  } }]);
}(Xr.default.Component);
Cu.contextType = Tk.DnDContext;
Gn.default = Cu;
var Ne = he.default;
Object.defineProperty(Oo, "__esModule", { value: true });
Oo.default = Hk;
var Jr = Ne(ot), kk = Ne(To), Ck = Ne(St), Ak = Ne(Ot), Mk = Ne(Jt), Pk = Ne(Qt), pa = Ne(W), Nk = Ne(Hr), Rk = Ne(Yn), jk = Ne(Un), Lk = Ne(Gn), Ik = Ke, Fk = Tt, Wk = ["selectable", "elementProps", "components"];
function Hk(e2) {
  var t = function(r) {
    function n() {
      var a;
      (0, Ck.default)(this, n);
      for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
      return a = (0, Mk.default)(this, n, [].concat(i)), a.defaultOnDragOver = function(l) {
        l.preventDefault();
      }, a.handleBeginAction = function(l, c, u) {
        a.setState({ event: l, action: c, direction: u });
        var d = a.props.onDragStart;
        d && d({ event: l, action: c, direction: u });
      }, a.handleInteractionStart = function() {
        a.state.interacting === false && a.setState({ interacting: true });
      }, a.handleInteractionEnd = function(l) {
        var c = a.state, u = c.action, d = c.event;
        if (u && (a.setState({ action: null, event: null, interacting: false, direction: null }), l != null)) {
          l.event = d;
          var f = a.props, v = f.onEventDrop, h = f.onEventResize;
          u === "move" && v && v(l), u === "resize" && h && h(l);
        }
      }, a.state = { interacting: false }, a;
    }
    return (0, Pk.default)(n, r), (0, Ak.default)(n, [{ key: "getDnDContextValue", value: function() {
      return { draggable: { onStart: this.handleInteractionStart, onEnd: this.handleInteractionEnd, onBeginAction: this.handleBeginAction, onDropFromOutside: this.props.onDropFromOutside, dragFromOutsideItem: this.props.dragFromOutsideItem, draggableAccessor: this.props.draggableAccessor, resizableAccessor: this.props.resizableAccessor, dragAndDropAction: this.state } };
    } }, { key: "render", value: function() {
      var o = this.props, i = o.selectable, s = o.elementProps, l = o.components, c = (0, kk.default)(o, Wk), u = this.state.interacting;
      delete c.onEventDrop, delete c.onEventResize, c.selectable = i ? "ignoreEvents" : false, this.components = (0, Ik.mergeComponents)(l, { eventWrapper: Rk.default, eventContainerWrapper: jk.default, weekWrapper: Lk.default });
      var d = this.props.onDropFromOutside ? (0, Jr.default)((0, Jr.default)({}, s), {}, { onDragOver: this.props.onDragOver || this.defaultOnDragOver }) : s;
      c.className = (0, Nk.default)(c.className, "rbc-addons-dnd", !!u && "rbc-addons-dnd-is-dragging");
      var f = this.getDnDContextValue();
      return pa.default.createElement(Fk.DnDContext.Provider, { value: f }, pa.default.createElement(e2, Object.assign({}, c, { elementProps: d, components: this.components })));
    } }]);
  }(pa.default.Component);
  return t.defaultProps = (0, Jr.default)((0, Jr.default)({}, e2.defaultProps), {}, { draggableAccessor: null, resizableAccessor: null, resizable: true }), t;
}
var zk = he.default;
Object.defineProperty(So, "__esModule", { value: true });
var Au = So.default = void 0, Bk = zk(Oo);
Au = So.default = Bk.default;
const Yk = ({ event: e2 }) => {
  const r = { PENDING: { bg: "bg-blue-100/90 dark:bg-blue-500/25", text: "text-blue-900 dark:text-blue-100", border: "border-blue-300/60 dark:border-blue-400/40", shadow: "shadow-blue-200/60 dark:shadow-blue-500/20" }, COMPLETED: { bg: "bg-emerald-100/90 dark:bg-emerald-500/25", text: "text-emerald-900 dark:text-emerald-100", border: "border-emerald-300/60 dark:border-emerald-400/40", shadow: "shadow-emerald-200/60 dark:shadow-emerald-500/20" }, CANCELLED: { bg: "bg-slate-100/90 dark:bg-slate-500/25", text: "text-slate-700 dark:text-slate-200", border: "border-slate-300/60 dark:border-slate-400/40", shadow: "shadow-slate-200/60 dark:shadow-slate-500/20" }, RESCHEDULED: { bg: "bg-amber-100/90 dark:bg-amber-500/25", text: "text-amber-900 dark:text-amber-100", border: "border-amber-300/60 dark:border-amber-400/40", shadow: "shadow-amber-200/60 dark:shadow-amber-500/20" } }[e2.status];
  return w.jsxs(X.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, whileHover: { scale: 1.02 }, className: `p-1.5 rounded-lg ${r.bg} ${r.text} border ${r.border} shadow-md ${r.shadow} backdrop-blur-sm h-full overflow-hidden`, children: [w.jsx("div", { className: "font-display font-semibold text-xs leading-tight mb-0.5 break-words", children: e2.companyName }), w.jsx("div", { className: "text-xs opacity-90 font-medium leading-tight break-words", children: e2.position }), e2.roundNumber > 1 && w.jsxs("div", { className: "text-xs opacity-75 mt-0.5 font-medium leading-tight", children: ["\u7B2C", e2.roundNumber, "\u8F6E"] })] });
}, Uk = RO(le), qk = Au(kO), Kk = ({ interviews: e2 = [], onSelectEvent: t, view: r, onViewChange: n, date: a, onDateChange: o, onEventDrop: i, onEventResize: s }) => {
  const l = e2.filter((g) => g.interviewTime ? le(g.interviewTime).isValid() : false).map((g) => {
    const $ = le(g.interviewTime).toDate();
    return { ...g, title: g.companyName || "\u672A\u77E5\u516C\u53F8", start: $, end: le($).add(30, "minute").toDate() };
  }), c = () => {
    const g = le(a).startOf("day");
    let $ = 8, b = 22, E = false;
    l.forEach((N) => {
      const M = le(N.start), C = le(N.end);
      if (M.isValid() && C.isValid()) {
        const D = M.hour(), z = C.hour();
        D < $ && ($ = Math.max(0, D)), z > b || z === 0 && C.isAfter(M, "day") ? (b = 23, E = true) : z > b && (b = Math.min(23, z));
      }
    }), $ >= b && ($ = 8, b = 22);
    const _ = g.hour($).minute(0).second(0).toDate(), P = E ? g.hour(23).minute(59).second(59).toDate() : g.hour(b).minute(0).second(0).toDate();
    return { minTime: _, maxTime: P };
  }, { minTime: u, maxTime: d } = c(), f = u instanceof Date && !isNaN(u.getTime()) && d instanceof Date && !isNaN(d.getTime()) && u.getTime() < d.getTime(), v = f ? u : le(a).startOf("day").add(8, "hour").toDate(), h = f ? d : le(a).startOf("day").add(22, "hour").toDate(), p = () => ({ style: { backgroundColor: "transparent", border: "none" } }), m = { timeGutterFormat: "HH:mm", eventTimeRangeFormat: ({ start: g, end: $ }) => `${le(g).format("HH:mm")} - ${le($).format("HH:mm")}` }, y = (g) => {
    t(g);
  };
  return w.jsx(X.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50", children: w.jsx(qk, { localizer: Uk, events: l, view: r, onView: n, date: a, onNavigate: o, startAccessor: (g) => g.start, endAccessor: (g) => g.end, min: v, max: h, step: 30, timeslots: 2, style: { height: 800 }, eventPropGetter: p, components: { event: Yk }, formats: m, onSelectEvent: y, views: ["month", "week", "day"], toolbar: false, messages: { today: "\u4ECA\u5929", previous: "\u4E0A\u4E00\u9875", next: "\u4E0B\u4E00\u9875", month: "\u6708", week: "\u5468", day: "\u65E5", agenda: "\u5217\u8868", date: "\u65E5\u671F", time: "\u65F6\u95F4", event: "\u4E8B\u4EF6", noEventsInRange: "\u5728\u6B64\u8303\u56F4\u5185\u6CA1\u6709\u9762\u8BD5" }, onEventDrop: i, onEventResize: s, resizable: true, selectable: true }) });
}, Cs = { PENDING: { label: "\u5F85\u9762\u8BD5", className: "bg-blue-500/10 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-300/30 dark:border-blue-400/30" }, COMPLETED: { label: "\u5DF2\u5B8C\u6210", className: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300/30 dark:border-emerald-400/30" }, CANCELLED: { label: "\u5DF2\u53D6\u6D88", className: "bg-slate-500/10 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300 border border-slate-300/30 dark:border-slate-400/30" }, RESCHEDULED: { label: "\u5DF2\u6539\u671F", className: "bg-amber-500/10 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/30 dark:border-amber-400/30" } }, Gk = { ONSITE: "\u73B0\u573A\u9762\u8BD5", VIDEO: "\u89C6\u9891\u9762\u8BD5", PHONE: "\u7535\u8BDD\u9762\u8BD5" }, Vk = ({ interview: e2, onEdit: t, onDelete: r, onStatusChange: n }) => w.jsxs(X.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, whileHover: { y: -2 }, transition: { duration: 0.2 }, className: "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-0.5 transition-all", children: [w.jsxs("div", { className: "flex items-start justify-between gap-4", children: [w.jsxs("div", { className: "flex-1 min-w-0", children: [w.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [w.jsx("span", { className: `status-badge backdrop-blur-sm ${Cs[e2.status].className}`, children: Cs[e2.status].label }), w.jsx("span", { className: "text-sm font-medium text-slate-600 dark:text-slate-400", children: le(e2.interviewTime).format("YYYY-MM-DD HH:mm") })] }), w.jsx("h3", { className: "font-display font-bold text-xl mb-2 text-slate-900 dark:text-white tracking-tight", children: e2.companyName }), w.jsx("p", { className: "text-slate-600 dark:text-slate-300 mb-3 font-medium", children: e2.position }), w.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400", children: [w.jsxs("span", { className: "px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg font-medium", children: ["\u7B2C ", e2.roundNumber, " \u8F6E"] }), w.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "\u2022" }), w.jsx("span", { className: "font-medium", children: Gk[e2.interviewType] || e2.interviewType }), e2.interviewer && w.jsxs(w.Fragment, { children: [w.jsx("span", { className: "text-slate-300 dark:text-slate-600", children: "\u2022" }), w.jsx("span", { className: "font-medium", children: e2.interviewer })] })] }), e2.meetingLink && w.jsxs(X.a, { whileHover: { x: 2 }, href: e2.meetingLink, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-3 transition-colors", children: [w.jsx(Lu, { className: "w-4 h-4" }), "\u8FDB\u5165\u4F1A\u8BAE"] }), e2.notes && w.jsx("p", { className: "text-sm text-slate-500 dark:text-slate-400 mt-3 italic", children: e2.notes })] }), w.jsxs("div", { className: "flex gap-2", children: [w.jsx(X.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: t, className: "p-2.5 text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 rounded-xl hover:shadow-lg hover:shadow-primary-500/20 transition-all", title: "\u7F16\u8F91", children: w.jsx(Iu, { className: "w-5 h-5" }) }), w.jsx(X.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: r, className: "p-2.5 text-slate-400 dark:text-slate-500 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10 dark:hover:bg-red-500/20 rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all", title: "\u5220\u9664", children: w.jsx(Ps, { className: "w-5 h-5" }) })] })] }), e2.status === "PENDING" && w.jsxs(X.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, className: "mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex gap-3", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => n("COMPLETED"), className: "px-4 py-2 text-sm font-medium rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 dark:hover:bg-emerald-500/30 border border-emerald-300/30 dark:border-emerald-400/30 transition-all", children: "\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210" }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, onClick: () => n("CANCELLED"), className: "px-4 py-2 text-sm font-medium rounded-xl bg-slate-500/10 dark:bg-slate-500/20 text-slate-700 dark:text-slate-300 hover:bg-slate-500/20 dark:hover:bg-slate-500/30 border border-slate-300/30 dark:border-slate-400/30 transition-all", children: "\u53D6\u6D88\u9762\u8BD5" })] })] }), Xk = ({ interviews: e2 = [], onEdit: t, onDelete: r, onStatusChange: n }) => {
  const a = [...e2].sort((o, i) => new Date(o.interviewTime).getTime() - new Date(i.interviewTime).getTime());
  return a.length === 0 ? w.jsx(X.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-center py-16", children: w.jsx("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-12 shadow-xl", children: w.jsx("p", { className: "text-slate-500 dark:text-slate-400 text-lg font-medium", children: "\u6682\u65E0\u9762\u8BD5\u8BB0\u5F55" }) }) }) : w.jsx("div", { className: "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 space-y-4", children: a.map((o, i) => w.jsx(X.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2, delay: i * 0.05 }, children: w.jsx(Vk, { interview: o, onEdit: () => t(o), onDelete: () => r(o.id), onStatusChange: (s) => n(o.id, s) }) }, o.id)) });
}, Zk = `\u3010\u963F\u91CC\u5DF4\u5DF4\u3011\u540E\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\u4E00\u9762\u9080\u8BF7
\u5019\u9009\u4EBA\uFF1A\u5F20\u4E09
\u9762\u8BD5\u65F6\u95F4\uFF1A2026-04-15 19:30
\u9762\u8BD5\u5F62\u5F0F\uFF1A\u89C6\u9891\u9762\u8BD5\uFF08\u817E\u8BAF\u4F1A\u8BAE\uFF09
\u4F1A\u8BAE\u94FE\u63A5\uFF1Ahttps://meeting.tencent.com/abc-defg-hij
\u9762\u8BD5\u8F6E\u6B21\uFF1A\u7B2C\u4E00\u8F6E\u6280\u672F\u9762
\u9762\u8BD5\u5B98\uFF1A\u674E\u8001\u5E08
\u5907\u6CE8\uFF1A\u8BF7\u63D0\u524D10\u5206\u949F\u5165\u4F1A\uFF0C\u51C6\u5907\u9879\u76EE\u4ECB\u7ECD\u4E0E\u7CFB\u7EDF\u8BBE\u8BA1\u6848\u4F8B\u3002`, Jk = ({ isOpen: e2, onClose: t, onSubmit: r, onDelete: n, initialData: a, mode: o }) => {
  const [i, s] = W.useState(o === "edit" ? "form" : "text"), [l, c] = W.useState(""), [u, d] = W.useState(null), [f, v] = W.useState(false), [h, p] = W.useState(false), [m, y] = W.useState(null), [g, $] = W.useState(a || { companyName: "", position: "", interviewTime: "", interviewType: "VIDEO", meetingLink: "", roundNumber: 1, interviewer: "", notes: "" });
  if (x.useEffect(() => {
    e2 && (s(o === "edit" ? "form" : "text"), c(""), d(null), y(null), $(a || { companyName: "", position: "", interviewTime: "", interviewType: "VIDEO", meetingLink: "", roundNumber: 1, interviewer: "", notes: "" }));
  }, [e2, o, a]), !e2) return null;
  const b = async () => {
    if (l.trim()) {
      v(true);
      try {
        const D = await Mt.parse(l);
        d(D), D.success && D.data && $({ ...D.data, interviewTime: D.data.interviewTime || "" }), s("parse-result");
      } catch (D) {
        console.error("Parse failed:", D), d({ success: false, data: null, confidence: 0, parseMethod: "ai", log: "\u89E3\u6790\u5931\u8D25,\u8BF7\u624B\u52A8\u8F93\u5165" }), s("parse-result");
      } finally {
        v(false);
      }
    }
  }, E = (D, z) => {
    $((F) => ({ ...F, [D]: z }));
  }, _ = async (D) => {
    D.preventDefault(), p(true), y(null);
    try {
      await r(g), t();
    } catch (z) {
      console.error("Submit failed:", z), y(z.message || "\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
    } finally {
      p(false);
    }
  }, P = () => {
    s("text"), c(""), d(null), $({ companyName: "", position: "", interviewTime: "", interviewType: "VIDEO", meetingLink: "", roundNumber: 1, interviewer: "", notes: "" });
  }, N = () => w.jsxs("div", { className: "space-y-6", children: [w.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [w.jsx("div", { className: "flex-1 h-px bg-slate-200 dark:bg-slate-700" }), w.jsx("span", { className: "text-sm text-slate-500 dark:text-slate-400 font-medium", children: "\u9009\u62E9\u6DFB\u52A0\u65B9\u5F0F" }), w.jsx("div", { className: "flex-1 h-px bg-slate-200 dark:bg-slate-700" })] }), w.jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", className: "p-4 rounded-xl border-2 border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-left transition-all", children: w.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [w.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center", children: w.jsx("svg", { className: "w-5 h-5 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" }) }) }), w.jsxs("div", { className: "flex-1", children: [w.jsx("div", { className: "font-semibold text-primary-900 dark:text-primary-100", children: "\u7C98\u8D34\u6587\u672C" }), w.jsx("div", { className: "text-xs text-primary-600 dark:text-primary-400", children: "\u81EA\u52A8\u89E3\u6790\u9762\u8BD5\u4FE1\u606F" })] })] }) }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => s("form"), className: "p-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-primary-300 dark:hover:border-primary-600 text-left transition-all", children: w.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [w.jsx("div", { className: "w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center", children: w.jsx("svg", { className: "w-5 h-5 text-slate-600 dark:text-slate-300", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" }) }) }), w.jsxs("div", { className: "flex-1", children: [w.jsx("div", { className: "font-semibold text-slate-900 dark:text-white", children: "\u624B\u52A8\u8F93\u5165" }), w.jsx("div", { className: "text-xs text-slate-500 dark:text-slate-400", children: "\u586B\u5199\u9762\u8BD5\u8BE6\u60C5" })] })] }) })] }), w.jsxs("div", { children: [w.jsxs("div", { className: "flex items-center justify-between mb-3", children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300", children: "\u7C98\u8D34\u9762\u8BD5\u9080\u7EA6\u6587\u672C" }), w.jsx("button", { type: "button", onClick: () => c(Zk), className: "text-xs font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors", children: "\u4F7F\u7528\u793A\u4F8B" })] }), w.jsx("textarea", { value: l, onChange: (D) => c(D.target.value), placeholder: "\u652F\u6301\u98DE\u4E66\u3001\u817E\u8BAF\u4F1A\u8BAE\u3001Zoom \u7B49\u683C\u5F0F\uFF0C\u6216\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u4F7F\u7528\u793A\u4F8B\u201D\u5FEB\u901F\u4F53\u9A8C\u89E3\u6790\u3002", className: "w-full h-48 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 resize-none bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 transition-all" })] }), w.jsxs("div", { className: "flex justify-end gap-3", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: t, className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all", children: "\u53D6\u6D88" }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: b, disabled: !l.trim() || f, className: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all", children: f ? "\u89E3\u6790\u4E2D..." : "\u89E3\u6790\u6587\u672C" })] })] }), M = () => w.jsxs("div", { className: "space-y-6", children: [u && w.jsxs(w.Fragment, { children: [w.jsxs("div", { className: `p-5 rounded-xl border ${u.success ? "bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/50 dark:to-emerald-900/30 border-emerald-200 dark:border-emerald-700" : "bg-gradient-to-br from-red-50 to-red-100/50 dark:from-red-950/50 dark:to-red-900/30 border-red-200 dark:border-red-700"}`, children: [w.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [u.success ? w.jsx(Wu, { className: "w-5 h-5 text-emerald-600 dark:text-emerald-400" }) : w.jsx(Bo, { className: "w-5 h-5 text-red-600 dark:text-red-400" }), w.jsx("span", { className: "font-semibold text-lg", children: u.success ? "\u89E3\u6790\u6210\u529F" : "\u89E3\u6790\u5931\u8D25" }), u.success && w.jsxs("span", { className: "text-sm text-slate-600 dark:text-slate-400 ml-auto", children: ["\u7F6E\u4FE1\u5EA6: ", w.jsxs("span", { className: "font-semibold text-emerald-700 dark:text-emerald-300", children: [(u.confidence * 100).toFixed(0), "%"] })] })] }), u.success && u.data && w.jsxs("div", { className: "bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-lg space-y-2.5 text-sm border border-slate-200/50 dark:border-slate-700/50", children: [w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u516C\u53F8:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: u.data.companyName })] }), w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u5C97\u4F4D:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: u.data.position })] }), w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u65F6\u95F4:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium", children: le(u.data.interviewTime).format("YYYY-MM-DD HH:mm") })] }), u.data.meetingLink && w.jsxs("div", { className: "flex", children: [w.jsx("span", { className: "font-semibold text-slate-700 dark:text-slate-300 w-20", children: "\u4F1A\u8BAE:" }), w.jsx("span", { className: "text-slate-900 dark:text-slate-100 font-medium truncate", children: u.data.meetingLink })] })] })] }), w.jsxs("details", { className: "bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700", children: [w.jsx("summary", { className: "cursor-pointer font-semibold text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors", children: "\u8BE6\u7EC6\u65E5\u5FD7" }), w.jsx("pre", { className: "mt-3 text-xs overflow-auto whitespace-pre-wrap text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700", children: u.log })] })] }), w.jsxs("div", { className: "flex justify-between gap-3", children: [w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => s("text"), className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium flex items-center gap-2 transition-all", children: [w.jsx(As, { className: "w-4 h-4" }), "\u91CD\u65B0\u8F93\u5165"] }), w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => s("form"), className: "px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl flex items-center gap-2 transition-all", children: [(u == null ? void 0 : u.success) ? "\u786E\u8BA4\u5E76\u7F16\u8F91" : "\u624B\u52A8\u8F93\u5165", w.jsx(Ms, { className: "w-4 h-4" })] })] })] }), C = () => w.jsxs("form", { onSubmit: _, className: "space-y-5", children: [w.jsxs("div", { children: [w.jsxs("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: ["\u516C\u53F8\u540D\u79F0 ", w.jsx("span", { className: "text-red-500", children: "*" })] }), w.jsx("input", { type: "text", value: g.companyName, onChange: (D) => E("companyName", D.target.value), required: true, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsxs("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: ["\u5C97\u4F4D ", w.jsx("span", { className: "text-red-500", children: "*" })] }), w.jsx("input", { type: "text", value: g.position, onChange: (D) => E("position", D.target.value), required: true, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsxs("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: ["\u9762\u8BD5\u65F6\u95F4 ", w.jsx("span", { className: "text-red-500", children: "*" })] }), w.jsx("input", { type: "datetime-local", value: g.interviewTime ? le(g.interviewTime).format("YYYY-MM-DDTHH:mm") : "", onChange: (D) => E("interviewTime", D.target.value), required: true, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u9762\u8BD5\u5F62\u5F0F" }), w.jsxs("select", { value: g.interviewType, onChange: (D) => E("interviewType", D.target.value), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all", children: [w.jsx("option", { value: "VIDEO", children: "\u89C6\u9891\u9762\u8BD5" }), w.jsx("option", { value: "ONSITE", children: "\u73B0\u573A\u9762\u8BD5" }), w.jsx("option", { value: "PHONE", children: "\u7535\u8BDD\u9762\u8BD5" })] })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u4F1A\u8BAE\u94FE\u63A5" }), w.jsx("input", { type: "url", value: g.meetingLink, onChange: (D) => E("meetingLink", D.target.value), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u7B2C\u51E0\u8F6E\u9762\u8BD5" }), w.jsx("input", { type: "number", min: "1", value: g.roundNumber, onChange: (D) => E("roundNumber", parseInt(D.target.value)), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u9762\u8BD5\u5B98" }), w.jsx("input", { type: "text", value: g.interviewer, onChange: (D) => E("interviewer", D.target.value), className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-all" })] })] }), w.jsxs("div", { children: [w.jsx("label", { className: "block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2", children: "\u5907\u6CE8" }), w.jsx("textarea", { value: g.notes, onChange: (D) => E("notes", D.target.value), rows: 3, className: "w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-400 dark:focus:border-primary-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 resize-none transition-all" })] }), m && w.jsxs("div", { className: "p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 flex items-start gap-3 text-red-600 dark:text-red-400", children: [w.jsx(Bo, { className: "w-5 h-5 flex-shrink-0 mt-0.5" }), w.jsx("div", { className: "text-sm font-medium", children: m })] }), w.jsxs("div", { className: "flex justify-between pt-5 gap-3", children: [o === "create" && i !== "text" ? w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: P, className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all", children: "\u91CD\u7F6E" }) : o === "edit" && n && (a == null ? void 0 : a.id) ? w.jsxs(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: () => n(a.id), className: "px-5 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl font-medium flex items-center gap-2 transition-all", children: [w.jsx(Ps, { className: "w-4 h-4" }), "\u5220\u9664"] }) : null, w.jsxs("div", { className: "flex gap-3 ml-auto", children: [w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "button", onClick: t, className: "px-5 py-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-medium transition-all", children: "\u53D6\u6D88" }), w.jsx(X.button, { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, type: "submit", disabled: h, className: "px-6 py-2.5 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 text-white rounded-xl font-medium shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all", children: h ? "\u4FDD\u5B58\u4E2D..." : "\u4FDD\u5B58" })] })] })] });
  return w.jsx(X.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, className: "fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50", children: w.jsxs(X.div, { initial: { opacity: 0, scale: 0.95, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.95, y: 20 }, transition: { duration: 0.2 }, className: "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-slate-200/50 dark:border-slate-700/50", children: [w.jsxs("div", { className: "flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700", children: [w.jsx("h2", { className: "text-2xl font-display font-bold text-slate-900 dark:text-white", children: o === "edit" ? "\u7F16\u8F91\u9762\u8BD5" : "\u6DFB\u52A0\u9762\u8BD5" }), w.jsx(X.button, { whileHover: { scale: 1.1, rotate: 90 }, whileTap: { scale: 0.9 }, onClick: t, className: "p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all", children: w.jsx(Fu, { className: "w-5 h-5" }) })] }), w.jsxs("div", { className: "p-6", children: [i === "text" && N(), i === "parse-result" && M(), i === "form" && C()] })] }) });
};
class Qk extends W.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "state", { hasError: false, error: null });
  }
  static getDerivedStateFromError(t) {
    return { hasError: true, error: t };
  }
  componentDidCatch(t, r) {
    console.error("Calendar Error:", t, r);
  }
  render() {
    var _a2;
    return this.state.hasError ? w.jsx("div", { className: "bg-white dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 shadow-xl", children: w.jsxs("div", { className: "text-center py-12", children: [w.jsx("div", { className: "text-red-500 text-6xl mb-4", children: "\u{1F4C5}" }), w.jsx("h3", { className: "text-xl font-semibold text-slate-900 dark:text-white mb-2", children: "\u65E5\u5386\u6E32\u67D3\u51FA\u9519" }), w.jsx("p", { className: "text-slate-600 dark:text-slate-400 mb-4", children: ((_a2 = this.state.error) == null ? void 0 : _a2.message) || "\u672A\u77E5\u9519\u8BEF" }), w.jsx("button", { onClick: () => {
      this.setState({ hasError: false, error: null }), window.location.reload();
    }, className: "px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors", children: "\u5237\u65B0\u9875\u9762" })] }) }) : this.props.children;
  }
}
const oC = () => {
  const { showToast: e2 } = Hu(), { interviews: t, loading: r, error: n, createInterview: a, updateInterview: o, deleteInterview: i, updateStatus: s } = Ku(), [l, c] = W.useState("week"), [u, d] = W.useState(/* @__PURE__ */ new Date()), [f, v] = W.useState(false), [h, p] = W.useState("create"), [m, y] = W.useState(null), [g, $] = W.useState(false), [b, E] = W.useState(null), _ = W.useCallback(() => {
    p("create"), y(null), v(true);
  }, []), P = W.useCallback((T) => {
    p("edit"), y(T), v(true);
  }, []), N = W.useCallback((T) => {
    E(T), $(true);
  }, []), M = W.useCallback(async () => {
    b && (await i(b), E(null)), $(false);
  }, [b, i]), C = W.useCallback(async (T, O) => {
    await s(T, O);
  }, [s]), D = W.useCallback(async (T) => {
    const O = t.find((S) => S.id === T.event.id);
    if (O) try {
      const S = typeof T.start == "string" ? new Date(T.start) : T.start;
      await o(T.event.id, { companyName: O.companyName, position: O.position, interviewTime: le(S).format("YYYY-MM-DDTHH:mm:ss"), interviewType: O.interviewType, meetingLink: O.meetingLink, roundNumber: O.roundNumber, interviewer: O.interviewer, notes: O.notes });
    } catch (S) {
      console.error("Failed to update interview time:", S), e2("\u66F4\u65B0\u9762\u8BD5\u65F6\u95F4\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    }
  }, [t, o]), z = W.useCallback(async (T) => {
    const O = t.find((S) => S.id === T.event.id);
    if (O) try {
      const S = typeof T.start == "string" ? new Date(T.start) : T.start;
      await o(T.event.id, { companyName: O.companyName, position: O.position, interviewTime: le(S).format("YYYY-MM-DDTHH:mm:ss"), interviewType: O.interviewType, meetingLink: O.meetingLink, roundNumber: O.roundNumber, interviewer: O.interviewer, notes: O.notes });
    } catch (S) {
      console.error("Failed to update interview duration:", S), e2("\u66F4\u65B0\u9762\u8BD5\u65F6\u957F\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5", "error");
    }
  }, [t, o]), F = W.useCallback(async (T) => {
    h === "create" ? await a(T) : m && await o(m.id, T), v(false), y(null);
  }, [h, m, a, o]);
  return r ? w.jsx("div", { className: "flex items-center justify-center min-h-[50vh]", children: w.jsx("div", { className: "w-10 h-10 border-3 border-slate-200 border-t-primary-500 rounded-full animate-spin" }) }) : n ? w.jsx("div", { className: "text-center py-12 text-red-500", children: w.jsx("p", { children: n }) }) : w.jsxs("div", { className: "max-w-7xl mx-auto p-6", children: [w.jsx(Gu, { view: l, onViewChange: c, date: u, onDateChange: d, onAddClick: _ }), l === "list" ? w.jsx(Xk, { interviews: t, onEdit: P, onDelete: N, onStatusChange: C }) : w.jsx(Qk, { children: w.jsx(Kk, { interviews: t, onSelectEvent: P, view: l, onViewChange: (T) => c(T), date: u, onDateChange: d, onEventDrop: D, onEventResize: z }) }), w.jsx(Jk, { isOpen: f, onClose: () => {
    v(false), y(null);
  }, onSubmit: F, onDelete: (T) => {
    v(false), y(null), N(T);
  }, initialData: m || void 0, mode: h }), w.jsx(Uu, { open: g, title: "\u786E\u8BA4\u5220\u9664", message: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u9762\u8BD5\u5417?\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002", onConfirm: M, onCancel: () => {
    $(false), E(null);
  } })] });
};
export {
  oC as InterviewSchedulePage,
  oC as default
};
