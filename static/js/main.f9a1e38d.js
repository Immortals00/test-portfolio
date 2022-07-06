/*! For license information please see main.f9a1e38d.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          s = {};
        function o(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, i, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = l);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          C = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          A = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          N = Symbol.for("react.forward_ref"),
          M = Symbol.for("react.suspense"),
          j = Symbol.for("react.suspense_list"),
          z = Symbol.for("react.memo"),
          I = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var P = Symbol.iterator;
        function D(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (P && e[P]) || e["@@iterator"])
            ? e
            : null;
        }
        var B,
          O = Object.assign;
        function _(e) {
          if (void 0 === B)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              B = (t && t[1]) || "";
            }
          return "\n" + B + e;
        }
        var F = !1;
        function R(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  l = a.length - 1,
                  s = i.length - 1;
                1 <= l && 0 <= s && a[l] !== i[s];

              )
                s--;
              for (; 1 <= l && 0 <= s; l--, s--)
                if (a[l] !== i[s]) {
                  if (1 !== l || 1 !== s)
                    do {
                      if ((l--, 0 > --s || a[l] !== i[s])) {
                        var o = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            o.includes("<anonymous>") &&
                            (o = o.replace("<anonymous>", e.displayName)),
                          o
                        );
                      }
                    } while (1 <= l && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? _(e) : "";
        }
        function Q(e) {
          switch (e.tag) {
            case 5:
              return _(e.type);
            case 16:
              return _("Lazy");
            case 13:
              return _("Suspense");
            case 19:
              return _("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = R(e.type, !1));
            case 11:
              return (e = R(e.type.render, !1));
            case 1:
              return (e = R(e.type, !0));
            default:
              return "";
          }
        }
        function G(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case E:
              return "Profiler";
            case C:
              return "StrictMode";
            case M:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case A:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case z:
                return null !== (t = e.displayName || null)
                  ? t
                  : G(e.type) || "Memo";
              case I:
                (t = e._payload), (e = e._init);
                try {
                  return G(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
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
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
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
              return G(t);
            case 8:
              return t === C ? "StrictMode" : "Mode";
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
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function U(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function H(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = U(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Z(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = U(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return O({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = V(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function q(e, t) {
          X(e, t);
          var n = V(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + V(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return O({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: V(n) };
        }
        function ie(e, t) {
          var n = V(t.value),
            r = V(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function oe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
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
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = O(
          { menuitem: !0 },
          {
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
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
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
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ce = null;
        function Ee(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ae(e) {
          Se ? (Ce ? Ce.push(e) : (Ce = [e])) : (Se = e);
        }
        function Te() {
          if (Se) {
            var e = Se,
              t = Ce;
            if (((Ce = Se = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Me() {}
        var je = !1;
        function ze(e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            return Ne(e, t, n);
          } finally {
            (je = !1), (null !== Se || null !== Ce) && (Me(), Te());
          }
        }
        function Ie(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (c)
          try {
            var Pe = {};
            Object.defineProperty(Pe, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", Pe, Pe),
              window.removeEventListener("test", Pe, Pe);
          } catch (ce) {
            Le = !1;
          }
        function De(e, t, n, r, a, i, l, s, o) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var Be = !1,
          Oe = null,
          _e = !1,
          Fe = null,
          Re = {
            onError: function (e) {
              (Be = !0), (Oe = e);
            },
          };
        function Qe(e, t, n, r, a, i, l, s, o) {
          (Be = !1), (Oe = null), De.apply(Re, arguments);
        }
        function Ge(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (Ge(e) !== e) throw Error(i(188));
        }
        function Ue(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ge(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return Ve(a), e;
                    if (l === r) return Ve(a), t;
                    l = l.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var s = !1, o = a.child; o; ) {
                    if (o === n) {
                      (s = !0), (n = a), (r = l);
                      break;
                    }
                    if (o === r) {
                      (s = !0), (r = a), (n = l);
                      break;
                    }
                    o = o.sibling;
                  }
                  if (!s) {
                    for (o = l.child; o; ) {
                      if (o === n) {
                        (s = !0), (n = l), (r = a);
                        break;
                      }
                      if (o === r) {
                        (s = !0), (r = l), (n = a);
                        break;
                      }
                      o = o.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? He(e)
            : null;
        }
        function He(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = He(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ze = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Xe = a.unstable_now,
          qe = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((st(e) / ot) | 0)) | 0;
              },
          st = Math.log,
          ot = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
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
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var s = l & ~a;
            0 !== s ? (r = dt(s)) : 0 !== (i &= l) && (r = dt(i));
          } else 0 !== (l = n & ~a) ? (r = dt(l)) : 0 !== i && (r = dt(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
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
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Ct,
          Et,
          At = !1,
          Tt = [],
          Nt = null,
          Mt = null,
          jt = null,
          zt = new Map(),
          It = new Map(),
          Lt = [],
          Pt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Dt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Nt = null;
              break;
            case "dragenter":
            case "dragleave":
              Mt = null;
              break;
            case "mouseover":
            case "mouseout":
              jt = null;
              break;
            case "pointerover":
            case "pointerout":
              zt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              It.delete(t.pointerId);
          }
        }
        function Bt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ot(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Ge(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function _t(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          _t(e) && n.delete(t);
        }
        function Rt() {
          (At = !1),
            null !== Nt && _t(Nt) && (Nt = null),
            null !== Mt && _t(Mt) && (Mt = null),
            null !== jt && _t(jt) && (jt = null),
            zt.forEach(Ft),
            It.forEach(Ft);
        }
        function Qt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            At ||
              ((At = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Rt)));
        }
        function Gt(e) {
          function t(t) {
            return Qt(t, e);
          }
          if (0 < Tt.length) {
            Qt(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Nt && Qt(Nt, e),
              null !== Mt && Qt(Mt, e),
              null !== jt && Qt(jt, e),
              zt.forEach(t),
              It.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ot(n), null === n.blockedOn && Lt.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Vt = !0;
        function Ut(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Zt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Ht(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Zt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Zt(e, t, n, r) {
          if (Vt) {
            var a = Kt(e, t, n, r);
            if (null === a) Vr(e, t, r, Yt, n), Dt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Nt = Bt(Nt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Mt = Bt(Mt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (jt = Bt(jt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return zt.set(i, Bt(zt.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      It.set(i, Bt(It.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Dt(e, r), 4 & t && -1 < Pt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && xt(i),
                  null === (i = Kt(e, t, n, r)) && Vr(e, t, r, Yt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Vr(e, t, r, null, n);
          }
        }
        var Yt = null;
        function Kt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = Ge(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Yt = e), null;
        }
        function Jt(e) {
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
              switch (qe()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          qt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = qt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[i - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            O(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          sn,
          on,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          dn = O({}, un, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = O({}, dn, {
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
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== on &&
                    (on && "mousemove" === e.type
                      ? ((ln = e.screenX - on.screenX),
                        (sn = e.screenY - on.screenY))
                      : (sn = ln = 0),
                    (on = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          mn = an(O({}, pn, { dataTransfer: 0 })),
          vn = an(O({}, dn, { relatedTarget: 0 })),
          gn = an(
            O({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = O({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(O({}, un, { data: 0 })),
          xn = {
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
          kn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Cn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function En() {
          return Cn;
        }
        var An = O({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(An),
          Nn = an(
            O({}, pn, {
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
            })
          ),
          Mn = an(
            O({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          jn = an(
            O({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          zn = O({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          In = an(zn),
          Ln = [9, 13, 27, 32],
          Pn = c && "CompositionEvent" in window,
          Dn = null;
        c && "documentMode" in document && (Dn = document.documentMode);
        var Bn = c && "TextEvent" in window && !Dn,
          On = c && (!Pn || (Dn && 8 < Dn && 11 >= Dn)),
          _n = String.fromCharCode(32),
          Fn = !1;
        function Rn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Qn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Gn = !1;
        var Wn = {
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
        function Vn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Un(e, t, n, r) {
          Ae(r),
            0 < (t = Hr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Hn = null,
          Zn = null;
        function Yn(e) {
          _r(e, 0);
        }
        function Kn(e) {
          if (Z(wa(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (c) {
          var qn;
          if (c) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            qn = $n;
          } else qn = !1;
          Xn = qn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Hn && (Hn.detachEvent("onpropertychange", nr), (Zn = Hn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(Zn)) {
            var t = [];
            Un(t, Zn, e, xe(e)), ze(Yn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Zn = n), (Hn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Zn);
        }
        function ir(e, t) {
          if ("click" === e) return Kn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function or(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = Y((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== Y(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && or(yr, r)) ||
              ((yr = r),
              0 < (r = Hr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Cr = {};
        function Er(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Cr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Cr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Ar = Er("animationend"),
          Tr = Er("animationiteration"),
          Nr = Er("animationstart"),
          Mr = Er("transitionend"),
          jr = new Map(),
          zr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Ir(e, t) {
          jr.set(e, t), o(t, [e]);
        }
        for (var Lr = 0; Lr < zr.length; Lr++) {
          var Pr = zr[Lr];
          Ir(Pr.toLowerCase(), "on" + (Pr[0].toUpperCase() + Pr.slice(1)));
        }
        Ir(Ar, "onAnimationEnd"),
          Ir(Tr, "onAnimationIteration"),
          Ir(Nr, "onAnimationStart"),
          Ir("dblclick", "onDoubleClick"),
          Ir("focusin", "onFocus"),
          Ir("focusout", "onBlur"),
          Ir(Mr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          o(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          o(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          o("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          o(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          o(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          o(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Dr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Br = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Dr)
          );
        function Or(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, s, o, u) {
              if ((Qe.apply(this, arguments), Be)) {
                if (!Be) throw Error(i(198));
                var c = Oe;
                (Be = !1), (Oe = null), _e || ((_e = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function _r(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var s = r[l],
                    o = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), o !== i && a.isPropagationStopped()))
                    break e;
                  Or(a, s, u), (i = o);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((o = (s = r[l]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    o !== i && a.isPropagationStopped())
                  )
                    break e;
                  Or(a, s, u), (i = o);
                }
            }
          }
          if (_e) throw ((e = Fe), (_e = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function Rr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Qr = "_reactListening" + Math.random().toString(36).slice(2);
        function Gr(e) {
          if (!e[Qr]) {
            (e[Qr] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Br.has(t) || Rr(t, !1, e), Rr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Qr] || ((t[Qr] = !0), Rr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = Ut;
              break;
            case 4:
              a = Ht;
              break;
            default:
              a = Zt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Vr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var o = l.tag;
                    if (
                      (3 === o || 4 === o) &&
                      ((o = l.stateNode.containerInfo) === a ||
                        (8 === o.nodeType && o.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== s; ) {
                  if (null === (l = ya(s))) return;
                  if (5 === (o = l.tag) || 6 === o) {
                    r = i = l;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          ze(function () {
            var r = i,
              a = xe(n),
              l = [];
            e: {
              var s = jr.get(e);
              if (void 0 !== s) {
                var o = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    o = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (o = vn);
                    break;
                  case "focusout":
                    (u = "blur"), (o = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    o = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    o = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    o = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    o = Mn;
                    break;
                  case Ar:
                  case Tr:
                  case Nr:
                    o = gn;
                    break;
                  case Mr:
                    o = jn;
                    break;
                  case "scroll":
                    o = fn;
                    break;
                  case "wheel":
                    o = In;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    o = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    o = Nn;
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Ie(h, f)) &&
                        c.push(Ur(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new o(s, u, null, n, a)),
                  l.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((o = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[ha])) &&
                  (o || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  o
                    ? ((o = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (d = Ge(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((o = null), (u = r)),
                  o !== u))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Nn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == o ? s : wa(o)),
                  (p = null == u ? s : wa(u)),
                  ((s = new c(m, h + "leave", o, n, a)).target = d),
                  (s.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(f, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = d),
                    (m = c)),
                  (d = m),
                  o && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = o; p; p = Zr(p)) h++;
                    for (p = 0, m = f; m; m = Zr(m)) p++;
                    for (; 0 < h - p; ) (c = Zr(c)), h--;
                    for (; 0 < p - h; ) (f = Zr(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Zr(c)), (f = Zr(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== o && Yr(l, s, o, c, !1),
                  null !== u && null !== d && Yr(l, d, u, c, !0);
              }
              if (
                "select" ===
                  (o =
                    (s = r ? wa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === o && "file" === s.type)
              )
                var v = Jn;
              else if (Vn(s))
                if (Xn) v = lr;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (o = s.nodeName) &&
                  "input" === o.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (v = ir);
              switch (
                (v && (v = v(e, r))
                  ? Un(l, v, n, a)
                  : (g && g(e, s, r),
                    "focusout" === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Vn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (Pn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Gn
                  ? Rn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (On &&
                  "ko" !== n.locale &&
                  (Gn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Gn && (y = en())
                    : ((qt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (Gn = !0))),
                0 < (g = Hr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Qn(n)) && (b.data = y))),
                (y = Bn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Qn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), _n);
                        case "textInput":
                          return (e = t.data) === _n && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Gn)
                        return "compositionend" === e || (!Pn && Rn(e, t))
                          ? ((e = en()), ($t = qt = Xt = null), (Gn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return On && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Hr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            _r(l, t);
          });
        }
        function Ur(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Hr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Ie(e, n)) && r.unshift(Ur(e, i, a)),
              null != (i = Ie(e, t)) && r.push(Ur(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Zr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Yr(e, t, n, r, a) {
          for (var i = t._reactName, l = []; null !== n && n !== r; ) {
            var s = n,
              o = s.alternate,
              u = s.stateNode;
            if (null !== o && o === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              a
                ? null != (o = Ie(n, i)) && l.unshift(Ur(n, o, s))
                : a || (null != (o = Ie(n, i)) && l.push(Ur(n, o, s)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var Kr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Jr, "");
        }
        function qr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(i(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function oa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Gt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Gt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ca(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Aa(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Ta = {},
          Na = Ca(Ta),
          Ma = Ca(!1),
          ja = Ta;
        function za(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function Ia(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ea(Ma), Ea(Na);
        }
        function Pa(e, t, n) {
          if (Na.current !== Ta) throw Error(i(168));
          Aa(Na, t), Aa(Ma, n);
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return O({}, n, r);
        }
        function Ba(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (ja = Na.current),
            Aa(Na, e),
            Aa(Ma, Ma.current),
            !0
          );
        }
        function Oa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Da(e, t, ja)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Ma),
              Ea(Na),
              Aa(Na, e))
            : Ea(Ma),
            Aa(Ma, n);
        }
        var _a = null,
          Fa = !1,
          Ra = !1;
        function Qa(e) {
          null === _a ? (_a = [e]) : _a.push(e);
        }
        function Ga() {
          if (!Ra && null !== _a) {
            Ra = !0;
            var e = 0,
              t = bt;
            try {
              var n = _a;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (_a = null), (Fa = !1);
            } catch (a) {
              throw (null !== _a && (_a = _a.slice(e + 1)), Ze($e, Ga), a);
            } finally {
              (bt = t), (Ra = !1);
            }
          }
          return null;
        }
        var Wa = w.ReactCurrentBatchConfig;
        function Va(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = O({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Ua = Ca(null),
          Ha = null,
          Za = null,
          Ya = null;
        function Ka() {
          Ya = Za = Ha = null;
        }
        function Ja(e) {
          var t = Ua.current;
          Ea(Ua), (e._currentValue = t);
        }
        function Xa(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function qa(e, t) {
          (Ha = e),
            (Ya = Za = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function $a(e) {
          var t = e._currentValue;
          if (Ya !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Za)
            ) {
              if (null === Ha) throw Error(i(308));
              (Za = e), (Ha.dependencies = { lanes: 0, firstContext: e });
            } else Za = Za.next = e;
          return t;
        }
        var ei = null,
          ti = !1;
        function ni(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ri(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ai(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function ii(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            tu(e)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === ei ? (ei = [n]) : ei.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function li(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function si(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = l) : (i = i.next = l), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function oi(e, t, n, r) {
          var a = e.updateQueue;
          ti = !1;
          var i = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var o = s,
              u = o.next;
            (o.next = null), null === l ? (i = u) : (l.next = u), (l = o);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = o));
          }
          if (null !== i) {
            var d = a.baseState;
            for (l = 0, c = u = o = null, s = i; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = O({}, d, f);
                      break e;
                    case 2:
                      ti = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (o = d)) : (c = c.next = p),
                  (l |= f);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (o = d),
              (a.baseState = o),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Lo |= l), (e.lanes = l), (e.memoizedState = d);
          }
        }
        function ui(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var ci = new r.Component().refs;
        function di(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : O({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var fi = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ge(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Xo(),
              a = qo(e),
              i = ai(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              ii(e, i),
              null !== (t = $o(e, a, r)) && li(t, e, a);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Xo(),
              a = qo(e),
              i = ai(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              ii(e, i),
              null !== (t = $o(e, a, r)) && li(t, e, a);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Xo(),
              r = qo(e),
              a = ai(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              ii(e, a),
              null !== (t = $o(e, r, n)) && li(t, e, r);
          },
        };
        function pi(e, t, n, r, a, i, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !or(n, r) ||
                !or(a, i);
        }
        function hi(e, t, n) {
          var r = !1,
            a = Ta,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = $a(i))
              : ((a = Ia(t) ? ja : Na.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? za(e, a)
                  : Ta)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = fi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function mi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && fi.enqueueReplaceState(t, t.state, null);
        }
        function vi(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = ci), ni(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = $a(i))
            : ((i = Ia(t) ? ja : Na.current), (a.context = za(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (di(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && fi.enqueueReplaceState(a, a.state, null),
              oi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        var gi = [],
          yi = 0,
          bi = null,
          wi = 0,
          xi = [],
          ki = 0,
          Si = null,
          Ci = 1,
          Ei = "";
        function Ai(e, t) {
          (gi[yi++] = wi), (gi[yi++] = bi), (bi = e), (wi = t);
        }
        function Ti(e, t, n) {
          (xi[ki++] = Ci), (xi[ki++] = Ei), (xi[ki++] = Si), (Si = e);
          var r = Ci;
          e = Ei;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - lt(t) + a;
          if (30 < i) {
            var l = a - (a % 5);
            (i = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Ci = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Ei = i + e);
          } else (Ci = (1 << i) | (n << a) | r), (Ei = e);
        }
        function Ni(e) {
          null !== e.return && (Ai(e, 1), Ti(e, 1, 0));
        }
        function Mi(e) {
          for (; e === bi; )
            (bi = gi[--yi]), (gi[yi] = null), (wi = gi[--yi]), (gi[yi] = null);
          for (; e === Si; )
            (Si = xi[--ki]),
              (xi[ki] = null),
              (Ei = xi[--ki]),
              (xi[ki] = null),
              (Ci = xi[--ki]),
              (xi[ki] = null);
        }
        var ji = null,
          zi = null,
          Ii = !1,
          Li = null;
        function Pi(e, t) {
          var n = ju(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function Di(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ji = e), (zi = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ji = e), (zi = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Si ? { id: Ci, overflow: Ei } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = ju(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ji = e),
                (zi = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Bi(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function Oi(e) {
          if (Ii) {
            var t = zi;
            if (t) {
              var n = t;
              if (!Di(e, t)) {
                if (Bi(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ji;
                t && Di(e, t)
                  ? Pi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (Ii = !1), (ji = e));
              }
            } else {
              if (Bi(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (Ii = !1), (ji = e);
            }
          }
        }
        function _i(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ji = e;
        }
        function Fi(e) {
          if (e !== ji) return !1;
          if (!Ii) return _i(e), (Ii = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = zi))
          ) {
            if (Bi(e)) {
              for (e = zi; e; ) e = ua(e.nextSibling);
              throw Error(i(418));
            }
            for (; t; ) Pi(e, t), (t = ua(t.nextSibling));
          }
          if ((_i(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      zi = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              zi = null;
            }
          } else zi = ji ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ri() {
          (zi = ji = null), (Ii = !1);
        }
        function Qi(e) {
          null === Li ? (Li = [e]) : Li.push(e);
        }
        function Gi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === ci && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Wi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Vi(e) {
          return (0, e._init)(e._payload);
        }
        function Ui(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function o(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Bu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === I &&
                    Vi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Gi(e, t, n)), (r.return = e), r)
              : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = Gi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ou(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Pu(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Bu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = Gi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Ou(t, e.mode, n)).return = e), t;
                case I:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || D(t))
                return ((t = Pu(t, e.mode, n, null)).return = e), t;
              Wi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : o(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case I:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || D(n)) return null !== a ? null : d(e, t, n, r, null);
              Wi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return o(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case I:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || D(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              Wi(t, r);
            }
            return null;
          }
          function m(a, i, s, o) {
            for (
              var u = null, c = null, d = i, m = (i = 0), v = null;
              null !== d && m < s.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, s[m], o);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (i = l(g, i, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g),
                (d = v);
            }
            if (m === s.length) return n(a, d), Ii && Ai(a, m), u;
            if (null === d) {
              for (; m < s.length; m++)
                null !== (d = f(a, s[m], o)) &&
                  ((i = l(d, i, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return Ii && Ai(a, m), u;
            }
            for (d = r(a, d); m < s.length; m++)
              null !== (v = h(d, a, m, s[m], o)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (i = l(v, i, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              Ii && Ai(a, m),
              u
            );
          }
          function v(a, s, o, u) {
            var c = D(o);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (o = c.call(o))) throw Error(i(151));
            for (
              var d = (c = null), m = s, v = (s = 0), g = null, y = o.next();
              null !== m && !y.done;
              v++, y = o.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, u);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (s = l(b, s, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = g);
            }
            if (y.done) return n(a, m), Ii && Ai(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = o.next())
                null !== (y = f(a, y.value, u)) &&
                  ((s = l(y, s, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return Ii && Ai(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = o.next())
              null !== (y = h(m, a, v, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (s = l(y, s, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              Ii && Ai(a, v),
              c
            );
          }
          return function e(r, i, l, o) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case x:
                  e: {
                    for (var u = l.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = l.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, l.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === I &&
                            Vi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, l.props)).ref = Gi(r, c, l)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === S
                      ? (((i = Pu(l.props.children, r.mode, o, l.key)).return =
                          r),
                        (r = i))
                      : (((o = Lu(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          o
                        )).ref = Gi(r, i, l)),
                        (o.return = r),
                        (r = o));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = l.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === l.containerInfo &&
                          i.stateNode.implementation === l.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, l.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Ou(l, r.mode, o)).return = r), (r = i);
                  }
                  return s(r);
                case I:
                  return e(r, i, (c = l._init)(l._payload), o);
              }
              if (te(l)) return m(r, i, l, o);
              if (D(l)) return v(r, i, l, o);
              Wi(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, l)).return = r), (r = i))
                  : (n(r, i), ((i = Bu(l, r.mode, o)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var Hi = Ui(!0),
          Zi = Ui(!1),
          Yi = {},
          Ki = Ca(Yi),
          Ji = Ca(Yi),
          Xi = Ca(Yi);
        function qi(e) {
          if (e === Yi) throw Error(i(174));
          return e;
        }
        function $i(e, t) {
          switch ((Aa(Xi, t), Aa(Ji, e), Aa(Ki, Yi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : oe(null, "");
              break;
            default:
              t = oe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Ki), Aa(Ki, t);
        }
        function el() {
          Ea(Ki), Ea(Ji), Ea(Xi);
        }
        function tl(e) {
          qi(Xi.current);
          var t = qi(Ki.current),
            n = oe(t, e.type);
          t !== n && (Aa(Ji, e), Aa(Ki, n));
        }
        function nl(e) {
          Ji.current === e && (Ea(Ki), Ea(Ji));
        }
        var rl = Ca(0);
        function al(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var il = [];
        function ll() {
          for (var e = 0; e < il.length; e++)
            il[e]._workInProgressVersionPrimary = null;
          il.length = 0;
        }
        var sl = w.ReactCurrentDispatcher,
          ol = w.ReactCurrentBatchConfig,
          ul = 0,
          cl = null,
          dl = null,
          fl = null,
          pl = !1,
          hl = !1,
          ml = 0,
          vl = 0;
        function gl() {
          throw Error(i(321));
        }
        function yl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function bl(e, t, n, r, a, l) {
          if (
            ((ul = l),
            (cl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (sl.current = null === e || null === e.memoizedState ? ns : rs),
            (e = n(r, a)),
            hl)
          ) {
            l = 0;
            do {
              if (((hl = !1), (ml = 0), 25 <= l)) throw Error(i(301));
              (l += 1),
                (fl = dl = null),
                (t.updateQueue = null),
                (sl.current = as),
                (e = n(r, a));
            } while (hl);
          }
          if (
            ((sl.current = ts),
            (t = null !== dl && null !== dl.next),
            (ul = 0),
            (fl = dl = cl = null),
            (pl = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function wl() {
          var e = 0 !== ml;
          return (ml = 0), e;
        }
        function xl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === fl ? (cl.memoizedState = fl = e) : (fl = fl.next = e), fl
          );
        }
        function kl() {
          if (null === dl) {
            var e = cl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = dl.next;
          var t = null === fl ? cl.memoizedState : fl.next;
          if (null !== t) (fl = t), (dl = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (dl = e).memoizedState,
              baseState: dl.baseState,
              baseQueue: dl.baseQueue,
              queue: dl.queue,
              next: null,
            }),
              null === fl ? (cl.memoizedState = fl = e) : (fl = fl.next = e);
          }
          return fl;
        }
        function Sl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Cl(e) {
          var t = kl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = dl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var s = a.next;
              (a.next = l.next), (l.next = s);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var o = (s = null),
              u = null,
              c = l;
            do {
              var d = c.lane;
              if ((ul & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((o = u = f), (s = r)) : (u = u.next = f),
                  (cl.lanes |= d),
                  (Lo |= d);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === u ? (s = r) : (u.next = o),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (cl.lanes |= l), (Lo |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function El(e) {
          var t = kl(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (l = e(l, s.action)), (s = s.next);
            } while (s !== a);
            sr(l, t.memoizedState) || (ws = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function Al() {}
        function Tl(e, t) {
          var n = cl,
            r = kl(),
            a = t(),
            l = !sr(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (ws = !0)),
            (r = r.queue),
            _l(jl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== fl && 1 & fl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ll(9, Ml.bind(null, n, r, a, t), void 0, null),
              null === Ao)
            )
              throw Error(i(349));
            0 !== (30 & ul) || Nl(n, t, a);
          }
          return a;
        }
        function Nl(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = cl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (cl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ml(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), zl(t) && $o(e, 1, -1);
        }
        function jl(e, t, n) {
          return n(function () {
            zl(t) && $o(e, 1, -1);
          });
        }
        function zl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Il(e) {
          var t = xl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Sl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Jl.bind(null, cl, e)),
            [t.memoizedState, e]
          );
        }
        function Ll(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = cl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (cl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Pl() {
          return kl().memoizedState;
        }
        function Dl(e, t, n, r) {
          var a = xl();
          (cl.flags |= e),
            (a.memoizedState = Ll(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bl(e, t, n, r) {
          var a = kl();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== dl) {
            var l = dl.memoizedState;
            if (((i = l.destroy), null !== r && yl(r, l.deps)))
              return void (a.memoizedState = Ll(t, n, i, r));
          }
          (cl.flags |= e), (a.memoizedState = Ll(1 | t, n, i, r));
        }
        function Ol(e, t) {
          return Dl(8390656, 8, e, t);
        }
        function _l(e, t) {
          return Bl(2048, 8, e, t);
        }
        function Fl(e, t) {
          return Bl(4, 2, e, t);
        }
        function Rl(e, t) {
          return Bl(4, 4, e, t);
        }
        function Ql(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Gl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bl(4, 4, Ql.bind(null, t, e), n)
          );
        }
        function Wl() {}
        function Vl(e, t) {
          var n = kl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && yl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ul(e, t) {
          var n = kl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && yl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Hl(e, t, n) {
          return 0 === (21 & ul)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (cl.lanes |= n), (Lo |= n), (e.baseState = !0)),
              t);
        }
        function Zl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ol.transition;
          ol.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (ol.transition = r);
          }
        }
        function Yl() {
          return kl().memoizedState;
        }
        function Kl(e, t, n) {
          var r = qo(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Xl(e)
              ? ql(t, n)
              : ($l(e, t, n),
                null !== (e = $o(e, r, (n = Xo()))) && es(e, t, r));
        }
        function Jl(e, t, n) {
          var r = qo(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Xl(e)) ql(t, a);
          else {
            $l(e, t, a);
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  s = i(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, l)))
                  return;
              } catch (o) {}
            null !== (e = $o(e, r, (n = Xo()))) && es(e, t, r);
          }
        }
        function Xl(e) {
          var t = e.alternate;
          return e === cl || (null !== t && t === cl);
        }
        function ql(e, t) {
          hl = pl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function $l(e, t, n) {
          tu(e)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === ei ? (ei = [t]) : ei.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function es(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ts = {
            readContext: $a,
            useCallback: gl,
            useContext: gl,
            useEffect: gl,
            useImperativeHandle: gl,
            useInsertionEffect: gl,
            useLayoutEffect: gl,
            useMemo: gl,
            useReducer: gl,
            useRef: gl,
            useState: gl,
            useDebugValue: gl,
            useDeferredValue: gl,
            useTransition: gl,
            useMutableSource: gl,
            useSyncExternalStore: gl,
            useId: gl,
            unstable_isNewReconciler: !1,
          },
          ns = {
            readContext: $a,
            useCallback: function (e, t) {
              return (xl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: $a,
            useEffect: Ol,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Dl(4194308, 4, Ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Dl(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Dl(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = xl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = xl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Kl.bind(null, cl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (xl().memoizedState = e);
            },
            useState: Il,
            useDebugValue: Wl,
            useDeferredValue: function (e) {
              return (xl().memoizedState = e);
            },
            useTransition: function () {
              var e = Il(!1),
                t = e[0];
              return (
                (e = Zl.bind(null, e[1])), (xl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = cl,
                a = xl();
              if (Ii) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Ao)) throw Error(i(349));
                0 !== (30 & ul) || Nl(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Ol(jl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Ll(9, Ml.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = xl(),
                t = Ao.identifierPrefix;
              if (Ii) {
                var n = Ei;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ci & ~(1 << (32 - lt(Ci) - 1))).toString(32) + n)),
                  0 < (n = ml++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = vl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          rs = {
            readContext: $a,
            useCallback: Vl,
            useContext: $a,
            useEffect: _l,
            useImperativeHandle: Gl,
            useInsertionEffect: Fl,
            useLayoutEffect: Rl,
            useMemo: Ul,
            useReducer: Cl,
            useRef: Pl,
            useState: function () {
              return Cl(Sl);
            },
            useDebugValue: Wl,
            useDeferredValue: function (e) {
              return Hl(kl(), dl.memoizedState, e);
            },
            useTransition: function () {
              return [Cl(Sl)[0], kl().memoizedState];
            },
            useMutableSource: Al,
            useSyncExternalStore: Tl,
            useId: Yl,
            unstable_isNewReconciler: !1,
          },
          as = {
            readContext: $a,
            useCallback: Vl,
            useContext: $a,
            useEffect: _l,
            useImperativeHandle: Gl,
            useInsertionEffect: Fl,
            useLayoutEffect: Rl,
            useMemo: Ul,
            useReducer: El,
            useRef: Pl,
            useState: function () {
              return El(Sl);
            },
            useDebugValue: Wl,
            useDeferredValue: function (e) {
              var t = kl();
              return null === dl
                ? (t.memoizedState = e)
                : Hl(t, dl.memoizedState, e);
            },
            useTransition: function () {
              return [El(Sl)[0], kl().memoizedState];
            },
            useMutableSource: Al,
            useSyncExternalStore: Tl,
            useId: Yl,
            unstable_isNewReconciler: !1,
          };
        function is(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += Q(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ls(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ss,
          os,
          us,
          cs = "function" === typeof WeakMap ? WeakMap : Map;
        function ds(e, t, n) {
          ((n = ai(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qo || ((Qo = !0), (Go = r)), ls(0, t);
            }),
            n
          );
        }
        function fs(e, t, n) {
          (n = ai(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ls(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ls(0, t),
                  "function" !== typeof r &&
                    (null === Wo ? (Wo = new Set([this])) : Wo.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ps(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new cs();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cu.bind(null, e, t, n)), t.then(e, e));
        }
        function hs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ms(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ai(-1, 1)).tag = 2), ii(n, t))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        function vs(e, t) {
          if (!Ii)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function gs(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function ys(e, t, n) {
          var r = t.pendingProps;
          switch ((Mi(t), t.tag)) {
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
              return gs(t), null;
            case 1:
            case 17:
              return Ia(t.type) && La(), gs(t), null;
            case 3:
              return (
                (r = t.stateNode),
                el(),
                Ea(Ma),
                Ea(Na),
                ll(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Li && (iu(Li), (Li = null)))),
                gs(t),
                null
              );
            case 5:
              nl(t);
              var a = qi(Xi.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                os(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return gs(t), null;
                }
                if (((e = qi(Ki.current)), Fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Dr.length; a++) Fr(Dr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      J(r, l), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Fr("invalid", r);
                  }
                  for (var o in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(o)) {
                      var u = l[o];
                      "children" === o
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== l.suppressHydrationWarning &&
                              qr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== l.suppressHydrationWarning &&
                              qr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : s.hasOwnProperty(o) &&
                          null != u &&
                          "onScroll" === o &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      H(r), $(r, l, !0);
                      break;
                    case "textarea":
                      H(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (o = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = o.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = o.createElement(n, { is: r.is }))
                        : ((e = o.createElement(n)),
                          "select" === n &&
                            ((o = e),
                            r.multiple
                              ? (o.multiple = !0)
                              : r.size && (o.size = r.size)))
                      : (e = o.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    ss(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((o = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Dr.length; a++) Fr(Dr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = K(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = O({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (l in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(l)) {
                        var c = u[l];
                        "style" === l
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (s.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Fr("scroll", e)
                              : null != c && b(e, l, c, o));
                      }
                    switch (n) {
                      case "input":
                        H(e), $(e, r, !1);
                        break;
                      case "textarea":
                        H(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + V(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return gs(t), null;
            case 6:
              if (e && null != t.stateNode) us(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = qi(Xi.current)), qi(Ki.current), Fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (l = r.nodeValue !== n) && null !== (e = ji))
                  )
                    switch (e.tag) {
                      case 3:
                        qr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          qr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return gs(t), null;
            case 13:
              if (
                (Ea(rl),
                (r = t.memoizedState),
                Ii &&
                  null !== zi &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (r = zi; r; ) r = ua(r.nextSibling);
                return Ri(), (t.flags |= 98560), t;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = Fi(t)), null === e)) {
                  if (!r) throw Error(i(318));
                  if (
                    !(r = null !== (r = t.memoizedState) ? r.dehydrated : null)
                  )
                    throw Error(i(317));
                  r[fa] = t;
                } else
                  Ri(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return gs(t), null;
              }
              return (
                null !== Li && (iu(Li), (Li = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? Fi(t) : (n = null !== e.memoizedState),
                    r !== n &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & rl.current)
                          ? 0 === zo && (zo = 3)
                          : hu())),
                    null !== t.updateQueue && (t.flags |= 4),
                    gs(t),
                    null)
              );
            case 4:
              return (
                el(), null === e && Gr(t.stateNode.containerInfo), gs(t), null
              );
            case 10:
              return Ja(t.type._context), gs(t), null;
            case 19:
              if ((Ea(rl), null === (l = t.memoizedState))) return gs(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (o = l.rendering)))
                if (r) vs(l, !1);
                else {
                  if (0 !== zo || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (o = al(e))) {
                        for (
                          t.flags |= 128,
                            vs(l, !1),
                            null !== (r = o.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (o = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = o.childLanes),
                                (l.lanes = o.lanes),
                                (l.child = o.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = o.memoizedProps),
                                (l.memoizedState = o.memoizedState),
                                (l.updateQueue = o.updateQueue),
                                (l.type = o.type),
                                (e = o.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Aa(rl, (1 & rl.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Xe() > Fo &&
                    ((t.flags |= 128),
                    (r = !0),
                    vs(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = al(o))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      vs(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !o.alternate &&
                        !Ii)
                    )
                      return gs(t), null;
                  } else
                    2 * Xe() - l.renderingStartTime > Fo &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      vs(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((o.sibling = t.child), (t.child = o))
                  : (null !== (n = l.last) ? (n.sibling = o) : (t.child = o),
                    (l.last = o));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = rl.current),
                  Aa(rl, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (gs(t), null);
            case 22:
            case 23:
              return (
                cu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Mo) &&
                    (gs(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : gs(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        (ss = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (os = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), qi(Ki.current);
              var i,
                l = null;
              switch (n) {
                case "input":
                  (a = K(e, a)), (r = K(e, r)), (l = []);
                  break;
                case "select":
                  (a = O({}, a, { value: void 0 })),
                    (r = O({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var o = a[c];
                    for (i in o)
                      o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((o = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== o && (null != u || null != o))
                )
                  if ("style" === c)
                    if (o) {
                      for (i in o)
                        !o.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          o[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (l || (l = []), l.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (o = o ? o.__html : void 0),
                        null != u && o !== u && (l = l || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (l = l || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            l || o === u || (l = []))
                          : (l = l || []).push(c, u));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (us = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Zi(t, null, n, r) : Hi(t, e.child, n, r);
        }
        function ks(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            qa(t, a),
            (r = bl(e, t, n, r, i, a)),
            (n = wl()),
            null === e || ws
              ? (Ii && n && Ni(t), (t.flags |= 1), xs(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function Ss(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              zu(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Cs(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var l = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : or)(l, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Iu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Cs(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (or(i, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ws(e, t, a);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ts(e, t, n, r, a);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Aa(jo, Mo),
                (Mo |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Aa(jo, Mo),
                  (Mo |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Aa(jo, Mo),
                (Mo |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Aa(jo, Mo),
              (Mo |= r);
          return xs(e, t, a, n), t.child;
        }
        function As(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, a) {
          var i = Ia(n) ? ja : Na.current;
          return (
            (i = za(t, i)),
            qa(t, a),
            (n = bl(e, t, n, r, i, a)),
            (r = wl()),
            null === e || ws
              ? (Ii && r && Ni(t), (t.flags |= 1), xs(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function Ns(e, t, n, r, a) {
          if (Ia(n)) {
            var i = !0;
            Ba(t);
          } else i = !1;
          if ((qa(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              hi(t, n, r),
              vi(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              s = t.memoizedProps;
            l.props = s;
            var o = l.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = $a(u))
              : (u = za(t, (u = Ia(n) ? ja : Na.current)));
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((s !== r || o !== u) && mi(t, l, r, u)),
              (ti = !1);
            var f = t.memoizedState;
            (l.state = f),
              oi(t, r, l, a),
              (o = t.memoizedState),
              s !== r || f !== o || Ma.current || ti
                ? ("function" === typeof c &&
                    (di(t, n, c, r), (o = t.memoizedState)),
                  (s = ti || pi(t, n, s, r, f, o, u))
                    ? (d ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = o)),
                  (l.props = r),
                  (l.state = o),
                  (l.context = u),
                  (r = s))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              ri(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : Va(t.type, s)),
              (l.props = u),
              (d = t.pendingProps),
              (f = l.context),
              "object" === typeof (o = n.contextType) && null !== o
                ? (o = $a(o))
                : (o = za(t, (o = Ia(n) ? ja : Na.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((s !== d || f !== o) && mi(t, l, r, o)),
              (ti = !1),
              (f = t.memoizedState),
              (l.state = f),
              oi(t, r, l, a);
            var h = t.memoizedState;
            s !== d || f !== h || Ma.current || ti
              ? ("function" === typeof p &&
                  (di(t, n, p, r), (h = t.memoizedState)),
                (u = ti || pi(t, n, u, r, f, h, o) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, o),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, o)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = o),
                (r = u))
              : ("function" !== typeof l.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ms(e, t, n, r, i, a);
        }
        function Ms(e, t, n, r, a, i) {
          As(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Oa(t, n, !1), Ws(e, t, i);
          (r = t.stateNode), (bs.current = t);
          var s =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Hi(t, e.child, null, i)),
                (t.child = Hi(t, null, s, i)))
              : xs(e, t, s, i),
            (t.memoizedState = r.state),
            a && Oa(t, n, !0),
            t.child
          );
        }
        function js(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Pa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Pa(0, t.context, !1),
            $i(e, t.containerInfo);
        }
        function zs(e, t, n, r, a) {
          return Ri(), Qi(a), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Is = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ls(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ps(e, t) {
          return {
            baseLanes: e.baseLanes | t,
            cachePool: null,
            transitions: e.transitions,
          };
        }
        function Ds(e, t, n) {
          var r,
            a = t.pendingProps,
            l = rl.current,
            s = !1,
            o = 0 !== (128 & t.flags);
          if (
            ((r = o) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Aa(rl, 1 & l),
            null === e)
          )
            return (
              Oi(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Du(l, a, 0, null)),
                      (e = Pu(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Ls(n)),
                      (t.memoizedState = Is),
                      e)
                    : Bs(t, l))
            );
          if (null !== (l = e.memoizedState)) {
            if (null !== (r = l.dehydrated)) {
              if (o)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fs(e, t, n, Error(i(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = a.fallback),
                    (l = t.mode),
                    (a = Du(
                      { mode: "visible", children: a.children },
                      l,
                      0,
                      null
                    )),
                    ((s = Pu(s, l, n, null)).flags |= 2),
                    (a.return = t),
                    (s.return = t),
                    (a.sibling = s),
                    (t.child = a),
                    0 !== (1 & t.mode) && Hi(t, e.child, null, n),
                    (t.child.memoizedState = Ls(n)),
                    (t.memoizedState = Is),
                    s);
              if (0 === (1 & t.mode)) t = Fs(e, t, n, null);
              else if ("$!" === r.data) t = Fs(e, t, n, Error(i(419)));
              else if (((a = 0 !== (n & e.childLanes)), ws || a)) {
                if (null !== (a = Ao)) {
                  switch (n & -n) {
                    case 4:
                      s = 2;
                      break;
                    case 16:
                      s = 8;
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
                      s = 32;
                      break;
                    case 536870912:
                      s = 268435456;
                      break;
                    default:
                      s = 0;
                  }
                  0 !== (a = 0 !== (s & (a.suspendedLanes | n)) ? 0 : s) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), $o(e, a, -1));
                }
                hu(), (t = Fs(e, t, n, Error(i(421))));
              } else
                "$?" === r.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = Au.bind(null, e)),
                    (r._reactRetry = t),
                    (t = null))
                  : ((n = l.treeContext),
                    (zi = ua(r.nextSibling)),
                    (ji = t),
                    (Ii = !0),
                    (Li = null),
                    null !== n &&
                      ((xi[ki++] = Ci),
                      (xi[ki++] = Ei),
                      (xi[ki++] = Si),
                      (Ci = n.id),
                      (Ei = n.overflow),
                      (Si = t)),
                    ((t = Bs(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return s
              ? ((a = _s(e, t, a.children, a.fallback, n)),
                (s = t.child),
                (l = e.child.memoizedState),
                (s.memoizedState = null === l ? Ls(n) : Ps(l, n)),
                (s.childLanes = e.childLanes & ~n),
                (t.memoizedState = Is),
                a)
              : ((n = Os(e, t, a.children, n)), (t.memoizedState = null), n);
          }
          return s
            ? ((a = _s(e, t, a.children, a.fallback, n)),
              (s = t.child),
              (l = e.child.memoizedState),
              (s.memoizedState = null === l ? Ls(n) : Ps(l, n)),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Is),
              a)
            : ((n = Os(e, t, a.children, n)), (t.memoizedState = null), n);
        }
        function Bs(e, t) {
          return (
            ((t = Du(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Os(e, t, n, r) {
          var a = e.child;
          return (
            (e = a.sibling),
            (n = Iu(a, { mode: "visible", children: n })),
            0 === (1 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = n)
          );
        }
        function _s(e, t, n, r, a) {
          var i = t.mode,
            l = (e = e.child).sibling,
            s = { mode: "hidden", children: n };
          return (
            0 === (1 & i) && t.child !== e
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = s),
                (t.deletions = null))
              : ((n = Iu(e, s)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== l ? (r = Iu(l, r)) : ((r = Pu(r, i, a, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function Fs(e, t, n, r) {
          return (
            null !== r && Qi(r),
            Hi(t, e.child, null, n),
            ((e = Bs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Rs(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Xa(e.return, t, n);
        }
        function Qs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Gs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = rl.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Rs(e, n, t);
                else if (19 === e.tag) Rs(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Aa(rl, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === al(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Qs(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === al(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Qs(t, !0, n, null, i);
                break;
              case "together":
                Qs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Lo |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Iu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Iu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vs(e, t) {
          switch ((Mi(t), t.tag)) {
            case 1:
              return (
                Ia(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                el(),
                Ea(Ma),
                Ea(Na),
                ll(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return nl(t), null;
            case 13:
              if (
                (Ea(rl),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                Ri();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea(rl), null;
            case 4:
              return el(), null;
            case 10:
              return Ja(t.type._context), null;
            case 22:
            case 23:
              return cu(), null;
            default:
              return null;
          }
        }
        var Us = !1,
          Hs = !1,
          Zs = "function" === typeof WeakSet ? WeakSet : Set,
          Ys = null;
        function Ks(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Su(e, t, r);
              }
            else n.current = null;
        }
        function Js(e, t, n) {
          try {
            n();
          } catch (r) {
            Su(e, t, r);
          }
        }
        var Xs = !1;
        function qs(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && Js(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function $s(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function eo(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function to(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), to(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function no(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ro(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || no(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ao(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ao(e, t, n), e = e.sibling; null !== e; )
              ao(e, t, n), (e = e.sibling);
        }
        function io(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (io(e, t, n), e = e.sibling; null !== e; )
              io(e, t, n), (e = e.sibling);
        }
        var lo = null,
          so = !1;
        function oo(e, t, n) {
          for (n = n.child; null !== n; ) uo(e, t, n), (n = n.sibling);
        }
        function uo(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Hs || Ks(n, t);
            case 6:
              var r = lo,
                a = so;
              (lo = null),
                oo(e, t, n),
                (so = a),
                null !== (lo = r) &&
                  (so
                    ? ((e = lo),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : lo.removeChild(n.stateNode));
              break;
            case 18:
              null !== lo &&
                (so
                  ? ((e = lo),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? oa(e.parentNode, n)
                      : 1 === e.nodeType && oa(e, n),
                    Gt(e))
                  : oa(lo, n.stateNode));
              break;
            case 4:
              (r = lo),
                (a = so),
                (lo = n.stateNode.containerInfo),
                (so = !0),
                oo(e, t, n),
                (lo = r),
                (so = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Hs &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    l = i.destroy;
                  (i = i.tag),
                    void 0 !== l &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      Js(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              oo(e, t, n);
              break;
            case 1:
              if (
                !Hs &&
                (Ks(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Su(n, t, s);
                }
              oo(e, t, n);
              break;
            case 21:
              oo(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Hs = (r = Hs) || null !== n.memoizedState),
                  oo(e, t, n),
                  (Hs = r))
                : oo(e, t, n);
              break;
            default:
              oo(e, t, n);
          }
        }
        function co(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zs()),
              t.forEach(function (t) {
                var r = Tu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function fo(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  s = t,
                  o = s;
                e: for (; null !== o; ) {
                  switch (o.tag) {
                    case 5:
                      (lo = o.stateNode), (so = !1);
                      break e;
                    case 3:
                    case 4:
                      (lo = o.stateNode.containerInfo), (so = !0);
                      break e;
                  }
                  o = o.return;
                }
                if (null === lo) throw Error(i(160));
                uo(l, s, a), (lo = null), (so = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Su(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) po(t, e), (t = t.sibling);
        }
        function po(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((fo(t, e), ho(e), 4 & r)) {
                try {
                  qs(3, e, e.return), $s(3, e);
                } catch (m) {
                  Su(e, e.return, m);
                }
                try {
                  qs(5, e, e.return);
                } catch (m) {
                  Su(e, e.return, m);
                }
              }
              break;
            case 1:
              fo(t, e), ho(e), 512 & r && null !== n && Ks(n, n.return);
              break;
            case 5:
              if (
                (fo(t, e),
                ho(e),
                512 & r && null !== n && Ks(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (m) {
                  Su(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : l,
                  o = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === o &&
                      "radio" === l.type &&
                      null != l.name &&
                      X(a, l),
                      be(o, s);
                    var c = be(o, l);
                    for (s = 0; s < u.length; s += 2) {
                      var d = u[s],
                        f = u[s + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c);
                    }
                    switch (o) {
                      case "input":
                        q(a, l);
                        break;
                      case "textarea":
                        ie(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (m) {
                    Su(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((fo(t, e), ho(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (c = e.stateNode), (d = e.memoizedProps);
                try {
                  c.nodeValue = d;
                } catch (m) {
                  Su(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (fo(t, e),
                ho(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Gt(t.containerInfo);
                } catch (m) {
                  Su(e, e.return, m);
                }
              break;
            case 4:
            default:
              fo(t, e), ho(e);
              break;
            case 13:
              fo(t, e),
                ho(e),
                8192 & (c = e.child).flags &&
                  null !== c.memoizedState &&
                  (null === c.alternate ||
                    null === c.alternate.memoizedState) &&
                  (_o = Xe()),
                4 & r && co(e);
              break;
            case 22:
              if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Hs = (d = Hs) || c), fo(t, e), (Hs = d))
                  : fo(t, e),
                ho(e),
                8192 & r)
              ) {
                d = null !== e.memoizedState;
                e: for (f = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === f) {
                      f = p;
                      try {
                        (a = p.stateNode),
                          d
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((o = p.stateNode),
                              (s =
                                void 0 !== (u = p.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (o.style.display = me("display", s)));
                      } catch (m) {
                        Su(e, e.return, m);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === f)
                      try {
                        p.stateNode.nodeValue = d ? "" : p.memoizedProps;
                      } catch (m) {
                        Su(e, e.return, m);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    f === p && (f = null), (p = p.return);
                  }
                  f === p && (f = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
                if (d && !c && 0 !== (1 & e.mode))
                  for (Ys = e, e = e.child; null !== e; ) {
                    for (c = Ys = e; null !== Ys; ) {
                      switch (((f = (d = Ys).child), d.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          qs(4, d, d.return);
                          break;
                        case 1:
                          if (
                            (Ks(d, d.return),
                            "function" ===
                              typeof (l = d.stateNode).componentWillUnmount)
                          ) {
                            (p = d), (h = d.return);
                            try {
                              (a = p),
                                (l.props = a.memoizedProps),
                                (l.state = a.memoizedState),
                                l.componentWillUnmount();
                            } catch (m) {
                              Su(p, h, m);
                            }
                          }
                          break;
                        case 5:
                          Ks(d, d.return);
                          break;
                        case 22:
                          if (null !== d.memoizedState) {
                            yo(c);
                            continue;
                          }
                      }
                      null !== f ? ((f.return = d), (Ys = f)) : yo(c);
                    }
                    e = e.sibling;
                  }
              }
              break;
            case 19:
              fo(t, e), ho(e), 4 & r && co(e);
            case 21:
          }
        }
        function ho(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (no(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    io(e, ro(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ao(e, ro(e), l);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Su(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function mo(e, t, n) {
          (Ys = e), vo(e, t, n);
        }
        function vo(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Ys; ) {
            var a = Ys,
              i = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Us;
              if (!l) {
                var s = a.alternate,
                  o = (null !== s && null !== s.memoizedState) || Hs;
                s = Us;
                var u = Hs;
                if (((Us = l), (Hs = o) && !u))
                  for (Ys = a; null !== Ys; )
                    (o = (l = Ys).child),
                      22 === l.tag && null !== l.memoizedState
                        ? bo(a)
                        : null !== o
                        ? ((o.return = l), (Ys = o))
                        : bo(a);
                for (; null !== i; ) (Ys = i), vo(i, t, n), (i = i.sibling);
                (Ys = a), (Us = s), (Hs = u);
              }
              go(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Ys = i))
                : go(e);
          }
        }
        function go(e) {
          for (; null !== Ys; ) {
            var t = Ys;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hs || $s(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Hs)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : Va(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && ui(t, l, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        ui(t, s, n);
                      }
                      break;
                    case 5:
                      var o = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = o;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Gt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Hs || (512 & t.flags && eo(t));
              } catch (p) {
                Su(t, t.return, p);
              }
            }
            if (t === e) {
              Ys = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Ys = n);
              break;
            }
            Ys = t.return;
          }
        }
        function yo(e) {
          for (; null !== Ys; ) {
            var t = Ys;
            if (t === e) {
              Ys = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Ys = n);
              break;
            }
            Ys = t.return;
          }
        }
        function bo(e) {
          for (; null !== Ys; ) {
            var t = Ys;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    $s(4, t);
                  } catch (o) {
                    Su(t, n, o);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (o) {
                      Su(t, a, o);
                    }
                  }
                  var i = t.return;
                  try {
                    eo(t);
                  } catch (o) {
                    Su(t, i, o);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    eo(t);
                  } catch (o) {
                    Su(t, l, o);
                  }
              }
            } catch (o) {
              Su(t, t.return, o);
            }
            if (t === e) {
              Ys = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Ys = s);
              break;
            }
            Ys = t.return;
          }
        }
        var wo,
          xo = Math.ceil,
          ko = w.ReactCurrentDispatcher,
          So = w.ReactCurrentOwner,
          Co = w.ReactCurrentBatchConfig,
          Eo = 0,
          Ao = null,
          To = null,
          No = 0,
          Mo = 0,
          jo = Ca(0),
          zo = 0,
          Io = null,
          Lo = 0,
          Po = 0,
          Do = 0,
          Bo = null,
          Oo = null,
          _o = 0,
          Fo = 1 / 0,
          Ro = null,
          Qo = !1,
          Go = null,
          Wo = null,
          Vo = !1,
          Uo = null,
          Ho = 0,
          Zo = 0,
          Yo = null,
          Ko = -1,
          Jo = 0;
        function Xo() {
          return 0 !== (6 & Eo) ? Xe() : -1 !== Ko ? Ko : (Ko = Xe());
        }
        function qo(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Eo) && 0 !== No
            ? No & -No
            : null !== Wa.transition
            ? (0 === Jo && (Jo = mt()), Jo)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function $o(e, t, n) {
          if (50 < Zo) throw ((Zo = 0), (Yo = null), Error(i(185)));
          var r = eu(e, t);
          return null === r
            ? null
            : (gt(r, t, n),
              (0 !== (2 & Eo) && r === Ao) ||
                (r === Ao &&
                  (0 === (2 & Eo) && (Po |= t), 4 === zo && lu(r, No)),
                nu(r, n),
                1 === t &&
                  0 === Eo &&
                  0 === (1 & e.mode) &&
                  ((Fo = Xe() + 500), Fa && Ga())),
              r);
        }
        function eu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function tu(e) {
          return (
            (null !== Ao || null !== ei) && 0 !== (1 & e.mode) && 0 === (2 & Eo)
          );
        }
        function nu(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var l = 31 - lt(i),
                s = 1 << l,
                o = a[l];
              -1 === o
                ? (0 !== (s & n) && 0 === (s & r)) || (a[l] = pt(s, t))
                : o <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = ft(e, e === Ao ? No : 0);
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Qa(e);
                  })(su.bind(null, e))
                : Qa(su.bind(null, e)),
                la(function () {
                  0 === Eo && Ga();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nu(n, ru.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ru(e, t) {
          if (((Ko = -1), (Jo = 0), 0 !== (6 & Eo))) throw Error(i(327));
          var n = e.callbackNode;
          if (xu() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ao ? No : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = mu(e, r);
          else {
            t = r;
            var a = Eo;
            Eo |= 2;
            var l = pu();
            for (
              (Ao === e && No === t) ||
              ((Ro = null), (Fo = Xe() + 500), du(e, t));
              ;

            )
              try {
                gu();
                break;
              } catch (o) {
                fu(e, o);
              }
            Ka(),
              (ko.current = l),
              (Eo = a),
              null !== To ? (t = 0) : ((Ao = null), (No = 0), (t = zo));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = au(e, a))),
              1 === t)
            )
              throw ((n = Io), du(e, 0), lu(e, r), nu(e, Xe()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = mu(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = au(e, l))),
                  1 === t))
              )
                throw ((n = Io), du(e, 0), lu(e, r), nu(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  wu(e, Oo, Ro);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = _o + 500 - Xe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      Xo(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wu.bind(null, e, Oo, Ro), t);
                    break;
                  }
                  wu(e, Oo, Ro);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - lt(r);
                    (l = 1 << s), (s = t[s]) > a && (a = s), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * xo(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wu.bind(null, e, Oo, Ro), r);
                    break;
                  }
                  wu(e, Oo, Ro);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return nu(e, Xe()), e.callbackNode === n ? ru.bind(null, e) : null;
        }
        function au(e, t) {
          var n = Bo;
          return (
            e.current.memoizedState.isDehydrated && (du(e, t).flags |= 256),
            2 !== (e = mu(e, t)) && ((t = Oo), (Oo = n), null !== t && iu(t)),
            e
          );
        }
        function iu(e) {
          null === Oo ? (Oo = e) : Oo.push.apply(Oo, e);
        }
        function lu(e, t) {
          for (
            t &= ~Do,
              t &= ~Po,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function su(e) {
          if (0 !== (6 & Eo)) throw Error(i(327));
          xu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return nu(e, Xe()), null;
          var n = mu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = au(e, r)));
          }
          if (1 === n) throw ((n = Io), du(e, 0), lu(e, t), nu(e, Xe()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wu(e, Oo, Ro),
            nu(e, Xe()),
            null
          );
        }
        function ou(e, t) {
          var n = Eo;
          Eo |= 1;
          try {
            return e(t);
          } finally {
            0 === (Eo = n) && ((Fo = Xe() + 500), Fa && Ga());
          }
        }
        function uu(e) {
          null !== Uo && 0 === Uo.tag && 0 === (6 & Eo) && xu();
          var t = Eo;
          Eo |= 1;
          var n = Co.transition,
            r = bt;
          try {
            if (((Co.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Co.transition = n), 0 === (6 & (Eo = t)) && Ga();
          }
        }
        function cu() {
          (Mo = jo.current), Ea(jo);
        }
        function du(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== To))
            for (n = To.return; null !== n; ) {
              var r = n;
              switch ((Mi(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  el(), Ea(Ma), Ea(Na), ll();
                  break;
                case 5:
                  nl(r);
                  break;
                case 4:
                  el();
                  break;
                case 13:
                case 19:
                  Ea(rl);
                  break;
                case 10:
                  Ja(r.type._context);
                  break;
                case 22:
                case 23:
                  cu();
              }
              n = n.return;
            }
          if (
            ((Ao = e),
            (To = e = Iu(e.current, null)),
            (No = Mo = t),
            (zo = 0),
            (Io = null),
            (Do = Po = Lo = 0),
            (Oo = Bo = null),
            null !== ei)
          ) {
            for (t = 0; t < ei.length; t++)
              if (null !== (r = (n = ei[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var l = i.next;
                  (i.next = a), (r.next = l);
                }
                n.pending = r;
              }
            ei = null;
          }
          return e;
        }
        function fu(e, t) {
          for (;;) {
            var n = To;
            try {
              if ((Ka(), (sl.current = ts), pl)) {
                for (var r = cl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                pl = !1;
              }
              if (
                ((ul = 0),
                (fl = dl = cl = null),
                (hl = !1),
                (ml = 0),
                (So.current = null),
                null === n || null === n.return)
              ) {
                (zo = 1), (Io = t), (To = null);
                break;
              }
              e: {
                var l = e,
                  s = n.return,
                  o = n,
                  u = t;
                if (
                  ((t = No),
                  (o.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    d = o,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = hs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ms(h, s, o, 0, t),
                      1 & h.mode && ps(l, c, t),
                      (u = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(u), (t.updateQueue = v);
                    } else m.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ps(l, c, t), hu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (Ii && 1 & o.mode) {
                  var g = hs(s);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      ms(g, s, o, 0, t),
                      Qi(u);
                    break e;
                  }
                }
                (l = u),
                  4 !== zo && (zo = 2),
                  null === Bo ? (Bo = [l]) : Bo.push(l),
                  (u = is(u, o)),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        si(o, ds(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Wo || !Wo.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          si(o, fs(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              bu(n);
            } catch (w) {
              (t = w), To === n && null !== n && (To = n = n.return);
              continue;
            }
            break;
          }
        }
        function pu() {
          var e = ko.current;
          return (ko.current = ts), null === e ? ts : e;
        }
        function hu() {
          (0 !== zo && 3 !== zo && 2 !== zo) || (zo = 4),
            null === Ao ||
              (0 === (268435455 & Lo) && 0 === (268435455 & Po)) ||
              lu(Ao, No);
        }
        function mu(e, t) {
          var n = Eo;
          Eo |= 2;
          var r = pu();
          for ((Ao === e && No === t) || ((Ro = null), du(e, t)); ; )
            try {
              vu();
              break;
            } catch (a) {
              fu(e, a);
            }
          if ((Ka(), (Eo = n), (ko.current = r), null !== To))
            throw Error(i(261));
          return (Ao = null), (No = 0), zo;
        }
        function vu() {
          for (; null !== To; ) yu(To);
        }
        function gu() {
          for (; null !== To && !Ke(); ) yu(To);
        }
        function yu(e) {
          var t = wo(e.alternate, e, Mo);
          (e.memoizedProps = e.pendingProps),
            null === t ? bu(e) : (To = t),
            (So.current = null);
        }
        function bu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = ys(n, t, Mo))) return void (To = n);
            } else {
              if (null !== (n = Vs(n, t)))
                return (n.flags &= 32767), void (To = n);
              if (null === e) return (zo = 6), void (To = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (To = t);
            To = t = e;
          } while (null !== t);
          0 === zo && (zo = 5);
        }
        function wu(e, t, n) {
          var r = bt,
            a = Co.transition;
          try {
            (Co.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  xu();
                } while (null !== Uo);
                if (0 !== (6 & Eo)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, l),
                  e === Ao && ((To = Ao = null), (No = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Vo ||
                    ((Vo = !0),
                    Nu(tt, function () {
                      return xu(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = Co.transition), (Co.transition = null);
                  var s = bt;
                  bt = 1;
                  var o = Eo;
                  (Eo |= 4),
                    (So.current = null),
                    (function (e, t) {
                      if (((ea = Vt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                o = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (o = s + a),
                                    f !== l ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = s + r),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++c === a && (o = s),
                                    p === l && ++d === r && (u = s),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === o || -1 === u
                                  ? null
                                  : { start: o, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Vt = !1,
                          Ys = t;
                        null !== Ys;

                      )
                        if (
                          ((e = (t = Ys).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Ys = e);
                        else
                          for (; null !== Ys; ) {
                            t = Ys;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : Va(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    if (1 === w.nodeType) w.textContent = "";
                                    else if (9 === w.nodeType) {
                                      var x = w.body;
                                      null != x && (x.textContent = "");
                                    }
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (k) {
                              Su(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Ys = e);
                              break;
                            }
                            Ys = t.return;
                          }
                      (m = Xs), (Xs = !1);
                    })(e, n),
                    po(n, e),
                    hr(ta),
                    (Vt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    mo(n, e, a),
                    Je(),
                    (Eo = o),
                    (bt = s),
                    (Co.transition = l);
                } else e.current = n;
                if (
                  (Vo && ((Vo = !1), (Uo = e), (Ho = a)),
                  0 === (l = e.pendingLanes) && (Wo = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  nu(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r(t[n]);
                if (Qo) throw ((Qo = !1), (e = Go), (Go = null), e);
                0 !== (1 & Ho) && 0 !== e.tag && xu(),
                  0 !== (1 & (l = e.pendingLanes))
                    ? e === Yo
                      ? Zo++
                      : ((Zo = 0), (Yo = e))
                    : (Zo = 0),
                  Ga();
              })(e, t, n, r);
          } finally {
            (Co.transition = a), (bt = r);
          }
          return null;
        }
        function xu() {
          if (null !== Uo) {
            var e = wt(Ho),
              t = Co.transition,
              n = bt;
            try {
              if (((Co.transition = null), (bt = 16 > e ? 16 : e), null === Uo))
                var r = !1;
              else {
                if (((e = Uo), (Uo = null), (Ho = 0), 0 !== (6 & Eo)))
                  throw Error(i(331));
                var a = Eo;
                for (Eo |= 4, Ys = e.current; null !== Ys; ) {
                  var l = Ys,
                    s = l.child;
                  if (0 !== (16 & Ys.flags)) {
                    var o = l.deletions;
                    if (null !== o) {
                      for (var u = 0; u < o.length; u++) {
                        var c = o[u];
                        for (Ys = c; null !== Ys; ) {
                          var d = Ys;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              qs(8, d, l);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Ys = f);
                          else
                            for (; null !== Ys; ) {
                              var p = (d = Ys).sibling,
                                h = d.return;
                              if ((to(d), d === c)) {
                                Ys = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Ys = p);
                                break;
                              }
                              Ys = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Ys = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== s)
                    (s.return = l), (Ys = s);
                  else
                    e: for (; null !== Ys; ) {
                      if (0 !== (2048 & (l = Ys).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            qs(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (Ys = y);
                        break e;
                      }
                      Ys = l.return;
                    }
                }
                var b = e.current;
                for (Ys = b; null !== Ys; ) {
                  var w = (s = Ys).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Ys = w);
                  else
                    e: for (s = b; null !== Ys; ) {
                      if (0 !== (2048 & (o = Ys).flags))
                        try {
                          switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                              $s(9, o);
                          }
                        } catch (k) {
                          Su(o, o.return, k);
                        }
                      if (o === s) {
                        Ys = null;
                        break e;
                      }
                      var x = o.sibling;
                      if (null !== x) {
                        (x.return = o.return), (Ys = x);
                        break e;
                      }
                      Ys = o.return;
                    }
                }
                if (
                  ((Eo = a),
                  Ga(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Co.transition = t);
            }
          }
          return !1;
        }
        function ku(e, t, n) {
          ii(e, (t = ds(0, (t = is(n, t)), 1))),
            (t = Xo()),
            null !== (e = eu(e, 1)) && (gt(e, 1, t), nu(e, t));
        }
        function Su(e, t, n) {
          if (3 === e.tag) ku(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ku(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Wo || !Wo.has(r)))
                ) {
                  ii(t, (e = fs(t, (e = is(n, e)), 1))),
                    (e = Xo()),
                    null !== (t = eu(t, 1)) && (gt(t, 1, e), nu(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = Xo()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ao === e &&
              (No & n) === n &&
              (4 === zo ||
              (3 === zo && (130023424 & No) === No && 500 > Xe() - _o)
                ? du(e, 0)
                : (Do |= n)),
            nu(e, t);
        }
        function Eu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = Xo();
          null !== (e = eu(e, t)) && (gt(e, t, n), nu(e, n));
        }
        function Au(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Eu(e, n);
        }
        function Tu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Eu(e, n);
        }
        function Nu(e, t) {
          return Ze(e, t);
        }
        function Mu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function ju(e, t, n, r) {
          return new Mu(e, t, n, r);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = ju(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lu(e, t, n, r, a, l) {
          var s = 2;
          if (((r = e), "function" === typeof e)) zu(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Pu(n.children, a, l, t);
              case C:
                (s = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = ju(12, n, t, 2 | a)).elementType = E), (e.lanes = l), e
                );
              case M:
                return (
                  ((e = ju(13, n, t, a)).elementType = M), (e.lanes = l), e
                );
              case j:
                return (
                  ((e = ju(19, n, t, a)).elementType = j), (e.lanes = l), e
                );
              case L:
                return Du(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case A:
                      s = 10;
                      break e;
                    case T:
                      s = 9;
                      break e;
                    case N:
                      s = 11;
                      break e;
                    case z:
                      s = 14;
                      break e;
                    case I:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = ju(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Pu(e, t, n, r) {
          return ((e = ju(7, e, r, t)).lanes = n), e;
        }
        function Du(e, t, n, r) {
          return (
            ((e = ju(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function Bu(e, t, n) {
          return ((e = ju(6, e, null, t)).lanes = n), e;
        }
        function Ou(e, t, n) {
          return (
            ((t = ju(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function _u(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Fu(e, t, n, r, a, i, l, s, o) {
          return (
            (e = new _u(e, t, n, s, o)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = ju(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            ni(i),
            e
          );
        }
        function Ru(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Qu(e) {
          if (!e) return Ta;
          e: {
            if (Ge((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ia(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ia(n)) return Da(e, n, t);
          }
          return t;
        }
        function Gu(e, t, n, r, a, i, l, s, o) {
          return (
            ((e = Fu(n, r, !0, e, 0, i, 0, s, o)).context = Qu(null)),
            (n = e.current),
            ((i = ai((r = Xo()), (a = qo(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            ii(n, i),
            (e.current.lanes = a),
            gt(e, a, r),
            nu(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            i = Xo(),
            l = qo(a);
          return (
            (n = Qu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ai(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            ii(a, t),
            null !== (e = $o(a, l, i)) && li(e, a, l),
            l
          );
        }
        function Vu(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Uu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Hu(e, t) {
          Uu(e, t), (e = e.alternate) && Uu(e, t);
        }
        wo = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ma.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        js(t), Ri();
                        break;
                      case 5:
                        tl(t);
                        break;
                      case 1:
                        Ia(t.type) && Ba(t);
                        break;
                      case 4:
                        $i(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Aa(Ua, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Aa(rl, 1 & rl.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ds(e, t, n)
                            : (Aa(rl, 1 & rl.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Aa(rl, 1 & rl.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Gs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Aa(rl, rl.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), Ii && 0 !== (1048576 & t.flags) && Ti(t, wi, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps);
              var a = za(t, Na.current);
              qa(t, n), (a = bl(null, t, r, e, a, n));
              var l = wl();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ia(r) ? ((l = !0), Ba(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    ni(t),
                    (a.updater = fi),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    vi(t, r, e, n),
                    (t = Ms(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    Ii && l && Ni(t),
                    xs(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === N) return 11;
                        if (e === z) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = Va(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, Va(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : Va(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ns(e, t, r, (a = t.elementType === r ? a : Va(r, a)), n)
              );
            case 3:
              e: {
                if ((js(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  ri(e, t),
                  oi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = zs(e, t, r, n, (a = Error(i(423))));
                    break e;
                  }
                  if (r !== a) {
                    t = zs(e, t, r, n, (a = Error(i(424))));
                    break e;
                  }
                  for (
                    zi = ua(t.stateNode.containerInfo.firstChild),
                      ji = t,
                      Ii = !0,
                      Li = null,
                      n = Zi(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((Ri(), r === a)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                tl(t),
                null === e && Oi(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                As(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && Oi(t), null;
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                $i(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Hi(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ks(e, t, r, (a = t.elementType === r ? a : Va(r, a)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (s = a.value),
                  Aa(Ua, r._currentValue),
                  (r._currentValue = s),
                  null !== l)
                )
                  if (sr(l.value, s)) {
                    if (l.children === a.children && !Ma.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var o = l.dependencies;
                      if (null !== o) {
                        s = l.child;
                        for (var u = o.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === l.tag) {
                              (u = ai(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d
                                  ? (u.next = u)
                                  : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (l.lanes |= n),
                              null !== (u = l.alternate) && (u.lanes |= n),
                              Xa(l.return, n, t),
                              (o.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === l.tag)
                        s = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (s = l.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (o = s.alternate) && (o.lanes |= n),
                          Xa(s, n, t),
                          (s = l.sibling);
                      } else s = l.child;
                      if (null !== s) s.return = l;
                      else
                        for (s = l; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (l = s.sibling)) {
                            (l.return = s.return), (s = l);
                            break;
                          }
                          s = s.return;
                        }
                      l = s;
                    }
                xs(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                qa(t, n),
                (r = r((a = $a(a)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Va((r = t.type), t.pendingProps)),
                Ss(e, t, r, (a = Va(r.type, a)), n)
              );
            case 15:
              return Cs(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Va(r, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                Ia(r) ? ((e = !0), Ba(t)) : (e = !1),
                qa(t, n),
                hi(t, r, a),
                vi(t, r, a, n),
                Ms(null, t, r, !0, e, n)
              );
            case 19:
              return Gs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var Zu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Yu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          this._internalRoot = e;
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function qu() {}
        function $u(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var l = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = Vu(l);
                s.call(e);
              };
            }
            Wu(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = Vu(l);
                    i.call(e);
                  };
                }
                var l = Gu(t, r, e, 0, null, !1, 0, "", qu);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Gr(8 === e.nodeType ? e.parentNode : e),
                  uu(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Vu(o);
                  s.call(e);
                };
              }
              var o = Fu(e, 0, !1, null, 0, !1, 0, "", qu);
              return (
                (e._reactRootContainer = o),
                (e[ha] = o.current),
                Gr(8 === e.nodeType ? e.parentNode : e),
                uu(function () {
                  Wu(t, o, n, r);
                }),
                o
              );
            })(n, t, e, a, r);
          return Vu(l);
        }
        (Ku.prototype.render = Yu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Wu(e, t, null, null);
          }),
          (Ku.prototype.unmount = Yu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uu(function () {
                  Wu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Ku.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Ct();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ot(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    nu(t, Xe()),
                    0 === (6 & Eo) && ((Fo = Xe() + 500), Ga()));
                }
                break;
              case 13:
                var r = Xo();
                uu(function () {
                  return $o(e, 1, r);
                }),
                  Hu(e, 1);
            }
          }),
          (kt = function (e) {
            13 === e.tag && ($o(e, 134217728, Xo()), Hu(e, 134217728));
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Xo(),
                n = qo(e);
              $o(e, n, t), Hu(e, n);
            }
          }),
          (Ct = function () {
            return bt;
          }),
          (Et = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((q(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(i(90));
                      Z(r), q(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = ou),
          (Me = uu);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ae, Te, ou],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.1.0",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ue(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (it = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ju(t)) throw Error(i(200));
            return Ru(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ju(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = Zu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Fu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Gr(8 === e.nodeType ? e.parentNode : e),
              new Yu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = Ue(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xu(t)) throw Error(i(200));
            return $u(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ju(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              s = Zu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Gu(t, null, e, 1, null != n ? n : null, a, 0, l, s)),
              (e[ha] = t.current),
              Gr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Ku(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xu(t)) throw Error(i(200));
            return $u(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (uu(function () {
                $u(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = ou),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return $u(e, t, n, !1, r);
          }),
          (t.version = "18.1.0-next-22edb9f77-20220426");
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          o = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !o.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          o = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          C = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            i = {},
            l = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !C.hasOwnProperty(a) && (i[a] = t[a]);
          var o = arguments.length - 2;
          if (1 === o) i.children = r;
          else if (1 < o) {
            for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (o = e.defaultProps)) void 0 === i[a] && (i[a] = o[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: s,
            props: i,
            _owner: S.current,
          };
        }
        function A(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function N(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function M(e, t, a, i, l) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var o = !1;
          if (null === e) o = !0;
          else
            switch (s) {
              case "string":
              case "number":
                o = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    o = !0;
                }
            }
          if (o)
            return (
              (l = l((o = e))),
              (e = "" === i ? "." + N(o, 0) : i),
              x(l)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  M(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (A(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (o && o.key === l.key)
                          ? ""
                          : ("" + l.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((o = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + N((s = e[u]), u);
              o += M(s, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              o += M((s = s.value), t, a, (c = i + N(s, u++)), l);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return o;
        }
        function j(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            M(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function z(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var I = { current: null },
          L = { transition: null },
          P = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: j,
          forEach: function (e, t, n) {
            j(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!A(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              i = e.key,
              l = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (s = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var o = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !C.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== o ? o[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              o = Array(u);
              for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
              a.children = o;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: l,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: o,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = A),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: z,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return I.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return I.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return I.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.1.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var s = 2 * (r + 1) - 1,
                o = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(o, n))
                u < a && 0 > i(c, o)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = o), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var s = Date,
            o = s.now();
          t.unstable_now = function () {
            return s.now() - o;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(u)) (m = !0), L(k);
            else {
              var t = r(c);
              null !== t && P(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(A), (A = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !M()));

            ) {
              var l = f.callback;
              if ("function" === typeof l) {
                (f.callback = null), (p = f.priorityLevel);
                var s = l(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var o = !0;
            else {
              var d = r(c);
              null !== d && P(x, d.startTime - n), (o = !1);
            }
            return o;
          } finally {
            (f = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          C = !1,
          E = null,
          A = -1,
          T = 5,
          N = -1;
        function M() {
          return !(t.unstable_now() - N < T);
        }
        function j() {
          if (null !== E) {
            var e = t.unstable_now();
            N = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? S() : ((C = !1), (E = null));
            }
          } else C = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(j);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var z = new MessageChannel(),
            I = z.port2;
          (z.port1.onmessage = j),
            (S = function () {
              I.postMessage(null);
            });
        } else
          S = function () {
            g(j, 0);
          };
        function L(e) {
          (E = e), C || ((C = !0), S());
        }
        function P(e, n) {
          A = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? l + i : l)
                : (i = l),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > l
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (v ? (y(A), (A = -1)) : (v = !0), P(x, i - l)))
                : ((e.sortIndex = s), n(u, e), m || h || ((m = !0), L(k))),
              e
            );
          }),
          (t.unstable_shouldYield = M),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.p = "/"),
    (function () {
      var e = n(164),
        t = n(791),
        r = n.p + "static/media/Resume - Ankur Sarkar.5cac8b2daa4e85e62975.pdf",
        a = n(184),
        i = function () {
          return (0, a.jsxs)("div", {
            className: "cta",
            children: [
              (0, a.jsx)("a", {
                href: r,
                download: !0,
                className: "btn",
                children: "Download Resume",
              }),
              (0, a.jsx)("a", {
                href: "#contact",
                className: "btn btn-primary",
                children: "Let's Talk",
              }),
            ],
          });
        },
        l = n.p + "static/media/Ankur.1fed8f0dca992b716170.jpg",
        s = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        o = t.createContext && t.createContext(s),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        c = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function d(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, u({ key: n }, e.attr), d(e.child));
          })
        );
      }
      function f(e) {
        return function (n) {
          return t.createElement(p, u({ attr: u({}, e.attr) }, n), d(e.child));
        };
      }
      function p(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            i = e.size,
            l = e.title,
            s = c(e, ["attr", "size", "title"]),
            o = i || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              u(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                s,
                {
                  className: r,
                  style: u(u({ color: e.color || n.color }, n.style), e.style),
                  height: o,
                  width: o,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              l && t.createElement("title", null, l),
              e.children
            )
          );
        };
        return void 0 !== o
          ? t.createElement(o.Consumer, null, function (e) {
              return n(e);
            })
          : n(s);
      }
      function h(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
              },
            },
          ],
        })(e);
      }
      function m(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "rect",
              attr: {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5",
              },
            },
            {
              tag: "path",
              attr: { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" },
            },
            {
              tag: "line",
              attr: { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" },
            },
          ],
        })(e);
      }
      function v(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
              },
            },
            { tag: "rect", attr: { x: "2", y: "9", width: "4", height: "12" } },
            { tag: "circle", attr: { cx: "4", cy: "4", r: "2" } },
          ],
        })(e);
      }
      function g(e) {
        return f({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            {
              tag: "path",
              attr: {
                d: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
              },
            },
          ],
        })(e);
      }
      function y(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 320 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
              },
            },
          ],
        })(e);
      }
      function b(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z",
              },
            },
          ],
        })(e);
      }
      function w(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
              },
            },
          ],
        })(e);
      }
      function x(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z",
              },
            },
          ],
        })(e);
      }
      function k(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z",
              },
            },
          ],
        })(e);
      }
      function S(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z",
              },
            },
          ],
        })(e);
      }
      function C(e) {
        return f({
          tag: "svg",
          attr: { fill: "currentColor", viewBox: "0 0 16 16" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z",
              },
            },
          ],
        })(e);
      }
      function E(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M22 20.007a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2-10-9V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16.007zM4.434 5L12 11.81 19.566 5H4.434zM0 15h8v2H0v-2zm0-5h5v2H0v-2z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function A(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    fillRule: "nonzero",
                    d: "M7.764 19.225c.59-.26 1.25-.309 1.868-.139.77.21 1.565.316 2.368.314 4.585 0 8-3.287 8-7.7S16.585 4 12 4s-8 3.287-8 7.7c0 2.27.896 4.272 2.466 5.676a2.8 2.8 0 0 1 .942 2.006l.356-.157zM12 2c5.634 0 10 4.127 10 9.7 0 5.573-4.366 9.7-10 9.7a10.894 10.894 0 0 1-2.895-.384.8.8 0 0 0-.534.039l-1.984.876a.8.8 0 0 1-1.123-.707l-.055-1.78a.797.797 0 0 0-.268-.57C3.195 17.135 2 14.617 2 11.7 2 6.127 6.367 2 12 2zM5.995 14.537l2.937-4.66a1.5 1.5 0 0 1 2.17-.4l2.336 1.75a.6.6 0 0 0 .723 0l3.155-2.396c.421-.319.971.185.689.633l-2.937 4.66a1.5 1.5 0 0 1-2.17.4l-2.336-1.75a.6.6 0 0 0-.723 0l-3.155 2.395c-.421.319-.971-.185-.689-.633z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function T(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: {},
              child: [
                { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
                {
                  tag: "path",
                  attr: {
                    d: "M19 7h5v2h-5V7zm-2 5h7v2h-7v-2zm3 5h4v2h-4v-2zM2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z",
                  },
                },
              ],
            },
          ],
        })(e);
      }
      function N(e) {
        return f({
          tag: "svg",
          attr: {
            t: "1569683925316",
            viewBox: "0 0 1024 1024",
            version: "1.1",
          },
          child: [
            { tag: "defs", attr: {}, child: [] },
            {
              tag: "path",
              attr: {
                d: "M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z",
              },
            },
            {
              tag: "path",
              attr: {
                d: "M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z",
              },
            },
          ],
        })(e);
      }
      var M = function () {
          return (0, a.jsxs)("div", {
            className: "header_socials",
            children: [
              (0, a.jsx)("a", {
                href: "https://github.com/Ankur02Sarkar",
                target: "_blank",
                children: (0, a.jsx)(h, {}),
              }),
              (0, a.jsx)("a", {
                href: "https://www.linkedin.com/in/ankur-sarkar",
                target: "_blank",
                children: (0, a.jsx)(v, {}),
              }),
              (0, a.jsx)("a", {
                href: "https://www.hackerrank.com/God_Slayer",
                target: "_blank",
                children: (0, a.jsx)(b, {}),
              }),
              (0, a.jsx)("a", {
                href: "tel:+917449600707",
                target: "_blank",
                children: (0, a.jsx)(S, {}),
              }),
              (0, a.jsx)("a", {
                href: "mailto:sarkarrohonankur@gmail.com",
                target: "_blank",
                children: (0, a.jsx)(E, {}),
              }),
              (0, a.jsx)("a", {
                href: "https://wa.me/+917449600707",
                target: "_blank",
                children: (0, a.jsx)(N, {}),
              }),
            ],
          });
        },
        j = function () {
          return (0, a.jsx)("header", {
            id: "home",
            children: (0, a.jsxs)("div", {
              className: "container header_container",
              children: [
                (0, a.jsx)("h3", { children: "Hello World! " }),
                (0, a.jsx)("h1", { children: "I am Ankur Sarkar" }),
                (0, a.jsx)("h3", {
                  className: "text-light",
                  children: "A Front End Developer",
                }),
                (0, a.jsx)(i, {}),
                (0, a.jsx)(M, {}),
                (0, a.jsx)("div", {
                  className: "me",
                  children: (0, a.jsx)("img", { src: l, alt: "Ankur Sarkar" }),
                }),
                (0, a.jsx)("a", {
                  href: "#contact",
                  className: "scroll_down",
                  children: "Scroll Down",
                }),
              ],
            }),
          });
        };
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function I(e, t) {
        if (e) {
          if ("string" === typeof e) return z(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? z(e, t)
              : void 0
          );
        }
      }
      function L(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i = [],
                l = !0,
                s = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (i.push(r.value), !t || i.length !== t);
                  l = !0
                );
              } catch (o) {
                (s = !0), (a = o);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (s) throw a;
                }
              }
              return i;
            }
          })(e, t) ||
          I(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function P(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M305.975 298.814l22.704 2.383V486l-62.712-66.965V312.499l18.214 8.895zm-99.95 0l-22.716 2.383V486l62.711-66.965V312.499l-18.213 8.895zm171.98-115.78l7.347 25.574-22.055 14.87-1.847 26.571-25.81 6.425-10.803 24.314-26.46-2.795-18.475 19.087L256 285.403l-23.902 11.677-18.475-19.15-26.46 2.795-10.803-24.313-25.81-6.363-1.847-26.534-22.118-14.92 7.348-25.573-15.594-21.544 15.644-21.52-7.398-25.523 22.068-14.87L150.5 73.03l25.86-6.362 10.803-24.313 26.46 2.794L232.098 26 256 37.677 279.902 26l18.475 19.149 26.46-2.794 10.803 24.313 25.81 6.425 1.847 26.534 22.055 14.87-7.347 25.574 15.656 21.407zm-49.214-21.556a72.242 72.242 0 1 0-72.242 72.242 72.355 72.355 0 0 0 72.242-72.242zm-72.242-52.283a52.282 52.282 0 1 0 52.282 52.283 52.395 52.395 0 0 0-52.282-52.245z",
              },
            },
          ],
        })(e);
      }
      function D(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M137.71 18.326L17.866 138.166l29.582 29.582c23.04-53.698 66.14-96.802 119.84-119.842l-29.58-29.58zm238.286.04L346.44 47.92c53.693 23.048 96.79 66.155 119.822 119.857l29.576-29.575-119.842-119.84zm-133.27 37.04C137.405 62.64 54.448 150.126 54.448 257.31c0 111.93 90.466 202.397 202.398 202.397 32.75 0 63.66-7.757 91.007-21.52l-22.26-15.78c-21.173 8.84-44.394 13.734-68.745 13.734-98.652 0-178.827-80.172-178.827-178.824 0-90.942 68.133-166.178 156.065-177.382l8.637-24.528zm29.432.076l8.555 24.604c87.397 11.69 154.96 86.67 154.96 177.23 0 48.234-19.17 92.043-50.29 124.23l8.633 24.686c40.12-36.963 65.23-89.96 65.23-148.923 0-106.782-82.332-194.023-187.088-201.828zm-14.75 14.49l-32.3 91.706h18.925v45.068c4.35-1.182 8.917-1.824 13.63-1.824 4.36 0 8.596.547 12.65 1.564v-44.808h18.98L257.408 69.97zm71.82 44.42l-17.197 29.79c-3.446-1.657-6.983-3.158-10.596-4.5l14.144 40.683h-26.576v35.057c12.702 9.562 20.95 24.756 20.95 41.793 0 8.697-2.16 16.91-5.956 24.142l40.705 54.186 19.466-14.662 4.924 14.08 20.603 11.897c3.477-5.153 6.657-10.522 9.526-16.08l-29.35-16.945c6.967-13.842 11.447-29.152 12.86-45.348h33.862c.253-3.69.392-7.412.392-11.168 0-2.52-.066-5.026-.18-7.52h-33.82c-.98-16.423-5.11-31.993-11.796-46.112l29.45-17.002c-2.76-5.616-5.835-11.046-9.208-16.266l-29.48 17.02c-8.97-13.35-20.434-24.88-33.73-33.922l17.153-29.71c-5.178-3.438-10.566-6.585-16.144-9.41zm-145.38.313c-5.567 2.85-10.94 6.023-16.104 9.483l17.62 30.523c-12.89 9.09-23.988 20.545-32.67 33.737l-30.645-17.695c-3.362 5.228-6.422 10.667-9.167 16.29l30.73 17.74c-6.385 13.828-10.33 29.016-11.285 45.015H96.895c-.115 2.493-.182 4.998-.182 7.52 0 3.755.14 7.477.392 11.167h35.477c1.377 15.775 5.664 30.708 12.324 44.264l-30.613 17.674c2.855 5.565 6.028 10.938 9.492 16.1l30.592-17.663c8.745 12.622 19.743 23.56 32.418 32.236l-17.527 30.353c5.202 3.4 10.616 6.505 16.216 9.292l17.473-30.265c13.535 6.554 28.428 10.746 44.147 12.052v34.62c3.224.193 6.472.303 9.746.303 3 0 5.98-.09 8.94-.252v-34.497c6.595-.42 13.048-1.358 19.325-2.756l10.682-8.047-47.52-63.257c-24.326-4.454-42.908-25.862-42.908-51.428 0-16.593 7.833-31.43 19.976-41.026v-35.825h-26.63l14.196-40.31c-3.934 1.5-7.777 3.184-11.51 5.056l-17.554-30.405zm73.814 108.906c-18.67 0-33.605 14.935-33.605 33.605 0 18.67 14.936 33.603 33.605 33.603 18.67 0 33.604-14.934 33.604-33.603 0-18.67-14.934-33.604-33.604-33.604zm34.363 72.927c-5.978 5.234-13.142 9.14-21.03 11.233l50.952 67.828-14.578 10.984 79.74 56.525-32.137-91.902-13.975 10.525-48.973-65.193zm174.223 50.33c-14.203 33.102-36.037 62.167-63.27 84.998l9.7 27.733 83.15-83.15-29.58-29.58zM47.46 346.9l-29.585 29.586 119.84 119.84 29.603-29.603C113.616 443.69 70.508 400.593 47.46 346.9zm323.343 107.553c-7.848 4.552-15.992 8.65-24.395 12.254l29.58 29.58 22.33-22.33-27.515-19.504z",
              },
            },
          ],
        })(e);
      }
      function B(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M119.1 25v.1c-25 3.2-47.1 32-47.1 68.8 0 20.4 7.1 38.4 17.5 50.9L99.7 157 84 159.9c-13.7 2.6-23.8 9.9-32.2 21.5-8.5 11.5-14.9 27.5-19.4 45.8-8.2 33.6-9.9 74.7-10.1 110.5h44l11.9 158.4h96.3L185 337.7h41.9c0-36.2-.3-77.8-7.8-111.7-4-18.5-10.2-34.4-18.7-45.9-8.6-11.4-19.2-18.7-34.5-21l-16-2.5L160 144c10-12.5 16.7-30.2 16.7-50.1 0-39.2-24.8-68.8-52.4-68.8-2.9 0-4.7-.1-5.2-.1zM440 33c-17.2 0-31 13.77-31 31s13.8 31 31 31 31-13.77 31-31-13.8-31-31-31zM311 55v48H208v18h103v158h-55v18h55v110H208v18h103v32h80.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V297h62.8c-.5-2.9-.8-5.9-.8-9 0-3.1.3-6.1.8-9H329V73h62.8c-.5-2.92-.8-5.93-.8-9 0-3.07.3-6.08.8-9H311zm129 202c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31zm0 160c-17.2 0-31 13.8-31 31s13.8 31 31 31 31-13.8 31-31-13.8-31-31-31z",
              },
            },
          ],
        })(e);
      }
      var O = function () {
          var e = L((0, t.useState)("#home"), 2),
            n = e[0],
            r = e[1];
          return (0, a.jsxs)("nav", {
            className: "navicons",
            children: [
              (0, a.jsx)("a", {
                href: "#about",
                onClick: function () {
                  return r("#about");
                },
                className: "#about" === n ? "active" : "",
                children: (0, a.jsx)(w, {}),
              }),
              (0, a.jsx)("a", {
                href: "#skills",
                onClick: function () {
                  return r("#skills");
                },
                className: "#skills" === n ? "active" : "",
                children: (0, a.jsx)(B, {}),
              }),
              (0, a.jsx)("a", {
                href: "#experience",
                onClick: function () {
                  return r("#experience");
                },
                className: "#experience" === n ? "active" : "",
                children: (0, a.jsx)(x, {}),
              }),
              (0, a.jsx)("a", {
                href: "#projects",
                onClick: function () {
                  return r("#projects");
                },
                className: "#projects" === n ? "active" : "",
                children: (0, a.jsx)(D, {}),
              }),
              (0, a.jsx)("a", {
                href: "#achievements",
                onClick: function () {
                  return r("#achievements");
                },
                className: "#achievements" === n ? "active" : "",
                children: (0, a.jsx)(P, {}),
              }),
              (0, a.jsx)("a", {
                href: "#contact",
                onClick: function () {
                  return r("#contact");
                },
                className: "#contact" === n ? "active" : "",
                children: (0, a.jsx)(T, {}),
              }),
            ],
          });
        },
        _ = n.p + "static/media/Ankur.9bdb62ad744cbf812c9c.png",
        F = function () {
          return (0, a.jsxs)("section", {
            id: "about",
            children: [
              (0, a.jsx)("h2", { children: "Who Am I" }),
              (0, a.jsxs)("div", {
                className: "container about_container",
                children: [
                  (0, a.jsx)("div", {
                    className: "about_me",
                    children: (0, a.jsx)("div", {
                      className: "about_me-img",
                      children: (0, a.jsx)("img", {
                        src: _,
                        alt: "Ankur Sarkar",
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "about_content",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "about_cards",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "about_card",
                            children: [
                              (0, a.jsx)(x, { className: "about_icon" }),
                              (0, a.jsx)("h5", { children: "Experience" }),
                              (0, a.jsx)("small", {
                                children: "2+ Years of Experience",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "about_card",
                            children: [
                              (0, a.jsx)(D, { className: "about_icon" }),
                              (0, a.jsx)("h5", { children: "Projects" }),
                              (0, a.jsx)("small", {
                                children: "20+ Projects Completed",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("p", {
                        children:
                          "Hello World! Currently I'm a Sophomore pursuing my B.Tech in Electronics and Communications Engineering from JIS College Of Engineering. I'm quite Interested in Coding and Stuff. I have always believed that Real Life Projects are the best way to sculpt out a Skilled and Dedicated Proffesional out of a Student. This is also one of the Reasons I'm Eager to Work with the IT Companies to get an Oppurtunity of Exploring new Challenges and Enrich my Problem Solving Skills",
                      }),
                      (0, a.jsx)("div", {
                        className: "details about_me",
                        children: (0, a.jsx)("a", {
                          href: "#contact",
                          className: "btn btn-primary contact-btn",
                          children: "Contact Me",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function R(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z",
              },
            },
          ],
        })(e);
      }
      function Q(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
            {
              tag: "path",
              attr: {
                d: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z",
              },
            },
          ],
        })(e);
      }
      var G = function () {
          return (0, a.jsxs)("section", {
            id: "experience",
            children: [
              (0, a.jsx)("h2", { children: " My Work Experience " }),
              (0, a.jsx)("div", {
                className: "container experience_container",
                children: (0, a.jsx)("div", {
                  className: "experience_tabs",
                  children: (0, a.jsx)("div", {
                    className: "experience_button button__flex",
                    children: (0, a.jsx)("div", {
                      className: "experience_section",
                      children: (0, a.jsxs)("div", {
                        className: "experience_content",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children: " Cyber Security Engage Mentee ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children: " MicroSoft ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "May 2022 - Present",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_line",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsx)("div", {}),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_line",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children: " SDE Intern ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children: " Nubivagant Technologies ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "Jan 2022 - April 2022",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children:
                                      " Cyber Security Research Intern ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children:
                                      " Society for Innovation in Scientific Technological and Medical Research (SISTMR) Australia ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "Feb 2022 - March 2022",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_line",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsx)("div", {}),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_line",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children: " Graphics Designer Intern ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children: " Samagra Foundation ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "Dec 2021 - Jan 2022",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children: " Social Media Manager Intern ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children: " Devtown ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "July 2021 - Oct 2021",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_line",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsx)("div", {}),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_line",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children: " Business Development Intern ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children: " Devtown ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "March 2021 - Oct 2022",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "experience_data",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "exp_container",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className: "experience_title",
                                    children: " Ninja Entrepreneur ",
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "experience_subtitle",
                                    children: " Coding Ninjas ",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "experience_calendar",
                                    children: [
                                      (0, a.jsxs)("i", {
                                        className: "uil uil-calendar-alt",
                                        children: [" ", (0, a.jsx)(R, {}), " "],
                                      }),
                                      "Dec 2021 - Present",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "experience_rounder",
                                  }),
                                  (0, a.jsx)("span", {}),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        W = function () {
          return (0, a.jsxs)("section", {
            id: "skills",
            children: [
              (0, a.jsx)("h2", { children: "Skills I have" }),
              (0, a.jsxs)("div", {
                className: "container skills_container",
                children: [
                  (0, a.jsxs)("div", {
                    className: "development",
                    children: [
                      (0, a.jsx)("h3", { children: "Development" }),
                      (0, a.jsxs)("div", {
                        className: "skills_content",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "HTML 5" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "CSS 3" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "InterMediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "JavaScript " }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "InterMediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "React JS" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Flutter" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "BootStrap" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Intermediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", {
                                    children: "Tailwind CSS",
                                  }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Intermediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "languages",
                    children: [
                      (0, a.jsx)("h3", { children: "Programming Languages" }),
                      (0, a.jsxs)("div", {
                        className: "skills_content",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "C Language" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Experienced",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "C++" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "InterMediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Python" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "InterMediate",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Java" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Dart" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "web3",
                    children: [
                      (0, a.jsx)("h3", { children: "WEB 3.0" }),
                      (0, a.jsxs)("div", {
                        className: "skills_content",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "BlockChain" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Solidity" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Solana" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", {
                                    children: "Near Protocol",
                                  }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "Etherium" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "database",
                    children: [
                      (0, a.jsx)("h3", { children: "DataBase" }),
                      (0, a.jsxs)("div", {
                        className: "skills_content",
                        children: [
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "MySQL" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "MongoDB" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("article", {
                            className: "skills_details",
                            children: [
                              (0, a.jsx)(k, {
                                className: "skills_details-icon",
                              }),
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h4", { children: "FireBase" }),
                                  (0, a.jsx)("small", {
                                    className: "text-light",
                                    children: "Beginner",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        V = { _origin: "https://api.emailjs.com" },
        U = function (e, t, n) {
          if (!e)
            throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!n)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
          return !0;
        };
      function H(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function Z(e, t, n) {
        return (
          t && H(e.prototype, t),
          n && H(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function Y(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      var K = Z(function e(t) {
          Y(this, e), (this.status = t.status), (this.text = t.responseText);
        }),
        J = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return new Promise(function (r, a) {
            var i = new XMLHttpRequest();
            i.addEventListener("load", function (e) {
              var t = e.target,
                n = new K(t);
              200 === n.status || "OK" === n.text ? r(n) : a(n);
            }),
              i.addEventListener("error", function (e) {
                var t = e.target;
                a(new K(t));
              }),
              i.open("POST", V._origin + e, !0),
              Object.keys(n).forEach(function (e) {
                i.setRequestHeader(e, n[e]);
              }),
              i.send(t);
          });
        },
        X = function (e, t, n, r) {
          var a = r || V._userID,
            i = (function (e) {
              var t;
              if (
                !(t = "string" === typeof e ? document.querySelector(e) : e) ||
                "FORM" !== t.nodeName
              )
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
              return t;
            })(n);
          U(a, e, t);
          var l = new FormData(i);
          return (
            l.append("lib_version", "3.2.0"),
            l.append("service_id", e),
            l.append("template_id", t),
            l.append("user_id", a),
            J("/api/v1.0/email/send-form", l)
          );
        },
        q = function () {
          var e = (0, t.useRef)();
          return (0, a.jsxs)("section", {
            id: "contact",
            children: [
              (0, a.jsx)("h2", { children: "Contact Me" }),
              (0, a.jsxs)("div", {
                className: "container contact_container",
                children: [
                  (0, a.jsxs)("div", {
                    className: "contact_options",
                    children: [
                      (0, a.jsxs)("article", {
                        className: "contact_option",
                        children: [
                          (0, a.jsx)(Q, { className: "contact_option-icon" }),
                          (0, a.jsx)("h4", { children: "Email" }),
                          (0, a.jsx)("h5", {
                            children: "sarkarrohonankur@gmail.com",
                          }),
                          (0, a.jsx)("a", {
                            href: "mailto:sarkarrohonankur@gmail.com",
                            target: "_blank",
                            children: "Send a Message",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("article", {
                        className: "contact_option",
                        children: [
                          (0, a.jsx)(A, { className: "contact_option-icon" }),
                          (0, a.jsx)("h4", { children: "Messenger" }),
                          (0, a.jsx)("h5", { children: "Ankur Sarkar" }),
                          (0, a.jsx)("a", {
                            href: "https://m.me/Ank.Sar.02",
                            target: "_blank",
                            children: "Text Me",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("article", {
                        className: "contact_option",
                        children: [
                          (0, a.jsx)(C, { className: "contact_option-icon" }),
                          (0, a.jsx)("h4", { children: "WhatsApp" }),
                          (0, a.jsx)("h5", { children: "+917449600707" }),
                          (0, a.jsx)("a", {
                            href: "https://wa.me/917449600707",
                            target: "_blank",
                            children: "Ping Me",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("article", {
                        className: "contact_option",
                        children: [
                          (0, a.jsx)(g, { className: "contact_option-icon" }),
                          (0, a.jsx)("h4", { children: "Twitter" }),
                          (0, a.jsx)("h5", { children: "Ankur02Sarkar" }),
                          (0, a.jsx)("a", {
                            href: "https://twitter.com/messages/compose?recipient_id=1112729513060982791&text=Hi",
                            target: "_blank",
                            children: "Send me a Hi",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("form", {
                    ref: e,
                    onSubmit: function (t) {
                      t.preventDefault(),
                        X(
                          "service_jffesja",
                          "template_dbsuloq",
                          e.current,
                          "cZyzbMBAD_2YKvLFO"
                        ).then(
                          function (e) {
                            console.log(e.text);
                          },
                          function (e) {
                            console.log(e.text);
                          }
                        ),
                        t.target.reset();
                    },
                    children: [
                      (0, a.jsx)("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Your Full Name",
                        required: !0,
                      }),
                      (0, a.jsx)("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Your Email",
                        required: !0,
                      }),
                      (0, a.jsx)("textarea", {
                        name: "message",
                        cols: "30",
                        rows: "7",
                        placeholder: "Your Message",
                        required: !0,
                      }),
                      (0, a.jsx)("div", {
                        className: "details about_me",
                        children: (0, a.jsx)("button", {
                          type: "submit",
                          className: "btn btn-primary",
                          children: "Send Message",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function $(e) {
        return f({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z",
              },
            },
          ],
        })(e);
      }
      var ee = function () {
          return (0, a.jsxs)("footer", {
            children: [
              (0, a.jsx)("div", {
                className: "footer_logo",
                children: "Ankur Sarkar",
              }),
              (0, a.jsxs)("div", {
                className: "footer_socials",
                children: [
                  (0, a.jsx)("a", {
                    href: "https://fb.com",
                    children: (0, a.jsx)(y, {}),
                  }),
                  (0, a.jsx)("a", {
                    href: "https://insta.com",
                    children: (0, a.jsx)(m, {}),
                  }),
                  (0, a.jsx)("a", {
                    href: "https://twitter.com",
                    children: (0, a.jsx)($, {}),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "footer_copyright",
                children: (0, a.jsx)("small", {
                  children: "\xa9 Ankur Sarkar 2022",
                }),
              }),
            ],
          });
        },
        te = n.p + "static/media/sof.d1d779c235a244146f73.jpg",
        ne =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcsAAAFxCAYAAAAcU4NUAAAZ70lEQVR42u3dz2ukW17H8SxS8YogLQqCKAQEQREN3iTcZTrVvRKl6L6zcVUuxVnEnbsuuUn3cmqngkqBYN87OEzBIA7dCV1/QoHgOruhb6tdQ1Ubb/pCrPNUpW93Oj+qUk89z3me5/WGz2qYmXuTqvPO95zv+Z6VFQAAACBPXt3b3Hk/L+9tt9LIxf9dP2kAQLQSfCev+nb3692t3tf1rf44ZzmnH/5Zwj/TRbn6zQEAUuXr+1sbL+vbjQsyPCtFJv8unUSm43/H8O/qNw4AuJLXOxt3zqvEIJBIqsP8qtKpRMPPJPxsfEIAoIIkW5K7m3tBCuOK8bjCYpwp059RJ/mZqUABoLxyTKrGMm2jRrCNe159+oQBQAFJzhrJMXN5qjwBIGLCudp4sW5OzxsH5JV7BsnvYvw7ceYJADnys53P1pNKRvVYhDPPbvhdhd+ZTy4AZCXIanerFr7bljgBIGWSax0EWWpx2qoFgFsSzruSQQCEUpmt2vA798kHgJsEeX9rQ5OO5qBx2rZpAeCSKtI2q1w6kk+1CaDKhMohVBCqSFFtAsAFklFzziLl9umYGgTAVquILVoAVZSkYeWy1CHvpAmgiJzfjSRJIU0AuITpm5CadoQ0AcB2q5AmAJCkkCYALEZo3/fihxTqvU1XTgBkRfLyh3uSUuAZtIYbAFgaocN12rxj0ZXCJ3yWvXYCIFWmAwV0uErpzjNf1rcbvuEAFpNkeAXEuaRU4DzT1iwAW64iM27N+vYDmInpoHNXQaSyW7O6ZgFcW01On8yyaIqMvwsagACoJkVUmQBUkyKqTACqSZFsx+bd39qwcgAVQqeriI5ZAFcQ7pKNv/B9i56Ie5kALqsm69sNU3hEUsvA9B+gZGjiEVle848VBrDtKiI3p69bFigoyXuTtl1FMtuWdScTKJoodzf3LF4iOVwxGX/3rEBA5EyHDHQsWiK5pmM1AuIWpfNJEeeYAC4jeXfS+aRIdOeYpv4AsYhyd6tJlCLuYwK4XpQWJJH4p/40rVhAHqLUyCNSqHzx/X/9BysXQJQickX+5vs/Ots9GJ3d3R91rGDAkkk6Xne3ehYfkeKJ8jz1g2F359FrnbLA0kTpaohIoUX5LvujPmECRClClFeJkjABohSRGURJmABRihDlaPYQJkCUIkRJmABRishioiRMgChFiJIwAaIUIcp0REmYAFGKECVhAkQpQpSECSwTI+xEiPKyhNF4VkhgxVB0EaK8PoavgyiJUoQoZ0vbiomqbr16uFmEKOdJ08qJSvGyvt2w+IgQ5dxnmI/fNKygqEZFeX9rY/zlG1iARIjyFhnsHIw2rKQoNdMrIkQpQpSLCdOVEpRclO5SihClO5jAlduvOl9FiNKVEuBqXu1u7lmARIhyCRXmnhUW5RDlvc0dC5AIUS4r974Y7lhpUWh+tvPZuoYeEaLU8ANcf06poUeEKDNp+LHioqiibFuERIjSSDzgCkzoESFKE34A55QiRBnr+eWTk3UrMeLffvU2pQhR5puelRhxb7/e225ZiESIMv8MW1ZkxFlRTgakW4xEiDKKGLiO6AhzX1/Vt48tRiJEGVGO3b9EXFWlayIiROk6CXA1xtmJEKVxeIDtV1kkoTt6nND8lTSA7W41wx9Y55nnj7LzhP+N9/73ejqwidJ2LGy/ShEymAqrfS7D8IdULn+8TWU6/WfpVfnOL1HajoXtV8k3/eR90iCl+1vRdxwmndoTgXaqMq+YKG3HwvarZJzp7zqRYx4VY9okU6a+k+eAKKuzHWv1RqYYPlCZ6rFdhMoxlcpz/O9ahj8AidKwAsT0VzmRlLmCbIffcWXP4QssTqKccViB2bHIZDHReVi+5pywHVmBCvKW5/KF2KolSrNjEZcom+RSoiqyJGeQWZzRJ12+kVabRHmrNH2ysbQFQ1NPKSTZned+Iy6pNiPaXSFKdy8RGZp6Cp9Olc8il3R23yFKzT7AxYWBcEgSkUiTKDX7IMatp/p2l3RIEnFIkyjTS/1g2PXpRXpnNMRTqFmsziTLe6ZJlCb7IFJcFSlOd+vL+nbDJzaa703q3bNE6SoJIv7CE1H8Cc1XroDER/idpNUYR5SukiDus0pXRWJ//sowgfj/6JxMBeoTpbmxUFVKxlN3Xu1u7vmUFuyPz/HvbN5pQESpuoSqUm454FyXazWqTKJUXUJVKbc8m/TpLAc3nWUSpeoSqkq5zbar6yDl+55NrmUNiFJ1CVWlpNDEo9O1vEyHtPeIUnUJVaXcPm2fyIr8kTr+XROl6hKqSpn3jcnx78InslqEimacAVmpLqGqlFlE6e5kZdk5GG0QpuoSqkq54VqI80mElzB290d9wlJdIk5ZmgFLlIhFmI9e3yFMM2MR2/arl0Vyf07LpxCXCfPu/qhDWl4kQSxVZc4vvhMlcDWEmV/Cz94nEAnTR2tJiyhBmHJJwhmyTyBW0npCKMo3Hv/4j87+589/911e/8XvnA1bvzVzfv7X6x/890OIEoRZtQxbPn1YmfcVhNhEOPir307E9uYHv3528k+/kuTtYW3pOf23T979/53LNfzz/Pef/T5RgjDLlYFPXtVFWZDrIkFCocobPfmNRE5BVFkIcZF886NfeifSUNG+J1GiBGG6RoKCyTK66yJBKqFaDJXi//3LL0cvxblzVOu9fb7W+vZwrXH2YsVVEcyNayWukSBDYmnsCXIMVeP//u2vFaJiTH0797B2PE7n9KjWJE8QpkYfxFZV1rfaeZ01hm3JUDmGrcqqyXGG9Mdpnz6rGXmH64UZJv0YjZdlPGxQUVlm1tjzXw/+MNlaDdUjGc6VQag6w5atTywuFaZZshp9sDxe1rcbWVSQQZClPHckTkTE9LUSMssg9cdvfP+qxKv6dndZkgxbrCrI5YvTVi0uCLNNZhnI8mDY9WmrCMnL7EvYZg3XOqrYoBPDGafmIEyF2SO0DBp9Hr32XavEWWWKdyvDNmtWQwBktm3akxefrPuUV/T8MnTIOr905xIpybK+1V/0LDJc9dDJGvddTmeb1SS8kkFmS87+qO+TVnIWuVsZtlrDNBpbrQW7w3lU81dw5bZjhy1Sc+cSC/Bqd3PvNpIMdyLJhzRRIGEaWLDs6nLPp8wWLEmSJop+fmlgga1YLHcLNpxJhs5WciFNFL663CM2W7FIeQs2SNKZZPWk+fb56o5vR5nPL10nsRWL+WR5zSCCcAVEd2u1u2ddOSnpduxkHB6xGVCAWbhqEEF48cM9SXkvbcMNylhd6o41oAAzcXEWrHNJuW64gTuaJasuJ8MKjsnNrFjcwFiQnfdnt9pyFVuz1SIs6uSWfu7ujzo+XeWS5SBUkwacy9wj9I5qmhhKsx2r2cezXbhalPe3NkI1efrTX/jG4i+qzApvx2r2Wc655fjn6tNVcEKzxulPfvGFBV9UmQiEbUOCS38rVqNPgQn355J7dBZ5STWrXR2zBa4uJ5N9SC79HKswCynKtZZFXZb6+LRhBqpLuSTDlk9YQbZdw/mSxVwyyfiPMt861aV8lJ5t2ci3XZO/+C3iknHzj21Z1aV83CVrWzZCQuOFhVtyHcz+rGZhUF3Kx2n6tEWy7TpeqDoWbImkW9bCUCDCbFMyM7igGueTh7W+RVpimy/r21kM7n0x3CGz7N6/dI6Zx7brs9qG80mJeFu24xyzGIRFnMxcL9HII5Jf+oRZAFkejJokpvGnjI08TYuwFEmYGn8ib/SZvEgyIDGNP0QpknfjD2FGjWskhFmerdfDWtuiK4SJpVSXBqzn2fhj3nJqFaWrIUKYWP7ZpcehXS0hShEzZXGtLMcVDnERJlGKRJRvD9cavuGRbcWa6EOYRCliSxYzVZfuXBImUYoQJmzFEmYp8A6lECZy24rVFetaSSEqSvcohTCRd3WpK5YwiVIk3ie+jMaLAwMKCDNeUU6Gols0xSxZwsyd+uM3DYIySzZWURqKLpJktUtXOZ9bTmbFkhRhxoP3KEUuf96LsnLvinWFxHuYEXW+HtV6FkeRS4R5VHNOk2+TT5ugokyvetuv7lKKXB9j8ZxbymVp63wVkQ+ulJy8+GSdunI4tzT6ToeszleRYnXIUlduW7EehNbwk19DT7hPZgEUmev80nt/+ciyR0pR57i0DT+hLd7iJ+LuZTFkOWwRUtypHwzLd9Uq/HVs4RMhygJVlk1CKsSVkvLsvDinFCHKonHvi+EOGTm/zPSc0uABEaIsaHVJRgUZWFCCc8pa2+InQpQ6YsX9y6tE+Xx1x+InQpQ6YiWLhK1z10REiBIZE7otSch1EtuvIkQJ10dsx+p+FSFKkGXVUpjuWN2vIkTp+ojojr2uqjR8QIQoyVIMK7ia8EJCeCnBQihClGQpuQ8riLXZxxuVIkRZJjzVVezc3R914jundKdShChL2eRDOu5epinLo1rPYihClGQpkaUXU1NP02IoQpRkKVE+5fX4TSOWs0qTekSIkiwl2sk+qkoRogRZys1p5vYhmj6/5aqICFGSpagur+6AXWtZFEWIkiylGBm2VJUiRAmylNgGFRhrJ0KUZCnOLnXAihAlyNLZpQ5YEaIEWaouVZUiRAmylDyqy28P1xoWSBGiJEsxM/a66yJmwIoQJVmKmbFXM32v0kIpREmUZCmFT3iCbTlV5WGtbaEsaI5qveS90edrraRBKzypNs7ps9rGR7/n6X+W/OfhilAYPjH57zurJsrKsnMw2ghbd9MHoZvhgnt4LzFUKMRT2LRT/6AYQlCojH9Pq90gustkuPDnIBHpRKBECXwn09390V79YNgNl9+JqBhDCtLvgHVdJOpMq7522nKcRZ6h6SupWokS+FCe48oldF6SUoWukWjsiVaSnVDpxbA4BJlM/6jqEyXwHWHrdrplS05lbvTR2BPhNuvztVbMC3hy3lmOapMokV61+ej1nXDWaZu2pI0+XhchyUX+0CqwNIkSpOk1kjnOK3VB5p+CSfKjz9Cz2kbBtvKJEllKk7CKPtEnWeTIKtcrH6E6K8viMJ0ANSBK4D1pPjlZdwUl563Yg9FizZHuVua35RqufpRxYZhcQ1rtEiXwIeHqia3Zgt65tAWbz4JdpmqyQFUmUSKOKnN/1CevAm3F2oLNJe0qLQzTTus+UQIXqszJHU0SK8JWrC3YjO9MHtWaVVwUkvuZ+XbMEiViFWaTxAqwFVvCy+Xxnk9mPHknRnL644woEfe27GQSkHPMLLI/6t92e4zIiDJTMh6rSJQgTFlsQIFZsERZcmESJQhTFp8VG3FrP1ESJlGCMGUpCa/GzHt+5Dkuosz3DHM5YxaJEoQp6Tzb5crIskfXxfFKSCEqzHS7ZIkSpWD6ADWx5X2FJEyOITXXQ6KpMNPpyiZKlArXSpbaFbs34+LkvHJZb0/6is/PZDzeQscCRIlS4o3MnM8tnVdqKomuuny+uuPnDnxI8mqJ0Xj5nFs6r1xSVamhJ43t2DZRAheEOWn4Ibiszy3dr1zOW5S+0ukwx2B/okRl8CZmDvctzYNNf/vVVznz7ViiRPWEaTs22zmxBXvN3jWRalaXHaIEPsR1ktTTu6myJLjUstr1FU6fa7pjiRKVJnRxklx6ufovds09qaYKDzjntx370XQfokTlSR6OJrnlN/lMX64nOncqi1ZdEiUwxd3LFO9bPn7TmPWvdVFVxl5dEiWgulxShq3LFx+Te1SVBasuiRJQXWY+ySelGZyiAxZAjuiMTW1GbP8qWRKde5UASoB7l0vqiJ02TJDd4q+K7PmaAohAlntkl0JH7KPXHx71LDCoWt6LMzQAMZAMWSe7hRO2tD/4wbo2kkKOaj1fUQDRVJcHox7hpXx9xLURW7AAbMXKDddHyNLdSgAl24p153IJsjRAfdG7lce+mgAi3Io9JrwUB6qTpUEEAMqHAQVk6bwSAG6qLJ1bpixLwjO1B0DpMM0n5cEEhLdYfCUBRFtdEh5Zau4BgBtlqcmHLA0jAIAbZGk4QRqyNBd20ax2fR0BxEp4aor0UpgPay7sos09ay1fRwDxVpbDFumlMB+WLMkSAFkKWZIlALIUsiRLACBLsiRLACBLsiRLACBLsiRLACBLsiRLACBLshSyBECWVZWlCT7esgRQXrxpmdIEn6S6JD2zYQGUtLI0G9Ygda+OAMBNsvTqCFl6zxIAbpAl6ZFlLE0+qzu+kgBiIzSnEF6asjyq9Uhvga3Yo9qeryWA6KrK/dEe4S2UHlnqiAVQcnTCkqUmHwC4qbLU3JOyLJ+vtUhvsZy8+GTdVxNALOw8OVknu0UzbJGlc0sAZa4qnVemL8tvD9cahLdoVru+ngBioX4w7JLdYqk/ftO4UFmaD5tGwuhAX1EAuW/BPnp9h+xSnAt7TjhvI7tUtmKbvqYAct+CPRg1yS6FubBPTtY/+uGSXSrp+5oCyF2W+6M+2aU8kOA9WfbJLoXq8lltw1cVQG5bsAejDaJLIeM/OK6Q5WqX7AwoAFBsDCJIqbnnYHh506brI+5cAih4Velu5fKujZwTmlOITnUJQFUpSZqXy/JZbYPoVJcAVJUyOgtnv1f+sElOdQlAVSmj698p1hHrnUsAxcO7lRl1wr7bih1XQyTn3iWAYuFeZboJVfr1stTks4Tqcq3lqwxgiaI0MD2r5p53stTkY1ABgMIwHUAwILcMm3vOGS/uA4JLfzvWkHUAtl8LkcFMP/y3R7UeuemOBRC5KA9GbWJbSnqzydIkH6+SAIhdlF4VyXpyz8ey9Lal80sAseKcMuM3LK8VpnPLZWZAmACIssDnld/J0gskhAkgKlE+en1nvJgfE1oOL41cxelRbY/QCBNARKLU+ZrF5J69uX4xYQg4mREmgEi2Xokym/uVT07W5/4FnR7WjsmMMAHkLEpnlFnl+Fa/pPEi3iayDIXpWgmA96g/ftMgykzTvtUvyui7XNK2RAAId/3IK8IRd7ZiI8pRrefhaKCi266TjtceeRVkC9ZWbP7bst8erjUsHYBtV4l4C9ZWrCoTQEbV5JOT9XC/j7AKugVrKzauNzG9WgKUj+nZpGqyyFuwtmLj25olTaAskkwGoZvGU4Yt2HMMKIgr3xyuDf/+J7/3jxs/bpAmUKTt1knzDkmWYRDBNdVln6jiyH/+9FfPdr7607PNLx+ebT192Nn64fcMNABiluRksEDbdmuU4+36qf6yw4V5oopLlBdy/OmXD9vECUQiyHG1EuaMGlMXfZqp/uLDOZlnu6IV5UfiTCrOpw+anz1trFu2gGzkOL360bbNWpznuMLWeOofhtPDWoe0ohflZRlsPn3QC5Xn5tPPW+PshBApML8Qw8PAIdMu1vZ0gIDt1QLm7v6os5QPikafQopSChgLmUhB7lZe2ehzVOsRGFEKWYoUPL2lbkOEEWwkRpRCliIae24+uzTRhyiFLEWqPbHHNRKiFLIUUVWmcXbpGglRClmKuC5ygyyfr7XIjSiFLEWKlWEr0/tGhhQQpZCliKpSdUmUQpYiqkrVJVEKWYqoKlWXRClkKSJ5VpXuXRKlkKVIUe5V5lpVundJlEKWIu5Vznfv0uPQRClkKVLux50XP7tc3SFDohSyFIkp4Tm16N56e3u42iVFohSyFIkh9YNhN8qHUafvXbpKQpRCliL5XxV5chLvA/eukhClkKWIqyKukhClkKWIJ7g0+xClkKWIpp6srpK0idKiL2QpknHaK0UizI2t4nYsUQpZilR8Uo/tWKIUshSx/Wo7liiFLEVsv9qOJUohSxHbr3FeJXlW2yBKEbIUWUZ2DkYbK2Xh9Ki2R5QiZClSueEDc59fHtV6RClCliIppbdSRsL5ZRlmxxKlkKVIBLNfy3BOWdbzS6IUshRxTcT5JVEKWYrE/qDz3kpVOD2sdYhShCxF5snd/VFnpWqMJdQnShGyFJmxouyX+pyyyAMLiFLIUkRDTywNPwOiFCFLkStFWabBA2UauE6UQpYicaT++E1jBe86ZJtEKUKWIhfSZMgIhUmUQpYiRtm5UkKUQpYirogQJlEKWYoQJWESpZClCFEiS2ESpZClCFESJlEKWYoQJWESpZClCFEidWESpZClCFGWeNLPWosohSxFSpM2s0U4uIAohSxFTOapmjAHRClkKVK8oehEmaUw53ithCiFLEW8HlJZTl58sn7TA9JEKWQpEsnDzU9O1pkrJ8ID0m8PV7tEKWQpEukTWwfDbqUfbo65U5YohSxFvByCS/j2cK1xelj7OVEKWYrkfz7p0eaIOfz33/yD3a/+5D8suEKWIs4ncQOffvmwbdEVshQxaAA3sPn0853xwjOw+ApZith2xTVs/LhxZ7z4dC3AQpYiS0tPt2tJ2Hr6oKnKFLIUSXkaz/5oj2FKxmdPG+ubTx/0LMZCliIpVJOaeEre/PPVw4YqU8hSxGxXzHCWufX0YcfCLGQpMvvbk84mK9wx++mXD/sWaCFLkavvTd77YrjDGNAAJGQpooEHM18zefp5izSFLEWGLVuuuLFr1nmmkKVU9lxSlytIU8hShCRBmkKWIiQJ0hSyFCFJaAQSsrSYy9IGCgxbJIlcrpy4pylkKbHfkwxTd3S3In9p/vB7G9MtWtWmkKVEUUWGrVbDBBDtFm0y4MDAdiFLUUUCszUEbX75YM82rZClLF2Q+6M9Z5EgTiFLEYJE1cQ5nUXbdcYpZCmznkHWD4bdZIuVIFFFwssnyVUU55xClnLhgeVw1UOTDnCdPCeV5zF5kKVUIseTypEcgVsxHYLwTqDOPclSin/e+L4YbasCSyTc7fxuC3e6jTvZynUOSpaS+6ScsIU62UZ9J8WD0YaVC4i3Ik0yuf95LlaJNdv//Jd/d77ASuwZNYMEz+NuY3n5fwG/rwDuHEq3AAAAAElFTkSuQmCC",
        re = n.p + "static/media/sparkar.c9470e4472c743ef90f2.png",
        ae = n.p + "static/media/codechef.f97258fe866cbf24e855.png";
      function ie(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return z(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          I(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function le(e) {
        return (
          null !== e &&
          "object" === typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function se() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object.keys(t).forEach(function (n) {
          "undefined" === typeof e[n]
            ? (e[n] = t[n])
            : le(t[n]) &&
              le(e[n]) &&
              Object.keys(t[n]).length > 0 &&
              se(e[n], t[n]);
        });
      }
      var oe = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
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
          search: "",
        },
      };
      function ue() {
        var e = "undefined" !== typeof document ? document : {};
        return se(e, oe), e;
      }
      var ce = {
        document: oe,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
        requestAnimationFrame: function (e) {
          return "undefined" === typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame: function (e) {
          "undefined" !== typeof setTimeout && clearTimeout(e);
        },
      };
      function de() {
        var e = "undefined" !== typeof window ? window : {};
        return se(e, ce), e;
      }
      function fe(e) {
        return (
          (fe =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          fe(e)
        );
      }
      function pe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function he(e, t) {
        if (t && ("object" === fe(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return pe(e);
      }
      function me(e, t) {
        return (
          (me =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          me(e, t)
        );
      }
      function ve(e) {
        return (
          (ve = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          ve(e)
        );
      }
      function ge() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function ye(e, t, n) {
        return (
          (ye = ge()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && me(a, n.prototype), a;
              }),
          ye.apply(null, arguments)
        );
      }
      function be(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (be = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return ye(e, arguments, ve(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              me(r, e)
            );
          }),
          be(e)
        );
      }
      var we = (function (e) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && me(e, t);
        })(n, e);
        var t = (function (e) {
          var t = ge();
          return function () {
            var n,
              r = ve(e);
            if (t) {
              var a = ve(this).constructor;
              n = Reflect.construct(r, arguments, a);
            } else n = r.apply(this, arguments);
            return he(this, n);
          };
        })(n);
        function n(e) {
          var r;
          return (
            Y(this, n),
            "number" === typeof e
              ? (r = t.call(this, e))
              : (function (e) {
                  var t = e.__proto__;
                  Object.defineProperty(e, "__proto__", {
                    get: function () {
                      return t;
                    },
                    set: function (e) {
                      t.__proto__ = e;
                    },
                  });
                })(pe((r = t.call.apply(t, [this].concat(ie(e || [])))))),
            he(r)
          );
        }
        return Z(n);
      })(be(Array));
      function xe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = [];
        return (
          e.forEach(function (e) {
            Array.isArray(e) ? t.push.apply(t, ie(xe(e))) : t.push(e);
          }),
          t
        );
      }
      function ke(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function Se(e, t) {
        var n = de(),
          r = ue(),
          a = [];
        if (!t && e instanceof we) return e;
        if (!e) return new we(a);
        if ("string" === typeof e) {
          var i = e.trim();
          if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
            var l = "div";
            0 === i.indexOf("<li") && (l = "ul"),
              0 === i.indexOf("<tr") && (l = "tbody"),
              (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) || (l = "tr"),
              0 === i.indexOf("<tbody") && (l = "table"),
              0 === i.indexOf("<option") && (l = "select");
            var s = r.createElement(l);
            s.innerHTML = i;
            for (var o = 0; o < s.childNodes.length; o += 1)
              a.push(s.childNodes[o]);
          } else
            a = (function (e, t) {
              if ("string" !== typeof e) return [e];
              for (
                var n = [], r = t.querySelectorAll(e), a = 0;
                a < r.length;
                a += 1
              )
                n.push(r[a]);
              return n;
            })(e.trim(), t || r);
        } else if (e.nodeType || e === n || e === r) a.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof we) return e;
          a = e;
        }
        return new we(
          (function (e) {
            for (var t = [], n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(a)
        );
      }
      Se.fn = we.prototype;
      var Ce = "resize scroll".split(" ");
      function Ee(e) {
        return function () {
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          if ("undefined" === typeof n[0]) {
            for (var a = 0; a < this.length; a += 1)
              Ce.indexOf(e) < 0 &&
                (e in this[a] ? this[a][e]() : Se(this[a]).trigger(e));
            return this;
          }
          return this.on.apply(this, [e].concat(n));
        };
      }
      Ee("click"),
        Ee("blur"),
        Ee("focus"),
        Ee("focusin"),
        Ee("focusout"),
        Ee("keyup"),
        Ee("keydown"),
        Ee("keypress"),
        Ee("submit"),
        Ee("change"),
        Ee("mousedown"),
        Ee("mousemove"),
        Ee("mouseup"),
        Ee("mouseenter"),
        Ee("mouseleave"),
        Ee("mouseout"),
        Ee("mouseover"),
        Ee("touchstart"),
        Ee("touchend"),
        Ee("touchmove"),
        Ee("resize"),
        Ee("scroll");
      var Ae = {
        addClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = xe(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).add.apply(t, ie(r));
            }),
            this
          );
        },
        removeClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = xe(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            this.forEach(function (e) {
              var t;
              (t = e.classList).remove.apply(t, ie(r));
            }),
            this
          );
        },
        hasClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = xe(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          return (
            ke(this, function (e) {
              return (
                r.filter(function (t) {
                  return e.classList.contains(t);
                }).length > 0
              );
            }).length > 0
          );
        },
        toggleClass: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = xe(
            t.map(function (e) {
              return e.split(" ");
            })
          );
          this.forEach(function (e) {
            r.forEach(function (t) {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" === typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (var n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (var r in e)
                (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
          return this;
        },
        removeAttr: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (var t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" !== typeof e ? "".concat(e, "ms") : e;
          return this;
        },
        on: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          function s(e) {
            var t = e.target;
            if (t) {
              var n = e.target.dom7EventData || [];
              if ((n.indexOf(e) < 0 && n.unshift(e), Se(t).is(a)))
                i.apply(t, n);
              else
                for (var r = Se(t).parents(), l = 0; l < r.length; l += 1)
                  Se(r[l]).is(a) && i.apply(r[l], n);
            }
          }
          function o(e) {
            var t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (l = t[2]), (a = void 0)),
            l || (l = !1);
          for (var u, c = r.split(" "), d = 0; d < this.length; d += 1) {
            var f = this[d];
            if (a)
              for (u = 0; u < c.length; u += 1) {
                var p = c[u];
                f.dom7LiveListeners || (f.dom7LiveListeners = {}),
                  f.dom7LiveListeners[p] || (f.dom7LiveListeners[p] = []),
                  f.dom7LiveListeners[p].push({
                    listener: i,
                    proxyListener: s,
                  }),
                  f.addEventListener(p, s, l);
              }
            else
              for (u = 0; u < c.length; u += 1) {
                var h = c[u];
                f.dom7Listeners || (f.dom7Listeners = {}),
                  f.dom7Listeners[h] || (f.dom7Listeners[h] = []),
                  f.dom7Listeners[h].push({ listener: i, proxyListener: o }),
                  f.addEventListener(h, o, l);
              }
          }
          return this;
        },
        off: function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3];
          "function" === typeof t[1] &&
            ((r = t[0]), (i = t[1]), (l = t[2]), (a = void 0)),
            l || (l = !1);
          for (var s = r.split(" "), o = 0; o < s.length; o += 1)
            for (var u = s[o], c = 0; c < this.length; c += 1) {
              var d = this[c],
                f = void 0;
              if (
                (!a && d.dom7Listeners
                  ? (f = d.dom7Listeners[u])
                  : a && d.dom7LiveListeners && (f = d.dom7LiveListeners[u]),
                f && f.length)
              )
                for (var p = f.length - 1; p >= 0; p -= 1) {
                  var h = f[p];
                  (i && h.listener === i) ||
                  (i &&
                    h.listener &&
                    h.listener.dom7proxy &&
                    h.listener.dom7proxy === i)
                    ? (d.removeEventListener(u, h.proxyListener, l),
                      f.splice(p, 1))
                    : i ||
                      (d.removeEventListener(u, h.proxyListener, l),
                      f.splice(p, 1));
                }
            }
          return this;
        },
        trigger: function () {
          for (
            var e = de(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var a = n[0].split(" "), i = n[1], l = 0; l < a.length; l += 1)
            for (var s = a[l], o = 0; o < this.length; o += 1) {
              var u = this[o];
              if (e.CustomEvent) {
                var c = new e.CustomEvent(s, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (u.dom7EventData = n.filter(function (e, t) {
                  return t > 0;
                })),
                  u.dispatchEvent(c),
                  (u.dom7EventData = []),
                  delete u.dom7EventData;
              }
            }
          return this;
        },
        transitionEnd: function (e) {
          var t = this;
          return (
            e &&
              t.on("transitionend", function n(r) {
                r.target === this &&
                  (e.call(this, r), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(t.getPropertyValue("margin-right")) +
                parseFloat(t.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              var t = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(t.getPropertyValue("margin-top")) +
                parseFloat(t.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          var e = de();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            var e = de(),
              t = ue(),
              n = this[0],
              r = n.getBoundingClientRect(),
              a = t.body,
              i = n.clientTop || a.clientTop || 0,
              l = n.clientLeft || a.clientLeft || 0,
              s = n === e ? e.scrollY : n.scrollTop,
              o = n === e ? e.scrollX : n.scrollLeft;
            return { top: r.top + s - i, left: r.left + o - l };
          }
          return null;
        },
        css: function (e, t) {
          var n,
            r = de();
          if (1 === arguments.length) {
            if ("string" !== typeof e) {
              for (n = 0; n < this.length; n += 1)
                for (var a in e) this[n].style[a] = e[a];
              return this;
            }
            if (this[0])
              return r.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" === typeof e) {
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach(function (t, n) {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].innerHTML : null;
          for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if ("undefined" === typeof e)
            return this[0] ? this[0].textContent.trim() : null;
          for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          var t,
            n,
            r = de(),
            a = ue(),
            i = this[0];
          if (!i || "undefined" === typeof e) return !1;
          if ("string" === typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (t = Se(e), n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          if (e === a) return i === a;
          if (e === r) return i === r;
          if (e.nodeType || e instanceof we) {
            for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
              if (t[n] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if ("undefined" === typeof e) return this;
          var t = this.length;
          if (e > t - 1) return Se([]);
          if (e < 0) {
            var n = t + e;
            return Se(n < 0 ? [] : [this[n]]);
          }
          return Se([this[e]]);
        },
        append: function () {
          for (var e, t = ue(), n = 0; n < arguments.length; n += 1) {
            e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
            for (var r = 0; r < this.length; r += 1)
              if ("string" === typeof e) {
                var a = t.createElement("div");
                for (a.innerHTML = e; a.firstChild; )
                  this[r].appendChild(a.firstChild);
              } else if (e instanceof we)
                for (var i = 0; i < e.length; i += 1) this[r].appendChild(e[i]);
              else this[r].appendChild(e);
          }
          return this;
        },
        prepend: function (e) {
          var t,
            n,
            r = ue();
          for (t = 0; t < this.length; t += 1)
            if ("string" === typeof e) {
              var a = r.createElement("div");
              for (a.innerHTML = e, n = a.childNodes.length - 1; n >= 0; n -= 1)
                this[t].insertBefore(a.childNodes[n], this[t].childNodes[0]);
            } else if (e instanceof we)
              for (n = 0; n < e.length; n += 1)
                this[t].insertBefore(e[n], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                Se(this[0].nextElementSibling).is(e)
                ? Se([this[0].nextElementSibling])
                : Se([])
              : this[0].nextElementSibling
              ? Se([this[0].nextElementSibling])
              : Se([])
            : Se([]);
        },
        nextAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return Se([]);
          for (; n.nextElementSibling; ) {
            var r = n.nextElementSibling;
            e ? Se(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Se(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            var t = this[0];
            return e
              ? t.previousElementSibling && Se(t.previousElementSibling).is(e)
                ? Se([t.previousElementSibling])
                : Se([])
              : t.previousElementSibling
              ? Se([t.previousElementSibling])
              : Se([]);
          }
          return Se([]);
        },
        prevAll: function (e) {
          var t = [],
            n = this[0];
          if (!n) return Se([]);
          for (; n.previousElementSibling; ) {
            var r = n.previousElementSibling;
            e ? Se(r).is(e) && t.push(r) : t.push(r), (n = r);
          }
          return Se(t);
        },
        parent: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? Se(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return Se(t);
        },
        parents: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].parentNode; r; )
              e ? Se(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
          return Se(t);
        },
        closest: function (e) {
          var t = this;
          return "undefined" === typeof e
            ? Se([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (
              var r = this[n].querySelectorAll(e), a = 0;
              a < r.length;
              a += 1
            )
              t.push(r[a]);
          return Se(t);
        },
        children: function (e) {
          for (var t = [], n = 0; n < this.length; n += 1)
            for (var r = this[n].children, a = 0; a < r.length; a += 1)
              (e && !Se(r[a]).is(e)) || t.push(r[a]);
          return Se(t);
        },
        filter: function (e) {
          return Se(ke(this, e));
        },
        remove: function () {
          for (var e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(Ae).forEach(function (e) {
        Object.defineProperty(Se.fn, e, { value: Ae[e], writable: !0 });
      });
      var Te,
        Ne,
        Me,
        je = Se;
      function ze(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Ie(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function Le() {
        return Date.now();
      }
      function Pe(e, t) {
        void 0 === t && (t = "x");
        var n,
          r,
          a,
          i = de(),
          l = (function (e) {
            var t,
              n = de();
            return (
              n.getComputedStyle && (t = n.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          i.WebKitCSSMatrix
            ? ((r = l.transform || l.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (a = new i.WebKitCSSMatrix("none" === r ? "" : r)))
            : (n = (a =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m41
              : 16 === n.length
              ? parseFloat(n[12])
              : parseFloat(n[4])),
          "y" === t &&
            (r = i.WebKitCSSMatrix
              ? a.m42
              : 16 === n.length
              ? parseFloat(n[13])
              : parseFloat(n[5])),
          r || 0
        );
      }
      function De(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function Be(e) {
        return "undefined" !== typeof window &&
          "undefined" !== typeof window.HTMLElement
          ? e instanceof HTMLElement
          : e && (1 === e.nodeType || 11 === e.nodeType);
      }
      function Oe() {
        for (
          var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
            t = ["__proto__", "constructor", "prototype"],
            n = 1;
          n < arguments.length;
          n += 1
        ) {
          var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
          if (void 0 !== r && null !== r && !Be(r))
            for (
              var a = Object.keys(Object(r)).filter(function (e) {
                  return t.indexOf(e) < 0;
                }),
                i = 0,
                l = a.length;
              i < l;
              i += 1
            ) {
              var s = a[i],
                o = Object.getOwnPropertyDescriptor(r, s);
              void 0 !== o &&
                o.enumerable &&
                (De(e[s]) && De(r[s])
                  ? r[s].__swiper__
                    ? (e[s] = r[s])
                    : Oe(e[s], r[s])
                  : !De(e[s]) && De(r[s])
                  ? ((e[s] = {}),
                    r[s].__swiper__ ? (e[s] = r[s]) : Oe(e[s], r[s]))
                  : (e[s] = r[s]));
            }
        }
        return e;
      }
      function _e(e, t, n) {
        e.style.setProperty(t, n);
      }
      function Fe(e) {
        var t,
          n = e.swiper,
          r = e.targetPosition,
          a = e.side,
          i = de(),
          l = -n.translate,
          s = null,
          o = n.params.speed;
        (n.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(n.cssModeFrameID);
        var u = r > l ? "next" : "prev",
          c = function (e, t) {
            return ("next" === u && e >= t) || ("prev" === u && e <= t);
          };
        !(function e() {
          (t = new Date().getTime()), null === s && (s = t);
          var u = Math.max(Math.min((t - s) / o, 1), 0),
            d = 0.5 - Math.cos(u * Math.PI) / 2,
            f = l + d * (r - l);
          if ((c(f, r) && (f = r), n.wrapperEl.scrollTo(ze({}, a, f)), c(f, r)))
            return (
              (n.wrapperEl.style.overflow = "hidden"),
              (n.wrapperEl.style.scrollSnapType = ""),
              setTimeout(function () {
                (n.wrapperEl.style.overflow = ""),
                  n.wrapperEl.scrollTo(ze({}, a, f));
              }),
              void i.cancelAnimationFrame(n.cssModeFrameID)
            );
          n.cssModeFrameID = i.requestAnimationFrame(e);
        })();
      }
      function Re() {
        return (
          Te ||
            (Te = (function () {
              var e = de(),
                t = ue();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  var t = !1;
                  try {
                    var n = Object.defineProperty({}, "passive", {
                      get: function () {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (r) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          Te
        );
      }
      function Qe(e) {
        return (
          void 0 === e && (e = {}),
          Ne ||
            (Ne = (function (e) {
              var t = (void 0 === e ? {} : e).userAgent,
                n = Re(),
                r = de(),
                a = r.navigator.platform,
                i = t || r.navigator.userAgent,
                l = { ios: !1, android: !1 },
                s = r.screen.width,
                o = r.screen.height,
                u = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                c = i.match(/(iPad).*OS\s([\d_]+)/),
                d = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                p = "Win32" === a,
                h = "MacIntel" === a;
              return (
                !c &&
                  h &&
                  n.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf("".concat(s, "x").concat(o)) >= 0 &&
                  ((c = i.match(/(Version)\/([\d.]+)/)) ||
                    (c = [0, 1, "13_0_0"]),
                  (h = !1)),
                u && !p && ((l.os = "android"), (l.android = !0)),
                (c || f || d) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          Ne
        );
      }
      function Ge() {
        return (
          Me ||
            (Me = (function () {
              var e = de();
              return {
                isSafari: (function () {
                  var t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          Me
        );
      }
      var We = {
        on: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          var a = n ? "unshift" : "push";
          return (
            e.split(" ").forEach(function (e) {
              r.eventsListeners[e] || (r.eventsListeners[e] = []),
                r.eventsListeners[e][a](t);
            }),
            r
          );
        },
        once: function (e, t, n) {
          var r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" !== typeof t) return r;
          function a() {
            r.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++)
              i[l] = arguments[l];
            t.apply(r, i);
          }
          return (a.__emitterProxy = t), r.on(e, a, n);
        },
        onAny: function (e, t) {
          var n = this;
          if (!n.eventsListeners || n.destroyed) return n;
          if ("function" !== typeof e) return n;
          var r = t ? "unshift" : "push";
          return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
          );
        },
        offAny: function (e) {
          var t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          var n = t.eventsAnyListeners.indexOf(e);
          return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
        },
        off: function (e, t) {
          var n = this;
          return !n.eventsListeners || n.destroyed
            ? n
            : n.eventsListeners
            ? (e.split(" ").forEach(function (e) {
                "undefined" === typeof t
                  ? (n.eventsListeners[e] = [])
                  : n.eventsListeners[e] &&
                    n.eventsListeners[e].forEach(function (r, a) {
                      (r === t ||
                        (r.__emitterProxy && r.__emitterProxy === t)) &&
                        n.eventsListeners[e].splice(a, 1);
                    });
              }),
              n)
            : n;
        },
        emit: function () {
          var e,
            t,
            n,
            r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if (!r.eventsListeners) return r;
          for (var a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          "string" === typeof i[0] || Array.isArray(i[0])
            ? ((e = i[0]), (t = i.slice(1, i.length)), (n = r))
            : ((e = i[0].events), (t = i[0].data), (n = i[0].context || r)),
            t.unshift(n);
          var s = Array.isArray(e) ? e : e.split(" ");
          return (
            s.forEach(function (e) {
              r.eventsAnyListeners &&
                r.eventsAnyListeners.length &&
                r.eventsAnyListeners.forEach(function (r) {
                  r.apply(n, [e].concat(ie(t)));
                }),
                r.eventsListeners &&
                  r.eventsListeners[e] &&
                  r.eventsListeners[e].forEach(function (e) {
                    e.apply(n, t);
                  });
            }),
            r
          );
        },
      };
      var Ve = {
        updateSize: function () {
          var e,
            t,
            n = this,
            r = n.$el;
          (e =
            "undefined" !== typeof n.params.width && null !== n.params.width
              ? n.params.width
              : r[0].clientWidth),
            (t =
              "undefined" !== typeof n.params.height && null !== n.params.height
                ? n.params.height
                : r[0].clientHeight),
            (0 === e && n.isHorizontal()) ||
              (0 === t && n.isVertical()) ||
              ((e =
                e -
                parseInt(r.css("padding-left") || 0, 10) -
                parseInt(r.css("padding-right") || 0, 10)),
              (t =
                t -
                parseInt(r.css("padding-top") || 0, 10) -
                parseInt(r.css("padding-bottom") || 0, 10)),
              Number.isNaN(e) && (e = 0),
              Number.isNaN(t) && (t = 0),
              Object.assign(n, {
                width: e,
                height: t,
                size: n.isHorizontal() ? e : t,
              }));
        },
        updateSlides: function () {
          var e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function n(e, n) {
            return parseFloat(e.getPropertyValue(t(n)) || 0);
          }
          var r = e.params,
            a = e.$wrapperEl,
            i = e.size,
            l = e.rtlTranslate,
            s = e.wrongRTL,
            o = e.virtual && r.virtual.enabled,
            u = o ? e.virtual.slides.length : e.slides.length,
            c = a.children(".".concat(e.params.slideClass)),
            d = o ? e.virtual.slides.length : c.length,
            f = [],
            p = [],
            h = [],
            m = r.slidesOffsetBefore;
          "function" === typeof m && (m = r.slidesOffsetBefore.call(e));
          var v = r.slidesOffsetAfter;
          "function" === typeof v && (v = r.slidesOffsetAfter.call(e));
          var g = e.snapGrid.length,
            y = e.slidesGrid.length,
            b = r.spaceBetween,
            w = -m,
            x = 0,
            k = 0;
          if ("undefined" !== typeof i) {
            "string" === typeof b &&
              b.indexOf("%") >= 0 &&
              (b = (parseFloat(b.replace("%", "")) / 100) * i),
              (e.virtualSize = -b),
              l
                ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              r.centeredSlides &&
                r.cssMode &&
                (_e(e.wrapperEl, "--swiper-centered-offset-before", ""),
                _e(e.wrapperEl, "--swiper-centered-offset-after", ""));
            var S,
              C = r.grid && r.grid.rows > 1 && e.grid;
            C && e.grid.initSlides(d);
            for (
              var E =
                  "auto" === r.slidesPerView &&
                  r.breakpoints &&
                  Object.keys(r.breakpoints).filter(function (e) {
                    return (
                      "undefined" !== typeof r.breakpoints[e].slidesPerView
                    );
                  }).length > 0,
                A = 0;
              A < d;
              A += 1
            ) {
              S = 0;
              var T = c.eq(A);
              if (
                (C && e.grid.updateSlide(A, T, d, t),
                "none" !== T.css("display"))
              ) {
                if ("auto" === r.slidesPerView) {
                  E && (c[A].style[t("width")] = "");
                  var N = getComputedStyle(T[0]),
                    M = T[0].style.transform,
                    j = T[0].style.webkitTransform;
                  if (
                    (M && (T[0].style.transform = "none"),
                    j && (T[0].style.webkitTransform = "none"),
                    r.roundLengths)
                  )
                    S = e.isHorizontal() ? T.outerWidth(!0) : T.outerHeight(!0);
                  else {
                    var z = n(N, "width"),
                      I = n(N, "padding-left"),
                      L = n(N, "padding-right"),
                      P = n(N, "margin-left"),
                      D = n(N, "margin-right"),
                      B = N.getPropertyValue("box-sizing");
                    if (B && "border-box" === B) S = z + P + D;
                    else {
                      var O = T[0],
                        _ = O.clientWidth;
                      S = z + I + L + P + D + (O.offsetWidth - _);
                    }
                  }
                  M && (T[0].style.transform = M),
                    j && (T[0].style.webkitTransform = j),
                    r.roundLengths && (S = Math.floor(S));
                } else
                  (S = (i - (r.slidesPerView - 1) * b) / r.slidesPerView),
                    r.roundLengths && (S = Math.floor(S)),
                    c[A] && (c[A].style[t("width")] = "".concat(S, "px"));
                c[A] && (c[A].swiperSlideSize = S),
                  h.push(S),
                  r.centeredSlides
                    ? ((w = w + S / 2 + x / 2 + b),
                      0 === x && 0 !== A && (w = w - i / 2 - b),
                      0 === A && (w = w - i / 2 - b),
                      Math.abs(w) < 0.001 && (w = 0),
                      r.roundLengths && (w = Math.floor(w)),
                      k % r.slidesPerGroup === 0 && f.push(w),
                      p.push(w))
                    : (r.roundLengths && (w = Math.floor(w)),
                      (k - Math.min(e.params.slidesPerGroupSkip, k)) %
                        e.params.slidesPerGroup ===
                        0 && f.push(w),
                      p.push(w),
                      (w = w + S + b)),
                  (e.virtualSize += S + b),
                  (x = S),
                  (k += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, i) + v),
              l &&
                s &&
                ("slide" === r.effect || "coverflow" === r.effect) &&
                a.css({
                  width: "".concat(e.virtualSize + r.spaceBetween, "px"),
                }),
              r.setWrapperSize &&
                a.css(
                  ze(
                    {},
                    t("width"),
                    "".concat(e.virtualSize + r.spaceBetween, "px")
                  )
                ),
              C && e.grid.updateWrapperSize(S, f, t),
              !r.centeredSlides)
            ) {
              for (var F = [], R = 0; R < f.length; R += 1) {
                var Q = f[R];
                r.roundLengths && (Q = Math.floor(Q)),
                  f[R] <= e.virtualSize - i && F.push(Q);
              }
              (f = F),
                Math.floor(e.virtualSize - i) - Math.floor(f[f.length - 1]) >
                  1 && f.push(e.virtualSize - i);
            }
            if ((0 === f.length && (f = [0]), 0 !== r.spaceBetween)) {
              var G = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
              c.filter(function (e, t) {
                return !r.cssMode || t !== c.length - 1;
              }).css(ze({}, G, "".concat(b, "px")));
            }
            if (r.centeredSlides && r.centeredSlidesBounds) {
              var W = 0;
              h.forEach(function (e) {
                W += e + (r.spaceBetween ? r.spaceBetween : 0);
              });
              var V = (W -= r.spaceBetween) - i;
              f = f.map(function (e) {
                return e < 0 ? -m : e > V ? V + v : e;
              });
            }
            if (r.centerInsufficientSlides) {
              var U = 0;
              if (
                (h.forEach(function (e) {
                  U += e + (r.spaceBetween ? r.spaceBetween : 0);
                }),
                (U -= r.spaceBetween) < i)
              ) {
                var H = (i - U) / 2;
                f.forEach(function (e, t) {
                  f[t] = e - H;
                }),
                  p.forEach(function (e, t) {
                    p[t] = e + H;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: c,
                snapGrid: f,
                slidesGrid: p,
                slidesSizesGrid: h,
              }),
              r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
            ) {
              _e(
                e.wrapperEl,
                "--swiper-centered-offset-before",
                "".concat(-f[0], "px")
              ),
                _e(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  "".concat(e.size / 2 - h[h.length - 1] / 2, "px")
                );
              var Z = -e.snapGrid[0],
                Y = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map(function (e) {
                return e + Z;
              })),
                (e.slidesGrid = e.slidesGrid.map(function (e) {
                  return e + Y;
                }));
            }
            if (
              (d !== u && e.emit("slidesLengthChange"),
              f.length !== g &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              p.length !== y && e.emit("slidesGridLengthChange"),
              r.watchSlidesProgress && e.updateSlidesOffset(),
              !o && !r.cssMode && ("slide" === r.effect || "fade" === r.effect))
            ) {
              var K = "".concat(r.containerModifierClass, "backface-hidden"),
                J = e.$el.hasClass(K);
              d <= r.maxBackfaceHiddenSlides
                ? J || e.$el.addClass(K)
                : J && e.$el.removeClass(K);
            }
          }
        },
        updateAutoHeight: function (e) {
          var t,
            n = this,
            r = [],
            a = n.virtual && n.params.virtual.enabled,
            i = 0;
          "number" === typeof e
            ? n.setTransition(e)
            : !0 === e && n.setTransition(n.params.speed);
          var l = function (e) {
            return a
              ? n.slides.filter(function (t) {
                  return (
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                  );
                })[0]
              : n.slides.eq(e)[0];
          };
          if ("auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
            if (n.params.centeredSlides)
              (n.visibleSlides || je([])).each(function (e) {
                r.push(e);
              });
            else
              for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                var s = n.activeIndex + t;
                if (s > n.slides.length && !a) break;
                r.push(l(s));
              }
          else r.push(l(n.activeIndex));
          for (t = 0; t < r.length; t += 1)
            if ("undefined" !== typeof r[t]) {
              var o = r[t].offsetHeight;
              i = o > i ? o : i;
            }
          (i || 0 === i) && n.$wrapperEl.css("height", "".concat(i, "px"));
        },
        updateSlidesOffset: function () {
          for (var e = this.slides, t = 0; t < e.length; t += 1)
            e[t].swiperSlideOffset = this.isHorizontal()
              ? e[t].offsetLeft
              : e[t].offsetTop;
        },
        updateSlidesProgress: function (e) {
          void 0 === e && (e = (this && this.translate) || 0);
          var t = this,
            n = t.params,
            r = t.slides,
            a = t.rtlTranslate,
            i = t.snapGrid;
          if (0 !== r.length) {
            "undefined" === typeof r[0].swiperSlideOffset &&
              t.updateSlidesOffset();
            var l = -e;
            a && (l = e),
              r.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (var s = 0; s < r.length; s += 1) {
              var o = r[s],
                u = o.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
              var c =
                  (l + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (o.swiperSlideSize + n.spaceBetween),
                d =
                  (l - i[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
                  (o.swiperSlideSize + n.spaceBetween),
                f = -(l - u),
                p = f + t.slidesSizesGrid[s];
              ((f >= 0 && f < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (f <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(s),
                r.eq(s).addClass(n.slideVisibleClass)),
                (o.progress = a ? -c : c),
                (o.originalProgress = a ? -d : d);
            }
            t.visibleSlides = je(t.visibleSlides);
          }
        },
        updateProgress: function (e) {
          var t = this;
          if ("undefined" === typeof e) {
            var n = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * n) || 0;
          }
          var r = t.params,
            a = t.maxTranslate() - t.minTranslate(),
            i = t.progress,
            l = t.isBeginning,
            s = t.isEnd,
            o = l,
            u = s;
          0 === a
            ? ((i = 0), (l = !0), (s = !0))
            : ((l = (i = (e - t.minTranslate()) / a) <= 0), (s = i >= 1)),
            Object.assign(t, { progress: i, isBeginning: l, isEnd: s }),
            (r.watchSlidesProgress || (r.centeredSlides && r.autoHeight)) &&
              t.updateSlidesProgress(e),
            l && !o && t.emit("reachBeginning toEdge"),
            s && !u && t.emit("reachEnd toEdge"),
            ((o && !l) || (u && !s)) && t.emit("fromEdge"),
            t.emit("progress", i);
        },
        updateSlidesClasses: function () {
          var e,
            t = this,
            n = t.slides,
            r = t.params,
            a = t.$wrapperEl,
            i = t.activeIndex,
            l = t.realIndex,
            s = t.virtual && r.virtual.enabled;
          n.removeClass(
            ""
              .concat(r.slideActiveClass, " ")
              .concat(r.slideNextClass, " ")
              .concat(r.slidePrevClass, " ")
              .concat(r.slideDuplicateActiveClass, " ")
              .concat(r.slideDuplicateNextClass, " ")
              .concat(r.slideDuplicatePrevClass)
          ),
            (e = s
              ? t.$wrapperEl.find(
                  "."
                    .concat(r.slideClass, '[data-swiper-slide-index="')
                    .concat(i, '"]')
                )
              : n.eq(i)).addClass(r.slideActiveClass),
            r.loop &&
              (e.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(l, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(l, '"]')
                    )
                    .addClass(r.slideDuplicateActiveClass));
          var o = e
            .nextAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slideNextClass);
          r.loop && 0 === o.length && (o = n.eq(0)).addClass(r.slideNextClass);
          var u = e
            .prevAll(".".concat(r.slideClass))
            .eq(0)
            .addClass(r.slidePrevClass);
          r.loop && 0 === u.length && (u = n.eq(-1)).addClass(r.slidePrevClass),
            r.loop &&
              (o.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(o.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(o.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicateNextClass),
              u.hasClass(r.slideDuplicateClass)
                ? a
                    .children(
                      "."
                        .concat(r.slideClass, ":not(.")
                        .concat(
                          r.slideDuplicateClass,
                          ')[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)
                : a
                    .children(
                      "."
                        .concat(r.slideClass, ".")
                        .concat(
                          r.slideDuplicateClass,
                          '[data-swiper-slide-index="'
                        )
                        .concat(u.attr("data-swiper-slide-index"), '"]')
                    )
                    .addClass(r.slideDuplicatePrevClass)),
            t.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          var t,
            n = this,
            r = n.rtlTranslate ? n.translate : -n.translate,
            a = n.slidesGrid,
            i = n.snapGrid,
            l = n.params,
            s = n.activeIndex,
            o = n.realIndex,
            u = n.snapIndex,
            c = e;
          if ("undefined" === typeof c) {
            for (var d = 0; d < a.length; d += 1)
              "undefined" !== typeof a[d + 1]
                ? r >= a[d] && r < a[d + 1] - (a[d + 1] - a[d]) / 2
                  ? (c = d)
                  : r >= a[d] && r < a[d + 1] && (c = d + 1)
                : r >= a[d] && (c = d);
            l.normalizeSlideIndex &&
              (c < 0 || "undefined" === typeof c) &&
              (c = 0);
          }
          if (i.indexOf(r) >= 0) t = i.indexOf(r);
          else {
            var f = Math.min(l.slidesPerGroupSkip, c);
            t = f + Math.floor((c - f) / l.slidesPerGroup);
          }
          if ((t >= i.length && (t = i.length - 1), c !== s)) {
            var p = parseInt(
              n.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            Object.assign(n, {
              snapIndex: t,
              realIndex: p,
              previousIndex: s,
              activeIndex: c,
            }),
              n.emit("activeIndexChange"),
              n.emit("snapIndexChange"),
              o !== p && n.emit("realIndexChange"),
              (n.initialized || n.params.runCallbacksOnInit) &&
                n.emit("slideChange");
          } else t !== u && ((n.snapIndex = t), n.emit("snapIndexChange"));
        },
        updateClickedSlide: function (e) {
          var t,
            n = this,
            r = n.params,
            a = je(e).closest(".".concat(r.slideClass))[0],
            i = !1;
          if (a)
            for (var l = 0; l < n.slides.length; l += 1)
              if (n.slides[l] === a) {
                (i = !0), (t = l);
                break;
              }
          if (!a || !i)
            return (n.clickedSlide = void 0), void (n.clickedIndex = void 0);
          (n.clickedSlide = a),
            n.virtual && n.params.virtual.enabled
              ? (n.clickedIndex = parseInt(
                  je(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (n.clickedIndex = t),
            r.slideToClickedSlide &&
              void 0 !== n.clickedIndex &&
              n.clickedIndex !== n.activeIndex &&
              n.slideToClickedSlide();
        },
      };
      var Ue = {
        getTranslate: function (e) {
          void 0 === e && (e = this.isHorizontal() ? "x" : "y");
          var t = this,
            n = t.params,
            r = t.rtlTranslate,
            a = t.translate,
            i = t.$wrapperEl;
          if (n.virtualTranslate) return r ? -a : a;
          if (n.cssMode) return a;
          var l = Pe(i[0], e);
          return r && (l = -l), l || 0;
        },
        setTranslate: function (e, t) {
          var n = this,
            r = n.rtlTranslate,
            a = n.params,
            i = n.$wrapperEl,
            l = n.wrapperEl,
            s = n.progress,
            o = 0,
            u = 0;
          n.isHorizontal() ? (o = r ? -e : e) : (u = e),
            a.roundLengths && ((o = Math.floor(o)), (u = Math.floor(u))),
            a.cssMode
              ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  n.isHorizontal() ? -o : -u)
              : a.virtualTranslate ||
                i.transform(
                  "translate3d("
                    .concat(o, "px, ")
                    .concat(u, "px, ")
                    .concat(0, "px)")
                ),
            (n.previousTranslate = n.translate),
            (n.translate = n.isHorizontal() ? o : u);
          var c = n.maxTranslate() - n.minTranslate();
          (0 === c ? 0 : (e - n.minTranslate()) / c) !== s &&
            n.updateProgress(e),
            n.emit("setTranslate", n.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, t, n, r, a) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            void 0 === r && (r = !0);
          var i = this,
            l = i.params,
            s = i.wrapperEl;
          if (i.animating && l.preventInteractionOnTransition) return !1;
          var o,
            u = i.minTranslate(),
            c = i.maxTranslate();
          if (
            ((o = r && e > u ? u : r && e < c ? c : e),
            i.updateProgress(o),
            l.cssMode)
          ) {
            var d = i.isHorizontal();
            if (0 === t) s[d ? "scrollLeft" : "scrollTop"] = -o;
            else {
              var f;
              if (!i.support.smoothScroll)
                return (
                  Fe({
                    swiper: i,
                    targetPosition: -o,
                    side: d ? "left" : "top",
                  }),
                  !0
                );
              s.scrollTo(
                (ze((f = {}), d ? "left" : "top", -o),
                ze(f, "behavior", "smooth"),
                f)
              );
            }
            return !0;
          }
          return (
            0 === t
              ? (i.setTransition(0),
                i.setTranslate(o),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionEnd")))
              : (i.setTransition(t),
                i.setTranslate(o),
                n &&
                  (i.emit("beforeTransitionStart", t, a),
                  i.emit("transitionStart")),
                i.animating ||
                  ((i.animating = !0),
                  i.onTranslateToWrapperTransitionEnd ||
                    (i.onTranslateToWrapperTransitionEnd = function (e) {
                      i &&
                        !i.destroyed &&
                        e.target === this &&
                        (i.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        i.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          i.onTranslateToWrapperTransitionEnd
                        ),
                        (i.onTranslateToWrapperTransitionEnd = null),
                        delete i.onTranslateToWrapperTransitionEnd,
                        n && i.emit("transitionEnd"));
                    }),
                  i.$wrapperEl[0].addEventListener(
                    "transitionend",
                    i.onTranslateToWrapperTransitionEnd
                  ),
                  i.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    i.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function He(e) {
        var t = e.swiper,
          n = e.runCallbacks,
          r = e.direction,
          a = e.step,
          i = t.activeIndex,
          l = t.previousIndex,
          s = r;
        if (
          (s || (s = i > l ? "next" : i < l ? "prev" : "reset"),
          t.emit("transition".concat(a)),
          n && i !== l)
        ) {
          if ("reset" === s)
            return void t.emit("slideResetTransition".concat(a));
          t.emit("slideChangeTransition".concat(a)),
            "next" === s
              ? t.emit("slideNextTransition".concat(a))
              : t.emit("slidePrevTransition".concat(a));
        }
      }
      var Ze = {
        slideTo: function (e, t, n, r, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0),
            "number" !== typeof e && "string" !== typeof e)
          )
            throw new Error(
              "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                typeof e,
                "] given."
              )
            );
          if ("string" === typeof e) {
            var i = parseInt(e, 10);
            if (!isFinite(i))
              throw new Error(
                "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                  e,
                  "] given."
                )
              );
            e = i;
          }
          var l = this,
            s = e;
          s < 0 && (s = 0);
          var o = l.params,
            u = l.snapGrid,
            c = l.slidesGrid,
            d = l.previousIndex,
            f = l.activeIndex,
            p = l.rtlTranslate,
            h = l.wrapperEl,
            m = l.enabled;
          if (
            (l.animating && o.preventInteractionOnTransition) ||
            (!m && !r && !a)
          )
            return !1;
          var v = Math.min(l.params.slidesPerGroupSkip, s),
            g = v + Math.floor((s - v) / l.params.slidesPerGroup);
          g >= u.length && (g = u.length - 1),
            (f || o.initialSlide || 0) === (d || 0) &&
              n &&
              l.emit("beforeSlideChangeStart");
          var y,
            b = -u[g];
          if ((l.updateProgress(b), o.normalizeSlideIndex))
            for (var w = 0; w < c.length; w += 1) {
              var x = -Math.floor(100 * b),
                k = Math.floor(100 * c[w]),
                S = Math.floor(100 * c[w + 1]);
              "undefined" !== typeof c[w + 1]
                ? x >= k && x < S - (S - k) / 2
                  ? (s = w)
                  : x >= k && x < S && (s = w + 1)
                : x >= k && (s = w);
            }
          if (l.initialized && s !== f) {
            if (!l.allowSlideNext && b < l.translate && b < l.minTranslate())
              return !1;
            if (
              !l.allowSlidePrev &&
              b > l.translate &&
              b > l.maxTranslate() &&
              (f || 0) !== s
            )
              return !1;
          }
          if (
            ((y = s > f ? "next" : s < f ? "prev" : "reset"),
            (p && -b === l.translate) || (!p && b === l.translate))
          )
            return (
              l.updateActiveIndex(s),
              o.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== o.effect && l.setTranslate(b),
              "reset" !== y && (l.transitionStart(n, y), l.transitionEnd(n, y)),
              !1
            );
          if (o.cssMode) {
            var C = l.isHorizontal(),
              E = p ? b : -b;
            if (0 === t) {
              var A = l.virtual && l.params.virtual.enabled;
              A &&
                ((l.wrapperEl.style.scrollSnapType = "none"),
                (l._immediateVirtual = !0)),
                (h[C ? "scrollLeft" : "scrollTop"] = E),
                A &&
                  requestAnimationFrame(function () {
                    (l.wrapperEl.style.scrollSnapType = ""),
                      (l._swiperImmediateVirtual = !1);
                  });
            } else {
              var T;
              if (!l.support.smoothScroll)
                return (
                  Fe({
                    swiper: l,
                    targetPosition: E,
                    side: C ? "left" : "top",
                  }),
                  !0
                );
              h.scrollTo(
                (ze((T = {}), C ? "left" : "top", E),
                ze(T, "behavior", "smooth"),
                T)
              );
            }
            return !0;
          }
          return (
            l.setTransition(t),
            l.setTranslate(b),
            l.updateActiveIndex(s),
            l.updateSlidesClasses(),
            l.emit("beforeTransitionStart", t, r),
            l.transitionStart(n, y),
            0 === t
              ? l.transitionEnd(n, y)
              : l.animating ||
                ((l.animating = !0),
                l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (e) {
                    l &&
                      !l.destroyed &&
                      e.target === this &&
                      (l.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      l.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        l.onSlideToWrapperTransitionEnd
                      ),
                      (l.onSlideToWrapperTransitionEnd = null),
                      delete l.onSlideToWrapperTransitionEnd,
                      l.transitionEnd(n, y));
                  }),
                l.$wrapperEl[0].addEventListener(
                  "transitionend",
                  l.onSlideToWrapperTransitionEnd
                ),
                l.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  l.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e, t, n, r) {
          void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === n && (n = !0);
          var a = this,
            i = e;
          return a.params.loop && (i += a.loopedSlides), a.slideTo(i, t, n, r);
        },
        slideNext: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.animating,
            i = r.enabled,
            l = r.params;
          if (!i) return r;
          var s = l.slidesPerGroup;
          "auto" === l.slidesPerView &&
            1 === l.slidesPerGroup &&
            l.slidesPerGroupAuto &&
            (s = Math.max(r.slidesPerViewDynamic("current", !0), 1));
          var o = r.activeIndex < l.slidesPerGroupSkip ? 1 : s;
          if (l.loop) {
            if (a && l.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          return l.rewind && r.isEnd
            ? r.slideTo(0, e, t, n)
            : r.slideTo(r.activeIndex + o, e, t, n);
        },
        slidePrev: function (e, t, n) {
          void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
          var r = this,
            a = r.params,
            i = r.animating,
            l = r.snapGrid,
            s = r.slidesGrid,
            o = r.rtlTranslate;
          if (!r.enabled) return r;
          if (a.loop) {
            if (i && a.loopPreventsSlide) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          function u(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var c,
            d = u(o ? r.translate : -r.translate),
            f = l.map(function (e) {
              return u(e);
            }),
            p = l[f.indexOf(d) - 1];
          "undefined" === typeof p &&
            a.cssMode &&
            (l.forEach(function (e, t) {
              d >= e && (c = t);
            }),
            "undefined" !== typeof c && (p = l[c > 0 ? c - 1 : c]));
          var h = 0;
          if (
            ("undefined" !== typeof p &&
              ((h = s.indexOf(p)) < 0 && (h = r.activeIndex - 1),
              "auto" === a.slidesPerView &&
                1 === a.slidesPerGroup &&
                a.slidesPerGroupAuto &&
                ((h = h - r.slidesPerViewDynamic("previous", !0) + 1),
                (h = Math.max(h, 0)))),
            a.rewind && r.isBeginning)
          ) {
            var m =
              r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1;
            return r.slideTo(m, e, t, n);
          }
          return r.slideTo(h, e, t, n);
        },
        slideReset: function (e, t, n) {
          return (
            void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            this.slideTo(this.activeIndex, e, t, n)
          );
        },
        slideToClosest: function (e, t, n, r) {
          void 0 === e && (e = this.params.speed),
            void 0 === t && (t = !0),
            void 0 === r && (r = 0.5);
          var a = this,
            i = a.activeIndex,
            l = Math.min(a.params.slidesPerGroupSkip, i),
            s = l + Math.floor((i - l) / a.params.slidesPerGroup),
            o = a.rtlTranslate ? a.translate : -a.translate;
          if (o >= a.snapGrid[s]) {
            var u = a.snapGrid[s];
            o - u > (a.snapGrid[s + 1] - u) * r &&
              (i += a.params.slidesPerGroup);
          } else {
            var c = a.snapGrid[s - 1];
            o - c <= (a.snapGrid[s] - c) * r && (i -= a.params.slidesPerGroup);
          }
          return (
            (i = Math.max(i, 0)),
            (i = Math.min(i, a.slidesGrid.length - 1)),
            a.slideTo(i, e, t, n)
          );
        },
        slideToClickedSlide: function () {
          var e,
            t = this,
            n = t.params,
            r = t.$wrapperEl,
            a =
              "auto" === n.slidesPerView
                ? t.slidesPerViewDynamic()
                : n.slidesPerView,
            i = t.clickedIndex;
          if (n.loop) {
            if (t.animating) return;
            (e = parseInt(
              je(t.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              n.centeredSlides
                ? i < t.loopedSlides - a / 2 ||
                  i > t.slides.length - t.loopedSlides + a / 2
                  ? (t.loopFix(),
                    (i = r
                      .children(
                        "."
                          .concat(n.slideClass, '[data-swiper-slide-index="')
                          .concat(e, '"]:not(.')
                          .concat(n.slideDuplicateClass, ")")
                      )
                      .eq(0)
                      .index()),
                    Ie(function () {
                      t.slideTo(i);
                    }))
                  : t.slideTo(i)
                : i > t.slides.length - a
                ? (t.loopFix(),
                  (i = r
                    .children(
                      "."
                        .concat(n.slideClass, '[data-swiper-slide-index="')
                        .concat(e, '"]:not(.')
                        .concat(n.slideDuplicateClass, ")")
                    )
                    .eq(0)
                    .index()),
                  Ie(function () {
                    t.slideTo(i);
                  }))
                : t.slideTo(i);
          } else t.slideTo(i);
        },
      };
      var Ye = {
        loopCreate: function () {
          var e = this,
            t = ue(),
            n = e.params,
            r = e.$wrapperEl,
            a = r.children().length > 0 ? je(r.children()[0].parentNode) : r;
          a.children(
            ".".concat(n.slideClass, ".").concat(n.slideDuplicateClass)
          ).remove();
          var i = a.children(".".concat(n.slideClass));
          if (n.loopFillGroupWithBlank) {
            var l = n.slidesPerGroup - (i.length % n.slidesPerGroup);
            if (l !== n.slidesPerGroup) {
              for (var s = 0; s < l; s += 1) {
                var o = je(t.createElement("div")).addClass(
                  "".concat(n.slideClass, " ").concat(n.slideBlankClass)
                );
                a.append(o);
              }
              i = a.children(".".concat(n.slideClass));
            }
          }
          "auto" !== n.slidesPerView ||
            n.loopedSlides ||
            (n.loopedSlides = i.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(n.loopedSlides || n.slidesPerView, 10)
            )),
            (e.loopedSlides += n.loopAdditionalSlides),
            e.loopedSlides > i.length && (e.loopedSlides = i.length);
          var u = [],
            c = [];
          i.each(function (t, n) {
            var r = je(t);
            n < e.loopedSlides && c.push(t),
              n < i.length && n >= i.length - e.loopedSlides && u.push(t),
              r.attr("data-swiper-slide-index", n);
          });
          for (var d = 0; d < c.length; d += 1)
            a.append(je(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
          for (var f = u.length - 1; f >= 0; f -= 1)
            a.prepend(je(u[f].cloneNode(!0)).addClass(n.slideDuplicateClass));
        },
        loopFix: function () {
          var e = this;
          e.emit("beforeLoopFix");
          var t,
            n = e.activeIndex,
            r = e.slides,
            a = e.loopedSlides,
            i = e.allowSlidePrev,
            l = e.allowSlideNext,
            s = e.snapGrid,
            o = e.rtlTranslate;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          var u = -s[n] - e.getTranslate();
          if (n < a)
            (t = r.length - 3 * a + n),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((o ? -e.translate : e.translate) - u);
          else if (n >= r.length - a) {
            (t = -r.length + n + a),
              (t += a),
              e.slideTo(t, 0, !1, !0) &&
                0 !== u &&
                e.setTranslate((o ? -e.translate : e.translate) - u);
          }
          (e.allowSlidePrev = i), (e.allowSlideNext = l), e.emit("loopFix");
        },
        loopDestroy: function () {
          var e = this,
            t = e.$wrapperEl,
            n = e.params,
            r = e.slides;
          t
            .children(
              "."
                .concat(n.slideClass, ".")
                .concat(n.slideDuplicateClass, ",.")
                .concat(n.slideClass, ".")
                .concat(n.slideBlankClass)
            )
            .remove(),
            r.removeAttr("data-swiper-slide-index");
        },
      };
      function Ke(e) {
        var t = this,
          n = ue(),
          r = de(),
          a = t.touchEventsData,
          i = t.params,
          l = t.touches;
        if (t.enabled && (!t.animating || !i.preventInteractionOnTransition)) {
          !t.animating && i.cssMode && i.loop && t.loopFix();
          var s = e;
          s.originalEvent && (s = s.originalEvent);
          var o = je(s.target);
          if (
            ("wrapper" !== i.touchEventsTarget ||
              o.closest(t.wrapperEl).length) &&
            ((a.isTouchEvent = "touchstart" === s.type),
            (a.isTouchEvent || !("which" in s) || 3 !== s.which) &&
              !(!a.isTouchEvent && "button" in s && s.button > 0) &&
              (!a.isTouched || !a.isMoved))
          ) {
            !!i.noSwipingClass &&
              "" !== i.noSwipingClass &&
              s.target &&
              s.target.shadowRoot &&
              e.path &&
              e.path[0] &&
              (o = je(e.path[0]));
            var u = i.noSwipingSelector
                ? i.noSwipingSelector
                : ".".concat(i.noSwipingClass),
              c = !(!s.target || !s.target.shadowRoot);
            if (
              i.noSwiping &&
              (c
                ? (function (e, t) {
                    return (
                      void 0 === t && (t = this),
                      (function t(n) {
                        if (!n || n === ue() || n === de()) return null;
                        n.assignedSlot && (n = n.assignedSlot);
                        var r = n.closest(e);
                        return r || n.getRootNode
                          ? r || t(n.getRootNode().host)
                          : null;
                      })(t)
                    );
                  })(u, o[0])
                : o.closest(u)[0])
            )
              t.allowClick = !0;
            else if (!i.swipeHandler || o.closest(i.swipeHandler)[0]) {
              (l.currentX =
                "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX),
                (l.currentY =
                  "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY);
              var d = l.currentX,
                f = l.currentY,
                p = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                h = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
              if (p && (d <= h || d >= r.innerWidth - h)) {
                if ("prevent" !== p) return;
                e.preventDefault();
              }
              if (
                (Object.assign(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (l.startX = d),
                (l.startY = f),
                (a.touchStartTime = Le()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                i.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== s.type)
              ) {
                var m = !0;
                o.is(a.focusableElements) &&
                  ((m = !1), "SELECT" === o[0].nodeName && (a.isTouched = !1)),
                  n.activeElement &&
                    je(n.activeElement).is(a.focusableElements) &&
                    n.activeElement !== o[0] &&
                    n.activeElement.blur();
                var v = m && t.allowTouchMove && i.touchStartPreventDefault;
                (!i.touchStartForcePreventDefault && !v) ||
                  o[0].isContentEditable ||
                  s.preventDefault();
              }
              t.params.freeMode &&
                t.params.freeMode.enabled &&
                t.freeMode &&
                t.animating &&
                !i.cssMode &&
                t.freeMode.onTouchStart(),
                t.emit("touchStart", s);
            }
          }
        }
      }
      function Je(e) {
        var t = ue(),
          n = this,
          r = n.touchEventsData,
          a = n.params,
          i = n.touches,
          l = n.rtlTranslate;
        if (n.enabled) {
          var s = e;
          if ((s.originalEvent && (s = s.originalEvent), r.isTouched)) {
            if (!r.isTouchEvent || "touchmove" === s.type) {
              var o =
                  "touchmove" === s.type &&
                  s.targetTouches &&
                  (s.targetTouches[0] || s.changedTouches[0]),
                u = "touchmove" === s.type ? o.pageX : s.pageX,
                c = "touchmove" === s.type ? o.pageY : s.pageY;
              if (s.preventedByNestedSwiper)
                return (i.startX = u), void (i.startY = c);
              if (!n.allowTouchMove)
                return (
                  je(s.target).is(r.focusableElements) || (n.allowClick = !1),
                  void (
                    r.isTouched &&
                    (Object.assign(i, {
                      startX: u,
                      startY: c,
                      currentX: u,
                      currentY: c,
                    }),
                    (r.touchStartTime = Le()))
                  )
                );
              if (r.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
                if (n.isVertical()) {
                  if (
                    (c < i.startY && n.translate <= n.maxTranslate()) ||
                    (c > i.startY && n.translate >= n.minTranslate())
                  )
                    return (r.isTouched = !1), void (r.isMoved = !1);
                } else if (
                  (u < i.startX && n.translate <= n.maxTranslate()) ||
                  (u > i.startX && n.translate >= n.minTranslate())
                )
                  return;
              if (
                r.isTouchEvent &&
                t.activeElement &&
                s.target === t.activeElement &&
                je(s.target).is(r.focusableElements)
              )
                return (r.isMoved = !0), void (n.allowClick = !1);
              if (
                (r.allowTouchCallbacks && n.emit("touchMove", s),
                !(s.targetTouches && s.targetTouches.length > 1))
              ) {
                (i.currentX = u), (i.currentY = c);
                var d = i.currentX - i.startX,
                  f = i.currentY - i.startY;
                if (
                  !(
                    n.params.threshold &&
                    Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)) <
                      n.params.threshold
                  )
                ) {
                  var p;
                  if ("undefined" === typeof r.isScrolling)
                    (n.isHorizontal() && i.currentY === i.startY) ||
                    (n.isVertical() && i.currentX === i.startX)
                      ? (r.isScrolling = !1)
                      : d * d + f * f >= 25 &&
                        ((p =
                          (180 * Math.atan2(Math.abs(f), Math.abs(d))) /
                          Math.PI),
                        (r.isScrolling = n.isHorizontal()
                          ? p > a.touchAngle
                          : 90 - p > a.touchAngle));
                  if (
                    (r.isScrolling && n.emit("touchMoveOpposite", s),
                    "undefined" === typeof r.startMoving &&
                      ((i.currentX === i.startX && i.currentY === i.startY) ||
                        (r.startMoving = !0)),
                    r.isScrolling)
                  )
                    r.isTouched = !1;
                  else if (r.startMoving) {
                    (n.allowClick = !1),
                      !a.cssMode && s.cancelable && s.preventDefault(),
                      a.touchMoveStopPropagation &&
                        !a.nested &&
                        s.stopPropagation(),
                      r.isMoved ||
                        (a.loop && !a.cssMode && n.loopFix(),
                        (r.startTranslate = n.getTranslate()),
                        n.setTransition(0),
                        n.animating &&
                          n.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                          ),
                        (r.allowMomentumBounce = !1),
                        !a.grabCursor ||
                          (!0 !== n.allowSlideNext &&
                            !0 !== n.allowSlidePrev) ||
                          n.setGrabCursor(!0),
                        n.emit("sliderFirstMove", s)),
                      n.emit("sliderMove", s),
                      (r.isMoved = !0);
                    var h = n.isHorizontal() ? d : f;
                    (i.diff = h),
                      (h *= a.touchRatio),
                      l && (h = -h),
                      (n.swipeDirection = h > 0 ? "prev" : "next"),
                      (r.currentTranslate = h + r.startTranslate);
                    var m = !0,
                      v = a.resistanceRatio;
                    if (
                      (a.touchReleaseOnEdges && (v = 0),
                      h > 0 && r.currentTranslate > n.minTranslate()
                        ? ((m = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.minTranslate() -
                              1 +
                              Math.pow(
                                -n.minTranslate() + r.startTranslate + h,
                                v
                              )))
                        : h < 0 &&
                          r.currentTranslate < n.maxTranslate() &&
                          ((m = !1),
                          a.resistance &&
                            (r.currentTranslate =
                              n.maxTranslate() +
                              1 -
                              Math.pow(
                                n.maxTranslate() - r.startTranslate - h,
                                v
                              ))),
                      m && (s.preventedByNestedSwiper = !0),
                      !n.allowSlideNext &&
                        "next" === n.swipeDirection &&
                        r.currentTranslate < r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      !n.allowSlidePrev &&
                        "prev" === n.swipeDirection &&
                        r.currentTranslate > r.startTranslate &&
                        (r.currentTranslate = r.startTranslate),
                      n.allowSlidePrev ||
                        n.allowSlideNext ||
                        (r.currentTranslate = r.startTranslate),
                      a.threshold > 0)
                    ) {
                      if (!(Math.abs(h) > a.threshold || r.allowThresholdMove))
                        return void (r.currentTranslate = r.startTranslate);
                      if (!r.allowThresholdMove)
                        return (
                          (r.allowThresholdMove = !0),
                          (i.startX = i.currentX),
                          (i.startY = i.currentY),
                          (r.currentTranslate = r.startTranslate),
                          void (i.diff = n.isHorizontal()
                            ? i.currentX - i.startX
                            : i.currentY - i.startY)
                        );
                    }
                    a.followFinger &&
                      !a.cssMode &&
                      (((a.freeMode && a.freeMode.enabled && n.freeMode) ||
                        a.watchSlidesProgress) &&
                        (n.updateActiveIndex(), n.updateSlidesClasses()),
                      n.params.freeMode &&
                        a.freeMode.enabled &&
                        n.freeMode &&
                        n.freeMode.onTouchMove(),
                      n.updateProgress(r.currentTranslate),
                      n.setTranslate(r.currentTranslate));
                  }
                }
              }
            }
          } else
            r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", s);
        }
      }
      function Xe(e) {
        var t = this,
          n = t.touchEventsData,
          r = t.params,
          a = t.touches,
          i = t.rtlTranslate,
          l = t.slidesGrid;
        if (t.enabled) {
          var s = e;
          if (
            (s.originalEvent && (s = s.originalEvent),
            n.allowTouchCallbacks && t.emit("touchEnd", s),
            (n.allowTouchCallbacks = !1),
            !n.isTouched)
          )
            return (
              n.isMoved && r.grabCursor && t.setGrabCursor(!1),
              (n.isMoved = !1),
              void (n.startMoving = !1)
            );
          r.grabCursor &&
            n.isMoved &&
            n.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          var o,
            u = Le(),
            c = u - n.touchStartTime;
          if (t.allowClick) {
            var d = s.path || (s.composedPath && s.composedPath());
            t.updateClickedSlide((d && d[0]) || s.target),
              t.emit("tap click", s),
              c < 300 &&
                u - n.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", s);
          }
          if (
            ((n.lastClickTime = Le()),
            Ie(function () {
              t.destroyed || (t.allowClick = !0);
            }),
            !n.isTouched ||
              !n.isMoved ||
              !t.swipeDirection ||
              0 === a.diff ||
              n.currentTranslate === n.startTranslate)
          )
            return (
              (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
            );
          if (
            ((n.isTouched = !1),
            (n.isMoved = !1),
            (n.startMoving = !1),
            (o = r.followFinger
              ? i
                ? t.translate
                : -t.translate
              : -n.currentTranslate),
            !r.cssMode)
          )
            if (t.params.freeMode && r.freeMode.enabled)
              t.freeMode.onTouchEnd({ currentPos: o });
            else {
              for (
                var f = 0, p = t.slidesSizesGrid[0], h = 0;
                h < l.length;
                h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup
              ) {
                var m = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                "undefined" !== typeof l[h + m]
                  ? o >= l[h] &&
                    o < l[h + m] &&
                    ((f = h), (p = l[h + m] - l[h]))
                  : o >= l[h] &&
                    ((f = h), (p = l[l.length - 1] - l[l.length - 2]));
              }
              var v = null,
                g = null;
              r.rewind &&
                (t.isBeginning
                  ? (g =
                      t.params.virtual && t.params.virtual.enabled && t.virtual
                        ? t.virtual.slides.length - 1
                        : t.slides.length - 1)
                  : t.isEnd && (v = 0));
              var y = (o - l[f]) / p,
                b = f < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
              if (c > r.longSwipesMs) {
                if (!r.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                  (y >= r.longSwipesRatio
                    ? t.slideTo(r.rewind && t.isEnd ? v : f + b)
                    : t.slideTo(f)),
                  "prev" === t.swipeDirection &&
                    (y > 1 - r.longSwipesRatio
                      ? t.slideTo(f + b)
                      : null !== g && y < 0 && Math.abs(y) > r.longSwipesRatio
                      ? t.slideTo(g)
                      : t.slideTo(f));
              } else {
                if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation &&
                (s.target === t.navigation.nextEl ||
                  s.target === t.navigation.prevEl)
                  ? s.target === t.navigation.nextEl
                    ? t.slideTo(f + b)
                    : t.slideTo(f)
                  : ("next" === t.swipeDirection &&
                      t.slideTo(null !== v ? v : f + b),
                    "prev" === t.swipeDirection &&
                      t.slideTo(null !== g ? g : f));
              }
            }
        }
      }
      function qe() {
        var e = this,
          t = e.params,
          n = e.el;
        if (!n || 0 !== n.offsetWidth) {
          t.breakpoints && e.setBreakpoint();
          var r = e.allowSlideNext,
            a = e.allowSlidePrev,
            i = e.snapGrid;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = a),
            (e.allowSlideNext = r),
            e.params.watchOverflow && i !== e.snapGrid && e.checkOverflow();
        }
      }
      function $e(e) {
        var t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function et() {
        var e = this,
          t = e.wrapperEl,
          n = e.rtlTranslate;
        if (e.enabled) {
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          var r = e.maxTranslate() - e.minTranslate();
          (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress &&
            e.updateProgress(n ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
      }
      var tt = !1;
      function nt() {}
      var rt = function (e, t) {
        var n = ue(),
          r = e.params,
          a = e.touchEvents,
          i = e.el,
          l = e.wrapperEl,
          s = e.device,
          o = e.support,
          u = !!r.nested,
          c = "on" === t ? "addEventListener" : "removeEventListener",
          d = t;
        if (o.touch) {
          var f = !(
            "touchstart" !== a.start ||
            !o.passiveListener ||
            !r.passiveListeners
          ) && { passive: !0, capture: !1 };
          i[c](a.start, e.onTouchStart, f),
            i[c](
              a.move,
              e.onTouchMove,
              o.passiveListener ? { passive: !1, capture: u } : u
            ),
            i[c](a.end, e.onTouchEnd, f),
            a.cancel && i[c](a.cancel, e.onTouchEnd, f);
        } else
          i[c](a.start, e.onTouchStart, !1),
            n[c](a.move, e.onTouchMove, u),
            n[c](a.end, e.onTouchEnd, !1);
        (r.preventClicks || r.preventClicksPropagation) &&
          i[c]("click", e.onClick, !0),
          r.cssMode && l[c]("scroll", e.onScroll),
          r.updateOnWindowResize
            ? e[d](
                s.ios || s.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                qe,
                !0
              )
            : e[d]("observerUpdate", qe, !0);
      };
      var at = {
          attachEvents: function () {
            var e = this,
              t = ue(),
              n = e.params,
              r = e.support;
            (e.onTouchStart = Ke.bind(e)),
              (e.onTouchMove = Je.bind(e)),
              (e.onTouchEnd = Xe.bind(e)),
              n.cssMode && (e.onScroll = et.bind(e)),
              (e.onClick = $e.bind(e)),
              r.touch &&
                !tt &&
                (t.addEventListener("touchstart", nt), (tt = !0)),
              rt(e, "on");
          },
          detachEvents: function () {
            rt(this, "off");
          },
        },
        it = function (e, t) {
          return e.grid && t.grid && t.grid.rows > 1;
        };
      var lt = {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            n = e.initialized,
            r = e.loopedSlides,
            a = void 0 === r ? 0 : r,
            i = e.params,
            l = e.$el,
            s = i.breakpoints;
          if (s && (!s || 0 !== Object.keys(s).length)) {
            var o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
            if (o && e.currentBreakpoint !== o) {
              var u = (o in s ? s[o] : void 0) || e.originalParams,
                c = it(e, i),
                d = it(e, u),
                f = i.enabled;
              c && !d
                ? (l.removeClass(
                    ""
                      .concat(i.containerModifierClass, "grid ")
                      .concat(i.containerModifierClass, "grid-column")
                  ),
                  e.emitContainerClasses())
                : !c &&
                  d &&
                  (l.addClass("".concat(i.containerModifierClass, "grid")),
                  ((u.grid.fill && "column" === u.grid.fill) ||
                    (!u.grid.fill && "column" === i.grid.fill)) &&
                    l.addClass(
                      "".concat(i.containerModifierClass, "grid-column")
                    ),
                  e.emitContainerClasses());
              var p = u.direction && u.direction !== i.direction,
                h = i.loop && (u.slidesPerView !== i.slidesPerView || p);
              p && n && e.changeDirection(), Oe(e.params, u);
              var m = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                f && !m ? e.disable() : !f && m && e.enable(),
                (e.currentBreakpoint = o),
                e.emit("_beforeBreakpoint", u),
                h &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - a + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", u);
            }
          }
        },
        getBreakpoint: function (e, t, n) {
          if ((void 0 === t && (t = "window"), e && ("container" !== t || n))) {
            var r = !1,
              a = de(),
              i = "window" === t ? a.innerHeight : n.clientHeight,
              l = Object.keys(e).map(function (e) {
                if ("string" === typeof e && 0 === e.indexOf("@")) {
                  var t = parseFloat(e.substr(1));
                  return { value: i * t, point: e };
                }
                return { value: e, point: e };
              });
            l.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var s = 0; s < l.length; s += 1) {
              var o = l[s],
                u = o.point,
                c = o.value;
              "window" === t
                ? a.matchMedia("(min-width: ".concat(c, "px)")).matches &&
                  (r = u)
                : c <= n.clientWidth && (r = u);
            }
            return r || "max";
          }
        },
      };
      var st = {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            n = e.params,
            r = e.rtl,
            a = e.$el,
            i = e.device,
            l = e.support,
            s = (function (e, t) {
              var n = [];
              return (
                e.forEach(function (e) {
                  "object" === typeof e
                    ? Object.keys(e).forEach(function (r) {
                        e[r] && n.push(t + r);
                      })
                    : "string" === typeof e && n.push(t + e);
                }),
                n
              );
            })(
              [
                "initialized",
                n.direction,
                { "pointer-events": !l.touch },
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                  "grid-column":
                    n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                },
                { android: i.android },
                { ios: i.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
              ],
              n.containerModifierClass
            );
          t.push.apply(t, ie(s)),
            a.addClass(ie(t).join(" ")),
            e.emitContainerClasses();
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            n = e.classNames;
          t.removeClass(n.join(" ")), e.emitContainerClasses();
        },
      };
      var ot = {
        loadImage: function (e, t, n, r, a, i) {
          var l,
            s = de();
          function o() {
            i && i();
          }
          je(e).parent("picture")[0] || (e.complete && a)
            ? o()
            : t
            ? (((l = new s.Image()).onload = o),
              (l.onerror = o),
              r && (l.sizes = r),
              n && (l.srcset = n),
              t && (l.src = t))
            : o();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            "undefined" !== typeof e &&
              null !== e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var n = 0; n < e.imagesToLoad.length; n += 1) {
            var r = e.imagesToLoad[n];
            e.loadImage(
              r,
              r.currentSrc || r.getAttribute("src"),
              r.srcset || r.getAttribute("srcset"),
              r.sizes || r.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      };
      var ut = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
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
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
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
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
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
        _emitClasses: !1,
      };
      function ct(e, t) {
        return function (n) {
          void 0 === n && (n = {});
          var r = Object.keys(n)[0],
            a = n[r];
          "object" === typeof a && null !== a
            ? (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 &&
                !0 === e[r] &&
                (e[r] = { auto: !0 }),
              r in e && "enabled" in a
                ? (!0 === e[r] && (e[r] = { enabled: !0 }),
                  "object" !== typeof e[r] ||
                    "enabled" in e[r] ||
                    (e[r].enabled = !0),
                  e[r] || (e[r] = { enabled: !1 }),
                  Oe(t, n))
                : Oe(t, n))
            : Oe(t, n);
        };
      }
      var dt = {
          eventsEmitter: We,
          update: Ve,
          translate: Ue,
          transition: {
            setTransition: function (e, t) {
              var n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              r.cssMode ||
                (r.autoHeight && n.updateAutoHeight(),
                He({
                  swiper: n,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              var n = this,
                r = n.params;
              (n.animating = !1),
                r.cssMode ||
                  (n.setTransition(0),
                  He({
                    swiper: n,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: Ze,
          loop: Ye,
          grabCursor: {
            setGrabCursor: function (e) {
              var t = this;
              if (
                !(
                  t.support.touch ||
                  !t.params.simulateTouch ||
                  (t.params.watchOverflow && t.isLocked) ||
                  t.params.cssMode
                )
              ) {
                var n =
                  "container" === t.params.touchEventsTarget
                    ? t.el
                    : t.wrapperEl;
                (n.style.cursor = "move"),
                  (n.style.cursor = e ? "grabbing" : "grab");
              }
            },
            unsetGrabCursor: function () {
              var e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: at,
          breakpoints: lt,
          checkOverflow: {
            checkOverflow: function () {
              var e = this,
                t = e.isLocked,
                n = e.params,
                r = n.slidesOffsetBefore;
              if (r) {
                var a = e.slides.length - 1,
                  i = e.slidesGrid[a] + e.slidesSizesGrid[a] + 2 * r;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: st,
          images: ot,
        },
        ft = {},
        pt = (function () {
          function e() {
            var t, n;
            Y(this, e);
            for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++)
              a[i] = arguments[i];
            if (
              (1 === a.length &&
              a[0].constructor &&
              "Object" === Object.prototype.toString.call(a[0]).slice(8, -1)
                ? (n = a[0])
                : ((t = a[0]), (n = a[1])),
              n || (n = {}),
              (n = Oe({}, n)),
              t && !n.el && (n.el = t),
              n.el && je(n.el).length > 1)
            ) {
              var l = [];
              return (
                je(n.el).each(function (t) {
                  var r = Oe({}, n, { el: t });
                  l.push(new e(r));
                }),
                l
              );
            }
            var s,
              o = this;
            ((o.__swiper__ = !0),
            (o.support = Re()),
            (o.device = Qe({ userAgent: n.userAgent })),
            (o.browser = Ge()),
            (o.eventsListeners = {}),
            (o.eventsAnyListeners = []),
            (o.modules = ie(o.__modules__)),
            n.modules && Array.isArray(n.modules)) &&
              (s = o.modules).push.apply(s, ie(n.modules));
            var u = {};
            o.modules.forEach(function (e) {
              e({
                swiper: o,
                extendParams: ct(n, u),
                on: o.on.bind(o),
                once: o.once.bind(o),
                off: o.off.bind(o),
                emit: o.emit.bind(o),
              });
            });
            var c = Oe({}, ut, u);
            return (
              (o.params = Oe({}, c, ft, n)),
              (o.originalParams = Oe({}, o.params)),
              (o.passedParams = Oe({}, n)),
              o.params &&
                o.params.on &&
                Object.keys(o.params.on).forEach(function (e) {
                  o.on(e, o.params.on[e]);
                }),
              o.params && o.params.onAny && o.onAny(o.params.onAny),
              (o.$ = je),
              Object.assign(o, {
                enabled: o.params.enabled,
                el: t,
                classNames: [],
                slides: je(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function () {
                  return "horizontal" === o.params.direction;
                },
                isVertical: function () {
                  return "vertical" === o.params.direction;
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
                allowSlideNext: o.params.allowSlideNext,
                allowSlidePrev: o.params.allowSlidePrev,
                touchEvents: (function () {
                  var e = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ],
                    t = ["pointerdown", "pointermove", "pointerup"];
                  return (
                    (o.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (o.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    o.support.touch || !o.params.simulateTouch
                      ? o.touchEventsTouch
                      : o.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  focusableElements: o.params.focusableElements,
                  lastClickTime: Le(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: o.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              o.emit("_swiper"),
              o.params.init && o.init(),
              o
            );
          }
          return (
            Z(
              e,
              [
                {
                  key: "enable",
                  value: function () {
                    var e = this;
                    e.enabled ||
                      ((e.enabled = !0),
                      e.params.grabCursor && e.setGrabCursor(),
                      e.emit("enable"));
                  },
                },
                {
                  key: "disable",
                  value: function () {
                    var e = this;
                    e.enabled &&
                      ((e.enabled = !1),
                      e.params.grabCursor && e.unsetGrabCursor(),
                      e.emit("disable"));
                  },
                },
                {
                  key: "setProgress",
                  value: function (e, t) {
                    var n = this;
                    e = Math.min(Math.max(e, 0), 1);
                    var r = n.minTranslate(),
                      a = (n.maxTranslate() - r) * e + r;
                    n.translateTo(a, "undefined" === typeof t ? 0 : t),
                      n.updateActiveIndex(),
                      n.updateSlidesClasses();
                  },
                },
                {
                  key: "emitContainerClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = e.el.className.split(" ").filter(function (t) {
                        return (
                          0 === t.indexOf("swiper") ||
                          0 === t.indexOf(e.params.containerModifierClass)
                        );
                      });
                      e.emit("_containerClasses", t.join(" "));
                    }
                  },
                },
                {
                  key: "getSlideClasses",
                  value: function (e) {
                    var t = this;
                    return t.destroyed
                      ? ""
                      : e.className
                          .split(" ")
                          .filter(function (e) {
                            return (
                              0 === e.indexOf("swiper-slide") ||
                              0 === e.indexOf(t.params.slideClass)
                            );
                          })
                          .join(" ");
                  },
                },
                {
                  key: "emitSlidesClasses",
                  value: function () {
                    var e = this;
                    if (e.params._emitClasses && e.el) {
                      var t = [];
                      e.slides.each(function (n) {
                        var r = e.getSlideClasses(n);
                        t.push({ slideEl: n, classNames: r }),
                          e.emit("_slideClass", n, r);
                      }),
                        e.emit("_slideClasses", t);
                    }
                  },
                },
                {
                  key: "slidesPerViewDynamic",
                  value: function (e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    var n = this,
                      r = n.params,
                      a = n.slides,
                      i = n.slidesGrid,
                      l = n.slidesSizesGrid,
                      s = n.size,
                      o = n.activeIndex,
                      u = 1;
                    if (r.centeredSlides) {
                      for (
                        var c, d = a[o].swiperSlideSize, f = o + 1;
                        f < a.length;
                        f += 1
                      )
                        a[f] &&
                          !c &&
                          ((u += 1),
                          (d += a[f].swiperSlideSize) > s && (c = !0));
                      for (var p = o - 1; p >= 0; p -= 1)
                        a[p] &&
                          !c &&
                          ((u += 1),
                          (d += a[p].swiperSlideSize) > s && (c = !0));
                    } else if ("current" === e)
                      for (var h = o + 1; h < a.length; h += 1) {
                        (t ? i[h] + l[h] - i[o] < s : i[h] - i[o] < s) &&
                          (u += 1);
                      }
                    else
                      for (var m = o - 1; m >= 0; m -= 1) {
                        i[o] - i[m] < s && (u += 1);
                      }
                    return u;
                  },
                },
                {
                  key: "update",
                  value: function () {
                    var e = this;
                    if (e && !e.destroyed) {
                      var t = e.snapGrid,
                        n = e.params;
                      n.breakpoints && e.setBreakpoint(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.updateProgress(),
                        e.updateSlidesClasses(),
                        e.params.freeMode && e.params.freeMode.enabled
                          ? (r(), e.params.autoHeight && e.updateAutoHeight())
                          : (("auto" === e.params.slidesPerView ||
                              e.params.slidesPerView > 1) &&
                            e.isEnd &&
                            !e.params.centeredSlides
                              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                              : e.slideTo(e.activeIndex, 0, !1, !0)) || r(),
                        n.watchOverflow &&
                          t !== e.snapGrid &&
                          e.checkOverflow(),
                        e.emit("update");
                    }
                    function r() {
                      var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        n = Math.min(
                          Math.max(t, e.maxTranslate()),
                          e.minTranslate()
                        );
                      e.setTranslate(n),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                    }
                  },
                },
                {
                  key: "changeDirection",
                  value: function (e, t) {
                    void 0 === t && (t = !0);
                    var n = this,
                      r = n.params.direction;
                    return (
                      e || (e = "horizontal" === r ? "vertical" : "horizontal"),
                      e === r ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (n.$el
                          .removeClass(
                            "".concat(n.params.containerModifierClass).concat(r)
                          )
                          .addClass(
                            "".concat(n.params.containerModifierClass).concat(e)
                          ),
                        n.emitContainerClasses(),
                        (n.params.direction = e),
                        n.slides.each(function (t) {
                          "vertical" === e
                            ? (t.style.width = "")
                            : (t.style.height = "");
                        }),
                        n.emit("changeDirection"),
                        t && n.update()),
                      n
                    );
                  },
                },
                {
                  key: "mount",
                  value: function (e) {
                    var t = this;
                    if (t.mounted) return !0;
                    var n = je(e || t.params.el);
                    if (!(e = n[0])) return !1;
                    e.swiper = t;
                    var r = function () {
                        return ".".concat(
                          (t.params.wrapperClass || "")
                            .trim()
                            .split(" ")
                            .join(".")
                        );
                      },
                      a = (function () {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                          var t = je(e.shadowRoot.querySelector(r()));
                          return (
                            (t.children = function (e) {
                              return n.children(e);
                            }),
                            t
                          );
                        }
                        return n.children
                          ? n.children(r())
                          : je(n).children(r());
                      })();
                    if (0 === a.length && t.params.createElements) {
                      var i = ue().createElement("div");
                      (a = je(i)),
                        (i.className = t.params.wrapperClass),
                        n.append(i),
                        n
                          .children(".".concat(t.params.slideClass))
                          .each(function (e) {
                            a.append(e);
                          });
                    }
                    return (
                      Object.assign(t, {
                        $el: n,
                        el: e,
                        $wrapperEl: a,
                        wrapperEl: a[0],
                        mounted: !0,
                        rtl:
                          "rtl" === e.dir.toLowerCase() ||
                          "rtl" === n.css("direction"),
                        rtlTranslate:
                          "horizontal" === t.params.direction &&
                          ("rtl" === e.dir.toLowerCase() ||
                            "rtl" === n.css("direction")),
                        wrongRTL: "-webkit-box" === a.css("display"),
                      }),
                      !0
                    );
                  },
                },
                {
                  key: "init",
                  value: function (e) {
                    var t = this;
                    return (
                      t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                          ? t.slideTo(
                              t.params.initialSlide + t.loopedSlides,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            )
                          : t.slideTo(
                              t.params.initialSlide,
                              0,
                              t.params.runCallbacksOnInit,
                              !1,
                              !0
                            ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                      t
                    );
                  },
                },
                {
                  key: "destroy",
                  value: function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var n = this,
                      r = n.params,
                      a = n.$el,
                      i = n.$wrapperEl,
                      l = n.slides;
                    return (
                      "undefined" === typeof n.params ||
                        n.destroyed ||
                        (n.emit("beforeDestroy"),
                        (n.initialized = !1),
                        n.detachEvents(),
                        r.loop && n.loopDestroy(),
                        t &&
                          (n.removeClasses(),
                          a.removeAttr("style"),
                          i.removeAttr("style"),
                          l &&
                            l.length &&
                            l
                              .removeClass(
                                [
                                  r.slideVisibleClass,
                                  r.slideActiveClass,
                                  r.slideNextClass,
                                  r.slidePrevClass,
                                ].join(" ")
                              )
                              .removeAttr("style")
                              .removeAttr("data-swiper-slide-index")),
                        n.emit("destroy"),
                        Object.keys(n.eventsListeners).forEach(function (e) {
                          n.off(e);
                        }),
                        !1 !== e &&
                          ((n.$el[0].swiper = null),
                          (function (e) {
                            var t = e;
                            Object.keys(t).forEach(function (e) {
                              try {
                                t[e] = null;
                              } catch (n) {}
                              try {
                                delete t[e];
                              } catch (n) {}
                            });
                          })(n)),
                        (n.destroyed = !0)),
                      null
                    );
                  },
                },
              ],
              [
                {
                  key: "extendDefaults",
                  value: function (e) {
                    Oe(ft, e);
                  },
                },
                {
                  key: "extendedDefaults",
                  get: function () {
                    return ft;
                  },
                },
                {
                  key: "defaults",
                  get: function () {
                    return ut;
                  },
                },
                {
                  key: "installModule",
                  value: function (t) {
                    e.prototype.__modules__ || (e.prototype.__modules__ = []);
                    var n = e.prototype.__modules__;
                    "function" === typeof t && n.indexOf(t) < 0 && n.push(t);
                  },
                },
                {
                  key: "use",
                  value: function (t) {
                    return Array.isArray(t)
                      ? (t.forEach(function (t) {
                          return e.installModule(t);
                        }),
                        e)
                      : (e.installModule(t), e);
                  },
                },
              ]
            ),
            e
          );
        })();
      Object.keys(dt).forEach(function (e) {
        Object.keys(dt[e]).forEach(function (t) {
          pt.prototype[t] = dt[e][t];
        });
      }),
        pt.use([
          function (e) {
            var t = e.swiper,
              n = e.on,
              r = e.emit,
              a = de(),
              i = null,
              l = null,
              s = function () {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              o = function () {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            n("init", function () {
              t.params.resizeObserver && "undefined" !== typeof a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((i = new ResizeObserver(function (e) {
                    l = a.requestAnimationFrame(function () {
                      var n = t.width,
                        r = t.height,
                        a = n,
                        i = r;
                      e.forEach(function (e) {
                        var n = e.contentBoxSize,
                          r = e.contentRect,
                          l = e.target;
                        (l && l !== t.el) ||
                          ((a = r ? r.width : (n[0] || n).inlineSize),
                          (i = r ? r.height : (n[0] || n).blockSize));
                      }),
                        (a === n && i === r) || s();
                    });
                  })),
                  i.observe(t.el))
                : (a.addEventListener("resize", s),
                  a.addEventListener("orientationchange", o));
            }),
              n("destroy", function () {
                l && a.cancelAnimationFrame(l),
                  i && i.unobserve && t.el && (i.unobserve(t.el), (i = null)),
                  a.removeEventListener("resize", s),
                  a.removeEventListener("orientationchange", o);
              });
          },
          function (e) {
            var t = e.swiper,
              n = e.extendParams,
              r = e.on,
              a = e.emit,
              i = [],
              l = de(),
              s = function (e, t) {
                void 0 === t && (t = {});
                var n = new (l.MutationObserver || l.WebkitMutationObserver)(
                  function (e) {
                    if (1 !== e.length) {
                      var t = function () {
                        a("observerUpdate", e[0]);
                      };
                      l.requestAnimationFrame
                        ? l.requestAnimationFrame(t)
                        : l.setTimeout(t, 0);
                    } else a("observerUpdate", e[0]);
                  }
                );
                n.observe(e, {
                  attributes:
                    "undefined" === typeof t.attributes || t.attributes,
                  childList: "undefined" === typeof t.childList || t.childList,
                  characterData:
                    "undefined" === typeof t.characterData || t.characterData,
                }),
                  i.push(n);
              };
            n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", function () {
                if (t.params.observer) {
                  if (t.params.observeParents)
                    for (var e = t.$el.parents(), n = 0; n < e.length; n += 1)
                      s(e[n]);
                  s(t.$el[0], { childList: t.params.observeSlideChildren }),
                    s(t.$wrapperEl[0], { attributes: !1 });
                }
              }),
              r("destroy", function () {
                i.forEach(function (e) {
                  e.disconnect();
                }),
                  i.splice(0, i.length);
              });
          },
        ]);
      var ht = pt;
      function mt(e) {
        return (
          void 0 === e && (e = ""),
          ".".concat(
            e
              .trim()
              .replace(/([\.:!\/])/g, "\\$1")
              .replace(/ /g, ".")
          )
        );
      }
      function vt(e) {
        var t,
          n = e.swiper,
          r = e.extendParams,
          a = e.on,
          i = e.emit,
          l = "swiper-pagination";
        r({
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
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "".concat(l, "-bullet"),
            bulletActiveClass: "".concat(l, "-bullet-active"),
            modifierClass: "".concat(l, "-"),
            currentClass: "".concat(l, "-current"),
            totalClass: "".concat(l, "-total"),
            hiddenClass: "".concat(l, "-hidden"),
            progressbarFillClass: "".concat(l, "-progressbar-fill"),
            progressbarOppositeClass: "".concat(l, "-progressbar-opposite"),
            clickableClass: "".concat(l, "-clickable"),
            lockClass: "".concat(l, "-lock"),
            horizontalClass: "".concat(l, "-horizontal"),
            verticalClass: "".concat(l, "-vertical"),
          },
        }),
          (n.pagination = { el: null, $el: null, bullets: [] });
        var s = 0;
        function o() {
          return (
            !n.params.pagination.el ||
            !n.pagination.el ||
            !n.pagination.$el ||
            0 === n.pagination.$el.length
          );
        }
        function u(e, t) {
          var r = n.params.pagination.bulletActiveClass;
          e[t]()
            .addClass("".concat(r, "-").concat(t))
            [t]()
            .addClass("".concat(r, "-").concat(t, "-").concat(t));
        }
        function c() {
          var e = n.rtl,
            r = n.params.pagination;
          if (!o()) {
            var a,
              l =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              c = n.pagination.$el,
              d = n.params.loop
                ? Math.ceil((l - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
            if (
              (n.params.loop
                ? ((a = Math.ceil(
                    (n.activeIndex - n.loopedSlides) / n.params.slidesPerGroup
                  )) >
                    l - 1 - 2 * n.loopedSlides && (a -= l - 2 * n.loopedSlides),
                  a > d - 1 && (a -= d),
                  a < 0 && "bullets" !== n.params.paginationType && (a = d + a))
                : (a =
                    "undefined" !== typeof n.snapIndex
                      ? n.snapIndex
                      : n.activeIndex || 0),
              "bullets" === r.type &&
                n.pagination.bullets &&
                n.pagination.bullets.length > 0)
            ) {
              var f,
                p,
                h,
                m = n.pagination.bullets;
              if (
                (r.dynamicBullets &&
                  ((t = m
                    .eq(0)
                    [n.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  c.css(
                    n.isHorizontal() ? "width" : "height",
                    "".concat(t * (r.dynamicMainBullets + 4), "px")
                  ),
                  r.dynamicMainBullets > 1 &&
                    void 0 !== n.previousIndex &&
                    ((s += a - (n.previousIndex - n.loopedSlides || 0)) >
                    r.dynamicMainBullets - 1
                      ? (s = r.dynamicMainBullets - 1)
                      : s < 0 && (s = 0)),
                  (f = Math.max(a - s, 0)),
                  (h =
                    ((p = f + (Math.min(m.length, r.dynamicMainBullets) - 1)) +
                      f) /
                    2)),
                m.removeClass(
                  ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                    .map(function (e) {
                      return "".concat(r.bulletActiveClass).concat(e);
                    })
                    .join(" ")
                ),
                c.length > 1)
              )
                m.each(function (e) {
                  var t = je(e),
                    n = t.index();
                  n === a && t.addClass(r.bulletActiveClass),
                    r.dynamicBullets &&
                      (n >= f &&
                        n <= p &&
                        t.addClass("".concat(r.bulletActiveClass, "-main")),
                      n === f && u(t, "prev"),
                      n === p && u(t, "next"));
                });
              else {
                var v = m.eq(a),
                  g = v.index();
                if ((v.addClass(r.bulletActiveClass), r.dynamicBullets)) {
                  for (var y = m.eq(f), b = m.eq(p), w = f; w <= p; w += 1)
                    m.eq(w).addClass("".concat(r.bulletActiveClass, "-main"));
                  if (n.params.loop)
                    if (g >= m.length) {
                      for (var x = r.dynamicMainBullets; x >= 0; x -= 1)
                        m.eq(m.length - x).addClass(
                          "".concat(r.bulletActiveClass, "-main")
                        );
                      m.eq(m.length - r.dynamicMainBullets - 1).addClass(
                        "".concat(r.bulletActiveClass, "-prev")
                      );
                    } else u(y, "prev"), u(b, "next");
                  else u(y, "prev"), u(b, "next");
                }
              }
              if (r.dynamicBullets) {
                var k = Math.min(m.length, r.dynamicMainBullets + 4),
                  S = (t * k - t) / 2 - h * t,
                  C = e ? "right" : "left";
                m.css(n.isHorizontal() ? C : "top", "".concat(S, "px"));
              }
            }
            if (
              ("fraction" === r.type &&
                (c
                  .find(mt(r.currentClass))
                  .text(r.formatFractionCurrent(a + 1)),
                c.find(mt(r.totalClass)).text(r.formatFractionTotal(d))),
              "progressbar" === r.type)
            ) {
              var E;
              E = r.progressbarOpposite
                ? n.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : n.isHorizontal()
                ? "horizontal"
                : "vertical";
              var A = (a + 1) / d,
                T = 1,
                N = 1;
              "horizontal" === E ? (T = A) : (N = A),
                c
                  .find(mt(r.progressbarFillClass))
                  .transform(
                    "translate3d(0,0,0) scaleX("
                      .concat(T, ") scaleY(")
                      .concat(N, ")")
                  )
                  .transition(n.params.speed);
            }
            "custom" === r.type && r.renderCustom
              ? (c.html(r.renderCustom(n, a + 1, d)),
                i("paginationRender", c[0]))
              : i("paginationUpdate", c[0]),
              n.params.watchOverflow &&
                n.enabled &&
                c[n.isLocked ? "addClass" : "removeClass"](r.lockClass);
          }
        }
        function d() {
          var e = n.params.pagination;
          if (!o()) {
            var t =
                n.virtual && n.params.virtual.enabled
                  ? n.virtual.slides.length
                  : n.slides.length,
              r = n.pagination.$el,
              a = "";
            if ("bullets" === e.type) {
              var l = n.params.loop
                ? Math.ceil((t - 2 * n.loopedSlides) / n.params.slidesPerGroup)
                : n.snapGrid.length;
              n.params.freeMode &&
                n.params.freeMode.enabled &&
                !n.params.loop &&
                l > t &&
                (l = t);
              for (var s = 0; s < l; s += 1)
                e.renderBullet
                  ? (a += e.renderBullet.call(n, s, e.bulletClass))
                  : (a += "<"
                      .concat(e.bulletElement, ' class="')
                      .concat(e.bulletClass, '"></')
                      .concat(e.bulletElement, ">"));
              r.html(a), (n.pagination.bullets = r.find(mt(e.bulletClass)));
            }
            "fraction" === e.type &&
              ((a = e.renderFraction
                ? e.renderFraction.call(n, e.currentClass, e.totalClass)
                : '<span class="'.concat(e.currentClass, '"></span>') +
                  " / " +
                  '<span class="'.concat(e.totalClass, '"></span>')),
              r.html(a)),
              "progressbar" === e.type &&
                ((a = e.renderProgressbar
                  ? e.renderProgressbar.call(n, e.progressbarFillClass)
                  : '<span class="'.concat(
                      e.progressbarFillClass,
                      '"></span>'
                    )),
                r.html(a)),
              "custom" !== e.type && i("paginationRender", n.pagination.$el[0]);
          }
        }
        function f() {
          n.params.pagination = (function (e, t, n, r) {
            var a = ue();
            return (
              e.params.createElements &&
                Object.keys(r).forEach(function (i) {
                  if (!n[i] && !0 === n.auto) {
                    var l = e.$el.children(".".concat(r[i]))[0];
                    l ||
                      (((l = a.createElement("div")).className = r[i]),
                      e.$el.append(l)),
                      (n[i] = l),
                      (t[i] = l);
                  }
                }),
              n
            );
          })(n, n.originalParams.pagination, n.params.pagination, {
            el: "swiper-pagination",
          });
          var e = n.params.pagination;
          if (e.el) {
            var t = je(e.el);
            0 !== t.length &&
              (n.params.uniqueNavElements &&
                "string" === typeof e.el &&
                t.length > 1 &&
                (t = n.$el.find(e.el)).length > 1 &&
                (t = t.filter(function (e) {
                  return je(e).parents(".swiper")[0] === n.el;
                })),
              "bullets" === e.type &&
                e.clickable &&
                t.addClass(e.clickableClass),
              t.addClass(e.modifierClass + e.type),
              t.addClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              "bullets" === e.type &&
                e.dynamicBullets &&
                (t.addClass(
                  "".concat(e.modifierClass).concat(e.type, "-dynamic")
                ),
                (s = 0),
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
              "progressbar" === e.type &&
                e.progressbarOpposite &&
                t.addClass(e.progressbarOppositeClass),
              e.clickable &&
                t.on("click", mt(e.bulletClass), function (e) {
                  e.preventDefault();
                  var t = je(this).index() * n.params.slidesPerGroup;
                  n.params.loop && (t += n.loopedSlides), n.slideTo(t);
                }),
              Object.assign(n.pagination, { $el: t, el: t[0] }),
              n.enabled || t.addClass(e.lockClass));
          }
        }
        function p() {
          var e = n.params.pagination;
          if (!o()) {
            var t = n.pagination.$el;
            t.removeClass(e.hiddenClass),
              t.removeClass(e.modifierClass + e.type),
              t.removeClass(
                n.isHorizontal() ? e.horizontalClass : e.verticalClass
              ),
              n.pagination.bullets &&
                n.pagination.bullets.removeClass &&
                n.pagination.bullets.removeClass(e.bulletActiveClass),
              e.clickable && t.off("click", mt(e.bulletClass));
          }
        }
        a("init", function () {
          f(), d(), c();
        }),
          a("activeIndexChange", function () {
            (n.params.loop || "undefined" === typeof n.snapIndex) && c();
          }),
          a("snapIndexChange", function () {
            n.params.loop || c();
          }),
          a("slidesLengthChange", function () {
            n.params.loop && (d(), c());
          }),
          a("snapGridLengthChange", function () {
            n.params.loop || (d(), c());
          }),
          a("destroy", function () {
            p();
          }),
          a("enable disable", function () {
            var e = n.pagination.$el;
            e &&
              e[n.enabled ? "removeClass" : "addClass"](
                n.params.pagination.lockClass
              );
          }),
          a("lock unlock", function () {
            c();
          }),
          a("click", function (e, t) {
            var r = t.target,
              a = n.pagination.$el;
            if (
              n.params.pagination.el &&
              n.params.pagination.hideOnClick &&
              a.length > 0 &&
              !je(r).hasClass(n.params.pagination.bulletClass)
            ) {
              if (
                n.navigation &&
                ((n.navigation.nextEl && r === n.navigation.nextEl) ||
                  (n.navigation.prevEl && r === n.navigation.prevEl))
              )
                return;
              var l = a.hasClass(n.params.pagination.hiddenClass);
              i(!0 === l ? "paginationShow" : "paginationHide"),
                a.toggleClass(n.params.pagination.hiddenClass);
            }
          }),
          Object.assign(n.pagination, {
            render: d,
            update: c,
            init: f,
            destroy: p,
          });
      }
      function gt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function yt(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function bt(e, t) {
        var n = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return n.indexOf(e) < 0;
          })
          .forEach(function (n) {
            "undefined" === typeof e[n]
              ? (e[n] = t[n])
              : yt(t[n]) && yt(e[n]) && Object.keys(t[n]).length > 0
              ? t[n].__swiper__
                ? (e[n] = t[n])
                : bt(e[n], t[n])
              : (e[n] = t[n]);
          });
      }
      function wt(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function xt(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function kt(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function St(e) {
        void 0 === e && (e = "");
        var t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          n = [];
        return (
          t.forEach(function (e) {
            n.indexOf(e) < 0 && n.push(e);
          }),
          n.join(" ")
        );
      }
      var Ct = [
        "modules",
        "init",
        "_direction",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_preloadImages",
        "updateOnImagesReady",
        "_loop",
        "_loopAdditionalSlides",
        "_loopedSlides",
        "_loopFillGroupWithBlank",
        "loopPreventsSlide",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideBlankClass",
        "slideActiveClass",
        "slideDuplicateActiveClass",
        "slideVisibleClass",
        "slideDuplicateClass",
        "slideNextClass",
        "slideDuplicateNextClass",
        "slidePrevClass",
        "slideDuplicatePrevClass",
        "wrapperClass",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "lazy",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
      ];
      function Et(e, t) {
        var n = t.slidesPerView;
        if (t.breakpoints) {
          var r = ht.prototype.getBreakpoint(t.breakpoints),
            a = r in t.breakpoints ? t.breakpoints[r] : void 0;
          a && a.slidesPerView && (n = a.slidesPerView);
        }
        var i = Math.ceil(parseFloat(t.loopedSlides || n, 10));
        return (i += t.loopAdditionalSlides) > e.length && (i = e.length), i;
      }
      function At(e) {
        var n = [];
        return (
          t.Children.toArray(e).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? n.push(e)
              : e.props &&
                e.props.children &&
                At(e.props.children).forEach(function (e) {
                  return n.push(e);
                });
          }),
          n
        );
      }
      function Tt(e) {
        var n = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          t.Children.toArray(e).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) n.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var t = At(e.props.children);
              t.length > 0
                ? t.forEach(function (e) {
                    return n.push(e);
                  })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: n, slots: r }
        );
      }
      function Nt(e) {
        var t,
          n,
          r,
          a,
          i,
          l = e.swiper,
          s = e.slides,
          o = e.passedParams,
          u = e.changedParams,
          c = e.nextEl,
          d = e.prevEl,
          f = e.scrollbarEl,
          p = e.paginationEl,
          h = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          m = l.params,
          v = l.pagination,
          g = l.navigation,
          y = l.scrollbar,
          b = l.virtual,
          w = l.thumbs;
        u.includes("thumbs") &&
          o.thumbs &&
          o.thumbs.swiper &&
          m.thumbs &&
          !m.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            o.controller &&
            o.controller.control &&
            m.controller &&
            !m.controller.control &&
            (n = !0),
          u.includes("pagination") &&
            o.pagination &&
            (o.pagination.el || p) &&
            (m.pagination || !1 === m.pagination) &&
            v &&
            !v.el &&
            (r = !0),
          u.includes("scrollbar") &&
            o.scrollbar &&
            (o.scrollbar.el || f) &&
            (m.scrollbar || !1 === m.scrollbar) &&
            y &&
            !y.el &&
            (a = !0),
          u.includes("navigation") &&
            o.navigation &&
            (o.navigation.prevEl || d) &&
            (o.navigation.nextEl || c) &&
            (m.navigation || !1 === m.navigation) &&
            g &&
            !g.prevEl &&
            !g.nextEl &&
            (i = !0);
        (h.forEach(function (e) {
          if (yt(m[e]) && yt(o[e])) bt(m[e], o[e]);
          else {
            var t = o[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (m[e] = o[e])
              : !1 === t &&
                l[(n = e)] &&
                (l[n].destroy(),
                "navigation" === n
                  ? ((m[n].prevEl = void 0),
                    (m[n].nextEl = void 0),
                    (l[n].prevEl = void 0),
                    (l[n].nextEl = void 0))
                  : ((m[n].el = void 0), (l[n].el = void 0)));
          }
          var n;
        }),
        h.includes("controller") &&
          !n &&
          l.controller &&
          l.controller.control &&
          m.controller &&
          m.controller.control &&
          (l.controller.control = m.controller.control),
        u.includes("children") && b && m.virtual.enabled
          ? ((b.slides = s), b.update(!0))
          : u.includes("children") &&
            l.lazy &&
            l.params.lazy.enabled &&
            l.lazy.load(),
        t) &&
          w.init() &&
          w.update(!0);
        n && (l.controller.control = m.controller.control),
          r && (p && (m.pagination.el = p), v.init(), v.render(), v.update()),
          a &&
            (f && (m.scrollbar.el = f),
            y.init(),
            y.updateSize(),
            y.setTranslate()),
          i &&
            (c && (m.navigation.nextEl = c),
            d && (m.navigation.prevEl = d),
            g.init(),
            g.update()),
          u.includes("allowSlideNext") && (l.allowSlideNext = o.allowSlideNext),
          u.includes("allowSlidePrev") && (l.allowSlidePrev = o.allowSlidePrev),
          u.includes("direction") && l.changeDirection(o.direction, !1),
          l.update();
      }
      function Mt(e, n) {
        return "undefined" === typeof window
          ? (0, t.useEffect)(e, n)
          : (0, t.useLayoutEffect)(e, n);
      }
      var jt = (0, t.createContext)(null),
        zt = (0, t.createContext)(null),
        It = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function Lt() {
        return (
          (Lt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Lt.apply(this, arguments)
        );
      }
      var Pt = (0, t.forwardRef)(function (e, n) {
        var r = void 0 === e ? {} : e,
          a = r.className,
          i = r.tag,
          l = void 0 === i ? "div" : i,
          s = r.wrapperTag,
          o = void 0 === s ? "div" : s,
          u = r.children,
          c = r.onSwiper,
          d = gt(r, It),
          f = !1,
          p = L((0, t.useState)("swiper"), 2),
          h = p[0],
          m = p[1],
          v = L((0, t.useState)(null), 2),
          g = v[0],
          y = v[1],
          b = L((0, t.useState)(!1), 2),
          w = b[0],
          x = b[1],
          k = (0, t.useRef)(!1),
          S = (0, t.useRef)(null),
          C = (0, t.useRef)(null),
          E = (0, t.useRef)(null),
          A = (0, t.useRef)(null),
          T = (0, t.useRef)(null),
          N = (0, t.useRef)(null),
          M = (0, t.useRef)(null),
          j = (0, t.useRef)(null),
          z = (function (e) {
            void 0 === e && (e = {});
            var t = { on: {} },
              n = {},
              r = {};
            bt(t, ht.defaults),
              bt(t, ht.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            var a = {},
              i = Ct.map(function (e) {
                return e.replace(/_/, "");
              });
            return (
              Object.keys(e).forEach(function (l) {
                i.indexOf(l) >= 0
                  ? yt(e[l])
                    ? ((t[l] = {}), (r[l] = {}), bt(t[l], e[l]), bt(r[l], e[l]))
                    : ((t[l] = e[l]), (r[l] = e[l]))
                  : 0 === l.search(/on[A-Z]/) && "function" === typeof e[l]
                  ? (n["".concat(l[2].toLowerCase()).concat(l.substr(3))] =
                      e[l])
                  : (a[l] = e[l]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: r, rest: a, events: n }
            );
          })(d),
          I = z.params,
          P = z.passedParams,
          D = z.rest,
          B = z.events,
          O = Tt(u),
          _ = O.slides,
          F = O.slots,
          R = function () {
            x(!w);
          };
        Object.assign(I.on, {
          _containerClasses: function (e, t) {
            m(t);
          },
        });
        var Q = function () {
          if (
            (Object.assign(I.on, B),
            (f = !0),
            (C.current = new ht(I)),
            (C.current.loopCreate = function () {}),
            (C.current.loopDestroy = function () {}),
            I.loop && (C.current.loopedSlides = Et(_, I)),
            C.current.virtual && C.current.params.virtual.enabled)
          ) {
            C.current.virtual.slides = _;
            var e = {
              cache: !1,
              slides: _,
              renderExternal: y,
              renderExternalUpdate: !1,
            };
            bt(C.current.params.virtual, e),
              bt(C.current.originalParams.virtual, e);
          }
        };
        S.current || Q(), C.current && C.current.on("_beforeBreakpoint", R);
        return (
          (0, t.useEffect)(function () {
            return function () {
              C.current && C.current.off("_beforeBreakpoint", R);
            };
          }),
          (0, t.useEffect)(function () {
            !k.current &&
              C.current &&
              (C.current.emitSlidesClasses(), (k.current = !0));
          }),
          Mt(function () {
            if ((n && (n.current = S.current), S.current))
              return (
                C.current.destroyed && Q(),
                (function (e, t) {
                  var n = e.el,
                    r = e.nextEl,
                    a = e.prevEl,
                    i = e.paginationEl,
                    l = e.scrollbarEl,
                    s = e.swiper;
                  wt(t) &&
                    r &&
                    a &&
                    ((s.params.navigation.nextEl = r),
                    (s.originalParams.navigation.nextEl = r),
                    (s.params.navigation.prevEl = a),
                    (s.originalParams.navigation.prevEl = a)),
                    xt(t) &&
                      i &&
                      ((s.params.pagination.el = i),
                      (s.originalParams.pagination.el = i)),
                    kt(t) &&
                      l &&
                      ((s.params.scrollbar.el = l),
                      (s.originalParams.scrollbar.el = l)),
                    s.init(n);
                })(
                  {
                    el: S.current,
                    nextEl: T.current,
                    prevEl: N.current,
                    paginationEl: M.current,
                    scrollbarEl: j.current,
                    swiper: C.current,
                  },
                  I
                ),
                c && c(C.current),
                function () {
                  C.current &&
                    !C.current.destroyed &&
                    C.current.destroy(!0, !1);
                }
              );
          }, []),
          Mt(function () {
            !f &&
              B &&
              C.current &&
              Object.keys(B).forEach(function (e) {
                C.current.on(e, B[e]);
              });
            var e = (function (e, t, n, r) {
              var a = [];
              if (!t) return a;
              var i = function (e) {
                  a.indexOf(e) < 0 && a.push(e);
                },
                l = r.map(function (e) {
                  return e.key;
                }),
                s = n.map(function (e) {
                  return e.key;
                });
              return (
                l.join("") !== s.join("") && i("children"),
                r.length !== n.length && i("children"),
                Ct.filter(function (e) {
                  return "_" === e[0];
                })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (n) {
                    if (n in e && n in t)
                      if (yt(e[n]) && yt(t[n])) {
                        var r = Object.keys(e[n]),
                          a = Object.keys(t[n]);
                        r.length !== a.length
                          ? i(n)
                          : (r.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }),
                            a.forEach(function (r) {
                              e[n][r] !== t[n][r] && i(n);
                            }));
                      } else e[n] !== t[n] && i(n);
                  }),
                a
              );
            })(P, E.current, _, A.current);
            return (
              (E.current = P),
              (A.current = _),
              e.length &&
                C.current &&
                !C.current.destroyed &&
                Nt({
                  swiper: C.current,
                  slides: _,
                  passedParams: P,
                  changedParams: e,
                  nextEl: T.current,
                  prevEl: N.current,
                  scrollbarEl: j.current,
                  paginationEl: M.current,
                }),
              function () {
                B &&
                  C.current &&
                  Object.keys(B).forEach(function (e) {
                    C.current.off(e, B[e]);
                  });
              }
            );
          }),
          Mt(
            function () {
              var e;
              !(e = C.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [g]
          ),
          t.createElement(
            l,
            Lt(
              {
                ref: S,
                className: St("".concat(h).concat(a ? " ".concat(a) : "")),
              },
              D
            ),
            t.createElement(
              zt.Provider,
              { value: C.current },
              F["container-start"],
              t.createElement(
                o,
                { className: "swiper-wrapper" },
                F["wrapper-start"],
                I.virtual
                  ? (function (e, n, r) {
                      if (!r) return null;
                      var a = e.isHorizontal()
                        ? ze(
                            {},
                            e.rtlTranslate ? "right" : "left",
                            "".concat(r.offset, "px")
                          )
                        : { top: "".concat(r.offset, "px") };
                      return n
                        .filter(function (e, t) {
                          return t >= r.from && t <= r.to;
                        })
                        .map(function (n) {
                          return t.cloneElement(n, { swiper: e, style: a });
                        });
                    })(C.current, _, g)
                  : !I.loop || (C.current && C.current.destroyed)
                  ? _.map(function (e) {
                      return t.cloneElement(e, { swiper: C.current });
                    })
                  : (function (e, n, r) {
                      var a = n.map(function (n, r) {
                        return t.cloneElement(n, {
                          swiper: e,
                          "data-swiper-slide-index": r,
                        });
                      });
                      function i(e, n, a) {
                        return t.cloneElement(e, {
                          key: ""
                            .concat(e.key, "-duplicate-")
                            .concat(n, "-")
                            .concat(a),
                          className: ""
                            .concat(e.props.className || "", " ")
                            .concat(r.slideDuplicateClass),
                        });
                      }
                      if (r.loopFillGroupWithBlank) {
                        var l =
                          r.slidesPerGroup - (a.length % r.slidesPerGroup);
                        if (l !== r.slidesPerGroup)
                          for (var s = 0; s < l; s += 1) {
                            var o = t.createElement("div", {
                              className: ""
                                .concat(r.slideClass, " ")
                                .concat(r.slideBlankClass),
                            });
                            a.push(o);
                          }
                      }
                      "auto" !== r.slidesPerView ||
                        r.loopedSlides ||
                        (r.loopedSlides = a.length);
                      var u = Et(a, r),
                        c = [],
                        d = [];
                      return (
                        a.forEach(function (e, t) {
                          t < u && d.push(i(e, t, "prepend")),
                            t < a.length &&
                              t >= a.length - u &&
                              c.push(i(e, t, "append"));
                        }),
                        e && (e.loopedSlides = u),
                        [].concat(c, ie(a), d)
                      );
                    })(C.current, _, I),
                F["wrapper-end"]
              ),
              wt(I) &&
                t.createElement(
                  t.Fragment,
                  null,
                  t.createElement("div", {
                    ref: N,
                    className: "swiper-button-prev",
                  }),
                  t.createElement("div", {
                    ref: T,
                    className: "swiper-button-next",
                  })
                ),
              kt(I) &&
                t.createElement("div", {
                  ref: j,
                  className: "swiper-scrollbar",
                }),
              xt(I) &&
                t.createElement("div", {
                  ref: M,
                  className: "swiper-pagination",
                }),
              F["container-end"]
            )
          )
        );
      });
      Pt.displayName = "Swiper";
      var Dt = [
        "tag",
        "children",
        "className",
        "swiper",
        "zoom",
        "virtualIndex",
      ];
      function Bt() {
        return (
          (Bt =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Bt.apply(this, arguments)
        );
      }
      var Ot = (0, t.forwardRef)(function (e, n) {
        var r = void 0 === e ? {} : e,
          a = r.tag,
          i = void 0 === a ? "div" : a,
          l = r.children,
          s = r.className,
          o = void 0 === s ? "" : s,
          u = r.swiper,
          c = r.zoom,
          d = r.virtualIndex,
          f = gt(r, Dt),
          p = (0, t.useRef)(null),
          h = L((0, t.useState)("swiper-slide"), 2),
          m = h[0],
          v = h[1];
        function g(e, t, n) {
          t === p.current && v(n);
        }
        Mt(function () {
          if ((n && (n.current = p.current), p.current && u)) {
            if (!u.destroyed)
              return (
                u.on("_slideClass", g),
                function () {
                  u && u.off("_slideClass", g);
                }
              );
            "swiper-slide" !== m && v("swiper-slide");
          }
        }),
          Mt(
            function () {
              u && p.current && !u.destroyed && v(u.getSlideClasses(p.current));
            },
            [u]
          );
        var y = {
            isActive:
              m.indexOf("swiper-slide-active") >= 0 ||
              m.indexOf("swiper-slide-duplicate-active") >= 0,
            isVisible: m.indexOf("swiper-slide-visible") >= 0,
            isDuplicate: m.indexOf("swiper-slide-duplicate") >= 0,
            isPrev:
              m.indexOf("swiper-slide-prev") >= 0 ||
              m.indexOf("swiper-slide-duplicate-prev") >= 0,
            isNext:
              m.indexOf("swiper-slide-next") >= 0 ||
              m.indexOf("swiper-slide-duplicate-next") >= 0,
          },
          b = function () {
            return "function" === typeof l ? l(y) : l;
          };
        return t.createElement(
          i,
          Bt(
            {
              ref: p,
              className: St("".concat(m).concat(o ? " ".concat(o) : "")),
              "data-swiper-slide-index": d,
            },
            f
          ),
          t.createElement(
            jt.Provider,
            { value: y },
            c
              ? t.createElement(
                  "div",
                  {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof c ? c : void 0,
                  },
                  b()
                )
              : b()
          )
        );
      });
      Ot.displayName = "SwiperSlide";
      var _t = function () {
          return (0, a.jsxs)("section", {
            id: "achievements",
            children: [
              (0, a.jsx)("h2", { children: "My Achievements" }),
              (0, a.jsxs)(Pt, {
                className: "container achievements_container",
                modules: [vt],
                spaceBetween: 50,
                slidesPerView: 1,
                pagination: { clickable: !0 },
                children: [
                  (0, a.jsxs)(Ot, {
                    className: "achievements",
                    children: [
                      (0, a.jsx)("div", {
                        className: "company_logo",
                        children: (0, a.jsx)("img", { src: re, alt: "" }),
                      }),
                      (0, a.jsx)("h2", { children: "AIR 1 on Wonderathon" }),
                      (0, a.jsx)("h5", {
                        className: "company_name",
                        children: "Meta Spark AR",
                      }),
                      (0, a.jsx)("small", {
                        className: "my_work",
                        children:
                          "Wonderathon is a National Level Hackathon Organised by Reskilll in collaboration with Meta Spark AR. The Hackathon is Based on Augmented Reality where the participants have to create something new on AR using Spark AR Studio.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(Ot, {
                    className: "achievements",
                    children: [
                      (0, a.jsx)("div", {
                        className: "company_logo",
                        children: (0, a.jsx)("img", { src: ae, alt: "" }),
                      }),
                      (0, a.jsx)("h2", { children: "3 \u2b50 Coder" }),
                      (0, a.jsx)("h5", {
                        className: "company_name",
                        children: "CodeChef",
                      }),
                      (0, a.jsx)("small", {
                        className: "my_work",
                        children:
                          "CodeChef is an online platform to help programmers hone their skills in algorithms, programming, and contests. It hosts 3 featured contests every month and the Winners also recieve Prizes and Goodies.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(Ot, {
                    className: "achievements",
                    children: [
                      (0, a.jsx)("div", {
                        className: "company_logo",
                        children: (0, a.jsx)("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmQAAAKICAYAAADel+ZFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAI/JJREFUeNrs3dtVHEmCgOGA0++SB8q1QKwFqke9CQ9UWNC0BV2yYJAFIAsGvfG2JQsGLBjkgbCAzZgKppFaFygqM27fd04dzs7Z3RFRF/6KiIzcu729DQAA5LNvCAAABBkAgCADAECQAQAIMgAA8vjNEAA12rs4WnzvP799fbo2OkB1n2mOvQAqia+7xzA+Xvzi/+Tz+LhMj7VIAwQZwOMD7CDF1+H4eLWj/7efxsd5CrRLowwIMoC/R9jhvQh7MfF/3ecUZ2fiDBBkQO8RFgNsmSLsWaZ/hjgDBBnQXYQd3IuwF4X98+7i7GSMs2vPFiDIgJYi7HmKsPh4Wck/+yqGWQy0Mc6+eBYBQQbUGmKLFGFvK/41bsJfS5przyogyIAaIizOhh2nEHvR2K8XlzRPUpyZNQMEGVBciC1C/bNhj/EhbPaauRAAEGRA1giLs2Fxc/4qtDcb9lBXKczOvCIAQQbMGWJD+GtZ8pkR+Y+41+xuOfPacACCDJgqxBYpxN4YjZ/6EFwEAAgyYMchtgx9L0tu61MKszNDAQgyYJsIu7taMj4sSz6NqzMBQQY8KsSGsJkNe2s0di7uMzsL7gQACDLgByG2CPaHzSnuM1sJM0CQATHEDlOIvTIaWXxKYbY2FCDIgP5CbBls1C8tzOJS5rmhAEEGtB1hdzf5PhZixYoXAKxcmQmCDGgzxFwxKcwAQQYIMbZwdweAE0dmgCAD6gqxIWz2hx0KMWEGCDIgT4g5Q0yYAYIMEGIIM0CQgRCjnzCLR2U4ZBYEGSDEKIDT/0GQAUIMYQYIMhBiIMxAkAFCjELD7NjmfxBkgBAjL1dlgiADhBjCDBBkIMRAmIEgA74TYs/TH0UhhjADQQZkCDE3/aa4MBujbGUoQJCBEIO8PofNURlnhgIEGQgxEGYgyICdxdgybPboCDFqDbN4htm5oQBBBrWG2Gp8vDAaNOBT2MyYrQ0FCDKoIcQOw2ZGTIghzABBBjOH2CJsZsReGQ064D6ZIMigqBA7CJsZMSGGMAMEGcwcYkNwuj7ceRccLguCDGYMMafrw/c59R8EGcwSYs4Sg19zhhkIMpgkxmKErYQYPDrMnGEGggyeHGLL4CwxeCpHZYAgg61CbBE2e2FeGg3YmY9hM2N2bShAkMHPQswRFjC9DynMbPwHQQZfhdgQHGEBc3JFJggy+G+IuXIS8ofZsSsyEWSCjH5jzJWTUI54RebSxn8EGfQTYm7+DeWKV2TGGbNLQ4EggzZDbBHc/Btq4R6ZCDJoLMSGYMM+1Mo9MhFkUHmI3W3Y/9NoQNVs/EeQQaUxZsM+tMfGfwQZVBJiNuxD+2z8R5BBoSHmhH3ojxP/EWRQSIgNwYZ96JkT/xFkkDHEnLAP3Bf3l61s/EeQwXwxtgybWTH7xIBvfUphtjYUCDKYJsQWwcGuwMM4WBZBBjsOsSHYJwY8nv1lCDLYQYjZJwbsgv1lCDLYMsaWwT4xYLfsL0OQwQNDbBHsEwOmZX8Zggx+EGJDsE8MmI/9ZQgyuBdi9okBOcX9ZfG0/3NDgSCj1xhz30mgFO6PiSCjuxBz30mgVO/DZn+ZZUwEGc2GWFyeXI2P340GULCbFGUnhgJBRmsxdpxizD4xoBZXYbOMuTYUCDJqD7FF2CxPvjQaQKU+pjC7NhQIMmoLsSGF2BujATTAMRkIMqqLsVVwjAXQJsdkIMgoPsQcYwH0Ih6TsbSMiSCjpBAbxh9nwTEWQH/eBcuYCDIyh9jdKft/Gg2gY3EZMx6TcWYoEGTMHWOWJwG+5rR/BBmzhdgQLE8C/IzT/hFkTBZilicBHi4ek3FsGRNBxi5jzPIkwHYsYyLIeHKIDcHyJMAuWMZEkPHoELM8CbB7ljERZDw4xixPAkzLMiaCjB+G2BAsTwLMyaGy/Ne+ISDde/LfYgxgVnFbyGVamaD3v8VmyLoOsUXYzIpZngTIy70xBZkg6zDEhrDZJ/bGaAAU5d0YZSvDIMhoP8bi1ZPxzf7MaAAUKd4bM86WrQ2FIKO9EFuEzazYS6MBUIWPKcxs+hdkNBBi8Uyx1fj43WgAVCeeXRYPlD0xFIKMemNsGTazYpYnAerm7DJBRoUhNgRnigG0yC2YGuUcsvZibBWcKQbQqrj9xNllLf79NkPWTIgtgjPFAHoSN/0fO7tMkFFGiMVN+3Gf2FujAdAdm/4FGQXE2DLYtA9ACFdhc0SGTf+CjBlDbAg27QPwdzb9CzJmirHV+COetm9WDIDvcdK/IGPCEDsIm1kxJ+0D8BBO+hdk7DDEnLQPwLbipv94JeaZoRBkbB9ji+AoCwCeLp70v3REhiDjcSH2PIXYG6MBwI7E2bKTMcpWhkKQ8esYO0wxZtM+AFNwRIYg4ychNgRHWQAwn3dhM2Nm078gI8VYPMZiFcyKATAvR2QIMsyKAVAIB8pmtm8IssXYavzxbzEGQAHi0UqX6ep+cnSBGbLZQ8wBrwCUzIGyGZghmzfGVuOPf4kxAAoWj1y6Tlf9M1cjmCGbJcTMigFQI7NlMzFDNn2MrYJZMQDqZLZsrl4wQzZZiJkVA6AlZssmZIZsmhhbBbNiALTFbNmU7WCGbKchZlYMgB6YLdsxM2S7i7FVMCsGQB/Mlu26I8yQPTnEzIoB0DOzZTtghuxpMbYKZsUA6JvZsl00hRmyrUJsGH+cCzEA+Ip7Ym7JDNnjY+x4/HEpxgDgb9wTc9u+MEP24BAbwmavmJuBM4eb8XEyPtbjYzk+3hoSoDLvb1+fHhsGQbbLGDtMMfbMaDCDv22QTd8242vwheEBKnKVPs8uDYUge0qIPU9/BN8YDWYQZ8WOxw+us5+8HuOsmdkyoDbvxs+2lWEQZNvE2CKYkaDAb5Hja3OZwsyMLVCTT+lz7tpQ/J1N/d//gxf/2P2fGGMmH8bH4qFT+mkGLX5h+GzogIrEPdiX6Usl37aHGbKvQswhr8ztjzGwTrZ8vcYlzLXXK1Ahh8kKsh/+cYtXgqyCZSDmcZM+jM538NqNXyLsKwNq8zl9Dq4NhSCzcZ9cH0KHu7zqKH2h+IehBSpkw3/vQWbjPhnEzfuLKabpbfYHKv9sPOx5w3+3m/rTfSht3GdOH6eKsejeZv8bQw1UJu6Fvez5fpjdzZA5cZ9MPozBtJzpNe7iFKDqz8uwOZOxqw3/XQWZE/fJZOsrKZ/wWncFJlCz7k7472bJMp0t9k8xxsyO5o6xKH2zXITNQYwAtYlfJtc9nVnW/AxZWqI8N1PAzH56G6SZ3wPx3+BYDKBWXSxhNh1klijJGGOLkqbaRRlQueaXMJtdskxXUVqipPsYi9IFBR88PUClml/CbG6GLG1mjkuUrqJkbjs/8HWC90f8MDv1VAEVm+2qdUG2/R+bgxRjzhZjbpMd+CrKAL77mdvUQbLNLFmmPzL/EmOIsZ9LFxocedqAit0dJLsQZGXF2Jlv/IgxUQZ0Je4R/790L9/6W6bmJUuHXyLGnvweWvoyAzSg+qMxqg0y+8UQYzt7Ly3Se8kVyYDP5UyqXLJM54utxRgZv4ktWjmkcPw94nspRpmbkgM1i6tl12nCpr62qW2GLK0V/8Prjlwx1uLl1um9dZC+6JgpA2pWzJ1Smg0yp40jxkQZwAP9keNewk0HWdq8H2PsjdcXYkyUAbT22V18kLmSEm9oUQbwlM/wUMEVmEUHmRhDjIkygB0o/grMYq+yTH8MLsUYGX3qNcaidE/OYy8DoAF3Nyd/Lsi2+2buWAtyfps67H0QnOgPiLJOg8wyCYXEWDPnjIkygPKjrKg9ZOMADWGzTCnGEGPlfVlaBrdZAnzWT6KYGbJUq27fgjdoocyUAQ0pbqasiCBzNSUF+CzGHhxlH4wE0EiUnQuyr52IMTKKt9k4FGMPjrKlKAMa8SrdBUiQpXtTuh0SOWNskY544HFR9tFIAA14m/bI9htkaRP/ymuBjJZibPuxC5t9dwC1O0lN0meQhc39KW3iJ5ejMcbODcN20hLvImz23wHULLZI1huRZwuysUTjB/krrwEyeZ82qPP0KIsH6N4YDaByb1Kb9BVkwS1ZyCfen9Lrb3dRdhnc1QBoQ7a/DVmCLK3TvvG8k8GVLwOTRNl6/PGHkQAq9ybXXrJcM2S+TZOD4y2mjbK4/8JxGEDtsjRKriBber7J8bobo+HaMEwqzj668hKo+m9Fjv/S2e9lmaYC/+35Zmbv7Rub7T1+MP74l5EAKvY/c3+BzzFDZrmSucVjGVaGYR5pk/87IwFUbPZWEWT0YGnf2OxRtgrOJwMEWdFB5uwx5nSVrgBkfitDAFRq9laZNchyHrhGt8RYPteGAKjV3M3y28y/nyBjbr+Pb6rnKcwu3bdy8g+wYfxxkN7rticANVvM+aVekNGDt+kRgyH+iHubrsdH3Fd2F2jX4esZnUv7zn74TfF5iq5oSI/4n700UkBjQTbf5+ycx16MH+q3nl8qdpUiLm5ab+7Lxfj+vPsmGGPrmacb6N34Wb8313/XbHvI0tlEULM4A/QqtHthyt3vJsYAZm6XOTf1CzIAoCYLQQYAkJcZMihZa0vwthQAfNfQYpA5EJaWPPf7ADRvtnaZJch8+wYAajRXw8w1QzZ4SqFoC0MAkK9h5goyM2QAQI2amiETZACAIMscZIPnE3zgAFRoloaZK8jc4w7K5ipLgIwNM3mQucISAKjZHC0zxwyZb94AQM0mb5k5gmzheYTiObgZIGPLmCEDXzQAyNwycwSZPWQAQM3sIQMAyGxoIcgceQEFcyU0wC+9qDrIxg/6wXMIxTOLDZC5aaaeIRNkAEALBBkAgCATZACAIKs2yOxNgfItDAFA3iD7beJ/vKu3AHbvZnxcFvDviF+6XUmPIKsgyMyQATw8so7Hx/nt69MvNf3D09Ep8d/+1tNIwyZtmqmDzDcngIfF2GIMscsa//Hp370cwyz+/Ienk0ZN2jT7xhe2YjmeXTqpNca+CbOT8cdnTycUFGTjN6WF4aVhluPZpbOGfpdzTyetmrJtzJABvjxldvv69LqhX+fSMwplBdlgeAG6c20IaNhk21UEGQDAw0y2XcWSJQBAw0G28LwBAA2pcskSAIDMQTYYXoDuLAwBDZusbaYMsheeN6jCK0MAkLdtLFkCZLZ3cTQYBejbJEGWbjQLwMMIMqjnC9QkjTPVDJnbygAALZqkcSxZwnYGQwBA6UFmyZLWuWgFoE+LmoLMkiUAQOYgAwAgc5BZsoQKOG4B4NEWNQWZJUuogyADKIAlS4D8fIkFQeZbN0BmLW3z8PmP92tBQeZIAIA+CTJa96ymIAMAIFeQ7V0c2QsBADRriivUp5ghc+QFANCyKoIMAABBBgDQd5ANhhUAaNjOt2cJMtjS3sVRC/slXYQDUMBnpyVL6DtmXIQDUABBBpDfwhCAIPONGwAg45eoKYLMnhSAfg2GAMoIMgD65V7GIMgAAARZNBhWAKBhVZxDZroaAGjZsxqCDAAAQQYA0GmQ7V0cOfICAGje2DxDsUEWHAoLAPSh6CAD4PGsLkDnBBlAfi8NAQgyAAAaCrLBkNKRFvZMLjyN7MrexZF9xPgbIMhgdvb9gPcEXu9FBhkAAIIMAECQAQCQMcjsHwAAejCUHGSusAEABFnmIAMAQJABAAgyAAAEGQBAv0E2GFKAx3PbIahO0bdOeuH5AdhKC8cGLTyNdORZyUEGAIAgAwAQZAAACDIAAEEGANC0vYujnV2Ms7/Df9TCU0NnvOYB+razoy/MkAEAZCbIAAAEGQCAIAP6NRgCAEEG5OV2ZwCCDICGLAwB5A+ywXACAB0p8tgLQQZQwAc7MJvyDoYFoIwPdqA+ggwAQJABAAgyAAAEGQCAIAMAQJABAAiypxoMJwDQkYUgAwBohCVLAHbF4bYgyADI7KUhAEEGczMbAIAgg8zMBgAgyAAABBkAAIIMAECQAQAgyAAABBkAAEUE2YHhBAA68qrEIHvmeYF67F0cOdgWoBCWLKFfZrUBBBkAAIIMgJ3YuzgajAIIMgDyEmQgyAAABBkAAIIMAECQAQAgyAAABBkAAIIMAECQAQAgyAAABBkAAIIMAECQAWU7MAQAZfjNEECfbl+fnow/TowEQH5myOAJ9i6OBqMAgCCDvAQZeC+AIANAkIEgAwBAkAEACDIAAAQZAIAgAwBAkAEAdBtkexdHC0MJAPRmbKCd3IbODBkAwPaelxRkXzwfAECHLosJstvXp5eeDwCgN2MD7WRSypIlAEBmggwAQJABAAgyAAAEGQCAIAMAQJABAAgyAAAEGQCAIAMAQJABUKGFIQBBBgAgyAAAEGQAAIIMAABBBgAgyAAAEGQAAIIMAABBBgAgyAAAEGQAAIIMAABBBgAgyAAAEGQAAIIMAKBBn0sMsk+eFwCgI9clBhkAAFv4zRBAv/Yujtbjj1dGogifbl+fLgwD9MkMGQCAIANgNBgCEGQA5PXCEIAgAyCzvYujwSiAIAMgL0EGggzYwhdDAIAgg4xuX59eGgUABBkAgCD7L0s3AEBPdrZKsl/iPwoAoAI7m4yyZAkAkJkgAwAQZAAAggwAAEEGACDIAMjs9vXp2iiAIAMAoPIgczAsANATB8MCAGTmYFgAgFYIMgAAQQYAIMgAABBkAACCDHi8T4YAoGtFXmXp2AsAoBu3r0/LO4ds/Ec5GBYAIGeQAQAgyADIZ20IQJABAAgyAJ7kxhCAINuVz4YUYCuuVIe6XJUcZNeeHwCgAzs9XcKSJQBAZoIMAECQAQAIMqBf14YAoL0gc5UQPWnh9S7IALazLjnI3M+Snni9A1BkkAEAIMgAAAQZAAAZg+zakAIAHdjphV2CDADg8dw6CQCgJYIMAECQAQAIsl1yUj8A0Lzb16frYoNs/Mc5uZyeXDfwO/gSBVAAS5bQd5D5EiWOAUEGgDgGpgiyG8MK0J1rQ0BHPtcQZKbdAQQZeL1nDjIAAAQZAEDfQWZjKgDQsusagsweMgBAkGUOMgAABBnMovrl+V3f+gOAcoLs2rDSgzFmLM8D9Gnnn/+CDADgcXa+QmLJEgAgM0EGANBgkNlXAwA0a4oLovYn+Ec6GBYAIGeQAQBQRpB9NrRQDe9XgIe7qinIrj1fUA3vV4CHm2RrliVL2I5ZJfiaC7qgwCCzsZ/WXRsC+IsLuvD5X2aQ+aYEAAiyzEEGQAEf8kAdLFkCCDIg83vVkiUAQKNBBtRjbQgA8rJkCQDwcNfVBNnt61NLlgBAc8bGqSfIAAAoI8icZE7L1oYAoDtXU/0/njLIrj1vAEBDJtsjb8kS8OUJoOEgW3veQJABNGSyixbNkAGwK58MAZQXZL51AwAtqXKGTJABAC2pcg+Z0/oBgJZcVxdkTuuHanivAjysbeoLMmjcuqEPGLPZAJlNHWRXhhgAaMCkVxFPHWS+eQMAZA4ye1MAgBasaw4yM2S0amEIAKglyMyQ0aqhlV9k7+LowNMJkLdpzJDBdg7HkHneyu/i6WRHrg0BDZu0acyQwXaejY+T2n+JFJXHnk4EGeRtmkmDzPlGNO7tGDRntc6UpaXKdYpLADI2zW8z/A7xLLKXnkpajbIUZp9COYfF/uzfsUg/D70vAR7s09T/BXMEmVkyevAqPUrwp6cDoK6WmePWSWvPIwBQscn3xM8RZGbIAICaXbcQZK60BAAEWeYgu/Y8AgAVq3/J8vb1qSADAKo1xzFe+zP9Lp88nQDN8wWcFs3SMPvepAD4rIe8r2tBBgDQSZCtPZ8AQIVmaRgzZAAAPzbL8V2zBFm60vLGcwoAVORmjissZwuyOQsTAKC2dhFkAADftxZkANTGvYtpTZMzZGvPK8D33b4+XTfwO/jijSDb0m8zvlGv9y6O4sb+Z55foCNX4e8zR5eh3dmkd9/8z4tv/udhfLzwsqACn+e8/eNvM/9y8RvgG88x0ICbFFZ3cbVO//mXnmeKxt999Zj//fGL+sH44/k38Xb3n73yMiOjWd/HggzgcT6Oj5XluZ0F3OU3fyO+F2yH4+NPo0WGZpnNfsu/HMAETsTY7MF2YiQQZLt/YzkgFqjZ0hDM7tAQMLObub947Wf4JdeeZ6Bib/cujgbDMKuVIWBm53P/F+738EsC7NiZIZjHGL8xxlyVydzWggygfK/GUDg2DJPHWNzQbzM/ObQ/Q5Zu0vnRcw1UbpWCgWli7Lkv8GTyca4bimcNslzlCbBj8ZDrsxQO7F68stJSJd00Ss4gc7UlULuXwX6ynUvLwW+NBBnEqyuzvKezBFmaCvQhBrTgTdp4zm5ibDH++IeRIJNsZ97t9/hLA+zYn2NILA3Dk2Ms7smzpYVcbroMsnTDzneef6ARpzb5PynG4l68s7DZmwc5nOTYzJ89yO5++fHx2WsAaMRalG0/dmGzJw9yuBpjbJXzH5A1yFKJuiUG0ApXXm5hHK8zMUZGcalymfsfkXuG7O7+lkdeD0AjYlisRdmDYyyulLiikpyO575vZZFBlqIsfjt67zUBtBRlhuGXMbYcf/xuJMjoj1zHXBQZZCnK4rkzH7w2gFaiLC3F8eMYOzUSZPRhbI9iTnzYu729Le1NGj/ATF8DLX3oLw3DV5/zce/wP40E3pcFB5koA3z4Nx1j8SrUdXC8Bd6PX9kvcaTSQFm+BFrxNm1eF2NiDDH2/fdHiTNk9968Z8FMGdCOo1I2EIsxxFhZ9kseOTNlQGNOe7zFkhijAO9K3zZQ9AzZvTdzvALTzWaBVnQzUzZ+fg/jj0sxhvfbz+3XMJLpslSHxwKt6GKmLB2Oey7GyOSmpi8/VcyQ3XtzL7y5Ad/cq4mxdXBLJPLF2KKEE/gfar+m0R0HNr65Y5S5ITnQgiZnysQYmV2Nj4OaYqy6IEtRFgf4IA04gCgTY3DnY9jMjF1X996pacnyO2/8s+BYDKAN1S9fijEye59uw1il/ZpHPl3C+ofXINCAqmfKxBgZ3W3eP675l6h6huzeB8Ei2OwPtKG6mTIxRkZxT/lhbfvFvme/hWcjbfa3rwxowWlNt1lKh75eijEy+BQq3Lz/w/dSCzNk33xLix9k9pUBtSv+huRO4Cej97UvUTYdZPc+JOKH2KnXKyDKxBhNifvFluP74ry5dmkxyO59WMQn7IXXLyDKxBjVu0oxdtniL9dskKUPjbiEeTY+3ngdAxX7mP4QfRFj9PrFZHwcl/AeEGRP+wBxc3KghdmBRc4/SGk7yIkYY0Y3KcTOmm+VHoLs3rc6S5iAKNs+xuzNZe7Xe7NLlN/a7+VZvXfLpY9e40Cl4tESl+kLphijZR9CZTcHf/L7rJcZsm8+XCxhAjW7meuPVToT7XdDzoyv7SavovyV/R6f7fGJjh8w/xscJAvUKe7hWk99q6V0v2Axxlzi3+SDHmPsP++3HmfI7n3YOEgWqN3Ob7WUPhvjH8VXhpeZvBtfx6ueB6DrILv34XMYNsdjuHIIqNHOzipzX0pmFpcoD9MtEPtuEUH23w+hIUWZb4RAjZ58VpkzxqjtNSvI2g6z1fjjTyMBVCjuwYmzDddbfPYtgzPGmEecFVul/dwIsl9+S3RmGVDrH7tHLQH5IkoNXxoEWb9RFvdRxA8pVxgBNfrlJmm3l6O016Qg42cfWDb8A7X6FDazEV++89m2SJ9tVgKY2uf0Orw0FILsqVHmWyRQq6/uBWj2n5m9D5v9YjbuC7Kdhtky2PQK1CnOUsS9sUufYcz0RWDZ6yGvgmyeKBuC4zEA4EccZyHIZg2zeD/MlW+aAPAfZsUEWbYoi8djnAUnWgPQtx9eQIIgmzPMVsEZPgD0xyGvgqy4KDNbBkBP4qzY0iGvgqzUMFsFs2UAtMusmCCrJsrMlgHQIrNigqzKMFsFs2UA1M+smCCrPsrMlgFQM7NigqypMFsFs2UA1MOsmCBrNsrMlgFQA7NigqyLMFsFs2UAlOerm9EjyHqIsiG4JyYA5XAPSkHWdZi5JyYAObkHpSAjRdkQzJYBML8PYbNEaVZMkHEvzJbjj3g1i9kyAKb0OWxmxdaGogz7hqAcaRPlEDbr+AAwhffj40CMlcUMWalPzMXRYdjMlr0wGgDswFXYLE8KMUHGI6Psedhs+P/daADwBO/GEFsZBkHG08JsETazZQ6UBeAxHPAqyJggzOK3GwfKAvArbnskyJg4yobgiAwAfswBr4KMGcNsGRyRAcBfHGVRMcdeVMoRGQDc4yiLypkha+FJ3Gz6j4HmiAyAvsSjLOKs2KWhEGSUEWXxiIx4X0yb/gHaZ9O+IKPwMDsIm71lNv0DtCluVTl2lIUgo44wWwab/gFa8jmF2LmhaI9N/Y26t+n/g9EAqN67sNm0L8YaZYashyfZpn+AWsWT9o9t2hdktBVmq7DZ+G8ZE6BsNynEzgyFIKPNKBuCk/4BSvYhxZiT9gUZHYTZYdhs+reMCVCGqxRia0MhyOgrypxdBpBfXJ48GUNsZSgEGX2HmbPLAPJwphiCjL+F2TI4uwxgDm4EjiDjp1EWlzFX4+N3owGwc5YnEWQ8KswsYwLsVjxTbGl5EkHGNmG2DJYxAZ7CLY/4JbdO4qfu3YLpvdEAeDS3POJBzJDx8BeLZUyAh7I8iSBj8jBbBsuYAN9jeZKtWLLk0SxjAvxNvHrS8iRbM0PG015AljEBHO6KIKOYMFsGy5hAXxzuiiCjyChzb0ygBw53RZBRRZgN44+zYBkTaM+H8bGyPIkgo6YwOwybZcwXRgOo3FXY7BNbGwoEGbWG2SpsljLtLwNqc5NC7MxQMCXHXjC5tM8iXo35wWgAFYlH+wxijDmYIWPeF9zF0SJsljFfGg2gUPGU/TgrdmkoEGS0HmbL4JgMoCxO2UeQ0WWUxWMyVuPjd6MBZOQYCwQZOCYDyMgxFggy+CbMFinMHJMBTO1TCrG1oUCQwffDbBUckwFM43MKsTNDgSCDX0dZ3F8WN/2/NRrAjrwLm71iXwwFggweF2YHKczsLwO29TFsrp68NhQIMnhamLkNE/BYbneEIIOJwmwV7C8Dfs4+MQQZzBBlzi8Dvuc/54kF+8QQZDBrmA3B+WXAhvPEEGSQOcwWwfll0CvniSHIoLAwWwb3x4ReuO8kggwKjrK4vyxu+v/TaECT3HcSQQYVhdkQNhv/HSwL7XgfNsuTNuwjyKCyMFukMLPxH+oV94ktbdhHkEH9YeZgWaiPg10RZNBomMX9Zatg4z+UzMGuCDLoIMps/Icy2bCPIIMOw2wINv5DKWzYR5BB52F2EDb7y2z8h/l9DJt9YteGAkEGOPEf5uWEfRBk8NMwW4bNUqYwg91zwj4IMnhUmMUoi5v/XZEJT3eTQuzMUIAgg8dGmSsy4ekhFvdontiwD4IMnhpmQ3BFJjyWKydBkMFkYXYWXJEJP/Mhhdi1oQBBBlOG2SK4RyZ8K145GfeJXRoKEGQwZ5i5RyY4wgIEGRQSZsvgqAz64wgLEGRQZJjFKHNUBj2EmJt/gyCDoqPs7qgMYUZrblKInRgKEGRQW5g5w4wWQsxZYiDIoOowG4IzzBBigCADYQaP5CwxEGTQfJjFWYc3RgMhBggyyBtmi+BwWYQYIMhAmNE9p+uDIAOEGRlDzOn6IMgAYYYQAwQZCDOEGCDIgAeE2TK4TyZCDAQZIMwQYoAgA4QZQgwEGVBkmMV7Zb40GggxEGRA3jBbBJv/hZgQA0EGCDOEGCDIAGEmxABBBggzJhXvNXkmxECQAfWG2XJ8vDUa1YaYm36DIAMaCbMhbGbMhJkQAwQZUEiYHY6PZ0akKDfj4yQ+xhD7YjhAkAHth9nzsDnH7FiYCTFAkAH5w2yZwszp//P6HDbLkmeGAgSZUQDu4uwuzJz+P614dMWZEAMEGfCzMFsER2ZM4WPYLEuuDQUgyICHhtkQXJn5VHF/2HlwxSQgyIAnhpkLAB4v7g87CzbqA4IMmCDOlsE+s5+xPwwQZMBsYbYI7gBwXzzINc6GXRoKQJABc4fZkMIsPno7NsOyJCDIgOLi7C7MWr86M14tGZclzz3rgCADSg2zIWz2mcU4a+UigLvZsDNXSwKCDKgtzmKUxftmvqn0VzAbBggyoJkwG1KY1XCLpquwmQ07NxsGCDKg1Tg7CH9dCFDKkmZckoyzYGeulAQEGdBbnMVZs7vH3HEWI2ydImzt2QAEGeADaXO22V2cTbWsaSYMEGQAD4yzIYXZIj22nT2L95Jcp4c9YYAgA3hCoMV9Z/cfMdi+nUWLm/G/pPiK4XVpFgwQZAAA/NK+IQAAEGQAAIIMAABBBgAgyAAAyOP/BRgAIIFaIpEeBKUAAAAASUVORK5CYII=",
                          alt: "",
                        }),
                      }),
                      (0, a.jsx)("h2", { children: "5 \u2b50 Coder" }),
                      (0, a.jsx)("h5", {
                        className: "company_name",
                        children: "HackerRank",
                      }),
                      (0, a.jsx)("small", {
                        className: "my_work",
                        children:
                          "HackerRank is a place where programmers from all over the world come together to solve problems in a wide range of Computer Science domains such as algorithms, machine learning, or artificial intelligence, as well as to practice different programming paradigms like functional programming.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(Ot, {
                    className: "achievements",
                    children: [
                      (0, a.jsx)("div", {
                        className: "company_logo",
                        children: (0, a.jsx)("img", { src: ne, alt: "" }),
                      }),
                      (0, a.jsx)("h2", {
                        children: "Rank 14 in Google Cloud Devjam",
                      }),
                      (0, a.jsx)("h5", {
                        className: "company_name",
                        children: "Google Cloud",
                      }),
                      (0, a.jsx)("small", {
                        className: "my_work",
                        children:
                          "Cloud DevJam is a program exclusively designed for enterprise IT professionals to help kickstart your journey on the Google Cloud Platform. You can Choose the learning path based on your area of interest, and along the way, compete with your peers, showcase your skills and earn exciting prizes.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(Ot, {
                    className: "achievements",
                    children: [
                      (0, a.jsx)("div", {
                        className: "company_logo",
                        children: (0, a.jsx)("img", { src: ne, alt: "" }),
                      }),
                      (0, a.jsx)("h2", {
                        children:
                          "Rank 15 in Google Cloud Community Days India",
                      }),
                      (0, a.jsx)("h5", {
                        className: "company_name",
                        children: "Google Cloud",
                      }),
                      (0, a.jsx)("small", {
                        className: "my_work",
                        children:
                          "Cloud Community Days is a two day, virtual, developer-focused, community driven conference themed event on the various use cases of Serverless & Google Cloud.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)(Ot, {
                    className: "achievements",
                    children: [
                      (0, a.jsx)("div", {
                        className: "company_logo",
                        children: (0, a.jsx)("img", { src: te, alt: "" }),
                      }),
                      (0, a.jsx)("h2", {
                        children: "International Rank 69 at SOF NCO",
                      }),
                      (0, a.jsx)("h5", {
                        className: "company_name",
                        children: "Science Olympiad Foundtion",
                      }),
                      (0, a.jsx)("small", {
                        className: "my_work",
                        children:
                          "National Cyber Olympiad (NCO) is conducted by Science Olympiad Foundation (SOF). The test is conducted in the concerned schools during the school hours. The exam aims at finding the top talents at international, zonal and school level and reward them.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ft = n.p + "static/media/sns.fbdc19cecce09b11b723.png",
        Rt = n.p + "static/media/ww3.25ea1e8c00df0c398ae0.png",
        Qt = n.p + "static/media/solarSystem.59e63636ff924088f441.png",
        Gt =
          (n.p,
          n.p,
          n.p,
          [
            {
              id: 1,
              image: Ft,
              title: "Suno And Sunao",
              github: "https://github.com/Ankur02Sarkar/Suno-And-Sunao.git",
              link: "https://suno-and-sunao.vercel.app/",
              demo: "https://drive.google.com/file/d/1GKu65rNS2gAMoQky-z6KPAE_qxQYSJCf/view?usp=sharing",
            },
            {
              id: 2,
              image: Rt,
              title: "World War 3",
              github: "https://github.com/Ankur02Sarkar/World-War-3.git",
              link: "https://thirdworldwar.netlify.app/",
              demo: "https://drive.google.com/file/d/1ehpXFpONipfTZzfSfNxt_3p5Tx9c_iUI/view?usp=sharing",
            },
            {
              id: 3,
              image: Qt,
              title: "Solar System",
              github: "https://github.com/Ankur02Sarkar/Solar-System-Demo.git",
              demo: "https://drive.google.com/file/d/11aRyeqAqBIYdsQal0CFpIrfCPXEwW-9R/view?usp=sharing",
            },
          ]),
        Wt = function () {
          return (0, a.jsxs)("section", {
            id: "projects",
            children: [
              (0, a.jsx)("h2", { children: "My Projects" }),
              (0, a.jsx)("div", {
                className: "container projects_container",
                children: Gt.map(function (e) {
                  var t = e.id,
                    n = e.image,
                    r = e.title,
                    i = e.github,
                    l = e.demo,
                    s = e.link;
                  return (0,
                  a.jsxs)("article", { className: "projects_item", children: [(0, a.jsx)("div", { className: "projects_item-image", children: (0, a.jsx)("img", { src: n, alt: r }) }), (0, a.jsx)("h3", { children: r }), (0, a.jsxs)("div", { className: "portfolio_item-cta", children: [(0, a.jsx)("a", { href: i, className: "btn", target: "_blank", children: "Github" }), (0, a.jsx)("a", { href: l, className: "btn btn-primary", target: "_blank", children: "Demo" }), (0, a.jsx)("a", { href: s, className: "btn btn-primary", target: "_blank", children: "Live" })] })] }, t);
                }),
              }),
            ],
          });
        },
        Vt = function () {
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(j, {}),
              (0, a.jsx)(O, {}),
              (0, a.jsx)(F, {}),
              (0, a.jsx)(W, {}),
              (0, a.jsx)(G, {}),
              (0, a.jsx)(Wt, {}),
              (0, a.jsx)(_t, {}),
              (0, a.jsx)(q, {}),
              (0, a.jsx)(ee, {}),
            ],
          });
        };
      e.render((0, a.jsx)(Vt, {}), document.querySelector("#root"));
    })();
})();
//# sourceMappingURL=main.f9a1e38d.js.map
