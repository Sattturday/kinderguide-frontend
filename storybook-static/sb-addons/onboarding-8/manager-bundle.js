try {
  const ry = Object.create;
  const Wr = Object.defineProperty;
  const oy = Object.getOwnPropertyDescriptor;
  const iy = Object.getOwnPropertyNames;
  const ay = Object.getPrototypeOf;
  const sy = Object.prototype.hasOwnProperty;
  const Yr = (t, e) => () => (t && (e = t((t = 0))), e);
  const ly = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  const uy = (t, e) => {
    for (const n in e) Wr(t, n, { get: e[n], enumerable: !0 });
  };
  const Kl = (t, e, n, r) => {
    if ((e && typeof e === 'object') || typeof e === 'function')
      for (const o of iy(e))
        !sy.call(t, o) &&
          o !== n &&
          Wr(t, o, {
            get: () => e[o],
            enumerable: !(r = oy(e, o)) || r.enumerable,
          });
    return t;
  };
  const cy = (t, e, n) => (
    (n = t != null ? ry(ay(t)) : {}),
    Kl(
      e || !t || !t.__esModule
        ? Wr(n, 'default', { value: t, enumerable: !0 })
        : n,
      t
    )
  );
  const Ql = (t) => Kl(Wr({}, '__esModule', { value: !0 }), t);
  const vt = Yr(() => {});
  let re;
  const gt = Yr(() => {
    re = {
      NODE_ENV: 'production',
      NODE_PATH: [],
      STORYBOOK: 'true',
      PUBLIC_URL: '.',
    };
  });
  const yt = Yr(() => {});
  const Yn = {};
  uy(Yn, {
    Children: () => Gt,
    Component: () => fy,
    Fragment: () => Se,
    Profiler: () => dy,
    PureComponent: () => hy,
    StrictMode: () => my,
    Suspense: () => Oi,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => vy,
    cloneElement: () => Ve,
    createContext: () => Yt,
    createElement: () => q,
    createFactory: () => gy,
    createRef: () => Si,
    default: () => g,
    forwardRef: () => ct,
    isValidElement: () => Pe,
    lazy: () => Pi,
    memo: () => yy,
    useCallback: () => xt,
    useContext: () => mt,
    useDebugValue: () => by,
    useEffect: () => W,
    useImperativeHandle: () => wy,
    useLayoutEffect: () => Wn,
    useMemo: () => It,
    useReducer: () => Ti,
    useRef: () => nt,
    useState: () => at,
    version: () => Ey,
  });
  let g;
  let Gt;
  let fy;
  let Se;
  let dy;
  let hy;
  let my;
  let Oi;
  let vy;
  let Ve;
  let Yt;
  let q;
  let gy;
  let Si;
  let ct;
  let Pe;
  let Pi;
  let yy;
  let xt;
  let mt;
  let by;
  let W;
  let wy;
  let Wn;
  let It;
  let Ti;
  let nt;
  let at;
  let Ey;
  const qn = Yr(() => {
    vt();
    gt();
    yt();
    (g = __REACT__),
      ({
        Children: Gt,
        Component: fy,
        Fragment: Se,
        Profiler: dy,
        PureComponent: hy,
        StrictMode: my,
        Suspense: Oi,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: vy,
        cloneElement: Ve,
        createContext: Yt,
        createElement: q,
        createFactory: gy,
        createRef: Si,
        forwardRef: ct,
        isValidElement: Pe,
        lazy: Pi,
        memo: yy,
        useCallback: xt,
        useContext: mt,
        useDebugValue: by,
        useEffect: W,
        useImperativeHandle: wy,
        useLayoutEffect: Wn,
        useMemo: It,
        useReducer: Ti,
        useRef: nt,
        useState: at,
        version: Ey,
      } = __REACT__);
  });
  const Jl = ly((Gn, ki) => {
    vt();
    gt();
    yt();
    (function (t, e) {
      typeof Gn === 'object' && typeof ki === 'object'
        ? (ki.exports = e((qn(), Ql(Yn))))
        : typeof define === 'function' && define.amd
        ? define(['react'], e)
        : typeof Gn === 'object'
        ? (Gn.ReactConfetti = e((qn(), Ql(Yn))))
        : (t.ReactConfetti = e(t.React));
    })(
      typeof self < 'u' ? self : Gn,
      (t) =>
        (function (e) {
          const n = {};
          function r(o) {
            if (n[o]) return n[o].exports;
            const i = (n[o] = { i: o, l: !1, exports: {} });
            return e[o].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
          }
          return (
            (r.m = e),
            (r.c = n),
            (r.d = function (o, i, a) {
              r.o(o, i) ||
                Object.defineProperty(o, i, { enumerable: !0, get: a });
            }),
            (r.r = function (o) {
              typeof Symbol < 'u' &&
                Symbol.toStringTag &&
                Object.defineProperty(o, Symbol.toStringTag, {
                  value: 'Module',
                }),
                Object.defineProperty(o, '__esModule', { value: !0 });
            }),
            (r.t = function (o, i) {
              if (
                (1 & i && (o = r(o)),
                8 & i || (4 & i && typeof o === 'object' && o && o.__esModule))
              )
                return o;
              const a = Object.create(null);
              if (
                (r.r(a),
                Object.defineProperty(a, 'default', {
                  enumerable: !0,
                  value: o,
                }),
                2 & i && typeof o !== 'string')
              )
                for (const s in o) r.d(a, s, ((l) => o[l]).bind(null, s));
              return a;
            }),
            (r.n = function (o) {
              const i =
                o && o.__esModule
                  ? function () {
                      return o.default;
                    }
                  : function () {
                      return o;
                    };
              return r.d(i, 'a', i), i;
            }),
            (r.o = function (o, i) {
              return Object.prototype.hasOwnProperty.call(o, i);
            }),
            (r.p = ''),
            r((r.s = 2))
          );
        })([
          function (e, n) {
            e.exports = t;
          },
          function (e, n, r) {
            var o = {
              linear(i, a, s, l) {
                return ((s - a) * i) / l + a;
              },
              easeInQuad(i, a, s, l) {
                return (s - a) * (i /= l) * i + a;
              },
              easeOutQuad(i, a, s, l) {
                return -(s - a) * (i /= l) * (i - 2) + a;
              },
              easeInOutQuad(i, a, s, l) {
                const u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i + a
                  : (-u / 2) * (--i * (i - 2) - 1) + a;
              },
              easeInCubic(i, a, s, l) {
                return (s - a) * (i /= l) * i * i + a;
              },
              easeOutCubic(i, a, s, l) {
                return (s - a) * ((i = i / l - 1) * i * i + 1) + a;
              },
              easeInOutCubic(i, a, s, l) {
                const u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i * i + a
                  : (u / 2) * ((i -= 2) * i * i + 2) + a;
              },
              easeInQuart(i, a, s, l) {
                return (s - a) * (i /= l) * i * i * i + a;
              },
              easeOutQuart(i, a, s, l) {
                return -(s - a) * ((i = i / l - 1) * i * i * i - 1) + a;
              },
              easeInOutQuart(i, a, s, l) {
                const u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i * i * i + a
                  : (-u / 2) * ((i -= 2) * i * i * i - 2) + a;
              },
              easeInQuint(i, a, s, l) {
                return (s - a) * (i /= l) * i * i * i * i + a;
              },
              easeOutQuint(i, a, s, l) {
                return (s - a) * ((i = i / l - 1) * i * i * i * i + 1) + a;
              },
              easeInOutQuint(i, a, s, l) {
                const u = s - a;
                return (i /= l / 2) < 1
                  ? (u / 2) * i * i * i * i * i + a
                  : (u / 2) * ((i -= 2) * i * i * i * i + 2) + a;
              },
              easeInSine(i, a, s, l) {
                const u = s - a;
                return -u * Math.cos((i / l) * (Math.PI / 2)) + u + a;
              },
              easeOutSine(i, a, s, l) {
                return (s - a) * Math.sin((i / l) * (Math.PI / 2)) + a;
              },
              easeInOutSine(i, a, s, l) {
                return (-(s - a) / 2) * (Math.cos((Math.PI * i) / l) - 1) + a;
              },
              easeInExpo(i, a, s, l) {
                return i == 0 ? a : (s - a) * 2 ** (10 * (i / l - 1)) + a;
              },
              easeOutExpo(i, a, s, l) {
                const u = s - a;
                return i == l ? a + u : u * (1 - 2 ** ((-10 * i) / l)) + a;
              },
              easeInOutExpo(i, a, s, l) {
                const u = s - a;
                return i === 0
                  ? a
                  : i === l
                  ? a + u
                  : (i /= l / 2) < 1
                  ? (u / 2) * 2 ** (10 * (i - 1)) + a
                  : (u / 2) * (2 - 2 ** (-10 * --i)) + a;
              },
              easeInCirc(i, a, s, l) {
                return -(s - a) * (Math.sqrt(1 - (i /= l) * i) - 1) + a;
              },
              easeOutCirc(i, a, s, l) {
                return (s - a) * Math.sqrt(1 - (i = i / l - 1) * i) + a;
              },
              easeInOutCirc(i, a, s, l) {
                const u = s - a;
                return (i /= l / 2) < 1
                  ? (-u / 2) * (Math.sqrt(1 - i * i) - 1) + a
                  : (u / 2) * (Math.sqrt(1 - (i -= 2) * i) + 1) + a;
              },
              easeInElastic(i, a, s, l) {
                let u;
                let c;
                let f;
                const p = s - a;
                return (
                  (f = 1.70158),
                  i === 0
                    ? a
                    : (i /= l) == 1
                    ? a + p
                    : ((c = 0) || (c = 0.3 * l),
                      (u = p) < Math.abs(p)
                        ? ((u = p), (f = c / 4))
                        : (f = (c / (2 * Math.PI)) * Math.asin(p / u)),
                      -u *
                        2 ** (10 * (i -= 1)) *
                        Math.sin(((i * l - f) * (2 * Math.PI)) / c) +
                        a)
                );
              },
              easeOutElastic(i, a, s, l) {
                let u;
                let c;
                let f;
                const p = s - a;
                return (
                  (f = 1.70158),
                  i === 0
                    ? a
                    : (i /= l) == 1
                    ? a + p
                    : ((c = 0) || (c = 0.3 * l),
                      (u = p) < Math.abs(p)
                        ? ((u = p), (f = c / 4))
                        : (f = (c / (2 * Math.PI)) * Math.asin(p / u)),
                      u *
                        2 ** (-10 * i) *
                        Math.sin(((i * l - f) * (2 * Math.PI)) / c) +
                        p +
                        a)
                );
              },
              easeInOutElastic(i, a, s, l) {
                let u;
                let c;
                let f;
                const p = s - a;
                return (
                  (f = 1.70158),
                  i === 0
                    ? a
                    : (i /= l / 2) == 2
                    ? a + p
                    : ((c = 0) || (c = l * 0.44999999999999996),
                      (u = p) < Math.abs(p)
                        ? ((u = p), (f = c / 4))
                        : (f = (c / (2 * Math.PI)) * Math.asin(p / u)),
                      i < 1
                        ? u *
                            2 ** (10 * (i -= 1)) *
                            Math.sin(((i * l - f) * (2 * Math.PI)) / c) *
                            -0.5 +
                          a
                        : u *
                            2 ** (-10 * (i -= 1)) *
                            Math.sin(((i * l - f) * (2 * Math.PI)) / c) *
                            0.5 +
                          p +
                          a)
                );
              },
              easeInBack(i, a, s, l, u) {
                return (
                  u === void 0 && (u = 1.70158),
                  (s - a) * (i /= l) * i * ((u + 1) * i - u) + a
                );
              },
              easeOutBack(i, a, s, l, u) {
                return (
                  u === void 0 && (u = 1.70158),
                  (s - a) * ((i = i / l - 1) * i * ((u + 1) * i + u) + 1) + a
                );
              },
              easeInOutBack(i, a, s, l, u) {
                const c = s - a;
                return (
                  u === void 0 && (u = 1.70158),
                  (i /= l / 2) < 1
                    ? (c / 2) * (i * i * ((1 + (u *= 1.525)) * i - u)) + a
                    : (c / 2) *
                        ((i -= 2) * i * ((1 + (u *= 1.525)) * i + u) + 2) +
                      a
                );
              },
              easeInBounce(i, a, s, l) {
                const u = s - a;
                return u - o.easeOutBounce(l - i, 0, u, l) + a;
              },
              easeOutBounce(i, a, s, l) {
                const u = s - a;
                return (i /= l) < 0.36363636363636365
                  ? u * (7.5625 * i * i) + a
                  : i < 0.7272727272727273
                  ? u * (7.5625 * (i -= 0.5454545454545454) * i + 0.75) + a
                  : i < 0.9090909090909091
                  ? u * (7.5625 * (i -= 0.8181818181818182) * i + 0.9375) + a
                  : u * (7.5625 * (i -= 0.9545454545454546) * i + 0.984375) + a;
              },
              easeInOutBounce(i, a, s, l) {
                const u = s - a;
                return i < l / 2
                  ? 0.5 * o.easeInBounce(2 * i, 0, u, l) + a
                  : 0.5 * o.easeOutBounce(2 * i - l, 0, u, l) + 0.5 * u + a;
              },
            };
            e.exports = o;
          },
          function (e, n, r) {
            e.exports = r(3);
          },
          function (e, n, r) {
            r.r(n), r.d(n, 'ReactConfetti', () => z);
            let o;
            let i;
            const a = r(0);
            const s = r.n(a);
            const l = r(1);
            const u = r.n(l);
            function c(P, T) {
              return P + Math.random() * (T - P);
            }
            function f(P, T) {
              for (let k = 0; k < T.length; k++) {
                const C = T[k];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(P, C.key, C);
              }
            }
            function p(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            (function (P) {
              (P[(P.Circle = 0)] = 'Circle'),
                (P[(P.Square = 1)] = 'Square'),
                (P[(P.Strip = 2)] = 'Strip');
            })(o || (o = {})),
              (function (P) {
                (P[(P.Positive = 1)] = 'Positive'),
                  (P[(P.Negative = -1)] = 'Negative');
              })(i || (i = {}));
            const d = (function () {
              function P($, Q, V, it) {
                (function (wi, zn) {
                  if (!(wi instanceof zn))
                    throw new TypeError('Cannot call a class as a function');
                })(this, P),
                  p(this, 'context', void 0),
                  p(this, 'radius', void 0),
                  p(this, 'x', void 0),
                  p(this, 'y', void 0),
                  p(this, 'w', void 0),
                  p(this, 'h', void 0),
                  p(this, 'vx', void 0),
                  p(this, 'vy', void 0),
                  p(this, 'shape', void 0),
                  p(this, 'angle', void 0),
                  p(this, 'angularSpin', void 0),
                  p(this, 'color', void 0),
                  p(this, 'rotateY', void 0),
                  p(this, 'rotationDirection', void 0),
                  p(this, 'getOptions', void 0),
                  (this.getOptions = Q);
                let lt;
                let ot;
                const Et = this.getOptions();
                const Ee = Et.colors;
                const Dt = Et.initialVelocityX;
                const an = Et.initialVelocityY;
                (this.context = $),
                  (this.x = V),
                  (this.y = it),
                  (this.w = c(5, 20)),
                  (this.h = c(5, 20)),
                  (this.radius = c(5, 10)),
                  (this.vx =
                    typeof Dt === 'number' ? c(-Dt, Dt) : c(Dt.min, Dt.max)),
                  (this.vy =
                    typeof an === 'number' ? c(-an, 0) : c(an.min, an.max)),
                  (this.shape =
                    ((lt = 0),
                    (ot = 2),
                    Math.floor(lt + Math.random() * (ot - lt + 1)))),
                  (this.angle = (c(0, 360) * Math.PI) / 180),
                  (this.angularSpin = c(-0.2, 0.2)),
                  (this.color = Ee[Math.floor(Math.random() * Ee.length)]),
                  (this.rotateY = c(0, 1)),
                  (this.rotationDirection = c(0, 1) ? i.Positive : i.Negative);
              }
              let T;
              let k;
              let C;
              return (
                (T = P),
                (k = [
                  {
                    key: 'update',
                    value() {
                      const $ = this.getOptions();
                      const Q = $.gravity;
                      const V = $.wind;
                      const it = $.friction;
                      const lt = $.opacity;
                      const ot = $.drawShape;
                      (this.x += this.vx),
                        (this.y += this.vy),
                        (this.vy += Q),
                        (this.vx += V),
                        (this.vx *= it),
                        (this.vy *= it),
                        this.rotateY >= 1 &&
                        this.rotationDirection === i.Positive
                          ? (this.rotationDirection = i.Negative)
                          : this.rotateY <= -1 &&
                            this.rotationDirection === i.Negative &&
                            (this.rotationDirection = i.Positive);
                      const Et = 0.1 * this.rotationDirection;
                      if (
                        ((this.rotateY += Et),
                        (this.angle += this.angularSpin),
                        this.context.save(),
                        this.context.translate(this.x, this.y),
                        this.context.rotate(this.angle),
                        this.context.scale(1, this.rotateY),
                        this.context.rotate(this.angle),
                        this.context.beginPath(),
                        (this.context.fillStyle = this.color),
                        (this.context.strokeStyle = this.color),
                        (this.context.globalAlpha = lt),
                        (this.context.lineCap = 'round'),
                        (this.context.lineWidth = 2),
                        ot && typeof ot === 'function')
                      )
                        ot.call(this, this.context);
                      else
                        switch (this.shape) {
                          case o.Circle:
                            this.context.beginPath(),
                              this.context.arc(
                                0,
                                0,
                                this.radius,
                                0,
                                2 * Math.PI
                              ),
                              this.context.fill();
                            break;
                          case o.Square:
                            this.context.fillRect(
                              -this.w / 2,
                              -this.h / 2,
                              this.w,
                              this.h
                            );
                            break;
                          case o.Strip:
                            this.context.fillRect(
                              -this.w / 6,
                              -this.h / 2,
                              this.w / 3,
                              this.h
                            );
                        }
                      this.context.closePath(), this.context.restore();
                    },
                  },
                ]) && f(T.prototype, k),
                C && f(T, C),
                P
              );
            })();
            function h(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            const m = function P(T, k) {
              const C = this;
              (function (Q, V) {
                if (!(Q instanceof V))
                  throw new TypeError('Cannot call a class as a function');
              })(this, P),
                h(this, 'canvas', void 0),
                h(this, 'context', void 0),
                h(this, 'getOptions', void 0),
                h(this, 'x', 0),
                h(this, 'y', 0),
                h(this, 'w', 0),
                h(this, 'h', 0),
                h(this, 'lastNumberOfPieces', 0),
                h(this, 'tweenInitTime', Date.now()),
                h(this, 'particles', []),
                h(this, 'particlesGenerated', 0),
                h(this, 'removeParticleAt', (Q) => {
                  C.particles.splice(Q, 1);
                }),
                h(this, 'getParticle', () => {
                  const Q = c(C.x, C.w + C.x);
                  const V = c(C.y, C.h + C.y);
                  return new d(C.context, C.getOptions, Q, V);
                }),
                h(this, 'animate', () => {
                  const Q = C.canvas;
                  const V = C.context;
                  const it = C.particlesGenerated;
                  const lt = C.lastNumberOfPieces;
                  const ot = C.getOptions();
                  const Et = ot.run;
                  const Ee = ot.recycle;
                  const Dt = ot.numberOfPieces;
                  const an = ot.debug;
                  const wi = ot.tweenFunction;
                  const zn = ot.tweenDuration;
                  if (!Et) return !1;
                  const Ei = C.particles.length;
                  const Un = Ee ? Ei : it;
                  const xi = Date.now();
                  if (Un < Dt) {
                    lt !== Dt &&
                      ((C.tweenInitTime = xi), (C.lastNumberOfPieces = Dt));
                    for (
                      var ql = C.tweenInitTime,
                        ny = wi(
                          xi - ql > zn ? zn : Math.max(0, xi - ql),
                          Un,
                          Dt,
                          zn
                        ),
                        Gl = Math.round(ny - Un),
                        Xl = 0;
                      Xl < Gl;
                      Xl++
                    )
                      C.particles.push(C.getParticle());
                    C.particlesGenerated += Gl;
                  }
                  return (
                    an &&
                      ((V.font = '12px sans-serif'),
                      (V.fillStyle = '#333'),
                      (V.textAlign = 'right'),
                      V.fillText(
                        'Particles: '.concat(Ei),
                        Q.width - 10,
                        Q.height - 20
                      )),
                    C.particles.forEach((Hn, _l) => {
                      Hn.update(),
                        (Hn.y > Q.height ||
                          Hn.y < -100 ||
                          Hn.x > Q.width + 100 ||
                          Hn.x < -100) &&
                          (Ee && Un <= Dt
                            ? (C.particles[_l] = C.getParticle())
                            : C.removeParticleAt(_l));
                    }),
                    Ei > 0 || Un < Dt
                  );
                }),
                (this.canvas = T);
              const $ = this.canvas.getContext('2d');
              if (!$) throw new Error('Could not get canvas context');
              (this.context = $), (this.getOptions = k);
            };
            function y(P, T) {
              const k = Object.keys(P);
              if (Object.getOwnPropertySymbols) {
                let C = Object.getOwnPropertySymbols(P);
                T &&
                  (C = C.filter(
                    ($) => Object.getOwnPropertyDescriptor(P, $).enumerable
                  )),
                  k.push.apply(k, C);
              }
              return k;
            }
            function E(P) {
              for (let T = 1; T < arguments.length; T++) {
                var k = arguments[T] != null ? arguments[T] : {};
                T % 2
                  ? y(Object(k), !0).forEach((C) => {
                      b(P, C, k[C]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      P,
                      Object.getOwnPropertyDescriptors(k)
                    )
                  : y(Object(k)).forEach((C) => {
                      Object.defineProperty(
                        P,
                        C,
                        Object.getOwnPropertyDescriptor(k, C)
                      );
                    });
              }
              return P;
            }
            function x(P, T) {
              for (let k = 0; k < T.length; k++) {
                const C = T[k];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(P, C.key, C);
              }
            }
            function b(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            const w = {
              width: typeof window < 'u' ? window.innerWidth : 300,
              height: typeof window < 'u' ? window.innerHeight : 200,
              numberOfPieces: 200,
              friction: 0.99,
              wind: 0,
              gravity: 0.1,
              initialVelocityX: 4,
              initialVelocityY: 10,
              colors: [
                '#f44336',
                '#e91e63',
                '#9c27b0',
                '#673ab7',
                '#3f51b5',
                '#2196f3',
                '#03a9f4',
                '#00bcd4',
                '#009688',
                '#4CAF50',
                '#8BC34A',
                '#CDDC39',
                '#FFEB3B',
                '#FFC107',
                '#FF9800',
                '#FF5722',
                '#795548',
              ],
              opacity: 1,
              debug: !1,
              tweenFunction: u.a.easeInOutQuad,
              tweenDuration: 5e3,
              recycle: !0,
              run: !0,
            };
            const O = (function () {
              function P($, Q) {
                const V = this;
                (function (lt, ot) {
                  if (!(lt instanceof ot))
                    throw new TypeError('Cannot call a class as a function');
                })(this, P),
                  b(this, 'canvas', void 0),
                  b(this, 'context', void 0),
                  b(this, '_options', void 0),
                  b(this, 'generator', void 0),
                  b(this, 'rafId', void 0),
                  b(this, 'setOptionsWithDefaults', (lt) => {
                    const ot = {
                      confettiSource: { x: 0, y: 0, w: V.canvas.width, h: 0 },
                    };
                    (V._options = E(E(E({}, ot), w), lt)),
                      Object.assign(V, lt.confettiSource);
                  }),
                  b(this, 'update', () => {
                    const lt = V.options;
                    const ot = lt.run;
                    const Et = lt.onConfettiComplete;
                    const Ee = V.canvas;
                    const Dt = V.context;
                    ot &&
                      ((Dt.fillStyle = 'white'),
                      Dt.clearRect(0, 0, Ee.width, Ee.height)),
                      V.generator.animate()
                        ? (V.rafId = requestAnimationFrame(V.update))
                        : (Et &&
                            typeof Et === 'function' &&
                            V.generator.particlesGenerated > 0 &&
                            Et.call(V, V),
                          (V._options.run = !1));
                  }),
                  b(this, 'reset', () => {
                    V.generator &&
                      V.generator.particlesGenerated > 0 &&
                      ((V.generator.particlesGenerated = 0),
                      (V.generator.particles = []),
                      (V.generator.lastNumberOfPieces = 0));
                  }),
                  b(this, 'stop', () => {
                    (V.options = { run: !1 }),
                      V.rafId &&
                        (cancelAnimationFrame(V.rafId), (V.rafId = void 0));
                  }),
                  (this.canvas = $);
                const it = this.canvas.getContext('2d');
                if (!it) throw new Error('Could not get canvas context');
                (this.context = it),
                  (this.generator = new m(this.canvas, () => V.options)),
                  (this.options = Q),
                  this.update();
              }
              let T;
              let k;
              let C;
              return (
                (T = P),
                (k = [
                  {
                    key: 'options',
                    get() {
                      return this._options;
                    },
                    set($) {
                      const Q = this._options && this._options.run;
                      const V = this._options && this._options.recycle;
                      this.setOptionsWithDefaults($),
                        this.generator &&
                          (Object.assign(
                            this.generator,
                            this.options.confettiSource
                          ),
                          typeof $.recycle === 'boolean' &&
                            $.recycle &&
                            V === !1 &&
                            (this.generator.lastNumberOfPieces =
                              this.generator.particles.length)),
                        typeof $.run === 'boolean' &&
                          $.run &&
                          Q === !1 &&
                          this.update();
                    },
                  },
                ]) && x(T.prototype, k),
                C && x(T, C),
                P
              );
            })();
            function S(P) {
              return (
                (function (T) {
                  if (Array.isArray(T)) return ht(T);
                })(P) ||
                (function (T) {
                  if (typeof Symbol < 'u' && Symbol.iterator in Object(T))
                    return Array.from(T);
                })(P) ||
                rt(P) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function M(P) {
              return (M =
                typeof Symbol === 'function' &&
                typeof Symbol.iterator === 'symbol'
                  ? function (T) {
                      return typeof T;
                    }
                  : function (T) {
                      return T &&
                        typeof Symbol === 'function' &&
                        T.constructor === Symbol &&
                        T !== Symbol.prototype
                        ? 'symbol'
                        : typeof T;
                    })(P);
            }
            function N() {
              return (N =
                Object.assign ||
                function (P) {
                  for (let T = 1; T < arguments.length; T++) {
                    const k = arguments[T];
                    for (const C in k)
                      Object.prototype.hasOwnProperty.call(k, C) &&
                        (P[C] = k[C]);
                  }
                  return P;
                }).apply(this, arguments);
            }
            function B(P, T) {
              const k = Object.keys(P);
              if (Object.getOwnPropertySymbols) {
                let C = Object.getOwnPropertySymbols(P);
                T &&
                  (C = C.filter(
                    ($) => Object.getOwnPropertyDescriptor(P, $).enumerable
                  )),
                  k.push.apply(k, C);
              }
              return k;
            }
            function X(P) {
              for (let T = 1; T < arguments.length; T++) {
                var k = arguments[T] != null ? arguments[T] : {};
                T % 2
                  ? B(Object(k), !0).forEach((C) => {
                      Mt(P, C, k[C]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      P,
                      Object.getOwnPropertyDescriptors(k)
                    )
                  : B(Object(k)).forEach((C) => {
                      Object.defineProperty(
                        P,
                        C,
                        Object.getOwnPropertyDescriptor(k, C)
                      );
                    });
              }
              return P;
            }
            function et(P, T) {
              return (
                (function (k) {
                  if (Array.isArray(k)) return k;
                })(P) ||
                (function (k, C) {
                  if (
                    !(typeof Symbol > 'u' || !(Symbol.iterator in Object(k)))
                  ) {
                    const $ = [];
                    let Q = !0;
                    let V = !1;
                    let it = void 0;
                    try {
                      for (
                        var lt, ot = k[Symbol.iterator]();
                        !(Q = (lt = ot.next()).done) &&
                        ($.push(lt.value), !C || $.length !== C);
                        Q = !0
                      );
                    } catch (Et) {
                      (V = !0), (it = Et);
                    } finally {
                      try {
                        Q || ot.return == null || ot.return();
                      } finally {
                        if (V) throw it;
                      }
                    }
                    return $;
                  }
                })(P, T) ||
                rt(P, T) ||
                (function () {
                  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function rt(P, T) {
              if (P) {
                if (typeof P === 'string') return ht(P, T);
                let k = Object.prototype.toString.call(P).slice(8, -1);
                return (
                  k === 'Object' && P.constructor && (k = P.constructor.name),
                  k === 'Map' || k === 'Set'
                    ? Array.from(P)
                    : k === 'Arguments' ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k)
                    ? ht(P, T)
                    : void 0
                );
              }
            }
            function ht(P, T) {
              (T == null || T > P.length) && (T = P.length);
              for (var k = 0, C = new Array(T); k < T; k++) C[k] = P[k];
              return C;
            }
            function Tt(P, T) {
              if (!(P instanceof T))
                throw new TypeError('Cannot call a class as a function');
            }
            function Ct(P, T) {
              for (let k = 0; k < T.length; k++) {
                const C = T[k];
                (C.enumerable = C.enumerable || !1),
                  (C.configurable = !0),
                  'value' in C && (C.writable = !0),
                  Object.defineProperty(P, C.key, C);
              }
            }
            function Ft(P, T) {
              return (Ft =
                Object.setPrototypeOf ||
                function (k, C) {
                  return (k.__proto__ = C), k;
                })(P, T);
            }
            function St(P) {
              const T = (function () {
                if (
                  typeof Reflect > 'u' ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if (typeof Proxy === 'function') return !0;
                try {
                  return (
                    Date.prototype.toString.call(
                      Reflect.construct(Date, [], () => {})
                    ),
                    !0
                  );
                } catch {
                  return !1;
                }
              })();
              return function () {
                let k;
                const C = ne(P);
                if (T) {
                  const $ = ne(this).constructor;
                  k = Reflect.construct(C, arguments, $);
                } else k = C.apply(this, arguments);
                return Nt(this, k);
              };
            }
            function Nt(P, T) {
              return !T || (M(T) !== 'object' && typeof T !== 'function')
                ? Wt(P)
                : T;
            }
            function Wt(P) {
              if (P === void 0)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return P;
            }
            function ne(P) {
              return (ne = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (T) {
                    return T.__proto__ || Object.getPrototypeOf(T);
                  })(P);
            }
            function Mt(P, T, k) {
              return (
                T in P
                  ? Object.defineProperty(P, T, {
                      value: k,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (P[T] = k),
                P
              );
            }
            const At = s.a.createRef();
            const Z = (function (P) {
              (function (V, it) {
                if (typeof it !== 'function' && it !== null)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (V.prototype = Object.create(it && it.prototype, {
                  constructor: { value: V, writable: !0, configurable: !0 },
                })),
                  it && Ft(V, it);
              })(Q, P);
              let T;
              let k;
              let C;
              const $ = St(Q);
              function Q(V) {
                let it;
                Tt(this, Q);
                for (
                  var lt = arguments.length,
                    ot = new Array(lt > 1 ? lt - 1 : 0),
                    Et = 1;
                  Et < lt;
                  Et++
                )
                  ot[Et - 1] = arguments[Et];
                return (
                  Mt(
                    Wt((it = $.call.apply($, [this, V].concat(ot)))),
                    'canvas',
                    s.a.createRef()
                  ),
                  Mt(Wt(it), 'confetti', void 0),
                  (it.canvas = V.canvasRef || At),
                  it
                );
              }
              return (
                (T = Q),
                (k = [
                  {
                    key: 'componentDidMount',
                    value() {
                      if (this.canvas.current) {
                        const V = I(this.props)[0];
                        this.confetti = new O(this.canvas.current, V);
                      }
                    },
                  },
                  {
                    key: 'componentDidUpdate',
                    value() {
                      const V = I(this.props)[0];
                      this.confetti && (this.confetti.options = V);
                    },
                  },
                  {
                    key: 'componentWillUnmount',
                    value() {
                      this.confetti && this.confetti.stop(),
                        (this.confetti = void 0);
                    },
                  },
                  {
                    key: 'render',
                    value() {
                      const V = et(I(this.props), 2);
                      const it = V[0];
                      const lt = V[1];
                      const ot = X(
                        {
                          zIndex: 2,
                          position: 'absolute',
                          pointerEvents: 'none',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                        },
                        lt.style
                      );
                      return s.a.createElement('canvas', {
                        width: it.width,
                        height: it.height,
                        ref: this.canvas,
                        ...lt,
                        style: ot,
                      });
                    },
                  },
                ]) && Ct(T.prototype, k),
                C && Ct(T, C),
                Q
              );
            })(a.Component);
            function I(P) {
              const T = {};
              const k = {};
              const C = [].concat(S(Object.keys(w)), [
                'confettiSource',
                'drawShape',
                'onConfettiComplete',
              ]);
              const $ = ['canvasRef'];
              for (const Q in P) {
                const V = P[Q];
                C.includes(Q)
                  ? (T[Q] = V)
                  : $.includes(Q)
                  ? ($[Q] = V)
                  : (k[Q] = V);
              }
              return [T, k, {}];
            }
            Mt(Z, 'defaultProps', X({}, w)),
              Mt(Z, 'displayName', 'ReactConfetti');
            var z = s.a.forwardRef((P, T) =>
              s.a.createElement(Z, { canvasRef: T, ...P })
            );
            n.default = z;
          },
        ]).default
    );
  });
  vt();
  gt();
  yt();
  vt();
  gt();
  yt();
  qn();
  qn();
  vt();
  gt();
  yt();
  const oe = __REACTDOM__;
  const {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: oS,
    createPortal: Ci,
    findDOMNode: iS,
    flushSync: Ai,
    hydrate: aS,
    render: sS,
    unmountComponentAtNode: lS,
    unstable_batchedUpdates: uS,
    unstable_createPortal: cS,
    unstable_renderSubtreeIntoContainer: pS,
    version: fS,
  } = __REACTDOM__;
  const vf = cy(Jl(), 1);
  vt();
  gt();
  yt();
  const wS = __STORYBOOKTHEMING__;
  const {
    CacheProvider: ES,
    ClassNames: xS,
    Global: OS,
    ThemeProvider: Ri,
    background: SS,
    color: PS,
    convert: Zl,
    create: TS,
    createCache: CS,
    createGlobal: AS,
    createReset: kS,
    css: $l,
    darken: RS,
    ensure: tu,
    ignoreSsrWarning: MS,
    isPropValid: DS,
    jsx: NS,
    keyframes: Be,
    lighten: IS,
    styled: Y,
    themes: eu,
    typography: LS,
    useTheme: Mi,
    withTheme: jS,
  } = __STORYBOOKTHEMING__;
  vt();
  gt();
  yt();
  const US = __STORYBOOKCOREEVENTS__;
  const {
    CHANNEL_CREATED: HS,
    CONFIG_ERROR: WS,
    CURRENT_STORY_WAS_SET: YS,
    DOCS_PREPARED: qS,
    DOCS_RENDERED: GS,
    FORCE_REMOUNT: XS,
    FORCE_RE_RENDER: _S,
    GLOBALS_UPDATED: KS,
    IGNORED_EXCEPTION: QS,
    NAVIGATE_URL: JS,
    PLAY_FUNCTION_THREW_EXCEPTION: ZS,
    PRELOAD_ENTRIES: $S,
    PREVIEW_BUILDER_PROGRESS: tP,
    PREVIEW_KEYDOWN: eP,
    REGISTER_SUBSCRIPTION: nP,
    REQUEST_WHATS_NEW_DATA: rP,
    RESET_STORY_ARGS: oP,
    RESULT_WHATS_NEW_DATA: iP,
    SELECT_STORY: aP,
    SET_CONFIG: sP,
    SET_CURRENT_STORY: lP,
    SET_GLOBALS: uP,
    SET_INDEX: cP,
    SET_STORIES: pP,
    SET_WHATS_NEW_CACHE: fP,
    SHARED_STATE_CHANGED: dP,
    SHARED_STATE_SET: hP,
    STORIES_COLLAPSE_ALL: mP,
    STORIES_EXPAND_ALL: vP,
    STORY_ARGS_UPDATED: gP,
    STORY_CHANGED: yP,
    STORY_ERRORED: bP,
    STORY_INDEX_INVALIDATED: Di,
    STORY_MISSING: wP,
    STORY_PREPARED: EP,
    STORY_RENDERED: nu,
    STORY_RENDER_PHASE_CHANGED: xP,
    STORY_SPECIFIED: ru,
    STORY_THREW_EXCEPTION: OP,
    STORY_UNCHANGED: SP,
    TELEMETRY_ERROR: PP,
    TOGGLE_WHATS_NEW_NOTIFICATIONS: TP,
    UPDATE_GLOBALS: CP,
    UPDATE_QUERY_PARAMS: AP,
    UPDATE_STORY_ARGS: ou,
  } = __STORYBOOKCOREEVENTS__;
  vt();
  gt();
  yt();
  const NP = __STORYBOOKCOMPONENTS__;
  const {
    A: IP,
    ActionBar: LP,
    AddonPanel: jP,
    Badge: FP,
    Bar: VP,
    Blockquote: BP,
    Button: zP,
    ClipboardCode: UP,
    Code: HP,
    DL: WP,
    Div: YP,
    DocumentWrapper: qP,
    ErrorFormatter: GP,
    FlexBar: XP,
    Form: _P,
    H1: KP,
    H2: QP,
    H3: JP,
    H4: ZP,
    H5: $P,
    H6: tT,
    HR: eT,
    IconButton: nT,
    IconButtonSkeleton: rT,
    Icons: Xn,
    Img: oT,
    LI: iT,
    Link: aT,
    ListItem: sT,
    Loader: lT,
    OL: uT,
    P: cT,
    Placeholder: pT,
    Pre: fT,
    ResetWrapper: dT,
    ScrollArea: hT,
    Separator: mT,
    Spaced: vT,
    Span: gT,
    StorybookIcon: yT,
    StorybookLogo: bT,
    Symbols: wT,
    SyntaxHighlighter: _n,
    TT: ET,
    TabBar: xT,
    TabButton: OT,
    TabWrapper: ST,
    Table: PT,
    Tabs: TT,
    TabsState: CT,
    TooltipLinkList: AT,
    TooltipMessage: kT,
    TooltipNote: RT,
    UL: MT,
    WithTooltip: DT,
    WithTooltipPure: NT,
    Zoom: IT,
    codeCommon: LT,
    components: jT,
    createCopyToClipboardFunction: FT,
    getStoryHref: VT,
    icons: BT,
    interleaveSeparators: zT,
    nameSpaceClassNames: UT,
    resetComponents: HT,
    withReset: WT,
  } = __STORYBOOKCOMPONENTS__;
  vt();
  gt();
  yt();
  const _T = __STORYBOOKAPI__;
  const {
    ActiveTabs: KT,
    Consumer: QT,
    ManagerContext: JT,
    Provider: ZT,
    addons: Ni,
    combineParameters: $T,
    controlOrMetaKey: tC,
    controlOrMetaSymbol: eC,
    eventMatchesShortcut: nC,
    eventToShortcut: rC,
    isMacLike: oC,
    isShortcutTaken: iC,
    keyToSymbol: aC,
    merge: sC,
    mockChannel: lC,
    optionOrAltSymbol: uC,
    shortcutMatchesShortcut: cC,
    shortcutToHumanString: pC,
    types: fC,
    useAddonState: dC,
    useArgTypes: hC,
    useArgs: mC,
    useChannel: vC,
    useGlobalTypes: gC,
    useGlobals: yC,
    useParameter: bC,
    useSharedState: wC,
    useStoryPrepared: EC,
    useStorybookApi: xC,
    useStorybookState: OC,
  } = __STORYBOOKAPI__;
  const xy = Object.create;
  const Jo = Object.defineProperty;
  const Oy = Object.getOwnPropertyDescriptor;
  const Sy = Object.getOwnPropertyNames;
  const Py = Object.getPrototypeOf;
  const Ty = Object.prototype.hasOwnProperty;
  const v = (t, e) => () => (t && (e = t((t = 0))), e);
  const ee = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  const gf = (t, e) => {
    for (const n in e) Jo(t, n, { get: e[n], enumerable: !0 });
  };
  const yf = (t, e, n, r) => {
    if ((e && typeof e === 'object') || typeof e === 'function')
      for (const o of Sy(e))
        !Ty.call(t, o) &&
          o !== n &&
          Jo(t, o, {
            get: () => e[o],
            enumerable: !(r = Oy(e, o)) || r.enumerable,
          });
    return t;
  };
  const le = (t, e, n) => (
    (n = t != null ? xy(Py(t)) : {}),
    yf(
      e || !t || !t.__esModule
        ? Jo(n, 'default', { value: t, enumerable: !0 })
        : n,
      t
    )
  );
  const Cy = (t) => yf(Jo({}, '__esModule', { value: !0 }), t);
  const Ay = ee((t, e) => {
    const n = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    e.exports = n;
  });
  const ky = ee((t, e) => {
    const n = Ay();
    function r() {}
    function o() {}
    (o.resetWarningCache = r),
      (e.exports = function () {
        function i(l, u, c, f, p, d) {
          if (d !== n) {
            const h = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((h.name = 'Invariant Violation'), h);
          }
        }
        i.isRequired = i;
        function a() {
          return i;
        }
        const s = {
          array: i,
          bigint: i,
          bool: i,
          func: i,
          number: i,
          object: i,
          string: i,
          symbol: i,
          any: i,
          arrayOf: a,
          element: i,
          elementType: i,
          instanceOf: a,
          node: i,
          objectOf: a,
          oneOf: a,
          oneOfType: a,
          shape: a,
          exact: a,
          checkPropTypes: o,
          resetWarningCache: r,
        };
        return (s.PropTypes = s), s;
      });
  });
  const Ry = ee((t, e) => {
    e.exports = ky()();
  });
  function iu(t) {
    return function (e) {
      return typeof e === t;
    };
  }
  let au;
  let su;
  let Ta;
  let Ca;
  let lu;
  const My = v(() => {
    (au = iu('function')),
      (su = function (t) {
        return t === null;
      }),
      (Ta = function (t) {
        return Object.prototype.toString.call(t).slice(8, -1) === 'RegExp';
      }),
      (Ca = function (t) {
        return !lu(t) && !su(t) && (au(t) || typeof t === 'object');
      }),
      (lu = iu('undefined'));
  });
  function Dy(t, e) {
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = n; r-- !== 0; ) if (!Lt(t[r], e[r])) return !1;
    return !0;
  }
  function Ny(t, e) {
    if (t.byteLength !== e.byteLength) return !1;
    for (
      let n = new DataView(t.buffer),
        r = new DataView(e.buffer),
        o = t.byteLength;
      o--;

    )
      if (n.getUint8(o) !== r.getUint8(o)) return !1;
    return !0;
  }
  function Iy(t, e) {
    let n;
    let r;
    let o;
    let i;
    if (t.size !== e.size) return !1;
    try {
      for (var a = Co(t.entries()), s = a.next(); !s.done; s = a.next()) {
        var l = s.value;
        if (!e.has(l[0])) return !1;
      }
    } catch (f) {
      n = { error: f };
    } finally {
      try {
        s && !s.done && (r = a.return) && r.call(a);
      } finally {
        if (n) throw n.error;
      }
    }
    try {
      for (var u = Co(t.entries()), c = u.next(); !c.done; c = u.next()) {
        var l = c.value;
        if (!Lt(l[1], e.get(l[0]))) return !1;
      }
    } catch (f) {
      o = { error: f };
    } finally {
      try {
        c && !c.done && (i = u.return) && i.call(u);
      } finally {
        if (o) throw o.error;
      }
    }
    return !0;
  }
  function Ly(t, e) {
    let n;
    let r;
    if (t.size !== e.size) return !1;
    try {
      for (var o = Co(t.entries()), i = o.next(); !i.done; i = o.next()) {
        const a = i.value;
        if (!e.has(a[0])) return !1;
      }
    } catch (s) {
      n = { error: s };
    } finally {
      try {
        i && !i.done && (r = o.return) && r.call(o);
      } finally {
        if (n) throw n.error;
      }
    }
    return !0;
  }
  function Lt(t, e) {
    if (t === e) return !0;
    if (t && Ca(t) && e && Ca(e)) {
      if (t.constructor !== e.constructor) return !1;
      if (Array.isArray(t) && Array.isArray(e)) return Dy(t, e);
      if (t instanceof Map && e instanceof Map) return Iy(t, e);
      if (t instanceof Set && e instanceof Set) return Ly(t, e);
      if (ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return Ny(t, e);
      if (Ta(t) && Ta(e)) return t.source === e.source && t.flags === e.flags;
      if (t.valueOf !== Object.prototype.valueOf)
        return t.valueOf() === e.valueOf();
      if (t.toString !== Object.prototype.toString)
        return t.toString() === e.toString();
      const n = Object.keys(t);
      const r = Object.keys(e);
      if (n.length !== r.length) return !1;
      for (var o = n.length; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(e, n[o])) return !1;
      for (var o = n.length; o-- !== 0; ) {
        const i = n[o];
        if (!(i === '_owner' && t.$$typeof) && !Lt(t[i], e[i])) return !1;
      }
      return !0;
    }
    return Number.isNaN(t) && Number.isNaN(e) ? !0 : t === e;
  }
  let Co;
  const bf = v(() => {
    My(),
      (Co = function (t) {
        const e = typeof Symbol === 'function' && Symbol.iterator;
        const n = e && t[e];
        let r = 0;
        if (n) return n.call(t);
        if (t && typeof t.length === 'number')
          return {
            next() {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      });
  });
  const jy = v(() => {});
  function Ao(t) {
    const e = Object.prototype.toString.call(t).slice(8, -1);
    if (/HTML\w+Element/.test(e)) return 'HTMLElement';
    if (Fy(e)) return e;
  }
  function Xt(t) {
    return function (e) {
      return Ao(e) === t;
    };
  }
  function Fy(t) {
    return wf.includes(t);
  }
  function sn(t) {
    return function (e) {
      return typeof e === t;
    };
  }
  function Vy(t) {
    return Ef.includes(t);
  }
  function L(t) {
    if (t === null) return 'null';
    switch (typeof t) {
      case 'bigint':
        return 'bigint';
      case 'boolean':
        return 'boolean';
      case 'number':
        return 'number';
      case 'string':
        return 'string';
      case 'symbol':
        return 'symbol';
      case 'undefined':
        return 'undefined';
    }
    if (L.array(t)) return 'Array';
    if (L.plainFunction(t)) return 'Function';
    const e = Ao(t);
    return e || 'Object';
  }
  let uu;
  let wf;
  let Ef;
  let F;
  const Ss = v(() => {
    jy(),
      (uu = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue']),
      (wf = [
        'Array',
        'ArrayBuffer',
        'AsyncFunction',
        'AsyncGenerator',
        'AsyncGeneratorFunction',
        'Date',
        'Error',
        'Function',
        'Generator',
        'GeneratorFunction',
        'HTMLElement',
        'Map',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'WeakMap',
        'WeakSet',
      ]),
      (Ef = [
        'bigint',
        'boolean',
        'null',
        'number',
        'string',
        'symbol',
        'undefined',
      ]),
      (L.array = Array.isArray),
      (L.arrayOf = function (t, e) {
        return !L.array(t) && !L.function(e) ? !1 : t.every((n) => e(n));
      }),
      (L.asyncGeneratorFunction = function (t) {
        return Ao(t) === 'AsyncGeneratorFunction';
      }),
      (L.asyncFunction = Xt('AsyncFunction')),
      (L.bigint = sn('bigint')),
      (L.boolean = function (t) {
        return t === !0 || t === !1;
      }),
      (L.date = Xt('Date')),
      (L.defined = function (t) {
        return !L.undefined(t);
      }),
      (L.domElement = function (t) {
        return (
          L.object(t) &&
          !L.plainObject(t) &&
          t.nodeType === 1 &&
          L.string(t.nodeName) &&
          uu.every((e) => e in t)
        );
      }),
      (L.empty = function (t) {
        return (
          (L.string(t) && t.length === 0) ||
          (L.array(t) && t.length === 0) ||
          (L.object(t) &&
            !L.map(t) &&
            !L.set(t) &&
            Object.keys(t).length === 0) ||
          (L.set(t) && t.size === 0) ||
          (L.map(t) && t.size === 0)
        );
      }),
      (L.error = Xt('Error')),
      (L.function = sn('function')),
      (L.generator = function (t) {
        return L.iterable(t) && L.function(t.next) && L.function(t.throw);
      }),
      (L.generatorFunction = Xt('GeneratorFunction')),
      (L.instanceOf = function (t, e) {
        return !t || !e ? !1 : Object.getPrototypeOf(t) === e.prototype;
      }),
      (L.iterable = function (t) {
        return !L.nullOrUndefined(t) && L.function(t[Symbol.iterator]);
      }),
      (L.map = Xt('Map')),
      (L.nan = function (t) {
        return Number.isNaN(t);
      }),
      (L.null = function (t) {
        return t === null;
      }),
      (L.nullOrUndefined = function (t) {
        return L.null(t) || L.undefined(t);
      }),
      (L.number = function (t) {
        return sn('number')(t) && !L.nan(t);
      }),
      (L.numericString = function (t) {
        return L.string(t) && t.length > 0 && !Number.isNaN(Number(t));
      }),
      (L.object = function (t) {
        return (
          !L.nullOrUndefined(t) && (L.function(t) || typeof t === 'object')
        );
      }),
      (L.oneOf = function (t, e) {
        return L.array(t) ? t.indexOf(e) > -1 : !1;
      }),
      (L.plainFunction = Xt('Function')),
      (L.plainObject = function (t) {
        if (Ao(t) !== 'Object') return !1;
        const e = Object.getPrototypeOf(t);
        return e === null || e === Object.getPrototypeOf({});
      }),
      (L.primitive = function (t) {
        return L.null(t) || Vy(typeof t);
      }),
      (L.promise = Xt('Promise')),
      (L.propertyOf = function (t, e, n) {
        if (!L.object(t) || !e) return !1;
        const r = t[e];
        return L.function(n) ? n(r) : L.defined(r);
      }),
      (L.regexp = Xt('RegExp')),
      (L.set = Xt('Set')),
      (L.string = sn('string')),
      (L.symbol = sn('symbol')),
      (L.undefined = sn('undefined')),
      (L.weakMap = Xt('WeakMap')),
      (L.weakSet = Xt('WeakSet')),
      (F = L);
  });
  function By() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return t.every((n) => F.string(n) || F.array(n) || F.plainObject(n));
  }
  function zy(t, e, n) {
    return xf(t, e)
      ? [t, e].every(F.array)
        ? !t.some(hu(n)) && e.some(hu(n))
        : [t, e].every(F.plainObject)
        ? !Object.entries(t).some(du(n)) && Object.entries(e).some(du(n))
        : e === n
      : !1;
  }
  function cu(t, e, n) {
    const r = n.actual;
    const o = n.key;
    const i = n.previous;
    const a = n.type;
    const s = ue(t, o);
    const l = ue(e, o);
    let u = [s, l].every(F.number) && (a === 'increased' ? s < l : s > l);
    return (
      F.undefined(r) || (u = u && l === r),
      F.undefined(i) || (u = u && s === i),
      u
    );
  }
  function pu(t, e, n) {
    const r = n.key;
    const o = n.type;
    const i = n.value;
    const a = ue(t, r);
    const s = ue(e, r);
    const l = o === 'added' ? a : s;
    const u = o === 'added' ? s : a;
    if (!F.nullOrUndefined(i)) {
      if (F.defined(l)) {
        if (F.array(l) || F.plainObject(l)) return zy(l, u, i);
      } else return Lt(u, i);
      return !1;
    }
    return [a, s].every(F.array)
      ? !u.every(Ps(l))
      : [a, s].every(F.plainObject)
      ? Uy(Object.keys(l), Object.keys(u))
      : ![a, s].every((c) => F.primitive(c) && F.defined(c)) &&
        (o === 'added'
          ? !F.defined(a) && F.defined(s)
          : F.defined(a) && !F.defined(s));
  }
  function fu(t, e, n) {
    const r = n === void 0 ? {} : n;
    const o = r.key;
    let i = ue(t, o);
    let a = ue(e, o);
    if (!xf(i, a)) throw new TypeError('Inputs have different types');
    if (!By(i, a)) throw new TypeError("Inputs don't have length");
    return (
      [i, a].every(F.plainObject) &&
        ((i = Object.keys(i)), (a = Object.keys(a))),
      [i, a]
    );
  }
  function du(t) {
    return function (e) {
      const n = e[0];
      const r = e[1];
      return F.array(t)
        ? Lt(t, r) || t.some((o) => Lt(o, r) || (F.array(r) && Ps(r)(o)))
        : F.plainObject(t) && t[n]
        ? !!t[n] && Lt(t[n], r)
        : Lt(t, r);
    };
  }
  function Uy(t, e) {
    return e.some((n) => !t.includes(n));
  }
  function hu(t) {
    return function (e) {
      return F.array(t)
        ? t.some((n) => Lt(n, e) || (F.array(e) && Ps(e)(n)))
        : Lt(t, e);
    };
  }
  function Kn(t, e) {
    return F.array(t) ? t.some((n) => Lt(n, e)) : Lt(t, e);
  }
  function Ps(t) {
    return function (e) {
      return t.some((n) => Lt(n, e));
    };
  }
  function xf() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return (
      t.every(F.array) ||
      t.every(F.number) ||
      t.every(F.plainObject) ||
      t.every(F.string)
    );
  }
  function ue(t, e) {
    if (F.plainObject(t) || F.array(t)) {
      if (F.string(e)) {
        const n = e.split('.');
        return n.reduce((r, o) => r && r[o], t);
      }
      return F.number(e) ? t[e] : t;
    }
    return t;
  }
  const Hy = v(() => {
    bf(), Ss();
  });
  const Wy = v(() => {});
  function ur(t, e) {
    if ([t, e].some(F.nullOrUndefined))
      throw new Error('Missing required parameters');
    if (![t, e].every((f) => F.plainObject(f) || F.array(f)))
      throw new Error('Expected plain objects or array');
    const n = function (f, p) {
      try {
        return pu(t, e, { key: f, type: 'added', value: p });
      } catch {
        return !1;
      }
    };
    const r = function (f, p, d) {
      try {
        const h = ue(t, f);
        const m = ue(e, f);
        const y = F.defined(p);
        const E = F.defined(d);
        if (y || E) {
          const x = E ? Kn(d, h) : !Kn(p, h);
          const b = Kn(p, m);
          return x && b;
        }
        return [h, m].every(F.array) || [h, m].every(F.plainObject)
          ? !Lt(h, m)
          : h !== m;
      } catch {
        return !1;
      }
    };
    const o = function (f, p, d) {
      if (!F.defined(f)) return !1;
      try {
        const h = ue(t, f);
        const m = ue(e, f);
        const y = F.defined(d);
        return Kn(p, h) && (y ? Kn(d, m) : !y);
      } catch {
        return !1;
      }
    };
    const i = function (f, p) {
      return F.defined(f) ? r(f, p) : !1;
    };
    const a = function (f, p, d) {
      if (!F.defined(f)) return !1;
      try {
        return cu(t, e, { key: f, actual: p, previous: d, type: 'decreased' });
      } catch {
        return !1;
      }
    };
    const s = function (f) {
      try {
        const p = fu(t, e, { key: f });
        const d = p[0];
        const h = p[1];
        return !!d.length && !h.length;
      } catch {
        return !1;
      }
    };
    const l = function (f) {
      try {
        const p = fu(t, e, { key: f });
        const d = p[0];
        const h = p[1];
        return !d.length && !!h.length;
      } catch {
        return !1;
      }
    };
    const u = function (f, p, d) {
      if (!F.defined(f)) return !1;
      try {
        return cu(t, e, { key: f, actual: p, previous: d, type: 'increased' });
      } catch {
        return !1;
      }
    };
    const c = function (f, p) {
      try {
        return pu(t, e, { key: f, type: 'removed', value: p });
      } catch {
        return !1;
      }
    };
    return {
      added: n,
      changed: r,
      changedFrom: o,
      changedTo: i,
      decreased: a,
      emptied: s,
      filled: l,
      increased: u,
      removed: c,
    };
  }
  const Of = v(() => {
    bf(), Ss(), Hy(), Wy();
  });
  function ko(t) {
    const e = Object.prototype.toString.call(t).slice(8, -1);
    if (/HTML\w+Element/.test(e)) return 'HTMLElement';
    if (Yy(e)) return e;
  }
  function _t(t) {
    return (e) => ko(e) === t;
  }
  function Yy(t) {
    return Sf.includes(t);
  }
  function ln(t) {
    return (e) => typeof e === t;
  }
  function qy(t) {
    return Pf.includes(t);
  }
  function j(t) {
    if (t === null) return 'null';
    switch (typeof t) {
      case 'bigint':
        return 'bigint';
      case 'boolean':
        return 'boolean';
      case 'number':
        return 'number';
      case 'string':
        return 'string';
      case 'symbol':
        return 'symbol';
      case 'undefined':
        return 'undefined';
    }
    return j.array(t)
      ? 'Array'
      : j.plainFunction(t)
      ? 'Function'
      : ko(t) || 'Object';
  }
  let mu;
  let Sf;
  let Pf;
  let ft;
  const Gy = v(() => {
    (mu = ['innerHTML', 'ownerDocument', 'style', 'attributes', 'nodeValue']),
      (Sf = [
        'Array',
        'ArrayBuffer',
        'AsyncFunction',
        'AsyncGenerator',
        'AsyncGeneratorFunction',
        'Date',
        'Error',
        'Function',
        'Generator',
        'GeneratorFunction',
        'HTMLElement',
        'Map',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'WeakMap',
        'WeakSet',
      ]),
      (Pf = [
        'bigint',
        'boolean',
        'null',
        'number',
        'string',
        'symbol',
        'undefined',
      ]),
      (j.array = Array.isArray),
      (j.arrayOf = (t, e) =>
        !j.array(t) && !j.function(e) ? !1 : t.every((n) => e(n))),
      (j.asyncGeneratorFunction = (t) => ko(t) === 'AsyncGeneratorFunction'),
      (j.asyncFunction = _t('AsyncFunction')),
      (j.bigint = ln('bigint')),
      (j.boolean = (t) => t === !0 || t === !1),
      (j.date = _t('Date')),
      (j.defined = (t) => !j.undefined(t)),
      (j.domElement = (t) =>
        j.object(t) &&
        !j.plainObject(t) &&
        t.nodeType === 1 &&
        j.string(t.nodeName) &&
        mu.every((e) => e in t)),
      (j.empty = (t) =>
        (j.string(t) && t.length === 0) ||
        (j.array(t) && t.length === 0) ||
        (j.object(t) &&
          !j.map(t) &&
          !j.set(t) &&
          Object.keys(t).length === 0) ||
        (j.set(t) && t.size === 0) ||
        (j.map(t) && t.size === 0)),
      (j.error = _t('Error')),
      (j.function = ln('function')),
      (j.generator = (t) =>
        j.iterable(t) && j.function(t.next) && j.function(t.throw)),
      (j.generatorFunction = _t('GeneratorFunction')),
      (j.instanceOf = (t, e) =>
        !t || !e ? !1 : Object.getPrototypeOf(t) === e.prototype),
      (j.iterable = (t) =>
        !j.nullOrUndefined(t) && j.function(t[Symbol.iterator])),
      (j.map = _t('Map')),
      (j.nan = (t) => Number.isNaN(t)),
      (j.null = (t) => t === null),
      (j.nullOrUndefined = (t) => j.null(t) || j.undefined(t)),
      (j.number = (t) => ln('number')(t) && !j.nan(t)),
      (j.numericString = (t) =>
        j.string(t) && t.length > 0 && !Number.isNaN(Number(t))),
      (j.object = (t) =>
        !j.nullOrUndefined(t) && (j.function(t) || typeof t === 'object')),
      (j.oneOf = (t, e) => (j.array(t) ? t.indexOf(e) > -1 : !1)),
      (j.plainFunction = _t('Function')),
      (j.plainObject = (t) => {
        if (ko(t) !== 'Object') return !1;
        const e = Object.getPrototypeOf(t);
        return e === null || e === Object.getPrototypeOf({});
      }),
      (j.primitive = (t) => j.null(t) || qy(typeof t)),
      (j.promise = _t('Promise')),
      (j.propertyOf = (t, e, n) => {
        if (!j.object(t) || !e) return !1;
        const r = t[e];
        return j.function(n) ? n(r) : j.defined(r);
      }),
      (j.regexp = _t('RegExp')),
      (j.set = _t('Set')),
      (j.string = ln('string')),
      (j.symbol = ln('symbol')),
      (j.undefined = ln('undefined')),
      (j.weakMap = _t('WeakMap')),
      (j.weakSet = _t('WeakSet')),
      (ft = j);
  });
  const Tf = ee((t, e) => {
    (function () {
      const n = !!(
        typeof window < 'u' &&
        window.document &&
        window.document.createElement
      );
      const r = {
        canUseDOM: n,
        canUseWorkers: typeof Worker < 'u',
        canUseEventListeners:
          n && !!(window.addEventListener || window.attachEvent),
        canUseViewport: n && !!window.screen,
      };
      typeof define === 'function' &&
      typeof define.amd === 'object' &&
      define.amd
        ? define(() => r)
        : typeof e < 'u' && e.exports
        ? (e.exports = r)
        : (window.ExecutionEnvironment = r);
    })();
  });
  const Xy = ee((t, e) => {
    const n = new Error('Element already at target scroll position');
    const r = new Error('Scroll cancelled');
    const o = Math.min;
    const i = Date.now;
    e.exports = { left: a('scrollLeft'), top: a('scrollTop') };
    function a(u) {
      return function (c, f, p, d) {
        (p = p || {}),
          typeof p === 'function' && ((d = p), (p = {})),
          typeof d !== 'function' && (d = l);
        const h = i();
        const m = c[u];
        const y = p.ease || s;
        const E = isNaN(p.duration) ? 350 : +p.duration;
        let x = !1;
        return m === f ? d(n, c[u]) : requestAnimationFrame(w), b;
        function b() {
          x = !0;
        }
        function w(O) {
          if (x) return d(r, c[u]);
          const S = i();
          const M = o(1, (S - h) / E);
          const N = y(M);
          (c[u] = N * (f - m) + m),
            M < 1
              ? requestAnimationFrame(w)
              : requestAnimationFrame(() => {
                  d(null, c[u]);
                });
        }
      };
    }
    function s(u) {
      return 0.5 * (1 - Math.cos(Math.PI * u));
    }
    function l() {}
  });
  const _y = ee((t, e) => {
    (function (n, r) {
      typeof define === 'function' && define.amd
        ? define([], r)
        : typeof e === 'object' && e.exports
        ? (e.exports = r())
        : (n.Scrollparent = r());
    })(t, () => {
      function n(o) {
        const i = getComputedStyle(o, null).getPropertyValue('overflow');
        return i.indexOf('scroll') > -1 || i.indexOf('auto') > -1;
      }
      function r(o) {
        if (o instanceof HTMLElement || o instanceof SVGElement) {
          for (let i = o.parentNode; i.parentNode; ) {
            if (n(i)) return i;
            i = i.parentNode;
          }
          return document.scrollingElement || document.documentElement;
        }
      }
      return r;
    });
  });
  const Ky = ee((t) => {
    const e = typeof Symbol === 'function' && Symbol.for;
    const n = e ? Symbol.for('react.element') : 60103;
    const r = e ? Symbol.for('react.portal') : 60106;
    const o = e ? Symbol.for('react.fragment') : 60107;
    const i = e ? Symbol.for('react.strict_mode') : 60108;
    const a = e ? Symbol.for('react.profiler') : 60114;
    const s = e ? Symbol.for('react.provider') : 60109;
    const l = e ? Symbol.for('react.context') : 60110;
    const u = e ? Symbol.for('react.async_mode') : 60111;
    const c = e ? Symbol.for('react.concurrent_mode') : 60111;
    const f = e ? Symbol.for('react.forward_ref') : 60112;
    const p = e ? Symbol.for('react.suspense') : 60113;
    const d = e ? Symbol.for('react.suspense_list') : 60120;
    const h = e ? Symbol.for('react.memo') : 60115;
    const m = e ? Symbol.for('react.lazy') : 60116;
    const y = e ? Symbol.for('react.block') : 60121;
    const E = e ? Symbol.for('react.fundamental') : 60117;
    const x = e ? Symbol.for('react.responder') : 60118;
    const b = e ? Symbol.for('react.scope') : 60119;
    function w(S) {
      if (typeof S === 'object' && S !== null) {
        const M = S.$$typeof;
        switch (M) {
          case n:
            switch (((S = S.type), S)) {
              case u:
              case c:
              case o:
              case a:
              case i:
              case p:
                return S;
              default:
                switch (((S = S && S.$$typeof), S)) {
                  case l:
                  case f:
                  case m:
                  case h:
                  case s:
                    return S;
                  default:
                    return M;
                }
            }
          case r:
            return M;
        }
      }
    }
    function O(S) {
      return w(S) === c;
    }
    (t.AsyncMode = u),
      (t.ConcurrentMode = c),
      (t.ContextConsumer = l),
      (t.ContextProvider = s),
      (t.Element = n),
      (t.ForwardRef = f),
      (t.Fragment = o),
      (t.Lazy = m),
      (t.Memo = h),
      (t.Portal = r),
      (t.Profiler = a),
      (t.StrictMode = i),
      (t.Suspense = p),
      (t.isAsyncMode = function (S) {
        return O(S) || w(S) === u;
      }),
      (t.isConcurrentMode = O),
      (t.isContextConsumer = function (S) {
        return w(S) === l;
      }),
      (t.isContextProvider = function (S) {
        return w(S) === s;
      }),
      (t.isElement = function (S) {
        return typeof S === 'object' && S !== null && S.$$typeof === n;
      }),
      (t.isForwardRef = function (S) {
        return w(S) === f;
      }),
      (t.isFragment = function (S) {
        return w(S) === o;
      }),
      (t.isLazy = function (S) {
        return w(S) === m;
      }),
      (t.isMemo = function (S) {
        return w(S) === h;
      }),
      (t.isPortal = function (S) {
        return w(S) === r;
      }),
      (t.isProfiler = function (S) {
        return w(S) === a;
      }),
      (t.isStrictMode = function (S) {
        return w(S) === i;
      }),
      (t.isSuspense = function (S) {
        return w(S) === p;
      }),
      (t.isValidElementType = function (S) {
        return (
          typeof S === 'string' ||
          typeof S === 'function' ||
          S === o ||
          S === c ||
          S === a ||
          S === i ||
          S === p ||
          S === d ||
          (typeof S === 'object' &&
            S !== null &&
            (S.$$typeof === m ||
              S.$$typeof === h ||
              S.$$typeof === s ||
              S.$$typeof === l ||
              S.$$typeof === f ||
              S.$$typeof === E ||
              S.$$typeof === x ||
              S.$$typeof === b ||
              S.$$typeof === y))
        );
      }),
      (t.typeOf = w);
  });
  const Qy = ee((t, e) => {
    e.exports = Ky();
  });
  const Cf = ee((t, e) => {
    const n = function (b) {
      return r(b) && !o(b);
    };
    function r(b) {
      return !!b && typeof b === 'object';
    }
    function o(b) {
      const w = Object.prototype.toString.call(b);
      return w === '[object RegExp]' || w === '[object Date]' || s(b);
    }
    const i = typeof Symbol === 'function' && Symbol.for;
    const a = i ? Symbol.for('react.element') : 60103;
    function s(b) {
      return b.$$typeof === a;
    }
    function l(b) {
      return Array.isArray(b) ? [] : {};
    }
    function u(b, w) {
      return w.clone !== !1 && w.isMergeableObject(b) ? E(l(b), b, w) : b;
    }
    function c(b, w, O) {
      return b.concat(w).map((S) => u(S, O));
    }
    function f(b, w) {
      if (!w.customMerge) return E;
      const O = w.customMerge(b);
      return typeof O === 'function' ? O : E;
    }
    function p(b) {
      return Object.getOwnPropertySymbols
        ? Object.getOwnPropertySymbols(b).filter((w) =>
            Object.propertyIsEnumerable.call(b, w)
          )
        : [];
    }
    function d(b) {
      return Object.keys(b).concat(p(b));
    }
    function h(b, w) {
      try {
        return w in b;
      } catch {
        return !1;
      }
    }
    function m(b, w) {
      return (
        h(b, w) &&
        !(
          Object.hasOwnProperty.call(b, w) &&
          Object.propertyIsEnumerable.call(b, w)
        )
      );
    }
    function y(b, w, O) {
      const S = {};
      return (
        O.isMergeableObject(b) &&
          d(b).forEach((M) => {
            S[M] = u(b[M], O);
          }),
        d(w).forEach((M) => {
          m(b, M) ||
            (h(b, M) && O.isMergeableObject(w[M])
              ? (S[M] = f(M, O)(b[M], w[M], O))
              : (S[M] = u(w[M], O)));
        }),
        S
      );
    }
    function E(b, w, O) {
      (O = O || {}),
        (O.arrayMerge = O.arrayMerge || c),
        (O.isMergeableObject = O.isMergeableObject || n),
        (O.cloneUnlessOtherwiseSpecified = u);
      const S = Array.isArray(w);
      const M = Array.isArray(b);
      const N = S === M;
      return N ? (S ? O.arrayMerge(b, w, O) : y(b, w, O)) : u(w, O);
    }
    E.all = function (b, w) {
      if (!Array.isArray(b))
        throw new Error('first argument should be an array');
      return b.reduce((O, S) => E(O, S, w), {});
    };
    const x = E;
    e.exports = x;
  });
  const Jy = ee((t) => {
    Object.defineProperty(t, '__esModule', { value: !0 });
    const e =
      'The typeValidator argument must be a function with the signature function(props, propName, componentName).';
    const n =
      'The error message is optional, but must be a string if provided.';
    const r = function (l, u, c, f) {
      return typeof l === 'boolean'
        ? l
        : typeof l === 'function'
        ? l(u, c, f)
        : !!l && !!l;
    };
    const o = function (l, u) {
      return Object.hasOwnProperty.call(l, u);
    };
    const i = function (l, u, c, f) {
      return f
        ? new Error(f)
        : new Error(
            `Required ${l[u]} \`${u}\`` + ` was not specified in \`${c}\`.`
          );
    };
    const a = function (l, u) {
      if (typeof l !== 'function') throw new TypeError(e);
      if (u && typeof u !== 'string') throw new TypeError(n);
    };
    const s = function (l, u, c) {
      return (
        a(l, c),
        function (f, p, d) {
          for (
            var h = arguments.length, m = Array(h > 3 ? h - 3 : 0), y = 3;
            y < h;
            y++
          )
            m[y - 3] = arguments[y];
          return r(u, f, p, d)
            ? o(f, p)
              ? l.apply(void 0, [f, p, d].concat(m))
              : i(f, p, d, c)
            : l.apply(void 0, [f, p, d].concat(m));
        }
      );
    };
    t.default = s;
  });
  function Zy(t) {
    let e = !1;
    return function () {
      e ||
        ((e = !0),
        window.Promise.resolve().then(() => {
          (e = !1), t();
        }));
    };
  }
  function $y(t) {
    let e = !1;
    return function () {
      e ||
        ((e = !0),
        setTimeout(() => {
          (e = !1), t();
        }, Hf));
    };
  }
  function Af(t) {
    const e = {};
    return t && e.toString.call(t) === '[object Function]';
  }
  function en(t, e) {
    if (t.nodeType !== 1) return [];
    const n = t.ownerDocument.defaultView;
    const r = n.getComputedStyle(t, null);
    return e ? r[e] : r;
  }
  function Ts(t) {
    return t.nodeName === 'HTML' ? t : t.parentNode || t.host;
  }
  function Ir(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case 'HTML':
      case 'BODY':
        return t.ownerDocument.body;
      case '#document':
        return t.body;
    }
    const e = en(t);
    const n = e.overflow;
    const r = e.overflowX;
    const o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + r) ? t : Ir(Ts(t));
  }
  function kf(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  function Fn(t) {
    return t === 11 ? Ma : t === 10 ? Da : Ma || Da;
  }
  function Rn(t) {
    if (!t) return document.documentElement;
    for (
      var e = Fn(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    const r = n && n.nodeName;
    return !r || r === 'BODY' || r === 'HTML'
      ? t
        ? t.ownerDocument.documentElement
        : document.documentElement
      : ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) !== -1 &&
        en(n, 'position') === 'static'
      ? Rn(n)
      : n;
  }
  function t0(t) {
    const e = t.nodeName;
    return e === 'BODY' ? !1 : e === 'HTML' || Rn(t.firstElementChild) === t;
  }
  function Aa(t) {
    return t.parentNode !== null ? Aa(t.parentNode) : t;
  }
  function Ro(t, e) {
    if (!t || !t.nodeType || !e || !e.nodeType) return document.documentElement;
    const n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING;
    const r = n ? t : e;
    const o = n ? e : t;
    const i = document.createRange();
    i.setStart(r, 0), i.setEnd(o, 0);
    const a = i.commonAncestorContainer;
    if ((t !== a && e !== a) || r.contains(o)) return t0(a) ? a : Rn(a);
    const s = Aa(t);
    return s.host ? Ro(s.host, e) : Ro(t, Aa(e).host);
  }
  function Mn(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'top';
    const n = e === 'top' ? 'scrollTop' : 'scrollLeft';
    const r = t.nodeName;
    if (r === 'BODY' || r === 'HTML') {
      const o = t.ownerDocument.documentElement;
      const i = t.ownerDocument.scrollingElement || o;
      return i[n];
    }
    return t[n];
  }
  function e0(t, e) {
    const n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const r = Mn(e, 'top');
    const o = Mn(e, 'left');
    const i = n ? -1 : 1;
    return (
      (t.top += r * i),
      (t.bottom += r * i),
      (t.left += o * i),
      (t.right += o * i),
      t
    );
  }
  function vu(t, e) {
    const n = e === 'x' ? 'Left' : 'Top';
    const r = n === 'Left' ? 'Right' : 'Bottom';
    return parseFloat(t[`border${n}Width`]) + parseFloat(t[`border${r}Width`]);
  }
  function gu(t, e, n, r) {
    return Math.max(
      e[`offset${t}`],
      e[`scroll${t}`],
      n[`client${t}`],
      n[`offset${t}`],
      n[`scroll${t}`],
      Fn(10)
        ? parseInt(n[`offset${t}`]) +
            parseInt(r[`margin${t === 'Height' ? 'Top' : 'Left'}`]) +
            parseInt(r[`margin${t === 'Height' ? 'Bottom' : 'Right'}`])
        : 0
    );
  }
  function Rf(t) {
    const e = t.body;
    const n = t.documentElement;
    const r = Fn(10) && getComputedStyle(n);
    return { height: gu('Height', e, n, r), width: gu('Width', e, n, r) };
  }
  function Le(t) {
    return { ...t, right: t.left + t.width, bottom: t.top + t.height };
  }
  function ka(t) {
    let e = {};
    try {
      if (Fn(10)) {
        e = t.getBoundingClientRect();
        const n = Mn(t, 'top');
        const r = Mn(t, 'left');
        (e.top += n), (e.left += r), (e.bottom += n), (e.right += r);
      } else e = t.getBoundingClientRect();
    } catch {}
    const o = {
      left: e.left,
      top: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    };
    const i = t.nodeName === 'HTML' ? Rf(t.ownerDocument) : {};
    const a = i.width || t.clientWidth || o.width;
    const s = i.height || t.clientHeight || o.height;
    let l = t.offsetWidth - a;
    let u = t.offsetHeight - s;
    if (l || u) {
      const c = en(t);
      (l -= vu(c, 'x')), (u -= vu(c, 'y')), (o.width -= l), (o.height -= u);
    }
    return Le(o);
  }
  function Cs(t, e) {
    const n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const r = Fn(10);
    const o = e.nodeName === 'HTML';
    const i = ka(t);
    const a = ka(e);
    const s = Ir(t);
    const l = en(e);
    const u = parseFloat(l.borderTopWidth);
    const c = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    let f = Le({
      top: i.top - a.top - u,
      left: i.left - a.left - c,
      width: i.width,
      height: i.height,
    });
    if (((f.marginTop = 0), (f.marginLeft = 0), !r && o)) {
      const p = parseFloat(l.marginTop);
      const d = parseFloat(l.marginLeft);
      (f.top -= u - p),
        (f.bottom -= u - p),
        (f.left -= c - d),
        (f.right -= c - d),
        (f.marginTop = p),
        (f.marginLeft = d);
    }
    return (
      (r && !n ? e.contains(s) : e === s && s.nodeName !== 'BODY') &&
        (f = e0(f, e)),
      f
    );
  }
  function n0(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = t.ownerDocument.documentElement;
    const r = Cs(t, n);
    const o = Math.max(n.clientWidth, window.innerWidth || 0);
    const i = Math.max(n.clientHeight, window.innerHeight || 0);
    const a = e ? 0 : Mn(n);
    const s = e ? 0 : Mn(n, 'left');
    const l = {
      top: a - r.top + r.marginTop,
      left: s - r.left + r.marginLeft,
      width: o,
      height: i,
    };
    return Le(l);
  }
  function Mf(t) {
    const e = t.nodeName;
    if (e === 'BODY' || e === 'HTML') return !1;
    if (en(t, 'position') === 'fixed') return !0;
    const n = Ts(t);
    return n ? Mf(n) : !1;
  }
  function Df(t) {
    if (!t || !t.parentElement || Fn()) return document.documentElement;
    for (var e = t.parentElement; e && en(e, 'transform') === 'none'; )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function As(t, e, n, r) {
    const o =
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    let i = { top: 0, left: 0 };
    const a = o ? Df(t) : Ro(t, kf(e));
    if (r === 'viewport') i = n0(a, o);
    else {
      let s = void 0;
      r === 'scrollParent'
        ? ((s = Ir(Ts(e))),
          s.nodeName === 'BODY' && (s = t.ownerDocument.documentElement))
        : r === 'window'
        ? (s = t.ownerDocument.documentElement)
        : (s = r);
      const l = Cs(s, a, o);
      if (s.nodeName === 'HTML' && !Mf(a)) {
        const u = Rf(t.ownerDocument);
        const c = u.height;
        const f = u.width;
        (i.top += l.top - l.marginTop),
          (i.bottom = c + l.top),
          (i.left += l.left - l.marginLeft),
          (i.right = f + l.left);
      } else i = l;
    }
    n = n || 0;
    const p = typeof n === 'number';
    return (
      (i.left += p ? n : n.left || 0),
      (i.top += p ? n : n.top || 0),
      (i.right -= p ? n : n.right || 0),
      (i.bottom -= p ? n : n.bottom || 0),
      i
    );
  }
  function r0(t) {
    const e = t.width;
    const n = t.height;
    return e * n;
  }
  function Nf(t, e, n, r, o) {
    const i =
      arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
    if (t.indexOf('auto') === -1) return t;
    const a = As(n, r, i, o);
    const s = {
      top: { width: a.width, height: e.top - a.top },
      right: { width: a.right - e.right, height: a.height },
      bottom: { width: a.width, height: a.bottom - e.bottom },
      left: { width: e.left - a.left, height: a.height },
    };
    const l = Object.keys(s)
      .map((p) => ({ key: p, ...s[p], area: r0(s[p]) }))
      .sort((p, d) => d.area - p.area);
    const u = l.filter((p) => {
      const d = p.width;
      const h = p.height;
      return d >= n.clientWidth && h >= n.clientHeight;
    });
    const c = u.length > 0 ? u[0].key : l[0].key;
    const f = t.split('-')[1];
    return c + (f ? `-${f}` : '');
  }
  function If(t, e, n) {
    const r =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
    const o = r ? Df(e) : Ro(e, kf(n));
    return Cs(n, o, r);
  }
  function Lf(t) {
    const e = t.ownerDocument.defaultView;
    const n = e.getComputedStyle(t);
    const r = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0);
    const o = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0);
    const i = { width: t.offsetWidth + o, height: t.offsetHeight + r };
    return i;
  }
  function Mo(t) {
    const e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return t.replace(/left|right|bottom|top/g, (n) => e[n]);
  }
  function jf(t, e, n) {
    n = n.split('-')[0];
    const r = Lf(t);
    const o = { width: r.width, height: r.height };
    const i = ['right', 'left'].indexOf(n) !== -1;
    const a = i ? 'top' : 'left';
    const s = i ? 'left' : 'top';
    const l = i ? 'height' : 'width';
    const u = i ? 'width' : 'height';
    return (
      (o[a] = e[a] + e[l] / 2 - r[l] / 2),
      n === s ? (o[s] = e[s] - r[u]) : (o[s] = e[Mo(s)]),
      o
    );
  }
  function Lr(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function o0(t, e, n) {
    if (Array.prototype.findIndex) return t.findIndex((o) => o[e] === n);
    const r = Lr(t, (o) => o[e] === n);
    return t.indexOf(r);
  }
  function Ff(t, e, n) {
    const r = n === void 0 ? t : t.slice(0, o0(t, 'name', n));
    return (
      r.forEach((o) => {
        o.function &&
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        const i = o.function || o.fn;
        o.enabled &&
          Af(i) &&
          ((e.offsets.popper = Le(e.offsets.popper)),
          (e.offsets.reference = Le(e.offsets.reference)),
          (e = i(e, o)));
      }),
      e
    );
  }
  function i0() {
    if (!this.state.isDestroyed) {
      let t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = If(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = Nf(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = jf(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? 'fixed'
          : 'absolute'),
        (t = Ff(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function Vf(t, e) {
    return t.some((n) => {
      const r = n.name;
      const o = n.enabled;
      return o && r === e;
    });
  }
  function ks(t) {
    for (
      let e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        r = 0;
      r < e.length;
      r++
    ) {
      const o = e[r];
      const i = o ? `${o}${n}` : t;
      if (typeof document.body.style[i] < 'u') return i;
    }
    return null;
  }
  function a0() {
    return (
      (this.state.isDestroyed = !0),
      Vf(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[ks('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function Bf(t) {
    const e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function zf(t, e, n, r) {
    const o = t.nodeName === 'BODY';
    const i = o ? t.ownerDocument.defaultView : t;
    i.addEventListener(e, n, { passive: !0 }),
      o || zf(Ir(i.parentNode), e, n, r),
      r.push(i);
  }
  function s0(t, e, n, r) {
    (n.updateBound = r),
      Bf(t).addEventListener('resize', n.updateBound, { passive: !0 });
    const o = Ir(t);
    return (
      zf(o, 'scroll', n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function l0() {
    this.state.eventsEnabled ||
      (this.state = s0(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function u0(t, e) {
    return (
      Bf(t).removeEventListener('resize', e.updateBound),
      e.scrollParents.forEach((n) => {
        n.removeEventListener('scroll', e.updateBound);
      }),
      (e.updateBound = null),
      (e.scrollParents = []),
      (e.scrollElement = null),
      (e.eventsEnabled = !1),
      e
    );
  }
  function c0() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = u0(this.reference, this.state)));
  }
  function Rs(t) {
    return t !== '' && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function Ra(t, e) {
    Object.keys(e).forEach((n) => {
      let r = '';
      ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) !== -1 &&
        Rs(e[n]) &&
        (r = 'px'),
        (t.style[n] = e[n] + r);
    });
  }
  function p0(t, e) {
    Object.keys(e).forEach((n) => {
      const r = e[n];
      r !== !1 ? t.setAttribute(n, e[n]) : t.removeAttribute(n);
    });
  }
  function f0(t) {
    return (
      Ra(t.instance.popper, t.styles),
      p0(t.instance.popper, t.attributes),
      t.arrowElement &&
        Object.keys(t.arrowStyles).length &&
        Ra(t.arrowElement, t.arrowStyles),
      t
    );
  }
  function d0(t, e, n, r, o) {
    const i = If(o, e, t, n.positionFixed);
    const a = Nf(
      n.placement,
      i,
      e,
      t,
      n.modifiers.flip.boundariesElement,
      n.modifiers.flip.padding
    );
    return (
      e.setAttribute('x-placement', a),
      Ra(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
      n
    );
  }
  function h0(t, e) {
    const n = t.offsets;
    const r = n.popper;
    const o = n.reference;
    const i = Math.round;
    const a = Math.floor;
    const s = function (y) {
      return y;
    };
    const l = i(o.width);
    const u = i(r.width);
    const c = ['left', 'right'].indexOf(t.placement) !== -1;
    const f = t.placement.indexOf('-') !== -1;
    const p = l % 2 === u % 2;
    const d = l % 2 === 1 && u % 2 === 1;
    const h = e ? (c || f || p ? i : a) : s;
    const m = e ? i : s;
    return {
      left: h(d && !f && e ? r.left - 1 : r.left),
      top: m(r.top),
      bottom: m(r.bottom),
      right: h(r.right),
    };
  }
  function m0(t, e) {
    const n = e.x;
    const r = e.y;
    const o = t.offsets.popper;
    const i = Lr(
      t.instance.modifiers,
      (b) => b.name === 'applyStyle'
    ).gpuAcceleration;
    i !== void 0 &&
      console.warn(
        'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
      );
    const a = i !== void 0 ? i : e.gpuAcceleration;
    const s = Rn(t.instance.popper);
    const l = ka(s);
    const u = { position: o.position };
    const c = h0(t, window.devicePixelRatio < 2 || !Wf);
    const f = n === 'bottom' ? 'top' : 'bottom';
    const p = r === 'right' ? 'left' : 'right';
    const d = ks('transform');
    let h = void 0;
    let m = void 0;
    if (
      (f === 'bottom'
        ? s.nodeName === 'HTML'
          ? (m = -s.clientHeight + c.bottom)
          : (m = -l.height + c.bottom)
        : (m = c.top),
      p === 'right'
        ? s.nodeName === 'HTML'
          ? (h = -s.clientWidth + c.right)
          : (h = -l.width + c.right)
        : (h = c.left),
      a && d)
    )
      (u[d] = `translate3d(${h}px, ${m}px, 0)`),
        (u[f] = 0),
        (u[p] = 0),
        (u.willChange = 'transform');
    else {
      const y = f === 'bottom' ? -1 : 1;
      const E = p === 'right' ? -1 : 1;
      (u[f] = m * y), (u[p] = h * E), (u.willChange = `${f}, ${p}`);
    }
    const x = { 'x-placement': t.placement };
    return (
      (t.attributes = { ...x, ...t.attributes }),
      (t.styles = { ...u, ...t.styles }),
      (t.arrowStyles = { ...t.offsets.arrow, ...t.arrowStyles }),
      t
    );
  }
  function Uf(t, e, n) {
    const r = Lr(t, (s) => {
      const l = s.name;
      return l === e;
    });
    const o =
      !!r && t.some((s) => s.name === n && s.enabled && s.order < r.order);
    if (!o) {
      const i = `\`${e}\``;
      const a = `\`${n}\``;
      console.warn(
        `${a} modifier is required by ${i} modifier in order to work, be sure to include it before ${i}!`
      );
    }
    return o;
  }
  function v0(t, e) {
    let n;
    if (!Uf(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
    let r = e.element;
    if (typeof r === 'string') {
      if (((r = t.instance.popper.querySelector(r)), !r)) return t;
    } else if (!t.instance.popper.contains(r))
      return (
        console.warn(
          'WARNING: `arrow.element` must be child of its popper element!'
        ),
        t
      );
    const o = t.placement.split('-')[0];
    const i = t.offsets;
    const a = i.popper;
    const s = i.reference;
    const l = ['left', 'right'].indexOf(o) !== -1;
    const u = l ? 'height' : 'width';
    const c = l ? 'Top' : 'Left';
    const f = c.toLowerCase();
    const p = l ? 'left' : 'top';
    const d = l ? 'bottom' : 'right';
    const h = Lf(r)[u];
    s[d] - h < a[f] && (t.offsets.popper[f] -= a[f] - (s[d] - h)),
      s[f] + h > a[d] && (t.offsets.popper[f] += s[f] + h - a[d]),
      (t.offsets.popper = Le(t.offsets.popper));
    const m = s[f] + s[u] / 2 - h / 2;
    const y = en(t.instance.popper);
    const E = parseFloat(y[`margin${c}`]);
    const x = parseFloat(y[`border${c}Width`]);
    let b = m - t.offsets.popper[f] - E - x;
    return (
      (b = Math.max(Math.min(a[u] - h, b), 0)),
      (t.arrowElement = r),
      (t.offsets.arrow = ((n = {}), Ze(n, f, Math.round(b)), Ze(n, p, ''), n)),
      t
    );
  }
  function g0(t) {
    return t === 'end' ? 'start' : t === 'start' ? 'end' : t;
  }
  function yu(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    const n = so.indexOf(t);
    const r = so.slice(n + 1).concat(so.slice(0, n));
    return e ? r.reverse() : r;
  }
  function y0(t, e) {
    if (
      Vf(t.instance.modifiers, 'inner') ||
      (t.flipped && t.placement === t.originalPlacement)
    )
      return t;
    const n = As(
      t.instance.popper,
      t.instance.reference,
      e.padding,
      e.boundariesElement,
      t.positionFixed
    );
    let r = t.placement.split('-')[0];
    let o = Mo(r);
    let i = t.placement.split('-')[1] || '';
    let a = [];
    switch (e.behavior) {
      case lo.FLIP:
        a = [r, o];
        break;
      case lo.CLOCKWISE:
        a = yu(r);
        break;
      case lo.COUNTERCLOCKWISE:
        a = yu(r, !0);
        break;
      default:
        a = e.behavior;
    }
    return (
      a.forEach((s, l) => {
        if (r !== s || a.length === l + 1) return t;
        (r = t.placement.split('-')[0]), (o = Mo(r));
        const u = t.offsets.popper;
        const c = t.offsets.reference;
        const f = Math.floor;
        const p =
          (r === 'left' && f(u.right) > f(c.left)) ||
          (r === 'right' && f(u.left) < f(c.right)) ||
          (r === 'top' && f(u.bottom) > f(c.top)) ||
          (r === 'bottom' && f(u.top) < f(c.bottom));
        const d = f(u.left) < f(n.left);
        const h = f(u.right) > f(n.right);
        const m = f(u.top) < f(n.top);
        const y = f(u.bottom) > f(n.bottom);
        const E =
          (r === 'left' && d) ||
          (r === 'right' && h) ||
          (r === 'top' && m) ||
          (r === 'bottom' && y);
        const x = ['top', 'bottom'].indexOf(r) !== -1;
        const b =
          !!e.flipVariations &&
          ((x && i === 'start' && d) ||
            (x && i === 'end' && h) ||
            (!x && i === 'start' && m) ||
            (!x && i === 'end' && y));
        const w =
          !!e.flipVariationsByContent &&
          ((x && i === 'start' && h) ||
            (x && i === 'end' && d) ||
            (!x && i === 'start' && y) ||
            (!x && i === 'end' && m));
        const O = b || w;
        (p || E || O) &&
          ((t.flipped = !0),
          (p || E) && (r = a[l + 1]),
          O && (i = g0(i)),
          (t.placement = r + (i ? `-${i}` : '')),
          (t.offsets.popper = {
            ...t.offsets.popper,
            ...jf(t.instance.popper, t.offsets.reference, t.placement),
          }),
          (t = Ff(t.instance.modifiers, t, 'flip')));
      }),
      t
    );
  }
  function b0(t) {
    const e = t.offsets;
    const n = e.popper;
    const r = e.reference;
    const o = t.placement.split('-')[0];
    const i = Math.floor;
    const a = ['top', 'bottom'].indexOf(o) !== -1;
    const s = a ? 'right' : 'bottom';
    const l = a ? 'left' : 'top';
    const u = a ? 'width' : 'height';
    return (
      n[s] < i(r[l]) && (t.offsets.popper[l] = i(r[l]) - n[u]),
      n[l] > i(r[s]) && (t.offsets.popper[l] = i(r[s])),
      t
    );
  }
  function w0(t, e, n, r) {
    const o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    const i = +o[1];
    const a = o[2];
    if (!i) return t;
    if (a.indexOf('%') === 0) {
      let s = void 0;
      switch (a) {
        case '%p':
          s = n;
          break;
        case '%':
        case '%r':
        default:
          s = r;
      }
      const l = Le(s);
      return (l[e] / 100) * i;
    }
    if (a === 'vh' || a === 'vw') {
      let u = void 0;
      return (
        a === 'vh'
          ? (u = Math.max(
              document.documentElement.clientHeight,
              window.innerHeight || 0
            ))
          : (u = Math.max(
              document.documentElement.clientWidth,
              window.innerWidth || 0
            )),
        (u / 100) * i
      );
    }
    return i;
  }
  function E0(t, e, n, r) {
    const o = [0, 0];
    const i = ['right', 'left'].indexOf(r) !== -1;
    const a = t.split(/(\+|\-)/).map((c) => c.trim());
    const s = a.indexOf(Lr(a, (c) => c.search(/,|\s/) !== -1));
    a[s] &&
      a[s].indexOf(',') === -1 &&
      console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
      );
    const l = /\s*,\s*|\s+/;
    let u =
      s !== -1
        ? [
            a.slice(0, s).concat([a[s].split(l)[0]]),
            [a[s].split(l)[1]].concat(a.slice(s + 1)),
          ]
        : [a];
    return (
      (u = u.map((c, f) => {
        const p = (f === 1 ? !i : i) ? 'height' : 'width';
        let d = !1;
        return c
          .reduce(
            (h, m) =>
              h[h.length - 1] === '' && ['+', '-'].indexOf(m) !== -1
                ? ((h[h.length - 1] = m), (d = !0), h)
                : d
                ? ((h[h.length - 1] += m), (d = !1), h)
                : h.concat(m),
            []
          )
          .map((h) => w0(h, p, e, n));
      })),
      u.forEach((c, f) => {
        c.forEach((p, d) => {
          Rs(p) && (o[f] += p * (c[d - 1] === '-' ? -1 : 1));
        });
      }),
      o
    );
  }
  function x0(t, e) {
    const n = e.offset;
    const r = t.placement;
    const o = t.offsets;
    const i = o.popper;
    const a = o.reference;
    const s = r.split('-')[0];
    let l = void 0;
    return (
      Rs(+n) ? (l = [+n, 0]) : (l = E0(n, i, a, s)),
      s === 'left'
        ? ((i.top += l[0]), (i.left -= l[1]))
        : s === 'right'
        ? ((i.top += l[0]), (i.left += l[1]))
        : s === 'top'
        ? ((i.left += l[0]), (i.top -= l[1]))
        : s === 'bottom' && ((i.left += l[0]), (i.top += l[1])),
      (t.popper = i),
      t
    );
  }
  function O0(t, e) {
    let n = e.boundariesElement || Rn(t.instance.popper);
    t.instance.reference === n && (n = Rn(n));
    const r = ks('transform');
    const o = t.instance.popper.style;
    const i = o.top;
    const a = o.left;
    const s = o[r];
    (o.top = ''), (o.left = ''), (o[r] = '');
    const l = As(
      t.instance.popper,
      t.instance.reference,
      e.padding,
      n,
      t.positionFixed
    );
    (o.top = i), (o.left = a), (o[r] = s), (e.boundaries = l);
    const u = e.priority;
    let c = t.offsets.popper;
    const f = {
      primary(p) {
        let d = c[p];
        return (
          c[p] < l[p] && !e.escapeWithReference && (d = Math.max(c[p], l[p])),
          Ze({}, p, d)
        );
      },
      secondary(p) {
        const d = p === 'right' ? 'left' : 'top';
        let h = c[d];
        return (
          c[p] > l[p] &&
            !e.escapeWithReference &&
            (h = Math.min(c[d], l[p] - (p === 'right' ? c.width : c.height))),
          Ze({}, d, h)
        );
      },
    };
    return (
      u.forEach((p) => {
        const d = ['left', 'top'].indexOf(p) !== -1 ? 'primary' : 'secondary';
        c = { ...c, ...f[d](p) };
      }),
      (t.offsets.popper = c),
      t
    );
  }
  function S0(t) {
    const e = t.placement;
    const n = e.split('-')[0];
    const r = e.split('-')[1];
    if (r) {
      const o = t.offsets;
      const i = o.reference;
      const a = o.popper;
      const s = ['bottom', 'top'].indexOf(n) !== -1;
      const l = s ? 'left' : 'top';
      const u = s ? 'width' : 'height';
      const c = { start: Ze({}, l, i[l]), end: Ze({}, l, i[l] + i[u] - a[u]) };
      t.offsets.popper = { ...a, ...c[r] };
    }
    return t;
  }
  function P0(t) {
    if (!Uf(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
    const e = t.offsets.reference;
    const n = Lr(
      t.instance.modifiers,
      (r) => r.name === 'preventOverflow'
    ).boundaries;
    if (
      e.bottom < n.top ||
      e.left > n.right ||
      e.top > n.bottom ||
      e.right < n.left
    ) {
      if (t.hide === !0) return t;
      (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
    } else {
      if (t.hide === !1) return t;
      (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
    }
    return t;
  }
  function T0(t) {
    const e = t.placement;
    const n = e.split('-')[0];
    const r = t.offsets;
    const o = r.popper;
    const i = r.reference;
    const a = ['left', 'right'].indexOf(n) !== -1;
    const s = ['top', 'left'].indexOf(n) === -1;
    return (
      (o[a ? 'left' : 'top'] = i[n] - (s ? o[a ? 'width' : 'height'] : 0)),
      (t.placement = Mo(e)),
      (t.offsets.popper = Le(o)),
      t
    );
  }
  let un;
  let Hf;
  let bu;
  let wu;
  let Ma;
  let Da;
  let Eu;
  let xu;
  let Ze;
  let Ut;
  let Wf;
  let Ii;
  let so;
  let lo;
  let Ou;
  let Su;
  let Qn;
  let Na;
  const C0 = v(() => {
    (un =
      typeof window < 'u' && typeof document < 'u' && typeof navigator < 'u'),
      (Hf = (function () {
        for (
          let t = ['Edge', 'Trident', 'Firefox'], e = 0;
          e < t.length;
          e += 1
        )
          if (un && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
        return 0;
      })()),
      (bu = un && window.Promise),
      (wu = bu ? Zy : $y),
      (Ma = un && !!(window.MSInputMethodContext && document.documentMode)),
      (Da = un && /MSIE 10/.test(navigator.userAgent)),
      (Eu = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }),
      (xu = (function () {
        function t(e, n) {
          for (let r = 0; r < n.length; r++) {
            const o = n[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        return function (e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e;
        };
      })()),
      (Ze = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }),
      (Ut =
        Object.assign ||
        function (t) {
          for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
      (Wf = un && /Firefox/i.test(navigator.userAgent)),
      (Ii = [
        'auto-start',
        'auto',
        'auto-end',
        'top-start',
        'top',
        'top-end',
        'right-start',
        'right',
        'right-end',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left-end',
        'left',
        'left-start',
      ]),
      (so = Ii.slice(3)),
      (lo = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise',
      }),
      (Ou = {
        shift: { order: 100, enabled: !0, fn: S0 },
        offset: { order: 200, enabled: !0, fn: x0, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: O0,
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: { order: 400, enabled: !0, fn: b0 },
        arrow: { order: 500, enabled: !0, fn: v0, element: '[x-arrow]' },
        flip: {
          order: 600,
          enabled: !0,
          fn: y0,
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: { order: 700, enabled: !1, fn: T0 },
        hide: { order: 800, enabled: !0, fn: P0 },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: m0,
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: f0,
          onLoad: d0,
          gpuAcceleration: void 0,
        },
      }),
      (Su = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate() {},
        onUpdate() {},
        modifiers: Ou,
      }),
      (Qn = (function () {
        function t(e, n) {
          const r = this;
          const o =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          Eu(this, t),
            (this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update);
            }),
            (this.update = wu(this.update.bind(this))),
            (this.options = { ...t.Defaults, ...o }),
            (this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: [],
            }),
            (this.reference = e && e.jquery ? e[0] : e),
            (this.popper = n && n.jquery ? n[0] : n),
            (this.options.modifiers = {}),
            Object.keys({ ...t.Defaults.modifiers, ...o.modifiers }).forEach(
              (a) => {
                r.options.modifiers[a] = {
                  ...(t.Defaults.modifiers[a] || {}),
                  ...(o.modifiers ? o.modifiers[a] : {}),
                };
              }
            ),
            (this.modifiers = Object.keys(this.options.modifiers)
              .map((a) => ({ name: a, ...r.options.modifiers[a] }))
              .sort((a, s) => a.order - s.order)),
            this.modifiers.forEach((a) => {
              a.enabled &&
                Af(a.onLoad) &&
                a.onLoad(r.reference, r.popper, r.options, a, r.state);
            }),
            this.update();
          const i = this.options.eventsEnabled;
          i && this.enableEventListeners(), (this.state.eventsEnabled = i);
        }
        return (
          xu(t, [
            {
              key: 'update',
              value() {
                return i0.call(this);
              },
            },
            {
              key: 'destroy',
              value() {
                return a0.call(this);
              },
            },
            {
              key: 'enableEventListeners',
              value() {
                return l0.call(this);
              },
            },
            {
              key: 'disableEventListeners',
              value() {
                return c0.call(this);
              },
            },
          ]),
          t
        );
      })()),
      (Qn.Utils = window.PopperUtils),
      (Qn.placements = Ii),
      (Qn.Defaults = Su),
      (Na = Qn);
  });
  function Pu(t, e) {
    const n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      let r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter((o) => Object.getOwnPropertyDescriptor(t, o).enumerable)),
        n.push.apply(n, r);
    }
    return n;
  }
  function ut(t) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Pu(Object(n), !0).forEach((r) => {
            kt(t, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Pu(Object(n)).forEach((r) => {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return t;
  }
  function Jn(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function Tu(t, e) {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function Zn(t, e, n) {
    return (
      e && Tu(t.prototype, e),
      n && Tu(t, n),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      t
    );
  }
  function kt(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function $n(t, e) {
    if (typeof e !== 'function' && e !== null)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && Ia(t, e);
  }
  function Do(t) {
    return (
      (Do = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      Do(t)
    );
  }
  function Ia(t, e) {
    return (
      (Ia = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      Ia(t, e)
    );
  }
  function A0() {
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
  function k0(t, e) {
    if (t == null) return {};
    const n = {};
    const r = Object.keys(t);
    let o;
    let i;
    for (i = 0; i < r.length; i++)
      (o = r[i]), !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n;
  }
  function Cu(t, e) {
    if (t == null) return {};
    const n = k0(t, e);
    let r;
    let o;
    if (Object.getOwnPropertySymbols) {
      const i = Object.getOwnPropertySymbols(t);
      for (o = 0; o < i.length; o++)
        (r = i[o]),
          !(e.indexOf(r) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(t, r) &&
            (n[r] = t[r]);
    }
    return n;
  }
  function he(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function R0(t, e) {
    if (e && (typeof e === 'object' || typeof e === 'function')) return e;
    if (e !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return he(t);
  }
  function tr(t) {
    const e = A0();
    return function () {
      const n = Do(t);
      let r;
      if (e) {
        const o = Do(this).constructor;
        r = Reflect.construct(n, arguments, o);
      } else r = n.apply(this, arguments);
      return R0(this, r);
    };
  }
  function Li() {
    return 'ontouchstart' in window && /Mobi/.test(navigator.userAgent);
  }
  function qr(t) {
    const e = t.title;
    const n = t.data;
    const r = t.warn;
    const o = r === void 0 ? !1 : r;
    const i = t.debug;
    const a = i === void 0 ? !1 : i;
    const s = o ? console.warn || console.error : console.log;
    a &&
      e &&
      n &&
      (console.groupCollapsed(
        '%creact-floater: '.concat(e),
        'color: #9b00ff; font-weight: bold; font-size: 12px;'
      ),
      Array.isArray(n)
        ? n.forEach((l) => {
            F.plainObject(l) && l.key
              ? s.apply(console, [l.key, l.value])
              : s.apply(console, [l]);
          })
        : s.apply(console, [n]),
      console.groupEnd());
  }
  function M0(t, e, n) {
    const r =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    t.addEventListener(e, n, r);
  }
  function D0(t, e, n) {
    const r =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    t.removeEventListener(e, n, r);
  }
  function N0(t, e, n) {
    const r =
      arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    let o;
    (o = function (i) {
      n(i), D0(t, e, o);
    }),
      M0(t, e, o, r);
  }
  function Au() {}
  function I0(t) {
    const e = (0, uo.default)(Yf, t.options || {});
    return {
      wrapper: {
        cursor: 'help',
        display: 'inline-flex',
        flexDirection: 'column',
        zIndex: e.zIndex,
      },
      wrapperPosition: {
        left: -1e3,
        position: 'absolute',
        top: -1e3,
        visibility: 'hidden',
      },
      floater: {
        display: 'inline-block',
        filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))',
        maxWidth: 300,
        opacity: 0,
        position: 'relative',
        transition: 'opacity 0.3s',
        visibility: 'hidden',
        zIndex: e.zIndex,
      },
      floaterOpening: { opacity: 1, visibility: 'visible' },
      floaterWithAnimation: {
        opacity: 1,
        transition: 'opacity 0.3s, transform 0.2s',
        visibility: 'visible',
      },
      floaterWithComponent: { maxWidth: '100%' },
      floaterClosing: { opacity: 0, visibility: 'visible' },
      floaterCentered: {
        left: '50%',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      },
      container: {
        backgroundColor: '#fff',
        color: '#666',
        minHeight: 60,
        minWidth: 200,
        padding: 20,
        position: 'relative',
        zIndex: 10,
      },
      title: {
        borderBottom: '1px solid #555',
        color: '#555',
        fontSize: 18,
        marginBottom: 5,
        paddingBottom: 6,
        paddingRight: 18,
      },
      content: { fontSize: 15 },
      close: {
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 0,
        color: '#555',
        fontSize: 0,
        height: 15,
        outline: 'none',
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        width: 15,
        WebkitAppearance: 'none',
      },
      footer: {
        borderTop: '1px solid #ccc',
        fontSize: 13,
        marginTop: 10,
        paddingTop: 5,
      },
      arrow: {
        color: '#fff',
        display: 'inline-flex',
        length: 16,
        margin: 8,
        position: 'absolute',
        spread: 32,
      },
      options: e,
    };
  }
  let R;
  let ji;
  let uo;
  let ku;
  let Ru;
  let J;
  let ie;
  let cn;
  let Fi;
  let Vi;
  let Mu;
  let Bi;
  let zi;
  let Ui;
  let Hi;
  let Yf;
  let Du;
  let Nu;
  let co;
  const L0 = v(() => {
    (R = le(Ry())),
      (ji = le(Jy())),
      C0(),
      (uo = le(Cf())),
      Ss(),
      Of(),
      (ku = le(Tf())),
      (Ru = { flip: { padding: 20 }, preventOverflow: { padding: 10 } }),
      (J = {
        INIT: 'init',
        IDLE: 'idle',
        OPENING: 'opening',
        OPEN: 'open',
        CLOSING: 'closing',
        ERROR: 'error',
      }),
      (ie = ku.default.canUseDOM),
      (cn = oe.createPortal !== void 0),
      (Fi = (function (t) {
        $n(n, t);
        const e = tr(n);
        function n() {
          return Jn(this, n), e.apply(this, arguments);
        }
        return (
          Zn(n, [
            {
              key: 'componentDidMount',
              value() {
                ie &&
                  (this.node || this.appendNode(), cn || this.renderPortal());
              },
            },
            {
              key: 'componentDidUpdate',
              value() {
                ie && (cn || this.renderPortal());
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                !ie ||
                  !this.node ||
                  (cn || oe.unmountComponentAtNode(this.node),
                  this.node &&
                    this.node.parentNode === document.body &&
                    (document.body.removeChild(this.node),
                    (this.node = void 0)));
              },
            },
            {
              key: 'appendNode',
              value() {
                const r = this.props;
                const o = r.id;
                const i = r.zIndex;
                this.node ||
                  ((this.node = document.createElement('div')),
                  o && (this.node.id = o),
                  i && (this.node.style.zIndex = i),
                  document.body.appendChild(this.node));
              },
            },
            {
              key: 'renderPortal',
              value() {
                if (!ie) return null;
                const r = this.props;
                const o = r.children;
                const i = r.setRef;
                if ((this.node || this.appendNode(), cn))
                  return oe.createPortal(o, this.node);
                const a = oe.unstable_renderSubtreeIntoContainer(
                  this,
                  o.length > 1 ? g.createElement('div', null, o) : o[0],
                  this.node
                );
                return i(a), null;
              },
            },
            {
              key: 'renderReact16',
              value() {
                const r = this.props;
                const o = r.hasChildren;
                const i = r.placement;
                const a = r.target;
                return o
                  ? this.renderPortal()
                  : a || i === 'center'
                  ? this.renderPortal()
                  : null;
              },
            },
            {
              key: 'render',
              value() {
                return cn ? this.renderReact16() : null;
              },
            },
          ]),
          n
        );
      })(g.Component)),
      kt(Fi, 'propTypes', {
        children: R.default.oneOfType([R.default.element, R.default.array]),
        hasChildren: R.default.bool,
        id: R.default.oneOfType([R.default.string, R.default.number]),
        placement: R.default.string,
        setRef: R.default.func.isRequired,
        target: R.default.oneOfType([R.default.object, R.default.string]),
        zIndex: R.default.number,
      }),
      (Vi = (function (t) {
        $n(n, t);
        const e = tr(n);
        function n() {
          return Jn(this, n), e.apply(this, arguments);
        }
        return (
          Zn(n, [
            {
              key: 'parentStyle',
              get() {
                const r = this.props;
                const o = r.placement;
                const i = r.styles;
                const a = i.arrow.length;
                const s = {
                  pointerEvents: 'none',
                  position: 'absolute',
                  width: '100%',
                };
                return (
                  o.startsWith('top')
                    ? ((s.bottom = 0),
                      (s.left = 0),
                      (s.right = 0),
                      (s.height = a))
                    : o.startsWith('bottom')
                    ? ((s.left = 0), (s.right = 0), (s.top = 0), (s.height = a))
                    : o.startsWith('left')
                    ? ((s.right = 0), (s.top = 0), (s.bottom = 0))
                    : o.startsWith('right') && ((s.left = 0), (s.top = 0)),
                  s
                );
              },
            },
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.placement;
                const i = r.setArrowRef;
                const a = r.styles;
                const s = a.arrow;
                const l = s.color;
                const u = s.display;
                const c = s.length;
                const f = s.margin;
                const p = s.position;
                const d = s.spread;
                const h = { display: u, position: p };
                let m;
                let y = d;
                let E = c;
                return (
                  o.startsWith('top')
                    ? ((m = '0,0 '
                        .concat(y / 2, ',')
                        .concat(E, ' ')
                        .concat(y, ',0')),
                      (h.bottom = 0),
                      (h.marginLeft = f),
                      (h.marginRight = f))
                    : o.startsWith('bottom')
                    ? ((m = ''
                        .concat(y, ',')
                        .concat(E, ' ')
                        .concat(y / 2, ',0 0,')
                        .concat(E)),
                      (h.top = 0),
                      (h.marginLeft = f),
                      (h.marginRight = f))
                    : o.startsWith('left')
                    ? ((E = d),
                      (y = c),
                      (m = '0,0 '
                        .concat(y, ',')
                        .concat(E / 2, ' 0,')
                        .concat(E)),
                      (h.right = 0),
                      (h.marginTop = f),
                      (h.marginBottom = f))
                    : o.startsWith('right') &&
                      ((E = d),
                      (y = c),
                      (m = ''
                        .concat(y, ',')
                        .concat(E, ' ')
                        .concat(y, ',0 0,')
                        .concat(E / 2)),
                      (h.left = 0),
                      (h.marginTop = f),
                      (h.marginBottom = f)),
                  g.createElement(
                    'div',
                    { className: '__floater__arrow', style: this.parentStyle },
                    g.createElement(
                      'span',
                      { ref: i, style: h },
                      g.createElement(
                        'svg',
                        {
                          width: y,
                          height: E,
                          version: '1.1',
                          xmlns: 'http://www.w3.org/2000/svg',
                        },
                        g.createElement('polygon', { points: m, fill: l })
                      )
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      kt(Vi, 'propTypes', {
        placement: R.default.string.isRequired,
        setArrowRef: R.default.func.isRequired,
        styles: R.default.object.isRequired,
      }),
      (Mu = ['color', 'height', 'width']),
      (Bi = function (t) {
        const e = t.handleClick;
        const n = t.styles;
        const r = n.color;
        const o = n.height;
        const i = n.width;
        const a = Cu(n, Mu);
        return g.createElement(
          'button',
          { 'aria-label': 'close', onClick: e, style: a, type: 'button' },
          g.createElement(
            'svg',
            {
              width: ''.concat(i, 'px'),
              height: ''.concat(o, 'px'),
              viewBox: '0 0 18 18',
              version: '1.1',
              xmlns: 'http://www.w3.org/2000/svg',
              preserveAspectRatio: 'xMidYMid',
            },
            g.createElement(
              'g',
              null,
              g.createElement('path', {
                d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
                fill: r,
              })
            )
          )
        );
      }),
      (Bi.propTypes = {
        handleClick: R.default.func.isRequired,
        styles: R.default.object.isRequired,
      }),
      (zi = function (t) {
        const e = t.content;
        const n = t.footer;
        const r = t.handleClick;
        const o = t.open;
        const i = t.positionWrapper;
        const a = t.showCloseButton;
        const s = t.title;
        const l = t.styles;
        const u = {
          content: g.isValidElement(e)
            ? e
            : g.createElement(
                'div',
                { className: '__floater__content', style: l.content },
                e
              ),
        };
        return (
          s &&
            (u.title = g.isValidElement(s)
              ? s
              : g.createElement(
                  'div',
                  { className: '__floater__title', style: l.title },
                  s
                )),
          n &&
            (u.footer = g.isValidElement(n)
              ? n
              : g.createElement(
                  'div',
                  { className: '__floater__footer', style: l.footer },
                  n
                )),
          (a || i) &&
            !F.boolean(o) &&
            (u.close = g.createElement(Bi, {
              styles: l.close,
              handleClick: r,
            })),
          g.createElement(
            'div',
            { className: '__floater__container', style: l.container },
            u.close,
            u.title,
            u.content,
            u.footer
          )
        );
      }),
      (zi.propTypes = {
        content: R.default.node.isRequired,
        footer: R.default.node,
        handleClick: R.default.func.isRequired,
        open: R.default.bool,
        positionWrapper: R.default.bool.isRequired,
        showCloseButton: R.default.bool.isRequired,
        styles: R.default.object.isRequired,
        title: R.default.node,
      }),
      (Ui = (function (t) {
        $n(n, t);
        const e = tr(n);
        function n() {
          return Jn(this, n), e.apply(this, arguments);
        }
        return (
          Zn(n, [
            {
              key: 'style',
              get() {
                const r = this.props;
                const o = r.disableAnimation;
                const i = r.component;
                const a = r.placement;
                const s = r.hideArrow;
                const l = r.status;
                const u = r.styles;
                const c = u.arrow.length;
                const f = u.floater;
                const p = u.floaterCentered;
                const d = u.floaterClosing;
                const h = u.floaterOpening;
                const m = u.floaterWithAnimation;
                const y = u.floaterWithComponent;
                let E = {};
                return (
                  s ||
                    (a.startsWith('top')
                      ? (E.padding = '0 0 '.concat(c, 'px'))
                      : a.startsWith('bottom')
                      ? (E.padding = ''.concat(c, 'px 0 0'))
                      : a.startsWith('left')
                      ? (E.padding = '0 '.concat(c, 'px 0 0'))
                      : a.startsWith('right') &&
                        (E.padding = '0 0 0 '.concat(c, 'px'))),
                  [J.OPENING, J.OPEN].indexOf(l) !== -1 &&
                    (E = ut(ut({}, E), h)),
                  l === J.CLOSING && (E = ut(ut({}, E), d)),
                  l === J.OPEN && !o && (E = ut(ut({}, E), m)),
                  a === 'center' && (E = ut(ut({}, E), p)),
                  i && (E = ut(ut({}, E), y)),
                  ut(ut({}, f), E)
                );
              },
            },
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.component;
                const i = r.handleClick;
                const a = r.hideArrow;
                const s = r.setFloaterRef;
                const l = r.status;
                const u = {};
                const c = ['__floater'];
                return (
                  o
                    ? g.isValidElement(o)
                      ? (u.content = g.cloneElement(o, { closeFn: i }))
                      : (u.content = o({ closeFn: i }))
                    : (u.content = g.createElement(zi, this.props)),
                  l === J.OPEN && c.push('__floater__open'),
                  a || (u.arrow = g.createElement(Vi, this.props)),
                  g.createElement(
                    'div',
                    { ref: s, className: c.join(' '), style: this.style },
                    g.createElement(
                      'div',
                      { className: '__floater__body' },
                      u.content,
                      u.arrow
                    )
                  )
                );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      kt(Ui, 'propTypes', {
        component: R.default.oneOfType([R.default.func, R.default.element]),
        content: R.default.node,
        disableAnimation: R.default.bool.isRequired,
        footer: R.default.node,
        handleClick: R.default.func.isRequired,
        hideArrow: R.default.bool.isRequired,
        open: R.default.bool,
        placement: R.default.string.isRequired,
        positionWrapper: R.default.bool.isRequired,
        setArrowRef: R.default.func.isRequired,
        setFloaterRef: R.default.func.isRequired,
        showCloseButton: R.default.bool,
        status: R.default.string.isRequired,
        styles: R.default.object.isRequired,
        title: R.default.node,
      }),
      (Hi = (function (t) {
        $n(n, t);
        const e = tr(n);
        function n() {
          return Jn(this, n), e.apply(this, arguments);
        }
        return (
          Zn(n, [
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.children;
                const i = r.handleClick;
                const a = r.handleMouseEnter;
                const s = r.handleMouseLeave;
                const l = r.setChildRef;
                const u = r.setWrapperRef;
                const c = r.style;
                const f = r.styles;
                let p;
                if (o)
                  if (g.Children.count(o) === 1)
                    if (!g.isValidElement(o))
                      p = g.createElement('span', null, o);
                    else {
                      const d = F.function(o.type) ? 'innerRef' : 'ref';
                      p = g.cloneElement(g.Children.only(o), kt({}, d, l));
                    }
                  else p = o;
                return p
                  ? g.createElement(
                      'span',
                      {
                        ref: u,
                        style: ut(ut({}, f), c),
                        onClick: i,
                        onMouseEnter: a,
                        onMouseLeave: s,
                      },
                      p
                    )
                  : null;
              },
            },
          ]),
          n
        );
      })(g.Component)),
      kt(Hi, 'propTypes', {
        children: R.default.node,
        handleClick: R.default.func.isRequired,
        handleMouseEnter: R.default.func.isRequired,
        handleMouseLeave: R.default.func.isRequired,
        setChildRef: R.default.func.isRequired,
        setWrapperRef: R.default.func.isRequired,
        style: R.default.object,
        styles: R.default.object.isRequired,
      }),
      (Yf = { zIndex: 100 }),
      (Du = ['arrow', 'flip', 'offset']),
      (Nu = ['position', 'top', 'right', 'bottom', 'left']),
      (co = (function (t) {
        $n(n, t);
        const e = tr(n);
        function n(r) {
          let o;
          return (
            Jn(this, n),
            (o = e.call(this, r)),
            kt(he(o), 'setArrowRef', (i) => {
              o.arrowRef = i;
            }),
            kt(he(o), 'setChildRef', (i) => {
              o.childRef = i;
            }),
            kt(he(o), 'setFloaterRef', (i) => {
              o.floaterRef = i;
            }),
            kt(he(o), 'setWrapperRef', (i) => {
              o.wrapperRef = i;
            }),
            kt(he(o), 'handleTransitionEnd', () => {
              const i = o.state.status;
              const a = o.props.callback;
              o.wrapperPopper && o.wrapperPopper.instance.update(),
                o.setState(
                  { status: i === J.OPENING ? J.OPEN : J.IDLE },
                  () => {
                    const s = o.state.status;
                    a(s === J.OPEN ? 'open' : 'close', o.props);
                  }
                );
            }),
            kt(he(o), 'handleClick', () => {
              const i = o.props;
              const a = i.event;
              const s = i.open;
              if (!F.boolean(s)) {
                const l = o.state;
                const u = l.positionWrapper;
                const c = l.status;
                (o.event === 'click' || (o.event === 'hover' && u)) &&
                  (qr({
                    title: 'click',
                    data: [
                      {
                        event: a,
                        status: c === J.OPEN ? 'closing' : 'opening',
                      },
                    ],
                    debug: o.debug,
                  }),
                  o.toggle());
              }
            }),
            kt(he(o), 'handleMouseEnter', () => {
              const i = o.props;
              const a = i.event;
              const s = i.open;
              if (!(F.boolean(s) || Li())) {
                const l = o.state.status;
                o.event === 'hover' &&
                  l === J.IDLE &&
                  (qr({
                    title: 'mouseEnter',
                    data: [{ key: 'originalEvent', value: a }],
                    debug: o.debug,
                  }),
                  clearTimeout(o.eventDelayTimeout),
                  o.toggle());
              }
            }),
            kt(he(o), 'handleMouseLeave', () => {
              const i = o.props;
              const a = i.event;
              const s = i.eventDelay;
              const l = i.open;
              if (!(F.boolean(l) || Li())) {
                const u = o.state;
                const c = u.status;
                const f = u.positionWrapper;
                o.event === 'hover' &&
                  (qr({
                    title: 'mouseLeave',
                    data: [{ key: 'originalEvent', value: a }],
                    debug: o.debug,
                  }),
                  s
                    ? [J.OPENING, J.OPEN].indexOf(c) !== -1 &&
                      !f &&
                      !o.eventDelayTimeout &&
                      (o.eventDelayTimeout = setTimeout(() => {
                        delete o.eventDelayTimeout, o.toggle();
                      }, s * 1e3))
                    : o.toggle(J.IDLE));
              }
            }),
            (o.state = {
              currentPlacement: r.placement,
              needsUpdate: !1,
              positionWrapper: r.wrapperOptions.position && !!r.target,
              status: J.INIT,
              statusWrapper: J.INIT,
            }),
            (o._isMounted = !1),
            (o.hasMounted = !1),
            ie &&
              window.addEventListener('load', () => {
                o.popper && o.popper.instance.update(),
                  o.wrapperPopper && o.wrapperPopper.instance.update();
              }),
            o
          );
        }
        return (
          Zn(n, [
            {
              key: 'componentDidMount',
              value() {
                if (ie) {
                  const r = this.state.positionWrapper;
                  const o = this.props;
                  const i = o.children;
                  const a = o.open;
                  const s = o.target;
                  (this._isMounted = !0),
                    qr({
                      title: 'init',
                      data: {
                        hasChildren: !!i,
                        hasTarget: !!s,
                        isControlled: F.boolean(a),
                        positionWrapper: r,
                        target: this.target,
                        floater: this.floaterRef,
                      },
                      debug: this.debug,
                    }),
                    this.hasMounted ||
                      (this.initPopper(), (this.hasMounted = !0)),
                    !i && s && F.boolean(a);
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value(r, o) {
                if (ie) {
                  const i = this.props;
                  const a = i.autoOpen;
                  const s = i.open;
                  const l = i.target;
                  const u = i.wrapperOptions;
                  const c = ur(o, this.state);
                  const f = c.changedFrom;
                  const p = c.changed;
                  if (r.open !== s) {
                    let d;
                    F.boolean(s) && (d = s ? J.OPENING : J.CLOSING),
                      this.toggle(d);
                  }
                  (r.wrapperOptions.position !== u.position ||
                    r.target !== l) &&
                    this.changeWrapperPosition(this.props),
                    p('status', J.IDLE) && s
                      ? this.toggle(J.OPEN)
                      : f('status', J.INIT, J.IDLE) && a && this.toggle(J.OPEN),
                    this.popper &&
                      p('status', J.OPENING) &&
                      this.popper.instance.update(),
                    this.floaterRef &&
                      (p('status', J.OPENING) || p('status', J.CLOSING)) &&
                      N0(
                        this.floaterRef,
                        'transitionend',
                        this.handleTransitionEnd
                      ),
                    p('needsUpdate', !0) && this.rebuildPopper();
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                ie &&
                  ((this._isMounted = !1),
                  this.popper && this.popper.instance.destroy(),
                  this.wrapperPopper && this.wrapperPopper.instance.destroy());
              },
            },
            {
              key: 'initPopper',
              value() {
                const r = this;
                const o =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : this.target;
                const i = this.state.positionWrapper;
                const a = this.props;
                const s = a.disableFlip;
                const l = a.getPopper;
                const u = a.hideArrow;
                const c = a.offset;
                const f = a.placement;
                const p = a.wrapperOptions;
                const d =
                  f === 'top' || f === 'bottom'
                    ? 'flip'
                    : [
                        'right',
                        'bottom-end',
                        'top-end',
                        'left',
                        'top-start',
                        'bottom-start',
                      ];
                if (f === 'center') this.setState({ status: J.IDLE });
                else if (o && this.floaterRef) {
                  const h = this.options;
                  const m = h.arrow;
                  const y = h.flip;
                  const E = h.offset;
                  const x = Cu(h, Du);
                  new Na(o, this.floaterRef, {
                    placement: f,
                    modifiers: ut(
                      {
                        arrow: ut({ enabled: !u, element: this.arrowRef }, m),
                        flip: ut({ enabled: !s, behavior: d }, y),
                        offset: ut({ offset: '0, '.concat(c, 'px') }, E),
                      },
                      x
                    ),
                    onCreate(w) {
                      let O;
                      if (
                        ((r.popper = w),
                        !(
                          (O = r.floaterRef) !== null &&
                          O !== void 0 &&
                          O.isConnected
                        ))
                      ) {
                        r.setState({ needsUpdate: !0 });
                        return;
                      }
                      l(w, 'floater'),
                        r._isMounted &&
                          r.setState({
                            currentPlacement: w.placement,
                            status: J.IDLE,
                          }),
                        f !== w.placement &&
                          setTimeout(() => {
                            w.instance.update();
                          }, 1);
                    },
                    onUpdate(w) {
                      r.popper = w;
                      const O = r.state.currentPlacement;
                      r._isMounted &&
                        w.placement !== O &&
                        r.setState({ currentPlacement: w.placement });
                    },
                  });
                }
                if (i) {
                  const b = F.undefined(p.offset) ? 0 : p.offset;
                  new Na(this.target, this.wrapperRef, {
                    placement: p.placement || f,
                    modifiers: {
                      arrow: { enabled: !1 },
                      offset: { offset: '0, '.concat(b, 'px') },
                      flip: { enabled: !1 },
                    },
                    onCreate(w) {
                      (r.wrapperPopper = w),
                        r._isMounted && r.setState({ statusWrapper: J.IDLE }),
                        l(w, 'wrapper'),
                        f !== w.placement &&
                          setTimeout(() => {
                            w.instance.update();
                          }, 1);
                    },
                  });
                }
              },
            },
            {
              key: 'rebuildPopper',
              value() {
                const r = this;
                this.floaterRefInterval = setInterval(() => {
                  let o;
                  (o = r.floaterRef) !== null &&
                    o !== void 0 &&
                    o.isConnected &&
                    (clearInterval(r.floaterRefInterval),
                    r.setState({ needsUpdate: !1 }),
                    r.initPopper());
                }, 50);
              },
            },
            {
              key: 'changeWrapperPosition',
              value(r) {
                const o = r.target;
                const i = r.wrapperOptions;
                this.setState({ positionWrapper: i.position && !!o });
              },
            },
            {
              key: 'toggle',
              value(r) {
                const o = this.state.status;
                let i = o === J.OPEN ? J.CLOSING : J.OPENING;
                F.undefined(r) || (i = r), this.setState({ status: i });
              },
            },
            {
              key: 'debug',
              get() {
                const r = this.props.debug;
                return r || !!window.ReactFloaterDebug;
              },
            },
            {
              key: 'event',
              get() {
                const r = this.props;
                const o = r.disableHoverToClick;
                const i = r.event;
                return i === 'hover' && Li() && !o ? 'click' : i;
              },
            },
            {
              key: 'options',
              get() {
                const r = this.props.options;
                return (0, uo.default)(Ru, r || {});
              },
            },
            {
              key: 'styles',
              get() {
                const r = this;
                const o = this.state;
                const i = o.status;
                const a = o.positionWrapper;
                const s = o.statusWrapper;
                const l = this.props.styles;
                const u = (0, uo.default)(I0(l), l);
                if (a) {
                  let c;
                  [J.IDLE].indexOf(i) === -1 || [J.IDLE].indexOf(s) === -1
                    ? (c = u.wrapperPosition)
                    : (c = this.wrapperPopper.styles),
                    (u.wrapper = ut(ut({}, u.wrapper), c));
                }
                if (this.target) {
                  const f = window.getComputedStyle(this.target);
                  this.wrapperStyles
                    ? (u.wrapper = ut(ut({}, u.wrapper), this.wrapperStyles))
                    : ['relative', 'static'].indexOf(f.position) === -1 &&
                      ((this.wrapperStyles = {}),
                      a ||
                        (Nu.forEach((p) => {
                          r.wrapperStyles[p] = f[p];
                        }),
                        (u.wrapper = ut(ut({}, u.wrapper), this.wrapperStyles)),
                        (this.target.style.position = 'relative'),
                        (this.target.style.top = 'auto'),
                        (this.target.style.right = 'auto'),
                        (this.target.style.bottom = 'auto'),
                        (this.target.style.left = 'auto')));
                }
                return u;
              },
            },
            {
              key: 'target',
              get() {
                if (!ie) return null;
                const r = this.props.target;
                return r
                  ? F.domElement(r)
                    ? r
                    : document.querySelector(r)
                  : this.childRef || this.wrapperRef;
              },
            },
            {
              key: 'render',
              value() {
                const r = this.state;
                const o = r.currentPlacement;
                const i = r.positionWrapper;
                const a = r.status;
                const s = this.props;
                const l = s.children;
                const u = s.component;
                const c = s.content;
                const f = s.disableAnimation;
                const p = s.footer;
                const d = s.hideArrow;
                const h = s.id;
                const m = s.open;
                const y = s.showCloseButton;
                const E = s.style;
                const x = s.target;
                const b = s.title;
                const w = g.createElement(
                  Hi,
                  {
                    handleClick: this.handleClick,
                    handleMouseEnter: this.handleMouseEnter,
                    handleMouseLeave: this.handleMouseLeave,
                    setChildRef: this.setChildRef,
                    setWrapperRef: this.setWrapperRef,
                    style: E,
                    styles: this.styles.wrapper,
                  },
                  l
                );
                const O = {};
                return (
                  i ? (O.wrapperInPortal = w) : (O.wrapperAsChildren = w),
                  g.createElement(
                    'span',
                    null,
                    g.createElement(
                      Fi,
                      {
                        hasChildren: !!l,
                        id: h,
                        placement: o,
                        setRef: this.setFloaterRef,
                        target: x,
                        zIndex: this.styles.options.zIndex,
                      },
                      g.createElement(Ui, {
                        component: u,
                        content: c,
                        disableAnimation: f,
                        footer: p,
                        handleClick: this.handleClick,
                        hideArrow: d || o === 'center',
                        open: m,
                        placement: o,
                        positionWrapper: i,
                        setArrowRef: this.setArrowRef,
                        setFloaterRef: this.setFloaterRef,
                        showCloseButton: y,
                        status: a,
                        styles: this.styles,
                        title: b,
                      }),
                      O.wrapperInPortal
                    ),
                    O.wrapperAsChildren
                  )
                );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      kt(co, 'propTypes', {
        autoOpen: R.default.bool,
        callback: R.default.func,
        children: R.default.node,
        component: (0, ji.default)(
          R.default.oneOfType([R.default.func, R.default.element]),
          (t) => !t.content
        ),
        content: (0, ji.default)(R.default.node, (t) => !t.component),
        debug: R.default.bool,
        disableAnimation: R.default.bool,
        disableFlip: R.default.bool,
        disableHoverToClick: R.default.bool,
        event: R.default.oneOf(['hover', 'click']),
        eventDelay: R.default.number,
        footer: R.default.node,
        getPopper: R.default.func,
        hideArrow: R.default.bool,
        id: R.default.oneOfType([R.default.string, R.default.number]),
        offset: R.default.number,
        open: R.default.bool,
        options: R.default.object,
        placement: R.default.oneOf([
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
          'auto',
          'center',
        ]),
        showCloseButton: R.default.bool,
        style: R.default.object,
        styles: R.default.object,
        target: R.default.oneOfType([R.default.object, R.default.string]),
        title: R.default.node,
        wrapperOptions: R.default.shape({
          offset: R.default.number,
          placement: R.default.oneOf([
            'top',
            'top-start',
            'top-end',
            'bottom',
            'bottom-start',
            'bottom-end',
            'left',
            'left-start',
            'left-end',
            'right',
            'right-start',
            'right-end',
            'auto',
          ]),
          position: R.default.bool,
        }),
      }),
      kt(co, 'defaultProps', {
        autoOpen: !1,
        callback: Au,
        debug: !1,
        disableAnimation: !1,
        disableFlip: !1,
        disableHoverToClick: !1,
        event: 'click',
        eventDelay: 0.4,
        getPopper: Au,
        hideArrow: !1,
        offset: 15,
        placement: 'bottom',
        showCloseButton: !1,
        styles: {},
        target: null,
        wrapperOptions: { position: !1 },
      });
  });
  function Iu(t, e) {
    const n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      let r = Object.getOwnPropertySymbols(t);
      e &&
        (r = r.filter((o) => Object.getOwnPropertyDescriptor(t, o).enumerable)),
        n.push.apply(n, r);
    }
    return n;
  }
  function D(t) {
    for (let e = 1; e < arguments.length; e++) {
      var n = arguments[e] != null ? arguments[e] : {};
      e % 2
        ? Iu(Object(n), !0).forEach((r) => {
            H(t, r, n[r]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : Iu(Object(n)).forEach((r) => {
            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
          });
    }
    return t;
  }
  function me(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function Lu(t, e) {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, qf(r.key), r);
    }
  }
  function ve(t, e, n) {
    return (
      e && Lu(t.prototype, e),
      n && Lu(t, n),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      t
    );
  }
  function H(t, e, n) {
    return (
      (e = qf(e)),
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function Bt() {
    return (
      (Bt = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (let e = 1; e < arguments.length; e++) {
              const n = arguments[e];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      Bt.apply(this, arguments)
    );
  }
  function ze(t, e) {
    if (typeof e !== 'function' && e !== null)
      throw new TypeError('Super expression must either be null or a function');
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, 'prototype', { writable: !1 }),
      e && La(t, e);
  }
  function No(t) {
    return (
      (No = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      No(t)
    );
  }
  function La(t, e) {
    return (
      (La = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      La(t, e)
    );
  }
  function j0() {
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
  function F0(t, e) {
    if (t == null) return {};
    const n = {};
    const r = Object.keys(t);
    let o;
    let i;
    for (i = 0; i < r.length; i++)
      (o = r[i]), !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n;
  }
  function Io(t, e) {
    if (t == null) return {};
    const n = F0(t, e);
    let r;
    let o;
    if (Object.getOwnPropertySymbols) {
      const i = Object.getOwnPropertySymbols(t);
      for (o = 0; o < i.length; o++)
        (r = i[o]),
          !(e.indexOf(r) >= 0) &&
            Object.prototype.propertyIsEnumerable.call(t, r) &&
            (n[r] = t[r]);
    }
    return n;
  }
  function pt(t) {
    if (t === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function V0(t, e) {
    if (e && (typeof e === 'object' || typeof e === 'function')) return e;
    if (e !== void 0)
      throw new TypeError(
        'Derived constructors may only return object or undefined'
      );
    return pt(t);
  }
  function Ue(t) {
    const e = j0();
    return function () {
      const n = No(t);
      let r;
      if (e) {
        const o = No(this).constructor;
        r = Reflect.construct(n, arguments, o);
      } else r = n.apply(this, arguments);
      return V0(this, r);
    };
  }
  function B0(t, e) {
    if (typeof t !== 'object' || t === null) return t;
    const n = t[Symbol.toPrimitive];
    if (n !== void 0) {
      const r = n.call(t, e || 'default');
      if (typeof r !== 'object') return r;
      throw new TypeError('@@toPrimitive must return a primitive value.');
    }
    return (e === 'string' ? String : Number)(t);
  }
  function qf(t) {
    const e = B0(t, 'string');
    return typeof e === 'symbol' ? e : String(e);
  }
  function Gf() {
    const t =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : navigator.userAgent;
    let e = t;
    return (
      typeof window > 'u'
        ? (e = 'node')
        : document.documentMode
        ? (e = 'ie')
        : /Edge/.test(t)
        ? (e = 'edge')
        : window.opera || t.indexOf(' OPR/') >= 0
        ? (e = 'opera')
        : typeof window.InstallTrigger < 'u'
        ? (e = 'firefox')
        : window.chrome
        ? (e = 'chrome')
        : /(Version\/([0-9._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(t) &&
          (e = 'safari'),
      e
    );
  }
  function Wi(t) {
    return Object.prototype.toString.call(t).slice(8, -1).toLowerCase();
  }
  function er(t) {
    const e = [];
    const n = function r(o) {
      if (typeof o === 'string' || typeof o === 'number') e.push(o);
      else if (Array.isArray(o)) o.forEach((a) => r(a));
      else if (o && o.props) {
        const i = o.props.children;
        Array.isArray(i) ? i.forEach((a) => r(a)) : r(i);
      }
    };
    return n(t), e.join(' ').trim();
  }
  function ju(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function z0(t, e) {
    return !ft.plainObject(t) || !ft.array(e)
      ? !1
      : Object.keys(t).every((n) => e.indexOf(n) !== -1);
  }
  function U0(t) {
    const e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const n = t.replace(e, (o, i, a, s) => i + i + a + a + s + s);
    const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);
    return r
      ? [parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)]
      : [];
  }
  function Fu(t) {
    return t.disableBeacon || t.placement === 'center';
  }
  function ja(t, e) {
    let n;
    const r = Pe(t) || Pe(e);
    const o = ft.undefined(t) || ft.undefined(e);
    if (Wi(t) !== Wi(e) || r || o) return !1;
    if (ft.domElement(t)) return t.isSameNode(e);
    if (ft.number(t)) return t === e;
    if (ft.function(t)) return t.toString() === e.toString();
    for (const i in t)
      if (ju(t, i)) {
        if (typeof t[i] > 'u' || typeof e[i] > 'u') return !1;
        if (
          ((n = Wi(t[i])),
          (['object', 'array'].indexOf(n) !== -1 && ja(t[i], e[i])) ||
            (n === 'function' && ja(t[i], e[i])))
        )
          continue;
        if (t[i] !== e[i]) return !1;
      }
    for (const a in e) if (ju(e, a) && typeof t[a] > 'u') return !1;
    return !0;
  }
  function Vu() {
    return ['chrome', 'safari', 'firefox', 'opera'].indexOf(Gf()) === -1;
  }
  function _e(t) {
    const e = t.title;
    const n = t.data;
    const r = t.warn;
    const o = r === void 0 ? !1 : r;
    const i = t.debug;
    const a = i === void 0 ? !1 : i;
    const s = o ? console.warn || console.error : console.log;
    a &&
      (e && n
        ? (console.groupCollapsed(
            '%creact-joyride: '.concat(e),
            'color: #ff0044; font-weight: bold; font-size: 12px;'
          ),
          Array.isArray(n)
            ? n.forEach((l) => {
                ft.plainObject(l) && l.key
                  ? s.apply(console, [l.key, l.value])
                  : s.apply(console, [l]);
              })
            : s.apply(console, [n]),
          console.groupEnd())
        : console.error('Missing title or data props'));
  }
  function H0(t) {
    const e = new Map();
    const n = new Map();
    const r = (function () {
      function o() {
        const i = this;
        const a =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const s = a.continuous;
        const l = s === void 0 ? !1 : s;
        const u = a.stepIndex;
        const c = a.steps;
        const f = c === void 0 ? [] : c;
        me(this, o),
          H(this, 'listener', void 0),
          H(this, 'setSteps', (p) => {
            const d = i.getState();
            const h = d.size;
            const m = d.status;
            const y = { size: p.length, status: m };
            n.set('steps', p),
              m === K.WAITING && !h && p.length && (y.status = K.RUNNING),
              i.setState(y);
          }),
          H(this, 'addListener', (p) => {
            i.listener = p;
          }),
          H(this, 'update', (p) => {
            if (!z0(p, Va))
              throw new Error(
                'State is not valid. Valid keys: '.concat(Va.join(', '))
              );
            i.setState(
              D(
                {},
                i.getNextState(
                  D(
                    D(D({}, i.getState()), p),
                    {},
                    { action: p.action || tt.UPDATE }
                  ),
                  !0
                )
              )
            );
          }),
          H(this, 'start', (p) => {
            const d = i.getState();
            const h = d.index;
            const m = d.size;
            i.setState(
              D(
                D(
                  {},
                  i.getNextState(
                    { action: tt.START, index: ft.number(p) ? p : h },
                    !0
                  )
                ),
                {},
                { status: m ? K.RUNNING : K.WAITING }
              )
            );
          }),
          H(this, 'stop', function () {
            const p =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !1;
            const d = i.getState();
            const h = d.index;
            const m = d.status;
            [K.FINISHED, K.SKIPPED].indexOf(m) === -1 &&
              i.setState(
                D(
                  D(
                    {},
                    i.getNextState({ action: tt.STOP, index: h + (p ? 1 : 0) })
                  ),
                  {},
                  { status: K.PAUSED }
                )
              );
          }),
          H(this, 'close', () => {
            const p = i.getState();
            const d = p.index;
            const h = p.status;
            h === K.RUNNING &&
              i.setState(
                D({}, i.getNextState({ action: tt.CLOSE, index: d + 1 }))
              );
          }),
          H(this, 'go', (p) => {
            const d = i.getState();
            const h = d.controlled;
            const m = d.status;
            if (!(h || m !== K.RUNNING)) {
              const y = i.getSteps()[p];
              i.setState(
                D(
                  D({}, i.getNextState({ action: tt.GO, index: p })),
                  {},
                  { status: y ? m : K.FINISHED }
                )
              );
            }
          }),
          H(this, 'info', () => i.getState()),
          H(this, 'next', () => {
            const p = i.getState();
            const d = p.index;
            const h = p.status;
            h === K.RUNNING &&
              i.setState(i.getNextState({ action: tt.NEXT, index: d + 1 }));
          }),
          H(this, 'open', () => {
            const p = i.getState();
            const d = p.status;
            d === K.RUNNING &&
              i.setState(
                D(
                  {},
                  i.getNextState({ action: tt.UPDATE, lifecycle: _.TOOLTIP })
                )
              );
          }),
          H(this, 'prev', () => {
            const p = i.getState();
            const d = p.index;
            const h = p.status;
            h === K.RUNNING &&
              i.setState(
                D({}, i.getNextState({ action: tt.PREV, index: d - 1 }))
              );
          }),
          H(this, 'reset', function () {
            const p =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : !1;
            const d = i.getState();
            const h = d.controlled;
            h ||
              i.setState(
                D(
                  D({}, i.getNextState({ action: tt.RESET, index: 0 })),
                  {},
                  { status: p ? K.RUNNING : K.READY }
                )
              );
          }),
          H(this, 'skip', () => {
            const p = i.getState();
            const d = p.status;
            d === K.RUNNING &&
              i.setState({
                action: tt.SKIP,
                lifecycle: _.INIT,
                status: K.SKIPPED,
              });
          }),
          this.setState(
            {
              action: tt.INIT,
              controlled: ft.number(u),
              continuous: l,
              index: ft.number(u) ? u : 0,
              lifecycle: _.INIT,
              status: f.length ? K.READY : K.IDLE,
            },
            !0
          ),
          this.setSteps(f);
      }
      return (
        ve(o, [
          {
            key: 'setState',
            value(i) {
              const a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1;
              const s = this.getState();
              const l = D(D({}, s), i);
              const u = l.action;
              const c = l.index;
              const f = l.lifecycle;
              const p = l.size;
              const d = l.status;
              e.set('action', u),
                e.set('index', c),
                e.set('lifecycle', f),
                e.set('size', p),
                e.set('status', d),
                a &&
                  (e.set('controlled', i.controlled),
                  e.set('continuous', i.continuous)),
                this.listener &&
                  this.hasUpdatedState(s) &&
                  this.listener(this.getState());
            },
          },
          {
            key: 'getState',
            value() {
              return e.size
                ? {
                    action: e.get('action') || '',
                    controlled: e.get('controlled') || !1,
                    index: parseInt(e.get('index'), 10),
                    lifecycle: e.get('lifecycle') || '',
                    size: e.get('size') || 0,
                    status: e.get('status') || '',
                  }
                : D({}, Qf);
            },
          },
          {
            key: 'getNextState',
            value(i) {
              const a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1;
              const s = this.getState();
              const l = s.action;
              const u = s.controlled;
              const c = s.index;
              const f = s.size;
              const p = s.status;
              const d = ft.number(i.index) ? i.index : c;
              const h = u && !a ? c : Math.min(Math.max(d, 0), f);
              return {
                action: i.action || l,
                controlled: u,
                index: h,
                lifecycle: i.lifecycle || _.INIT,
                size: i.size || f,
                status: h === f ? K.FINISHED : i.status || p,
              };
            },
          },
          {
            key: 'hasUpdatedState',
            value(i) {
              const a = JSON.stringify(i);
              const s = JSON.stringify(this.getState());
              return a !== s;
            },
          },
          {
            key: 'getSteps',
            value() {
              const i = n.get('steps');
              return Array.isArray(i) ? i : [];
            },
          },
          {
            key: 'getHelpers',
            value() {
              return {
                close: this.close,
                go: this.go,
                info: this.info,
                next: this.next,
                open: this.open,
                prev: this.prev,
                reset: this.reset,
                skip: this.skip,
              };
            },
          },
        ]),
        o
      );
    })();
    return new r(t);
  }
  function Xf(t) {
    return t ? t.getBoundingClientRect() : {};
  }
  function W0() {
    const t = document;
    const e = t.body;
    const n = t.documentElement;
    return !e || !n
      ? 0
      : Math.max(
          e.scrollHeight,
          e.offsetHeight,
          n.clientHeight,
          n.scrollHeight,
          n.offsetHeight
        );
  }
  function Ce(t) {
    return typeof t === 'string' ? document.querySelector(t) : t;
  }
  function Y0(t) {
    return !t || t.nodeType !== 1 ? {} : getComputedStyle(t);
  }
  function Lo(t, e, n) {
    const r = (0, Ms.default)(t);
    if (r.isSameNode(yr())) return n ? document : yr();
    const o = r.scrollHeight > r.offsetHeight;
    return !o && !e ? ((r.style.overflow = 'initial'), yr()) : r;
  }
  function Zo(t, e) {
    if (!t) return !1;
    const n = Lo(t, e);
    return !n.isSameNode(yr());
  }
  function q0(t) {
    return t.offsetParent !== document.body;
  }
  function bn(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'fixed';
    if (!t || !(t instanceof HTMLElement)) return !1;
    const n = t.nodeName;
    return n === 'BODY' || n === 'HTML'
      ? !1
      : Y0(t).position === e
      ? !0
      : bn(t.parentNode, e);
  }
  function G0(t) {
    if (!t) return !1;
    for (let e = t; e && e !== document.body; ) {
      if (e instanceof HTMLElement) {
        const n = getComputedStyle(e);
        const r = n.display;
        const o = n.visibility;
        if (r === 'none' || o === 'hidden') return !1;
      }
      e = e.parentNode;
    }
    return !0;
  }
  function X0(t, e, n) {
    const r = Xf(t);
    const o = Lo(t, n);
    const i = Zo(t, n);
    let a = 0;
    o instanceof HTMLElement && (a = o.scrollTop);
    const s = r.top + (!i && !bn(t) ? a : 0);
    return Math.floor(s - e);
  }
  function Fa(t) {
    return t instanceof HTMLElement
      ? t.offsetParent instanceof HTMLElement
        ? Fa(t.offsetParent) + t.offsetTop
        : t.offsetTop
      : 0;
  }
  function _0(t, e, n) {
    if (!t) return 0;
    const r = (0, Ms.default)(t);
    let o = Fa(t);
    return Zo(t, n) && !q0(t) && (o -= Fa(r)), Math.floor(o - e);
  }
  function yr() {
    return document.scrollingElement || document.createElement('body');
  }
  function K0(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yr();
    const n =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 300;
    return new Promise((r, o) => {
      const i = e.scrollTop;
      const a = t > i ? t - i : i - t;
      Kf.default.top(e, t, { duration: a < 100 ? 50 : n }, (s) =>
        s && s.message !== 'Element already at target scroll position'
          ? o(s)
          : r()
      );
    });
  }
  function Q0(t) {
    function e(r, o, i, a, s, l) {
      const u = a || '<<anonymous>>';
      const c = l || i;
      if (o[i] == null)
        return r
          ? new Error(
              'Required '
                .concat(s, ' `')
                .concat(c, '` was not specified in `')
                .concat(u, '`.')
            )
          : null;
      for (
        var f = arguments.length, p = new Array(f > 6 ? f - 6 : 0), d = 6;
        d < f;
        d++
      )
        p[d - 6] = arguments[d];
      return t.apply(void 0, [o, i, u, s, c].concat(p));
    }
    const n = e.bind(null, !1);
    return (n.isRequired = e.bind(null, !0)), n;
  }
  function J0() {
    const t =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const e = (0, Me.default)(Jf, t.options || {});
    let n = 290;
    window.innerWidth > 480 && (n = 380),
      e.width &&
        (window.innerWidth < e.width
          ? (n = window.innerWidth - 30)
          : (n = e.width));
    const r = {
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: e.zIndex,
    };
    const o = {
      beacon: D(
        D({}, vn),
        {},
        {
          display: 'inline-block',
          height: e.beaconSize,
          position: 'relative',
          width: e.beaconSize,
          zIndex: e.zIndex,
        }
      ),
      beaconInner: {
        animation: 'joyride-beacon-inner 1.2s infinite ease-in-out',
        backgroundColor: e.primaryColor,
        borderRadius: '50%',
        display: 'block',
        height: '50%',
        left: '50%',
        opacity: 0.7,
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
      },
      beaconOuter: {
        animation: 'joyride-beacon-outer 1.2s infinite ease-in-out',
        backgroundColor: 'rgba('.concat(U0(e.primaryColor).join(','), ', 0.2)'),
        border: '2px solid '.concat(e.primaryColor),
        borderRadius: '50%',
        boxSizing: 'border-box',
        display: 'block',
        height: '100%',
        left: 0,
        opacity: 0.9,
        position: 'absolute',
        top: 0,
        transformOrigin: 'center',
        width: '100%',
      },
      tooltip: {
        backgroundColor: e.backgroundColor,
        borderRadius: 5,
        boxSizing: 'border-box',
        color: e.textColor,
        fontSize: 16,
        maxWidth: '100%',
        padding: 15,
        position: 'relative',
        width: n,
      },
      tooltipContainer: { lineHeight: 1.4, textAlign: 'center' },
      tooltipTitle: { fontSize: 18, margin: 0 },
      tooltipContent: { padding: '20px 10px' },
      tooltipFooter: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 15,
      },
      tooltipFooterSpacer: { flex: 1 },
      buttonNext: D(
        D({}, vn),
        {},
        { backgroundColor: e.primaryColor, borderRadius: 4, color: '#fff' }
      ),
      buttonBack: D(
        D({}, vn),
        {},
        { color: e.primaryColor, marginLeft: 'auto', marginRight: 5 }
      ),
      buttonClose: D(
        D({}, vn),
        {},
        {
          color: e.textColor,
          height: 14,
          padding: 15,
          position: 'absolute',
          right: 0,
          top: 0,
          width: 14,
        }
      ),
      buttonSkip: D(D({}, vn), {}, { color: e.textColor, fontSize: 14 }),
      overlay: D(
        D({}, r),
        {},
        { backgroundColor: e.overlayColor, mixBlendMode: 'hard-light' }
      ),
      overlayLegacy: D({}, r),
      overlayLegacyCenter: D(D({}, r), {}, { backgroundColor: e.overlayColor }),
      spotlight: D(D({}, Ba), {}, { backgroundColor: 'gray' }),
      spotlightLegacy: D(
        D({}, Ba),
        {},
        {
          boxShadow: '0 0 0 9999px '
            .concat(e.overlayColor, ', ')
            .concat(e.spotlightShadow),
        }
      ),
      floaterStyles: {
        arrow: { color: e.arrowColor },
        options: { zIndex: e.zIndex + 100 },
      },
      options: e,
    };
    return (0, Me.default)(o, t);
  }
  function Z0(t) {
    const e = [
      'beaconComponent',
      'disableCloseOnEsc',
      'disableOverlay',
      'disableOverlayClose',
      'disableScrolling',
      'disableScrollParentFix',
      'floaterProps',
      'hideBackButton',
      'hideCloseButton',
      'locale',
      'showProgress',
      'showSkipButton',
      'spotlightClicks',
      'spotlightPadding',
      'styles',
      'tooltipComponent',
    ];
    return Object.keys(t)
      .filter((n) => e.indexOf(n) !== -1)
      .reduce((n, r) => ((n[r] = t[r]), n), {});
  }
  function nr(t, e) {
    if (!t) return null;
    const n = Me.default.all([Z0(e), po.step, t], {
      isMergeableObject: ft.plainObject,
    });
    const r = J0((0, Me.default)(e.styles || {}, t.styles || {}));
    const o = Zo(Ce(t.target), n.disableScrollParentFix);
    const i = Me.default.all([
      e.floaterProps || {},
      po.floaterProps,
      n.floaterProps || {},
    ]);
    return (
      (i.offset = n.offset),
      (i.styles = (0, Me.default)(i.styles || {}, r.floaterStyles || {})),
      delete r.floaterStyles,
      (i.offset += e.spotlightPadding || t.spotlightPadding || 0),
      t.placementBeacon && (i.wrapperOptions.placement = t.placementBeacon),
      o && (i.options.preventOverflow.boundariesElement = 'window'),
      D(
        D({}, n),
        {},
        {
          locale: Me.default.all([po.locale, e.locale || {}, n.locale || {}]),
          floaterProps: i,
          styles: r,
        }
      )
    );
  }
  function _f(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return ft.plainObject(t)
      ? t.target
        ? !0
        : (_e({
            title: 'validateStep',
            data: 'target is missing from the step',
            warn: !0,
            debug: e,
          }),
          !1)
      : (_e({
          title: 'validateStep',
          data: 'step must be an object',
          warn: !0,
          debug: e,
        }),
        !1);
  }
  function Bu(t) {
    const e =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return ft.array(t)
      ? t.every((n) => _f(n, e))
      : (_e({
          title: 'validateSteps',
          data: 'steps must be an array',
          warn: !0,
          debug: e,
        }),
        !1);
  }
  function $0(t) {
    const e = t.styles;
    return g.createElement('div', {
      key: 'JoyrideSpotlight',
      className: 'react-joyride__spotlight',
      style: e,
    });
  }
  function tb(t) {
    const e = t.styles;
    const n = Io(t, Zf);
    const r = e.color;
    const o = e.height;
    const i = e.width;
    const a = Io(e, $f);
    return g.createElement(
      'button',
      Bt({ style: a, type: 'button' }, n),
      g.createElement(
        'svg',
        {
          width: typeof i === 'number' ? ''.concat(i, 'px') : i,
          height: typeof o === 'number' ? ''.concat(o, 'px') : o,
          viewBox: '0 0 18 18',
          version: '1.1',
          xmlns: 'http://www.w3.org/2000/svg',
          preserveAspectRatio: 'xMidYMid',
        },
        g.createElement(
          'g',
          null,
          g.createElement('path', {
            d: 'M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z',
            fill: r,
          })
        )
      )
    );
  }
  let zu;
  let Kf;
  let Ms;
  let pn;
  let Me;
  let tt;
  let Vt;
  let _;
  let K;
  let de;
  let fn;
  let Qf;
  let Va;
  let Jf;
  let vn;
  let Ba;
  let po;
  let Uu;
  let Hu;
  let Wu;
  let Yu;
  let Zf;
  let $f;
  let qu;
  let Gu;
  let Xu;
  let _u;
  let Ku;
  let za;
  const eb = v(() => {
    Of(),
      Gy(),
      (zu = le(Tf())),
      (Kf = le(Xy())),
      (Ms = le(_y())),
      (pn = le(Qy())),
      (Me = le(Cf())),
      L0(),
      (tt = {
        INIT: 'init',
        START: 'start',
        STOP: 'stop',
        RESET: 'reset',
        PREV: 'prev',
        NEXT: 'next',
        GO: 'go',
        CLOSE: 'close',
        SKIP: 'skip',
        UPDATE: 'update',
      }),
      (Vt = {
        TOUR_START: 'tour:start',
        STEP_BEFORE: 'step:before',
        BEACON: 'beacon',
        TOOLTIP: 'tooltip',
        STEP_AFTER: 'step:after',
        TOUR_END: 'tour:end',
        TOUR_STATUS: 'tour:status',
        TARGET_NOT_FOUND: 'error:target_not_found',
        ERROR: 'error',
      }),
      (_ = {
        INIT: 'init',
        READY: 'ready',
        BEACON: 'beacon',
        TOOLTIP: 'tooltip',
        COMPLETE: 'complete',
        ERROR: 'error',
      }),
      (K = {
        IDLE: 'idle',
        READY: 'ready',
        WAITING: 'waiting',
        RUNNING: 'running',
        PAUSED: 'paused',
        SKIPPED: 'skipped',
        FINISHED: 'finished',
        ERROR: 'error',
      }),
      (de = zu.default.canUseDOM),
      (fn = Ci !== void 0),
      (Qf = {
        action: '',
        controlled: !1,
        index: 0,
        lifecycle: _.INIT,
        size: 0,
        status: K.IDLE,
      }),
      (Va = ['action', 'index', 'lifecycle', 'status']),
      Q0((t, e, n, r, o) => {
        const i = t[e];
        let a = i;
        if (!g.isValidElement(i) && (0, pn.isValidElementType)(i)) {
          const s = { ref() {}, step: {} };
          a = g.createElement(a, s);
        }
        if (
          ft.string(i) ||
          ft.number(i) ||
          !(0, pn.isValidElementType)(i) ||
          [pn.Element, pn.ForwardRef].indexOf((0, pn.typeOf)(a)) === -1
        )
          return new Error(
            'Invalid '
              .concat(r, ' `')
              .concat(o, '` supplied to `')
              .concat(n, '`. Expected a React class or forwardRef.')
          );
      }),
      (Jf = {
        arrowColor: '#fff',
        backgroundColor: '#fff',
        beaconSize: 36,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: '#f04',
        spotlightShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
        textColor: '#333',
        zIndex: 100,
      }),
      (vn = {
        backgroundColor: 'transparent',
        border: 0,
        borderRadius: 0,
        color: '#555',
        cursor: 'pointer',
        fontSize: 16,
        lineHeight: 1,
        padding: 8,
        WebkitAppearance: 'none',
      }),
      (Ba = { borderRadius: 4, position: 'absolute' }),
      (po = {
        floaterProps: {
          options: { preventOverflow: { boundariesElement: 'scrollParent' } },
          wrapperOptions: { offset: -18, position: !0 },
        },
        locale: {
          back: 'Back',
          close: 'Close',
          last: 'Last',
          next: 'Next',
          open: 'Open the dialog',
          skip: 'Skip',
        },
        step: { event: 'click', placement: 'bottom', offset: 10 },
      }),
      (Uu = ve(function t(e) {
        const n = this;
        const r =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (
          (me(this, t),
          H(this, 'element', void 0),
          H(this, 'options', void 0),
          H(this, 'canBeTabbed', (o) => {
            let i = o.tabIndex;
            (i === null || i < 0) && (i = void 0);
            const a = isNaN(i);
            return !a && n.canHaveFocus(o);
          }),
          H(this, 'canHaveFocus', (o) => {
            const i = /input|select|textarea|button|object/;
            const a = o.nodeName.toLowerCase();
            const s =
              (i.test(a) && !o.getAttribute('disabled')) ||
              (a === 'a' && !!o.getAttribute('href'));
            return s && n.isVisible(o);
          }),
          H(this, 'findValidTabElements', () =>
            [].slice
              .call(n.element.querySelectorAll('*'), 0)
              .filter(n.canBeTabbed)
          ),
          H(this, 'handleKeyDown', (o) => {
            const i = n.options.keyCode;
            const a = i === void 0 ? 9 : i;
            o.keyCode === a && n.interceptTab(o);
          }),
          H(this, 'interceptTab', (o) => {
            const i = n.findValidTabElements();
            if (i.length) {
              o.preventDefault();
              const a = o.shiftKey;
              let s = i.indexOf(document.activeElement);
              s === -1 || (!a && s + 1 === i.length)
                ? (s = 0)
                : a && s === 0
                ? (s = i.length - 1)
                : (s += a ? -1 : 1),
                i[s].focus();
            }
          }),
          H(this, 'isHidden', (o) => {
            const i = o.offsetWidth <= 0 && o.offsetHeight <= 0;
            const a = window.getComputedStyle(o);
            return i && !o.innerHTML
              ? !0
              : (i && a.getPropertyValue('overflow') !== 'visible') ||
                  a.getPropertyValue('display') === 'none';
          }),
          H(this, 'isVisible', (o) => {
            for (let i = o; i; )
              if (i instanceof HTMLElement) {
                if (i === document.body) break;
                if (n.isHidden(i)) return !1;
                i = i.parentNode;
              }
            return !0;
          }),
          H(this, 'removeScope', () => {
            window.removeEventListener('keydown', n.handleKeyDown);
          }),
          H(this, 'checkFocus', (o) => {
            document.activeElement !== o &&
              (o.focus(), window.requestAnimationFrame(() => n.checkFocus(o)));
          }),
          H(this, 'setFocus', () => {
            const o = n.options.selector;
            if (o) {
              const i = n.element.querySelector(o);
              i && window.requestAnimationFrame(() => n.checkFocus(i));
            }
          }),
          !(e instanceof HTMLElement))
        )
          throw new TypeError(
            'Invalid parameter: element must be an HTMLElement'
          );
        (this.element = e),
          (this.options = r),
          window.addEventListener('keydown', this.handleKeyDown, !1),
          this.setFocus();
      })),
      (Hu = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n(r) {
          let o;
          if (
            (me(this, n),
            (o = e.call(this, r)),
            H(pt(o), 'setBeaconRef', (l) => {
              o.beacon = l;
            }),
            !r.beaconComponent)
          ) {
            const i = document.head || document.getElementsByTagName('head')[0];
            const a = document.createElement('style');
            const s = `
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `;
            (a.type = 'text/css'),
              (a.id = 'joyride-beacon-animation'),
              r.nonce !== void 0 && a.setAttribute('nonce', r.nonce),
              a.appendChild(document.createTextNode(s)),
              i.appendChild(a);
          }
          return o;
        }
        return (
          ve(n, [
            {
              key: 'componentDidMount',
              value() {
                const r = this;
                const o = this.props.shouldFocus;
                setTimeout(() => {
                  ft.domElement(r.beacon) && o && r.beacon.focus();
                }, 0);
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                const r = document.getElementById('joyride-beacon-animation');
                r && r.parentNode.removeChild(r);
              },
            },
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.beaconComponent;
                const i = r.locale;
                const a = r.onClickOrHover;
                const s = r.styles;
                const l = {
                  'aria-label': i.open,
                  onClick: a,
                  onMouseEnter: a,
                  ref: this.setBeaconRef,
                  title: i.open,
                };
                let u;
                if (o) {
                  const c = o;
                  u = g.createElement(c, l);
                } else
                  u = g.createElement(
                    'button',
                    Bt(
                      {
                        key: 'JoyrideBeacon',
                        className: 'react-joyride__beacon',
                        style: s.beacon,
                        type: 'button',
                      },
                      l
                    ),
                    g.createElement('span', { style: s.beaconInner }),
                    g.createElement('span', { style: s.beaconOuter })
                  );
                return u;
              },
            },
          ]),
          n
        );
      })(g.Component)),
      (Wu = ['mixBlendMode', 'zIndex']),
      (Yu = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n() {
          let r;
          me(this, n);
          for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            (r = e.call.apply(e, [this].concat(i))),
            H(pt(r), '_isMounted', !1),
            H(pt(r), 'state', {
              mouseOverSpotlight: !1,
              isScrolling: !1,
              showSpotlight: !0,
            }),
            H(pt(r), 'handleMouseMove', (s) => {
              const l = r.state.mouseOverSpotlight;
              const u = r.spotlightStyles;
              const c = u.height;
              const f = u.left;
              const p = u.position;
              const d = u.top;
              const h = u.width;
              const m = p === 'fixed' ? s.clientY : s.pageY;
              const y = p === 'fixed' ? s.clientX : s.pageX;
              const E = m >= d && m <= d + c;
              const x = y >= f && y <= f + h;
              const b = x && E;
              b !== l && r.updateState({ mouseOverSpotlight: b });
            }),
            H(pt(r), 'handleScroll', () => {
              const s = r.props.target;
              const l = Ce(s);
              if (r.scrollParent !== document) {
                const u = r.state.isScrolling;
                u || r.updateState({ isScrolling: !0, showSpotlight: !1 }),
                  clearTimeout(r.scrollTimeout),
                  (r.scrollTimeout = setTimeout(() => {
                    r.updateState({ isScrolling: !1, showSpotlight: !0 });
                  }, 50));
              } else bn(l, 'sticky') && r.updateState({});
            }),
            H(pt(r), 'handleResize', () => {
              clearTimeout(r.resizeTimeout),
                (r.resizeTimeout = setTimeout(() => {
                  r._isMounted && r.forceUpdate();
                }, 100));
            }),
            r
          );
        }
        return (
          ve(n, [
            {
              key: 'componentDidMount',
              value() {
                const r = this.props;
                r.debug, r.disableScrolling;
                const o = r.disableScrollParentFix;
                const i = r.target;
                const a = Ce(i);
                (this.scrollParent = Lo(a, o, !0)),
                  (this._isMounted = !0),
                  window.addEventListener('resize', this.handleResize);
              },
            },
            {
              key: 'componentDidUpdate',
              value(r) {
                const o = this;
                const i = this.props;
                const a = i.lifecycle;
                const s = i.spotlightClicks;
                const l = ur(r, this.props);
                const u = l.changed;
                u('lifecycle', _.TOOLTIP) &&
                  (this.scrollParent.addEventListener(
                    'scroll',
                    this.handleScroll,
                    { passive: !0 }
                  ),
                  setTimeout(() => {
                    const c = o.state.isScrolling;
                    c || o.updateState({ showSpotlight: !0 });
                  }, 100)),
                  (u('spotlightClicks') ||
                    u('disableOverlay') ||
                    u('lifecycle')) &&
                    (s && a === _.TOOLTIP
                      ? window.addEventListener(
                          'mousemove',
                          this.handleMouseMove,
                          !1
                        )
                      : a !== _.TOOLTIP &&
                        window.removeEventListener(
                          'mousemove',
                          this.handleMouseMove
                        ));
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                (this._isMounted = !1),
                  window.removeEventListener('mousemove', this.handleMouseMove),
                  window.removeEventListener('resize', this.handleResize),
                  clearTimeout(this.resizeTimeout),
                  clearTimeout(this.scrollTimeout),
                  this.scrollParent.removeEventListener(
                    'scroll',
                    this.handleScroll
                  );
              },
            },
            {
              key: 'spotlightStyles',
              get() {
                const r = this.state.showSpotlight;
                const o = this.props;
                const i = o.disableScrollParentFix;
                const a = o.spotlightClicks;
                const s = o.spotlightPadding;
                const l = o.styles;
                const u = o.target;
                const c = Ce(u);
                const f = Xf(c);
                const p = bn(c);
                const d = X0(c, s, i);
                return D(
                  D({}, Vu() ? l.spotlightLegacy : l.spotlight),
                  {},
                  {
                    height: Math.round(f.height + s * 2),
                    left: Math.round(f.left - s),
                    opacity: r ? 1 : 0,
                    pointerEvents: a ? 'none' : 'auto',
                    position: p ? 'fixed' : 'absolute',
                    top: d,
                    transition: 'opacity 0.2s',
                    width: Math.round(f.width + s * 2),
                  }
                );
              },
            },
            {
              key: 'updateState',
              value(r) {
                this._isMounted && this.setState(r);
              },
            },
            {
              key: 'render',
              value() {
                const r = this.state;
                const o = r.mouseOverSpotlight;
                const i = r.showSpotlight;
                const a = this.props;
                const s = a.disableOverlay;
                const l = a.disableOverlayClose;
                const u = a.lifecycle;
                const c = a.onClickOverlay;
                const f = a.placement;
                const p = a.styles;
                if (s || u !== _.TOOLTIP) return null;
                let d = p.overlay;
                Vu() &&
                  (d =
                    f === 'center' ? p.overlayLegacyCenter : p.overlayLegacy);
                const h = D(
                  {
                    cursor: l ? 'default' : 'pointer',
                    height: W0(),
                    pointerEvents: o ? 'none' : 'auto',
                  },
                  d
                );
                let m =
                  f !== 'center' &&
                  i &&
                  g.createElement($0, { styles: this.spotlightStyles });
                if (Gf() === 'safari') {
                  h.mixBlendMode, h.zIndex;
                  const y = Io(h, Wu);
                  (m = g.createElement('div', { style: D({}, y) }, m)),
                    delete h.backgroundColor;
                }
                return g.createElement(
                  'div',
                  { className: 'react-joyride__overlay', style: h, onClick: c },
                  m
                );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      (Zf = ['styles']),
      ($f = ['color', 'height', 'width']),
      (qu = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n() {
          return me(this, n), e.apply(this, arguments);
        }
        return (
          ve(n, [
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.backProps;
                const i = r.closeProps;
                const a = r.continuous;
                const s = r.index;
                const l = r.isLastStep;
                const u = r.primaryProps;
                const c = r.size;
                const f = r.skipProps;
                const p = r.step;
                const d = r.tooltipProps;
                const h = p.content;
                const m = p.hideBackButton;
                const y = p.hideCloseButton;
                const E = p.hideFooter;
                const x = p.showProgress;
                const b = p.showSkipButton;
                const w = p.title;
                const O = p.styles;
                const S = p.locale;
                const M = S.back;
                const N = S.close;
                const B = S.last;
                const X = S.next;
                const et = S.skip;
                const rt = { primary: N };
                return (
                  a &&
                    ((rt.primary = l ? B : X),
                    x &&
                      (rt.primary = g.createElement(
                        'span',
                        null,
                        rt.primary,
                        ' (',
                        s + 1,
                        '/',
                        c,
                        ')'
                      ))),
                  b &&
                    !l &&
                    (rt.skip = g.createElement(
                      'button',
                      Bt(
                        {
                          style: O.buttonSkip,
                          type: 'button',
                          'aria-live': 'off',
                        },
                        f
                      ),
                      et
                    )),
                  !m &&
                    s > 0 &&
                    (rt.back = g.createElement(
                      'button',
                      Bt({ style: O.buttonBack, type: 'button' }, o),
                      M
                    )),
                  (rt.close =
                    !y &&
                    g.createElement(tb, Bt({ styles: O.buttonClose }, i))),
                  g.createElement(
                    'div',
                    Bt(
                      {
                        key: 'JoyrideTooltip',
                        className: 'react-joyride__tooltip',
                        style: O.tooltip,
                      },
                      d
                    ),
                    g.createElement(
                      'div',
                      { style: O.tooltipContainer },
                      w &&
                        g.createElement(
                          'h4',
                          { style: O.tooltipTitle, 'aria-label': w },
                          w
                        ),
                      g.createElement('div', { style: O.tooltipContent }, h)
                    ),
                    !E &&
                      g.createElement(
                        'div',
                        { style: O.tooltipFooter },
                        g.createElement(
                          'div',
                          { style: O.tooltipFooterSpacer },
                          rt.skip
                        ),
                        rt.back,
                        g.createElement(
                          'button',
                          Bt({ style: O.buttonNext, type: 'button' }, u),
                          rt.primary
                        )
                      ),
                    rt.close
                  )
                );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      (Gu = ['beaconComponent', 'tooltipComponent']),
      (Xu = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n() {
          let r;
          me(this, n);
          for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            (r = e.call.apply(e, [this].concat(i))),
            H(pt(r), 'handleClickBack', (s) => {
              s.preventDefault();
              const l = r.props.helpers;
              l.prev();
            }),
            H(pt(r), 'handleClickClose', (s) => {
              s.preventDefault();
              const l = r.props.helpers;
              l.close();
            }),
            H(pt(r), 'handleClickPrimary', (s) => {
              s.preventDefault();
              const l = r.props;
              const u = l.continuous;
              const c = l.helpers;
              if (!u) {
                c.close();
                return;
              }
              c.next();
            }),
            H(pt(r), 'handleClickSkip', (s) => {
              s.preventDefault();
              const l = r.props.helpers;
              l.skip();
            }),
            H(pt(r), 'getElementsProps', () => {
              const s = r.props;
              const l = s.continuous;
              const u = s.isLastStep;
              const c = s.setTooltipRef;
              const f = s.step;
              const p = er(f.locale.back);
              const d = er(f.locale.close);
              const h = er(f.locale.last);
              const m = er(f.locale.next);
              const y = er(f.locale.skip);
              let E = l ? m : d;
              return (
                u && (E = h),
                {
                  backProps: {
                    'aria-label': p,
                    'data-action': 'back',
                    onClick: r.handleClickBack,
                    role: 'button',
                    title: p,
                  },
                  closeProps: {
                    'aria-label': d,
                    'data-action': 'close',
                    onClick: r.handleClickClose,
                    role: 'button',
                    title: d,
                  },
                  primaryProps: {
                    'aria-label': E,
                    'data-action': 'primary',
                    onClick: r.handleClickPrimary,
                    role: 'button',
                    title: E,
                  },
                  skipProps: {
                    'aria-label': y,
                    'data-action': 'skip',
                    onClick: r.handleClickSkip,
                    role: 'button',
                    title: y,
                  },
                  tooltipProps: {
                    'aria-modal': !0,
                    ref: c,
                    role: 'alertdialog',
                  },
                }
              );
            }),
            r
          );
        }
        return (
          ve(n, [
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.continuous;
                const i = r.index;
                const a = r.isLastStep;
                const s = r.size;
                const l = r.step;
                l.beaconComponent;
                const u = l.tooltipComponent;
                const c = Io(l, Gu);
                let f;
                if (u) {
                  const p = D(
                    D({}, this.getElementsProps()),
                    {},
                    { continuous: o, index: i, isLastStep: a, size: s, step: c }
                  );
                  const d = u;
                  f = g.createElement(d, p);
                } else
                  f = g.createElement(
                    qu,
                    Bt({}, this.getElementsProps(), {
                      continuous: o,
                      index: i,
                      isLastStep: a,
                      size: s,
                      step: l,
                    })
                  );
                return f;
              },
            },
          ]),
          n
        );
      })(g.Component)),
      (_u = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n() {
          return me(this, n), e.apply(this, arguments);
        }
        return (
          ve(n, [
            {
              key: 'componentDidMount',
              value() {
                de && (fn || this.renderReact15());
              },
            },
            {
              key: 'componentDidUpdate',
              value() {
                de && (fn || this.renderReact15());
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                !de ||
                  !this.node ||
                  (fn || oe.unmountComponentAtNode(this.node),
                  this.node.parentNode === document.body &&
                    (document.body.removeChild(this.node),
                    (this.node = void 0)));
              },
            },
            {
              key: 'appendNode',
              value() {
                const r = this.props.id;
                this.node ||
                  ((this.node = document.createElement('div')),
                  r && (this.node.id = r),
                  document.body.appendChild(this.node));
              },
            },
            {
              key: 'renderReact15',
              value() {
                if (!de) return null;
                const r = this.props.children;
                return (
                  this.node || this.appendNode(),
                  oe.unstable_renderSubtreeIntoContainer(this, r, this.node),
                  null
                );
              },
            },
            {
              key: 'renderReact16',
              value() {
                if (!de || !fn) return null;
                const r = this.props.children;
                return (
                  this.node || this.appendNode(), oe.createPortal(r, this.node)
                );
              },
            },
            {
              key: 'render',
              value() {
                return fn ? this.renderReact16() : null;
              },
            },
          ]),
          n
        );
      })(g.Component)),
      (Ku = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n() {
          let r;
          me(this, n);
          for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
            i[a] = arguments[a];
          return (
            (r = e.call.apply(e, [this].concat(i))),
            H(pt(r), 'scope', { removeScope() {} }),
            H(pt(r), 'handleClickHoverBeacon', (s) => {
              const l = r.props;
              const u = l.step;
              const c = l.update;
              (s.type === 'mouseenter' && u.event !== 'hover') ||
                c({ lifecycle: _.TOOLTIP });
            }),
            H(pt(r), 'handleClickOverlay', () => {
              const s = r.props;
              const l = s.helpers;
              const u = s.step;
              u.disableOverlayClose || l.close();
            }),
            H(pt(r), 'setTooltipRef', (s) => {
              r.tooltip = s;
            }),
            H(pt(r), 'setPopper', (s, l) => {
              const u = r.props;
              const c = u.action;
              const f = u.setPopper;
              const p = u.update;
              l === 'wrapper' ? (r.beaconPopper = s) : (r.tooltipPopper = s),
                f(s, l),
                r.beaconPopper &&
                  r.tooltipPopper &&
                  p({
                    action: c === tt.CLOSE ? tt.CLOSE : c,
                    lifecycle: _.READY,
                  });
            }),
            r
          );
        }
        return (
          ve(n, [
            {
              key: 'componentDidMount',
              value() {
                const r = this.props;
                const o = r.debug;
                const i = r.index;
                _e({
                  title: 'step:'.concat(i),
                  data: [{ key: 'props', value: this.props }],
                  debug: o,
                });
              },
            },
            {
              key: 'componentDidUpdate',
              value(r) {
                const o = this.props;
                const i = o.action;
                const a = o.callback;
                const s = o.continuous;
                const l = o.controlled;
                const u = o.debug;
                const c = o.index;
                const f = o.lifecycle;
                const p = o.size;
                const d = o.status;
                const h = o.step;
                const m = o.update;
                const y = ur(r, this.props);
                const E = y.changed;
                const x = y.changedFrom;
                const b = {
                  action: i,
                  controlled: l,
                  index: c,
                  lifecycle: f,
                  size: p,
                  status: d,
                };
                const w = s && i !== tt.CLOSE && (c > 0 || i === tt.PREV);
                const O =
                  E('action') || E('index') || E('lifecycle') || E('status');
                const S = x('lifecycle', [_.TOOLTIP, _.INIT], _.INIT);
                const M = E('action', [tt.NEXT, tt.PREV, tt.SKIP, tt.CLOSE]);
                if (
                  (M &&
                    (S || l) &&
                    a(
                      D(
                        D({}, b),
                        {},
                        {
                          index: r.index,
                          lifecycle: _.COMPLETE,
                          step: r.step,
                          type: Vt.STEP_AFTER,
                        }
                      )
                    ),
                  h.placement === 'center' &&
                    d === K.RUNNING &&
                    E('index') &&
                    i !== tt.START &&
                    f === _.INIT &&
                    m({ lifecycle: _.READY }),
                  O)
                ) {
                  const N = Ce(h.target);
                  const B = !!N;
                  const X = B && G0(N);
                  X
                    ? (x('status', K.READY, K.RUNNING) ||
                        x('lifecycle', _.INIT, _.READY)) &&
                      a(D(D({}, b), {}, { step: h, type: Vt.STEP_BEFORE }))
                    : (console.warn(
                        B ? 'Target not visible' : 'Target not mounted',
                        h
                      ),
                      a(
                        D(D({}, b), {}, { type: Vt.TARGET_NOT_FOUND, step: h })
                      ),
                      l ||
                        m({
                          index: c + ([tt.PREV].indexOf(i) !== -1 ? -1 : 1),
                        }));
                }
                x('lifecycle', _.INIT, _.READY) &&
                  m({ lifecycle: Fu(h) || w ? _.TOOLTIP : _.BEACON }),
                  E('index') &&
                    _e({
                      title: 'step:'.concat(f),
                      data: [{ key: 'props', value: this.props }],
                      debug: u,
                    }),
                  E('lifecycle', _.BEACON) &&
                    a(D(D({}, b), {}, { step: h, type: Vt.BEACON })),
                  E('lifecycle', _.TOOLTIP) &&
                    (a(D(D({}, b), {}, { step: h, type: Vt.TOOLTIP })),
                    (this.scope = new Uu(this.tooltip, {
                      selector: '[data-action=primary]',
                    })),
                    this.scope.setFocus()),
                  x('lifecycle', [_.TOOLTIP, _.INIT], _.INIT) &&
                    (this.scope.removeScope(),
                    delete this.beaconPopper,
                    delete this.tooltipPopper);
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                this.scope.removeScope();
              },
            },
            {
              key: 'open',
              get() {
                const r = this.props;
                const o = r.step;
                const i = r.lifecycle;
                return !!(Fu(o) || i === _.TOOLTIP);
              },
            },
            {
              key: 'render',
              value() {
                const r = this.props;
                const o = r.continuous;
                const i = r.debug;
                const a = r.helpers;
                const s = r.index;
                const l = r.lifecycle;
                const u = r.nonce;
                const c = r.shouldScroll;
                const f = r.size;
                const p = r.step;
                const d = Ce(p.target);
                return !_f(p) || !ft.domElement(d)
                  ? null
                  : g.createElement(
                      'div',
                      {
                        key: 'JoyrideStep-'.concat(s),
                        className: 'react-joyride__step',
                      },
                      g.createElement(
                        _u,
                        { id: 'react-joyride-portal' },
                        g.createElement(
                          Yu,
                          Bt({}, p, {
                            debug: i,
                            lifecycle: l,
                            onClickOverlay: this.handleClickOverlay,
                          })
                        )
                      ),
                      g.createElement(
                        co,
                        Bt(
                          {
                            component: g.createElement(Xu, {
                              continuous: o,
                              helpers: a,
                              index: s,
                              isLastStep: s + 1 === f,
                              setTooltipRef: this.setTooltipRef,
                              size: f,
                              step: p,
                            }),
                            debug: i,
                            getPopper: this.setPopper,
                            id: 'react-joyride-step-'.concat(s),
                            isPositioned: p.isFixed || bn(d),
                            open: this.open,
                            placement: p.placement,
                            target: p.target,
                          },
                          p.floaterProps
                        ),
                        g.createElement(Hu, {
                          beaconComponent: p.beaconComponent,
                          locale: p.locale,
                          nonce: u,
                          onClickOrHover: this.handleClickHoverBeacon,
                          shouldFocus: c,
                          styles: p.styles,
                        })
                      )
                    );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      (za = (function (t) {
        ze(n, t);
        const e = Ue(n);
        function n(r) {
          let o;
          return (
            me(this, n),
            (o = e.call(this, r)),
            H(pt(o), 'initStore', () => {
              const i = o.props;
              const a = i.debug;
              const s = i.getHelpers;
              const l = i.run;
              const u = i.stepIndex;
              (o.store = new H0(
                D(D({}, o.props), {}, { controlled: l && ft.number(u) })
              )),
                (o.helpers = o.store.getHelpers());
              const c = o.store.addListener;
              return (
                _e({
                  title: 'init',
                  data: [
                    { key: 'props', value: o.props },
                    { key: 'state', value: o.state },
                  ],
                  debug: a,
                }),
                c(o.syncState),
                s(o.helpers),
                o.store.getState()
              );
            }),
            H(pt(o), 'callback', (i) => {
              const a = o.props.callback;
              ft.function(a) && a(i);
            }),
            H(pt(o), 'handleKeyboard', (i) => {
              const a = o.state;
              const s = a.index;
              const l = a.lifecycle;
              const u = o.props.steps;
              const c = u[s];
              const f = window.Event ? i.which : i.keyCode;
              l === _.TOOLTIP &&
                f === 27 &&
                c &&
                !c.disableCloseOnEsc &&
                o.store.close();
            }),
            H(pt(o), 'syncState', (i) => {
              o.setState(i);
            }),
            H(pt(o), 'setPopper', (i, a) => {
              a === 'wrapper' ? (o.beaconPopper = i) : (o.tooltipPopper = i);
            }),
            H(
              pt(o),
              'shouldScroll',
              (i, a, s, l, u, c, f) =>
                !i &&
                (a !== 0 || s || l === _.TOOLTIP) &&
                u.placement !== 'center' &&
                (!u.isFixed || !bn(c)) &&
                f.lifecycle !== l &&
                [_.BEACON, _.TOOLTIP].indexOf(l) !== -1
            ),
            (o.state = o.initStore()),
            o
          );
        }
        return (
          ve(n, [
            {
              key: 'componentDidMount',
              value() {
                if (de) {
                  const r = this.props;
                  const o = r.disableCloseOnEsc;
                  const i = r.debug;
                  const a = r.run;
                  const s = r.steps;
                  const l = this.store.start;
                  Bu(s, i) && a && l(),
                    o ||
                      document.body.addEventListener(
                        'keydown',
                        this.handleKeyboard,
                        { passive: !0 }
                      );
                }
              },
            },
            {
              key: 'componentDidUpdate',
              value(r, o) {
                if (de) {
                  const i = this.state;
                  const a = i.action;
                  const s = i.controlled;
                  const l = i.index;
                  const u = i.lifecycle;
                  const c = i.status;
                  const f = this.props;
                  const p = f.debug;
                  const d = f.run;
                  const h = f.stepIndex;
                  const m = f.steps;
                  const y = r.steps;
                  const E = r.stepIndex;
                  const x = this.store;
                  const b = x.reset;
                  const w = x.setSteps;
                  const O = x.start;
                  const S = x.stop;
                  const M = x.update;
                  const N = ur(r, this.props);
                  const B = N.changed;
                  const X = ur(o, this.state);
                  const et = X.changed;
                  const rt = X.changedFrom;
                  const ht = nr(m[l], this.props);
                  const Tt = !ja(y, m);
                  const Ct = ft.number(h) && B('stepIndex');
                  const Ft = Ce(ht?.target);
                  if (
                    (Tt &&
                      (Bu(m, p)
                        ? w(m)
                        : console.warn('Steps are not valid', m)),
                    B('run') && (d ? O(h) : S()),
                    Ct)
                  ) {
                    let St = E < h ? tt.NEXT : tt.PREV;
                    a === tt.STOP && (St = tt.START),
                      [K.FINISHED, K.SKIPPED].indexOf(c) === -1 &&
                        M({
                          action: a === tt.CLOSE ? tt.CLOSE : St,
                          index: h,
                          lifecycle: _.INIT,
                        });
                  }
                  !s &&
                    c === K.RUNNING &&
                    l === 0 &&
                    !Ft &&
                    (M({ index: l + 1 }),
                    this.callback(
                      D(
                        D({}, this.state),
                        {},
                        { type: Vt.TARGET_NOT_FOUND, step: ht }
                      )
                    ));
                  const Nt = D(D({}, this.state), {}, { index: l, step: ht });
                  const Wt = et('action', [
                    tt.NEXT,
                    tt.PREV,
                    tt.SKIP,
                    tt.CLOSE,
                  ]);
                  if (Wt && et('status', K.PAUSED)) {
                    const ne = nr(m[o.index], this.props);
                    this.callback(
                      D(
                        D({}, Nt),
                        {},
                        {
                          index: o.index,
                          lifecycle: _.COMPLETE,
                          step: ne,
                          type: Vt.STEP_AFTER,
                        }
                      )
                    );
                  }
                  if (et('status', [K.FINISHED, K.SKIPPED])) {
                    const Mt = nr(m[o.index], this.props);
                    s ||
                      this.callback(
                        D(
                          D({}, Nt),
                          {},
                          {
                            index: o.index,
                            lifecycle: _.COMPLETE,
                            step: Mt,
                            type: Vt.STEP_AFTER,
                          }
                        )
                      ),
                      this.callback(
                        D(
                          D({}, Nt),
                          {},
                          { index: o.index, step: Mt, type: Vt.TOUR_END }
                        )
                      ),
                      b();
                  } else
                    rt('status', [K.IDLE, K.READY], K.RUNNING)
                      ? this.callback(D(D({}, Nt), {}, { type: Vt.TOUR_START }))
                      : et('status')
                      ? this.callback(
                          D(D({}, Nt), {}, { type: Vt.TOUR_STATUS })
                        )
                      : et('action', tt.RESET) &&
                        this.callback(
                          D(D({}, Nt), {}, { type: Vt.TOUR_STATUS })
                        );
                  ht &&
                    (this.scrollToStep(o),
                    ht.placement === 'center' &&
                      c === K.RUNNING &&
                      a === tt.START &&
                      u === _.INIT &&
                      M({ lifecycle: _.READY }));
                }
              },
            },
            {
              key: 'componentWillUnmount',
              value() {
                const r = this.props.disableCloseOnEsc;
                r ||
                  document.body.removeEventListener(
                    'keydown',
                    this.handleKeyboard
                  );
              },
            },
            {
              key: 'scrollToStep',
              value(r) {
                const o = this.state;
                const i = o.index;
                const a = o.lifecycle;
                const s = o.status;
                const l = this.props;
                const u = l.debug;
                const c = l.disableScrollParentFix;
                const f = l.scrollToFirstStep;
                const p = l.scrollOffset;
                const d = l.scrollDuration;
                const h = l.steps;
                const m = nr(h[i], this.props);
                if (m) {
                  const y = Ce(m.target);
                  const E = this.shouldScroll(
                    m.disableScrolling,
                    i,
                    f,
                    a,
                    m,
                    y,
                    r
                  );
                  if (s === K.RUNNING && E) {
                    const x = Zo(y, c);
                    const b = Lo(y, c);
                    let w = Math.floor(_0(y, p, c)) || 0;
                    if (
                      (_e({
                        title: 'scrollToStep',
                        data: [
                          { key: 'index', value: i },
                          { key: 'lifecycle', value: a },
                          { key: 'status', value: s },
                        ],
                        debug: u,
                      }),
                      a === _.BEACON && this.beaconPopper)
                    ) {
                      const O = this.beaconPopper;
                      const S = O.placement;
                      const M = O.popper;
                      ['bottom'].indexOf(S) === -1 &&
                        !x &&
                        (w = Math.floor(M.top - p));
                    } else if (a === _.TOOLTIP && this.tooltipPopper) {
                      const N = this.tooltipPopper;
                      const B = N.flipped;
                      const X = N.placement;
                      const et = N.popper;
                      ['top', 'right', 'left'].indexOf(X) !== -1 && !B && !x
                        ? (w = Math.floor(et.top - p))
                        : (w -= m.spotlightPadding);
                    }
                    (w = w >= 0 ? w : 0), s === K.RUNNING && K0(w, b, d);
                  }
                }
              },
            },
            {
              key: 'render',
              value() {
                if (!de) return null;
                const r = this.state;
                const o = r.index;
                const i = r.status;
                const a = this.props;
                const s = a.continuous;
                const l = a.debug;
                const u = a.nonce;
                const c = a.scrollToFirstStep;
                const f = a.steps;
                const p = nr(f[o], this.props);
                let d;
                return (
                  i === K.RUNNING &&
                    p &&
                    (d = g.createElement(
                      Ku,
                      Bt({}, this.state, {
                        callback: this.callback,
                        continuous: s,
                        debug: l,
                        setPopper: this.setPopper,
                        helpers: this.helpers,
                        nonce: u,
                        shouldScroll: !p.disableScrolling && (o !== 0 || c),
                        step: p,
                        update: this.store.update,
                      })
                    )),
                  g.createElement('div', { className: 'react-joyride' }, d)
                );
              },
            },
          ]),
          n
        );
      })(g.Component)),
      H(za, 'defaultProps', {
        continuous: !1,
        debug: !1,
        disableCloseOnEsc: !1,
        disableOverlay: !1,
        disableOverlayClose: !1,
        disableScrolling: !1,
        disableScrollParentFix: !1,
        getHelpers() {},
        hideBackButton: !1,
        run: !0,
        scrollOffset: 20,
        scrollDuration: 300,
        scrollToFirstStep: !1,
        showSkipButton: !1,
        showProgress: !1,
        spotlightClicks: !1,
        spotlightPadding: 10,
        steps: [],
      });
  });
  function nb({ targetSelector: t }) {
    return (
      W(() => {
        const e = document.querySelector(t);
        if (e) {
          (e.style.animation = 'pulsate 3s infinite'),
            (e.style.transformOrigin = 'center'),
            (e.style.animationTimingFunction = 'ease-in-out');
          const n = `
        @keyframes pulsate {
          0% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
          }
          50% {
            box-shadow: 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
          }
        }
      `;
          const r = document.createElement('style');
          (r.id = 'sb-onboarding-pulsating-effect'),
            (r.innerHTML = n),
            document.head.appendChild(r);
        }
        return () => {
          const n = document.querySelector('#sb-onboarding-pulsating-effect');
          n && n.remove(), e && (e.style.animation = 'auto');
        };
      }, [t]),
      null
    );
  }
  const rb = v(() => {});
  function td({
    top: t = 0,
    left: e = 0,
    width: n = window.innerWidth,
    height: r = window.innerHeight,
    colors: o = [
      '#CA90FF',
      '#FC521F',
      '#66BF3C',
      '#FF4785',
      '#FFAE00',
      '#1EA7FD',
    ],
    ...i
  }) {
    const [a] = at(() => {
      const s = document.createElement('div');
      return (
        s.setAttribute('id', 'confetti-container'),
        s.setAttribute(
          'style',
          'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999;'
        ),
        s
      );
    });
    return (
      W(
        () => (
          document.body.appendChild(a),
          () => {
            document.body.removeChild(a);
          }
        ),
        []
      ),
      Ci(
        g.createElement(
          ed,
          { top: t, left: e, width: n, height: r },
          g.createElement(vf.default, { colors: o, drawShape: ib, ...i })
        ),
        a
      )
    );
  }
  function ob(t, e) {
    return Math.floor(Math.random() * (e - t)) + t;
  }
  function ib(t) {
    switch (((this.shape = this.shape || ob(1, 6)), this.shape)) {
      case 2: {
        const e = this.w / 2;
        const n = this.h / 2;
        t.moveTo(-e + 2, -n),
          t.lineTo(e - 2, -n),
          t.arcTo(e, -n, e, -n + 2, 2),
          t.lineTo(e, n - 2),
          t.arcTo(e, n, e - 2, n, 2),
          t.lineTo(-e + 2, n),
          t.arcTo(-e, n, -e, n - 2, 2),
          t.lineTo(-e, -n + 2),
          t.arcTo(-e, -n, -e + 2, -n, 2);
        break;
      }
      case 3: {
        t.rect(-4, -4, 8, 16), t.rect(-12, -4, 24, 8);
        break;
      }
      case 4: {
        t.rect(-4, -4, 8, 16), t.rect(-4, -4, 24, 8);
        break;
      }
      case 1: {
        t.arc(0, 0, this.radius, 0, 2 * Math.PI);
        break;
      }
      case 5: {
        t.moveTo(16, 4), t.lineTo(4, 24), t.lineTo(24, 24);
        break;
      }
      case 6: {
        t.arc(4, -4, 4, -Math.PI / 2, 0), t.lineTo(4, 0);
        break;
      }
    }
    t.closePath(), t.fill();
  }
  let ed;
  const nd = v(() => {
    ed = Y.div(({ width: t, height: e, left: n, top: r }) => ({
      width: `${t}px`,
      height: `${e}px`,
      left: `${n}px`,
      top: `${r}px`,
      position: 'relative',
      overflow: 'hidden',
    }));
  });
  let Qu;
  let zt;
  const Ds = v(() => {
    (Qu = Y.button`
  all: unset;
  box-sizing: border-box;
  border: 0;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.75rem;
  background: ${({ theme: t, variant: e }) =>
    e === 'primary'
      ? t.color.secondary
      : e === 'secondary'
      ? t.color.lighter
      : e === 'outline'
      ? 'transparent'
      : t.color.secondary};
  color: ${({ theme: t, variant: e }) =>
    e === 'primary'
      ? t.color.lightest
      : e === 'secondary' || e === 'outline'
      ? t.darkest
      : t.color.lightest};
  box-shadow: ${({ variant: t }) =>
    t === 'primary'
      ? 'none'
      : t === 'secondary' || t === 'outline'
      ? '#D9E8F2 0 0 0 1px inset'
      : 'none'};
  height: 32px;
  font-size: 0.8125rem;
  font-weight: 700;
  font-family: ${({ theme: t }) => t.typography.fonts.base};
  transition: background-color, box-shadow, opacity;
  transition-duration: 0.16s;
  transition-timing-function: ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ variant: t }) =>
      t === 'primary'
        ? '#0b94eb'
        : t === 'secondary'
        ? '#eef4f9'
        : t === 'outline'
        ? 'transparent'
        : '#0b94eb'};
  }

  &:focus {
    box-shadow: ${({ variant: t }) =>
      t === 'primary'
        ? 'inset 0 0 0 1px rgba(0, 0, 0, 0.2)'
        : t === 'secondary' || t === 'outline'
        ? 'inset 0 0 0 1px #0b94eb'
        : 'inset 0 0 0 2px rgba(0, 0, 0, 0.1)'};
  }
`),
      (zt = ct(({ children: t, onClick: e, variant: n = 'primary', ...r }, o) =>
        g.createElement(Qu, { ref: o, onClick: e, variant: n, ...r }, t)
      ));
  });
  let Ju;
  let Zu;
  let $u;
  let tc;
  let ec;
  let rd;
  const ab = v(() => {
    Ds(),
      (Ju = Y.div`
  background: ${({ theme: t }) =>
    t.base === 'dark' ? '#292A2C' : t.color.lightest};
  width: 260px;
  padding: 15px;
  border-radius: 5px;
`),
      (Zu = Y.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`),
      ($u = Y.div`
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: ${({ theme: t }) => t.color.defaultText};
`),
      (tc = Y.p`
  font-size: 13px;
  line-height: 18px;
  text-align: start;
  color: ${({ theme: t }) => t.color.defaultText};
  margin: 0;
  margin-top: 5px;
`),
      (ec = Y.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`),
      (rd = ({ step: t, primaryProps: e, tooltipProps: n }) =>
        g.createElement(
          Ju,
          { ...n },
          g.createElement(
            Zu,
            null,
            t.title && g.createElement($u, null, t.title),
            g.createElement(tc, null, t.content)
          ),
          !t.hideNextButton &&
            g.createElement(
              ec,
              { id: 'buttonNext' },
              g.createElement(
                zt,
                {
                  ...e,
                  ...(t.onNextButtonClick
                    ? { onClick: t.onNextButtonClick }
                    : {}),
                },
                'Next'
              )
            )
        ));
  });
  let od;
  let id;
  let ad;
  let sd;
  let ld;
  let br;
  let fo;
  let ud;
  let nc;
  let cd;
  let rc;
  let pd;
  let oc;
  let fd;
  let cr;
  let dd;
  const hd = v(() => {
    (od = Y.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: 85vh;

  &:focus-visible {
    outline: none;
  }
`),
      (id = Y.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme: t }) => t.typography.fonts.base};
`),
      (ad = Y.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  height: 44px;
`),
      (sd = Y.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 13px;
  line-height: 18px;
  font-weight: bold;
  color: ${({ theme: t }) => t.color.darkest};
`),
      (ld = Y.div`
  font-size: 13px;
  line-height: 18px;
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  color: ${({ theme: t }) => t.color.darker};

  h3 {
    font-size: 13px;
    line-height: 18px;
    font-weight: bold;
    padding: 0;
    margin: 0;
  }
`),
      (br = Y.span`
  display: inline-flex;
  border-radius: 3px;
  padding: 0 5px;
  margin-bottom: -2px;
  opacity: 0.8;
  font-family: ${({ theme: t }) => t.typography.fonts.mono};
  font-size: 11px;
  border: 1px solid #ecf4f9;
  color: ${({ theme: t }) => t.color.darkest};
  background-color: #f7fafc;
  box-sizing: border-box;
  line-height: 17px;
`),
      (fo = Y.img`
  max-width: 100%;
  margin-top: 1em;
`),
      (ud = Y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
      (nc = Be`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
      (cd = Y.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -160px;
  top: -260px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${nc} 8s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
      (rc = Be`
  0% { transform: translate(0px, 0px) }
  33% { transform: translate(-64px, 0px) }
  66% { transform: translate(120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
      (pd = Y.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: -54px;
  top: -250px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${rc} 12s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
      (oc = Be`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-120px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
      (fd = Y.div`
  position: absolute;
  width: 350px;
  height: 350px;
  left: 150px;
  top: -220px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${oc} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`),
      (cr = Y.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 4px;
`),
      (dd = Y.div`
  margin-bottom: 4px;
`);
  });
  function sb({
    api: t,
    isFinalStep: e,
    onFirstTourDone: n,
    onLastTourDone: r,
    codeSnippets: o,
  }) {
    const [i, a] = at();
    const s = Mi();
    W(() => {
      t.once(ou, () => {
        a(3);
      });
    }, []);
    const l = e
      ? [
          {
            target: '#example-button--warning',
            title: 'Congratulations!',
            content: g.createElement(
              g.Fragment,
              null,
              'You just created your first story. Continue setting up your project to write stories for your own components.'
            ),
            placement: 'right',
            disableOverlay: !0,
            disableBeacon: !0,
            floaterProps: { disableAnimation: !0 },
            onNextButtonClick() {
              r();
            },
          },
        ]
      : [
          {
            target: '#storybook-explorer-tree > div',
            title: 'Storybook is built from stories',
            content: g.createElement(
              g.Fragment,
              null,
              'Storybook stories represent the key states of each of your components.',
              g.createElement('br', null),
              g.createElement('br', null),
              o?.filename &&
                g.createElement(
                  g.Fragment,
                  null,
                  'We automatically added four stories for this Button component in this example file:',
                  g.createElement('br', null),
                  g.createElement(br, null, o.filename)
                )
            ),
            placement: 'right',
            disableBeacon: !0,
            styles: { spotlight: { transform: 'translateY(30px)' } },
            floaterProps: { disableAnimation: !0 },
          },
          {
            target: '#storybook-preview-iframe',
            title: 'Storybook previews are interactive',
            content:
              'Whenever you modify code or stories, Storybook automatically updates how it previews your components.',
            placement: 'bottom',
            styles: { spotlight: { borderRadius: 0 } },
          },
          {
            target: '#root div[role=main]',
            title: 'Interactive story playground',
            content: g.createElement(
              g.Fragment,
              null,
              'See how a story renders with different data and state without touching code.',
              g.createElement('br', null),
              g.createElement('br', null),
              'Try it out by pressing this button.',
              g.createElement(nb, { targetSelector: '#control-primary' })
            ),
            placement: 'right',
            spotlightClicks: !0,
            floaterProps: {
              target: '#control-primary',
              options: { preventOverflow: { boundariesElement: 'window' } },
            },
            hideNextButton: !0,
          },
          {
            target: '#control-primary',
            title: 'Congratulations!',
            content: g.createElement(
              g.Fragment,
              null,
              "You learned how to control your stories interactively. Now let's explore how to write your first story.",
              g.createElement(td, {
                numberOfPieces: 800,
                recycle: !1,
                tweenDuration: 2e4,
              })
            ),
            placement: 'right',
            floaterProps: {
              options: { preventOverflow: { boundariesElement: 'window' } },
            },
            disableOverlay: !0,
          },
        ];
    return g.createElement(za, {
      steps: l,
      continuous: !0,
      stepIndex: i,
      spotlightPadding: 0,
      hideBackButton: !0,
      disableCloseOnEsc: !0,
      disableOverlayClose: !0,
      disableScrolling: !0,
      hideCloseButton: !0,
      callback: (u) => {
        !e && u.status === K.FINISHED && n();
      },
      floaterProps: {
        options: { offset: { offset: '0, 6' } },
        styles: {
          floater: {
            padding: 0,
            paddingLeft: 8,
            paddingTop: 8,
            filter:
              s.base === 'light'
                ? 'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))'
                : 'drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)',
          },
        },
      },
      tooltipComponent: rd,
      styles: {
        overlay: { mixBlendMode: 'unset', backgroundColor: 'none' },
        spotlight: {
          backgroundColor: 'none',
          border: `solid 2px ${s.color.secondary}`,
          boxShadow: '0px 0px 0px 9999px rgba(0,0,0,0.4)',
        },
        options: {
          zIndex: 1e4,
          primaryColor: s.color.secondary,
          arrowColor: s.base === 'dark' ? '#292A2C' : s.color.lightest,
        },
      },
    });
  }
  const lb = v(() => {
    eb(), rb(), nd(), ab(), hd();
  });
  function Ot() {
    return (
      (Ot = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (let e = 1; e < arguments.length; e++) {
              const n = arguments[e];
              for (const r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }),
      Ot.apply(this, arguments)
    );
  }
  const Vn = v(() => {});
  function Ke(t, e, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (r) {
      if ((t?.(r), n === !1 || !r.defaultPrevented)) return e?.(r);
    };
  }
  const md = v(() => {});
  function ub(t, e) {
    typeof t === 'function' ? t(e) : t != null && (t.current = e);
  }
  function vd(...t) {
    return (e) => t.forEach((n) => ub(n, e));
  }
  function Cr(...t) {
    return xt(vd(...t), t);
  }
  const jr = v(() => {});
  function cb(t, e) {
    const n = Yt(e);
    function r(i) {
      const { children: a, ...s } = i;
      const l = It(() => s, Object.values(s));
      return q(n.Provider, { value: l }, a);
    }
    function o(i) {
      const a = mt(n);
      if (a) return a;
      if (e !== void 0) return e;
      throw new Error(`\`${i}\` must be used within \`${t}\``);
    }
    return (r.displayName = `${t}Provider`), [r, o];
  }
  function pb(t, e = []) {
    let n = [];
    function r(i, a) {
      const s = Yt(a);
      const l = n.length;
      n = [...n, a];
      function u(f) {
        const { scope: p, children: d, ...h } = f;
        const m = p?.[t][l] || s;
        const y = It(() => h, Object.values(h));
        return q(m.Provider, { value: y }, d);
      }
      function c(f, p) {
        const d = p?.[t][l] || s;
        const h = mt(d);
        if (h) return h;
        if (a !== void 0) return a;
        throw new Error(`\`${f}\` must be used within \`${i}\``);
      }
      return (u.displayName = `${i}Provider`), [u, c];
    }
    const o = () => {
      const i = n.map((a) => Yt(a));
      return function (a) {
        const s = a?.[t] || i;
        return It(() => ({ [`__scope${t}`]: { ...a, [t]: s } }), [a, s]);
      };
    };
    return (o.scopeName = t), [r, fb(o, ...e)];
  }
  function fb(...t) {
    const e = t[0];
    if (t.length === 1) return e;
    const n = () => {
      const r = t.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
      return function (o) {
        const i = r.reduce((a, { useScope: s, scopeName: l }) => {
          const u = s(o)[`__scope${l}`];
          return { ...a, ...u };
        }, {});
        return It(() => ({ [`__scope${e.scopeName}`]: i }), [i]);
      };
    };
    return (n.scopeName = e.scopeName), n;
  }
  const db = v(() => {});
  let jo;
  const gd = v(() => {
    jo = globalThis?.document ? Wn : () => {};
  });
  function Yi(t) {
    const [e, n] = at(yd());
    return (
      jo(() => {
        t || n((r) => r ?? String(bd++));
      }, [t]),
      t || (e ? `radix-${e}` : '')
    );
  }
  let yd;
  let bd;
  const hb = v(() => {
    gd(), (yd = Yn['useId'.toString()] || (() => {})), (bd = 0);
  });
  function $e(t) {
    const e = nt(t);
    return (
      W(() => {
        e.current = t;
      }),
      It(
        () =>
          (...n) => {
            let r;
            return (r = e.current) === null || r === void 0
              ? void 0
              : r.call(e, ...n);
          },
        []
      )
    );
  }
  const $o = v(() => {});
  function mb({ prop: t, defaultProp: e, onChange: n = () => {} }) {
    const [r, o] = vb({ defaultProp: e, onChange: n });
    const i = t !== void 0;
    const a = i ? t : r;
    const s = $e(n);
    const l = xt(
      (u) => {
        if (i) {
          const c = typeof u === 'function' ? u(t) : u;
          c !== t && s(c);
        } else o(u);
      },
      [i, t, o, s]
    );
    return [a, l];
  }
  function vb({ defaultProp: t, onChange: e }) {
    const n = at(t);
    const [r] = n;
    const o = nt(r);
    const i = $e(e);
    return (
      W(() => {
        o.current !== r && (i(r), (o.current = r));
      }, [r, o, i]),
      n
    );
  }
  const gb = v(() => {
    $o();
  });
  function yb(t) {
    return Pe(t) && t.type === wd;
  }
  function bb(t, e) {
    const n = { ...e };
    for (const r in e) {
      const o = t[r];
      const i = e[r];
      /^on[A-Z]/.test(r)
        ? o && i
          ? (n[r] = (...a) => {
              i(...a), o(...a);
            })
          : o && (n[r] = o)
        : r === 'style'
        ? (n[r] = { ...o, ...i })
        : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '));
    }
    return { ...t, ...n };
  }
  let Fo;
  let Gr;
  let wd;
  const Ed = v(() => {
    Vn(),
      jr(),
      (Fo = ct((t, e) => {
        const { children: n, ...r } = t;
        const o = Gt.toArray(n);
        const i = o.find(yb);
        if (i) {
          const a = i.props.children;
          const s = o.map((l) =>
            l === i
              ? Gt.count(a) > 1
                ? Gt.only(null)
                : Pe(a)
                ? a.props.children
                : null
              : l
          );
          return q(Gr, Ot({}, r, { ref: e }), Pe(a) ? Ve(a, void 0, s) : null);
        }
        return q(Gr, Ot({}, r, { ref: e }), n);
      })),
      (Fo.displayName = 'Slot'),
      (Gr = ct((t, e) => {
        const { children: n, ...r } = t;
        return Pe(n)
          ? Ve(n, { ...bb(r, n.props), ref: e ? vd(e, n.ref) : n.ref })
          : Gt.count(n) > 1
          ? Gt.only(null)
          : null;
      })),
      (Gr.displayName = 'SlotClone'),
      (wd = ({ children: t }) => q(Se, null, t));
  });
  function wb(t, e) {
    t && Ai(() => t.dispatchEvent(e));
  }
  let ic;
  let De;
  const ti = v(() => {
    Vn(),
      Ed(),
      (ic = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ]),
      (De = ic.reduce((t, e) => {
        const n = ct((r, o) => {
          const { asChild: i, ...a } = r;
          const s = i ? Fo : e;
          return (
            W(() => {
              window[Symbol.for('radix-ui')] = !0;
            }, []),
            q(s, Ot({}, a, { ref: o }))
          );
        });
        return (n.displayName = `Primitive.${e}`), { ...t, [e]: n };
      }, {}));
  });
  function Eb(t, e = globalThis?.document) {
    const n = $e(t);
    W(() => {
      const r = (o) => {
        o.key === 'Escape' && n(o);
      };
      return (
        e.addEventListener('keydown', r),
        () => e.removeEventListener('keydown', r)
      );
    }, [n, e]);
  }
  const xb = v(() => {
    $o();
  });
  function Ob(t, e = globalThis?.document) {
    const n = $e(t);
    const r = nt(!1);
    const o = nt(() => {});
    return (
      W(() => {
        const i = (s) => {
          if (s.target && !r.current) {
            const l = function () {
              xd(Od, n, u, { discrete: !0 });
            };
            let u = { originalEvent: s };
            s.pointerType === 'touch'
              ? (e.removeEventListener('click', o.current),
                (o.current = l),
                e.addEventListener('click', o.current, { once: !0 }))
              : l();
          }
          r.current = !1;
        };
        const a = window.setTimeout(() => {
          e.addEventListener('pointerdown', i);
        }, 0);
        return () => {
          window.clearTimeout(a),
            e.removeEventListener('pointerdown', i),
            e.removeEventListener('click', o.current);
        };
      }, [e, n]),
      { onPointerDownCapture: () => (r.current = !0) }
    );
  }
  function Sb(t, e = globalThis?.document) {
    const n = $e(t);
    const r = nt(!1);
    return (
      W(() => {
        const o = (i) => {
          i.target &&
            !r.current &&
            xd(Sd, n, { originalEvent: i }, { discrete: !1 });
        };
        return (
          e.addEventListener('focusin', o),
          () => e.removeEventListener('focusin', o)
        );
      }, [e, n]),
      {
        onFocusCapture: () => (r.current = !0),
        onBlurCapture: () => (r.current = !1),
      }
    );
  }
  function ac() {
    const t = new CustomEvent(ho);
    document.dispatchEvent(t);
  }
  function xd(t, e, n, { discrete: r }) {
    const o = n.originalEvent.target;
    const i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: n });
    e && o.addEventListener(t, e, { once: !0 }),
      r ? wb(o, i) : o.dispatchEvent(i);
  }
  let ho;
  let Od;
  let Sd;
  let sc;
  let lc;
  let Pd;
  const Pb = v(() => {
    Vn(),
      md(),
      ti(),
      jr(),
      $o(),
      xb(),
      (ho = 'dismissableLayer.update'),
      (Od = 'dismissableLayer.pointerDownOutside'),
      (Sd = 'dismissableLayer.focusOutside'),
      (lc = Yt({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      })),
      (Pd = ct((t, e) => {
        let n;
        const {
          disableOutsidePointerEvents: r = !1,
          onEscapeKeyDown: o,
          onPointerDownOutside: i,
          onFocusOutside: a,
          onInteractOutside: s,
          onDismiss: l,
          ...u
        } = t;
        const c = mt(lc);
        const [f, p] = at(null);
        const d =
          (n = f?.ownerDocument) !== null && n !== void 0
            ? n
            : globalThis?.document;
        const [, h] = at({});
        const m = Cr(e, (N) => p(N));
        const y = Array.from(c.layers);
        const [E] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1);
        const x = y.indexOf(E);
        const b = f ? y.indexOf(f) : -1;
        const w = c.layersWithOutsidePointerEventsDisabled.size > 0;
        const O = b >= x;
        const S = Ob((N) => {
          const B = N.target;
          const X = [...c.branches].some((et) => et.contains(B));
          !O || X || (i?.(N), s?.(N), N.defaultPrevented || l?.());
        }, d);
        const M = Sb((N) => {
          const B = N.target;
          [...c.branches].some((X) => X.contains(B)) ||
            (a?.(N), s?.(N), N.defaultPrevented || l?.());
        }, d);
        return (
          Eb((N) => {
            b === c.layers.size - 1 &&
              (o?.(N), !N.defaultPrevented && l && (N.preventDefault(), l()));
          }, d),
          W(() => {
            if (f)
              return (
                r &&
                  (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    ((sc = d.body.style.pointerEvents),
                    (d.body.style.pointerEvents = 'none')),
                  c.layersWithOutsidePointerEventsDisabled.add(f)),
                c.layers.add(f),
                ac(),
                () => {
                  r &&
                    c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                    (d.body.style.pointerEvents = sc);
                }
              );
          }, [f, d, r, c]),
          W(
            () => () => {
              f &&
                (c.layers.delete(f),
                c.layersWithOutsidePointerEventsDisabled.delete(f),
                ac());
            },
            [f, c]
          ),
          W(() => {
            const N = () => h({});
            return (
              document.addEventListener(ho, N),
              () => document.removeEventListener(ho, N)
            );
          }, []),
          q(
            De.div,
            Ot({}, u, {
              ref: m,
              style: {
                pointerEvents: w ? (O ? 'auto' : 'none') : void 0,
                ...t.style,
              },
              onFocusCapture: Ke(t.onFocusCapture, M.onFocusCapture),
              onBlurCapture: Ke(t.onBlurCapture, M.onBlurCapture),
              onPointerDownCapture: Ke(
                t.onPointerDownCapture,
                S.onPointerDownCapture
              ),
            })
          )
        );
      }));
  });
  function Tb(t, { select: e = !1 } = {}) {
    const n = document.activeElement;
    for (const r of t)
      if ((Ae(r, { select: e }), document.activeElement !== n)) return;
  }
  function Cb(t) {
    const e = Td(t);
    const n = uc(e, t);
    const r = uc(e.reverse(), t);
    return [n, r];
  }
  function Td(t) {
    const e = [];
    const n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden';
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
    for (; n.nextNode(); ) e.push(n.currentNode);
    return e;
  }
  function uc(t, e) {
    for (const n of t) if (!Ab(n, { upTo: e })) return n;
  }
  function Ab(t, { upTo: e }) {
    if (getComputedStyle(t).visibility === 'hidden') return !0;
    for (; t; ) {
      if (e !== void 0 && t === e) return !1;
      if (getComputedStyle(t).display === 'none') return !0;
      t = t.parentElement;
    }
    return !1;
  }
  function kb(t) {
    return t instanceof HTMLInputElement && 'select' in t;
  }
  function Ae(t, { select: e = !1 } = {}) {
    if (t && t.focus) {
      const n = document.activeElement;
      t.focus({ preventScroll: !0 }), t !== n && kb(t) && e && t.select();
    }
  }
  function Rb() {
    let t = [];
    return {
      add(e) {
        const n = t[0];
        e !== n && n?.pause(), (t = cc(t, e)), t.unshift(e);
      },
      remove(e) {
        let n;
        (t = cc(t, e)), (n = t[0]) === null || n === void 0 || n.resume();
      },
    };
  }
  function cc(t, e) {
    const n = [...t];
    const r = n.indexOf(e);
    return r !== -1 && n.splice(r, 1), n;
  }
  function Mb(t) {
    return t.filter((e) => e.tagName !== 'A');
  }
  let Xr;
  let _r;
  let qi;
  let Cd;
  let Gi;
  const Db = v(() => {
    Vn(),
      jr(),
      ti(),
      $o(),
      (Xr = 'focusScope.autoFocusOnMount'),
      (_r = 'focusScope.autoFocusOnUnmount'),
      (qi = { bubbles: !1, cancelable: !0 }),
      (Cd = ct((t, e) => {
        const {
          loop: n = !1,
          trapped: r = !1,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          ...a
        } = t;
        const [s, l] = at(null);
        const u = $e(o);
        const c = $e(i);
        const f = nt(null);
        const p = Cr(e, (m) => l(m));
        const d = nt({
          paused: !1,
          pause() {
            this.paused = !0;
          },
          resume() {
            this.paused = !1;
          },
        }).current;
        W(() => {
          if (r) {
            const m = function (b) {
              if (d.paused || !s) return;
              const w = b.target;
              s.contains(w) ? (f.current = w) : Ae(f.current, { select: !0 });
            };
            const y = function (b) {
              if (d.paused || !s) return;
              const w = b.relatedTarget;
              w !== null && (s.contains(w) || Ae(f.current, { select: !0 }));
            };
            const E = function (b) {
              const w = document.activeElement;
              for (const O of b)
                O.removedNodes.length > 0 &&
                  ((s != null && s.contains(w)) || Ae(s));
            };
            document.addEventListener('focusin', m),
              document.addEventListener('focusout', y);
            const x = new MutationObserver(E);
            return (
              s && x.observe(s, { childList: !0, subtree: !0 }),
              () => {
                document.removeEventListener('focusin', m),
                  document.removeEventListener('focusout', y),
                  x.disconnect();
              }
            );
          }
        }, [r, s, d.paused]),
          W(() => {
            if (s) {
              Gi.add(d);
              const m = document.activeElement;
              if (!s.contains(m)) {
                const y = new CustomEvent(Xr, qi);
                s.addEventListener(Xr, u),
                  s.dispatchEvent(y),
                  y.defaultPrevented ||
                    (Tb(Mb(Td(s)), { select: !0 }),
                    document.activeElement === m && Ae(s));
              }
              return () => {
                s.removeEventListener(Xr, u),
                  setTimeout(() => {
                    const y = new CustomEvent(_r, qi);
                    s.addEventListener(_r, c),
                      s.dispatchEvent(y),
                      y.defaultPrevented ||
                        Ae(m ?? document.body, { select: !0 }),
                      s.removeEventListener(_r, c),
                      Gi.remove(d);
                  }, 0);
              };
            }
          }, [s, u, c, d]);
        const h = xt(
          (m) => {
            if ((!n && !r) || d.paused) return;
            const y = m.key === 'Tab' && !m.altKey && !m.ctrlKey && !m.metaKey;
            const E = document.activeElement;
            if (y && E) {
              const x = m.currentTarget;
              const [b, w] = Cb(x);
              b && w
                ? !m.shiftKey && E === w
                  ? (m.preventDefault(), n && Ae(b, { select: !0 }))
                  : m.shiftKey &&
                    E === b &&
                    (m.preventDefault(), n && Ae(w, { select: !0 }))
                : E === x && m.preventDefault();
            }
          },
          [n, r, d.paused]
        );
        return q(De.div, Ot({ tabIndex: -1 }, a, { ref: p, onKeyDown: h }));
      })),
      (Gi = Rb());
  });
  let Ad;
  const Nb = v(() => {
    Vn(),
      ti(),
      (Ad = ct((t, e) => {
        let n;
        const {
          container: r = globalThis == null ||
          (n = globalThis.document) === null ||
          n === void 0
            ? void 0
            : n.body,
          ...o
        } = t;
        return r ? oe.createPortal(q(De.div, Ot({}, o, { ref: e })), r) : null;
      }));
  });
  function Ib(t, e) {
    return Ti((n, r) => e[n][r] ?? n, t);
  }
  function Lb(t) {
    const [e, n] = at();
    const r = nt({});
    const o = nt(t);
    const i = nt('none');
    const a = t ? 'mounted' : 'unmounted';
    const [s, l] = Ib(a, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    });
    return (
      W(() => {
        const u = Kr(r.current);
        i.current = s === 'mounted' ? u : 'none';
      }, [s]),
      jo(() => {
        const u = r.current;
        const c = o.current;
        if (c !== t) {
          const f = i.current;
          const p = Kr(u);
          t
            ? l('MOUNT')
            : p === 'none' || u?.display === 'none'
            ? l('UNMOUNT')
            : l(c && f !== p ? 'ANIMATION_OUT' : 'UNMOUNT'),
            (o.current = t);
        }
      }, [t, l]),
      jo(() => {
        if (e) {
          const u = (f) => {
            const p = Kr(r.current).includes(f.animationName);
            f.target === e && p && Ai(() => l('ANIMATION_END'));
          };
          const c = (f) => {
            f.target === e && (i.current = Kr(r.current));
          };
          return (
            e.addEventListener('animationstart', c),
            e.addEventListener('animationcancel', u),
            e.addEventListener('animationend', u),
            () => {
              e.removeEventListener('animationstart', c),
                e.removeEventListener('animationcancel', u),
                e.removeEventListener('animationend', u);
            }
          );
        }
        l('ANIMATION_END');
      }, [e, l]),
      {
        isPresent: ['mounted', 'unmountSuspended'].includes(s),
        ref: xt((u) => {
          u && (r.current = getComputedStyle(u)), n(u);
        }, []),
      }
    );
  }
  function Kr(t) {
    return t?.animationName || 'none';
  }
  let wr;
  const jb = v(() => {
    jr(),
      gd(),
      (wr = (t) => {
        const { present: e, children: n } = t;
        const r = Lb(e);
        const o =
          typeof n === 'function' ? n({ present: r.isPresent }) : Gt.only(n);
        const i = Cr(r.ref, o.ref);
        return typeof n === 'function' || r.isPresent
          ? Ve(o, { ref: i })
          : null;
      }),
      (wr.displayName = 'Presence');
  });
  function Fb() {
    W(() => {
      let t;
      let e;
      const n = document.querySelectorAll('[data-radix-focus-guard]');
      return (
        document.body.insertAdjacentElement(
          'afterbegin',
          (t = n[0]) !== null && t !== void 0 ? t : pc()
        ),
        document.body.insertAdjacentElement(
          'beforeend',
          (e = n[1]) !== null && e !== void 0 ? e : pc()
        ),
        mo++,
        () => {
          mo === 1 &&
            document
              .querySelectorAll('[data-radix-focus-guard]')
              .forEach((r) => r.remove()),
            mo--;
        }
      );
    }, []);
  }
  function pc() {
    const t = document.createElement('span');
    return (
      t.setAttribute('data-radix-focus-guard', ''),
      (t.tabIndex = 0),
      (t.style.cssText =
        'outline: none; opacity: 0; position: fixed; pointer-events: none'),
      t
    );
  }
  let mo;
  const Vb = v(() => {
    mo = 0;
  });
  function kd(t, e) {
    if (typeof e !== 'function' && e !== null)
      throw new TypeError(
        `Class extends value ${String(e)} is not a constructor or null`
      );
    vo(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype =
      e === null ? Object.create(e) : ((n.prototype = e.prototype), new n());
  }
  function jt(t, e) {
    const n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++)
        e.indexOf(r[o]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[o]) &&
          (n[r[o]] = t[r[o]]);
    return n;
  }
  function bt(t, e) {
    let n = typeof Symbol === 'function' && t[Symbol.iterator];
    if (!n) return t;
    const r = n.call(t);
    let o;
    const i = [];
    let a;
    try {
      for (; (e === void 0 || e-- > 0) && !(o = r.next()).done; )
        i.push(o.value);
    } catch (s) {
      a = { error: s };
    } finally {
      try {
        o && !o.done && (n = r.return) && n.call(r);
      } finally {
        if (a) throw a.error;
      }
    }
    return i;
  }
  function $t(t, e, n) {
    if (n || arguments.length === 2)
      for (var r = 0, o = e.length, i; r < o; r++)
        (i || !(r in e)) &&
          (i || (i = Array.prototype.slice.call(e, 0, r)), (i[r] = e[r]));
    return t.concat(i || Array.prototype.slice.call(e));
  }
  let vo;
  let A;
  const G = v(() => {
    (vo = function (t, e) {
      return (
        (vo =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, r) {
              n.__proto__ = r;
            }) ||
          function (n, r) {
            for (const o in r)
              Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
          }),
        vo(t, e)
      );
    }),
      (A = function () {
        return (
          (A =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++) {
                e = arguments[n];
                for (const o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              }
              return t;
            }),
          A.apply(this, arguments)
        );
      });
  });
  let Er;
  let xr;
  let Rd;
  let Md;
  const Ns = v(() => {
    (Er = 'right-scroll-bar-position'),
      (xr = 'width-before-scroll-bar'),
      (Rd = 'with-scroll-bars-hidden'),
      (Md = '--removed-body-scroll-bar-size');
  });
  function Bb(t, e) {
    return typeof t === 'function' ? t(e) : t && (t.current = e), t;
  }
  const zb = v(() => {});
  function Ub(t, e) {
    var n = at(() => ({
      value: t,
      callback: e,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          const o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    }))[0];
    return (n.callback = e), n.facade;
  }
  const Hb = v(() => {});
  function Wb(t, e) {
    return Ub(e || null, (n) => t.forEach((r) => Bb(r, n)));
  }
  const Yb = v(() => {
    zb(), Hb();
  });
  const qb = v(() => {
    Yb();
  });
  function Gb(t) {
    return t;
  }
  function Xb(t, e) {
    e === void 0 && (e = Gb);
    let n = [];
    let r = !1;
    const o = {
      read() {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
          );
        return n.length ? n[n.length - 1] : t;
      },
      useMedium(i) {
        const a = e(i, r);
        return (
          n.push(a),
          function () {
            n = n.filter((s) => s !== a);
          }
        );
      },
      assignSyncMedium(i) {
        for (r = !0; n.length; ) {
          const a = n;
          (n = []), a.forEach(i);
        }
        n = {
          push(s) {
            return i(s);
          },
          filter() {
            return n;
          },
        };
      },
      assignMedium(i) {
        r = !0;
        let a = [];
        if (n.length) {
          const s = n;
          (n = []), s.forEach(i), (a = n);
        }
        const l = function () {
          const c = a;
          (a = []), c.forEach(i);
        };
        const u = function () {
          return Promise.resolve().then(l);
        };
        u(),
          (n = {
            push(c) {
              a.push(c), u();
            },
            filter(c) {
              return (a = a.filter(c)), n;
            },
          });
      },
    };
    return o;
  }
  function _b(t) {
    t === void 0 && (t = {});
    const e = Xb(null);
    return (e.options = { async: !0, ssr: !1, ...t }), e;
  }
  const Kb = v(() => {
    G();
  });
  function Qb(t, e) {
    return t.useMedium(e), Ua;
  }
  let Ua;
  const Jb = v(() => {
    G(),
      (Ua = function (t) {
        const e = t.sideCar;
        const n = jt(t, ['sideCar']);
        if (!e)
          throw new Error(
            'Sidecar: please provide `sideCar` property to import the right car'
          );
        const r = e.read();
        if (!r) throw new Error('Sidecar medium not found');
        return q(r, { ...n });
      }),
      (Ua.isSideCarExport = !0);
  });
  const Dd = v(() => {
    Kb(), Jb();
  });
  let Is;
  const Nd = v(() => {
    Dd(), (Is = _b());
  });
  let Qr;
  let Or;
  const Zb = v(() => {
    G(),
      Ns(),
      qb(),
      Nd(),
      (Qr = function () {}),
      (Or = ct((t, e) => {
        const n = nt(null);
        const r = at({
          onScrollCapture: Qr,
          onWheelCapture: Qr,
          onTouchMoveCapture: Qr,
        });
        const o = r[0];
        const i = r[1];
        const a = t.forwardProps;
        const s = t.children;
        const l = t.className;
        const u = t.removeScrollBar;
        const c = t.enabled;
        const f = t.shards;
        const p = t.sideCar;
        const d = t.noIsolation;
        const h = t.inert;
        const m = t.allowPinchZoom;
        const y = t.as;
        const E = y === void 0 ? 'div' : y;
        const x = jt(t, [
          'forwardProps',
          'children',
          'className',
          'removeScrollBar',
          'enabled',
          'shards',
          'sideCar',
          'noIsolation',
          'inert',
          'allowPinchZoom',
          'as',
        ]);
        const b = p;
        const w = Wb([n, e]);
        const O = { ...x, ...o };
        return q(
          Se,
          null,
          c &&
            q(b, {
              sideCar: Is,
              removeScrollBar: u,
              shards: f,
              noIsolation: d,
              inert: h,
              setCallbacks: i,
              allowPinchZoom: !!m,
              lockRef: n,
            }),
          a
            ? Ve(Gt.only(s), { ...O, ref: w })
            : q(E, { ...O, className: l, ref: w }, s)
        );
      })),
      (Or.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
      (Or.classNames = { fullWidth: xr, zeroRight: Er });
  });
  let Id;
  const $b = v(() => {
    Id = function () {
      if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__;
    };
  });
  function t1() {
    if (!document) return null;
    const t = document.createElement('style');
    t.type = 'text/css';
    const e = Id();
    return e && t.setAttribute('nonce', e), t;
  }
  function e1(t, e) {
    t.styleSheet
      ? (t.styleSheet.cssText = e)
      : t.appendChild(document.createTextNode(e));
  }
  function n1(t) {
    const e = document.head || document.getElementsByTagName('head')[0];
    e.appendChild(t);
  }
  let Ld;
  const jd = v(() => {
    $b(),
      (Ld = function () {
        let t = 0;
        let e = null;
        return {
          add(n) {
            t == 0 && (e = t1()) && (e1(e, n), n1(e)), t++;
          },
          remove() {
            t--,
              !t &&
                e &&
                (e.parentNode && e.parentNode.removeChild(e), (e = null));
          },
        };
      });
  });
  let Fd;
  const Vd = v(() => {
    jd(),
      (Fd = function () {
        const t = Ld();
        return function (e, n) {
          W(
            () => (
              t.add(e),
              function () {
                t.remove();
              }
            ),
            [e && n]
          );
        };
      });
  });
  let Ls;
  const r1 = v(() => {
    Vd(),
      (Ls = function () {
        const t = Fd();
        const e = function (n) {
          const r = n.styles;
          const o = n.dynamic;
          return t(r, o), null;
        };
        return e;
      });
  });
  const Bd = v(() => {
    r1(), jd(), Vd();
  });
  let fc;
  let Jr;
  let dc;
  let zd;
  const Ud = v(() => {
    (fc = { left: 0, top: 0, right: 0, gap: 0 }),
      (Jr = function (t) {
        return parseInt(t || '', 10) || 0;
      }),
      (dc = function (t) {
        const e = window.getComputedStyle(document.body);
        const n = e[t === 'padding' ? 'paddingLeft' : 'marginLeft'];
        const r = e[t === 'padding' ? 'paddingTop' : 'marginTop'];
        const o = e[t === 'padding' ? 'paddingRight' : 'marginRight'];
        return [Jr(n), Jr(r), Jr(o)];
      }),
      (zd = function (t) {
        if ((t === void 0 && (t = 'margin'), typeof window > 'u')) return fc;
        const e = dc(t);
        const n = document.documentElement.clientWidth;
        const r = window.innerWidth;
        return {
          left: e[0],
          top: e[1],
          right: e[2],
          gap: Math.max(0, r - n + e[2] - e[0]),
        };
      });
  });
  let hc;
  let mc;
  let Hd;
  const o1 = v(() => {
    Bd(),
      Ns(),
      Ud(),
      (hc = Ls()),
      (mc = function (t, e, n, r) {
        const o = t.left;
        const i = t.top;
        const a = t.right;
        const s = t.gap;
        return (
          n === void 0 && (n = 'margin'),
          `
  .`
            .concat(
              Rd,
              ` {
   overflow: hidden `
            )
            .concat(
              r,
              `;
   padding-right: `
            )
            .concat(s, 'px ')
            .concat(
              r,
              `;
  }
  body {
    overflow: hidden `
            )
            .concat(
              r,
              `;
    overscroll-behavior: contain;
    `
            )
            .concat(
              [
                e && 'position: relative '.concat(r, ';'),
                n === 'margin' &&
                  `
    padding-left: `
                    .concat(
                      o,
                      `px;
    padding-top: `
                    )
                    .concat(
                      i,
                      `px;
    padding-right: `
                    )
                    .concat(
                      a,
                      `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                    )
                    .concat(s, 'px ')
                    .concat(
                      r,
                      `;
    `
                    ),
                n === 'padding' &&
                  'padding-right: '.concat(s, 'px ').concat(r, ';'),
              ]
                .filter(Boolean)
                .join(''),
              `
  }
  
  .`
            )
            .concat(
              Er,
              ` {
    right: `
            )
            .concat(s, 'px ')
            .concat(
              r,
              `;
  }
  
  .`
            )
            .concat(
              xr,
              ` {
    margin-right: `
            )
            .concat(s, 'px ')
            .concat(
              r,
              `;
  }
  
  .`
            )
            .concat(Er, ' .')
            .concat(
              Er,
              ` {
    right: 0 `
            )
            .concat(
              r,
              `;
  }
  
  .`
            )
            .concat(xr, ' .')
            .concat(
              xr,
              ` {
    margin-right: 0 `
            )
            .concat(
              r,
              `;
  }
  
  body {
    `
            )
            .concat(Md, ': ')
            .concat(
              s,
              `px;
  }
`
            )
        );
      }),
      (Hd = function (t) {
        const e = t.noRelative;
        const n = t.noImportant;
        const r = t.gapMode;
        const o = r === void 0 ? 'margin' : r;
        const i = It(() => zd(o), [o]);
        return q(hc, { styles: mc(i, !e, o, n ? '' : '!important') });
      });
  });
  const i1 = v(() => {
    o1(), Ns(), Ud();
  });
  let Zr;
  let rr;
  let Ge;
  const a1 = v(() => {
    if (((Zr = !1), typeof window < 'u'))
      try {
        (rr = Object.defineProperty({}, 'passive', {
          get() {
            return (Zr = !0), !0;
          },
        })),
          window.addEventListener('test', rr, rr),
          window.removeEventListener('test', rr, rr);
      } catch {
        Zr = !1;
      }
    Ge = Zr ? { passive: !1 } : !1;
  });
  let vc;
  let Xi;
  let gc;
  let yc;
  let Ha;
  let bc;
  let wc;
  let _i;
  let Ki;
  let Ec;
  let Wd;
  const s1 = v(() => {
    (vc = function (t) {
      return t.tagName === 'TEXTAREA';
    }),
      (Xi = function (t, e) {
        const n = window.getComputedStyle(t);
        return (
          n[e] !== 'hidden' &&
          !(n.overflowY === n.overflowX && !vc(t) && n[e] === 'visible')
        );
      }),
      (gc = function (t) {
        return Xi(t, 'overflowY');
      }),
      (yc = function (t) {
        return Xi(t, 'overflowX');
      }),
      (Ha = function (t, e) {
        let n = e;
        do {
          typeof ShadowRoot < 'u' && n instanceof ShadowRoot && (n = n.host);
          const r = _i(t, n);
          if (r) {
            const o = Ki(t, n);
            const i = o[1];
            const a = o[2];
            if (i > a) return !0;
          }
          n = n.parentNode;
        } while (n && n !== document.body);
        return !1;
      }),
      (bc = function (t) {
        const e = t.scrollTop;
        const n = t.scrollHeight;
        const r = t.clientHeight;
        return [e, n, r];
      }),
      (wc = function (t) {
        const e = t.scrollLeft;
        const n = t.scrollWidth;
        const r = t.clientWidth;
        return [e, n, r];
      }),
      (_i = function (t, e) {
        return t === 'v' ? gc(e) : yc(e);
      }),
      (Ki = function (t, e) {
        return t === 'v' ? bc(e) : wc(e);
      }),
      (Ec = function (t, e) {
        return t === 'h' && e === 'rtl' ? -1 : 1;
      }),
      (Wd = function (t, e, n, r, o) {
        const i = Ec(t, window.getComputedStyle(e).direction);
        const a = i * r;
        let s = n.target;
        const l = e.contains(s);
        let u = !1;
        const c = a > 0;
        let f = 0;
        let p = 0;
        do {
          const d = Ki(t, s);
          const h = d[0];
          const m = d[1];
          const y = d[2];
          const E = m - y - i * h;
          (h || E) && _i(t, s) && ((f += E), (p += h)), (s = s.parentNode);
        } while (
          (!l && s !== document.body) ||
          (l && (e.contains(s) || e === s))
        );
        return (
          ((c && ((o && f === 0) || (!o && a > f))) ||
            (!c && ((o && p === 0) || (!o && -a > p)))) &&
            (u = !0),
          u
        );
      });
  });
  function l1(t) {
    const e = nt([]);
    const n = nt([0, 0]);
    const r = nt();
    const o = at(Gd++)[0];
    const i = at(() => Ls())[0];
    const a = nt(t);
    W(() => {
      a.current = t;
    }, [t]),
      W(() => {
        if (t.inert) {
          document.body.classList.add('block-interactivity-'.concat(o));
          const m = $t(
            [t.lockRef.current],
            (t.shards || []).map(Ya),
            !0
          ).filter(Boolean);
          return (
            m.forEach((y) => y.classList.add('allow-interactivity-'.concat(o))),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                m.forEach((y) =>
                  y.classList.remove('allow-interactivity-'.concat(o))
                );
            }
          );
        }
      }, [t.inert, t.lockRef.current, t.shards]);
    const s = xt((m, y) => {
      if ('touches' in m && m.touches.length === 2)
        return !a.current.allowPinchZoom;
      const E = pr(m);
      const x = n.current;
      const b = 'deltaX' in m ? m.deltaX : x[0] - E[0];
      const w = 'deltaY' in m ? m.deltaY : x[1] - E[1];
      let O;
      const S = m.target;
      const M = Math.abs(b) > Math.abs(w) ? 'h' : 'v';
      if ('touches' in m && M === 'h' && S.type === 'range') return !1;
      let N = Ha(M, S);
      if (!N) return !0;
      if ((N ? (O = M) : ((O = M === 'v' ? 'h' : 'v'), (N = Ha(M, S))), !N))
        return !1;
      if (
        (!r.current && 'changedTouches' in m && (b || w) && (r.current = O), !O)
      )
        return !0;
      const B = r.current || O;
      return Wd(B, y, m, B === 'h' ? b : w, !0);
    }, []);
    const l = xt((m) => {
      const y = m;
      if (!(!Xe.length || Xe[Xe.length - 1] !== i)) {
        const E = 'deltaY' in y ? Wa(y) : pr(y);
        const x = e.current.filter(
          (O) => O.name === y.type && O.target === y.target && Yd(O.delta, E)
        )[0];
        if (x && x.should) {
          y.cancelable && y.preventDefault();
          return;
        }
        if (!x) {
          const b = (a.current.shards || [])
            .map(Ya)
            .filter(Boolean)
            .filter((O) => O.contains(y.target));
          const w = b.length > 0 ? s(y, b[0]) : !a.current.noIsolation;
          w && y.cancelable && y.preventDefault();
        }
      }
    }, []);
    const u = xt((m, y, E, x) => {
      const b = { name: m, delta: y, target: E, should: x };
      e.current.push(b),
        setTimeout(() => {
          e.current = e.current.filter((w) => w !== b);
        }, 1);
    }, []);
    const c = xt((m) => {
      (n.current = pr(m)), (r.current = void 0);
    }, []);
    const f = xt((m) => {
      u(m.type, Wa(m), m.target, s(m, t.lockRef.current));
    }, []);
    const p = xt((m) => {
      u(m.type, pr(m), m.target, s(m, t.lockRef.current));
    }, []);
    W(
      () => (
        Xe.push(i),
        t.setCallbacks({
          onScrollCapture: f,
          onWheelCapture: f,
          onTouchMoveCapture: p,
        }),
        document.addEventListener('wheel', l, Ge),
        document.addEventListener('touchmove', l, Ge),
        document.addEventListener('touchstart', c, Ge),
        function () {
          (Xe = Xe.filter((m) => m !== i)),
            document.removeEventListener('wheel', l, Ge),
            document.removeEventListener('touchmove', l, Ge),
            document.removeEventListener('touchstart', c, Ge);
        }
      ),
      []
    );
    const d = t.removeScrollBar;
    const h = t.inert;
    return q(
      Se,
      null,
      h ? q(i, { styles: qd(o) }) : null,
      d ? q(Hd, { gapMode: 'margin' }) : null
    );
  }
  let pr;
  let Wa;
  let Ya;
  let Yd;
  let qd;
  let Gd;
  let Xe;
  const u1 = v(() => {
    G(),
      i1(),
      Bd(),
      a1(),
      s1(),
      (pr = function (t) {
        return 'changedTouches' in t
          ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY]
          : [0, 0];
      }),
      (Wa = function (t) {
        return [t.deltaX, t.deltaY];
      }),
      (Ya = function (t) {
        return t && 'current' in t ? t.current : t;
      }),
      (Yd = function (t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }),
      (qd = function (t) {
        return `
  .block-interactivity-`
          .concat(
            t,
            ` {pointer-events: none;}
  .allow-interactivity-`
          )
          .concat(
            t,
            ` {pointer-events: all;}
`
          );
      }),
      (Gd = 0),
      (Xe = []);
  });
  let Xd;
  const c1 = v(() => {
    Dd(), u1(), Nd(), (Xd = Qb(Is, l1));
  });
  let Qi;
  let _d;
  const p1 = v(() => {
    G(),
      Zb(),
      c1(),
      (Qi = ct((t, e) => q(Or, { ...t, ref: e, sideCar: Xd }))),
      (Qi.classNames = Or.classNames),
      (_d = Qi);
  });
  const f1 = v(() => {
    p1();
  });
  let xc;
  let He;
  let or;
  let ir;
  let $r;
  let Ji;
  let Oc;
  let Sc;
  let Kd;
  const d1 = v(() => {
    (xc = function (t) {
      if (typeof document > 'u') return null;
      const e = Array.isArray(t) ? t[0] : t;
      return e.ownerDocument.body;
    }),
      (He = new WeakMap()),
      (or = new WeakMap()),
      (ir = {}),
      ($r = 0),
      (Ji = function (t) {
        return t && (t.host || Ji(t.parentNode));
      }),
      (Oc = function (t, e) {
        return e
          .map((n) => {
            if (t.contains(n)) return n;
            const r = Ji(n);
            return r && t.contains(r)
              ? r
              : (console.error(
                  'aria-hidden',
                  n,
                  'in not contained inside',
                  t,
                  '. Doing nothing'
                ),
                null);
          })
          .filter((n) => !!n);
      }),
      (Sc = function (t, e, n, r) {
        const o = Oc(e, Array.isArray(t) ? t : [t]);
        ir[n] || (ir[n] = new WeakMap());
        const i = ir[n];
        const a = [];
        const s = new Set();
        const l = new Set(o);
        const u = function (f) {
          !f || s.has(f) || (s.add(f), u(f.parentNode));
        };
        o.forEach(u);
        const c = function (f) {
          !f ||
            l.has(f) ||
            Array.prototype.forEach.call(f.children, (p) => {
              if (s.has(p)) c(p);
              else {
                const d = p.getAttribute(r);
                const h = d !== null && d !== 'false';
                const m = (He.get(p) || 0) + 1;
                const y = (i.get(p) || 0) + 1;
                He.set(p, m),
                  i.set(p, y),
                  a.push(p),
                  m === 1 && h && or.set(p, !0),
                  y === 1 && p.setAttribute(n, 'true'),
                  h || p.setAttribute(r, 'true');
              }
            });
        };
        return (
          c(e),
          s.clear(),
          $r++,
          function () {
            a.forEach((f) => {
              const p = He.get(f) - 1;
              const d = i.get(f) - 1;
              He.set(f, p),
                i.set(f, d),
                p || (or.has(f) || f.removeAttribute(r), or.delete(f)),
                d || f.removeAttribute(n);
            }),
              $r--,
              $r ||
                ((He = new WeakMap()),
                (He = new WeakMap()),
                (or = new WeakMap()),
                (ir = {}));
          }
        );
      }),
      (Kd = function (t, e, n) {
        n === void 0 && (n = 'data-aria-hidden');
        const r = Array.from(Array.isArray(t) ? t : [t]);
        const o = e || xc(t);
        return o
          ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
            Sc(r, o, n, 'aria-hidden'))
          : function () {
              return null;
            };
      });
  });
  function Pc(t) {
    return t ? 'open' : 'closed';
  }
  let Zi;
  let $i;
  let h1;
  let Tc;
  let Kt;
  let Cc;
  let ta;
  let Ac;
  let ea;
  let kc;
  let to;
  let Rc;
  let Mc;
  let We;
  let Dc;
  let Nc;
  let Ic;
  let na;
  let ra;
  let Lc;
  let jc;
  let Fc;
  let Vc;
  let Bc;
  let zc;
  let Qd;
  let Jd;
  let Zd;
  let $d;
  let th;
  let eh;
  let nh;
  const rh = v(() => {
    Vn(),
      md(),
      jr(),
      db(),
      hb(),
      gb(),
      Pb(),
      Db(),
      Nb(),
      jb(),
      ti(),
      Vb(),
      f1(),
      d1(),
      Ed(),
      (Zi = 'Dialog'),
      ([$i, h1] = pb(Zi)),
      ([Tc, Kt] = $i(Zi)),
      (Cc = (t) => {
        const {
          __scopeDialog: e,
          children: n,
          open: r,
          defaultOpen: o,
          onOpenChange: i,
          modal: a = !0,
        } = t;
        const s = nt(null);
        const l = nt(null);
        const [u = !1, c] = mb({ prop: r, defaultProp: o, onChange: i });
        return q(
          Tc,
          {
            scope: e,
            triggerRef: s,
            contentRef: l,
            contentId: Yi(),
            titleId: Yi(),
            descriptionId: Yi(),
            open: u,
            onOpenChange: c,
            onOpenToggle: xt(() => c((f) => !f), [c]),
            modal: a,
          },
          n
        );
      }),
      (ta = 'DialogPortal'),
      ([Ac, ea] = $i(ta, { forceMount: void 0 })),
      (kc = (t) => {
        const {
          __scopeDialog: e,
          forceMount: n,
          children: r,
          container: o,
        } = t;
        const i = Kt(ta, e);
        return q(
          Ac,
          { scope: e, forceMount: n },
          Gt.map(r, (a) =>
            q(
              wr,
              { present: n || i.open },
              q(Ad, { asChild: !0, container: o }, a)
            )
          )
        );
      }),
      (to = 'DialogOverlay'),
      (Rc = ct((t, e) => {
        const n = ea(to, t.__scopeDialog);
        const { forceMount: r = n.forceMount, ...o } = t;
        const i = Kt(to, t.__scopeDialog);
        return i.modal
          ? q(wr, { present: r || i.open }, q(Mc, Ot({}, o, { ref: e })))
          : null;
      })),
      (Mc = ct((t, e) => {
        const { __scopeDialog: n, ...r } = t;
        const o = Kt(to, n);
        return q(
          _d,
          { as: Fo, allowPinchZoom: !0, shards: [o.contentRef] },
          q(
            De.div,
            Ot({ 'data-state': Pc(o.open) }, r, {
              ref: e,
              style: { pointerEvents: 'auto', ...r.style },
            })
          )
        );
      })),
      (We = 'DialogContent'),
      (Dc = ct((t, e) => {
        const n = ea(We, t.__scopeDialog);
        const { forceMount: r = n.forceMount, ...o } = t;
        const i = Kt(We, t.__scopeDialog);
        return q(
          wr,
          { present: r || i.open },
          i.modal ? q(Nc, Ot({}, o, { ref: e })) : q(Ic, Ot({}, o, { ref: e }))
        );
      })),
      (Nc = ct((t, e) => {
        const n = Kt(We, t.__scopeDialog);
        const r = nt(null);
        const o = Cr(e, n.contentRef, r);
        return (
          W(() => {
            const i = r.current;
            if (i) return Kd(i);
          }, []),
          q(
            na,
            Ot({}, t, {
              ref: o,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: Ke(t.onCloseAutoFocus, (i) => {
                let a;
                i.preventDefault(),
                  (a = n.triggerRef.current) === null ||
                    a === void 0 ||
                    a.focus();
              }),
              onPointerDownOutside: Ke(t.onPointerDownOutside, (i) => {
                const a = i.detail.originalEvent;
                const s = a.button === 0 && a.ctrlKey === !0;
                (a.button === 2 || s) && i.preventDefault();
              }),
              onFocusOutside: Ke(t.onFocusOutside, (i) => i.preventDefault()),
            })
          )
        );
      })),
      (Ic = ct((t, e) => {
        const n = Kt(We, t.__scopeDialog);
        const r = nt(!1);
        const o = nt(!1);
        return q(
          na,
          Ot({}, t, {
            ref: e,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (i) => {
              let a;
              if (
                ((a = t.onCloseAutoFocus) === null ||
                  a === void 0 ||
                  a.call(t, i),
                !i.defaultPrevented)
              ) {
                let s;
                r.current ||
                  (s = n.triggerRef.current) === null ||
                  s === void 0 ||
                  s.focus(),
                  i.preventDefault();
              }
              (r.current = !1), (o.current = !1);
            },
            onInteractOutside: (i) => {
              let a;
              let s;
              (a = t.onInteractOutside) === null ||
                a === void 0 ||
                a.call(t, i),
                i.defaultPrevented ||
                  ((r.current = !0),
                  i.detail.originalEvent.type === 'pointerdown' &&
                    (o.current = !0));
              const l = i.target;
              !((s = n.triggerRef.current) === null || s === void 0) &&
                s.contains(l) &&
                i.preventDefault(),
                i.detail.originalEvent.type === 'focusin' &&
                  o.current &&
                  i.preventDefault();
            },
          })
        );
      })),
      (na = ct((t, e) => {
        const {
          __scopeDialog: n,
          trapFocus: r,
          onOpenAutoFocus: o,
          onCloseAutoFocus: i,
          ...a
        } = t;
        const s = Kt(We, n);
        const l = nt(null);
        const u = Cr(e, l);
        return (
          Fb(),
          q(
            Se,
            null,
            q(
              Cd,
              {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: o,
                onUnmountAutoFocus: i,
              },
              q(
                Pd,
                Ot(
                  {
                    role: 'dialog',
                    id: s.contentId,
                    'aria-describedby': s.descriptionId,
                    'aria-labelledby': s.titleId,
                    'data-state': Pc(s.open),
                  },
                  a,
                  { ref: u, onDismiss: () => s.onOpenChange(!1) }
                )
              )
            ),
            !1
          )
        );
      })),
      (ra = 'DialogTitle'),
      (Lc = ct((t, e) => {
        const { __scopeDialog: n, ...r } = t;
        const o = Kt(ra, n);
        return q(De.h2, Ot({ id: o.titleId }, r, { ref: e }));
      })),
      (jc = 'DialogDescription'),
      (Fc = ct((t, e) => {
        const { __scopeDialog: n, ...r } = t;
        const o = Kt(jc, n);
        return q(De.p, Ot({ id: o.descriptionId }, r, { ref: e }));
      })),
      (Vc = 'DialogClose'),
      (Bc = ct((t, e) => {
        const { __scopeDialog: n, ...r } = t;
        const o = Kt(Vc, n);
        return q(
          De.button,
          Ot({ type: 'button' }, r, {
            ref: e,
            onClick: Ke(t.onClick, () => o.onOpenChange(!1)),
          })
        );
      })),
      (zc = 'DialogTitleWarning'),
      cb(zc, { contentName: We, titleName: ra, docsSlug: 'dialog' }),
      (Qd = Cc),
      (Jd = kc),
      (Zd = Rc),
      ($d = Dc),
      (th = Lc),
      (eh = Fc),
      (nh = Bc);
  });
  let oh;
  let Uc;
  let ih;
  const m1 = v(() => {
    rh(),
      (oh = Y.div`
  background-color: rgba(27, 28, 29, 0.48);
  position: fixed;
  inset: 0px;
  width: 100%;
  height: 100%;
`),
      (Uc = Y.div(
        ({ width: t, height: e }) => $l`
    background-color: white;
    border-radius: 6px;
    box-shadow: rgba(14, 18, 22, 0.35) 0px 10px 38px -10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${t ?? 740}px;
    height: ${e ? `${e}px` : 'auto'};
    max-width: calc(100% - 40px);
    max-height: 85vh;
    overflow: hidden;

    &:focus-visible {
      outline: none;
    }
  `
      )),
      (ih = g.forwardRef(({ width: t, height: e, children: n, ...r }, o) =>
        g.createElement(
          $d,
          { ref: o, asChild: !0, ...r },
          g.createElement(Uc, { width: t, height: e }, n)
        )
      ));
  });
  function ah({
    children: t,
    width: e,
    height: n,
    onEscapeKeyDown: r,
    onInteractOutside: o = (a) => a.preventDefault(),
    ...i
  }) {
    return g.createElement(
      Qd,
      { ...i },
      g.createElement(
        Jd,
        null,
        g.createElement(Zd, { asChild: !0 }, g.createElement(oh, null)),
        g.createElement(
          ih,
          { width: e, height: n, onInteractOutside: o, onEscapeKeyDown: r },
          t({ Title: th, Description: eh, Close: nh })
        )
      )
    );
  }
  const sh = v(() => {
    rh(), m1();
  });
  function v1() {
    return g.createElement(
      'svg',
      {
        width: '32px',
        height: '40px',
        viewBox: '0 0 256 319',
        preserveAspectRatio: 'xMidYMid',
      },
      g.createElement(
        'defs',
        null,
        g.createElement('path', {
          d: 'M9.87245893,293.324145 L0.0114611411,30.5732167 C-0.314208957,21.8955842 6.33948896,14.5413918 15.0063196,13.9997149 L238.494389,0.0317105427 C247.316188,-0.519651867 254.914637,6.18486163 255.466,15.0066607 C255.486773,15.339032 255.497167,15.6719708 255.497167,16.0049907 L255.497167,302.318596 C255.497167,311.157608 248.331732,318.323043 239.492719,318.323043 C239.253266,318.323043 239.013844,318.317669 238.774632,318.306926 L25.1475605,308.712253 C16.8276309,308.338578 10.1847994,301.646603 9.87245893,293.324145 L9.87245893,293.324145 Z',
          id: 'path-1',
        })
      ),
      g.createElement(
        'g',
        null,
        g.createElement(
          'mask',
          { id: 'mask-2', fill: 'white' },
          g.createElement('use', { xlinkHref: '#path-1' })
        ),
        g.createElement('use', {
          fill: '#FF4785',
          fillRule: 'nonzero',
          xlinkHref: '#path-1',
        }),
        g.createElement('path', {
          d: 'M188.665358,39.126973 L190.191903,2.41148534 L220.883535,0 L222.205755,37.8634126 C222.251771,39.1811466 221.22084,40.2866846 219.903106,40.3327009 C219.338869,40.3524045 218.785907,40.1715096 218.342409,39.8221376 L206.506729,30.4984116 L192.493574,41.1282444 C191.443077,41.9251106 189.945493,41.7195021 189.148627,40.6690048 C188.813185,40.2267976 188.6423,39.6815326 188.665358,39.126973 Z M149.413703,119.980309 C149.413703,126.206975 191.355678,123.222696 196.986019,118.848893 C196.986019,76.4467826 174.234041,54.1651411 132.57133,54.1651411 C90.9086182,54.1651411 67.5656805,76.7934542 67.5656805,110.735941 C67.5656805,169.85244 147.345341,170.983856 147.345341,203.229219 C147.345341,212.280549 142.913138,217.654777 133.162291,217.654777 C120.456641,217.654777 115.433477,211.165914 116.024438,189.103298 C116.024438,184.317101 67.5656805,182.824962 66.0882793,189.103298 C62.3262146,242.56887 95.6363019,257.990394 133.753251,257.990394 C170.688279,257.990394 199.645341,238.303123 199.645341,202.663511 C199.645341,139.304202 118.683759,141.001326 118.683759,109.604526 C118.683759,96.8760922 128.139127,95.178968 133.753251,95.178968 C139.662855,95.178968 150.300143,96.2205679 149.413703,119.980309 Z',
          fill: '#FFFFFF',
          fillRule: 'nonzero',
          mask: 'url(#mask-2)',
        })
      )
    );
  }
  const g1 = v(() => {});
  let lh;
  let uh;
  let ch;
  let ph;
  let fh;
  let dh;
  let hh;
  let Hc;
  let mh;
  let Wc;
  let vh;
  let Yc;
  let gh;
  const y1 = v(() => {
    (lh = Y.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`),
      (uh = Y.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`),
      (ch = Y.h1`
  margin: 0;
  margin-top: 20px;
  margin-bottom: 5px;
  color: ${({ theme: t }) => t.color.darkest};
  font-weight: ${({ theme: t }) => t.typography.weight.bold};
  font-size: ${({ theme: t }) => t.typography.size.m1}px;
  line-height: ${({ theme: t }) => t.typography.size.m3}px;
`),
      (ph = Y.p`
  margin: 0;
  margin-bottom: 20px;
  max-width: 320px;
  text-align: center;
  font-size: ${({ theme: t }) => t.typography.size.s2}px;
  font-weight: ${({ theme: t }) => t.typography.weight.regular};
  line-height: ${({ theme: t }) => t.typography.size.m1}px;
  color: ${({ theme: t }) => t.color.darker};
`),
      (fh = Y.button`
  all: unset;
  cursor: pointer;
  font-size: 13px;
  color: #798186;
  padding-bottom: 20px;

  &:focus-visible {
    outline: auto;
  }
`),
      (dh = Y(Xn)`
  margin-left: 2px;
  height: 10px;
`),
      (hh = Y.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`),
      (Hc = Be`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(-200px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
      (mh = Y.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -200px;
  top: -900px;
  background: radial-gradient(
    circle at center,
    rgba(253, 255, 147, 1) 0%,
    rgba(253, 255, 147, 0) 70%
  );
  animation: ${Hc} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 3;
`),
      (Wc = Be`
  0% { transform: translate(0px, 0px) }
  50% { transform: translate(400px, 0px) }
  100% { transform: translate(0px, 0px) }
`),
      (vh = Y.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(255, 119, 119, 1) 0%,
    rgba(255, 119, 119, 0) 70%
  );
  animation: ${Wc} 6s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 2;
`),
      (Yc = Be`
  0% { transform: translate(600px, -40px) }
  50% { transform: translate(600px, -200px) }
  100% { transform: translate(600px, -40px) }
`),
      (gh = Y.div`
  position: absolute;
  width: 1200px;
  height: 1200px;
  left: -600px;
  top: -840px;
  background: radial-gradient(
    circle at center,
    rgba(119, 255, 247, 0.8) 0%,
    rgba(119, 255, 247, 0) 70%
  );
  animation: ${Yc} 4s linear infinite;
  animation-timing-function: ease-in-out;
  z-index: 4;
`),
      Y.h2`
  color: #000;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
`,
      Y.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #454e54;
`;
  });
  let yh;
  const b1 = v(() => {
    Ds(),
      sh(),
      g1(),
      y1(),
      (yh = ({ onProceed: t, skipOnboarding: e }) =>
        g.createElement(
          ah,
          { width: 540, height: 430, defaultOpen: !0 },
          ({ Close: n }) =>
            g.createElement(
              lh,
              { 'data-chromatic': 'ignore' },
              g.createElement(
                uh,
                null,
                g.createElement(v1, null),
                g.createElement(ch, null, 'Welcome to Storybook'),
                g.createElement(
                  ph,
                  null,
                  'Storybook helps you develop UI components faster. Learn the basics in a few simple steps.'
                ),
                g.createElement(
                  zt,
                  { style: { marginTop: 4 }, onClick: t },
                  'Start your 3 minute tour'
                )
              ),
              g.createElement(
                fh,
                { onClick: e },
                'Skip tour',
                g.createElement(dh, { icon: 'arrowright' })
              ),
              g.createElement(
                hh,
                null,
                g.createElement(mh, null),
                g.createElement(vh, null),
                g.createElement(gh, null)
              )
            )
        ));
  });
  const w1 = ee((t, e) => {
    function n(r, o, i) {
      let a;
      let s;
      let l;
      let u;
      let c;
      o == null && (o = 100);
      function f() {
        const d = Date.now() - u;
        d < o && d >= 0
          ? (a = setTimeout(f, o - d))
          : ((a = null), i || ((c = r.apply(l, s)), (l = s = null)));
      }
      const p = function () {
        (l = this), (s = arguments), (u = Date.now());
        const d = i && !a;
        return (
          a || (a = setTimeout(f, o)),
          d && ((c = r.apply(l, s)), (l = s = null)),
          c
        );
      };
      return (
        (p.clear = function () {
          a && (clearTimeout(a), (a = null));
        }),
        (p.flush = function () {
          a &&
            ((c = r.apply(l, s)), (l = s = null), clearTimeout(a), (a = null));
        }),
        p
      );
    }
    (n.debounce = n), (e.exports = n);
  });
  function E1(t) {
    const {
      debounce: e,
      scroll: n,
      polyfill: r,
      offsetSize: o,
    } = t === void 0 ? { debounce: 0, scroll: !1, offsetSize: !1 } : t;
    const i = r || (typeof window > 'u' ? class {} : window.ResizeObserver);
    if (!i)
      throw new Error(
        'This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills'
      );
    const [a, s] = at({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
    });
    const l = nt({
      element: null,
      scrollContainers: null,
      resizeObserver: null,
      lastBounds: a,
    });
    const u = e ? (typeof e === 'number' ? e : e.scroll) : null;
    const c = e ? (typeof e === 'number' ? e : e.resize) : null;
    const f = nt(!1);
    W(() => ((f.current = !0), () => void (f.current = !1)));
    const [p, d, h] = It(() => {
      const x = () => {
        if (!l.current.element) return;
        const {
          left: b,
          top: w,
          width: O,
          height: S,
          bottom: M,
          right: N,
          x: B,
          y: X,
        } = l.current.element.getBoundingClientRect();
        const et = {
          left: b,
          top: w,
          width: O,
          height: S,
          bottom: M,
          right: N,
          x: B,
          y: X,
        };
        l.current.element instanceof HTMLElement &&
          o &&
          ((et.height = l.current.element.offsetHeight),
          (et.width = l.current.element.offsetWidth)),
          Object.freeze(et),
          f.current &&
            !wh(l.current.lastBounds, et) &&
            s((l.current.lastBounds = et));
      };
      return [x, c ? (0, qa.default)(x, c) : x, u ? (0, qa.default)(x, u) : x];
    }, [s, o, u, c]);
    function m() {
      l.current.scrollContainers &&
        (l.current.scrollContainers.forEach((x) =>
          x.removeEventListener('scroll', h, !0)
        ),
        (l.current.scrollContainers = null)),
        l.current.resizeObserver &&
          (l.current.resizeObserver.disconnect(),
          (l.current.resizeObserver = null));
    }
    function y() {
      l.current.element &&
        ((l.current.resizeObserver = new i(h)),
        l.current.resizeObserver.observe(l.current.element),
        n &&
          l.current.scrollContainers &&
          l.current.scrollContainers.forEach((x) =>
            x.addEventListener('scroll', h, { capture: !0, passive: !0 })
          ));
    }
    const E = (x) => {
      !x ||
        x === l.current.element ||
        (m(),
        (l.current.element = x),
        (l.current.scrollContainers = bh(x)),
        y());
    };
    return (
      O1(h, !!n),
      x1(d),
      W(() => {
        m(), y();
      }, [n, h, d]),
      W(() => m, []),
      [E, a, p]
    );
  }
  function x1(t) {
    W(() => {
      const e = t;
      return (
        window.addEventListener('resize', e),
        () => void window.removeEventListener('resize', e)
      );
    }, [t]);
  }
  function O1(t, e) {
    W(() => {
      if (e) {
        const n = t;
        return (
          window.addEventListener('scroll', n, { capture: !0, passive: !0 }),
          () => void window.removeEventListener('scroll', n, !0)
        );
      }
    }, [t, e]);
  }
  function bh(t) {
    const e = [];
    if (!t || t === document.body) return e;
    const {
      overflow: n,
      overflowX: r,
      overflowY: o,
    } = window.getComputedStyle(t);
    return (
      [n, r, o].some((i) => i === 'auto' || i === 'scroll') && e.push(t),
      [...e, ...bh(t.parentElement)]
    );
  }
  let qa;
  let qc;
  let wh;
  const S1 = v(() => {
    (qa = le(w1())),
      (qc = ['x', 'y', 'top', 'bottom', 'left', 'right', 'width', 'height']),
      (wh = (t, e) => qc.every((n) => t[n] === e[n]));
  });
  let Gc;
  let js;
  const Eh = v(() => {
    (Gc = 'production'),
      (js = typeof process > 'u' || re === void 0 ? Gc : 'production');
  });
  function P1(t) {
    for (const e in t)
      t[e] !== null &&
        (e === 'projectionNodeConstructor'
          ? (Dn.projectionNodeConstructor = t[e])
          : (Dn[e].Component = t[e]));
  }
  let ae;
  let Dn;
  const xh = v(() => {
    (ae = function (t) {
      return {
        isEnabled(e) {
          return t.some((n) => !!e[n]);
        },
      };
    }),
      (Dn = {
        measureLayout: ae(['layout', 'layoutId', 'drag']),
        animation: ae([
          'animate',
          'exit',
          'variants',
          'whileHover',
          'whileTap',
          'whileFocus',
          'whileDrag',
          'whileInView',
        ]),
        exit: ae(['exit']),
        drag: ae(['drag', 'dragControls']),
        focus: ae(['whileFocus']),
        hover: ae(['whileHover', 'onHoverStart', 'onHoverEnd']),
        tap: ae(['whileTap', 'onTap', 'onTapStart', 'onTapCancel']),
        pan: ae(['onPan', 'onPanStart', 'onPanSessionStart', 'onPanEnd']),
        inView: ae(['whileInView', 'onViewportEnter', 'onViewportLeave']),
      });
  });
  let Fr;
  let qt;
  const fe = v(() => {
    (Fr = function () {}), (qt = function () {});
  });
  let Fs;
  const Oh = v(() => {
    Fs = Yt({ strict: !1 });
  });
  function T1(t, e, n) {
    const r = [];
    const o = mt(Fs);
    if (!e) return null;
    js !== 'production' &&
      n &&
      o.strict &&
      qt(
        !1,
        'You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.'
      );
    for (let i = 0; i < Sh; i++) {
      const a = Ga[i];
      const s = Dn[a];
      const l = s.isEnabled;
      const u = s.Component;
      l(t) && u && r.push(q(u, { key: a, ...t, visualElement: e }));
    }
    return r;
  }
  let Ga;
  let Sh;
  const C1 = v(() => {
    G(), Eh(), xh(), fe(), Oh(), (Ga = Object.keys(Dn)), (Sh = Ga.length);
  });
  let ei;
  const Vs = v(() => {
    ei = Yt({
      transformPagePoint(t) {
        return t;
      },
      isStatic: !1,
      reducedMotion: 'never',
    });
  });
  function A1() {
    return mt(Vr).visualElement;
  }
  let Vr;
  const ni = v(() => {
    Vr = Yt({});
  });
  let Br;
  const ri = v(() => {
    Br = Yt(null);
  });
  let Je;
  const oi = v(() => {
    Je = typeof document < 'u';
  });
  let Xa;
  const k1 = v(() => {
    oi(), (Xa = Je ? Wn : W);
  });
  function R1() {
    if (((Bs = !0), !!Je))
      if (window.matchMedia) {
        const t = window.matchMedia('(prefers-reduced-motion)');
        const e = function () {
          return (Vo.current = t.matches);
        };
        t.addListener(e), e();
      } else Vo.current = !1;
  }
  function M1() {
    !Bs && R1();
    const t = bt(at(Vo.current), 1);
    const e = t[0];
    return e;
  }
  function D1() {
    const t = M1();
    const e = mt(ei).reducedMotion;
    return e === 'never' ? !1 : e === 'always' ? !0 : t;
  }
  let Vo;
  let Bs;
  const N1 = v(() => {
    G(), Vs(), oi(), (Vo = { current: null }), (Bs = !1);
  });
  function I1(t, e, n, r) {
    const o = mt(Fs);
    const i = A1();
    const a = mt(Br);
    const s = D1();
    const l = nt(void 0);
    r || (r = o.renderer),
      !l.current &&
        r &&
        (l.current = r(t, {
          visualState: e,
          parent: i,
          props: n,
          presenceId: a?.id,
          blockInitialAnimation: a?.initial === !1,
          shouldReduceMotion: s,
        }));
    const u = l.current;
    return (
      Xa(() => {
        u?.syncRender();
      }),
      W(() => {
        let c;
        (c = u?.animationState) === null || c === void 0 || c.animateChanges();
      }),
      Xa(
        () =>
          function () {
            return u?.notifyUnmount();
          },
        []
      ),
      u
    );
  }
  const L1 = v(() => {
    ri(), ni(), k1(), Oh(), N1();
  });
  function wn(t) {
    return (
      typeof t === 'object' &&
      Object.prototype.hasOwnProperty.call(t, 'current')
    );
  }
  const zs = v(() => {});
  function j1(t, e, n) {
    return xt(
      (r) => {
        let o;
        r && ((o = t.mount) === null || o === void 0 || o.call(t, r)),
          e && (r ? e.mount(r) : e.unmount()),
          n && (typeof n === 'function' ? n(r) : wn(n) && (n.current = r));
      },
      [e]
    );
  }
  const F1 = v(() => {
    zs();
  });
  function Ph(t) {
    return Array.isArray(t);
  }
  function Jt(t) {
    return typeof t === 'string' || Ph(t);
  }
  function V1(t) {
    const e = {};
    return t.forEachValue((n, r) => (e[r] = n.get())), e;
  }
  function B1(t) {
    const e = {};
    return t.forEachValue((n, r) => (e[r] = n.getVelocity())), e;
  }
  function Th(t, e, n, r, o) {
    let i;
    return (
      r === void 0 && (r = {}),
      o === void 0 && (o = {}),
      typeof e === 'function' && (e = e(n ?? t.custom, r, o)),
      typeof e === 'string' &&
        (e = (i = t.variants) === null || i === void 0 ? void 0 : i[e]),
      typeof e === 'function' && (e = e(n ?? t.custom, r, o)),
      e
    );
  }
  function ii(t, e, n) {
    const r = t.getProps();
    return Th(r, e, n ?? r.custom, V1(t), B1(t));
  }
  function ai(t) {
    let e;
    return (
      typeof ((e = t.animate) === null || e === void 0 ? void 0 : e.start) ===
        'function' ||
      Jt(t.initial) ||
      Jt(t.animate) ||
      Jt(t.whileHover) ||
      Jt(t.whileDrag) ||
      Jt(t.whileTap) ||
      Jt(t.whileFocus) ||
      Jt(t.exit)
    );
  }
  function Ch(t) {
    return !!(ai(t) || t.variants);
  }
  const Bn = v(() => {});
  function z1(t, e) {
    if (ai(t)) {
      const n = t.initial;
      const r = t.animate;
      return {
        initial: n === !1 || Jt(n) ? n : void 0,
        animate: Jt(r) ? r : void 0,
      };
    }
    return t.inherit !== !1 ? e : {};
  }
  const U1 = v(() => {
    Bn();
  });
  function H1(t) {
    const e = z1(t, mt(Vr));
    const n = e.initial;
    const r = e.animate;
    return It(() => ({ initial: n, animate: r }), [Xc(n), Xc(r)]);
  }
  function Xc(t) {
    return Array.isArray(t) ? t.join(' ') : t;
  }
  const W1 = v(() => {
    ni(), U1();
  });
  function si(t) {
    const e = nt(null);
    return e.current === null && (e.current = t()), e.current;
  }
  const li = v(() => {});
  let On;
  const Us = v(() => {
    On = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  });
  function Y1() {
    return si(() => {
      if (On.hasEverUpdated) return Ah++;
    });
  }
  let Ah;
  const q1 = v(() => {
    li(), Us(), (Ah = 1);
  });
  let Hs;
  const kh = v(() => {
    Hs = Yt({});
  });
  let Ws;
  const Rh = v(() => {
    Ws = Yt({});
  });
  function G1(t, e, n, r) {
    let o;
    const i = e.layoutId;
    const a = e.layout;
    const s = e.drag;
    const l = e.dragConstraints;
    const u = e.layoutScroll;
    const c = mt(Ws);
    !r ||
      !n ||
      n?.projection ||
      ((n.projection = new r(
        t,
        n.getLatestValues(),
        (o = n.parent) === null || o === void 0 ? void 0 : o.projection
      )),
      n.projection.setOptions({
        layoutId: i,
        layout: a,
        alwaysMeasureLayout: !!s || (l && wn(l)),
        visualElement: n,
        scheduleRender() {
          return n.scheduleRender();
        },
        animationType: typeof a === 'string' ? a : 'both',
        initialPromotionConfig: c,
        layoutScroll: u,
      }));
  }
  const X1 = v(() => {
    zs(), Rh();
  });
  let Mh;
  const _1 = v(() => {
    G(),
      (Mh = (function (t) {
        kd(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          (e.prototype.getSnapshotBeforeUpdate = function () {
            return this.updateProps(), null;
          }),
          (e.prototype.componentDidUpdate = function () {}),
          (e.prototype.updateProps = function () {
            const n = this.props;
            const r = n.visualElement;
            const o = n.props;
            r && r.setProps(o);
          }),
          (e.prototype.render = function () {
            return this.props.children;
          }),
          e
        );
      })(g.Component));
  });
  function K1(t) {
    const e = t.preloadedFeatures;
    const n = t.createVisualElement;
    const r = t.projectionNodeConstructor;
    const o = t.useRender;
    const i = t.useVisualState;
    const a = t.Component;
    e && P1(e);
    function s(l, u) {
      const c = Q1(l);
      l = { ...l, layoutId: c };
      const f = mt(ei);
      let p = null;
      const d = H1(l);
      const h = f.isStatic ? void 0 : Y1();
      const m = i(l, f.isStatic);
      return (
        !f.isStatic &&
          Je &&
          ((d.visualElement = I1(a, m, { ...f, ...l }, n)),
          G1(h, l, d.visualElement, r || Dn.projectionNodeConstructor),
          (p = T1(l, d.visualElement, e))),
        q(
          Mh,
          { visualElement: d.visualElement, props: { ...f, ...l } },
          p,
          q(
            Vr.Provider,
            { value: d },
            o(
              a,
              l,
              h,
              j1(m, d.visualElement, u),
              m,
              f.isStatic,
              d.visualElement
            )
          )
        )
      );
    }
    return ct(s);
  }
  function Q1(t) {
    let e;
    const n = t.layoutId;
    const r = (e = mt(Hs)) === null || e === void 0 ? void 0 : e.id;
    return r && n !== void 0 ? `${r}-${n}` : n;
  }
  const J1 = v(() => {
    G(), C1(), Vs(), ni(), L1(), F1(), W1(), xh(), oi(), q1(), kh(), X1(), _1();
  });
  function Z1(t) {
    function e(r, o) {
      return o === void 0 && (o = {}), K1(t(r, o));
    }
    if (typeof Proxy > 'u') return e;
    const n = new Map();
    return new Proxy(e, {
      get(r, o) {
        return n.has(o) || n.set(o, e(o)), n.get(o);
      },
    });
  }
  const $1 = v(() => {
    J1();
  });
  let Dh;
  const tw = v(() => {
    Dh = [
      'animate',
      'circle',
      'defs',
      'desc',
      'ellipse',
      'g',
      'image',
      'line',
      'filter',
      'marker',
      'mask',
      'metadata',
      'path',
      'pattern',
      'polygon',
      'polyline',
      'rect',
      'stop',
      'svg',
      'switch',
      'symbol',
      'text',
      'tspan',
      'use',
      'view',
    ];
  });
  function Ys(t) {
    return typeof t !== 'string' || t.includes('-')
      ? !1
      : !!(Dh.indexOf(t) > -1 || /[A-Z]/.test(t));
  }
  const qs = v(() => {
    tw();
  });
  function ew(t) {
    Object.assign(Ar, t);
  }
  let Ar;
  const Gs = v(() => {
    Ar = {};
  });
  function nw(t, e) {
    return Sn.indexOf(t) - Sn.indexOf(e);
  }
  function zr(t) {
    return Ih.has(t);
  }
  function Nh(t) {
    return Lh.has(t);
  }
  let Bo;
  let _c;
  let Sn;
  let Ih;
  let Lh;
  const je = v(() => {
    (Bo = ['', 'X', 'Y', 'Z']),
      (_c = ['translate', 'scale', 'rotate', 'skew']),
      (Sn = ['transformPerspective', 'x', 'y', 'z']),
      _c.forEach((t) => Bo.forEach((e) => Sn.push(t + e))),
      (Ih = new Set(Sn)),
      (Lh = new Set(['originX', 'originY', 'originZ']));
  });
  function jh(t, e) {
    const n = e.layout;
    const r = e.layoutId;
    return (
      zr(t) || Nh(t) || ((n || r !== void 0) && (!!Ar[t] || t === 'opacity'))
    );
  }
  const Fh = v(() => {
    Gs(), je();
  });
  let ce;
  const nn = v(() => {
    ce = function (t) {
      return !!(t !== null && typeof t === 'object' && t.getVelocity);
    };
  });
  function rw(t, e, n, r) {
    const o = t.transform;
    const i = t.transformKeys;
    const a = e.enableHardwareAcceleration;
    const s = a === void 0 ? !0 : a;
    const l = e.allowTransformNone;
    const u = l === void 0 ? !0 : l;
    let c = '';
    i.sort(nw);
    for (var f = !1, p = i.length, d = 0; d < p; d++) {
      const h = i[d];
      (c += ''.concat(Vh[h] || h, '(').concat(o[h], ') ')),
        h === 'z' && (f = !0);
    }
    return (
      !f && s ? (c += 'translateZ(0)') : (c = c.trim()),
      r ? (c = r(o, n ? '' : c)) : u && n && (c = 'none'),
      c
    );
  }
  function ow(t) {
    const e = t.originX;
    const n = e === void 0 ? '50%' : e;
    const r = t.originY;
    const o = r === void 0 ? '50%' : r;
    const i = t.originZ;
    const a = i === void 0 ? 0 : i;
    return ''.concat(n, ' ').concat(o, ' ').concat(a);
  }
  let Vh;
  const iw = v(() => {
    je(),
      (Vh = {
        x: 'translateX',
        y: 'translateY',
        z: 'translateZ',
        transformPerspective: 'perspective',
      });
  });
  function Bh(t) {
    return t.startsWith('--');
  }
  const zh = v(() => {});
  let Uh;
  const aw = v(() => {
    Uh = function (t, e) {
      return e && typeof t === 'number' ? e.transform(t) : t;
    };
  });
  function kr(t) {
    return typeof t === 'string';
  }
  let Xs;
  let Pn;
  let Nn;
  let zo;
  let Hh;
  const Fe = v(() => {
    (Xs = (t, e) => (n) => Math.max(Math.min(n, e), t)),
      (Pn = (t) => (t % 1 ? Number(t.toFixed(5)) : t)),
      (Nn = /(-)?([\d]*\.?[\d])+/g),
      (zo =
        /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi),
      (Hh =
        /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i);
  });
  let Ie;
  let Tn;
  let fr;
  const ui = v(() => {
    Fe(),
      (Ie = {
        test: (t) => typeof t === 'number',
        parse: parseFloat,
        transform: (t) => t,
      }),
      (Tn = { ...Ie, transform: Xs(0, 1) }),
      (fr = { ...Ie, default: 1 });
  });
  let dn;
  let ge;
  let Zt;
  let U;
  let Wh;
  let Yh;
  let _a;
  const qh = v(() => {
    Fe(),
      (dn = (t) => ({
        test: (e) => kr(e) && e.endsWith(t) && e.split(' ').length === 1,
        parse: parseFloat,
        transform: (e) => `${e}${t}`,
      })),
      (ge = dn('deg')),
      (Zt = dn('%')),
      (U = dn('px')),
      (Wh = dn('vh')),
      (Yh = dn('vw')),
      (_a = {
        ...Zt,
        parse: (t) => Zt.parse(t) / 100,
        transform: (t) => Zt.transform(t * 100),
      });
  });
  let ci;
  let _s;
  const Ks = v(() => {
    Fe(),
      (ci = (t, e) => (n) =>
        !!(
          (kr(n) && Hh.test(n) && n.startsWith(t)) ||
          (e && Object.prototype.hasOwnProperty.call(n, e))
        )),
      (_s = (t, e, n) => (r) => {
        if (!kr(r)) return r;
        const [o, i, a, s] = r.match(Nn);
        return {
          [t]: parseFloat(o),
          [e]: parseFloat(i),
          [n]: parseFloat(a),
          alpha: s !== void 0 ? parseFloat(s) : 1,
        };
      });
  });
  let Ne;
  const Gh = v(() => {
    ui(),
      qh(),
      Fe(),
      Ks(),
      (Ne = {
        test: ci('hsl', 'hue'),
        parse: _s('hue', 'saturation', 'lightness'),
        transform: ({ hue: t, saturation: e, lightness: n, alpha: r = 1 }) =>
          `hsla(${Math.round(t)}, ${Zt.transform(Pn(e))}, ${Zt.transform(
            Pn(n)
          )}, ${Pn(Tn.transform(r))})`,
      });
  });
  let Kc;
  let eo;
  let ye;
  const Qs = v(() => {
    ui(),
      Fe(),
      Ks(),
      (Kc = Xs(0, 255)),
      (eo = { ...Ie, transform: (t) => Math.round(Kc(t)) }),
      (ye = {
        test: ci('rgb', 'red'),
        parse: _s('red', 'green', 'blue'),
        transform: ({ red: t, green: e, blue: n, alpha: r = 1 }) =>
          `rgba(${eo.transform(t)}, ${eo.transform(e)}, ${eo.transform(
            n
          )}, ${Pn(Tn.transform(r))})`,
      });
  });
  function sw(t) {
    let e = '';
    let n = '';
    let r = '';
    let o = '';
    return (
      t.length > 5
        ? ((e = t.substr(1, 2)),
          (n = t.substr(3, 2)),
          (r = t.substr(5, 2)),
          (o = t.substr(7, 2)))
        : ((e = t.substr(1, 1)),
          (n = t.substr(2, 1)),
          (r = t.substr(3, 1)),
          (o = t.substr(4, 1)),
          (e += e),
          (n += n),
          (r += r),
          (o += o)),
      {
        red: parseInt(e, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1,
      }
    );
  }
  let Uo;
  const Xh = v(() => {
    Qs(), Ks(), (Uo = { test: ci('#'), parse: sw, transform: ye.transform });
  });
  let Rt;
  const _h = v(() => {
    Fe(),
      Xh(),
      Gh(),
      Qs(),
      (Rt = {
        test: (t) => ye.test(t) || Uo.test(t) || Ne.test(t),
        parse: (t) =>
          ye.test(t) ? ye.parse(t) : Ne.test(t) ? Ne.parse(t) : Uo.parse(t),
        transform: (t) =>
          kr(t)
            ? t
            : t.hasOwnProperty('red')
            ? ye.transform(t)
            : Ne.transform(t),
      });
  });
  function lw(t) {
    let e;
    let n;
    let r;
    let o;
    return (
      isNaN(t) &&
      kr(t) &&
      ((n = (e = t.match(Nn)) === null || e === void 0 ? void 0 : e.length) !==
        null && n !== void 0
        ? n
        : 0) +
        ((o =
          (r = t.match(zo)) === null || r === void 0 ? void 0 : r.length) !==
          null && o !== void 0
          ? o
          : 0) >
        0
    );
  }
  function Kh(t) {
    typeof t === 'number' && (t = `${t}`);
    const e = [];
    let n = 0;
    const r = t.match(zo);
    r && ((n = r.length), (t = t.replace(zo, Js)), e.push(...r.map(Rt.parse)));
    const o = t.match(Nn);
    return (
      o && ((t = t.replace(Nn, Zs)), e.push(...o.map(Ie.parse))),
      { values: e, numColors: n, tokenised: t }
    );
  }
  function Qh(t) {
    return Kh(t).values;
  }
  function Jh(t) {
    const { values: e, numColors: n, tokenised: r } = Kh(t);
    const o = e.length;
    return (i) => {
      let a = r;
      for (let s = 0; s < o; s++)
        a = a.replace(s < n ? Js : Zs, s < n ? Rt.transform(i[s]) : Pn(i[s]));
      return a;
    };
  }
  function uw(t) {
    const e = Qh(t);
    return Jh(t)(e.map(Zh));
  }
  let Js;
  let Zs;
  let Zh;
  let pe;
  const $h = v(() => {
    _h(),
      ui(),
      Fe(),
      (Js = '${c}'),
      (Zs = '${n}'),
      (Zh = (t) => (typeof t === 'number' ? 0 : t)),
      (pe = {
        test: lw,
        parse: Qh,
        createTransformer: Jh,
        getAnimatableNone: uw,
      });
  });
  function cw(t) {
    const [e, n] = t.slice(0, -1).split('(');
    if (e === 'drop-shadow') return t;
    const [r] = n.match(Nn) || [];
    if (!r) return t;
    const o = n.replace(r, '');
    let i = tm.has(e) ? 1 : 0;
    return r !== n && (i *= 100), `${e}(${i}${o})`;
  }
  let tm;
  let Qc;
  let Ho;
  const pw = v(() => {
    $h(),
      Fe(),
      (tm = new Set(['brightness', 'contrast', 'saturate', 'opacity'])),
      (Qc = /([a-z-]*)\(.*?\)/g),
      (Ho = {
        ...pe,
        getAnimatableNone: (t) => {
          const e = t.match(Qc);
          return e ? e.map(cw).join(' ') : t;
        },
      });
  });
  const wt = v(() => {
    ui(), qh(), Gh(), Qs(), Xh(), _h(), $h(), pw();
  });
  let Ka;
  const fw = v(() => {
    G(), wt(), (Ka = { ...Ie, transform: Math.round });
  });
  let $s;
  const em = v(() => {
    wt(),
      fw(),
      ($s = {
        borderWidth: U,
        borderTopWidth: U,
        borderRightWidth: U,
        borderBottomWidth: U,
        borderLeftWidth: U,
        borderRadius: U,
        radius: U,
        borderTopLeftRadius: U,
        borderTopRightRadius: U,
        borderBottomRightRadius: U,
        borderBottomLeftRadius: U,
        width: U,
        maxWidth: U,
        height: U,
        maxHeight: U,
        size: U,
        top: U,
        right: U,
        bottom: U,
        left: U,
        padding: U,
        paddingTop: U,
        paddingRight: U,
        paddingBottom: U,
        paddingLeft: U,
        margin: U,
        marginTop: U,
        marginRight: U,
        marginBottom: U,
        marginLeft: U,
        rotate: ge,
        rotateX: ge,
        rotateY: ge,
        rotateZ: ge,
        scale: fr,
        scaleX: fr,
        scaleY: fr,
        scaleZ: fr,
        skew: ge,
        skewX: ge,
        skewY: ge,
        distance: U,
        translateX: U,
        translateY: U,
        translateZ: U,
        x: U,
        y: U,
        z: U,
        perspective: U,
        transformPerspective: U,
        opacity: Tn,
        originX: _a,
        originY: _a,
        originZ: U,
        zIndex: Ka,
        fillOpacity: Tn,
        strokeOpacity: Tn,
        numOctaves: Ka,
      });
  });
  function tl(t, e, n, r) {
    let o;
    const i = t.style;
    const a = t.vars;
    const s = t.transform;
    const l = t.transformKeys;
    const u = t.transformOrigin;
    l.length = 0;
    let c = !1;
    let f = !1;
    let p = !0;
    for (const d in e) {
      const h = e[d];
      if (Bh(d)) {
        a[d] = h;
        continue;
      }
      const m = $s[d];
      const y = Uh(h, m);
      if (zr(d)) {
        if (((c = !0), (s[d] = y), l.push(d), !p)) continue;
        h !== ((o = m.default) !== null && o !== void 0 ? o : 0) && (p = !1);
      } else Nh(d) ? ((u[d] = y), (f = !0)) : (i[d] = y);
    }
    c
      ? (i.transform = rw(t, n, p, r))
      : r
      ? (i.transform = r({}, ''))
      : !e.transform && i.transform && (i.transform = 'none'),
      f && (i.transformOrigin = ow(u));
  }
  const el = v(() => {
    iw(), zh(), je(), aw(), em();
  });
  let pi;
  const nl = v(() => {
    pi = function () {
      return {
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {},
      };
    };
  });
  function nm(t, e, n) {
    for (const r in e) !ce(e[r]) && !jh(r, n) && (t[r] = e[r]);
  }
  function dw(t, e, n) {
    const r = t.transformTemplate;
    return It(() => {
      const o = pi();
      tl(o, e, { enableHardwareAcceleration: !n }, r);
      const i = o.vars;
      const a = o.style;
      return { ...i, ...a };
    }, [e]);
  }
  function hw(t, e, n) {
    const r = t.style || {};
    let o = {};
    return (
      nm(o, r, t),
      Object.assign(o, dw(t, e, n)),
      t.transformValues && (o = t.transformValues(o)),
      o
    );
  }
  function mw(t, e, n) {
    const r = {};
    const o = hw(t, e, n);
    return (
      t.drag &&
        t.dragListener !== !1 &&
        ((r.draggable = !1),
        (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
        (o.touchAction =
          t.drag === !0 ? 'none' : 'pan-'.concat(t.drag === 'x' ? 'y' : 'x'))),
      (r.style = o),
      r
    );
  }
  const rm = v(() => {
    G(), Fh(), nn(), el(), nl();
  });
  function Wo(t) {
    return om.has(t);
  }
  let om;
  const vw = v(() => {
    om = new Set([
      'initial',
      'animate',
      'exit',
      'style',
      'variants',
      'transition',
      'transformTemplate',
      'transformValues',
      'custom',
      'inherit',
      'layout',
      'layoutId',
      'layoutDependency',
      'onLayoutAnimationStart',
      'onLayoutAnimationComplete',
      'onLayoutMeasure',
      'onBeforeLayoutMeasure',
      'onAnimationStart',
      'onAnimationComplete',
      'onUpdate',
      'onDragStart',
      'onDrag',
      'onDragEnd',
      'onMeasureDragConstraints',
      'onDirectionLock',
      'onDragTransitionEnd',
      'drag',
      'dragControls',
      'dragListener',
      'dragConstraints',
      'dragDirectionLock',
      'dragSnapToOrigin',
      '_dragX',
      '_dragY',
      'dragElastic',
      'dragMomentum',
      'dragPropagation',
      'dragTransition',
      'whileDrag',
      'onPan',
      'onPanStart',
      'onPanEnd',
      'onPanSessionStart',
      'onTap',
      'onTapStart',
      'onTapCancel',
      'onHoverStart',
      'onHoverEnd',
      'whileFocus',
      'whileTap',
      'whileHover',
      'whileInView',
      'onViewportEnter',
      'onViewportLeave',
      'viewport',
      'layoutScroll',
    ]);
  });
  function gw(t) {
    const e = {};
    return function (n) {
      return e[n] === void 0 && (e[n] = t(n)), e[n];
    };
  }
  let im;
  const yw = v(() => {
    im = gw;
  });
  const am = {};
  gf(am, { default: () => sm });
  let Jc;
  let Zc;
  let sm;
  const bw = v(() => {
    yw(),
      (Jc =
        /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/),
      (Zc = im(
        (t) =>
          Jc.test(t) ||
          (t.charCodeAt(0) === 111 &&
            t.charCodeAt(1) === 110 &&
            t.charCodeAt(2) < 91)
      )),
      (sm = Zc);
  });
  function ww(t) {
    t &&
      (rl = function (e) {
        return e.startsWith('on') ? !Wo(e) : t(e);
      });
  }
  function Ew(t, e, n) {
    const r = {};
    for (const o in t)
      (rl(o) ||
        (n === !0 && Wo(o)) ||
        (!e && !Wo(o)) ||
        (t.draggable && o.startsWith('onDrag'))) &&
        (r[o] = t[o]);
    return r;
  }
  let rl;
  const xw = v(() => {
    vw(),
      (rl = function (t) {
        return !Wo(t);
      });
    try {
      ww((bw(), Cy(am)).default);
    } catch {}
  });
  function $c(t, e, n) {
    return typeof t === 'string' ? t : U.transform(e + n * t);
  }
  function Ow(t, e, n) {
    const r = $c(e, t.x, t.width);
    const o = $c(n, t.y, t.height);
    return ''.concat(r, ' ').concat(o);
  }
  const Sw = v(() => {
    wt();
  });
  function Pw(t, e, n, r, o) {
    n === void 0 && (n = 1),
      r === void 0 && (r = 0),
      o === void 0 && (o = !0),
      (t.pathLength = 1);
    const i = o ? lm : um;
    t[i.offset] = U.transform(-r);
    const a = U.transform(e);
    const s = U.transform(n);
    t[i.array] = ''.concat(a, ' ').concat(s);
  }
  let lm;
  let um;
  const Tw = v(() => {
    wt(),
      (lm = { offset: 'stroke-dashoffset', array: 'stroke-dasharray' }),
      (um = { offset: 'strokeDashoffset', array: 'strokeDasharray' });
  });
  function ol(t, e, n, r) {
    const o = e.attrX;
    const i = e.attrY;
    const a = e.originX;
    const s = e.originY;
    const l = e.pathLength;
    const u = e.pathSpacing;
    const c = u === void 0 ? 1 : u;
    const f = e.pathOffset;
    const p = f === void 0 ? 0 : f;
    const d = jt(e, [
      'attrX',
      'attrY',
      'originX',
      'originY',
      'pathLength',
      'pathSpacing',
      'pathOffset',
    ]);
    tl(t, d, n, r), (t.attrs = t.style), (t.style = {});
    const h = t.attrs;
    const m = t.style;
    const y = t.dimensions;
    h.transform && (y && (m.transform = h.transform), delete h.transform),
      y &&
        (a !== void 0 || s !== void 0 || m.transform) &&
        (m.transformOrigin = Ow(
          y,
          a !== void 0 ? a : 0.5,
          s !== void 0 ? s : 0.5
        )),
      o !== void 0 && (h.x = o),
      i !== void 0 && (h.y = i),
      l !== void 0 && Pw(h, l, c, p, !1);
  }
  const il = v(() => {
    G(), el(), Sw(), Tw();
  });
  let al;
  const cm = v(() => {
    G(),
      nl(),
      (al = function () {
        return { ...pi(), attrs: {} };
      });
  });
  function Cw(t, e) {
    const n = It(() => {
      const o = al();
      return (
        ol(o, e, { enableHardwareAcceleration: !1 }, t.transformTemplate),
        { ...o.attrs, style: { ...o.style } }
      );
    }, [e]);
    if (t.style) {
      const r = {};
      nm(r, t.style, t), (n.style = { ...r, ...n.style });
    }
    return n;
  }
  const Aw = v(() => {
    G(), rm(), il(), cm();
  });
  function kw(t) {
    t === void 0 && (t = !1);
    const e = function (n, r, o, i, a, s) {
      const l = a.latestValues;
      const u = Ys(n) ? Cw : mw;
      const c = u(r, l, s);
      const f = Ew(r, typeof n === 'string', t);
      const p = { ...f, ...c, ref: i };
      return o && (p['data-projection-id'] = o), q(n, p);
    };
    return e;
  }
  const Rw = v(() => {
    G(), rm(), xw(), qs(), Aw();
  });
  let tp;
  let ep;
  let sl;
  const pm = v(() => {
    (tp = /([a-z])([A-Z])/g),
      (ep = '$1-$2'),
      (sl = function (t) {
        return t.replace(tp, ep).toLowerCase();
      });
  });
  function fm(t, e, n, r) {
    const o = e.style;
    const i = e.vars;
    Object.assign(t.style, o, r && r.getProjectionStyles(n));
    for (const a in i) t.style.setProperty(a, i[a]);
  }
  const dm = v(() => {});
  let ll;
  const hm = v(() => {
    ll = new Set([
      'baseFrequency',
      'diffuseConstant',
      'kernelMatrix',
      'kernelUnitLength',
      'keySplines',
      'keyTimes',
      'limitingConeAngle',
      'markerHeight',
      'markerWidth',
      'numOctaves',
      'targetX',
      'targetY',
      'surfaceScale',
      'specularConstant',
      'specularExponent',
      'stdDeviation',
      'tableValues',
      'viewBox',
      'gradientTransform',
      'pathLength',
    ]);
  });
  function mm(t, e, n, r) {
    fm(t, e, void 0, r);
    for (const o in e.attrs) t.setAttribute(ll.has(o) ? o : sl(o), e.attrs[o]);
  }
  const vm = v(() => {
    pm(), dm(), hm();
  });
  function ul(t) {
    const e = t.style;
    const n = {};
    for (const r in e) (ce(e[r]) || jh(r, t)) && (n[r] = e[r]);
    return n;
  }
  const cl = v(() => {
    Fh(), nn();
  });
  function gm(t) {
    const e = ul(t);
    for (const n in t)
      if (ce(t[n])) {
        const r = n === 'x' || n === 'y' ? `attr${n.toUpperCase()}` : n;
        e[r] = t[n];
      }
    return e;
  }
  const ym = v(() => {
    nn(), cl();
  });
  function pl(t) {
    return typeof t === 'object' && typeof t.start === 'function';
  }
  const fl = v(() => {});
  let In;
  const fi = v(() => {
    In = function (t) {
      return Array.isArray(t);
    };
  });
  let bm;
  let dl;
  const hl = v(() => {
    fi(),
      (bm = function (t) {
        return !!(t && typeof t === 'object' && t.mix && t.toValue);
      }),
      (dl = function (t) {
        return In(t) ? t[t.length - 1] || 0 : t;
      });
  });
  function go(t) {
    const e = ce(t) ? t.get() : t;
    return bm(e) ? e.toValue() : e;
  }
  const wm = v(() => {
    hl(), nn();
  });
  function np(t, e, n, r) {
    const o = t.scrapeMotionValuesFromProps;
    const i = t.createRenderState;
    const a = t.onMount;
    const s = { latestValues: Mw(e, n, r, o), renderState: i() };
    return (
      a &&
        (s.mount = function (l) {
          return a(e, l, s);
        }),
      s
    );
  }
  function Mw(t, e, n, r) {
    const o = {};
    const i = n?.initial === !1;
    const a = r(t);
    for (const s in a) o[s] = go(a[s]);
    let l = t.initial;
    let u = t.animate;
    const c = ai(t);
    const f = Ch(t);
    e &&
      f &&
      !c &&
      t.inherit !== !1 &&
      (l ?? (l = e.initial), u ?? (u = e.animate));
    const p = i || l === !1;
    const d = p ? u : l;
    if (d && typeof d !== 'boolean' && !pl(d)) {
      const h = Array.isArray(d) ? d : [d];
      h.forEach((m) => {
        const y = Th(t, m);
        if (y) {
          const E = y.transitionEnd;
          y.transition;
          const x = jt(y, ['transitionEnd', 'transition']);
          for (var b in x) {
            let w = x[b];
            if (Array.isArray(w)) {
              const O = p ? w.length - 1 : 0;
              w = w[O];
            }
            w !== null && (o[b] = w);
          }
          for (var b in E) o[b] = E[b];
        }
      });
    }
    return o;
  }
  let ml;
  const Em = v(() => {
    G(),
      fl(),
      ri(),
      Bn(),
      li(),
      wm(),
      ni(),
      (ml = function (t) {
        return function (e, n) {
          const r = mt(Vr);
          const o = mt(Br);
          return n ? np(t, e, r, o) : si(() => np(t, e, r, o));
        };
      });
  });
  let xm;
  const Dw = v(() => {
    vm(),
      ym(),
      Em(),
      cm(),
      il(),
      (xm = {
        useVisualState: ml({
          scrapeMotionValuesFromProps: gm,
          createRenderState: al,
          onMount(t, e, n) {
            const r = n.renderState;
            const o = n.latestValues;
            try {
              r.dimensions =
                typeof e.getBBox === 'function'
                  ? e.getBBox()
                  : e.getBoundingClientRect();
            } catch {
              r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
            ol(r, o, { enableHardwareAcceleration: !1 }, t.transformTemplate),
              mm(e, r);
          },
        }),
      });
  });
  let Om;
  const Nw = v(() => {
    Em(),
      cl(),
      nl(),
      (Om = {
        useVisualState: ml({
          scrapeMotionValuesFromProps: ul,
          createRenderState: pi,
        }),
      });
  });
  function Iw(t, e, n, r, o) {
    const i = e.forwardMotionProps;
    const a = i === void 0 ? !1 : i;
    const s = Ys(t) ? xm : Om;
    return {
      ...s,
      preloadedFeatures: n,
      useRender: kw(a),
      createVisualElement: r,
      projectionNodeConstructor: o,
      Component: t,
    };
  }
  const Lw = v(() => {
    G(), qs(), Rw(), Dw(), Nw();
  });
  let st;
  const rn = v(() => {
    (function (t) {
      (t.Animate = 'animate'),
        (t.Hover = 'whileHover'),
        (t.Tap = 'whileTap'),
        (t.Drag = 'whileDrag'),
        (t.Focus = 'whileFocus'),
        (t.InView = 'whileInView'),
        (t.Exit = 'exit');
    })(st || (st = {}));
  });
  function di(t, e, n, r) {
    return (
      r === void 0 && (r = { passive: !0 }),
      t.addEventListener(e, n, r),
      function () {
        return t.removeEventListener(e, n);
      }
    );
  }
  function Qa(t, e, n, r) {
    W(() => {
      const o = t.current;
      if (n && o) return di(o, e, n, r);
    }, [t, e, n, r]);
  }
  const hi = v(() => {});
  function jw(t) {
    const e = t.whileFocus;
    const n = t.visualElement;
    const r = function () {
      let i;
      (i = n.animationState) === null ||
        i === void 0 ||
        i.setActive(st.Focus, !0);
    };
    const o = function () {
      let i;
      (i = n.animationState) === null ||
        i === void 0 ||
        i.setActive(st.Focus, !1);
    };
    Qa(n, 'focus', e ? r : void 0), Qa(n, 'blur', e ? o : void 0);
  }
  const Fw = v(() => {
    rn(), hi();
  });
  function Sm(t) {
    return typeof PointerEvent < 'u' && t instanceof PointerEvent
      ? t.pointerType === 'mouse'
      : t instanceof MouseEvent;
  }
  function Pm(t) {
    const e = !!t.touches;
    return e;
  }
  const vl = v(() => {});
  function Vw(t) {
    return function (e) {
      const n = e instanceof MouseEvent;
      const r = !n || (n && e.button === 0);
      r && t(e);
    };
  }
  function Bw(t, e) {
    e === void 0 && (e = 'page');
    const n = t.touches[0] || t.changedTouches[0];
    const r = n || Tm;
    return { x: r[`${e}X`], y: r[`${e}Y`] };
  }
  function zw(t, e) {
    return e === void 0 && (e = 'page'), { x: t[`${e}X`], y: t[`${e}Y`] };
  }
  function gl(t, e) {
    return e === void 0 && (e = 'page'), { point: Pm(t) ? Bw(t, e) : zw(t, e) };
  }
  let Tm;
  let yl;
  const bl = v(() => {
    vl(),
      (Tm = { pageX: 0, pageY: 0 }),
      (yl = function (t, e) {
        e === void 0 && (e = !1);
        const n = function (r) {
          return t(r, gl(r));
        };
        return e ? Vw(n) : n;
      });
  });
  let Cm;
  let Am;
  let km;
  const Uw = v(() => {
    oi(),
      (Cm = function () {
        return Je && window.onpointerdown === null;
      }),
      (Am = function () {
        return Je && window.ontouchstart === null;
      }),
      (km = function () {
        return Je && window.onmousedown === null;
      });
  });
  function Rm(t) {
    return Cm() ? t : Am() ? Dm[t] : km() ? Mm[t] : t;
  }
  function Cn(t, e, n, r) {
    return di(t, Rm(e), yl(n, e === 'pointerdown'), r);
  }
  function Yo(t, e, n, r) {
    return Qa(t, Rm(e), n && yl(n, e === 'pointerdown'), r);
  }
  let Mm;
  let Dm;
  const Ur = v(() => {
    hi(),
      bl(),
      Uw(),
      (Mm = {
        pointerdown: 'mousedown',
        pointermove: 'mousemove',
        pointerup: 'mouseup',
        pointercancel: 'mousecancel',
        pointerover: 'mouseover',
        pointerout: 'mouseout',
        pointerenter: 'mouseenter',
        pointerleave: 'mouseleave',
      }),
      (Dm = {
        pointerdown: 'touchstart',
        pointermove: 'touchmove',
        pointerup: 'touchend',
        pointercancel: 'touchcancel',
      });
  });
  function rp(t) {
    let e = null;
    return function () {
      const n = function () {
        e = null;
      };
      return e === null ? ((e = t), n) : !1;
    };
  }
  function Nm(t) {
    let e = !1;
    if (t === 'y') e = Za();
    else if (t === 'x') e = Ja();
    else {
      const n = Ja();
      const r = Za();
      n && r
        ? (e = function () {
            n(), r();
          })
        : (n && n(), r && r());
    }
    return e;
  }
  function Im() {
    const t = Nm(!0);
    return t ? (t(), !1) : !0;
  }
  let Ja;
  let Za;
  const wl = v(() => {
    (Ja = rp('dragHorizontal')), (Za = rp('dragVertical'));
  });
  function op(t, e, n) {
    return function (r, o) {
      let i;
      !Sm(r) ||
        Im() ||
        ((i = t.animationState) === null ||
          i === void 0 ||
          i.setActive(st.Hover, e),
        n?.(r, o));
    };
  }
  function Hw(t) {
    const e = t.onHoverStart;
    const n = t.onHoverEnd;
    const r = t.whileHover;
    const o = t.visualElement;
    Yo(o, 'pointerenter', e || r ? op(o, !0, e) : void 0, { passive: !e }),
      Yo(o, 'pointerleave', n || r ? op(o, !1, n) : void 0, { passive: !n });
  }
  const Ww = v(() => {
    vl(), rn(), Ur(), wl();
  });
  let $a;
  const Yw = v(() => {
    $a = function (t, e) {
      return e ? (t === e ? !0 : $a(t, e.parentElement)) : !1;
    };
  });
  function Lm(t) {
    return W(
      () =>
        function () {
          return t();
        },
      []
    );
  }
  const jm = v(() => {});
  let Rr;
  const El = v(() => {
    Rr = (t, e, n) => Math.min(Math.max(n, t), e);
  });
  function qw({
    duration: t = 800,
    bounce: e = 0.25,
    velocity: n = 0,
    mass: r = 1,
  }) {
    let o;
    let i;
    Fr(t <= es * 1e3, 'Spring duration must be 10 seconds or less');
    let a = 1 - e;
    (a = Rr(Vm, Bm, a)),
      (t = Rr(Fm, es, t / 1e3)),
      a < 1
        ? ((o = (u) => {
            const c = u * a;
            const f = c * t;
            const p = c - n;
            const d = ts(u, a);
            const h = Math.exp(-f);
            return yo - (p / d) * h;
          }),
          (i = (u) => {
            const c = u * a * t;
            const f = c * n + n;
            const p = a ** 2 * u ** 2 * t;
            const d = Math.exp(-c);
            const h = ts(u ** 2, a);
            return ((-o(u) + yo > 0 ? -1 : 1) * ((f - p) * d)) / h;
          }))
        : ((o = (u) => {
            const c = Math.exp(-u * t);
            const f = (u - n) * t + 1;
            return -yo + c * f;
          }),
          (i = (u) => {
            const c = Math.exp(-u * t);
            const f = (n - u) * (t * t);
            return c * f;
          }));
    const s = 5 / t;
    const l = Gw(o, i, s);
    if (((t *= 1e3), isNaN(l)))
      return { stiffness: 100, damping: 10, duration: t };
    {
      const u = l ** 2 * r;
      return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: t };
    }
  }
  function Gw(t, e, n) {
    let r = n;
    for (let o = 1; o < zm; o++) r -= t(r) / e(r);
    return r;
  }
  function ts(t, e) {
    return t * Math.sqrt(1 - e * e);
  }
  let yo;
  let Fm;
  let es;
  let Vm;
  let Bm;
  let zm;
  const Xw = v(() => {
    fe(),
      El(),
      (yo = 0.001),
      (Fm = 0.01),
      (es = 10),
      (Vm = 0.05),
      (Bm = 1),
      (zm = 12);
  });
  function ip(t, e) {
    return e.some((n) => t[n] !== void 0);
  }
  function _w(t) {
    let e = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...t,
    };
    if (!ip(t, Hm) && ip(t, Um)) {
      const n = qw(t);
      (e = { ...e, ...n, velocity: 0, mass: 1 }),
        (e.isResolvedFromDuration = !0);
    }
    return e;
  }
  function xl(t) {
    let { from: e = 0, to: n = 1, restSpeed: r = 2, restDelta: o } = t;
    const i = jt(t, ['from', 'to', 'restSpeed', 'restDelta']);
    const a = { done: !1, value: e };
    let {
      stiffness: s,
      damping: l,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: p,
    } = _w(i);
    let d = ns;
    let h = ns;
    function m() {
      const y = c ? -(c / 1e3) : 0;
      const E = n - e;
      const x = l / (2 * Math.sqrt(s * u));
      const b = Math.sqrt(s / u) / 1e3;
      if ((o === void 0 && (o = Math.min(Math.abs(n - e) / 100, 0.4)), x < 1)) {
        const w = ts(b, x);
        (d = (O) => {
          const S = Math.exp(-x * b * O);
          return (
            n -
            S * (((y + x * b * E) / w) * Math.sin(w * O) + E * Math.cos(w * O))
          );
        }),
          (h = (O) => {
            const S = Math.exp(-x * b * O);
            return (
              x *
                b *
                S *
                ((Math.sin(w * O) * (y + x * b * E)) / w +
                  E * Math.cos(w * O)) -
              S * (Math.cos(w * O) * (y + x * b * E) - w * E * Math.sin(w * O))
            );
          });
      } else if (x === 1)
        d = (w) => n - Math.exp(-b * w) * (E + (y + b * E) * w);
      else {
        const w = b * Math.sqrt(x * x - 1);
        d = (O) => {
          const S = Math.exp(-x * b * O);
          const M = Math.min(w * O, 300);
          return (
            n -
            (S * ((y + x * b * E) * Math.sinh(M) + w * E * Math.cosh(M))) / w
          );
        };
      }
    }
    return (
      m(),
      {
        next: (y) => {
          const E = d(y);
          if (p) a.done = y >= f;
          else {
            const x = h(y) * 1e3;
            const b = Math.abs(x) <= r;
            const w = Math.abs(n - E) <= o;
            a.done = b && w;
          }
          return (a.value = a.done ? n : E), a;
        },
        flipTarget: () => {
          (c = -c), ([e, n] = [n, e]), m();
        },
      }
    );
  }
  let Um;
  let Hm;
  let ns;
  const Kw = v(() => {
    G(),
      Xw(),
      (Um = ['duration', 'bounce']),
      (Hm = ['stiffness', 'damping', 'mass']),
      (xl.needsInterpolation = (t, e) =>
        typeof t === 'string' || typeof e === 'string'),
      (ns = (t) => 0);
  });
  let Ln;
  const Wm = v(() => {
    Ln = (t, e, n) => {
      const r = e - t;
      return r === 0 ? 1 : (n - t) / r;
    };
  });
  let dt;
  const mi = v(() => {
    dt = (t, e, n) => -n * t + n * e + t;
  });
  function oa(t, e, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? t + (e - t) * 6 * n
        : n < 1 / 2
        ? e
        : n < 2 / 3
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    );
  }
  function ap({ hue: t, saturation: e, lightness: n, alpha: r }) {
    (t /= 360), (e /= 100), (n /= 100);
    let o = 0;
    let i = 0;
    let a = 0;
    if (!e) o = i = a = n;
    else {
      const s = n < 0.5 ? n * (1 + e) : n + e - n * e;
      const l = 2 * n - s;
      (o = oa(l, s, t + 1 / 3)), (i = oa(l, s, t)), (a = oa(l, s, t - 1 / 3));
    }
    return {
      red: Math.round(o * 255),
      green: Math.round(i * 255),
      blue: Math.round(a * 255),
      alpha: r,
    };
  }
  const Qw = v(() => {});
  let sp;
  let lp;
  let ia;
  let aa;
  let Ol;
  const Ym = v(() => {
    mi(),
      wt(),
      fe(),
      Qw(),
      (sp = (t, e, n) => {
        const r = t * t;
        const o = e * e;
        return Math.sqrt(Math.max(0, n * (o - r) + r));
      }),
      (lp = [Uo, ye, Ne]),
      (ia = (t) => lp.find((e) => e.test(t))),
      (aa = (t) =>
        `'${t}' is not an animatable color. Use the equivalent color code instead.`),
      (Ol = (t, e) => {
        let n = ia(t);
        let r = ia(e);
        qt(!!n, aa(t)), qt(!!r, aa(e));
        let o = n.parse(t);
        let i = r.parse(e);
        n === Ne && ((o = ap(o)), (n = ye)),
          r === Ne && ((i = ap(i)), (r = ye));
        const a = { ...o };
        return (s) => {
          for (const l in a) l !== 'alpha' && (a[l] = sp(o[l], i[l], s));
          return (a.alpha = dt(o.alpha, i.alpha, s)), n.transform(a);
        };
      });
  });
  let qo;
  const qm = v(() => {
    qo = (t) => typeof t === 'number';
  });
  let up;
  let Hr;
  const Sl = v(() => {
    (up = (t, e) => (n) => e(t(n))), (Hr = (...t) => t.reduce(up));
  });
  function cp(t, e) {
    return qo(t) ? (n) => dt(t, e, n) : Rt.test(t) ? Ol(t, e) : Pl(t, e);
  }
  function pp(t) {
    const e = pe.parse(t);
    const n = e.length;
    let r = 0;
    let o = 0;
    let i = 0;
    for (let a = 0; a < n; a++)
      r || typeof e[a] === 'number' ? r++ : e[a].hue !== void 0 ? i++ : o++;
    return { parsed: e, numNumbers: r, numRGB: o, numHSL: i };
  }
  let rs;
  let Gm;
  let Pl;
  const Jw = v(() => {
    wt(),
      mi(),
      Ym(),
      qm(),
      Sl(),
      fe(),
      (rs = (t, e) => {
        const n = [...t];
        const r = n.length;
        const o = t.map((i, a) => cp(i, e[a]));
        return (i) => {
          for (let a = 0; a < r; a++) n[a] = o[a](i);
          return n;
        };
      }),
      (Gm = (t, e) => {
        const n = { ...t, ...e };
        const r = {};
        for (const o in n)
          t[o] !== void 0 && e[o] !== void 0 && (r[o] = cp(t[o], e[o]));
        return (o) => {
          for (const i in r) n[i] = r[i](o);
          return n;
        };
      }),
      (Pl = (t, e) => {
        const n = pe.createTransformer(e);
        const r = pp(t);
        const o = pp(e);
        return r.numHSL === o.numHSL &&
          r.numRGB === o.numRGB &&
          r.numNumbers >= o.numNumbers
          ? Hr(rs(r.parsed, o.parsed), n)
          : (Fr(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            (i) => `${i > 0 ? e : t}`);
      });
  });
  function Zw(t) {
    if (typeof t === 'number') return _m;
    if (typeof t === 'string') return Rt.test(t) ? Ol : Pl;
    if (Array.isArray(t)) return rs;
    if (typeof t === 'object') return Gm;
  }
  function $w(t, e, n) {
    const r = [];
    const o = n || Zw(t[0]);
    const i = t.length - 1;
    for (let a = 0; a < i; a++) {
      let s = o(t[a], t[a + 1]);
      if (e) {
        const l = Array.isArray(e) ? e[a] : e;
        s = Hr(l, s);
      }
      r.push(s);
    }
    return r;
  }
  function tE([t, e], [n]) {
    return (r) => n(Ln(t, e, r));
  }
  function eE(t, e) {
    const n = t.length;
    const r = n - 1;
    return (o) => {
      let i = 0;
      let a = !1;
      if ((o <= t[0] ? (a = !0) : o >= t[r] && ((i = r - 1), (a = !0)), !a)) {
        let l = 1;
        for (; l < n && !(t[l] > o || l === r); l++);
        i = l - 1;
      }
      const s = Ln(t[i], t[i + 1], o);
      return e[i](s);
    };
  }
  function Xm(t, e, { clamp: n = !0, ease: r, mixer: o } = {}) {
    const i = t.length;
    qt(i === e.length, 'Both input and output ranges must be the same length'),
      qt(
        !r || !Array.isArray(r) || r.length === i - 1,
        'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'
      ),
      t[0] > t[i - 1] &&
        ((t = [].concat(t)), (e = [].concat(e)), t.reverse(), e.reverse());
    const a = $w(e, r, o);
    const s = i === 2 ? tE(t, a) : eE(t, a);
    return n ? (l) => s(Rr(t[0], t[i - 1], l)) : s;
  }
  let _m;
  const Km = v(() => {
    Wm(),
      mi(),
      Ym(),
      Jw(),
      wt(),
      El(),
      Sl(),
      fe(),
      (_m = (t, e) => (n) => dt(t, e, n));
  });
  let dr;
  let bo;
  let Qm;
  let os;
  let Jm;
  const nE = v(() => {
    (dr = (t) => (e) => 1 - t(1 - e)),
      (bo = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2)),
      (Qm = (t) => (e) => e ** t),
      (os = (t) => (e) => e * e * ((t + 1) * e - t)),
      (Jm = (t) => {
        const e = os(t);
        return (n) =>
          (n *= 2) < 1 ? 0.5 * e(n) : 0.5 * (2 - 2 ** (-10 * (n - 1)));
      });
  });
  let sa;
  let fp;
  let dp;
  let hp;
  let vi;
  let wo;
  let Zm;
  let Tl;
  let is;
  let Go;
  let $m;
  let Eo;
  let tv;
  let ev;
  let nv;
  let mp;
  let vp;
  let gp;
  let hr;
  let rv;
  let ov;
  const Cl = v(() => {
    nE(),
      (sa = 1.525),
      (fp = 4 / 11),
      (dp = 8 / 11),
      (hp = 9 / 10),
      (vi = (t) => t),
      (wo = Qm(2)),
      (Zm = dr(wo)),
      (Tl = bo(wo)),
      (is = (t) => 1 - Math.sin(Math.acos(t))),
      (Go = dr(is)),
      ($m = bo(Go)),
      (Eo = os(sa)),
      (tv = dr(Eo)),
      (ev = bo(Eo)),
      (nv = Jm(sa)),
      (mp = 4356 / 361),
      (vp = 35442 / 1805),
      (gp = 16061 / 1805),
      (hr = (t) => {
        if (t === 1 || t === 0) return t;
        const e = t * t;
        return t < fp
          ? 7.5625 * e
          : t < dp
          ? 9.075 * e - 9.9 * t + 3.4
          : t < hp
          ? mp * e - vp * t + gp
          : 10.8 * t * t - 20.52 * t + 10.72;
      }),
      (rv = dr(hr)),
      (ov = (t) =>
        t < 0.5 ? 0.5 * (1 - hr(1 - t * 2)) : 0.5 * hr(t * 2 - 1) + 0.5);
  });
  function rE(t, e) {
    return t.map(() => e || Tl).splice(0, t.length - 1);
  }
  function oE(t) {
    const e = t.length;
    return t.map((n, r) => (r !== 0 ? r / (e - 1) : 0));
  }
  function iE(t, e) {
    return t.map((n) => n * e);
  }
  function xo({
    from: t = 0,
    to: e = 1,
    ease: n,
    offset: r,
    duration: o = 300,
  }) {
    const i = { done: !1, value: t };
    const a = Array.isArray(e) ? e : [t, e];
    const s = iE(r && r.length === a.length ? r : oE(a), o);
    function l() {
      return Xm(s, a, { ease: Array.isArray(n) ? n : rE(a, n) });
    }
    let u = l();
    return {
      next: (c) => ((i.value = u(c)), (i.done = c >= o), i),
      flipTarget: () => {
        a.reverse(), (u = l());
      },
    };
  }
  const aE = v(() => {
    Km(), Cl();
  });
  function sE({
    velocity: t = 0,
    from: e = 0,
    power: n = 0.8,
    timeConstant: r = 350,
    restDelta: o = 0.5,
    modifyTarget: i,
  }) {
    const a = { done: !1, value: e };
    let s = n * t;
    const l = e + s;
    const u = i === void 0 ? l : i(l);
    return (
      u !== l && (s = u - e),
      {
        next: (c) => {
          const f = -s * Math.exp(-c / r);
          return (
            (a.done = !(f > o || f < -o)), (a.value = a.done ? u : u + f), a
          );
        },
        flipTarget: () => {},
      }
    );
  }
  const lE = v(() => {});
  function uE(t) {
    if (Array.isArray(t.to)) return xo;
    if (as[t.type]) return as[t.type];
    const e = new Set(Object.keys(t));
    return e.has('ease') || (e.has('duration') && !e.has('dampingRatio'))
      ? xo
      : e.has('dampingRatio') ||
        e.has('stiffness') ||
        e.has('mass') ||
        e.has('damping') ||
        e.has('restSpeed') ||
        e.has('restDelta')
      ? xl
      : xo;
  }
  let as;
  const cE = v(() => {
    Kw(), aE(), lE(), (as = { keyframes: xo, spring: xl, decay: sE });
  });
  let ss;
  let yp;
  let ls;
  const pE = v(() => {
    (ss = 16.666666666666668),
      (yp =
        typeof performance < 'u' ? () => performance.now() : () => Date.now()),
      (ls =
        typeof window < 'u'
          ? (t) => window.requestAnimationFrame(t)
          : (t) => setTimeout(() => t(yp()), ss));
  });
  function fE(t) {
    let e = [];
    let n = [];
    let r = 0;
    let o = !1;
    let i = !1;
    const a = new WeakSet();
    const s = {
      schedule: (l, u = !1, c = !1) => {
        const f = c && o;
        const p = f ? e : n;
        return (
          u && a.add(l),
          p.indexOf(l) === -1 && (p.push(l), f && o && (r = e.length)),
          l
        );
      },
      cancel: (l) => {
        const u = n.indexOf(l);
        u !== -1 && n.splice(u, 1), a.delete(l);
      },
      process: (l) => {
        if (o) {
          i = !0;
          return;
        }
        if (((o = !0), ([e, n] = [n, e]), (n.length = 0), (r = e.length), r))
          for (let u = 0; u < r; u++) {
            const c = e[u];
            c(l), a.has(c) && (s.schedule(c), t());
          }
        (o = !1), i && ((i = !1), s.process(l));
      },
    };
    return s;
  }
  const dE = v(() => {});
  let bp;
  let no;
  let hn;
  let ro;
  let Ye;
  let mn;
  let ar;
  let wp;
  let tn;
  let Oo;
  let Ep;
  let la;
  let xp;
  let Mr;
  let te;
  const on = v(() => {
    pE(),
      dE(),
      (bp = 40),
      (no = !0),
      (hn = !1),
      (ro = !1),
      (Ye = { delta: 0, timestamp: 0 }),
      (mn = ['read', 'update', 'preRender', 'render', 'postRender']),
      (ar = mn.reduce((t, e) => ((t[e] = fE(() => (hn = !0))), t), {})),
      (wp = mn.reduce((t, e) => {
        const n = ar[e];
        return (
          (t[e] = (r, o = !1, i = !1) => (hn || xp(), n.schedule(r, o, i))), t
        );
      }, {})),
      (tn = mn.reduce((t, e) => ((t[e] = ar[e].cancel), t), {})),
      (Oo = mn.reduce((t, e) => ((t[e] = () => ar[e].process(Ye)), t), {})),
      (Ep = (t) => ar[t].process(Ye)),
      (la = (t) => {
        (hn = !1),
          (Ye.delta = no ? ss : Math.max(Math.min(t - Ye.timestamp, bp), 1)),
          (Ye.timestamp = t),
          (ro = !0),
          mn.forEach(Ep),
          (ro = !1),
          hn && ((no = !1), ls(la));
      }),
      (xp = () => {
        (hn = !0), (no = !0), ro || ls(la);
      }),
      (Mr = () => Ye),
      (te = wp);
  });
  function iv(t, e, n = 0) {
    return t - e - n;
  }
  function hE(t, e, n = 0, r = !0) {
    return r ? iv(e + -t, e, n) : e - (t - e) + n;
  }
  function mE(t, e, n, r) {
    return r ? t >= e + n : t <= -n;
  }
  const vE = v(() => {});
  function av(t) {
    let e;
    let n;
    let {
      from: r,
      autoplay: o = !0,
      driver: i = sv,
      elapsed: a = 0,
      repeat: s = 0,
      repeatType: l = 'loop',
      repeatDelay: u = 0,
      onPlay: c,
      onStop: f,
      onComplete: p,
      onRepeat: d,
      onUpdate: h,
    } = t;
    const m = jt(t, [
      'from',
      'autoplay',
      'driver',
      'elapsed',
      'repeat',
      'repeatType',
      'repeatDelay',
      'onPlay',
      'onStop',
      'onComplete',
      'onRepeat',
      'onUpdate',
    ]);
    let { to: y } = m;
    let E;
    let x = 0;
    let b = m.duration;
    let w;
    let O = !1;
    let S = !0;
    let M;
    const N = uE(m);
    !((n = (e = N).needsInterpolation) === null || n === void 0) &&
      n.call(e, r, y) &&
      ((M = Xm([0, 100], [r, y], { clamp: !1 })), (r = 0), (y = 100));
    const B = N({ ...m, from: r, to: y });
    function X() {
      x++,
        l === 'reverse'
          ? ((S = x % 2 === 0), (a = hE(a, b, u, S)))
          : ((a = iv(a, b, u)), l === 'mirror' && B.flipTarget()),
        (O = !1),
        d && d();
    }
    function et() {
      E.stop(), p && p();
    }
    function rt(Tt) {
      if ((S || (Tt = -Tt), (a += Tt), !O)) {
        const Ct = B.next(Math.max(0, a));
        (w = Ct.value), M && (w = M(w)), (O = S ? Ct.done : a <= 0);
      }
      h?.(w),
        O && (x === 0 && (b ?? (b = a)), x < s ? mE(a, b, u, S) && X() : et());
    }
    function ht() {
      c?.(), (E = i(rt)), E.start();
    }
    return (
      o && ht(),
      {
        stop: () => {
          f?.(), E.stop();
        },
      }
    );
  }
  let sv;
  const lv = v(() => {
    G(),
      cE(),
      on(),
      Km(),
      vE(),
      (sv = (t) => {
        const e = ({ delta: n }) => t(n);
        return { start: () => te.update(e, !0), stop: () => tn.update(e) };
      });
  });
  function uv(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const cv = v(() => {});
  function gE({
    from: t = 0,
    velocity: e = 0,
    min: n,
    max: r,
    power: o = 0.8,
    timeConstant: i = 750,
    bounceStiffness: a = 500,
    bounceDamping: s = 10,
    restDelta: l = 1,
    modifyTarget: u,
    driver: c,
    onUpdate: f,
    onComplete: p,
    onStop: d,
  }) {
    let h;
    function m(b) {
      return (n !== void 0 && b < n) || (r !== void 0 && b > r);
    }
    function y(b) {
      return n === void 0
        ? r
        : r === void 0 || Math.abs(n - b) < Math.abs(r - b)
        ? n
        : r;
    }
    function E(b) {
      h?.stop(),
        (h = av({
          ...b,
          driver: c,
          onUpdate: (w) => {
            let O;
            f?.(w), (O = b.onUpdate) === null || O === void 0 || O.call(b, w);
          },
          onComplete: p,
          onStop: d,
        }));
    }
    function x(b) {
      E({ type: 'spring', stiffness: a, damping: s, restDelta: l, ...b });
    }
    if (m(t)) x({ from: t, velocity: e, to: y(t) });
    else {
      let b = o * e + t;
      typeof u < 'u' && (b = u(b));
      const w = y(b);
      const O = w === n ? -1 : 1;
      let S;
      let M;
      const N = (B) => {
        (S = M),
          (M = B),
          (e = uv(B - S, Mr().delta)),
          ((O === 1 && B > w) || (O === -1 && B < w)) &&
            x({ from: B, to: w, velocity: e });
      };
      E({
        type: 'decay',
        from: t,
        velocity: e,
        timeConstant: i,
        power: o,
        restDelta: l,
        modifyTarget: u,
        onUpdate: m(b) ? N : void 0,
      });
    }
    return { stop: () => h?.stop() };
  }
  const yE = v(() => {
    lv(), cv(), on();
  });
  let Xo;
  const pv = v(() => {
    Xo = (t) => t.hasOwnProperty('x') && t.hasOwnProperty('y');
  });
  let us;
  const bE = v(() => {
    pv(), (us = (t) => Xo(t) && t.hasOwnProperty('z'));
  });
  function fv(t, e) {
    if (qo(t) && qo(e)) return mr(t, e);
    if (Xo(t) && Xo(e)) {
      const n = mr(t.x, e.x);
      const r = mr(t.y, e.y);
      const o = us(t) && us(e) ? mr(t.z, e.z) : 0;
      return Math.sqrt(n ** 2 + r ** 2 + o ** 2);
    }
  }
  let mr;
  const wE = v(() => {
    pv(), bE(), qm(), (mr = (t, e) => Math.abs(t - e));
  });
  function EE(t, e, n, r, o) {
    let i;
    let a;
    let s = 0;
    do (a = e + (n - e) / 2), (i = Dr(a, r, o) - t), i > 0 ? (n = a) : (e = a);
    while (Math.abs(i) > dv && ++s < hv);
    return a;
  }
  function xE(t, e, n, r) {
    for (let o = 0; o < mv; ++o) {
      const i = Al(e, n, r);
      if (i === 0) return e;
      const a = Dr(e, n, r) - t;
      e -= a / i;
    }
    return e;
  }
  function OE(t, e, n, r) {
    if (t === e && n === r) return vi;
    const o = new Float32Array(Sr);
    for (let a = 0; a < Sr; ++a) o[a] = Dr(a * vr, t, n);
    function i(a) {
      let s = 0;
      let l = 1;
      const u = Sr - 1;
      for (; l !== u && o[l] <= a; ++l) s += vr;
      --l;
      const c = (a - o[l]) / (o[l + 1] - o[l]);
      const f = s + c * vr;
      const p = Al(f, t, n);
      return p >= vv ? xE(a, f, t, n) : p === 0 ? f : EE(a, s, s + vr, t, n);
    }
    return (a) => (a === 0 || a === 1 ? a : Dr(i(a), e, r));
  }
  let ua;
  let ca;
  let pa;
  let Dr;
  let Al;
  let dv;
  let hv;
  let mv;
  let vv;
  let Sr;
  let vr;
  const SE = v(() => {
    Cl(),
      (ua = (t, e) => 1 - 3 * e + 3 * t),
      (ca = (t, e) => 3 * e - 6 * t),
      (pa = (t) => 3 * t),
      (Dr = (t, e, n) => ((ua(e, n) * t + ca(e, n)) * t + pa(e)) * t),
      (Al = (t, e, n) => 3 * ua(e, n) * t * t + 2 * ca(e, n) * t + pa(e)),
      (dv = 1e-7),
      (hv = 10),
      (mv = 8),
      (vv = 0.001),
      (Sr = 11),
      (vr = 1 / (Sr - 1));
  });
  const Ht = v(() => {
    lv(), yE(), El(), wE(), mi(), Sl(), Wm(), cv(), Cl(), SE();
  });
  function PE(t) {
    const e = t.onTap;
    const n = t.onTapStart;
    const r = t.onTapCancel;
    const o = t.whileTap;
    const i = t.visualElement;
    const a = e || n || r || o;
    const s = nt(!1);
    const l = nt(null);
    const u = { passive: !(n || e || r || h) };
    function c() {
      let m;
      (m = l.current) === null || m === void 0 || m.call(l), (l.current = null);
    }
    function f() {
      let m;
      return (
        c(),
        (s.current = !1),
        (m = i.animationState) === null ||
          m === void 0 ||
          m.setActive(st.Tap, !1),
        !Im()
      );
    }
    function p(m, y) {
      f() && ($a(i.getInstance(), m.target) ? e?.(m, y) : r?.(m, y));
    }
    function d(m, y) {
      f() && r?.(m, y);
    }
    function h(m, y) {
      let E;
      c(),
        !s.current &&
          ((s.current = !0),
          (l.current = Hr(
            Cn(window, 'pointerup', p, u),
            Cn(window, 'pointercancel', d, u)
          )),
          (E = i.animationState) === null ||
            E === void 0 ||
            E.setActive(st.Tap, !0),
          n?.(m, y));
    }
    Yo(i, 'pointerdown', a ? h : void 0, u), Lm(c);
  }
  const TE = v(() => {
    Yw(), Ur(), jm(), Ht(), rn(), wl();
  });
  function CE(t, e, n) {
    t || cs.has(e) || (console.warn(e), n && console.warn(n), cs.add(e));
  }
  let cs;
  const AE = v(() => {
    cs = new Set();
  });
  function kE(t) {
    const e = t.root;
    const n = jt(t, ['root']);
    const r = e || document;
    So.has(r) || So.set(r, {});
    const o = So.get(r);
    const i = JSON.stringify(n);
    return (
      o[i] || (o[i] = new IntersectionObserver(gv, { root: e, ...n })), o[i]
    );
  }
  function RE(t, e, n) {
    const r = kE(e);
    return (
      _o.set(t, n),
      r.observe(t),
      function () {
        _o.delete(t), r.unobserve(t);
      }
    );
  }
  let _o;
  let So;
  let Op;
  let gv;
  const ME = v(() => {
    G(),
      (_o = new WeakMap()),
      (So = new WeakMap()),
      (Op = function (t) {
        let e;
        (e = _o.get(t.target)) === null || e === void 0 || e(t);
      }),
      (gv = function (t) {
        t.forEach(Op);
      });
  });
  function DE(t) {
    const e = t.visualElement;
    const n = t.whileInView;
    const r = t.onViewportEnter;
    const o = t.onViewportLeave;
    const i = t.viewport;
    const a = i === void 0 ? {} : i;
    const s = nt({ hasEnteredView: !1, isInView: !1 });
    let l = !!(n || r || o);
    a.once && s.current.hasEnteredView && (l = !1);
    const u = typeof IntersectionObserver > 'u' ? IE : NE;
    u(l, s.current, e, a);
  }
  function NE(t, e, n, r) {
    const o = r.root;
    const i = r.margin;
    const a = r.amount;
    const s = a === void 0 ? 'some' : a;
    const l = r.once;
    W(() => {
      if (t) {
        const u = {
          root: o?.current,
          rootMargin: i,
          threshold: typeof s === 'number' ? s : yv[s],
        };
        const c = function (f) {
          let p;
          const d = f.isIntersecting;
          if (
            e.isInView !== d &&
            ((e.isInView = d), !(l && !d && e.hasEnteredView))
          ) {
            d && (e.hasEnteredView = !0),
              (p = n.animationState) === null ||
                p === void 0 ||
                p.setActive(st.InView, d);
            const h = n.getProps();
            const m = d ? h.onViewportEnter : h.onViewportLeave;
            m?.(f);
          }
        };
        return RE(n.getInstance(), u, c);
      }
    }, [t, o, i, s]);
  }
  function IE(t, e, n, r) {
    const o = r.fallback;
    const i = o === void 0 ? !0 : o;
    W(() => {
      !t ||
        !i ||
        (js !== 'production' &&
          CE(
            !1,
            'IntersectionObserver not available on this device. whileInView animations will trigger on mount.'
          ),
        requestAnimationFrame(() => {
          let a;
          e.hasEnteredView = !0;
          const s = n.getProps().onViewportEnter;
          s?.(null),
            (a = n.animationState) === null ||
              a === void 0 ||
              a.setActive(st.InView, !0);
        }));
    }, [t]);
  }
  let yv;
  const LE = v(() => {
    Eh(), rn(), AE(), ME(), (yv = { some: 0, all: 1 });
  });
  let be;
  const kl = v(() => {
    be = function (t) {
      return function (e) {
        return t(e), null;
      };
    };
  });
  let bv;
  const jE = v(() => {
    Fw(),
      Ww(),
      TE(),
      LE(),
      kl(),
      (bv = { inView: be(DE), tap: be(PE), focus: be(jw), hover: be(Hw) });
  });
  let Sp;
  let Pp;
  let wv;
  const FE = v(() => {
    li(),
      (Sp = 0),
      (Pp = function () {
        return Sp++;
      }),
      (wv = function () {
        return si(Pp);
      });
  });
  function Ev() {
    const t = mt(Br);
    if (t === null) return [!0, null];
    const e = t.isPresent;
    const n = t.onExitComplete;
    const r = t.register;
    const o = wv();
    W(() => r(o), []);
    const i = function () {
      return n?.(o);
    };
    return !e && n ? [!1, i] : [!0];
  }
  const xv = v(() => {
    ri(), FE();
  });
  function Ov(t, e) {
    if (!Array.isArray(e)) return !1;
    const n = e.length;
    if (n !== t.length) return !1;
    for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
  const VE = v(() => {});
  let Nr;
  const Sv = v(() => {
    Nr = function (t) {
      return t * 1e3;
    };
  });
  let fa;
  let ps;
  let Pv;
  const BE = v(() => {
    G(),
      fe(),
      Ht(),
      (fa = {
        linear: vi,
        easeIn: wo,
        easeInOut: Tl,
        easeOut: Zm,
        circIn: is,
        circInOut: $m,
        circOut: Go,
        backIn: Eo,
        backInOut: ev,
        backOut: tv,
        anticipate: nv,
        bounceIn: rv,
        bounceInOut: ov,
        bounceOut: hr,
      }),
      (ps = function (t) {
        if (Array.isArray(t)) {
          qt(
            t.length === 4,
            'Cubic bezier arrays must contain four numerical values.'
          );
          const e = bt(t, 4);
          const n = e[0];
          const r = e[1];
          const o = e[2];
          const i = e[3];
          return OE(n, r, o, i);
        } else if (typeof t === 'string')
          return (
            qt(fa[t] !== void 0, "Invalid easing type '".concat(t, "'")), fa[t]
          );
        return t;
      }),
      (Pv = function (t) {
        return Array.isArray(t) && typeof t[0] !== 'number';
      });
  });
  let fs;
  const zE = v(() => {
    wt(),
      (fs = function (t, e) {
        return t === 'zIndex'
          ? !1
          : !!(
              typeof e === 'number' ||
              Array.isArray(e) ||
              (typeof e === 'string' && pe.test(e) && !e.startsWith('url('))
            );
      });
  });
  let Te;
  let sr;
  let oo;
  let Tp;
  let da;
  let Tv;
  const UE = v(() => {
    G(),
      fi(),
      (Te = function () {
        return { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 };
      }),
      (sr = function (t) {
        return {
          type: 'spring',
          stiffness: 550,
          damping: t === 0 ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        };
      }),
      (oo = function () {
        return { type: 'keyframes', ease: 'linear', duration: 0.3 };
      }),
      (Tp = function (t) {
        return { type: 'keyframes', duration: 0.8, values: t };
      }),
      (da = {
        x: Te,
        y: Te,
        z: Te,
        rotate: Te,
        rotateX: Te,
        rotateY: Te,
        rotateZ: Te,
        scaleX: sr,
        scaleY: sr,
        scale: sr,
        opacity: oo,
        backgroundColor: oo,
        color: oo,
        default: sr,
      }),
      (Tv = function (t, e) {
        let n;
        return In(e) ? (n = Tp) : (n = da[t] || da.default), { to: e, ...n(e) };
      });
  });
  let Cp;
  let gi;
  const Rl = v(() => {
    G(),
      wt(),
      em(),
      (Cp = {
        ...$s,
        color: Rt,
        backgroundColor: Rt,
        outlineColor: Rt,
        fill: Rt,
        stroke: Rt,
        borderColor: Rt,
        borderTopColor: Rt,
        borderRightColor: Rt,
        borderBottomColor: Rt,
        borderLeftColor: Rt,
        filter: Ho,
        WebkitFilter: Ho,
      }),
      (gi = function (t) {
        return Cp[t];
      });
  });
  function Ml(t, e) {
    let n;
    let r = gi(t);
    return (
      r !== Ho && (r = pe),
      (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, e)
    );
  }
  const Cv = v(() => {
    wt(), Rl();
  });
  let Av;
  const HE = v(() => {
    Av = { current: !1 };
  });
  function WE(t) {
    t.when,
      t.delay,
      t.delayChildren,
      t.staggerChildren,
      t.staggerDirection,
      t.repeat,
      t.repeatType,
      t.repeatDelay,
      t.from;
    const e = jt(t, [
      'when',
      'delay',
      'delayChildren',
      'staggerChildren',
      'staggerDirection',
      'repeat',
      'repeatType',
      'repeatDelay',
      'from',
    ]);
    return !!Object.keys(e).length;
  }
  function YE(t) {
    const e = t.ease;
    const n = t.times;
    const r = t.yoyo;
    const o = t.flip;
    const i = t.loop;
    const a = jt(t, ['ease', 'times', 'yoyo', 'flip', 'loop']);
    const s = { ...a };
    return (
      n && (s.offset = n),
      a.duration && (s.duration = Nr(a.duration)),
      a.repeatDelay && (s.repeatDelay = Nr(a.repeatDelay)),
      e && (s.ease = Pv(e) ? e.map(ps) : ps(e)),
      a.type === 'tween' && (s.type = 'keyframes'),
      (r || i || o) &&
        (Fr(
          !ds,
          'yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.'
        ),
        (ds = !0),
        r
          ? (s.repeatType = 'reverse')
          : i
          ? (s.repeatType = 'loop')
          : o && (s.repeatType = 'mirror'),
        (s.repeat = i || r || o || a.repeat)),
      a.type !== 'spring' && (s.type = 'keyframes'),
      s
    );
  }
  function qE(t, e) {
    let n;
    let r;
    const o = Dl(t, e) || {};
    return (r = (n = o.delay) !== null && n !== void 0 ? n : t.delay) !==
      null && r !== void 0
      ? r
      : 0;
  }
  function GE(t) {
    return (
      Array.isArray(t.to) &&
        t.to[0] === null &&
        ((t.to = $t([], bt(t.to), !1)), (t.to[0] = t.from)),
      t
    );
  }
  function XE(t, e, n) {
    let r;
    return (
      Array.isArray(e.to) &&
        (((r = t.duration) !== null && r !== void 0) || (t.duration = 0.8)),
      GE(e),
      WE(t) || (t = { ...t, ...Tv(n, e.to) }),
      { ...e, ...YE(t) }
    );
  }
  function _E(t, e, n, r, o) {
    let i;
    const a = Dl(r, t);
    let s = (i = a.from) !== null && i !== void 0 ? i : e.get();
    const l = fs(t, n);
    s === 'none' && l && typeof n === 'string'
      ? (s = Ml(t, n))
      : Ap(s) && typeof n === 'string'
      ? (s = kp(n))
      : !Array.isArray(n) && Ap(n) && typeof s === 'string' && (n = kp(s));
    const u = fs(t, s);
    Fr(
      u === l,
      'You are trying to animate '
        .concat(t, ' from "')
        .concat(s, '" to "')
        .concat(n, '". ')
        .concat(
          s,
          ' is not an animatable value - to enable this animation set '
        )
        .concat(s, ' to a value animatable to ')
        .concat(n, ' via the `style` property.')
    );
    function c() {
      const p = {
        from: s,
        to: n,
        velocity: e.getVelocity(),
        onComplete: o,
        onUpdate(d) {
          return e.set(d);
        },
      };
      return a.type === 'inertia' || a.type === 'decay'
        ? gE({ ...p, ...a })
        : av({
            ...XE(a, p, t),
            onUpdate(d) {
              let h;
              p.onUpdate(d),
                (h = a.onUpdate) === null || h === void 0 || h.call(a, d);
            },
            onComplete() {
              let d;
              p.onComplete(),
                (d = a.onComplete) === null || d === void 0 || d.call(a);
            },
          });
    }
    function f() {
      let p;
      let d;
      const h = dl(n);
      return (
        e.set(h),
        o(),
        (p = a?.onUpdate) === null || p === void 0 || p.call(a, h),
        (d = a?.onComplete) === null || d === void 0 || d.call(a),
        { stop() {} }
      );
    }
    return !u || !l || a.type === !1 ? f : c;
  }
  function Ap(t) {
    return (
      t === 0 ||
      (typeof t === 'string' && parseFloat(t) === 0 && t.indexOf(' ') === -1)
    );
  }
  function kp(t) {
    return typeof t === 'number' ? 0 : Ml('', t);
  }
  function Dl(t, e) {
    return t[e] || t.default || t;
  }
  function Nl(t, e, n, r) {
    return (
      r === void 0 && (r = {}),
      Av.current && (r = { type: !1 }),
      e.start((o) => {
        let i;
        let a;
        const s = _E(t, e, n, r, o);
        const l = qE(r, t);
        const u = function () {
          return (a = s());
        };
        return (
          l ? (i = window.setTimeout(u, Nr(l))) : u(),
          function () {
            clearTimeout(i), a?.stop();
          }
        );
      })
    );
  }
  let ds;
  const yi = v(() => {
    G(), Ht(), Sv(), BE(), zE(), UE(), fe(), Cv(), HE(), hl(), (ds = !1);
  });
  let kv;
  const KE = v(() => {
    kv = function (t) {
      return /^\-?\d*\.?\d+$/.test(t);
    };
  });
  let Rv;
  const QE = v(() => {
    Rv = function (t) {
      return /^0[^.\s]+$/.test(t);
    };
  });
  function Il(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function Ll(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const jl = v(() => {});
  let An;
  const Fl = v(() => {
    jl(),
      (An = (function () {
        function t() {
          this.subscriptions = [];
        }
        return (
          (t.prototype.add = function (e) {
            const n = this;
            return (
              Il(this.subscriptions, e),
              function () {
                return Ll(n.subscriptions, e);
              }
            );
          }),
          (t.prototype.notify = function (e, n, r) {
            const o = this.subscriptions.length;
            if (o)
              if (o === 1) this.subscriptions[0](e, n, r);
              else
                for (let i = 0; i < o; i++) {
                  const a = this.subscriptions[i];
                  a && a(e, n, r);
                }
          }),
          (t.prototype.getSize = function () {
            return this.subscriptions.length;
          }),
          (t.prototype.clear = function () {
            this.subscriptions.length = 0;
          }),
          t
        );
      })());
  });
  function jn(t) {
    return new Mv(t);
  }
  let Rp;
  let Mv;
  const bi = v(() => {
    on(),
      Ht(),
      Fl(),
      (Rp = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (Mv = (function () {
        function t(e) {
          const n = this;
          (this.version = '6.5.1'),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.updateSubscribers = new An()),
            (this.velocityUpdateSubscribers = new An()),
            (this.renderSubscribers = new An()),
            (this.canTrackVelocity = !1),
            (this.updateAndNotify = function (r, o) {
              o === void 0 && (o = !0), (n.prev = n.current), (n.current = r);
              const i = Mr();
              const a = i.delta;
              const s = i.timestamp;
              n.lastUpdated !== s &&
                ((n.timeDelta = a),
                (n.lastUpdated = s),
                te.postRender(n.scheduleVelocityCheck)),
                n.prev !== n.current && n.updateSubscribers.notify(n.current),
                n.velocityUpdateSubscribers.getSize() &&
                  n.velocityUpdateSubscribers.notify(n.getVelocity()),
                o && n.renderSubscribers.notify(n.current);
            }),
            (this.scheduleVelocityCheck = function () {
              return te.postRender(n.velocityCheck);
            }),
            (this.velocityCheck = function (r) {
              const o = r.timestamp;
              o !== n.lastUpdated &&
                ((n.prev = n.current),
                n.velocityUpdateSubscribers.notify(n.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = Rp(this.current));
        }
        return (
          (t.prototype.onChange = function (e) {
            return this.updateSubscribers.add(e);
          }),
          (t.prototype.clearListeners = function () {
            this.updateSubscribers.clear();
          }),
          (t.prototype.onRenderRequest = function (e) {
            return e(this.get()), this.renderSubscribers.add(e);
          }),
          (t.prototype.attach = function (e) {
            this.passiveEffect = e;
          }),
          (t.prototype.set = function (e, n) {
            n === void 0 && (n = !0),
              !n || !this.passiveEffect
                ? this.updateAndNotify(e, n)
                : this.passiveEffect(e, this.updateAndNotify);
          }),
          (t.prototype.get = function () {
            return this.current;
          }),
          (t.prototype.getPrevious = function () {
            return this.prev;
          }),
          (t.prototype.getVelocity = function () {
            return this.canTrackVelocity
              ? uv(
                  parseFloat(this.current) - parseFloat(this.prev),
                  this.timeDelta
                )
              : 0;
          }),
          (t.prototype.start = function (e) {
            const n = this;
            return (
              this.stop(),
              new Promise((r) => {
                (n.hasAnimated = !0), (n.stopAnimation = e(r));
              }).then(() => n.clearAnimation())
            );
          }),
          (t.prototype.stop = function () {
            this.stopAnimation && this.stopAnimation(), this.clearAnimation();
          }),
          (t.prototype.isAnimating = function () {
            return !!this.stopAnimation;
          }),
          (t.prototype.clearAnimation = function () {
            this.stopAnimation = null;
          }),
          (t.prototype.destroy = function () {
            this.updateSubscribers.clear(),
              this.renderSubscribers.clear(),
              this.stop();
          }),
          t
        );
      })());
  });
  let Vl;
  const Dv = v(() => {
    Vl = function (t) {
      return function (e) {
        return e.test(t);
      };
    };
  });
  let Nv;
  const JE = v(() => {
    Nv = {
      test(t) {
        return t === 'auto';
      },
      parse(t) {
        return t;
      },
    };
  });
  let hs;
  let gn;
  const Iv = v(() => {
    wt(),
      Dv(),
      JE(),
      (hs = [Ie, U, Zt, ge, Yh, Wh, Nv]),
      (gn = function (t) {
        return hs.find(Vl(t));
      });
  });
  let Mp;
  let Lv;
  const ZE = v(() => {
    G(),
      wt(),
      Iv(),
      Dv(),
      (Mp = $t($t([], bt(hs), !1), [Rt, pe], !1)),
      (Lv = function (t) {
        return Mp.find(Vl(t));
      });
  });
  function $E(t, e, n) {
    t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, jn(n));
  }
  function tx(t, e) {
    const n = ii(t, e);
    const r = n ? t.makeTargetAnimatable(n, !1) : {};
    const o = r.transitionEnd;
    const i = o === void 0 ? {} : o;
    r.transition;
    let a = jt(r, ['transitionEnd', 'transition']);
    a = { ...a, ...i };
    for (const s in a) {
      const l = dl(a[s]);
      $E(t, s, l);
    }
  }
  function ex(t, e, n) {
    let r;
    let o;
    let i;
    let a;
    const s = Object.keys(e).filter((d) => !t.hasValue(d));
    const l = s.length;
    if (l)
      for (let u = 0; u < l; u++) {
        const c = s[u];
        const f = e[c];
        let p = null;
        Array.isArray(f) && (p = f[0]),
          p === null &&
            (p =
              (o = (r = n[c]) !== null && r !== void 0 ? r : t.readValue(c)) !==
                null && o !== void 0
                ? o
                : e[c]),
          p != null &&
            (typeof p === 'string' && (kv(p) || Rv(p))
              ? (p = parseFloat(p))
              : !Lv(p) && pe.test(f) && (p = Ml(c, f)),
            t.addValue(c, jn(p)),
            ((i = (a = n)[c]) !== null && i !== void 0) || (a[c] = p),
            t.setBaseTarget(c, p));
      }
  }
  function nx(t, e) {
    if (e) {
      const n = e[t] || e.default || e;
      return n.from;
    }
  }
  function rx(t, e, n) {
    let r;
    let o;
    const i = {};
    for (const a in t)
      i[a] =
        (r = nx(a, e)) !== null && r !== void 0
          ? r
          : (o = n.getValue(a)) === null || o === void 0
          ? void 0
          : o.get();
    return i;
  }
  const jv = v(() => {
    G(), wt(), KE(), QE(), hl(), bi(), Cv(), ZE(), Bn();
  });
  function ox(t, e, n) {
    n === void 0 && (n = {}), t.notifyAnimationStart(e);
    let r;
    if (Array.isArray(e)) {
      const o = e.map((a) => ms(t, a, n));
      r = Promise.all(o);
    } else if (typeof e === 'string') r = ms(t, e, n);
    else {
      const i = typeof e === 'function' ? ii(t, e, n.custom) : e;
      r = Fv(t, i, n);
    }
    return r.then(() => t.notifyAnimationComplete(e));
  }
  function ms(t, e, n) {
    let r;
    n === void 0 && (n = {});
    const o = ii(t, e, n.custom);
    const i = (o || {}).transition;
    let a = i === void 0 ? t.getDefaultTransition() || {} : i;
    n.transitionOverride && (a = n.transitionOverride);
    const s = o
      ? function () {
          return Fv(t, o, n);
        }
      : function () {
          return Promise.resolve();
        };
    const l =
      !((r = t.variantChildren) === null || r === void 0) && r.size
        ? function (d) {
            d === void 0 && (d = 0);
            const h = a.delayChildren;
            const m = h === void 0 ? 0 : h;
            const y = a.staggerChildren;
            const E = a.staggerDirection;
            return ix(t, e, m + d, y, E, n);
          }
        : function () {
            return Promise.resolve();
          };
    const u = a.when;
    if (u) {
      const c = bt(u === 'beforeChildren' ? [s, l] : [l, s], 2);
      const f = c[0];
      const p = c[1];
      return f().then(p);
    }
    return Promise.all([s(), l(n.delay)]);
  }
  function Fv(t, e, n) {
    let r;
    const o = n === void 0 ? {} : n;
    const i = o.delay;
    const a = i === void 0 ? 0 : i;
    const s = o.transitionOverride;
    const l = o.type;
    const u = t.makeTargetAnimatable(e);
    const c = u.transition;
    let f = c === void 0 ? t.getDefaultTransition() : c;
    const p = u.transitionEnd;
    const d = jt(u, ['transition', 'transitionEnd']);
    s && (f = s);
    const h = [];
    const m =
      l &&
      ((r = t.animationState) === null || r === void 0
        ? void 0
        : r.getState()[l]);
    for (const y in d) {
      const E = t.getValue(y);
      const x = d[y];
      if (!(!E || x === void 0 || (m && sx(m, y)))) {
        let b = { delay: a, ...f };
        t.shouldReduceMotion && zr(y) && (b = { ...b, type: !1, delay: 0 });
        const w = Nl(y, E, x, b);
        h.push(w);
      }
    }
    return Promise.all(h).then(() => {
      p && tx(t, p);
    });
  }
  function ix(t, e, n, r, o, i) {
    n === void 0 && (n = 0), r === void 0 && (r = 0), o === void 0 && (o = 1);
    const a = [];
    const s = (t.variantChildren.size - 1) * r;
    const l =
      o === 1
        ? function (u) {
            return u === void 0 && (u = 0), u * r;
          }
        : function (u) {
            return u === void 0 && (u = 0), s - u * r;
          };
    return (
      Array.from(t.variantChildren)
        .sort(ax)
        .forEach((u, c) => {
          a.push(
            ms(u, e, { ...i, delay: n + l(c) }).then(() =>
              u.notifyAnimationComplete(e)
            )
          );
        }),
      Promise.all(a)
    );
  }
  function ax(t, e) {
    return t.sortNodePosition(e);
  }
  function sx(t, e) {
    const n = t.protectedKeys;
    const r = t.needsAnimating;
    const o = n.hasOwnProperty(e) && r[e] !== !0;
    return (r[e] = !1), o;
  }
  const lx = v(() => {
    G(), yi(), jv(), Bn(), je();
  });
  function ux(t) {
    return function (e) {
      return Promise.all(
        e.map((n) => {
          const r = n.animation;
          const o = n.options;
          return ox(t, r, o);
        })
      );
    };
  }
  function cx(t) {
    let e = ux(t);
    const n = fx();
    let r = {};
    let o = !0;
    const i = function (c, f) {
      const p = ii(t, f);
      if (p) {
        p.transition;
        const d = p.transitionEnd;
        const h = jt(p, ['transition', 'transitionEnd']);
        c = { ...c, ...h, ...d };
      }
      return c;
    };
    function a(c) {
      return r[c] !== void 0;
    }
    function s(c) {
      e = c(t);
    }
    function l(c, f) {
      for (
        var p,
          d = t.getProps(),
          h = t.getVariantContext(!0) || {},
          m = [],
          y = new Set(),
          E = {},
          x = 1 / 0,
          b = function (M) {
            const N = Vv[M];
            const B = n[N];
            const X = (p = d[N]) !== null && p !== void 0 ? p : h[N];
            const et = Jt(X);
            const rt = N === f ? B.isActive : null;
            rt === !1 && (x = M);
            let ht = X === h[N] && X !== d[N] && et;
            if (
              (ht && o && t.manuallyAnimateOnMount && (ht = !1),
              (B.protectedKeys = { ...E }),
              (!B.isActive && rt === null) ||
                (!X && !B.prevProp) ||
                pl(X) ||
                typeof X === 'boolean')
            )
              return 'continue';
            const Tt = px(B.prevProp, X);
            let Ct =
              Tt || (N === f && B.isActive && !ht && et) || (M > x && et);
            const Ft = Array.isArray(X) ? X : [X];
            let St = Ft.reduce(i, {});
            rt === !1 && (St = {});
            const Nt = B.prevResolvedValues;
            const Wt = Nt === void 0 ? {} : Nt;
            const ne = { ...Wt, ...St };
            const Mt = function (z) {
              (Ct = !0), y.delete(z), (B.needsAnimating[z] = !0);
            };
            for (const At in ne) {
              const Z = St[At];
              const I = Wt[At];
              E.hasOwnProperty(At) ||
                (Z !== I
                  ? In(Z) && In(I)
                    ? !Ov(Z, I) || Tt
                      ? Mt(At)
                      : (B.protectedKeys[At] = !0)
                    : Z !== void 0
                    ? Mt(At)
                    : y.add(At)
                  : Z !== void 0 && y.has(At)
                  ? Mt(At)
                  : (B.protectedKeys[At] = !0));
            }
            (B.prevProp = X),
              (B.prevResolvedValues = St),
              B.isActive && (E = { ...E, ...St }),
              o && t.blockInitialAnimation && (Ct = !1),
              Ct &&
                !ht &&
                m.push.apply(
                  m,
                  $t(
                    [],
                    bt(
                      Ft.map((z) => ({
                        animation: z,
                        options: { type: N, ...c },
                      }))
                    ),
                    !1
                  )
                );
          },
          w = 0;
        w < Bv;
        w++
      )
        b(w);
      if (((r = { ...E }), y.size)) {
        const O = {};
        y.forEach((M) => {
          const N = t.getBaseTarget(M);
          N !== void 0 && (O[M] = N);
        }),
          m.push({ animation: O });
      }
      let S = !!m.length;
      return (
        o && d.initial === !1 && !t.manuallyAnimateOnMount && (S = !1),
        (o = !1),
        S ? e(m) : Promise.resolve()
      );
    }
    function u(c, f, p) {
      let d;
      if (n[c].isActive === f) return Promise.resolve();
      (d = t.variantChildren) === null ||
        d === void 0 ||
        d.forEach((y) => {
          let E;
          return (E = y.animationState) === null || E === void 0
            ? void 0
            : E.setActive(c, f);
        }),
        (n[c].isActive = f);
      const h = l(p, c);
      for (const m in n) n[m].protectedKeys = {};
      return h;
    }
    return {
      isAnimated: a,
      animateChanges: l,
      setActive: u,
      setAnimateFunction: s,
      getState() {
        return n;
      },
    };
  }
  function px(t, e) {
    return typeof e === 'string' ? e !== t : Ph(e) ? !Ov(e, t) : !1;
  }
  function qe(t) {
    return (
      t === void 0 && (t = !1),
      {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      }
    );
  }
  function fx() {
    let t;
    return (
      (t = {}),
      (t[st.Animate] = qe(!0)),
      (t[st.InView] = qe()),
      (t[st.Hover] = qe()),
      (t[st.Tap] = qe()),
      (t[st.Drag] = qe()),
      (t[st.Focus] = qe()),
      (t[st.Exit] = qe()),
      t
    );
  }
  let Po;
  let Vv;
  let Bv;
  const zv = v(() => {
    G(),
      fl(),
      fi(),
      VE(),
      lx(),
      rn(),
      Bn(),
      (Po = [
        st.Animate,
        st.InView,
        st.Focus,
        st.Hover,
        st.Tap,
        st.Drag,
        st.Exit,
      ]),
      (Vv = $t([], bt(Po), !1).reverse()),
      (Bv = Po.length);
  });
  let Uv;
  const dx = v(() => {
    G(),
      fl(),
      xv(),
      ri(),
      zv(),
      rn(),
      kl(),
      (Uv = {
        animation: be((t) => {
          const e = t.visualElement;
          const n = t.animate;
          e.animationState || (e.animationState = cx(e)),
            pl(n) && W(() => n.subscribe(e), [n]);
        }),
        exit: be((t) => {
          const e = t.custom;
          const n = t.visualElement;
          const r = bt(Ev(), 2);
          const o = r[0];
          const i = r[1];
          const a = mt(Br);
          W(() => {
            let s;
            let l;
            n.isPresent = o;
            const u =
              (s = n.animationState) === null || s === void 0
                ? void 0
                : s.setActive(st.Exit, !o, {
                    custom: (l = a?.custom) !== null && l !== void 0 ? l : e,
                  });
            !o && u?.then(i);
          }, [o]);
        }),
      });
  });
  function ha(t, e) {
    return e ? { point: e(t.point) } : t;
  }
  function Dp(t, e) {
    return { x: t.x - e.x, y: t.y - e.y };
  }
  function ma(t, e) {
    const n = t.point;
    return {
      point: n,
      delta: Dp(n, Hv(e)),
      offset: Dp(n, hx(e)),
      velocity: mx(e, 0.1),
    };
  }
  function hx(t) {
    return t[0];
  }
  function Hv(t) {
    return t[t.length - 1];
  }
  function mx(t, e) {
    if (t.length < 2) return { x: 0, y: 0 };
    for (
      var n = t.length - 1, r = null, o = Hv(t);
      n >= 0 && ((r = t[n]), !(o.timestamp - r.timestamp > Nr(e)));

    )
      n--;
    if (!r) return { x: 0, y: 0 };
    const i = (o.timestamp - r.timestamp) / 1e3;
    if (i === 0) return { x: 0, y: 0 };
    const a = { x: (o.x - r.x) / i, y: (o.y - r.y) / i };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
  }
  let Bl;
  const Wv = v(() => {
    G(),
      vl(),
      bl(),
      on(),
      Sv(),
      Ur(),
      Ht(),
      (Bl = (function () {
        function t(e, n, r) {
          const o = this;
          const i = r === void 0 ? {} : r;
          const a = i.transformPagePoint;
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (o.lastMoveEvent && o.lastMoveEventInfo) {
                const p = ma(o.lastMoveEventInfo, o.history);
                const d = o.startEvent !== null;
                const h = fv(p.offset, { x: 0, y: 0 }) >= 3;
                if (!(!d && !h)) {
                  const m = p.point;
                  const y = Mr().timestamp;
                  o.history.push({ ...m, timestamp: y });
                  const E = o.handlers;
                  const x = E.onStart;
                  const b = E.onMove;
                  d ||
                    (x && x(o.lastMoveEvent, p),
                    (o.startEvent = o.lastMoveEvent)),
                    b && b(o.lastMoveEvent, p);
                }
              }
            }),
            (this.handlePointerMove = function (p, d) {
              if (
                ((o.lastMoveEvent = p),
                (o.lastMoveEventInfo = ha(d, o.transformPagePoint)),
                Sm(p) && p.buttons === 0)
              ) {
                o.handlePointerUp(p, d);
                return;
              }
              te.update(o.updatePoint, !0);
            }),
            (this.handlePointerUp = function (p, d) {
              o.end();
              const h = o.handlers;
              const m = h.onEnd;
              const y = h.onSessionEnd;
              const E = ma(ha(d, o.transformPagePoint), o.history);
              o.startEvent && m && m(p, E), y && y(p, E);
            }),
            !(Pm(e) && e.touches.length > 1))
          ) {
            (this.handlers = n), (this.transformPagePoint = a);
            const s = gl(e);
            const l = ha(s, this.transformPagePoint);
            const u = l.point;
            const c = Mr().timestamp;
            this.history = [{ ...u, timestamp: c }];
            const f = n.onSessionStart;
            f && f(e, ma(l, this.history)),
              (this.removeListeners = Hr(
                Cn(window, 'pointermove', this.handlePointerMove),
                Cn(window, 'pointerup', this.handlePointerUp),
                Cn(window, 'pointercancel', this.handlePointerUp)
              ));
          }
        }
        return (
          (t.prototype.updateHandlers = function (e) {
            this.handlers = e;
          }),
          (t.prototype.end = function () {
            this.removeListeners && this.removeListeners(),
              tn.update(this.updatePoint);
          }),
          t
        );
      })());
  });
  function we(t) {
    return t.max - t.min;
  }
  function Np(t, e, n) {
    return e === void 0 && (e = 0), n === void 0 && (n = 0.01), fv(t, e) < n;
  }
  function Ip(t, e, n, r) {
    r === void 0 && (r = 0.5),
      (t.origin = r),
      (t.originPoint = dt(e.min, e.max, t.origin)),
      (t.scale = we(n) / we(e)),
      (Np(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
      (t.translate = dt(n.min, n.max, t.origin) - t.originPoint),
      (Np(t.translate) || isNaN(t.translate)) && (t.translate = 0);
  }
  function Pr(t, e, n, r) {
    Ip(t.x, e.x, n.x, r?.originX), Ip(t.y, e.y, n.y, r?.originY);
  }
  function Lp(t, e, n) {
    (t.min = n.min + e.min), (t.max = t.min + we(e));
  }
  function vx(t, e, n) {
    Lp(t.x, e.x, n.x), Lp(t.y, e.y, n.y);
  }
  function jp(t, e, n) {
    (t.min = e.min - n.min), (t.max = t.min + we(e));
  }
  function Tr(t, e, n) {
    jp(t.x, e.x, n.x), jp(t.y, e.y, n.y);
  }
  const zl = v(() => {
    Ht();
  });
  function gx(t, e, n) {
    const r = e.min;
    const o = e.max;
    return (
      r !== void 0 && t < r
        ? (t = n ? dt(r, t, n.min) : Math.max(t, r))
        : o !== void 0 && t > o && (t = n ? dt(o, t, n.max) : Math.min(t, o)),
      t
    );
  }
  function Fp(t, e, n) {
    return {
      min: e !== void 0 ? t.min + e : void 0,
      max: n !== void 0 ? t.max + n - (t.max - t.min) : void 0,
    };
  }
  function yx(t, e) {
    const n = e.top;
    const r = e.left;
    const o = e.bottom;
    const i = e.right;
    return { x: Fp(t.x, r, i), y: Fp(t.y, n, o) };
  }
  function Vp(t, e) {
    let n;
    let r = e.min - t.min;
    let o = e.max - t.max;
    return (
      e.max - e.min < t.max - t.min &&
        ((n = bt([o, r], 2)), (r = n[0]), (o = n[1])),
      { min: r, max: o }
    );
  }
  function bx(t, e) {
    return { x: Vp(t.x, e.x), y: Vp(t.y, e.y) };
  }
  function wx(t, e) {
    let n = 0.5;
    const r = we(t);
    const o = we(e);
    return (
      o > r
        ? (n = Ln(e.min, e.max - r, t.min))
        : r > o && (n = Ln(t.min, t.max - o, e.min)),
      Rr(0, 1, n)
    );
  }
  function Ex(t, e) {
    const n = {};
    return (
      e.min !== void 0 && (n.min = e.min - t.min),
      e.max !== void 0 && (n.max = e.max - t.min),
      n
    );
  }
  function xx(t) {
    return (
      t === void 0 && (t = Ko),
      t === !1 ? (t = 0) : t === !0 && (t = Ko),
      { x: Bp(t, 'left', 'right'), y: Bp(t, 'top', 'bottom') }
    );
  }
  function Bp(t, e, n) {
    return { min: zp(t, e), max: zp(t, n) };
  }
  function zp(t, e) {
    let n;
    return typeof t === 'number'
      ? t
      : (n = t[e]) !== null && n !== void 0
      ? n
      : 0;
  }
  let Ko;
  const Ox = v(() => {
    G(), Ht(), zl(), (Ko = 0.35);
  });
  let va;
  let kn;
  let ga;
  let Pt;
  const Yv = v(() => {
    (va = function () {
      return { translate: 0, scale: 1, origin: 0, originPoint: 0 };
    }),
      (kn = function () {
        return { x: va(), y: va() };
      }),
      (ga = function () {
        return { min: 0, max: 0 };
      }),
      (Pt = function () {
        return { x: ga(), y: ga() };
      });
  });
  function se(t) {
    return [t('x'), t('y')];
  }
  const qv = v(() => {});
  function Gv(t) {
    const e = t.top;
    const n = t.left;
    const r = t.right;
    const o = t.bottom;
    return { x: { min: n, max: r }, y: { min: e, max: o } };
  }
  function Sx(t) {
    const e = t.x;
    const n = t.y;
    return { top: n.min, right: e.max, bottom: n.max, left: e.min };
  }
  function Px(t, e) {
    if (!e) return t;
    const n = e({ x: t.left, y: t.top });
    const r = e({ x: t.right, y: t.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
  }
  const Xv = v(() => {});
  function ya(t) {
    return t === void 0 || t === 1;
  }
  function _v(t) {
    const e = t.scale;
    const n = t.scaleX;
    const r = t.scaleY;
    return !ya(e) || !ya(n) || !ya(r);
  }
  function ke(t) {
    return (
      _v(t) || Up(t.x) || Up(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
    );
  }
  function Up(t) {
    return t && t !== '0%';
  }
  const Kv = v(() => {});
  function Qo(t, e, n) {
    const r = t - n;
    const o = e * r;
    return n + o;
  }
  function Hp(t, e, n, r, o) {
    return o !== void 0 && (t = Qo(t, o, r)), Qo(t, n, r) + e;
  }
  function vs(t, e, n, r, o) {
    e === void 0 && (e = 0),
      n === void 0 && (n = 1),
      (t.min = Hp(t.min, e, n, r, o)),
      (t.max = Hp(t.max, e, n, r, o));
  }
  function Qv(t, e) {
    const n = e.x;
    const r = e.y;
    vs(t.x, n.translate, n.scale, n.originPoint),
      vs(t.y, r.translate, r.scale, r.originPoint);
  }
  function Tx(t, e, n, r) {
    let o;
    let i;
    r === void 0 && (r = !1);
    const a = n.length;
    if (a) {
      e.x = e.y = 1;
      for (var s, l, u = 0; u < a; u++)
        (s = n[u]),
          (l = s.projectionDelta),
          ((i =
            (o = s.instance) === null || o === void 0 ? void 0 : o.style) ===
            null || i === void 0
            ? void 0
            : i.display) !== 'contents' &&
            (r &&
              s.options.layoutScroll &&
              s.scroll &&
              s !== s.root &&
              En(t, { x: -s.scroll.x, y: -s.scroll.y }),
            l && ((e.x *= l.x.scale), (e.y *= l.y.scale), Qv(t, l)),
            r && ke(s.latestValues) && En(t, s.latestValues));
    }
  }
  function Re(t, e) {
    (t.min += e), (t.max += e);
  }
  function Wp(t, e, n) {
    const r = bt(n, 3);
    const o = r[0];
    const i = r[1];
    const a = r[2];
    const s = e[a] !== void 0 ? e[a] : 0.5;
    const l = dt(t.min, t.max, s);
    vs(t, e[o], e[i], l, e.scale);
  }
  function En(t, e) {
    Wp(t.x, e, Jv), Wp(t.y, e, Zv);
  }
  let Jv;
  let Zv;
  const Ul = v(() => {
    G(),
      Ht(),
      Kv(),
      (Jv = ['x', 'scaleX', 'originX']),
      (Zv = ['y', 'scaleY', 'originY']);
  });
  function $v(t, e) {
    return Gv(Px(t.getBoundingClientRect(), e));
  }
  function Cx(t, e, n) {
    const r = $v(t, n);
    const o = e.scroll;
    return o && (Re(r.x, o.x), Re(r.y, o.y)), r;
  }
  const tg = v(() => {
    Xv(), Ul();
  });
  function io(t, e, n) {
    return (e === !0 || e === t) && (n === null || n === t);
  }
  function Ax(t, e) {
    e === void 0 && (e = 10);
    let n = null;
    return Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x'), n;
  }
  let Yp;
  let eg;
  const kx = v(() => {
    G(),
      fe(),
      Wv(),
      wl(),
      zs(),
      Ur(),
      Ox(),
      rn(),
      Yv(),
      qv(),
      tg(),
      bl(),
      yi(),
      Xv(),
      hi(),
      Ht(),
      wt(),
      zl(),
      (Yp = new WeakMap()),
      (eg = (function () {
        function t(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Pt()),
            (this.visualElement = e);
        }
        return (
          (t.prototype.start = function (e, n) {
            const r = this;
            const o = n === void 0 ? {} : n;
            const i = o.snapToCursor;
            const a = i === void 0 ? !1 : i;
            if (this.visualElement.isPresent !== !1) {
              const s = function (f) {
                r.stopAnimation(), a && r.snapToCursor(gl(f, 'page').point);
              };
              const l = function (f, p) {
                let d;
                const h = r.getProps();
                const m = h.drag;
                const y = h.dragPropagation;
                const E = h.onDragStart;
                (m &&
                  !y &&
                  (r.openGlobalLock && r.openGlobalLock(),
                  (r.openGlobalLock = Nm(m)),
                  !r.openGlobalLock)) ||
                  ((r.isDragging = !0),
                  (r.currentDirection = null),
                  r.resolveConstraints(),
                  r.visualElement.projection &&
                    ((r.visualElement.projection.isAnimationBlocked = !0),
                    (r.visualElement.projection.target = void 0)),
                  se((x) => {
                    let b;
                    let w;
                    let O = r.getAxisMotionValue(x).get() || 0;
                    if (Zt.test(O)) {
                      const S =
                        (w =
                          (b = r.visualElement.projection) === null ||
                          b === void 0
                            ? void 0
                            : b.layout) === null || w === void 0
                          ? void 0
                          : w.actual[x];
                      if (S) {
                        const M = we(S);
                        O = M * (parseFloat(O) / 100);
                      }
                    }
                    r.originPoint[x] = O;
                  }),
                  E?.(f, p),
                  (d = r.visualElement.animationState) === null ||
                    d === void 0 ||
                    d.setActive(st.Drag, !0));
              };
              const u = function (f, p) {
                const d = r.getProps();
                const h = d.dragPropagation;
                const m = d.dragDirectionLock;
                const y = d.onDirectionLock;
                const E = d.onDrag;
                if (!(!h && !r.openGlobalLock)) {
                  const x = p.offset;
                  if (m && r.currentDirection === null) {
                    (r.currentDirection = Ax(x)),
                      r.currentDirection !== null && y?.(r.currentDirection);
                    return;
                  }
                  r.updateAxis('x', p.point, x),
                    r.updateAxis('y', p.point, x),
                    r.visualElement.syncRender(),
                    E?.(f, p);
                }
              };
              const c = function (f, p) {
                return r.stop(f, p);
              };
              this.panSession = new Bl(
                e,
                { onSessionStart: s, onStart: l, onMove: u, onSessionEnd: c },
                {
                  transformPagePoint:
                    this.visualElement.getTransformPagePoint(),
                }
              );
            }
          }),
          (t.prototype.stop = function (e, n) {
            const r = this.isDragging;
            if ((this.cancel(), !!r)) {
              const o = n.velocity;
              this.startAnimation(o);
              const i = this.getProps().onDragEnd;
              i?.(e, n);
            }
          }),
          (t.prototype.cancel = function () {
            let e;
            let n;
            (this.isDragging = !1),
              this.visualElement.projection &&
                (this.visualElement.projection.isAnimationBlocked = !1),
              (e = this.panSession) === null || e === void 0 || e.end(),
              (this.panSession = void 0);
            const r = this.getProps().dragPropagation;
            !r &&
              this.openGlobalLock &&
              (this.openGlobalLock(), (this.openGlobalLock = null)),
              (n = this.visualElement.animationState) === null ||
                n === void 0 ||
                n.setActive(st.Drag, !1);
          }),
          (t.prototype.updateAxis = function (e, n, r) {
            const o = this.getProps().drag;
            if (!(!r || !io(e, o, this.currentDirection))) {
              const i = this.getAxisMotionValue(e);
              let a = this.originPoint[e] + r[e];
              this.constraints &&
                this.constraints[e] &&
                (a = gx(a, this.constraints[e], this.elastic[e])),
                i.set(a);
            }
          }),
          (t.prototype.resolveConstraints = function () {
            const e = this;
            const n = this.getProps();
            const r = n.dragConstraints;
            const o = n.dragElastic;
            const i = (this.visualElement.projection || {}).layout;
            const a = this.constraints;
            r && wn(r)
              ? this.constraints ||
                (this.constraints = this.resolveRefConstraints())
              : r && i
              ? (this.constraints = yx(i.actual, r))
              : (this.constraints = !1),
              (this.elastic = xx(o)),
              a !== this.constraints &&
                i &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                se((s) => {
                  e.getAxisMotionValue(s) &&
                    (e.constraints[s] = Ex(i.actual[s], e.constraints[s]));
                });
          }),
          (t.prototype.resolveRefConstraints = function () {
            const e = this.getProps();
            const n = e.dragConstraints;
            const r = e.onMeasureDragConstraints;
            if (!n || !wn(n)) return !1;
            const o = n.current;
            qt(
              o !== null,
              "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
            );
            const i = this.visualElement.projection;
            if (!i || !i.layout) return !1;
            const a = Cx(o, i.root, this.visualElement.getTransformPagePoint());
            let s = bx(i.layout.actual, a);
            if (r) {
              const l = r(Sx(s));
              (this.hasMutatedConstraints = !!l), l && (s = Gv(l));
            }
            return s;
          }),
          (t.prototype.startAnimation = function (e) {
            const n = this;
            const r = this.getProps();
            const o = r.drag;
            const i = r.dragMomentum;
            const a = r.dragElastic;
            const s = r.dragTransition;
            const l = r.dragSnapToOrigin;
            const u = r.onDragTransitionEnd;
            const c = this.constraints || {};
            const f = se((p) => {
              let d;
              if (io(p, o, n.currentDirection)) {
                let h = (d = c?.[p]) !== null && d !== void 0 ? d : {};
                l && (h = { min: 0, max: 0 });
                const m = a ? 200 : 1e6;
                const y = a ? 40 : 1e7;
                const E = {
                  type: 'inertia',
                  velocity: i ? e[p] : 0,
                  bounceStiffness: m,
                  bounceDamping: y,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...s,
                  ...h,
                };
                return n.startAxisValueAnimation(p, E);
              }
            });
            return Promise.all(f).then(u);
          }),
          (t.prototype.startAxisValueAnimation = function (e, n) {
            const r = this.getAxisMotionValue(e);
            return Nl(e, r, 0, n);
          }),
          (t.prototype.stopAnimation = function () {
            const e = this;
            se((n) => e.getAxisMotionValue(n).stop());
          }),
          (t.prototype.getAxisMotionValue = function (e) {
            let n;
            let r;
            const o = `_drag${e.toUpperCase()}`;
            const i = this.visualElement.getProps()[o];
            return (
              i ||
              this.visualElement.getValue(
                e,
                (r =
                  (n = this.visualElement.getProps().initial) === null ||
                  n === void 0
                    ? void 0
                    : n[e]) !== null && r !== void 0
                  ? r
                  : 0
              )
            );
          }),
          (t.prototype.snapToCursor = function (e) {
            const n = this;
            se((r) => {
              const o = n.getProps().drag;
              if (io(r, o, n.currentDirection)) {
                const i = n.visualElement.projection;
                const a = n.getAxisMotionValue(r);
                if (i && i.layout) {
                  const s = i.layout.actual[r];
                  const l = s.min;
                  const u = s.max;
                  a.set(e[r] - dt(l, u, 0.5));
                }
              }
            });
          }),
          (t.prototype.scalePositionWithinConstraints = function () {
            const e = this;
            let n;
            const r = this.getProps();
            const o = r.drag;
            const i = r.dragConstraints;
            const a = this.visualElement.projection;
            if (!(!wn(i) || !a || !this.constraints)) {
              this.stopAnimation();
              const s = { x: 0, y: 0 };
              se((u) => {
                const c = e.getAxisMotionValue(u);
                if (c) {
                  const f = c.get();
                  s[u] = wx({ min: f, max: f }, e.constraints[u]);
                }
              });
              const l = this.visualElement.getProps().transformTemplate;
              (this.visualElement.getInstance().style.transform = l
                ? l({}, '')
                : 'none'),
                (n = a.root) === null || n === void 0 || n.updateScroll(),
                a.updateLayout(),
                this.resolveConstraints(),
                se((u) => {
                  if (io(u, o, null)) {
                    const c = e.getAxisMotionValue(u);
                    const f = e.constraints[u];
                    const p = f.min;
                    const d = f.max;
                    c.set(dt(p, d, s[u]));
                  }
                });
            }
          }),
          (t.prototype.addListeners = function () {
            const e = this;
            let n;
            Yp.set(this.visualElement, this);
            const r = this.visualElement.getInstance();
            const o = Cn(r, 'pointerdown', (u) => {
              const c = e.getProps();
              const f = c.drag;
              const p = c.dragListener;
              const d = p === void 0 ? !0 : p;
              f && d && e.start(u);
            });
            const i = function () {
              const u = e.getProps().dragConstraints;
              wn(u) && (e.constraints = e.resolveRefConstraints());
            };
            const a = this.visualElement.projection;
            const s = a.addEventListener('measure', i);
            a &&
              !a.layout &&
              ((n = a.root) === null || n === void 0 || n.updateScroll(),
              a.updateLayout()),
              i();
            const l = di(window, 'resize', () =>
              e.scalePositionWithinConstraints()
            );
            return (
              a.addEventListener('didUpdate', (u) => {
                const c = u.delta;
                const f = u.hasLayoutChanged;
                e.isDragging &&
                  f &&
                  (se((p) => {
                    const d = e.getAxisMotionValue(p);
                    d &&
                      ((e.originPoint[p] += c[p].translate),
                      d.set(d.get() + c[p].translate));
                  }),
                  e.visualElement.syncRender());
              }),
              function () {
                l(), o(), s();
              }
            );
          }),
          (t.prototype.getProps = function () {
            const e = this.visualElement.getProps();
            const n = e.drag;
            const r = n === void 0 ? !1 : n;
            const o = e.dragDirectionLock;
            const i = o === void 0 ? !1 : o;
            const a = e.dragPropagation;
            const s = a === void 0 ? !1 : a;
            const l = e.dragConstraints;
            const u = l === void 0 ? !1 : l;
            const c = e.dragElastic;
            const f = c === void 0 ? Ko : c;
            const p = e.dragMomentum;
            const d = p === void 0 ? !0 : p;
            return {
              ...e,
              drag: r,
              dragDirectionLock: i,
              dragPropagation: s,
              dragConstraints: u,
              dragElastic: f,
              dragMomentum: d,
            };
          }),
          t
        );
      })());
  });
  function Rx(t) {
    const e = t.dragControls;
    const n = t.visualElement;
    const r = si(() => new eg(n));
    W(() => e && e.subscribe(r), [r, e]), W(() => r.addListeners(), [r]);
  }
  const Mx = v(() => {
    kx(), li();
  });
  function Dx(t) {
    const e = t.onPan;
    const n = t.onPanStart;
    const r = t.onPanEnd;
    const o = t.onPanSessionStart;
    const i = t.visualElement;
    const a = e || n || r || o;
    const s = nt(null);
    const l = mt(ei).transformPagePoint;
    const u = {
      onSessionStart: o,
      onStart: n,
      onMove: e,
      onEnd(f, p) {
        (s.current = null), r && r(f, p);
      },
    };
    W(() => {
      s.current !== null && s.current.updateHandlers(u);
    });
    function c(f) {
      s.current = new Bl(f, u, { transformPagePoint: l });
    }
    Yo(i, 'pointerdown', a && c), Lm(() => s.current && s.current.end());
  }
  const Nx = v(() => {
    Vs(), jm(), Ur(), Wv();
  });
  let ng;
  const Ix = v(() => {
    Mx(), Nx(), kl(), (ng = { pan: be(Dx), drag: be(Rx) });
  });
  function Lx() {
    const t = gr.map(() => new An());
    const e = {};
    var n = {
      clearAllListeners() {
        return t.forEach((r) => r.clear());
      },
      updatePropListeners(r) {
        gr.forEach((o) => {
          let i;
          const a = `on${o}`;
          const s = r[a];
          (i = e[o]) === null || i === void 0 || i.call(e),
            s && (e[o] = n[a](s));
        });
      },
    };
    return (
      t.forEach((r, o) => {
        (n[`on${gr[o]}`] = function (i) {
          return r.add(i);
        }),
          (n[`notify${gr[o]}`] = function () {
            for (var i = [], a = 0; a < arguments.length; a++)
              i[a] = arguments[a];
            return r.notify.apply(r, $t([], bt(i), !1));
          });
      }),
      n
    );
  }
  let gr;
  const jx = v(() => {
    G(),
      Fl(),
      (gr = [
        'LayoutMeasure',
        'BeforeLayoutMeasure',
        'LayoutUpdate',
        'ViewportBoxUpdate',
        'Update',
        'Render',
        'AnimationComplete',
        'LayoutAnimationComplete',
        'AnimationStart',
        'LayoutAnimationStart',
        'SetAxisTarget',
        'Unmount',
      ]);
  });
  function Fx(t, e, n) {
    let r;
    for (var o in e) {
      const i = e[o];
      const a = n[o];
      if (ce(i)) t.addValue(o, i);
      else if (ce(a)) t.addValue(o, jn(i));
      else if (a !== i)
        if (t.hasValue(o)) {
          const s = t.getValue(o);
          !s.hasAnimated && s.set(i);
        } else
          t.addValue(
            o,
            jn((r = t.getStaticValue(o)) !== null && r !== void 0 ? r : i)
          );
    }
    for (var o in n) e[o] === void 0 && t.removeValue(o);
    return e;
  }
  const Vx = v(() => {
    bi(), nn();
  });
  let Hl;
  let ba;
  let qp;
  const rg = v(() => {
    G(),
      on(),
      bi(),
      nn(),
      zv(),
      jx(),
      Vx(),
      Bn(),
      (Hl = function (t) {
        const e = t.treeType;
        const n = e === void 0 ? '' : e;
        const r = t.build;
        const o = t.getBaseTarget;
        const i = t.makeTargetAnimatable;
        const a = t.measureViewportBox;
        const s = t.render;
        const l = t.readValueFromInstance;
        const u = t.removeValueFromRenderState;
        const c = t.sortNodePosition;
        const f = t.scrapeMotionValuesFromProps;
        return function (p, d) {
          const h = p.parent;
          let m = p.props;
          const y = p.presenceId;
          const E = p.blockInitialAnimation;
          const x = p.visualState;
          const b = p.shouldReduceMotion;
          d === void 0 && (d = {});
          let w = !1;
          const O = x.latestValues;
          const S = x.renderState;
          let M;
          const N = Lx();
          const B = new Map();
          const X = new Map();
          let et = {};
          const rt = { ...O };
          let ht;
          function Tt() {
            !M || !w || (Ct(), s(M, S, m.style, Z.projection));
          }
          function Ct() {
            r(Z, S, O, d, m);
          }
          function Ft() {
            N.notifyUpdate(O);
          }
          function St(I, z) {
            const P = z.onChange((k) => {
              (O[I] = k), m.onUpdate && te.update(Ft, !1, !0);
            });
            const T = z.onRenderRequest(Z.scheduleRender);
            X.set(I, () => {
              P(), T();
            });
          }
          const Nt = f(m);
          for (const Wt in Nt) {
            const ne = Nt[Wt];
            O[Wt] !== void 0 && ce(ne) && ne.set(O[Wt], !1);
          }
          const Mt = ai(m);
          const At = Ch(m);
          var Z = {
            treeType: n,
            current: null,
            depth: h ? h.depth + 1 : 0,
            parent: h,
            children: new Set(),
            presenceId: y,
            shouldReduceMotion: b,
            variantChildren: At ? new Set() : void 0,
            isVisible: void 0,
            manuallyAnimateOnMount: !!h?.isMounted(),
            blockInitialAnimation: E,
            isMounted() {
              return !!M;
            },
            mount(I) {
              (w = !0),
                (M = Z.current = I),
                Z.projection && Z.projection.mount(I),
                At && h && !Mt && (ht = h?.addVariantChild(Z)),
                B.forEach((z, P) => St(P, z)),
                h?.children.add(Z),
                Z.setProps(m);
            },
            unmount() {
              let I;
              (I = Z.projection) === null || I === void 0 || I.unmount(),
                tn.update(Ft),
                tn.render(Tt),
                X.forEach((z) => z()),
                ht?.(),
                h?.children.delete(Z),
                N.clearAllListeners(),
                (M = void 0),
                (w = !1);
            },
            addVariantChild(I) {
              let z;
              const P = Z.getClosestVariantNode();
              if (P)
                return (
                  (z = P.variantChildren) === null || z === void 0 || z.add(I),
                  function () {
                    return P.variantChildren.delete(I);
                  }
                );
            },
            sortNodePosition(I) {
              return !c || n !== I.treeType
                ? 0
                : c(Z.getInstance(), I.getInstance());
            },
            getClosestVariantNode() {
              return At ? Z : h?.getClosestVariantNode();
            },
            getLayoutId() {
              return m.layoutId;
            },
            getInstance() {
              return M;
            },
            getStaticValue(I) {
              return O[I];
            },
            setStaticValue(I, z) {
              return (O[I] = z);
            },
            getLatestValues() {
              return O;
            },
            setVisibility(I) {
              Z.isVisible !== I && ((Z.isVisible = I), Z.scheduleRender());
            },
            makeTargetAnimatable(I, z) {
              return z === void 0 && (z = !0), i(Z, I, m, z);
            },
            measureViewportBox() {
              return a(M, m);
            },
            addValue(I, z) {
              Z.hasValue(I) && Z.removeValue(I),
                B.set(I, z),
                (O[I] = z.get()),
                St(I, z);
            },
            removeValue(I) {
              let z;
              B.delete(I),
                (z = X.get(I)) === null || z === void 0 || z(),
                X.delete(I),
                delete O[I],
                u(I, S);
            },
            hasValue(I) {
              return B.has(I);
            },
            getValue(I, z) {
              let P = B.get(I);
              return (
                P === void 0 && z !== void 0 && ((P = jn(z)), Z.addValue(I, P)),
                P
              );
            },
            forEachValue(I) {
              return B.forEach(I);
            },
            readValue(I) {
              let z;
              return (z = O[I]) !== null && z !== void 0 ? z : l(M, I, d);
            },
            setBaseTarget(I, z) {
              rt[I] = z;
            },
            getBaseTarget(I) {
              if (o) {
                const z = o(m, I);
                if (z !== void 0 && !ce(z)) return z;
              }
              return rt[I];
            },
            ...N,
            build() {
              return Ct(), S;
            },
            scheduleRender() {
              te.render(Tt, !1, !0);
            },
            syncRender: Tt,
            setProps(I) {
              (I.transformTemplate || m.transformTemplate) &&
                Z.scheduleRender(),
                (m = I),
                N.updatePropListeners(I),
                (et = Fx(Z, f(m), et));
            },
            getProps() {
              return m;
            },
            getVariant(I) {
              let z;
              return (z = m.variants) === null || z === void 0 ? void 0 : z[I];
            },
            getDefaultTransition() {
              return m.transition;
            },
            getTransformPagePoint() {
              return m.transformPagePoint;
            },
            getVariantContext(I) {
              if ((I === void 0 && (I = !1), I)) return h?.getVariantContext();
              if (!Mt) {
                const z = h?.getVariantContext() || {};
                return m.initial !== void 0 && (z.initial = m.initial), z;
              }
              for (var P = {}, T = 0; T < qp; T++) {
                const k = ba[T];
                const C = m[k];
                (Jt(C) || C === !1) && (P[k] = C);
              }
              return P;
            },
          };
          return Z;
        };
      }),
      (ba = $t(['initial'], bt(Po), !1)),
      (qp = ba.length);
  });
  function gs(t) {
    return typeof t === 'string' && t.startsWith('var(--');
  }
  function Bx(t) {
    const e = Wl.exec(t);
    if (!e) return [,];
    const n = bt(e, 3);
    const r = n[1];
    const o = n[2];
    return [r, o];
  }
  function ys(t, e, n) {
    n === void 0 && (n = 1),
      qt(
        n <= og,
        'Max CSS variable fallback depth detected in property "'.concat(
          t,
          '". This may indicate a circular fallback dependency.'
        )
      );
    const r = bt(Bx(t), 2);
    const o = r[0];
    const i = r[1];
    if (o) {
      const a = window.getComputedStyle(e).getPropertyValue(o);
      return a ? a.trim() : gs(i) ? ys(i, e, n + 1) : i;
    }
  }
  function zx(t, e, n) {
    let r;
    const o = jt(e, []);
    const i = t.getInstance();
    if (!(i instanceof Element)) return { target: o, transitionEnd: n };
    n && (n = { ...n }),
      t.forEachValue((u) => {
        const c = u.get();
        if (gs(c)) {
          const f = ys(c, i);
          f && u.set(f);
        }
      });
    for (const a in o) {
      const s = o[a];
      if (gs(s)) {
        const l = ys(s, i);
        l &&
          ((o[a] = l),
          n && (((r = n[a]) !== null && r !== void 0) || (n[a] = s)));
      }
    }
    return { target: o, transitionEnd: n };
  }
  let Wl;
  let og;
  const ig = v(() => {
    G(),
      fe(),
      (Wl = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/),
      (og = 4);
  });
  function Ux(t) {
    const e = [];
    return (
      sg.forEach((n) => {
        const r = t.getValue(n);
        r !== void 0 &&
          (e.push([n, r.get()]), r.set(n.startsWith('scale') ? 1 : 0));
      }),
      e.length && t.syncRender(),
      e
    );
  }
  function Hx(t, e, n, r) {
    return ag(e) ? lg(t, e, n, r) : { target: e, transitionEnd: r };
  }
  let Gp;
  let wa;
  let ag;
  let Ea;
  let lr;
  let Xp;
  let xa;
  let Oa;
  let _p;
  let sg;
  let Sa;
  let Kp;
  let lg;
  const Wx = v(() => {
    G(),
      wt(),
      fi(),
      fe(),
      je(),
      Iv(),
      (Gp = new Set([
        'width',
        'height',
        'top',
        'left',
        'right',
        'bottom',
        'x',
        'y',
      ])),
      (wa = function (t) {
        return Gp.has(t);
      }),
      (ag = function (t) {
        return Object.keys(t).some(wa);
      }),
      (Ea = function (t, e) {
        t.set(e, !1), t.set(e);
      }),
      (lr = function (t) {
        return t === Ie || t === U;
      }),
      (function (t) {
        (t.width = 'width'),
          (t.height = 'height'),
          (t.left = 'left'),
          (t.right = 'right'),
          (t.top = 'top'),
          (t.bottom = 'bottom');
      })(Xp || (Xp = {})),
      (xa = function (t, e) {
        return parseFloat(t.split(', ')[e]);
      }),
      (Oa = function (t, e) {
        return function (n, r) {
          const o = r.transform;
          if (o === 'none' || !o) return 0;
          const i = o.match(/^matrix3d\((.+)\)$/);
          if (i) return xa(i[1], e);
          const a = o.match(/^matrix\((.+)\)$/);
          return a ? xa(a[1], t) : 0;
        };
      }),
      (_p = new Set(['x', 'y', 'z'])),
      (sg = Sn.filter((t) => !_p.has(t))),
      (Sa = {
        width(t, e) {
          const n = t.x;
          const r = e.paddingLeft;
          const o = r === void 0 ? '0' : r;
          const i = e.paddingRight;
          const a = i === void 0 ? '0' : i;
          return n.max - n.min - parseFloat(o) - parseFloat(a);
        },
        height(t, e) {
          const n = t.y;
          const r = e.paddingTop;
          const o = r === void 0 ? '0' : r;
          const i = e.paddingBottom;
          const a = i === void 0 ? '0' : i;
          return n.max - n.min - parseFloat(o) - parseFloat(a);
        },
        top(t, e) {
          const n = e.top;
          return parseFloat(n);
        },
        left(t, e) {
          const n = e.left;
          return parseFloat(n);
        },
        bottom(t, e) {
          const n = t.y;
          const r = e.top;
          return parseFloat(r) + (n.max - n.min);
        },
        right(t, e) {
          const n = t.x;
          const r = e.left;
          return parseFloat(r) + (n.max - n.min);
        },
        x: Oa(4, 13),
        y: Oa(5, 14),
      }),
      (Kp = function (t, e, n) {
        const r = e.measureViewportBox();
        const o = e.getInstance();
        const i = getComputedStyle(o);
        const a = i.display;
        const s = {};
        a === 'none' && e.setStaticValue('display', t.display || 'block'),
          n.forEach((u) => {
            s[u] = Sa[u](r, i);
          }),
          e.syncRender();
        const l = e.measureViewportBox();
        return (
          n.forEach((u) => {
            const c = e.getValue(u);
            Ea(c, s[u]), (t[u] = Sa[u](l, i));
          }),
          t
        );
      }),
      (lg = function (t, e, n, r) {
        n === void 0 && (n = {}),
          r === void 0 && (r = {}),
          (e = { ...e }),
          (r = { ...r });
        const o = Object.keys(e).filter(wa);
        let i = [];
        let a = !1;
        const s = [];
        if (
          (o.forEach((c) => {
            const f = t.getValue(c);
            if (t.hasValue(c)) {
              let p = n[c];
              let d = gn(p);
              const h = e[c];
              let m;
              if (In(h)) {
                const y = h.length;
                const E = h[0] === null ? 1 : 0;
                (p = h[E]), (d = gn(p));
                for (let x = E; x < y; x++)
                  m
                    ? qt(
                        gn(h[x]) === m,
                        'All keyframes must be of the same type'
                      )
                    : ((m = gn(h[x])),
                      qt(
                        m === d || (lr(d) && lr(m)),
                        'Keyframes must be of the same dimension as the current value'
                      ));
              } else m = gn(h);
              if (d !== m)
                if (lr(d) && lr(m)) {
                  const b = f.get();
                  typeof b === 'string' && f.set(parseFloat(b)),
                    typeof h === 'string'
                      ? (e[c] = parseFloat(h))
                      : Array.isArray(h) &&
                        m === U &&
                        (e[c] = h.map(parseFloat));
                } else
                  d?.transform && m?.transform && (p === 0 || h === 0)
                    ? p === 0
                      ? f.set(m.transform(p))
                      : (e[c] = d.transform(h))
                    : (a || ((i = Ux(t)), (a = !0)),
                      s.push(c),
                      (r[c] = r[c] !== void 0 ? r[c] : e[c]),
                      Ea(f, h));
            }
          }),
          s.length)
        ) {
          const l = s.indexOf('height') >= 0 ? window.pageYOffset : null;
          const u = Kp(e, t, s);
          return (
            i.length &&
              i.forEach((c) => {
                const f = bt(c, 2);
                const p = f[0];
                const d = f[1];
                t.getValue(p).set(d);
              }),
            t.syncRender(),
            l !== null && window.scrollTo({ top: l }),
            { target: u, transitionEnd: r }
          );
        }
        return { target: e, transitionEnd: r };
      });
  });
  let ug;
  const Yx = v(() => {
    ig(),
      Wx(),
      (ug = function (t, e, n, r) {
        const o = zx(t, e, r);
        return (e = o.target), (r = o.transitionEnd), Hx(t, e, n, r);
      });
  });
  function qx(t) {
    return window.getComputedStyle(t);
  }
  let bs;
  let cg;
  const pg = v(() => {
    G(),
      rg(),
      jv(),
      el(),
      zh(),
      Yx(),
      je(),
      cl(),
      dm(),
      Rl(),
      tg(),
      (bs = {
        treeType: 'dom',
        readValueFromInstance(t, e) {
          if (zr(e)) {
            const n = gi(e);
            return (n && n.default) || 0;
          }
          const r = qx(t);
          return (Bh(e) ? r.getPropertyValue(e) : r[e]) || 0;
        },
        sortNodePosition(t, e) {
          return t.compareDocumentPosition(e) & 2 ? 1 : -1;
        },
        getBaseTarget(t, e) {
          let n;
          return (n = t.style) === null || n === void 0 ? void 0 : n[e];
        },
        measureViewportBox(t, e) {
          const n = e.transformPagePoint;
          return $v(t, n);
        },
        resetTransform(t, e, n) {
          const r = n.transformTemplate;
          (e.style.transform = r ? r({}, '') : 'none'), t.scheduleRender();
        },
        restoreTransform(t, e) {
          t.style.transform = e.style.transform;
        },
        removeValueFromRenderState(t, e) {
          const n = e.vars;
          const r = e.style;
          delete n[t], delete r[t];
        },
        makeTargetAnimatable(t, e, n, r) {
          const o = n.transformValues;
          r === void 0 && (r = !0);
          const i = e.transition;
          let a = e.transitionEnd;
          let s = jt(e, ['transition', 'transitionEnd']);
          let l = rx(s, i || {}, t);
          if ((o && (a && (a = o(a)), s && (s = o(s)), l && (l = o(l))), r)) {
            ex(t, s, l);
            const u = ug(t, s, l, a);
            (a = u.transitionEnd), (s = u.target);
          }
          return { transition: i, transitionEnd: a, ...s };
        },
        scrapeMotionValuesFromProps: ul,
        build(t, e, n, r, o) {
          t.isVisible !== void 0 &&
            (e.style.visibility = t.isVisible ? 'visible' : 'hidden'),
            tl(e, n, r, o.transformTemplate);
        },
        render: fm,
      }),
      (cg = Hl(bs));
  });
  let fg;
  const Gx = v(() => {
    G(),
      rg(),
      ym(),
      pg(),
      il(),
      pm(),
      hm(),
      je(),
      vm(),
      Rl(),
      (fg = Hl({
        ...bs,
        getBaseTarget(t, e) {
          return t[e];
        },
        readValueFromInstance(t, e) {
          let n;
          return zr(e)
            ? ((n = gi(e)) === null || n === void 0 ? void 0 : n.default) || 0
            : ((e = ll.has(e) ? e : sl(e)), t.getAttribute(e));
        },
        scrapeMotionValuesFromProps: gm,
        build(t, e, n, r, o) {
          ol(e, n, r, o.transformTemplate);
        },
        render: mm,
      }));
  });
  let dg;
  const Xx = v(() => {
    pg(),
      Gx(),
      qs(),
      (dg = function (t, e) {
        return Ys(t)
          ? fg(e, { enableHardwareAcceleration: !1 })
          : cg(e, { enableHardwareAcceleration: !0 });
      });
  });
  function Qp(t, e) {
    return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
  }
  let yn;
  const _x = v(() => {
    wt(),
      (yn = {
        correct(t, e) {
          if (!e.target) return t;
          if (typeof t === 'string')
            if (U.test(t)) t = parseFloat(t);
            else return t;
          const n = Qp(t, e.target.x);
          const r = Qp(t, e.target.y);
          return ''.concat(n, '% ').concat(r, '%');
        },
      });
  });
  let Pa;
  let hg;
  const Kx = v(() => {
    Ht(),
      wt(),
      ig(),
      (Pa = '_$css'),
      (hg = {
        correct(t, e) {
          const n = e.treeScale;
          const r = e.projectionDelta;
          const o = t;
          const i = t.includes('var(');
          const a = [];
          i && (t = t.replace(Wl, (m) => (a.push(m), Pa)));
          const s = pe.parse(t);
          if (s.length > 5) return o;
          const l = pe.createTransformer(t);
          const u = typeof s[0] !== 'number' ? 1 : 0;
          const c = r.x.scale * n.x;
          const f = r.y.scale * n.y;
          (s[0 + u] /= c), (s[1 + u] /= f);
          const p = dt(c, f, 0.5);
          typeof s[2 + u] === 'number' && (s[2 + u] /= p),
            typeof s[3 + u] === 'number' && (s[3 + u] /= p);
          let d = l(s);
          if (i) {
            let h = 0;
            d = d.replace(Pa, () => {
              const m = a[h];
              return h++, m;
            });
          }
          return d;
        },
      });
  });
  function Qx(t) {
    const e = bt(Ev(), 2);
    const n = e[0];
    const r = e[1];
    const o = mt(Hs);
    return g.createElement(mg, {
      ...t,
      layoutGroup: o,
      switchLayoutGroup: mt(Ws),
      isPresent: n,
      safeToRemove: r,
    });
  }
  let mg;
  let Jp;
  const Jx = v(() => {
    G(),
      on(),
      xv(),
      kh(),
      Rh(),
      Us(),
      _x(),
      Kx(),
      Gs(),
      (mg = (function (t) {
        kd(e, t);
        function e() {
          return (t !== null && t.apply(this, arguments)) || this;
        }
        return (
          (e.prototype.componentDidMount = function () {
            const n = this;
            const r = this.props;
            const o = r.visualElement;
            const i = r.layoutGroup;
            const a = r.switchLayoutGroup;
            const s = r.layoutId;
            const l = o.projection;
            ew(Jp),
              l &&
                (i?.group && i.group.add(l),
                a?.register && s && a.register(l),
                l.root.didUpdate(),
                l.addEventListener('animationComplete', () => {
                  n.safeToRemove();
                }),
                l.setOptions({
                  ...l.options,
                  onExitComplete() {
                    return n.safeToRemove();
                  },
                })),
              (On.hasEverUpdated = !0);
          }),
          (e.prototype.getSnapshotBeforeUpdate = function (n) {
            const r = this;
            const o = this.props;
            const i = o.layoutDependency;
            const a = o.visualElement;
            const s = o.drag;
            const l = o.isPresent;
            const u = a.projection;
            return (
              u &&
                ((u.isPresent = l),
                s || n.layoutDependency !== i || i === void 0
                  ? u.willUpdate()
                  : this.safeToRemove(),
                n.isPresent !== l &&
                  (l
                    ? u.promote()
                    : u.relegate() ||
                      te.postRender(() => {
                        let c;
                        (!((c = u.getStack()) === null || c === void 0) &&
                          c.members.length) ||
                          r.safeToRemove();
                      }))),
              null
            );
          }),
          (e.prototype.componentDidUpdate = function () {
            const n = this.props.visualElement.projection;
            n &&
              (n.root.didUpdate(),
              !n.currentAnimation && n.isLead() && this.safeToRemove());
          }),
          (e.prototype.componentWillUnmount = function () {
            const n = this.props;
            const r = n.visualElement;
            const o = n.layoutGroup;
            const i = n.switchLayoutGroup;
            const a = r.projection;
            a &&
              (a.scheduleCheckAfterUnmount(),
              o?.group && o.group.remove(a),
              i?.deregister && i.deregister(a));
          }),
          (e.prototype.safeToRemove = function () {
            const n = this.props.safeToRemove;
            n?.();
          }),
          (e.prototype.render = function () {
            return null;
          }),
          e
        );
      })(g.Component)),
      (Jp = {
        borderRadius: {
          ...yn,
          applyTo: [
            'borderTopLeftRadius',
            'borderTopRightRadius',
            'borderBottomLeftRadius',
            'borderBottomRightRadius',
          ],
        },
        borderTopLeftRadius: yn,
        borderTopRightRadius: yn,
        borderBottomLeftRadius: yn,
        borderBottomRightRadius: yn,
        boxShadow: hg,
      });
  });
  let vg;
  const Zx = v(() => {
    Jx(), (vg = { measureLayout: Qx });
  });
  function $x(t, e, n) {
    n === void 0 && (n = {});
    const r = ce(t) ? t : jn(t);
    return (
      Nl('', r, e, n),
      {
        stop() {
          return r.stop();
        },
        isAnimating() {
          return r.isAnimating();
        },
      }
    );
  }
  const tO = v(() => {
    bi(), nn(), yi();
  });
  function eO(t, e, n, r, o, i) {
    let a;
    let s;
    let l;
    let u;
    o
      ? ((t.opacity = dt(
          0,
          (a = n.opacity) !== null && a !== void 0 ? a : 1,
          yg(r)
        )),
        (t.opacityExit = dt(
          (s = e.opacity) !== null && s !== void 0 ? s : 1,
          0,
          bg(r)
        )))
      : i &&
        (t.opacity = dt(
          (l = e.opacity) !== null && l !== void 0 ? l : 1,
          (u = n.opacity) !== null && u !== void 0 ? u : 1,
          r
        ));
    for (let c = 0; c < gg; c++) {
      const f = 'border'.concat(ws[c], 'Radius');
      let p = Zp(e, f);
      let d = Zp(n, f);
      if (!(p === void 0 && d === void 0)) {
        p || (p = 0), d || (d = 0);
        const h = p === 0 || d === 0 || xs(p) === xs(d);
        h
          ? ((t[f] = Math.max(dt(Es(p), Es(d), r), 0)),
            (Zt.test(d) || Zt.test(p)) && (t[f] += '%'))
          : (t[f] = d);
      }
    }
    (e.rotate || n.rotate) && (t.rotate = dt(e.rotate || 0, n.rotate || 0, r));
  }
  function Zp(t, e) {
    let n;
    return (n = t[e]) !== null && n !== void 0 ? n : t.borderRadius;
  }
  function $p(t, e, n) {
    return function (r) {
      return r < t ? 0 : r > e ? 1 : n(Ln(t, e, r));
    };
  }
  let ws;
  let gg;
  let Es;
  let xs;
  let yg;
  let bg;
  const nO = v(() => {
    Ht(),
      wt(),
      (ws = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight']),
      (gg = ws.length),
      (Es = function (t) {
        return typeof t === 'string' ? parseFloat(t) : t;
      }),
      (xs = function (t) {
        return typeof t === 'number' || U.test(t);
      }),
      (yg = $p(0, 0.5, Go)),
      (bg = $p(0.5, 0.95, vi));
  });
  function tf(t, e) {
    (t.min = e.min), (t.max = e.max);
  }
  function Qt(t, e) {
    tf(t.x, e.x), tf(t.y, e.y);
  }
  const rO = v(() => {});
  function ef(t, e, n, r, o) {
    return (
      (t -= e), (t = Qo(t, 1 / n, r)), o !== void 0 && (t = Qo(t, 1 / o, r)), t
    );
  }
  function oO(t, e, n, r, o, i, a) {
    if (
      (e === void 0 && (e = 0),
      n === void 0 && (n = 1),
      r === void 0 && (r = 0.5),
      i === void 0 && (i = t),
      a === void 0 && (a = t),
      Zt.test(e))
    ) {
      e = parseFloat(e);
      const s = dt(a.min, a.max, e / 100);
      e = s - a.min;
    }
    if (typeof e === 'number') {
      let l = dt(i.min, i.max, r);
      t === i && (l -= e),
        (t.min = ef(t.min, e, n, l, o)),
        (t.max = ef(t.max, e, n, l, o));
    }
  }
  function nf(t, e, n, r, o) {
    const i = bt(n, 3);
    const a = i[0];
    const s = i[1];
    const l = i[2];
    oO(t, e[a], e[s], e[l], e.scale, r, o);
  }
  function rf(t, e, n, r) {
    nf(t.x, e, wg, n?.x, r?.x), nf(t.y, e, Eg, n?.y, r?.y);
  }
  let wg;
  let Eg;
  const iO = v(() => {
    G(),
      Ht(),
      wt(),
      Ul(),
      (wg = ['x', 'scaleX', 'originX']),
      (Eg = ['y', 'scaleY', 'originY']);
  });
  function of(t) {
    return t.translate === 0 && t.scale === 1;
  }
  function xg(t) {
    return of(t.x) && of(t.y);
  }
  function Og(t, e) {
    return (
      t.x.min === e.x.min &&
      t.x.max === e.x.max &&
      t.y.min === e.y.min &&
      t.y.max === e.y.max
    );
  }
  const aO = v(() => {});
  let Sg;
  const sO = v(() => {
    jl(),
      (Sg = (function () {
        function t() {
          this.members = [];
        }
        return (
          (t.prototype.add = function (e) {
            Il(this.members, e), e.scheduleRender();
          }),
          (t.prototype.remove = function (e) {
            if (
              (Ll(this.members, e),
              e === this.prevLead && (this.prevLead = void 0),
              e === this.lead)
            ) {
              const n = this.members[this.members.length - 1];
              n && this.promote(n);
            }
          }),
          (t.prototype.relegate = function (e) {
            const n = this.members.findIndex((a) => e === a);
            if (n === 0) return !1;
            for (var r, o = n; o >= 0; o--) {
              const i = this.members[o];
              if (i.isPresent !== !1) {
                r = i;
                break;
              }
            }
            return r ? (this.promote(r), !0) : !1;
          }),
          (t.prototype.promote = function (e, n) {
            let r;
            const o = this.lead;
            if (
              e !== o &&
              ((this.prevLead = o), (this.lead = e), e.show(), o)
            ) {
              o.instance && o.scheduleRender(),
                e.scheduleRender(),
                (e.resumeFrom = o),
                n && (e.resumeFrom.preserveOpacity = !0),
                o.snapshot &&
                  ((e.snapshot = o.snapshot),
                  (e.snapshot.latestValues =
                    o.animationValues || o.latestValues),
                  (e.snapshot.isShared = !0)),
                !((r = e.root) === null || r === void 0) &&
                  r.isUpdating &&
                  (e.isLayoutDirty = !0);
              const i = e.options.crossfade;
              i === !1 && o.hide();
            }
          }),
          (t.prototype.exitAnimationComplete = function () {
            this.members.forEach((e) => {
              let n;
              let r;
              let o;
              let i;
              let a;
              (r = (n = e.options).onExitComplete) === null ||
                r === void 0 ||
                r.call(n),
                (a =
                  (o = e.resumingFrom) === null || o === void 0
                    ? void 0
                    : (i = o.options).onExitComplete) === null ||
                  a === void 0 ||
                  a.call(i);
            });
          }),
          (t.prototype.scheduleRender = function () {
            this.members.forEach((e) => {
              e.instance && e.scheduleRender(!1);
            });
          }),
          (t.prototype.removeLeadSnapshot = function () {
            this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
          }),
          t
        );
      })());
  });
  function af(t, e, n) {
    const r = t.x.translate / e.x;
    const o = t.y.translate / e.y;
    let i = 'translate3d('.concat(r, 'px, ').concat(o, 'px, 0) ');
    if (((i += 'scale('.concat(1 / e.x, ', ').concat(1 / e.y, ') ')), n)) {
      const a = n.rotate;
      const s = n.rotateX;
      const l = n.rotateY;
      a && (i += 'rotate('.concat(a, 'deg) ')),
        s && (i += 'rotateX('.concat(s, 'deg) ')),
        l && (i += 'rotateY('.concat(l, 'deg) '));
    }
    const u = t.x.scale * e.x;
    const c = t.y.scale * e.y;
    return (
      (i += 'scale('.concat(u, ', ').concat(c, ')')), i === Pg ? 'none' : i
    );
  }
  let Pg;
  const lO = v(() => {
    Pg = 'translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)';
  });
  let Tg;
  const uO = v(() => {
    Tg = function (t, e) {
      return t.depth - e.depth;
    };
  });
  let Cg;
  const cO = v(() => {
    jl(),
      uO(),
      (Cg = (function () {
        function t() {
          (this.children = []), (this.isDirty = !1);
        }
        return (
          (t.prototype.add = function (e) {
            Il(this.children, e), (this.isDirty = !0);
          }),
          (t.prototype.remove = function (e) {
            Ll(this.children, e), (this.isDirty = !0);
          }),
          (t.prototype.forEach = function (e) {
            this.isDirty && this.children.sort(Tg),
              (this.isDirty = !1),
              this.children.forEach(e);
          }),
          t
        );
      })());
  });
  function Ag(t) {
    const e = t.attachResizeListener;
    const n = t.defaultParent;
    const r = t.measureScroll;
    const o = t.checkIsScrollRoot;
    const i = t.resetTransform;
    return (function () {
      function a(s, l, u) {
        const c = this;
        l === void 0 && (l = {}),
          u === void 0 && (u = n?.()),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.potentialNodes = new Map()),
          (this.checkUpdateFailed = function () {
            c.isUpdating && ((c.isUpdating = !1), c.clearAllSnapshots());
          }),
          (this.updateProjection = function () {
            c.nodes.forEach(vO), c.nodes.forEach(gO);
          }),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.id = s),
          (this.latestValues = l),
          (this.root = u ? u.root || u : this),
          (this.path = u ? $t($t([], bt(u.path), !1), [u], !1) : []),
          (this.parent = u),
          (this.depth = u ? u.depth + 1 : 0),
          s && this.root.registerPotentialNode(s, this);
        for (let f = 0; f < this.path.length; f++)
          this.path[f].shouldResetTransform = !0;
        this.root === this && (this.nodes = new Cg());
      }
      return (
        (a.prototype.addEventListener = function (s, l) {
          return (
            this.eventHandlers.has(s) || this.eventHandlers.set(s, new An()),
            this.eventHandlers.get(s).add(l)
          );
        }),
        (a.prototype.notifyListeners = function (s) {
          for (var l = [], u = 1; u < arguments.length; u++)
            l[u - 1] = arguments[u];
          const c = this.eventHandlers.get(s);
          c?.notify.apply(c, $t([], bt(l), !1));
        }),
        (a.prototype.hasListeners = function (s) {
          return this.eventHandlers.has(s);
        }),
        (a.prototype.registerPotentialNode = function (s, l) {
          this.potentialNodes.set(s, l);
        }),
        (a.prototype.mount = function (s, l) {
          const u = this;
          let c;
          if ((l === void 0 && (l = !1), !this.instance)) {
            (this.isSVG = s instanceof SVGElement && s.tagName !== 'svg'),
              (this.instance = s);
            const f = this.options;
            const p = f.layoutId;
            const d = f.layout;
            const h = f.visualElement;
            if (
              (h && !h.getInstance() && h.mount(s),
              this.root.nodes.add(this),
              (c = this.parent) === null ||
                c === void 0 ||
                c.children.add(this),
              this.id && this.root.potentialNodes.delete(this.id),
              l && (d || p) && (this.isLayoutDirty = !0),
              e)
            ) {
              let m;
              const y = function () {
                return (u.root.updateBlockedByResize = !1);
              };
              e(s, () => {
                (u.root.updateBlockedByResize = !0),
                  clearTimeout(m),
                  (m = window.setTimeout(y, 250)),
                  On.hasAnimatedSinceResize &&
                    ((On.hasAnimatedSinceResize = !1), u.nodes.forEach(mO));
              });
            }
            p && this.root.registerSharedNode(p, this),
              this.options.animate !== !1 &&
                h &&
                (p || d) &&
                this.addEventListener('didUpdate', (E) => {
                  let x;
                  let b;
                  let w;
                  let O;
                  let S;
                  const M = E.delta;
                  const N = E.hasLayoutChanged;
                  const B = E.hasRelativeTargetChanged;
                  const X = E.layout;
                  if (u.isTreeAnimationBlocked()) {
                    (u.target = void 0), (u.relativeTarget = void 0);
                    return;
                  }
                  const et =
                    (b =
                      (x = u.options.transition) !== null && x !== void 0
                        ? x
                        : h.getDefaultTransition()) !== null && b !== void 0
                      ? b
                      : kg;
                  const rt = h.getProps();
                  const ht = rt.onLayoutAnimationStart;
                  const Tt = rt.onLayoutAnimationComplete;
                  const Ct = !u.targetLayout || !Og(u.targetLayout, X) || B;
                  const Ft = !N && B;
                  if (
                    (!((w = u.resumeFrom) === null || w === void 0) &&
                      w.instance) ||
                    Ft ||
                    (N && (Ct || !u.currentAnimation))
                  ) {
                    u.resumeFrom &&
                      ((u.resumingFrom = u.resumeFrom),
                      (u.resumingFrom.resumingFrom = void 0)),
                      u.setAnimationOrigin(M, Ft);
                    const St = {
                      ...Dl(et, 'layout'),
                      onPlay: ht,
                      onComplete: Tt,
                    };
                    h.shouldReduceMotion && ((St.delay = 0), (St.type = !1)),
                      u.startAnimation(St);
                  } else
                    !N && u.animationProgress === 0 && u.finishAnimation(),
                      u.isLead() &&
                        ((S = (O = u.options).onExitComplete) === null ||
                          S === void 0 ||
                          S.call(O));
                  u.targetLayout = X;
                });
          }
        }),
        (a.prototype.unmount = function () {
          let s;
          let l;
          this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this),
            (s = this.getStack()) === null || s === void 0 || s.remove(this),
            (l = this.parent) === null ||
              l === void 0 ||
              l.children.delete(this),
            (this.instance = void 0),
            tn.preRender(this.updateProjection);
        }),
        (a.prototype.blockUpdate = function () {
          this.updateManuallyBlocked = !0;
        }),
        (a.prototype.unblockUpdate = function () {
          this.updateManuallyBlocked = !1;
        }),
        (a.prototype.isUpdateBlocked = function () {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }),
        (a.prototype.isTreeAnimationBlocked = function () {
          let s;
          return (
            this.isAnimationBlocked ||
            ((s = this.parent) === null || s === void 0
              ? void 0
              : s.isTreeAnimationBlocked()) ||
            !1
          );
        }),
        (a.prototype.startUpdate = function () {
          let s;
          this.isUpdateBlocked() ||
            ((this.isUpdating = !0),
            (s = this.nodes) === null || s === void 0 || s.forEach(yO));
        }),
        (a.prototype.willUpdate = function (s) {
          let l;
          let u;
          let c;
          if ((s === void 0 && (s = !0), this.root.isUpdateBlocked())) {
            (u = (l = this.options).onExitComplete) === null ||
              u === void 0 ||
              u.call(l);
            return;
          }
          if (
            (!this.root.isUpdating && this.root.startUpdate(),
            !this.isLayoutDirty)
          ) {
            this.isLayoutDirty = !0;
            for (let f = 0; f < this.path.length; f++) {
              const p = this.path[f];
              (p.shouldResetTransform = !0), p.updateScroll();
            }
            const d = this.options;
            const h = d.layoutId;
            const m = d.layout;
            if (!(h === void 0 && !m)) {
              const y =
                (c = this.options.visualElement) === null || c === void 0
                  ? void 0
                  : c.getProps().transformTemplate;
              (this.prevTransformTemplateValue = y?.(this.latestValues, '')),
                this.updateSnapshot(),
                s && this.notifyListeners('willUpdate');
            }
          }
        }),
        (a.prototype.didUpdate = function () {
          const s = this.isUpdateBlocked();
          if (s) {
            this.unblockUpdate(),
              this.clearAllSnapshots(),
              this.nodes.forEach(sf);
            return;
          }
          this.isUpdating &&
            ((this.isUpdating = !1),
            this.potentialNodes.size &&
              (this.potentialNodes.forEach(xO), this.potentialNodes.clear()),
            this.nodes.forEach(hO),
            this.nodes.forEach(pO),
            this.nodes.forEach(fO),
            this.clearAllSnapshots(),
            Oo.update(),
            Oo.preRender(),
            Oo.render());
        }),
        (a.prototype.clearAllSnapshots = function () {
          this.nodes.forEach(dO), this.sharedNodes.forEach(bO);
        }),
        (a.prototype.scheduleUpdateProjection = function () {
          te.preRender(this.updateProjection, !1, !0);
        }),
        (a.prototype.scheduleCheckAfterUnmount = function () {
          const s = this;
          te.postRender(() => {
            s.isLayoutDirty ? s.root.didUpdate() : s.root.checkUpdateFailed();
          });
        }),
        (a.prototype.updateSnapshot = function () {
          if (!(this.snapshot || !this.instance)) {
            const s = this.measure();
            const l = this.removeTransform(this.removeElementScroll(s));
            pf(l),
              (this.snapshot = { measured: s, layout: l, latestValues: {} });
          }
        }),
        (a.prototype.updateLayout = function () {
          let s;
          if (
            this.instance &&
            (this.updateScroll(),
            !(
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty
            ))
          ) {
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l];
                u.updateScroll();
              }
            const c = this.measure();
            pf(c);
            const f = this.layout;
            (this.layout = {
              measured: c,
              actual: this.removeElementScroll(c),
            }),
              (this.layoutCorrected = Pt()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners('measure', this.layout.actual),
              (s = this.options.visualElement) === null ||
                s === void 0 ||
                s.notifyLayoutMeasure(this.layout.actual, f?.actual);
          }
        }),
        (a.prototype.updateScroll = function () {
          this.options.layoutScroll &&
            this.instance &&
            ((this.isScrollRoot = o(this.instance)),
            (this.scroll = r(this.instance)));
        }),
        (a.prototype.resetTransform = function () {
          let s;
          if (i) {
            const l = this.isLayoutDirty || this.shouldResetTransform;
            const u = this.projectionDelta && !xg(this.projectionDelta);
            const c =
              (s = this.options.visualElement) === null || s === void 0
                ? void 0
                : s.getProps().transformTemplate;
            const f = c?.(this.latestValues, '');
            const p = f !== this.prevTransformTemplateValue;
            l &&
              (u || ke(this.latestValues) || p) &&
              (i(this.instance, f),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
        }),
        (a.prototype.measure = function () {
          const s = this.options.visualElement;
          if (!s) return Pt();
          const l = s.measureViewportBox();
          const u = this.root.scroll;
          return u && (Re(l.x, u.x), Re(l.y, u.y)), l;
        }),
        (a.prototype.removeElementScroll = function (s) {
          const l = Pt();
          Qt(l, s);
          for (let u = 0; u < this.path.length; u++) {
            const c = this.path[u];
            const f = c.scroll;
            const p = c.options;
            const d = c.isScrollRoot;
            if (c !== this.root && f && p.layoutScroll) {
              if (d) {
                Qt(l, s);
                const h = this.root.scroll;
                h && (Re(l.x, -h.x), Re(l.y, -h.y));
              }
              Re(l.x, f.x), Re(l.y, f.y);
            }
          }
          return l;
        }),
        (a.prototype.applyTransform = function (s, l) {
          l === void 0 && (l = !1);
          const u = Pt();
          Qt(u, s);
          for (let c = 0; c < this.path.length; c++) {
            const f = this.path[c];
            !l &&
              f.options.layoutScroll &&
              f.scroll &&
              f !== f.root &&
              En(u, { x: -f.scroll.x, y: -f.scroll.y }),
              ke(f.latestValues) && En(u, f.latestValues);
          }
          return ke(this.latestValues) && En(u, this.latestValues), u;
        }),
        (a.prototype.removeTransform = function (s) {
          let l;
          const u = Pt();
          Qt(u, s);
          for (let c = 0; c < this.path.length; c++) {
            const f = this.path[c];
            if (f.instance && ke(f.latestValues)) {
              _v(f.latestValues) && f.updateSnapshot();
              const p = Pt();
              const d = f.measure();
              Qt(p, d),
                rf(
                  u,
                  f.latestValues,
                  (l = f.snapshot) === null || l === void 0 ? void 0 : l.layout,
                  p
                );
            }
          }
          return ke(this.latestValues) && rf(u, this.latestValues), u;
        }),
        (a.prototype.setTargetDelta = function (s) {
          (this.targetDelta = s), this.root.scheduleUpdateProjection();
        }),
        (a.prototype.setOptions = function (s) {
          let l;
          this.options = {
            ...this.options,
            ...s,
            crossfade: (l = s.crossfade) !== null && l !== void 0 ? l : !0,
          };
        }),
        (a.prototype.clearMeasurements = function () {
          (this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1);
        }),
        (a.prototype.resolveTargetDelta = function () {
          let s;
          const l = this.options;
          const u = l.layout;
          const c = l.layoutId;
          !this.layout ||
            !(u || c) ||
            (!this.targetDelta &&
              !this.relativeTarget &&
              ((this.relativeParent = this.getClosestProjectingParent()),
              this.relativeParent &&
                this.relativeParent.layout &&
                ((this.relativeTarget = Pt()),
                (this.relativeTargetOrigin = Pt()),
                Tr(
                  this.relativeTargetOrigin,
                  this.layout.actual,
                  this.relativeParent.layout.actual
                ),
                Qt(this.relativeTarget, this.relativeTargetOrigin))),
            !(!this.relativeTarget && !this.targetDelta) &&
              (this.target ||
                ((this.target = Pt()), (this.targetWithTransforms = Pt())),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              !((s = this.relativeParent) === null || s === void 0) &&
              s.target
                ? vx(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target
                  )
                : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.actual))
                    : Qt(this.target, this.layout.actual),
                  Qv(this.target, this.targetDelta))
                : Qt(this.target, this.layout.actual),
              this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                (this.relativeParent = this.getClosestProjectingParent()),
                this.relativeParent &&
                  !!this.relativeParent.resumingFrom == !!this.resumingFrom &&
                  !this.relativeParent.options.layoutScroll &&
                  this.relativeParent.target &&
                  ((this.relativeTarget = Pt()),
                  (this.relativeTargetOrigin = Pt()),
                  Tr(
                    this.relativeTargetOrigin,
                    this.target,
                    this.relativeParent.target
                  ),
                  Qt(this.relativeTarget, this.relativeTargetOrigin)))));
        }),
        (a.prototype.getClosestProjectingParent = function () {
          if (!(!this.parent || ke(this.parent.latestValues)))
            return (this.parent.relativeTarget || this.parent.targetDelta) &&
              this.parent.layout
              ? this.parent
              : this.parent.getClosestProjectingParent();
        }),
        (a.prototype.calcProjection = function () {
          let s;
          const l = this.options;
          const u = l.layout;
          const c = l.layoutId;
          if (
            ((this.isTreeAnimating = !!(
              (!((s = this.parent) === null || s === void 0) &&
                s.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !(!this.layout || !(u || c)))
          ) {
            const f = this.getLead();
            Qt(this.layoutCorrected, this.layout.actual),
              Tx(
                this.layoutCorrected,
                this.treeScale,
                this.path,
                !!this.resumingFrom || this !== f
              );
            const p = f.target;
            if (p) {
              this.projectionDelta ||
                ((this.projectionDelta = kn()),
                (this.projectionDeltaWithTransform = kn()));
              const d = this.treeScale.x;
              const h = this.treeScale.y;
              const m = this.projectionTransform;
              Pr(
                this.projectionDelta,
                this.layoutCorrected,
                p,
                this.latestValues
              ),
                (this.projectionTransform = af(
                  this.projectionDelta,
                  this.treeScale
                )),
                (this.projectionTransform !== m ||
                  this.treeScale.x !== d ||
                  this.treeScale.y !== h) &&
                  ((this.hasProjected = !0),
                  this.scheduleRender(),
                  this.notifyListeners('projectionUpdate', p));
            }
          }
        }),
        (a.prototype.hide = function () {
          this.isVisible = !1;
        }),
        (a.prototype.show = function () {
          this.isVisible = !0;
        }),
        (a.prototype.scheduleRender = function (s) {
          let l;
          let u;
          let c;
          s === void 0 && (s = !0),
            (u = (l = this.options).scheduleRender) === null ||
              u === void 0 ||
              u.call(l),
            s &&
              ((c = this.getStack()) === null ||
                c === void 0 ||
                c.scheduleRender()),
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
        }),
        (a.prototype.setAnimationOrigin = function (s, l) {
          const u = this;
          let c;
          l === void 0 && (l = !1);
          const f = this.snapshot;
          const p = f?.latestValues || {};
          const d = { ...this.latestValues };
          const h = kn();
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !l);
          const m = Pt();
          const y = f?.isShared;
          const E =
            (((c = this.getStack()) === null || c === void 0
              ? void 0
              : c.members.length) || 0) <= 1;
          const x = !!(
            y &&
            !E &&
            this.options.crossfade === !0 &&
            !this.path.some(EO)
          );
          (this.animationProgress = 0),
            (this.mixTargetDelta = function (b) {
              let w;
              const O = b / 1e3;
              lf(h.x, s.x, O),
                lf(h.y, s.y, O),
                u.setTargetDelta(h),
                u.relativeTarget &&
                  u.relativeTargetOrigin &&
                  u.layout &&
                  !((w = u.relativeParent) === null || w === void 0) &&
                  w.layout &&
                  (Tr(m, u.layout.actual, u.relativeParent.layout.actual),
                  wO(u.relativeTarget, u.relativeTargetOrigin, m, O)),
                y &&
                  ((u.animationValues = d), eO(d, p, u.latestValues, O, x, E)),
                u.root.scheduleUpdateProjection(),
                u.scheduleRender(),
                (u.animationProgress = O);
            }),
            this.mixTargetDelta(0);
        }),
        (a.prototype.startAnimation = function (s) {
          const l = this;
          let u;
          let c;
          this.notifyListeners('animationStart'),
            (u = this.currentAnimation) === null || u === void 0 || u.stop(),
            this.resumingFrom &&
              ((c = this.resumingFrom.currentAnimation) === null ||
                c === void 0 ||
                c.stop()),
            this.pendingAnimation &&
              (tn.update(this.pendingAnimation),
              (this.pendingAnimation = void 0)),
            (this.pendingAnimation = te.update(() => {
              (On.hasAnimatedSinceResize = !0),
                (l.currentAnimation = $x(0, Os, {
                  ...s,
                  onUpdate(f) {
                    let p;
                    l.mixTargetDelta(f),
                      (p = s.onUpdate) === null || p === void 0 || p.call(s, f);
                  },
                  onComplete() {
                    let f;
                    (f = s.onComplete) === null || f === void 0 || f.call(s),
                      l.completeAnimation();
                  },
                })),
                l.resumingFrom &&
                  (l.resumingFrom.currentAnimation = l.currentAnimation),
                (l.pendingAnimation = void 0);
            }));
        }),
        (a.prototype.completeAnimation = function () {
          let s;
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0)),
            (s = this.getStack()) === null ||
              s === void 0 ||
              s.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners('animationComplete');
        }),
        (a.prototype.finishAnimation = function () {
          let s;
          this.currentAnimation &&
            ((s = this.mixTargetDelta) === null ||
              s === void 0 ||
              s.call(this, Os),
            this.currentAnimation.stop()),
            this.completeAnimation();
        }),
        (a.prototype.applyTransformsToTarget = function () {
          const s = this.getLead();
          const l = s.targetWithTransforms;
          const u = s.target;
          const c = s.layout;
          const f = s.latestValues;
          !l ||
            !u ||
            !c ||
            (Qt(l, u),
            En(l, f),
            Pr(this.projectionDeltaWithTransform, this.layoutCorrected, l, f));
        }),
        (a.prototype.registerSharedNode = function (s, l) {
          let u;
          let c;
          let f;
          this.sharedNodes.has(s) || this.sharedNodes.set(s, new Sg());
          const p = this.sharedNodes.get(s);
          p.add(l),
            l.promote({
              transition:
                (u = l.options.initialPromotionConfig) === null || u === void 0
                  ? void 0
                  : u.transition,
              preserveFollowOpacity:
                (f =
                  (c = l.options.initialPromotionConfig) === null ||
                  c === void 0
                    ? void 0
                    : c.shouldPreserveFollowOpacity) === null || f === void 0
                  ? void 0
                  : f.call(c, l),
            });
        }),
        (a.prototype.isLead = function () {
          const s = this.getStack();
          return s ? s.lead === this : !0;
        }),
        (a.prototype.getLead = function () {
          let s;
          const l = this.options.layoutId;
          return l
            ? ((s = this.getStack()) === null || s === void 0
                ? void 0
                : s.lead) || this
            : this;
        }),
        (a.prototype.getPrevLead = function () {
          let s;
          const l = this.options.layoutId;
          return l
            ? (s = this.getStack()) === null || s === void 0
              ? void 0
              : s.prevLead
            : void 0;
        }),
        (a.prototype.getStack = function () {
          const s = this.options.layoutId;
          if (s) return this.root.sharedNodes.get(s);
        }),
        (a.prototype.promote = function (s) {
          const l = s === void 0 ? {} : s;
          const u = l.needsReset;
          const c = l.transition;
          const f = l.preserveFollowOpacity;
          const p = this.getStack();
          p && p.promote(this, f),
            u && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            c && this.setOptions({ transition: c });
        }),
        (a.prototype.relegate = function () {
          const s = this.getStack();
          return s ? s.relegate(this) : !1;
        }),
        (a.prototype.resetRotation = function () {
          const s = this.options.visualElement;
          if (s) {
            for (var l = !1, u = {}, c = 0; c < Bo.length; c++) {
              const f = Bo[c];
              var p = `rotate${f}`;
              s.getStaticValue(p) &&
                ((l = !0),
                (u[p] = s.getStaticValue(p)),
                s.setStaticValue(p, 0));
            }
            if (l) {
              s?.syncRender();
              for (var p in u) s.setStaticValue(p, u[p]);
              s.scheduleRender();
            }
          }
        }),
        (a.prototype.getProjectionStyles = function (s) {
          let l;
          let u;
          let c;
          let f;
          let p;
          let d;
          s === void 0 && (s = {});
          const h = {};
          if (!this.instance || this.isSVG) return h;
          if (this.isVisible) h.visibility = '';
          else return { visibility: 'hidden' };
          const m =
            (l = this.options.visualElement) === null || l === void 0
              ? void 0
              : l.getProps().transformTemplate;
          if (this.needsReset)
            return (
              (this.needsReset = !1),
              (h.opacity = ''),
              (h.pointerEvents = go(s.pointerEvents) || ''),
              (h.transform = m ? m(this.latestValues, '') : 'none'),
              h
            );
          const y = this.getLead();
          if (!this.projectionDelta || !this.layout || !y.target) {
            const E = {};
            return (
              this.options.layoutId &&
                ((E.opacity =
                  (u = this.latestValues.opacity) !== null && u !== void 0
                    ? u
                    : 1),
                (E.pointerEvents = go(s.pointerEvents) || '')),
              this.hasProjected &&
                !ke(this.latestValues) &&
                ((E.transform = m ? m({}, '') : 'none'),
                (this.hasProjected = !1)),
              E
            );
          }
          const x = y.animationValues || y.latestValues;
          this.applyTransformsToTarget(),
            (h.transform = af(
              this.projectionDeltaWithTransform,
              this.treeScale,
              x
            )),
            m && (h.transform = m(x, h.transform));
          const b = this.projectionDelta;
          const w = b.x;
          const O = b.y;
          (h.transformOrigin = ''
            .concat(w.origin * 100, '% ')
            .concat(O.origin * 100, '% 0')),
            y.animationValues
              ? (h.opacity =
                  y === this
                    ? (f =
                        (c = x.opacity) !== null && c !== void 0
                          ? c
                          : this.latestValues.opacity) !== null && f !== void 0
                      ? f
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : x.opacityExit)
              : (h.opacity =
                  y === this
                    ? (p = x.opacity) !== null && p !== void 0
                      ? p
                      : ''
                    : (d = x.opacityExit) !== null && d !== void 0
                    ? d
                    : 0);
          for (const S in Ar)
            if (x[S] !== void 0) {
              const M = Ar[S];
              const N = M.correct;
              const B = M.applyTo;
              const X = N(x[S], y);
              if (B)
                for (let et = B.length, rt = 0; rt < et; rt++) h[B[rt]] = X;
              else h[S] = X;
            }
          return (
            this.options.layoutId &&
              (h.pointerEvents =
                y === this ? go(s.pointerEvents) || '' : 'none'),
            h
          );
        }),
        (a.prototype.clearSnapshot = function () {
          this.resumeFrom = this.snapshot = void 0;
        }),
        (a.prototype.resetTree = function () {
          this.root.nodes.forEach((s) => {
            let l;
            return (l = s.currentAnimation) === null || l === void 0
              ? void 0
              : l.stop();
          }),
            this.root.nodes.forEach(sf),
            this.root.sharedNodes.clear();
        }),
        a
      );
    })();
  }
  function pO(t) {
    t.updateLayout();
  }
  function fO(t) {
    let e;
    let n;
    let r;
    let o;
    const i =
      (n =
        (e = t.resumeFrom) === null || e === void 0 ? void 0 : e.snapshot) !==
        null && n !== void 0
        ? n
        : t.snapshot;
    if (t.isLead() && t.layout && i && t.hasListeners('didUpdate')) {
      const a = t.layout;
      const s = a.actual;
      const l = a.measured;
      t.options.animationType === 'size'
        ? se((x) => {
            const b = i.isShared ? i.measured[x] : i.layout[x];
            const w = we(b);
            (b.min = s[x].min), (b.max = b.min + w);
          })
        : t.options.animationType === 'position' &&
          se((x) => {
            const b = i.isShared ? i.measured[x] : i.layout[x];
            const w = we(s[x]);
            b.max = b.min + w;
          });
      const u = kn();
      Pr(u, s, i.layout);
      const c = kn();
      i.isShared
        ? Pr(c, t.applyTransform(l, !0), i.measured)
        : Pr(c, s, i.layout);
      const f = !xg(u);
      let p = !1;
      if (
        !t.resumeFrom &&
        ((t.relativeParent = t.getClosestProjectingParent()),
        t.relativeParent && !t.relativeParent.resumeFrom)
      ) {
        const d = t.relativeParent;
        const h = d.snapshot;
        const m = d.layout;
        if (h && m) {
          const y = Pt();
          Tr(y, i.layout, h.layout);
          const E = Pt();
          Tr(E, s, m.actual), Og(y, E) || (p = !0);
        }
      }
      t.notifyListeners('didUpdate', {
        layout: s,
        snapshot: i,
        delta: c,
        layoutDelta: u,
        hasLayoutChanged: f,
        hasRelativeTargetChanged: p,
      });
    } else
      t.isLead() &&
        ((o = (r = t.options).onExitComplete) === null ||
          o === void 0 ||
          o.call(r));
    t.options.transition = void 0;
  }
  function dO(t) {
    t.clearSnapshot();
  }
  function sf(t) {
    t.clearMeasurements();
  }
  function hO(t) {
    const e = t.options.visualElement;
    e?.getProps().onBeforeLayoutMeasure && e.notifyBeforeLayoutMeasure(),
      t.resetTransform();
  }
  function mO(t) {
    t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0);
  }
  function vO(t) {
    t.resolveTargetDelta();
  }
  function gO(t) {
    t.calcProjection();
  }
  function yO(t) {
    t.resetRotation();
  }
  function bO(t) {
    t.removeLeadSnapshot();
  }
  function lf(t, e, n) {
    (t.translate = dt(e.translate, 0, n)),
      (t.scale = dt(e.scale, 1, n)),
      (t.origin = e.origin),
      (t.originPoint = e.originPoint);
  }
  function uf(t, e, n, r) {
    (t.min = dt(e.min, n.min, r)), (t.max = dt(e.max, n.max, r));
  }
  function wO(t, e, n, r) {
    uf(t.x, e.x, n.x, r), uf(t.y, e.y, n.y, r);
  }
  function EO(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0;
  }
  function xO(t, e) {
    for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
      if (t.path[r].instance) {
        n = t.path[r];
        break;
      }
    const o = n && n !== t.root ? n.instance : document;
    const i = o.querySelector('[data-projection-id="'.concat(e, '"]'));
    i && t.mount(i, !0);
  }
  function cf(t) {
    (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
  }
  function pf(t) {
    cf(t.x), cf(t.y);
  }
  let Os;
  let kg;
  const Rg = v(() => {
    G(),
      on(),
      Ht(),
      tO(),
      Fl(),
      nO(),
      rO(),
      Ul(),
      zl(),
      iO(),
      Yv(),
      yi(),
      aO(),
      sO(),
      Gs(),
      lO(),
      qv(),
      Kv(),
      je(),
      cO(),
      wm(),
      Us(),
      (Os = 1e3),
      (kg = { duration: 0.45, ease: [0.4, 0, 0.1, 1] });
  });
  let Mg;
  const OO = v(() => {
    Rg(),
      hi(),
      (Mg = Ag({
        attachResizeListener(t, e) {
          return di(t, 'resize', e);
        },
        measureScroll() {
          return {
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          };
        },
        checkIsScrollRoot() {
          return !0;
        },
      }));
  });
  let ao;
  let Dg;
  const SO = v(() => {
    Rg(),
      OO(),
      (ao = { current: void 0 }),
      (Dg = Ag({
        measureScroll(t) {
          return { x: t.scrollLeft, y: t.scrollTop };
        },
        defaultParent() {
          if (!ao.current) {
            const t = new Mg(0, {});
            t.mount(window),
              t.setOptions({ layoutScroll: !0 }),
              (ao.current = t);
          }
          return ao.current;
        },
        resetTransform(t, e) {
          t.style.transform = e ?? 'none';
        },
        checkIsScrollRoot(t) {
          return window.getComputedStyle(t).position === 'fixed';
        },
      }));
  });
  let ff;
  let Qe;
  const PO = v(() => {
    G(),
      $1(),
      Lw(),
      jE(),
      dx(),
      Ix(),
      Xx(),
      Zx(),
      SO(),
      (ff = { ...Uv, ...bv, ...ng, ...vg }),
      (Qe = Z1((t, e) => Iw(t, e, ff, dg, Dg)));
  });
  const Yl = v(() => {
    PO();
  });
  let Ng;
  let Ig;
  let Lg;
  let jg;
  const TO = v(() => {
    Yl(),
      (Ng = Y(Qe.div)`
  position: relative;
  z-index: 2;
`),
      (Ig = Y(Qe.div)`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
`),
      Y(Qe.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
`,
      (Lg = Y.div`
  position: relative;
  box-sizing: border-box;
  background: #171c23;
  width: ${({ width: t }) => t}px;
  height: 100%;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 4px;
  border-left: ${({ theme: t }) => (t.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-bottom: ${({ theme: t }) => (t.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-top: ${({ theme: t }) => (t.base === 'dark' ? 1 : 0)}px solid #fff2;
  border-radius: 6px 0 0 6px;
  overflow: hidden;

  && {
    pre {
      background: transparent !important;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`),
      (jg = Y(Qe.div)`
  background: #143046;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 44px;
  width: 100%;
  height: 81px;
`);
  });
  let Fg;
  const CO = v(() => {
    Yl(),
      (Fg = Y(Qe.div)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  min-height: 57px;
`);
  });
  let df;
  let Vg;
  const AO = v(() => {
    Yl(),
      CO(),
      (df = {
        default: { filter: 'grayscale(1)', opacity: 0.5 },
        active: { filter: 'grayscale(0)', opacity: 1 },
      }),
      (Vg = ct(({ active: t, content: e, open: n }, r) => {
        const o = { fontSize: '0.8125rem', lineHeight: '1.1875rem' };
        return g.createElement(
          Fg,
          {
            ref: r,
            initial: 'default',
            animate: t ? 'active' : 'default',
            'aria-hidden': !t,
            variants: df,
            transition: { ease: 'easeInOut', duration: 0.6 },
          },
          e.map(({ toggle: i, snippet: a }, s) =>
            g.createElement(
              Se,
              { key: s },
              i === void 0 &&
                g.createElement(
                  _n,
                  { language: 'typescript', customStyle: o },
                  a
                ),
              i &&
                !n &&
                g.createElement(
                  _n,
                  { language: 'typescript', customStyle: o },
                  '  // ...'
                ),
              i &&
                n &&
                g.createElement(
                  Qe.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.4 },
                  },
                  g.createElement(
                    _n,
                    {
                      language: 'typescript',
                      customStyle: o,
                      codeTagProps: { style: { paddingLeft: '15px' } },
                    },
                    a
                  )
                )
            )
          )
        );
      }));
  });
  let Bg;
  const kO = v(() => {
    TO(),
      AO(),
      (Bg = ({ activeStep: t, data: e, width: n, filename: r }) => {
        const [o, i] = at([]);
        const a = It(() => e.map(() => Si()), [e]);
        const s = (c) => {
          let f = 0;
          for (let p = 0; p < c; p++)
            f -= a[p].current.getBoundingClientRect().height;
          return f;
        };
        const l = xt(() => {
          const c = e.flatMap((f, p) => {
            const d = a[p].current.getBoundingClientRect().height;
            const h = [{ yPos: s(p), backdropHeight: d, index: p, open: !1 }];
            return (
              f.length > 1 &&
                h.push({ yPos: s(p), backdropHeight: d, index: p, open: !0 }),
              h
            );
          });
          i(c);
        }, [e]);
        Wn(() => {
          const c = new ResizeObserver(() => {
            l();
          });
          return (
            a.forEach((f) => {
              c.observe(f.current);
            }),
            () => {
              c.disconnect();
            }
          );
        }, []);
        const u = { fontSize: '0.8125rem', lineHeight: '1.1875rem' };
        return g.createElement(
          Lg,
          { width: n },
          g.createElement(
            Ri,
            { theme: tu(eu.dark) },
            g.createElement(
              Ng,
              {
                animate: { y: o[t]?.yPos ?? 0 },
                transition: { ease: 'easeInOut', duration: 0.4 },
              },
              g.createElement(
                Ig,
                null,
                g.createElement(
                  _n,
                  { language: 'typescript', customStyle: u },
                  `// ${r}`
                )
              ),
              e.map((c, f) =>
                g.createElement(Vg, {
                  key: f,
                  ref: a[f],
                  active: o[t]?.index === f,
                  open: o[t]?.index > f ? !0 : o[t]?.open ?? !1,
                  content: c,
                })
              )
            )
          ),
          g.createElement(jg, {
            initial: { height: 81 },
            animate: { height: o[t]?.backdropHeight ?? 81 },
            transition: { ease: 'easeInOut', duration: 0.4 },
            className: 'syntax-highlighter-backdrop',
          })
        );
      });
  });
  let zg;
  const RO = v(() => {
    zg = Y.ul(() => ({
      display: 'flex',
      flexDirection: 'column',
      rowGap: 16,
      padding: 0,
      margin: 0,
    }));
  });
  let Ug;
  const MO = v(() => {
    RO(), (Ug = ({ children: t }) => g.createElement(zg, null, t));
  });
  let Hg;
  let Wg;
  let Yg;
  const DO = v(() => {
    (Hg = Y.li(() => ({
      display: 'flex',
      alignItems: 'flex-start',
      columnGap: 12,
    }))),
      (Wg = Y.div`
  font-family: ${({ theme: t }) => t.typography.fonts.base};
  color: ${({ theme: t }) => t.color.darker};
  font-size: 13px;
  line-height: 18px;
  margin-top: 2px;
`),
      (Yg = Y.div(({ isCompleted: t, theme: e }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px solid ${t ? 'transparent' : e.color.medium}`,
        width: 20,
        height: 20,
        flexShrink: 0,
        borderRadius: '50%',
        backgroundColor: t ? e.color.green : 'white',
        fontFamily: e.typography.fonts.base,
        fontSize: 10,
        fontWeight: 600,
        color: e.color.dark,
      })));
  });
  let To;
  const NO = v(() => {
    DO(),
      (To = ({ children: t, index: e, isCompleted: n }) =>
        g.createElement(
          Hg,
          null,
          g.createElement(
            Yg,
            { 'aria-label': n ? 'complete' : 'not complete', isCompleted: n },
            n
              ? g.createElement(Xn, {
                  width: 10,
                  height: 10,
                  icon: 'check',
                  color: 'white',
                })
              : e
          ),
          g.createElement(Wg, null, t)
        ));
  });
  function IO() {
    const [t, e] = at(null);
    return (
      W(() => {
        (async () => {
          try {
            const n = (await (await fetch('/index.json')).json()).entries[
              'example-button--primary'
            ].importPath;
            e({ data: n, error: null });
          } catch (n) {
            e({ data: null, error: n });
          }
        })();
      }, []),
      t
    );
  }
  const LO = v(() => {});
  let qg;
  const jO = v(() => {
    qg = (t, e, n) => {
      const [r, o] = at(null);
      return (
        W(() => {
          if (t) {
            const i = () => {
              n.getChannel().once(nu, () => {
                const a = e.getData('example-button--warning');
                o(a ? { data: !0, error: null } : { data: !1, error: null });
              });
            };
            return (
              e.getData('example-button--warning')
                ? o({ data: !0, error: null })
                : n.getServerChannel().on(Di, i),
              () => {
                n.getServerChannel().off(Di, i);
              }
            );
          }
        }, [t]),
        r
      );
    };
  });
  let Gg;
  const FO = v(() => {
    Gg = (t, e) => {
      const [n, r] = at(null);
      const o = document.querySelector(`.${t}`);
      return (
        W(() => {
          if (e) {
            const i = new ResizeObserver(() => {
              o &&
                r({
                  top: o.offsetTop,
                  left: o.offsetLeft,
                  height: o.offsetHeight,
                  width: o.offsetWidth,
                });
            });
            return (
              i.observe(o),
              () => {
                i.disconnect();
              }
            );
          }
        }, [t, e]),
        n
      );
    };
  });
  let Xg;
  const VO = v(() => {
    Xg =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAECCAMAAAD0GDFCAAAB0VBMVEUAAABzgo3d5eno8PFzgoxzgotzgoze5upzhIze5up0g4t2gI/s9Pnt8/ns9Prs9Pnf5+ve5ut0g4zf5upygo3e5uvf5+vf3+f////3+vzs9Pne5urq7/Lmlk33+flzgozV1teEkpouNDj6+/voo2NanTvz4dDl5ubqr3n17ebx1br19fXq6+u5wcXc4OKWmZvu7/Hf4OHuyKT9/f7a29zL0NTZ8P/s9//LzM2oy5vx8/PT7f/Y2dnl9f/nnVjM7P/39/dBtf3v8PCws7Tsu47z+//wz6+Woal8gILy8vOAzf7o6On3+Pjj4+SNmqL29PHl6OrQ48x8ipP059unsbe817O/5v+VwIPj7uTpqW6BtGtiZ2qEkZvP48tITlECnP3CyM3y28U7QUUkqv3y9fXtwprrtYS9v8Gip6vd3t/T2NuJlZ728/GUv4Pl7O/U2dvvyKTtwpluqVNko0fg9P/W7//s7O25wMbsu4+i2//t9fDuyKXrtYPc8v/t7e2xub6JjI9VWl5cv/7N1Nna6djGzNCXoqqy0advdHZITVH5/f8So/3G3cB3rl/v+f/p7vGCkJiJjY+LuneQ1P7c4eXF3cCwub+exo9wx/6stbs7QUSS4OMQAAAAGHRSTlMA34AgmXvv3yifQBDv77+vf+/Kv2BbQBAH3mwLAAAPmUlEQVR42uyZO2/bMBCADXTtY5aB20iC5KhNCyeCq2qohiMDAarBWuoCfixG4q1uszQoEDQI+m/Lh2TKiRrHboPSrb4h4ZGyadzn05l2r/fi9at+x+G8edF7Vl50Wo7k5fOaedPvRx1H0O+/7j0nnZejzbzsNejEBEO/32vQiQmGTkygdGICpRMTKJ2YQOnEBEonJlA6MYHSiQmUTkygdGIC5a+KOVuMWmY/Ys0wOgwGwNwoIxUsOgrQoF8vT0m23YRFfwgO8JfFXI03TTF4XA8346Qefk2S8W+IoVDBo6OI4/gxMRwu9V8ElrxNjaR+nNL5aYj5iAeN6CLZ5v8cN4sn+S0xkltYdCyPiUGCWTEzztUaRNpyBTRfFj1FMZpnEONL5RnEcJAu+cTtpf4FMfoedY1HSZJ8deWicfnfJMkIX+vwyovxVXUzHp1Xwdv37z8fIobHbjK2/8llSemEuYWspBmTVJnHxsV0QilvE0MkpYo1s84aYmKrScVuE2XHsYBYk5nnjeeATOC6kyppaTZxO+oXowIR8xFXjFyD0bgeM8QViwdihku8XGCcuOjThw9fDhFDAJl7zQwmNgCBBNhlCjnSkQ6JWaBIIIDVQzErACQAsZ2C8WJy4Dbwj0KNDkegxr5CsyG4CiJQ2h3LMMT4W5lv/ntuZWfL5UD/vcaDPWJSztNaTBlbTKCMkswlOpuZ/BZCpOaiIpKw1kvSJjCfRiwHdV/MBOjUPEneLBj3f8K5ojbNXsyjt7I1TOwml1aMMIGArLqM8xMTM9IDd6EXswcKFVXEmenXHgmFmWYRB+0OqBXDbLboPTEM0NQ9hNQVKOvkW9bsyWKYW85AmOdxwRx4KOeYQ8Us8e25YYlt+O3797f7xcyJxVUSEqXv0ExPr4Cbi6KIm3mUmzS5ihCQ7orhUBLDJUzq5yZ18hUhhQTEniqGw9rXHHEBh/hExZzhLWfRXlo/lRHQWXUoAYZaDDEDhHyp5MB2xcyhRvo0N3uMAvpUMTHE3i0BeepiloOK6EgxbCtmBkgRQmSLmHWds10xEuTOtwgrILtiUoD/U8wFXvrJo8QwJPJqQrhWM28Rk7dVjE9ms014MQYA9kQxCiZhi7k9qMcs8CZq8P3dux+HiSlB2ebvc0RbxAj39he7zd/d4zwr4PfEMIDUBKlp615M2iKmAFo3shDFXOGkXcxGDz3DWlOCb1zpnPtPZYeImYF0pxmb99Qmo0UM2LOhvvZBj3cDkvqCaS7MbK2VNli5ZRfWeNmpgKzqSiGKGWA8qk7+V0lyhxdJkgyq2hj7k//FAt+MRmbhGi+ubod3y9EBYnJq4fZdzOzda2IXUFFcAmoRg0SsV4BtbzuolPPIKlsVhaLAfMFYkN1EgMhsfpHiK2TFuHASx2bBbbo9UiFlNiFBiom+XmPtxpmoSFz13Czdyd9F4+qr/4s7bBgPDz/HxBGrz4P27JiuAUCouEWMnJmlwhcagurYkYNGyNR0KxQ1xBjQnG0/vSFfULPcf7fNpNCBmxZukzDFHMFgsLmI/giMZNOWaQLSLbXB6o9kSsv9FRnJoidASHYaP5QFghGzH4TYo+v/0i+YgWDEBEcnphMTLCknUXB0Yn6ycycnAAIBEARX9OnxN/9AzWFhocGqFJr5TpQwUcJECRMlTJQwUcJECRMlTNTiMKcwzTC3ycx2ecZK+/ky5Vp9WPa8TGS59wEAAADAvxzHoGjbBkXCRAkTJUyUMFHCRAkTJUyUMFHCRAkTJUyUMB/7dIwCIAxEQbSwkHSxkcBPl/vtVbyylSJq7X5h3hWGMUUYU4QxRRhTH4RZyyycljJ5hKlSdBy2kKpDmKoYDRcjVPPDTIqGm9CaHqaIXx6GSnqYhWFexJweRlvDQ1d+mN5AmL8gjCnCmCKMKcKYIowpwpgizM5+Hes4CkNRGH6N0x1ZW2Pdxs1W6dyw0chy6YIyotkyZap9hXneHZuQcEFDRppMBAl/eUVS8MlcWGgbzELbYBbaBrPQNpiFtsEstA1moa0OxpuuE7pkb47INca0KPVzi2EH0+Dc3ryhz5T2UdBnjRGozLkGn/fyMIZBwaAhs4CQRwxypNeiDDv1iy7m/wtkuFhZUqAifwTGnZ4LxkEXaXZ5nsaAtAqmlxOjYVw5X/RzMBb3z6VDfGqYOtHjnUn0gfEV4wgmlEsqTmHgGB4M45IgxmeGwVug52hs2NaBOwWTipQwhSlMSz4CRrsAMa4Q5s/fS7+Hd/xQ5QTXGo4WDCwTENXQsykgkc5MYOrD/KMsVrkd7pcX5E7t+mB+/avOWXUUuoazOozvpacDLMNOjRp6CBM0zN57H8h2DqZLcKvXeCvrZSwUTHQ5wbV3jl7BhJRicdRWe9pIp2G6vMUczNHl5k7MK8GcZeytHePIKgwNEEnzUWDQMJaBCSOYRkRqAN/cMa8EU2QsbsBIRlHfJsJLTsHAl8umOwYPhxGUalklzIeMxTxM/wVzoJHrgfEoVfTjtRPxBRgruZ+EqZMrPGaFy181Wf7xumCC9F8zXXLBqwOtgindhumy4+Vf4X7Jf3bsmLVtIArgeAW2MdYWMrxN6Dpois6LQUOHGi1yh2BK8aIigzLIeM7iKY2mlEAgZMnHzbMS5+kcgy/DwZPz/oPtJ529/EBnbiszDifdfJRZnJWtdyclcRhOdpcu4a2b8B3wT7im34gJGi+bzcO3YjdnZSSDLh3dY0668d/fk65u/qfdOO7sv7IvnMAwTWCYJjBMEximCQzTBIZpAsM0gWGawDBNYJgmMEwTGKYJDNMEhmkCwzSBYZrAME1gmCYwTLOAORsYo8DY5R6mF/jtUWDscg/TD0btUWDscg8zCvrtUWDcRjBHGxibjMC4jWA++SwTGMvcw/iDM2N2BDO++QmSBQzVd7jLEMw6uDwus6inu+praBclTRGcRlYwvhcMaXIFAxcfZL7DXtfLerPZPC/x5Wl69QCttHqtfJzBCYQwFg0HHsk4gTksM4/BrK4BWyyb4X5jwqQJVmUqh71WeQRYklfQmRDGpvOAZJzAHJaZX+zJTH8RDA4mTARNmUrALHu9laoUOhPBHJOhfcYVDMkQDMlYw6Rq9YVgvg29wDun0QUMyRAMyVjDVKoCiHQC2ExXkOpb9U/rlb5Tdxrn7c0sS5vViY5mODAEI5hj+b0g8Hoj3yEMyRCMKTOtF9jTcrHt6jBMXuKHRGnAIpVBVpSqKIoc38qieNyuLG9z9f9H86VViXdwFbde2rmX1iaiKIDjvl87FfFCRY69i7uYiF7mkoi9JXEk4DgdcOWmEMEKNS5c2YCLFt1pBR+4ET+t58xkMomjeaHmTD3/xXjntemPeTT2BmHm7typ4zh198zxP9znzzfGw+8QGYOh7o7BfNjBPjzZoZ78BPP8Pvam99SrCZjJWxn98zbGPb3vcfYqt0uW+FhiFsIs0oXTpy79a5hH897Khr0z02G2ca044hbux3bxscQshFlx1VvZ1gTMo8WeMfH93nszFaZ4nV5/SyfdKZCYxQ0mcylhyGUxGPopv5kGQ5uyeu8FZjZM1SWDQZeFYdTT7Wkw8fq74WFyxcwDU3UhGHSZ6OG9EubVh8e/hlkvYe5UYBDkvcrN3gnMnDDkMv2zso87O/jx5c6Te9iHb6oKQwO6lRnUwd5lMG+KH/+bbD/5kNZ9gZkJU7rM6vXDYV/peqm+Lt/C31BM9u714M7uNi6zn/v757u7Kn66/mX3vop761/wIzVUEpi5YF6Qy+KVMFlP396KFWa2cWXbIwzt663TO5jv4f5YmQd03C0lMPPB3L6JLn+w2MTlijHDf+J8F/v/tmEEIwlMDRIYpgkM0wSGaQLDNIFhmsAwTWCYJjBMEximCQzTBIZpAsM0gWGawDBNYJgmMEwTGKYJDNMEhmkCwzSBYVrdYLr7G8P2Xh2q8XQQVoZTCph/2wNvmLDi0t5stVqv2i1abkzsbkBQDA1oNSuwinW8YXRHTbb/KudR1EZLYCr9I5i7P8k0N0sYXBGYSv8K5m5HYFbQbBiUWRpGN1Kb5ERBkloTq3xsrAkKmMjYNMq2NrRO0kBxiT/MhExzv4VttlvU3nSYyHuTOE+np+DT1MFBvtMbC40MRvfBJikk2emJ932BWQDmWTgGs5HVzpc/wZjGsD7BaEjpROtCNAoU1vc0BINL7TKYNGOLIKLT0Y1R/GHQZc5b2Vh6dD8LygtpAMjg/HCzpUWiKGvpdF5TZtjDoMtyzxjf11nQUFSo9QEeEYLNVyHDiDVlPI353MbqAIMuS8JAEcJ0Ug9UoHRxYThLxxUJzIIw6LI0TKqKtHcxbonGYQBhEjouS2AWhAnVZJt74QjmsN2dBmO9KorhYHSEd4raAktSkcAsA1Mt3Gg3m829fLGppsE0hg+XgABoGDo6IskxDMGE3mXyYUdgloQp67aKumoqjLJg4iCy0EESHwVx39IR2oHBrc5ZRWJuEESJTwVmFszyDVxQDBOnMyoHAJa2agvgD2KXjQ2O09CmargDfCOk0wWmCvO3CnU4GlUeXeUKx442TI0TGKYJDNMEhmkCwzSBYZrAME1gmCYwTBMYpgkM0wSGaQLDNIFhmsAwTWCYJjBMEximCQzTBIZpAsM0gWGawDCtbjAfmxtF+4dqvE5ExQHPPxM7YjBhxaW92e12W+0uVpnnP8wcCRreMNPn+e+1JmFijQWG+3zkIwGzzDx/w+zPw48mzBLz/GNoqPrHHmbxef4BwQSN1NpouMHQMDJhsZJoxT7+MAvP848gwhWfGgs23+FN6lwKxGHANhLn+MvUAGZynn8zn1FGtX8J03FeqyCiYUKbOuB0Ni6nmWnH//2AP8z88/ytwfpQTqzcggO6Rjo0Dj3BDEUGwP6Vmj3MAvP8HTV6gIQ6yOZe9v1o/h9KJZqK+b+4cYdZYp4/pY0H8I5gnCthAhgmMH94nv/+nDDODzSePn7FWLpieH1fTI1hqvP8D0cw3d/N8yeRdPTinOTbNSBMWJ9PBXjDVAqb7Q0sW/x+nn8BkBKM9k7jlr4HXX4qwP5OVjeY8Xn+h6oKU5SACWKbwajIQ78PxgD5ODBRlDinuFc7mHnm+ROTA9/YcgMa64FJAoUwNDYOwNfgV/+jAzMrC6pO/Qcw+eXRYfZFcQKjHaSNhvE1+Hzs/4JROrLOuRo8Vv43mHomMEwTGKYJDNMEhmkCwzSBYZrAME1gmMYA5uInJVV6uXqYy2vs/2RlBT26fGzVnVh7pqSferZ25diqu3pWZKouZ4+tvpNn165tXZdGbb1cO3vyGINOnl+TJrrMwoVorpyQRl25egz7AYGGi8bk2+PGAAAAAElFTkSuQmCC';
  });
  let _g;
  const BO = v(() => {
    _g =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAEICAMAAABrir8vAAAB3VBMVEUAAABzgo3d5enp8fNzgox+ipjt9Pl0hItzgozf6Ovp8fZygoze5urs9Prf5+ve5ut0g4xzgoze5uve5urf5erf5uvd5+rd5erf5Or////3+vzs9Pne5urq7/L7/PxzgowuNDigZsaEkprmlk3V1tfl5ubLzM18gIKWmZu5wcX6+/vs5/Xh1e/y8vNITVHc4OLWw+jvyKTt7/Gws7TLsOH19farec22i9P39/jq6uvoo2Psu47f4OHx1br17ebz4dBBtf2WoanY2dnRueXy8fnBndrL0NPqr3nt+P/m6OljZ2r9/f47QUXa8f/U7v+Azf58ipPU2dtiZ2q/5v/Gp97a29y7lNfM6//L0NSnsbfl9f/Andqlb8k31dPDyc6lcMqkpqjnnFjz+//v8PG1i9Ob6unj4+SJjI9VWl4CnP3m+vnn3vL29PHczOtp396NmaIiqf3MsOGxgtC+v8FS29m9v8Dwzq+NmqG07+/059uxs7TtwppvdHbx9PTl7O/t7e25wMb28/GXmpvg9P+g2v/y28Wxub7rtYRcv/47QUQSo/1E19afqbDm5+iQ1P7h1e7Antqwub9wdHfpqW5wx/4xr/33+fna9/fN9fSo7eyP5+brtYPm9f+w4P/A8vFZOmLPAAAAGXRSTlMA34AghxXvOu86s2bfv3/PyqXv759wn59gUVCBVgAAD1BJREFUeNrsmT+Lo0AUwBcOrji4L/BSPV45FgqioKiFil8gpLmACOkSi6RYCKlShJR7sOV92Xszo8luJnvrwf6R7PyKxJl5M+7+5vmMyd3dt5/fJ5an/Ph290F8s+oNvn+U/R+TCVieMZn8vPsYrHuTyffrrqz8D2Ayue7Kyjex8m8JK384Vv4tYeUPx8q/Jaz84Vj5t4SVPxwr/5aw8odj5X8caSbZwnWi6uvKd0L3vdfySBHdwzUo+rryXfTfey2PqiS5j4mu2vfurfx3lR8Ds6MGnnEDNd8tw+5q9/0CGOHnstsv3FlYClAU61k4c0HT+kK2pwKWvj/D0Pd5hokz5fndnPw0vfBdyOXkPijkEdl46NdyX5C/Ikrlm5dAFlfHRA0xOvO33nZXJeBV8Ypb+2R3lCGazNvuvWO1SznqAIrESz9fvthgHdQYFNIQlsDMUKoMsUQemC9VVMBRiFNQ/EI3QMYHFzsCMFhzb8BBUviTkwhchBjw2DmoVkE+dixekA9EW35NqfJIorqYSNukKCI6Ng3tuFWRakarboH7iJgYVvQIkpSiEWT+DKeF/MfDk/a1dhwiOgC5lhSgr3Yg7+QHCx5z3X+VnTUGjhzO1YSwAPiNoZKPm0Ku1cpdwUDI9HeHlJ0t0Up7I28PaQyak/wYMmr20Mi2l+xVofK6BR6jDCDjVkWZ7kk+X76DG9CqhXQRzIWQCaozX785MirQwWEv//WaH6CAHtSrz7Fg+bqR41StOBtc89OIKmDS/sZ7KT+BVEYcCXpW3ZhHUQqaA+2AiSj9fPlTnDqSEl1glrgJagG99V6S30lhe1p+/qowBxfG8QxdKX+j+0qQjbkYIr+JVBFJtfwGrsrPYCXlx9rrfptlWdOcd0+zapoVQEZ/RnDDDbHHB+0a835kqX2Uqsifs1k2nVeE6Xk9Lc66nc5VzT/L51KEm9IVQ+T/4Vqj5VcvyQeKO/lpRZq+5kPPTh7HdBiF/NzRaAHrs3wtuu3l91fDcPnGsY/+pXxwFzXivB1QdpjB8tOI4gNnfkRwWeEzqjj9ozF81FRazwgMuOwbmc8p+xaZzycz5DPLXzh/Y/lJN4NM+VDRiofHIF+W9DOC7TqnG25+qu+5NiWkJFN+CQYq1jjeoGPI7zf1TeX3trNr8u/Jqygdg/xi3iV6V0/8036EGHbbwVGootZYmvKXKs4kxLUeV8etigzgQn4h9B+B/SUSvo18FgzM0ZCvb7lUjeMJN8egbN11iEru7JzzIdZh6270TkwxyNsp1sKUDwHOjCdcvW1l2+YbX5meT9t1je6lfKcuc4dPUvapINdyh8tPPM+jhl8Oz+SzYIqzpIrMms/siJJxyAf9sFpPVcEXStt8vpTyH+TIb1D4yATcbcoXi9p4wtX9as7D6SR1DpfyxUafvHi61mK4/Io64ufy4RBxZ5VelZ9RsxqJfICl44hrZUOA4xTQUTjOEv4T8WRhnl7AFQo18A68/ANAQvFovlg7Ycq/TSrKrPxPYZvt6HE8Xyl/LfkVUZSOXr7jFnCDZMlhP6IfUyxW/v9g5d8SVv5fdu4YBWEgiqLohATBYKYQwcJxq1m7jQTEwl/IRD/nLOHy6hcnfibix4mfifhx4mfSLf5B/P3iL6b/3n4un7h8efrfy5cyzjde0i9jAQAAAAAA4PdNU2Evw1AIEj8T8ePEz0T8OPEzET9O/EzEjxM/ky/FP15Ojc35OvaLX1tb72zW1mqv+LU92LFjF7dhKI7jQ6dCt5bCg9z94G3uItDkVUsgm7xJi8euN97UkClTlvuPa1t2zrKvOUET4yjvS8ggnAQ+UZ5F9s8kjXreN/qL4H/Z7EmatN98XQT/50b2/aznzY9F8L/Lxv+g/bdF8DdPJM162gh+aoKfU4KfnuDnlOCnJ/g5JfjpCX5OCX56gp9Tgp+e4OeU4Kcn+Dkl+Ok9Br7h0JFC+oUP1FYzV9Q1rCsad+Ka+l54R0Pc9eo1DSlmTVHcV9O/ewh8ho3wqQZUiw0caJQDDI0zsGX0ihBgmW3zvDvjAxN84Cb47nh/+FuK8+CyXefplwQV4Q/fjuYYf9v9TmAu4Su6fo5P/u7xS27g3sCRmIMp4Cf4trukwByftrAL4zvW5P2949POopF1k8uq0qKM8Bm+m09s5/gVsCR+sKdGf6X4v6tzf8aqp6Jt7FMjGvgdIBP5aNGg7tA9HM/wy9PlseOLtpKulwmfcazWif+rLvpUtKVD47XSTr0MXKtoy/HStm6ENZhi/FdjjAWqS/ghTZ+U0Wln0FcU4ftt2xjiDZOjjQ5QBocIn16gPFyMHzKKLuEftm2Xdn5u+L2++mzmO6Cw0YjxADdZ2BhfwYJpgl9rrTvW/5v5ueF3+oo+wdcNfHx21zjnInwy3WXzmU+L42vqKvVq8Rt9RZfxhxP+aXTW9MMQKmBifAVPCfhKt90Sv2RHTZpXesP9OEbIvw98q4fTfkgz3PlOrCL8phT8kJrecAu6Xppd97TesZPw307FXAczZjcsvVLfkT31ea7e3+Mdn2d7b8d96nb/7QT95rHimZ91mq1b8w0377Ra9WnngRP89AQ/pwQ/PcHPKcH/yw4d0wAAADAM8u96FnY3IIGf/BL5P/kl8n/yS+T/5JfI/8kvkf+TXyL/J79E/k9+ifyf/BL5P/kl8seOHauoDkRhHH+OrzvNZGYvzNwiLxCs1jAgTF4gXZJOkDTibdQi18Ji2S3vu96TUdEECRvYZUfJvzAcZ2x+kSHk8034z1SI+FmTXGp2uE1EPoHn6Ofxf6HXrmr2+/17xR/HZPmKmxSdsoXGE/Tz+PPf6NY04LLKD4d9Fz+OuJUkh165E+Ait8LDFAD+S08/WVzxeejiC/gkRegmT0sxxXiYQsBn/bH4MeUT/pfgs/5Y/BWtAKEicFrViFVJhVK5eqON4hkQWyljvztSQvMQ4E0JA7+jnzQZd6yyto/7+M4KViUFTpCENJaMMY4v1pgC2JItUzIz/6PcmtSQRGgFgv/y5wb/sOQO1bKt6uHnMVcYO0MHv3/sxFRqQJi/GlBENYCUIgRWIPjzzx475zZiGD/l6bJD+XWsKEdghYE/H3fm67UxYhCfHHxUAoqiy40IrCDw5xiF7yWLAXz/lc+YCX8Yf47R+LBuCF/TBj47/fOH8Xv2WCRX/N0hu49PV/yoj89ZgzZBmwl/1Lud1+UySZKPKuEO77iLv6WipXXg3jx+cSEuThvX4CStJ/wWf0T/FueOGXDnUVM5MgJASjKqnSPpbU1e19CWijqGNlREtaQCE/4A/qgU+WypNDiR8uBmHh/KEJXAjC9WQ8h2n8KE7/G/JS30dRDifNGnpeBf+z84/mP3n537d00eCAM4TkCJ4KLjTXe8cCYdkqEunR1DlmYXQkEMDm8HlYo4Obwgbu/SH8P7t753Z/AhtbVPGzzk8nyhoU3O5UNIIvWR8PERvksRPj7CdynCx0f4LkX4+AjfpQgfH+G7FOHjI3yXInx8hO9ShF8jC/i9DuFDlvH7vE34kF38LvcJH7KL7/MW4ess4kOdDuFDlvFb3Cd8yC5+u9Ozi3/754592MOq7B9zIYWPOfW7VvHv+dPH+pP94tCYuRAKv+1x3yY+u/lEf/KbmWaAX5mOHlV2Xv2nphQ+Ir/jta3hgz4ePxCH0i2D4usbBELiV+tyz7eHD/p4/HygWhcigJ1J7Aa+0ucta/igj8fXztc59obAR1z3va49fNDH41/p2FsNfNBvce61/LYlfNDH45cfBB+Fo2i7mbN5GDG9GQTZVLIoDzbD6LBoutmoPaphztRRs1IXhWtmJcBH8/c9znnH+0G/fhLnT9/GH4q1+gnTNF6rnVIfCcw4tCzSJBaZFo5FnCRiNzK3BT0tHeUiLF99tfgqv9XvWcR//C6+jIVUhMJ8JUyJX6htLoqN2vXXLJvqjUwzjb8zN+Uo3R2HF60F+PgsXnYe7/D4WaDKUhEyhR8wBvhrrSuEfHdHKLR3IpYMplf0aN3ZGoNv7PH4sSnQhkNNDPij4zkNo0GRlIkw+OXfIitfcL6G4Jf2p/iz1blr/nEcFPDle/xllgoV4JtfIiYRJ34j8Ev7U/znxf6tHv5QFANp3AHfHBl+/R6hEfil/Sn+aj+ZLRYvdfDNhQjwy5Idiwv2ZQ3AB/tqk/H4lbHZYl8L36yVooqfiy3mOdN9/Huwr/a6f2G6txr4ahMPZB5nVfwoFYjnzAbg39589s+UB3bouQY+m+s56WUA+KYQMyTdAPyLJyU7KcE8ZxL+JcI9ZxL+BcK+wSL8ixTFG8QqwncnwsdH+C5F+PgI36UIHx/huxTh4yN8lyL8/+3cMYvbMBTA8XBHhysHBy0HfeBmeloEHgU2aNJkI+xNGDLGoG+Rerg56039sJUcx40TSEV65/OJ9xsU2ZaWf4JIloSj+DGh+OEofkwofjiKHxOKH47ix4Tih6P4MaH44Sh+TJYYf1vVRy9rOMWFnk6vExks2sfH1xftm01RFC9N4cd68jhHAQOGHP4FJSzax8fnGUxVL4e3ALy6oPjvGT/NzuJvxvj+guK/a/w0o/gTs8ZPs5vj89zKkoMnSitZCj3BJBPH+C2Ttu3v5pyXVsBSLCP+pH5VFc7vpvDq6/FbpVhplN9uUVlrsDs8VExi3sfnEmVpcd9v3yslKf5Z/J0+id/UTuNGpzmLz/KB9PE5Wr9RGje2fVSp/BSZG7np41uVgb/V+u3YwYIsI/5Ohx47J/h49ggUMOjQpTZquC39sAdPSr99WX9/tIj4O33jma8M72EOnua8cyvWw1nfv+aYco8pP1/OkbOU+K79jfFx4ONnVqEngCODnpF+3RHFv8Rd+5vjWzjiyqQcoD2NjxKg9Ot6FP8S1zC1qfUYf91sr8WXCo5S7MYVyoCX+fgtthQfgum6qapqGDZwLX4+HPbCRe6n2vgV5SE48/HXymhwdEbxg2yLoy1cjQ8SWSpaiRmsjWpFKqVfwQ0yd9cY2X/JNJ1oS2Up/v/pzFhvbzg4uUFEKQ4/plB1qennzM2tlhaGB6hy7bdT/LeluR5n8BfX04sl+vzxPzGKH47ix4Tih6P4MaH44Sh+TCh+OIofE4ofjuLHhOKHo/gxofjhKH5MKH44ih+TmeI/JUAu/HpazeEu2QE5I5Ifqzl8eUw4kAmePN6vZvHwPfn5uiaj113y7WE1k/unhEx8vV/N5+H5joye+4/9H9E5eAp4eScvAAAAAElFTkSuQmCC';
  });
  let Kg;
  const zO = v(() => {
    Kg =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAADkCAMAAABHYBYkAAACClBMVEUAAAAsLCxzgo10g4wkJCSCgpDt9Pl0gYvv9/dwgI/Q0NbT1dd0g43b4+Xe5urT1tjd4uXe5uvs9Prs9PnZ3d7X2ty+wMTV2Nrd5enR1ddzg4x0gI/Q0tTV2dva3d7f5ura3N/W2NvS1dZzg4xzg43V19rQ09bZ3N3Nz9LV19j3+vz////Z3N7s9Pne5uru8vRanTv/AADmlk3Y293X2tzV2Nqoy5tFTlS817PQ48wuNDiDiIuVwIPz4dDU19nR09X17eaBtGtuqVPqr3nj7uRko0ft9fBzgozoo2PeDRGvsrTS1dfuBwnuyKSy0aeJlZ7O0dPsu45uqFPo6eqipqnLzM309fWexo/P0tT29PHq7fCYnJ/Jy83w1bp0en+LundcZGnj7+TMz9Hl5ubJzM53r1+jp6q5vb+Nk5Xa3N3wz6/059vDx8nF3cDFyMrd3+GLkJT29/hRWV/m6Ontwpr5+vra6djy28Xw8fLm7O/ByM2IjZDIy8yOk5XnnFizt7ljZ2rw9vmWmp3rtYT8/Py9wcRqcHXpqW7x1bqmr7aXoqrnnVjq7Ozb4eW5vL/Z6NjG3cDvyKTlQkXiKy/mCg32AwXuyKXh6OvN1NmfqbCpra98ipOAhYpVWl3G3b+vuL798PDi6e374eHvhoh8gIM7QUXgDBDx1LqEkZuEkprzpKbzpKU7QUTZ6dd0VV5XAAAAKnRSTlMABd/PBxDvgCAQEYJ/IN9if8+/r+/gJJFg1FAg8O/Pv7+hUr+vwLKvwcA/a0FOAAAWL0lEQVR42uzWwWrCMBzH8eYiokhFa2UHxyaMgUlOMde8gMdBX6CnnUSGsKvgsQ+9JP+W7ra6ptCW3ydNTKm3r1EjAAAAAAAAAAAAAAAAAAAAeABj9FLd0gIjx6xy5wajbfWKz8AIMYpuw9JK6X11WhF9jFg17JZQ7HJPq7+QfyyothtN0Lv9tGsD09VEDtN6GvXKLN6+bxLRgnLTOnpaazcrxg3jprtx6MYO2voHm7dtnDY7/tOhhrcmPWo/W76I9pQSvryPXzfXJ3MydLnFM25Dl0WPLe36P8Vpg3/9a3k7DNRNrqKemC0TEYJybPg6u9F5kV15Y/fLd65s/tc0Yn+kl/IwWHIS9YMNH7C8V4Y/Z3f+uEsutJ4zxsabXkZ9sHgOF16o31/254z/07U4mk1q4yN9h+JEhFIeek3tRcZbuOZ6t8ep79JShC3v21vmfOftfBg9R/pab8srry7/xVu7uB98pO/IXgROT+WNLjgP0j6OGEP6DiwSEYz6VCrcmSfZaZcynPofds7tN2koDOBTY4y37MVpvMa7sW3iCds62kK5jCKBDLu5OZCQZZQBbizGOCeRIGQTL1GjvvhgMp/0zT/S73Baa7V4ih4MGn7q6Tk9p3358Z1bW/vBGMuBXiAxD+7VCZ4Rt1PHh+pNBnOgF8bhj+UeeMCz4q4K6/uhetYcFthhiccxr97kmfFAPX1gqJ455wRW3LE27ycx4zxDbqoHh+pHRgY36MG7YG3gpmo8Q55A2P+x+vTcOjdQ9E/9yX176Y1GBTeKVRPBRq8Wab29tbBzn+NNLnxjku8RIwVh/4fqReTn+sDGdHjg1J+4vofu3n3rvqIQGoJNUslR1MNfgKg3+J9oyd9o9b7Au/TH6iVxk+sD077BUz+yj+7+sNBFfaOE+dCTesA0P5Fy2bqvt1qtHVnegUOd75VJ9cCAjvUDqd6D+9Fu6ksk07N6a6jn3VmQ5QX+dzBSo7vo6sV0XFyK+OOk9FaM4eLicifkARL1af/HpcDy5lLkLS5J6UCENCE34KRAZMkPrURyl2URCsCjR4+ucT+Rn5lJ+DZmZmaCZjGbfT89nYcfw+pMluPwgcNkV7ent/MM1LNzf4yuvlguVy31pNwuWjVV1eneWtqlhF+rrxkGX0tO8HAADKPWOSTbxi+2dY55iHoUXUFzGooSawHkjyJAxE4RQCTORTUNrUTnEIJmMYQ0uAKlrRv4ESbGLZqtA+bxxo0bt91C3mTGLAYTuASSE7gzwAechhO+l1CxzUA9M/dnaeqbdQVo6JZ6PdcpF0F8BWeajqC33KeMX6tPylNbslw3SEmWk/BraMlAvetOfujyyC66ehSNYVuiaS26IkHw+53TvDkQG0GLXBqXY6LEQappcXIDLboYh5MxTkIRDohrUc5WT+nwIZ/YXuOyz4NO9ZC+z3LhWd97BupZuR/79VjfFpL1UrNZUXKW+pKyVW6XKrqgV5QP7XJFqTrfyTOj/j5N/Rd56mnye/U78k57YUfe6ra8C42Bebp6CesyRQas8P9BfRSqoOEmEjkLK8aRfW4F4Yv9KNCbepJxqs/7ZnE++/hxloF6Ru6FbuoJSUFXoVhVFKIe17QhVfFvoNSpmRdszGkeRP1tmvqO4+/Ut+WpGoT+5y98F/TTntSb1t4Q9WnOTX0E8qA+ZlpdliRp0WyKUMxuLkIawbfCvH79mvOg/rmLeji9GsRM+9b6pf7CbheuX9/zG+pzZUwRLFfL5aai6Kb6nNJIVnXIbCmlMq5puD2wDdHV15zq6/JOEpiSjW7qVU9jvT0+k9Cmqk9rqINodvicRVyD/DJa6WWGD25d1ENike+X+ous1DvH+noD1DvG+nnVXvq7vKCjelDPO9V/kk0WuqlP9UV9GkXTEPUkxMkNLJaQBNX+3tSH3dXng4S/2uEfur5nf/faIxT1uqI0VaFI1G8JGLXahGEemjTdHtzhoAf1r3pVX6dt8+jqLs/qQZpX9VHSw7upl9Airv4z9T6s/pndGTBQz8I8MEZRD9JVGOaJ+jpki2SdV4J/DRWyuuoIeqJ+MmTQ1WM6Q34J1OOKSbzqm+i2nZcZ8zTDj0MKwt54U2//WGz1Npq2Dk1MXrx44T7N23ZXT7LhjvoN3yoD9SzNA1co6tU6rN8+1LH6KnTuOaHS+IDLZUGFVcB8Kacknet6c3F315t6WNA9bcmfQT3/CbKfPn3uFvu1zFUvHT5ahHQdBHpVTxYDm8hNvYg0fAfKDH8WvLqoJ6ffddQHfQlyPsxAPRPz9C0dsnqvt7F6HPuKkKxAWm/ieC8pQK5qX2Vv5KZC3tQbU7L8eX4Kq+e3IC9PzfPuGKFjntSjwLqoYcdO9cuiKEbQEqRxh3rIRP1wxYqb+jiCIk09eH08S3bziHr79Gp+NkHW9e98idWH+Y2X0wzUMzIPG7lUikXVzKlVnTzBU80y5Nze1AD1hQe8NyYmanZ+weC7MR4a9TTNE8G+luZ+VC8hi5hTfTzQucDvpp6LIJGmHnj+zNzNc477G3A2sQbqMasJKIF/BuqZmAcOCIywg34cP7jL3OSZ8qCQOuptmheTpDjXC90voEzyaISDa5zNWjAY/nsPbWnmyU4uW/nWFH+cZ8qrwvERDF09Q/BerpN/51UNME/jIEvzgqke9/g1niWhzOhfVh+X1qM/LOr/HfWeOHCEddSTwT4zyTboQ0d3/V31krXDZ/OfqWcb9vZj2xDTsM9kznl6D9//ll3U+/2bnJP/TT2EPUu+vaGlZ57wrDBgkjf8BAMY3LD/7v/TUEOFuzwj7hUzB4ff3PWDMyzdC1g9cb/wipF5vTD88MqFQfvcEv5az+z1wi2eAU9ShVNHhx9Z94dR9j0+uJ8IFVi4fxIqhM4Pv6//yt7d9aQNxXEcL5lPkYACM+rGxbaLZWkVCQuIiQjMsZEQtAhzddZNz7oYZ9KYgVMMl0vmhffbre90fw92rfGxiqztfh/aI22JN9+0hpqcWjnyz/2WGZ9/uVfrd77aM6b4BR/SG5zanrJbv91nWeuOM6p80Jjs92FWjXv07GHH59UgcyVZk4/ucMqXVBYd8mEunXsVGOng3dyJ0/TJuZLCWqwq3cr+VkuTx+ku3lX6kN5BF33rDLk8vsq2jmxe93/sfy7pqhz19/iEK4XdPFFqRHCIwNPO/vOW1iTFL2VlprZ0tUTz7NBC68mLe0nMffwHP5Zkuq6+Y1H/oA/TI3dHYKgDt3d4Q8uJzy/7CmOaqmkqadFystKg0Urv6EXao8YHjTHlxfXhefvIpDv1hR1Uvl1/9MlIJ674xtzYyfZlv0T5s1lFkWlVZL4oWRqz7b2ywkfaJ8tydPz56FAvHojgDT7S00PLjdCHEd47Tmqaz73hBMHYYxymFQ9A8Rozp9GaXuZ+nzHimWfeh7MbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgswbCLp5X46/IgNB9g8OhmOOFxrw4oco/nlwlEIw1pxyvGQsGhAtF3DuN0tkplcJCtwWPdyUX2D0ODnpu3jyryT6hy8ZirihP7WPD3k4/KXRZqCm5RDOE9B0Vm5JcYiqG9EiP9EiP9EjvfkiP9JdBeqRHeqRHetETkB7pL4P0V6dPxUlaPC9/6ZPol+JEvF4ukciJhszXSmONb1YSJCOaR4oN8bx5+ohFhn7XvaZ/3N/7v6WfSaXyNtMvpFIFm+lXGglum97vlcs/z6RPVByQ/tHbB723Sr+8WavpdYlsTtBQz9Ylk65LNnQ5PUnZTE+WbKavJIqZ3PZhMWNsWrrmynsOSC/0U3v76Zd3prkdCj5dox01Gk0f16Wb8Wz6tUSx/W7FTG/lhPS8vd30y+vTq1VJqta+rZ6m13d0V6afWZjN599vGOnTn/KztMGl6Uj6ovS/Dg60a9JTx0PRZE2fKxPzrN+rzM83cmb6lXI51630vL3N9KuUm6tWeXrOjelfx+OFpUI8vtBOPxunjcJ3kWx84UdevTmf/vfi4p92zqS3aSAKwAjEKoRYLggOHODkCBgs4cRSosRO7KQVGEKihKTKdogQqVJKWlqJQw8gWkpV9kUIxCqxiv/Imxm7DsSoTjIpSfs+qfbYnvHl85t547jzYB31BSh4qwelQNppkJLlFPzFHPWFJfmlgKgX4d5bfctVa6vPZXh3cCOa4+r5c7Ee/119XqVbg5hMPT1tcd11kjdpxXA36gulUsH2tiB1qPdI81LyLDSIpR318Cg02u41aPXcfTfqo8HxP9SzU1HYjrdg/H87w9U/DE77NPbfx3p+rHHPLP1/RzSJH5j+1bvMyyk/6ktuNaYezH/d2Hk9d+9f/XhwylN9lmYA0XIG1Ps0PwTqa6qq5onCNDclwCJ5ScqTvEoJk1CH+uLq6qt11Jf8qb/rZgQsPaDmB6j+5HYPkskd/tWD4qin+mrZHevhMfDh6r+rtwzC4OpVCXhHKrTsoHhm+GKiHgK9XT3QGKT6U/2rv+Yd9Xwc4OrpZE844tWHiK48VlWFKO7kTiUaLVsqJ9GL+kl5wZ/6WLv6lfmFhckN7vD3J3fs7X+sn4I/TjkYLAfEI159ndu2/ox6GPIr0Pnb9KK+sCDHfHX483/O6xtyqrCh6rl5/+pzrbK3+oejFvVEZ7uKrd6SgDzdKUT5W73pFFeXl9+v/37m5V/q5z3UP+G1XPVQb1aAeiHmvSd3WSfsZ3KgfsJWnwtOt431orI88ep5n84wSA22c85YX4etqZMEbA0DrgC/JE6FqH4zfG6Xd90xO/gboLRTfUxeiLF9wVFfgExPgHpB5r3f5mVnYJdtQWy3yk6ad4c9EeM5UA+7Ic7wQa8WDqs0uPVQUzHqtnpDa4ZgQs/HAD3fDCmavva0GJVw2Ld6CGg5XWpQnc4IcDfNpu/wLi8tL8F2ktVKpedLsyv2vJ4/MzEB6sWYd9W7ZOAdfqsKI3qGOq4u5pj6XDm4WG61oqCeJYNvcwJ0ilcPJDT7h9swAZSQM9brcBQ2eQaoE8CgF/hxHQ79qgdgpgbEHY+xuP3DrexQaqtlRz1/ZpYEqBdh3ls9yB+fmBi/wRP+iQn4IS9Di1PZiXHwHZ1iVa5FxRgVr94loaqm5KKqNclhjh70wWQkUhBQa4A/2u7dYr/Xjy6iP9XYu9U+1Rhd8AMtVP8vUD2qR/WoHtVLmwJUj+r/BapH9age1aN6aVOA6lH9v0D1qJ6Ci6cBu1B9jxwcnSUTvZfJPbxZFko9sm2D2TciC6Xe/HgAl0duA5dHpu6PnB59dh0G8xvP0VFYFP3gvm0IgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIsoXZc3iTrKvhgyN7xC6pcvDEmaHnECyks7kXVPG77AouqLLGkc2xjJLfxZYOC1R/4NVoLKP06sC+Tb1unj9O7xK4kM6Zm4GR4NaZg6geVtfbkksmnkD1oB4XSkX1qB7Vo/otAapH9age1aP6LQKqR/XC1X/4/HTsD57+CAwLqH6Q6j89G3t+4Q+ejz37FBgOUP0g1T/78uLcX7z48uxDYCjwpZ7okg/CJCSJJUTC0jqk5IuSL0pOxYgs96r++O6dXan/MQbmO9yPfQ4MBai+C/XHkjt2dqP+6fNzHjx/6tbIRRk3vOXMRHNiLBdfo/p+1AO7wX0X6scueKm/MObWiAY5VU/52WBGjPrLb1B9f+q5e7HqpzLAVLU1M0j1r/uIelOpaCGTHahWWNPyNclGpUdqm3pLSTBtFS1cewxlimLRehV2nd4q3JQocwprqCpztIFi0jr2jWmx6ag/e/v27bPrqi9dLMRm4/FSgQlOx+ONGBR4OT0pRD13L1R9lO0zwYmBqC9eZrs3sLt8szf1dXLFIDp1nyDEgDKxJIqpEXLlCiEJR70ZJooE5Am00DWi2jcIEYBWqxnQnpA8j2pWV2HPjEbyhN5Y5VdouW6rL166dKm4rvq4HFmRgRKU07KcWpFTzP0TVk4LUc/di1YPVN/ysZ+55iUR6i99o9sbyWIg8O1BT+qJngC1TESChXjCICaP9IpJzznqzTq3GbJbOOoNPW9KCdoH6LRCQiehTvV1lT4yFSjXWEOFrK9+vjTpql+5G5MK9yOSNCvHIfYb8hKcjskrEerfUV8olfpQz92LV9+i6qPlYJCH/wyUWtm+1b//VqS725dgU3zzvhf1zI1pGLzLd3WpRDfbx3puHtDsFo56OM15RzSJNdQ61PMmxICtxZ1r66pvJw6mAWY7VZBY7EfopkHLS6BexLyeuxetPht8SA8mMoFodQLMV6vRTHSx2qf6e0meQTxY5rF/uxf13Kctsqaqap5ZU+jWVW+Bec8WtKvn8HZgmJgd6h9JwBXitrOcsX51dVXyoX5+LaW7G6G8lGepc9YvzPak/uR2D5LJHeLUl6eBcjBLO/1FfioXuMOc51r9qT9vu76ZPM/2t5M3es3weR5nGYTCrFVIs109kGfFhNPCUW+0TwO44USH+sSa+jp55GT4/okzx1yzQ5pmA6wHaPSk/tTA1S+Wy+VgawrK1yHyKbArL7LSnX7Uu2F+PnnTVn++L/UwiiuPVVXxVG/pRPVUr3enHq72oj5ml9JyOsKBMwsy7wmEdfj7kzv2iu3wM60yK3NAfbUsIsN3wnyZJ3gzyXs9dPgQtI7oOrdiEcUR6Vq16OBfg6LptPineqOtw8+LiXpX/cV2zSl++qIY9dy86DRvPDhFo/5ahpFjXT/Qf5r3pkjTfBb8xe+9pXlghQtxLFaYNYvl465VqlFjArlzvUO9xYeEGjHcNE/rUM9uBTtnrF9eXi52oT4ix93Td+V5thOjnpsXnuFXqzC0w4Bv87aVY7u+J3cPvoNzHvvfL/U0uWO+mkygQWhYzxGitKXwNXPNV51YrA+vMM8d6hPEqLHr4bU8v0Y61NsX9C4z/Jgb6RH+DLApXpwl/ULUc/PC1cN+HIb2FnWU47k+lB4G+1Z/87L9Fhd2xZ7UGyTctAxmSCF6qKkYdi5vEbgSUgx7Xs9n/HPwTOikruRJvUM9dAu61QwT1sKE+4YsXe9QDwfwLk83elUfgQRvfr7BzhRSUG6kFkSo5+aFqwfKEOe5RZrvt6o52tVXp8vVaVAv/C2uf/XuyzjDchN5hfXVQEgngOZEPWCxuX4iTBt0pHnMPVB/xMpzOq2ldKpPVOhdld7UA5NLMrCSLtCAT0Ex3hCgnpsXqX4ma8u9kaURPzUxPX0NzLNSNnc1C+W+eXO5D/WAqaqm02e7RaaPHnpRc9K8zlvVOm7bwZw6J/VDjKX3nMnIpJBPNY6BeSE/2m4or4vdqheBTqRRwP+nGmC+C/WfvT/V+BkYCgalPhyqSbU8pIejwKA+0Prg/YFWYDgYlPorhFKRRgL8LFOkevOxpViqNBoIV+/y8++PsT8PyUeZ+EUu/gsGqkf1qB7VS1sIVI/qUT2qR/VbBFSP6gVwYnQWTzu0zYtdqL5HDp4ZicUy4af8M97L5B7eWgulHhG4OPKBVyOxXCYslIrLI+PyyH+5P3J6q7DrMJgXydFDZ4aeEwf3bfPkN1yBOqAk6i9ZAAAAAElFTkSuQmCC';
  });
  let xn;
  const Qg = v(() => {
    xn = 'STORYBOOK_ADDON_ONBOARDING_CHANNEL';
  });
  let Jg;
  const UO = v(() => {
    Ds(),
      sh(),
      S1(),
      hd(),
      kO(),
      MO(),
      NO(),
      LO(),
      jO(),
      FO(),
      VO(),
      BO(),
      zO(),
      Qg(),
      (Jg = ({
        onFinish: t,
        api: e,
        addonsStore: n,
        skipOnboarding: r,
        codeSnippets: o,
      }) => {
        const [i, a] = at('imports');
        const s = Mi();
        const l = { imports: 0, meta: 1, story: 2, args: 3, customStory: 4 };
        const [u, c] = at(!1);
        const [f, p] = E1();
        const d = IO();
        const h = qg(i === 'customStory', e, n);
        const m = Gg('syntax-highlighter-backdrop', i === 'customStory');
        const y = o?.language === 'javascript';
        const E = () => {
          const b = o.code[3][0].snippet;
          navigator.clipboard.writeText(
            b.replace('// Copy the code below', '')
          ),
            c(!0);
        };
        const x = xt(() => {
          e.emit(xn, {
            step: 'X:SkippedOnboarding',
            where: `HowToWriteAStoryModal:${i}`,
            type: 'telemetry',
          });
        }, [e, i]);
        return g.createElement(
          ah,
          { width: 740, height: 430, defaultOpen: !0 },
          ({ Title: b, Description: w, Close: O }) =>
            g.createElement(
              od,
              null,
              o
                ? g.createElement(Bg, {
                    activeStep: l[i] || 0,
                    data: o.code,
                    width: 480,
                    filename: o.filename,
                  })
                : null,
              i === 'customStory' &&
                m &&
                !h?.data &&
                g.createElement(
                  zt,
                  {
                    ref: f,
                    onClick: () => E(),
                    style: {
                      position: 'absolute',
                      opacity: p.width ? 1 : 0,
                      top: m.top + m.height - 45,
                      left: m.left + m.width - (p.width ?? 0) - 10,
                      zIndex: 1e3,
                    },
                  },
                  u ? 'Copied to clipboard' : 'Copy code'
                ),
              g.createElement(
                id,
                null,
                g.createElement(
                  ad,
                  null,
                  g.createElement(
                    b,
                    { asChild: !0 },
                    g.createElement(
                      sd,
                      null,
                      g.createElement(Xn, {
                        icon: 'bookmarkhollow',
                        width: 13,
                      }),
                      g.createElement('span', null, 'How to write a story')
                    )
                  ),
                  g.createElement(
                    O,
                    { onClick: x, asChild: !0 },
                    g.createElement(Xn, {
                      style: { cursor: 'pointer' },
                      icon: 'cross',
                      width: 13,
                      onClick: r,
                      color: s.color.darkest,
                    })
                  )
                ),
                g.createElement(
                  w,
                  { asChild: !0 },
                  g.createElement(
                    ld,
                    null,
                    i === 'imports' &&
                      g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(
                          'div',
                          null,
                          g.createElement('h3', null, 'Imports'),
                          y
                            ? g.createElement(
                                'p',
                                null,
                                'Import a component. In this case, the Button component.'
                              )
                            : g.createElement(
                                g.Fragment,
                                null,
                                g.createElement(
                                  'p',
                                  null,
                                  'First, import ',
                                  g.createElement(br, null, 'Meta'),
                                  ' and',
                                  ' ',
                                  g.createElement(br, null, 'StoryObj'),
                                  ' for type safety and autocompletion in TypeScript stories.'
                                ),
                                g.createElement(
                                  'p',
                                  null,
                                  'Next, import a component. In this case, the Button component.'
                                )
                              )
                        ),
                        g.createElement(
                          zt,
                          {
                            style: { marginTop: 4 },
                            onClick: () => {
                              a('meta');
                            },
                          },
                          'Next'
                        )
                      ),
                    i === 'meta' &&
                      g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(
                          'div',
                          null,
                          g.createElement('h3', null, 'Meta'),
                          g.createElement(
                            'p',
                            null,
                            "The default export, Meta, contains metadata about this component's stories. The title field (optional) controls where stories appear in the sidebar."
                          ),
                          g.createElement(fo, {
                            width: '204',
                            alt: "Title property pointing to Storybook's sidebar",
                            src: Xg,
                          })
                        ),
                        g.createElement(
                          cr,
                          null,
                          g.createElement(
                            zt,
                            {
                              variant: 'secondary',
                              onClick: () => a('imports'),
                            },
                            'Previous'
                          ),
                          g.createElement(
                            zt,
                            { onClick: () => a('story') },
                            'Next'
                          )
                        )
                      ),
                    i === 'story' &&
                      g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(
                          'div',
                          null,
                          g.createElement('h3', null, 'Story'),
                          g.createElement(
                            'p',
                            null,
                            'Each named export is a story. Its contents specify how the story is rendered in addition to other configuration options.'
                          ),
                          g.createElement(fo, {
                            width: '190',
                            alt: 'Story export pointing to the sidebar entry of the story',
                            src: _g,
                          })
                        ),
                        g.createElement(
                          cr,
                          null,
                          g.createElement(
                            zt,
                            { variant: 'secondary', onClick: () => a('meta') },
                            'Previous'
                          ),
                          g.createElement(
                            zt,
                            { onClick: () => a('args') },
                            'Next'
                          )
                        )
                      ),
                    i === 'args' &&
                      g.createElement(
                        g.Fragment,
                        null,
                        g.createElement(
                          'div',
                          null,
                          g.createElement('h3', null, 'Args'),
                          g.createElement(
                            'p',
                            null,
                            'Args are inputs that are passed to the component, which Storybook uses to render the component in different states. In React, args = props. They also specify the initial control values for the story.'
                          ),
                          g.createElement(fo, {
                            alt: 'Args mapped to their controls in Storybook',
                            width: '253',
                            src: Kg,
                          })
                        ),
                        g.createElement(
                          cr,
                          null,
                          g.createElement(
                            zt,
                            { variant: 'secondary', onClick: () => a('story') },
                            'Previous'
                          ),
                          g.createElement(
                            zt,
                            { onClick: () => a('customStory') },
                            'Next'
                          )
                        )
                      ),
                    i === 'customStory' &&
                      (h?.error
                        ? null
                        : g.createElement(
                            g.Fragment,
                            null,
                            g.createElement(
                              'div',
                              null,
                              g.createElement(
                                'h3',
                                null,
                                'Create your first story'
                              ),
                              g.createElement(
                                'p',
                                null,
                                "Now it's your turn. See how easy it is to create your first story by following these steps below."
                              ),
                              g.createElement(
                                Ug,
                                null,
                                g.createElement(
                                  To,
                                  { isCompleted: u || h?.data, index: 1 },
                                  'Copy the Warning story.'
                                ),
                                g.createElement(
                                  To,
                                  { isCompleted: h?.data, index: 2 },
                                  g.createElement(
                                    dd,
                                    null,
                                    'Open the Button story in your current working directory.'
                                  ),
                                  d?.data &&
                                    g.createElement(
                                      br,
                                      null,
                                      d.data
                                        .replaceAll('/', '/\u200B')
                                        .replaceAll('\\', '\\\u200B')
                                    )
                                ),
                                g.createElement(
                                  To,
                                  { isCompleted: h?.data, index: 3 },
                                  'Paste it at the bottom of the file and save.'
                                )
                              )
                            ),
                            g.createElement(
                              cr,
                              null,
                              g.createElement(
                                zt,
                                {
                                  variant: 'secondary',
                                  onClick: () => a('args'),
                                },
                                'Previous'
                              ),
                              h?.data
                                ? g.createElement(
                                    zt,
                                    { onClick: () => t() },
                                    'Go to story'
                                  )
                                : null
                            )
                          ))
                  )
                ),
                g.createElement(
                  ud,
                  null,
                  g.createElement(cd, null),
                  g.createElement(pd, null),
                  g.createElement(fd, null)
                )
              )
            )
        );
      });
  });
  let hf;
  let Zg;
  const HO = v(() => {
    (hf = {
      filename: 'Button.stories.js',
      language: 'typescript',
      code: [
        [{ snippet: "import { Button } from './Button';" }],
        [
          {
            snippet: `export default {
      title: 'Example/Button',
      component: Button,
      // ...
    };`,
          },
        ],
        [
          { snippet: 'export const Primary = {' },
          {
            snippet: `args: {
        primary: true,
        label: 'Click',
        background: 'red'
      }`,
            toggle: !0,
          },
          { snippet: '};' },
        ],
        [
          {
            snippet: `// Copy the code below
export const Warning = {
  args: {
    primary: true,
    label: 'Delete now',
    backgroundColor: 'red',
  }
};`,
          },
        ],
      ],
    }),
      (Zg = hf);
  });
  let mf;
  let $g;
  const WO = v(() => {
    (mf = {
      filename: 'Button.stories.ts',
      language: 'typescript',
      code: [
        [
          {
            snippet: `import type { Meta, StoryObj } from '@storybook/react';
      
      import { Button } from './Button';`,
          },
        ],
        [
          {
            snippet: `const meta: Meta<typeof Button> = {
        title: 'Example/Button',
        component: Button,
        // ...
      };
          
      export default meta;`,
          },
        ],
        [
          {
            snippet: `type Story = StoryObj<Button>;
        
      export const Primary: Story = {`,
          },
          {
            snippet: `args: {
          primary: true,
          label: 'Click',
          background: 'red'
        }`,
            toggle: !0,
          },
          { snippet: '};' },
        ],
        [
          {
            snippet: `// Copy the code below
  export const Warning: Story = {
    args: {
      primary: true,
      label: 'Delete now',
      backgroundColor: 'red',
    }
  };`,
          },
        ],
      ],
    }),
      ($g = mf);
  });
  function YO() {
    const [t, e] = at({ data: null, error: null });
    return (
      W(() => {
        (async () => {
          try {
            const n =
              (await (await fetch('/project.json')).json())?.language ===
              'javascript'
                ? Zg
                : $g;
            e({ data: n, error: null });
          } catch (n) {
            e({ data: null, error: n });
          }
        })();
      }, []),
      t
    );
  }
  const qO = v(() => {
    HO(), WO();
  });
  const ty = {};
  gf(ty, { default: () => GO });
  function GO({ api: t }) {
    const [e, n] = at(!0);
    const [r, o] = at(!1);
    const [i, a] = at('1:Welcome');
    const { data: s } = YO();
    const l = xt(() => {
      const u = new URL(window.location.href);
      const c = decodeURIComponent(u.searchParams.get('path'));
      (u.search = `?path=${c}&onboarding=false`),
        history.replaceState({}, '', u.href),
        t.setQueryParams({ onboarding: 'false' }),
        n(!1);
    }, [n, t]);
    return (
      W(() => {
        t.emit(xn, { step: '1:Welcome', type: 'telemetry' });
      }, []),
      W(() => {
        i !== '1:Welcome' && t.emit(xn, { step: i, type: 'telemetry' });
      }, [t, i]),
      W(() => {
        let u;
        return (
          i === '4:VisitNewStory' &&
            (o(!0),
            (u = window.setTimeout(() => {
              a('5:ConfigureYourProject');
            }, 2e3))),
          () => {
            clearTimeout(u);
          }
        );
      }, [i]),
      W(() => {
        const u = t.getCurrentStoryData()?.id;
        t.setQueryParams({ onboarding: 'true' }),
          u !== 'example-button--primary' &&
            t.selectStory('example-button--primary', void 0, { ref: void 0 });
      }, []),
      e
        ? g.createElement(
            Ri,
            { theme: ey },
            e &&
              r &&
              g.createElement(td, {
                numberOfPieces: 800,
                recycle: !1,
                tweenDuration: 2e4,
                onConfettiComplete: (u) => {
                  u.reset(), o(!1);
                },
              }),
            e &&
              i === '1:Welcome' &&
              g.createElement(yh, {
                onProceed: () => {
                  a('2:StorybookTour');
                },
                skipOnboarding: () => {
                  l(),
                    t.emit(xn, {
                      step: 'X:SkippedOnboarding',
                      where: 'WelcomeModal',
                      type: 'telemetry',
                    });
                },
              }),
            e &&
              (i === '2:StorybookTour' || i === '5:ConfigureYourProject') &&
              g.createElement(sb, {
                api: t,
                isFinalStep: i === '5:ConfigureYourProject',
                onFirstTourDone: () => {
                  a('3:WriteYourStory');
                },
                codeSnippets: s,
                onLastTourDone: () => {
                  t.selectStory('configure-your-project--docs'),
                    t.emit(xn, {
                      step: '6:FinishedOnboarding',
                      type: 'telemetry',
                    }),
                    l();
                },
              }),
            e &&
              i === '3:WriteYourStory' &&
              g.createElement(Jg, {
                api: t,
                codeSnippets: s,
                addonsStore: Ni,
                onFinish: () => {
                  t.selectStory('example-button--warning'),
                    a('4:VisitNewStory');
                },
                skipOnboarding: l,
              })
          )
        : null
    );
  }
  let ey;
  const XO = v(() => {
    lb(), b1(), UO(), nd(), Qg(), qO(), (ey = Zl());
  });
  const _O = Pi(() => Promise.resolve().then(() => (XO(), ty)));
  Ni.register('@storybook/addon-onboarding', async (t) => {
    const e = t.getUrlState();
    const n = e.path === '/onboarding' || e.queryParams.onboarding === 'true';
    t.once(ru, () => {
      if (
        !(
          t.getData('example-button--primary') ||
          document.getElementById('example-button--primary')
        )
      ) {
        console.warn(
          '[@storybook/addon-onboarding] It seems like you have finished the onboarding experience in Storybook! Therefore this addon is not necessary anymore and will not be loaded. You are free to remove it from your project. More info: https://github.com/storybookjs/addon-onboarding#uninstalling'
        );
        return;
      }
      if (!n || window.innerWidth < 730) return;
      t.togglePanel(!0),
        t.togglePanelPosition('bottom'),
        t.setSelectedPanel('addon-controls');
      const r = document.createElement('div');
      (r.id = 'storybook-addon-onboarding'),
        document.body.appendChild(r),
        oe.render(
          g.createElement(
            Oi,
            { fallback: g.createElement('div', null, 'Loading...') },
            g.createElement(_O, { api: t })
          ),
          r
        );
    });
  });
} catch (e) {
  console.error(
    `[Storybook] One of your manager-entries failed: ${import.meta.url}`,
    e
  );
}
