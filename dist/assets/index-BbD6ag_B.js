(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) f(d);
  new MutationObserver((d) => {
    for (const g of d)
      if (g.type === "childList")
        for (const x of g.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && f(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(d) {
    const g = {};
    return (
      d.integrity && (g.integrity = d.integrity),
      d.referrerPolicy && (g.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (g.credentials = "include")
        : d.crossOrigin === "anonymous"
        ? (g.credentials = "omit")
        : (g.credentials = "same-origin"),
      g
    );
  }
  function f(d) {
    if (d.ep) return;
    d.ep = !0;
    const g = s(d);
    fetch(d.href, g);
  }
})();
function Sm(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var gf = { exports: {} },
  ju = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gd;
function bm() {
  if (gd) return ju;
  gd = 1;
  var i = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function s(f, d, g) {
    var x = null;
    if (
      (g !== void 0 && (x = "" + g),
      d.key !== void 0 && (x = "" + d.key),
      "key" in d)
    ) {
      g = {};
      for (var R in d) R !== "key" && (g[R] = d[R]);
    } else g = d;
    return (
      (d = g.ref),
      { $$typeof: i, type: f, key: x, ref: d !== void 0 ? d : null, props: g }
    );
  }
  return (ju.Fragment = o), (ju.jsx = s), (ju.jsxs = s), ju;
}
var pd;
function Em() {
  return pd || ((pd = 1), (gf.exports = bm())), gf.exports;
}
var m = Em(),
  pf = { exports: {} },
  et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function xm() {
  if (Sd) return et;
  Sd = 1;
  var i = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    s = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    g = Symbol.for("react.consumer"),
    x = Symbol.for("react.context"),
    R = Symbol.for("react.forward_ref"),
    y = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    D = Symbol.for("react.lazy"),
    q = Symbol.iterator;
  function C(p) {
    return p === null || typeof p != "object"
      ? null
      : ((p = (q && p[q]) || p["@@iterator"]),
        typeof p == "function" ? p : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    U = Object.assign,
    X = {};
  function L(p, H, W) {
    (this.props = p),
      (this.context = H),
      (this.refs = X),
      (this.updater = W || N);
  }
  (L.prototype.isReactComponent = {}),
    (L.prototype.setState = function (p, H) {
      if (typeof p != "object" && typeof p != "function" && p != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, p, H, "setState");
    }),
    (L.prototype.forceUpdate = function (p) {
      this.updater.enqueueForceUpdate(this, p, "forceUpdate");
    });
  function B() {}
  B.prototype = L.prototype;
  function J(p, H, W) {
    (this.props = p),
      (this.context = H),
      (this.refs = X),
      (this.updater = W || N);
  }
  var Q = (J.prototype = new B());
  (Q.constructor = J), U(Q, L.prototype), (Q.isPureReactComponent = !0);
  var ht = Array.isArray,
    P = { H: null, A: null, T: null, S: null },
    Ot = Object.prototype.hasOwnProperty;
  function Yt(p, H, W, k, w, ft) {
    return (
      (W = ft.ref),
      { $$typeof: i, type: p, key: H, ref: W !== void 0 ? W : null, props: ft }
    );
  }
  function Qt(p, H) {
    return Yt(p.type, H, void 0, void 0, void 0, p.props);
  }
  function G(p) {
    return typeof p == "object" && p !== null && p.$$typeof === i;
  }
  function lt(p) {
    var H = { "=": "=0", ":": "=2" };
    return (
      "$" +
      p.replace(/[=:]/g, function (W) {
        return H[W];
      })
    );
  }
  var Jt = /\/+/g;
  function Ue(p, H) {
    return typeof p == "object" && p !== null && p.key != null
      ? lt("" + p.key)
      : H.toString(36);
  }
  function _e() {}
  function He(p) {
    switch (p.status) {
      case "fulfilled":
        return p.value;
      case "rejected":
        throw p.reason;
      default:
        switch (
          (typeof p.status == "string"
            ? p.then(_e, _e)
            : ((p.status = "pending"),
              p.then(
                function (H) {
                  p.status === "pending" &&
                    ((p.status = "fulfilled"), (p.value = H));
                },
                function (H) {
                  p.status === "pending" &&
                    ((p.status = "rejected"), (p.reason = H));
                }
              )),
          p.status)
        ) {
          case "fulfilled":
            return p.value;
          case "rejected":
            throw p.reason;
        }
    }
    throw p;
  }
  function Ft(p, H, W, k, w) {
    var ft = typeof p;
    (ft === "undefined" || ft === "boolean") && (p = null);
    var at = !1;
    if (p === null) at = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (p.$$typeof) {
            case i:
            case o:
              at = !0;
              break;
            case D:
              return (at = p._init), Ft(at(p._payload), H, W, k, w);
          }
      }
    if (at)
      return (
        (w = w(p)),
        (at = k === "" ? "." + Ue(p, 0) : k),
        ht(w)
          ? ((W = ""),
            at != null && (W = at.replace(Jt, "$&/") + "/"),
            Ft(w, H, W, "", function (Mt) {
              return Mt;
            }))
          : w != null &&
            (G(w) &&
              (w = Qt(
                w,
                W +
                  (w.key == null || (p && p.key === w.key)
                    ? ""
                    : ("" + w.key).replace(Jt, "$&/") + "/") +
                  at
              )),
            H.push(w)),
        1
      );
    at = 0;
    var kt = k === "" ? "." : k + ":";
    if (ht(p))
      for (var dt = 0; dt < p.length; dt++)
        (k = p[dt]), (ft = kt + Ue(k, dt)), (at += Ft(k, H, W, ft, w));
    else if (((dt = C(p)), typeof dt == "function"))
      for (p = dt.call(p), dt = 0; !(k = p.next()).done; )
        (k = k.value), (ft = kt + Ue(k, dt++)), (at += Ft(k, H, W, ft, w));
    else if (ft === "object") {
      if (typeof p.then == "function") return Ft(He(p), H, W, k, w);
      throw (
        ((H = String(p)),
        Error(
          "Objects are not valid as a React child (found: " +
            (H === "[object Object]"
              ? "object with keys {" + Object.keys(p).join(", ") + "}"
              : H) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return at;
  }
  function Y(p, H, W) {
    if (p == null) return p;
    var k = [],
      w = 0;
    return (
      Ft(p, k, "", "", function (ft) {
        return H.call(W, ft, w++);
      }),
      k
    );
  }
  function tt(p) {
    if (p._status === -1) {
      var H = p._result;
      (H = H()),
        H.then(
          function (W) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 1), (p._result = W));
          },
          function (W) {
            (p._status === 0 || p._status === -1) &&
              ((p._status = 2), (p._result = W));
          }
        ),
        p._status === -1 && ((p._status = 0), (p._result = H));
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var F =
    typeof reportError == "function"
      ? reportError
      : function (p) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var H = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof p == "object" &&
                p !== null &&
                typeof p.message == "string"
                  ? String(p.message)
                  : String(p),
              error: p,
            });
            if (!window.dispatchEvent(H)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", p);
            return;
          }
          console.error(p);
        };
  function gt() {}
  return (
    (et.Children = {
      map: Y,
      forEach: function (p, H, W) {
        Y(
          p,
          function () {
            H.apply(this, arguments);
          },
          W
        );
      },
      count: function (p) {
        var H = 0;
        return (
          Y(p, function () {
            H++;
          }),
          H
        );
      },
      toArray: function (p) {
        return (
          Y(p, function (H) {
            return H;
          }) || []
        );
      },
      only: function (p) {
        if (!G(p))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return p;
      },
    }),
    (et.Component = L),
    (et.Fragment = s),
    (et.Profiler = d),
    (et.PureComponent = J),
    (et.StrictMode = f),
    (et.Suspense = y),
    (et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (et.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (et.cache = function (p) {
      return function () {
        return p.apply(null, arguments);
      };
    }),
    (et.cloneElement = function (p, H, W) {
      if (p == null)
        throw Error(
          "The argument must be a React element, but you passed " + p + "."
        );
      var k = U({}, p.props),
        w = p.key,
        ft = void 0;
      if (H != null)
        for (at in (H.ref !== void 0 && (ft = void 0),
        H.key !== void 0 && (w = "" + H.key),
        H))
          !Ot.call(H, at) ||
            at === "key" ||
            at === "__self" ||
            at === "__source" ||
            (at === "ref" && H.ref === void 0) ||
            (k[at] = H[at]);
      var at = arguments.length - 2;
      if (at === 1) k.children = W;
      else if (1 < at) {
        for (var kt = Array(at), dt = 0; dt < at; dt++)
          kt[dt] = arguments[dt + 2];
        k.children = kt;
      }
      return Yt(p.type, w, void 0, void 0, ft, k);
    }),
    (et.createContext = function (p) {
      return (
        (p = {
          $$typeof: x,
          _currentValue: p,
          _currentValue2: p,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (p.Provider = p),
        (p.Consumer = { $$typeof: g, _context: p }),
        p
      );
    }),
    (et.createElement = function (p, H, W) {
      var k,
        w = {},
        ft = null;
      if (H != null)
        for (k in (H.key !== void 0 && (ft = "" + H.key), H))
          Ot.call(H, k) &&
            k !== "key" &&
            k !== "__self" &&
            k !== "__source" &&
            (w[k] = H[k]);
      var at = arguments.length - 2;
      if (at === 1) w.children = W;
      else if (1 < at) {
        for (var kt = Array(at), dt = 0; dt < at; dt++)
          kt[dt] = arguments[dt + 2];
        w.children = kt;
      }
      if (p && p.defaultProps)
        for (k in ((at = p.defaultProps), at))
          w[k] === void 0 && (w[k] = at[k]);
      return Yt(p, ft, void 0, void 0, null, w);
    }),
    (et.createRef = function () {
      return { current: null };
    }),
    (et.forwardRef = function (p) {
      return { $$typeof: R, render: p };
    }),
    (et.isValidElement = G),
    (et.lazy = function (p) {
      return { $$typeof: D, _payload: { _status: -1, _result: p }, _init: tt };
    }),
    (et.memo = function (p, H) {
      return { $$typeof: v, type: p, compare: H === void 0 ? null : H };
    }),
    (et.startTransition = function (p) {
      var H = P.T,
        W = {};
      P.T = W;
      try {
        var k = p(),
          w = P.S;
        w !== null && w(W, k),
          typeof k == "object" &&
            k !== null &&
            typeof k.then == "function" &&
            k.then(gt, F);
      } catch (ft) {
        F(ft);
      } finally {
        P.T = H;
      }
    }),
    (et.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (et.use = function (p) {
      return P.H.use(p);
    }),
    (et.useActionState = function (p, H, W) {
      return P.H.useActionState(p, H, W);
    }),
    (et.useCallback = function (p, H) {
      return P.H.useCallback(p, H);
    }),
    (et.useContext = function (p) {
      return P.H.useContext(p);
    }),
    (et.useDebugValue = function () {}),
    (et.useDeferredValue = function (p, H) {
      return P.H.useDeferredValue(p, H);
    }),
    (et.useEffect = function (p, H) {
      return P.H.useEffect(p, H);
    }),
    (et.useId = function () {
      return P.H.useId();
    }),
    (et.useImperativeHandle = function (p, H, W) {
      return P.H.useImperativeHandle(p, H, W);
    }),
    (et.useInsertionEffect = function (p, H) {
      return P.H.useInsertionEffect(p, H);
    }),
    (et.useLayoutEffect = function (p, H) {
      return P.H.useLayoutEffect(p, H);
    }),
    (et.useMemo = function (p, H) {
      return P.H.useMemo(p, H);
    }),
    (et.useOptimistic = function (p, H) {
      return P.H.useOptimistic(p, H);
    }),
    (et.useReducer = function (p, H, W) {
      return P.H.useReducer(p, H, W);
    }),
    (et.useRef = function (p) {
      return P.H.useRef(p);
    }),
    (et.useState = function (p) {
      return P.H.useState(p);
    }),
    (et.useSyncExternalStore = function (p, H, W) {
      return P.H.useSyncExternalStore(p, H, W);
    }),
    (et.useTransition = function () {
      return P.H.useTransition();
    }),
    (et.version = "19.0.0"),
    et
  );
}
var bd;
function Of() {
  return bd || ((bd = 1), (pf.exports = xm())), pf.exports;
}
var A = Of();
const Nd = Sm(A);
var Sf = { exports: {} },
  Cu = {},
  bf = { exports: {} },
  Ef = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function Tm() {
  return (
    Ed ||
      ((Ed = 1),
      (function (i) {
        function o(Y, tt) {
          var F = Y.length;
          Y.push(tt);
          t: for (; 0 < F; ) {
            var gt = (F - 1) >>> 1,
              p = Y[gt];
            if (0 < d(p, tt)) (Y[gt] = tt), (Y[F] = p), (F = gt);
            else break t;
          }
        }
        function s(Y) {
          return Y.length === 0 ? null : Y[0];
        }
        function f(Y) {
          if (Y.length === 0) return null;
          var tt = Y[0],
            F = Y.pop();
          if (F !== tt) {
            Y[0] = F;
            t: for (var gt = 0, p = Y.length, H = p >>> 1; gt < H; ) {
              var W = 2 * (gt + 1) - 1,
                k = Y[W],
                w = W + 1,
                ft = Y[w];
              if (0 > d(k, F))
                w < p && 0 > d(ft, k)
                  ? ((Y[gt] = ft), (Y[w] = F), (gt = w))
                  : ((Y[gt] = k), (Y[W] = F), (gt = W));
              else if (w < p && 0 > d(ft, F))
                (Y[gt] = ft), (Y[w] = F), (gt = w);
              else break t;
            }
          }
          return tt;
        }
        function d(Y, tt) {
          var F = Y.sortIndex - tt.sortIndex;
          return F !== 0 ? F : Y.id - tt.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var g = performance;
          i.unstable_now = function () {
            return g.now();
          };
        } else {
          var x = Date,
            R = x.now();
          i.unstable_now = function () {
            return x.now() - R;
          };
        }
        var y = [],
          v = [],
          D = 1,
          q = null,
          C = 3,
          N = !1,
          U = !1,
          X = !1,
          L = typeof setTimeout == "function" ? setTimeout : null,
          B = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function Q(Y) {
          for (var tt = s(v); tt !== null; ) {
            if (tt.callback === null) f(v);
            else if (tt.startTime <= Y)
              f(v), (tt.sortIndex = tt.expirationTime), o(y, tt);
            else break;
            tt = s(v);
          }
        }
        function ht(Y) {
          if (((X = !1), Q(Y), !U))
            if (s(y) !== null) (U = !0), He();
            else {
              var tt = s(v);
              tt !== null && Ft(ht, tt.startTime - Y);
            }
        }
        var P = !1,
          Ot = -1,
          Yt = 5,
          Qt = -1;
        function G() {
          return !(i.unstable_now() - Qt < Yt);
        }
        function lt() {
          if (P) {
            var Y = i.unstable_now();
            Qt = Y;
            var tt = !0;
            try {
              t: {
                (U = !1), X && ((X = !1), B(Ot), (Ot = -1)), (N = !0);
                var F = C;
                try {
                  e: {
                    for (
                      Q(Y), q = s(y);
                      q !== null && !(q.expirationTime > Y && G());

                    ) {
                      var gt = q.callback;
                      if (typeof gt == "function") {
                        (q.callback = null), (C = q.priorityLevel);
                        var p = gt(q.expirationTime <= Y);
                        if (((Y = i.unstable_now()), typeof p == "function")) {
                          (q.callback = p), Q(Y), (tt = !0);
                          break e;
                        }
                        q === s(y) && f(y), Q(Y);
                      } else f(y);
                      q = s(y);
                    }
                    if (q !== null) tt = !0;
                    else {
                      var H = s(v);
                      H !== null && Ft(ht, H.startTime - Y), (tt = !1);
                    }
                  }
                  break t;
                } finally {
                  (q = null), (C = F), (N = !1);
                }
                tt = void 0;
              }
            } finally {
              tt ? Jt() : (P = !1);
            }
          }
        }
        var Jt;
        if (typeof J == "function")
          Jt = function () {
            J(lt);
          };
        else if (typeof MessageChannel < "u") {
          var Ue = new MessageChannel(),
            _e = Ue.port2;
          (Ue.port1.onmessage = lt),
            (Jt = function () {
              _e.postMessage(null);
            });
        } else
          Jt = function () {
            L(lt, 0);
          };
        function He() {
          P || ((P = !0), Jt());
        }
        function Ft(Y, tt) {
          Ot = L(function () {
            Y(i.unstable_now());
          }, tt);
        }
        (i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (Y) {
            Y.callback = null;
          }),
          (i.unstable_continueExecution = function () {
            U || N || ((U = !0), He());
          }),
          (i.unstable_forceFrameRate = function (Y) {
            0 > Y || 125 < Y
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Yt = 0 < Y ? Math.floor(1e3 / Y) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (i.unstable_getFirstCallbackNode = function () {
            return s(y);
          }),
          (i.unstable_next = function (Y) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var tt = 3;
                break;
              default:
                tt = C;
            }
            var F = C;
            C = tt;
            try {
              return Y();
            } finally {
              C = F;
            }
          }),
          (i.unstable_pauseExecution = function () {}),
          (i.unstable_requestPaint = function () {}),
          (i.unstable_runWithPriority = function (Y, tt) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Y = 3;
            }
            var F = C;
            C = Y;
            try {
              return tt();
            } finally {
              C = F;
            }
          }),
          (i.unstable_scheduleCallback = function (Y, tt, F) {
            var gt = i.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? gt + F : gt))
                : (F = gt),
              Y)
            ) {
              case 1:
                var p = -1;
                break;
              case 2:
                p = 250;
                break;
              case 5:
                p = 1073741823;
                break;
              case 4:
                p = 1e4;
                break;
              default:
                p = 5e3;
            }
            return (
              (p = F + p),
              (Y = {
                id: D++,
                callback: tt,
                priorityLevel: Y,
                startTime: F,
                expirationTime: p,
                sortIndex: -1,
              }),
              F > gt
                ? ((Y.sortIndex = F),
                  o(v, Y),
                  s(y) === null &&
                    Y === s(v) &&
                    (X ? (B(Ot), (Ot = -1)) : (X = !0), Ft(ht, F - gt)))
                : ((Y.sortIndex = p), o(y, Y), U || N || ((U = !0), He())),
              Y
            );
          }),
          (i.unstable_shouldYield = G),
          (i.unstable_wrapCallback = function (Y) {
            var tt = C;
            return function () {
              var F = C;
              C = tt;
              try {
                return Y.apply(this, arguments);
              } finally {
                C = F;
              }
            };
          });
      })(Ef)),
    Ef
  );
}
var xd;
function _m() {
  return xd || ((xd = 1), (bf.exports = Tm())), bf.exports;
}
var xf = { exports: {} },
  Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td;
function Am() {
  if (Td) return Kt;
  Td = 1;
  var i = Of();
  function o(y) {
    var v = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var D = 2; D < arguments.length; D++)
        v += "&args[]=" + encodeURIComponent(arguments[D]);
    }
    return (
      "Minified React error #" +
      y +
      "; visit " +
      v +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function s() {}
  var f = {
      d: {
        f: s,
        r: function () {
          throw Error(o(522));
        },
        D: s,
        C: s,
        L: s,
        m: s,
        X: s,
        S: s,
        M: s,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function g(y, v, D) {
    var q =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: q == null ? null : "" + q,
      children: y,
      containerInfo: v,
      implementation: D,
    };
  }
  var x = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function R(y, v) {
    if (y === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return (
    (Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Kt.createPortal = function (y, v) {
      var D =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(o(299));
      return g(y, v, null, D);
    }),
    (Kt.flushSync = function (y) {
      var v = x.T,
        D = f.p;
      try {
        if (((x.T = null), (f.p = 2), y)) return y();
      } finally {
        (x.T = v), (f.p = D), f.d.f();
      }
    }),
    (Kt.preconnect = function (y, v) {
      typeof y == "string" &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == "string"
                ? v === "use-credentials"
                  ? v
                  : ""
                : void 0))
          : (v = null),
        f.d.C(y, v));
    }),
    (Kt.prefetchDNS = function (y) {
      typeof y == "string" && f.d.D(y);
    }),
    (Kt.preinit = function (y, v) {
      if (typeof y == "string" && v && typeof v.as == "string") {
        var D = v.as,
          q = R(D, v.crossOrigin),
          C = typeof v.integrity == "string" ? v.integrity : void 0,
          N = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        D === "style"
          ? f.d.S(y, typeof v.precedence == "string" ? v.precedence : void 0, {
              crossOrigin: q,
              integrity: C,
              fetchPriority: N,
            })
          : D === "script" &&
            f.d.X(y, {
              crossOrigin: q,
              integrity: C,
              fetchPriority: N,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
      }
    }),
    (Kt.preinitModule = function (y, v) {
      if (typeof y == "string")
        if (typeof v == "object" && v !== null) {
          if (v.as == null || v.as === "script") {
            var D = R(v.as, v.crossOrigin);
            f.d.M(y, {
              crossOrigin: D,
              integrity: typeof v.integrity == "string" ? v.integrity : void 0,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
          }
        } else v == null && f.d.M(y);
    }),
    (Kt.preload = function (y, v) {
      if (
        typeof y == "string" &&
        typeof v == "object" &&
        v !== null &&
        typeof v.as == "string"
      ) {
        var D = v.as,
          q = R(D, v.crossOrigin);
        f.d.L(y, D, {
          crossOrigin: q,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0,
        });
      }
    }),
    (Kt.preloadModule = function (y, v) {
      if (typeof y == "string")
        if (v) {
          var D = R(v.as, v.crossOrigin);
          f.d.m(y, {
            as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
            crossOrigin: D,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          });
        } else f.d.m(y);
    }),
    (Kt.requestFormReset = function (y) {
      f.d.r(y);
    }),
    (Kt.unstable_batchedUpdates = function (y, v) {
      return y(v);
    }),
    (Kt.useFormState = function (y, v, D) {
      return x.H.useFormState(y, v, D);
    }),
    (Kt.useFormStatus = function () {
      return x.H.useHostTransitionStatus();
    }),
    (Kt.version = "19.0.0"),
    Kt
  );
}
var _d;
function Rm() {
  if (_d) return xf.exports;
  _d = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), (xf.exports = Am()), xf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad;
function Om() {
  if (Ad) return Cu;
  Ad = 1;
  var i = _m(),
    o = Of(),
    s = Rm();
  function f(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  var g = Symbol.for("react.element"),
    x = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    y = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    D = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    C = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    U = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    L = Symbol.for("react.suspense_list"),
    B = Symbol.for("react.memo"),
    J = Symbol.for("react.lazy"),
    Q = Symbol.for("react.offscreen"),
    ht = Symbol.for("react.memo_cache_sentinel"),
    P = Symbol.iterator;
  function Ot(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (P && t[P]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var Yt = Symbol.for("react.client.reference");
  function Qt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Yt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case y:
        return "Fragment";
      case R:
        return "Portal";
      case D:
        return "Profiler";
      case v:
        return "StrictMode";
      case X:
        return "Suspense";
      case L:
        return "SuspenseList";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case N:
          return (t.displayName || "Context") + ".Provider";
        case C:
          return (t._context.displayName || "Context") + ".Consumer";
        case U:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case B:
          return (
            (e = t.displayName || null), e !== null ? e : Qt(t.type) || "Memo"
          );
        case J:
          (e = t._payload), (t = t._init);
          try {
            return Qt(t(e));
          } catch {}
      }
    return null;
  }
  var G = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    lt = Object.assign,
    Jt,
    Ue;
  function _e(t) {
    if (Jt === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Jt = (e && e[1]) || ""),
          (Ue =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Jt +
      t +
      Ue
    );
  }
  var He = !1;
  function Ft(t, e) {
    if (!t || He) return "";
    He = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (O) {
                  var _ = O;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (O) {
                  _ = O;
                }
                t.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                _ = O;
              }
              (j = t()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (O) {
            if (O && _ && typeof O.stack == "string") return [O.stack, _.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = a.DetermineComponentFrameRoot(),
        c = n[0],
        r = n[1];
      if (c && r) {
        var h = c.split(`
`),
          b = r.split(`
`);
        for (
          u = a = 0;
          a < h.length && !h[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; u < b.length && !b[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (a === h.length || u === b.length)
          for (
            a = h.length - 1, u = b.length - 1;
            1 <= a && 0 <= u && h[a] !== b[u];

          )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (h[a] !== b[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || h[a] !== b[u])) {
                  var z =
                    `
` + h[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", t.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      (He = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? _e(l) : "";
  }
  function Y(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return _e(t.type);
      case 16:
        return _e("Lazy");
      case 13:
        return _e("Suspense");
      case 19:
        return _e("SuspenseList");
      case 0:
      case 15:
        return (t = Ft(t.type, !1)), t;
      case 11:
        return (t = Ft(t.type.render, !1)), t;
      case 1:
        return (t = Ft(t.type, !0)), t;
      default:
        return "";
    }
  }
  function tt(t) {
    try {
      var e = "";
      do (e += Y(t)), (t = t.return);
      while (t);
      return e;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function F(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function gt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (F(t) !== t) throw Error(f(188));
  }
  function H(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = F(t)), e === null)) throw Error(f(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var u = l.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return p(u), t;
          if (n === a) return p(u), e;
          n = n.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = u), (a = n);
      else {
        for (var c = !1, r = u.child; r; ) {
          if (r === l) {
            (c = !0), (l = u), (a = n);
            break;
          }
          if (r === a) {
            (c = !0), (a = u), (l = n);
            break;
          }
          r = r.sibling;
        }
        if (!c) {
          for (r = n.child; r; ) {
            if (r === l) {
              (c = !0), (l = n), (a = u);
              break;
            }
            if (r === a) {
              (c = !0), (a = n), (l = u);
              break;
            }
            r = r.sibling;
          }
          if (!c) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? t : e;
  }
  function W(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = W(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var k = Array.isArray,
    w = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ft = { pending: !1, data: null, method: null, action: null },
    at = [],
    kt = -1;
  function dt(t) {
    return { current: t };
  }
  function Mt(t) {
    0 > kt || ((t.current = at[kt]), (at[kt] = null), kt--);
  }
  function bt(t, e) {
    kt++, (at[kt] = t.current), (t.current = e);
  }
  var Ae = dt(null),
    Ua = dt(null),
    el = dt(null),
    wu = dt(null);
  function Zu(t, e) {
    switch ((bt(el, e), bt(Ua, t), bt(Ae, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Ko(e) : 0;
        break;
      default:
        if (
          ((t = t === 8 ? e.parentNode : e),
          (e = t.tagName),
          (t = t.namespaceURI))
        )
          (t = Ko(t)), (e = Jo(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    Mt(Ae), bt(Ae, e);
  }
  function $l() {
    Mt(Ae), Mt(Ua), Mt(el);
  }
  function ci(t) {
    t.memoizedState !== null && bt(wu, t);
    var e = Ae.current,
      l = Jo(e, t.type);
    e !== l && (bt(Ua, t), bt(Ae, l));
  }
  function Gu(t) {
    Ua.current === t && (Mt(Ae), Mt(Ua)),
      wu.current === t && (Mt(wu), (Ru._currentValue = ft));
  }
  var fi = Object.prototype.hasOwnProperty,
    ri = i.unstable_scheduleCallback,
    si = i.unstable_cancelCallback,
    Fd = i.unstable_shouldYield,
    Pd = i.unstable_requestPaint,
    Re = i.unstable_now,
    Id = i.unstable_getCurrentPriorityLevel,
    Uf = i.unstable_ImmediatePriority,
    Hf = i.unstable_UserBlockingPriority,
    Qu = i.unstable_NormalPriority,
    th = i.unstable_LowPriority,
    qf = i.unstable_IdlePriority,
    eh = i.log,
    lh = i.unstable_setDisableYieldValue,
    Ha = null,
    ee = null;
  function ah(t) {
    if (ee && typeof ee.onCommitFiberRoot == "function")
      try {
        ee.onCommitFiberRoot(Ha, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
  }
  function ll(t) {
    if (
      (typeof eh == "function" && lh(t),
      ee && typeof ee.setStrictMode == "function")
    )
      try {
        ee.setStrictMode(Ha, t);
      } catch {}
  }
  var le = Math.clz32 ? Math.clz32 : ih,
    uh = Math.log,
    nh = Math.LN2;
  function ih(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((uh(t) / nh) | 0)) | 0;
  }
  var Xu = 128,
    Vu = 4194304;
  function Rl(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
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
        return t & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ku(t, e) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var a = 0,
      u = t.suspendedLanes,
      n = t.pingedLanes,
      c = t.warmLanes;
    t = t.finishedLanes !== 0;
    var r = l & 134217727;
    return (
      r !== 0
        ? ((l = r & ~u),
          l !== 0
            ? (a = Rl(l))
            : ((n &= r),
              n !== 0
                ? (a = Rl(n))
                : t || ((c = r & ~c), c !== 0 && (a = Rl(c)))))
        : ((r = l & ~u),
          r !== 0
            ? (a = Rl(r))
            : n !== 0
            ? (a = Rl(n))
            : t || ((c = l & ~c), c !== 0 && (a = Rl(c)))),
      a === 0
        ? 0
        : e !== 0 &&
          e !== a &&
          (e & u) === 0 &&
          ((u = a & -a),
          (c = e & -e),
          u >= c || (u === 32 && (c & 4194176) !== 0))
        ? e
        : a
    );
  }
  function qa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function ch(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250;
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Bf() {
    var t = Xu;
    return (Xu <<= 1), (Xu & 4194176) === 0 && (Xu = 128), t;
  }
  function Lf() {
    var t = Vu;
    return (Vu <<= 1), (Vu & 62914560) === 0 && (Vu = 4194304), t;
  }
  function oi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Ba(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function fh(t, e, l, a, u, n) {
    var c = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var r = t.entanglements,
      h = t.expirationTimes,
      b = t.hiddenUpdates;
    for (l = c & ~l; 0 < l; ) {
      var z = 31 - le(l),
        j = 1 << z;
      (r[z] = 0), (h[z] = -1);
      var _ = b[z];
      if (_ !== null)
        for (b[z] = null, z = 0; z < _.length; z++) {
          var O = _[z];
          O !== null && (O.lane &= -536870913);
        }
      l &= ~j;
    }
    a !== 0 && Yf(t, a, 0),
      n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(c & ~e));
  }
  function Yf(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - le(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194218));
  }
  function wf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - le(l),
        u = 1 << a;
      (u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u);
    }
  }
  function Zf(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Gf() {
    var t = w.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : od(t.type));
  }
  function rh(t, e) {
    var l = w.p;
    try {
      return (w.p = t), e();
    } finally {
      w.p = l;
    }
  }
  var al = Math.random().toString(36).slice(2),
    Xt = "__reactFiber$" + al,
    Pt = "__reactProps$" + al,
    Wl = "__reactContainer$" + al,
    di = "__reactEvents$" + al,
    sh = "__reactListeners$" + al,
    oh = "__reactHandles$" + al,
    Qf = "__reactResources$" + al,
    La = "__reactMarker$" + al;
  function hi(t) {
    delete t[Xt], delete t[Pt], delete t[di], delete t[sh], delete t[oh];
  }
  function Ol(t) {
    var e = t[Xt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Wl] || l[Xt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Wo(t); t !== null; ) {
            if ((l = t[Xt])) return l;
            t = Wo(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Fl(t) {
    if ((t = t[Xt] || t[Wl])) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Ya(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(f(33));
  }
  function Pl(t) {
    var e = t[Qf];
    return (
      e ||
        (e = t[Qf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Ht(t) {
    t[La] = !0;
  }
  var Xf = new Set(),
    Vf = {};
  function zl(t, e) {
    Il(t, e), Il(t + "Capture", e);
  }
  function Il(t, e) {
    for (Vf[t] = e, t = 0; t < e.length; t++) Xf.add(e[t]);
  }
  var qe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    dh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Kf = {},
    Jf = {};
  function hh(t) {
    return fi.call(Jf, t)
      ? !0
      : fi.call(Kf, t)
      ? !1
      : dh.test(t)
      ? (Jf[t] = !0)
      : ((Kf[t] = !0), !1);
  }
  function Ju(t, e, l) {
    if (hh(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function ku(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Be(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function fe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function kf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function mh(t) {
    var e = kf(t) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = "" + t[e];
    if (
      !t.hasOwnProperty(e) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var u = l.get,
        n = l.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (a = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function $u(t) {
    t._valueTracker || (t._valueTracker = mh(t));
  }
  function $f(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = kf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Wu(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var vh = /[\n"\\]/g;
  function re(t) {
    return t.replace(vh, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function mi(t, e, l, a, u, n, c, r) {
    (t.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (t.type = c)
        : t.removeAttribute("type"),
      e != null
        ? c === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + fe(e))
          : t.value !== "" + fe(e) && (t.value = "" + fe(e))
        : (c !== "submit" && c !== "reset") || t.removeAttribute("value"),
      e != null
        ? vi(t, c, fe(e))
        : l != null
        ? vi(t, c, fe(l))
        : a != null && t.removeAttribute("value"),
      u == null && n != null && (t.defaultChecked = !!n),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (t.name = "" + fe(r))
        : t.removeAttribute("name");
  }
  function Wf(t, e, l, a, u, n, c, r) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (t.type = n),
      e != null || l != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || e != null)) return;
      (l = l != null ? "" + fe(l) : ""),
        (e = e != null ? "" + fe(e) : l),
        r || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? u),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = r ? t.checked : !!a),
      (t.defaultChecked = !!a),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.name = c);
  }
  function vi(t, e, l) {
    (e === "number" && Wu(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function ta(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < l.length; u++) e["$" + l[u]] = !0;
      for (l = 0; l < t.length; l++)
        (u = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== u && (t[l].selected = u),
          u && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + fe(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          (t[u].selected = !0), a && (t[u].defaultSelected = !0);
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Ff(t, e, l) {
    if (
      e != null &&
      ((e = "" + fe(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + fe(l) : "";
  }
  function Pf(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if (k(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = fe(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a);
  }
  function ea(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var yh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function If(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || yh.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function tr(t, e, l) {
    if (e != null && typeof e != "object") throw Error(f(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var u in e)
        (a = e[u]), e.hasOwnProperty(u) && l[u] !== a && If(t, u, a);
    } else for (var n in e) e.hasOwnProperty(n) && If(t, n, e[n]);
  }
  function yi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var gh = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ph =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Fu(t) {
    return ph.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var gi = null;
  function pi(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var la = null,
    aa = null;
  function er(t) {
    var e = Fl(t);
    if (e && (t = e.stateNode)) {
      var l = t[Pt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (mi(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + re("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var u = a[Pt] || null;
                if (!u) throw Error(f(90));
                mi(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && $f(a);
          }
          break t;
        case "textarea":
          Ff(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && ta(t, !!l.multiple, e, !1);
      }
    }
  }
  var Si = !1;
  function lr(t, e, l) {
    if (Si) return t(e, l);
    Si = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Si = !1),
        (la !== null || aa !== null) &&
          (Hn(), la && ((e = la), (t = aa), (aa = la = null), er(e), t)))
      )
        for (e = 0; e < t.length; e++) er(t[e]);
    }
  }
  function wa(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[Pt] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
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
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(f(231, e, typeof l));
    return l;
  }
  var bi = !1;
  if (qe)
    try {
      var Za = {};
      Object.defineProperty(Za, "passive", {
        get: function () {
          bi = !0;
        },
      }),
        window.addEventListener("test", Za, Za),
        window.removeEventListener("test", Za, Za);
    } catch {
      bi = !1;
    }
  var ul = null,
    Ei = null,
    Pu = null;
  function ar() {
    if (Pu) return Pu;
    var t,
      e = Ei,
      l = e.length,
      a,
      u = "value" in ul ? ul.value : ul.textContent,
      n = u.length;
    for (t = 0; t < l && e[t] === u[t]; t++);
    var c = l - t;
    for (a = 1; a <= c && e[l - a] === u[n - a]; a++);
    return (Pu = u.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Iu(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function tn() {
    return !0;
  }
  function ur() {
    return !1;
  }
  function It(t) {
    function e(l, a, u, n, c) {
      (this._reactName = l),
        (this._targetInst = u),
        (this.type = a),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var r in t)
        t.hasOwnProperty(r) && ((l = t[r]), (this[r] = l ? l(n) : n[r]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? tn
          : ur),
        (this.isPropagationStopped = ur),
        this
      );
    }
    return (
      lt(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = tn));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = tn));
        },
        persist: function () {},
        isPersistent: tn,
      }),
      e
    );
  }
  var Ml = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    en = It(Ml),
    Ga = lt({}, Ml, { view: 0, detail: 0 }),
    Sh = It(Ga),
    xi,
    Ti,
    Qa,
    ln = lt({}, Ga, {
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
      getModifierState: Ai,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Qa &&
              (Qa && t.type === "mousemove"
                ? ((xi = t.screenX - Qa.screenX), (Ti = t.screenY - Qa.screenY))
                : (Ti = xi = 0),
              (Qa = t)),
            xi);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Ti;
      },
    }),
    nr = It(ln),
    bh = lt({}, ln, { dataTransfer: 0 }),
    Eh = It(bh),
    xh = lt({}, Ga, { relatedTarget: 0 }),
    _i = It(xh),
    Th = lt({}, Ml, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    _h = It(Th),
    Ah = lt({}, Ml, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Rh = It(Ah),
    Oh = lt({}, Ml, { data: 0 }),
    ir = It(Oh),
    zh = {
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
      MozPrintableKey: "Unidentified",
    },
    Mh = {
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
      224: "Meta",
    },
    Dh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function jh(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Dh[t])
      ? !!e[t]
      : !1;
  }
  function Ai() {
    return jh;
  }
  var Ch = lt({}, Ga, {
      key: function (t) {
        if (t.key) {
          var e = zh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Iu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? Mh[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ai,
      charCode: function (t) {
        return t.type === "keypress" ? Iu(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Iu(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    Nh = It(Ch),
    Uh = lt({}, ln, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    cr = It(Uh),
    Hh = lt({}, Ga, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ai,
    }),
    qh = It(Hh),
    Bh = lt({}, Ml, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lh = It(Bh),
    Yh = lt({}, ln, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    wh = It(Yh),
    Zh = lt({}, Ml, { newState: 0, oldState: 0 }),
    Gh = It(Zh),
    Qh = [9, 13, 27, 32],
    Ri = qe && "CompositionEvent" in window,
    Xa = null;
  qe && "documentMode" in document && (Xa = document.documentMode);
  var Xh = qe && "TextEvent" in window && !Xa,
    fr = qe && (!Ri || (Xa && 8 < Xa && 11 >= Xa)),
    rr = " ",
    sr = !1;
  function or(t, e) {
    switch (t) {
      case "keyup":
        return Qh.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function dr(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var ua = !1;
  function Vh(t, e) {
    switch (t) {
      case "compositionend":
        return dr(e);
      case "keypress":
        return e.which !== 32 ? null : ((sr = !0), rr);
      case "textInput":
        return (t = e.data), t === rr && sr ? null : t;
      default:
        return null;
    }
  }
  function Kh(t, e) {
    if (ua)
      return t === "compositionend" || (!Ri && or(t, e))
        ? ((t = ar()), (Pu = Ei = ul = null), (ua = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return fr && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Jh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function hr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Jh[t.type] : e === "textarea";
  }
  function mr(t, e, l, a) {
    la ? (aa ? aa.push(a) : (aa = [a])) : (la = a),
      (e = wn(e, "onChange")),
      0 < e.length &&
        ((l = new en("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Va = null,
    Ka = null;
  function kh(t) {
    Zo(t, 0);
  }
  function an(t) {
    var e = Ya(t);
    if ($f(e)) return t;
  }
  function vr(t, e) {
    if (t === "change") return e;
  }
  var yr = !1;
  if (qe) {
    var Oi;
    if (qe) {
      var zi = "oninput" in document;
      if (!zi) {
        var gr = document.createElement("div");
        gr.setAttribute("oninput", "return;"),
          (zi = typeof gr.oninput == "function");
      }
      Oi = zi;
    } else Oi = !1;
    yr = Oi && (!document.documentMode || 9 < document.documentMode);
  }
  function pr() {
    Va && (Va.detachEvent("onpropertychange", Sr), (Ka = Va = null));
  }
  function Sr(t) {
    if (t.propertyName === "value" && an(Ka)) {
      var e = [];
      mr(e, Ka, t, pi(t)), lr(kh, e);
    }
  }
  function $h(t, e, l) {
    t === "focusin"
      ? (pr(), (Va = e), (Ka = l), Va.attachEvent("onpropertychange", Sr))
      : t === "focusout" && pr();
  }
  function Wh(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return an(Ka);
  }
  function Fh(t, e) {
    if (t === "click") return an(e);
  }
  function Ph(t, e) {
    if (t === "input" || t === "change") return an(e);
  }
  function Ih(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var ae = typeof Object.is == "function" ? Object.is : Ih;
  function Ja(t, e) {
    if (ae(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var u = l[a];
      if (!fi.call(e, u) || !ae(t[u], e[u])) return !1;
    }
    return !0;
  }
  function br(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Er(t, e) {
    var l = br(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = br(l);
    }
  }
  function xr(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? xr(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function Tr(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Wu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Wu(t.document);
    }
    return e;
  }
  function Mi(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  function t0(t, e) {
    var l = Tr(e);
    e = t.focusedElem;
    var a = t.selectionRange;
    if (
      l !== e &&
      e &&
      e.ownerDocument &&
      xr(e.ownerDocument.documentElement, e)
    ) {
      if (a !== null && Mi(e)) {
        if (
          ((t = a.start),
          (l = a.end),
          l === void 0 && (l = t),
          "selectionStart" in e)
        )
          (e.selectionStart = t),
            (e.selectionEnd = Math.min(l, e.value.length));
        else if (
          ((l = ((t = e.ownerDocument || document) && t.defaultView) || window),
          l.getSelection)
        ) {
          l = l.getSelection();
          var u = e.textContent.length,
            n = Math.min(a.start, u);
          (a = a.end === void 0 ? n : Math.min(a.end, u)),
            !l.extend && n > a && ((u = a), (a = n), (n = u)),
            (u = Er(e, n));
          var c = Er(e, a);
          u &&
            c &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== u.node ||
              l.anchorOffset !== u.offset ||
              l.focusNode !== c.node ||
              l.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(u.node, u.offset),
            l.removeAllRanges(),
            n > a
              ? (l.addRange(t), l.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), l.addRange(t)));
        }
      }
      for (t = [], l = e; (l = l.parentNode); )
        l.nodeType === 1 &&
          t.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof e.focus == "function" && e.focus(), e = 0; e < t.length; e++)
        (l = t[e]),
          (l.element.scrollLeft = l.left),
          (l.element.scrollTop = l.top);
    }
  }
  var e0 = qe && "documentMode" in document && 11 >= document.documentMode,
    na = null,
    Di = null,
    ka = null,
    ji = !1;
  function _r(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    ji ||
      na == null ||
      na !== Wu(a) ||
      ((a = na),
      "selectionStart" in a && Mi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (ka && Ja(ka, a)) ||
        ((ka = a),
        (a = wn(Di, "onSelect")),
        0 < a.length &&
          ((e = new en("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = na))));
  }
  function Dl(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var ia = {
      animationend: Dl("Animation", "AnimationEnd"),
      animationiteration: Dl("Animation", "AnimationIteration"),
      animationstart: Dl("Animation", "AnimationStart"),
      transitionrun: Dl("Transition", "TransitionRun"),
      transitionstart: Dl("Transition", "TransitionStart"),
      transitioncancel: Dl("Transition", "TransitionCancel"),
      transitionend: Dl("Transition", "TransitionEnd"),
    },
    Ci = {},
    Ar = {};
  qe &&
    ((Ar = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ia.animationend.animation,
      delete ia.animationiteration.animation,
      delete ia.animationstart.animation),
    "TransitionEvent" in window || delete ia.transitionend.transition);
  function jl(t) {
    if (Ci[t]) return Ci[t];
    if (!ia[t]) return t;
    var e = ia[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in Ar) return (Ci[t] = e[l]);
    return t;
  }
  var Rr = jl("animationend"),
    Or = jl("animationiteration"),
    zr = jl("animationstart"),
    l0 = jl("transitionrun"),
    a0 = jl("transitionstart"),
    u0 = jl("transitioncancel"),
    Mr = jl("transitionend"),
    Dr = new Map(),
    jr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function be(t, e) {
    Dr.set(t, e), zl(e, [t]);
  }
  var se = [],
    ca = 0,
    Ni = 0;
  function un() {
    for (var t = ca, e = (Ni = ca = 0); e < t; ) {
      var l = se[e];
      se[e++] = null;
      var a = se[e];
      se[e++] = null;
      var u = se[e];
      se[e++] = null;
      var n = se[e];
      if (((se[e++] = null), a !== null && u !== null)) {
        var c = a.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (a.pending = u);
      }
      n !== 0 && Cr(l, u, n);
    }
  }
  function nn(t, e, l, a) {
    (se[ca++] = t),
      (se[ca++] = e),
      (se[ca++] = l),
      (se[ca++] = a),
      (Ni |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function Ui(t, e, l, a) {
    return nn(t, e, l, a), cn(t);
  }
  function nl(t, e) {
    return nn(t, null, null, e), cn(t);
  }
  function Cr(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var u = !1, n = t.return; n !== null; )
      (n.childLanes |= l),
        (a = n.alternate),
        a !== null && (a.childLanes |= l),
        n.tag === 22 &&
          ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = n),
        (n = n.return);
    u &&
      e !== null &&
      t.tag === 3 &&
      ((n = t.stateNode),
      (u = 31 - le(l)),
      (n = n.hiddenUpdates),
      (t = n[u]),
      t === null ? (n[u] = [e]) : t.push(e),
      (e.lane = l | 536870912));
  }
  function cn(t) {
    if (50 < Su) throw ((Su = 0), (wc = null), Error(f(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var fa = {},
    Nr = new WeakMap();
  function oe(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Nr.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: tt(e) }), Nr.set(t, e), e);
    }
    return { value: t, source: e, stack: tt(e) };
  }
  var ra = [],
    sa = 0,
    fn = null,
    rn = 0,
    de = [],
    he = 0,
    Cl = null,
    Le = 1,
    Ye = "";
  function Nl(t, e) {
    (ra[sa++] = rn), (ra[sa++] = fn), (fn = t), (rn = e);
  }
  function Ur(t, e, l) {
    (de[he++] = Le), (de[he++] = Ye), (de[he++] = Cl), (Cl = t);
    var a = Le;
    t = Ye;
    var u = 32 - le(a) - 1;
    (a &= ~(1 << u)), (l += 1);
    var n = 32 - le(e) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (a & ((1 << c) - 1)).toString(32)),
        (a >>= c),
        (u -= c),
        (Le = (1 << (32 - le(e) + u)) | (l << u) | a),
        (Ye = n + t);
    } else (Le = (1 << n) | (l << u) | a), (Ye = t);
  }
  function Hi(t) {
    t.return !== null && (Nl(t, 1), Ur(t, 1, 0));
  }
  function qi(t) {
    for (; t === fn; )
      (fn = ra[--sa]), (ra[sa] = null), (rn = ra[--sa]), (ra[sa] = null);
    for (; t === Cl; )
      (Cl = de[--he]),
        (de[he] = null),
        (Ye = de[--he]),
        (de[he] = null),
        (Le = de[--he]),
        (de[he] = null);
  }
  var $t = null,
    wt = null,
    st = !1,
    Ee = null,
    Oe = !1,
    Bi = Error(f(519));
  function Ul(t) {
    var e = Error(f(418, ""));
    throw (Fa(oe(e, t)), Bi);
  }
  function Hr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Xt] = t), (e[Pt] = a), l)) {
      case "dialog":
        ct("cancel", e), ct("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ct("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Eu.length; l++) ct(Eu[l], e);
        break;
      case "source":
        ct("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ct("error", e), ct("load", e);
        break;
      case "details":
        ct("toggle", e);
        break;
      case "input":
        ct("invalid", e),
          Wf(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          $u(e);
        break;
      case "select":
        ct("invalid", e);
        break;
      case "textarea":
        ct("invalid", e), Pf(e, a.value, a.defaultValue, a.children), $u(e);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Vo(e.textContent, l)
        ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)),
          a.onScroll != null && ct("scroll", e),
          a.onScrollEnd != null && ct("scrollend", e),
          a.onClick != null && (e.onclick = Zn),
          (e = !0))
        : (e = !1),
      e || Ul(t);
  }
  function qr(t) {
    for ($t = t.return; $t; )
      switch ($t.tag) {
        case 3:
        case 27:
          Oe = !0;
          return;
        case 5:
        case 13:
          Oe = !1;
          return;
        default:
          $t = $t.return;
      }
  }
  function $a(t) {
    if (t !== $t) return !1;
    if (!st) return qr(t), (st = !0), !1;
    var e = !1,
      l;
    if (
      ((l = t.tag !== 3 && t.tag !== 27) &&
        ((l = t.tag === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || af(t.type, t.memoizedProps))),
        (l = !l)),
      l && (e = !0),
      e && wt && Ul(t),
      qr(t),
      t.tag === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(f(317));
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === "/$")) {
              if (e === 0) {
                wt = Te(t.nextSibling);
                break t;
              }
              e--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || e++;
          t = t.nextSibling;
        }
        wt = null;
      }
    } else wt = $t ? Te(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wa() {
    (wt = $t = null), (st = !1);
  }
  function Fa(t) {
    Ee === null ? (Ee = [t]) : Ee.push(t);
  }
  var Pa = Error(f(460)),
    Br = Error(f(474)),
    Li = { then: function () {} };
  function Lr(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function sn() {}
  function Yr(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(sn, sn), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), t === Pa ? Error(f(483)) : t);
      default:
        if (typeof e.status == "string") e.then(sn, sn);
        else {
          if (((t = pt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(f(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "fulfilled"), (u.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var u = e;
                  (u.status = "rejected"), (u.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), t === Pa ? Error(f(483)) : t);
        }
        throw ((Ia = e), Pa);
    }
  }
  var Ia = null;
  function wr() {
    if (Ia === null) throw Error(f(459));
    var t = Ia;
    return (Ia = null), t;
  }
  var oa = null,
    tu = 0;
  function on(t) {
    var e = tu;
    return (tu += 1), oa === null && (oa = []), Yr(oa, t, e);
  }
  function eu(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function dn(t, e) {
    throw e.$$typeof === g
      ? Error(f(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          f(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Zr(t) {
    var e = t._init;
    return e(t._payload);
  }
  function Gr(t) {
    function e(E, S) {
      if (t) {
        var T = E.deletions;
        T === null ? ((E.deletions = [S]), (E.flags |= 16)) : T.push(S);
      }
    }
    function l(E, S) {
      if (!t) return null;
      for (; S !== null; ) e(E, S), (S = S.sibling);
      return null;
    }
    function a(E) {
      for (var S = new Map(); E !== null; )
        E.key !== null ? S.set(E.key, E) : S.set(E.index, E), (E = E.sibling);
      return S;
    }
    function u(E, S) {
      return (E = gl(E, S)), (E.index = 0), (E.sibling = null), E;
    }
    function n(E, S, T) {
      return (
        (E.index = T),
        t
          ? ((T = E.alternate),
            T !== null
              ? ((T = T.index), T < S ? ((E.flags |= 33554434), S) : T)
              : ((E.flags |= 33554434), S))
          : ((E.flags |= 1048576), S)
      );
    }
    function c(E) {
      return t && E.alternate === null && (E.flags |= 33554434), E;
    }
    function r(E, S, T, M) {
      return S === null || S.tag !== 6
        ? ((S = Cc(T, E.mode, M)), (S.return = E), S)
        : ((S = u(S, T)), (S.return = E), S);
    }
    function h(E, S, T, M) {
      var Z = T.type;
      return Z === y
        ? z(E, S, T.props.children, M, T.key)
        : S !== null &&
          (S.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === J &&
              Zr(Z) === S.type))
        ? ((S = u(S, T.props)), eu(S, T), (S.return = E), S)
        : ((S = Dn(T.type, T.key, T.props, null, E.mode, M)),
          eu(S, T),
          (S.return = E),
          S);
    }
    function b(E, S, T, M) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== T.containerInfo ||
        S.stateNode.implementation !== T.implementation
        ? ((S = Nc(T, E.mode, M)), (S.return = E), S)
        : ((S = u(S, T.children || [])), (S.return = E), S);
    }
    function z(E, S, T, M, Z) {
      return S === null || S.tag !== 7
        ? ((S = Xl(T, E.mode, M, Z)), (S.return = E), S)
        : ((S = u(S, T)), (S.return = E), S);
    }
    function j(E, S, T) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return (S = Cc("" + S, E.mode, T)), (S.return = E), S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case x:
            return (
              (T = Dn(S.type, S.key, S.props, null, E.mode, T)),
              eu(T, S),
              (T.return = E),
              T
            );
          case R:
            return (S = Nc(S, E.mode, T)), (S.return = E), S;
          case J:
            var M = S._init;
            return (S = M(S._payload)), j(E, S, T);
        }
        if (k(S) || Ot(S))
          return (S = Xl(S, E.mode, T, null)), (S.return = E), S;
        if (typeof S.then == "function") return j(E, on(S), T);
        if (S.$$typeof === N) return j(E, On(E, S), T);
        dn(E, S);
      }
      return null;
    }
    function _(E, S, T, M) {
      var Z = S !== null ? S.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return Z !== null ? null : r(E, S, "" + T, M);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case x:
            return T.key === Z ? h(E, S, T, M) : null;
          case R:
            return T.key === Z ? b(E, S, T, M) : null;
          case J:
            return (Z = T._init), (T = Z(T._payload)), _(E, S, T, M);
        }
        if (k(T) || Ot(T)) return Z !== null ? null : z(E, S, T, M, null);
        if (typeof T.then == "function") return _(E, S, on(T), M);
        if (T.$$typeof === N) return _(E, S, On(E, T), M);
        dn(E, T);
      }
      return null;
    }
    function O(E, S, T, M, Z) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (E = E.get(T) || null), r(S, E, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case x:
            return (
              (E = E.get(M.key === null ? T : M.key) || null), h(S, E, M, Z)
            );
          case R:
            return (
              (E = E.get(M.key === null ? T : M.key) || null), b(S, E, M, Z)
            );
          case J:
            var nt = M._init;
            return (M = nt(M._payload)), O(E, S, T, M, Z);
        }
        if (k(M) || Ot(M)) return (E = E.get(T) || null), z(S, E, M, Z, null);
        if (typeof M.then == "function") return O(E, S, T, on(M), Z);
        if (M.$$typeof === N) return O(E, S, T, On(S, M), Z);
        dn(S, M);
      }
      return null;
    }
    function V(E, S, T, M) {
      for (
        var Z = null, nt = null, K = S, $ = (S = 0), Lt = null;
        K !== null && $ < T.length;
        $++
      ) {
        K.index > $ ? ((Lt = K), (K = null)) : (Lt = K.sibling);
        var ot = _(E, K, T[$], M);
        if (ot === null) {
          K === null && (K = Lt);
          break;
        }
        t && K && ot.alternate === null && e(E, K),
          (S = n(ot, S, $)),
          nt === null ? (Z = ot) : (nt.sibling = ot),
          (nt = ot),
          (K = Lt);
      }
      if ($ === T.length) return l(E, K), st && Nl(E, $), Z;
      if (K === null) {
        for (; $ < T.length; $++)
          (K = j(E, T[$], M)),
            K !== null &&
              ((S = n(K, S, $)),
              nt === null ? (Z = K) : (nt.sibling = K),
              (nt = K));
        return st && Nl(E, $), Z;
      }
      for (K = a(K); $ < T.length; $++)
        (Lt = O(K, E, $, T[$], M)),
          Lt !== null &&
            (t &&
              Lt.alternate !== null &&
              K.delete(Lt.key === null ? $ : Lt.key),
            (S = n(Lt, S, $)),
            nt === null ? (Z = Lt) : (nt.sibling = Lt),
            (nt = Lt));
      return (
        t &&
          K.forEach(function (_l) {
            return e(E, _l);
          }),
        st && Nl(E, $),
        Z
      );
    }
    function I(E, S, T, M) {
      if (T == null) throw Error(f(151));
      for (
        var Z = null, nt = null, K = S, $ = (S = 0), Lt = null, ot = T.next();
        K !== null && !ot.done;
        $++, ot = T.next()
      ) {
        K.index > $ ? ((Lt = K), (K = null)) : (Lt = K.sibling);
        var _l = _(E, K, ot.value, M);
        if (_l === null) {
          K === null && (K = Lt);
          break;
        }
        t && K && _l.alternate === null && e(E, K),
          (S = n(_l, S, $)),
          nt === null ? (Z = _l) : (nt.sibling = _l),
          (nt = _l),
          (K = Lt);
      }
      if (ot.done) return l(E, K), st && Nl(E, $), Z;
      if (K === null) {
        for (; !ot.done; $++, ot = T.next())
          (ot = j(E, ot.value, M)),
            ot !== null &&
              ((S = n(ot, S, $)),
              nt === null ? (Z = ot) : (nt.sibling = ot),
              (nt = ot));
        return st && Nl(E, $), Z;
      }
      for (K = a(K); !ot.done; $++, ot = T.next())
        (ot = O(K, E, $, ot.value, M)),
          ot !== null &&
            (t &&
              ot.alternate !== null &&
              K.delete(ot.key === null ? $ : ot.key),
            (S = n(ot, S, $)),
            nt === null ? (Z = ot) : (nt.sibling = ot),
            (nt = ot));
      return (
        t &&
          K.forEach(function (pm) {
            return e(E, pm);
          }),
        st && Nl(E, $),
        Z
      );
    }
    function Rt(E, S, T, M) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === y &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case x:
            t: {
              for (var Z = T.key; S !== null; ) {
                if (S.key === Z) {
                  if (((Z = T.type), Z === y)) {
                    if (S.tag === 7) {
                      l(E, S.sibling),
                        (M = u(S, T.props.children)),
                        (M.return = E),
                        (E = M);
                      break t;
                    }
                  } else if (
                    S.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === J &&
                      Zr(Z) === S.type)
                  ) {
                    l(E, S.sibling),
                      (M = u(S, T.props)),
                      eu(M, T),
                      (M.return = E),
                      (E = M);
                    break t;
                  }
                  l(E, S);
                  break;
                } else e(E, S);
                S = S.sibling;
              }
              T.type === y
                ? ((M = Xl(T.props.children, E.mode, M, T.key)),
                  (M.return = E),
                  (E = M))
                : ((M = Dn(T.type, T.key, T.props, null, E.mode, M)),
                  eu(M, T),
                  (M.return = E),
                  (E = M));
            }
            return c(E);
          case R:
            t: {
              for (Z = T.key; S !== null; ) {
                if (S.key === Z)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === T.containerInfo &&
                    S.stateNode.implementation === T.implementation
                  ) {
                    l(E, S.sibling),
                      (M = u(S, T.children || [])),
                      (M.return = E),
                      (E = M);
                    break t;
                  } else {
                    l(E, S);
                    break;
                  }
                else e(E, S);
                S = S.sibling;
              }
              (M = Nc(T, E.mode, M)), (M.return = E), (E = M);
            }
            return c(E);
          case J:
            return (Z = T._init), (T = Z(T._payload)), Rt(E, S, T, M);
        }
        if (k(T)) return V(E, S, T, M);
        if (Ot(T)) {
          if (((Z = Ot(T)), typeof Z != "function")) throw Error(f(150));
          return (T = Z.call(T)), I(E, S, T, M);
        }
        if (typeof T.then == "function") return Rt(E, S, on(T), M);
        if (T.$$typeof === N) return Rt(E, S, On(E, T), M);
        dn(E, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          S !== null && S.tag === 6
            ? (l(E, S.sibling), (M = u(S, T)), (M.return = E), (E = M))
            : (l(E, S), (M = Cc(T, E.mode, M)), (M.return = E), (E = M)),
          c(E))
        : l(E, S);
    }
    return function (E, S, T, M) {
      try {
        tu = 0;
        var Z = Rt(E, S, T, M);
        return (oa = null), Z;
      } catch (K) {
        if (K === Pa) throw K;
        var nt = ge(29, K, null, E.mode);
        return (nt.lanes = M), (nt.return = E), nt;
      } finally {
      }
    };
  }
  var Hl = Gr(!0),
    Qr = Gr(!1),
    da = dt(null),
    hn = dt(0);
  function Xr(t, e) {
    (t = We), bt(hn, t), bt(da, e), (We = t | e.baseLanes);
  }
  function Yi() {
    bt(hn, We), bt(da, da.current);
  }
  function wi() {
    (We = hn.current), Mt(da), Mt(hn);
  }
  var me = dt(null),
    ze = null;
  function il(t) {
    var e = t.alternate;
    bt(Nt, Nt.current & 1),
      bt(me, t),
      ze === null &&
        (e === null || da.current !== null || e.memoizedState !== null) &&
        (ze = t);
  }
  function Vr(t) {
    if (t.tag === 22) {
      if ((bt(Nt, Nt.current), bt(me, t), ze === null)) {
        var e = t.alternate;
        e !== null && e.memoizedState !== null && (ze = t);
      }
    } else cl();
  }
  function cl() {
    bt(Nt, Nt.current), bt(me, me.current);
  }
  function we(t) {
    Mt(me), ze === t && (ze = null), Mt(Nt);
  }
  var Nt = dt(0);
  function mn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
        )
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var n0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    i0 = i.unstable_scheduleCallback,
    c0 = i.unstable_NormalPriority,
    Ut = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Zi() {
    return { controller: new n0(), data: new Map(), refCount: 0 };
  }
  function lu(t) {
    t.refCount--,
      t.refCount === 0 &&
        i0(c0, function () {
          t.controller.abort();
        });
  }
  var au = null,
    Gi = 0,
    ha = 0,
    ma = null;
  function f0(t, e) {
    if (au === null) {
      var l = (au = []);
      (Gi = 0),
        (ha = kc()),
        (ma = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Gi++, e.then(Kr, Kr), e;
  }
  function Kr() {
    if (--Gi === 0 && au !== null) {
      ma !== null && (ma.status = "fulfilled");
      var t = au;
      (au = null), (ha = 0), (ma = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function r0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          l.push(u);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var u = 0; u < l.length; u++) (0, l[u])(e);
        },
        function (u) {
          for (a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)
            (0, l[u])(void 0);
        }
      ),
      a
    );
  }
  var Jr = G.S;
  G.S = function (t, e) {
    typeof e == "object" &&
      e !== null &&
      typeof e.then == "function" &&
      f0(t, e),
      Jr !== null && Jr(t, e);
  };
  var ql = dt(null);
  function Qi() {
    var t = ql.current;
    return t !== null ? t : pt.pooledCache;
  }
  function vn(t, e) {
    e === null ? bt(ql, ql.current) : bt(ql, e.pool);
  }
  function kr() {
    var t = Qi();
    return t === null ? null : { parent: Ut._currentValue, pool: t };
  }
  var fl = 0,
    ut = null,
    mt = null,
    Dt = null,
    yn = !1,
    va = !1,
    Bl = !1,
    gn = 0,
    uu = 0,
    ya = null,
    s0 = 0;
  function zt() {
    throw Error(f(321));
  }
  function Xi(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ae(t[l], e[l])) return !1;
    return !0;
  }
  function Vi(t, e, l, a, u, n) {
    return (
      (fl = n),
      (ut = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (G.H = t === null || t.memoizedState === null ? Ll : rl),
      (Bl = !1),
      (n = l(a, u)),
      (Bl = !1),
      va && (n = Wr(e, l, a, u)),
      $r(t),
      n
    );
  }
  function $r(t) {
    G.H = Me;
    var e = mt !== null && mt.next !== null;
    if (((fl = 0), (Dt = mt = ut = null), (yn = !1), (uu = 0), (ya = null), e))
      throw Error(f(300));
    t === null ||
      qt ||
      ((t = t.dependencies), t !== null && Rn(t) && (qt = !0));
  }
  function Wr(t, e, l, a) {
    ut = t;
    var u = 0;
    do {
      if ((va && (ya = null), (uu = 0), (va = !1), 25 <= u))
        throw Error(f(301));
      if (((u += 1), (Dt = mt = null), t.updateQueue != null)) {
        var n = t.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (G.H = Yl), (n = e(l, a));
    } while (va);
    return n;
  }
  function o0() {
    var t = G.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? nu(e) : e),
      (t = t.useState()[0]),
      (mt !== null ? mt.memoizedState : null) !== t && (ut.flags |= 1024),
      e
    );
  }
  function Ki() {
    var t = gn !== 0;
    return (gn = 0), t;
  }
  function Ji(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function ki(t) {
    if (yn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      yn = !1;
    }
    (fl = 0), (Dt = mt = ut = null), (va = !1), (uu = gn = 0), (ya = null);
  }
  function te() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Dt === null ? (ut.memoizedState = Dt = t) : (Dt = Dt.next = t), Dt;
  }
  function jt() {
    if (mt === null) {
      var t = ut.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = mt.next;
    var e = Dt === null ? ut.memoizedState : Dt.next;
    if (e !== null) (Dt = e), (mt = t);
    else {
      if (t === null)
        throw ut.alternate === null ? Error(f(467)) : Error(f(310));
      (mt = t),
        (t = {
          memoizedState: mt.memoizedState,
          baseState: mt.baseState,
          baseQueue: mt.baseQueue,
          queue: mt.queue,
          next: null,
        }),
        Dt === null ? (ut.memoizedState = Dt = t) : (Dt = Dt.next = t);
    }
    return Dt;
  }
  var pn;
  pn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function nu(t) {
    var e = uu;
    return (
      (uu += 1),
      ya === null && (ya = []),
      (t = Yr(ya, t, e)),
      (e = ut),
      (Dt === null ? e.memoizedState : Dt.next) === null &&
        ((e = e.alternate),
        (G.H = e === null || e.memoizedState === null ? Ll : rl)),
      t
    );
  }
  function Sn(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return nu(t);
      if (t.$$typeof === N) return Vt(t);
    }
    throw Error(f(438, String(t)));
  }
  function $i(t) {
    var e = null,
      l = ut.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = ut.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = pn()), (ut.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ht;
    return e.index++, l;
  }
  function Ze(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function bn(t) {
    var e = jt();
    return Wi(e, mt, t);
  }
  function Wi(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var u = t.baseQueue,
      n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (e.baseQueue = u = n), (a.pending = null);
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n;
    else {
      e = u.next;
      var r = (c = null),
        h = null,
        b = e,
        z = !1;
      do {
        var j = b.lane & -536870913;
        if (j !== b.lane ? (rt & j) === j : (fl & j) === j) {
          var _ = b.revertLane;
          if (_ === 0)
            h !== null &&
              (h = h.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
              j === ha && (z = !0);
          else if ((fl & _) === _) {
            (b = b.next), _ === ha && (z = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
              h === null ? ((r = h = j), (c = n)) : (h = h.next = j),
              (ut.lanes |= _),
              (pl |= _);
          (j = b.action),
            Bl && l(n, j),
            (n = b.hasEagerState ? b.eagerState : l(n, j));
        } else
          (_ = {
            lane: j,
            revertLane: b.revertLane,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          }),
            h === null ? ((r = h = _), (c = n)) : (h = h.next = _),
            (ut.lanes |= j),
            (pl |= j);
        b = b.next;
      } while (b !== null && b !== e);
      if (
        (h === null ? (c = n) : (h.next = r),
        !ae(n, t.memoizedState) && ((qt = !0), z && ((l = ma), l !== null)))
      )
        throw l;
      (t.memoizedState = n),
        (t.baseState = c),
        (t.baseQueue = h),
        (a.lastRenderedState = n);
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Fi(t) {
    var e = jt(),
      l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState;
    if (u !== null) {
      l.pending = null;
      var c = (u = u.next);
      do (n = t(n, c.action)), (c = c.next);
      while (c !== u);
      ae(n, e.memoizedState) || (qt = !0),
        (e.memoizedState = n),
        e.baseQueue === null && (e.baseState = n),
        (l.lastRenderedState = n);
    }
    return [n, a];
  }
  function Fr(t, e, l) {
    var a = ut,
      u = jt(),
      n = st;
    if (n) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = e();
    var c = !ae((mt || u).memoizedState, l);
    if (
      (c && ((u.memoizedState = l), (qt = !0)),
      (u = u.queue),
      tc(ts.bind(null, a, u, t), [t]),
      u.getSnapshot !== e || c || (Dt !== null && Dt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ga(9, Ir.bind(null, a, u, l, e), { destroy: void 0 }, null),
        pt === null)
      )
        throw Error(f(349));
      n || (fl & 60) !== 0 || Pr(a, e, l);
    }
    return l;
  }
  function Pr(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = ut.updateQueue),
      e === null
        ? ((e = pn()), (ut.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function Ir(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), es(e) && ls(t);
  }
  function ts(t, e, l) {
    return l(function () {
      es(e) && ls(t);
    });
  }
  function es(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ae(t, l);
    } catch {
      return !0;
    }
  }
  function ls(t) {
    var e = nl(t, 2);
    e !== null && Wt(e, t, 2);
  }
  function Pi(t) {
    var e = te();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Bl)) {
        ll(!0);
        try {
          l();
        } finally {
          ll(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ze,
        lastRenderedState: t,
      }),
      e
    );
  }
  function as(t, e, l, a) {
    return (t.baseState = l), Wi(t, mt, typeof a == "function" ? a : Ze);
  }
  function d0(t, e, l, a, u) {
    if (Tn(t)) throw Error(f(485));
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      G.T !== null ? l(!0) : (n.isTransition = !1),
        a(n),
        (l = e.pending),
        l === null
          ? ((n.next = e.pending = n), us(e, n))
          : ((n.next = l.next), (e.pending = l.next = n));
    }
  }
  function us(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state;
    if (e.isTransition) {
      var n = G.T,
        c = {};
      G.T = c;
      try {
        var r = l(u, a),
          h = G.S;
        h !== null && h(c, r), ns(t, e, r);
      } catch (b) {
        Ii(t, e, b);
      } finally {
        G.T = n;
      }
    } else
      try {
        (n = l(u, a)), ns(t, e, n);
      } catch (b) {
        Ii(t, e, b);
      }
  }
  function ns(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            is(t, e, a);
          },
          function (a) {
            return Ii(t, e, a);
          }
        )
      : is(t, e, l);
  }
  function is(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      cs(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), us(t, l)));
  }
  function Ii(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), cs(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function cs(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function fs(t, e) {
    return e;
  }
  function rs(t, e) {
    if (st) {
      var l = pt.formState;
      if (l !== null) {
        t: {
          var a = ut;
          if (st) {
            if (wt) {
              e: {
                for (var u = wt, n = Oe; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break e;
                  }
                  if (((u = Te(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (wt = Te(u.nextSibling)), (a = u.data === "F!");
                break t;
              }
            }
            Ul(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = te()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fs,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = Os.bind(null, ut, a)),
      (a.dispatch = l),
      (a = Pi(!1)),
      (n = nc.bind(null, ut, !1, a.queue)),
      (a = te()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = u),
      (l = d0.bind(null, ut, u, n, l)),
      (u.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function ss(t) {
    var e = jt();
    return os(e, mt, t);
  }
  function os(t, e, l) {
    (e = Wi(t, e, fs)[0]),
      (t = bn(Ze)[0]),
      (e =
        typeof e == "object" && e !== null && typeof e.then == "function"
          ? nu(e)
          : e);
    var a = jt(),
      u = a.queue,
      n = u.dispatch;
    return (
      l !== a.memoizedState &&
        ((ut.flags |= 2048),
        ga(9, h0.bind(null, u, l), { destroy: void 0 }, null)),
      [e, n, t]
    );
  }
  function h0(t, e) {
    t.action = e;
  }
  function ds(t) {
    var e = jt(),
      l = mt;
    if (l !== null) return os(e, l, t);
    jt(), (e = e.memoizedState), (l = jt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function ga(t, e, l, a) {
    return (
      (t = { tag: t, create: e, inst: l, deps: a, next: null }),
      (e = ut.updateQueue),
      e === null && ((e = pn()), (ut.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function hs() {
    return jt().memoizedState;
  }
  function En(t, e, l, a) {
    var u = te();
    (ut.flags |= t),
      (u.memoizedState = ga(
        1 | e,
        l,
        { destroy: void 0 },
        a === void 0 ? null : a
      ));
  }
  function xn(t, e, l, a) {
    var u = jt();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    mt !== null && a !== null && Xi(a, mt.memoizedState.deps)
      ? (u.memoizedState = ga(e, l, n, a))
      : ((ut.flags |= t), (u.memoizedState = ga(1 | e, l, n, a)));
  }
  function ms(t, e) {
    En(8390656, 8, t, e);
  }
  function tc(t, e) {
    xn(2048, 8, t, e);
  }
  function vs(t, e) {
    return xn(4, 2, t, e);
  }
  function ys(t, e) {
    return xn(4, 4, t, e);
  }
  function gs(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function ps(t, e, l) {
    (l = l != null ? l.concat([t]) : null), xn(4, 4, gs.bind(null, e, t), l);
  }
  function ec() {}
  function Ss(t, e) {
    var l = jt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Xi(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function bs(t, e) {
    var l = jt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Xi(e, a[1])) return a[0];
    if (((a = t()), Bl)) {
      ll(!0);
      try {
        t();
      } finally {
        ll(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function lc(t, e, l) {
    return l === void 0 || (fl & 1073741824) !== 0
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = To()), (ut.lanes |= t), (pl |= t), l);
  }
  function Es(t, e, l, a) {
    return ae(l, e)
      ? l
      : da.current !== null
      ? ((t = lc(t, l, a)), ae(t, e) || (qt = !0), t)
      : (fl & 42) === 0
      ? ((qt = !0), (t.memoizedState = l))
      : ((t = To()), (ut.lanes |= t), (pl |= t), e);
  }
  function xs(t, e, l, a, u) {
    var n = w.p;
    w.p = n !== 0 && 8 > n ? n : 8;
    var c = G.T,
      r = {};
    (G.T = r), nc(t, !1, e, l);
    try {
      var h = u(),
        b = G.S;
      if (
        (b !== null && b(r, h),
        h !== null && typeof h == "object" && typeof h.then == "function")
      ) {
        var z = r0(h, a);
        iu(t, e, z, ce(t));
      } else iu(t, e, a, ce(t));
    } catch (j) {
      iu(t, e, { then: function () {}, status: "rejected", reason: j }, ce());
    } finally {
      (w.p = n), (G.T = c);
    }
  }
  function m0() {}
  function ac(t, e, l, a) {
    if (t.tag !== 5) throw Error(f(476));
    var u = Ts(t).queue;
    xs(
      t,
      u,
      e,
      ft,
      l === null
        ? m0
        : function () {
            return _s(t), l(a);
          }
    );
  }
  function Ts(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ft,
      baseState: ft,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ze,
        lastRenderedState: ft,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ze,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function _s(t) {
    var e = Ts(t).next.queue;
    iu(t, e, {}, ce());
  }
  function uc() {
    return Vt(Ru);
  }
  function As() {
    return jt().memoizedState;
  }
  function Rs() {
    return jt().memoizedState;
  }
  function v0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ce();
          t = dl(l);
          var a = hl(e, t, l);
          a !== null && (Wt(a, e, l), ru(a, e, l)),
            (e = { cache: Zi() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function y0(t, e, l) {
    var a = ce();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tn(t)
        ? zs(e, l)
        : ((l = Ui(t, e, l, a)), l !== null && (Wt(l, t, a), Ms(l, e, a)));
  }
  function Os(t, e, l) {
    var a = ce();
    iu(t, e, l, a);
  }
  function iu(t, e, l, a) {
    var u = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Tn(t)) zs(e, u);
    else {
      var n = t.alternate;
      if (
        t.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = e.lastRenderedReducer), n !== null)
      )
        try {
          var c = e.lastRenderedState,
            r = n(c, l);
          if (((u.hasEagerState = !0), (u.eagerState = r), ae(r, c)))
            return nn(t, e, u, 0), pt === null && un(), !1;
        } catch {
        } finally {
        }
      if (((l = Ui(t, e, u, a)), l !== null))
        return Wt(l, t, a), Ms(l, e, a), !0;
    }
    return !1;
  }
  function nc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: kc(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tn(t))
    ) {
      if (e) throw Error(f(479));
    } else (e = Ui(t, l, a, 2)), e !== null && Wt(e, t, 2);
  }
  function Tn(t) {
    var e = t.alternate;
    return t === ut || (e !== null && e === ut);
  }
  function zs(t, e) {
    va = yn = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function Ms(t, e, l) {
    if ((l & 4194176) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), wf(t, l);
    }
  }
  var Me = {
    readContext: Vt,
    use: Sn,
    useCallback: zt,
    useContext: zt,
    useEffect: zt,
    useImperativeHandle: zt,
    useLayoutEffect: zt,
    useInsertionEffect: zt,
    useMemo: zt,
    useReducer: zt,
    useRef: zt,
    useState: zt,
    useDebugValue: zt,
    useDeferredValue: zt,
    useTransition: zt,
    useSyncExternalStore: zt,
    useId: zt,
  };
  (Me.useCacheRefresh = zt),
    (Me.useMemoCache = zt),
    (Me.useHostTransitionStatus = zt),
    (Me.useFormState = zt),
    (Me.useActionState = zt),
    (Me.useOptimistic = zt);
  var Ll = {
    readContext: Vt,
    use: Sn,
    useCallback: function (t, e) {
      return (te().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Vt,
    useEffect: ms,
    useImperativeHandle: function (t, e, l) {
      (l = l != null ? l.concat([t]) : null),
        En(4194308, 4, gs.bind(null, e, t), l);
    },
    useLayoutEffect: function (t, e) {
      return En(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      En(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var l = te();
      e = e === void 0 ? null : e;
      var a = t();
      if (Bl) {
        ll(!0);
        try {
          t();
        } finally {
          ll(!1);
        }
      }
      return (l.memoizedState = [a, e]), a;
    },
    useReducer: function (t, e, l) {
      var a = te();
      if (l !== void 0) {
        var u = l(e);
        if (Bl) {
          ll(!0);
          try {
            l(e);
          } finally {
            ll(!1);
          }
        }
      } else u = e;
      return (
        (a.memoizedState = a.baseState = u),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u,
        }),
        (a.queue = t),
        (t = t.dispatch = y0.bind(null, ut, t)),
        [a.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = te();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: function (t) {
      t = Pi(t);
      var e = t.queue,
        l = Os.bind(null, ut, e);
      return (e.dispatch = l), [t.memoizedState, l];
    },
    useDebugValue: ec,
    useDeferredValue: function (t, e) {
      var l = te();
      return lc(l, t, e);
    },
    useTransition: function () {
      var t = Pi(!1);
      return (
        (t = xs.bind(null, ut, t.queue, !0, !1)),
        (te().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, e, l) {
      var a = ut,
        u = te();
      if (st) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else {
        if (((l = e()), pt === null)) throw Error(f(349));
        (rt & 60) !== 0 || Pr(a, e, l);
      }
      u.memoizedState = l;
      var n = { value: l, getSnapshot: e };
      return (
        (u.queue = n),
        ms(ts.bind(null, a, n, t), [t]),
        (a.flags |= 2048),
        ga(9, Ir.bind(null, a, n, l, e), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var t = te(),
        e = pt.identifierPrefix;
      if (st) {
        var l = Ye,
          a = Le;
        (l = (a & ~(1 << (32 - le(a) - 1))).toString(32) + l),
          (e = ":" + e + "R" + l),
          (l = gn++),
          0 < l && (e += "H" + l.toString(32)),
          (e += ":");
      } else (l = s0++), (e = ":" + e + "r" + l.toString(32) + ":");
      return (t.memoizedState = e);
    },
    useCacheRefresh: function () {
      return (te().memoizedState = v0.bind(null, ut));
    },
  };
  (Ll.useMemoCache = $i),
    (Ll.useHostTransitionStatus = uc),
    (Ll.useFormState = rs),
    (Ll.useActionState = rs),
    (Ll.useOptimistic = function (t) {
      var e = te();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = l), (e = nc.bind(null, ut, !0, l)), (l.dispatch = e), [t, e]
      );
    });
  var rl = {
    readContext: Vt,
    use: Sn,
    useCallback: Ss,
    useContext: Vt,
    useEffect: tc,
    useImperativeHandle: ps,
    useInsertionEffect: vs,
    useLayoutEffect: ys,
    useMemo: bs,
    useReducer: bn,
    useRef: hs,
    useState: function () {
      return bn(Ze);
    },
    useDebugValue: ec,
    useDeferredValue: function (t, e) {
      var l = jt();
      return Es(l, mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = bn(Ze)[0],
        e = jt().memoizedState;
      return [typeof t == "boolean" ? t : nu(t), e];
    },
    useSyncExternalStore: Fr,
    useId: As,
  };
  (rl.useCacheRefresh = Rs),
    (rl.useMemoCache = $i),
    (rl.useHostTransitionStatus = uc),
    (rl.useFormState = ss),
    (rl.useActionState = ss),
    (rl.useOptimistic = function (t, e) {
      var l = jt();
      return as(l, mt, t, e);
    });
  var Yl = {
    readContext: Vt,
    use: Sn,
    useCallback: Ss,
    useContext: Vt,
    useEffect: tc,
    useImperativeHandle: ps,
    useInsertionEffect: vs,
    useLayoutEffect: ys,
    useMemo: bs,
    useReducer: Fi,
    useRef: hs,
    useState: function () {
      return Fi(Ze);
    },
    useDebugValue: ec,
    useDeferredValue: function (t, e) {
      var l = jt();
      return mt === null ? lc(l, t, e) : Es(l, mt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Fi(Ze)[0],
        e = jt().memoizedState;
      return [typeof t == "boolean" ? t : nu(t), e];
    },
    useSyncExternalStore: Fr,
    useId: As,
  };
  (Yl.useCacheRefresh = Rs),
    (Yl.useMemoCache = $i),
    (Yl.useHostTransitionStatus = uc),
    (Yl.useFormState = ds),
    (Yl.useActionState = ds),
    (Yl.useOptimistic = function (t, e) {
      var l = jt();
      return mt !== null
        ? as(l, mt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    });
  function ic(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : lt({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var cc = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? F(t) === t : !1;
    },
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        u = dl(a);
      (u.payload = e),
        l != null && (u.callback = l),
        (e = hl(t, u, a)),
        e !== null && (Wt(e, t, a), ru(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ce(),
        u = dl(a);
      (u.tag = 1),
        (u.payload = e),
        l != null && (u.callback = l),
        (e = hl(t, u, a)),
        e !== null && (Wt(e, t, a), ru(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ce(),
        a = dl(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = hl(t, a, l)),
        e !== null && (Wt(e, t, l), ru(e, t, l));
    },
  };
  function Ds(t, e, l, a, u, n, c) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, n, c)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Ja(l, a) || !Ja(u, n)
        : !0
    );
  }
  function js(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && cc.enqueueReplaceState(e, e.state, null);
  }
  function wl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = lt({}, l));
      for (var u in t) l[u] === void 0 && (l[u] = t[u]);
    }
    return l;
  }
  var _n =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var e = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(e)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        };
  function Cs(t) {
    _n(t);
  }
  function Ns(t) {
    console.error(t);
  }
  function Us(t) {
    _n(t);
  }
  function An(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Hs(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function fc(t, e, l) {
    return (
      (l = dl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        An(t, e);
      }),
      l
    );
  }
  function qs(t) {
    return (t = dl(t)), (t.tag = 3), t;
  }
  function Bs(t, e, l, a) {
    var u = l.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      (t.payload = function () {
        return u(n);
      }),
        (t.callback = function () {
          Hs(e, l, a);
        });
    }
    var c = l.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (t.callback = function () {
        Hs(e, l, a),
          typeof u != "function" &&
            (Sl === null ? (Sl = new Set([this])) : Sl.add(this));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function g0(t, e, l, a, u) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && fu(e, l, u, !0),
        (l = me.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              ze === null ? Qc() : l.alternate === null && At === 0 && (At = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = u),
              a === Li
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Vc(t, a, u)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === Li
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Vc(t, a, u)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return Vc(t, a, u), Qc(), !1;
    }
    if (st)
      return (
        (e = me.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            a !== Bi && ((t = Error(f(422), { cause: a })), Fa(oe(t, l))))
          : (a !== Bi && ((e = Error(f(423), { cause: a })), Fa(oe(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (a = oe(a, l)),
            (u = fc(t.stateNode, a, u)),
            Tc(t, u),
            At !== 4 && (At = 2)),
        !1
      );
    var n = Error(f(520), { cause: a });
    if (
      ((n = oe(n, l)),
      gu === null ? (gu = [n]) : gu.push(n),
      At !== 4 && (At = 2),
      e === null)
    )
      return !0;
    (a = oe(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = u & -u),
            (l.lanes |= t),
            (t = fc(l.stateNode, a, t)),
            Tc(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (n = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (Sl === null || !Sl.has(n)))))
          )
            return (
              (l.flags |= 65536),
              (u &= -u),
              (l.lanes |= u),
              (u = qs(u)),
              Bs(u, t, l, a),
              Tc(l, u),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ls = Error(f(461)),
    qt = !1;
  function Zt(t, e, l, a) {
    e.child = t === null ? Qr(e, null, l, a) : Hl(e, t.child, l, a);
  }
  function Ys(t, e, l, a, u) {
    l = l.render;
    var n = e.ref;
    if ("ref" in a) {
      var c = {};
      for (var r in a) r !== "ref" && (c[r] = a[r]);
    } else c = a;
    return (
      Gl(e),
      (a = Vi(t, e, l, c, n, u)),
      (r = Ki()),
      t !== null && !qt
        ? (Ji(t, e, u), Ge(t, e, u))
        : (st && r && Hi(e), (e.flags |= 1), Zt(t, e, a, u), e.child)
    );
  }
  function ws(t, e, l, a, u) {
    if (t === null) {
      var n = l.type;
      return typeof n == "function" &&
        !jc(n) &&
        n.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = n), Zs(t, e, n, a, u))
        : ((t = Dn(l.type, null, a, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((n = t.child), !gc(t, u))) {
      var c = n.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ja), l(c, a) && t.ref === e.ref)
      )
        return Ge(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = gl(n, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zs(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Ja(n, a) && t.ref === e.ref)
        if (((qt = !1), (e.pendingProps = a = n), gc(t, u)))
          (t.flags & 131072) !== 0 && (qt = !0);
        else return (e.lanes = t.lanes), Ge(t, e, u);
    }
    return rc(t, e, l, a, u);
  }
  function Gs(t, e, l) {
    var a = e.pendingProps,
      u = a.children,
      n = (e.stateNode._pendingVisibility & 2) !== 0,
      c = t !== null ? t.memoizedState : null;
    if ((cu(t, e), a.mode === "hidden" || n)) {
      if ((e.flags & 128) !== 0) {
        if (((a = c !== null ? c.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          e.childLanes = n & ~a;
        } else (e.childLanes = 0), (e.child = null);
        return Qs(t, e, a, l);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && vn(e, c !== null ? c.cachePool : null),
          c !== null ? Xr(e, c) : Yi(),
          Vr(e);
      else
        return (
          (e.lanes = e.childLanes = 536870912),
          Qs(t, e, c !== null ? c.baseLanes | l : l, l)
        );
    } else
      c !== null
        ? (vn(e, c.cachePool), Xr(e, c), cl(), (e.memoizedState = null))
        : (t !== null && vn(e, null), Yi(), cl());
    return Zt(t, e, u, l), e.child;
  }
  function Qs(t, e, l, a) {
    var u = Qi();
    return (
      (u = u === null ? null : { parent: Ut._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: l, cachePool: u }),
      t !== null && vn(e, null),
      Yi(),
      Vr(e),
      t !== null && fu(t, e, a, !0),
      null
    );
  }
  function cu(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (t === null || t.ref !== l) && (e.flags |= 2097664);
    }
  }
  function rc(t, e, l, a, u) {
    return (
      Gl(e),
      (l = Vi(t, e, l, a, void 0, u)),
      (a = Ki()),
      t !== null && !qt
        ? (Ji(t, e, u), Ge(t, e, u))
        : (st && a && Hi(e), (e.flags |= 1), Zt(t, e, l, u), e.child)
    );
  }
  function Xs(t, e, l, a, u, n) {
    return (
      Gl(e),
      (e.updateQueue = null),
      (l = Wr(e, a, l, u)),
      $r(t),
      (a = Ki()),
      t !== null && !qt
        ? (Ji(t, e, n), Ge(t, e, n))
        : (st && a && Hi(e), (e.flags |= 1), Zt(t, e, l, n), e.child)
    );
  }
  function Vs(t, e, l, a, u) {
    if ((Gl(e), e.stateNode === null)) {
      var n = fa,
        c = l.contextType;
      typeof c == "object" && c !== null && (n = Vt(c)),
        (n = new l(a, n)),
        (e.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = cc),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        Ec(e),
        (c = l.contextType),
        (n.context = typeof c == "object" && c !== null ? Vt(c) : fa),
        (n.state = e.memoizedState),
        (c = l.getDerivedStateFromProps),
        typeof c == "function" && (ic(e, l, c, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && cc.enqueueReplaceState(n, n.state, null),
          ou(e, a, n, u),
          su(),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      n = e.stateNode;
      var r = e.memoizedProps,
        h = wl(l, r);
      n.props = h;
      var b = n.context,
        z = l.contextType;
      (c = fa), typeof z == "object" && z !== null && (c = Vt(z));
      var j = l.getDerivedStateFromProps;
      (z =
        typeof j == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (r = e.pendingProps !== r),
        z ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((r || b !== c) && js(e, n, a, c)),
        (ol = !1);
      var _ = e.memoizedState;
      (n.state = _),
        ou(e, a, n, u),
        su(),
        (b = e.memoizedState),
        r || _ !== b || ol
          ? (typeof j == "function" && (ic(e, l, j, a), (b = e.memoizedState)),
            (h = ol || Ds(e, l, h, a, _, b, c))
              ? (z ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = b)),
            (n.props = a),
            (n.state = b),
            (n.context = c),
            (a = h))
          : (typeof n.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (n = e.stateNode),
        xc(t, e),
        (c = e.memoizedProps),
        (z = wl(l, c)),
        (n.props = z),
        (j = e.pendingProps),
        (_ = n.context),
        (b = l.contextType),
        (h = fa),
        typeof b == "object" && b !== null && (h = Vt(b)),
        (r = l.getDerivedStateFromProps),
        (b =
          typeof r == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== j || _ !== h) && js(e, n, a, h)),
        (ol = !1),
        (_ = e.memoizedState),
        (n.state = _),
        ou(e, a, n, u),
        su();
      var O = e.memoizedState;
      c !== j ||
      _ !== O ||
      ol ||
      (t !== null && t.dependencies !== null && Rn(t.dependencies))
        ? (typeof r == "function" && (ic(e, l, r, a), (O = e.memoizedState)),
          (z =
            ol ||
            Ds(e, l, z, a, _, O, h) ||
            (t !== null && t.dependencies !== null && Rn(t.dependencies)))
            ? (b ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(a, O, h),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(a, O, h)),
              typeof n.componentDidUpdate == "function" && (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === t.memoizedProps && _ === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = O)),
          (n.props = a),
          (n.state = O),
          (n.context = h),
          (a = z))
        : (typeof n.componentDidUpdate != "function" ||
            (c === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === t.memoizedProps && _ === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (n = a),
      cu(t, e),
      (a = (e.flags & 128) !== 0),
      n || a
        ? ((n = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Hl(e, t.child, null, u)),
              (e.child = Hl(e, null, l, u)))
            : Zt(t, e, l, u),
          (e.memoizedState = n.state),
          (t = e.child))
        : (t = Ge(t, e, u)),
      t
    );
  }
  function Ks(t, e, l, a) {
    return Wa(), (e.flags |= 256), Zt(t, e, l, a), e.child;
  }
  var sc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function oc(t) {
    return { baseLanes: t, cachePool: kr() };
  }
  function dc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= pe), t;
  }
  function Js(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          t !== null && t.memoizedState === null ? !1 : (Nt.current & 2) !== 0),
      c && ((u = !0), (e.flags &= -129)),
      (c = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if ((u ? il(e) : cl(), st)) {
          var r = wt,
            h;
          if ((h = r)) {
            t: {
              for (h = r, r = Oe; h.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break t;
                }
                if (((h = Te(h.nextSibling)), h === null)) {
                  r = null;
                  break t;
                }
              }
              r = h;
            }
            r !== null
              ? ((e.memoizedState = {
                  dehydrated: r,
                  treeContext: Cl !== null ? { id: Le, overflow: Ye } : null,
                  retryLane: 536870912,
                }),
                (h = ge(18, null, null, 0)),
                (h.stateNode = r),
                (h.return = e),
                (e.child = h),
                ($t = e),
                (wt = null),
                (h = !0))
              : (h = !1);
          }
          h || Ul(e);
        }
        if (
          ((r = e.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null))
        )
          return r.data === "$!" ? (e.lanes = 16) : (e.lanes = 536870912), null;
        we(e);
      }
      return (
        (r = a.children),
        (a = a.fallback),
        u
          ? (cl(),
            (u = e.mode),
            (r = mc({ mode: "hidden", children: r }, u)),
            (a = Xl(a, u, l, null)),
            (r.return = e),
            (a.return = e),
            (r.sibling = a),
            (e.child = r),
            (u = e.child),
            (u.memoizedState = oc(l)),
            (u.childLanes = dc(t, c, l)),
            (e.memoizedState = sc),
            a)
          : (il(e), hc(e, r))
      );
    }
    if (
      ((h = t.memoizedState), h !== null && ((r = h.dehydrated), r !== null))
    ) {
      if (n)
        e.flags & 256
          ? (il(e), (e.flags &= -257), (e = vc(t, e, l)))
          : e.memoizedState !== null
          ? (cl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (cl(),
            (u = a.fallback),
            (r = e.mode),
            (a = mc({ mode: "visible", children: a.children }, r)),
            (u = Xl(u, r, l, null)),
            (u.flags |= 2),
            (a.return = e),
            (u.return = e),
            (a.sibling = u),
            (e.child = a),
            Hl(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = oc(l)),
            (a.childLanes = dc(t, c, l)),
            (e.memoizedState = sc),
            (e = u));
      else if ((il(e), r.data === "$!")) {
        if (((c = r.nextSibling && r.nextSibling.dataset), c)) var b = c.dgst;
        (c = b),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = c),
          Fa({ value: a, source: null, stack: null }),
          (e = vc(t, e, l));
      } else if (
        (qt || fu(t, e, l, !1), (c = (l & t.childLanes) !== 0), qt || c)
      ) {
        if (((c = pt), c !== null)) {
          if (((a = l & -l), (a & 42) !== 0)) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
                break;
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
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (
            ((a = (a & (c.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== h.retryLane)
          )
            throw ((h.retryLane = a), nl(t, a), Wt(c, t, a), Ls);
        }
        r.data === "$?" || Qc(), (e = vc(t, e, l));
      } else
        r.data === "$?"
          ? ((e.flags |= 128),
            (e.child = t.child),
            (e = C0.bind(null, t)),
            (r._reactRetry = e),
            (e = null))
          : ((t = h.treeContext),
            (wt = Te(r.nextSibling)),
            ($t = e),
            (st = !0),
            (Ee = null),
            (Oe = !1),
            t !== null &&
              ((de[he++] = Le),
              (de[he++] = Ye),
              (de[he++] = Cl),
              (Le = t.id),
              (Ye = t.overflow),
              (Cl = e)),
            (e = hc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (cl(),
        (u = a.fallback),
        (r = e.mode),
        (h = t.child),
        (b = h.sibling),
        (a = gl(h, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 31457280),
        b !== null ? (u = gl(b, u)) : ((u = Xl(u, r, l, null)), (u.flags |= 2)),
        (u.return = e),
        (a.return = e),
        (a.sibling = u),
        (e.child = a),
        (a = u),
        (u = e.child),
        (r = t.child.memoizedState),
        r === null
          ? (r = oc(l))
          : ((h = r.cachePool),
            h !== null
              ? ((b = Ut._currentValue),
                (h = h.parent !== b ? { parent: b, pool: b } : h))
              : (h = kr()),
            (r = { baseLanes: r.baseLanes | l, cachePool: h })),
        (u.memoizedState = r),
        (u.childLanes = dc(t, c, l)),
        (e.memoizedState = sc),
        a)
      : (il(e),
        (l = t.child),
        (t = l.sibling),
        (l = gl(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((c = e.deletions),
          c === null ? ((e.deletions = [t]), (e.flags |= 16)) : c.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function hc(t, e) {
    return (
      (e = mc({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function mc(t, e) {
    return bo(t, e, 0, null);
  }
  function vc(t, e, l) {
    return (
      Hl(e, t.child, null, l),
      (t = hc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function ks(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Sc(t.return, e, l);
  }
  function yc(t, e, l, a, u) {
    var n = t.memoizedState;
    n === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: u,
        })
      : ((n.isBackwards = e),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = a),
        (n.tail = l),
        (n.tailMode = u));
  }
  function $s(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail;
    if ((Zt(t, e, a.children, l), (a = Nt.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (e.flags |= 128);
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && ks(t, l, e);
          else if (t.tag === 19) ks(t, l, e);
          else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      a &= 1;
    }
    switch ((bt(Nt, a), u)) {
      case "forwards":
        for (l = e.child, u = null; l !== null; )
          (t = l.alternate),
            t !== null && mn(t) === null && (u = l),
            (l = l.sibling);
        (l = u),
          l === null
            ? ((u = e.child), (e.child = null))
            : ((u = l.sibling), (l.sibling = null)),
          yc(e, !1, u, l, n);
        break;
      case "backwards":
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && mn(t) === null)) {
            e.child = u;
            break;
          }
          (t = u.sibling), (u.sibling = l), (l = u), (u = t);
        }
        yc(e, !0, l, null, n);
        break;
      case "together":
        yc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ge(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (pl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((fu(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(f(153));
    if (e.child !== null) {
      for (
        t = e.child, l = gl(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = gl(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function gc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Rn(t)));
  }
  function p0(t, e, l) {
    switch (e.tag) {
      case 3:
        Zu(e, e.stateNode.containerInfo),
          sl(e, Ut, t.memoizedState.cache),
          Wa();
        break;
      case 27:
      case 5:
        ci(e);
        break;
      case 4:
        Zu(e, e.stateNode.containerInfo);
        break;
      case 10:
        sl(e, e.type, e.memoizedProps.value);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (il(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? Js(t, e, l)
            : (il(e), (t = Ge(t, e, l)), t !== null ? t.sibling : null);
        il(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (fu(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          u)
        ) {
          if (a) return $s(t, e, l);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          bt(Nt, Nt.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (e.lanes = 0), Gs(t, e, l);
      case 24:
        sl(e, Ut, t.memoizedState.cache);
    }
    return Ge(t, e, l);
  }
  function Ws(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) qt = !0;
      else {
        if (!gc(t, l) && (e.flags & 128) === 0) return (qt = !1), p0(t, e, l);
        qt = (t.flags & 131072) !== 0;
      }
    else (qt = !1), st && (e.flags & 1048576) !== 0 && Ur(e, rn, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps;
          var a = e.elementType,
            u = a._init;
          if (((a = u(a._payload)), (e.type = a), typeof a == "function"))
            jc(a)
              ? ((t = wl(a, t)), (e.tag = 1), (e = Vs(null, e, a, t, l)))
              : ((e.tag = 0), (e = rc(null, e, a, t, l)));
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === U)) {
                (e.tag = 11), (e = Ys(null, e, a, t, l));
                break t;
              } else if (u === B) {
                (e.tag = 14), (e = ws(null, e, a, t, l));
                break t;
              }
            }
            throw ((e = Qt(a) || a), Error(f(306, e, "")));
          }
        }
        return e;
      case 0:
        return rc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (u = wl(a, e.pendingProps)), Vs(t, e, a, u, l);
      case 3:
        t: {
          if ((Zu(e, e.stateNode.containerInfo), t === null))
            throw Error(f(387));
          var n = e.pendingProps;
          (u = e.memoizedState), (a = u.element), xc(t, e), ou(e, n, null, l);
          var c = e.memoizedState;
          if (
            ((n = c.cache),
            sl(e, Ut, n),
            n !== u.cache && bc(e, [Ut], l, !0),
            su(),
            (n = c.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: n, isDehydrated: !1, cache: c.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Ks(t, e, n, l);
              break t;
            } else if (n !== a) {
              (a = oe(Error(f(424)), e)), Fa(a), (e = Ks(t, e, n, l));
              break t;
            } else
              for (
                wt = Te(e.stateNode.containerInfo.firstChild),
                  $t = e,
                  st = !0,
                  Ee = null,
                  Oe = !0,
                  l = Qr(e, null, n, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((Wa(), n === a)) {
              e = Ge(t, e, l);
              break t;
            }
            Zt(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          cu(t, e),
          t === null
            ? (l = td(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Gn(el.current).createElement(l)),
                (a[Xt] = e),
                (a[Pt] = t),
                Gt(a, l, t),
                Ht(a),
                (e.stateNode = a))
            : (e.memoizedState = td(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ci(e),
          t === null &&
            st &&
            ((a = e.stateNode = Fo(e.type, e.pendingProps, el.current)),
            ($t = e),
            (Oe = !0),
            (wt = Te(a.firstChild))),
          (a = e.pendingProps.children),
          t !== null || st ? Zt(t, e, a, l) : (e.child = Hl(e, null, a, l)),
          cu(t, e),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((u = a = wt) &&
              ((a = k0(a, e.type, e.pendingProps, Oe)),
              a !== null
                ? ((e.stateNode = a),
                  ($t = e),
                  (wt = Te(a.firstChild)),
                  (Oe = !1),
                  (u = !0))
                : (u = !1)),
            u || Ul(e)),
          ci(e),
          (u = e.type),
          (n = e.pendingProps),
          (c = t !== null ? t.memoizedProps : null),
          (a = n.children),
          af(u, n) ? (a = null) : c !== null && af(u, c) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Vi(t, e, o0, null, null, l)), (Ru._currentValue = u)),
          cu(t, e),
          Zt(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = wt) &&
              ((l = $0(l, e.pendingProps, Oe)),
              l !== null
                ? ((e.stateNode = l), ($t = e), (wt = null), (t = !0))
                : (t = !1)),
            t || Ul(e)),
          null
        );
      case 13:
        return Js(t, e, l);
      case 4:
        return (
          Zu(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Hl(e, null, a, l)) : Zt(t, e, a, l),
          e.child
        );
      case 11:
        return Ys(t, e, e.type, e.pendingProps, l);
      case 7:
        return Zt(t, e, e.pendingProps, l), e.child;
      case 8:
        return Zt(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return Zt(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          sl(e, e.type, a.value),
          Zt(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (a = e.pendingProps.children),
          Gl(e),
          (u = Vt(u)),
          (a = a(u)),
          (e.flags |= 1),
          Zt(t, e, a, l),
          e.child
        );
      case 14:
        return ws(t, e, e.type, e.pendingProps, l);
      case 15:
        return Zs(t, e, e.type, e.pendingProps, l);
      case 19:
        return $s(t, e, l);
      case 22:
        return Gs(t, e, l);
      case 24:
        return (
          Gl(e),
          (a = Vt(Ut)),
          t === null
            ? ((u = Qi()),
              u === null &&
                ((u = pt),
                (n = Zi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= l),
                (u = n)),
              (e.memoizedState = { parent: a, cache: u }),
              Ec(e),
              sl(e, Ut, u))
            : ((t.lanes & l) !== 0 && (xc(t, e), ou(e, null, null, l), su()),
              (u = t.memoizedState),
              (n = e.memoizedState),
              u.parent !== a
                ? ((u = { parent: a, cache: a }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  sl(e, Ut, a))
                : ((a = n.cache),
                  sl(e, Ut, a),
                  a !== u.cache && bc(e, [Ut], l, !0))),
          Zt(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(f(156, e.tag));
  }
  var pc = dt(null),
    Zl = null,
    Qe = null;
  function sl(t, e, l) {
    bt(pc, e._currentValue), (e._currentValue = l);
  }
  function Xe(t) {
    (t._currentValue = pc.current), Mt(pc);
  }
  function Sc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function bc(t, e, l, a) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var r = n;
          n = u;
          for (var h = 0; h < e.length; h++)
            if (r.context === e[h]) {
              (n.lanes |= l),
                (r = n.alternate),
                r !== null && (r.lanes |= l),
                Sc(n.return, l, t),
                a || (c = null);
              break t;
            }
          n = r.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(f(341));
        (c.lanes |= l),
          (n = c.alternate),
          n !== null && (n.lanes |= l),
          Sc(c, l, t),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === t) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function fu(t, e, l, a) {
    t = null;
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(f(387));
        if (((c = c.memoizedProps), c !== null)) {
          var r = u.type;
          ae(u.pendingProps.value, c.value) ||
            (t !== null ? t.push(r) : (t = [r]));
        }
      } else if (u === wu.current) {
        if (((c = u.alternate), c === null)) throw Error(f(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Ru) : (t = [Ru]));
      }
      u = u.return;
    }
    t !== null && bc(e, t, l, a), (e.flags |= 262144);
  }
  function Rn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ae(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Gl(t) {
    (Zl = t),
      (Qe = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function Vt(t) {
    return Fs(Zl, t);
  }
  function On(t, e) {
    return Zl === null && Gl(t), Fs(t, e);
  }
  function Fs(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Qe === null)) {
      if (t === null) throw Error(f(308));
      (Qe = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Qe = Qe.next = e;
    return l;
  }
  var ol = !1;
  function Ec(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xc(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function dl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (xt & 2) !== 0)) {
      var u = a.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (a.pending = e),
        (e = cn(t)),
        Cr(t, null, l),
        e
      );
    }
    return nn(t, a, e, l), cn(t);
  }
  function ru(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194176) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), wf(t, l);
    }
  }
  function Tc(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var c = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (l = l.next);
        } while (l !== null);
        n === null ? (u = n = e) : (n = n.next = e);
      } else u = n = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var _c = !1;
  function su() {
    if (_c) {
      var t = ma;
      if (t !== null) throw t;
    }
  }
  function ou(t, e, l, a) {
    _c = !1;
    var u = t.updateQueue;
    ol = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      r = u.shared.pending;
    if (r !== null) {
      u.shared.pending = null;
      var h = r,
        b = h.next;
      (h.next = null), c === null ? (n = b) : (c.next = b), (c = h);
      var z = t.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (r = z.lastBaseUpdate),
        r !== c &&
          (r === null ? (z.firstBaseUpdate = b) : (r.next = b),
          (z.lastBaseUpdate = h)));
    }
    if (n !== null) {
      var j = u.baseState;
      (c = 0), (z = b = h = null), (r = n);
      do {
        var _ = r.lane & -536870913,
          O = _ !== r.lane;
        if (O ? (rt & _) === _ : (a & _) === _) {
          _ !== 0 && _ === ha && (_c = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var V = t,
              I = r;
            _ = e;
            var Rt = l;
            switch (I.tag) {
              case 1:
                if (((V = I.payload), typeof V == "function")) {
                  j = V.call(Rt, j, _);
                  break t;
                }
                j = V;
                break t;
              case 3:
                V.flags = (V.flags & -65537) | 128;
              case 0:
                if (
                  ((V = I.payload),
                  (_ = typeof V == "function" ? V.call(Rt, j, _) : V),
                  _ == null)
                )
                  break t;
                j = lt({}, j, _);
                break t;
              case 2:
                ol = !0;
            }
          }
          (_ = r.callback),
            _ !== null &&
              ((t.flags |= 64),
              O && (t.flags |= 8192),
              (O = u.callbacks),
              O === null ? (u.callbacks = [_]) : O.push(_));
        } else
          (O = {
            lane: _,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            z === null ? ((b = z = O), (h = j)) : (z = z.next = O),
            (c |= _);
        if (((r = r.next), r === null)) {
          if (((r = u.shared.pending), r === null)) break;
          (O = r),
            (r = O.next),
            (O.next = null),
            (u.lastBaseUpdate = O),
            (u.shared.pending = null);
        }
      } while (!0);
      z === null && (h = j),
        (u.baseState = h),
        (u.firstBaseUpdate = b),
        (u.lastBaseUpdate = z),
        n === null && (u.shared.lanes = 0),
        (pl |= c),
        (t.lanes = c),
        (t.memoizedState = j);
    }
  }
  function Ps(t, e) {
    if (typeof t != "function") throw Error(f(191, t));
    t.call(e);
  }
  function Is(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Ps(l[t], e);
  }
  function du(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var n = l.create,
              c = l.inst;
            (a = n()), (c.destroy = a);
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (r) {
      yt(e, e.return, r);
    }
  }
  function ml(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            var c = a.inst,
              r = c.destroy;
            if (r !== void 0) {
              (c.destroy = void 0), (u = e);
              var h = l;
              try {
                r();
              } catch (b) {
                yt(u, h, b);
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (b) {
      yt(e, e.return, b);
    }
  }
  function to(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Is(e, l);
      } catch (a) {
        yt(t, t.return, a);
      }
    }
  }
  function eo(t, e, l) {
    (l.props = wl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      yt(t, e, a);
    }
  }
  function Ql(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        var a = t.stateNode;
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = a;
            break;
          default:
            u = a;
        }
        typeof l == "function" ? (t.refCleanup = l(u)) : (l.current = u);
      }
    } catch (n) {
      yt(t, e, n);
    }
  }
  function ue(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          yt(t, e, u);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (u) {
          yt(t, e, u);
        }
      else l.current = null;
  }
  function lo(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  function ao(t, e, l) {
    try {
      var a = t.stateNode;
      Q0(a, t.type, l, e), (a[Pt] = e);
    } catch (u) {
      yt(t, t.return, u);
    }
  }
  function uo(t) {
    return (
      t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
    );
  }
  function Ac(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || uo(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

      ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Rc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(t, e)
            : l.insertBefore(t, e)
          : (l.nodeType === 8
              ? ((e = l.parentNode), e.insertBefore(t, l))
              : ((e = l), e.appendChild(t)),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Zn));
    else if (a !== 4 && a !== 27 && ((t = t.child), t !== null))
      for (Rc(t, e, l), t = t.sibling; t !== null; )
        Rc(t, e, l), (t = t.sibling);
  }
  function zn(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (a !== 4 && a !== 27 && ((t = t.child), t !== null))
      for (zn(t, e, l), t = t.sibling; t !== null; )
        zn(t, e, l), (t = t.sibling);
  }
  var Ve = !1,
    _t = !1,
    Oc = !1,
    no = typeof WeakSet == "function" ? WeakSet : Set,
    Bt = null,
    io = !1;
  function S0(t, e) {
    if (((t = t.containerInfo), (ef = kn), (t = Tr(t)), Mi(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset,
              n = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, n.nodeType;
            } catch {
              l = null;
              break t;
            }
            var c = 0,
              r = -1,
              h = -1,
              b = 0,
              z = 0,
              j = t,
              _ = null;
            e: for (;;) {
              for (
                var O;
                j !== l || (u !== 0 && j.nodeType !== 3) || (r = c + u),
                  j !== n || (a !== 0 && j.nodeType !== 3) || (h = c + a),
                  j.nodeType === 3 && (c += j.nodeValue.length),
                  (O = j.firstChild) !== null;

              )
                (_ = j), (j = O);
              for (;;) {
                if (j === t) break e;
                if (
                  (_ === l && ++b === u && (r = c),
                  _ === n && ++z === a && (h = c),
                  (O = j.nextSibling) !== null)
                )
                  break;
                (j = _), (_ = j.parentNode);
              }
              j = O;
            }
            l = r === -1 || h === -1 ? null : { start: r, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      lf = { focusedElem: t, selectionRange: l }, kn = !1, Bt = e;
      Bt !== null;

    )
      if (
        ((e = Bt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Bt = t);
      else
        for (; Bt !== null; ) {
          switch (((e = Bt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                (t = void 0),
                  (l = e),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (a = l.stateNode);
                try {
                  var V = wl(l.type, u, l.elementType === l.type);
                  (t = a.getSnapshotBeforeUpdate(V, n)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (I) {
                  yt(l, l.return, I);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  cf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(f(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Bt = t);
            break;
          }
          Bt = e.return;
        }
    return (V = io), (io = !1), V;
  }
  function co(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Je(t, l), a & 4 && du(5, l);
        break;
      case 1:
        if ((Je(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (r) {
              yt(l, l.return, r);
            }
          else {
            var u = wl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              yt(l, l.return, r);
            }
          }
        a & 64 && to(l), a & 512 && Ql(l, l.return);
        break;
      case 3:
        if ((Je(t, l), a & 64 && ((a = l.updateQueue), a !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Is(a, t);
          } catch (r) {
            yt(l, l.return, r);
          }
        }
        break;
      case 26:
        Je(t, l), a & 512 && Ql(l, l.return);
        break;
      case 27:
      case 5:
        Je(t, l), e === null && a & 4 && lo(l), a & 512 && Ql(l, l.return);
        break;
      case 12:
        Je(t, l);
        break;
      case 13:
        Je(t, l), a & 4 && so(t, l);
        break;
      case 22:
        if (((u = l.memoizedState !== null || Ve), !u)) {
          e = (e !== null && e.memoizedState !== null) || _t;
          var n = Ve,
            c = _t;
          (Ve = u),
            (_t = e) && !c ? vl(t, l, (l.subtreeFlags & 8772) !== 0) : Je(t, l),
            (Ve = n),
            (_t = c);
        }
        a & 512 &&
          (l.memoizedProps.mode === "manual"
            ? Ql(l, l.return)
            : ue(l, l.return));
        break;
      default:
        Je(t, l);
    }
  }
  function fo(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), fo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && hi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Ct = null,
    ne = !1;
  function Ke(t, e, l) {
    for (l = l.child; l !== null; ) ro(t, e, l), (l = l.sibling);
  }
  function ro(t, e, l) {
    if (ee && typeof ee.onCommitFiberUnmount == "function")
      try {
        ee.onCommitFiberUnmount(Ha, l);
      } catch {}
    switch (l.tag) {
      case 26:
        _t || ue(l, e),
          Ke(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        _t || ue(l, e);
        var a = Ct,
          u = ne;
        for (
          Ct = l.stateNode, Ke(t, e, l), l = l.stateNode, e = l.attributes;
          e.length;

        )
          l.removeAttributeNode(e[0]);
        hi(l), (Ct = a), (ne = u);
        break;
      case 5:
        _t || ue(l, e);
      case 6:
        u = Ct;
        var n = ne;
        if (((Ct = null), Ke(t, e, l), (Ct = u), (ne = n), Ct !== null))
          if (ne)
            try {
              (t = Ct),
                (a = l.stateNode),
                t.nodeType === 8
                  ? t.parentNode.removeChild(a)
                  : t.removeChild(a);
            } catch (c) {
              yt(l, e, c);
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (c) {
              yt(l, e, c);
            }
        break;
      case 18:
        Ct !== null &&
          (ne
            ? ((e = Ct),
              (l = l.stateNode),
              e.nodeType === 8
                ? nf(e.parentNode, l)
                : e.nodeType === 1 && nf(e, l),
              Du(e))
            : nf(Ct, l.stateNode));
        break;
      case 4:
        (a = Ct),
          (u = ne),
          (Ct = l.stateNode.containerInfo),
          (ne = !0),
          Ke(t, e, l),
          (Ct = a),
          (ne = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _t || ml(2, l, e), _t || ml(4, l, e), Ke(t, e, l);
        break;
      case 1:
        _t ||
          (ue(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && eo(l, e, a)),
          Ke(t, e, l);
        break;
      case 21:
        Ke(t, e, l);
        break;
      case 22:
        _t || ue(l, e),
          (_t = (a = _t) || l.memoizedState !== null),
          Ke(t, e, l),
          (_t = a);
        break;
      default:
        Ke(t, e, l);
    }
  }
  function so(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Du(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function b0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new no()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new no()),
          e
        );
      default:
        throw Error(f(435, t.tag));
    }
  }
  function zc(t, e) {
    var l = b0(t);
    e.forEach(function (a) {
      var u = N0.bind(null, t, a);
      l.has(a) || (l.add(a), a.then(u, u));
    });
  }
  function ve(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          c = e,
          r = c;
        t: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
            case 5:
              (Ct = r.stateNode), (ne = !1);
              break t;
            case 3:
              (Ct = r.stateNode.containerInfo), (ne = !0);
              break t;
            case 4:
              (Ct = r.stateNode.containerInfo), (ne = !0);
              break t;
          }
          r = r.return;
        }
        if (Ct === null) throw Error(f(160));
        ro(n, c, u),
          (Ct = null),
          (ne = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (e.subtreeFlags & 13878)
      for (e = e.child; e !== null; ) oo(e, t), (e = e.sibling);
  }
  var xe = null;
  function oo(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ve(e, t),
          ye(t),
          a & 4 && (ml(3, t, t.return), du(3, t), ml(5, t, t.return));
        break;
      case 1:
        ve(e, t),
          ye(t),
          a & 512 && (_t || l === null || ue(l, l.return)),
          a & 64 &&
            Ve &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var u = xe;
        if (
          (ve(e, t),
          ye(t),
          a & 512 && (_t || l === null || ue(l, l.return)),
          a & 4)
        ) {
          var n = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (u = u.ownerDocument || u);
                  e: switch (a) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[La] ||
                          n[Xt] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(a)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        Gt(n, a, l),
                        (n[Xt] = t),
                        Ht(n),
                        (a = n);
                      break t;
                    case "link":
                      var c = ad("link", "href", u).get(a + (l.href || ""));
                      if (c) {
                        for (var r = 0; r < c.length; r++)
                          if (
                            ((n = c[r]),
                            n.getAttribute("href") ===
                              (l.href == null ? null : l.href) &&
                              n.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              n.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              n.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)),
                        Gt(n, a, l),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = ad("meta", "content", u).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (r = 0; r < c.length; r++)
                          if (
                            ((n = c[r]),
                            n.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              n.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              n.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              n.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            c.splice(r, 1);
                            break e;
                          }
                      }
                      (n = u.createElement(a)),
                        Gt(n, a, l),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (n[Xt] = t), Ht(n), (a = n);
                }
                t.stateNode = a;
              } else ud(u, t.type, t.stateNode);
            else t.stateNode = ld(u, a, t.memoizedProps);
          else
            n !== a
              ? (n === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : n.count--,
                a === null
                  ? ud(u, t.type, t.stateNode)
                  : ld(u, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                ao(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (a & 4 && t.alternate === null) {
          (u = t.stateNode), (n = t.memoizedProps);
          try {
            for (var h = u.firstChild; h; ) {
              var b = h.nextSibling,
                z = h.nodeName;
              h[La] ||
                z === "HEAD" ||
                z === "BODY" ||
                z === "SCRIPT" ||
                z === "STYLE" ||
                (z === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
                u.removeChild(h),
                (h = b);
            }
            for (var j = t.type, _ = u.attributes; _.length; )
              u.removeAttributeNode(_[0]);
            Gt(u, j, n), (u[Xt] = t), (u[Pt] = n);
          } catch (V) {
            yt(t, t.return, V);
          }
        }
      case 5:
        if (
          (ve(e, t),
          ye(t),
          a & 512 && (_t || l === null || ue(l, l.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            ea(u, "");
          } catch (V) {
            yt(t, t.return, V);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), ao(t, u, l !== null ? l.memoizedProps : u)),
          a & 1024 && (Oc = !0);
        break;
      case 6:
        if ((ve(e, t), ye(t), a & 4)) {
          if (t.stateNode === null) throw Error(f(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (V) {
            yt(t, t.return, V);
          }
        }
        break;
      case 3:
        if (
          ((Vn = null),
          (u = xe),
          (xe = Qn(e.containerInfo)),
          ve(e, t),
          (xe = u),
          ye(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Du(e.containerInfo);
          } catch (V) {
            yt(t, t.return, V);
          }
        Oc && ((Oc = !1), ho(t));
        break;
      case 4:
        (a = xe),
          (xe = Qn(t.stateNode.containerInfo)),
          ve(e, t),
          ye(t),
          (xe = a);
        break;
      case 12:
        ve(e, t), ye(t);
        break;
      case 13:
        ve(e, t),
          ye(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Bc = Re()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), zc(t, a)));
        break;
      case 22:
        if (
          (a & 512 && (_t || l === null || ue(l, l.return)),
          (h = t.memoizedState !== null),
          (b = l !== null && l.memoizedState !== null),
          (z = Ve),
          (j = _t),
          (Ve = z || h),
          (_t = j || b),
          ve(e, t),
          (_t = j),
          (Ve = z),
          ye(t),
          (e = t.stateNode),
          (e._current = t),
          (e._visibility &= -3),
          (e._visibility |= e._pendingVisibility & 2),
          a & 8192 &&
            ((e._visibility = h ? e._visibility & -2 : e._visibility | 1),
            h && ((e = Ve || _t), l === null || b || e || pa(t)),
            t.memoizedProps === null || t.memoizedProps.mode !== "manual"))
        )
          t: for (l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (l === null) {
                b = l = e;
                try {
                  if (((u = b.stateNode), h))
                    (n = u.style),
                      typeof n.setProperty == "function"
                        ? n.setProperty("display", "none", "important")
                        : (n.display = "none");
                  else {
                    (c = b.stateNode), (r = b.memoizedProps.style);
                    var O =
                      r != null && r.hasOwnProperty("display")
                        ? r.display
                        : null;
                    c.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (V) {
                  yt(b, b.return, V);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                b = e;
                try {
                  b.stateNode.nodeValue = h ? "" : b.memoizedProps;
                } catch (V) {
                  yt(b, b.return, V);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), zc(t, l))));
        break;
      case 19:
        ve(e, t),
          ye(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), zc(t, a)));
        break;
      case 21:
        break;
      default:
        ve(e, t), ye(t);
    }
  }
  function ye(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var l = t.return; l !== null; ) {
              if (uo(l)) {
                var a = l;
                break t;
              }
              l = l.return;
            }
            throw Error(f(160));
          }
          switch (a.tag) {
            case 27:
              var u = a.stateNode,
                n = Ac(t);
              zn(t, n, u);
              break;
            case 5:
              var c = a.stateNode;
              a.flags & 32 && (ea(c, ""), (a.flags &= -33));
              var r = Ac(t);
              zn(t, r, c);
              break;
            case 3:
            case 4:
              var h = a.stateNode.containerInfo,
                b = Ac(t);
              Rc(t, b, h);
              break;
            default:
              throw Error(f(161));
          }
        }
      } catch (z) {
        yt(t, t.return, z);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function ho(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        ho(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Je(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) co(t, e.alternate, e), (e = e.sibling);
  }
  function pa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ml(4, e, e.return), pa(e);
          break;
        case 1:
          ue(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && eo(e, e.return, l),
            pa(e);
          break;
        case 26:
        case 27:
        case 5:
          ue(e, e.return), pa(e);
          break;
        case 22:
          ue(e, e.return), e.memoizedState === null && pa(e);
          break;
        default:
          pa(e);
      }
      t = t.sibling;
    }
  }
  function vl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vl(u, n, l), du(4, n);
          break;
        case 1:
          if (
            (vl(u, n, l),
            (a = n),
            (u = a.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (b) {
              yt(a, a.return, b);
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var r = a.stateNode;
            try {
              var h = u.shared.hiddenCallbacks;
              if (h !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < h.length; u++)
                  Ps(h[u], r);
            } catch (b) {
              yt(a, a.return, b);
            }
          }
          l && c & 64 && to(n), Ql(n, n.return);
          break;
        case 26:
        case 27:
        case 5:
          vl(u, n, l), l && a === null && c & 4 && lo(n), Ql(n, n.return);
          break;
        case 12:
          vl(u, n, l);
          break;
        case 13:
          vl(u, n, l), l && c & 4 && so(u, n);
          break;
        case 22:
          n.memoizedState === null && vl(u, n, l), Ql(n, n.return);
          break;
        default:
          vl(u, n, l);
      }
      e = e.sibling;
    }
  }
  function Mc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && lu(l));
  }
  function Dc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && lu(t));
  }
  function yl(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) mo(t, e, l, a), (e = e.sibling);
  }
  function mo(t, e, l, a) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        yl(t, e, l, a), u & 2048 && du(9, e);
        break;
      case 3:
        yl(t, e, l, a),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && lu(t)));
        break;
      case 12:
        if (u & 2048) {
          yl(t, e, l, a), (t = e.stateNode);
          try {
            var n = e.memoizedProps,
              c = n.id,
              r = n.onPostCommit;
            typeof r == "function" &&
              r(
                c,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (h) {
            yt(e, e.return, h);
          }
        } else yl(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (n = e.stateNode),
          e.memoizedState !== null
            ? n._visibility & 4
              ? yl(t, e, l, a)
              : hu(t, e)
            : n._visibility & 4
            ? yl(t, e, l, a)
            : ((n._visibility |= 4),
              Sa(t, e, l, a, (e.subtreeFlags & 10256) !== 0)),
          u & 2048 && Mc(e.alternate, e);
        break;
      case 24:
        yl(t, e, l, a), u & 2048 && Dc(e.alternate, e);
        break;
      default:
        yl(t, e, l, a);
    }
  }
  function Sa(t, e, l, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        c = e,
        r = l,
        h = a,
        b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Sa(n, c, r, h, u), du(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null
            ? z._visibility & 4
              ? Sa(n, c, r, h, u)
              : hu(n, c)
            : ((z._visibility |= 4), Sa(n, c, r, h, u)),
            u && b & 2048 && Mc(c.alternate, c);
          break;
        case 24:
          Sa(n, c, r, h, u), u && b & 2048 && Dc(c.alternate, c);
          break;
        default:
          Sa(n, c, r, h, u);
      }
      e = e.sibling;
    }
  }
  function hu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags;
        switch (a.tag) {
          case 22:
            hu(l, a), u & 2048 && Mc(a.alternate, a);
            break;
          case 24:
            hu(l, a), u & 2048 && Dc(a.alternate, a);
            break;
          default:
            hu(l, a);
        }
        e = e.sibling;
      }
  }
  var mu = 8192;
  function ba(t) {
    if (t.subtreeFlags & mu)
      for (t = t.child; t !== null; ) vo(t), (t = t.sibling);
  }
  function vo(t) {
    switch (t.tag) {
      case 26:
        ba(t),
          t.flags & mu &&
            t.memoizedState !== null &&
            fm(xe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ba(t);
        break;
      case 3:
      case 4:
        var e = xe;
        (xe = Qn(t.stateNode.containerInfo)), ba(t), (xe = e);
        break;
      case 22:
        t.memoizedState === null &&
          ((e = t.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = mu), (mu = 16777216), ba(t), (mu = e))
            : ba(t));
        break;
      default:
        ba(t);
    }
  }
  function yo(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function vu(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Bt = a), po(a, t);
        }
      yo(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) go(t), (t = t.sibling);
  }
  function go(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        vu(t), t.flags & 2048 && ml(9, t, t.return);
        break;
      case 3:
        vu(t);
        break;
      case 12:
        vu(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 4 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -5), Mn(t))
          : vu(t);
        break;
      default:
        vu(t);
    }
  }
  function Mn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Bt = a), po(a, t);
        }
      yo(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ml(8, e, e.return), Mn(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 4 && ((l._visibility &= -5), Mn(e));
          break;
        default:
          Mn(e);
      }
      t = t.sibling;
    }
  }
  function po(t, e) {
    for (; Bt !== null; ) {
      var l = Bt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ml(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          lu(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Bt = a);
      else
        t: for (l = t; Bt !== null; ) {
          a = Bt;
          var u = a.sibling,
            n = a.return;
          if ((fo(a), a === l)) {
            Bt = null;
            break t;
          }
          if (u !== null) {
            (u.return = n), (Bt = u);
            break t;
          }
          Bt = n;
        }
    }
  }
  function E0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ge(t, e, l, a) {
    return new E0(t, e, l, a);
  }
  function jc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function gl(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = ge(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 31457280),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function So(t, e) {
    t.flags &= 31457282;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Dn(t, e, l, a, u, n) {
    var c = 0;
    if (((a = t), typeof t == "function")) jc(t) && (c = 1);
    else if (typeof t == "string")
      c = im(t, l, Ae.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case y:
          return Xl(l.children, u, n, e);
        case v:
          (c = 8), (u |= 24);
          break;
        case D:
          return (
            (t = ge(12, l, e, u | 2)), (t.elementType = D), (t.lanes = n), t
          );
        case X:
          return (t = ge(13, l, e, u)), (t.elementType = X), (t.lanes = n), t;
        case L:
          return (t = ge(19, l, e, u)), (t.elementType = L), (t.lanes = n), t;
        case Q:
          return bo(l, u, n, e);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case q:
              case N:
                c = 10;
                break t;
              case C:
                c = 9;
                break t;
              case U:
                c = 11;
                break t;
              case B:
                c = 14;
                break t;
              case J:
                (c = 16), (a = null);
                break t;
            }
          (c = 29),
            (l = Error(f(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = ge(c, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = n), e
    );
  }
  function Xl(t, e, l, a) {
    return (t = ge(7, t, a, e)), (t.lanes = l), t;
  }
  function bo(t, e, l, a) {
    (t = ge(22, t, a, e)), (t.elementType = Q), (t.lanes = l);
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = u._current;
        if (n === null) throw Error(f(456));
        if ((u._pendingVisibility & 2) === 0) {
          var c = nl(n, 2);
          c !== null && ((u._pendingVisibility |= 2), Wt(c, n, 2));
        }
      },
      attach: function () {
        var n = u._current;
        if (n === null) throw Error(f(456));
        if ((u._pendingVisibility & 2) !== 0) {
          var c = nl(n, 2);
          c !== null && ((u._pendingVisibility &= -3), Wt(c, n, 2));
        }
      },
    };
    return (t.stateNode = u), t;
  }
  function Cc(t, e, l) {
    return (t = ge(6, t, null, e)), (t.lanes = l), t;
  }
  function Nc(t, e, l) {
    return (
      (e = ge(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  function ke(t) {
    t.flags |= 4;
  }
  function Eo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !nd(e))) {
      if (
        ((e = me.current),
        e !== null &&
          ((rt & 4194176) === rt
            ? ze !== null
            : ((rt & 62914560) !== rt && (rt & 536870912) === 0) || e !== ze))
      )
        throw ((Ia = Li), Br);
      t.flags |= 8192;
    }
  }
  function jn(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Lf() : 536870912), (t.lanes |= e), (xa |= e));
  }
  function yu(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Et(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags & 31457280),
          (a |= u.flags & 31457280),
          (u.return = t),
          (u = u.sibling);
    else
      for (u = t.child; u !== null; )
        (l |= u.lanes | u.childLanes),
          (a |= u.subtreeFlags),
          (a |= u.flags),
          (u.return = t),
          (u = u.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function x0(t, e, l) {
    var a = e.pendingProps;
    switch ((qi(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Et(e), null;
      case 1:
        return Et(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Xe(Ut),
          $l(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            ($a(e)
              ? ke(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Ee !== null && (Zc(Ee), (Ee = null)))),
          Et(e),
          null
        );
      case 26:
        return (
          (l = e.memoizedState),
          t === null
            ? (ke(e),
              l !== null ? (Et(e), Eo(e, l)) : (Et(e), (e.flags &= -16777217)))
            : l
            ? l !== t.memoizedState
              ? (ke(e), Et(e), Eo(e, l))
              : (Et(e), (e.flags &= -16777217))
            : (t.memoizedProps !== a && ke(e), Et(e), (e.flags &= -16777217)),
          null
        );
      case 27:
        Gu(e), (l = el.current);
        var u = e.type;
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Et(e), null;
          }
          (t = Ae.current),
            $a(e) ? Hr(e) : ((t = Fo(u, a, l)), (e.stateNode = t), ke(e));
        }
        return Et(e), null;
      case 5:
        if ((Gu(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && ke(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(f(166));
            return Et(e), null;
          }
          if (((t = Ae.current), $a(e))) Hr(e);
          else {
            switch (((u = Gn(el.current)), t)) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (t = u.createElement("div")),
                      (t.innerHTML = "<script></script>"),
                      (t = t.removeChild(t.firstChild));
                    break;
                  case "select":
                    (t =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (t.multiple = !0)
                        : a.size && (t.size = a.size);
                    break;
                  default:
                    t =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            (t[Xt] = e), (t[Pt] = a);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = t;
            t: switch ((Gt(t, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!a.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && ke(e);
          }
        }
        return Et(e), (e.flags &= -16777217), null;
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && ke(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(f(166));
          if (((t = el.current), $a(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (u = $t),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            (t[Xt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Vo(t.nodeValue, l)
              )),
              t || Ul(e);
          } else (t = Gn(t).createTextNode(a)), (t[Xt] = e), (e.stateNode = t);
        }
        return Et(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = $a(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(f(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(f(317));
              u[Xt] = e;
            } else
              Wa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Et(e), (u = !1);
          } else Ee !== null && (Zc(Ee), (Ee = null)), (u = !0);
          if (!u) return e.flags & 256 ? (we(e), e) : (we(e), null);
        }
        if ((we(e), (e.flags & 128) !== 0)) return (e.lanes = l), e;
        if (
          ((l = a !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          (a = e.child),
            (u = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (u = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048);
        }
        return (
          l !== t && l && (e.child.flags |= 8192),
          jn(e, e.updateQueue),
          Et(e),
          null
        );
      case 4:
        return $l(), t === null && Pc(e.stateNode.containerInfo), Et(e), null;
      case 10:
        return Xe(e.type), Et(e), null;
      case 19:
        if ((Mt(Nt), (u = e.memoizedState), u === null)) return Et(e), null;
        if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) yu(u, !1);
          else {
            if (At !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((n = mn(t)), n !== null)) {
                  for (
                    e.flags |= 128,
                      yu(u, !1),
                      t = n.updateQueue,
                      e.updateQueue = t,
                      jn(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    So(l, t), (l = l.sibling);
                  return bt(Nt, (Nt.current & 1) | 2), e.child;
                }
                t = t.sibling;
              }
            u.tail !== null &&
              Re() > Cn &&
              ((e.flags |= 128), (a = !0), yu(u, !1), (e.lanes = 4194304));
          }
        else {
          if (!a)
            if (((t = mn(n)), t !== null)) {
              if (
                ((e.flags |= 128),
                (a = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                jn(e, t),
                yu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !st)
              )
                return Et(e), null;
            } else
              2 * Re() - u.renderingStartTime > Cn &&
                l !== 536870912 &&
                ((e.flags |= 128), (a = !0), yu(u, !1), (e.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = e.child), (e.child = n))
            : ((t = u.last),
              t !== null ? (t.sibling = n) : (e.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((e = u.tail),
            (u.rendering = e),
            (u.tail = e.sibling),
            (u.renderingStartTime = Re()),
            (e.sibling = null),
            (t = Nt.current),
            bt(Nt, a ? (t & 1) | 2 : t & 1),
            e)
          : (Et(e), null);
      case 22:
      case 23:
        return (
          we(e),
          wi(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Et(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Et(e),
          (l = e.updateQueue),
          l !== null && jn(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && Mt(ql),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Xe(Ut),
          Et(e),
          null
        );
      case 25:
        return null;
    }
    throw Error(f(156, e.tag));
  }
  function T0(t, e) {
    switch ((qi(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Xe(Ut),
          $l(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Gu(e), null;
      case 13:
        if (
          (we(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(f(340));
          Wa();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return Mt(Nt), null;
      case 4:
        return $l(), null;
      case 10:
        return Xe(e.type), null;
      case 22:
      case 23:
        return (
          we(e),
          wi(),
          t !== null && Mt(ql),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Xe(Ut), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function xo(t, e) {
    switch ((qi(e), e.tag)) {
      case 3:
        Xe(Ut), $l();
        break;
      case 26:
      case 27:
      case 5:
        Gu(e);
        break;
      case 4:
        $l();
        break;
      case 13:
        we(e);
        break;
      case 19:
        Mt(Nt);
        break;
      case 10:
        Xe(e.type);
        break;
      case 22:
      case 23:
        we(e), wi(), t !== null && Mt(ql);
        break;
      case 24:
        Xe(Ut);
    }
  }
  var _0 = {
      getCacheForType: function (t) {
        var e = Vt(Ut),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
    },
    A0 = typeof WeakMap == "function" ? WeakMap : Map,
    xt = 0,
    pt = null,
    it = null,
    rt = 0,
    St = 0,
    ie = null,
    $e = !1,
    Ea = !1,
    Uc = !1,
    We = 0,
    At = 0,
    pl = 0,
    Vl = 0,
    Hc = 0,
    pe = 0,
    xa = 0,
    gu = null,
    De = null,
    qc = !1,
    Bc = 0,
    Cn = 1 / 0,
    Nn = null,
    Sl = null,
    Un = !1,
    Kl = null,
    pu = 0,
    Lc = 0,
    Yc = null,
    Su = 0,
    wc = null;
  function ce() {
    if ((xt & 2) !== 0 && rt !== 0) return rt & -rt;
    if (G.T !== null) {
      var t = ha;
      return t !== 0 ? t : kc();
    }
    return Gf();
  }
  function To() {
    pe === 0 && (pe = (rt & 536870912) === 0 || st ? Bf() : 536870912);
    var t = me.current;
    return t !== null && (t.flags |= 32), pe;
  }
  function Wt(t, e, l) {
    ((t === pt && St === 2) || t.cancelPendingCommit !== null) &&
      (Ta(t, 0), Fe(t, rt, pe, !1)),
      Ba(t, l),
      ((xt & 2) === 0 || t !== pt) &&
        (t === pt &&
          ((xt & 2) === 0 && (Vl |= l), At === 4 && Fe(t, rt, pe, !1)),
        je(t));
  }
  function _o(t, e, l) {
    if ((xt & 6) !== 0) throw Error(f(327));
    var a = (!l && (e & 60) === 0 && (e & t.expiredLanes) === 0) || qa(t, e),
      u = a ? z0(t, e) : Xc(t, e, !0),
      n = a;
    do {
      if (u === 0) {
        Ea && !a && Fe(t, e, 0, !1);
        break;
      } else if (u === 6) Fe(t, e, 0, !$e);
      else {
        if (((l = t.current.alternate), n && !R0(l))) {
          (u = Xc(t, e, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = t.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            e = c;
            t: {
              var r = t;
              u = gu;
              var h = r.current.memoizedState.isDehydrated;
              if ((h && (Ta(r, c).flags |= 256), (c = Xc(r, c, !1)), c !== 2)) {
                if (Uc && !h) {
                  (r.errorRecoveryDisabledLanes |= n), (Vl |= n), (u = 4);
                  break t;
                }
                (n = De), (De = u), n !== null && Zc(n);
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          Ta(t, 0), Fe(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), u)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((e & 4194176) === e) {
                Fe(a, e, pe, !$e);
                break t;
              }
              break;
            case 2:
              De = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if (
            ((a.finishedWork = l),
            (a.finishedLanes = e),
            (e & 62914560) === e && ((n = Bc + 300 - Re()), 10 < n))
          ) {
            if ((Fe(a, e, pe, !$e), Ku(a, 0) !== 0)) break t;
            a.timeoutHandle = ko(
              Ao.bind(null, a, l, De, Nn, qc, e, pe, Vl, xa, $e, 2, -0, 0),
              n
            );
            break t;
          }
          Ao(a, l, De, Nn, qc, e, pe, Vl, xa, $e, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    je(t);
  }
  function Zc(t) {
    De === null ? (De = t) : De.push.apply(De, t);
  }
  function Ao(t, e, l, a, u, n, c, r, h, b, z, j, _) {
    var O = e.subtreeFlags;
    if (
      (O & 8192 || (O & 16785408) === 16785408) &&
      ((Au = { stylesheets: null, count: 0, unsuspend: cm }),
      vo(e),
      (e = rm()),
      e !== null)
    ) {
      (t.cancelPendingCommit = e(Co.bind(null, t, l, a, u, c, r, h, 1, j, _))),
        Fe(t, n, c, !b);
      return;
    }
    Co(t, l, a, u, c, r, h, z, j, _);
  }
  function R0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!ae(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function Fe(t, e, l, a) {
    (e &= ~Hc),
      (e &= ~Vl),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var u = e; 0 < u; ) {
      var n = 31 - le(u),
        c = 1 << n;
      (a[n] = -1), (u &= ~c);
    }
    l !== 0 && Yf(t, l, e);
  }
  function Hn() {
    return (xt & 6) === 0 ? (bu(0), !1) : !0;
  }
  function Gc() {
    if (it !== null) {
      if (St === 0) var t = it.return;
      else (t = it), (Qe = Zl = null), ki(t), (oa = null), (tu = 0), (t = it);
      for (; t !== null; ) xo(t.alternate, t), (t = t.return);
      it = null;
    }
  }
  function Ta(t, e) {
    (t.finishedWork = null), (t.finishedLanes = 0);
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), V0(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Gc(),
      (pt = t),
      (it = l = gl(t.current, null)),
      (rt = e),
      (St = 0),
      (ie = null),
      ($e = !1),
      (Ea = qa(t, e)),
      (Uc = !1),
      (xa = pe = Hc = Vl = pl = At = 0),
      (De = gu = null),
      (qc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - le(a),
          n = 1 << u;
        (e |= t[u]), (a &= ~n);
      }
    return (We = e), un(), l;
  }
  function Ro(t, e) {
    (ut = null),
      (G.H = Me),
      e === Pa
        ? ((e = wr()), (St = 3))
        : e === Br
        ? ((e = wr()), (St = 4))
        : (St =
            e === Ls
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (ie = e),
      it === null && ((At = 1), An(t, oe(e, t.current)));
  }
  function Oo() {
    var t = G.H;
    return (G.H = Me), t === null ? Me : t;
  }
  function zo() {
    var t = G.A;
    return (G.A = _0), t;
  }
  function Qc() {
    (At = 4),
      $e || ((rt & 4194176) !== rt && me.current !== null) || (Ea = !0),
      ((pl & 134217727) === 0 && (Vl & 134217727) === 0) ||
        pt === null ||
        Fe(pt, rt, pe, !1);
  }
  function Xc(t, e, l) {
    var a = xt;
    xt |= 2;
    var u = Oo(),
      n = zo();
    (pt !== t || rt !== e) && ((Nn = null), Ta(t, e)), (e = !1);
    var c = At;
    t: do
      try {
        if (St !== 0 && it !== null) {
          var r = it,
            h = ie;
          switch (St) {
            case 8:
              Gc(), (c = 6);
              break t;
            case 3:
            case 2:
            case 6:
              me.current === null && (e = !0);
              var b = St;
              if (((St = 0), (ie = null), _a(t, r, h, b), l && Ea)) {
                c = 0;
                break t;
              }
              break;
            default:
              (b = St), (St = 0), (ie = null), _a(t, r, h, b);
          }
        }
        O0(), (c = At);
        break;
      } catch (z) {
        Ro(t, z);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Qe = Zl = null),
      (xt = a),
      (G.H = u),
      (G.A = n),
      it === null && ((pt = null), (rt = 0), un()),
      c
    );
  }
  function O0() {
    for (; it !== null; ) Mo(it);
  }
  function z0(t, e) {
    var l = xt;
    xt |= 2;
    var a = Oo(),
      u = zo();
    pt !== t || rt !== e
      ? ((Nn = null), (Cn = Re() + 500), Ta(t, e))
      : (Ea = qa(t, e));
    t: do
      try {
        if (St !== 0 && it !== null) {
          e = it;
          var n = ie;
          e: switch (St) {
            case 1:
              (St = 0), (ie = null), _a(t, e, n, 1);
              break;
            case 2:
              if (Lr(n)) {
                (St = 0), (ie = null), Do(e);
                break;
              }
              (e = function () {
                St === 2 && pt === t && (St = 7), je(t);
              }),
                n.then(e, e);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Lr(n)
                ? ((St = 0), (ie = null), Do(e))
                : ((St = 0), (ie = null), _a(t, e, n, 7));
              break;
            case 5:
              var c = null;
              switch (it.tag) {
                case 26:
                  c = it.memoizedState;
                case 5:
                case 27:
                  var r = it;
                  if (!c || nd(c)) {
                    (St = 0), (ie = null);
                    var h = r.sibling;
                    if (h !== null) it = h;
                    else {
                      var b = r.return;
                      b !== null ? ((it = b), qn(b)) : (it = null);
                    }
                    break e;
                  }
              }
              (St = 0), (ie = null), _a(t, e, n, 5);
              break;
            case 6:
              (St = 0), (ie = null), _a(t, e, n, 6);
              break;
            case 8:
              Gc(), (At = 6);
              break t;
            default:
              throw Error(f(462));
          }
        }
        M0();
        break;
      } catch (z) {
        Ro(t, z);
      }
    while (!0);
    return (
      (Qe = Zl = null),
      (G.H = a),
      (G.A = u),
      (xt = l),
      it !== null ? 0 : ((pt = null), (rt = 0), un(), At)
    );
  }
  function M0() {
    for (; it !== null && !Fd(); ) Mo(it);
  }
  function Mo(t) {
    var e = Ws(t.alternate, t, We);
    (t.memoizedProps = t.pendingProps), e === null ? qn(t) : (it = e);
  }
  function Do(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Xs(l, e, e.pendingProps, e.type, void 0, rt);
        break;
      case 11:
        e = Xs(l, e, e.pendingProps, e.type.render, e.ref, rt);
        break;
      case 5:
        ki(e);
      default:
        xo(l, e), (e = it = So(e, We)), (e = Ws(l, e, We));
    }
    (t.memoizedProps = t.pendingProps), e === null ? qn(t) : (it = e);
  }
  function _a(t, e, l, a) {
    (Qe = Zl = null), ki(e), (oa = null), (tu = 0);
    var u = e.return;
    try {
      if (g0(t, u, e, l, rt)) {
        (At = 1), An(t, oe(l, t.current)), (it = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((it = u), n);
      (At = 1), An(t, oe(l, t.current)), (it = null);
      return;
    }
    e.flags & 32768
      ? (st || a === 1
          ? (t = !0)
          : Ea || (rt & 536870912) !== 0
          ? (t = !1)
          : (($e = t = !0),
            (a === 2 || a === 3 || a === 6) &&
              ((a = me.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        jo(e, t))
      : qn(e);
  }
  function qn(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        jo(e, $e);
        return;
      }
      t = e.return;
      var l = x0(e.alternate, e, We);
      if (l !== null) {
        it = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        it = e;
        return;
      }
      it = e = t;
    } while (e !== null);
    At === 0 && (At = 5);
  }
  function jo(t, e) {
    do {
      var l = T0(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (it = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        it = t;
        return;
      }
      it = t = l;
    } while (t !== null);
    (At = 6), (it = null);
  }
  function Co(t, e, l, a, u, n, c, r, h, b) {
    var z = G.T,
      j = w.p;
    try {
      (w.p = 2), (G.T = null), D0(t, e, l, a, j, u, n, c, r, h, b);
    } finally {
      (G.T = z), (w.p = j);
    }
  }
  function D0(t, e, l, a, u, n, c, r) {
    do Aa();
    while (Kl !== null);
    if ((xt & 6) !== 0) throw Error(f(327));
    var h = t.finishedWork;
    if (((a = t.finishedLanes), h === null)) return null;
    if (((t.finishedWork = null), (t.finishedLanes = 0), h === t.current))
      throw Error(f(177));
    (t.callbackNode = null),
      (t.callbackPriority = 0),
      (t.cancelPendingCommit = null);
    var b = h.lanes | h.childLanes;
    if (
      ((b |= Ni),
      fh(t, a, b, n, c, r),
      t === pt && ((it = pt = null), (rt = 0)),
      ((h.subtreeFlags & 10256) === 0 && (h.flags & 10256) === 0) ||
        Un ||
        ((Un = !0),
        (Lc = b),
        (Yc = l),
        U0(Qu, function () {
          return Aa(), null;
        })),
      (l = (h.flags & 15990) !== 0),
      (h.subtreeFlags & 15990) !== 0 || l
        ? ((l = G.T),
          (G.T = null),
          (n = w.p),
          (w.p = 2),
          (c = xt),
          (xt |= 4),
          S0(t, h),
          oo(h, t),
          t0(lf, t.containerInfo),
          (kn = !!ef),
          (lf = ef = null),
          (t.current = h),
          co(t, h.alternate, h),
          Pd(),
          (xt = c),
          (w.p = n),
          (G.T = l))
        : (t.current = h),
      Un ? ((Un = !1), (Kl = t), (pu = a)) : No(t, b),
      (b = t.pendingLanes),
      b === 0 && (Sl = null),
      ah(h.stateNode),
      je(t),
      e !== null)
    )
      for (u = t.onRecoverableError, h = 0; h < e.length; h++)
        (b = e[h]), u(b.value, { componentStack: b.stack });
    return (
      (pu & 3) !== 0 && Aa(),
      (b = t.pendingLanes),
      (a & 4194218) !== 0 && (b & 42) !== 0
        ? t === wc
          ? Su++
          : ((Su = 0), (wc = t))
        : (Su = 0),
      bu(0),
      null
    );
  }
  function No(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), lu(e)));
  }
  function Aa() {
    if (Kl !== null) {
      var t = Kl,
        e = Lc;
      Lc = 0;
      var l = Zf(pu),
        a = G.T,
        u = w.p;
      try {
        if (((w.p = 32 > l ? 32 : l), (G.T = null), Kl === null)) var n = !1;
        else {
          (l = Yc), (Yc = null);
          var c = Kl,
            r = pu;
          if (((Kl = null), (pu = 0), (xt & 6) !== 0)) throw Error(f(331));
          var h = xt;
          if (
            ((xt |= 4),
            go(c.current),
            mo(c, c.current, r, l),
            (xt = h),
            bu(0, !1),
            ee && typeof ee.onPostCommitFiberRoot == "function")
          )
            try {
              ee.onPostCommitFiberRoot(Ha, c);
            } catch {}
          n = !0;
        }
        return n;
      } finally {
        (w.p = u), (G.T = a), No(t, e);
      }
    }
    return !1;
  }
  function Uo(t, e, l) {
    (e = oe(l, e)),
      (e = fc(t.stateNode, e, 2)),
      (t = hl(t, e, 2)),
      t !== null && (Ba(t, 2), je(t));
  }
  function yt(t, e, l) {
    if (t.tag === 3) Uo(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Uo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (Sl === null || !Sl.has(a)))
          ) {
            (t = oe(l, t)),
              (l = qs(2)),
              (a = hl(e, l, 2)),
              a !== null && (Bs(l, a, e, t), Ba(a, 2), je(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Vc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new A0();
      var u = new Set();
      a.set(e, u);
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u));
    u.has(l) ||
      ((Uc = !0), u.add(l), (t = j0.bind(null, t, e, l)), e.then(t, t));
  }
  function j0(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      pt === t &&
        (rt & l) === l &&
        (At === 4 || (At === 3 && (rt & 62914560) === rt && 300 > Re() - Bc)
          ? (xt & 2) === 0 && Ta(t, 0)
          : (Hc |= l),
        xa === rt && (xa = 0)),
      je(t);
  }
  function Ho(t, e) {
    e === 0 && (e = Lf()), (t = nl(t, e)), t !== null && (Ba(t, e), je(t));
  }
  function C0(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Ho(t, l);
  }
  function N0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState;
        u !== null && (l = u.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(e), Ho(t, l);
  }
  function U0(t, e) {
    return ri(t, e);
  }
  var Bn = null,
    Ra = null,
    Kc = !1,
    Ln = !1,
    Jc = !1,
    Jl = 0;
  function je(t) {
    t !== Ra &&
      t.next === null &&
      (Ra === null ? (Bn = Ra = t) : (Ra = Ra.next = t)),
      (Ln = !0),
      Kc || ((Kc = !0), q0(H0));
  }
  function bu(t, e) {
    if (!Jc && Ln) {
      Jc = !0;
      do
        for (var l = !1, a = Bn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes,
                r = a.pingedLanes;
              (n = (1 << (31 - le(42 | t) + 1)) - 1),
                (n &= u & ~(c & ~r)),
                (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((l = !0), Lo(a, n));
          } else
            (n = rt),
              (n = Ku(a, a === pt ? n : 0)),
              (n & 3) === 0 || qa(a, n) || ((l = !0), Lo(a, n));
          a = a.next;
        }
      while (l);
      Jc = !1;
    }
  }
  function H0() {
    Ln = Kc = !1;
    var t = 0;
    Jl !== 0 && (X0() && (t = Jl), (Jl = 0));
    for (var e = Re(), l = null, a = Bn; a !== null; ) {
      var u = a.next,
        n = qo(a, e);
      n === 0
        ? ((a.next = null),
          l === null ? (Bn = u) : (l.next = u),
          u === null && (Ra = l))
        : ((l = a), (t !== 0 || (n & 3) !== 0) && (Ln = !0)),
        (a = u);
    }
    bu(t);
  }
  function qo(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        u = t.expirationTimes,
        n = t.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - le(n),
        r = 1 << c,
        h = u[c];
      h === -1
        ? ((r & l) === 0 || (r & a) !== 0) && (u[c] = ch(r, e))
        : h <= e && (t.expiredLanes |= r),
        (n &= ~r);
    }
    if (
      ((e = pt),
      (l = rt),
      (l = Ku(t, t === e ? l : 0)),
      (a = t.callbackNode),
      l === 0 || (t === e && St === 2) || t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && si(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || qa(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && si(a), Zf(l))) {
        case 2:
        case 8:
          l = Hf;
          break;
        case 32:
          l = Qu;
          break;
        case 268435456:
          l = qf;
          break;
        default:
          l = Qu;
      }
      return (
        (a = Bo.bind(null, t)),
        (l = ri(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && si(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Bo(t, e) {
    var l = t.callbackNode;
    if (Aa() && t.callbackNode !== l) return null;
    var a = rt;
    return (
      (a = Ku(t, t === pt ? a : 0)),
      a === 0
        ? null
        : (_o(t, a, e),
          qo(t, Re()),
          t.callbackNode != null && t.callbackNode === l
            ? Bo.bind(null, t)
            : null)
    );
  }
  function Lo(t, e) {
    if (Aa()) return null;
    _o(t, e, !0);
  }
  function q0(t) {
    K0(function () {
      (xt & 6) !== 0 ? ri(Uf, t) : t();
    });
  }
  function kc() {
    return Jl === 0 && (Jl = Bf()), Jl;
  }
  function Yo(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : Fu("" + t);
  }
  function wo(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function B0(t, e, l, a, u) {
    if (e === "submit" && l && l.stateNode === u) {
      var n = Yo((u[Pt] || null).action),
        c = a.submitter;
      c &&
        ((e = (e = c[Pt] || null)
          ? Yo(e.formAction)
          : c.getAttribute("formAction")),
        e !== null && ((n = e), (c = null)));
      var r = new en("action", "action", null, a, u);
      t.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Jl !== 0) {
                  var h = c ? wo(u, c) : new FormData(u);
                  ac(
                    l,
                    { pending: !0, data: h, method: u.method, action: n },
                    null,
                    h
                  );
                }
              } else
                typeof n == "function" &&
                  (r.preventDefault(),
                  (h = c ? wo(u, c) : new FormData(u)),
                  ac(
                    l,
                    { pending: !0, data: h, method: u.method, action: n },
                    n,
                    h
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var $c = 0; $c < jr.length; $c++) {
    var Wc = jr[$c],
      L0 = Wc.toLowerCase(),
      Y0 = Wc[0].toUpperCase() + Wc.slice(1);
    be(L0, "on" + Y0);
  }
  be(Rr, "onAnimationEnd"),
    be(Or, "onAnimationIteration"),
    be(zr, "onAnimationStart"),
    be("dblclick", "onDoubleClick"),
    be("focusin", "onFocus"),
    be("focusout", "onBlur"),
    be(l0, "onTransitionRun"),
    be(a0, "onTransitionStart"),
    be(u0, "onTransitionCancel"),
    be(Mr, "onTransitionEnd"),
    Il("onMouseEnter", ["mouseout", "mouseover"]),
    Il("onMouseLeave", ["mouseout", "mouseover"]),
    Il("onPointerEnter", ["pointerout", "pointerover"]),
    Il("onPointerLeave", ["pointerout", "pointerover"]),
    zl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    zl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    zl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    zl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    zl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    zl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var Eu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    w0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Eu)
    );
  function Zo(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event;
      a = a.listeners;
      t: {
        var n = void 0;
        if (e)
          for (var c = a.length - 1; 0 <= c; c--) {
            var r = a[c],
              h = r.instance,
              b = r.currentTarget;
            if (((r = r.listener), h !== n && u.isPropagationStopped()))
              break t;
            (n = r), (u.currentTarget = b);
            try {
              n(u);
            } catch (z) {
              _n(z);
            }
            (u.currentTarget = null), (n = h);
          }
        else
          for (c = 0; c < a.length; c++) {
            if (
              ((r = a[c]),
              (h = r.instance),
              (b = r.currentTarget),
              (r = r.listener),
              h !== n && u.isPropagationStopped())
            )
              break t;
            (n = r), (u.currentTarget = b);
            try {
              n(u);
            } catch (z) {
              _n(z);
            }
            (u.currentTarget = null), (n = h);
          }
      }
    }
  }
  function ct(t, e) {
    var l = e[di];
    l === void 0 && (l = e[di] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Go(e, t, 2, !1), l.add(a));
  }
  function Fc(t, e, l) {
    var a = 0;
    e && (a |= 4), Go(l, t, a, e);
  }
  var Yn = "_reactListening" + Math.random().toString(36).slice(2);
  function Pc(t) {
    if (!t[Yn]) {
      (t[Yn] = !0),
        Xf.forEach(function (l) {
          l !== "selectionchange" && (w0.has(l) || Fc(l, !1, t), Fc(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Yn] || ((e[Yn] = !0), Fc("selectionchange", !1, e));
    }
  }
  function Go(t, e, l, a) {
    switch (od(e)) {
      case 2:
        var u = dm;
        break;
      case 8:
        u = hm;
        break;
      default:
        u = df;
    }
    (l = u.bind(null, e, l, t)),
      (u = void 0),
      !bi ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      a
        ? u !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: u })
          : t.addEventListener(e, l, !0)
        : u !== void 0
        ? t.addEventListener(e, l, { passive: u })
        : t.addEventListener(e, l, !1);
  }
  function Ic(t, e, l, a, u) {
    var n = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var r = a.stateNode.containerInfo;
          if (r === u || (r.nodeType === 8 && r.parentNode === u)) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var h = c.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = c.stateNode.containerInfo),
                h === u || (h.nodeType === 8 && h.parentNode === u))
              )
                return;
              c = c.return;
            }
          for (; r !== null; ) {
            if (((c = Ol(r)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6 || h === 26 || h === 27)) {
              a = n = c;
              continue t;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    lr(function () {
      var b = n,
        z = pi(l),
        j = [];
      t: {
        var _ = Dr.get(t);
        if (_ !== void 0) {
          var O = en,
            V = t;
          switch (t) {
            case "keypress":
              if (Iu(l) === 0) break t;
            case "keydown":
            case "keyup":
              O = Nh;
              break;
            case "focusin":
              (V = "focus"), (O = _i);
              break;
            case "focusout":
              (V = "blur"), (O = _i);
              break;
            case "beforeblur":
            case "afterblur":
              O = _i;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = nr;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Eh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = qh;
              break;
            case Rr:
            case Or:
            case zr:
              O = _h;
              break;
            case Mr:
              O = Lh;
              break;
            case "scroll":
            case "scrollend":
              O = Sh;
              break;
            case "wheel":
              O = wh;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Rh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = cr;
              break;
            case "toggle":
            case "beforetoggle":
              O = Gh;
          }
          var I = (e & 4) !== 0,
            Rt = !I && (t === "scroll" || t === "scrollend"),
            E = I ? (_ !== null ? _ + "Capture" : null) : _;
          I = [];
          for (var S = b, T; S !== null; ) {
            var M = S;
            if (
              ((T = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                T === null ||
                E === null ||
                ((M = wa(S, E)), M != null && I.push(xu(S, M, T))),
              Rt)
            )
              break;
            S = S.return;
          }
          0 < I.length &&
            ((_ = new O(_, V, null, l, z)), j.push({ event: _, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((_ = t === "mouseover" || t === "pointerover"),
            (O = t === "mouseout" || t === "pointerout"),
            _ &&
              l !== gi &&
              (V = l.relatedTarget || l.fromElement) &&
              (Ol(V) || V[Wl]))
          )
            break t;
          if (
            (O || _) &&
            ((_ =
              z.window === z
                ? z
                : (_ = z.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            O
              ? ((V = l.relatedTarget || l.toElement),
                (O = b),
                (V = V ? Ol(V) : null),
                V !== null &&
                  ((Rt = F(V)),
                  (I = V.tag),
                  V !== Rt || (I !== 5 && I !== 27 && I !== 6)) &&
                  (V = null))
              : ((O = null), (V = b)),
            O !== V)
          ) {
            if (
              ((I = nr),
              (M = "onMouseLeave"),
              (E = "onMouseEnter"),
              (S = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((I = cr),
                (M = "onPointerLeave"),
                (E = "onPointerEnter"),
                (S = "pointer")),
              (Rt = O == null ? _ : Ya(O)),
              (T = V == null ? _ : Ya(V)),
              (_ = new I(M, S + "leave", O, l, z)),
              (_.target = Rt),
              (_.relatedTarget = T),
              (M = null),
              Ol(z) === b &&
                ((I = new I(E, S + "enter", V, l, z)),
                (I.target = T),
                (I.relatedTarget = Rt),
                (M = I)),
              (Rt = M),
              O && V)
            )
              e: {
                for (I = O, E = V, S = 0, T = I; T; T = Oa(T)) S++;
                for (T = 0, M = E; M; M = Oa(M)) T++;
                for (; 0 < S - T; ) (I = Oa(I)), S--;
                for (; 0 < T - S; ) (E = Oa(E)), T--;
                for (; S--; ) {
                  if (I === E || (E !== null && I === E.alternate)) break e;
                  (I = Oa(I)), (E = Oa(E));
                }
                I = null;
              }
            else I = null;
            O !== null && Qo(j, _, O, I, !1),
              V !== null && Rt !== null && Qo(j, Rt, V, I, !0);
          }
        }
        t: {
          if (
            ((_ = b ? Ya(b) : window),
            (O = _.nodeName && _.nodeName.toLowerCase()),
            O === "select" || (O === "input" && _.type === "file"))
          )
            var Z = vr;
          else if (hr(_))
            if (yr) Z = Ph;
            else {
              Z = Wh;
              var nt = $h;
            }
          else
            (O = _.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? b && yi(b.elementType) && (Z = vr)
                : (Z = Fh);
          if (Z && (Z = Z(t, b))) {
            mr(j, Z, l, z);
            break t;
          }
          nt && nt(t, _, b),
            t === "focusout" &&
              b &&
              _.type === "number" &&
              b.memoizedProps.value != null &&
              vi(_, "number", _.value);
        }
        switch (((nt = b ? Ya(b) : window), t)) {
          case "focusin":
            (hr(nt) || nt.contentEditable === "true") &&
              ((na = nt), (Di = b), (ka = null));
            break;
          case "focusout":
            ka = Di = na = null;
            break;
          case "mousedown":
            ji = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (ji = !1), _r(j, l, z);
            break;
          case "selectionchange":
            if (e0) break;
          case "keydown":
          case "keyup":
            _r(j, l, z);
        }
        var K;
        if (Ri)
          t: {
            switch (t) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break t;
              case "compositionend":
                $ = "onCompositionEnd";
                break t;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break t;
            }
            $ = void 0;
          }
        else
          ua
            ? or(t, l) && ($ = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (fr &&
            l.locale !== "ko" &&
            (ua || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && ua && (K = ar())
              : ((ul = z),
                (Ei = "value" in ul ? ul.value : ul.textContent),
                (ua = !0))),
          (nt = wn(b, $)),
          0 < nt.length &&
            (($ = new ir($, t, null, l, z)),
            j.push({ event: $, listeners: nt }),
            K ? ($.data = K) : ((K = dr(l)), K !== null && ($.data = K)))),
          (K = Xh ? Vh(t, l) : Kh(t, l)) &&
            (($ = wn(b, "onBeforeInput")),
            0 < $.length &&
              ((nt = new ir("onBeforeInput", "beforeinput", null, l, z)),
              j.push({ event: nt, listeners: $ }),
              (nt.data = K))),
          B0(j, t, b, l, z);
      }
      Zo(j, e);
    });
  }
  function xu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function wn(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var u = t,
        n = u.stateNode;
      (u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = wa(t, l)),
          u != null && a.unshift(xu(t, u, n)),
          (u = wa(t, e)),
          u != null && a.push(xu(t, u, n))),
        (t = t.return);
    }
    return a;
  }
  function Oa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Qo(t, e, l, a, u) {
    for (var n = e._reactName, c = []; l !== null && l !== a; ) {
      var r = l,
        h = r.alternate,
        b = r.stateNode;
      if (((r = r.tag), h !== null && h === a)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        b === null ||
        ((h = b),
        u
          ? ((b = wa(l, n)), b != null && c.unshift(xu(l, b, h)))
          : u || ((b = wa(l, n)), b != null && c.push(xu(l, b, h)))),
        (l = l.return);
    }
    c.length !== 0 && t.push({ event: e, listeners: c });
  }
  var Z0 = /\r\n?/g,
    G0 = /\u0000|\uFFFD/g;
  function Xo(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Z0,
        `
`
      )
      .replace(G0, "");
  }
  function Vo(t, e) {
    return (e = Xo(e)), Xo(t) === e;
  }
  function Zn() {}
  function vt(t, e, l, a, u, n) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || ea(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            ea(t, "" + a);
        break;
      case "className":
        ku(t, "class", a);
        break;
      case "tabIndex":
        ku(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ku(t, l, a);
        break;
      case "style":
        tr(t, a, n);
        break;
      case "data":
        if (e !== "object") {
          ku(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = Fu("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (l === "formAction"
              ? (e !== "input" && vt(t, e, "name", u.name, u, null),
                vt(t, e, "formEncType", u.formEncType, u, null),
                vt(t, e, "formMethod", u.formMethod, u, null),
                vt(t, e, "formTarget", u.formTarget, u, null))
              : (vt(t, e, "encType", u.encType, u, null),
                vt(t, e, "method", u.method, u, null),
                vt(t, e, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = Fu("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Zn);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = Fu("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        ct("beforetoggle", t), ct("toggle", t), Ju(t, "popover", a);
        break;
      case "xlinkActuate":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Be(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Be(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Ju(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = gh.get(l) || l), Ju(t, l, a));
    }
  }
  function tf(t, e, l, a, u, n) {
    switch (l) {
      case "style":
        tr(t, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(f(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? ea(t, a)
          : (typeof a == "number" || typeof a == "bigint") && ea(t, "" + a);
        break;
      case "onScroll":
        a != null && ct("scroll", t);
        break;
      case "onScrollEnd":
        a != null && ct("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Zn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Vf.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((u = l.endsWith("Capture")),
              (e = l.slice(2, u ? l.length - 7 : void 0)),
              (n = t[Pt] || null),
              (n = n != null ? n[l] : null),
              typeof n == "function" && t.removeEventListener(e, n, u),
              typeof a == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, u);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Ju(t, l, a);
          }
    }
  }
  function Gt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ct("error", t), ct("load", t);
        var a = !1,
          u = !1,
          n;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var c = l[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, e));
                default:
                  vt(t, e, n, c, l, null);
              }
          }
        u && vt(t, e, "srcSet", l.srcSet, l, null),
          a && vt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ct("invalid", t);
        var r = (n = c = u = null),
          h = null,
          b = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case "name":
                  u = z;
                  break;
                case "type":
                  c = z;
                  break;
                case "checked":
                  h = z;
                  break;
                case "defaultChecked":
                  b = z;
                  break;
                case "value":
                  n = z;
                  break;
                case "defaultValue":
                  r = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(f(137, e));
                  break;
                default:
                  vt(t, e, a, z, l, null);
              }
          }
        Wf(t, n, r, h, b, c, u, !1), $u(t);
        return;
      case "select":
        ct("invalid", t), (a = c = n = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((r = l[u]), r != null))
            switch (u) {
              case "value":
                n = r;
                break;
              case "defaultValue":
                c = r;
                break;
              case "multiple":
                a = r;
              default:
                vt(t, e, u, r, l, null);
            }
        (e = n),
          (l = c),
          (t.multiple = !!a),
          e != null ? ta(t, !!a, e, !1) : l != null && ta(t, !!a, l, !0);
        return;
      case "textarea":
        ct("invalid", t), (n = u = a = null);
        for (c in l)
          if (l.hasOwnProperty(c) && ((r = l[c]), r != null))
            switch (c) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                u = r;
                break;
              case "children":
                n = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                vt(t, e, c, r, l, null);
            }
        Pf(t, a, u, n), $u(t);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && ((a = l[h]), a != null))
            switch (h) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                vt(t, e, h, a, l, null);
            }
        return;
      case "dialog":
        ct("cancel", t), ct("close", t);
        break;
      case "iframe":
      case "object":
        ct("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Eu.length; a++) ct(Eu[a], t);
        break;
      case "image":
        ct("error", t), ct("load", t);
        break;
      case "details":
        ct("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ct("error", t), ct("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in l)
          if (l.hasOwnProperty(b) && ((a = l[b]), a != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, e));
              default:
                vt(t, e, b, a, l, null);
            }
        return;
      default:
        if (yi(e)) {
          for (z in l)
            l.hasOwnProperty(z) &&
              ((a = l[z]), a !== void 0 && tf(t, e, z, a, l, void 0));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && ((a = l[r]), a != null && vt(t, e, r, a, l, null));
  }
  function Q0(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          r = null,
          h = null,
          b = null,
          z = null;
        for (O in l) {
          var j = l[O];
          if (l.hasOwnProperty(O) && j != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = j;
              default:
                a.hasOwnProperty(O) || vt(t, e, O, null, a, j);
            }
        }
        for (var _ in a) {
          var O = a[_];
          if (((j = l[_]), a.hasOwnProperty(_) && (O != null || j != null)))
            switch (_) {
              case "type":
                n = O;
                break;
              case "name":
                u = O;
                break;
              case "checked":
                b = O;
                break;
              case "defaultChecked":
                z = O;
                break;
              case "value":
                c = O;
                break;
              case "defaultValue":
                r = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(f(137, e));
                break;
              default:
                O !== j && vt(t, e, _, O, a, j);
            }
        }
        mi(t, c, r, h, b, z, n, u);
        return;
      case "select":
        O = c = r = _ = null;
        for (n in l)
          if (((h = l[n]), l.hasOwnProperty(n) && h != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                O = h;
              default:
                a.hasOwnProperty(n) || vt(t, e, n, null, a, h);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (h = l[u]),
            a.hasOwnProperty(u) && (n != null || h != null))
          )
            switch (u) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                r = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== h && vt(t, e, u, n, a, h);
            }
        (e = r),
          (l = c),
          (a = O),
          _ != null
            ? ta(t, !!l, _, !1)
            : !!a != !!l &&
              (e != null ? ta(t, !!l, e, !0) : ta(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        O = _ = null;
        for (r in l)
          if (
            ((u = l[r]),
            l.hasOwnProperty(r) && u != null && !a.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, e, r, null, a, u);
            }
        for (c in a)
          if (
            ((u = a[c]),
            (n = l[c]),
            a.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                O = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(f(91));
                break;
              default:
                u !== n && vt(t, e, c, u, a, n);
            }
        Ff(t, _, O);
        return;
      case "option":
        for (var V in l)
          if (
            ((_ = l[V]),
            l.hasOwnProperty(V) && _ != null && !a.hasOwnProperty(V))
          )
            switch (V) {
              case "selected":
                t.selected = !1;
                break;
              default:
                vt(t, e, V, null, a, _);
            }
        for (h in a)
          if (
            ((_ = a[h]),
            (O = l[h]),
            a.hasOwnProperty(h) && _ !== O && (_ != null || O != null))
          )
            switch (h) {
              case "selected":
                t.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                vt(t, e, h, _, a, O);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var I in l)
          (_ = l[I]),
            l.hasOwnProperty(I) &&
              _ != null &&
              !a.hasOwnProperty(I) &&
              vt(t, e, I, null, a, _);
        for (b in a)
          if (
            ((_ = a[b]),
            (O = l[b]),
            a.hasOwnProperty(b) && _ !== O && (_ != null || O != null))
          )
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(f(137, e));
                break;
              default:
                vt(t, e, b, _, a, O);
            }
        return;
      default:
        if (yi(e)) {
          for (var Rt in l)
            (_ = l[Rt]),
              l.hasOwnProperty(Rt) &&
                _ !== void 0 &&
                !a.hasOwnProperty(Rt) &&
                tf(t, e, Rt, void 0, a, _);
          for (z in a)
            (_ = a[z]),
              (O = l[z]),
              !a.hasOwnProperty(z) ||
                _ === O ||
                (_ === void 0 && O === void 0) ||
                tf(t, e, z, _, a, O);
          return;
        }
    }
    for (var E in l)
      (_ = l[E]),
        l.hasOwnProperty(E) &&
          _ != null &&
          !a.hasOwnProperty(E) &&
          vt(t, e, E, null, a, _);
    for (j in a)
      (_ = a[j]),
        (O = l[j]),
        !a.hasOwnProperty(j) ||
          _ === O ||
          (_ == null && O == null) ||
          vt(t, e, j, _, a, O);
  }
  var ef = null,
    lf = null;
  function Gn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ko(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jo(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function af(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var uf = null;
  function X0() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === uf
        ? !1
        : ((uf = t), !0)
      : ((uf = null), !1);
  }
  var ko = typeof setTimeout == "function" ? setTimeout : void 0,
    V0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $o = typeof Promise == "function" ? Promise : void 0,
    K0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $o < "u"
        ? function (t) {
            return $o.resolve(null).then(t).catch(J0);
          }
        : ko;
  function J0(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function nf(t, e) {
    var l = e,
      a = 0;
    do {
      var u = l.nextSibling;
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === "/$")) {
          if (a === 0) {
            t.removeChild(u), Du(e);
            return;
          }
          a--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || a++;
      l = u;
    } while (l);
    Du(e);
  }
  function cf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cf(l), hi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function k0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[La])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((n = t.getAttribute("rel")),
                n === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                t.getAttribute("href") !== (u.href == null ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((n = t.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === n) return t;
      } else return t;
      if (((t = Te(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function $0(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = Te(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Te(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" || e === "$!" || e === "$?" || e === "F!" || e === "F")
        )
          break;
        if (e === "/$") return null;
      }
    }
    return t;
  }
  function Wo(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (e === 0) return t;
          e--;
        } else l === "/$" && e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Fo(t, e, l) {
    switch (((e = Gn(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(f(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(f(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(f(454));
        return t;
      default:
        throw Error(f(451));
    }
  }
  var Se = new Map(),
    Po = new Set();
  function Qn(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.ownerDocument;
  }
  var Pe = w.d;
  w.d = { f: W0, r: F0, D: P0, C: I0, L: tm, m: em, X: am, S: lm, M: um };
  function W0() {
    var t = Pe.f(),
      e = Hn();
    return t || e;
  }
  function F0(t) {
    var e = Fl(t);
    e !== null && e.tag === 5 && e.type === "form" ? _s(e) : Pe.r(t);
  }
  var za = typeof document > "u" ? null : document;
  function Io(t, e, l) {
    var a = za;
    if (a && typeof e == "string" && e) {
      var u = re(e);
      (u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof l == "string" && (u += '[crossorigin="' + l + '"]'),
        Po.has(u) ||
          (Po.add(u),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(u) === null &&
            ((e = a.createElement("link")),
            Gt(e, "link", t),
            Ht(e),
            a.head.appendChild(e)));
    }
  }
  function P0(t) {
    Pe.D(t), Io("dns-prefetch", t, null);
  }
  function I0(t, e) {
    Pe.C(t, e), Io("preconnect", t, e);
  }
  function tm(t, e, l) {
    Pe.L(t, e, l);
    var a = za;
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + re(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((u += '[imagesrcset="' + re(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (u += '[imagesizes="' + re(l.imageSizes) + '"]'))
        : (u += '[href="' + re(t) + '"]');
      var n = u;
      switch (e) {
        case "style":
          n = Ma(t);
          break;
        case "script":
          n = Da(t);
      }
      Se.has(n) ||
        ((t = lt(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        Se.set(n, t),
        a.querySelector(u) !== null ||
          (e === "style" && a.querySelector(Tu(n))) ||
          (e === "script" && a.querySelector(_u(n))) ||
          ((e = a.createElement("link")),
          Gt(e, "link", t),
          Ht(e),
          a.head.appendChild(e)));
    }
  }
  function em(t, e) {
    Pe.m(t, e);
    var l = za;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + re(a) + '"][href="' + re(t) + '"]',
        n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Da(t);
      }
      if (
        !Se.has(n) &&
        ((t = lt({ rel: "modulepreload", href: t }, e)),
        Se.set(n, t),
        l.querySelector(u) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(_u(n))) return;
        }
        (a = l.createElement("link")),
          Gt(a, "link", t),
          Ht(a),
          l.head.appendChild(a);
      }
    }
  }
  function lm(t, e, l) {
    Pe.S(t, e, l);
    var a = za;
    if (a && t) {
      var u = Pl(a).hoistableStyles,
        n = Ma(t);
      e = e || "default";
      var c = u.get(n);
      if (!c) {
        var r = { loading: 0, preload: null };
        if ((c = a.querySelector(Tu(n)))) r.loading = 5;
        else {
          (t = lt({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Se.get(n)) && ff(t, l);
          var h = (c = a.createElement("link"));
          Ht(h),
            Gt(h, "link", t),
            (h._p = new Promise(function (b, z) {
              (h.onload = b), (h.onerror = z);
            })),
            h.addEventListener("load", function () {
              r.loading |= 1;
            }),
            h.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            Xn(c, e, a);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: r }),
          u.set(n, c);
      }
    }
  }
  function am(t, e) {
    Pe.X(t, e);
    var l = za;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        u = Da(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(_u(u))),
        n ||
          ((t = lt({ src: t, async: !0 }, e)),
          (e = Se.get(u)) && rf(t, e),
          (n = l.createElement("script")),
          Ht(n),
          Gt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function um(t, e) {
    Pe.M(t, e);
    var l = za;
    if (l && t) {
      var a = Pl(l).hoistableScripts,
        u = Da(t),
        n = a.get(u);
      n ||
        ((n = l.querySelector(_u(u))),
        n ||
          ((t = lt({ src: t, async: !0, type: "module" }, e)),
          (e = Se.get(u)) && rf(t, e),
          (n = l.createElement("script")),
          Ht(n),
          Gt(n, "link", t),
          l.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        a.set(u, n));
    }
  }
  function td(t, e, l, a) {
    var u = (u = el.current) ? Qn(u) : null;
    if (!u) throw Error(f(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Ma(l.href)),
            (l = Pl(u).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Ma(l.href);
          var n = Pl(u).hoistableStyles,
            c = n.get(t);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(t, c),
              (n = u.querySelector(Tu(t))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              Se.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Se.set(t, l),
                n || nm(u, t, l, c.state))),
            e && a === null)
          )
            throw Error(f(528, ""));
          return c;
        }
        if (e && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Da(l)),
              (l = Pl(u).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, t));
    }
  }
  function Ma(t) {
    return 'href="' + re(t) + '"';
  }
  function Tu(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function ed(t) {
    return lt({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function nm(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Gt(e, "link", l),
        Ht(e),
        t.head.appendChild(e));
  }
  function Da(t) {
    return '[src="' + re(t) + '"]';
  }
  function _u(t) {
    return "script[async]" + t;
  }
  function ld(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + re(l.href) + '"]');
          if (a) return (e.instance = a), Ht(a), a;
          var u = lt({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Ht(a),
            Gt(a, "style", u),
            Xn(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          u = Ma(l.href);
          var n = t.querySelector(Tu(u));
          if (n) return (e.state.loading |= 4), (e.instance = n), Ht(n), n;
          (a = ed(l)),
            (u = Se.get(u)) && ff(a, u),
            (n = (t.ownerDocument || t).createElement("link")),
            Ht(n);
          var c = n;
          return (
            (c._p = new Promise(function (r, h) {
              (c.onload = r), (c.onerror = h);
            })),
            Gt(n, "link", a),
            (e.state.loading |= 4),
            Xn(n, l.precedence, t),
            (e.instance = n)
          );
        case "script":
          return (
            (n = Da(l.src)),
            (u = t.querySelector(_u(n)))
              ? ((e.instance = u), Ht(u), u)
              : ((a = l),
                (u = Se.get(n)) && ((a = lt({}, l)), rf(a, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                Ht(u),
                Gt(u, "link", a),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Xn(a, l.precedence, t));
    return e.instance;
  }
  function Xn(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = a.length ? a[a.length - 1] : null,
        n = u,
        c = 0;
      c < a.length;
      c++
    ) {
      var r = a[c];
      if (r.dataset.precedence === e) n = r;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(t, n.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function ff(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function rf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Vn = null;
  function ad(t, e, l) {
    if (Vn === null) {
      var a = new Map(),
        u = (Vn = new Map());
      u.set(l, a);
    } else (u = Vn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), u = 0;
      u < l.length;
      u++
    ) {
      var n = l[u];
      if (
        !(
          n[La] ||
          n[Xt] ||
          (t === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(e) || "";
        c = t + c;
        var r = a.get(c);
        r ? r.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function ud(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function im(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function nd(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var Au = null;
  function cm() {}
  function fm(t, e, l) {
    if (Au === null) throw Error(f(475));
    var a = Au;
    if (
      e.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (e.state.loading & 4) === 0
    ) {
      if (e.instance === null) {
        var u = Ma(l.href),
          n = t.querySelector(Tu(u));
        if (n) {
          (t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (a.count++, (a = Kn.bind(a)), t.then(a, a)),
            (e.state.loading |= 4),
            (e.instance = n),
            Ht(n);
          return;
        }
        (n = t.ownerDocument || t),
          (l = ed(l)),
          (u = Se.get(u)) && ff(l, u),
          (n = n.createElement("link")),
          Ht(n);
        var c = n;
        (c._p = new Promise(function (r, h) {
          (c.onload = r), (c.onerror = h);
        })),
          Gt(n, "link", l),
          (e.instance = n);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(e, t),
        (t = e.state.preload) &&
          (e.state.loading & 3) === 0 &&
          (a.count++,
          (e = Kn.bind(a)),
          t.addEventListener("load", e),
          t.addEventListener("error", e));
    }
  }
  function rm() {
    if (Au === null) throw Error(f(475));
    var t = Au;
    return (
      t.stylesheets && t.count === 0 && sf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && sf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend;
                (t.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (t.unsuspend = e),
              function () {
                (t.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function Kn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) sf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Jn = null;
  function sf(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Jn = new Map()),
        e.forEach(sm, t),
        (Jn = null),
        Kn.call(t));
  }
  function sm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Jn.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Jn.set(t, l);
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (l.set(c.dataset.precedence, c), (a = c));
        }
        a && l.set(null, a);
      }
      (u = e.instance),
        (c = u.getAttribute("data-precedence")),
        (n = l.get(c) || a),
        n === a && l.set(null, u),
        l.set(c, u),
        this.count++,
        (a = Kn.bind(this)),
        u.addEventListener("load", a),
        u.addEventListener("error", a),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var Ru = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: ft,
    _currentValue2: ft,
    _threadCount: 0,
  };
  function om(t, e, l, a, u, n, c, r) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = oi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = oi(0)),
      (this.hiddenUpdates = oi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function id(t, e, l, a, u, n, c, r, h, b, z, j) {
    return (
      (t = new om(t, e, l, c, r, h, b, j)),
      (e = 1),
      n === !0 && (e |= 24),
      (n = ge(3, null, null, e)),
      (t.current = n),
      (n.stateNode = t),
      (e = Zi()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (n.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Ec(n),
      t
    );
  }
  function cd(t) {
    return t ? ((t = fa), t) : fa;
  }
  function fd(t, e, l, a, u, n) {
    (u = cd(u)),
      a.context === null ? (a.context = u) : (a.pendingContext = u),
      (a = dl(e)),
      (a.payload = { element: l }),
      (n = n === void 0 ? null : n),
      n !== null && (a.callback = n),
      (l = hl(t, a, e)),
      l !== null && (Wt(l, t, e), ru(l, t, e));
  }
  function rd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function of(t, e) {
    rd(t, e), (t = t.alternate) && rd(t, e);
  }
  function sd(t) {
    if (t.tag === 13) {
      var e = nl(t, 67108864);
      e !== null && Wt(e, t, 67108864), of(t, 67108864);
    }
  }
  var kn = !0;
  function dm(t, e, l, a) {
    var u = G.T;
    G.T = null;
    var n = w.p;
    try {
      (w.p = 2), df(t, e, l, a);
    } finally {
      (w.p = n), (G.T = u);
    }
  }
  function hm(t, e, l, a) {
    var u = G.T;
    G.T = null;
    var n = w.p;
    try {
      (w.p = 8), df(t, e, l, a);
    } finally {
      (w.p = n), (G.T = u);
    }
  }
  function df(t, e, l, a) {
    if (kn) {
      var u = hf(a);
      if (u === null) Ic(t, e, a, $n, l), dd(t, a);
      else if (vm(u, t, e, l, a)) a.stopPropagation();
      else if ((dd(t, a), e & 4 && -1 < mm.indexOf(t))) {
        for (; u !== null; ) {
          var n = Fl(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Rl(n.pendingLanes);
                  if (c !== 0) {
                    var r = n;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; c; ) {
                      var h = 1 << (31 - le(c));
                      (r.entanglements[1] |= h), (c &= ~h);
                    }
                    je(n), (xt & 6) === 0 && ((Cn = Re() + 500), bu(0));
                  }
                }
                break;
              case 13:
                (r = nl(n, 2)), r !== null && Wt(r, n, 2), Hn(), of(n, 2);
            }
          if (((n = hf(a)), n === null && Ic(t, e, a, $n, l), n === u)) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else Ic(t, e, a, null, l);
    }
  }
  function hf(t) {
    return (t = pi(t)), mf(t);
  }
  var $n = null;
  function mf(t) {
    if ((($n = null), (t = Ol(t)), t !== null)) {
      var e = F(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = gt(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ($n = t), null;
  }
  function od(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Id()) {
          case Uf:
            return 2;
          case Hf:
            return 8;
          case Qu:
          case th:
            return 32;
          case qf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1,
    bl = null,
    El = null,
    xl = null,
    Ou = new Map(),
    zu = new Map(),
    Tl = [],
    mm =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function dd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        bl = null;
        break;
      case "dragenter":
      case "dragleave":
        El = null;
        break;
      case "mouseover":
      case "mouseout":
        xl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ou.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        zu.delete(e.pointerId);
    }
  }
  function Mu(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: n,
          targetContainers: [u],
        }),
        e !== null && ((e = Fl(e)), e !== null && sd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function vm(t, e, l, a, u) {
    switch (e) {
      case "focusin":
        return (bl = Mu(bl, t, e, l, a, u)), !0;
      case "dragenter":
        return (El = Mu(El, t, e, l, a, u)), !0;
      case "mouseover":
        return (xl = Mu(xl, t, e, l, a, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Ou.set(n, Mu(Ou.get(n) || null, t, e, l, a, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), zu.set(n, Mu(zu.get(n) || null, t, e, l, a, u)), !0
        );
    }
    return !1;
  }
  function hd(t) {
    var e = Ol(t.target);
    if (e !== null) {
      var l = F(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = gt(l)), e !== null)) {
            (t.blockedOn = e),
              rh(t.priority, function () {
                if (l.tag === 13) {
                  var a = ce(),
                    u = nl(l, a);
                  u !== null && Wt(u, l, a), of(l, a);
                }
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wn(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = hf(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (gi = a), l.target.dispatchEvent(a), (gi = null);
      } else return (e = Fl(l)), e !== null && sd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function md(t, e, l) {
    Wn(t) && l.delete(e);
  }
  function ym() {
    (vf = !1),
      bl !== null && Wn(bl) && (bl = null),
      El !== null && Wn(El) && (El = null),
      xl !== null && Wn(xl) && (xl = null),
      Ou.forEach(md),
      zu.forEach(md);
  }
  function Fn(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      vf ||
        ((vf = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, ym)));
  }
  var Pn = null;
  function vd(t) {
    Pn !== t &&
      ((Pn = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Pn === t && (Pn = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2];
          if (typeof a != "function") {
            if (mf(a || l) === null) continue;
            break;
          }
          var n = Fl(l);
          n !== null &&
            (t.splice(e, 3),
            (e -= 3),
            ac(n, { pending: !0, data: u, method: l.method, action: a }, a, u));
        }
      }));
  }
  function Du(t) {
    function e(h) {
      return Fn(h, t);
    }
    bl !== null && Fn(bl, t),
      El !== null && Fn(El, t),
      xl !== null && Fn(xl, t),
      Ou.forEach(e),
      zu.forEach(e);
    for (var l = 0; l < Tl.length; l++) {
      var a = Tl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Tl.length && ((l = Tl[0]), l.blockedOn === null); )
      hd(l), l.blockedOn === null && Tl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          c = u[Pt] || null;
        if (typeof n == "function") c || vd(l);
        else if (c) {
          var r = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Pt] || null))) r = c.formAction;
            else if (mf(u) !== null) continue;
          } else r = c.action;
          typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
            vd(l);
        }
      }
  }
  function yf(t) {
    this._internalRoot = t;
  }
  (In.prototype.render = yf.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(f(409));
      var l = e.current,
        a = ce();
      fd(l, a, t, e, null, null);
    }),
    (In.prototype.unmount = yf.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          t.tag === 0 && Aa(),
            fd(t.current, 2, null, t, null, null),
            Hn(),
            (e[Wl] = null);
        }
      });
  function In(t) {
    this._internalRoot = t;
  }
  In.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Gf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Tl.length && e !== 0 && e < Tl[l].priority; l++);
      Tl.splice(l, 0, t), l === 0 && hd(t);
    }
  };
  var yd = o.version;
  if (yd !== "19.0.0") throw Error(f(527, yd, "19.0.0"));
  w.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(f(188))
        : ((t = Object.keys(t).join(",")), Error(f(268, t)));
    return (
      (t = H(e)),
      (t = t !== null ? W(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var gm = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    findFiberByHostInstance: Ol,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber)
      try {
        (Ha = ti.inject(gm)), (ee = ti);
      } catch {}
  }
  return (
    (Cu.createRoot = function (t, e) {
      if (!d(t)) throw Error(f(299));
      var l = !1,
        a = "",
        u = Cs,
        n = Ns,
        c = Us,
        r = null;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (n = e.onCaughtError),
          e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
          e.unstable_transitionCallbacks !== void 0 &&
            (r = e.unstable_transitionCallbacks)),
        (e = id(t, 1, !1, null, null, l, a, u, n, c, r, null)),
        (t[Wl] = e.current),
        Pc(t.nodeType === 8 ? t.parentNode : t),
        new yf(e)
      );
    }),
    (Cu.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(f(299));
      var a = !1,
        u = "",
        n = Cs,
        c = Ns,
        r = Us,
        h = null,
        b = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (u = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (n = l.onUncaughtError),
          l.onCaughtError !== void 0 && (c = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (h = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (b = l.formState)),
        (e = id(t, 1, !0, e, l ?? null, a, u, n, c, r, h, b)),
        (e.context = cd(null)),
        (l = e.current),
        (a = ce()),
        (u = dl(a)),
        (u.callback = null),
        hl(l, u, a),
        (e.current.lanes = a),
        Ba(e, a),
        je(e),
        (t[Wl] = e.current),
        Pc(t),
        new In(e)
      );
    }),
    (Cu.version = "19.0.0"),
    Cu
  );
}
var Rd;
function zm() {
  if (Rd) return Sf.exports;
  Rd = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), (Sf.exports = Om()), Sf.exports;
}
var Mm = zm(),
  Nu = {},
  Od;
function Dm() {
  if (Od) return Nu;
  (Od = 1),
    Object.defineProperty(Nu, "__esModule", { value: !0 }),
    (Nu.parse = x),
    (Nu.serialize = v);
  const i = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    s =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    g = (() => {
      const C = function () {};
      return (C.prototype = Object.create(null)), C;
    })();
  function x(C, N) {
    const U = new g(),
      X = C.length;
    if (X < 2) return U;
    const L = (N == null ? void 0 : N.decode) || D;
    let B = 0;
    do {
      const J = C.indexOf("=", B);
      if (J === -1) break;
      const Q = C.indexOf(";", B),
        ht = Q === -1 ? X : Q;
      if (J > ht) {
        B = C.lastIndexOf(";", J - 1) + 1;
        continue;
      }
      const P = R(C, B, J),
        Ot = y(C, J, P),
        Yt = C.slice(P, Ot);
      if (U[Yt] === void 0) {
        let Qt = R(C, J + 1, ht),
          G = y(C, ht, Qt);
        const lt = L(C.slice(Qt, G));
        U[Yt] = lt;
      }
      B = ht + 1;
    } while (B < X);
    return U;
  }
  function R(C, N, U) {
    do {
      const X = C.charCodeAt(N);
      if (X !== 32 && X !== 9) return N;
    } while (++N < U);
    return U;
  }
  function y(C, N, U) {
    for (; N > U; ) {
      const X = C.charCodeAt(--N);
      if (X !== 32 && X !== 9) return N + 1;
    }
    return U;
  }
  function v(C, N, U) {
    const X = (U == null ? void 0 : U.encode) || encodeURIComponent;
    if (!i.test(C)) throw new TypeError(`argument name is invalid: ${C}`);
    const L = X(N);
    if (!o.test(L)) throw new TypeError(`argument val is invalid: ${N}`);
    let B = C + "=" + L;
    if (!U) return B;
    if (U.maxAge !== void 0) {
      if (!Number.isInteger(U.maxAge))
        throw new TypeError(`option maxAge is invalid: ${U.maxAge}`);
      B += "; Max-Age=" + U.maxAge;
    }
    if (U.domain) {
      if (!s.test(U.domain))
        throw new TypeError(`option domain is invalid: ${U.domain}`);
      B += "; Domain=" + U.domain;
    }
    if (U.path) {
      if (!f.test(U.path))
        throw new TypeError(`option path is invalid: ${U.path}`);
      B += "; Path=" + U.path;
    }
    if (U.expires) {
      if (!q(U.expires) || !Number.isFinite(U.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${U.expires}`);
      B += "; Expires=" + U.expires.toUTCString();
    }
    if (
      (U.httpOnly && (B += "; HttpOnly"),
      U.secure && (B += "; Secure"),
      U.partitioned && (B += "; Partitioned"),
      U.priority)
    )
      switch (
        typeof U.priority == "string" ? U.priority.toLowerCase() : void 0
      ) {
        case "low":
          B += "; Priority=Low";
          break;
        case "medium":
          B += "; Priority=Medium";
          break;
        case "high":
          B += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${U.priority}`);
      }
    if (U.sameSite)
      switch (
        typeof U.sameSite == "string" ? U.sameSite.toLowerCase() : U.sameSite
      ) {
        case !0:
        case "strict":
          B += "; SameSite=Strict";
          break;
        case "lax":
          B += "; SameSite=Lax";
          break;
        case "none":
          B += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${U.sameSite}`);
      }
    return B;
  }
  function D(C) {
    if (C.indexOf("%") === -1) return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function q(C) {
    return d.call(C) === "[object Date]";
  }
  return Nu;
}
Dm();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var zd = "popstate";
function jm(i = {}) {
  function o(f, d) {
    let { pathname: g, search: x, hash: R } = f.location;
    return Af(
      "",
      { pathname: g, search: x, hash: R },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default"
    );
  }
  function s(f, d) {
    return typeof d == "string" ? d : qu(d);
  }
  return Nm(o, s, null, i);
}
function Tt(i, o) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(o);
}
function Ce(i, o) {
  if (!i) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function Cm() {
  return Math.random().toString(36).substring(2, 10);
}
function Md(i, o) {
  return { usr: i.state, key: i.key, idx: o };
}
function Af(i, o, s = null, f) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? ja(o) : o),
    state: s,
    key: (o && o.key) || f || Cm(),
  };
}
function qu({ pathname: i = "/", search: o = "", hash: s = "" }) {
  return (
    o && o !== "?" && (i += o.charAt(0) === "?" ? o : "?" + o),
    s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s),
    i
  );
}
function ja(i) {
  let o = {};
  if (i) {
    let s = i.indexOf("#");
    s >= 0 && ((o.hash = i.substring(s)), (i = i.substring(0, s)));
    let f = i.indexOf("?");
    f >= 0 && ((o.search = i.substring(f)), (i = i.substring(0, f))),
      i && (o.pathname = i);
  }
  return o;
}
function Nm(i, o, s, f = {}) {
  let { window: d = document.defaultView, v5Compat: g = !1 } = f,
    x = d.history,
    R = "POP",
    y = null,
    v = D();
  v == null && ((v = 0), x.replaceState({ ...x.state, idx: v }, ""));
  function D() {
    return (x.state || { idx: null }).idx;
  }
  function q() {
    R = "POP";
    let L = D(),
      B = L == null ? null : L - v;
    (v = L), y && y({ action: R, location: X.location, delta: B });
  }
  function C(L, B) {
    R = "PUSH";
    let J = Af(X.location, L, B);
    v = D() + 1;
    let Q = Md(J, v),
      ht = X.createHref(J);
    try {
      x.pushState(Q, "", ht);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      d.location.assign(ht);
    }
    g && y && y({ action: R, location: X.location, delta: 1 });
  }
  function N(L, B) {
    R = "REPLACE";
    let J = Af(X.location, L, B);
    v = D();
    let Q = Md(J, v),
      ht = X.createHref(J);
    x.replaceState(Q, "", ht),
      g && y && y({ action: R, location: X.location, delta: 0 });
  }
  function U(L) {
    let B = d.location.origin !== "null" ? d.location.origin : d.location.href,
      J = typeof L == "string" ? L : qu(L);
    return (
      (J = J.replace(/ $/, "%20")),
      Tt(
        B,
        `No window.location.(origin|href) available to create URL for href: ${J}`
      ),
      new URL(J, B)
    );
  }
  let X = {
    get action() {
      return R;
    },
    get location() {
      return i(d, x);
    },
    listen(L) {
      if (y) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(zd, q),
        (y = L),
        () => {
          d.removeEventListener(zd, q), (y = null);
        }
      );
    },
    createHref(L) {
      return o(d, L);
    },
    createURL: U,
    encodeLocation(L) {
      let B = U(L);
      return { pathname: B.pathname, search: B.search, hash: B.hash };
    },
    push: C,
    replace: N,
    go(L) {
      return x.go(L);
    },
  };
  return X;
}
function Ud(i, o, s = "/") {
  return Um(i, o, s, !1);
}
function Um(i, o, s, f) {
  let d = typeof o == "string" ? ja(o) : o,
    g = Al(d.pathname || "/", s);
  if (g == null) return null;
  let x = Hd(i);
  Hm(x);
  let R = null;
  for (let y = 0; R == null && y < x.length; ++y) {
    let v = Km(g);
    R = Xm(x[y], v, f);
  }
  return R;
}
function Hd(i, o = [], s = [], f = "") {
  let d = (g, x, R) => {
    let y = {
      relativePath: R === void 0 ? g.path || "" : R,
      caseSensitive: g.caseSensitive === !0,
      childrenIndex: x,
      route: g,
    };
    y.relativePath.startsWith("/") &&
      (Tt(
        y.relativePath.startsWith(f),
        `Absolute route path "${y.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (y.relativePath = y.relativePath.slice(f.length)));
    let v = Ie([f, y.relativePath]),
      D = s.concat(y);
    g.children &&
      g.children.length > 0 &&
      (Tt(
        g.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${v}".`
      ),
      Hd(g.children, o, D, v)),
      !(g.path == null && !g.index) &&
        o.push({ path: v, score: Gm(v, g.index), routesMeta: D });
  };
  return (
    i.forEach((g, x) => {
      var R;
      if (g.path === "" || !((R = g.path) != null && R.includes("?"))) d(g, x);
      else for (let y of qd(g.path)) d(g, x, y);
    }),
    o
  );
}
function qd(i) {
  let o = i.split("/");
  if (o.length === 0) return [];
  let [s, ...f] = o,
    d = s.endsWith("?"),
    g = s.replace(/\?$/, "");
  if (f.length === 0) return d ? [g, ""] : [g];
  let x = qd(f.join("/")),
    R = [];
  return (
    R.push(...x.map((y) => (y === "" ? g : [g, y].join("/")))),
    d && R.push(...x),
    R.map((y) => (i.startsWith("/") && y === "" ? "/" : y))
  );
}
function Hm(i) {
  i.sort((o, s) =>
    o.score !== s.score
      ? s.score - o.score
      : Qm(
          o.routesMeta.map((f) => f.childrenIndex),
          s.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var qm = /^:[\w-]+$/,
  Bm = 3,
  Lm = 2,
  Ym = 1,
  wm = 10,
  Zm = -2,
  Dd = (i) => i === "*";
function Gm(i, o) {
  let s = i.split("/"),
    f = s.length;
  return (
    s.some(Dd) && (f += Zm),
    o && (f += Lm),
    s
      .filter((d) => !Dd(d))
      .reduce((d, g) => d + (qm.test(g) ? Bm : g === "" ? Ym : wm), f)
  );
}
function Qm(i, o) {
  return i.length === o.length && i.slice(0, -1).every((f, d) => f === o[d])
    ? i[i.length - 1] - o[o.length - 1]
    : 0;
}
function Xm(i, o, s = !1) {
  let { routesMeta: f } = i,
    d = {},
    g = "/",
    x = [];
  for (let R = 0; R < f.length; ++R) {
    let y = f[R],
      v = R === f.length - 1,
      D = g === "/" ? o : o.slice(g.length) || "/",
      q = ui(
        { path: y.relativePath, caseSensitive: y.caseSensitive, end: v },
        D
      ),
      C = y.route;
    if (
      (!q &&
        v &&
        s &&
        !f[f.length - 1].route.index &&
        (q = ui(
          { path: y.relativePath, caseSensitive: y.caseSensitive, end: !1 },
          D
        )),
      !q)
    )
      return null;
    Object.assign(d, q.params),
      x.push({
        params: d,
        pathname: Ie([g, q.pathname]),
        pathnameBase: Wm(Ie([g, q.pathnameBase])),
        route: C,
      }),
      q.pathnameBase !== "/" && (g = Ie([g, q.pathnameBase]));
  }
  return x;
}
function ui(i, o) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [s, f] = Vm(i.path, i.caseSensitive, i.end),
    d = o.match(s);
  if (!d) return null;
  let g = d[0],
    x = g.replace(/(.)\/+$/, "$1"),
    R = d.slice(1);
  return {
    params: f.reduce((v, { paramName: D, isOptional: q }, C) => {
      if (D === "*") {
        let U = R[C] || "";
        x = g.slice(0, g.length - U.length).replace(/(.)\/+$/, "$1");
      }
      const N = R[C];
      return (
        q && !N ? (v[D] = void 0) : (v[D] = (N || "").replace(/%2F/g, "/")), v
      );
    }, {}),
    pathname: g,
    pathnameBase: x,
    pattern: i,
  };
}
function Vm(i, o = !1, s = !0) {
  Ce(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    d =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (x, R, y) => (
            f.push({ paramName: R, isOptional: y != null }),
            y ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    i.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (d += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : s
      ? (d += "\\/*$")
      : i !== "" && i !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, o ? void 0 : "i"), f]
  );
}
function Km(i) {
  try {
    return i
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      Ce(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      i
    );
  }
}
function Al(i, o) {
  if (o === "/") return i;
  if (!i.toLowerCase().startsWith(o.toLowerCase())) return null;
  let s = o.endsWith("/") ? o.length - 1 : o.length,
    f = i.charAt(s);
  return f && f !== "/" ? null : i.slice(s) || "/";
}
function Jm(i, o = "/") {
  let {
    pathname: s,
    search: f = "",
    hash: d = "",
  } = typeof i == "string" ? ja(i) : i;
  return {
    pathname: s ? (s.startsWith("/") ? s : km(s, o)) : o,
    search: Fm(f),
    hash: Pm(d),
  };
}
function km(i, o) {
  let s = o.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((d) => {
      d === ".." ? s.length > 1 && s.pop() : d !== "." && s.push(d);
    }),
    s.length > 1 ? s.join("/") : "/"
  );
}
function Tf(i, o, s, f) {
  return `Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $m(i) {
  return i.filter(
    (o, s) => s === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function Bd(i) {
  let o = $m(i);
  return o.map((s, f) => (f === o.length - 1 ? s.pathname : s.pathnameBase));
}
function Ld(i, o, s, f = !1) {
  let d;
  typeof i == "string"
    ? (d = ja(i))
    : ((d = { ...i }),
      Tt(
        !d.pathname || !d.pathname.includes("?"),
        Tf("?", "pathname", "search", d)
      ),
      Tt(
        !d.pathname || !d.pathname.includes("#"),
        Tf("#", "pathname", "hash", d)
      ),
      Tt(!d.search || !d.search.includes("#"), Tf("#", "search", "hash", d)));
  let g = i === "" || d.pathname === "",
    x = g ? "/" : d.pathname,
    R;
  if (x == null) R = s;
  else {
    let q = o.length - 1;
    if (!f && x.startsWith("..")) {
      let C = x.split("/");
      for (; C[0] === ".."; ) C.shift(), (q -= 1);
      d.pathname = C.join("/");
    }
    R = q >= 0 ? o[q] : "/";
  }
  let y = Jm(d, R),
    v = x && x !== "/" && x.endsWith("/"),
    D = (g || x === ".") && s.endsWith("/");
  return !y.pathname.endsWith("/") && (v || D) && (y.pathname += "/"), y;
}
var Ie = (i) => i.join("/").replace(/\/\/+/g, "/"),
  Wm = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Fm = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  Pm = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i);
function Im(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
var Yd = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Yd);
var tv = ["GET", ...Yd];
new Set(tv);
var Ca = A.createContext(null);
Ca.displayName = "DataRouter";
var ni = A.createContext(null);
ni.displayName = "DataRouterState";
var wd = A.createContext({ isTransitioning: !1 });
wd.displayName = "ViewTransition";
var ev = A.createContext(new Map());
ev.displayName = "Fetchers";
var lv = A.createContext(null);
lv.displayName = "Await";
var Ne = A.createContext(null);
Ne.displayName = "Navigation";
var Bu = A.createContext(null);
Bu.displayName = "Location";
var tl = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
tl.displayName = "Route";
var zf = A.createContext(null);
zf.displayName = "RouteError";
function av(i, { relative: o } = {}) {
  Tt(
    Lu(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: f } = A.useContext(Ne),
    { hash: d, pathname: g, search: x } = Yu(i, { relative: o }),
    R = g;
  return (
    s !== "/" && (R = g === "/" ? s : Ie([s, g])),
    f.createHref({ pathname: R, search: x, hash: d })
  );
}
function Lu() {
  return A.useContext(Bu) != null;
}
function kl() {
  return (
    Tt(
      Lu(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    A.useContext(Bu).location
  );
}
var Zd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Gd(i) {
  A.useContext(Ne).static || A.useLayoutEffect(i);
}
function uv() {
  let { isDataRoute: i } = A.useContext(tl);
  return i ? gv() : nv();
}
function nv() {
  Tt(
    Lu(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = A.useContext(Ca),
    { basename: o, navigator: s } = A.useContext(Ne),
    { matches: f } = A.useContext(tl),
    { pathname: d } = kl(),
    g = JSON.stringify(Bd(f)),
    x = A.useRef(!1);
  return (
    Gd(() => {
      x.current = !0;
    }),
    A.useCallback(
      (y, v = {}) => {
        if ((Ce(x.current, Zd), !x.current)) return;
        if (typeof y == "number") {
          s.go(y);
          return;
        }
        let D = Ld(y, JSON.parse(g), d, v.relative === "path");
        i == null &&
          o !== "/" &&
          (D.pathname = D.pathname === "/" ? o : Ie([o, D.pathname])),
          (v.replace ? s.replace : s.push)(D, v.state, v);
      },
      [o, s, g, d, i]
    )
  );
}
A.createContext(null);
function Yu(i, { relative: o } = {}) {
  let { matches: s } = A.useContext(tl),
    { pathname: f } = kl(),
    d = JSON.stringify(Bd(s));
  return A.useMemo(() => Ld(i, JSON.parse(d), f, o === "path"), [i, d, f, o]);
}
function iv(i, o) {
  return Qd(i, o);
}
function Qd(i, o, s, f) {
  var J;
  Tt(
    Lu(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d, static: g } = A.useContext(Ne),
    { matches: x } = A.useContext(tl),
    R = x[x.length - 1],
    y = R ? R.params : {},
    v = R ? R.pathname : "/",
    D = R ? R.pathnameBase : "/",
    q = R && R.route;
  {
    let Q = (q && q.path) || "";
    Xd(
      v,
      !q || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${
        Q === "/" ? "*" : `${Q}/*`
      }">.`
    );
  }
  let C = kl(),
    N;
  if (o) {
    let Q = typeof o == "string" ? ja(o) : o;
    Tt(
      D === "/" || ((J = Q.pathname) == null ? void 0 : J.startsWith(D)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${D}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ),
      (N = Q);
  } else N = C;
  let U = N.pathname || "/",
    X = U;
  if (D !== "/") {
    let Q = D.replace(/^\//, "").split("/");
    X = "/" + U.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let L =
    !g && s && s.matches && s.matches.length > 0
      ? s.matches
      : Ud(i, { pathname: X });
  Ce(
    q || L != null,
    `No routes matched location "${N.pathname}${N.search}${N.hash}" `
  ),
    Ce(
      L == null ||
        L[L.length - 1].route.element !== void 0 ||
        L[L.length - 1].route.Component !== void 0 ||
        L[L.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let B = ov(
    L &&
      L.map((Q) =>
        Object.assign({}, Q, {
          params: Object.assign({}, y, Q.params),
          pathname: Ie([
            D,
            d.encodeLocation
              ? d.encodeLocation(Q.pathname).pathname
              : Q.pathname,
          ]),
          pathnameBase:
            Q.pathnameBase === "/"
              ? D
              : Ie([
                  D,
                  d.encodeLocation
                    ? d.encodeLocation(Q.pathnameBase).pathname
                    : Q.pathnameBase,
                ]),
        })
      ),
    x,
    s,
    f
  );
  return o && B
    ? A.createElement(
        Bu.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...N,
            },
            navigationType: "POP",
          },
        },
        B
      )
    : B;
}
function cv() {
  let i = yv(),
    o = Im(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
      ? i.message
      : JSON.stringify(i),
    s = i instanceof Error ? i.stack : null,
    f = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: f },
    g = { padding: "2px 4px", backgroundColor: f },
    x = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (x = A.createElement(
      A.Fragment,
      null,
      A.createElement("p", null, "💿 Hey developer 👋"),
      A.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        A.createElement("code", { style: g }, "ErrorBoundary"),
        " or",
        " ",
        A.createElement("code", { style: g }, "errorElement"),
        " prop on your route."
      )
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement("h2", null, "Unexpected Application Error!"),
      A.createElement("h3", { style: { fontStyle: "italic" } }, o),
      s ? A.createElement("pre", { style: d }, s) : null,
      x
    )
  );
}
var fv = A.createElement(cv, null),
  rv = class extends A.Component {
    constructor(i) {
      super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        });
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, o) {
      return o.location !== i.location ||
        (o.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : o.error,
            location: o.location,
            revalidation: i.revalidation || o.revalidation,
          };
    }
    componentDidCatch(i, o) {
      console.error(
        "React Router caught the following error during render",
        i,
        o
      );
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            tl.Provider,
            { value: this.props.routeContext },
            A.createElement(zf.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function sv({ routeContext: i, match: o, children: s }) {
  let f = A.useContext(Ca);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    A.createElement(tl.Provider, { value: i }, s)
  );
}
function ov(i, o = [], s = null, f = null) {
  if (i == null) {
    if (!s) return null;
    if (s.errors) i = s.matches;
    else if (o.length === 0 && !s.initialized && s.matches.length > 0)
      i = s.matches;
    else return null;
  }
  let d = i,
    g = s == null ? void 0 : s.errors;
  if (g != null) {
    let y = d.findIndex(
      (v) => v.route.id && (g == null ? void 0 : g[v.route.id]) !== void 0
    );
    Tt(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        g
      ).join(",")}`
    ),
      (d = d.slice(0, Math.min(d.length, y + 1)));
  }
  let x = !1,
    R = -1;
  if (s)
    for (let y = 0; y < d.length; y++) {
      let v = d[y];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (R = y),
        v.route.id)
      ) {
        let { loaderData: D, errors: q } = s,
          C =
            v.route.loader &&
            !D.hasOwnProperty(v.route.id) &&
            (!q || q[v.route.id] === void 0);
        if (v.route.lazy || C) {
          (x = !0), R >= 0 ? (d = d.slice(0, R + 1)) : (d = [d[0]]);
          break;
        }
      }
    }
  return d.reduceRight((y, v, D) => {
    let q,
      C = !1,
      N = null,
      U = null;
    s &&
      ((q = g && v.route.id ? g[v.route.id] : void 0),
      (N = v.route.errorElement || fv),
      x &&
        (R < 0 && D === 0
          ? (Xd(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (C = !0),
            (U = null))
          : R === D &&
            ((C = !0), (U = v.route.hydrateFallbackElement || null))));
    let X = o.concat(d.slice(0, D + 1)),
      L = () => {
        let B;
        return (
          q
            ? (B = N)
            : C
            ? (B = U)
            : v.route.Component
            ? (B = A.createElement(v.route.Component, null))
            : v.route.element
            ? (B = v.route.element)
            : (B = y),
          A.createElement(sv, {
            match: v,
            routeContext: { outlet: y, matches: X, isDataRoute: s != null },
            children: B,
          })
        );
      };
    return s && (v.route.ErrorBoundary || v.route.errorElement || D === 0)
      ? A.createElement(rv, {
          location: s.location,
          revalidation: s.revalidation,
          component: N,
          error: q,
          children: L(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
        })
      : L();
  }, null);
}
function Mf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dv(i) {
  let o = A.useContext(Ca);
  return Tt(o, Mf(i)), o;
}
function hv(i) {
  let o = A.useContext(ni);
  return Tt(o, Mf(i)), o;
}
function mv(i) {
  let o = A.useContext(tl);
  return Tt(o, Mf(i)), o;
}
function Df(i) {
  let o = mv(i),
    s = o.matches[o.matches.length - 1];
  return (
    Tt(
      s.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    s.route.id
  );
}
function vv() {
  return Df("useRouteId");
}
function yv() {
  var f;
  let i = A.useContext(zf),
    o = hv("useRouteError"),
    s = Df("useRouteError");
  return i !== void 0 ? i : (f = o.errors) == null ? void 0 : f[s];
}
function gv() {
  let { router: i } = dv("useNavigate"),
    o = Df("useNavigate"),
    s = A.useRef(!1);
  return (
    Gd(() => {
      s.current = !0;
    }),
    A.useCallback(
      async (d, g = {}) => {
        Ce(s.current, Zd),
          s.current &&
            (typeof d == "number"
              ? i.navigate(d)
              : await i.navigate(d, { fromRouteId: o, ...g }));
      },
      [i, o]
    )
  );
}
var jd = {};
function Xd(i, o, s) {
  !o && !jd[i] && ((jd[i] = !0), Ce(!1, s));
}
A.memo(pv);
function pv({ routes: i, future: o, state: s }) {
  return Qd(i, void 0, s, o);
}
function Hu(i) {
  Tt(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Sv({
  basename: i = "/",
  children: o = null,
  location: s,
  navigationType: f = "POP",
  navigator: d,
  static: g = !1,
}) {
  Tt(
    !Lu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let x = i.replace(/^\/*/, "/"),
    R = A.useMemo(
      () => ({ basename: x, navigator: d, static: g, future: {} }),
      [x, d, g]
    );
  typeof s == "string" && (s = ja(s));
  let {
      pathname: y = "/",
      search: v = "",
      hash: D = "",
      state: q = null,
      key: C = "default",
    } = s,
    N = A.useMemo(() => {
      let U = Al(y, x);
      return U == null
        ? null
        : {
            location: { pathname: U, search: v, hash: D, state: q, key: C },
            navigationType: f,
          };
    }, [x, y, v, D, q, C, f]);
  return (
    Ce(
      N != null,
      `<Router basename="${x}"> is not able to match the URL "${y}${v}${D}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    N == null
      ? null
      : A.createElement(
          Ne.Provider,
          { value: R },
          A.createElement(Bu.Provider, { children: o, value: N })
        )
  );
}
function bv({ children: i, location: o }) {
  return iv(Rf(i), o);
}
function Rf(i, o = []) {
  let s = [];
  return (
    A.Children.forEach(i, (f, d) => {
      if (!A.isValidElement(f)) return;
      let g = [...o, d];
      if (f.type === A.Fragment) {
        s.push.apply(s, Rf(f.props.children, g));
        return;
      }
      Tt(
        f.type === Hu,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Tt(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let x = {
        id: f.props.id || g.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (x.children = Rf(f.props.children, g)), s.push(x);
    }),
    s
  );
}
var li = "get",
  ai = "application/x-www-form-urlencoded";
function ii(i) {
  return i != null && typeof i.tagName == "string";
}
function Ev(i) {
  return ii(i) && i.tagName.toLowerCase() === "button";
}
function xv(i) {
  return ii(i) && i.tagName.toLowerCase() === "form";
}
function Tv(i) {
  return ii(i) && i.tagName.toLowerCase() === "input";
}
function _v(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Av(i, o) {
  return i.button === 0 && (!o || o === "_self") && !_v(i);
}
var ei = null;
function Rv() {
  if (ei === null)
    try {
      new FormData(document.createElement("form"), 0), (ei = !1);
    } catch {
      ei = !0;
    }
  return ei;
}
var Ov = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function _f(i) {
  return i != null && !Ov.has(i)
    ? (Ce(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ai}"`
      ),
      null)
    : i;
}
function zv(i, o) {
  let s, f, d, g, x;
  if (xv(i)) {
    let R = i.getAttribute("action");
    (f = R ? Al(R, o) : null),
      (s = i.getAttribute("method") || li),
      (d = _f(i.getAttribute("enctype")) || ai),
      (g = new FormData(i));
  } else if (Ev(i) || (Tv(i) && (i.type === "submit" || i.type === "image"))) {
    let R = i.form;
    if (R == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let y = i.getAttribute("formaction") || R.getAttribute("action");
    if (
      ((f = y ? Al(y, o) : null),
      (s = i.getAttribute("formmethod") || R.getAttribute("method") || li),
      (d =
        _f(i.getAttribute("formenctype")) ||
        _f(R.getAttribute("enctype")) ||
        ai),
      (g = new FormData(R, i)),
      !Rv())
    ) {
      let { name: v, type: D, value: q } = i;
      if (D === "image") {
        let C = v ? `${v}.` : "";
        g.append(`${C}x`, "0"), g.append(`${C}y`, "0");
      } else v && g.append(v, q);
    }
  } else {
    if (ii(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (s = li), (f = null), (d = ai), (x = i);
  }
  return (
    g && d === "text/plain" && ((x = g), (g = void 0)),
    { action: f, method: s.toLowerCase(), encType: d, formData: g, body: x }
  );
}
function jf(i, o) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(o);
}
async function Mv(i, o) {
  if (i.id in o) return o[i.id];
  try {
    let s = await import(i.module);
    return (o[i.id] = s), s;
  } catch (s) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(s),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Dv(i) {
  return i == null
    ? !1
    : i.href == null
    ? i.rel === "preload" &&
      typeof i.imageSrcSet == "string" &&
      typeof i.imageSizes == "string"
    : typeof i.rel == "string" && typeof i.href == "string";
}
async function jv(i, o, s) {
  let f = await Promise.all(
    i.map(async (d) => {
      let g = o.routes[d.route.id];
      if (g) {
        let x = await Mv(g, s);
        return x.links ? x.links() : [];
      }
      return [];
    })
  );
  return Hv(
    f
      .flat(1)
      .filter(Dv)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" }
      )
  );
}
function Cd(i, o, s, f, d, g) {
  let x = (y, v) => (s[v] ? y.route.id !== s[v].route.id : !0),
    R = (y, v) => {
      var D;
      return (
        s[v].pathname !== y.pathname ||
        (((D = s[v].route.path) == null ? void 0 : D.endsWith("*")) &&
          s[v].params["*"] !== y.params["*"])
      );
    };
  return g === "assets"
    ? o.filter((y, v) => x(y, v) || R(y, v))
    : g === "data"
    ? o.filter((y, v) => {
        var q;
        let D = f.routes[y.route.id];
        if (!D || !D.hasLoader) return !1;
        if (x(y, v) || R(y, v)) return !0;
        if (y.route.shouldRevalidate) {
          let C = y.route.shouldRevalidate({
            currentUrl: new URL(d.pathname + d.search + d.hash, window.origin),
            currentParams: ((q = s[0]) == null ? void 0 : q.params) || {},
            nextUrl: new URL(i, window.origin),
            nextParams: y.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof C == "boolean") return C;
        }
        return !0;
      })
    : [];
}
function Cv(i, o, { includeHydrateFallback: s } = {}) {
  return Nv(
    i
      .map((f) => {
        let d = o.routes[f.route.id];
        if (!d) return [];
        let g = [d.module];
        return (
          d.clientActionModule && (g = g.concat(d.clientActionModule)),
          d.clientLoaderModule && (g = g.concat(d.clientLoaderModule)),
          s &&
            d.hydrateFallbackModule &&
            (g = g.concat(d.hydrateFallbackModule)),
          d.imports && (g = g.concat(d.imports)),
          g
        );
      })
      .flat(1)
  );
}
function Nv(i) {
  return [...new Set(i)];
}
function Uv(i) {
  let o = {},
    s = Object.keys(i).sort();
  for (let f of s) o[f] = i[f];
  return o;
}
function Hv(i, o) {
  let s = new Set();
  return (
    new Set(o),
    i.reduce((f, d) => {
      let g = JSON.stringify(Uv(d));
      return s.has(g) || (s.add(g), f.push({ key: g, link: d })), f;
    }, [])
  );
}
function qv(i) {
  let o =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : i;
  return (
    o.pathname === "/"
      ? (o.pathname = "_root.data")
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.data`),
    o
  );
}
function Bv() {
  let i = A.useContext(Ca);
  return (
    jf(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    i
  );
}
function Lv() {
  let i = A.useContext(ni);
  return (
    jf(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    i
  );
}
var Cf = A.createContext(void 0);
Cf.displayName = "FrameworkContext";
function Vd() {
  let i = A.useContext(Cf);
  return (
    jf(i, "You must render this element inside a <HydratedRouter> element"), i
  );
}
function Yv(i, o) {
  let s = A.useContext(Cf),
    [f, d] = A.useState(!1),
    [g, x] = A.useState(!1),
    {
      onFocus: R,
      onBlur: y,
      onMouseEnter: v,
      onMouseLeave: D,
      onTouchStart: q,
    } = o,
    C = A.useRef(null);
  A.useEffect(() => {
    if ((i === "render" && x(!0), i === "viewport")) {
      let X = (B) => {
          B.forEach((J) => {
            x(J.isIntersecting);
          });
        },
        L = new IntersectionObserver(X, { threshold: 0.5 });
      return (
        C.current && L.observe(C.current),
        () => {
          L.disconnect();
        }
      );
    }
  }, [i]),
    A.useEffect(() => {
      if (f) {
        let X = setTimeout(() => {
          x(!0);
        }, 100);
        return () => {
          clearTimeout(X);
        };
      }
    }, [f]);
  let N = () => {
      d(!0);
    },
    U = () => {
      d(!1), x(!1);
    };
  return s
    ? i !== "intent"
      ? [g, C, {}]
      : [
          g,
          C,
          {
            onFocus: Uu(R, N),
            onBlur: Uu(y, U),
            onMouseEnter: Uu(v, N),
            onMouseLeave: Uu(D, U),
            onTouchStart: Uu(q, N),
          },
        ]
    : [!1, C, {}];
}
function Uu(i, o) {
  return (s) => {
    i && i(s), s.defaultPrevented || o(s);
  };
}
function wv({ page: i, ...o }) {
  let { router: s } = Bv(),
    f = A.useMemo(() => Ud(s.routes, i, s.basename), [s.routes, i, s.basename]);
  return f ? A.createElement(Gv, { page: i, matches: f, ...o }) : null;
}
function Zv(i) {
  let { manifest: o, routeModules: s } = Vd(),
    [f, d] = A.useState([]);
  return (
    A.useEffect(() => {
      let g = !1;
      return (
        jv(i, o, s).then((x) => {
          g || d(x);
        }),
        () => {
          g = !0;
        }
      );
    }, [i, o, s]),
    f
  );
}
function Gv({ page: i, matches: o, ...s }) {
  let f = kl(),
    { manifest: d, routeModules: g } = Vd(),
    { loaderData: x, matches: R } = Lv(),
    y = A.useMemo(() => Cd(i, o, R, d, f, "data"), [i, o, R, d, f]),
    v = A.useMemo(() => Cd(i, o, R, d, f, "assets"), [i, o, R, d, f]),
    D = A.useMemo(() => {
      if (i === f.pathname + f.search + f.hash) return [];
      let N = new Set(),
        U = !1;
      if (
        (o.forEach((L) => {
          var J;
          let B = d.routes[L.route.id];
          !B ||
            !B.hasLoader ||
            ((!y.some((Q) => Q.route.id === L.route.id) &&
              L.route.id in x &&
              (J = g[L.route.id]) != null &&
              J.shouldRevalidate) ||
            B.hasClientLoader
              ? (U = !0)
              : N.add(L.route.id));
        }),
        N.size === 0)
      )
        return [];
      let X = qv(i);
      return (
        U &&
          N.size > 0 &&
          X.searchParams.set(
            "_routes",
            o
              .filter((L) => N.has(L.route.id))
              .map((L) => L.route.id)
              .join(",")
          ),
        [X.pathname + X.search]
      );
    }, [x, f, d, y, o, i, g]),
    q = A.useMemo(() => Cv(v, d), [v, d]),
    C = Zv(v);
  return A.createElement(
    A.Fragment,
    null,
    D.map((N) =>
      A.createElement("link", {
        key: N,
        rel: "prefetch",
        as: "fetch",
        href: N,
        ...s,
      })
    ),
    q.map((N) =>
      A.createElement("link", { key: N, rel: "modulepreload", href: N, ...s })
    ),
    C.map(({ key: N, link: U }) => A.createElement("link", { key: N, ...U }))
  );
}
function Qv(...i) {
  return (o) => {
    i.forEach((s) => {
      typeof s == "function" ? s(o) : s != null && (s.current = o);
    });
  };
}
var Kd =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Kd && (window.__reactRouterVersion = "7.2.0");
} catch {}
function Xv({ basename: i, children: o, window: s }) {
  let f = A.useRef();
  f.current == null && (f.current = jm({ window: s, v5Compat: !0 }));
  let d = f.current,
    [g, x] = A.useState({ action: d.action, location: d.location }),
    R = A.useCallback(
      (y) => {
        A.startTransition(() => x(y));
      },
      [x]
    );
  return (
    A.useLayoutEffect(() => d.listen(R), [d, R]),
    A.createElement(Sv, {
      basename: i,
      children: o,
      location: g.location,
      navigationType: g.action,
      navigator: d,
    })
  );
}
var Jd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kd = A.forwardRef(function (
    {
      onClick: o,
      discover: s = "render",
      prefetch: f = "none",
      relative: d,
      reloadDocument: g,
      replace: x,
      state: R,
      target: y,
      to: v,
      preventScrollReset: D,
      viewTransition: q,
      ...C
    },
    N
  ) {
    let { basename: U } = A.useContext(Ne),
      X = typeof v == "string" && Jd.test(v),
      L,
      B = !1;
    if (typeof v == "string" && X && ((L = v), Kd))
      try {
        let G = new URL(window.location.href),
          lt = v.startsWith("//") ? new URL(G.protocol + v) : new URL(v),
          Jt = Al(lt.pathname, U);
        lt.origin === G.origin && Jt != null
          ? (v = Jt + lt.search + lt.hash)
          : (B = !0);
      } catch {
        Ce(
          !1,
          `<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let J = av(v, { relative: d }),
      [Q, ht, P] = Yv(f, C),
      Ot = Jv(v, {
        replace: x,
        state: R,
        target: y,
        preventScrollReset: D,
        relative: d,
        viewTransition: q,
      });
    function Yt(G) {
      o && o(G), G.defaultPrevented || Ot(G);
    }
    let Qt = A.createElement("a", {
      ...C,
      ...P,
      href: L || J,
      onClick: B || g ? o : Yt,
      ref: Qv(N, ht),
      target: y,
      "data-discover": !X && s === "render" ? "true" : void 0,
    });
    return Q && !X
      ? A.createElement(A.Fragment, null, Qt, A.createElement(wv, { page: J }))
      : Qt;
  });
kd.displayName = "Link";
var $d = A.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: s = !1,
    className: f = "",
    end: d = !1,
    style: g,
    to: x,
    viewTransition: R,
    children: y,
    ...v
  },
  D
) {
  let q = Yu(x, { relative: v.relative }),
    C = kl(),
    N = A.useContext(ni),
    { navigator: U, basename: X } = A.useContext(Ne),
    L = N != null && Pv(q) && R === !0,
    B = U.encodeLocation ? U.encodeLocation(q).pathname : q.pathname,
    J = C.pathname,
    Q =
      N && N.navigation && N.navigation.location
        ? N.navigation.location.pathname
        : null;
  s ||
    ((J = J.toLowerCase()),
    (Q = Q ? Q.toLowerCase() : null),
    (B = B.toLowerCase())),
    Q && X && (Q = Al(Q, X) || Q);
  const ht = B !== "/" && B.endsWith("/") ? B.length - 1 : B.length;
  let P = J === B || (!d && J.startsWith(B) && J.charAt(ht) === "/"),
    Ot =
      Q != null &&
      (Q === B || (!d && Q.startsWith(B) && Q.charAt(B.length) === "/")),
    Yt = { isActive: P, isPending: Ot, isTransitioning: L },
    Qt = P ? o : void 0,
    G;
  typeof f == "function"
    ? (G = f(Yt))
    : (G = [
        f,
        P ? "active" : null,
        Ot ? "pending" : null,
        L ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let lt = typeof g == "function" ? g(Yt) : g;
  return A.createElement(
    kd,
    {
      ...v,
      "aria-current": Qt,
      className: G,
      ref: D,
      style: lt,
      to: x,
      viewTransition: R,
    },
    typeof y == "function" ? y(Yt) : y
  );
});
$d.displayName = "NavLink";
var Vv = A.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: o,
      navigate: s,
      reloadDocument: f,
      replace: d,
      state: g,
      method: x = li,
      action: R,
      onSubmit: y,
      relative: v,
      preventScrollReset: D,
      viewTransition: q,
      ...C
    },
    N
  ) => {
    let U = Wv(),
      X = Fv(R, { relative: v }),
      L = x.toLowerCase() === "get" ? "get" : "post",
      B = typeof R == "string" && Jd.test(R),
      J = (Q) => {
        if ((y && y(Q), Q.defaultPrevented)) return;
        Q.preventDefault();
        let ht = Q.nativeEvent.submitter,
          P = (ht == null ? void 0 : ht.getAttribute("formmethod")) || x;
        U(ht || Q.currentTarget, {
          fetcherKey: o,
          method: P,
          navigate: s,
          replace: d,
          state: g,
          relative: v,
          preventScrollReset: D,
          viewTransition: q,
        });
      };
    return A.createElement("form", {
      ref: N,
      method: L,
      action: X,
      onSubmit: f ? y : J,
      ...C,
      "data-discover": !B && i === "render" ? "true" : void 0,
    });
  }
);
Vv.displayName = "Form";
function Kv(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wd(i) {
  let o = A.useContext(Ca);
  return Tt(o, Kv(i)), o;
}
function Jv(
  i,
  {
    target: o,
    replace: s,
    state: f,
    preventScrollReset: d,
    relative: g,
    viewTransition: x,
  } = {}
) {
  let R = uv(),
    y = kl(),
    v = Yu(i, { relative: g });
  return A.useCallback(
    (D) => {
      if (Av(D, o)) {
        D.preventDefault();
        let q = s !== void 0 ? s : qu(y) === qu(v);
        R(i, {
          replace: q,
          state: f,
          preventScrollReset: d,
          relative: g,
          viewTransition: x,
        });
      }
    },
    [y, R, v, s, f, o, i, d, g, x]
  );
}
var kv = 0,
  $v = () => `__${String(++kv)}__`;
function Wv() {
  let { router: i } = Wd("useSubmit"),
    { basename: o } = A.useContext(Ne),
    s = vv();
  return A.useCallback(
    async (f, d = {}) => {
      let { action: g, method: x, encType: R, formData: y, body: v } = zv(f, o);
      if (d.navigate === !1) {
        let D = d.fetcherKey || $v();
        await i.fetch(D, s, d.action || g, {
          preventScrollReset: d.preventScrollReset,
          formData: y,
          body: v,
          formMethod: d.method || x,
          formEncType: d.encType || R,
          flushSync: d.flushSync,
        });
      } else
        await i.navigate(d.action || g, {
          preventScrollReset: d.preventScrollReset,
          formData: y,
          body: v,
          formMethod: d.method || x,
          formEncType: d.encType || R,
          replace: d.replace,
          state: d.state,
          fromRouteId: s,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition,
        });
    },
    [i, o, s]
  );
}
function Fv(i, { relative: o } = {}) {
  let { basename: s } = A.useContext(Ne),
    f = A.useContext(tl);
  Tt(f, "useFormAction must be used inside a RouteContext");
  let [d] = f.matches.slice(-1),
    g = { ...Yu(i || ".", { relative: o }) },
    x = kl();
  if (i == null) {
    g.search = x.search;
    let R = new URLSearchParams(g.search),
      y = R.getAll("index");
    if (y.some((D) => D === "")) {
      R.delete("index"),
        y.filter((q) => q).forEach((q) => R.append("index", q));
      let D = R.toString();
      g.search = D ? `?${D}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      d.route.index &&
      (g.search = g.search ? g.search.replace(/^\?/, "?index&") : "?index"),
    s !== "/" && (g.pathname = g.pathname === "/" ? s : Ie([s, g.pathname])),
    qu(g)
  );
}
function Pv(i, o = {}) {
  let s = A.useContext(wd);
  Tt(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = Wd("useViewTransitionState"),
    d = Yu(i, { relative: o.relative });
  if (!s.isTransitioning) return !1;
  let g = Al(s.currentLocation.pathname, f) || s.currentLocation.pathname,
    x = Al(s.nextLocation.pathname, f) || s.nextLocation.pathname;
  return ui(d.pathname, x) != null || ui(d.pathname, g) != null;
}
new TextEncoder();
function Iv({ icon: i }) {
  return (
    {
      product: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          fillRule: "evenodd",
          d: "M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z",
          clipRule: "evenodd",
        }),
      }),
      inventory: m.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "size-6",
        children: [
          m.jsx("path", {
            d: "M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z",
          }),
          m.jsx("path", {
            d: "M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z",
          }),
        ],
      }),
      order: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          d: "M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z",
        }),
      }),
      report: m.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "size-6",
        children: [
          m.jsx("path", {
            fillRule: "evenodd",
            d: "M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z",
            clipRule: "evenodd",
          }),
          m.jsx("path", {
            d: "M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z",
          }),
        ],
      }),
    }[i] || null
  );
}
function ty({ icon: i }) {
  return (
    {
      product: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
        }),
      }),
      salesHistory: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z",
        }),
      }),
      inventory: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
        }),
      }),
      order: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z",
        }),
      }),
      report: m.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "size-6",
        children: m.jsx("path", {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
        }),
      }),
    }[i] || null
  );
}
function ey() {
  const i = [
    { to: "/", label: "Product", icon: "product" },
    { to: "/order", label: "Order", icon: "order" },
    { to: "/inventoryManager", label: "inventory Manager", icon: "inventory" },
    { to: "/report", label: "Report", icon: "report" },
  ];
  return m.jsxs("div", {
    className: "sidebar",
    children: [
      m.jsx("div", {
        className: "sidebar__logo",
        children: m.jsx("h3", { children: "SoleTeeN" }),
      }),
      i.map((o) =>
        m.jsx(
          $d,
          {
            className: ({ isActive: s }) =>
              "sidebar__link" + (s ? " sidebar__link--active" : ""),
            to: o.to,
            children: ({ isActive: s }) =>
              m.jsxs(m.Fragment, {
                children: [
                  s ? m.jsx(Iv, { icon: o.icon }) : m.jsx(ty, { icon: o.icon }),
                  m.jsx("span", { children: o.label }),
                ],
              }),
          },
          o.to
        )
      ),
    ],
  });
}
function ly({ cartProduct: i }) {
  const { cartProducts: o, setCartProducts: s } = A.useContext(Na);
  if (
    (A.useEffect(() => {
      i &&
        i.quantity === void 0 &&
        s((g) =>
          g.map((x) =>
            x.product_id === i.product_id ? { ...x, quantity: 1 } : x
          )
        );
    }, [i, s]),
    !i)
  )
    return null;
  const f = () => {
      s((g) =>
        g.map((x) =>
          x.product_id === i.product_id
            ? {
                ...x,
                quantity: Math.min(
                  (x.quantity ?? 0) + 1,
                  Number(x.stock_quantity)
                ),
              }
            : x
        )
      );
    },
    d = () => {
      s((g) =>
        g
          .map((x) =>
            x.product_id === i.product_id
              ? { ...x, quantity: Math.max((x.quantity ?? 1) - 1, 0) }
              : x
          )
          .filter((x) => x.quantity > 0)
      );
    };
  return m.jsxs("div", {
    className: "CartQuantityControl",
    children: [
      m.jsx("button", {
        className: "CartQuantityControl__btn",
        onClick: d,
        children: "-",
      }),
      m.jsx("div", { children: i.quantity }),
      m.jsx("button", {
        className: "CartQuantityControl__btn",
        onClick: f,
        children: "+",
      }),
    ],
  });
}
function ay({ cartProduct: i }) {
  return m.jsxs("div", {
    className: "cartItem",
    children: [
      m.jsx("img", { src: i.image_url, alt: "" }),
      m.jsxs("div", {
        className: "cartItem__detail",
        children: [
          m.jsx("p", { className: "cartItem__name", children: i.product_name }),
          m.jsxs("p", {
            className: "cartItem__quantity",
            children: ["quantity : ", i.stock_quantity],
          }),
          m.jsxs("p", {
            children: [
              "฿ ",
              new Intl.NumberFormat("th-TH").format(i.product_price),
            ],
          }),
        ],
      }),
      m.jsx(ly, { cartProduct: i }),
    ],
  });
}
function uy() {
  const { cartProducts: i } = A.useContext(Na),
    s = i.reduce((f, d) => f + Number(d.product_price) * (d.quantity ?? 1), 0);
  return m.jsx(m.Fragment, {
    children: m.jsx("div", {
      className: "cartTotal",
      children: m.jsxs("h4", {
        children: ["Total : ฿ ", new Intl.NumberFormat("th-TH").format(s)],
      }),
    }),
  });
}
function ny({ formData: i, handleChange: o }) {
  return m.jsxs("div", {
    className: "customerForm",
    children: [
      m.jsx("p", { className: "customerForm__title", children: "Customer" }),
      m.jsxs("form", {
        className: "form",
        id: "customerForm",
        children: [
          m.jsxs("div", {
            className: "customerForm__group-N-P",
            children: [
              m.jsxs("div", {
                className: "input-group",
                children: [
                  m.jsx("label", { htmlFor: "name", children: "name" }),
                  m.jsx("input", {
                    type: "text",
                    name: "name",
                    id: "name",
                    value: i.name,
                    onChange: o,
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "input-group",
                children: [
                  m.jsx("label", { htmlFor: "phone", children: "phone" }),
                  m.jsx("input", {
                    type: "tel",
                    name: "phone_number",
                    id: "phone_number",
                    value: i.phone_number,
                    onChange: o,
                  }),
                ],
              }),
            ],
          }),
          m.jsxs("div", {
            className: "input-group",
            children: [
              m.jsx("label", { htmlFor: "email", children: "email" }),
              m.jsx("input", {
                type: "email",
                name: "email",
                id: "email",
                value: i.email,
                onChange: o,
              }),
            ],
          }),
          m.jsxs("div", {
            className: "input-group",
            children: [
              m.jsx("label", { htmlFor: "address", children: "address" }),
              m.jsx("input", {
                type: "text",
                name: "address",
                id: "address",
                value: i.address,
                onChange: o,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function iy() {
  const { cartProducts: i, setCartProducts: o } = A.useContext(Na),
    [s, f] = A.useState({ name: "", phone_number: "", email: "", address: "" }),
    d = (x) => {
      const { name: R, value: y } = x.target;
      f((v) => ({ ...v, [R]: y }));
    },
    g = async (x) => {
      if (
        (x.preventDefault(),
        !s.email || !s.name || !s.phone_number || !s.address)
      ) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }
      const R = { ...s, items: i };
      console.log(R);
      try {
        const y = await fetch("/order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(R),
          }),
          v = await y.json();
        y.ok
          ? (console.log("Order successful:", v),
            alert("บันทึกคำสั่งซื้อสำเร็จ"),
            window.location.reload())
          : (console.error("Error:", v.error),
            alert(v.error || "เกิดข้อผิดพลาด"));
      } catch (y) {
        console.error("Error submitting order:", y),
          alert("เกิดข้อผิดพลาดในการส่งคำสั่งซื้อ");
      }
    };
  return m.jsxs("div", {
    className: "CartDetail",
    children: [
      m.jsx(ny, { formData: s, handleChange: d }),
      m.jsx("h4", { children: "Cart" }),
      m.jsx("div", {
        className: "CartDetail__list",
        children:
          i.length === 0
            ? m.jsx("span", { children: "Your cart is empty" })
            : i.map((x) => m.jsx(ay, { cartProduct: x }, x.product_id)),
      }),
      m.jsx(uy, {}),
      m.jsx("button", {
        className: "sign",
        onClick: g,
        children: "Create Order",
      }),
    ],
  });
}
function cy() {
  const { cartProducts: i, setCartProducts: o } = A.useContext(Na),
    [s, f] = A.useState(!1);
  function d() {
    f(!s);
  }
  return m.jsxs("div", {
    children: [
      m.jsx("div", {
        className: "cartIcon",
        onClick: d,
        children: m.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          strokeWidth: 1.5,
          stroke: "currentColor",
          className: "size-6",
          children: m.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z",
          }),
        }),
      }),
      " ",
      !s || m.jsx(iy, {}),
    ],
  });
}
function fy({ product: i }) {
  const { cartProducts: o, setCartProducts: s } = A.useContext(Na),
    f = o.find((g) => g.product_id === i.product_id);
  function d() {
    f || s([...o, i]);
  }
  return m.jsxs("div", {
    className: `productCart ${f ? " productCart__item--inCart" : ""}`,
    onClick: d,
    children: [
      m.jsx("img", {
        className: "productCart__img",
        src: i.image_url,
        alt: "",
      }),
      m.jsxs("div", {
        className: "prodcutCart__detail",
        children: [
          m.jsx("p", {
            className: "productCart__name",
            children: i.product_name,
          }),
          m.jsxs("p", {
            className: "productCart__quantity",
            children: ["quantity : ", i.stock_quantity],
          }),
        ],
      }),
      m.jsxs("p", {
        className: "productCart__price",
        children: [
          "฿ ",
          new Intl.NumberFormat("th-TH").format(i.product_price),
        ],
      }),
    ],
  });
}
function ry() {
  const { products: i, setProducts: o } = A.useContext(Nf);
  return (
    A.useEffect(() => {
      async function s() {
        const d = await (await fetch("/product")).json();
        o(d);
      }
      s();
    }, []),
    m.jsx("div", {
      className: "productList",
      children: i.map(
        (s) => s.stock_quantity === 0 || m.jsx(fy, { product: s }, s.product_id)
      ),
    })
  );
}
function sy() {
  return m.jsx(m.Fragment, {
    children: m.jsxs("div", {
      className: "contentProducts",
      children: [
        m.jsxs("div", {
          className: "contentProucts__head",
          children: [m.jsx("h3", { children: "Products" }), m.jsx(cy, {})],
        }),
        m.jsx(ry, {}),
      ],
    }),
  });
}
const oy = (i) => {
  const o = new Date(i),
    s = { year: "numeric", month: "2-digit", day: "2-digit" },
    f = { hour: "2-digit", minute: "2-digit", second: "2-digit" },
    d = o.toLocaleDateString("th-TH", s),
    g = o.toLocaleTimeString("th-TH", f);
  return `${d} ${g}`;
};
function dy() {
  const [i, o] = A.useState({ data: [] });
  return (
    A.useEffect(() => {
      async function s() {
        try {
          const d = await (
            await fetch("/report", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ check: "save" }),
            })
          ).json();
          o(d), console.log("Second request successful:", d);
        } catch (f) {
          console.error("Error with second request:", f);
        }
      }
      s();
    }, []),
    m.jsx("div", {
      className: "report-container",
      children: m.jsxs("table", {
        className: "report-table",
        children: [
          m.jsx("thead", {
            children: m.jsxs("tr", {
              children: [
                m.jsx("th", { children: "report id" }),
                m.jsx("th", { children: "order id" }),
                m.jsx("th", { children: "order date" }),
                m.jsx("th", { children: "customer name" }),
                m.jsx("th", { children: "product name" }),
                m.jsx("th", { children: "category name" }),
                m.jsx("th", { children: "quantity" }),
                m.jsx("th", { children: "price" }),
                m.jsx("th", { children: "total amount" }),
              ],
            }),
          }),
          m.jsx("tbody", {
            children:
              i.data.length > 0
                ? i.data.map((s) =>
                    m.jsxs(
                      "tr",
                      {
                        children: [
                          m.jsx("td", { children: s.report_id }),
                          m.jsx("td", { children: s.order_id }),
                          m.jsx("td", { children: oy(s.order_date) }),
                          m.jsx("td", { children: s.customer_name }),
                          m.jsx("td", { children: s.product_name }),
                          m.jsx("td", { children: s.category_name }),
                          m.jsx("td", { children: s.quantity }),
                          m.jsx("td", { children: s.price }),
                          m.jsx("td", { children: s.total_amount }),
                        ],
                      },
                      s.report_id
                    )
                  )
                : m.jsx("tr", {
                    children: m.jsx("td", {
                      className: "loading-row",
                      colSpan: "9",
                      children: "กำลังโหลดข้อมูล...",
                    }),
                  }),
          }),
        ],
      }),
    })
  );
}
function hy({ product_item: i, editingProductId: o, setEditingProductId: s }) {
  const f = o === i.product_id,
    [d, g] = A.useState(i.image_url),
    [x, R] = A.useState(i.product_name),
    [y, v] = A.useState(i.stock_quantity),
    [D, q] = A.useState(i.product_price);
  A.useEffect(() => {
    f &&
      (g(i.image_url),
      R(i.product_name),
      v(i.stock_quantity),
      q(i.product_price));
  }, [f, i]);
  const C = async () => {
    const N = {
      product_id: i.product_id,
      product_name: x,
      product_price: D,
      stock_quantity: y,
      image_url: d,
    };
    try {
      const U = await fetch("/update-product", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(N),
        }),
        X = await U.json();
      U.ok
        ? (alert(X.message), s(null), window.location.reload())
        : alert(X.error);
    } catch (U) {
      console.error("Error updating product:", U),
        alert("เกิดข้อผิดพลาดในการอัพเดตสินค้า");
    }
  };
  return m.jsxs(m.Fragment, {
    children: [
      m.jsx("button", {
        className: "edit-btn",
        onClick: () => s(f ? null : i.product_id),
        children: "Edit",
      }),
      f &&
        m.jsx("div", {
          className: "editProduct__overlay",
          children: m.jsxs("div", {
            className: "editProduct__popup",
            children: [
              m.jsx("button", {
                className: "close-btn",
                onClick: () => s(null),
                children: "❌",
              }),
              m.jsx("h3", { children: "Edit Product" }),
              m.jsx("img", {
                src: d,
                alt: "Product",
                className: "product-img",
              }),
              m.jsx("label", { children: "Image URL" }),
              m.jsx("input", {
                type: "text",
                value: d,
                onChange: (N) => g(N.target.value),
              }),
              m.jsx("label", { children: "Name" }),
              m.jsx("input", {
                type: "text",
                value: x,
                onChange: (N) => R(N.target.value),
              }),
              m.jsx("label", { children: "Stock Quantity" }),
              m.jsx("input", {
                type: "number",
                value: y,
                onChange: (N) => v(N.target.value),
              }),
              m.jsx("label", { children: "Price" }),
              m.jsx("input", {
                type: "number",
                value: D,
                onChange: (N) => q(N.target.value),
              }),
              m.jsx("button", {
                className: "save-btn",
                onClick: C,
                children: "Save",
              }),
            ],
          }),
        }),
    ],
  });
}
function my() {
  const i = A.useRef(),
    o = A.useRef(),
    s = A.useRef(),
    [f, d] = A.useState(""),
    g = async (x) => {
      x.preventDefault();
      const R = {
        product_name: i.current.value,
        product_brand: "other",
        category_id: 1,
        product_price: o.current.value,
        stock_quantity: s.current.value,
        description: " ",
        image_url: f,
      };
      try {
        const y = await fetch("/insertProducts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(R),
        });
        if (!y.ok) throw new Error("Insert failed!");
        const v = await y.json();
        alert(`Product added successfully! ID: ${v.insertedId}`),
          (i.current.value = ""),
          (o.current.value = ""),
          (s.current.value = ""),
          d(""),
          window.location.reload();
      } catch (y) {
        console.error("Insert error:", y),
          alert("Insert failed. Please try again.");
      }
    };
  return m.jsxs("div", {
    className: "insertProducts",
    children: [
      m.jsx("h3", { children: "Insert Product" }),
      m.jsxs("form", {
        onSubmit: g,
        children: [
          m.jsxs("div", {
            className: "input-group",
            children: [
              m.jsx("label", { children: "Product Name" }),
              m.jsx("input", { type: "text", ref: i, required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: "input-group",
            children: [
              m.jsx("label", { children: "Price" }),
              m.jsx("input", { type: "number", ref: o, required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: "input-group",
            children: [
              m.jsx("label", { children: "Stock Quantity" }),
              m.jsx("input", { type: "number", ref: s, required: !0 }),
            ],
          }),
          m.jsxs("div", {
            className: "input-group",
            children: [
              m.jsx("label", { children: "Image URL" }),
              m.jsx("input", {
                type: "text",
                value: f,
                onChange: (x) => d(x.target.value),
              }),
            ],
          }),
          f &&
            m.jsx("img", {
              src: f,
              alt: "Preview",
              className: "image-preview",
            }),
          m.jsx("button", {
            className: "sign",
            type: "submit",
            children: "Insert Product",
          }),
        ],
      }),
    ],
  });
}
function vy() {
  const [i, o] = A.useState(null),
    { products: s, setProducts: f } = A.useContext(Nf);
  return (
    A.useEffect(() => {
      async function d() {
        const x = await (await fetch("/product")).json();
        f(x);
      }
      d();
    }, []),
    m.jsxs("div", {
      className: "inventoryManager",
      children: [
        m.jsx(my, {}),
        m.jsxs("table", {
          className: "inventoryManager__table",
          children: [
            m.jsx("thead", {
              children: m.jsxs("tr", {
                children: [
                  m.jsx("th", { children: "id" }),
                  m.jsx("th", { children: "img" }),
                  m.jsx("th", { children: "Name" }),
                  m.jsx("th", { children: "Stock Quantity" }),
                  m.jsx("th", { children: "Price" }),
                  m.jsx("th", { children: "Actions" }),
                ],
              }),
            }),
            m.jsx("tbody", {
              children: s.map((d) =>
                m.jsxs(
                  "tr",
                  {
                    children: [
                      m.jsx("td", { children: d.product_id }),
                      m.jsx("td", {
                        children: m.jsx("img", { src: d.image_url, alt: "" }),
                      }),
                      m.jsx("td", { children: d.product_name }),
                      m.jsx("td", { children: d.stock_quantity }),
                      m.jsx("td", { children: d.product_price }),
                      m.jsx("td", {
                        children: m.jsx(hy, {
                          product_item: d,
                          editingProductId: i,
                          setEditingProductId: o,
                        }),
                      }),
                    ],
                  },
                  d.product_id
                )
              ),
            }),
          ],
        }),
      ],
    })
  );
}
function yy() {
  const [i, o] = A.useState([]),
    [s, f] = A.useState(null),
    d = { ยกเลิก: "Canceled", ชำระแล้ว: "Paid", รอชำระ: "Pending Payment" };
  function g(y) {
    fetch("/Payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_order: y }),
    });
  }
  function x(y, v) {
    fetch("/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ confirm: y, payment_method: v }),
    }),
      window.location.reload(),
      alert("ดำเนินการเรียบร้อย");
  }
  A.useEffect(() => {
    async function y() {
      const D = await (await fetch("/sendOrder")).json();
      o(D.results || []);
    }
    y();
  }, []);
  async function R(y) {
    f(null);
    const D = await (await fetch(`/order-details/${y}`)).json();
    f(D), g(y);
  }
  return m.jsx("div", {
    className: "Order",
    children: m.jsxs("div", {
      className: "center",
      children: [
        m.jsxs("div", {
          className: "or",
          children: [
            m.jsx("h2", { children: "Order List" }),
            m.jsxs("table", {
              border: "1",
              className: "orderList",
              children: [
                m.jsx("thead", {
                  children: m.jsxs("tr", {
                    children: [
                      m.jsx("th", { children: "ID" }),
                      m.jsx("th", { children: "Customer ID" }),
                      m.jsx("th", { children: "Order Date" }),
                      m.jsx("th", { children: "Status" }),
                      m.jsx("th", { children: "Total" }),
                    ],
                  }),
                }),
                m.jsx("tbody", {
                  children: i.map((y) => {
                    var v;
                    return m.jsxs(
                      "tr",
                      {
                        className: "orderList__item",
                        onClick: () => R(y.order_id),
                        style: { cursor: "pointer" },
                        children: [
                          m.jsx("td", { children: y.order_id }),
                          m.jsx("td", { children: y.customer_id }),
                          m.jsx("td", {
                            children: new Date(y.order_date).toLocaleString(
                              "th-TH",
                              { timeZone: "Asia/Bangkok" }
                            ),
                          }),
                          m.jsx("td", {
                            className: `orderList__status orderList__status--${
                              ((v = d[y.status]) == null
                                ? void 0
                                : v.replace(" ", "")) || "Unknown"
                            }`,
                            children: d[y.status] || y.status,
                          }),
                          m.jsx("td", { children: y.total_amount }),
                        ],
                      },
                      y.order_id
                    );
                  }),
                }),
              ],
            }),
          ],
        }),
        s &&
          m.jsxs("div", {
            className: "orderDetails",
            children: [
              m.jsx("h2", { children: "🛒 Order Details" }),
              m.jsxs("p", {
                children: [
                  m.jsx("strong", { children: "Order ID:" }),
                  " ",
                  s.order_id,
                ],
              }),
              m.jsxs("p", {
                children: [
                  m.jsx("strong", { children: "Customer ID:" }),
                  " ",
                  s.customer_id,
                ],
              }),
              m.jsxs("p", {
                children: [
                  m.jsx("strong", { children: "Customer Name:" }),
                  " ",
                  s.customer_name,
                ],
              }),
              m.jsxs("p", {
                children: [
                  m.jsx("strong", { children: "Order Date:" }),
                  " ",
                  new Date(s.order_date).toLocaleString("th-TH", {
                    timeZone: "Asia/Bangkok",
                  }),
                ],
              }),
              m.jsxs("p", {
                children: [
                  m.jsx("strong", { children: "Status:" }),
                  " ",
                  d[s.status] || s.status,
                ],
              }),
              m.jsxs("p", {
                children: [
                  m.jsx("strong", { children: "Total:" }),
                  " ",
                  s.total_amount,
                  " ฿",
                ],
              }),
              m.jsx("h3", { children: "📦 Items" }),
              m.jsxs("table", {
                children: [
                  m.jsx("thead", {
                    children: m.jsxs("tr", {
                      children: [
                        m.jsx("th", { children: "Product ID" }),
                        m.jsx("th", { children: "Product Name" }),
                        m.jsx("th", { children: "Quantity" }),
                        m.jsx("th", { children: "Price" }),
                      ],
                    }),
                  }),
                  m.jsx("tbody", {
                    children: s.items.map((y) =>
                      m.jsxs(
                        "tr",
                        {
                          children: [
                            m.jsx("td", { children: y.product_id }),
                            m.jsx("td", { children: y.product_name }),
                            m.jsx("td", { children: y.quantity }),
                            m.jsxs("td", { children: [y.price, " ฿"] }),
                          ],
                        },
                        y.product_id
                      )
                    ),
                  }),
                ],
              }),
              d[s.status] === "Pending Payment" &&
                m.jsxs("div", {
                  className: "btnG",
                  children: [
                    m.jsx("button", {
                      className: "btnPayment",
                      onClick: () => x("pay", "ธนาคาร"),
                      children: "✅ Payment",
                    }),
                    m.jsx("button", {
                      className: "btnCanceled",
                      onClick: () => x("cancel", ""),
                      children: "❌ Canceled",
                    }),
                  ],
                }),
            ],
          }),
      ],
    }),
  });
}
const Na = Nd.createContext(),
  Nf = Nd.createContext();
function gy() {
  const [i, o] = A.useState([]),
    [s, f] = A.useState([]);
  return m.jsx(Na.Provider, {
    value: { cartProducts: i, setCartProducts: o },
    children: m.jsx(Nf.Provider, {
      value: { products: s, setProducts: f },
      children: m.jsxs("div", {
        className: "containerr",
        children: [
          m.jsx(ey, {}),
          m.jsx("div", {
            className: "content",
            children: m.jsxs(bv, {
              children: [
                m.jsx(Hu, { path: "/", element: m.jsx(sy, {}) }),
                m.jsx(Hu, { path: "/order", element: m.jsx(yy, {}) }),
                m.jsx(Hu, {
                  path: "/inventoryManager",
                  element: m.jsx(vy, {}),
                }),
                m.jsx(Hu, { path: "/report", element: m.jsx(dy, {}) }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
Mm.createRoot(document.getElementById("root")).render(
  m.jsx(A.StrictMode, { children: m.jsx(Xv, { children: m.jsx(gy, {}) }) })
);
