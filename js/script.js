"use strict";

var _this = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.addEventListener('DOMContentLoaded', function () {
  // ЗАГРУЗКА ШРИФТОВ
  var head = window.document.getElementsByTagName('head')[0];

  function includeCSS(aFile, aRel) {
    var style = window.document.createElement('link');
    style.href = aFile;
    style.rel = aRel || 'stylesheet';

    if (aFile === 'https://fonts.gstatic.com') {
      style.rel = aRel || 'preconnect';
    }

    head.appendChild(style);
  }

  includeCSS('https://fonts.gstatic.com');
  includeCSS('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');
  includeCSS('https://fonts.gstatic.com');
  includeCSS('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap'); // ==========

  !function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).IMask = {});
  }(_this, function (t) {
    "use strict";

    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(t) {
      var e = {
        exports: {}
      };
      return t(e, e.exports), e.exports;
    }

    var u = function u(t) {
      return t && t.Math == Math && t;
    },
        r = u("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis) || u("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window) || u("object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self) || u("object" == _typeof(e) && e) || function () {
      return this;
    }() || Function("return this")(),
        i = function i(t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
        a = !i(function () {
      return 7 != Object.defineProperty({}, 1, {
        get: function get() {
          return 7;
        }
      })[1];
    }),
        s = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        l = {
      f: o && !s.call({
        1: 2
      }, 1) ? function (t) {
        var e = o(this, t);
        return !!e && e.enumerable;
      } : s
    },
        h = function h(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
        c = {}.toString,
        f = "".split,
        p = i(function () {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function (t) {
      return "String" == function (t) {
        return c.call(t).slice(8, -1);
      }(t) ? f.call(t, "") : Object(t);
    } : Object,
        d = function d(t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
        v = function v(t) {
      return p(d(t));
    },
        k = function k(t) {
      return "object" == _typeof(t) ? null !== t : "function" == typeof t;
    },
        g = function g(t, e) {
      if (!k(t)) return t;
      var n, u;
      if (e && "function" == typeof (n = t.toString) && !k(u = n.call(t))) return u;
      if ("function" == typeof (n = t.valueOf) && !k(u = n.call(t))) return u;
      if (!e && "function" == typeof (n = t.toString) && !k(u = n.call(t))) return u;
      throw TypeError("Can't convert object to primitive value");
    },
        y = {}.hasOwnProperty,
        m = function m(t, e) {
      return y.call(t, e);
    },
        _ = r.document,
        A = k(_) && k(_.createElement),
        b = !a && !i(function () {
      return 7 != Object.defineProperty((t = "div", A ? _.createElement(t) : {}), "a", {
        get: function get() {
          return 7;
        }
      }).a;
      var t;
    }),
        E = Object.getOwnPropertyDescriptor,
        C = {
      f: a ? E : function (t, e) {
        if (t = v(t), e = g(e, !0), b) try {
          return E(t, e);
        } catch (t) {}
        if (m(t, e)) return h(!l.f.call(t, e), t[e]);
      }
    },
        F = function F(t) {
      if (!k(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
        S = Object.defineProperty,
        D = {
      f: a ? S : function (t, e, n) {
        if (F(t), e = g(e, !0), F(n), b) try {
          return S(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t;
      }
    },
        B = a ? function (t, e, n) {
      return D.f(t, e, h(1, n));
    } : function (t, e, n) {
      return t[e] = n, t;
    },
        w = function w(t, e) {
      try {
        B(r, t, e);
      } catch (n) {
        r[t] = e;
      }

      return e;
    },
        O = r["__core-js_shared__"] || w("__core-js_shared__", {}),
        M = Function.toString;

    "function" != typeof O.inspectSource && (O.inspectSource = function (t) {
      return M.call(t);
    });
    var T,
        x,
        P,
        I,
        R = O.inspectSource,
        j = r.WeakMap,
        V = "function" == typeof j && /native code/.test(R(j)),
        N = n(function (t) {
      (t.exports = function (t, e) {
        return O[t] || (O[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.8.3",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
      });
    }),
        L = 0,
        H = Math.random(),
        U = N("keys"),
        G = {},
        z = r.WeakMap;

    if (V) {
      var Y = O.state || (O.state = new z()),
          Z = Y.get,
          K = Y.has,
          q = Y.set;
      T = function T(t, e) {
        return e.facade = t, q.call(Y, t, e), e;
      }, x = function x(t) {
        return Z.call(Y, t) || {};
      }, P = function P(t) {
        return K.call(Y, t);
      };
    } else {
      var W = U[I = "state"] || (U[I] = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++L + H).toString(36);
      }(I));

      G[W] = !0, T = function T(t, e) {
        return e.facade = t, B(t, W, e), e;
      }, x = function x(t) {
        return m(t, W) ? t[W] : {};
      }, P = function P(t) {
        return m(t, W);
      };
    }

    var $ = {
      set: T,
      get: x,
      has: P,
      enforce: function enforce(t) {
        return P(t) ? x(t) : T(t, {});
      },
      getterFor: function getterFor(t) {
        return function (e) {
          var n;
          if (!k(e) || (n = x(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return n;
        };
      }
    },
        X = n(function (t) {
      var e = $.get,
          n = $.enforce,
          u = String(String).split("String");
      (t.exports = function (t, e, i, a) {
        var s,
            o = !!a && !!a.unsafe,
            l = !!a && !!a.enumerable,
            h = !!a && !!a.noTargetGet;
        "function" == typeof i && ("string" != typeof e || m(i, "name") || B(i, "name", e), (s = n(i)).source || (s.source = u.join("string" == typeof e ? e : ""))), t !== r ? (o ? !h && t[e] && (l = !0) : delete t[e], l ? t[e] = i : B(t, e, i)) : l ? t[e] = i : w(e, i);
      })(Function.prototype, "toString", function () {
        return "function" == typeof this && e(this).source || R(this);
      });
    }),
        J = r,
        Q = function Q(t) {
      return "function" == typeof t ? t : void 0;
    },
        tt = function tt(t, e) {
      return arguments.length < 2 ? Q(J[t]) || Q(r[t]) : J[t] && J[t][e] || r[t] && r[t][e];
    },
        et = Math.ceil,
        nt = Math.floor,
        ut = function ut(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? nt : et)(t);
    },
        rt = Math.min,
        it = function it(t) {
      return t > 0 ? rt(ut(t), 9007199254740991) : 0;
    },
        at = Math.max,
        st = Math.min,
        ot = function ot(t) {
      return function (e, n, u) {
        var r,
            i = v(e),
            a = it(i.length),
            s = function (t, e) {
          var n = ut(t);
          return n < 0 ? at(n + e, 0) : st(n, e);
        }(u, a);

        if (t && n != n) {
          for (; a > s;) {
            if ((r = i[s++]) != r) return !0;
          }
        } else for (; a > s; s++) {
          if ((t || s in i) && i[s] === n) return t || s || 0;
        }

        return !t && -1;
      };
    },
        lt = {
      includes: ot(!0),
      indexOf: ot(!1)
    }.indexOf,
        ht = function ht(t, e) {
      var n,
          u = v(t),
          r = 0,
          i = [];

      for (n in u) {
        !m(G, n) && m(u, n) && i.push(n);
      }

      for (; e.length > r;) {
        m(u, n = e[r++]) && (~lt(i, n) || i.push(n));
      }

      return i;
    },
        ct = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ft = ct.concat("length", "prototype"),
        pt = {
      f: Object.getOwnPropertyNames || function (t) {
        return ht(t, ft);
      }
    },
        dt = {
      f: Object.getOwnPropertySymbols
    },
        vt = tt("Reflect", "ownKeys") || function (t) {
      var e = pt.f(F(t)),
          n = dt.f;
      return n ? e.concat(n(t)) : e;
    },
        kt = function kt(t, e) {
      for (var n = vt(e), u = D.f, r = C.f, i = 0; i < n.length; i++) {
        var a = n[i];
        m(t, a) || u(t, a, r(e, a));
      }
    },
        gt = /#|\.prototype\./,
        yt = function yt(t, e) {
      var n = _t[mt(t)];

      return n == bt || n != At && ("function" == typeof e ? i(e) : !!e);
    },
        mt = yt.normalize = function (t) {
      return String(t).replace(gt, ".").toLowerCase();
    },
        _t = yt.data = {},
        At = yt.NATIVE = "N",
        bt = yt.POLYFILL = "P",
        Et = yt,
        Ct = C.f,
        Ft = function Ft(t, e) {
      var n,
          u,
          i,
          a,
          s,
          o = t.target,
          l = t.global,
          h = t.stat;
      if (n = l ? r : h ? r[o] || w(o, {}) : (r[o] || {}).prototype) for (u in e) {
        if (a = e[u], i = t.noTargetGet ? (s = Ct(n, u)) && s.value : n[u], !Et(l ? u : o + (h ? "." : "#") + u, t.forced) && void 0 !== i) {
          if (_typeof(a) == _typeof(i)) continue;
          kt(a, i);
        }

        (t.sham || i && i.sham) && B(a, "sham", !0), X(n, u, a, t);
      }
    },
        St = Object.keys || function (t) {
      return ht(t, ct);
    },
        Dt = Object.assign,
        Bt = Object.defineProperty,
        wt = !Dt || i(function () {
      if (a && 1 !== Dt({
        b: 1
      }, Dt(Bt({}, "a", {
        enumerable: !0,
        get: function get() {
          Bt(this, "b", {
            value: 3,
            enumerable: !1
          });
        }
      }), {
        b: 2
      })).b) return !0;
      var t = {},
          e = {},
          n = Symbol();
      return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
        e[t] = t;
      }), 7 != Dt({}, t)[n] || "abcdefghijklmnopqrst" != St(Dt({}, e)).join("");
    }) ? function (t, e) {
      for (var n = Object(d(t)), u = arguments.length, r = 1, i = dt.f, s = l.f; u > r;) {
        for (var o, h = p(arguments[r++]), c = i ? St(h).concat(i(h)) : St(h), f = c.length, v = 0; f > v;) {
          o = c[v++], a && !s.call(h, o) || (n[o] = h[o]);
        }
      }

      return n;
    } : Dt;

    Ft({
      target: "Object",
      stat: !0,
      forced: Object.assign !== wt
    }, {
      assign: wt
    });

    var Ot = "".repeat || function (t) {
      var e = String(d(this)),
          n = "",
          u = ut(t);
      if (u < 0 || u == 1 / 0) throw RangeError("Wrong number of repetitions");

      for (; u > 0; (u >>>= 1) && (e += e)) {
        1 & u && (n += e);
      }

      return n;
    },
        Mt = Math.ceil,
        Tt = function Tt(t) {
      return function (e, n, u) {
        var r,
            i,
            a = String(d(e)),
            s = a.length,
            o = void 0 === u ? " " : String(u),
            l = it(n);
        return l <= s || "" == o ? a : (r = l - s, (i = Ot.call(o, Mt(r / o.length))).length > r && (i = i.slice(0, r)), t ? a + i : i + a);
      };
    },
        xt = {
      start: Tt(!1),
      end: Tt(!0)
    },
        Pt = tt("navigator", "userAgent") || "",
        It = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Pt),
        Rt = xt.end;

    Ft({
      target: "String",
      proto: !0,
      forced: It
    }, {
      padEnd: function padEnd(t) {
        return Rt(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    var jt = xt.start;

    function Vt(t) {
      return (Vt = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
        return _typeof(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      })(t);
    }

    function Nt(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function Lt(t, e) {
      for (var n = 0; n < e.length; n++) {
        var u = e[n];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(t, u.key, u);
      }
    }

    function Ht(t, e, n) {
      return e && Lt(t.prototype, e), n && Lt(t, n), t;
    }

    function Ut(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && zt(t, e);
    }

    function Gt(t) {
      return (Gt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function zt(t, e) {
      return (zt = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function Yt(t, e) {
      if (null == t) return {};

      var n,
          u,
          r = function (t, e) {
        if (null == t) return {};
        var n,
            u,
            r = {},
            i = Object.keys(t);

        for (u = 0; u < i.length; u++) {
          n = i[u], e.indexOf(n) >= 0 || (r[n] = t[n]);
        }

        return r;
      }(t, e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);

        for (u = 0; u < i.length; u++) {
          n = i[u], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
        }
      }

      return r;
    }

    function Zt(t, e) {
      return !e || "object" != _typeof(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function Kt(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            u = Gt(t);

        if (e) {
          var r = Gt(this).constructor;
          n = Reflect.construct(u, arguments, r);
        } else n = u.apply(this, arguments);

        return Zt(this, n);
      };
    }

    function qt(t, e) {
      for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Gt(t));) {
        ;
      }

      return t;
    }

    function Wt(t, e, n) {
      return (Wt = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
        var u = qt(t, e);

        if (u) {
          var r = Object.getOwnPropertyDescriptor(u, e);
          return r.get ? r.get.call(n) : r.value;
        }
      })(t, e, n || t);
    }

    function $t(t, e, n, u) {
      return ($t = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (t, e, n, u) {
        var r,
            i = qt(t, e);

        if (i) {
          if ((r = Object.getOwnPropertyDescriptor(i, e)).set) return r.set.call(u, n), !0;
          if (!r.writable) return !1;
        }

        if (r = Object.getOwnPropertyDescriptor(u, e)) {
          if (!r.writable) return !1;
          r.value = n, Object.defineProperty(u, e, r);
        } else !function (t, e, n) {
          e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n;
        }(u, e, n);

        return !0;
      })(t, e, n, u);
    }

    function Xt(t, e, n, u, r) {
      if (!$t(t, e, n, u || t) && r) throw new Error("failed to set property");
      return n;
    }

    function Jt(t, e) {
      return function (t) {
        if (Array.isArray(t)) return t;
      }(t) || function (t, e) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
        var n = [],
            u = !0,
            r = !1,
            i = void 0;

        try {
          for (var a, s = t[Symbol.iterator](); !(u = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); u = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            u || null == s["return"] || s["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }(t, e) || function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return Qt(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Qt(t, e);
      }(t, e) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function Qt(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, u = new Array(e); n < e; n++) {
        u[n] = t[n];
      }

      return u;
    }

    function te(t) {
      return "string" == typeof t || t instanceof String;
    }

    Ft({
      target: "String",
      proto: !0,
      forced: It
    }, {
      padStart: function padStart(t) {
        return jt(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }), Ft({
      target: "String",
      proto: !0
    }, {
      repeat: Ot
    }), Ft({
      global: !0
    }, {
      globalThis: r
    });
    var ee = {
      NONE: "NONE",
      LEFT: "LEFT",
      FORCE_LEFT: "FORCE_LEFT",
      RIGHT: "RIGHT",
      FORCE_RIGHT: "FORCE_RIGHT"
    };

    function ne(t) {
      return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }

    var ue = function () {
      function t(e, n, u, r) {
        for (Nt(this, t), this.value = e, this.cursorPos = n, this.oldValue = u, this.oldSelection = r; this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos);) {
          --this.oldSelection.start;
        }
      }

      return Ht(t, [{
        key: "startChangePos",
        get: function get() {
          return Math.min(this.cursorPos, this.oldSelection.start);
        }
      }, {
        key: "insertedCount",
        get: function get() {
          return this.cursorPos - this.startChangePos;
        }
      }, {
        key: "inserted",
        get: function get() {
          return this.value.substr(this.startChangePos, this.insertedCount);
        }
      }, {
        key: "removedCount",
        get: function get() {
          return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
        }
      }, {
        key: "removed",
        get: function get() {
          return this.oldValue.substr(this.startChangePos, this.removedCount);
        }
      }, {
        key: "head",
        get: function get() {
          return this.value.substring(0, this.startChangePos);
        }
      }, {
        key: "tail",
        get: function get() {
          return this.value.substring(this.startChangePos + this.insertedCount);
        }
      }, {
        key: "removeDirection",
        get: function get() {
          return !this.removedCount || this.insertedCount ? ee.NONE : this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? ee.RIGHT : ee.LEFT;
        }
      }]), t;
    }(),
        re = function () {
      function t(e) {
        Nt(this, t), Object.assign(this, {
          inserted: "",
          rawInserted: "",
          skip: !1,
          tailShift: 0
        }, e);
      }

      return Ht(t, [{
        key: "aggregate",
        value: function value(t) {
          return this.rawInserted += t.rawInserted, this.skip = this.skip || t.skip, this.inserted += t.inserted, this.tailShift += t.tailShift, this;
        }
      }, {
        key: "offset",
        get: function get() {
          return this.tailShift + this.inserted.length;
        }
      }]), t;
    }(),
        ie = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            u = arguments.length > 2 ? arguments[2] : void 0;
        Nt(this, t), this.value = e, this.from = n, this.stop = u;
      }

      return Ht(t, [{
        key: "toString",
        value: function value() {
          return this.value;
        }
      }, {
        key: "extend",
        value: function value(t) {
          this.value += String(t);
        }
      }, {
        key: "appendTo",
        value: function value(t) {
          return t.append(this.toString(), {
            tail: !0
          }).aggregate(t._appendPlaceholder());
        }
      }, {
        key: "state",
        get: function get() {
          return {
            value: this.value,
            from: this.from,
            stop: this.stop
          };
        },
        set: function set(t) {
          Object.assign(this, t);
        }
      }, {
        key: "shiftBefore",
        value: function value(t) {
          if (this.from >= t || !this.value.length) return "";
          var e = this.value[0];
          return this.value = this.value.slice(1), e;
        }
      }]), t;
    }();

    function ae(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new ae.InputMask(t, e);
    }

    var se = function () {
      function t(e) {
        Nt(this, t), this._value = "", this._update(Object.assign({}, t.DEFAULTS, e)), this.isInitialized = !0;
      }

      return Ht(t, [{
        key: "updateOptions",
        value: function value(t) {
          Object.keys(t).length && this.withValueRefresh(this._update.bind(this, t));
        }
      }, {
        key: "_update",
        value: function value(t) {
          Object.assign(this, t);
        }
      }, {
        key: "state",
        get: function get() {
          return {
            _value: this.value
          };
        },
        set: function set(t) {
          this._value = t._value;
        }
      }, {
        key: "reset",
        value: function value() {
          this._value = "";
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(t) {
          this.resolve(t);
        }
      }, {
        key: "resolve",
        value: function value(t) {
          return this.reset(), this.append(t, {
            input: !0
          }, ""), this.doCommit(), this.value;
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.value;
        },
        set: function set(t) {
          this.reset(), this.append(t, {}, ""), this.doCommit();
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.doParse(this.value);
        },
        set: function set(t) {
          this.value = this.doFormat(t);
        }
      }, {
        key: "rawInputValue",
        get: function get() {
          return this.extractInput(0, this.value.length, {
            raw: !0
          });
        },
        set: function set(t) {
          this.reset(), this.append(t, {
            raw: !0
          }, ""), this.doCommit();
        }
      }, {
        key: "isComplete",
        get: function get() {
          return !0;
        }
      }, {
        key: "nearestInputPos",
        value: function value(t, e) {
          return t;
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return this.value.slice(t, e);
        }
      }, {
        key: "extractTail",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return new ie(this.extractInput(t, e), t);
        }
      }, {
        key: "appendTail",
        value: function value(t) {
          return te(t) && (t = new ie(String(t))), t.appendTo(this);
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          return t ? (this._value += t, new re({
            inserted: t,
            rawInserted: t
          })) : new re();
        }
      }, {
        key: "_appendChar",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = this.state,
              r = this._appendCharRaw(this.doPrepare(t, e), e);

          if (r.inserted) {
            var i,
                a = !1 !== this.doValidate(e);

            if (a && null != n) {
              var s = this.state;
              this.overwrite && (i = n.state, n.shiftBefore(this.value.length));
              var o = this.appendTail(n);
              (a = o.rawInserted === n.toString()) && o.inserted && (this.state = s);
            }

            a || (r = new re(), this.state = u, n && i && (n.state = i));
          }

          return r;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          return new re();
        }
      }, {
        key: "append",
        value: function value(t, e, n) {
          if (!te(t)) throw new Error("value should be string");
          var u = new re(),
              r = te(n) ? new ie(String(n)) : n;
          e && e.tail && (e._beforeTailState = this.state);

          for (var i = 0; i < t.length; ++i) {
            u.aggregate(this._appendChar(t[i], e, r));
          }

          return null != r && (u.tailShift += this.appendTail(r).tailShift), u;
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return this._value = this.value.slice(0, t) + this.value.slice(e), new re();
        }
      }, {
        key: "withValueRefresh",
        value: function value(t) {
          if (this._refreshing || !this.isInitialized) return t();
          this._refreshing = !0;
          var e = this.rawInputValue,
              n = this.value,
              u = t();
          return this.rawInputValue = e, this.value && this.value !== n && 0 === n.indexOf(this.value) && this.append(n.slice(this.value.length), {}, ""), delete this._refreshing, u;
        }
      }, {
        key: "runIsolated",
        value: function value(t) {
          if (this._isolated || !this.isInitialized) return t(this);
          this._isolated = !0;
          var e = this.state,
              n = t(this);
          return this.state = e, delete this._isolated, n;
        }
      }, {
        key: "doPrepare",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.prepare ? this.prepare(t, this, e) : t;
        }
      }, {
        key: "doValidate",
        value: function value(t) {
          return (!this.validate || this.validate(this.value, this, t)) && (!this.parent || this.parent.doValidate(t));
        }
      }, {
        key: "doCommit",
        value: function value() {
          this.commit && this.commit(this.value, this);
        }
      }, {
        key: "doFormat",
        value: function value(t) {
          return this.format ? this.format(t, this) : t;
        }
      }, {
        key: "doParse",
        value: function value(t) {
          return this.parse ? this.parse(t, this) : t;
        }
      }, {
        key: "splice",
        value: function value(t, e, n, u) {
          var r = t + e,
              i = this.extractTail(r),
              a = this.nearestInputPos(t, u);
          return new re({
            tailShift: a - t
          }).aggregate(this.remove(a)).aggregate(this.append(n, {
            input: !0
          }, i));
        }
      }]), t;
    }();

    function oe(t) {
      if (null == t) throw new Error("mask property should be defined");
      return t instanceof RegExp ? ae.MaskedRegExp : te(t) ? ae.MaskedPattern : t instanceof Date || t === Date ? ae.MaskedDate : t instanceof Number || "number" == typeof t || t === Number ? ae.MaskedNumber : Array.isArray(t) || t === Array ? ae.MaskedDynamic : ae.Masked && t.prototype instanceof ae.Masked ? t : t instanceof Function ? ae.MaskedFunction : t instanceof ae.Masked ? t.constructor : (console.warn("Mask not found for mask", t), ae.Masked);
    }

    function le(t) {
      if (ae.Masked && t instanceof ae.Masked) return t;
      var e = (t = Object.assign({}, t)).mask;
      if (ae.Masked && e instanceof ae.Masked) return e;
      var n = oe(e);
      if (!n) throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
      return new n(t);
    }

    se.DEFAULTS = {
      format: function format(t) {
        return t;
      },
      parse: function parse(t) {
        return t;
      }
    }, ae.Masked = se, ae.createMask = le;

    var he = {
      0: /\d/,
      a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      "*": /./
    },
        ce = function () {
      function t(e) {
        Nt(this, t);
        var n = e.mask,
            u = Yt(e, ["mask"]);
        this.masked = le({
          mask: n
        }), Object.assign(this, u);
      }

      return Ht(t, [{
        key: "reset",
        value: function value() {
          this._isFilled = !1, this.masked.reset();
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length;
          return 0 === t && e >= 1 ? (this._isFilled = !1, this.masked.remove(t, e)) : new re();
        }
      }, {
        key: "value",
        get: function get() {
          return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : "");
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.masked.unmaskedValue;
        }
      }, {
        key: "isComplete",
        get: function get() {
          return Boolean(this.masked.value) || this.isOptional;
        }
      }, {
        key: "_appendChar",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this._isFilled) return new re();

          var n = this.masked.state,
              u = this.masked._appendChar(t, e);

          return u.inserted && !1 === this.doValidate(e) && (u.inserted = u.rawInserted = "", this.masked.state = n), u.inserted || this.isOptional || this.lazy || e.input || (u.inserted = this.placeholderChar), u.skip = !u.inserted && !this.isOptional, this._isFilled = Boolean(u.inserted), u;
        }
      }, {
        key: "append",
        value: function value() {
          var t;
          return (t = this.masked).append.apply(t, arguments);
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          var t = new re();
          return this._isFilled || this.isOptional ? t : (this._isFilled = !0, t.inserted = this.placeholderChar, t);
        }
      }, {
        key: "extractTail",
        value: function value() {
          var t;
          return (t = this.masked).extractTail.apply(t, arguments);
        }
      }, {
        key: "appendTail",
        value: function value() {
          var t;
          return (t = this.masked).appendTail.apply(t, arguments);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = arguments.length > 2 ? arguments[2] : void 0;
          return this.masked.extractInput(t, e, n);
        }
      }, {
        key: "nearestInputPos",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.NONE,
              n = this.value.length,
              u = Math.min(Math.max(t, 0), n);

          switch (e) {
            case ee.LEFT:
            case ee.FORCE_LEFT:
              return this.isComplete ? u : 0;

            case ee.RIGHT:
            case ee.FORCE_RIGHT:
              return this.isComplete ? u : n;

            case ee.NONE:
            default:
              return u;
          }
        }
      }, {
        key: "doValidate",
        value: function value() {
          var t, e;
          return (t = this.masked).doValidate.apply(t, arguments) && (!this.parent || (e = this.parent).doValidate.apply(e, arguments));
        }
      }, {
        key: "doCommit",
        value: function value() {
          this.masked.doCommit();
        }
      }, {
        key: "state",
        get: function get() {
          return {
            masked: this.masked.state,
            _isFilled: this._isFilled
          };
        },
        set: function set(t) {
          this.masked.state = t.masked, this._isFilled = t._isFilled;
        }
      }]), t;
    }(),
        fe = function () {
      function t(e) {
        Nt(this, t), Object.assign(this, e), this._value = "";
      }

      return Ht(t, [{
        key: "value",
        get: function get() {
          return this._value;
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.isUnmasking ? this.value : "";
        }
      }, {
        key: "reset",
        value: function value() {
          this._isRawInput = !1, this._value = "";
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
          return this._value = this._value.slice(0, t) + this._value.slice(e), this._value || (this._isRawInput = !1), new re();
        }
      }, {
        key: "nearestInputPos",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.NONE,
              n = this._value.length;

          switch (e) {
            case ee.LEFT:
            case ee.FORCE_LEFT:
              return 0;

            case ee.NONE:
            case ee.RIGHT:
            case ee.FORCE_RIGHT:
            default:
              return n;
          }
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._value.length;
          return (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).raw && this._isRawInput && this._value.slice(t, e) || "";
        }
      }, {
        key: "isComplete",
        get: function get() {
          return !0;
        }
      }, {
        key: "_appendChar",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new re();
          if (this._value) return n;
          var u = this["char"] === t[0] && (this.isUnmasking || e.input || e.raw) && !e.tail;
          return u && (n.rawInserted = this["char"]), this._value = n.inserted = this["char"], this._isRawInput = u && (e.raw || e.input), n;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          var t = new re();
          return this._value ? t : (this._value = t.inserted = this["char"], t);
        }
      }, {
        key: "extractTail",
        value: function value() {
          return arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length, new ie("");
        }
      }, {
        key: "appendTail",
        value: function value(t) {
          return te(t) && (t = new ie(String(t))), t.appendTo(this);
        }
      }, {
        key: "append",
        value: function value(t, e, n) {
          var u = this._appendChar(t, e);

          return null != n && (u.tailShift += this.appendTail(n).tailShift), u;
        }
      }, {
        key: "doCommit",
        value: function value() {}
      }, {
        key: "state",
        get: function get() {
          return {
            _value: this._value,
            _isRawInput: this._isRawInput
          };
        },
        set: function set(t) {
          Object.assign(this, t);
        }
      }]), t;
    }(),
        pe = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        Nt(this, t), this.chunks = e, this.from = n;
      }

      return Ht(t, [{
        key: "toString",
        value: function value() {
          return this.chunks.map(String).join("");
        }
      }, {
        key: "extend",
        value: function value(e) {
          if (String(e)) {
            te(e) && (e = new ie(String(e)));
            var n = this.chunks[this.chunks.length - 1],
                u = n && (n.stop === e.stop || null == e.stop) && e.from === n.from + n.toString().length;
            if (e instanceof ie) u ? n.extend(e.toString()) : this.chunks.push(e);else if (e instanceof t) {
              if (null == e.stop) for (var r; e.chunks.length && null == e.chunks[0].stop;) {
                (r = e.chunks.shift()).from += e.from, this.extend(r);
              }
              e.toString() && (e.stop = e.blockIndex, this.chunks.push(e));
            }
          }
        }
      }, {
        key: "appendTo",
        value: function value(e) {
          if (!(e instanceof ae.MaskedPattern)) return new ie(this.toString()).appendTo(e);

          for (var n = new re(), u = 0; u < this.chunks.length && !n.skip; ++u) {
            var r = this.chunks[u],
                i = e._mapPosToBlock(e.value.length),
                a = r.stop,
                s = void 0;

            if (null != a && (!i || i.index <= a) && ((r instanceof t || e._stops.indexOf(a) >= 0) && n.aggregate(e._appendPlaceholder(a)), s = r instanceof t && e._blocks[a]), s) {
              var o = s.appendTail(r);
              o.skip = !1, n.aggregate(o), e._value += o.inserted;
              var l = r.toString().slice(o.rawInserted.length);
              l && n.aggregate(e.append(l, {
                tail: !0
              }));
            } else n.aggregate(e.append(r.toString(), {
              tail: !0
            }));
          }

          return n;
        }
      }, {
        key: "state",
        get: function get() {
          return {
            chunks: this.chunks.map(function (t) {
              return t.state;
            }),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
          };
        },
        set: function set(e) {
          var n = e.chunks,
              u = Yt(e, ["chunks"]);
          Object.assign(this, u), this.chunks = n.map(function (e) {
            var n = "chunks" in e ? new t() : new ie();
            return n.state = e, n;
          });
        }
      }, {
        key: "shiftBefore",
        value: function value(t) {
          if (this.from >= t || !this.chunks.length) return "";

          for (var e = t - this.from, n = 0; n < this.chunks.length;) {
            var u = this.chunks[n],
                r = u.shiftBefore(e);

            if (u.toString()) {
              if (!r) break;
              ++n;
            } else this.chunks.splice(n, 1);

            if (r) return r;
          }

          return "";
        }
      }]), t;
    }(),
        de = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t.mask && (t.validate = function (e) {
            return e.search(t.mask) >= 0;
          }), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }]), n;
    }();

    ae.MaskedRegExp = de;

    var ve = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Nt(this, n), t.definitions = Object.assign({}, he, t.definitions), e.call(this, Object.assign({}, n.DEFAULTS, t));
      }

      return Ht(n, [{
        key: "_update",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          t.definitions = Object.assign({}, this.definitions, t.definitions), Wt(Gt(n.prototype), "_update", this).call(this, t), this._rebuildMask();
        }
      }, {
        key: "_rebuildMask",
        value: function value() {
          var t = this,
              e = this.definitions;
          this._blocks = [], this._stops = [], this._maskedBlocks = {};
          var u = this.mask;
          if (u && e) for (var r = !1, i = !1, a = 0; a < u.length; ++a) {
            if (this.blocks) if ("continue" === function () {
              var e = u.slice(a),
                  n = Object.keys(t.blocks).filter(function (t) {
                return 0 === e.indexOf(t);
              });
              n.sort(function (t, e) {
                return e.length - t.length;
              });
              var r = n[0];

              if (r) {
                var i = le(Object.assign({
                  parent: t,
                  lazy: t.lazy,
                  placeholderChar: t.placeholderChar,
                  overwrite: t.overwrite
                }, t.blocks[r]));
                return i && (t._blocks.push(i), t._maskedBlocks[r] || (t._maskedBlocks[r] = []), t._maskedBlocks[r].push(t._blocks.length - 1)), a += r.length - 1, "continue";
              }
            }()) continue;
            var s = u[a],
                o = (s in e);
            if (s !== n.STOP_CHAR) {
              if ("{" !== s && "}" !== s) {
                if ("[" !== s && "]" !== s) {
                  if (s === n.ESCAPE_CHAR) {
                    if (!(s = u[++a])) break;
                    o = !1;
                  }

                  var l = o ? new ce({
                    parent: this,
                    lazy: this.lazy,
                    placeholderChar: this.placeholderChar,
                    mask: e[s],
                    isOptional: i
                  }) : new fe({
                    "char": s,
                    isUnmasking: r
                  });

                  this._blocks.push(l);
                } else i = !i;
              } else r = !r;
            } else this._stops.push(this._blocks.length);
          }
        }
      }, {
        key: "state",
        get: function get() {
          return Object.assign({}, Wt(Gt(n.prototype), "state", this), {
            _blocks: this._blocks.map(function (t) {
              return t.state;
            })
          });
        },
        set: function set(t) {
          var e = t._blocks,
              u = Yt(t, ["_blocks"]);
          this._blocks.forEach(function (t, n) {
            return t.state = e[n];
          }), Xt(Gt(n.prototype), "state", u, this, !0);
        }
      }, {
        key: "reset",
        value: function value() {
          Wt(Gt(n.prototype), "reset", this).call(this), this._blocks.forEach(function (t) {
            return t.reset();
          });
        }
      }, {
        key: "isComplete",
        get: function get() {
          return this._blocks.every(function (t) {
            return t.isComplete;
          });
        }
      }, {
        key: "doCommit",
        value: function value() {
          this._blocks.forEach(function (t) {
            return t.doCommit();
          }), Wt(Gt(n.prototype), "doCommit", this).call(this);
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this._blocks.reduce(function (t, e) {
            return t + e.unmaskedValue;
          }, "");
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", t, this, !0);
        }
      }, {
        key: "value",
        get: function get() {
          return this._blocks.reduce(function (t, e) {
            return t + e.value;
          }, "");
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "value", t, this, !0);
        }
      }, {
        key: "appendTail",
        value: function value(t) {
          return Wt(Gt(n.prototype), "appendTail", this).call(this, t).aggregate(this._appendPlaceholder());
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = this._mapPosToBlock(this.value.length),
              u = new re();

          if (!n) return u;

          for (var r = n.index;; ++r) {
            var i = this._blocks[r];
            if (!i) break;

            var a = i._appendChar(t, e),
                s = a.skip;

            if (u.aggregate(a), s || a.rawInserted) break;
          }

          return u;
        }
      }, {
        key: "extractTail",
        value: function value() {
          var t = this,
              e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              u = new pe();
          return e === n ? u : (this._forEachBlocksInRange(e, n, function (e, n, r, i) {
            var a = e.extractTail(r, i);
            a.stop = t._findStopBefore(n), a.from = t._blockStartPos(n), a instanceof pe && (a.blockIndex = n), u.extend(a);
          }), u);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (t === e) return "";
          var u = "";
          return this._forEachBlocksInRange(t, e, function (t, e, r, i) {
            u += t.extractInput(r, i, n);
          }), u;
        }
      }, {
        key: "_findStopBefore",
        value: function value(t) {
          for (var e, n = 0; n < this._stops.length; ++n) {
            var u = this._stops[n];
            if (!(u <= t)) break;
            e = u;
          }

          return e;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value(t) {
          var e = this,
              n = new re();
          if (this.lazy && null == t) return n;

          var u = this._mapPosToBlock(this.value.length);

          if (!u) return n;
          var r = u.index,
              i = null != t ? t : this._blocks.length;
          return this._blocks.slice(r, i).forEach(function (u) {
            if (!u.lazy || null != t) {
              var r = null != u._blocks ? [u._blocks.length] : [],
                  i = u._appendPlaceholder.apply(u, r);

              e._value += i.inserted, n.aggregate(i);
            }
          }), n;
        }
      }, {
        key: "_mapPosToBlock",
        value: function value(t) {
          for (var e = "", n = 0; n < this._blocks.length; ++n) {
            var u = this._blocks[n],
                r = e.length;
            if (t <= (e += u.value).length) return {
              index: n,
              offset: t - r
            };
          }
        }
      }, {
        key: "_blockStartPos",
        value: function value(t) {
          return this._blocks.slice(0, t).reduce(function (t, e) {
            return t + e.value.length;
          }, 0);
        }
      }, {
        key: "_forEachBlocksInRange",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = arguments.length > 2 ? arguments[2] : void 0,
              u = this._mapPosToBlock(t);

          if (u) {
            var r = this._mapPosToBlock(e),
                i = r && u.index === r.index,
                a = u.offset,
                s = r && i ? r.offset : this._blocks[u.index].value.length;

            if (n(this._blocks[u.index], u.index, a, s), r && !i) {
              for (var o = u.index + 1; o < r.index; ++o) {
                n(this._blocks[o], o, 0, this._blocks[o].value.length);
              }

              n(this._blocks[r.index], r.index, 0, r.offset);
            }
          }
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              u = Wt(Gt(n.prototype), "remove", this).call(this, t, e);
          return this._forEachBlocksInRange(t, e, function (t, e, n, r) {
            u.aggregate(t.remove(n, r));
          }), u;
        }
      }, {
        key: "nearestInputPos",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ee.NONE,
              n = this._mapPosToBlock(t) || {
            index: 0,
            offset: 0
          },
              u = n.offset,
              r = n.index,
              i = this._blocks[r];
          if (!i) return t;
          var a = u;
          0 !== a && a < i.value.length && (a = i.nearestInputPos(u, function (t) {
            switch (t) {
              case ee.LEFT:
                return ee.FORCE_LEFT;

              case ee.RIGHT:
                return ee.FORCE_RIGHT;

              default:
                return t;
            }
          }(e)));
          var s = a === i.value.length;
          if (!(0 === a) && !s) return this._blockStartPos(r) + a;
          var o = s ? r + 1 : r;

          if (e === ee.NONE) {
            if (o > 0) {
              var l = o - 1,
                  h = this._blocks[l],
                  c = h.nearestInputPos(0, ee.NONE);
              if (!h.value.length || c !== h.value.length) return this._blockStartPos(o);
            }

            for (var f = o; f < this._blocks.length; ++f) {
              var p = this._blocks[f],
                  d = p.nearestInputPos(0, ee.NONE);
              if (!p.value.length || d !== p.value.length) return this._blockStartPos(f) + d;
            }

            for (var v = o - 1; v >= 0; --v) {
              var k = this._blocks[v],
                  g = k.nearestInputPos(0, ee.NONE);
              if (!k.value.length || g !== k.value.length) return this._blockStartPos(v) + k.value.length;
            }

            return t;
          }

          if (e === ee.LEFT || e === ee.FORCE_LEFT) {
            for (var y, m = o; m < this._blocks.length; ++m) {
              if (this._blocks[m].value) {
                y = m;
                break;
              }
            }

            if (null != y) {
              var _ = this._blocks[y],
                  A = _.nearestInputPos(0, ee.RIGHT);

              if (0 === A && _.unmaskedValue.length) return this._blockStartPos(y) + A;
            }

            for (var b, E = -1, C = o - 1; C >= 0; --C) {
              var F = this._blocks[C],
                  S = F.nearestInputPos(F.value.length, ee.FORCE_LEFT);

              if (F.value && 0 === S || (b = C), 0 !== S) {
                if (S !== F.value.length) return this._blockStartPos(C) + S;
                E = C;
                break;
              }
            }

            if (e === ee.LEFT) for (var D = E + 1; D <= Math.min(o, this._blocks.length - 1); ++D) {
              var B = this._blocks[D],
                  w = B.nearestInputPos(0, ee.NONE),
                  O = this._blockStartPos(D) + w;
              if (O > t) break;
              if (w !== B.value.length) return O;
            }
            if (E >= 0) return this._blockStartPos(E) + this._blocks[E].value.length;
            if (e === ee.FORCE_LEFT || this.lazy && !this.extractInput() && !function (t) {
              if (!t) return !1;
              var e = t.value;
              return !e || t.nearestInputPos(0, ee.NONE) !== e.length;
            }(this._blocks[o])) return 0;
            if (null != b) return this._blockStartPos(b);

            for (var M = o; M < this._blocks.length; ++M) {
              var T = this._blocks[M],
                  x = T.nearestInputPos(0, ee.NONE);
              if (!T.value.length || x !== T.value.length) return this._blockStartPos(M) + x;
            }

            return 0;
          }

          if (e === ee.RIGHT || e === ee.FORCE_RIGHT) {
            for (var P, I, R = o; R < this._blocks.length; ++R) {
              var j = this._blocks[R],
                  V = j.nearestInputPos(0, ee.NONE);

              if (V !== j.value.length) {
                I = this._blockStartPos(R) + V, P = R;
                break;
              }
            }

            if (null != P && null != I) {
              for (var N = P; N < this._blocks.length; ++N) {
                var L = this._blocks[N],
                    H = L.nearestInputPos(0, ee.FORCE_RIGHT);
                if (H !== L.value.length) return this._blockStartPos(N) + H;
              }

              return e === ee.FORCE_RIGHT ? this.value.length : I;
            }

            for (var U = Math.min(o, this._blocks.length - 1); U >= 0; --U) {
              var G = this._blocks[U],
                  z = G.nearestInputPos(G.value.length, ee.LEFT);

              if (0 !== z) {
                var Y = this._blockStartPos(U) + z;
                if (Y >= t) return Y;
                break;
              }
            }
          }

          return t;
        }
      }, {
        key: "maskedBlock",
        value: function value(t) {
          return this.maskedBlocks(t)[0];
        }
      }, {
        key: "maskedBlocks",
        value: function value(t) {
          var e = this,
              n = this._maskedBlocks[t];
          return n ? n.map(function (t) {
            return e._blocks[t];
          }) : [];
        }
      }]), n;
    }();

    ve.DEFAULTS = {
      lazy: !0,
      placeholderChar: "_"
    }, ve.STOP_CHAR = "`", ve.ESCAPE_CHAR = "\\", ve.InputDefinition = ce, ve.FixedDefinition = fe, ae.MaskedPattern = ve;

    var ke = function (t) {
      Ut(n, ve);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_matchFrom",
        get: function get() {
          return this.maxLength - String(this.from).length;
        }
      }, {
        key: "_update",
        value: function value(t) {
          t = Object.assign({
            to: this.to || 0,
            from: this.from || 0
          }, t);
          var e = String(t.to).length;
          null != t.maxLength && (e = Math.max(e, t.maxLength)), t.maxLength = e;

          for (var u = String(t.from).padStart(e, "0"), r = String(t.to).padStart(e, "0"), i = 0; i < r.length && r[i] === u[i];) {
            ++i;
          }

          t.mask = r.slice(0, i).replace(/0/g, "\\0") + "0".repeat(e - i), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }, {
        key: "isComplete",
        get: function get() {
          return Wt(Gt(n.prototype), "isComplete", this) && Boolean(this.value);
        }
      }, {
        key: "boundaries",
        value: function value(t) {
          var e = "",
              n = "",
              u = Jt(t.match(/^(\D*)(\d*)(\D*)/) || [], 3),
              r = u[1],
              i = u[2];
          return i && (e = "0".repeat(r.length) + i, n = "9".repeat(r.length) + i), [e = e.padEnd(this.maxLength, "0"), n = n.padEnd(this.maxLength, "9")];
        }
      }, {
        key: "doPrepare",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (t = Wt(Gt(n.prototype), "doPrepare", this).call(this, t, e).replace(/\D/g, ""), !this.autofix) return t;

          for (var u = String(this.from).padStart(this.maxLength, "0"), r = String(this.to).padStart(this.maxLength, "0"), i = this.value, a = "", s = 0; s < t.length; ++s) {
            var o = i + a + t[s],
                l = Jt(this.boundaries(o), 2),
                h = l[0],
                c = l[1];
            Number(c) < this.from ? a += u[o.length - 1] : Number(h) > this.to ? a += r[o.length - 1] : a += t[s];
          }

          return a;
        }
      }, {
        key: "doValidate",
        value: function value() {
          var t,
              e = this.value;
          if (-1 === e.search(/[^0]/) && e.length <= this._matchFrom) return !0;

          for (var u = Jt(this.boundaries(e), 2), r = u[0], i = u[1], a = arguments.length, s = new Array(a), o = 0; o < a; o++) {
            s[o] = arguments[o];
          }

          return this.from <= Number(i) && Number(r) <= this.to && (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(s));
        }
      }]), n;
    }();

    ae.MaskedRange = ke;

    var ge = function (t) {
      Ut(n, ve);
      var e = Kt(n);

      function n(t) {
        return Nt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
          var e = t.blocks;
          t.blocks = Object.assign({}, n.GET_DEFAULT_BLOCKS()), t.min && (t.blocks.Y.from = t.min.getFullYear()), t.max && (t.blocks.Y.to = t.max.getFullYear()), t.min && t.max && t.blocks.Y.from === t.blocks.Y.to && (t.blocks.m.from = t.min.getMonth() + 1, t.blocks.m.to = t.max.getMonth() + 1, t.blocks.m.from === t.blocks.m.to && (t.blocks.d.from = t.min.getDate(), t.blocks.d.to = t.max.getDate())), Object.assign(t.blocks, e), Object.keys(t.blocks).forEach(function (e) {
            var n = t.blocks[e];
            "autofix" in n || (n.autofix = t.autofix);
          }), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }, {
        key: "doValidate",
        value: function value() {
          for (var t, e = this.date, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.isComplete || this.isDateExist(this.value) && null != e && (null == this.min || this.min <= e) && (null == this.max || e <= this.max));
        }
      }, {
        key: "isDateExist",
        value: function value(t) {
          return this.format(this.parse(t, this), this).indexOf(t) >= 0;
        }
      }, {
        key: "date",
        get: function get() {
          return this.typedValue;
        },
        set: function set(t) {
          this.typedValue = t;
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.isComplete ? Wt(Gt(n.prototype), "typedValue", this) : null;
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "typedValue", t, this, !0);
        }
      }]), n;
    }();

    ge.DEFAULTS = {
      pattern: "d{.}`m{.}`Y",
      format: function format(t) {
        return [String(t.getDate()).padStart(2, "0"), String(t.getMonth() + 1).padStart(2, "0"), t.getFullYear()].join(".");
      },
      parse: function parse(t) {
        var e = Jt(t.split("."), 3),
            n = e[0],
            u = e[1],
            r = e[2];
        return new Date(r, u - 1, n);
      }
    }, ge.GET_DEFAULT_BLOCKS = function () {
      return {
        d: {
          mask: ke,
          from: 1,
          to: 31,
          maxLength: 2
        },
        m: {
          mask: ke,
          from: 1,
          to: 12,
          maxLength: 2
        },
        Y: {
          mask: ke,
          from: 1900,
          to: 9999
        }
      };
    }, ae.MaskedDate = ge;

    var ye = function () {
      function t() {
        Nt(this, t);
      }

      return Ht(t, [{
        key: "selectionStart",
        get: function get() {
          var t;

          try {
            t = this._unsafeSelectionStart;
          } catch (t) {}

          return null != t ? t : this.value.length;
        }
      }, {
        key: "selectionEnd",
        get: function get() {
          var t;

          try {
            t = this._unsafeSelectionEnd;
          } catch (t) {}

          return null != t ? t : this.value.length;
        }
      }, {
        key: "select",
        value: function value(t, e) {
          if (null != t && null != e && (t !== this.selectionStart || e !== this.selectionEnd)) try {
            this._unsafeSelect(t, e);
          } catch (t) {}
        }
      }, {
        key: "_unsafeSelect",
        value: function value(t, e) {}
      }, {
        key: "isActive",
        get: function get() {
          return !1;
        }
      }, {
        key: "bindEvents",
        value: function value(t) {}
      }, {
        key: "unbindEvents",
        value: function value() {}
      }]), t;
    }();

    ae.MaskElement = ye;

    var me = function (t) {
      Ut(n, ye);
      var e = Kt(n);

      function n(t) {
        var u;
        return Nt(this, n), (u = e.call(this)).input = t, u._handlers = {}, u;
      }

      return Ht(n, [{
        key: "rootElement",
        get: function get() {
          return this.input.getRootNode ? this.input.getRootNode() : document;
        }
      }, {
        key: "isActive",
        get: function get() {
          return this.input === this.rootElement.activeElement;
        }
      }, {
        key: "_unsafeSelectionStart",
        get: function get() {
          return this.input.selectionStart;
        }
      }, {
        key: "_unsafeSelectionEnd",
        get: function get() {
          return this.input.selectionEnd;
        }
      }, {
        key: "_unsafeSelect",
        value: function value(t, e) {
          this.input.setSelectionRange(t, e);
        }
      }, {
        key: "value",
        get: function get() {
          return this.input.value;
        },
        set: function set(t) {
          this.input.value = t;
        }
      }, {
        key: "bindEvents",
        value: function value(t) {
          var e = this;
          Object.keys(t).forEach(function (u) {
            return e._toggleEventHandler(n.EVENTS_MAP[u], t[u]);
          });
        }
      }, {
        key: "unbindEvents",
        value: function value() {
          var t = this;
          Object.keys(this._handlers).forEach(function (e) {
            return t._toggleEventHandler(e);
          });
        }
      }, {
        key: "_toggleEventHandler",
        value: function value(t, e) {
          this._handlers[t] && (this.input.removeEventListener(t, this._handlers[t]), delete this._handlers[t]), e && (this.input.addEventListener(t, e), this._handlers[t] = e);
        }
      }]), n;
    }();

    me.EVENTS_MAP = {
      selectionChange: "keydown",
      input: "input",
      drop: "drop",
      click: "click",
      focus: "focus",
      commit: "blur"
    }, ae.HTMLMaskElement = me;

    var _e = function (t) {
      Ut(n, me);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_unsafeSelectionStart",
        get: function get() {
          var t = this.rootElement,
              e = t.getSelection && t.getSelection();
          return e && e.anchorOffset;
        }
      }, {
        key: "_unsafeSelectionEnd",
        get: function get() {
          var t = this.rootElement,
              e = t.getSelection && t.getSelection();
          return e && this._unsafeSelectionStart + String(e).length;
        }
      }, {
        key: "_unsafeSelect",
        value: function value(t, e) {
          if (this.rootElement.createRange) {
            var n = this.rootElement.createRange();
            n.setStart(this.input.firstChild || this.input, t), n.setEnd(this.input.lastChild || this.input, e);
            var u = this.rootElement,
                r = u.getSelection && u.getSelection();
            r && (r.removeAllRanges(), r.addRange(n));
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this.input.textContent;
        },
        set: function set(t) {
          this.input.textContent = t;
        }
      }]), n;
    }();

    ae.HTMLContenteditableMaskElement = _e;

    var Ae = function () {
      function t(e, n) {
        Nt(this, t), this.el = e instanceof ye ? e : e.isContentEditable && "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName ? new _e(e) : new me(e), this.masked = le(n), this._listeners = {}, this._value = "", this._unmaskedValue = "", this._saveSelection = this._saveSelection.bind(this), this._onInput = this._onInput.bind(this), this._onChange = this._onChange.bind(this), this._onDrop = this._onDrop.bind(this), this._onFocus = this._onFocus.bind(this), this._onClick = this._onClick.bind(this), this.alignCursor = this.alignCursor.bind(this), this.alignCursorFriendly = this.alignCursorFriendly.bind(this), this._bindEvents(), this.updateValue(), this._onChange();
      }

      return Ht(t, [{
        key: "mask",
        get: function get() {
          return this.masked.mask;
        },
        set: function set(t) {
          if (!this.maskEquals(t)) if (t instanceof ae.Masked || this.masked.constructor !== oe(t)) {
            var e = le({
              mask: t
            });
            e.unmaskedValue = this.masked.unmaskedValue, this.masked = e;
          } else this.masked.updateOptions({
            mask: t
          });
        }
      }, {
        key: "maskEquals",
        value: function value(t) {
          return null == t || t === this.masked.mask || t === Date && this.masked instanceof ge;
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(t) {
          this.masked.value = t, this.updateControl(), this.alignCursor();
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this._unmaskedValue;
        },
        set: function set(t) {
          this.masked.unmaskedValue = t, this.updateControl(), this.alignCursor();
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.masked.typedValue;
        },
        set: function set(t) {
          this.masked.typedValue = t, this.updateControl(), this.alignCursor();
        }
      }, {
        key: "_bindEvents",
        value: function value() {
          this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange
          });
        }
      }, {
        key: "_unbindEvents",
        value: function value() {
          this.el && this.el.unbindEvents();
        }
      }, {
        key: "_fireEvent",
        value: function value(t) {
          for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++) {
            n[u - 1] = arguments[u];
          }

          var r = this._listeners[t];
          r && r.forEach(function (t) {
            return t.apply(void 0, n);
          });
        }
      }, {
        key: "selectionStart",
        get: function get() {
          return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
        }
      }, {
        key: "cursorPos",
        get: function get() {
          return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
        },
        set: function set(t) {
          this.el && this.el.isActive && (this.el.select(t, t), this._saveSelection());
        }
      }, {
        key: "_saveSelection",
        value: function value() {
          this.value !== this.el.value && console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."), this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
          };
        }
      }, {
        key: "updateValue",
        value: function value() {
          this.masked.value = this.el.value, this._value = this.masked.value;
        }
      }, {
        key: "updateControl",
        value: function value() {
          var t = this.masked.unmaskedValue,
              e = this.masked.value,
              n = this.unmaskedValue !== t || this.value !== e;
          this._unmaskedValue = t, this._value = e, this.el.value !== e && (this.el.value = e), n && this._fireChangeEvents();
        }
      }, {
        key: "updateOptions",
        value: function value(t) {
          var e = t.mask,
              n = Yt(t, ["mask"]),
              u = !this.maskEquals(e),
              r = !function t(e, n) {
            if (n === e) return !0;
            var u,
                r = Array.isArray(n),
                i = Array.isArray(e);

            if (r && i) {
              if (n.length != e.length) return !1;

              for (u = 0; u < n.length; u++) {
                if (!t(n[u], e[u])) return !1;
              }

              return !0;
            }

            if (r != i) return !1;

            if (n && e && "object" === Vt(n) && "object" === Vt(e)) {
              var a = n instanceof Date,
                  s = e instanceof Date;
              if (a && s) return n.getTime() == e.getTime();
              if (a != s) return !1;
              var o = n instanceof RegExp,
                  l = e instanceof RegExp;
              if (o && l) return n.toString() == e.toString();
              if (o != l) return !1;
              var h = Object.keys(n);

              for (u = 0; u < h.length; u++) {
                if (!Object.prototype.hasOwnProperty.call(e, h[u])) return !1;
              }

              for (u = 0; u < h.length; u++) {
                if (!t(e[h[u]], n[h[u]])) return !1;
              }

              return !0;
            }

            return !(!n || !e || "function" != typeof n || "function" != typeof e) && n.toString() === e.toString();
          }(this.masked, n);
          u && (this.mask = e), r && this.masked.updateOptions(n), (u || r) && this.updateControl();
        }
      }, {
        key: "updateCursor",
        value: function value(t) {
          null != t && (this.cursorPos = t, this._delayUpdateCursor(t));
        }
      }, {
        key: "_delayUpdateCursor",
        value: function value(t) {
          var e = this;
          this._abortUpdateCursor(), this._changingCursorPos = t, this._cursorChanging = setTimeout(function () {
            e.el && (e.cursorPos = e._changingCursorPos, e._abortUpdateCursor());
          }, 10);
        }
      }, {
        key: "_fireChangeEvents",
        value: function value() {
          this._fireEvent("accept", this._inputEvent), this.masked.isComplete && this._fireEvent("complete", this._inputEvent);
        }
      }, {
        key: "_abortUpdateCursor",
        value: function value() {
          this._cursorChanging && (clearTimeout(this._cursorChanging), delete this._cursorChanging);
        }
      }, {
        key: "alignCursor",
        value: function value() {
          this.cursorPos = this.masked.nearestInputPos(this.cursorPos, ee.LEFT);
        }
      }, {
        key: "alignCursorFriendly",
        value: function value() {
          this.selectionStart === this.cursorPos && this.alignCursor();
        }
      }, {
        key: "on",
        value: function value(t, e) {
          return this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e), this;
        }
      }, {
        key: "off",
        value: function value(t, e) {
          if (!this._listeners[t]) return this;
          if (!e) return delete this._listeners[t], this;

          var n = this._listeners[t].indexOf(e);

          return n >= 0 && this._listeners[t].splice(n, 1), this;
        }
      }, {
        key: "_onInput",
        value: function value(t) {
          if (this._inputEvent = t, this._abortUpdateCursor(), !this._selection) return this.updateValue();
          var e = new ue(this.el.value, this.cursorPos, this.value, this._selection),
              n = this.masked.rawInputValue,
              u = this.masked.splice(e.startChangePos, e.removed.length, e.inserted, e.removeDirection).offset,
              r = n === this.masked.rawInputValue ? e.removeDirection : ee.NONE,
              i = this.masked.nearestInputPos(e.startChangePos + u, r);
          this.updateControl(), this.updateCursor(i), delete this._inputEvent;
        }
      }, {
        key: "_onChange",
        value: function value() {
          this.value !== this.el.value && this.updateValue(), this.masked.doCommit(), this.updateControl(), this._saveSelection();
        }
      }, {
        key: "_onDrop",
        value: function value(t) {
          t.preventDefault(), t.stopPropagation();
        }
      }, {
        key: "_onFocus",
        value: function value(t) {
          this.alignCursorFriendly();
        }
      }, {
        key: "_onClick",
        value: function value(t) {
          this.alignCursorFriendly();
        }
      }, {
        key: "destroy",
        value: function value() {
          this._unbindEvents(), this._listeners.length = 0, delete this.el;
        }
      }]), t;
    }();

    ae.InputMask = Ae;

    var be = function (t) {
      Ut(n, ve);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t["enum"] && (t.mask = "*".repeat(t["enum"][0].length)), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }, {
        key: "doValidate",
        value: function value() {
          for (var t, e = this, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return this["enum"].some(function (t) {
            return t.indexOf(e.unmaskedValue) >= 0;
          }) && (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r));
        }
      }]), n;
    }();

    ae.MaskedEnum = be;

    var Ee = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n(t) {
        return Nt(this, n), e.call(this, Object.assign({}, n.DEFAULTS, t));
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          Wt(Gt(n.prototype), "_update", this).call(this, t), this._updateRegExps();
        }
      }, {
        key: "_updateRegExps",
        value: function value() {
          var t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
              e = (this.scale ? "(" + ne(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
          this._numberRegExpInput = new RegExp(t + "(0|([1-9]+\\d*))?" + e), this._numberRegExp = new RegExp(t + "\\d*" + e), this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(ne).join("") + "]", "g"), this._thousandsSeparatorRegExp = new RegExp(ne(this.thousandsSeparator), "g");
        }
      }, {
        key: "_removeThousandsSeparators",
        value: function value(t) {
          return t.replace(this._thousandsSeparatorRegExp, "");
        }
      }, {
        key: "_insertThousandsSeparators",
        value: function value(t) {
          var e = t.split(this.radix);
          return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator), e.join(this.radix);
        }
      }, {
        key: "doPrepare",
        value: function value(t) {
          for (var e, u = arguments.length, r = new Array(u > 1 ? u - 1 : 0), i = 1; i < u; i++) {
            r[i - 1] = arguments[i];
          }

          return (e = Wt(Gt(n.prototype), "doPrepare", this)).call.apply(e, [this, this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp, this.radix))].concat(r));
        }
      }, {
        key: "_separatorsCount",
        value: function value(t) {
          for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = 0, u = 0; u < t; ++u) {
            this._value.indexOf(this.thousandsSeparator, u) === u && (++n, e && (t += this.thousandsSeparator.length));
          }

          return n;
        }
      }, {
        key: "_separatorsCountFromSlice",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._value;
          return this._separatorsCount(this._removeThousandsSeparators(t).length, !0);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              u = arguments.length > 2 ? arguments[2] : void 0,
              r = Jt(this._adjustRangeWithSeparators(t, e), 2);
          return t = r[0], e = r[1], this._removeThousandsSeparators(Wt(Gt(n.prototype), "extractInput", this).call(this, t, e, u));
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!this.thousandsSeparator) return Wt(Gt(n.prototype), "_appendCharRaw", this).call(this, t, e);

          var u = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
              r = this._separatorsCountFromSlice(u);

          this._value = this._removeThousandsSeparators(this.value);
          var i = Wt(Gt(n.prototype), "_appendCharRaw", this).call(this, t, e);
          this._value = this._insertThousandsSeparators(this._value);

          var a = e.tail && e._beforeTailState ? e._beforeTailState._value : this._value,
              s = this._separatorsCountFromSlice(a);

          return i.tailShift += (s - r) * this.thousandsSeparator.length, i.skip = !i.rawInserted && t === this.thousandsSeparator, i;
        }
      }, {
        key: "_findSeparatorAround",
        value: function value(t) {
          if (this.thousandsSeparator) {
            var e = t - this.thousandsSeparator.length + 1,
                n = this.value.indexOf(this.thousandsSeparator, e);
            if (n <= t) return n;
          }

          return -1;
        }
      }, {
        key: "_adjustRangeWithSeparators",
        value: function value(t, e) {
          var n = this._findSeparatorAround(t);

          n >= 0 && (t = n);

          var u = this._findSeparatorAround(e);

          return u >= 0 && (e = u + this.thousandsSeparator.length), [t, e];
        }
      }, {
        key: "remove",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.value.length,
              n = Jt(this._adjustRangeWithSeparators(t, e), 2);
          t = n[0], e = n[1];

          var u = this.value.slice(0, t),
              r = this.value.slice(e),
              i = this._separatorsCount(u.length);

          this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(u + r));

          var a = this._separatorsCountFromSlice(u);

          return new re({
            tailShift: (a - i) * this.thousandsSeparator.length
          });
        }
      }, {
        key: "nearestInputPos",
        value: function value(t, e) {
          if (!this.thousandsSeparator) return t;

          switch (e) {
            case ee.NONE:
            case ee.LEFT:
            case ee.FORCE_LEFT:
              var n = this._findSeparatorAround(t - 1);

              if (n >= 0) {
                var u = n + this.thousandsSeparator.length;
                if (t < u || this.value.length <= u || e === ee.FORCE_LEFT) return n;
              }

              break;

            case ee.RIGHT:
            case ee.FORCE_RIGHT:
              var r = this._findSeparatorAround(t);

              if (r >= 0) return r + this.thousandsSeparator.length;
          }

          return t;
        }
      }, {
        key: "doValidate",
        value: function value(t) {
          var e = (t.input ? this._numberRegExpInput : this._numberRegExp).test(this._removeThousandsSeparators(this.value));

          if (e) {
            var u = this.number;
            e = e && !isNaN(u) && (null == this.min || this.min >= 0 || this.min <= this.number) && (null == this.max || this.max <= 0 || this.number <= this.max);
          }

          return e && Wt(Gt(n.prototype), "doValidate", this).call(this, t);
        }
      }, {
        key: "doCommit",
        value: function value() {
          if (this.value) {
            var t = this.number,
                e = t;
            null != this.min && (e = Math.max(e, this.min)), null != this.max && (e = Math.min(e, this.max)), e !== t && (this.unmaskedValue = String(e));
            var u = this.value;
            this.normalizeZeros && (u = this._normalizeZeros(u)), this.padFractionalZeros && (u = this._padFractionalZeros(u)), this._value = u;
          }

          Wt(Gt(n.prototype), "doCommit", this).call(this);
        }
      }, {
        key: "_normalizeZeros",
        value: function value(t) {
          var e = this._removeThousandsSeparators(t).split(this.radix);

          return e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, function (t, e, n, u) {
            return e + u;
          }), t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"), e.length > 1 && (e[1] = e[1].replace(/0*$/, ""), e[1].length || (e.length = 1)), this._insertThousandsSeparators(e.join(this.radix));
        }
      }, {
        key: "_padFractionalZeros",
        value: function value(t) {
          if (!t) return t;
          var e = t.split(this.radix);
          return e.length < 2 && e.push(""), e[1] = e[1].padEnd(this.scale, "0"), e.join(this.radix);
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", t.replace(".", this.radix), this, !0);
        }
      }, {
        key: "typedValue",
        get: function get() {
          return Number(this.unmaskedValue);
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", String(t), this, !0);
        }
      }, {
        key: "number",
        get: function get() {
          return this.typedValue;
        },
        set: function set(t) {
          this.typedValue = t;
        }
      }, {
        key: "allowNegative",
        get: function get() {
          return this.signed || null != this.min && this.min < 0 || null != this.max && this.max < 0;
        }
      }]), n;
    }();

    Ee.DEFAULTS = {
      radix: ",",
      thousandsSeparator: "",
      mapToRadix: ["."],
      scale: 2,
      signed: !1,
      normalizeZeros: !0,
      padFractionalZeros: !1
    }, ae.MaskedNumber = Ee;

    var Ce = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n() {
        return Nt(this, n), e.apply(this, arguments);
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          t.mask && (t.validate = t.mask), Wt(Gt(n.prototype), "_update", this).call(this, t);
        }
      }]), n;
    }();

    ae.MaskedFunction = Ce;

    var Fe = function (t) {
      Ut(n, se);
      var e = Kt(n);

      function n(t) {
        var u;
        return Nt(this, n), (u = e.call(this, Object.assign({}, n.DEFAULTS, t))).currentMask = null, u;
      }

      return Ht(n, [{
        key: "_update",
        value: function value(t) {
          Wt(Gt(n.prototype), "_update", this).call(this, t), "mask" in t && (this.compiledMasks = Array.isArray(t.mask) ? t.mask.map(function (t) {
            return le(t);
          }) : []);
        }
      }, {
        key: "_appendCharRaw",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = this._applyDispatch(t, e);

          return this.currentMask && n.aggregate(this.currentMask._appendChar(t, e)), n;
        }
      }, {
        key: "_applyDispatch",
        value: function value() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.tail && null != e._beforeTailState ? e._beforeTailState._value : this.value,
              u = this.rawInputValue,
              r = e.tail && null != e._beforeTailState ? e._beforeTailState._rawInputValue : u,
              i = u.slice(r.length),
              a = this.currentMask,
              s = new re(),
              o = a && a.state;
          if (this.currentMask = this.doDispatch(t, Object.assign({}, e)), this.currentMask) if (this.currentMask !== a) {
            if (this.currentMask.reset(), r) {
              var l = this.currentMask.append(r, {
                raw: !0
              });
              s.tailShift = l.inserted.length - n.length;
            }

            i && (s.tailShift += this.currentMask.append(i, {
              raw: !0,
              tail: !0
            }).tailShift);
          } else this.currentMask.state = o;
          return s;
        }
      }, {
        key: "_appendPlaceholder",
        value: function value() {
          var t = this._applyDispatch.apply(this, arguments);

          return this.currentMask && t.aggregate(this.currentMask._appendPlaceholder()), t;
        }
      }, {
        key: "doDispatch",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.dispatch(t, this, e);
        }
      }, {
        key: "doValidate",
        value: function value() {
          for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return (t = Wt(Gt(n.prototype), "doValidate", this)).call.apply(t, [this].concat(r)) && (!this.currentMask || (e = this.currentMask).doValidate.apply(e, r));
        }
      }, {
        key: "reset",
        value: function value() {
          this.currentMask && this.currentMask.reset(), this.compiledMasks.forEach(function (t) {
            return t.reset();
          });
        }
      }, {
        key: "value",
        get: function get() {
          return this.currentMask ? this.currentMask.value : "";
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "value", t, this, !0);
        }
      }, {
        key: "unmaskedValue",
        get: function get() {
          return this.currentMask ? this.currentMask.unmaskedValue : "";
        },
        set: function set(t) {
          Xt(Gt(n.prototype), "unmaskedValue", t, this, !0);
        }
      }, {
        key: "typedValue",
        get: function get() {
          return this.currentMask ? this.currentMask.typedValue : "";
        },
        set: function set(t) {
          var e = String(t);
          this.currentMask && (this.currentMask.typedValue = t, e = this.currentMask.unmaskedValue), this.unmaskedValue = e;
        }
      }, {
        key: "isComplete",
        get: function get() {
          return !!this.currentMask && this.currentMask.isComplete;
        }
      }, {
        key: "remove",
        value: function value() {
          var t,
              e = new re();
          this.currentMask && e.aggregate((t = this.currentMask).remove.apply(t, arguments)).aggregate(this._applyDispatch());
          return e;
        }
      }, {
        key: "state",
        get: function get() {
          return Object.assign({}, Wt(Gt(n.prototype), "state", this), {
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map(function (t) {
              return t.state;
            }),
            currentMaskRef: this.currentMask,
            currentMask: this.currentMask && this.currentMask.state
          });
        },
        set: function set(t) {
          var e = t.compiledMasks,
              u = t.currentMaskRef,
              r = t.currentMask,
              i = Yt(t, ["compiledMasks", "currentMaskRef", "currentMask"]);
          this.compiledMasks.forEach(function (t, n) {
            return t.state = e[n];
          }), null != u && (this.currentMask = u, this.currentMask.state = r), Xt(Gt(n.prototype), "state", i, this, !0);
        }
      }, {
        key: "extractInput",
        value: function value() {
          var t;
          return this.currentMask ? (t = this.currentMask).extractInput.apply(t, arguments) : "";
        }
      }, {
        key: "extractTail",
        value: function value() {
          for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return this.currentMask ? (t = this.currentMask).extractTail.apply(t, r) : (e = Wt(Gt(n.prototype), "extractTail", this)).call.apply(e, [this].concat(r));
        }
      }, {
        key: "doCommit",
        value: function value() {
          this.currentMask && this.currentMask.doCommit(), Wt(Gt(n.prototype), "doCommit", this).call(this);
        }
      }, {
        key: "nearestInputPos",
        value: function value() {
          for (var t, e, u = arguments.length, r = new Array(u), i = 0; i < u; i++) {
            r[i] = arguments[i];
          }

          return this.currentMask ? (t = this.currentMask).nearestInputPos.apply(t, r) : (e = Wt(Gt(n.prototype), "nearestInputPos", this)).call.apply(e, [this].concat(r));
        }
      }, {
        key: "overwrite",
        get: function get() {
          return this.currentMask ? this.currentMask.overwrite : Wt(Gt(n.prototype), "overwrite", this);
        },
        set: function set(t) {
          console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
        }
      }]), n;
    }();

    Fe.DEFAULTS = {
      dispatch: function dispatch(t, e, n) {
        if (e.compiledMasks.length) {
          var u = e.rawInputValue,
              r = e.compiledMasks.map(function (e, r) {
            return e.reset(), e.append(u, {
              raw: !0
            }), e.append(t, n), {
              weight: e.rawInputValue.length,
              index: r
            };
          });
          return r.sort(function (t, e) {
            return e.weight - t.weight;
          }), e.compiledMasks[r[0].index];
        }
      }
    }, ae.MaskedDynamic = Fe;
    var Se = {
      MASKED: "value",
      UNMASKED: "unmaskedValue",
      TYPED: "typedValue"
    };

    function De(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Se.MASKED,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Se.MASKED,
          u = le(t);
      return function (t) {
        return u.runIsolated(function (u) {
          return u[e] = t, u[n];
        });
      };
    }

    function Be(t) {
      for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++) {
        n[u - 1] = arguments[u];
      }

      return De.apply(void 0, n)(t);
    }

    ae.PIPE_TYPE = Se, ae.createPipe = De, ae.pipe = Be;

    try {
      globalThis.IMask = ae;
    } catch (t) {}

    t.HTMLContenteditableMaskElement = _e, t.HTMLMaskElement = me, t.InputMask = Ae, t.MaskElement = ye, t.Masked = se, t.MaskedDate = ge, t.MaskedDynamic = Fe, t.MaskedEnum = be, t.MaskedFunction = Ce, t.MaskedNumber = Ee, t.MaskedPattern = ve, t.MaskedRange = ke, t.MaskedRegExp = de, t.PIPE_TYPE = Se, t.createMask = le, t.createPipe = De, t["default"] = ae, t.pipe = Be, Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }); // var phoneMask = IMask(
  // 	document.getElementById('input-phone'), {
  // 	  mask: '+{7}(000)000-00-00'
  // });

  var inpPhones = document.getElementsByClassName("inp-phone");

  for (var i = 0; i < inpPhones.length; i++) {
    new IMask(inpPhones[i], {
      mask: '+{7}(000)000-00-00',
      placeholder: {
        show: 'always'
      }
    });
  } // модальные окна
  // ДОБАВЛЯЕТ ИЛИ УБИРАЕТ ОТСТУП СПРАВА
  // при октрытии формы, чтобы избежать скачка контента
  // На viewport больше 1320 добавляет отступы
  // На viewport меньше 992 (мобильном) убирает вообще такую возможность


  var popupBodys = Array.prototype.slice.call(document.querySelectorAll('.popup-op'));
  var btnUp = document.querySelector('.btnUp-container');
  var mainHeader = document.querySelector('.header');

  function paddingRight() {
    var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (viewport_width >= 1320) {
      document.body.classList.add('paddingRight');

      if (mainHeader.classList.contains('header--fixed')) {
        mainHeader.classList.add('paddingRight');
      } else {
        mainHeader.classList.remove('paddingRight');
      }

      ;
      btnUp.classList.add('paddingRight');
      popupBodys.forEach(function (item) {
        item.classList.add('marginLeftPop');
      });
    }

    if (viewport_width <= 992) {
      document.body.classList.remove('paddingRight');
      mainHeader.classList.remove('paddingRight');
      btnUp.classList.remove('paddingRight');
      popupBodys.forEach(function (item) {
        item.classList.remove('marginLeftPop');
      });
    }
  }

  function removePaddingRight() {
    document.body.classList.remove('paddingRight');
    mainHeader.classList.remove('paddingRight');
    btnUp.classList.remove('paddingRight');
    popupBodys.forEach(function (item) {
      item.classList.remove('marginLeftPop');
    });
  }

  var popups = function popups() {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
      var triggers = Array.prototype.slice.call(document.querySelectorAll(triggerSelector));
      var modal = document.querySelector(modalSelector);
      var btnsclose = Array.prototype.slice.call(document.querySelectorAll(closeSelector));
      btnsclose.forEach(function (item) {
        item.addEventListener('click', closeModal);
      });
      triggers.forEach(function (item) {
        item.addEventListener('click', openModal);
      });
      popupBodys.forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (e.target === item) {
            closeModal();
          }
        });
      });
      document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
          closeModal();
        }

        ;
      }, false);

      function openModal() {
        modal.classList.add('popup--opened');
        document.body.classList.add('overflow-hidden');
        paddingRight();
      }

      function closeModal() {
        modal.classList.remove('popup--opened');
        document.body.classList.remove('overflow-hidden');
        removePaddingRight();
      }

      ;
    }

    bindModal('.header__call-btn', '.popup-callback', '.popup-close');
    bindModal('.burger__call-btn', '.popup-callback', '.popup-close');
    bindModal('.burger__call-btn', '.popup-callback', '.popup-close');
    bindModal('.banner__call-btn', '.popup-callback', '.popup-close');
    bindModal('.final__call-btn', '.popup-callback', '.popup-close');
    bindModal('.link__call-btn', '.popup-callback', '.popup-close');
    bindModal('.btn-signup', '.popup-callback', '.popup-close');
    bindModal('.btn-card', '.popup-content', '.popup-close');
  }; // ==========


  var mainForm = document.querySelector('#form');
  var inputName1 = document.querySelector('#input-name1');
  var inputPhone1 = document.querySelector('#input-phone1'); // const secondForm = document.querySelector('#form2');
  // const inputName2 = document.querySelector('#input-name2');
  // const inputPhone2 = document.querySelector('#input-phone2');
  // const inputMail = document.querySelector('#input-mail');
  // const inputPassword1 = document.querySelector('#input-password1');
  // const inputPassword2 = document.querySelector('#input-password2');
  // Проверка поля

  function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
      if (input.value.trim() === '') {
        showError(input, 'Ошибка');
      } else {
        showSuccess(input);
      }
    });
  }

  function checkRequiredOne(input) {
    if (input.value.trim() === '') {
      showError(input, 'Ошибка');
    } else {
      showSuccess(input);
    }
  } // Проверка длины


  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(input, 'Коротко');
    } else if (input.value.length > max) {
      showError(input, 'Много');
    } else {
      showSuccess(input);
    }
  } // Показать ошибку


  function showError(input, message) {
    var formControl = input.parentElement.parentElement;
    formControl.className = 'input-container error';
    var small = formControl.querySelector('small');
    small.innerText = message;
  } // Показать успех


  function showSuccess(input, message) {
    var formControl = input.parentElement.parentElement;
    formControl.className = 'input-container success';
  } // Проверка почты
  // function checkEmail(input) {
  // 	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // 	if (re.test(input.value)) {
  // 		showSuccess(input);
  // 	} else {
  // 		showError(input, 'Недопустимо')
  // 	}
  // }
  // Проверка пароля
  // function checkPasswordsMatch(input1, input2) {
  // 	if (input1.value !== input2.value) {
  // 		showError(input2, 'Не совпадает')
  // 	}
  // }


  mainForm.addEventListener('submit', function (e) {
    e.preventDefault();
    checkRequired([inputName1, inputPhone1]);
    checkLength(inputName1, 2, 20);
    checkLength(inputPhone1, 16, 20); // checkEmail(inputMail);
    // checkPasswordsMatch(inputPassword1, inputPassword2);
  }); // secondForm.addEventListener('submit', function(e) {
  // 	e.preventDefault();
  // 	checkRequired([inputName2, inputPhone2]);
  // 	checkLength(inputName2, 2, 20);
  // 	checkLength(inputPhone2, 16, 20);
  // })
  // Бургер меню

  var body = document.querySelector('body');
  var overlay = document.querySelector('.overlay');
  var navIcon = document.querySelector('.menu-btn');
  var closeBurgerMenu = document.querySelector('.close-burger');
  var burgerNav = document.querySelector('.burger-menu__block');
  var burgerItems = Array.prototype.slice.call(document.querySelectorAll('.burger-menu__items span'));
  navIcon.addEventListener('click', function () {
    this.classList.add('open-burger');
    overlay.classList.add('show');
    burgerNav.classList.add('show');
    body.classList.add('overflow-hidden');
    paddingRight(); // В файле popups.js
  });

  function closeNav() {
    navIcon.classList.remove('open-burger');
    overlay.classList.remove('show');
    burgerNav.classList.remove('show');
    body.classList.remove('overflow-hidden');
    removePaddingRight(); //В файле popups.js
  }

  overlay.addEventListener('click', closeNav);
  closeBurgerMenu.addEventListener('click', closeNav);
  burgerItems.forEach(function (item) {
    item.addEventListener('click', closeNav);
  }); //КНОПКА ЗАЯВКИ В БУРГЕР-МЕНЮ

  var burgerCallBtn = document.querySelector('.burger__call-btn');
  burgerCallBtn.addEventListener('click', function () {
    overlay.classList.remove('show');
    burgerNav.classList.remove('show');
    navIcon.classList.remove('open-burger');
    removePaddingRight();
  }); // ==========
  // ШАПКА ПРИ СКРОЛЕ

  window.onscroll = function () {
    myFunction();
  };

  var header = document.querySelector(".header");
  var headerWrap = document.querySelector('#first-screen');
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("header--fixed");
      headerWrap.style.paddingTop = "75px";
    } else {
      header.classList.remove("header--fixed");
      headerWrap.style.paddingTop = "0px";
    }
  }

  ; // ==========
  // Кнопка вверх

  var scrolled;
  var timer;

  document.querySelector('.btn-up').onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }

  ; // ==========
  // ЯКОРЯ ДЛЯ МЕНЮ //

  function smoothScroll(target, duration) {
    var targetItem = document.querySelector(target);
    var targetItemPosition = targetItem.getBoundingClientRect().top + window.pageYOffset;
    var targetStartPosition = window.pageYOffset;
    var distance = targetItemPosition - targetStartPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, targetStartPosition, distance, duration);
      window.scroll(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  } // Это кнопки меню, которые скролят до нужного блока


  var mainAnchor = document.querySelector('.main-anchor');
  var block2Anchor = document.querySelector('.block2-anchor');
  var block3Anchor = document.querySelector('.block3-anchor');
  var block4Anchor = document.querySelector('.block4-anchor');
  var block5Anchor = document.querySelector('.block5-anchor');
  var block6Anchor = document.querySelector('.block6-anchor');
  mainAnchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('.main-target', 1000);
  });
  block2Anchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('.block2-target', 1000);
  });
  block3Anchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('.block3-target', 1000);
  });
  block4Anchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('.block4-target', 1000);
  });
  block5Anchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('.block5-target', 1000);
  });
  block6Anchor.addEventListener('click', function () {
    // Тут вставляешь название блока куда скролить
    smoothScroll('.block6-target', 1000);
  }); // // ==========

  /**
   * Swiper 6.7.5
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * https://swiperjs.com
   *
   * Copyright 2014-2021 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: July 1, 2021
   */

  !function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
  }(_this, function () {
    "use strict";

    function e(e, t) {
      for (var a = 0; a < t.length; a++) {
        var i = t[a];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function t() {
      return (t = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = arguments[t];

          for (var i in a) {
            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    function a(e) {
      return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
    }

    function i(e, t) {
      void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach(function (s) {
        void 0 === e[s] ? e[s] = t[s] : a(t[s]) && a(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s]);
      });
    }

    var s = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ""
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      }
    };

    function r() {
      var e = "undefined" != typeof document ? document : {};
      return i(e, s), e;
    }

    var n = {
      document: s,
      navigator: {
        userAgent: ""
      },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return "";
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      },
      requestAnimationFrame: function requestAnimationFrame(e) {
        return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
      },
      cancelAnimationFrame: function cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      }
    };

    function l() {
      var e = "undefined" != typeof window ? window : {};
      return i(e, n), e;
    }

    function o(e) {
      return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }

    function d(e, t) {
      return (d = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }

    function p() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function u(e, t, a) {
      return (u = p() ? Reflect.construct : function (e, t, a) {
        var i = [null];
        i.push.apply(i, t);
        var s = new (Function.bind.apply(e, i))();
        return a && d(s, a.prototype), s;
      }).apply(null, arguments);
    }

    function c(e) {
      var t = "function" == typeof Map ? new Map() : void 0;
      return (c = function c(e) {
        if (null === e || (a = e, -1 === Function.toString.call(a).indexOf("[native code]"))) return e;
        var a;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== t) {
          if (t.has(e)) return t.get(e);
          t.set(e, i);
        }

        function i() {
          return u(e, arguments, o(this).constructor);
        }

        return i.prototype = Object.create(e.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), d(i, e);
      })(e);
    }

    var h = function (e) {
      var t, a;

      function i(t) {
        var a, i, s;
        return a = e.call.apply(e, [this].concat(t)) || this, i = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }(a), s = i.__proto__, Object.defineProperty(i, "__proto__", {
          get: function get() {
            return s;
          },
          set: function set(e) {
            s.__proto__ = e;
          }
        }), a;
      }

      return a = e, (t = i).prototype = Object.create(a.prototype), t.prototype.constructor = t, t.__proto__ = a, i;
    }(c(Array));

    function v(e) {
      void 0 === e && (e = []);
      var t = [];
      return e.forEach(function (e) {
        Array.isArray(e) ? t.push.apply(t, v(e)) : t.push(e);
      }), t;
    }

    function f(e, t) {
      return Array.prototype.filter.call(e, t);
    }

    function m(e, t) {
      var a = l(),
          i = r(),
          s = [];
      if (!t && e instanceof h) return e;
      if (!e) return new h(s);

      if ("string" == typeof e) {
        var n = e.trim();

        if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
          var o = "div";
          0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select");
          var d = i.createElement(o);
          d.innerHTML = n;

          for (var p = 0; p < d.childNodes.length; p += 1) {
            s.push(d.childNodes[p]);
          }
        } else s = function (e, t) {
          if ("string" != typeof e) return [e];

          for (var a = [], i = t.querySelectorAll(e), s = 0; s < i.length; s += 1) {
            a.push(i[s]);
          }

          return a;
        }(e.trim(), t || i);
      } else if (e.nodeType || e === a || e === i) s.push(e);else if (Array.isArray(e)) {
        if (e instanceof h) return e;
        s = e;
      }

      return new h(function (e) {
        for (var t = [], a = 0; a < e.length; a += 1) {
          -1 === t.indexOf(e[a]) && t.push(e[a]);
        }

        return t;
      }(s));
    }

    m.fn = h.prototype;
    var g,
        b,
        w,
        y = {
      addClass: function addClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
          t[a] = arguments[a];
        }

        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).add.apply(t, i);
        }), this;
      },
      removeClass: function removeClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
          t[a] = arguments[a];
        }

        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        return this.forEach(function (e) {
          var t;
          (t = e.classList).remove.apply(t, i);
        }), this;
      },
      hasClass: function hasClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
          t[a] = arguments[a];
        }

        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        return f(this, function (e) {
          return i.filter(function (t) {
            return e.classList.contains(t);
          }).length > 0;
        }).length > 0;
      },
      toggleClass: function toggleClass() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
          t[a] = arguments[a];
        }

        var i = v(t.map(function (e) {
          return e.split(" ");
        }));
        this.forEach(function (e) {
          i.forEach(function (t) {
            e.classList.toggle(t);
          });
        });
      },
      attr: function attr(e, t) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

        for (var a = 0; a < this.length; a += 1) {
          if (2 === arguments.length) this[a].setAttribute(e, t);else for (var i in e) {
            this[a][i] = e[i], this[a].setAttribute(i, e[i]);
          }
        }

        return this;
      },
      removeAttr: function removeAttr(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].removeAttribute(e);
        }

        return this;
      },
      transform: function transform(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].style.transform = e;
        }

        return this;
      },
      transition: function transition(e) {
        for (var t = 0; t < this.length; t += 1) {
          this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
        }

        return this;
      },
      on: function on() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
          t[a] = arguments[a];
        }

        var i = t[0],
            s = t[1],
            r = t[2],
            n = t[3];

        function l(e) {
          var t = e.target;

          if (t) {
            var a = e.target.dom7EventData || [];
            if (a.indexOf(e) < 0 && a.unshift(e), m(t).is(s)) r.apply(t, a);else for (var i = m(t).parents(), n = 0; n < i.length; n += 1) {
              m(i[n]).is(s) && r.apply(i[n], a);
            }
          }
        }

        function o(e) {
          var t = e && e.target && e.target.dom7EventData || [];
          t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
        }

        "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

        for (var d, p = i.split(" "), u = 0; u < this.length; u += 1) {
          var c = this[u];
          if (s) for (d = 0; d < p.length; d += 1) {
            var h = p[d];
            c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
              listener: r,
              proxyListener: l
            }), c.addEventListener(h, l, n);
          } else for (d = 0; d < p.length; d += 1) {
            var v = p[d];
            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({
              listener: r,
              proxyListener: o
            }), c.addEventListener(v, o, n);
          }
        }

        return this;
      },
      off: function off() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) {
          t[a] = arguments[a];
        }

        var i = t[0],
            s = t[1],
            r = t[2],
            n = t[3];
        "function" == typeof t[1] && (i = t[0], r = t[1], n = t[2], s = void 0), n || (n = !1);

        for (var l = i.split(" "), o = 0; o < l.length; o += 1) {
          for (var d = l[o], p = 0; p < this.length; p += 1) {
            var u = this[p],
                c = void 0;
            if (!s && u.dom7Listeners ? c = u.dom7Listeners[d] : s && u.dom7LiveListeners && (c = u.dom7LiveListeners[d]), c && c.length) for (var h = c.length - 1; h >= 0; h -= 1) {
              var v = c[h];
              r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1)) : r || (u.removeEventListener(d, v.proxyListener, n), c.splice(h, 1));
            }
          }
        }

        return this;
      },
      trigger: function trigger() {
        for (var e = l(), t = arguments.length, a = new Array(t), i = 0; i < t; i++) {
          a[i] = arguments[i];
        }

        for (var s = a[0].split(" "), r = a[1], n = 0; n < s.length; n += 1) {
          for (var o = s[n], d = 0; d < this.length; d += 1) {
            var p = this[d];

            if (e.CustomEvent) {
              var u = new e.CustomEvent(o, {
                detail: r,
                bubbles: !0,
                cancelable: !0
              });
              p.dom7EventData = a.filter(function (e, t) {
                return t > 0;
              }), p.dispatchEvent(u), p.dom7EventData = [], delete p.dom7EventData;
            }
          }
        }

        return this;
      },
      transitionEnd: function transitionEnd(e) {
        var t = this;
        return e && t.on("transitionend", function a(i) {
          i.target === this && (e.call(this, i), t.off("transitionend", a));
        }), this;
      },
      outerWidth: function outerWidth(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
          }

          return this[0].offsetWidth;
        }

        return null;
      },
      outerHeight: function outerHeight(e) {
        if (this.length > 0) {
          if (e) {
            var t = this.styles();
            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
          }

          return this[0].offsetHeight;
        }

        return null;
      },
      styles: function styles() {
        var e = l();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function offset() {
        if (this.length > 0) {
          var e = l(),
              t = r(),
              a = this[0],
              i = a.getBoundingClientRect(),
              s = t.body,
              n = a.clientTop || s.clientTop || 0,
              o = a.clientLeft || s.clientLeft || 0,
              d = a === e ? e.scrollY : a.scrollTop,
              p = a === e ? e.scrollX : a.scrollLeft;
          return {
            top: i.top + d - n,
            left: i.left + p - o
          };
        }

        return null;
      },
      css: function css(e, t) {
        var a,
            i = l();

        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (a = 0; a < this.length; a += 1) {
              for (var s in e) {
                this[a].style[s] = e[s];
              }
            }

            return this;
          }

          if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e);
        }

        if (2 === arguments.length && "string" == typeof e) {
          for (a = 0; a < this.length; a += 1) {
            this[a].style[e] = t;
          }

          return this;
        }

        return this;
      },
      each: function each(e) {
        return e ? (this.forEach(function (t, a) {
          e.apply(t, [t, a]);
        }), this) : this;
      },
      html: function html(e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].innerHTML = e;
        }

        return this;
      },
      text: function text(e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

        for (var t = 0; t < this.length; t += 1) {
          this[t].textContent = e;
        }

        return this;
      },
      is: function is(e) {
        var t,
            a,
            i = l(),
            s = r(),
            n = this[0];
        if (!n || void 0 === e) return !1;

        if ("string" == typeof e) {
          if (n.matches) return n.matches(e);
          if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
          if (n.msMatchesSelector) return n.msMatchesSelector(e);

          for (t = m(e), a = 0; a < t.length; a += 1) {
            if (t[a] === n) return !0;
          }

          return !1;
        }

        if (e === s) return n === s;
        if (e === i) return n === i;

        if (e.nodeType || e instanceof h) {
          for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) {
            if (t[a] === n) return !0;
          }

          return !1;
        }

        return !1;
      },
      index: function index() {
        var e,
            t = this[0];

        if (t) {
          for (e = 0; null !== (t = t.previousSibling);) {
            1 === t.nodeType && (e += 1);
          }

          return e;
        }
      },
      eq: function eq(e) {
        if (void 0 === e) return this;
        var t = this.length;
        if (e > t - 1) return m([]);

        if (e < 0) {
          var a = t + e;
          return m(a < 0 ? [] : [this[a]]);
        }

        return m([this[e]]);
      },
      append: function append() {
        for (var e, t = r(), a = 0; a < arguments.length; a += 1) {
          e = a < 0 || arguments.length <= a ? void 0 : arguments[a];

          for (var i = 0; i < this.length; i += 1) {
            if ("string" == typeof e) {
              var s = t.createElement("div");

              for (s.innerHTML = e; s.firstChild;) {
                this[i].appendChild(s.firstChild);
              }
            } else if (e instanceof h) for (var n = 0; n < e.length; n += 1) {
              this[i].appendChild(e[n]);
            } else this[i].appendChild(e);
          }
        }

        return this;
      },
      prepend: function prepend(e) {
        var t,
            a,
            i = r();

        for (t = 0; t < this.length; t += 1) {
          if ("string" == typeof e) {
            var s = i.createElement("div");

            for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) {
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
            }
          } else if (e instanceof h) for (a = 0; a < e.length; a += 1) {
            this[t].insertBefore(e[a], this[t].childNodes[0]);
          } else this[t].insertBefore(e, this[t].childNodes[0]);
        }

        return this;
      },
      next: function next(e) {
        return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
      },
      nextAll: function nextAll(e) {
        var t = [],
            a = this[0];
        if (!a) return m([]);

        for (; a.nextElementSibling;) {
          var i = a.nextElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
        }

        return m(t);
      },
      prev: function prev(e) {
        if (this.length > 0) {
          var t = this[0];
          return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
        }

        return m([]);
      },
      prevAll: function prevAll(e) {
        var t = [],
            a = this[0];
        if (!a) return m([]);

        for (; a.previousElementSibling;) {
          var i = a.previousElementSibling;
          e ? m(i).is(e) && t.push(i) : t.push(i), a = i;
        }

        return m(t);
      },
      parent: function parent(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          null !== this[a].parentNode && (e ? m(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
        }

        return m(t);
      },
      parents: function parents(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          for (var i = this[a].parentNode; i;) {
            e ? m(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
          }
        }

        return m(t);
      },
      closest: function closest(e) {
        var t = this;
        return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function find(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          try {
            var i = this[a].querySelectorAll(e);
          } catch (t) {
            console.log(e);
          }

          for (var s = 0; s < i.length; s += 1) {
            t.push(i[s]);
          }
        }

        return m(t);
      },
      children: function children(e) {
        for (var t = [], a = 0; a < this.length; a += 1) {
          for (var i = this[a].children, s = 0; s < i.length; s += 1) {
            e && !m(i[s]).is(e) || t.push(i[s]);
          }
        }

        return m(t);
      },
      filter: function filter(e) {
        return m(f(this, e));
      },
      remove: function remove() {
        for (var e = 0; e < this.length; e += 1) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }

        return this;
      }
    };

    function E(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }

    function x() {
      return Date.now();
    }

    function T(e, t) {
      void 0 === t && (t = "x");

      var a,
          i,
          s,
          r = l(),
          n = function (e) {
        var t,
            a = l();
        return a.getComputedStyle && (t = a.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t;
      }(e);

      return r.WebKitCSSMatrix ? ((i = n.transform || n.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }

    function C(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }

    function S() {
      for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], a = "undefined" != typeof window ? window.HTMLElement : void 0, i = 1; i < arguments.length; i += 1) {
        var s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (null != s && !(a && s instanceof a)) for (var r = Object.keys(Object(s)).filter(function (e) {
          return t.indexOf(e) < 0;
        }), n = 0, l = r.length; n < l; n += 1) {
          var o = r[n],
              d = Object.getOwnPropertyDescriptor(s, o);
          void 0 !== d && d.enumerable && (C(e[o]) && C(s[o]) ? s[o].__swiper__ ? e[o] = s[o] : S(e[o], s[o]) : !C(e[o]) && C(s[o]) ? (e[o] = {}, s[o].__swiper__ ? e[o] = s[o] : S(e[o], s[o])) : e[o] = s[o]);
        }
      }

      return e;
    }

    function M(e, t) {
      Object.keys(t).forEach(function (a) {
        C(t[a]) && Object.keys(t[a]).forEach(function (i) {
          "function" == typeof t[a][i] && (t[a][i] = t[a][i].bind(e));
        }), e[a] = t[a];
      });
    }

    function z(e) {
      return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".");
    }

    function P(e, t, a, i) {
      var s = r();
      return a && Object.keys(i).forEach(function (a) {
        if (!t[a] && !0 === t.auto) {
          var r = s.createElement("div");
          r.className = i[a], e.append(r), t[a] = r;
        }
      }), t;
    }

    function k() {
      return g || (g = function () {
        var e = l(),
            t = r();
        return {
          touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
          pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
          observer: "MutationObserver" in e || "WebkitMutationObserver" in e,
          passiveListener: function () {
            var t = !1;

            try {
              var a = Object.defineProperty({}, "passive", {
                get: function get() {
                  t = !0;
                }
              });
              e.addEventListener("testPassiveListener", null, a);
            } catch (e) {}

            return t;
          }(),
          gestures: "ongesturestart" in e
        };
      }()), g;
    }

    function $(e) {
      return void 0 === e && (e = {}), b || (b = function (e) {
        var t = (void 0 === e ? {} : e).userAgent,
            a = k(),
            i = l(),
            s = i.navigator.platform,
            r = t || i.navigator.userAgent,
            n = {
          ios: !1,
          android: !1
        },
            o = i.screen.width,
            d = i.screen.height,
            p = r.match(/(Android);?[\s\/]+([\d.]+)?/),
            u = r.match(/(iPad).*OS\s([\d_]+)/),
            c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            v = "Win32" === s,
            f = "MacIntel" === s;
        return !u && f && a.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + d) >= 0 && ((u = r.match(/(Version)\/([\d.]+)/)) || (u = [0, 1, "13_0_0"]), f = !1), p && !v && (n.os = "android", n.android = !0), (u || h || c) && (n.os = "ios", n.ios = !0), n;
      }(e)), b;
    }

    function L() {
      return w || (w = function () {
        var e,
            t = l();
        return {
          isEdge: !!t.navigator.userAgent.match(/Edge/g),
          isSafari: (e = t.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        };
      }()), w;
    }

    Object.keys(y).forEach(function (e) {
      Object.defineProperty(m.fn, e, {
        value: y[e],
        writable: !0
      });
    });
    var I = {
      name: "resize",
      create: function create() {
        var e = this;
        S(e, {
          resize: {
            observer: null,
            createObserver: function createObserver() {
              e && !e.destroyed && e.initialized && (e.resize.observer = new ResizeObserver(function (t) {
                var a = e.width,
                    i = e.height,
                    s = a,
                    r = i;
                t.forEach(function (t) {
                  var a = t.contentBoxSize,
                      i = t.contentRect,
                      n = t.target;
                  n && n !== e.el || (s = i ? i.width : (a[0] || a).inlineSize, r = i ? i.height : (a[0] || a).blockSize);
                }), s === a && r === i || e.resize.resizeHandler();
              }), e.resize.observer.observe(e.el));
            },
            removeObserver: function removeObserver() {
              e.resize.observer && e.resize.observer.unobserve && e.el && (e.resize.observer.unobserve(e.el), e.resize.observer = null);
            },
            resizeHandler: function resizeHandler() {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function orientationChangeHandler() {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            }
          }
        });
      },
      on: {
        init: function init(e) {
          var t = l();
          e.params.resizeObserver && void 0 !== l().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler));
        },
        destroy: function destroy(e) {
          var t = l();
          e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
        }
      }
    },
        O = {
      attach: function attach(e, t) {
        void 0 === t && (t = {});
        var a = l(),
            i = this,
            s = new (a.MutationObserver || a.WebkitMutationObserver)(function (e) {
          if (1 !== e.length) {
            var t = function t() {
              i.emit("observerUpdate", e[0]);
            };

            a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
          } else i.emit("observerUpdate", e[0]);
        });
        s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }), i.observer.observers.push(s);
      },
      init: function init() {
        var e = this;

        if (e.support.observer && e.params.observer) {
          if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) {
            e.observer.attach(t[a]);
          }
          e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }), e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
        }
      },
      destroy: function destroy() {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }), this.observer.observers = [];
      }
    },
        A = {
      name: "observer",
      params: {
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
      },
      create: function create() {
        M(this, {
          observer: t({}, O, {
            observers: []
          })
        });
      },
      on: {
        init: function init(e) {
          e.observer.init();
        },
        destroy: function destroy(e) {
          e.observer.destroy();
        }
      }
    };

    function D(e) {
      var t = this,
          a = r(),
          i = l(),
          s = t.touchEventsData,
          n = t.params,
          o = t.touches;

      if (t.enabled && (!t.animating || !n.preventInteractionOnTransition)) {
        var d = e;
        d.originalEvent && (d = d.originalEvent);
        var p = m(d.target);
        if ("wrapper" !== n.touchEventsTarget || p.closest(t.wrapperEl).length) if (s.isTouchEvent = "touchstart" === d.type, s.isTouchEvent || !("which" in d) || 3 !== d.which) if (!(!s.isTouchEvent && "button" in d && d.button > 0)) if (!s.isTouched || !s.isMoved) if (!!n.noSwipingClass && "" !== n.noSwipingClass && d.target && d.target.shadowRoot && e.path && e.path[0] && (p = m(e.path[0])), n.noSwiping && p.closest(n.noSwipingSelector ? n.noSwipingSelector : "." + n.noSwipingClass)[0]) t.allowClick = !0;else if (!n.swipeHandler || p.closest(n.swipeHandler)[0]) {
          o.currentX = "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX, o.currentY = "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY;
          var u = o.currentX,
              c = o.currentY,
              h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
              v = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;

          if (h && (u <= v || u >= i.innerWidth - v)) {
            if ("prevent" !== h) return;
            e.preventDefault();
          }

          if (S(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), o.startX = u, o.startY = c, s.touchStartTime = x(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== d.type) {
            var f = !0;
            p.is(s.focusableElements) && (f = !1), a.activeElement && m(a.activeElement).is(s.focusableElements) && a.activeElement !== p[0] && a.activeElement.blur();
            var g = f && t.allowTouchMove && n.touchStartPreventDefault;
            !n.touchStartForcePreventDefault && !g || p[0].isContentEditable || d.preventDefault();
          }

          t.emit("touchStart", d);
        }
      }
    }

    function N(e) {
      var t = r(),
          a = this,
          i = a.touchEventsData,
          s = a.params,
          n = a.touches,
          l = a.rtlTranslate;

      if (a.enabled) {
        var o = e;

        if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
          if (!i.isTouchEvent || "touchmove" === o.type) {
            var d = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                p = "touchmove" === o.type ? d.pageX : o.pageX,
                u = "touchmove" === o.type ? d.pageY : o.pageY;
            if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = u);
            if (!a.allowTouchMove) return a.allowClick = !1, void (i.isTouched && (S(n, {
              startX: p,
              startY: u,
              currentX: p,
              currentY: u
            }), i.touchStartTime = x()));
            if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (a.isVertical()) {
              if (u < n.startY && a.translate <= a.maxTranslate() || u > n.startY && a.translate >= a.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (p < n.startX && a.translate <= a.maxTranslate() || p > n.startX && a.translate >= a.minTranslate()) return;
            if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(i.focusableElements)) return i.isMoved = !0, void (a.allowClick = !1);

            if (i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
              n.currentX = p, n.currentY = u;
              var c = n.currentX - n.startX,
                  h = n.currentY - n.startY;

              if (!(a.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(h, 2)) < a.params.threshold)) {
                var v;
                if (void 0 === i.isScrolling) a.isHorizontal() && n.currentY === n.startY || a.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (v = 180 * Math.atan2(Math.abs(h), Math.abs(c)) / Math.PI, i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
                if (i.isScrolling && a.emit("touchMoveOpposite", o), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;else if (i.startMoving) {
                  a.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), i.isMoved || (s.loop && a.loopFix(), i.startTranslate = a.getTranslate(), a.setTransition(0), a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== a.allowSlideNext && !0 !== a.allowSlidePrev || a.setGrabCursor(!0), a.emit("sliderFirstMove", o)), a.emit("sliderMove", o), i.isMoved = !0;
                  var f = a.isHorizontal() ? c : h;
                  n.diff = f, f *= s.touchRatio, l && (f = -f), a.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                  var g = !0,
                      b = s.resistanceRatio;

                  if (s.touchReleaseOnEdges && (b = 0), f > 0 && i.currentTranslate > a.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, b))) : f < 0 && i.currentTranslate < a.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, b))), g && (o.preventedByNestedSwiper = !0), !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), a.allowSlidePrev || a.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
                    if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                    if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = a.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
                  }

                  s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
                    position: n[a.isHorizontal() ? "startX" : "startY"],
                    time: i.touchStartTime
                  }), i.velocities.push({
                    position: n[a.isHorizontal() ? "currentX" : "currentY"],
                    time: x()
                  })), a.updateProgress(i.currentTranslate), a.setTranslate(i.currentTranslate));
                }
              }
            }
          }
        } else i.startMoving && i.isScrolling && a.emit("touchMoveOpposite", o);
      }
    }

    function G(e) {
      var t = this,
          a = t.touchEventsData,
          i = t.params,
          s = t.touches,
          r = t.rtlTranslate,
          n = t.$wrapperEl,
          l = t.slidesGrid,
          o = t.snapGrid;

      if (t.enabled) {
        var d = e;
        if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
        i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var p,
            u = x(),
            c = u - a.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && u - a.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), a.lastClickTime = x(), E(function () {
          t.destroyed || (t.allowClick = !0);
        }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
        if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, !i.cssMode) if (i.freeMode) {
          if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (p > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var h = a.velocities.pop(),
                  v = a.velocities.pop(),
                  f = h.position - v.position,
                  m = h.time - v.time;
              t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || x() - h.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;

            t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
            var g = 1e3 * i.freeModeMomentumRatio,
                b = t.velocity * g,
                w = t.translate + b;
            r && (w = -w);
            var y,
                T,
                C = !1,
                S = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -S && (w = t.maxTranslate() - S), y = t.maxTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > S && (w = t.minTranslate() + S), y = t.minTranslate(), C = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);else if (i.freeModeSticky) {
              for (var M, z = 0; z < o.length; z += 1) {
                if (o[z] > -w) {
                  M = z;
                  break;
                }
              }

              w = -(w = Math.abs(o[M] - w) < Math.abs(o[M - 1] - w) || "next" === t.swipeDirection ? o[M] : o[M - 1]);
            }

            if (T && t.once("transitionEnd", function () {
              t.loopFix();
            }), 0 !== t.velocity) {
              if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), i.freeModeSticky) {
                var P = Math.abs((r ? -w : w) - t.translate),
                    k = t.slidesSizesGrid[t.activeIndex];
                g = P < k ? i.speed : P < 2 * k ? 1.5 * i.speed : 2.5 * i.speed;
              }
            } else if (i.freeModeSticky) return void t.slideToClosest();

            i.freeModeMomentumBounce && C ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function () {
                t.setTranslate(y), n.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                });
              }, 0));
            })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(w)), t.updateActiveIndex(), t.updateSlidesClasses();
          } else {
            if (i.freeModeSticky) return void t.slideToClosest();
            i.freeMode && t.emit("_freeModeNoMomentumRelease");
          }

          (!i.freeModeMomentum || c >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        } else {
          for (var $ = 0, L = t.slidesSizesGrid[0], I = 0; I < l.length; I += I < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            var O = I < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== l[I + O] ? p >= l[I] && p < l[I + O] && ($ = I, L = l[I + O] - l[I]) : p >= l[I] && ($ = I, L = l[l.length - 1] - l[l.length - 2]);
          }

          var A = (p - l[$]) / L,
              D = $ < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;

          if (c > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (A >= i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($)), "prev" === t.swipeDirection && (A > 1 - i.longSwipesRatio ? t.slideTo($ + D) : t.slideTo($));
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo($ + D) : t.slideTo($) : ("next" === t.swipeDirection && t.slideTo($ + D), "prev" === t.swipeDirection && t.slideTo($));
          }
        }
      }
    }

    function B() {
      var e = this,
          t = e.params,
          a = e.el;

      if (!a || 0 !== a.offsetWidth) {
        t.breakpoints && e.setBreakpoint();
        var i = e.allowSlideNext,
            s = e.allowSlidePrev,
            r = e.snapGrid;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
    }

    function H(e) {
      var t = this;
      t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }

    function X() {
      var e = this,
          t = e.wrapperEl,
          a = e.rtlTranslate;

      if (e.enabled) {
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = a ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        var i = e.maxTranslate() - e.minTranslate();
        (0 === i ? 0 : (e.translate - e.minTranslate()) / i) !== e.progress && e.updateProgress(a ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
      }
    }

    var R = !1;

    function Y() {}

    var V = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !1,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements: "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: .02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: .5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: .85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1
    },
        W = {
      modular: {
        useParams: function useParams(e) {
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (a) {
            var i = t.modules[a];
            i.params && S(e, i.params);
          });
        },
        useModules: function useModules(e) {
          void 0 === e && (e = {});
          var t = this;
          t.modules && Object.keys(t.modules).forEach(function (a) {
            var i = t.modules[a],
                s = e[a] || {};
            i.on && t.on && Object.keys(i.on).forEach(function (e) {
              t.on(e, i.on[e]);
            }), i.create && i.create.bind(t)(s);
          });
        }
      },
      eventsEmitter: {
        on: function on(e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;
          var s = a ? "unshift" : "push";
          return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t);
          }), i;
        },
        once: function once(e, t, a) {
          var i = this;
          if ("function" != typeof t) return i;

          function s() {
            i.off(e, s), s.__emitterProxy && delete s.__emitterProxy;

            for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) {
              r[n] = arguments[n];
            }

            t.apply(i, r);
          }

          return s.__emitterProxy = t, i.on(e, s, a);
        },
        onAny: function onAny(e, t) {
          var a = this;
          if ("function" != typeof e) return a;
          var i = t ? "unshift" : "push";
          return a.eventsAnyListeners.indexOf(e) < 0 && a.eventsAnyListeners[i](e), a;
        },
        offAny: function offAny(e) {
          var t = this;
          if (!t.eventsAnyListeners) return t;
          var a = t.eventsAnyListeners.indexOf(e);
          return a >= 0 && t.eventsAnyListeners.splice(a, 1), t;
        },
        off: function off(e, t) {
          var a = this;
          return a.eventsListeners ? (e.split(" ").forEach(function (e) {
            void 0 === t ? a.eventsListeners[e] = [] : a.eventsListeners[e] && a.eventsListeners[e].forEach(function (i, s) {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && a.eventsListeners[e].splice(s, 1);
            });
          }), a) : a;
        },
        emit: function emit() {
          var e,
              t,
              a,
              i = this;
          if (!i.eventsListeners) return i;

          for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) {
            r[n] = arguments[n];
          }

          "string" == typeof r[0] || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), a = i) : (e = r[0].events, t = r[0].data, a = r[0].context || i), t.unshift(a);
          var l = Array.isArray(e) ? e : e.split(" ");
          return l.forEach(function (e) {
            i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach(function (i) {
              i.apply(a, [e].concat(t));
            }), i.eventsListeners && i.eventsListeners[e] && i.eventsListeners[e].forEach(function (e) {
              e.apply(a, t);
            });
          }), i;
        }
      },
      update: {
        updateSize: function updateSize() {
          var e,
              t,
              a = this,
              i = a.$el;
          e = void 0 !== a.params.width && null !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height && null !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), S(a, {
            width: e,
            height: t,
            size: a.isHorizontal() ? e : t
          }));
        },
        updateSlides: function updateSlides() {
          var e = this;

          function t(t) {
            return e.isHorizontal() ? t : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom"
            }[t];
          }

          function a(e, a) {
            return parseFloat(e.getPropertyValue(t(a)) || 0);
          }

          var i = e.params,
              s = e.$wrapperEl,
              r = e.size,
              n = e.rtlTranslate,
              l = e.wrongRTL,
              o = e.virtual && i.virtual.enabled,
              d = o ? e.virtual.slides.length : e.slides.length,
              p = s.children("." + e.params.slideClass),
              u = o ? e.virtual.slides.length : p.length,
              c = [],
              h = [],
              v = [],
              f = i.slidesOffsetBefore;
          "function" == typeof f && (f = i.slidesOffsetBefore.call(e));
          var m = i.slidesOffsetAfter;
          "function" == typeof m && (m = i.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
              b = e.slidesGrid.length,
              w = i.spaceBetween,
              y = -f,
              E = 0,
              x = 0;

          if (void 0 !== r) {
            var T, C;
            "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * r), e.virtualSize = -w, n ? p.css({
              marginLeft: "",
              marginTop: ""
            }) : p.css({
              marginRight: "",
              marginBottom: ""
            }), i.slidesPerColumn > 1 && (T = Math.floor(u / i.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (T = Math.max(T, i.slidesPerView * i.slidesPerColumn)));

            for (var M, z, P, k = i.slidesPerColumn, $ = T / k, L = Math.floor(u / i.slidesPerColumn), I = 0; I < u; I += 1) {
              C = 0;
              var O = p.eq(I);

              if (i.slidesPerColumn > 1) {
                var A = void 0,
                    D = void 0,
                    N = void 0;

                if ("row" === i.slidesPerColumnFill && i.slidesPerGroup > 1) {
                  var G = Math.floor(I / (i.slidesPerGroup * i.slidesPerColumn)),
                      B = I - i.slidesPerColumn * i.slidesPerGroup * G,
                      H = 0 === G ? i.slidesPerGroup : Math.min(Math.ceil((u - G * k * i.slidesPerGroup) / k), i.slidesPerGroup);
                  A = (D = B - (N = Math.floor(B / H)) * H + G * i.slidesPerGroup) + N * T / k, O.css({
                    "-webkit-box-ordinal-group": A,
                    "-moz-box-ordinal-group": A,
                    "-ms-flex-order": A,
                    "-webkit-order": A,
                    order: A
                  });
                } else "column" === i.slidesPerColumnFill ? (N = I - (D = Math.floor(I / k)) * k, (D > L || D === L && N === k - 1) && (N += 1) >= k && (N = 0, D += 1)) : D = I - (N = Math.floor(I / $)) * $;

                O.css(t("margin-top"), 0 !== N ? i.spaceBetween && i.spaceBetween + "px" : "");
              }

              if ("none" !== O.css("display")) {
                if ("auto" === i.slidesPerView) {
                  var X = getComputedStyle(O[0]),
                      R = O[0].style.transform,
                      Y = O[0].style.webkitTransform;
                  if (R && (O[0].style.transform = "none"), Y && (O[0].style.webkitTransform = "none"), i.roundLengths) C = e.isHorizontal() ? O.outerWidth(!0) : O.outerHeight(!0);else {
                    var V = a(X, "width"),
                        W = a(X, "padding-left"),
                        F = a(X, "padding-right"),
                        _ = a(X, "margin-left"),
                        q = a(X, "margin-right"),
                        j = X.getPropertyValue("box-sizing");

                    if (j && "border-box" === j) C = V + _ + q;else {
                      var U = O[0],
                          K = U.clientWidth;
                      C = V + W + F + _ + q + (U.offsetWidth - K);
                    }
                  }
                  R && (O[0].style.transform = R), Y && (O[0].style.webkitTransform = Y), i.roundLengths && (C = Math.floor(C));
                } else C = (r - (i.slidesPerView - 1) * w) / i.slidesPerView, i.roundLengths && (C = Math.floor(C)), p[I] && (p[I].style[t("width")] = C + "px");

                p[I] && (p[I].swiperSlideSize = C), v.push(C), i.centeredSlides ? (y = y + C / 2 + E / 2 + w, 0 === E && 0 !== I && (y = y - r / 2 - w), 0 === I && (y = y - r / 2 - w), Math.abs(y) < .001 && (y = 0), i.roundLengths && (y = Math.floor(y)), x % i.slidesPerGroup == 0 && c.push(y), h.push(y)) : (i.roundLengths && (y = Math.floor(y)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && c.push(y), h.push(y), y = y + C + w), e.virtualSize += C + w, E = C, x += 1;
              }
            }

            if (e.virtualSize = Math.max(e.virtualSize, r) + m, n && l && ("slide" === i.effect || "coverflow" === i.effect) && s.css({
              width: e.virtualSize + i.spaceBetween + "px"
            }), i.setWrapperSize) s.css(((z = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", z));
            if (i.slidesPerColumn > 1) if (e.virtualSize = (C + i.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / i.slidesPerColumn) - i.spaceBetween, s.css(((P = {})[t("width")] = e.virtualSize + i.spaceBetween + "px", P)), i.centeredSlides) {
              M = [];

              for (var Z = 0; Z < c.length; Z += 1) {
                var J = c[Z];
                i.roundLengths && (J = Math.floor(J)), c[Z] < e.virtualSize + c[0] && M.push(J);
              }

              c = M;
            }

            if (!i.centeredSlides) {
              M = [];

              for (var Q = 0; Q < c.length; Q += 1) {
                var ee = c[Q];
                i.roundLengths && (ee = Math.floor(ee)), c[Q] <= e.virtualSize - r && M.push(ee);
              }

              c = M, Math.floor(e.virtualSize - r) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - r);
            }

            if (0 === c.length && (c = [0]), 0 !== i.spaceBetween) {
              var te,
                  ae = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
              p.filter(function (e, t) {
                return !i.cssMode || t !== p.length - 1;
              }).css(((te = {})[ae] = w + "px", te));
            }

            if (i.centeredSlides && i.centeredSlidesBounds) {
              var ie = 0;
              v.forEach(function (e) {
                ie += e + (i.spaceBetween ? i.spaceBetween : 0);
              });
              var se = (ie -= i.spaceBetween) - r;
              c = c.map(function (e) {
                return e < 0 ? -f : e > se ? se + m : e;
              });
            }

            if (i.centerInsufficientSlides) {
              var re = 0;

              if (v.forEach(function (e) {
                re += e + (i.spaceBetween ? i.spaceBetween : 0);
              }), (re -= i.spaceBetween) < r) {
                var ne = (r - re) / 2;
                c.forEach(function (e, t) {
                  c[t] = e - ne;
                }), h.forEach(function (e, t) {
                  h[t] = e + ne;
                });
              }
            }

            S(e, {
              slides: p,
              snapGrid: c,
              slidesGrid: h,
              slidesSizesGrid: v
            }), u !== d && e.emit("slidesLengthChange"), c.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesOffset();
          }
        },
        updateAutoHeight: function updateAutoHeight(e) {
          var t,
              a = this,
              i = [],
              s = a.virtual && a.params.virtual.enabled,
              r = 0;
          "number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed);

          var n = function n(e) {
            return s ? a.slides.filter(function (t) {
              return parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e;
            })[0] : a.slides.eq(e)[0];
          };

          if ("auto" !== a.params.slidesPerView && a.params.slidesPerView > 1) {
            if (a.params.centeredSlides) a.visibleSlides.each(function (e) {
              i.push(e);
            });else for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
              var l = a.activeIndex + t;
              if (l > a.slides.length && !s) break;
              i.push(n(l));
            }
          } else i.push(n(a.activeIndex));

          for (t = 0; t < i.length; t += 1) {
            if (void 0 !== i[t]) {
              var o = i[t].offsetHeight;
              r = o > r ? o : r;
            }
          }

          r && a.$wrapperEl.css("height", r + "px");
        },
        updateSlidesOffset: function updateSlidesOffset() {
          for (var e = this.slides, t = 0; t < e.length; t += 1) {
            e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
          }
        },
        updateSlidesProgress: function updateSlidesProgress(e) {
          void 0 === e && (e = this && this.translate || 0);
          var t = this,
              a = t.params,
              i = t.slides,
              s = t.rtlTranslate;

          if (0 !== i.length) {
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            var r = -e;
            s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

            for (var n = 0; n < i.length; n += 1) {
              var l = i[n],
                  o = (r + (a.centeredSlides ? t.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + a.spaceBetween);

              if (a.watchSlidesVisibility || a.centeredSlides && a.autoHeight) {
                var d = -(r - l.swiperSlideOffset),
                    p = d + t.slidesSizesGrid[n];
                (d >= 0 && d < t.size - 1 || p > 1 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
              }

              l.progress = s ? -o : o;
            }

            t.visibleSlides = m(t.visibleSlides);
          }
        },
        updateProgress: function updateProgress(e) {
          var t = this;

          if (void 0 === e) {
            var a = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * a || 0;
          }

          var i = t.params,
              s = t.maxTranslate() - t.minTranslate(),
              r = t.progress,
              n = t.isBeginning,
              l = t.isEnd,
              o = n,
              d = l;
          0 === s ? (r = 0, n = !0, l = !0) : (n = (r = (e - t.minTranslate()) / s) <= 0, l = r >= 1), S(t, {
            progress: r,
            isBeginning: n,
            isEnd: l
          }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e), n && !o && t.emit("reachBeginning toEdge"), l && !d && t.emit("reachEnd toEdge"), (o && !n || d && !l) && t.emit("fromEdge"), t.emit("progress", r);
        },
        updateSlidesClasses: function updateSlidesClasses() {
          var e,
              t = this,
              a = t.slides,
              i = t.params,
              s = t.$wrapperEl,
              r = t.activeIndex,
              n = t.realIndex,
              l = t.virtual && i.virtual.enabled;
          a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = l ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
          var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
          i.loop && 0 === o.length && (o = a.eq(0)).addClass(i.slideNextClass);
          var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
          i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), t.emitSlidesClasses();
        },
        updateActiveIndex: function updateActiveIndex(e) {
          var t,
              a = this,
              i = a.rtlTranslate ? a.translate : -a.translate,
              s = a.slidesGrid,
              r = a.snapGrid,
              n = a.params,
              l = a.activeIndex,
              o = a.realIndex,
              d = a.snapIndex,
              p = e;

          if (void 0 === p) {
            for (var u = 0; u < s.length; u += 1) {
              void 0 !== s[u + 1] ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? p = u : i >= s[u] && i < s[u + 1] && (p = u + 1) : i >= s[u] && (p = u);
            }

            n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
          }

          if (r.indexOf(i) >= 0) t = r.indexOf(i);else {
            var c = Math.min(n.slidesPerGroupSkip, p);
            t = c + Math.floor((p - c) / n.slidesPerGroup);
          }

          if (t >= r.length && (t = r.length - 1), p !== l) {
            var h = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
            S(a, {
              snapIndex: t,
              realIndex: h,
              previousIndex: l,
              activeIndex: p
            }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), o !== h && a.emit("realIndexChange"), (a.initialized || a.params.runCallbacksOnInit) && a.emit("slideChange");
          } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"));
        },
        updateClickedSlide: function updateClickedSlide(e) {
          var t,
              a = this,
              i = a.params,
              s = m(e.target).closest("." + i.slideClass)[0],
              r = !1;
          if (s) for (var n = 0; n < a.slides.length; n += 1) {
            if (a.slides[n] === s) {
              r = !0, t = n;
              break;
            }
          }
          if (!s || !r) return a.clickedSlide = void 0, void (a.clickedIndex = void 0);
          a.clickedSlide = s, a.virtual && a.params.virtual.enabled ? a.clickedIndex = parseInt(m(s).attr("data-swiper-slide-index"), 10) : a.clickedIndex = t, i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function getTranslate(e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
              a = t.params,
              i = t.rtlTranslate,
              s = t.translate,
              r = t.$wrapperEl;
          if (a.virtualTranslate) return i ? -s : s;
          if (a.cssMode) return s;
          var n = T(r[0], e);
          return i && (n = -n), n || 0;
        },
        setTranslate: function setTranslate(e, t) {
          var a = this,
              i = a.rtlTranslate,
              s = a.params,
              r = a.$wrapperEl,
              n = a.wrapperEl,
              l = a.progress,
              o = 0,
              d = 0;
          a.isHorizontal() ? o = i ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? n[a.isHorizontal() ? "scrollLeft" : "scrollTop"] = a.isHorizontal() ? -o : -d : s.virtualTranslate || r.transform("translate3d(" + o + "px, " + d + "px, 0px)"), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : d;
          var p = a.maxTranslate() - a.minTranslate();
          (0 === p ? 0 : (e - a.minTranslate()) / p) !== l && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
        },
        minTranslate: function minTranslate() {
          return -this.snapGrid[0];
        },
        maxTranslate: function maxTranslate() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function translateTo(e, t, a, i, s) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), void 0 === i && (i = !0);
          var r = this,
              n = r.params,
              l = r.wrapperEl;
          if (r.animating && n.preventInteractionOnTransition) return !1;
          var o,
              d = r.minTranslate(),
              p = r.maxTranslate();

          if (o = i && e > d ? d : i && e < p ? p : e, r.updateProgress(o), n.cssMode) {
            var u,
                c = r.isHorizontal();
            if (0 === t) l[c ? "scrollLeft" : "scrollTop"] = -o;else if (l.scrollTo) l.scrollTo(((u = {})[c ? "left" : "top"] = -o, u.behavior = "smooth", u));else l[c ? "scrollLeft" : "scrollTop"] = -o;
            return !0;
          }

          return 0 === t ? (r.setTransition(0), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(o), a && (r.emit("beforeTransitionStart", t, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, a && r.emit("transitionEnd"));
          }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
      },
      transition: {
        setTransition: function setTransition(e, t) {
          var a = this;
          a.params.cssMode || a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var a = this,
              i = a.activeIndex,
              s = a.params,
              r = a.previousIndex;

          if (!s.cssMode) {
            s.autoHeight && a.updateAutoHeight();
            var n = t;

            if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
              if ("reset" === n) return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function transitionEnd(e, t) {
          void 0 === e && (e = !0);
          var a = this,
              i = a.activeIndex,
              s = a.previousIndex,
              r = a.params;

          if (a.animating = !1, !r.cssMode) {
            a.setTransition(0);
            var n = t;

            if (n || (n = i > s ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
              if ("reset" === n) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"), "next" === n ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function slideTo(e, t, a, i, s) {
          if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + _typeof(e) + "] given.");

          if ("string" == typeof e) {
            var r = parseInt(e, 10);
            if (!isFinite(r)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
            e = r;
          }

          var n = this,
              l = e;
          l < 0 && (l = 0);
          var o = n.params,
              d = n.snapGrid,
              p = n.slidesGrid,
              u = n.previousIndex,
              c = n.activeIndex,
              h = n.rtlTranslate,
              v = n.wrapperEl,
              f = n.enabled;
          if (n.animating && o.preventInteractionOnTransition || !f && !i && !s) return !1;
          var m = Math.min(n.params.slidesPerGroupSkip, l),
              g = m + Math.floor((l - m) / n.params.slidesPerGroup);
          g >= d.length && (g = d.length - 1), (c || o.initialSlide || 0) === (u || 0) && a && n.emit("beforeSlideChangeStart");
          var b,
              w = -d[g];
          if (n.updateProgress(w), o.normalizeSlideIndex) for (var y = 0; y < p.length; y += 1) {
            var E = -Math.floor(100 * w),
                x = Math.floor(100 * p[y]),
                T = Math.floor(100 * p[y + 1]);
            void 0 !== p[y + 1] ? E >= x && E < T - (T - x) / 2 ? l = y : E >= x && E < T && (l = y + 1) : E >= x && (l = y);
          }

          if (n.initialized && l !== c) {
            if (!n.allowSlideNext && w < n.translate && w < n.minTranslate()) return !1;
            if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (c || 0) !== l) return !1;
          }

          if (b = l > c ? "next" : l < c ? "prev" : "reset", h && -w === n.translate || !h && w === n.translate) return n.updateActiveIndex(l), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== b && (n.transitionStart(a, b), n.transitionEnd(a, b)), !1;

          if (o.cssMode) {
            var C,
                S = n.isHorizontal(),
                M = -w;
            if (h && (M = v.scrollWidth - v.offsetWidth - M), 0 === t) v[S ? "scrollLeft" : "scrollTop"] = M;else if (v.scrollTo) v.scrollTo(((C = {})[S ? "left" : "top"] = M, C.behavior = "smooth", C));else v[S ? "scrollLeft" : "scrollTop"] = M;
            return !0;
          }

          return 0 === t ? (n.setTransition(0), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.transitionEnd(a, b)) : (n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(l), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(a, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
            n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(a, b));
          }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
        },
        slideToLoop: function slideToLoop(e, t, a, i) {
          void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
          var s = this,
              r = e;
          return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, a, i);
        },
        slideNext: function slideNext(e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
              s = i.params,
              r = i.animating;
          if (!i.enabled) return i;
          var n = i.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
          }

          return i.slideTo(i.activeIndex + n, e, t, a);
        },
        slidePrev: function slidePrev(e, t, a) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var i = this,
              s = i.params,
              r = i.animating,
              n = i.snapGrid,
              l = i.slidesGrid,
              o = i.rtlTranslate;
          if (!i.enabled) return i;

          if (s.loop) {
            if (r && s.loopPreventsSlide) return !1;
            i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
          }

          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }

          var p,
              u = d(o ? i.translate : -i.translate),
              c = n.map(function (e) {
            return d(e);
          }),
              h = n[c.indexOf(u) - 1];
          return void 0 === h && s.cssMode && n.forEach(function (e) {
            !h && u >= e && (h = e);
          }), void 0 !== h && (p = l.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a);
        },
        slideReset: function slideReset(e, t, a) {
          return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a);
        },
        slideToClosest: function slideToClosest(e, t, a, i) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
          var s = this,
              r = s.activeIndex,
              n = Math.min(s.params.slidesPerGroupSkip, r),
              l = n + Math.floor((r - n) / s.params.slidesPerGroup),
              o = s.rtlTranslate ? s.translate : -s.translate;

          if (o >= s.snapGrid[l]) {
            var d = s.snapGrid[l];
            o - d > (s.snapGrid[l + 1] - d) * i && (r += s.params.slidesPerGroup);
          } else {
            var p = s.snapGrid[l - 1];
            o - p <= (s.snapGrid[l] - p) * i && (r -= s.params.slidesPerGroup);
          }

          return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, e, t, a);
        },
        slideToClickedSlide: function slideToClickedSlide() {
          var e,
              t = this,
              a = t.params,
              i = t.$wrapperEl,
              s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
              r = t.clickedIndex;

          if (a.loop) {
            if (t.animating) return;
            e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), E(function () {
              t.slideTo(r);
            })) : t.slideTo(r);
          } else t.slideTo(r);
        }
      },
      loop: {
        loopCreate: function loopCreate() {
          var e = this,
              t = r(),
              a = e.params,
              i = e.$wrapperEl;
          i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var s = i.children("." + a.slideClass);

          if (a.loopFillGroupWithBlank) {
            var n = a.slidesPerGroup - s.length % a.slidesPerGroup;

            if (n !== a.slidesPerGroup) {
              for (var l = 0; l < n; l += 1) {
                var o = m(t.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                i.append(o);
              }

              s = i.children("." + a.slideClass);
            }
          }

          "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(a.loopedSlides || a.slidesPerView, 10)), e.loopedSlides += a.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
          var d = [],
              p = [];
          s.each(function (t, a) {
            var i = m(t);
            a < e.loopedSlides && p.push(t), a < s.length && a >= s.length - e.loopedSlides && d.push(t), i.attr("data-swiper-slide-index", a);
          });

          for (var u = 0; u < p.length; u += 1) {
            i.append(m(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
          }

          for (var c = d.length - 1; c >= 0; c -= 1) {
            i.prepend(m(d[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
          }
        },
        loopFix: function loopFix() {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
              a = e.activeIndex,
              i = e.slides,
              s = e.loopedSlides,
              r = e.allowSlidePrev,
              n = e.allowSlideNext,
              l = e.snapGrid,
              o = e.rtlTranslate;
          e.allowSlidePrev = !0, e.allowSlideNext = !0;
          var d = -l[a] - e.getTranslate();
          if (a < s) t = i.length - 3 * s + a, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);else if (a >= i.length - s) {
            t = -i.length + a + s, t += s, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d);
          }
          e.allowSlidePrev = r, e.allowSlideNext = n, e.emit("loopFix");
        },
        loopDestroy: function loopDestroy() {
          var e = this,
              t = e.$wrapperEl,
              a = e.params,
              i = e.slides;
          t.children("." + a.slideClass + "." + a.slideDuplicateClass + ",." + a.slideClass + "." + a.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          var t = this;

          if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
            var a = t.el;
            a.style.cursor = "move", a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", a.style.cursor = e ? "-moz-grabbin" : "-moz-grab", a.style.cursor = e ? "grabbing" : "grab";
          }
        },
        unsetGrabCursor: function unsetGrabCursor() {
          var e = this;
          e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function appendSlide(e) {
          var t = this,
              a = t.$wrapperEl,
              i = t.params;
          if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var s = 0; s < e.length; s += 1) {
            e[s] && a.append(e[s]);
          } else a.append(e);
          i.loop && t.loopCreate(), i.observer && t.support.observer || t.update();
        },
        prependSlide: function prependSlide(e) {
          var t = this,
              a = t.params,
              i = t.$wrapperEl,
              s = t.activeIndex;
          a.loop && t.loopDestroy();
          var r = s + 1;

          if ("object" == _typeof(e) && "length" in e) {
            for (var n = 0; n < e.length; n += 1) {
              e[n] && i.prepend(e[n]);
            }

            r = s + e.length;
          } else i.prepend(e);

          a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), t.slideTo(r, 0, !1);
        },
        addSlide: function addSlide(e, t) {
          var a = this,
              i = a.$wrapperEl,
              s = a.params,
              r = a.activeIndex;
          s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
          var n = a.slides.length;
          if (e <= 0) a.prependSlide(t);else if (e >= n) a.appendSlide(t);else {
            for (var l = r > e ? r + 1 : r, o = [], d = n - 1; d >= e; d -= 1) {
              var p = a.slides.eq(d);
              p.remove(), o.unshift(p);
            }

            if ("object" == _typeof(t) && "length" in t) {
              for (var u = 0; u < t.length; u += 1) {
                t[u] && i.append(t[u]);
              }

              l = r > e ? r + t.length : r;
            } else i.append(t);

            for (var c = 0; c < o.length; c += 1) {
              i.append(o[c]);
            }

            s.loop && a.loopCreate(), s.observer && a.support.observer || a.update(), s.loop ? a.slideTo(l + a.loopedSlides, 0, !1) : a.slideTo(l, 0, !1);
          }
        },
        removeSlide: function removeSlide(e) {
          var t = this,
              a = t.params,
              i = t.$wrapperEl,
              s = t.activeIndex;
          a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
          var r,
              n = s;

          if ("object" == _typeof(e) && "length" in e) {
            for (var l = 0; l < e.length; l += 1) {
              r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
            }

            n = Math.max(n, 0);
          } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);

          a.loop && t.loopCreate(), a.observer && t.support.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
        },
        removeAllSlides: function removeAllSlides() {
          for (var e = [], t = 0; t < this.slides.length; t += 1) {
            e.push(t);
          }

          this.removeSlide(e);
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
              t = r(),
              a = e.params,
              i = e.touchEvents,
              s = e.el,
              n = e.wrapperEl,
              l = e.device,
              o = e.support;
          e.onTouchStart = D.bind(e), e.onTouchMove = N.bind(e), e.onTouchEnd = G.bind(e), a.cssMode && (e.onScroll = X.bind(e)), e.onClick = H.bind(e);
          var d = !!a.nested;
          if (!o.touch && o.pointerEvents) s.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1);else {
            if (o.touch) {
              var p = !("touchstart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.addEventListener(i.start, e.onTouchStart, p), s.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
                passive: !1,
                capture: d
              } : d), s.addEventListener(i.end, e.onTouchEnd, p), i.cancel && s.addEventListener(i.cancel, e.onTouchEnd, p), R || (t.addEventListener("touchstart", Y), R = !0);
            }

            (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), a.cssMode && n.addEventListener("scroll", e.onScroll), a.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", B, !0) : e.on("observerUpdate", B, !0);
        },
        detachEvents: function detachEvents() {
          var e = this,
              t = r(),
              a = e.params,
              i = e.touchEvents,
              s = e.el,
              n = e.wrapperEl,
              l = e.device,
              o = e.support,
              d = !!a.nested;
          if (!o.touch && o.pointerEvents) s.removeEventListener(i.start, e.onTouchStart, !1), t.removeEventListener(i.move, e.onTouchMove, d), t.removeEventListener(i.end, e.onTouchEnd, !1);else {
            if (o.touch) {
              var p = !("onTouchStart" !== i.start || !o.passiveListener || !a.passiveListeners) && {
                passive: !0,
                capture: !1
              };
              s.removeEventListener(i.start, e.onTouchStart, p), s.removeEventListener(i.move, e.onTouchMove, d), s.removeEventListener(i.end, e.onTouchEnd, p), i.cancel && s.removeEventListener(i.cancel, e.onTouchEnd, p);
            }

            (a.simulateTouch && !l.ios && !l.android || a.simulateTouch && !o.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, d), t.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (a.preventClicks || a.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), a.cssMode && n.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", B);
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
              t = e.activeIndex,
              a = e.initialized,
              i = e.loopedSlides,
              s = void 0 === i ? 0 : i,
              r = e.params,
              n = e.$el,
              l = r.breakpoints;

          if (l && (!l || 0 !== Object.keys(l).length)) {
            var o = e.getBreakpoint(l, e.params.breakpointsBase, e.el);

            if (o && e.currentBreakpoint !== o) {
              var d = o in l ? l[o] : void 0;
              d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                var t = d[e];
                void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
              });
              var p = d || e.originalParams,
                  u = r.slidesPerColumn > 1,
                  c = p.slidesPerColumn > 1,
                  h = r.enabled;
              u && !c ? (n.removeClass(r.containerModifierClass + "multirow " + r.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !u && c && (n.addClass(r.containerModifierClass + "multirow"), "column" === p.slidesPerColumnFill && n.addClass(r.containerModifierClass + "multirow-column"), e.emitContainerClasses());
              var v = p.direction && p.direction !== r.direction,
                  f = r.loop && (p.slidesPerView !== r.slidesPerView || v);
              v && a && e.changeDirection(), S(e.params, p);
              var m = e.params.enabled;
              S(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", p), f && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", p);
            }
          }
        },
        getBreakpoint: function getBreakpoint(e, t, a) {
          if (void 0 === t && (t = "window"), e && ("container" !== t || a)) {
            var i = !1,
                s = l(),
                r = "window" === t ? s.innerHeight : a.clientHeight,
                n = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var t = parseFloat(e.substr(1));
                return {
                  value: r * t,
                  point: e
                };
              }

              return {
                value: e,
                point: e
              };
            });
            n.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });

            for (var o = 0; o < n.length; o += 1) {
              var d = n[o],
                  p = d.point,
                  u = d.value;
              "window" === t ? s.matchMedia("(min-width: " + u + "px)").matches && (i = p) : u <= a.clientWidth && (i = p);
            }

            return i || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
              t = e.params,
              a = e.isLocked,
              i = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
          t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), a && a !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
        }
      },
      classes: {
        addClasses: function addClasses() {
          var e,
              t,
              a,
              i = this,
              s = i.classNames,
              r = i.params,
              n = i.rtl,
              l = i.$el,
              o = i.device,
              d = i.support,
              p = (e = ["initialized", r.direction, {
            "pointer-events": d.pointerEvents && !d.touch
          }, {
            "free-mode": r.freeMode
          }, {
            autoheight: r.autoHeight
          }, {
            rtl: n
          }, {
            multirow: r.slidesPerColumn > 1
          }, {
            "multirow-column": r.slidesPerColumn > 1 && "column" === r.slidesPerColumnFill
          }, {
            android: o.android
          }, {
            ios: o.ios
          }, {
            "css-mode": r.cssMode
          }], t = r.containerModifierClass, a = [], e.forEach(function (e) {
            "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
              e[i] && a.push(t + i);
            }) : "string" == typeof e && a.push(t + e);
          }), a);
          s.push.apply(s, p), l.addClass([].concat(s).join(" ")), i.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var e = this,
              t = e.$el,
              a = e.classNames;
          t.removeClass(a.join(" ")), e.emitContainerClasses();
        }
      },
      images: {
        loadImage: function loadImage(e, t, a, i, s, r) {
          var n,
              o = l();

          function d() {
            r && r();
          }

          m(e).parent("picture")[0] || e.complete && s ? d() : t ? ((n = new o.Image()).onload = d, n.onerror = d, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : d();
        },
        preloadImages: function preloadImages() {
          var e = this;

          function t() {
            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }

          e.imagesToLoad = e.$el.find("img");

          for (var a = 0; a < e.imagesToLoad.length; a += 1) {
            var i = e.imagesToLoad[a];
            e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t);
          }
        }
      }
    },
        F = {},
        _ = function () {
      function t() {
        for (var e, a, i = arguments.length, s = new Array(i), r = 0; r < i; r++) {
          s[r] = arguments[r];
        }

        if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? a = s[0] : (e = s[0], a = s[1]), a || (a = {}), a = S({}, a), e && !a.el && (a.el = e), a.el && m(a.el).length > 1) {
          var n = [];
          return m(a.el).each(function (e) {
            var i = S({}, a, {
              el: e
            });
            n.push(new t(i));
          }), n;
        }

        var l = this;
        l.__swiper__ = !0, l.support = k(), l.device = $({
          userAgent: a.userAgent
        }), l.browser = L(), l.eventsListeners = {}, l.eventsAnyListeners = [], void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
          var t = l.modules[e];

          if (t.params) {
            var i = Object.keys(t.params)[0],
                s = t.params[i];
            if ("object" != _typeof(s) || null === s) return;
            if (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === a[i] && (a[i] = {
              auto: !0
            }), !(i in a) || !("enabled" in s)) return;
            !0 === a[i] && (a[i] = {
              enabled: !0
            }), "object" != _typeof(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
              enabled: !1
            });
          }
        });
        var o,
            d,
            p = S({}, V);
        return l.useParams(p), l.params = S({}, p, F, a), l.originalParams = S({}, l.params), l.passedParams = S({}, a), l.params && l.params.on && Object.keys(l.params.on).forEach(function (e) {
          l.on(e, l.params.on[e]);
        }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = m, S(l, {
          enabled: l.params.enabled,
          el: e,
          classNames: [],
          slides: m(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function isHorizontal() {
            return "horizontal" === l.params.direction;
          },
          isVertical: function isVertical() {
            return "vertical" === l.params.direction;
          },
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], d = ["mousedown", "mousemove", "mouseup"], l.support.pointerEvents && (d = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
            start: o[0],
            move: o[1],
            end: o[2],
            cancel: o[3]
          }, l.touchEventsDesktop = {
            start: d[0],
            move: d[1],
            end: d[2]
          }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: l.params.focusableElements,
            lastClickTime: x(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), l.useModules(), l.emit("_swiper"), l.params.init && l.init(), l;
      }

      var a,
          i,
          s,
          n = t.prototype;
      return n.enable = function () {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }, n.disable = function () {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }, n.setProgress = function (e, t) {
        var a = this;
        e = Math.min(Math.max(e, 0), 1);
        var i = a.minTranslate(),
            s = (a.maxTranslate() - i) * e + i;
        a.translateTo(s, void 0 === t ? 0 : t), a.updateActiveIndex(), a.updateSlidesClasses();
      }, n.emitContainerClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = e.el.className.split(" ").filter(function (t) {
            return 0 === t.indexOf("swiper-container") || 0 === t.indexOf(e.params.containerModifierClass);
          });
          e.emit("_containerClasses", t.join(" "));
        }
      }, n.getSlideClasses = function (e) {
        var t = this;
        return e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }, n.emitSlidesClasses = function () {
        var e = this;

        if (e.params._emitClasses && e.el) {
          var t = [];
          e.slides.each(function (a) {
            var i = e.getSlideClasses(a);
            t.push({
              slideEl: a,
              classNames: i
            }), e.emit("_slideClass", a, i);
          }), e.emit("_slideClasses", t);
        }
      }, n.slidesPerViewDynamic = function () {
        var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;

        if (t.centeredSlides) {
          for (var l, o = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
            a[d] && !l && (n += 1, (o += a[d].swiperSlideSize) > s && (l = !0));
          }

          for (var p = r - 1; p >= 0; p -= 1) {
            a[p] && !l && (n += 1, (o += a[p].swiperSlideSize) > s && (l = !0));
          }
        } else for (var u = r + 1; u < a.length; u += 1) {
          i[u] - i[r] < s && (n += 1);
        }

        return n;
      }, n.update = function () {
        var e = this;

        if (e && !e.destroyed) {
          var t = e.snapGrid,
              a = e.params;
          a.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), a.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }

        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
        }
      }, n.changeDirection = function (e, t) {
        void 0 === t && (t = !0);
        var a = this,
            i = a.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (a.$el.removeClass("" + a.params.containerModifierClass + i).addClass("" + a.params.containerModifierClass + e), a.emitContainerClasses(), a.params.direction = e, a.slides.each(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), a.emit("changeDirection"), t && a.update()), a;
      }, n.mount = function (e) {
        var t = this;
        if (t.mounted) return !0;
        var a = m(e || t.params.el);
        if (!(e = a[0])) return !1;
        e.swiper = t;

        var i = function i() {
          return "." + (t.params.wrapperClass || "").trim().split(" ").join(".");
        },
            s = function () {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            var t = m(e.shadowRoot.querySelector(i()));
            return t.children = function (e) {
              return a.children(e);
            }, t;
          }

          return a.children(i());
        }();

        if (0 === s.length && t.params.createElements) {
          var n = r().createElement("div");
          s = m(n), n.className = t.params.wrapperClass, a.append(n), a.children("." + t.params.slideClass).each(function (e) {
            s.append(e);
          });
        }

        return S(t, {
          $el: a,
          el: e,
          $wrapperEl: s,
          wrapperEl: s[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === a.css("direction")),
          wrongRTL: "-webkit-box" === s.css("display")
        }), !0;
      }, n.init = function (e) {
        var t = this;
        return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
      }, n.destroy = function (e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var a,
            i = this,
            s = i.params,
            r = i.$el,
            n = i.$wrapperEl,
            l = i.slides;
        return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), n.removeAttr("style"), l && l.length && l.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
          i.off(e);
        }), !1 !== e && (i.$el[0].swiper = null, a = i, Object.keys(a).forEach(function (e) {
          try {
            a[e] = null;
          } catch (e) {}

          try {
            delete a[e];
          } catch (e) {}
        })), i.destroyed = !0), null;
      }, t.extendDefaults = function (e) {
        S(F, e);
      }, t.installModule = function (e) {
        t.prototype.modules || (t.prototype.modules = {});
        var a = e.name || Object.keys(t.prototype.modules).length + "_" + x();
        t.prototype.modules[a] = e;
      }, t.use = function (e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return t.installModule(e);
        }), t) : (t.installModule(e), t);
      }, a = t, s = [{
        key: "extendedDefaults",
        get: function get() {
          return F;
        }
      }, {
        key: "defaults",
        get: function get() {
          return V;
        }
      }], (i = null) && e(a.prototype, i), s && e(a, s), t;
    }();

    Object.keys(W).forEach(function (e) {
      Object.keys(W[e]).forEach(function (t) {
        _.prototype[t] = W[e][t];
      });
    }), _.use([I, A]);
    var q = {
      update: function update(e) {
        var t = this,
            a = t.params,
            i = a.slidesPerView,
            s = a.slidesPerGroup,
            r = a.centeredSlides,
            n = t.params.virtual,
            l = n.addSlidesBefore,
            o = n.addSlidesAfter,
            d = t.virtual,
            p = d.from,
            u = d.to,
            c = d.slides,
            h = d.slidesGrid,
            v = d.renderSlide,
            f = d.offset;
        t.updateActiveIndex();
        var m,
            g,
            b,
            w = t.activeIndex || 0;
        m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
        var y = Math.max((w || 0) - b, 0),
            E = Math.min((w || 0) + g, c.length - 1),
            x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

        function T() {
          t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
        }

        if (S(t.virtual, {
          from: y,
          to: E,
          offset: x,
          slidesGrid: t.slidesGrid
        }), p === y && u === E && !e) return t.slidesGrid !== h && x !== f && t.slides.css(m, x + "px"), void t.updateProgress();
        if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
          offset: x,
          from: y,
          to: E,
          slides: function () {
            for (var e = [], t = y; t <= E; t += 1) {
              e.push(c[t]);
            }

            return e;
          }()
        }), void (t.params.virtual.renderExternalUpdate && T());
        var C = [],
            M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var z = p; z <= u; z += 1) {
          (z < y || z > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + z + '"]').remove();
        }

        for (var P = 0; P < c.length; P += 1) {
          P >= y && P <= E && (void 0 === u || e ? M.push(P) : (P > u && M.push(P), P < p && C.push(P)));
        }

        M.forEach(function (e) {
          t.$wrapperEl.append(v(c[e], e));
        }), C.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(v(c[e], e));
        }), t.$wrapperEl.children(".swiper-slide").css(m, x + "px"), T();
      },
      renderSlide: function renderSlide(e, t) {
        var a = this,
            i = a.params.virtual;
        if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
        var s = i.renderSlide ? m(i.renderSlide.call(a, e, t)) : m('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s;
      },
      appendSlide: function appendSlide(e) {
        var t = this;
        if ("object" == _typeof(e) && "length" in e) for (var a = 0; a < e.length; a += 1) {
          e[a] && t.virtual.slides.push(e[a]);
        } else t.virtual.slides.push(e);
        t.virtual.update(!0);
      },
      prependSlide: function prependSlide(e) {
        var t = this,
            a = t.activeIndex,
            i = a + 1,
            s = 1;

        if (Array.isArray(e)) {
          for (var r = 0; r < e.length; r += 1) {
            e[r] && t.virtual.slides.unshift(e[r]);
          }

          i = a + e.length, s = e.length;
        } else t.virtual.slides.unshift(e);

        if (t.params.virtual.cache) {
          var n = t.virtual.cache,
              l = {};
          Object.keys(n).forEach(function (e) {
            var t = n[e],
                a = t.attr("data-swiper-slide-index");
            a && t.attr("data-swiper-slide-index", parseInt(a, 10) + 1), l[parseInt(e, 10) + s] = t;
          }), t.virtual.cache = l;
        }

        t.virtual.update(!0), t.slideTo(i, 0);
      },
      removeSlide: function removeSlide(e) {
        var t = this;

        if (null != e) {
          var a = t.activeIndex;
          if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) {
            t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < a && (a -= 1), a = Math.max(a, 0);
          } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < a && (a -= 1), a = Math.max(a, 0);
          t.virtual.update(!0), t.slideTo(a, 0);
        }
      },
      removeAllSlides: function removeAllSlides() {
        var e = this;
        e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
      }
    },
        j = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        M(this, {
          virtual: t({}, q, {
            slides: this.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = {
              watchSlidesProgress: !0
            };
            S(e.params, t), S(e.originalParams, t), e.params.initialSlide || e.virtual.update();
          }
        },
        setTranslate: function setTranslate(e) {
          e.params.virtual.enabled && e.virtual.update();
        }
      }
    },
        U = {
      handle: function handle(e) {
        var t = this;

        if (t.enabled) {
          var a = l(),
              i = r(),
              s = t.rtlTranslate,
              n = e;
          n.originalEvent && (n = n.originalEvent);
          var o = n.keyCode || n.charCode,
              d = t.params.keyboard.pageUpDown,
              p = d && 33 === o,
              u = d && 34 === o,
              c = 37 === o,
              h = 39 === o,
              v = 38 === o,
              f = 40 === o;
          if (!t.allowSlideNext && (t.isHorizontal() && h || t.isVertical() && f || u)) return !1;
          if (!t.allowSlidePrev && (t.isHorizontal() && c || t.isVertical() && v || p)) return !1;

          if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
            if (t.params.keyboard.onlyInViewport && (p || u || c || h || v || f)) {
              var m = !1;
              if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
              var g = t.$el,
                  b = g[0].clientWidth,
                  w = g[0].clientHeight,
                  y = a.innerWidth,
                  E = a.innerHeight,
                  x = t.$el.offset();
              s && (x.left -= t.$el[0].scrollLeft);

              for (var T = [[x.left, x.top], [x.left + b, x.top], [x.left, x.top + w], [x.left + b, x.top + w]], C = 0; C < T.length; C += 1) {
                var S = T[C];

                if (S[0] >= 0 && S[0] <= y && S[1] >= 0 && S[1] <= E) {
                  if (0 === S[0] && 0 === S[1]) continue;
                  m = !0;
                }
              }

              if (!m) return;
            }

            t.isHorizontal() ? ((p || u || c || h) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((u || h) && !s || (p || c) && s) && t.slideNext(), ((p || c) && !s || (u || h) && s) && t.slidePrev()) : ((p || u || v || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (u || f) && t.slideNext(), (p || v) && t.slidePrev()), t.emit("keyPress", o);
          }
        }
      },
      enable: function enable() {
        var e = this,
            t = r();
        e.keyboard.enabled || (m(t).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0);
      },
      disable: function disable() {
        var e = this,
            t = r();
        e.keyboard.enabled && (m(t).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1);
      }
    },
        K = {
      name: "keyboard",
      params: {
        keyboard: {
          enabled: !1,
          onlyInViewport: !0,
          pageUpDown: !0
        }
      },
      create: function create() {
        M(this, {
          keyboard: t({
            enabled: !1
          }, U)
        });
      },
      on: {
        init: function init(e) {
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function destroy(e) {
          e.keyboard.enabled && e.keyboard.disable();
        }
      }
    };
    var Z = {
      lastScrollTime: x(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function event() {
        return l().navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
          var e = r(),
              t = "onwheel",
              a = (t in e);

          if (!a) {
            var i = e.createElement("div");
            i.setAttribute(t, "return;"), a = "function" == typeof i.onwheel;
          }

          return !a && e.implementation && e.implementation.hasFeature && !0 !== e.implementation.hasFeature("", "") && (a = e.implementation.hasFeature("Events.wheel", "3.0")), a;
        }() ? "wheel" : "mousewheel";
      },
      normalize: function normalize(e) {
        var t = 0,
            a = 0,
            i = 0,
            s = 0;
        return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = s, s = 0), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        this.enabled && (this.mouseEntered = !0);
      },
      handleMouseLeave: function handleMouseLeave() {
        this.enabled && (this.mouseEntered = !1);
      },
      handle: function handle(e) {
        var t = e,
            a = this;

        if (a.enabled) {
          var i = a.params.mousewheel;
          a.params.cssMode && t.preventDefault();
          var s = a.$el;
          if ("container" !== a.params.mousewheel.eventsTarget && (s = m(a.params.mousewheel.eventsTarget)), !a.mouseEntered && !s[0].contains(t.target) && !i.releaseOnEdges) return !0;
          t.originalEvent && (t = t.originalEvent);
          var r = 0,
              n = a.rtlTranslate ? -1 : 1,
              l = Z.normalize(t);
          if (i.forceToAxis) {
            if (a.isHorizontal()) {
              if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
              r = -l.pixelX * n;
            } else {
              if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
              r = -l.pixelY;
            }
          } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * n : -l.pixelY;
          if (0 === r) return !0;
          i.invert && (r = -r);
          var o = a.getTranslate() + r * i.sensitivity;

          if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), (!!a.params.loop || !(o === a.minTranslate() || o === a.maxTranslate())) && a.params.nested && t.stopPropagation(), a.params.freeMode) {
            var d = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r)
            },
                p = a.mousewheel.lastEventBeforeSnap,
                u = p && d.time < p.time + 500 && d.delta <= p.delta && d.direction === p.direction;

            if (!u) {
              a.mousewheel.lastEventBeforeSnap = void 0, a.params.loop && a.loopFix();
              var c = a.getTranslate() + r * i.sensitivity,
                  h = a.isBeginning,
                  v = a.isEnd;

              if (c >= a.minTranslate() && (c = a.minTranslate()), c <= a.maxTranslate() && (c = a.maxTranslate()), a.setTransition(0), a.setTranslate(c), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!h && a.isBeginning || !v && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky) {
                clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = void 0;
                var f = a.mousewheel.recentWheelEvents;
                f.length >= 15 && f.shift();
                var g = f.length ? f[f.length - 1] : void 0,
                    b = f[0];
                if (f.push(d), g && (d.delta > g.delta || d.direction !== g.direction)) f.splice(0);else if (f.length >= 15 && d.time - b.time < 500 && b.delta - d.delta >= 1 && d.delta <= 6) {
                  var w = r > 0 ? .8 : .2;
                  a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.mousewheel.timeout = E(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, w);
                  }, 0);
                }
                a.mousewheel.timeout || (a.mousewheel.timeout = E(function () {
                  a.mousewheel.lastEventBeforeSnap = d, f.splice(0), a.slideToClosest(a.params.speed, !0, void 0, .5);
                }, 500));
              }

              if (u || a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), c === a.minTranslate() || c === a.maxTranslate()) return !0;
            }
          } else {
            var y = {
              time: x(),
              delta: Math.abs(r),
              direction: Math.sign(r),
              raw: e
            },
                T = a.mousewheel.recentWheelEvents;
            T.length >= 2 && T.shift();
            var C = T.length ? T[T.length - 1] : void 0;
            if (T.push(y), C ? (y.direction !== C.direction || y.delta > C.delta || y.time > C.time + 150) && a.mousewheel.animateSlider(y) : a.mousewheel.animateSlider(y), a.mousewheel.releaseScroll(y)) return !0;
          }

          return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
        }
      },
      animateSlider: function animateSlider(e) {
        var t = this,
            a = l();
        return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && !(this.params.mousewheel.thresholdTime && x() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (e.delta >= 6 && x() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = new a.Date().getTime(), !1));
      },
      releaseScroll: function releaseScroll(e) {
        var t = this,
            a = t.params.mousewheel;

        if (e.direction < 0) {
          if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
        } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges) return !0;

        return !1;
      },
      enable: function enable() {
        var e = this,
            t = Z.event();
        if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (e.mousewheel.enabled) return !1;
        var a = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.on("mouseenter", e.mousewheel.handleMouseEnter), a.on("mouseleave", e.mousewheel.handleMouseLeave), a.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
      },
      disable: function disable() {
        var e = this,
            t = Z.event();
        if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
        if (!t) return !1;
        if (!e.mousewheel.enabled) return !1;
        var a = e.$el;
        return "container" !== e.params.mousewheel.eventsTarget && (a = m(e.params.mousewheel.eventsTarget)), a.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
      }
    },
        J = {
      toggleEl: function toggleEl(e, t) {
        e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t);
      },
      update: function update() {
        var e = this,
            t = e.params.navigation,
            a = e.navigation.toggleEl;

        if (!e.params.loop) {
          var i = e.navigation,
              s = i.$nextEl,
              r = i.$prevEl;
          r && r.length > 0 && (e.isBeginning ? a(r, !0) : a(r, !1), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? a(s, !0) : a(s, !1), e.params.watchOverflow && e.enabled && s[e.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      onPrevClick: function onPrevClick(e) {
        var t = this;
        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var t = this;
        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext();
      },
      init: function init() {
        var e,
            t,
            a = this,
            i = a.params.navigation;
        (a.params.navigation = P(a.$el, a.params.navigation, a.params.createElements, {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev"
        }), i.nextEl || i.prevEl) && (i.nextEl && (e = m(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = m(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", a.navigation.onNextClick), t && t.length > 0 && t.on("click", a.navigation.onPrevClick), S(a.navigation, {
          $nextEl: e,
          nextEl: e && e[0],
          $prevEl: t,
          prevEl: t && t[0]
        }), a.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)));
      },
      destroy: function destroy() {
        var e = this,
            t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
        a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
      }
    },
        Q = {
      update: function update() {
        var e = this,
            t = e.rtl,
            a = e.params.pagination;

        if (a.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var i,
              s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              r = e.pagination.$el,
              n = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

          if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > s - 1 - 2 * e.loopedSlides && (i -= s - 2 * e.loopedSlides), i > n - 1 && (i -= n), i < 0 && "bullets" !== e.params.paginationType && (i = n + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
            var l,
                o,
                d,
                p = e.pagination.bullets;
            if (a.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = i - e.pagination.dynamicBulletIndex, d = ((o = l + (Math.min(p.length, a.dynamicMainBullets) - 1)) + l) / 2), p.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), r.length > 1) p.each(function (e) {
              var t = m(e),
                  s = t.index();
              s === i && t.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= l && s <= o && t.addClass(a.bulletActiveClass + "-main"), s === l && t.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && t.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"));
            });else {
              var u = p.eq(i),
                  c = u.index();

              if (u.addClass(a.bulletActiveClass), a.dynamicBullets) {
                for (var h = p.eq(l), v = p.eq(o), f = l; f <= o; f += 1) {
                  p.eq(f).addClass(a.bulletActiveClass + "-main");
                }

                if (e.params.loop) {
                  if (c >= p.length - a.dynamicMainBullets) {
                    for (var g = a.dynamicMainBullets; g >= 0; g -= 1) {
                      p.eq(p.length - g).addClass(a.bulletActiveClass + "-main");
                    }

                    p.eq(p.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev");
                  } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
                } else h.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), v.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next");
              }
            }

            if (a.dynamicBullets) {
              var b = Math.min(p.length, a.dynamicMainBullets + 4),
                  w = (e.pagination.bulletSize * b - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                  y = t ? "right" : "left";
              p.css(e.isHorizontal() ? y : "top", w + "px");
            }
          }

          if ("fraction" === a.type && (r.find(z(a.currentClass)).text(a.formatFractionCurrent(i + 1)), r.find(z(a.totalClass)).text(a.formatFractionTotal(n))), "progressbar" === a.type) {
            var E;
            E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
            var x = (i + 1) / n,
                T = 1,
                C = 1;
            "horizontal" === E ? T = x : C = x, r.find(z(a.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + T + ") scaleY(" + C + ")").transition(e.params.speed);
          }

          "custom" === a.type && a.renderCustom ? (r.html(a.renderCustom(e, i + 1, n)), e.emit("paginationRender", r[0])) : e.emit("paginationUpdate", r[0]), e.params.watchOverflow && e.enabled && r[e.isLocked ? "addClass" : "removeClass"](a.lockClass);
        }
      },
      render: function render() {
        var e = this,
            t = e.params.pagination;

        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              i = e.pagination.$el,
              s = "";

          if ("bullets" === t.type) {
            var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            e.params.freeMode && !e.params.loop && r > a && (r = a);

            for (var n = 0; n < r; n += 1) {
              t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
            }

            i.html(s), e.pagination.bullets = i.find(z(t.bulletClass));
          }

          "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function init() {
        var e = this;
        e.params.pagination = P(e.$el, e.params.pagination, e.params.createElements, {
          el: "swiper-pagination"
        });
        var t = e.params.pagination;

        if (t.el) {
          var a = m(t.el);
          0 !== a.length && (e.params.uniqueNavElements && "string" == typeof t.el && a.length > 1 && (a = e.$el.find(t.el)), "bullets" === t.type && t.clickable && a.addClass(t.clickableClass), a.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (a.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && a.addClass(t.progressbarOppositeClass), t.clickable && a.on("click", z(t.bulletClass), function (t) {
            t.preventDefault();
            var a = m(this).index() * e.params.slidesPerGroup;
            e.params.loop && (a += e.loopedSlides), e.slideTo(a);
          }), S(e.pagination, {
            $el: a,
            el: a[0]
          }), e.enabled || a.addClass(t.lockClass));
        }
      },
      destroy: function destroy() {
        var e = this,
            t = e.params.pagination;

        if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", z(t.bulletClass));
        }
      }
    },
        ee = {
      setTranslate: function setTranslate() {
        var e = this;

        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
              a = e.rtlTranslate,
              i = e.progress,
              s = t.dragSize,
              r = t.trackSize,
              n = t.$dragEl,
              l = t.$el,
              o = e.params.scrollbar,
              d = s,
              p = (r - s) * i;
          a ? (p = -p) > 0 ? (d = s - p, p = 0) : -p + s > r && (d = r + p) : p < 0 ? (d = s + p, p = 0) : p + s > r && (d = r - p), e.isHorizontal() ? (n.transform("translate3d(" + p + "px, 0, 0)"), n[0].style.width = d + "px") : (n.transform("translate3d(0px, " + p + "px, 0)"), n[0].style.height = d + "px"), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            l[0].style.opacity = 0, l.transition(400);
          }, 1e3));
        }
      },
      setTransition: function setTransition(e) {
        var t = this;
        t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function updateSize() {
        var e = this;

        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
              a = t.$dragEl,
              i = t.$el;
          a[0].style.width = "", a[0].style.height = "";
          var s,
              r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
              n = e.size / e.virtualSize,
              l = n * (r / e.size);
          s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), S(t, {
            trackSize: r,
            divider: n,
            moveDivider: l,
            dragSize: s
          }), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function getPointerPosition(e) {
        return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var t,
            a = this,
            i = a.scrollbar,
            s = a.rtlTranslate,
            r = i.$el,
            n = i.dragSize,
            l = i.trackSize,
            o = i.dragStartPos;
        t = (i.getPointerPosition(e) - r.offset()[a.isHorizontal() ? "left" : "top"] - (null !== o ? o : n / 2)) / (l - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
        var d = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
        a.updateProgress(d), a.setTranslate(d), a.updateActiveIndex(), a.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var t = this,
            a = t.params.scrollbar,
            i = t.scrollbar,
            s = t.$wrapperEl,
            r = i.$el,
            n = i.$dragEl;
        t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === n[0] || e.target === n ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e);
      },
      onDragMove: function onDragMove(e) {
        var t = this,
            a = t.scrollbar,
            i = t.$wrapperEl,
            s = a.$el,
            r = a.$dragEl;
        t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function onDragEnd(e) {
        var t = this,
            a = t.params.scrollbar,
            i = t.scrollbar,
            s = t.$wrapperEl,
            r = i.$el;
        t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = E(function () {
          r.css("opacity", 0), r.transition(400);
        }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest());
      },
      enableDraggable: function enableDraggable() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = r(),
              a = e.scrollbar,
              i = e.touchEventsTouch,
              s = e.touchEventsDesktop,
              n = e.params,
              l = e.support,
              o = a.$el[0],
              d = !(!l.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              p = !(!l.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o && (l.touch ? (o.addEventListener(i.start, e.scrollbar.onDragStart, d), o.addEventListener(i.move, e.scrollbar.onDragMove, d), o.addEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.addEventListener(s.start, e.scrollbar.onDragStart, d), t.addEventListener(s.move, e.scrollbar.onDragMove, d), t.addEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      disableDraggable: function disableDraggable() {
        var e = this;

        if (e.params.scrollbar.el) {
          var t = r(),
              a = e.scrollbar,
              i = e.touchEventsTouch,
              s = e.touchEventsDesktop,
              n = e.params,
              l = e.support,
              o = a.$el[0],
              d = !(!l.passiveListener || !n.passiveListeners) && {
            passive: !1,
            capture: !1
          },
              p = !(!l.passiveListener || !n.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o && (l.touch ? (o.removeEventListener(i.start, e.scrollbar.onDragStart, d), o.removeEventListener(i.move, e.scrollbar.onDragMove, d), o.removeEventListener(i.end, e.scrollbar.onDragEnd, p)) : (o.removeEventListener(s.start, e.scrollbar.onDragStart, d), t.removeEventListener(s.move, e.scrollbar.onDragMove, d), t.removeEventListener(s.end, e.scrollbar.onDragEnd, p)));
        }
      },
      init: function init() {
        var e = this,
            t = e.scrollbar,
            a = e.$el;
        e.params.scrollbar = P(a, e.params.scrollbar, e.params.createElements, {
          el: "swiper-scrollbar"
        });
        var i = e.params.scrollbar;

        if (i.el) {
          var s = m(i.el);
          e.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === a.find(i.el).length && (s = a.find(i.el));
          var r = s.find("." + e.params.scrollbar.dragClass);
          0 === r.length && (r = m('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), S(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }), i.draggable && t.enableDraggable(), s && s[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
        }
      },
      destroy: function destroy() {
        this.scrollbar.disableDraggable();
      }
    },
        te = {
      setTransform: function setTransform(e, t) {
        var a = this.rtl,
            i = m(e),
            s = a ? -1 : 1,
            r = i.attr("data-swiper-parallax") || "0",
            n = i.attr("data-swiper-parallax-x"),
            l = i.attr("data-swiper-parallax-y"),
            o = i.attr("data-swiper-parallax-scale"),
            d = i.attr("data-swiper-parallax-opacity");

        if (n || l ? (n = n || "0", l = l || "0") : this.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != d) {
          var p = d - (d - 1) * (1 - Math.abs(t));
          i[0].style.opacity = p;
        }

        if (null == o) i.transform("translate3d(" + n + ", " + l + ", 0px)");else {
          var u = o - (o - 1) * (1 - Math.abs(t));
          i.transform("translate3d(" + n + ", " + l + ", 0px) scale(" + u + ")");
        }
      },
      setTranslate: function setTranslate() {
        var e = this,
            t = e.$el,
            a = e.slides,
            i = e.progress,
            s = e.snapGrid;
        t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          e.parallax.setTransform(t, i);
        }), a.each(function (t, a) {
          var r = t.progress;
          e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(a / 2) - i * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), m(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
            e.parallax.setTransform(t, r);
          });
        });
      },
      setTransition: function setTransition(e) {
        void 0 === e && (e = this.params.speed);
        this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t) {
          var a = m(t),
              i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
          0 === e && (i = 0), a.transition(i);
        });
      }
    },
        ae = {
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
            a = e.targetTouches[0].pageY,
            i = e.targetTouches[1].pageX,
            s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function onGestureStart(e) {
        var t = this,
            a = t.support,
            i = t.params.zoom,
            s = t.zoom,
            r = s.gesture;

        if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !a.gestures) {
          if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureTouched = !0, r.scaleStart = ae.getDistanceBetweenTouches(e);
        }

        r.$slideEl && r.$slideEl.length || (r.$slideEl = m(e.target).closest("." + t.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = t.slides.eq(t.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), t.zoom.isScaling = !0) : r.$imageEl = void 0;
      },
      onGestureChange: function onGestureChange(e) {
        var t = this,
            a = t.support,
            i = t.params.zoom,
            s = t.zoom,
            r = s.gesture;

        if (!a.gestures) {
          if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
          s.fakeGestureMoved = !0, r.scaleMove = ae.getDistanceBetweenTouches(e);
        }

        r.$imageEl && 0 !== r.$imageEl.length ? (a.gestures ? s.scale = e.scale * s.currentScale : s.scale = r.scaleMove / r.scaleStart * s.currentScale, s.scale > r.maxRatio && (s.scale = r.maxRatio - 1 + Math.pow(s.scale - r.maxRatio + 1, .5)), s.scale < i.minRatio && (s.scale = i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")")) : "gesturechange" === e.type && s.onGestureStart(e);
      },
      onGestureEnd: function onGestureEnd(e) {
        var t = this,
            a = t.device,
            i = t.support,
            s = t.params.zoom,
            r = t.zoom,
            n = r.gesture;

        if (!i.gestures) {
          if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
          if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !a.android) return;
          r.fakeGestureTouched = !1, r.fakeGestureMoved = !1;
        }

        n.$imageEl && 0 !== n.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, n.maxRatio), s.minRatio), n.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (n.$slideEl = void 0));
      },
      onTouchStart: function onTouchStart(e) {
        var t = this.device,
            a = this.zoom,
            i = a.gesture,
            s = a.image;
        i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (t.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
      },
      onTouchMove: function onTouchMove(e) {
        var t = this,
            a = t.zoom,
            i = a.gesture,
            s = a.image,
            r = a.velocity;

        if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
          s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = T(i.$imageWrapEl[0], "x") || 0, s.startY = T(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
          var n = s.width * a.scale,
              l = s.height * a.scale;

          if (!(n < i.slideWidth && l < i.slideHeight)) {
            if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - l / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
              if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
              if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
            }

            e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
          }
        }
      },
      onTouchEnd: function onTouchEnd() {
        var e = this.zoom,
            t = e.gesture,
            a = e.image,
            i = e.velocity;

        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
          a.isTouched = !1, a.isMoved = !1;
          var s = 300,
              r = 300,
              n = i.x * s,
              l = a.currentX + n,
              o = i.y * r,
              d = a.currentY + o;
          0 !== i.x && (s = Math.abs((l - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          a.currentX = l, a.currentY = d;
          var u = a.width * e.scale,
              c = a.height * e.scale;
          a.minX = Math.min(t.slideWidth / 2 - u / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - c / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
        }
      },
      onTransitionEnd: function onTransitionEnd() {
        var e = this,
            t = e.zoom,
            a = t.gesture;
        a.$slideEl && e.previousIndex !== e.activeIndex && (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, a.$slideEl = void 0, a.$imageEl = void 0, a.$imageWrapEl = void 0);
      },
      toggle: function toggle(e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t["in"](e);
      },
      "in": function _in(e) {
        var t,
            a,
            i,
            s,
            r,
            n,
            o,
            d,
            p,
            u,
            c,
            h,
            v,
            f,
            g,
            b,
            w = this,
            y = l(),
            E = w.zoom,
            x = w.params.zoom,
            T = E.gesture,
            C = E.image;
        (T.$slideEl || (e && e.target && (T.$slideEl = m(e.target).closest("." + w.params.slideClass)), T.$slideEl || (w.params.virtual && w.params.virtual.enabled && w.virtual ? T.$slideEl = w.$wrapperEl.children("." + w.params.slideActiveClass) : T.$slideEl = w.slides.eq(w.activeIndex)), T.$imageEl = T.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), T.$imageWrapEl = T.$imageEl.parent("." + x.containerClass)), T.$imageEl && 0 !== T.$imageEl.length && T.$imageWrapEl && 0 !== T.$imageWrapEl.length) && (T.$slideEl.addClass("" + x.zoomedSlideClass), void 0 === C.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = C.touchesStart.x, a = C.touchesStart.y), E.scale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, E.currentScale = T.$imageWrapEl.attr("data-swiper-zoom") || x.maxRatio, e ? (g = T.$slideEl[0].offsetWidth, b = T.$slideEl[0].offsetHeight, i = T.$slideEl.offset().left + y.scrollX + g / 2 - t, s = T.$slideEl.offset().top + y.scrollY + b / 2 - a, o = T.$imageEl[0].offsetWidth, d = T.$imageEl[0].offsetHeight, p = o * E.scale, u = d * E.scale, v = -(c = Math.min(g / 2 - p / 2, 0)), f = -(h = Math.min(b / 2 - u / 2, 0)), (r = i * E.scale) < c && (r = c), r > v && (r = v), (n = s * E.scale) < h && (n = h), n > f && (n = f)) : (r = 0, n = 0), T.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), T.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + E.scale + ")"));
      },
      out: function out() {
        var e = this,
            t = e.zoom,
            a = e.params.zoom,
            i = t.gesture;
        i.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? i.$slideEl = e.$wrapperEl.children("." + e.params.slideActiveClass) : i.$slideEl = e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && i.$imageWrapEl && 0 !== i.$imageWrapEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0);
      },
      toggleGestures: function toggleGestures(e) {
        var t = this,
            a = t.zoom,
            i = a.slideSelector,
            s = a.passiveListener;
        t.$wrapperEl[e]("gesturestart", i, a.onGestureStart, s), t.$wrapperEl[e]("gesturechange", i, a.onGestureChange, s), t.$wrapperEl[e]("gestureend", i, a.onGestureEnd, s);
      },
      enableGestures: function enableGestures() {
        this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"));
      },
      disableGestures: function disableGestures() {
        this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"));
      },
      enable: function enable() {
        var e = this,
            t = e.support,
            a = e.zoom;

        if (!a.enabled) {
          a.enabled = !0;
          var i = !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
              s = !t.passiveListener || {
            passive: !1,
            capture: !0
          },
              r = "." + e.params.slideClass;
          e.zoom.passiveListener = i, e.zoom.slideSelector = r, t.gestures ? (e.$wrapperEl.on(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.on(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, a.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, r, a.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, r, a.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, a.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, a.onTouchMove, s);
        }
      },
      disable: function disable() {
        var e = this,
            t = e.zoom;

        if (t.enabled) {
          var a = e.support;
          e.zoom.enabled = !1;
          var i = !("touchstart" !== e.touchEvents.start || !a.passiveListener || !e.params.passiveListeners) && {
            passive: !0,
            capture: !1
          },
              s = !a.passiveListener || {
            passive: !1,
            capture: !0
          },
              r = "." + e.params.slideClass;
          a.gestures ? (e.$wrapperEl.off(e.touchEvents.start, e.zoom.enableGestures, i), e.$wrapperEl.off(e.touchEvents.end, e.zoom.disableGestures, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, r, t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, r, t.onGestureEnd, i), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove, s);
        }
      }
    },
        ie = {
      loadInSlide: function loadInSlide(e, t) {
        void 0 === t && (t = !0);
        var a = this,
            i = a.params.lazy;

        if (void 0 !== e && 0 !== a.slides.length) {
          var s = a.virtual && a.params.virtual.enabled ? a.$wrapperEl.children("." + a.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : a.slides.eq(e),
              r = s.find("." + i.elementClass + ":not(." + i.loadedClass + "):not(." + i.loadingClass + ")");
          !s.hasClass(i.elementClass) || s.hasClass(i.loadedClass) || s.hasClass(i.loadingClass) || r.push(s[0]), 0 !== r.length && r.each(function (e) {
            var r = m(e);
            r.addClass(i.loadingClass);
            var n = r.attr("data-background"),
                l = r.attr("data-src"),
                o = r.attr("data-srcset"),
                d = r.attr("data-sizes"),
                p = r.parent("picture");
            a.loadImage(r[0], l || n, o, d, !1, function () {
              if (null != a && a && (!a || a.params) && !a.destroyed) {
                if (n ? (r.css("background-image", 'url("' + n + '")'), r.removeAttr("data-background")) : (o && (r.attr("srcset", o), r.removeAttr("data-srcset")), d && (r.attr("sizes", d), r.removeAttr("data-sizes")), p.length && p.children("source").each(function (e) {
                  var t = m(e);
                  t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                }), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(i.loadedClass).removeClass(i.loadingClass), s.find("." + i.preloaderClass).remove(), a.params.loop && t) {
                  var e = s.attr("data-swiper-slide-index");

                  if (s.hasClass(a.params.slideDuplicateClass)) {
                    var u = a.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + a.params.slideDuplicateClass + ")");
                    a.lazy.loadInSlide(u.index(), !1);
                  } else {
                    var c = a.$wrapperEl.children("." + a.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                    a.lazy.loadInSlide(c.index(), !1);
                  }
                }

                a.emit("lazyImageReady", s[0], r[0]), a.params.autoHeight && a.updateAutoHeight();
              }
            }), a.emit("lazyImageLoad", s[0], r[0]);
          });
        }
      },
      load: function load() {
        var e = this,
            t = e.$wrapperEl,
            a = e.params,
            i = e.slides,
            s = e.activeIndex,
            r = e.virtual && a.virtual.enabled,
            n = a.lazy,
            l = a.slidesPerView;

        function o(e) {
          if (r) {
            if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (i[e]) return !0;

          return !1;
        }

        function d(e) {
          return r ? m(e).attr("data-swiper-slide-index") : m(e).index();
        }

        if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (t) {
          var a = r ? m(t).attr("data-swiper-slide-index") : m(t).index();
          e.lazy.loadInSlide(a);
        });else if (l > 1) for (var p = s; p < s + l; p += 1) {
          o(p) && e.lazy.loadInSlide(p);
        } else e.lazy.loadInSlide(s);
        if (n.loadPrevNext) if (l > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          for (var u = n.loadPrevNextAmount, c = l, h = Math.min(s + c + Math.max(u, c), i.length), v = Math.max(s - Math.max(c, u), 0), f = s + l; f < h; f += 1) {
            o(f) && e.lazy.loadInSlide(f);
          }

          for (var g = v; g < s; g += 1) {
            o(g) && e.lazy.loadInSlide(g);
          }
        } else {
          var b = t.children("." + a.slideNextClass);
          b.length > 0 && e.lazy.loadInSlide(d(b));
          var w = t.children("." + a.slidePrevClass);
          w.length > 0 && e.lazy.loadInSlide(d(w));
        }
      },
      checkInViewOnLoad: function checkInViewOnLoad() {
        var e = l(),
            t = this;

        if (t && !t.destroyed) {
          var a = t.params.lazy.scrollingElement ? m(t.params.lazy.scrollingElement) : m(e),
              i = a[0] === e,
              s = i ? e.innerWidth : a[0].offsetWidth,
              r = i ? e.innerHeight : a[0].offsetHeight,
              n = t.$el.offset(),
              o = !1;
          t.rtlTranslate && (n.left -= t.$el[0].scrollLeft);

          for (var d = [[n.left, n.top], [n.left + t.width, n.top], [n.left, n.top + t.height], [n.left + t.width, n.top + t.height]], p = 0; p < d.length; p += 1) {
            var u = d[p];

            if (u[0] >= 0 && u[0] <= s && u[1] >= 0 && u[1] <= r) {
              if (0 === u[0] && 0 === u[1]) continue;
              o = !0;
            }
          }

          var c = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          o ? (t.lazy.load(), a.off("scroll", t.lazy.checkInViewOnLoad, c)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, a.on("scroll", t.lazy.checkInViewOnLoad, c));
        }
      }
    },
        se = {
      LinearSpline: function LinearSpline(e, t) {
        var a,
            i,
            s,
            r,
            n,
            l = function l(e, t) {
          for (i = -1, a = e.length; a - i > 1;) {
            e[s = a + i >> 1] <= t ? i = s : a = s;
          }

          return a;
        };

        return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
          return e ? (n = l(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        }, this;
      },
      getInterpolateFunction: function getInterpolateFunction(e) {
        var t = this;
        t.controller.spline || (t.controller.spline = t.params.loop ? new se.LinearSpline(t.slidesGrid, e.slidesGrid) : new se.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function setTranslate(e, t) {
        var a,
            i,
            s = this,
            r = s.controller.control,
            n = s.constructor;

        function l(e) {
          var t = s.rtlTranslate ? -s.translate : s.translate;
          "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) {
          r[o] !== t && r[o] instanceof n && l(r[o]);
        } else r instanceof n && t !== r && l(r);
      },
      setTransition: function setTransition(e, t) {
        var a,
            i = this,
            s = i.constructor,
            r = i.controller.control;

        function n(t) {
          t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && E(function () {
            t.updateAutoHeight();
          }), t.$wrapperEl.transitionEnd(function () {
            r && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
          }));
        }

        if (Array.isArray(r)) for (a = 0; a < r.length; a += 1) {
          r[a] !== t && r[a] instanceof s && n(r[a]);
        } else r instanceof s && t !== r && n(r);
      }
    },
        re = {
      getRandomNumber: function getRandomNumber(e) {
        void 0 === e && (e = 16);
        return "x".repeat(e).replace(/x/g, function () {
          return Math.round(16 * Math.random()).toString(16);
        });
      },
      makeElFocusable: function makeElFocusable(e) {
        return e.attr("tabIndex", "0"), e;
      },
      makeElNotFocusable: function makeElNotFocusable(e) {
        return e.attr("tabIndex", "-1"), e;
      },
      addElRole: function addElRole(e, t) {
        return e.attr("role", t), e;
      },
      addElRoleDescription: function addElRoleDescription(e, t) {
        return e.attr("aria-roledescription", t), e;
      },
      addElControls: function addElControls(e, t) {
        return e.attr("aria-controls", t), e;
      },
      addElLabel: function addElLabel(e, t) {
        return e.attr("aria-label", t), e;
      },
      addElId: function addElId(e, t) {
        return e.attr("id", t), e;
      },
      addElLive: function addElLive(e, t) {
        return e.attr("aria-live", t), e;
      },
      disableEl: function disableEl(e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function enableEl(e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
        if (13 === e.keyCode || 32 === e.keyCode) {
          var t = this,
              a = t.params.a11y,
              i = m(e.target);
          t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is(z(t.params.pagination.bulletClass)) && i[0].click();
        }
      },
      notify: function notify(e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function updateNavigation() {
        var e = this;

        if (!e.params.loop && e.navigation) {
          var t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
          i && i.length > 0 && (e.isBeginning ? (e.a11y.disableEl(i), e.a11y.makeElNotFocusable(i)) : (e.a11y.enableEl(i), e.a11y.makeElFocusable(i))), a && a.length > 0 && (e.isEnd ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a)) : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a)));
        }
      },
      updatePagination: function updatePagination() {
        var e = this,
            t = e.params.a11y;
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (a) {
          var i = m(a);
          e.a11y.makeElFocusable(i), e.params.pagination.renderBullet || (e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.paginationBulletMessage.replace(/\{\{index\}\}/, i.index() + 1)));
        });
      },
      init: function init() {
        var e = this,
            t = e.params.a11y;
        e.$el.append(e.a11y.liveRegion);
        var a = e.$el;
        t.containerRoleDescriptionMessage && e.a11y.addElRoleDescription(a, t.containerRoleDescriptionMessage), t.containerMessage && e.a11y.addElLabel(a, t.containerMessage);
        var i,
            s,
            r = e.$wrapperEl,
            n = r.attr("id") || "swiper-wrapper-" + e.a11y.getRandomNumber(16),
            l = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
        e.a11y.addElId(r, n), e.a11y.addElLive(r, l), t.itemRoleDescriptionMessage && e.a11y.addElRoleDescription(m(e.slides), t.itemRoleDescriptionMessage), e.a11y.addElRole(m(e.slides), t.slideRole), e.slides.each(function (a) {
          var i = m(a),
              s = t.slideLabelMessage.replace(/\{\{index\}\}/, i.index() + 1).replace(/\{\{slidesLength\}\}/, e.slides.length);
          e.a11y.addElLabel(i, s);
        }), e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), i && i.length && (e.a11y.makeElFocusable(i), "BUTTON" !== i[0].tagName && (e.a11y.addElRole(i, "button"), i.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(i, t.nextSlideMessage), e.a11y.addElControls(i, n)), s && s.length && (e.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (e.a11y.addElRole(s, "button"), s.on("keydown", e.a11y.onEnterOrSpaceKey)), e.a11y.addElLabel(s, t.prevSlideMessage), e.a11y.addElControls(s, n)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", z(e.params.pagination.bulletClass), e.a11y.onEnterOrSpaceKey);
      },
      destroy: function destroy() {
        var e,
            t,
            a = this;
        a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterOrSpaceKey), t && t.off("keydown", a.a11y.onEnterOrSpaceKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", z(a.params.pagination.bulletClass), a.a11y.onEnterOrSpaceKey);
      }
    },
        ne = {
      init: function init() {
        var e = this,
            t = l();

        if (e.params.history) {
          if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
          var a = e.history;
          a.initialized = !0, a.paths = ne.getPathValues(e.params.url), (a.paths.key || a.paths.value) && (a.scrollToSlide(0, a.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function destroy() {
        var e = l();
        this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function setHistoryPopState() {
        var e = this;
        e.history.paths = ne.getPathValues(e.params.url), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function getPathValues(e) {
        var t = l(),
            a = (e ? new URL(e) : t.location).pathname.slice(1).split("/").filter(function (e) {
          return "" !== e;
        }),
            i = a.length;
        return {
          key: a[i - 2],
          value: a[i - 1]
        };
      },
      setHistory: function setHistory(e, t) {
        var a = this,
            i = l();

        if (a.history.initialized && a.params.history.enabled) {
          var s;
          s = a.params.url ? new URL(a.params.url) : i.location;
          var r = a.slides.eq(t),
              n = ne.slugify(r.attr("data-history"));

          if (a.params.history.root.length > 0) {
            var o = a.params.history.root;
            "/" === o[o.length - 1] && (o = o.slice(0, o.length - 1)), n = o + "/" + e + "/" + n;
          } else s.pathname.includes(e) || (n = e + "/" + n);

          var d = i.history.state;
          d && d.value === n || (a.params.history.replaceState ? i.history.replaceState({
            value: n
          }, null, n) : i.history.pushState({
            value: n
          }, null, n));
        }
      },
      slugify: function slugify(e) {
        return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
      },
      scrollToSlide: function scrollToSlide(e, t, a) {
        var i = this;
        if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
          var n = i.slides.eq(s);

          if (ne.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
            var l = n.index();
            i.slideTo(l, e, a);
          }
        } else i.slideTo(0, e, a);
      }
    },
        le = {
      onHashCange: function onHashCange() {
        var e = this,
            t = r();
        e.emit("hashChange");
        var a = t.location.hash.replace("#", "");

        if (a !== e.slides.eq(e.activeIndex).attr("data-hash")) {
          var i = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + a + '"]').index();
          if (void 0 === i) return;
          e.slideTo(i);
        }
      },
      setHash: function setHash() {
        var e = this,
            t = l(),
            a = r();
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && t.history && t.history.replaceState) t.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""), e.emit("hashSet");else {
          var i = e.slides.eq(e.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
          a.location.hash = s || "", e.emit("hashSet");
        }
      },
      init: function init() {
        var e = this,
            t = r(),
            a = l();

        if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
          e.hashNavigation.initialized = !0;
          var i = t.location.hash.replace("#", "");
          if (i) for (var s = 0, n = e.slides.length; s < n; s += 1) {
            var o = e.slides.eq(s);

            if ((o.attr("data-hash") || o.attr("data-history")) === i && !o.hasClass(e.params.slideDuplicateClass)) {
              var d = o.index();
              e.slideTo(d, 0, e.params.runCallbacksOnInit, !0);
            }
          }
          e.params.hashNavigation.watchState && m(a).on("hashchange", e.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var e = l();
        this.params.hashNavigation.watchState && m(e).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
        oe = {
      run: function run() {
        var e = this,
            t = e.slides.eq(e.activeIndex),
            a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E(function () {
          var t;
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (t = e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && e.autoplay.run();
        }, a);
      },
      start: function start() {
        var e = this;
        return void 0 === e.autoplay.timeout && !e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0);
      },
      stop: function stop() {
        var e = this;
        return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
      },
      pause: function pause(e) {
        var t = this;
        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd);
        }) : (t.autoplay.paused = !1, t.autoplay.run())));
      },
      onVisibilityChange: function onVisibilityChange() {
        var e = this,
            t = r();
        "hidden" === t.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === t.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
      },
      onTransitionEnd: function onTransitionEnd(e) {
        var t = this;
        t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function (e) {
          t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd);
        }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
      },
      onMouseEnter: function onMouseEnter() {
        var e = this;
        e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e.$wrapperEl[0].removeEventListener(t, e.autoplay.onTransitionEnd);
        });
      },
      onMouseLeave: function onMouseLeave() {
        var e = this;
        e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, e.autoplay.run());
      },
      attachMouseEvents: function attachMouseEvents() {
        var e = this;
        e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", e.autoplay.onMouseEnter), e.$el.on("mouseleave", e.autoplay.onMouseLeave));
      },
      detachMouseEvents: function detachMouseEvents() {
        var e = this;
        e.$el.off("mouseenter", e.autoplay.onMouseEnter), e.$el.off("mouseleave", e.autoplay.onMouseLeave);
      }
    },
        de = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
              s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || (r = s, s = 0);
          var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({
            opacity: n
          }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            a = t.slides,
            i = t.$wrapperEl;

        if (a.transition(e), t.params.virtualTranslate && 0 !== e) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              s = !0, t.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
                i.trigger(e[a]);
              }
            }
          });
        }
      }
    },
        pe = {
      setTranslate: function setTranslate() {
        var e,
            t = this,
            a = t.$el,
            i = t.$wrapperEl,
            s = t.slides,
            r = t.width,
            n = t.height,
            l = t.rtlTranslate,
            o = t.size,
            d = t.browser,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            c = t.virtual && t.params.virtual.enabled,
            h = 0;
        p.shadow && (u ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
          height: r + "px"
        })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = m('<div class="swiper-cube-shadow"></div>'), a.append(e)));

        for (var v = 0; v < s.length; v += 1) {
          var f = s.eq(v),
              g = v;
          c && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var b = 90 * g,
              w = Math.floor(b / 360);
          l && (b = -b, w = Math.floor(-b / 360));
          var y = Math.max(Math.min(f[0].progress, 1), -1),
              E = 0,
              x = 0,
              T = 0;
          g % 4 == 0 ? (E = 4 * -w * o, T = 0) : (g - 1) % 4 == 0 ? (E = 0, T = 4 * -w * o) : (g - 2) % 4 == 0 ? (E = o + 4 * w * o, T = o) : (g - 3) % 4 == 0 && (E = -o, T = 3 * o + 4 * o * w), l && (E = -E), u || (x = E, E = 0);
          var C = "rotateX(" + (u ? 0 : -b) + "deg) rotateY(" + (u ? b : 0) + "deg) translate3d(" + E + "px, " + x + "px, " + T + "px)";

          if (y <= 1 && y > -1 && (h = 90 * g + 90 * y, l && (h = 90 * -g - 90 * y)), f.transform(C), p.slideShadows) {
            var S = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                M = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>'), f.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>'), f.append(M)), S.length && (S[0].style.opacity = Math.max(-y, 0)), M.length && (M[0].style.opacity = Math.max(y, 0));
          }
        }

        if (i.css({
          "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
          "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
          "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
          "transform-origin": "50% 50% -" + o / 2 + "px"
        }), p.shadow) if (u) e.transform("translate3d(0px, " + (r / 2 + p.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");else {
          var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P = 1.5 - (Math.sin(2 * z * Math.PI / 360) / 2 + Math.cos(2 * z * Math.PI / 360) / 2),
              k = p.shadowScale,
              $ = p.shadowScale / P,
              L = p.shadowOffset;
          e.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (n / 2 + L) + "px, " + -n / 2 / $ + "px) rotateX(-90deg)");
        }
        var I = d.isSafari || d.isWebView ? -o / 2 : 0;
        i.transform("translate3d(0px,0," + I + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
      },
      setTransition: function setTransition(e) {
        var t = this,
            a = t.$el;
        t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
      }
    },
        ue = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
          var s = t.eq(i),
              r = s[0].progress;
          e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
              l = 0,
              o = -s[0].swiperSlideOffset,
              d = 0;

          if (e.isHorizontal() ? a && (n = -n) : (d = o, o = 0, l = -n, n = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
            var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                u = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
            0 === p.length && (p = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === u.length && (u = m('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(u)), p.length && (p[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0));
          }

          s.transform("translate3d(" + o + "px, " + d + "px, 0px) rotateX(" + l + "deg) rotateY(" + n + "deg)");
        }
      },
      setTransition: function setTransition(e) {
        var t = this,
            a = t.slides,
            i = t.activeIndex,
            s = t.$wrapperEl;

        if (a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              r = !0, t.animating = !1;

              for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) {
                s.trigger(e[a]);
              }
            }
          });
        }
      }
    },
        ce = {
      setTranslate: function setTranslate() {
        for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.slidesSizesGrid, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : a / 2 - l, d = n ? r.rotate : -r.rotate, p = r.depth, u = 0, c = i.length; u < c; u += 1) {
          var h = i.eq(u),
              v = s[u],
              f = (o - h[0].swiperSlideOffset - v / 2) / v * r.modifier,
              g = n ? d * f : 0,
              b = n ? 0 : d * f,
              w = -p * Math.abs(f),
              y = r.stretch;
          "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * v);
          var E = n ? 0 : y * f,
              x = n ? y * f : 0,
              T = 1 - (1 - r.scale) * Math.abs(f);
          Math.abs(x) < .001 && (x = 0), Math.abs(E) < .001 && (E = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0), Math.abs(T) < .001 && (T = 0);
          var C = "translate3d(" + x + "px," + E + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg) scale(" + T + ")";

          if (h.transform(C), h[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
            var S = n ? h.find(".swiper-slide-shadow-left") : h.find(".swiper-slide-shadow-top"),
                M = n ? h.find(".swiper-slide-shadow-right") : h.find(".swiper-slide-shadow-bottom");
            0 === S.length && (S = m('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), h.append(S)), 0 === M.length && (M = m('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), h.append(M)), S.length && (S[0].style.opacity = f > 0 ? f : 0), M.length && (M[0].style.opacity = -f > 0 ? -f : 0);
          }
        }
      },
      setTransition: function setTransition(e) {
        this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
      }
    },
        he = {
      init: function init() {
        var e = this,
            t = e.params.thumbs;
        if (e.thumbs.initialized) return !1;
        e.thumbs.initialized = !0;
        var a = e.constructor;
        return t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, S(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), S(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : C(t.swiper) && (e.thumbs.swiper = new a(S({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0;
      },
      onThumbClick: function onThumbClick() {
        var e = this,
            t = e.thumbs.swiper;

        if (t) {
          var a = t.clickedIndex,
              i = t.clickedSlide;

          if (!(i && m(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
            var s;

            if (s = t.params.loop ? parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
              var r = e.activeIndex;
              e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
              var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                  l = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
              s = void 0 === n ? l : void 0 === l ? n : l - r < r - n ? l : n;
            }

            e.slideTo(s);
          }
        }
      },
      update: function update(e) {
        var t = this,
            a = t.thumbs.swiper;

        if (a) {
          var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView,
              s = t.params.thumbs.autoScrollOffset,
              r = s && !a.params.loop;

          if (t.realIndex !== a.realIndex || r) {
            var n,
                l,
                o = a.activeIndex;

            if (a.params.loop) {
              a.slides.eq(o).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, o = a.activeIndex);
              var d = a.slides.eq(o).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                  p = a.slides.eq(o).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
              n = void 0 === d ? p : void 0 === p ? d : p - o == o - d ? a.params.slidesPerGroup > 1 ? p : o : p - o < o - d ? p : d, l = t.activeIndex > t.previousIndex ? "next" : "prev";
            } else l = (n = t.realIndex) > t.previousIndex ? "next" : "prev";

            r && (n += "next" === l ? s : -1 * s), a.visibleSlidesIndexes && a.visibleSlidesIndexes.indexOf(n) < 0 && (a.params.centeredSlides ? n = n > o ? n - Math.floor(i / 2) + 1 : n + Math.floor(i / 2) - 1 : n > o && a.params.slidesPerGroup, a.slideTo(n, e ? 0 : void 0));
          }

          var u = 1,
              c = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (u = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (u = 1), u = Math.floor(u), a.slides.removeClass(c), a.params.loop || a.params.virtual && a.params.virtual.enabled) for (var h = 0; h < u; h += 1) {
            a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + h) + '"]').addClass(c);
          } else for (var v = 0; v < u; v += 1) {
            a.slides.eq(t.realIndex + v).addClass(c);
          }
        }
      }
    },
        ve = [j, K, {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function create() {
        M(this, {
          mousewheel: {
            enabled: !1,
            lastScrollTime: x(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            enable: Z.enable,
            disable: Z.disable,
            handle: Z.handle,
            handleMouseEnter: Z.handleMouseEnter,
            handleMouseLeave: Z.handleMouseLeave,
            animateSlider: Z.animateSlider,
            releaseScroll: Z.releaseScroll
          }
        });
      },
      on: {
        init: function init(e) {
          !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function destroy(e) {
          e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable();
        }
      }
    }, {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock"
        }
      },
      create: function create() {
        M(this, {
          navigation: t({}, J)
        });
      },
      on: {
        init: function init(e) {
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function toEdge(e) {
          e.navigation.update();
        },
        fromEdge: function fromEdge(e) {
          e.navigation.update();
        },
        destroy: function destroy(e) {
          e.navigation.destroy();
        },
        "enable disable": function enableDisable(e) {
          var t = e.navigation,
              a = t.$nextEl,
              i = t.$prevEl;
          a && a[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass);
        },
        click: function click(e, t) {
          var a = e.navigation,
              i = a.$nextEl,
              s = a.$prevEl,
              r = t.target;

          if (e.params.navigation.hideOnClick && !m(r).is(s) && !m(r).is(i)) {
            if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === r || e.pagination.el.contains(r))) return;
            var n;
            i ? n = i.hasClass(e.params.navigation.hiddenClass) : s && (n = s.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), s && s.toggleClass(e.params.navigation.hiddenClass);
          }
        }
      }
    }, {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal: function formatFractionTotal(e) {
            return e;
          },
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
          clickableClass: "swiper-pagination-clickable",
          lockClass: "swiper-pagination-lock"
        }
      },
      create: function create() {
        M(this, {
          pagination: t({
            dynamicBulletIndex: 0
          }, Q)
        });
      },
      on: {
        init: function init(e) {
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function activeIndexChange(e) {
          (e.params.loop || void 0 === e.snapIndex) && e.pagination.update();
        },
        snapIndexChange: function snapIndexChange(e) {
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function slidesLengthChange(e) {
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function snapGridLengthChange(e) {
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function destroy(e) {
          e.pagination.destroy();
        },
        "enable disable": function enableDisable(e) {
          var t = e.pagination.$el;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass);
        },
        click: function click(e, t) {
          var a = t.target;

          if (e.params.pagination.el && e.params.pagination.hideOnClick && e.pagination.$el.length > 0 && !m(a).hasClass(e.params.pagination.bulletClass)) {
            if (e.navigation && (e.navigation.nextEl && a === e.navigation.nextEl || e.navigation.prevEl && a === e.navigation.prevEl)) return;
            !0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass);
          }
        }
      }
    }, {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag"
        }
      },
      create: function create() {
        M(this, {
          scrollbar: t({
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }, ee)
        });
      },
      on: {
        init: function init(e) {
          e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
        },
        update: function update(e) {
          e.scrollbar.updateSize();
        },
        resize: function resize(e) {
          e.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(e) {
          e.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(e) {
          e.scrollbar.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.scrollbar.setTransition(t);
        },
        "enable disable": function enableDisable(e) {
          var t = e.scrollbar.$el;
          t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass);
        },
        destroy: function destroy(e) {
          e.scrollbar.destroy();
        }
      }
    }, {
      name: "parallax",
      params: {
        parallax: {
          enabled: !1
        }
      },
      create: function create() {
        M(this, {
          parallax: t({}, te)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        init: function init(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTranslate: function setTranslate(e) {
          e.params.parallax.enabled && e.parallax.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          e.params.parallax.enabled && e.parallax.setTransition(t);
        }
      }
    }, {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed"
        }
      },
      create: function create() {
        var e = this;
        M(e, {
          zoom: t({
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0
            }
          }, ae)
        });
        var a = 1;
        Object.defineProperty(e.zoom, "scale", {
          get: function get() {
            return a;
          },
          set: function set(t) {
            if (a !== t) {
              var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                  s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
              e.emit("zoomChange", t, i, s);
            }

            a = t;
          }
        });
      },
      on: {
        init: function init(e) {
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function destroy(e) {
          e.zoom.disable();
        },
        touchStart: function touchStart(e, t) {
          e.zoom.enabled && e.zoom.onTouchStart(t);
        },
        touchEnd: function touchEnd(e, t) {
          e.zoom.enabled && e.zoom.onTouchEnd(t);
        },
        doubleTap: function doubleTap(e, t) {
          !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t);
        },
        transitionEnd: function transitionEnd(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
        slideChange: function slideChange(e) {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd();
        }
      }
    }, {
      name: "lazy",
      params: {
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: "",
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader"
        }
      },
      create: function create() {
        M(this, {
          lazy: t({
            initialImageLoaded: !1
          }, ie)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function init(e) {
          e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load());
        },
        scroll: function scroll(e) {
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        "scrollbarDragMove resize _freeModeNoMomentumRelease": function scrollbarDragMoveResize_freeModeNoMomentumRelease(e) {
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function transitionStart(e) {
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd: function transitionEnd(e) {
          e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
        },
        slideChange: function slideChange(e) {
          var t = e.params,
              a = t.lazy,
              i = t.cssMode,
              s = t.watchSlidesVisibility,
              r = t.watchSlidesProgress,
              n = t.touchReleaseOnEdges,
              l = t.resistanceRatio;
          a.enabled && (i || (s || r) && (n || 0 === l)) && e.lazy.load();
        }
      }
    }, {
      name: "controller",
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: "slide"
        }
      },
      create: function create() {
        M(this, {
          controller: t({
            control: this.params.controller.control
          }, se)
        });
      },
      on: {
        update: function update(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        resize: function resize(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        observerUpdate: function observerUpdate(e) {
          e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
        },
        setTranslate: function setTranslate(e, t, a) {
          e.controller.control && e.controller.setTranslate(t, a);
        },
        setTransition: function setTransition(e, t, a) {
          e.controller.control && e.controller.setTransition(t, a);
        }
      }
    }, {
      name: "a11y",
      params: {
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group"
        }
      },
      create: function create() {
        M(this, {
          a11y: t({}, re, {
            liveRegion: m('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
          })
        });
      },
      on: {
        afterInit: function afterInit(e) {
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function toEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(e) {
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(e) {
          e.params.a11y.enabled && e.a11y.updatePagination();
        },
        destroy: function destroy(e) {
          e.params.a11y.enabled && e.a11y.destroy();
        }
      }
    }, {
      name: "history",
      params: {
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides"
        }
      },
      create: function create() {
        M(this, {
          history: t({}, ne)
        });
      },
      on: {
        init: function init(e) {
          e.params.history.enabled && e.history.init();
        },
        destroy: function destroy(e) {
          e.params.history.enabled && e.history.destroy();
        },
        "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
          e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
        },
        slideChange: function slideChange(e) {
          e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex);
        }
      }
    }, {
      name: "hash-navigation",
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create: function create() {
        M(this, {
          hashNavigation: t({
            initialized: !1
          }, le)
        });
      },
      on: {
        init: function init(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function destroy(e) {
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        "transitionEnd _freeModeNoMomentumRelease": function transitionEnd_freeModeNoMomentumRelease(e) {
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        },
        slideChange: function slideChange(e) {
          e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash();
        }
      }
    }, {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1
        }
      },
      create: function create() {
        M(this, {
          autoplay: t({}, oe, {
            running: !1,
            paused: !1
          })
        });
      },
      on: {
        init: function init(e) {
          e.params.autoplay.enabled && (e.autoplay.start(), r().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents());
        },
        beforeTransitionStart: function beforeTransitionStart(e, t, a) {
          e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop());
        },
        sliderFirstMove: function sliderFirstMove(e) {
          e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
        },
        touchEnd: function touchEnd(e) {
          e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run();
        },
        destroy: function destroy(e) {
          e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), r().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange);
        }
      }
    }, {
      name: "effect-fade",
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create: function create() {
        M(this, {
          fadeEffect: t({}, de)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "fade" === e.params.effect && e.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "fade" === e.params.effect && e.fadeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: .94
        }
      },
      create: function create() {
        M(this, {
          cubeEffect: t({}, pe)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "cube" === e.params.effect && e.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "cube" === e.params.effect && e.cubeEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-flip",
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create: function create() {
        M(this, {
          flipEffect: t({}, ue)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            S(e.params, t), S(e.originalParams, t);
          }
        },
        setTranslate: function setTranslate(e) {
          "flip" === e.params.effect && e.flipEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "flip" === e.params.effect && e.flipEffect.setTransition(t);
        }
      }
    }, {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0
        }
      },
      create: function create() {
        M(this, {
          coverflowEffect: t({}, ce)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate: function setTranslate(e) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(e, t) {
          "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t);
        }
      }
    }, {
      name: "thumbs",
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-container-thumbs"
        }
      },
      create: function create() {
        M(this, {
          thumbs: t({
            swiper: null,
            initialized: !1
          }, he)
        });
      },
      on: {
        beforeInit: function beforeInit(e) {
          var t = e.params.thumbs;
          t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
        },
        slideChange: function slideChange(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        update: function update(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        resize: function resize(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        observerUpdate: function observerUpdate(e) {
          e.thumbs.swiper && e.thumbs.update();
        },
        setTransition: function setTransition(e, t) {
          var a = e.thumbs.swiper;
          a && a.setTransition(t);
        },
        beforeDestroy: function beforeDestroy(e) {
          var t = e.thumbs.swiper;
          t && e.thumbs.swiperCreated && t && t.destroy();
        }
      }
    }];
    return _.use(ve), _;
  });
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        sliderPerView: 2,
        spaceBetween: 20
      }
    }
  });
  var animItems = Array.prototype.slice.call(document.querySelectorAll('._anim-item'));

  if (animItems.length > 0) {
    var animOnScroll = function animOnScroll() {
      for (var index = 0; index < animItems.length; index++) {
        var animItem = animItems[index];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;
        var viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (viewport_width >= 992) {
          if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
            animItem.classList.add('_active');
          } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
              animItem.classList.remove('_active');
            }
          }
        }
      }
    };

    var offset = function offset(el) {
      var rect = el.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    };

    window.addEventListener('scroll', animOnScroll);
    setTimeout(function () {
      animOnScroll();
    }, 300);
  }

  popups();
});