try {
  const ae = Object.create;
  const H = Object.defineProperty;
  const le = Object.getOwnPropertyDescriptor;
  const pe = Object.getOwnPropertyNames;
  const he = Object.getPrototypeOf;
  const ue = Object.prototype.hasOwnProperty;
  const R = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, { get: (t, o) => (typeof require < 'u' ? require : t)[o] })
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error(`Dynamic require of "${e}" is not supported`);
  });
  const M = (e, t) => () => (e && (t = e((e = 0))), t);
  const de = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t), t.exports
  );
  const me = (e, t, o, n) => {
    if ((t && typeof t === 'object') || typeof t === 'function')
      for (const p of pe(t))
        !ue.call(e, p) &&
          p !== o &&
          H(e, p, {
            get: () => t[p],
            enumerable: !(n = le(t, p)) || n.enumerable,
          });
    return e;
  };
  const ce = (e, t, o) => (
    (o = e != null ? ae(he(e)) : {}),
    me(
      t || !e || !e.__esModule
        ? H(o, 'default', { value: e, enumerable: !0 })
        : o,
      e
    )
  );
  const c = M(() => {});
  const f = M(() => {});
  const g = M(() => {});
  const te = de((ee, V) => {
    c();
    f();
    g();
    (function (e) {
      if (typeof ee === 'object' && typeof V < 'u') V.exports = e();
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
      let o;
      return (function n(p, m, h) {
        function r(s, y) {
          if (!m[s]) {
            if (!p[s]) {
              const u = typeof R === 'function' && R;
              if (!y && u) return u(s, !0);
              if (i) return i(s, !0);
              const b = new Error(`Cannot find module '${s}'`);
              throw ((b.code = 'MODULE_NOT_FOUND'), b);
            }
            const l = (m[s] = { exports: {} });
            p[s][0].call(
              l.exports,
              (a) => {
                const d = p[s][1][a];
                return r(d || a);
              },
              l,
              l.exports,
              n,
              p,
              m,
              h
            );
          }
          return m[s].exports;
        }
        for (var i = typeof R === 'function' && R, x = 0; x < h.length; x++)
          r(h[x]);
        return r;
      })(
        {
          1: [
            function (n, p, m) {
              p.exports = function (h) {
                if (typeof Map !== 'function' || h) {
                  const r = n('./similar');
                  return new r();
                }
                return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (n, p, m) {
              function h() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (h.prototype.get = function (r) {
                let i;
                if (this.lastItem && this.isEqual(this.lastItem.key, r))
                  return this.lastItem.val;
                if (((i = this.indexOf(r)), i >= 0))
                  return (this.lastItem = this.list[i]), this.list[i].val;
              }),
                (h.prototype.set = function (r, i) {
                  let x;
                  return this.lastItem && this.isEqual(this.lastItem.key, r)
                    ? ((this.lastItem.val = i), this)
                    : ((x = this.indexOf(r)),
                      x >= 0
                        ? ((this.lastItem = this.list[x]),
                          (this.list[x].val = i),
                          this)
                        : ((this.lastItem = { key: r, val: i }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (h.prototype.delete = function (r) {
                  let i;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, r) &&
                      (this.lastItem = void 0),
                    (i = this.indexOf(r)),
                    i >= 0)
                  )
                    return this.size--, this.list.splice(i, 1)[0];
                }),
                (h.prototype.has = function (r) {
                  let i;
                  return this.lastItem && this.isEqual(this.lastItem.key, r)
                    ? !0
                    : ((i = this.indexOf(r)),
                      i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1);
                }),
                (h.prototype.forEach = function (r, i) {
                  let x;
                  for (x = 0; x < this.size; x++)
                    r.call(i || this, this.list[x].val, this.list[x].key, this);
                }),
                (h.prototype.indexOf = function (r) {
                  let i;
                  for (i = 0; i < this.size; i++)
                    if (this.isEqual(this.list[i].key, r)) return i;
                  return -1;
                }),
                (h.prototype.isEqual = function (r, i) {
                  return r === i || (r !== r && i !== i);
                }),
                (p.exports = h);
            },
            {},
          ],
          3: [
            function (n, p, m) {
              const h = n('map-or-similar');
              p.exports = function (s) {
                const y = new h(!1);
                const u = [];
                return function (b) {
                  const l = function () {
                    let a = y;
                    let d;
                    let A;
                    const I = arguments.length - 1;
                    const k = Array(I + 1);
                    let E = !0;
                    let O;
                    if ((l.numArgs || l.numArgs === 0) && l.numArgs !== I + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      );
                    for (O = 0; O < I; O++) {
                      if (
                        ((k[O] = { cacheItem: a, arg: arguments[O] }),
                        a.has(arguments[O]))
                      ) {
                        a = a.get(arguments[O]);
                        continue;
                      }
                      (E = !1),
                        (d = new h(!1)),
                        a.set(arguments[O], d),
                        (a = d);
                    }
                    return (
                      E &&
                        (a.has(arguments[I])
                          ? (A = a.get(arguments[I]))
                          : (E = !1)),
                      E ||
                        ((A = b.apply(null, arguments)),
                        a.set(arguments[I], A)),
                      s > 0 &&
                        ((k[I] = { cacheItem: a, arg: arguments[I] }),
                        E ? r(u, k) : u.push(k),
                        u.length > s && i(u.shift())),
                      (l.wasMemoized = E),
                      (l.numArgs = I + 1),
                      A
                    );
                  };
                  return (
                    (l.limit = s),
                    (l.wasMemoized = !1),
                    (l.cache = y),
                    (l.lru = u),
                    l
                  );
                };
              };
              function r(s, y) {
                const u = s.length;
                const b = y.length;
                let l;
                let a;
                let d;
                for (a = 0; a < u; a++) {
                  for (l = !0, d = 0; d < b; d++)
                    if (!x(s[a][d].arg, y[d].arg)) {
                      l = !1;
                      break;
                    }
                  if (l) break;
                }
                s.push(s.splice(a, 1)[0]);
              }
              function i(s) {
                const y = s.length;
                let u = s[y - 1];
                let b;
                let l;
                for (
                  u.cacheItem.delete(u.arg), l = y - 2;
                  l >= 0 &&
                  ((u = s[l]), (b = u.cacheItem.get(u.arg)), !b || !b.size);
                  l--
                )
                  u.cacheItem.delete(u.arg);
              }
              function x(s, y) {
                return s === y || (s !== s && y !== y);
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
  c();
  f();
  g();
  c();
  f();
  g();
  c();
  f();
  g();
  c();
  f();
  g();
  const w = 'storybook/viewport';
  const q = 'viewport';
  const Ne = `${w}/update`;
  const Ve = `${w}/configure`;
  const Be = `${w}/setStoryDefaultViewport`;
  const ze = `${w}/viewportChanged`;
  const W = (e, t) => e.indexOf(t);
  const fe = (e, t) => {
    const o = W(e, t);
    return o === e.length - 1 ? e[0] : e[o + 1];
  };
  const ge = (e, t) => {
    const o = W(e, t);
    return o < 1 ? e[e.length - 1] : e[o - 1];
  };
  const F = async (e, t, o) => {
    await e.setAddonShortcut(w, {
      label: 'Previous viewport',
      defaultShortcut: ['shift', 'V'],
      actionName: 'previous',
      action: () => {
        const { selected: n, isRotated: p } = e.getAddonState(w);
        t({ selected: ge(o, n), isRotated: p });
      },
    }),
      await e.setAddonShortcut(w, {
        label: 'Next viewport',
        defaultShortcut: ['V'],
        actionName: 'next',
        action: () => {
          const { selected: n, isRotated: p } = e.getAddonState(w);
          t({ selected: fe(o, n), isRotated: p });
        },
      }),
      await e.setAddonShortcut(w, {
        label: 'Reset viewport',
        defaultShortcut: ['alt', 'V'],
        actionName: 'reset',
        action: () => {
          const { isRotated: n } = e.getAddonState(w);
          t({ selected: 'reset', isRotated: n });
        },
      });
  };
  c();
  f();
  g();
  const G = {
    mobile1: {
      name: 'Small mobile',
      styles: { height: '568px', width: '320px' },
      type: 'mobile',
    },
    mobile2: {
      name: 'Large mobile',
      styles: { height: '896px', width: '414px' },
      type: 'mobile',
    },
    tablet: {
      name: 'Tablet',
      styles: { height: '1112px', width: '834px' },
      type: 'tablet',
    },
  };
  c();
  f();
  g();
  const S = __REACT__;
  const {
    Children: $e,
    Component: je,
    Fragment: Y,
    Profiler: Xe,
    PureComponent: Ke,
    StrictMode: Ze,
    Suspense: Je,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Qe,
    cloneElement: et,
    createContext: tt,
    createElement: U,
    createFactory: it,
    createRef: rt,
    forwardRef: ot,
    isValidElement: nt,
    lazy: st,
    memo: $,
    useCallback: at,
    useContext: lt,
    useDebugValue: pt,
    useEffect: L,
    useImperativeHandle: ht,
    useLayoutEffect: ut,
    useMemo: dt,
    useReducer: mt,
    useRef: j,
    useState: X,
    version: ct,
  } = __REACT__;
  c();
  f();
  g();
  const yt = __STORYBOOKAPI__;
  const {
    ActiveTabs: bt,
    Consumer: wt,
    ManagerContext: St,
    Provider: It,
    addons: N,
    combineParameters: Tt,
    controlOrMetaKey: _t,
    controlOrMetaSymbol: vt,
    eventMatchesShortcut: Ot,
    eventToShortcut: Et,
    isMacLike: Pt,
    isShortcutTaken: Rt,
    keyToSymbol: Ct,
    merge: At,
    mockChannel: kt,
    optionOrAltSymbol: Lt,
    shortcutMatchesShortcut: Mt,
    shortcutToHumanString: Nt,
    types: K,
    useAddonState: Z,
    useArgTypes: Vt,
    useArgs: Bt,
    useChannel: zt,
    useGlobalTypes: Dt,
    useGlobals: Ht,
    useParameter: J,
    useSharedState: qt,
    useStoryPrepared: Wt,
    useStorybookApi: Q,
    useStorybookState: Ft,
  } = __STORYBOOKAPI__;
  const D = ce(te(), 1);
  c();
  f();
  g();
  const Jt = __STORYBOOKTHEMING__;
  const {
    CacheProvider: Qt,
    ClassNames: ei,
    Global: ie,
    ThemeProvider: ti,
    background: ii,
    color: ri,
    convert: oi,
    create: ni,
    createCache: si,
    createGlobal: ai,
    createReset: li,
    css: pi,
    darken: hi,
    ensure: ui,
    ignoreSsrWarning: di,
    isPropValid: mi,
    jsx: ci,
    keyframes: fi,
    lighten: gi,
    styled: C,
    themes: xi,
    typography: yi,
    useTheme: bi,
    withTheme: re,
  } = __STORYBOOKTHEMING__;
  c();
  f();
  g();
  const _i = __STORYBOOKCOMPONENTS__;
  const {
    A: vi,
    ActionBar: Oi,
    AddonPanel: Ei,
    Badge: Pi,
    Bar: Ri,
    Blockquote: Ci,
    Button: Ai,
    ClipboardCode: ki,
    Code: Li,
    DL: Mi,
    Div: Ni,
    DocumentWrapper: Vi,
    ErrorFormatter: Bi,
    FlexBar: zi,
    Form: Di,
    H1: Hi,
    H2: qi,
    H3: Wi,
    H4: Fi,
    H5: Gi,
    H6: Yi,
    HR: Ui,
    IconButton: B,
    IconButtonSkeleton: $i,
    Icons: z,
    Img: ji,
    LI: Xi,
    Link: Ki,
    ListItem: Zi,
    Loader: Ji,
    OL: Qi,
    P: er,
    Placeholder: tr,
    Pre: ir,
    ResetWrapper: rr,
    ScrollArea: or,
    Separator: nr,
    Spaced: sr,
    Span: ar,
    StorybookIcon: lr,
    StorybookLogo: pr,
    Symbols: hr,
    SyntaxHighlighter: ur,
    TT: dr,
    TabBar: mr,
    TabButton: cr,
    TabWrapper: fr,
    Table: gr,
    Tabs: xr,
    TabsState: yr,
    TooltipLinkList: oe,
    TooltipMessage: br,
    TooltipNote: wr,
    UL: Sr,
    WithTooltip: ne,
    WithTooltipPure: Ir,
    Zoom: Tr,
    codeCommon: _r,
    components: vr,
    createCopyToClipboardFunction: Or,
    getStoryHref: Er,
    icons: Pr,
    interleaveSeparators: Rr,
    nameSpaceClassNames: Cr,
    resetComponents: Ar,
    withReset: kr,
  } = __STORYBOOKCOMPONENTS__;
  const ye = (0, D.default)(50)((e) => [
    ...be,
    ...Object.entries(e).map(([t, { name: o, ...n }]) => ({
      ...n,
      id: t,
      title: o,
    })),
  ]);
  const P = {
    id: 'reset',
    title: 'Reset viewport',
    styles: null,
    type: 'other',
  };
  var be = [P];
  const we = (0, D.default)(50)((e, t, o, n, p) =>
    e
      .filter((m) => m.id !== P.id || t.id !== m.id)
      .map((m) => ({
        ...m,
        onClick: () => {
          o({ ...n, selected: m.id }), p();
        },
      }))
  );
  const Se = 'storybook-preview-wrapper';
  const Ie = ({ width: e, height: t, ...o }) => ({ ...o, height: e, width: t });
  const Te = C.div(() => ({ display: 'inline-flex' }));
  const se = C.div(({ theme: e }) => ({
    display: 'inline-block',
    textDecoration: 'none',
    padding: 10,
    fontWeight: e.typography.weight.bold,
    fontSize: e.typography.size.s2 - 1,
    lineHeight: '1',
    height: 40,
    border: 'none',
    borderTop: '3px solid transparent',
    borderBottom: '3px solid transparent',
    background: 'transparent',
  }));
  const _e = C(B)(() => ({ display: 'inline-flex', alignItems: 'center' }));
  const ve = C.div(({ theme: e }) => ({
    fontSize: e.typography.size.s2 - 1,
    marginLeft: 10,
  }));
  const Oe = (e, t, o) => {
    if (t === null) return;
    const n = typeof t === 'function' ? t(e) : t;
    return o ? Ie(n) : n;
  };
  const Ee = $(
    re(({ theme: e }) => {
      const {
        viewports: t = G,
        defaultOrientation: o = 'portrait',
        defaultViewport: n = P.id,
        disable: p,
      } = J(q, {});
      const [m, h] = Z(w, { selected: n, isRotated: o === 'landscape' });
      const r = ye(t);
      const i = Q();
      const [x, s] = X(!1);
      r.find((d) => d.id === n) ||
        console.warn(
          `Cannot find "defaultViewport" of "${n}" in addon-viewport configs, please check the "viewports" setting in the configuration.`
        ),
        L(() => {
          F(i, h, Object.keys(t));
        }, [t]),
        L(() => {
          h({
            selected: n || (m.selected && t[m.selected] ? m.selected : P.id),
            isRotated: o === 'landscape',
          });
        }, [o, n]);
      const { selected: y, isRotated: u } = m;
      const b =
        r.find((d) => d.id === y) ||
        r.find((d) => d.id === n) ||
        r.find((d) => d.default) ||
        P;
      const l = j();
      const a = Oe(l.current, b.styles, u);
      return (
        L(() => {
          l.current = a;
        }, [b]),
        p || Object.entries(t).length === 0
          ? null
          : S.createElement(
              Y,
              null,
              S.createElement(
                ne,
                {
                  placement: 'top',
                  tooltip: ({ onHide: d }) =>
                    S.createElement(oe, { links: we(r, b, h, m, d) }),
                  closeOnOutsideClick: !0,
                  onVisibleChange: s,
                },
                S.createElement(
                  _e,
                  {
                    key: 'viewport',
                    title: 'Change the size of the preview',
                    active: x || !!a,
                    onDoubleClick: () => {
                      h({ ...m, selected: P.id });
                    },
                  },
                  S.createElement(z, { icon: 'grow' }),
                  a
                    ? S.createElement(
                        ve,
                        null,
                        u ? `${b.title} (L)` : `${b.title} (P)`
                      )
                    : null
                )
              ),
              a
                ? S.createElement(
                    Te,
                    null,
                    S.createElement(ie, {
                      styles: {
                        'iframe[data-is-storybook="true"]': {
                          margin: 'auto',
                          transition: 'none',
                          position: 'relative',
                          border: '1px solid black',
                          boxShadow: '0 0 100px 100vw rgba(0,0,0,0.5)',
                          ...a,
                        },
                        [`#${Se}`]: {
                          padding: e.layoutMargin,
                          alignContent: 'center',
                          alignItems: 'center',
                          justifyContent: 'center',
                          justifyItems: 'center',
                          overflow: 'auto',
                          display: 'grid',
                          gridTemplateColumns: '100%',
                          gridTemplateRows: '100%',
                        },
                      },
                    }),
                    S.createElement(
                      se,
                      { title: 'Viewport width' },
                      a.width.replace('px', '')
                    ),
                    S.createElement(
                      B,
                      {
                        key: 'viewport-rotate',
                        title: 'Rotate viewport',
                        onClick: () => {
                          h({ ...m, isRotated: !u });
                        },
                      },
                      S.createElement(z, { icon: 'transfer' })
                    ),
                    S.createElement(
                      se,
                      { title: 'Viewport height' },
                      a.height.replace('px', '')
                    )
                  )
                : null
            )
      );
    })
  );
  N.register(w, () => {
    N.add(w, {
      title: 'viewport / media-queries',
      type: K.TOOL,
      match: ({ viewMode: e }) => e === 'story',
      render: () => U(Ee, null),
    });
  });
} catch (e) {
  console.error(
    `[Storybook] One of your manager-entries failed: ${import.meta.url}`,
    e
  );
}
