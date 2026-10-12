import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import assert from "node:assert/strict";
import test from "node:test";
import t, { createElement, createContext, useState, useEffect, useCallback, useMemo, useContext, act } from "react";
import { createRoot } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { Link, useParams, Navigate, useLocation, Routes, Route, MemoryRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.js";
import e from "@emotion/is-prop-valid";
import * as o from "stylis";
import { JSDOM } from "jsdom";
var r, i;
const l = "undefined" != typeof process && void 0 !== process.env && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", a = "active", c = "data-styled-version", u = "6.5.3", d = "/*!sc*/\n", h = "undefined" != typeof window && "undefined" != typeof document, p = void 0 === t.createContext;
function f(e2) {
  if ("undefined" != typeof process && void 0 !== process.env) {
    const t2 = process.env[e2];
    if (void 0 !== t2 && "" !== t2) return "false" !== t2;
  }
}
const m = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = f("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : f("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" != typeof process && void 0 !== process.env && true), g = "sc-keyframes-", y = {}, v = { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n", 18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n" };
function S(e2, ...t2) {
  return new Error(function(...e3) {
    let t3 = e3[0];
    const n2 = [];
    for (let t4 = 1, o2 = e3.length; t4 < o2; t4 += 1) n2.push(e3[t4]);
    return n2.forEach((e4) => {
      t3 = t3.replace(/%[a-z]/, e4);
    }), t3;
  }(v[e2], ...t2).trim());
}
const b = 1 << 30;
let w = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), C = 1;
const P = (e2) => {
  if (w.has(e2)) return w.get(e2);
  for (; N.has(C); ) C++;
  const t2 = C++;
  if ((0 | t2) < 0 || t2 > b) throw S(16, `${t2}`);
  return w.set(e2, t2), N.set(t2, e2), t2;
}, O = (e2) => N.get(e2), E = (e2, t2) => {
  C = t2 + 1, w.set(e2, t2), N.set(t2, e2);
}, I = /invalid hook call/i, A = /* @__PURE__ */ new Set(), _ = (e2, n2) => {
  {
    if (p) return;
    const o2 = `The component ${e2}${n2 ? ` with the id of "${n2}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, s2 = console.error;
    try {
      let e3 = true;
      console.error = (t2, ...n3) => {
        I.test(t2) ? (e3 = false, A.delete(o2)) : s2(t2, ...n3);
      }, "function" == typeof t.useState && t.useState(null), e3 && !A.has(o2) && (console.warn(o2), A.add(o2));
    } catch (e3) {
      I.test(e3.message) && A.delete(o2);
    } finally {
      console.error = s2;
    }
  }
}, x = Object.freeze([]), $ = Object.freeze({});
function R(e2, t2, n2 = $) {
  return e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}
const j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, k = /(^-|-$)/g;
function T(e2) {
  return e2.replace(j, "-").replace(k, "");
}
const D = /(a)(d)/gi, M = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
function V(e2) {
  let t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = M(t2 % 52) + n2;
  return (M(t2 % 52) + n2).replace(D, "$1-$2");
}
const G = 5381, F = (e2, t2) => {
  let n2 = t2.length;
  for (; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, z = (e2) => F(G, e2);
function W(e2) {
  return V(z(e2) >>> 0);
}
function B(e2) {
  return "string" == typeof e2 && e2 || e2.displayName || e2.name || "Component";
}
function L(e2) {
  return "string" == typeof e2 && e2.charAt(0) === e2.charAt(0).toLowerCase();
}
function q(e2) {
  return L(e2) ? `styled.${e2}` : `Styled(${B(e2)})`;
}
const H = Symbol.for("react.memo"), Y = Symbol.for("react.forward_ref"), U = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true }, J = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, X = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, Z = { [Y]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [H]: X };
function K(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === H ? X : "$$typeof" in e2 ? Z[e2.$$typeof] : U;
  var t2;
}
const Q = Object.defineProperty, ee = Object.getOwnPropertyNames, te = Object.getOwnPropertySymbols, ne = Object.getOwnPropertyDescriptor, oe = Object.getPrototypeOf, se = Object.prototype;
function re(e2, t2, n2) {
  if ("string" != typeof t2) {
    const o2 = oe(t2);
    o2 && o2 !== se && re(e2, o2, n2);
    const s2 = ee(t2).concat(te(t2)), r2 = K(e2), i2 = K(t2);
    for (let o3 = 0; o3 < s2.length; ++o3) {
      const l2 = s2[o3];
      if (!(l2 in J || n2 && n2[l2] || i2 && l2 in i2 || r2 && l2 in r2)) {
        const n3 = ne(t2, l2);
        try {
          Q(e2, l2, n3);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function ie(e2) {
  return "function" == typeof e2;
}
const le = Symbol.for("react.forward_ref");
function ae(e2) {
  return null != e2 && ("object" == typeof e2 || "function" == typeof e2) && e2.$$typeof === le && "styledComponentId" in e2;
}
function ce(e2, t2) {
  return e2 && t2 ? e2 + " " + t2 : e2 || t2 || "";
}
function ue(e2, t2) {
  return e2.join(t2 || "");
}
function de(e2) {
  let t2 = "";
  for (let n2 = 0; n2 < e2.length; n2++) t2 += e2[n2] + d;
  return t2;
}
function he(e2) {
  return e2 ? e2.replaceAll(d, "") : e2;
}
function pe(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function fe(e2, t2, n2 = false) {
  if (!n2 && !pe(e2) && !Array.isArray(e2)) return t2;
  if (Array.isArray(t2)) for (let n3 = 0; n3 < t2.length; n3++) e2[n3] = fe(e2[n3], t2[n3]);
  else if (pe(t2)) for (const n3 in t2) e2[n3] = fe(e2[n3], t2[n3]);
  return e2;
}
function me(e2) {
  if (!p) return null;
  const n2 = t.cache;
  return n2 ? n2(e2) : null;
}
function ge(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
const ye = class {
  constructor(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(e2) {
    if (e2 === this._cGroup) return this._cIndex;
    let t2 = this._cIndex;
    if (e2 > this._cGroup) for (let n2 = this._cGroup; n2 < e2; n2++) t2 += this.groupSizes[n2];
    else for (let n2 = this._cGroup - 1; n2 >= e2; n2--) t2 -= this.groupSizes[n2];
    return this._cGroup = e2, this._cIndex = t2, t2;
  }
  insertRules(e2, t2) {
    if (e2 >= this.groupSizes.length) {
      const t3 = this.groupSizes, n3 = t3.length;
      let o3 = n3;
      for (; e2 >= o3; ) if (o3 <<= 1, o3 < 0) throw S(16, `${e2}`);
      this.groupSizes = new Uint32Array(o3), this.groupSizes.set(t3), this.length = o3;
      for (let e3 = n3; e3 < o3; e3++) this.groupSizes[e3] = 0;
    }
    let n2 = this.indexOfGroup(e2 + 1), o2 = 0;
    for (let s2 = 0, r2 = t2.length; s2 < r2; s2++) this.tag.insertRule(n2, t2[s2]) && (this.groupSizes[e2]++, n2++, o2++);
    o2 > 0 && this._cGroup > e2 && (this._cIndex += o2);
  }
  clearGroup(e2) {
    if (e2 < this.length) {
      const t2 = this.groupSizes[e2], n2 = this.indexOfGroup(e2), o2 = n2 + t2;
      this.groupSizes[e2] = 0;
      for (let e3 = n2; e3 < o2; e3++) this.tag.deleteRule(n2);
      t2 > 0 && this._cGroup > e2 && (this._cIndex -= t2);
    }
  }
  getGroup(e2) {
    let t2 = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2]) return t2;
    const n2 = this.groupSizes[e2], o2 = this.indexOfGroup(e2), s2 = o2 + n2;
    for (let e3 = o2; e3 < s2; e3++) t2 += this.tag.getRule(e3) + d;
    return t2;
  }
}, ve = `style[${l}][${c}="${u}"]`, Se = new RegExp(`^${l}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), be = (e2) => "undefined" != typeof ShadowRoot && e2 instanceof ShadowRoot || "host" in e2 && 11 === e2.nodeType, we = (e2) => {
  if (!e2) return document;
  if (be(e2)) return e2;
  if ("getRootNode" in e2) {
    const t2 = e2.getRootNode();
    if (be(t2)) return t2;
  }
  return document;
}, Ne = (e2, t2, n2) => {
  const o2 = n2.split(",");
  let s2;
  for (let n3 = 0, r2 = o2.length; n3 < r2; n3++) (s2 = o2[n3]) && e2.registerName(t2, s2);
}, Ce = (e2, t2) => {
  var n2;
  const o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(d), s2 = [];
  for (let t3 = 0, n3 = o2.length; t3 < n3; t3++) {
    const n4 = o2[t3].trim();
    if (!n4) continue;
    const r2 = n4.match(Se);
    if (r2) {
      const t4 = 0 | parseInt(r2[1], 10), n5 = r2[2];
      0 !== t4 && (E(n5, t4), Ne(e2, n5, r2[3]), e2.getTag().insertRules(t4, s2)), s2.length = 0;
    } else s2.push(n4);
  }
}, Pe = (e2) => {
  const t2 = we(e2.options.target).querySelectorAll(ve);
  for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
    const o3 = t2[n2];
    o3 && o3.getAttribute(l) !== a && (Ce(e2, o3), o3.parentNode && o3.parentNode.removeChild(o3));
  }
};
let Oe = false;
function Ee() {
  if (false !== Oe) return Oe;
  if ("undefined" != typeof document) {
    const e2 = document.head.querySelector('meta[property="csp-nonce"]');
    if (e2) return Oe = e2.nonce || e2.getAttribute("content") || void 0;
    const t2 = document.head.querySelector('meta[name="sc-nonce"]');
    if (t2) return Oe = t2.getAttribute("content") || void 0;
  }
  return Oe = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
const Ie = (e2, t2) => {
  const n2 = document.head, o2 = e2 || n2, s2 = document.createElement("style"), r2 = ((e3) => {
    const t3 = Array.from(e3.querySelectorAll(`style[${l}]`));
    return t3[t3.length - 1];
  })(o2), i2 = void 0 !== r2 ? r2.nextSibling : null;
  s2.setAttribute(l, a), s2.setAttribute(c, u);
  const d2 = t2 || Ee();
  return d2 && s2.setAttribute("nonce", d2), o2.insertBefore(s2, i2), s2;
}, Ae = class {
  constructor(e2, t2) {
    this.element = Ie(e2, t2), this.element.appendChild(document.createTextNode("")), this.sheet = ((e3) => {
      var t3;
      if (e3.sheet) return e3.sheet;
      const n2 = null !== (t3 = e3.getRootNode().styleSheets) && void 0 !== t3 ? t3 : document.styleSheets;
      for (let t4 = 0, o2 = n2.length; t4 < o2; t4++) {
        const o3 = n2[t4];
        if (o3.ownerNode === e3) return o3;
      }
      throw S(17);
    })(this.element), this.length = 0;
  }
  insertRule(e2, t2) {
    try {
      return this.sheet.insertRule(t2, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }
  deleteRule(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }
  getRule(e2) {
    const t2 = this.sheet.cssRules[e2];
    return t2 && t2.cssText ? t2.cssText : "";
  }
}, _e = class {
  constructor(e2, t2) {
    this.element = Ie(e2, t2), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(e2, t2) {
    if (e2 <= this.length && e2 >= 0) {
      const n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }
  deleteRule(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }
  getRule(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }
}, xe = class {
  constructor(e2) {
    this.rules = [], this.length = 0;
  }
  insertRule(e2, t2) {
    return e2 <= this.length && (e2 === this.length ? this.rules.push(t2) : this.rules.splice(e2, 0, t2), this.length++, true);
  }
  deleteRule(e2) {
    this.rules.splice(e2, 1), this.length--;
  }
  getRule(e2) {
    return e2 < this.length ? this.rules[e2] : "";
  }
};
let $e = h;
const Re = { isServer: !h, useCSSOMInjection: !m };
class je {
  static registerId(e2) {
    return P(e2);
  }
  constructor(e2 = $, t2 = {}, n2) {
    this.options = Object.assign(Object.assign({}, Re), e2), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n2), this.server = !!e2.isServer, !this.server && h && $e && ($e = false, Pe(this)), ge(this, () => ((e3) => {
      const t3 = e3.getTag(), { length: n3 } = t3;
      let o2 = "";
      for (let s2 = 0; s2 < n3; s2++) {
        const n4 = O(s2);
        if (void 0 === n4) continue;
        const r2 = e3.names.get(n4);
        if (void 0 === r2 || !r2.size) continue;
        const i2 = t3.getGroup(s2);
        if (0 === i2.length) continue;
        const a2 = l + ".g" + s2 + '[id="' + n4 + '"]';
        let c2 = "";
        for (const e4 of r2) e4.length > 0 && (c2 += e4 + ",");
        o2 += i2 + a2 + '{content:"' + c2 + '"}' + d;
      }
      return o2;
    })(this));
  }
  rehydrate() {
    !this.server && h && Pe(this);
  }
  reconstructWithOptions(e2, t2 = true) {
    const n2 = new je(Object.assign(Object.assign({}, this.options), e2), this.gs, t2 && this.names || void 0);
    return n2.keyframeIds = new Set(this.keyframeIds), !this.server && h && e2.target !== this.options.target && we(this.options.target) !== we(e2.target) && Pe(n2), n2;
  }
  allocateGSInstance(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e2 = (({ isServer: e3, useCSSOMInjection: t2, target: n2, nonce: o2 }) => e3 ? new xe(n2) : t2 ? new Ae(n2, o2) : new _e(n2, o2))(this.options), new ye(e2)));
    var e2;
  }
  hasNameForId(e2, t2) {
    var n2, o2;
    return null !== (o2 = null === (n2 = this.names.get(e2)) || void 0 === n2 ? void 0 : n2.has(t2)) && void 0 !== o2 && o2;
  }
  registerName(e2, t2) {
    P(e2), e2.startsWith(g) && this.keyframeIds.add(e2);
    const n2 = this.names.get(e2);
    n2 ? n2.add(t2) : this.names.set(e2, /* @__PURE__ */ new Set([t2]));
  }
  insertRules(e2, t2, n2) {
    this.registerName(e2, t2), this.getTag().insertRules(P(e2), n2);
  }
  clearNames(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }
  clearRules(e2) {
    this.getTag().clearGroup(P(e2)), this.clearNames(e2);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const ke = /* @__PURE__ */ new WeakSet(), Te = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function De(e2, t2) {
  return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e2 in Te || e2.startsWith("--") ? String(t2).trim() : t2 + "px";
}
const Me = 47;
function Ve(e2) {
  if (45 === e2.charCodeAt(0) && 45 === e2.charCodeAt(1)) return e2;
  let t2 = "";
  for (let n2 = 0; n2 < e2.length; n2++) {
    const o2 = e2.charCodeAt(n2);
    t2 += o2 >= 65 && o2 <= 90 ? "-" + String.fromCharCode(o2 + 32) : e2[n2];
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
const Ge = Symbol.for("sc-keyframes");
function Fe(e2) {
  return "object" == typeof e2 && null !== e2 && Ge in e2;
}
function ze(e2) {
  return ie(e2) && !(e2.prototype && e2.prototype.isReactComponent);
}
const We = (e2) => null == e2 || false === e2 || "" === e2, Be = Symbol.for("react.client.reference");
function Le(e2) {
  return e2.$$typeof === Be;
}
function qe(e2) {
  const t2 = e2.$$id, n2 = (t2 && t2.includes("#") ? t2.split("#").pop() : t2) || e2.name || "unknown";
  console.warn(`Interpolating a client component (${n2}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function He(e2, t2) {
  for (const n2 in e2) {
    const o2 = e2[n2];
    e2.hasOwnProperty(n2) && !We(o2) && (Array.isArray(o2) && ke.has(o2) || ie(o2) ? t2.push(Ve(n2) + ":", o2, ";") : pe(o2) ? (t2.push(n2 + " {"), He(o2, t2), t2.push("}")) : t2.push(Ve(n2) + ": " + De(n2, o2) + ";"));
  }
}
function Ye(e2, t2, n2, o2, s2 = []) {
  if (We(e2)) return s2;
  const r2 = typeof e2;
  if ("string" === r2) return s2.push(e2), s2;
  if ("function" === r2) {
    if (Le(e2)) return qe(e2), s2;
    if (ze(e2) && t2) {
      const r3 = e2(t2);
      return "object" != typeof r3 || Array.isArray(r3) || Fe(r3) || pe(r3) || null === r3 || console.error(`${B(e2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), Ye(r3, t2, n2, o2, s2);
    }
    return s2.push(e2), s2;
  }
  if (Array.isArray(e2)) {
    for (let r3 = 0; r3 < e2.length; r3++) Ye(e2[r3], t2, n2, o2, s2);
    return s2;
  }
  return ae(e2) ? (s2.push(`.${e2.styledComponentId}`), s2) : Fe(e2) ? (n2 ? (e2.inject(n2, o2), s2.push(e2.getName(o2))) : s2.push(e2), s2) : Le(e2) ? (qe(e2), s2) : pe(e2) ? e2.toString !== Object.prototype.toString ? (s2.push(e2.toString()), s2) : (He(e2, s2), s2) : (s2.push(e2.toString()), s2);
}
const Ue = z(u), Je = p ? /* @__PURE__ */ new WeakMap() : null;
function Xe(e2, t2) {
  if (!Je) return null;
  const n2 = Je.get(e2);
  if (!n2) return null;
  const o2 = t2.names.get(e2.componentId);
  if (!o2) return null;
  let s2 = "";
  for (const e3 of o2) {
    const t3 = n2.get(e3);
    if (!t3) return null;
    s2 += t3;
  }
  return s2;
}
class Ze {
  constructor(e2, t2, n2) {
    this.rules = e2, this.componentId = t2, this.baseHash = F(Ue, t2), this.baseStyle = n2, je.registerId(t2);
  }
  generateAndInjectStyles(e2, t2, n2) {
    let o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t2, n2) : "";
    {
      let s2 = "";
      for (let o3 = 0; o3 < this.rules.length; o3++) {
        const r2 = this.rules[o3];
        if ("string" == typeof r2) s2 += r2;
        else if (r2) if (ze(r2)) {
          const o4 = r2(e2);
          "string" == typeof o4 ? s2 += o4 : null != o4 && false !== o4 && ("object" != typeof o4 || Array.isArray(o4) || Fe(o4) || pe(o4) || console.error(`${B(r2)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), s2 += ue(Ye(o4, e2, t2, n2)));
        } else s2 += ue(Ye(r2, e2, t2, n2));
      }
      if (s2) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const e3 = n2.hash ? n2.hash + s2 : s2;
        let r2 = this.dynamicNameCache.get(e3);
        if (!r2) {
          if (r2 = V(F(F(this.baseHash, n2.hash), s2) >>> 0), this.dynamicNameCache.size >= 200) {
            const e4 = this.dynamicNameCache.keys().next().value;
            void 0 !== e4 && this.dynamicNameCache.delete(e4);
          }
          this.dynamicNameCache.set(e3, r2);
        }
        if (!t2.hasNameForId(this.componentId, r2)) if (p && function(e4, t3) {
          var n3, o3;
          return null !== (o3 = null === (n3 = null == Je ? void 0 : Je.get(e4)) || void 0 === n3 ? void 0 : n3.has(t3)) && void 0 !== o3 && o3;
        }(this, r2)) t2.registerName(this.componentId, r2);
        else {
          const e4 = n2(s2, "." + r2, void 0, this.componentId);
          p && function(e5, t3, n3) {
            if (!Je) return;
            let o3 = Je.get(e5);
            o3 || (o3 = /* @__PURE__ */ new Map(), Je.set(e5, o3)), o3.set(t3, de(n3));
          }(this, r2, e4), t2.insertRules(this.componentId, r2, e4);
        }
        o2 = ce(o2, r2);
      }
    }
    return o2;
  }
}
const Ke = /&/g;
function Qe(e2, t2) {
  let n2 = 0;
  for (; --t2 >= 0 && 92 === e2.charCodeAt(t2); ) n2++;
  return !(1 & ~n2);
}
function et(e2) {
  const t2 = e2.length;
  let n2 = "", o2 = 0, s2 = 0, r2 = 0, i2 = false, l2 = false;
  for (let a2 = 0; a2 < t2; a2++) {
    const c2 = e2.charCodeAt(a2);
    if (0 !== r2 || i2 || c2 !== Me || 42 !== e2.charCodeAt(a2 + 1)) if (i2) 42 === c2 && e2.charCodeAt(a2 + 1) === Me && (i2 = false, a2++);
    else if (34 !== c2 && 39 !== c2 || Qe(e2, a2)) {
      if (0 === r2) if (123 === c2) s2++;
      else if (125 === c2) {
        if (s2--, s2 < 0) {
          l2 = true;
          let n3 = a2 + 1;
          for (; n3 < t2; ) {
            const t3 = e2.charCodeAt(n3);
            if (59 === t3 || 10 === t3) break;
            n3++;
          }
          n3 < t2 && 59 === e2.charCodeAt(n3) && n3++, s2 = 0, a2 = n3 - 1, o2 = n3;
          continue;
        }
        0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
      } else 59 === c2 && 0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
    } else 0 === r2 ? r2 = c2 : r2 === c2 && (r2 = 0);
    else i2 = true, a2++;
  }
  return l2 || 0 !== s2 || 0 !== r2 ? (o2 < t2 && 0 === s2 && 0 === r2 && (n2 += e2.substring(o2)), n2) : e2;
}
function tt(e2, t2) {
  const n2 = t2 + " ", o2 = "," + n2;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const r2 = e2[s2];
    if ("rule" === r2.type) {
      r2.value = (n2 + r2.value).replaceAll(",", o2);
      const e3 = r2.props, t3 = [];
      for (let o3 = 0; o3 < e3.length; o3++) t3[o3] = n2 + e3[o3];
      r2.props = t3;
    }
    Array.isArray(r2.children) && "@keyframes" !== r2.type && tt(r2.children, t2);
  }
  return e2;
}
function nt({ options: e2 = $, plugins: t2 = x } = $) {
  let n2, s2, r2;
  const i2 = (e3, t3, o2) => o2.startsWith(s2) && o2.endsWith(s2) && o2.replaceAll(s2, "").length > 0 ? `.${n2}` : e3, l2 = t2.slice();
  l2.push((e3) => {
    e3.type === o.RULESET && e3.value.includes("&") && (r2 || (r2 = new RegExp(`\\${s2}\\b`, "g")), e3.props[0] = e3.props[0].replace(Ke, s2).replace(r2, i2));
  }), e2.prefix && l2.push(o.prefixer), l2.push(o.stringify);
  let a2 = [];
  const c2 = o.middleware(l2.concat(o.rulesheet((e3) => a2.push(e3)))), u2 = (t3, i3 = "", l3 = "", u3 = "&") => {
    n2 = u3, s2 = i3, r2 = void 0;
    const d3 = function(e3) {
      const t4 = -1 !== e3.indexOf("//"), n3 = -1 !== e3.indexOf("}");
      if (!t4 && !n3) return e3;
      if (!t4) return et(e3);
      const o2 = e3.length;
      let s3 = "", r3 = 0, i4 = 0, l4 = 0, a3 = 0, c3 = 0, u4 = false;
      for (; i4 < o2; ) {
        const t5 = e3.charCodeAt(i4);
        if (34 !== t5 && 39 !== t5 || Qe(e3, i4)) if (0 === l4) if (t5 === Me && i4 + 1 < o2 && 42 === e3.charCodeAt(i4 + 1)) {
          for (i4 += 2; i4 + 1 < o2 && (42 !== e3.charCodeAt(i4) || e3.charCodeAt(i4 + 1) !== Me); ) i4++;
          i4 += 2;
        } else if (40 !== t5) if (41 !== t5) if (a3 > 0) i4++;
        else if (42 === t5 && i4 + 1 < o2 && e3.charCodeAt(i4 + 1) === Me) s3 += e3.substring(r3, i4), i4 += 2, r3 = i4, u4 = true;
        else if (t5 === Me && i4 + 1 < o2 && e3.charCodeAt(i4 + 1) === Me) {
          for (s3 += e3.substring(r3, i4); i4 < o2 && 10 !== e3.charCodeAt(i4); ) i4++;
          r3 = i4, u4 = true;
        } else 123 === t5 ? c3++ : 125 === t5 && c3--, i4++;
        else a3 > 0 && a3--, i4++;
        else a3++, i4++;
        else i4++;
        else 0 === l4 ? l4 = t5 : l4 === t5 && (l4 = 0), i4++;
      }
      return u4 ? (r3 < o2 && (s3 += e3.substring(r3)), 0 === c3 ? s3 : et(s3)) : 0 === c3 ? e3 : et(e3);
    }(t3);
    let h3 = o.compile(l3 || i3 ? l3 + " " + i3 + " { " + d3 + " }" : d3);
    return e2.namespace && (h3 = tt(h3, e2.namespace)), a2 = [], o.serialize(h3, c2), a2;
  }, d2 = e2;
  let h2 = G;
  for (let e3 = 0; e3 < t2.length; e3++) t2[e3].name || S(15), h2 = F(h2, t2[e3].name);
  return (null == d2 ? void 0 : d2.namespace) && (h2 = F(h2, d2.namespace)), (null == d2 ? void 0 : d2.prefix) && (h2 = F(h2, "p")), u2.hash = h2 !== G ? h2.toString() : "", u2;
}
var ot, st, rt;
const it = new je(), lt = nt();
let at, ct = null, ut = lt;
const dt = p && null !== (rt = null === (st = (ot = t).cache) || void 0 === st ? void 0 : st.call(ot, () => {
  it.names.clear(), it.keyframeIds.clear(), it.clearTag(), ct = null;
})) && void 0 !== rt ? rt : null, ht = { shouldForwardProp: void 0, styleSheet: it, stylis: lt, stylisPlugins: void 0 }, pt = p ? { Provider: ({ children: e2 }) => e2, Consumer: ({ children: e2 }) => e2(ht) } : t.createContext(ht);
pt.Consumer;
function mt() {
  return p ? (dt && dt(), ct || ht) : t.useContext(pt);
}
function gt(e2) {
  var n2, o2, s2;
  if (p) {
    dt && dt();
    const t2 = ct || ht, s3 = void 0 !== e2.stylisPlugins || void 0 !== e2.namespace || void 0 !== e2.enableVendorPrefixes;
    s3 && (e2.stylisPlugins && e2.stylisPlugins !== at ? (at = e2.stylisPlugins, ut = nt({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: e2.stylisPlugins })) : void 0 === e2.namespace && void 0 === e2.enableVendorPrefixes || (ut = nt({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: null !== (n2 = e2.stylisPlugins) && void 0 !== n2 ? n2 : t2.stylisPlugins })));
    const r3 = s3 ? void 0 === e2.stylisPlugins || e2.stylisPlugins.length ? ut : lt : t2.stylis, i3 = "shouldForwardProp" in e2 ? e2.shouldForwardProp : t2.shouldForwardProp, l3 = null !== (o2 = e2.stylisPlugins) && void 0 !== o2 ? o2 : t2.stylisPlugins;
    return ct = r3 !== lt || i3 ? { shouldForwardProp: i3, styleSheet: it, stylis: r3, stylisPlugins: l3 } : null, e2.children;
  }
  const r2 = mt(), { styleSheet: i2 } = r2, l2 = t.useMemo(() => {
    let t2 = i2;
    return e2.sheet ? t2 = e2.sheet : e2.target ? t2 = t2.reconstructWithOptions(void 0 !== e2.nonce ? { target: e2.target, nonce: e2.nonce } : { target: e2.target }, false) : void 0 !== e2.nonce && (t2 = t2.reconstructWithOptions({ nonce: e2.nonce })), e2.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e2.disableCSSOMInjection, e2.nonce, e2.sheet, e2.target, i2]), a2 = t.useMemo(() => {
    var t2;
    return void 0 === e2.stylisPlugins && void 0 === e2.namespace && void 0 === e2.enableVendorPrefixes ? r2.stylis : nt({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: null !== (t2 = e2.stylisPlugins) && void 0 !== t2 ? t2 : r2.stylisPlugins });
  }, [e2.enableVendorPrefixes, e2.namespace, e2.stylisPlugins, r2.stylis, r2.stylisPlugins]), c2 = "shouldForwardProp" in e2 ? e2.shouldForwardProp : r2.shouldForwardProp, u2 = null !== (s2 = e2.stylisPlugins) && void 0 !== s2 ? s2 : r2.stylisPlugins, d2 = t.useMemo(() => ({ shouldForwardProp: c2, styleSheet: l2, stylis: a2, stylisPlugins: u2 }), [c2, l2, a2, u2]);
  return t.createElement(pt.Provider, { value: d2 }, e2.children);
}
const yt = p ? { Provider: ({ children: e2 }) => e2, Consumer: ({ children: e2 }) => e2(void 0) } : t.createContext(void 0);
yt.Consumer;
const wt = {};
function Nt(e2, t2) {
  const n2 = "string" != typeof e2 ? "sc" : T(e2);
  wt[n2] = (wt[n2] || 0) + 1;
  const o2 = n2 + "-" + W(u + n2 + wt[n2]);
  return t2 ? t2 + "-" + o2 : o2;
}
let Ct;
const Pt = me(() => /* @__PURE__ */ new Set()), Ot = /* @__PURE__ */ new Map();
function Et(e2) {
  let t2 = Ot.get(e2);
  return t2 || (t2 = new RegExp("\\." + e2 + "(?![a-zA-Z0-9_-])", "g"), Ot.set(e2, t2)), t2;
}
function It(e2, t2, n2) {
  const o2 = n2.names.get(t2);
  if (o2) for (const t3 of o2) {
    const n3 = Et(t3);
    n3.lastIndex = 0, e2 = e2.replace(n3, ":where(." + t3 + ")");
  }
  return e2;
}
function At(o2, s2, r2) {
  const i2 = ae(o2), a2 = o2, c2 = !L(o2), { attrs: u2 = x, componentId: h2 = Nt(s2.displayName, s2.parentComponentId), displayName: f2 = q(o2) } = s2, m2 = s2.displayName && s2.componentId ? T(s2.displayName) + "-" + s2.componentId : s2.componentId || h2, g2 = i2 && a2.attrs ? a2.attrs.concat(u2).filter(Boolean) : u2;
  let { shouldForwardProp: y2 } = s2;
  if (i2 && a2.shouldForwardProp) {
    const e2 = a2.shouldForwardProp;
    if (s2.shouldForwardProp) {
      const t2 = s2.shouldForwardProp;
      y2 = (n2, o3) => e2(n2, o3) && t2(n2, o3);
    } else y2 = e2;
  }
  const v2 = new Ze(r2, m2, i2 ? a2.componentStyle : void 0);
  function S2(o3, s3) {
    return function(o4, s4, r3) {
      const { attrs: i3, componentStyle: a3, defaultProps: c3, foldedComponentIds: u3, styledComponentId: h3, target: f3 } = o4, m3 = p ? void 0 : t.useContext(yt), g3 = mt(), y3 = o4.shouldForwardProp || g3.shouldForwardProp;
      t.useDebugValue && t.useDebugValue(h3);
      const v3 = R(s4, m3, c3) || (p ? void 0 : $);
      let S3, b3;
      S3 = function(e2, t2, n2) {
        const o5 = Object.assign(Object.assign({}, t2), { className: void 0, theme: n2 }), s5 = e2.length > 1;
        for (let n3 = 0; n3 < e2.length; n3++) {
          const r4 = e2[n3], i4 = ie(r4) ? r4(s5 ? Object.assign({}, o5) : o5) : r4;
          for (const e3 in i4) "className" === e3 ? o5.className = ce(o5.className, i4[e3]) : "style" === e3 ? o5.style = Object.assign(Object.assign({}, o5.style), i4[e3]) : e3 in t2 && void 0 === t2[e3] || (o5[e3] = i4[e3]);
        }
        return "className" in t2 && "string" == typeof t2.className && (o5.className = ce(o5.className, t2.className)), o5;
      }(i3, s4, v3), b3 = a3.generateAndInjectStyles(S3, g3.styleSheet, g3.stylis), t.useDebugValue && t.useDebugValue(b3), o4.warnTooManyClasses && o4.warnTooManyClasses(b3);
      const w2 = S3.as || f3, N2 = function(t2, n2, o5, s5) {
        const r4 = {};
        for (const i4 in t2) void 0 === t2[i4] || "$" === i4[0] || "as" === i4 || "theme" === i4 && t2.theme === o5 || ("forwardedAs" === i4 ? r4.as = t2.forwardedAs : s5 && !s5(i4, n2) || (r4[i4] = t2[i4], s5 || false || e(i4) || (Ct || (Ct = /* @__PURE__ */ new Set())).has(i4) || !L(n2) || n2.includes("-") || (Ct.add(i4), console.warn(`styled-components: it looks like an unknown prop "${i4}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return r4;
      }(S3, w2, v3, y3);
      let C2 = ce(u3, h3);
      b3 && (C2 += " " + b3), S3.className && (C2 += " " + S3.className), N2[L(w2) && w2.includes("-") ? "class" : "className"] = C2, r3 && (N2.ref = r3);
      const O2 = createElement(w2, N2);
      if (p) {
        const e2 = Pt ? Pt() : null;
        let n2 = null, o5 = 0, s5 = "", r4 = true, i4 = a3;
        for (; i4; ) {
          const t2 = g3.styleSheet.names.get(i4.componentId);
          if (t2) {
            o5 += t2.size;
            for (const o6 of t2) e2 && e2.has(o6) || (n2 || (n2 = []), n2.push(o6), e2 && e2.add(o6));
          }
          if (n2 && r4) {
            let e3 = Xe(i4, g3.styleSheet);
            null === e3 ? r4 = false : (i4 !== a3 && (e3 = It(e3, i4.componentId, g3.styleSheet)), s5 = e3 + s5);
          }
          i4 = i4.baseStyle;
        }
        if (n2 && !r4) {
          s5 = "";
          const e3 = g3.styleSheet.getTag();
          let t2 = a3;
          for (; t2; ) {
            let n3 = e3.getGroup(P(t2.componentId));
            n3 && t2 !== a3 && (n3 = It(n3, t2.componentId, g3.styleSheet)), s5 = n3 + s5, t2 = t2.baseStyle;
          }
        }
        let c4 = "";
        if (g3.styleSheet.keyframeIds.size > 0) {
          const t2 = g3.styleSheet.getTag();
          for (const n3 of g3.styleSheet.keyframeIds) {
            if (e2 && e2.has(n3)) continue;
            const o6 = t2.getGroup(P(n3));
            o6 && (c4 += o6, e2 && e2.add(n3));
          }
        }
        if (s5 && e2 && n2 && n2.length < o5) {
          const e3 = s5.split(d);
          let t2 = "";
          for (let o6 = 0; o6 < e3.length; o6++) {
            const s6 = e3[o6];
            if (s6) for (let e4 = 0; e4 < n2.length; e4++) {
              const o7 = Et(n2[e4]);
              if (o7.lastIndex = 0, o7.test(s6)) {
                t2 += s6 + d;
                break;
              }
            }
          }
          s5 = t2;
        }
        const u4 = he(c4 + s5);
        if (u4) {
          const e3 = t.createElement("style", { [l]: "", key: "sc-" + a3.componentId, children: u4 });
          return t.createElement(t.Fragment, null, e3, O2);
        }
      }
      return O2;
    }(b2, o3, s3);
  }
  S2.displayName = f2;
  let b2 = t.forwardRef(S2);
  return b2.attrs = g2, b2.componentStyle = v2, b2.displayName = f2, b2.shouldForwardProp = y2, b2.foldedComponentIds = i2 ? ce(a2.foldedComponentIds, a2.styledComponentId) : "", b2.styledComponentId = m2, b2.target = i2 ? a2.target : o2, Object.defineProperty(b2, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(e2) {
    this._foldedDefaultProps = i2 ? function(e3, ...t2) {
      for (const n2 of t2) fe(e3, n2, true);
      return e3;
    }({}, a2.defaultProps, e2) : e2;
  } }), _(f2, m2), b2.warnTooManyClasses = /* @__PURE__ */ ((e2, t2) => {
    let n2 = {}, o3 = false;
    return (s3) => {
      !o3 && (n2[s3] = true, Object.keys(n2).length >= 200) && (console.warn(`Over 200 classes were generated for component ${e2}${t2 ? ` with the id of "${t2}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), o3 = true, n2 = {});
    };
  })(f2, m2), ge(b2, () => `.${b2.styledComponentId}`), c2 && re(b2, o2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), b2;
}
var _t = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function xt(e2, t2) {
  const n2 = [e2[0]];
  for (let o2 = 0, s2 = t2.length; o2 < s2; o2 += 1) n2.push(t2[o2], e2[o2 + 1]);
  return n2;
}
const $t = (e2) => (ke.add(e2), e2);
function Rt(e2, ...t2) {
  if (ie(e2) || pe(e2)) return $t(Ye(xt(x, [e2, ...t2])));
  const n2 = e2;
  return 0 === t2.length && 1 === n2.length && "string" == typeof n2[0] ? Ye(n2) : $t(Ye(xt(n2, t2)));
}
function jt(e2, t2, n2 = $) {
  if (!t2) throw S(1, t2);
  const o2 = (o3, ...s2) => e2(t2, n2, Rt(o3, ...s2));
  return o2.attrs = (o3) => jt(e2, t2, Object.assign(Object.assign({}, n2), { attrs: Array.prototype.concat(n2.attrs, o3).filter(Boolean) })), o2.withConfig = (o3) => jt(e2, t2, Object.assign(Object.assign({}, n2), o3)), o2;
}
const kt = (e2) => jt(At, e2), Tt = kt;
_t.forEach((e2) => {
  Tt[e2] = kt(e2);
});
class Dt {
  constructor(e2, t2) {
    this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e2, this.componentId = t2, this.isStatic = function(e3) {
      for (let t3 = 0; t3 < e3.length; t3 += 1) {
        const n2 = e3[t3];
        if (ie(n2) && !ae(n2)) return false;
      }
      return true;
    }(e2), je.registerId(this.componentId);
  }
  removeStyles(e2, t2) {
    this.instanceRules.delete(e2), this.rebuildGroup(t2);
  }
  renderStyles(e2, t2, n2, o2) {
    const s2 = this.componentId;
    if (this.isStatic) {
      if (n2.hasNameForId(s2, s2 + e2)) this.instanceRules.has(e2) || this.computeRules(e2, t2, n2, o2);
      else {
        const r3 = this.computeRules(e2, t2, n2, o2);
        n2.insertRules(s2, r3.name, r3.rules);
      }
      return;
    }
    const r2 = this.instanceRules.get(e2);
    if (this.computeRules(e2, t2, n2, o2), !n2.server && r2) {
      const t3 = r2.rules, n3 = this.instanceRules.get(e2).rules;
      if (t3.length === n3.length) {
        let e3 = true;
        for (let o3 = 0; o3 < t3.length; o3++) if (t3[o3] !== n3[o3]) {
          e3 = false;
          break;
        }
        if (e3) return;
      }
    }
    this.rebuildGroup(n2);
  }
  computeRules(e2, t2, n2, o2) {
    const s2 = ue(Ye(this.rules, t2, n2, o2)), r2 = { name: this.componentId + e2, rules: o2(s2, "") };
    return this.instanceRules.set(e2, r2), r2;
  }
  rebuildGroup(e2) {
    const t2 = this.componentId;
    e2.clearRules(t2);
    for (const n2 of this.instanceRules.values()) e2.insertRules(t2, n2.name, n2.rules);
  }
}
const Mt = me(() => /* @__PURE__ */ new Set());
function Vt(e2, ...n2) {
  const o2 = Rt(e2, ...n2), s2 = `sc-global-${W(JSON.stringify(o2))}`, r2 = new Dt(o2, s2);
  _(s2);
  const i2 = (e3) => {
    const n3 = mt(), l2 = p ? void 0 : t.useContext(yt);
    let a2;
    if (a2 = n3.styleSheet.allocateGSInstance(s2), t.Children.count(e3.children) && console.warn(`The global style component ${s2} was given child JSX. createGlobalStyle does not render children.`), o2.some((e4) => "string" == typeof e4 && -1 !== e4.indexOf("@import")) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), (p || n3.styleSheet.server) && function(e4, t2, n4, o3, s3) {
      if (r2.isStatic) r2.renderStyles(e4, y, n4, s3);
      else {
        const l3 = Object.assign(Object.assign({}, t2), { theme: R(t2, o3, i2.defaultProps) });
        r2.renderStyles(e4, l3, n4, s3);
      }
    }(a2, e3, n3.styleSheet, l2, n3.stylis), p) {
      const e4 = "undefined" == typeof window ? r2.instanceRules.get(a2) : void 0, o3 = e4 ? de(e4.rules) : "";
      if (o3) {
        r2.instanceRules.delete(a2);
        const e5 = Mt ? Mt() : null;
        if (e5) {
          const t2 = r2.isStatic ? s2 + n3.stylis.hash : o3;
          if (e5.has(t2)) return null;
          e5.add(t2);
        }
        return t.createElement("style", { key: s2 + "-" + a2, "data-styled-global": s2, children: he(o3) });
      }
    }
    return r2.instanceRules.delete(a2), null;
  };
  return t.memo(i2);
}
const Yt = /^\s*<\/[a-z]/i;
class Ut {
  constructor({ nonce: e2 } = {}) {
    this._emitSheetCSS = () => {
      const e3 = this.instance.toString();
      if (!e3) return "";
      const t2 = this.instance.options.nonce || Ee();
      return `<style ${ue([t2 && `nonce="${t2}"`, `${l}="true"`, `${c}="${u}"`].filter(Boolean), " ")}>${e3}</style>`;
    }, this.getStyleTags = () => {
      if (this.sealed) throw S(2);
      return this._emitSheetCSS();
    }, this.getStyleElement = () => {
      if (this.sealed) throw S(2);
      const e3 = this.instance.toString();
      if (!e3) return [];
      const n2 = { [l]: "", [c]: u, dangerouslySetInnerHTML: { __html: e3 } }, o2 = this.instance.options.nonce || Ee();
      return o2 && (n2.nonce = o2), [t.createElement("style", Object.assign({}, n2, { key: "sc-0-0" }))];
    }, this.seal = () => {
      this.sealed = true;
    }, this.instance = new je({ isServer: true, nonce: e2 }), this.sealed = false;
  }
  collectStyles(e2) {
    if (this.sealed) throw S(2);
    return t.createElement(gt, { sheet: this.instance }, e2);
  }
  interleaveWithNodeStream(e2) {
    if (this.sealed) throw S(2);
    this.seal();
    const { Transform: t2 } = require("stream"), { instance: n2, _emitSheetCSS: o2 } = this, s2 = new t2({ transform: function(e3, t3, s3) {
      const r2 = e3.toString(), i2 = o2();
      if (n2.clearTag(), Yt.test(r2)) {
        const e4 = r2.indexOf(">") + 1, t4 = r2.slice(0, e4), n3 = r2.slice(e4);
        this.push(t4 + i2 + n3);
      } else this.push(i2 + r2);
      s3();
    } });
    if ("on" in e2 && "function" == typeof e2.on && "pipe" in e2) {
      const t3 = e2;
      return t3.on("error", (e3) => {
        s2.emit("error", e3);
      }), t3.pipe(s2);
    }
    if ("pipe" in e2 && "function" == typeof e2.pipe) return e2.pipe(s2);
    throw new Error("Unsupported stream type");
  }
}
"undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://styled-components.com/docs/basics#react-native");
const Xt = `__sc-${l}__`;
"undefined" != typeof window && (window[Xt] || (window[Xt] = 0), 1 === window[Xt] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info."), window[Xt] += 1);
const logo = "data:image/png;base64,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";
const colors = {
  salmon: "#E66767",
  cream: "#FFF8F2",
  peach: "#FFEBD9",
  white: "#FFFFFF",
  gold: "#FFB930",
  overlay: "rgba(0, 0, 0, 0.78)"
};
const GlobalStyle = Vt`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    background: ${colors.cream};
    color: ${colors.salmon};
    font-family: 'Roboto', Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body.cart-open {
    overflow: hidden;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    width: min(1024px, calc(100% - 32px));
    margin: 0 auto;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
const FooterArea = Tt.footer`
  width: 100%;
  margin-top: 120px;
  background: ${colors.peach};

  @media (max-width: 600px) {
    margin-top: 72px;
  }
`;
const FooterContent = Tt.div`
  min-height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`;
const LogoLink = Tt(Link)`
  display: block;
  flex-shrink: 0;
`;
const Logo$2 = Tt.img`
  width: 125px;
  height: 58px;
  object-fit: cover;
`;
const Socials = Tt.nav`
  display: flex;
  gap: 8px;
  margin-top: 32px;
`;
const SocialLink = Tt.a`
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${colors.salmon};
  color: ${colors.peach};
  text-decoration: none;

  &:hover {
    filter: brightness(0.9);
  }
`;
const Disclaimer = Tt.p`
  width: 100%;
  max-width: 480px;
  margin-top: auto;
  padding-top: 32px;
  color: ${colors.salmon};
  font-size: 10px;
  line-height: 12px;
  font-weight: 400;
  text-align: center;
`;
const Footer = () => /* @__PURE__ */ jsx(FooterArea, { children: /* @__PURE__ */ jsxs(FooterContent, { className: "container", children: [
  /* @__PURE__ */ jsx(LogoLink, { to: "/", "aria-label": "efood — página inicial", children: /* @__PURE__ */ jsx(Logo$2, { src: logo, alt: "efood", width: "125", height: "58" }) }),
  /* @__PURE__ */ jsxs(Socials, { "aria-label": "Redes sociais", children: [
    /* @__PURE__ */ jsx(SocialLink, { href: "https://www.instagram.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", children: /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", focusable: "false", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "5" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
      /* @__PURE__ */ jsx("circle", { cx: "17.5", cy: "6.5", r: "1", fill: "currentColor", stroke: "none" })
    ] }) }),
    /* @__PURE__ */ jsx(SocialLink, { href: "https://www.facebook.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ jsx("path", { d: "M14 22v-9h3l.5-4H14V6.5c0-1.1.3-1.8 1.9-1.8H18V1.1C17.6 1 16.4 1 15 1c-3 0-5 1.8-5 5V9H7v4h3v9h4Z" }) }) }),
    /* @__PURE__ */ jsx(SocialLink, { href: "https://twitter.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Twitter", children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ jsx("path", { d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793 3.286 3.286 0 0 0-5.595 2.994A9.325 9.325 0 0 1 1.114 2.6a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.57v.041a3.283 3.283 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.02-.616-.057a3.283 3.283 0 0 0 3.067 2.28A6.588 6.588 0 0 1 .78 13.58c-.26 0-.52-.015-.78-.046A9.344 9.344 0 0 0 5.026 15Z" }) }) })
  ] }),
  /* @__PURE__ */ jsx(Disclaimer, { children: "A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado." })
] }) });
const pattern$1 = "/assets/home-pattern-goi09kS1.png";
const HeaderArea = Tt.header`
  height: 360px;
  background-color: ${colors.peach};
  background-image: url('${({ $pattern }) => $pattern}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
`;
const HeaderContent$1 = Tt.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 43px;
`;
const Logo$1 = Tt.img`
  width: 125px;
  height: auto;
`;
const Title$1 = Tt.h1`
  margin-top: auto;
  width: 100%;
  color: ${colors.salmon};
  text-align: center;
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;

  @media (max-width: 600px) {
    font-size: 28px;
    line-height: 34px;
  }
`;
const Header = () => /* @__PURE__ */ jsx(HeaderArea, { $pattern: pattern$1, children: /* @__PURE__ */ jsxs(HeaderContent$1, { className: "container", children: [
  /* @__PURE__ */ jsx(Logo$1, { src: logo, alt: "efood" }),
  /* @__PURE__ */ jsxs(Title$1, { children: [
    "Viva experiências gastronômicas",
    /* @__PURE__ */ jsx("br", {}),
    "no conforto da sua casa"
  ] })
] }) });
const Card$1 = Tt.article`
  width: 100%;
  min-height: 398px;
  overflow: hidden;
  border: 1px solid ${colors.salmon};
  background: ${colors.white};
  color: ${colors.salmon};
`;
const ImageArea = Tt.div`
  position: relative;
  height: 217px;
  overflow: hidden;
  background: #ddd;
`;
const Image$1 = Tt.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const Tags = Tt.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`;
const Tag = Tt.span`
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 6px 8px;
  background: ${colors.salmon};
  color: ${colors.white};
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  white-space: nowrap;
`;
const Content = Tt.div`
  min-height: 181px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
const TopLine = Tt.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
const Name = Tt.h2`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
`;
const Rating = Tt.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  white-space: nowrap;
`;
const StarIcon = Tt.svg`
  width: 21px;
  height: 21px;
  flex: 0 0 21px;
  fill: ${colors.gold};
`;
const Description$1 = Tt.p`
  margin-top: 16px;
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 22px;
`;
const More = Tt(Link)`
  width: fit-content;
  margin-top: auto;
  padding: 6px 8px;
  background: ${colors.salmon};
  color: ${colors.white};
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;
const RestaurantCard = ({ restaurant }) => /* @__PURE__ */ jsxs(Card$1, { children: [
  /* @__PURE__ */ jsxs(ImageArea, { children: [
    /* @__PURE__ */ jsx(Image$1, { src: restaurant.imagem, alt: restaurant.nome }),
    /* @__PURE__ */ jsxs(Tags, { children: [
      restaurant.destacado && /* @__PURE__ */ jsx(Tag, { children: "Destaque da semana" }),
      /* @__PURE__ */ jsx(Tag, { children: restaurant.categoria })
    ] })
  ] }),
  /* @__PURE__ */ jsxs(Content, { children: [
    /* @__PURE__ */ jsxs(TopLine, { children: [
      /* @__PURE__ */ jsx(Name, { children: restaurant.nome }),
      /* @__PURE__ */ jsxs(Rating, { children: [
        restaurant.avaliacao.toFixed(1),
        /* @__PURE__ */ jsx(StarIcon, { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "m12 2.4 2.82 5.72 6.31.92-4.56 4.45 1.08 6.28L12 16.8l-5.65 2.97 1.08-6.28-4.56-4.45 6.31-.92L12 2.4Z" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Description$1, { children: restaurant.descricao }),
    /* @__PURE__ */ jsx(More, { to: `/restaurante/${restaurant.id === 1 ? 1 : 2}`, children: "Saiba mais" })
  ] })
] });
const sushiImage = "/assets/sushi-deKy5t85.jpg";
const pastaImage = "/assets/pasta-BJm2iT9q.jpg";
const pizzaImage = "/assets/pizza-BGJgdjbl.jpg";
const sushiDescription = "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!";
const italianDescription = "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!";
const pizzaDescription = "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!";
const restaurants = [
  {
    id: 1,
    nome: "Hioki Sushi",
    categoria: "Japonesa",
    destacado: true,
    avaliacao: 4.9,
    imagem: sushiImage,
    descricao: sushiDescription
  },
  ...Array.from({ length: 5 }, (_2, index) => ({
    id: index + 2,
    nome: "La Dolce Vita Trattoria",
    categoria: "Italiana",
    destacado: false,
    avaliacao: 4.6,
    imagem: pastaImage,
    descricao: italianDescription
  }))
];
const pizzaMenu = Array.from({ length: 6 }, (_2, index) => ({
  id: index + 1,
  nome: "Pizza Marguerita",
  descricao: pizzaDescription,
  imagem: pizzaImage,
  preco: 60.9,
  porcao: "2 a 3 pessoas"
}));
const restaurantProfiles = {
  1: {
    id: 1,
    nome: "Hioki Sushi",
    categoria: "Japonesa",
    hero: sushiImage,
    cardapio: pizzaMenu
  },
  2: {
    id: 2,
    nome: "La Dolce Vita Trattoria",
    categoria: "Italiana",
    hero: pastaImage,
    cardapio: pizzaMenu
  }
};
const getProfileByRestaurantId = (id) => {
  const numericId = Number(id);
  if (numericId === 1) return restaurantProfiles[1];
  if (numericId >= 2 && numericId <= 6) return restaurantProfiles[2];
  return null;
};
const Main$1 = Tt.main`
  padding-top: 80px;
`;
const Grid = Tt.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;
const Home = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Header, {}),
  /* @__PURE__ */ jsx(Main$1, { children: /* @__PURE__ */ jsx(Grid, { className: "container", children: restaurants.map((restaurant) => /* @__PURE__ */ jsx(RestaurantCard, { restaurant }, restaurant.id)) }) }),
  /* @__PURE__ */ jsx(Footer, {})
] });
const STORAGE_KEY = "efood-m35-cart";
const CartContext = createContext(null);
const loadInitialItems = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};
const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadInitialItems);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
    }
  }, [items]);
  const addItem = useCallback((product) => {
    setItems((current) => [
      ...current,
      {
        ...product,
        cartItemId: `${product.id}-${Date.now()}-${Math.random()}`
      }
    ]);
    setIsOpen(true);
  }, []);
  const removeItem = useCallback((cartItemId) => {
    setItems(
      (current) => current.filter((item) => item.cartItemId !== cartItemId)
    );
  }, []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const total = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.preco || 0), 0),
    [items]
  );
  const value = useMemo(
    () => ({
      items,
      count: items.length,
      total,
      isOpen,
      addItem,
      removeItem,
      openCart,
      closeCart
    }),
    [items, total, isOpen, addItem, removeItem, openCart, closeCart]
  );
  return /* @__PURE__ */ jsx(CartContext.Provider, { value, children });
};
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart precisa ser usado dentro de CartProvider");
  }
  return context;
};
const Card = Tt.article`
  min-height: 338px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${colors.salmon};
  color: ${colors.white};
`;
const Image = Tt.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`;
const Title = Tt.h2`
  margin-top: 8px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 900;
`;
const Description = Tt.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 22px;
`;
const AddButton = Tt.button`
  width: 100%;
  min-height: 24px;
  margin-top: auto;
  border: 0;
  background: ${colors.peach};
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;
const MenuCard = ({ item }) => {
  const { addItem } = useCart();
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(Image, { src: item.imagem, alt: item.nome }),
    /* @__PURE__ */ jsx(Title, { children: item.nome }),
    /* @__PURE__ */ jsx(Description, { children: item.descricao }),
    /* @__PURE__ */ jsx(AddButton, { type: "button", onClick: () => addItem(item), children: "Adicionar ao carrinho" })
  ] });
};
const trashIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAARVJREFUeAHNk7FqAkEQhmc24S5cda1HQs7kPZK8RiCFKdTTyjaBhEUCaQ2m88CXSSv4BgcJciks0gTj5vbGVTw5dRcULZzqn5+fjxl2FmDHQp0Zl8vXKWOlvEdp+nba6fRXs8c6ACHeepYVYLs9ngGDwE8RS0r2tRNEjYZrj0avOf8GiD4AMZkBiVwVvFR9b96TcJzHYqv1s1gh4vzEjuNnNVL3t1D40k1mDYc+CnE39ryXIud/a4FBpdIc1OtnYKjpKirD8x4zhT+r1atMf9dqF6acEXAEcJ9p9QJPWwM2rQMG/EvZzLSQ8n1rgB+GUabPw7C3GQCR1Jk5prBkzF31lv4CQ+ySlA/qWGwtIUlAMMZhnzUBo7lcmaLNWs8AAAAASUVORK5CYII=";
const Overlay = Tt.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: ${colors.overlay};
`;
const Drawer = Tt.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: min(360px, 100%);
  min-height: 100vh;
  padding: 8px;
  overflow-y: auto;
  background: ${colors.salmon};
`;
const Empty = Tt.p`
  margin: 32px 16px;
  color: ${colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
const Items = Tt.div`
  display: grid;
  gap: 12px;
`;
const Item = Tt.article`
  position: relative;
  min-height: 100px;
  display: grid;
  grid-template-columns: 80px 1fr 24px;
  gap: 8px;
  padding: 8px;
  background: ${colors.peach};
  color: ${colors.salmon};
`;
const ItemImage = Tt.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;
const ItemInfo = Tt.div`
  min-width: 0;
`;
const ItemName = Tt.h3`
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`;
const ItemPrice = Tt.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 16px;
`;
const RemoveButton = Tt.button`
  align-self: end;
  width: 24px;
  height: 24px;
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;

  img {
    width: 16px;
    height: 16px;
  }
`;
const Summary = Tt.div`
  margin-top: 32px;
  color: ${colors.white};
`;
const TotalRow = Tt.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  font-size: 14px;
  line-height: 16px;
`;
const ContinueButton = Tt.button`
  width: 100%;
  min-height: 24px;
  margin-top: 16px;
  border: 0;
  background: ${colors.peach};
  color: ${colors.salmon};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
`;
const formatPrice = (value) => new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
}).format(value);
const Cart = () => {
  const { items, total, isOpen, closeCart, removeItem } = useCart();
  useEffect(() => {
    if (!isOpen) return void 0;
    document.body.classList.add("cart-open");
    const onKeyDown = (event) => event.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("cart-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeCart]);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(Overlay, { onMouseDown: (event) => event.target === event.currentTarget && closeCart(), children: /* @__PURE__ */ jsx(Drawer, { role: "dialog", "aria-modal": "true", "aria-label": "Carrinho de compras", children: items.length === 0 ? /* @__PURE__ */ jsx(Empty, { children: "O carrinho está vazio." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Items, { children: items.map((item) => /* @__PURE__ */ jsxs(Item, { children: [
      /* @__PURE__ */ jsx(ItemImage, { src: item.imagem, alt: item.nome }),
      /* @__PURE__ */ jsxs(ItemInfo, { children: [
        /* @__PURE__ */ jsx(ItemName, { children: item.nome }),
        /* @__PURE__ */ jsx(ItemPrice, { children: formatPrice(item.preco) })
      ] }),
      /* @__PURE__ */ jsx(
        RemoveButton,
        {
          type: "button",
          "aria-label": `Remover ${item.nome}`,
          onClick: () => removeItem(item.cartItemId),
          children: /* @__PURE__ */ jsx("img", { src: trashIcon, alt: "" })
        }
      )
    ] }, item.cartItemId)) }),
    /* @__PURE__ */ jsxs(Summary, { children: [
      /* @__PURE__ */ jsxs(TotalRow, { children: [
        /* @__PURE__ */ jsx("strong", { children: "Valor total" }),
        /* @__PURE__ */ jsx("strong", { children: formatPrice(total) })
      ] }),
      /* @__PURE__ */ jsx(ContinueButton, { type: "button", onClick: closeCart, children: "Continuar com a entrega" })
    ] })
  ] }) }) });
};
const pattern = "/assets/profile-pattern-D5hTF0E8.png";
const ProfileHeader = Tt.header`
  height: 163px;
  background-color: ${colors.peach};
  background-image: url('${({ $pattern }) => $pattern}');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;

  @media (max-width: 680px) {
    height: auto;
    min-height: 170px;
  }
`;
const HeaderContent = Tt.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 12px;
    padding: 18px 0;
  }
`;
const Back = Tt(Link)`
  color: ${colors.salmon};
  text-decoration: none;
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
`;
const Logo = Tt.img`
  width: 125px;
  height: auto;
`;
const CartButton = Tt.button`
  justify-self: end;
  max-width: 100%;
  border: 0;
  background: transparent;
  color: ${colors.salmon};
  font-size: 18px;
  line-height: 21px;
  font-weight: 900;
  white-space: nowrap;

  @media (max-width: 680px) {
    justify-self: center;
    white-space: normal;
  }
`;
const Hero = Tt.section`
  position: relative;
  isolation: isolate;
  height: 280px;
  overflow: hidden;
  background-image: ${({ $image }) => $image ? `url('${$image}')` : "none"};
  background-size: cover;
  background-position: center;
`;
const HeroOverlay = Tt.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.42);
  pointer-events: none;
`;
const HeroContent = Tt.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 32px;
  color: ${colors.white};
`;
const Category = Tt.p`
  color: ${colors.white};
  font-size: 32px;
  line-height: 38px;
  font-weight: 100;

  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 32px;
  }
`;
const RestaurantName = Tt.h1`
  color: ${colors.white};
  max-width: 100%;
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 32px;
  }
`;
const Main = Tt.main`
  padding-top: 56px;

  @media (max-width: 600px) {
    padding-top: 40px;
  }
`;
const MenuGrid = Tt.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 580px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }
`;
const Restaurant = () => {
  const { id } = useParams();
  const { count, openCart } = useCart();
  if (!id) return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
  const restaurant = getProfileByRestaurantId(id);
  if (!restaurant) return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ProfileHeader, { $pattern: pattern, children: /* @__PURE__ */ jsxs(HeaderContent, { className: "container", children: [
      /* @__PURE__ */ jsx(Back, { to: "/", children: "Restaurantes" }),
      /* @__PURE__ */ jsx(Logo, { src: logo, alt: "efood" }),
      /* @__PURE__ */ jsxs(CartButton, { type: "button", onClick: openCart, children: [
        count,
        " produto(s) no carrinho"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Hero, { $image: restaurant.hero, "aria-labelledby": "restaurant-name", children: [
      /* @__PURE__ */ jsx(HeroOverlay, { "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs(HeroContent, { className: "container", children: [
        /* @__PURE__ */ jsx(Category, { children: restaurant.categoria }),
        /* @__PURE__ */ jsx(RestaurantName, { id: "restaurant-name", children: restaurant.nome })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Main, { children: /* @__PURE__ */ jsx(MenuGrid, { className: "container", children: restaurant.cardapio.map((item) => /* @__PURE__ */ jsx(MenuCard, { item }, item.id)) }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(Cart, {})
  ] });
};
const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/restaurante/:id", element: /* @__PURE__ */ jsx(Restaurant, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) })
  ] });
};
const storageKey = "efood-m35-cart";
function inspectPage(path) {
  const sheet = new Ut();
  try {
    const html = renderToStaticMarkup(sheet.collectStyles(
      /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(GlobalStyle, {}),
        /* @__PURE__ */ jsx(CartProvider, { children: /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(App, {}) }) })
      ] })
    ));
    const doc = new JSDOM(html).window.document;
    return { doc, css: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
function checkFooter(doc) {
  const footer = doc.querySelector("footer");
  assert.ok(footer, "As duas páginas precisam de um footer HTML");
  assert.equal(footer.querySelectorAll("img").length, 1, "Somente a marca deve ser uma imagem no rodapé");
  assert.equal(footer.querySelector("img").alt, "efood");
  assert.equal(footer.querySelector("a").getAttribute("href"), "/");
  const links = [...footer.querySelectorAll("nav a")];
  assert.deepEqual(links.map((link) => link.getAttribute("aria-label")), ["Instagram", "Facebook", "Twitter"]);
  assert.ok(links.every((link) => link.querySelector("svg") && link.getAttribute("href").startsWith("https://")));
  assert.match(footer.querySelector("p").textContent, /responsabilidade pela entrega, qualidade dos produtos/);
  assert.equal(footer.querySelectorAll('img[src*="footer-figma"]').length, 0);
}
test("Home: seis restaurantes e rodapé com elementos reais", () => {
  const { doc, css } = inspectPage("/");
  assert.match(doc.querySelector("h1").textContent, /Viva experiências gastronômicas/);
  assert.equal(doc.querySelectorAll("main article").length, 6);
  assert.equal(doc.querySelectorAll("main a").length, 6);
  checkFooter(doc);
  assert.match(css, /min-height:298px/);
  assert.match(css, /max-width:480px/);
});
test("Perfil: categoria e nome são texto HTML visível, sobre uma foto", () => {
  const { doc, css } = inspectPage("/restaurante/2");
  const banner = doc.querySelector('section[aria-labelledby="restaurant-name"]');
  assert.ok(banner);
  assert.equal(banner.querySelector("h1").textContent, "La Dolce Vita Trattoria");
  assert.equal(banner.querySelector("p").textContent, "Italiana");
  assert.equal(banner.querySelectorAll(".sr-only").length, 0, "O texto do banner não pode ficar escondido");
  assert.equal(banner.querySelectorAll("img").length, 0, "O banner completo não pode ser uma captura de tela");
  assert.match(css, /background-image:url\('/);
  assert.match(css, /color:#FFFFFF/);
  assert.match(css, /height:280px/);
  assert.match(css, /font-weight:100/);
  assert.match(css, /font-weight:900/);
  assert.equal(doc.querySelectorAll("main article").length, 6);
  checkFooter(doc);
});
test("Todos os perfis válidos carregam com título visível e rodapé", () => {
  for (const id of [1, 2, 3, 4, 5, 6]) {
    const { doc } = inspectPage("/restaurante/" + id);
    const title = doc.querySelector("#restaurant-name");
    assert.ok(title == null ? void 0 : title.textContent.trim());
    assert.ok(!title.classList.contains("sr-only"));
    checkFooter(doc);
  }
});
test("CSS inclui grades e ajustes para telas pequenas", () => {
  const { css } = inspectPage("/restaurante/2");
  assert.match(css, /repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /@media\s*\(max-width:\s*880px\)/);
  assert.match(css, /@media\s*\(max-width:\s*580px\)/);
  assert.match(css, /@media\s*\(max-width:\s*680px\)/);
  assert.match(css, /overflow-wrap:anywhere/);
});
test("Carrinho: adicionar, voltar, reabrir, recarregar e remover", async () => {
  const dom = new JSDOM('<div id="root"></div>', { url: "http://localhost/restaurante/2" });
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  let scrollCalls = 0;
  window.scrollTo = () => {
    scrollCalls += 1;
  };
  let root;
  const mount = async (path = "/restaurante/2") => {
    root = createRoot(document.querySelector("#root"));
    await act(async () => root.render(
      /* @__PURE__ */ jsx(MemoryRouter, { initialEntries: [path], future: { v7_startTransition: true, v7_relativeSplatPath: true }, children: /* @__PURE__ */ jsxs(CartProvider, { children: [
        /* @__PURE__ */ jsx(GlobalStyle, {}),
        /* @__PURE__ */ jsx(App, {})
      ] }) })
    ));
  };
  const click = async (element) => {
    assert.ok(element, "O controle precisa existir");
    await act(async () => element.dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true })));
  };
  const close = async () => {
    await act(async () => window.dispatchEvent(new window.KeyboardEvent("keydown", { key: "Escape", bubbles: true })));
  };
  const findButton = (text) => [...document.querySelectorAll("button")].find((button) => button.textContent.includes(text));
  try {
    await mount();
    await click(findButton("Adicionar ao carrinho"));
    assert.ok(document.querySelector('[role="dialog"]'));
    assert.equal(JSON.parse(window.localStorage.getItem(storageKey)).length, 1);
    assert.match(document.querySelector('[role="dialog"]').textContent, /60,90/);
    await close();
    assert.equal(document.querySelector('[role="dialog"]'), null);
    await click([...document.querySelectorAll("a")].find((link) => link.textContent === "Restaurantes"));
    assert.match(document.querySelector("h1").textContent, /Viva experiências/);
    await click(document.querySelector('a[href="/restaurante/2"]'));
    assert.match(findButton("produto(s)").textContent, /1 produto/);
    assert.ok(scrollCalls >= 3, "Cada navegação deve levar o visitante ao início da página");
    await act(async () => root.unmount());
    await mount();
    assert.match(findButton("produto(s)").textContent, /1 produto/, "O carrinho deve sobreviver ao recarregamento");
    await click(findButton("produto(s)"));
    await click(document.querySelector('button[aria-label="Remover Pizza Marguerita"]'));
    assert.match(document.querySelector('[role="dialog"]').textContent, /carrinho está vazio/);
    assert.deepEqual(JSON.parse(window.localStorage.getItem(storageKey)), []);
    await close();
    await act(async () => root.unmount());
    window.localStorage.setItem(storageKey, "null");
    await mount();
    assert.match(findButton("produto(s)").textContent, /0 produto/);
    await act(async () => root.unmount());
    window.localStorage.setItem(storageKey, "{JSON inválido");
    await mount();
    assert.match(findButton("produto(s)").textContent, /0 produto/);
    await act(async () => root.unmount());
    await mount("/restaurante/999");
    assert.match(document.querySelector("h1").textContent, /Viva experiências/);
  } finally {
    if (root) await act(async () => root.unmount());
    dom.window.close();
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.HTMLElement;
    delete globalThis.IS_REACT_ACT_ENVIRONMENT;
  }
});
