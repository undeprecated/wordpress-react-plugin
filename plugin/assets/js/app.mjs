function qT(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var ug = { exports: {} }, lf = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var tg, HE;
function uf() {
  if (HE)
    return tg;
  HE = 1;
  var _ = Object.getOwnPropertySymbols, I = Object.prototype.hasOwnProperty, fe = Object.prototype.propertyIsEnumerable;
  function z(Xe) {
    if (Xe == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(Xe);
  }
  function nt() {
    try {
      if (!Object.assign)
        return !1;
      var Xe = new String("abc");
      if (Xe[5] = "de", Object.getOwnPropertyNames(Xe)[0] === "5")
        return !1;
      for (var E = {}, Ke = 0; Ke < 10; Ke++)
        E["_" + String.fromCharCode(Ke)] = Ke;
      var le = Object.getOwnPropertyNames(E).map(function(je) {
        return E[je];
      });
      if (le.join("") !== "0123456789")
        return !1;
      var Z = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(je) {
        Z[je] = je;
      }), Object.keys(Object.assign({}, Z)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return tg = nt() ? Object.assign : function(Xe, E) {
    for (var Ke, le = z(Xe), Z, je = 1; je < arguments.length; je++) {
      Ke = Object(arguments[je]);
      for (var ce in Ke)
        I.call(Ke, ce) && (le[ce] = Ke[ce]);
      if (_) {
        Z = _(Ke);
        for (var xe = 0; xe < Z.length; xe++)
          fe.call(Ke, Z[xe]) && (le[Z[xe]] = Ke[Z[xe]]);
      }
    }
    return le;
  }, tg;
}
var og = { exports: {} }, _t = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VE;
function QT() {
  if (VE)
    return _t;
  VE = 1;
  var _ = uf(), I = 60103, fe = 60106;
  _t.Fragment = 60107, _t.StrictMode = 60108, _t.Profiler = 60114;
  var z = 60109, nt = 60110, Xe = 60112;
  _t.Suspense = 60113;
  var E = 60115, Ke = 60116;
  if (typeof Symbol == "function" && Symbol.for) {
    var le = Symbol.for;
    I = le("react.element"), fe = le("react.portal"), _t.Fragment = le("react.fragment"), _t.StrictMode = le("react.strict_mode"), _t.Profiler = le("react.profiler"), z = le("react.provider"), nt = le("react.context"), Xe = le("react.forward_ref"), _t.Suspense = le("react.suspense"), E = le("react.memo"), Ke = le("react.lazy");
  }
  var Z = typeof Symbol == "function" && Symbol.iterator;
  function je(M) {
    return M === null || typeof M != "object" ? null : (M = Z && M[Z] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  function ce(M) {
    for (var $ = "https://reactjs.org/docs/error-decoder.html?invariant=" + M, ge = 1; ge < arguments.length; ge++)
      $ += "&args[]=" + encodeURIComponent(arguments[ge]);
    return "Minified React error #" + M + "; visit " + $ + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var xe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, he = {};
  function We(M, $, ge) {
    this.props = M, this.context = $, this.refs = he, this.updater = ge || xe;
  }
  We.prototype.isReactComponent = {}, We.prototype.setState = function(M, $) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(ce(85));
    this.updater.enqueueSetState(this, M, $, "setState");
  }, We.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function Zt() {
  }
  Zt.prototype = We.prototype;
  function De(M, $, ge) {
    this.props = M, this.context = $, this.refs = he, this.updater = ge || xe;
  }
  var ht = De.prototype = new Zt();
  ht.constructor = De, _(ht, We.prototype), ht.isPureReactComponent = !0;
  var He = { current: null }, J = Object.prototype.hasOwnProperty, we = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ee(M, $, ge) {
    var at, V = {}, K = null, X = null;
    if ($ != null)
      for (at in $.ref !== void 0 && (X = $.ref), $.key !== void 0 && (K = "" + $.key), $)
        J.call($, at) && !we.hasOwnProperty(at) && (V[at] = $[at]);
    var be = arguments.length - 2;
    if (be === 1)
      V.children = ge;
    else if (1 < be) {
      for (var _e = Array(be), it = 0; it < be; it++)
        _e[it] = arguments[it + 2];
      V.children = _e;
    }
    if (M && M.defaultProps)
      for (at in be = M.defaultProps, be)
        V[at] === void 0 && (V[at] = be[at]);
    return { $$typeof: I, type: M, key: K, ref: X, props: V, _owner: He.current };
  }
  function ye(M, $) {
    return { $$typeof: I, type: M.type, key: $, ref: M.ref, props: M.props, _owner: M._owner };
  }
  function Re(M) {
    return typeof M == "object" && M !== null && M.$$typeof === I;
  }
  function Ue(M) {
    var $ = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(ge) {
      return $[ge];
    });
  }
  var $e = /\/+/g;
  function St(M, $) {
    return typeof M == "object" && M !== null && M.key != null ? Ue("" + M.key) : $.toString(36);
  }
  function ut(M, $, ge, at, V) {
    var K = typeof M;
    (K === "undefined" || K === "boolean") && (M = null);
    var X = !1;
    if (M === null)
      X = !0;
    else
      switch (K) {
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case I:
            case fe:
              X = !0;
          }
      }
    if (X)
      return X = M, V = V(X), M = at === "" ? "." + St(X, 0) : at, Array.isArray(V) ? (ge = "", M != null && (ge = M.replace($e, "$&/") + "/"), ut(V, $, ge, "", function(it) {
        return it;
      })) : V != null && (Re(V) && (V = ye(V, ge + (!V.key || X && X.key === V.key ? "" : ("" + V.key).replace($e, "$&/") + "/") + M)), $.push(V)), 1;
    if (X = 0, at = at === "" ? "." : at + ":", Array.isArray(M))
      for (var be = 0; be < M.length; be++) {
        K = M[be];
        var _e = at + St(K, be);
        X += ut(K, $, ge, _e, V);
      }
    else if (_e = je(M), typeof _e == "function")
      for (M = _e.call(M), be = 0; !(K = M.next()).done; )
        K = K.value, _e = at + St(K, be++), X += ut(K, $, ge, _e, V);
    else if (K === "object")
      throw $ = "" + M, Error(ce(31, $ === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : $));
    return X;
  }
  function ot(M, $, ge) {
    if (M == null)
      return M;
    var at = [], V = 0;
    return ut(M, at, "", "", function(K) {
      return $.call(ge, K, V++);
    }), at;
  }
  function Ce(M) {
    if (M._status === -1) {
      var $ = M._result;
      $ = $(), M._status = 0, M._result = $, $.then(function(ge) {
        M._status === 0 && (ge = ge.default, M._status = 1, M._result = ge);
      }, function(ge) {
        M._status === 0 && (M._status = 2, M._result = ge);
      });
    }
    if (M._status === 1)
      return M._result;
    throw M._result;
  }
  var st = { current: null };
  function Ze() {
    var M = st.current;
    if (M === null)
      throw Error(ce(321));
    return M;
  }
  var Rt = { ReactCurrentDispatcher: st, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: He, IsSomeRendererActing: { current: !1 }, assign: _ };
  return _t.Children = { map: ot, forEach: function(M, $, ge) {
    ot(M, function() {
      $.apply(this, arguments);
    }, ge);
  }, count: function(M) {
    var $ = 0;
    return ot(M, function() {
      $++;
    }), $;
  }, toArray: function(M) {
    return ot(M, function($) {
      return $;
    }) || [];
  }, only: function(M) {
    if (!Re(M))
      throw Error(ce(143));
    return M;
  } }, _t.Component = We, _t.PureComponent = De, _t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rt, _t.cloneElement = function(M, $, ge) {
    if (M == null)
      throw Error(ce(267, M));
    var at = _({}, M.props), V = M.key, K = M.ref, X = M._owner;
    if ($ != null) {
      if ($.ref !== void 0 && (K = $.ref, X = He.current), $.key !== void 0 && (V = "" + $.key), M.type && M.type.defaultProps)
        var be = M.type.defaultProps;
      for (_e in $)
        J.call($, _e) && !we.hasOwnProperty(_e) && (at[_e] = $[_e] === void 0 && be !== void 0 ? be[_e] : $[_e]);
    }
    var _e = arguments.length - 2;
    if (_e === 1)
      at.children = ge;
    else if (1 < _e) {
      be = Array(_e);
      for (var it = 0; it < _e; it++)
        be[it] = arguments[it + 2];
      at.children = be;
    }
    return {
      $$typeof: I,
      type: M.type,
      key: V,
      ref: K,
      props: at,
      _owner: X
    };
  }, _t.createContext = function(M, $) {
    return $ === void 0 && ($ = null), M = { $$typeof: nt, _calculateChangedBits: $, _currentValue: M, _currentValue2: M, _threadCount: 0, Provider: null, Consumer: null }, M.Provider = { $$typeof: z, _context: M }, M.Consumer = M;
  }, _t.createElement = ee, _t.createFactory = function(M) {
    var $ = ee.bind(null, M);
    return $.type = M, $;
  }, _t.createRef = function() {
    return { current: null };
  }, _t.forwardRef = function(M) {
    return { $$typeof: Xe, render: M };
  }, _t.isValidElement = Re, _t.lazy = function(M) {
    return { $$typeof: Ke, _payload: { _status: -1, _result: M }, _init: Ce };
  }, _t.memo = function(M, $) {
    return { $$typeof: E, type: M, compare: $ === void 0 ? null : $ };
  }, _t.useCallback = function(M, $) {
    return Ze().useCallback(M, $);
  }, _t.useContext = function(M, $) {
    return Ze().useContext(M, $);
  }, _t.useDebugValue = function() {
  }, _t.useEffect = function(M, $) {
    return Ze().useEffect(M, $);
  }, _t.useImperativeHandle = function(M, $, ge) {
    return Ze().useImperativeHandle(M, $, ge);
  }, _t.useLayoutEffect = function(M, $) {
    return Ze().useLayoutEffect(M, $);
  }, _t.useMemo = function(M, $) {
    return Ze().useMemo(M, $);
  }, _t.useReducer = function(M, $, ge) {
    return Ze().useReducer(M, $, ge);
  }, _t.useRef = function(M) {
    return Ze().useRef(M);
  }, _t.useState = function(M) {
    return Ze().useState(M);
  }, _t.version = "17.0.2", _t;
}
var ng = {};
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BE;
function GT() {
  return BE || (BE = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      var I = uf(), fe = "17.0.2", z = 60103, nt = 60106;
      _.Fragment = 60107, _.StrictMode = 60108, _.Profiler = 60114;
      var Xe = 60109, E = 60110, Ke = 60112;
      _.Suspense = 60113;
      var le = 60120, Z = 60115, je = 60116, ce = 60121, xe = 60122, he = 60117, We = 60129, Zt = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var De = Symbol.for;
        z = De("react.element"), nt = De("react.portal"), _.Fragment = De("react.fragment"), _.StrictMode = De("react.strict_mode"), _.Profiler = De("react.profiler"), Xe = De("react.provider"), E = De("react.context"), Ke = De("react.forward_ref"), _.Suspense = De("react.suspense"), le = De("react.suspense_list"), Z = De("react.memo"), je = De("react.lazy"), ce = De("react.block"), xe = De("react.server.block"), he = De("react.fundamental"), De("react.scope"), De("react.opaque.id"), We = De("react.debug_trace_mode"), De("react.offscreen"), Zt = De("react.legacy_hidden");
      }
      var ht = typeof Symbol == "function" && Symbol.iterator, He = "@@iterator";
      function J(h) {
        if (h === null || typeof h != "object")
          return null;
        var T = ht && h[ht] || h[He];
        return typeof T == "function" ? T : null;
      }
      var we = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ee = {
        transition: 0
      }, ye = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Re = {}, Ue = null;
      function $e(h) {
        Ue = h;
      }
      Re.setExtraStackFrame = function(h) {
        Ue = h;
      }, Re.getCurrentStack = null, Re.getStackAddendum = function() {
        var h = "";
        Ue && (h += Ue);
        var T = Re.getCurrentStack;
        return T && (h += T() || ""), h;
      };
      var St = {
        current: !1
      }, ut = {
        ReactCurrentDispatcher: we,
        ReactCurrentBatchConfig: ee,
        ReactCurrentOwner: ye,
        IsSomeRendererActing: St,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: I
      };
      ut.ReactDebugCurrentFrame = Re;
      function ot(h) {
        {
          for (var T = arguments.length, A = new Array(T > 1 ? T - 1 : 0), P = 1; P < T; P++)
            A[P - 1] = arguments[P];
          st("warn", h, A);
        }
      }
      function Ce(h) {
        {
          for (var T = arguments.length, A = new Array(T > 1 ? T - 1 : 0), P = 1; P < T; P++)
            A[P - 1] = arguments[P];
          st("error", h, A);
        }
      }
      function st(h, T, A) {
        {
          var P = ut.ReactDebugCurrentFrame, ie = P.getStackAddendum();
          ie !== "" && (T += "%s", A = A.concat([ie]));
          var Fe = A.map(function(Me) {
            return "" + Me;
          });
          Fe.unshift("Warning: " + T), Function.prototype.apply.call(console[h], console, Fe);
        }
      }
      var Ze = {};
      function Rt(h, T) {
        {
          var A = h.constructor, P = A && (A.displayName || A.name) || "ReactClass", ie = P + "." + T;
          if (Ze[ie])
            return;
          Ce("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, P), Ze[ie] = !0;
        }
      }
      var M = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, T, A) {
          Rt(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, T, A, P) {
          Rt(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, T, A, P) {
          Rt(h, "setState");
        }
      }, $ = {};
      Object.freeze($);
      function ge(h, T, A) {
        this.props = h, this.context = T, this.refs = $, this.updater = A || M;
      }
      ge.prototype.isReactComponent = {}, ge.prototype.setState = function(h, T) {
        if (!(typeof h == "object" || typeof h == "function" || h == null))
          throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, T, "setState");
      }, ge.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var at = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, V = function(h, T) {
          Object.defineProperty(ge.prototype, h, {
            get: function() {
              ot("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
            }
          });
        };
        for (var K in at)
          at.hasOwnProperty(K) && V(K, at[K]);
      }
      function X() {
      }
      X.prototype = ge.prototype;
      function be(h, T, A) {
        this.props = h, this.context = T, this.refs = $, this.updater = A || M;
      }
      var _e = be.prototype = new X();
      _e.constructor = be, I(_e, ge.prototype), _e.isPureReactComponent = !0;
      function it() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      function qt(h, T, A) {
        var P = T.displayName || T.name || "";
        return h.displayName || (P !== "" ? A + "(" + P + ")" : A);
      }
      function Et(h) {
        return h.displayName || "Context";
      }
      function mt(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && Ce("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case _.Fragment:
            return "Fragment";
          case nt:
            return "Portal";
          case _.Profiler:
            return "Profiler";
          case _.StrictMode:
            return "StrictMode";
          case _.Suspense:
            return "Suspense";
          case le:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case E:
              var T = h;
              return Et(T) + ".Consumer";
            case Xe:
              var A = h;
              return Et(A._context) + ".Provider";
            case Ke:
              return qt(h, h.render, "ForwardRef");
            case Z:
              return mt(h.type);
            case ce:
              return mt(h._render);
            case je: {
              var P = h, ie = P._payload, Fe = P._init;
              try {
                return mt(Fe(ie));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var sn = Object.prototype.hasOwnProperty, Nt = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, bt, sr, Hn;
      Hn = {};
      function nn(h) {
        if (sn.call(h, "ref")) {
          var T = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Sr(h) {
        if (sn.call(h, "key")) {
          var T = Object.getOwnPropertyDescriptor(h, "key").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Er(h, T) {
        var A = function() {
          bt || (bt = !0, Ce("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: A,
          configurable: !0
        });
      }
      function Gn(h, T) {
        var A = function() {
          sr || (sr = !0, Ce("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
        };
        A.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: A,
          configurable: !0
        });
      }
      function La(h) {
        if (typeof h.ref == "string" && ye.current && h.__self && ye.current.stateNode !== h.__self) {
          var T = mt(ye.current.type);
          Hn[T] || (Ce('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, h.ref), Hn[T] = !0);
        }
      }
      var Xn = function(h, T, A, P, ie, Fe, Me) {
        var Le = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: z,
          // Built-in properties that belong on the element
          type: h,
          key: T,
          ref: A,
          props: Me,
          // Record the component responsible for creating this element.
          _owner: Fe
        };
        return Le._store = {}, Object.defineProperty(Le._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Le, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: P
        }), Object.defineProperty(Le, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ie
        }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
      };
      function Or(h, T, A) {
        var P, ie = {}, Fe = null, Me = null, Le = null, ke = null;
        if (T != null) {
          nn(T) && (Me = T.ref, La(T)), Sr(T) && (Fe = "" + T.key), Le = T.__self === void 0 ? null : T.__self, ke = T.__source === void 0 ? null : T.__source;
          for (P in T)
            sn.call(T, P) && !Nt.hasOwnProperty(P) && (ie[P] = T[P]);
        }
        var Tt = arguments.length - 2;
        if (Tt === 1)
          ie.children = A;
        else if (Tt > 1) {
          for (var $t = Array(Tt), en = 0; en < Tt; en++)
            $t[en] = arguments[en + 2];
          Object.freeze && Object.freeze($t), ie.children = $t;
        }
        if (h && h.defaultProps) {
          var cn = h.defaultProps;
          for (P in cn)
            ie[P] === void 0 && (ie[P] = cn[P]);
        }
        if (Fe || Me) {
          var Ln = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Fe && Er(ie, Ln), Me && Gn(ie, Ln);
        }
        return Xn(h, Fe, Me, Le, ke, ye.current, ie);
      }
      function Aa(h, T) {
        var A = Xn(h.type, T, h.ref, h._self, h._source, h._owner, h.props);
        return A;
      }
      function Mr(h, T, A) {
        if (h == null)
          throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var P, ie = I({}, h.props), Fe = h.key, Me = h.ref, Le = h._self, ke = h._source, Tt = h._owner;
        if (T != null) {
          nn(T) && (Me = T.ref, Tt = ye.current), Sr(T) && (Fe = "" + T.key);
          var $t;
          h.type && h.type.defaultProps && ($t = h.type.defaultProps);
          for (P in T)
            sn.call(T, P) && !Nt.hasOwnProperty(P) && (T[P] === void 0 && $t !== void 0 ? ie[P] = $t[P] : ie[P] = T[P]);
        }
        var en = arguments.length - 2;
        if (en === 1)
          ie.children = A;
        else if (en > 1) {
          for (var cn = Array(en), Ln = 0; Ln < en; Ln++)
            cn[Ln] = arguments[Ln + 2];
          ie.children = cn;
        }
        return Xn(h.type, Fe, Me, Le, ke, Tt, ie);
      }
      function On(h) {
        return typeof h == "object" && h !== null && h.$$typeof === z;
      }
      var fr = ".", Ht = ":";
      function Wt(h) {
        var T = /[=:]/g, A = {
          "=": "=0",
          ":": "=2"
        }, P = h.replace(T, function(ie) {
          return A[ie];
        });
        return "$" + P;
      }
      var Ua = !1, oa = /\/+/g;
      function $r(h) {
        return h.replace(oa, "$&/");
      }
      function ne(h, T) {
        return typeof h == "object" && h !== null && h.key != null ? Wt("" + h.key) : T.toString(36);
      }
      function me(h, T, A, P, ie) {
        var Fe = typeof h;
        (Fe === "undefined" || Fe === "boolean") && (h = null);
        var Me = !1;
        if (h === null)
          Me = !0;
        else
          switch (Fe) {
            case "string":
            case "number":
              Me = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case z:
                case nt:
                  Me = !0;
              }
          }
        if (Me) {
          var Le = h, ke = ie(Le), Tt = P === "" ? fr + ne(Le, 0) : P;
          if (Array.isArray(ke)) {
            var $t = "";
            Tt != null && ($t = $r(Tt) + "/"), me(ke, T, $t, "", function(Du) {
              return Du;
            });
          } else
            ke != null && (On(ke) && (ke = Aa(
              ke,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              A + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ke.key && (!Le || Le.key !== ke.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                $r("" + ke.key) + "/"
              ) : "") + Tt
            )), T.push(ke));
          return 1;
        }
        var en, cn, Ln = 0, An = P === "" ? fr : P + Ht;
        if (Array.isArray(h))
          for (var Tr = 0; Tr < h.length; Tr++)
            en = h[Tr], cn = An + ne(en, Tr), Ln += me(en, T, A, cn, ie);
        else {
          var pi = J(h);
          if (typeof pi == "function") {
            var vi = h;
            pi === vi.entries && (Ua || ot("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ua = !0);
            for (var va = pi.call(vi), ku, sf = 0; !(ku = va.next()).done; )
              en = ku.value, cn = An + ne(en, sf++), Ln += me(en, T, A, cn, ie);
          } else if (Fe === "object") {
            var Al = "" + h;
            throw Error("Objects are not valid as a React child (found: " + (Al === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Al) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ln;
      }
      function Pe(h, T, A) {
        if (h == null)
          return h;
        var P = [], ie = 0;
        return me(h, P, "", "", function(Fe) {
          return T.call(A, Fe, ie++);
        }), P;
      }
      function yt(h) {
        var T = 0;
        return Pe(h, function() {
          T++;
        }), T;
      }
      function Lt(h, T, A) {
        Pe(h, function() {
          T.apply(this, arguments);
        }, A);
      }
      function At(h) {
        return Pe(h, function(T) {
          return T;
        }) || [];
      }
      function Ut(h) {
        if (!On(h))
          throw Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function fn(h, T) {
        T === void 0 ? T = null : T !== null && typeof T != "function" && Ce("createContext: Expected the optional second argument to be a function. Instead received: %s", T);
        var A = {
          $$typeof: E,
          _calculateChangedBits: T,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        A.Provider = {
          $$typeof: Xe,
          _context: A
        };
        var P = !1, ie = !1, Fe = !1;
        {
          var Me = {
            $$typeof: E,
            _context: A,
            _calculateChangedBits: A._calculateChangedBits
          };
          Object.defineProperties(Me, {
            Provider: {
              get: function() {
                return ie || (ie = !0, Ce("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), A.Provider;
              },
              set: function(Le) {
                A.Provider = Le;
              }
            },
            _currentValue: {
              get: function() {
                return A._currentValue;
              },
              set: function(Le) {
                A._currentValue = Le;
              }
            },
            _currentValue2: {
              get: function() {
                return A._currentValue2;
              },
              set: function(Le) {
                A._currentValue2 = Le;
              }
            },
            _threadCount: {
              get: function() {
                return A._threadCount;
              },
              set: function(Le) {
                A._threadCount = Le;
              }
            },
            Consumer: {
              get: function() {
                return P || (P = !0, Ce("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), A.Consumer;
              }
            },
            displayName: {
              get: function() {
                return A.displayName;
              },
              set: function(Le) {
                Fe || (ot("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Le), Fe = !0);
              }
            }
          }), A.Consumer = Me;
        }
        return A._currentRenderer = null, A._currentRenderer2 = null, A;
      }
      var Pt = -1, Vn = 0, ii = 1, Nr = 2;
      function Yr(h) {
        if (h._status === Pt) {
          var T = h._result, A = T(), P = h;
          P._status = Vn, P._result = A, A.then(function(ie) {
            if (h._status === Vn) {
              var Fe = ie.default;
              Fe === void 0 && Ce(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ie);
              var Me = h;
              Me._status = ii, Me._result = Fe;
            }
          }, function(ie) {
            if (h._status === Vn) {
              var Fe = h;
              Fe._status = Nr, Fe._result = ie;
            }
          });
        }
        if (h._status === ii)
          return h._result;
        throw h._result;
      }
      function sa(h) {
        var T = {
          // We use these fields to store the result.
          _status: -1,
          _result: h
        }, A = {
          $$typeof: je,
          _payload: T,
          _init: Yr
        };
        {
          var P, ie;
          Object.defineProperties(A, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return P;
              },
              set: function(Fe) {
                Ce("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), P = Fe, Object.defineProperty(A, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ie;
              },
              set: function(Fe) {
                Ce("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ie = Fe, Object.defineProperty(A, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return A;
      }
      function Cr(h) {
        h != null && h.$$typeof === Z ? Ce("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? Ce("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && Ce("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && Ce("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var T = {
          $$typeof: Ke,
          render: h
        };
        {
          var A;
          Object.defineProperty(T, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(P) {
              A = P, h.displayName == null && (h.displayName = P);
            }
          });
        }
        return T;
      }
      var Bn = !1;
      function In(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === _.Fragment || h === _.Profiler || h === We || h === _.StrictMode || h === _.Suspense || h === le || h === Zt || Bn || typeof h == "object" && h !== null && (h.$$typeof === je || h.$$typeof === Z || h.$$typeof === Xe || h.$$typeof === E || h.$$typeof === Ke || h.$$typeof === he || h.$$typeof === ce || h[0] === xe));
      }
      function qr(h, T) {
        In(h) || Ce("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var A = {
          $$typeof: Z,
          type: h,
          compare: T === void 0 ? null : T
        };
        {
          var P;
          Object.defineProperty(A, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return P;
            },
            set: function(ie) {
              P = ie, h.displayName == null && (h.displayName = ie);
            }
          });
        }
        return A;
      }
      function Jt() {
        var h = we.current;
        if (h === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        return h;
      }
      function za(h, T) {
        var A = Jt();
        if (T !== void 0 && Ce("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", T, typeof T == "number" && Array.isArray(arguments[2]) ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks` : ""), h._context !== void 0) {
          var P = h._context;
          P.Consumer === h ? Ce("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : P.Provider === h && Ce("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return A.useContext(h, T);
      }
      function C(h) {
        var T = Jt();
        return T.useState(h);
      }
      function q(h, T, A) {
        var P = Jt();
        return P.useReducer(h, T, A);
      }
      function ae(h) {
        var T = Jt();
        return T.useRef(h);
      }
      function Oe(h, T) {
        var A = Jt();
        return A.useEffect(h, T);
      }
      function ft(h, T) {
        var A = Jt();
        return A.useLayoutEffect(h, T);
      }
      function Ne(h, T) {
        var A = Jt();
        return A.useCallback(h, T);
      }
      function ct(h, T) {
        var A = Jt();
        return A.useMemo(h, T);
      }
      function pt(h, T, A) {
        var P = Jt();
        return P.useImperativeHandle(h, T, A);
      }
      function Mt(h, T) {
        {
          var A = Jt();
          return A.useDebugValue(h, T);
        }
      }
      var gt = 0, kt, Kn, Wn, Qr, Sn, Ki, wu;
      function _u() {
      }
      _u.__reactDisabledLog = !0;
      function Lr() {
        {
          if (gt === 0) {
            kt = console.log, Kn = console.info, Wn = console.warn, Qr = console.error, Sn = console.group, Ki = console.groupCollapsed, wu = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: _u,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          gt++;
        }
      }
      function En() {
        {
          if (gt--, gt === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: I({}, h, {
                value: kt
              }),
              info: I({}, h, {
                value: Kn
              }),
              warn: I({}, h, {
                value: Wn
              }),
              error: I({}, h, {
                value: Qr
              }),
              group: I({}, h, {
                value: Sn
              }),
              groupCollapsed: I({}, h, {
                value: Ki
              }),
              groupEnd: I({}, h, {
                value: wu
              })
            });
          }
          gt < 0 && Ce("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var li = ut.ReactCurrentDispatcher, ui;
      function Rr(h, T, A) {
        {
          if (ui === void 0)
            try {
              throw Error();
            } catch (ie) {
              var P = ie.stack.trim().match(/\n( *(at )?)/);
              ui = P && P[1] || "";
            }
          return `
` + ui + h;
        }
      }
      var oi = !1, fa;
      {
        var Vo = typeof WeakMap == "function" ? WeakMap : Map;
        fa = new Vo();
      }
      function si(h, T) {
        if (!h || oi)
          return "";
        {
          var A = fa.get(h);
          if (A !== void 0)
            return A;
        }
        var P;
        oi = !0;
        var ie = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Fe;
        Fe = li.current, li.current = null, Lr();
        try {
          if (T) {
            var Me = function() {
              throw Error();
            };
            if (Object.defineProperty(Me.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Me, []);
              } catch (An) {
                P = An;
              }
              Reflect.construct(h, [], Me);
            } else {
              try {
                Me.call();
              } catch (An) {
                P = An;
              }
              h.call(Me.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (An) {
              P = An;
            }
            h();
          }
        } catch (An) {
          if (An && P && typeof An.stack == "string") {
            for (var Le = An.stack.split(`
`), ke = P.stack.split(`
`), Tt = Le.length - 1, $t = ke.length - 1; Tt >= 1 && $t >= 0 && Le[Tt] !== ke[$t]; )
              $t--;
            for (; Tt >= 1 && $t >= 0; Tt--, $t--)
              if (Le[Tt] !== ke[$t]) {
                if (Tt !== 1 || $t !== 1)
                  do
                    if (Tt--, $t--, $t < 0 || Le[Tt] !== ke[$t]) {
                      var en = `
` + Le[Tt].replace(" at new ", " at ");
                      return typeof h == "function" && fa.set(h, en), en;
                    }
                  while (Tt >= 1 && $t >= 0);
                break;
              }
          }
        } finally {
          oi = !1, li.current = Fe, En(), Error.prepareStackTrace = ie;
        }
        var cn = h ? h.displayName || h.name : "", Ln = cn ? Rr(cn) : "";
        return typeof h == "function" && fa.set(h, Ln), Ln;
      }
      function xu(h, T, A) {
        return si(h, !1);
      }
      function fi(h) {
        var T = h.prototype;
        return !!(T && T.isReactComponent);
      }
      function ci(h, T, A) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return si(h, fi(h));
        if (typeof h == "string")
          return Rr(h);
        switch (h) {
          case _.Suspense:
            return Rr("Suspense");
          case le:
            return Rr("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ke:
              return xu(h.render);
            case Z:
              return ci(h.type, T, A);
            case ce:
              return xu(h._render);
            case je: {
              var P = h, ie = P._payload, Fe = P._init;
              try {
                return ci(Fe(ie), T, A);
              } catch {
              }
            }
          }
        return "";
      }
      var Zn = {}, Gr = ut.ReactDebugCurrentFrame;
      function cr(h) {
        if (h) {
          var T = h._owner, A = ci(h.type, h._source, T ? T.type : null);
          Gr.setExtraStackFrame(A);
        } else
          Gr.setExtraStackFrame(null);
      }
      function ca(h, T, A, P, ie) {
        {
          var Fe = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var Me in h)
            if (Fe(h, Me)) {
              var Le = void 0;
              try {
                if (typeof h[Me] != "function") {
                  var ke = Error((P || "React class") + ": " + A + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ke.name = "Invariant Violation", ke;
                }
                Le = h[Me](T, Me, P, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Tt) {
                Le = Tt;
              }
              Le && !(Le instanceof Error) && (cr(ie), Ce("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", A, Me, typeof Le), cr(null)), Le instanceof Error && !(Le.message in Zn) && (Zn[Le.message] = !0, cr(ie), Ce("Failed %s type: %s", A, Le.message), cr(null));
            }
        }
      }
      function br(h) {
        if (h) {
          var T = h._owner, A = ci(h.type, h._source, T ? T.type : null);
          $e(A);
        } else
          $e(null);
      }
      var re;
      re = !1;
      function ja() {
        if (ye.current) {
          var h = mt(ye.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Mn(h) {
        if (h !== void 0) {
          var T = h.fileName.replace(/^.*[\\\/]/, ""), A = h.lineNumber;
          return `

Check your code at ` + T + ":" + A + ".";
        }
        return "";
      }
      function da(h) {
        return h != null ? Mn(h.__source) : "";
      }
      var Pa = {};
      function Zi(h) {
        var T = ja();
        if (!T) {
          var A = typeof h == "string" ? h : h.displayName || h.name;
          A && (T = `

Check the top-level render call using <` + A + ">.");
        }
        return T;
      }
      function Nn(h, T) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var A = Zi(T);
          if (!Pa[A]) {
            Pa[A] = !0;
            var P = "";
            h && h._owner && h._owner !== ye.current && (P = " It was passed a child from " + mt(h._owner.type) + "."), br(h), Ce('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, P), br(null);
          }
        }
      }
      function on(h, T) {
        if (typeof h == "object") {
          if (Array.isArray(h))
            for (var A = 0; A < h.length; A++) {
              var P = h[A];
              On(P) && Nn(P, T);
            }
          else if (On(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ie = J(h);
            if (typeof ie == "function" && ie !== h.entries)
              for (var Fe = ie.call(h), Me; !(Me = Fe.next()).done; )
                On(Me.value) && Nn(Me.value, T);
          }
        }
      }
      function $n(h) {
        {
          var T = h.type;
          if (T == null || typeof T == "string")
            return;
          var A;
          if (typeof T == "function")
            A = T.propTypes;
          else if (typeof T == "object" && (T.$$typeof === Ke || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          T.$$typeof === Z))
            A = T.propTypes;
          else
            return;
          if (A) {
            var P = mt(T);
            ca(A, h.props, "prop", P, h);
          } else if (T.PropTypes !== void 0 && !re) {
            re = !0;
            var ie = mt(T);
            Ce("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ie || "Unknown");
          }
          typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && Ce("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Bo(h) {
        {
          for (var T = Object.keys(h.props), A = 0; A < T.length; A++) {
            var P = T[A];
            if (P !== "children" && P !== "key") {
              br(h), Ce("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), br(null);
              break;
            }
          }
          h.ref !== null && (br(h), Ce("Invalid attribute `ref` supplied to `React.Fragment`."), br(null));
        }
      }
      function Jn(h, T, A) {
        var P = In(h);
        if (!P) {
          var ie = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Fe = da(T);
          Fe ? ie += Fe : ie += ja();
          var Me;
          h === null ? Me = "null" : Array.isArray(h) ? Me = "array" : h !== void 0 && h.$$typeof === z ? (Me = "<" + (mt(h.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Me = typeof h, Ce("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Me, ie);
        }
        var Le = Or.apply(this, arguments);
        if (Le == null)
          return Le;
        if (P)
          for (var ke = 2; ke < arguments.length; ke++)
            on(arguments[ke], h);
        return h === _.Fragment ? Bo(Le) : $n(Le), Le;
      }
      var er = !1;
      function Io(h) {
        var T = Jn.bind(null, h);
        return T.type = h, er || (er = !0, ot("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
          enumerable: !1,
          get: function() {
            return ot("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), T;
      }
      function di(h, T, A) {
        for (var P = Mr.apply(this, arguments), ie = 2; ie < arguments.length; ie++)
          on(arguments[ie], P.type);
        return $n(P), P;
      }
      try {
        var pa = Object.freeze({});
      } catch {
      }
      var Nl = Jn, Wo = di, Ll = Io, $o = {
        map: Pe,
        forEach: Lt,
        count: yt,
        toArray: At,
        only: Ut
      };
      _.Children = $o, _.Component = ge, _.PureComponent = be, _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ut, _.cloneElement = Wo, _.createContext = fn, _.createElement = Nl, _.createFactory = Ll, _.createRef = it, _.forwardRef = Cr, _.isValidElement = On, _.lazy = sa, _.memo = qr, _.useCallback = Ne, _.useContext = za, _.useDebugValue = Mt, _.useEffect = Oe, _.useImperativeHandle = pt, _.useLayoutEffect = ft, _.useMemo = ct, _.useReducer = q, _.useRef = ae, _.useState = C, _.version = fe;
    }();
  }(ng)), ng;
}
process.env.NODE_ENV === "production" ? og.exports = QT() : og.exports = GT();
var of = og.exports;
const XT = /* @__PURE__ */ qT(of);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IE;
function KT() {
  if (IE)
    return lf;
  IE = 1, uf();
  var _ = of, I = 60103;
  if (lf.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var fe = Symbol.for;
    I = fe("react.element"), lf.Fragment = fe("react.fragment");
  }
  var z = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, nt = Object.prototype.hasOwnProperty, Xe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(Ke, le, Z) {
    var je, ce = {}, xe = null, he = null;
    Z !== void 0 && (xe = "" + Z), le.key !== void 0 && (xe = "" + le.key), le.ref !== void 0 && (he = le.ref);
    for (je in le)
      nt.call(le, je) && !Xe.hasOwnProperty(je) && (ce[je] = le[je]);
    if (Ke && Ke.defaultProps)
      for (je in le = Ke.defaultProps, le)
        ce[je] === void 0 && (ce[je] = le[je]);
    return { $$typeof: I, type: Ke, key: xe, ref: he, props: ce, _owner: z.current };
  }
  return lf.jsx = E, lf.jsxs = E, lf;
}
var rg = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var WE;
function ZT() {
  return WE || (WE = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      var I = of, fe = uf(), z = 60103, nt = 60106;
      _.Fragment = 60107;
      var Xe = 60108, E = 60114, Ke = 60109, le = 60110, Z = 60112, je = 60113, ce = 60120, xe = 60115, he = 60116, We = 60121, Zt = 60122, De = 60117, ht = 60129, He = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var J = Symbol.for;
        z = J("react.element"), nt = J("react.portal"), _.Fragment = J("react.fragment"), Xe = J("react.strict_mode"), E = J("react.profiler"), Ke = J("react.provider"), le = J("react.context"), Z = J("react.forward_ref"), je = J("react.suspense"), ce = J("react.suspense_list"), xe = J("react.memo"), he = J("react.lazy"), We = J("react.block"), Zt = J("react.server.block"), De = J("react.fundamental"), J("react.scope"), J("react.opaque.id"), ht = J("react.debug_trace_mode"), J("react.offscreen"), He = J("react.legacy_hidden");
      }
      var we = typeof Symbol == "function" && Symbol.iterator, ee = "@@iterator";
      function ye(C) {
        if (C === null || typeof C != "object")
          return null;
        var q = we && C[we] || C[ee];
        return typeof q == "function" ? q : null;
      }
      var Re = I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function Ue(C) {
        {
          for (var q = arguments.length, ae = new Array(q > 1 ? q - 1 : 0), Oe = 1; Oe < q; Oe++)
            ae[Oe - 1] = arguments[Oe];
          $e("error", C, ae);
        }
      }
      function $e(C, q, ae) {
        {
          var Oe = Re.ReactDebugCurrentFrame, ft = Oe.getStackAddendum();
          ft !== "" && (q += "%s", ae = ae.concat([ft]));
          var Ne = ae.map(function(ct) {
            return "" + ct;
          });
          Ne.unshift("Warning: " + q), Function.prototype.apply.call(console[C], console, Ne);
        }
      }
      var St = !1;
      function ut(C) {
        return !!(typeof C == "string" || typeof C == "function" || C === _.Fragment || C === E || C === ht || C === Xe || C === je || C === ce || C === He || St || typeof C == "object" && C !== null && (C.$$typeof === he || C.$$typeof === xe || C.$$typeof === Ke || C.$$typeof === le || C.$$typeof === Z || C.$$typeof === De || C.$$typeof === We || C[0] === Zt));
      }
      function ot(C, q, ae) {
        var Oe = q.displayName || q.name || "";
        return C.displayName || (Oe !== "" ? ae + "(" + Oe + ")" : ae);
      }
      function Ce(C) {
        return C.displayName || "Context";
      }
      function st(C) {
        if (C == null)
          return null;
        if (typeof C.tag == "number" && Ue("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof C == "function")
          return C.displayName || C.name || null;
        if (typeof C == "string")
          return C;
        switch (C) {
          case _.Fragment:
            return "Fragment";
          case nt:
            return "Portal";
          case E:
            return "Profiler";
          case Xe:
            return "StrictMode";
          case je:
            return "Suspense";
          case ce:
            return "SuspenseList";
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case le:
              var q = C;
              return Ce(q) + ".Consumer";
            case Ke:
              var ae = C;
              return Ce(ae._context) + ".Provider";
            case Z:
              return ot(C, C.render, "ForwardRef");
            case xe:
              return st(C.type);
            case We:
              return st(C._render);
            case he: {
              var Oe = C, ft = Oe._payload, Ne = Oe._init;
              try {
                return st(Ne(ft));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ze = 0, Rt, M, $, ge, at, V, K;
      function X() {
      }
      X.__reactDisabledLog = !0;
      function be() {
        {
          if (Ze === 0) {
            Rt = console.log, M = console.info, $ = console.warn, ge = console.error, at = console.group, V = console.groupCollapsed, K = console.groupEnd;
            var C = {
              configurable: !0,
              enumerable: !0,
              value: X,
              writable: !0
            };
            Object.defineProperties(console, {
              info: C,
              log: C,
              warn: C,
              error: C,
              group: C,
              groupCollapsed: C,
              groupEnd: C
            });
          }
          Ze++;
        }
      }
      function _e() {
        {
          if (Ze--, Ze === 0) {
            var C = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: fe({}, C, {
                value: Rt
              }),
              info: fe({}, C, {
                value: M
              }),
              warn: fe({}, C, {
                value: $
              }),
              error: fe({}, C, {
                value: ge
              }),
              group: fe({}, C, {
                value: at
              }),
              groupCollapsed: fe({}, C, {
                value: V
              }),
              groupEnd: fe({}, C, {
                value: K
              })
            });
          }
          Ze < 0 && Ue("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var it = Re.ReactCurrentDispatcher, qt;
      function Et(C, q, ae) {
        {
          if (qt === void 0)
            try {
              throw Error();
            } catch (ft) {
              var Oe = ft.stack.trim().match(/\n( *(at )?)/);
              qt = Oe && Oe[1] || "";
            }
          return `
` + qt + C;
        }
      }
      var mt = !1, sn;
      {
        var Nt = typeof WeakMap == "function" ? WeakMap : Map;
        sn = new Nt();
      }
      function bt(C, q) {
        if (!C || mt)
          return "";
        {
          var ae = sn.get(C);
          if (ae !== void 0)
            return ae;
        }
        var Oe;
        mt = !0;
        var ft = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ne;
        Ne = it.current, it.current = null, be();
        try {
          if (q) {
            var ct = function() {
              throw Error();
            };
            if (Object.defineProperty(ct.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ct, []);
              } catch (Sn) {
                Oe = Sn;
              }
              Reflect.construct(C, [], ct);
            } else {
              try {
                ct.call();
              } catch (Sn) {
                Oe = Sn;
              }
              C.call(ct.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Sn) {
              Oe = Sn;
            }
            C();
          }
        } catch (Sn) {
          if (Sn && Oe && typeof Sn.stack == "string") {
            for (var pt = Sn.stack.split(`
`), Mt = Oe.stack.split(`
`), gt = pt.length - 1, kt = Mt.length - 1; gt >= 1 && kt >= 0 && pt[gt] !== Mt[kt]; )
              kt--;
            for (; gt >= 1 && kt >= 0; gt--, kt--)
              if (pt[gt] !== Mt[kt]) {
                if (gt !== 1 || kt !== 1)
                  do
                    if (gt--, kt--, kt < 0 || pt[gt] !== Mt[kt]) {
                      var Kn = `
` + pt[gt].replace(" at new ", " at ");
                      return typeof C == "function" && sn.set(C, Kn), Kn;
                    }
                  while (gt >= 1 && kt >= 0);
                break;
              }
          }
        } finally {
          mt = !1, it.current = Ne, _e(), Error.prepareStackTrace = ft;
        }
        var Wn = C ? C.displayName || C.name : "", Qr = Wn ? Et(Wn) : "";
        return typeof C == "function" && sn.set(C, Qr), Qr;
      }
      function sr(C, q, ae) {
        return bt(C, !1);
      }
      function Hn(C) {
        var q = C.prototype;
        return !!(q && q.isReactComponent);
      }
      function nn(C, q, ae) {
        if (C == null)
          return "";
        if (typeof C == "function")
          return bt(C, Hn(C));
        if (typeof C == "string")
          return Et(C);
        switch (C) {
          case je:
            return Et("Suspense");
          case ce:
            return Et("SuspenseList");
        }
        if (typeof C == "object")
          switch (C.$$typeof) {
            case Z:
              return sr(C.render);
            case xe:
              return nn(C.type, q, ae);
            case We:
              return sr(C._render);
            case he: {
              var Oe = C, ft = Oe._payload, Ne = Oe._init;
              try {
                return nn(Ne(ft), q, ae);
              } catch {
              }
            }
          }
        return "";
      }
      var Sr = {}, Er = Re.ReactDebugCurrentFrame;
      function Gn(C) {
        if (C) {
          var q = C._owner, ae = nn(C.type, C._source, q ? q.type : null);
          Er.setExtraStackFrame(ae);
        } else
          Er.setExtraStackFrame(null);
      }
      function La(C, q, ae, Oe, ft) {
        {
          var Ne = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var ct in C)
            if (Ne(C, ct)) {
              var pt = void 0;
              try {
                if (typeof C[ct] != "function") {
                  var Mt = Error((Oe || "React class") + ": " + ae + " type `" + ct + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[ct] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Mt.name = "Invariant Violation", Mt;
                }
                pt = C[ct](q, ct, Oe, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (gt) {
                pt = gt;
              }
              pt && !(pt instanceof Error) && (Gn(ft), Ue("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Oe || "React class", ae, ct, typeof pt), Gn(null)), pt instanceof Error && !(pt.message in Sr) && (Sr[pt.message] = !0, Gn(ft), Ue("Failed %s type: %s", ae, pt.message), Gn(null));
            }
        }
      }
      var Xn = Re.ReactCurrentOwner, Or = Object.prototype.hasOwnProperty, Aa = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Mr, On, fr;
      fr = {};
      function Ht(C) {
        if (Or.call(C, "ref")) {
          var q = Object.getOwnPropertyDescriptor(C, "ref").get;
          if (q && q.isReactWarning)
            return !1;
        }
        return C.ref !== void 0;
      }
      function Wt(C) {
        if (Or.call(C, "key")) {
          var q = Object.getOwnPropertyDescriptor(C, "key").get;
          if (q && q.isReactWarning)
            return !1;
        }
        return C.key !== void 0;
      }
      function Ua(C, q) {
        if (typeof C.ref == "string" && Xn.current && q && Xn.current.stateNode !== q) {
          var ae = st(Xn.current.type);
          fr[ae] || (Ue('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', st(Xn.current.type), C.ref), fr[ae] = !0);
        }
      }
      function oa(C, q) {
        {
          var ae = function() {
            Mr || (Mr = !0, Ue("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
          };
          ae.isReactWarning = !0, Object.defineProperty(C, "key", {
            get: ae,
            configurable: !0
          });
        }
      }
      function $r(C, q) {
        {
          var ae = function() {
            On || (On = !0, Ue("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", q));
          };
          ae.isReactWarning = !0, Object.defineProperty(C, "ref", {
            get: ae,
            configurable: !0
          });
        }
      }
      var ne = function(C, q, ae, Oe, ft, Ne, ct) {
        var pt = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: z,
          // Built-in properties that belong on the element
          type: C,
          key: q,
          ref: ae,
          props: ct,
          // Record the component responsible for creating this element.
          _owner: Ne
        };
        return pt._store = {}, Object.defineProperty(pt._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(pt, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Oe
        }), Object.defineProperty(pt, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ft
        }), Object.freeze && (Object.freeze(pt.props), Object.freeze(pt)), pt;
      };
      function me(C, q, ae, Oe, ft) {
        {
          var Ne, ct = {}, pt = null, Mt = null;
          ae !== void 0 && (pt = "" + ae), Wt(q) && (pt = "" + q.key), Ht(q) && (Mt = q.ref, Ua(q, ft));
          for (Ne in q)
            Or.call(q, Ne) && !Aa.hasOwnProperty(Ne) && (ct[Ne] = q[Ne]);
          if (C && C.defaultProps) {
            var gt = C.defaultProps;
            for (Ne in gt)
              ct[Ne] === void 0 && (ct[Ne] = gt[Ne]);
          }
          if (pt || Mt) {
            var kt = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
            pt && oa(ct, kt), Mt && $r(ct, kt);
          }
          return ne(C, pt, Mt, ft, Oe, Xn.current, ct);
        }
      }
      var Pe = Re.ReactCurrentOwner, yt = Re.ReactDebugCurrentFrame;
      function Lt(C) {
        if (C) {
          var q = C._owner, ae = nn(C.type, C._source, q ? q.type : null);
          yt.setExtraStackFrame(ae);
        } else
          yt.setExtraStackFrame(null);
      }
      var At;
      At = !1;
      function Ut(C) {
        return typeof C == "object" && C !== null && C.$$typeof === z;
      }
      function fn() {
        {
          if (Pe.current) {
            var C = st(Pe.current.type);
            if (C)
              return `

Check the render method of \`` + C + "`.";
          }
          return "";
        }
      }
      function Pt(C) {
        {
          if (C !== void 0) {
            var q = C.fileName.replace(/^.*[\\\/]/, ""), ae = C.lineNumber;
            return `

Check your code at ` + q + ":" + ae + ".";
          }
          return "";
        }
      }
      var Vn = {};
      function ii(C) {
        {
          var q = fn();
          if (!q) {
            var ae = typeof C == "string" ? C : C.displayName || C.name;
            ae && (q = `

Check the top-level render call using <` + ae + ">.");
          }
          return q;
        }
      }
      function Nr(C, q) {
        {
          if (!C._store || C._store.validated || C.key != null)
            return;
          C._store.validated = !0;
          var ae = ii(q);
          if (Vn[ae])
            return;
          Vn[ae] = !0;
          var Oe = "";
          C && C._owner && C._owner !== Pe.current && (Oe = " It was passed a child from " + st(C._owner.type) + "."), Lt(C), Ue('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, Oe), Lt(null);
        }
      }
      function Yr(C, q) {
        {
          if (typeof C != "object")
            return;
          if (Array.isArray(C))
            for (var ae = 0; ae < C.length; ae++) {
              var Oe = C[ae];
              Ut(Oe) && Nr(Oe, q);
            }
          else if (Ut(C))
            C._store && (C._store.validated = !0);
          else if (C) {
            var ft = ye(C);
            if (typeof ft == "function" && ft !== C.entries)
              for (var Ne = ft.call(C), ct; !(ct = Ne.next()).done; )
                Ut(ct.value) && Nr(ct.value, q);
          }
        }
      }
      function sa(C) {
        {
          var q = C.type;
          if (q == null || typeof q == "string")
            return;
          var ae;
          if (typeof q == "function")
            ae = q.propTypes;
          else if (typeof q == "object" && (q.$$typeof === Z || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          q.$$typeof === xe))
            ae = q.propTypes;
          else
            return;
          if (ae) {
            var Oe = st(q);
            La(ae, C.props, "prop", Oe, C);
          } else if (q.PropTypes !== void 0 && !At) {
            At = !0;
            var ft = st(q);
            Ue("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ft || "Unknown");
          }
          typeof q.getDefaultProps == "function" && !q.getDefaultProps.isReactClassApproved && Ue("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Cr(C) {
        {
          for (var q = Object.keys(C.props), ae = 0; ae < q.length; ae++) {
            var Oe = q[ae];
            if (Oe !== "children" && Oe !== "key") {
              Lt(C), Ue("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Oe), Lt(null);
              break;
            }
          }
          C.ref !== null && (Lt(C), Ue("Invalid attribute `ref` supplied to `React.Fragment`."), Lt(null));
        }
      }
      function Bn(C, q, ae, Oe, ft, Ne) {
        {
          var ct = ut(C);
          if (!ct) {
            var pt = "";
            (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (pt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var Mt = Pt(ft);
            Mt ? pt += Mt : pt += fn();
            var gt;
            C === null ? gt = "null" : Array.isArray(C) ? gt = "array" : C !== void 0 && C.$$typeof === z ? (gt = "<" + (st(C.type) || "Unknown") + " />", pt = " Did you accidentally export a JSX literal instead of a component?") : gt = typeof C, Ue("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", gt, pt);
          }
          var kt = me(C, q, ae, ft, Ne);
          if (kt == null)
            return kt;
          if (ct) {
            var Kn = q.children;
            if (Kn !== void 0)
              if (Oe)
                if (Array.isArray(Kn)) {
                  for (var Wn = 0; Wn < Kn.length; Wn++)
                    Yr(Kn[Wn], C);
                  Object.freeze && Object.freeze(Kn);
                } else
                  Ue("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Yr(Kn, C);
          }
          return C === _.Fragment ? Cr(kt) : sa(kt), kt;
        }
      }
      function In(C, q, ae) {
        return Bn(C, q, ae, !0);
      }
      function qr(C, q, ae) {
        return Bn(C, q, ae, !1);
      }
      var Jt = qr, za = In;
      _.jsx = Jt, _.jsxs = za;
    }();
  }(rg)), rg;
}
process.env.NODE_ENV === "production" ? ug.exports = KT() : ug.exports = ZT();
var id = ug.exports, sg = { exports: {} }, la = {}, Yv = { exports: {} }, ag = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $E;
function JT() {
  return $E || ($E = 1, function(_) {
    var I, fe, z, nt;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Xe = performance;
      _.unstable_now = function() {
        return Xe.now();
      };
    } else {
      var E = Date, Ke = E.now();
      _.unstable_now = function() {
        return E.now() - Ke;
      };
    }
    if (typeof window > "u" || typeof MessageChannel != "function") {
      var le = null, Z = null, je = function() {
        if (le !== null)
          try {
            var V = _.unstable_now();
            le(!0, V), le = null;
          } catch (K) {
            throw setTimeout(je, 0), K;
          }
      };
      I = function(V) {
        le !== null ? setTimeout(I, 0, V) : (le = V, setTimeout(je, 0));
      }, fe = function(V, K) {
        Z = setTimeout(V, K);
      }, z = function() {
        clearTimeout(Z);
      }, _.unstable_shouldYield = function() {
        return !1;
      }, nt = _.unstable_forceFrameRate = function() {
      };
    } else {
      var ce = window.setTimeout, xe = window.clearTimeout;
      if (typeof console < "u") {
        var he = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof he != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var We = !1, Zt = null, De = -1, ht = 5, He = 0;
      _.unstable_shouldYield = function() {
        return _.unstable_now() >= He;
      }, nt = function() {
      }, _.unstable_forceFrameRate = function(V) {
        0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ht = 0 < V ? Math.floor(1e3 / V) : 5;
      };
      var J = new MessageChannel(), we = J.port2;
      J.port1.onmessage = function() {
        if (Zt !== null) {
          var V = _.unstable_now();
          He = V + ht;
          try {
            Zt(!0, V) ? we.postMessage(null) : (We = !1, Zt = null);
          } catch (K) {
            throw we.postMessage(null), K;
          }
        } else
          We = !1;
      }, I = function(V) {
        Zt = V, We || (We = !0, we.postMessage(null));
      }, fe = function(V, K) {
        De = ce(function() {
          V(_.unstable_now());
        }, K);
      }, z = function() {
        xe(De), De = -1;
      };
    }
    function ee(V, K) {
      var X = V.length;
      V.push(K);
      e:
        for (; ; ) {
          var be = X - 1 >>> 1, _e = V[be];
          if (_e !== void 0 && 0 < Ue(_e, K))
            V[be] = K, V[X] = _e, X = be;
          else
            break e;
        }
    }
    function ye(V) {
      return V = V[0], V === void 0 ? null : V;
    }
    function Re(V) {
      var K = V[0];
      if (K !== void 0) {
        var X = V.pop();
        if (X !== K) {
          V[0] = X;
          e:
            for (var be = 0, _e = V.length; be < _e; ) {
              var it = 2 * (be + 1) - 1, qt = V[it], Et = it + 1, mt = V[Et];
              if (qt !== void 0 && 0 > Ue(qt, X))
                mt !== void 0 && 0 > Ue(mt, qt) ? (V[be] = mt, V[Et] = X, be = Et) : (V[be] = qt, V[it] = X, be = it);
              else if (mt !== void 0 && 0 > Ue(mt, X))
                V[be] = mt, V[Et] = X, be = Et;
              else
                break e;
            }
        }
        return K;
      }
      return null;
    }
    function Ue(V, K) {
      var X = V.sortIndex - K.sortIndex;
      return X !== 0 ? X : V.id - K.id;
    }
    var $e = [], St = [], ut = 1, ot = null, Ce = 3, st = !1, Ze = !1, Rt = !1;
    function M(V) {
      for (var K = ye(St); K !== null; ) {
        if (K.callback === null)
          Re(St);
        else if (K.startTime <= V)
          Re(St), K.sortIndex = K.expirationTime, ee($e, K);
        else
          break;
        K = ye(St);
      }
    }
    function $(V) {
      if (Rt = !1, M(V), !Ze)
        if (ye($e) !== null)
          Ze = !0, I(ge);
        else {
          var K = ye(St);
          K !== null && fe($, K.startTime - V);
        }
    }
    function ge(V, K) {
      Ze = !1, Rt && (Rt = !1, z()), st = !0;
      var X = Ce;
      try {
        for (M(K), ot = ye($e); ot !== null && (!(ot.expirationTime > K) || V && !_.unstable_shouldYield()); ) {
          var be = ot.callback;
          if (typeof be == "function") {
            ot.callback = null, Ce = ot.priorityLevel;
            var _e = be(ot.expirationTime <= K);
            K = _.unstable_now(), typeof _e == "function" ? ot.callback = _e : ot === ye($e) && Re($e), M(K);
          } else
            Re($e);
          ot = ye($e);
        }
        if (ot !== null)
          var it = !0;
        else {
          var qt = ye(St);
          qt !== null && fe($, qt.startTime - K), it = !1;
        }
        return it;
      } finally {
        ot = null, Ce = X, st = !1;
      }
    }
    var at = nt;
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, _.unstable_continueExecution = function() {
      Ze || st || (Ze = !0, I(ge));
    }, _.unstable_getCurrentPriorityLevel = function() {
      return Ce;
    }, _.unstable_getFirstCallbackNode = function() {
      return ye($e);
    }, _.unstable_next = function(V) {
      switch (Ce) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = Ce;
      }
      var X = Ce;
      Ce = K;
      try {
        return V();
      } finally {
        Ce = X;
      }
    }, _.unstable_pauseExecution = function() {
    }, _.unstable_requestPaint = at, _.unstable_runWithPriority = function(V, K) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var X = Ce;
      Ce = V;
      try {
        return K();
      } finally {
        Ce = X;
      }
    }, _.unstable_scheduleCallback = function(V, K, X) {
      var be = _.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? be + X : be) : X = be, V) {
        case 1:
          var _e = -1;
          break;
        case 2:
          _e = 250;
          break;
        case 5:
          _e = 1073741823;
          break;
        case 4:
          _e = 1e4;
          break;
        default:
          _e = 5e3;
      }
      return _e = X + _e, V = { id: ut++, callback: K, priorityLevel: V, startTime: X, expirationTime: _e, sortIndex: -1 }, X > be ? (V.sortIndex = X, ee(St, V), ye($e) === null && V === ye(St) && (Rt ? z() : Rt = !0, fe($, X - be))) : (V.sortIndex = _e, ee($e, V), Ze || st || (Ze = !0, I(ge))), V;
    }, _.unstable_wrapCallback = function(V) {
      var K = Ce;
      return function() {
        var X = Ce;
        Ce = K;
        try {
          return V.apply(this, arguments);
        } finally {
          Ce = X;
        }
      };
    };
  }(ag)), ag;
}
var ig = {};
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var YE;
function ew() {
  return YE || (YE = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      var I = !1, fe = !1, z, nt, Xe, E, Ke = typeof performance == "object" && typeof performance.now == "function";
      if (Ke) {
        var le = performance;
        _.unstable_now = function() {
          return le.now();
        };
      } else {
        var Z = Date, je = Z.now();
        _.unstable_now = function() {
          return Z.now() - je;
        };
      }
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window > "u" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var ce = null, xe = null, he = function() {
          if (ce !== null)
            try {
              var ne = _.unstable_now(), me = !0;
              ce(me, ne), ce = null;
            } catch (Pe) {
              throw setTimeout(he, 0), Pe;
            }
        };
        z = function(ne) {
          ce !== null ? setTimeout(z, 0, ne) : (ce = ne, setTimeout(he, 0));
        }, nt = function(ne, me) {
          xe = setTimeout(ne, me);
        }, Xe = function() {
          clearTimeout(xe);
        }, _.unstable_shouldYield = function() {
          return !1;
        }, E = _.unstable_forceFrameRate = function() {
        };
      } else {
        var We = window.setTimeout, Zt = window.clearTimeout;
        if (typeof console < "u") {
          var De = window.requestAnimationFrame, ht = window.cancelAnimationFrame;
          typeof De != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof ht != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var He = !1, J = null, we = -1, ee = 5, ye = 0;
        _.unstable_shouldYield = function() {
          return _.unstable_now() >= ye;
        }, E = function() {
        }, _.unstable_forceFrameRate = function(ne) {
          if (ne < 0 || ne > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }
          ne > 0 ? ee = Math.floor(1e3 / ne) : ee = 5;
        };
        var Re = function() {
          if (J !== null) {
            var ne = _.unstable_now();
            ye = ne + ee;
            var me = !0;
            try {
              var Pe = J(me, ne);
              Pe ? $e.postMessage(null) : (He = !1, J = null);
            } catch (yt) {
              throw $e.postMessage(null), yt;
            }
          } else
            He = !1;
        }, Ue = new MessageChannel(), $e = Ue.port2;
        Ue.port1.onmessage = Re, z = function(ne) {
          J = ne, He || (He = !0, $e.postMessage(null));
        }, nt = function(ne, me) {
          we = We(function() {
            ne(_.unstable_now());
          }, me);
        }, Xe = function() {
          Zt(we), we = -1;
        };
      }
      function St(ne, me) {
        var Pe = ne.length;
        ne.push(me), Ce(ne, me, Pe);
      }
      function ut(ne) {
        var me = ne[0];
        return me === void 0 ? null : me;
      }
      function ot(ne) {
        var me = ne[0];
        if (me !== void 0) {
          var Pe = ne.pop();
          return Pe !== me && (ne[0] = Pe, st(ne, Pe, 0)), me;
        } else
          return null;
      }
      function Ce(ne, me, Pe) {
        for (var yt = Pe; ; ) {
          var Lt = yt - 1 >>> 1, At = ne[Lt];
          if (At !== void 0 && Ze(At, me) > 0)
            ne[Lt] = me, ne[yt] = At, yt = Lt;
          else
            return;
        }
      }
      function st(ne, me, Pe) {
        for (var yt = Pe, Lt = ne.length; yt < Lt; ) {
          var At = (yt + 1) * 2 - 1, Ut = ne[At], fn = At + 1, Pt = ne[fn];
          if (Ut !== void 0 && Ze(Ut, me) < 0)
            Pt !== void 0 && Ze(Pt, Ut) < 0 ? (ne[yt] = Pt, ne[fn] = me, yt = fn) : (ne[yt] = Ut, ne[At] = me, yt = At);
          else if (Pt !== void 0 && Ze(Pt, me) < 0)
            ne[yt] = Pt, ne[fn] = me, yt = fn;
          else
            return;
        }
      }
      function Ze(ne, me) {
        var Pe = ne.sortIndex - me.sortIndex;
        return Pe !== 0 ? Pe : ne.id - me.id;
      }
      var Rt = 1, M = 2, $ = 3, ge = 4, at = 5;
      function V(ne, me) {
      }
      var K = 1073741823, X = -1, be = 250, _e = 5e3, it = 1e4, qt = K, Et = [], mt = [], sn = 1, Nt = null, bt = $, sr = !1, Hn = !1, nn = !1;
      function Sr(ne) {
        for (var me = ut(mt); me !== null; ) {
          if (me.callback === null)
            ot(mt);
          else if (me.startTime <= ne)
            ot(mt), me.sortIndex = me.expirationTime, St(Et, me);
          else
            return;
          me = ut(mt);
        }
      }
      function Er(ne) {
        if (nn = !1, Sr(ne), !Hn)
          if (ut(Et) !== null)
            Hn = !0, z(Gn);
          else {
            var me = ut(mt);
            me !== null && nt(Er, me.startTime - ne);
          }
      }
      function Gn(ne, me) {
        Hn = !1, nn && (nn = !1, Xe()), sr = !0;
        var Pe = bt;
        try {
          var yt;
          if (!fe)
            return La(ne, me);
        } finally {
          Nt = null, bt = Pe, sr = !1;
        }
      }
      function La(ne, me) {
        var Pe = me;
        for (Sr(Pe), Nt = ut(Et); Nt !== null && !I && !(Nt.expirationTime > Pe && (!ne || _.unstable_shouldYield())); ) {
          var yt = Nt.callback;
          if (typeof yt == "function") {
            Nt.callback = null, bt = Nt.priorityLevel;
            var Lt = Nt.expirationTime <= Pe, At = yt(Lt);
            Pe = _.unstable_now(), typeof At == "function" ? Nt.callback = At : Nt === ut(Et) && ot(Et), Sr(Pe);
          } else
            ot(Et);
          Nt = ut(Et);
        }
        if (Nt !== null)
          return !0;
        var Ut = ut(mt);
        return Ut !== null && nt(Er, Ut.startTime - Pe), !1;
      }
      function Xn(ne, me) {
        switch (ne) {
          case Rt:
          case M:
          case $:
          case ge:
          case at:
            break;
          default:
            ne = $;
        }
        var Pe = bt;
        bt = ne;
        try {
          return me();
        } finally {
          bt = Pe;
        }
      }
      function Or(ne) {
        var me;
        switch (bt) {
          case Rt:
          case M:
          case $:
            me = $;
            break;
          default:
            me = bt;
            break;
        }
        var Pe = bt;
        bt = me;
        try {
          return ne();
        } finally {
          bt = Pe;
        }
      }
      function Aa(ne) {
        var me = bt;
        return function() {
          var Pe = bt;
          bt = me;
          try {
            return ne.apply(this, arguments);
          } finally {
            bt = Pe;
          }
        };
      }
      function Mr(ne, me, Pe) {
        var yt = _.unstable_now(), Lt;
        if (typeof Pe == "object" && Pe !== null) {
          var At = Pe.delay;
          typeof At == "number" && At > 0 ? Lt = yt + At : Lt = yt;
        } else
          Lt = yt;
        var Ut;
        switch (ne) {
          case Rt:
            Ut = X;
            break;
          case M:
            Ut = be;
            break;
          case at:
            Ut = qt;
            break;
          case ge:
            Ut = it;
            break;
          case $:
          default:
            Ut = _e;
            break;
        }
        var fn = Lt + Ut, Pt = {
          id: sn++,
          callback: me,
          priorityLevel: ne,
          startTime: Lt,
          expirationTime: fn,
          sortIndex: -1
        };
        return Lt > yt ? (Pt.sortIndex = Lt, St(mt, Pt), ut(Et) === null && Pt === ut(mt) && (nn ? Xe() : nn = !0, nt(Er, Lt - yt))) : (Pt.sortIndex = fn, St(Et, Pt), !Hn && !sr && (Hn = !0, z(Gn))), Pt;
      }
      function On() {
      }
      function fr() {
        !Hn && !sr && (Hn = !0, z(Gn));
      }
      function Ht() {
        return ut(Et);
      }
      function Wt(ne) {
        ne.callback = null;
      }
      function Ua() {
        return bt;
      }
      var oa = E, $r = null;
      _.unstable_IdlePriority = at, _.unstable_ImmediatePriority = Rt, _.unstable_LowPriority = ge, _.unstable_NormalPriority = $, _.unstable_Profiling = $r, _.unstable_UserBlockingPriority = M, _.unstable_cancelCallback = Wt, _.unstable_continueExecution = fr, _.unstable_getCurrentPriorityLevel = Ua, _.unstable_getFirstCallbackNode = Ht, _.unstable_next = Or, _.unstable_pauseExecution = On, _.unstable_requestPaint = oa, _.unstable_runWithPriority = Xn, _.unstable_scheduleCallback = Mr, _.unstable_wrapCallback = Aa;
    }();
  }(ig)), ig;
}
var qE;
function JE() {
  return qE || (qE = 1, process.env.NODE_ENV === "production" ? Yv.exports = JT() : Yv.exports = ew()), Yv.exports;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var QE;
function tw() {
  if (QE)
    return la;
  QE = 1;
  var _ = of, I = uf(), fe = JE();
  function z(n) {
    for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      a += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!_)
    throw Error(z(227));
  var nt = /* @__PURE__ */ new Set(), Xe = {};
  function E(n, a) {
    Ke(n, a), Ke(n + "Capture", a);
  }
  function Ke(n, a) {
    for (Xe[n] = a, n = 0; n < a.length; n++)
      nt.add(a[n]);
  }
  var le = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, je = Object.prototype.hasOwnProperty, ce = {}, xe = {};
  function he(n) {
    return je.call(xe, n) ? !0 : je.call(ce, n) ? !1 : Z.test(n) ? xe[n] = !0 : (ce[n] = !0, !1);
  }
  function We(n, a, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Zt(n, a, l, o) {
    if (a === null || typeof a > "u" || We(n, a, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !a;
        case 4:
          return a === !1;
        case 5:
          return isNaN(a);
        case 6:
          return isNaN(a) || 1 > a;
      }
    return !1;
  }
  function De(n, a, l, o, f, p, m) {
    this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = o, this.attributeNamespace = f, this.mustUseProperty = l, this.propertyName = n, this.type = a, this.sanitizeURL = p, this.removeEmptyString = m;
  }
  var ht = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ht[n] = new De(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0];
    ht[a] = new De(a, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ht[n] = new De(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ht[n] = new De(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ht[n] = new De(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ht[n] = new De(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ht[n] = new De(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ht[n] = new De(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ht[n] = new De(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var He = /[\-:]([a-z])/g;
  function J(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var a = n.replace(
      He,
      J
    );
    ht[a] = new De(a, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var a = n.replace(He, J);
    ht[a] = new De(a, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var a = n.replace(He, J);
    ht[a] = new De(a, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ht[n] = new De(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ht.xlinkHref = new De("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ht[n] = new De(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function we(n, a, l, o) {
    var f = ht.hasOwnProperty(a) ? ht[a] : null, p = f !== null ? f.type === 0 : o ? !1 : !(!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N");
    p || (Zt(a, l, f, o) && (l = null), o || f === null ? he(a) && (l === null ? n.removeAttribute(a) : n.setAttribute(a, "" + l)) : f.mustUseProperty ? n[f.propertyName] = l === null ? f.type === 3 ? !1 : "" : l : (a = f.attributeName, o = f.attributeNamespace, l === null ? n.removeAttribute(a) : (f = f.type, l = f === 3 || f === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, a, l) : n.setAttribute(a, l))));
  }
  var ee = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ye = 60103, Re = 60106, Ue = 60107, $e = 60108, St = 60114, ut = 60109, ot = 60110, Ce = 60112, st = 60113, Ze = 60120, Rt = 60115, M = 60116, $ = 60121, ge = 60128, at = 60129, V = 60130, K = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var X = Symbol.for;
    ye = X("react.element"), Re = X("react.portal"), Ue = X("react.fragment"), $e = X("react.strict_mode"), St = X("react.profiler"), ut = X("react.provider"), ot = X("react.context"), Ce = X("react.forward_ref"), st = X("react.suspense"), Ze = X("react.suspense_list"), Rt = X("react.memo"), M = X("react.lazy"), $ = X("react.block"), X("react.scope"), ge = X("react.opaque.id"), at = X("react.debug_trace_mode"), V = X("react.offscreen"), K = X("react.legacy_hidden");
  }
  var be = typeof Symbol == "function" && Symbol.iterator;
  function _e(n) {
    return n === null || typeof n != "object" ? null : (n = be && n[be] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var it;
  function qt(n) {
    if (it === void 0)
      try {
        throw Error();
      } catch (l) {
        var a = l.stack.trim().match(/\n( *(at )?)/);
        it = a && a[1] || "";
      }
    return `
` + it + n;
  }
  var Et = !1;
  function mt(n, a) {
    if (!n || Et)
      return "";
    Et = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (a)
        if (a = function() {
          throw Error();
        }, Object.defineProperty(a.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (R) {
            var o = R;
          }
          Reflect.construct(n, [], a);
        } else {
          try {
            a.call();
          } catch (R) {
            o = R;
          }
          n.call(a.prototype);
        }
      else {
        try {
          throw Error();
        } catch (R) {
          o = R;
        }
        n();
      }
    } catch (R) {
      if (R && o && typeof R.stack == "string") {
        for (var f = R.stack.split(`
`), p = o.stack.split(`
`), m = f.length - 1, y = p.length - 1; 1 <= m && 0 <= y && f[m] !== p[y]; )
          y--;
        for (; 1 <= m && 0 <= y; m--, y--)
          if (f[m] !== p[y]) {
            if (m !== 1 || y !== 1)
              do
                if (m--, y--, 0 > y || f[m] !== p[y])
                  return `
` + f[m].replace(" at new ", " at ");
              while (1 <= m && 0 <= y);
            break;
          }
      }
    } finally {
      Et = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? qt(n) : "";
  }
  function sn(n) {
    switch (n.tag) {
      case 5:
        return qt(n.type);
      case 16:
        return qt("Lazy");
      case 13:
        return qt("Suspense");
      case 19:
        return qt("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = mt(n.type, !1), n;
      case 11:
        return n = mt(n.type.render, !1), n;
      case 22:
        return n = mt(n.type._render, !1), n;
      case 1:
        return n = mt(n.type, !0), n;
      default:
        return "";
    }
  }
  function Nt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ue:
        return "Fragment";
      case Re:
        return "Portal";
      case St:
        return "Profiler";
      case $e:
        return "StrictMode";
      case st:
        return "Suspense";
      case Ze:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ot:
          return (n.displayName || "Context") + ".Consumer";
        case ut:
          return (n._context.displayName || "Context") + ".Provider";
        case Ce:
          var a = n.render;
          return a = a.displayName || a.name || "", n.displayName || (a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef");
        case Rt:
          return Nt(n.type);
        case $:
          return Nt(n._render);
        case M:
          a = n._payload, n = n._init;
          try {
            return Nt(n(a));
          } catch {
          }
      }
    return null;
  }
  function bt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  function sr(n) {
    var a = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function Hn(n) {
    var a = sr(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, a), o = "" + n[a];
    if (!n.hasOwnProperty(a) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var f = l.get, p = l.set;
      return Object.defineProperty(n, a, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(m) {
        o = "" + m, p.call(this, m);
      } }), Object.defineProperty(n, a, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[a];
      } };
    }
  }
  function nn(n) {
    n._valueTracker || (n._valueTracker = Hn(n));
  }
  function Sr(n) {
    if (!n)
      return !1;
    var a = n._valueTracker;
    if (!a)
      return !0;
    var l = a.getValue(), o = "";
    return n && (o = sr(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (a.setValue(n), !0) : !1;
  }
  function Er(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Gn(n, a) {
    var l = a.checked;
    return I({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function La(n, a) {
    var l = a.defaultValue == null ? "" : a.defaultValue, o = a.checked != null ? a.checked : a.defaultChecked;
    l = bt(a.value != null ? a.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null };
  }
  function Xn(n, a) {
    a = a.checked, a != null && we(n, "checked", a, !1);
  }
  function Or(n, a) {
    Xn(n, a);
    var l = bt(a.value), o = a.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    a.hasOwnProperty("value") ? Mr(n, a.type, l) : a.hasOwnProperty("defaultValue") && Mr(n, a.type, bt(a.defaultValue)), a.checked == null && a.defaultChecked != null && (n.defaultChecked = !!a.defaultChecked);
  }
  function Aa(n, a, l) {
    if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
      var o = a.type;
      if (!(o !== "submit" && o !== "reset" || a.value !== void 0 && a.value !== null))
        return;
      a = "" + n._wrapperState.initialValue, l || a === n.value || (n.value = a), n.defaultValue = a;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Mr(n, a, l) {
    (a !== "number" || Er(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  function On(n) {
    var a = "";
    return _.Children.forEach(n, function(l) {
      l != null && (a += l);
    }), a;
  }
  function fr(n, a) {
    return n = I({ children: void 0 }, a), (a = On(a.children)) && (n.children = a), n;
  }
  function Ht(n, a, l, o) {
    if (n = n.options, a) {
      a = {};
      for (var f = 0; f < l.length; f++)
        a["$" + l[f]] = !0;
      for (l = 0; l < n.length; l++)
        f = a.hasOwnProperty("$" + n[l].value), n[l].selected !== f && (n[l].selected = f), f && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + bt(l), a = null, f = 0; f < n.length; f++) {
        if (n[f].value === l) {
          n[f].selected = !0, o && (n[f].defaultSelected = !0);
          return;
        }
        a !== null || n[f].disabled || (a = n[f]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Wt(n, a) {
    if (a.dangerouslySetInnerHTML != null)
      throw Error(z(91));
    return I({}, a, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Ua(n, a) {
    var l = a.value;
    if (l == null) {
      if (l = a.children, a = a.defaultValue, l != null) {
        if (a != null)
          throw Error(z(92));
        if (Array.isArray(l)) {
          if (!(1 >= l.length))
            throw Error(z(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), l = a;
    }
    n._wrapperState = { initialValue: bt(l) };
  }
  function oa(n, a) {
    var l = bt(a.value), o = bt(a.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), a.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function $r(n) {
    var a = n.textContent;
    a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
  }
  var ne = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function me(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Pe(n, a) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? me(a) : n === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var yt, Lt = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(a, l, o, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(a, l, o, f);
      });
    } : n;
  }(function(n, a) {
    if (n.namespaceURI !== ne.svg || "innerHTML" in n)
      n.innerHTML = a;
    else {
      for (yt = yt || document.createElement("div"), yt.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = yt.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; a.firstChild; )
        n.appendChild(a.firstChild);
    }
  });
  function At(n, a) {
    if (a) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = a;
        return;
      }
    }
    n.textContent = a;
  }
  var Ut = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, fn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ut).forEach(function(n) {
    fn.forEach(function(a) {
      a = a + n.charAt(0).toUpperCase() + n.substring(1), Ut[a] = Ut[n];
    });
  });
  function Pt(n, a, l) {
    return a == null || typeof a == "boolean" || a === "" ? "" : l || typeof a != "number" || a === 0 || Ut.hasOwnProperty(n) && Ut[n] ? ("" + a).trim() : a + "px";
  }
  function Vn(n, a) {
    n = n.style;
    for (var l in a)
      if (a.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, f = Pt(l, a[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, f) : n[l] = f;
      }
  }
  var ii = I({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Nr(n, a) {
    if (a) {
      if (ii[n] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(z(137, n));
      if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
          throw Error(z(60));
        if (!(typeof a.dangerouslySetInnerHTML == "object" && "__html" in a.dangerouslySetInnerHTML))
          throw Error(z(61));
      }
      if (a.style != null && typeof a.style != "object")
        throw Error(z(62));
    }
  }
  function Yr(n, a) {
    if (n.indexOf("-") === -1)
      return typeof a.is == "string";
    switch (n) {
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
  function sa(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Cr = null, Bn = null, In = null;
  function qr(n) {
    if (n = wr(n)) {
      if (typeof Cr != "function")
        throw Error(z(280));
      var a = n.stateNode;
      a && (a = Ba(a), Cr(n.stateNode, n.type, a));
    }
  }
  function Jt(n) {
    Bn ? In ? In.push(n) : In = [n] : Bn = n;
  }
  function za() {
    if (Bn) {
      var n = Bn, a = In;
      if (In = Bn = null, qr(n), a)
        for (n = 0; n < a.length; n++)
          qr(a[n]);
    }
  }
  function C(n, a) {
    return n(a);
  }
  function q(n, a, l, o, f) {
    return n(a, l, o, f);
  }
  function ae() {
  }
  var Oe = C, ft = !1, Ne = !1;
  function ct() {
    (Bn !== null || In !== null) && (ae(), za());
  }
  function pt(n, a, l) {
    if (Ne)
      return n(a, l);
    Ne = !0;
    try {
      return Oe(n, a, l);
    } finally {
      Ne = !1, ct();
    }
  }
  function Mt(n, a) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Ba(l);
    if (o === null)
      return null;
    l = o[a];
    e:
      switch (a) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(z(231, a, typeof l));
    return l;
  }
  var gt = !1;
  if (le)
    try {
      var kt = {};
      Object.defineProperty(kt, "passive", { get: function() {
        gt = !0;
      } }), window.addEventListener("test", kt, kt), window.removeEventListener("test", kt, kt);
    } catch {
      gt = !1;
    }
  function Kn(n, a, l, o, f, p, m, y, R) {
    var U = Array.prototype.slice.call(arguments, 3);
    try {
      a.apply(l, U);
    } catch (oe) {
      this.onError(oe);
    }
  }
  var Wn = !1, Qr = null, Sn = !1, Ki = null, wu = { onError: function(n) {
    Wn = !0, Qr = n;
  } };
  function _u(n, a, l, o, f, p, m, y, R) {
    Wn = !1, Qr = null, Kn.apply(wu, arguments);
  }
  function Lr(n, a, l, o, f, p, m, y, R) {
    if (_u.apply(this, arguments), Wn) {
      if (Wn) {
        var U = Qr;
        Wn = !1, Qr = null;
      } else
        throw Error(z(198));
      Sn || (Sn = !0, Ki = U);
    }
  }
  function En(n) {
    var a = n, l = n;
    if (n.alternate)
      for (; a.return; )
        a = a.return;
    else {
      n = a;
      do
        a = n, a.flags & 1026 && (l = a.return), n = a.return;
      while (n);
    }
    return a.tag === 3 ? l : null;
  }
  function li(n) {
    if (n.tag === 13) {
      var a = n.memoizedState;
      if (a === null && (n = n.alternate, n !== null && (a = n.memoizedState)), a !== null)
        return a.dehydrated;
    }
    return null;
  }
  function ui(n) {
    if (En(n) !== n)
      throw Error(z(188));
  }
  function Rr(n) {
    var a = n.alternate;
    if (!a) {
      if (a = En(n), a === null)
        throw Error(z(188));
      return a !== n ? null : n;
    }
    for (var l = n, o = a; ; ) {
      var f = l.return;
      if (f === null)
        break;
      var p = f.alternate;
      if (p === null) {
        if (o = f.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === l)
            return ui(f), n;
          if (p === o)
            return ui(f), a;
          p = p.sibling;
        }
        throw Error(z(188));
      }
      if (l.return !== o.return)
        l = f, o = p;
      else {
        for (var m = !1, y = f.child; y; ) {
          if (y === l) {
            m = !0, l = f, o = p;
            break;
          }
          if (y === o) {
            m = !0, o = f, l = p;
            break;
          }
          y = y.sibling;
        }
        if (!m) {
          for (y = p.child; y; ) {
            if (y === l) {
              m = !0, l = p, o = f;
              break;
            }
            if (y === o) {
              m = !0, o = p, l = f;
              break;
            }
            y = y.sibling;
          }
          if (!m)
            throw Error(z(189));
        }
      }
      if (l.alternate !== o)
        throw Error(z(190));
    }
    if (l.tag !== 3)
      throw Error(z(188));
    return l.stateNode.current === l ? n : a;
  }
  function oi(n) {
    if (n = Rr(n), !n)
      return null;
    for (var a = n; ; ) {
      if (a.tag === 5 || a.tag === 6)
        return a;
      if (a.child)
        a.child.return = a, a = a.child;
      else {
        if (a === n)
          break;
        for (; !a.sibling; ) {
          if (!a.return || a.return === n)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return null;
  }
  function fa(n, a) {
    for (var l = n.alternate; a !== null; ) {
      if (a === n || a === l)
        return !0;
      a = a.return;
    }
    return !1;
  }
  var Vo, si, xu, fi, ci = !1, Zn = [], Gr = null, cr = null, ca = null, br = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), ja = [], Mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function da(n, a, l, o, f) {
    return { blockedOn: n, domEventName: a, eventSystemFlags: l | 16, nativeEvent: f, targetContainers: [o] };
  }
  function Pa(n, a) {
    switch (n) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        cr = null;
        break;
      case "mouseover":
      case "mouseout":
        ca = null;
        break;
      case "pointerover":
      case "pointerout":
        br.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        re.delete(a.pointerId);
    }
  }
  function Zi(n, a, l, o, f, p) {
    return n === null || n.nativeEvent !== p ? (n = da(a, l, o, f, p), a !== null && (a = wr(a), a !== null && si(a)), n) : (n.eventSystemFlags |= o, a = n.targetContainers, f !== null && a.indexOf(f) === -1 && a.push(f), n);
  }
  function Nn(n, a, l, o, f) {
    switch (a) {
      case "focusin":
        return Gr = Zi(Gr, n, a, l, o, f), !0;
      case "dragenter":
        return cr = Zi(cr, n, a, l, o, f), !0;
      case "mouseover":
        return ca = Zi(ca, n, a, l, o, f), !0;
      case "pointerover":
        var p = f.pointerId;
        return br.set(p, Zi(br.get(p) || null, n, a, l, o, f)), !0;
      case "gotpointercapture":
        return p = f.pointerId, re.set(p, Zi(re.get(p) || null, n, a, l, o, f)), !0;
    }
    return !1;
  }
  function on(n) {
    var a = il(n.target);
    if (a !== null) {
      var l = En(a);
      if (l !== null) {
        if (a = l.tag, a === 13) {
          if (a = li(l), a !== null) {
            n.blockedOn = a, fi(n.lanePriority, function() {
              fe.unstable_runWithPriority(n.priority, function() {
                xu(l);
              });
            });
            return;
          }
        } else if (a === 3 && l.stateNode.hydrate) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function $n(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var a = n.targetContainers; 0 < a.length; ) {
      var l = Yo(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
      if (l !== null)
        return a = wr(l), a !== null && si(a), n.blockedOn = l, !1;
      a.shift();
    }
    return !0;
  }
  function Bo(n, a, l) {
    $n(n) && l.delete(a);
  }
  function Jn() {
    for (ci = !1; 0 < Zn.length; ) {
      var n = Zn[0];
      if (n.blockedOn !== null) {
        n = wr(n.blockedOn), n !== null && Vo(n);
        break;
      }
      for (var a = n.targetContainers; 0 < a.length; ) {
        var l = Yo(n.domEventName, n.eventSystemFlags, a[0], n.nativeEvent);
        if (l !== null) {
          n.blockedOn = l;
          break;
        }
        a.shift();
      }
      n.blockedOn === null && Zn.shift();
    }
    Gr !== null && $n(Gr) && (Gr = null), cr !== null && $n(cr) && (cr = null), ca !== null && $n(ca) && (ca = null), br.forEach(Bo), re.forEach(Bo);
  }
  function er(n, a) {
    n.blockedOn === a && (n.blockedOn = null, ci || (ci = !0, fe.unstable_scheduleCallback(fe.unstable_NormalPriority, Jn)));
  }
  function Io(n) {
    function a(f) {
      return er(f, n);
    }
    if (0 < Zn.length) {
      er(Zn[0], n);
      for (var l = 1; l < Zn.length; l++) {
        var o = Zn[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Gr !== null && er(Gr, n), cr !== null && er(cr, n), ca !== null && er(ca, n), br.forEach(a), re.forEach(a), l = 0; l < ja.length; l++)
      o = ja[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < ja.length && (l = ja[0], l.blockedOn === null); )
      on(l), l.blockedOn === null && ja.shift();
  }
  function di(n, a) {
    var l = {};
    return l[n.toLowerCase()] = a.toLowerCase(), l["Webkit" + n] = "webkit" + a, l["Moz" + n] = "moz" + a, l;
  }
  var pa = { animationend: di("Animation", "AnimationEnd"), animationiteration: di("Animation", "AnimationIteration"), animationstart: di("Animation", "AnimationStart"), transitionend: di("Transition", "TransitionEnd") }, Nl = {}, Wo = {};
  le && (Wo = document.createElement("div").style, "AnimationEvent" in window || (delete pa.animationend.animation, delete pa.animationiteration.animation, delete pa.animationstart.animation), "TransitionEvent" in window || delete pa.transitionend.transition);
  function Ll(n) {
    if (Nl[n])
      return Nl[n];
    if (!pa[n])
      return n;
    var a = pa[n], l;
    for (l in a)
      if (a.hasOwnProperty(l) && l in Wo)
        return Nl[n] = a[l];
    return n;
  }
  var $o = Ll("animationend"), h = Ll("animationiteration"), T = Ll("animationstart"), A = Ll("transitionend"), P = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Fe = [
    "abort",
    "abort",
    $o,
    "animationEnd",
    h,
    "animationIteration",
    T,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    A,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function Me(n, a) {
    for (var l = 0; l < n.length; l += 2) {
      var o = n[l], f = n[l + 1];
      f = "on" + (f[0].toUpperCase() + f.slice(1)), ie.set(o, a), P.set(o, f), E(f, [o]);
    }
  }
  var Le = fe.unstable_now;
  Le();
  var ke = 8;
  function Tt(n) {
    if (1 & n)
      return ke = 15, 1;
    if (2 & n)
      return ke = 14, 2;
    if (4 & n)
      return ke = 13, 4;
    var a = 24 & n;
    return a !== 0 ? (ke = 12, a) : n & 32 ? (ke = 11, 32) : (a = 192 & n, a !== 0 ? (ke = 10, a) : n & 256 ? (ke = 9, 256) : (a = 3584 & n, a !== 0 ? (ke = 8, a) : n & 4096 ? (ke = 7, 4096) : (a = 4186112 & n, a !== 0 ? (ke = 6, a) : (a = 62914560 & n, a !== 0 ? (ke = 5, a) : n & 67108864 ? (ke = 4, 67108864) : n & 134217728 ? (ke = 3, 134217728) : (a = 805306368 & n, a !== 0 ? (ke = 2, a) : 1073741824 & n ? (ke = 1, 1073741824) : (ke = 8, n))))));
  }
  function $t(n) {
    switch (n) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function en(n) {
    switch (n) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(z(358, n));
    }
  }
  function cn(n, a) {
    var l = n.pendingLanes;
    if (l === 0)
      return ke = 0;
    var o = 0, f = 0, p = n.expiredLanes, m = n.suspendedLanes, y = n.pingedLanes;
    if (p !== 0)
      o = p, f = ke = 15;
    else if (p = l & 134217727, p !== 0) {
      var R = p & ~m;
      R !== 0 ? (o = Tt(R), f = ke) : (y &= p, y !== 0 && (o = Tt(y), f = ke));
    } else
      p = l & ~m, p !== 0 ? (o = Tt(p), f = ke) : y !== 0 && (o = Tt(y), f = ke);
    if (o === 0)
      return 0;
    if (o = 31 - va(o), o = l & ((0 > o ? 0 : 1 << o) << 1) - 1, a !== 0 && a !== o && !(a & m)) {
      if (Tt(a), f <= ke)
        return a;
      ke = f;
    }
    if (a = n.entangledLanes, a !== 0)
      for (n = n.entanglements, a &= o; 0 < a; )
        l = 31 - va(a), f = 1 << l, o |= n[l], a &= ~f;
    return o;
  }
  function Ln(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function An(n, a) {
    switch (n) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return n = Tr(24 & ~a), n === 0 ? An(10, a) : n;
      case 10:
        return n = Tr(192 & ~a), n === 0 ? An(8, a) : n;
      case 8:
        return n = Tr(3584 & ~a), n === 0 && (n = Tr(4186112 & ~a), n === 0 && (n = 512)), n;
      case 2:
        return a = Tr(805306368 & ~a), a === 0 && (a = 268435456), a;
    }
    throw Error(z(358, n));
  }
  function Tr(n) {
    return n & -n;
  }
  function pi(n) {
    for (var a = [], l = 0; 31 > l; l++)
      a.push(n);
    return a;
  }
  function vi(n, a, l) {
    n.pendingLanes |= a;
    var o = a - 1;
    n.suspendedLanes &= o, n.pingedLanes &= o, n = n.eventTimes, a = 31 - va(a), n[a] = l;
  }
  var va = Math.clz32 ? Math.clz32 : Al, ku = Math.log, sf = Math.LN2;
  function Al(n) {
    return n === 0 ? 32 : 31 - (ku(n) / sf | 0) | 0;
  }
  var Du = fe.unstable_UserBlockingPriority, ld = fe.unstable_runWithPriority, Ou = !0;
  function Qv(n, a, l, o) {
    ft || ae();
    var f = Mu, p = ft;
    ft = !0;
    try {
      q(f, n, a, l, o);
    } finally {
      (ft = p) || ct();
    }
  }
  function Ul(n, a, l, o) {
    ld(Du, Mu.bind(null, n, a, l, o));
  }
  function Mu(n, a, l, o) {
    if (Ou) {
      var f;
      if ((f = (a & 4) === 0) && 0 < Zn.length && -1 < Mn.indexOf(n))
        n = da(null, n, a, l, o), Zn.push(n);
      else {
        var p = Yo(n, a, l, o);
        if (p === null)
          f && Pa(n, o);
        else {
          if (f) {
            if (-1 < Mn.indexOf(n)) {
              n = da(p, n, a, l, o), Zn.push(n);
              return;
            }
            if (Nn(p, n, a, l, o))
              return;
            Pa(n, o);
          }
          ts(n, a, o, null, l);
        }
      }
    }
  }
  function Yo(n, a, l, o) {
    var f = sa(o);
    if (f = il(f), f !== null) {
      var p = En(f);
      if (p === null)
        f = null;
      else {
        var m = p.tag;
        if (m === 13) {
          if (f = li(p), f !== null)
            return f;
          f = null;
        } else if (m === 3) {
          if (p.stateNode.hydrate)
            return p.tag === 3 ? p.stateNode.containerInfo : null;
          f = null;
        } else
          p !== f && (f = null);
      }
    }
    return ts(n, a, o, f, l), null;
  }
  var hi = null, ff = null, qo = null;
  function cf() {
    if (qo)
      return qo;
    var n, a = ff, l = a.length, o, f = "value" in hi ? hi.value : hi.textContent, p = f.length;
    for (n = 0; n < l && a[n] === f[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && a[l - o] === f[p - o]; o++)
      ;
    return qo = f.slice(n, 1 < o ? 1 - o : void 0);
  }
  function zl(n) {
    var a = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && a === 13 && (n = 13)) : n = a, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Nu() {
    return !0;
  }
  function df() {
    return !1;
  }
  function dr(n) {
    function a(l, o, f, p, m) {
      this._reactName = l, this._targetInst = f, this.type = o, this.nativeEvent = p, this.target = m, this.currentTarget = null;
      for (var y in n)
        n.hasOwnProperty(y) && (l = n[y], this[y] = l ? l(p) : p[y]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? Nu : df, this.isPropagationStopped = df, this;
    }
    return I(a.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Nu);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Nu);
    }, persist: function() {
    }, isPersistent: Nu }), a;
  }
  var jl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pl = dr(jl), Fl = I({}, jl, { view: 0, detail: 0 }), pf = dr(Fl), Qo, Lu, Ji, Go = I({}, Fl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ji && (Ji && n.type === "mousemove" ? (Qo = n.screenX - Ji.screenX, Lu = n.screenY - Ji.screenY) : Lu = Qo = 0, Ji = n), Qo);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Lu;
  } }), Au = dr(Go), ud = I({}, Go, { dataTransfer: 0 }), Ar = dr(ud), Fa = I({}, Fl, { relatedTarget: 0 }), tr = dr(Fa), mi = I({}, jl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), od = dr(mi), Xo = I({}, jl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Gv = dr(Xo), Uu = I({}, jl, { data: 0 }), sd = dr(Uu), Xv = {
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
  }, vf = {
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
  }, Kv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zv(n) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(n) : (n = Kv[n]) ? !!a[n] : !1;
  }
  function hf() {
    return Zv;
  }
  var fd = I({}, Fl, { key: function(n) {
    if (n.key) {
      var a = Xv[n.key] || n.key;
      if (a !== "Unidentified")
        return a;
    }
    return n.type === "keypress" ? (n = zl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? vf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hf, charCode: function(n) {
    return n.type === "keypress" ? zl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? zl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Jv = dr(fd), eh = I({}, Go, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cd = dr(eh), dd = I({}, Fl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hf }), Hl = dr(dd), mf = I({}, jl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pd = dr(mf), vd = I({}, Go, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), th = dr(vd), nh = [9, 13, 27, 32], yf = le && "CompositionEvent" in window, zu = null;
  le && "documentMode" in document && (zu = document.documentMode);
  var rh = le && "TextEvent" in window && !zu, hd = le && (!yf || zu && 8 < zu && 11 >= zu), md = String.fromCharCode(32), yd = !1;
  function gf(n, a) {
    switch (n) {
      case "keyup":
        return nh.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gd(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var el = !1;
  function ah(n, a) {
    switch (n) {
      case "compositionend":
        return gd(a);
      case "keypress":
        return a.which !== 32 ? null : (yd = !0, md);
      case "textInput":
        return n = a.data, n === md && yd ? null : n;
      default:
        return null;
    }
  }
  function ih(n, a) {
    if (el)
      return n === "compositionend" || !yf && gf(n, a) ? (n = cf(), qo = ff = hi = null, el = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which)
            return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return hd && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var lh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Sd(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a === "input" ? !!lh[n.type] : a === "textarea";
  }
  function Ko(n, a, l, o) {
    Jt(o), a = ns(a, "onChange"), 0 < a.length && (l = new Pl("onChange", "change", null, l, o), n.push({ event: l, listeners: a }));
  }
  var Xr = null, yi = null;
  function Ed(n) {
    Zo(n, 0);
  }
  function Ha(n) {
    var a = ar(n);
    if (Sr(a))
      return n;
  }
  function uh(n, a) {
    if (n === "change")
      return a;
  }
  var Cd = !1;
  if (le) {
    var Sf;
    if (le) {
      var Ef = "oninput" in document;
      if (!Ef) {
        var Rd = document.createElement("div");
        Rd.setAttribute("oninput", "return;"), Ef = typeof Rd.oninput == "function";
      }
      Sf = Ef;
    } else
      Sf = !1;
    Cd = Sf && (!document.documentMode || 9 < document.documentMode);
  }
  function bd() {
    Xr && (Xr.detachEvent("onpropertychange", Cf), yi = Xr = null);
  }
  function Cf(n) {
    if (n.propertyName === "value" && Ha(yi)) {
      var a = [];
      if (Ko(a, yi, n, sa(n)), n = Ed, ft)
        n(a);
      else {
        ft = !0;
        try {
          C(n, a);
        } finally {
          ft = !1, ct();
        }
      }
    }
  }
  function oh(n, a, l) {
    n === "focusin" ? (bd(), Xr = a, yi = l, Xr.attachEvent("onpropertychange", Cf)) : n === "focusout" && bd();
  }
  function Td(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Ha(yi);
  }
  function nr(n, a) {
    if (n === "click")
      return Ha(a);
  }
  function sh(n, a) {
    if (n === "input" || n === "change")
      return Ha(a);
  }
  function wd(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var Ur = typeof Object.is == "function" ? Object.is : wd, fh = Object.prototype.hasOwnProperty;
  function ju(n, a) {
    if (Ur(n, a))
      return !0;
    if (typeof n != "object" || n === null || typeof a != "object" || a === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(a);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++)
      if (!fh.call(a, l[o]) || !Ur(n[l[o]], a[l[o]]))
        return !1;
    return !0;
  }
  function _d(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function xd(n, a) {
    var l = _d(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= a && o >= a)
          return { node: l, offset: a - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = _d(l);
    }
  }
  function Rf(n, a) {
    return n && a ? n === a ? !0 : n && n.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Rf(n, a.parentNode) : "contains" in n ? n.contains(a) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Pu() {
    for (var n = window, a = Er(); a instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof a.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = a.contentWindow;
      else
        break;
      a = Er(n.document);
    }
    return a;
  }
  function tl(n) {
    var a = n && n.nodeName && n.nodeName.toLowerCase();
    return a && (a === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || a === "textarea" || n.contentEditable === "true");
  }
  var kd = le && "documentMode" in document && 11 >= document.documentMode, Vl = null, Fu = null, nl = null, gi = !1;
  function rl(n, a, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gi || Vl == null || Vl !== Er(o) || (o = Vl, "selectionStart" in o && tl(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), nl && ju(nl, o) || (nl = o, o = ns(Fu, "onSelect"), 0 < o.length && (a = new Pl("onSelect", "select", null, a, l), n.push({ event: a, listeners: o }), a.target = Vl)));
  }
  Me(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), Me("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Me(Fe, 2);
  for (var bf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Tf = 0; Tf < bf.length; Tf++)
    ie.set(bf[Tf], 0);
  Ke("onMouseEnter", ["mouseout", "mouseover"]), Ke("onMouseLeave", ["mouseout", "mouseover"]), Ke("onPointerEnter", ["pointerout", "pointerover"]), Ke("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Dd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bl));
  function wf(n, a, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Lr(o, a, void 0, n), n.currentTarget = null;
  }
  function Zo(n, a) {
    a = (a & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], f = o.event;
      o = o.listeners;
      e: {
        var p = void 0;
        if (a)
          for (var m = o.length - 1; 0 <= m; m--) {
            var y = o[m], R = y.instance, U = y.currentTarget;
            if (y = y.listener, R !== p && f.isPropagationStopped())
              break e;
            wf(f, y, U), p = R;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (y = o[m], R = y.instance, U = y.currentTarget, y = y.listener, R !== p && f.isPropagationStopped())
              break e;
            wf(f, y, U), p = R;
          }
      }
    }
    if (Sn)
      throw n = Ki, Sn = !1, Ki = null, n;
  }
  function Vt(n, a) {
    var l = Ad(a), o = n + "__bubble";
    l.has(o) || (es(a, n, 2, !1), l.add(o));
  }
  var Jo = "_reactListening" + Math.random().toString(36).slice(2);
  function _f(n) {
    n[Jo] || (n[Jo] = !0, nt.forEach(function(a) {
      Dd.has(a) || Va(a, !1, n, null), Va(a, !0, n, null);
    }));
  }
  function Va(n, a, l, o) {
    var f = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, p = l;
    if (n === "selectionchange" && l.nodeType !== 9 && (p = l.ownerDocument), o !== null && !a && Dd.has(n)) {
      if (n !== "scroll")
        return;
      f |= 2, p = o;
    }
    var m = Ad(p), y = n + "__" + (a ? "capture" : "bubble");
    m.has(y) || (a && (f |= 4), es(p, n, f, a), m.add(y));
  }
  function es(n, a, l, o) {
    var f = ie.get(a);
    switch (f === void 0 ? 2 : f) {
      case 0:
        f = Qv;
        break;
      case 1:
        f = Ul;
        break;
      default:
        f = Mu;
    }
    l = f.bind(null, a, l, n), f = void 0, !gt || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (f = !0), o ? f !== void 0 ? n.addEventListener(a, l, { capture: !0, passive: f }) : n.addEventListener(a, l, !0) : f !== void 0 ? n.addEventListener(a, l, { passive: f }) : n.addEventListener(a, l, !1);
  }
  function ts(n, a, l, o, f) {
    var p = o;
    if (!(a & 1) && !(a & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var y = o.stateNode.containerInfo;
            if (y === f || y.nodeType === 8 && y.parentNode === f)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var R = m.tag;
                if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === f || R.nodeType === 8 && R.parentNode === f))
                  return;
                m = m.return;
              }
            for (; y !== null; ) {
              if (m = il(y), m === null)
                return;
              if (R = m.tag, R === 5 || R === 6) {
                o = p = m;
                continue e;
              }
              y = y.parentNode;
            }
          }
          o = o.return;
        }
    pt(function() {
      var U = p, oe = sa(l), Qe = [];
      e: {
        var Q = P.get(n);
        if (Q !== void 0) {
          var Te = Pl, Ye = n;
          switch (n) {
            case "keypress":
              if (zl(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              Te = Jv;
              break;
            case "focusin":
              Ye = "focus", Te = tr;
              break;
            case "focusout":
              Ye = "blur", Te = tr;
              break;
            case "beforeblur":
            case "afterblur":
              Te = tr;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Te = Au;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Te = Ar;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Te = Hl;
              break;
            case $o:
            case h:
            case T:
              Te = od;
              break;
            case A:
              Te = pd;
              break;
            case "scroll":
              Te = pf;
              break;
            case "wheel":
              Te = th;
              break;
            case "copy":
            case "cut":
            case "paste":
              Te = Gv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Te = cd;
          }
          var ze = (a & 4) !== 0, D = !ze && n === "scroll", w = ze ? Q !== null ? Q + "Capture" : null : Q;
          ze = [];
          for (var x = U, F; x !== null; ) {
            F = x;
            var B = F.stateNode;
            if (F.tag === 5 && B !== null && (F = B, w !== null && (B = Mt(x, w), B != null && ze.push(Hu(x, B, F)))), D)
              break;
            x = x.return;
          }
          0 < ze.length && (Q = new Te(Q, Ye, null, l, oe), Qe.push({ event: Q, listeners: ze }));
        }
      }
      if (!(a & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", Te = n === "mouseout" || n === "pointerout", Q && !(a & 16) && (Ye = l.relatedTarget || l.fromElement) && (il(Ye) || Ye[rr]))
            break e;
          if ((Te || Q) && (Q = oe.window === oe ? oe : (Q = oe.ownerDocument) ? Q.defaultView || Q.parentWindow : window, Te ? (Ye = l.relatedTarget || l.toElement, Te = U, Ye = Ye ? il(Ye) : null, Ye !== null && (D = En(Ye), Ye !== D || Ye.tag !== 5 && Ye.tag !== 6) && (Ye = null)) : (Te = null, Ye = U), Te !== Ye)) {
            if (ze = Au, B = "onMouseLeave", w = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (ze = cd, B = "onPointerLeave", w = "onPointerEnter", x = "pointer"), D = Te == null ? Q : ar(Te), F = Ye == null ? Q : ar(Ye), Q = new ze(B, x + "leave", Te, l, oe), Q.target = D, Q.relatedTarget = F, B = null, il(oe) === U && (ze = new ze(w, x + "enter", Ye, l, oe), ze.target = F, ze.relatedTarget = D, B = ze), D = B, Te && Ye)
              t: {
                for (ze = Te, w = Ye, x = 0, F = ze; F; F = Il(F))
                  x++;
                for (F = 0, B = w; B; B = Il(B))
                  F++;
                for (; 0 < x - F; )
                  ze = Il(ze), x--;
                for (; 0 < F - x; )
                  w = Il(w), F--;
                for (; x--; ) {
                  if (ze === w || w !== null && ze === w.alternate)
                    break t;
                  ze = Il(ze), w = Il(w);
                }
                ze = null;
              }
            else
              ze = null;
            Te !== null && Od(Qe, Q, Te, ze, !1), Ye !== null && D !== null && Od(Qe, D, Ye, ze, !0);
          }
        }
        e: {
          if (Q = U ? ar(U) : window, Te = Q.nodeName && Q.nodeName.toLowerCase(), Te === "select" || Te === "input" && Q.type === "file")
            var et = uh;
          else if (Sd(Q))
            if (Cd)
              et = sh;
            else {
              et = Td;
              var pe = oh;
            }
          else
            (Te = Q.nodeName) && Te.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (et = nr);
          if (et && (et = et(n, U))) {
            Ko(Qe, et, l, oe);
            break e;
          }
          pe && pe(n, Q, U), n === "focusout" && (pe = Q._wrapperState) && pe.controlled && Q.type === "number" && Mr(Q, "number", Q.value);
        }
        switch (pe = U ? ar(U) : window, n) {
          case "focusin":
            (Sd(pe) || pe.contentEditable === "true") && (Vl = pe, Fu = U, nl = null);
            break;
          case "focusout":
            nl = Fu = Vl = null;
            break;
          case "mousedown":
            gi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gi = !1, rl(Qe, l, oe);
            break;
          case "selectionchange":
            if (kd)
              break;
          case "keydown":
          case "keyup":
            rl(Qe, l, oe);
        }
        var Ge;
        if (yf)
          e: {
            switch (n) {
              case "compositionstart":
                var rt = "onCompositionStart";
                break e;
              case "compositionend":
                rt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                rt = "onCompositionUpdate";
                break e;
            }
            rt = void 0;
          }
        else
          el ? gf(n, l) && (rt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (rt = "onCompositionStart");
        rt && (hd && l.locale !== "ko" && (el || rt !== "onCompositionStart" ? rt === "onCompositionEnd" && el && (Ge = cf()) : (hi = oe, ff = "value" in hi ? hi.value : hi.textContent, el = !0)), pe = ns(U, rt), 0 < pe.length && (rt = new sd(rt, n, null, l, oe), Qe.push({ event: rt, listeners: pe }), Ge ? rt.data = Ge : (Ge = gd(l), Ge !== null && (rt.data = Ge)))), (Ge = rh ? ah(n, l) : ih(n, l)) && (U = ns(U, "onBeforeInput"), 0 < U.length && (oe = new sd(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          oe
        ), Qe.push({ event: oe, listeners: U }), oe.data = Ge));
      }
      Zo(Qe, a);
    });
  }
  function Hu(n, a, l) {
    return { instance: n, listener: a, currentTarget: l };
  }
  function ns(n, a) {
    for (var l = a + "Capture", o = []; n !== null; ) {
      var f = n, p = f.stateNode;
      f.tag === 5 && p !== null && (f = p, p = Mt(n, l), p != null && o.unshift(Hu(n, p, f)), p = Mt(n, a), p != null && o.push(Hu(n, p, f))), n = n.return;
    }
    return o;
  }
  function Il(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Od(n, a, l, o, f) {
    for (var p = a._reactName, m = []; l !== null && l !== o; ) {
      var y = l, R = y.alternate, U = y.stateNode;
      if (R !== null && R === o)
        break;
      y.tag === 5 && U !== null && (y = U, f ? (R = Mt(l, p), R != null && m.unshift(Hu(l, R, y))) : f || (R = Mt(l, p), R != null && m.push(Hu(l, R, y)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: a, listeners: m });
  }
  function rs() {
  }
  var xf = null, kf = null;
  function Wl(n, a) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!a.autoFocus;
    }
    return !1;
  }
  function Vu(n, a) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var $l = typeof setTimeout == "function" ? setTimeout : void 0, Md = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function as(n) {
    n.nodeType === 1 ? n.textContent = "" : n.nodeType === 9 && (n = n.body, n != null && (n.textContent = ""));
  }
  function Si(n) {
    for (; n != null; n = n.nextSibling) {
      var a = n.nodeType;
      if (a === 1 || a === 3)
        break;
    }
    return n;
  }
  function Nd(n) {
    n = n.previousSibling;
    for (var a = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (a === 0)
            return n;
          a--;
        } else
          l === "/$" && a++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ei = 0;
  function is(n) {
    return { $$typeof: ge, toString: n, valueOf: n };
  }
  var al = Math.random().toString(36).slice(2), ha = "__reactFiber$" + al, ls = "__reactProps$" + al, rr = "__reactContainer$" + al, Ld = "__reactEvents$" + al;
  function il(n) {
    var a = n[ha];
    if (a)
      return a;
    for (var l = n.parentNode; l; ) {
      if (a = l[rr] || l[ha]) {
        if (l = a.alternate, a.child !== null || l !== null && l.child !== null)
          for (n = Nd(n); n !== null; ) {
            if (l = n[ha])
              return l;
            n = Nd(n);
          }
        return a;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function wr(n) {
    return n = n[ha] || n[rr], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ar(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(z(33));
  }
  function Ba(n) {
    return n[ls] || null;
  }
  function Ad(n) {
    var a = n[Ld];
    return a === void 0 && (a = n[Ld] = /* @__PURE__ */ new Set()), a;
  }
  var Df = [], zt = -1;
  function ir(n) {
    return { current: n };
  }
  function Je(n) {
    0 > zt || (n.current = Df[zt], Df[zt] = null, zt--);
  }
  function Ve(n, a) {
    zt++, Df[zt] = n.current, n.current = a;
  }
  var Ci = {}, Qt = ir(Ci), Un = ir(!1), Ri = Ci;
  function Dt(n, a) {
    var l = n.type.contextTypes;
    if (!l)
      return Ci;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === a)
      return o.__reactInternalMemoizedMaskedChildContext;
    var f = {}, p;
    for (p in l)
      f[p] = a[p];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = a, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function zn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ma() {
    Je(Un), Je(Qt);
  }
  function Yl(n, a, l) {
    if (Qt.current !== Ci)
      throw Error(z(168));
    Ve(Qt, a), Ve(Un, l);
  }
  function ql(n, a, l) {
    var o = n.stateNode;
    if (n = a.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var f in o)
      if (!(f in n))
        throw Error(z(108, Nt(a) || "Unknown", f));
    return I({}, l, o);
  }
  function zr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Ci, Ri = Qt.current, Ve(Qt, n), Ve(Un, Un.current), !0;
  }
  function Ud(n, a, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(z(169));
    l ? (n = ql(n, a, Ri), o.__reactInternalMemoizedMergedChildContext = n, Je(Un), Je(Qt), Ve(Qt, n)) : Je(Un), Ve(Un, l);
  }
  var Of = null, ll = null, Bu = fe.unstable_runWithPriority, Kr = fe.unstable_scheduleCallback, Iu = fe.unstable_cancelCallback, ch = fe.unstable_shouldYield, bi = fe.unstable_requestPaint, us = fe.unstable_now, zd = fe.unstable_getCurrentPriorityLevel, os = fe.unstable_ImmediatePriority, jd = fe.unstable_UserBlockingPriority, Mf = fe.unstable_NormalPriority, Nf = fe.unstable_LowPriority, Lf = fe.unstable_IdlePriority, Af = {}, Pd = bi !== void 0 ? bi : function() {
  }, ya = null, ss = null, Wu = !1, Fd = us(), jn = 1e4 > Fd ? us : function() {
    return us() - Fd;
  };
  function Ql() {
    switch (zd()) {
      case os:
        return 99;
      case jd:
        return 98;
      case Mf:
        return 97;
      case Nf:
        return 96;
      case Lf:
        return 95;
      default:
        throw Error(z(332));
    }
  }
  function Uf(n) {
    switch (n) {
      case 99:
        return os;
      case 98:
        return jd;
      case 97:
        return Mf;
      case 96:
        return Nf;
      case 95:
        return Lf;
      default:
        throw Error(z(332));
    }
  }
  function ul(n, a) {
    return n = Uf(n), Bu(n, a);
  }
  function ol(n, a, l) {
    return n = Uf(n), Kr(n, a, l);
  }
  function Cn() {
    if (ss !== null) {
      var n = ss;
      ss = null, Iu(n);
    }
    Ia();
  }
  function Ia() {
    if (!Wu && ya !== null) {
      Wu = !0;
      var n = 0;
      try {
        var a = ya;
        ul(99, function() {
          for (; n < a.length; n++) {
            var l = a[n];
            do
              l = l(!0);
            while (l !== null);
          }
        }), ya = null;
      } catch (l) {
        throw ya !== null && (ya = ya.slice(n + 1)), Kr(os, Cn), l;
      } finally {
        Wu = !1;
      }
    }
  }
  var Ti = ee.ReactCurrentBatchConfig;
  function Rn(n, a) {
    if (n && n.defaultProps) {
      a = I({}, a), n = n.defaultProps;
      for (var l in n)
        a[l] === void 0 && (a[l] = n[l]);
      return a;
    }
    return a;
  }
  var wi = ir(null), _i = null, ga = null, fs = null;
  function zf() {
    fs = ga = _i = null;
  }
  function cs(n) {
    var a = wi.current;
    Je(wi), n.type._context._currentValue = a;
  }
  function jf(n, a) {
    for (; n !== null; ) {
      var l = n.alternate;
      if ((n.childLanes & a) === a) {
        if (l === null || (l.childLanes & a) === a)
          break;
        l.childLanes |= a;
      } else
        n.childLanes |= a, l !== null && (l.childLanes |= a);
      n = n.return;
    }
  }
  function sl(n, a) {
    _i = n, fs = ga = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & a && (Pr = !0), n.firstContext = null);
  }
  function _r(n, a) {
    if (fs !== n && a !== !1 && a !== 0)
      if ((typeof a != "number" || a === 1073741823) && (fs = n, a = 1073741823), a = { context: n, observedBits: a, next: null }, ga === null) {
        if (_i === null)
          throw Error(z(308));
        ga = a, _i.dependencies = { lanes: 0, firstContext: a, responders: null };
      } else
        ga = ga.next = a;
    return n._currentValue;
  }
  var jr = !1;
  function Pf(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function Hd(n, a) {
    n = n.updateQueue, a.updateQueue === n && (a.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zr(n, a) {
    return { eventTime: n, lane: a, tag: 0, payload: null, callback: null, next: null };
  }
  function Wa(n, a) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var l = n.pending;
      l === null ? a.next = a : (a.next = l.next, l.next = a), n.pending = a;
    }
  }
  function Vd(n, a) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var f = null, p = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          p === null ? f = p = m : p = p.next = m, l = l.next;
        } while (l !== null);
        p === null ? f = p = a : p = p.next = a;
      } else
        f = p = a;
      l = { baseState: o.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = a : n.next = a, l.lastBaseUpdate = a;
  }
  function $a(n, a, l, o) {
    var f = n.updateQueue;
    jr = !1;
    var p = f.firstBaseUpdate, m = f.lastBaseUpdate, y = f.shared.pending;
    if (y !== null) {
      f.shared.pending = null;
      var R = y, U = R.next;
      R.next = null, m === null ? p = U : m.next = U, m = R;
      var oe = n.alternate;
      if (oe !== null) {
        oe = oe.updateQueue;
        var Qe = oe.lastBaseUpdate;
        Qe !== m && (Qe === null ? oe.firstBaseUpdate = U : Qe.next = U, oe.lastBaseUpdate = R);
      }
    }
    if (p !== null) {
      Qe = f.baseState, m = 0, oe = U = R = null;
      do {
        y = p.lane;
        var Q = p.eventTime;
        if ((o & y) === y) {
          oe !== null && (oe = oe.next = {
            eventTime: Q,
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          });
          e: {
            var Te = n, Ye = p;
            switch (y = a, Q = l, Ye.tag) {
              case 1:
                if (Te = Ye.payload, typeof Te == "function") {
                  Qe = Te.call(Q, Qe, y);
                  break e;
                }
                Qe = Te;
                break e;
              case 3:
                Te.flags = Te.flags & -4097 | 64;
              case 0:
                if (Te = Ye.payload, y = typeof Te == "function" ? Te.call(Q, Qe, y) : Te, y == null)
                  break e;
                Qe = I({}, Qe, y);
                break e;
              case 2:
                jr = !0;
            }
          }
          p.callback !== null && (n.flags |= 32, y = f.effects, y === null ? f.effects = [p] : y.push(p));
        } else
          Q = { eventTime: Q, lane: y, tag: p.tag, payload: p.payload, callback: p.callback, next: null }, oe === null ? (U = oe = Q, R = Qe) : oe = oe.next = Q, m |= y;
        if (p = p.next, p === null) {
          if (y = f.shared.pending, y === null)
            break;
          p = y.next, y.next = null, f.lastBaseUpdate = y, f.shared.pending = null;
        }
      } while (1);
      oe === null && (R = Qe), f.baseState = R, f.firstBaseUpdate = U, f.lastBaseUpdate = oe, yl |= m, n.lanes = m, n.memoizedState = Qe;
    }
  }
  function Ff(n, a, l) {
    if (n = a.effects, a.effects = null, n !== null)
      for (a = 0; a < n.length; a++) {
        var o = n[a], f = o.callback;
        if (f !== null) {
          if (o.callback = null, o = l, typeof f != "function")
            throw Error(z(191, f));
          f.call(o);
        }
      }
  }
  var ds = new _.Component().refs;
  function $u(n, a, l, o) {
    a = n.memoizedState, l = l(o, a), l = l == null ? a : I({}, a, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Gl = { isMounted: function(n) {
    return (n = n._reactInternals) ? En(n) === n : !1;
  }, enqueueSetState: function(n, a, l) {
    n = n._reactInternals;
    var o = xr(), f = wa(n), p = Zr(o, f);
    p.payload = a, l != null && (p.callback = l), Wa(n, p), Ai(n, f, o);
  }, enqueueReplaceState: function(n, a, l) {
    n = n._reactInternals;
    var o = xr(), f = wa(n), p = Zr(o, f);
    p.tag = 1, p.payload = a, l != null && (p.callback = l), Wa(n, p), Ai(n, f, o);
  }, enqueueForceUpdate: function(n, a) {
    n = n._reactInternals;
    var l = xr(), o = wa(n), f = Zr(l, o);
    f.tag = 2, a != null && (f.callback = a), Wa(n, f), Ai(n, o, l);
  } };
  function Yu(n, a, l, o, f, p, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, p, m) : a.prototype && a.prototype.isPureReactComponent ? !ju(l, o) || !ju(f, p) : !0;
  }
  function fl(n, a, l) {
    var o = !1, f = Ci, p = a.contextType;
    return typeof p == "object" && p !== null ? p = _r(p) : (f = zn(a) ? Ri : Qt.current, o = a.contextTypes, p = (o = o != null) ? Dt(n, f) : Ci), a = new a(l, p), n.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Gl, n.stateNode = a, a._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), a;
  }
  function ps(n, a, l, o) {
    n = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(l, o), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(l, o), a.state !== n && Gl.enqueueReplaceState(a, a.state, null);
  }
  function vs(n, a, l, o) {
    var f = n.stateNode;
    f.props = l, f.state = n.memoizedState, f.refs = ds, Pf(n);
    var p = a.contextType;
    typeof p == "object" && p !== null ? f.context = _r(p) : (p = zn(a) ? Ri : Qt.current, f.context = Dt(n, p)), $a(n, l, f, o), f.state = n.memoizedState, p = a.getDerivedStateFromProps, typeof p == "function" && ($u(n, a, p, l), f.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (a = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), a !== f.state && Gl.enqueueReplaceState(f, f.state, null), $a(n, l, f, o), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4);
  }
  var cl = Array.isArray;
  function Xl(n, a, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(z(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(z(147, n));
        var f = "" + n;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === f ? a.ref : (a = function(p) {
          var m = o.refs;
          m === ds && (m = o.refs = {}), p === null ? delete m[f] : m[f] = p;
        }, a._stringRef = f, a);
      }
      if (typeof n != "string")
        throw Error(z(284));
      if (!l._owner)
        throw Error(z(290, n));
    }
    return n;
  }
  function qu(n, a) {
    if (n.type !== "textarea")
      throw Error(z(31, Object.prototype.toString.call(a) === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : a));
  }
  function Hf(n) {
    function a(D, w) {
      if (n) {
        var x = D.lastEffect;
        x !== null ? (x.nextEffect = w, D.lastEffect = w) : D.firstEffect = D.lastEffect = w, w.nextEffect = null, w.flags = 8;
      }
    }
    function l(D, w) {
      if (!n)
        return null;
      for (; w !== null; )
        a(D, w), w = w.sibling;
      return null;
    }
    function o(D, w) {
      for (D = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? D.set(w.key, w) : D.set(w.index, w), w = w.sibling;
      return D;
    }
    function f(D, w) {
      return D = Pi(D, w), D.index = 0, D.sibling = null, D;
    }
    function p(D, w, x) {
      return D.index = x, n ? (x = D.alternate, x !== null ? (x = x.index, x < w ? (D.flags = 2, w) : x) : (D.flags = 2, w)) : w;
    }
    function m(D) {
      return n && D.alternate === null && (D.flags = 2), D;
    }
    function y(D, w, x, F) {
      return w === null || w.tag !== 6 ? (w = hc(x, D.mode, F), w.return = D, w) : (w = f(w, x), w.return = D, w);
    }
    function R(D, w, x, F) {
      return w !== null && w.elementType === x.type ? (F = f(w, x.props), F.ref = Xl(D, w, x), F.return = D, F) : (F = yo(x.type, x.key, x.props, null, D.mode, F), F.ref = Xl(D, w, x), F.return = D, F);
    }
    function U(D, w, x, F) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== x.containerInfo || w.stateNode.implementation !== x.implementation ? (w = mc(x, D.mode, F), w.return = D, w) : (w = f(w, x.children || []), w.return = D, w);
    }
    function oe(D, w, x, F, B) {
      return w === null || w.tag !== 7 ? (w = _a(x, D.mode, F, B), w.return = D, w) : (w = f(w, x), w.return = D, w);
    }
    function Qe(D, w, x) {
      if (typeof w == "string" || typeof w == "number")
        return w = hc("" + w, D.mode, x), w.return = D, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ye:
            return x = yo(w.type, w.key, w.props, null, D.mode, x), x.ref = Xl(D, null, w), x.return = D, x;
          case Re:
            return w = mc(w, D.mode, x), w.return = D, w;
        }
        if (cl(w) || _e(w))
          return w = _a(
            w,
            D.mode,
            x,
            null
          ), w.return = D, w;
        qu(D, w);
      }
      return null;
    }
    function Q(D, w, x, F) {
      var B = w !== null ? w.key : null;
      if (typeof x == "string" || typeof x == "number")
        return B !== null ? null : y(D, w, "" + x, F);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ye:
            return x.key === B ? x.type === Ue ? oe(D, w, x.props.children, F, B) : R(D, w, x, F) : null;
          case Re:
            return x.key === B ? U(D, w, x, F) : null;
        }
        if (cl(x) || _e(x))
          return B !== null ? null : oe(D, w, x, F, null);
        qu(D, x);
      }
      return null;
    }
    function Te(D, w, x, F, B) {
      if (typeof F == "string" || typeof F == "number")
        return D = D.get(x) || null, y(w, D, "" + F, B);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case ye:
            return D = D.get(F.key === null ? x : F.key) || null, F.type === Ue ? oe(w, D, F.props.children, B, F.key) : R(w, D, F, B);
          case Re:
            return D = D.get(F.key === null ? x : F.key) || null, U(w, D, F, B);
        }
        if (cl(F) || _e(F))
          return D = D.get(x) || null, oe(w, D, F, B, null);
        qu(w, F);
      }
      return null;
    }
    function Ye(D, w, x, F) {
      for (var B = null, et = null, pe = w, Ge = w = 0, rt = null; pe !== null && Ge < x.length; Ge++) {
        pe.index > Ge ? (rt = pe, pe = null) : rt = pe.sibling;
        var tt = Q(D, pe, x[Ge], F);
        if (tt === null) {
          pe === null && (pe = rt);
          break;
        }
        n && pe && tt.alternate === null && a(D, pe), w = p(tt, w, Ge), et === null ? B = tt : et.sibling = tt, et = tt, pe = rt;
      }
      if (Ge === x.length)
        return l(D, pe), B;
      if (pe === null) {
        for (; Ge < x.length; Ge++)
          pe = Qe(D, x[Ge], F), pe !== null && (w = p(pe, w, Ge), et === null ? B = pe : et.sibling = pe, et = pe);
        return B;
      }
      for (pe = o(D, pe); Ge < x.length; Ge++)
        rt = Te(pe, D, Ge, x[Ge], F), rt !== null && (n && rt.alternate !== null && pe.delete(rt.key === null ? Ge : rt.key), w = p(rt, w, Ge), et === null ? B = rt : et.sibling = rt, et = rt);
      return n && pe.forEach(function(Fi) {
        return a(D, Fi);
      }), B;
    }
    function ze(D, w, x, F) {
      var B = _e(x);
      if (typeof B != "function")
        throw Error(z(150));
      if (x = B.call(x), x == null)
        throw Error(z(151));
      for (var et = B = null, pe = w, Ge = w = 0, rt = null, tt = x.next(); pe !== null && !tt.done; Ge++, tt = x.next()) {
        pe.index > Ge ? (rt = pe, pe = null) : rt = pe.sibling;
        var Fi = Q(D, pe, tt.value, F);
        if (Fi === null) {
          pe === null && (pe = rt);
          break;
        }
        n && pe && Fi.alternate === null && a(D, pe), w = p(Fi, w, Ge), et === null ? B = Fi : et.sibling = Fi, et = Fi, pe = rt;
      }
      if (tt.done)
        return l(D, pe), B;
      if (pe === null) {
        for (; !tt.done; Ge++, tt = x.next())
          tt = Qe(D, tt.value, F), tt !== null && (w = p(tt, w, Ge), et === null ? B = tt : et.sibling = tt, et = tt);
        return B;
      }
      for (pe = o(D, pe); !tt.done; Ge++, tt = x.next())
        tt = Te(pe, D, Ge, tt.value, F), tt !== null && (n && tt.alternate !== null && pe.delete(tt.key === null ? Ge : tt.key), w = p(tt, w, Ge), et === null ? B = tt : et.sibling = tt, et = tt);
      return n && pe.forEach(function(Nh) {
        return a(D, Nh);
      }), B;
    }
    return function(D, w, x, F) {
      var B = typeof x == "object" && x !== null && x.type === Ue && x.key === null;
      B && (x = x.props.children);
      var et = typeof x == "object" && x !== null;
      if (et)
        switch (x.$$typeof) {
          case ye:
            e: {
              for (et = x.key, B = w; B !== null; ) {
                if (B.key === et) {
                  switch (B.tag) {
                    case 7:
                      if (x.type === Ue) {
                        l(D, B.sibling), w = f(B, x.props.children), w.return = D, D = w;
                        break e;
                      }
                      break;
                    default:
                      if (B.elementType === x.type) {
                        l(D, B.sibling), w = f(B, x.props), w.ref = Xl(D, B, x), w.return = D, D = w;
                        break e;
                      }
                  }
                  l(D, B);
                  break;
                } else
                  a(D, B);
                B = B.sibling;
              }
              x.type === Ue ? (w = _a(x.props.children, D.mode, F, x.key), w.return = D, D = w) : (F = yo(x.type, x.key, x.props, null, D.mode, F), F.ref = Xl(D, w, x), F.return = D, D = F);
            }
            return m(D);
          case Re:
            e: {
              for (B = x.key; w !== null; ) {
                if (w.key === B)
                  if (w.tag === 4 && w.stateNode.containerInfo === x.containerInfo && w.stateNode.implementation === x.implementation) {
                    l(D, w.sibling), w = f(w, x.children || []), w.return = D, D = w;
                    break e;
                  } else {
                    l(D, w);
                    break;
                  }
                else
                  a(D, w);
                w = w.sibling;
              }
              w = mc(x, D.mode, F), w.return = D, D = w;
            }
            return m(D);
        }
      if (typeof x == "string" || typeof x == "number")
        return x = "" + x, w !== null && w.tag === 6 ? (l(D, w.sibling), w = f(w, x), w.return = D, D = w) : (l(D, w), w = hc(x, D.mode, F), w.return = D, D = w), m(D);
      if (cl(x))
        return Ye(D, w, x, F);
      if (_e(x))
        return ze(D, w, x, F);
      if (et && qu(D, x), typeof x > "u" && !B)
        switch (D.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(z(152, Nt(D.type) || "Component"));
        }
      return l(D, w);
    };
  }
  var Qu = Hf(!0), Vf = Hf(!1), dl = {}, Sa = ir(dl), Gu = ir(dl), Xu = ir(dl);
  function pl(n) {
    if (n === dl)
      throw Error(z(174));
    return n;
  }
  function Ku(n, a) {
    switch (Ve(Xu, a), Ve(Gu, n), Ve(Sa, dl), n = a.nodeType, n) {
      case 9:
      case 11:
        a = (a = a.documentElement) ? a.namespaceURI : Pe(null, "");
        break;
      default:
        n = n === 8 ? a.parentNode : a, a = n.namespaceURI || null, n = n.tagName, a = Pe(a, n);
    }
    Je(Sa), Ve(Sa, a);
  }
  function Kl() {
    Je(Sa), Je(Gu), Je(Xu);
  }
  function Bd(n) {
    pl(Xu.current);
    var a = pl(Sa.current), l = Pe(a, n.type);
    a !== l && (Ve(Gu, n), Ve(Sa, l));
  }
  function Bf(n) {
    Gu.current === n && (Je(Sa), Je(Gu));
  }
  var rn = ir(0);
  function Zu(n) {
    for (var a = n; a !== null; ) {
      if (a.tag === 13) {
        var l = a.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 64)
          return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === n)
        break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === n)
          return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  var Ea = null, Ya = null, Ca = !1;
  function If(n, a) {
    var l = Hr(5, null, null, 0);
    l.elementType = "DELETED", l.type = "DELETED", l.stateNode = a, l.return = n, l.flags = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = l, n.lastEffect = l) : n.firstEffect = n.lastEffect = l;
  }
  function Id(n, a) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return a = a.nodeType !== 1 || l.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (n.stateNode = a, !0) : !1;
      case 6:
        return a = n.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (n.stateNode = a, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function xi(n) {
    if (Ca) {
      var a = Ya;
      if (a) {
        var l = a;
        if (!Id(n, a)) {
          if (a = Si(l.nextSibling), !a || !Id(n, a)) {
            n.flags = n.flags & -1025 | 2, Ca = !1, Ea = n;
            return;
          }
          If(Ea, l);
        }
        Ea = n, Ya = Si(a.firstChild);
      } else
        n.flags = n.flags & -1025 | 2, Ca = !1, Ea = n;
    }
  }
  function Ju(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Ea = n;
  }
  function eo(n) {
    if (n !== Ea)
      return !1;
    if (!Ca)
      return Ju(n), Ca = !0, !1;
    var a = n.type;
    if (n.tag !== 5 || a !== "head" && a !== "body" && !Vu(a, n.memoizedProps))
      for (a = Ya; a; )
        If(n, a), a = Si(a.nextSibling);
    if (Ju(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(z(317));
      e: {
        for (n = n.nextSibling, a = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (a === 0) {
                Ya = Si(n.nextSibling);
                break e;
              }
              a--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || a++;
          }
          n = n.nextSibling;
        }
        Ya = null;
      }
    } else
      Ya = Ea ? Si(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Zl() {
    Ya = Ea = null, Ca = !1;
  }
  var vl = [];
  function ki() {
    for (var n = 0; n < vl.length; n++)
      vl[n]._workInProgressVersionPrimary = null;
    vl.length = 0;
  }
  var Jl = ee.ReactCurrentDispatcher, bn = ee.ReactCurrentBatchConfig, eu = 0, Gt = null, Tn = null, wn = null, to = !1, Di = !1;
  function lr() {
    throw Error(z(321));
  }
  function qa(n, a) {
    if (a === null)
      return !1;
    for (var l = 0; l < a.length && l < n.length; l++)
      if (!Ur(n[l], a[l]))
        return !1;
    return !0;
  }
  function Wf(n, a, l, o, f, p) {
    if (eu = p, Gt = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, Jl.current = n === null || n.memoizedState === null ? ao : ph, n = l(o, f), Di) {
      p = 0;
      do {
        if (Di = !1, !(25 > p))
          throw Error(z(301));
        p += 1, wn = Tn = null, a.updateQueue = null, Jl.current = vh, n = l(o, f);
      } while (Di);
    }
    if (Jl.current = ys, a = Tn !== null && Tn.next !== null, eu = 0, wn = Tn = Gt = null, to = !1, a)
      throw Error(z(300));
    return n;
  }
  function H() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return wn === null ? Gt.memoizedState = wn = n : wn = wn.next = n, wn;
  }
  function dn() {
    if (Tn === null) {
      var n = Gt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = Tn.next;
    var a = wn === null ? Gt.memoizedState : wn.next;
    if (a !== null)
      wn = a, Tn = n;
    else {
      if (n === null)
        throw Error(z(310));
      Tn = n, n = { memoizedState: Tn.memoizedState, baseState: Tn.baseState, baseQueue: Tn.baseQueue, queue: Tn.queue, next: null }, wn === null ? Gt.memoizedState = wn = n : wn = wn.next = n;
    }
    return wn;
  }
  function vt(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Qa(n) {
    var a = dn(), l = a.queue;
    if (l === null)
      throw Error(z(311));
    l.lastRenderedReducer = n;
    var o = Tn, f = o.baseQueue, p = l.pending;
    if (p !== null) {
      if (f !== null) {
        var m = f.next;
        f.next = p.next, p.next = m;
      }
      o.baseQueue = f = p, l.pending = null;
    }
    if (f !== null) {
      f = f.next, o = o.baseState;
      var y = m = p = null, R = f;
      do {
        var U = R.lane;
        if ((eu & U) === U)
          y !== null && (y = y.next = { lane: 0, action: R.action, eagerReducer: R.eagerReducer, eagerState: R.eagerState, next: null }), o = R.eagerReducer === n ? R.eagerState : n(o, R.action);
        else {
          var oe = {
            lane: U,
            action: R.action,
            eagerReducer: R.eagerReducer,
            eagerState: R.eagerState,
            next: null
          };
          y === null ? (m = y = oe, p = o) : y = y.next = oe, Gt.lanes |= U, yl |= U;
        }
        R = R.next;
      } while (R !== null && R !== f);
      y === null ? p = o : y.next = m, Ur(o, a.memoizedState) || (Pr = !0), a.memoizedState = o, a.baseState = p, a.baseQueue = y, l.lastRenderedState = o;
    }
    return [a.memoizedState, l.dispatch];
  }
  function hl(n) {
    var a = dn(), l = a.queue;
    if (l === null)
      throw Error(z(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, f = l.pending, p = a.memoizedState;
    if (f !== null) {
      l.pending = null;
      var m = f = f.next;
      do
        p = n(p, m.action), m = m.next;
      while (m !== f);
      Ur(p, a.memoizedState) || (Pr = !0), a.memoizedState = p, a.baseQueue === null && (a.baseState = p), l.lastRenderedState = p;
    }
    return [p, o];
  }
  function no(n, a, l) {
    var o = a._getVersion;
    o = o(a._source);
    var f = a._workInProgressVersionPrimary;
    if (f !== null ? n = f === o : (n = n.mutableReadLanes, (n = (eu & n) === n) && (a._workInProgressVersionPrimary = o, vl.push(a))), n)
      return l(a._source);
    throw vl.push(a), Error(z(350));
  }
  function $f(n, a, l, o) {
    var f = ur;
    if (f === null)
      throw Error(z(349));
    var p = a._getVersion, m = p(a._source), y = Jl.current, R = y.useState(function() {
      return no(f, a, l);
    }), U = R[1], oe = R[0];
    R = wn;
    var Qe = n.memoizedState, Q = Qe.refs, Te = Q.getSnapshot, Ye = Qe.source;
    Qe = Qe.subscribe;
    var ze = Gt;
    return n.memoizedState = { refs: Q, source: a, subscribe: o }, y.useEffect(function() {
      Q.getSnapshot = l, Q.setSnapshot = U;
      var D = p(a._source);
      if (!Ur(m, D)) {
        D = l(a._source), Ur(oe, D) || (U(D), D = wa(ze), f.mutableReadLanes |= D & f.pendingLanes), D = f.mutableReadLanes, f.entangledLanes |= D;
        for (var w = f.entanglements, x = D; 0 < x; ) {
          var F = 31 - va(x), B = 1 << F;
          w[F] |= D, x &= ~B;
        }
      }
    }, [l, a, o]), y.useEffect(function() {
      return o(a._source, function() {
        var D = Q.getSnapshot, w = Q.setSnapshot;
        try {
          w(D(a._source));
          var x = wa(ze);
          f.mutableReadLanes |= x & f.pendingLanes;
        } catch (F) {
          w(function() {
            throw F;
          });
        }
      });
    }, [a, o]), Ur(Te, l) && Ur(Ye, a) && Ur(Qe, o) || (n = { pending: null, dispatch: null, lastRenderedReducer: vt, lastRenderedState: oe }, n.dispatch = U = Gf.bind(null, Gt, n), R.queue = n, R.baseQueue = null, oe = no(f, a, l), R.memoizedState = R.baseState = oe), oe;
  }
  function Yf(n, a, l) {
    var o = dn();
    return $f(o, n, a, l);
  }
  function tu(n) {
    var a = H();
    return typeof n == "function" && (n = n()), a.memoizedState = a.baseState = n, n = a.queue = { pending: null, dispatch: null, lastRenderedReducer: vt, lastRenderedState: n }, n = n.dispatch = Gf.bind(null, Gt, n), [a.memoizedState, n];
  }
  function nu(n, a, l, o) {
    return n = { tag: n, create: a, destroy: l, deps: o, next: null }, a = Gt.updateQueue, a === null ? (a = { lastEffect: null }, Gt.updateQueue = a, a.lastEffect = n.next = n) : (l = a.lastEffect, l === null ? a.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, a.lastEffect = n)), n;
  }
  function qf(n) {
    var a = H();
    return n = { current: n }, a.memoizedState = n;
  }
  function Ga() {
    return dn().memoizedState;
  }
  function ru(n, a, l, o) {
    var f = H();
    Gt.flags |= n, f.memoizedState = nu(1 | a, l, void 0, o === void 0 ? null : o);
  }
  function Oi(n, a, l, o) {
    var f = dn();
    o = o === void 0 ? null : o;
    var p = void 0;
    if (Tn !== null) {
      var m = Tn.memoizedState;
      if (p = m.destroy, o !== null && qa(o, m.deps)) {
        nu(a, l, p, o);
        return;
      }
    }
    Gt.flags |= n, f.memoizedState = nu(1 | a, l, p, o);
  }
  function hs(n, a) {
    return ru(516, 4, n, a);
  }
  function ro(n, a) {
    return Oi(516, 4, n, a);
  }
  function Qf(n, a) {
    return Oi(4, 2, n, a);
  }
  function ms(n, a) {
    if (typeof a == "function")
      return n = n(), a(n), function() {
        a(null);
      };
    if (a != null)
      return n = n(), a.current = n, function() {
        a.current = null;
      };
  }
  function Jr(n, a, l) {
    return l = l != null ? l.concat([n]) : null, Oi(4, 2, ms.bind(null, a, n), l);
  }
  function Xt() {
  }
  function dh(n, a) {
    var l = dn();
    a = a === void 0 ? null : a;
    var o = l.memoizedState;
    return o !== null && a !== null && qa(a, o[1]) ? o[0] : (l.memoizedState = [n, a], n);
  }
  function Ft(n, a) {
    var l = dn();
    a = a === void 0 ? null : a;
    var o = l.memoizedState;
    return o !== null && a !== null && qa(a, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, a], n);
  }
  function au(n, a) {
    var l = Ql();
    ul(98 > l ? 98 : l, function() {
      n(!0);
    }), ul(97 < l ? 97 : l, function() {
      var o = bn.transition;
      bn.transition = 1;
      try {
        n(!1), a();
      } finally {
        bn.transition = o;
      }
    });
  }
  function Gf(n, a, l) {
    var o = xr(), f = wa(n), p = { lane: f, action: l, eagerReducer: null, eagerState: null, next: null }, m = a.pending;
    if (m === null ? p.next = p : (p.next = m.next, m.next = p), a.pending = p, m = n.alternate, n === Gt || m !== null && m === Gt)
      Di = to = !0;
    else {
      if (n.lanes === 0 && (m === null || m.lanes === 0) && (m = a.lastRenderedReducer, m !== null))
        try {
          var y = a.lastRenderedState, R = m(y, l);
          if (p.eagerReducer = m, p.eagerState = R, Ur(R, y))
            return;
        } catch {
        } finally {
        }
      Ai(n, f, o);
    }
  }
  var ys = { readContext: _r, useCallback: lr, useContext: lr, useEffect: lr, useImperativeHandle: lr, useLayoutEffect: lr, useMemo: lr, useReducer: lr, useRef: lr, useState: lr, useDebugValue: lr, useDeferredValue: lr, useTransition: lr, useMutableSource: lr, useOpaqueIdentifier: lr, unstable_isNewReconciler: !1 }, ao = { readContext: _r, useCallback: function(n, a) {
    return H().memoizedState = [n, a === void 0 ? null : a], n;
  }, useContext: _r, useEffect: hs, useImperativeHandle: function(n, a, l) {
    return l = l != null ? l.concat([n]) : null, ru(4, 2, ms.bind(
      null,
      a,
      n
    ), l);
  }, useLayoutEffect: function(n, a) {
    return ru(4, 2, n, a);
  }, useMemo: function(n, a) {
    var l = H();
    return a = a === void 0 ? null : a, n = n(), l.memoizedState = [n, a], n;
  }, useReducer: function(n, a, l) {
    var o = H();
    return a = l !== void 0 ? l(a) : a, o.memoizedState = o.baseState = a, n = o.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: a }, n = n.dispatch = Gf.bind(null, Gt, n), [o.memoizedState, n];
  }, useRef: qf, useState: tu, useDebugValue: Xt, useDeferredValue: function(n) {
    var a = tu(n), l = a[0], o = a[1];
    return hs(function() {
      var f = bn.transition;
      bn.transition = 1;
      try {
        o(n);
      } finally {
        bn.transition = f;
      }
    }, [n]), l;
  }, useTransition: function() {
    var n = tu(!1), a = n[0];
    return n = au.bind(null, n[1]), qf(n), [n, a];
  }, useMutableSource: function(n, a, l) {
    var o = H();
    return o.memoizedState = { refs: { getSnapshot: a, setSnapshot: null }, source: n, subscribe: l }, $f(o, n, a, l);
  }, useOpaqueIdentifier: function() {
    if (Ca) {
      var n = !1, a = is(function() {
        throw n || (n = !0, l("r:" + (Ei++).toString(36))), Error(z(355));
      }), l = tu(a)[1];
      return !(Gt.mode & 2) && (Gt.flags |= 516, nu(
        5,
        function() {
          l("r:" + (Ei++).toString(36));
        },
        void 0,
        null
      )), a;
    }
    return a = "r:" + (Ei++).toString(36), tu(a), a;
  }, unstable_isNewReconciler: !1 }, ph = { readContext: _r, useCallback: dh, useContext: _r, useEffect: ro, useImperativeHandle: Jr, useLayoutEffect: Qf, useMemo: Ft, useReducer: Qa, useRef: Ga, useState: function() {
    return Qa(vt);
  }, useDebugValue: Xt, useDeferredValue: function(n) {
    var a = Qa(vt), l = a[0], o = a[1];
    return ro(function() {
      var f = bn.transition;
      bn.transition = 1;
      try {
        o(n);
      } finally {
        bn.transition = f;
      }
    }, [n]), l;
  }, useTransition: function() {
    var n = Qa(vt)[0];
    return [
      Ga().current,
      n
    ];
  }, useMutableSource: Yf, useOpaqueIdentifier: function() {
    return Qa(vt)[0];
  }, unstable_isNewReconciler: !1 }, vh = { readContext: _r, useCallback: dh, useContext: _r, useEffect: ro, useImperativeHandle: Jr, useLayoutEffect: Qf, useMemo: Ft, useReducer: hl, useRef: Ga, useState: function() {
    return hl(vt);
  }, useDebugValue: Xt, useDeferredValue: function(n) {
    var a = hl(vt), l = a[0], o = a[1];
    return ro(function() {
      var f = bn.transition;
      bn.transition = 1;
      try {
        o(n);
      } finally {
        bn.transition = f;
      }
    }, [n]), l;
  }, useTransition: function() {
    var n = hl(vt)[0];
    return [
      Ga().current,
      n
    ];
  }, useMutableSource: Yf, useOpaqueIdentifier: function() {
    return hl(vt)[0];
  }, unstable_isNewReconciler: !1 }, hh = ee.ReactCurrentOwner, Pr = !1;
  function pr(n, a, l, o) {
    a.child = n === null ? Vf(a, null, l, o) : Qu(a, n.child, l, o);
  }
  function Xf(n, a, l, o, f) {
    l = l.render;
    var p = a.ref;
    return sl(a, f), o = Wf(n, a, l, o, p, f), n !== null && !Pr ? (a.updateQueue = n.updateQueue, a.flags &= -517, n.lanes &= ~f, Xa(n, a, f)) : (a.flags |= 1, pr(n, a, o, f), a.child);
  }
  function Kf(n, a, l, o, f, p) {
    if (n === null) {
      var m = l.type;
      return typeof m == "function" && !_s(m) && m.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (a.tag = 15, a.type = m, Wd(n, a, m, o, f, p)) : (n = yo(l.type, null, o, a, a.mode, p), n.ref = a.ref, n.return = a, a.child = n);
    }
    return m = n.child, !(f & p) && (f = m.memoizedProps, l = l.compare, l = l !== null ? l : ju, l(f, o) && n.ref === a.ref) ? Xa(n, a, p) : (a.flags |= 1, n = Pi(m, o), n.ref = a.ref, n.return = a, a.child = n);
  }
  function Wd(n, a, l, o, f, p) {
    if (n !== null && ju(n.memoizedProps, o) && n.ref === a.ref)
      if (Pr = !1, (p & f) !== 0)
        n.flags & 16384 && (Pr = !0);
      else
        return a.lanes = n.lanes, Xa(n, a, p);
    return Zf(n, a, l, o, p);
  }
  function iu(n, a, l) {
    var o = a.pendingProps, f = o.children, p = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden" || o.mode === "unstable-defer-without-hiding")
      if (!(a.mode & 4))
        a.memoizedState = { baseLanes: 0 }, Ts(a, l);
      else if (l & 1073741824)
        a.memoizedState = { baseLanes: 0 }, Ts(a, p !== null ? p.baseLanes : l);
      else
        return n = p !== null ? p.baseLanes | l : l, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: n }, Ts(a, n), null;
    else
      p !== null ? (o = p.baseLanes | l, a.memoizedState = null) : o = l, Ts(a, o);
    return pr(n, a, f, l), a.child;
  }
  function $d(n, a) {
    var l = a.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (a.flags |= 128);
  }
  function Zf(n, a, l, o, f) {
    var p = zn(l) ? Ri : Qt.current;
    return p = Dt(a, p), sl(a, f), l = Wf(n, a, l, o, p, f), n !== null && !Pr ? (a.updateQueue = n.updateQueue, a.flags &= -517, n.lanes &= ~f, Xa(n, a, f)) : (a.flags |= 1, pr(n, a, l, f), a.child);
  }
  function Yd(n, a, l, o, f) {
    if (zn(l)) {
      var p = !0;
      zr(a);
    } else
      p = !1;
    if (sl(a, f), a.stateNode === null)
      n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), fl(a, l, o), vs(a, l, o, f), o = !0;
    else if (n === null) {
      var m = a.stateNode, y = a.memoizedProps;
      m.props = y;
      var R = m.context, U = l.contextType;
      typeof U == "object" && U !== null ? U = _r(U) : (U = zn(l) ? Ri : Qt.current, U = Dt(a, U));
      var oe = l.getDerivedStateFromProps, Qe = typeof oe == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Qe || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (y !== o || R !== U) && ps(a, m, o, U), jr = !1;
      var Q = a.memoizedState;
      m.state = Q, $a(a, o, m, f), R = a.memoizedState, y !== o || Q !== R || Un.current || jr ? (typeof oe == "function" && ($u(a, l, oe, o), R = a.memoizedState), (y = jr || Yu(a, l, y, o, Q, R, U)) ? (Qe || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (a.flags |= 4)) : (typeof m.componentDidMount == "function" && (a.flags |= 4), a.memoizedProps = o, a.memoizedState = R), m.props = o, m.state = R, m.context = U, o = y) : (typeof m.componentDidMount == "function" && (a.flags |= 4), o = !1);
    } else {
      m = a.stateNode, Hd(n, a), y = a.memoizedProps, U = a.type === a.elementType ? y : Rn(a.type, y), m.props = U, Qe = a.pendingProps, Q = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = _r(R) : (R = zn(l) ? Ri : Qt.current, R = Dt(a, R));
      var Te = l.getDerivedStateFromProps;
      (oe = typeof Te == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (y !== Qe || Q !== R) && ps(a, m, o, R), jr = !1, Q = a.memoizedState, m.state = Q, $a(a, o, m, f);
      var Ye = a.memoizedState;
      y !== Qe || Q !== Ye || Un.current || jr ? (typeof Te == "function" && ($u(a, l, Te, o), Ye = a.memoizedState), (U = jr || Yu(a, l, U, o, Q, Ye, R)) ? (oe || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(
        o,
        Ye,
        R
      ), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, Ye, R)), typeof m.componentDidUpdate == "function" && (a.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (a.flags |= 256)) : (typeof m.componentDidUpdate != "function" || y === n.memoizedProps && Q === n.memoizedState || (a.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || y === n.memoizedProps && Q === n.memoizedState || (a.flags |= 256), a.memoizedProps = o, a.memoizedState = Ye), m.props = o, m.state = Ye, m.context = R, o = U) : (typeof m.componentDidUpdate != "function" || y === n.memoizedProps && Q === n.memoizedState || (a.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || y === n.memoizedProps && Q === n.memoizedState || (a.flags |= 256), o = !1);
    }
    return Jf(n, a, l, o, p, f);
  }
  function Jf(n, a, l, o, f, p) {
    $d(n, a);
    var m = (a.flags & 64) !== 0;
    if (!o && !m)
      return f && Ud(a, l, !1), Xa(n, a, p);
    o = a.stateNode, hh.current = a;
    var y = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return a.flags |= 1, n !== null && m ? (a.child = Qu(a, n.child, null, p), a.child = Qu(a, null, y, p)) : pr(n, a, y, p), a.memoizedState = o.state, f && Ud(a, l, !0), a.child;
  }
  function qd(n) {
    var a = n.stateNode;
    a.pendingContext ? Yl(n, a.pendingContext, a.pendingContext !== a.context) : a.context && Yl(n, a.context, !1), Ku(n, a.containerInfo);
  }
  var _n = { dehydrated: null, retryLane: 0 };
  function Mi(n, a, l) {
    var o = a.pendingProps, f = rn.current, p = !1, m;
    return (m = (a.flags & 64) !== 0) || (m = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), m ? (p = !0, a.flags &= -65) : n !== null && n.memoizedState === null || o.fallback === void 0 || o.unstable_avoidThisFallback === !0 || (f |= 1), Ve(rn, f & 1), n === null ? (o.fallback !== void 0 && xi(a), n = o.children, f = o.fallback, p ? (n = Qd(a, n, f, l), a.child.memoizedState = { baseLanes: l }, a.memoizedState = _n, n) : typeof o.unstable_expectedLoadTime == "number" ? (n = Qd(a, n, f, l), a.child.memoizedState = { baseLanes: l }, a.memoizedState = _n, a.lanes = 33554432, n) : (l = Rl({ mode: "visible", children: n }, a.mode, l, null), l.return = a, a.child = l)) : n.memoizedState !== null ? p ? (o = Ni(n, a, o.children, o.fallback, l), p = a.child, f = n.child.memoizedState, p.memoizedState = f === null ? { baseLanes: l } : { baseLanes: f.baseLanes | l }, p.childLanes = n.childLanes & ~l, a.memoizedState = _n, o) : (l = Pn(n, a, o.children, l), a.memoizedState = null, l) : p ? (o = Ni(n, a, o.children, o.fallback, l), p = a.child, f = n.child.memoizedState, p.memoizedState = f === null ? { baseLanes: l } : { baseLanes: f.baseLanes | l }, p.childLanes = n.childLanes & ~l, a.memoizedState = _n, o) : (l = Pn(n, a, o.children, l), a.memoizedState = null, l);
  }
  function Qd(n, a, l, o) {
    var f = n.mode, p = n.child;
    return a = { mode: "hidden", children: a }, !(f & 2) && p !== null ? (p.childLanes = 0, p.pendingProps = a) : p = Rl(a, f, 0, null), l = _a(l, f, o, null), p.return = n, l.return = n, p.sibling = l, n.child = p, l;
  }
  function Pn(n, a, l, o) {
    var f = n.child;
    return n = f.sibling, l = Pi(f, { mode: "visible", children: l }), !(a.mode & 2) && (l.lanes = o), l.return = a, l.sibling = null, n !== null && (n.nextEffect = null, n.flags = 8, a.firstEffect = a.lastEffect = n), a.child = l;
  }
  function Ni(n, a, l, o, f) {
    var p = a.mode, m = n.child;
    n = m.sibling;
    var y = { mode: "hidden", children: l };
    return !(p & 2) && a.child !== m ? (l = a.child, l.childLanes = 0, l.pendingProps = y, m = l.lastEffect, m !== null ? (a.firstEffect = l.firstEffect, a.lastEffect = m, m.nextEffect = null) : a.firstEffect = a.lastEffect = null) : l = Pi(m, y), n !== null ? o = Pi(n, o) : (o = _a(o, p, f, null), o.flags |= 2), o.return = a, l.return = a, l.sibling = o, a.child = l, o;
  }
  function xt(n, a) {
    n.lanes |= a;
    var l = n.alternate;
    l !== null && (l.lanes |= a), jf(n.return, a);
  }
  function lu(n, a, l, o, f, p) {
    var m = n.memoizedState;
    m === null ? n.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: f, lastEffect: p } : (m.isBackwards = a, m.rendering = null, m.renderingStartTime = 0, m.last = o, m.tail = l, m.tailMode = f, m.lastEffect = p);
  }
  function mh(n, a, l) {
    var o = a.pendingProps, f = o.revealOrder, p = o.tail;
    if (pr(n, a, o.children, l), o = rn.current, o & 2)
      o = o & 1 | 2, a.flags |= 64;
    else {
      if (n !== null && n.flags & 64)
        e:
          for (n = a.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && xt(n, l);
            else if (n.tag === 19)
              xt(n, l);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === a)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === a)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Ve(rn, o), !(a.mode & 2))
      a.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (l = a.child, f = null; l !== null; )
            n = l.alternate, n !== null && Zu(n) === null && (f = l), l = l.sibling;
          l = f, l === null ? (f = a.child, a.child = null) : (f = l.sibling, l.sibling = null), lu(a, !1, f, l, p, a.lastEffect);
          break;
        case "backwards":
          for (l = null, f = a.child, a.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && Zu(n) === null) {
              a.child = f;
              break;
            }
            n = f.sibling, f.sibling = l, l = f, f = n;
          }
          lu(a, !0, l, null, p, a.lastEffect);
          break;
        case "together":
          lu(a, !1, null, null, void 0, a.lastEffect);
          break;
        default:
          a.memoizedState = null;
      }
    return a.child;
  }
  function Xa(n, a, l) {
    if (n !== null && (a.dependencies = n.dependencies), yl |= a.lanes, l & a.childLanes) {
      if (n !== null && a.child !== n.child)
        throw Error(z(153));
      if (a.child !== null) {
        for (n = a.child, l = Pi(n, n.pendingProps), a.child = l, l.return = a; n.sibling !== null; )
          n = n.sibling, l = l.sibling = Pi(n, n.pendingProps), l.return = a;
        l.sibling = null;
      }
      return a.child;
    }
    return null;
  }
  var gs, uu, Gd, ec;
  gs = function(n, a) {
    for (var l = a.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === a)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === a)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, uu = function() {
  }, Gd = function(n, a, l, o) {
    var f = n.memoizedProps;
    if (f !== o) {
      n = a.stateNode, pl(Sa.current);
      var p = null;
      switch (l) {
        case "input":
          f = Gn(n, f), o = Gn(n, o), p = [];
          break;
        case "option":
          f = fr(n, f), o = fr(n, o), p = [];
          break;
        case "select":
          f = I({}, f, { value: void 0 }), o = I({}, o, { value: void 0 }), p = [];
          break;
        case "textarea":
          f = Wt(n, f), o = Wt(n, o), p = [];
          break;
        default:
          typeof f.onClick != "function" && typeof o.onClick == "function" && (n.onclick = rs);
      }
      Nr(l, o);
      var m;
      l = null;
      for (U in f)
        if (!o.hasOwnProperty(U) && f.hasOwnProperty(U) && f[U] != null)
          if (U === "style") {
            var y = f[U];
            for (m in y)
              y.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            U !== "dangerouslySetInnerHTML" && U !== "children" && U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && U !== "autoFocus" && (Xe.hasOwnProperty(U) ? p || (p = []) : (p = p || []).push(U, null));
      for (U in o) {
        var R = o[U];
        if (y = f != null ? f[U] : void 0, o.hasOwnProperty(U) && R !== y && (R != null || y != null))
          if (U === "style")
            if (y) {
              for (m in y)
                !y.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in R)
                R.hasOwnProperty(m) && y[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
            } else
              l || (p || (p = []), p.push(U, l)), l = R;
          else
            U === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, y = y ? y.__html : void 0, R != null && y !== R && (p = p || []).push(U, R)) : U === "children" ? typeof R != "string" && typeof R != "number" || (p = p || []).push(U, "" + R) : U !== "suppressContentEditableWarning" && U !== "suppressHydrationWarning" && (Xe.hasOwnProperty(U) ? (R != null && U === "onScroll" && Vt("scroll", n), p || y === R || (p = [])) : typeof R == "object" && R !== null && R.$$typeof === ge ? R.toString() : (p = p || []).push(U, R));
      }
      l && (p = p || []).push(
        "style",
        l
      );
      var U = p;
      (a.updateQueue = U) && (a.flags |= 4);
    }
  }, ec = function(n, a, l, o) {
    l !== o && (a.flags |= 4);
  };
  function io(n, a) {
    if (!Ca)
      switch (n.tailMode) {
        case "hidden":
          a = n.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? a || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function yh(n, a, l) {
    var o = a.pendingProps;
    switch (a.tag) {
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
        return null;
      case 1:
        return zn(a.type) && ma(), null;
      case 3:
        return Kl(), Je(Un), Je(Qt), ki(), o = a.stateNode, o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (eo(a) ? a.flags |= 4 : o.hydrate || (a.flags |= 256)), uu(a), null;
      case 5:
        Bf(a);
        var f = pl(Xu.current);
        if (l = a.type, n !== null && a.stateNode != null)
          Gd(n, a, l, o, f), n.ref !== a.ref && (a.flags |= 128);
        else {
          if (!o) {
            if (a.stateNode === null)
              throw Error(z(166));
            return null;
          }
          if (n = pl(Sa.current), eo(a)) {
            o = a.stateNode, l = a.type;
            var p = a.memoizedProps;
            switch (o[ha] = a, o[ls] = p, l) {
              case "dialog":
                Vt("cancel", o), Vt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", o);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Bl.length; n++)
                  Vt(Bl[n], o);
                break;
              case "source":
                Vt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Vt("error", o), Vt("load", o);
                break;
              case "details":
                Vt("toggle", o);
                break;
              case "input":
                La(o, p), Vt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!p.multiple }, Vt("invalid", o);
                break;
              case "textarea":
                Ua(o, p), Vt("invalid", o);
            }
            Nr(l, p), n = null;
            for (var m in p)
              p.hasOwnProperty(m) && (f = p[m], m === "children" ? typeof f == "string" ? o.textContent !== f && (n = ["children", f]) : typeof f == "number" && o.textContent !== "" + f && (n = ["children", "" + f]) : Xe.hasOwnProperty(m) && f != null && m === "onScroll" && Vt("scroll", o));
            switch (l) {
              case "input":
                nn(o), Aa(o, p, !0);
                break;
              case "textarea":
                nn(o), $r(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (o.onclick = rs);
            }
            o = n, a.updateQueue = o, o !== null && (a.flags |= 4);
          } else {
            switch (m = f.nodeType === 9 ? f : f.ownerDocument, n === ne.html && (n = me(l)), n === ne.html ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[ha] = a, n[ls] = o, gs(n, a, !1, !1), a.stateNode = n, m = Yr(l, o), l) {
              case "dialog":
                Vt("cancel", n), Vt("close", n), f = o;
                break;
              case "iframe":
              case "object":
              case "embed":
                Vt("load", n), f = o;
                break;
              case "video":
              case "audio":
                for (f = 0; f < Bl.length; f++)
                  Vt(Bl[f], n);
                f = o;
                break;
              case "source":
                Vt("error", n), f = o;
                break;
              case "img":
              case "image":
              case "link":
                Vt("error", n), Vt("load", n), f = o;
                break;
              case "details":
                Vt("toggle", n), f = o;
                break;
              case "input":
                La(n, o), f = Gn(n, o), Vt("invalid", n);
                break;
              case "option":
                f = fr(n, o);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!o.multiple }, f = I({}, o, { value: void 0 }), Vt("invalid", n);
                break;
              case "textarea":
                Ua(n, o), f = Wt(n, o), Vt("invalid", n);
                break;
              default:
                f = o;
            }
            Nr(l, f);
            var y = f;
            for (p in y)
              if (y.hasOwnProperty(p)) {
                var R = y[p];
                p === "style" ? Vn(n, R) : p === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && Lt(n, R)) : p === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && At(n, R) : typeof R == "number" && At(n, "" + R) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Xe.hasOwnProperty(p) ? R != null && p === "onScroll" && Vt("scroll", n) : R != null && we(n, p, R, m));
              }
            switch (l) {
              case "input":
                nn(n), Aa(n, o, !1);
                break;
              case "textarea":
                nn(n), $r(n);
                break;
              case "option":
                o.value != null && n.setAttribute("value", "" + bt(o.value));
                break;
              case "select":
                n.multiple = !!o.multiple, p = o.value, p != null ? Ht(n, !!o.multiple, p, !1) : o.defaultValue != null && Ht(n, !!o.multiple, o.defaultValue, !0);
                break;
              default:
                typeof f.onClick == "function" && (n.onclick = rs);
            }
            Wl(l, o) && (a.flags |= 4);
          }
          a.ref !== null && (a.flags |= 128);
        }
        return null;
      case 6:
        if (n && a.stateNode != null)
          ec(n, a, n.memoizedProps, o);
        else {
          if (typeof o != "string" && a.stateNode === null)
            throw Error(z(166));
          l = pl(Xu.current), pl(Sa.current), eo(a) ? (o = a.stateNode, l = a.memoizedProps, o[ha] = a, o.nodeValue !== l && (a.flags |= 4)) : (o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ha] = a, a.stateNode = o);
        }
        return null;
      case 13:
        return Je(rn), o = a.memoizedState, a.flags & 64 ? (a.lanes = l, a) : (o = o !== null, l = !1, n === null ? a.memoizedProps.fallback !== void 0 && eo(a) : l = n.memoizedState !== null, o && !l && a.mode & 2 && (n === null && a.memoizedProps.unstable_avoidThisFallback !== !0 || rn.current & 1 ? xn === 0 && (xn = 3) : ((xn === 0 || xn === 3) && (xn = 4), ur === null || !(yl & 134217727) && !(ba & 134217727) || cu(ur, Fn))), (o || l) && (a.flags |= 4), null);
      case 4:
        return Kl(), uu(a), n === null && _f(a.stateNode.containerInfo), null;
      case 10:
        return cs(a), null;
      case 17:
        return zn(a.type) && ma(), null;
      case 19:
        if (Je(rn), o = a.memoizedState, o === null)
          return null;
        if (p = (a.flags & 64) !== 0, m = o.rendering, m === null)
          if (p)
            io(o, !1);
          else {
            if (xn !== 0 || n !== null && n.flags & 64)
              for (n = a.child; n !== null; ) {
                if (m = Zu(n), m !== null) {
                  for (a.flags |= 64, io(o, !1), p = m.updateQueue, p !== null && (a.updateQueue = p, a.flags |= 4), o.lastEffect === null && (a.firstEffect = null), a.lastEffect = o.lastEffect, o = l, l = a.child; l !== null; )
                    p = l, n = o, p.flags &= 2, p.nextEffect = null, p.firstEffect = null, p.lastEffect = null, m = p.alternate, m === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = m.childLanes, p.lanes = m.lanes, p.child = m.child, p.memoizedProps = m.memoizedProps, p.memoizedState = m.memoizedState, p.updateQueue = m.updateQueue, p.type = m.type, n = m.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ve(rn, rn.current & 1 | 2), a.child;
                }
                n = n.sibling;
              }
            o.tail !== null && jn() > gl && (a.flags |= 64, p = !0, io(o, !1), a.lanes = 33554432);
          }
        else {
          if (!p)
            if (n = Zu(m), n !== null) {
              if (a.flags |= 64, p = !0, l = n.updateQueue, l !== null && (a.updateQueue = l, a.flags |= 4), io(o, !0), o.tail === null && o.tailMode === "hidden" && !m.alternate && !Ca)
                return a = a.lastEffect = o.lastEffect, a !== null && (a.nextEffect = null), null;
            } else
              2 * jn() - o.renderingStartTime > gl && l !== 1073741824 && (a.flags |= 64, p = !0, io(o, !1), a.lanes = 33554432);
          o.isBackwards ? (m.sibling = a.child, a.child = m) : (l = o.last, l !== null ? l.sibling = m : a.child = m, o.last = m);
        }
        return o.tail !== null ? (l = o.tail, o.rendering = l, o.tail = l.sibling, o.lastEffect = a.lastEffect, o.renderingStartTime = jn(), l.sibling = null, a = rn.current, Ve(rn, p ? a & 1 | 2 : a & 1), l) : null;
      case 23:
      case 24:
        return dc(), n !== null && n.memoizedState !== null != (a.memoizedState !== null) && o.mode !== "unstable-defer-without-hiding" && (a.flags |= 4), null;
    }
    throw Error(z(156, a.tag));
  }
  function Xd(n) {
    switch (n.tag) {
      case 1:
        zn(n.type) && ma();
        var a = n.flags;
        return a & 4096 ? (n.flags = a & -4097 | 64, n) : null;
      case 3:
        if (Kl(), Je(Un), Je(Qt), ki(), a = n.flags, a & 64)
          throw Error(z(285));
        return n.flags = a & -4097 | 64, n;
      case 5:
        return Bf(n), null;
      case 13:
        return Je(rn), a = n.flags, a & 4096 ? (n.flags = a & -4097 | 64, n) : null;
      case 19:
        return Je(rn), null;
      case 4:
        return Kl(), null;
      case 10:
        return cs(n), null;
      case 23:
      case 24:
        return dc(), null;
      default:
        return null;
    }
  }
  function tc(n, a) {
    try {
      var l = "", o = a;
      do
        l += sn(o), o = o.return;
      while (o);
      var f = l;
    } catch (p) {
      f = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: a, stack: f };
  }
  function nc(n, a) {
    try {
      console.error(a.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Kd = typeof WeakMap == "function" ? WeakMap : Map;
  function Zd(n, a, l) {
    l = Zr(-1, l), l.tag = 3, l.payload = { element: null };
    var o = a.value;
    return l.callback = function() {
      co || (co = !0, uc = o), nc(n, a);
    }, l;
  }
  function Jd(n, a, l) {
    l = Zr(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = a.value;
      l.payload = function() {
        return nc(n, a), o(f);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (l.callback = function() {
      typeof o != "function" && (Ta === null ? Ta = /* @__PURE__ */ new Set([this]) : Ta.add(this), nc(n, a));
      var m = a.stack;
      this.componentDidCatch(a.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  var gh = typeof WeakSet == "function" ? WeakSet : Set;
  function ep(n) {
    var a = n.ref;
    if (a !== null)
      if (typeof a == "function")
        try {
          a(null);
        } catch (l) {
          ji(n, l);
        }
      else
        a.current = null;
  }
  function Sh(n, a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (a.flags & 256 && n !== null) {
          var l = n.memoizedProps, o = n.memoizedState;
          n = a.stateNode, a = n.getSnapshotBeforeUpdate(a.elementType === a.type ? l : Rn(a.type, l), o), n.__reactInternalSnapshotBeforeUpdate = a;
        }
        return;
      case 3:
        a.flags & 256 && as(a.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(z(163));
  }
  function rc(n, a, l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (a = l.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          n = a = a.next;
          do {
            if ((n.tag & 3) === 3) {
              var o = n.create;
              n.destroy = o();
            }
            n = n.next;
          } while (n !== a);
        }
        if (a = l.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
          n = a = a.next;
          do {
            var f = n;
            o = f.next, f = f.tag, f & 4 && f & 1 && (vc(l, n), dp(l, n)), n = o;
          } while (n !== a);
        }
        return;
      case 1:
        n = l.stateNode, l.flags & 4 && (a === null ? n.componentDidMount() : (o = l.elementType === l.type ? a.memoizedProps : Rn(l.type, a.memoizedProps), n.componentDidUpdate(
          o,
          a.memoizedState,
          n.__reactInternalSnapshotBeforeUpdate
        ))), a = l.updateQueue, a !== null && Ff(l, a, n);
        return;
      case 3:
        if (a = l.updateQueue, a !== null) {
          if (n = null, l.child !== null)
            switch (l.child.tag) {
              case 5:
                n = l.child.stateNode;
                break;
              case 1:
                n = l.child.stateNode;
            }
          Ff(l, a, n);
        }
        return;
      case 5:
        n = l.stateNode, a === null && l.flags & 4 && Wl(l.type, l.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        l.memoizedState === null && (l = l.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null && Io(l))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(z(163));
  }
  function ac(n, a) {
    for (var l = n; ; ) {
      if (l.tag === 5) {
        var o = l.stateNode;
        if (a)
          o = o.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
        else {
          o = l.stateNode;
          var f = l.memoizedProps.style;
          f = f != null && f.hasOwnProperty("display") ? f.display : null, o.style.display = Pt("display", f);
        }
      } else if (l.tag === 6)
        l.stateNode.nodeValue = a ? "" : l.memoizedProps;
      else if ((l.tag !== 23 && l.tag !== 24 || l.memoizedState === null || l === n) && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === n)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === n)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }
  function tp(n, a) {
    if (ll && typeof ll.onCommitFiberUnmount == "function")
      try {
        ll.onCommitFiberUnmount(Of, a);
      } catch {
      }
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = a.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var l = n = n.next;
          do {
            var o = l, f = o.destroy;
            if (o = o.tag, f !== void 0)
              if (o & 4)
                vc(a, l);
              else {
                o = a;
                try {
                  f();
                } catch (p) {
                  ji(o, p);
                }
              }
            l = l.next;
          } while (l !== n);
        }
        break;
      case 1:
        if (ep(a), n = a.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = a.memoizedProps, n.state = a.memoizedState, n.componentWillUnmount();
          } catch (p) {
            ji(
              a,
              p
            );
          }
        break;
      case 5:
        ep(a);
        break;
      case 4:
        ip(n, a);
    }
  }
  function np(n) {
    n.alternate = null, n.child = null, n.dependencies = null, n.firstEffect = null, n.lastEffect = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.return = null, n.updateQueue = null;
  }
  function rp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ap(n) {
    e: {
      for (var a = n.return; a !== null; ) {
        if (rp(a))
          break e;
        a = a.return;
      }
      throw Error(z(160));
    }
    var l = a;
    switch (a = l.stateNode, l.tag) {
      case 5:
        var o = !1;
        break;
      case 3:
        a = a.containerInfo, o = !0;
        break;
      case 4:
        a = a.containerInfo, o = !0;
        break;
      default:
        throw Error(z(161));
    }
    l.flags & 16 && (At(a, ""), l.flags &= -17);
    e:
      t:
        for (l = n; ; ) {
          for (; l.sibling === null; ) {
            if (l.return === null || rp(l.return)) {
              l = null;
              break e;
            }
            l = l.return;
          }
          for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
            if (l.flags & 2 || l.child === null || l.tag === 4)
              continue t;
            l.child.return = l, l = l.child;
          }
          if (!(l.flags & 2)) {
            l = l.stateNode;
            break e;
          }
        }
    o ? lo(n, l, a) : uo(n, l, a);
  }
  function lo(n, a, l) {
    var o = n.tag, f = o === 5 || o === 6;
    if (f)
      n = f ? n.stateNode : n.stateNode.instance, a ? l.nodeType === 8 ? l.parentNode.insertBefore(n, a) : l.insertBefore(n, a) : (l.nodeType === 8 ? (a = l.parentNode, a.insertBefore(n, l)) : (a = l, a.appendChild(n)), l = l._reactRootContainer, l != null || a.onclick !== null || (a.onclick = rs));
    else if (o !== 4 && (n = n.child, n !== null))
      for (lo(n, a, l), n = n.sibling; n !== null; )
        lo(n, a, l), n = n.sibling;
  }
  function uo(n, a, l) {
    var o = n.tag, f = o === 5 || o === 6;
    if (f)
      n = f ? n.stateNode : n.stateNode.instance, a ? l.insertBefore(n, a) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (uo(n, a, l), n = n.sibling; n !== null; )
        uo(n, a, l), n = n.sibling;
  }
  function ip(n, a) {
    for (var l = a, o = !1, f, p; ; ) {
      if (!o) {
        o = l.return;
        e:
          for (; ; ) {
            if (o === null)
              throw Error(z(160));
            switch (f = o.stateNode, o.tag) {
              case 5:
                p = !1;
                break e;
              case 3:
                f = f.containerInfo, p = !0;
                break e;
              case 4:
                f = f.containerInfo, p = !0;
                break e;
            }
            o = o.return;
          }
        o = !0;
      }
      if (l.tag === 5 || l.tag === 6) {
        e:
          for (var m = n, y = l, R = y; ; )
            if (tp(m, R), R.child !== null && R.tag !== 4)
              R.child.return = R, R = R.child;
            else {
              if (R === y)
                break e;
              for (; R.sibling === null; ) {
                if (R.return === null || R.return === y)
                  break e;
                R = R.return;
              }
              R.sibling.return = R.return, R = R.sibling;
            }
        p ? (m = f, y = l.stateNode, m.nodeType === 8 ? m.parentNode.removeChild(y) : m.removeChild(y)) : f.removeChild(l.stateNode);
      } else if (l.tag === 4) {
        if (l.child !== null) {
          f = l.stateNode.containerInfo, p = !0, l.child.return = l, l = l.child;
          continue;
        }
      } else if (tp(n, l), l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === a)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === a)
          return;
        l = l.return, l.tag === 4 && (o = !1);
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }
  function ic(n, a) {
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var l = a.updateQueue;
        if (l = l !== null ? l.lastEffect : null, l !== null) {
          var o = l = l.next;
          do
            (o.tag & 3) === 3 && (n = o.destroy, o.destroy = void 0, n !== void 0 && n()), o = o.next;
          while (o !== l);
        }
        return;
      case 1:
        return;
      case 5:
        if (l = a.stateNode, l != null) {
          o = a.memoizedProps;
          var f = n !== null ? n.memoizedProps : o;
          n = a.type;
          var p = a.updateQueue;
          if (a.updateQueue = null, p !== null) {
            for (l[ls] = o, n === "input" && o.type === "radio" && o.name != null && Xn(l, o), Yr(n, f), a = Yr(n, o), f = 0; f < p.length; f += 2) {
              var m = p[f], y = p[f + 1];
              m === "style" ? Vn(l, y) : m === "dangerouslySetInnerHTML" ? Lt(l, y) : m === "children" ? At(l, y) : we(l, m, y, a);
            }
            switch (n) {
              case "input":
                Or(l, o);
                break;
              case "textarea":
                oa(l, o);
                break;
              case "select":
                n = l._wrapperState.wasMultiple, l._wrapperState.wasMultiple = !!o.multiple, p = o.value, p != null ? Ht(l, !!o.multiple, p, !1) : n !== !!o.multiple && (o.defaultValue != null ? Ht(l, !!o.multiple, o.defaultValue, !0) : Ht(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (a.stateNode === null)
          throw Error(z(162));
        a.stateNode.nodeValue = a.memoizedProps;
        return;
      case 3:
        l = a.stateNode, l.hydrate && (l.hydrate = !1, Io(l.containerInfo));
        return;
      case 12:
        return;
      case 13:
        a.memoizedState !== null && (fo = jn(), ac(a.child, !0)), lp(a);
        return;
      case 19:
        lp(a);
        return;
      case 17:
        return;
      case 23:
      case 24:
        ac(a, a.memoizedState !== null);
        return;
    }
    throw Error(z(163));
  }
  function lp(n) {
    var a = n.updateQueue;
    if (a !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new gh()), a.forEach(function(o) {
        var f = wh.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(f, f));
      });
    }
  }
  function Eh(n, a) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (a = a.memoizedState, a !== null && a.dehydrated === null) : !1;
  }
  var oo = Math.ceil, ou = ee.ReactCurrentDispatcher, ml = ee.ReactCurrentOwner, qe = 0, ur = null, pn = null, Fn = 0, Ra = 0, su = ir(0), xn = 0, Yn = null, ea = 0, yl = 0, ba = 0, lc = 0, so = null, fo = 0, gl = 1 / 0;
  function fu() {
    gl = jn() + 500;
  }
  var de = null, co = !1, uc = null, Ta = null, Li = !1, Sl = null, po = 90, oc = [], sc = [], Ka = null, vo = 0, Ss = null, Es = -1, Za = 0, Cs = 0, ho = null, Rs = !1;
  function xr() {
    return qe & 48 ? jn() : Es !== -1 ? Es : Es = jn();
  }
  function wa(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return Ql() === 99 ? 1 : 2;
    if (Za === 0 && (Za = ea), Ti.transition !== 0) {
      Cs !== 0 && (Cs = so !== null ? so.pendingLanes : 0), n = Za;
      var a = 4186112 & ~Cs;
      return a &= -a, a === 0 && (n = 4186112 & ~n, a = n & -n, a === 0 && (a = 8192)), a;
    }
    return n = Ql(), qe & 4 && n === 98 ? n = An(12, Za) : (n = $t(n), n = An(n, Za)), n;
  }
  function Ai(n, a, l) {
    if (50 < vo)
      throw vo = 0, Ss = null, Error(z(185));
    if (n = bs(n, a), n === null)
      return null;
    vi(n, a, l), n === ur && (ba |= a, xn === 4 && cu(n, Fn));
    var o = Ql();
    a === 1 ? qe & 8 && !(qe & 48) ? cc(n) : (Fr(n, l), qe === 0 && (fu(), Cn())) : (!(qe & 4) || o !== 98 && o !== 99 || (Ka === null ? Ka = /* @__PURE__ */ new Set([n]) : Ka.add(n)), Fr(n, l)), so = n;
  }
  function bs(n, a) {
    n.lanes |= a;
    var l = n.alternate;
    for (l !== null && (l.lanes |= a), l = n, n = n.return; n !== null; )
      n.childLanes |= a, l = n.alternate, l !== null && (l.childLanes |= a), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  function Fr(n, a) {
    for (var l = n.callbackNode, o = n.suspendedLanes, f = n.pingedLanes, p = n.expirationTimes, m = n.pendingLanes; 0 < m; ) {
      var y = 31 - va(m), R = 1 << y, U = p[y];
      if (U === -1) {
        if (!(R & o) || R & f) {
          U = a, Tt(R);
          var oe = ke;
          p[y] = 10 <= oe ? U + 250 : 6 <= oe ? U + 5e3 : -1;
        }
      } else
        U <= a && (n.expiredLanes |= R);
      m &= ~R;
    }
    if (o = cn(n, n === ur ? Fn : 0), a = ke, o === 0)
      l !== null && (l !== Af && Iu(l), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (l !== null) {
        if (n.callbackPriority === a)
          return;
        l !== Af && Iu(l);
      }
      a === 15 ? (l = cc.bind(null, n), ya === null ? (ya = [l], ss = Kr(os, Ia)) : ya.push(l), l = Af) : a === 14 ? l = ol(99, cc.bind(null, n)) : (l = en(a), l = ol(l, fc.bind(null, n))), n.callbackPriority = a, n.callbackNode = l;
    }
  }
  function fc(n) {
    if (Es = -1, Cs = Za = 0, qe & 48)
      throw Error(z(327));
    var a = n.callbackNode;
    if (zi() && n.callbackNode !== a)
      return null;
    var l = cn(n, n === ur ? Fn : 0);
    if (l === 0)
      return null;
    var o = l, f = qe;
    qe |= 16;
    var p = du();
    (ur !== n || Fn !== o) && (fu(), El(n, o));
    do
      try {
        fp();
        break;
      } catch (y) {
        ws(n, y);
      }
    while (1);
    if (zf(), ou.current = p, qe = f, pn !== null ? o = 0 : (ur = null, Fn = 0, o = xn), ea & ba)
      El(n, 0);
    else if (o !== 0) {
      if (o === 2 && (qe |= 64, n.hydrate && (n.hydrate = !1, as(n.containerInfo)), l = Ln(n), l !== 0 && (o = mo(n, l))), o === 1)
        throw a = Yn, El(n, 0), cu(n, l), Fr(n, jn()), a;
      switch (n.finishedWork = n.current.alternate, n.finishedLanes = l, o) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          Ui(n);
          break;
        case 3:
          if (cu(n, l), (l & 62914560) === l && (o = fo + 500 - jn(), 10 < o)) {
            if (cn(n, 0) !== 0)
              break;
            if (f = n.suspendedLanes, (f & l) !== l) {
              xr(), n.pingedLanes |= n.suspendedLanes & f;
              break;
            }
            n.timeoutHandle = $l(Ui.bind(null, n), o);
            break;
          }
          Ui(n);
          break;
        case 4:
          if (cu(n, l), (l & 4186112) === l)
            break;
          for (o = n.eventTimes, f = -1; 0 < l; ) {
            var m = 31 - va(l);
            p = 1 << m, m = o[m], m > f && (f = m), l &= ~p;
          }
          if (l = f, l = jn() - l, l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * oo(l / 1960)) - l, 10 < l) {
            n.timeoutHandle = $l(Ui.bind(null, n), l);
            break;
          }
          Ui(n);
          break;
        case 5:
          Ui(n);
          break;
        default:
          throw Error(z(329));
      }
    }
    return Fr(n, jn()), n.callbackNode === a ? fc.bind(null, n) : null;
  }
  function cu(n, a) {
    for (a &= ~lc, a &= ~ba, n.suspendedLanes |= a, n.pingedLanes &= ~a, n = n.expirationTimes; 0 < a; ) {
      var l = 31 - va(a), o = 1 << l;
      n[l] = -1, a &= ~o;
    }
  }
  function cc(n) {
    if (qe & 48)
      throw Error(z(327));
    if (zi(), n === ur && n.expiredLanes & Fn) {
      var a = Fn, l = mo(n, a);
      ea & ba && (a = cn(n, a), l = mo(n, a));
    } else
      a = cn(n, 0), l = mo(n, a);
    if (n.tag !== 0 && l === 2 && (qe |= 64, n.hydrate && (n.hydrate = !1, as(n.containerInfo)), a = Ln(n), a !== 0 && (l = mo(n, a))), l === 1)
      throw l = Yn, El(n, 0), cu(n, a), Fr(n, jn()), l;
    return n.finishedWork = n.current.alternate, n.finishedLanes = a, Ui(n), Fr(n, jn()), null;
  }
  function Ch() {
    if (Ka !== null) {
      var n = Ka;
      Ka = null, n.forEach(function(a) {
        a.expiredLanes |= 24 & a.pendingLanes, Fr(a, jn());
      });
    }
    Cn();
  }
  function up(n, a) {
    var l = qe;
    qe |= 1;
    try {
      return n(a);
    } finally {
      qe = l, qe === 0 && (fu(), Cn());
    }
  }
  function op(n, a) {
    var l = qe;
    qe &= -2, qe |= 8;
    try {
      return n(a);
    } finally {
      qe = l, qe === 0 && (fu(), Cn());
    }
  }
  function Ts(n, a) {
    Ve(su, Ra), Ra |= a, ea |= a;
  }
  function dc() {
    Ra = su.current, Je(su);
  }
  function El(n, a) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Md(l)), pn !== null)
      for (l = pn.return; l !== null; ) {
        var o = l;
        switch (o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ma();
            break;
          case 3:
            Kl(), Je(Un), Je(Qt), ki();
            break;
          case 5:
            Bf(o);
            break;
          case 4:
            Kl();
            break;
          case 13:
            Je(rn);
            break;
          case 19:
            Je(rn);
            break;
          case 10:
            cs(o);
            break;
          case 23:
          case 24:
            dc();
        }
        l = l.return;
      }
    ur = n, pn = Pi(n.current, null), Fn = Ra = ea = a, xn = 0, Yn = null, lc = ba = yl = 0;
  }
  function ws(n, a) {
    do {
      var l = pn;
      try {
        if (zf(), Jl.current = ys, to) {
          for (var o = Gt.memoizedState; o !== null; ) {
            var f = o.queue;
            f !== null && (f.pending = null), o = o.next;
          }
          to = !1;
        }
        if (eu = 0, wn = Tn = Gt = null, Di = !1, ml.current = null, l === null || l.return === null) {
          xn = 1, Yn = a, pn = null;
          break;
        }
        e: {
          var p = n, m = l.return, y = l, R = a;
          if (a = Fn, y.flags |= 2048, y.firstEffect = y.lastEffect = null, R !== null && typeof R == "object" && typeof R.then == "function") {
            var U = R;
            if (!(y.mode & 2)) {
              var oe = y.alternate;
              oe ? (y.updateQueue = oe.updateQueue, y.memoizedState = oe.memoizedState, y.lanes = oe.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var Qe = (rn.current & 1) !== 0, Q = m;
            do {
              var Te;
              if (Te = Q.tag === 13) {
                var Ye = Q.memoizedState;
                if (Ye !== null)
                  Te = Ye.dehydrated !== null;
                else {
                  var ze = Q.memoizedProps;
                  Te = ze.fallback === void 0 ? !1 : ze.unstable_avoidThisFallback !== !0 ? !0 : !Qe;
                }
              }
              if (Te) {
                var D = Q.updateQueue;
                if (D === null) {
                  var w = /* @__PURE__ */ new Set();
                  w.add(U), Q.updateQueue = w;
                } else
                  D.add(U);
                if (!(Q.mode & 2)) {
                  if (Q.flags |= 64, y.flags |= 16384, y.flags &= -2981, y.tag === 1)
                    if (y.alternate === null)
                      y.tag = 17;
                    else {
                      var x = Zr(-1, 1);
                      x.tag = 2, Wa(y, x);
                    }
                  y.lanes |= 1;
                  break e;
                }
                R = void 0, y = a;
                var F = p.pingCache;
                if (F === null ? (F = p.pingCache = new Kd(), R = /* @__PURE__ */ new Set(), F.set(U, R)) : (R = F.get(U), R === void 0 && (R = /* @__PURE__ */ new Set(), F.set(U, R))), !R.has(y)) {
                  R.add(y);
                  var B = Th.bind(null, p, U, y);
                  U.then(B, B);
                }
                Q.flags |= 4096, Q.lanes = a;
                break e;
              }
              Q = Q.return;
            } while (Q !== null);
            R = Error((Nt(y.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          xn !== 5 && (xn = 2), R = tc(R, y), Q = m;
          do {
            switch (Q.tag) {
              case 3:
                p = R, Q.flags |= 4096, a &= -a, Q.lanes |= a;
                var et = Zd(Q, p, a);
                Vd(Q, et);
                break e;
              case 1:
                p = R;
                var pe = Q.type, Ge = Q.stateNode;
                if (!(Q.flags & 64) && (typeof pe.getDerivedStateFromError == "function" || Ge !== null && typeof Ge.componentDidCatch == "function" && (Ta === null || !Ta.has(Ge)))) {
                  Q.flags |= 4096, a &= -a, Q.lanes |= a;
                  var rt = Jd(Q, p, a);
                  Vd(Q, rt);
                  break e;
                }
            }
            Q = Q.return;
          } while (Q !== null);
        }
        cp(l);
      } catch (tt) {
        a = tt, pn === l && l !== null && (pn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function du() {
    var n = ou.current;
    return ou.current = ys, n === null ? ys : n;
  }
  function mo(n, a) {
    var l = qe;
    qe |= 16;
    var o = du();
    ur === n && Fn === a || El(n, a);
    do
      try {
        sp();
        break;
      } catch (f) {
        ws(n, f);
      }
    while (1);
    if (zf(), qe = l, ou.current = o, pn !== null)
      throw Error(z(261));
    return ur = null, Fn = 0, xn;
  }
  function sp() {
    for (; pn !== null; )
      pc(pn);
  }
  function fp() {
    for (; pn !== null && !ch(); )
      pc(pn);
  }
  function pc(n) {
    var a = vp(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, a === null ? cp(n) : pn = a, ml.current = null;
  }
  function cp(n) {
    var a = n;
    do {
      var l = a.alternate;
      if (n = a.return, a.flags & 2048) {
        if (l = Xd(a), l !== null) {
          l.flags &= 2047, pn = l;
          return;
        }
        n !== null && (n.firstEffect = n.lastEffect = null, n.flags |= 2048);
      } else {
        if (l = yh(l, a, Ra), l !== null) {
          pn = l;
          return;
        }
        if (l = a, l.tag !== 24 && l.tag !== 23 || l.memoizedState === null || Ra & 1073741824 || !(l.mode & 4)) {
          for (var o = 0, f = l.child; f !== null; )
            o |= f.lanes | f.childLanes, f = f.sibling;
          l.childLanes = o;
        }
        n !== null && !(n.flags & 2048) && (n.firstEffect === null && (n.firstEffect = a.firstEffect), a.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = a.firstEffect), n.lastEffect = a.lastEffect), 1 < a.flags && (n.lastEffect !== null ? n.lastEffect.nextEffect = a : n.firstEffect = a, n.lastEffect = a));
      }
      if (a = a.sibling, a !== null) {
        pn = a;
        return;
      }
      pn = a = n;
    } while (a !== null);
    xn === 0 && (xn = 5);
  }
  function Ui(n) {
    var a = Ql();
    return ul(99, Rh.bind(null, n, a)), null;
  }
  function Rh(n, a) {
    do
      zi();
    while (Sl !== null);
    if (qe & 48)
      throw Error(z(327));
    var l = n.finishedWork;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(z(177));
    n.callbackNode = null;
    var o = l.lanes | l.childLanes, f = o, p = n.pendingLanes & ~f;
    n.pendingLanes = f, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= f, n.mutableReadLanes &= f, n.entangledLanes &= f, f = n.entanglements;
    for (var m = n.eventTimes, y = n.expirationTimes; 0 < p; ) {
      var R = 31 - va(p), U = 1 << R;
      f[R] = 0, m[R] = -1, y[R] = -1, p &= ~U;
    }
    if (Ka !== null && !(o & 24) && Ka.has(n) && Ka.delete(n), n === ur && (pn = ur = null, Fn = 0), 1 < l.flags ? l.lastEffect !== null ? (l.lastEffect.nextEffect = l, o = l.firstEffect) : o = l : o = l.firstEffect, o !== null) {
      if (f = qe, qe |= 32, ml.current = null, xf = Ou, m = Pu(), tl(m)) {
        if ("selectionStart" in m)
          y = { start: m.selectionStart, end: m.selectionEnd };
        else
          e:
            if (y = (y = m.ownerDocument) && y.defaultView || window, (U = y.getSelection && y.getSelection()) && U.rangeCount !== 0) {
              y = U.anchorNode, p = U.anchorOffset, R = U.focusNode, U = U.focusOffset;
              try {
                y.nodeType, R.nodeType;
              } catch {
                y = null;
                break e;
              }
              var oe = 0, Qe = -1, Q = -1, Te = 0, Ye = 0, ze = m, D = null;
              t:
                for (; ; ) {
                  for (var w; ze !== y || p !== 0 && ze.nodeType !== 3 || (Qe = oe + p), ze !== R || U !== 0 && ze.nodeType !== 3 || (Q = oe + U), ze.nodeType === 3 && (oe += ze.nodeValue.length), (w = ze.firstChild) !== null; )
                    D = ze, ze = w;
                  for (; ; ) {
                    if (ze === m)
                      break t;
                    if (D === y && ++Te === p && (Qe = oe), D === R && ++Ye === U && (Q = oe), (w = ze.nextSibling) !== null)
                      break;
                    ze = D, D = ze.parentNode;
                  }
                  ze = w;
                }
              y = Qe === -1 || Q === -1 ? null : { start: Qe, end: Q };
            } else
              y = null;
        y = y || { start: 0, end: 0 };
      } else
        y = null;
      kf = { focusedElem: m, selectionRange: y }, Ou = !1, ho = null, Rs = !1, de = o;
      do
        try {
          bh();
        } catch (tt) {
          if (de === null)
            throw Error(z(330));
          ji(de, tt), de = de.nextEffect;
        }
      while (de !== null);
      ho = null, de = o;
      do
        try {
          for (m = n; de !== null; ) {
            var x = de.flags;
            if (x & 16 && At(de.stateNode, ""), x & 128) {
              var F = de.alternate;
              if (F !== null) {
                var B = F.ref;
                B !== null && (typeof B == "function" ? B(null) : B.current = null);
              }
            }
            switch (x & 1038) {
              case 2:
                ap(de), de.flags &= -3;
                break;
              case 6:
                ap(de), de.flags &= -3, ic(de.alternate, de);
                break;
              case 1024:
                de.flags &= -1025;
                break;
              case 1028:
                de.flags &= -1025, ic(de.alternate, de);
                break;
              case 4:
                ic(de.alternate, de);
                break;
              case 8:
                y = de, ip(m, y);
                var et = y.alternate;
                np(y), et !== null && np(et);
            }
            de = de.nextEffect;
          }
        } catch (tt) {
          if (de === null)
            throw Error(z(330));
          ji(de, tt), de = de.nextEffect;
        }
      while (de !== null);
      if (B = kf, F = Pu(), x = B.focusedElem, m = B.selectionRange, F !== x && x && x.ownerDocument && Rf(x.ownerDocument.documentElement, x)) {
        for (m !== null && tl(x) && (F = m.start, B = m.end, B === void 0 && (B = F), "selectionStart" in x ? (x.selectionStart = F, x.selectionEnd = Math.min(B, x.value.length)) : (B = (F = x.ownerDocument || document) && F.defaultView || window, B.getSelection && (B = B.getSelection(), y = x.textContent.length, et = Math.min(m.start, y), m = m.end === void 0 ? et : Math.min(m.end, y), !B.extend && et > m && (y = m, m = et, et = y), y = xd(x, et), p = xd(x, m), y && p && (B.rangeCount !== 1 || B.anchorNode !== y.node || B.anchorOffset !== y.offset || B.focusNode !== p.node || B.focusOffset !== p.offset) && (F = F.createRange(), F.setStart(y.node, y.offset), B.removeAllRanges(), et > m ? (B.addRange(F), B.extend(p.node, p.offset)) : (F.setEnd(p.node, p.offset), B.addRange(F)))))), F = [], B = x; B = B.parentNode; )
          B.nodeType === 1 && F.push({ element: B, left: B.scrollLeft, top: B.scrollTop });
        for (typeof x.focus == "function" && x.focus(), x = 0; x < F.length; x++)
          B = F[x], B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
      }
      Ou = !!xf, kf = xf = null, n.current = l, de = o;
      do
        try {
          for (x = n; de !== null; ) {
            var pe = de.flags;
            if (pe & 36 && rc(x, de.alternate, de), pe & 128) {
              F = void 0;
              var Ge = de.ref;
              if (Ge !== null) {
                var rt = de.stateNode;
                switch (de.tag) {
                  case 5:
                    F = rt;
                    break;
                  default:
                    F = rt;
                }
                typeof Ge == "function" ? Ge(F) : Ge.current = F;
              }
            }
            de = de.nextEffect;
          }
        } catch (tt) {
          if (de === null)
            throw Error(z(330));
          ji(de, tt), de = de.nextEffect;
        }
      while (de !== null);
      de = null, Pd(), qe = f;
    } else
      n.current = l;
    if (Li)
      Li = !1, Sl = n, po = a;
    else
      for (de = o; de !== null; )
        a = de.nextEffect, de.nextEffect = null, de.flags & 8 && (pe = de, pe.sibling = null, pe.stateNode = null), de = a;
    if (o = n.pendingLanes, o === 0 && (Ta = null), o === 1 ? n === Ss ? vo++ : (vo = 0, Ss = n) : vo = 0, l = l.stateNode, ll && typeof ll.onCommitFiberRoot == "function")
      try {
        ll.onCommitFiberRoot(Of, l, void 0, (l.current.flags & 64) === 64);
      } catch {
      }
    if (Fr(n, jn()), co)
      throw co = !1, n = uc, uc = null, n;
    return qe & 8 || Cn(), null;
  }
  function bh() {
    for (; de !== null; ) {
      var n = de.alternate;
      Rs || ho === null || (de.flags & 8 ? fa(de, ho) && (Rs = !0) : de.tag === 13 && Eh(n, de) && fa(de, ho) && (Rs = !0));
      var a = de.flags;
      a & 256 && Sh(n, de), !(a & 512) || Li || (Li = !0, ol(97, function() {
        return zi(), null;
      })), de = de.nextEffect;
    }
  }
  function zi() {
    if (po !== 90) {
      var n = 97 < po ? 97 : po;
      return po = 90, ul(n, pp);
    }
    return !1;
  }
  function dp(n, a) {
    oc.push(a, n), Li || (Li = !0, ol(97, function() {
      return zi(), null;
    }));
  }
  function vc(n, a) {
    sc.push(a, n), Li || (Li = !0, ol(97, function() {
      return zi(), null;
    }));
  }
  function pp() {
    if (Sl === null)
      return !1;
    var n = Sl;
    if (Sl = null, qe & 48)
      throw Error(z(331));
    var a = qe;
    qe |= 32;
    var l = sc;
    sc = [];
    for (var o = 0; o < l.length; o += 2) {
      var f = l[o], p = l[o + 1], m = f.destroy;
      if (f.destroy = void 0, typeof m == "function")
        try {
          m();
        } catch (R) {
          if (p === null)
            throw Error(z(330));
          ji(p, R);
        }
    }
    for (l = oc, oc = [], o = 0; o < l.length; o += 2) {
      f = l[o], p = l[o + 1];
      try {
        var y = f.create;
        f.destroy = y();
      } catch (R) {
        if (p === null)
          throw Error(z(330));
        ji(p, R);
      }
    }
    for (y = n.current.firstEffect; y !== null; )
      n = y.nextEffect, y.nextEffect = null, y.flags & 8 && (y.sibling = null, y.stateNode = null), y = n;
    return qe = a, Cn(), !0;
  }
  function Cl(n, a, l) {
    a = tc(l, a), a = Zd(n, a, 1), Wa(n, a), a = xr(), n = bs(n, 1), n !== null && (vi(n, 1, a), Fr(n, a));
  }
  function ji(n, a) {
    if (n.tag === 3)
      Cl(n, n, a);
    else
      for (var l = n.return; l !== null; ) {
        if (l.tag === 3) {
          Cl(l, n, a);
          break;
        } else if (l.tag === 1) {
          var o = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ta === null || !Ta.has(o))) {
            n = tc(a, n);
            var f = Jd(l, n, 1);
            if (Wa(l, f), f = xr(), l = bs(l, 1), l !== null)
              vi(l, 1, f), Fr(l, f);
            else if (typeof o.componentDidCatch == "function" && (Ta === null || !Ta.has(o)))
              try {
                o.componentDidCatch(a, n);
              } catch {
              }
            break;
          }
        }
        l = l.return;
      }
  }
  function Th(n, a, l) {
    var o = n.pingCache;
    o !== null && o.delete(a), a = xr(), n.pingedLanes |= n.suspendedLanes & l, ur === n && (Fn & l) === l && (xn === 4 || xn === 3 && (Fn & 62914560) === Fn && 500 > jn() - fo ? El(n, 0) : lc |= l), Fr(n, a);
  }
  function wh(n, a) {
    var l = n.stateNode;
    l !== null && l.delete(a), a = 0, a === 0 && (a = n.mode, a & 2 ? a & 4 ? (Za === 0 && (Za = ea), a = Tr(62914560 & ~Za), a === 0 && (a = 4194304)) : a = Ql() === 99 ? 1 : 2 : a = 1), l = xr(), n = bs(n, a), n !== null && (vi(n, a, l), Fr(n, l));
  }
  var vp;
  vp = function(n, a, l) {
    var o = a.lanes;
    if (n !== null)
      if (n.memoizedProps !== a.pendingProps || Un.current)
        Pr = !0;
      else if (l & o)
        Pr = !!(n.flags & 16384);
      else {
        switch (Pr = !1, a.tag) {
          case 3:
            qd(a), Zl();
            break;
          case 5:
            Bd(a);
            break;
          case 1:
            zn(a.type) && zr(a);
            break;
          case 4:
            Ku(a, a.stateNode.containerInfo);
            break;
          case 10:
            o = a.memoizedProps.value;
            var f = a.type._context;
            Ve(wi, f._currentValue), f._currentValue = o;
            break;
          case 13:
            if (a.memoizedState !== null)
              return l & a.child.childLanes ? Mi(n, a, l) : (Ve(rn, rn.current & 1), a = Xa(n, a, l), a !== null ? a.sibling : null);
            Ve(rn, rn.current & 1);
            break;
          case 19:
            if (o = (l & a.childLanes) !== 0, n.flags & 64) {
              if (o)
                return mh(n, a, l);
              a.flags |= 64;
            }
            if (f = a.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ve(rn, rn.current), o)
              break;
            return null;
          case 23:
          case 24:
            return a.lanes = 0, iu(n, a, l);
        }
        return Xa(n, a, l);
      }
    else
      Pr = !1;
    switch (a.lanes = 0, a.tag) {
      case 2:
        if (o = a.type, n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), n = a.pendingProps, f = Dt(a, Qt.current), sl(a, l), f = Wf(null, a, o, n, f, l), a.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0) {
          if (a.tag = 1, a.memoizedState = null, a.updateQueue = null, zn(o)) {
            var p = !0;
            zr(a);
          } else
            p = !1;
          a.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Pf(a);
          var m = o.getDerivedStateFromProps;
          typeof m == "function" && $u(a, o, m, n), f.updater = Gl, a.stateNode = f, f._reactInternals = a, vs(a, o, n, l), a = Jf(null, a, o, !0, p, l);
        } else
          a.tag = 0, pr(null, a, f, l), a = a.child;
        return a;
      case 16:
        f = a.elementType;
        e: {
          switch (n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), n = a.pendingProps, p = f._init, f = p(f._payload), a.type = f, p = a.tag = xh(f), n = Rn(f, n), p) {
            case 0:
              a = Zf(null, a, f, n, l);
              break e;
            case 1:
              a = Yd(null, a, f, n, l);
              break e;
            case 11:
              a = Xf(null, a, f, n, l);
              break e;
            case 14:
              a = Kf(null, a, f, Rn(f.type, n), o, l);
              break e;
          }
          throw Error(z(306, f, ""));
        }
        return a;
      case 0:
        return o = a.type, f = a.pendingProps, f = a.elementType === o ? f : Rn(o, f), Zf(n, a, o, f, l);
      case 1:
        return o = a.type, f = a.pendingProps, f = a.elementType === o ? f : Rn(o, f), Yd(n, a, o, f, l);
      case 3:
        if (qd(a), o = a.updateQueue, n === null || o === null)
          throw Error(z(282));
        if (o = a.pendingProps, f = a.memoizedState, f = f !== null ? f.element : null, Hd(n, a), $a(a, o, null, l), o = a.memoizedState.element, o === f)
          Zl(), a = Xa(n, a, l);
        else {
          if (f = a.stateNode, (p = f.hydrate) && (Ya = Si(a.stateNode.containerInfo.firstChild), Ea = a, p = Ca = !0), p) {
            if (n = f.mutableSourceEagerHydrationData, n != null)
              for (f = 0; f < n.length; f += 2)
                p = n[f], p._workInProgressVersionPrimary = n[f + 1], vl.push(p);
            for (l = Vf(a, null, o, l), a.child = l; l; )
              l.flags = l.flags & -3 | 1024, l = l.sibling;
          } else
            pr(n, a, o, l), Zl();
          a = a.child;
        }
        return a;
      case 5:
        return Bd(a), n === null && xi(a), o = a.type, f = a.pendingProps, p = n !== null ? n.memoizedProps : null, m = f.children, Vu(o, f) ? m = null : p !== null && Vu(o, p) && (a.flags |= 16), $d(n, a), pr(n, a, m, l), a.child;
      case 6:
        return n === null && xi(a), null;
      case 13:
        return Mi(n, a, l);
      case 4:
        return Ku(a, a.stateNode.containerInfo), o = a.pendingProps, n === null ? a.child = Qu(a, null, o, l) : pr(n, a, o, l), a.child;
      case 11:
        return o = a.type, f = a.pendingProps, f = a.elementType === o ? f : Rn(o, f), Xf(n, a, o, f, l);
      case 7:
        return pr(n, a, a.pendingProps, l), a.child;
      case 8:
        return pr(
          n,
          a,
          a.pendingProps.children,
          l
        ), a.child;
      case 12:
        return pr(n, a, a.pendingProps.children, l), a.child;
      case 10:
        e: {
          o = a.type._context, f = a.pendingProps, m = a.memoizedProps, p = f.value;
          var y = a.type._context;
          if (Ve(wi, y._currentValue), y._currentValue = p, m !== null)
            if (y = m.value, p = Ur(y, p) ? 0 : (typeof o._calculateChangedBits == "function" ? o._calculateChangedBits(y, p) : 1073741823) | 0, p === 0) {
              if (m.children === f.children && !Un.current) {
                a = Xa(n, a, l);
                break e;
              }
            } else
              for (y = a.child, y !== null && (y.return = a); y !== null; ) {
                var R = y.dependencies;
                if (R !== null) {
                  m = y.child;
                  for (var U = R.firstContext; U !== null; ) {
                    if (U.context === o && U.observedBits & p) {
                      y.tag === 1 && (U = Zr(-1, l & -l), U.tag = 2, Wa(y, U)), y.lanes |= l, U = y.alternate, U !== null && (U.lanes |= l), jf(y.return, l), R.lanes |= l;
                      break;
                    }
                    U = U.next;
                  }
                } else
                  m = y.tag === 10 && y.type === a.type ? null : y.child;
                if (m !== null)
                  m.return = y;
                else
                  for (m = y; m !== null; ) {
                    if (m === a) {
                      m = null;
                      break;
                    }
                    if (y = m.sibling, y !== null) {
                      y.return = m.return, m = y;
                      break;
                    }
                    m = m.return;
                  }
                y = m;
              }
          pr(n, a, f.children, l), a = a.child;
        }
        return a;
      case 9:
        return f = a.type, p = a.pendingProps, o = p.children, sl(a, l), f = _r(
          f,
          p.unstable_observedBits
        ), o = o(f), a.flags |= 1, pr(n, a, o, l), a.child;
      case 14:
        return f = a.type, p = Rn(f, a.pendingProps), p = Rn(f.type, p), Kf(n, a, f, p, o, l);
      case 15:
        return Wd(n, a, a.type, a.pendingProps, o, l);
      case 17:
        return o = a.type, f = a.pendingProps, f = a.elementType === o ? f : Rn(o, f), n !== null && (n.alternate = null, a.alternate = null, a.flags |= 2), a.tag = 1, zn(o) ? (n = !0, zr(a)) : n = !1, sl(a, l), fl(a, o, f), vs(a, o, f, l), Jf(null, a, o, !0, n, l);
      case 19:
        return mh(n, a, l);
      case 23:
        return iu(n, a, l);
      case 24:
        return iu(n, a, l);
    }
    throw Error(z(156, a.tag));
  };
  function _h(n, a, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Hr(n, a, l, o) {
    return new _h(n, a, l, o);
  }
  function _s(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function xh(n) {
    if (typeof n == "function")
      return _s(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ce)
        return 11;
      if (n === Rt)
        return 14;
    }
    return 2;
  }
  function Pi(n, a) {
    var l = n.alternate;
    return l === null ? (l = Hr(n.tag, a, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = a, l.type = n.type, l.flags = 0, l.nextEffect = null, l.firstEffect = null, l.lastEffect = null), l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, a = n.dependencies, l.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function yo(n, a, l, o, f, p) {
    var m = 2;
    if (o = n, typeof n == "function")
      _s(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Ue:
            return _a(l.children, f, p, a);
          case at:
            m = 8, f |= 16;
            break;
          case $e:
            m = 8, f |= 1;
            break;
          case St:
            return n = Hr(12, l, a, f | 8), n.elementType = St, n.type = St, n.lanes = p, n;
          case st:
            return n = Hr(13, l, a, f), n.type = st, n.elementType = st, n.lanes = p, n;
          case Ze:
            return n = Hr(19, l, a, f), n.elementType = Ze, n.lanes = p, n;
          case V:
            return Rl(l, f, p, a);
          case K:
            return n = Hr(24, l, a, f), n.elementType = K, n.lanes = p, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case ut:
                  m = 10;
                  break e;
                case ot:
                  m = 9;
                  break e;
                case Ce:
                  m = 11;
                  break e;
                case Rt:
                  m = 14;
                  break e;
                case M:
                  m = 16, o = null;
                  break e;
                case $:
                  m = 22;
                  break e;
              }
            throw Error(z(130, n == null ? n : typeof n, ""));
        }
    return a = Hr(m, l, a, f), a.elementType = n, a.type = o, a.lanes = p, a;
  }
  function _a(n, a, l, o) {
    return n = Hr(7, n, o, a), n.lanes = l, n;
  }
  function Rl(n, a, l, o) {
    return n = Hr(23, n, o, a), n.elementType = V, n.lanes = l, n;
  }
  function hc(n, a, l) {
    return n = Hr(6, n, null, a), n.lanes = l, n;
  }
  function mc(n, a, l) {
    return a = Hr(4, n.children !== null ? n.children : [], n.key, a), a.lanes = l, a.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, a;
  }
  function kh(n, a, l) {
    this.tag = a, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = l, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = pi(0), this.expirationTimes = pi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pi(0), this.mutableSourceEagerHydrationData = null;
  }
  function xs(n, a, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Re, key: o == null ? null : "" + o, children: n, containerInfo: a, implementation: l };
  }
  function ks(n, a, l, o) {
    var f = a.current, p = xr(), m = wa(f);
    e:
      if (l) {
        l = l._reactInternals;
        t: {
          if (En(l) !== l || l.tag !== 1)
            throw Error(z(170));
          var y = l;
          do {
            switch (y.tag) {
              case 3:
                y = y.stateNode.context;
                break t;
              case 1:
                if (zn(y.type)) {
                  y = y.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            y = y.return;
          } while (y !== null);
          throw Error(z(171));
        }
        if (l.tag === 1) {
          var R = l.type;
          if (zn(R)) {
            l = ql(l, R, y);
            break e;
          }
        }
        l = y;
      } else
        l = Ci;
    return a.context === null ? a.context = l : a.pendingContext = l, a = Zr(p, m), a.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (a.callback = o), Wa(f, a), Ai(f, m, p), m;
  }
  function Ds(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function hp(n, a) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < a ? l : a;
    }
  }
  function Os(n, a) {
    hp(n, a), (n = n.alternate) && hp(n, a);
  }
  function mp() {
    return null;
  }
  function yc(n, a, l) {
    var o = l != null && l.hydrationOptions != null && l.hydrationOptions.mutableSources || null;
    if (l = new kh(n, a, l != null && l.hydrate === !0), a = Hr(3, null, null, a === 2 ? 7 : a === 1 ? 3 : 0), l.current = a, a.stateNode = l, Pf(a), n[rr] = l.current, _f(n.nodeType === 8 ? n.parentNode : n), o)
      for (n = 0; n < o.length; n++) {
        a = o[n];
        var f = a._getVersion;
        f = f(a._source), l.mutableSourceEagerHydrationData == null ? l.mutableSourceEagerHydrationData = [a, f] : l.mutableSourceEagerHydrationData.push(a, f);
      }
    this._internalRoot = l;
  }
  yc.prototype.render = function(n) {
    ks(n, this._internalRoot, null, null);
  }, yc.prototype.unmount = function() {
    var n = this._internalRoot, a = n.containerInfo;
    ks(null, n, null, function() {
      a[rr] = null;
    });
  };
  function go(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Dh(n, a) {
    if (a || (a = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, a = !(!a || a.nodeType !== 1 || !a.hasAttribute("data-reactroot"))), !a)
      for (var l; l = n.lastChild; )
        n.removeChild(l);
    return new yc(n, 0, a ? { hydrate: !0 } : void 0);
  }
  function Ms(n, a, l, o, f) {
    var p = l._reactRootContainer;
    if (p) {
      var m = p._internalRoot;
      if (typeof f == "function") {
        var y = f;
        f = function() {
          var U = Ds(m);
          y.call(U);
        };
      }
      ks(a, m, n, f);
    } else {
      if (p = l._reactRootContainer = Dh(l, o), m = p._internalRoot, typeof f == "function") {
        var R = f;
        f = function() {
          var U = Ds(m);
          R.call(U);
        };
      }
      op(function() {
        ks(a, m, n, f);
      });
    }
    return Ds(m);
  }
  Vo = function(n) {
    if (n.tag === 13) {
      var a = xr();
      Ai(n, 4, a), Os(n, 4);
    }
  }, si = function(n) {
    if (n.tag === 13) {
      var a = xr();
      Ai(n, 67108864, a), Os(n, 67108864);
    }
  }, xu = function(n) {
    if (n.tag === 13) {
      var a = xr(), l = wa(n);
      Ai(n, l, a), Os(n, l);
    }
  }, fi = function(n, a) {
    return a();
  }, Cr = function(n, a, l) {
    switch (a) {
      case "input":
        if (Or(n, l), a = l.name, l.type === "radio" && a != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < l.length; a++) {
            var o = l[a];
            if (o !== n && o.form === n.form) {
              var f = Ba(o);
              if (!f)
                throw Error(z(90));
              Sr(o), Or(o, f);
            }
          }
        }
        break;
      case "textarea":
        oa(n, l);
        break;
      case "select":
        a = l.value, a != null && Ht(n, !!l.multiple, a, !1);
    }
  }, C = up, q = function(n, a, l, o, f) {
    var p = qe;
    qe |= 4;
    try {
      return ul(98, n.bind(null, a, l, o, f));
    } finally {
      qe = p, qe === 0 && (fu(), Cn());
    }
  }, ae = function() {
    !(qe & 49) && (Ch(), zi());
  }, Oe = function(n, a) {
    var l = qe;
    qe |= 2;
    try {
      return n(a);
    } finally {
      qe = l, qe === 0 && (fu(), Cn());
    }
  };
  function yp(n, a) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!go(a))
      throw Error(z(200));
    return xs(n, a, null, l);
  }
  var Oh = { Events: [wr, ar, Ba, Jt, za, zi, { current: !1 }] }, So = { findFiberByHostInstance: il, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Mh = { bundleType: So.bundleType, version: So.version, rendererPackageName: So.rendererPackageName, rendererConfig: So.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ee.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = oi(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: So.findFiberByHostInstance || mp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ns = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ns.isDisabled && Ns.supportsFiber)
      try {
        Of = Ns.inject(Mh), ll = Ns;
      } catch {
      }
  }
  return la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oh, la.createPortal = yp, la.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var a = n._reactInternals;
    if (a === void 0)
      throw typeof n.render == "function" ? Error(z(188)) : Error(z(268, Object.keys(n)));
    return n = oi(a), n = n === null ? null : n.stateNode, n;
  }, la.flushSync = function(n, a) {
    var l = qe;
    if (l & 48)
      return n(a);
    qe |= 1;
    try {
      if (n)
        return ul(99, n.bind(null, a));
    } finally {
      qe = l, Cn();
    }
  }, la.hydrate = function(n, a, l) {
    if (!go(a))
      throw Error(z(200));
    return Ms(null, n, a, !0, l);
  }, la.render = function(n, a, l) {
    if (!go(a))
      throw Error(z(200));
    return Ms(null, n, a, !1, l);
  }, la.unmountComponentAtNode = function(n) {
    if (!go(n))
      throw Error(z(40));
    return n._reactRootContainer ? (op(function() {
      Ms(null, null, n, !1, function() {
        n._reactRootContainer = null, n[rr] = null;
      });
    }), !0) : !1;
  }, la.unstable_batchedUpdates = up, la.unstable_createPortal = function(n, a) {
    return yp(n, a, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, la.unstable_renderSubtreeIntoContainer = function(n, a, l, o) {
    if (!go(l))
      throw Error(z(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(z(38));
    return Ms(n, a, l, !1, o);
  }, la.version = "17.0.2", la;
}
var ua = {}, qv = { exports: {} }, ai = {};
/** @license React v0.20.2
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var GE;
function nw() {
  if (GE)
    return ai;
  GE = 1;
  var _ = 0;
  return ai.__interactionsRef = null, ai.__subscriberRef = null, ai.unstable_clear = function(I) {
    return I();
  }, ai.unstable_getCurrent = function() {
    return null;
  }, ai.unstable_getThreadID = function() {
    return ++_;
  }, ai.unstable_subscribe = function() {
  }, ai.unstable_trace = function(I, fe, z) {
    return z();
  }, ai.unstable_unsubscribe = function() {
  }, ai.unstable_wrap = function(I) {
    return I;
  }, ai;
}
var lg = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var XE;
function rw() {
  return XE || (XE = 1, function(_) {
    process.env.NODE_ENV !== "production" && function() {
      var I = 0, fe = 0, z = 0;
      _.__interactionsRef = null, _.__subscriberRef = null, _.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, _.__subscriberRef = {
        current: null
      };
      function nt(He) {
        var J = _.__interactionsRef.current;
        _.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return He();
        } finally {
          _.__interactionsRef.current = J;
        }
      }
      function Xe() {
        return _.__interactionsRef.current;
      }
      function E() {
        return ++z;
      }
      function Ke(He, J, we) {
        var ee = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : I, ye = {
          __count: 1,
          id: fe++,
          name: He,
          timestamp: J
        }, Re = _.__interactionsRef.current, Ue = new Set(Re);
        Ue.add(ye), _.__interactionsRef.current = Ue;
        var $e = _.__subscriberRef.current, St;
        try {
          $e !== null && $e.onInteractionTraced(ye);
        } finally {
          try {
            $e !== null && $e.onWorkStarted(Ue, ee);
          } finally {
            try {
              St = we();
            } finally {
              _.__interactionsRef.current = Re;
              try {
                $e !== null && $e.onWorkStopped(Ue, ee);
              } finally {
                ye.__count--, $e !== null && ye.__count === 0 && $e.onInteractionScheduledWorkCompleted(ye);
              }
            }
          }
        }
        return St;
      }
      function le(He) {
        var J = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : I, we = _.__interactionsRef.current, ee = _.__subscriberRef.current;
        ee !== null && ee.onWorkScheduled(we, J), we.forEach(function(Ue) {
          Ue.__count++;
        });
        var ye = !1;
        function Re() {
          var Ue = _.__interactionsRef.current;
          _.__interactionsRef.current = we, ee = _.__subscriberRef.current;
          try {
            var $e;
            try {
              ee !== null && ee.onWorkStarted(we, J);
            } finally {
              try {
                $e = He.apply(void 0, arguments);
              } finally {
                _.__interactionsRef.current = Ue, ee !== null && ee.onWorkStopped(we, J);
              }
            }
            return $e;
          } finally {
            ye || (ye = !0, we.forEach(function(St) {
              St.__count--, ee !== null && St.__count === 0 && ee.onInteractionScheduledWorkCompleted(St);
            }));
          }
        }
        return Re.cancel = function() {
          ee = _.__subscriberRef.current;
          try {
            ee !== null && ee.onWorkCanceled(we, J);
          } finally {
            we.forEach(function($e) {
              $e.__count--, ee && $e.__count === 0 && ee.onInteractionScheduledWorkCompleted($e);
            });
          }
        }, Re;
      }
      var Z = null;
      Z = /* @__PURE__ */ new Set();
      function je(He) {
        Z.add(He), Z.size === 1 && (_.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: he,
          onInteractionTraced: xe,
          onWorkCanceled: ht,
          onWorkScheduled: We,
          onWorkStarted: Zt,
          onWorkStopped: De
        });
      }
      function ce(He) {
        Z.delete(He), Z.size === 0 && (_.__subscriberRef.current = null);
      }
      function xe(He) {
        var J = !1, we = null;
        if (Z.forEach(function(ee) {
          try {
            ee.onInteractionTraced(He);
          } catch (ye) {
            J || (J = !0, we = ye);
          }
        }), J)
          throw we;
      }
      function he(He) {
        var J = !1, we = null;
        if (Z.forEach(function(ee) {
          try {
            ee.onInteractionScheduledWorkCompleted(He);
          } catch (ye) {
            J || (J = !0, we = ye);
          }
        }), J)
          throw we;
      }
      function We(He, J) {
        var we = !1, ee = null;
        if (Z.forEach(function(ye) {
          try {
            ye.onWorkScheduled(He, J);
          } catch (Re) {
            we || (we = !0, ee = Re);
          }
        }), we)
          throw ee;
      }
      function Zt(He, J) {
        var we = !1, ee = null;
        if (Z.forEach(function(ye) {
          try {
            ye.onWorkStarted(He, J);
          } catch (Re) {
            we || (we = !0, ee = Re);
          }
        }), we)
          throw ee;
      }
      function De(He, J) {
        var we = !1, ee = null;
        if (Z.forEach(function(ye) {
          try {
            ye.onWorkStopped(He, J);
          } catch (Re) {
            we || (we = !0, ee = Re);
          }
        }), we)
          throw ee;
      }
      function ht(He, J) {
        var we = !1, ee = null;
        if (Z.forEach(function(ye) {
          try {
            ye.onWorkCanceled(He, J);
          } catch (Re) {
            we || (we = !0, ee = Re);
          }
        }), we)
          throw ee;
      }
      _.unstable_clear = nt, _.unstable_getCurrent = Xe, _.unstable_getThreadID = E, _.unstable_subscribe = je, _.unstable_trace = Ke, _.unstable_unsubscribe = ce, _.unstable_wrap = le;
    }();
  }(lg)), lg;
}
var KE;
function aw() {
  return KE || (KE = 1, process.env.NODE_ENV === "production" ? qv.exports = nw() : qv.exports = rw()), qv.exports;
}
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZE;
function iw() {
  return ZE || (ZE = 1, process.env.NODE_ENV !== "production" && function() {
    var _ = of, I = uf(), fe = JE(), z = aw(), nt = _.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Xe(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        Ke("warn", e, r);
      }
    }
    function E(e) {
      {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          r[i - 1] = arguments[i];
        Ke("error", e, r);
      }
    }
    function Ke(e, t, r) {
      {
        var i = nt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", r = r.concat([u]));
        var s = r.map(function(c) {
          return "" + c;
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    if (!_)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var le = 0, Z = 1, je = 2, ce = 3, xe = 4, he = 5, We = 6, Zt = 7, De = 8, ht = 9, He = 10, J = 11, we = 12, ee = 13, ye = 14, Re = 15, Ue = 16, $e = 17, St = 18, ut = 19, ot = 20, Ce = 21, st = 22, Ze = 23, Rt = 24, M = !0, $ = !1, ge = !1, at = !1, V = /* @__PURE__ */ new Set(), K = {}, X = {};
    function be(e, t) {
      _e(e, t), _e(e + "Capture", t);
    }
    function _e(e, t) {
      K[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), K[e] = t;
      {
        var r = e.toLowerCase();
        X[r] = e, e === "onDoubleClick" && (X.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        V.add(t[i]);
    }
    var it = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qt = 0, Et = 1, mt = 2, sn = 3, Nt = 4, bt = 5, sr = 6, Hn = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", nn = Hn + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Sr = "data-reactroot", Er = new RegExp("^[" + Hn + "][" + nn + "]*$"), Gn = Object.prototype.hasOwnProperty, La = {}, Xn = {};
    function Or(e) {
      return Gn.call(Xn, e) ? !0 : Gn.call(La, e) ? !1 : Er.test(e) ? (Xn[e] = !0, !0) : (La[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function Aa(e, t, r) {
      return t !== null ? t.type === qt : r ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Mr(e, t, r, i) {
      if (r !== null && r.type === qt)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (r !== null)
            return !r.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function On(e, t, r, i) {
      if (t === null || typeof t > "u" || Mr(e, t, r, i))
        return !0;
      if (i)
        return !1;
      if (r !== null)
        switch (r.type) {
          case sn:
            return !t;
          case Nt:
            return t === !1;
          case bt:
            return isNaN(t);
          case sr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function fr(e) {
      return Wt.hasOwnProperty(e) ? Wt[e] : null;
    }
    function Ht(e, t, r, i, u, s, c) {
      this.acceptsBooleans = t === mt || t === sn || t === Nt, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = c;
    }
    var Wt = {}, Ua = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ua.forEach(function(e) {
      Wt[e] = new Ht(
        e,
        qt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], r = e[1];
      Wt[t] = new Ht(
        t,
        Et,
        !1,
        // mustUseProperty
        r,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        mt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        mt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        Nt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        sr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        bt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var oa = /[\-\:]([a-z])/g, $r = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(oa, $r);
      Wt[t] = new Ht(
        t,
        Et,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(oa, $r);
      Wt[t] = new Ht(
        t,
        Et,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(oa, $r);
      Wt[t] = new Ht(
        t,
        Et,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        Et,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ne = "xlinkHref";
    Wt[ne] = new Ht(
      "xlinkHref",
      Et,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Wt[e] = new Ht(
        e,
        Et,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var me = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Pe = !1;
    function yt(e) {
      !Pe && me.test(e) && (Pe = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Lt(e, t, r, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        i.sanitizeURL && yt("" + r);
        var s = i.attributeName, c = null;
        if (i.type === Nt) {
          if (e.hasAttribute(s)) {
            var d = e.getAttribute(s);
            return d === "" ? !0 : On(t, r, i, !1) ? d : d === "" + r ? r : d;
          }
        } else if (e.hasAttribute(s)) {
          if (On(t, r, i, !1))
            return e.getAttribute(s);
          if (i.type === sn)
            return r;
          c = e.getAttribute(s);
        }
        return On(t, r, i, !1) ? c === null ? r : c : c === "" + r ? r : c;
      }
    }
    function At(e, t, r) {
      {
        if (!Or(t))
          return;
        if (gR(r))
          return r;
        if (!e.hasAttribute(t))
          return r === void 0 ? void 0 : null;
        var i = e.getAttribute(t);
        return i === "" + r ? r : i;
      }
    }
    function Ut(e, t, r, i) {
      var u = fr(t);
      if (!Aa(t, u, i)) {
        if (On(t, r, u, i) && (r = null), i || u === null) {
          if (Or(t)) {
            var s = t;
            r === null ? e.removeAttribute(s) : e.setAttribute(s, "" + r);
          }
          return;
        }
        var c = u.mustUseProperty;
        if (c) {
          var d = u.propertyName;
          if (r === null) {
            var v = u.type;
            e[d] = v === sn ? !1 : "";
          } else
            e[d] = r;
          return;
        }
        var g = u.attributeName, S = u.attributeNamespace;
        if (r === null)
          e.removeAttribute(g);
        else {
          var O = u.type, b;
          O === sn || O === Nt && r === !0 ? b = "" : (b = "" + r, u.sanitizeURL && yt(b.toString())), S ? e.setAttributeNS(S, g, b) : e.setAttribute(g, b);
        }
      }
    }
    var fn = 60103, Pt = 60106, Vn = 60107, ii = 60108, Nr = 60114, Yr = 60109, sa = 60110, Cr = 60112, Bn = 60113, In = 60120, qr = 60115, Jt = 60116, za = 60121, C = 60119, q = 60128, ae = 60129, Oe = 60130, ft = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var Ne = Symbol.for;
      fn = Ne("react.element"), Pt = Ne("react.portal"), Vn = Ne("react.fragment"), ii = Ne("react.strict_mode"), Nr = Ne("react.profiler"), Yr = Ne("react.provider"), sa = Ne("react.context"), Cr = Ne("react.forward_ref"), Bn = Ne("react.suspense"), In = Ne("react.suspense_list"), qr = Ne("react.memo"), Jt = Ne("react.lazy"), za = Ne("react.block"), Ne("react.server.block"), Ne("react.fundamental"), C = Ne("react.scope"), q = Ne("react.opaque.id"), ae = Ne("react.debug_trace_mode"), Oe = Ne("react.offscreen"), ft = Ne("react.legacy_hidden");
    }
    var ct = typeof Symbol == "function" && Symbol.iterator, pt = "@@iterator";
    function Mt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ct && e[ct] || e[pt];
      return typeof t == "function" ? t : null;
    }
    var gt = 0, kt, Kn, Wn, Qr, Sn, Ki, wu;
    function _u() {
    }
    _u.__reactDisabledLog = !0;
    function Lr() {
      {
        if (gt === 0) {
          kt = console.log, Kn = console.info, Wn = console.warn, Qr = console.error, Sn = console.group, Ki = console.groupCollapsed, wu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _u,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        gt++;
      }
    }
    function En() {
      {
        if (gt--, gt === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: kt
            }),
            info: I({}, e, {
              value: Kn
            }),
            warn: I({}, e, {
              value: Wn
            }),
            error: I({}, e, {
              value: Qr
            }),
            group: I({}, e, {
              value: Sn
            }),
            groupCollapsed: I({}, e, {
              value: Ki
            }),
            groupEnd: I({}, e, {
              value: wu
            })
          });
        }
        gt < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var li = nt.ReactCurrentDispatcher, ui;
    function Rr(e, t, r) {
      {
        if (ui === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ui = i && i[1] || "";
          }
        return `
` + ui + e;
      }
    }
    var oi = !1, fa;
    {
      var Vo = typeof WeakMap == "function" ? WeakMap : Map;
      fa = new Vo();
    }
    function si(e, t) {
      if (!e || oi)
        return "";
      {
        var r = fa.get(e);
        if (r !== void 0)
          return r;
      }
      var i;
      oi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = li.current, li.current = null, Lr();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (W) {
              i = W;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (W) {
              i = W;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            i = W;
          }
          e();
        }
      } catch (W) {
        if (W && i && typeof W.stack == "string") {
          for (var d = W.stack.split(`
`), v = i.stack.split(`
`), g = d.length - 1, S = v.length - 1; g >= 1 && S >= 0 && d[g] !== v[S]; )
            S--;
          for (; g >= 1 && S >= 0; g--, S--)
            if (d[g] !== v[S]) {
              if (g !== 1 || S !== 1)
                do
                  if (g--, S--, S < 0 || d[g] !== v[S]) {
                    var O = `
` + d[g].replace(" at new ", " at ");
                    return typeof e == "function" && fa.set(e, O), O;
                  }
                while (g >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        oi = !1, li.current = s, En(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", L = b ? Rr(b) : "";
      return typeof e == "function" && fa.set(e, L), L;
    }
    function xu(e, t, r) {
      return si(e, !0);
    }
    function fi(e, t, r) {
      return si(e, !1);
    }
    function ci(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Zn(e, t, r) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return si(e, ci(e));
      if (typeof e == "string")
        return Rr(e);
      switch (e) {
        case Bn:
          return Rr("Suspense");
        case In:
          return Rr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Cr:
            return fi(e.render);
          case qr:
            return Zn(e.type, t, r);
          case za:
            return fi(e._render);
          case Jt: {
            var i = e, u = i._payload, s = i._init;
            try {
              return Zn(s(u), t, r);
            } catch {
            }
          }
        }
      return "";
    }
    function Gr(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case he:
          return Rr(e.type);
        case Ue:
          return Rr("Lazy");
        case ee:
          return Rr("Suspense");
        case ut:
          return Rr("SuspenseList");
        case le:
        case je:
        case Re:
          return fi(e.type);
        case J:
          return fi(e.type.render);
        case st:
          return fi(e.type._render);
        case Z:
          return xu(e.type);
        default:
          return "";
      }
    }
    function cr(e) {
      try {
        var t = "", r = e;
        do
          t += Gr(r), r = r.return;
        while (r);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function ca(e, t, r) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? r + "(" + i + ")" : r);
    }
    function br(e) {
      return e.displayName || "Context";
    }
    function re(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Vn:
          return "Fragment";
        case Pt:
          return "Portal";
        case Nr:
          return "Profiler";
        case ii:
          return "StrictMode";
        case Bn:
          return "Suspense";
        case In:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case sa:
            var t = e;
            return br(t) + ".Consumer";
          case Yr:
            var r = e;
            return br(r._context) + ".Provider";
          case Cr:
            return ca(e, e.render, "ForwardRef");
          case qr:
            return re(e.type);
          case za:
            return re(e._render);
          case Jt: {
            var i = e, u = i._payload, s = i._init;
            try {
              return re(s(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ja = nt.ReactDebugCurrentFrame, Mn = null, da = !1;
    function Pa() {
      {
        if (Mn === null)
          return null;
        var e = Mn._debugOwner;
        if (e !== null && typeof e < "u")
          return re(e.type);
      }
      return null;
    }
    function Zi() {
      return Mn === null ? "" : cr(Mn);
    }
    function Nn() {
      ja.getCurrentStack = null, Mn = null, da = !1;
    }
    function on(e) {
      ja.getCurrentStack = Zi, Mn = e, da = !1;
    }
    function $n(e) {
      da = e;
    }
    function Bo() {
      return da;
    }
    function Jn(e) {
      return "" + e;
    }
    function er(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    var Io = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function di(e, t) {
      Io[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function pa(e) {
      var t = e.type, r = e.nodeName;
      return r && r.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Nl(e) {
      return e._valueTracker;
    }
    function Wo(e) {
      e._valueTracker = null;
    }
    function Ll(e) {
      var t = "";
      return e && (pa(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function $o(e) {
      var t = pa(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof r > "u" || typeof r.get != "function" || typeof r.set != "function")) {
        var u = r.get, s = r.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(d) {
            i = "" + d, s.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: r.enumerable
        });
        var c = {
          getValue: function() {
            return i;
          },
          setValue: function(d) {
            i = "" + d;
          },
          stopTracking: function() {
            Wo(e), delete e[t];
          }
        };
        return c;
      }
    }
    function h(e) {
      Nl(e) || (e._valueTracker = $o(e));
    }
    function T(e) {
      if (!e)
        return !1;
      var t = Nl(e);
      if (!t)
        return !0;
      var r = t.getValue(), i = Ll(e);
      return i !== r ? (t.setValue(i), !0) : !1;
    }
    function A(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var P = !1, ie = !1, Fe = !1, Me = !1;
    function Le(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ke(e, t) {
      var r = e, i = t.checked, u = I({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? r._wrapperState.initialChecked
      });
      return u;
    }
    function Tt(e, t) {
      di("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ie && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pa() || "A component", t.type), ie = !0), t.value !== void 0 && t.defaultValue !== void 0 && !P && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pa() || "A component", t.type), P = !0);
      var r = e, i = t.defaultValue == null ? "" : t.defaultValue;
      r._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: er(t.value != null ? t.value : i),
        controlled: Le(t)
      };
    }
    function $t(e, t) {
      var r = e, i = t.checked;
      i != null && Ut(r, "checked", i, !1);
    }
    function en(e, t) {
      var r = e;
      {
        var i = Le(t);
        !r._wrapperState.controlled && i && !Me && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Me = !0), r._wrapperState.controlled && !i && !Fe && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Fe = !0);
      }
      $t(e, t);
      var u = er(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && r.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        r.value != u) && (r.value = Jn(u)) : r.value !== Jn(u) && (r.value = Jn(u));
      else if (s === "submit" || s === "reset") {
        r.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Tr(r, t.type, u) : t.hasOwnProperty("defaultValue") && Tr(r, t.type, er(t.defaultValue)), t.checked == null && t.defaultChecked != null && (r.defaultChecked = !!t.defaultChecked);
    }
    function cn(e, t, r) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var c = Jn(i._wrapperState.initialValue);
        r || c !== i.value && (i.value = c), i.defaultValue = c;
      }
      var d = i.name;
      d !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, d !== "" && (i.name = d);
    }
    function Ln(e, t) {
      var r = e;
      en(r, t), An(r, t);
    }
    function An(e, t) {
      var r = t.name;
      if (t.type === "radio" && r != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var c = u[s];
          if (!(c === e || c.form !== e.form)) {
            var d = Dp(c);
            if (!d)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            T(c), en(c, d);
          }
        }
      }
    }
    function Tr(e, t, r) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || A(e.ownerDocument) !== e) && (r == null ? e.defaultValue = Jn(e._wrapperState.initialValue) : e.defaultValue !== Jn(r) && (e.defaultValue = Jn(r)));
    }
    var pi = !1, vi = !1;
    function va(e) {
      var t = "";
      return _.Children.forEach(e, function(r) {
        r != null && (t += r);
      }), t;
    }
    function ku(e, t) {
      typeof t.children == "object" && t.children !== null && _.Children.forEach(t.children, function(r) {
        r != null && (typeof r == "string" || typeof r == "number" || typeof r.type == "string" && (vi || (vi = !0, E("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !pi && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), pi = !0);
    }
    function sf(e, t) {
      t.value != null && e.setAttribute("value", Jn(er(t.value)));
    }
    function Al(e, t) {
      var r = I({
        children: void 0
      }, t), i = va(t.children);
      return i && (r.children = i), r;
    }
    var Du;
    Du = !1;
    function ld() {
      var e = Pa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Ou = ["value", "defaultValue"];
    function Qv(e) {
      {
        di("select", e);
        for (var t = 0; t < Ou.length; t++) {
          var r = Ou[t];
          if (e[r] != null) {
            var i = Array.isArray(e[r]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", r, ld()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", r, ld());
          }
        }
      }
    }
    function Ul(e, t, r, i) {
      var u = e.options;
      if (t) {
        for (var s = r, c = {}, d = 0; d < s.length; d++)
          c["$" + s[d]] = !0;
        for (var v = 0; v < u.length; v++) {
          var g = c.hasOwnProperty("$" + u[v].value);
          u[v].selected !== g && (u[v].selected = g), g && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var S = Jn(er(r)), O = null, b = 0; b < u.length; b++) {
          if (u[b].value === S) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          O === null && !u[b].disabled && (O = u[b]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function Mu(e, t) {
      return I({}, t, {
        value: void 0
      });
    }
    function Yo(e, t) {
      var r = e;
      Qv(t), r._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Du && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Du = !0);
    }
    function hi(e, t) {
      var r = e;
      r.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ul(r, !!t.multiple, i, !1) : t.defaultValue != null && Ul(r, !!t.multiple, t.defaultValue, !0);
    }
    function ff(e, t) {
      var r = e, i = r._wrapperState.wasMultiple;
      r._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ul(r, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ul(r, !!t.multiple, t.defaultValue, !0) : Ul(r, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function qo(e, t) {
      var r = e, i = t.value;
      i != null && Ul(r, !!t.multiple, i, !1);
    }
    var cf = !1;
    function zl(e, t) {
      var r = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = I({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Jn(r._wrapperState.initialValue)
      });
      return i;
    }
    function Nu(e, t) {
      var r = e;
      di("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cf && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Pa() || "A component"), cf = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(u)) {
              if (!(u.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      r._wrapperState = {
        initialValue: er(i)
      };
    }
    function df(e, t) {
      var r = e, i = er(t.value), u = er(t.defaultValue);
      if (i != null) {
        var s = Jn(i);
        s !== r.value && (r.value = s), t.defaultValue == null && r.defaultValue !== s && (r.defaultValue = s);
      }
      u != null && (r.defaultValue = Jn(u));
    }
    function dr(e, t) {
      var r = e, i = r.textContent;
      i === r._wrapperState.initialValue && i !== "" && i !== null && (r.value = i);
    }
    function jl(e, t) {
      df(e, t);
    }
    var Pl = "http://www.w3.org/1999/xhtml", Fl = "http://www.w3.org/1998/Math/MathML", pf = "http://www.w3.org/2000/svg", Qo = {
      html: Pl,
      mathml: Fl,
      svg: pf
    };
    function Lu(e) {
      switch (e) {
        case "svg":
          return pf;
        case "math":
          return Fl;
        default:
          return Pl;
      }
    }
    function Ji(e, t) {
      return e == null || e === Pl ? Lu(t) : e === pf && t === "foreignObject" ? Pl : e;
    }
    var Go = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, r, i, u);
        });
      } : e;
    }, Au, ud = Go(function(e, t) {
      if (e.namespaceURI === Qo.svg && !("innerHTML" in e)) {
        Au = Au || document.createElement("div"), Au.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var r = Au.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; r.firstChild; )
          e.appendChild(r.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ar = 1, Fa = 3, tr = 8, mi = 9, od = 11, Xo = function(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === Fa) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Gv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Uu = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function sd(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Xv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Uu).forEach(function(e) {
      Xv.forEach(function(t) {
        Uu[sd(t, e)] = Uu[e];
      });
    });
    function vf(e, t, r) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !r && typeof t == "number" && t !== 0 && !(Uu.hasOwnProperty(e) && Uu[e]) ? t + "px" : ("" + t).trim();
    }
    var Kv = /([A-Z])/g, Zv = /^ms-/;
    function hf(e) {
      return e.replace(Kv, "-$1").toLowerCase().replace(Zv, "-ms-");
    }
    var fd = function() {
    };
    {
      var Jv = /^(?:webkit|moz|o)[A-Z]/, eh = /^-ms-/, cd = /-(.)/g, dd = /;\s*$/, Hl = {}, mf = {}, pd = !1, vd = !1, th = function(e) {
        return e.replace(cd, function(t, r) {
          return r.toUpperCase();
        });
      }, nh = function(e) {
        Hl.hasOwnProperty(e) && Hl[e] || (Hl[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          th(e.replace(eh, "ms-"))
        ));
      }, yf = function(e) {
        Hl.hasOwnProperty(e) && Hl[e] || (Hl[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, zu = function(e, t) {
        mf.hasOwnProperty(t) && mf[t] || (mf[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(dd, "")));
      }, rh = function(e, t) {
        pd || (pd = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, hd = function(e, t) {
        vd || (vd = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fd = function(e, t) {
        e.indexOf("-") > -1 ? nh(e) : Jv.test(e) ? yf(e) : dd.test(t) && zu(e, t), typeof t == "number" && (isNaN(t) ? rh(e, t) : isFinite(t) || hd(e, t));
      };
    }
    var md = fd;
    function yd(e) {
      {
        var t = "", r = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += r + (s ? i : hf(i)) + ":", t += vf(i, u, s), r = ";";
            }
          }
        return t || null;
      }
    }
    function gf(e, t) {
      var r = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || md(i, t[i]);
          var s = vf(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? r.setProperty(i, s) : r[i] = s;
        }
    }
    function gd(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function el(e) {
      var t = {};
      for (var r in e)
        for (var i = Gv[r] || [r], u = 0; u < i.length; u++)
          t[i[u]] = r;
      return t;
    }
    function ah(e, t) {
      {
        if (!t)
          return;
        var r = el(e), i = el(t), u = {};
        for (var s in r) {
          var c = r[s], d = i[s];
          if (d && c !== d) {
            var v = c + "," + d;
            if (u[v])
              continue;
            u[v] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", gd(e[c]) ? "Removing" : "Updating", c, d);
          }
        }
      }
    }
    var ih = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, lh = I({
      menuitem: !0
    }, ih), Sd = "__html";
    function Ko(e, t) {
      if (t) {
        if (lh[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Sd in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Xr(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
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
    var yi = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Ed = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Ha = {}, uh = new RegExp("^(aria)-[" + nn + "]*$"), Cd = new RegExp("^(aria)[A-Z][" + nn + "]*$"), Sf = Object.prototype.hasOwnProperty;
    function Ef(e, t) {
      {
        if (Sf.call(Ha, t) && Ha[t])
          return !0;
        if (Cd.test(t)) {
          var r = "aria-" + t.slice(4).toLowerCase(), i = Ed.hasOwnProperty(r) ? r : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Ha[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Ha[t] = !0, !0;
        }
        if (uh.test(t)) {
          var u = t.toLowerCase(), s = Ed.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Ha[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Ha[t] = !0, !0;
        }
      }
      return !0;
    }
    function Rd(e, t) {
      {
        var r = [];
        for (var i in t) {
          var u = Ef(e, i);
          u || r.push(i);
        }
        var s = r.map(function(c) {
          return "`" + c + "`";
        }).join(", ");
        r.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : r.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function bd(e, t) {
      Xr(e, t) || Rd(e, t);
    }
    var Cf = !1;
    function oh(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Cf && (Cf = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Td = function() {
    };
    {
      var nr = {}, sh = Object.prototype.hasOwnProperty, wd = /^on./, Ur = /^on[^A-Z]/, fh = new RegExp("^(aria)-[" + nn + "]*$"), ju = new RegExp("^(aria)[A-Z][" + nn + "]*$");
      Td = function(e, t, r, i) {
        if (sh.call(nr, t) && nr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), nr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, c = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var d = c.hasOwnProperty(u) ? c[u] : null;
          if (d != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, d), nr[t] = !0, !0;
          if (wd.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), nr[t] = !0, !0;
        } else if (wd.test(t))
          return Ur.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), nr[t] = !0, !0;
        if (fh.test(t) || ju.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), nr[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), nr[t] = !0, !0;
        if (u === "is" && r !== null && r !== void 0 && typeof r != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof r), nr[t] = !0, !0;
        if (typeof r == "number" && isNaN(r))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), nr[t] = !0, !0;
        var v = fr(t), g = v !== null && v.type === qt;
        if (yi.hasOwnProperty(u)) {
          var S = yi[u];
          if (S !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, S), nr[t] = !0, !0;
        } else if (!g && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), nr[t] = !0, !0;
        return typeof r == "boolean" && Mr(t, r, v, !1) ? (r ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', r, t, t, r, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', r, t, t, r, t, t, t), nr[t] = !0, !0) : g ? !0 : Mr(t, r, v, !1) ? (nr[t] = !0, !1) : ((r === "false" || r === "true") && v !== null && v.type === sn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", r, t, r === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, r), nr[t] = !0), !0);
      };
    }
    var _d = function(e, t, r) {
      {
        var i = [];
        for (var u in t) {
          var s = Td(e, u, t[u], r);
          s || i.push(u);
        }
        var c = i.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", c, e);
      }
    };
    function xd(e, t, r) {
      Xr(e, t) || _d(e, t, r);
    }
    var Rf = 1, Pu = 2, tl = 4, kd = 16, Vl = Rf | Pu | tl;
    function Fu(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Fa ? t.parentNode : t;
    }
    var nl = null, gi = null, rl = null;
    function bf(e) {
      var t = pu(e);
      if (t) {
        if (typeof nl != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var r = t.stateNode;
        if (r) {
          var i = Dp(r);
          nl(t.stateNode, t.type, i);
        }
      }
    }
    function Tf(e) {
      nl = e;
    }
    function Bl(e) {
      gi ? rl ? rl.push(e) : rl = [e] : gi = e;
    }
    function Dd() {
      return gi !== null || rl !== null;
    }
    function wf() {
      if (gi) {
        var e = gi, t = rl;
        if (gi = null, rl = null, bf(e), t)
          for (var r = 0; r < t.length; r++)
            bf(t[r]);
      }
    }
    var Zo = function(e, t) {
      return e(t);
    }, Vt = function(e, t, r, i, u) {
      return e(t, r, i, u);
    }, Jo = function() {
    }, _f = Zo, Va = !1, es = !1;
    function ts() {
      var e = Dd();
      e && (Jo(), wf());
    }
    function Hu(e, t) {
      if (Va)
        return e(t);
      Va = !0;
      try {
        return Zo(e, t);
      } finally {
        Va = !1, ts();
      }
    }
    function ns(e, t, r) {
      if (es)
        return e(t, r);
      es = !0;
      try {
        return _f(e, t, r);
      } finally {
        es = !1, ts();
      }
    }
    function Il(e, t, r, i, u) {
      var s = Va;
      Va = !0;
      try {
        return Vt(e, t, r, i, u);
      } finally {
        Va = s, Va || ts();
      }
    }
    function Od(e) {
      Va || Jo();
    }
    function rs(e, t, r, i) {
      Zo = e, Vt = t, Jo = r, _f = i;
    }
    function xf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function kf(e, t, r) {
      switch (e) {
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
          return !!(r.disabled && xf(t));
        default:
          return !1;
      }
    }
    function Wl(e, t) {
      var r = e.stateNode;
      if (r === null)
        return null;
      var i = Dp(r);
      if (i === null)
        return null;
      var u = i[t];
      if (kf(t, e.type, i))
        return null;
      if (!(!u || typeof u == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Vu = !1;
    if (it)
      try {
        var $l = {};
        Object.defineProperty($l, "passive", {
          get: function() {
            Vu = !0;
          }
        }), window.addEventListener("test", $l, $l), window.removeEventListener("test", $l, $l);
      } catch {
        Vu = !1;
      }
    function Md(e, t, r, i, u, s, c, d, v) {
      var g = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, g);
      } catch (S) {
        this.onError(S);
      }
    }
    var as = Md;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Si = document.createElement("react");
      as = function(t, r, i, u, s, c, d, v, g) {
        if (!(typeof document < "u"))
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var S = document.createEvent("Event"), O = !1, b = !0, L = window.event, W = Object.getOwnPropertyDescriptor(window, "event");
        function te() {
          Si.removeEventListener(j, lt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var Ae = Array.prototype.slice.call(arguments, 3);
        function lt() {
          O = !0, te(), r.apply(i, Ae), b = !1;
        }
        var Ie, wt = !1, It = !1;
        function N(k) {
          if (Ie = k.error, wt = !0, Ie === null && k.colno === 0 && k.lineno === 0 && (It = !0), k.defaultPrevented && Ie != null && typeof Ie == "object")
            try {
              Ie._suppressLogging = !0;
            } catch {
            }
        }
        var j = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", N), Si.addEventListener(j, lt, !1), S.initEvent(j, !1, !1), Si.dispatchEvent(S), W && Object.defineProperty(window, "event", W), O && b && (wt ? It && (Ie = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ie = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ie)), window.removeEventListener("error", N), !O)
          return te(), Md.apply(this, arguments);
      };
    }
    var Nd = as, Ei = !1, is = null, al = !1, ha = null, ls = {
      onError: function(e) {
        Ei = !0, is = e;
      }
    };
    function rr(e, t, r, i, u, s, c, d, v) {
      Ei = !1, is = null, Nd.apply(ls, arguments);
    }
    function Ld(e, t, r, i, u, s, c, d, v) {
      if (rr.apply(this, arguments), Ei) {
        var g = ar();
        al || (al = !0, ha = g);
      }
    }
    function il() {
      if (al) {
        var e = ha;
        throw al = !1, ha = null, e;
      }
    }
    function wr() {
      return Ei;
    }
    function ar() {
      if (Ei) {
        var e = is;
        return Ei = !1, is = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ba(e) {
      return e._reactInternals;
    }
    function Ad(e) {
      return e._reactInternals !== void 0;
    }
    function Df(e, t) {
      e._reactInternals = t;
    }
    var zt = (
      /*                      */
      0
    ), ir = (
      /*                */
      1
    ), Je = (
      /*                    */
      2
    ), Ve = (
      /*                       */
      4
    ), Ci = (
      /*           */
      6
    ), Qt = (
      /*                     */
      8
    ), Un = (
      /*                 */
      16
    ), Ri = (
      /*                     */
      32
    ), Dt = (
      /*                   */
      64
    ), zn = (
      /*                          */
      128
    ), ma = (
      /*                     */
      256
    ), Yl = (
      /*                      */
      512
    ), ql = (
      /*     */
      8192
    ), zr = (
      /*                    */
      1024
    ), Ud = (
      /*           */
      1028
    ), Of = (
      /*          */
      932
    ), ll = (
      /*               */
      2047
    ), Bu = (
      /*                   */
      2048
    ), Kr = (
      /*                */
      4096
    ), Iu = (
      /* */
      16384
    ), ch = nt.ReactCurrentOwner;
    function bi(e) {
      var t = e, r = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Je | zr)) !== zt && (r = t.return), i = t.return;
        while (i);
      }
      return t.tag === ce ? r : null;
    }
    function us(e) {
      if (e.tag === ee) {
        var t = e.memoizedState;
        if (t === null) {
          var r = e.alternate;
          r !== null && (t = r.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function zd(e) {
      return e.tag === ce ? e.stateNode.containerInfo : null;
    }
    function os(e) {
      return bi(e) === e;
    }
    function jd(e) {
      {
        var t = ch.current;
        if (t !== null && t.tag === Z) {
          var r = t, i = r.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", re(r.type) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ba(e);
      return u ? bi(u) === u : !1;
    }
    function Mf(e) {
      if (bi(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Nf(e) {
      var t = e.alternate;
      if (!t) {
        var r = bi(e);
        if (r === null)
          throw Error("Unable to find node on an unmounted component.");
        return r !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var c = s.alternate;
        if (c === null) {
          var d = s.return;
          if (d !== null) {
            i = u = d;
            continue;
          }
          break;
        }
        if (s.child === c.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Mf(s), e;
            if (v === u)
              return Mf(s), t;
            v = v.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = c;
        else {
          for (var g = !1, S = s.child; S; ) {
            if (S === i) {
              g = !0, i = s, u = c;
              break;
            }
            if (S === u) {
              g = !0, u = s, i = c;
              break;
            }
            S = S.sibling;
          }
          if (!g) {
            for (S = c.child; S; ) {
              if (S === i) {
                g = !0, i = c, u = s;
                break;
              }
              if (S === u) {
                g = !0, u = c, i = s;
                break;
              }
              S = S.sibling;
            }
            if (!g)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ce)
        throw Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Lf(e) {
      var t = Nf(e);
      if (!t)
        return null;
      for (var r = t; ; ) {
        if (r.tag === he || r.tag === We)
          return r;
        if (r.child) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t)
          return null;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    function Af(e) {
      var t = Nf(e);
      if (!t)
        return null;
      for (var r = t; ; ) {
        if (r.tag === he || r.tag === We || $)
          return r;
        if (r.child && r.tag !== xe) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === t)
          return null;
        for (; !r.sibling; ) {
          if (!r.return || r.return === t)
            return null;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return null;
    }
    function Pd(e, t) {
      for (var r = t, i = e.alternate; r !== null; ) {
        if (r === e || r === i)
          return !0;
        r = r.return;
      }
      return !1;
    }
    var ya;
    function ss(e) {
      ya = e;
    }
    var Wu;
    function Fd(e) {
      Wu = e;
    }
    var jn;
    function Ql(e) {
      jn = e;
    }
    var Uf;
    function ul(e) {
      Uf = e;
    }
    var ol = !1, Cn = [], Ia = null, Ti = null, Rn = null, wi = /* @__PURE__ */ new Map(), _i = /* @__PURE__ */ new Map(), ga = [];
    function fs() {
      return Cn.length > 0;
    }
    var zf = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function cs(e) {
      return zf.indexOf(e) > -1;
    }
    function jf(e, t, r, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: r | kd,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function sl(e, t, r, i, u) {
      var s = jf(e, t, r, i, u);
      Cn.push(s);
    }
    function _r(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ia = null;
          break;
        case "dragenter":
        case "dragleave":
          Ti = null;
          break;
        case "mouseover":
        case "mouseout":
          Rn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var r = t.pointerId;
          wi.delete(r);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          _i.delete(i);
          break;
        }
      }
    }
    function jr(e, t, r, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var c = jf(t, r, i, u, s);
        if (t !== null) {
          var d = pu(t);
          d !== null && Wu(d);
        }
        return c;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Pf(e, t, r, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Ia = jr(Ia, e, t, r, i, s), !0;
        }
        case "dragenter": {
          var c = u;
          return Ti = jr(Ti, e, t, r, i, c), !0;
        }
        case "mouseover": {
          var d = u;
          return Rn = jr(Rn, e, t, r, i, d), !0;
        }
        case "pointerover": {
          var v = u, g = v.pointerId;
          return wi.set(g, jr(wi.get(g) || null, e, t, r, i, v)), !0;
        }
        case "gotpointercapture": {
          var S = u, O = S.pointerId;
          return _i.set(O, jr(_i.get(O) || null, e, t, r, i, S)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = Ro(e.target);
      if (t !== null) {
        var r = bi(t);
        if (r !== null) {
          var i = r.tag;
          if (i === ee) {
            var u = us(r);
            if (u !== null) {
              e.blockedOn = u, Uf(e.lanePriority, function() {
                fe.unstable_runWithPriority(e.priority, function() {
                  jn(r);
                });
              });
              return;
            }
          } else if (i === ce) {
            var s = r.stateNode;
            if (s.hydrate) {
              e.blockedOn = zd(r);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Zr(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var r = t[0], i = uo(e.domEventName, e.eventSystemFlags, r, e.nativeEvent);
        if (i !== null) {
          var u = pu(i);
          return u !== null && Wu(u), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wa(e, t, r) {
      Zr(e) && r.delete(t);
    }
    function Vd() {
      for (ol = !1; Cn.length > 0; ) {
        var e = Cn[0];
        if (e.blockedOn !== null) {
          var t = pu(e.blockedOn);
          t !== null && ya(t);
          break;
        }
        for (var r = e.targetContainers; r.length > 0; ) {
          var i = r[0], u = uo(e.domEventName, e.eventSystemFlags, i, e.nativeEvent);
          if (u !== null) {
            e.blockedOn = u;
            break;
          }
          r.shift();
        }
        e.blockedOn === null && Cn.shift();
      }
      Ia !== null && Zr(Ia) && (Ia = null), Ti !== null && Zr(Ti) && (Ti = null), Rn !== null && Zr(Rn) && (Rn = null), wi.forEach(Wa), _i.forEach(Wa);
    }
    function $a(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ol || (ol = !0, fe.unstable_scheduleCallback(fe.unstable_NormalPriority, Vd)));
    }
    function Ff(e) {
      if (Cn.length > 0) {
        $a(Cn[0], e);
        for (var t = 1; t < Cn.length; t++) {
          var r = Cn[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      Ia !== null && $a(Ia, e), Ti !== null && $a(Ti, e), Rn !== null && $a(Rn, e);
      var i = function(d) {
        return $a(d, e);
      };
      wi.forEach(i), _i.forEach(i);
      for (var u = 0; u < ga.length; u++) {
        var s = ga[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; ga.length > 0; ) {
        var c = ga[0];
        if (c.blockedOn !== null)
          break;
        Hd(c), c.blockedOn === null && ga.shift();
      }
    }
    var ds = 0, $u = 1, Gl = 2;
    function Yu(e, t) {
      var r = {};
      return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
    }
    var fl = {
      animationend: Yu("Animation", "AnimationEnd"),
      animationiteration: Yu("Animation", "AnimationIteration"),
      animationstart: Yu("Animation", "AnimationStart"),
      transitionend: Yu("Transition", "TransitionEnd")
    }, ps = {}, vs = {};
    it && (vs = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
    function cl(e) {
      if (ps[e])
        return ps[e];
      if (!fl[e])
        return e;
      var t = fl[e];
      for (var r in t)
        if (t.hasOwnProperty(r) && r in vs)
          return ps[e] = t[r];
      return e;
    }
    var Xl = cl("animationend"), qu = cl("animationiteration"), Hf = cl("animationstart"), Qu = cl("transitionend"), Vf = /* @__PURE__ */ new Map(), dl = /* @__PURE__ */ new Map(), Sa = [
      "cancel",
      "cancel",
      "click",
      "click",
      "close",
      "close",
      "contextmenu",
      "contextMenu",
      "copy",
      "copy",
      "cut",
      "cut",
      "auxclick",
      "auxClick",
      "dblclick",
      "doubleClick",
      // Careful!
      "dragend",
      "dragEnd",
      "dragstart",
      "dragStart",
      "drop",
      "drop",
      "focusin",
      "focus",
      // Careful!
      "focusout",
      "blur",
      // Careful!
      "input",
      "input",
      "invalid",
      "invalid",
      "keydown",
      "keyDown",
      "keypress",
      "keyPress",
      "keyup",
      "keyUp",
      "mousedown",
      "mouseDown",
      "mouseup",
      "mouseUp",
      "paste",
      "paste",
      "pause",
      "pause",
      "play",
      "play",
      "pointercancel",
      "pointerCancel",
      "pointerdown",
      "pointerDown",
      "pointerup",
      "pointerUp",
      "ratechange",
      "rateChange",
      "reset",
      "reset",
      "seeked",
      "seeked",
      "submit",
      "submit",
      "touchcancel",
      "touchCancel",
      "touchend",
      "touchEnd",
      "touchstart",
      "touchStart",
      "volumechange",
      "volumeChange"
    ], Gu = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"], Xu = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"], pl = ["abort", "abort", Xl, "animationEnd", qu, "animationIteration", Hf, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Qu, "transitionEnd", "waiting", "waiting"];
    function Ku(e, t) {
      for (var r = 0; r < e.length; r += 2) {
        var i = e[r], u = e[r + 1], s = u[0].toUpperCase() + u.slice(1), c = "on" + s;
        dl.set(i, t), Vf.set(i, c), be(c, [i]);
      }
    }
    function Kl(e, t) {
      for (var r = 0; r < e.length; r++)
        dl.set(e[r], t);
    }
    function Bd(e) {
      var t = dl.get(e);
      return t === void 0 ? Gl : t;
    }
    function Bf() {
      Ku(Sa, ds), Ku(Xu, $u), Ku(pl, Gl), Kl(Gu, ds);
    }
    var rn = fe.unstable_now;
    if (!(z.__interactionsRef != null && z.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var Zu = 99, Ea = 98, Ya = 97, Ca = 96, If = 95, Id = 90;
    rn();
    var xi = 15, Ju = 14, eo = 13, Zl = 12, vl = 11, ki = 10, Jl = 9, bn = 8, eu = 7, Gt = 6, Tn = 5, wn = 4, to = 3, Di = 2, lr = 1, qa = 0, Wf = 31, H = (
      /*                        */
      0
    ), dn = (
      /*                          */
      0
    ), vt = (
      /*                        */
      1
    ), Qa = (
      /*                 */
      2
    ), hl = (
      /*      */
      4
    ), no = (
      /*                    */
      24
    ), $f = (
      /*           */
      32
    ), Yf = (
      /*                  */
      192
    ), tu = (
      /*            */
      256
    ), nu = (
      /*                   */
      3584
    ), qf = (
      /*                */
      4096
    ), Ga = (
      /*                       */
      4186112
    ), ru = (
      /*                            */
      62914560
    ), Oi = (
      /*                  */
      33554432
    ), hs = (
      /*          */
      67108864
    ), ro = (
      /*                                 */
      134217727
    ), Qf = (
      /*               */
      134217728
    ), ms = (
      /*                             */
      805306368
    ), Jr = (
      /*                   */
      1073741824
    ), Xt = -1;
    function dh(e) {
    }
    var Ft = bn;
    function au(e) {
      if ((vt & e) !== H)
        return Ft = xi, vt;
      if ((Qa & e) !== H)
        return Ft = Ju, Qa;
      if ((hl & e) !== H)
        return Ft = eo, hl;
      var t = no & e;
      if (t !== H)
        return Ft = Zl, t;
      if ((e & $f) !== H)
        return Ft = vl, $f;
      var r = Yf & e;
      if (r !== H)
        return Ft = ki, r;
      if ((e & tu) !== H)
        return Ft = Jl, tu;
      var i = nu & e;
      if (i !== H)
        return Ft = bn, i;
      if ((e & qf) !== H)
        return Ft = eu, qf;
      var u = Ga & e;
      if (u !== H)
        return Ft = Gt, u;
      var s = ru & e;
      if (s !== H)
        return Ft = Tn, s;
      if (e & hs)
        return Ft = wn, hs;
      if ((e & Qf) !== H)
        return Ft = to, Qf;
      var c = ms & e;
      return c !== H ? (Ft = Di, c) : (Jr & e) !== H ? (Ft = lr, Jr) : (E("Should have found matching lanes. This is a bug in React."), Ft = bn, e);
    }
    function Gf(e) {
      switch (e) {
        case Zu:
          return xi;
        case Ea:
          return ki;
        case Ya:
        case Ca:
          return bn;
        case If:
          return Di;
        default:
          return qa;
      }
    }
    function ys(e) {
      switch (e) {
        case xi:
        case Ju:
          return Zu;
        case eo:
        case Zl:
        case vl:
        case ki:
          return Ea;
        case Jl:
        case bn:
        case eu:
        case Gt:
        case wn:
        case Tn:
          return Ya;
        case to:
        case Di:
        case lr:
          return If;
        case qa:
          return Id;
        default:
          throw Error("Invalid update priority: " + e + ". This is a bug in React.");
      }
    }
    function ao(e, t) {
      var r = e.pendingLanes;
      if (r === H)
        return Ft = qa, H;
      var i = H, u = qa, s = e.expiredLanes, c = e.suspendedLanes, d = e.pingedLanes;
      if (s !== H)
        i = s, u = Ft = xi;
      else {
        var v = r & ro;
        if (v !== H) {
          var g = v & ~c;
          if (g !== H)
            i = au(g), u = Ft;
          else {
            var S = v & d;
            S !== H && (i = au(S), u = Ft);
          }
        } else {
          var O = r & ~c;
          O !== H ? (i = au(O), u = Ft) : d !== H && (i = au(d), u = Ft);
        }
      }
      if (i === H)
        return H;
      if (i = r & qd(i), t !== H && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & c) === H) {
        au(t);
        var b = Ft;
        if (u <= b)
          return t;
        Ft = u;
      }
      var L = e.entangledLanes;
      if (L !== H)
        for (var W = e.entanglements, te = i & L; te > 0; ) {
          var Ae = Mi(te), lt = 1 << Ae;
          i |= W[Ae], te &= ~lt;
        }
      return i;
    }
    function ph(e, t) {
      for (var r = e.eventTimes, i = Xt; t > 0; ) {
        var u = Mi(t), s = 1 << u, c = r[u];
        c > i && (i = c), t &= ~s;
      }
      return i;
    }
    function vh(e, t) {
      au(e);
      var r = Ft;
      return r >= ki ? t + 250 : r >= Gt ? t + 5e3 : Xt;
    }
    function hh(e, t) {
      for (var r = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, c = r; c > 0; ) {
        var d = Mi(c), v = 1 << d, g = s[d];
        g === Xt ? ((v & i) === H || (v & u) !== H) && (s[d] = vh(v, t)) : g <= t && (e.expiredLanes |= v), c &= ~v;
      }
    }
    function Pr(e) {
      var t = e.pendingLanes & ~Jr;
      return t !== H ? t : t & Jr ? Jr : H;
    }
    function pr() {
      return Ft;
    }
    function Xf(e) {
      return (e & ro) !== H;
    }
    function Kf(e) {
      return (e & ru) === e;
    }
    function Wd(e) {
      return (e & Ga) === e;
    }
    function iu(e, t) {
      switch (e) {
        case qa:
          break;
        case xi:
          return vt;
        case Ju:
          return Qa;
        case Zl: {
          var r = _n(no & ~t);
          return r === dn ? iu(ki, t) : r;
        }
        case ki: {
          var i = _n(Yf & ~t);
          return i === dn ? iu(bn, t) : i;
        }
        case bn: {
          var u = _n(nu & ~t);
          return u === dn && (u = _n(Ga & ~t), u === dn && (u = _n(nu))), u;
        }
        case Gt:
        case Tn:
          break;
        case Di:
          var s = _n(ms & ~t);
          return s === dn && (s = _n(ms)), s;
      }
      throw Error("Invalid update priority: " + e + ". This is a bug in React.");
    }
    function $d(e, t) {
      var r = _n(Ga & ~t);
      return r === dn && (r = _n(Ga & ~e), r === dn && (r = _n(Ga))), r;
    }
    function Zf(e) {
      var t = _n(ru & ~e);
      return t === dn && (t = _n(ru)), t;
    }
    function Yd(e) {
      return e & -e;
    }
    function Jf(e) {
      var t = 31 - Kd(e);
      return t < 0 ? H : 1 << t;
    }
    function qd(e) {
      return (Jf(e) << 1) - 1;
    }
    function _n(e) {
      return Yd(e);
    }
    function Mi(e) {
      return 31 - Kd(e);
    }
    function Qd(e) {
      return Mi(e);
    }
    function Pn(e, t) {
      return (e & t) !== H;
    }
    function Ni(e, t) {
      return (e & t) === t;
    }
    function xt(e, t) {
      return e | t;
    }
    function lu(e, t) {
      return e & ~t;
    }
    function mh(e) {
      return e;
    }
    function Xa(e, t) {
      return e !== dn && e < t ? e : t;
    }
    function gs(e) {
      for (var t = [], r = 0; r < Wf; r++)
        t.push(e);
      return t;
    }
    function uu(e, t, r) {
      e.pendingLanes |= t;
      var i = t - 1;
      e.suspendedLanes &= i, e.pingedLanes &= i;
      var u = e.eventTimes, s = Qd(t);
      u[s] = r;
    }
    function Gd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var r = e.expirationTimes, i = t; i > 0; ) {
        var u = Mi(i), s = 1 << u;
        r[u] = Xt, i &= ~s;
      }
    }
    function ec(e, t, r) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function io(e) {
      e.expiredLanes |= no & e.pendingLanes;
    }
    function yh(e) {
      return (e & no) !== H;
    }
    function Xd(e, t) {
      e.mutableReadLanes |= t & e.pendingLanes;
    }
    function tc(e, t) {
      var r = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, c = r; c > 0; ) {
        var d = Mi(c), v = 1 << d;
        i[d] = H, u[d] = Xt, s[d] = Xt, c &= ~v;
      }
    }
    function nc(e, t) {
      e.entangledLanes |= t;
      for (var r = e.entanglements, i = t; i > 0; ) {
        var u = Mi(i), s = 1 << u;
        r[u] |= t, i &= ~s;
      }
    }
    var Kd = Math.clz32 ? Math.clz32 : gh, Zd = Math.log, Jd = Math.LN2;
    function gh(e) {
      return e === 0 ? 32 : 31 - (Zd(e) / Jd | 0) | 0;
    }
    var ep = fe.unstable_UserBlockingPriority, Sh = fe.unstable_runWithPriority, rc = !0;
    function ac(e) {
      rc = !!e;
    }
    function tp() {
      return rc;
    }
    function np(e, t, r) {
      var i = Bd(t), u;
      switch (i) {
        case ds:
          u = rp;
          break;
        case $u:
          u = ap;
          break;
        case Gl:
        default:
          u = lo;
          break;
      }
      return u.bind(null, t, r, e);
    }
    function rp(e, t, r, i) {
      Od(i.timeStamp), Il(lo, e, t, r, i);
    }
    function ap(e, t, r, i) {
      Sh(ep, lo.bind(null, e, t, r, i));
    }
    function lo(e, t, r, i) {
      if (rc) {
        var u = !0;
        if (u = (t & tl) === 0, u && fs() && cs(e)) {
          sl(
            null,
            // Flags that we're not actually blocked on anything as far as we know.
            e,
            t,
            r,
            i
          );
          return;
        }
        var s = uo(e, t, r, i);
        if (s === null) {
          u && _r(e, i);
          return;
        }
        if (u) {
          if (cs(e)) {
            sl(s, e, t, r, i);
            return;
          }
          if (Pf(s, e, t, r, i))
            return;
          _r(e, i);
        }
        Sg(e, t, i, null, r);
      }
    }
    function uo(e, t, r, i) {
      var u = Fu(i), s = Ro(u);
      if (s !== null) {
        var c = bi(s);
        if (c === null)
          s = null;
        else {
          var d = c.tag;
          if (d === ee) {
            var v = us(c);
            if (v !== null)
              return v;
            s = null;
          } else if (d === ce) {
            var g = c.stateNode;
            if (g.hydrate)
              return zd(c);
            s = null;
          } else
            c !== s && (s = null);
        }
      }
      return Sg(e, t, i, s, r), null;
    }
    function ip(e, t, r) {
      return e.addEventListener(t, r, !1), r;
    }
    function ic(e, t, r) {
      return e.addEventListener(t, r, !0), r;
    }
    function lp(e, t, r, i) {
      return e.addEventListener(t, r, {
        capture: !0,
        passive: i
      }), r;
    }
    function Eh(e, t, r, i) {
      return e.addEventListener(t, r, {
        passive: i
      }), r;
    }
    var oo = null, ou = null, ml = null;
    function qe(e) {
      return oo = e, ou = Fn(), !0;
    }
    function ur() {
      oo = null, ou = null, ml = null;
    }
    function pn() {
      if (ml)
        return ml;
      var e, t = ou, r = t.length, i, u = Fn(), s = u.length;
      for (e = 0; e < r && t[e] === u[e]; e++)
        ;
      var c = r - e;
      for (i = 1; i <= c && t[r - i] === u[s - i]; i++)
        ;
      var d = i > 1 ? 1 - i : void 0;
      return ml = u.slice(e, d), ml;
    }
    function Fn() {
      return "value" in oo ? oo.value : oo.textContent;
    }
    function Ra(e) {
      var t, r = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function su() {
      return !0;
    }
    function xn() {
      return !1;
    }
    function Yn(e) {
      function t(r, i, u, s, c) {
        this._reactName = r, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = c, this.currentTarget = null;
        for (var d in e)
          if (e.hasOwnProperty(d)) {
            var v = e[d];
            v ? this[d] = v(s) : this[d] = s[d];
          }
        var g = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return g ? this.isDefaultPrevented = su : this.isDefaultPrevented = xn, this.isPropagationStopped = xn, this;
      }
      return I(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = su);
        },
        stopPropagation: function() {
          var r = this.nativeEvent;
          r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = su);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: su
      }), t;
    }
    var ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, yl = Yn(ea), ba = I({}, ea, {
      view: 0,
      detail: 0
    }), lc = Yn(ba), so, fo, gl;
    function fu(e) {
      e !== gl && (gl && e.type === "mousemove" ? (so = e.screenX - gl.screenX, fo = e.screenY - gl.screenY) : (so = 0, fo = 0), gl = e);
    }
    var de = I({}, ba, {
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
      getModifierState: wa,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (fu(e), so);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : fo;
      }
    }), co = Yn(de), uc = I({}, de, {
      dataTransfer: 0
    }), Ta = Yn(uc), Li = I({}, ba, {
      relatedTarget: 0
    }), Sl = Yn(Li), po = I({}, ea, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oc = Yn(po), sc = I({}, ea, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ka = Yn(sc), vo = I({}, ea, {
      data: 0
    }), Ss = Yn(vo), Es = Ss, Za = {
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
    }, Cs = {
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
    };
    function ho(e) {
      if (e.key) {
        var t = Za[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var r = Ra(e);
        return r === 13 ? "Enter" : String.fromCharCode(r);
      }
      return e.type === "keydown" || e.type === "keyup" ? Cs[e.keyCode] || "Unidentified" : "";
    }
    var Rs = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function xr(e) {
      var t = this, r = t.nativeEvent;
      if (r.getModifierState)
        return r.getModifierState(e);
      var i = Rs[e];
      return i ? !!r[i] : !1;
    }
    function wa(e) {
      return xr;
    }
    var Ai = I({}, ba, {
      key: ho,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wa,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ra(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ra(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), bs = Yn(Ai), Fr = I({}, de, {
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
    }), fc = Yn(Fr), cu = I({}, ba, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wa
    }), cc = Yn(cu), Ch = I({}, ea, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), up = Yn(Ch), op = I({}, de, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ts = Yn(op), dc = [9, 13, 27, 32], El = 229, ws = it && "CompositionEvent" in window, du = null;
    it && "documentMode" in document && (du = document.documentMode);
    var mo = it && "TextEvent" in window && !du, sp = it && (!ws || du && du > 8 && du <= 11), fp = 32, pc = String.fromCharCode(fp);
    function cp() {
      be("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), be("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), be("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), be("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Ui = !1;
    function Rh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function bh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function zi(e, t) {
      return e === "keydown" && t.keyCode === El;
    }
    function dp(e, t) {
      switch (e) {
        case "keyup":
          return dc.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== El;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vc(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function pp(e) {
      return e.locale === "ko";
    }
    var Cl = !1;
    function ji(e, t, r, i, u) {
      var s, c;
      if (ws ? s = bh(t) : Cl ? dp(t, i) && (s = "onCompositionEnd") : zi(t, i) && (s = "onCompositionStart"), !s)
        return null;
      sp && !pp(i) && (!Cl && s === "onCompositionStart" ? Cl = qe(u) : s === "onCompositionEnd" && Cl && (c = pn()));
      var d = gp(r, s);
      if (d.length > 0) {
        var v = new Ss(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: d
        }), c)
          v.data = c;
        else {
          var g = vc(i);
          g !== null && (v.data = g);
        }
      }
    }
    function Th(e, t) {
      switch (e) {
        case "compositionend":
          return vc(t);
        case "keypress":
          var r = t.which;
          return r !== fp ? null : (Ui = !0, pc);
        case "textInput":
          var i = t.data;
          return i === pc && Ui ? null : i;
        default:
          return null;
      }
    }
    function wh(e, t) {
      if (Cl) {
        if (e === "compositionend" || !ws && dp(e, t)) {
          var r = pn();
          return ur(), Cl = !1, r;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Rh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return sp && !pp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vp(e, t, r, i, u) {
      var s;
      if (mo ? s = Th(t, i) : s = wh(t, i), !s)
        return null;
      var c = gp(r, "onBeforeInput");
      if (c.length > 0) {
        var d = new Es("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: d,
          listeners: c
        }), d.data = s;
      }
    }
    function _h(e, t, r, i, u, s, c) {
      ji(e, t, r, i, u), vp(e, t, r, i, u);
    }
    var Hr = {
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
      week: !0
    };
    function _s(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Hr[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function xh(e) {
      if (!it)
        return !1;
      var t = "on" + e, r = t in document;
      if (!r) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), r = typeof i[t] == "function";
      }
      return r;
    }
    function Pi() {
      be("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function yo(e, t, r, i) {
      Bl(i);
      var u = gp(t, "onChange");
      if (u.length > 0) {
        var s = new yl("onChange", "change", null, r, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var _a = null, Rl = null;
    function hc(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function mc(e) {
      var t = [];
      yo(t, Rl, e, Fu(e)), Hu(kh, t);
    }
    function kh(e) {
      pg(e, 0);
    }
    function xs(e) {
      var t = zs(e);
      if (T(t))
        return e;
    }
    function ks(e, t) {
      if (e === "change")
        return t;
    }
    var Ds = !1;
    it && (Ds = xh("input") && (!document.documentMode || document.documentMode > 9));
    function hp(e, t) {
      _a = e, Rl = t, _a.attachEvent("onpropertychange", mp);
    }
    function Os() {
      _a && (_a.detachEvent("onpropertychange", mp), _a = null, Rl = null);
    }
    function mp(e) {
      e.propertyName === "value" && xs(Rl) && mc(e);
    }
    function yc(e, t, r) {
      e === "focusin" ? (Os(), hp(t, r)) : e === "focusout" && Os();
    }
    function go(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return xs(Rl);
    }
    function Dh(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ms(e, t) {
      if (e === "click")
        return xs(t);
    }
    function yp(e, t) {
      if (e === "input" || e === "change")
        return xs(t);
    }
    function Oh(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Tr(e, "number", e.value);
    }
    function So(e, t, r, i, u, s, c) {
      var d = r ? zs(r) : window, v, g;
      if (hc(d) ? v = ks : _s(d) ? Ds ? v = yp : (v = go, g = yc) : Dh(d) && (v = Ms), v) {
        var S = v(t, r);
        if (S) {
          yo(e, S, i, u);
          return;
        }
      }
      g && g(t, d, r), t === "focusout" && Oh(d);
    }
    function Mh() {
      _e("onMouseEnter", ["mouseout", "mouseover"]), _e("onMouseLeave", ["mouseout", "mouseover"]), _e("onPointerEnter", ["pointerout", "pointerover"]), _e("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ns(e, t, r, i, u, s, c) {
      var d = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (d && !(s & kd)) {
        var g = i.relatedTarget || i.fromElement;
        if (g && (Ro(g) || kp(g)))
          return;
      }
      if (!(!v && !d)) {
        var S;
        if (u.window === u)
          S = u;
        else {
          var O = u.ownerDocument;
          O ? S = O.defaultView || O.parentWindow : S = window;
        }
        var b, L;
        if (v) {
          var W = i.relatedTarget || i.toElement;
          if (b = r, L = W ? Ro(W) : null, L !== null) {
            var te = bi(L);
            (L !== te || L.tag !== he && L.tag !== We) && (L = null);
          }
        } else
          b = null, L = r;
        if (b !== L) {
          var Ae = co, lt = "onMouseLeave", Ie = "onMouseEnter", wt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ae = fc, lt = "onPointerLeave", Ie = "onPointerEnter", wt = "pointer");
          var It = b == null ? S : zs(b), N = L == null ? S : zs(L), j = new Ae(lt, wt + "leave", b, i, u);
          j.target = It, j.relatedTarget = N;
          var k = null, G = Ro(u);
          if (G === r) {
            var ue = new Ae(Ie, wt + "enter", L, i, u);
            ue.target = N, ue.relatedTarget = It, k = ue;
          }
          oC(e, j, k, b, L);
        }
      }
    }
    function n(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var a = typeof Object.is == "function" ? Object.is : n, l = Object.prototype.hasOwnProperty;
    function o(e, t) {
      if (a(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var r = Object.keys(e), i = Object.keys(t);
      if (r.length !== i.length)
        return !1;
      for (var u = 0; u < r.length; u++)
        if (!l.call(t, r[u]) || !a(e[r[u]], t[r[u]]))
          return !1;
      return !0;
    }
    function f(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function p(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function m(e, t) {
      for (var r = f(e), i = 0, u = 0; r; ) {
        if (r.nodeType === Fa) {
          if (u = i + r.textContent.length, i <= t && u >= t)
            return {
              node: r,
              offset: t - i
            };
          i = u;
        }
        r = f(p(r));
      }
    }
    function y(e) {
      var t = e.ownerDocument, r = t && t.defaultView || window, i = r.getSelection && r.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, c = i.focusNode, d = i.focusOffset;
      try {
        u.nodeType, c.nodeType;
      } catch {
        return null;
      }
      return R(e, u, s, c, d);
    }
    function R(e, t, r, i, u) {
      var s = 0, c = -1, d = -1, v = 0, g = 0, S = e, O = null;
      e:
        for (; ; ) {
          for (var b = null; S === t && (r === 0 || S.nodeType === Fa) && (c = s + r), S === i && (u === 0 || S.nodeType === Fa) && (d = s + u), S.nodeType === Fa && (s += S.nodeValue.length), (b = S.firstChild) !== null; )
            O = S, S = b;
          for (; ; ) {
            if (S === e)
              break e;
            if (O === t && ++v === r && (c = s), O === i && ++g === u && (d = s), (b = S.nextSibling) !== null)
              break;
            S = O, O = S.parentNode;
          }
          S = b;
        }
      return c === -1 || d === -1 ? null : {
        start: c,
        end: d
      };
    }
    function U(e, t) {
      var r = e.ownerDocument || document, i = r && r.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, c = Math.min(t.start, s), d = t.end === void 0 ? c : Math.min(t.end, s);
        if (!u.extend && c > d) {
          var v = d;
          d = c, c = v;
        }
        var g = m(e, c), S = m(e, d);
        if (g && S) {
          if (u.rangeCount === 1 && u.anchorNode === g.node && u.anchorOffset === g.offset && u.focusNode === S.node && u.focusOffset === S.offset)
            return;
          var O = r.createRange();
          O.setStart(g.node, g.offset), u.removeAllRanges(), c > d ? (u.addRange(O), u.extend(S.node, S.offset)) : (O.setEnd(S.node, S.offset), u.addRange(O));
        }
      }
    }
    function oe(e) {
      return e && e.nodeType === Fa;
    }
    function Qe(e, t) {
      return !e || !t ? !1 : e === t ? !0 : oe(e) ? !1 : oe(t) ? Qe(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function Q(e) {
      return e && e.ownerDocument && Qe(e.ownerDocument.documentElement, e);
    }
    function Te(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function Ye() {
      for (var e = window, t = A(); t instanceof e.HTMLIFrameElement; ) {
        if (Te(t))
          e = t.contentWindow;
        else
          return t;
        t = A(e.document);
      }
      return t;
    }
    function ze(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function D() {
      var e = Ye();
      return {
        focusedElem: e,
        selectionRange: ze(e) ? x(e) : null
      };
    }
    function w(e) {
      var t = Ye(), r = e.focusedElem, i = e.selectionRange;
      if (t !== r && Q(r)) {
        i !== null && ze(r) && F(r, i);
        for (var u = [], s = r; s = s.parentNode; )
          s.nodeType === Ar && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof r.focus == "function" && r.focus();
        for (var c = 0; c < u.length; c++) {
          var d = u[c];
          d.element.scrollLeft = d.left, d.element.scrollTop = d.top;
        }
      }
    }
    function x(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = y(e), t || {
        start: 0,
        end: 0
      };
    }
    function F(e, t) {
      var r = t.start, i = t.end;
      i === void 0 && (i = r), "selectionStart" in e ? (e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length)) : U(e, t);
    }
    var B = it && "documentMode" in document && document.documentMode <= 11;
    function et() {
      be("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var pe = null, Ge = null, rt = null, tt = !1;
    function Fi(e) {
      if ("selectionStart" in e && ze(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, r = t.getSelection();
      return {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      };
    }
    function Nh(e) {
      return e.window === e ? e.document : e.nodeType === mi ? e : e.ownerDocument;
    }
    function fg(e, t, r) {
      var i = Nh(r);
      if (!(tt || pe == null || pe !== A(i))) {
        var u = Fi(pe);
        if (!rt || !o(rt, u)) {
          rt = u;
          var s = gp(Ge, "onSelect");
          if (s.length > 0) {
            var c = new yl("onSelect", "select", null, t, r);
            e.push({
              event: c,
              listeners: s
            }), c.target = pe;
          }
        }
      }
    }
    function tC(e, t, r, i, u, s, c) {
      var d = r ? zs(r) : window;
      switch (t) {
        case "focusin":
          (_s(d) || d.contentEditable === "true") && (pe = d, Ge = r, rt = null);
          break;
        case "focusout":
          pe = null, Ge = null, rt = null;
          break;
        case "mousedown":
          tt = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          tt = !1, fg(e, i, u);
          break;
        case "selectionchange":
          if (B)
            break;
        case "keydown":
        case "keyup":
          fg(e, i, u);
      }
    }
    function nC(e, t, r, i, u, s, c) {
      var d = Vf.get(t);
      if (d !== void 0) {
        var v = yl, g = t;
        switch (t) {
          case "keypress":
            if (Ra(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = bs;
            break;
          case "focusin":
            g = "focus", v = Sl;
            break;
          case "focusout":
            g = "blur", v = Sl;
            break;
          case "beforeblur":
          case "afterblur":
            v = Sl;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = co;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ta;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = cc;
            break;
          case Xl:
          case qu:
          case Hf:
            v = oc;
            break;
          case Qu:
            v = up;
            break;
          case "scroll":
            v = lc;
            break;
          case "wheel":
            v = Ts;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Ka;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = fc;
            break;
        }
        var S = (s & tl) !== 0;
        {
          var O = !S && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = lC(r, d, i.type, S, O);
          if (b.length > 0) {
            var L = new v(d, g, null, i, u);
            e.push({
              event: L,
              listeners: b
            });
          }
        }
      }
    }
    Bf(), Mh(), Pi(), et(), cp();
    function rC(e, t, r, i, u, s, c) {
      nC(e, t, r, i, u, s);
      var d = (s & Vl) === 0;
      d && (Ns(e, t, r, i, u, s), So(e, t, r, i, u), tC(e, t, r, i, u), _h(e, t, r, i, u));
    }
    var gc = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], cg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(gc));
    function dg(e, t, r) {
      var i = e.type || "unknown-event";
      e.currentTarget = r, Ld(i, t, void 0, e), e.currentTarget = null;
    }
    function aC(e, t, r) {
      var i;
      if (r)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], c = s.instance, d = s.currentTarget, v = s.listener;
          if (c !== i && e.isPropagationStopped())
            return;
          dg(e, v, d), i = c;
        }
      else
        for (var g = 0; g < t.length; g++) {
          var S = t[g], O = S.instance, b = S.currentTarget, L = S.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          dg(e, L, b), i = O;
        }
    }
    function pg(e, t) {
      for (var r = (t & tl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, c = u.listeners;
        aC(s, c, r);
      }
      il();
    }
    function iC(e, t, r, i, u) {
      var s = Fu(r), c = [];
      rC(c, e, i, r, s, t), pg(c, t);
    }
    function tn(e, t) {
      var r = !1, i = Yg(t), u = Cg(e, r);
      i.has(u) || (yg(t, e, Pu, r), i.add(u));
    }
    var vg = "_reactListening" + Math.random().toString(36).slice(2);
    function hg(e) {
      {
        if (e[vg])
          return;
        e[vg] = !0, V.forEach(function(t) {
          cg.has(t) || mg(t, !1, e, null), mg(t, !0, e, null);
        });
      }
    }
    function mg(e, t, r, i) {
      var u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, s = r;
      if (e === "selectionchange" && r.nodeType !== mi && (s = r.ownerDocument), i !== null && !t && cg.has(e)) {
        if (e !== "scroll")
          return;
        u |= Pu, s = i;
      }
      var c = Yg(s), d = Cg(e, t);
      c.has(d) || (t && (u |= tl), yg(s, e, u, t), c.add(d));
    }
    function yg(e, t, r, i, u) {
      var s = np(e, t, r), c = void 0;
      Vu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (c = !0), e = e, i ? c !== void 0 ? lp(e, t, s, c) : ic(e, t, s) : c !== void 0 ? Eh(e, t, s, c) : ip(e, t, s);
    }
    function gg(e, t) {
      return e === t || e.nodeType === tr && e.parentNode === t;
    }
    function Sg(e, t, r, i, u) {
      var s = i;
      if (!(t & Rf) && !(t & Pu)) {
        var c = u;
        if (i !== null) {
          var d = i;
          e:
            for (; ; ) {
              if (d === null)
                return;
              var v = d.tag;
              if (v === ce || v === xe) {
                var g = d.stateNode.containerInfo;
                if (gg(g, c))
                  break;
                if (v === xe)
                  for (var S = d.return; S !== null; ) {
                    var O = S.tag;
                    if (O === ce || O === xe) {
                      var b = S.stateNode.containerInfo;
                      if (gg(b, c))
                        return;
                    }
                    S = S.return;
                  }
                for (; g !== null; ) {
                  var L = Ro(g);
                  if (L === null)
                    return;
                  var W = L.tag;
                  if (W === he || W === We) {
                    d = s = L;
                    continue e;
                  }
                  g = g.parentNode;
                }
              }
              d = d.return;
            }
        }
      }
      ns(function() {
        return iC(e, t, r, s);
      });
    }
    function Sc(e, t, r) {
      return {
        instance: e,
        listener: t,
        currentTarget: r
      };
    }
    function lC(e, t, r, i, u) {
      for (var s = t !== null ? t + "Capture" : null, c = i ? s : t, d = [], v = e, g = null; v !== null; ) {
        var S = v, O = S.stateNode, b = S.tag;
        if (b === he && O !== null && (g = O, c !== null)) {
          var L = Wl(v, c);
          L != null && d.push(Sc(v, L, g));
        }
        if (u)
          break;
        v = v.return;
      }
      return d;
    }
    function gp(e, t) {
      for (var r = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, c = s.stateNode, d = s.tag;
        if (d === he && c !== null) {
          var v = c, g = Wl(u, r);
          g != null && i.unshift(Sc(u, g, v));
          var S = Wl(u, t);
          S != null && i.push(Sc(u, S, v));
        }
        u = u.return;
      }
      return i;
    }
    function Ls(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== he);
      return e || null;
    }
    function uC(e, t) {
      for (var r = e, i = t, u = 0, s = r; s; s = Ls(s))
        u++;
      for (var c = 0, d = i; d; d = Ls(d))
        c++;
      for (; u - c > 0; )
        r = Ls(r), u--;
      for (; c - u > 0; )
        i = Ls(i), c--;
      for (var v = u; v--; ) {
        if (r === i || i !== null && r === i.alternate)
          return r;
        r = Ls(r), i = Ls(i);
      }
      return null;
    }
    function Eg(e, t, r, i, u) {
      for (var s = t._reactName, c = [], d = r; d !== null && d !== i; ) {
        var v = d, g = v.alternate, S = v.stateNode, O = v.tag;
        if (g !== null && g === i)
          break;
        if (O === he && S !== null) {
          var b = S;
          if (u) {
            var L = Wl(d, s);
            L != null && c.unshift(Sc(d, L, b));
          } else if (!u) {
            var W = Wl(d, s);
            W != null && c.push(Sc(d, W, b));
          }
        }
        d = d.return;
      }
      c.length !== 0 && e.push({
        event: t,
        listeners: c
      });
    }
    function oC(e, t, r, i, u) {
      var s = i && u ? uC(i, u) : null;
      i !== null && Eg(e, t, i, s, !1), u !== null && r !== null && Eg(e, r, u, s, !0);
    }
    function Cg(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Vr = !1, Ec = "dangerouslySetInnerHTML", Sp = "suppressContentEditableWarning", Cc = "suppressHydrationWarning", Rg = "autoFocus", Eo = "children", Co = "style", Ep = "__html", As = Qo.html, Lh, Rc, Cp, Rp, bc, bg, bp, Tg, Tc, wg;
    {
      Lh = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Cp = function(e, t) {
        bd(e, t), oh(e, t), xd(e, t, {
          registrationNameDependencies: K,
          possibleRegistrationNames: X
        });
      }, Tg = it && !document.documentMode;
      var sC = /\r\n?/g, fC = /\u0000|\uFFFD/g;
      Tc = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(sC, `
`).replace(fC, "");
      }, Rp = function(e, t) {
        if (!Vr) {
          var r = Tc(t), i = Tc(e);
          i !== r && (Vr = !0, E('Text content did not match. Server: "%s" Client: "%s"', i, r));
        }
      }, bc = function(e, t, r) {
        if (!Vr) {
          var i = Tc(r), u = Tc(t);
          u !== i && (Vr = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
        }
      }, bg = function(e) {
        if (!Vr) {
          Vr = !0;
          var t = [];
          e.forEach(function(r) {
            t.push(r);
          }), E("Extra attributes from the server: %s", t);
        }
      }, bp = function(e, t) {
        t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, wg = function(e, t) {
        var r = e.namespaceURI === As ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return r.innerHTML = t, r.innerHTML;
      };
    }
    function _g(e) {
      return e.nodeType === mi ? e : e.ownerDocument;
    }
    function cC() {
    }
    function Tp(e) {
      e.onclick = cC;
    }
    function dC(e, t, r, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var c = i[s];
          if (s === Co)
            c && Object.freeze(c), gf(t, c);
          else if (s === Ec) {
            var d = c ? c[Ep] : void 0;
            d != null && ud(t, d);
          } else if (s === Eo)
            if (typeof c == "string") {
              var v = e !== "textarea" || c !== "";
              v && Xo(t, c);
            } else
              typeof c == "number" && Xo(t, "" + c);
          else
            s === Sp || s === Cc || s === Rg || (K.hasOwnProperty(s) ? c != null && (typeof c != "function" && bp(s, c), s === "onScroll" && tn("scroll", t)) : c != null && Ut(t, s, c, u));
        }
    }
    function pC(e, t, r, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], c = t[u + 1];
        s === Co ? gf(e, c) : s === Ec ? ud(e, c) : s === Eo ? Xo(e, c) : Ut(e, s, c, i);
      }
    }
    function vC(e, t, r, i) {
      var u, s = _g(r), c, d = i;
      if (d === As && (d = Lu(e)), d === As) {
        if (u = Xr(e, t), !u && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var g = v.firstChild;
          c = v.removeChild(g);
        } else if (typeof t.is == "string")
          c = s.createElement(e, {
            is: t.is
          });
        else if (c = s.createElement(e), e === "select") {
          var S = c;
          t.multiple ? S.multiple = !0 : t.size && (S.size = t.size);
        }
      } else
        c = s.createElementNS(d, e);
      return d === As && !u && Object.prototype.toString.call(c) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(Lh, e) && (Lh[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), c;
    }
    function hC(e, t) {
      return _g(t).createTextNode(e);
    }
    function mC(e, t, r, i) {
      var u = Xr(t, r);
      Cp(t, r);
      var s;
      switch (t) {
        case "dialog":
          tn("cancel", e), tn("close", e), s = r;
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e), s = r;
          break;
        case "video":
        case "audio":
          for (var c = 0; c < gc.length; c++)
            tn(gc[c], e);
          s = r;
          break;
        case "source":
          tn("error", e), s = r;
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e), s = r;
          break;
        case "details":
          tn("toggle", e), s = r;
          break;
        case "input":
          Tt(e, r), s = ke(e, r), tn("invalid", e);
          break;
        case "option":
          ku(e, r), s = Al(e, r);
          break;
        case "select":
          Yo(e, r), s = Mu(e, r), tn("invalid", e);
          break;
        case "textarea":
          Nu(e, r), s = zl(e, r), tn("invalid", e);
          break;
        default:
          s = r;
      }
      switch (Ko(t, s), dC(t, e, i, s, u), t) {
        case "input":
          h(e), cn(e, r, !1);
          break;
        case "textarea":
          h(e), dr(e);
          break;
        case "option":
          sf(e, r);
          break;
        case "select":
          hi(e, r);
          break;
        default:
          typeof s.onClick == "function" && Tp(e);
          break;
      }
    }
    function yC(e, t, r, i, u) {
      Cp(t, i);
      var s = null, c, d;
      switch (t) {
        case "input":
          c = ke(e, r), d = ke(e, i), s = [];
          break;
        case "option":
          c = Al(e, r), d = Al(e, i), s = [];
          break;
        case "select":
          c = Mu(e, r), d = Mu(e, i), s = [];
          break;
        case "textarea":
          c = zl(e, r), d = zl(e, i), s = [];
          break;
        default:
          c = r, d = i, typeof c.onClick != "function" && typeof d.onClick == "function" && Tp(e);
          break;
      }
      Ko(t, d);
      var v, g, S = null;
      for (v in c)
        if (!(d.hasOwnProperty(v) || !c.hasOwnProperty(v) || c[v] == null))
          if (v === Co) {
            var O = c[v];
            for (g in O)
              O.hasOwnProperty(g) && (S || (S = {}), S[g] = "");
          } else
            v === Ec || v === Eo || v === Sp || v === Cc || v === Rg || (K.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in d) {
        var b = d[v], L = c != null ? c[v] : void 0;
        if (!(!d.hasOwnProperty(v) || b === L || b == null && L == null))
          if (v === Co)
            if (b && Object.freeze(b), L) {
              for (g in L)
                L.hasOwnProperty(g) && (!b || !b.hasOwnProperty(g)) && (S || (S = {}), S[g] = "");
              for (g in b)
                b.hasOwnProperty(g) && L[g] !== b[g] && (S || (S = {}), S[g] = b[g]);
            } else
              S || (s || (s = []), s.push(v, S)), S = b;
          else if (v === Ec) {
            var W = b ? b[Ep] : void 0, te = L ? L[Ep] : void 0;
            W != null && te !== W && (s = s || []).push(v, W);
          } else
            v === Eo ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === Sp || v === Cc || (K.hasOwnProperty(v) ? (b != null && (typeof b != "function" && bp(v, b), v === "onScroll" && tn("scroll", e)), !s && L !== b && (s = [])) : typeof b == "object" && b !== null && b.$$typeof === q ? b.toString() : (s = s || []).push(v, b));
      }
      return S && (ah(S, d[Co]), (s = s || []).push(Co, S)), s;
    }
    function gC(e, t, r, i, u) {
      r === "input" && u.type === "radio" && u.name != null && $t(e, u);
      var s = Xr(r, i), c = Xr(r, u);
      switch (pC(e, t, s, c), r) {
        case "input":
          en(e, u);
          break;
        case "textarea":
          df(e, u);
          break;
        case "select":
          ff(e, u);
          break;
      }
    }
    function SC(e) {
      {
        var t = e.toLowerCase();
        return yi.hasOwnProperty(t) && yi[t] || null;
      }
    }
    function EC(e, t, r, i, u) {
      var s, c;
      switch (Rc = r[Cc] === !0, s = Xr(t, r), Cp(t, r), t) {
        case "dialog":
          tn("cancel", e), tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e);
          break;
        case "video":
        case "audio":
          for (var d = 0; d < gc.length; d++)
            tn(gc[d], e);
          break;
        case "source":
          tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e);
          break;
        case "details":
          tn("toggle", e);
          break;
        case "input":
          Tt(e, r), tn("invalid", e);
          break;
        case "option":
          ku(e, r);
          break;
        case "select":
          Yo(e, r), tn("invalid", e);
          break;
        case "textarea":
          Nu(e, r), tn("invalid", e);
          break;
      }
      Ko(t, r);
      {
        c = /* @__PURE__ */ new Set();
        for (var v = e.attributes, g = 0; g < v.length; g++) {
          var S = v[g].name.toLowerCase();
          switch (S) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              c.add(v[g].name);
          }
        }
      }
      var O = null;
      for (var b in r)
        if (r.hasOwnProperty(b)) {
          var L = r[b];
          if (b === Eo)
            typeof L == "string" ? e.textContent !== L && (Rc || Rp(e.textContent, L), O = [Eo, L]) : typeof L == "number" && e.textContent !== "" + L && (Rc || Rp(e.textContent, L), O = [Eo, "" + L]);
          else if (K.hasOwnProperty(b))
            L != null && (typeof L != "function" && bp(b, L), b === "onScroll" && tn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof s == "boolean"
          ) {
            var W = void 0, te = fr(b);
            if (!Rc) {
              if (!(b === Sp || b === Cc || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              b === "value" || b === "checked" || b === "selected")) {
                if (b === Ec) {
                  var Ae = e.innerHTML, lt = L ? L[Ep] : void 0;
                  if (lt != null) {
                    var Ie = wg(e, lt);
                    Ie !== Ae && bc(b, Ae, Ie);
                  }
                } else if (b === Co) {
                  if (c.delete(b), Tg) {
                    var wt = yd(L);
                    W = e.getAttribute("style"), wt !== W && bc(b, W, wt);
                  }
                } else if (s)
                  c.delete(b.toLowerCase()), W = At(e, b, L), L !== W && bc(b, W, L);
                else if (!Aa(b, te, s) && !On(b, L, te, s)) {
                  var It = !1;
                  if (te !== null)
                    c.delete(te.attributeName), W = Lt(e, b, L, te);
                  else {
                    var N = i;
                    if (N === As && (N = Lu(t)), N === As)
                      c.delete(b.toLowerCase());
                    else {
                      var j = SC(b);
                      j !== null && j !== b && (It = !0, c.delete(j)), c.delete(b);
                    }
                    W = At(e, b, L);
                  }
                  L !== W && !It && bc(b, W, L);
                }
              }
            }
          }
        }
      switch (c.size > 0 && !Rc && bg(c), t) {
        case "input":
          h(e), cn(e, r, !0);
          break;
        case "textarea":
          h(e), dr(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof r.onClick == "function" && Tp(e);
          break;
      }
      return O;
    }
    function CC(e, t) {
      var r = e.nodeValue !== t;
      return r;
    }
    function xg(e, t) {
      Rp(e.nodeValue, t);
    }
    function kg(e, t) {
      {
        if (Vr)
          return;
        Vr = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Dg(e, t) {
      {
        if (Vr)
          return;
        Vr = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Og(e, t, r) {
      {
        if (Vr)
          return;
        Vr = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Mg(e, t) {
      {
        if (t === "" || Vr)
          return;
        Vr = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function RC(e, t, r) {
      switch (t) {
        case "input":
          Ln(e, r);
          return;
        case "textarea":
          jl(e, r);
          return;
        case "select":
          qo(e, r);
          return;
      }
    }
    var wc = function() {
    }, _c = function() {
    };
    {
      var bC = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Ng = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], TC = Ng.concat(["button"]), wC = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Lg = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      _c = function(e, t) {
        var r = I({}, e || Lg), i = {
          tag: t
        };
        return Ng.indexOf(t) !== -1 && (r.aTagInScope = null, r.buttonTagInScope = null, r.nobrTagInScope = null), TC.indexOf(t) !== -1 && (r.pTagInButtonScope = null), bC.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (r.listItemTagAutoclosing = null, r.dlItemTagAutoclosing = null), r.current = i, t === "form" && (r.formTag = i), t === "a" && (r.aTagInScope = i), t === "button" && (r.buttonTagInScope = i), t === "nobr" && (r.nobrTagInScope = i), t === "p" && (r.pTagInButtonScope = i), t === "li" && (r.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (r.dlItemTagAutoclosing = i), r;
      };
      var _C = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return wC.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, xC = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, Ag = {};
      wc = function(e, t, r) {
        r = r || Lg;
        var i = r.current, u = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = _C(e, u) ? null : i, c = s ? null : xC(e, r), d = s || c;
        if (d) {
          var v = d.tag, g = !!s + "|" + e + "|" + v;
          if (!Ag[g]) {
            Ag[g] = !0;
            var S = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? S = "Text nodes" : (S = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : S = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", S, v, O, b);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", S, v);
          }
        }
      };
    }
    var Us;
    Us = "suppressHydrationWarning";
    var Ug = "$", zg = "/$", Ah = "$?", Uh = "$!", kC = "style", zh = null, jh = null;
    function jg(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function DC(e) {
      var t, r, i = e.nodeType;
      switch (i) {
        case mi:
        case od: {
          t = i === mi ? "#document" : "#fragment";
          var u = e.documentElement;
          r = u ? u.namespaceURI : Ji(null, "");
          break;
        }
        default: {
          var s = i === tr ? e.parentNode : e, c = s.namespaceURI || null;
          t = s.tagName, r = Ji(c, t);
          break;
        }
      }
      {
        var d = t.toLowerCase(), v = _c(null, d);
        return {
          namespace: r,
          ancestorInfo: v
        };
      }
    }
    function OC(e, t, r) {
      {
        var i = e, u = Ji(i.namespace, t), s = _c(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function sw(e) {
      return e;
    }
    function MC(e) {
      zh = tp(), jh = D();
      var t = null;
      return ac(!1), t;
    }
    function NC(e) {
      w(jh), ac(zh), zh = null, jh = null;
    }
    function LC(e, t, r, i, u) {
      var s;
      {
        var c = i;
        if (wc(e, null, c.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var d = "" + t.children, v = _c(c.ancestorInfo, e);
          wc(null, d, v);
        }
        s = c.namespace;
      }
      var g = vC(e, t, r, s);
      return xp(u, g), Vh(g, t), g;
    }
    function AC(e, t) {
      e.appendChild(t);
    }
    function UC(e, t, r, i, u) {
      return mC(e, t, r, i), jg(t, r);
    }
    function zC(e, t, r, i, u, s) {
      {
        var c = s;
        if (typeof i.children != typeof r.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var d = "" + i.children, v = _c(c.ancestorInfo, t);
          wc(null, d, v);
        }
      }
      return yC(e, t, r, i);
    }
    function Ph(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function jC(e, t, r, i) {
      {
        var u = r;
        wc(null, e, u.ancestorInfo);
      }
      var s = hC(e, t);
      return xp(i, s), s;
    }
    var Pg = typeof setTimeout == "function" ? setTimeout : void 0, PC = typeof clearTimeout == "function" ? clearTimeout : void 0, Fh = -1;
    function FC(e, t, r, i) {
      jg(t, r) && e.focus();
    }
    function HC(e, t, r, i, u, s) {
      Vh(e, u), gC(e, t, r, i, u);
    }
    function Fg(e) {
      Xo(e, "");
    }
    function VC(e, t, r) {
      e.nodeValue = r;
    }
    function BC(e, t) {
      e.appendChild(t);
    }
    function IC(e, t) {
      var r;
      e.nodeType === tr ? (r = e.parentNode, r.insertBefore(t, e)) : (r = e, r.appendChild(t));
      var i = e._reactRootContainer;
      i == null && r.onclick === null && Tp(r);
    }
    function WC(e, t, r) {
      e.insertBefore(t, r);
    }
    function $C(e, t, r) {
      e.nodeType === tr ? e.parentNode.insertBefore(t, r) : e.insertBefore(t, r);
    }
    function YC(e, t) {
      e.removeChild(t);
    }
    function qC(e, t) {
      e.nodeType === tr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function QC(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function GC(e) {
      e.nodeValue = "";
    }
    function XC(e, t) {
      e = e;
      var r = t[kC], i = r != null && r.hasOwnProperty("display") ? r.display : null;
      e.style.display = vf("display", i);
    }
    function KC(e, t) {
      e.nodeValue = t;
    }
    function Hh(e) {
      if (e.nodeType === Ar)
        e.textContent = "";
      else if (e.nodeType === mi) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function ZC(e, t, r) {
      return e.nodeType !== Ar || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function JC(e, t) {
      return t === "" || e.nodeType !== Fa ? null : e;
    }
    function eR(e) {
      return e.data === Ah;
    }
    function tR(e) {
      return e.data === Uh;
    }
    function Hg(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ar || t === Fa)
          break;
      }
      return e;
    }
    function wp(e) {
      return Hg(e.nextSibling);
    }
    function Vg(e) {
      return Hg(e.firstChild);
    }
    function nR(e, t, r, i, u, s) {
      xp(s, e), Vh(e, r);
      var c;
      {
        var d = u;
        c = d.namespace;
      }
      return EC(e, t, r, c);
    }
    function rR(e, t, r) {
      return xp(r, e), CC(e, t);
    }
    function aR(e) {
      for (var t = e.nextSibling, r = 0; t; ) {
        if (t.nodeType === tr) {
          var i = t.data;
          if (i === zg) {
            if (r === 0)
              return wp(t);
            r--;
          } else
            (i === Ug || i === Uh || i === Ah) && r++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Bg(e) {
      for (var t = e.previousSibling, r = 0; t; ) {
        if (t.nodeType === tr) {
          var i = t.data;
          if (i === Ug || i === Uh || i === Ah) {
            if (r === 0)
              return t;
            r--;
          } else
            i === zg && r++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function iR(e) {
      Ff(e);
    }
    function lR(e) {
      Ff(e);
    }
    function uR(e, t, r) {
      xg(t, r);
    }
    function oR(e, t, r, i, u) {
      t[Us] !== !0 && xg(i, u);
    }
    function sR(e, t) {
      t.nodeType === Ar ? kg(e, t) : t.nodeType === tr || Dg(e, t);
    }
    function fR(e, t, r, i) {
      t[Us] !== !0 && (i.nodeType === Ar ? kg(r, i) : i.nodeType === tr || Dg(r, i));
    }
    function cR(e, t, r) {
      Og(e, t);
    }
    function dR(e, t) {
      Mg(e, t);
    }
    function pR(e, t, r, i, u) {
      t[Us] !== !0 && Og(r, i);
    }
    function vR(e, t, r, i) {
      t[Us] !== !0 && Mg(r, i);
    }
    function hR(e, t, r) {
      t[Us];
    }
    var mR = 0;
    function yR(e) {
      var t = "r:" + (mR++).toString(36);
      return {
        toString: function() {
          return e(), t;
        },
        valueOf: function() {
          return e(), t;
        }
      };
    }
    function gR(e) {
      return e !== null && typeof e == "object" && e.$$typeof === q;
    }
    function SR(e) {
      return {
        $$typeof: q,
        toString: e,
        valueOf: e
      };
    }
    function ER(e) {
      hg(e);
    }
    var _p = Math.random().toString(36).slice(2), xc = "__reactFiber$" + _p, Ig = "__reactProps$" + _p, kc = "__reactContainer$" + _p, Wg = "__reactEvents$" + _p;
    function xp(e, t) {
      t[xc] = e;
    }
    function CR(e, t) {
      t[kc] = e;
    }
    function $g(e) {
      e[kc] = null;
    }
    function kp(e) {
      return !!e[kc];
    }
    function Ro(e) {
      var t = e[xc];
      if (t)
        return t;
      for (var r = e.parentNode; r; ) {
        if (t = r[kc] || r[xc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Bg(e); u !== null; ) {
              var s = u[xc];
              if (s)
                return s;
              u = Bg(u);
            }
          return t;
        }
        e = r, r = e.parentNode;
      }
      return null;
    }
    function pu(e) {
      var t = e[xc] || e[kc];
      return t && (t.tag === he || t.tag === We || t.tag === ee || t.tag === ce) ? t : null;
    }
    function zs(e) {
      if (e.tag === he || e.tag === We)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Dp(e) {
      return e[Ig] || null;
    }
    function Vh(e, t) {
      e[Ig] = t;
    }
    function Yg(e) {
      var t = e[Wg];
      return t === void 0 && (t = e[Wg] = /* @__PURE__ */ new Set()), t;
    }
    var qg = {}, Qg = nt.ReactDebugCurrentFrame;
    function Op(e) {
      if (e) {
        var t = e._owner, r = Zn(e.type, e._source, t ? t.type : null);
        Qg.setExtraStackFrame(r);
      } else
        Qg.setExtraStackFrame(null);
    }
    function Ja(e, t, r, i, u) {
      {
        var s = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var c in e)
          if (s(e, c)) {
            var d = void 0;
            try {
              if (typeof e[c] != "function") {
                var v = Error((i || "React class") + ": " + r + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              d = e[c](t, c, i, r, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              d = g;
            }
            d && !(d instanceof Error) && (Op(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", r, c, typeof d), Op(null)), d instanceof Error && !(d.message in qg) && (qg[d.message] = !0, Op(u), E("Failed %s type: %s", r, d.message), Op(null));
          }
      }
    }
    var Bh = [], Mp;
    Mp = [];
    var bl = -1;
    function vu(e) {
      return {
        current: e
      };
    }
    function vr(e, t) {
      if (bl < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Mp[bl] && E("Unexpected Fiber popped."), e.current = Bh[bl], Bh[bl] = null, Mp[bl] = null, bl--;
    }
    function hr(e, t, r) {
      bl++, Bh[bl] = e.current, Mp[bl] = r, e.current = t;
    }
    var Ih;
    Ih = {};
    var ta = {};
    Object.freeze(ta);
    var Tl = vu(ta), Hi = vu(!1), Wh = ta;
    function js(e, t, r) {
      return r && Vi(t) ? Wh : Tl.current;
    }
    function Gg(e, t, r) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = r;
      }
    }
    function Ps(e, t) {
      {
        var r = e.type, i = r.contextTypes;
        if (!i)
          return ta;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var c in i)
          s[c] = t[c];
        {
          var d = re(r) || "Unknown";
          Ja(i, s, "context", d);
        }
        return u && Gg(e, t, s), s;
      }
    }
    function Np() {
      return Hi.current;
    }
    function Vi(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lp(e) {
      vr(Hi, e), vr(Tl, e);
    }
    function $h(e) {
      vr(Hi, e), vr(Tl, e);
    }
    function Xg(e, t, r) {
      {
        if (Tl.current !== ta)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        hr(Tl, t, e), hr(Hi, r, e);
      }
    }
    function Kg(e, t, r) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = re(t) || "Unknown";
            Ih[s] || (Ih[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return r;
        }
        var c = i.getChildContext();
        for (var d in c)
          if (!(d in u))
            throw Error((re(t) || "Unknown") + '.getChildContext(): key "' + d + '" is not defined in childContextTypes.');
        {
          var v = re(t) || "Unknown";
          Ja(u, c, "child context", v);
        }
        return I({}, r, c);
      }
    }
    function Ap(e) {
      {
        var t = e.stateNode, r = t && t.__reactInternalMemoizedMergedChildContext || ta;
        return Wh = Tl.current, hr(Tl, r, e), hr(Hi, Hi.current, e), !0;
      }
    }
    function Zg(e, t, r) {
      {
        var i = e.stateNode;
        if (!i)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (r) {
          var u = Kg(e, t, Wh);
          i.__reactInternalMemoizedMergedChildContext = u, vr(Hi, e), vr(Tl, e), hr(Tl, u, e), hr(Hi, r, e);
        } else
          vr(Hi, e), hr(Hi, r, e);
      }
    }
    function RR(e) {
      {
        if (!(os(e) && e.tag === Z))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ce:
              return t.stateNode.context;
            case Z: {
              var r = t.type;
              if (Vi(r))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Yh = 0, Jg = 1, e0 = 2, Up = null, Bi = null, Fs = !1, bR = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function TR(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Up = t.inject(e), Bi = t;
      } catch (r) {
        E("React instrumentation encountered an error: %s.", r);
      }
      return !0;
    }
    function wR(e, t) {
      if (Bi && typeof Bi.onScheduleFiberRoot == "function")
        try {
          Bi.onScheduleFiberRoot(Up, e, t);
        } catch (r) {
          Fs || (Fs = !0, E("React instrumentation encountered an error: %s", r));
        }
    }
    function _R(e, t) {
      if (Bi && typeof Bi.onCommitFiberRoot == "function")
        try {
          var r = (e.current.flags & Dt) === Dt;
          M && Bi.onCommitFiberRoot(Up, e, t, r);
        } catch (i) {
          Fs || (Fs = !0, E("React instrumentation encountered an error: %s", i));
        }
    }
    function xR(e) {
      if (Bi && typeof Bi.onCommitFiberUnmount == "function")
        try {
          Bi.onCommitFiberUnmount(Up, e);
        } catch (t) {
          Fs || (Fs = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    var kR = fe.unstable_runWithPriority, qh = fe.unstable_scheduleCallback, t0 = fe.unstable_cancelCallback, DR = fe.unstable_shouldYield, n0 = fe.unstable_requestPaint, Qh = fe.unstable_now, OR = fe.unstable_getCurrentPriorityLevel, zp = fe.unstable_ImmediatePriority, r0 = fe.unstable_UserBlockingPriority, a0 = fe.unstable_NormalPriority, i0 = fe.unstable_LowPriority, l0 = fe.unstable_IdlePriority;
    if (!(z.__interactionsRef != null && z.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var u0 = {}, xa = 99, bo = 98, wl = 97, o0 = 96, s0 = 95, Gh = 90, MR = DR, NR = (
      // Fall back gracefully if we're running an older version of Scheduler.
      n0 !== void 0 ? n0 : function() {
      }
    ), _l = null, jp = null, Xh = !1, f0 = Qh(), mr = f0 < 1e4 ? Qh : function() {
      return Qh() - f0;
    };
    function Hs() {
      switch (OR()) {
        case zp:
          return xa;
        case r0:
          return bo;
        case a0:
          return wl;
        case i0:
          return o0;
        case l0:
          return s0;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function c0(e) {
      switch (e) {
        case xa:
          return zp;
        case bo:
          return r0;
        case wl:
          return a0;
        case o0:
          return i0;
        case s0:
          return l0;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function To(e, t) {
      var r = c0(e);
      return kR(r, t);
    }
    function hu(e, t, r) {
      var i = c0(e);
      return qh(i, t, r);
    }
    function LR(e) {
      return _l === null ? (_l = [e], jp = qh(zp, p0)) : _l.push(e), u0;
    }
    function d0(e) {
      e !== u0 && t0(e);
    }
    function Ii() {
      if (jp !== null) {
        var e = jp;
        jp = null, t0(e);
      }
      p0();
    }
    function p0() {
      if (!Xh && _l !== null) {
        Xh = !0;
        var e = 0;
        try {
          var t = !0, r = _l;
          To(xa, function() {
            for (; e < r.length; e++) {
              var i = r[e];
              do
                i = i(t);
              while (i !== null);
            }
          }), _l = null;
        } catch (i) {
          throw _l !== null && (_l = _l.slice(e + 1)), qh(zp, Ii), i;
        } finally {
          Xh = !1;
        }
      }
    }
    var v0 = "17.0.2", an = 0, vn = 1, Br = 2, wo = 4, na = 8, AR = 16, UR = nt.ReactCurrentBatchConfig, zR = 0;
    function jR() {
      return UR.transition;
    }
    var ei = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var PR = function(e) {
        for (var t = null, r = e; r !== null; )
          r.mode & vn && (t = r), r = r.return;
        return t;
      }, _o = function(e) {
        var t = [];
        return e.forEach(function(r) {
          t.push(r);
        }), t.sort().join(", ");
      }, Dc = [], Oc = [], Mc = [], Nc = [], Lc = [], Ac = [], xo = /* @__PURE__ */ new Set();
      ei.recordUnsafeLifecycleWarnings = function(e, t) {
        xo.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Dc.push(e), e.mode & vn && typeof t.UNSAFE_componentWillMount == "function" && Oc.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Mc.push(e), e.mode & vn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Nc.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Lc.push(e), e.mode & vn && typeof t.UNSAFE_componentWillUpdate == "function" && Ac.push(e));
      }, ei.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Dc.length > 0 && (Dc.forEach(function(b) {
          e.add(re(b.type) || "Component"), xo.add(b.type);
        }), Dc = []);
        var t = /* @__PURE__ */ new Set();
        Oc.length > 0 && (Oc.forEach(function(b) {
          t.add(re(b.type) || "Component"), xo.add(b.type);
        }), Oc = []);
        var r = /* @__PURE__ */ new Set();
        Mc.length > 0 && (Mc.forEach(function(b) {
          r.add(re(b.type) || "Component"), xo.add(b.type);
        }), Mc = []);
        var i = /* @__PURE__ */ new Set();
        Nc.length > 0 && (Nc.forEach(function(b) {
          i.add(re(b.type) || "Component"), xo.add(b.type);
        }), Nc = []);
        var u = /* @__PURE__ */ new Set();
        Lc.length > 0 && (Lc.forEach(function(b) {
          u.add(re(b.type) || "Component"), xo.add(b.type);
        }), Lc = []);
        var s = /* @__PURE__ */ new Set();
        if (Ac.length > 0 && (Ac.forEach(function(b) {
          s.add(re(b.type) || "Component"), xo.add(b.type);
        }), Ac = []), t.size > 0) {
          var c = _o(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, c);
        }
        if (i.size > 0) {
          var d = _o(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, d);
        }
        if (s.size > 0) {
          var v = _o(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var g = _o(e);
          Xe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (r.size > 0) {
          var S = _o(r);
          Xe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, S);
        }
        if (u.size > 0) {
          var O = _o(u);
          Xe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var Pp = /* @__PURE__ */ new Map(), h0 = /* @__PURE__ */ new Set();
      ei.recordLegacyContextWarning = function(e, t) {
        var r = PR(e);
        if (r === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!h0.has(e.type)) {
          var i = Pp.get(r);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Pp.set(r, i)), i.push(e));
        }
      }, ei.flushLegacyContextWarning = function() {
        Pp.forEach(function(e, t) {
          if (e.length !== 0) {
            var r = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(re(s.type) || "Component"), h0.add(s.type);
            });
            var u = _o(i);
            try {
              on(r), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Nn();
            }
          }
        });
      }, ei.discardPendingWarnings = function() {
        Dc = [], Oc = [], Mc = [], Nc = [], Lc = [], Ac = [], Pp = /* @__PURE__ */ new Map();
      };
    }
    function ti(e, t) {
      if (e && e.defaultProps) {
        var r = I({}, t), i = e.defaultProps;
        for (var u in i)
          r[u] === void 0 && (r[u] = i[u]);
        return r;
      }
      return t;
    }
    var Fp = 1073741823, Kh = vu(null), Zh;
    Zh = {};
    var Hp = null, Vs = null, Vp = null, Bp = !1;
    function Ip() {
      Hp = null, Vs = null, Vp = null, Bp = !1;
    }
    function m0() {
      Bp = !0;
    }
    function y0() {
      Bp = !1;
    }
    function g0(e, t) {
      var r = e.type._context;
      hr(Kh, r._currentValue, e), r._currentValue = t, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== Zh && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = Zh;
    }
    function Jh(e) {
      var t = Kh.current;
      vr(Kh, e);
      var r = e.type._context;
      r._currentValue = t;
    }
    function FR(e, t, r) {
      if (a(r, t))
        return 0;
      var i = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(r, t) : Fp;
      return (i & Fp) !== i && E("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", i), i | 0;
    }
    function S0(e, t) {
      for (var r = e; r !== null; ) {
        var i = r.alternate;
        if (!Ni(r.childLanes, t))
          r.childLanes = xt(r.childLanes, t), i !== null && (i.childLanes = xt(i.childLanes, t));
        else if (i !== null && !Ni(i.childLanes, t))
          i.childLanes = xt(i.childLanes, t);
        else
          break;
        r = r.return;
      }
    }
    function HR(e, t, r, i) {
      var u = e.child;
      for (u !== null && (u.return = e); u !== null; ) {
        var s = void 0, c = u.dependencies;
        if (c !== null) {
          s = u.child;
          for (var d = c.firstContext; d !== null; ) {
            if (d.context === t && d.observedBits & r) {
              if (u.tag === Z) {
                var v = mu(Xt, _n(i));
                v.tag = Wp, yu(u, v);
              }
              u.lanes = xt(u.lanes, i);
              var g = u.alternate;
              g !== null && (g.lanes = xt(g.lanes, i)), S0(u.return, i), c.lanes = xt(c.lanes, i);
              break;
            }
            d = d.next;
          }
        } else
          u.tag === He ? s = u.type === e.type ? null : u.child : s = u.child;
        if (s !== null)
          s.return = u;
        else
          for (s = u; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var S = s.sibling;
            if (S !== null) {
              S.return = s.return, s = S;
              break;
            }
            s = s.return;
          }
        u = s;
      }
    }
    function Bs(e, t) {
      Hp = e, Vs = null, Vp = null;
      var r = e.dependencies;
      if (r !== null) {
        var i = r.firstContext;
        i !== null && (Pn(r.lanes, t) && uy(), r.firstContext = null);
      }
    }
    function kn(e, t) {
      if (Bp && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Vp !== e) {
        if (!(t === !1 || t === 0)) {
          var r;
          typeof t != "number" || t === Fp ? (Vp = e, r = Fp) : r = t;
          var i = {
            context: e,
            observedBits: r,
            next: null
          };
          if (Vs === null) {
            if (Hp === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Vs = i, Hp.dependencies = {
              lanes: H,
              firstContext: i,
              responders: null
            };
          } else
            Vs = Vs.next = i;
        }
      }
      return e._currentValue;
    }
    var E0 = 0, C0 = 1, Wp = 2, em = 3, $p = !1, tm, Yp;
    tm = !1, Yp = null;
    function nm(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function R0(e, t) {
      var r = t.updateQueue, i = e.updateQueue;
      if (r === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function mu(e, t) {
      var r = {
        eventTime: e,
        lane: t,
        tag: E0,
        payload: null,
        callback: null,
        next: null
      };
      return r;
    }
    function yu(e, t) {
      var r = e.updateQueue;
      if (r !== null) {
        var i = r.shared, u = i.pending;
        u === null ? t.next = t : (t.next = u.next, u.next = t), i.pending = t, Yp === i && !tm && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), tm = !0);
      }
    }
    function b0(e, t) {
      var r = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (r === u) {
          var s = null, c = null, d = r.firstBaseUpdate;
          if (d !== null) {
            var v = d;
            do {
              var g = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              c === null ? s = c = g : (c.next = g, c = g), v = v.next;
            } while (v !== null);
            c === null ? s = c = t : (c.next = t, c = t);
          } else
            s = c = t;
          r = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: c,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = r;
          return;
        }
      }
      var S = r.lastBaseUpdate;
      S === null ? r.firstBaseUpdate = t : S.next = t, r.lastBaseUpdate = t;
    }
    function VR(e, t, r, i, u, s) {
      switch (r.tag) {
        case C0: {
          var c = r.payload;
          if (typeof c == "function") {
            m0();
            var d = c.call(s, i, u);
            {
              if (e.mode & vn) {
                Lr();
                try {
                  c.call(s, i, u);
                } finally {
                  En();
                }
              }
              y0();
            }
            return d;
          }
          return c;
        }
        case em:
          e.flags = e.flags & ~Kr | Dt;
        case E0: {
          var v = r.payload, g;
          if (typeof v == "function") {
            m0(), g = v.call(s, i, u);
            {
              if (e.mode & vn) {
                Lr();
                try {
                  v.call(s, i, u);
                } finally {
                  En();
                }
              }
              y0();
            }
          } else
            g = v;
          return g == null ? i : I({}, i, g);
        }
        case Wp:
          return $p = !0, i;
      }
      return i;
    }
    function Uc(e, t, r, i) {
      var u = e.updateQueue;
      $p = !1, Yp = u.shared;
      var s = u.firstBaseUpdate, c = u.lastBaseUpdate, d = u.shared.pending;
      if (d !== null) {
        u.shared.pending = null;
        var v = d, g = v.next;
        v.next = null, c === null ? s = g : c.next = g, c = v;
        var S = e.alternate;
        if (S !== null) {
          var O = S.updateQueue, b = O.lastBaseUpdate;
          b !== c && (b === null ? O.firstBaseUpdate = g : b.next = g, O.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, W = H, te = null, Ae = null, lt = null, Ie = s;
        do {
          var wt = Ie.lane, It = Ie.eventTime;
          if (Ni(i, wt)) {
            if (lt !== null) {
              var j = {
                eventTime: It,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: dn,
                tag: Ie.tag,
                payload: Ie.payload,
                callback: Ie.callback,
                next: null
              };
              lt = lt.next = j;
            }
            L = VR(e, u, Ie, L, t, r);
            var k = Ie.callback;
            if (k !== null) {
              e.flags |= Ri;
              var G = u.effects;
              G === null ? u.effects = [Ie] : G.push(Ie);
            }
          } else {
            var N = {
              eventTime: It,
              lane: wt,
              tag: Ie.tag,
              payload: Ie.payload,
              callback: Ie.callback,
              next: null
            };
            lt === null ? (Ae = lt = N, te = L) : lt = lt.next = N, W = xt(W, wt);
          }
          if (Ie = Ie.next, Ie === null) {
            if (d = u.shared.pending, d === null)
              break;
            var ue = d, Ee = ue.next;
            ue.next = null, Ie = Ee, u.lastBaseUpdate = ue, u.shared.pending = null;
          }
        } while (!0);
        lt === null && (te = L), u.baseState = te, u.firstBaseUpdate = Ae, u.lastBaseUpdate = lt, Ny(W), e.lanes = W, e.memoizedState = L;
      }
      Yp = null;
    }
    function BR(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function T0() {
      $p = !1;
    }
    function qp() {
      return $p;
    }
    function w0(e, t, r) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], c = s.callback;
          c !== null && (s.callback = null, BR(c, r));
        }
    }
    var rm = {}, IR = Array.isArray, _0 = new _.Component().refs, am, im, lm, um, om, x0, Qp, sm, fm, cm;
    {
      am = /* @__PURE__ */ new Set(), im = /* @__PURE__ */ new Set(), lm = /* @__PURE__ */ new Set(), um = /* @__PURE__ */ new Set(), sm = /* @__PURE__ */ new Set(), om = /* @__PURE__ */ new Set(), fm = /* @__PURE__ */ new Set(), cm = /* @__PURE__ */ new Set();
      var k0 = /* @__PURE__ */ new Set();
      Qp = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var r = t + "_" + e;
          k0.has(r) || (k0.add(r), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, x0 = function(e, t) {
        if (t === void 0) {
          var r = re(e) || "Component";
          om.has(r) || (om.add(r), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", r));
        }
      }, Object.defineProperty(rm, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(rm);
    }
    function Gp(e, t, r, i) {
      var u = e.memoizedState;
      if (e.mode & vn) {
        Lr();
        try {
          r(i, u);
        } finally {
          En();
        }
      }
      var s = r(i, u);
      x0(t, s);
      var c = s == null ? u : I({}, u, s);
      if (e.memoizedState = c, e.lanes === H) {
        var d = e.updateQueue;
        d.baseState = c;
      }
    }
    var dm = {
      isMounted: jd,
      enqueueSetState: function(e, t, r) {
        var i = Ba(e), u = aa(), s = Cu(i), c = mu(u, s);
        c.payload = t, r != null && (Qp(r, "setState"), c.callback = r), yu(i, c), gr(i, s, u);
      },
      enqueueReplaceState: function(e, t, r) {
        var i = Ba(e), u = aa(), s = Cu(i), c = mu(u, s);
        c.tag = C0, c.payload = t, r != null && (Qp(r, "replaceState"), c.callback = r), yu(i, c), gr(i, s, u);
      },
      enqueueForceUpdate: function(e, t) {
        var r = Ba(e), i = aa(), u = Cu(r), s = mu(i, u);
        s.tag = Wp, t != null && (Qp(t, "forceUpdate"), s.callback = t), yu(r, s), gr(r, u, i);
      }
    };
    function D0(e, t, r, i, u, s, c) {
      var d = e.stateNode;
      if (typeof d.shouldComponentUpdate == "function") {
        if (e.mode & vn) {
          Lr();
          try {
            d.shouldComponentUpdate(i, s, c);
          } finally {
            En();
          }
        }
        var v = d.shouldComponentUpdate(i, s, c);
        return v === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", re(t) || "Component"), v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !o(r, i) || !o(u, s) : !0;
    }
    function WR(e, t, r) {
      var i = e.stateNode;
      {
        var u = re(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !fm.has(t) && (fm.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", re(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var c = i.props !== r;
        i.props !== void 0 && c && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !lm.has(t) && (lm.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", re(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var d = i.state;
        d && (typeof d != "object" || IR(d)) && E("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function O0(e, t) {
      t.updater = dm, e.stateNode = t, Df(t, e), t._reactInternalInstance = rm;
    }
    function M0(e, t, r) {
      var i = !1, u = ta, s = ta, c = t.contextType;
      if ("contextType" in t) {
        var d = (
          // Allow null for conditional declaration
          c === null || c !== void 0 && c.$$typeof === sa && c._context === void 0
        );
        if (!d && !cm.has(t)) {
          cm.add(t);
          var v = "";
          c === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof c != "object" ? v = " However, it is set to a " + typeof c + "." : c.$$typeof === Yr ? v = " Did you accidentally pass the Context.Provider instead?" : c._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(c).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", re(t) || "Component", v);
        }
      }
      if (typeof c == "object" && c !== null)
        s = kn(c);
      else {
        u = js(e, t, !0);
        var g = t.contextTypes;
        i = g != null, s = i ? Ps(e, u) : ta;
      }
      if (e.mode & vn) {
        Lr();
        try {
          new t(r, s);
        } finally {
          En();
        }
      }
      var S = new t(r, s), O = e.memoizedState = S.state !== null && S.state !== void 0 ? S.state : null;
      O0(e, S);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var b = re(t) || "Component";
          im.has(b) || (im.add(b), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, S.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof S.getSnapshotBeforeUpdate == "function") {
          var L = null, W = null, te = null;
          if (typeof S.componentWillMount == "function" && S.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof S.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof S.componentWillReceiveProps == "function" && S.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? W = "componentWillReceiveProps" : typeof S.UNSAFE_componentWillReceiveProps == "function" && (W = "UNSAFE_componentWillReceiveProps"), typeof S.componentWillUpdate == "function" && S.componentWillUpdate.__suppressDeprecationWarning !== !0 ? te = "componentWillUpdate" : typeof S.UNSAFE_componentWillUpdate == "function" && (te = "UNSAFE_componentWillUpdate"), L !== null || W !== null || te !== null) {
            var Ae = re(t) || "Component", lt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            um.has(Ae) || (um.add(Ae), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ae, lt, L !== null ? `
  ` + L : "", W !== null ? `
  ` + W : "", te !== null ? `
  ` + te : ""));
          }
        }
      }
      return i && Gg(e, u, s), S;
    }
    function $R(e, t) {
      var r = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), r !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", re(e.type) || "Component"), dm.enqueueReplaceState(t, t.state, null));
    }
    function N0(e, t, r, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, i), t.state !== u) {
        {
          var s = re(e.type) || "Component";
          am.has(s) || (am.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dm.enqueueReplaceState(t, t.state, null);
      }
    }
    function pm(e, t, r, i) {
      WR(e, t, r);
      var u = e.stateNode;
      u.props = r, u.state = e.memoizedState, u.refs = _0, nm(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = kn(s);
      else {
        var c = js(e, t, !0);
        u.context = Ps(e, c);
      }
      {
        if (u.state === r) {
          var d = re(t) || "Component";
          sm.has(d) || (sm.add(d), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", d));
        }
        e.mode & vn && ei.recordLegacyContextWarning(e, u), ei.recordUnsafeLifecycleWarnings(e, u);
      }
      Uc(e, r, u, i), u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      typeof v == "function" && (Gp(e, t, v, r), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && ($R(e, u), Uc(e, r, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= Ve);
    }
    function YR(e, t, r, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var c = u.context, d = t.contextType, v = ta;
      if (typeof d == "object" && d !== null)
        v = kn(d);
      else {
        var g = js(e, t, !0);
        v = Ps(e, g);
      }
      var S = t.getDerivedStateFromProps, O = typeof S == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !O && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== r || c !== v) && N0(e, u, r, v), T0();
      var b = e.memoizedState, L = u.state = b;
      if (Uc(e, r, u, i), L = e.memoizedState, s === r && b === L && !Np() && !qp())
        return typeof u.componentDidMount == "function" && (e.flags |= Ve), !1;
      typeof S == "function" && (Gp(e, t, S, r), L = e.memoizedState);
      var W = qp() || D0(e, t, s, r, b, L, v);
      return W ? (!O && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= Ve)) : (typeof u.componentDidMount == "function" && (e.flags |= Ve), e.memoizedProps = r, e.memoizedState = L), u.props = r, u.state = L, u.context = v, W;
    }
    function qR(e, t, r, i, u) {
      var s = t.stateNode;
      R0(e, t);
      var c = t.memoizedProps, d = t.type === t.elementType ? c : ti(t.type, c);
      s.props = d;
      var v = t.pendingProps, g = s.context, S = r.contextType, O = ta;
      if (typeof S == "object" && S !== null)
        O = kn(S);
      else {
        var b = js(t, r, !0);
        O = Ps(t, b);
      }
      var L = r.getDerivedStateFromProps, W = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !W && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (c !== v || g !== O) && N0(t, s, i, O), T0();
      var te = t.memoizedState, Ae = s.state = te;
      if (Uc(t, i, s, u), Ae = t.memoizedState, c === v && te === Ae && !Np() && !qp())
        return typeof s.componentDidUpdate == "function" && (c !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Ve), typeof s.getSnapshotBeforeUpdate == "function" && (c !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= ma), !1;
      typeof L == "function" && (Gp(t, r, L, i), Ae = t.memoizedState);
      var lt = qp() || D0(t, r, d, i, te, Ae, O);
      return lt ? (!W && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Ae, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Ae, O)), typeof s.componentDidUpdate == "function" && (t.flags |= Ve), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= ma)) : (typeof s.componentDidUpdate == "function" && (c !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= Ve), typeof s.getSnapshotBeforeUpdate == "function" && (c !== e.memoizedProps || te !== e.memoizedState) && (t.flags |= ma), t.memoizedProps = i, t.memoizedState = Ae), s.props = i, s.state = Ae, s.context = O, lt;
    }
    var vm, hm, mm, ym, gm, L0 = function(e, t) {
    };
    vm = !1, hm = !1, mm = {}, ym = {}, gm = {}, L0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var r = re(t.type) || "Component";
        ym[r] || (ym[r] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var Xp = Array.isArray;
    function zc(e, t, r) {
      var i = r.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & vn || at) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(r._owner && r._self && r._owner.stateNode !== r._self)) {
          var u = re(e.type) || "Component";
          mm[u] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), mm[u] = !0);
        }
        if (r._owner) {
          var s = r._owner, c;
          if (s) {
            var d = s;
            if (d.tag !== Z)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            c = d.stateNode;
          }
          if (!c)
            throw Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === v)
            return t.ref;
          var g = function(S) {
            var O = c.refs;
            O === _0 && (O = c.refs = {}), S === null ? delete O[v] : O[v] = S;
          };
          return g._stringRef = v, g;
        } else {
          if (typeof i != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!r._owner)
            throw Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Kp(e, t) {
      if (e.type !== "textarea")
        throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Zp(e) {
      {
        var t = re(e.type) || "Component";
        if (gm[t])
          return;
        gm[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function A0(e) {
      function t(N, j) {
        if (e) {
          var k = N.lastEffect;
          k !== null ? (k.nextEffect = j, N.lastEffect = j) : N.firstEffect = N.lastEffect = j, j.nextEffect = null, j.flags = Qt;
        }
      }
      function r(N, j) {
        if (!e)
          return null;
        for (var k = j; k !== null; )
          t(N, k), k = k.sibling;
        return null;
      }
      function i(N, j) {
        for (var k = /* @__PURE__ */ new Map(), G = j; G !== null; )
          G.key !== null ? k.set(G.key, G) : k.set(G.index, G), G = G.sibling;
        return k;
      }
      function u(N, j) {
        var k = Po(N, j);
        return k.index = 0, k.sibling = null, k;
      }
      function s(N, j, k) {
        if (N.index = k, !e)
          return j;
        var G = N.alternate;
        if (G !== null) {
          var ue = G.index;
          return ue < j ? (N.flags = Je, j) : ue;
        } else
          return N.flags = Je, j;
      }
      function c(N) {
        return e && N.alternate === null && (N.flags = Je), N;
      }
      function d(N, j, k, G) {
        if (j === null || j.tag !== We) {
          var ue = Yy(k, N.mode, G);
          return ue.return = N, ue;
        } else {
          var Ee = u(j, k);
          return Ee.return = N, Ee;
        }
      }
      function v(N, j, k, G) {
        if (j !== null && (j.elementType === k.type || // Keep this check inline so it only runs on the false path:
        vE(j, k))) {
          var ue = u(j, k.props);
          return ue.ref = zc(N, j, k), ue.return = N, ue._debugSource = k._source, ue._debugOwner = k._owner, ue;
        }
        var Ee = Wy(k, N.mode, G);
        return Ee.ref = zc(N, j, k), Ee.return = N, Ee;
      }
      function g(N, j, k, G) {
        if (j === null || j.tag !== xe || j.stateNode.containerInfo !== k.containerInfo || j.stateNode.implementation !== k.implementation) {
          var ue = qy(k, N.mode, G);
          return ue.return = N, ue;
        } else {
          var Ee = u(j, k.children || []);
          return Ee.return = N, Ee;
        }
      }
      function S(N, j, k, G, ue) {
        if (j === null || j.tag !== Zt) {
          var Ee = Fo(k, N.mode, G, ue);
          return Ee.return = N, Ee;
        } else {
          var Ct = u(j, k);
          return Ct.return = N, Ct;
        }
      }
      function O(N, j, k) {
        if (typeof j == "string" || typeof j == "number") {
          var G = Yy("" + j, N.mode, k);
          return G.return = N, G;
        }
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case fn: {
              var ue = Wy(j, N.mode, k);
              return ue.ref = zc(N, null, j), ue.return = N, ue;
            }
            case Pt: {
              var Ee = qy(j, N.mode, k);
              return Ee.return = N, Ee;
            }
          }
          if (Xp(j) || Mt(j)) {
            var Ct = Fo(j, N.mode, k, null);
            return Ct.return = N, Ct;
          }
          Kp(N, j);
        }
        return typeof j == "function" && Zp(N), null;
      }
      function b(N, j, k, G) {
        var ue = j !== null ? j.key : null;
        if (typeof k == "string" || typeof k == "number")
          return ue !== null ? null : d(N, j, "" + k, G);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case fn:
              return k.key === ue ? k.type === Vn ? S(N, j, k.props.children, G, ue) : v(N, j, k, G) : null;
            case Pt:
              return k.key === ue ? g(N, j, k, G) : null;
          }
          if (Xp(k) || Mt(k))
            return ue !== null ? null : S(N, j, k, G, null);
          Kp(N, k);
        }
        return typeof k == "function" && Zp(N), null;
      }
      function L(N, j, k, G, ue) {
        if (typeof G == "string" || typeof G == "number") {
          var Ee = N.get(k) || null;
          return d(j, Ee, "" + G, ue);
        }
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case fn: {
              var Ct = N.get(G.key === null ? k : G.key) || null;
              return G.type === Vn ? S(j, Ct, G.props.children, ue, G.key) : v(j, Ct, G, ue);
            }
            case Pt: {
              var Kt = N.get(G.key === null ? k : G.key) || null;
              return g(j, Kt, G, ue);
            }
          }
          if (Xp(G) || Mt(G)) {
            var ln = N.get(k) || null;
            return S(j, ln, G, ue, null);
          }
          Kp(j, G);
        }
        return typeof G == "function" && Zp(j), null;
      }
      function W(N, j, k) {
        {
          if (typeof N != "object" || N === null)
            return j;
          switch (N.$$typeof) {
            case fn:
            case Pt:
              L0(N, k);
              var G = N.key;
              if (typeof G != "string")
                break;
              if (j === null) {
                j = /* @__PURE__ */ new Set(), j.add(G);
                break;
              }
              if (!j.has(G)) {
                j.add(G);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", G);
              break;
          }
        }
        return j;
      }
      function te(N, j, k, G) {
        for (var ue = null, Ee = 0; Ee < k.length; Ee++) {
          var Ct = k[Ee];
          ue = W(Ct, ue, N);
        }
        for (var Kt = null, ln = null, jt = j, Dn = 0, Ot = 0, un = null; jt !== null && Ot < k.length; Ot++) {
          jt.index > Ot ? (un = jt, jt = null) : un = jt.sibling;
          var Qn = b(N, jt, k[Ot], G);
          if (Qn === null) {
            jt === null && (jt = un);
            break;
          }
          e && jt && Qn.alternate === null && t(N, jt), Dn = s(Qn, Dn, Ot), ln === null ? Kt = Qn : ln.sibling = Qn, ln = Qn, jt = un;
        }
        if (Ot === k.length)
          return r(N, jt), Kt;
        if (jt === null) {
          for (; Ot < k.length; Ot++) {
            var yn = O(N, k[Ot], G);
            yn !== null && (Dn = s(yn, Dn, Ot), ln === null ? Kt = yn : ln.sibling = yn, ln = yn);
          }
          return Kt;
        }
        for (var Gi = i(N, jt); Ot < k.length; Ot++) {
          var gn = L(Gi, N, Ot, k[Ot], G);
          gn !== null && (e && gn.alternate !== null && Gi.delete(gn.key === null ? Ot : gn.key), Dn = s(gn, Dn, Ot), ln === null ? Kt = gn : ln.sibling = gn, ln = gn);
        }
        return e && Gi.forEach(function(Xi) {
          return t(N, Xi);
        }), Kt;
      }
      function Ae(N, j, k, G) {
        var ue = Mt(k);
        if (typeof ue != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (hm || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), hm = !0), k.entries === ue && (vm || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), vm = !0);
          var Ee = ue.call(k);
          if (Ee)
            for (var Ct = null, Kt = Ee.next(); !Kt.done; Kt = Ee.next()) {
              var ln = Kt.value;
              Ct = W(ln, Ct, N);
            }
        }
        var jt = ue.call(k);
        if (jt == null)
          throw Error("An iterable object provided no iterator.");
        for (var Dn = null, Ot = null, un = j, Qn = 0, yn = 0, Gi = null, gn = jt.next(); un !== null && !gn.done; yn++, gn = jt.next()) {
          un.index > yn ? (Gi = un, un = null) : Gi = un.sibling;
          var Xi = b(N, un, gn.value, G);
          if (Xi === null) {
            un === null && (un = Gi);
            break;
          }
          e && un && Xi.alternate === null && t(N, un), Qn = s(Xi, Qn, yn), Ot === null ? Dn = Xi : Ot.sibling = Xi, Ot = Xi, un = Gi;
        }
        if (gn.done)
          return r(N, un), Dn;
        if (un === null) {
          for (; !gn.done; yn++, gn = jt.next()) {
            var Ho = O(N, gn.value, G);
            Ho !== null && (Qn = s(Ho, Qn, yn), Ot === null ? Dn = Ho : Ot.sibling = Ho, Ot = Ho);
          }
          return Dn;
        }
        for (var eg = i(N, un); !gn.done; yn++, gn = jt.next()) {
          var Tu = L(eg, N, yn, gn.value, G);
          Tu !== null && (e && Tu.alternate !== null && eg.delete(Tu.key === null ? yn : Tu.key), Qn = s(Tu, Qn, yn), Ot === null ? Dn = Tu : Ot.sibling = Tu, Ot = Tu);
        }
        return e && eg.forEach(function(YT) {
          return t(N, YT);
        }), Dn;
      }
      function lt(N, j, k, G) {
        if (j !== null && j.tag === We) {
          r(N, j.sibling);
          var ue = u(j, k);
          return ue.return = N, ue;
        }
        r(N, j);
        var Ee = Yy(k, N.mode, G);
        return Ee.return = N, Ee;
      }
      function Ie(N, j, k, G) {
        for (var ue = k.key, Ee = j; Ee !== null; ) {
          if (Ee.key === ue) {
            switch (Ee.tag) {
              case Zt: {
                if (k.type === Vn) {
                  r(N, Ee.sibling);
                  var Ct = u(Ee, k.props.children);
                  return Ct.return = N, Ct._debugSource = k._source, Ct._debugOwner = k._owner, Ct;
                }
                break;
              }
              case st:
              default: {
                if (Ee.elementType === k.type || // Keep this check inline so it only runs on the false path:
                vE(Ee, k)) {
                  r(N, Ee.sibling);
                  var Kt = u(Ee, k.props);
                  return Kt.ref = zc(N, Ee, k), Kt.return = N, Kt._debugSource = k._source, Kt._debugOwner = k._owner, Kt;
                }
                break;
              }
            }
            r(N, Ee);
            break;
          } else
            t(N, Ee);
          Ee = Ee.sibling;
        }
        if (k.type === Vn) {
          var ln = Fo(k.props.children, N.mode, G, k.key);
          return ln.return = N, ln;
        } else {
          var jt = Wy(k, N.mode, G);
          return jt.ref = zc(N, j, k), jt.return = N, jt;
        }
      }
      function wt(N, j, k, G) {
        for (var ue = k.key, Ee = j; Ee !== null; ) {
          if (Ee.key === ue)
            if (Ee.tag === xe && Ee.stateNode.containerInfo === k.containerInfo && Ee.stateNode.implementation === k.implementation) {
              r(N, Ee.sibling);
              var Ct = u(Ee, k.children || []);
              return Ct.return = N, Ct;
            } else {
              r(N, Ee);
              break;
            }
          else
            t(N, Ee);
          Ee = Ee.sibling;
        }
        var Kt = qy(k, N.mode, G);
        return Kt.return = N, Kt;
      }
      function It(N, j, k, G) {
        var ue = typeof k == "object" && k !== null && k.type === Vn && k.key === null;
        ue && (k = k.props.children);
        var Ee = typeof k == "object" && k !== null;
        if (Ee)
          switch (k.$$typeof) {
            case fn:
              return c(Ie(N, j, k, G));
            case Pt:
              return c(wt(N, j, k, G));
          }
        if (typeof k == "string" || typeof k == "number")
          return c(lt(N, j, "" + k, G));
        if (Xp(k))
          return te(N, j, k, G);
        if (Mt(k))
          return Ae(N, j, k, G);
        if (Ee && Kp(N, k), typeof k == "function" && Zp(N), typeof k > "u" && !ue)
          switch (N.tag) {
            case Z: {
              var Ct = N.stateNode;
              if (Ct.render._isMockFunction)
                break;
            }
            case st:
            case le:
            case J:
            case Re:
              throw Error((re(N.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
          }
        return r(N, j);
      }
      return It;
    }
    var Jp = A0(!0), U0 = A0(!1);
    function QR(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var r = t.child, i = Po(r, r.pendingProps);
        for (t.child = i, i.return = t; r.sibling !== null; )
          r = r.sibling, i = i.sibling = Po(r, r.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function GR(e, t) {
      for (var r = e.child; r !== null; )
        oT(r, t), r = r.sibling;
    }
    var jc = {}, gu = vu(jc), Pc = vu(jc), ev = vu(jc);
    function tv(e) {
      if (e === jc)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function z0() {
      var e = tv(ev.current);
      return e;
    }
    function Sm(e, t) {
      hr(ev, t, e), hr(Pc, e, e), hr(gu, jc, e);
      var r = DC(t);
      vr(gu, e), hr(gu, r, e);
    }
    function Is(e) {
      vr(gu, e), vr(Pc, e), vr(ev, e);
    }
    function Em() {
      var e = tv(gu.current);
      return e;
    }
    function j0(e) {
      tv(ev.current);
      var t = tv(gu.current), r = OC(t, e.type);
      t !== r && (hr(Pc, e, e), hr(gu, r, e));
    }
    function Cm(e) {
      Pc.current === e && (vr(gu, e), vr(Pc, e));
    }
    var XR = 0, P0 = 1, Rm = 1, Fc = 2, ni = vu(XR);
    function nv(e, t) {
      return (e & t) !== 0;
    }
    function Hc(e) {
      return e & P0;
    }
    function bm(e, t) {
      return e & P0 | t;
    }
    function KR(e, t) {
      return e | t;
    }
    function ko(e, t) {
      hr(ni, t, e);
    }
    function Ws(e) {
      vr(ni, e);
    }
    function ZR(e, t) {
      var r = e.memoizedState;
      if (r !== null)
        return r.dehydrated !== null;
      var i = e.memoizedProps;
      return i.fallback === void 0 ? !1 : i.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function rv(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ee) {
          var r = t.memoizedState;
          if (r !== null) {
            var i = r.dehydrated;
            if (i === null || eR(i) || tR(i))
              return t;
          }
        } else if (t.tag === ut && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Dt) !== zt;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Tm = (
      /*  */
      0
    ), $s = (
      /* */
      1
    ), Ys = (
      /*    */
      2
    ), Vc = (
      /*   */
      4
    ), ka = null, Do = null, Su = !1;
    function JR(e) {
      var t = e.stateNode.containerInfo;
      return Do = Vg(t), ka = e, Su = !0, !0;
    }
    function F0(e, t) {
      switch (e.tag) {
        case ce:
          sR(e.stateNode.containerInfo, t);
          break;
        case he:
          fR(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var r = vT();
      r.stateNode = t, r.return = e, r.flags = Qt, e.lastEffect !== null ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r;
    }
    function H0(e, t) {
      switch (t.flags = t.flags & ~zr | Je, e.tag) {
        case ce: {
          var r = e.stateNode.containerInfo;
          switch (t.tag) {
            case he:
              var i = t.type;
              t.pendingProps, cR(r, i);
              break;
            case We:
              var u = t.pendingProps;
              dR(r, u);
              break;
          }
          break;
        }
        case he: {
          var s = e.type, c = e.memoizedProps, d = e.stateNode;
          switch (t.tag) {
            case he:
              var v = t.type;
              t.pendingProps, pR(s, c, d, v);
              break;
            case We:
              var g = t.pendingProps;
              vR(s, c, d, g);
              break;
            case ee:
              hR(s, c);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function V0(e, t) {
      switch (e.tag) {
        case he: {
          var r = e.type;
          e.pendingProps;
          var i = ZC(t, r);
          return i !== null ? (e.stateNode = i, !0) : !1;
        }
        case We: {
          var u = e.pendingProps, s = JC(t, u);
          return s !== null ? (e.stateNode = s, !0) : !1;
        }
        case ee:
          return !1;
        default:
          return !1;
      }
    }
    function wm(e) {
      if (Su) {
        var t = Do;
        if (!t) {
          H0(ka, e), Su = !1, ka = e;
          return;
        }
        var r = t;
        if (!V0(e, t)) {
          if (t = wp(r), !t || !V0(e, t)) {
            H0(ka, e), Su = !1, ka = e;
            return;
          }
          F0(ka, r);
        }
        ka = e, Do = Vg(t);
      }
    }
    function e1(e, t, r) {
      var i = e.stateNode, u = nR(i, e.type, e.memoizedProps, t, r, e);
      return e.updateQueue = u, u !== null;
    }
    function t1(e) {
      var t = e.stateNode, r = e.memoizedProps, i = rR(t, r, e);
      if (i) {
        var u = ka;
        if (u !== null)
          switch (u.tag) {
            case ce: {
              var s = u.stateNode.containerInfo;
              uR(s, t, r);
              break;
            }
            case he: {
              var c = u.type, d = u.memoizedProps, v = u.stateNode;
              oR(c, d, v, t, r);
              break;
            }
          }
      }
      return i;
    }
    function n1(e) {
      var t = e.memoizedState, r = t !== null ? t.dehydrated : null;
      if (!r)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return aR(r);
    }
    function B0(e) {
      for (var t = e.return; t !== null && t.tag !== he && t.tag !== ce && t.tag !== ee; )
        t = t.return;
      ka = t;
    }
    function av(e) {
      if (e !== ka)
        return !1;
      if (!Su)
        return B0(e), Su = !0, !1;
      var t = e.type;
      if (e.tag !== he || t !== "head" && t !== "body" && !Ph(t, e.memoizedProps))
        for (var r = Do; r; )
          F0(e, r), r = wp(r);
      return B0(e), e.tag === ee ? Do = n1(e) : Do = ka ? wp(e.stateNode) : null, !0;
    }
    function _m() {
      ka = null, Do = null, Su = !1;
    }
    function xm() {
      return Su;
    }
    var Bc = [], km;
    km = {};
    function r1(e) {
      Bc.push(e);
    }
    function Dm() {
      for (var e = 0; e < Bc.length; e++) {
        var t = Bc[e];
        t._workInProgressVersionPrimary = null;
      }
      Bc.length = 0;
    }
    function a1(e) {
      return e._workInProgressVersionPrimary;
    }
    function I0(e, t) {
      e._workInProgressVersionPrimary = t, Bc.push(e);
    }
    function i1(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = km : e._currentPrimaryRenderer !== km && E("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var se = nt.ReactCurrentDispatcher, Da = nt.ReactCurrentBatchConfig, Om, Mm;
    Mm = {}, Om = /* @__PURE__ */ new Set();
    var Ic = H, Yt = null, yr = null, qn = null, iv = !1, Wc = !1, l1 = 25, Y = null, Oa = null, Eu = -1, Nm = !1;
    function Bt() {
      {
        var e = Y;
        Oa === null ? Oa = [e] : Oa.push(e);
      }
    }
    function ve() {
      {
        var e = Y;
        Oa !== null && (Eu++, Oa[Eu] !== e && u1(e));
      }
    }
    function $c(e) {
      e != null && !Array.isArray(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Y, typeof e);
    }
    function u1(e) {
      {
        var t = re(Yt.type);
        if (!Om.has(t) && (Om.add(t), Oa !== null)) {
          for (var r = "", i = 30, u = 0; u <= Eu; u++) {
            for (var s = Oa[u], c = u === Eu ? e : s, d = u + 1 + ". " + s; d.length < i; )
              d += " ";
            d += c + `
`, r += d;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, r);
        }
      }
    }
    function Ir() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Lm(e, t) {
      if (Nm)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Y), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Y, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!a(e[r], t[r]))
          return !1;
      return !0;
    }
    function qs(e, t, r, i, u, s) {
      Ic = s, Yt = t, Oa = e !== null ? e._debugHookTypes : null, Eu = -1, Nm = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = H, e !== null && e.memoizedState !== null ? se.current = aS : Oa !== null ? se.current = rS : se.current = nS;
      var c = r(i, u);
      if (Wc) {
        var d = 0;
        do {
          if (Wc = !1, !(d < l1))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          d += 1, Nm = !1, yr = null, qn = null, t.updateQueue = null, Eu = -1, se.current = iS, c = r(i, u);
        } while (Wc);
      }
      se.current = yv, t._debugHookTypes = Oa;
      var v = yr !== null && yr.next !== null;
      if (Ic = H, Yt = null, yr = null, qn = null, Y = null, Oa = null, Eu = -1, iv = !1, v)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return c;
    }
    function W0(e, t, r) {
      t.updateQueue = e.updateQueue, t.flags &= ~(Yl | Ve), e.lanes = lu(e.lanes, r);
    }
    function $0() {
      if (se.current = yv, iv) {
        for (var e = Yt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        iv = !1;
      }
      Ic = H, Yt = null, yr = null, qn = null, Oa = null, Eu = -1, Y = null, mv = !1, Wc = !1;
    }
    function Oo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return qn === null ? Yt.memoizedState = qn = e : qn = qn.next = e, qn;
    }
    function Mo() {
      var e;
      if (yr === null) {
        var t = Yt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = yr.next;
      var r;
      if (qn === null ? r = Yt.memoizedState : r = qn.next, r !== null)
        qn = r, r = qn.next, yr = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        yr = e;
        var i = {
          memoizedState: yr.memoizedState,
          baseState: yr.baseState,
          baseQueue: yr.baseQueue,
          queue: yr.queue,
          next: null
        };
        qn === null ? Yt.memoizedState = qn = i : qn = qn.next = i;
      }
      return qn;
    }
    function o1() {
      return {
        lastEffect: null
      };
    }
    function lv(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Am(e, t, r) {
      var i = Oo(), u;
      r !== void 0 ? u = r(t) : u = t, i.memoizedState = i.baseState = u;
      var s = i.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, c = s.dispatch = qm.bind(null, Yt, s);
      return [i.memoizedState, c];
    }
    function Um(e, t, r) {
      var i = Mo(), u = i.queue;
      if (u === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = yr, c = s.baseQueue, d = u.pending;
      if (d !== null) {
        if (c !== null) {
          var v = c.next, g = d.next;
          c.next = g, d.next = v;
        }
        s.baseQueue !== c && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = c = d, u.pending = null;
      }
      if (c !== null) {
        var S = c.next, O = s.baseState, b = null, L = null, W = null, te = S;
        do {
          var Ae = te.lane;
          if (Ni(Ic, Ae)) {
            if (W !== null) {
              var Ie = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: dn,
                action: te.action,
                eagerReducer: te.eagerReducer,
                eagerState: te.eagerState,
                next: null
              };
              W = W.next = Ie;
            }
            if (te.eagerReducer === e)
              O = te.eagerState;
            else {
              var wt = te.action;
              O = e(O, wt);
            }
          } else {
            var lt = {
              lane: Ae,
              action: te.action,
              eagerReducer: te.eagerReducer,
              eagerState: te.eagerState,
              next: null
            };
            W === null ? (L = W = lt, b = O) : W = W.next = lt, Yt.lanes = xt(Yt.lanes, Ae), Ny(Ae);
          }
          te = te.next;
        } while (te !== null && te !== S);
        W === null ? b = O : W.next = L, a(O, i.memoizedState) || uy(), i.memoizedState = O, i.baseState = b, i.baseQueue = W, u.lastRenderedState = O;
      }
      var It = u.dispatch;
      return [i.memoizedState, It];
    }
    function zm(e, t, r) {
      var i = Mo(), u = i.queue;
      if (u === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, c = u.pending, d = i.memoizedState;
      if (c !== null) {
        u.pending = null;
        var v = c.next, g = v;
        do {
          var S = g.action;
          d = e(d, S), g = g.next;
        } while (g !== v);
        a(d, i.memoizedState) || uy(), i.memoizedState = d, i.baseQueue === null && (i.baseState = d), u.lastRenderedState = d;
      }
      return [d, s];
    }
    function Y0(e, t, r) {
      i1(t);
      var i = t._getVersion, u = i(t._source), s = !1, c = a1(t);
      if (c !== null ? s = c === u : (s = Ni(Ic, e.mutableReadLanes), s && I0(t, u)), s) {
        var d = r(t._source);
        return typeof d == "function" && E("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), d;
      } else
        throw r1(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function q0(e, t, r, i) {
      var u = db();
      if (u === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var s = t._getVersion, c = s(t._source), d = se.current, v = d.useState(function() {
        return Y0(u, t, r);
      }), g = v[0], S = v[1], O = g, b = qn, L = e.memoizedState, W = L.refs, te = W.getSnapshot, Ae = L.source, lt = L.subscribe, Ie = Yt;
      if (e.memoizedState = {
        refs: W,
        source: t,
        subscribe: i
      }, d.useEffect(function() {
        W.getSnapshot = r, W.setSnapshot = S;
        var It = s(t._source);
        if (!a(c, It)) {
          var N = r(t._source);
          if (typeof N == "function" && E("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), !a(O, N)) {
            S(N);
            var j = Cu(Ie);
            Xd(u, j);
          }
          nc(u, u.mutableReadLanes);
        }
      }, [r, t, i]), d.useEffect(function() {
        var It = function() {
          var j = W.getSnapshot, k = W.setSnapshot;
          try {
            k(j(t._source));
            var G = Cu(Ie);
            Xd(u, G);
          } catch (ue) {
            k(function() {
              throw ue;
            });
          }
        }, N = i(t._source, It);
        return typeof N != "function" && E("Mutable source subscribe function must return an unsubscribe function."), N;
      }, [t, i]), !a(te, r) || !a(Ae, t) || !a(lt, i)) {
        var wt = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: lv,
          lastRenderedState: O
        };
        wt.dispatch = S = qm.bind(null, Yt, wt), b.queue = wt, b.baseQueue = null, O = Y0(u, t, r), b.memoizedState = b.baseState = O;
      }
      return O;
    }
    function jm(e, t, r) {
      var i = Oo();
      return i.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: r
      }, q0(i, e, t, r);
    }
    function uv(e, t, r) {
      var i = Mo();
      return q0(i, e, t, r);
    }
    function No(e) {
      var t = Oo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var r = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: lv,
        lastRenderedState: e
      }, i = r.dispatch = qm.bind(null, Yt, r);
      return [t.memoizedState, i];
    }
    function Yc(e) {
      return Um(lv);
    }
    function qc(e) {
      return zm(lv);
    }
    function ov(e, t, r, i) {
      var u = {
        tag: e,
        create: t,
        destroy: r,
        deps: i,
        // Circular
        next: null
      }, s = Yt.updateQueue;
      if (s === null)
        s = o1(), Yt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var c = s.lastEffect;
        if (c === null)
          s.lastEffect = u.next = u;
        else {
          var d = c.next;
          c.next = u, u.next = d, s.lastEffect = u;
        }
      }
      return u;
    }
    function sv(e) {
      var t = Oo(), r = {
        current: e
      };
      return Object.seal(r), t.memoizedState = r, r;
    }
    function Qs(e) {
      var t = Mo();
      return t.memoizedState;
    }
    function Pm(e, t, r, i) {
      var u = Oo(), s = i === void 0 ? null : i;
      Yt.flags |= e, u.memoizedState = ov($s | t, r, void 0, s);
    }
    function Fm(e, t, r, i) {
      var u = Mo(), s = i === void 0 ? null : i, c = void 0;
      if (yr !== null) {
        var d = yr.memoizedState;
        if (c = d.destroy, s !== null) {
          var v = d.deps;
          if (Lm(s, v)) {
            ov(t, r, c, s);
            return;
          }
        }
      }
      Yt.flags |= e, u.memoizedState = ov($s | t, r, c, s);
    }
    function fv(e, t) {
      return typeof jest < "u" && oE(Yt), Pm(Ve | Yl, Vc, e, t);
    }
    function Gs(e, t) {
      return typeof jest < "u" && oE(Yt), Fm(Ve | Yl, Vc, e, t);
    }
    function Hm(e, t) {
      return Pm(Ve, Ys, e, t);
    }
    function cv(e, t) {
      return Fm(Ve, Ys, e, t);
    }
    function Q0(e, t) {
      if (typeof t == "function") {
        var r = t, i = e();
        return r(i), function() {
          r(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Vm(e, t, r) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Pm(Ve, Ys, Q0.bind(null, t, e), i);
    }
    function dv(e, t, r) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = r != null ? r.concat([e]) : null;
      return Fm(Ve, Ys, Q0.bind(null, t, e), i);
    }
    function s1(e, t) {
    }
    var pv = s1;
    function Bm(e, t) {
      var r = Oo(), i = t === void 0 ? null : t;
      return r.memoizedState = [e, i], e;
    }
    function vv(e, t) {
      var r = Mo(), i = t === void 0 ? null : t, u = r.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Lm(i, s))
          return u[0];
      }
      return r.memoizedState = [e, i], e;
    }
    function Im(e, t) {
      var r = Oo(), i = t === void 0 ? null : t, u = e();
      return r.memoizedState = [u, i], u;
    }
    function hv(e, t) {
      var r = Mo(), i = t === void 0 ? null : t, u = r.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Lm(i, s))
          return u[0];
      }
      var c = e();
      return r.memoizedState = [c, i], c;
    }
    function Wm(e) {
      var t = No(e), r = t[0], i = t[1];
      return fv(function() {
        var u = Da.transition;
        Da.transition = 1;
        try {
          i(e);
        } finally {
          Da.transition = u;
        }
      }, [e]), r;
    }
    function G0(e) {
      var t = Yc(), r = t[0], i = t[1];
      return Gs(function() {
        var u = Da.transition;
        Da.transition = 1;
        try {
          i(e);
        } finally {
          Da.transition = u;
        }
      }, [e]), r;
    }
    function X0(e) {
      var t = qc(), r = t[0], i = t[1];
      return Gs(function() {
        var u = Da.transition;
        Da.transition = 1;
        try {
          i(e);
        } finally {
          Da.transition = u;
        }
      }, [e]), r;
    }
    function f1(e, t) {
      var r = Hs();
      To(r < bo ? bo : r, function() {
        e(!0);
      }), To(r > wl ? wl : r, function() {
        var i = Da.transition;
        Da.transition = 1;
        try {
          e(!1), t();
        } finally {
          Da.transition = i;
        }
      });
    }
    function $m() {
      var e = No(!1), t = e[0], r = e[1], i = f1.bind(null, r);
      return sv(i), [i, t];
    }
    function K0() {
      var e = Yc(), t = e[0], r = Qs(), i = r.current;
      return [i, t];
    }
    function Z0() {
      var e = qc(), t = e[0], r = Qs(), i = r.current;
      return [i, t];
    }
    var mv = !1;
    function c1() {
      return mv;
    }
    function J0(e) {
      {
        var t = re(e.type) || "Unknown";
        Bo() && !Mm[t] && (E("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), Mm[t] = !0);
      }
    }
    function Ym() {
      var e = yR.bind(null, J0.bind(null, Yt));
      if (xm()) {
        var t = !1, r = Yt, i = function() {
          throw t || (t = !0, mv = !0, s(e()), mv = !1, J0(r)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, u = SR(i), s = No(u)[1];
        return (Yt.mode & Br) === an && (Yt.flags |= Ve | Yl, ov($s | Vc, function() {
          s(e());
        }, void 0, null)), u;
      } else {
        var c = e();
        return No(c), c;
      }
    }
    function eS() {
      var e = Yc()[0];
      return e;
    }
    function tS() {
      var e = qc()[0];
      return e;
    }
    function qm(e, t, r) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = aa(), u = Cu(e), s = {
        lane: u,
        action: r,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, c = t.pending;
      c === null ? s.next = s : (s.next = c.next, c.next = s), t.pending = s;
      var d = e.alternate;
      if (e === Yt || d !== null && d === Yt)
        Wc = iv = !0;
      else {
        if (e.lanes === H && (d === null || d.lanes === H)) {
          var v = t.lastRenderedReducer;
          if (v !== null) {
            var g;
            g = se.current, se.current = ri;
            try {
              var S = t.lastRenderedState, O = v(S, r);
              if (s.eagerReducer = v, s.eagerState = O, a(O, S))
                return;
            } catch {
            } finally {
              se.current = g;
            }
          }
        }
        typeof jest < "u" && (uE(e), Qb(e)), gr(e, u, i);
      }
    }
    var yv = {
      readContext: kn,
      useCallback: Ir,
      useContext: Ir,
      useEffect: Ir,
      useImperativeHandle: Ir,
      useLayoutEffect: Ir,
      useMemo: Ir,
      useReducer: Ir,
      useRef: Ir,
      useState: Ir,
      useDebugValue: Ir,
      useDeferredValue: Ir,
      useTransition: Ir,
      useMutableSource: Ir,
      useOpaqueIdentifier: Ir,
      unstable_isNewReconciler: ge
    }, nS = null, rS = null, aS = null, iS = null, Wi = null, ri = null, gv = null;
    {
      var Qm = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, dt = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      nS = {
        readContext: function(e, t) {
          return kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", Bt(), $c(t), Bm(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", Bt(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", Bt(), $c(t), fv(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", Bt(), $c(r), Vm(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", Bt(), $c(t), Hm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", Bt(), $c(t);
          var r = se.current;
          se.current = Wi;
          try {
            return Im(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", Bt();
          var i = se.current;
          se.current = Wi;
          try {
            return Am(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", Bt(), sv(e);
        },
        useState: function(e) {
          Y = "useState", Bt();
          var t = se.current;
          se.current = Wi;
          try {
            return No(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", Bt(), Wm(e);
        },
        useTransition: function() {
          return Y = "useTransition", Bt(), $m();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", Bt(), jm(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", Bt(), Ym();
        },
        unstable_isNewReconciler: ge
      }, rS = {
        readContext: function(e, t) {
          return kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ve(), Bm(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", ve(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ve(), fv(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", ve(), Vm(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ve(), Hm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ve();
          var r = se.current;
          se.current = Wi;
          try {
            return Im(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", ve();
          var i = se.current;
          se.current = Wi;
          try {
            return Am(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ve(), sv(e);
        },
        useState: function(e) {
          Y = "useState", ve();
          var t = se.current;
          se.current = Wi;
          try {
            return No(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ve(), Wm(e);
        },
        useTransition: function() {
          return Y = "useTransition", ve(), $m();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", ve(), jm(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", ve(), Ym();
        },
        unstable_isNewReconciler: ge
      }, aS = {
        readContext: function(e, t) {
          return kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ve(), vv(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", ve(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ve(), Gs(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", ve(), dv(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ve(), cv(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ve();
          var r = se.current;
          se.current = ri;
          try {
            return hv(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", ve();
          var i = se.current;
          se.current = ri;
          try {
            return Um(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ve(), Qs();
        },
        useState: function(e) {
          Y = "useState", ve();
          var t = se.current;
          se.current = ri;
          try {
            return Yc(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ve(), pv();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ve(), G0(e);
        },
        useTransition: function() {
          return Y = "useTransition", ve(), K0();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", ve(), uv(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", ve(), eS();
        },
        unstable_isNewReconciler: ge
      }, iS = {
        readContext: function(e, t) {
          return kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", ve(), vv(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", ve(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", ve(), Gs(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", ve(), dv(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", ve(), cv(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", ve();
          var r = se.current;
          se.current = gv;
          try {
            return hv(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", ve();
          var i = se.current;
          se.current = gv;
          try {
            return zm(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", ve(), Qs();
        },
        useState: function(e) {
          Y = "useState", ve();
          var t = se.current;
          se.current = gv;
          try {
            return qc(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", ve(), pv();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", ve(), X0(e);
        },
        useTransition: function() {
          return Y = "useTransition", ve(), Z0();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", ve(), uv(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", ve(), tS();
        },
        unstable_isNewReconciler: ge
      }, Wi = {
        readContext: function(e, t) {
          return Qm(), kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", dt(), Bt(), Bm(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", dt(), Bt(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", dt(), Bt(), fv(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", dt(), Bt(), Vm(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", dt(), Bt(), Hm(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", dt(), Bt();
          var r = se.current;
          se.current = Wi;
          try {
            return Im(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", dt(), Bt();
          var i = se.current;
          se.current = Wi;
          try {
            return Am(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", dt(), Bt(), sv(e);
        },
        useState: function(e) {
          Y = "useState", dt(), Bt();
          var t = se.current;
          se.current = Wi;
          try {
            return No(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", dt(), Bt(), void 0;
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", dt(), Bt(), Wm(e);
        },
        useTransition: function() {
          return Y = "useTransition", dt(), Bt(), $m();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", dt(), Bt(), jm(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", dt(), Bt(), Ym();
        },
        unstable_isNewReconciler: ge
      }, ri = {
        readContext: function(e, t) {
          return Qm(), kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", dt(), ve(), vv(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", dt(), ve(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", dt(), ve(), Gs(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", dt(), ve(), dv(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", dt(), ve(), cv(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", dt(), ve();
          var r = se.current;
          se.current = ri;
          try {
            return hv(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", dt(), ve();
          var i = se.current;
          se.current = ri;
          try {
            return Um(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", dt(), ve(), Qs();
        },
        useState: function(e) {
          Y = "useState", dt(), ve();
          var t = se.current;
          se.current = ri;
          try {
            return Yc(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", dt(), ve(), pv();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", dt(), ve(), G0(e);
        },
        useTransition: function() {
          return Y = "useTransition", dt(), ve(), K0();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", dt(), ve(), uv(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", dt(), ve(), eS();
        },
        unstable_isNewReconciler: ge
      }, gv = {
        readContext: function(e, t) {
          return Qm(), kn(e, t);
        },
        useCallback: function(e, t) {
          return Y = "useCallback", dt(), ve(), vv(e, t);
        },
        useContext: function(e, t) {
          return Y = "useContext", dt(), ve(), kn(e, t);
        },
        useEffect: function(e, t) {
          return Y = "useEffect", dt(), ve(), Gs(e, t);
        },
        useImperativeHandle: function(e, t, r) {
          return Y = "useImperativeHandle", dt(), ve(), dv(e, t, r);
        },
        useLayoutEffect: function(e, t) {
          return Y = "useLayoutEffect", dt(), ve(), cv(e, t);
        },
        useMemo: function(e, t) {
          Y = "useMemo", dt(), ve();
          var r = se.current;
          se.current = ri;
          try {
            return hv(e, t);
          } finally {
            se.current = r;
          }
        },
        useReducer: function(e, t, r) {
          Y = "useReducer", dt(), ve();
          var i = se.current;
          se.current = ri;
          try {
            return zm(e, t, r);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return Y = "useRef", dt(), ve(), Qs();
        },
        useState: function(e) {
          Y = "useState", dt(), ve();
          var t = se.current;
          se.current = ri;
          try {
            return qc(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Y = "useDebugValue", dt(), ve(), pv();
        },
        useDeferredValue: function(e) {
          return Y = "useDeferredValue", dt(), ve(), X0(e);
        },
        useTransition: function() {
          return Y = "useTransition", dt(), ve(), Z0();
        },
        useMutableSource: function(e, t, r) {
          return Y = "useMutableSource", dt(), ve(), uv(e, t, r);
        },
        useOpaqueIdentifier: function() {
          return Y = "useOpaqueIdentifier", dt(), ve(), tS();
        },
        unstable_isNewReconciler: ge
      };
    }
    var Sv = fe.unstable_now, lS = 0, Qc = -1;
    function d1() {
      return lS;
    }
    function uS() {
      lS = Sv();
    }
    function Gm(e) {
      Qc = Sv(), e.actualStartTime < 0 && (e.actualStartTime = Sv());
    }
    function oS(e) {
      Qc = -1;
    }
    function Ev(e, t) {
      if (Qc >= 0) {
        var r = Sv() - Qc;
        e.actualDuration += r, t && (e.selfBaseDuration = r), Qc = -1;
      }
    }
    function Xm(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var Gc = nt.ReactCurrentOwner, $i = !1, Km, Xc, Zm, Jm, ey, Lo, ty, Cv;
    Km = {}, Xc = {}, Zm = {}, Jm = {}, ey = {}, Lo = !1, ty = {}, Cv = {};
    function Wr(e, t, r, i) {
      e === null ? t.child = U0(t, null, r, i) : t.child = Jp(t, e.child, r, i);
    }
    function p1(e, t, r, i) {
      t.child = Jp(t, e.child, null, i), t.child = Jp(t, null, r, i);
    }
    function sS(e, t, r, i, u) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && Ja(
          s,
          i,
          // Resolved props
          "prop",
          re(r)
        );
      }
      var c = r.render, d = t.ref, v;
      Bs(t, u);
      {
        if (Gc.current = t, $n(!0), v = qs(e, t, c, i, d, u), t.mode & vn) {
          Lr();
          try {
            v = qs(e, t, c, i, d, u);
          } finally {
            En();
          }
        }
        $n(!1);
      }
      return e !== null && !$i ? (W0(e, t, u), xl(e, t, u)) : (t.flags |= ir, Wr(e, t, v, u), t.child);
    }
    function fS(e, t, r, i, u, s) {
      if (e === null) {
        var c = r.type;
        if (lT(c) && r.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        r.defaultProps === void 0) {
          var d = c;
          return d = rf(c), t.tag = Re, t.type = d, iy(t, c), cS(e, t, d, i, u, s);
        }
        {
          var v = c.propTypes;
          v && Ja(
            v,
            i,
            // Resolved props
            "prop",
            re(c)
          );
        }
        var g = Iy(r.type, null, i, t, t.mode, s);
        return g.ref = t.ref, g.return = t, t.child = g, g;
      }
      {
        var S = r.type, O = S.propTypes;
        O && Ja(
          O,
          i,
          // Resolved props
          "prop",
          re(S)
        );
      }
      var b = e.child;
      if (!Pn(u, s)) {
        var L = b.memoizedProps, W = r.compare;
        if (W = W !== null ? W : o, W(L, i) && e.ref === t.ref)
          return xl(e, t, s);
      }
      t.flags |= ir;
      var te = Po(b, i);
      return te.ref = t.ref, te.return = t, t.child = te, te;
    }
    function cS(e, t, r, i, u, s) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === Jt) {
          var d = c, v = d._payload, g = d._init;
          try {
            c = g(v);
          } catch {
            c = null;
          }
          var S = c && c.propTypes;
          S && Ja(
            S,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            re(c)
          );
        }
      }
      if (e !== null) {
        var O = e.memoizedProps;
        if (o(O, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if ($i = !1, Pn(s, u))
            (e.flags & Iu) !== zt && ($i = !0);
          else
            return t.lanes = e.lanes, xl(e, t, s);
      }
      return ry(e, t, r, i, s);
    }
    function ny(e, t, r) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || i.mode === "unstable-defer-without-hiding")
        if ((t.mode & wo) === an) {
          var c = {
            baseLanes: H
          };
          t.memoizedState = c, jv(t, r);
        } else if (Pn(r, Jr)) {
          var S = {
            baseLanes: H
          };
          t.memoizedState = S;
          var O = s !== null ? s.baseLanes : r;
          jv(t, O);
        } else {
          var d;
          if (s !== null) {
            var v = s.baseLanes;
            d = xt(v, r);
          } else
            d = r;
          Iv(Jr), t.lanes = t.childLanes = Jr;
          var g = {
            baseLanes: d
          };
          return t.memoizedState = g, jv(t, d), null;
        }
      else {
        var b;
        s !== null ? (b = xt(s.baseLanes, r), t.memoizedState = null) : b = r, jv(t, b);
      }
      return Wr(e, t, u, r), t.child;
    }
    var v1 = ny;
    function h1(e, t, r) {
      var i = t.pendingProps;
      return Wr(e, t, i, r), t.child;
    }
    function m1(e, t, r) {
      var i = t.pendingProps.children;
      return Wr(e, t, i, r), t.child;
    }
    function y1(e, t, r) {
      {
        t.flags |= Ve;
        var i = t.stateNode;
        i.effectDuration = 0, i.passiveEffectDuration = 0;
      }
      var u = t.pendingProps, s = u.children;
      return Wr(e, t, s, r), t.child;
    }
    function dS(e, t) {
      var r = t.ref;
      (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= zn);
    }
    function ry(e, t, r, i, u) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && Ja(
          s,
          i,
          // Resolved props
          "prop",
          re(r)
        );
      }
      var c;
      {
        var d = js(t, r, !0);
        c = Ps(t, d);
      }
      var v;
      Bs(t, u);
      {
        if (Gc.current = t, $n(!0), v = qs(e, t, r, i, c, u), t.mode & vn) {
          Lr();
          try {
            v = qs(e, t, r, i, c, u);
          } finally {
            En();
          }
        }
        $n(!1);
      }
      return e !== null && !$i ? (W0(e, t, u), xl(e, t, u)) : (t.flags |= ir, Wr(e, t, v, u), t.child);
    }
    function pS(e, t, r, i, u) {
      if (t.type !== t.elementType) {
        var s = r.propTypes;
        s && Ja(
          s,
          i,
          // Resolved props
          "prop",
          re(r)
        );
      }
      var c;
      Vi(r) ? (c = !0, Ap(t)) : c = !1, Bs(t, u);
      var d = t.stateNode, v;
      d === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= Je), M0(t, r, i), pm(t, r, i, u), v = !0) : e === null ? v = YR(t, r, i, u) : v = qR(e, t, r, i, u);
      var g = ay(e, t, r, v, c, u);
      {
        var S = t.stateNode;
        v && S.props !== i && (Lo || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", re(t.type) || "a component"), Lo = !0);
      }
      return g;
    }
    function ay(e, t, r, i, u, s) {
      dS(e, t);
      var c = (t.flags & Dt) !== zt;
      if (!i && !c)
        return u && Zg(t, r, !1), xl(e, t, s);
      var d = t.stateNode;
      Gc.current = t;
      var v;
      if (c && typeof r.getDerivedStateFromError != "function")
        v = null, oS();
      else {
        if ($n(!0), v = d.render(), t.mode & vn) {
          Lr();
          try {
            d.render();
          } finally {
            En();
          }
        }
        $n(!1);
      }
      return t.flags |= ir, e !== null && c ? p1(e, t, v, s) : Wr(e, t, v, s), t.memoizedState = d.state, u && Zg(t, r, !0), t.child;
    }
    function vS(e) {
      var t = e.stateNode;
      t.pendingContext ? Xg(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xg(e, t.context, !1), Sm(e, t.containerInfo);
    }
    function g1(e, t, r) {
      vS(t);
      var i = t.updateQueue;
      if (!(e !== null && i !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var u = t.pendingProps, s = t.memoizedState, c = s !== null ? s.element : null;
      R0(e, t), Uc(t, u, null, r);
      var d = t.memoizedState, v = d.element;
      if (v === c)
        return _m(), xl(e, t, r);
      var g = t.stateNode;
      if (g.hydrate && JR(t)) {
        {
          var S = g.mutableSourceEagerHydrationData;
          if (S != null)
            for (var O = 0; O < S.length; O += 2) {
              var b = S[O], L = S[O + 1];
              I0(b, L);
            }
        }
        var W = U0(t, null, v, r);
        t.child = W;
        for (var te = W; te; )
          te.flags = te.flags & ~Je | zr, te = te.sibling;
      } else
        Wr(e, t, v, r), _m();
      return t.child;
    }
    function S1(e, t, r) {
      j0(t), e === null && wm(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, c = u.children, d = Ph(i, u);
      return d ? c = null : s !== null && Ph(i, s) && (t.flags |= Un), dS(e, t), Wr(e, t, c, r), t.child;
    }
    function E1(e, t) {
      return e === null && wm(t), null;
    }
    function C1(e, t, r, i, u) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Je);
      var s = t.pendingProps, c = r, d = c._payload, v = c._init, g = v(d);
      t.type = g;
      var S = t.tag = uT(g), O = ti(g, s), b;
      switch (S) {
        case le:
          return iy(t, g), t.type = g = rf(g), b = ry(null, t, g, O, u), b;
        case Z:
          return t.type = g = jy(g), b = pS(null, t, g, O, u), b;
        case J:
          return t.type = g = Py(g), b = sS(null, t, g, O, u), b;
        case ye: {
          if (t.type !== t.elementType) {
            var L = g.propTypes;
            L && Ja(
              L,
              O,
              // Resolved for outer only
              "prop",
              re(g)
            );
          }
          return b = fS(
            null,
            t,
            g,
            ti(g.type, O),
            // The inner type can have defaults too
            i,
            u
          ), b;
        }
      }
      var W = "";
      throw g !== null && typeof g == "object" && g.$$typeof === Jt && (W = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + g + ". Lazy element type must resolve to a class or function." + W);
    }
    function R1(e, t, r, i, u) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Je), t.tag = Z;
      var s;
      return Vi(r) ? (s = !0, Ap(t)) : s = !1, Bs(t, u), M0(t, r, i), pm(t, r, i, u), ay(null, t, r, !0, s, u);
    }
    function b1(e, t, r, i) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Je);
      var u = t.pendingProps, s;
      {
        var c = js(t, r, !1);
        s = Ps(t, c);
      }
      Bs(t, i);
      var d;
      {
        if (r.prototype && typeof r.prototype.render == "function") {
          var v = re(r) || "Unknown";
          Km[v] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", v, v), Km[v] = !0);
        }
        t.mode & vn && ei.recordLegacyContextWarning(t, null), $n(!0), Gc.current = t, d = qs(null, t, r, u, s, i), $n(!1);
      }
      if (t.flags |= ir, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0) {
        var g = re(r) || "Unknown";
        Xc[g] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Xc[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0
      ) {
        {
          var S = re(r) || "Unknown";
          Xc[S] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", S, S, S), Xc[S] = !0);
        }
        t.tag = Z, t.memoizedState = null, t.updateQueue = null;
        var O = !1;
        Vi(r) ? (O = !0, Ap(t)) : O = !1, t.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, nm(t);
        var b = r.getDerivedStateFromProps;
        return typeof b == "function" && Gp(t, r, b, u), O0(t, d), pm(t, r, u, i), ay(null, t, r, !0, O, i);
      } else {
        if (t.tag = le, t.mode & vn) {
          Lr();
          try {
            d = qs(null, t, r, u, s, i);
          } finally {
            En();
          }
        }
        return Wr(null, t, d, i), iy(t, r), t.child;
      }
    }
    function iy(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var r = "", i = Pa();
          i && (r += `

Check the render method of \`` + i + "`.");
          var u = i || e._debugID || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), ey[u] || (ey[u] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", r));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var c = re(t) || "Unknown";
          Jm[c] || (E("%s: Function components do not support getDerivedStateFromProps.", c), Jm[c] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var d = re(t) || "Unknown";
          Zm[d] || (E("%s: Function components do not support contextType.", d), Zm[d] = !0);
        }
      }
    }
    var Rv = {
      dehydrated: null,
      retryLane: dn
    };
    function bv(e) {
      return {
        baseLanes: e
      };
    }
    function hS(e, t) {
      return {
        baseLanes: xt(e.baseLanes, t)
      };
    }
    function T1(e, t, r, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return nv(e, Fc);
    }
    function mS(e, t) {
      return lu(e.childLanes, t);
    }
    function yS(e, t, r) {
      var i = t.pendingProps;
      _T(t) && (t.flags |= Dt);
      var u = ni.current, s = !1, c = (t.flags & Dt) !== zt;
      if (c || T1(u, e) ? (s = !0, t.flags &= ~Dt) : (e === null || e.memoizedState !== null) && i.fallback !== void 0 && i.unstable_avoidThisFallback !== !0 && (u = KR(u, Rm)), u = Hc(u), ko(t, u), e === null) {
        i.fallback !== void 0 && wm(t);
        var d = i.children, v = i.fallback;
        if (s) {
          var g = gS(t, d, v, r), S = t.child;
          return S.memoizedState = bv(r), t.memoizedState = Rv, g;
        } else if (typeof i.unstable_expectedLoadTime == "number") {
          var O = gS(t, d, v, r), b = t.child;
          return b.memoizedState = bv(r), t.memoizedState = Rv, t.lanes = Oi, Iv(Oi), O;
        } else
          return w1(t, d, r);
      } else {
        var L = e.memoizedState;
        if (L !== null)
          if (s) {
            var W = i.fallback, te = i.children, Ae = CS(e, t, te, W, r), lt = t.child, Ie = e.child.memoizedState;
            return lt.memoizedState = Ie === null ? bv(r) : hS(Ie, r), lt.childLanes = mS(e, r), t.memoizedState = Rv, Ae;
          } else {
            var wt = i.children, It = ES(e, t, wt, r);
            return t.memoizedState = null, It;
          }
        else if (s) {
          var N = i.fallback, j = i.children, k = CS(e, t, j, N, r), G = t.child, ue = e.child.memoizedState;
          return G.memoizedState = ue === null ? bv(r) : hS(ue, r), G.childLanes = mS(e, r), t.memoizedState = Rv, k;
        } else {
          var Ee = i.children, Ct = ES(e, t, Ee, r);
          return t.memoizedState = null, Ct;
        }
      }
    }
    function w1(e, t, r) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = $y(u, i, r, null);
      return s.return = e, e.child = s, s;
    }
    function gS(e, t, r, i) {
      var u = e.mode, s = e.child, c = {
        mode: "hidden",
        children: t
      }, d, v;
      return (u & Br) === an && s !== null ? (d = s, d.childLanes = H, d.pendingProps = c, e.mode & na && (d.actualDuration = 0, d.actualStartTime = -1, d.selfBaseDuration = 0, d.treeBaseDuration = 0), v = Fo(r, u, i, null)) : (d = $y(c, u, H, null), v = Fo(r, u, i, null)), d.return = e, v.return = e, d.sibling = v, e.child = d, v;
    }
    function SS(e, t) {
      return Po(e, t);
    }
    function ES(e, t, r, i) {
      var u = e.child, s = u.sibling, c = SS(u, {
        mode: "visible",
        children: r
      });
      return (t.mode & Br) === an && (c.lanes = i), c.return = t, c.sibling = null, s !== null && (s.nextEffect = null, s.flags = Qt, t.firstEffect = t.lastEffect = s), t.child = c, c;
    }
    function CS(e, t, r, i, u) {
      var s = t.mode, c = e.child, d = c.sibling, v = {
        mode: "hidden",
        children: r
      }, g;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Br) === an && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== c
      ) {
        var S = t.child;
        g = S, g.childLanes = H, g.pendingProps = v, t.mode & na && (g.actualDuration = 0, g.actualStartTime = -1, g.selfBaseDuration = c.selfBaseDuration, g.treeBaseDuration = c.treeBaseDuration);
        var O = g.lastEffect;
        O !== null ? (t.firstEffect = g.firstEffect, t.lastEffect = O, O.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        g = SS(c, v);
      var b;
      return d !== null ? b = Po(d, i) : (b = Fo(i, s, u, null), b.flags |= Je), b.return = t, g.return = t, g.sibling = b, t.child = g, b;
    }
    function RS(e, t) {
      e.lanes = xt(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = xt(r.lanes, t)), S0(e.return, t);
    }
    function _1(e, t, r) {
      for (var i = t; i !== null; ) {
        if (i.tag === ee) {
          var u = i.memoizedState;
          u !== null && RS(i, r);
        } else if (i.tag === ut)
          RS(i, r);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function x1(e) {
      for (var t = e, r = null; t !== null; ) {
        var i = t.alternate;
        i !== null && rv(i) === null && (r = t), t = t.sibling;
      }
      return r;
    }
    function k1(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ty[e])
        if (ty[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function D1(e, t) {
      e !== void 0 && !Cv[e] && (e !== "collapsed" && e !== "hidden" ? (Cv[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Cv[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function bS(e, t) {
      {
        var r = Array.isArray(e), i = !r && typeof Mt(e) == "function";
        if (r || i) {
          var u = r ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function O1(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r++)
            if (!bS(e[r], r))
              return;
        } else {
          var i = Mt(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), c = 0; !s.done; s = u.next()) {
                if (!bS(s.value, c))
                  return;
                c++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ly(e, t, r, i, u, s) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: r,
        tailMode: u,
        lastEffect: s
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = r, c.tailMode = u, c.lastEffect = s);
    }
    function TS(e, t, r) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, c = i.children;
      k1(u), D1(s, u), O1(c, u), Wr(e, t, c, r);
      var d = ni.current, v = nv(d, Fc);
      if (v)
        d = bm(d, Fc), t.flags |= Dt;
      else {
        var g = e !== null && (e.flags & Dt) !== zt;
        g && _1(t, t.child, r), d = Hc(d);
      }
      if (ko(t, d), (t.mode & Br) === an)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var S = x1(t.child), O;
            S === null ? (O = t.child, t.child = null) : (O = S.sibling, S.sibling = null), ly(
              t,
              !1,
              // isBackwards
              O,
              S,
              s,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var b = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var W = L.alternate;
              if (W !== null && rv(W) === null) {
                t.child = L;
                break;
              }
              var te = L.sibling;
              L.sibling = b, b = L, L = te;
            }
            ly(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s,
              t.lastEffect
            );
            break;
          }
          case "together": {
            ly(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function M1(e, t, r) {
      Sm(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Jp(t, null, i, r) : Wr(e, t, i, r), t.child;
    }
    var wS = !1;
    function N1(e, t, r) {
      var i = t.type, u = i._context, s = t.pendingProps, c = t.memoizedProps, d = s.value;
      {
        "value" in s || wS || (wS = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ja(v, s, "prop", "Context.Provider");
      }
      if (g0(t, d), c !== null) {
        var g = c.value, S = FR(u, d, g);
        if (S === 0) {
          if (c.children === s.children && !Np())
            return xl(e, t, r);
        } else
          HR(t, u, S, r);
      }
      var O = s.children;
      return Wr(e, t, O, r), t.child;
    }
    var _S = !1;
    function L1(e, t, r) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (_S || (_S = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Bs(t, r);
      var c = kn(i, u.unstable_observedBits), d;
      return Gc.current = t, $n(!0), d = s(c), $n(!1), t.flags |= ir, Wr(e, t, d, r), t.child;
    }
    function uy() {
      $i = !0;
    }
    function xl(e, t, r) {
      return e !== null && (t.dependencies = e.dependencies), oS(), Ny(t.lanes), Pn(r, t.childLanes) ? (QR(e, t), t.child) : null;
    }
    function A1(e, t, r) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, r.index = t.index, r.sibling = t.sibling, r.return = t.return, r.ref = t.ref, t === i.child)
          i.child = r;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = r;
        }
        var s = i.lastEffect;
        return s !== null ? (s.nextEffect = e, i.lastEffect = e) : i.firstEffect = i.lastEffect = e, e.nextEffect = null, e.flags = Qt, r.flags |= Je, r;
      }
    }
    function xS(e, t, r) {
      var i = t.lanes;
      if (t._debugNeedsRemount && e !== null)
        return A1(e, t, Iy(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var u = e.memoizedProps, s = t.pendingProps;
        if (u !== s || Np() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          $i = !0;
        else if (Pn(r, i))
          (e.flags & Iu) !== zt ? $i = !0 : $i = !1;
        else {
          switch ($i = !1, t.tag) {
            case ce:
              vS(t), _m();
              break;
            case he:
              j0(t);
              break;
            case Z: {
              var c = t.type;
              Vi(c) && Ap(t);
              break;
            }
            case xe:
              Sm(t, t.stateNode.containerInfo);
              break;
            case He: {
              var d = t.memoizedProps.value;
              g0(t, d);
              break;
            }
            case we:
              {
                var v = Pn(r, t.childLanes);
                v && (t.flags |= Ve);
                var g = t.stateNode;
                g.effectDuration = 0, g.passiveEffectDuration = 0;
              }
              break;
            case ee: {
              var S = t.memoizedState;
              if (S !== null) {
                var O = t.child, b = O.childLanes;
                if (Pn(r, b))
                  return yS(e, t, r);
                ko(t, Hc(ni.current));
                var L = xl(e, t, r);
                return L !== null ? L.sibling : null;
              } else
                ko(t, Hc(ni.current));
              break;
            }
            case ut: {
              var W = (e.flags & Dt) !== zt, te = Pn(r, t.childLanes);
              if (W) {
                if (te)
                  return TS(e, t, r);
                t.flags |= Dt;
              }
              var Ae = t.memoizedState;
              if (Ae !== null && (Ae.rendering = null, Ae.tail = null, Ae.lastEffect = null), ko(t, ni.current), te)
                break;
              return null;
            }
            case Ze:
            case Rt:
              return t.lanes = H, ny(e, t, r);
          }
          return xl(e, t, r);
        }
      } else
        $i = !1;
      switch (t.lanes = H, t.tag) {
        case je:
          return b1(e, t, t.type, r);
        case Ue: {
          var lt = t.elementType;
          return C1(e, t, lt, i, r);
        }
        case le: {
          var Ie = t.type, wt = t.pendingProps, It = t.elementType === Ie ? wt : ti(Ie, wt);
          return ry(e, t, Ie, It, r);
        }
        case Z: {
          var N = t.type, j = t.pendingProps, k = t.elementType === N ? j : ti(N, j);
          return pS(e, t, N, k, r);
        }
        case ce:
          return g1(e, t, r);
        case he:
          return S1(e, t, r);
        case We:
          return E1(e, t);
        case ee:
          return yS(e, t, r);
        case xe:
          return M1(e, t, r);
        case J: {
          var G = t.type, ue = t.pendingProps, Ee = t.elementType === G ? ue : ti(G, ue);
          return sS(e, t, G, Ee, r);
        }
        case Zt:
          return h1(e, t, r);
        case De:
          return m1(e, t, r);
        case we:
          return y1(e, t, r);
        case He:
          return N1(e, t, r);
        case ht:
          return L1(e, t, r);
        case ye: {
          var Ct = t.type, Kt = t.pendingProps, ln = ti(Ct, Kt);
          if (t.type !== t.elementType) {
            var jt = Ct.propTypes;
            jt && Ja(
              jt,
              ln,
              // Resolved for outer only
              "prop",
              re(Ct)
            );
          }
          return ln = ti(Ct.type, ln), fS(e, t, Ct, ln, i, r);
        }
        case Re:
          return cS(e, t, t.type, t.pendingProps, i, r);
        case $e: {
          var Dn = t.type, Ot = t.pendingProps, un = t.elementType === Dn ? Ot : ti(Dn, Ot);
          return R1(e, t, Dn, un, r);
        }
        case ut:
          return TS(e, t, r);
        case ot:
          break;
        case Ce:
          break;
        case st:
          break;
        case Ze:
          return ny(e, t, r);
        case Rt:
          return v1(e, t, r);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Xs(e) {
      e.flags |= Ve;
    }
    function kS(e) {
      e.flags |= zn;
    }
    var DS, oy, OS, MS;
    DS = function(e, t, r, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === he || u.tag === We)
          AC(e, u.stateNode);
        else if (u.tag !== xe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, oy = function(e) {
    }, OS = function(e, t, r, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var c = t.stateNode, d = Em(), v = zC(c, r, s, i, u, d);
        t.updateQueue = v, v && Xs(t);
      }
    }, MS = function(e, t, r, i) {
      r !== i && Xs(t);
    };
    function Kc(e, t) {
      if (!xm())
        switch (e.tailMode) {
          case "hidden": {
            for (var r = e.tail, i = null; r !== null; )
              r.alternate !== null && (i = r), r = r.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function NS(e, t, r) {
      var i = t.pendingProps;
      switch (t.tag) {
        case je:
        case Ue:
        case Re:
        case le:
        case J:
        case Zt:
        case De:
        case we:
        case ht:
        case ye:
          return null;
        case Z: {
          var u = t.type;
          return Vi(u) && Lp(t), null;
        }
        case ce: {
          Is(t), $h(t), Dm();
          var s = t.stateNode;
          if (s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var c = av(t);
            c ? Xs(t) : s.hydrate || (t.flags |= ma);
          }
          return oy(t), null;
        }
        case he: {
          Cm(t);
          var d = z0(), v = t.type;
          if (e !== null && t.stateNode != null)
            OS(e, t, v, i, d), e.ref !== t.ref && kS(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var g = Em(), S = av(t);
            if (S)
              e1(t, d, g) && Xs(t);
            else {
              var O = LC(v, i, d, g, t);
              DS(O, t, !1, !1), t.stateNode = O, UC(O, v, i, d) && Xs(t);
            }
            t.ref !== null && kS(t);
          }
          return null;
        }
        case We: {
          var b = i;
          if (e && t.stateNode != null) {
            var L = e.memoizedProps;
            MS(e, t, L, b);
          } else {
            if (typeof b != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var W = z0(), te = Em(), Ae = av(t);
            Ae ? t1(t) && Xs(t) : t.stateNode = jC(b, W, te, t);
          }
          return null;
        }
        case ee: {
          Ws(t);
          var lt = t.memoizedState;
          if ((t.flags & Dt) !== zt)
            return t.lanes = r, (t.mode & na) !== an && Xm(t), t;
          var Ie = lt !== null, wt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && av(t);
          else {
            var It = e.memoizedState;
            wt = It !== null;
          }
          if (Ie && !wt && (t.mode & Br) !== an) {
            var N = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            N || nv(ni.current, Rm) ? Eb() : Cb();
          }
          return (Ie || wt) && (t.flags |= Ve), null;
        }
        case xe:
          return Is(t), oy(t), e === null && ER(t.stateNode.containerInfo), null;
        case He:
          return Jh(t), null;
        case $e: {
          var j = t.type;
          return Vi(j) && Lp(t), null;
        }
        case ut: {
          Ws(t);
          var k = t.memoizedState;
          if (k === null)
            return null;
          var G = (t.flags & Dt) !== zt, ue = k.rendering;
          if (ue === null)
            if (G)
              Kc(k, !1);
            else {
              var Ee = bb() && (e === null || (e.flags & Dt) === zt);
              if (!Ee)
                for (var Ct = t.child; Ct !== null; ) {
                  var Kt = rv(Ct);
                  if (Kt !== null) {
                    G = !0, t.flags |= Dt, Kc(k, !1);
                    var ln = Kt.updateQueue;
                    return ln !== null && (t.updateQueue = ln, t.flags |= Ve), k.lastEffect === null && (t.firstEffect = null), t.lastEffect = k.lastEffect, GR(t, r), ko(t, bm(ni.current, Fc)), t.child;
                  }
                  Ct = Ct.sibling;
                }
              k.tail !== null && mr() > QS() && (t.flags |= Dt, G = !0, Kc(k, !1), t.lanes = Oi, Iv(Oi));
            }
          else {
            if (!G) {
              var jt = rv(ue);
              if (jt !== null) {
                t.flags |= Dt, G = !0;
                var Dn = jt.updateQueue;
                if (Dn !== null && (t.updateQueue = Dn, t.flags |= Ve), Kc(k, !0), k.tail === null && k.tailMode === "hidden" && !ue.alternate && !xm()) {
                  var Ot = t.lastEffect = k.lastEffect;
                  return Ot !== null && (Ot.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                mr() * 2 - k.renderingStartTime > QS() && r !== Jr && (t.flags |= Dt, G = !0, Kc(k, !1), t.lanes = Oi, Iv(Oi));
            }
            if (k.isBackwards)
              ue.sibling = t.child, t.child = ue;
            else {
              var un = k.last;
              un !== null ? un.sibling = ue : t.child = ue, k.last = ue;
            }
          }
          if (k.tail !== null) {
            var Qn = k.tail;
            k.rendering = Qn, k.tail = Qn.sibling, k.lastEffect = t.lastEffect, k.renderingStartTime = mr(), Qn.sibling = null;
            var yn = ni.current;
            return G ? yn = bm(yn, Fc) : yn = Hc(yn), ko(t, yn), Qn;
          }
          return null;
        }
        case ot:
          break;
        case Ce:
          break;
        case st:
          break;
        case Ze:
        case Rt: {
          if (My(t), e !== null) {
            var Gi = t.memoizedState, gn = e.memoizedState, Xi = gn !== null, Ho = Gi !== null;
            Xi !== Ho && i.mode !== "unstable-defer-without-hiding" && (t.flags |= Ve);
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function U1(e, t) {
      switch (e.tag) {
        case Z: {
          var r = e.type;
          Vi(r) && Lp(e);
          var i = e.flags;
          return i & Kr ? (e.flags = i & ~Kr | Dt, (e.mode & na) !== an && Xm(e), e) : null;
        }
        case ce: {
          Is(e), $h(e), Dm();
          var u = e.flags;
          if ((u & Dt) !== zt)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = u & ~Kr | Dt, e;
        }
        case he:
          return Cm(e), null;
        case ee: {
          Ws(e);
          var s = e.flags;
          return s & Kr ? (e.flags = s & ~Kr | Dt, (e.mode & na) !== an && Xm(e), e) : null;
        }
        case ut:
          return Ws(e), null;
        case xe:
          return Is(e), null;
        case He:
          return Jh(e), null;
        case Ze:
        case Rt:
          return My(e), null;
        default:
          return null;
      }
    }
    function LS(e) {
      switch (e.tag) {
        case Z: {
          var t = e.type.childContextTypes;
          t != null && Lp(e);
          break;
        }
        case ce: {
          Is(e), $h(e), Dm();
          break;
        }
        case he: {
          Cm(e);
          break;
        }
        case xe:
          Is(e);
          break;
        case ee:
          Ws(e);
          break;
        case ut:
          Ws(e);
          break;
        case He:
          Jh(e);
          break;
        case Ze:
        case Rt:
          My(e);
          break;
      }
    }
    function sy(e, t) {
      return {
        value: e,
        source: t,
        stack: cr(t)
      };
    }
    function z1(e, t) {
      return !0;
    }
    function fy(e, t) {
      try {
        var r = z1(e, t);
        if (r === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, c = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === Z)
            return;
          console.error(i);
        }
        var d = u ? re(u.type) : null, v = d ? "The above error occurred in the <" + d + "> component:" : "The above error occurred in one of your React components:", g, S = re(e.type);
        S ? g = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + S + ".") : g = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        var O = v + `
` + c + `

` + ("" + g);
        console.error(O);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var j1 = typeof WeakMap == "function" ? WeakMap : Map;
    function AS(e, t, r) {
      var i = mu(Xt, r);
      i.tag = em, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        jb(u), fy(e, t);
      }, i;
    }
    function US(e, t, r) {
      var i = mu(Xt, r);
      i.tag = em;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return fy(e, t), u(s);
        };
      }
      var c = e.stateNode;
      return c !== null && typeof c.componentDidCatch == "function" ? i.callback = function() {
        hE(e), typeof u != "function" && (Ub(this), fy(e, t));
        var v = t.value, g = t.stack;
        this.componentDidCatch(v, {
          componentStack: g !== null ? g : ""
        }), typeof u != "function" && (Pn(e.lanes, vt) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", re(e.type) || "Unknown"));
      } : i.callback = function() {
        hE(e);
      }, i;
    }
    function P1(e, t, r) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new j1(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(r)) {
        u.add(r);
        var s = Pb.bind(null, e, t, r);
        t.then(s, s);
      }
    }
    function F1(e, t, r, i, u) {
      if (r.flags |= Bu, r.firstEffect = r.lastEffect = null, i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        if ((r.mode & Br) === an) {
          var c = r.alternate;
          c ? (r.updateQueue = c.updateQueue, r.memoizedState = c.memoizedState, r.lanes = c.lanes) : (r.updateQueue = null, r.memoizedState = null);
        }
        var d = nv(ni.current, Rm), v = t;
        do {
          if (v.tag === ee && ZR(v, d)) {
            var g = v.updateQueue;
            if (g === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), v.updateQueue = S;
            } else
              g.add(s);
            if ((v.mode & Br) === an) {
              if (v.flags |= Dt, r.flags |= Iu, r.flags &= ~(Of | Bu), r.tag === Z) {
                var O = r.alternate;
                if (O === null)
                  r.tag = $e;
                else {
                  var b = mu(Xt, vt);
                  b.tag = Wp, yu(r, b);
                }
              }
              r.lanes = xt(r.lanes, vt);
              return;
            }
            P1(e, s, u), v.flags |= Kr, v.lanes = u;
            return;
          }
          v = v.return;
        } while (v !== null);
        i = new Error((re(r.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      Rb(), i = sy(i, r);
      var L = t;
      do {
        switch (L.tag) {
          case ce: {
            var W = i;
            L.flags |= Kr;
            var te = _n(u);
            L.lanes = xt(L.lanes, te);
            var Ae = AS(L, W, te);
            b0(L, Ae);
            return;
          }
          case Z:
            var lt = i, Ie = L.type, wt = L.stateNode;
            if ((L.flags & Dt) === zt && (typeof Ie.getDerivedStateFromError == "function" || wt !== null && typeof wt.componentDidCatch == "function" && !Ly(wt))) {
              L.flags |= Kr;
              var It = _n(u);
              L.lanes = xt(L.lanes, It);
              var N = US(L, lt, It);
              b0(L, N);
              return;
            }
            break;
        }
        L = L.return;
      } while (L !== null);
    }
    var zS = null;
    zS = /* @__PURE__ */ new Set();
    var H1 = typeof WeakSet == "function" ? WeakSet : Set, V1 = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function B1(e, t) {
      if (rr(null, V1, null, e, t), wr()) {
        var r = ar();
        Ru(e, r);
      }
    }
    function jS(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (rr(null, t, null, null), wr()) {
            var r = ar();
            Ru(e, r);
          }
        } else
          t.current = null;
    }
    function I1(e, t) {
      if (rr(null, t, null), wr()) {
        var r = ar();
        Ru(e, r);
      }
    }
    function W1(e, t) {
      switch (t.tag) {
        case le:
        case J:
        case Re:
        case st:
          return;
        case Z: {
          if (t.flags & ma && e !== null) {
            var r = e.memoizedProps, i = e.memoizedState, u = t.stateNode;
            t.type === t.elementType && !Lo && (u.props !== t.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", re(t.type) || "instance"), u.state !== t.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", re(t.type) || "instance"));
            var s = u.getSnapshotBeforeUpdate(t.elementType === t.type ? r : ti(t.type, r), i);
            {
              var c = zS;
              s === void 0 && !c.has(t.type) && (c.add(t.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", re(t.type)));
            }
            u.__reactInternalSnapshotBeforeUpdate = s;
          }
          return;
        }
        case ce: {
          if (t.flags & ma) {
            var d = t.stateNode;
            Hh(d.containerInfo);
          }
          return;
        }
        case he:
        case We:
        case xe:
        case $e:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $1(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            var c = s.destroy;
            s.destroy = void 0, c !== void 0 && c();
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Y1(e, t) {
      var r = t.updateQueue, i = r !== null ? r.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            var c = s.create;
            s.destroy = c();
            {
              var d = s.destroy;
              if (d !== void 0 && typeof d != "function") {
                var v = void 0;
                d === null ? v = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof d.then == "function" ? v = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : v = " You returned: " + d, E("An effect function must not return anything besides a function, which is used for clean-up.%s", v);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function q1(e) {
      var t = e.updateQueue, r = t !== null ? t.lastEffect : null;
      if (r !== null) {
        var i = r.next, u = i;
        do {
          var s = u, c = s.next, d = s.tag;
          (d & Vc) !== Tm && (d & $s) !== Tm && (rE(e, u), Nb(e, u)), u = c;
        } while (u !== i);
      }
    }
    function Q1(e, t, r, i) {
      switch (r.tag) {
        case le:
        case J:
        case Re:
        case st: {
          Y1(Ys | $s, r), q1(r);
          return;
        }
        case Z: {
          var u = r.stateNode;
          if (r.flags & Ve)
            if (t === null)
              r.type === r.elementType && !Lo && (u.props !== r.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", re(r.type) || "instance"), u.state !== r.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", re(r.type) || "instance")), u.componentDidMount();
            else {
              var s = r.elementType === r.type ? t.memoizedProps : ti(r.type, t.memoizedProps), c = t.memoizedState;
              r.type === r.elementType && !Lo && (u.props !== r.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", re(r.type) || "instance"), u.state !== r.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", re(r.type) || "instance")), u.componentDidUpdate(s, c, u.__reactInternalSnapshotBeforeUpdate);
            }
          var d = r.updateQueue;
          d !== null && (r.type === r.elementType && !Lo && (u.props !== r.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", re(r.type) || "instance"), u.state !== r.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", re(r.type) || "instance")), w0(r, d, u));
          return;
        }
        case ce: {
          var v = r.updateQueue;
          if (v !== null) {
            var g = null;
            if (r.child !== null)
              switch (r.child.tag) {
                case he:
                  g = r.child.stateNode;
                  break;
                case Z:
                  g = r.child.stateNode;
                  break;
              }
            w0(r, v, g);
          }
          return;
        }
        case he: {
          var S = r.stateNode;
          if (t === null && r.flags & Ve) {
            var O = r.type, b = r.memoizedProps;
            FC(S, O, b);
          }
          return;
        }
        case We:
          return;
        case xe:
          return;
        case we: {
          {
            var L = r.memoizedProps;
            L.onCommit;
            var W = L.onRender;
            r.stateNode.effectDuration;
            var te = d1();
            typeof W == "function" && W(r.memoizedProps.id, t === null ? "mount" : "update", r.actualDuration, r.treeBaseDuration, r.actualStartTime, te, e.memoizedInteractions);
          }
          return;
        }
        case ee: {
          nb(e, r);
          return;
        }
        case ut:
        case $e:
        case ot:
        case Ce:
        case Ze:
        case Rt:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function PS(e, t) {
      for (var r = e; ; ) {
        if (r.tag === he) {
          var i = r.stateNode;
          t ? QC(i) : XC(r.stateNode, r.memoizedProps);
        } else if (r.tag === We) {
          var u = r.stateNode;
          t ? GC(u) : KC(u, r.memoizedProps);
        } else if (!((r.tag === Ze || r.tag === Rt) && r.memoizedState !== null && r !== e)) {
          if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
        }
        if (r === e)
          return;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    function G1(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode, i;
        switch (e.tag) {
          case he:
            i = r;
            break;
          default:
            i = r;
        }
        typeof t == "function" ? t(i) : (t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", re(e.type)), t.current = i);
      }
    }
    function X1(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function FS(e, t, r) {
      switch (xR(t), t.tag) {
        case le:
        case J:
        case ye:
        case Re:
        case st: {
          var i = t.updateQueue;
          if (i !== null) {
            var u = i.lastEffect;
            if (u !== null) {
              var s = u.next, c = s;
              do {
                var d = c, v = d.destroy, g = d.tag;
                v !== void 0 && ((g & Vc) !== Tm ? rE(t, c) : I1(t, v)), c = c.next;
              } while (c !== s);
            }
          }
          return;
        }
        case Z: {
          jS(t);
          var S = t.stateNode;
          typeof S.componentWillUnmount == "function" && B1(t, S);
          return;
        }
        case he: {
          jS(t);
          return;
        }
        case xe: {
          IS(e, t);
          return;
        }
        case ot:
          return;
        case St:
          return;
        case Ce:
          return;
      }
    }
    function K1(e, t, r) {
      for (var i = t; ; ) {
        if (FS(e, i), i.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        i.tag !== xe) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function HS(e) {
      e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null, e._debugOwner = null;
    }
    function Z1(e) {
      for (var t = e.return; t !== null; ) {
        if (VS(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function VS(e) {
      return e.tag === he || e.tag === ce || e.tag === xe;
    }
    function J1(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || VS(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== he && t.tag !== We && t.tag !== St; ) {
            if (t.flags & Je || t.child === null || t.tag === xe)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Je))
            return t.stateNode;
        }
    }
    function BS(e) {
      var t = Z1(e), r, i, u = t.stateNode;
      switch (t.tag) {
        case he:
          r = u, i = !1;
          break;
        case ce:
          r = u.containerInfo, i = !0;
          break;
        case xe:
          r = u.containerInfo, i = !0;
          break;
        case ot:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.flags & Un && (Fg(r), t.flags &= ~Un);
      var s = J1(e);
      i ? cy(e, s, r) : dy(e, s, r);
    }
    function cy(e, t, r) {
      var i = e.tag, u = i === he || i === We;
      if (u || $) {
        var s = u ? e.stateNode : e.stateNode.instance;
        t ? $C(r, s, t) : IC(r, s);
      } else if (i !== xe) {
        var c = e.child;
        if (c !== null) {
          cy(c, t, r);
          for (var d = c.sibling; d !== null; )
            cy(d, t, r), d = d.sibling;
        }
      }
    }
    function dy(e, t, r) {
      var i = e.tag, u = i === he || i === We;
      if (u || $) {
        var s = u ? e.stateNode : e.stateNode.instance;
        t ? WC(r, s, t) : BC(r, s);
      } else if (i !== xe) {
        var c = e.child;
        if (c !== null) {
          dy(c, t, r);
          for (var d = c.sibling; d !== null; )
            dy(d, t, r), d = d.sibling;
        }
      }
    }
    function IS(e, t, r) {
      for (var i = t, u = !1, s, c; ; ) {
        if (!u) {
          var d = i.return;
          e:
            for (; ; ) {
              if (d === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var v = d.stateNode;
              switch (d.tag) {
                case he:
                  s = v, c = !1;
                  break e;
                case ce:
                  s = v.containerInfo, c = !0;
                  break e;
                case xe:
                  s = v.containerInfo, c = !0;
                  break e;
              }
              d = d.return;
            }
          u = !0;
        }
        if (i.tag === he || i.tag === We)
          K1(e, i), c ? qC(s, i.stateNode) : YC(s, i.stateNode);
        else if (i.tag === xe) {
          if (i.child !== null) {
            s = i.stateNode.containerInfo, c = !0, i.child.return = i, i = i.child;
            continue;
          }
        } else if (FS(e, i), i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return, i.tag === xe && (u = !1);
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function eb(e, t, r) {
      IS(e, t);
      var i = t.alternate;
      HS(t), i !== null && HS(i);
    }
    function py(e, t) {
      switch (t.tag) {
        case le:
        case J:
        case ye:
        case Re:
        case st: {
          $1(Ys | $s, t);
          return;
        }
        case Z:
          return;
        case he: {
          var r = t.stateNode;
          if (r != null) {
            var i = t.memoizedProps, u = e !== null ? e.memoizedProps : i, s = t.type, c = t.updateQueue;
            t.updateQueue = null, c !== null && HC(r, c, s, u, i);
          }
          return;
        }
        case We: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var d = t.stateNode, v = t.memoizedProps, g = e !== null ? e.memoizedProps : v;
          VC(d, g, v);
          return;
        }
        case ce: {
          {
            var S = t.stateNode;
            S.hydrate && (S.hydrate = !1, iR(S.containerInfo));
          }
          return;
        }
        case we:
          return;
        case ee: {
          tb(t), WS(t);
          return;
        }
        case ut: {
          WS(t);
          return;
        }
        case $e:
          return;
        case ot:
          break;
        case Ce:
          break;
        case Ze:
        case Rt: {
          var O = t.memoizedState, b = O !== null;
          PS(t, b);
          return;
        }
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function tb(e) {
      var t = e.memoizedState;
      if (t !== null) {
        Sb();
        {
          var r = e.child;
          PS(r, !0);
        }
      }
    }
    function nb(e, t) {
      var r = t.memoizedState;
      if (r === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && lR(s);
          }
        }
      }
    }
    function WS(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        r === null && (r = e.stateNode = new H1()), t.forEach(function(i) {
          var u = Hb.bind(null, e, i);
          r.has(i) || (i.__reactDoNotTraceInteractions !== !0 && (u = z.unstable_wrap(u)), r.add(i), i.then(u, u));
        });
      }
    }
    function rb(e, t) {
      if (e !== null) {
        var r = e.memoizedState;
        if (r === null || r.dehydrated !== null) {
          var i = t.memoizedState;
          return i !== null && i.dehydrated === null;
        }
      }
      return !1;
    }
    function ab(e) {
      Fg(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Zc = Symbol.for;
      Zc("selector.component"), Zc("selector.has_pseudo_class"), Zc("selector.role"), Zc("selector.test_id"), Zc("selector.text");
    }
    var ib = [];
    function lb() {
      ib.forEach(function(e) {
        return e();
      });
    }
    var ub = Math.ceil, vy = nt.ReactCurrentDispatcher, hy = nt.ReactCurrentOwner, my = nt.IsSomeRendererActing, hn = (
      /*             */
      0
    ), Tv = (
      /*               */
      1
    ), ob = (
      /*                 */
      2
    ), yy = (
      /*         */
      4
    ), gy = (
      /*       */
      8
    ), ra = (
      /*                */
      16
    ), Yi = (
      /*                */
      32
    ), $S = (
      /*       */
      64
    ), kl = 0, wv = 1, _v = 2, xv = 3, kv = 4, Sy = 5, Be = hn, kr = null, mn = null, Dr = H, qi = H, Ey = vu(H), or = kl, Dv = null, Ao = H, Ov = H, Uo = H, Mv = H, Cy = null, Ry = 0, YS = 500, qS = 1 / 0, sb = 500;
    function Ks() {
      qS = mr() + sb;
    }
    function QS() {
      return qS;
    }
    var Se = null, Nv = !1, by = null, Zs = null, Dl = !1, Js = null, Jc = Gh, Ty = H, wy = [], _y = [], Ol = null, fb = 50, ed = 0, xy = null, cb = 50, Lv = 0, zo = null, td = Xt, Ml = H, Av = H, ky = !1, nd = null, Uv = !1;
    function db() {
      return kr;
    }
    function aa() {
      return (Be & (ra | Yi)) !== hn ? mr() : (td !== Xt || (td = mr()), td);
    }
    function Cu(e) {
      var t = e.mode;
      if ((t & Br) === an)
        return vt;
      if ((t & wo) === an)
        return Hs() === xa ? vt : Qa;
      Ml === H && (Ml = Ao);
      var r = jR() !== zR;
      if (r)
        return Av !== H && (Av = Cy !== null ? Cy.pendingLanes : H), $d(Ml, Av);
      var i = Hs(), u;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (Be & yy) !== hn && i === bo
      )
        u = iu(Zl, Ml);
      else {
        var s = Gf(i);
        u = iu(s, Ml);
      }
      return u;
    }
    function pb(e) {
      var t = e.mode;
      return (t & Br) === an ? vt : (t & wo) === an ? Hs() === xa ? vt : Qa : (Ml === H && (Ml = Ao), Zf(Ml));
    }
    function gr(e, t, r) {
      Bb(), Yb(e);
      var i = zv(e, t);
      if (i === null)
        return Wb(e), null;
      uu(i, t, r), i === kr && (Uo = xt(Uo, t), or === kv && ef(i, Dr));
      var u = Hs();
      t === vt ? /* Check if we're inside unbatchedUpdates */ (Be & gy) !== hn && // Check if we're not already rendering
      (Be & (ra | Yi)) === hn ? (bu(i, t), Dy(i)) : (Ma(i, r), bu(i, t), Be === hn && (Ks(), Ii())) : ((Be & yy) !== hn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (u === bo || u === xa) && (Ol === null ? Ol = /* @__PURE__ */ new Set([i]) : Ol.add(i)), Ma(i, r), bu(i, t)), Cy = i;
    }
    function zv(e, t) {
      e.lanes = xt(e.lanes, t);
      var r = e.alternate;
      r !== null && (r.lanes = xt(r.lanes, t)), r === null && (e.flags & (Je | zr)) !== zt && iE(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = xt(u.childLanes, t), r = u.alternate, r !== null ? r.childLanes = xt(r.childLanes, t) : (u.flags & (Je | zr)) !== zt && iE(e), i = u, u = u.return;
      if (i.tag === ce) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    function Ma(e, t) {
      var r = e.callbackNode;
      hh(e, t);
      var i = ao(e, e === kr ? Dr : H), u = pr();
      if (i === H) {
        r !== null && (d0(r), e.callbackNode = null, e.callbackPriority = qa);
        return;
      }
      if (r !== null) {
        var s = e.callbackPriority;
        if (s === u)
          return;
        d0(r);
      }
      var c;
      if (u === xi)
        c = LR(Dy.bind(null, e));
      else if (u === Ju)
        c = hu(xa, Dy.bind(null, e));
      else {
        var d = ys(u);
        c = hu(d, GS.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = c;
    }
    function GS(e) {
      if (td = Xt, Ml = H, Av = H, (Be & (ra | Yi)) !== hn)
        throw Error("Should not already be working.");
      var t = e.callbackNode, r = Qi();
      if (r && e.callbackNode !== t)
        return null;
      var i = ao(e, e === kr ? Dr : H);
      if (i === H)
        return null;
      var u = wb(e, i);
      if (Pn(Ao, Uo))
        tf(e, H);
      else if (u !== kl) {
        if (u === _v && (Be |= $S, e.hydrate && (e.hydrate = !1, Hh(e.containerInfo)), i = Pr(e), i !== H && (u = rd(e, i))), u === wv) {
          var s = Dv;
          throw tf(e, H), ef(e, i), Ma(e, mr()), s;
        }
        var c = e.current.alternate;
        e.finishedWork = c, e.finishedLanes = i, vb(e, u, i);
      }
      return Ma(e, mr()), e.callbackNode === t ? GS.bind(null, e) : null;
    }
    function vb(e, t, r) {
      switch (t) {
        case kl:
        case wv:
          throw Error("Root did not complete. This is a bug in React.");
        case _v: {
          jo(e);
          break;
        }
        case xv: {
          if (ef(e, r), Kf(r) && // do not delay if we're inside an act() scope
          !Xb()) {
            var i = Ry + YS - mr();
            if (i > 10) {
              var u = ao(e, H);
              if (u !== H)
                break;
              var s = e.suspendedLanes;
              if (!Ni(s, r)) {
                aa(), ec(e, s);
                break;
              }
              e.timeoutHandle = Pg(jo.bind(null, e), i);
              break;
            }
          }
          jo(e);
          break;
        }
        case kv: {
          if (ef(e, r), Wd(r))
            break;
          {
            var c = ph(e, r), d = c, v = mr() - d, g = Vb(v) - v;
            if (g > 10) {
              e.timeoutHandle = Pg(jo.bind(null, e), g);
              break;
            }
          }
          jo(e);
          break;
        }
        case Sy: {
          jo(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function ef(e, t) {
      t = lu(t, Mv), t = lu(t, Uo), Gd(e, t);
    }
    function Dy(e) {
      if ((Be & (ra | Yi)) !== hn)
        throw Error("Should not already be working.");
      Qi();
      var t, r;
      if (e === kr && Pn(e.expiredLanes, Dr) ? (t = Dr, r = rd(e, t), Pn(Ao, Uo) && (t = ao(e, t), r = rd(e, t))) : (t = ao(e, H), r = rd(e, t)), e.tag !== Yh && r === _v && (Be |= $S, e.hydrate && (e.hydrate = !1, Hh(e.containerInfo)), t = Pr(e), t !== H && (r = rd(e, t))), r === wv) {
        var i = Dv;
        throw tf(e, H), ef(e, t), Ma(e, mr()), i;
      }
      var u = e.current.alternate;
      return e.finishedWork = u, e.finishedLanes = t, jo(e), Ma(e, mr()), null;
    }
    function hb() {
      if ((Be & (Tv | ra | Yi)) !== hn) {
        (Be & ra) !== hn && E("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      mb(), Qi();
    }
    function mb() {
      if (Ol !== null) {
        var e = Ol;
        Ol = null, e.forEach(function(t) {
          io(t), Ma(t, mr());
        });
      }
      Ii();
    }
    function XS(e, t) {
      var r = Be;
      Be |= Tv;
      try {
        return e(t);
      } finally {
        Be = r, Be === hn && (Ks(), Ii());
      }
    }
    function yb(e, t) {
      var r = Be;
      Be |= ob;
      try {
        return e(t);
      } finally {
        Be = r, Be === hn && (Ks(), Ii());
      }
    }
    function gb(e, t, r, i, u) {
      var s = Be;
      Be |= yy;
      try {
        return To(bo, e.bind(null, t, r, i, u));
      } finally {
        Be = s, Be === hn && (Ks(), Ii());
      }
    }
    function KS(e, t) {
      var r = Be;
      Be &= ~Tv, Be |= gy;
      try {
        return e(t);
      } finally {
        Be = r, Be === hn && (Ks(), Ii());
      }
    }
    function Oy(e, t) {
      var r = Be;
      if ((r & (ra | Yi)) !== hn)
        return E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      Be |= Tv;
      try {
        return e ? To(xa, e.bind(null, t)) : void 0;
      } finally {
        Be = r, Ii();
      }
    }
    function jv(e, t) {
      hr(Ey, qi, e), qi = xt(qi, t), Ao = xt(Ao, t);
    }
    function My(e) {
      qi = Ey.current, vr(Ey, e);
    }
    function tf(e, t) {
      e.finishedWork = null, e.finishedLanes = H;
      var r = e.timeoutHandle;
      if (r !== Fh && (e.timeoutHandle = Fh, PC(r)), mn !== null)
        for (var i = mn.return; i !== null; )
          LS(i), i = i.return;
      kr = e, mn = Po(e.current, null), Dr = qi = Ao = t, or = kl, Dv = null, Ov = H, Uo = H, Mv = H, zo = null, ei.discardPendingWarnings();
    }
    function ZS(e, t) {
      do {
        var r = mn;
        try {
          if (Ip(), $0(), Nn(), hy.current = null, r === null || r.return === null) {
            or = wv, Dv = t, mn = null;
            return;
          }
          M && r.mode & na && Ev(r, !0), F1(e, r.return, r, t, Dr), nE(r);
        } catch (i) {
          t = i, mn === r && r !== null ? (r = r.return, mn = r) : r = mn;
          continue;
        }
        return;
      } while (!0);
    }
    function JS() {
      var e = vy.current;
      return vy.current = yv, e === null ? yv : e;
    }
    function eE(e) {
      vy.current = e;
    }
    function Pv(e) {
      {
        var t = z.__interactionsRef.current;
        return z.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function Fv(e) {
      z.__interactionsRef.current = e;
    }
    function Sb() {
      Ry = mr();
    }
    function Ny(e) {
      Ov = xt(e, Ov);
    }
    function Eb() {
      or === kl && (or = xv);
    }
    function Cb() {
      (or === kl || or === xv) && (or = kv), kr !== null && (Xf(Ov) || Xf(Uo)) && ef(kr, Dr);
    }
    function Rb() {
      or !== Sy && (or = _v);
    }
    function bb() {
      return or === kl;
    }
    function rd(e, t) {
      var r = Be;
      Be |= ra;
      var i = JS();
      (kr !== e || Dr !== t) && (tf(e, t), cE(e, t));
      var u = Pv(e);
      do
        try {
          Tb();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      if (Ip(), Fv(u), Be = r, eE(i), mn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return kr = null, Dr = H, or;
    }
    function Tb() {
      for (; mn !== null; )
        tE(mn);
    }
    function wb(e, t) {
      var r = Be;
      Be |= ra;
      var i = JS();
      (kr !== e || Dr !== t) && (Ks(), tf(e, t), cE(e, t));
      var u = Pv(e);
      do
        try {
          _b();
          break;
        } catch (s) {
          ZS(e, s);
        }
      while (!0);
      return Ip(), Fv(u), eE(i), Be = r, mn !== null ? kl : (kr = null, Dr = H, or);
    }
    function _b() {
      for (; mn !== null && !MR(); )
        tE(mn);
    }
    function tE(e) {
      var t = e.alternate;
      on(e);
      var r;
      (e.mode & na) !== an ? (Gm(e), r = Ay(t, e, qi), Ev(e, !0)) : r = Ay(t, e, qi), Nn(), e.memoizedProps = e.pendingProps, r === null ? nE(e) : mn = r, hy.current = null;
    }
    function nE(e) {
      var t = e;
      do {
        var r = t.alternate, i = t.return;
        if ((t.flags & Bu) === zt) {
          on(t);
          var u = void 0;
          if ((t.mode & na) === an ? u = NS(r, t, qi) : (Gm(t), u = NS(r, t, qi), Ev(t, !1)), Nn(), u !== null) {
            mn = u;
            return;
          }
          if (xb(t), i !== null && // Do not append effects to parents if a sibling failed to complete
          (i.flags & Bu) === zt) {
            i.firstEffect === null && (i.firstEffect = t.firstEffect), t.lastEffect !== null && (i.lastEffect !== null && (i.lastEffect.nextEffect = t.firstEffect), i.lastEffect = t.lastEffect);
            var s = t.flags;
            s > ir && (i.lastEffect !== null ? i.lastEffect.nextEffect = t : i.firstEffect = t, i.lastEffect = t);
          }
        } else {
          var c = U1(t);
          if (c !== null) {
            c.flags &= ll, mn = c;
            return;
          }
          if ((t.mode & na) !== an) {
            Ev(t, !1);
            for (var d = t.actualDuration, v = t.child; v !== null; )
              d += v.actualDuration, v = v.sibling;
            t.actualDuration = d;
          }
          i !== null && (i.firstEffect = i.lastEffect = null, i.flags |= Bu);
        }
        var g = t.sibling;
        if (g !== null) {
          mn = g;
          return;
        }
        t = i, mn = t;
      } while (t !== null);
      or === kl && (or = Sy);
    }
    function xb(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Rt || e.tag === Ze) && e.memoizedState !== null && !Pn(qi, Jr) && (e.mode & wo) !== H)
      ) {
        var t = H;
        if ((e.mode & na) !== an) {
          for (var r = e.actualDuration, i = e.selfBaseDuration, u = e.alternate === null || e.child !== e.alternate.child, s = e.child; s !== null; )
            t = xt(t, xt(s.lanes, s.childLanes)), u && (r += s.actualDuration), i += s.treeBaseDuration, s = s.sibling;
          var c = e.tag === ee && e.memoizedState !== null;
          if (c) {
            var d = e.child;
            d !== null && (i -= d.treeBaseDuration);
          }
          e.actualDuration = r, e.treeBaseDuration = i;
        } else
          for (var v = e.child; v !== null; )
            t = xt(t, xt(v.lanes, v.childLanes)), v = v.sibling;
        e.childLanes = t;
      }
    }
    function jo(e) {
      var t = Hs();
      return To(xa, kb.bind(null, e, t)), null;
    }
    function kb(e, t) {
      do
        Qi();
      while (Js !== null);
      if (Ib(), (Be & (ra | Yi)) !== hn)
        throw Error("Should not already be working.");
      var r = e.finishedWork, i = e.finishedLanes;
      if (r === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = H, r === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var u = xt(r.lanes, r.childLanes);
      tc(e, u), Ol !== null && !yh(u) && Ol.has(e) && Ol.delete(e), e === kr && (kr = null, mn = null, Dr = H);
      var s;
      if (r.flags > ir ? r.lastEffect !== null ? (r.lastEffect.nextEffect = r, s = r.firstEffect) : s = r : s = r.firstEffect, s !== null) {
        var c = Be;
        Be |= Yi;
        var d = Pv(e);
        hy.current = null, nd = MC(e.containerInfo), Uv = !1, Se = s;
        do
          if (rr(null, Db, null), wr()) {
            if (Se === null)
              throw Error("Should be working on an effect.");
            var v = ar();
            Ru(Se, v), Se = Se.nextEffect;
          }
        while (Se !== null);
        nd = null, uS(), Se = s;
        do
          if (rr(null, Ob, null, e, t), wr()) {
            if (Se === null)
              throw Error("Should be working on an effect.");
            var g = ar();
            Ru(Se, g), Se = Se.nextEffect;
          }
        while (Se !== null);
        NC(e.containerInfo), e.current = r, Se = s;
        do
          if (rr(null, Mb, null, e, i), wr()) {
            if (Se === null)
              throw Error("Should be working on an effect.");
            var S = ar();
            Ru(Se, S), Se = Se.nextEffect;
          }
        while (Se !== null);
        Se = null, NR(), Fv(d), Be = c;
      } else
        e.current = r, uS();
      var O = Dl;
      if (Dl)
        Dl = !1, Js = e, Ty = i, Jc = t;
      else
        for (Se = s; Se !== null; ) {
          var b = Se.nextEffect;
          Se.nextEffect = null, Se.flags & Qt && pE(Se), Se = b;
        }
      if (u = e.pendingLanes, u !== H) {
        if (zo !== null) {
          var L = zo;
          zo = null;
          for (var W = 0; W < L.length; W++)
            fE(e, L[W], e.memoizedInteractions);
        }
        bu(e, u);
      } else
        Zs = null;
      if (O || dE(e, i), u === vt ? e === xy ? ed++ : (ed = 0, xy = e) : ed = 0, _R(r.stateNode, t), lb(), Ma(e, mr()), Nv) {
        Nv = !1;
        var te = by;
        throw by = null, te;
      }
      return (Be & gy) !== hn || Ii(), null;
    }
    function Db() {
      for (; Se !== null; ) {
        var e = Se.alternate;
        !Uv && nd !== null && ((Se.flags & Qt) !== zt ? Pd(Se, nd) && (Uv = !0) : Se.tag === ee && rb(e, Se) && Pd(Se, nd) && (Uv = !0));
        var t = Se.flags;
        (t & ma) !== zt && (on(Se), W1(e, Se), Nn()), (t & Yl) !== zt && (Dl || (Dl = !0, hu(wl, function() {
          return Qi(), null;
        }))), Se = Se.nextEffect;
      }
    }
    function Ob(e, t) {
      for (; Se !== null; ) {
        on(Se);
        var r = Se.flags;
        if (r & Un && ab(Se), r & zn) {
          var i = Se.alternate;
          i !== null && X1(i);
        }
        var u = r & (Je | Ve | Qt | zr);
        switch (u) {
          case Je: {
            BS(Se), Se.flags &= ~Je;
            break;
          }
          case Ci: {
            BS(Se), Se.flags &= ~Je;
            var s = Se.alternate;
            py(s, Se);
            break;
          }
          case zr: {
            Se.flags &= ~zr;
            break;
          }
          case Ud: {
            Se.flags &= ~zr;
            var c = Se.alternate;
            py(c, Se);
            break;
          }
          case Ve: {
            var d = Se.alternate;
            py(d, Se);
            break;
          }
          case Qt: {
            eb(e, Se);
            break;
          }
        }
        Nn(), Se = Se.nextEffect;
      }
    }
    function Mb(e, t) {
      for (; Se !== null; ) {
        on(Se);
        var r = Se.flags;
        if (r & (Ve | Ri)) {
          var i = Se.alternate;
          Q1(e, i, Se);
        }
        r & zn && G1(Se), Nn(), Se = Se.nextEffect;
      }
    }
    function Qi() {
      if (Jc !== Gh) {
        var e = Jc > wl ? wl : Jc;
        return Jc = Gh, To(e, Ab);
      }
      return !1;
    }
    function Nb(e, t) {
      wy.push(t, e), Dl || (Dl = !0, hu(wl, function() {
        return Qi(), null;
      }));
    }
    function rE(e, t) {
      _y.push(t, e);
      {
        e.flags |= ql;
        var r = e.alternate;
        r !== null && (r.flags |= ql);
      }
      Dl || (Dl = !0, hu(wl, function() {
        return Qi(), null;
      }));
    }
    function Lb(e) {
      var t = e.create;
      e.destroy = t();
    }
    function Ab() {
      if (Js === null)
        return !1;
      var e = Js, t = Ty;
      if (Js = null, Ty = H, (Be & (ra | Yi)) !== hn)
        throw Error("Cannot flush passive effects while already rendering.");
      ky = !0;
      var r = Be;
      Be |= Yi;
      var i = Pv(e), u = _y;
      _y = [];
      for (var s = 0; s < u.length; s += 2) {
        var c = u[s], d = u[s + 1], v = c.destroy;
        c.destroy = void 0;
        {
          d.flags &= ~ql;
          var g = d.alternate;
          g !== null && (g.flags &= ~ql);
        }
        if (typeof v == "function") {
          if (on(d), rr(null, v, null), wr()) {
            if (d === null)
              throw Error("Should be working on an effect.");
            var S = ar();
            Ru(d, S);
          }
          Nn();
        }
      }
      var O = wy;
      wy = [];
      for (var b = 0; b < O.length; b += 2) {
        var L = O[b], W = O[b + 1];
        {
          if (on(W), rr(null, Lb, null, L), wr()) {
            if (W === null)
              throw Error("Should be working on an effect.");
            var te = ar();
            Ru(W, te);
          }
          Nn();
        }
      }
      for (var Ae = e.current.firstEffect; Ae !== null; ) {
        var lt = Ae.nextEffect;
        Ae.nextEffect = null, Ae.flags & Qt && pE(Ae), Ae = lt;
      }
      return Fv(i), dE(e, t), ky = !1, Be = r, Ii(), Lv = Js === null ? 0 : Lv + 1, !0;
    }
    function Ly(e) {
      return Zs !== null && Zs.has(e);
    }
    function Ub(e) {
      Zs === null ? Zs = /* @__PURE__ */ new Set([e]) : Zs.add(e);
    }
    function zb(e) {
      Nv || (Nv = !0, by = e);
    }
    var jb = zb;
    function aE(e, t, r) {
      var i = sy(r, t), u = AS(e, i, vt);
      yu(e, u);
      var s = aa(), c = zv(e, vt);
      c !== null && (uu(c, vt, s), Ma(c, s), bu(c, vt));
    }
    function Ru(e, t) {
      if (e.tag === ce) {
        aE(e, e, t);
        return;
      }
      for (var r = e.return; r !== null; ) {
        if (r.tag === ce) {
          aE(r, e, t);
          return;
        } else if (r.tag === Z) {
          var i = r.type, u = r.stateNode;
          if (typeof i.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && !Ly(u)) {
            var s = sy(t, e), c = US(r, s, vt);
            yu(r, c);
            var d = aa(), v = zv(r, vt);
            if (v !== null)
              uu(v, vt, d), Ma(v, d), bu(v, vt);
            else if (typeof u.componentDidCatch == "function" && !Ly(u))
              try {
                u.componentDidCatch(t, s);
              } catch {
              }
            return;
          }
        }
        r = r.return;
      }
    }
    function Pb(e, t, r) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = aa();
      ec(e, r), kr === e && Ni(Dr, r) && (or === kv || or === xv && Kf(Dr) && mr() - Ry < YS ? tf(e, H) : Mv = xt(Mv, r)), Ma(e, u), bu(e, r);
    }
    function Fb(e, t) {
      t === dn && (t = pb(e));
      var r = aa(), i = zv(e, t);
      i !== null && (uu(i, t, r), Ma(i, r), bu(i, t));
    }
    function Hb(e, t) {
      var r = dn, i;
      i = e.stateNode, i !== null && i.delete(t), Fb(e, r);
    }
    function Vb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : ub(e / 1960) * 1960;
    }
    function Bb() {
      if (ed > fb)
        throw ed = 0, xy = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Lv > cb && (Lv = 0, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Ib() {
      ei.flushLegacyContextWarning(), ei.flushPendingUnsafeLifecycleWarnings();
    }
    var Hv = null;
    function iE(e) {
      {
        if ((Be & ra) !== hn || !(e.mode & (Br | wo)))
          return;
        var t = e.tag;
        if (t !== je && t !== ce && t !== Z && t !== le && t !== J && t !== ye && t !== Re && t !== st)
          return;
        var r = re(e.type) || "ReactComponent";
        if (Hv !== null) {
          if (Hv.has(r))
            return;
          Hv.add(r);
        } else
          Hv = /* @__PURE__ */ new Set([r]);
        var i = Mn;
        try {
          on(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? on(e) : Nn();
        }
      }
    }
    var Vv = null;
    function Wb(e) {
      {
        var t = e.tag;
        if (t !== ce && t !== Z && t !== le && t !== J && t !== ye && t !== Re && t !== st || (e.flags & ql) !== zt)
          return;
        var r = re(e.type) || "ReactComponent";
        if (Vv !== null) {
          if (Vv.has(r))
            return;
          Vv.add(r);
        } else
          Vv = /* @__PURE__ */ new Set([r]);
        if (!ky) {
          var i = Mn;
          try {
            on(e), E("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", t === Z ? "the componentWillUnmount method" : "a useEffect cleanup function");
          } finally {
            i ? on(e) : Nn();
          }
        }
      }
    }
    var Ay;
    {
      var $b = null;
      Ay = function(e, t, r) {
        var i = yE($b, t);
        try {
          return xS(e, t, r);
        } catch (s) {
          if (s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ip(), $0(), LS(t), yE(t, i), t.mode & na && Gm(t), rr(null, xS, null, e, t, r), wr()) {
            var u = ar();
            throw u;
          } else
            throw s;
        }
      };
    }
    var lE = !1, Uy;
    Uy = /* @__PURE__ */ new Set();
    function Yb(e) {
      if (da && (Be & ra) !== hn && !c1())
        switch (e.tag) {
          case le:
          case J:
          case Re: {
            var t = mn && re(mn.type) || "Unknown", r = t;
            if (!Uy.has(r)) {
              Uy.add(r);
              var i = re(e.type) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case Z: {
            lE || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), lE = !0);
            break;
          }
        }
    }
    var Bv = {
      current: !1
    };
    function uE(e) {
      if (my.current === !0 && Bv.current !== !0) {
        var t = Mn;
        try {
          on(e), E(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);`);
        } finally {
          t ? on(e) : Nn();
        }
      }
    }
    function oE(e) {
      (e.mode & vn) !== an && my.current === !1 && Bv.current === !1 && E(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, re(e.type));
    }
    function qb(e) {
      if (Be === hn && my.current === !1 && Bv.current === !1) {
        var t = Mn;
        try {
          on(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, re(e.type));
        } finally {
          t ? on(e) : Nn();
        }
      }
    }
    var Qb = qb, sE = !1;
    function Gb(e) {
      sE === !1 && fe.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Br || e.mode & wo) && (sE = !0, E(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function zy(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function Iv(e) {
      zo === null ? zo = [e] : zo.push(e);
    }
    function fE(e, t, r) {
      if (r.size > 0) {
        var i = e.pendingInteractionMap, u = i.get(t);
        u != null ? r.forEach(function(d) {
          u.has(d) || d.__count++, u.add(d);
        }) : (i.set(t, new Set(r)), r.forEach(function(d) {
          d.__count++;
        }));
        var s = z.__subscriberRef.current;
        if (s !== null) {
          var c = zy(e, t);
          s.onWorkScheduled(r, c);
        }
      }
    }
    function bu(e, t) {
      fE(e, t, z.__interactionsRef.current);
    }
    function cE(e, t) {
      var r = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(s, c) {
        Pn(t, c) && s.forEach(function(d) {
          return r.add(d);
        });
      }), e.memoizedInteractions = r, r.size > 0) {
        var i = z.__subscriberRef.current;
        if (i !== null) {
          var u = zy(e, t);
          try {
            i.onWorkStarted(r, u);
          } catch (s) {
            hu(xa, function() {
              throw s;
            });
          }
        }
      }
    }
    function dE(e, t) {
      var r = e.pendingLanes, i;
      try {
        if (i = z.__subscriberRef.current, i !== null && e.memoizedInteractions.size > 0) {
          var u = zy(e, t);
          i.onWorkStopped(e.memoizedInteractions, u);
        }
      } catch (c) {
        hu(xa, function() {
          throw c;
        });
      } finally {
        var s = e.pendingInteractionMap;
        s.forEach(function(c, d) {
          Pn(r, d) || (s.delete(d), c.forEach(function(v) {
            if (v.__count--, i !== null && v.__count === 0)
              try {
                i.onInteractionScheduledWorkCompleted(v);
              } catch (g) {
                hu(xa, function() {
                  throw g;
                });
              }
          }));
        });
      }
    }
    function Xb() {
      return Kb > 0;
    }
    var Kb = 0;
    function pE(e) {
      e.sibling = null, e.stateNode = null;
    }
    var Na = null, nf = null, Zb = function(e) {
      Na = e;
    };
    function rf(e) {
      {
        if (Na === null)
          return e;
        var t = Na(e);
        return t === void 0 ? e : t.current;
      }
    }
    function jy(e) {
      return rf(e);
    }
    function Py(e) {
      {
        if (Na === null)
          return e;
        var t = Na(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var r = rf(e.render);
            if (e.render !== r) {
              var i = {
                $$typeof: Cr,
                render: r
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function vE(e, t) {
      {
        if (Na === null)
          return !1;
        var r = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case Z: {
            typeof i == "function" && (u = !0);
            break;
          }
          case le: {
            (typeof i == "function" || s === Jt) && (u = !0);
            break;
          }
          case J: {
            (s === Cr || s === Jt) && (u = !0);
            break;
          }
          case ye:
          case Re: {
            (s === qr || s === Jt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var c = Na(r);
          if (c !== void 0 && c === Na(i))
            return !0;
        }
        return !1;
      }
    }
    function hE(e) {
      {
        if (Na === null || typeof WeakSet != "function")
          return;
        nf === null && (nf = /* @__PURE__ */ new WeakSet()), nf.add(e);
      }
    }
    var Jb = function(e, t) {
      {
        if (Na === null)
          return;
        var r = t.staleFamilies, i = t.updatedFamilies;
        Qi(), Oy(function() {
          Fy(e.current, i, r);
        });
      }
    }, eT = function(e, t) {
      {
        if (e.context !== ta)
          return;
        Qi(), Oy(function() {
          ad(t, e, null, null);
        });
      }
    };
    function Fy(e, t, r) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, c = e.tag, d = e.type, v = null;
        switch (c) {
          case le:
          case Re:
          case Z:
            v = d;
            break;
          case J:
            v = d.render;
            break;
        }
        if (Na === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var g = !1, S = !1;
        if (v !== null) {
          var O = Na(v);
          O !== void 0 && (r.has(O) ? S = !0 : t.has(O) && (c === Z ? S = !0 : g = !0));
        }
        nf !== null && (nf.has(e) || i !== null && nf.has(i)) && (S = !0), S && (e._debugNeedsRemount = !0), (S || g) && gr(e, vt, Xt), u !== null && !S && Fy(u, t, r), s !== null && Fy(s, t, r);
      }
    }
    var tT = function(e, t) {
      {
        var r = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return Hy(e.current, i, r), r;
      }
    };
    function Hy(e, t, r) {
      {
        var i = e.child, u = e.sibling, s = e.tag, c = e.type, d = null;
        switch (s) {
          case le:
          case Re:
          case Z:
            d = c;
            break;
          case J:
            d = c.render;
            break;
        }
        var v = !1;
        d !== null && t.has(d) && (v = !0), v ? nT(e, r) : i !== null && Hy(i, t, r), u !== null && Hy(u, t, r);
      }
    }
    function nT(e, t) {
      {
        var r = rT(e, t);
        if (r)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case he:
              t.add(i.stateNode);
              return;
            case xe:
              t.add(i.stateNode.containerInfo);
              return;
            case ce:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function rT(e, t) {
      for (var r = e, i = !1; ; ) {
        if (r.tag === he)
          i = !0, t.add(r.stateNode);
        else if (r.child !== null) {
          r.child.return = r, r = r.child;
          continue;
        }
        if (r === e)
          return i;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === e)
            return i;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
      return !1;
    }
    var Vy;
    {
      Vy = !1;
      try {
        var mE = Object.preventExtensions({});
      } catch {
        Vy = !0;
      }
    }
    var aT = 1;
    function iT(e, t, r, i) {
      this.tag = e, this.key = r, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = zt, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = H, this.childLanes = H, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = aT++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Vy && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ia = function(e, t, r, i) {
      return new iT(e, t, r, i);
    };
    function By(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function lT(e) {
      return typeof e == "function" && !By(e) && e.defaultProps === void 0;
    }
    function uT(e) {
      if (typeof e == "function")
        return By(e) ? Z : le;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Cr)
          return J;
        if (t === qr)
          return ye;
      }
      return je;
    }
    function Po(e, t) {
      var r = e.alternate;
      r === null ? (r = ia(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r._debugID = e._debugID, r._debugSource = e._debugSource, r._debugOwner = e._debugOwner, r._debugHookTypes = e._debugHookTypes, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = zt, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, r.actualDuration = 0, r.actualStartTime = -1), r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (r.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.selfBaseDuration = e.selfBaseDuration, r.treeBaseDuration = e.treeBaseDuration, r._debugNeedsRemount = e._debugNeedsRemount, r.tag) {
        case je:
        case le:
        case Re:
          r.type = rf(e.type);
          break;
        case Z:
          r.type = jy(e.type);
          break;
        case J:
          r.type = Py(e.type);
          break;
      }
      return r;
    }
    function oT(e, t) {
      e.flags &= Je, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var r = e.alternate;
      if (r === null)
        e.childLanes = H, e.lanes = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type;
        var i = r.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = r.selfBaseDuration, e.treeBaseDuration = r.treeBaseDuration;
      }
      return e;
    }
    function sT(e) {
      var t;
      return e === e0 ? t = wo | Br | vn : e === Jg ? t = Br | vn : t = an, bR && (t |= na), ia(ce, null, null, t);
    }
    function Iy(e, t, r, i, u, s) {
      var c = je, d = e;
      if (typeof e == "function")
        By(e) ? (c = Z, d = jy(d)) : d = rf(d);
      else if (typeof e == "string")
        c = he;
      else
        e:
          switch (e) {
            case Vn:
              return Fo(r.children, u, s, t);
            case ae:
              c = De, u |= AR;
              break;
            case ii:
              c = De, u |= vn;
              break;
            case Nr:
              return fT(r, u, s, t);
            case Bn:
              return cT(r, u, s, t);
            case In:
              return dT(r, u, s, t);
            case Oe:
              return $y(r, u, s, t);
            case ft:
              return pT(r, u, s, t);
            case C:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Yr:
                    c = He;
                    break e;
                  case sa:
                    c = ht;
                    break e;
                  case Cr:
                    c = J, d = Py(d);
                    break e;
                  case qr:
                    c = ye;
                    break e;
                  case Jt:
                    c = Ue, d = null;
                    break e;
                  case za:
                    c = st;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var g = i ? re(i.type) : null;
                g && (v += `

Check the render method of \`` + g + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + v);
            }
          }
      var S = ia(c, r, t, u);
      return S.elementType = e, S.type = d, S.lanes = s, S._debugOwner = i, S;
    }
    function Wy(e, t, r) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, c = e.props, d = Iy(u, s, c, i, t, r);
      return d._debugSource = e._source, d._debugOwner = e._owner, d;
    }
    function Fo(e, t, r, i) {
      var u = ia(Zt, e, i, t);
      return u.lanes = r, u;
    }
    function fT(e, t, r, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" as a prop');
      var u = ia(we, e, i, t | na);
      return u.elementType = Nr, u.type = Nr, u.lanes = r, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function cT(e, t, r, i) {
      var u = ia(ee, e, i, t);
      return u.type = Bn, u.elementType = Bn, u.lanes = r, u;
    }
    function dT(e, t, r, i) {
      var u = ia(ut, e, i, t);
      return u.type = In, u.elementType = In, u.lanes = r, u;
    }
    function $y(e, t, r, i) {
      var u = ia(Ze, e, i, t);
      return u.type = Oe, u.elementType = Oe, u.lanes = r, u;
    }
    function pT(e, t, r, i) {
      var u = ia(Rt, e, i, t);
      return u.type = ft, u.elementType = ft, u.lanes = r, u;
    }
    function Yy(e, t, r) {
      var i = ia(We, e, null, t);
      return i.lanes = r, i;
    }
    function vT() {
      var e = ia(he, null, null, an);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function qy(e, t, r) {
      var i = e.children !== null ? e.children : [], u = ia(xe, i, e.key, t);
      return u.lanes = r, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function yE(e, t) {
      return e === null && (e = ia(je, null, null, an)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function hT(e, t, r) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fh, this.context = null, this.pendingContext = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = qa, this.eventTimes = gs(H), this.expirationTimes = gs(Xt), this.pendingLanes = H, this.suspendedLanes = H, this.pingedLanes = H, this.expiredLanes = H, this.mutableReadLanes = H, this.finishedLanes = H, this.entangledLanes = H, this.entanglements = gs(H), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = z.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case Jg:
          this._debugRootType = "createBlockingRoot()";
          break;
        case e0:
          this._debugRootType = "createRoot()";
          break;
        case Yh:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function mT(e, t, r, i) {
      var u = new hT(e, t, r), s = sT(t);
      return u.current = s, s.stateNode = u, nm(s), u;
    }
    function yT(e, t) {
      var r = t._getVersion, i = r(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    function gT(e, t, r) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Pt,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: r
      };
    }
    var Qy, Gy;
    Qy = !1, Gy = {};
    function ST(e) {
      if (!e)
        return ta;
      var t = Ba(e), r = RR(t);
      if (t.tag === Z) {
        var i = t.type;
        if (Vi(i))
          return Kg(t, i, r);
      }
      return r;
    }
    function ET(e, t) {
      {
        var r = Ba(e);
        if (r === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var i = Lf(r);
        if (i === null)
          return null;
        if (i.mode & vn) {
          var u = re(r.type) || "Component";
          if (!Gy[u]) {
            Gy[u] = !0;
            var s = Mn;
            try {
              on(i), r.mode & vn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, u);
            } finally {
              s ? on(s) : Nn();
            }
          }
        }
        return i.stateNode;
      }
    }
    function CT(e, t, r, i) {
      return mT(e, t, r);
    }
    function ad(e, t, r, i) {
      wR(t, e);
      var u = t.current, s = aa();
      typeof jest < "u" && (Gb(u), uE(u));
      var c = Cu(u), d = ST(r);
      t.context === null ? t.context = d : t.pendingContext = d, da && Mn !== null && !Qy && (Qy = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, re(Mn.type) || "Unknown"));
      var v = mu(s, c);
      return v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i), yu(u, v), gr(u, c, s), c;
    }
    function Xy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case he:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function gE(e, t) {
      var r = e.memoizedState;
      r !== null && r.dehydrated !== null && (r.retryLane = Xa(r.retryLane, t));
    }
    function Ky(e, t) {
      gE(e, t);
      var r = e.alternate;
      r && gE(r, t);
    }
    function RT(e) {
      if (e.tag === ee) {
        var t = aa(), r = hl;
        gr(e, r, t), Ky(e, r);
      }
    }
    function bT(e) {
      if (e.tag === ee) {
        var t = aa(), r = hs;
        gr(e, r, t), Ky(e, r);
      }
    }
    function TT(e) {
      if (e.tag === ee) {
        var t = aa(), r = Cu(e);
        gr(e, r, t), Ky(e, r);
      }
    }
    function wT(e, t) {
      try {
        return t();
      } finally {
      }
    }
    function SE(e) {
      var t = Af(e);
      return t === null ? null : t.tag === ot ? t.stateNode.instance : t.stateNode;
    }
    var EE = function(e) {
      return !1;
    };
    function _T(e) {
      return EE(e);
    }
    var CE = null, RE = null, bE = null, TE = null, wE = null, _E = null, xE = null, kE = null;
    {
      var DE = function(e, t, r) {
        var i = t[r], u = Array.isArray(e) ? e.slice() : I({}, e);
        return r + 1 === t.length ? (Array.isArray(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = DE(e[i], t, r + 1), u);
      }, OE = function(e, t) {
        return DE(e, t, 0);
      }, ME = function(e, t, r, i) {
        var u = t[i], s = Array.isArray(e) ? e.slice() : I({}, e);
        if (i + 1 === t.length) {
          var c = r[i];
          s[c] = s[u], Array.isArray(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = ME(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            r,
            i + 1
          );
        return s;
      }, NE = function(e, t, r) {
        if (t.length !== r.length) {
          Xe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < r.length - 1; i++)
            if (t[i] !== r[i]) {
              Xe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ME(e, t, r, 0);
      }, LE = function(e, t, r, i) {
        if (r >= t.length)
          return i;
        var u = t[r], s = Array.isArray(e) ? e.slice() : I({}, e);
        return s[u] = LE(e[u], t, r + 1, i), s;
      }, AE = function(e, t, r) {
        return LE(e, t, 0, r);
      }, Zy = function(e, t) {
        for (var r = e.memoizedState; r !== null && t > 0; )
          r = r.next, t--;
        return r;
      };
      CE = function(e, t, r, i) {
        var u = Zy(e, t);
        if (u !== null) {
          var s = AE(u.memoizedState, r, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = I({}, e.memoizedProps), gr(e, vt, Xt);
        }
      }, RE = function(e, t, r) {
        var i = Zy(e, t);
        if (i !== null) {
          var u = OE(i.memoizedState, r);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = I({}, e.memoizedProps), gr(e, vt, Xt);
        }
      }, bE = function(e, t, r, i) {
        var u = Zy(e, t);
        if (u !== null) {
          var s = NE(u.memoizedState, r, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = I({}, e.memoizedProps), gr(e, vt, Xt);
        }
      }, TE = function(e, t, r) {
        e.pendingProps = AE(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), gr(e, vt, Xt);
      }, wE = function(e, t) {
        e.pendingProps = OE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), gr(e, vt, Xt);
      }, _E = function(e, t, r) {
        e.pendingProps = NE(e.memoizedProps, t, r), e.alternate && (e.alternate.pendingProps = e.pendingProps), gr(e, vt, Xt);
      }, xE = function(e) {
        gr(e, vt, Xt);
      }, kE = function(e) {
        EE = e;
      };
    }
    function xT(e) {
      var t = Lf(e);
      return t === null ? null : t.stateNode;
    }
    function kT(e) {
      return null;
    }
    function DT() {
      return Mn;
    }
    function OT(e) {
      var t = e.findFiberByHostInstance, r = nt.ReactCurrentDispatcher;
      return TR({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: CE,
        overrideHookStateDeletePath: RE,
        overrideHookStateRenamePath: bE,
        overrideProps: TE,
        overridePropsDeletePath: wE,
        overridePropsRenamePath: _E,
        setSuspenseHandler: kE,
        scheduleUpdate: xE,
        currentDispatcherRef: r,
        findHostInstanceByFiber: xT,
        findFiberByHostInstance: t || kT,
        // React Refresh
        findHostInstancesForRefresh: tT,
        scheduleRefresh: Jb,
        scheduleRoot: eT,
        setRefreshHandler: Zb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: DT
      });
    }
    function Jy(e, t, r) {
      this._internalRoot = MT(e, t, r);
    }
    Jy.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var r = t.containerInfo;
        if (r.nodeType !== tr) {
          var i = SE(t.current);
          i && i.parentNode !== r && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      ad(e, t, null, null);
    }, Jy.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      ad(null, e, null, function() {
        $g(t);
      });
    };
    function MT(e, t, r) {
      var i = r != null && r.hydrate === !0;
      r != null && r.hydrationOptions;
      var u = r != null && r.hydrationOptions != null && r.hydrationOptions.mutableSources || null, s = CT(e, t, i);
      CR(s.current, e), e.nodeType;
      {
        var c = e.nodeType === tr ? e.parentNode : e;
        hg(c);
      }
      if (u)
        for (var d = 0; d < u.length; d++) {
          var v = u[d];
          yT(s, v);
        }
      return s;
    }
    function NT(e, t) {
      return new Jy(e, Yh, t);
    }
    function af(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === mi || e.nodeType === od || e.nodeType === tr && e.nodeValue === " react-mount-point-unstable "));
    }
    var LT = nt.ReactCurrentOwner, UE, zE = !1;
    UE = function(e) {
      if (e._reactRootContainer && e.nodeType !== tr) {
        var t = SE(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var r = !!e._reactRootContainer, i = Wv(e), u = !!(i && pu(i));
      u && !r && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Wv(e) {
      return e ? e.nodeType === mi ? e.documentElement : e.firstChild : null;
    }
    function AT(e) {
      var t = Wv(e);
      return !!(t && t.nodeType === Ar && t.hasAttribute(Sr));
    }
    function UT(e, t) {
      var r = t || AT(e);
      if (!r)
        for (var i = !1, u; u = e.lastChild; )
          !i && u.nodeType === Ar && u.hasAttribute(Sr) && (i = !0, E("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(u);
      return r && !t && !zE && (zE = !0, Xe("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), NT(e, r ? {
        hydrate: !0
      } : void 0);
    }
    function zT(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function $v(e, t, r, i, u) {
      UE(r), zT(u === void 0 ? null : u, "render");
      var s = r._reactRootContainer, c;
      if (s) {
        if (c = s._internalRoot, typeof u == "function") {
          var v = u;
          u = function() {
            var g = Xy(c);
            v.call(g);
          };
        }
        ad(t, c, e, u);
      } else {
        if (s = r._reactRootContainer = UT(r, i), c = s._internalRoot, typeof u == "function") {
          var d = u;
          u = function() {
            var g = Xy(c);
            d.call(g);
          };
        }
        KS(function() {
          ad(t, c, e, u);
        });
      }
      return Xy(c);
    }
    function jT(e) {
      {
        var t = LT.current;
        if (t !== null && t.stateNode !== null) {
          var r = t.stateNode._warnedAboutRefsInRender;
          r || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", re(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ar ? e : ET(e, "findDOMNode");
    }
    function PT(e, t, r) {
      if (!af(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = kp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return $v(null, e, t, !0, r);
    }
    function FT(e, t, r) {
      if (!af(t))
        throw Error("Target container is not a DOM element.");
      {
        var i = kp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return $v(null, e, t, !1, r);
    }
    function HT(e, t, r, i) {
      if (!af(r))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Ad(e)))
        throw Error("parentComponent must be a valid React Component");
      return $v(e, t, r, !1, i);
    }
    function VT(e) {
      if (!af(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = kp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var r = Wv(e), i = r && !pu(r);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return KS(function() {
          $v(null, null, e, !1, function() {
            e._reactRootContainer = null, $g(e);
          });
        }), !0;
      } else {
        {
          var u = Wv(e), s = !!(u && pu(u)), c = e.nodeType === Ar && af(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", c ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ss(RT), Fd(bT), Ql(TT), ul(wT);
    var jE = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Tf(RC), rs(XS, gb, hb, yb);
    function PE(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!af(t))
        throw Error("Target container is not a DOM element.");
      return gT(e, t, null, r);
    }
    function BT(e, t, r, i) {
      return HT(e, t, r, i);
    }
    function IT(e, t) {
      var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return jE || (jE = !0, Xe('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), PE(e, t, r);
    }
    var WT = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        pu,
        zs,
        Dp,
        Bl,
        wf,
        Qi,
        // TODO: This is related to `act`, not events. Move to separate key?
        Bv
      ]
    }, $T = OT({
      findFiberByHostInstance: Ro,
      bundleType: 1,
      version: v0,
      rendererPackageName: "react-dom"
    });
    if (!$T && it && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var FE = window.location.protocol;
      /^(https?|file):$/.test(FE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (FE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WT, ua.createPortal = PE, ua.findDOMNode = jT, ua.flushSync = Oy, ua.hydrate = PT, ua.render = FT, ua.unmountComponentAtNode = VT, ua.unstable_batchedUpdates = XS, ua.unstable_createPortal = IT, ua.unstable_renderSubtreeIntoContainer = BT, ua.version = v0;
  }()), ua;
}
function eC() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eC);
    } catch (_) {
      console.error(_);
    }
  }
}
process.env.NODE_ENV === "production" ? (eC(), sg.exports = tw()) : sg.exports = iw();
var lw = sg.exports;
function uw() {
  const [_, I] = of.useState(!1);
  return { isFetching: _, fetch: async (z) => await new Promise(function(nt, Xe) {
    try {
      I(!0), window.jQuery.post(window.ajaxurl, z, function(E) {
        I(!1), nt(E);
      });
    } catch (E) {
      console.error(E), I(!1), Xe(E);
    }
  }) };
}
const ow = () => {
  const _ = uw(), I = async () => {
    const fe = {
      action: "save_config"
    }, z = await _.fetch(fe);
    alert(z);
  };
  return /* @__PURE__ */ id.jsxs(XT.Fragment, { children: [
    /* @__PURE__ */ id.jsx("h1", { children: "A WordPress React Plugin Starter" }),
    /* @__PURE__ */ id.jsx("p", { children: "A button that makes an ajax request to your WordPress backend." }),
    /* @__PURE__ */ id.jsx("button", { onClick: I, children: "Save Config" })
  ] });
};
lw.render(/* @__PURE__ */ id.jsx(ow, {}), document.getElementById("app"));
