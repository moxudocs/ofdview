class m {
  static __wrap(e) {
    const n = Object.create(m.prototype);
    return n.__wbg_ptr = e, k.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const e = this.__wbg_ptr;
    return this.__wbg_ptr = 0, k.unregister(this), e;
  }
  free() {
    const e = this.__destroy_into_raw();
    i.__wbg_ofddocument_free(e, 0);
  }
  /**
   * @returns {any}
   */
  info() {
    try {
      const o = i.__wbindgen_add_to_stack_pointer(-16);
      i.ofddocument_info(o, this.__wbg_ptr);
      var e = _().getInt32(o + 0, !0), n = _().getInt32(o + 4, !0), r = _().getInt32(o + 8, !0);
      if (r)
        throw d(n);
      return d(e);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {Uint8Array} bytes
   */
  constructor(e) {
    try {
      const s = i.__wbindgen_add_to_stack_pointer(-16), c = B(e, i.__wbindgen_export), a = p;
      i.ofddocument_new(s, c, a);
      var n = _().getInt32(s + 0, !0), r = _().getInt32(s + 4, !0), o = _().getInt32(s + 8, !0);
      if (o)
        throw d(r);
      return this.__wbg_ptr = n, k.register(this, this.__wbg_ptr, this), this;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * 按需读取浏览器文件，500 GB 文件也无需分配与文件等大的 WASM 内存。
   * @param {number} length
   * @param {Function} read_range
   * @returns {OfdDocument}
   */
  static openFile(e, n) {
    try {
      const c = i.__wbindgen_add_to_stack_pointer(-16);
      i.ofddocument_openFile(c, e, f(n));
      var r = _().getInt32(c + 0, !0), o = _().getInt32(c + 4, !0), s = _().getInt32(c + 8, !0);
      if (s)
        throw d(o);
      return m.__wrap(r);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {number} index
   * @returns {any}
   */
  page(e) {
    try {
      const s = i.__wbindgen_add_to_stack_pointer(-16);
      i.ofddocument_page(s, this.__wbg_ptr, e);
      var n = _().getInt32(s + 0, !0), r = _().getInt32(s + 4, !0), o = _().getInt32(s + 8, !0);
      if (o)
        throw d(r);
      return d(n);
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
   * @param {string} path
   * @returns {Uint8Array}
   */
  resource(e) {
    try {
      const a = i.__wbindgen_add_to_stack_pointer(-16), b = F(e, i.__wbindgen_export, i.__wbindgen_export2), U = p;
      i.ofddocument_resource(a, this.__wbg_ptr, b, U);
      var n = _().getInt32(a + 0, !0), r = _().getInt32(a + 4, !0), o = _().getInt32(a + 8, !0), s = _().getInt32(a + 12, !0);
      if (s)
        throw d(o);
      var c = L(n, r).slice();
      return i.__wbindgen_export4(n, r * 1, 1), c;
    } finally {
      i.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
Symbol.dispose && (m.prototype[Symbol.dispose] = m.prototype.free);
function v(t) {
  try {
    const o = i.__wbindgen_add_to_stack_pointer(-16);
    i.checkLicense(o, !j(t), j(t) ? 0 : t);
    var e = _().getFloat64(o + 0, !0), n = _().getInt32(o + 8, !0), r = _().getInt32(o + 12, !0);
    if (r)
      throw d(n);
    return e;
  } finally {
    i.__wbindgen_add_to_stack_pointer(16);
  }
}
function D() {
  return {
    __proto__: null,
    "./usdoc_ofd_bg.js": {
      __proto__: null,
      __wbg_Error_30c8987f7c2ed4e2: function(e, n) {
        const r = Error(y(e, n));
        return f(r);
      },
      __wbg_String_8564e559799eccda: function(e, n) {
        const r = String(u(n)), o = F(r, i.__wbindgen_export, i.__wbindgen_export2), s = p;
        _().setInt32(e + 4, s, !0), _().setInt32(e + 0, o, !0);
      },
      __wbg___wbindgen_debug_string_4687d8d8c2017d52: function(e, n) {
        const r = x(u(n)), o = F(r, i.__wbindgen_export, i.__wbindgen_export2), s = p;
        _().setInt32(e + 4, s, !0), _().setInt32(e + 0, o, !0);
      },
      __wbg___wbindgen_is_string_90b56bc79aad6f6c: function(e) {
        return typeof u(e) == "string";
      },
      __wbg___wbindgen_throw_41e9ee4f547fc59a: function(e, n) {
        throw new Error(y(e, n));
      },
      __wbg_call_1875a20c43a36133: function() {
        return R(function(e, n, r, o) {
          const s = u(e).call(u(n), u(r), u(o));
          return f(s);
        }, arguments);
      },
      __wbg_info_999e4741135a9d1a: function() {
        return R(function(e, n) {
          console.info(y(e, n));
        }, arguments);
      },
      __wbg_instanceof_Uint8Array_828cef2aaacafc31: function(e) {
        let n;
        try {
          n = u(e) instanceof Uint8Array;
        } catch {
          n = !1;
        }
        return n;
      },
      __wbg_length_7f3c00c40364105e: function(e) {
        return u(e).length;
      },
      __wbg_new_28744009d011f847: function() {
        return f(/* @__PURE__ */ new Map());
      },
      __wbg_new_343a093a3c2ffb4e: function(e, n) {
        const r = new Error(y(e, n));
        return f(r);
      },
      __wbg_new_617a8cdb8bb1130e: function() {
        const e = new Object();
        return f(e);
      },
      __wbg_new_ee2291f50781bf1d: function() {
        const e = new Array();
        return f(e);
      },
      __wbg_now_aa4ccb83129e9e55: function() {
        return Date.now();
      },
      __wbg_prototypesetcall_bc27214492979395: function(e, n, r) {
        Uint8Array.prototype.set.call(L(e, n), u(r));
      },
      __wbg_set_6ae97e73113c4f0b: function(e, n, r) {
        const o = u(e).set(u(n), u(r));
        return f(o);
      },
      __wbg_set_6be42768c690e380: function(e, n, r) {
        u(e)[d(n)] = d(r);
      },
      __wbg_set_bea140a88be9b277: function(e, n, r) {
        u(e)[n >>> 0] = d(r);
      },
      __wbg_set_name_2c630595dc90a7aa: function(e, n, r) {
        u(e).name = y(n, r);
      },
      __wbindgen_generic_0000000000000001: function(e) {
        return f(e);
      },
      __wbindgen_generic_0000000000000002: function(e, n) {
        const r = y(e, n);
        return f(r);
      },
      __wbindgen_generic_0000000000000003: function(e) {
        const n = BigInt.asUintN(64, e);
        return f(n);
      },
      __wbindgen_object_clone_ref: function(e) {
        const n = u(e);
        return f(n);
      },
      __wbindgen_object_drop_ref: function(e) {
        d(e);
      }
    }
  };
}
const k = typeof FinalizationRegistry > "u" ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t) => i.__wbg_ofddocument_free(t, 1));
function f(t) {
  I === w.length && w.push(w.length + 1);
  const e = I;
  return I = w[e], w[e] = t, e;
}
function x(t) {
  const e = typeof t;
  if (e == "number" || e == "boolean" || t == null)
    return `${t}`;
  if (e == "string")
    return `"${t}"`;
  if (e == "symbol") {
    const o = t.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (e == "function") {
    const o = t.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(t)) {
    const o = t.length;
    let s = "[";
    o > 0 && (s += x(t[0]));
    for (let c = 1; c < o; c++)
      s += ", " + x(t[c]);
    return s += "]", s;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(t));
  let r;
  if (n && n.length > 1)
    r = n[1];
  else
    return toString.call(t);
  if (r == "Object")
    try {
      return "Object(" + JSON.stringify(t) + ")";
    } catch {
      return "Object";
    }
  return t instanceof Error ? `${t.name}: ${t.message}
${t.stack}` : r;
}
function $(t) {
  t < 1028 || (w[t] = I, I = t);
}
function L(t, e) {
  return t = t >>> 0, h().subarray(t / 1, t / 1 + e);
}
let l = null;
function _() {
  return (l === null || l.buffer.detached === !0 || l.buffer.detached === void 0 && l.buffer !== i.memory.buffer) && (l = new DataView(i.memory.buffer)), l;
}
function y(t, e) {
  return C(t >>> 0, e);
}
let E = null;
function h() {
  return (E === null || E.byteLength === 0) && (E = new Uint8Array(i.memory.buffer)), E;
}
function u(t) {
  return w[t];
}
function R(t, e) {
  try {
    return t.apply(this, e);
  } catch (n) {
    i.__wbindgen_export3(f(n));
  }
}
let w = new Array(1024).fill(void 0);
w.push(void 0, null, !0, !1);
let I = w.length;
function j(t) {
  return t == null;
}
function B(t, e) {
  const n = e(t.length * 1, 1) >>> 0;
  return h().set(t, n / 1), p = t.length, n;
}
function F(t, e, n) {
  if (n === void 0) {
    const a = A.encode(t), b = e(a.length, 1) >>> 0;
    return h().subarray(b, b + a.length).set(a), p = a.length, b;
  }
  let r = t.length, o = e(r, 1) >>> 0;
  const s = h();
  let c = 0;
  for (; c < r; c++) {
    const a = t.charCodeAt(c);
    if (a > 127) break;
    s[o + c] = a;
  }
  if (c !== r) {
    c !== 0 && (t = t.slice(c)), o = n(o, r, r = c + t.length * 3, 1) >>> 0;
    const a = h().subarray(o + c, o + r), b = A.encodeInto(t, a);
    c += b.written, o = n(o, r, c, 1) >>> 0;
  }
  return p = c, o;
}
function d(t) {
  const e = u(t);
  return $(t), e;
}
let S = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 });
S.decode();
const N = 2146435072;
let O = 0;
function C(t, e) {
  return O += e, O >= N && (S = new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 }), S.decode(), O = e), S.decode(h().subarray(t, t + e));
}
const A = new TextEncoder();
"encodeInto" in A || (A.encodeInto = function(t, e) {
  const n = A.encode(t);
  return e.set(n), {
    read: t.length,
    written: n.length
  };
});
let p = 0, i;
function z(t, e) {
  return i = t.exports, l = null, E = null, i.__wbindgen_start(), i;
}
async function P(t, e) {
  if (typeof Response == "function" && t instanceof Response) {
    if (!t.ok)
      throw new Error(`failed to fetch Wasm: ${t.status} ${t.statusText} fetching '${t.url}'`);
    if (typeof WebAssembly.instantiateStreaming == "function")
      try {
        return await WebAssembly.instantiateStreaming(t, e);
      } catch (o) {
        if (n(t.type) && t.headers.get("Content-Type") !== "application/wasm")
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
        else
          throw o;
      }
    const r = await t.arrayBuffer();
    return await WebAssembly.instantiate(r, e);
  } else {
    const r = await WebAssembly.instantiate(t, e);
    return r instanceof WebAssembly.Instance ? { instance: r, module: t } : r;
  }
  function n(r) {
    switch (r) {
      case "basic":
      case "cors":
      case "default":
        return !0;
    }
    return !1;
  }
}
async function V(t) {
  if (i !== void 0) return i;
  t !== void 0 && (Object.getPrototypeOf(t) === Object.prototype ? { module_or_path: t } = t : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), t === void 0 && (t = new URL(
    /* @vite-ignore */
    "usdoc.ofd.core.wasm",
    import.meta.url
  ));
  const e = D();
  (typeof t == "string" || typeof Request == "function" && t instanceof Request || typeof URL == "function" && t instanceof URL) && (t = fetch(t));
  const { instance: n, module: r } = await P(await t, e);
  return z(n);
}
const X = 500 * 1e3 ** 3, q = "文件超过 500 GB，请联系管理员";
function G(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("文件大小无效");
  if (t > X) throw new Error(q);
  if (!t) throw new Error("文件为空");
}
const M = self;
let g, T, W = Promise.resolve();
M.onmessage = (t) => {
  if (t.data.type === "configure") {
    const n = t.data.wasmUrl;
    T = V(n ? { module_or_path: n } : void 0);
    return;
  }
  const e = t.data;
  W = W.then(async () => {
    const n = { id: e.id }, r = [];
    try {
      if (await T, e.version !== 1) throw new Error("不兼容的 usdoc.ofd 协议版本");
      const o = e.operation === "close" ? 0 : v(e.observedNow);
      switch (e.operation) {
        case "license":
          n.result = o;
          break;
        case "open": {
          g?.free(), g = void 0;
          const s = e.payload;
          G(s.size);
          const c = new FileReaderSync();
          g = m.openFile(
            s.size,
            (a, b) => new Uint8Array(
              c.readAsArrayBuffer(s.slice(a, a + b))
            )
          ), n.result = g.info();
          break;
        }
        case "page":
          if (!g) throw new Error("文档已关闭");
          n.result = g.page(e.payload);
          break;
        case "resource": {
          if (!g) throw new Error("文档已关闭");
          const s = g.resource(e.payload);
          n.result = s.buffer, r.push(s.buffer);
          break;
        }
        case "close":
          g?.free(), g = void 0, n.result = null;
          break;
      }
    } catch (o) {
      n.error = o instanceof Error ? o.message : String(o), o instanceof Error && o.name === "LICENSE_EXPIRED" && (n.errorCode = "LICENSE_EXPIRED");
    }
    M.postMessage(n, r);
  });
};
