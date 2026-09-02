let cm, bc, im, am, wf, xp, Qc, sm, kh, um, om, Ca, rm, tm, lm, nm, v, kt;
let __tla = (async () => {
  function nf(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const l in r) if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: true,
            get: () => r[l]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  tm = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  Ca = function(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  };
  nm = function(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
      var n = function r() {
        return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
      };
      n.prototype = t.prototype;
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
      value: true
    }), Object.keys(e).forEach(function(r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(n, r, l.get ? l : {
        enumerable: true,
        get: function() {
          return e[r];
        }
      });
    }), n;
  };
  var xa = {
    exports: {}
  }, O = {};
  var or = Symbol.for("react.element"), rf = Symbol.for("react.portal"), lf = Symbol.for("react.fragment"), of = Symbol.for("react.strict_mode"), uf = Symbol.for("react.profiler"), af = Symbol.for("react.provider"), sf = Symbol.for("react.context"), cf = Symbol.for("react.forward_ref"), ff = Symbol.for("react.suspense"), df = Symbol.for("react.memo"), pf = Symbol.for("react.lazy"), si = Symbol.iterator;
  function hf(e) {
    return e === null || typeof e != "object" ? null : (e = si && e[si] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Pa = {
    isMounted: function() {
      return false;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Ra = Object.assign, _a = {};
  function fn(e, t, n) {
    this.props = e, this.context = t, this.refs = _a, this.updater = n || Pa;
  }
  fn.prototype.isReactComponent = {};
  fn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  fn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Na() {
  }
  Na.prototype = fn.prototype;
  function iu(e, t, n) {
    this.props = e, this.context = t, this.refs = _a, this.updater = n || Pa;
  }
  var au = iu.prototype = new Na();
  au.constructor = iu;
  Ra(au, fn.prototype);
  au.isPureReactComponent = true;
  var ci = Array.isArray, La = Object.prototype.hasOwnProperty, su = {
    current: null
  }, Ta = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function za(e, t, n) {
    var r, l = {}, o = null, u = null;
    if (t != null) for (r in t.ref !== void 0 && (u = t.ref), t.key !== void 0 && (o = "" + t.key), t) La.call(t, r) && !Ta.hasOwnProperty(r) && (l[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1) l.children = n;
    else if (1 < i) {
      for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
      l.children = a;
    }
    if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
    return {
      $$typeof: or,
      type: e,
      key: o,
      ref: u,
      props: l,
      _owner: su.current
    };
  }
  function mf(e, t) {
    return {
      $$typeof: or,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner
    };
  }
  function cu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === or;
  }
  function vf(e) {
    var t = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
      return t[n];
    });
  }
  var fi = /\/+/g;
  function jl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? vf("" + e.key) : t.toString(36);
  }
  function Or(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var u = false;
    if (e === null) u = true;
    else switch (o) {
      case "string":
      case "number":
        u = true;
        break;
      case "object":
        switch (e.$$typeof) {
          case or:
          case rf:
            u = true;
        }
    }
    if (u) return u = e, l = l(u), e = r === "" ? "." + jl(u, 0) : r, ci(l) ? (n = "", e != null && (n = e.replace(fi, "$&/") + "/"), Or(l, t, n, "", function(s) {
      return s;
    })) : l != null && (cu(l) && (l = mf(l, n + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(fi, "$&/") + "/") + e)), t.push(l)), 1;
    if (u = 0, r = r === "" ? "." : r + ":", ci(e)) for (var i = 0; i < e.length; i++) {
      o = e[i];
      var a = r + jl(o, i);
      u += Or(o, t, n, a, l);
    }
    else if (a = hf(e), typeof a == "function") for (e = a.call(e), i = 0; !(o = e.next()).done; ) o = o.value, a = r + jl(o, i++), u += Or(o, t, n, a, l);
    else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return u;
  }
  function hr(e, t, n) {
    if (e == null) return e;
    var r = [], l = 0;
    return Or(e, r, "", "", function(o) {
      return t.call(n, o, l++);
    }), r;
  }
  function yf(e) {
    if (e._status === -1) {
      var t = e._result;
      t = t(), t.then(function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
      }, function(n) {
        (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
      }), e._status === -1 && (e._status = 0, e._result = t);
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var ae = {
    current: null
  }, Dr = {
    transition: null
  }, gf = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Dr,
    ReactCurrentOwner: su
  };
  function Oa() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  O.Children = {
    map: hr,
    forEach: function(e, t, n) {
      hr(e, function() {
        t.apply(this, arguments);
      }, n);
    },
    count: function(e) {
      var t = 0;
      return hr(e, function() {
        t++;
      }), t;
    },
    toArray: function(e) {
      return hr(e, function(t) {
        return t;
      }) || [];
    },
    only: function(e) {
      if (!cu(e)) throw Error("React.Children.only expected to receive a single React element child.");
      return e;
    }
  };
  O.Component = fn;
  O.Fragment = lf;
  O.Profiler = uf;
  O.PureComponent = iu;
  O.StrictMode = of;
  O.Suspense = ff;
  O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gf;
  O.act = Oa;
  O.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ra({}, e.props), l = e.key, o = e.ref, u = e._owner;
    if (t != null) {
      if (t.ref !== void 0 && (o = t.ref, u = su.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
      for (a in t) La.call(t, a) && !Ta.hasOwnProperty(a) && (r[a] = t[a] === void 0 && i !== void 0 ? i[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
      i = Array(a);
      for (var s = 0; s < a; s++) i[s] = arguments[s + 2];
      r.children = i;
    }
    return {
      $$typeof: or,
      type: e.type,
      key: l,
      ref: o,
      props: r,
      _owner: u
    };
  };
  O.createContext = function(e) {
    return e = {
      $$typeof: sf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }, e.Provider = {
      $$typeof: af,
      _context: e
    }, e.Consumer = e;
  };
  O.createElement = za;
  O.createFactory = function(e) {
    var t = za.bind(null, e);
    return t.type = e, t;
  };
  O.createRef = function() {
    return {
      current: null
    };
  };
  O.forwardRef = function(e) {
    return {
      $$typeof: cf,
      render: e
    };
  };
  O.isValidElement = cu;
  O.lazy = function(e) {
    return {
      $$typeof: pf,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: yf
    };
  };
  O.memo = function(e, t) {
    return {
      $$typeof: df,
      type: e,
      compare: t === void 0 ? null : t
    };
  };
  O.startTransition = function(e) {
    var t = Dr.transition;
    Dr.transition = {};
    try {
      e();
    } finally {
      Dr.transition = t;
    }
  };
  O.unstable_act = Oa;
  O.useCallback = function(e, t) {
    return ae.current.useCallback(e, t);
  };
  O.useContext = function(e) {
    return ae.current.useContext(e);
  };
  O.useDebugValue = function() {
  };
  O.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e);
  };
  O.useEffect = function(e, t) {
    return ae.current.useEffect(e, t);
  };
  O.useId = function() {
    return ae.current.useId();
  };
  O.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n);
  };
  O.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t);
  };
  O.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t);
  };
  O.useMemo = function(e, t) {
    return ae.current.useMemo(e, t);
  };
  O.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n);
  };
  O.useRef = function(e) {
    return ae.current.useRef(e);
  };
  O.useState = function(e) {
    return ae.current.useState(e);
  };
  O.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n);
  };
  O.useTransition = function() {
    return ae.current.useTransition();
  };
  O.version = "18.3.1";
  xa.exports = O;
  v = xa.exports;
  wf = Ca(v);
  rm = nf({
    __proto__: null,
    default: wf
  }, [
    v
  ]);
  var Da = {
    exports: {}
  }, we = {}, Ma = {
    exports: {}
  }, Fa = {};
  (function(e) {
    function t(_, T) {
      var z = _.length;
      _.push(T);
      e: for (; 0 < z; ) {
        var Q = z - 1 >>> 1, J = _[Q];
        if (0 < l(J, T)) _[Q] = T, _[z] = J, z = Q;
        else break e;
      }
    }
    function n(_) {
      return _.length === 0 ? null : _[0];
    }
    function r(_) {
      if (_.length === 0) return null;
      var T = _[0], z = _.pop();
      if (z !== T) {
        _[0] = z;
        e: for (var Q = 0, J = _.length, dr = J >>> 1; Q < dr; ) {
          var Et = 2 * (Q + 1) - 1, Il = _[Et], Ct = Et + 1, pr = _[Ct];
          if (0 > l(Il, z)) Ct < J && 0 > l(pr, Il) ? (_[Q] = pr, _[Ct] = z, Q = Ct) : (_[Q] = Il, _[Et] = z, Q = Et);
          else if (Ct < J && 0 > l(pr, z)) _[Q] = pr, _[Ct] = z, Q = Ct;
          else break e;
        }
      }
      return T;
    }
    function l(_, T) {
      var z = _.sortIndex - T.sortIndex;
      return z !== 0 ? z : _.id - T.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var o = performance;
      e.unstable_now = function() {
        return o.now();
      };
    } else {
      var u = Date, i = u.now();
      e.unstable_now = function() {
        return u.now() - i;
      };
    }
    var a = [], s = [], h = 1, d = null, m = 3, y = false, g = false, w = false, C = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(_) {
      for (var T = n(s); T !== null; ) {
        if (T.callback === null) r(s);
        else if (T.startTime <= _) r(s), T.sortIndex = T.expirationTime, t(a, T);
        else break;
        T = n(s);
      }
    }
    function S(_) {
      if (w = false, p(_), !g) if (n(a) !== null) g = true, Ml(E);
      else {
        var T = n(s);
        T !== null && Fl(S, T.startTime - _);
      }
    }
    function E(_, T) {
      g = false, w && (w = false, f(N), N = -1), y = true;
      var z = m;
      try {
        for (p(T), d = n(a); d !== null && (!(d.expirationTime > T) || _ && !Te()); ) {
          var Q = d.callback;
          if (typeof Q == "function") {
            d.callback = null, m = d.priorityLevel;
            var J = Q(d.expirationTime <= T);
            T = e.unstable_now(), typeof J == "function" ? d.callback = J : d === n(a) && r(a), p(T);
          } else r(a);
          d = n(a);
        }
        if (d !== null) var dr = true;
        else {
          var Et = n(s);
          Et !== null && Fl(S, Et.startTime - T), dr = false;
        }
        return dr;
      } finally {
        d = null, m = z, y = false;
      }
    }
    var P = false, R = null, N = -1, F = 5, L = -1;
    function Te() {
      return !(e.unstable_now() - L < F);
    }
    function yn() {
      if (R !== null) {
        var _ = e.unstable_now();
        L = _;
        var T = true;
        try {
          T = R(true, _);
        } finally {
          T ? gn() : (P = false, R = null);
        }
      } else P = false;
    }
    var gn;
    if (typeof c == "function") gn = function() {
      c(yn);
    };
    else if (typeof MessageChannel < "u") {
      var ai = new MessageChannel(), tf = ai.port2;
      ai.port1.onmessage = yn, gn = function() {
        tf.postMessage(null);
      };
    } else gn = function() {
      C(yn, 0);
    };
    function Ml(_) {
      R = _, P || (P = true, gn());
    }
    function Fl(_, T) {
      N = C(function() {
        _(e.unstable_now());
      }, T);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, e.unstable_continueExecution = function() {
      g || y || (g = true, Ml(E));
    }, e.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return n(a);
    }, e.unstable_next = function(_) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = m;
      }
      var z = m;
      m = T;
      try {
        return _();
      } finally {
        m = z;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var z = m;
      m = _;
      try {
        return T();
      } finally {
        m = z;
      }
    }, e.unstable_scheduleCallback = function(_, T, z) {
      var Q = e.unstable_now();
      switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, _) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = z + J, _ = {
        id: h++,
        callback: T,
        priorityLevel: _,
        startTime: z,
        expirationTime: J,
        sortIndex: -1
      }, z > Q ? (_.sortIndex = z, t(s, _), n(a) === null && _ === n(s) && (w ? (f(N), N = -1) : w = true, Fl(S, z - Q))) : (_.sortIndex = J, t(a, _), g || y || (g = true, Ml(E))), _;
    }, e.unstable_shouldYield = Te, e.unstable_wrapCallback = function(_) {
      var T = m;
      return function() {
        var z = m;
        m = T;
        try {
          return _.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    };
  })(Fa);
  Ma.exports = Fa;
  var Sf = Ma.exports;
  var kf = v, ge = Sf;
  function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ia = /* @__PURE__ */ new Set(), Bn = {};
  function It(e, t) {
    rn(e, t), rn(e + "Capture", t);
  }
  function rn(e, t) {
    for (Bn[e] = t, e = 0; e < t.length; e++) Ia.add(t[e]);
  }
  var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), po = Object.prototype.hasOwnProperty, Ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, di = {}, pi = {};
  function Cf(e) {
    return po.call(pi, e) ? true : po.call(di, e) ? false : Ef.test(e) ? pi[e] = true : (di[e] = true, false);
  }
  function xf(e, t, n, r) {
    if (n !== null && n.type === 0) return false;
    switch (typeof t) {
      case "function":
      case "symbol":
        return true;
      case "boolean":
        return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return false;
    }
  }
  function Pf(e, t, n, r) {
    if (t === null || typeof t > "u" || xf(e, t, n, r)) return true;
    if (r) return false;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === false;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return false;
  }
  function se(e, t, n, r, l, o, u) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var te = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new se(e, 0, false, e, null, false, false);
  });
  [
    [
      "acceptCharset",
      "accept-charset"
    ],
    [
      "className",
      "class"
    ],
    [
      "htmlFor",
      "for"
    ],
    [
      "httpEquiv",
      "http-equiv"
    ]
  ].forEach(function(e) {
    var t = e[0];
    te[t] = new se(t, 1, false, e[1], null, false, false);
  });
  [
    "contentEditable",
    "draggable",
    "spellCheck",
    "value"
  ].forEach(function(e) {
    te[e] = new se(e, 2, false, e.toLowerCase(), null, false, false);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha"
  ].forEach(function(e) {
    te[e] = new se(e, 2, false, e, null, false, false);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new se(e, 3, false, e.toLowerCase(), null, false, false);
  });
  [
    "checked",
    "multiple",
    "muted",
    "selected"
  ].forEach(function(e) {
    te[e] = new se(e, 3, true, e, null, false, false);
  });
  [
    "capture",
    "download"
  ].forEach(function(e) {
    te[e] = new se(e, 4, false, e, null, false, false);
  });
  [
    "cols",
    "rows",
    "size",
    "span"
  ].forEach(function(e) {
    te[e] = new se(e, 6, false, e, null, false, false);
  });
  [
    "rowSpan",
    "start"
  ].forEach(function(e) {
    te[e] = new se(e, 5, false, e.toLowerCase(), null, false, false);
  });
  var fu = /[\-:]([a-z])/g;
  function du(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(fu, du);
    te[t] = new se(t, 1, false, e, null, false, false);
  });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(fu, du);
    te[t] = new se(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
  });
  [
    "xml:base",
    "xml:lang",
    "xml:space"
  ].forEach(function(e) {
    var t = e.replace(fu, du);
    te[t] = new se(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
  });
  [
    "tabIndex",
    "crossOrigin"
  ].forEach(function(e) {
    te[e] = new se(e, 1, false, e.toLowerCase(), null, false, false);
  });
  te.xlinkHref = new se("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
  [
    "src",
    "href",
    "action",
    "formAction"
  ].forEach(function(e) {
    te[e] = new se(e, 1, false, e.toLowerCase(), null, true, true);
  });
  function pu(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Pf(t, n, l, r) && (n = null), r || l === null ? Cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? false : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var et = kf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = Symbol.for("react.element"), $t = Symbol.for("react.portal"), At = Symbol.for("react.fragment"), hu = Symbol.for("react.strict_mode"), ho = Symbol.for("react.profiler"), ja = Symbol.for("react.provider"), Ua = Symbol.for("react.context"), mu = Symbol.for("react.forward_ref"), mo = Symbol.for("react.suspense"), vo = Symbol.for("react.suspense_list"), vu = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), $a = Symbol.for("react.offscreen"), hi = Symbol.iterator;
  function wn(e) {
    return e === null || typeof e != "object" ? null : (e = hi && e[hi] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var W = Object.assign, Ul;
  function Nn(e) {
    if (Ul === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ul = t && t[1] || "";
    }
    return `
` + Ul + e;
  }
  var $l = false;
  function Al(e, t) {
    if (!e || $l) return "";
    $l = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", {
        set: function() {
          throw Error();
        }
      }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (s) {
          r = s;
        }
        e();
      }
    } catch (s) {
      if (s && r && typeof s.stack == "string") {
        for (var l = s.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; ) i--;
        for (; 1 <= u && 0 <= i; u--, i--) if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1) do
            if (u--, i--, 0 > i || l[u] !== o[i]) {
              var a = `
` + l[u].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= u && 0 <= i);
          break;
        }
      }
    } finally {
      $l = false, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
  }
  function Rf(e) {
    switch (e.tag) {
      case 5:
        return Nn(e.type);
      case 16:
        return Nn("Lazy");
      case 13:
        return Nn("Suspense");
      case 19:
        return Nn("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Al(e.type, false), e;
      case 11:
        return e = Al(e.type.render, false), e;
      case 1:
        return e = Al(e.type, true), e;
      default:
        return "";
    }
  }
  function yo(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case At:
        return "Fragment";
      case $t:
        return "Portal";
      case ho:
        return "Profiler";
      case hu:
        return "StrictMode";
      case mo:
        return "Suspense";
      case vo:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Ua:
        return (e.displayName || "Context") + ".Consumer";
      case ja:
        return (e._context.displayName || "Context") + ".Provider";
      case mu:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case vu:
        return t = e.displayName || null, t !== null ? t : yo(e.type) || "Memo";
      case nt:
        t = e._payload, e = e._init;
        try {
          return yo(e(t));
        } catch {
        }
    }
    return null;
  }
  function _f(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return yo(t);
      case 8:
        return t === hu ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function vt(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Aa(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Nf(e) {
    var t = Aa(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, {
        configurable: true,
        get: function() {
          return l.call(this);
        },
        set: function(u) {
          r = "" + u, o.call(this, u);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(u) {
          r = "" + u;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function vr(e) {
    e._valueTracker || (e._valueTracker = Nf(e));
  }
  function Ba(e) {
    if (!e) return false;
    var t = e._valueTracker;
    if (!t) return true;
    var n = t.getValue(), r = "";
    return e && (r = Aa(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
  }
  function Kr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function go(e, t) {
    var n = t.checked;
    return W({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked
    });
  }
  function mi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = vt(t.value != null ? t.value : n), e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    };
  }
  function Ha(e, t) {
    t = t.checked, t != null && pu(e, "checked", t, false);
  }
  function wo(e, t) {
    Ha(e, t);
    var n = vt(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? So(e, t.type, n) : t.hasOwnProperty("defaultValue") && So(e, t.type, vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function vi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function So(e, t, n) {
    (t !== "number" || Kr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Ln = Array.isArray;
  function Zt(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = true;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = true);
    } else {
      for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = true, r && (e[l].defaultSelected = true);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = true);
    }
  }
  function ko(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return W({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue
    });
  }
  function yi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(k(92));
        if (Ln(n)) {
          if (1 < n.length) throw Error(k(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = {
      initialValue: vt(n)
    };
  }
  function Wa(e, t) {
    var n = vt(t.value), r = vt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function gi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Va(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Eo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Va(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var yr, Qa = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (yr = yr || document.createElement("div"), yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = yr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Hn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var On = {
    animationIterationCount: true,
    aspectRatio: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    columns: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridArea: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowSpan: true,
    gridRowStart: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnSpan: true,
    gridColumnStart: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
  }, Lf = [
    "Webkit",
    "ms",
    "Moz",
    "O"
  ];
  Object.keys(On).forEach(function(e) {
    Lf.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
    });
  });
  function Ka(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
  }
  function Ya(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Ka(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Tf = W({
    menuitem: true
  }, {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  });
  function Co(e, t) {
    if (t) {
      if (Tf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(k(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(k(62));
    }
  }
  function xo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var Po = null;
  function yu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ro = null, qt = null, bt = null;
  function wi(e) {
    if (e = ar(e)) {
      if (typeof Ro != "function") throw Error(k(280));
      var t = e.stateNode;
      t && (t = kl(t), Ro(e.stateNode, e.type, t));
    }
  }
  function Xa(e) {
    qt ? bt ? bt.push(e) : bt = [
      e
    ] : qt = e;
  }
  function Ga() {
    if (qt) {
      var e = qt, t = bt;
      if (bt = qt = null, wi(e), t) for (e = 0; e < t.length; e++) wi(t[e]);
    }
  }
  function Ja(e, t) {
    return e(t);
  }
  function Za() {
  }
  var Bl = false;
  function qa(e, t, n) {
    if (Bl) return e(t, n);
    Bl = true;
    try {
      return Ja(e, t, n);
    } finally {
      Bl = false, (qt !== null || bt !== null) && (Za(), Ga());
    }
  }
  function Wn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = kl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = false;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n;
  }
  var _o = false;
  if (Ge) try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", {
      get: function() {
        _o = true;
      }
    }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
  } catch {
    _o = false;
  }
  function zf(e, t, n, r, l, o, u, i, a) {
    var s = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, s);
    } catch (h) {
      this.onError(h);
    }
  }
  var Dn = false, Yr = null, Xr = false, No = null, Of = {
    onError: function(e) {
      Dn = true, Yr = e;
    }
  };
  function Df(e, t, n, r, l, o, u, i, a) {
    Dn = false, Yr = null, zf.apply(Of, arguments);
  }
  function Mf(e, t, n, r, l, o, u, i, a) {
    if (Df.apply(this, arguments), Dn) {
      if (Dn) {
        var s = Yr;
        Dn = false, Yr = null;
      } else throw Error(k(198));
      Xr || (Xr = true, No = s);
    }
  }
  function jt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ba(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Si(e) {
    if (jt(e) !== e) throw Error(k(188));
  }
  function Ff(e) {
    var t = e.alternate;
    if (!t) {
      if (t = jt(e), t === null) throw Error(k(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Si(l), e;
          if (o === r) return Si(l), t;
          o = o.sibling;
        }
        throw Error(k(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var u = false, i = l.child; i; ) {
          if (i === n) {
            u = true, n = l, r = o;
            break;
          }
          if (i === r) {
            u = true, r = l, n = o;
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === n) {
              u = true, n = o, r = l;
              break;
            }
            if (i === r) {
              u = true, r = o, n = l;
              break;
            }
            i = i.sibling;
          }
          if (!u) throw Error(k(189));
        }
      }
      if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
  }
  function es(e) {
    return e = Ff(e), e !== null ? ts(e) : null;
  }
  function ts(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = ts(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ns = ge.unstable_scheduleCallback, ki = ge.unstable_cancelCallback, If = ge.unstable_shouldYield, jf = ge.unstable_requestPaint, K = ge.unstable_now, Uf = ge.unstable_getCurrentPriorityLevel, gu = ge.unstable_ImmediatePriority, rs = ge.unstable_UserBlockingPriority, Gr = ge.unstable_NormalPriority, $f = ge.unstable_LowPriority, ls = ge.unstable_IdlePriority, yl = null, Be = null;
  function Af(e) {
    if (Be && typeof Be.onCommitFiberRoot == "function") try {
      Be.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Fe = Math.clz32 ? Math.clz32 : Wf, Bf = Math.log, Hf = Math.LN2;
  function Wf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Bf(e) / Hf | 0) | 0;
  }
  var gr = 64, wr = 4194304;
  function Tn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Jr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = n & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? r = Tn(i) : (o &= u, o !== 0 && (r = Tn(o)));
    } else u = n & ~l, u !== 0 ? r = Tn(u) : o !== 0 && (r = Tn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Vf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Qf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - Fe(o), i = 1 << u, a = l[u];
      a === -1 ? (!(i & n) || i & r) && (l[u] = Vf(i, t)) : a <= t && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Lo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function os() {
    var e = gr;
    return gr <<= 1, !(gr & 4194240) && (gr = 64), e;
  }
  function Hl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ur(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n;
  }
  function Kf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Fe(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function wu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - Fe(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var M = 0;
  function us(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var is, Su, as, ss, cs, To = false, Sr = [], at = null, st = null, ct = null, Vn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), lt = [], Yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ei(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        at = null;
        break;
      case "dragenter":
      case "dragleave":
        st = null;
        break;
      case "mouseover":
      case "mouseout":
        ct = null;
        break;
      case "pointerover":
      case "pointerout":
        Vn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qn.delete(t.pointerId);
    }
  }
  function kn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: r,
      nativeEvent: o,
      targetContainers: [
        l
      ]
    }, t !== null && (t = ar(t), t !== null && Su(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Xf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return at = kn(at, e, t, n, r, l), true;
      case "dragenter":
        return st = kn(st, e, t, n, r, l), true;
      case "mouseover":
        return ct = kn(ct, e, t, n, r, l), true;
      case "pointerover":
        var o = l.pointerId;
        return Vn.set(o, kn(Vn.get(o) || null, e, t, n, r, l)), true;
      case "gotpointercapture":
        return o = l.pointerId, Qn.set(o, kn(Qn.get(o) || null, e, t, n, r, l)), true;
    }
    return false;
  }
  function fs(e) {
    var t = Rt(e.target);
    if (t !== null) {
      var n = jt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = ba(n), t !== null) {
            e.blockedOn = t, cs(e.priority, function() {
              as(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Mr(e) {
    if (e.blockedOn !== null) return false;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Po = r, n.target.dispatchEvent(r), Po = null;
      } else return t = ar(n), t !== null && Su(t), e.blockedOn = n, false;
      t.shift();
    }
    return true;
  }
  function Ci(e, t, n) {
    Mr(e) && n.delete(t);
  }
  function Gf() {
    To = false, at !== null && Mr(at) && (at = null), st !== null && Mr(st) && (st = null), ct !== null && Mr(ct) && (ct = null), Vn.forEach(Ci), Qn.forEach(Ci);
  }
  function En(e, t) {
    e.blockedOn === t && (e.blockedOn = null, To || (To = true, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, Gf)));
  }
  function Kn(e) {
    function t(l) {
      return En(l, e);
    }
    if (0 < Sr.length) {
      En(Sr[0], e);
      for (var n = 1; n < Sr.length; n++) {
        var r = Sr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (at !== null && En(at, e), st !== null && En(st, e), ct !== null && En(ct, e), Vn.forEach(t), Qn.forEach(t), n = 0; n < lt.length; n++) r = lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < lt.length && (n = lt[0], n.blockedOn === null); ) fs(n), n.blockedOn === null && lt.shift();
  }
  var en = et.ReactCurrentBatchConfig, Zr = true;
  function Jf(e, t, n, r) {
    var l = M, o = en.transition;
    en.transition = null;
    try {
      M = 1, ku(e, t, n, r);
    } finally {
      M = l, en.transition = o;
    }
  }
  function Zf(e, t, n, r) {
    var l = M, o = en.transition;
    en.transition = null;
    try {
      M = 4, ku(e, t, n, r);
    } finally {
      M = l, en.transition = o;
    }
  }
  function ku(e, t, n, r) {
    if (Zr) {
      var l = zo(e, t, n, r);
      if (l === null) ql(e, t, r, qr, n), Ei(e, r);
      else if (Xf(l, e, t, n, r)) r.stopPropagation();
      else if (Ei(e, r), t & 4 && -1 < Yf.indexOf(e)) {
        for (; l !== null; ) {
          var o = ar(l);
          if (o !== null && is(o), o = zo(e, t, n, r), o === null && ql(e, t, r, qr, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else ql(e, t, r, null, n);
    }
  }
  var qr = null;
  function zo(e, t, n, r) {
    if (qr = null, e = yu(r), e = Rt(e), e !== null) if (t = jt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = ba(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return qr = e, null;
  }
  function ds(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Uf()) {
          case gu:
            return 1;
          case rs:
            return 4;
          case Gr:
          case $f:
            return 16;
          case ls:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ut = null, Eu = null, Fr = null;
  function ps() {
    if (Fr) return Fr;
    var e, t = Eu, n = t.length, r, l = "value" in ut ? ut.value : ut.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (r = 1; r <= u && t[n - r] === l[o - r]; r++) ;
    return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Ir(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function kr() {
    return true;
  }
  function xi() {
    return false;
  }
  function Se(e) {
    function t(n, r, l, o, u) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === false) ? kr : xi, this.isPropagationStopped = xi, this;
    }
    return W(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = true;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = kr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = kr);
      },
      persist: function() {
      },
      isPersistent: kr
    }), t;
  }
  var dn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Cu = Se(dn), ir = W({}, dn, {
    view: 0,
    detail: 0
  }), qf = Se(ir), Wl, Vl, Cn, gl = W({}, ir, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (Wl = e.screenX - Cn.screenX, Vl = e.screenY - Cn.screenY) : Vl = Wl = 0, Cn = e), Wl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vl;
    }
  }), Pi = Se(gl), bf = W({}, gl, {
    dataTransfer: 0
  }), ed = Se(bf), td = W({}, ir, {
    relatedTarget: 0
  }), Ql = Se(td), nd = W({}, dn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rd = Se(nd), ld = W({}, dn, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), od = Se(ld), ud = W({}, dn, {
    data: 0
  }), Ri = Se(ud), id = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, ad = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, sd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function cd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = sd[e]) ? !!t[e] : false;
  }
  function xu() {
    return cd;
  }
  var fd = W({}, ir, {
    key: function(e) {
      if (e.key) {
        var t = id[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ir(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ad[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xu,
    charCode: function(e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ir(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), dd = Se(fd), pd = W({}, gl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), _i = Se(pd), hd = W({}, ir, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xu
  }), md = Se(hd), vd = W({}, dn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), yd = Se(vd), gd = W({}, gl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wd = Se(gd), Sd = [
    9,
    13,
    27,
    32
  ], Pu = Ge && "CompositionEvent" in window, Mn = null;
  Ge && "documentMode" in document && (Mn = document.documentMode);
  var kd = Ge && "TextEvent" in window && !Mn, hs = Ge && (!Pu || Mn && 8 < Mn && 11 >= Mn), Ni = " ", Li = false;
  function ms(e, t) {
    switch (e) {
      case "keyup":
        return Sd.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function vs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Bt = false;
  function Ed(e, t) {
    switch (e) {
      case "compositionend":
        return vs(t);
      case "keypress":
        return t.which !== 32 ? null : (Li = true, Ni);
      case "textInput":
        return e = t.data, e === Ni && Li ? null : e;
      default:
        return null;
    }
  }
  function Cd(e, t) {
    if (Bt) return e === "compositionend" || !Pu && ms(e, t) ? (e = ps(), Fr = Eu = ut = null, Bt = false, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return hs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var xd = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function Ti(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!xd[e.type] : t === "textarea";
  }
  function ys(e, t, n, r) {
    Xa(r), t = br(t, "onChange"), 0 < t.length && (n = new Cu("onChange", "change", null, n, r), e.push({
      event: n,
      listeners: t
    }));
  }
  var Fn = null, Yn = null;
  function Pd(e) {
    Ns(e, 0);
  }
  function wl(e) {
    var t = Vt(e);
    if (Ba(t)) return e;
  }
  function Rd(e, t) {
    if (e === "change") return t;
  }
  var gs = false;
  if (Ge) {
    var Kl;
    if (Ge) {
      var Yl = "oninput" in document;
      if (!Yl) {
        var zi = document.createElement("div");
        zi.setAttribute("oninput", "return;"), Yl = typeof zi.oninput == "function";
      }
      Kl = Yl;
    } else Kl = false;
    gs = Kl && (!document.documentMode || 9 < document.documentMode);
  }
  function Oi() {
    Fn && (Fn.detachEvent("onpropertychange", ws), Yn = Fn = null);
  }
  function ws(e) {
    if (e.propertyName === "value" && wl(Yn)) {
      var t = [];
      ys(t, Yn, e, yu(e)), qa(Pd, t);
    }
  }
  function _d(e, t, n) {
    e === "focusin" ? (Oi(), Fn = t, Yn = n, Fn.attachEvent("onpropertychange", ws)) : e === "focusout" && Oi();
  }
  function Nd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(Yn);
  }
  function Ld(e, t) {
    if (e === "click") return wl(t);
  }
  function Td(e, t) {
    if (e === "input" || e === "change") return wl(t);
  }
  function zd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var je = typeof Object.is == "function" ? Object.is : zd;
  function Xn(e, t) {
    if (je(e, t)) return true;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return false;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!po.call(t, l) || !je(e[l], t[l])) return false;
    }
    return true;
  }
  function Di(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mi(e, t) {
    var n = Di(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return {
          node: n,
          offset: t - e
        };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Di(n);
    }
  }
  function Ss(e, t) {
    return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Ss(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
  }
  function ks() {
    for (var e = window, t = Kr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = false;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Kr(e.document);
    }
    return t;
  }
  function Ru(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Od(e) {
    var t = ks(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ss(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ru(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Mi(n, o);
          var u = Mi(n, r);
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(u.node, u.offset)) : (t.setEnd(u.node, u.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({
        element: e,
        left: e.scrollLeft,
        top: e.scrollTop
      });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Dd = Ge && "documentMode" in document && 11 >= document.documentMode, Ht = null, Oo = null, In = null, Do = false;
  function Fi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Do || Ht == null || Ht !== Kr(r) || (r = Ht, "selectionStart" in r && Ru(r) ? r = {
      start: r.selectionStart,
      end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
      anchorNode: r.anchorNode,
      anchorOffset: r.anchorOffset,
      focusNode: r.focusNode,
      focusOffset: r.focusOffset
    }), In && Xn(In, r) || (In = r, r = br(Oo, "onSelect"), 0 < r.length && (t = new Cu("onSelect", "select", null, t, n), e.push({
      event: t,
      listeners: r
    }), t.target = Ht)));
  }
  function Er(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Wt = {
    animationend: Er("Animation", "AnimationEnd"),
    animationiteration: Er("Animation", "AnimationIteration"),
    animationstart: Er("Animation", "AnimationStart"),
    transitionend: Er("Transition", "TransitionEnd")
  }, Xl = {}, Es = {};
  Ge && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete Wt.animationend.animation, delete Wt.animationiteration.animation, delete Wt.animationstart.animation), "TransitionEvent" in window || delete Wt.transitionend.transition);
  function Sl(e) {
    if (Xl[e]) return Xl[e];
    if (!Wt[e]) return e;
    var t = Wt[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Es) return Xl[e] = t[n];
    return e;
  }
  var Cs = Sl("animationend"), xs = Sl("animationiteration"), Ps = Sl("animationstart"), Rs = Sl("transitionend"), _s = /* @__PURE__ */ new Map(), Ii = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gt(e, t) {
    _s.set(e, t), It(t, [
      e
    ]);
  }
  for (var Gl = 0; Gl < Ii.length; Gl++) {
    var Jl = Ii[Gl], Md = Jl.toLowerCase(), Fd = Jl[0].toUpperCase() + Jl.slice(1);
    gt(Md, "on" + Fd);
  }
  gt(Cs, "onAnimationEnd");
  gt(xs, "onAnimationIteration");
  gt(Ps, "onAnimationStart");
  gt("dblclick", "onDoubleClick");
  gt("focusin", "onFocus");
  gt("focusout", "onBlur");
  gt(Rs, "onTransitionEnd");
  rn("onMouseEnter", [
    "mouseout",
    "mouseover"
  ]);
  rn("onMouseLeave", [
    "mouseout",
    "mouseover"
  ]);
  rn("onPointerEnter", [
    "pointerout",
    "pointerover"
  ]);
  rn("onPointerLeave", [
    "pointerout",
    "pointerover"
  ]);
  It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  It("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  It("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]);
  It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
  function ji(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Mf(r, t, void 0, e), e.currentTarget = null;
  }
  function Ns(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], a = i.instance, s = i.currentTarget;
          if (i = i.listener, a !== o && l.isPropagationStopped()) break e;
          ji(l, i, s), o = a;
        }
        else for (u = 0; u < r.length; u++) {
          if (i = r[u], a = i.instance, s = i.currentTarget, i = i.listener, a !== o && l.isPropagationStopped()) break e;
          ji(l, i, s), o = a;
        }
      }
    }
    if (Xr) throw e = No, Xr = false, No = null, e;
  }
  function j(e, t) {
    var n = t[Uo];
    n === void 0 && (n = t[Uo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Ls(t, e, 2, false), n.add(r));
  }
  function Zl(e, t, n) {
    var r = 0;
    t && (r |= 4), Ls(n, e, r, t);
  }
  var Cr = "_reactListening" + Math.random().toString(36).slice(2);
  function Gn(e) {
    if (!e[Cr]) {
      e[Cr] = true, Ia.forEach(function(n) {
        n !== "selectionchange" && (Id.has(n) || Zl(n, false, e), Zl(n, true, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Cr] || (t[Cr] = true, Zl("selectionchange", false, t));
    }
  }
  function Ls(e, t, n, r) {
    switch (ds(t)) {
      case 1:
        var l = Jf;
        break;
      case 4:
        l = Zf;
        break;
      default:
        l = ku;
    }
    n = l.bind(null, t, n, e), l = void 0, !_o || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = true), r ? l !== void 0 ? e.addEventListener(t, n, {
      capture: true,
      passive: l
    }) : e.addEventListener(t, n, true) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, false);
  }
  function ql(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var u = r.tag;
      if (u === 3 || u === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || i.nodeType === 8 && i.parentNode === l) break;
        if (u === 4) for (u = r.return; u !== null; ) {
          var a = u.tag;
          if ((a === 3 || a === 4) && (a = u.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
          u = u.return;
        }
        for (; i !== null; ) {
          if (u = Rt(i), u === null) return;
          if (a = u.tag, a === 5 || a === 6) {
            r = o = u;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
    qa(function() {
      var s = o, h = yu(n), d = [];
      e: {
        var m = _s.get(e);
        if (m !== void 0) {
          var y = Cu, g = e;
          switch (e) {
            case "keypress":
              if (Ir(n) === 0) break e;
            case "keydown":
            case "keyup":
              y = dd;
              break;
            case "focusin":
              g = "focus", y = Ql;
              break;
            case "focusout":
              g = "blur", y = Ql;
              break;
            case "beforeblur":
            case "afterblur":
              y = Ql;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = Pi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = ed;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = md;
              break;
            case Cs:
            case xs:
            case Ps:
              y = rd;
              break;
            case Rs:
              y = yd;
              break;
            case "scroll":
              y = qf;
              break;
            case "wheel":
              y = wd;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = od;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = _i;
          }
          var w = (t & 4) !== 0, C = !w && e === "scroll", f = w ? m !== null ? m + "Capture" : null : m;
          w = [];
          for (var c = s, p; c !== null; ) {
            p = c;
            var S = p.stateNode;
            if (p.tag === 5 && S !== null && (p = S, f !== null && (S = Wn(c, f), S != null && w.push(Jn(c, S, p)))), C) break;
            c = c.return;
          }
          0 < w.length && (m = new y(m, g, null, n, h), d.push({
            event: m,
            listeners: w
          }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (m = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", m && n !== Po && (g = n.relatedTarget || n.fromElement) && (Rt(g) || g[Je])) break e;
          if ((y || m) && (m = h.window === h ? h : (m = h.ownerDocument) ? m.defaultView || m.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = s, g = g ? Rt(g) : null, g !== null && (C = jt(g), g !== C || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = s), y !== g)) {
            if (w = Pi, S = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = _i, S = "onPointerLeave", f = "onPointerEnter", c = "pointer"), C = y == null ? m : Vt(y), p = g == null ? m : Vt(g), m = new w(S, c + "leave", y, n, h), m.target = C, m.relatedTarget = p, S = null, Rt(h) === s && (w = new w(f, c + "enter", g, n, h), w.target = p, w.relatedTarget = C, S = w), C = S, y && g) t: {
              for (w = y, f = g, c = 0, p = w; p; p = Ut(p)) c++;
              for (p = 0, S = f; S; S = Ut(S)) p++;
              for (; 0 < c - p; ) w = Ut(w), c--;
              for (; 0 < p - c; ) f = Ut(f), p--;
              for (; c--; ) {
                if (w === f || f !== null && w === f.alternate) break t;
                w = Ut(w), f = Ut(f);
              }
              w = null;
            }
            else w = null;
            y !== null && Ui(d, m, y, w, false), g !== null && C !== null && Ui(d, C, g, w, true);
          }
        }
        e: {
          if (m = s ? Vt(s) : window, y = m.nodeName && m.nodeName.toLowerCase(), y === "select" || y === "input" && m.type === "file") var E = Rd;
          else if (Ti(m)) if (gs) E = Td;
          else {
            E = Nd;
            var P = _d;
          }
          else (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (E = Ld);
          if (E && (E = E(e, s))) {
            ys(d, E, n, h);
            break e;
          }
          P && P(e, m, s), e === "focusout" && (P = m._wrapperState) && P.controlled && m.type === "number" && So(m, "number", m.value);
        }
        switch (P = s ? Vt(s) : window, e) {
          case "focusin":
            (Ti(P) || P.contentEditable === "true") && (Ht = P, Oo = s, In = null);
            break;
          case "focusout":
            In = Oo = Ht = null;
            break;
          case "mousedown":
            Do = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Do = false, Fi(d, n, h);
            break;
          case "selectionchange":
            if (Dd) break;
          case "keydown":
          case "keyup":
            Fi(d, n, h);
        }
        var R;
        if (Pu) e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
        else Bt ? ms(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
        N && (hs && n.locale !== "ko" && (Bt || N !== "onCompositionStart" ? N === "onCompositionEnd" && Bt && (R = ps()) : (ut = h, Eu = "value" in ut ? ut.value : ut.textContent, Bt = true)), P = br(s, N), 0 < P.length && (N = new Ri(N, e, null, n, h), d.push({
          event: N,
          listeners: P
        }), R ? N.data = R : (R = vs(n), R !== null && (N.data = R)))), (R = kd ? Ed(e, n) : Cd(e, n)) && (s = br(s, "onBeforeInput"), 0 < s.length && (h = new Ri("onBeforeInput", "beforeinput", null, n, h), d.push({
          event: h,
          listeners: s
        }), h.data = R));
      }
      Ns(d, t);
    });
  }
  function Jn(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Wn(e, n), o != null && r.unshift(Jn(e, o, l)), o = Wn(e, t), o != null && r.push(Jn(e, o, l))), e = e.return;
    }
    return r;
  }
  function Ut(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ui(e, t, n, r, l) {
    for (var o = t._reactName, u = []; n !== null && n !== r; ) {
      var i = n, a = i.alternate, s = i.stateNode;
      if (a !== null && a === r) break;
      i.tag === 5 && s !== null && (i = s, l ? (a = Wn(n, o), a != null && u.unshift(Jn(n, a, i))) : l || (a = Wn(n, o), a != null && u.push(Jn(n, a, i)))), n = n.return;
    }
    u.length !== 0 && e.push({
      event: t,
      listeners: u
    });
  }
  var jd = /\r\n?/g, Ud = /\u0000|\uFFFD/g;
  function $i(e) {
    return (typeof e == "string" ? e : "" + e).replace(jd, `
`).replace(Ud, "");
  }
  function xr(e, t, n) {
    if (t = $i(t), $i(e) !== t && n) throw Error(k(425));
  }
  function el() {
  }
  var Mo = null, Fo = null;
  function Io(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var jo = typeof setTimeout == "function" ? setTimeout : void 0, $d = typeof clearTimeout == "function" ? clearTimeout : void 0, Ai = typeof Promise == "function" ? Promise : void 0, Ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ai < "u" ? function(e) {
    return Ai.resolve(null).then(e).catch(Bd);
  } : jo;
  function Bd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function bl(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Kn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Kn(t);
  }
  function ft(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Bi(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var pn = Math.random().toString(36).slice(2), Ae = "__reactFiber$" + pn, Zn = "__reactProps$" + pn, Je = "__reactContainer$" + pn, Uo = "__reactEvents$" + pn, Hd = "__reactListeners$" + pn, Wd = "__reactHandles$" + pn;
  function Rt(e) {
    var t = e[Ae];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Je] || n[Ae]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Bi(e); e !== null; ) {
          if (n = e[Ae]) return n;
          e = Bi(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ar(e) {
    return e = e[Ae] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Vt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
  }
  function kl(e) {
    return e[Zn] || null;
  }
  var $o = [], Qt = -1;
  function wt(e) {
    return {
      current: e
    };
  }
  function U(e) {
    0 > Qt || (e.current = $o[Qt], $o[Qt] = null, Qt--);
  }
  function I(e, t) {
    Qt++, $o[Qt] = e.current, e.current = t;
  }
  var yt = {}, oe = wt(yt), de = wt(false), zt = yt;
  function ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function pe(e) {
    return e = e.childContextTypes, e != null;
  }
  function tl() {
    U(de), U(oe);
  }
  function Hi(e, t, n) {
    if (oe.current !== yt) throw Error(k(168));
    I(oe, t), I(de, n);
  }
  function Ts(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(k(108, _f(e) || "Unknown", l));
    return W({}, n, r);
  }
  function nl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yt, zt = oe.current, I(oe, e), I(de, de.current), true;
  }
  function Wi(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n ? (e = Ts(e, t, zt), r.__reactInternalMemoizedMergedChildContext = e, U(de), U(oe), I(oe, e)) : U(de), I(de, n);
  }
  var Ve = null, El = false, eo = false;
  function zs(e) {
    Ve === null ? Ve = [
      e
    ] : Ve.push(e);
  }
  function Vd(e) {
    El = true, zs(e);
  }
  function St() {
    if (!eo && Ve !== null) {
      eo = true;
      var e = 0, t = M;
      try {
        var n = Ve;
        for (M = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(true);
          while (r !== null);
        }
        Ve = null, El = false;
      } catch (l) {
        throw Ve !== null && (Ve = Ve.slice(e + 1)), ns(gu, St), l;
      } finally {
        M = t, eo = false;
      }
    }
    return null;
  }
  var Kt = [], Yt = 0, rl = null, ll = 0, Ee = [], Ce = 0, Ot = null, Qe = 1, Ke = "";
  function xt(e, t) {
    Kt[Yt++] = ll, Kt[Yt++] = rl, rl = e, ll = t;
  }
  function Os(e, t, n) {
    Ee[Ce++] = Qe, Ee[Ce++] = Ke, Ee[Ce++] = Ot, Ot = e;
    var r = Qe;
    e = Ke;
    var l = 32 - Fe(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Fe(t) + l;
    if (30 < o) {
      var u = l - l % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, Qe = 1 << 32 - Fe(t) + l | n << l | r, Ke = o + e;
    } else Qe = 1 << o | n << l | r, Ke = e;
  }
  function _u(e) {
    e.return !== null && (xt(e, 1), Os(e, 1, 0));
  }
  function Nu(e) {
    for (; e === rl; ) rl = Kt[--Yt], Kt[Yt] = null, ll = Kt[--Yt], Kt[Yt] = null;
    for (; e === Ot; ) Ot = Ee[--Ce], Ee[Ce] = null, Ke = Ee[--Ce], Ee[Ce] = null, Qe = Ee[--Ce], Ee[Ce] = null;
  }
  var ye = null, ve = null, $ = false, Me = null;
  function Ds(e, t) {
    var n = xe(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [
      n
    ], e.flags |= 16) : t.push(n);
  }
  function Vi(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ft(t.firstChild), true) : false;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, true) : false;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? {
          id: Qe,
          overflow: Ke
        } : null, e.memoizedState = {
          dehydrated: t,
          treeContext: n,
          retryLane: 1073741824
        }, n = xe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, true) : false;
      default:
        return false;
    }
  }
  function Ao(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Bo(e) {
    if ($) {
      var t = ve;
      if (t) {
        var n = t;
        if (!Vi(e, t)) {
          if (Ao(e)) throw Error(k(418));
          t = ft(n.nextSibling);
          var r = ye;
          t && Vi(e, t) ? Ds(r, n) : (e.flags = e.flags & -4097 | 2, $ = false, ye = e);
        }
      } else {
        if (Ao(e)) throw Error(k(418));
        e.flags = e.flags & -4097 | 2, $ = false, ye = e;
      }
    }
  }
  function Qi(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ye = e;
  }
  function Pr(e) {
    if (e !== ye) return false;
    if (!$) return Qi(e), $ = true, false;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Io(e.type, e.memoizedProps)), t && (t = ve)) {
      if (Ao(e)) throw Ms(), Error(k(418));
      for (; t; ) Ds(e, t), t = ft(t.nextSibling);
    }
    if (Qi(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ve = ft(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ve = null;
      }
    } else ve = ye ? ft(e.stateNode.nextSibling) : null;
    return true;
  }
  function Ms() {
    for (var e = ve; e; ) e = ft(e.nextSibling);
  }
  function on() {
    ve = ye = null, $ = false;
  }
  function Lu(e) {
    Me === null ? Me = [
      e
    ] : Me.push(e);
  }
  var Qd = et.ReactCurrentBatchConfig;
  function xn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(k(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(k(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(u) {
          var i = l.refs;
          u === null ? delete i[o] : i[o] = u;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(k(284));
      if (!n._owner) throw Error(k(290, e));
    }
    return e;
  }
  function Rr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ki(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Fs(e) {
    function t(f, c) {
      if (e) {
        var p = f.deletions;
        p === null ? (f.deletions = [
          c
        ], f.flags |= 16) : p.push(c);
      }
    }
    function n(f, c) {
      if (!e) return null;
      for (; c !== null; ) t(f, c), c = c.sibling;
      return null;
    }
    function r(f, c) {
      for (f = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
      return f;
    }
    function l(f, c) {
      return f = mt(f, c), f.index = 0, f.sibling = null, f;
    }
    function o(f, c, p) {
      return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, c, p, S) {
      return c === null || c.tag !== 6 ? (c = io(p, f.mode, S), c.return = f, c) : (c = l(c, p), c.return = f, c);
    }
    function a(f, c, p, S) {
      var E = p.type;
      return E === At ? h(f, c, p.props.children, S, p.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === nt && Ki(E) === c.type) ? (S = l(c, p.props), S.ref = xn(f, c, p), S.return = f, S) : (S = Wr(p.type, p.key, p.props, null, f.mode, S), S.ref = xn(f, c, p), S.return = f, S);
    }
    function s(f, c, p, S) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = ao(p, f.mode, S), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c);
    }
    function h(f, c, p, S, E) {
      return c === null || c.tag !== 7 ? (c = Tt(p, f.mode, S, E), c.return = f, c) : (c = l(c, p), c.return = f, c);
    }
    function d(f, c, p) {
      if (typeof c == "string" && c !== "" || typeof c == "number") return c = io("" + c, f.mode, p), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case mr:
            return p = Wr(c.type, c.key, c.props, null, f.mode, p), p.ref = xn(f, null, c), p.return = f, p;
          case $t:
            return c = ao(c, f.mode, p), c.return = f, c;
          case nt:
            var S = c._init;
            return d(f, S(c._payload), p);
        }
        if (Ln(c) || wn(c)) return c = Tt(c, f.mode, p, null), c.return = f, c;
        Rr(f, c);
      }
      return null;
    }
    function m(f, c, p, S) {
      var E = c !== null ? c.key : null;
      if (typeof p == "string" && p !== "" || typeof p == "number") return E !== null ? null : i(f, c, "" + p, S);
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case mr:
            return p.key === E ? a(f, c, p, S) : null;
          case $t:
            return p.key === E ? s(f, c, p, S) : null;
          case nt:
            return E = p._init, m(f, c, E(p._payload), S);
        }
        if (Ln(p) || wn(p)) return E !== null ? null : h(f, c, p, S, null);
        Rr(f, p);
      }
      return null;
    }
    function y(f, c, p, S, E) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return f = f.get(p) || null, i(c, f, "" + S, E);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case mr:
            return f = f.get(S.key === null ? p : S.key) || null, a(c, f, S, E);
          case $t:
            return f = f.get(S.key === null ? p : S.key) || null, s(c, f, S, E);
          case nt:
            var P = S._init;
            return y(f, c, p, P(S._payload), E);
        }
        if (Ln(S) || wn(S)) return f = f.get(p) || null, h(c, f, S, E, null);
        Rr(c, S);
      }
      return null;
    }
    function g(f, c, p, S) {
      for (var E = null, P = null, R = c, N = c = 0, F = null; R !== null && N < p.length; N++) {
        R.index > N ? (F = R, R = null) : F = R.sibling;
        var L = m(f, R, p[N], S);
        if (L === null) {
          R === null && (R = F);
          break;
        }
        e && R && L.alternate === null && t(f, R), c = o(L, c, N), P === null ? E = L : P.sibling = L, P = L, R = F;
      }
      if (N === p.length) return n(f, R), $ && xt(f, N), E;
      if (R === null) {
        for (; N < p.length; N++) R = d(f, p[N], S), R !== null && (c = o(R, c, N), P === null ? E = R : P.sibling = R, P = R);
        return $ && xt(f, N), E;
      }
      for (R = r(f, R); N < p.length; N++) F = y(R, f, N, p[N], S), F !== null && (e && F.alternate !== null && R.delete(F.key === null ? N : F.key), c = o(F, c, N), P === null ? E = F : P.sibling = F, P = F);
      return e && R.forEach(function(Te) {
        return t(f, Te);
      }), $ && xt(f, N), E;
    }
    function w(f, c, p, S) {
      var E = wn(p);
      if (typeof E != "function") throw Error(k(150));
      if (p = E.call(p), p == null) throw Error(k(151));
      for (var P = E = null, R = c, N = c = 0, F = null, L = p.next(); R !== null && !L.done; N++, L = p.next()) {
        R.index > N ? (F = R, R = null) : F = R.sibling;
        var Te = m(f, R, L.value, S);
        if (Te === null) {
          R === null && (R = F);
          break;
        }
        e && R && Te.alternate === null && t(f, R), c = o(Te, c, N), P === null ? E = Te : P.sibling = Te, P = Te, R = F;
      }
      if (L.done) return n(f, R), $ && xt(f, N), E;
      if (R === null) {
        for (; !L.done; N++, L = p.next()) L = d(f, L.value, S), L !== null && (c = o(L, c, N), P === null ? E = L : P.sibling = L, P = L);
        return $ && xt(f, N), E;
      }
      for (R = r(f, R); !L.done; N++, L = p.next()) L = y(R, f, N, L.value, S), L !== null && (e && L.alternate !== null && R.delete(L.key === null ? N : L.key), c = o(L, c, N), P === null ? E = L : P.sibling = L, P = L);
      return e && R.forEach(function(yn) {
        return t(f, yn);
      }), $ && xt(f, N), E;
    }
    function C(f, c, p, S) {
      if (typeof p == "object" && p !== null && p.type === At && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case mr:
            e: {
              for (var E = p.key, P = c; P !== null; ) {
                if (P.key === E) {
                  if (E = p.type, E === At) {
                    if (P.tag === 7) {
                      n(f, P.sibling), c = l(P, p.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === nt && Ki(E) === P.type) {
                    n(f, P.sibling), c = l(P, p.props), c.ref = xn(f, P, p), c.return = f, f = c;
                    break e;
                  }
                  n(f, P);
                  break;
                } else t(f, P);
                P = P.sibling;
              }
              p.type === At ? (c = Tt(p.props.children, f.mode, S, p.key), c.return = f, f = c) : (S = Wr(p.type, p.key, p.props, null, f.mode, S), S.ref = xn(f, c, p), S.return = f, f = S);
            }
            return u(f);
          case $t:
            e: {
              for (P = p.key; c !== null; ) {
                if (c.key === P) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                  n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                  break e;
                } else {
                  n(f, c);
                  break;
                }
                else t(f, c);
                c = c.sibling;
              }
              c = ao(p, f.mode, S), c.return = f, f = c;
            }
            return u(f);
          case nt:
            return P = p._init, C(f, c, P(p._payload), S);
        }
        if (Ln(p)) return g(f, c, p, S);
        if (wn(p)) return w(f, c, p, S);
        Rr(f, p);
      }
      return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = io(p, f.mode, S), c.return = f, f = c), u(f)) : n(f, c);
    }
    return C;
  }
  var un = Fs(true), Is = Fs(false), ol = wt(null), ul = null, Xt = null, Tu = null;
  function zu() {
    Tu = Xt = ul = null;
  }
  function Ou(e) {
    var t = ol.current;
    U(ol), e._currentValue = t;
  }
  function Ho(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function tn(e, t) {
    ul = e, Tu = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = true), e.firstContext = null);
  }
  function Re(e) {
    var t = e._currentValue;
    if (Tu !== e) if (e = {
      context: e,
      memoizedValue: t,
      next: null
    }, Xt === null) {
      if (ul === null) throw Error(k(308));
      Xt = e, ul.dependencies = {
        lanes: 0,
        firstContext: e
      };
    } else Xt = Xt.next = e;
    return t;
  }
  var _t = null;
  function Du(e) {
    _t === null ? _t = [
      e
    ] : _t.push(e);
  }
  function js(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, Du(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ze(e, r);
  }
  function Ze(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var rt = false;
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }
  function Us(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      effects: e.effects
    });
  }
  function Ye(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, D & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ze(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, Du(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ze(e, n);
  }
  function jr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
    }
  }
  function Yi(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var u = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null
          };
          o === null ? l = o = u : o = o.next = u, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: r.shared,
        effects: r.effects
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function il(e, t, n, r) {
    var l = e.updateQueue;
    rt = false;
    var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var a = i, s = a.next;
      a.next = null, u === null ? o = s : u.next = s, u = a;
      var h = e.alternate;
      h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== u && (i === null ? h.firstBaseUpdate = s : i.next = s, h.lastBaseUpdate = a));
    }
    if (o !== null) {
      var d = l.baseState;
      u = 0, h = s = a = null, i = o;
      do {
        var m = i.lane, y = i.eventTime;
        if ((r & m) === m) {
          h !== null && (h = h.next = {
            eventTime: y,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var g = e, w = i;
            switch (m = t, y = n, w.tag) {
              case 1:
                if (g = w.payload, typeof g == "function") {
                  d = g.call(y, d, m);
                  break e;
                }
                d = g;
                break e;
              case 3:
                g.flags = g.flags & -65537 | 128;
              case 0:
                if (g = w.payload, m = typeof g == "function" ? g.call(y, d, m) : g, m == null) break e;
                d = W({}, d, m);
                break e;
              case 2:
                rt = true;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [
            i
          ] : m.push(i));
        } else y = {
          eventTime: y,
          lane: m,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        }, h === null ? (s = h = y, a = d) : h = h.next = y, u |= m;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null) break;
          m = i, i = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null;
        }
      } while (true);
      if (h === null && (a = d), l.baseState = a, l.firstBaseUpdate = s, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          u |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      Mt |= u, e.lanes = u, e.memoizedState = d;
    }
  }
  function Xi(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
        l.call(r);
      }
    }
  }
  var sr = {}, He = wt(sr), qn = wt(sr), bn = wt(sr);
  function Nt(e) {
    if (e === sr) throw Error(k(174));
    return e;
  }
  function Fu(e, t) {
    switch (I(bn, t), I(qn, e), I(He, sr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Eo(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Eo(t, e);
    }
    U(He), I(He, t);
  }
  function an() {
    U(He), U(qn), U(bn);
  }
  function $s(e) {
    Nt(bn.current);
    var t = Nt(He.current), n = Eo(t, e.type);
    t !== n && (I(qn, e), I(He, n));
  }
  function Iu(e) {
    qn.current === e && (U(He), U(qn));
  }
  var B = wt(0);
  function al(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var to = [];
  function ju() {
    for (var e = 0; e < to.length; e++) to[e]._workInProgressVersionPrimary = null;
    to.length = 0;
  }
  var Ur = et.ReactCurrentDispatcher, no = et.ReactCurrentBatchConfig, Dt = 0, H = null, X = null, Z = null, sl = false, jn = false, er = 0, Kd = 0;
  function ne() {
    throw Error(k(321));
  }
  function Uu(e, t) {
    if (t === null) return false;
    for (var n = 0; n < t.length && n < e.length; n++) if (!je(e[n], t[n])) return false;
    return true;
  }
  function $u(e, t, n, r, l, o) {
    if (Dt = o, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Jd : Zd, e = n(r, l), jn) {
      o = 0;
      do {
        if (jn = false, er = 0, 25 <= o) throw Error(k(301));
        o += 1, Z = X = null, t.updateQueue = null, Ur.current = qd, e = n(r, l);
      } while (jn);
    }
    if (Ur.current = cl, t = X !== null && X.next !== null, Dt = 0, Z = X = H = null, sl = false, t) throw Error(k(300));
    return e;
  }
  function Au() {
    var e = er !== 0;
    return er = 0, e;
  }
  function $e() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Z === null ? H.memoizedState = Z = e : Z = Z.next = e, Z;
  }
  function _e() {
    if (X === null) {
      var e = H.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = X.next;
    var t = Z === null ? H.memoizedState : Z.next;
    if (t !== null) Z = t, X = e;
    else {
      if (e === null) throw Error(k(310));
      X = e, e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null
      }, Z === null ? H.memoizedState = Z = e : Z = Z.next = e;
    }
    return Z;
  }
  function tr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ro(e) {
    var t = _e(), n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = X, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = o.next, o.next = u;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = u = null, a = null, s = o;
      do {
        var h = s.lane;
        if ((Dt & h) === h) a !== null && (a = a.next = {
          lane: 0,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null
        }), r = s.hasEagerState ? s.eagerState : e(r, s.action);
        else {
          var d = {
            lane: h,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null
          };
          a === null ? (i = a = d, u = r) : a = a.next = d, H.lanes |= h, Mt |= h;
        }
        s = s.next;
      } while (s !== null && s !== o);
      a === null ? u = r : a.next = i, je(r, t.memoizedState) || (fe = true), t.memoizedState = r, t.baseState = u, t.baseQueue = a, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, H.lanes |= o, Mt |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [
      t.memoizedState,
      n.dispatch
    ];
  }
  function lo(e) {
    var t = _e(), n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== l);
      je(o, t.memoizedState) || (fe = true), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [
      o,
      r
    ];
  }
  function As() {
  }
  function Bs(e, t) {
    var n = H, r = _e(), l = t(), o = !je(r.memoizedState, l);
    if (o && (r.memoizedState = l, fe = true), r = r.queue, Bu(Vs.bind(null, n, r, e), [
      e
    ]), r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
      if (n.flags |= 2048, nr(9, Ws.bind(null, n, r, l, t), void 0, null), q === null) throw Error(k(349));
      Dt & 30 || Hs(n, t, l);
    }
    return l;
  }
  function Hs(e, t, n) {
    e.flags |= 16384, e = {
      getSnapshot: t,
      value: n
    }, t = H.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, H.updateQueue = t, t.stores = [
      e
    ]) : (n = t.stores, n === null ? t.stores = [
      e
    ] : n.push(e));
  }
  function Ws(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Qs(t) && Ks(e);
  }
  function Vs(e, t, n) {
    return n(function() {
      Qs(t) && Ks(e);
    });
  }
  function Qs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !je(e, n);
    } catch {
      return true;
    }
  }
  function Ks(e) {
    var t = Ze(e, 1);
    t !== null && Ie(t, e, 1, -1);
  }
  function Gi(e) {
    var t = $e();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tr,
      lastRenderedState: e
    }, t.queue = e, e = e.dispatch = Gd.bind(null, H, e), [
      t.memoizedState,
      e
    ];
  }
  function nr(e, t, n, r) {
    return e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null
    }, t = H.updateQueue, t === null ? (t = {
      lastEffect: null,
      stores: null
    }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ys() {
    return _e().memoizedState;
  }
  function $r(e, t, n, r) {
    var l = $e();
    H.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Cl(e, t, n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (X !== null) {
      var u = X.memoizedState;
      if (o = u.destroy, r !== null && Uu(r, u.deps)) {
        l.memoizedState = nr(t, n, o, r);
        return;
      }
    }
    H.flags |= e, l.memoizedState = nr(1 | t, n, o, r);
  }
  function Ji(e, t) {
    return $r(8390656, 8, e, t);
  }
  function Bu(e, t) {
    return Cl(2048, 8, e, t);
  }
  function Xs(e, t) {
    return Cl(4, 2, e, t);
  }
  function Gs(e, t) {
    return Cl(4, 4, e, t);
  }
  function Js(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Zs(e, t, n) {
    return n = n != null ? n.concat([
      e
    ]) : null, Cl(4, 4, Js.bind(null, t, e), n);
  }
  function Hu() {
  }
  function qs(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uu(t, r[1]) ? r[0] : (n.memoizedState = [
      e,
      t
    ], e);
  }
  function bs(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Uu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [
      e,
      t
    ], e);
  }
  function ec(e, t, n) {
    return Dt & 21 ? (je(n, t) || (n = os(), H.lanes |= n, Mt |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, fe = true), e.memoizedState = n);
  }
  function Yd(e, t) {
    var n = M;
    M = n !== 0 && 4 > n ? n : 4, e(true);
    var r = no.transition;
    no.transition = {};
    try {
      e(false), t();
    } finally {
      M = n, no.transition = r;
    }
  }
  function tc() {
    return _e().memoizedState;
  }
  function Xd(e, t, n) {
    var r = ht(e);
    if (n = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    }, nc(e)) rc(t, n);
    else if (n = js(e, t, n, r), n !== null) {
      var l = ie();
      Ie(n, e, r, l), lc(n, t, r);
    }
  }
  function Gd(e, t, n) {
    var r = ht(e), l = {
      lane: r,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (nc(e)) rc(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var u = t.lastRenderedState, i = o(u, n);
        if (l.hasEagerState = true, l.eagerState = i, je(i, u)) {
          var a = t.interleaved;
          a === null ? (l.next = l, Du(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = js(e, t, l, r), n !== null && (l = ie(), Ie(n, e, r, l), lc(n, t, r));
    }
  }
  function nc(e) {
    var t = e.alternate;
    return e === H || t !== null && t === H;
  }
  function rc(e, t) {
    jn = sl = true;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function lc(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, wu(e, n);
    }
  }
  var cl = {
    readContext: Re,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: false
  }, Jd = {
    readContext: Re,
    useCallback: function(e, t) {
      return $e().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Re,
    useEffect: Ji,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([
        e
      ]) : null, $r(4194308, 4, Js.bind(null, t, e), n);
    },
    useLayoutEffect: function(e, t) {
      return $r(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      return $r(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = $e();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [
        e,
        t
      ], e;
    },
    useReducer: function(e, t, n) {
      var r = $e();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = Xd.bind(null, H, e), [
        r.memoizedState,
        e
      ];
    },
    useRef: function(e) {
      var t = $e();
      return e = {
        current: e
      }, t.memoizedState = e;
    },
    useState: Gi,
    useDebugValue: Hu,
    useDeferredValue: function(e) {
      return $e().memoizedState = e;
    },
    useTransition: function() {
      var e = Gi(false), t = e[0];
      return e = Yd.bind(null, e[1]), $e().memoizedState = e, [
        t,
        e
      ];
    },
    useMutableSource: function() {
    },
    useSyncExternalStore: function(e, t, n) {
      var r = H, l = $e();
      if ($) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (n = t(), q === null) throw Error(k(349));
        Dt & 30 || Hs(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      return l.queue = o, Ji(Vs.bind(null, r, o, e), [
        e
      ]), r.flags |= 2048, nr(9, Ws.bind(null, r, o, n, t), void 0, null), n;
    },
    useId: function() {
      var e = $e(), t = q.identifierPrefix;
      if ($) {
        var n = Ke, r = Qe;
        n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
      } else n = Kd++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t;
    },
    unstable_isNewReconciler: false
  }, Zd = {
    readContext: Re,
    useCallback: qs,
    useContext: Re,
    useEffect: Bu,
    useImperativeHandle: Zs,
    useInsertionEffect: Xs,
    useLayoutEffect: Gs,
    useMemo: bs,
    useReducer: ro,
    useRef: Ys,
    useState: function() {
      return ro(tr);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e) {
      var t = _e();
      return ec(t, X.memoizedState, e);
    },
    useTransition: function() {
      var e = ro(tr)[0], t = _e().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: As,
    useSyncExternalStore: Bs,
    useId: tc,
    unstable_isNewReconciler: false
  }, qd = {
    readContext: Re,
    useCallback: qs,
    useContext: Re,
    useEffect: Bu,
    useImperativeHandle: Zs,
    useInsertionEffect: Xs,
    useLayoutEffect: Gs,
    useMemo: bs,
    useReducer: lo,
    useRef: Ys,
    useState: function() {
      return lo(tr);
    },
    useDebugValue: Hu,
    useDeferredValue: function(e) {
      var t = _e();
      return X === null ? t.memoizedState = e : ec(t, X.memoizedState, e);
    },
    useTransition: function() {
      var e = lo(tr)[0], t = _e().memoizedState;
      return [
        e,
        t
      ];
    },
    useMutableSource: As,
    useSyncExternalStore: Bs,
    useId: tc,
    unstable_isNewReconciler: false
  };
  function Oe(e, t) {
    if (e && e.defaultProps) {
      t = W({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Wo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var xl = {
    isMounted: function(e) {
      return (e = e._reactInternals) ? jt(e) === e : false;
    },
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var r = ie(), l = ht(e), o = Ye(r, l);
      o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (Ie(t, e, l, r), jr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var r = ie(), l = ht(e), o = Ye(r, l);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = dt(e, o, l), t !== null && (Ie(t, e, l, r), jr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ie(), r = ht(e), l = Ye(n, r);
      l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (Ie(t, e, r, n), jr(t, e, r));
    }
  };
  function Zi(e, t, n, r, l, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : t.prototype && t.prototype.isPureReactComponent ? !Xn(n, r) || !Xn(l, o) : true;
  }
  function oc(e, t, n) {
    var r = false, l = yt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = Re(o) : (l = pe(t) ? zt : oe.current, r = t.contextTypes, o = (r = r != null) ? ln(e, l) : yt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function qi(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && xl.enqueueReplaceState(t, t.state, null);
  }
  function Vo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Mu(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = Re(o) : (o = pe(t) ? zt : oe.current, l.context = ln(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Wo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && xl.enqueueReplaceState(l, l.state, null), il(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function sn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Rf(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return {
      value: e,
      source: t,
      stack: l,
      digest: null
    };
  }
  function oo(e, t, n) {
    return {
      value: e,
      source: null,
      stack: n ?? null,
      digest: t ?? null
    };
  }
  function Qo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var bd = typeof WeakMap == "function" ? WeakMap : Map;
  function uc(e, t, n) {
    n = Ye(-1, n), n.tag = 3, n.payload = {
      element: null
    };
    var r = t.value;
    return n.callback = function() {
      dl || (dl = true, tu = r), Qo(e, t);
    }, n;
  }
  function ic(e, t, n) {
    n = Ye(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Qo(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      Qo(e, t), typeof r != "function" && (pt === null ? pt = /* @__PURE__ */ new Set([
        this
      ]) : pt.add(this));
      var u = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: u !== null ? u : ""
      });
    }), n;
  }
  function bi(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new bd();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = pp.bind(null, e, t, n), t.then(e, e));
  }
  function ea(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ta(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ye(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e);
  }
  var ep = et.ReactCurrentOwner, fe = false;
  function ue(e, t, n, r) {
    t.child = e === null ? Is(t, null, n, r) : un(t, e.child, n, r);
  }
  function na(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return tn(t, l), r = $u(e, t, n, r, o, l), n = Au(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : ($ && n && _u(t), t.flags |= 1, ue(e, t, r, l), t.child);
  }
  function ra(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Ju(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ac(e, t, o, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var u = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Xn, n(u, r) && e.ref === t.ref) return qe(e, t, l);
    }
    return t.flags |= 1, e = mt(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ac(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Xn(o, r) && e.ref === t.ref) if (fe = false, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = true);
      else return t.lanes = e.lanes, qe(e, t, l);
    }
    return Ko(e, t, n, r, l);
  }
  function sc(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, I(Jt, me), me |= n;
    else {
      if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, I(Jt, me), me |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = o !== null ? o.baseLanes : n, I(Jt, me), me |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, I(Jt, me), me |= r;
    return ue(e, t, l, n), t.child;
  }
  function cc(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ko(e, t, n, r, l) {
    var o = pe(n) ? zt : oe.current;
    return o = ln(t, o), tn(t, l), n = $u(e, t, n, r, o, l), r = Au(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : ($ && r && _u(t), t.flags |= 1, ue(e, t, n, l), t.child);
  }
  function la(e, t, n, r, l) {
    if (pe(n)) {
      var o = true;
      nl(t);
    } else o = false;
    if (tn(t, l), t.stateNode === null) Ar(e, t), oc(t, n, r), Vo(t, n, r, l), r = true;
    else if (e === null) {
      var u = t.stateNode, i = t.memoizedProps;
      u.props = i;
      var a = u.context, s = n.contextType;
      typeof s == "object" && s !== null ? s = Re(s) : (s = pe(n) ? zt : oe.current, s = ln(t, s));
      var h = n.getDerivedStateFromProps, d = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      d || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || a !== s) && qi(t, u, r, s), rt = false;
      var m = t.memoizedState;
      u.state = m, il(t, r, u, l), a = t.memoizedState, i !== r || m !== a || de.current || rt ? (typeof h == "function" && (Wo(t, n, h, r), a = t.memoizedState), (i = rt || Zi(t, n, i, r, m, a, s)) ? (d || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), u.props = r, u.state = a, u.context = s, r = i) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), r = false);
    } else {
      u = t.stateNode, Us(e, t), i = t.memoizedProps, s = t.type === t.elementType ? i : Oe(t.type, i), u.props = s, d = t.pendingProps, m = u.context, a = n.contextType, typeof a == "object" && a !== null ? a = Re(a) : (a = pe(n) ? zt : oe.current, a = ln(t, a));
      var y = n.getDerivedStateFromProps;
      (h = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== d || m !== a) && qi(t, u, r, a), rt = false, m = t.memoizedState, u.state = m, il(t, r, u, l);
      var g = t.memoizedState;
      i !== d || m !== g || de.current || rt ? (typeof y == "function" && (Wo(t, n, y, r), g = t.memoizedState), (s = rt || Zi(t, n, s, r, m, g, a) || false) ? (h || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, g, a), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, g, a)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), u.props = r, u.state = g, u.context = a, r = s) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = false);
    }
    return Yo(e, t, n, r, o, l);
  }
  function Yo(e, t, n, r, l, o) {
    cc(e, t);
    var u = (t.flags & 128) !== 0;
    if (!r && !u) return l && Wi(t, n, false), qe(e, t, o);
    r = t.stateNode, ep.current = t;
    var i = u && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && u ? (t.child = un(t, e.child, null, o), t.child = un(t, null, i, o)) : ue(e, t, i, o), t.memoizedState = r.state, l && Wi(t, n, true), t.child;
  }
  function fc(e) {
    var t = e.stateNode;
    t.pendingContext ? Hi(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hi(e, t.context, false), Fu(e, t.containerInfo);
  }
  function oa(e, t, n, r, l) {
    return on(), Lu(l), t.flags |= 256, ue(e, t, n, r), t.child;
  }
  var Xo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function Go(e) {
    return {
      baseLanes: e,
      cachePool: null,
      transitions: null
    };
  }
  function dc(e, t, n) {
    var r = t.pendingProps, l = B.current, o = false, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? false : (l & 2) !== 0), i ? (o = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(B, l & 1), e === null) return Bo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, u = {
      mode: "hidden",
      children: u
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = _l(u, r, 0, null), e = Tt(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Go(n), t.memoizedState = Xo, e) : Wu(t, u));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return tp(e, t, u, r, i, l, n);
    if (o) {
      o = r.fallback, u = t.mode, l = e.child, i = l.sibling;
      var a = {
        mode: "hidden",
        children: r.children
      };
      return !(u & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = mt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = mt(i, o) : (o = Tt(o, u, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, u = e.child.memoizedState, u = u === null ? Go(n) : {
        baseLanes: u.baseLanes | n,
        cachePool: null,
        transitions: u.transitions
      }, o.memoizedState = u, o.childLanes = e.childLanes & ~n, t.memoizedState = Xo, r;
    }
    return o = e.child, e = o.sibling, r = mt(o, {
      mode: "visible",
      children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [
      e
    ], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Wu(e, t) {
    return t = _l({
      mode: "visible",
      children: t
    }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function _r(e, t, n, r) {
    return r !== null && Lu(r), un(t, e.child, null, n), e = Wu(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function tp(e, t, n, r, l, o, u) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = oo(Error(k(422))), _r(e, t, u, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = _l({
      mode: "visible",
      children: r.children
    }, l, 0, null), o = Tt(o, l, u, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && un(t, e.child, null, u), t.child.memoizedState = Go(u), t.memoizedState = Xo, o);
    if (!(t.mode & 1)) return _r(e, t, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
      return r = i, o = Error(k(419)), r = oo(o, r, void 0), _r(e, t, u, r);
    }
    if (i = (u & e.childLanes) !== 0, fe || i) {
      if (r = q, r !== null) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ze(e, l), Ie(r, e, l, -1));
      }
      return Gu(), r = oo(Error(k(421))), _r(e, t, u, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hp.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ve = ft(l.nextSibling), ye = t, $ = true, Me = null, e !== null && (Ee[Ce++] = Qe, Ee[Ce++] = Ke, Ee[Ce++] = Ot, Qe = e.id, Ke = e.overflow, Ot = t), t = Wu(t, r.children), t.flags |= 4096, t);
  }
  function ua(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ho(e.return, t, n);
  }
  function uo(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: r,
      tail: n,
      tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function pc(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (ue(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
        else if (e.tag === 19) ua(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (I(B, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && al(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), uo(t, false, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && al(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        uo(t, true, n, null, o);
        break;
      case "together":
        uo(t, false, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ar(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function qe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
      for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function np(e, t, n) {
    switch (t.tag) {
      case 3:
        fc(t), on();
        break;
      case 5:
        $s(t);
        break;
      case 1:
        pe(t.type) && nl(t);
        break;
      case 4:
        Fu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        I(ol, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (I(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? dc(e, t, n) : (I(B, B.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
        I(B, B.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return pc(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(B, B.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, sc(e, t, n);
    }
    return qe(e, t, n);
  }
  var hc, Jo, mc, vc;
  hc = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  };
  Jo = function() {
  };
  mc = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, Nt(He.current);
      var o = null;
      switch (n) {
        case "input":
          l = go(e, l), r = go(e, r), o = [];
          break;
        case "select":
          l = W({}, l, {
            value: void 0
          }), r = W({}, r, {
            value: void 0
          }), o = [];
          break;
        case "textarea":
          l = ko(e, l), r = ko(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = el);
      }
      Co(n, r);
      var u;
      n = null;
      for (s in l) if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null) if (s === "style") {
        var i = l[s];
        for (u in i) i.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
      } else s !== "dangerouslySetInnerHTML" && s !== "children" && s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Bn.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
      for (s in r) {
        var a = r[s];
        if (i = l == null ? void 0 : l[s], r.hasOwnProperty(s) && a !== i && (a != null || i != null)) if (s === "style") if (i) {
          for (u in i) !i.hasOwnProperty(u) || a && a.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
          for (u in a) a.hasOwnProperty(u) && i[u] !== a[u] && (n || (n = {}), n[u] = a[u]);
        } else n || (o || (o = []), o.push(s, n)), n = a;
        else s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, i = i ? i.__html : void 0, a != null && i !== a && (o = o || []).push(s, a)) : s === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(s, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && (Bn.hasOwnProperty(s) ? (a != null && s === "onScroll" && j("scroll", e), o || i === a || (o = [])) : (o = o || []).push(s, a));
      }
      n && (o = o || []).push("style", n);
      var s = o;
      (t.updateQueue = s) && (t.flags |= 4);
    }
  };
  vc = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Pn(e, t) {
    if (!$) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function rp(e, t, n) {
    var r = t.pendingProps;
    switch (Nu(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return re(t), null;
      case 1:
        return pe(t.type) && tl(), re(t), null;
      case 3:
        return r = t.stateNode, an(), U(de), U(oe), ju(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (lu(Me), Me = null))), Jo(e, t), re(t), null;
      case 5:
        Iu(t);
        var l = Nt(bn.current);
        if (n = t.type, e !== null && t.stateNode != null) mc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(k(166));
            return re(t), null;
          }
          if (e = Nt(He.current), Pr(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[Ae] = t, r[Zn] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                j("cancel", r), j("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                j("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < zn.length; l++) j(zn[l], r);
                break;
              case "source":
                j("error", r);
                break;
              case "img":
              case "image":
              case "link":
                j("error", r), j("load", r);
                break;
              case "details":
                j("toggle", r);
                break;
              case "input":
                mi(r, o), j("invalid", r);
                break;
              case "select":
                r._wrapperState = {
                  wasMultiple: !!o.multiple
                }, j("invalid", r);
                break;
              case "textarea":
                yi(r, o), j("invalid", r);
            }
            Co(n, o), l = null;
            for (var u in o) if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== true && xr(r.textContent, i, e), l = [
                "children",
                i
              ]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== true && xr(r.textContent, i, e), l = [
                "children",
                "" + i
              ]) : Bn.hasOwnProperty(u) && i != null && u === "onScroll" && j("scroll", r);
            }
            switch (n) {
              case "input":
                vr(r), vi(r, o, true);
                break;
              case "textarea":
                vr(r), gi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = el);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Va(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(n, {
              is: r.is
            }) : (e = u.createElement(n), n === "select" && (u = e, r.multiple ? u.multiple = true : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[Ae] = t, e[Zn] = r, hc(e, t, false, false), t.stateNode = e;
            e: {
              switch (u = xo(n, r), n) {
                case "dialog":
                  j("cancel", e), j("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  j("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < zn.length; l++) j(zn[l], e);
                  l = r;
                  break;
                case "source":
                  j("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  j("error", e), j("load", e), l = r;
                  break;
                case "details":
                  j("toggle", e), l = r;
                  break;
                case "input":
                  mi(e, r), l = go(e, r), j("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = {
                    wasMultiple: !!r.multiple
                  }, l = W({}, r, {
                    value: void 0
                  }), j("invalid", e);
                  break;
                case "textarea":
                  yi(e, r), l = ko(e, r), j("invalid", e);
                  break;
                default:
                  l = r;
              }
              Co(n, l), i = l;
              for (o in i) if (i.hasOwnProperty(o)) {
                var a = i[o];
                o === "style" ? Ya(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Qa(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Hn(e, a) : typeof a == "number" && Hn(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Bn.hasOwnProperty(o) ? a != null && o === "onScroll" && j("scroll", e) : a != null && pu(e, o, a, u));
              }
              switch (n) {
                case "input":
                  vr(e), vi(e, r, false);
                  break;
                case "textarea":
                  vr(e), gi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + vt(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? Zt(e, !!r.multiple, o, false) : r.defaultValue != null && Zt(e, !!r.multiple, r.defaultValue, true);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = el);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = true;
                  break e;
                default:
                  r = false;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return re(t), null;
      case 6:
        if (e && t.stateNode != null) vc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
          if (n = Nt(bn.current), Nt(He.current), Pr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Ae] = t, (o = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
              case 3:
                xr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== true && xr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ae] = t, t.stateNode = r;
        }
        return re(t), null;
      case 13:
        if (U(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if ($ && ve !== null && t.mode & 1 && !(t.flags & 128)) Ms(), on(), t.flags |= 98560, o = false;
          else if (o = Pr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(k(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(k(317));
              o[Ae] = t;
            } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            re(t), o = false;
          } else Me !== null && (lu(Me), Me = null), o = true;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? G === 0 && (G = 3) : Gu())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
      case 4:
        return an(), Jo(e, t), e === null && Gn(t.stateNode.containerInfo), re(t), null;
      case 10:
        return Ou(t.type._context), re(t), null;
      case 17:
        return pe(t.type) && tl(), re(t), null;
      case 19:
        if (U(B), o = t.memoizedState, o === null) return re(t), null;
        if (r = (t.flags & 128) !== 0, u = o.rendering, u === null) if (r) Pn(o, false);
        else {
          if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (u = al(e), u !== null) {
              for (t.flags |= 128, Pn(o, false), r = u.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : {
                lanes: e.lanes,
                firstContext: e.firstContext
              }), n = n.sibling;
              return I(B, B.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && K() > cn && (t.flags |= 128, r = true, Pn(o, false), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = al(u), e !== null) {
            if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pn(o, true), o.tail === null && o.tailMode === "hidden" && !u.alternate && !$) return re(t), null;
          } else 2 * K() - o.renderingStartTime > cn && n !== 1073741824 && (t.flags |= 128, r = true, Pn(o, false), t.lanes = 4194304);
          o.isBackwards ? (u.sibling = t.child, t.child = u) : (n = o.last, n !== null ? n.sibling = u : t.child = u, o.last = u);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, I(B, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
      case 22:
      case 23:
        return Xu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? me & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, t.tag));
  }
  function lp(e, t) {
    switch (Nu(t), t.tag) {
      case 1:
        return pe(t.type) && tl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return an(), U(de), U(oe), ju(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Iu(t), null;
      case 13:
        if (U(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(k(340));
          on();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(B), null;
      case 4:
        return an(), null;
      case 10:
        return Ou(t.type._context), null;
      case 22:
      case 23:
        return Xu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Nr = false, le = false, op = typeof WeakSet == "function" ? WeakSet : Set, x = null;
  function Gt(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      V(e, t, r);
    }
    else n.current = null;
  }
  function Zo(e, t, n) {
    try {
      n();
    } catch (r) {
      V(e, t, r);
    }
  }
  var ia = false;
  function up(e, t) {
    if (Mo = Zr, e = ks(), Ru(e)) {
      if ("selectionStart" in e) var n = {
        start: e.selectionStart,
        end: e.selectionEnd
      };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var u = 0, i = -1, a = -1, s = 0, h = 0, d = e, m = null;
          t: for (; ; ) {
            for (var y; d !== n || l !== 0 && d.nodeType !== 3 || (i = u + l), d !== o || r !== 0 && d.nodeType !== 3 || (a = u + r), d.nodeType === 3 && (u += d.nodeValue.length), (y = d.firstChild) !== null; ) m = d, d = y;
            for (; ; ) {
              if (d === e) break t;
              if (m === n && ++s === l && (i = u), m === o && ++h === r && (a = u), (y = d.nextSibling) !== null) break;
              d = m, m = d.parentNode;
            }
            d = y;
          }
          n = i === -1 || a === -1 ? null : {
            start: i,
            end: a
          };
        } else n = null;
      }
      n = n || {
        start: 0,
        end: 0
      };
    } else n = null;
    for (Fo = {
      focusedElem: e,
      selectionRange: n
    }, Zr = false, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
    else for (; x !== null; ) {
      t = x;
      try {
        var g = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (g !== null) {
              var w = g.memoizedProps, C = g.memoizedState, f = t.stateNode, c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Oe(t.type, w), C);
              f.__reactInternalSnapshotBeforeUpdate = c;
            }
            break;
          case 3:
            var p = t.stateNode.containerInfo;
            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(k(163));
        }
      } catch (S) {
        V(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, x = e;
        break;
      }
      x = t.return;
    }
    return g = ia, ia = false, g;
  }
  function Un(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && Zo(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Pl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function qo(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function yc(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ae], delete t[Zn], delete t[Uo], delete t[Hd], delete t[Wd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function gc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function aa(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gc(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = el));
    else if (r !== 4 && (e = e.child, e !== null)) for (bo(e, t, n), e = e.sibling; e !== null; ) bo(e, t, n), e = e.sibling;
  }
  function eu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (eu(e, t, n), e = e.sibling; e !== null; ) eu(e, t, n), e = e.sibling;
  }
  var b = null, De = false;
  function tt(e, t, n) {
    for (n = n.child; n !== null; ) wc(e, t, n), n = n.sibling;
  }
  function wc(e, t, n) {
    if (Be && typeof Be.onCommitFiberUnmount == "function") try {
      Be.onCommitFiberUnmount(yl, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        le || Gt(n, t);
      case 6:
        var r = b, l = De;
        b = null, tt(e, t, n), b = r, De = l, b !== null && (De ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
      case 18:
        b !== null && (De ? (e = b, n = n.stateNode, e.nodeType === 8 ? bl(e.parentNode, n) : e.nodeType === 1 && bl(e, n), Kn(e)) : bl(b, n.stateNode));
        break;
      case 4:
        r = b, l = De, b = n.stateNode.containerInfo, De = true, tt(e, t, n), b = r, De = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, u = o.destroy;
            o = o.tag, u !== void 0 && (o & 2 || o & 4) && Zo(n, t, u), l = l.next;
          } while (l !== r);
        }
        tt(e, t, n);
        break;
      case 1:
        if (!le && (Gt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (i) {
          V(n, t, i);
        }
        tt(e, t, n);
        break;
      case 21:
        tt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, tt(e, t, n), le = r) : tt(e, t, n);
        break;
      default:
        tt(e, t, n);
    }
  }
  function sa(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new op()), t.forEach(function(r) {
        var l = mp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ze(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, u = t, i = u;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              b = i.stateNode, De = false;
              break e;
            case 3:
              b = i.stateNode.containerInfo, De = true;
              break e;
            case 4:
              b = i.stateNode.containerInfo, De = true;
              break e;
          }
          i = i.return;
        }
        if (b === null) throw Error(k(160));
        wc(o, u, l), b = null, De = false;
        var a = l.alternate;
        a !== null && (a.return = null), l.return = null;
      } catch (s) {
        V(l, t, s);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Sc(t, e), t = t.sibling;
  }
  function Sc(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ze(t, e), Ue(e), r & 4) {
          try {
            Un(3, e, e.return), Pl(3, e);
          } catch (w) {
            V(e, e.return, w);
          }
          try {
            Un(5, e, e.return);
          } catch (w) {
            V(e, e.return, w);
          }
        }
        break;
      case 1:
        ze(t, e), Ue(e), r & 512 && n !== null && Gt(n, n.return);
        break;
      case 5:
        if (ze(t, e), Ue(e), r & 512 && n !== null && Gt(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Hn(l, "");
          } catch (w) {
            V(e, e.return, w);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, u = n !== null ? n.memoizedProps : o, i = e.type, a = e.updateQueue;
          if (e.updateQueue = null, a !== null) try {
            i === "input" && o.type === "radio" && o.name != null && Ha(l, o), xo(i, u);
            var s = xo(i, o);
            for (u = 0; u < a.length; u += 2) {
              var h = a[u], d = a[u + 1];
              h === "style" ? Ya(l, d) : h === "dangerouslySetInnerHTML" ? Qa(l, d) : h === "children" ? Hn(l, d) : pu(l, h, d, s);
            }
            switch (i) {
              case "input":
                wo(l, o);
                break;
              case "textarea":
                Wa(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null ? Zt(l, !!o.multiple, y, false) : m !== !!o.multiple && (o.defaultValue != null ? Zt(l, !!o.multiple, o.defaultValue, true) : Zt(l, !!o.multiple, o.multiple ? [] : "", false));
            }
            l[Zn] = o;
          } catch (w) {
            V(e, e.return, w);
          }
        }
        break;
      case 6:
        if (ze(t, e), Ue(e), r & 4) {
          if (e.stateNode === null) throw Error(k(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (w) {
            V(e, e.return, w);
          }
        }
        break;
      case 3:
        if (ze(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Kn(t.containerInfo);
        } catch (w) {
          V(e, e.return, w);
        }
        break;
      case 4:
        ze(t, e), Ue(e);
        break;
      case 13:
        ze(t, e), Ue(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ku = K())), r & 4 && sa(e);
        break;
      case 22:
        if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (s = le) || h, ze(t, e), le = s) : ze(t, e), Ue(e), r & 8192) {
          if (s = e.memoizedState !== null, (e.stateNode.isHidden = s) && !h && e.mode & 1) for (x = e, h = e.child; h !== null; ) {
            for (d = x = h; x !== null; ) {
              switch (m = x, y = m.child, m.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Un(4, m, m.return);
                  break;
                case 1:
                  Gt(m, m.return);
                  var g = m.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    r = m, n = m.return;
                    try {
                      t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                    } catch (w) {
                      V(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Gt(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    fa(d);
                    continue;
                  }
              }
              y !== null ? (y.return = m, x = y) : fa(d);
            }
            h = h.sibling;
          }
          e: for (h = null, d = e; ; ) {
            if (d.tag === 5) {
              if (h === null) {
                h = d;
                try {
                  l = d.stateNode, s ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = d.stateNode, a = d.memoizedProps.style, u = a != null && a.hasOwnProperty("display") ? a.display : null, i.style.display = Ka("display", u));
                } catch (w) {
                  V(e, e.return, w);
                }
              }
            } else if (d.tag === 6) {
              if (h === null) try {
                d.stateNode.nodeValue = s ? "" : d.memoizedProps;
              } catch (w) {
                V(e, e.return, w);
              }
            } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
              d.child.return = d, d = d.child;
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              h === d && (h = null), d = d.return;
            }
            h === d && (h = null), d.sibling.return = d.return, d = d.sibling;
          }
        }
        break;
      case 19:
        ze(t, e), Ue(e), r & 4 && sa(e);
        break;
      case 21:
        break;
      default:
        ze(t, e), Ue(e);
    }
  }
  function Ue(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (gc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(k(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Hn(l, ""), r.flags &= -33);
            var o = aa(e);
            eu(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, i = aa(e);
            bo(e, i, u);
            break;
          default:
            throw Error(k(161));
        }
      } catch (a) {
        V(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ip(e, t, n) {
    x = e, kc(e);
  }
  function kc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null; ) {
      var l = x, o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || Nr;
        if (!u) {
          var i = l.alternate, a = i !== null && i.memoizedState !== null || le;
          i = Nr;
          var s = le;
          if (Nr = u, (le = a) && !s) for (x = l; x !== null; ) u = x, a = u.child, u.tag === 22 && u.memoizedState !== null ? da(l) : a !== null ? (a.return = u, x = a) : da(l);
          for (; o !== null; ) x = o, kc(o), o = o.sibling;
          x = l, Nr = i, le = s;
        }
        ca(e);
      } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, x = o) : ca(e);
    }
  }
  function ca(e) {
    for (; x !== null; ) {
      var t = x;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || Pl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : Oe(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Xi(t, o, r);
              break;
            case 3:
              var u = t.updateQueue;
              if (u !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Xi(t, u, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var h = s.memoizedState;
                  if (h !== null) {
                    var d = h.dehydrated;
                    d !== null && Kn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
          le || t.flags & 512 && qo(t);
        } catch (m) {
          V(t, t.return, m);
        }
      }
      if (t === e) {
        x = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, x = n;
        break;
      }
      x = t.return;
    }
  }
  function fa(e) {
    for (; x !== null; ) {
      var t = x;
      if (t === e) {
        x = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, x = n;
        break;
      }
      x = t.return;
    }
  }
  function da(e) {
    for (; x !== null; ) {
      var t = x;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Pl(4, t);
            } catch (a) {
              V(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                V(t, l, a);
              }
            }
            var o = t.return;
            try {
              qo(t);
            } catch (a) {
              V(t, o, a);
            }
            break;
          case 5:
            var u = t.return;
            try {
              qo(t);
            } catch (a) {
              V(t, u, a);
            }
        }
      } catch (a) {
        V(t, t.return, a);
      }
      if (t === e) {
        x = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, x = i;
        break;
      }
      x = t.return;
    }
  }
  var ap = Math.ceil, fl = et.ReactCurrentDispatcher, Vu = et.ReactCurrentOwner, Pe = et.ReactCurrentBatchConfig, D = 0, q = null, Y = null, ee = 0, me = 0, Jt = wt(0), G = 0, rr = null, Mt = 0, Rl = 0, Qu = 0, $n = null, ce = null, Ku = 0, cn = 1 / 0, We = null, dl = false, tu = null, pt = null, Lr = false, it = null, pl = 0, An = 0, nu = null, Br = -1, Hr = 0;
  function ie() {
    return D & 6 ? K() : Br !== -1 ? Br : Br = K();
  }
  function ht(e) {
    return e.mode & 1 ? D & 2 && ee !== 0 ? ee & -ee : Qd.transition !== null ? (Hr === 0 && (Hr = os()), Hr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ds(e.type)), e) : 1;
  }
  function Ie(e, t, n, r) {
    if (50 < An) throw An = 0, nu = null, Error(k(185));
    ur(e, n, r), (!(D & 2) || e !== q) && (e === q && (!(D & 2) && (Rl |= n), G === 4 && ot(e, ee)), he(e, r), n === 1 && D === 0 && !(t.mode & 1) && (cn = K() + 500, El && St()));
  }
  function he(e, t) {
    var n = e.callbackNode;
    Qf(e, t);
    var r = Jr(e, e === q ? ee : 0);
    if (r === 0) n !== null && ki(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ki(n), t === 1) e.tag === 0 ? Vd(pa.bind(null, e)) : zs(pa.bind(null, e)), Ad(function() {
        !(D & 6) && St();
      }), n = null;
      else {
        switch (us(r)) {
          case 1:
            n = gu;
            break;
          case 4:
            n = rs;
            break;
          case 16:
            n = Gr;
            break;
          case 536870912:
            n = ls;
            break;
          default:
            n = Gr;
        }
        n = Lc(n, Ec.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ec(e, t) {
    if (Br = -1, Hr = 0, D & 6) throw Error(k(327));
    var n = e.callbackNode;
    if (nn() && e.callbackNode !== n) return null;
    var r = Jr(e, e === q ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
    else {
      t = r;
      var l = D;
      D |= 2;
      var o = xc();
      (q !== e || ee !== t) && (We = null, cn = K() + 500, Lt(e, t));
      do
        try {
          fp();
          break;
        } catch (i) {
          Cc(e, i);
        }
      while (true);
      zu(), fl.current = o, D = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
    }
    if (t !== 0) {
      if (t === 2 && (l = Lo(e), l !== 0 && (r = l, t = ru(e, l))), t === 1) throw n = rr, Lt(e, 0), ot(e, r), he(e, K()), n;
      if (t === 6) ot(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !sp(l) && (t = hl(e, r), t === 2 && (o = Lo(e), o !== 0 && (r = o, t = ru(e, o))), t === 1)) throw n = rr, Lt(e, 0), ot(e, r), he(e, K()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Pt(e, ce, We);
            break;
          case 3:
            if (ot(e, r), (r & 130023424) === r && (t = Ku + 500 - K(), 10 < t)) {
              if (Jr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ie(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = jo(Pt.bind(null, e, ce, We), t);
              break;
            }
            Pt(e, ce, We);
            break;
          case 4:
            if (ot(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - Fe(r);
              o = 1 << u, u = t[u], u > l && (l = u), r &= ~o;
            }
            if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ap(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = jo(Pt.bind(null, e, ce, We), r);
              break;
            }
            Pt(e, ce, We);
            break;
          case 5:
            Pt(e, ce, We);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return he(e, K()), e.callbackNode === n ? Ec.bind(null, e) : null;
  }
  function ru(e, t) {
    var n = $n;
    return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = hl(e, t), e !== 2 && (t = ce, ce = n, t !== null && lu(t)), e;
  }
  function lu(e) {
    ce === null ? ce = e : ce.push.apply(ce, e);
  }
  function sp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!je(o(), l)) return false;
          } catch {
            return false;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function ot(e, t) {
    for (t &= ~Qu, t &= ~Rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - Fe(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function pa(e) {
    if (D & 6) throw Error(k(327));
    nn();
    var t = Jr(e, 0);
    if (!(t & 1)) return he(e, K()), null;
    var n = hl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Lo(e);
      r !== 0 && (t = r, n = ru(e, r));
    }
    if (n === 1) throw n = rr, Lt(e, 0), ot(e, t), he(e, K()), n;
    if (n === 6) throw Error(k(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Pt(e, ce, We), he(e, K()), null;
  }
  function Yu(e, t) {
    var n = D;
    D |= 1;
    try {
      return e(t);
    } finally {
      D = n, D === 0 && (cn = K() + 500, El && St());
    }
  }
  function Ft(e) {
    it !== null && it.tag === 0 && !(D & 6) && nn();
    var t = D;
    D |= 1;
    var n = Pe.transition, r = M;
    try {
      if (Pe.transition = null, M = 1, e) return e();
    } finally {
      M = r, Pe.transition = n, D = t, !(D & 6) && St();
    }
  }
  function Xu() {
    me = Jt.current, U(Jt);
  }
  function Lt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, $d(n)), Y !== null) for (n = Y.return; n !== null; ) {
      var r = n;
      switch (Nu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && tl();
          break;
        case 3:
          an(), U(de), U(oe), ju();
          break;
        case 5:
          Iu(r);
          break;
        case 4:
          an();
          break;
        case 13:
          U(B);
          break;
        case 19:
          U(B);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          Xu();
      }
      n = n.return;
    }
    if (q = e, Y = e = mt(e.current, null), ee = me = t, G = 0, rr = null, Qu = Rl = Mt = 0, ce = $n = null, _t !== null) {
      for (t = 0; t < _t.length; t++) if (n = _t[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        n.pending = r;
      }
      _t = null;
    }
    return e;
  }
  function Cc(e, t) {
    do {
      var n = Y;
      try {
        if (zu(), Ur.current = cl, sl) {
          for (var r = H.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          sl = false;
        }
        if (Dt = 0, Z = X = H = null, jn = false, er = 0, Vu.current = null, n === null || n.return === null) {
          G = 1, rr = t, Y = null;
          break;
        }
        e: {
          var o = e, u = n.return, i = n, a = t;
          if (t = ee, i.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            var s = a, h = i, d = h.tag;
            if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var m = h.alternate;
              m ? (h.updateQueue = m.updateQueue, h.memoizedState = m.memoizedState, h.lanes = m.lanes) : (h.updateQueue = null, h.memoizedState = null);
            }
            var y = ea(u);
            if (y !== null) {
              y.flags &= -257, ta(y, u, i, o, t), y.mode & 1 && bi(o, s, t), t = y, a = s;
              var g = t.updateQueue;
              if (g === null) {
                var w = /* @__PURE__ */ new Set();
                w.add(a), t.updateQueue = w;
              } else g.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                bi(o, s, t), Gu();
                break e;
              }
              a = Error(k(426));
            }
          } else if ($ && i.mode & 1) {
            var C = ea(u);
            if (C !== null) {
              !(C.flags & 65536) && (C.flags |= 256), ta(C, u, i, o, t), Lu(sn(a, i));
              break e;
            }
          }
          o = a = sn(a, i), G !== 4 && (G = 2), $n === null ? $n = [
            o
          ] : $n.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var f = uc(o, a, t);
                Yi(o, f);
                break e;
              case 1:
                i = a;
                var c = o.type, p = o.stateNode;
                if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (pt === null || !pt.has(p)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var S = ic(o, i, t);
                  Yi(o, S);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Rc(n);
      } catch (E) {
        t = E, Y === n && n !== null && (Y = n = n.return);
        continue;
      }
      break;
    } while (true);
  }
  function xc() {
    var e = fl.current;
    return fl.current = cl, e === null ? cl : e;
  }
  function Gu() {
    (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Mt & 268435455) && !(Rl & 268435455) || ot(q, ee);
  }
  function hl(e, t) {
    var n = D;
    D |= 2;
    var r = xc();
    (q !== e || ee !== t) && (We = null, Lt(e, t));
    do
      try {
        cp();
        break;
      } catch (l) {
        Cc(e, l);
      }
    while (true);
    if (zu(), D = n, fl.current = r, Y !== null) throw Error(k(261));
    return q = null, ee = 0, G;
  }
  function cp() {
    for (; Y !== null; ) Pc(Y);
  }
  function fp() {
    for (; Y !== null && !If(); ) Pc(Y);
  }
  function Pc(e) {
    var t = Nc(e.alternate, e, me);
    e.memoizedProps = e.pendingProps, t === null ? Rc(e) : Y = t, Vu.current = null;
  }
  function Rc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = lp(n, t), n !== null) {
          n.flags &= 32767, Y = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          G = 6, Y = null;
          return;
        }
      } else if (n = rp(n, t, me), n !== null) {
        Y = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Y = t;
        return;
      }
      Y = t = e;
    } while (t !== null);
    G === 0 && (G = 5);
  }
  function Pt(e, t, n) {
    var r = M, l = Pe.transition;
    try {
      Pe.transition = null, M = 1, dp(e, t, n, r);
    } finally {
      Pe.transition = l, M = r;
    }
    return null;
  }
  function dp(e, t, n, r) {
    do
      nn();
    while (it !== null);
    if (D & 6) throw Error(k(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Kf(e, o), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lr || (Lr = true, Lc(Gr, function() {
      return nn(), null;
    })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
      o = Pe.transition, Pe.transition = null;
      var u = M;
      M = 1;
      var i = D;
      D |= 4, Vu.current = null, up(e, n), Sc(n, e), Od(Fo), Zr = !!Mo, Fo = Mo = null, e.current = n, ip(n), jf(), D = i, M = u, Pe.transition = o;
    } else e.current = n;
    if (Lr && (Lr = false, it = e, pl = l), o = e.pendingLanes, o === 0 && (pt = null), Af(n.stateNode), he(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
      componentStack: l.stack,
      digest: l.digest
    });
    if (dl) throw dl = false, e = tu, tu = null, e;
    return pl & 1 && e.tag !== 0 && nn(), o = e.pendingLanes, o & 1 ? e === nu ? An++ : (An = 0, nu = e) : An = 0, St(), null;
  }
  function nn() {
    if (it !== null) {
      var e = us(pl), t = Pe.transition, n = M;
      try {
        if (Pe.transition = null, M = 16 > e ? 16 : e, it === null) var r = false;
        else {
          if (e = it, it = null, pl = 0, D & 6) throw Error(k(331));
          var l = D;
          for (D |= 4, x = e.current; x !== null; ) {
            var o = x, u = o.child;
            if (x.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var a = 0; a < i.length; a++) {
                  var s = i[a];
                  for (x = s; x !== null; ) {
                    var h = x;
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Un(8, h, o);
                    }
                    var d = h.child;
                    if (d !== null) d.return = h, x = d;
                    else for (; x !== null; ) {
                      h = x;
                      var m = h.sibling, y = h.return;
                      if (yc(h), h === s) {
                        x = null;
                        break;
                      }
                      if (m !== null) {
                        m.return = y, x = m;
                        break;
                      }
                      x = y;
                    }
                  }
                }
                var g = o.alternate;
                if (g !== null) {
                  var w = g.child;
                  if (w !== null) {
                    g.child = null;
                    do {
                      var C = w.sibling;
                      w.sibling = null, w = C;
                    } while (w !== null);
                  }
                }
                x = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null) u.return = o, x = u;
            else e: for (; x !== null; ) {
              if (o = x, o.flags & 2048) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Un(9, o, o.return);
              }
              var f = o.sibling;
              if (f !== null) {
                f.return = o.return, x = f;
                break e;
              }
              x = o.return;
            }
          }
          var c = e.current;
          for (x = c; x !== null; ) {
            u = x;
            var p = u.child;
            if (u.subtreeFlags & 2064 && p !== null) p.return = u, x = p;
            else e: for (u = c; x !== null; ) {
              if (i = x, i.flags & 2048) try {
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pl(9, i);
                }
              } catch (E) {
                V(i, i.return, E);
              }
              if (i === u) {
                x = null;
                break e;
              }
              var S = i.sibling;
              if (S !== null) {
                S.return = i.return, x = S;
                break e;
              }
              x = i.return;
            }
          }
          if (D = l, St(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
            Be.onPostCommitFiberRoot(yl, e);
          } catch {
          }
          r = true;
        }
        return r;
      } finally {
        M = n, Pe.transition = t;
      }
    }
    return false;
  }
  function ha(e, t, n) {
    t = sn(n, t), t = uc(e, t, 1), e = dt(e, t, 1), t = ie(), e !== null && (ur(e, 1, t), he(e, t));
  }
  function V(e, t, n) {
    if (e.tag === 3) ha(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r))) {
          e = sn(n, e), e = ic(t, e, 1), t = dt(t, e, 1), e = ie(), t !== null && (ur(t, 1, e), he(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function pp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > K() - Ku ? Lt(e, 0) : Qu |= n), he(e, t);
  }
  function _c(e, t) {
    t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
    var n = ie();
    e = Ze(e, t), e !== null && (ur(e, t, n), he(e, n));
  }
  function hp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), _c(e, n);
  }
  function mp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    r !== null && r.delete(t), _c(e, n);
  }
  var Nc;
  Nc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = true;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return fe = false, np(e, t, n);
      fe = !!(e.flags & 131072);
    }
    else fe = false, $ && t.flags & 1048576 && Os(t, ll, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Ar(e, t), e = t.pendingProps;
        var l = ln(t, oe.current);
        tn(t, n), l = $u(null, t, r, e, l, n);
        var o = Au();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (o = true, nl(t)) : o = false, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mu(t), l.updater = xl, t.stateNode = l, l._reactInternals = t, Vo(t, r, e, n), t = Yo(null, t, r, true, o, n)) : (t.tag = 0, $ && o && _u(t), ue(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Ar(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = yp(r), e = Oe(r, e), l) {
            case 0:
              t = Ko(null, t, r, e, n);
              break e;
            case 1:
              t = la(null, t, r, e, n);
              break e;
            case 11:
              t = na(null, t, r, e, n);
              break e;
            case 14:
              t = ra(null, t, r, Oe(r.type, e), n);
              break e;
          }
          throw Error(k(306, r, ""));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ko(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), la(e, t, r, l, n);
      case 3:
        e: {
          if (fc(t), e === null) throw Error(k(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, Us(e, t), il(t, r, null, n);
          var u = t.memoizedState;
          if (r = u.element, o.isDehydrated) if (o = {
            element: r,
            isDehydrated: false,
            cache: u.cache,
            pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
            transitions: u.transitions
          }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = sn(Error(k(423)), t), t = oa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = sn(Error(k(424)), t), t = oa(e, t, r, n, l);
            break e;
          } else for (ve = ft(t.stateNode.containerInfo.firstChild), ye = t, $ = true, Me = null, n = Is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (on(), r === l) {
              t = qe(e, t, n);
              break e;
            }
            ue(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return $s(t), e === null && Bo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, Io(r, l) ? u = null : o !== null && Io(r, o) && (t.flags |= 32), cc(e, t), ue(e, t, u, n), t.child;
      case 6:
        return e === null && Bo(t), null;
      case 13:
        return dc(e, t, n);
      case 4:
        return Fu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = un(t, null, r, n) : ue(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), na(e, t, r, l, n);
      case 7:
        return ue(e, t, t.pendingProps, n), t.child;
      case 8:
        return ue(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return ue(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, u = l.value, I(ol, r._currentValue), r._currentValue = u, o !== null) if (je(o.value, u)) {
            if (o.children === l.children && !de.current) {
              t = qe(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var i = o.dependencies;
            if (i !== null) {
              u = o.child;
              for (var a = i.firstContext; a !== null; ) {
                if (a.context === r) {
                  if (o.tag === 1) {
                    a = Ye(-1, n & -n), a.tag = 2;
                    var s = o.updateQueue;
                    if (s !== null) {
                      s = s.shared;
                      var h = s.pending;
                      h === null ? a.next = a : (a.next = h.next, h.next = a), s.pending = a;
                    }
                  }
                  o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), Ho(o.return, n, t), i.lanes |= n;
                  break;
                }
                a = a.next;
              }
            } else if (o.tag === 10) u = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (u = o.return, u === null) throw Error(k(341));
              u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Ho(u, n, t), u = o.sibling;
            } else u = o.child;
            if (u !== null) u.return = o;
            else for (u = o; u !== null; ) {
              if (u === t) {
                u = null;
                break;
              }
              if (o = u.sibling, o !== null) {
                o.return = u.return, u = o;
                break;
              }
              u = u.return;
            }
            o = u;
          }
          ue(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, tn(t, n), l = Re(l), r = r(l), t.flags |= 1, ue(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = Oe(r, t.pendingProps), l = Oe(r.type, l), ra(e, t, r, l, n);
      case 15:
        return ac(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Oe(r, l), Ar(e, t), t.tag = 1, pe(r) ? (e = true, nl(t)) : e = false, tn(t, n), oc(t, r, l), Vo(t, r, l, n), Yo(null, t, r, true, e, n);
      case 19:
        return pc(e, t, n);
      case 22:
        return sc(e, t, n);
    }
    throw Error(k(156, t.tag));
  };
  function Lc(e, t) {
    return ns(e, t);
  }
  function vp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xe(e, t, n, r) {
    return new vp(e, t, n, r);
  }
  function Ju(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function yp(e) {
    if (typeof e == "function") return Ju(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === mu) return 11;
      if (e === vu) return 14;
    }
    return 2;
  }
  function mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = xe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Wr(e, t, n, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function") Ju(e) && (u = 1);
    else if (typeof e == "string") u = 5;
    else e: switch (e) {
      case At:
        return Tt(n.children, l, o, t);
      case hu:
        u = 8, l |= 8;
        break;
      case ho:
        return e = xe(12, n, t, l | 2), e.elementType = ho, e.lanes = o, e;
      case mo:
        return e = xe(13, n, t, l), e.elementType = mo, e.lanes = o, e;
      case vo:
        return e = xe(19, n, t, l), e.elementType = vo, e.lanes = o, e;
      case $a:
        return _l(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ja:
            u = 10;
            break e;
          case Ua:
            u = 9;
            break e;
          case mu:
            u = 11;
            break e;
          case vu:
            u = 14;
            break e;
          case nt:
            u = 16, r = null;
            break e;
        }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
    return t = xe(u, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function Tt(e, t, n, r) {
    return e = xe(7, e, r, t), e.lanes = n, e;
  }
  function _l(e, t, n, r) {
    return e = xe(22, e, r, t), e.elementType = $a, e.lanes = n, e.stateNode = {
      isHidden: false
    }, e;
  }
  function io(e, t, n) {
    return e = xe(6, e, null, t), e.lanes = n, e;
  }
  function ao(e, t, n) {
    return t = xe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  function gp(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Zu(e, t, n, r, l, o, u, i, a) {
    return e = new gp(e, t, n, i, a), t === 1 ? (t = 1, o === true && (t |= 8)) : t = 0, o = xe(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    }, Mu(o), e;
  }
  function wp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: $t,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  function Tc(e) {
    if (!e) return yt;
    e = e._reactInternals;
    e: {
      if (jt(e) !== e || e.tag !== 1) throw Error(k(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (pe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(k(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (pe(n)) return Ts(e, n, t);
    }
    return t;
  }
  function zc(e, t, n, r, l, o, u, i, a) {
    return e = Zu(n, r, true, e, l, o, u, i, a), e.context = Tc(null), n = e.current, r = ie(), l = ht(n), o = Ye(r, l), o.callback = t ?? null, dt(n, o, l), e.current.lanes = l, ur(e, l, r), he(e, r), e;
  }
  function Nl(e, t, n, r) {
    var l = t.current, o = ie(), u = ht(l);
    return n = Tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ye(o, u), t.payload = {
      element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, u), e !== null && (Ie(e, l, u, o), jr(e, l, u)), u;
  }
  function ml(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ma(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function qu(e, t) {
    ma(e, t), (e = e.alternate) && ma(e, t);
  }
  function Sp() {
    return null;
  }
  var Oc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function bu(e) {
    this._internalRoot = e;
  }
  Ll.prototype.render = bu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Nl(e, t, null, null);
  };
  Ll.prototype.unmount = bu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ft(function() {
        Nl(null, e, null, null);
      }), t[Je] = null;
    }
  };
  function Ll(e) {
    this._internalRoot = e;
  }
  Ll.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ss();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++) ;
      lt.splice(n, 0, e), n === 0 && fs(e);
    }
  };
  function ei(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Tl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function va() {
  }
  function kp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var s = ml(u);
          o.call(s);
        };
      }
      var u = zc(t, r, e, 0, null, false, false, "", va);
      return e._reactRootContainer = u, e[Je] = u.current, Gn(e.nodeType === 8 ? e.parentNode : e), Ft(), u;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var s = ml(a);
        i.call(s);
      };
    }
    var a = Zu(e, 0, false, null, null, false, false, "", va);
    return e._reactRootContainer = a, e[Je] = a.current, Gn(e.nodeType === 8 ? e.parentNode : e), Ft(function() {
      Nl(t, a, n, r);
    }), a;
  }
  function zl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var a = ml(u);
          i.call(a);
        };
      }
      Nl(t, u, e, l);
    } else u = kp(n, t, e, l, r);
    return ml(u);
  }
  is = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Tn(t.pendingLanes);
          n !== 0 && (wu(t, n | 1), he(t, K()), !(D & 6) && (cn = K() + 500, St()));
        }
        break;
      case 13:
        Ft(function() {
          var r = Ze(e, 1);
          if (r !== null) {
            var l = ie();
            Ie(r, e, 1, l);
          }
        }), qu(e, 1);
    }
  };
  Su = function(e) {
    if (e.tag === 13) {
      var t = Ze(e, 134217728);
      if (t !== null) {
        var n = ie();
        Ie(t, e, 134217728, n);
      }
      qu(e, 134217728);
    }
  };
  as = function(e) {
    if (e.tag === 13) {
      var t = ht(e), n = Ze(e, t);
      if (n !== null) {
        var r = ie();
        Ie(n, e, t, r);
      }
      qu(e, t);
    }
  };
  ss = function() {
    return M;
  };
  cs = function(e, t) {
    var n = M;
    try {
      return M = e, t();
    } finally {
      M = n;
    }
  };
  Ro = function(e, t, n) {
    switch (t) {
      case "input":
        if (wo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = kl(r);
              if (!l) throw Error(k(90));
              Ba(r), wo(r, l);
            }
          }
        }
        break;
      case "textarea":
        Wa(e, n);
        break;
      case "select":
        t = n.value, t != null && Zt(e, !!n.multiple, t, false);
    }
  };
  Ja = Yu;
  Za = Ft;
  var Ep = {
    usingClientEntryPoint: false,
    Events: [
      ar,
      Vt,
      kl,
      Xa,
      Ga,
      Yu
    ]
  }, Rn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
  }, Cp = {
    bundleType: Rn.bundleType,
    version: Rn.version,
    rendererPackageName: Rn.rendererPackageName,
    rendererConfig: Rn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = es(e), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rn.findFiberByHostInstance || Sp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Tr.isDisabled && Tr.supportsFiber) try {
      yl = Tr.inject(Cp), Be = Tr;
    } catch {
    }
  }
  we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ep;
  we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ei(t)) throw Error(k(200));
    return wp(e, t, null, n);
  };
  we.createRoot = function(e, t) {
    if (!ei(e)) throw Error(k(299));
    var n = false, r = "", l = Oc;
    return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zu(e, 1, false, null, null, n, false, r, l), e[Je] = t.current, Gn(e.nodeType === 8 ? e.parentNode : e), new bu(t);
  };
  we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
    return e = es(t), e = e === null ? null : e.stateNode, e;
  };
  we.flushSync = function(e) {
    return Ft(e);
  };
  we.hydrate = function(e, t, n) {
    if (!Tl(t)) throw Error(k(200));
    return zl(null, e, t, true, n);
  };
  we.hydrateRoot = function(e, t, n) {
    if (!ei(e)) throw Error(k(405));
    var r = n != null && n.hydratedSources || null, l = false, o = "", u = Oc;
    if (n != null && (n.unstable_strictMode === true && (l = true), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)), t = zc(t, null, e, 1, n ?? null, l, false, o, u), e[Je] = t.current, Gn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [
      n,
      l
    ] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Ll(t);
  };
  we.render = function(e, t, n) {
    if (!Tl(t)) throw Error(k(200));
    return zl(null, e, t, false, n);
  };
  we.unmountComponentAtNode = function(e) {
    if (!Tl(e)) throw Error(k(40));
    return e._reactRootContainer ? (Ft(function() {
      zl(null, null, e, false, function() {
        e._reactRootContainer = null, e[Je] = null;
      });
    }), true) : false;
  };
  we.unstable_batchedUpdates = Yu;
  we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Tl(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return zl(e, t, n, false, r);
  };
  we.version = "18.3.1-next-f1338f8080-20240426";
  function Dc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc);
    } catch (e) {
      console.error(e);
    }
  }
  Dc(), Da.exports = we;
  xp = Da.exports;
  lm = Ca(xp);
  var ya = "popstate";
  function Pp(e = {}) {
    function t(r, l) {
      let { pathname: o, search: u, hash: i } = r.location;
      return ou("", {
        pathname: o,
        search: u,
        hash: i
      }, l.state && l.state.usr || null, l.state && l.state.key || "default");
    }
    function n(r, l) {
      return typeof l == "string" ? l : lr(l);
    }
    return _p(t, n, null, e);
  }
  function A(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function Ne(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {
      }
    }
  }
  function Rp() {
    return Math.random().toString(36).substring(2, 10);
  }
  function ga(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t
    };
  }
  function ou(e, t, n = null, r) {
    return {
      pathname: typeof e == "string" ? e : e.pathname,
      search: "",
      hash: "",
      ...typeof t == "string" ? hn(t) : t,
      state: n,
      key: t && t.key || r || Rp()
    };
  }
  function lr({ pathname: e = "/", search: t = "", hash: n = "" }) {
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
  }
  function hn(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
      let r = e.indexOf("?");
      r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
    }
    return t;
  }
  function _p(e, t, n, r = {}) {
    let { window: l = document.defaultView, v5Compat: o = false } = r, u = l.history, i = "POP", a = null, s = h();
    s == null && (s = 0, u.replaceState({
      ...u.state,
      idx: s
    }, ""));
    function h() {
      return (u.state || {
        idx: null
      }).idx;
    }
    function d() {
      i = "POP";
      let C = h(), f = C == null ? null : C - s;
      s = C, a && a({
        action: i,
        location: w.location,
        delta: f
      });
    }
    function m(C, f) {
      i = "PUSH";
      let c = ou(w.location, C, f);
      s = h() + 1;
      let p = ga(c, s), S = w.createHref(c);
      try {
        u.pushState(p, "", S);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        l.location.assign(S);
      }
      o && a && a({
        action: i,
        location: w.location,
        delta: 1
      });
    }
    function y(C, f) {
      i = "REPLACE";
      let c = ou(w.location, C, f);
      s = h();
      let p = ga(c, s), S = w.createHref(c);
      u.replaceState(p, "", S), o && a && a({
        action: i,
        location: w.location,
        delta: 0
      });
    }
    function g(C) {
      return Np(C);
    }
    let w = {
      get action() {
        return i;
      },
      get location() {
        return e(l, u);
      },
      listen(C) {
        if (a) throw new Error("A history only accepts one active listener");
        return l.addEventListener(ya, d), a = C, () => {
          l.removeEventListener(ya, d), a = null;
        };
      },
      createHref(C) {
        return t(l, C);
      },
      createURL: g,
      encodeLocation(C) {
        let f = g(C);
        return {
          pathname: f.pathname,
          search: f.search,
          hash: f.hash
        };
      },
      push: m,
      replace: y,
      go(C) {
        return u.go(C);
      }
    };
    return w;
  }
  function Np(e, t = false) {
    let n = "http://localhost";
    typeof window < "u" && (n = window.location.origin !== "null" ? window.location.origin : window.location.href), A(n, "No window.location.(origin|href) available to create URL");
    let r = typeof e == "string" ? e : lr(e);
    return r = r.replace(/ $/, "%20"), !t && r.startsWith("//") && (r = n + r), new URL(r, n);
  }
  function Mc(e, t, n = "/") {
    return Lp(e, t, n, false);
  }
  function Lp(e, t, n, r) {
    let l = typeof t == "string" ? hn(t) : t, o = be(l.pathname || "/", n);
    if (o == null) return null;
    let u = Fc(e);
    Tp(u);
    let i = null;
    for (let a = 0; i == null && a < u.length; ++a) {
      let s = Bp(o);
      i = $p(u[a], s, r);
    }
    return i;
  }
  function Fc(e, t = [], n = [], r = "", l = false) {
    let o = (u, i, a = l, s) => {
      let h = {
        relativePath: s === void 0 ? u.path || "" : s,
        caseSensitive: u.caseSensitive === true,
        childrenIndex: i,
        route: u
      };
      if (h.relativePath.startsWith("/")) {
        if (!h.relativePath.startsWith(r) && a) return;
        A(h.relativePath.startsWith(r), `Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), h.relativePath = h.relativePath.slice(r.length);
      }
      let d = Xe([
        r,
        h.relativePath
      ]), m = n.concat(h);
      u.children && u.children.length > 0 && (A(u.index !== true, `Index routes must not have child routes. Please remove all child routes from route path "${d}".`), Fc(u.children, t, m, d, a)), !(u.path == null && !u.index) && t.push({
        path: d,
        score: jp(d, u.index),
        routesMeta: m
      });
    };
    return e.forEach((u, i) => {
      var _a2;
      if (u.path === "" || !((_a2 = u.path) == null ? void 0 : _a2.includes("?"))) o(u, i);
      else for (let a of Ic(u.path)) o(u, i, true, a);
    }), t;
  }
  function Ic(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, l = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return l ? [
      o,
      ""
    ] : [
      o
    ];
    let u = Ic(r.join("/")), i = [];
    return i.push(...u.map((a) => a === "" ? o : [
      o,
      a
    ].join("/"))), l && i.push(...u), i.map((a) => e.startsWith("/") && a === "" ? "/" : a);
  }
  function Tp(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : Up(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
  }
  var zp = /^:[\w-]+$/, Op = 3, Dp = 2, Mp = 1, Fp = 10, Ip = -2, wa = (e) => e === "*";
  function jp(e, t) {
    let n = e.split("/"), r = n.length;
    return n.some(wa) && (r += Ip), t && (r += Dp), n.filter((l) => !wa(l)).reduce((l, o) => l + (zp.test(o) ? Op : o === "" ? Mp : Fp), r);
  }
  function Up(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
  }
  function $p(e, t, n = false) {
    let { routesMeta: r } = e, l = {}, o = "/", u = [];
    for (let i = 0; i < r.length; ++i) {
      let a = r[i], s = i === r.length - 1, h = o === "/" ? t : t.slice(o.length) || "/", d = vl({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: s
      }, h), m = a.route;
      if (!d && s && n && !r[r.length - 1].route.index && (d = vl({
        path: a.relativePath,
        caseSensitive: a.caseSensitive,
        end: false
      }, h)), !d) return null;
      Object.assign(l, d.params), u.push({
        params: l,
        pathname: Xe([
          o,
          d.pathname
        ]),
        pathnameBase: Qp(Xe([
          o,
          d.pathnameBase
        ])),
        route: m
      }), d.pathnameBase !== "/" && (o = Xe([
        o,
        d.pathnameBase
      ]));
    }
    return u;
  }
  function vl(e, t) {
    typeof e == "string" && (e = {
      path: e,
      caseSensitive: false,
      end: true
    });
    let [n, r] = Ap(e.path, e.caseSensitive, e.end), l = t.match(n);
    if (!l) return null;
    let o = l[0], u = o.replace(/(.)\/+$/, "$1"), i = l.slice(1);
    return {
      params: r.reduce((s, { paramName: h, isOptional: d }, m) => {
        if (h === "*") {
          let g = i[m] || "";
          u = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
        }
        const y = i[m];
        return d && !y ? s[h] = void 0 : s[h] = (y || "").replace(/%2F/g, "/"), s;
      }, {}),
      pathname: o,
      pathnameBase: u,
      pattern: e
    };
  }
  function Ap(e, t = false, n = true) {
    Ne(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
    let r = [], l = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (u, i, a) => (r.push({
      paramName: i,
      isOptional: a != null
    }), a ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return e.endsWith("*") ? (r.push({
      paramName: "*"
    }), l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? l += "\\/*$" : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [
      new RegExp(l, t ? void 0 : "i"),
      r
    ];
  }
  function Bp(e) {
    try {
      return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
    } catch (t) {
      return Ne(false, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
    }
  }
  function be(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
  }
  var jc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Hp = (e) => jc.test(e);
  function Wp(e, t = "/") {
    let { pathname: n, search: r = "", hash: l = "" } = typeof e == "string" ? hn(e) : e, o;
    if (n) if (Hp(n)) o = n;
    else {
      if (n.includes("//")) {
        let u = n;
        n = n.replace(/\/\/+/g, "/"), Ne(false, `Pathnames cannot have embedded double slashes - normalizing ${u} -> ${n}`);
      }
      n.startsWith("/") ? o = Sa(n.substring(1), "/") : o = Sa(n, t);
    }
    else o = t;
    return {
      pathname: o,
      search: Kp(r),
      hash: Yp(l)
    };
  }
  function Sa(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }), n.length > 1 ? n.join("/") : "/";
  }
  function so(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function Vp(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
  }
  function ti(e) {
    let t = Vp(e);
    return t.map((n, r) => r === t.length - 1 ? n.pathname : n.pathnameBase);
  }
  function ni(e, t, n, r = false) {
    let l;
    typeof e == "string" ? l = hn(e) : (l = {
      ...e
    }, A(!l.pathname || !l.pathname.includes("?"), so("?", "pathname", "search", l)), A(!l.pathname || !l.pathname.includes("#"), so("#", "pathname", "hash", l)), A(!l.search || !l.search.includes("#"), so("#", "search", "hash", l)));
    let o = e === "" || l.pathname === "", u = o ? "/" : l.pathname, i;
    if (u == null) i = n;
    else {
      let d = t.length - 1;
      if (!r && u.startsWith("..")) {
        let m = u.split("/");
        for (; m[0] === ".."; ) m.shift(), d -= 1;
        l.pathname = m.join("/");
      }
      i = d >= 0 ? t[d] : "/";
    }
    let a = Wp(l, i), s = u && u !== "/" && u.endsWith("/"), h = (o || u === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (s || h) && (a.pathname += "/"), a;
  }
  var Xe = (e) => e.join("/").replace(/\/\/+/g, "/"), Qp = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Kp = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Yp = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Xp = class {
    constructor(e, t, n, r = false) {
      this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
    }
  };
  function Gp(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
  }
  function Jp(e) {
    return e.map((t) => t.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
  }
  var Uc = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  function $c(e, t) {
    let n = e;
    if (typeof n != "string" || !jc.test(n)) return {
      absoluteURL: void 0,
      isExternal: false,
      to: n
    };
    let r = n, l = false;
    if (Uc) try {
      let o = new URL(window.location.href), u = n.startsWith("//") ? new URL(o.protocol + n) : new URL(n), i = be(u.pathname, t);
      u.origin === o.origin && i != null ? n = i + u.search + u.hash : l = true;
    } catch {
      Ne(false, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
    }
    return {
      absoluteURL: r,
      isExternal: l,
      to: n
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  var Ac = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ];
  new Set(Ac);
  var Zp = [
    "GET",
    ...Ac
  ];
  new Set(Zp);
  var mn = v.createContext(null);
  mn.displayName = "DataRouter";
  var Ol = v.createContext(null);
  Ol.displayName = "DataRouterState";
  var qp = v.createContext(false), Bc = v.createContext({
    isTransitioning: false
  });
  Bc.displayName = "ViewTransition";
  var bp = v.createContext(/* @__PURE__ */ new Map());
  bp.displayName = "Fetchers";
  var eh = v.createContext(null);
  eh.displayName = "Await";
  var ke = v.createContext(null);
  ke.displayName = "Navigation";
  var cr = v.createContext(null);
  cr.displayName = "Location";
  var Le = v.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
  });
  Le.displayName = "Route";
  var ri = v.createContext(null);
  ri.displayName = "RouteError";
  var Hc = "REACT_ROUTER_ERROR", th = "REDIRECT", nh = "ROUTE_ERROR_RESPONSE";
  function rh(e) {
    if (e.startsWith(`${Hc}:${th}:{`)) try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
    } catch {
    }
  }
  function lh(e) {
    if (e.startsWith(`${Hc}:${nh}:{`)) try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new Xp(t.status, t.statusText, t.data);
    } catch {
    }
  }
  function oh(e, { relative: t } = {}) {
    A(vn(), "useHref() may be used only in the context of a <Router> component.");
    let { basename: n, navigator: r } = v.useContext(ke), { hash: l, pathname: o, search: u } = fr(e, {
      relative: t
    }), i = o;
    return n !== "/" && (i = o === "/" ? n : Xe([
      n,
      o
    ])), r.createHref({
      pathname: i,
      search: u,
      hash: l
    });
  }
  function vn() {
    return v.useContext(cr) != null;
  }
  kt = function() {
    return A(vn(), "useLocation() may be used only in the context of a <Router> component."), v.useContext(cr).location;
  };
  var Wc = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function Vc(e) {
    v.useContext(ke).static || v.useLayoutEffect(e);
  }
  Qc = function() {
    let { isDataRoute: e } = v.useContext(Le);
    return e ? wh() : uh();
  };
  function uh() {
    A(vn(), "useNavigate() may be used only in the context of a <Router> component.");
    let e = v.useContext(mn), { basename: t, navigator: n } = v.useContext(ke), { matches: r } = v.useContext(Le), { pathname: l } = kt(), o = JSON.stringify(ti(r)), u = v.useRef(false);
    return Vc(() => {
      u.current = true;
    }), v.useCallback((a, s = {}) => {
      if (Ne(u.current, Wc), !u.current) return;
      if (typeof a == "number") {
        n.go(a);
        return;
      }
      let h = ni(a, JSON.parse(o), l, s.relative === "path");
      e == null && t !== "/" && (h.pathname = h.pathname === "/" ? t : Xe([
        t,
        h.pathname
      ])), (s.replace ? n.replace : n.push)(h, s.state, s);
    }, [
      t,
      n,
      o,
      l,
      e
    ]);
  }
  var Kc = v.createContext(null);
  om = function() {
    return v.useContext(Kc);
  };
  function ih(e) {
    let t = v.useContext(Le).outlet;
    return v.useMemo(() => t && v.createElement(Kc.Provider, {
      value: e
    }, t), [
      t,
      e
    ]);
  }
  um = function() {
    let { matches: e } = v.useContext(Le), t = e[e.length - 1];
    return t ? t.params : {};
  };
  function fr(e, { relative: t } = {}) {
    let { matches: n } = v.useContext(Le), { pathname: r } = kt(), l = JSON.stringify(ti(n));
    return v.useMemo(() => ni(e, JSON.parse(l), r, t === "path"), [
      e,
      l,
      r,
      t
    ]);
  }
  function ah(e, t) {
    return Yc(e, t);
  }
  function Yc(e, t, n, r, l) {
    var _a2;
    A(vn(), "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: o } = v.useContext(ke), { matches: u } = v.useContext(Le), i = u[u.length - 1], a = i ? i.params : {}, s = i ? i.pathname : "/", h = i ? i.pathnameBase : "/", d = i && i.route;
    {
      let c = d && d.path || "";
      Gc(s, !d || c.endsWith("*") || c.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${c}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${c}"> to <Route path="${c === "/" ? "*" : `${c}/*`}">.`);
    }
    let m = kt(), y;
    if (t) {
      let c = typeof t == "string" ? hn(t) : t;
      A(h === "/" || ((_a2 = c.pathname) == null ? void 0 : _a2.startsWith(h)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${c.pathname}" was given in the \`location\` prop.`), y = c;
    } else y = m;
    let g = y.pathname || "/", w = g;
    if (h !== "/") {
      let c = h.replace(/^\//, "").split("/");
      w = "/" + g.replace(/^\//, "").split("/").slice(c.length).join("/");
    }
    let C = Mc(e, {
      pathname: w
    });
    Ne(d || C != null, `No routes matched location "${y.pathname}${y.search}${y.hash}" `), Ne(C == null || C[C.length - 1].route.element !== void 0 || C[C.length - 1].route.Component !== void 0 || C[C.length - 1].route.lazy !== void 0, `Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let f = ph(C && C.map((c) => Object.assign({}, c, {
      params: Object.assign({}, a, c.params),
      pathname: Xe([
        h,
        o.encodeLocation ? o.encodeLocation(c.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : c.pathname
      ]),
      pathnameBase: c.pathnameBase === "/" ? h : Xe([
        h,
        o.encodeLocation ? o.encodeLocation(c.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : c.pathnameBase
      ])
    })), u, n, r, l);
    return t && f ? v.createElement(cr.Provider, {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...y
        },
        navigationType: "POP"
      }
    }, f) : f;
  }
  function sh() {
    let e = gh(), t = Gp(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", l = {
      padding: "0.5rem",
      backgroundColor: r
    }, o = {
      padding: "2px 4px",
      backgroundColor: r
    }, u = null;
    return console.error("Error handled by React Router default ErrorBoundary:", e), u = v.createElement(v.Fragment, null, v.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), v.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", v.createElement("code", {
      style: o
    }, "ErrorBoundary"), " or", " ", v.createElement("code", {
      style: o
    }, "errorElement"), " prop on your route.")), v.createElement(v.Fragment, null, v.createElement("h2", null, "Unexpected Application Error!"), v.createElement("h3", {
      style: {
        fontStyle: "italic"
      }
    }, t), n ? v.createElement("pre", {
      style: l
    }, n) : null, u);
  }
  var ch = v.createElement(sh, null), Xc = class extends v.Component {
    constructor(e) {
      super(e), this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error
      };
    }
    static getDerivedStateFromError(e) {
      return {
        error: e
      };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
        error: e.error,
        location: e.location,
        revalidation: e.revalidation
      } : {
        error: e.error !== void 0 ? e.error : t.error,
        location: t.location,
        revalidation: e.revalidation || t.revalidation
      };
    }
    componentDidCatch(e, t) {
      this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
    }
    render() {
      let e = this.state.error;
      if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
        const n = lh(e.digest);
        n && (e = n);
      }
      let t = e !== void 0 ? v.createElement(Le.Provider, {
        value: this.props.routeContext
      }, v.createElement(ri.Provider, {
        value: e,
        children: this.props.component
      })) : this.props.children;
      return this.context ? v.createElement(fh, {
        error: e
      }, t) : t;
    }
  };
  Xc.contextType = qp;
  var co = /* @__PURE__ */ new WeakMap();
  function fh({ children: e, error: t }) {
    let { basename: n } = v.useContext(ke);
    if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
      let r = rh(t.digest);
      if (r) {
        let l = co.get(t);
        if (l) throw l;
        let o = $c(r.location, n);
        if (Uc && !co.get(t)) if (o.isExternal || r.reloadDocument) window.location.href = o.absoluteURL || o.to;
        else {
          const u = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(o.to, {
            replace: r.replace
          }));
          throw co.set(t, u), u;
        }
        return v.createElement("meta", {
          httpEquiv: "refresh",
          content: `0;url=${o.absoluteURL || o.to}`
        });
      }
    }
    return e;
  }
  function dh({ routeContext: e, match: t, children: n }) {
    let r = v.useContext(mn);
    return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), v.createElement(Le.Provider, {
      value: e
    }, n);
  }
  function ph(e, t = [], n = null, r = null, l = null) {
    if (e == null) {
      if (!n) return null;
      if (n.errors) e = n.matches;
      else if (t.length === 0 && !n.initialized && n.matches.length > 0) e = n.matches;
      else return null;
    }
    let o = e, u = n == null ? void 0 : n.errors;
    if (u != null) {
      let h = o.findIndex((d) => d.route.id && (u == null ? void 0 : u[d.route.id]) !== void 0);
      A(h >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`), o = o.slice(0, Math.min(o.length, h + 1));
    }
    let i = false, a = -1;
    if (n) for (let h = 0; h < o.length; h++) {
      let d = o[h];
      if ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (a = h), d.route.id) {
        let { loaderData: m, errors: y } = n, g = d.route.loader && !m.hasOwnProperty(d.route.id) && (!y || y[d.route.id] === void 0);
        if (d.route.lazy || g) {
          i = true, a >= 0 ? o = o.slice(0, a + 1) : o = [
            o[0]
          ];
          break;
        }
      }
    }
    let s = n && r ? (h, d) => {
      var _a2, _b;
      r(h, {
        location: n.location,
        params: ((_b = (_a2 = n.matches) == null ? void 0 : _a2[0]) == null ? void 0 : _b.params) ?? {},
        unstable_pattern: Jp(n.matches),
        errorInfo: d
      });
    } : void 0;
    return o.reduceRight((h, d, m) => {
      let y, g = false, w = null, C = null;
      n && (y = u && d.route.id ? u[d.route.id] : void 0, w = d.route.errorElement || ch, i && (a < 0 && m === 0 ? (Gc("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration"), g = true, C = null) : a === m && (g = true, C = d.route.hydrateFallbackElement || null)));
      let f = t.concat(o.slice(0, m + 1)), c = () => {
        let p;
        return y ? p = w : g ? p = C : d.route.Component ? p = v.createElement(d.route.Component, null) : d.route.element ? p = d.route.element : p = h, v.createElement(dh, {
          match: d,
          routeContext: {
            outlet: h,
            matches: f,
            isDataRoute: n != null
          },
          children: p
        });
      };
      return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0) ? v.createElement(Xc, {
        location: n.location,
        revalidation: n.revalidation,
        component: w,
        error: y,
        children: c(),
        routeContext: {
          outlet: null,
          matches: f,
          isDataRoute: true
        },
        onError: s
      }) : c();
    }, null);
  }
  function li(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function hh(e) {
    let t = v.useContext(mn);
    return A(t, li(e)), t;
  }
  function mh(e) {
    let t = v.useContext(Ol);
    return A(t, li(e)), t;
  }
  function vh(e) {
    let t = v.useContext(Le);
    return A(t, li(e)), t;
  }
  function oi(e) {
    let t = vh(e), n = t.matches[t.matches.length - 1];
    return A(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
  }
  function yh() {
    return oi("useRouteId");
  }
  function gh() {
    var _a2;
    let e = v.useContext(ri), t = mh("useRouteError"), n = oi("useRouteError");
    return e !== void 0 ? e : (_a2 = t.errors) == null ? void 0 : _a2[n];
  }
  function wh() {
    let { router: e } = hh("useNavigate"), t = oi("useNavigate"), n = v.useRef(false);
    return Vc(() => {
      n.current = true;
    }), v.useCallback(async (l, o = {}) => {
      Ne(n.current, Wc), n.current && (typeof l == "number" ? await e.navigate(l) : await e.navigate(l, {
        fromRouteId: t,
        ...o
      }));
    }, [
      e,
      t
    ]);
  }
  var ka = {};
  function Gc(e, t, n) {
    !t && !ka[e] && (ka[e] = true, Ne(false, n));
  }
  v.memo(Sh);
  function Sh({ routes: e, future: t, state: n, onError: r }) {
    return Yc(e, void 0, n, r, t);
  }
  im = function({ to: e, replace: t, state: n, relative: r }) {
    A(vn(), "<Navigate> may be used only in the context of a <Router> component.");
    let { static: l } = v.useContext(ke);
    Ne(!l, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
    let { matches: o } = v.useContext(Le), { pathname: u } = kt(), i = Qc(), a = ni(e, ti(o), u, r === "path"), s = JSON.stringify(a);
    return v.useEffect(() => {
      i(JSON.parse(s), {
        replace: t,
        state: n,
        relative: r
      });
    }, [
      i,
      s,
      r,
      t,
      n
    ]), null;
  };
  am = function(e) {
    return ih(e.context);
  };
  kh = function(e) {
    A(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
  };
  function Eh({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: l, static: o = false, unstable_useTransitions: u }) {
    A(!vn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let i = e.replace(/^\/*/, "/"), a = v.useMemo(() => ({
      basename: i,
      navigator: l,
      static: o,
      unstable_useTransitions: u,
      future: {}
    }), [
      i,
      l,
      o,
      u
    ]);
    typeof n == "string" && (n = hn(n));
    let { pathname: s = "/", search: h = "", hash: d = "", state: m = null, key: y = "default" } = n, g = v.useMemo(() => {
      let w = be(s, i);
      return w == null ? null : {
        location: {
          pathname: w,
          search: h,
          hash: d,
          state: m,
          key: y
        },
        navigationType: r
      };
    }, [
      i,
      s,
      h,
      d,
      m,
      y,
      r
    ]);
    return Ne(g != null, `<Router basename="${i}"> is not able to match the URL "${s}${h}${d}" because it does not start with the basename, so the <Router> won't render anything.`), g == null ? null : v.createElement(ke.Provider, {
      value: a
    }, v.createElement(cr.Provider, {
      children: t,
      value: g
    }));
  }
  sm = function({ children: e, location: t }) {
    return ah(uu(e), t);
  };
  function uu(e, t = []) {
    let n = [];
    return v.Children.forEach(e, (r, l) => {
      if (!v.isValidElement(r)) return;
      let o = [
        ...t,
        l
      ];
      if (r.type === v.Fragment) {
        n.push.apply(n, uu(r.props.children, o));
        return;
      }
      A(r.type === kh, `[${typeof r.type == "string" ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), A(!r.props.index || !r.props.children, "An index route cannot have child routes.");
      let u = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        middleware: r.props.middleware,
        loader: r.props.loader,
        action: r.props.action,
        hydrateFallbackElement: r.props.hydrateFallbackElement,
        HydrateFallback: r.props.HydrateFallback,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.hasErrorBoundary === true || r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy
      };
      r.props.children && (u.children = uu(r.props.children, o)), n.push(u);
    }), n;
  }
  var Vr = "get", Qr = "application/x-www-form-urlencoded";
  function Dl(e) {
    return typeof HTMLElement < "u" && e instanceof HTMLElement;
  }
  function Ch(e) {
    return Dl(e) && e.tagName.toLowerCase() === "button";
  }
  function xh(e) {
    return Dl(e) && e.tagName.toLowerCase() === "form";
  }
  function Ph(e) {
    return Dl(e) && e.tagName.toLowerCase() === "input";
  }
  function Rh(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function _h(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Rh(e);
  }
  var zr = null;
  function Nh() {
    if (zr === null) try {
      new FormData(document.createElement("form"), 0), zr = false;
    } catch {
      zr = true;
    }
    return zr;
  }
  var Lh = /* @__PURE__ */ new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  ]);
  function fo(e) {
    return e != null && !Lh.has(e) ? (Ne(false, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qr}"`), null) : e;
  }
  function Th(e, t) {
    let n, r, l, o, u;
    if (xh(e)) {
      let i = e.getAttribute("action");
      r = i ? be(i, t) : null, n = e.getAttribute("method") || Vr, l = fo(e.getAttribute("enctype")) || Qr, o = new FormData(e);
    } else if (Ch(e) || Ph(e) && (e.type === "submit" || e.type === "image")) {
      let i = e.form;
      if (i == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
      let a = e.getAttribute("formaction") || i.getAttribute("action");
      if (r = a ? be(a, t) : null, n = e.getAttribute("formmethod") || i.getAttribute("method") || Vr, l = fo(e.getAttribute("formenctype")) || fo(i.getAttribute("enctype")) || Qr, o = new FormData(i, e), !Nh()) {
        let { name: s, type: h, value: d } = e;
        if (h === "image") {
          let m = s ? `${s}.` : "";
          o.append(`${m}x`, "0"), o.append(`${m}y`, "0");
        } else s && o.append(s, d);
      }
    } else {
      if (Dl(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
      n = Vr, r = null, l = Qr, u = e;
    }
    return o && l === "text/plain" && (u = o, o = void 0), {
      action: r,
      method: n.toLowerCase(),
      encType: l,
      formData: o,
      body: u
    };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
  function ui(e, t) {
    if (e === false || e === null || typeof e > "u") throw new Error(t);
  }
  function zh(e, t, n) {
    let r = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
    return r.pathname === "/" ? r.pathname = `_root.${n}` : t && be(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.${n}` : r.pathname = `${r.pathname.replace(/\/$/, "")}.${n}`, r;
  }
  async function Oh(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module).then(async (m) => {
        await m.__tla;
        return m;
      });
      return t[e.id] = n, n;
    } catch (n) {
      return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
      });
    }
  }
  function Dh(e) {
    return e == null ? false : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
  }
  async function Mh(e, t, n) {
    let r = await Promise.all(e.map(async (l) => {
      let o = t.routes[l.route.id];
      if (o) {
        let u = await Oh(o, n);
        return u.links ? u.links() : [];
      }
      return [];
    }));
    return Uh(r.flat(1).filter(Dh).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map((l) => l.rel === "stylesheet" ? {
      ...l,
      rel: "prefetch",
      as: "style"
    } : {
      ...l,
      rel: "prefetch"
    }));
  }
  function Ea(e, t, n, r, l, o) {
    let u = (a, s) => n[s] ? a.route.id !== n[s].route.id : true, i = (a, s) => {
      var _a2;
      return n[s].pathname !== a.pathname || ((_a2 = n[s].route.path) == null ? void 0 : _a2.endsWith("*")) && n[s].params["*"] !== a.params["*"];
    };
    return o === "assets" ? t.filter((a, s) => u(a, s) || i(a, s)) : o === "data" ? t.filter((a, s) => {
      var _a2;
      let h = r.routes[a.route.id];
      if (!h || !h.hasLoader) return false;
      if (u(a, s) || i(a, s)) return true;
      if (a.route.shouldRevalidate) {
        let d = a.route.shouldRevalidate({
          currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
          currentParams: ((_a2 = n[0]) == null ? void 0 : _a2.params) || {},
          nextUrl: new URL(e, window.origin),
          nextParams: a.params,
          defaultShouldRevalidate: true
        });
        if (typeof d == "boolean") return d;
      }
      return true;
    }) : [];
  }
  function Fh(e, t, { includeHydrateFallback: n } = {}) {
    return Ih(e.map((r) => {
      let l = t.routes[r.route.id];
      if (!l) return [];
      let o = [
        l.module
      ];
      return l.clientActionModule && (o = o.concat(l.clientActionModule)), l.clientLoaderModule && (o = o.concat(l.clientLoaderModule)), n && l.hydrateFallbackModule && (o = o.concat(l.hydrateFallbackModule)), l.imports && (o = o.concat(l.imports)), o;
    }).flat(1));
  }
  function Ih(e) {
    return [
      ...new Set(e)
    ];
  }
  function jh(e) {
    let t = {}, n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t;
  }
  function Uh(e, t) {
    let n = /* @__PURE__ */ new Set();
    return new Set(t), e.reduce((r, l) => {
      let o = JSON.stringify(jh(l));
      return n.has(o) || (n.add(o), r.push({
        key: o,
        link: l
      })), r;
    }, []);
  }
  function Jc() {
    let e = v.useContext(mn);
    return ui(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
  }
  function $h() {
    let e = v.useContext(Ol);
    return ui(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
  }
  var ii = v.createContext(void 0);
  ii.displayName = "FrameworkContext";
  function Zc() {
    let e = v.useContext(ii);
    return ui(e, "You must render this element inside a <HydratedRouter> element"), e;
  }
  function Ah(e, t) {
    let n = v.useContext(ii), [r, l] = v.useState(false), [o, u] = v.useState(false), { onFocus: i, onBlur: a, onMouseEnter: s, onMouseLeave: h, onTouchStart: d } = t, m = v.useRef(null);
    v.useEffect(() => {
      if (e === "render" && u(true), e === "viewport") {
        let w = (f) => {
          f.forEach((c) => {
            u(c.isIntersecting);
          });
        }, C = new IntersectionObserver(w, {
          threshold: 0.5
        });
        return m.current && C.observe(m.current), () => {
          C.disconnect();
        };
      }
    }, [
      e
    ]), v.useEffect(() => {
      if (r) {
        let w = setTimeout(() => {
          u(true);
        }, 100);
        return () => {
          clearTimeout(w);
        };
      }
    }, [
      r
    ]);
    let y = () => {
      l(true);
    }, g = () => {
      l(false), u(false);
    };
    return n ? e !== "intent" ? [
      o,
      m,
      {}
    ] : [
      o,
      m,
      {
        onFocus: _n(i, y),
        onBlur: _n(a, g),
        onMouseEnter: _n(s, y),
        onMouseLeave: _n(h, g),
        onTouchStart: _n(d, y)
      }
    ] : [
      false,
      m,
      {}
    ];
  }
  function _n(e, t) {
    return (n) => {
      e && e(n), n.defaultPrevented || t(n);
    };
  }
  function Bh({ page: e, ...t }) {
    let { router: n } = Jc(), r = v.useMemo(() => Mc(n.routes, e, n.basename), [
      n.routes,
      e,
      n.basename
    ]);
    return r ? v.createElement(Wh, {
      page: e,
      matches: r,
      ...t
    }) : null;
  }
  function Hh(e) {
    let { manifest: t, routeModules: n } = Zc(), [r, l] = v.useState([]);
    return v.useEffect(() => {
      let o = false;
      return Mh(e, t, n).then((u) => {
        o || l(u);
      }), () => {
        o = true;
      };
    }, [
      e,
      t,
      n
    ]), r;
  }
  function Wh({ page: e, matches: t, ...n }) {
    let r = kt(), { manifest: l, routeModules: o } = Zc(), { basename: u } = Jc(), { loaderData: i, matches: a } = $h(), s = v.useMemo(() => Ea(e, t, a, l, r, "data"), [
      e,
      t,
      a,
      l,
      r
    ]), h = v.useMemo(() => Ea(e, t, a, l, r, "assets"), [
      e,
      t,
      a,
      l,
      r
    ]), d = v.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let g = /* @__PURE__ */ new Set(), w = false;
      if (t.forEach((f) => {
        var _a2;
        let c = l.routes[f.route.id];
        !c || !c.hasLoader || (!s.some((p) => p.route.id === f.route.id) && f.route.id in i && ((_a2 = o[f.route.id]) == null ? void 0 : _a2.shouldRevalidate) || c.hasClientLoader ? w = true : g.add(f.route.id));
      }), g.size === 0) return [];
      let C = zh(e, u, "data");
      return w && g.size > 0 && C.searchParams.set("_routes", t.filter((f) => g.has(f.route.id)).map((f) => f.route.id).join(",")), [
        C.pathname + C.search
      ];
    }, [
      u,
      i,
      r,
      l,
      s,
      t,
      e,
      o
    ]), m = v.useMemo(() => Fh(h, l), [
      h,
      l
    ]), y = Hh(h);
    return v.createElement(v.Fragment, null, d.map((g) => v.createElement("link", {
      key: g,
      rel: "prefetch",
      as: "fetch",
      href: g,
      ...n
    })), m.map((g) => v.createElement("link", {
      key: g,
      rel: "modulepreload",
      href: g,
      ...n
    })), y.map(({ key: g, link: w }) => v.createElement("link", {
      key: g,
      nonce: n.nonce,
      ...w
    })));
  }
  function Vh(...e) {
    return (t) => {
      e.forEach((n) => {
        typeof n == "function" ? n(t) : n != null && (n.current = t);
      });
    };
  }
  var Qh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
  try {
    Qh && (window.__reactRouterVersion = "7.11.0");
  } catch {
  }
  cm = function({ basename: e, children: t, unstable_useTransitions: n, window: r }) {
    let l = v.useRef();
    l.current == null && (l.current = Pp({
      window: r,
      v5Compat: true
    }));
    let o = l.current, [u, i] = v.useState({
      action: o.action,
      location: o.location
    }), a = v.useCallback((s) => {
      n === false ? i(s) : v.startTransition(() => i(s));
    }, [
      n
    ]);
    return v.useLayoutEffect(() => o.listen(a), [
      o,
      a
    ]), v.createElement(Eh, {
      basename: e,
      children: t,
      location: u.location,
      navigationType: u.action,
      navigator: o,
      unstable_useTransitions: n
    });
  };
  let qc;
  qc = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
  bc = v.forwardRef(function({ onClick: t, discover: n = "render", prefetch: r = "none", relative: l, reloadDocument: o, replace: u, state: i, target: a, to: s, preventScrollReset: h, viewTransition: d, unstable_defaultShouldRevalidate: m, ...y }, g) {
    let { basename: w, unstable_useTransitions: C } = v.useContext(ke), f = typeof s == "string" && qc.test(s), c = $c(s, w);
    s = c.to;
    let p = oh(s, {
      relative: l
    }), [S, E, P] = Ah(r, y), R = Gh(s, {
      replace: u,
      state: i,
      target: a,
      preventScrollReset: h,
      relative: l,
      viewTransition: d,
      unstable_defaultShouldRevalidate: m,
      unstable_useTransitions: C
    });
    function N(L) {
      t && t(L), L.defaultPrevented || R(L);
    }
    let F = v.createElement("a", {
      ...y,
      ...P,
      href: c.absoluteURL || p,
      onClick: c.isExternal || o ? t : N,
      ref: Vh(g, E),
      target: a,
      "data-discover": !f && n === "render" ? "true" : void 0
    });
    return S && !f ? v.createElement(v.Fragment, null, F, v.createElement(Bh, {
      page: p
    })) : F;
  });
  bc.displayName = "Link";
  var Kh = v.forwardRef(function({ "aria-current": t = "page", caseSensitive: n = false, className: r = "", end: l = false, style: o, to: u, viewTransition: i, children: a, ...s }, h) {
    let d = fr(u, {
      relative: s.relative
    }), m = kt(), y = v.useContext(Ol), { navigator: g, basename: w } = v.useContext(ke), C = y != null && em(d) && i === true, f = g.encodeLocation ? g.encodeLocation(d).pathname : d.pathname, c = m.pathname, p = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
    n || (c = c.toLowerCase(), p = p ? p.toLowerCase() : null, f = f.toLowerCase()), p && w && (p = be(p, w) || p);
    const S = f !== "/" && f.endsWith("/") ? f.length - 1 : f.length;
    let E = c === f || !l && c.startsWith(f) && c.charAt(S) === "/", P = p != null && (p === f || !l && p.startsWith(f) && p.charAt(f.length) === "/"), R = {
      isActive: E,
      isPending: P,
      isTransitioning: C
    }, N = E ? t : void 0, F;
    typeof r == "function" ? F = r(R) : F = [
      r,
      E ? "active" : null,
      P ? "pending" : null,
      C ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let L = typeof o == "function" ? o(R) : o;
    return v.createElement(bc, {
      ...s,
      "aria-current": N,
      className: F,
      ref: h,
      style: L,
      to: u,
      viewTransition: i
    }, typeof a == "function" ? a(R) : a);
  });
  Kh.displayName = "NavLink";
  var Yh = v.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: l, state: o, method: u = Vr, action: i, onSubmit: a, relative: s, preventScrollReset: h, viewTransition: d, unstable_defaultShouldRevalidate: m, ...y }, g) => {
    let { unstable_useTransitions: w } = v.useContext(ke), C = qh(), f = bh(i, {
      relative: s
    }), c = u.toLowerCase() === "get" ? "get" : "post", p = typeof i == "string" && qc.test(i), S = (E) => {
      if (a && a(E), E.defaultPrevented) return;
      E.preventDefault();
      let P = E.nativeEvent.submitter, R = (P == null ? void 0 : P.getAttribute("formmethod")) || u, N = () => C(P || E.currentTarget, {
        fetcherKey: t,
        method: R,
        navigate: n,
        replace: l,
        state: o,
        relative: s,
        preventScrollReset: h,
        viewTransition: d,
        unstable_defaultShouldRevalidate: m
      });
      w && n !== false ? v.startTransition(() => N()) : N();
    };
    return v.createElement("form", {
      ref: g,
      method: c,
      action: f,
      onSubmit: r ? a : S,
      ...y,
      "data-discover": !p && e === "render" ? "true" : void 0
    });
  });
  Yh.displayName = "Form";
  function Xh(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function ef(e) {
    let t = v.useContext(mn);
    return A(t, Xh(e)), t;
  }
  function Gh(e, { target: t, replace: n, state: r, preventScrollReset: l, relative: o, viewTransition: u, unstable_defaultShouldRevalidate: i, unstable_useTransitions: a } = {}) {
    let s = Qc(), h = kt(), d = fr(e, {
      relative: o
    });
    return v.useCallback((m) => {
      if (_h(m, t)) {
        m.preventDefault();
        let y = n !== void 0 ? n : lr(h) === lr(d), g = () => s(e, {
          replace: y,
          state: r,
          preventScrollReset: l,
          relative: o,
          viewTransition: u,
          unstable_defaultShouldRevalidate: i
        });
        a ? v.startTransition(() => g()) : g();
      }
    }, [
      h,
      s,
      d,
      n,
      r,
      t,
      e,
      l,
      o,
      u,
      i,
      a
    ]);
  }
  var Jh = 0, Zh = () => `__${String(++Jh)}__`;
  function qh() {
    let { router: e } = ef("useSubmit"), { basename: t } = v.useContext(ke), n = yh(), r = e.fetch, l = e.navigate;
    return v.useCallback(async (o, u = {}) => {
      let { action: i, method: a, encType: s, formData: h, body: d } = Th(o, t);
      if (u.navigate === false) {
        let m = u.fetcherKey || Zh();
        await r(m, n, u.action || i, {
          unstable_defaultShouldRevalidate: u.unstable_defaultShouldRevalidate,
          preventScrollReset: u.preventScrollReset,
          formData: h,
          body: d,
          formMethod: u.method || a,
          formEncType: u.encType || s,
          flushSync: u.flushSync
        });
      } else await l(u.action || i, {
        unstable_defaultShouldRevalidate: u.unstable_defaultShouldRevalidate,
        preventScrollReset: u.preventScrollReset,
        formData: h,
        body: d,
        formMethod: u.method || a,
        formEncType: u.encType || s,
        replace: u.replace,
        state: u.state,
        fromRouteId: n,
        flushSync: u.flushSync,
        viewTransition: u.viewTransition
      });
    }, [
      r,
      l,
      t,
      n
    ]);
  }
  function bh(e, { relative: t } = {}) {
    let { basename: n } = v.useContext(ke), r = v.useContext(Le);
    A(r, "useFormAction must be used inside a RouteContext");
    let [l] = r.matches.slice(-1), o = {
      ...fr(e || ".", {
        relative: t
      })
    }, u = kt();
    if (e == null) {
      o.search = u.search;
      let i = new URLSearchParams(o.search), a = i.getAll("index");
      if (a.some((h) => h === "")) {
        i.delete("index"), a.filter((d) => d).forEach((d) => i.append("index", d));
        let h = i.toString();
        o.search = h ? `?${h}` : "";
      }
    }
    return (!e || e === ".") && l.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : Xe([
      n,
      o.pathname
    ])), lr(o);
  }
  function em(e, { relative: t } = {}) {
    let n = v.useContext(Bc);
    A(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let { basename: r } = ef("useViewTransitionState"), l = fr(e, {
      relative: t
    });
    if (!n.isTransitioning) return false;
    let o = be(n.currentLocation.pathname, r) || n.currentLocation.pathname, u = be(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return vl(l.pathname, u) != null || vl(l.pathname, o) != null;
  }
})();
export {
  cm as B,
  bc as L,
  im as N,
  am as O,
  wf as R,
  __tla,
  xp as a,
  Qc as b,
  sm as c,
  kh as d,
  um as e,
  om as f,
  Ca as g,
  rm as h,
  tm as i,
  lm as j,
  nm as k,
  v as r,
  kt as u
};
