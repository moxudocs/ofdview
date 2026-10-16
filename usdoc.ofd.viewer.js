// @__NO_SIDE_EFFECTS__
function Ws(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ue = {}, Ft = [], lt = () => {
}, Ki = () => !1, Kn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gn = (e) => e.startsWith("onUpdate:"), Ae = Object.assign, qs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ho = Object.prototype.hasOwnProperty, ie = (e, t) => ho.call(e, t), V = Array.isArray, St = (e) => yn(e) === "[object Map]", Fn = (e) => yn(e) === "[object Set]", ci = (e) => yn(e) === "[object Date]", J = (e) => typeof e == "function", we = (e) => typeof e == "string", at = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Gi = (e) => (le(e) || J(e)) && J(e.then) && J(e.catch), Yi = Object.prototype.toString, yn = (e) => Yi.call(e), po = (e) => yn(e).slice(8, -1), Ji = (e) => yn(e) === "[object Object]", Vs = (e) => we(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ Ws(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, go = /-\w/g, Je = Yn(
  (e) => e.replace(go, (t) => t.slice(1).toUpperCase())
), mo = /\B([A-Z])/g, Nt = Yn(
  (e) => e.replace(mo, "-$1").toLowerCase()
), Xi = Yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = Yn(
  (e) => e ? `on${Xi(e)}` : ""
), ot = (e, t) => !Object.is(e, t), On = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Zi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Bs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ui;
const Jn = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ze(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = we(s) ? wo(s) : ze(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (we(e) || le(e))
    return e;
}
const vo = /;(?![^(]*\))/g, yo = /:([^]+)/, bo = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function wo(e) {
  const t = {};
  return e.replace(bo, (n) => n.startsWith("/*") ? "" : n).split(vo).forEach((n) => {
    if (n) {
      const s = n.split(yo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ct(e) {
  let t = "";
  if (we(e))
    t = e;
  else if (V(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ct(e[n]);
      s && (t += s + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const xo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly", _o = /* @__PURE__ */ Ws(xo);
function Qi(e) {
  return !!e || e === "";
}
function Mo(e, t, n) {
  if (e.length !== t.length) return !1;
  let s = !0;
  for (let i = 0; s && i < e.length; i++)
    s = Xn(e[i], t[i], n);
  return s;
}
function fi(e, t, n) {
  if (e.size !== t.size) return !1;
  const s = Array.from(t), i = new Uint8Array(s.length);
  for (const r of e) {
    let o = -1;
    for (let l = 0; l < s.length; l++)
      if (!i[l] && Xn(r, s[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    i[o] = 1;
  }
  return !0;
}
function So(e, t, n) {
  let s = St(e), i = St(t);
  if (s || i || (s = Fn(e), i = Fn(t), s || i))
    return s && i ? fi(e, t, n) : !1;
  const r = Object.keys(e).length, o = Object.keys(t).length;
  if (r !== o)
    return !1;
  for (const l in e) {
    const a = e.hasOwnProperty(l), h = t.hasOwnProperty(l);
    if (a && !h || !a && h || !Xn(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function hi(e, t, n, s) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [i, r] = n;
  if (i.has(e) || r.has(t))
    return i.get(e) === t && r.get(t) === e;
  i.set(e, t), r.set(t, e);
  const o = s(e, t, n);
  return i.delete(e), r.delete(t), o;
}
function Xn(e, t, n) {
  if (e === t) return !0;
  let s = ci(e), i = ci(t);
  return s || i ? s && i ? e.getTime() === t.getTime() : !1 : (s = at(e), i = at(t), s || i ? e === t : (s = V(e), i = V(t), s || i ? s && i ? hi(e, t, n, Mo) : !1 : (s = le(e), i = le(t), s || i ? !s || !i ? !1 : hi(e, t, n, So) : String(e) === String(t))));
}
const er = (e) => !!(e && e.__v_isRef === !0), Me = (e) => we(e) ? e : e == null ? "" : V(e) || le(e) && (e.toString === Yi || !J(e.toString)) ? er(e) ? Me(e.value) : JSON.stringify(e, tr, 2) : String(e), tr = (e, t) => er(t) ? tr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[cs(s, r) + " =>"] = i, n),
    {}
  )
} : Fn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => cs(n))
} : at(t) ? cs(t) : le(t) && !V(t) && !Ji(t) ? String(t) : t, cs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    at(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Ee;
class Co {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && Ee && (Ee.active ? (this.parent = Ee, this.index = (Ee.scopes || (Ee.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, n = s.length; t < n; t++)
          s[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const i = this.scopes.slice();
        for (t = 0, n = i.length; t < n; t++)
          i[t].resume();
      }
      const s = this.effects.slice();
      for (t = 0, n = s.length; t < n; t++)
        s[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ee;
      try {
        return Ee = this, t();
      } finally {
        Ee = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ee, Ee = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (Ee === this)
        Ee = this.prevScope;
      else {
        let t = Ee;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const i = this.scopes.slice();
        for (n = 0, s = i.length; n < s; n++)
          i[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function To() {
  return Ee;
}
let me;
const us = /* @__PURE__ */ new WeakSet();
class nr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ee && (Ee.active ? Ee.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, us.has(this) && (us.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ir(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, di(this), rr(this);
    const t = me, n = Xe;
    me = this, Xe = !0;
    try {
      return this.fn();
    } finally {
      or(this), me = t, Xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ys(t);
      this.deps = this.depsTail = void 0, di(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? us.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let sr = 0, rn, on;
function ir(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = rn, rn = e;
}
function Ks() {
  sr++;
}
function Gs() {
  if (--sr > 0)
    return;
  if (on) {
    let t = on;
    for (on = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; rn; ) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function rr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function or(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Ys(s), Eo(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (lr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function lr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = me, s = Xe;
  me = e, Xe = !0;
  try {
    rr(e);
    const i = e.fn(e._value);
    (t.version === 0 || ot(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    me = n, Xe = s, or(e), e.flags &= -3;
  }
}
function Ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ys(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Eo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Xe = !0;
const ar = [];
function ct() {
  ar.push(Xe), Xe = !1;
}
function ut() {
  const e = ar.pop();
  Xe = e === void 0 ? !0 : e;
}
function di(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = me;
    me = void 0;
    try {
      t();
    } finally {
      me = n;
    }
  }
}
let fn = 0;
class ko {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Js {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!me || !Xe || me === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== me)
      n = this.activeLink = new ko(me, this), me.deps ? (n.prevDep = me.depsTail, me.depsTail.nextDep = n, me.depsTail = n) : me.deps = me.depsTail = n, cr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = me.depsTail, n.nextDep = void 0, me.depsTail.nextDep = n, me.depsTail = n, me.deps === n && (me.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    Ks();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function cr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        cr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Es = /* @__PURE__ */ new WeakMap(), Lt = /* @__PURE__ */ Symbol(
  ""
), ks = /* @__PURE__ */ Symbol(
  ""
), hn = /* @__PURE__ */ Symbol(
  ""
);
function Pe(e, t, n) {
  if (Xe && me) {
    let s = Es.get(e);
    s || Es.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Js()), i.map = s, i.key = n), i.track();
  }
}
function bt(e, t, n, s, i, r) {
  const o = Es.get(e);
  if (!o) {
    fn++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (Ks(), t === "clear")
    o.forEach(l);
  else {
    const a = V(e), h = a && Vs(n);
    if (a && n === "length") {
      const u = Number(s);
      o.forEach((d, m) => {
        (m === "length" || m === hn || !at(m) && m >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), h && l(o.get(hn)), t) {
        case "add":
          a ? h && l(o.get("length")) : (l(o.get(Lt)), St(e) && l(o.get(ks)));
          break;
        case "delete":
          a || (l(o.get(Lt)), St(e) && l(o.get(ks)));
          break;
        case "set":
          St(e) && l(o.get(Lt));
          break;
      }
  }
  Gs();
}
function Ht(e) {
  const t = /* @__PURE__ */ re(e);
  return t === e || (Pe(t, "iterate", hn), /* @__PURE__ */ qe(e)) ? t : /* @__PURE__ */ ft(e) ? /* @__PURE__ */ Tt(e) ? t.map((n) => Et(Ve(n))) : t.map(Et) : t.map(Ve);
}
function Zn(e) {
  return Pe(e = /* @__PURE__ */ re(e), "iterate", hn), e;
}
function st(e, t) {
  return /* @__PURE__ */ ft(e) ? Et(/* @__PURE__ */ Tt(e) ? Ve(t) : t) : Ve(t);
}
const Ao = {
  __proto__: null,
  [Symbol.iterator]() {
    return fs(this, Symbol.iterator, (e) => st(this, e));
  },
  concat(...e) {
    return Ht(this).concat(
      ...e.map((t) => V(t) ? Ht(t) : t)
    );
  },
  entries() {
    return fs(this, "entries", (e) => (e[1] = st(this, e[1]), e));
  },
  every(e, t) {
    return dt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => st(this, s)),
      arguments
    );
  },
  find(e, t) {
    return dt(
      this,
      "find",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return dt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dt(
      this,
      "findLast",
      e,
      t,
      (n) => st(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return dt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return dt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return hs(this, "includes", e);
  },
  indexOf(...e) {
    return hs(this, "indexOf", e);
  },
  join(e) {
    return Ht(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return hs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return gi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gi(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return dt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
  },
  toReversed() {
    return Ht(this).toReversed();
  },
  toSorted(e) {
    return Ht(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ht(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gt(this, "unshift", e);
  },
  values() {
    return fs(this, "values", (e) => st(this, e));
  }
};
function fs(e, t, n) {
  const s = Zn(e), i = s[t], r = i.call(s);
  if (s !== e && !/* @__PURE__ */ qe(e)) {
    if (r[Symbol.toStringTag] === "Array Iterator") {
      const o = Object.create(Object.getPrototypeOf(r));
      return o.next = () => pi(r.next(), n), i !== ur[t] && Object.defineProperties(o, {
        return: {
          get() {
            const l = r.return;
            return typeof l == "function" ? l.bind(r) : l;
          }
        },
        throw: {
          get() {
            const l = r.throw;
            return typeof l == "function" ? l.bind(r) : l;
          }
        }
      }), o;
    }
    r._next = r.next, r.next = () => pi(r._next(), n);
  }
  return r;
}
function pi(e, t) {
  return e.done || (e.value = t(e.value)), e;
}
const ur = Array.prototype;
function dt(e, t, n, s, i, r) {
  const o = Zn(e), l = o !== e && !/* @__PURE__ */ qe(e), a = o[t];
  if (a !== ur[t]) {
    const d = a.apply(e, r);
    return l ? Ve(d) : d;
  }
  let h = n;
  o !== e && (l ? h = function(d, m) {
    return n.call(this, st(e, d), m, e);
  } : n.length > 2 && (h = function(d, m) {
    return n.call(this, d, m, e);
  }));
  const u = a.call(o, h, s);
  return l && i ? i(u) : u;
}
function gi(e, t, n, s) {
  const i = Zn(e), r = i !== e && !/* @__PURE__ */ qe(e);
  let o = n, l = !1;
  i !== e && (r ? (l = s.length === 0, o = function(h, u, d) {
    return l && (l = !1, h = st(e, h)), n.call(this, h, st(e, u), d, e);
  }) : n.length > 3 && (o = function(h, u, d) {
    return n.call(this, h, u, d, e);
  }));
  const a = i[t](o, ...s);
  return l ? st(e, a) : a;
}
function hs(e, t, n) {
  const s = /* @__PURE__ */ re(e);
  Pe(s, "iterate", hn);
  const i = s[t](...n);
  return (i === -1 || i === !1) && /* @__PURE__ */ ei(n[0]) ? (n[0] = /* @__PURE__ */ re(n[0]), s[t](...n)) : i;
}
function Gt(e, t, n = []) {
  ct(), Ks();
  const s = (/* @__PURE__ */ re(e))[t].apply(e, n);
  return Gs(), ut(), s;
}
const Po = /* @__PURE__ */ Ws("__proto__,__v_isRef,__isVue"), fr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(at)
);
function Oo(e) {
  at(e) || (e = String(e));
  const t = /* @__PURE__ */ re(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class hr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (i ? r ? Ho : mr : r ? gr : pr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = V(t);
    if (!i) {
      let a;
      if (o && (a = Ao[n]))
        return a;
      if (n === "hasOwnProperty")
        return Oo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Oe(t) ? t : s
    );
    if ((at(n) ? fr.has(n) : Po(n)) || (i || Pe(t, "get", n), r))
      return l;
    if (/* @__PURE__ */ Oe(l)) {
      const a = o && Vs(n) ? l : l.value;
      return i && le(a) ? /* @__PURE__ */ Ps(a) : a;
    }
    return le(l) ? i ? /* @__PURE__ */ Ps(l) : /* @__PURE__ */ Zs(l) : l;
  }
}
class dr extends hr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    const o = V(t) && Vs(n);
    if (!this._isShallow) {
      const h = /* @__PURE__ */ ft(r);
      if (!/* @__PURE__ */ qe(s) && !/* @__PURE__ */ ft(s) && (r = /* @__PURE__ */ re(r), s = /* @__PURE__ */ re(s)), !o && /* @__PURE__ */ Oe(r) && !/* @__PURE__ */ Oe(s))
        return h || (r.value = s), !0;
    }
    const l = o ? Number(n) < t.length : ie(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Oe(t) ? t : i
    );
    return t === /* @__PURE__ */ re(i) && a && (l ? ot(s, r) && bt(t, "set", n, s) : bt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && bt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!at(n) || !fr.has(n)) && Pe(t, "has", n), s;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      V(t) ? "length" : Lt
    ), Reflect.ownKeys(t);
  }
}
class $o extends hr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Ro = /* @__PURE__ */ new dr(), Io = /* @__PURE__ */ new $o(), Do = /* @__PURE__ */ new dr(!0);
const As = (e) => e, Sn = (e) => Reflect.getPrototypeOf(e);
function Fo(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = /* @__PURE__ */ re(i), o = St(r), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, h = i[e](...s), u = n ? As : t ? Et : Ve;
    return !t && Pe(
      r,
      "iterate",
      a ? ks : Lt
    ), Ae(
      // inheriting all iterator properties
      Object.create(h),
      {
        // iterator protocol
        next() {
          const { value: d, done: m } = h.next();
          return m ? { value: d, done: m } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: m
          };
        }
      }
    );
  };
}
function Cn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Lo(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      e || (ot(i, l) && Pe(o, "get", i), Pe(o, "get", l));
      const { has: a } = Sn(o), h = t ? As : e ? Et : Ve;
      if (a.call(o, i))
        return h(r.get(i));
      if (a.call(o, l))
        return h(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Pe(/* @__PURE__ */ re(i), "iterate", Lt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = /* @__PURE__ */ re(r), l = /* @__PURE__ */ re(i);
      return e || (ot(i, l) && Pe(o, "has", i), Pe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, a = /* @__PURE__ */ re(l), h = t ? As : e ? Et : Ve;
      return !e && Pe(a, "iterate", Lt), l.forEach((u, d) => i.call(r, h(u), h(d), o));
    }
  };
  return Ae(
    n,
    e ? {
      add: Cn("add"),
      set: Cn("set"),
      delete: Cn("delete"),
      clear: Cn("clear")
    } : {
      add(i) {
        const r = /* @__PURE__ */ re(this), o = Sn(r), l = /* @__PURE__ */ re(i), a = !t && !/* @__PURE__ */ qe(i) && !/* @__PURE__ */ ft(i) ? l : i;
        return o.has.call(r, a) || ot(i, a) && o.has.call(r, i) || ot(l, a) && o.has.call(r, l) || (r.add(a), bt(r, "add", a, a)), this;
      },
      set(i, r) {
        !t && !/* @__PURE__ */ qe(r) && !/* @__PURE__ */ ft(r) && (r = /* @__PURE__ */ re(r));
        const o = /* @__PURE__ */ re(this), { has: l, get: a } = Sn(o);
        let h = l.call(o, i);
        h || (i = /* @__PURE__ */ re(i), h = l.call(o, i));
        const u = a.call(o, i);
        return o.set(i, r), h ? ot(r, u) && bt(o, "set", i, r) : bt(o, "add", i, r), this;
      },
      delete(i) {
        const r = /* @__PURE__ */ re(this), { has: o, get: l } = Sn(r);
        let a = o.call(r, i);
        a || (i = /* @__PURE__ */ re(i), a = o.call(r, i)), l && l.call(r, i);
        const h = r.delete(i);
        return a && bt(r, "delete", i, void 0), h;
      },
      clear() {
        const i = /* @__PURE__ */ re(this), r = i.size !== 0, o = i.clear();
        return r && bt(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Fo(i, e, t);
  }), n;
}
function Xs(e, t) {
  const n = Lo(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_isShallow" ? t : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const jo = {
  get: /* @__PURE__ */ Xs(!1, !1)
}, No = {
  get: /* @__PURE__ */ Xs(!1, !0)
}, Uo = {
  get: /* @__PURE__ */ Xs(!0, !1)
};
const pr = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap();
function zo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Zs(e) {
  return /* @__PURE__ */ ft(e) ? e : Qs(
    e,
    !1,
    Ro,
    jo,
    pr
  );
}
// @__NO_SIDE_EFFECTS__
function Wo(e) {
  return Qs(
    e,
    !1,
    Do,
    No,
    gr
  );
}
// @__NO_SIDE_EFFECTS__
function Ps(e) {
  return Qs(
    e,
    !0,
    Io,
    Uo,
    mr
  );
}
function Qs(e, t, n, s, i) {
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const o = zo(po(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return i.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return /* @__PURE__ */ ft(e) ? /* @__PURE__ */ Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ft(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ei(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ re(t) : e;
}
function qo(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && Zi(e, "__v_skip", !0), e;
}
const Ve = (e) => le(e) ? /* @__PURE__ */ Zs(e) : e, Et = (e) => le(e) ? /* @__PURE__ */ Ps(e) : e;
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
  return vr(e, !1);
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  return vr(e, !0);
}
function vr(e, t) {
  return /* @__PURE__ */ Oe(e) ? e : new Vo(e, t);
}
class Vo {
  constructor(t, n) {
    this.dep = new Js(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ re(t), this._value = n ? t : Ve(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ qe(t) || /* @__PURE__ */ ft(t);
    t = s ? t : /* @__PURE__ */ re(t), ot(t, n) && (this._rawValue = t, this._value = s ? t : Ve(t), this.dep.trigger());
  }
}
function ve(e) {
  return /* @__PURE__ */ Oe(e) ? e.value : e;
}
const Bo = {
  get: (e, t, n) => t === "__v_raw" ? e : ve(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return /* @__PURE__ */ Oe(i) && !/* @__PURE__ */ Oe(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function yr(e) {
  return /* @__PURE__ */ Tt(e) ? e : new Proxy(e, Bo);
}
class Ko {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Js(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    me !== this)
      return ir(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return lr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Go(e, t, n = !1) {
  let s, i;
  return J(e) ? s = e : (s = e.get, i = e.set), new Ko(s, i, n);
}
const Tn = {}, Ln = /* @__PURE__ */ new WeakMap();
let It;
function Yo(e, t = !1, n = It) {
  if (n) {
    let s = Ln.get(n);
    s || Ln.set(n, s = []), s.push(e);
  }
}
function Jo(e, t, n = ue) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: a } = n, h = (b) => i ? b : /* @__PURE__ */ qe(b) || i === !1 || i === 0 ? wt(b, 1) : wt(b);
  let u, d, m, v, p = !1, O = !1;
  if (/* @__PURE__ */ Oe(e) ? (d = () => e.value, p = /* @__PURE__ */ qe(e)) : /* @__PURE__ */ Tt(e) ? (d = () => h(e), p = !0) : V(e) ? (O = !0, p = e.some((b) => /* @__PURE__ */ Tt(b) || /* @__PURE__ */ qe(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ Oe(b))
      return b.value;
    if (/* @__PURE__ */ Tt(b))
      return h(b);
    if (J(b))
      return a ? a(b, 2) : b();
  })) : J(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (m) {
      ct();
      try {
        m();
      } finally {
        ut();
      }
    }
    const b = It;
    It = u;
    try {
      return a ? a(e, 3, [v]) : e(v);
    } finally {
      It = b;
    }
  } : d = lt, t && i) {
    const b = d, q = i === !0 ? 1 / 0 : i;
    d = () => wt(b(), q);
  }
  const j = To(), A = () => {
    u.stop(), j && j.active && qs(j.effects, u);
  };
  if (r && t) {
    const b = t;
    t = (...q) => {
      try {
        return b(...q);
      } finally {
        A();
      }
    };
  }
  let E = O ? new Array(e.length).fill(Tn) : Tn;
  const w = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const q = u.run();
        if (b || i || p || (O ? q.some((L, H) => ot(L, E[H])) : ot(q, E))) {
          const L = It;
          ct();
          try {
            m && m(), It = u;
            const H = [
              q,
              // pass undefined as the old value when it's changed for the first time
              E === Tn ? void 0 : O && E[0] === Tn ? [] : E,
              v
            ];
            E = q, a ? a(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            It = L, ut();
          }
        }
      } else
        u.run();
  };
  return l && l(w), u = new nr(d), u.scheduler = o ? () => o(w, !1) : w, v = (b) => Yo(b, !1, u), m = u.onStop = () => {
    const b = Ln.get(u);
    if (b) {
      if (a)
        a(b, 4);
      else
        for (const q of b) q();
      Ln.delete(u);
    }
  }, t ? s ? w(!0) : E = u.run() : o ? o(w.bind(null, !0), !0) : u.run(), A.pause = u.pause.bind(u), A.resume = u.resume.bind(u), A.stop = A, A;
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Oe(e))
    wt(e.value, t, n);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      wt(e[s], t, n);
  else if (Fn(e) || St(e))
    e.forEach((s) => {
      wt(s, t, n);
    });
  else if (Ji(e)) {
    for (const s in e)
      wt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && wt(e[s], t, n);
  }
  return e;
}
function bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Qn(i, t, n);
  }
}
function Ze(e, t, n, s) {
  if (J(e)) {
    const i = bn(e, t, n, s);
    return i && Gi(i) && i.catch((r) => {
      Qn(r, t, n);
    }), i;
  }
  if (V(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Ze(e[r], t, n, s));
    return i;
  }
}
function Qn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ue;
  if (t) {
    let l = t.parent;
    const a = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, a, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      ct(), bn(r, null, 10, [
        e,
        a,
        h
      ]), ut();
      return;
    }
  }
  Xo(e, n, i, s, o);
}
function Xo(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Re = [];
let Ye = -1;
const it = [];
let Mt = null, zt = 0;
const br = /* @__PURE__ */ Promise.resolve();
let jn = null;
function gt(e) {
  const t = jn || br;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zo(e) {
  let t = Ye + 1, n = Re.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Re[s], r = dn(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ti(e) {
  if (!(e.flags & 1)) {
    const t = dn(e), n = Re[Re.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= dn(n) ? Re.push(e) : Re.splice(Zo(t), 0, e), e.flags |= 1, wr();
  }
}
function wr() {
  jn || (jn = br.then(Mr));
}
function Qo(e) {
  if (!V(e))
    Mt && e.id === -1 ? Mt.splice(zt + 1, 0, e) : e.flags & 1 || (it.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      it.push(e[t]);
  wr();
}
function xr(e, t, n, s = Ye + 1) {
  for (; s < Re.length; s++) {
    const i = Re[s];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid || t !== void 0 && !(i.id >= t))
        continue;
      Re.splice(s, 1), s = e ? s - 1 : Ye, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function _r(e, t, n = 0) {
  if (it.length) {
    let s = it, i = 0;
    if (t) {
      s = [];
      for (let o = 0; o < it.length; o++) {
        const l = it[o];
        (l.i !== void 0 ? !l.i || l.i.uid < n : t.has(l)) ? it[i++] = l : s.push(l);
      }
    }
    const r = [...new Set(s)].sort((o, l) => dn(o) - dn(l));
    if (it.length = i, Mt) {
      for (let o = 0; o < r.length; o++)
        Mt.push(r[o]);
      return;
    }
    for (Mt = r, zt = 0; zt < Mt.length; zt++) {
      const o = Mt[zt];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    Mt = null, zt = 0;
  }
}
let ds = !1;
function el(e, t) {
  if (ds) {
    e();
    return;
  }
  const n = t === void 0 ? void 0 : new Set(it);
  e(), ds = !0;
  try {
    xr(void 0, t), _r(void 0, n, t);
  } finally {
    ds = !1;
  }
}
const dn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mr(e) {
  try {
    for (Ye = 0; Ye < Re.length; Ye++) {
      const t = Re[Ye];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ye < Re.length; Ye++) {
      const t = Re[Ye];
      t && (t.flags &= -2);
    }
    Ye = -1, Re.length = 0, _r(), jn = null, (Re.length || it.length) && Mr();
  }
}
let We = null, Sr = null;
function Nn(e) {
  const t = We;
  return We = e, Sr = e && e.type.__scopeId || null, t;
}
function tl(e, t = We, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Wn(-1);
    const r = Nn(t), o = jt.length;
    let l;
    try {
      l = e(...i);
    } finally {
      for (let a = jt.length; a > o; a--) Jr();
      Nn(r), s._d && Wn(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Yt(e, t) {
  if (We === null)
    return e;
  const n = is(We), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, a = ue] = t[i];
    r && (J(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && wt(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function Ot(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let a = l.dir[s];
    a && (ct(), Ze(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ut());
  }
}
function nl(e, t) {
  if (Ie) {
    let n = Ie.provides;
    const s = Ie.parent && Ie.parent.provides;
    s === n && (n = Ie.provides = Object.create(s)), n[e] = t;
  }
}
function ln(e, t, n = !1) {
  const s = Zl();
  if (s || Vt) {
    let i = Vt ? Vt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && J(t) ? t.call(s && s.proxy) : t;
  }
}
const sl = /* @__PURE__ */ Symbol.for("v-scx"), il = () => ln(sl);
function Rn(e, t, n) {
  return Cr(e, t, n);
}
function Cr(e, t, n = ue) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = Ae({}, n), a = t && s || !t && r !== "post";
  let h;
  if (vn) {
    if (r === "sync") {
      const v = il();
      h = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!a) {
      const v = () => {
      };
      return v.stop = lt, v.resume = lt, v.pause = lt, v;
    }
  }
  const u = Ie;
  l.call = (v, p, O) => Ze(v, u, p, O);
  let d = !1;
  r === "post" ? l.scheduler = (v) => {
    v.i = u, Fe(v, u && u.suspense);
  } : r !== "sync" && (d = !0, l.scheduler = (v, p) => {
    p ? v() : ti(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const m = Jo(e, t, l);
  return vn && (h ? h.push(m) : a && m()), m;
}
function rl(e, t, n) {
  const s = this.proxy, i = we(e) ? e.includes(".") ? Tr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  J(t) ? r = t : (r = t.handler, n = t);
  const o = wn(this), l = Cr(i, r.bind(s), n);
  return o(), l;
}
function Tr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const ol = /* @__PURE__ */ Symbol("_vte"), es = (e) => e.__isTeleport, ps = /* @__PURE__ */ Symbol("_leaveCb");
function ll(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Qe) {
        t = n;
        break;
      }
  }
  return t;
}
function Er(e) {
  if (!ni(e))
    return es(e.type) && e.children ? ll(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && J(n.default))
      return n.default();
  }
}
function Un(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Un(
      es(n.type) && Er(n) || n,
      t
    );
  } else if (e.shapeFlag & 128)
    e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
  else if (e.transition = t, e.type === ke && V(e.children)) {
    const n = Lr(e.children, !1);
    n && Un(n, t);
  }
}
function Os(e) {
  if (e.component)
    return Os(e.component.subTree);
  if (e.type === ke) {
    const t = V(e.children) && Lr(e.children, !1);
    return t ? Os(t) : void 0;
  }
  if (e.type !== Qe)
    return e;
}
// @__NO_SIDE_EFFECTS__
function kr(e, t) {
  return J(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ar(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mi(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Hn = /* @__PURE__ */ new WeakMap();
function an(e, t, n, s, i = !1) {
  if (V(e)) {
    e.forEach(
      (O, j) => an(
        O,
        t && (V(t) ? t[j] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (cn(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && an(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? is(s.component) : s.el, o = i ? null : r, { i: l, r: a } = e, h = t && t.r, u = l.refs === ue ? l.refs = {} : l.refs, d = l.setupState, m = /* @__PURE__ */ re(d), v = d === ue ? Ki : (O) => mi(u, O) ? !1 : ie(m, O), p = (O, j) => !(j && mi(u, j));
  if (h != null && h !== a) {
    if (vi(t), we(h))
      u[h] = null, v(h) && (d[h] = null);
    else if (/* @__PURE__ */ Oe(h)) {
      const O = t;
      p(h, O.k) && (h.value = null), O.k && (u[O.k] = null);
    }
  }
  if (J(a))
    bn(a, l, 12, [o, u]);
  else {
    const O = we(a), j = /* @__PURE__ */ Oe(a);
    if (O || j) {
      const A = () => {
        if (e.f) {
          const E = O ? v(a) ? d[a] : u[a] : p() || !e.k ? a.value : u[e.k];
          if (i)
            V(E) && qs(E, r);
          else if (V(E))
            E.includes(r) || E.push(r);
          else if (O)
            u[a] = [r], v(a) && (d[a] = u[a]);
          else {
            const w = [r];
            p(a, e.k) && (a.value = w), e.k && (u[e.k] = w);
          }
        } else O ? (u[a] = o, v(a) && (d[a] = o)) : j && (p(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const E = () => {
          A(), Hn.delete(e);
        };
        E.id = -1, Hn.set(e, E), Fe(E, n);
      } else
        vi(e), A();
    }
  }
}
function vi(e) {
  const t = Hn.get(e);
  t && (t.flags |= 8, Hn.delete(e));
}
Jn().requestIdleCallback;
Jn().cancelIdleCallback;
const cn = (e) => !!e.type.__asyncLoader, ni = (e) => e.type.__isKeepAlive;
function al(e, t) {
  Pr(e, "a", t);
}
function cl(e, t) {
  Pr(e, "da", t);
}
function Pr(e, t, n = Ie) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (ts(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      ni(i.parent.vnode) && ul(s, t, n, i), i = i.parent;
  }
}
function ul(e, t, n, s) {
  const i = ts(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  $r(() => {
    qs(s[t], i);
  }, n);
}
function ts(e, t, n = Ie, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      ct();
      const l = wn(n), a = Ze(t, n, e, o);
      return l(), ut(), a;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const xt = (e) => (t, n = Ie) => {
  (!vn || e === "sp") && ts(e, (...s) => t(...s), n);
}, fl = xt("bm"), Or = xt("m"), hl = xt(
  "bu"
), dl = xt("u"), si = xt(
  "bum"
), $r = xt("um"), pl = xt(
  "sp"
), gl = xt("rtg"), ml = xt("rtc");
function vl(e, t = Ie) {
  ts("ec", e, t);
}
const yl = /* @__PURE__ */ Symbol.for("v-ndc");
function Qt(e, t, n, s) {
  let i;
  const r = n, o = V(e);
  if (o || we(e)) {
    const l = o && /* @__PURE__ */ Tt(e);
    let a = !1, h = !1;
    l && (a = !/* @__PURE__ */ qe(e), h = /* @__PURE__ */ ft(e), e = Zn(e)), i = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      i[u] = t(
        a ? h ? Et(Ve(e[u])) : Ve(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number")
    if (!Number.isInteger(e) || e < 0)
      i = [];
    else {
      i = new Array(e);
      for (let l = 0; l < e; l++)
        i[l] = t(l + 1, l, void 0, r);
    }
  else if (le(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let a = 0, h = l.length; a < h; a++) {
        const u = l[a];
        i[a] = t(e[u], u, a, r);
      }
    }
  else
    i = [];
  return i;
}
const $s = (e) => e ? eo(e) ? is(e) : $s(e.parent) : null, un = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => $s(e.parent),
    $root: (e) => $s(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ir(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ti(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gt.bind(e.proxy)),
    $watch: (e) => rl.bind(e)
  })
), gs = (e, t) => e !== ue && !e.__isScriptSetup && ie(e, t), bl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: a } = e;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (gs(s, t))
          return o[t] = 1, s[t];
        if (i !== ue && ie(i, t))
          return o[t] = 2, i[t];
        if (ie(r, t))
          return o[t] = 3, r[t];
        if (n !== ue && ie(n, t))
          return o[t] = 4, n[t];
        Rs && (o[t] = 0);
      }
    }
    const h = un[t];
    let u, d;
    if (h)
      return t === "$attrs" && Pe(e.attrs, "get", ""), h(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ue && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, ie(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return gs(i, t) ? (i[t] = n, !0) : s !== ue && ie(s, t) ? (s[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, props: r, type: o }
  }, l) {
    let a;
    return !!(n[l] || e !== ue && l[0] !== "$" && ie(e, l) || gs(t, l) || ie(r, l) || ie(s, l) || ie(un, l) || ie(i.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yi(e) {
  return V(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Rs = !0;
function wl(e) {
  const t = Ir(e), n = e.proxy, s = e.ctx;
  Rs = !1, t.beforeCreate && bi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: h,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: m,
    beforeUpdate: v,
    updated: p,
    activated: O,
    deactivated: j,
    beforeDestroy: A,
    beforeUnmount: E,
    destroyed: w,
    unmounted: b,
    render: q,
    renderTracked: L,
    renderTriggered: H,
    errorCaptured: C,
    serverPrefetch: F,
    // public API
    expose: z,
    inheritAttrs: K,
    // assets
    components: Z,
    directives: B,
    filters: ye
  } = t;
  if (h && xl(h, s, null), o)
    for (const Q in o) {
      const X = o[Q];
      J(X) && (s[Q] = X.bind(n));
    }
  if (i) {
    const Q = i.call(n, n);
    le(Q) && (e.data = /* @__PURE__ */ Zs(Q));
  }
  if (Rs = !0, r)
    for (const Q in r) {
      const X = r[Q], Se = J(X) ? X.bind(n, n) : J(X.get) ? X.get.bind(n, n) : lt, xe = !J(X) && J(X.set) ? X.set.bind(n) : lt, he = mt({
        get: Se,
        set: xe
      });
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => he.value,
        set: (ae) => he.value = ae
      });
    }
  if (l)
    for (const Q in l)
      Rr(l[Q], s, n, Q);
  if (a) {
    const Q = J(a) ? a.call(n) : a;
    Reflect.ownKeys(Q).forEach((X) => {
      nl(X, Q[X]);
    });
  }
  u && bi(u, e, "c");
  function oe(Q, X) {
    V(X) ? X.forEach((Se) => Q(Se.bind(n))) : X && Q(X.bind(n));
  }
  if (oe(fl, d), oe(Or, m), oe(hl, v), oe(dl, p), oe(al, O), oe(cl, j), oe(vl, C), oe(ml, L), oe(gl, H), oe(si, E), oe($r, b), oe(pl, F), V(z))
    if (z.length) {
      const Q = e.exposed || (e.exposed = {});
      z.forEach((X) => {
        Object.defineProperty(Q, X, {
          get: () => n[X],
          set: (Se) => n[X] = Se,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === lt && (e.render = q), K != null && (e.inheritAttrs = K), Z && (e.components = Z), B && (e.directives = B), F && Ar(e);
}
function xl(e, t, n = lt) {
  V(e) && (e = Is(e));
  for (const s in e) {
    const i = e[s];
    let r;
    le(i) ? "default" in i ? r = ln(
      i.from || s,
      i.default,
      !0
    ) : r = ln(i.from || s) : r = ln(i), /* @__PURE__ */ Oe(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function bi(e, t, n) {
  Ze(
    V(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Rr(e, t, n, s) {
  let i = s.includes(".") ? Tr(n, s) : () => n[s];
  if (we(e)) {
    const r = t[e];
    J(r) && Rn(i, r);
  } else if (J(e))
    Rn(i, e.bind(n));
  else if (le(e))
    if (V(e))
      e.forEach((r) => Rr(r, t, n, s));
    else {
      const r = J(e.handler) ? e.handler.bind(n) : t[e.handler];
      J(r) && Rn(i, r, e);
    }
}
function Ir(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !i.length && !n && !s ? a = t : (a = {}, i.length && i.forEach(
    (h) => zn(a, h, o, !0)
  ), zn(a, t, o)), le(t) && r.set(t, a), a;
}
function zn(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && zn(e, r, n, !0), i && i.forEach(
    (o) => zn(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = _l[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const _l = {
  data: wi,
  props: xi,
  emits: xi,
  // objects
  methods: en,
  computed: en,
  // lifecycle
  beforeCreate: $e,
  created: $e,
  beforeMount: $e,
  mounted: $e,
  beforeUpdate: $e,
  updated: $e,
  beforeDestroy: $e,
  beforeUnmount: $e,
  destroyed: $e,
  unmounted: $e,
  activated: $e,
  deactivated: $e,
  errorCaptured: $e,
  serverPrefetch: $e,
  // assets
  components: en,
  directives: en,
  // watch
  watch: Sl,
  // provide / inject
  provide: wi,
  inject: Ml
};
function wi(e, t) {
  return t ? e ? function() {
    return Ae(
      J(e) ? e.call(this, this) : e,
      J(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ml(e, t) {
  return en(Is(e), Is(t));
}
function Is(e) {
  if (V(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function $e(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function en(e, t) {
  return e ? Ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xi(e, t) {
  return e ? V(e) && V(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ae(
    /* @__PURE__ */ Object.create(null),
    yi(e),
    yi(t ?? {})
  ) : t;
}
function Sl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ae(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = $e(e[s], t[s]);
  return n;
}
function Dr() {
  return {
    app: null,
    config: {
      isNativeTag: Ki,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Cl = 0;
function Tl(e, t) {
  return function(s, i = null) {
    J(s) || (s = Ae({}, s)), i != null && !le(i) && (i = null);
    const r = Dr(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const h = r.app = {
      _uid: Cl++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: ia,
      get config() {
        return r.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && J(u.install) ? (o.add(u), u.install(h, ...d)) : J(u) && (o.add(u), u(h, ...d))), h;
      },
      mixin(u) {
        return r.mixins.includes(u) || r.mixins.push(u), h;
      },
      component(u, d) {
        return d ? (r.components[u] = d, h) : r.components[u];
      },
      directive(u, d) {
        return d ? (r.directives[u] = d, h) : r.directives[u];
      },
      mount(u, d, m) {
        if (!a) {
          const v = h._ceVNode || te(s, i);
          return v.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(v, u, m), a = !0, h._container = u, u.__vue_app__ = h, is(v.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a && (Ze(
          l,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(u, d) {
        return r.provides[u] = d, h;
      },
      runWithContext(u) {
        const d = Vt;
        Vt = h;
        try {
          return u();
        } finally {
          Vt = d;
        }
      }
    };
    return h;
  };
}
let Vt = null;
const El = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Je(t)}Modifiers`] || e[`${Nt(t)}Modifiers`];
function kl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ue;
  let i = n;
  const r = t.startsWith("update:"), o = r && El(s, t.slice(7));
  o && (o.trim && (i = n.map((u) => we(u) ? u.trim() : u)), o.number && (i = i.map(Bs)));
  let l, a = s[l = as(t)] || // also try camelCase event handler (#2249)
  s[l = as(Je(t))];
  !a && r && (a = s[l = as(Nt(t))]), a && Ze(
    a,
    e,
    6,
    i
  );
  const h = s[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ze(
      h,
      e,
      6,
      i
    );
  }
}
const Al = /* @__PURE__ */ new WeakMap();
function Fr(e, t, n = !1) {
  const s = n ? Al : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!J(e)) {
    const a = (h) => {
      const u = Fr(h, t, !0);
      u && (l = !0, Ae(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (le(e) && s.set(e, null), null) : (V(r) ? r.forEach((a) => o[a] = null) : Ae(o, r), le(e) && s.set(e, o), o);
}
function ns(e, t) {
  return !e || !Kn(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Nt(t)) || ie(e, t));
}
function _i(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: a,
    render: h,
    renderCache: u,
    props: d,
    data: m,
    setupState: v,
    ctx: p,
    inheritAttrs: O
  } = e, j = Nn(e);
  let A, E;
  try {
    if (n.shapeFlag & 4) {
      const b = i || s, q = b;
      A = rt(
        h.call(
          q,
          b,
          u,
          d,
          v,
          m,
          p
        )
      ), E = l;
    } else {
      const b = t;
      A = rt(
        b.length > 1 ? b(
          d,
          { attrs: l, slots: o, emit: a }
        ) : b(
          d,
          null
        )
      ), E = t.props ? l : Pl(l);
    }
  } catch (b) {
    jt.length = 0, Qn(b, e, 1), A = te(Qe);
  }
  let w = A;
  if (E && O !== !1) {
    const b = Object.keys(E), { shapeFlag: q } = w;
    b.length && q & 7 && (r && b.some(Gn) && (E = Ol(
      E,
      r
    )), w = Bt(w, E, !1, !0));
  }
  if (n.dirs && (w = Bt(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const b = es(w.type) && Er(w) || w;
    Un(b, n.transition);
  }
  return A = w, Nn(j), A;
}
function Lr(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (gn(i)) {
      if (i.type !== Qe || i.children === "v-if") {
        if (n)
          return;
        n = i;
      }
    } else
      return;
  }
  return n;
}
const Pl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ol = (e, t) => {
  const n = {};
  for (const s in e)
    (!Gn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function $l(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: a } = t, h = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Mi(s, o, h) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const m = u[d];
        if (jr(o, s, m) && !ns(h, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Mi(s, o, h) : !0 : !!o;
  return !1;
}
function Mi(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (!ie(e, r) || jr(t, e, r) && !ns(n, r))
      return !0;
  }
  return !1;
}
function jr(e, t, n) {
  const s = e[n], i = t[n];
  return n === "style" && le(s) && le(i) ? !Xn(s, i) : s !== i;
}
function Rl({ vnode: e, parent: t, suspense: n }, s) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = s, e = i), i === e)
      (e = t.vnode).el = s, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = s);
}
const Nr = {}, Ur = () => Object.create(Nr), Hr = (e) => Object.getPrototypeOf(e) === Nr;
function Il(e, t, n, s = !1) {
  const i = {}, r = Ur();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zr(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : /* @__PURE__ */ Wo(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function Dl(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ re(i), [a] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let m = u[d];
        if (ns(e.emitsOptions, m))
          continue;
        const v = t[m];
        if (a)
          if (ie(r, m))
            v !== r[m] && (r[m] = v, h = !0);
          else {
            const p = Je(m);
            i[p] = Ds(
              a,
              l,
              p,
              v,
              e,
              !1
            );
          }
        else
          v !== r[m] && (r[m] = v, h = !0);
      }
    }
  } else {
    zr(e, t, i, r) && (h = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !ie(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Nt(d)) === d || !ie(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (i[d] = Ds(
        a,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete i[d]);
    if (r !== l)
      for (const d in r)
        (!t || !ie(t, d)) && (delete r[d], h = !0);
  }
  h && bt(e.attrs, "set", "");
}
function zr(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let a in t) {
      if (sn(a))
        continue;
      const h = t[a];
      let u;
      i && ie(i, u = Je(a)) ? !r || !r.includes(u) ? n[u] = h : (l || (l = {}))[u] = h : ns(e.emitsOptions, a) || (!(a in s) || h !== s[a]) && (s[a] = h, o = !0);
    }
  if (r) {
    const a = /* @__PURE__ */ re(n), h = l || ue;
    for (let u = 0; u < r.length; u++) {
      const d = r[u];
      n[d] = Ds(
        i,
        a,
        d,
        h[d],
        e,
        !ie(h, d)
      );
    }
  }
  return o;
}
function Ds(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && J(a)) {
        const { propsDefaults: h } = i;
        if (n in h)
          s = h[n];
        else {
          const u = wn(i);
          s = h[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Nt(n)) && (s = !0));
  }
  return s;
}
const Fl = /* @__PURE__ */ new WeakMap();
function Wr(e, t, n = !1) {
  const s = n ? Fl : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let a = !1;
  if (!J(e)) {
    const u = (d) => {
      a = !0;
      const [m, v] = Wr(d, t, !0);
      Ae(o, m), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !a)
    return le(e) && s.set(e, Ft), Ft;
  if (V(r))
    for (let u = 0; u < r.length; u++) {
      const d = Je(r[u]);
      Si(d) && (o[d] = ue);
    }
  else if (r)
    for (const u in r) {
      const d = Je(u);
      if (Si(d)) {
        const m = r[u], v = o[d] = V(m) || J(m) ? { type: m } : Ae({}, m), p = v.type;
        let O = !1, j = !0;
        if (V(p))
          for (let A = 0; A < p.length; ++A) {
            const E = p[A], w = J(E) && E.name;
            if (w === "Boolean") {
              O = !0;
              break;
            } else w === "String" && (j = !1);
          }
        else
          O = J(p) && p.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = O, v[
          1
          /* shouldCastTrue */
        ] = j, (O || ie(v, "default")) && l.push(d);
      }
    }
  const h = [o, l];
  return le(e) && s.set(e, h), h;
}
function Si(e) {
  return e[0] !== "$" && !sn(e);
}
const ii = (e) => e === "_" || e === "_ctx" || e === "$stable", ri = (e) => V(e) ? e.map(rt) : [rt(e)], Ll = (e, t, n) => {
  if (t._n)
    return t;
  const s = tl((...i) => ri(t(...i)), n);
  return s._c = !1, s;
}, qr = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ii(i)) continue;
    const r = e[i];
    if (J(r))
      t[i] = Ll(i, r, s);
    else if (r != null) {
      const o = ri(r);
      t[i] = () => o;
    }
  }
}, Vr = (e, t) => {
  const n = ri(t);
  e.slots.default = () => n;
}, Br = (e, t, n) => {
  for (const s in t)
    (n || !ii(s)) && (e[s] = t[s]);
}, jl = (e, t, n) => {
  const s = e.slots = Ur();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Br(s, t, n), n && Zi(s, "_", i, !0)) : qr(t, s);
  } else t && Vr(e, t);
}, Nl = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ue;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Br(i, t, n) : (r = !t.$stable, qr(t, i)), o = t;
  } else t && (Vr(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !ii(l) && o[l] == null && delete i[l];
}, Fe = ql;
function Ul(e) {
  return Hl(e);
}
function Hl(e, t) {
  const n = Jn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: a,
    setText: h,
    setElementText: u,
    parentNode: d,
    nextSibling: m,
    setScopeId: v = lt,
    insertStaticContent: p
  } = e, O = (c, f, g, T = null, S = null, M = null, $ = void 0, R = null, P = !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Jt(c, f) && (T = Ge(c), ae(c, S, M, !0), c = null), f.patchFlag === -2 && (P = !1, f.dynamicChildren = null), f.dynamicChildren && c && c.dynamicChildren && c.dynamicChildren.hasOnce && (f.dynamicChildren === Ft && (f.dynamicChildren = []), f.dynamicChildren.hasOnce = !0);
    const { type: x, ref: N, shapeFlag: I } = f;
    switch (x) {
      case ss:
        j(c, f, g, T);
        break;
      case Qe:
        A(c, f, g, T);
        break;
      case vs:
        c == null && E(f, g, T, $);
        break;
      case ke:
        Z(
          c,
          f,
          g,
          T,
          S,
          M,
          $,
          R,
          P
        );
        break;
      default:
        I & 1 ? q(
          c,
          f,
          g,
          T,
          S,
          M,
          $,
          R,
          P
        ) : I & 6 ? B(
          c,
          f,
          g,
          T,
          S,
          M,
          $,
          R,
          P
        ) : (I & 64 || I & 128) && x.process(
          c,
          f,
          g,
          T,
          S,
          M,
          $,
          R,
          P,
          ht
        );
    }
    N != null && S ? an(N, c && c.ref, M, f || c, !f) : N == null && c && c.ref != null && an(c.ref, null, M, c, !0);
  }, j = (c, f, g, T) => {
    if (c == null)
      s(
        f.el = l(f.children),
        g,
        T
      );
    else {
      const S = f.el = c.el;
      f.children !== c.children && h(S, f.children);
    }
  }, A = (c, f, g, T) => {
    c == null ? s(
      f.el = a(f.children || ""),
      g,
      T
    ) : f.el = c.el;
  }, E = (c, f, g, T) => {
    [c.el, c.anchor] = p(
      c.children,
      f,
      g,
      T,
      c.el,
      c.anchor
    );
  }, w = ({ el: c, anchor: f }, g, T) => {
    let S;
    for (; c && c !== f; )
      S = m(c), s(c, g, T), c = S;
    s(f, g, T);
  }, b = ({ el: c, anchor: f }) => {
    let g;
    for (; c && c !== f; )
      g = m(c), i(c), c = g;
    i(f);
  }, q = (c, f, g, T, S, M, $, R, P) => {
    if (f.type === "svg" ? $ = "svg" : f.type === "math" && ($ = "mathml"), c == null)
      L(
        f,
        g,
        T,
        S,
        M,
        $,
        R,
        P
      );
    else {
      const x = c.el && c.el._isVueCE ? c.el : null;
      try {
        x && x._beginPatch(), F(
          c,
          f,
          S,
          M,
          $,
          R,
          P
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, L = (c, f, g, T, S, M, $, R) => {
    let P, x;
    const { props: N, shapeFlag: I, transition: U, dirs: W } = c;
    if (P = c.el = o(
      c.type,
      M,
      N && N.is,
      N
    ), I & 8 ? u(P, c.children) : I & 16 && C(
      c.children,
      P,
      null,
      T,
      S,
      ms(c, M),
      $,
      R
    ), W && Ot(c, null, T, "created"), H(P, c, c.scopeId, $, T), N) {
      for (const se in N)
        se !== "value" && !sn(se) && r(P, se, null, N[se], M, T);
      "value" in N && r(P, "value", null, N.value, M), (x = N.onVnodeBeforeMount) && tt(x, T, c);
    }
    W && Ot(c, null, T, "beforeMount");
    const ee = zl(S, U);
    ee && U.beforeEnter(P), s(P, f, g), ((x = N && N.onVnodeMounted) || ee || W) && Fe(() => {
      x && tt(x, T, c), ee && U.enter(P), W && Ot(c, null, T, "mounted");
    }, S);
  }, H = (c, f, g, T, S) => {
    if (g && v(c, g), T)
      for (let M = 0; M < T.length; M++)
        v(c, T[M]);
    if (S) {
      let M = S.subTree;
      if (f === M || Yr(M.type) && (M.ssContent === f || M.ssFallback === f)) {
        const $ = S.vnode;
        H(
          c,
          $,
          $.scopeId,
          $.slotScopeIds,
          S.parent
        );
      }
    }
  }, C = (c, f, g, T, S, M, $, R, P = 0) => {
    for (let x = P; x < c.length; x++) {
      const N = c[x] = R ? yt(c[x]) : rt(c[x]);
      O(
        null,
        N,
        f,
        g,
        T,
        S,
        M,
        $,
        R
      );
    }
  }, F = (c, f, g, T, S, M, $) => {
    const R = f.el = c.el;
    let { patchFlag: P, dynamicChildren: x, dirs: N } = f;
    P |= c.patchFlag & 16;
    const I = c.props || ue, U = f.props || ue;
    let W;
    if (g && $t(g, !1), (W = U.onVnodeBeforeUpdate) && tt(W, g, f, c), N && Ot(f, c, g, "beforeUpdate"), g && $t(g, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    x && (!c.dynamicChildren || c.dynamicChildren.length !== x.length) && (P = 0, $ = !1, x = null), (I.innerHTML && U.innerHTML == null || I.textContent && U.textContent == null) && u(R, ""), x ? z(
      c.dynamicChildren,
      x,
      R,
      g,
      T,
      ms(f, S),
      M
    ) : $ || X(
      c,
      f,
      R,
      null,
      g,
      T,
      ms(f, S),
      M,
      !1
    ), P > 0) {
      if (P & 16)
        K(R, I, U, g, S);
      else if (P & 2 && I.class !== U.class && r(R, "class", null, U.class, S), P & 4 && r(R, "style", I.style, U.style, S), P & 8) {
        const ee = f.dynamicProps;
        for (let se = 0; se < ee.length; se++) {
          const Y = ee[se], de = I[Y], _e = U[Y];
          (_e !== de || Y === "value") && r(R, Y, de, _e, S, g);
        }
      }
      P & 1 && c.children !== f.children && u(R, f.children);
    } else !$ && x == null && K(R, I, U, g, S);
    ((W = U.onVnodeUpdated) || N) && Fe(() => {
      W && tt(W, g, f, c), N && Ot(f, c, g, "updated");
    }, T);
  }, z = (c, f, g, T, S, M, $) => {
    for (let R = 0; R < f.length; R++) {
      const P = c[R], x = f[R], N = P.el || Fs(P), I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Jt(P, x) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? d(N) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      O(
        P,
        x,
        I,
        null,
        T,
        S,
        M,
        $,
        !0
      );
    }
  }, K = (c, f, g, T, S) => {
    if (f !== g) {
      if (f !== ue)
        for (const M in f)
          !sn(M) && !(M in g) && r(
            c,
            M,
            f[M],
            null,
            S,
            T
          );
      for (const M in g) {
        if (sn(M)) continue;
        const $ = g[M], R = f[M];
        $ !== R && M !== "value" && r(c, M, R, $, S, T);
      }
      "value" in g && r(c, "value", f.value, g.value, S);
    }
  }, Z = (c, f, g, T, S, M, $, R, P) => {
    const x = f.el = c ? c.el : l(""), N = f.anchor = c ? c.anchor : l("");
    let { patchFlag: I, dynamicChildren: U, slotScopeIds: W } = f;
    W && (R = R ? R.concat(W) : W), c == null ? (s(x, g, T), s(N, g, T), C(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      N,
      S,
      M,
      $,
      R,
      P
    )) : I > 0 && I & 64 && U && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === U.length ? (z(
      c.dynamicChildren,
      U,
      g,
      S,
      M,
      $,
      R
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || S && f === S.subTree) && Kr(
      c,
      f,
      !0
      /* shallow */
    )) : X(
      c,
      f,
      g,
      N,
      S,
      M,
      $,
      R,
      P
    );
  }, B = (c, f, g, T, S, M, $, R, P) => {
    f.slotScopeIds = R, c == null ? f.shapeFlag & 512 ? S.ctx.activate(
      f,
      g,
      T,
      $,
      P
    ) : ye(
      f,
      g,
      T,
      S,
      M,
      $,
      P
    ) : fe(c, f, P);
  }, ye = (c, f, g, T, S, M, $) => {
    const R = c.component = Xl(
      c,
      T,
      S
    );
    if (ni(c) && (R.ctx.renderer = ht), Ql(R, !1, $), R.asyncDep) {
      if (S && S.registerDep(
        R,
        oe,
        $,
        M
      ), !c.el) {
        const P = R.subTree = te(Qe);
        A(null, P, f, g), c.placeholder = P.el;
      }
    } else
      oe(
        R,
        c,
        f,
        g,
        S,
        M,
        $
      );
  }, fe = (c, f, g) => {
    const T = f.component = c.component;
    if ($l(c, f, g))
      if (T.asyncDep && !T.asyncResolved) {
        f.el = c.el, f.placeholder = c.placeholder, Q(T, f, g);
        return;
      } else
        T.next = f, T.update();
    else
      f.el = c.el, f.placeholder = c.placeholder, T.vnode = f;
  }, oe = (c, f, g, T, S, M, $) => {
    const R = () => {
      if (c.isMounted) {
        let { next: I, bu: U, u: W, parent: ee, vnode: se } = c;
        {
          const Ue = Gr(c);
          if (Ue) {
            I && (I.el = se.el, Q(c, I, $)), Ue.asyncDep.then(() => {
              Fe(() => {
                c.isUnmounted || x();
              }, S);
            });
            return;
          }
        }
        let Y = I, de;
        $t(c, !1), I ? (I.el = se.el, Q(c, I, $)) : I = se, U && On(U), (de = I.props && I.props.onVnodeBeforeUpdate) && tt(de, ee, I, se), $t(c, !0);
        const _e = _i(c), pe = c.subTree;
        c.subTree = _e, O(
          pe,
          _e,
          // parent may have changed if it's in a teleport
          d(pe.el),
          // anchor may have changed if it's in a fragment
          Ge(pe),
          c,
          S,
          M
        ), I.el = _e.el, Y === null && Rl(c, _e.el), W && Fe(W, S), (de = I.props && I.props.onVnodeUpdated) && Fe(
          () => tt(de, ee, I, se),
          S
        );
      } else {
        let I;
        const { el: U, props: W } = f, { bm: ee, m: se, parent: Y, root: de, type: _e } = c, pe = cn(f);
        $t(c, !1), ee && On(ee), !pe && (I = W && W.onVnodeBeforeMount) && tt(I, Y, f), $t(c, !0);
        {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(
            _e,
            c.parent ? c.parent.type : void 0
          );
          const Ue = c.subTree = _i(c);
          O(
            null,
            Ue,
            g,
            T,
            c,
            S,
            M
          ), f.el = Ue.el;
        }
        if (se && Fe(se, S), !pe && (I = W && W.onVnodeMounted)) {
          const Ue = f;
          Fe(
            () => tt(I, Y, Ue),
            S
          );
        }
        (f.shapeFlag & 256 || Y && cn(Y.vnode) && Y.vnode.shapeFlag & 256) && c.a && Fe(c.a, S), c.isMounted = !0, f = g = T = null;
      }
    };
    c.scope.on();
    const P = c.effect = new nr(R);
    c.scope.off();
    const x = c.update = P.run.bind(P), N = c.job = P.runIfDirty.bind(P);
    N.i = c, N.id = c.uid, P.scheduler = () => ti(N), $t(c, !0), x();
  }, Q = (c, f, g) => {
    f.component = c;
    const T = c.vnode.props;
    c.vnode = f, c.next = null, Dl(c, f.props, T, g), Nl(c, f.children, g), ct(), xr(c), ut();
  }, X = (c, f, g, T, S, M, $, R, P = !1) => {
    const x = c && c.children, N = c ? c.shapeFlag : 0, I = f.children, { patchFlag: U, shapeFlag: W } = f;
    if (U > 0) {
      if (U & 128) {
        xe(
          x,
          I,
          g,
          T,
          S,
          M,
          $,
          R,
          P
        );
        return;
      } else if (U & 256) {
        Se(
          x,
          I,
          g,
          T,
          S,
          M,
          $,
          R,
          P
        );
        return;
      }
    }
    W & 8 ? (N & 16 && Ke(x, S, M), I !== x && u(g, I)) : N & 16 ? W & 16 ? xe(
      x,
      I,
      g,
      T,
      S,
      M,
      $,
      R,
      P
    ) : Ke(x, S, M, !0) : (N & 8 && u(g, ""), W & 16 && C(
      I,
      g,
      T,
      S,
      M,
      $,
      R,
      P
    ));
  }, Se = (c, f, g, T, S, M, $, R, P) => {
    c = c || Ft, f = f || Ft;
    const x = c.length, N = f.length, I = Math.min(x, N);
    let U;
    for (U = 0; U < I; U++) {
      const W = f[U] = P ? yt(f[U]) : rt(f[U]);
      O(
        c[U],
        W,
        g,
        null,
        S,
        M,
        $,
        R,
        P
      );
    }
    x > N ? Ke(
      c,
      S,
      M,
      !0,
      !1,
      I
    ) : C(
      f,
      g,
      T,
      S,
      M,
      $,
      R,
      P,
      I
    );
  }, xe = (c, f, g, T, S, M, $, R, P) => {
    let x = 0;
    const N = f.length;
    let I = c.length - 1, U = N - 1;
    for (; x <= I && x <= U; ) {
      const W = c[x], ee = f[x] = P ? yt(f[x]) : rt(f[x]);
      if (Jt(W, ee))
        O(
          W,
          ee,
          g,
          null,
          S,
          M,
          $,
          R,
          P
        );
      else
        break;
      x++;
    }
    for (; x <= I && x <= U; ) {
      const W = c[I], ee = f[U] = P ? yt(f[U]) : rt(f[U]);
      if (Jt(W, ee))
        O(
          W,
          ee,
          g,
          null,
          S,
          M,
          $,
          R,
          P
        );
      else
        break;
      I--, U--;
    }
    if (x > I) {
      if (x <= U) {
        const W = U + 1, ee = W < N ? f[W].el : T;
        for (; x <= U; )
          O(
            null,
            f[x] = P ? yt(f[x]) : rt(f[x]),
            g,
            ee,
            S,
            M,
            $,
            R,
            P
          ), x++;
      }
    } else if (x > U)
      for (; x <= I; )
        ae(c[x], S, M, !0), x++;
    else {
      const W = x, ee = x, se = /* @__PURE__ */ new Map();
      for (x = ee; x <= U; x++) {
        const Ce = f[x] = P ? yt(f[x]) : rt(f[x]);
        Ce.key != null && se.set(Ce.key, x);
      }
      let Y, de = 0;
      const _e = U - ee + 1;
      let pe = !1, Ue = 0;
      const kt = new Array(_e);
      for (x = 0; x < _e; x++) kt[x] = 0;
      for (x = W; x <= I; x++) {
        const Ce = c[x];
        if (de >= _e) {
          ae(Ce, S, M, !0);
          continue;
        }
        let He;
        if (Ce.key != null)
          He = se.get(Ce.key);
        else
          for (Y = ee; Y <= U; Y++)
            if (kt[Y - ee] === 0 && Jt(Ce, f[Y])) {
              He = Y;
              break;
            }
        He === void 0 ? ae(Ce, S, M, !0) : (kt[He - ee] = x + 1, He >= Ue ? Ue = He : pe = !0, O(
          Ce,
          f[He],
          g,
          null,
          S,
          M,
          $,
          R,
          P
        ), de++);
      }
      const Kt = pe ? Wl(kt) : Ft;
      for (Y = Kt.length - 1, x = _e - 1; x >= 0; x--) {
        const Ce = ee + x, He = f[Ce], At = f[Ce + 1], xn = Ce + 1 < N ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          At.el || Fs(At)
        ) : T;
        kt[x] === 0 ? O(
          null,
          He,
          g,
          xn,
          S,
          M,
          $,
          R,
          P
        ) : pe && (Y < 0 || x !== Kt[Y] ? he(He, g, xn, 2) : Y--);
      }
    }
  }, he = (c, f, g, T, S = null) => {
    const { el: M, type: $, transition: R, children: P, shapeFlag: x } = c;
    if (x & 6) {
      he(c.component.subTree, f, g, T);
      return;
    }
    if (x & 128) {
      c.suspense.move(f, g, T);
      return;
    }
    if (x & 64) {
      $.move(c, f, g, ht);
      return;
    }
    if ($ === ke) {
      s(M, f, g);
      for (let I = 0; I < P.length; I++)
        he(P[I], f, g, T);
      s(c.anchor, f, g);
      return;
    }
    if ($ === vs) {
      w(c, f, g);
      return;
    }
    if (T !== 2 && x & 1 && R)
      if (T === 0)
        R.persisted && !M[ps] ? s(M, f, g) : (R.beforeEnter(M), s(M, f, g), Fe(() => R.enter(M), S));
      else {
        const { leave: I, delayLeave: U, afterLeave: W } = R, ee = () => {
          c.ctx.isUnmounted ? i(M) : s(M, f, g);
        }, se = () => {
          const Y = M._isLeaving || !!M[ps];
          M._isLeaving && M[ps](
            !0
            /* cancelled */
          ), R.persisted && !Y ? ee() : I(M, () => {
            ee(), W && W();
          });
        };
        U ? U(M, ee, se) : se();
      }
    else
      s(M, f, g);
  }, ae = (c, f, g, T = !1, S = !1) => {
    const {
      type: M,
      props: $,
      ref: R,
      children: P,
      dynamicChildren: x,
      shapeFlag: N,
      patchFlag: I,
      dirs: U,
      cacheIndex: W,
      memo: ee
    } = c;
    if ((I === -2 || x && x.hasOnce) && (S = !1), R != null && (ct(), an(R, null, g, c, !0), ut()), W != null && (!c.ctx || c.ctx === f) && (f.renderCache[W] = void 0), N & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const se = N & 1 && U, Y = !cn(c);
    let de;
    if (Y && (de = $ && $.onVnodeBeforeUnmount) && tt(de, f, c), N & 6)
      Be(c.component, g, T);
    else {
      if (N & 128) {
        c.suspense.unmount(g, T);
        return;
      }
      se && Ot(c, null, f, "beforeUnmount"), N & 64 ? c.type.remove(
        c,
        f,
        g,
        ht,
        T
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== ke || I > 0 && I & 64) ? Ke(
        x,
        f,
        g,
        !1,
        !0
      ) : (M === ke && I & 384 || !S && N & 16) && Ke(P, f, g), T && Te(c);
    }
    const _e = ee != null && W == null;
    (Y && (de = $ && $.onVnodeUnmounted) || se || _e) && Fe(() => {
      de && tt(de, f, c), se && Ot(c, null, f, "unmounted"), _e && (c.el = null);
    }, g);
  }, Te = (c) => {
    const { type: f, el: g, anchor: T, transition: S } = c, M = f === ke;
    if (M && !S) {
      be(g, T);
      return;
    }
    if (f === vs) {
      b(c), S && !S.persisted && S.afterLeave && S.afterLeave();
      return;
    }
    const $ = M ? Os(c) : c, R = () => {
      M ? d(g) && be(g, T) : i(g), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if ($ && $.shapeFlag & 1 && S && !S.persisted) {
      const { leave: P, delayLeave: x } = S, N = $.el, I = () => P(N, R);
      x ? x(N, R, I) : I();
    } else
      R();
  }, be = (c, f) => {
    let g;
    for (; c !== f; )
      g = m(c), i(c), c = g;
    i(f);
  }, Be = (c, f, g) => {
    const { bum: T, scope: S, job: M, subTree: $, um: R, m: P, a: x } = c;
    Ci(P), Ci(x), T && On(T), S.stop(), M ? (M.flags |= 8, ae($, c, f, g)) : c.vnode.el && $ && ($.transition = c.vnode.transition, ae($, c, f, g)), R && Fe(R, f), Fe(() => {
      c.isUnmounted = !0;
    }, f);
  }, Ke = (c, f, g, T = !1, S = !1, M = 0) => {
    for (let $ = M; $ < c.length; $++)
      ae(c[$], f, g, T, S);
  }, Ge = (c) => {
    if (c.shapeFlag & 6)
      return Ge(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = m(c.anchor || c.el), g = f && f[ol];
    return g ? m(g) : f;
  }, Le = (c, f, g) => {
    const T = c && f._vnode ? void 0 : c && c.component ? c.component.uid : Jl();
    el(() => {
      c == null ? f._vnode && ae(f._vnode, null, null, !0) : O(
        f._vnode || null,
        c,
        f,
        null,
        null,
        null,
        g
      ), f._vnode = c;
    }, T);
  }, ht = {
    p: O,
    um: ae,
    m: he,
    r: Te,
    mt: ye,
    mc: C,
    pc: X,
    pbc: z,
    n: Ge,
    o: e
  };
  return {
    render: Le,
    hydrate: void 0,
    createApp: Tl(Le)
  };
}
function ms({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function zl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Kr(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (V(s) && V(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = yt(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && Kr(o, l)), l.type === ss && (l.patchFlag === -1 && (l = i[r] = yt(l)), l.el = o.el), l.type === Qe && !l.el && (l.el = o.el);
    }
}
function Wl(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const h = e[s];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < h ? r = l + 1 : o = l;
      h < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function Gr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gr(t);
}
function Ci(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fs(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Fs(t.subTree) : null;
}
const Yr = (e) => e.__isSuspense;
function ql(e, t) {
  t && t.pendingBranch ? V(e) ? t.effects.push(...e) : t.effects.push(e) : Qo(e);
}
const ke = /* @__PURE__ */ Symbol.for("v-fgt"), ss = /* @__PURE__ */ Symbol.for("v-txt"), Qe = /* @__PURE__ */ Symbol.for("v-cmt"), vs = /* @__PURE__ */ Symbol.for("v-stc"), jt = [];
let Ne = null;
function ce(e = !1) {
  jt.push(Ne = e ? null : []);
}
function Jr() {
  jt.pop(), Ne = jt[jt.length - 1] || null;
}
let pn = 1;
function Wn(e, t = !1) {
  pn += e, e < 0 && Ne && t && (Ne.hasOnce = !0);
}
function Xr(e) {
  return e.dynamicChildren = pn > 0 ? Ne || Ft : null, Jr(), pn > 0 && Ne && Ne.push(e), e;
}
function ge(e, t, n, s, i, r) {
  return Xr(
    D(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
    )
  );
}
function Vl(e, t, n, s, i) {
  return Xr(
    te(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function gn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zr = ({ key: e }) => e ?? null, In = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? we(e) || /* @__PURE__ */ Oe(e) || J(e) ? { i: We, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, s = 0, i = null, r = e === ke ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zr(t),
    ref: t && In(t),
    scopeId: Sr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: We
  };
  return l ? (qn(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= we(n) ? 8 : 16), pn > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ne && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ne.push(a), a;
}
const te = Bl;
function Bl(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === yl) && (e = Qe), gn(e)) {
    const l = Bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qn(l, n), pn > 0 && !r && Ne && (l.shapeFlag & 6 ? Ne[Ne.indexOf(e)] = l : Ne.push(l)), l.patchFlag = -2, l;
  }
  if (sa(e) && (e = e.__vccOpts), t) {
    t = Kl(t);
    let { class: l, style: a } = t;
    l && !we(l) && (t.class = Ct(l)), le(a) && (/* @__PURE__ */ ei(a) && !V(a) && (a = Ae({}, a)), t.style = ze(a));
  }
  const o = we(e) ? 1 : Yr(e) ? 128 : es(e) ? 64 : le(e) ? 4 : J(e) ? 2 : 0;
  return D(
    e,
    t,
    n,
    s,
    i,
    o,
    r,
    !0
  );
}
function Kl(e) {
  return e ? /* @__PURE__ */ ei(e) || Hr(e) ? Ae({}, e) : e : null;
}
function Bt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: a } = e, h = t ? Gl(i || {}, t) : i, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Zr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? V(r) ? r.concat(In(t)) : [r, In(t)] : In(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ke ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Bt(e.ssContent),
    ssFallback: e.ssFallback && Bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && Un(
    u,
    a.clone(u)
  ), u;
}
function Dn(e = " ", t = 0) {
  return te(ss, null, e, t);
}
function je(e = "", t = !1) {
  return t ? (ce(), Vl(Qe, null, e)) : te(Qe, null, e);
}
function rt(e) {
  return e == null || typeof e == "boolean" ? te(Qe) : V(e) ? te(
    ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : gn(e) ? yt(e) : te(ss, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bt(e);
}
function qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (V(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), qn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Hr(t) ? t._ctx = We : i === 3 && We && (We.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (J(t)) {
    if (s & 65) {
      qn(e, { default: t });
      return;
    }
    t = { default: t, _ctx: We }, n = 32;
  } else
    t = String(t), s & 64 ? (n = 16, t = [Dn(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function Gl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Ct([t.class, s.class]));
      else if (i === "style")
        t.style = ze([t.style, s.style]);
      else if (Kn(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(V(r) && r.includes(o)) ? t[i] = r ? [].concat(r, o) : o : o == null && r == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Gn(i) && (t[i] = o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function tt(e, t, n, s = null) {
  Ze(e, t, 7, [
    n,
    s
  ]);
}
const Yl = Dr();
let Qr = 0;
function Jl() {
  return Qr;
}
function Xl(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Yl, r = {
    uid: Qr++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Co(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Wr(s, i),
    emitsOptions: Fr(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ue,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ue,
    data: ue,
    props: ue,
    attrs: ue,
    slots: ue,
    refs: ue,
    setupState: ue,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = kl.bind(null, r), e.ce && e.ce(r), r;
}
let Ie = null;
const Zl = () => Ie || We;
let Vn, mn;
{
  const e = Jn(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  Vn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ie = n
  ), mn = t(
    "__VUE_SSR_SETTERS__",
    (n) => vn = n
  );
}
const wn = (e) => {
  const t = Ie;
  return Vn(e), e.scope.on(), () => {
    e.scope.off(), Vn(t);
  };
}, Ti = () => {
  Ie && Ie.scope.off(), Vn(null);
};
function eo(e) {
  return e.vnode.shapeFlag & 4;
}
let vn = !1;
function Ql(e, t = !1, n = !1) {
  t && mn(t);
  const { props: s, children: i } = e.vnode, r = eo(e);
  Il(e, s, r, t), jl(e, i, n || t);
  const o = r ? ea(e, t) : void 0;
  return t && mn(!1), o;
}
function ea(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, bl);
  const { setup: s } = n;
  if (s) {
    ct();
    const i = e.setupContext = s.length > 1 ? na(e) : null, r = wn(e), o = bn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Gi(o);
    if (ut(), r(), (l || e.sp) && !cn(e) && Ar(e), l) {
      if (o.then(Ti, Ti), t)
        return o.then((a) => {
          mn(!0);
          try {
            Ei(e, a, t);
          } finally {
            mn(!1);
          }
        }).catch((a) => {
          Qn(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ei(e, o);
  } else
    to(e);
}
function Ei(e, t, n) {
  J(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = yr(t)), to(e);
}
function to(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || lt);
  {
    const i = wn(e);
    ct();
    try {
      wl(e);
    } finally {
      ut(), i();
    }
  }
}
const ta = {
  get(e, t) {
    return Pe(e, "get", ""), e[t];
  }
};
function na(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ta),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yr(qo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in un)
        return un[n](e);
    },
    has(t, n) {
      return n in t || n in un;
    }
  })) : e.proxy;
}
function sa(e) {
  return J(e) && "__vccOpts" in e;
}
const mt = (e, t) => /* @__PURE__ */ Go(e, t, vn);
function Ls(e, t, n) {
  try {
    Wn(-1);
    const s = arguments.length;
    return s === 2 ? le(t) && !V(t) ? gn(t) ? te(e, null, [t]) : te(e, t) : te(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && gn(n) && (n = [n]), te(e, t, n));
  } finally {
    Wn(1);
  }
}
const ia = "3.5.44";
let js;
const ki = typeof window < "u" && window.trustedTypes;
if (ki)
  try {
    js = /* @__PURE__ */ ki.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const no = js ? (e) => js.createHTML(e) : (e) => e, ra = "http://www.w3.org/2000/svg", oa = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, Ai = vt && /* @__PURE__ */ vt.createElement("template"), la = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? vt.createElementNS(ra, e) : t === "mathml" ? vt.createElementNS(oa, e) : n ? vt.createElement(e, { is: n }) : vt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Ai.innerHTML = no(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ai.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, aa = /* @__PURE__ */ Symbol("_vtc");
function ca(e, t, n) {
  const s = e[aa];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Bn = /* @__PURE__ */ Symbol("_vod"), so = /* @__PURE__ */ Symbol("_vsh"), ys = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Bn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Xt(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Xt(e, !0), s.enter(e)) : s.leave(e, () => {
      Xt(e, !1);
    }) : Xt(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Xt(e, t);
  }
};
function Xt(e, t) {
  e.style.display = t ? e[Bn] : "none", e[so] = !t;
}
const ua = /* @__PURE__ */ Symbol(""), fa = /(?:^|;)\s*display\s*:/;
function ha(e, t, n) {
  const s = e.style, i = we(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (we(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && tn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && tn(s, o, "");
    for (const o in n) {
      o === "display" && (r = !0);
      const l = n[o];
      l != null ? pa(
        e,
        o,
        !we(t) && t ? t[o] : void 0,
        l
      ) || tn(s, o, l) : tn(s, o, "");
    }
  } else if (i) {
    if (t !== n) {
      const o = s[ua];
      o && (n += ";" + o), s.cssText = n, r = fa.test(n);
    }
  } else t && e.removeAttribute("style");
  Bn in e && ((!i || t !== n) && (e[Bn] = r ? s.display : ""), e[so] && (s.display = "none"));
}
const En = /\s*!important$/;
function tn(e, t, n) {
  if (V(n))
    n.forEach((s) => tn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    En.test(n) ? e.setProperty(t, n.replace(En, ""), "important") : e.setProperty(t, n);
  else {
    const s = da(e, t);
    En.test(n) ? e.setProperty(
      Nt(s),
      n.replace(En, ""),
      "important"
    ) : e[s] = n;
  }
}
const Pi = ["Webkit", "Moz", "ms"], bs = {};
function da(e, t) {
  const n = bs[t];
  if (n)
    return n;
  let s = Je(t);
  if (s !== "filter" && s in e)
    return bs[t] = s;
  s = Xi(s);
  for (let i = 0; i < Pi.length; i++) {
    const r = Pi[i] + s;
    if (r in e)
      return bs[t] = r;
  }
  return t;
}
function pa(e, t, n, s) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && we(s) && n === s;
}
const Oi = "http://www.w3.org/1999/xlink";
function $i(e, t, n, s, i, r = _o(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Oi, t.slice(6, t.length)) : e.setAttributeNS(Oi, t, n) : n == null || r && !Qi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : at(n) ? String(n) : n
  );
}
function Ri(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? no(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Qi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Wt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function ga(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ii = /* @__PURE__ */ Symbol("_vei");
function ma(e, t, n, s, i = null) {
  const r = e[Ii] || (e[Ii] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, a] = ba(t);
    if (s) {
      const h = r[t] = _a(
        s,
        i
      );
      Wt(e, l, h, a);
    } else o && (ga(e, l, o, a), r[t] = void 0);
  }
}
const va = /(Once|Passive|Capture)$/, ya = /^on:?(?:Once|Passive|Capture)$/;
function ba(e) {
  let t, n;
  for (; (n = e.match(va)) && !ya.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Nt(e.slice(2)), t];
}
let ws = 0;
const wa = /* @__PURE__ */ Promise.resolve(), xa = () => ws || (wa.then(() => ws = 0), ws = Date.now());
function _a(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    const i = n.value;
    if (V(i)) {
      const r = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        r.call(s), s._stopped = !0;
      };
      const o = i.slice(), l = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const h = o[a];
        h && Ze(
          h,
          t,
          5,
          l
        );
      }
    } else
      Ze(
        i,
        t,
        5,
        [s]
      );
  };
  return n.value = e, n.attached = xa(), n;
}
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ma = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? ca(e, s, o) : t === "style" ? ha(e, n, s) : Kn(t) ? Gn(t) || ma(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Sa(e, t, s, o)) ? (Ri(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $i(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ca(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !we(s))) ? Ri(e, Je(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), $i(e, t, s, o));
};
function Sa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Di(t) && J(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Di(t) && we(n) ? !1 : t in e;
}
function Ca(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Je(t);
  return Array.isArray(n) ? n.some((i) => Je(i) === s) : Object.keys(n).some((i) => Je(i) === s);
}
const Fi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return V(t) ? (n) => On(t, n) : t;
};
function Ta(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kn = /* @__PURE__ */ Symbol("_assign"), An = /* @__PURE__ */ Symbol("_initialValue");
function xs(e, t, n) {
  return t && (e = e.trim()), n && (e = Bs(e)), e;
}
const ji = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e.parentNode && (e.type === "text" ? e[An] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[An] = e.defaultValue.replace(/\r\n?/g, `
`))), e[kn] = Fi(i);
    const r = s || i.props && i.props.type === "number";
    Wt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[kn](xs(e.value, n, r));
    }), (n || r) && Wt(e, "change", () => {
      e.value = xs(e.value, n, r);
    }), t || (Wt(e, "compositionstart", Ta), Wt(e, "compositionend", Li), Wt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: s } }) {
    const i = t ?? "", r = e[An];
    delete e[An], r !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== r ? e[kn](xs(e.value, n, s)) : e.value = i;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[kn] = Fi(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Bs(e.value) : e.value, a = t ?? "";
    if (l === a)
      return;
    const h = e.getRootNode();
    (h instanceof Document || h instanceof ShadowRoot) && h.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === a) || (e.value = a);
  }
}, Ea = ["ctrl", "shift", "alt", "meta"], ka = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Ea.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ns = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = ka[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, Aa = /* @__PURE__ */ Ae({ patchProp: Ma }, la);
let Ni;
function Pa() {
  return Ni || (Ni = Ul(Aa));
}
const Oa = ((...e) => {
  const t = Pa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ra(s);
    if (!i) return;
    const r = t._component;
    !J(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, $a(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
});
function $a(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ra(e) {
  return we(e) ? document.querySelector(e) : e;
}
const Rt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const Ui = (...e) => e.filter((t, n, s) => !!t && t.trim() !== "" && s.indexOf(t) === n).join(" ").trim();
function _s(e) {
  return e != null;
}
function Ia(e, t = {}) {
  const n = t.attributeNames ?? {}, s = (m) => n[m] ?? m, i = e.size ?? e.width ?? Rt.width, r = e.size ?? e.height ?? Rt.height, o = e.aliases?.filter((m) => typeof m == "string" && m.trim() !== "").map((m) => `lucide-${m}`) ?? [], l = [...e.name ? [`lucide-${e.name}`] : [], ...o], a = t.className?.split(" ").filter(Boolean) ?? [], h = t.includeDefaultClasses === !1 ? Ui(...a) : Ui("lucide", ...l, ...a), u = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? Rt["stroke-width"]) * Number(e.size ?? e.width ?? Rt.width) / Number(t.size ?? t.width ?? Rt.width) : t.strokeWidth ?? Rt["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Rt).reduce((m, [v, p]) => (m[s(v)] = p, m), {}),
      ..."color" in t && t.color && {
        [s("stroke")]: t.color
      },
      ..."size" in t && _s(t.size) && {
        [s("width")]: t.size,
        [s("height")]: t.size
      },
      ..."width" in t && _s(t.width) && {
        [s("width")]: t.width
      },
      ..."height" in t && _s(t.height) && {
        [s("height")]: t.height
      },
      [s("stroke-width")]: u,
      ...h && {
        [s("class")]: h
      },
      [s("viewBox")]: `0 0 ${i} ${r}`,
      ...t.hasA11yProp === !1 ? {
        [s("aria-hidden")]: "true"
      } : {},
      ..."attributes" in t && t.attributes
    },
    e.node.map((m) => {
      const [v, p, O] = m, j = t.nonScalingStroke ? { [s("vector-effect")]: "non-scaling-stroke", ...p } : p;
      return O ? [v, j, O] : [v, j];
    })
  ];
}
const Da = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
  return !1;
};
const Pn = (e) => e === "";
const Fa = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const La = /* @__PURE__ */ Symbol("lucide-icons");
function ja() {
  return ln(La, {});
}
const Na = ({
  name: e,
  iconNode: t,
  "icon-node": n,
  icon: s = {
    name: e && Fa(e),
    node: t ?? n ?? [],
    size: 24,
    aliases: []
  },
  absoluteStrokeWidth: i,
  "absolute-stroke-width": r,
  nonScalingStroke: o,
  "non-scaling-stroke": l,
  strokeWidth: a,
  "stroke-width": h,
  size: u,
  width: d = u,
  height: m = u,
  color: v,
  ...p
}, { slots: O }) => {
  const {
    size: j,
    color: A,
    strokeWidth: E = 2,
    absoluteStrokeWidth: w = !1,
    nonScalingStroke: b = !1,
    class: q = ""
  } = ja(), L = Pn(i) || Pn(r) || i === !0 || r === !0 || w === !0, H = Pn(o) || Pn(l) || o === !0 || l === !0 || b === !0;
  delete p.class;
  const C = O.default?.(), [, F, z = []] = Ia(s, {
    color: v ?? A,
    width: d ?? u ?? j,
    height: m ?? u ?? j,
    strokeWidth: a ?? h ?? E,
    absoluteStrokeWidth: L,
    nonScalingStroke: H,
    className: q,
    hasA11yProp: C != null && C.length > 0 || Da(p),
    attributes: p
  });
  return Ls("svg", F, [
    ...z.map(([K, Z]) => Ls(K, Z)),
    ...C ?? []
  ]);
};
function De(e, t = []) {
  const n = typeof e == "string" ? {
    name: e,
    node: t
  } : e;
  return (s, { slots: i }) => Ls(
    Na,
    {
      ...s,
      icon: n
    },
    i.default ? { default: i.default } : void 0
  );
}
const Ua = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
}, Ha = De(Ua);
const za = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
}, Wa = De(za);
const qa = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
}, Hi = De(qa);
const Va = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
}, zi = De(Va);
const Ba = {
  name: "circle-alert",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
    ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
  ],
  aliases: ["alert-circle"]
}, Ka = De(Ba);
const Ga = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
}, Ya = De(Ga);
const Ja = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
}, Xa = De(Ja);
const Za = {
  name: "maximize",
  size: 24,
  node: [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
  ]
}, Qa = De(Za);
const ec = {
  name: "minus",
  size: 24,
  node: [["path", { d: "M5 12h14", key: "1ays0h" }]]
}, tc = De(ec);
const nc = {
  name: "panel-left",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }]
  ],
  aliases: ["sidebar"]
}, Wi = De(nc);
const sc = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
}, ic = De(sc);
const rc = {
  name: "rotate-cw",
  size: 24,
  node: [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }]
  ]
}, io = De(rc);
const oc = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
}, lc = De(oc);
const ac = {
  name: "triangle-alert",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
        key: "wmoenq"
      }
    ],
    ["path", { d: "M12 9v4", key: "juzpu7" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["alert-triangle"]
}, cc = De(ac);
const uc = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
}, Ms = De(uc);
function fc(e, t, n, s = new DOMMatrix()) {
  const i = e.createPattern(t, "no-repeat");
  return i.setTransform(
    s.multiply(
      new DOMMatrix([
        n[2] / t.width,
        0,
        0,
        n[3] / t.height,
        n[0],
        n[1]
      ])
    )
  ), i;
}
function hc(e, t, n) {
  if (!t.triangles.length) return t.background ?? "transparent";
  const s = t.triangles.flat(), i = Math.min(...s.map((j) => j.x)), r = Math.min(...s.map((j) => j.y)), o = Math.max(0.01, Math.max(...s.map((j) => j.x)) - i), l = Math.max(0.01, Math.max(...s.map((j) => j.y)) - r), a = e.getTransform(), h = Math.min(
    Math.hypot(a.a, a.b),
    Math.sqrt(262144 / (o * l))
  ), u = document.createElement("canvas");
  u.width = Math.max(1, Math.ceil(o * h)), u.height = Math.max(1, Math.ceil(l * h));
  const d = u.getContext("2d");
  t.background && (d.fillStyle = t.background, d.fillRect(0, 0, u.width, u.height));
  const m = d.getImageData(0, 0, u.width, u.height), v = m.data, p = (j) => {
    const A = (j.match(/[\d.]+/g) ?? []).map(Number);
    return [A[0] ?? 0, A[1] ?? 0, A[2] ?? 0, (A[3] ?? 1) * 255];
  };
  let O = 8e6;
  for (const j of t.triangles) {
    const [A, E, w] = j.map((F) => ({
      x: (F.x - i) * u.width / o,
      y: (F.y - r) * u.height / l,
      color: p(F.color)
    })), b = (E.y - w.y) * (A.x - w.x) + (w.x - E.x) * (A.y - w.y);
    if (Math.abs(b) < 1e-8) continue;
    const q = Math.max(0, Math.floor(Math.min(A.x, E.x, w.x))), L = Math.min(u.width, Math.ceil(Math.max(A.x, E.x, w.x))), H = Math.max(0, Math.floor(Math.min(A.y, E.y, w.y))), C = Math.min(u.height, Math.ceil(Math.max(A.y, E.y, w.y)));
    if (O -= (L - q) * (C - H), O < 0) throw new Error("网格渐变插值超过本页像素预算");
    for (let F = H; F < C; F++)
      for (let z = q; z < L; z++) {
        const K = ((E.y - w.y) * (z + 0.5 - w.x) + (w.x - E.x) * (F + 0.5 - w.y)) / b, Z = ((w.y - A.y) * (z + 0.5 - w.x) + (A.x - w.x) * (F + 0.5 - w.y)) / b, B = 1 - K - Z;
        if (Math.min(K, Z, B) < -1e-5) continue;
        const ye = (F * u.width + z) * 4;
        for (let fe = 0; fe < 4; fe++)
          v[ye + fe] = K * A.color[fe] + Z * E.color[fe] + B * w.color[fe];
      }
  }
  return d.putImageData(m, 0, 0), fc(e, u, [i, r, o, l], n);
}
function dc(e, t, n, s) {
  const i = t.reflect.toLowerCase().replace(/\s+/g, ""), r = i === "row" || i === "rowandcolumn" ? 2 : 1, o = i === "column" || i === "rowandcolumn" ? 2 : 1, l = t.xstep * o, a = t.ystep * r, h = e.getTransform(), u = Math.min(
    16,
    Math.max(1, Math.hypot(h.a, h.b))
  ), d = Math.min(u, Math.sqrt(262144 / (l * a))), m = document.createElement("canvas");
  m.width = Math.max(1, Math.ceil(l * d)), m.height = Math.max(1, Math.ceil(a * d));
  const v = m.getContext("2d");
  v.scale(m.width / l, m.height / a);
  const p = Math.min(4, Math.ceil(t.width / t.xstep)), O = Math.min(4, Math.ceil(t.height / t.ystep));
  for (let E = -O; E < r; E++)
    for (let w = -p; w < o; w++) {
      v.save(), v.translate(w * t.xstep, E * t.ystep), o === 2 && Math.abs(w % 2) === 1 && (v.translate(t.width, 0), v.scale(-1, 1)), r === 2 && Math.abs(E % 2) === 1 && (v.translate(0, t.height), v.scale(1, -1)), v.beginPath(), v.rect(0, 0, t.width, t.height), v.clip();
      for (const b of t.paths) {
        v.save(), v.transform(...b.matrix), v.globalAlpha = b.alpha;
        const q = new Path2D(b.d);
        b.fill && (v.fillStyle = b.fill, v.fill(q, b.rule)), b.stroke && (v.strokeStyle = b.stroke, v.lineWidth = b.width, v.stroke(q)), v.restore();
      }
      v.restore();
    }
  const j = e.createPattern(m, "repeat");
  let A = new DOMMatrix(t.matrix);
  return t.relative === "Page" && n ? A = e.getTransform().inverse().multiply(n).multiply(A) : s && (A = s.multiply(A)), A = A.multiply(
    new DOMMatrix([l / m.width, 0, 0, a / m.height, 0, 0])
  ), j.setTransform(A), j;
}
function Ss(e, t, n = 0, s = 1, i = 1) {
  const r = t.mapping === "Repeat" || t.mapping === "Reflect";
  if (t.extend & 1 || e.addColorStop(0, "transparent"), r) {
    const o = Math.floor(n / i), l = Math.ceil(s / i);
    let a = 0;
    for (let h = o; h < l && a < 4096; h++) {
      const u = t.mapping === "Reflect" && Math.abs(h % 2) === 1, d = u ? [...t.stops].reverse() : t.stops;
      for (const m of d) {
        const v = (h + (u ? 1 - m.offset : m.offset)) * i;
        v < n || v > s || (e.addColorStop((v - n) / (s - n), m.color), a++);
      }
    }
  } else
    for (const o of t.stops)
      e.addColorStop(o.offset, o.color);
  t.extend & 2 || e.addColorStop(1, "transparent");
}
function Dt(e, t, n, s) {
  if (typeof t == "string") return t;
  const i = s ? new DOMMatrix(s).inverse() : void 0;
  if (t.kind === "mesh") return hc(e, t, i);
  if (t.kind === "pattern")
    return dc(e, t, n, i);
  if (s && t.kind === "axial") {
    const [K, Z, B, ye, fe, oe] = s, Q = t.end[0] - t.start[0], X = t.end[1] - t.start[1], Se = Q * Q + X * X;
    if (Se < 1e-12) return t.stops.at(-1)?.color ?? "transparent";
    const xe = (Q * K + X * Z) / Se, he = (Q * B + X * ye) / Se, ae = xe * xe + he * he;
    if (ae < 1e-12) return t.stops[0]?.color ?? "transparent";
    const Te = ((fe - t.start[0]) * Q + (oe - t.start[1]) * X) / Se;
    return Dt(
      e,
      {
        ...t,
        start: [-Te * xe / ae, -Te * he / ae],
        end: [(1 - Te) * xe / ae, (1 - Te) * he / ae],
        unit: t.unit / Math.sqrt(Se * ae)
      },
      n
    );
  }
  const [r, o] = t.start, [l, a] = t.end;
  if (t.kind === "axial") {
    const K = l - r, Z = a - o, B = Math.hypot(K, Z);
    if (B < 1e-8) return t.stops.at(-1)?.color ?? "transparent";
    let ye = 0, fe = 1;
    const oe = t.unit > 0 ? Math.max(1 / 128, t.unit / B) : 1;
    if (t.mapping === "Repeat" || t.mapping === "Reflect") {
      const X = e.getTransform().inverse(), xe = [
        [0, 0],
        [e.canvas.width, 0],
        [0, e.canvas.height],
        [e.canvas.width, e.canvas.height]
      ].map(([he, ae]) => X.transformPoint({ x: he, y: ae })).map(
        (he) => ((he.x - r) * K + (he.y - o) * Z) / (B * B)
      );
      t.extend & 1 && (ye = Math.max(
        -32 * oe,
        Math.min(0, Math.floor(Math.min(...xe) / oe) * oe)
      )), t.extend & 2 && (fe = Math.min(
        1 + 32 * oe,
        Math.max(1, Math.ceil(Math.max(...xe) / oe) * oe)
      ));
    }
    const Q = e.createLinearGradient(
      r + K * ye,
      o + Z * ye,
      r + K * fe,
      o + Z * fe
    );
    return Ss(Q, t, ye, fe, oe), Q;
  }
  const h = Math.sqrt(1 - (t.eccentricity ?? 0) ** 2), u = (t.angle ?? 0) * Math.PI / 180;
  if (!t.eccentricity && !s) {
    const K = e.createRadialGradient(
      r,
      o,
      t.r0 ?? 0,
      l,
      a,
      t.r1 ?? 0
    );
    return Ss(
      K,
      t,
      0,
      1,
      t.unit > 0 ? Math.max(
        1 / 128,
        t.unit / (Math.hypot(l - r, a - o) || Math.abs((t.r1 ?? 0) - (t.r0 ?? 0)) || 1)
      ) : 1
    ), K;
  }
  const d = Math.max(t.r0 ?? 0, t.r1 ?? 0, 1);
  let m = Math.min(r, l) - d, v = Math.min(o, a) - d, p = Math.max(r, l) + d, O = Math.max(o, a) + d;
  if (t.extend) {
    const K = e.getTransform().inverse(), Z = [
      [0, 0],
      [e.canvas.width, 0],
      [0, e.canvas.height],
      [e.canvas.width, e.canvas.height]
    ].map(([B, ye]) => K.transformPoint({ x: B, y: ye }));
    m = Math.min(m, ...Z.map((B) => B.x)), p = Math.max(p, ...Z.map((B) => B.x)), v = Math.min(v, ...Z.map((B) => B.y)), O = Math.max(O, ...Z.map((B) => B.y));
  }
  const j = e.getTransform(), A = Math.max(
    0.01,
    Math.min(
      Math.hypot(j.a, j.b),
      Math.sqrt(1e6 / ((p - m) * (O - v)))
    )
  ), E = document.createElement("canvas");
  E.width = Math.max(1, Math.ceil((p - m) * A)), E.height = Math.max(1, Math.ceil((O - v) * A));
  const w = E.getContext("2d");
  w.scale(A, A), w.translate(-m, -v), w.translate(l, a), w.rotate(u), w.scale(1, Math.max(0.01, h));
  const b = r - l, q = o - a, L = b * Math.cos(u) + q * Math.sin(u), H = (-b * Math.sin(u) + q * Math.cos(u)) / Math.max(0.01, h), C = w.createRadialGradient(
    L,
    H,
    t.r0 ?? 0,
    0,
    0,
    t.r1 ?? 0
  );
  Ss(C, t), w.fillStyle = C;
  const F = (p - m + O - v + d) * 100;
  w.fillRect(-F, -F, 2 * F, 2 * F);
  const z = e.createPattern(E, "no-repeat");
  return z.setTransform(
    (i ?? new DOMMatrix()).multiply(
      new DOMMatrix([1 / A, 0, 0, 1 / A, m, v])
    )
  ), z;
}
function ro(e) {
  const t = e.replace(/["\\\n\r]/g, ""), n = /sim(?:sun|song)|宋体|songti/i.test(t) ? 'SimSun, "Songti SC", serif' : /fangsong|仿宋/i.test(t) ? "FangSong, STFangsong, serif" : /kai(?:ti)?|楷体/i.test(t) ? "KaiTi, STKaiti, serif" : /hei|黑体|sans/i.test(t) ? 'SimHei, "Microsoft YaHei", "PingFang SC", sans-serif' : /courier|mono/i.test(t) ? "monospace" : /arial|helvetica/i.test(t) ? "Arial, sans-serif" : "serif";
  return `"${t}", ${n}`;
}
class nn {
  constructor(t, n = () => {
  }) {
    this.budget = t, this.dispose = n;
  }
  budget;
  dispose;
  entries = /* @__PURE__ */ new Map();
  bytes = 0;
  get(t) {
    const n = this.entries.get(t);
    if (n)
      return this.entries.delete(t), this.entries.set(t, n), n.value;
  }
  set(t, n, s) {
    if (this.delete(t), !(s > this.budget)) {
      for (; this.bytes + s > this.budget && this.entries.size; )
        this.delete(this.entries.keys().next().value);
      this.entries.set(t, { value: n, bytes: s }), this.bytes += s;
    }
  }
  delete(t) {
    const n = this.entries.get(t);
    n && (this.entries.delete(t), this.bytes -= n.bytes, this.dispose(n.value));
  }
  take(t) {
    const n = this.entries.get(t);
    if (n)
      return this.entries.delete(t), this.bytes -= n.bytes, n.value;
  }
  clear() {
    for (const t of this.entries.keys()) this.delete(t);
  }
}
const qi = new nn(8 * 1024 * 1024);
function qt(e) {
  const t = qi.get(e);
  if (t) return t;
  const n = new Path2D(e);
  return qi.set(e, n, e.length * 2 + 512), n;
}
async function pc(e, t, n, s, i, r) {
  const [o, l, a, h] = t.bounds, u = e.getTransform().multiply(new DOMMatrix(t.matrix)), d = [
    [o, l],
    [o + a, l],
    [o, l + h],
    [o + a, l + h]
  ].map(([L, H]) => u.transformPoint({ x: L, y: H })), m = Math.max(0, Math.floor(Math.min(...d.map((L) => L.x)))), v = Math.max(0, Math.floor(Math.min(...d.map((L) => L.y)))), p = Math.max(
    1,
    Math.ceil(
      Math.min(e.canvas.width, Math.max(...d.map((L) => L.x)))
    ) - m
  ), O = Math.max(
    1,
    Math.ceil(
      Math.min(e.canvas.height, Math.max(...d.map((L) => L.y)))
    ) - v
  );
  if (!Number.isFinite(p * O) || p * O > Math.min(4e6, i))
    throw new Error("文字裁剪超过离屏像素预算");
  const j = document.createElement("canvas"), A = document.createElement("canvas");
  j.width = A.width = p, j.height = A.height = O;
  const E = j.getContext("2d"), w = A.getContext("2d"), b = new DOMMatrix([1, 0, 0, 1, -m, -v]).multiply(
    e.getTransform()
  );
  E.setTransform(b), w.setTransform(b);
  let q = performance.now();
  try {
    for (const L of t.ops) {
      if (r.aborted) throw new DOMException("过期任务", "AbortError");
      switch (performance.now() - q > 5 && (await new Promise(
        (H) => requestAnimationFrame(() => H())
      ), q = performance.now()), w.fillStyle = w.strokeStyle = "white", w.globalAlpha = 1, L.kind) {
        case "save":
          w.save();
          break;
        case "restore":
          w.restore();
          break;
        case "transform":
          w.transform(...L.matrix);
          break;
        case "path": {
          const H = qt(L.d);
          L.fill && w.fill(H, L.rule), L.stroke && (w.lineWidth = L.width, w.stroke(H));
          break;
        }
        case "glyph": {
          w.save(), w.transform(...L.matrix);
          const H = qt(n.glyphs.get(L.key) ?? "");
          L.fill && (w.fill(H), L.embolden > 0 && (w.lineWidth = L.embolden, w.stroke(H))), L.stroke && (w.lineWidth = L.width, w.stroke(H)), w.restore();
          break;
        }
        case "text":
          w.save(), w.transform(...L.matrix), w.font = `${L.italic ? "italic " : ""}${L.weight} ${L.size}px ${ro(L.family)}`, L.fill && w.fillText(L.text, 0, 0), L.stroke && (w.lineWidth = L.width, w.strokeText(L.text, 0, 0)), w.restore();
          break;
      }
    }
    return {
      parent: e,
      context: E,
      mask: A,
      canvas: j,
      x: m,
      y: v,
      pixels: p * O,
      pageTransform: s
    };
  } catch (L) {
    throw j.width = j.height = A.width = A.height = 0, L;
  }
}
function gc(e) {
  const t = e.context;
  t.save(), t.resetTransform(), t.globalAlpha = 1, t.globalCompositeOperation = "destination-in", t.drawImage(e.mask, 0, 0), t.restore();
  const n = e.parent;
  n.save(), n.resetTransform(), n.globalAlpha = 1, n.drawImage(e.canvas, e.x, e.y), n.restore(), oo(e);
}
function oo(e) {
  e.canvas.width = e.canvas.height = e.mask.width = e.mask.height = 0;
}
const Vi = 96 / 25.4, lo = () => new Promise((e) => requestAnimationFrame(() => e()));
function nt(e) {
  if (e.aborted) throw new DOMException("过期任务", "AbortError");
}
function Us(e) {
  const t = new DataView(e);
  if (e.byteLength >= 24 && t.getUint32(0) === 2303741511)
    return [t.getUint32(16), t.getUint32(20)];
  if (e.byteLength >= 4 && t.getUint16(0) === 65496) {
    let n = 2;
    for (; n + 9 < e.byteLength; ) {
      if (t.getUint8(n) !== 255) return;
      const s = t.getUint8(n + 1);
      if (n += 2, s === 217 || s === 218) return;
      if (s === 216 || s === 1 || s >= 208 && s <= 215)
        continue;
      const i = t.getUint16(n);
      if (i < 2 || n + i > e.byteLength) return;
      if ([192, 193, 194].includes(s))
        return [t.getUint16(n + 5), t.getUint16(n + 3)];
      n += i;
    }
  }
}
async function mc(e, t, n, s, i, r) {
  const o = await e.page(t);
  nt(r);
  const l = s % 180 !== 0, a = l ? o.height : o.width, h = l ? o.width : o.height, u = Math.min(devicePixelRatio || 1, i ? 1.5 : 2), d = Math.min(
    n / a * u,
    Math.sqrt((i ? 1e5 : 16e6) / (a * h))
  ), m = document.createElement("canvas");
  m.width = Math.max(1, Math.ceil(a * d)), m.height = Math.max(1, Math.ceil(h * d));
  const v = o.ops.some((H) => H.kind === "text");
  let p = m.getContext("2d", { alpha: v });
  switch (p.fillStyle = "white", p.fillRect(0, 0, m.width, m.height), p.scale(d, d), s % 360) {
    case 90:
      p.translate(o.height, 0), p.rotate(Math.PI / 2);
      break;
    case 180:
      p.translate(o.width, o.height), p.rotate(Math.PI);
      break;
    case 270:
      p.translate(0, o.width), p.rotate(-Math.PI / 2);
      break;
  }
  let O = p.getTransform();
  const j = [];
  let A = 0;
  const E = [...o.warnings], w = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map();
  let q = 0, L = performance.now();
  try {
    let H = 0;
    for (const C of o.ops)
      switch (nt(r), (H++ & 31) === 0 && performance.now() - L > 5 && (await lo(), nt(r), L = performance.now()), C.kind) {
        case "save":
          p.save(), j.push([]);
          break;
        case "restore":
          for (const F of (j.pop() ?? []).reverse())
            gc(F), p = F.parent, O = F.pageTransform, A -= F.pixels;
          p.restore();
          break;
        case "transform":
          p.transform(...C.matrix);
          break;
        case "clip":
          p.clip(qt(C.d), C.rule);
          break;
        case "clipPaths": {
          const F = new Path2D();
          for (const z of C.paths)
            F.addPath(qt(z.d), new DOMMatrix(z.matrix));
          p.clip(F, C.rule);
          break;
        }
        case "clipMask": {
          const F = await pc(
            p,
            C,
            o,
            O,
            8e6 - A,
            r
          );
          j.at(-1)?.push(F), A += F.pixels, p = F.context, O = new DOMMatrix([
            1,
            0,
            0,
            1,
            -F.x,
            -F.y
          ]).multiply(O);
          break;
        }
        case "path": {
          p.globalAlpha = C.alpha, p.lineWidth = C.width, p.lineCap = C.cap, p.lineJoin = C.join, p.setLineDash(C.dash), p.lineDashOffset = C.dashOffset, p.miterLimit = C.width > 0 ? Math.max(1, C.miterLimit / C.width) : 10;
          const F = qt(C.d);
          if (C.fill && (p.fillStyle = Dt(p, C.fill, O), p.fill(F, C.rule)), C.stroke) {
            if (C.width === 0) {
              const z = p.getTransform();
              p.lineWidth = 1 / Math.max(Math.hypot(z.a, z.b), Math.hypot(z.c, z.d), 1e-6);
            }
            p.strokeStyle = Dt(p, C.stroke, O), p.stroke(F);
          }
          break;
        }
        case "glyph": {
          let F = qt(o.glyphs.get(C.key) ?? "");
          p.save();
          const z = C.fill ? Dt(p, C.fill, O) : void 0, K = C.stroke ? Dt(p, C.stroke, O) : void 0, Z = typeof C.fill == "object" || typeof C.stroke == "object";
          if (Z) {
            const B = new Path2D();
            B.addPath(F, new DOMMatrix(C.matrix)), F = B;
          } else p.transform(...C.matrix);
          p.globalAlpha = C.alpha, z && (p.fillStyle = z, p.fill(F), C.embolden > 0 && (p.strokeStyle = z, p.lineJoin = "round", p.lineWidth = C.embolden * (Z ? Math.hypot(C.matrix[0], C.matrix[1]) : 1), p.stroke(F))), K && (p.lineWidth = C.width * (Z ? Math.hypot(C.matrix[0], C.matrix[1]) : 1), p.strokeStyle = K, p.stroke(F)), p.restore();
          break;
        }
        case "text": {
          p.save(), p.transform(...C.matrix);
          const F = C.fill ? Dt(p, C.fill, O, C.matrix) : void 0, z = C.stroke ? Dt(p, C.stroke, O, C.matrix) : void 0;
          p.globalAlpha = C.alpha;
          let K = w.get(C.family);
          K || (K = ro(C.family), w.set(C.family, K)), p.font = `${C.italic ? "italic " : ""}${C.weight} ${C.size}px ${K}`, F && (p.fillStyle = F, p.fillText(C.text, 0, 0)), z && (p.strokeStyle = z, p.lineWidth = C.width, p.strokeText(C.text, 0, 0)), p.restore();
          break;
        }
        case "image": {
          try {
            const F = C.key + (C.mask ? `#mask=${C.mask}` : "");
            let z = b.get(F);
            if (!z) {
              let K = await e.image(C.key);
              nt(r);
              let Z = Us(K);
              if (!Z && C.substitution && (K = await e.image(C.substitution), nt(r), Z = Us(K)), !Z)
                throw new Error("当前仅支持可识别的 PNG/JPEG 图片");
              if (!Z[0] || !Z[1] || Z[0] * Z[1] > 16e6)
                throw new Error("图片像素超过 16 MP 限制");
              for (; q + Z[0] * Z[1] > 16e6 && b.size; ) {
                const B = b.entries().next().value;
                q -= B[1].width * B[1].height, B[1].close(), b.delete(B[0]);
              }
              if (z = await createImageBitmap(new Blob([K])), b.set(F, z), nt(r), q += z.width * z.height, C.mask) {
                const B = await vc(e, z, C.mask, r);
                q += B.width * B.height - z.width * z.height, z.close(), z = B, b.set(F, z);
              }
            }
            p.save(), p.transform(...C.matrix), p.globalAlpha = C.alpha, p.drawImage(z, 0, 0, 1, 1), p.restore();
          } catch (F) {
            nt(r), E.push(
              `图片 ${C.key}：${F instanceof Error ? F.message : F}`
            );
          }
          break;
        }
      }
    return { canvas: m, page: o, warnings: [...new Set(E)] };
  } catch (H) {
    throw m.width = m.height = 0, H;
  } finally {
    for (const H of j)
      for (const C of H) oo(C);
    for (const H of b.values()) H.close();
  }
}
async function vc(e, t, n, s) {
  const i = await e.image(n);
  nt(s);
  const r = Us(i);
  if (!r || r[0] * r[1] > 16e6)
    throw new Error("图片掩码尺寸或格式不支持");
  const o = await createImageBitmap(new Blob([i])), l = Math.min(
    1,
    Math.sqrt(4e6 / (t.width * t.height))
  ), a = document.createElement("canvas");
  a.width = Math.max(1, Math.round(t.width * l)), a.height = Math.max(1, Math.round(t.height * l));
  const h = a.getContext("2d");
  try {
    h.drawImage(o, 0, 0, a.width, a.height);
    const u = h.getImageData(
      0,
      0,
      a.width,
      a.height
    ).data;
    h.clearRect(0, 0, a.width, a.height), h.drawImage(t, 0, 0, a.width, a.height);
    const d = h.getImageData(0, 0, a.width, a.height);
    let m = performance.now();
    for (let v = 0; v < d.data.length; v += 4)
      d.data[v + 3] *= (u[v] * 0.2126 + u[v + 1] * 0.7152 + u[v + 2] * 0.0722) / 255 * (u[v + 3] / 255), v % 65536 === 0 && performance.now() - m > 5 && (await lo(), nt(s), m = performance.now());
    return h.putImageData(d, 0, 0), nt(s), await createImageBitmap(a);
  } finally {
    o.close(), a.width = a.height = 0;
  }
}
const yc = ["data-page"], bc = {
  key: 0,
  class: "page-skeleton",
  "aria-label": "正在渲染"
}, wc = {
  key: 2,
  class: "page-error",
  role: "alert"
}, xc = { key: 0 }, _c = ["title"], Mc = { key: 0 }, Sc = {
  key: 3,
  class: "refining-indicator"
}, Bi = /* @__PURE__ */ kr({
  __name: "DocumentPage",
  props: {
    client: {},
    scheduler: {},
    index: {},
    width: {},
    rotation: {},
    thumbnail: { type: Boolean },
    priority: {},
    query: {}
  },
  emits: ["ready"],
  setup(e, { emit: t }) {
    const n = e, s = t, i = /* @__PURE__ */ ne(), r = /* @__PURE__ */ $n(), o = /* @__PURE__ */ ne(""), l = /* @__PURE__ */ ne(!0), a = mt(() => {
      const A = /* @__PURE__ */ new Set();
      if (!n.query || !r.value) return A;
      const E = r.value.textRuns.map((b) => b.text).join("");
      let w = E.indexOf(n.query);
      for (; w !== -1; ) {
        for (let b = w; b < w + n.query.length; b++) A.add(b);
        w = E.indexOf(n.query, w + Math.max(1, n.query.length));
      }
      return A;
    }), h = /* @__PURE__ */ ne(0);
    let u, d, m = "", v;
    function p() {
      if (d) {
        if (d.remove(), v && !v.isClosed) {
          const A = n.thumbnail ? v.thumbnailSurfaces : v.pageSurfaces, E = d.width * d.height * 4;
          E <= A.budget ? A.set(m, d, E) : d.width = d.height = 0;
        } else d.width = d.height = 0;
        d = void 0;
      }
    }
    Rn(
      () => [n.client, n.index, n.width, n.rotation, h.value],
      () => {
        u?.abort(), u = new AbortController();
        const A = u.signal;
        l.value = !0, o.value = "";
        const { client: E, scheduler: w, index: b, width: q, rotation: L, thumbnail: H } = n, C = `${b}:${q.toFixed(2)}:${L}:${devicePixelRatio}`;
        w.schedule(
          `${H ? "thumb" : "page"}:${b}`,
          () => n.priority,
          () => !A.aborted,
          async () => {
            const z = (H ? E.thumbnailSurfaces : E.pageSurfaces).take(C);
            if (z)
              try {
                const K = await E.page(b);
                return { canvas: z, page: K, warnings: K.warnings };
              } catch (K) {
                throw z.width = z.height = 0, K;
              }
            return mc(
              E,
              b,
              q,
              L,
              !!H,
              A
            );
          }
        ).then((F) => {
          if (A.aborted || !i.value) {
            F.canvas.width = F.canvas.height = 0;
            return;
          }
          p(), i.value.replaceChildren(F.canvas), v = E, m = C, d = F.canvas, r.value = F.page, l.value = !1, s("ready", b, F.page, F.warnings);
        }).catch((F) => {
          A.aborted || (o.value = F instanceof Error ? F.message : String(F), l.value = !1);
        });
      },
      { immediate: !0, flush: "post" }
    );
    function O(A) {
      if (!r.value) return {};
      const E = n.width / (n.rotation % 180 ? r.value.height : r.value.width), [w, b, q, L, H, C] = A.matrix;
      return {
        transform: `matrix(${w},${b},${q},${L},${H * E},${C * E})`,
        fontSize: `${A.size * E}px`,
        width: `${A.width * E}px`,
        height: `${A.size * E * 1.1}px`
      };
    }
    function j() {
      if (!r.value) return {};
      const A = n.width / (n.rotation % 180 ? r.value.height : r.value.width), E = r.value.width * A, w = r.value.height * A, b = {
        0: "",
        90: `translateX(${w}px) rotate(90deg)`,
        180: `translate(${E}px,${w}px) rotate(180deg)`,
        270: `translateY(${E}px) rotate(270deg)`
      };
      return {
        width: `${E}px`,
        height: `${w}px`,
        transform: b[n.rotation]
      };
    }
    return si(() => {
      u?.abort(), p();
    }), (A, E) => (ce(), ge("div", {
      class: Ct(["rendered-page", { "is-loading": l.value, "is-thumbnail": e.thumbnail }]),
      "data-page": e.index + 1
    }, [
      D("div", {
        ref_key: "host",
        ref: i,
        class: "canvas-host"
      }, null, 512),
      l.value && !r.value ? (ce(), ge("div", bc, [...E[1] || (E[1] = [
        D("i", null, null, -1),
        D("i", null, null, -1),
        D("i", null, null, -1),
        D("i", null, null, -1),
        D("i", null, null, -1)
      ])])) : je("", !0),
      r.value && !e.thumbnail && !l.value && r.value.textRuns.length <= 6e3 ? (ce(), ge("div", {
        key: 1,
        class: "text-layer",
        style: ze(j()),
        "aria-label": "页面文本"
      }, [
        (ce(!0), ge(ke, null, Qt(r.value.textRuns, (w, b) => (ce(), ge("span", {
          key: b,
          style: ze(O(w)),
          class: Ct({ "search-hit": a.value.has(b) })
        }, Me(w.text), 7))), 128))
      ], 4)) : je("", !0),
      o.value ? (ce(), ge("div", wc, [
        te(ve(Ka), {
          size: e.thumbnail ? 20 : 30
        }, null, 8, ["size"]),
        e.thumbnail ? je("", !0) : (ce(), ge("span", xc, Me(o.value), 1)),
        D("button", {
          title: o.value,
          onClick: E[0] || (E[0] = Ns((w) => h.value++, ["stop"]))
        }, [
          te(ve(io), { size: 14 }),
          e.thumbnail ? je("", !0) : (ce(), ge("span", Mc, "重试此页"))
        ], 8, _c)
      ])) : je("", !0),
      l.value && r.value && !e.thumbnail ? (ce(), ge("div", Sc, " 正在优化清晰度 ")) : je("", !0)
    ], 10, yc));
  }
});
function Cc(e) {
  return new Worker(
    "" + new URL("usdoc.ofd.worker.js", import.meta.url).href,
    {
      type: "module",
      name: e?.name
    }
  );
}
const Hs = 500 * 1e3 ** 3, zs = "文件超过 500 GB，请联系管理员";
function ao(e) {
  if (!Number.isSafeInteger(e) || e < 0) throw new Error("文件大小无效");
  if (e > Hs) throw new Error(zs);
  if (!e) throw new Error("文件为空");
}
function Tc(e) {
  let t = 128;
  const n = [e.ops, e.textRuns, e.warnings];
  for (; n.length; ) {
    const s = n.pop();
    if (typeof s == "string") t += s.length * 2 + 16;
    else if (typeof s == "number") t += 8;
    else if (s && typeof s == "object")
      if (t += 32, Array.isArray(s))
        for (const i of s) n.push(i);
      else
        for (const i of Object.values(s)) n.push(i);
  }
  for (const [s, i] of e.glyphs) t += (s.length + i.length) * 2 + 64;
  return t;
}
class Ec {
  thumbnailSurfaces = new nn(
    8 * 1024 * 1024,
    (t) => {
      t.width = t.height = 0;
    }
  );
  pageSurfaces = new nn(
    24 * 1024 * 1024,
    (t) => {
      t.width = t.height = 0;
    }
  );
  worker;
  sequence = 0;
  pending = /* @__PURE__ */ new Map();
  inFlight = /* @__PURE__ */ new Map();
  pages = new nn(24 * 1024 * 1024);
  imageBytes = new nn(16 * 1024 * 1024);
  imageFlight = /* @__PURE__ */ new Map();
  closed = !1;
  failure = new Error("文档会话已关闭");
  expiresAt;
  licenseTimer;
  checkingLicense = !1;
  onLicenseExpired;
  constructor(t = {}) {
    this.onLicenseExpired = t.onLicenseExpired, this.worker = new Cc(), this.worker.postMessage({ type: "configure", wasmUrl: t.wasmUrl }), this.worker.onmessage = ({ data: n }) => {
      const s = this.pending.get(n.id);
      if (s)
        if (clearTimeout(s.timer), this.pending.delete(n.id), n.error) {
          const i = new Error(n.error);
          n.errorCode === "LICENSE_EXPIRED" && this.expire(i), s.reject(i);
        } else s.resolve(n.result);
    }, this.worker.onerror = (n) => this.destroy(new Error(n.message || "WASM Worker 启动失败"));
  }
  expire(t) {
    this.closed || (this.destroy(t), this.onLicenseExpired?.(t));
  }
  accessError() {
    if (this.closed) return this.failure;
    if (this.expiresAt !== void 0) {
      const t = Date.now();
      if (!Number.isFinite(t) || t < 0 || t >= this.expiresAt) {
        const n = new Error("USDOC预览组件出现问题请联系管理员");
        return this.expire(n), n;
      }
    }
  }
  // 即使所有页面命中缓存，也定期调用 WASM；切回标签页时立即复查。
  verifyLicense = () => {
    this.accessError() || this.checkingLicense || (this.checkingLicense = !0, this.request("license").then((t) => {
      this.closed || (this.expiresAt = t, this.accessError());
    }).catch(() => {
    }).finally(() => {
      this.checkingLicense = !1;
    }));
  };
  request(t, n, s = []) {
    const i = this.accessError();
    return i ? Promise.reject(i) : new Promise((r, o) => {
      const l = ++this.sequence, a = setTimeout(
        () => this.destroy(new Error("文档处理超时，请重新打开或使用较小文档")),
        3e4
      );
      this.pending.set(l, { resolve: r, reject: o, timer: a }), this.worker.postMessage(
        {
          version: 1,
          id: l,
          operation: t,
          payload: n,
          observedNow: Date.now()
        },
        s
      );
    });
  }
  async open(t) {
    ao(t.size);
    const n = await this.request("license");
    if (!Number.isFinite(n) || n <= 0)
      throw new Error(
        "INVALID_LICENSE: 无法读取核心授权信息，请重新部署完整 SDK"
      );
    this.expiresAt = n;
    const s = this.accessError();
    if (s) throw s;
    return this.licenseTimer || (this.licenseTimer = setInterval(this.verifyLicense, 1e3), window.addEventListener("focus", this.verifyLicense), document.addEventListener("visibilitychange", this.verifyLicense)), this.request("open", t);
  }
  peek(t) {
    if (!this.accessError())
      return this.pages.get(t);
  }
  page(t) {
    const n = this.accessError();
    if (n) return Promise.reject(n);
    const s = this.pages.get(t);
    if (s) return Promise.resolve(s);
    const i = this.inFlight.get(t);
    if (i) return i;
    const r = this.request("page", t).then((o) => (this.pages.set(t, o, Tc(o)), o)).finally(() => this.inFlight.delete(t));
    return this.inFlight.set(t, r), r;
  }
  image(t) {
    const n = this.accessError();
    if (n) return Promise.reject(n);
    const s = this.imageBytes.get(t);
    if (s) return Promise.resolve(s);
    const i = this.imageFlight.get(t);
    if (i) return i;
    const r = this.request("resource", t).then((o) => (this.imageBytes.set(t, o, o.byteLength), o)).finally(() => this.imageFlight.delete(t));
    return this.imageFlight.set(t, r), r;
  }
  destroy(t = new Error("文档会话已关闭")) {
    if (!this.closed) {
      this.closed = !0, this.failure = t, clearInterval(this.licenseTimer), window.removeEventListener("focus", this.verifyLicense), document.removeEventListener("visibilitychange", this.verifyLicense), this.worker.terminate();
      for (const n of this.pending.values())
        clearTimeout(n.timer), n.reject(t);
      this.pending.clear(), this.pages.clear(), this.imageBytes.clear(), this.inFlight.clear(), this.imageFlight.clear(), this.thumbnailSurfaces.clear(), this.pageSurfaces.clear();
    }
  }
  get isClosed() {
    return this.closed;
  }
}
async function kc(e, t, n) {
  const s = new URL(e, document.baseURI);
  if (!["http:", "https:"].includes(s.protocol))
    throw new Error("文件地址仅支持 HTTP 或 HTTPS");
  const i = await fetch(s, { signal: t });
  if (!i.ok)
    throw await i.body?.cancel(), new Error(`文件下载失败（HTTP ${i.status}）`);
  const r = Number(i.headers.get("Content-Length"));
  if (r > Hs)
    throw await i.body?.cancel(), new Error(zs);
  const o = Number.isSafeInteger(r) && r > 0 ? r : void 0;
  let l = "document.ofd";
  const a = i.headers.get("Content-Disposition") ?? "", h = /filename\*\s*=\s*UTF-8''([^;]+)/i.exec(a)?.[1], u = /filename\s*=\s*(?:"([^"]+)"|([^;]+))/i.exec(a);
  try {
    l = h ? decodeURIComponent(h.trim()) : u ? (u[1] ?? u[2]).trim() : decodeURIComponent(s.pathname.split("/").pop() || l);
  } catch {
  }
  if (l = l.split(/[\\/]/).pop() || "document.ofd", /\.ofd$/i.test(l) || (l += ".ofd"), !i.body) throw new Error("浏览器未提供文件下载流");
  const d = i.body.getReader(), m = [];
  let v = 0;
  n(0, o);
  try {
    for (; ; ) {
      const { done: p, value: O } = await d.read();
      if (p) break;
      if (v += O.byteLength, v > Hs) throw new Error(zs);
      m.push(O), n(v, o);
    }
    return t.throwIfAborted(), ao(v), new File(m, l, { type: "application/ofd" });
  } catch (p) {
    throw await d.cancel().catch(() => {
    }), p;
  } finally {
    d.releaseLock();
  }
}
class Ac {
  queue = [];
  running = !1;
  queued = !1;
  schedule(t, n, s, i) {
    return new Promise((r, o) => {
      this.queue = this.queue.filter((l) => l.key !== t && l.active() ? !0 : (l.reject(new DOMException("过期任务", "AbortError")), !1)), this.queue.push({ key: t, priority: n, active: s, run: i, resolve: r, reject: o }), !this.running && !this.queued && (this.queued = !0, queueMicrotask(() => {
        this.queued = !1, this.drain();
      }));
    });
  }
  async drain() {
    if (!this.running) {
      this.running = !0;
      try {
        for (; this.queue.length; ) {
          let t = 0, n = 1 / 0;
          for (let i = 0; i < this.queue.length; i++) {
            const r = this.queue[i], o = r.active() ? typeof r.priority == "function" ? r.priority() : r.priority : -1 / 0;
            o < n && (n = o, t = i);
          }
          const [s] = this.queue.splice(t, 1);
          if (!s.active()) {
            s.reject(new DOMException("过期任务", "AbortError"));
            continue;
          }
          try {
            s.resolve(await s.run());
          } catch (i) {
            s.reject(i);
          }
        }
      } finally {
        this.running = !1;
      }
    }
  }
}
function Cs(e, t) {
  let n = 0, s = e.length - 1;
  for (; n < s; ) {
    const i = Math.ceil((n + s) / 2);
    e[i] <= t ? n = i : s = i - 1;
  }
  return Math.min(n, e.length - 2);
}
const Pc = { class: "document-toolbar" }, Oc = { class: "document-identity" }, $c = ["aria-pressed"], Rc = ["title"], Ic = { class: "navigation-controls" }, Dc = ["disabled"], Fc = ["max"], Lc = ["disabled"], jc = ["aria-expanded"], Nc = {
  key: 0,
  class: "zoom-menu",
  role: "menu",
  "aria-label": "选择缩放比例"
}, Uc = ["aria-checked"], Hc = ["aria-checked", "onClick"], zc = { class: "view-controls" }, Wc = { class: "workspace" }, qc = { class: "sidebar-heading" }, Vc = {
  class: "sidebar-tabs",
  role: "tablist",
  "aria-label": "文档侧栏"
}, Bc = ["aria-selected"], Kc = ["aria-selected"], Gc = ["aria-label", "aria-current", "onClick"], Yc = {
  key: 0,
  class: "thumbnail-check"
}, Jc = { class: "thumbnail-label" }, Xc = {
  id: "search-panel",
  class: "search-panel",
  role: "tabpanel",
  "aria-labelledby": "search-tab"
}, Zc = { class: "search-field" }, Qc = { class: "search-meta" }, eu = { class: "search-position" }, tu = ["disabled"], nu = ["disabled"], su = ["aria-label", "onClick"], iu = { class: "result-page" }, ru = { class: "result-snippet" }, ou = {
  key: 0,
  class: "search-empty"
}, lu = ["aria-label"], au = { class: "statusbar" }, cu = {
  key: 1,
  class: "viewer-loading",
  "aria-label": "文档加载中",
  "aria-busy": "true"
}, uu = {
  role: "status",
  "aria-live": "polite"
}, fu = {
  key: 2,
  class: "download-status",
  role: "status",
  "aria-live": "polite"
}, hu = {
  key: 3,
  class: "error-toast",
  role: "alert"
}, Zt = 82, pt = 224, du = /* @__PURE__ */ kr({
  __name: "OfdViewer",
  props: {
    wasmUrl: {},
    showThumbnails: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = e, s = /* @__PURE__ */ ne(), i = /* @__PURE__ */ $n(), r = /* @__PURE__ */ $n(), o = new Ac(), l = /* @__PURE__ */ ne(), a = /* @__PURE__ */ ne(), h = /* @__PURE__ */ ne(""), u = /* @__PURE__ */ $n(), d = /* @__PURE__ */ ne(!1), m = /* @__PURE__ */ ne(!1), v = /* @__PURE__ */ ne("");
    let p, O = 0;
    function j() {
      p?.abort(), p = void 0, m.value = !1, cancelAnimationFrame(O);
    }
    async function A(k) {
      j();
      const y = new AbortController();
      p = y, m.value = !0, v.value = "正在连接文件地址…", E.value = "";
      try {
        const _ = await kc(
          k,
          y.signal,
          (G, et) => {
            cancelAnimationFrame(O), O = requestAnimationFrame(() => {
              v.value = et ? `正在下载 ${Math.min(100, Math.round(G / et * 100))}% · ${(G / 1024 / 1024).toFixed(1)} MB` : `正在下载 ${(G / 1024 / 1024).toFixed(1)} MB`;
            });
          }
        );
        if (p !== y) return;
        p = void 0, m.value = !1, cancelAnimationFrame(O), await Kt(_);
      } catch (_) {
        if (y.signal.aborted || p !== y) return;
        E.value = _ instanceof TypeError ? "无法下载文件，请检查地址、网络及服务器跨域（CORS）设置" : _ instanceof Error ? _.message : String(_);
      } finally {
        p === y && (p = void 0, m.value = !1, cancelAnimationFrame(O));
      }
    }
    const E = /* @__PURE__ */ ne(""), w = /* @__PURE__ */ ne(n.showThumbnails), b = /* @__PURE__ */ ne(0), q = /* @__PURE__ */ ne("1"), L = /* @__PURE__ */ ne(1), H = /* @__PURE__ */ ne(!1), C = /* @__PURE__ */ ne(), F = [25, 50, 75, 100, 125, 150, 200, 300, 400];
    function z(k) {
      H.value = !1, Mn(() => {
        B.value = k === void 0, k !== void 0 && (L.value = k / 100);
      }), C.value?.querySelector(".zoom-value")?.focus();
    }
    function K(k) {
      C.value && !k.composedPath().includes(C.value) && (H.value = !1);
    }
    function Z(k) {
      ["ArrowDown", "ArrowUp", "Home", "End"].includes(k.key) && (k.preventDefault(), k.stopPropagation(), H.value = !0, gt(() => {
        const y = Array.from(
          C.value?.querySelectorAll(
            "[role=menuitemradio]"
          ) ?? []
        ), _ = y.indexOf(k.target), G = k.key === "Home" ? 0 : k.key === "End" ? y.length - 1 : _ < 0 ? k.key === "ArrowUp" ? y.length - 1 : 0 : (_ + (k.key === "ArrowUp" ? -1 : 1) + y.length) % y.length;
        y[G]?.focus();
      }));
    }
    const B = /* @__PURE__ */ ne(!1), ye = /* @__PURE__ */ ne(0), fe = /* @__PURE__ */ ne(0), oe = /* @__PURE__ */ ne(800), Q = /* @__PURE__ */ ne(1e3), X = /* @__PURE__ */ ne(0), Se = /* @__PURE__ */ ne(700), xe = /* @__PURE__ */ ne(!1), he = /* @__PURE__ */ ne(""), ae = /* @__PURE__ */ ne(0), Te = /* @__PURE__ */ ne(!1), be = /* @__PURE__ */ ne([]), Be = /* @__PURE__ */ ne(0), Ke = /* @__PURE__ */ ne(""), Ge = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ ne(), ht = /* @__PURE__ */ ne(0), rs = /* @__PURE__ */ ne(700), c = mt(() => {
      const k = Math.max(0, Math.floor(ht.value / Zt) - 2), y = Math.min(
        be.value.length,
        k + Math.ceil(rs.value / Zt) + 5
      );
      return be.value.slice(k, y).map((_, G) => ({ page: _, position: k + G }));
    });
    function f(k) {
      const y = Ge.get(k) ?? "", _ = y.indexOf(Ke.value);
      return _ < 0 ? [y, "", ""] : [
        y.slice(0, _),
        y.slice(_, _ + Ke.value.length),
        y.slice(_ + Ke.value.length)
      ];
    }
    function g(k) {
      xe.value = k, w.value = !0, gt(() => {
        Ce(), k && s.value?.querySelector("#search-input")?.focus();
      });
    }
    function T() {
      N++, Te.value = !1, he.value = "", Ke.value = "", be.value = [], Ge.clear(), ae.value = 0, Be.value = 0;
    }
    function S(k) {
      Be.value = k, _t(be.value[k]);
    }
    let M = 0, $ = 0;
    function R(k) {
      !k.ctrlKey || !r.value || !k.deltaY || (k.preventDefault(), k.stopPropagation(), $ += k.deltaY < 0 ? 0.1 : -0.1, !M && (M = requestAnimationFrame(() => {
        M = 0;
        const y = Math.max(-0.3, Math.min(0.3, $));
        $ = 0, os(y);
      })));
    }
    let P, x = 0, N = 0, I = 0, U = 0, W, ee = 0, se;
    const Y = mt(() => r.value?.pages.length ?? 0), de = mt(() => {
      const k = r.value?.pages[b.value] ?? { width: 210, height: 297 }, y = ye.value % 180 ? k.height : k.width;
      return Math.max(
        180,
        B.value ? Math.min(
          860,
          Q.value - (Q.value < 600 ? 24 : 88)
        ) : y * Vi * L.value
      );
    }), _e = mt(
      () => `${Math.round(B.value ? de.value / ((ye.value % 180 ? r.value?.pages[b.value]?.height : r.value?.pages[b.value]?.width) ?? 210) / Vi * 100 : L.value * 100)}%`
    ), pe = mt(() => {
      const k = r.value?.pages ?? [], y = new Float64Array(k.length + 1);
      y[0] = 36;
      for (let _ = 0; _ < k.length; _++) {
        const G = k[_], et = ye.value % 180 ? G.width / G.height : G.height / G.width;
        y[_ + 1] = y[_] + de.value * et + 36;
      }
      return y;
    }), Ue = mt(() => {
      if (!Y.value) return [];
      const k = Math.max(0, Cs(pe.value, fe.value) - 1), y = Math.min(
        Y.value - 1,
        Cs(pe.value, fe.value + oe.value) + 1
      );
      return Array.from(
        { length: Math.max(0, y - k + 1) },
        (_, G) => k + G
      );
    }), kt = mt(() => {
      if (!w.value || !Y.value) return [];
      const k = Math.max(
        0,
        Math.floor(X.value / pt) - Math.ceil(Se.value / pt)
      ), y = Math.min(
        Y.value - 1,
        Math.ceil((X.value + Se.value) / pt) + Math.ceil(Se.value / pt)
      );
      return Array.from(
        { length: Math.max(0, y - k + 1) },
        (_, G) => k + G
      );
    });
    async function Kt(k) {
      if (!k) return;
      if (j(), !/\.ofd$/i.test(k.name)) {
        E.value = "请选择 .ofd 格式的文档";
        return;
      }
      const y = ++x;
      N++, Te.value = !1, T(), Ge.clear(), i.value?.destroy(), P?.destroy(), i.value = void 0, r.value = void 0, H.value = !1, h.value = k.name, u.value = k, d.value = !0, E.value = "", b.value = 0, q.value = "1", ye.value = 0, B.value = !1, L.value = 1, fe.value = 0, X.value = 0;
      const _ = new Ec({
        wasmUrl: n.wasmUrl,
        onLicenseExpired(G) {
          y === x && (j(), N++, Te.value = !1, T(), Ge.clear(), r.value = void 0, i.value = void 0, u.value = void 0, W?.disconnect(), E.value = G.message);
        }
      });
      P = _;
      try {
        const G = await _.open(k);
        if (y !== x) {
          _.destroy();
          return;
        }
        r.value = G, i.value = _, await gt(), s.value?.focus({ preventScroll: !0 }), l.value && (l.value.scrollTop = 0), a.value && (a.value.scrollTop = 0), Ce();
      } catch (G) {
        _.destroy(), y === x && (E.value = G instanceof Error ? G.message : String(G));
      } finally {
        P === _ && (P = void 0), y === x && (d.value = !1);
      }
    }
    function Ce() {
      W?.disconnect(), W = new ResizeObserver(() => {
        l.value && (oe.value = l.value.clientHeight, Q.value = l.value.clientWidth), a.value && (Se.value = a.value.clientHeight), Le.value && (rs.value = Le.value.clientHeight);
      }), l.value && W.observe(l.value), a.value && W.observe(a.value), Le.value && W.observe(Le.value);
    }
    function He() {
      I || (I = requestAnimationFrame(() => {
        if (I = 0, !l.value) return;
        fe.value = l.value.scrollTop;
        const k = Math.max(
          0,
          Cs(
            pe.value,
            fe.value + Math.min(oe.value * 0.35, 220)
          )
        );
        k !== b.value && (b.value = k, q.value = String(k + 1), At());
      }));
    }
    function At() {
      clearTimeout(se);
      const k = 800 - (performance.now() - ee);
      if (k > 0) {
        se = setTimeout(At, k + 20);
        return;
      }
      const y = a.value;
      if (!y || !w.value) return;
      const _ = b.value * pt;
      (_ < y.scrollTop || _ + pt > y.scrollTop + y.clientHeight) && (y.scrollTop = Math.max(0, _ - (y.clientHeight - pt) / 2), X.value = y.scrollTop);
    }
    function xn() {
      U || (U = requestAnimationFrame(() => {
        U = 0, a.value && (X.value = a.value.scrollTop);
      }));
    }
    function _n() {
      ee = performance.now(), clearTimeout(se), se = setTimeout(At, 850);
    }
    function _t(k) {
      !l.value || !Y.value || (k = Math.max(0, Math.min(Y.value - 1, k)), b.value = k, q.value = String(k + 1), l.value.scrollTop = pe.value[k] - 24, fe.value = l.value.scrollTop, At());
    }
    async function Mn(k) {
      const y = b.value, _ = pe.value[y] ?? 0, G = (pe.value[y + 1] ?? 1) - _, et = (fe.value - _) / G;
      k(), await gt(), l.value && (l.value.scrollTop = pe.value[y] + et * (pe.value[y + 1] - pe.value[y]), fe.value = l.value.scrollTop);
    }
    function os(k) {
      const y = B.value ? parseInt(_e.value) / 100 : L.value;
      Mn(() => {
        B.value = !1, L.value = Math.min(
          4,
          Math.max(0.25, Math.round((y + k) * 10) / 10)
        );
      });
    }
    function co(k, y) {
      if (!r.value) return;
      const _ = r.value.pages[k];
      if (_.width !== y.width || _.height !== y.height) {
        const G = b.value, et = pe.value[G], Pt = r.value.pages.slice();
        Pt[k] = { ..._, width: y.width, height: y.height }, r.value = { ...r.value, pages: Pt }, gt(() => {
          l.value && (l.value.scrollTop += pe.value[G] - et, fe.value = l.value.scrollTop);
        });
      }
    }
    async function uo() {
      const k = ++N;
      if (be.value = [], Ge.clear(), Ke.value = he.value.trim(), ht.value = 0, Le.value && (Le.value.scrollTop = 0), Be.value = 0, !he.value.trim() || !i.value) {
        Te.value = !1;
        return;
      }
      const y = he.value.trim(), _ = i.value;
      Te.value = !0, ae.value = 0;
      try {
        for (let G = 0; G < Y.value; G++) {
          const et = await o.schedule(
            `search:${G}`,
            20,
            () => k === N,
            () => _.page(G)
          );
          if (k !== N) return;
          const Pt = et.textRuns.map((Ut) => Ut.text).join(""), ls = Pt.indexOf(y);
          if (ls >= 0) {
            const Ut = Math.max(0, ls - 10), ai = Math.min(Pt.length, ls + y.length + 22);
            Ge.set(
              G,
              (Ut ? "…" : "") + Pt.slice(Ut, ai) + (ai < Pt.length ? "…" : "")
            ), be.value.push(G);
          }
          ae.value = G + 1, await new Promise((Ut) => setTimeout(Ut, 0));
        }
        be.value.length && _t(be.value[0]);
      } catch (G) {
        k === N && (E.value = G instanceof Error ? G.message : String(G));
      } finally {
        k === N && (Te.value = !1);
      }
    }
    function oi(k) {
      be.value.length && (Be.value = (Be.value + k + be.value.length) % be.value.length, _t(be.value[Be.value]), Le.value && (Le.value.scrollTop = Math.max(
        0,
        Be.value * Zt - Le.value.clientHeight / 2
      )));
    }
    function fo() {
      if (!u.value) return;
      const k = URL.createObjectURL(u.value), y = document.createElement("a");
      y.href = k, y.download = u.value.name, y.click(), setTimeout(() => URL.revokeObjectURL(k), 1e3);
    }
    function li(k) {
      const y = k.target.matches(
        "input, textarea, [contenteditable]"
      );
      if ((k.ctrlKey || k.metaKey) && k.key.toLowerCase() === "f" && r.value && (k.preventDefault(), g(!0), gt(
        () => s.value?.querySelector("#search-input")?.focus()
      )), k.key === "Escape") {
        if (H.value) {
          k.preventDefault(), H.value = !1, C.value?.querySelector(".zoom-value")?.focus();
          return;
        }
        xe.value = !1, N++, Te.value = !1;
      }
      !y && r.value && ["PageDown", "PageUp"].includes(k.key) && (k.preventDefault(), _t(b.value + (k.key === "PageDown" ? 1 : -1)));
    }
    return Or(() => {
      document.addEventListener("pointerdown", K), s.value?.addEventListener("keydown", li), s.value?.addEventListener("wheel", R, { passive: !1 }), Ce();
    }), si(() => {
      document.removeEventListener("pointerdown", K), j(), x++, P?.destroy(), i.value?.destroy(), W?.disconnect(), s.value?.removeEventListener("keydown", li), s.value?.removeEventListener("wheel", R), cancelAnimationFrame(M), cancelAnimationFrame(I), cancelAnimationFrame(U), clearTimeout(se), N++;
    }), t({ open: Kt, openUrl: A }), (k, y) => (ce(), ge("div", {
      ref_key: "root",
      ref: s,
      tabindex: "-1",
      class: "app-shell"
    }, [
      r.value && i.value ? (ce(), ge(ke, { key: 0 }, [
        D("div", Pc, [
          D("div", Oc, [
            D("button", {
              class: "icon-button",
              title: "显示或隐藏缩略图",
              "aria-pressed": w.value,
              onClick: y[0] || (y[0] = (_) => {
                w.value = !w.value, gt(Ce);
              })
            }, [
              te(ve(Wi), { size: 19 })
            ], 8, $c),
            y[20] || (y[20] = D("span", { class: "toolbar-divider" }, null, -1)),
            D("span", {
              class: "document-name",
              title: h.value
            }, Me(h.value), 9, Rc)
          ]),
          D("div", Ic, [
            D("button", {
              class: "icon-button",
              title: "上一页",
              disabled: b.value === 0,
              onClick: y[1] || (y[1] = (_) => _t(b.value - 1))
            }, [
              te(ve(Hi), { size: 17 })
            ], 8, Dc),
            D("form", {
              class: "page-number",
              onSubmit: y[3] || (y[3] = Ns((_) => _t(Number(q.value) - 1), ["prevent"]))
            }, [
              Yt(D("input", {
                "onUpdate:modelValue": y[2] || (y[2] = (_) => q.value = _),
                type: "number",
                min: "1",
                max: Y.value,
                "aria-label": "页码"
              }, null, 8, Fc), [
                [ji, q.value]
              ]),
              D("span", null, "/ " + Me(Y.value), 1)
            ], 32),
            D("button", {
              class: "icon-button",
              title: "下一页",
              disabled: b.value === Y.value - 1,
              onClick: y[4] || (y[4] = (_) => _t(b.value + 1))
            }, [
              te(ve(zi), { size: 17 })
            ], 8, Lc),
            y[22] || (y[22] = D("span", { class: "toolbar-divider" }, null, -1)),
            D("button", {
              class: "icon-button",
              title: "缩小",
              onClick: y[5] || (y[5] = (_) => os(-0.1))
            }, [
              te(ve(tc), { size: 16 })
            ]),
            D("div", {
              ref_key: "zoomControl",
              ref: C,
              class: "zoom-control",
              onKeydown: Z,
              onFocusout: y[8] || (y[8] = (_) => {
                C.value?.contains(_.relatedTarget) || (H.value = !1);
              })
            }, [
              D("button", {
                class: "zoom-value",
                title: "缩放比例",
                "aria-label": "缩放比例",
                "aria-haspopup": "menu",
                "aria-expanded": H.value,
                onClick: y[6] || (y[6] = (_) => H.value = !H.value)
              }, [
                Dn(Me(_e.value), 1),
                te(ve(Wa), { size: 12 })
              ], 8, jc),
              H.value ? (ce(), ge("div", Nc, [
                D("button", {
                  role: "menuitemradio",
                  "aria-checked": B.value,
                  onClick: y[7] || (y[7] = (_) => z())
                }, " 适合宽度 ", 8, Uc),
                y[21] || (y[21] = D("div", {
                  class: "zoom-menu-divider",
                  role: "separator"
                }, null, -1)),
                (ce(), ge(ke, null, Qt(F, (_) => D("button", {
                  key: _,
                  role: "menuitemradio",
                  "aria-checked": !B.value && Math.round(L.value * 100) === _,
                  onClick: (G) => z(_)
                }, Me(_) + "% ", 9, Hc)), 64))
              ])) : je("", !0)
            ], 544),
            D("button", {
              class: "icon-button",
              title: "放大",
              onClick: y[9] || (y[9] = (_) => os(0.1))
            }, [
              te(ve(ic), { size: 16 })
            ])
          ]),
          D("div", zc, [
            D("button", {
              class: "icon-button",
              title: "适合宽度",
              onClick: y[10] || (y[10] = (_) => Mn(() => B.value = !0))
            }, [
              te(ve(Qa), { size: 17 })
            ]),
            D("button", {
              class: "icon-button",
              title: "顺时针旋转",
              onClick: y[11] || (y[11] = (_) => Mn(() => ye.value = (ye.value + 90) % 360))
            }, [
              te(ve(io), { size: 17 })
            ]),
            D("button", {
              class: "icon-button",
              title: "保存原始文档",
              onClick: fo
            }, [
              te(ve(Ya), { size: 17 })
            ])
          ])
        ]),
        D("main", Wc, [
          Yt(D("aside", {
            class: Ct(["sidebar", { "is-search": xe.value }]),
            "aria-label": "缩略图"
          }, [
            D("div", qc, [
              D("div", Vc, [
                D("button", {
                  id: "thumbnail-tab",
                  role: "tab",
                  "aria-selected": !xe.value,
                  "aria-controls": "thumbnail-panel",
                  onClick: y[12] || (y[12] = (_) => g(!1))
                }, " 缩略图 ", 8, Bc),
                D("button", {
                  id: "search-tab",
                  role: "tab",
                  "aria-selected": xe.value,
                  "aria-controls": "search-panel",
                  title: "搜索文档 Ctrl F",
                  onClick: y[13] || (y[13] = (_) => g(!0))
                }, " 搜索 ", 8, Kc)
              ]),
              D("button", {
                class: "icon-button",
                title: "收起侧栏",
                onClick: y[14] || (y[14] = (_) => {
                  w.value = !1, gt(Ce);
                })
              }, [
                te(ve(Wi), { size: 15 })
              ])
            ]),
            Yt(D("div", {
              id: "thumbnail-panel",
              role: "tabpanel",
              "aria-labelledby": "thumbnail-tab",
              ref_key: "thumbList",
              ref: a,
              class: "thumbnail-scroll",
              onScrollPassive: xn,
              onWheelPassive: _n,
              onPointerdown: _n,
              onTouchstartPassive: _n,
              onKeydown: _n
            }, [
              D("div", {
                class: "thumbnail-track",
                style: ze({ height: `${Y.value * pt}px` })
              }, [
                (ce(!0), ge(ke, null, Qt(kt.value, (_) => (ce(), ge("button", {
                  key: _,
                  class: Ct(["thumbnail-item", { selected: b.value === _ }]),
                  style: ze({ transform: `translateY(${_ * pt}px)` }),
                  "aria-label": `第 ${_ + 1} 页`,
                  "aria-current": b.value === _ ? "page" : void 0,
                  onClick: (G) => _t(_)
                }, [
                  D("div", {
                    class: "thumbnail-paper",
                    style: ze({
                      width: `${Math.min(148, 176 * r.value.pages[_].width / r.value.pages[_].height)}px`,
                      aspectRatio: `${r.value.pages[_].width} / ${r.value.pages[_].height}`
                    })
                  }, [
                    te(Bi, {
                      client: i.value,
                      scheduler: ve(o),
                      index: _,
                      width: Math.min(
                        148,
                        176 * r.value.pages[_].width / r.value.pages[_].height
                      ),
                      rotation: 0,
                      thumbnail: "",
                      priority: 6 + Math.min(8, Math.abs(_ - b.value))
                    }, null, 8, ["client", "scheduler", "index", "width", "priority"]),
                    b.value === _ ? (ce(), ge("span", Yc, [
                      te(ve(Ha), { size: 10 })
                    ])) : je("", !0)
                  ], 4),
                  D("span", Jc, Me(_ + 1), 1)
                ], 14, Gc))), 128))
              ], 4)
            ], 544), [
              [ys, !xe.value]
            ]),
            Yt(D("div", Xc, [
              D("form", {
                onSubmit: Ns(uo, ["prevent"])
              }, [
                D("div", Zc, [
                  te(ve(lc), { size: 15 }),
                  Yt(D("input", {
                    id: "search-input",
                    "onUpdate:modelValue": y[15] || (y[15] = (_) => he.value = _),
                    placeholder: "搜索文档内容…",
                    "aria-label": "搜索内容"
                  }, null, 512), [
                    [ji, he.value]
                  ]),
                  he.value ? (ce(), ge("button", {
                    key: 0,
                    class: "icon-button",
                    type: "button",
                    title: "清空搜索",
                    onClick: T
                  }, [
                    te(ve(Ms), { size: 14 })
                  ])) : je("", !0)
                ]),
                y[23] || (y[23] = D("button", {
                  class: "search-submit",
                  type: "submit",
                  title: "开始搜索",
                  "aria-label": "开始搜索"
                }, " 搜索 ", -1))
              ], 32),
              D("div", Qc, [
                D("span", null, Me(Te.value ? "正在索引 " + ae.value + " / " + Y.value : ae.value ? be.value.length + " 页匹配" : "输入关键词开始搜索"), 1),
                D("span", eu, Me(be.value.length ? Be.value + 1 : 0) + " / " + Me(be.value.length), 1),
                D("button", {
                  class: "icon-button",
                  title: "上一个匹配页",
                  disabled: !be.value.length,
                  onClick: y[16] || (y[16] = (_) => oi(-1))
                }, [
                  te(ve(Hi), { size: 16 })
                ], 8, tu),
                D("button", {
                  class: "icon-button",
                  title: "下一个匹配页",
                  disabled: !be.value.length,
                  onClick: y[17] || (y[17] = (_) => oi(1))
                }, [
                  te(ve(zi), { size: 16 })
                ], 8, nu)
              ]),
              D("div", {
                ref_key: "resultList",
                ref: Le,
                class: "search-results",
                onScrollPassive: y[18] || (y[18] = (_) => ht.value = _.target.scrollTop)
              }, [
                D("div", {
                  class: "search-result-track",
                  style: ze({ height: be.value.length * Zt + "px" })
                }, [
                  (ce(!0), ge(ke, null, Qt(c.value, (_) => (ce(), ge("button", {
                    key: _.page,
                    class: Ct(["search-result", { selected: Be.value === _.position }]),
                    style: ze({
                      transform: "translateY(" + _.position * Zt + "px)"
                    }),
                    "aria-label": "搜索结果第 " + (_.page + 1) + " 页",
                    onClick: (G) => S(_.position)
                  }, [
                    D("span", iu, "第 " + Me(_.page + 1) + " 页", 1),
                    D("span", ru, [
                      Dn(Me(f(_.page)[0]), 1),
                      D("mark", null, Me(f(_.page)[1]), 1),
                      Dn(Me(f(_.page)[2]), 1)
                    ])
                  ], 14, su))), 128))
                ], 4),
                !Te.value && ae.value && !be.value.length ? (ce(), ge("p", ou, " 未找到匹配内容 ")) : je("", !0)
              ], 544)
            ], 512), [
              [ys, xe.value]
            ])
          ], 2), [
            [ys, w.value]
          ]),
          D("section", {
            ref_key: "reader",
            ref: l,
            class: "reader-scroll",
            "aria-label": "文档阅读区域",
            tabindex: "0",
            onScrollPassive: He
          }, [
            D("div", {
              class: "document-track",
              style: ze({
                height: `${pe.value[Y.value]}px`,
                minWidth: `${de.value + 32}px`
              })
            }, [
              (ce(!0), ge(ke, null, Qt(Ue.value, (_) => (ce(), ge("article", {
                key: _,
                class: "paper-slot",
                "aria-label": `正文第 ${_ + 1} 页`,
                style: ze({
                  top: `${pe.value[_]}px`,
                  width: `${de.value}px`,
                  height: `${pe.value[_ + 1] - pe.value[_] - 36}px`
                })
              }, [
                te(Bi, {
                  client: i.value,
                  scheduler: ve(o),
                  index: _,
                  width: de.value,
                  rotation: ye.value,
                  priority: _ === b.value ? 0 : 2,
                  query: he.value,
                  onReady: co
                }, null, 8, ["client", "scheduler", "index", "width", "rotation", "priority", "query"])
              ], 12, lu))), 128))
            ], 4)
          ], 544)
        ]),
        D("footer", au, [
          D("span", null, "第 " + Me(b.value + 1) + " 页，共 " + Me(Y.value) + " 页", 1)
        ])
      ], 64)) : (ce(), ge("main", cu, [
        y[24] || (y[24] = D("div", {
          class: "loading-art",
          "aria-hidden": "true"
        }, [
          D("span", { class: "loading-halo" }),
          D("span", { class: "loading-orbit" })
        ], -1)),
        D("p", uu, Me(m.value ? v.value : d.value ? "正在解析文档…" : "文档加载中"), 1),
        y[25] || (y[25] = D("div", {
          class: "loading-dots",
          "aria-hidden": "true"
        }, [
          D("i"),
          D("i"),
          D("i")
        ], -1)),
        m.value ? (ce(), ge("button", {
          key: 0,
          class: "loading-cancel",
          onClick: j
        }, " 取消下载 ")) : je("", !0)
      ])),
      m.value && r.value ? (ce(), ge("div", fu, [
        te(ve(Xa), {
          size: 18,
          class: "spin"
        }),
        D("span", null, Me(v.value), 1),
        D("button", {
          class: "icon-button",
          title: "取消下载",
          onClick: j
        }, [
          te(ve(Ms), { size: 16 })
        ])
      ])) : je("", !0),
      E.value ? (ce(), ge("div", hu, [
        te(ve(cc), { size: 18 }),
        D("span", null, Me(E.value), 1),
        D("button", {
          class: "icon-button",
          title: "关闭错误提示",
          onClick: y[19] || (y[19] = (_) => E.value = "")
        }, [
          te(ve(Ms), { size: 16 })
        ])
      ])) : je("", !0)
    ], 512));
  }
}), pu = "" + new URL("usdoc.ofd.viewer.css", import.meta.url).href;
function gu(e, t = {}) {
  const n = document.createElement("usdoc-ofd-viewer");
  n.style.cssText = "display:block;width:100%;height:100%";
  const s = n.attachShadow({ mode: "open" }), i = document.createElement("link");
  i.rel = "stylesheet", i.href = t.cssUrl ? new URL(t.cssUrl, document.baseURI).href : pu;
  const r = document.createElement("div");
  r.style.height = "100%", s.append(i, r), e.append(n);
  const o = Oa(du, {
    showThumbnails: t.showThumbnails ?? !0,
    wasmUrl: t.wasmUrl ? new URL(t.wasmUrl, document.baseURI).href : void 0
  }), l = o.mount(r);
  let a = !1;
  return {
    open(h) {
      return a ? Promise.reject(new Error("预览组件已销毁")) : l.open(h);
    },
    openUrl(h) {
      return a ? Promise.reject(new Error("预览组件已销毁")) : l.openUrl(h);
    },
    destroy() {
      a || (a = !0, o.unmount(), n.remove());
    }
  };
}
const mu = Object.freeze({ ofd: Object.freeze({ createViewer: gu }) });
export {
  gu as createViewer,
  mu as usdoc
};
