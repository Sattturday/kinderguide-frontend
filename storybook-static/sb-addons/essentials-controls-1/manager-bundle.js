try {
  const Hy = Object.create;
  const ga = Object.defineProperty;
  const zy = Object.getOwnPropertyDescriptor;
  const Wy = Object.getOwnPropertyNames;
  const Gy = Object.getPrototypeOf;
  const Vy = Object.prototype.hasOwnProperty;
  const dr = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error(`Dynamic require of "${e}" is not supported`);
  });
  const Ze = (e, t) => () => (e && (t = e((e = 0))), t);
  const S = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  const mu = (e, t) => {
    for (const r in t) ga(e, r, { get: t[r], enumerable: !0 });
  };
  const Ky = (e, t, r, n) => {
    if ((t && typeof t === 'object') || typeof t === 'function')
      for (const a of Wy(t))
        !Vy.call(e, a) &&
          a !== r &&
          ga(e, a, {
            get: () => t[a],
            enumerable: !(n = zy(t, a)) || n.enumerable,
          });
    return e;
  };
  const fe = (e, t, r) => (
    (r = e != null ? Hy(Gy(e)) : {}),
    Ky(
      t || !e || !e.__esModule
        ? ga(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  const l = Ze(() => {});
  const c = Ze(() => {});
  const d = Ze(() => {});
  let h;
  let Jr;
  let et;
  let gu;
  let SI;
  let wI;
  let BI;
  let yu;
  let TI;
  let me;
  let pr;
  let ba;
  let _I;
  let OI;
  let RI;
  let PI;
  let Eu;
  let II;
  let ge;
  let qe;
  let kI;
  let he;
  let NI;
  let bu;
  let ot;
  let MI;
  let Se;
  let ne;
  let LI;
  const Ot = Ze(() => {
    l();
    c();
    d();
    (h = __REACT__),
      ({
        Children: Jr,
        Component: et,
        Fragment: gu,
        Profiler: SI,
        PureComponent: wI,
        StrictMode: BI,
        Suspense: yu,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: TI,
        cloneElement: me,
        createContext: pr,
        createElement: ba,
        createFactory: _I,
        createRef: OI,
        forwardRef: RI,
        isValidElement: PI,
        lazy: Eu,
        memo: II,
        useCallback: ge,
        useContext: qe,
        useDebugValue: kI,
        useEffect: he,
        useImperativeHandle: NI,
        useLayoutEffect: bu,
        useMemo: ot,
        useReducer: MI,
        useRef: Se,
        useState: ne,
        version: LI,
      } = __REACT__);
  });
  const Fu = {};
  mu(Fu, {
    A: () => Jy,
    ActionBar: () => Da,
    AddonPanel: () => Ca,
    Badge: () => xa,
    Bar: () => Qy,
    Blockquote: () => Zy,
    Button: () => e2,
    ClipboardCode: () => t2,
    Code: () => Fa,
    DL: () => r2,
    Div: () => n2,
    DocumentWrapper: () => a2,
    ErrorFormatter: () => Sa,
    FlexBar: () => wa,
    Form: () => Re,
    H1: () => o2,
    H2: () => Ba,
    H3: () => Ta,
    H4: () => i2,
    H5: () => u2,
    H6: () => s2,
    HR: () => l2,
    IconButton: () => yt,
    IconButtonSkeleton: () => _a,
    Icons: () => Oe,
    Img: () => c2,
    LI: () => d2,
    Link: () => Et,
    ListItem: () => p2,
    Loader: () => Oa,
    OL: () => f2,
    P: () => h2,
    Placeholder: () => m2,
    Pre: () => g2,
    ResetWrapper: () => Ra,
    ScrollArea: () => y2,
    Separator: () => E2,
    Spaced: () => Pa,
    Span: () => b2,
    StorybookIcon: () => A2,
    StorybookLogo: () => v2,
    Symbols: () => D2,
    SyntaxHighlighter: () => Qr,
    TT: () => C2,
    TabBar: () => x2,
    TabButton: () => F2,
    TabWrapper: () => S2,
    Table: () => w2,
    Tabs: () => B2,
    TabsState: () => Ia,
    TooltipLinkList: () => T2,
    TooltipMessage: () => _2,
    TooltipNote: () => ka,
    UL: () => O2,
    WithTooltip: () => Zr,
    WithTooltipPure: () => Na,
    Zoom: () => Ma,
    codeCommon: () => Rt,
    components: () => La,
    createCopyToClipboardFunction: () => R2,
    default: () => Xy,
    getStoryHref: () => ja,
    icons: () => P2,
    interleaveSeparators: () => I2,
    nameSpaceClassNames: () => qa,
    resetComponents: () => k2,
    withReset: () => Pt,
  });
  let Xy;
  let Jy;
  let Da;
  let Ca;
  let xa;
  let Qy;
  let Zy;
  let e2;
  let t2;
  let Fa;
  let r2;
  let n2;
  let a2;
  let Sa;
  let wa;
  let Re;
  let o2;
  let Ba;
  let Ta;
  let i2;
  let u2;
  let s2;
  let l2;
  let yt;
  let _a;
  let Oe;
  let c2;
  let d2;
  let Et;
  let p2;
  let Oa;
  let f2;
  let h2;
  let m2;
  let g2;
  let Ra;
  let y2;
  let E2;
  let Pa;
  let b2;
  let A2;
  let v2;
  let D2;
  let Qr;
  let C2;
  let x2;
  let F2;
  let S2;
  let w2;
  let B2;
  let Ia;
  let T2;
  let _2;
  let ka;
  let O2;
  let Zr;
  let Na;
  let Ma;
  let Rt;
  let La;
  let R2;
  let ja;
  let P2;
  let I2;
  let qa;
  let k2;
  let Pt;
  const fr = Ze(() => {
    l();
    c();
    d();
    (Xy = __STORYBOOKCOMPONENTS__),
      ({
        A: Jy,
        ActionBar: Da,
        AddonPanel: Ca,
        Badge: xa,
        Bar: Qy,
        Blockquote: Zy,
        Button: e2,
        ClipboardCode: t2,
        Code: Fa,
        DL: r2,
        Div: n2,
        DocumentWrapper: a2,
        ErrorFormatter: Sa,
        FlexBar: wa,
        Form: Re,
        H1: o2,
        H2: Ba,
        H3: Ta,
        H4: i2,
        H5: u2,
        H6: s2,
        HR: l2,
        IconButton: yt,
        IconButtonSkeleton: _a,
        Icons: Oe,
        Img: c2,
        LI: d2,
        Link: Et,
        ListItem: p2,
        Loader: Oa,
        OL: f2,
        P: h2,
        Placeholder: m2,
        Pre: g2,
        ResetWrapper: Ra,
        ScrollArea: y2,
        Separator: E2,
        Spaced: Pa,
        Span: b2,
        StorybookIcon: A2,
        StorybookLogo: v2,
        Symbols: D2,
        SyntaxHighlighter: Qr,
        TT: C2,
        TabBar: x2,
        TabButton: F2,
        TabWrapper: S2,
        Table: w2,
        Tabs: B2,
        TabsState: Ia,
        TooltipLinkList: T2,
        TooltipMessage: _2,
        TooltipNote: ka,
        UL: O2,
        WithTooltip: Zr,
        WithTooltipPure: Na,
        Zoom: Ma,
        codeCommon: Rt,
        components: La,
        createCopyToClipboardFunction: R2,
        getStoryHref: ja,
        icons: P2,
        interleaveSeparators: I2,
        nameSpaceClassNames: qa,
        resetComponents: k2,
        withReset: Pt,
      } = __STORYBOOKCOMPONENTS__);
  });
  let Pe;
  let hr;
  const $a = Ze(() => {
    l();
    c();
    d();
    (Pe = (e) => `control-${e.replace(/\s+/g, '-')}`),
      (hr = (e) => `set-${e.replace(/\s+/g, '-')}`);
  });
  let Ck;
  let xk;
  let Fk;
  let Sk;
  let Su;
  let wk;
  let Bk;
  let wu;
  let Tk;
  let _k;
  let Ok;
  let Rk;
  let Pk;
  let Ik;
  let N2;
  let Bu;
  let kk;
  let Nk;
  let Mk;
  let Lk;
  let j;
  let Ua;
  let jk;
  let Tu;
  let qk;
  const Ha = Ze(() => {
    l();
    c();
    d();
    (Ck = __STORYBOOKTHEMING__),
      ({
        CacheProvider: xk,
        ClassNames: Fk,
        Global: Sk,
        ThemeProvider: Su,
        background: wk,
        color: Bk,
        convert: wu,
        create: Tk,
        createCache: _k,
        createGlobal: Ok,
        createReset: Rk,
        css: Pk,
        darken: Ik,
        ensure: N2,
        ignoreSsrWarning: Bu,
        isPropValid: kk,
        jsx: Nk,
        keyframes: Mk,
        lighten: Lk,
        styled: j,
        themes: Ua,
        typography: jk,
        useTheme: Tu,
        withTheme: qk,
      } = __STORYBOOKTHEMING__);
  });
  const Za = S((sN, Nu) => {
    l();
    c();
    d();
    function v1(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e);
      return a;
    }
    Nu.exports = v1;
  });
  const Lu = S((pN, Mu) => {
    l();
    c();
    d();
    function D1() {
      (this.__data__ = []), (this.size = 0);
    }
    Mu.exports = D1;
  });
  const tn = S((gN, ju) => {
    l();
    c();
    d();
    function C1(e, t) {
      return e === t || (e !== e && t !== t);
    }
    ju.exports = C1;
  });
  const br = S((AN, qu) => {
    l();
    c();
    d();
    const x1 = tn();
    function F1(e, t) {
      for (let r = e.length; r--; ) if (x1(e[r][0], t)) return r;
      return -1;
    }
    qu.exports = F1;
  });
  const Uu = S((xN, $u) => {
    l();
    c();
    d();
    const S1 = br();
    const w1 = Array.prototype;
    const B1 = w1.splice;
    function T1(e) {
      const t = this.__data__;
      const r = S1(t, e);
      if (r < 0) return !1;
      const n = t.length - 1;
      return r == n ? t.pop() : B1.call(t, r, 1), --this.size, !0;
    }
    $u.exports = T1;
  });
  const zu = S((BN, Hu) => {
    l();
    c();
    d();
    const _1 = br();
    function O1(e) {
      const t = this.__data__;
      const r = _1(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    Hu.exports = O1;
  });
  const Gu = S((RN, Wu) => {
    l();
    c();
    d();
    const R1 = br();
    function P1(e) {
      return R1(this.__data__, e) > -1;
    }
    Wu.exports = P1;
  });
  const Ku = S((NN, Vu) => {
    l();
    c();
    d();
    const I1 = br();
    function k1(e, t) {
      const r = this.__data__;
      const n = I1(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    Vu.exports = k1;
  });
  const Ar = S((qN, Yu) => {
    l();
    c();
    d();
    const N1 = Lu();
    const M1 = Uu();
    const L1 = zu();
    const j1 = Gu();
    const q1 = Ku();
    function Mt(e) {
      let t = -1;
      const r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        const n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Mt.prototype.clear = N1;
    Mt.prototype.delete = M1;
    Mt.prototype.get = L1;
    Mt.prototype.has = j1;
    Mt.prototype.set = q1;
    Yu.exports = Mt;
  });
  const Ju = S((zN, Xu) => {
    l();
    c();
    d();
    const $1 = Ar();
    function U1() {
      (this.__data__ = new $1()), (this.size = 0);
    }
    Xu.exports = U1;
  });
  const Zu = S((KN, Qu) => {
    l();
    c();
    d();
    function H1(e) {
      const t = this.__data__;
      const r = t.delete(e);
      return (this.size = t.size), r;
    }
    Qu.exports = H1;
  });
  const ts = S((QN, es) => {
    l();
    c();
    d();
    function z1(e) {
      return this.__data__.get(e);
    }
    es.exports = z1;
  });
  const ns = S((rM, rs) => {
    l();
    c();
    d();
    function W1(e) {
      return this.__data__.has(e);
    }
    rs.exports = W1;
  });
  const eo = S((iM, as) => {
    l();
    c();
    d();
    const G1 =
      typeof window === 'object' &&
      window &&
      window.Object === Object &&
      window;
    as.exports = G1;
  });
  const $e = S((cM, os) => {
    l();
    c();
    d();
    const V1 = eo();
    const K1 =
      typeof self === 'object' && self && self.Object === Object && self;
    const Y1 = V1 || K1 || Function('return this')();
    os.exports = Y1;
  });
  const At = S((hM, is) => {
    l();
    c();
    d();
    const X1 = $e();
    const J1 = X1.Symbol;
    is.exports = J1;
  });
  const cs = S((EM, ls) => {
    l();
    c();
    d();
    const us = At();
    const ss = Object.prototype;
    const Q1 = ss.hasOwnProperty;
    const Z1 = ss.toString;
    const vr = us ? us.toStringTag : void 0;
    function eE(e) {
      const t = Q1.call(e, vr);
      const r = e[vr];
      try {
        e[vr] = void 0;
        var n = !0;
      } catch {}
      const a = Z1.call(e);
      return n && (t ? (e[vr] = r) : delete e[vr]), a;
    }
    ls.exports = eE;
  });
  const ps = S((DM, ds) => {
    l();
    c();
    d();
    const tE = Object.prototype;
    const rE = tE.toString;
    function nE(e) {
      return rE.call(e);
    }
    ds.exports = nE;
  });
  const vt = S((SM, ms) => {
    l();
    c();
    d();
    const fs = At();
    const aE = cs();
    const oE = ps();
    const iE = '[object Null]';
    const uE = '[object Undefined]';
    const hs = fs ? fs.toStringTag : void 0;
    function sE(e) {
      return e == null
        ? e === void 0
          ? uE
          : iE
        : hs && hs in Object(e)
        ? aE(e)
        : oE(e);
    }
    ms.exports = sE;
  });
  const We = S((_M, gs) => {
    l();
    c();
    d();
    function lE(e) {
      const t = typeof e;
      return e != null && (t == 'object' || t == 'function');
    }
    gs.exports = lE;
  });
  const to = S((IM, ys) => {
    l();
    c();
    d();
    const cE = vt();
    const dE = We();
    const pE = '[object AsyncFunction]';
    const fE = '[object Function]';
    const hE = '[object GeneratorFunction]';
    const mE = '[object Proxy]';
    function gE(e) {
      if (!dE(e)) return !1;
      const t = cE(e);
      return t == fE || t == hE || t == pE || t == mE;
    }
    ys.exports = gE;
  });
  const bs = S((LM, Es) => {
    l();
    c();
    d();
    const yE = $e();
    const EE = yE['__core-js_shared__'];
    Es.exports = EE;
  });
  const Ds = S((UM, vs) => {
    l();
    c();
    d();
    const ro = bs();
    const As = (function () {
      const e = /[^.]+$/.exec((ro && ro.keys && ro.keys.IE_PROTO) || '');
      return e ? `Symbol(src)_1.${e}` : '';
    })();
    function bE(e) {
      return !!As && As in e;
    }
    vs.exports = bE;
  });
  const no = S((GM, Cs) => {
    l();
    c();
    d();
    const AE = Function.prototype;
    const vE = AE.toString;
    function DE(e) {
      if (e != null) {
        try {
          return vE.call(e);
        } catch {}
        try {
          return `${e}`;
        } catch {}
      }
      return '';
    }
    Cs.exports = DE;
  });
  const Fs = S((XM, xs) => {
    l();
    c();
    d();
    const CE = to();
    const xE = Ds();
    const FE = We();
    const SE = no();
    const wE = /[\\^$.*+?()[\]{}|]/g;
    const BE = /^\[object .+?Constructor\]$/;
    const TE = Function.prototype;
    const _E = Object.prototype;
    const OE = TE.toString;
    const RE = _E.hasOwnProperty;
    const PE = RegExp(
      `^${OE.call(RE)
        .replace(wE, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        )}$`
    );
    function IE(e) {
      if (!FE(e) || xE(e)) return !1;
      const t = CE(e) ? PE : BE;
      return t.test(SE(e));
    }
    xs.exports = IE;
  });
  const ws = S((eL, Ss) => {
    l();
    c();
    d();
    function kE(e, t) {
      return e?.[t];
    }
    Ss.exports = kE;
  });
  const lt = S((aL, Bs) => {
    l();
    c();
    d();
    const NE = Fs();
    const ME = ws();
    function LE(e, t) {
      const r = ME(e, t);
      return NE(r) ? r : void 0;
    }
    Bs.exports = LE;
  });
  const rn = S((sL, Ts) => {
    l();
    c();
    d();
    const jE = lt();
    const qE = $e();
    const $E = jE(qE, 'Map');
    Ts.exports = $E;
  });
  const Dr = S((pL, _s) => {
    l();
    c();
    d();
    const UE = lt();
    const HE = UE(Object, 'create');
    _s.exports = HE;
  });
  const Ps = S((gL, Rs) => {
    l();
    c();
    d();
    const Os = Dr();
    function zE() {
      (this.__data__ = Os ? Os(null) : {}), (this.size = 0);
    }
    Rs.exports = zE;
  });
  const ks = S((AL, Is) => {
    l();
    c();
    d();
    function WE(e) {
      const t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Is.exports = WE;
  });
  const Ms = S((xL, Ns) => {
    l();
    c();
    d();
    const GE = Dr();
    const VE = '__lodash_hash_undefined__';
    const KE = Object.prototype;
    const YE = KE.hasOwnProperty;
    function XE(e) {
      const t = this.__data__;
      if (GE) {
        const r = t[e];
        return r === VE ? void 0 : r;
      }
      return YE.call(t, e) ? t[e] : void 0;
    }
    Ns.exports = XE;
  });
  const js = S((BL, Ls) => {
    l();
    c();
    d();
    const JE = Dr();
    const QE = Object.prototype;
    const ZE = QE.hasOwnProperty;
    function eb(e) {
      const t = this.__data__;
      return JE ? t[e] !== void 0 : ZE.call(t, e);
    }
    Ls.exports = eb;
  });
  const $s = S((RL, qs) => {
    l();
    c();
    d();
    const tb = Dr();
    const rb = '__lodash_hash_undefined__';
    function nb(e, t) {
      const r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = tb && t === void 0 ? rb : t),
        this
      );
    }
    qs.exports = nb;
  });
  const Hs = S((NL, Us) => {
    l();
    c();
    d();
    const ab = Ps();
    const ob = ks();
    const ib = Ms();
    const ub = js();
    const sb = $s();
    function Lt(e) {
      let t = -1;
      const r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        const n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Lt.prototype.clear = ab;
    Lt.prototype.delete = ob;
    Lt.prototype.get = ib;
    Lt.prototype.has = ub;
    Lt.prototype.set = sb;
    Us.exports = Lt;
  });
  const Gs = S((qL, Ws) => {
    l();
    c();
    d();
    const zs = Hs();
    const lb = Ar();
    const cb = rn();
    function db() {
      (this.size = 0),
        (this.__data__ = {
          hash: new zs(),
          map: new (cb || lb)(),
          string: new zs(),
        });
    }
    Ws.exports = db;
  });
  const Ks = S((zL, Vs) => {
    l();
    c();
    d();
    function pb(e) {
      const t = typeof e;
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null;
    }
    Vs.exports = pb;
  });
  const Cr = S((KL, Ys) => {
    l();
    c();
    d();
    const fb = Ks();
    function hb(e, t) {
      const r = e.__data__;
      return fb(t) ? r[typeof t === 'string' ? 'string' : 'hash'] : r.map;
    }
    Ys.exports = hb;
  });
  const Js = S((QL, Xs) => {
    l();
    c();
    d();
    const mb = Cr();
    function gb(e) {
      const t = mb(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Xs.exports = gb;
  });
  const Zs = S((rj, Qs) => {
    l();
    c();
    d();
    const yb = Cr();
    function Eb(e) {
      return yb(this, e).get(e);
    }
    Qs.exports = Eb;
  });
  const tl = S((ij, el) => {
    l();
    c();
    d();
    const bb = Cr();
    function Ab(e) {
      return bb(this, e).has(e);
    }
    el.exports = Ab;
  });
  const nl = S((cj, rl) => {
    l();
    c();
    d();
    const vb = Cr();
    function Db(e, t) {
      const r = vb(this, e);
      const n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    rl.exports = Db;
  });
  const nn = S((hj, al) => {
    l();
    c();
    d();
    const Cb = Gs();
    const xb = Js();
    const Fb = Zs();
    const Sb = tl();
    const wb = nl();
    function jt(e) {
      let t = -1;
      const r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        const n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = Cb;
    jt.prototype.delete = xb;
    jt.prototype.get = Fb;
    jt.prototype.has = Sb;
    jt.prototype.set = wb;
    al.exports = jt;
  });
  const il = S((Ej, ol) => {
    l();
    c();
    d();
    const Bb = Ar();
    const Tb = rn();
    const _b = nn();
    const Ob = 200;
    function Rb(e, t) {
      let r = this.__data__;
      if (r instanceof Bb) {
        const n = r.__data__;
        if (!Tb || n.length < Ob - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new _b(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ol.exports = Rb;
  });
  const an = S((Dj, ul) => {
    l();
    c();
    d();
    const Pb = Ar();
    const Ib = Ju();
    const kb = Zu();
    const Nb = ts();
    const Mb = ns();
    const Lb = il();
    function qt(e) {
      const t = (this.__data__ = new Pb(e));
      this.size = t.size;
    }
    qt.prototype.clear = Ib;
    qt.prototype.delete = kb;
    qt.prototype.get = Nb;
    qt.prototype.has = Mb;
    qt.prototype.set = Lb;
    ul.exports = qt;
  });
  const ll = S((Sj, sl) => {
    l();
    c();
    d();
    const jb = '__lodash_hash_undefined__';
    function qb(e) {
      return this.__data__.set(e, jb), this;
    }
    sl.exports = qb;
  });
  const dl = S((_j, cl) => {
    l();
    c();
    d();
    function $b(e) {
      return this.__data__.has(e);
    }
    cl.exports = $b;
  });
  const ao = S((Ij, pl) => {
    l();
    c();
    d();
    const Ub = nn();
    const Hb = ll();
    const zb = dl();
    function on(e) {
      let t = -1;
      const r = e == null ? 0 : e.length;
      for (this.__data__ = new Ub(); ++t < r; ) this.add(e[t]);
    }
    on.prototype.add = on.prototype.push = Hb;
    on.prototype.has = zb;
    pl.exports = on;
  });
  const hl = S((Lj, fl) => {
    l();
    c();
    d();
    function Wb(e, t) {
      for (let r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    fl.exports = Wb;
  });
  const oo = S((Uj, ml) => {
    l();
    c();
    d();
    function Gb(e, t) {
      return e.has(t);
    }
    ml.exports = Gb;
  });
  const io = S((Gj, gl) => {
    l();
    c();
    d();
    const Vb = ao();
    const Kb = hl();
    const Yb = oo();
    const Xb = 1;
    const Jb = 2;
    function Qb(e, t, r, n, a, o) {
      const i = r & Xb;
      const u = e.length;
      const s = t.length;
      if (u != s && !(i && s > u)) return !1;
      const p = o.get(e);
      const y = o.get(t);
      if (p && y) return p == t && y == e;
      let b = -1;
      let m = !0;
      const g = r & Jb ? new Vb() : void 0;
      for (o.set(e, t), o.set(t, e); ++b < u; ) {
        var A = e[b];
        const E = t[b];
        if (n) var x = i ? n(E, A, b, t, e, o) : n(A, E, b, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          m = !1;
          break;
        }
        if (g) {
          if (
            !Kb(t, (F, B) => {
              if (!Yb(g, B) && (A === F || a(A, F, r, n, o))) return g.push(B);
            })
          ) {
            m = !1;
            break;
          }
        } else if (!(A === E || a(A, E, r, n, o))) {
          m = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), m;
    }
    gl.exports = Qb;
  });
  const uo = S((Xj, yl) => {
    l();
    c();
    d();
    const Zb = $e();
    const eA = Zb.Uint8Array;
    yl.exports = eA;
  });
  const bl = S((eq, El) => {
    l();
    c();
    d();
    function tA(e) {
      let t = -1;
      const r = Array(e.size);
      return (
        e.forEach((n, a) => {
          r[++t] = [a, n];
        }),
        r
      );
    }
    El.exports = tA;
  });
  const un = S((aq, Al) => {
    l();
    c();
    d();
    function rA(e) {
      let t = -1;
      const r = Array(e.size);
      return (
        e.forEach((n) => {
          r[++t] = n;
        }),
        r
      );
    }
    Al.exports = rA;
  });
  const Fl = S((sq, xl) => {
    l();
    c();
    d();
    const vl = At();
    const Dl = uo();
    const nA = tn();
    const aA = io();
    const oA = bl();
    const iA = un();
    const uA = 1;
    const sA = 2;
    const lA = '[object Boolean]';
    const cA = '[object Date]';
    const dA = '[object Error]';
    const pA = '[object Map]';
    const fA = '[object Number]';
    const hA = '[object RegExp]';
    const mA = '[object Set]';
    const gA = '[object String]';
    const yA = '[object Symbol]';
    const EA = '[object ArrayBuffer]';
    const bA = '[object DataView]';
    const Cl = vl ? vl.prototype : void 0;
    const so = Cl ? Cl.valueOf : void 0;
    function AA(e, t, r, n, a, o, i) {
      switch (r) {
        case bA:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case EA:
          return !(e.byteLength != t.byteLength || !o(new Dl(e), new Dl(t)));
        case lA:
        case cA:
        case fA:
          return nA(+e, +t);
        case dA:
          return e.name == t.name && e.message == t.message;
        case hA:
        case gA:
          return e == `${t}`;
        case pA:
          var u = oA;
        case mA:
          var s = n & uA;
          if ((u || (u = iA), e.size != t.size && !s)) return !1;
          var p = i.get(e);
          if (p) return p == t;
          (n |= sA), i.set(e, t);
          var y = aA(u(e), u(t), n, a, o, i);
          return i.delete(e), y;
        case yA:
          if (so) return so.call(e) == so.call(t);
      }
      return !1;
    }
    xl.exports = AA;
  });
  const sn = S((pq, Sl) => {
    l();
    c();
    d();
    function vA(e, t) {
      for (let r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
      return e;
    }
    Sl.exports = vA;
  });
  const Ge = S((gq, wl) => {
    l();
    c();
    d();
    const DA = Array.isArray;
    wl.exports = DA;
  });
  const lo = S((Aq, Bl) => {
    l();
    c();
    d();
    const CA = sn();
    const xA = Ge();
    function FA(e, t, r) {
      const n = t(e);
      return xA(e) ? n : CA(n, r(e));
    }
    Bl.exports = FA;
  });
  const _l = S((xq, Tl) => {
    l();
    c();
    d();
    function SA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        const i = e[r];
        t(i, r, e) && (o[a++] = i);
      }
      return o;
    }
    Tl.exports = SA;
  });
  const co = S((Bq, Ol) => {
    l();
    c();
    d();
    function wA() {
      return [];
    }
    Ol.exports = wA;
  });
  const ln = S((Rq, Pl) => {
    l();
    c();
    d();
    const BA = _l();
    const TA = co();
    const _A = Object.prototype;
    const OA = _A.propertyIsEnumerable;
    const Rl = Object.getOwnPropertySymbols;
    const RA = Rl
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)), BA(Rl(e), (t) => OA.call(e, t)));
        }
      : TA;
    Pl.exports = RA;
  });
  const kl = S((Nq, Il) => {
    l();
    c();
    d();
    function PA(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Il.exports = PA;
  });
  const rt = S((qq, Nl) => {
    l();
    c();
    d();
    function IA(e) {
      return e != null && typeof e === 'object';
    }
    Nl.exports = IA;
  });
  const Ll = S((zq, Ml) => {
    l();
    c();
    d();
    const kA = vt();
    const NA = rt();
    const MA = '[object Arguments]';
    function LA(e) {
      return NA(e) && kA(e) == MA;
    }
    Ml.exports = LA;
  });
  const cn = S((Kq, $l) => {
    l();
    c();
    d();
    const jl = Ll();
    const jA = rt();
    const ql = Object.prototype;
    const qA = ql.hasOwnProperty;
    const $A = ql.propertyIsEnumerable;
    const UA = jl(
      (function () {
        return arguments;
      })()
    )
      ? jl
      : function (e) {
          return jA(e) && qA.call(e, 'callee') && !$A.call(e, 'callee');
        };
    $l.exports = UA;
  });
  const Hl = S((Qq, Ul) => {
    l();
    c();
    d();
    function HA() {
      return !1;
    }
    Ul.exports = HA;
  });
  const dn = S((xr, $t) => {
    l();
    c();
    d();
    const zA = $e();
    const WA = Hl();
    const Gl = typeof xr === 'object' && xr && !xr.nodeType && xr;
    const zl = Gl && typeof $t === 'object' && $t && !$t.nodeType && $t;
    const GA = zl && zl.exports === Gl;
    const Wl = GA ? zA.Buffer : void 0;
    const VA = Wl ? Wl.isBuffer : void 0;
    const KA = VA || WA;
    $t.exports = KA;
  });
  const pn = S((o$, Vl) => {
    l();
    c();
    d();
    const YA = 9007199254740991;
    const XA = /^(?:0|[1-9]\d*)$/;
    function JA(e, t) {
      const r = typeof e;
      return (
        (t = t ?? YA),
        !!t &&
          (r == 'number' || (r != 'symbol' && XA.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Vl.exports = JA;
  });
  const fn = S((l$, Kl) => {
    l();
    c();
    d();
    const QA = 9007199254740991;
    function ZA(e) {
      return typeof e === 'number' && e > -1 && e % 1 == 0 && e <= QA;
    }
    Kl.exports = ZA;
  });
  const Xl = S((f$, Yl) => {
    l();
    c();
    d();
    const ev = vt();
    const tv = fn();
    const rv = rt();
    const nv = '[object Arguments]';
    const av = '[object Array]';
    const ov = '[object Boolean]';
    const iv = '[object Date]';
    const uv = '[object Error]';
    const sv = '[object Function]';
    const lv = '[object Map]';
    const cv = '[object Number]';
    const dv = '[object Object]';
    const pv = '[object RegExp]';
    const fv = '[object Set]';
    const hv = '[object String]';
    const mv = '[object WeakMap]';
    const gv = '[object ArrayBuffer]';
    const yv = '[object DataView]';
    const Ev = '[object Float32Array]';
    const bv = '[object Float64Array]';
    const Av = '[object Int8Array]';
    const vv = '[object Int16Array]';
    const Dv = '[object Int32Array]';
    const Cv = '[object Uint8Array]';
    const xv = '[object Uint8ClampedArray]';
    const Fv = '[object Uint16Array]';
    const Sv = '[object Uint32Array]';
    const ce = {};
    ce[Ev] =
      ce[bv] =
      ce[Av] =
      ce[vv] =
      ce[Dv] =
      ce[Cv] =
      ce[xv] =
      ce[Fv] =
      ce[Sv] =
        !0;
    ce[nv] =
      ce[av] =
      ce[gv] =
      ce[ov] =
      ce[yv] =
      ce[iv] =
      ce[uv] =
      ce[sv] =
      ce[lv] =
      ce[cv] =
      ce[dv] =
      ce[pv] =
      ce[fv] =
      ce[hv] =
      ce[mv] =
        !1;
    function wv(e) {
      return rv(e) && tv(e.length) && !!ce[ev(e)];
    }
    Yl.exports = wv;
  });
  const hn = S((y$, Jl) => {
    l();
    c();
    d();
    function Bv(e) {
      return function (t) {
        return e(t);
      };
    }
    Jl.exports = Bv;
  });
  const mn = S((Fr, Ut) => {
    l();
    c();
    d();
    const Tv = eo();
    const Ql = typeof Fr === 'object' && Fr && !Fr.nodeType && Fr;
    const Sr = Ql && typeof Ut === 'object' && Ut && !Ut.nodeType && Ut;
    const _v = Sr && Sr.exports === Ql;
    const po = _v && Tv.process;
    const Ov = (function () {
      try {
        const e = Sr && Sr.require && Sr.require('util').types;
        return e || (po && po.binding && po.binding('util'));
      } catch {}
    })();
    Ut.exports = Ov;
  });
  const fo = S((x$, tc) => {
    l();
    c();
    d();
    const Rv = Xl();
    const Pv = hn();
    const Zl = mn();
    const ec = Zl && Zl.isTypedArray;
    const Iv = ec ? Pv(ec) : Rv;
    tc.exports = Iv;
  });
  const ho = S((B$, rc) => {
    l();
    c();
    d();
    const kv = kl();
    const Nv = cn();
    const Mv = Ge();
    const Lv = dn();
    const jv = pn();
    const qv = fo();
    const $v = Object.prototype;
    const Uv = $v.hasOwnProperty;
    function Hv(e, t) {
      const r = Mv(e);
      const n = !r && Nv(e);
      const a = !r && !n && Lv(e);
      const o = !r && !n && !a && qv(e);
      const i = r || n || a || o;
      const u = i ? kv(e.length, String) : [];
      const s = u.length;
      for (const p in e)
        (t || Uv.call(e, p)) &&
          !(
            i &&
            (p == 'length' ||
              (a && (p == 'offset' || p == 'parent')) ||
              (o &&
                (p == 'buffer' || p == 'byteLength' || p == 'byteOffset')) ||
              jv(p, s))
          ) &&
          u.push(p);
      return u;
    }
    rc.exports = Hv;
  });
  const gn = S((R$, nc) => {
    l();
    c();
    d();
    const zv = Object.prototype;
    function Wv(e) {
      const t = e && e.constructor;
      const r = (typeof t === 'function' && t.prototype) || zv;
      return e === r;
    }
    nc.exports = Wv;
  });
  const mo = S((N$, ac) => {
    l();
    c();
    d();
    function Gv(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    ac.exports = Gv;
  });
  const ic = S((q$, oc) => {
    l();
    c();
    d();
    const Vv = mo();
    const Kv = Vv(Object.keys, Object);
    oc.exports = Kv;
  });
  const sc = S((z$, uc) => {
    l();
    c();
    d();
    const Yv = gn();
    const Xv = ic();
    const Jv = Object.prototype;
    const Qv = Jv.hasOwnProperty;
    function Zv(e) {
      if (!Yv(e)) return Xv(e);
      const t = [];
      for (const r in Object(e))
        Qv.call(e, r) && r != 'constructor' && t.push(r);
      return t;
    }
    uc.exports = Zv;
  });
  const go = S((K$, lc) => {
    l();
    c();
    d();
    const eD = to();
    const tD = fn();
    function rD(e) {
      return e != null && tD(e.length) && !eD(e);
    }
    lc.exports = rD;
  });
  const Ht = S((Q$, cc) => {
    l();
    c();
    d();
    const nD = ho();
    const aD = sc();
    const oD = go();
    function iD(e) {
      return oD(e) ? nD(e) : aD(e);
    }
    cc.exports = iD;
  });
  const yo = S((rU, dc) => {
    l();
    c();
    d();
    const uD = lo();
    const sD = ln();
    const lD = Ht();
    function cD(e) {
      return uD(e, lD, sD);
    }
    dc.exports = cD;
  });
  const hc = S((iU, fc) => {
    l();
    c();
    d();
    const pc = yo();
    const dD = 1;
    const pD = Object.prototype;
    const fD = pD.hasOwnProperty;
    function hD(e, t, r, n, a, o) {
      const i = r & dD;
      const u = pc(e);
      const s = u.length;
      const p = pc(t);
      const y = p.length;
      if (s != y && !i) return !1;
      for (var b = s; b--; ) {
        var m = u[b];
        if (!(i ? m in t : fD.call(t, m))) return !1;
      }
      const g = o.get(e);
      const A = o.get(t);
      if (g && A) return g == t && A == e;
      let E = !0;
      o.set(e, t), o.set(t, e);
      for (var x = i; ++b < s; ) {
        m = u[b];
        const F = e[m];
        const B = t[m];
        if (n) var I = i ? n(B, F, m, t, e, o) : n(F, B, m, e, t, o);
        if (!(I === void 0 ? F === B || a(F, B, r, n, o) : I)) {
          E = !1;
          break;
        }
        x || (x = m == 'constructor');
      }
      if (E && !x) {
        const L = e.constructor;
        const w = t.constructor;
        L != w &&
          'constructor' in e &&
          'constructor' in t &&
          !(
            typeof L === 'function' &&
            L instanceof L &&
            typeof w === 'function' &&
            w instanceof w
          ) &&
          (E = !1);
      }
      return o.delete(e), o.delete(t), E;
    }
    fc.exports = hD;
  });
  const gc = S((cU, mc) => {
    l();
    c();
    d();
    const mD = lt();
    const gD = $e();
    const yD = mD(gD, 'DataView');
    mc.exports = yD;
  });
  const Ec = S((hU, yc) => {
    l();
    c();
    d();
    const ED = lt();
    const bD = $e();
    const AD = ED(bD, 'Promise');
    yc.exports = AD;
  });
  const Eo = S((EU, bc) => {
    l();
    c();
    d();
    const vD = lt();
    const DD = $e();
    const CD = vD(DD, 'Set');
    bc.exports = CD;
  });
  const vc = S((DU, Ac) => {
    l();
    c();
    d();
    const xD = lt();
    const FD = $e();
    const SD = xD(FD, 'WeakMap');
    Ac.exports = SD;
  });
  const wr = S((SU, Bc) => {
    l();
    c();
    d();
    const bo = gc();
    const Ao = rn();
    const vo = Ec();
    const Do = Eo();
    const Co = vc();
    const wc = vt();
    const zt = no();
    const Dc = '[object Map]';
    const wD = '[object Object]';
    const Cc = '[object Promise]';
    const xc = '[object Set]';
    const Fc = '[object WeakMap]';
    const Sc = '[object DataView]';
    const BD = zt(bo);
    const TD = zt(Ao);
    const _D = zt(vo);
    const OD = zt(Do);
    const RD = zt(Co);
    let Dt = wc;
    ((bo && Dt(new bo(new ArrayBuffer(1))) != Sc) ||
      (Ao && Dt(new Ao()) != Dc) ||
      (vo && Dt(vo.resolve()) != Cc) ||
      (Do && Dt(new Do()) != xc) ||
      (Co && Dt(new Co()) != Fc)) &&
      (Dt = function (e) {
        const t = wc(e);
        const r = t == wD ? e.constructor : void 0;
        const n = r ? zt(r) : '';
        if (n)
          switch (n) {
            case BD:
              return Sc;
            case TD:
              return Dc;
            case _D:
              return Cc;
            case OD:
              return xc;
            case RD:
              return Fc;
          }
        return t;
      });
    Bc.exports = Dt;
  });
  const Nc = S((_U, kc) => {
    l();
    c();
    d();
    const xo = an();
    const PD = io();
    const ID = Fl();
    const kD = hc();
    const Tc = wr();
    const _c = Ge();
    const Oc = dn();
    const ND = fo();
    const MD = 1;
    const Rc = '[object Arguments]';
    const Pc = '[object Array]';
    const yn = '[object Object]';
    const LD = Object.prototype;
    const Ic = LD.hasOwnProperty;
    function jD(e, t, r, n, a, o) {
      let i = _c(e);
      const u = _c(t);
      let s = i ? Pc : Tc(e);
      let p = u ? Pc : Tc(t);
      (s = s == Rc ? yn : s), (p = p == Rc ? yn : p);
      let y = s == yn;
      const b = p == yn;
      const m = s == p;
      if (m && Oc(e)) {
        if (!Oc(t)) return !1;
        (i = !0), (y = !1);
      }
      if (m && !y)
        return (
          o || (o = new xo()),
          i || ND(e) ? PD(e, t, r, n, a, o) : ID(e, t, s, r, n, a, o)
        );
      if (!(r & MD)) {
        const g = y && Ic.call(e, '__wrapped__');
        const A = b && Ic.call(t, '__wrapped__');
        if (g || A) {
          const E = g ? e.value() : e;
          const x = A ? t.value() : t;
          return o || (o = new xo()), a(E, x, r, n, o);
        }
      }
      return m ? (o || (o = new xo()), kD(e, t, r, n, a, o)) : !1;
    }
    kc.exports = jD;
  });
  const Fo = S((IU, jc) => {
    l();
    c();
    d();
    const qD = Nc();
    const Mc = rt();
    function Lc(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Mc(e) && !Mc(t))
        ? e !== e && t !== t
        : qD(e, t, r, n, Lc, a);
    }
    jc.exports = Lc;
  });
  const $c = S((LU, qc) => {
    l();
    c();
    d();
    const $D = an();
    const UD = Fo();
    const HD = 1;
    const zD = 2;
    function WD(e, t, r, n) {
      let a = r.length;
      const o = a;
      const i = !n;
      if (e == null) return !o;
      for (e = Object(e); a--; ) {
        var u = r[a];
        if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
      }
      for (; ++a < o; ) {
        u = r[a];
        const s = u[0];
        const p = e[s];
        const y = u[1];
        if (i && u[2]) {
          if (p === void 0 && !(s in e)) return !1;
        } else {
          const b = new $D();
          if (n) var m = n(p, y, s, e, t, b);
          if (!(m === void 0 ? UD(y, p, HD | zD, n, b) : m)) return !1;
        }
      }
      return !0;
    }
    qc.exports = WD;
  });
  const So = S((UU, Uc) => {
    l();
    c();
    d();
    const GD = We();
    function VD(e) {
      return e === e && !GD(e);
    }
    Uc.exports = VD;
  });
  const zc = S((GU, Hc) => {
    l();
    c();
    d();
    const KD = So();
    const YD = Ht();
    function XD(e) {
      for (var t = YD(e), r = t.length; r--; ) {
        const n = t[r];
        const a = e[n];
        t[r] = [n, a, KD(a)];
      }
      return t;
    }
    Hc.exports = XD;
  });
  const wo = S((XU, Wc) => {
    l();
    c();
    d();
    function JD(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Wc.exports = JD;
  });
  const Vc = S((eH, Gc) => {
    l();
    c();
    d();
    const QD = $c();
    const ZD = zc();
    const eC = wo();
    function tC(e) {
      const t = ZD(e);
      return t.length == 1 && t[0][2]
        ? eC(t[0][0], t[0][1])
        : function (r) {
            return r === e || QD(r, e, t);
          };
    }
    Gc.exports = tC;
  });
  const Br = S((aH, Kc) => {
    l();
    c();
    d();
    const rC = vt();
    const nC = rt();
    const aC = '[object Symbol]';
    function oC(e) {
      return typeof e === 'symbol' || (nC(e) && rC(e) == aC);
    }
    Kc.exports = oC;
  });
  const En = S((sH, Yc) => {
    l();
    c();
    d();
    const iC = Ge();
    const uC = Br();
    const sC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    const lC = /^\w*$/;
    function cC(e, t) {
      if (iC(e)) return !1;
      const r = typeof e;
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        uC(e)
        ? !0
        : lC.test(e) || !sC.test(e) || (t != null && e in Object(t));
    }
    Yc.exports = cC;
  });
  const Qc = S((pH, Jc) => {
    l();
    c();
    d();
    const Xc = nn();
    const dC = 'Expected a function';
    function Bo(e, t) {
      if (typeof e !== 'function' || (t != null && typeof t !== 'function'))
        throw new TypeError(dC);
      const r = function () {
        const n = arguments;
        const a = t ? t.apply(this, n) : n[0];
        const o = r.cache;
        if (o.has(a)) return o.get(a);
        const i = e.apply(this, n);
        return (r.cache = o.set(a, i) || o), i;
      };
      return (r.cache = new (Bo.Cache || Xc)()), r;
    }
    Bo.Cache = Xc;
    Jc.exports = Bo;
  });
  const ed = S((gH, Zc) => {
    l();
    c();
    d();
    const pC = Qc();
    const fC = 500;
    function hC(e) {
      const t = pC(e, (n) => (r.size === fC && r.clear(), n));
      var r = t.cache;
      return t;
    }
    Zc.exports = hC;
  });
  const rd = S((AH, td) => {
    l();
    c();
    d();
    const mC = ed();
    const gC =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    const yC = /\\(\\)?/g;
    const EC = mC((e) => {
      const t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(gC, (r, n, a, o) => {
          t.push(a ? o.replace(yC, '$1') : n || r);
        }),
        t
      );
    });
    td.exports = EC;
  });
  const sd = S((xH, ud) => {
    l();
    c();
    d();
    const nd = At();
    const bC = Za();
    const AC = Ge();
    const vC = Br();
    const DC = 1 / 0;
    const ad = nd ? nd.prototype : void 0;
    const od = ad ? ad.toString : void 0;
    function id(e) {
      if (typeof e === 'string') return e;
      if (AC(e)) return `${bC(e, id)}`;
      if (vC(e)) return od ? od.call(e) : '';
      const t = `${e}`;
      return t == '0' && 1 / e == -DC ? '-0' : t;
    }
    ud.exports = id;
  });
  const cd = S((BH, ld) => {
    l();
    c();
    d();
    const CC = sd();
    function xC(e) {
      return e == null ? '' : CC(e);
    }
    ld.exports = xC;
  });
  const Tr = S((RH, dd) => {
    l();
    c();
    d();
    const FC = Ge();
    const SC = En();
    const wC = rd();
    const BC = cd();
    function TC(e, t) {
      return FC(e) ? e : SC(e, t) ? [e] : wC(BC(e));
    }
    dd.exports = TC;
  });
  const Wt = S((NH, pd) => {
    l();
    c();
    d();
    const _C = Br();
    const OC = 1 / 0;
    function RC(e) {
      if (typeof e === 'string' || _C(e)) return e;
      const t = `${e}`;
      return t == '0' && 1 / e == -OC ? '-0' : t;
    }
    pd.exports = RC;
  });
  const bn = S((qH, fd) => {
    l();
    c();
    d();
    const PC = Tr();
    const IC = Wt();
    function kC(e, t) {
      t = PC(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[IC(t[r++])];
      return r && r == n ? e : void 0;
    }
    fd.exports = kC;
  });
  const md = S((zH, hd) => {
    l();
    c();
    d();
    const NC = bn();
    function MC(e, t, r) {
      const n = e == null ? void 0 : NC(e, t);
      return n === void 0 ? r : n;
    }
    hd.exports = MC;
  });
  const yd = S((KH, gd) => {
    l();
    c();
    d();
    function LC(e, t) {
      return e != null && t in Object(e);
    }
    gd.exports = LC;
  });
  const bd = S((QH, Ed) => {
    l();
    c();
    d();
    const jC = Tr();
    const qC = cn();
    const $C = Ge();
    const UC = pn();
    const HC = fn();
    const zC = Wt();
    function WC(e, t, r) {
      t = jC(t, e);
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var i = zC(t[n]);
        if (!(o = e != null && r(e, i))) break;
        e = e[i];
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length),
          !!a && HC(a) && UC(i, a) && ($C(e) || qC(e)));
    }
    Ed.exports = WC;
  });
  const To = S((rz, Ad) => {
    l();
    c();
    d();
    const GC = yd();
    const VC = bd();
    function KC(e, t) {
      return e != null && VC(e, t, GC);
    }
    Ad.exports = KC;
  });
  const Dd = S((iz, vd) => {
    l();
    c();
    d();
    const YC = Fo();
    const XC = md();
    const JC = To();
    const QC = En();
    const ZC = So();
    const ex = wo();
    const tx = Wt();
    const rx = 1;
    const nx = 2;
    function ax(e, t) {
      return QC(e) && ZC(t)
        ? ex(tx(e), t)
        : function (r) {
            const n = XC(r, e);
            return n === void 0 && n === t ? JC(r, e) : YC(t, n, rx | nx);
          };
    }
    vd.exports = ax;
  });
  const _o = S((cz, Cd) => {
    l();
    c();
    d();
    function ox(e) {
      return e;
    }
    Cd.exports = ox;
  });
  const Fd = S((hz, xd) => {
    l();
    c();
    d();
    function ix(e) {
      return function (t) {
        return t?.[e];
      };
    }
    xd.exports = ix;
  });
  const wd = S((Ez, Sd) => {
    l();
    c();
    d();
    const ux = bn();
    function sx(e) {
      return function (t) {
        return ux(t, e);
      };
    }
    Sd.exports = sx;
  });
  const Td = S((Dz, Bd) => {
    l();
    c();
    d();
    const lx = Fd();
    const cx = wd();
    const dx = En();
    const px = Wt();
    function fx(e) {
      return dx(e) ? lx(px(e)) : cx(e);
    }
    Bd.exports = fx;
  });
  const Oo = S((Sz, _d) => {
    l();
    c();
    d();
    const hx = Vc();
    const mx = Dd();
    const gx = _o();
    const yx = Ge();
    const Ex = Td();
    function bx(e) {
      return typeof e === 'function'
        ? e
        : e == null
        ? gx
        : typeof e === 'object'
        ? yx(e)
          ? mx(e[0], e[1])
          : hx(e)
        : Ex(e);
    }
    _d.exports = bx;
  });
  const Ro = S((_z, Od) => {
    l();
    c();
    d();
    const Ax = lt();
    const vx = (function () {
      try {
        const e = Ax(Object, 'defineProperty');
        return e({}, '', {}), e;
      } catch {}
    })();
    Od.exports = vx;
  });
  const An = S((Iz, Pd) => {
    l();
    c();
    d();
    const Rd = Ro();
    function Dx(e, t, r) {
      t == '__proto__' && Rd
        ? Rd(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Pd.exports = Dx;
  });
  const vn = S((Lz, Id) => {
    l();
    c();
    d();
    const Cx = An();
    const xx = tn();
    const Fx = Object.prototype;
    const Sx = Fx.hasOwnProperty;
    function wx(e, t, r) {
      const n = e[t];
      (!(Sx.call(e, t) && xx(n, r)) || (r === void 0 && !(t in e))) &&
        Cx(e, t, r);
    }
    Id.exports = wx;
  });
  const Md = S((Uz, Nd) => {
    l();
    c();
    d();
    const Bx = vn();
    const Tx = Tr();
    const _x = pn();
    const kd = We();
    const Ox = Wt();
    function Rx(e, t, r, n) {
      if (!kd(e)) return e;
      t = Tx(t, e);
      for (let a = -1, o = t.length, i = o - 1, u = e; u != null && ++a < o; ) {
        const s = Ox(t[a]);
        let p = r;
        if (s === '__proto__' || s === 'constructor' || s === 'prototype')
          return e;
        if (a != i) {
          const y = u[s];
          (p = n ? n(y, s, u) : void 0),
            p === void 0 && (p = kd(y) ? y : _x(t[a + 1]) ? [] : {});
        }
        Bx(u, s, p), (u = u[s]);
      }
      return e;
    }
    Nd.exports = Rx;
  });
  const Po = S((Gz, Ld) => {
    l();
    c();
    d();
    const Px = bn();
    const Ix = Md();
    const kx = Tr();
    function Nx(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        const i = t[n];
        const u = Px(e, i);
        r(u, i) && Ix(o, kx(i, e), u);
      }
      return o;
    }
    Ld.exports = Nx;
  });
  const Dn = S((Xz, jd) => {
    l();
    c();
    d();
    const Mx = mo();
    const Lx = Mx(Object.getPrototypeOf, Object);
    jd.exports = Lx;
  });
  const Io = S((eW, qd) => {
    l();
    c();
    d();
    const jx = sn();
    const qx = Dn();
    const $x = ln();
    const Ux = co();
    const Hx = Object.getOwnPropertySymbols;
    const zx = Hx
      ? function (e) {
          for (var t = []; e; ) jx(t, $x(e)), (e = qx(e));
          return t;
        }
      : Ux;
    qd.exports = zx;
  });
  const Ud = S((aW, $d) => {
    l();
    c();
    d();
    function Wx(e) {
      const t = [];
      if (e != null) for (const r in Object(e)) t.push(r);
      return t;
    }
    $d.exports = Wx;
  });
  const zd = S((sW, Hd) => {
    l();
    c();
    d();
    const Gx = We();
    const Vx = gn();
    const Kx = Ud();
    const Yx = Object.prototype;
    const Xx = Yx.hasOwnProperty;
    function Jx(e) {
      if (!Gx(e)) return Kx(e);
      const t = Vx(e);
      const r = [];
      for (const n in e)
        (n == 'constructor' && (t || !Xx.call(e, n))) || r.push(n);
      return r;
    }
    Hd.exports = Jx;
  });
  const Cn = S((pW, Wd) => {
    l();
    c();
    d();
    const Qx = ho();
    const Zx = zd();
    const eF = go();
    function tF(e) {
      return eF(e) ? Qx(e, !0) : Zx(e);
    }
    Wd.exports = tF;
  });
  const ko = S((gW, Gd) => {
    l();
    c();
    d();
    const rF = lo();
    const nF = Io();
    const aF = Cn();
    function oF(e) {
      return rF(e, aF, nF);
    }
    Gd.exports = oF;
  });
  const No = S((AW, Vd) => {
    l();
    c();
    d();
    const iF = Za();
    const uF = Oo();
    const sF = Po();
    const lF = ko();
    function cF(e, t) {
      if (e == null) return {};
      const r = iF(lF(e), (n) => [n]);
      return (t = uF(t)), sF(e, r, (n, a) => t(n, a[0]));
    }
    Vd.exports = cF;
  });
  const Sn = S((Cp, Vo) => {
    l();
    c();
    d();
    (function (e) {
      if (typeof Cp === 'object' && typeof Vo < 'u') Vo.exports = e();
      else if (typeof define === 'function' && define.amd) define([], e);
      else {
        let t;
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e());
      }
    })(() => {
      let e;
      let t;
      let r;
      return (function n(a, o, i) {
        function u(y, b) {
          if (!o[y]) {
            if (!a[y]) {
              const m = typeof dr === 'function' && dr;
              if (!b && m) return m(y, !0);
              if (s) return s(y, !0);
              const g = new Error(`Cannot find module '${y}'`);
              throw ((g.code = 'MODULE_NOT_FOUND'), g);
            }
            const A = (o[y] = { exports: {} });
            a[y][0].call(
              A.exports,
              (E) => {
                const x = a[y][1][E];
                return u(x || E);
              },
              A,
              A.exports,
              n,
              a,
              o,
              i
            );
          }
          return o[y].exports;
        }
        for (var s = typeof dr === 'function' && dr, p = 0; p < i.length; p++)
          u(i[p]);
        return u;
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (i) {
                if (typeof Map !== 'function' || i) {
                  const u = n('./similar');
                  return new u();
                }
                return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (n, a, o) {
              function i() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (i.prototype.get = function (u) {
                let s;
                if (this.lastItem && this.isEqual(this.lastItem.key, u))
                  return this.lastItem.val;
                if (((s = this.indexOf(u)), s >= 0))
                  return (this.lastItem = this.list[s]), this.list[s].val;
              }),
                (i.prototype.set = function (u, s) {
                  let p;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? ((this.lastItem.val = s), this)
                    : ((p = this.indexOf(u)),
                      p >= 0
                        ? ((this.lastItem = this.list[p]),
                          (this.list[p].val = s),
                          this)
                        : ((this.lastItem = { key: u, val: s }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (i.prototype.delete = function (u) {
                  let s;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, u) &&
                      (this.lastItem = void 0),
                    (s = this.indexOf(u)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0];
                }),
                (i.prototype.has = function (u) {
                  let s;
                  return this.lastItem && this.isEqual(this.lastItem.key, u)
                    ? !0
                    : ((s = this.indexOf(u)),
                      s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1);
                }),
                (i.prototype.forEach = function (u, s) {
                  let p;
                  for (p = 0; p < this.size; p++)
                    u.call(s || this, this.list[p].val, this.list[p].key, this);
                }),
                (i.prototype.indexOf = function (u) {
                  let s;
                  for (s = 0; s < this.size; s++)
                    if (this.isEqual(this.list[s].key, u)) return s;
                  return -1;
                }),
                (i.prototype.isEqual = function (u, s) {
                  return u === s || (u !== u && s !== s);
                }),
                (a.exports = i);
            },
            {},
          ],
          3: [
            function (n, a, o) {
              const i = n('map-or-similar');
              a.exports = function (y) {
                const b = new i(!1);
                const m = [];
                return function (g) {
                  const A = function () {
                    let E = b;
                    let x;
                    let F;
                    const B = arguments.length - 1;
                    const I = Array(B + 1);
                    let L = !0;
                    let w;
                    if ((A.numArgs || A.numArgs === 0) && A.numArgs !== B + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      );
                    for (w = 0; w < B; w++) {
                      if (
                        ((I[w] = { cacheItem: E, arg: arguments[w] }),
                        E.has(arguments[w]))
                      ) {
                        E = E.get(arguments[w]);
                        continue;
                      }
                      (L = !1),
                        (x = new i(!1)),
                        E.set(arguments[w], x),
                        (E = x);
                    }
                    return (
                      L &&
                        (E.has(arguments[B])
                          ? (F = E.get(arguments[B]))
                          : (L = !1)),
                      L ||
                        ((F = g.apply(null, arguments)),
                        E.set(arguments[B], F)),
                      y > 0 &&
                        ((I[B] = { cacheItem: E, arg: arguments[B] }),
                        L ? u(m, I) : m.push(I),
                        m.length > y && s(m.shift())),
                      (A.wasMemoized = L),
                      (A.numArgs = B + 1),
                      F
                    );
                  };
                  return (
                    (A.limit = y),
                    (A.wasMemoized = !1),
                    (A.cache = b),
                    (A.lru = m),
                    A
                  );
                };
              };
              function u(y, b) {
                const m = y.length;
                const g = b.length;
                let A;
                let E;
                let x;
                for (E = 0; E < m; E++) {
                  for (A = !0, x = 0; x < g; x++)
                    if (!p(y[E][x].arg, b[x].arg)) {
                      A = !1;
                      break;
                    }
                  if (A) break;
                }
                y.push(y.splice(E, 1)[0]);
              }
              function s(y) {
                const b = y.length;
                let m = y[b - 1];
                let g;
                let A;
                for (
                  m.cacheItem.delete(m.arg), A = b - 2;
                  A >= 0 &&
                  ((m = y[A]), (g = m.cacheItem.get(m.arg)), !g || !g.size);
                  A--
                )
                  m.cacheItem.delete(m.arg);
              }
              function p(y, b) {
                return y === b || (y !== y && b !== b);
              }
            },
            { 'map-or-similar': 1 },
          ],
        },
        {},
        [3]
      )(3);
    });
  });
  const Fp = S((UW, xp) => {
    l();
    c();
    d();
    function xS(e, t, r, n) {
      for (let a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    xp.exports = xS;
  });
  const wp = S((GW, Sp) => {
    l();
    c();
    d();
    function FS(e) {
      return e !== e;
    }
    Sp.exports = FS;
  });
  const Tp = S((XW, Bp) => {
    l();
    c();
    d();
    function SS(e, t, r) {
      for (let n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
      return -1;
    }
    Bp.exports = SS;
  });
  const Op = S((eG, _p) => {
    l();
    c();
    d();
    const wS = Fp();
    const BS = wp();
    const TS = Tp();
    function _S(e, t, r) {
      return t === t ? TS(e, t, r) : wS(e, BS, r);
    }
    _p.exports = _S;
  });
  const Pp = S((aG, Rp) => {
    l();
    c();
    d();
    const OS = Op();
    function RS(e, t) {
      const r = e == null ? 0 : e.length;
      return !!r && OS(e, t, 0) > -1;
    }
    Rp.exports = RS;
  });
  const kp = S((sG, Ip) => {
    l();
    c();
    d();
    function PS(e, t, r) {
      for (let n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0;
      return !1;
    }
    Ip.exports = PS;
  });
  const Mp = S((pG, Np) => {
    l();
    c();
    d();
    function IS() {}
    Np.exports = IS;
  });
  const jp = S((gG, Lp) => {
    l();
    c();
    d();
    const Ko = Eo();
    const kS = Mp();
    const NS = un();
    const MS = 1 / 0;
    const LS =
      Ko && 1 / NS(new Ko([, -0]))[1] == MS
        ? function (e) {
            return new Ko(e);
          }
        : kS;
    Lp.exports = LS;
  });
  const $p = S((AG, qp) => {
    l();
    c();
    d();
    const jS = ao();
    const qS = Pp();
    const $S = kp();
    const US = oo();
    const HS = jp();
    const zS = un();
    const WS = 200;
    function GS(e, t, r) {
      let n = -1;
      let a = qS;
      const o = e.length;
      let i = !0;
      const u = [];
      let s = u;
      if (r) (i = !1), (a = $S);
      else if (o >= WS) {
        const p = t ? null : HS(e);
        if (p) return zS(p);
        (i = !1), (a = US), (s = new jS());
      } else s = t ? [] : u;
      e: for (; ++n < o; ) {
        let y = e[n];
        const b = t ? t(y) : y;
        if (((y = r || y !== 0 ? y : 0), i && b === b)) {
          for (let m = s.length; m--; ) if (s[m] === b) continue e;
          t && s.push(b), u.push(y);
        } else a(s, b, r) || (s !== u && s.push(b), u.push(y));
      }
      return u;
    }
    qp.exports = GS;
  });
  const Hp = S((xG, Up) => {
    l();
    c();
    d();
    const VS = $p();
    function KS(e) {
      return e && e.length ? VS(e) : [];
    }
    Up.exports = KS;
  });
  const Wp = S((BG, zp) => {
    l();
    c();
    d();
    function YS(e, t) {
      for (
        let r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    zp.exports = YS;
  });
  const Or = S((RG, Gp) => {
    l();
    c();
    d();
    const XS = vn();
    const JS = An();
    function QS(e, t, r, n) {
      const a = !r;
      r || (r = {});
      for (let o = -1, i = t.length; ++o < i; ) {
        const u = t[o];
        let s = n ? n(r[u], e[u], u, r, e) : void 0;
        s === void 0 && (s = e[u]), a ? JS(r, u, s) : XS(r, u, s);
      }
      return r;
    }
    Gp.exports = QS;
  });
  const Kp = S((NG, Vp) => {
    l();
    c();
    d();
    const ZS = Or();
    const ew = Ht();
    function tw(e, t) {
      return e && ZS(t, ew(t), e);
    }
    Vp.exports = tw;
  });
  const Xp = S((qG, Yp) => {
    l();
    c();
    d();
    const rw = Or();
    const nw = Cn();
    function aw(e, t) {
      return e && rw(t, nw(t), e);
    }
    Yp.exports = aw;
  });
  const tf = S((Rr, Vt) => {
    l();
    c();
    d();
    const ow = $e();
    const ef = typeof Rr === 'object' && Rr && !Rr.nodeType && Rr;
    const Jp = ef && typeof Vt === 'object' && Vt && !Vt.nodeType && Vt;
    const iw = Jp && Jp.exports === ef;
    const Qp = iw ? ow.Buffer : void 0;
    const Zp = Qp ? Qp.allocUnsafe : void 0;
    function uw(e, t) {
      if (t) return e.slice();
      const r = e.length;
      const n = Zp ? Zp(r) : new e.constructor(r);
      return e.copy(n), n;
    }
    Vt.exports = uw;
  });
  const nf = S((VG, rf) => {
    l();
    c();
    d();
    function sw(e, t) {
      let r = -1;
      const n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    rf.exports = sw;
  });
  const of = S((JG, af) => {
    l();
    c();
    d();
    const lw = Or();
    const cw = ln();
    function dw(e, t) {
      return lw(e, cw(e), t);
    }
    af.exports = dw;
  });
  const sf = S((tV, uf) => {
    l();
    c();
    d();
    const pw = Or();
    const fw = Io();
    function hw(e, t) {
      return pw(e, fw(e), t);
    }
    uf.exports = hw;
  });
  const cf = S((oV, lf) => {
    l();
    c();
    d();
    const mw = Object.prototype;
    const gw = mw.hasOwnProperty;
    function yw(e) {
      const t = e.length;
      const r = new e.constructor(t);
      return (
        t &&
          typeof e[0] === 'string' &&
          gw.call(e, 'index') &&
          ((r.index = e.index), (r.input = e.input)),
        r
      );
    }
    lf.exports = yw;
  });
  const wn = S((lV, pf) => {
    l();
    c();
    d();
    const df = uo();
    function Ew(e) {
      const t = new e.constructor(e.byteLength);
      return new df(t).set(new df(e)), t;
    }
    pf.exports = Ew;
  });
  const hf = S((fV, ff) => {
    l();
    c();
    d();
    const bw = wn();
    function Aw(e, t) {
      const r = t ? bw(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.byteLength);
    }
    ff.exports = Aw;
  });
  const gf = S((yV, mf) => {
    l();
    c();
    d();
    const vw = /\w*$/;
    function Dw(e) {
      const t = new e.constructor(e.source, vw.exec(e));
      return (t.lastIndex = e.lastIndex), t;
    }
    mf.exports = Dw;
  });
  const vf = S((vV, Af) => {
    l();
    c();
    d();
    const yf = At();
    const Ef = yf ? yf.prototype : void 0;
    const bf = Ef ? Ef.valueOf : void 0;
    function Cw(e) {
      return bf ? Object(bf.call(e)) : {};
    }
    Af.exports = Cw;
  });
  const Cf = S((FV, Df) => {
    l();
    c();
    d();
    const xw = wn();
    function Fw(e, t) {
      const r = t ? xw(e.buffer) : e.buffer;
      return new e.constructor(r, e.byteOffset, e.length);
    }
    Df.exports = Fw;
  });
  const Ff = S((TV, xf) => {
    l();
    c();
    d();
    const Sw = wn();
    const ww = hf();
    const Bw = gf();
    const Tw = vf();
    const _w = Cf();
    const Ow = '[object Boolean]';
    const Rw = '[object Date]';
    const Pw = '[object Map]';
    const Iw = '[object Number]';
    const kw = '[object RegExp]';
    const Nw = '[object Set]';
    const Mw = '[object String]';
    const Lw = '[object Symbol]';
    const jw = '[object ArrayBuffer]';
    const qw = '[object DataView]';
    const $w = '[object Float32Array]';
    const Uw = '[object Float64Array]';
    const Hw = '[object Int8Array]';
    const zw = '[object Int16Array]';
    const Ww = '[object Int32Array]';
    const Gw = '[object Uint8Array]';
    const Vw = '[object Uint8ClampedArray]';
    const Kw = '[object Uint16Array]';
    const Yw = '[object Uint32Array]';
    function Xw(e, t, r) {
      const n = e.constructor;
      switch (t) {
        case jw:
          return Sw(e);
        case Ow:
        case Rw:
          return new n(+e);
        case qw:
          return ww(e, r);
        case $w:
        case Uw:
        case Hw:
        case zw:
        case Ww:
        case Gw:
        case Vw:
        case Kw:
        case Yw:
          return _w(e, r);
        case Pw:
          return new n();
        case Iw:
        case Mw:
          return new n(e);
        case kw:
          return Bw(e);
        case Nw:
          return new n();
        case Lw:
          return Tw(e);
      }
    }
    xf.exports = Xw;
  });
  const Bf = S((PV, wf) => {
    l();
    c();
    d();
    const Jw = We();
    const Sf = Object.create;
    const Qw = (function () {
      function e() {}
      return function (t) {
        if (!Jw(t)) return {};
        if (Sf) return Sf(t);
        e.prototype = t;
        const r = new e();
        return (e.prototype = void 0), r;
      };
    })();
    wf.exports = Qw;
  });
  const _f = S((MV, Tf) => {
    l();
    c();
    d();
    const Zw = Bf();
    const e5 = Dn();
    const t5 = gn();
    function r5(e) {
      return typeof e.constructor === 'function' && !t5(e) ? Zw(e5(e)) : {};
    }
    Tf.exports = r5;
  });
  const Rf = S(($V, Of) => {
    l();
    c();
    d();
    const n5 = wr();
    const a5 = rt();
    const o5 = '[object Map]';
    function i5(e) {
      return a5(e) && n5(e) == o5;
    }
    Of.exports = i5;
  });
  const Nf = S((WV, kf) => {
    l();
    c();
    d();
    const u5 = Rf();
    const s5 = hn();
    const Pf = mn();
    const If = Pf && Pf.isMap;
    const l5 = If ? s5(If) : u5;
    kf.exports = l5;
  });
  const Lf = S((YV, Mf) => {
    l();
    c();
    d();
    const c5 = wr();
    const d5 = rt();
    const p5 = '[object Set]';
    function f5(e) {
      return d5(e) && c5(e) == p5;
    }
    Mf.exports = f5;
  });
  const Uf = S((ZV, $f) => {
    l();
    c();
    d();
    const h5 = Lf();
    const m5 = hn();
    const jf = mn();
    const qf = jf && jf.isSet;
    const g5 = qf ? m5(qf) : h5;
    $f.exports = g5;
  });
  const Vf = S((nK, Gf) => {
    l();
    c();
    d();
    const y5 = an();
    const E5 = Wp();
    const b5 = vn();
    const A5 = Kp();
    const v5 = Xp();
    const D5 = tf();
    const C5 = nf();
    const x5 = of();
    const F5 = sf();
    const S5 = yo();
    const w5 = ko();
    const B5 = wr();
    const T5 = cf();
    const _5 = Ff();
    const O5 = _f();
    const R5 = Ge();
    const P5 = dn();
    const I5 = Nf();
    const k5 = We();
    const N5 = Uf();
    const M5 = Ht();
    const L5 = Cn();
    const j5 = 1;
    const q5 = 2;
    const $5 = 4;
    const Hf = '[object Arguments]';
    const U5 = '[object Array]';
    const H5 = '[object Boolean]';
    const z5 = '[object Date]';
    const W5 = '[object Error]';
    const zf = '[object Function]';
    const G5 = '[object GeneratorFunction]';
    const V5 = '[object Map]';
    const K5 = '[object Number]';
    const Wf = '[object Object]';
    const Y5 = '[object RegExp]';
    const X5 = '[object Set]';
    const J5 = '[object String]';
    const Q5 = '[object Symbol]';
    const Z5 = '[object WeakMap]';
    const e3 = '[object ArrayBuffer]';
    const t3 = '[object DataView]';
    const r3 = '[object Float32Array]';
    const n3 = '[object Float64Array]';
    const a3 = '[object Int8Array]';
    const o3 = '[object Int16Array]';
    const i3 = '[object Int32Array]';
    const u3 = '[object Uint8Array]';
    const s3 = '[object Uint8ClampedArray]';
    const l3 = '[object Uint16Array]';
    const c3 = '[object Uint32Array]';
    const le = {};
    le[Hf] =
      le[U5] =
      le[e3] =
      le[t3] =
      le[H5] =
      le[z5] =
      le[r3] =
      le[n3] =
      le[a3] =
      le[o3] =
      le[i3] =
      le[V5] =
      le[K5] =
      le[Wf] =
      le[Y5] =
      le[X5] =
      le[J5] =
      le[Q5] =
      le[u3] =
      le[s3] =
      le[l3] =
      le[c3] =
        !0;
    le[W5] = le[zf] = le[Z5] = !1;
    function Bn(e, t, r, n, a, o) {
      let i;
      const u = t & j5;
      const s = t & q5;
      const p = t & $5;
      if ((r && (i = a ? r(e, n, a, o) : r(e)), i !== void 0)) return i;
      if (!k5(e)) return e;
      const y = R5(e);
      if (y) {
        if (((i = T5(e)), !u)) return C5(e, i);
      } else {
        const b = B5(e);
        const m = b == zf || b == G5;
        if (P5(e)) return D5(e, u);
        if (b == Wf || b == Hf || (m && !a)) {
          if (((i = s || m ? {} : O5(e)), !u))
            return s ? F5(e, v5(i, e)) : x5(e, A5(i, e));
        } else {
          if (!le[b]) return a ? e : {};
          i = _5(e, b, u);
        }
      }
      o || (o = new y5());
      const g = o.get(e);
      if (g) return g;
      o.set(e, i),
        N5(e)
          ? e.forEach((x) => {
              i.add(Bn(x, t, r, x, e, o));
            })
          : I5(e) &&
            e.forEach((x, F) => {
              i.set(F, Bn(x, t, r, F, e, o));
            });
      const A = p ? (s ? w5 : S5) : s ? L5 : M5;
      const E = y ? void 0 : A(e);
      return (
        E5(E || e, (x, F) => {
          E && ((F = x), (x = e[F])), b5(i, F, Bn(x, t, r, F, e, o));
        }),
        i
      );
    }
    Gf.exports = Bn;
  });
  const Yf = S((uK, Kf) => {
    l();
    c();
    d();
    const d3 = Vf();
    const p3 = 1;
    const f3 = 4;
    function h3(e) {
      return d3(e, p3 | f3);
    }
    Kf.exports = h3;
  });
  const a0 = S((KK, n0) => {
    l();
    c();
    d();
    function G3(e) {
      return function (t, r, n) {
        for (let a = -1, o = Object(t), i = n(t), u = i.length; u--; ) {
          const s = i[e ? u : ++a];
          if (r(o[s], s, o) === !1) break;
        }
        return t;
      };
    }
    n0.exports = G3;
  });
  const i0 = S((QK, o0) => {
    l();
    c();
    d();
    const V3 = a0();
    const K3 = V3();
    o0.exports = K3;
  });
  const s0 = S((rY, u0) => {
    l();
    c();
    d();
    const Y3 = i0();
    const X3 = Ht();
    function J3(e, t) {
      return e && Y3(e, t, X3);
    }
    u0.exports = J3;
  });
  const In = S((iY, l0) => {
    l();
    c();
    d();
    const Q3 = An();
    const Z3 = s0();
    const eB = Oo();
    function tB(e, t) {
      const r = {};
      return (
        (t = eB(t, 3)),
        Z3(e, (n, a, o) => {
          Q3(r, a, t(n, a, o));
        }),
        r
      );
    }
    l0.exports = tB;
  });
  const d0 = S((cY, c0) => {
    l();
    c();
    d();
    const rB = Po();
    const nB = To();
    function aB(e, t) {
      return rB(e, t, (r, n) => nB(e, n));
    }
    c0.exports = aB;
  });
  const m0 = S((hY, h0) => {
    l();
    c();
    d();
    const p0 = At();
    const oB = cn();
    const iB = Ge();
    const f0 = p0 ? p0.isConcatSpreadable : void 0;
    function uB(e) {
      return iB(e) || oB(e) || !!(f0 && e && e[f0]);
    }
    h0.exports = uB;
  });
  const E0 = S((EY, y0) => {
    l();
    c();
    d();
    const sB = sn();
    const lB = m0();
    function g0(e, t, r, n, a) {
      let o = -1;
      const i = e.length;
      for (r || (r = lB), a || (a = []); ++o < i; ) {
        const u = e[o];
        t > 0 && r(u)
          ? t > 1
            ? g0(u, t - 1, r, n, a)
            : sB(a, u)
          : n || (a[a.length] = u);
      }
      return a;
    }
    y0.exports = g0;
  });
  const A0 = S((DY, b0) => {
    l();
    c();
    d();
    const cB = E0();
    function dB(e) {
      const t = e == null ? 0 : e.length;
      return t ? cB(e, 1) : [];
    }
    b0.exports = dB;
  });
  const D0 = S((SY, v0) => {
    l();
    c();
    d();
    function pB(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    v0.exports = pB;
  });
  const F0 = S((_Y, x0) => {
    l();
    c();
    d();
    const fB = D0();
    const C0 = Math.max;
    function hB(e, t, r) {
      return (
        (t = C0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, o = C0(n.length - t, 0), i = Array(o);
            ++a < o;

          )
            i[a] = n[t + a];
          a = -1;
          for (var u = Array(t + 1); ++a < t; ) u[a] = n[a];
          return (u[t] = r(i)), fB(e, this, u);
        }
      );
    }
    x0.exports = hB;
  });
  const w0 = S((IY, S0) => {
    l();
    c();
    d();
    function mB(e) {
      return function () {
        return e;
      };
    }
    S0.exports = mB;
  });
  const _0 = S((LY, T0) => {
    l();
    c();
    d();
    const gB = w0();
    const B0 = Ro();
    const yB = _o();
    const EB = B0
      ? function (e, t) {
          return B0(e, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: gB(t),
            writable: !0,
          });
        }
      : yB;
    T0.exports = EB;
  });
  const R0 = S((UY, O0) => {
    l();
    c();
    d();
    const bB = 800;
    const AB = 16;
    const vB = Date.now;
    function DB(e) {
      let t = 0;
      let r = 0;
      return function () {
        const n = vB();
        const a = AB - (n - r);
        if (((r = n), a > 0)) {
          if (++t >= bB) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    O0.exports = DB;
  });
  const I0 = S((GY, P0) => {
    l();
    c();
    d();
    const CB = _0();
    const xB = R0();
    const FB = xB(CB);
    P0.exports = FB;
  });
  const N0 = S((XY, k0) => {
    l();
    c();
    d();
    const SB = A0();
    const wB = F0();
    const BB = I0();
    function TB(e) {
      return BB(wB(e, void 0, SB), `${e}`);
    }
    k0.exports = TB;
  });
  const L0 = S((eX, M0) => {
    l();
    c();
    d();
    const _B = d0();
    const OB = N0();
    const RB = OB((e, t) => (e == null ? {} : _B(e, t)));
    M0.exports = RB;
  });
  const Nn = S((aX, z0) => {
    l();
    c();
    d();
    function kn(e) {
      return Array.prototype.slice.apply(e);
    }
    const U0 = 'pending';
    const j0 = 'resolved';
    const q0 = 'rejected';
    function ae(e) {
      (this.status = U0),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(
            this,
            this._continueWith.bind(this),
            this._failWith.bind(this)
          );
    }
    function Pr(e) {
      return e && typeof e.then === 'function';
    }
    function PB(e) {
      return e;
    }
    ae.prototype = {
      then(e, t) {
        const r = ae.unresolved()._setParent(this);
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({ promise: r, nextFn: e, catchFn: t }), r
            );
          if (t)
            try {
              const n = t(this._error);
              return Pr(n)
                ? (this._chainPromiseData(n, r), r)
                : ae.resolve(n)._setParent(this);
            } catch (a) {
              return ae.reject(a)._setParent(this);
            }
          return ae.reject(this._error)._setParent(this);
        }
        return (
          this._continuations.push({ promise: r, nextFn: e, catchFn: t }),
          this._runResolutions(),
          r
        );
      },
      catch(e) {
        if (this._isResolved()) return ae.resolve(this._data)._setParent(this);
        const t = ae.unresolved()._setParent(this);
        return (
          this._continuations.push({ promise: t, catchFn: e }),
          this._runRejections(),
          t
        );
      },
      finally(e) {
        let t = !1;
        function r(n, a) {
          if (!t) {
            (t = !0), e || (e = PB);
            const o = e(n);
            return Pr(o)
              ? o.then(() => {
                  if (a) throw a;
                  return n;
                })
              : n;
          }
        }
        return this.then((n) => r(n)).catch((n) => r(null, n));
      },
      pause() {
        return (this._paused = !0), this;
      },
      resume() {
        const e = this._findFirstPaused();
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        );
      },
      _findAncestry() {
        return this._continuations.reduce((e, t) => {
          if (t.promise) {
            const r = {
              promise: t.promise,
              children: t.promise._findAncestry(),
            };
            e.push(r);
          }
          return e;
        }, []);
      },
      _setParent(e) {
        if (this._parent) throw new Error('parent already set');
        return (this._parent = e), this;
      },
      _continueWith(e) {
        const t = this._findFirstPending();
        t && ((t._data = e), t._setResolved());
      },
      _findFirstPending() {
        return this._findFirstAncestor((e) => e._isPending && e._isPending());
      },
      _findFirstPaused() {
        return this._findFirstAncestor((e) => e._paused);
      },
      _findFirstAncestor(e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent);
        return r;
      },
      _failWith(e) {
        const t = this._findFirstPending();
        t && ((t._error = e), t._setRejected());
      },
      _takeContinuations() {
        return this._continuations.splice(0, this._continuations.length);
      },
      _runRejections() {
        if (!(this._paused || !this._isRejected())) {
          const e = this._error;
          const t = this._takeContinuations();
          const r = this;
          t.forEach((n) => {
            if (n.catchFn)
              try {
                const a = n.catchFn(e);
                r._handleUserFunctionResult(a, n.promise);
              } catch (o) {
                n.promise.reject(o);
              }
            else n.promise.reject(e);
          });
        }
      },
      _runResolutions() {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          const e = this._takeContinuations();
          const t = this._data;
          const r = this;
          if (
            (e.forEach((n) => {
              if (n.nextFn)
                try {
                  const a = n.nextFn(t);
                  r._handleUserFunctionResult(a, n.promise);
                } catch (o) {
                  r._handleResolutionError(o, n);
                }
              else n.promise && n.promise.resolve(t);
            }),
            Pr(this._data))
          )
            return this._handleWhenResolvedDataIsPromise(this._data);
        }
      },
      _handleResolutionError(e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e);
            return;
          } catch (r) {
            e = r;
          }
        t.promise && t.promise.reject(e);
      },
      _handleWhenResolvedDataIsPromise(e) {
        const t = this;
        return e
          .then((r) => {
            (t._data = r), t._runResolutions();
          })
          .catch((r) => {
            (t._error = r), t._setRejected(), t._runRejections();
          });
      },
      _handleUserFunctionResult(e, t) {
        Pr(e) ? this._chainPromiseData(e, t) : t.resolve(e);
      },
      _chainPromiseData(e, t) {
        e.then((r) => {
          t.resolve(r);
        }).catch((r) => {
          t.reject(r);
        });
      },
      _setResolved() {
        (this.status = j0), this._paused || this._runResolutions();
      },
      _setRejected() {
        (this.status = q0), this._paused || this._runRejections();
      },
      _isPending() {
        return this.status === U0;
      },
      _isResolved() {
        return this.status === j0;
      },
      _isRejected() {
        return this.status === q0;
      },
    };
    ae.resolve = function (e) {
      return new ae((t, r) => {
        Pr(e)
          ? e
              .then((n) => {
                t(n);
              })
              .catch((n) => {
                r(n);
              })
          : t(e);
      });
    };
    ae.reject = function (e) {
      return new ae((t, r) => {
        r(e);
      });
    };
    ae.unresolved = function () {
      return new ae(function (e, t) {
        (this.resolve = e), (this.reject = t);
      });
    };
    ae.all = function () {
      let e = kn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ae((t, r) => {
              const n = [];
              let a = 0;
              const o = function () {
                a === e.length && t(n);
              };
              let i = !1;
              const u = function (s) {
                i || ((i = !0), r(s));
              };
              e.forEach((s, p) => {
                ae.resolve(s)
                  .then((y) => {
                    (n[p] = y), (a += 1), o();
                  })
                  .catch((y) => {
                    u(y);
                  });
              });
            })
          : ae.resolve([])
      );
    };
    function $0(e) {
      return typeof window < 'u' && 'AggregateError' in window
        ? new window.AggregateError(e)
        : { errors: e };
    }
    ae.any = function () {
      let e = kn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ae((t, r) => {
              const n = [];
              let a = 0;
              const o = function () {
                a === e.length && r($0(n));
              };
              let i = !1;
              const u = function (s) {
                i || ((i = !0), t(s));
              };
              e.forEach((s, p) => {
                ae.resolve(s)
                  .then((y) => {
                    u(y);
                  })
                  .catch((y) => {
                    (n[p] = y), (a += 1), o();
                  });
              });
            })
          : ae.reject($0([]))
      );
    };
    ae.allSettled = function () {
      let e = kn(arguments);
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new ae((t) => {
              const r = [];
              let n = 0;
              const a = function () {
                (n += 1), n === e.length && t(r);
              };
              e.forEach((o, i) => {
                ae.resolve(o)
                  .then((u) => {
                    (r[i] = { status: 'fulfilled', value: u }), a();
                  })
                  .catch((u) => {
                    (r[i] = { status: 'rejected', reason: u }), a();
                  });
              });
            })
          : ae.resolve([])
      );
    };
    if (Promise === ae)
      throw new Error(
        'Please use SynchronousPromise.installGlobally() to install globally'
      );
    const H0 = Promise;
    ae.installGlobally = function (e) {
      if (Promise === ae) return e;
      const t = IB(e);
      return (Promise = ae), t;
    };
    ae.uninstallGlobally = function () {
      Promise === ae && (Promise = H0);
    };
    function IB(e) {
      if (typeof e > 'u' || e.__patched) return e;
      const t = e;
      return (
        (e = function () {
          const r = H0;
          t.apply(this, kn(arguments));
        }),
        (e.__patched = !0),
        e
      );
    }
    z0.exports = { SynchronousPromise: ae };
  });
  const Qo = S((wX, G0) => {
    l();
    c();
    d();
    const NB = vt();
    const MB = Dn();
    const LB = rt();
    const jB = '[object Object]';
    const qB = Function.prototype;
    const $B = Object.prototype;
    const W0 = qB.toString;
    const UB = $B.hasOwnProperty;
    const HB = W0.call(Object);
    function zB(e) {
      if (!LB(e) || NB(e) != jB) return !1;
      const t = MB(e);
      if (t === null) return !0;
      const r = UB.call(t, 'constructor') && t.constructor;
      return typeof r === 'function' && r instanceof r && W0.call(r) == HB;
    }
    G0.exports = zB;
  });
  const K0 = S((OX, V0) => {
    l();
    c();
    d();
    V0.exports = WB;
    function WB(e, t) {
      if (Zo('noDeprecation')) return e;
      let r = !1;
      function n() {
        if (!r) {
          if (Zo('throwDeprecation')) throw new Error(t);
          Zo('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0);
        }
        return e.apply(this, arguments);
      }
      return n;
    }
    function Zo(e) {
      try {
        if (!window.localStorage) return !1;
      } catch {
        return !1;
      }
      const t = window.localStorage[e];
      return t == null ? !1 : String(t).toLowerCase() === 'true';
    }
  });
  const th = S((eJ, eh) => {
    l();
    c();
    d();
    eh.exports = function () {
      if (
        typeof Symbol !== 'function' ||
        typeof Object.getOwnPropertySymbols !== 'function'
      )
        return !1;
      if (typeof Symbol.iterator === 'symbol') return !0;
      const t = {};
      let r = Symbol('test');
      const n = Object(r);
      if (
        typeof r === 'string' ||
        Object.prototype.toString.call(r) !== '[object Symbol]' ||
        Object.prototype.toString.call(n) !== '[object Symbol]'
      )
        return !1;
      const a = 42;
      t[r] = a;
      for (r in t) return !1;
      if (
        (typeof Object.keys === 'function' && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames === 'function' &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1;
      const o = Object.getOwnPropertySymbols(t);
      if (
        o.length !== 1 ||
        o[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1;
      if (typeof Object.getOwnPropertyDescriptor === 'function') {
        const i = Object.getOwnPropertyDescriptor(t, r);
        if (i.value !== a || i.enumerable !== !0) return !1;
      }
      return !0;
    };
  });
  const ah = S((aJ, nh) => {
    l();
    c();
    d();
    const rh = typeof Symbol < 'u' && Symbol;
    const uT = th();
    nh.exports = function () {
      return typeof rh !== 'function' ||
        typeof Symbol !== 'function' ||
        typeof rh('foo') !== 'symbol' ||
        typeof Symbol('bar') !== 'symbol'
        ? !1
        : uT();
    };
  });
  const uh = S((sJ, ih) => {
    l();
    c();
    d();
    const oh = { foo: {} };
    const sT = Object;
    ih.exports = function () {
      return (
        { __proto__: oh }.foo === oh.foo && !({ __proto__: null } instanceof sT)
      );
    };
  });
  const lh = S((pJ, sh) => {
    l();
    c();
    d();
    const lT = 'Function.prototype.bind called on incompatible ';
    const ni = Array.prototype.slice;
    const cT = Object.prototype.toString;
    const dT = '[object Function]';
    sh.exports = function (t) {
      const r = this;
      if (typeof r !== 'function' || cT.call(r) !== dT)
        throw new TypeError(lT + r);
      for (
        var n = ni.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              const y = r.apply(this, n.concat(ni.call(arguments)));
              return Object(y) === y ? y : this;
            }
            return r.apply(t, n.concat(ni.call(arguments)));
          },
          i = Math.max(0, r.length - n.length),
          u = [],
          s = 0;
        s < i;
        s++
      )
        u.push(`$${s}`);
      if (
        ((a = Function(
          'binder',
          `return function (${u.join(
            ','
          )}){ return binder.apply(this,arguments); }`
        )(o)),
        r.prototype)
      ) {
        const p = function () {};
        (p.prototype = r.prototype),
          (a.prototype = new p()),
          (p.prototype = null);
      }
      return a;
    };
  });
  const $n = S((gJ, ch) => {
    l();
    c();
    d();
    const pT = lh();
    ch.exports = Function.prototype.bind || pT;
  });
  const ph = S((AJ, dh) => {
    l();
    c();
    d();
    const fT = $n();
    dh.exports = fT.call(Function.call, Object.prototype.hasOwnProperty);
  });
  const zn = S((xJ, yh) => {
    l();
    c();
    d();
    let te;
    const Qt = SyntaxError;
    const gh = Function;
    const Jt = TypeError;
    const ai = function (e) {
      try {
        return gh(`"use strict"; return (${e}).constructor;`)();
      } catch {}
    };
    let Ft = Object.getOwnPropertyDescriptor;
    if (Ft)
      try {
        Ft({}, '');
      } catch {
        Ft = null;
      }
    const oi = function () {
      throw new Jt();
    };
    const hT = Ft
      ? (function () {
          try {
            return arguments.callee, oi;
          } catch {
            try {
              return Ft(arguments, 'callee').get;
            } catch {
              return oi;
            }
          }
        })()
      : oi;
    const Yt = ah()();
    const mT = uh()();
    const De =
      Object.getPrototypeOf ||
      (mT
        ? function (e) {
            return e.__proto__;
          }
        : null);
    const Xt = {};
    const gT = typeof Uint8Array > 'u' || !De ? te : De(Uint8Array);
    const St = {
      '%AggregateError%': typeof AggregateError > 'u' ? te : AggregateError,
      '%Array%': Array,
      '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? te : ArrayBuffer,
      '%ArrayIteratorPrototype%': Yt && De ? De([][Symbol.iterator]()) : te,
      '%AsyncFromSyncIteratorPrototype%': te,
      '%AsyncFunction%': Xt,
      '%AsyncGenerator%': Xt,
      '%AsyncGeneratorFunction%': Xt,
      '%AsyncIteratorPrototype%': Xt,
      '%Atomics%': typeof Atomics > 'u' ? te : Atomics,
      '%BigInt%': typeof BigInt > 'u' ? te : BigInt,
      '%BigInt64Array%': typeof BigInt64Array > 'u' ? te : BigInt64Array,
      '%BigUint64Array%': typeof BigUint64Array > 'u' ? te : BigUint64Array,
      '%Boolean%': Boolean,
      '%DataView%': typeof DataView > 'u' ? te : DataView,
      '%Date%': Date,
      '%decodeURI%': decodeURI,
      '%decodeURIComponent%': decodeURIComponent,
      '%encodeURI%': encodeURI,
      '%encodeURIComponent%': encodeURIComponent,
      '%Error%': Error,
      '%eval%': eval,
      '%EvalError%': EvalError,
      '%Float32Array%': typeof Float32Array > 'u' ? te : Float32Array,
      '%Float64Array%': typeof Float64Array > 'u' ? te : Float64Array,
      '%FinalizationRegistry%':
        typeof FinalizationRegistry > 'u' ? te : FinalizationRegistry,
      '%Function%': gh,
      '%GeneratorFunction%': Xt,
      '%Int8Array%': typeof Int8Array > 'u' ? te : Int8Array,
      '%Int16Array%': typeof Int16Array > 'u' ? te : Int16Array,
      '%Int32Array%': typeof Int32Array > 'u' ? te : Int32Array,
      '%isFinite%': isFinite,
      '%isNaN%': isNaN,
      '%IteratorPrototype%': Yt && De ? De(De([][Symbol.iterator]())) : te,
      '%JSON%': typeof JSON === 'object' ? JSON : te,
      '%Map%': typeof Map > 'u' ? te : Map,
      '%MapIteratorPrototype%':
        typeof Map > 'u' || !Yt || !De ? te : De(new Map()[Symbol.iterator]()),
      '%Math%': Math,
      '%Number%': Number,
      '%Object%': Object,
      '%parseFloat%': parseFloat,
      '%parseInt%': parseInt,
      '%Promise%': typeof Promise > 'u' ? te : Promise,
      '%Proxy%': typeof Proxy > 'u' ? te : Proxy,
      '%RangeError%': RangeError,
      '%ReferenceError%': ReferenceError,
      '%Reflect%': typeof Reflect > 'u' ? te : Reflect,
      '%RegExp%': RegExp,
      '%Set%': typeof Set > 'u' ? te : Set,
      '%SetIteratorPrototype%':
        typeof Set > 'u' || !Yt || !De ? te : De(new Set()[Symbol.iterator]()),
      '%SharedArrayBuffer%':
        typeof SharedArrayBuffer > 'u' ? te : SharedArrayBuffer,
      '%String%': String,
      '%StringIteratorPrototype%': Yt && De ? De(''[Symbol.iterator]()) : te,
      '%Symbol%': Yt ? Symbol : te,
      '%SyntaxError%': Qt,
      '%ThrowTypeError%': hT,
      '%TypedArray%': gT,
      '%TypeError%': Jt,
      '%Uint8Array%': typeof Uint8Array > 'u' ? te : Uint8Array,
      '%Uint8ClampedArray%':
        typeof Uint8ClampedArray > 'u' ? te : Uint8ClampedArray,
      '%Uint16Array%': typeof Uint16Array > 'u' ? te : Uint16Array,
      '%Uint32Array%': typeof Uint32Array > 'u' ? te : Uint32Array,
      '%URIError%': URIError,
      '%WeakMap%': typeof WeakMap > 'u' ? te : WeakMap,
      '%WeakRef%': typeof WeakRef > 'u' ? te : WeakRef,
      '%WeakSet%': typeof WeakSet > 'u' ? te : WeakSet,
    };
    if (De)
      try {
        null.error;
      } catch (e) {
        (fh = De(De(e))), (St['%Error.prototype%'] = fh);
      }
    let fh;
    const yT = function e(t) {
      let r;
      if (t === '%AsyncFunction%') r = ai('async function () {}');
      else if (t === '%GeneratorFunction%') r = ai('function* () {}');
      else if (t === '%AsyncGeneratorFunction%')
        r = ai('async function* () {}');
      else if (t === '%AsyncGenerator%') {
        const n = e('%AsyncGeneratorFunction%');
        n && (r = n.prototype);
      } else if (t === '%AsyncIteratorPrototype%') {
        const a = e('%AsyncGenerator%');
        a && De && (r = De(a.prototype));
      }
      return (St[t] = r), r;
    };
    const hh = {
      '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
      '%ArrayPrototype%': ['Array', 'prototype'],
      '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
      '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
      '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
      '%ArrayProto_values%': ['Array', 'prototype', 'values'],
      '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
      '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
      '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype',
      ],
      '%BooleanPrototype%': ['Boolean', 'prototype'],
      '%DataViewPrototype%': ['DataView', 'prototype'],
      '%DatePrototype%': ['Date', 'prototype'],
      '%ErrorPrototype%': ['Error', 'prototype'],
      '%EvalErrorPrototype%': ['EvalError', 'prototype'],
      '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
      '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
      '%FunctionPrototype%': ['Function', 'prototype'],
      '%Generator%': ['GeneratorFunction', 'prototype'],
      '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
      '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
      '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
      '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
      '%JSONParse%': ['JSON', 'parse'],
      '%JSONStringify%': ['JSON', 'stringify'],
      '%MapPrototype%': ['Map', 'prototype'],
      '%NumberPrototype%': ['Number', 'prototype'],
      '%ObjectPrototype%': ['Object', 'prototype'],
      '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
      '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
      '%PromisePrototype%': ['Promise', 'prototype'],
      '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
      '%Promise_all%': ['Promise', 'all'],
      '%Promise_reject%': ['Promise', 'reject'],
      '%Promise_resolve%': ['Promise', 'resolve'],
      '%RangeErrorPrototype%': ['RangeError', 'prototype'],
      '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
      '%RegExpPrototype%': ['RegExp', 'prototype'],
      '%SetPrototype%': ['Set', 'prototype'],
      '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
      '%StringPrototype%': ['String', 'prototype'],
      '%SymbolPrototype%': ['Symbol', 'prototype'],
      '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
      '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
      '%TypeErrorPrototype%': ['TypeError', 'prototype'],
      '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
      '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
      '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
      '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
      '%URIErrorPrototype%': ['URIError', 'prototype'],
      '%WeakMapPrototype%': ['WeakMap', 'prototype'],
      '%WeakSetPrototype%': ['WeakSet', 'prototype'],
    };
    const Mr = $n();
    const Un = ph();
    const ET = Mr.call(Function.call, Array.prototype.concat);
    const bT = Mr.call(Function.apply, Array.prototype.splice);
    const mh = Mr.call(Function.call, String.prototype.replace);
    const Hn = Mr.call(Function.call, String.prototype.slice);
    const AT = Mr.call(Function.call, RegExp.prototype.exec);
    const vT =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    const DT = /\\(\\)?/g;
    const CT = function (t) {
      const r = Hn(t, 0, 1);
      const n = Hn(t, -1);
      if (r === '%' && n !== '%')
        throw new Qt('invalid intrinsic syntax, expected closing `%`');
      if (n === '%' && r !== '%')
        throw new Qt('invalid intrinsic syntax, expected opening `%`');
      const a = [];
      return (
        mh(t, vT, (o, i, u, s) => {
          a[a.length] = u ? mh(s, DT, '$1') : i || o;
        }),
        a
      );
    };
    const xT = function (t, r) {
      let n = t;
      let a;
      if ((Un(hh, n) && ((a = hh[n]), (n = `%${a[0]}%`)), Un(St, n))) {
        let o = St[n];
        if ((o === Xt && (o = yT(n)), typeof o > 'u' && !r))
          throw new Jt(
            `intrinsic ${t} exists, but is not available. Please file an issue!`
          );
        return { alias: a, name: n, value: o };
      }
      throw new Qt(`intrinsic ${t} does not exist!`);
    };
    yh.exports = function (t, r) {
      if (typeof t !== 'string' || t.length === 0)
        throw new Jt('intrinsic name must be a non-empty string');
      if (arguments.length > 1 && typeof r !== 'boolean')
        throw new Jt('"allowMissing" argument must be a boolean');
      if (AT(/^%?[^%]*%?$/, t) === null)
        throw new Qt(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
        );
      const n = CT(t);
      let a = n.length > 0 ? n[0] : '';
      const o = xT(`%${a}%`, r);
      let i = o.name;
      let u = o.value;
      let s = !1;
      const p = o.alias;
      p && ((a = p[0]), bT(n, ET([0, 1], p)));
      for (let y = 1, b = !0; y < n.length; y += 1) {
        const m = n[y];
        const g = Hn(m, 0, 1);
        const A = Hn(m, -1);
        if (
          (g === '"' ||
            g === "'" ||
            g === '`' ||
            A === '"' ||
            A === "'" ||
            A === '`') &&
          g !== A
        )
          throw new Qt('property names with quotes must have matching quotes');
        if (
          ((m === 'constructor' || !b) && (s = !0),
          (a += `.${m}`),
          (i = `%${a}%`),
          Un(St, i))
        )
          u = St[i];
        else if (u != null) {
          if (!(m in u)) {
            if (!r)
              throw new Jt(
                `base intrinsic for ${t} exists, but the property is not available.`
              );
            return;
          }
          if (Ft && y + 1 >= n.length) {
            const E = Ft(u, m);
            (b = !!E),
              b && 'get' in E && !('originalValue' in E.get)
                ? (u = E.get)
                : (u = u[m]);
          } else (b = Un(u, m)), (u = u[m]);
          b && !s && (St[i] = u);
        }
      }
      return u;
    };
  });
  const Ch = S((BJ, Wn) => {
    l();
    c();
    d();
    const ii = $n();
    const Zt = zn();
    const Ah = Zt('%Function.prototype.apply%');
    const vh = Zt('%Function.prototype.call%');
    const Dh = Zt('%Reflect.apply%', !0) || ii.call(vh, Ah);
    const Eh = Zt('%Object.getOwnPropertyDescriptor%', !0);
    let wt = Zt('%Object.defineProperty%', !0);
    const FT = Zt('%Math.max%');
    if (wt)
      try {
        wt({}, 'a', { value: 1 });
      } catch {
        wt = null;
      }
    Wn.exports = function (t) {
      const r = Dh(ii, vh, arguments);
      if (Eh && wt) {
        const n = Eh(r, 'length');
        n.configurable &&
          wt(r, 'length', {
            value: 1 + FT(0, t.length - (arguments.length - 1)),
          });
      }
      return r;
    };
    const bh = function () {
      return Dh(ii, Ah, arguments);
    };
    wt ? wt(Wn.exports, 'apply', { value: bh }) : (Wn.exports.apply = bh);
  });
  const wh = S((RJ, Sh) => {
    l();
    c();
    d();
    const xh = zn();
    const Fh = Ch();
    const ST = Fh(xh('String.prototype.indexOf'));
    Sh.exports = function (t, r) {
      const n = xh(t, !!r);
      return typeof n === 'function' && ST(t, '.prototype.') > -1 ? Fh(n) : n;
    };
  });
  const Bh = S(() => {
    l();
    c();
    d();
  });
  const Kh = S(($J, Vh) => {
    l();
    c();
    d();
    const gi = typeof Map === 'function' && Map.prototype;
    const ui =
      Object.getOwnPropertyDescriptor && gi
        ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
        : null;
    const Vn = gi && ui && typeof ui.get === 'function' ? ui.get : null;
    const Th = gi && Map.prototype.forEach;
    const yi = typeof Set === 'function' && Set.prototype;
    const si =
      Object.getOwnPropertyDescriptor && yi
        ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
        : null;
    const Kn = yi && si && typeof si.get === 'function' ? si.get : null;
    const _h = yi && Set.prototype.forEach;
    const wT = typeof WeakMap === 'function' && WeakMap.prototype;
    const jr = wT ? WeakMap.prototype.has : null;
    const BT = typeof WeakSet === 'function' && WeakSet.prototype;
    const qr = BT ? WeakSet.prototype.has : null;
    const TT = typeof WeakRef === 'function' && WeakRef.prototype;
    const Oh = TT ? WeakRef.prototype.deref : null;
    const _T = Boolean.prototype.valueOf;
    const OT = Object.prototype.toString;
    const RT = Function.prototype.toString;
    const PT = String.prototype.match;
    const Ei = String.prototype.slice;
    const ft = String.prototype.replace;
    const IT = String.prototype.toUpperCase;
    const Rh = String.prototype.toLowerCase;
    const $h = RegExp.prototype.test;
    const Ph = Array.prototype.concat;
    const Ye = Array.prototype.join;
    const kT = Array.prototype.slice;
    const Ih = Math.floor;
    const di = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
    const li = Object.getOwnPropertySymbols;
    const pi =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? Symbol.prototype.toString
        : null;
    const er =
      typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
    const Be =
      typeof Symbol === 'function' &&
      Symbol.toStringTag &&
      (typeof Symbol.toStringTag === er || 'symbol')
        ? Symbol.toStringTag
        : null;
    const Uh = Object.prototype.propertyIsEnumerable;
    const kh =
      (typeof Reflect === 'function'
        ? Reflect.getPrototypeOf
        : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype
        ? function (e) {
            return e.__proto__;
          }
        : null);
    function Nh(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e !== e ||
        (e && e > -1e3 && e < 1e3) ||
        $h.call(/e/, t)
      )
        return t;
      const r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof e === 'number') {
        const n = e < 0 ? -Ih(-e) : Ih(e);
        if (n !== e) {
          const a = String(n);
          const o = Ei.call(t, a.length + 1);
          return `${ft.call(a, r, '$&_')}.${ft.call(
            ft.call(o, /([0-9]{3})/g, '$&_'),
            /_$/,
            ''
          )}`;
        }
      }
      return ft.call(t, r, '$&_');
    }
    const fi = Bh();
    const Mh = fi.custom;
    const Lh = zh(Mh) ? Mh : null;
    Vh.exports = function e(t, r, n, a) {
      const o = r || {};
      if (
        pt(o, 'quoteStyle') &&
        o.quoteStyle !== 'single' &&
        o.quoteStyle !== 'double'
      )
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (
        pt(o, 'maxStringLength') &&
        (typeof o.maxStringLength === 'number'
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        );
      const i = pt(o, 'customInspect') ? o.customInspect : !0;
      if (typeof i !== 'boolean' && i !== 'symbol')
        throw new TypeError(
          'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
        );
      if (
        pt(o, 'indent') &&
        o.indent !== null &&
        o.indent !== '	' &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        );
      if (pt(o, 'numericSeparator') && typeof o.numericSeparator !== 'boolean')
        throw new TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        );
      const u = o.numericSeparator;
      if (typeof t > 'u') return 'undefined';
      if (t === null) return 'null';
      if (typeof t === 'boolean') return t ? 'true' : 'false';
      if (typeof t === 'string') return Gh(t, o);
      if (typeof t === 'number') {
        if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0';
        const s = String(t);
        return u ? Nh(t, s) : s;
      }
      if (typeof t === 'bigint') {
        const p = `${String(t)}n`;
        return u ? Nh(t, p) : p;
      }
      const y = typeof o.depth > 'u' ? 5 : o.depth;
      if ((typeof n > 'u' && (n = 0), n >= y && y > 0 && typeof t === 'object'))
        return hi(t) ? '[Array]' : '[Object]';
      const b = ZT(o, n);
      if (typeof a > 'u') a = [];
      else if (Wh(a, t) >= 0) return '[Circular]';
      function m(X, R, _) {
        if ((R && ((a = kT.call(a)), a.push(R)), _)) {
          const q = { depth: o.depth };
          return (
            pt(o, 'quoteStyle') && (q.quoteStyle = o.quoteStyle),
            e(X, q, n + 1, a)
          );
        }
        return e(X, o, n + 1, a);
      }
      if (typeof t === 'function' && !jh(t)) {
        const g = zT(t);
        const A = Gn(t, m);
        return `[Function${g ? `: ${g}` : ' (anonymous)'}]${
          A.length > 0 ? ` { ${Ye.call(A, ', ')} }` : ''
        }`;
      }
      if (zh(t)) {
        const E = er
          ? ft.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
          : pi.call(t);
        return typeof t === 'object' && !er ? Lr(E) : E;
      }
      if (XT(t)) {
        for (
          var x = `<${Rh.call(String(t.nodeName))}`,
            F = t.attributes || [],
            B = 0;
          B < F.length;
          B++
        )
          x += ` ${F[B].name}=${Hh(NT(F[B].value), 'double', o)}`;
        return (
          (x += '>'),
          t.childNodes && t.childNodes.length && (x += '...'),
          (x += `</${Rh.call(String(t.nodeName))}>`),
          x
        );
      }
      if (hi(t)) {
        if (t.length === 0) return '[]';
        const I = Gn(t, m);
        return b && !QT(I) ? `[${mi(I, b)}]` : `[ ${Ye.call(I, ', ')} ]`;
      }
      if (LT(t)) {
        const L = Gn(t, m);
        return !('cause' in Error.prototype) &&
          'cause' in t &&
          !Uh.call(t, 'cause')
          ? `{ [${String(t)}] ${Ye.call(
              Ph.call(`[cause]: ${m(t.cause)}`, L),
              ', '
            )} }`
          : L.length === 0
          ? `[${String(t)}]`
          : `{ [${String(t)}] ${Ye.call(L, ', ')} }`;
      }
      if (typeof t === 'object' && i) {
        if (Lh && typeof t[Lh] === 'function' && fi)
          return fi(t, { depth: y - n });
        if (i !== 'symbol' && typeof t.inspect === 'function')
          return t.inspect();
      }
      if (WT(t)) {
        const w = [];
        return (
          Th &&
            Th.call(t, (X, R) => {
              w.push(`${m(R, t, !0)} => ${m(X, t)}`);
            }),
          qh('Map', Vn.call(t), w, b)
        );
      }
      if (KT(t)) {
        const k = [];
        return (
          _h &&
            _h.call(t, (X) => {
              k.push(m(X, t));
            }),
          qh('Set', Kn.call(t), k, b)
        );
      }
      if (GT(t)) return ci('WeakMap');
      if (YT(t)) return ci('WeakSet');
      if (VT(t)) return ci('WeakRef');
      if (qT(t)) return Lr(m(Number(t)));
      if (UT(t)) return Lr(m(di.call(t)));
      if ($T(t)) return Lr(_T.call(t));
      if (jT(t)) return Lr(m(String(t)));
      if (!MT(t) && !jh(t)) {
        const N = Gn(t, m);
        const H = kh
          ? kh(t) === Object.prototype
          : t instanceof Object || t.constructor === Object;
        const V = t instanceof Object ? '' : 'null prototype';
        const U =
          !H && Be && Object(t) === t && Be in t
            ? Ei.call(ht(t), 8, -1)
            : V
            ? 'Object'
            : '';
        const Q =
          H || typeof t.constructor !== 'function'
            ? ''
            : t.constructor.name
            ? `${t.constructor.name} `
            : '';
        const ee =
          Q +
          (U || V ? `[${Ye.call(Ph.call([], U || [], V || []), ': ')}] ` : '');
        return N.length === 0
          ? `${ee}{}`
          : b
          ? `${ee}{${mi(N, b)}}`
          : `${ee}{ ${Ye.call(N, ', ')} }`;
      }
      return String(t);
    };
    function Hh(e, t, r) {
      const n = (r.quoteStyle || t) === 'double' ? '"' : "'";
      return n + e + n;
    }
    function NT(e) {
      return ft.call(String(e), /"/g, '&quot;');
    }
    function hi(e) {
      return (
        ht(e) === '[object Array]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function MT(e) {
      return (
        ht(e) === '[object Date]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function jh(e) {
      return (
        ht(e) === '[object RegExp]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function LT(e) {
      return (
        ht(e) === '[object Error]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function jT(e) {
      return (
        ht(e) === '[object String]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function qT(e) {
      return (
        ht(e) === '[object Number]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function $T(e) {
      return (
        ht(e) === '[object Boolean]' &&
        (!Be || !(typeof e === 'object' && Be in e))
      );
    }
    function zh(e) {
      if (er) return e && typeof e === 'object' && e instanceof Symbol;
      if (typeof e === 'symbol') return !0;
      if (!e || typeof e !== 'object' || !pi) return !1;
      try {
        return pi.call(e), !0;
      } catch {}
      return !1;
    }
    function UT(e) {
      if (!e || typeof e !== 'object' || !di) return !1;
      try {
        return di.call(e), !0;
      } catch {}
      return !1;
    }
    const HT =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this;
      };
    function pt(e, t) {
      return HT.call(e, t);
    }
    function ht(e) {
      return OT.call(e);
    }
    function zT(e) {
      if (e.name) return e.name;
      const t = PT.call(RT.call(e), /^function\s*([\w$]+)/);
      return t ? t[1] : null;
    }
    function Wh(e, t) {
      if (e.indexOf) return e.indexOf(t);
      for (let r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
      return -1;
    }
    function WT(e) {
      if (!Vn || !e || typeof e !== 'object') return !1;
      try {
        Vn.call(e);
        try {
          Kn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Map;
      } catch {}
      return !1;
    }
    function GT(e) {
      if (!jr || !e || typeof e !== 'object') return !1;
      try {
        jr.call(e, jr);
        try {
          qr.call(e, qr);
        } catch {
          return !0;
        }
        return e instanceof WeakMap;
      } catch {}
      return !1;
    }
    function VT(e) {
      if (!Oh || !e || typeof e !== 'object') return !1;
      try {
        return Oh.call(e), !0;
      } catch {}
      return !1;
    }
    function KT(e) {
      if (!Kn || !e || typeof e !== 'object') return !1;
      try {
        Kn.call(e);
        try {
          Vn.call(e);
        } catch {
          return !0;
        }
        return e instanceof Set;
      } catch {}
      return !1;
    }
    function YT(e) {
      if (!qr || !e || typeof e !== 'object') return !1;
      try {
        qr.call(e, qr);
        try {
          jr.call(e, jr);
        } catch {
          return !0;
        }
        return e instanceof WeakSet;
      } catch {}
      return !1;
    }
    function XT(e) {
      return !e || typeof e !== 'object'
        ? !1
        : typeof HTMLElement < 'u' && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName === 'string' &&
          typeof e.getAttribute === 'function';
    }
    function Gh(e, t) {
      if (e.length > t.maxStringLength) {
        const r = e.length - t.maxStringLength;
        const n = `... ${r} more character${r > 1 ? 's' : ''}`;
        return Gh(Ei.call(e, 0, t.maxStringLength), t) + n;
      }
      const a = ft.call(ft.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, JT);
      return Hh(a, 'single', t);
    }
    function JT(e) {
      const t = e.charCodeAt(0);
      const r = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t];
      return r ? `\\${r}` : `\\x${t < 16 ? '0' : ''}${IT.call(t.toString(16))}`;
    }
    function Lr(e) {
      return `Object(${e})`;
    }
    function ci(e) {
      return `${e} { ? }`;
    }
    function qh(e, t, r, n) {
      const a = n ? mi(r, n) : Ye.call(r, ', ');
      return `${e} (${t}) {${a}}`;
    }
    function QT(e) {
      for (let t = 0; t < e.length; t++)
        if (
          Wh(
            e[t],
            `
`
          ) >= 0
        )
          return !1;
      return !0;
    }
    function ZT(e, t) {
      let r;
      if (e.indent === '	') r = '	';
      else if (typeof e.indent === 'number' && e.indent > 0)
        r = Ye.call(Array(e.indent + 1), ' ');
      else return null;
      return { base: r, prev: Ye.call(Array(t + 1), r) };
    }
    function mi(e, t) {
      if (e.length === 0) return '';
      const r = `
${t.prev}${t.base}`;
      return `${r + Ye.call(e, `,${r}`)}
${t.prev}`;
    }
    function Gn(e, t) {
      const r = hi(e);
      const n = [];
      if (r) {
        n.length = e.length;
        for (let a = 0; a < e.length; a++) n[a] = pt(e, a) ? t(e[a], e) : '';
      }
      const o = typeof li === 'function' ? li(e) : [];
      let i;
      if (er) {
        i = {};
        for (let u = 0; u < o.length; u++) i[`$${o[u]}`] = o[u];
      }
      for (const s in e)
        pt(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (er && i[`$${s}`] instanceof Symbol) ||
            ($h.call(/[^\w$]/, s)
              ? n.push(`${t(s, e)}: ${t(e[s], e)}`)
              : n.push(`${s}: ${t(e[s], e)}`)));
      if (typeof li === 'function')
        for (let p = 0; p < o.length; p++)
          Uh.call(e, o[p]) && n.push(`[${t(o[p])}]: ${t(e[o[p]], e)}`);
      return n;
    }
  });
  const Xh = S((WJ, Yh) => {
    l();
    c();
    d();
    const bi = zn();
    const tr = wh();
    const e_ = Kh();
    const t_ = bi('%TypeError%');
    const Yn = bi('%WeakMap%', !0);
    const Xn = bi('%Map%', !0);
    const r_ = tr('WeakMap.prototype.get', !0);
    const n_ = tr('WeakMap.prototype.set', !0);
    const a_ = tr('WeakMap.prototype.has', !0);
    const o_ = tr('Map.prototype.get', !0);
    const i_ = tr('Map.prototype.set', !0);
    const u_ = tr('Map.prototype.has', !0);
    const Ai = function (e, t) {
      for (var r = e, n; (n = r.next) !== null; r = n)
        if (n.key === t)
          return (r.next = n.next), (n.next = e.next), (e.next = n), n;
    };
    const s_ = function (e, t) {
      const r = Ai(e, t);
      return r && r.value;
    };
    const l_ = function (e, t, r) {
      const n = Ai(e, t);
      n ? (n.value = r) : (e.next = { key: t, next: e.next, value: r });
    };
    const c_ = function (e, t) {
      return !!Ai(e, t);
    };
    Yh.exports = function () {
      let t;
      let r;
      let n;
      var a = {
        assert(o) {
          if (!a.has(o)) throw new t_(`Side channel does not contain ${e_(o)}`);
        },
        get(o) {
          if (Yn && o && (typeof o === 'object' || typeof o === 'function')) {
            if (t) return r_(t, o);
          } else if (Xn) {
            if (r) return o_(r, o);
          } else if (n) return s_(n, o);
        },
        has(o) {
          if (Yn && o && (typeof o === 'object' || typeof o === 'function')) {
            if (t) return a_(t, o);
          } else if (Xn) {
            if (r) return u_(r, o);
          } else if (n) return c_(n, o);
          return !1;
        },
        set(o, i) {
          Yn && o && (typeof o === 'object' || typeof o === 'function')
            ? (t || (t = new Yn()), n_(t, o, i))
            : Xn
            ? (r || (r = new Xn()), i_(r, o, i))
            : (n || (n = { key: {}, next: null }), l_(n, o, i));
        },
      };
      return a;
    };
  });
  const Jn = S((YJ, Jh) => {
    l();
    c();
    d();
    const d_ = String.prototype.replace;
    const p_ = /%20/g;
    const vi = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' };
    Jh.exports = {
      default: vi.RFC3986,
      formatters: {
        RFC1738(e) {
          return d_.call(e, p_, '+');
        },
        RFC3986(e) {
          return String(e);
        },
      },
      RFC1738: vi.RFC1738,
      RFC3986: vi.RFC3986,
    };
  });
  const Ci = S((ZJ, Zh) => {
    l();
    c();
    d();
    const f_ = Jn();
    const Di = Object.prototype.hasOwnProperty;
    const Bt = Array.isArray;
    const Xe = (function () {
      for (var e = [], t = 0; t < 256; ++t)
        e.push(`%${((t < 16 ? '0' : '') + t.toString(16)).toUpperCase()}`);
      return e;
    })();
    const h_ = function (t) {
      for (; t.length > 1; ) {
        const r = t.pop();
        const n = r.obj[r.prop];
        if (Bt(n)) {
          for (var a = [], o = 0; o < n.length; ++o)
            typeof n[o] < 'u' && a.push(n[o]);
          r.obj[r.prop] = a;
        }
      }
    };
    const Qh = function (t, r) {
      for (
        var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
        a < t.length;
        ++a
      )
        typeof t[a] < 'u' && (n[a] = t[a]);
      return n;
    };
    const m_ = function e(t, r, n) {
      if (!r) return t;
      if (typeof r !== 'object') {
        if (Bt(t)) t.push(r);
        else if (t && typeof t === 'object')
          ((n && (n.plainObjects || n.allowPrototypes)) ||
            !Di.call(Object.prototype, r)) &&
            (t[r] = !0);
        else return [t, r];
        return t;
      }
      if (!t || typeof t !== 'object') return [t].concat(r);
      let a = t;
      return (
        Bt(t) && !Bt(r) && (a = Qh(t, n)),
        Bt(t) && Bt(r)
          ? (r.forEach((o, i) => {
              if (Di.call(t, i)) {
                const u = t[i];
                u && typeof u === 'object' && o && typeof o === 'object'
                  ? (t[i] = e(u, o, n))
                  : t.push(o);
              } else t[i] = o;
            }),
            t)
          : Object.keys(r).reduce((o, i) => {
              const u = r[i];
              return Di.call(o, i) ? (o[i] = e(o[i], u, n)) : (o[i] = u), o;
            }, a)
      );
    };
    const g_ = function (t, r) {
      return Object.keys(r).reduce((n, a) => ((n[a] = r[a]), n), t);
    };
    const y_ = function (e, t, r) {
      const n = e.replace(/\+/g, ' ');
      if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(n);
      } catch {
        return n;
      }
    };
    const E_ = function (t, r, n, a, o) {
      if (t.length === 0) return t;
      let i = t;
      if (
        (typeof t === 'symbol'
          ? (i = Symbol.prototype.toString.call(t))
          : typeof t !== 'string' && (i = String(t)),
        n === 'iso-8859-1')
      )
        return escape(i).replace(
          /%u[0-9a-f]{4}/gi,
          (y) => `%26%23${parseInt(y.slice(2), 16)}%3B`
        );
      for (var u = '', s = 0; s < i.length; ++s) {
        let p = i.charCodeAt(s);
        if (
          p === 45 ||
          p === 46 ||
          p === 95 ||
          p === 126 ||
          (p >= 48 && p <= 57) ||
          (p >= 65 && p <= 90) ||
          (p >= 97 && p <= 122) ||
          (o === f_.RFC1738 && (p === 40 || p === 41))
        ) {
          u += i.charAt(s);
          continue;
        }
        if (p < 128) {
          u += Xe[p];
          continue;
        }
        if (p < 2048) {
          u += Xe[192 | (p >> 6)] + Xe[128 | (p & 63)];
          continue;
        }
        if (p < 55296 || p >= 57344) {
          u +=
            Xe[224 | (p >> 12)] +
            Xe[128 | ((p >> 6) & 63)] +
            Xe[128 | (p & 63)];
          continue;
        }
        (s += 1),
          (p = 65536 + (((p & 1023) << 10) | (i.charCodeAt(s) & 1023))),
          (u +=
            Xe[240 | (p >> 18)] +
            Xe[128 | ((p >> 12) & 63)] +
            Xe[128 | ((p >> 6) & 63)] +
            Xe[128 | (p & 63)]);
      }
      return u;
    };
    const b_ = function (t) {
      for (
        var r = [{ obj: { o: t }, prop: 'o' }], n = [], a = 0;
        a < r.length;
        ++a
      )
        for (
          let o = r[a], i = o.obj[o.prop], u = Object.keys(i), s = 0;
          s < u.length;
          ++s
        ) {
          const p = u[s];
          const y = i[p];
          typeof y === 'object' &&
            y !== null &&
            n.indexOf(y) === -1 &&
            (r.push({ obj: i, prop: p }), n.push(y));
        }
      return h_(r), t;
    };
    const A_ = function (t) {
      return Object.prototype.toString.call(t) === '[object RegExp]';
    };
    const v_ = function (t) {
      return !t || typeof t !== 'object'
        ? !1
        : !!(
            t.constructor &&
            t.constructor.isBuffer &&
            t.constructor.isBuffer(t)
          );
    };
    const D_ = function (t, r) {
      return [].concat(t, r);
    };
    const C_ = function (t, r) {
      if (Bt(t)) {
        for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]));
        return n;
      }
      return r(t);
    };
    Zh.exports = {
      arrayToObject: Qh,
      assign: g_,
      combine: D_,
      compact: b_,
      decode: y_,
      encode: E_,
      isBuffer: v_,
      isRegExp: A_,
      maybeMap: C_,
      merge: m_,
    };
  });
  const om = S((nQ, am) => {
    l();
    c();
    d();
    const rm = Xh();
    const Fi = Ci();
    const $r = Jn();
    const x_ = Object.prototype.hasOwnProperty;
    const em = {
      brackets(t) {
        return `${t}[]`;
      },
      comma: 'comma',
      indices(t, r) {
        return `${t}[${r}]`;
      },
      repeat(t) {
        return t;
      },
    };
    const at = Array.isArray;
    const F_ = String.prototype.split;
    const S_ = Array.prototype.push;
    const nm = function (e, t) {
      S_.apply(e, at(t) ? t : [t]);
    };
    const w_ = Date.prototype.toISOString;
    const tm = $r.default;
    const Fe = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: 'utf-8',
      charsetSentinel: !1,
      delimiter: '&',
      encode: !0,
      encoder: Fi.encode,
      encodeValuesOnly: !1,
      format: tm,
      formatter: $r.formatters[tm],
      indices: !1,
      serializeDate(t) {
        return w_.call(t);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    };
    const B_ = function (t) {
      return (
        typeof t === 'string' ||
        typeof t === 'number' ||
        typeof t === 'boolean' ||
        typeof t === 'symbol' ||
        typeof t === 'bigint'
      );
    };
    const xi = {};
    const T_ = function e(t, r, n, a, o, i, u, s, p, y, b, m, g, A, E, x) {
      for (
        var F = t, B = x, I = 0, L = !1;
        (B = B.get(xi)) !== void 0 && !L;

      ) {
        const w = B.get(t);
        if (((I += 1), typeof w < 'u')) {
          if (w === I) throw new RangeError('Cyclic object value');
          L = !0;
        }
        typeof B.get(xi) > 'u' && (I = 0);
      }
      if (
        (typeof s === 'function'
          ? (F = s(r, F))
          : F instanceof Date
          ? (F = b(F))
          : n === 'comma' &&
            at(F) &&
            (F = Fi.maybeMap(F, (K) => (K instanceof Date ? b(K) : K))),
        F === null)
      ) {
        if (o) return u && !A ? u(r, Fe.encoder, E, 'key', m) : r;
        F = '';
      }
      if (B_(F) || Fi.isBuffer(F)) {
        if (u) {
          const k = A ? r : u(r, Fe.encoder, E, 'key', m);
          if (n === 'comma' && A) {
            for (
              var N = F_.call(String(F), ','), H = '', V = 0;
              V < N.length;
              ++V
            )
              H += (V === 0 ? '' : ',') + g(u(N[V], Fe.encoder, E, 'value', m));
            return [
              `${g(k) + (a && at(F) && N.length === 1 ? '[]' : '')}=${H}`,
            ];
          }
          return [`${g(k)}=${g(u(F, Fe.encoder, E, 'value', m))}`];
        }
        return [`${g(r)}=${g(String(F))}`];
      }
      const U = [];
      if (typeof F > 'u') return U;
      let Q;
      if (n === 'comma' && at(F))
        Q = [{ value: F.length > 0 ? F.join(',') || null : void 0 }];
      else if (at(s)) Q = s;
      else {
        const ee = Object.keys(F);
        Q = p ? ee.sort(p) : ee;
      }
      for (
        let X = a && at(F) && F.length === 1 ? `${r}[]` : r, R = 0;
        R < Q.length;
        ++R
      ) {
        const _ = Q[R];
        const q =
          typeof _ === 'object' && typeof _.value < 'u' ? _.value : F[_];
        if (!(i && q === null)) {
          const W = at(F)
            ? typeof n === 'function'
              ? n(X, _)
              : X
            : X + (y ? `.${_}` : `[${_}]`);
          x.set(t, I);
          const Y = rm();
          Y.set(xi, x),
            nm(U, e(q, W, n, a, o, i, u, s, p, y, b, m, g, A, E, Y));
        }
      }
      return U;
    };
    const __ = function (t) {
      if (!t) return Fe;
      if (
        t.encoder !== null &&
        typeof t.encoder < 'u' &&
        typeof t.encoder !== 'function'
      )
        throw new TypeError('Encoder has to be a function.');
      const r = t.charset || Fe.charset;
      if (
        typeof t.charset < 'u' &&
        t.charset !== 'utf-8' &&
        t.charset !== 'iso-8859-1'
      )
        throw new TypeError(
          'The charset option must be either utf-8, iso-8859-1, or undefined'
        );
      let n = $r.default;
      if (typeof t.format < 'u') {
        if (!x_.call($r.formatters, t.format))
          throw new TypeError('Unknown format option provided.');
        n = t.format;
      }
      const a = $r.formatters[n];
      let o = Fe.filter;
      return (
        (typeof t.filter === 'function' || at(t.filter)) && (o = t.filter),
        {
          addQueryPrefix:
            typeof t.addQueryPrefix === 'boolean'
              ? t.addQueryPrefix
              : Fe.addQueryPrefix,
          allowDots: typeof t.allowDots > 'u' ? Fe.allowDots : !!t.allowDots,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel === 'boolean'
              ? t.charsetSentinel
              : Fe.charsetSentinel,
          delimiter: typeof t.delimiter > 'u' ? Fe.delimiter : t.delimiter,
          encode: typeof t.encode === 'boolean' ? t.encode : Fe.encode,
          encoder: typeof t.encoder === 'function' ? t.encoder : Fe.encoder,
          encodeValuesOnly:
            typeof t.encodeValuesOnly === 'boolean'
              ? t.encodeValuesOnly
              : Fe.encodeValuesOnly,
          filter: o,
          format: n,
          formatter: a,
          serializeDate:
            typeof t.serializeDate === 'function'
              ? t.serializeDate
              : Fe.serializeDate,
          skipNulls:
            typeof t.skipNulls === 'boolean' ? t.skipNulls : Fe.skipNulls,
          sort: typeof t.sort === 'function' ? t.sort : null,
          strictNullHandling:
            typeof t.strictNullHandling === 'boolean'
              ? t.strictNullHandling
              : Fe.strictNullHandling,
        }
      );
    };
    am.exports = function (e, t) {
      let r = e;
      const n = __(t);
      let a;
      let o;
      typeof n.filter === 'function'
        ? ((o = n.filter), (r = o('', r)))
        : at(n.filter) && ((o = n.filter), (a = o));
      const i = [];
      if (typeof r !== 'object' || r === null) return '';
      let u;
      t && t.arrayFormat in em
        ? (u = t.arrayFormat)
        : t && 'indices' in t
        ? (u = t.indices ? 'indices' : 'repeat')
        : (u = 'indices');
      const s = em[u];
      if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip !== 'boolean')
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
      const p = s === 'comma' && t && t.commaRoundTrip;
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort);
      for (let y = rm(), b = 0; b < a.length; ++b) {
        const m = a[b];
        (n.skipNulls && r[m] === null) ||
          nm(
            i,
            T_(
              r[m],
              m,
              s,
              p,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              y
            )
          );
      }
      const g = i.join(n.delimiter);
      let A = n.addQueryPrefix === !0 ? '?' : '';
      return (
        n.charsetSentinel &&
          (n.charset === 'iso-8859-1'
            ? (A += 'utf8=%26%2310003%3B&')
            : (A += 'utf8=%E2%9C%93&')),
        g.length > 0 ? A + g : ''
      );
    };
  });
  const sm = S((uQ, um) => {
    l();
    c();
    d();
    const rr = Ci();
    const Si = Object.prototype.hasOwnProperty;
    const O_ = Array.isArray;
    const Ce = {
      allowDots: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: !1,
      comma: !1,
      decoder: rr.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1,
    };
    const R_ = function (e) {
      return e.replace(/&#(\d+);/g, (t, r) =>
        String.fromCharCode(parseInt(r, 10))
      );
    };
    const im = function (e, t) {
      return e && typeof e === 'string' && t.comma && e.indexOf(',') > -1
        ? e.split(',')
        : e;
    };
    const P_ = 'utf8=%26%2310003%3B';
    const I_ = 'utf8=%E2%9C%93';
    const k_ = function (t, r) {
      const n = {};
      const a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t;
      const o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit;
      const i = a.split(r.delimiter, o);
      let u = -1;
      let s;
      let p = r.charset;
      if (r.charsetSentinel)
        for (s = 0; s < i.length; ++s)
          i[s].indexOf('utf8=') === 0 &&
            (i[s] === I_ ? (p = 'utf-8') : i[s] === P_ && (p = 'iso-8859-1'),
            (u = s),
            (s = i.length));
      for (s = 0; s < i.length; ++s)
        if (s !== u) {
          const y = i[s];
          const b = y.indexOf(']=');
          const m = b === -1 ? y.indexOf('=') : b + 1;
          var g;
          var A;
          m === -1
            ? ((g = r.decoder(y, Ce.decoder, p, 'key')),
              (A = r.strictNullHandling ? null : ''))
            : ((g = r.decoder(y.slice(0, m), Ce.decoder, p, 'key')),
              (A = rr.maybeMap(im(y.slice(m + 1), r), (E) =>
                r.decoder(E, Ce.decoder, p, 'value')
              ))),
            A &&
              r.interpretNumericEntities &&
              p === 'iso-8859-1' &&
              (A = R_(A)),
            y.indexOf('[]=') > -1 && (A = O_(A) ? [A] : A),
            Si.call(n, g) ? (n[g] = rr.combine(n[g], A)) : (n[g] = A);
        }
      return n;
    };
    const N_ = function (e, t, r, n) {
      for (var a = n ? t : im(t, r), o = e.length - 1; o >= 0; --o) {
        var i;
        const u = e[o];
        if (u === '[]' && r.parseArrays) i = [].concat(a);
        else {
          i = r.plainObjects ? Object.create(null) : {};
          const s =
            u.charAt(0) === '[' && u.charAt(u.length - 1) === ']'
              ? u.slice(1, -1)
              : u;
          const p = parseInt(s, 10);
          !r.parseArrays && s === ''
            ? (i = { 0: a })
            : !isNaN(p) &&
              u !== s &&
              String(p) === s &&
              p >= 0 &&
              r.parseArrays &&
              p <= r.arrayLimit
            ? ((i = []), (i[p] = a))
            : s !== '__proto__' && (i[s] = a);
        }
        a = i;
      }
      return a;
    };
    const M_ = function (t, r, n, a) {
      if (t) {
        const o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t;
        const i = /(\[[^[\]]*])/;
        const u = /(\[[^[\]]*])/g;
        let s = n.depth > 0 && i.exec(o);
        const p = s ? o.slice(0, s.index) : o;
        const y = [];
        if (p) {
          if (
            !n.plainObjects &&
            Si.call(Object.prototype, p) &&
            !n.allowPrototypes
          )
            return;
          y.push(p);
        }
        for (
          let b = 0;
          n.depth > 0 && (s = u.exec(o)) !== null && b < n.depth;

        ) {
          if (
            ((b += 1),
            !n.plainObjects &&
              Si.call(Object.prototype, s[1].slice(1, -1)) &&
              !n.allowPrototypes)
          )
            return;
          y.push(s[1]);
        }
        return s && y.push(`[${o.slice(s.index)}]`), N_(y, r, n, a);
      }
    };
    const L_ = function (t) {
      if (!t) return Ce;
      if (
        t.decoder !== null &&
        t.decoder !== void 0 &&
        typeof t.decoder !== 'function'
      )
        throw new TypeError('Decoder has to be a function.');
      if (
        typeof t.charset < 'u' &&
        t.charset !== 'utf-8' &&
        t.charset !== 'iso-8859-1'
      )
        throw new TypeError(
          'The charset option must be either utf-8, iso-8859-1, or undefined'
        );
      const r = typeof t.charset > 'u' ? Ce.charset : t.charset;
      return {
        allowDots: typeof t.allowDots > 'u' ? Ce.allowDots : !!t.allowDots,
        allowPrototypes:
          typeof t.allowPrototypes === 'boolean'
            ? t.allowPrototypes
            : Ce.allowPrototypes,
        allowSparse:
          typeof t.allowSparse === 'boolean' ? t.allowSparse : Ce.allowSparse,
        arrayLimit:
          typeof t.arrayLimit === 'number' ? t.arrayLimit : Ce.arrayLimit,
        charset: r,
        charsetSentinel:
          typeof t.charsetSentinel === 'boolean'
            ? t.charsetSentinel
            : Ce.charsetSentinel,
        comma: typeof t.comma === 'boolean' ? t.comma : Ce.comma,
        decoder: typeof t.decoder === 'function' ? t.decoder : Ce.decoder,
        delimiter:
          typeof t.delimiter === 'string' || rr.isRegExp(t.delimiter)
            ? t.delimiter
            : Ce.delimiter,
        depth:
          typeof t.depth === 'number' || t.depth === !1 ? +t.depth : Ce.depth,
        ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
        interpretNumericEntities:
          typeof t.interpretNumericEntities === 'boolean'
            ? t.interpretNumericEntities
            : Ce.interpretNumericEntities,
        parameterLimit:
          typeof t.parameterLimit === 'number'
            ? t.parameterLimit
            : Ce.parameterLimit,
        parseArrays: t.parseArrays !== !1,
        plainObjects:
          typeof t.plainObjects === 'boolean'
            ? t.plainObjects
            : Ce.plainObjects,
        strictNullHandling:
          typeof t.strictNullHandling === 'boolean'
            ? t.strictNullHandling
            : Ce.strictNullHandling,
      };
    };
    um.exports = function (e, t) {
      const r = L_(t);
      if (e === '' || e === null || typeof e > 'u')
        return r.plainObjects ? Object.create(null) : {};
      for (
        var n = typeof e === 'string' ? k_(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          i = 0;
        i < o.length;
        ++i
      ) {
        const u = o[i];
        const s = M_(u, n[u], r, typeof e === 'string');
        a = rr.merge(a, s, r);
      }
      return r.allowSparse === !0 ? a : rr.compact(a);
    };
  });
  const wi = S((dQ, lm) => {
    l();
    c();
    d();
    const j_ = om();
    const q_ = sm();
    const $_ = Jn();
    lm.exports = { formats: $_, parse: q_, stringify: j_ };
  });
  const mm = S((XZ, hm) => {
    l();
    c();
    d();
    (function () {
      function e(i) {
        if (i == null) return !1;
        switch (i.type) {
          case 'ArrayExpression':
          case 'AssignmentExpression':
          case 'BinaryExpression':
          case 'CallExpression':
          case 'ConditionalExpression':
          case 'FunctionExpression':
          case 'Identifier':
          case 'Literal':
          case 'LogicalExpression':
          case 'MemberExpression':
          case 'NewExpression':
          case 'ObjectExpression':
          case 'SequenceExpression':
          case 'ThisExpression':
          case 'UnaryExpression':
          case 'UpdateExpression':
            return !0;
        }
        return !1;
      }
      function t(i) {
        if (i == null) return !1;
        switch (i.type) {
          case 'DoWhileStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'WhileStatement':
            return !0;
        }
        return !1;
      }
      function r(i) {
        if (i == null) return !1;
        switch (i.type) {
          case 'BlockStatement':
          case 'BreakStatement':
          case 'ContinueStatement':
          case 'DebuggerStatement':
          case 'DoWhileStatement':
          case 'EmptyStatement':
          case 'ExpressionStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'IfStatement':
          case 'LabeledStatement':
          case 'ReturnStatement':
          case 'SwitchStatement':
          case 'ThrowStatement':
          case 'TryStatement':
          case 'VariableDeclaration':
          case 'WhileStatement':
          case 'WithStatement':
            return !0;
        }
        return !1;
      }
      function n(i) {
        return r(i) || (i != null && i.type === 'FunctionDeclaration');
      }
      function a(i) {
        switch (i.type) {
          case 'IfStatement':
            return i.alternate != null ? i.alternate : i.consequent;
          case 'LabeledStatement':
          case 'ForStatement':
          case 'ForInStatement':
          case 'WhileStatement':
          case 'WithStatement':
            return i.body;
        }
        return null;
      }
      function o(i) {
        let u;
        if (i.type !== 'IfStatement' || i.alternate == null) return !1;
        u = i.consequent;
        do {
          if (u.type === 'IfStatement' && u.alternate == null) return !0;
          u = a(u);
        } while (u);
        return !1;
      }
      hm.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      };
    })();
  });
  const Bi = S((eee, gm) => {
    l();
    c();
    d();
    (function () {
      let e;
      let t;
      let r;
      let n;
      let a;
      let o;
      (t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        });
      function i(x) {
        return x >= 48 && x <= 57;
      }
      function u(x) {
        return (
          (x >= 48 && x <= 57) || (x >= 97 && x <= 102) || (x >= 65 && x <= 70)
        );
      }
      function s(x) {
        return x >= 48 && x <= 55;
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ];
      function p(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        );
      }
      function y(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233;
      }
      function b(x) {
        if (x <= 65535) return String.fromCharCode(x);
        const F = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296);
        const B = String.fromCharCode(((x - 65536) % 1024) + 56320);
        return F + B;
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] =
          (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95;
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95;
      function m(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(b(x));
      }
      function g(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(b(x));
      }
      function A(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(b(x));
      }
      function E(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(b(x));
      }
      gm.exports = {
        isDecimalDigit: i,
        isHexDigit: u,
        isOctalDigit: s,
        isWhiteSpace: p,
        isLineTerminator: y,
        isIdentifierStartES5: m,
        isIdentifierPartES5: g,
        isIdentifierStartES6: A,
        isIdentifierPartES6: E,
      };
    })();
  });
  const Em = S((aee, ym) => {
    l();
    c();
    d();
    (function () {
      const e = Bi();
      function t(m) {
        switch (m) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'let':
            return !0;
          default:
            return !1;
        }
      }
      function r(m, g) {
        return !g && m === 'yield' ? !1 : n(m, g);
      }
      function n(m, g) {
        if (g && t(m)) return !0;
        switch (m.length) {
          case 2:
            return m === 'if' || m === 'in' || m === 'do';
          case 3:
            return m === 'var' || m === 'for' || m === 'new' || m === 'try';
          case 4:
            return (
              m === 'this' ||
              m === 'else' ||
              m === 'case' ||
              m === 'void' ||
              m === 'with' ||
              m === 'enum'
            );
          case 5:
            return (
              m === 'while' ||
              m === 'break' ||
              m === 'catch' ||
              m === 'throw' ||
              m === 'const' ||
              m === 'yield' ||
              m === 'class' ||
              m === 'super'
            );
          case 6:
            return (
              m === 'return' ||
              m === 'typeof' ||
              m === 'delete' ||
              m === 'switch' ||
              m === 'export' ||
              m === 'import'
            );
          case 7:
            return m === 'default' || m === 'finally' || m === 'extends';
          case 8:
            return m === 'function' || m === 'continue' || m === 'debugger';
          case 10:
            return m === 'instanceof';
          default:
            return !1;
        }
      }
      function a(m, g) {
        return m === 'null' || m === 'true' || m === 'false' || r(m, g);
      }
      function o(m, g) {
        return m === 'null' || m === 'true' || m === 'false' || n(m, g);
      }
      function i(m) {
        return m === 'eval' || m === 'arguments';
      }
      function u(m) {
        let g;
        let A;
        let E;
        if (
          m.length === 0 ||
          ((E = m.charCodeAt(0)), !e.isIdentifierStartES5(E))
        )
          return !1;
        for (g = 1, A = m.length; g < A; ++g)
          if (((E = m.charCodeAt(g)), !e.isIdentifierPartES5(E))) return !1;
        return !0;
      }
      function s(m, g) {
        return (m - 55296) * 1024 + (g - 56320) + 65536;
      }
      function p(m) {
        let g;
        let A;
        let E;
        let x;
        let F;
        if (m.length === 0) return !1;
        for (F = e.isIdentifierStartES6, g = 0, A = m.length; g < A; ++g) {
          if (((E = m.charCodeAt(g)), E >= 55296 && E <= 56319)) {
            if (
              (++g,
              g >= A || ((x = m.charCodeAt(g)), !(x >= 56320 && x <= 57343)))
            )
              return !1;
            E = s(E, x);
          }
          if (!F(E)) return !1;
          F = e.isIdentifierPartES6;
        }
        return !0;
      }
      function y(m, g) {
        return u(m) && !a(m, g);
      }
      function b(m, g) {
        return p(m) && !o(m, g);
      }
      ym.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: i,
        isIdentifierNameES5: u,
        isIdentifierNameES6: p,
        isIdentifierES5: y,
        isIdentifierES6: b,
      };
    })();
  });
  const Ti = S((Qn) => {
    l();
    c();
    d();
    (function () {
      (Qn.ast = mm()), (Qn.code = Bi()), (Qn.keyword = Em());
    })();
  });
  const bm = S((pee, i8) => {
    i8.exports = {
      name: 'doctrine',
      description: 'JSDoc parser',
      homepage: 'https://github.com/eslint/doctrine',
      main: 'lib/doctrine.js',
      version: '3.0.0',
      engines: { node: '>=6.0.0' },
      directories: { lib: './lib' },
      files: ['lib'],
      maintainers: [
        {
          name: 'Nicholas C. Zakas',
          email: 'nicholas+npm@nczconsulting.com',
          web: 'https://www.nczonline.net',
        },
        {
          name: 'Yusuke Suzuki',
          email: 'utatane.tea@gmail.com',
          web: 'https://github.com/Constellation',
        },
      ],
      repository: 'eslint/doctrine',
      devDependencies: {
        coveralls: '^3.0.1',
        dateformat: '^1.0.11',
        eslint: '^1.10.3',
        'eslint-release': '^1.0.0',
        linefix: '^0.1.1',
        mocha: '^3.4.2',
        'npm-license': '^0.3.1',
        nyc: '^10.3.2',
        semver: '^5.0.3',
        shelljs: '^0.5.3',
        'shelljs-nodecli': '^0.1.1',
        should: '^5.0.1',
      },
      license: 'Apache-2.0',
      scripts: {
        pretest: 'npm run lint',
        test: 'nyc mocha',
        coveralls: 'nyc report --reporter=text-lcov | coveralls',
        lint: 'eslint lib/',
        'generate-release': 'eslint-generate-release',
        'generate-alpharelease': 'eslint-generate-prerelease alpha',
        'generate-betarelease': 'eslint-generate-prerelease beta',
        'generate-rcrelease': 'eslint-generate-prerelease rc',
        'publish-release': 'eslint-publish-release',
      },
      dependencies: { esutils: '^2.0.2' },
    };
  });
  const vm = S((fee, Am) => {
    l();
    c();
    d();
    function u8(e, t) {
      if (!e) throw new Error(t || 'unknown assertion error');
    }
    Am.exports = u8;
  });
  const _i = S((Ur) => {
    l();
    c();
    d();
    (function () {
      let e;
      (e = bm().version), (Ur.VERSION = e);
      function t(n) {
        (this.name = 'DoctrineError'), (this.message = n);
      }
      (t.prototype = (function () {
        const n = function () {};
        return (n.prototype = Error.prototype), new n();
      })()),
        (t.prototype.constructor = t),
        (Ur.DoctrineError = t);
      function r(n) {
        throw new t(n);
      }
      (Ur.throwError = r), (Ur.assert = vm());
    })();
  });
  const Dm = S((Hr) => {
    l();
    c();
    d();
    (function () {
      let e;
      let t;
      let r;
      let n;
      let a;
      let o;
      let i;
      let u;
      let s;
      let p;
      let y;
      let b;
      (s = Ti()),
        (p = _i()),
        (e = {
          NullableLiteral: 'NullableLiteral',
          AllLiteral: 'AllLiteral',
          NullLiteral: 'NullLiteral',
          UndefinedLiteral: 'UndefinedLiteral',
          VoidLiteral: 'VoidLiteral',
          UnionType: 'UnionType',
          ArrayType: 'ArrayType',
          RecordType: 'RecordType',
          FieldType: 'FieldType',
          FunctionType: 'FunctionType',
          ParameterType: 'ParameterType',
          RestType: 'RestType',
          NonNullableType: 'NonNullableType',
          OptionalType: 'OptionalType',
          NullableType: 'NullableType',
          NameExpression: 'NameExpression',
          TypeApplication: 'TypeApplication',
          StringLiteralType: 'StringLiteralType',
          NumericLiteralType: 'NumericLiteralType',
          BooleanLiteralType: 'BooleanLiteralType',
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        });
      function m(T) {
        return (
          '><(){}[],:*|?!='.indexOf(String.fromCharCode(T)) === -1 &&
          !s.code.isWhiteSpace(T) &&
          !s.code.isLineTerminator(T)
        );
      }
      function g(T, P, M, O) {
        (this._previous = T),
          (this._index = P),
          (this._token = M),
          (this._value = O);
      }
      (g.prototype.restore = function () {
        (o = this._previous),
          (a = this._index),
          (i = this._token),
          (u = this._value);
      }),
        (g.save = function () {
          return new g(o, a, i, u);
        });
      function A(T, P) {
        return b && (T.range = [P[0] + y, P[1] + y]), T;
      }
      function E() {
        const T = r.charAt(a);
        return (a += 1), T;
      }
      function x(T) {
        let P;
        let M;
        let O;
        let $ = 0;
        for (M = T === 'u' ? 4 : 2, P = 0; P < M; ++P)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (O = E()),
              ($ = $ * 16 + '0123456789abcdef'.indexOf(O.toLowerCase()));
          else return '';
        return String.fromCharCode($);
      }
      function F() {
        let T = '';
        let P;
        let M;
        let O;
        let $;
        let z;
        for (P = r.charAt(a), ++a; a < n; )
          if (((M = E()), M === P)) {
            P = '';
            break;
          } else if (M === '\\')
            if (((M = E()), s.code.isLineTerminator(M.charCodeAt(0))))
              M === '\r' && r.charCodeAt(a) === 10 && ++a;
            else
              switch (M) {
                case 'n':
                  T += `
`;
                  break;
                case 'r':
                  T += '\r';
                  break;
                case 't':
                  T += '	';
                  break;
                case 'u':
                case 'x':
                  (z = a), ($ = x(M)), $ ? (T += $) : ((a = z), (T += M));
                  break;
                case 'b':
                  T += '\b';
                  break;
                case 'f':
                  T += '\f';
                  break;
                case 'v':
                  T += '\v';
                  break;
                default:
                  s.code.isOctalDigit(M.charCodeAt(0))
                    ? ((O = '01234567'.indexOf(M)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((O = O * 8 + '01234567'.indexOf(E())),
                        '0123'.indexOf(M) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (O = O * 8 + '01234567'.indexOf(E()))),
                      (T += String.fromCharCode(O)))
                    : (T += M);
                  break;
              }
          else {
            if (s.code.isLineTerminator(M.charCodeAt(0))) break;
            T += M;
          }
        return P !== '' && p.throwError('unexpected quote'), (u = T), t.STRING;
      }
      function B() {
        let T;
        let P;
        if (((T = ''), (P = r.charCodeAt(a)), P !== 46)) {
          if (((T = E()), (P = r.charCodeAt(a)), T === '0')) {
            if (P === 120 || P === 88) {
              for (
                T += E();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isHexDigit(P));

              )
                T += E();
              return (
                T.length <= 2 && p.throwError('unexpected token'),
                a < n &&
                  ((P = r.charCodeAt(a)),
                  s.code.isIdentifierStartES5(P) &&
                    p.throwError('unexpected token')),
                (u = parseInt(T, 16)),
                t.NUMBER
              );
            }
            if (s.code.isOctalDigit(P)) {
              for (
                T += E();
                a < n && ((P = r.charCodeAt(a)), !!s.code.isOctalDigit(P));

              )
                T += E();
              return (
                a < n &&
                  ((P = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(P) ||
                    s.code.isDecimalDigit(P)) &&
                    p.throwError('unexpected token')),
                (u = parseInt(T, 8)),
                t.NUMBER
              );
            }
            s.code.isDecimalDigit(P) && p.throwError('unexpected token');
          }
          for (; a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P)); )
            T += E();
        }
        if (P === 46)
          for (
            T += E();
            a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

          )
            T += E();
        if (P === 101 || P === 69)
          if (
            ((T += E()),
            (P = r.charCodeAt(a)),
            (P === 43 || P === 45) && (T += E()),
            (P = r.charCodeAt(a)),
            s.code.isDecimalDigit(P))
          )
            for (
              T += E();
              a < n && ((P = r.charCodeAt(a)), !!s.code.isDecimalDigit(P));

            )
              T += E();
          else p.throwError('unexpected token');
        return (
          a < n &&
            ((P = r.charCodeAt(a)),
            s.code.isIdentifierStartES5(P) && p.throwError('unexpected token')),
          (u = parseFloat(T)),
          t.NUMBER
        );
      }
      function I() {
        let T;
        let P;
        for (u = E(); a < n && m(r.charCodeAt(a)); ) {
          if (((T = r.charCodeAt(a)), T === 46)) {
            if (a + 1 >= n) return t.ILLEGAL;
            if (((P = r.charCodeAt(a + 1)), P === 60)) break;
          }
          u += E();
        }
        return t.NAME;
      }
      function L() {
        let T;
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) E();
        if (a >= n) return (i = t.EOF), i;
        switch (((T = r.charCodeAt(a)), T)) {
          case 39:
          case 34:
            return (i = F()), i;
          case 58:
            return E(), (i = t.COLON), i;
          case 44:
            return E(), (i = t.COMMA), i;
          case 40:
            return E(), (i = t.LPAREN), i;
          case 41:
            return E(), (i = t.RPAREN), i;
          case 91:
            return E(), (i = t.LBRACK), i;
          case 93:
            return E(), (i = t.RBRACK), i;
          case 123:
            return E(), (i = t.LBRACE), i;
          case 125:
            return E(), (i = t.RBRACE), i;
          case 46:
            if (a + 1 < n) {
              if (((T = r.charCodeAt(a + 1)), T === 60))
                return E(), E(), (i = t.DOT_LT), i;
              if (T === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return E(), E(), E(), (i = t.REST), i;
              if (s.code.isDecimalDigit(T)) return (i = B()), i;
            }
            return (i = t.ILLEGAL), i;
          case 60:
            return E(), (i = t.LT), i;
          case 62:
            return E(), (i = t.GT), i;
          case 42:
            return E(), (i = t.STAR), i;
          case 124:
            return E(), (i = t.PIPE), i;
          case 63:
            return E(), (i = t.QUESTION), i;
          case 33:
            return E(), (i = t.BANG), i;
          case 61:
            return E(), (i = t.EQUAL), i;
          case 45:
            return (i = B()), i;
          default:
            return s.code.isDecimalDigit(T)
              ? ((i = B()), i)
              : (p.assert(m(T)), (i = I()), i);
        }
      }
      function w(T, P) {
        p.assert(i === T, P || 'consumed token not matched'), L();
      }
      function k(T, P) {
        i !== T && p.throwError(P || 'unexpected token'), L();
      }
      function N() {
        let T;
        const P = a - 1;
        if (
          (w(t.LPAREN, 'UnionType should start with ('),
          (T = []),
          i !== t.RPAREN)
        )
          for (; T.push(K()), i !== t.RPAREN; ) k(t.PIPE);
        return (
          w(t.RPAREN, 'UnionType should end with )'),
          A({ type: e.UnionType, elements: T }, [P, o])
        );
      }
      function H() {
        let T;
        const P = a - 1;
        let M;
        for (
          w(t.LBRACK, 'ArrayType should start with ['), T = [];
          i !== t.RBRACK;

        ) {
          if (i === t.REST) {
            (M = a - 3),
              w(t.REST),
              T.push(A({ type: e.RestType, expression: K() }, [M, o]));
            break;
          } else T.push(K());
          i !== t.RBRACK && k(t.COMMA);
        }
        return k(t.RBRACK), A({ type: e.ArrayType, elements: T }, [P, o]);
      }
      function V() {
        const T = u;
        if (i === t.NAME || i === t.STRING) return L(), T;
        if (i === t.NUMBER) return w(t.NUMBER), String(T);
        p.throwError('unexpected token');
      }
      function U() {
        let T;
        const P = o;
        return (
          (T = V()),
          i === t.COLON
            ? (w(t.COLON), A({ type: e.FieldType, key: T, value: K() }, [P, o]))
            : A({ type: e.FieldType, key: T, value: null }, [P, o])
        );
      }
      function Q() {
        let T;
        const P = a - 1;
        let M;
        if (
          (w(t.LBRACE, 'RecordType should start with {'),
          (T = []),
          i === t.COMMA)
        )
          w(t.COMMA);
        else for (; i !== t.RBRACE; ) T.push(U()), i !== t.RBRACE && k(t.COMMA);
        return (
          (M = a), k(t.RBRACE), A({ type: e.RecordType, fields: T }, [P, M])
        );
      }
      function ee() {
        let T = u;
        const P = a - T.length;
        return (
          k(t.NAME),
          i === t.COLON &&
            (T === 'module' || T === 'external' || T === 'event') &&
            (w(t.COLON), (T += `:${u}`), k(t.NAME)),
          A({ type: e.NameExpression, name: T }, [P, o])
        );
      }
      function X() {
        const T = [];
        for (T.push(Z()); i === t.COMMA; ) w(t.COMMA), T.push(Z());
        return T;
      }
      function R() {
        let T;
        let P;
        const M = a - u.length;
        return (
          (T = ee()),
          i === t.DOT_LT || i === t.LT
            ? (L(),
              (P = X()),
              k(t.GT),
              A({ type: e.TypeApplication, expression: T, applications: P }, [
                M,
                o,
              ]))
            : T
        );
      }
      function _() {
        return (
          w(t.COLON, 'ResultType should start with :'),
          i === t.NAME && u === 'void'
            ? (w(t.NAME), { type: e.VoidLiteral })
            : K()
        );
      }
      function q() {
        for (var T = [], P = !1, M, O = !1, $, z = a - 3, pe; i !== t.RPAREN; )
          i === t.REST && (w(t.REST), (O = !0)),
            ($ = o),
            (M = K()),
            M.type === e.NameExpression &&
              i === t.COLON &&
              ((pe = o - M.name.length),
              w(t.COLON),
              (M = A({ type: e.ParameterType, name: M.name, expression: K() }, [
                pe,
                o,
              ]))),
            i === t.EQUAL
              ? (w(t.EQUAL),
                (M = A({ type: e.OptionalType, expression: M }, [$, o])),
                (P = !0))
              : P && p.throwError('unexpected token'),
            O && (M = A({ type: e.RestType, expression: M }, [z, o])),
            T.push(M),
            i !== t.RPAREN && k(t.COMMA);
        return T;
      }
      function W() {
        let T;
        let P;
        let M;
        let O;
        let $;
        const z = a - u.length;
        return (
          p.assert(
            i === t.NAME && u === 'function',
            "FunctionType should start with 'function'"
          ),
          w(t.NAME),
          k(t.LPAREN),
          (T = !1),
          (M = []),
          (P = null),
          i !== t.RPAREN &&
            (i === t.NAME && (u === 'this' || u === 'new')
              ? ((T = u === 'new'),
                w(t.NAME),
                k(t.COLON),
                (P = R()),
                i === t.COMMA && (w(t.COMMA), (M = q())))
              : (M = q())),
          k(t.RPAREN),
          (O = null),
          i === t.COLON && (O = _()),
          ($ = A({ type: e.FunctionType, params: M, result: O }, [z, o])),
          P && (($.this = P), T && ($.new = !0)),
          $
        );
      }
      function Y() {
        let T;
        let P;
        switch (i) {
          case t.STAR:
            return w(t.STAR), A({ type: e.AllLiteral }, [o - 1, o]);
          case t.LPAREN:
            return N();
          case t.LBRACK:
            return H();
          case t.LBRACE:
            return Q();
          case t.NAME:
            if (((P = a - u.length), u === 'null'))
              return w(t.NAME), A({ type: e.NullLiteral }, [P, o]);
            if (u === 'undefined')
              return w(t.NAME), A({ type: e.UndefinedLiteral }, [P, o]);
            if (u === 'true' || u === 'false')
              return (
                w(t.NAME),
                A({ type: e.BooleanLiteralType, value: u === 'true' }, [P, o])
              );
            if (((T = g.save()), u === 'function'))
              try {
                return W();
              } catch {
                T.restore();
              }
            return R();
          case t.STRING:
            return (
              L(),
              A({ type: e.StringLiteralType, value: u }, [o - u.length - 2, o])
            );
          case t.NUMBER:
            return (
              L(),
              A({ type: e.NumericLiteralType, value: u }, [
                o - String(u).length,
                o,
              ])
            );
          default:
            p.throwError('unexpected token');
        }
      }
      function K() {
        let T;
        let P;
        return i === t.QUESTION
          ? ((P = a - 1),
            w(t.QUESTION),
            i === t.COMMA ||
            i === t.EQUAL ||
            i === t.RBRACE ||
            i === t.RPAREN ||
            i === t.PIPE ||
            i === t.EOF ||
            i === t.RBRACK ||
            i === t.GT
              ? A({ type: e.NullableLiteral }, [P, o])
              : A({ type: e.NullableType, expression: Y(), prefix: !0 }, [
                  P,
                  o,
                ]))
          : i === t.BANG
          ? ((P = a - 1),
            w(t.BANG),
            A({ type: e.NonNullableType, expression: Y(), prefix: !0 }, [P, o]))
          : ((P = o),
            (T = Y()),
            i === t.BANG
              ? (w(t.BANG),
                A({ type: e.NonNullableType, expression: T, prefix: !1 }, [
                  P,
                  o,
                ]))
              : i === t.QUESTION
              ? (w(t.QUESTION),
                A({ type: e.NullableType, expression: T, prefix: !1 }, [P, o]))
              : i === t.LBRACK
              ? (w(t.LBRACK),
                k(
                  t.RBRACK,
                  `expected an array-style type declaration (${u}[])`
                ),
                A(
                  {
                    type: e.TypeApplication,
                    expression: A({ type: e.NameExpression, name: 'Array' }, [
                      P,
                      o,
                    ]),
                    applications: [T],
                  },
                  [P, o]
                ))
              : T);
      }
      function Z() {
        let T;
        let P;
        if (((T = K()), i !== t.PIPE)) return T;
        for (P = [T], w(t.PIPE); P.push(K()), i === t.PIPE; ) w(t.PIPE);
        return A({ type: e.UnionType, elements: P }, [0, a]);
      }
      function se() {
        let T;
        return i === t.REST
          ? (w(t.REST), A({ type: e.RestType, expression: Z() }, [0, a]))
          : ((T = Z()),
            i === t.EQUAL
              ? (w(t.EQUAL), A({ type: e.OptionalType, expression: T }, [0, a]))
              : T);
      }
      function ke(T, P) {
        let M;
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (b = P && P.range),
          (y = (P && P.startIndex) || 0),
          L(),
          (M = Z()),
          P && P.midstream
            ? { expression: M, index: o }
            : (i !== t.EOF && p.throwError('not reach to EOF'), M)
        );
      }
      function Ne(T, P) {
        let M;
        return (
          (r = T),
          (n = r.length),
          (a = 0),
          (o = 0),
          (b = P && P.range),
          (y = (P && P.startIndex) || 0),
          L(),
          (M = se()),
          P && P.midstream
            ? { expression: M, index: o }
            : (i !== t.EOF && p.throwError('not reach to EOF'), M)
        );
      }
      function J(T, P, M) {
        let O;
        let $;
        let z;
        switch (T.type) {
          case e.NullableLiteral:
            O = '?';
            break;
          case e.AllLiteral:
            O = '*';
            break;
          case e.NullLiteral:
            O = 'null';
            break;
          case e.UndefinedLiteral:
            O = 'undefined';
            break;
          case e.VoidLiteral:
            O = 'void';
            break;
          case e.UnionType:
            for (
              M ? (O = '') : (O = '('), $ = 0, z = T.elements.length;
              $ < z;
              ++$
            )
              (O += J(T.elements[$], P)), $ + 1 !== z && (O += P ? '|' : ' | ');
            M || (O += ')');
            break;
          case e.ArrayType:
            for (O = '[', $ = 0, z = T.elements.length; $ < z; ++$)
              (O += J(T.elements[$], P)), $ + 1 !== z && (O += P ? ',' : ', ');
            O += ']';
            break;
          case e.RecordType:
            for (O = '{', $ = 0, z = T.fields.length; $ < z; ++$)
              (O += J(T.fields[$], P)), $ + 1 !== z && (O += P ? ',' : ', ');
            O += '}';
            break;
          case e.FieldType:
            T.value
              ? (O = T.key + (P ? ':' : ': ') + J(T.value, P))
              : (O = T.key);
            break;
          case e.FunctionType:
            for (
              O = P ? 'function(' : 'function (',
                T.this &&
                  (T.new
                    ? (O += P ? 'new:' : 'new: ')
                    : (O += P ? 'this:' : 'this: '),
                  (O += J(T.this, P)),
                  T.params.length !== 0 && (O += P ? ',' : ', ')),
                $ = 0,
                z = T.params.length;
              $ < z;
              ++$
            )
              (O += J(T.params[$], P)), $ + 1 !== z && (O += P ? ',' : ', ');
            (O += ')'), T.result && (O += (P ? ':' : ': ') + J(T.result, P));
            break;
          case e.ParameterType:
            O = T.name + (P ? ':' : ': ') + J(T.expression, P);
            break;
          case e.RestType:
            (O = '...'), T.expression && (O += J(T.expression, P));
            break;
          case e.NonNullableType:
            T.prefix
              ? (O = `!${J(T.expression, P)}`)
              : (O = `${J(T.expression, P)}!`);
            break;
          case e.OptionalType:
            O = `${J(T.expression, P)}=`;
            break;
          case e.NullableType:
            T.prefix
              ? (O = `?${J(T.expression, P)}`)
              : (O = `${J(T.expression, P)}?`);
            break;
          case e.NameExpression:
            O = T.name;
            break;
          case e.TypeApplication:
            for (
              O = `${J(T.expression, P)}.<`, $ = 0, z = T.applications.length;
              $ < z;
              ++$
            )
              (O += J(T.applications[$], P)),
                $ + 1 !== z && (O += P ? ',' : ', ');
            O += '>';
            break;
          case e.StringLiteralType:
            O = `"${T.value}"`;
            break;
          case e.NumericLiteralType:
            O = String(T.value);
            break;
          case e.BooleanLiteralType:
            O = String(T.value);
            break;
          default:
            p.throwError(`Unknown type ${T.type}`);
        }
        return O;
      }
      function Ue(T, P) {
        return P == null && (P = {}), J(T, P.compact, P.topLevel);
      }
      (Hr.parseType = ke),
        (Hr.parseParamType = Ne),
        (Hr.stringify = Ue),
        (Hr.Syntax = e);
    })();
  });
  const Cm = S((Je) => {
    l();
    c();
    d();
    (function () {
      let e;
      let t;
      let r;
      let n;
      let a;
      (n = Ti()), (e = Dm()), (t = _i());
      function o(w, k, N) {
        return w.slice(k, N);
      }
      a = (function () {
        const w = Object.prototype.hasOwnProperty;
        return function (N, H) {
          return w.call(N, H);
        };
      })();
      function i(w) {
        const k = {};
        let N;
        for (N in w) w.hasOwnProperty(N) && (k[N] = w[N]);
        return k;
      }
      function u(w) {
        return (
          (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
        );
      }
      function s(w) {
        return w === 'param' || w === 'argument' || w === 'arg';
      }
      function p(w) {
        return w === 'return' || w === 'returns';
      }
      function y(w) {
        return w === 'property' || w === 'prop';
      }
      function b(w) {
        return (
          s(w) ||
          y(w) ||
          w === 'alias' ||
          w === 'this' ||
          w === 'mixes' ||
          w === 'requires'
        );
      }
      function m(w) {
        return b(w) || w === 'const' || w === 'constant';
      }
      function g(w) {
        return y(w) || s(w);
      }
      function A(w) {
        return y(w) || s(w);
      }
      function E(w) {
        return (
          s(w) ||
          p(w) ||
          w === 'define' ||
          w === 'enum' ||
          w === 'implements' ||
          w === 'this' ||
          w === 'type' ||
          w === 'typedef' ||
          y(w)
        );
      }
      function x(w) {
        return (
          E(w) ||
          w === 'throws' ||
          w === 'const' ||
          w === 'constant' ||
          w === 'namespace' ||
          w === 'member' ||
          w === 'var' ||
          w === 'module' ||
          w === 'constructor' ||
          w === 'class' ||
          w === 'extends' ||
          w === 'augments' ||
          w === 'public' ||
          w === 'private' ||
          w === 'protected'
        );
      }
      const F =
        '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]';
      const B = `(${F}*(?:\\*${F}?)?)(.+|[\r
\u2028\u2029])`;
      function I(w) {
        return w
          .replace(/^\/\*\*?/, '')
          .replace(/\*\/$/, '')
          .replace(new RegExp(B, 'g'), '$2')
          .replace(/\s*$/, '');
      }
      function L(w, k) {
        for (
          var N = w.replace(/^\/\*\*?/, ''), H = 0, V = new RegExp(B, 'g'), U;
          (U = V.exec(N));

        )
          if (((H += U[1].length), U.index + U[0].length > k + H))
            return k + H + w.length - N.length;
        return w.replace(/\*\/$/, '').replace(/\s*$/, '').length;
      }
      (function (w) {
        let k;
        let N;
        let H;
        let V;
        let U;
        let Q;
        let ee;
        let X;
        let R;
        function _() {
          const M = U.charCodeAt(N);
          return (
            (N += 1),
            n.code.isLineTerminator(M) &&
              !(M === 13 && U.charCodeAt(N) === 10) &&
              (H += 1),
            String.fromCharCode(M)
          );
        }
        function q() {
          let M = '';
          for (_(); N < V && u(U.charCodeAt(N)); ) M += _();
          return M;
        }
        function W() {
          let M;
          let O;
          let $ = N;
          for (O = !1; $ < V; ) {
            if (
              ((M = U.charCodeAt($)),
              n.code.isLineTerminator(M) &&
                !(M === 13 && U.charCodeAt($ + 1) === 10))
            )
              O = !0;
            else if (O) {
              if (M === 64) break;
              n.code.isWhiteSpace(M) || (O = !1);
            }
            $ += 1;
          }
          return $;
        }
        function Y(M, O, $) {
          for (var z, pe, oe, ie, Ae = !1; N < O; )
            if (((z = U.charCodeAt(N)), n.code.isWhiteSpace(z))) _();
            else if (z === 123) {
              _();
              break;
            } else {
              Ae = !0;
              break;
            }
          if (Ae) return null;
          for (pe = 1, oe = ''; N < O; )
            if (((z = U.charCodeAt(N)), n.code.isLineTerminator(z))) _();
            else {
              if (z === 125) {
                if (((pe -= 1), pe === 0)) {
                  _();
                  break;
                }
              } else z === 123 && (pe += 1);
              oe === '' && (ie = N), (oe += _());
            }
          return pe !== 0
            ? t.throwError('Braces are not balanced')
            : A(M)
            ? e.parseParamType(oe, { startIndex: Ne(ie), range: $ })
            : e.parseType(oe, { startIndex: Ne(ie), range: $ });
        }
        function K(M) {
          let O;
          if (
            !n.code.isIdentifierStartES5(U.charCodeAt(N)) &&
            !U[N].match(/[0-9]/)
          )
            return null;
          for (O = _(); N < M && n.code.isIdentifierPartES5(U.charCodeAt(N)); )
            O += _();
          return O;
        }
        function Z(M) {
          for (
            ;
            N < M &&
            (n.code.isWhiteSpace(U.charCodeAt(N)) ||
              n.code.isLineTerminator(U.charCodeAt(N)));

          )
            _();
        }
        function se(M, O, $) {
          let z = '';
          let pe;
          let oe;
          if ((Z(M), N >= M)) return null;
          if (U.charCodeAt(N) === 91)
            if (O) (pe = !0), (z = _());
            else return null;
          if (((z += K(M)), $))
            for (
              U.charCodeAt(N) === 58 &&
                (z === 'module' || z === 'external' || z === 'event') &&
                ((z += _()), (z += K(M))),
                U.charCodeAt(N) === 91 &&
                  U.charCodeAt(N + 1) === 93 &&
                  ((z += _()), (z += _()));
              U.charCodeAt(N) === 46 ||
              U.charCodeAt(N) === 47 ||
              U.charCodeAt(N) === 35 ||
              U.charCodeAt(N) === 45 ||
              U.charCodeAt(N) === 126;

            )
              (z += _()), (z += K(M));
          if (pe) {
            if ((Z(M), U.charCodeAt(N) === 61)) {
              (z += _()), Z(M);
              for (var ie, Ae = 1; N < M; ) {
                if (
                  ((ie = U.charCodeAt(N)),
                  n.code.isWhiteSpace(ie) &&
                    (oe || (Z(M), (ie = U.charCodeAt(N)))),
                  ie === 39 && (oe ? oe === "'" && (oe = '') : (oe = "'")),
                  ie === 34 && (oe ? oe === '"' && (oe = '') : (oe = '"')),
                  ie === 91)
                )
                  Ae++;
                else if (ie === 93 && --Ae === 0) break;
                z += _();
              }
            }
            if ((Z(M), N >= M || U.charCodeAt(N) !== 93)) return null;
            z += _();
          }
          return z;
        }
        function ke() {
          for (; N < V && U.charCodeAt(N) !== 64; ) _();
          return N >= V ? !1 : (t.assert(U.charCodeAt(N) === 64), !0);
        }
        function Ne(M) {
          return U === Q ? M : L(Q, M);
        }
        function J(M, O) {
          (this._options = M),
            (this._title = O.toLowerCase()),
            (this._tag = { title: O, description: null }),
            this._options.lineNumbers && (this._tag.lineNumber = H),
            (this._first = N - O.length - 1),
            (this._last = 0),
            (this._extra = {});
        }
        (J.prototype.addError = function (O) {
          const $ = Array.prototype.slice.call(arguments, 1);
          const z = O.replace(
            /%(\d)/g,
            (pe, oe) => (
              t.assert(oe < $.length, 'Message reference must be in range'),
              $[oe]
            )
          );
          return (
            this._tag.errors || (this._tag.errors = []),
            R && t.throwError(z),
            this._tag.errors.push(z),
            ee
          );
        }),
          (J.prototype.parseType = function () {
            if (E(this._title))
              try {
                if (
                  ((this._tag.type = Y(
                    this._title,
                    this._last,
                    this._options.range
                  )),
                  !this._tag.type &&
                    !s(this._title) &&
                    !p(this._title) &&
                    !this.addError('Missing or invalid tag type'))
                )
                  return !1;
              } catch (M) {
                if (((this._tag.type = null), !this.addError(M.message)))
                  return !1;
              }
            else if (x(this._title))
              try {
                this._tag.type = Y(
                  this._title,
                  this._last,
                  this._options.range
                );
              } catch {}
            return !0;
          }),
          (J.prototype._parseNamePath = function (M) {
            let O;
            return (
              (O = se(this._last, X && A(this._title), !0)),
              !O && !M && !this.addError('Missing or invalid tag name')
                ? !1
                : ((this._tag.name = O), !0)
            );
          }),
          (J.prototype.parseNamePath = function () {
            return this._parseNamePath(!1);
          }),
          (J.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0);
          }),
          (J.prototype.parseName = function () {
            let M;
            let O;
            if (m(this._title))
              if (
                ((this._tag.name = se(
                  this._last,
                  X && A(this._title),
                  g(this._title)
                )),
                this._tag.name)
              )
                (O = this._tag.name),
                  O.charAt(0) === '[' &&
                    O.charAt(O.length - 1) === ']' &&
                    ((M = O.substring(1, O.length - 1).split('=')),
                    M.length > 1 && (this._tag.default = M.slice(1).join('=')),
                    (this._tag.name = M[0]),
                    this._tag.type &&
                      this._tag.type.type !== 'OptionalType' &&
                      (this._tag.type = {
                        type: 'OptionalType',
                        expression: this._tag.type,
                      }));
              else {
                if (!b(this._title)) return !0;
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null);
                else if (!this.addError('Missing or invalid tag name'))
                  return !1;
              }
            return !0;
          }),
          (J.prototype.parseDescription = function () {
            let O = o(U, N, this._last).trim();
            return (
              O &&
                (/^-\s+/.test(O) && (O = O.substring(2)),
                (this._tag.description = O)),
              !0
            );
          }),
          (J.prototype.parseCaption = function () {
            const O = o(U, N, this._last).trim();
            const $ = '<caption>';
            const z = '</caption>';
            const pe = O.indexOf($);
            const oe = O.indexOf(z);
            return (
              pe >= 0 && oe >= 0
                ? ((this._tag.caption = O.substring(pe + $.length, oe).trim()),
                  (this._tag.description = O.substring(oe + z.length).trim()))
                : (this._tag.description = O),
              !0
            );
          }),
          (J.prototype.parseKind = function () {
            let O;
            let $;
            return (
              ($ = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (O = o(U, N, this._last).trim()),
              (this._tag.kind = O),
              !(!a($, O) && !this.addError("Invalid kind name '%0'", O))
            );
          }),
          (J.prototype.parseAccess = function () {
            let O;
            return (
              (O = o(U, N, this._last).trim()),
              (this._tag.access = O),
              !(
                O !== 'private' &&
                O !== 'protected' &&
                O !== 'public' &&
                !this.addError("Invalid access name '%0'", O)
              )
            );
          }),
          (J.prototype.parseThis = function () {
            const O = o(U, N, this._last).trim();
            if (O && O.charAt(0) === '{') {
              const $ = this.parseType();
              return ($ && this._tag.type.type === 'NameExpression') ||
                this._tag.type.type === 'UnionType'
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError('Invalid name for this');
            }
            return this.parseNamePath();
          }),
          (J.prototype.parseVariation = function () {
            let O;
            let $;
            return (
              ($ = o(U, N, this._last).trim()),
              (O = parseFloat($, 10)),
              (this._tag.variation = O),
              !(isNaN(O) && !this.addError("Invalid variation '%0'", $))
            );
          }),
          (J.prototype.ensureEnd = function () {
            const M = o(U, N, this._last).trim();
            return !(M && !this.addError("Unknown content '%0'", M));
          }),
          (J.prototype.epilogue = function () {
            let O;
            return (
              (O = this._tag.description),
              !(
                A(this._title) &&
                !this._tag.type &&
                O &&
                O.charAt(0) === '[' &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !X && !this.addError('Missing or invalid tag name'))
              )
            );
          }),
          (k = {
            access: ['parseAccess'],
            alias: ['parseNamePath', 'ensureEnd'],
            augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            example: ['parseCaption'],
            deprecated: ['parseDescription'],
            global: ['ensureEnd'],
            inner: ['ensureEnd'],
            instance: ['ensureEnd'],
            kind: ['parseKind'],
            mixes: ['parseNamePath', 'ensureEnd'],
            mixin: ['parseNamePathOptional', 'ensureEnd'],
            member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            method: ['parseNamePathOptional', 'ensureEnd'],
            module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            func: ['parseNamePathOptional', 'ensureEnd'],
            function: ['parseNamePathOptional', 'ensureEnd'],
            var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            name: ['parseNamePath', 'ensureEnd'],
            namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            private: ['parseType', 'parseDescription'],
            protected: ['parseType', 'parseDescription'],
            public: ['parseType', 'parseDescription'],
            readonly: ['ensureEnd'],
            requires: ['parseNamePath', 'ensureEnd'],
            since: ['parseDescription'],
            static: ['ensureEnd'],
            summary: ['parseDescription'],
            this: ['parseThis', 'ensureEnd'],
            todo: ['parseDescription'],
            typedef: ['parseType', 'parseNamePathOptional'],
            variation: ['parseVariation'],
            version: ['parseDescription'],
          }),
          (J.prototype.parse = function () {
            let O;
            let $;
            let z;
            let pe;
            if (!this._title && !this.addError('Missing or invalid title'))
              return null;
            for (
              this._last = W(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    U.slice(0, this._last).replace(/\s*$/, '').length,
                  ].map(Ne)),
                a(k, this._title)
                  ? (z = k[this._title])
                  : (z = [
                      'parseType',
                      'parseName',
                      'parseDescription',
                      'epilogue',
                    ]),
                O = 0,
                $ = z.length;
              O < $;
              ++O
            )
              if (((pe = z[O]), !this[pe]())) return null;
            return this._tag;
          });
        function Ue(M) {
          let O;
          let $;
          let z;
          if (!ke()) return null;
          for (O = q(), $ = new J(M, O), z = $.parse(); N < $._last; ) _();
          return z;
        }
        function T(M) {
          let O = '';
          let $;
          let z;
          for (z = !0; N < V && (($ = U.charCodeAt(N)), !(z && $ === 64)); )
            n.code.isLineTerminator($)
              ? (z = !0)
              : z && !n.code.isWhiteSpace($) && (z = !1),
              (O += _());
          return M ? O : O.trim();
        }
        function P(M, O) {
          const $ = [];
          let z;
          let pe;
          let oe;
          let ie;
          let Ae;
          if (
            (O === void 0 && (O = {}),
            typeof O.unwrap === 'boolean' && O.unwrap ? (U = I(M)) : (U = M),
            (Q = M),
            O.tags)
          )
            if (Array.isArray(O.tags))
              for (oe = {}, ie = 0, Ae = O.tags.length; ie < Ae; ie++)
                typeof O.tags[ie] === 'string'
                  ? (oe[O.tags[ie]] = !0)
                  : t.throwError(`Invalid "tags" parameter: ${O.tags}`);
            else t.throwError(`Invalid "tags" parameter: ${O.tags}`);
          for (
            V = U.length,
              N = 0,
              H = 0,
              ee = O.recoverable,
              X = O.sloppy,
              R = O.strict,
              pe = T(O.preserveWhitespace);
            (z = Ue(O)), !!z;

          )
            (!oe || oe.hasOwnProperty(z.title)) && $.push(z);
          return { description: pe, tags: $ };
        }
        w.parse = P;
      })((r = {})),
        (Je.version = t.VERSION),
        (Je.parse = r.parse),
        (Je.parseType = e.parseType),
        (Je.parseParamType = e.parseParamType),
        (Je.unwrapComment = I),
        (Je.Syntax = i(e.Syntax)),
        (Je.Error = t.DoctrineError),
        (Je.type = {
          Syntax: Je.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        });
    })();
  });
  const Vm = S((Wee, Gm) => {
    l();
    c();
    d();
    Gm.exports = {
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '.js-toc-ignore',
      hasInnerContainers: !1,
      linkClass: 'toc-link',
      extraLinkClasses: '',
      activeLinkClass: 'is-active-link',
      listClass: 'toc-list',
      extraListClasses: '',
      isCollapsedClass: 'is-collapsed',
      collapsibleClass: 'is-collapsible',
      listItemClass: 'toc-list-item',
      activeListItemClass: 'is-active-li',
      collapseDepth: 0,
      scrollSmooth: !0,
      scrollSmoothDuration: 420,
      scrollSmoothOffset: 0,
      scrollEndCallback(e) {},
      headingsOffset: 1,
      throttleTimeout: 50,
      positionFixedSelector: null,
      positionFixedClass: 'is-position-fixed',
      fixedSidebarOffset: 'auto',
      includeHtml: !1,
      includeTitleTags: !1,
      onClick(e) {},
      orderedList: !0,
      scrollContainer: null,
      skipRendering: !1,
      headingLabelCallback: !1,
      ignoreHiddenElements: !1,
      headingObjectCallback: null,
      basePath: '',
      disableTocScrollSync: !1,
      tocScrollOffset: 0,
    };
  });
  const Ym = S((Yee, Km) => {
    l();
    c();
    d();
    Km.exports = function (e) {
      const t = [].forEach;
      const r = [].some;
      const n = document.body;
      let a;
      let o = !0;
      const i = ' ';
      function u(F, B) {
        const I = B.appendChild(p(F));
        if (F.children.length) {
          const L = y(F.isCollapsed);
          F.children.forEach((w) => {
            u(w, L);
          }),
            I.appendChild(L);
        }
      }
      function s(F, B) {
        const I = !1;
        const L = y(I);
        if (
          (B.forEach((w) => {
            u(w, L);
          }),
          (a = F || a),
          a !== null)
        )
          return (
            a.firstChild && a.removeChild(a.firstChild),
            B.length === 0 ? a : a.appendChild(L)
          );
      }
      function p(F) {
        const B = document.createElement('li');
        const I = document.createElement('a');
        return (
          e.listItemClass && B.setAttribute('class', e.listItemClass),
          e.onClick && (I.onclick = e.onClick),
          e.includeTitleTags && I.setAttribute('title', F.textContent),
          e.includeHtml && F.childNodes.length
            ? t.call(F.childNodes, (L) => {
                I.appendChild(L.cloneNode(!0));
              })
            : (I.textContent = F.textContent),
          I.setAttribute('href', `${e.basePath}#${F.id}`),
          I.setAttribute(
            'class',
            `${e.linkClass + i}node-name--${F.nodeName}${i}${
              e.extraLinkClasses
            }`
          ),
          B.appendChild(I),
          B
        );
      }
      function y(F) {
        const B = e.orderedList ? 'ol' : 'ul';
        const I = document.createElement(B);
        let L = e.listClass + i + e.extraListClasses;
        return (
          F &&
            ((L = L + i + e.collapsibleClass),
            (L = L + i + e.isCollapsedClass)),
          I.setAttribute('class', L),
          I
        );
      }
      function b() {
        if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
          var F;
          F = document.querySelector(e.scrollContainer).scrollTop;
        } else F = document.documentElement.scrollTop || n.scrollTop;
        const B = document.querySelector(e.positionFixedSelector);
        e.fixedSidebarOffset === 'auto' && (e.fixedSidebarOffset = a.offsetTop),
          F > e.fixedSidebarOffset
            ? B.className.indexOf(e.positionFixedClass) === -1 &&
              (B.className += i + e.positionFixedClass)
            : (B.className = B.className
                .split(i + e.positionFixedClass)
                .join(''));
      }
      function m(F) {
        let B = 0;
        return (
          F !== null &&
            ((B = F.offsetTop),
            e.hasInnerContainers && (B += m(F.offsetParent))),
          B
        );
      }
      function g(F) {
        if (e.scrollContainer && document.querySelector(e.scrollContainer)) {
          var B;
          B = document.querySelector(e.scrollContainer).scrollTop;
        } else B = document.documentElement.scrollTop || n.scrollTop;
        e.positionFixedSelector && b();
        const I = F;
        let L;
        if (o && a !== null && I.length > 0) {
          r.call(I, (Q, ee) => {
            if (m(Q) > B + e.headingsOffset + 10) {
              const X = ee === 0 ? ee : ee - 1;
              return (L = I[X]), !0;
            }
            if (ee === I.length - 1) return (L = I[I.length - 1]), !0;
          });
          const w = a.querySelector(`.${e.activeLinkClass}`);
          const k = a.querySelector(
            `.${e.linkClass}.node-name--${L.nodeName}[href="${
              e.basePath
            }#${L.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, '\\$1')}"]`
          );
          if (w === k) return;
          const N = a.querySelectorAll(`.${e.linkClass}`);
          t.call(N, (Q) => {
            Q.className = Q.className.split(i + e.activeLinkClass).join('');
          });
          const H = a.querySelectorAll(`.${e.listItemClass}`);
          t.call(H, (Q) => {
            Q.className = Q.className.split(i + e.activeListItemClass).join('');
          }),
            k &&
              k.className.indexOf(e.activeLinkClass) === -1 &&
              (k.className += i + e.activeLinkClass);
          const V = k && k.parentNode;
          V &&
            V.className.indexOf(e.activeListItemClass) === -1 &&
            (V.className += i + e.activeListItemClass);
          const U = a.querySelectorAll(`.${e.listClass}.${e.collapsibleClass}`);
          t.call(U, (Q) => {
            Q.className.indexOf(e.isCollapsedClass) === -1 &&
              (Q.className += i + e.isCollapsedClass);
          }),
            k &&
              k.nextSibling &&
              k.nextSibling.className.indexOf(e.isCollapsedClass) !== -1 &&
              (k.nextSibling.className = k.nextSibling.className
                .split(i + e.isCollapsedClass)
                .join('')),
            A(k && k.parentNode.parentNode);
        }
      }
      function A(F) {
        return F &&
          F.className.indexOf(e.collapsibleClass) !== -1 &&
          F.className.indexOf(e.isCollapsedClass) !== -1
          ? ((F.className = F.className.split(i + e.isCollapsedClass).join('')),
            A(F.parentNode.parentNode))
          : F;
      }
      function E(F) {
        const B = F.target || F.srcElement;
        typeof B.className !== 'string' ||
          B.className.indexOf(e.linkClass) === -1 ||
          (o = !1);
      }
      function x() {
        o = !0;
      }
      return {
        enableTocAnimation: x,
        disableTocAnimation: E,
        render: s,
        updateToc: g,
      };
    };
  });
  const Jm = S((Zee, Xm) => {
    l();
    c();
    d();
    Xm.exports = function (t) {
      const r = [].reduce;
      function n(y) {
        return y[y.length - 1];
      }
      function a(y) {
        return +y.nodeName.toUpperCase().replace('H', '');
      }
      function o(y) {
        try {
          return (
            y instanceof window.HTMLElement ||
            y instanceof window.parent.HTMLElement
          );
        } catch {
          return y instanceof window.HTMLElement;
        }
      }
      function i(y) {
        if (!o(y)) return y;
        if (t.ignoreHiddenElements && (!y.offsetHeight || !y.offsetParent))
          return null;
        const b =
          y.getAttribute('data-heading-label') ||
          (t.headingLabelCallback
            ? String(t.headingLabelCallback(y.textContent))
            : y.textContent.trim());
        const m = {
          id: y.id,
          children: [],
          nodeName: y.nodeName,
          headingLevel: a(y),
          textContent: b,
        };
        return (
          t.includeHtml && (m.childNodes = y.childNodes),
          t.headingObjectCallback ? t.headingObjectCallback(m, y) : m
        );
      }
      function u(y, b) {
        for (
          var m = i(y),
            g = m.headingLevel,
            A = b,
            E = n(A),
            x = E ? E.headingLevel : 0,
            F = g - x;
          F > 0 && ((E = n(A)), !(E && g === E.headingLevel));

        )
          E && E.children !== void 0 && (A = E.children), F--;
        return g >= t.collapseDepth && (m.isCollapsed = !0), A.push(m), A;
      }
      function s(y, b) {
        let m = b;
        t.ignoreSelector &&
          (m = b.split(',').map((A) => `${A.trim()}:not(${t.ignoreSelector})`));
        try {
          return y.querySelectorAll(m);
        } catch {
          return console.warn(`Headers not found with selector: ${m}`), null;
        }
      }
      function p(y) {
        return r.call(
          y,
          (m, g) => {
            const A = i(g);
            return A && u(A, m.nest), m;
          },
          { nest: [] }
        );
      }
      return { nestHeadingsArray: p, selectHeadings: s };
    };
  });
  const Zm = S((nte, Qm) => {
    l();
    c();
    d();
    Qm.exports = function (t) {
      const r = t.tocElement || document.querySelector(t.tocSelector);
      if (r && r.scrollHeight > r.clientHeight) {
        const n = r.querySelector(`.${t.activeListItemClass}`);
        n && (r.scrollTop = n.offsetTop - t.tocScrollOffset);
      }
    };
  });
  const tg = S((eg) => {
    l();
    c();
    d();
    eg.initSmoothScrolling = eR;
    function eR(e) {
      const t = e.duration;
      const r = e.offset;
      const n = location.hash ? i(location.href) : location.href;
      a();
      function a() {
        document.body.addEventListener('click', s, !1);
        function s(p) {
          !o(p.target) ||
            p.target.className.indexOf('no-smooth-scroll') > -1 ||
            (p.target.href.charAt(p.target.href.length - 2) === '#' &&
              p.target.href.charAt(p.target.href.length - 1) === '!') ||
            p.target.className.indexOf(e.linkClass) === -1 ||
            tR(p.target.hash, {
              duration: t,
              offset: r,
              callback() {
                u(p.target.hash);
              },
            });
        }
      }
      function o(s) {
        return (
          s.tagName.toLowerCase() === 'a' &&
          (s.hash.length > 0 || s.href.charAt(s.href.length - 1) === '#') &&
          (i(s.href) === n || `${i(s.href)}#` === n)
        );
      }
      function i(s) {
        return s.slice(0, s.lastIndexOf('#'));
      }
      function u(s) {
        const p = document.getElementById(s.substring(1));
        p &&
          (/^(?:a|select|input|button|textarea)$/i.test(p.tagName) ||
            (p.tabIndex = -1),
          p.focus());
      }
    }
    function tR(e, t) {
      const r = window.pageYOffset;
      const n = {
        duration: t.duration,
        offset: t.offset || 0,
        callback: t.callback,
        easing: t.easing || b,
      };
      const a =
        document.querySelector(`[id="${decodeURI(e).split('#').join('')}"]`) ||
        document.querySelector(`[id="${e.split('#').join('')}"]`);
      const o =
        typeof e === 'string'
          ? n.offset +
            (e
              ? (a && a.getBoundingClientRect().top) || 0
              : -(
                  document.documentElement.scrollTop || document.body.scrollTop
                ))
          : e;
      const i = typeof n.duration === 'function' ? n.duration(o) : n.duration;
      let u;
      let s;
      requestAnimationFrame((m) => {
        (u = m), p(m);
      });
      function p(m) {
        (s = m - u),
          window.scrollTo(0, n.easing(s, r, o, i)),
          s < i ? requestAnimationFrame(p) : y();
      }
      function y() {
        window.scrollTo(0, r + o),
          typeof n.callback === 'function' && n.callback();
      }
      function b(m, g, A, E) {
        return (
          (m /= E / 2),
          m < 1 ? (A / 2) * m * m + g : (m--, (-A / 2) * (m * (m - 2) - 1) + g)
        );
      }
    }
  });
  const ag = S((rg, ng) => {
    l();
    c();
    d();
    (function (e, t) {
      typeof define === 'function' && define.amd
        ? define([], t(e))
        : typeof rg === 'object'
        ? (ng.exports = t(e))
        : (e.tocbot = t(e));
    })(typeof window < 'u' ? window : window || window, (e) => {
      const t = Vm();
      let r = {};
      const n = {};
      const a = Ym();
      const o = Jm();
      const i = Zm();
      let u;
      let s;
      const p =
        !!e &&
        !!e.document &&
        !!e.document.querySelector &&
        !!e.addEventListener;
      if (typeof window > 'u' && !p) return;
      let y;
      const b = Object.prototype.hasOwnProperty;
      function m() {
        for (var x = {}, F = 0; F < arguments.length; F++) {
          const B = arguments[F];
          for (const I in B) b.call(B, I) && (x[I] = B[I]);
        }
        return x;
      }
      function g(x, F, B) {
        F || (F = 250);
        let I;
        let L;
        return function () {
          const w = B || this;
          const k = +new Date();
          const N = arguments;
          I && k < I + F
            ? (clearTimeout(L),
              (L = setTimeout(() => {
                (I = k), x.apply(w, N);
              }, F)))
            : ((I = k), x.apply(w, N));
        };
      }
      function A(x) {
        try {
          return x.contentElement || document.querySelector(x.contentSelector);
        } catch {
          return (
            console.warn(`Contents element not found: ${x.contentSelector}`),
            null
          );
        }
      }
      function E(x) {
        try {
          return x.tocElement || document.querySelector(x.tocSelector);
        } catch {
          return console.warn(`TOC element not found: ${x.tocSelector}`), null;
        }
      }
      return (
        (n.destroy = function () {
          const x = E(r);
          x !== null &&
            (r.skipRendering || (x && (x.innerHTML = '')),
            r.scrollContainer && document.querySelector(r.scrollContainer)
              ? (document
                  .querySelector(r.scrollContainer)
                  .removeEventListener('scroll', this._scrollListener, !1),
                document
                  .querySelector(r.scrollContainer)
                  .removeEventListener('resize', this._scrollListener, !1),
                u &&
                  document
                    .querySelector(r.scrollContainer)
                    .removeEventListener('click', this._clickListener, !1))
              : (document.removeEventListener(
                  'scroll',
                  this._scrollListener,
                  !1
                ),
                document.removeEventListener(
                  'resize',
                  this._scrollListener,
                  !1
                ),
                u &&
                  document.removeEventListener(
                    'click',
                    this._clickListener,
                    !1
                  )));
        }),
        (n.init = function (x) {
          if (p) {
            (r = m(t, x || {})),
              (this.options = r),
              (this.state = {}),
              r.scrollSmooth &&
                ((r.duration = r.scrollSmoothDuration),
                (r.offset = r.scrollSmoothOffset),
                (n.scrollSmooth = tg().initSmoothScrolling(r))),
              (u = a(r)),
              (s = o(r)),
              (this._buildHtml = u),
              (this._parseContent = s),
              (this._headingsArray = y),
              n.destroy();
            const F = A(r);
            if (F !== null) {
              const B = E(r);
              if (
                B !== null &&
                ((y = s.selectHeadings(F, r.headingSelector)), y !== null)
              ) {
                const I = s.nestHeadingsArray(y);
                const L = I.nest;
                r.skipRendering || u.render(B, L),
                  (this._scrollListener = g((k) => {
                    u.updateToc(y), !r.disableTocScrollSync && i(r);
                    const N =
                      k &&
                      k.target &&
                      k.target.scrollingElement &&
                      k.target.scrollingElement.scrollTop === 0;
                    ((k && (k.eventPhase === 0 || k.currentTarget === null)) ||
                      N) &&
                      (u.updateToc(y),
                      r.scrollEndCallback && r.scrollEndCallback(k));
                  }, r.throttleTimeout)),
                  this._scrollListener(),
                  r.scrollContainer && document.querySelector(r.scrollContainer)
                    ? (document
                        .querySelector(r.scrollContainer)
                        .addEventListener('scroll', this._scrollListener, !1),
                      document
                        .querySelector(r.scrollContainer)
                        .addEventListener('resize', this._scrollListener, !1))
                    : (document.addEventListener(
                        'scroll',
                        this._scrollListener,
                        !1
                      ),
                      document.addEventListener(
                        'resize',
                        this._scrollListener,
                        !1
                      ));
                let w = null;
                return (
                  (this._clickListener = g((k) => {
                    r.scrollSmooth && u.disableTocAnimation(k),
                      u.updateToc(y),
                      w && clearTimeout(w),
                      (w = setTimeout(() => {
                        u.enableTocAnimation();
                      }, r.scrollSmoothDuration));
                  }, r.throttleTimeout)),
                  r.scrollContainer && document.querySelector(r.scrollContainer)
                    ? document
                        .querySelector(r.scrollContainer)
                        .addEventListener('click', this._clickListener, !1)
                    : document.addEventListener(
                        'click',
                        this._clickListener,
                        !1
                      ),
                  this
                );
              }
            }
          }
        }),
        (n.refresh = function (x) {
          n.destroy(), n.init(x || this.options);
        }),
        (e.tocbot = n),
        n
      );
    });
  });
  function Tt() {
    return (Tt =
      Object.assign ||
      function (e) {
        for (let t = 1; t < arguments.length; t++) {
          const r = arguments[t];
          for (const n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function $i(e, t) {
    if (e == null) return {};
    let r;
    let n;
    const a = {};
    const o = Object.keys(e);
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r]);
    return a;
  }
  function Mi(e) {
    const t = Se(e);
    const r = Se((n) => {
      t.current && t.current(n);
    });
    return (t.current = e), r.current;
  }
  function mg(e, t, r) {
    const n = Mi(r);
    const a = ne(() => e.toHsva(t));
    const o = a[0];
    const i = a[1];
    const u = Se({ color: t, hsva: o });
    he(() => {
      if (!e.equal(t, u.current.color)) {
        const p = e.toHsva(t);
        (u.current = { hsva: p, color: t }), i(p);
      }
    }, [t, e]),
      he(() => {
        let p;
        fg(o, u.current.hsva) ||
          e.equal((p = e.fromHsva(o)), u.current.color) ||
          ((u.current = { hsva: o, color: p }), n(p));
      }, [o, e, n]);
    const s = ge((p) => {
      i((y) => ({ ...y, ...p }));
    }, []);
    return [o, s];
  }
  let ur;
  let Vr;
  let Li;
  let og;
  let ig;
  let Ui;
  let Kr;
  let Hi;
  let xe;
  let rR;
  let nR;
  let ji;
  let aR;
  let oR;
  let iR;
  let uR;
  let sg;
  let qi;
  let oa;
  let lg;
  let sR;
  let aa;
  let lR;
  let cg;
  let dg;
  let pg;
  let fg;
  let hg;
  let cR;
  let dR;
  let pR;
  let fR;
  let ug;
  let gg;
  let hR;
  let mR;
  let yg;
  let gR;
  let Eg;
  let yR;
  let bg;
  let ER;
  let Ag;
  const vg = Ze(() => {
    l();
    c();
    d();
    Ot();
    (ur = function (e, t, r) {
      return (
        t === void 0 && (t = 0),
        r === void 0 && (r = 1),
        e > r ? r : e < t ? t : e
      );
    }),
      (Vr = function (e) {
        return 'touches' in e;
      }),
      (Li = function (e) {
        return (e && e.ownerDocument.defaultView) || self;
      }),
      (og = function (e, t, r) {
        const n = e.getBoundingClientRect();
        const a = Vr(t)
          ? (function (o, i) {
              for (let u = 0; u < o.length; u++)
                if (o[u].identifier === i) return o[u];
              return o[0];
            })(t.touches, r)
          : t;
        return {
          left: ur((a.pageX - (n.left + Li(e).pageXOffset)) / n.width),
          top: ur((a.pageY - (n.top + Li(e).pageYOffset)) / n.height),
        };
      }),
      (ig = function (e) {
        !Vr(e) && e.preventDefault();
      }),
      (Ui = h.memo((e) => {
        const t = e.onMove;
        const r = e.onKey;
        const n = $i(e, ['onMove', 'onKey']);
        const a = Se(null);
        const o = Mi(t);
        const i = Mi(r);
        const u = Se(null);
        const s = Se(!1);
        const p = ot(() => {
          const g = function (x) {
            ig(x),
              (Vr(x) ? x.touches.length > 0 : x.buttons > 0) && a.current
                ? o(og(a.current, x, u.current))
                : E(!1);
          };
          const A = function () {
            return E(!1);
          };
          function E(x) {
            const F = s.current;
            const B = Li(a.current);
            const I = x ? B.addEventListener : B.removeEventListener;
            I(F ? 'touchmove' : 'mousemove', g),
              I(F ? 'touchend' : 'mouseup', A);
          }
          return [
            function (x) {
              const F = x.nativeEvent;
              const B = a.current;
              if (
                B &&
                (ig(F),
                !(function (L, w) {
                  return w && !Vr(L);
                })(F, s.current) && B)
              ) {
                if (Vr(F)) {
                  s.current = !0;
                  const I = F.changedTouches || [];
                  I.length && (u.current = I[0].identifier);
                }
                B.focus(), o(og(B, F, u.current)), E(!0);
              }
            },
            function (x) {
              const F = x.which || x.keyCode;
              F < 37 ||
                F > 40 ||
                (x.preventDefault(),
                i({
                  left: F === 39 ? 0.05 : F === 37 ? -0.05 : 0,
                  top: F === 40 ? 0.05 : F === 38 ? -0.05 : 0,
                }));
            },
            E,
          ];
        }, [i, o]);
        const y = p[0];
        const b = p[1];
        const m = p[2];
        return (
          he(() => m, [m]),
          h.createElement('div', {
            ...n,
            onTouchStart: y,
            onMouseDown: y,
            className: 'react-colorful__interactive',
            ref: a,
            onKeyDown: b,
            tabIndex: 0,
            role: 'slider',
          })
        );
      })),
      (Kr = function (e) {
        return e.filter(Boolean).join(' ');
      }),
      (Hi = function (e) {
        const t = e.color;
        const r = e.left;
        const n = e.top;
        const a = n === void 0 ? 0.5 : n;
        const o = Kr(['react-colorful__pointer', e.className]);
        return h.createElement(
          'div',
          { className: o, style: { top: `${100 * a}%`, left: `${100 * r}%` } },
          h.createElement('div', {
            className: 'react-colorful__pointer-fill',
            style: { backgroundColor: t },
          })
        );
      }),
      (xe = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 10 ** t),
          Math.round(r * e) / r
        );
      }),
      (rR = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }),
      (nR = function (e) {
        return cg(ji(e));
      }),
      (ji = function (e) {
        return (
          e[0] === '#' && (e = e.substring(1)),
          e.length < 6
            ? {
                r: parseInt(e[0] + e[0], 16),
                g: parseInt(e[1] + e[1], 16),
                b: parseInt(e[2] + e[2], 16),
                a: e.length === 4 ? xe(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
              }
            : {
                r: parseInt(e.substring(0, 2), 16),
                g: parseInt(e.substring(2, 4), 16),
                b: parseInt(e.substring(4, 6), 16),
                a:
                  e.length === 8
                    ? xe(parseInt(e.substring(6, 8), 16) / 255, 2)
                    : 1,
              }
        );
      }),
      (aR = function (e, t) {
        return t === void 0 && (t = 'deg'), Number(e) * (rR[t] || 1);
      }),
      (oR = function (e) {
        const t =
          /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
            e
          );
        return t
          ? iR({
              h: aR(t[1], t[2]),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
            })
          : { h: 0, s: 0, v: 0, a: 1 };
      }),
      (iR = function (e) {
        let t = e.s;
        const r = e.l;
        return {
          h: e.h,
          s:
            (t *= (r < 50 ? r : 100 - r) / 100) > 0
              ? ((2 * t) / (r + t)) * 100
              : 0,
          v: r + t,
          a: e.a,
        };
      }),
      (uR = function (e) {
        return lR(lg(e));
      }),
      (sg = function (e) {
        const t = e.s;
        const r = e.v;
        const n = e.a;
        const a = ((200 - t) * r) / 100;
        return {
          h: xe(e.h),
          s: xe(
            a > 0 && a < 200
              ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
              : 0
          ),
          l: xe(a / 2),
          a: xe(n, 2),
        };
      }),
      (qi = function (e) {
        const t = sg(e);
        return `hsl(${t.h}, ${t.s}%, ${t.l}%)`;
      }),
      (oa = function (e) {
        const t = sg(e);
        return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${t.a})`;
      }),
      (lg = function (e) {
        let t = e.h;
        let r = e.s;
        let n = e.v;
        const { a } = e;
        (t = (t / 360) * 6), (r /= 100), (n /= 100);
        const o = Math.floor(t);
        const i = n * (1 - r);
        const u = n * (1 - (t - o) * r);
        const s = n * (1 - (1 - t + o) * r);
        const p = o % 6;
        return {
          r: xe(255 * [n, u, i, i, s, n][p]),
          g: xe(255 * [s, n, n, u, i, i][p]),
          b: xe(255 * [i, i, s, n, n, u][p]),
          a: xe(a, 2),
        };
      }),
      (sR = function (e) {
        const t =
          /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
            e
          );
        return t
          ? cg({
              r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
              g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
              b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
              a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
            })
          : { h: 0, s: 0, v: 0, a: 1 };
      }),
      (aa = function (e) {
        const t = e.toString(16);
        return t.length < 2 ? `0${t}` : t;
      }),
      (lR = function (e) {
        const t = e.r;
        const r = e.g;
        const n = e.b;
        const { a } = e;
        const o = a < 1 ? aa(xe(255 * a)) : '';
        return `#${aa(t)}${aa(r)}${aa(n)}${o}`;
      }),
      (cg = function (e) {
        const t = e.r;
        const r = e.g;
        const n = e.b;
        const { a } = e;
        const o = Math.max(t, r, n);
        const i = o - Math.min(t, r, n);
        const u = i
          ? o === t
            ? (r - n) / i
            : o === r
            ? 2 + (n - t) / i
            : 4 + (t - r) / i
          : 0;
        return {
          h: xe(60 * (u < 0 ? u + 6 : u)),
          s: xe(o ? (i / o) * 100 : 0),
          v: xe((o / 255) * 100),
          a,
        };
      }),
      (dg = h.memo((e) => {
        const t = e.hue;
        const r = e.onChange;
        const n = Kr(['react-colorful__hue', e.className]);
        return h.createElement(
          'div',
          { className: n },
          h.createElement(
            Ui,
            {
              onMove(a) {
                r({ h: 360 * a.left });
              },
              onKey(a) {
                r({ h: ur(t + 360 * a.left, 0, 360) });
              },
              'aria-label': 'Hue',
              'aria-valuenow': xe(t),
              'aria-valuemax': '360',
              'aria-valuemin': '0',
            },
            h.createElement(Hi, {
              className: 'react-colorful__hue-pointer',
              left: t / 360,
              color: qi({ h: t, s: 100, v: 100, a: 1 }),
            })
          )
        );
      })),
      (pg = h.memo((e) => {
        const t = e.hsva;
        const r = e.onChange;
        const n = { backgroundColor: qi({ h: t.h, s: 100, v: 100, a: 1 }) };
        return h.createElement(
          'div',
          { className: 'react-colorful__saturation', style: n },
          h.createElement(
            Ui,
            {
              onMove(a) {
                r({ s: 100 * a.left, v: 100 - 100 * a.top });
              },
              onKey(a) {
                r({
                  s: ur(t.s + 100 * a.left, 0, 100),
                  v: ur(t.v - 100 * a.top, 0, 100),
                });
              },
              'aria-label': 'Color',
              'aria-valuetext': `Saturation ${xe(t.s)}%, Brightness ${xe(
                t.v
              )}%`,
            },
            h.createElement(Hi, {
              className: 'react-colorful__saturation-pointer',
              top: 1 - t.v / 100,
              left: t.s / 100,
              color: qi(t),
            })
          )
        );
      })),
      (fg = function (e, t) {
        if (e === t) return !0;
        for (const r in e) if (e[r] !== t[r]) return !1;
        return !0;
      }),
      (hg = function (e, t) {
        return e.replace(/\s/g, '') === t.replace(/\s/g, '');
      }),
      (cR = function (e, t) {
        return e.toLowerCase() === t.toLowerCase() || fg(ji(e), ji(t));
      });
    (pR = typeof window < 'u' ? bu : he),
      (fR = function () {
        return (
          dR || (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
        );
      }),
      (ug = new Map()),
      (gg = function (e) {
        pR(() => {
          const t = e.current ? e.current.ownerDocument : document;
          if (t !== void 0 && !ug.has(t)) {
            const r = t.createElement('style');
            (r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
              ug.set(t, r);
            const n = fR();
            n && r.setAttribute('nonce', n), t.head.appendChild(r);
          }
        }, []);
      }),
      (hR = function (e) {
        const t = e.className;
        const r = e.colorModel;
        const n = e.color;
        const a = n === void 0 ? r.defaultColor : n;
        const o = e.onChange;
        const i = $i(e, ['className', 'colorModel', 'color', 'onChange']);
        const u = Se(null);
        gg(u);
        const s = mg(r, a, o);
        const p = s[0];
        const y = s[1];
        const b = Kr(['react-colorful', t]);
        return h.createElement(
          'div',
          { ...i, ref: u, className: b },
          h.createElement(pg, { hsva: p, onChange: y }),
          h.createElement(dg, {
            hue: p.h,
            onChange: y,
            className: 'react-colorful__last-control',
          })
        );
      }),
      (mR = {
        defaultColor: '000',
        toHsva: nR,
        fromHsva(e) {
          return uR({ h: e.h, s: e.s, v: e.v, a: 1 });
        },
        equal: cR,
      }),
      (yg = function (e) {
        return h.createElement(hR, { ...e, colorModel: mR });
      }),
      (gR = function (e) {
        const t = e.className;
        const r = e.hsva;
        const n = e.onChange;
        const a = {
          backgroundImage: `linear-gradient(90deg, ${oa({ ...r, a: 0 })}, ${oa({
            ...r,
            a: 1,
          })})`,
        };
        const o = Kr(['react-colorful__alpha', t]);
        const i = xe(100 * r.a);
        return h.createElement(
          'div',
          { className: o },
          h.createElement('div', {
            className: 'react-colorful__alpha-gradient',
            style: a,
          }),
          h.createElement(
            Ui,
            {
              onMove(u) {
                n({ a: u.left });
              },
              onKey(u) {
                n({ a: ur(r.a + u.left) });
              },
              'aria-label': 'Alpha',
              'aria-valuetext': `${i}%`,
              'aria-valuenow': i,
              'aria-valuemin': '0',
              'aria-valuemax': '100',
            },
            h.createElement(Hi, {
              className: 'react-colorful__alpha-pointer',
              left: r.a,
              color: oa(r),
            })
          )
        );
      }),
      (Eg = function (e) {
        const t = e.className;
        const r = e.colorModel;
        const n = e.color;
        const a = n === void 0 ? r.defaultColor : n;
        const o = e.onChange;
        const i = $i(e, ['className', 'colorModel', 'color', 'onChange']);
        const u = Se(null);
        gg(u);
        const s = mg(r, a, o);
        const p = s[0];
        const y = s[1];
        const b = Kr(['react-colorful', t]);
        return h.createElement(
          'div',
          { ...i, ref: u, className: b },
          h.createElement(pg, { hsva: p, onChange: y }),
          h.createElement(dg, { hue: p.h, onChange: y }),
          h.createElement(gR, {
            hsva: p,
            onChange: y,
            className: 'react-colorful__last-control',
          })
        );
      }),
      (yR = {
        defaultColor: 'hsla(0, 0%, 0%, 1)',
        toHsva: oR,
        fromHsva: oa,
        equal: hg,
      }),
      (bg = function (e) {
        return h.createElement(Eg, { ...e, colorModel: yR });
      }),
      (ER = {
        defaultColor: 'rgba(0, 0, 0, 1)',
        toHsva: sR,
        fromHsva(e) {
          const t = lg(e);
          return `rgba(${t.r}, ${t.g}, ${t.b}, ${t.a})`;
        },
        equal: hg,
      }),
      (Ag = function (e) {
        return h.createElement(Eg, { ...e, colorModel: ER });
      });
  });
  const Cg = S((bte, Dg) => {
    l();
    c();
    d();
    Dg.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    };
  });
  const zi = S((Cte, Fg) => {
    l();
    c();
    d();
    const Yr = Cg();
    const xg = {};
    for (const e of Object.keys(Yr)) xg[Yr[e]] = e;
    const G = {
      rgb: { channels: 3, labels: 'rgb' },
      hsl: { channels: 3, labels: 'hsl' },
      hsv: { channels: 3, labels: 'hsv' },
      hwb: { channels: 3, labels: 'hwb' },
      cmyk: { channels: 4, labels: 'cmyk' },
      xyz: { channels: 3, labels: 'xyz' },
      lab: { channels: 3, labels: 'lab' },
      lch: { channels: 3, labels: 'lch' },
      hex: { channels: 1, labels: ['hex'] },
      keyword: { channels: 1, labels: ['keyword'] },
      ansi16: { channels: 1, labels: ['ansi16'] },
      ansi256: { channels: 1, labels: ['ansi256'] },
      hcg: { channels: 3, labels: ['h', 'c', 'g'] },
      apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
      gray: { channels: 1, labels: ['gray'] },
    };
    Fg.exports = G;
    for (const e of Object.keys(G)) {
      if (!('channels' in G[e]))
        throw new Error(`missing channels property: ${e}`);
      if (!('labels' in G[e]))
        throw new Error(`missing channel labels property: ${e}`);
      if (G[e].labels.length !== G[e].channels)
        throw new Error(`channel and label counts mismatch: ${e}`);
      const { channels: t, labels: r } = G[e];
      delete G[e].channels,
        delete G[e].labels,
        Object.defineProperty(G[e], 'channels', { value: t }),
        Object.defineProperty(G[e], 'labels', { value: r });
    }
    G.rgb.hsl = function (e) {
      const t = e[0] / 255;
      const r = e[1] / 255;
      const n = e[2] / 255;
      const a = Math.min(t, r, n);
      const o = Math.max(t, r, n);
      const i = o - a;
      let u;
      let s;
      o === a
        ? (u = 0)
        : t === o
        ? (u = (r - n) / i)
        : r === o
        ? (u = 2 + (n - t) / i)
        : n === o && (u = 4 + (t - r) / i),
        (u = Math.min(u * 60, 360)),
        u < 0 && (u += 360);
      const p = (a + o) / 2;
      return (
        o === a
          ? (s = 0)
          : p <= 0.5
          ? (s = i / (o + a))
          : (s = i / (2 - o - a)),
        [u, s * 100, p * 100]
      );
    };
    G.rgb.hsv = function (e) {
      let t;
      let r;
      let n;
      let a;
      let o;
      const i = e[0] / 255;
      const u = e[1] / 255;
      const s = e[2] / 255;
      const p = Math.max(i, u, s);
      const y = p - Math.min(i, u, s);
      const b = function (m) {
        return (p - m) / 6 / y + 1 / 2;
      };
      return (
        y === 0
          ? ((a = 0), (o = 0))
          : ((o = y / p),
            (t = b(i)),
            (r = b(u)),
            (n = b(s)),
            i === p
              ? (a = n - r)
              : u === p
              ? (a = 1 / 3 + t - n)
              : s === p && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, p * 100]
      );
    };
    G.rgb.hwb = function (e) {
      const t = e[0];
      const r = e[1];
      let n = e[2];
      const a = G.rgb.hsl(e)[0];
      const o = (1 / 255) * Math.min(t, Math.min(r, n));
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
      );
    };
    G.rgb.cmyk = function (e) {
      const t = e[0] / 255;
      const r = e[1] / 255;
      const n = e[2] / 255;
      const a = Math.min(1 - t, 1 - r, 1 - n);
      const o = (1 - t - a) / (1 - a) || 0;
      const i = (1 - r - a) / (1 - a) || 0;
      const u = (1 - n - a) / (1 - a) || 0;
      return [o * 100, i * 100, u * 100, a * 100];
    };
    function bR(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
    }
    G.rgb.keyword = function (e) {
      const t = xg[e];
      if (t) return t;
      let r = 1 / 0;
      let n;
      for (const a of Object.keys(Yr)) {
        const o = Yr[a];
        const i = bR(e, o);
        i < r && ((r = i), (n = a));
      }
      return n;
    };
    G.keyword.rgb = function (e) {
      return Yr[e];
    };
    G.rgb.xyz = function (e) {
      let t = e[0] / 255;
      let r = e[1] / 255;
      let n = e[2] / 255;
      (t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92);
      const a = t * 0.4124 + r * 0.3576 + n * 0.1805;
      const o = t * 0.2126 + r * 0.7152 + n * 0.0722;
      const i = t * 0.0193 + r * 0.1192 + n * 0.9505;
      return [a * 100, o * 100, i * 100];
    };
    G.rgb.lab = function (e) {
      const t = G.rgb.xyz(e);
      let r = t[0];
      let n = t[1];
      let a = t[2];
      (r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116);
      const o = 116 * n - 16;
      const i = 500 * (r - n);
      const u = 200 * (n - a);
      return [o, i, u];
    };
    G.hsl.rgb = function (e) {
      const t = e[0] / 360;
      const r = e[1] / 100;
      const n = e[2] / 100;
      let a;
      let o;
      let i;
      if (r === 0) return (i = n * 255), [i, i, i];
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r);
      const u = 2 * n - a;
      const s = [0, 0, 0];
      for (let p = 0; p < 3; p++)
        (o = t + (1 / 3) * -(p - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (i = u + (a - u) * 6 * o)
            : 2 * o < 1
            ? (i = a)
            : 3 * o < 2
            ? (i = u + (a - u) * (2 / 3 - o) * 6)
            : (i = u),
          (s[p] = i * 255);
      return s;
    };
    G.hsl.hsv = function (e) {
      const t = e[0];
      let r = e[1] / 100;
      let n = e[2] / 100;
      let a = r;
      const o = Math.max(n, 0.01);
      (n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o);
      const i = (n + r) / 2;
      const u = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r);
      return [t, u * 100, i * 100];
    };
    G.hsv.rgb = function (e) {
      const t = e[0] / 60;
      const r = e[1] / 100;
      let n = e[2] / 100;
      const a = Math.floor(t) % 6;
      const o = t - Math.floor(t);
      const i = 255 * n * (1 - r);
      const u = 255 * n * (1 - r * o);
      const s = 255 * n * (1 - r * (1 - o));
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, i];
        case 1:
          return [u, n, i];
        case 2:
          return [i, n, s];
        case 3:
          return [i, u, n];
        case 4:
          return [s, i, n];
        case 5:
          return [n, i, u];
      }
    };
    G.hsv.hsl = function (e) {
      const t = e[0];
      const r = e[1] / 100;
      const n = e[2] / 100;
      const a = Math.max(n, 0.01);
      let o;
      let i;
      i = (2 - r) * n;
      const u = (2 - r) * a;
      return (
        (o = r * a),
        (o /= u <= 1 ? u : 2 - u),
        (o = o || 0),
        (i /= 2),
        [t, o * 100, i * 100]
      );
    };
    G.hwb.rgb = function (e) {
      const t = e[0] / 360;
      let r = e[1] / 100;
      let n = e[2] / 100;
      const a = r + n;
      let o;
      a > 1 && ((r /= a), (n /= a));
      const i = Math.floor(6 * t);
      const u = 1 - n;
      (o = 6 * t - i), i & 1 && (o = 1 - o);
      const s = r + o * (u - r);
      let p;
      let y;
      let b;
      switch (i) {
        default:
        case 6:
        case 0:
          (p = u), (y = s), (b = r);
          break;
        case 1:
          (p = s), (y = u), (b = r);
          break;
        case 2:
          (p = r), (y = u), (b = s);
          break;
        case 3:
          (p = r), (y = s), (b = u);
          break;
        case 4:
          (p = s), (y = r), (b = u);
          break;
        case 5:
          (p = u), (y = r), (b = s);
          break;
      }
      return [p * 255, y * 255, b * 255];
    };
    G.cmyk.rgb = function (e) {
      const t = e[0] / 100;
      const r = e[1] / 100;
      const n = e[2] / 100;
      const a = e[3] / 100;
      const o = 1 - Math.min(1, t * (1 - a) + a);
      const i = 1 - Math.min(1, r * (1 - a) + a);
      const u = 1 - Math.min(1, n * (1 - a) + a);
      return [o * 255, i * 255, u * 255];
    };
    G.xyz.rgb = function (e) {
      const t = e[0] / 100;
      const r = e[1] / 100;
      const n = e[2] / 100;
      let a;
      let o;
      let i;
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (i = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (i = i > 0.0031308 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (i = Math.min(Math.max(0, i), 1)),
        [a * 255, o * 255, i * 255]
      );
    };
    G.xyz.lab = function (e) {
      let t = e[0];
      let r = e[1];
      let n = e[2];
      (t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116);
      const a = 116 * r - 16;
      const o = 500 * (t - r);
      const i = 200 * (r - n);
      return [a, o, i];
    };
    G.lab.xyz = function (e) {
      const t = e[0];
      const r = e[1];
      const n = e[2];
      let a;
      let o;
      let i;
      (o = (t + 16) / 116), (a = r / 500 + o), (i = o - n / 200);
      const u = o ** 3;
      const s = a ** 3;
      const p = i ** 3;
      return (
        (o = u > 0.008856 ? u : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (i = p > 0.008856 ? p : (i - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (i *= 108.883),
        [a, o, i]
      );
    };
    G.lab.lch = function (e) {
      const t = e[0];
      const r = e[1];
      const n = e[2];
      let a;
      (a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360);
      const i = Math.sqrt(r * r + n * n);
      return [t, i, a];
    };
    G.lch.lab = function (e) {
      const t = e[0];
      const r = e[1];
      const a = (e[2] / 360) * 2 * Math.PI;
      const o = r * Math.cos(a);
      const i = r * Math.sin(a);
      return [t, o, i];
    };
    G.rgb.ansi16 = function (e, t = null) {
      const [r, n, a] = e;
      let o = t === null ? G.rgb.hsv(e)[2] : t;
      if (((o = Math.round(o / 50)), o === 0)) return 30;
      let i =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255));
      return o === 2 && (i += 60), i;
    };
    G.hsv.ansi16 = function (e) {
      return G.rgb.ansi16(G.hsv.rgb(e), e[2]);
    };
    G.rgb.ansi256 = function (e) {
      const t = e[0];
      const r = e[1];
      const n = e[2];
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5);
    };
    G.ansi16.rgb = function (e) {
      let t = e % 10;
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t];
      const r = (~~(e > 50) + 1) * 0.5;
      const n = (t & 1) * r * 255;
      const a = ((t >> 1) & 1) * r * 255;
      const o = ((t >> 2) & 1) * r * 255;
      return [n, a, o];
    };
    G.ansi256.rgb = function (e) {
      if (e >= 232) {
        const o = (e - 232) * 10 + 8;
        return [o, o, o];
      }
      e -= 16;
      let t;
      const r = (Math.floor(e / 36) / 5) * 255;
      const n = (Math.floor((t = e % 36) / 6) / 5) * 255;
      const a = ((t % 6) / 5) * 255;
      return [r, n, a];
    };
    G.rgb.hex = function (e) {
      const r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase();
      return '000000'.substring(r.length) + r;
    };
    G.hex.rgb = function (e) {
      const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!t) return [0, 0, 0];
      let r = t[0];
      t[0].length === 3 &&
        (r = r
          .split('')
          .map((u) => u + u)
          .join(''));
      const n = parseInt(r, 16);
      const a = (n >> 16) & 255;
      const o = (n >> 8) & 255;
      const i = n & 255;
      return [a, o, i];
    };
    G.rgb.hcg = function (e) {
      const t = e[0] / 255;
      const r = e[1] / 255;
      const n = e[2] / 255;
      const a = Math.max(Math.max(t, r), n);
      const o = Math.min(Math.min(t, r), n);
      const i = a - o;
      let u;
      let s;
      return (
        i < 1 ? (u = o / (1 - i)) : (u = 0),
        i <= 0
          ? (s = 0)
          : a === t
          ? (s = ((r - n) / i) % 6)
          : a === r
          ? (s = 2 + (n - t) / i)
          : (s = 4 + (t - r) / i),
        (s /= 6),
        (s %= 1),
        [s * 360, i * 100, u * 100]
      );
    };
    G.hsl.hcg = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100;
      const n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r);
      let a = 0;
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    G.hsv.hcg = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100;
      const n = t * r;
      let a = 0;
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100];
    };
    G.hcg.rgb = function (e) {
      const t = e[0] / 360;
      const r = e[1] / 100;
      const n = e[2] / 100;
      if (r === 0) return [n * 255, n * 255, n * 255];
      const a = [0, 0, 0];
      const o = (t % 1) * 6;
      const i = o % 1;
      const u = 1 - i;
      let s = 0;
      switch (Math.floor(o)) {
        case 0:
          (a[0] = 1), (a[1] = i), (a[2] = 0);
          break;
        case 1:
          (a[0] = u), (a[1] = 1), (a[2] = 0);
          break;
        case 2:
          (a[0] = 0), (a[1] = 1), (a[2] = i);
          break;
        case 3:
          (a[0] = 0), (a[1] = u), (a[2] = 1);
          break;
        case 4:
          (a[0] = i), (a[1] = 0), (a[2] = 1);
          break;
        default:
          (a[0] = 1), (a[1] = 0), (a[2] = u);
      }
      return (
        (s = (1 - r) * n),
        [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
      );
    };
    G.hcg.hsv = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100;
      const n = t + r * (1 - t);
      let a = 0;
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100];
    };
    G.hcg.hsl = function (e) {
      const t = e[1] / 100;
      const n = (e[2] / 100) * (1 - t) + 0.5 * t;
      let a = 0;
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      );
    };
    G.hcg.hwb = function (e) {
      const t = e[1] / 100;
      const r = e[2] / 100;
      const n = t + r * (1 - t);
      return [e[0], (n - t) * 100, (1 - n) * 100];
    };
    G.hwb.hcg = function (e) {
      const t = e[1] / 100;
      const n = 1 - e[2] / 100;
      const a = n - t;
      let o = 0;
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100];
    };
    G.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255];
    };
    G.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535];
    };
    G.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255];
    };
    G.gray.hsl = function (e) {
      return [0, 0, e[0]];
    };
    G.gray.hsv = G.gray.hsl;
    G.gray.hwb = function (e) {
      return [0, 100, e[0]];
    };
    G.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]];
    };
    G.gray.lab = function (e) {
      return [e[0], 0, 0];
    };
    G.gray.hex = function (e) {
      const t = Math.round((e[0] / 100) * 255) & 255;
      const n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
      return '000000'.substring(n.length) + n;
    };
    G.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100];
    };
  });
  const wg = S((wte, Sg) => {
    l();
    c();
    d();
    const ia = zi();
    function AR() {
      const e = {};
      const t = Object.keys(ia);
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = { distance: -1, parent: null };
      return e;
    }
    function vR(e) {
      const t = AR();
      const r = [e];
      for (t[e].distance = 0; r.length; ) {
        const n = r.pop();
        const a = Object.keys(ia[n]);
        for (let o = a.length, i = 0; i < o; i++) {
          const u = a[i];
          const s = t[u];
          s.distance === -1 &&
            ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(u));
        }
      }
      return t;
    }
    function DR(e, t) {
      return function (r) {
        return t(e(r));
      };
    }
    function CR(e, t) {
      const r = [t[e].parent, e];
      let n = ia[t[e].parent][e];
      let a = t[e].parent;
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = DR(ia[t[a].parent][a], n)),
          (a = t[a].parent);
      return (n.conversion = r), n;
    }
    Sg.exports = function (e) {
      const t = vR(e);
      const r = {};
      const n = Object.keys(t);
      for (let a = n.length, o = 0; o < a; o++) {
        const i = n[o];
        t[i].parent !== null && (r[i] = CR(i, t));
      }
      return r;
    };
  });
  const Tg = S((Ote, Bg) => {
    l();
    c();
    d();
    const Wi = zi();
    const xR = wg();
    const sr = {};
    const FR = Object.keys(Wi);
    function SR(e) {
      const t = function (...r) {
        const n = r[0];
        return n == null ? n : (n.length > 1 && (r = n), e(r));
      };
      return 'conversion' in e && (t.conversion = e.conversion), t;
    }
    function wR(e) {
      const t = function (...r) {
        const n = r[0];
        if (n == null) return n;
        n.length > 1 && (r = n);
        const a = e(r);
        if (typeof a === 'object')
          for (let o = a.length, i = 0; i < o; i++) a[i] = Math.round(a[i]);
        return a;
      };
      return 'conversion' in e && (t.conversion = e.conversion), t;
    }
    FR.forEach((e) => {
      (sr[e] = {}),
        Object.defineProperty(sr[e], 'channels', { value: Wi[e].channels }),
        Object.defineProperty(sr[e], 'labels', { value: Wi[e].labels });
      const t = xR(e);
      Object.keys(t).forEach((n) => {
        const a = t[n];
        (sr[e][n] = wR(a)), (sr[e][n].raw = SR(a));
      });
    });
    Bg.exports = sr;
  });
  const Og = S((kte, _g) => {
    l();
    c();
    d();
    const BR = $e();
    const TR = function () {
      return BR.Date.now();
    };
    _g.exports = TR;
  });
  const Pg = S((jte, Rg) => {
    l();
    c();
    d();
    const _R = /\s/;
    function OR(e) {
      for (var t = e.length; t-- && _R.test(e.charAt(t)); );
      return t;
    }
    Rg.exports = OR;
  });
  const kg = S((Hte, Ig) => {
    l();
    c();
    d();
    const RR = Pg();
    const PR = /^\s+/;
    function IR(e) {
      return e && e.slice(0, RR(e) + 1).replace(PR, '');
    }
    Ig.exports = IR;
  });
  const jg = S((Vte, Lg) => {
    l();
    c();
    d();
    const kR = kg();
    const Ng = We();
    const NR = Br();
    const Mg = 0 / 0;
    const MR = /^[-+]0x[0-9a-f]+$/i;
    const LR = /^0b[01]+$/i;
    const jR = /^0o[0-7]+$/i;
    const qR = parseInt;
    function $R(e) {
      if (typeof e === 'number') return e;
      if (NR(e)) return Mg;
      if (Ng(e)) {
        const t = typeof e.valueOf === 'function' ? e.valueOf() : e;
        e = Ng(t) ? `${t}` : t;
      }
      if (typeof e !== 'string') return e === 0 ? e : +e;
      e = kR(e);
      const r = LR.test(e);
      return r || jR.test(e) ? qR(e.slice(2), r ? 2 : 8) : MR.test(e) ? Mg : +e;
    }
    Lg.exports = $R;
  });
  const Ug = S((Jte, $g) => {
    l();
    c();
    d();
    const UR = We();
    const Gi = Og();
    const qg = jg();
    const HR = 'Expected a function';
    const zR = Math.max;
    const WR = Math.min;
    function GR(e, t, r) {
      let n;
      let a;
      let o;
      let i;
      let u;
      let s;
      let p = 0;
      let y = !1;
      let b = !1;
      let m = !0;
      if (typeof e !== 'function') throw new TypeError(HR);
      (t = qg(t) || 0),
        UR(r) &&
          ((y = !!r.leading),
          (b = 'maxWait' in r),
          (o = b ? zR(qg(r.maxWait) || 0, t) : o),
          (m = 'trailing' in r ? !!r.trailing : m));
      function g(k) {
        const N = n;
        const H = a;
        return (n = a = void 0), (p = k), (i = e.apply(H, N)), i;
      }
      function A(k) {
        return (p = k), (u = setTimeout(F, t)), y ? g(k) : i;
      }
      function E(k) {
        const N = k - s;
        const H = k - p;
        const V = t - N;
        return b ? WR(V, o - H) : V;
      }
      function x(k) {
        const N = k - s;
        const H = k - p;
        return s === void 0 || N >= t || N < 0 || (b && H >= o);
      }
      function F() {
        const k = Gi();
        if (x(k)) return B(k);
        u = setTimeout(F, E(k));
      }
      function B(k) {
        return (u = void 0), m && n ? g(k) : ((n = a = void 0), i);
      }
      function I() {
        u !== void 0 && clearTimeout(u), (p = 0), (n = s = a = u = void 0);
      }
      function L() {
        return u === void 0 ? i : B(Gi());
      }
      function w() {
        const k = Gi();
        const N = x(k);
        if (((n = arguments), (a = this), (s = k), N)) {
          if (u === void 0) return A(s);
          if (b) return clearTimeout(u), (u = setTimeout(F, t)), g(s);
        }
        return u === void 0 && (u = setTimeout(F, t)), i;
      }
      return (w.cancel = I), (w.flush = L), w;
    }
    $g.exports = GR;
  });
  const zg = S((tre, Hg) => {
    l();
    c();
    d();
    const VR = Ug();
    const KR = We();
    const YR = 'Expected a function';
    function XR(e, t, r) {
      let n = !0;
      let a = !0;
      if (typeof e !== 'function') throw new TypeError(YR);
      return (
        KR(r) &&
          ((n = 'leading' in r ? !!r.leading : n),
          (a = 'trailing' in r ? !!r.trailing : a)),
        VR(e, t, { leading: n, maxWait: t, trailing: a })
      );
    }
    Hg.exports = XR;
  });
  const Xg = {};
  mu(Xg, { ColorControl: () => Yg, default: () => h4 });
  let je;
  let Vg;
  let JR;
  let QR;
  let ZR;
  let e4;
  let t4;
  let r4;
  let n4;
  let Wg;
  let a4;
  let o4;
  let Kg;
  let ua;
  let i4;
  let u4;
  let s4;
  let Vi;
  let l4;
  let c4;
  let sa;
  let Gg;
  let lr;
  let d4;
  let p4;
  let la;
  let f4;
  let Yg;
  let h4;
  const Jg = Ze(() => {
    l();
    c();
    d();
    $a();
    Ot();
    vg();
    (je = fe(Tg(), 1)), (Vg = fe(zg(), 1));
    Ha();
    fr();
    (JR = j.div({ position: 'relative', maxWidth: 250 })),
      (QR = j(Zr)({ position: 'absolute', zIndex: 1, top: 4, left: 4 })),
      (ZR = j.div({
        width: 200,
        margin: 5,
        '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
        '.react-colorful__hue': {
          boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
        },
        '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
      })),
      (e4 = j(ka)(({ theme: e }) => ({ fontFamily: e.typography.fonts.base }))),
      (t4 = j.div({
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 16px)',
        gap: 6,
        padding: 3,
        marginTop: 5,
        width: 200,
      })),
      (r4 = j.div(({ theme: e, active: t }) => ({
        width: 16,
        height: 16,
        boxShadow: t
          ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
          : `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: e.appBorderRadius,
      }))),
      (n4 = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
      (Wg = ({ value: e, active: t, onClick: r, style: n, ...a }) => {
        const o = `linear-gradient(${e}, ${e}), ${n4}, linear-gradient(#fff, #fff)`;
        return h.createElement(r4, {
          ...a,
          active: t,
          onClick: r,
          style: { ...n, backgroundImage: o },
        });
      }),
      (a4 = j(Re.Input)(({ theme: e }) => ({
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        boxSizing: 'border-box',
        fontFamily: e.typography.fonts.base,
      }))),
      (o4 = j(Oe)(({ theme: e }) => ({
        position: 'absolute',
        zIndex: 1,
        top: 6,
        right: 7,
        width: 20,
        height: 20,
        padding: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        color: e.input.color,
      }))),
      (Kg = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
        Kg || {}
      )),
      (ua = Object.values(Kg)),
      (i4 = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
      (u4 =
        /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
      (s4 =
        /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
      (Vi = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
      (l4 = /^\s*#?([0-9a-f]{3})\s*$/i),
      (c4 = { hex: yg, rgb: Ag, hsl: bg }),
      (sa = {
        hex: 'transparent',
        rgb: 'rgba(0, 0, 0, 0)',
        hsl: 'hsla(0, 0%, 0%, 0)',
      }),
      (Gg = (e) => {
        const t = e?.match(i4);
        if (!t) return [0, 0, 0, 1];
        const [, r, n, a, o = 1] = t;
        return [r, n, a, o].map(Number);
      }),
      (lr = (e) => {
        if (!e) return;
        let t = !0;
        if (u4.test(e)) {
          const [i, u, s, p] = Gg(e);
          const [y, b, m] = je.default.rgb.hsl([i, u, s]) || [0, 0, 0];
          return {
            valid: t,
            value: e,
            keyword: je.default.rgb.keyword([i, u, s]),
            colorSpace: 'rgb',
            rgb: e,
            hsl: `hsla(${y}, ${b}%, ${m}%, ${p})`,
            hex: `#${je.default.rgb.hex([i, u, s]).toLowerCase()}`,
          };
        }
        if (s4.test(e)) {
          const [i, u, s, p] = Gg(e);
          const [y, b, m] = je.default.hsl.rgb([i, u, s]) || [0, 0, 0];
          return {
            valid: t,
            value: e,
            keyword: je.default.hsl.keyword([i, u, s]),
            colorSpace: 'hsl',
            rgb: `rgba(${y}, ${b}, ${m}, ${p})`,
            hsl: e,
            hex: `#${je.default.hsl.hex([i, u, s]).toLowerCase()}`,
          };
        }
        const r = e.replace('#', '');
        const n = je.default.keyword.rgb(r) || je.default.hex.rgb(r);
        const a = je.default.rgb.hsl(n);
        let o = e;
        if (
          (/[^#a-f0-9]/i.test(e) ? (o = r) : Vi.test(e) && (o = `#${r}`),
          o.startsWith('#'))
        )
          t = Vi.test(o);
        else
          try {
            je.default.keyword.hex(o);
          } catch {
            t = !1;
          }
        return {
          valid: t,
          value: o,
          keyword: je.default.rgb.keyword(n),
          colorSpace: 'hex',
          rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
          hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
          hex: o,
        };
      }),
      (d4 = (e, t, r) => {
        if (!e || !t?.valid) return sa[r];
        if (r !== 'hex') return t?.[r] || sa[r];
        if (!t.hex.startsWith('#'))
          try {
            return `#${je.default.keyword.hex(t.hex)}`;
          } catch {
            return sa.hex;
          }
        const n = t.hex.match(l4);
        if (!n) return Vi.test(t.hex) ? t.hex : sa.hex;
        const [a, o, i] = n[1].split('');
        return `#${a}${a}${o}${o}${i}${i}`;
      }),
      (p4 = (e, t) => {
        const [r, n] = ne(e || '');
        const [a, o] = ne(() => lr(r));
        const [i, u] = ne(a?.colorSpace || 'hex');
        he(() => {
          const b = e || '';
          const m = lr(b);
          n(b), o(m), u(m?.colorSpace || 'hex');
        }, [e]);
        const s = ot(() => d4(r, a, i).toLowerCase(), [r, a, i]);
        const p = ge(
          (b) => {
            const m = lr(b);
            const g = m?.value || b || '';
            n(g),
              g === '' && (o(void 0), t(void 0)),
              m && (o(m), u(m.colorSpace), t(m.value));
          },
          [t]
        );
        const y = ge(() => {
          let b = ua.indexOf(i) + 1;
          b >= ua.length && (b = 0), u(ua[b]);
          const m = a?.[ua[b]] || '';
          n(m), t(m);
        }, [a, i, t]);
        return {
          value: r,
          realValue: s,
          updateValue: p,
          color: a,
          colorSpace: i,
          cycleColorSpace: y,
        };
      }),
      (la = (e) => e.replace(/\s*/, '').toLowerCase()),
      (f4 = (e, t, r) => {
        const [n, a] = ne(t?.valid ? [t] : []);
        he(() => {
          t === void 0 && a([]);
        }, [t]);
        const o = ot(
          () =>
            (e || [])
              .map((u) =>
                typeof u === 'string'
                  ? lr(u)
                  : u.title
                  ? { ...lr(u.color), keyword: u.title }
                  : lr(u.color)
              )
              .concat(n)
              .filter(Boolean)
              .slice(-27),
          [e, n]
        );
        const i = ge(
          (u) => {
            u?.valid &&
              (o.some((s) => la(s[r]) === la(u[r])) || a((s) => s.concat(u)));
          },
          [r, o]
        );
        return { presets: o, addPreset: i };
      }),
      (Yg = ({
        name: e,
        value: t,
        onChange: r,
        onFocus: n,
        onBlur: a,
        presetColors: o,
        startOpen: i = !1,
      }) => {
        const u = ge((0, Vg.default)(r, 200), [r]);
        const {
          value: s,
          realValue: p,
          updateValue: y,
          color: b,
          colorSpace: m,
          cycleColorSpace: g,
        } = p4(t, u);
        const { presets: A, addPreset: E } = f4(o, b, m);
        const x = c4[m];
        return h.createElement(
          JR,
          null,
          h.createElement(
            QR,
            {
              startOpen: i,
              closeOnOutsideClick: !0,
              onVisibleChange: () => E(b),
              tooltip: h.createElement(
                ZR,
                null,
                h.createElement(x, {
                  color: p === 'transparent' ? '#000000' : p,
                  onChange: y,
                  onFocus: n,
                  onBlur: a,
                }),
                A.length > 0 &&
                  h.createElement(
                    t4,
                    null,
                    A.map((F, B) =>
                      h.createElement(
                        Zr,
                        {
                          key: `${F.value}-${B}`,
                          hasChrome: !1,
                          tooltip: h.createElement(e4, {
                            note: F.keyword || F.value,
                          }),
                        },
                        h.createElement(Wg, {
                          value: F[m],
                          active: b && la(F[m]) === la(b[m]),
                          onClick: () => y(F.value),
                        })
                      )
                    )
                  )
              ),
            },
            h.createElement(Wg, { value: p, style: { margin: 4 } })
          ),
          h.createElement(a4, {
            id: Pe(e),
            value: s,
            onChange: (F) => y(F.target.value),
            onFocus: (F) => F.target.select(),
            placeholder: 'Choose color...',
          }),
          s ? h.createElement(o4, { icon: 'markup', onClick: g }) : null
        );
      }),
      (h4 = Yg);
  });
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  const ya = 'addon-controls';
  const Ea = 'controls';
  Ot();
  l();
  c();
  d();
  const UI = __STORYBOOKAPI__;
  const {
    ActiveTabs: HI,
    Consumer: zI,
    ManagerContext: WI,
    Provider: GI,
    addons: Aa,
    combineParameters: VI,
    controlOrMetaKey: KI,
    controlOrMetaSymbol: YI,
    eventMatchesShortcut: XI,
    eventToShortcut: JI,
    isMacLike: QI,
    isShortcutTaken: ZI,
    keyToSymbol: ek,
    merge: tk,
    mockChannel: rk,
    optionOrAltSymbol: nk,
    shortcutMatchesShortcut: ak,
    shortcutToHumanString: ok,
    types: Au,
    useAddonState: ik,
    useArgTypes: va,
    useArgs: vu,
    useChannel: uk,
    useGlobalTypes: sk,
    useGlobals: Du,
    useParameter: Cu,
    useSharedState: lk,
    useStoryPrepared: ck,
    useStorybookApi: dk,
    useStorybookState: xu,
  } = __STORYBOOKAPI__;
  fr();
  l();
  c();
  d();
  $a();
  Ha();
  Ot();
  fr();
  l();
  c();
  d();
  l();
  c();
  d();
  function we() {
    return (
      (we = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (let t = 1; t < arguments.length; t++) {
              const r = arguments[t];
              for (const n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      we.apply(this, arguments)
    );
  }
  l();
  c();
  d();
  function za(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  l();
  c();
  d();
  l();
  c();
  d();
  function tt(e, t) {
    return (
      (tt = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n;
          }),
      tt(e, t)
    );
  }
  function Wa(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      tt(e, t);
  }
  l();
  c();
  d();
  l();
  c();
  d();
  function mr(e) {
    return (
      (mr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }),
      mr(e)
    );
  }
  l();
  c();
  d();
  function Ga(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1;
  }
  l();
  c();
  d();
  l();
  c();
  d();
  function Va() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy === 'function') return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], () => {})
        ),
        !0
      );
    } catch {
      return !1;
    }
  }
  function It(e, t, r) {
    return (
      Va()
        ? (It = Reflect.construct.bind())
        : (It = function (a, o, i) {
            const u = [null];
            u.push.apply(u, o);
            const s = Function.bind.apply(a, u);
            const p = new s();
            return i && tt(p, i.prototype), p;
          }),
      It.apply(null, arguments)
    );
  }
  function gr(e) {
    const t = typeof Map === 'function' ? new Map() : void 0;
    return (
      (gr = function (n) {
        if (n === null || !Ga(n)) return n;
        if (typeof n !== 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n);
          t.set(n, a);
        }
        function a() {
          return It(n, arguments, mr(this).constructor);
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          tt(a, n)
        );
      }),
      gr(e)
    );
  }
  l();
  c();
  d();
  const Ie = (function (e) {
    Wa(t, e);
    function t(r) {
      let n;
      if (!0)
        n =
          e.call(
            this,
            `An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#${r} for more information.`
          ) || this;
      else for (var a, o, i; i < a; i++);
      return za(n);
    }
    return t;
  })(gr(Error));
  function _u(e, t) {
    return e.substr(-t.length) === t;
  }
  const M2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
  function Ou(e) {
    if (typeof e !== 'string') return e;
    const t = e.match(M2);
    return t ? parseFloat(e) : e;
  }
  const L2 = function (t) {
    return function (r, n) {
      n === void 0 && (n = '16px');
      let a = r;
      let o = n;
      if (typeof r === 'string') {
        if (!_u(r, 'px')) throw new Ie(69, t, r);
        a = Ou(r);
      }
      if (typeof n === 'string') {
        if (!_u(n, 'px')) throw new Ie(70, t, n);
        o = Ou(n);
      }
      if (typeof a === 'string') throw new Ie(71, r, t);
      if (typeof o === 'string') throw new Ie(72, n, t);
      return `${a / o}${t}`;
    };
  };
  const Pu = L2;
  const z7 = Pu('em');
  const W7 = Pu('rem');
  function Ka(e) {
    return Math.round(e * 255);
  }
  function j2(e, t, r) {
    return `${Ka(e)},${Ka(t)},${Ka(r)}`;
  }
  function yr(e, t, r, n) {
    if ((n === void 0 && (n = j2), t === 0)) return n(r, r, r);
    const a = (((e % 360) + 360) % 360) / 60;
    const o = (1 - Math.abs(2 * r - 1)) * t;
    const i = o * (1 - Math.abs((a % 2) - 1));
    let u = 0;
    let s = 0;
    let p = 0;
    a >= 0 && a < 1
      ? ((u = o), (s = i))
      : a >= 1 && a < 2
      ? ((u = i), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (p = i))
      : a >= 3 && a < 4
      ? ((s = i), (p = o))
      : a >= 4 && a < 5
      ? ((u = i), (p = o))
      : a >= 5 && a < 6 && ((u = o), (p = i));
    const y = r - o / 2;
    const b = u + y;
    const m = s + y;
    const g = p + y;
    return n(b, m, g);
  }
  const Ru = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  };
  function q2(e) {
    if (typeof e !== 'string') return e;
    const t = e.toLowerCase();
    return Ru[t] ? `#${Ru[t]}` : e;
  }
  const $2 = /^#[a-fA-F0-9]{6}$/;
  const U2 = /^#[a-fA-F0-9]{8}$/;
  const H2 = /^#[a-fA-F0-9]{3}$/;
  const z2 = /^#[a-fA-F0-9]{4}$/;
  const Ya =
    /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
  const W2 =
    /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  const G2 =
    /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
  const V2 =
    /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
  function kt(e) {
    if (typeof e !== 'string') throw new Ie(3);
    const t = q2(e);
    if (t.match($2))
      return {
        red: parseInt(`${t[1]}${t[2]}`, 16),
        green: parseInt(`${t[3]}${t[4]}`, 16),
        blue: parseInt(`${t[5]}${t[6]}`, 16),
      };
    if (t.match(U2)) {
      const r = parseFloat((parseInt(`${t[7]}${t[8]}`, 16) / 255).toFixed(2));
      return {
        red: parseInt(`${t[1]}${t[2]}`, 16),
        green: parseInt(`${t[3]}${t[4]}`, 16),
        blue: parseInt(`${t[5]}${t[6]}`, 16),
        alpha: r,
      };
    }
    if (t.match(H2))
      return {
        red: parseInt(`${t[1]}${t[1]}`, 16),
        green: parseInt(`${t[2]}${t[2]}`, 16),
        blue: parseInt(`${t[3]}${t[3]}`, 16),
      };
    if (t.match(z2)) {
      const n = parseFloat((parseInt(`${t[4]}${t[4]}`, 16) / 255).toFixed(2));
      return {
        red: parseInt(`${t[1]}${t[1]}`, 16),
        green: parseInt(`${t[2]}${t[2]}`, 16),
        blue: parseInt(`${t[3]}${t[3]}`, 16),
        alpha: n,
      };
    }
    const a = Ya.exec(t);
    if (a)
      return {
        red: parseInt(`${a[1]}`, 10),
        green: parseInt(`${a[2]}`, 10),
        blue: parseInt(`${a[3]}`, 10),
      };
    const o = W2.exec(t.substring(0, 50));
    if (o)
      return {
        red: parseInt(`${o[1]}`, 10),
        green: parseInt(`${o[2]}`, 10),
        blue: parseInt(`${o[3]}`, 10),
        alpha:
          parseFloat(`${o[4]}`) > 1
            ? parseFloat(`${o[4]}`) / 100
            : parseFloat(`${o[4]}`),
      };
    const i = G2.exec(t);
    if (i) {
      const u = parseInt(`${i[1]}`, 10);
      const s = parseInt(`${i[2]}`, 10) / 100;
      const p = parseInt(`${i[3]}`, 10) / 100;
      const y = `rgb(${yr(u, s, p)})`;
      const b = Ya.exec(y);
      if (!b) throw new Ie(4, t, y);
      return {
        red: parseInt(`${b[1]}`, 10),
        green: parseInt(`${b[2]}`, 10),
        blue: parseInt(`${b[3]}`, 10),
      };
    }
    const m = V2.exec(t.substring(0, 50));
    if (m) {
      const g = parseInt(`${m[1]}`, 10);
      const A = parseInt(`${m[2]}`, 10) / 100;
      const E = parseInt(`${m[3]}`, 10) / 100;
      const x = `rgb(${yr(g, A, E)})`;
      const F = Ya.exec(x);
      if (!F) throw new Ie(4, t, x);
      return {
        red: parseInt(`${F[1]}`, 10),
        green: parseInt(`${F[2]}`, 10),
        blue: parseInt(`${F[3]}`, 10),
        alpha:
          parseFloat(`${m[4]}`) > 1
            ? parseFloat(`${m[4]}`) / 100
            : parseFloat(`${m[4]}`),
      };
    }
    throw new Ie(5);
  }
  function K2(e) {
    const t = e.red / 255;
    const r = e.green / 255;
    const n = e.blue / 255;
    const a = Math.max(t, r, n);
    const o = Math.min(t, r, n);
    const i = (a + o) / 2;
    if (a === o)
      return e.alpha !== void 0
        ? { hue: 0, saturation: 0, lightness: i, alpha: e.alpha }
        : { hue: 0, saturation: 0, lightness: i };
    let u;
    const s = a - o;
    const p = i > 0.5 ? s / (2 - a - o) : s / (a + o);
    switch (a) {
      case t:
        u = (r - n) / s + (r < n ? 6 : 0);
        break;
      case r:
        u = (n - t) / s + 2;
        break;
      default:
        u = (t - r) / s + 4;
        break;
    }
    return (
      (u *= 60),
      e.alpha !== void 0
        ? { hue: u, saturation: p, lightness: i, alpha: e.alpha }
        : { hue: u, saturation: p, lightness: i }
    );
  }
  function it(e) {
    return K2(kt(e));
  }
  const Y2 = function (t) {
    return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
      ? `#${t[1]}${t[3]}${t[5]}`
      : t;
  };
  const Ja = Y2;
  function bt(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
  function Xa(e) {
    return bt(Math.round(e * 255));
  }
  function X2(e, t, r) {
    return Ja(`#${Xa(e)}${Xa(t)}${Xa(r)}`);
  }
  function en(e, t, r) {
    return yr(e, t, r, X2);
  }
  function J2(e, t, r) {
    if (typeof e === 'number' && typeof t === 'number' && typeof r === 'number')
      return en(e, t, r);
    if (typeof e === 'object' && t === void 0 && r === void 0)
      return en(e.hue, e.saturation, e.lightness);
    throw new Ie(1);
  }
  function Q2(e, t, r, n) {
    if (
      typeof e === 'number' &&
      typeof t === 'number' &&
      typeof r === 'number' &&
      typeof n === 'number'
    )
      return n >= 1 ? en(e, t, r) : `rgba(${yr(e, t, r)},${n})`;
    if (typeof e === 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? en(e.hue, e.saturation, e.lightness)
        : `rgba(${yr(e.hue, e.saturation, e.lightness)},${e.alpha})`;
    throw new Ie(2);
  }
  function Qa(e, t, r) {
    if (typeof e === 'number' && typeof t === 'number' && typeof r === 'number')
      return Ja(`#${bt(e)}${bt(t)}${bt(r)}`);
    if (typeof e === 'object' && t === void 0 && r === void 0)
      return Ja(`#${bt(e.red)}${bt(e.green)}${bt(e.blue)}`);
    throw new Ie(6);
  }
  function He(e, t, r, n) {
    if (typeof e === 'string' && typeof t === 'number') {
      const a = kt(e);
      return `rgba(${a.red},${a.green},${a.blue},${t})`;
    } else {
      if (
        typeof e === 'number' &&
        typeof t === 'number' &&
        typeof r === 'number' &&
        typeof n === 'number'
      )
        return n >= 1 ? Qa(e, t, r) : `rgba(${e},${t},${r},${n})`;
      if (typeof e === 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Qa(e.red, e.green, e.blue)
          : `rgba(${e.red},${e.green},${e.blue},${e.alpha})`;
    }
    throw new Ie(7);
  }
  const Z2 = function (t) {
    return (
      typeof t.red === 'number' &&
      typeof t.green === 'number' &&
      typeof t.blue === 'number' &&
      (typeof t.alpha !== 'number' || typeof t.alpha > 'u')
    );
  };
  const e1 = function (t) {
    return (
      typeof t.red === 'number' &&
      typeof t.green === 'number' &&
      typeof t.blue === 'number' &&
      typeof t.alpha === 'number'
    );
  };
  const t1 = function (t) {
    return (
      typeof t.hue === 'number' &&
      typeof t.saturation === 'number' &&
      typeof t.lightness === 'number' &&
      (typeof t.alpha !== 'number' || typeof t.alpha > 'u')
    );
  };
  const r1 = function (t) {
    return (
      typeof t.hue === 'number' &&
      typeof t.saturation === 'number' &&
      typeof t.lightness === 'number' &&
      typeof t.alpha === 'number'
    );
  };
  function ut(e) {
    if (typeof e !== 'object') throw new Ie(8);
    if (e1(e)) return He(e);
    if (Z2(e)) return Qa(e);
    if (r1(e)) return Q2(e);
    if (t1(e)) return J2(e);
    throw new Ie(8);
  }
  function Iu(e, t, r) {
    return function () {
      const a = r.concat(Array.prototype.slice.call(arguments));
      return a.length >= t ? e.apply(this, a) : Iu(e, t, a);
    };
  }
  function Me(e) {
    return Iu(e, e.length, []);
  }
  function n1(e, t) {
    if (t === 'transparent') return t;
    const r = it(t);
    return ut(we({}, r, { hue: r.hue + parseFloat(e) }));
  }
  const G7 = Me(n1);
  function Nt(e, t, r) {
    return Math.max(e, Math.min(t, r));
  }
  function a1(e, t) {
    if (t === 'transparent') return t;
    const r = it(t);
    return ut(we({}, r, { lightness: Nt(0, 1, r.lightness - parseFloat(e)) }));
  }
  const o1 = Me(a1);
  const ze = o1;
  function i1(e, t) {
    if (t === 'transparent') return t;
    const r = it(t);
    return ut(
      we({}, r, { saturation: Nt(0, 1, r.saturation - parseFloat(e)) })
    );
  }
  const V7 = Me(i1);
  function u1(e, t) {
    if (t === 'transparent') return t;
    const r = it(t);
    return ut(we({}, r, { lightness: Nt(0, 1, r.lightness + parseFloat(e)) }));
  }
  const s1 = Me(u1);
  const st = s1;
  function l1(e, t, r) {
    if (t === 'transparent') return r;
    if (r === 'transparent') return t;
    if (e === 0) return r;
    const n = kt(t);
    const a = we({}, n, { alpha: typeof n.alpha === 'number' ? n.alpha : 1 });
    const o = kt(r);
    const i = we({}, o, { alpha: typeof o.alpha === 'number' ? o.alpha : 1 });
    const u = a.alpha - i.alpha;
    const s = parseFloat(e) * 2 - 1;
    const p = s * u === -1 ? s : s + u;
    const y = 1 + s * u;
    const b = (p / y + 1) / 2;
    const m = 1 - b;
    const g = {
      red: Math.floor(a.red * b + i.red * m),
      green: Math.floor(a.green * b + i.green * m),
      blue: Math.floor(a.blue * b + i.blue * m),
      alpha: a.alpha * parseFloat(e) + i.alpha * (1 - parseFloat(e)),
    };
    return He(g);
  }
  const c1 = Me(l1);
  const ku = c1;
  function d1(e, t) {
    if (t === 'transparent') return t;
    const r = kt(t);
    const n = typeof r.alpha === 'number' ? r.alpha : 1;
    const a = we({}, r, {
      alpha: Nt(0, 1, (n * 100 + parseFloat(e) * 100) / 100),
    });
    return He(a);
  }
  const p1 = Me(d1);
  const Er = p1;
  function f1(e, t) {
    if (t === 'transparent') return t;
    const r = it(t);
    return ut(
      we({}, r, { saturation: Nt(0, 1, r.saturation + parseFloat(e)) })
    );
  }
  const K7 = Me(f1);
  function h1(e, t) {
    return t === 'transparent' ? t : ut(we({}, it(t), { hue: parseFloat(e) }));
  }
  const Y7 = Me(h1);
  function m1(e, t) {
    return t === 'transparent'
      ? t
      : ut(we({}, it(t), { lightness: parseFloat(e) }));
  }
  const X7 = Me(m1);
  function g1(e, t) {
    return t === 'transparent'
      ? t
      : ut(we({}, it(t), { saturation: parseFloat(e) }));
  }
  const J7 = Me(g1);
  function y1(e, t) {
    return t === 'transparent' ? t : ku(parseFloat(e), 'rgb(0, 0, 0)', t);
  }
  const Q7 = Me(y1);
  function E1(e, t) {
    return t === 'transparent' ? t : ku(parseFloat(e), 'rgb(255, 255, 255)', t);
  }
  const Z7 = Me(E1);
  function b1(e, t) {
    if (t === 'transparent') return t;
    const r = kt(t);
    const n = typeof r.alpha === 'number' ? r.alpha : 1;
    const a = we({}, r, {
      alpha: Nt(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
    });
    return He(a);
  }
  const A1 = Me(b1);
  const de = A1;
  l();
  c();
  d();
  const ue = (() => {
    let e;
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    );
  })();
  const py = fe(No(), 1);
  l();
  c();
  d();
  const dF = Object.create;
  const Yd = Object.defineProperty;
  const pF = Object.getOwnPropertyDescriptor;
  const fF = Object.getOwnPropertyNames;
  const hF = Object.getPrototypeOf;
  const mF = Object.prototype.hasOwnProperty;
  const gF = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  const yF = (e, t, r, n) => {
    if ((t && typeof t === 'object') || typeof t === 'function')
      for (const a of fF(t))
        !mF.call(e, a) &&
          a !== r &&
          Yd(e, a, {
            get: () => t[a],
            enumerable: !(n = pF(t, a)) || n.enumerable,
          });
    return e;
  };
  const EF = (e, t, r) => (
    (r = e != null ? dF(hF(e)) : {}),
    yF(
      t || !e || !e.__esModule
        ? Yd(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  const bF = gF((e) => {
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.isEqual = (function () {
        const t = Object.prototype.toString;
        const r = Object.getPrototypeOf;
        const n = Object.getOwnPropertySymbols
          ? function (a) {
              return Object.keys(a).concat(Object.getOwnPropertySymbols(a));
            }
          : Object.keys;
        return function (a, o) {
          return (function i(u, s, p) {
            let y;
            let b;
            let m;
            const g = t.call(u);
            const A = t.call(s);
            if (u === s) return !0;
            if (u == null || s == null) return !1;
            if (p.indexOf(u) > -1 && p.indexOf(s) > -1) return !0;
            if (
              (p.push(u, s),
              g != A ||
                ((y = n(u)),
                (b = n(s)),
                y.length != b.length || y.some((E) => !i(u[E], s[E], p))))
            )
              return !1;
            switch (g.slice(8, -1)) {
              case 'Symbol':
                return u.valueOf() == s.valueOf();
              case 'Date':
              case 'Number':
                return +u == +s || (+u != +u && +s != +s);
              case 'RegExp':
              case 'Function':
              case 'String':
              case 'Boolean':
                return `${u}` == `${s}`;
              case 'Set':
              case 'Map':
                (y = u.entries()), (b = s.entries());
                do if (!i((m = y.next()).value, b.next().value, p)) return !1;
                while (!m.done);
                return !0;
              case 'ArrayBuffer':
                (u = new Uint8Array(u)), (s = new Uint8Array(s));
              case 'DataView':
                (u = new Uint8Array(u.buffer)), (s = new Uint8Array(s.buffer));
              case 'Float32Array':
              case 'Float64Array':
              case 'Int8Array':
              case 'Int16Array':
              case 'Int32Array':
              case 'Uint8Array':
              case 'Uint16Array':
              case 'Uint32Array':
              case 'Uint8ClampedArray':
              case 'Arguments':
              case 'Array':
                if (u.length != s.length) return !1;
                for (m = 0; m < u.length; m++)
                  if (
                    (m in u || m in s) &&
                    (m in u != m in s || !i(u[m], s[m], p))
                  )
                    return !1;
                return !0;
              case 'Object':
                return i(r(u), r(s), p);
              default:
                return !1;
            }
          })(a, o, []);
        };
      })());
  });
  const Kd = EF(bF());
  const Xd = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length;
  const AF = (e, t) => {
    const { exists: r, eq: n, neq: a, truthy: o } = e;
    if (Xd([r, n, a, o]) > 1)
      throw new Error(
        `Invalid conditional test ${JSON.stringify({
          exists: r,
          eq: n,
          neq: a,
        })}`
      );
    if (typeof n < 'u') return (0, Kd.isEqual)(t, n);
    if (typeof a < 'u') return !(0, Kd.isEqual)(t, a);
    if (typeof r < 'u') {
      const i = typeof t < 'u';
      return r ? i : !i;
    }
    return typeof o > 'u' || o ? !!t : !t;
  };
  const Mo = (e, t, r) => {
    if (!e.if) return !0;
    const { arg: n, global: a } = e.if;
    if (Xd([n, a]) !== 1)
      throw new Error(
        `Invalid conditional value ${JSON.stringify({ arg: n, global: a })}`
      );
    const o = n ? t[n] : r[a];
    return AF(e.if, o);
  };
  l();
  c();
  d();
  const BW = __STORYBOOKCLIENTLOGGER__;
  const {
    deprecate: ye,
    logger: Ve,
    once: xn,
    pretty: TW,
  } = __STORYBOOKCLIENTLOGGER__;
  l();
  c();
  d();
  Ot();
  function Ct() {
    return (
      (Ct = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (let t = 1; t < arguments.length; t++) {
              const r = arguments[t];
              for (const n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
      Ct.apply(this, arguments)
    );
  }
  const vF = ['children', 'options'];
  const Jd = [
    'allowFullScreen',
    'allowTransparency',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'className',
    'classId',
    'colSpan',
    'contentEditable',
    'contextMenu',
    'crossOrigin',
    'encType',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'hrefLang',
    'inputMode',
    'keyParams',
    'keyType',
    'marginHeight',
    'marginWidth',
    'maxLength',
    'mediaGroup',
    'minLength',
    'noValidate',
    'radioGroup',
    'readOnly',
    'rowSpan',
    'spellCheck',
    'srcDoc',
    'srcLang',
    'srcSet',
    'tabIndex',
    'useMap',
  ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), { for: 'htmlFor' });
  const Qd = {
    amp: '&',
    apos: "'",
    gt: '>',
    lt: '<',
    nbsp: '\xA0',
    quot: '\u201C',
  };
  const DF = ['style', 'script'];
  const CF =
    /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi;
  const xF = /mailto:/i;
  const FF = /\n{2,}$/;
  const ap = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/;
  const SF = /^ *> ?/gm;
  const wF = /^ {2,}\n/;
  const BF = /^(?:( *[-*_])){3,} *(?:\n *)+\n/;
  const op =
    /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/;
  const ip = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/;
  const TF = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/;
  const _F = /^(?:\n *)*\n/;
  const OF = /\r\n?/g;
  const RF = /^\[\^([^\]]+)](:.*)\n/;
  const PF = /^\[\^([^\]]+)]/;
  const IF = /\f/g;
  const kF = /^\s*?\[(x|\s)\]/;
  const up = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
  const sp = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/;
  const lp = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/;
  const Uo =
    /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i;
  const NF = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi;
  const cp = /^<!--[\s\S]*?(?:-->)/;
  const MF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/;
  const Ho =
    /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i;
  const LF = /^\{.*\}$/;
  const jF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/;
  const qF = /^<([^ >]+@[^ >]+)>/;
  const $F = /^<([^ >]+:\/[^ >]+)>/;
  const UF = /-([a-z])?/gi;
  const dp = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/;
  const HF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/;
  const zF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/;
  const WF = /^\[([^\]]*)\] ?\[([^\]]*)\]/;
  const GF = /(\[|\])/g;
  const VF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/;
  const KF = /\t/g;
  const YF = /^ *\| */;
  const XF = /(^ *\||\| *$)/g;
  const JF = / *$/;
  const QF = /^ *:-+: *$/;
  const ZF = /^ *:-+ *$/;
  const eS = /^ *-+: *$/;
  const tS =
    /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/;
  const rS =
    /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/;
  const nS = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/;
  const aS = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/;
  const oS = /^\\([^0-9A-Za-z\s])/;
  const iS =
    /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i;
  const uS = /^\n+/;
  const sS = /^([ \t]*)/;
  const lS = /\\([^\\])/g;
  const Zd = / *\n+$/;
  const cS = /(?:^|\n)( *)$/;
  const zo = '(?:\\d+\\.)';
  const Wo = '(?:[*+-])';
  function pp(e) {
    return `( *)(${e === 1 ? zo : Wo}) +`;
  }
  const fp = pp(1);
  const hp = pp(2);
  function mp(e) {
    return new RegExp(`^${e === 1 ? fp : hp}`);
  }
  const dS = mp(1);
  const pS = mp(2);
  function gp(e) {
    return new RegExp(
      `^${e === 1 ? fp : hp}[^\\n]*(?:\\n(?!\\1${
        e === 1 ? zo : Wo
      } )[^\\n]*)*(\\n|$)`,
      'gm'
    );
  }
  const yp = gp(1);
  const Ep = gp(2);
  function bp(e) {
    const t = e === 1 ? zo : Wo;
    return new RegExp(
      `^( *)(${t}) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1${t} (?!${t} ))\\n*|\\s*\\n*$)`
    );
  }
  const Ap = bp(1);
  const vp = bp(2);
  function ep(e, t) {
    const r = t === 1;
    const n = r ? Ap : vp;
    const a = r ? yp : Ep;
    const o = r ? dS : pS;
    return {
      t(i, u, s) {
        const p = cS.exec(s);
        return p && (u.o || (!u._ && !u.u)) ? n.exec((i = p[1] + i)) : null;
      },
      i: re.HIGH,
      l(i, u, s) {
        const p = r ? +i[2] : void 0;
        const y = i[0]
          .replace(
            FF,
            `
`
          )
          .match(a);
        let b = !1;
        return {
          p: y.map((m, g) => {
            const A = o.exec(m)[0].length;
            const E = new RegExp(`^ {1,${A}}`, 'gm');
            const x = m.replace(E, '').replace(o, '');
            const F = g === y.length - 1;
            const B =
              x.indexOf(`

`) !== -1 ||
              (F && b);
            b = B;
            const I = s._;
            const L = s.o;
            let w;
            (s.o = !0),
              B
                ? ((s._ = !1),
                  (w = x.replace(
                    Zd,
                    `

`
                  )))
                : ((s._ = !0), (w = x.replace(Zd, '')));
            const k = u(w, s);
            return (s._ = I), (s.o = L), k;
          }),
          m: r,
          g: p,
        };
      },
      h: (i, u, s) =>
        e(
          i.m ? 'ol' : 'ul',
          { key: s.k, start: i.g },
          i.p.map((p, y) => e('li', { key: y }, u(p, s)))
        ),
    };
  }
  const fS = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
  const hS = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/;
  const Dp = [ap, op, ip, up, lp, sp, cp, dp, yp, Ap, Ep, vp];
  const mS = [...Dp, /^[^\n]+(?: {2}\n|\n{2,})/, Uo, Ho];
  function gS(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase();
  }
  function yS(e) {
    return eS.test(e)
      ? 'right'
      : QF.test(e)
      ? 'center'
      : ZF.test(e)
      ? 'left'
      : null;
  }
  function tp(e, t, r) {
    const n = r.$;
    r.$ = !0;
    const a = t(e.trim(), r);
    r.$ = n;
    const o = [[]];
    return (
      a.forEach((i, u) => {
        i.type === 'tableSeparator'
          ? u !== 0 && u !== a.length - 1 && o.push([])
          : (i.type !== 'text' ||
              (a[u + 1] != null && a[u + 1].type !== 'tableSeparator') ||
              (i.v = i.v.replace(JF, '')),
            o[o.length - 1].push(i));
      }),
      o
    );
  }
  function ES(e, t, r) {
    r._ = !0;
    const n = tp(e[1], t, r);
    const a = e[2].replace(XF, '').split('|').map(yS);
    const o = (function (i, u, s) {
      return i
        .trim()
        .split(
          `
`
        )
        .map((p) => tp(p, u, s));
    })(e[3], t, r);
    return (r._ = !1), { S: a, A: o, L: n, type: 'table' };
  }
  function rp(e, t) {
    return e.S[t] == null ? {} : { textAlign: e.S[t] };
  }
  function ct(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null;
    };
  }
  function dt(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null;
    };
  }
  function nt(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t);
    };
  }
  function _r(e) {
    return function (t) {
      return e.exec(t);
    };
  }
  function bS(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null;
    let n = '';
    e.split(
      `
`
    ).every(
      (o) =>
        !Dp.some((i) => i.test(o)) &&
        ((n += `${o}
`),
        o.trim())
    );
    const a = n.trimEnd();
    return a == '' ? null : [n, a];
  }
  function Gt(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, '')
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return;
    } catch {
      return null;
    }
    return e;
  }
  function np(e) {
    return e.replace(lS, '$1');
  }
  function Fn(e, t, r) {
    const n = r._ || !1;
    const a = r.u || !1;
    (r._ = !0), (r.u = !0);
    const o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function AS(e, t, r) {
    const n = r._ || !1;
    const a = r.u || !1;
    (r._ = !1), (r.u = !0);
    const o = e(t, r);
    return (r._ = n), (r.u = a), o;
  }
  function vS(e, t, r) {
    return (r._ = !1), e(t, r);
  }
  const Lo = (e, t, r) => ({ v: Fn(t, e[1], r) });
  function jo() {
    return {};
  }
  function qo() {
    return null;
  }
  function DS(...e) {
    return e.filter(Boolean).join(' ');
  }
  function $o(e, t, r) {
    let n = e;
    const a = t.split('.');
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift();
    return n || r;
  }
  let re;
  function CS(e, t = {}) {
    (t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || gS),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? Ct({}, Qd, t.namedCodesToUnicode)
        : Qd);
    const r = t.createElement || ba;
    function n(g, A, ...E) {
      const x = $o(t.overrides, `${g}.props`, {});
      return r(
        (function (F, B) {
          const I = $o(B, F);
          return I
            ? typeof I === 'function' ||
              (typeof I === 'object' && 'render' in I)
              ? I
              : $o(B, `${F}.component`, F)
            : F;
        })(g, t.overrides),
        Ct({}, A, x, { className: DS(A?.className, x.className) || void 0 }),
        ...E
      );
    }
    function a(g) {
      let A = !1;
      t.forceInline ? (A = !0) : t.forceBlock || (A = VF.test(g) === !1);
      const E = y(
        p(
          A
            ? g
            : `${g.trimEnd().replace(uS, '')}

`,
          { _: A }
        )
      );
      for (; typeof E[E.length - 1] === 'string' && !E[E.length - 1].trim(); )
        E.pop();
      if (t.wrapper === null) return E;
      const x = t.wrapper || (A ? 'span' : 'div');
      let F;
      if (E.length > 1 || t.forceWrapper) F = E;
      else {
        if (E.length === 1)
          return (
            (F = E[0]),
            typeof F === 'string' ? n('span', { key: 'outer' }, F) : F
          );
        F = null;
      }
      return ba(x, { key: 'outer' }, F);
    }
    function o(g) {
      const A = g.match(CF);
      return A
        ? A.reduce((E, x, F) => {
            const B = x.indexOf('=');
            if (B !== -1) {
              const I = (function (N) {
                return (
                  N.indexOf('-') !== -1 &&
                    N.match(MF) === null &&
                    (N = N.replace(UF, (H, V) => V.toUpperCase())),
                  N
                );
              })(x.slice(0, B)).trim();
              const L = (function (N) {
                const H = N[0];
                return (H === '"' || H === "'") &&
                  N.length >= 2 &&
                  N[N.length - 1] === H
                  ? N.slice(1, -1)
                  : N;
              })(x.slice(B + 1).trim());
              const w = Jd[I] || I;
              const k = (E[w] = (function (N, H) {
                return N === 'style'
                  ? H.split(/;\s?/).reduce((V, U) => {
                      const Q = U.slice(0, U.indexOf(':'));
                      return (
                        (V[
                          Q.replace(/(-[a-z])/g, (ee) => ee[1].toUpperCase())
                        ] = U.slice(Q.length + 1).trim()),
                        V
                      );
                    }, {})
                  : N === 'href'
                  ? Gt(H)
                  : (H.match(LF) && (H = H.slice(1, H.length - 1)),
                    H === 'true' || (H !== 'false' && H));
              })(I, L));
              typeof k === 'string' &&
                (Uo.test(k) || Ho.test(k)) &&
                (E[w] = me(a(k.trim()), { key: F }));
            } else x !== 'style' && (E[Jd[x] || x] = !0);
            return E;
          }, {})
        : null;
    }
    const i = [];
    const u = {};
    const s = {
      blockQuote: {
        t: nt(ap),
        i: re.HIGH,
        l: (g, A, E) => ({ v: A(g[0].replace(SF, ''), E) }),
        h: (g, A, E) => n('blockquote', { key: E.k }, A(g.v, E)),
      },
      breakLine: {
        t: _r(wF),
        i: re.HIGH,
        l: jo,
        h: (g, A, E) => n('br', { key: E.k }),
      },
      breakThematic: {
        t: nt(BF),
        i: re.HIGH,
        l: jo,
        h: (g, A, E) => n('hr', { key: E.k }),
      },
      codeBlock: {
        t: nt(ip),
        i: re.MAX,
        l: (g) => ({
          v: g[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
          M: void 0,
        }),
        h: (g, A, E) =>
          n(
            'pre',
            { key: E.k },
            n('code', Ct({}, g.O, { className: g.M ? `lang-${g.M}` : '' }), g.v)
          ),
      },
      codeFenced: {
        t: nt(op),
        i: re.MAX,
        l: (g) => ({
          O: o(g[3] || ''),
          v: g[4],
          M: g[2] || void 0,
          type: 'codeBlock',
        }),
      },
      codeInline: {
        t: dt(TF),
        i: re.LOW,
        l: (g) => ({ v: g[2] }),
        h: (g, A, E) => n('code', { key: E.k }, g.v),
      },
      footnote: {
        t: nt(RF),
        i: re.MAX,
        l: (g) => (i.push({ I: g[2], j: g[1] }), {}),
        h: qo,
      },
      footnoteReference: {
        t: ct(PF),
        i: re.HIGH,
        l: (g) => ({ v: g[1], B: `#${t.slugify(g[1])}` }),
        h: (g, A, E) =>
          n('a', { key: E.k, href: Gt(g.B) }, n('sup', { key: E.k }, g.v)),
      },
      gfmTask: {
        t: ct(kF),
        i: re.HIGH,
        l: (g) => ({ R: g[1].toLowerCase() === 'x' }),
        h: (g, A, E) =>
          n('input', {
            checked: g.R,
            key: E.k,
            readOnly: !0,
            type: 'checkbox',
          }),
      },
      heading: {
        t: nt(t.enforceAtxHeadings ? sp : up),
        i: re.HIGH,
        l: (g, A, E) => ({
          v: Fn(A, g[2], E),
          T: t.slugify(g[2]),
          C: g[1].length,
        }),
        h: (g, A, E) => n(`h${g.C}`, { id: g.T, key: E.k }, A(g.v, E)),
      },
      headingSetext: {
        t: nt(lp),
        i: re.MAX,
        l: (g, A, E) => ({
          v: Fn(A, g[1], E),
          C: g[2] === '=' ? 1 : 2,
          type: 'heading',
        }),
      },
      htmlComment: { t: _r(cp), i: re.HIGH, l: () => ({}), h: qo },
      image: {
        t: dt(hS),
        i: re.HIGH,
        l: (g) => ({ D: g[1], B: np(g[2]), F: g[3] }),
        h: (g, A, E) =>
          n('img', {
            key: E.k,
            alt: g.D || void 0,
            title: g.F || void 0,
            src: Gt(g.B),
          }),
      },
      link: {
        t: ct(fS),
        i: re.LOW,
        l: (g, A, E) => ({ v: AS(A, g[1], E), B: np(g[2]), F: g[3] }),
        h: (g, A, E) =>
          n('a', { key: E.k, href: Gt(g.B), title: g.F }, A(g.v, E)),
      },
      linkAngleBraceStyleDetector: {
        t: ct($F),
        i: re.MAX,
        l: (g) => ({ v: [{ v: g[1], type: 'text' }], B: g[1], type: 'link' }),
      },
      linkBareUrlDetector: {
        t: (g, A) => (A.N ? null : ct(jF)(g, A)),
        i: re.MAX,
        l: (g) => ({
          v: [{ v: g[1], type: 'text' }],
          B: g[1],
          F: void 0,
          type: 'link',
        }),
      },
      linkMailtoDetector: {
        t: ct(qF),
        i: re.MAX,
        l(g) {
          const A = g[1];
          let E = g[1];
          return (
            xF.test(E) || (E = `mailto:${E}`),
            {
              v: [{ v: A.replace('mailto:', ''), type: 'text' }],
              B: E,
              type: 'link',
            }
          );
        },
      },
      orderedList: ep(n, 1),
      unorderedList: ep(n, 2),
      newlineCoalescer: {
        t: nt(_F),
        i: re.LOW,
        l: jo,
        h: () => `
`,
      },
      paragraph: {
        t: bS,
        i: re.LOW,
        l: Lo,
        h: (g, A, E) => n('p', { key: E.k }, A(g.v, E)),
      },
      ref: {
        t: ct(HF),
        i: re.MAX,
        l: (g) => ((u[g[1]] = { B: g[2], F: g[4] }), {}),
        h: qo,
      },
      refImage: {
        t: dt(zF),
        i: re.MAX,
        l: (g) => ({ D: g[1] || void 0, P: g[2] }),
        h: (g, A, E) =>
          n('img', { key: E.k, alt: g.D, src: Gt(u[g.P].B), title: u[g.P].F }),
      },
      refLink: {
        t: ct(WF),
        i: re.MAX,
        l: (g, A, E) => ({
          v: A(g[1], E),
          Z: A(g[0].replace(GF, '\\$1'), E),
          P: g[2],
        }),
        h: (g, A, E) =>
          u[g.P]
            ? n(
                'a',
                { key: E.k, href: Gt(u[g.P].B), title: u[g.P].F },
                A(g.v, E)
              )
            : n('span', { key: E.k }, A(g.Z, E)),
      },
      table: {
        t: nt(dp),
        i: re.HIGH,
        l: ES,
        h: (g, A, E) =>
          n(
            'table',
            { key: E.k },
            n(
              'thead',
              null,
              n(
                'tr',
                null,
                g.L.map((x, F) => n('th', { key: F, style: rp(g, F) }, A(x, E)))
              )
            ),
            n(
              'tbody',
              null,
              g.A.map((x, F) =>
                n(
                  'tr',
                  { key: F },
                  x.map((B, I) => n('td', { key: I, style: rp(g, I) }, A(B, E)))
                )
              )
            )
          ),
      },
      tableSeparator: {
        t(g, A) {
          return A.$ ? ((A._ = !0), YF.exec(g)) : null;
        },
        i: re.HIGH,
        l() {
          return { type: 'tableSeparator' };
        },
        h: () => ' | ',
      },
      text: {
        t: _r(iS),
        i: re.MIN,
        l: (g) => ({
          v: g[0].replace(NF, (A, E) =>
            t.namedCodesToUnicode[E] ? t.namedCodesToUnicode[E] : A
          ),
        }),
        h: (g) => g.v,
      },
      textBolded: {
        t: dt(tS),
        i: re.MED,
        l: (g, A, E) => ({ v: A(g[2], E) }),
        h: (g, A, E) => n('strong', { key: E.k }, A(g.v, E)),
      },
      textEmphasized: {
        t: dt(rS),
        i: re.LOW,
        l: (g, A, E) => ({ v: A(g[2], E) }),
        h: (g, A, E) => n('em', { key: E.k }, A(g.v, E)),
      },
      textEscaped: {
        t: dt(oS),
        i: re.HIGH,
        l: (g) => ({ v: g[1], type: 'text' }),
      },
      textMarked: {
        t: dt(nS),
        i: re.LOW,
        l: Lo,
        h: (g, A, E) => n('mark', { key: E.k }, A(g.v, E)),
      },
      textStrikethroughed: {
        t: dt(aS),
        i: re.LOW,
        l: Lo,
        h: (g, A, E) => n('del', { key: E.k }, A(g.v, E)),
      },
    };
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: _r(Uo),
        i: re.HIGH,
        l(g, A, E) {
          const [, x] = g[3].match(sS);
          const F = new RegExp(`^${x}`, 'gm');
          const B = g[3].replace(F, '');
          const I = ((L = B), mS.some((H) => H.test(L)) ? vS : Fn);
          let L;
          const w = g[1].toLowerCase();
          const k = DF.indexOf(w) !== -1;
          E.N = E.N || w === 'a';
          const N = k ? g[3] : I(A, B, E);
          return (E.N = !1), { O: o(g[2]), v: N, G: k, H: k ? w : g[1] };
        },
        h: (g, A, E) => n(g.H, Ct({ key: E.k }, g.O), g.G ? g.v : A(g.v, E)),
      }),
      (s.htmlSelfClosing = {
        t: _r(Ho),
        i: re.HIGH,
        l: (g) => ({ O: o(g[2] || ''), H: g[1] }),
        h: (g, A, E) => n(g.H, Ct({}, g.O, { key: E.k })),
      }));
    let p = (function (g) {
      const A = Object.keys(g);
      function E(x, F) {
        const B = [];
        let I = '';
        for (; x; ) {
          let L = 0;
          for (; L < A.length; ) {
            const w = A[L];
            const k = g[w];
            const N = k.t(x, F, I);
            if (N) {
              const H = N[0];
              x = x.substring(H.length);
              const V = k.l(N, E, F);
              V.type == null && (V.type = w), B.push(V), (I = H);
              break;
            }
            L++;
          }
        }
        return B;
      }
      return (
        A.sort((x, F) => {
          const B = g[x].i;
          const I = g[F].i;
          return B !== I ? B - I : x < F ? -1 : 1;
        }),
        function (x, F) {
          return E(
            (function (B) {
              return B.replace(
                OF,
                `
`
              )
                .replace(IF, '')
                .replace(KF, '    ');
            })(x),
            F
          );
        }
      );
    })(s);
    let y =
      ((b = (function (g) {
        return function (A, E, x) {
          return g[A.type].h(A, E, x);
        };
      })(s)),
      function g(A, E = {}) {
        if (Array.isArray(A)) {
          const x = E.k;
          const F = [];
          let B = !1;
          for (let I = 0; I < A.length; I++) {
            E.k = I;
            const L = g(A[I], E);
            const w = typeof L === 'string';
            w && B ? (F[F.length - 1] += L) : L !== null && F.push(L), (B = w);
          }
          return (E.k = x), F;
        }
        return b(A, g, E);
      });
    let b;
    const m = a(e);
    return i.length
      ? n(
          'div',
          null,
          m,
          n(
            'footer',
            { key: 'footer' },
            i.map((g) =>
              n(
                'div',
                { id: t.slugify(g.j), key: g.j },
                g.j,
                y(p(g.I, { _: !0 }))
              )
            )
          )
        )
      : m;
  }
  (function (e) {
    (e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN');
  })(re || (re = {}));
  const Go = (e) => {
    const { children: t, options: r } = e;
    const n = (function (a, o) {
      if (a == null) return {};
      let i;
      let u;
      const s = {};
      const p = Object.keys(a);
      for (u = 0; u < p.length; u++)
        o.indexOf((i = p[u])) >= 0 || (s[i] = a[i]);
      return s;
    })(e, vF);
    return me(CS(t, r), n);
  };
  const fy = fe(Sn(), 1);
  const hy = fe(Hp(), 1);
  const my = fe(Yf(), 1);
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  const dK = __STORYBOOKCHANNELS__;
  const {
    Channel: Yo,
    PostMessageTransport: pK,
    WebsocketTransport: fK,
    createBrowserChannel: m3,
    createPostMessageChannel: hK,
    createWebSocketChannel: mK,
  } = __STORYBOOKCHANNELS__;
  l();
  c();
  d();
  const AK = __STORYBOOKCOREEVENTS__;
  const {
    CHANNEL_CREATED: vK,
    CONFIG_ERROR: g3,
    CURRENT_STORY_WAS_SET: y3,
    DOCS_PREPARED: E3,
    DOCS_RENDERED: b3,
    FORCE_REMOUNT: A3,
    FORCE_RE_RENDER: Xo,
    GLOBALS_UPDATED: Tn,
    IGNORED_EXCEPTION: DK,
    NAVIGATE_URL: Xf,
    PLAY_FUNCTION_THREW_EXCEPTION: v3,
    PRELOAD_ENTRIES: D3,
    PREVIEW_BUILDER_PROGRESS: CK,
    PREVIEW_KEYDOWN: C3,
    REGISTER_SUBSCRIPTION: xK,
    REQUEST_WHATS_NEW_DATA: FK,
    RESET_STORY_ARGS: _n,
    RESULT_WHATS_NEW_DATA: SK,
    SELECT_STORY: wK,
    SET_CONFIG: BK,
    SET_CURRENT_STORY: x3,
    SET_GLOBALS: F3,
    SET_INDEX: S3,
    SET_STORIES: TK,
    SET_WHATS_NEW_CACHE: _K,
    SHARED_STATE_CHANGED: w3,
    SHARED_STATE_SET: B3,
    STORIES_COLLAPSE_ALL: OK,
    STORIES_EXPAND_ALL: RK,
    STORY_ARGS_UPDATED: On,
    STORY_CHANGED: T3,
    STORY_ERRORED: _3,
    STORY_INDEX_INVALIDATED: O3,
    STORY_MISSING: R3,
    STORY_PREPARED: P3,
    STORY_RENDERED: Jf,
    STORY_RENDER_PHASE_CHANGED: I3,
    STORY_SPECIFIED: k3,
    STORY_THREW_EXCEPTION: N3,
    STORY_UNCHANGED: M3,
    TELEMETRY_ERROR: PK,
    TOGGLE_WHATS_NEW_NOTIFICATIONS: IK,
    UPDATE_GLOBALS: Qf,
    UPDATE_QUERY_PARAMS: L3,
    UPDATE_STORY_ARGS: Rn,
  } = __STORYBOOKCOREEVENTS__;
  const j3 = Object.create;
  const Zf = Object.defineProperty;
  const q3 = Object.getOwnPropertyDescriptor;
  const e0 = Object.getOwnPropertyNames;
  const $3 = Object.getPrototypeOf;
  const U3 = Object.prototype.hasOwnProperty;
  const Ke = (e, t) =>
    function () {
      return t || (0, e[e0(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    };
  const H3 = (e, t, r, n) => {
    if ((t && typeof t === 'object') || typeof t === 'function')
      for (const a of e0(t))
        !U3.call(e, a) &&
          a !== r &&
          Zf(e, a, {
            get: () => t[a],
            enumerable: !(n = q3(t, a)) || n.enumerable,
          });
    return e;
  };
  const t0 = (e, t, r) => (
    (r = e != null ? j3($3(e)) : {}),
    H3(
      t || !e || !e.__esModule
        ? Zf(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  function r0() {
    const e = { setHandler: () => {}, send: () => {} };
    return new Yo({ transport: e });
  }
  const z3 = class {
    constructor() {
      (this.getChannel = () => {
        if (!this.channel) {
          const e = r0();
          return this.setChannel(e), e;
        }
        return this.channel;
      }),
        (this.getServerChannel = () => {
          if (!this.serverChannel)
            throw new Error('Accessing non-existent serverChannel');
          return this.serverChannel;
        }),
        (this.ready = () => this.promise),
        (this.hasChannel = () => !!this.channel),
        (this.hasServerChannel = () => !!this.serverChannel),
        (this.setChannel = (e) => {
          (this.channel = e), this.resolve();
        }),
        (this.setServerChannel = (e) => {
          this.serverChannel = e;
        }),
        (this.promise = new Promise((e) => {
          this.resolve = () => e(this.getChannel());
        }));
    }
  };
  const Jo = '__STORYBOOK_ADDONS_PREVIEW';
  function W3() {
    return ue[Jo] || (ue[Jo] = new z3()), ue[Jo];
  }
  const Pn = W3();
  const X0 = fe(Sn(), 1);
  const Ir = fe(In(), 1);
  const rT = fe(L0(), 1);
  const nT = fe(Nn(), 1);
  l();
  c();
  d();
  l();
  c();
  d();
  l();
  c();
  d();
  function Kt(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
    let n = Array.from(typeof e === 'string' ? [e] : e);
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
    const a = n.reduce((u, s) => {
      const p = s.match(/\n([\t ]+|(?!\s).)/g);
      return p
        ? u.concat(
            p.map((y) => {
              let b;
              let m;
              return (m =
                (b = y.match(/[\t ]/g)) === null || b === void 0
                  ? void 0
                  : b.length) !== null && m !== void 0
                ? m
                : 0;
            })
          )
        : u;
    }, []);
    if (a.length) {
      const o = new RegExp(
        `
[	 ]{${Math.min.apply(Math, a)}}`,
        'g'
      );
      n = n.map((u) =>
        u.replace(
          o,
          `
`
        )
      );
    }
    n[0] = n[0].replace(/^\r?\n/, '');
    let i = n[0];
    return (
      t.forEach((u, s) => {
        const p = i.match(/(?:^|\n)( *)$/);
        const y = p ? p[1] : '';
        let b = u;
        typeof u === 'string' &&
          u.includes(`
`) &&
          (b = String(u)
            .split(
              `
`
            )
            .map((m, g) => (g === 0 ? m : `${y}${m}`)).join(`
`)),
          (i += b + n[s + 1]);
      }),
      i
    );
  }
  const ve = Kt;
  var kB = ((e) => (
    (e.PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER'),
    (e.PREVIEW_CHANNELS = 'PREVIEW_CHANNELS'),
    (e.PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS'),
    (e.PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER'),
    (e.PREVIEW_API = 'PREVIEW_API'),
    (e.PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM'),
    (e.PREVIEW_ROUTER = 'PREVIEW_ROUTER'),
    (e.PREVIEW_THEMING = 'PREVIEW_THEMING'),
    (e.FRAMEWORK_ANGULAR = 'FRAMEWORK_ANGULAR'),
    (e.FRAMEWORK_EMBER = 'FRAMEWORK_EMBER'),
    (e.FRAMEWORK_HTML_VITE = 'FRAMEWORK_HTML-VITE'),
    (e.FRAMEWORK_HTML_WEBPACK5 = 'FRAMEWORK_HTML-WEBPACK5'),
    (e.FRAMEWORK_NEXTJS = 'FRAMEWORK_NEXTJS'),
    (e.FRAMEWORK_PREACT_VITE = 'FRAMEWORK_PREACT-VITE'),
    (e.FRAMEWORK_PREACT_WEBPACK5 = 'FRAMEWORK_PREACT-WEBPACK5'),
    (e.FRAMEWORK_REACT_VITE = 'FRAMEWORK_REACT-VITE'),
    (e.FRAMEWORK_REACT_WEBPACK5 = 'FRAMEWORK_REACT-WEBPACK5'),
    (e.FRAMEWORK_SERVER_WEBPACK5 = 'FRAMEWORK_SERVER-WEBPACK5'),
    (e.FRAMEWORK_SVELTE_VITE = 'FRAMEWORK_SVELTE-VITE'),
    (e.FRAMEWORK_SVELTE_WEBPACK5 = 'FRAMEWORK_SVELTE-WEBPACK5'),
    (e.FRAMEWORK_SVELTEKIT = 'FRAMEWORK_SVELTEKIT'),
    (e.FRAMEWORK_VUE_VITE = 'FRAMEWORK_VUE-VITE'),
    (e.FRAMEWORK_VUE_WEBPACK5 = 'FRAMEWORK_VUE-WEBPACK5'),
    (e.FRAMEWORK_VUE3_VITE = 'FRAMEWORK_VUE3-VITE'),
    (e.FRAMEWORK_VUE3_WEBPACK5 = 'FRAMEWORK_VUE3-WEBPACK5'),
    (e.FRAMEWORK_WEB_COMPONENTS_VITE = 'FRAMEWORK_WEB-COMPONENTS-VITE'),
    (e.FRAMEWORK_WEB_COMPONENTS_WEBPACK5 = 'FRAMEWORK_WEB-COMPONENTS-WEBPACK5'),
    (e.RENDERER_HTML = 'RENDERER_HTML'),
    (e.RENDERER_PREACT = 'RENDERER_PREACT'),
    (e.RENDERER_REACT = 'RENDERER_REACT'),
    (e.RENDERER_SERVER = 'RENDERER_SERVER'),
    (e.RENDERER_SVELTE = 'RENDERER_SVELTE'),
    (e.RENDERER_VUE = 'RENDERER_VUE'),
    (e.RENDERER_VUE3 = 'RENDERER_VUE3'),
    (e.RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS'),
    e
  ))(kB || {});
  l();
  c();
  d();
  const qn = fe(Qo(), 1);
  const J0 = fe(K0(), 1);
  const Q0 = fe(No(), 1);
  const WX = (0, X0.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {}
    )
  );
  const GX = Symbol('incompatible');
  const VX = Symbol('Deeply equal');
  const aT = Kt`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
  const KX = (0, J0.default)(() => {}, aT);
  const xt = (...e) => {
    const t = {};
    const r = e.filter(Boolean);
    const n = r.reduce(
      (a, o) => (
        Object.entries(o).forEach(([i, u]) => {
          const s = a[i];
          Array.isArray(u) || typeof s > 'u'
            ? (a[i] = u)
            : (0, qn.default)(u) && (0, qn.default)(s)
            ? (t[i] = !0)
            : typeof u < 'u' && (a[i] = u);
        }),
        a
      ),
      {}
    );
    return (
      Object.keys(t).forEach((a) => {
        const o = r
          .filter(Boolean)
          .map((i) => i[a])
          .filter((i) => typeof i < 'u');
        o.every((i) => (0, qn.default)(i))
          ? (n[a] = xt(...o))
          : (n[a] = o[o.length - 1]);
      }),
      n
    );
  };
  const ei = (e, t, r) => {
    const n = typeof e;
    switch (n) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'function':
      case 'symbol':
        return { name: n };
    }
    return e
      ? r.has(e)
        ? (Ve.warn(Kt`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
          { name: 'other', value: 'cyclic object' })
        : (r.add(e),
          Array.isArray(e)
            ? {
                name: 'array',
                value:
                  e.length > 0
                    ? ei(e[0], t, new Set(r))
                    : { name: 'other', value: 'unknown' },
              }
            : {
                name: 'object',
                value: (0, Ir.default)(e, (a) => ei(a, t, new Set(r))),
              })
      : { name: 'object', value: {} };
  };
  const oT = (e) => {
    const { id: t, argTypes: r = {}, initialArgs: n = {} } = e;
    const a = (0, Ir.default)(n, (i, u) => ({
      name: u,
      type: ei(i, `${t}.${u}`, new Set()),
    }));
    const o = (0, Ir.default)(r, (i, u) => ({ name: u }));
    return xt(a, o, r);
  };
  oT.secondPass = !0;
  const Y0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t));
  const Nr = (e, t, r) =>
    !t && !r
      ? e
      : e &&
        (0, Q0.default)(e, (n, a) => {
          const o = n.name || a;
          return (!t || Y0(o, t)) && (!r || !Y0(o, r));
        });
  const iT = (e, t, r) => {
    const { type: n, options: a } = e;
    if (n) {
      if (r.color && r.color.test(t)) {
        const o = n.name;
        if (o === 'string') return { control: { type: 'color' } };
        o !== 'enum' &&
          Ve.warn(
            `Addon controls: Control of type color only supports string, received "${o}" instead`
          );
      }
      if (r.date && r.date.test(t)) return { control: { type: 'date' } };
      switch (n.name) {
        case 'array':
          return { control: { type: 'object' } };
        case 'boolean':
          return { control: { type: 'boolean' } };
        case 'string':
          return { control: { type: 'text' } };
        case 'number':
          return { control: { type: 'number' } };
        case 'enum': {
          const { value: o } = n;
          return {
            control: { type: o?.length <= 5 ? 'radio' : 'select' },
            options: o,
          };
        }
        case 'function':
        case 'symbol':
          return null;
        default:
          return { control: { type: a ? 'select' : 'object' } };
      }
    }
  };
  const Z0 = (e) => {
    const {
      argTypes: t,
      parameters: {
        __isArgsStory: r,
        controls: {
          include: n = null,
          exclude: a = null,
          matchers: o = {},
        } = {},
      },
    } = e;
    if (!r) return t;
    const i = Nr(t, n, a);
    const u = (0, Ir.default)(i, (s, p) => s?.type && iT(s, p, o));
    return xt(u, i);
  };
  Z0.secondPass = !0;
  function ti(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n)
      )();
    };
  }
  function kr(e, t) {
    return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean);
  }
  function Mn(e, t, r = {}) {
    return kr(e, t).reduce(
      (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
      []
    );
  }
  function Ln(e, t) {
    return Object.assign({}, ...kr(e, t));
  }
  function jn(e, t) {
    return kr(e, t).pop();
  }
  function ri(e) {
    const t = Mn(e, 'argTypesEnhancers');
    const r = kr(e, 'runStep');
    return {
      parameters: xt(...kr(e, 'parameters')),
      decorators: Mn(e, 'decorators', {
        reverseFileOrder: !(ue.FEATURES?.legacyDecoratorFileOrder ?? !1),
      }),
      args: Ln(e, 'args'),
      argsEnhancers: Mn(e, 'argsEnhancers'),
      argTypes: Ln(e, 'argTypes'),
      argTypesEnhancers: [
        ...t.filter((n) => !n.secondPass),
        ...t.filter((n) => n.secondPass),
      ],
      globals: Ln(e, 'globals'),
      globalTypes: Ln(e, 'globalTypes'),
      loaders: Mn(e, 'loaders'),
      render: jn(e, 'render'),
      renderToCanvas: jn(e, 'renderToCanvas'),
      renderToDOM: jn(e, 'renderToDOM'),
      applyDecorators: jn(e, 'applyDecorators'),
      runStep: ti(r),
    };
  }
  const YX = ri([]);
  const H_ = fe(Nn(), 1);
  const z_ = fe(wi(), 1);
  l();
  c();
  d();
  const G_ = fe(Nn(), 1);
  const V_ = fe(wi(), 1);
  const K_ = fe(Qo(), 1);
  const pm = Ke({
    '../../node_modules/entities/lib/maps/entities.json': function (e, t) {
      t.exports = {
        Aacute: '\xC1',
        aacute: '\xE1',
        Abreve: '\u0102',
        abreve: '\u0103',
        ac: '\u223E',
        acd: '\u223F',
        acE: '\u223E\u0333',
        Acirc: '\xC2',
        acirc: '\xE2',
        acute: '\xB4',
        Acy: '\u0410',
        acy: '\u0430',
        AElig: '\xC6',
        aelig: '\xE6',
        af: '\u2061',
        Afr: '\u{1D504}',
        afr: '\u{1D51E}',
        Agrave: '\xC0',
        agrave: '\xE0',
        alefsym: '\u2135',
        aleph: '\u2135',
        Alpha: '\u0391',
        alpha: '\u03B1',
        Amacr: '\u0100',
        amacr: '\u0101',
        amalg: '\u2A3F',
        amp: '&',
        AMP: '&',
        andand: '\u2A55',
        And: '\u2A53',
        and: '\u2227',
        andd: '\u2A5C',
        andslope: '\u2A58',
        andv: '\u2A5A',
        ang: '\u2220',
        ange: '\u29A4',
        angle: '\u2220',
        angmsdaa: '\u29A8',
        angmsdab: '\u29A9',
        angmsdac: '\u29AA',
        angmsdad: '\u29AB',
        angmsdae: '\u29AC',
        angmsdaf: '\u29AD',
        angmsdag: '\u29AE',
        angmsdah: '\u29AF',
        angmsd: '\u2221',
        angrt: '\u221F',
        angrtvb: '\u22BE',
        angrtvbd: '\u299D',
        angsph: '\u2222',
        angst: '\xC5',
        angzarr: '\u237C',
        Aogon: '\u0104',
        aogon: '\u0105',
        Aopf: '\u{1D538}',
        aopf: '\u{1D552}',
        apacir: '\u2A6F',
        ap: '\u2248',
        apE: '\u2A70',
        ape: '\u224A',
        apid: '\u224B',
        apos: "'",
        ApplyFunction: '\u2061',
        approx: '\u2248',
        approxeq: '\u224A',
        Aring: '\xC5',
        aring: '\xE5',
        Ascr: '\u{1D49C}',
        ascr: '\u{1D4B6}',
        Assign: '\u2254',
        ast: '*',
        asymp: '\u2248',
        asympeq: '\u224D',
        Atilde: '\xC3',
        atilde: '\xE3',
        Auml: '\xC4',
        auml: '\xE4',
        awconint: '\u2233',
        awint: '\u2A11',
        backcong: '\u224C',
        backepsilon: '\u03F6',
        backprime: '\u2035',
        backsim: '\u223D',
        backsimeq: '\u22CD',
        Backslash: '\u2216',
        Barv: '\u2AE7',
        barvee: '\u22BD',
        barwed: '\u2305',
        Barwed: '\u2306',
        barwedge: '\u2305',
        bbrk: '\u23B5',
        bbrktbrk: '\u23B6',
        bcong: '\u224C',
        Bcy: '\u0411',
        bcy: '\u0431',
        bdquo: '\u201E',
        becaus: '\u2235',
        because: '\u2235',
        Because: '\u2235',
        bemptyv: '\u29B0',
        bepsi: '\u03F6',
        bernou: '\u212C',
        Bernoullis: '\u212C',
        Beta: '\u0392',
        beta: '\u03B2',
        beth: '\u2136',
        between: '\u226C',
        Bfr: '\u{1D505}',
        bfr: '\u{1D51F}',
        bigcap: '\u22C2',
        bigcirc: '\u25EF',
        bigcup: '\u22C3',
        bigodot: '\u2A00',
        bigoplus: '\u2A01',
        bigotimes: '\u2A02',
        bigsqcup: '\u2A06',
        bigstar: '\u2605',
        bigtriangledown: '\u25BD',
        bigtriangleup: '\u25B3',
        biguplus: '\u2A04',
        bigvee: '\u22C1',
        bigwedge: '\u22C0',
        bkarow: '\u290D',
        blacklozenge: '\u29EB',
        blacksquare: '\u25AA',
        blacktriangle: '\u25B4',
        blacktriangledown: '\u25BE',
        blacktriangleleft: '\u25C2',
        blacktriangleright: '\u25B8',
        blank: '\u2423',
        blk12: '\u2592',
        blk14: '\u2591',
        blk34: '\u2593',
        block: '\u2588',
        bne: '=\u20E5',
        bnequiv: '\u2261\u20E5',
        bNot: '\u2AED',
        bnot: '\u2310',
        Bopf: '\u{1D539}',
        bopf: '\u{1D553}',
        bot: '\u22A5',
        bottom: '\u22A5',
        bowtie: '\u22C8',
        boxbox: '\u29C9',
        boxdl: '\u2510',
        boxdL: '\u2555',
        boxDl: '\u2556',
        boxDL: '\u2557',
        boxdr: '\u250C',
        boxdR: '\u2552',
        boxDr: '\u2553',
        boxDR: '\u2554',
        boxh: '\u2500',
        boxH: '\u2550',
        boxhd: '\u252C',
        boxHd: '\u2564',
        boxhD: '\u2565',
        boxHD: '\u2566',
        boxhu: '\u2534',
        boxHu: '\u2567',
        boxhU: '\u2568',
        boxHU: '\u2569',
        boxminus: '\u229F',
        boxplus: '\u229E',
        boxtimes: '\u22A0',
        boxul: '\u2518',
        boxuL: '\u255B',
        boxUl: '\u255C',
        boxUL: '\u255D',
        boxur: '\u2514',
        boxuR: '\u2558',
        boxUr: '\u2559',
        boxUR: '\u255A',
        boxv: '\u2502',
        boxV: '\u2551',
        boxvh: '\u253C',
        boxvH: '\u256A',
        boxVh: '\u256B',
        boxVH: '\u256C',
        boxvl: '\u2524',
        boxvL: '\u2561',
        boxVl: '\u2562',
        boxVL: '\u2563',
        boxvr: '\u251C',
        boxvR: '\u255E',
        boxVr: '\u255F',
        boxVR: '\u2560',
        bprime: '\u2035',
        breve: '\u02D8',
        Breve: '\u02D8',
        brvbar: '\xA6',
        bscr: '\u{1D4B7}',
        Bscr: '\u212C',
        bsemi: '\u204F',
        bsim: '\u223D',
        bsime: '\u22CD',
        bsolb: '\u29C5',
        bsol: '\\',
        bsolhsub: '\u27C8',
        bull: '\u2022',
        bullet: '\u2022',
        bump: '\u224E',
        bumpE: '\u2AAE',
        bumpe: '\u224F',
        Bumpeq: '\u224E',
        bumpeq: '\u224F',
        Cacute: '\u0106',
        cacute: '\u0107',
        capand: '\u2A44',
        capbrcup: '\u2A49',
        capcap: '\u2A4B',
        cap: '\u2229',
        Cap: '\u22D2',
        capcup: '\u2A47',
        capdot: '\u2A40',
        CapitalDifferentialD: '\u2145',
        caps: '\u2229\uFE00',
        caret: '\u2041',
        caron: '\u02C7',
        Cayleys: '\u212D',
        ccaps: '\u2A4D',
        Ccaron: '\u010C',
        ccaron: '\u010D',
        Ccedil: '\xC7',
        ccedil: '\xE7',
        Ccirc: '\u0108',
        ccirc: '\u0109',
        Cconint: '\u2230',
        ccups: '\u2A4C',
        ccupssm: '\u2A50',
        Cdot: '\u010A',
        cdot: '\u010B',
        cedil: '\xB8',
        Cedilla: '\xB8',
        cemptyv: '\u29B2',
        cent: '\xA2',
        centerdot: '\xB7',
        CenterDot: '\xB7',
        cfr: '\u{1D520}',
        Cfr: '\u212D',
        CHcy: '\u0427',
        chcy: '\u0447',
        check: '\u2713',
        checkmark: '\u2713',
        Chi: '\u03A7',
        chi: '\u03C7',
        circ: '\u02C6',
        circeq: '\u2257',
        circlearrowleft: '\u21BA',
        circlearrowright: '\u21BB',
        circledast: '\u229B',
        circledcirc: '\u229A',
        circleddash: '\u229D',
        CircleDot: '\u2299',
        circledR: '\xAE',
        circledS: '\u24C8',
        CircleMinus: '\u2296',
        CirclePlus: '\u2295',
        CircleTimes: '\u2297',
        cir: '\u25CB',
        cirE: '\u29C3',
        cire: '\u2257',
        cirfnint: '\u2A10',
        cirmid: '\u2AEF',
        cirscir: '\u29C2',
        ClockwiseContourIntegral: '\u2232',
        CloseCurlyDoubleQuote: '\u201D',
        CloseCurlyQuote: '\u2019',
        clubs: '\u2663',
        clubsuit: '\u2663',
        colon: ':',
        Colon: '\u2237',
        Colone: '\u2A74',
        colone: '\u2254',
        coloneq: '\u2254',
        comma: ',',
        commat: '@',
        comp: '\u2201',
        compfn: '\u2218',
        complement: '\u2201',
        complexes: '\u2102',
        cong: '\u2245',
        congdot: '\u2A6D',
        Congruent: '\u2261',
        conint: '\u222E',
        Conint: '\u222F',
        ContourIntegral: '\u222E',
        copf: '\u{1D554}',
        Copf: '\u2102',
        coprod: '\u2210',
        Coproduct: '\u2210',
        copy: '\xA9',
        COPY: '\xA9',
        copysr: '\u2117',
        CounterClockwiseContourIntegral: '\u2233',
        crarr: '\u21B5',
        cross: '\u2717',
        Cross: '\u2A2F',
        Cscr: '\u{1D49E}',
        cscr: '\u{1D4B8}',
        csub: '\u2ACF',
        csube: '\u2AD1',
        csup: '\u2AD0',
        csupe: '\u2AD2',
        ctdot: '\u22EF',
        cudarrl: '\u2938',
        cudarrr: '\u2935',
        cuepr: '\u22DE',
        cuesc: '\u22DF',
        cularr: '\u21B6',
        cularrp: '\u293D',
        cupbrcap: '\u2A48',
        cupcap: '\u2A46',
        CupCap: '\u224D',
        cup: '\u222A',
        Cup: '\u22D3',
        cupcup: '\u2A4A',
        cupdot: '\u228D',
        cupor: '\u2A45',
        cups: '\u222A\uFE00',
        curarr: '\u21B7',
        curarrm: '\u293C',
        curlyeqprec: '\u22DE',
        curlyeqsucc: '\u22DF',
        curlyvee: '\u22CE',
        curlywedge: '\u22CF',
        curren: '\xA4',
        curvearrowleft: '\u21B6',
        curvearrowright: '\u21B7',
        cuvee: '\u22CE',
        cuwed: '\u22CF',
        cwconint: '\u2232',
        cwint: '\u2231',
        cylcty: '\u232D',
        dagger: '\u2020',
        Dagger: '\u2021',
        daleth: '\u2138',
        darr: '\u2193',
        Darr: '\u21A1',
        dArr: '\u21D3',
        dash: '\u2010',
        Dashv: '\u2AE4',
        dashv: '\u22A3',
        dbkarow: '\u290F',
        dblac: '\u02DD',
        Dcaron: '\u010E',
        dcaron: '\u010F',
        Dcy: '\u0414',
        dcy: '\u0434',
        ddagger: '\u2021',
        ddarr: '\u21CA',
        DD: '\u2145',
        dd: '\u2146',
        DDotrahd: '\u2911',
        ddotseq: '\u2A77',
        deg: '\xB0',
        Del: '\u2207',
        Delta: '\u0394',
        delta: '\u03B4',
        demptyv: '\u29B1',
        dfisht: '\u297F',
        Dfr: '\u{1D507}',
        dfr: '\u{1D521}',
        dHar: '\u2965',
        dharl: '\u21C3',
        dharr: '\u21C2',
        DiacriticalAcute: '\xB4',
        DiacriticalDot: '\u02D9',
        DiacriticalDoubleAcute: '\u02DD',
        DiacriticalGrave: '`',
        DiacriticalTilde: '\u02DC',
        diam: '\u22C4',
        diamond: '\u22C4',
        Diamond: '\u22C4',
        diamondsuit: '\u2666',
        diams: '\u2666',
        die: '\xA8',
        DifferentialD: '\u2146',
        digamma: '\u03DD',
        disin: '\u22F2',
        div: '\xF7',
        divide: '\xF7',
        divideontimes: '\u22C7',
        divonx: '\u22C7',
        DJcy: '\u0402',
        djcy: '\u0452',
        dlcorn: '\u231E',
        dlcrop: '\u230D',
        dollar: '$',
        Dopf: '\u{1D53B}',
        dopf: '\u{1D555}',
        Dot: '\xA8',
        dot: '\u02D9',
        DotDot: '\u20DC',
        doteq: '\u2250',
        doteqdot: '\u2251',
        DotEqual: '\u2250',
        dotminus: '\u2238',
        dotplus: '\u2214',
        dotsquare: '\u22A1',
        doublebarwedge: '\u2306',
        DoubleContourIntegral: '\u222F',
        DoubleDot: '\xA8',
        DoubleDownArrow: '\u21D3',
        DoubleLeftArrow: '\u21D0',
        DoubleLeftRightArrow: '\u21D4',
        DoubleLeftTee: '\u2AE4',
        DoubleLongLeftArrow: '\u27F8',
        DoubleLongLeftRightArrow: '\u27FA',
        DoubleLongRightArrow: '\u27F9',
        DoubleRightArrow: '\u21D2',
        DoubleRightTee: '\u22A8',
        DoubleUpArrow: '\u21D1',
        DoubleUpDownArrow: '\u21D5',
        DoubleVerticalBar: '\u2225',
        DownArrowBar: '\u2913',
        downarrow: '\u2193',
        DownArrow: '\u2193',
        Downarrow: '\u21D3',
        DownArrowUpArrow: '\u21F5',
        DownBreve: '\u0311',
        downdownarrows: '\u21CA',
        downharpoonleft: '\u21C3',
        downharpoonright: '\u21C2',
        DownLeftRightVector: '\u2950',
        DownLeftTeeVector: '\u295E',
        DownLeftVectorBar: '\u2956',
        DownLeftVector: '\u21BD',
        DownRightTeeVector: '\u295F',
        DownRightVectorBar: '\u2957',
        DownRightVector: '\u21C1',
        DownTeeArrow: '\u21A7',
        DownTee: '\u22A4',
        drbkarow: '\u2910',
        drcorn: '\u231F',
        drcrop: '\u230C',
        Dscr: '\u{1D49F}',
        dscr: '\u{1D4B9}',
        DScy: '\u0405',
        dscy: '\u0455',
        dsol: '\u29F6',
        Dstrok: '\u0110',
        dstrok: '\u0111',
        dtdot: '\u22F1',
        dtri: '\u25BF',
        dtrif: '\u25BE',
        duarr: '\u21F5',
        duhar: '\u296F',
        dwangle: '\u29A6',
        DZcy: '\u040F',
        dzcy: '\u045F',
        dzigrarr: '\u27FF',
        Eacute: '\xC9',
        eacute: '\xE9',
        easter: '\u2A6E',
        Ecaron: '\u011A',
        ecaron: '\u011B',
        Ecirc: '\xCA',
        ecirc: '\xEA',
        ecir: '\u2256',
        ecolon: '\u2255',
        Ecy: '\u042D',
        ecy: '\u044D',
        eDDot: '\u2A77',
        Edot: '\u0116',
        edot: '\u0117',
        eDot: '\u2251',
        ee: '\u2147',
        efDot: '\u2252',
        Efr: '\u{1D508}',
        efr: '\u{1D522}',
        eg: '\u2A9A',
        Egrave: '\xC8',
        egrave: '\xE8',
        egs: '\u2A96',
        egsdot: '\u2A98',
        el: '\u2A99',
        Element: '\u2208',
        elinters: '\u23E7',
        ell: '\u2113',
        els: '\u2A95',
        elsdot: '\u2A97',
        Emacr: '\u0112',
        emacr: '\u0113',
        empty: '\u2205',
        emptyset: '\u2205',
        EmptySmallSquare: '\u25FB',
        emptyv: '\u2205',
        EmptyVerySmallSquare: '\u25AB',
        emsp13: '\u2004',
        emsp14: '\u2005',
        emsp: '\u2003',
        ENG: '\u014A',
        eng: '\u014B',
        ensp: '\u2002',
        Eogon: '\u0118',
        eogon: '\u0119',
        Eopf: '\u{1D53C}',
        eopf: '\u{1D556}',
        epar: '\u22D5',
        eparsl: '\u29E3',
        eplus: '\u2A71',
        epsi: '\u03B5',
        Epsilon: '\u0395',
        epsilon: '\u03B5',
        epsiv: '\u03F5',
        eqcirc: '\u2256',
        eqcolon: '\u2255',
        eqsim: '\u2242',
        eqslantgtr: '\u2A96',
        eqslantless: '\u2A95',
        Equal: '\u2A75',
        equals: '=',
        EqualTilde: '\u2242',
        equest: '\u225F',
        Equilibrium: '\u21CC',
        equiv: '\u2261',
        equivDD: '\u2A78',
        eqvparsl: '\u29E5',
        erarr: '\u2971',
        erDot: '\u2253',
        escr: '\u212F',
        Escr: '\u2130',
        esdot: '\u2250',
        Esim: '\u2A73',
        esim: '\u2242',
        Eta: '\u0397',
        eta: '\u03B7',
        ETH: '\xD0',
        eth: '\xF0',
        Euml: '\xCB',
        euml: '\xEB',
        euro: '\u20AC',
        excl: '!',
        exist: '\u2203',
        Exists: '\u2203',
        expectation: '\u2130',
        exponentiale: '\u2147',
        ExponentialE: '\u2147',
        fallingdotseq: '\u2252',
        Fcy: '\u0424',
        fcy: '\u0444',
        female: '\u2640',
        ffilig: '\uFB03',
        fflig: '\uFB00',
        ffllig: '\uFB04',
        Ffr: '\u{1D509}',
        ffr: '\u{1D523}',
        filig: '\uFB01',
        FilledSmallSquare: '\u25FC',
        FilledVerySmallSquare: '\u25AA',
        fjlig: 'fj',
        flat: '\u266D',
        fllig: '\uFB02',
        fltns: '\u25B1',
        fnof: '\u0192',
        Fopf: '\u{1D53D}',
        fopf: '\u{1D557}',
        forall: '\u2200',
        ForAll: '\u2200',
        fork: '\u22D4',
        forkv: '\u2AD9',
        Fouriertrf: '\u2131',
        fpartint: '\u2A0D',
        frac12: '\xBD',
        frac13: '\u2153',
        frac14: '\xBC',
        frac15: '\u2155',
        frac16: '\u2159',
        frac18: '\u215B',
        frac23: '\u2154',
        frac25: '\u2156',
        frac34: '\xBE',
        frac35: '\u2157',
        frac38: '\u215C',
        frac45: '\u2158',
        frac56: '\u215A',
        frac58: '\u215D',
        frac78: '\u215E',
        frasl: '\u2044',
        frown: '\u2322',
        fscr: '\u{1D4BB}',
        Fscr: '\u2131',
        gacute: '\u01F5',
        Gamma: '\u0393',
        gamma: '\u03B3',
        Gammad: '\u03DC',
        gammad: '\u03DD',
        gap: '\u2A86',
        Gbreve: '\u011E',
        gbreve: '\u011F',
        Gcedil: '\u0122',
        Gcirc: '\u011C',
        gcirc: '\u011D',
        Gcy: '\u0413',
        gcy: '\u0433',
        Gdot: '\u0120',
        gdot: '\u0121',
        ge: '\u2265',
        gE: '\u2267',
        gEl: '\u2A8C',
        gel: '\u22DB',
        geq: '\u2265',
        geqq: '\u2267',
        geqslant: '\u2A7E',
        gescc: '\u2AA9',
        ges: '\u2A7E',
        gesdot: '\u2A80',
        gesdoto: '\u2A82',
        gesdotol: '\u2A84',
        gesl: '\u22DB\uFE00',
        gesles: '\u2A94',
        Gfr: '\u{1D50A}',
        gfr: '\u{1D524}',
        gg: '\u226B',
        Gg: '\u22D9',
        ggg: '\u22D9',
        gimel: '\u2137',
        GJcy: '\u0403',
        gjcy: '\u0453',
        gla: '\u2AA5',
        gl: '\u2277',
        glE: '\u2A92',
        glj: '\u2AA4',
        gnap: '\u2A8A',
        gnapprox: '\u2A8A',
        gne: '\u2A88',
        gnE: '\u2269',
        gneq: '\u2A88',
        gneqq: '\u2269',
        gnsim: '\u22E7',
        Gopf: '\u{1D53E}',
        gopf: '\u{1D558}',
        grave: '`',
        GreaterEqual: '\u2265',
        GreaterEqualLess: '\u22DB',
        GreaterFullEqual: '\u2267',
        GreaterGreater: '\u2AA2',
        GreaterLess: '\u2277',
        GreaterSlantEqual: '\u2A7E',
        GreaterTilde: '\u2273',
        Gscr: '\u{1D4A2}',
        gscr: '\u210A',
        gsim: '\u2273',
        gsime: '\u2A8E',
        gsiml: '\u2A90',
        gtcc: '\u2AA7',
        gtcir: '\u2A7A',
        gt: '>',
        GT: '>',
        Gt: '\u226B',
        gtdot: '\u22D7',
        gtlPar: '\u2995',
        gtquest: '\u2A7C',
        gtrapprox: '\u2A86',
        gtrarr: '\u2978',
        gtrdot: '\u22D7',
        gtreqless: '\u22DB',
        gtreqqless: '\u2A8C',
        gtrless: '\u2277',
        gtrsim: '\u2273',
        gvertneqq: '\u2269\uFE00',
        gvnE: '\u2269\uFE00',
        Hacek: '\u02C7',
        hairsp: '\u200A',
        half: '\xBD',
        hamilt: '\u210B',
        HARDcy: '\u042A',
        hardcy: '\u044A',
        harrcir: '\u2948',
        harr: '\u2194',
        hArr: '\u21D4',
        harrw: '\u21AD',
        Hat: '^',
        hbar: '\u210F',
        Hcirc: '\u0124',
        hcirc: '\u0125',
        hearts: '\u2665',
        heartsuit: '\u2665',
        hellip: '\u2026',
        hercon: '\u22B9',
        hfr: '\u{1D525}',
        Hfr: '\u210C',
        HilbertSpace: '\u210B',
        hksearow: '\u2925',
        hkswarow: '\u2926',
        hoarr: '\u21FF',
        homtht: '\u223B',
        hookleftarrow: '\u21A9',
        hookrightarrow: '\u21AA',
        hopf: '\u{1D559}',
        Hopf: '\u210D',
        horbar: '\u2015',
        HorizontalLine: '\u2500',
        hscr: '\u{1D4BD}',
        Hscr: '\u210B',
        hslash: '\u210F',
        Hstrok: '\u0126',
        hstrok: '\u0127',
        HumpDownHump: '\u224E',
        HumpEqual: '\u224F',
        hybull: '\u2043',
        hyphen: '\u2010',
        Iacute: '\xCD',
        iacute: '\xED',
        ic: '\u2063',
        Icirc: '\xCE',
        icirc: '\xEE',
        Icy: '\u0418',
        icy: '\u0438',
        Idot: '\u0130',
        IEcy: '\u0415',
        iecy: '\u0435',
        iexcl: '\xA1',
        iff: '\u21D4',
        ifr: '\u{1D526}',
        Ifr: '\u2111',
        Igrave: '\xCC',
        igrave: '\xEC',
        ii: '\u2148',
        iiiint: '\u2A0C',
        iiint: '\u222D',
        iinfin: '\u29DC',
        iiota: '\u2129',
        IJlig: '\u0132',
        ijlig: '\u0133',
        Imacr: '\u012A',
        imacr: '\u012B',
        image: '\u2111',
        ImaginaryI: '\u2148',
        imagline: '\u2110',
        imagpart: '\u2111',
        imath: '\u0131',
        Im: '\u2111',
        imof: '\u22B7',
        imped: '\u01B5',
        Implies: '\u21D2',
        incare: '\u2105',
        in: '\u2208',
        infin: '\u221E',
        infintie: '\u29DD',
        inodot: '\u0131',
        intcal: '\u22BA',
        int: '\u222B',
        Int: '\u222C',
        integers: '\u2124',
        Integral: '\u222B',
        intercal: '\u22BA',
        Intersection: '\u22C2',
        intlarhk: '\u2A17',
        intprod: '\u2A3C',
        InvisibleComma: '\u2063',
        InvisibleTimes: '\u2062',
        IOcy: '\u0401',
        iocy: '\u0451',
        Iogon: '\u012E',
        iogon: '\u012F',
        Iopf: '\u{1D540}',
        iopf: '\u{1D55A}',
        Iota: '\u0399',
        iota: '\u03B9',
        iprod: '\u2A3C',
        iquest: '\xBF',
        iscr: '\u{1D4BE}',
        Iscr: '\u2110',
        isin: '\u2208',
        isindot: '\u22F5',
        isinE: '\u22F9',
        isins: '\u22F4',
        isinsv: '\u22F3',
        isinv: '\u2208',
        it: '\u2062',
        Itilde: '\u0128',
        itilde: '\u0129',
        Iukcy: '\u0406',
        iukcy: '\u0456',
        Iuml: '\xCF',
        iuml: '\xEF',
        Jcirc: '\u0134',
        jcirc: '\u0135',
        Jcy: '\u0419',
        jcy: '\u0439',
        Jfr: '\u{1D50D}',
        jfr: '\u{1D527}',
        jmath: '\u0237',
        Jopf: '\u{1D541}',
        jopf: '\u{1D55B}',
        Jscr: '\u{1D4A5}',
        jscr: '\u{1D4BF}',
        Jsercy: '\u0408',
        jsercy: '\u0458',
        Jukcy: '\u0404',
        jukcy: '\u0454',
        Kappa: '\u039A',
        kappa: '\u03BA',
        kappav: '\u03F0',
        Kcedil: '\u0136',
        kcedil: '\u0137',
        Kcy: '\u041A',
        kcy: '\u043A',
        Kfr: '\u{1D50E}',
        kfr: '\u{1D528}',
        kgreen: '\u0138',
        KHcy: '\u0425',
        khcy: '\u0445',
        KJcy: '\u040C',
        kjcy: '\u045C',
        Kopf: '\u{1D542}',
        kopf: '\u{1D55C}',
        Kscr: '\u{1D4A6}',
        kscr: '\u{1D4C0}',
        lAarr: '\u21DA',
        Lacute: '\u0139',
        lacute: '\u013A',
        laemptyv: '\u29B4',
        lagran: '\u2112',
        Lambda: '\u039B',
        lambda: '\u03BB',
        lang: '\u27E8',
        Lang: '\u27EA',
        langd: '\u2991',
        langle: '\u27E8',
        lap: '\u2A85',
        Laplacetrf: '\u2112',
        laquo: '\xAB',
        larrb: '\u21E4',
        larrbfs: '\u291F',
        larr: '\u2190',
        Larr: '\u219E',
        lArr: '\u21D0',
        larrfs: '\u291D',
        larrhk: '\u21A9',
        larrlp: '\u21AB',
        larrpl: '\u2939',
        larrsim: '\u2973',
        larrtl: '\u21A2',
        latail: '\u2919',
        lAtail: '\u291B',
        lat: '\u2AAB',
        late: '\u2AAD',
        lates: '\u2AAD\uFE00',
        lbarr: '\u290C',
        lBarr: '\u290E',
        lbbrk: '\u2772',
        lbrace: '{',
        lbrack: '[',
        lbrke: '\u298B',
        lbrksld: '\u298F',
        lbrkslu: '\u298D',
        Lcaron: '\u013D',
        lcaron: '\u013E',
        Lcedil: '\u013B',
        lcedil: '\u013C',
        lceil: '\u2308',
        lcub: '{',
        Lcy: '\u041B',
        lcy: '\u043B',
        ldca: '\u2936',
        ldquo: '\u201C',
        ldquor: '\u201E',
        ldrdhar: '\u2967',
        ldrushar: '\u294B',
        ldsh: '\u21B2',
        le: '\u2264',
        lE: '\u2266',
        LeftAngleBracket: '\u27E8',
        LeftArrowBar: '\u21E4',
        leftarrow: '\u2190',
        LeftArrow: '\u2190',
        Leftarrow: '\u21D0',
        LeftArrowRightArrow: '\u21C6',
        leftarrowtail: '\u21A2',
        LeftCeiling: '\u2308',
        LeftDoubleBracket: '\u27E6',
        LeftDownTeeVector: '\u2961',
        LeftDownVectorBar: '\u2959',
        LeftDownVector: '\u21C3',
        LeftFloor: '\u230A',
        leftharpoondown: '\u21BD',
        leftharpoonup: '\u21BC',
        leftleftarrows: '\u21C7',
        leftrightarrow: '\u2194',
        LeftRightArrow: '\u2194',
        Leftrightarrow: '\u21D4',
        leftrightarrows: '\u21C6',
        leftrightharpoons: '\u21CB',
        leftrightsquigarrow: '\u21AD',
        LeftRightVector: '\u294E',
        LeftTeeArrow: '\u21A4',
        LeftTee: '\u22A3',
        LeftTeeVector: '\u295A',
        leftthreetimes: '\u22CB',
        LeftTriangleBar: '\u29CF',
        LeftTriangle: '\u22B2',
        LeftTriangleEqual: '\u22B4',
        LeftUpDownVector: '\u2951',
        LeftUpTeeVector: '\u2960',
        LeftUpVectorBar: '\u2958',
        LeftUpVector: '\u21BF',
        LeftVectorBar: '\u2952',
        LeftVector: '\u21BC',
        lEg: '\u2A8B',
        leg: '\u22DA',
        leq: '\u2264',
        leqq: '\u2266',
        leqslant: '\u2A7D',
        lescc: '\u2AA8',
        les: '\u2A7D',
        lesdot: '\u2A7F',
        lesdoto: '\u2A81',
        lesdotor: '\u2A83',
        lesg: '\u22DA\uFE00',
        lesges: '\u2A93',
        lessapprox: '\u2A85',
        lessdot: '\u22D6',
        lesseqgtr: '\u22DA',
        lesseqqgtr: '\u2A8B',
        LessEqualGreater: '\u22DA',
        LessFullEqual: '\u2266',
        LessGreater: '\u2276',
        lessgtr: '\u2276',
        LessLess: '\u2AA1',
        lesssim: '\u2272',
        LessSlantEqual: '\u2A7D',
        LessTilde: '\u2272',
        lfisht: '\u297C',
        lfloor: '\u230A',
        Lfr: '\u{1D50F}',
        lfr: '\u{1D529}',
        lg: '\u2276',
        lgE: '\u2A91',
        lHar: '\u2962',
        lhard: '\u21BD',
        lharu: '\u21BC',
        lharul: '\u296A',
        lhblk: '\u2584',
        LJcy: '\u0409',
        ljcy: '\u0459',
        llarr: '\u21C7',
        ll: '\u226A',
        Ll: '\u22D8',
        llcorner: '\u231E',
        Lleftarrow: '\u21DA',
        llhard: '\u296B',
        lltri: '\u25FA',
        Lmidot: '\u013F',
        lmidot: '\u0140',
        lmoustache: '\u23B0',
        lmoust: '\u23B0',
        lnap: '\u2A89',
        lnapprox: '\u2A89',
        lne: '\u2A87',
        lnE: '\u2268',
        lneq: '\u2A87',
        lneqq: '\u2268',
        lnsim: '\u22E6',
        loang: '\u27EC',
        loarr: '\u21FD',
        lobrk: '\u27E6',
        longleftarrow: '\u27F5',
        LongLeftArrow: '\u27F5',
        Longleftarrow: '\u27F8',
        longleftrightarrow: '\u27F7',
        LongLeftRightArrow: '\u27F7',
        Longleftrightarrow: '\u27FA',
        longmapsto: '\u27FC',
        longrightarrow: '\u27F6',
        LongRightArrow: '\u27F6',
        Longrightarrow: '\u27F9',
        looparrowleft: '\u21AB',
        looparrowright: '\u21AC',
        lopar: '\u2985',
        Lopf: '\u{1D543}',
        lopf: '\u{1D55D}',
        loplus: '\u2A2D',
        lotimes: '\u2A34',
        lowast: '\u2217',
        lowbar: '_',
        LowerLeftArrow: '\u2199',
        LowerRightArrow: '\u2198',
        loz: '\u25CA',
        lozenge: '\u25CA',
        lozf: '\u29EB',
        lpar: '(',
        lparlt: '\u2993',
        lrarr: '\u21C6',
        lrcorner: '\u231F',
        lrhar: '\u21CB',
        lrhard: '\u296D',
        lrm: '\u200E',
        lrtri: '\u22BF',
        lsaquo: '\u2039',
        lscr: '\u{1D4C1}',
        Lscr: '\u2112',
        lsh: '\u21B0',
        Lsh: '\u21B0',
        lsim: '\u2272',
        lsime: '\u2A8D',
        lsimg: '\u2A8F',
        lsqb: '[',
        lsquo: '\u2018',
        lsquor: '\u201A',
        Lstrok: '\u0141',
        lstrok: '\u0142',
        ltcc: '\u2AA6',
        ltcir: '\u2A79',
        lt: '<',
        LT: '<',
        Lt: '\u226A',
        ltdot: '\u22D6',
        lthree: '\u22CB',
        ltimes: '\u22C9',
        ltlarr: '\u2976',
        ltquest: '\u2A7B',
        ltri: '\u25C3',
        ltrie: '\u22B4',
        ltrif: '\u25C2',
        ltrPar: '\u2996',
        lurdshar: '\u294A',
        luruhar: '\u2966',
        lvertneqq: '\u2268\uFE00',
        lvnE: '\u2268\uFE00',
        macr: '\xAF',
        male: '\u2642',
        malt: '\u2720',
        maltese: '\u2720',
        Map: '\u2905',
        map: '\u21A6',
        mapsto: '\u21A6',
        mapstodown: '\u21A7',
        mapstoleft: '\u21A4',
        mapstoup: '\u21A5',
        marker: '\u25AE',
        mcomma: '\u2A29',
        Mcy: '\u041C',
        mcy: '\u043C',
        mdash: '\u2014',
        mDDot: '\u223A',
        measuredangle: '\u2221',
        MediumSpace: '\u205F',
        Mellintrf: '\u2133',
        Mfr: '\u{1D510}',
        mfr: '\u{1D52A}',
        mho: '\u2127',
        micro: '\xB5',
        midast: '*',
        midcir: '\u2AF0',
        mid: '\u2223',
        middot: '\xB7',
        minusb: '\u229F',
        minus: '\u2212',
        minusd: '\u2238',
        minusdu: '\u2A2A',
        MinusPlus: '\u2213',
        mlcp: '\u2ADB',
        mldr: '\u2026',
        mnplus: '\u2213',
        models: '\u22A7',
        Mopf: '\u{1D544}',
        mopf: '\u{1D55E}',
        mp: '\u2213',
        mscr: '\u{1D4C2}',
        Mscr: '\u2133',
        mstpos: '\u223E',
        Mu: '\u039C',
        mu: '\u03BC',
        multimap: '\u22B8',
        mumap: '\u22B8',
        nabla: '\u2207',
        Nacute: '\u0143',
        nacute: '\u0144',
        nang: '\u2220\u20D2',
        nap: '\u2249',
        napE: '\u2A70\u0338',
        napid: '\u224B\u0338',
        napos: '\u0149',
        napprox: '\u2249',
        natural: '\u266E',
        naturals: '\u2115',
        natur: '\u266E',
        nbsp: '\xA0',
        nbump: '\u224E\u0338',
        nbumpe: '\u224F\u0338',
        ncap: '\u2A43',
        Ncaron: '\u0147',
        ncaron: '\u0148',
        Ncedil: '\u0145',
        ncedil: '\u0146',
        ncong: '\u2247',
        ncongdot: '\u2A6D\u0338',
        ncup: '\u2A42',
        Ncy: '\u041D',
        ncy: '\u043D',
        ndash: '\u2013',
        nearhk: '\u2924',
        nearr: '\u2197',
        neArr: '\u21D7',
        nearrow: '\u2197',
        ne: '\u2260',
        nedot: '\u2250\u0338',
        NegativeMediumSpace: '\u200B',
        NegativeThickSpace: '\u200B',
        NegativeThinSpace: '\u200B',
        NegativeVeryThinSpace: '\u200B',
        nequiv: '\u2262',
        nesear: '\u2928',
        nesim: '\u2242\u0338',
        NestedGreaterGreater: '\u226B',
        NestedLessLess: '\u226A',
        NewLine: `
`,
        nexist: '\u2204',
        nexists: '\u2204',
        Nfr: '\u{1D511}',
        nfr: '\u{1D52B}',
        ngE: '\u2267\u0338',
        nge: '\u2271',
        ngeq: '\u2271',
        ngeqq: '\u2267\u0338',
        ngeqslant: '\u2A7E\u0338',
        nges: '\u2A7E\u0338',
        nGg: '\u22D9\u0338',
        ngsim: '\u2275',
        nGt: '\u226B\u20D2',
        ngt: '\u226F',
        ngtr: '\u226F',
        nGtv: '\u226B\u0338',
        nharr: '\u21AE',
        nhArr: '\u21CE',
        nhpar: '\u2AF2',
        ni: '\u220B',
        nis: '\u22FC',
        nisd: '\u22FA',
        niv: '\u220B',
        NJcy: '\u040A',
        njcy: '\u045A',
        nlarr: '\u219A',
        nlArr: '\u21CD',
        nldr: '\u2025',
        nlE: '\u2266\u0338',
        nle: '\u2270',
        nleftarrow: '\u219A',
        nLeftarrow: '\u21CD',
        nleftrightarrow: '\u21AE',
        nLeftrightarrow: '\u21CE',
        nleq: '\u2270',
        nleqq: '\u2266\u0338',
        nleqslant: '\u2A7D\u0338',
        nles: '\u2A7D\u0338',
        nless: '\u226E',
        nLl: '\u22D8\u0338',
        nlsim: '\u2274',
        nLt: '\u226A\u20D2',
        nlt: '\u226E',
        nltri: '\u22EA',
        nltrie: '\u22EC',
        nLtv: '\u226A\u0338',
        nmid: '\u2224',
        NoBreak: '\u2060',
        NonBreakingSpace: '\xA0',
        nopf: '\u{1D55F}',
        Nopf: '\u2115',
        Not: '\u2AEC',
        not: '\xAC',
        NotCongruent: '\u2262',
        NotCupCap: '\u226D',
        NotDoubleVerticalBar: '\u2226',
        NotElement: '\u2209',
        NotEqual: '\u2260',
        NotEqualTilde: '\u2242\u0338',
        NotExists: '\u2204',
        NotGreater: '\u226F',
        NotGreaterEqual: '\u2271',
        NotGreaterFullEqual: '\u2267\u0338',
        NotGreaterGreater: '\u226B\u0338',
        NotGreaterLess: '\u2279',
        NotGreaterSlantEqual: '\u2A7E\u0338',
        NotGreaterTilde: '\u2275',
        NotHumpDownHump: '\u224E\u0338',
        NotHumpEqual: '\u224F\u0338',
        notin: '\u2209',
        notindot: '\u22F5\u0338',
        notinE: '\u22F9\u0338',
        notinva: '\u2209',
        notinvb: '\u22F7',
        notinvc: '\u22F6',
        NotLeftTriangleBar: '\u29CF\u0338',
        NotLeftTriangle: '\u22EA',
        NotLeftTriangleEqual: '\u22EC',
        NotLess: '\u226E',
        NotLessEqual: '\u2270',
        NotLessGreater: '\u2278',
        NotLessLess: '\u226A\u0338',
        NotLessSlantEqual: '\u2A7D\u0338',
        NotLessTilde: '\u2274',
        NotNestedGreaterGreater: '\u2AA2\u0338',
        NotNestedLessLess: '\u2AA1\u0338',
        notni: '\u220C',
        notniva: '\u220C',
        notnivb: '\u22FE',
        notnivc: '\u22FD',
        NotPrecedes: '\u2280',
        NotPrecedesEqual: '\u2AAF\u0338',
        NotPrecedesSlantEqual: '\u22E0',
        NotReverseElement: '\u220C',
        NotRightTriangleBar: '\u29D0\u0338',
        NotRightTriangle: '\u22EB',
        NotRightTriangleEqual: '\u22ED',
        NotSquareSubset: '\u228F\u0338',
        NotSquareSubsetEqual: '\u22E2',
        NotSquareSuperset: '\u2290\u0338',
        NotSquareSupersetEqual: '\u22E3',
        NotSubset: '\u2282\u20D2',
        NotSubsetEqual: '\u2288',
        NotSucceeds: '\u2281',
        NotSucceedsEqual: '\u2AB0\u0338',
        NotSucceedsSlantEqual: '\u22E1',
        NotSucceedsTilde: '\u227F\u0338',
        NotSuperset: '\u2283\u20D2',
        NotSupersetEqual: '\u2289',
        NotTilde: '\u2241',
        NotTildeEqual: '\u2244',
        NotTildeFullEqual: '\u2247',
        NotTildeTilde: '\u2249',
        NotVerticalBar: '\u2224',
        nparallel: '\u2226',
        npar: '\u2226',
        nparsl: '\u2AFD\u20E5',
        npart: '\u2202\u0338',
        npolint: '\u2A14',
        npr: '\u2280',
        nprcue: '\u22E0',
        nprec: '\u2280',
        npreceq: '\u2AAF\u0338',
        npre: '\u2AAF\u0338',
        nrarrc: '\u2933\u0338',
        nrarr: '\u219B',
        nrArr: '\u21CF',
        nrarrw: '\u219D\u0338',
        nrightarrow: '\u219B',
        nRightarrow: '\u21CF',
        nrtri: '\u22EB',
        nrtrie: '\u22ED',
        nsc: '\u2281',
        nsccue: '\u22E1',
        nsce: '\u2AB0\u0338',
        Nscr: '\u{1D4A9}',
        nscr: '\u{1D4C3}',
        nshortmid: '\u2224',
        nshortparallel: '\u2226',
        nsim: '\u2241',
        nsime: '\u2244',
        nsimeq: '\u2244',
        nsmid: '\u2224',
        nspar: '\u2226',
        nsqsube: '\u22E2',
        nsqsupe: '\u22E3',
        nsub: '\u2284',
        nsubE: '\u2AC5\u0338',
        nsube: '\u2288',
        nsubset: '\u2282\u20D2',
        nsubseteq: '\u2288',
        nsubseteqq: '\u2AC5\u0338',
        nsucc: '\u2281',
        nsucceq: '\u2AB0\u0338',
        nsup: '\u2285',
        nsupE: '\u2AC6\u0338',
        nsupe: '\u2289',
        nsupset: '\u2283\u20D2',
        nsupseteq: '\u2289',
        nsupseteqq: '\u2AC6\u0338',
        ntgl: '\u2279',
        Ntilde: '\xD1',
        ntilde: '\xF1',
        ntlg: '\u2278',
        ntriangleleft: '\u22EA',
        ntrianglelefteq: '\u22EC',
        ntriangleright: '\u22EB',
        ntrianglerighteq: '\u22ED',
        Nu: '\u039D',
        nu: '\u03BD',
        num: '#',
        numero: '\u2116',
        numsp: '\u2007',
        nvap: '\u224D\u20D2',
        nvdash: '\u22AC',
        nvDash: '\u22AD',
        nVdash: '\u22AE',
        nVDash: '\u22AF',
        nvge: '\u2265\u20D2',
        nvgt: '>\u20D2',
        nvHarr: '\u2904',
        nvinfin: '\u29DE',
        nvlArr: '\u2902',
        nvle: '\u2264\u20D2',
        nvlt: '<\u20D2',
        nvltrie: '\u22B4\u20D2',
        nvrArr: '\u2903',
        nvrtrie: '\u22B5\u20D2',
        nvsim: '\u223C\u20D2',
        nwarhk: '\u2923',
        nwarr: '\u2196',
        nwArr: '\u21D6',
        nwarrow: '\u2196',
        nwnear: '\u2927',
        Oacute: '\xD3',
        oacute: '\xF3',
        oast: '\u229B',
        Ocirc: '\xD4',
        ocirc: '\xF4',
        ocir: '\u229A',
        Ocy: '\u041E',
        ocy: '\u043E',
        odash: '\u229D',
        Odblac: '\u0150',
        odblac: '\u0151',
        odiv: '\u2A38',
        odot: '\u2299',
        odsold: '\u29BC',
        OElig: '\u0152',
        oelig: '\u0153',
        ofcir: '\u29BF',
        Ofr: '\u{1D512}',
        ofr: '\u{1D52C}',
        ogon: '\u02DB',
        Ograve: '\xD2',
        ograve: '\xF2',
        ogt: '\u29C1',
        ohbar: '\u29B5',
        ohm: '\u03A9',
        oint: '\u222E',
        olarr: '\u21BA',
        olcir: '\u29BE',
        olcross: '\u29BB',
        oline: '\u203E',
        olt: '\u29C0',
        Omacr: '\u014C',
        omacr: '\u014D',
        Omega: '\u03A9',
        omega: '\u03C9',
        Omicron: '\u039F',
        omicron: '\u03BF',
        omid: '\u29B6',
        ominus: '\u2296',
        Oopf: '\u{1D546}',
        oopf: '\u{1D560}',
        opar: '\u29B7',
        OpenCurlyDoubleQuote: '\u201C',
        OpenCurlyQuote: '\u2018',
        operp: '\u29B9',
        oplus: '\u2295',
        orarr: '\u21BB',
        Or: '\u2A54',
        or: '\u2228',
        ord: '\u2A5D',
        order: '\u2134',
        orderof: '\u2134',
        ordf: '\xAA',
        ordm: '\xBA',
        origof: '\u22B6',
        oror: '\u2A56',
        orslope: '\u2A57',
        orv: '\u2A5B',
        oS: '\u24C8',
        Oscr: '\u{1D4AA}',
        oscr: '\u2134',
        Oslash: '\xD8',
        oslash: '\xF8',
        osol: '\u2298',
        Otilde: '\xD5',
        otilde: '\xF5',
        otimesas: '\u2A36',
        Otimes: '\u2A37',
        otimes: '\u2297',
        Ouml: '\xD6',
        ouml: '\xF6',
        ovbar: '\u233D',
        OverBar: '\u203E',
        OverBrace: '\u23DE',
        OverBracket: '\u23B4',
        OverParenthesis: '\u23DC',
        para: '\xB6',
        parallel: '\u2225',
        par: '\u2225',
        parsim: '\u2AF3',
        parsl: '\u2AFD',
        part: '\u2202',
        PartialD: '\u2202',
        Pcy: '\u041F',
        pcy: '\u043F',
        percnt: '%',
        period: '.',
        permil: '\u2030',
        perp: '\u22A5',
        pertenk: '\u2031',
        Pfr: '\u{1D513}',
        pfr: '\u{1D52D}',
        Phi: '\u03A6',
        phi: '\u03C6',
        phiv: '\u03D5',
        phmmat: '\u2133',
        phone: '\u260E',
        Pi: '\u03A0',
        pi: '\u03C0',
        pitchfork: '\u22D4',
        piv: '\u03D6',
        planck: '\u210F',
        planckh: '\u210E',
        plankv: '\u210F',
        plusacir: '\u2A23',
        plusb: '\u229E',
        pluscir: '\u2A22',
        plus: '+',
        plusdo: '\u2214',
        plusdu: '\u2A25',
        pluse: '\u2A72',
        PlusMinus: '\xB1',
        plusmn: '\xB1',
        plussim: '\u2A26',
        plustwo: '\u2A27',
        pm: '\xB1',
        Poincareplane: '\u210C',
        pointint: '\u2A15',
        popf: '\u{1D561}',
        Popf: '\u2119',
        pound: '\xA3',
        prap: '\u2AB7',
        Pr: '\u2ABB',
        pr: '\u227A',
        prcue: '\u227C',
        precapprox: '\u2AB7',
        prec: '\u227A',
        preccurlyeq: '\u227C',
        Precedes: '\u227A',
        PrecedesEqual: '\u2AAF',
        PrecedesSlantEqual: '\u227C',
        PrecedesTilde: '\u227E',
        preceq: '\u2AAF',
        precnapprox: '\u2AB9',
        precneqq: '\u2AB5',
        precnsim: '\u22E8',
        pre: '\u2AAF',
        prE: '\u2AB3',
        precsim: '\u227E',
        prime: '\u2032',
        Prime: '\u2033',
        primes: '\u2119',
        prnap: '\u2AB9',
        prnE: '\u2AB5',
        prnsim: '\u22E8',
        prod: '\u220F',
        Product: '\u220F',
        profalar: '\u232E',
        profline: '\u2312',
        profsurf: '\u2313',
        prop: '\u221D',
        Proportional: '\u221D',
        Proportion: '\u2237',
        propto: '\u221D',
        prsim: '\u227E',
        prurel: '\u22B0',
        Pscr: '\u{1D4AB}',
        pscr: '\u{1D4C5}',
        Psi: '\u03A8',
        psi: '\u03C8',
        puncsp: '\u2008',
        Qfr: '\u{1D514}',
        qfr: '\u{1D52E}',
        qint: '\u2A0C',
        qopf: '\u{1D562}',
        Qopf: '\u211A',
        qprime: '\u2057',
        Qscr: '\u{1D4AC}',
        qscr: '\u{1D4C6}',
        quaternions: '\u210D',
        quatint: '\u2A16',
        quest: '?',
        questeq: '\u225F',
        quot: '"',
        QUOT: '"',
        rAarr: '\u21DB',
        race: '\u223D\u0331',
        Racute: '\u0154',
        racute: '\u0155',
        radic: '\u221A',
        raemptyv: '\u29B3',
        rang: '\u27E9',
        Rang: '\u27EB',
        rangd: '\u2992',
        range: '\u29A5',
        rangle: '\u27E9',
        raquo: '\xBB',
        rarrap: '\u2975',
        rarrb: '\u21E5',
        rarrbfs: '\u2920',
        rarrc: '\u2933',
        rarr: '\u2192',
        Rarr: '\u21A0',
        rArr: '\u21D2',
        rarrfs: '\u291E',
        rarrhk: '\u21AA',
        rarrlp: '\u21AC',
        rarrpl: '\u2945',
        rarrsim: '\u2974',
        Rarrtl: '\u2916',
        rarrtl: '\u21A3',
        rarrw: '\u219D',
        ratail: '\u291A',
        rAtail: '\u291C',
        ratio: '\u2236',
        rationals: '\u211A',
        rbarr: '\u290D',
        rBarr: '\u290F',
        RBarr: '\u2910',
        rbbrk: '\u2773',
        rbrace: '}',
        rbrack: ']',
        rbrke: '\u298C',
        rbrksld: '\u298E',
        rbrkslu: '\u2990',
        Rcaron: '\u0158',
        rcaron: '\u0159',
        Rcedil: '\u0156',
        rcedil: '\u0157',
        rceil: '\u2309',
        rcub: '}',
        Rcy: '\u0420',
        rcy: '\u0440',
        rdca: '\u2937',
        rdldhar: '\u2969',
        rdquo: '\u201D',
        rdquor: '\u201D',
        rdsh: '\u21B3',
        real: '\u211C',
        realine: '\u211B',
        realpart: '\u211C',
        reals: '\u211D',
        Re: '\u211C',
        rect: '\u25AD',
        reg: '\xAE',
        REG: '\xAE',
        ReverseElement: '\u220B',
        ReverseEquilibrium: '\u21CB',
        ReverseUpEquilibrium: '\u296F',
        rfisht: '\u297D',
        rfloor: '\u230B',
        rfr: '\u{1D52F}',
        Rfr: '\u211C',
        rHar: '\u2964',
        rhard: '\u21C1',
        rharu: '\u21C0',
        rharul: '\u296C',
        Rho: '\u03A1',
        rho: '\u03C1',
        rhov: '\u03F1',
        RightAngleBracket: '\u27E9',
        RightArrowBar: '\u21E5',
        rightarrow: '\u2192',
        RightArrow: '\u2192',
        Rightarrow: '\u21D2',
        RightArrowLeftArrow: '\u21C4',
        rightarrowtail: '\u21A3',
        RightCeiling: '\u2309',
        RightDoubleBracket: '\u27E7',
        RightDownTeeVector: '\u295D',
        RightDownVectorBar: '\u2955',
        RightDownVector: '\u21C2',
        RightFloor: '\u230B',
        rightharpoondown: '\u21C1',
        rightharpoonup: '\u21C0',
        rightleftarrows: '\u21C4',
        rightleftharpoons: '\u21CC',
        rightrightarrows: '\u21C9',
        rightsquigarrow: '\u219D',
        RightTeeArrow: '\u21A6',
        RightTee: '\u22A2',
        RightTeeVector: '\u295B',
        rightthreetimes: '\u22CC',
        RightTriangleBar: '\u29D0',
        RightTriangle: '\u22B3',
        RightTriangleEqual: '\u22B5',
        RightUpDownVector: '\u294F',
        RightUpTeeVector: '\u295C',
        RightUpVectorBar: '\u2954',
        RightUpVector: '\u21BE',
        RightVectorBar: '\u2953',
        RightVector: '\u21C0',
        ring: '\u02DA',
        risingdotseq: '\u2253',
        rlarr: '\u21C4',
        rlhar: '\u21CC',
        rlm: '\u200F',
        rmoustache: '\u23B1',
        rmoust: '\u23B1',
        rnmid: '\u2AEE',
        roang: '\u27ED',
        roarr: '\u21FE',
        robrk: '\u27E7',
        ropar: '\u2986',
        ropf: '\u{1D563}',
        Ropf: '\u211D',
        roplus: '\u2A2E',
        rotimes: '\u2A35',
        RoundImplies: '\u2970',
        rpar: ')',
        rpargt: '\u2994',
        rppolint: '\u2A12',
        rrarr: '\u21C9',
        Rrightarrow: '\u21DB',
        rsaquo: '\u203A',
        rscr: '\u{1D4C7}',
        Rscr: '\u211B',
        rsh: '\u21B1',
        Rsh: '\u21B1',
        rsqb: ']',
        rsquo: '\u2019',
        rsquor: '\u2019',
        rthree: '\u22CC',
        rtimes: '\u22CA',
        rtri: '\u25B9',
        rtrie: '\u22B5',
        rtrif: '\u25B8',
        rtriltri: '\u29CE',
        RuleDelayed: '\u29F4',
        ruluhar: '\u2968',
        rx: '\u211E',
        Sacute: '\u015A',
        sacute: '\u015B',
        sbquo: '\u201A',
        scap: '\u2AB8',
        Scaron: '\u0160',
        scaron: '\u0161',
        Sc: '\u2ABC',
        sc: '\u227B',
        sccue: '\u227D',
        sce: '\u2AB0',
        scE: '\u2AB4',
        Scedil: '\u015E',
        scedil: '\u015F',
        Scirc: '\u015C',
        scirc: '\u015D',
        scnap: '\u2ABA',
        scnE: '\u2AB6',
        scnsim: '\u22E9',
        scpolint: '\u2A13',
        scsim: '\u227F',
        Scy: '\u0421',
        scy: '\u0441',
        sdotb: '\u22A1',
        sdot: '\u22C5',
        sdote: '\u2A66',
        searhk: '\u2925',
        searr: '\u2198',
        seArr: '\u21D8',
        searrow: '\u2198',
        sect: '\xA7',
        semi: ';',
        seswar: '\u2929',
        setminus: '\u2216',
        setmn: '\u2216',
        sext: '\u2736',
        Sfr: '\u{1D516}',
        sfr: '\u{1D530}',
        sfrown: '\u2322',
        sharp: '\u266F',
        SHCHcy: '\u0429',
        shchcy: '\u0449',
        SHcy: '\u0428',
        shcy: '\u0448',
        ShortDownArrow: '\u2193',
        ShortLeftArrow: '\u2190',
        shortmid: '\u2223',
        shortparallel: '\u2225',
        ShortRightArrow: '\u2192',
        ShortUpArrow: '\u2191',
        shy: '\xAD',
        Sigma: '\u03A3',
        sigma: '\u03C3',
        sigmaf: '\u03C2',
        sigmav: '\u03C2',
        sim: '\u223C',
        simdot: '\u2A6A',
        sime: '\u2243',
        simeq: '\u2243',
        simg: '\u2A9E',
        simgE: '\u2AA0',
        siml: '\u2A9D',
        simlE: '\u2A9F',
        simne: '\u2246',
        simplus: '\u2A24',
        simrarr: '\u2972',
        slarr: '\u2190',
        SmallCircle: '\u2218',
        smallsetminus: '\u2216',
        smashp: '\u2A33',
        smeparsl: '\u29E4',
        smid: '\u2223',
        smile: '\u2323',
        smt: '\u2AAA',
        smte: '\u2AAC',
        smtes: '\u2AAC\uFE00',
        SOFTcy: '\u042C',
        softcy: '\u044C',
        solbar: '\u233F',
        solb: '\u29C4',
        sol: '/',
        Sopf: '\u{1D54A}',
        sopf: '\u{1D564}',
        spades: '\u2660',
        spadesuit: '\u2660',
        spar: '\u2225',
        sqcap: '\u2293',
        sqcaps: '\u2293\uFE00',
        sqcup: '\u2294',
        sqcups: '\u2294\uFE00',
        Sqrt: '\u221A',
        sqsub: '\u228F',
        sqsube: '\u2291',
        sqsubset: '\u228F',
        sqsubseteq: '\u2291',
        sqsup: '\u2290',
        sqsupe: '\u2292',
        sqsupset: '\u2290',
        sqsupseteq: '\u2292',
        square: '\u25A1',
        Square: '\u25A1',
        SquareIntersection: '\u2293',
        SquareSubset: '\u228F',
        SquareSubsetEqual: '\u2291',
        SquareSuperset: '\u2290',
        SquareSupersetEqual: '\u2292',
        SquareUnion: '\u2294',
        squarf: '\u25AA',
        squ: '\u25A1',
        squf: '\u25AA',
        srarr: '\u2192',
        Sscr: '\u{1D4AE}',
        sscr: '\u{1D4C8}',
        ssetmn: '\u2216',
        ssmile: '\u2323',
        sstarf: '\u22C6',
        Star: '\u22C6',
        star: '\u2606',
        starf: '\u2605',
        straightepsilon: '\u03F5',
        straightphi: '\u03D5',
        strns: '\xAF',
        sub: '\u2282',
        Sub: '\u22D0',
        subdot: '\u2ABD',
        subE: '\u2AC5',
        sube: '\u2286',
        subedot: '\u2AC3',
        submult: '\u2AC1',
        subnE: '\u2ACB',
        subne: '\u228A',
        subplus: '\u2ABF',
        subrarr: '\u2979',
        subset: '\u2282',
        Subset: '\u22D0',
        subseteq: '\u2286',
        subseteqq: '\u2AC5',
        SubsetEqual: '\u2286',
        subsetneq: '\u228A',
        subsetneqq: '\u2ACB',
        subsim: '\u2AC7',
        subsub: '\u2AD5',
        subsup: '\u2AD3',
        succapprox: '\u2AB8',
        succ: '\u227B',
        succcurlyeq: '\u227D',
        Succeeds: '\u227B',
        SucceedsEqual: '\u2AB0',
        SucceedsSlantEqual: '\u227D',
        SucceedsTilde: '\u227F',
        succeq: '\u2AB0',
        succnapprox: '\u2ABA',
        succneqq: '\u2AB6',
        succnsim: '\u22E9',
        succsim: '\u227F',
        SuchThat: '\u220B',
        sum: '\u2211',
        Sum: '\u2211',
        sung: '\u266A',
        sup1: '\xB9',
        sup2: '\xB2',
        sup3: '\xB3',
        sup: '\u2283',
        Sup: '\u22D1',
        supdot: '\u2ABE',
        supdsub: '\u2AD8',
        supE: '\u2AC6',
        supe: '\u2287',
        supedot: '\u2AC4',
        Superset: '\u2283',
        SupersetEqual: '\u2287',
        suphsol: '\u27C9',
        suphsub: '\u2AD7',
        suplarr: '\u297B',
        supmult: '\u2AC2',
        supnE: '\u2ACC',
        supne: '\u228B',
        supplus: '\u2AC0',
        supset: '\u2283',
        Supset: '\u22D1',
        supseteq: '\u2287',
        supseteqq: '\u2AC6',
        supsetneq: '\u228B',
        supsetneqq: '\u2ACC',
        supsim: '\u2AC8',
        supsub: '\u2AD4',
        supsup: '\u2AD6',
        swarhk: '\u2926',
        swarr: '\u2199',
        swArr: '\u21D9',
        swarrow: '\u2199',
        swnwar: '\u292A',
        szlig: '\xDF',
        Tab: '	',
        target: '\u2316',
        Tau: '\u03A4',
        tau: '\u03C4',
        tbrk: '\u23B4',
        Tcaron: '\u0164',
        tcaron: '\u0165',
        Tcedil: '\u0162',
        tcedil: '\u0163',
        Tcy: '\u0422',
        tcy: '\u0442',
        tdot: '\u20DB',
        telrec: '\u2315',
        Tfr: '\u{1D517}',
        tfr: '\u{1D531}',
        there4: '\u2234',
        therefore: '\u2234',
        Therefore: '\u2234',
        Theta: '\u0398',
        theta: '\u03B8',
        thetasym: '\u03D1',
        thetav: '\u03D1',
        thickapprox: '\u2248',
        thicksim: '\u223C',
        ThickSpace: '\u205F\u200A',
        ThinSpace: '\u2009',
        thinsp: '\u2009',
        thkap: '\u2248',
        thksim: '\u223C',
        THORN: '\xDE',
        thorn: '\xFE',
        tilde: '\u02DC',
        Tilde: '\u223C',
        TildeEqual: '\u2243',
        TildeFullEqual: '\u2245',
        TildeTilde: '\u2248',
        timesbar: '\u2A31',
        timesb: '\u22A0',
        times: '\xD7',
        timesd: '\u2A30',
        tint: '\u222D',
        toea: '\u2928',
        topbot: '\u2336',
        topcir: '\u2AF1',
        top: '\u22A4',
        Topf: '\u{1D54B}',
        topf: '\u{1D565}',
        topfork: '\u2ADA',
        tosa: '\u2929',
        tprime: '\u2034',
        trade: '\u2122',
        TRADE: '\u2122',
        triangle: '\u25B5',
        triangledown: '\u25BF',
        triangleleft: '\u25C3',
        trianglelefteq: '\u22B4',
        triangleq: '\u225C',
        triangleright: '\u25B9',
        trianglerighteq: '\u22B5',
        tridot: '\u25EC',
        trie: '\u225C',
        triminus: '\u2A3A',
        TripleDot: '\u20DB',
        triplus: '\u2A39',
        trisb: '\u29CD',
        tritime: '\u2A3B',
        trpezium: '\u23E2',
        Tscr: '\u{1D4AF}',
        tscr: '\u{1D4C9}',
        TScy: '\u0426',
        tscy: '\u0446',
        TSHcy: '\u040B',
        tshcy: '\u045B',
        Tstrok: '\u0166',
        tstrok: '\u0167',
        twixt: '\u226C',
        twoheadleftarrow: '\u219E',
        twoheadrightarrow: '\u21A0',
        Uacute: '\xDA',
        uacute: '\xFA',
        uarr: '\u2191',
        Uarr: '\u219F',
        uArr: '\u21D1',
        Uarrocir: '\u2949',
        Ubrcy: '\u040E',
        ubrcy: '\u045E',
        Ubreve: '\u016C',
        ubreve: '\u016D',
        Ucirc: '\xDB',
        ucirc: '\xFB',
        Ucy: '\u0423',
        ucy: '\u0443',
        udarr: '\u21C5',
        Udblac: '\u0170',
        udblac: '\u0171',
        udhar: '\u296E',
        ufisht: '\u297E',
        Ufr: '\u{1D518}',
        ufr: '\u{1D532}',
        Ugrave: '\xD9',
        ugrave: '\xF9',
        uHar: '\u2963',
        uharl: '\u21BF',
        uharr: '\u21BE',
        uhblk: '\u2580',
        ulcorn: '\u231C',
        ulcorner: '\u231C',
        ulcrop: '\u230F',
        ultri: '\u25F8',
        Umacr: '\u016A',
        umacr: '\u016B',
        uml: '\xA8',
        UnderBar: '_',
        UnderBrace: '\u23DF',
        UnderBracket: '\u23B5',
        UnderParenthesis: '\u23DD',
        Union: '\u22C3',
        UnionPlus: '\u228E',
        Uogon: '\u0172',
        uogon: '\u0173',
        Uopf: '\u{1D54C}',
        uopf: '\u{1D566}',
        UpArrowBar: '\u2912',
        uparrow: '\u2191',
        UpArrow: '\u2191',
        Uparrow: '\u21D1',
        UpArrowDownArrow: '\u21C5',
        updownarrow: '\u2195',
        UpDownArrow: '\u2195',
        Updownarrow: '\u21D5',
        UpEquilibrium: '\u296E',
        upharpoonleft: '\u21BF',
        upharpoonright: '\u21BE',
        uplus: '\u228E',
        UpperLeftArrow: '\u2196',
        UpperRightArrow: '\u2197',
        upsi: '\u03C5',
        Upsi: '\u03D2',
        upsih: '\u03D2',
        Upsilon: '\u03A5',
        upsilon: '\u03C5',
        UpTeeArrow: '\u21A5',
        UpTee: '\u22A5',
        upuparrows: '\u21C8',
        urcorn: '\u231D',
        urcorner: '\u231D',
        urcrop: '\u230E',
        Uring: '\u016E',
        uring: '\u016F',
        urtri: '\u25F9',
        Uscr: '\u{1D4B0}',
        uscr: '\u{1D4CA}',
        utdot: '\u22F0',
        Utilde: '\u0168',
        utilde: '\u0169',
        utri: '\u25B5',
        utrif: '\u25B4',
        uuarr: '\u21C8',
        Uuml: '\xDC',
        uuml: '\xFC',
        uwangle: '\u29A7',
        vangrt: '\u299C',
        varepsilon: '\u03F5',
        varkappa: '\u03F0',
        varnothing: '\u2205',
        varphi: '\u03D5',
        varpi: '\u03D6',
        varpropto: '\u221D',
        varr: '\u2195',
        vArr: '\u21D5',
        varrho: '\u03F1',
        varsigma: '\u03C2',
        varsubsetneq: '\u228A\uFE00',
        varsubsetneqq: '\u2ACB\uFE00',
        varsupsetneq: '\u228B\uFE00',
        varsupsetneqq: '\u2ACC\uFE00',
        vartheta: '\u03D1',
        vartriangleleft: '\u22B2',
        vartriangleright: '\u22B3',
        vBar: '\u2AE8',
        Vbar: '\u2AEB',
        vBarv: '\u2AE9',
        Vcy: '\u0412',
        vcy: '\u0432',
        vdash: '\u22A2',
        vDash: '\u22A8',
        Vdash: '\u22A9',
        VDash: '\u22AB',
        Vdashl: '\u2AE6',
        veebar: '\u22BB',
        vee: '\u2228',
        Vee: '\u22C1',
        veeeq: '\u225A',
        vellip: '\u22EE',
        verbar: '|',
        Verbar: '\u2016',
        vert: '|',
        Vert: '\u2016',
        VerticalBar: '\u2223',
        VerticalLine: '|',
        VerticalSeparator: '\u2758',
        VerticalTilde: '\u2240',
        VeryThinSpace: '\u200A',
        Vfr: '\u{1D519}',
        vfr: '\u{1D533}',
        vltri: '\u22B2',
        vnsub: '\u2282\u20D2',
        vnsup: '\u2283\u20D2',
        Vopf: '\u{1D54D}',
        vopf: '\u{1D567}',
        vprop: '\u221D',
        vrtri: '\u22B3',
        Vscr: '\u{1D4B1}',
        vscr: '\u{1D4CB}',
        vsubnE: '\u2ACB\uFE00',
        vsubne: '\u228A\uFE00',
        vsupnE: '\u2ACC\uFE00',
        vsupne: '\u228B\uFE00',
        Vvdash: '\u22AA',
        vzigzag: '\u299A',
        Wcirc: '\u0174',
        wcirc: '\u0175',
        wedbar: '\u2A5F',
        wedge: '\u2227',
        Wedge: '\u22C0',
        wedgeq: '\u2259',
        weierp: '\u2118',
        Wfr: '\u{1D51A}',
        wfr: '\u{1D534}',
        Wopf: '\u{1D54E}',
        wopf: '\u{1D568}',
        wp: '\u2118',
        wr: '\u2240',
        wreath: '\u2240',
        Wscr: '\u{1D4B2}',
        wscr: '\u{1D4CC}',
        xcap: '\u22C2',
        xcirc: '\u25EF',
        xcup: '\u22C3',
        xdtri: '\u25BD',
        Xfr: '\u{1D51B}',
        xfr: '\u{1D535}',
        xharr: '\u27F7',
        xhArr: '\u27FA',
        Xi: '\u039E',
        xi: '\u03BE',
        xlarr: '\u27F5',
        xlArr: '\u27F8',
        xmap: '\u27FC',
        xnis: '\u22FB',
        xodot: '\u2A00',
        Xopf: '\u{1D54F}',
        xopf: '\u{1D569}',
        xoplus: '\u2A01',
        xotime: '\u2A02',
        xrarr: '\u27F6',
        xrArr: '\u27F9',
        Xscr: '\u{1D4B3}',
        xscr: '\u{1D4CD}',
        xsqcup: '\u2A06',
        xuplus: '\u2A04',
        xutri: '\u25B3',
        xvee: '\u22C1',
        xwedge: '\u22C0',
        Yacute: '\xDD',
        yacute: '\xFD',
        YAcy: '\u042F',
        yacy: '\u044F',
        Ycirc: '\u0176',
        ycirc: '\u0177',
        Ycy: '\u042B',
        ycy: '\u044B',
        yen: '\xA5',
        Yfr: '\u{1D51C}',
        yfr: '\u{1D536}',
        YIcy: '\u0407',
        yicy: '\u0457',
        Yopf: '\u{1D550}',
        yopf: '\u{1D56A}',
        Yscr: '\u{1D4B4}',
        yscr: '\u{1D4CE}',
        YUcy: '\u042E',
        yucy: '\u044E',
        yuml: '\xFF',
        Yuml: '\u0178',
        Zacute: '\u0179',
        zacute: '\u017A',
        Zcaron: '\u017D',
        zcaron: '\u017E',
        Zcy: '\u0417',
        zcy: '\u0437',
        Zdot: '\u017B',
        zdot: '\u017C',
        zeetrf: '\u2128',
        ZeroWidthSpace: '\u200B',
        Zeta: '\u0396',
        zeta: '\u03B6',
        zfr: '\u{1D537}',
        Zfr: '\u2128',
        ZHcy: '\u0416',
        zhcy: '\u0436',
        zigrarr: '\u21DD',
        zopf: '\u{1D56B}',
        Zopf: '\u2124',
        Zscr: '\u{1D4B5}',
        zscr: '\u{1D4CF}',
        zwj: '\u200D',
        zwnj: '\u200C',
      };
    },
  });
  const Y_ = Ke({
    '../../node_modules/entities/lib/maps/legacy.json': function (e, t) {
      t.exports = {
        Aacute: '\xC1',
        aacute: '\xE1',
        Acirc: '\xC2',
        acirc: '\xE2',
        acute: '\xB4',
        AElig: '\xC6',
        aelig: '\xE6',
        Agrave: '\xC0',
        agrave: '\xE0',
        amp: '&',
        AMP: '&',
        Aring: '\xC5',
        aring: '\xE5',
        Atilde: '\xC3',
        atilde: '\xE3',
        Auml: '\xC4',
        auml: '\xE4',
        brvbar: '\xA6',
        Ccedil: '\xC7',
        ccedil: '\xE7',
        cedil: '\xB8',
        cent: '\xA2',
        copy: '\xA9',
        COPY: '\xA9',
        curren: '\xA4',
        deg: '\xB0',
        divide: '\xF7',
        Eacute: '\xC9',
        eacute: '\xE9',
        Ecirc: '\xCA',
        ecirc: '\xEA',
        Egrave: '\xC8',
        egrave: '\xE8',
        ETH: '\xD0',
        eth: '\xF0',
        Euml: '\xCB',
        euml: '\xEB',
        frac12: '\xBD',
        frac14: '\xBC',
        frac34: '\xBE',
        gt: '>',
        GT: '>',
        Iacute: '\xCD',
        iacute: '\xED',
        Icirc: '\xCE',
        icirc: '\xEE',
        iexcl: '\xA1',
        Igrave: '\xCC',
        igrave: '\xEC',
        iquest: '\xBF',
        Iuml: '\xCF',
        iuml: '\xEF',
        laquo: '\xAB',
        lt: '<',
        LT: '<',
        macr: '\xAF',
        micro: '\xB5',
        middot: '\xB7',
        nbsp: '\xA0',
        not: '\xAC',
        Ntilde: '\xD1',
        ntilde: '\xF1',
        Oacute: '\xD3',
        oacute: '\xF3',
        Ocirc: '\xD4',
        ocirc: '\xF4',
        Ograve: '\xD2',
        ograve: '\xF2',
        ordf: '\xAA',
        ordm: '\xBA',
        Oslash: '\xD8',
        oslash: '\xF8',
        Otilde: '\xD5',
        otilde: '\xF5',
        Ouml: '\xD6',
        ouml: '\xF6',
        para: '\xB6',
        plusmn: '\xB1',
        pound: '\xA3',
        quot: '"',
        QUOT: '"',
        raquo: '\xBB',
        reg: '\xAE',
        REG: '\xAE',
        sect: '\xA7',
        shy: '\xAD',
        sup1: '\xB9',
        sup2: '\xB2',
        sup3: '\xB3',
        szlig: '\xDF',
        THORN: '\xDE',
        thorn: '\xFE',
        times: '\xD7',
        Uacute: '\xDA',
        uacute: '\xFA',
        Ucirc: '\xDB',
        ucirc: '\xFB',
        Ugrave: '\xD9',
        ugrave: '\xF9',
        uml: '\xA8',
        Uuml: '\xDC',
        uuml: '\xFC',
        Yacute: '\xDD',
        yacute: '\xFD',
        yen: '\xA5',
        yuml: '\xFF',
      };
    },
  });
  const fm = Ke({
    '../../node_modules/entities/lib/maps/xml.json': function (e, t) {
      t.exports = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
    },
  });
  const X_ = Ke({
    '../../node_modules/entities/lib/maps/decode.json': function (e, t) {
      t.exports = {
        0: 65533,
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376,
      };
    },
  });
  const J_ = Ke({
    '../../node_modules/entities/lib/decode_codepoint.js': function (e) {
      const t =
        (e && e.__importDefault) ||
        function (o) {
          return o && o.__esModule ? o : { default: o };
        };
      Object.defineProperty(e, '__esModule', { value: !0 });
      const r = t(X_());
      const n =
        String.fromCodePoint ||
        function (o) {
          let i = '';
          return (
            o > 65535 &&
              ((o -= 65536),
              (i += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
              (o = 56320 | (o & 1023))),
            (i += String.fromCharCode(o)),
            i
          );
        };
      function a(o) {
        return (o >= 55296 && o <= 57343) || o > 1114111
          ? '\uFFFD'
          : (o in r.default && (o = r.default[o]), n(o));
      }
      e.default = a;
    },
  });
  const cm = Ke({
    '../../node_modules/entities/lib/decode.js': function (e) {
      const t =
        (e && e.__importDefault) ||
        function (y) {
          return y && y.__esModule ? y : { default: y };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0);
      const r = t(pm());
      const n = t(Y_());
      const a = t(fm());
      const o = t(J_());
      const i = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
      (e.decodeXML = u(a.default)), (e.decodeHTMLStrict = u(r.default));
      function u(y) {
        const b = p(y);
        return function (m) {
          return String(m).replace(i, b);
        };
      }
      const s = function (y, b) {
        return y < b ? 1 : -1;
      };
      e.decodeHTML = (function () {
        for (
          var y = Object.keys(n.default).sort(s),
            b = Object.keys(r.default).sort(s),
            m = 0,
            g = 0;
          m < b.length;
          m++
        )
          y[g] === b[m] ? ((b[m] += ';?'), g++) : (b[m] += ';');
        const A = new RegExp(
          `&(?:${b.join('|')}|#[xX][\\da-fA-F]+;?|#\\d+;?)`,
          'g'
        );
        const E = p(r.default);
        function x(F) {
          return F.substr(-1) !== ';' && (F += ';'), E(F);
        }
        return function (F) {
          return String(F).replace(A, x);
        };
      })();
      function p(y) {
        return function (b) {
          if (b.charAt(1) === '#') {
            const m = b.charAt(2);
            return m === 'X' || m === 'x'
              ? o.default(parseInt(b.substr(3), 16))
              : o.default(parseInt(b.substr(2), 10));
          }
          return y[b.slice(1, -1)] || b;
        };
      }
    },
  });
  const dm = Ke({
    '../../node_modules/entities/lib/encode.js': function (e) {
      const t =
        (e && e.__importDefault) ||
        function (B) {
          return B && B.__esModule ? B : { default: B };
        };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.escapeUTF8 =
          e.escape =
          e.encodeNonAsciiHTML =
          e.encodeHTML =
          e.encodeXML =
            void 0);
      const r = t(fm());
      const n = s(r.default);
      const a = p(n);
      e.encodeXML = F(n);
      const o = t(pm());
      const i = s(o.default);
      const u = p(i);
      (e.encodeHTML = g(i, u)), (e.encodeNonAsciiHTML = F(i));
      function s(B) {
        return Object.keys(B)
          .sort()
          .reduce((I, L) => ((I[B[L]] = `&${L};`), I), {});
      }
      function p(B) {
        for (var I = [], L = [], w = 0, k = Object.keys(B); w < k.length; w++) {
          const N = k[w];
          N.length === 1 ? I.push(`\\${N}`) : L.push(N);
        }
        I.sort();
        for (let H = 0; H < I.length - 1; H++) {
          for (
            var V = H;
            V < I.length - 1 &&
            I[V].charCodeAt(1) + 1 === I[V + 1].charCodeAt(1);

          )
            V += 1;
          const U = 1 + V - H;
          U < 3 || I.splice(H, U, `${I[H]}-${I[V]}`);
        }
        return L.unshift(`[${I.join('')}]`), new RegExp(L.join('|'), 'g');
      }
      const y =
        /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
      const b =
        String.prototype.codePointAt != null
          ? function (B) {
              return B.codePointAt(0);
            }
          : function (B) {
              return (
                (B.charCodeAt(0) - 55296) * 1024 +
                B.charCodeAt(1) -
                56320 +
                65536
              );
            };
      function m(B) {
        return `&#x${(B.length > 1 ? b(B) : B.charCodeAt(0))
          .toString(16)
          .toUpperCase()};`;
      }
      function g(B, I) {
        return function (L) {
          return L.replace(I, (w) => B[w]).replace(y, m);
        };
      }
      const A = new RegExp(`${a.source}|${y.source}`, 'g');
      function E(B) {
        return B.replace(A, m);
      }
      e.escape = E;
      function x(B) {
        return B.replace(a, m);
      }
      e.escapeUTF8 = x;
      function F(B) {
        return function (I) {
          return I.replace(A, (L) => B[L] || m(L));
        };
      }
    },
  });
  const Q_ = Ke({
    '../../node_modules/entities/lib/index.js': function (e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.decodeXMLStrict =
          e.decodeHTML5Strict =
          e.decodeHTML4Strict =
          e.decodeHTML5 =
          e.decodeHTML4 =
          e.decodeHTMLStrict =
          e.decodeHTML =
          e.decodeXML =
          e.encodeHTML5 =
          e.encodeHTML4 =
          e.escapeUTF8 =
          e.escape =
          e.encodeNonAsciiHTML =
          e.encodeHTML =
          e.encodeXML =
          e.encode =
          e.decodeStrict =
          e.decode =
            void 0);
      const t = cm();
      const r = dm();
      function n(s, p) {
        return (!p || p <= 0 ? t.decodeXML : t.decodeHTML)(s);
      }
      e.decode = n;
      function a(s, p) {
        return (!p || p <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s);
      }
      e.decodeStrict = a;
      function o(s, p) {
        return (!p || p <= 0 ? r.encodeXML : r.encodeHTML)(s);
      }
      e.encode = o;
      const i = dm();
      Object.defineProperty(e, 'encodeXML', {
        enumerable: !0,
        get() {
          return i.encodeXML;
        },
      }),
        Object.defineProperty(e, 'encodeHTML', {
          enumerable: !0,
          get() {
            return i.encodeHTML;
          },
        }),
        Object.defineProperty(e, 'encodeNonAsciiHTML', {
          enumerable: !0,
          get() {
            return i.encodeNonAsciiHTML;
          },
        }),
        Object.defineProperty(e, 'escape', {
          enumerable: !0,
          get() {
            return i.escape;
          },
        }),
        Object.defineProperty(e, 'escapeUTF8', {
          enumerable: !0,
          get() {
            return i.escapeUTF8;
          },
        }),
        Object.defineProperty(e, 'encodeHTML4', {
          enumerable: !0,
          get() {
            return i.encodeHTML;
          },
        }),
        Object.defineProperty(e, 'encodeHTML5', {
          enumerable: !0,
          get() {
            return i.encodeHTML;
          },
        });
      const u = cm();
      Object.defineProperty(e, 'decodeXML', {
        enumerable: !0,
        get() {
          return u.decodeXML;
        },
      }),
        Object.defineProperty(e, 'decodeHTML', {
          enumerable: !0,
          get() {
            return u.decodeHTML;
          },
        }),
        Object.defineProperty(e, 'decodeHTMLStrict', {
          enumerable: !0,
          get() {
            return u.decodeHTMLStrict;
          },
        }),
        Object.defineProperty(e, 'decodeHTML4', {
          enumerable: !0,
          get() {
            return u.decodeHTML;
          },
        }),
        Object.defineProperty(e, 'decodeHTML5', {
          enumerable: !0,
          get() {
            return u.decodeHTML;
          },
        }),
        Object.defineProperty(e, 'decodeHTML4Strict', {
          enumerable: !0,
          get() {
            return u.decodeHTMLStrict;
          },
        }),
        Object.defineProperty(e, 'decodeHTML5Strict', {
          enumerable: !0,
          get() {
            return u.decodeHTMLStrict;
          },
        }),
        Object.defineProperty(e, 'decodeXMLStrict', {
          enumerable: !0,
          get() {
            return u.decodeXML;
          },
        });
    },
  });
  const Z_ = Ke({
    '../../node_modules/ansi-to-html/lib/ansi_to_html.js': function (e, t) {
      function r(R, _) {
        if (!(R instanceof _))
          throw new TypeError('Cannot call a class as a function');
      }
      function n(R, _) {
        for (let q = 0; q < _.length; q++) {
          const W = _[q];
          (W.enumerable = W.enumerable || !1),
            (W.configurable = !0),
            'value' in W && (W.writable = !0),
            Object.defineProperty(R, W.key, W);
        }
      }
      function a(R, _, q) {
        return _ && n(R.prototype, _), q && n(R, q), R;
      }
      function o(R) {
        if (typeof Symbol > 'u' || R[Symbol.iterator] == null) {
          if (Array.isArray(R) || (R = i(R))) {
            let _ = 0;
            const q = function () {};
            return {
              s: q,
              n() {
                return _ >= R.length
                  ? { done: !0 }
                  : { done: !1, value: R[_++] };
              },
              e(se) {
                throw se;
              },
              f: q,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        let W;
        let Y = !0;
        let K = !1;
        let Z;
        return {
          s() {
            W = R[Symbol.iterator]();
          },
          n() {
            const se = W.next();
            return (Y = se.done), se;
          },
          e(se) {
            (K = !0), (Z = se);
          },
          f() {
            try {
              !Y && W.return != null && W.return();
            } finally {
              if (K) throw Z;
            }
          },
        };
      }
      function i(R, _) {
        if (R) {
          if (typeof R === 'string') return u(R, _);
          let q = Object.prototype.toString.call(R).slice(8, -1);
          if (
            (q === 'Object' && R.constructor && (q = R.constructor.name),
            q === 'Map' || q === 'Set')
          )
            return Array.from(q);
          if (
            q === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(q)
          )
            return u(R, _);
        }
      }
      function u(R, _) {
        (_ == null || _ > R.length) && (_ = R.length);
        for (var q = 0, W = new Array(_); q < _; q++) W[q] = R[q];
        return W;
      }
      const s = Q_();
      const p = {
        fg: '#FFF',
        bg: '#000',
        newline: !1,
        escapeXML: !1,
        stream: !1,
        colors: y(),
      };
      function y() {
        const R = {
          0: '#000',
          1: '#A00',
          2: '#0A0',
          3: '#A50',
          4: '#00A',
          5: '#A0A',
          6: '#0AA',
          7: '#AAA',
          8: '#555',
          9: '#F55',
          10: '#5F5',
          11: '#FF5',
          12: '#55F',
          13: '#F5F',
          14: '#5FF',
          15: '#FFF',
        };
        return (
          B(0, 5).forEach((_) => {
            B(0, 5).forEach((q) => {
              B(0, 5).forEach((W) => b(_, q, W, R));
            });
          }),
          B(0, 23).forEach((_) => {
            const q = _ + 232;
            const W = m(_ * 10 + 8);
            R[q] = `#${W}${W}${W}`;
          }),
          R
        );
      }
      function b(R, _, q, W) {
        const Y = 16 + R * 36 + _ * 6 + q;
        const K = R > 0 ? R * 40 + 55 : 0;
        const Z = _ > 0 ? _ * 40 + 55 : 0;
        const se = q > 0 ? q * 40 + 55 : 0;
        W[Y] = g([K, Z, se]);
      }
      function m(R) {
        for (var _ = R.toString(16); _.length < 2; ) _ = `0${_}`;
        return _;
      }
      function g(R) {
        const _ = [];
        const q = o(R);
        let W;
        try {
          for (q.s(); !(W = q.n()).done; ) {
            const Y = W.value;
            _.push(m(Y));
          }
        } catch (K) {
          q.e(K);
        } finally {
          q.f();
        }
        return `#${_.join('')}`;
      }
      function A(R, _, q, W) {
        let Y;
        return (
          _ === 'text'
            ? (Y = w(q, W))
            : _ === 'display'
            ? (Y = x(R, q, W))
            : _ === 'xterm256'
            ? (Y = H(R, W.colors[q]))
            : _ === 'rgb' && (Y = E(R, q)),
          Y
        );
      }
      function E(R, _) {
        _ = _.substring(2).slice(0, -1);
        const q = +_.substr(0, 2);
        const W = _.substring(5).split(';');
        const Y = W.map((K) => `0${Number(K).toString(16)}`.substr(-2)).join(
          ''
        );
        return N(R, (q === 38 ? 'color:#' : 'background-color:#') + Y);
      }
      function x(R, _, q) {
        _ = parseInt(_, 10);
        const W = {
          '-1': function () {
            return '<br/>';
          },
          0() {
            return R.length && F(R);
          },
          1() {
            return k(R, 'b');
          },
          3() {
            return k(R, 'i');
          },
          4() {
            return k(R, 'u');
          },
          8() {
            return N(R, 'display:none');
          },
          9() {
            return k(R, 'strike');
          },
          22() {
            return N(
              R,
              'font-weight:normal;text-decoration:none;font-style:normal'
            );
          },
          23() {
            return U(R, 'i');
          },
          24() {
            return U(R, 'u');
          },
          39() {
            return H(R, q.fg);
          },
          49() {
            return V(R, q.bg);
          },
          53() {
            return N(R, 'text-decoration:overline');
          },
        };
        let Y;
        return (
          W[_]
            ? (Y = W[_]())
            : _ > 4 && _ < 7
            ? (Y = k(R, 'blink'))
            : _ > 29 && _ < 38
            ? (Y = H(R, q.colors[_ - 30]))
            : _ > 39 && _ < 48
            ? (Y = V(R, q.colors[_ - 40]))
            : _ > 89 && _ < 98
            ? (Y = H(R, q.colors[8 + (_ - 90)]))
            : _ > 99 && _ < 108 && (Y = V(R, q.colors[8 + (_ - 100)])),
          Y
        );
      }
      function F(R) {
        const _ = R.slice(0);
        return (
          (R.length = 0),
          _.reverse()
            .map((q) => `</${q}>`)
            .join('')
        );
      }
      function B(R, _) {
        for (var q = [], W = R; W <= _; W++) q.push(W);
        return q;
      }
      function I(R) {
        return function (_) {
          return (R === null || _.category !== R) && R !== 'all';
        };
      }
      function L(R) {
        R = parseInt(R, 10);
        let _ = null;
        return (
          R === 0
            ? (_ = 'all')
            : R === 1
            ? (_ = 'bold')
            : R > 2 && R < 5
            ? (_ = 'underline')
            : R > 4 && R < 7
            ? (_ = 'blink')
            : R === 8
            ? (_ = 'hide')
            : R === 9
            ? (_ = 'strike')
            : (R > 29 && R < 38) || R === 39 || (R > 89 && R < 98)
            ? (_ = 'foreground-color')
            : ((R > 39 && R < 48) || R === 49 || (R > 99 && R < 108)) &&
              (_ = 'background-color'),
          _
        );
      }
      function w(R, _) {
        return _.escapeXML ? s.encodeXML(R) : R;
      }
      function k(R, _, q) {
        return (
          q || (q = ''),
          R.push(_),
          '<'.concat(_).concat(q ? ' style="'.concat(q, '"') : '', '>')
        );
      }
      function N(R, _) {
        return k(R, 'span', _);
      }
      function H(R, _) {
        return k(R, 'span', `color:${_}`);
      }
      function V(R, _) {
        return k(R, 'span', `background-color:${_}`);
      }
      function U(R, _) {
        let q;
        if ((R.slice(-1)[0] === _ && (q = R.pop()), q)) return `</${_}>`;
      }
      function Q(R, _, q) {
        let W = !1;
        const Y = 3;
        function K() {
          return '';
        }
        function Z(ie, Ae) {
          return q('xterm256', Ae), '';
        }
        function se(ie) {
          return _.newline ? q('display', -1) : q('text', ie), '';
        }
        function ke(ie, Ae) {
          (W = !0),
            Ae.trim().length === 0 && (Ae = '0'),
            (Ae = Ae.trimRight(';').split(';'));
          const Xr = o(Ae);
          let hu;
          try {
            for (Xr.s(); !(hu = Xr.n()).done; ) {
              const $y = hu.value;
              q('display', $y);
            }
          } catch (Uy) {
            Xr.e(Uy);
          } finally {
            Xr.f();
          }
          return '';
        }
        function Ne(ie) {
          return q('text', ie), '';
        }
        function J(ie) {
          return q('rgb', ie), '';
        }
        const Ue = [
          { pattern: /^\x08+/, sub: K },
          { pattern: /^\x1b\[[012]?K/, sub: K },
          { pattern: /^\x1b\[\(B/, sub: K },
          { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: J },
          { pattern: /^\x1b\[38;5;(\d+)m/, sub: Z },
          { pattern: /^\n/, sub: se },
          { pattern: /^\r+\n/, sub: se },
          { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: ke },
          { pattern: /^\x1b\[\d?J/, sub: K },
          { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: K },
          { pattern: /^\x1b\[?[\d;]{0,3}/, sub: K },
          { pattern: /^(([^\x1b\x08\r\n])+)/, sub: Ne },
        ];
        function T(ie, Ae) {
          (Ae > Y && W) || ((W = !1), (R = R.replace(ie.pattern, ie.sub)));
        }
        const P = [];
        const M = R;
        let O = M.length;
        e: for (; O > 0; ) {
          for (let $ = 0, z = 0, pe = Ue.length; z < pe; $ = ++z) {
            const oe = Ue[$];
            if ((T(oe, $), R.length !== O)) {
              O = R.length;
              continue e;
            }
          }
          if (R.length === O) break;
          P.push(0), (O = R.length);
        }
        return P;
      }
      function ee(R, _, q) {
        return (
          _ !== 'text' &&
            ((R = R.filter(I(L(q)))),
            R.push({ token: _, data: q, category: L(q) })),
          R
        );
      }
      const X = (function () {
        function R(_) {
          r(this, R),
            (_ = _ || {}),
            _.colors && (_.colors = { ...p.colors, ..._.colors }),
            (this.options = { ...p, ..._ }),
            (this.stack = []),
            (this.stickyStack = []);
        }
        return (
          a(R, [
            {
              key: 'toHtml',
              value(_) {
                const q = this;
                _ = typeof _ === 'string' ? [_] : _;
                const W = this.stack;
                const Y = this.options;
                const K = [];
                return (
                  this.stickyStack.forEach((Z) => {
                    const se = A(W, Z.token, Z.data, Y);
                    se && K.push(se);
                  }),
                  Q(_.join(''), Y, (Z, se) => {
                    const ke = A(W, Z, se, Y);
                    ke && K.push(ke),
                      Y.stream && (q.stickyStack = ee(q.stickyStack, Z, se));
                  }),
                  W.length && K.push(F(W)),
                  K.join('')
                );
              },
            },
          ]),
          R
        );
      })();
      t.exports = X;
    },
  });
  const RQ = new Error('prepareAborted');
  const { AbortController: PQ } = globalThis;
  const { fetch: IQ } = ue;
  const { history: kQ, document: NQ } = ue;
  const e8 = t0(Z_());
  const { document: MQ } = ue;
  var t8 = ((e) => (
    (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR'),
    e
  ))(t8 || {});
  const LQ = new e8.default({ escapeXML: !0 });
  const { document: jQ } = ue;
  const { FEATURES: JQ } = ue;
  l();
  c();
  d();
  const gy = fe(In(), 1);
  l();
  c();
  d();
  const s8 = fe(In(), 1);
  const l8 = fe(Cm(), 1);
  var c8 = ((e) => (
    (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown'),
    e
  ))(c8 || {});
  const Zn = (e) => {
    if (!e) return '';
    if (typeof e === 'string') return e;
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
  };
  const xm = 'storybook/docs';
  const _ee = `${xm}/panel`;
  const d8 = `${xm}/snippet-rendered`;
  var zr = ((e) => (
    (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
  ))(zr || {});
  l();
  c();
  d();
  l();
  c();
  d();
  const p8 = Object.create;
  const Fm = Object.defineProperty;
  const f8 = Object.getOwnPropertyDescriptor;
  const Sm = Object.getOwnPropertyNames;
  const h8 = Object.getPrototypeOf;
  const m8 = Object.prototype.hasOwnProperty;
  const Le = (e, t) =>
    function () {
      return t || (0, e[Sm(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    };
  const g8 = (e, t, r, n) => {
    if ((t && typeof t === 'object') || typeof t === 'function')
      for (const a of Sm(t))
        !m8.call(e, a) &&
          a !== r &&
          Fm(e, a, {
            get: () => t[a],
            enumerable: !(n = f8(t, a)) || n.enumerable,
          });
    return e;
  };
  const ea = (e, t, r) => (
    (r = e != null ? p8(h8(e)) : {}),
    g8(
      t || !e || !e.__esModule
        ? Fm(r, 'default', { value: e, enumerable: !0 })
        : r,
      e
    )
  );
  const y8 = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type',
  ];
  const E8 = ['detail'];
  function wm(e) {
    const t = y8
      .filter((r) => e[r] !== void 0)
      .reduce((r, n) => ({ ...r, [n]: e[n] }), {});
    return (
      e instanceof CustomEvent &&
        E8.filter((r) => e[r] !== void 0).forEach((r) => {
          t[r] = e[r];
        }),
      t
    );
  }
  const Um = fe(Sn(), 1);
  const Pm = Le({
    'node_modules/has-symbols/shams.js': function (e, t) {
      t.exports = function () {
        if (
          typeof Symbol !== 'function' ||
          typeof Object.getOwnPropertySymbols !== 'function'
        )
          return !1;
        if (typeof Symbol.iterator === 'symbol') return !0;
        const n = {};
        let a = Symbol('test');
        const o = Object(a);
        if (
          typeof a === 'string' ||
          Object.prototype.toString.call(a) !== '[object Symbol]' ||
          Object.prototype.toString.call(o) !== '[object Symbol]'
        )
          return !1;
        const i = 42;
        n[a] = i;
        for (a in n) return !1;
        if (
          (typeof Object.keys === 'function' && Object.keys(n).length !== 0) ||
          (typeof Object.getOwnPropertyNames === 'function' &&
            Object.getOwnPropertyNames(n).length !== 0)
        )
          return !1;
        const u = Object.getOwnPropertySymbols(n);
        if (
          u.length !== 1 ||
          u[0] !== a ||
          !Object.prototype.propertyIsEnumerable.call(n, a)
        )
          return !1;
        if (typeof Object.getOwnPropertyDescriptor === 'function') {
          const s = Object.getOwnPropertyDescriptor(n, a);
          if (s.value !== i || s.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  });
  const Im = Le({
    'node_modules/has-symbols/index.js': function (e, t) {
      const r = typeof Symbol < 'u' && Symbol;
      const n = Pm();
      t.exports = function () {
        return typeof r !== 'function' ||
          typeof Symbol !== 'function' ||
          typeof r('foo') !== 'symbol' ||
          typeof Symbol('bar') !== 'symbol'
          ? !1
          : n();
      };
    },
  });
  const b8 = Le({
    'node_modules/function-bind/implementation.js': function (e, t) {
      const r = 'Function.prototype.bind called on incompatible ';
      const n = Array.prototype.slice;
      const a = Object.prototype.toString;
      const o = '[object Function]';
      t.exports = function (u) {
        const s = this;
        if (typeof s !== 'function' || a.call(s) !== o)
          throw new TypeError(r + s);
        for (
          var p = n.call(arguments, 1),
            y,
            b = function () {
              if (this instanceof y) {
                const x = s.apply(this, p.concat(n.call(arguments)));
                return Object(x) === x ? x : this;
              }
              return s.apply(u, p.concat(n.call(arguments)));
            },
            m = Math.max(0, s.length - p.length),
            g = [],
            A = 0;
          A < m;
          A++
        )
          g.push(`$${A}`);
        if (
          ((y = Function(
            'binder',
            `return function (${g.join(
              ','
            )}){ return binder.apply(this,arguments); }`
          )(b)),
          s.prototype)
        ) {
          const E = function () {};
          (E.prototype = s.prototype),
            (y.prototype = new E()),
            (E.prototype = null);
        }
        return y;
      };
    },
  });
  const Ri = Le({
    'node_modules/function-bind/index.js': function (e, t) {
      const r = b8();
      t.exports = Function.prototype.bind || r;
    },
  });
  const A8 = Le({
    'node_modules/has/src/index.js': function (e, t) {
      const r = Ri();
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    },
  });
  const km = Le({
    'node_modules/get-intrinsic/index.js': function (e, t) {
      let r;
      const n = SyntaxError;
      const a = Function;
      const o = TypeError;
      const i = function (ee) {
        try {
          return a(`"use strict"; return (${ee}).constructor;`)();
        } catch {}
      };
      let u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, '');
        } catch {
          u = null;
        }
      const s = function () {
        throw new o();
      };
      const p = u
        ? (function () {
            try {
              return arguments.callee, s;
            } catch {
              try {
                return u(arguments, 'callee').get;
              } catch {
                return s;
              }
            }
          })()
        : s;
      const y = Im()();
      const b =
        Object.getPrototypeOf ||
        function (ee) {
          return ee.__proto__;
        };
      const m = {};
      const g = typeof Uint8Array > 'u' ? r : b(Uint8Array);
      const A = {
        '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
        '%ArrayIteratorPrototype%': y ? b([][Symbol.iterator]()) : r,
        '%AsyncFromSyncIteratorPrototype%': r,
        '%AsyncFunction%': m,
        '%AsyncGenerator%': m,
        '%AsyncGeneratorFunction%': m,
        '%AsyncIteratorPrototype%': m,
        '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
        '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView > 'u' ? r : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
        '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
        '%FinalizationRegistry%':
          typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
        '%Function%': a,
        '%GeneratorFunction%': m,
        '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
        '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
        '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': y ? b(b([][Symbol.iterator]())) : r,
        '%JSON%': typeof JSON === 'object' ? JSON : r,
        '%Map%': typeof Map > 'u' ? r : Map,
        '%MapIteratorPrototype%':
          typeof Map > 'u' || !y ? r : b(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise > 'u' ? r : Promise,
        '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set > 'u' ? r : Set,
        '%SetIteratorPrototype%':
          typeof Set > 'u' || !y ? r : b(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%':
          typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': y ? b(''[Symbol.iterator]()) : r,
        '%Symbol%': y ? Symbol : r,
        '%SyntaxError%': n,
        '%ThrowTypeError%': p,
        '%TypedArray%': g,
        '%TypeError%': o,
        '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
        '%Uint8ClampedArray%':
          typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
        '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
        '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
        '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
      };
      const E = function ee(X) {
        let R;
        if (X === '%AsyncFunction%') R = i('async function () {}');
        else if (X === '%GeneratorFunction%') R = i('function* () {}');
        else if (X === '%AsyncGeneratorFunction%')
          R = i('async function* () {}');
        else if (X === '%AsyncGenerator%') {
          const _ = ee('%AsyncGeneratorFunction%');
          _ && (R = _.prototype);
        } else if (X === '%AsyncIteratorPrototype%') {
          const q = ee('%AsyncGenerator%');
          q && (R = b(q.prototype));
        }
        return (A[X] = R), R;
      };
      const x = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': [
          'AsyncGeneratorFunction',
          'prototype',
          'prototype',
        ],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype'],
      };
      const F = Ri();
      const B = A8();
      const I = F.call(Function.call, Array.prototype.concat);
      const L = F.call(Function.apply, Array.prototype.splice);
      const w = F.call(Function.call, String.prototype.replace);
      const k = F.call(Function.call, String.prototype.slice);
      const N = F.call(Function.call, RegExp.prototype.exec);
      const H =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      const V = /\\(\\)?/g;
      const U = function (X) {
        const R = k(X, 0, 1);
        const _ = k(X, -1);
        if (R === '%' && _ !== '%')
          throw new n('invalid intrinsic syntax, expected closing `%`');
        if (_ === '%' && R !== '%')
          throw new n('invalid intrinsic syntax, expected opening `%`');
        const q = [];
        return (
          w(X, H, (W, Y, K, Z) => {
            q[q.length] = K ? w(Z, V, '$1') : Y || W;
          }),
          q
        );
      };
      const Q = function (X, R) {
        let _ = X;
        let q;
        if ((B(x, _) && ((q = x[_]), (_ = `%${q[0]}%`)), B(A, _))) {
          let W = A[_];
          if ((W === m && (W = E(_)), typeof W > 'u' && !R))
            throw new o(
              `intrinsic ${X} exists, but is not available. Please file an issue!`
            );
          return { alias: q, name: _, value: W };
        }
        throw new n(`intrinsic ${X} does not exist!`);
      };
      t.exports = function (X, R) {
        if (typeof X !== 'string' || X.length === 0)
          throw new o('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof R !== 'boolean')
          throw new o('"allowMissing" argument must be a boolean');
        if (N(/^%?[^%]*%?$/, X) === null)
          throw new n(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
          );
        const _ = U(X);
        let q = _.length > 0 ? _[0] : '';
        const W = Q(`%${q}%`, R);
        let Y = W.name;
        let K = W.value;
        let Z = !1;
        const se = W.alias;
        se && ((q = se[0]), L(_, I([0, 1], se)));
        for (let ke = 1, Ne = !0; ke < _.length; ke += 1) {
          const J = _[ke];
          const Ue = k(J, 0, 1);
          const T = k(J, -1);
          if (
            (Ue === '"' ||
              Ue === "'" ||
              Ue === '`' ||
              T === '"' ||
              T === "'" ||
              T === '`') &&
            Ue !== T
          )
            throw new n('property names with quotes must have matching quotes');
          if (
            ((J === 'constructor' || !Ne) && (Z = !0),
            (q += `.${J}`),
            (Y = `%${q}%`),
            B(A, Y))
          )
            K = A[Y];
          else if (K != null) {
            if (!(J in K)) {
              if (!R)
                throw new o(
                  `base intrinsic for ${X} exists, but the property is not available.`
                );
              return;
            }
            if (u && ke + 1 >= _.length) {
              const P = u(K, J);
              (Ne = !!P),
                Ne && 'get' in P && !('originalValue' in P.get)
                  ? (K = P.get)
                  : (K = K[J]);
            } else (Ne = B(K, J)), (K = K[J]);
            Ne && !Z && (A[Y] = K);
          }
        }
        return K;
      };
    },
  });
  const v8 = Le({
    'node_modules/call-bind/index.js': function (e, t) {
      const r = Ri();
      const n = km();
      const a = n('%Function.prototype.apply%');
      const o = n('%Function.prototype.call%');
      const i = n('%Reflect.apply%', !0) || r.call(o, a);
      const u = n('%Object.getOwnPropertyDescriptor%', !0);
      let s = n('%Object.defineProperty%', !0);
      const p = n('%Math.max%');
      if (s)
        try {
          s({}, 'a', { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (m) {
        const g = i(r, o, arguments);
        if (u && s) {
          const A = u(g, 'length');
          A.configurable &&
            s(g, 'length', {
              value: 1 + p(0, m.length - (arguments.length - 1)),
            });
        }
        return g;
      };
      const y = function () {
        return i(r, a, arguments);
      };
      s ? s(t.exports, 'apply', { value: y }) : (t.exports.apply = y);
    },
  });
  const D8 = Le({
    'node_modules/call-bind/callBound.js': function (e, t) {
      const r = km();
      const n = v8();
      const a = n(r('String.prototype.indexOf'));
      t.exports = function (i, u) {
        const s = r(i, !!u);
        return typeof s === 'function' && a(i, '.prototype.') > -1 ? n(s) : s;
      };
    },
  });
  const C8 = Le({
    'node_modules/has-tostringtag/shams.js': function (e, t) {
      const r = Pm();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  });
  const x8 = Le({
    'node_modules/is-regex/index.js': function (e, t) {
      const r = D8();
      const n = C8()();
      let a;
      let o;
      let i;
      let u;
      n &&
        ((a = r('Object.prototype.hasOwnProperty')),
        (o = r('RegExp.prototype.exec')),
        (i = {}),
        (s = function () {
          throw i;
        }),
        (u = { toString: s, valueOf: s }),
        typeof Symbol.toPrimitive === 'symbol' && (u[Symbol.toPrimitive] = s));
      let s;
      const p = r('Object.prototype.toString');
      const y = Object.getOwnPropertyDescriptor;
      const b = '[object RegExp]';
      t.exports = n
        ? function (g) {
            if (!g || typeof g !== 'object') return !1;
            const A = y(g, 'lastIndex');
            const E = A && a(A, 'value');
            if (!E) return !1;
            try {
              o(g, u);
            } catch (x) {
              return x === i;
            }
          }
        : function (g) {
            return !g || (typeof g !== 'object' && typeof g !== 'function')
              ? !1
              : p(g) === b;
          };
    },
  });
  const F8 = Le({
    'node_modules/is-function/index.js': function (e, t) {
      t.exports = n;
      const r = Object.prototype.toString;
      function n(a) {
        if (!a) return !1;
        const o = r.call(a);
        return (
          o === '[object Function]' ||
          (typeof a === 'function' && o !== '[object RegExp]') ||
          (typeof window < 'u' &&
            (a === window.setTimeout ||
              a === window.alert ||
              a === window.confirm ||
              a === window.prompt))
        );
      }
    },
  });
  const S8 = Le({
    'node_modules/is-symbol/index.js': function (e, t) {
      const r = Object.prototype.toString;
      const n = Im()();
      n
        ? ((a = Symbol.prototype.toString),
          (o = /^Symbol\(.*\)$/),
          (i = function (s) {
            return typeof s.valueOf() !== 'symbol' ? !1 : o.test(a.call(s));
          }),
          (t.exports = function (s) {
            if (typeof s === 'symbol') return !0;
            if (r.call(s) !== '[object Symbol]') return !1;
            try {
              return i(s);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (s) {
            return !1;
          });
      let a;
      let o;
      let i;
    },
  });
  const w8 = ea(x8());
  const B8 = ea(F8());
  const T8 = ea(S8());
  function _8(e) {
    return e != null && typeof e === 'object' && Array.isArray(e) === !1;
  }
  const O8 =
    typeof window === 'object' && window && window.Object === Object && window;
  const R8 = O8;
  const P8 = typeof self === 'object' && self && self.Object === Object && self;
  const I8 = R8 || P8 || Function('return this')();
  const Pi = I8;
  const k8 = Pi.Symbol;
  const nr = k8;
  const Nm = Object.prototype;
  const N8 = Nm.hasOwnProperty;
  const M8 = Nm.toString;
  const Wr = nr ? nr.toStringTag : void 0;
  function L8(e) {
    const t = N8.call(e, Wr);
    const r = e[Wr];
    try {
      e[Wr] = void 0;
      var n = !0;
    } catch {}
    const a = M8.call(e);
    return n && (t ? (e[Wr] = r) : delete e[Wr]), a;
  }
  const j8 = L8;
  const q8 = Object.prototype;
  const $8 = q8.toString;
  function U8(e) {
    return $8.call(e);
  }
  const H8 = U8;
  const z8 = '[object Null]';
  const W8 = '[object Undefined]';
  const Bm = nr ? nr.toStringTag : void 0;
  function G8(e) {
    return e == null
      ? e === void 0
        ? W8
        : z8
      : Bm && Bm in Object(e)
      ? j8(e)
      : H8(e);
  }
  const Mm = G8;
  function V8(e) {
    return e != null && typeof e === 'object';
  }
  const K8 = V8;
  const Y8 = '[object Symbol]';
  function X8(e) {
    return typeof e === 'symbol' || (K8(e) && Mm(e) == Y8);
  }
  const Ii = X8;
  function J8(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e);
    return a;
  }
  const Q8 = J8;
  const Z8 = Array.isArray;
  const ki = Z8;
  const eO = 1 / 0;
  const Tm = nr ? nr.prototype : void 0;
  const _m = Tm ? Tm.toString : void 0;
  function Lm(e) {
    if (typeof e === 'string') return e;
    if (ki(e)) return `${Q8(e, Lm)}`;
    if (Ii(e)) return _m ? _m.call(e) : '';
    const t = `${e}`;
    return t == '0' && 1 / e == -eO ? '-0' : t;
  }
  const tO = Lm;
  function rO(e) {
    const t = typeof e;
    return e != null && (t == 'object' || t == 'function');
  }
  const jm = rO;
  const nO = '[object AsyncFunction]';
  const aO = '[object Function]';
  const oO = '[object GeneratorFunction]';
  const iO = '[object Proxy]';
  function uO(e) {
    if (!jm(e)) return !1;
    const t = Mm(e);
    return t == aO || t == oO || t == nO || t == iO;
  }
  const sO = uO;
  const lO = Pi['__core-js_shared__'];
  const Oi = lO;
  const Om = (function () {
    const e = /[^.]+$/.exec((Oi && Oi.keys && Oi.keys.IE_PROTO) || '');
    return e ? `Symbol(src)_1.${e}` : '';
  })();
  function cO(e) {
    return !!Om && Om in e;
  }
  const dO = cO;
  const pO = Function.prototype;
  const fO = pO.toString;
  function hO(e) {
    if (e != null) {
      try {
        return fO.call(e);
      } catch {}
      try {
        return `${e}`;
      } catch {}
    }
    return '';
  }
  const mO = hO;
  const gO = /[\\^$.*+?()[\]{}|]/g;
  const yO = /^\[object .+?Constructor\]$/;
  const EO = Function.prototype;
  const bO = Object.prototype;
  const AO = EO.toString;
  const vO = bO.hasOwnProperty;
  const DO = RegExp(
    `^${AO.call(vO)
      .replace(gO, '\\$&')
      .replace(
        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
        '$1.*?'
      )}$`
  );
  function CO(e) {
    if (!jm(e) || dO(e)) return !1;
    const t = sO(e) ? DO : yO;
    return t.test(mO(e));
  }
  const xO = CO;
  function FO(e, t) {
    return e?.[t];
  }
  const SO = FO;
  function wO(e, t) {
    const r = SO(e, t);
    return xO(r) ? r : void 0;
  }
  const qm = wO;
  function BO(e, t) {
    return e === t || (e !== e && t !== t);
  }
  const TO = BO;
  const _O = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  const OO = /^\w*$/;
  function RO(e, t) {
    if (ki(e)) return !1;
    const r = typeof e;
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      Ii(e)
      ? !0
      : OO.test(e) || !_O.test(e) || (t != null && e in Object(t));
  }
  const PO = RO;
  const IO = qm(Object, 'create');
  const Gr = IO;
  function kO() {
    (this.__data__ = Gr ? Gr(null) : {}), (this.size = 0);
  }
  const NO = kO;
  function MO(e) {
    const t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  const LO = MO;
  const jO = '__lodash_hash_undefined__';
  const qO = Object.prototype;
  const $O = qO.hasOwnProperty;
  function UO(e) {
    const t = this.__data__;
    if (Gr) {
      const r = t[e];
      return r === jO ? void 0 : r;
    }
    return $O.call(t, e) ? t[e] : void 0;
  }
  const HO = UO;
  const zO = Object.prototype;
  const WO = zO.hasOwnProperty;
  function GO(e) {
    const t = this.__data__;
    return Gr ? t[e] !== void 0 : WO.call(t, e);
  }
  const VO = GO;
  const KO = '__lodash_hash_undefined__';
  function YO(e, t) {
    const r = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = Gr && t === void 0 ? KO : t),
      this
    );
  }
  const XO = YO;
  function ar(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      const n = e[t];
      this.set(n[0], n[1]);
    }
  }
  ar.prototype.clear = NO;
  ar.prototype.delete = LO;
  ar.prototype.get = HO;
  ar.prototype.has = VO;
  ar.prototype.set = XO;
  const Rm = ar;
  function JO() {
    (this.__data__ = []), (this.size = 0);
  }
  const QO = JO;
  function ZO(e, t) {
    for (let r = e.length; r--; ) if (TO(e[r][0], t)) return r;
    return -1;
  }
  const ra = ZO;
  const e6 = Array.prototype;
  const t6 = e6.splice;
  function r6(e) {
    const t = this.__data__;
    const r = ra(t, e);
    if (r < 0) return !1;
    const n = t.length - 1;
    return r == n ? t.pop() : t6.call(t, r, 1), --this.size, !0;
  }
  const n6 = r6;
  function a6(e) {
    const t = this.__data__;
    const r = ra(t, e);
    return r < 0 ? void 0 : t[r][1];
  }
  const o6 = a6;
  function i6(e) {
    return ra(this.__data__, e) > -1;
  }
  const u6 = i6;
  function s6(e, t) {
    const r = this.__data__;
    const n = ra(r, e);
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
  }
  const l6 = s6;
  function or(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      const n = e[t];
      this.set(n[0], n[1]);
    }
  }
  or.prototype.clear = QO;
  or.prototype.delete = n6;
  or.prototype.get = o6;
  or.prototype.has = u6;
  or.prototype.set = l6;
  const c6 = or;
  const d6 = qm(Pi, 'Map');
  const p6 = d6;
  function f6() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Rm(),
        map: new (p6 || c6)(),
        string: new Rm(),
      });
  }
  const h6 = f6;
  function m6(e) {
    const t = typeof e;
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null;
  }
  const g6 = m6;
  function y6(e, t) {
    const r = e.__data__;
    return g6(t) ? r[typeof t === 'string' ? 'string' : 'hash'] : r.map;
  }
  const na = y6;
  function E6(e) {
    const t = na(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  const b6 = E6;
  function A6(e) {
    return na(this, e).get(e);
  }
  const v6 = A6;
  function D6(e) {
    return na(this, e).has(e);
  }
  const C6 = D6;
  function x6(e, t) {
    const r = na(this, e);
    const n = r.size;
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
  }
  const F6 = x6;
  function ir(e) {
    let t = -1;
    const r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
      const n = e[t];
      this.set(n[0], n[1]);
    }
  }
  ir.prototype.clear = h6;
  ir.prototype.delete = b6;
  ir.prototype.get = v6;
  ir.prototype.has = C6;
  ir.prototype.set = F6;
  const $m = ir;
  const S6 = 'Expected a function';
  function Ni(e, t) {
    if (typeof e !== 'function' || (t != null && typeof t !== 'function'))
      throw new TypeError(S6);
    const r = function () {
      const n = arguments;
      const a = t ? t.apply(this, n) : n[0];
      const o = r.cache;
      if (o.has(a)) return o.get(a);
      const i = e.apply(this, n);
      return (r.cache = o.set(a, i) || o), i;
    };
    return (r.cache = new (Ni.Cache || $m)()), r;
  }
  Ni.Cache = $m;
  const w6 = Ni;
  const B6 = 500;
  function T6(e) {
    const t = w6(e, (n) => (r.size === B6 && r.clear(), n));
    var r = t.cache;
    return t;
  }
  const _6 = T6;
  const O6 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  const R6 = /\\(\\)?/g;
  const P6 = _6((e) => {
    const t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(O6, (r, n, a, o) => {
        t.push(a ? o.replace(R6, '$1') : n || r);
      }),
      t
    );
  });
  const I6 = P6;
  function k6(e) {
    return e == null ? '' : tO(e);
  }
  const N6 = k6;
  function M6(e, t) {
    return ki(e) ? e : PO(e, t) ? [e] : I6(N6(e));
  }
  const L6 = M6;
  const j6 = 1 / 0;
  function q6(e) {
    if (typeof e === 'string' || Ii(e)) return e;
    const t = `${e}`;
    return t == '0' && 1 / e == -j6 ? '-0' : t;
  }
  const $6 = q6;
  function U6(e, t) {
    t = L6(t, e);
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[$6(t[r++])];
    return r && r == n ? e : void 0;
  }
  const H6 = U6;
  function z6(e, t, r) {
    const n = e == null ? void 0 : H6(e, t);
    return n === void 0 ? r : n;
  }
  const W6 = z6;
  const ta = _8;
  const G6 = (e) => {
    let t = null;
    let r = !1;
    let n = !1;
    let a = !1;
    let o = '';
    if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
      for (let i = 0; i < e.length; i += 1)
        !t && !r && !n && !a
          ? e[i] === '"' || e[i] === "'" || e[i] === '`'
            ? (t = e[i])
            : e[i] === '/' && e[i + 1] === '*'
            ? (r = !0)
            : e[i] === '/' && e[i + 1] === '/'
            ? (n = !0)
            : e[i] === '/' && e[i + 1] !== '/' && (a = !0)
          : (t &&
              ((e[i] === t && e[i - 1] !== '\\') ||
                (e[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            a &&
              ((e[i] === '/' && e[i - 1] !== '\\') ||
                e[i] ===
                  `
`) &&
              (a = !1),
            r && e[i - 1] === '/' && e[i - 2] === '*' && (r = !1),
            n &&
              e[i] ===
                `
` &&
              (n = !1)),
          !r && !n && (o += e[i]);
    else o = e;
    return o;
  };
  const V6 = (0, Um.default)(1e4)((e) => G6(e).replace(/\n\s*/g, '').trim());
  const K6 = function (t, r) {
    const n = r.slice(0, r.indexOf('{'));
    const a = r.slice(r.indexOf('{'));
    if (n.includes('=>') || n.includes('function')) return r;
    let o = n;
    return (o = o.replace(t, 'function')), o + a;
  };
  const Y6 = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
  const X6 = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/);
  function Hm(e) {
    if (!ta(e)) return e;
    let t = e;
    let r = !1;
    return (
      typeof Event < 'u' && e instanceof Event && ((t = wm(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a]);
        } catch {
          r = !0;
        }
        return n;
      }, {})),
      r ? t : e
    );
  }
  const J6 = function (t) {
    let r;
    let n;
    let a;
    let o;
    return function (u, s) {
      try {
        if (u === '')
          return (
            (o = []), (r = new Map([[s, '[]']])), (n = new Map()), (a = []), s
          );
        const p = n.get(this) || this;
        for (; a.length && p !== a[0]; ) a.shift(), o.pop();
        if (typeof s === 'boolean') return s;
        if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0;
        if (s === null) return null;
        if (typeof s === 'number')
          return s === -1 / 0
            ? '_-Infinity_'
            : s === 1 / 0
            ? '_Infinity_'
            : Number.isNaN(s)
            ? '_NaN_'
            : s;
        if (typeof s === 'bigint') return `_bigint_${s.toString()}`;
        if (typeof s === 'string')
          return Y6.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s;
        if ((0, w8.default)(s))
          return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0;
        if ((0, B8.default)(s)) {
          if (!t.allowFunction) return;
          const { name: b } = s;
          const m = s.toString();
          return m.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? `_function_${b}|${(() => {}).toString()}`
            : `_function_${b}|${V6(K6(u, m))}`;
        }
        if ((0, T8.default)(s)) {
          if (!t.allowSymbol) return;
          const b = Symbol.keyFor(s);
          return b !== void 0
            ? `_gsymbol_${b}`
            : `_symbol_${s.toString().slice(7, -1)}`;
        }
        if (a.length >= t.maxDepth)
          return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]';
        if (s === this) return `_duplicate_${JSON.stringify(o)}`;
        if (s instanceof Error && t.allowError)
          return {
            __isConvertedError__: !0,
            errorProperties: {
              ...(s.cause ? { cause: s.cause } : {}),
              ...s,
              name: s.name,
              message: s.message,
              stack: s.stack,
              '_constructor-name_': s.constructor.name,
            },
          };
        if (
          s.constructor &&
          s.constructor.name &&
          s.constructor.name !== 'Object' &&
          !Array.isArray(s) &&
          !t.allowClass
        )
          return;
        const y = r.get(s);
        if (!y) {
          const b = Array.isArray(s) ? s : Hm(s);
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            t.allowClass
          )
            try {
              Object.assign(b, { '_constructor-name_': s.constructor.name });
            } catch {}
          return (
            o.push(u),
            a.unshift(b),
            r.set(s, JSON.stringify(o)),
            s !== b && n.set(s, b),
            b
          );
        }
        return `_duplicate_${y}`;
      } catch {}
    };
  };
  const Q6 = function reviver(options) {
    const refs = [];
    let root;
    return function revive(key, value) {
      if (
        (key === '' &&
          ((root = value),
          refs.forEach(({ target: e, container: t, replacement: r }) => {
            const n = X6(r) ? JSON.parse(r) : r.split('.');
            n.length === 0 ? (t[e] = root) : (t[e] = W6(root, n));
          })),
        key === '_constructor-name_')
      )
        return value;
      if (ta(value) && value.__isConvertedError__) {
        const { message: e, ...t } = value.errorProperties;
        const r = new Error(e);
        return Object.assign(r, t), r;
      }
      if (ta(value) && value['_constructor-name_'] && options.allowFunction) {
        const e = value['_constructor-name_'];
        if (e !== 'Object') {
          const t = new Function(
            `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`
          )();
          Object.setPrototypeOf(value, new t());
        }
        return delete value['_constructor-name_'], value;
      }
      if (
        typeof value === 'string' &&
        value.startsWith('_function_') &&
        options.allowFunction
      ) {
        const [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [];
        const sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');
        if (!options.lazyEval) return eval(`(${sourceSanitized})`);
        const result = (...args) => {
          const f = eval(`(${sourceSanitized})`);
          return f(...args);
        };
        return (
          Object.defineProperty(result, 'toString', {
            value: () => sourceSanitized,
          }),
          Object.defineProperty(result, 'name', { value: name }),
          result
        );
      }
      if (
        typeof value === 'string' &&
        value.startsWith('_regexp_') &&
        options.allowRegExp
      ) {
        const [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
        return new RegExp(t, e);
      }
      return typeof value === 'string' &&
        value.startsWith('_date_') &&
        options.allowDate
        ? new Date(value.replace('_date_', ''))
        : typeof value === 'string' && value.startsWith('_duplicate_')
        ? (refs.push({
            target: key,
            container: this,
            replacement: value.replace(/^_duplicate_/, ''),
          }),
          null)
        : typeof value === 'string' &&
          value.startsWith('_symbol_') &&
          options.allowSymbol
        ? Symbol(value.replace('_symbol_', ''))
        : typeof value === 'string' &&
          value.startsWith('_gsymbol_') &&
          options.allowSymbol
        ? Symbol.for(value.replace('_gsymbol_', ''))
        : typeof value === 'string' && value === '_-Infinity_'
        ? -1 / 0
        : typeof value === 'string' && value === '_Infinity_'
        ? 1 / 0
        : typeof value === 'string' && value === '_NaN_'
        ? NaN
        : typeof value === 'string' &&
          value.startsWith('_bigint_') &&
          typeof BigInt === 'function'
        ? BigInt(value.replace('_bigint_', ''))
        : value;
    };
  };
  const zm = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowError: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0,
  };
  const Wm = (e, t = {}) => {
    const r = { ...zm, ...t };
    return JSON.stringify(Hm(e), J6(r), t.space);
  };
  const Z6 = () => {
    const e = new Map();
    return function t(r) {
      ta(r) &&
        Object.entries(r).forEach(([n, a]) => {
          a === '_undefined_'
            ? (r[n] = void 0)
            : e.get(a) || (e.set(a, !0), t(a));
        }),
        Array.isArray(r) &&
          r.forEach((n, a) => {
            n === '_undefined_'
              ? (e.set(n, !0), (r[a] = void 0))
              : e.get(n) || (e.set(n, !0), t(n));
          });
    };
  };
  const qee = (e, t = {}) => {
    const r = { ...zm, ...t };
    const n = JSON.parse(e, Q6(r));
    return Z6()(n), n;
  };
  const yy = fe(ag(), 1);
  const m4 = j.div(Pt, ({ theme: e }) => ({
    backgroundColor:
      e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
    borderRadius: e.appBorderRadius,
    border: `1px dashed ${e.appBorderColor}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '25px 0 40px',
    color: de(0.3, e.color.defaultText),
    fontSize: e.typography.size.s2,
  }));
  const Ey = (e) =>
    h.createElement(m4, { ...e, className: 'docblock-emptyblock sb-unstyled' });
  const g4 = j(Qr)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    lineHeight: '19px',
    margin: '25px 0 40px',
    borderRadius: e.appBorderRadius,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    'pre.prismjs': { padding: 20, background: 'inherit' },
  }));
  const y4 = j.div(({ theme: e }) => ({
    background: e.background.content,
    borderRadius: e.appBorderRadius,
    border: `1px solid ${e.appBorderColor}`,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    margin: '25px 0 40px',
    padding: '20px 20px 20px 22px',
  }));
  const ca = j.div(({ theme: e }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    height: 17,
    marginTop: 1,
    width: '60%',
    [`&:first-child${Bu}`]: { margin: 0 },
  }));
  const E4 = () =>
    h.createElement(
      y4,
      null,
      h.createElement(ca, null),
      h.createElement(ca, { style: { width: '80%' } }),
      h.createElement(ca, { style: { width: '30%' } }),
      h.createElement(ca, { style: { width: '80%' } })
    );
  const au = ({
    isLoading: e,
    error: t,
    language: r,
    code: n,
    dark: a,
    format: o,
    ...i
  }) => {
    if (e) return h.createElement(E4, null);
    if (t) return h.createElement(Ey, null, t);
    const u = h.createElement(
      g4,
      {
        bordered: !0,
        copyable: !0,
        format: o,
        language: r,
        className: 'docblock-source sb-unstyled',
        ...i,
      },
      n
    );
    if (typeof a > 'u') return u;
    const s = a ? Ua.dark : Ua.light;
    return h.createElement(Su, { theme: wu(s) }, u);
  };
  au.defaultProps = { format: !1 };
  const Ee = (e) =>
    `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`;
  const ou = 600;
  const Bre = j.h1(Pt, ({ theme: e }) => ({
    color: e.color.defaultText,
    fontSize: e.typography.size.m3,
    fontWeight: e.typography.weight.bold,
    lineHeight: '32px',
    [`@media (min-width: ${ou}px)`]: {
      fontSize: e.typography.size.l1,
      lineHeight: '36px',
      marginBottom: '16px',
    },
  }));
  const Tre = j.h2(Pt, ({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s3,
    lineHeight: '20px',
    borderBottom: 'none',
    marginBottom: 15,
    [`@media (min-width: ${ou}px)`]: {
      fontSize: e.typography.size.m1,
      lineHeight: '28px',
      marginBottom: 24,
    },
    color: de(0.25, e.color.defaultText),
  }));
  const _re = j.div(({ theme: e }) => {
    const t = {
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s3,
      margin: 0,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      WebkitOverflowScrolling: 'touch',
    };
    const r = {
      margin: '20px 0 8px',
      padding: 0,
      cursor: 'text',
      position: 'relative',
      color: e.color.defaultText,
      '&:first-of-type': { marginTop: 0, paddingTop: 0 },
      '&:hover a.anchor': { textDecoration: 'none' },
      '& code': { fontSize: 'inherit' },
    };
    const n = {
      lineHeight: 1,
      margin: '0 2px',
      padding: '3px 5px',
      whiteSpace: 'nowrap',
      borderRadius: 3,
      fontSize: e.typography.size.s2 - 1,
      border:
        e.base === 'light'
          ? `1px solid ${e.color.mediumlight}`
          : `1px solid ${e.color.darker}`,
      color:
        e.base === 'light'
          ? de(0.1, e.color.defaultText)
          : de(0.3, e.color.defaultText),
      backgroundColor: e.base === 'light' ? e.color.lighter : e.color.border,
    };
    return {
      maxWidth: 1e3,
      width: '100%',
      [Ee('a')]: {
        ...t,
        fontSize: 'inherit',
        lineHeight: '24px',
        color: e.color.secondary,
        textDecoration: 'none',
        '&.absent': { color: '#cc0000' },
        '&.anchor': {
          display: 'block',
          paddingLeft: 30,
          marginLeft: -30,
          cursor: 'pointer',
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
        },
      },
      [Ee('blockquote')]: {
        ...t,
        margin: '16px 0',
        borderLeft: `4px solid ${e.color.medium}`,
        padding: '0 15px',
        color: e.color.dark,
        '& > :first-of-type': { marginTop: 0 },
        '& > :last-child': { marginBottom: 0 },
      },
      [Ee('div')]: t,
      [Ee('dl')]: {
        ...t,
        margin: '16px 0',
        padding: 0,
        '& dt': {
          fontSize: '14px',
          fontWeight: 'bold',
          fontStyle: 'italic',
          padding: 0,
          margin: '16px 0 4px',
        },
        '& dt:first-of-type': { padding: 0 },
        '& dt > :first-of-type': { marginTop: 0 },
        '& dt > :last-child': { marginBottom: 0 },
        '& dd': { margin: '0 0 16px', padding: '0 15px' },
        '& dd > :first-of-type': { marginTop: 0 },
        '& dd > :last-child': { marginBottom: 0 },
      },
      [Ee('h1')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.l1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [Ee('h2')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m2}px`,
        paddingBottom: 4,
        borderBottom: `1px solid ${e.appBorderColor}`,
      },
      [Ee('h3')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.m1}px`,
        fontWeight: e.typography.weight.bold,
      },
      [Ee('h4')]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` },
      [Ee('h5')]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` },
      [Ee('h6')]: {
        ...t,
        ...r,
        fontSize: `${e.typography.size.s2}px`,
        color: e.color.dark,
      },
      [Ee('hr')]: {
        border: '0 none',
        borderTop: `1px solid ${e.appBorderColor}`,
        height: 4,
        padding: 0,
      },
      [Ee('img')]: { maxWidth: '100%' },
      [Ee('li')]: {
        ...t,
        fontSize: e.typography.size.s2,
        color: e.color.defaultText,
        lineHeight: '24px',
        '& + li': { marginTop: '.25em' },
        '& ul, & ol': { marginTop: '.25em', marginBottom: 0 },
        '& code': n,
      },
      [Ee('ol')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 },
      },
      [Ee('p')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        color: e.color.defaultText,
        '& code': n,
      },
      [Ee('pre')]: {
        ...t,
        fontFamily: e.typography.fonts.mono,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        lineHeight: '18px',
        padding: '11px 1rem',
        whiteSpace: 'pre-wrap',
        color: 'inherit',
        borderRadius: 3,
        margin: '1rem 0',
        '&:not(.prismjs)': {
          background: 'transparent',
          border: 'none',
          borderRadius: 0,
          padding: 0,
          margin: 0,
        },
        '& pre, &.prismjs': {
          padding: 15,
          margin: 0,
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          fontSize: '13px',
          lineHeight: '19px',
          code: { color: 'inherit', fontSize: 'inherit' },
        },
        '& code': { whiteSpace: 'pre' },
        '& code, & tt': { border: 'none' },
      },
      [Ee('span')]: {
        ...t,
        '&.frame': {
          display: 'block',
          overflow: 'hidden',
          '& > span': {
            border: `1px solid ${e.color.medium}`,
            display: 'block',
            float: 'left',
            overflow: 'hidden',
            margin: '13px 0 0',
            padding: 7,
            width: 'auto',
          },
          '& span img': { display: 'block', float: 'left' },
          '& span span': {
            clear: 'both',
            color: e.color.darkest,
            display: 'block',
            padding: '5px 0 0',
          },
        },
        '&.align-center': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'center',
          },
          '& span img': { margin: '0 auto', textAlign: 'center' },
        },
        '&.align-right': {
          display: 'block',
          overflow: 'hidden',
          clear: 'both',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px 0 0',
            textAlign: 'right',
          },
          '& span img': { margin: 0, textAlign: 'right' },
        },
        '&.float-left': {
          display: 'block',
          marginRight: 13,
          overflow: 'hidden',
          float: 'left',
          '& span': { margin: '13px 0 0' },
        },
        '&.float-right': {
          display: 'block',
          marginLeft: 13,
          overflow: 'hidden',
          float: 'right',
          '& > span': {
            display: 'block',
            overflow: 'hidden',
            margin: '13px auto 0',
            textAlign: 'right',
          },
        },
      },
      [Ee('table')]: {
        ...t,
        margin: '16px 0',
        fontSize: e.typography.size.s2,
        lineHeight: '24px',
        padding: 0,
        borderCollapse: 'collapse',
        '& tr': {
          borderTop: `1px solid ${e.appBorderColor}`,
          backgroundColor: e.appContentBg,
          margin: 0,
          padding: 0,
        },
        '& tr:nth-of-type(2n)': {
          backgroundColor: e.base === 'dark' ? e.color.darker : e.color.lighter,
        },
        '& tr th': {
          fontWeight: 'bold',
          color: e.color.defaultText,
          border: `1px solid ${e.appBorderColor}`,
          margin: 0,
          padding: '6px 13px',
        },
        '& tr td': {
          border: `1px solid ${e.appBorderColor}`,
          color: e.color.defaultText,
          margin: 0,
          padding: '6px 13px',
        },
        '& tr th :first-of-type, & tr td :first-of-type': { marginTop: 0 },
        '& tr th :last-child, & tr td :last-child': { marginBottom: 0 },
      },
      [Ee('ul')]: {
        ...t,
        margin: '16px 0',
        paddingLeft: 30,
        '& :first-of-type': { marginTop: 0 },
        '& :last-child': { marginBottom: 0 },
        listStyle: 'disc',
      },
    };
  });
  const Ore = j.div(({ theme: e }) => ({
    background: e.background.content,
    display: 'flex',
    justifyContent: 'center',
    padding: '4rem 20px',
    minHeight: '100vh',
    boxSizing: 'border-box',
    gap: '3rem',
    [`@media (min-width: ${ou}px)`]: {},
  }));
  const ha = (e) => ({
    borderRadius: e.appBorderRadius,
    background: e.background.content,
    boxShadow:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
        : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
    border: `1px solid ${e.appBorderColor}`,
  });
  const b4 = ({ zoom: e, resetZoom: t }) =>
    h.createElement(
      h.Fragment,
      null,
      h.createElement(
        yt,
        {
          key: 'zoomin',
          onClick: (r) => {
            r.preventDefault(), e(0.8);
          },
          title: 'Zoom in',
        },
        h.createElement(Oe, { icon: 'zoom' })
      ),
      h.createElement(
        yt,
        {
          key: 'zoomout',
          onClick: (r) => {
            r.preventDefault(), e(1.25);
          },
          title: 'Zoom out',
        },
        h.createElement(Oe, { icon: 'zoomout' })
      ),
      h.createElement(
        yt,
        {
          key: 'zoomreset',
          onClick: (r) => {
            r.preventDefault(), t();
          },
          title: 'Reset zoom',
        },
        h.createElement(Oe, { icon: 'zoomreset' })
      )
    );
  const A4 = j(wa)({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    transition: 'transform .2s linear',
  });
  const v4 = ({
    isLoading: e,
    storyId: t,
    baseUrl: r,
    zoom: n,
    resetZoom: a,
    ...o
  }) =>
    h.createElement(
      A4,
      { ...o },
      h.createElement(
        gu,
        { key: 'left' },
        e
          ? [1, 2, 3].map((i) => h.createElement(_a, { key: i }))
          : h.createElement(b4, { zoom: n, resetZoom: a })
      )
    );
  const by = pr({ scale: 1 });
  const { window: D4 } = ue;
  const C4 = class extends et {
    constructor() {
      super(...arguments), (this.iframe = null);
    }

    componentDidMount() {
      const { id: e } = this.props;
      this.iframe = D4.document.getElementById(e);
    }

    shouldComponentUpdate(e) {
      const { scale: t } = e;
      return (
        t !== this.props.scale &&
          this.setIframeBodyStyle({
            width: `${t * 100}%`,
            height: `${t * 100}%`,
            transform: `scale(${1 / t})`,
            transformOrigin: 'top left',
          }),
        !1
      );
    }

    setIframeBodyStyle(e) {
      return Object.assign(this.iframe.contentDocument.body.style, e);
    }

    render() {
      const {
        id: e,
        title: t,
        src: r,
        allowFullScreen: n,
        scale: a,
        ...o
      } = this.props;
      return h.createElement('iframe', {
        id: e,
        title: t,
        src: r,
        ...(n ? { allow: 'fullscreen' } : {}),
        loading: 'lazy',
        ...o,
      });
    }
  };
  const { PREVIEW_URL: x4 } = ue;
  const F4 = x4 || 'iframe.html';
  const Ji = ({ story: e, primary: t }) =>
    `story--${e.id}${t ? '--primary' : ''}`;
  const S4 = (e) => {
    const t = Se();
    const [r, n] = ne(!0);
    const [a, o] = ne();
    const {
      story: i,
      height: u,
      autoplay: s,
      forceInitialArgs: p,
      renderStoryToElement: y,
    } = e;
    return (
      he(() => {
        if (!(i && t.current)) return () => {};
        const b = t.current;
        const m = y(
          i,
          b,
          {
            showMain: () => {},
            showError: ({ title: g, description: A }) =>
              o(new Error(`${g} - ${A}`)),
            showException: (g) => o(g),
          },
          { autoplay: s, forceInitialArgs: p }
        );
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => m());
          }
        );
      }, [s, y, i]),
      a
        ? h.createElement('pre', null, h.createElement(Sa, { error: a }))
        : h.createElement(
            h.Fragment,
            null,
            u
              ? h.createElement(
                  'style',
                  null,
                  `#${Ji(
                    e
                  )} { min-height: ${u}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && h.createElement(iu, null),
            h.createElement('div', {
              ref: t,
              id: `${Ji(e)}-inner`,
              'data-name': i.name,
            })
          )
    );
  };
  const w4 = ({ story: e, height: t = '500px' }) =>
    h.createElement(
      'div',
      { style: { width: '100%', height: t } },
      h.createElement(by.Consumer, null, ({ scale: r }) =>
        h.createElement(C4, {
          key: 'iframe',
          id: `iframe--${e.id}`,
          title: e.name,
          src: ja(F4, e.id, { viewMode: 'story' }),
          allowFullScreen: !0,
          scale: r,
          style: { width: '100%', height: '100%', border: '0 none' },
        })
      )
    );
  const B4 = (e) => {
    const { inline: t } = e;
    return h.createElement(
      'div',
      {
        id: Ji(e),
        className: 'sb-story sb-unstyled',
        'data-story-block': 'true',
      },
      t ? h.createElement(S4, { ...e }) : h.createElement(w4, { ...e })
    );
  };
  var iu = () => h.createElement(Oa, null);
  const T4 = j.div(
    ({ isColumn: e, columns: t, layout: r }) => ({
      display: e || !t ? 'block' : 'flex',
      position: 'relative',
      flexWrap: 'wrap',
      overflow: 'auto',
      flexDirection: e ? 'column' : 'row',
      '& .innerZoomElementWrapper > *': e
        ? {
            width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'block',
          }
        : {
            maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
            display: 'inline-block',
          },
    }),
    ({ layout: e = 'padded' }) =>
      e === 'centered' || e === 'padded'
        ? {
            padding: '30px 20px',
            margin: -10,
            '& .innerZoomElementWrapper > *': {
              width: 'auto',
              border: '10px solid transparent!important',
            },
          }
        : {},
    ({ layout: e = 'padded' }) =>
      e === 'centered'
        ? {
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }
        : {},
    ({ columns: e }) =>
      e && e > 1
        ? {
            '.innerZoomElementWrapper > *': {
              minWidth: `calc(100% / ${e} - 20px)`,
            },
          }
        : {}
  );
  const Qg = j(au)(({ theme: e }) => ({
    margin: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: e.appBorderRadius,
    borderBottomRightRadius: e.appBorderRadius,
    border: 'none',
    background:
      e.base === 'light'
        ? 'rgba(0, 0, 0, 0.85)'
        : ze(0.05, e.background.content),
    color: e.color.lightest,
    button: {
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : ze(0.05, e.background.content),
    },
  }));
  const _4 = j.div(
    ({ theme: e, withSource: t, isExpanded: r }) => ({
      position: 'relative',
      overflow: 'hidden',
      margin: '25px 0 40px',
      ...ha(e),
      borderBottomLeftRadius: t && r && 0,
      borderBottomRightRadius: t && r && 0,
      borderBottomWidth: r && 0,
      'h3 + &': { marginTop: '16px' },
    }),
    ({ withToolbar: e }) => e && { paddingTop: 40 }
  );
  const O4 = (e, t, r) => {
    switch (!0) {
      case !!(e && e.error):
        return {
          source: null,
          actionItem: {
            title: 'No code available',
            className: 'docblock-code-toggle docblock-code-toggle--disabled',
            disabled: !0,
            onClick: () => r(!1),
          },
        };
      case t:
        return {
          source: h.createElement(Qg, { ...e, dark: !0 }),
          actionItem: {
            title: 'Hide code',
            className: 'docblock-code-toggle docblock-code-toggle--expanded',
            onClick: () => r(!1),
          },
        };
      default:
        return {
          source: h.createElement(Qg, { ...e, dark: !0 }),
          actionItem: {
            title: 'Show code',
            className: 'docblock-code-toggle',
            onClick: () => r(!0),
          },
        };
    }
  };
  function R4(e) {
    if (Jr.count(e) === 1) {
      const t = e;
      if (t.props) return t.props.id;
    }
    return null;
  }
  const P4 = j(v4)({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 40,
  });
  const I4 = j.div({ overflow: 'hidden', position: 'relative' });
  const Qi = ({
    isLoading: e,
    isColumn: t,
    columns: r,
    children: n,
    withSource: a,
    withToolbar: o = !1,
    isExpanded: i = !1,
    additionalActions: u,
    className: s,
    layout: p = 'padded',
    ...y
  }) => {
    const [b, m] = ne(i);
    const { source: g, actionItem: A } = O4(a, b, m);
    const [E, x] = ne(1);
    const F = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']);
    const B = a ? [A] : [];
    const [I, L] = ne(u ? [...u] : []);
    const w = [...B, ...I];
    const { window: k } = ue;
    const N = ge(async (V) => {
      const { createCopyToClipboardFunction: U } = await Promise.resolve().then(
        () => (fr(), Fu)
      );
      U();
    }, []);
    const H = (V) => {
      const U = k.getSelection();
      (U && U.type === 'Range') ||
        (V.preventDefault(),
        I.filter((Q) => Q.title === 'Copied').length === 0 &&
          N(g.props.code).then(() => {
            L([...I, { title: 'Copied', onClick: () => {} }]),
              k.setTimeout(
                () => L(I.filter((Q) => Q.title !== 'Copied')),
                1500
              );
          }));
    };
    return h.createElement(
      _4,
      { withSource: a, withToolbar: o, ...y, className: F.join(' ') },
      o &&
        h.createElement(P4, {
          isLoading: e,
          border: !0,
          zoom: (V) => x(E * V),
          resetZoom: () => x(1),
          storyId: R4(n),
          baseUrl: './iframe.html',
        }),
      h.createElement(
        by.Provider,
        { value: { scale: E } },
        h.createElement(
          I4,
          { className: 'docs-story', onCopyCapture: a && H },
          h.createElement(
            T4,
            { isColumn: t || !Array.isArray(n), columns: r, layout: p },
            h.createElement(
              Ma.Element,
              { scale: E },
              Array.isArray(n)
                ? n.map((V, U) => h.createElement('div', { key: U }, V))
                : h.createElement('div', null, n)
            )
          ),
          h.createElement(Da, { actionItems: w })
        )
      ),
      a && b && g
    );
  };
  const k4 = j(Qi)(() => ({
    '.docs-story': { paddingTop: 32, paddingBottom: 40 },
  }));
  const N4 = () =>
    h.createElement(
      k4,
      { isLoading: !0, withToolbar: !0 },
      h.createElement(iu, null)
    );
  const M4 = j.table(({ theme: e }) => ({
    '&&': {
      borderCollapse: 'collapse',
      borderSpacing: 0,
      border: 'none',
      tr: { border: 'none !important', background: 'none' },
      'td, th': { padding: 0, border: 'none', width: 'auto!important' },
      marginTop: 0,
      marginBottom: 0,
      'th:first-of-type, td:first-of-type': { paddingLeft: 0 },
      'th:last-of-type, td:last-of-type': { paddingRight: 0 },
      td: {
        paddingTop: 0,
        paddingBottom: 4,
        '&:not(:first-of-type)': { paddingLeft: 10, paddingRight: 0 },
      },
      tbody: { boxShadow: 'none', border: 'none' },
      code: Rt({ theme: e }),
      div: { span: { fontWeight: 'bold' } },
      '& code': {
        margin: 0,
        display: 'inline-block',
        fontSize: e.typography.size.s1,
      },
    },
  }));
  const L4 = ({ tags: e }) => {
    const t = (e.params || []).filter((o) => o.description);
    const r = t.length !== 0;
    const n = e.deprecated != null;
    const a = e.returns != null && e.returns.description != null;
    return !r && !a && !n
      ? null
      : h.createElement(
          h.Fragment,
          null,
          h.createElement(
            M4,
            null,
            h.createElement(
              'tbody',
              null,
              n &&
                h.createElement(
                  'tr',
                  { key: 'deprecated' },
                  h.createElement(
                    'td',
                    { colSpan: 2 },
                    h.createElement('strong', null, 'Deprecated'),
                    ': ',
                    e.deprecated
                  )
                ),
              r &&
                t.map((o) =>
                  h.createElement(
                    'tr',
                    { key: o.name },
                    h.createElement(
                      'td',
                      null,
                      h.createElement('code', null, o.name)
                    ),
                    h.createElement('td', null, o.description)
                  )
                ),
              a &&
                h.createElement(
                  'tr',
                  { key: 'returns' },
                  h.createElement(
                    'td',
                    null,
                    h.createElement('code', null, 'Returns')
                  ),
                  h.createElement('td', null, e.returns.description)
                )
            )
          )
        );
  };
  const Zi = 8;
  const Zg = j.div(({ isExpanded: e }) => ({
    display: 'flex',
    flexDirection: e ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '-4px',
    minWidth: 100,
  }));
  const j4 = j.span(Rt, ({ theme: e, simple: t = !1 }) => ({
    flex: '0 0 auto',
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    margin: 0,
    marginRight: '4px',
    marginBottom: '4px',
    paddingTop: '2px',
    paddingBottom: '2px',
    lineHeight: '13px',
    ...(t && { background: 'transparent', border: '0 none', paddingLeft: 0 }),
  }));
  const q4 = j.button(({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    marginBottom: '4px',
    background: 'none',
    border: 'none',
  }));
  const $4 = j.div(Rt, ({ theme: e }) => ({
    fontFamily: e.typography.fonts.mono,
    color: e.color.secondary,
    fontSize: e.typography.size.s1,
    margin: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  }));
  const U4 = j.div(({ theme: e, width: t }) => ({
    width: t,
    minWidth: 200,
    maxWidth: 800,
    padding: 15,
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    boxSizing: 'content-box',
    '& code': { padding: '0 !important' },
  }));
  const H4 = j(Oe)({ height: 10, width: 10, minWidth: 10, marginLeft: 4 });
  const z4 = () => h.createElement('span', null, '-');
  const Ay = ({ text: e, simple: t }) => h.createElement(j4, { simple: t }, e);
  const W4 = (0, fy.default)(1e3)((e) => {
    const t = e.split(/\r?\n/);
    return `${Math.max(...t.map((r) => r.length))}ch`;
  });
  const G4 = (e) => {
    if (!e) return [e];
    const t = e.split('|').map((r) => r.trim());
    return (0, hy.default)(t);
  };
  const ey = (e, t = !0) => {
    let r = e;
    return (
      t || (r = e.slice(0, Zi)),
      r.map((n) => h.createElement(Ay, { key: n, text: n === '' ? '""' : n }))
    );
  };
  const V4 = ({ value: e, initialExpandedArgs: t }) => {
    const { summary: r, detail: n } = e;
    const [a, o] = ne(!1);
    const [i, u] = ne(t || !1);
    if (r == null) return null;
    const s = typeof r.toString === 'function' ? r.toString() : r;
    if (n == null) {
      if (/[(){}[\]<>]/.test(s)) return h.createElement(Ay, { text: s });
      const p = G4(s);
      const y = p.length;
      return y > Zi
        ? h.createElement(
            Zg,
            { isExpanded: i },
            ey(p, i),
            h.createElement(
              q4,
              { onClick: () => u(!i) },
              i ? 'Show less...' : `Show ${y - Zi} more...`
            )
          )
        : h.createElement(Zg, null, ey(p));
    }
    return h.createElement(
      Na,
      {
        closeOnOutsideClick: !0,
        placement: 'bottom',
        visible: a,
        onVisibleChange: (p) => {
          o(p);
        },
        tooltip: h.createElement(
          U4,
          { width: W4(n) },
          h.createElement(Qr, { language: 'jsx', format: !1 }, n)
        ),
      },
      h.createElement(
        $4,
        { className: 'sbdocs-expandable' },
        h.createElement('span', null, s),
        h.createElement(H4, { icon: a ? 'arrowup' : 'arrowdown' })
      )
    );
  };
  const Ki = ({ value: e, initialExpandedArgs: t }) =>
    e == null
      ? h.createElement(z4, null)
      : h.createElement(V4, { value: e, initialExpandedArgs: t });
  const K4 = j.label(({ theme: e }) => ({
    lineHeight: '18px',
    alignItems: 'center',
    marginBottom: 8,
    display: 'inline-block',
    position: 'relative',
    whiteSpace: 'nowrap',
    background: e.boolean.background,
    borderRadius: '3em',
    padding: 1,
    input: {
      appearance: 'none',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      borderRadius: '3em',
      '&:focus': {
        outline: 'none',
        boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
      },
    },
    span: {
      textAlign: 'center',
      fontSize: e.typography.size.s1,
      fontWeight: e.typography.weight.bold,
      lineHeight: '1',
      cursor: 'pointer',
      display: 'inline-block',
      padding: '7px 15px',
      transition: 'all 100ms ease-out',
      userSelect: 'none',
      borderRadius: '3em',
      color: de(0.5, e.color.defaultText),
      background: 'transparent',
      '&:hover': { boxShadow: `${Er(0.3, e.appBorderColor)} 0 0 0 1px inset` },
      '&:active': {
        boxShadow: `${Er(0.05, e.appBorderColor)} 0 0 0 2px inset`,
        color: Er(1, e.appBorderColor),
      },
      '&:first-of-type': { paddingRight: 8 },
      '&:last-of-type': { paddingLeft: 8 },
    },
    'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
      {
        background: e.boolean.selectedBackground,
        boxShadow:
          e.base === 'light'
            ? `${Er(0.1, e.appBorderColor)} 0 0 2px`
            : `${e.appBorderColor} 0 0 0 1px`,
        color: e.color.defaultText,
        padding: '7px 15px',
      },
  }));
  const Y4 = (e) => e === 'true';
  const X4 = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: a }) => {
    const o = ge(() => r(!1), [r]);
    if (t === void 0)
      return h.createElement(
        Re.Button,
        { id: hr(e), onClick: o },
        'Set boolean'
      );
    const i = Pe(e);
    const u = typeof t === 'string' ? Y4(t) : t;
    return h.createElement(
      K4,
      { htmlFor: i, title: u ? 'Change to false' : 'Change to true' },
      h.createElement('input', {
        id: i,
        type: 'checkbox',
        onChange: (s) => r(s.target.checked),
        checked: u,
        name: e,
        onBlur: n,
        onFocus: a,
      }),
      h.createElement('span', null, 'False'),
      h.createElement('span', null, 'True')
    );
  };
  const J4 = (e) => {
    const [t, r, n] = e.split('-');
    const a = new Date();
    return (
      a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
    );
  };
  const Q4 = (e) => {
    const [t, r] = e.split(':');
    const n = new Date();
    return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
  };
  const Z4 = (e) => {
    const t = new Date(e);
    const r = `000${t.getFullYear()}`.slice(-4);
    const n = `0${t.getMonth() + 1}`.slice(-2);
    const a = `0${t.getDate()}`.slice(-2);
    return `${r}-${n}-${a}`;
  };
  const e9 = (e) => {
    const t = new Date(e);
    const r = `0${t.getHours()}`.slice(-2);
    const n = `0${t.getMinutes()}`.slice(-2);
    return `${r}:${n}`;
  };
  const t9 = j.div(({ theme: e }) => ({
    flex: 1,
    display: 'flex',
    input: {
      marginLeft: 10,
      flex: 1,
      height: 32,
      '&::-webkit-calendar-picker-indicator': {
        opacity: 0.5,
        height: 12,
        filter: e.base === 'light' ? void 0 : 'invert(1)',
      },
    },
    'input:first-of-type': { marginLeft: 0, flexGrow: 4 },
    'input:last-of-type': { flexGrow: 3 },
  }));
  const r9 = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: a }) => {
    const [o, i] = ne(!0);
    const u = Se();
    const s = Se();
    he(() => {
      o !== !1 &&
        (u && u.current && (u.current.value = Z4(t)),
        s && s.current && (s.current.value = e9(t)));
    }, [t]);
    const p = (m) => {
      const g = J4(m.target.value);
      const A = new Date(t);
      A.setFullYear(g.getFullYear(), g.getMonth(), g.getDate());
      const E = A.getTime();
      E && r(E), i(!!E);
    };
    const y = (m) => {
      const g = Q4(m.target.value);
      const A = new Date(t);
      A.setHours(g.getHours()), A.setMinutes(g.getMinutes());
      const E = A.getTime();
      E && r(E), i(!!E);
    };
    const b = Pe(e);
    return h.createElement(
      t9,
      null,
      h.createElement(Re.Input, {
        type: 'date',
        max: '9999-12-31',
        ref: u,
        id: `${b}-date`,
        name: `${b}-date`,
        onChange: p,
        onFocus: n,
        onBlur: a,
      }),
      h.createElement(Re.Input, {
        type: 'time',
        id: `${b}-time`,
        name: `${b}-time`,
        ref: s,
        onChange: y,
        onFocus: n,
        onBlur: a,
      }),
      o ? null : h.createElement('div', null, 'invalid')
    );
  };
  const n9 = j.label({ display: 'flex' });
  const a9 = (e) => {
    const t = parseFloat(e);
    return Number.isNaN(t) ? void 0 : t;
  };
  const o9 = ({
    name: e,
    value: t,
    onChange: r,
    min: n,
    max: a,
    step: o,
    onBlur: i,
    onFocus: u,
  }) => {
    const [s, p] = ne(typeof t === 'number' ? t : '');
    const [y, b] = ne(!1);
    const [m, g] = ne(null);
    const A = ge(
      (F) => {
        p(F.target.value);
        const B = parseFloat(F.target.value);
        Number.isNaN(B)
          ? g(new Error(`'${F.target.value}' is not a number`))
          : (r(B), g(null));
      },
      [r, g]
    );
    const E = ge(() => {
      p('0'), r(0), b(!0);
    }, [b]);
    const x = Se(null);
    return (
      he(() => {
        y && x.current && x.current.select();
      }, [y]),
      he(() => {
        s !== (typeof t === 'number' ? t : '') && p(t);
      }, [t]),
      !y && t === void 0
        ? h.createElement(Re.Button, { id: hr(e), onClick: E }, 'Set number')
        : h.createElement(
            n9,
            null,
            h.createElement(Re.Input, {
              ref: x,
              id: Pe(e),
              type: 'number',
              onChange: A,
              size: 'flex',
              placeholder: 'Edit number...',
              value: s,
              valid: m ? 'error' : null,
              autoFocus: y,
              name: e,
              min: n,
              max: a,
              step: o,
              onFocus: u,
              onBlur: i,
            })
          )
    );
  };
  const vy = (e, t) => {
    const r = t && Object.entries(t).find(([n, a]) => a === e);
    return r ? r[0] : void 0;
  };
  const eu = (e, t) =>
    e && t
      ? Object.entries(t)
          .filter((r) => e.includes(r[1]))
          .map((r) => r[0])
      : [];
  const Dy = (e, t) => e && t && e.map((r) => t[r]);
  const i9 = j.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 },
        }
      : { label: { display: 'flex' } }
  );
  const u9 = j.span({});
  const s9 = j.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  });
  const ty = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        Ve.warn(`Checkbox with no options: ${e}`),
        h.createElement(h.Fragment, null, '-')
      );
    const o = eu(r, t);
    const [i, u] = ne(o);
    const s = (y) => {
      const b = y.target.value;
      const m = [...i];
      m.includes(b) ? m.splice(m.indexOf(b), 1) : m.push(b), n(Dy(m, t)), u(m);
    };
    he(() => {
      u(eu(r, t));
    }, [r]);
    const p = Pe(e);
    return h.createElement(
      i9,
      { isInline: a },
      Object.keys(t).map((y, b) => {
        const m = `${p}-${b}`;
        return h.createElement(
          s9,
          { key: m, htmlFor: m },
          h.createElement('input', {
            type: 'checkbox',
            id: m,
            name: m,
            value: y,
            onChange: s,
            checked: i?.includes(y),
          }),
          h.createElement(u9, null, y)
        );
      })
    );
  };
  const l9 = j.div(({ isInline: e }) =>
    e
      ? {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          label: { display: 'inline-flex', marginRight: 15 },
        }
      : { label: { display: 'flex' } }
  );
  const c9 = j.span({});
  const d9 = j.label({
    lineHeight: '20px',
    alignItems: 'center',
    marginBottom: 8,
    '&:last-child': { marginBottom: 0 },
    input: { margin: 0, marginRight: 6 },
  });
  const ry = ({ name: e, options: t, value: r, onChange: n, isInline: a }) => {
    if (!t)
      return (
        Ve.warn(`Radio with no options: ${e}`),
        h.createElement(h.Fragment, null, '-')
      );
    const o = vy(r, t);
    const i = Pe(e);
    return h.createElement(
      l9,
      { isInline: a },
      Object.keys(t).map((u, s) => {
        const p = `${i}-${s}`;
        return h.createElement(
          d9,
          { key: p, htmlFor: p },
          h.createElement('input', {
            type: 'radio',
            id: p,
            name: p,
            value: u,
            onChange: (y) => n(t[y.currentTarget.value]),
            checked: u === o,
          }),
          h.createElement(c9, null, u)
        );
      })
    );
  };
  const p9 = {
    appearance: 'none',
    border: '0 none',
    boxSizing: 'inherit',
    display: ' block',
    margin: ' 0',
    background: 'transparent',
    padding: 0,
    fontSize: 'inherit',
    position: 'relative',
  };
  const Cy = j.select(({ theme: e }) => ({
    ...p9,
    boxSizing: 'border-box',
    position: 'relative',
    padding: '6px 10px',
    width: '100%',
    color: e.input.color || 'inherit',
    background: e.input.background,
    borderRadius: e.input.borderRadius,
    boxShadow: `${e.input.border} 0 0 0 1px inset`,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '20px',
    '&:focus': {
      boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
      outline: 'none',
    },
    '&[disabled]': { cursor: 'not-allowed', opacity: 0.5 },
    '::placeholder': { color: e.textMutedColor },
    '&[multiple]': {
      overflow: 'auto',
      padding: 0,
      option: {
        display: 'block',
        padding: '6px 10px',
        marginLeft: 1,
        marginRight: 1,
      },
    },
  }));
  const xy = j.span(({ theme: e }) => ({
    display: 'inline-block',
    lineHeight: 'normal',
    overflow: 'hidden',
    position: 'relative',
    verticalAlign: 'top',
    width: '100%',
    svg: {
      position: 'absolute',
      zIndex: 1,
      pointerEvents: 'none',
      height: '12px',
      marginTop: '-6px',
      right: '12px',
      top: '50%',
      fill: e.textMutedColor,
      path: { fill: e.textMutedColor },
    },
  }));
  const ny = 'Choose option...';
  const f9 = ({ name: e, value: t, options: r, onChange: n }) => {
    const a = (u) => {
      n(r[u.currentTarget.value]);
    };
    const o = vy(t, r) || ny;
    const i = Pe(e);
    return h.createElement(
      xy,
      null,
      h.createElement(Oe, { icon: 'arrowdown' }),
      h.createElement(
        Cy,
        { id: i, value: o, onChange: a },
        h.createElement('option', { key: 'no-selection', disabled: !0 }, ny),
        Object.keys(r).map((u) => h.createElement('option', { key: u }, u))
      )
    );
  };
  const h9 = ({ name: e, value: t, options: r, onChange: n }) => {
    const a = (u) => {
      const s = Array.from(u.currentTarget.options)
        .filter((p) => p.selected)
        .map((p) => p.value);
      n(Dy(s, r));
    };
    const o = eu(t, r);
    const i = Pe(e);
    return h.createElement(
      xy,
      null,
      h.createElement(
        Cy,
        { id: i, multiple: !0, value: o, onChange: a },
        Object.keys(r).map((u) => h.createElement('option', { key: u }, u))
      )
    );
  };
  const ay = (e) => {
    const { name: t, options: r } = e;
    return r
      ? e.isMulti
        ? h.createElement(h9, { ...e })
        : h.createElement(f9, { ...e })
      : (Ve.warn(`Select with no options: ${t}`),
        h.createElement(h.Fragment, null, '-'));
  };
  const m9 = (e, t) =>
    Array.isArray(e)
      ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
      : e;
  const g9 = {
    check: ty,
    'inline-check': ty,
    radio: ry,
    'inline-radio': ry,
    select: ay,
    'multi-select': ay,
  };
  const cr = (e) => {
    const { type: t = 'select', labels: r, argType: n } = e;
    const a = {
      ...e,
      options: n ? m9(n.options, r) : {},
      isInline: t.includes('inline'),
      isMulti: t.includes('multi'),
    };
    const o = g9[t];
    if (o) return h.createElement(o, { ...a });
    throw new Error(`Unknown options type: ${t}`);
  };
  const uu = 'value';
  const y9 = 'key';
  const E9 = 'Error';
  const b9 = 'Object';
  const A9 = 'Array';
  const v9 = 'String';
  const D9 = 'Number';
  const C9 = 'Boolean';
  const x9 = 'Date';
  const F9 = 'Null';
  const S9 = 'Undefined';
  const w9 = 'Function';
  const B9 = 'Symbol';
  const Fy = 'ADD_DELTA_TYPE';
  const Sy = 'REMOVE_DELTA_TYPE';
  const wy = 'UPDATE_DELTA_TYPE';
  function gt(e) {
    return e !== null &&
      typeof e === 'object' &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] === 'function'
      ? 'Iterable'
      : Object.prototype.toString.call(e).slice(8, -1);
  }
  function By(e, t) {
    const r = gt(e);
    const n = gt(t);
    return (r === 'Function' || n === 'Function') && n !== r;
  }
  const su = class extends et {
    constructor(e) {
      super(e),
        (this.state = { inputRefKey: null, inputRefValue: null }),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this));
    }

    componentDidMount() {
      const { inputRefKey: e, inputRefValue: t } = this.state;
      const { onlyValue: r } = this.props;
      e && typeof e.focus === 'function' && e.focus(),
        r && t && typeof t.focus === 'function' && t.focus(),
        document.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }

    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.props.handleCancel()));
    }

    onSubmit() {
      const {
        handleAdd: e,
        onlyValue: t,
        onSubmitValueParser: r,
        keyPath: n,
        deep: a,
      } = this.props;
      const { inputRefKey: o, inputRefValue: i } = this.state;
      const u = {};
      if (!t) {
        if (!o.value) return;
        u.key = o.value;
      }
      (u.newValue = r(!1, n, a, u.key, i.value)), e(u);
    }

    refInputKey(e) {
      this.state.inputRefKey = e;
    }

    refInputValue(e) {
      this.state.inputRefValue = e;
    }

    render() {
      const {
        handleCancel: e,
        onlyValue: t,
        addButtonElement: r,
        cancelButtonElement: n,
        inputElementGenerator: a,
        keyPath: o,
        deep: i,
      } = this.props;
      const u = me(r, { onClick: this.onSubmit });
      const s = me(n, { onClick: e });
      const p = a(uu, o, i);
      const y = me(p, { placeholder: 'Value', ref: this.refInputValue });
      let b = null;
      if (!t) {
        const m = a(y9, o, i);
        b = me(m, { placeholder: 'Key', ref: this.refInputKey });
      }
      return h.createElement(
        'span',
        { className: 'rejt-add-value-node' },
        b,
        y,
        s,
        u
      );
    }
  };
  su.defaultProps = {
    onlyValue: !1,
    addButtonElement: h.createElement('button', null, '+'),
    cancelButtonElement: h.createElement('button', null, 'c'),
  };
  const Ty = class extends et {
    constructor(e) {
      super(e);
      const t = [...e.keyPath, e.name];
      (this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }

    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }

    onChildUpdate(e, t) {
      const { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      const { onUpdate: a } = this.props;
      const o = n.length;
      a(n[o - 1], r);
    }

    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }

    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }

    handleRemoveItem(e) {
      return () => {
        const { beforeRemoveAction: t, logger: r } = this.props;
        const { data: n, keyPath: a, nextDeep: o } = this.state;
        const i = n[e];
        t(e, a, o, i)
          .then(() => {
            const u = { keyPath: a, deep: o, key: e, oldValue: i, type: Sy };
            n.splice(e, 1), this.setState({ data: n });
            const { onUpdate: s, onDeltaUpdate: p } = this.props;
            s(a[a.length - 1], n), p(u);
          })
          .catch(r.error);
      };
    }

    handleAddValueAdd({ newValue: e }) {
      const { data: t, keyPath: r, nextDeep: n } = this.state;
      const { beforeAddAction: a, logger: o } = this.props;
      a(t.length, r, n, e)
        .then(() => {
          const i = [...t, e];
          this.setState({ data: i }), this.handleAddValueCancel();
          const { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(r[r.length - 1], i),
            s({
              type: Fy,
              keyPath: r,
              deep: n,
              key: i.length - 1,
              newValue: e,
            });
        })
        .catch(o.error);
    }

    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }

    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        const { beforeUpdateAction: a } = this.props;
        const { data: o, keyPath: i, nextDeep: u } = this.state;
        const s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            const { onUpdate: p, onDeltaUpdate: y } = this.props;
            p(i[i.length - 1], o),
              y({
                type: wy,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r(void 0);
          })
          .catch(n);
      });
    }

    renderCollapsed() {
      const { name: e, data: t, keyPath: r, deep: n } = this.state;
      const {
        handleRemove: a,
        readOnly: o,
        getStyle: i,
        dataType: u,
        minusMenuElement: s,
      } = this.props;
      const { minus: p, collapsed: y } = i(e, t, r, n, u);
      const b = o(e, t, r, n, u);
      const m = me(s, { onClick: a, className: 'rejt-minus-menu', style: p });
      return h.createElement(
        'span',
        { className: 'rejt-collapsed' },
        h.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: y,
            onClick: this.handleCollapseMode,
          },
          '[...] ',
          t.length,
          ' ',
          t.length === 1 ? 'item' : 'items'
        ),
        !b && m
      );
    }

    renderNotCollapsed() {
      const {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        addFormVisible: a,
        nextDeep: o,
      } = this.state;
      const {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: p,
        getStyle: y,
        dataType: b,
        addButtonElement: m,
        cancelButtonElement: g,
        editButtonElement: A,
        inputElementGenerator: E,
        textareaElementGenerator: x,
        minusMenuElement: F,
        plusMenuElement: B,
        beforeRemoveAction: I,
        beforeAddAction: L,
        beforeUpdateAction: w,
        logger: k,
        onSubmitValueParser: N,
      } = this.props;
      const {
        minus: H,
        plus: V,
        delimiter: U,
        ul: Q,
        addForm: ee,
      } = y(e, t, r, n, b);
      const X = p(e, t, r, n, b);
      const R = me(B, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: V,
      });
      const _ = me(F, { onClick: u, className: 'rejt-minus-menu', style: H });
      const q = !0;
      const W = '[';
      const Y = ']';
      return h.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        h.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: U },
          W
        ),
        !a && R,
        h.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: Q },
          t.map((K, Z) =>
            h.createElement(ma, {
              key: Z,
              name: Z.toString(),
              data: K,
              keyPath: r,
              deep: o,
              isCollapsed: i,
              handleRemove: this.handleRemoveItem(Z),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: p,
              getStyle: y,
              addButtonElement: m,
              cancelButtonElement: g,
              editButtonElement: A,
              inputElementGenerator: E,
              textareaElementGenerator: x,
              minusMenuElement: F,
              plusMenuElement: B,
              beforeRemoveAction: I,
              beforeAddAction: L,
              beforeUpdateAction: w,
              logger: k,
              onSubmitValueParser: N,
            })
          )
        ),
        !X &&
          a &&
          h.createElement(
            'div',
            { className: 'rejt-add-form', style: ee },
            h.createElement(su, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: q,
              addButtonElement: m,
              cancelButtonElement: g,
              inputElementGenerator: E,
              keyPath: r,
              deep: n,
              onSubmitValueParser: N,
            })
          ),
        h.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: U },
          Y
        ),
        !X && _
      );
    }

    render() {
      const {
        name: e,
        collapsed: t,
        data: r,
        keyPath: n,
        deep: a,
      } = this.state;
      const { dataType: o, getStyle: i } = this.props;
      const u = t ? this.renderCollapsed() : this.renderNotCollapsed();
      const s = i(e, r, n, a, o);
      return h.createElement(
        'div',
        { className: 'rejt-array-node' },
        h.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          h.createElement(
            'span',
            { className: 'rejt-name', style: s.name },
            e,
            ' :',
            ' '
          )
        ),
        u
      );
    }
  };
  Ty.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: h.createElement('span', null, ' - '),
    plusMenuElement: h.createElement('span', null, ' + '),
  };
  const _y = class extends et {
    constructor(e) {
      super(e);
      const t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }

    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }

    componentDidUpdate() {
      const {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: o,
      } = this.state;
      const { readOnly: i, dataType: u } = this.props;
      const s = i(r, n, a, o, u);
      e && !s && typeof t.focus === 'function' && t.focus();
    }

    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }

    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()));
    }

    handleEdit() {
      const {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props;
      const { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      const s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          By(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }

    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }

    refInput(e) {
      this.state.inputRef = e;
    }

    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }

    render() {
      const {
        name: e,
        value: t,
        editEnabled: r,
        keyPath: n,
        deep: a,
      } = this.state;
      const {
        handleRemove: o,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: p,
        editButtonElement: y,
        cancelButtonElement: b,
        textareaElementGenerator: m,
        minusMenuElement: g,
        keyPath: A,
      } = this.props;
      const E = p(e, i, n, a, s);
      let x = null;
      let F = null;
      const B = u(e, i, n, a, s);
      if (r && !B) {
        const I = m(uu, A, a, e, i, s);
        const L = me(y, { onClick: this.handleEdit });
        const w = me(b, { onClick: this.handleCancelEdit });
        const k = me(I, { ref: this.refInput, defaultValue: i });
        (x = h.createElement(
          'span',
          { className: 'rejt-edit-form', style: E.editForm },
          k,
          ' ',
          w,
          L
        )),
          (F = null);
      } else {
        x = h.createElement(
          'span',
          {
            className: 'rejt-value',
            style: E.value,
            onClick: B ? null : this.handleEditMode,
          },
          t
        );
        const I = me(g, {
          onClick: o,
          className: 'rejt-minus-menu',
          style: E.minus,
        });
        F = B ? null : I;
      }
      return h.createElement(
        'li',
        { className: 'rejt-function-value-node', style: E.li },
        h.createElement(
          'span',
          { className: 'rejt-name', style: E.name },
          e,
          ' :',
          ' '
        ),
        x,
        F
      );
    }
  };
  _y.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: h.createElement('button', null, 'e'),
    cancelButtonElement: h.createElement('button', null, 'c'),
    minusMenuElement: h.createElement('span', null, ' - '),
  };
  var ma = class extends et {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        });
    }

    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }

    render() {
      const { data: e, name: t, keyPath: r, deep: n } = this.state;
      const {
        isCollapsed: a,
        handleRemove: o,
        handleUpdateValue: i,
        onUpdate: u,
        onDeltaUpdate: s,
        readOnly: p,
        getStyle: y,
        addButtonElement: b,
        cancelButtonElement: m,
        editButtonElement: g,
        inputElementGenerator: A,
        textareaElementGenerator: E,
        minusMenuElement: x,
        plusMenuElement: F,
        beforeRemoveAction: B,
        beforeAddAction: I,
        beforeUpdateAction: L,
        logger: w,
        onSubmitValueParser: k,
      } = this.props;
      const N = () => !0;
      const H = gt(e);
      switch (H) {
        case E9:
          return h.createElement(tu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: N,
            dataType: H,
            getStyle: y,
            addButtonElement: b,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: E,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: k,
          });
        case b9:
          return h.createElement(tu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            dataType: H,
            getStyle: y,
            addButtonElement: b,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: E,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: k,
          });
        case A9:
          return h.createElement(Ty, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: u,
            onDeltaUpdate: s,
            readOnly: p,
            dataType: H,
            getStyle: y,
            addButtonElement: b,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            textareaElementGenerator: E,
            minusMenuElement: x,
            plusMenuElement: F,
            beforeRemoveAction: B,
            beforeAddAction: I,
            beforeUpdateAction: L,
            logger: w,
            onSubmitValueParser: k,
          });
        case v9:
          return h.createElement(mt, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case D9:
          return h.createElement(mt, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case C9:
          return h.createElement(mt, {
            name: t,
            value: e ? 'true' : 'false',
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case x9:
          return h.createElement(mt, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: N,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case F9:
          return h.createElement(mt, {
            name: t,
            value: 'null',
            originalValue: 'null',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case S9:
          return h.createElement(mt, {
            name: t,
            value: 'undefined',
            originalValue: 'undefined',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case w9:
          return h.createElement(_y, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: p,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            textareaElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        case B9:
          return h.createElement(mt, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: i,
            readOnly: N,
            dataType: H,
            getStyle: y,
            cancelButtonElement: m,
            editButtonElement: g,
            inputElementGenerator: A,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: k,
          });
        default:
          return null;
      }
    }
  };
  ma.defaultProps = { keyPath: [], deep: 0 };
  var tu = class extends et {
    constructor(e) {
      super(e);
      const t = e.deep === -1 ? [] : [...e.keyPath, e.name];
      (this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this));
    }

    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? { data: e.data } : null;
    }

    onChildUpdate(e, t) {
      const { data: r, keyPath: n } = this.state;
      (r[e] = t), this.setState({ data: r });
      const { onUpdate: a } = this.props;
      const o = n.length;
      a(n[o - 1], r);
    }

    handleAddMode() {
      this.setState({ addFormVisible: !0 });
    }

    handleAddValueCancel() {
      this.setState({ addFormVisible: !1 });
    }

    handleAddValueAdd({ key: e, newValue: t }) {
      const { data: r, keyPath: n, nextDeep: a } = this.state;
      const { beforeAddAction: o, logger: i } = this.props;
      o(e, n, a, t)
        .then(() => {
          (r[e] = t), this.setState({ data: r }), this.handleAddValueCancel();
          const { onUpdate: u, onDeltaUpdate: s } = this.props;
          u(n[n.length - 1], r),
            s({ type: Fy, keyPath: n, deep: a, key: e, newValue: t });
        })
        .catch(i.error);
    }

    handleRemoveValue(e) {
      return () => {
        const { beforeRemoveAction: t, logger: r } = this.props;
        const { data: n, keyPath: a, nextDeep: o } = this.state;
        const i = n[e];
        t(e, a, o, i)
          .then(() => {
            const u = { keyPath: a, deep: o, key: e, oldValue: i, type: Sy };
            delete n[e], this.setState({ data: n });
            const { onUpdate: s, onDeltaUpdate: p } = this.props;
            s(a[a.length - 1], n), p(u);
          })
          .catch(r.error);
      };
    }

    handleCollapseMode() {
      this.setState((e) => ({ collapsed: !e.collapsed }));
    }

    handleEditValue({ key: e, value: t }) {
      return new Promise((r, n) => {
        const { beforeUpdateAction: a } = this.props;
        const { data: o, keyPath: i, nextDeep: u } = this.state;
        const s = o[e];
        a(e, i, u, s, t)
          .then(() => {
            (o[e] = t), this.setState({ data: o });
            const { onUpdate: p, onDeltaUpdate: y } = this.props;
            p(i[i.length - 1], o),
              y({
                type: wy,
                keyPath: i,
                deep: u,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r();
          })
          .catch(n);
      });
    }

    renderCollapsed() {
      const { name: e, keyPath: t, deep: r, data: n } = this.state;
      const {
        handleRemove: a,
        readOnly: o,
        dataType: i,
        getStyle: u,
        minusMenuElement: s,
      } = this.props;
      const { minus: p, collapsed: y } = u(e, n, t, r, i);
      const b = Object.getOwnPropertyNames(n);
      const m = o(e, n, t, r, i);
      const g = me(s, { onClick: a, className: 'rejt-minus-menu', style: p });
      return h.createElement(
        'span',
        { className: 'rejt-collapsed' },
        h.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: y,
            onClick: this.handleCollapseMode,
          },
          '{...}',
          ' ',
          b.length,
          ' ',
          b.length === 1 ? 'key' : 'keys'
        ),
        !m && g
      );
    }

    renderNotCollapsed() {
      const {
        name: e,
        data: t,
        keyPath: r,
        deep: n,
        nextDeep: a,
        addFormVisible: o,
      } = this.state;
      const {
        isCollapsed: i,
        handleRemove: u,
        onDeltaUpdate: s,
        readOnly: p,
        getStyle: y,
        dataType: b,
        addButtonElement: m,
        cancelButtonElement: g,
        editButtonElement: A,
        inputElementGenerator: E,
        textareaElementGenerator: x,
        minusMenuElement: F,
        plusMenuElement: B,
        beforeRemoveAction: I,
        beforeAddAction: L,
        beforeUpdateAction: w,
        logger: k,
        onSubmitValueParser: N,
      } = this.props;
      const {
        minus: H,
        plus: V,
        addForm: U,
        ul: Q,
        delimiter: ee,
      } = y(e, t, r, n, b);
      const X = Object.getOwnPropertyNames(t);
      const R = p(e, t, r, n, b);
      const _ = me(B, {
        onClick: this.handleAddMode,
        className: 'rejt-plus-menu',
        style: V,
      });
      const q = me(F, { onClick: u, className: 'rejt-minus-menu', style: H });
      const W = X.map((Z) =>
        h.createElement(ma, {
          key: Z,
          name: Z,
          data: t[Z],
          keyPath: r,
          deep: a,
          isCollapsed: i,
          handleRemove: this.handleRemoveValue(Z),
          handleUpdateValue: this.handleEditValue,
          onUpdate: this.onChildUpdate,
          onDeltaUpdate: s,
          readOnly: p,
          getStyle: y,
          addButtonElement: m,
          cancelButtonElement: g,
          editButtonElement: A,
          inputElementGenerator: E,
          textareaElementGenerator: x,
          minusMenuElement: F,
          plusMenuElement: B,
          beforeRemoveAction: I,
          beforeAddAction: L,
          beforeUpdateAction: w,
          logger: k,
          onSubmitValueParser: N,
        })
      );
      const Y = '{';
      const K = '}';
      return h.createElement(
        'span',
        { className: 'rejt-not-collapsed' },
        h.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: ee },
          Y
        ),
        !R && _,
        h.createElement(
          'ul',
          { className: 'rejt-not-collapsed-list', style: Q },
          W
        ),
        !R &&
          o &&
          h.createElement(
            'div',
            { className: 'rejt-add-form', style: U },
            h.createElement(su, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: m,
              cancelButtonElement: g,
              inputElementGenerator: E,
              keyPath: r,
              deep: n,
              onSubmitValueParser: N,
            })
          ),
        h.createElement(
          'span',
          { className: 'rejt-not-collapsed-delimiter', style: ee },
          K
        ),
        !R && q
      );
    }

    render() {
      const {
        name: e,
        collapsed: t,
        data: r,
        keyPath: n,
        deep: a,
      } = this.state;
      const { getStyle: o, dataType: i } = this.props;
      const u = t ? this.renderCollapsed() : this.renderNotCollapsed();
      const s = o(e, r, n, a, i);
      return h.createElement(
        'div',
        { className: 'rejt-object-node' },
        h.createElement(
          'span',
          { onClick: this.handleCollapseMode },
          h.createElement(
            'span',
            { className: 'rejt-name', style: s.name },
            e,
            ' :',
            ' '
          )
        ),
        u
      );
    }
  };
  tu.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: h.createElement('span', null, ' - '),
    plusMenuElement: h.createElement('span', null, ' + '),
  };
  var mt = class extends et {
    constructor(e) {
      super(e);
      const t = [...e.keyPath, e.name];
      (this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this));
    }

    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? { value: e.value } : null;
    }

    componentDidUpdate() {
      const {
        editEnabled: e,
        inputRef: t,
        name: r,
        value: n,
        keyPath: a,
        deep: o,
      } = this.state;
      const { readOnly: i, dataType: u } = this.props;
      const s = i(r, n, a, o, u);
      e && !s && typeof t.focus === 'function' && t.focus();
    }

    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown);
    }

    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()));
    }

    handleEdit() {
      const {
        handleUpdateValue: e,
        originalValue: t,
        logger: r,
        onSubmitValueParser: n,
        keyPath: a,
      } = this.props;
      const { inputRef: o, name: i, deep: u } = this.state;
      if (!o) return;
      const s = n(!0, a, u, i, o.value);
      e({ value: s, key: i })
        .then(() => {
          By(t, s) || this.handleCancelEdit();
        })
        .catch(r.error);
    }

    handleEditMode() {
      this.setState({ editEnabled: !0 });
    }

    refInput(e) {
      this.state.inputRef = e;
    }

    handleCancelEdit() {
      this.setState({ editEnabled: !1 });
    }

    render() {
      const {
        name: e,
        value: t,
        editEnabled: r,
        keyPath: n,
        deep: a,
      } = this.state;
      const {
        handleRemove: o,
        originalValue: i,
        readOnly: u,
        dataType: s,
        getStyle: p,
        editButtonElement: y,
        cancelButtonElement: b,
        inputElementGenerator: m,
        minusMenuElement: g,
        keyPath: A,
      } = this.props;
      const E = p(e, i, n, a, s);
      const x = u(e, i, n, a, s);
      const F = r && !x;
      const B = m(uu, A, a, e, i, s);
      const I = me(y, { onClick: this.handleEdit });
      const L = me(b, { onClick: this.handleCancelEdit });
      const w = me(B, { ref: this.refInput, defaultValue: JSON.stringify(i) });
      const k = me(g, {
        onClick: o,
        className: 'rejt-minus-menu',
        style: E.minus,
      });
      return h.createElement(
        'li',
        { className: 'rejt-value-node', style: E.li },
        h.createElement(
          'span',
          { className: 'rejt-name', style: E.name },
          e,
          ' : '
        ),
        F
          ? h.createElement(
              'span',
              { className: 'rejt-edit-form', style: E.editForm },
              w,
              ' ',
              L,
              I
            )
          : h.createElement(
              'span',
              {
                className: 'rejt-value',
                style: E.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t)
            ),
        !x && !F && k
      );
    }
  };
  mt.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: h.createElement('button', null, 'e'),
    cancelButtonElement: h.createElement('button', null, 'c'),
    minusMenuElement: h.createElement('span', null, ' - '),
  };
  const T9 = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {},
  };
  const _9 = {
    minus: { color: 'red' },
    plus: { color: 'green' },
    collapsed: { color: 'grey' },
    delimiter: {},
    ul: { padding: '0px', margin: '0 0 0 25px', listStyle: 'none' },
    name: { color: '#2287CD' },
    addForm: {},
  };
  const O9 = {
    minus: { color: 'red' },
    editForm: {},
    value: { color: '#7bba3d' },
    li: { minHeight: '22px', lineHeight: '22px', outline: '0px' },
    name: { color: '#2287CD' },
  };
  function R9(e) {
    let t = e;
    if (t.indexOf('function') === 0) return (0, eval)(`(${t})`);
    try {
      t = JSON.parse(e);
    } catch {}
    return t;
  }
  const Oy = class extends et {
    constructor(e) {
      super(e),
        (this.state = { data: e.data, rootName: e.rootName }),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this));
    }

    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? { data: e.data, rootName: e.rootName }
        : null;
    }

    onUpdate(e, t) {
      this.setState({ data: t }), this.props.onFullyUpdate(t);
    }

    removeRoot() {
      this.onUpdate(null, null);
    }

    render() {
      const { data: e, rootName: t } = this.state;
      const {
        isCollapsed: r,
        onDeltaUpdate: n,
        readOnly: a,
        getStyle: o,
        addButtonElement: i,
        cancelButtonElement: u,
        editButtonElement: s,
        inputElement: p,
        textareaElement: y,
        minusMenuElement: b,
        plusMenuElement: m,
        beforeRemoveAction: g,
        beforeAddAction: A,
        beforeUpdateAction: E,
        logger: x,
        onSubmitValueParser: F,
        fallback: B = null,
      } = this.props;
      const I = gt(e);
      let L = a;
      gt(a) === 'Boolean' && (L = () => a);
      let w = p;
      p && gt(p) !== 'Function' && (w = () => p);
      let k = y;
      return (
        y && gt(y) !== 'Function' && (k = () => y),
        I === 'Object' || I === 'Array'
          ? h.createElement(
              'div',
              { className: 'rejt-tree' },
              h.createElement(ma, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: L,
                getStyle: o,
                addButtonElement: i,
                cancelButtonElement: u,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: k,
                minusMenuElement: b,
                plusMenuElement: m,
                handleRemove: this.removeRoot,
                beforeRemoveAction: g,
                beforeAddAction: A,
                beforeUpdateAction: E,
                logger: x,
                onSubmitValueParser: F,
              })
            )
          : B
      );
    }
  };
  Oy.defaultProps = {
    rootName: 'root',
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case 'Object':
        case 'Error':
          return T9;
        case 'Array':
          return _9;
        default:
          return O9;
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: { error: () => {} },
    onSubmitValueParser: (e, t, r, n, a) => R9(a),
    inputElement: () => h.createElement('input', null),
    textareaElement: () => h.createElement('textarea', null),
    fallback: null,
  };
  const { window: P9 } = ue;
  const I9 = j.div(({ theme: e }) => ({
    position: 'relative',
    display: 'flex',
    '.rejt-tree': { marginLeft: '1rem', fontSize: '13px' },
    '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
      { '& > svg': { opacity: 0, transition: 'opacity 0.2s' } },
    '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
      { '& > svg': { opacity: 1 } },
    '.rejt-edit-form button': { display: 'none' },
    '.rejt-add-form': { marginLeft: 10 },
    '.rejt-add-value-node': { display: 'inline-flex', alignItems: 'center' },
    '.rejt-name': { lineHeight: '22px' },
    '.rejt-not-collapsed-delimiter': { lineHeight: '22px' },
    '.rejt-plus-menu': { marginLeft: 5 },
    '.rejt-object-node > span > *, .rejt-array-node > span > *': {
      position: 'relative',
      zIndex: 2,
    },
    '.rejt-object-node, .rejt-array-node': { position: 'relative' },
    '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
      {
        content: '""',
        position: 'absolute',
        top: 0,
        display: 'block',
        width: '100%',
        marginLeft: '-1rem',
        padding: '0 4px 0 1rem',
        height: 22,
      },
    '.rejt-collapsed::before, .rejt-not-collapsed::before': {
      zIndex: 1,
      background: 'transparent',
      borderRadius: 4,
      transition: 'background 0.2s',
      pointerEvents: 'none',
      opacity: 0.1,
    },
    '.rejt-object-node:hover, .rejt-array-node:hover': {
      '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
        background: e.color.secondary,
      },
    },
    '.rejt-collapsed::after, .rejt-not-collapsed::after': {
      content: '""',
      position: 'absolute',
      display: 'inline-block',
      pointerEvents: 'none',
      width: 0,
      height: 0,
    },
    '.rejt-collapsed::after': {
      left: -8,
      top: 8,
      borderTop: '3px solid transparent',
      borderBottom: '3px solid transparent',
      borderLeft: '3px solid rgba(153,153,153,0.6)',
    },
    '.rejt-not-collapsed::after': {
      left: -10,
      top: 10,
      borderTop: '3px solid rgba(153,153,153,0.6)',
      borderLeft: '3px solid transparent',
      borderRight: '3px solid transparent',
    },
    '.rejt-value': {
      display: 'inline-block',
      border: '1px solid transparent',
      borderRadius: 4,
      margin: '1px 0',
      padding: '0 4px',
      cursor: 'text',
      color: e.color.defaultText,
    },
    '.rejt-value-node:hover > .rejt-value': {
      background: e.color.lighter,
      borderColor: e.appBorderColor,
    },
  }));
  const Yi = j.button(({ theme: e, primary: t }) => ({
    border: 0,
    height: 20,
    margin: 1,
    borderRadius: 4,
    background: t ? e.color.secondary : 'transparent',
    color: t ? e.color.lightest : e.color.dark,
    fontWeight: t ? 'bold' : 'normal',
    cursor: 'pointer',
    order: t ? 'initial' : 9,
  }));
  const oy = j(Oe)(({ theme: e, icon: t, disabled: r }) => ({
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 15,
    height: 15,
    padding: 3,
    marginLeft: 5,
    cursor: r ? 'not-allowed' : 'pointer',
    color: e.textMutedColor,
    '&:hover': r
      ? {}
      : { color: t === 'subtract' ? e.color.negative : e.color.ancillary },
    'svg + &': { marginLeft: 0 },
  }));
  const iy = j.input(({ theme: e, placeholder: t }) => ({
    outline: 0,
    margin: t ? 1 : '1px 0',
    padding: '3px 4px',
    color: e.color.defaultText,
    background: e.background.app,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 4,
    lineHeight: '14px',
    width: t === 'Key' ? 80 : 120,
    '&:focus': { border: `1px solid ${e.color.secondary}` },
  }));
  const k9 = j(yt)(({ theme: e }) => ({
    position: 'absolute',
    zIndex: 2,
    top: 2,
    right: 2,
    height: 21,
    padding: '0 3px',
    background: e.background.bar,
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: 3,
    color: e.textMutedColor,
    fontSize: '9px',
    fontWeight: 'bold',
    textDecoration: 'none',
    span: { marginLeft: 3, marginTop: 1 },
  }));
  const N9 = j(Re.Textarea)(({ theme: e }) => ({
    flex: 1,
    padding: '7px 6px',
    fontFamily: e.typography.fonts.mono,
    fontSize: '12px',
    lineHeight: '18px',
    '&::placeholder': { fontFamily: e.typography.fonts.base, fontSize: '13px' },
    '&:placeholder-shown': { padding: '7px 10px' },
  }));
  const M9 = {
    bubbles: !0,
    cancelable: !0,
    key: 'Enter',
    code: 'Enter',
    keyCode: 13,
  };
  const L9 = (e) => {
    e.currentTarget.dispatchEvent(new P9.KeyboardEvent('keydown', M9));
  };
  const j9 = (e) => {
    e.currentTarget.select();
  };
  const q9 = (e) => () => ({
    name: { color: e.color.secondary },
    collapsed: { color: e.color.dark },
    ul: { listStyle: 'none', margin: '0 0 0 1rem', padding: 0 },
    li: { outline: 0 },
  });
  const uy = ({ name: e, value: t, onChange: r }) => {
    const n = Tu();
    const a = ot(() => t && (0, my.default)(t), [t]);
    const o = a != null;
    const [i, u] = ne(!o);
    const [s, p] = ne(null);
    const y = ge(
      (x) => {
        try {
          x && r(JSON.parse(x)), p(void 0);
        } catch (F) {
          p(F);
        }
      },
      [r]
    );
    const [b, m] = ne(!1);
    const g = ge(() => {
      r({}), m(!0);
    }, [m]);
    const A = Se(null);
    if (
      (he(() => {
        b && A.current && A.current.select();
      }, [b]),
      !o)
    )
      return h.createElement(
        Re.Button,
        { id: hr(e), onClick: g },
        'Set object'
      );
    const E = h.createElement(N9, {
      ref: A,
      id: Pe(e),
      name: e,
      defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
      onBlur: (x) => y(x.target.value),
      placeholder: 'Edit JSON string...',
      autoFocus: b,
      valid: s ? 'error' : null,
    });
    return h.createElement(
      I9,
      null,
      ['Object', 'Array'].includes(gt(a)) &&
        h.createElement(
          k9,
          {
            href: '#',
            onClick: (x) => {
              x.preventDefault(), u((F) => !F);
            },
          },
          h.createElement(Oe, { icon: i ? 'eyeclose' : 'eye' }),
          h.createElement('span', null, 'RAW')
        ),
      i
        ? E
        : h.createElement(Oy, {
            data: a,
            rootName: e,
            onFullyUpdate: r,
            getStyle: q9(n),
            cancelButtonElement: h.createElement(
              Yi,
              { type: 'button' },
              'Cancel'
            ),
            editButtonElement: h.createElement(Yi, { type: 'submit' }, 'Save'),
            addButtonElement: h.createElement(
              Yi,
              { type: 'submit', primary: !0 },
              'Save'
            ),
            plusMenuElement: h.createElement(oy, { icon: 'add' }),
            minusMenuElement: h.createElement(oy, { icon: 'subtract' }),
            inputElement: (x, F, B, I) =>
              I
                ? h.createElement(iy, { onFocus: j9, onBlur: L9 })
                : h.createElement(iy, null),
            fallback: E,
          })
    );
  };
  const $9 = j.input(({ theme: e, min: t, max: r, value: n }) => ({
    '&': { width: '100%', backgroundColor: 'transparent', appearance: 'none' },
    '&::-webkit-slider-runnable-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ze(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${st(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
    },
    '&::-webkit-slider-thumb': {
      marginTop: '-6px',
      width: 16,
      height: 16,
      border: `1px solid ${He(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${He(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      appearance: 'none',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${ze(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out',
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing',
      },
    },
    '&:focus': {
      outline: 'none',
      '&::-webkit-slider-runnable-track': {
        borderColor: He(e.color.secondary, 0.4),
      },
      '&::-webkit-slider-thumb': {
        borderColor: e.color.secondary,
        boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
      },
    },
    '&::-moz-range-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ze(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${st(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      borderRadius: 6,
      width: '100%',
      height: 6,
      cursor: 'pointer',
      outline: 'none',
    },
    '&::-moz-range-thumb': {
      width: 16,
      height: 16,
      border: `1px solid ${He(e.appBorderColor, 0.2)}`,
      borderRadius: '50px',
      boxShadow: `0 1px 3px 0px ${He(e.appBorderColor, 0.2)}`,
      cursor: 'grab',
      background: `${e.input.background}`,
      transition: 'all 150ms ease-out',
      '&:hover': {
        background: `${ze(0.05, e.input.background)}`,
        transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
        transition: 'all 50ms ease-out',
      },
      '&:active': {
        background: `${e.input.background}`,
        transform: 'scale3d(1, 1, 1) translateY(0px)',
        cursor: 'grabbing',
      },
    },
    '&::-ms-track': {
      background:
        e.base === 'light'
          ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${ze(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${ze(0.02, e.input.background)} 100%)`
          : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
              ((n - t) / (r - t)) * 100
            }%, 
            ${st(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${st(0.02, e.input.background)} 100%)`,
      boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
      color: 'transparent',
      width: '100%',
      height: '6px',
      cursor: 'pointer',
    },
    '&::-ms-fill-lower': { borderRadius: 6 },
    '&::-ms-fill-upper': { borderRadius: 6 },
    '&::-ms-thumb': {
      width: 16,
      height: 16,
      background: `${e.input.background}`,
      border: `1px solid ${He(e.appBorderColor, 0.2)}`,
      borderRadius: 50,
      cursor: 'grab',
      marginTop: 0,
    },
    '@supports (-ms-ime-align:auto)': { 'input[type=range]': { margin: '0' } },
  }));
  const Ry = j.span({
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    whiteSpace: 'nowrap',
    fontFeatureSettings: 'tnum',
    fontVariantNumeric: 'tabular-nums',
  });
  const U9 = j(Ry)(({ numberOFDecimalsPlaces: e, max: t }) => ({
    width: `${e + t.toString().length * 2 + 3}ch`,
    textAlign: 'right',
    flexShrink: 0,
  }));
  const H9 = j.div({ display: 'flex', alignItems: 'center', width: '100%' });
  function z9(e) {
    const t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
  }
  const W9 = ({
    name: e,
    value: t,
    onChange: r,
    min: n = 0,
    max: a = 100,
    step: o = 1,
    onBlur: i,
    onFocus: u,
  }) => {
    const s = (b) => {
      r(a9(b.target.value));
    };
    const p = t !== void 0;
    const y = ot(() => z9(o), [o]);
    return h.createElement(
      H9,
      null,
      h.createElement(Ry, null, n),
      h.createElement($9, {
        id: Pe(e),
        type: 'range',
        onChange: s,
        name: e,
        value: t,
        min: n,
        max: a,
        step: o,
        onFocus: u,
        onBlur: i,
      }),
      h.createElement(
        U9,
        { numberOFDecimalsPlaces: y, max: a },
        p ? t.toFixed(y) : '--',
        ' / ',
        a
      )
    );
  };
  const G9 = j.label({ display: 'flex' });
  const V9 = j.div(({ isMaxed: e }) => ({
    marginLeft: '0.75rem',
    paddingTop: '0.35rem',
    color: e ? 'red' : void 0,
  }));
  const K9 = ({
    name: e,
    value: t,
    onChange: r,
    onFocus: n,
    onBlur: a,
    maxLength: o,
  }) => {
    const i = (b) => {
      r(b.target.value);
    };
    const [u, s] = ne(!1);
    const p = ge(() => {
      r(''), s(!0);
    }, [s]);
    if (t === void 0)
      return h.createElement(
        Re.Button,
        { id: hr(e), onClick: p },
        'Set string'
      );
    const y = typeof t === 'string';
    return h.createElement(
      G9,
      null,
      h.createElement(Re.Textarea, {
        id: Pe(e),
        maxLength: o,
        onChange: i,
        size: 'flex',
        placeholder: 'Edit string...',
        autoFocus: u,
        valid: y ? null : 'error',
        name: e,
        value: y ? t : '',
        onFocus: n,
        onBlur: a,
      }),
      o &&
        h.createElement(
          V9,
          { isMaxed: t?.length === o },
          t?.length ?? 0,
          ' / ',
          o
        )
    );
  };
  const Y9 = j(Re.Input)({ padding: 10 });
  function X9(e) {
    e.forEach((t) => {
      t.startsWith('blob:') && URL.revokeObjectURL(t);
    });
  }
  const J9 = ({ onChange: e, name: t, accept: r = 'image/*', value: n }) => {
    const a = Se(null);
    function o(i) {
      if (!i.target.files) return;
      const u = Array.from(i.target.files).map((s) => URL.createObjectURL(s));
      e(u), X9(n);
    }
    return (
      he(() => {
        n == null && a.current && (a.current.value = null);
      }, [n, t]),
      h.createElement(Y9, {
        ref: a,
        id: Pe(t),
        type: 'file',
        name: t,
        multiple: !0,
        onChange: o,
        accept: r,
        size: 'flex',
      })
    );
  };
  const Q9 = Eu(() => Promise.resolve().then(() => (Jg(), Xg)));
  const Z9 = (e) =>
    h.createElement(
      yu,
      { fallback: h.createElement('div', null) },
      h.createElement(Q9, { ...e })
    );
  const eP = {
    array: uy,
    object: uy,
    boolean: X4,
    color: Z9,
    date: r9,
    number: o9,
    check: cr,
    'inline-check': cr,
    radio: cr,
    'inline-radio': cr,
    select: cr,
    'multi-select': cr,
    range: W9,
    text: K9,
    file: J9,
  };
  const sy = () => h.createElement(h.Fragment, null, '-');
  const tP = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
    const { key: a, control: o } = e;
    const [i, u] = ne(!1);
    const [s, p] = ne({ value: t });
    he(() => {
      i || p({ value: t });
    }, [i, t]);
    const y = ge((E) => (p({ value: E }), r({ [a]: E }), E), [r, a]);
    const b = ge(() => u(!1), []);
    const m = ge(() => u(!0), []);
    if (!o || o.disable)
      return n
        ? h.createElement(
            Et,
            {
              href: 'https://storybook.js.org/docs/react/essentials/controls',
              target: '_blank',
              withArrow: !0,
            },
            'Setup controls'
          )
        : h.createElement(sy, null);
    const g = {
      name: a,
      argType: e,
      value: s.value,
      onChange: y,
      onBlur: b,
      onFocus: m,
    };
    const A = eP[o.type] || sy;
    return h.createElement(A, { ...g, ...o, controlType: o.type });
  };
  const rP = j.span({ fontWeight: 'bold' });
  const nP = j.span(({ theme: e }) => ({
    color: e.color.negative,
    fontFamily: e.typography.fonts.mono,
    cursor: 'help',
  }));
  const aP = j.div(({ theme: e }) => ({
    '&&': { p: { margin: '0 0 10px 0' }, a: { color: e.color.secondary } },
    code: {
      ...Rt({ theme: e }),
      fontSize: 12,
      fontFamily: e.typography.fonts.mono,
    },
    '& code': { margin: 0, display: 'inline-block' },
    '& pre > code': { whiteSpace: 'pre-wrap' },
  }));
  const oP = j.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === 'light'
        ? de(0.1, e.color.defaultText)
        : de(0.2, e.color.defaultText),
    marginTop: t ? 4 : 0,
  }));
  const iP = j.div(({ theme: e, hasDescription: t }) => ({
    color:
      e.base === 'light'
        ? de(0.1, e.color.defaultText)
        : de(0.2, e.color.defaultText),
    marginTop: t ? 12 : 0,
    marginBottom: 12,
  }));
  const uP = j.td(({ theme: e, expandable: t }) => ({
    paddingLeft: t ? '40px !important' : '20px !important',
  }));
  const da = (e) => {
    const [t, r] = ne(!1);
    const {
      row: n,
      updateArgs: a,
      compact: o,
      expandable: i,
      initialExpandedArgs: u,
    } = e;
    const { name: s, description: p } = n;
    const y = n.table || {};
    const b = y.type || n.type;
    const m = y.defaultValue || n.defaultValue;
    const g = n.type?.required;
    const A = p != null && p !== '';
    return h.createElement(
      'tr',
      { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) },
      h.createElement(
        uP,
        { expandable: i },
        h.createElement(rP, null, s),
        g ? h.createElement(nP, { title: 'Required' }, '*') : null
      ),
      o
        ? null
        : h.createElement(
            'td',
            null,
            A && h.createElement(aP, null, h.createElement(Go, null, p)),
            y.jsDocTags != null
              ? h.createElement(
                  h.Fragment,
                  null,
                  h.createElement(
                    iP,
                    { hasDescription: A },
                    h.createElement(Ki, { value: b, initialExpandedArgs: u })
                  ),
                  h.createElement(L4, { tags: y.jsDocTags })
                )
              : h.createElement(
                  oP,
                  { hasDescription: A },
                  h.createElement(Ki, { value: b, initialExpandedArgs: u })
                )
          ),
      o
        ? null
        : h.createElement(
            'td',
            null,
            h.createElement(Ki, { value: m, initialExpandedArgs: u })
          ),
      a
        ? h.createElement(
            'td',
            null,
            h.createElement(tP, { ...e, isHovered: t })
          )
        : null
    );
  };
  const sP = j(Oe)(({ theme: e }) => ({
    marginRight: 8,
    marginLeft: -10,
    marginTop: -2,
    height: 12,
    width: 12,
    color:
      e.base === 'light'
        ? de(0.25, e.color.defaultText)
        : de(0.3, e.color.defaultText),
    border: 'none',
    display: 'inline-block',
  }));
  const lP = j.span(({ theme: e }) => ({
    display: 'flex',
    lineHeight: '20px',
    alignItems: 'center',
  }));
  const cP = j.td(({ theme: e }) => ({
    position: 'relative',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s1 - 1,
    color:
      e.base === 'light'
        ? de(0.4, e.color.defaultText)
        : de(0.6, e.color.defaultText),
    background: `${e.background.app} !important`,
    '& ~ td': { background: `${e.background.app} !important` },
  }));
  const dP = j.td(({ theme: e }) => ({
    position: 'relative',
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    background: e.background.app,
  }));
  const pP = j.td(() => ({ position: 'relative' }));
  const fP = j.tr(({ theme: e }) => ({
    '&:hover > td': {
      backgroundColor: `${st(0.005, e.background.app)} !important`,
      boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
      cursor: 'row-resize',
    },
  }));
  const ly = j.button(() => ({
    background: 'none',
    border: 'none',
    padding: '0',
    font: 'inherit',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    width: '100%',
    color: 'transparent',
    cursor: 'row-resize !important',
  }));
  const Xi = ({
    level: e = 'section',
    label: t,
    children: r,
    initialExpanded: n = !0,
    colSpan: a = 3,
  }) => {
    const [o, i] = ne(n);
    const u = e === 'subsection' ? dP : cP;
    const s = r?.length || 0;
    const p = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '';
    const y = o ? 'arrowdown' : 'arrowright';
    const b = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${
      s !== 1 ? 's' : ''
    }`;
    return h.createElement(
      h.Fragment,
      null,
      h.createElement(
        fP,
        { title: b },
        h.createElement(
          u,
          { colSpan: 1 },
          h.createElement(ly, { onClick: (m) => i(!o), tabIndex: 0 }, b),
          h.createElement(lP, null, h.createElement(sP, { icon: y }), t)
        ),
        h.createElement(
          pP,
          { colSpan: a - 1 },
          h.createElement(
            ly,
            { onClick: (m) => i(!o), tabIndex: -1, style: { outline: 'none' } },
            b
          ),
          o ? null : p
        )
      ),
      o ? r : null
    );
  };
  const pa = j.div(({ theme: e }) => ({
    display: 'flex',
    gap: 16,
    borderBottom: `1px solid ${e.appBorderColor}`,
    '&:last-child': { borderBottom: 0 },
  }));
  const Te = j.div(({ numColumn: e }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: e || 1,
    gap: 5,
    padding: '12px 20px',
  }));
  const be = j.div(({ theme: e, width: t, height: r }) => ({
    animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
    background: e.appBorderColor,
    width: t || '100%',
    height: r || 16,
    borderRadius: 3,
  }));
  const _e = [2, 4, 2, 2];
  const hP = () =>
    h.createElement(
      h.Fragment,
      null,
      h.createElement(
        pa,
        null,
        h.createElement(
          Te,
          { numColumn: _e[0] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[1] },
          h.createElement(be, { width: '30%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[2] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[3] },
          h.createElement(be, { width: '60%' })
        )
      ),
      h.createElement(
        pa,
        null,
        h.createElement(
          Te,
          { numColumn: _e[0] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[1] },
          h.createElement(be, { width: '80%' }),
          h.createElement(be, { width: '30%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[2] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[3] },
          h.createElement(be, { width: '60%' })
        )
      ),
      h.createElement(
        pa,
        null,
        h.createElement(
          Te,
          { numColumn: _e[0] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[1] },
          h.createElement(be, { width: '80%' }),
          h.createElement(be, { width: '30%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[2] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[3] },
          h.createElement(be, { width: '60%' })
        )
      ),
      h.createElement(
        pa,
        null,
        h.createElement(
          Te,
          { numColumn: _e[0] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[1] },
          h.createElement(be, { width: '80%' }),
          h.createElement(be, { width: '30%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[2] },
          h.createElement(be, { width: '60%' })
        ),
        h.createElement(
          Te,
          { numColumn: _e[3] },
          h.createElement(be, { width: '60%' })
        )
      )
    );
  const mP = j.div(({ inAddonPanel: e, theme: t }) => ({
    height: e ? '100%' : 'auto',
    display: 'flex',
    border: e ? 'none' : `1px solid ${t.appBorderColor}`,
    borderRadius: e ? 0 : t.appBorderRadius,
    padding: e ? 0 : 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 15,
    background: t.background.content,
    boxShadow: 'rgba(0, 0, 0, 0.10) 0 1px 3px 0',
  }));
  const gP = j.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    maxWidth: 415,
  });
  const yP = j.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textColor,
  }));
  const EP = j.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.regular,
    fontSize: e.typography.size.s2 - 1,
    textAlign: 'center',
    color: e.textMutedColor,
  }));
  const bP = j.div(({ theme: e }) => ({
    display: 'flex',
    fontSize: e.typography.size.s2 - 1,
    gap: 25,
  }));
  const AP = j.div(({ theme: e }) => ({
    width: 1,
    height: 16,
    backgroundColor: e.appBorderColor,
  }));
  const vP = ({ inAddonPanel: e }) => {
    const [t, r] = ne(!0);
    return (
      he(() => {
        const n = setTimeout(() => {
          r(!1);
        }, 100);
        return () => clearTimeout(n);
      }, []),
      t
        ? null
        : h.createElement(
            mP,
            { inAddonPanel: e },
            h.createElement(
              gP,
              null,
              h.createElement(
                yP,
                null,
                e
                  ? 'Interactive story playground'
                  : "Args table with interactive controls couldn't be auto-generated"
              ),
              h.createElement(
                EP,
                null,
                "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."
              )
            ),
            h.createElement(
              bP,
              null,
              e &&
                h.createElement(
                  h.Fragment,
                  null,
                  h.createElement(
                    Et,
                    {
                      href: 'https://youtu.be/0gOfS6K0x0E',
                      target: '_blank',
                      withArrow: !0,
                    },
                    h.createElement(Oe, { icon: 'video' }),
                    ' Watch 5m video'
                  ),
                  h.createElement(AP, null),
                  h.createElement(
                    Et,
                    {
                      href: 'https://storybook.js.org/docs/react/essentials/controls',
                      target: '_blank',
                      withArrow: !0,
                    },
                    'Read docs'
                  )
                ),
              !e &&
                h.createElement(
                  Et,
                  {
                    href: 'https://storybook.js.org/docs/react/essentials/controls',
                    target: '_blank',
                    withArrow: !0,
                  },
                  'Learn how to set that up'
                )
            )
          )
    );
  };
  const DP = j.table(({ theme: e, compact: t, inAddonPanel: r }) => ({
    '&&': {
      borderSpacing: 0,
      color: e.color.defaultText,
      'td, th': {
        padding: 0,
        border: 'none',
        verticalAlign: 'top',
        textOverflow: 'ellipsis',
      },
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      textAlign: 'left',
      width: '100%',
      marginTop: r ? 0 : 25,
      marginBottom: r ? 0 : 40,
      'thead th:first-of-type, td:first-of-type': { width: '25%' },
      'th:first-of-type, td:first-of-type': { paddingLeft: 20 },
      'th:nth-of-type(2), td:nth-of-type(2)': {
        ...(t ? null : { width: '35%' }),
      },
      'td:nth-of-type(3)': { ...(t ? null : { width: '15%' }) },
      'th:last-of-type, td:last-of-type': {
        paddingRight: 20,
        ...(t ? null : { width: '25%' }),
      },
      th: {
        color:
          e.base === 'light'
            ? de(0.25, e.color.defaultText)
            : de(0.45, e.color.defaultText),
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
      },
      td: {
        paddingTop: '10px',
        paddingBottom: '10px',
        '&:not(:first-of-type)': { paddingLeft: 15, paddingRight: 15 },
        '&:last-of-type': { paddingRight: 20 },
      },
      marginLeft: r ? 0 : 1,
      marginRight: r ? 0 : 1,
      tbody: {
        ...(r
          ? null
          : {
              filter:
                e.base === 'light'
                  ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                  : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
            }),
        '> tr > *': {
          background: e.background.content,
          borderTop: `1px solid ${e.appBorderColor}`,
        },
        ...(r
          ? null
          : {
              '> tr:first-of-type > *': {
                borderBlockStart: `1px solid ${e.appBorderColor}`,
              },
              '> tr:last-of-type > *': {
                borderBlockEnd: `1px solid ${e.appBorderColor}`,
              },
              '> tr > *:first-of-type': {
                borderInlineStart: `1px solid ${e.appBorderColor}`,
              },
              '> tr > *:last-of-type': {
                borderInlineEnd: `1px solid ${e.appBorderColor}`,
              },
              '> tr:first-of-type > td:first-of-type': {
                borderTopLeftRadius: e.appBorderRadius,
              },
              '> tr:first-of-type > td:last-of-type': {
                borderTopRightRadius: e.appBorderRadius,
              },
              '> tr:last-of-type > td:first-of-type': {
                borderBottomLeftRadius: e.appBorderRadius,
              },
              '> tr:last-of-type > td:last-of-type': {
                borderBottomRightRadius: e.appBorderRadius,
              },
            }),
      },
    },
  }));
  const CP = j(yt)(({ theme: e }) => ({
    color: e.barTextColor,
    margin: '-4px -12px -4px 0',
  }));
  const xP = j.span({ display: 'flex', justifyContent: 'space-between' });
  const FP = {
    alpha: (e, t) => e.name.localeCompare(t.name),
    requiredFirst: (e, t) =>
      +!!t.type?.required - +!!e.type?.required || e.name.localeCompare(t.name),
    none: void 0,
  };
  const SP = (e, t) => {
    const r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
    if (!e) return r;
    Object.entries(e).forEach(([o, i]) => {
      const { category: u, subcategory: s } = i?.table || {};
      if (u) {
        const p = r.sections[u] || { ungrouped: [], subsections: {} };
        if (!s) p.ungrouped.push({ key: o, ...i });
        else {
          const y = p.subsections[s] || [];
          y.push({ key: o, ...i }), (p.subsections[s] = y);
        }
        r.sections[u] = p;
      } else if (s) {
        const p = r.ungroupedSubsections[s] || [];
        p.push({ key: o, ...i }), (r.ungroupedSubsections[s] = p);
      } else r.ungrouped.push({ key: o, ...i });
    });
    const n = FP[t];
    const a = (o) =>
      n
        ? Object.keys(o).reduce((i, u) => ({ ...i, [u]: o[u].sort(n) }), {})
        : o;
    return {
      ungrouped: r.ungrouped.sort(n),
      ungroupedSubsections: a(r.ungroupedSubsections),
      sections: Object.keys(r.sections).reduce(
        (o, i) => ({
          ...o,
          [i]: {
            ungrouped: r.sections[i].ungrouped.sort(n),
            subsections: a(r.sections[i].subsections),
          },
        }),
        {}
      ),
    };
  };
  const wP = (e, t, r) => {
    try {
      return Mo(e, t, r);
    } catch (n) {
      return xn.warn(n.message), !1;
    }
  };
  const _t = (e) => {
    const {
      updateArgs: t,
      resetArgs: r,
      compact: n,
      inAddonPanel: a,
      initialExpandedArgs: o,
      sort: i = 'none',
      isLoading: u,
    } = e;
    if ('error' in e) {
      const { error: B } = e;
      return h.createElement(
        Ey,
        null,
        B,
        '\xA0',
        h.createElement(
          Et,
          {
            href: 'http://storybook.js.org/docs/',
            target: '_blank',
            withArrow: !0,
          },
          'Read the docs'
        )
      );
    }
    if (u) return h.createElement(hP, null);
    const { rows: s, args: p, globals: y } = 'rows' in e && e;
    const b = SP(
      (0, py.default)(s, (B) => !B?.table?.disable && wP(B, p || {}, y || {})),
      i
    );
    const m = b.ungrouped.length === 0;
    const g = Object.entries(b.sections).length === 0;
    const A = Object.entries(b.ungroupedSubsections).length === 0;
    if (m && g && A) return h.createElement(vP, { inAddonPanel: a });
    let E = 1;
    t && (E += 1), n || (E += 2);
    const x = Object.keys(b.sections).length > 0;
    const F = {
      updateArgs: t,
      compact: n,
      inAddonPanel: a,
      initialExpandedArgs: o,
    };
    return h.createElement(
      Ra,
      null,
      h.createElement(
        DP,
        {
          compact: n,
          inAddonPanel: a,
          className: 'docblock-argstable sb-unstyled',
        },
        h.createElement(
          'thead',
          { className: 'docblock-argstable-head' },
          h.createElement(
            'tr',
            null,
            h.createElement('th', null, h.createElement('span', null, 'Name')),
            n
              ? null
              : h.createElement(
                  'th',
                  null,
                  h.createElement('span', null, 'Description')
                ),
            n
              ? null
              : h.createElement(
                  'th',
                  null,
                  h.createElement('span', null, 'Default')
                ),
            t
              ? h.createElement(
                  'th',
                  null,
                  h.createElement(
                    xP,
                    null,
                    'Control',
                    ' ',
                    !u &&
                      r &&
                      h.createElement(
                        CP,
                        { onClick: () => r(), title: 'Reset controls' },
                        h.createElement(Oe, { icon: 'undo', 'aria-hidden': !0 })
                      )
                  )
                )
              : null
          )
        ),
        h.createElement(
          'tbody',
          { className: 'docblock-argstable-body' },
          b.ungrouped.map((B) =>
            h.createElement(da, {
              key: B.key,
              row: B,
              arg: p && p[B.key],
              ...F,
            })
          ),
          Object.entries(b.ungroupedSubsections).map(([B, I]) =>
            h.createElement(
              Xi,
              { key: B, label: B, level: 'subsection', colSpan: E },
              I.map((L) =>
                h.createElement(da, {
                  key: L.key,
                  row: L,
                  arg: p && p[L.key],
                  expandable: x,
                  ...F,
                })
              )
            )
          ),
          Object.entries(b.sections).map(([B, I]) =>
            h.createElement(
              Xi,
              { key: B, label: B, level: 'section', colSpan: E },
              I.ungrouped.map((L) =>
                h.createElement(da, {
                  key: L.key,
                  row: L,
                  arg: p && p[L.key],
                  ...F,
                })
              ),
              Object.entries(I.subsections).map(([L, w]) =>
                h.createElement(
                  Xi,
                  { key: L, label: L, level: 'subsection', colSpan: E },
                  w.map((k) =>
                    h.createElement(da, {
                      key: k.key,
                      row: k,
                      arg: p && p[k.key],
                      expandable: x,
                      ...F,
                    })
                  )
                )
              )
            )
          )
        )
      )
    );
  };
  const Py = ({ tabs: e, ...t }) => {
    const r = Object.entries(e);
    return r.length === 1
      ? h.createElement(_t, { ...r[0][1], ...t })
      : h.createElement(
          Ia,
          null,
          r.map((n) => {
            const [a, o] = n;
            const i = `prop_table_div_${a}`;
            return h.createElement(
              'div',
              { key: i, id: i, title: a },
              ({ active: u }) =>
                u
                  ? h.createElement(_t, { key: `prop_table_${a}`, ...o, ...t })
                  : null
            );
          })
        );
  };
  const Rre = j.div(({ theme: e }) => ({
    marginRight: 30,
    fontSize: `${e.typography.size.s1}px`,
    color:
      e.base === 'light'
        ? de(0.4, e.color.defaultText)
        : de(0.6, e.color.defaultText),
  }));
  const Pre = j.div({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  });
  const Ire = j.div({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    '&:not(:last-child)': { marginBottom: '1rem' },
  });
  const kre = j.div(Pt, ({ theme: e }) => ({
    ...ha(e),
    margin: '25px 0 40px',
    padding: '30px 20px',
  }));
  const Nre = j.div(({ theme: e }) => ({
    fontWeight: e.typography.weight.bold,
    color: e.color.defaultText,
  }));
  const Mre = j.div(({ theme: e }) => ({
    color:
      e.base === 'light'
        ? de(0.2, e.color.defaultText)
        : de(0.6, e.color.defaultText),
  }));
  const Lre = j.div({ flex: '0 0 30%', lineHeight: '20px', marginTop: 5 });
  const jre = j.div(({ theme: e }) => ({
    flex: 1,
    textAlign: 'center',
    fontFamily: e.typography.fonts.mono,
    fontSize: e.typography.size.s1,
    lineHeight: 1,
    overflow: 'hidden',
    color:
      e.base === 'light'
        ? de(0.4, e.color.defaultText)
        : de(0.6, e.color.defaultText),
    '> div': {
      display: 'inline-block',
      overflow: 'hidden',
      maxWidth: '100%',
      textOverflow: 'ellipsis',
    },
    span: { display: 'block', marginTop: 2 },
  }));
  const qre = j.div({ display: 'flex', flexDirection: 'row' });
  const $re = j.div(({ background: e }) => ({
    position: 'relative',
    flex: 1,
    '&::before': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: e,
      content: '""',
    },
  }));
  const Ure = j.div(({ theme: e }) => ({
    ...ha(e),
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    marginBottom: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    backgroundImage:
      'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
    backgroundClip: 'padding-box',
  }));
  const Hre = j.div({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    position: 'relative',
    marginBottom: 30,
  });
  const zre = j.div({ flex: 1, display: 'flex', flexDirection: 'row' });
  const Wre = j.div({ display: 'flex', alignItems: 'flex-start' });
  const Gre = j.div({ flex: '0 0 30%' });
  const Vre = j.div({ flex: 1 });
  const Kre = j.div(({ theme: e }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    fontWeight: e.typography.weight.bold,
    color:
      e.base === 'light'
        ? de(0.4, e.color.defaultText)
        : de(0.6, e.color.defaultText),
  }));
  const Yre = j.div(({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    lineHeight: '20px',
    display: 'flex',
    flexDirection: 'column',
  }));
  const Xre = j.div(({ theme: e }) => ({
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s2,
    color: e.color.defaultText,
    marginLeft: 10,
    lineHeight: 1.2,
  }));
  const Jre = j.div(({ theme: e }) => ({
    ...ha(e),
    overflow: 'hidden',
    height: 40,
    width: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none',
    '> img, > svg': { width: 20, height: 20 },
  }));
  const Qre = j.div({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    flex: '0 1 calc(20% - 10px)',
    minWidth: 120,
    margin: '0px 10px 30px 0',
  });
  const Zre = j.div({ display: 'flex', flexFlow: 'row wrap' });
  const BP = (e) => `anchor--${e}`;
  const TP = ({ storyId: e, children: t }) =>
    h.createElement('div', { id: BP(e), className: 'sb-anchor' }, t);
  ue &&
    ue.__DOCS_CONTEXT__ === void 0 &&
    ((ue.__DOCS_CONTEXT__ = pr(null)),
    (ue.__DOCS_CONTEXT__.displayName = 'DocsContext'));
  const Qe = ue ? ue.__DOCS_CONTEXT__ : pr(null);
  const lu = (e, t) => qe(Qe).resolveOf(e, t);
  const cu = '^';
  const _P = (e) =>
    e
      .split('-')
      .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
      .join('');
  const Iy = (e) => {
    if (e)
      return typeof e === 'string'
        ? e.includes('-')
          ? _P(e)
          : e
        : e.__docgenInfo && e.__docgenInfo.displayName
        ? e.__docgenInfo.displayName
        : e.name;
  };
  function ky(e, t) {
    const r = du([e], t);
    return r && r[0];
  }
  function du(e, t) {
    const [r, n] = ne({});
    return (
      he(() => {
        Promise.all(
          e.map(async (a) => {
            const o = await t.loadStory(a);
            n((i) => (i[a] === o ? i : { ...i, [a]: o }));
          })
        );
      }),
      e.map((a) => {
        if (r[a]) return r[a];
        try {
          return t.storyById(a);
        } catch {
          return null;
        }
      })
    );
  }
  const OP = (e, t) => {
    const r = t.getStoryContext(t.storyById());
    const [n, a] = ne(r.args);
    he(() => {
      const u = (s) => {
        s.storyId === e && a(s.args);
      };
      return t.channel.on(On, u), () => t.channel.off(On, u);
    }, [e]);
    const o = ge(
      (u) => t.channel.emit(Rn, { storyId: e, updatedArgs: u }),
      [e]
    );
    const i = ge((u) => t.channel.emit(_n, { storyId: e, argNames: u }), [e]);
    return [n, o, i];
  };
  const RP = (e) => {
    const t = e.getStoryContext(e.storyById());
    const [r, n] = ne(t.globals);
    return (
      he(() => {
        const a = (o) => {
          n(o.globals);
        };
        return e.channel.on(Tn, a), () => e.channel.off(Tn, a);
      }, []),
      [r]
    );
  };
  const Ny = (e, t, r, n) => {
    const { extractArgTypes: a } = t.docs || {};
    if (!a)
      throw new Error(
        'Args unsupported. See Args documentation for your framework.'
      );
    let o = a(e);
    return (o = Nr(o, r, n)), o;
  };
  const cy = (e) => e && [cu].includes(e);
  const PP = (e = {}, t) => {
    const { of: r } = e;
    const { story: n } = e;
    if (cy(r) || cy(n)) return t || null;
    if (!r) throw new Error('No component found.');
    return r;
  };
  const ru = (e, t, r, n, a, o) => ({
    ...e,
    ...(0, gy.default)(t, (i) => ({ rows: Ny(i, r, n, a), sort: o })),
  });
  const IP = (e) => {
    const t = qe(Qe);
    const {
      story: r,
      component: n,
      subcomponents: a,
      showComponent: o,
      include: i,
      exclude: u,
      sort: s,
    } = e;
    try {
      let p;
      switch (r) {
        case cu: {
          p = t.storyById().id;
          break;
        }
        default:
          p = t.storyIdByName(r);
      }
      const y = ky(p, t);
      let [b, m, g] = OP(p, t);
      const [A] = RP(t);
      if (!y)
        return h.createElement(_t, {
          isLoading: !0,
          updateArgs: m,
          resetArgs: g,
        });
      const E = Nr(y.argTypes, i, u);
      const x = Iy(n) || 'Story';
      let F = {
        [x]: { rows: E, args: b, globals: A, updateArgs: m, resetArgs: g },
      };
      const B = E && Object.values(E).find((I) => !!I?.control);
      if (
        (B || ((m = null), (g = null), (F = {})),
        n && (!B || o) && (F = ru(F, { [x]: n }, y.parameters, i, u)),
        a)
      ) {
        if (Array.isArray(a))
          throw new Error(
            'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
          );
        F = ru(F, a, y.parameters, i, u);
      }
      return h.createElement(Py, { tabs: F, sort: s });
    } catch (p) {
      return h.createElement(_t, { error: p.message });
    }
  };
  const dy = (e) => {
    const { components: t, include: r, exclude: n, sort: a, parameters: o } = e;
    const i = ru({}, t, o, r, n);
    return h.createElement(Py, { tabs: i, sort: a });
  };
  const kP = (e) => {
    ye(ve`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `);
    const t = qe(Qe);
    let r;
    let n;
    let a;
    try {
      ({ parameters: r, component: n, subcomponents: a } = t.storyById());
    } catch {
      const { of: g } = e;
      if ('of' in e && g === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        );
      ({
        projectAnnotations: { parameters: r },
      } = t.resolveOf(g, ['component']));
    }
    const { include: o, exclude: i, components: u, sort: s } = e;
    const { story: p } = e;
    const y = s || r.controls?.sort;
    const b = PP(e, n);
    if (p)
      return h.createElement(IP, {
        ...e,
        component: b,
        subcomponents: a,
        sort: y,
      });
    if (!u && !a) {
      let g;
      try {
        g = { rows: Ny(b, r, o, i) };
      } catch (A) {
        g = { error: A.message };
      }
      return h.createElement(_t, { ...g, sort: y });
    }
    if (u)
      return h.createElement(dy, {
        ...e,
        components: u,
        sort: y,
        parameters: r,
      });
    const m = Iy(b);
    return h.createElement(dy, {
      ...e,
      components: { [m]: b, ...a },
      sort: y,
      parameters: r,
    });
  };
  kP.defaultProps = { of: cu };
  function NP(e) {
    return Wm(e);
  }
  const MP = pr({ sources: {} });
  const LP = '--unknown--';
  var jP = ((e) => (
    (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
  ))(jP || {});
  const qP = (e) => {
    const t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean);
    return t.length === 0 ? 'closed' : t[0];
  };
  const $P = (e, t, r) => {
    const { sources: n } = r;
    const a = n?.[e];
    return a?.[NP(t)] || a?.[LP] || { code: '' };
  };
  const UP = ({
    snippet: e,
    storyContext: t,
    typeFromProps: r,
    transformFromProps: n,
  }) => {
    const { __isArgsStory: a } = t.parameters;
    const o = t.parameters.docs?.source || {};
    const i = r || o.type || zr.AUTO;
    if (o.code !== void 0) return o.code;
    const u =
      i === zr.DYNAMIC || (i === zr.AUTO && e && a)
        ? e
        : o.originalSource || '';
    return (
      o.transformSource &&
        ye(ve`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      t.parameters.docs?.transformSource &&
        ye(ve`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      t.parameters.jsx?.transformSource &&
        ye(ve`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
      (
        n ??
        o.transform ??
        o.transformSource ??
        t.parameters.docs?.transformSource ??
        t.parameters.jsx?.transformSource
      )?.(u, t) || u
    );
  };
  const My = (e, t, r) => {
    const n = e.ids || (e.id ? [e.id] : []);
    const a = du(n, t);
    let o = a;
    const { of: i } = e;
    if ('of' in e && i === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    if (i) o = [t.resolveOf(i, ['story']).story];
    else if (o.length === 0)
      try {
        o = [t.storyById()];
      } catch {}
    if (!a.every(Boolean))
      return { error: 'Oh no! The source is not available.', state: 'none' };
    const u = o[0]?.parameters?.docs?.source || {};
    let { code: s } = e;
    let p = e.format ?? u.format;
    const y = e.language ?? u.language ?? 'jsx';
    const b = e.dark ?? u.dark ?? !1;
    s ||
      (s = o.map((g, A) => {
        if (!g) return '';
        const E = t.getStoryContext(g);
        const x = e.__forceInitialArgs ? E.initialArgs : E.unmappedArgs;
        const F = $P(g.id, x, r);
        return (
          A === 0 && (p = F.format ?? g.parameters.docs?.source?.format ?? !1),
          UP({
            snippet: F.code,
            storyContext: { ...E, args: x },
            typeFromProps: e.type,
            transformFromProps: e.transform,
          })
        );
      }).join(`

`));
    const m = qP(o);
    return s
      ? { code: s, format: p, language: y, dark: b, state: m }
      : { error: 'Oh no! The source is not available.', state: m };
  };
  const Ly = (e, t) => {
    const { id: r, of: n, meta: a, story: o } = e;
    if ('of' in e && n === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    if (r)
      return (
        ye(ve`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        r
      );
    const { name: i } = e;
    return i
      ? (ye(ve`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        t.storyIdByName(i))
      : (o &&
          ye(ve`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
        a && t.referenceMeta(a, !1),
        t.resolveOf(n || o || 'story', ['story']).story.id);
  };
  const HP = (e, t, r) => {
    const { parameters: n = {} } = t || {};
    const { docs: a = {} } = n;
    const o = a.story || {};
    if (a.disable) return null;
    const { inlineStories: i, iframeHeight: u } = a;
    typeof i < 'u' &&
      ye(ve`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
    const s = e.inline ?? o.inline ?? i ?? !1;
    if (
      (typeof u < 'u' &&
        ye(ve`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
      s)
    ) {
      const y = e.height ?? o.height;
      const b = e.autoplay ?? o.autoplay ?? !1;
      return {
        story: t,
        inline: !0,
        height: y,
        autoplay: b,
        forceInitialArgs: !!e.__forceInitialArgs,
        primary: !!e.__primary,
        renderStoryToElement: r.renderStoryToElement,
      };
    }
    const p = e.height ?? o.height ?? o.iframeHeight ?? u ?? '100px';
    return { story: t, inline: !1, height: p, primary: !!e.__primary };
  };
  const zP = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
    const t = qe(Qe);
    const r = Ly(e, t);
    const n = ky(r, t);
    if (!n) return h.createElement(iu, null);
    const a = HP(e, n, t);
    return a ? h.createElement(B4, { ...a }) : null;
  };
  const WP = (
    { withSource: e, mdxSource: t, children: r, layout: n, ...a },
    o,
    i
  ) => {
    const u = Jr.toArray(r)
      .filter((m) => m.props && (m.props.id || m.props.name || m.props.of))
      .map((m) => Ly(m.props, o));
    const s = du(u, o);
    const p = s.some((m) => !m);
    const y = My(
      {
        ...(t ? { code: decodeURI(t) } : { ids: u }),
        ...(a.of && { of: a.of }),
      },
      o,
      i
    );
    if (e === 'none') return { isLoading: p, previewProps: a };
    let b = n;
    return (
      Jr.forEach(r, (m) => {
        b || (b = m?.props?.parameters?.layout);
      }),
      s.forEach((m) => {
        b ||
          !m ||
          (b = m?.parameters.layout ?? m.parameters.docs?.canvas?.layout);
      }),
      {
        isLoading: p,
        previewProps: {
          ...a,
          layout: b ?? 'padded',
          withSource: y,
          isExpanded: (e || y.state) === 'open',
        },
      }
    );
  };
  const GP = (e) => {
    const t = qe(Qe);
    const r = qe(MP);
    const { children: n, of: a, source: o } = e;
    if ('of' in e && a === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    const { isLoading: i, previewProps: u } = WP(e, t, r);
    let s;
    let p;
    let y;
    try {
      ({ story: s } = lu(a || 'story', ['story']));
    } catch (x) {
      n || (y = x);
    }
    try {
      p = My({ ...o, ...(a && { of: a }) }, t, r);
    } catch (x) {
      n || (y = x);
    }
    if (y) throw y;
    if (
      (e.withSource &&
        ye(ve`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      e.mdxSource &&
        ye(ve`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      (e.isColumn !== void 0 || e.columns !== void 0) &&
        ye(ve`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
      n)
    )
      return (
        ye(ve`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
        i ? h.createElement(N4, null) : h.createElement(Qi, { ...u }, n)
      );
    const b =
      e.layout ??
      s.parameters.layout ??
      s.parameters.docs?.canvas?.layout ??
      'padded';
    const m = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1;
    const g =
      e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions;
    const A =
      e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? 'hidden';
    const E = e.className ?? s.parameters.docs?.canvas?.className;
    return h.createElement(
      Qi,
      {
        withSource: A === 'none' ? void 0 : p,
        isExpanded: A === 'shown',
        withToolbar: m,
        additionalActions: g,
        className: E,
        layout: b,
      },
      h.createElement(zP, { of: a || s.moduleExport, meta: e.meta, ...e.story })
    );
  };
  const { document: jy } = ue;
  const VP = ({ className: e, children: t, ...r }) => {
    if (typeof e !== 'string' && (typeof t !== 'string' || !t.match(/[\n\r]/g)))
      return h.createElement(Fa, null, t);
    const n = e && e.split('-');
    return h.createElement(au, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    });
  };
  function pu(e, t) {
    e.channel.emit(Xf, t);
  }
  const nu = La.a;
  const KP = ({ hash: e, children: t }) => {
    const r = qe(Qe);
    return h.createElement(
      nu,
      {
        href: e,
        target: '_self',
        onClick: (n) => {
          const a = e.substring(1);
          jy.getElementById(a) && pu(r, e);
        },
      },
      t
    );
  };
  const YP = (e) => {
    const { href: t, target: r, children: n, ...a } = e;
    const o = qe(Qe);
    if (t) {
      if (t.startsWith('#')) return h.createElement(KP, { hash: t }, n);
      if (r !== '_blank' && !t.startsWith('https://'))
        return h.createElement(
          nu,
          {
            href: t,
            onClick: (i) => {
              i.button === 0 &&
                !i.altKey &&
                !i.ctrlKey &&
                !i.metaKey &&
                !i.shiftKey &&
                (i.preventDefault(),
                pu(o, i.currentTarget.getAttribute('href')));
            },
            target: r,
            ...a,
          },
          n
        );
    }
    return h.createElement(nu, { ...e });
  };
  const qy = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const XP = qy.reduce(
    (e, t) => ({
      ...e,
      [t]: j(t)({
        '& svg': { position: 'relative', top: '-0.1em', visibility: 'hidden' },
        '&:hover svg': { visibility: 'visible' },
      }),
    }),
    {}
  );
  const JP = j.a(() => ({
    float: 'left',
    lineHeight: 'inherit',
    paddingRight: '10px',
    marginLeft: '-24px',
    color: 'inherit',
  }));
  const QP = ({ as: e, id: t, children: r, ...n }) => {
    const a = qe(Qe);
    const o = XP[e];
    const i = `#${t}`;
    return h.createElement(
      o,
      { id: t, ...n },
      h.createElement(
        JP,
        {
          'aria-hidden': 'true',
          href: i,
          tabIndex: -1,
          target: '_self',
          onClick: (u) => {
            jy.getElementById(t) && pu(a, i);
          },
        },
        h.createElement(Oe, { icon: 'link' })
      ),
      r
    );
  };
  const fu = (e) => {
    const { as: t, id: r, children: n, ...a } = e;
    if (r) return h.createElement(QP, { as: t, id: r, ...a }, n);
    const o = t;
    const { as: i, ...u } = e;
    return h.createElement(o, { ...qa(u, t) });
  };
  const ZP = qy.reduce(
    (e, t) => ({ ...e, [t]: (r) => h.createElement(fu, { as: t, ...r }) }),
    {}
  );
  const eI = (e) => {
    if (!e.children) return null;
    if (typeof e.children !== 'string')
      throw new Error(ve`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
    return h.createElement(Go, {
      ...e,
      options: {
        forceBlock: !0,
        overrides: { code: VP, a: YP, ...ZP, ...e?.options?.overrides },
        ...e?.options,
      },
    });
  };
  var tI = ((e) => (
    (e.INFO = 'info'),
    (e.NOTES = 'notes'),
    (e.DOCGEN = 'docgen'),
    (e.AUTO = 'auto'),
    e
  ))(tI || {});
  const fa =
    'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo';
  const rI = (e) =>
    e && (typeof e === 'string' ? e : Zn(e.markdown) || Zn(e.text));
  const nI = (e) => e && (typeof e === 'string' ? e : Zn(e.text));
  const aI = (e) => null;
  const oI = (e) => {
    switch (e.type) {
      case 'story':
        return e.story.parameters.docs?.description?.story || null;
      case 'meta': {
        const { parameters: t, component: r } = e.preparedMeta;
        return (
          t.docs?.description?.component ||
          t.docs?.extractComponentDescription?.(r, {
            component: r,
            parameters: t,
          }) ||
          null
        );
      }
      case 'component': {
        const {
          component: t,
          projectAnnotations: { parameters: r },
        } = e;
        return (
          r.docs?.extractComponentDescription?.(t, {
            component: t,
            parameters: r,
          }) || null
        );
      }
      default:
        throw new Error(
          `Unrecognized module type resolved from 'useOf', got: ${e.type}`
        );
    }
  };
  const iI = ({ type: e, markdown: t, children: r }, { storyById: n }) => {
    const { component: a, parameters: o } = n();
    if (r || t) return r || t;
    const { notes: i, info: u, docs: s } = o;
    (i || u) &&
      ye(
        `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${fa}`
      );
    const { extractComponentDescription: p = aI, description: y } = s || {};
    const b = y?.component;
    if (b) return b;
    switch (e) {
      case 'info':
        return nI(u);
      case 'notes':
        return rI(i);
      case 'docgen':
      case 'auto':
      default:
        return p(a, { component: a, ...o });
    }
  };
  const uI = (e) => {
    const { of: t, type: r, markdown: n, children: a } = e;
    if ('of' in e && t === void 0)
      throw new Error(
        'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
      );
    const o = qe(Qe);
    const i = lu(t || 'meta');
    let u;
    return (
      r || n || a ? (u = iI(e, o)) : (u = oI(i)),
      r && ye(`Manually specifying description type is deprecated. See ${fa}`),
      n &&
        ye(
          `The 'markdown' prop on the Description block is deprecated. See ${fa}`
        ),
      a &&
        ye(
          `The 'children' prop on the Description block is deprecated. See ${fa}`
        ),
      u ? h.createElement(eI, null, u) : null
    );
  };
  const ene = j.div(({ theme: e }) => ({
    width: '10rem',
    '@media (max-width: 768px)': { display: 'none' },
  }));
  const tne = j.div(({ theme: e }) => ({
    position: 'fixed',
    top: 0,
    width: '10rem',
    paddingTop: '4rem',
    fontFamily: e.typography.fonts.base,
    fontSize: e.typography.size.s2,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    WebkitOverflowScrolling: 'touch',
    '& *': { boxSizing: 'border-box' },
    '& > .toc-wrapper > .toc-list': {
      paddingLeft: 0,
      borderLeft: `solid 2px ${e.color.mediumlight}`,
      '.toc-list': {
        paddingLeft: 0,
        borderLeft: `solid 2px ${e.color.mediumlight}`,
        '.toc-list': {
          paddingLeft: 0,
          borderLeft: `solid 2px ${e.color.mediumlight}`,
        },
      },
    },
    '& .toc-list-item': {
      position: 'relative',
      listStyleType: 'none',
      marginLeft: 20,
      paddingTop: 3,
      paddingBottom: 3,
    },
    '& .toc-list-item::before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      top: 0,
      left: 0,
      transform: 'translateX(calc(-2px - 20px))',
      borderLeft: `solid 2px ${e.color.mediumdark}`,
      opacity: 0,
      transition: 'opacity 0.2s',
    },
    '& .toc-list-item.is-active-li::before': { opacity: 1 },
    '& .toc-list-item > a': {
      color: e.color.defaultText,
      textDecoration: 'none',
    },
    '& .toc-list-item.is-active-li > a': {
      fontWeight: 600,
      color: e.color.secondary,
      textDecoration: 'none',
    },
  }));
  const rne = j.p(({ theme: e }) => ({
    fontWeight: 600,
    fontSize: '0.875em',
    color: e.textColor,
    textTransform: 'uppercase',
    marginBottom: 10,
  }));
  const { document: nne, window: ane } = ue;
  const sI = ({ children: e, disableAnchor: t }) => {
    if (t || typeof e !== 'string') return h.createElement(Ta, null, e);
    const r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return h.createElement(fu, { as: 'h3', id: r }, e);
  };
  const lI = ({
    of: e,
    expanded: t = !0,
    withToolbar: r = !1,
    __forceInitialArgs: n = !1,
    __primary: a = !1,
  }) => {
    const { story: o } = lu(e || 'story', ['story']);
    const i = o.parameters.docs?.canvas?.withToolbar ?? r;
    return h.createElement(
      TP,
      { storyId: o.id },
      t &&
        h.createElement(
          h.Fragment,
          null,
          h.createElement(sI, null, o.name),
          h.createElement(uI, { of: e })
        ),
      h.createElement(GP, {
        of: e,
        withToolbar: i,
        story: { __forceInitialArgs: n, __primary: a },
        source: { __forceInitialArgs: n },
      })
    );
  };
  const cI = ({ children: e, disableAnchor: t, ...r }) => {
    if (t || typeof e !== 'string') return h.createElement(Ba, null, e);
    const n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-');
    return h.createElement(fu, { as: 'h2', id: n, ...r }, e);
  };
  const dI = j(cI)(({ theme: e }) => ({
    fontSize: `${e.typography.size.s2 - 1}px`,
    fontWeight: e.typography.weight.bold,
    lineHeight: '16px',
    letterSpacing: '0.35em',
    textTransform: 'uppercase',
    color: e.textMutedColor,
    border: 0,
    marginBottom: '12px',
    '&:first-of-type': { marginTop: '56px' },
  }));
  const pI = ({ title: e, includePrimary: t = !0 }) => {
    const { componentStories: r } = qe(Qe);
    let n = r().filter((a) => !a.parameters?.docs?.disable);
    return (
      t || (n = n.slice(1)),
      !n || n.length === 0
        ? null
        : h.createElement(
            h.Fragment,
            null,
            h.createElement(dI, null, e),
            n.map(
              (a) =>
                a &&
                h.createElement(lI, {
                  key: a.id,
                  of: a.moduleExport,
                  expanded: !0,
                  __forceInitialArgs: !0,
                })
            )
          )
    );
  };
  pI.defaultProps = { title: 'Stories' };
  const fI = () => {
    const [e, t] = ne(!0);
    const [r, n, a] = vu();
    const [o] = Du();
    const i = va();
    const { expanded: u, sort: s, presetColors: p } = Cu(Ea, {});
    const { path: y, previewInitialized: b } = xu();
    he(() => {
      b && t(!1);
    }, [b]);
    const m = Object.values(i).some((A) => A?.control);
    const g = Object.entries(i).reduce(
      (A, [E, x]) => (
        x?.control?.type !== 'color' || x?.control?.presetColors
          ? (A[E] = x)
          : (A[E] = { ...x, control: { ...x.control, presetColors: p } }),
        A
      ),
      {}
    );
    return h.createElement(_t, {
      key: y,
      compact: !u && m,
      rows: g,
      args: r,
      globals: o,
      updateArgs: n,
      resetArgs: a,
      inAddonPanel: !0,
      sort: s,
      isLoading: e,
    });
  };
  function hI() {
    const e = va();
    const t = Object.values(e).filter(
      (r) => r?.control && !r?.table?.disable
    ).length;
    return h.createElement(
      'div',
      null,
      h.createElement(
        Pa,
        { col: 1 },
        h.createElement(
          'span',
          { style: { display: 'inline-block', verticalAlign: 'middle' } },
          'Controls'
        ),
        t === 0 ? '' : h.createElement(xa, { status: 'neutral' }, t)
      )
    );
  }
  Aa.register(ya, (e) => {
    Aa.add(ya, {
      title: hI,
      type: Au.PANEL,
      paramKey: Ea,
      render: ({ active: t }) =>
        !t || !e.getCurrentStoryData()
          ? null
          : h.createElement(Ca, { active: t }, h.createElement(fI, null)),
    });
  });
} catch (e) {
  console.error(
    `[Storybook] One of your manager-entries failed: ${import.meta.url}`,
    e
  );
}
