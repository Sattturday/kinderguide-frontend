(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [729],
  {
    './node_modules/@storybook/blocks/dist/Color-6VNJS4EI.mjs': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          ColorControl() {
            return ColorControl;
          },
          default() {
            return Color_default;
          },
        });
      const chunk_GWAJ4KRU = __webpack_require__(
        './node_modules/@storybook/blocks/dist/chunk-GWAJ4KRU.mjs'
      );
      const react = __webpack_require__('./node_modules/react/index.js');
      function u() {
        return (u =
          Object.assign ||
          function (e) {
            for (let r = 1; r < arguments.length; r++) {
              const t = arguments[r];
              for (const n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, r) {
        if (e == null) return {};
        let t;
        let n;
        const o = {};
        const a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          r.indexOf((t = a[n])) >= 0 || (o[t] = e[t]);
        return o;
      }
      function i(e) {
        const t = (0, react.useRef)(e);
        const n = (0, react.useRef)((e) => {
          t.current && t.current(e);
        });
        return (t.current = e), n.current;
      }
      const s = function (e, r, t) {
        return (
          void 0 === r && (r = 0),
          void 0 === t && (t = 1),
          e > t ? t : e < r ? r : e
        );
      };
      const f = function (e) {
        return 'touches' in e;
      };
      const v = function (e) {
        return (e && e.ownerDocument.defaultView) || self;
      };
      const d = function (e, r, t) {
        const n = e.getBoundingClientRect();
        const o = f(r)
          ? (function (e, r) {
              for (let t = 0; t < e.length; t++)
                if (e[t].identifier === r) return e[t];
              return e[0];
            })(r.touches, t)
          : r;
        return {
          left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
          top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height),
        };
      };
      const h = function (e) {
        !f(e) && e.preventDefault();
      };
      const m = react.memo((o) => {
        const a = o.onMove;
        const l = o.onKey;
        const s = c(o, ['onMove', 'onKey']);
        const m = (0, react.useRef)(null);
        const g = i(a);
        const p = i(l);
        const b = (0, react.useRef)(null);
        const _ = (0, react.useRef)(!1);
        const x = (0, react.useMemo)(() => {
          const e = function (e) {
            h(e),
              (f(e) ? e.touches.length > 0 : e.buttons > 0) && m.current
                ? g(d(m.current, e, b.current))
                : t(!1);
          };
          const r = function () {
            return t(!1);
          };
          function t(t) {
            const n = _.current;
            const o = v(m.current);
            const a = t ? o.addEventListener : o.removeEventListener;
            a(n ? 'touchmove' : 'mousemove', e),
              a(n ? 'touchend' : 'mouseup', r);
          }
          return [
            function (e) {
              const r = e.nativeEvent;
              const n = m.current;
              if (
                n &&
                (h(r),
                !(function (e, r) {
                  return r && !f(e);
                })(r, _.current) && n)
              ) {
                if (f(r)) {
                  _.current = !0;
                  const o = r.changedTouches || [];
                  o.length && (b.current = o[0].identifier);
                }
                n.focus(), g(d(n, r, b.current)), t(!0);
              }
            },
            function (e) {
              const r = e.which || e.keyCode;
              r < 37 ||
                r > 40 ||
                (e.preventDefault(),
                p({
                  left: r === 39 ? 0.05 : r === 37 ? -0.05 : 0,
                  top: r === 40 ? 0.05 : r === 38 ? -0.05 : 0,
                }));
            },
            t,
          ];
        }, [p, g]);
        const C = x[0];
        const E = x[1];
        const H = x[2];
        return (
          (0, react.useEffect)(() => H, [H]),
          react.createElement('div', {
            ...s,
            onTouchStart: C,
            onMouseDown: C,
            className: 'react-colorful__interactive',
            ref: m,
            onKeyDown: E,
            tabIndex: 0,
            role: 'slider',
          })
        );
      });
      const g = function (e) {
        return e.filter(Boolean).join(' ');
      };
      const p = function (r) {
        const t = r.color;
        const n = r.left;
        const o = r.top;
        const a = void 0 === o ? 0.5 : o;
        const l = g(['react-colorful__pointer', r.className]);
        return react.createElement(
          'div',
          { className: l, style: { top: `${100 * a}%`, left: `${100 * n}%` } },
          react.createElement('div', {
            className: 'react-colorful__pointer-fill',
            style: { backgroundColor: t },
          })
        );
      };
      const b = function (e, r, t) {
        return (
          void 0 === r && (r = 0),
          void 0 === t && (t = 10 ** r),
          Math.round(t * e) / t
        );
      };
      const _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
      const x = function (e) {
        return L(C(e));
      };
      var C = function (e) {
        return (
          e[0] === '#' && (e = e.substring(1)),
          e.length < 6
            ? {
                r: parseInt(e[0] + e[0], 16),
                g: parseInt(e[1] + e[1], 16),
                b: parseInt(e[2] + e[2], 16),
                a: e.length === 4 ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
              }
            : {
                r: parseInt(e.substring(0, 2), 16),
                g: parseInt(e.substring(2, 4), 16),
                b: parseInt(e.substring(4, 6), 16),
                a:
                  e.length === 8
                    ? b(parseInt(e.substring(6, 8), 16) / 255, 2)
                    : 1,
              }
        );
      };
      const E = function (e, r) {
        return void 0 === r && (r = 'deg'), Number(e) * (_[r] || 1);
      };
      const H = function (e) {
        const r =
          /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
            e
          );
        return r
          ? N({
              h: E(r[1], r[2]),
              s: Number(r[3]),
              l: Number(r[4]),
              a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1),
            })
          : { h: 0, s: 0, v: 0, a: 1 };
      };
      var N = function (e) {
        let r = e.s;
        const t = e.l;
        return {
          h: e.h,
          s:
            (r *= (t < 50 ? t : 100 - t) / 100) > 0
              ? ((2 * r) / (t + r)) * 100
              : 0,
          v: t + r,
          a: e.a,
        };
      };
      const w = function (e) {
        return K(I(e));
      };
      const y = function (e) {
        const r = e.s;
        const t = e.v;
        const n = e.a;
        const o = ((200 - r) * t) / 100;
        return {
          h: b(e.h),
          s: b(
            o > 0 && o < 200
              ? ((r * t) / 100 / (o <= 100 ? o : 200 - o)) * 100
              : 0
          ),
          l: b(o / 2),
          a: b(n, 2),
        };
      };
      const q = function (e) {
        const r = y(e);
        return `hsl(${r.h}, ${r.s}%, ${r.l}%)`;
      };
      const k = function (e) {
        const r = y(e);
        return `hsla(${r.h}, ${r.s}%, ${r.l}%, ${r.a})`;
      };
      var I = function (e) {
        let r = e.h;
        let t = e.s;
        let n = e.v;
        const o = e.a;
        (r = (r / 360) * 6), (t /= 100), (n /= 100);
        const a = Math.floor(r);
        const l = n * (1 - t);
        const u = n * (1 - (r - a) * t);
        const c = n * (1 - (1 - r + a) * t);
        const i = a % 6;
        return {
          r: b(255 * [n, u, l, l, c, n][i]),
          g: b(255 * [c, n, n, u, l, l][i]),
          b: b(255 * [l, l, c, n, n, u][i]),
          a: b(o, 2),
        };
      };
      const z = function (e) {
        const r =
          /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
            e
          );
        return r
          ? L({
              r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
              g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
              b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
              a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1),
            })
          : { h: 0, s: 0, v: 0, a: 1 };
      };
      const D = function (e) {
        const r = e.toString(16);
        return r.length < 2 ? `0${r}` : r;
      };
      var K = function (e) {
        const { r } = e;
        const t = e.g;
        const n = e.b;
        const o = e.a;
        const a = o < 1 ? D(b(255 * o)) : '';
        return `#${D(r)}${D(t)}${D(n)}${a}`;
      };
      var L = function (e) {
        const { r } = e;
        const t = e.g;
        const n = e.b;
        const o = e.a;
        const a = Math.max(r, t, n);
        const l = a - Math.min(r, t, n);
        const u = l
          ? a === r
            ? (t - n) / l
            : a === t
            ? 2 + (n - r) / l
            : 4 + (r - t) / l
          : 0;
        return {
          h: b(60 * (u < 0 ? u + 6 : u)),
          s: b(a ? (l / a) * 100 : 0),
          v: b((a / 255) * 100),
          a: o,
        };
      };
      const S = react.memo((r) => {
        const t = r.hue;
        const n = r.onChange;
        const o = g(['react-colorful__hue', r.className]);
        return react.createElement(
          'div',
          { className: o },
          react.createElement(
            m,
            {
              onMove(e) {
                n({ h: 360 * e.left });
              },
              onKey(e) {
                n({ h: s(t + 360 * e.left, 0, 360) });
              },
              'aria-label': 'Hue',
              'aria-valuenow': b(t),
              'aria-valuemax': '360',
              'aria-valuemin': '0',
            },
            react.createElement(p, {
              className: 'react-colorful__hue-pointer',
              left: t / 360,
              color: q({ h: t, s: 100, v: 100, a: 1 }),
            })
          )
        );
      });
      const T = react.memo((r) => {
        const t = r.hsva;
        const n = r.onChange;
        const o = { backgroundColor: q({ h: t.h, s: 100, v: 100, a: 1 }) };
        return react.createElement(
          'div',
          { className: 'react-colorful__saturation', style: o },
          react.createElement(
            m,
            {
              onMove(e) {
                n({ s: 100 * e.left, v: 100 - 100 * e.top });
              },
              onKey(e) {
                n({
                  s: s(t.s + 100 * e.left, 0, 100),
                  v: s(t.v - 100 * e.top, 0, 100),
                });
              },
              'aria-label': 'Color',
              'aria-valuetext': `Saturation ${b(t.s)}%, Brightness ${b(t.v)}%`,
            },
            react.createElement(p, {
              className: 'react-colorful__saturation-pointer',
              top: 1 - t.v / 100,
              left: t.s / 100,
              color: q(t),
            })
          )
        );
      });
      const F = function (e, r) {
        if (e === r) return !0;
        for (const t in e) if (e[t] !== r[t]) return !1;
        return !0;
      };
      const P = function (e, r) {
        return e.replace(/\s/g, '') === r.replace(/\s/g, '');
      };
      const X = function (e, r) {
        return e.toLowerCase() === r.toLowerCase() || F(C(e), C(r));
      };
      function Y(e, t, l) {
        const u = i(l);
        const c = (0, react.useState)(() => e.toHsva(t));
        const s = c[0];
        const f = c[1];
        const v = (0, react.useRef)({ color: t, hsva: s });
        (0, react.useEffect)(() => {
          if (!e.equal(t, v.current.color)) {
            const r = e.toHsva(t);
            (v.current = { hsva: r, color: t }), f(r);
          }
        }, [t, e]),
          (0, react.useEffect)(() => {
            let r;
            F(s, v.current.hsva) ||
              e.equal((r = e.fromHsva(s)), v.current.color) ||
              ((v.current = { hsva: s, color: r }), u(r));
          }, [s, e, u]);
        const d = (0, react.useCallback)((e) => {
          f((r) => ({ ...r, ...e }));
        }, []);
        return [s, d];
      }
      let R;
      let ColorSpace2;
      const V =
        typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
      const J = new Map();
      const Q = function (e) {
        V(() => {
          const r = e.current ? e.current.ownerDocument : document;
          if (void 0 !== r && !J.has(r)) {
            const t = r.createElement('style');
            (t.innerHTML =
              '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
              J.set(r, t);
            const n = R || __webpack_require__.nc;
            n && t.setAttribute('nonce', n), r.head.appendChild(t);
          }
        }, []);
      };
      const U = function (t) {
        const n = t.className;
        const o = t.colorModel;
        const a = t.color;
        const l = void 0 === a ? o.defaultColor : a;
        const i = t.onChange;
        const s = c(t, ['className', 'colorModel', 'color', 'onChange']);
        const f = (0, react.useRef)(null);
        Q(f);
        const v = Y(o, l, i);
        const d = v[0];
        const h = v[1];
        const m = g(['react-colorful', n]);
        return react.createElement(
          'div',
          { ...s, ref: f, className: m },
          react.createElement(T, { hsva: d, onChange: h }),
          react.createElement(S, {
            hue: d.h,
            onChange: h,
            className: 'react-colorful__last-control',
          })
        );
      };
      const W = {
        defaultColor: '000',
        toHsva: x,
        fromHsva(e) {
          return w({ h: e.h, s: e.s, v: e.v, a: 1 });
        },
        equal: X,
      };
      const ee = function (r) {
        const t = r.className;
        const n = r.hsva;
        const o = r.onChange;
        const a = {
          backgroundImage: `linear-gradient(90deg, ${k({ ...n, a: 0 })}, ${k({
            ...n,
            a: 1,
          })})`,
        };
        const l = g(['react-colorful__alpha', t]);
        const u = b(100 * n.a);
        return react.createElement(
          'div',
          { className: l },
          react.createElement('div', {
            className: 'react-colorful__alpha-gradient',
            style: a,
          }),
          react.createElement(
            m,
            {
              onMove(e) {
                o({ a: e.left });
              },
              onKey(e) {
                o({ a: s(n.a + e.left) });
              },
              'aria-label': 'Alpha',
              'aria-valuetext': `${u}%`,
              'aria-valuenow': u,
              'aria-valuemin': '0',
              'aria-valuemax': '100',
            },
            react.createElement(p, {
              className: 'react-colorful__alpha-pointer',
              left: n.a,
              color: k(n),
            })
          )
        );
      };
      const re = function (t) {
        const n = t.className;
        const o = t.colorModel;
        const a = t.color;
        const l = void 0 === a ? o.defaultColor : a;
        const i = t.onChange;
        const s = c(t, ['className', 'colorModel', 'color', 'onChange']);
        const f = (0, react.useRef)(null);
        Q(f);
        const v = Y(o, l, i);
        const d = v[0];
        const h = v[1];
        const m = g(['react-colorful', n]);
        return react.createElement(
          'div',
          { ...s, ref: f, className: m },
          react.createElement(T, { hsva: d, onChange: h }),
          react.createElement(S, { hue: d.h, onChange: h }),
          react.createElement(ee, {
            hsva: d,
            onChange: h,
            className: 'react-colorful__last-control',
          })
        );
      };
      const le = {
        defaultColor: 'hsla(0, 0%, 0%, 1)',
        toHsva: H,
        fromHsva: k,
        equal: P,
      };
      const Ee = {
        defaultColor: 'rgba(0, 0, 0, 1)',
        toHsva: z,
        fromHsva(e) {
          const r = I(e);
          return `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`;
        },
        equal: P,
      };
      const color_convert = __webpack_require__(
        './node_modules/@storybook/blocks/node_modules/color-convert/index.js'
      );
      const color_convert_default = __webpack_require__.n(color_convert);
      const throttle = __webpack_require__('./node_modules/lodash/throttle.js');
      const throttle_default = __webpack_require__.n(throttle);
      const dist = __webpack_require__(
        './node_modules/@storybook/theming/dist/index.mjs'
      );
      const components_dist = __webpack_require__(
        './node_modules/@storybook/components/dist/index.mjs'
      );
      const Wrapper = dist.zo.div({ position: 'relative', maxWidth: 250 });
      const PickerTooltip = (0, dist.zo)(components_dist.Rl)({
        position: 'absolute',
        zIndex: 1,
        top: 4,
        left: 4,
      });
      const TooltipContent = dist.zo.div({
        width: 200,
        margin: 5,
        '.react-colorful__saturation': { borderRadius: '4px 4px 0 0' },
        '.react-colorful__hue': {
          boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
        },
        '.react-colorful__last-control': { borderRadius: '0 0 4px 4px' },
      });
      const Note = (0, dist.zo)(components_dist.gu)(({ theme }) => ({
        fontFamily: theme.typography.fonts.base,
      }));
      const Swatches = dist.zo.div({
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 16px)',
        gap: 6,
        padding: 3,
        marginTop: 5,
        width: 200,
      });
      const SwatchColor = dist.zo.div(({ theme, active }) => ({
        width: 16,
        height: 16,
        boxShadow: active
          ? `${theme.appBorderColor} 0 0 0 1px inset, ${theme.textMutedColor}50 0 0 0 4px`
          : `${theme.appBorderColor} 0 0 0 1px inset`,
        borderRadius: theme.appBorderRadius,
      }));
      const Swatch = ({ value, active, onClick, style, ...props }) => {
        const backgroundImage = `linear-gradient(${value}, ${value}), url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>'), linear-gradient(#fff, #fff)`;
        return react.createElement(SwatchColor, {
          ...props,
          active,
          onClick,
          style: { ...style, backgroundImage },
        });
      };
      const Input = (0, dist.zo)(components_dist.l0.Input)(({ theme }) => ({
        width: '100%',
        paddingLeft: 30,
        paddingRight: 30,
        boxSizing: 'border-box',
        fontFamily: theme.typography.fonts.base,
      }));
      const ToggleIcon = (0, dist.zo)(components_dist.PJ)(({ theme }) => ({
        position: 'absolute',
        zIndex: 1,
        top: 6,
        right: 7,
        width: 20,
        height: 20,
        padding: 4,
        boxSizing: 'border-box',
        cursor: 'pointer',
        color: theme.input.color,
      }));
      var ColorSpace =
        (((ColorSpace2 = ColorSpace || {}).RGB = 'rgb'),
        (ColorSpace2.HSL = 'hsl'),
        (ColorSpace2.HEX = 'hex'),
        ColorSpace2);
      const COLOR_SPACES = Object.values(ColorSpace);
      const COLOR_REGEXP =
        /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/;
      const RGB_REGEXP =
        /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i;
      const HSL_REGEXP =
        /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i;
      const HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i;
      const SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i;
      const ColorPicker = {
        hex(r) {
          return react.createElement(U, { ...r, colorModel: W });
        },
        rgb(r) {
          return react.createElement(re, { ...r, colorModel: Ee });
        },
        hsl(r) {
          return react.createElement(re, { ...r, colorModel: le });
        },
      };
      const fallbackColor = {
        hex: 'transparent',
        rgb: 'rgba(0, 0, 0, 0)',
        hsl: 'hsla(0, 0%, 0%, 0)',
      };
      const stringToArgs = (value) => {
        const match = value?.match(COLOR_REGEXP);
        if (!match) return [0, 0, 0, 1];
        const [, x, y, z, a = 1] = match;
        return [x, y, z, a].map(Number);
      };
      const parseValue = (value) => {
        if (!value) return;
        let valid = !0;
        if (RGB_REGEXP.test(value)) {
          const [r, g, b, a] = stringToArgs(value);
          const [h, s, l] = color_convert_default().rgb.hsl([r, g, b]) || [
            0, 0, 0,
          ];
          return {
            valid,
            value,
            keyword: color_convert_default().rgb.keyword([r, g, b]),
            colorSpace: 'rgb',
            rgb: value,
            hsl: `hsla(${h}, ${s}%, ${l}%, ${a})`,
            hex: `#${color_convert_default().rgb.hex([r, g, b]).toLowerCase()}`,
          };
        }
        if (HSL_REGEXP.test(value)) {
          const [h, s, l, a] = stringToArgs(value);
          const [r, g, b] = color_convert_default().hsl.rgb([h, s, l]) || [
            0, 0, 0,
          ];
          return {
            valid,
            value,
            keyword: color_convert_default().hsl.keyword([h, s, l]),
            colorSpace: 'hsl',
            rgb: `rgba(${r}, ${g}, ${b}, ${a})`,
            hsl: value,
            hex: `#${color_convert_default().hsl.hex([h, s, l]).toLowerCase()}`,
          };
        }
        const plain = value.replace('#', '');
        const rgb =
          color_convert_default().keyword.rgb(plain) ||
          color_convert_default().hex.rgb(plain);
        const hsl = color_convert_default().rgb.hsl(rgb);
        let mapped = value;
        if (
          (/[^#a-f0-9]/i.test(value)
            ? (mapped = plain)
            : HEX_REGEXP.test(value) && (mapped = `#${plain}`),
          mapped.startsWith('#'))
        )
          valid = HEX_REGEXP.test(mapped);
        else
          try {
            color_convert_default().keyword.hex(mapped);
          } catch {
            valid = !1;
          }
        return {
          valid,
          value: mapped,
          keyword: color_convert_default().rgb.keyword(rgb),
          colorSpace: 'hex',
          rgb: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`,
          hsl: `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`,
          hex: mapped,
        };
      };
      const useColorInput = (initialValue, onChange) => {
        const [value, setValue] = (0, react.useState)(initialValue || '');
        const [color, setColor] = (0, react.useState)(() => parseValue(value));
        const [colorSpace, setColorSpace] = (0, react.useState)(
          color?.colorSpace || 'hex'
        );
        (0, react.useEffect)(() => {
          const nextValue = initialValue || '';
          const nextColor = parseValue(nextValue);
          setValue(nextValue),
            setColor(nextColor),
            setColorSpace(nextColor?.colorSpace || 'hex');
        }, [initialValue]);
        const realValue = (0, react.useMemo)(
          () =>
            ((value, color, colorSpace) => {
              if (!value || !color?.valid) return fallbackColor[colorSpace];
              if (colorSpace !== 'hex')
                return color?.[colorSpace] || fallbackColor[colorSpace];
              if (!color.hex.startsWith('#'))
                try {
                  return `#${color_convert_default().keyword.hex(color.hex)}`;
                } catch {
                  return fallbackColor.hex;
                }
              const short = color.hex.match(SHORTHEX_REGEXP);
              if (!short)
                return HEX_REGEXP.test(color.hex)
                  ? color.hex
                  : fallbackColor.hex;
              const [r, g, b] = short[1].split('');
              return `#${r}${r}${g}${g}${b}${b}`;
            })(value, color, colorSpace).toLowerCase(),
          [value, color, colorSpace]
        );
        const updateValue = (0, react.useCallback)(
          (update) => {
            const parsed = parseValue(update);
            const v = parsed?.value || update || '';
            setValue(v),
              v === '' && (setColor(void 0), onChange(void 0)),
              parsed &&
                (setColor(parsed),
                setColorSpace(parsed.colorSpace),
                onChange(parsed.value));
          },
          [onChange]
        );
        const cycleColorSpace = (0, react.useCallback)(() => {
          let next = COLOR_SPACES.indexOf(colorSpace) + 1;
          next >= COLOR_SPACES.length && (next = 0),
            setColorSpace(COLOR_SPACES[next]);
          const update = color?.[COLOR_SPACES[next]] || '';
          setValue(update), onChange(update);
        }, [color, colorSpace, onChange]);
        return {
          value,
          realValue,
          updateValue,
          color,
          colorSpace,
          cycleColorSpace,
        };
      };
      const id = (value) => value.replace(/\s*/, '').toLowerCase();
      var ColorControl = ({
        name,
        value: initialValue,
        onChange,
        onFocus,
        onBlur,
        presetColors,
        startOpen = !1,
      }) => {
        const throttledOnChange = (0, react.useCallback)(
          throttle_default()(onChange, 200),
          [onChange]
        );
        const {
          value,
          realValue,
          updateValue,
          color,
          colorSpace,
          cycleColorSpace,
        } = useColorInput(initialValue, throttledOnChange);
        const { presets, addPreset } = ((
          presetColors,
          currentColor,
          colorSpace
        ) => {
          const [selectedColors, setSelectedColors] = (0, react.useState)(
            currentColor?.valid ? [currentColor] : []
          );
          (0, react.useEffect)(() => {
            void 0 === currentColor && setSelectedColors([]);
          }, [currentColor]);
          const presets = (0, react.useMemo)(
            () =>
              (presetColors || [])
                .map((preset) =>
                  typeof preset === 'string'
                    ? parseValue(preset)
                    : preset.title
                    ? { ...parseValue(preset.color), keyword: preset.title }
                    : parseValue(preset.color)
                )
                .concat(selectedColors)
                .filter(Boolean)
                .slice(-27),
            [presetColors, selectedColors]
          );
          const addPreset = (0, react.useCallback)(
            (color) => {
              color?.valid &&
                (presets.some(
                  (preset) => id(preset[colorSpace]) === id(color[colorSpace])
                ) ||
                  setSelectedColors((arr) => arr.concat(color)));
            },
            [colorSpace, presets]
          );
          return { presets, addPreset };
        })(presetColors, color, colorSpace);
        const Picker = ColorPicker[colorSpace];
        return react.createElement(
          Wrapper,
          null,
          react.createElement(
            PickerTooltip,
            {
              startOpen,
              closeOnOutsideClick: !0,
              onVisibleChange: () => addPreset(color),
              tooltip: react.createElement(
                TooltipContent,
                null,
                react.createElement(Picker, {
                  color: realValue === 'transparent' ? '#000000' : realValue,
                  onChange: updateValue,
                  onFocus,
                  onBlur,
                }),
                presets.length > 0 &&
                  react.createElement(
                    Swatches,
                    null,
                    presets.map((preset, index) =>
                      react.createElement(
                        components_dist.Rl,
                        {
                          key: `${preset.value}-${index}`,
                          hasChrome: !1,
                          tooltip: react.createElement(Note, {
                            note: preset.keyword || preset.value,
                          }),
                        },
                        react.createElement(Swatch, {
                          value: preset[colorSpace],
                          active:
                            color &&
                            id(preset[colorSpace]) === id(color[colorSpace]),
                          onClick: () => updateValue(preset.value),
                        })
                      )
                    )
                  )
              ),
            },
            react.createElement(Swatch, {
              value: realValue,
              style: { margin: 4 },
            })
          ),
          react.createElement(Input, {
            id: (0, chunk_GWAJ4KRU.d)(name),
            value,
            onChange: (e) => updateValue(e.target.value),
            onFocus: (e) => e.target.select(),
            placeholder: 'Choose color...',
          }),
          value
            ? react.createElement(ToggleIcon, {
                icon: 'markup',
                onClick: cycleColorSpace,
              })
            : null
        );
      };
      var Color_default = ColorControl;
    },
    './node_modules/@storybook/blocks/node_modules/color-convert/conversions.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        const cssKeywords = __webpack_require__(
          './node_modules/@storybook/blocks/node_modules/color-name/index.js'
        );
        const reverseKeywords = {};
        for (const key of Object.keys(cssKeywords))
          reverseKeywords[cssKeywords[key]] = key;
        const convert = {
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
        module.exports = convert;
        for (const model of Object.keys(convert)) {
          if (!('channels' in convert[model]))
            throw new Error(`missing channels property: ${model}`);
          if (!('labels' in convert[model]))
            throw new Error(`missing channel labels property: ${model}`);
          if (convert[model].labels.length !== convert[model].channels)
            throw new Error(`channel and label counts mismatch: ${model}`);
          const { channels, labels } = convert[model];
          delete convert[model].channels,
            delete convert[model].labels,
            Object.defineProperty(convert[model], 'channels', {
              value: channels,
            }),
            Object.defineProperty(convert[model], 'labels', { value: labels });
        }
        (convert.rgb.hsl = function (rgb) {
          const r = rgb[0] / 255;
          const g = rgb[1] / 255;
          const b = rgb[2] / 255;
          const min = Math.min(r, g, b);
          const max = Math.max(r, g, b);
          const delta = max - min;
          let h;
          let s;
          max === min
            ? (h = 0)
            : r === max
            ? (h = (g - b) / delta)
            : g === max
            ? (h = 2 + (b - r) / delta)
            : b === max && (h = 4 + (r - g) / delta),
            (h = Math.min(60 * h, 360)),
            h < 0 && (h += 360);
          const l = (min + max) / 2;
          return (
            (s =
              max === min
                ? 0
                : l <= 0.5
                ? delta / (max + min)
                : delta / (2 - max - min)),
            [h, 100 * s, 100 * l]
          );
        }),
          (convert.rgb.hsv = function (rgb) {
            let rdif;
            let gdif;
            let bdif;
            let h;
            let s;
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const v = Math.max(r, g, b);
            const diff = v - Math.min(r, g, b);
            const diffc = function (c) {
              return (v - c) / 6 / diff + 0.5;
            };
            return (
              diff === 0
                ? ((h = 0), (s = 0))
                : ((s = diff / v),
                  (rdif = diffc(r)),
                  (gdif = diffc(g)),
                  (bdif = diffc(b)),
                  r === v
                    ? (h = bdif - gdif)
                    : g === v
                    ? (h = 1 / 3 + rdif - bdif)
                    : b === v && (h = 2 / 3 + gdif - rdif),
                  h < 0 ? (h += 1) : h > 1 && (h -= 1)),
              [360 * h, 100 * s, 100 * v]
            );
          }),
          (convert.rgb.hwb = function (rgb) {
            const r = rgb[0];
            const g = rgb[1];
            let b = rgb[2];
            const h = convert.rgb.hsl(rgb)[0];
            const w = (1 / 255) * Math.min(r, Math.min(g, b));
            return (
              (b = 1 - (1 / 255) * Math.max(r, Math.max(g, b))),
              [h, 100 * w, 100 * b]
            );
          }),
          (convert.rgb.cmyk = function (rgb) {
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const k = Math.min(1 - r, 1 - g, 1 - b);
            return [
              100 * ((1 - r - k) / (1 - k) || 0),
              100 * ((1 - g - k) / (1 - k) || 0),
              100 * ((1 - b - k) / (1 - k) || 0),
              100 * k,
            ];
          }),
          (convert.rgb.keyword = function (rgb) {
            const reversed = reverseKeywords[rgb];
            if (reversed) return reversed;
            let currentClosestKeyword;
            let currentClosestDistance = 1 / 0;
            for (const keyword of Object.keys(cssKeywords)) {
              const value = cssKeywords[keyword];
              const distance =
                ((y = value),
                ((x = rgb)[0] - y[0]) ** 2 +
                  (x[1] - y[1]) ** 2 +
                  (x[2] - y[2]) ** 2);
              distance < currentClosestDistance &&
                ((currentClosestDistance = distance),
                (currentClosestKeyword = keyword));
            }
            let x;
            let y;
            return currentClosestKeyword;
          }),
          (convert.keyword.rgb = function (keyword) {
            return cssKeywords[keyword];
          }),
          (convert.rgb.xyz = function (rgb) {
            let r = rgb[0] / 255;
            let g = rgb[1] / 255;
            let b = rgb[2] / 255;
            (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
              (g = g > 0.04045 ? ((g + 0.055) / 1.055) ** 2.4 : g / 12.92),
              (b = b > 0.04045 ? ((b + 0.055) / 1.055) ** 2.4 : b / 12.92);
            return [
              100 * (0.4124 * r + 0.3576 * g + 0.1805 * b),
              100 * (0.2126 * r + 0.7152 * g + 0.0722 * b),
              100 * (0.0193 * r + 0.1192 * g + 0.9505 * b),
            ];
          }),
          (convert.rgb.lab = function (rgb) {
            const xyz = convert.rgb.xyz(rgb);
            let x = xyz[0];
            let y = xyz[1];
            let z = xyz[2];
            (x /= 95.047),
              (y /= 100),
              (z /= 108.883),
              (x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116),
              (y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116),
              (z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116);
            return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
          }),
          (convert.hsl.rgb = function (hsl) {
            const h = hsl[0] / 360;
            const s = hsl[1] / 100;
            const l = hsl[2] / 100;
            let t2;
            let t3;
            let val;
            if (s === 0) return (val = 255 * l), [val, val, val];
            t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const t1 = 2 * l - t2;
            const rgb = [0, 0, 0];
            for (let i = 0; i < 3; i++)
              (t3 = h + (1 / 3) * -(i - 1)),
                t3 < 0 && t3++,
                t3 > 1 && t3--,
                (val =
                  6 * t3 < 1
                    ? t1 + 6 * (t2 - t1) * t3
                    : 2 * t3 < 1
                    ? t2
                    : 3 * t3 < 2
                    ? t1 + (t2 - t1) * (2 / 3 - t3) * 6
                    : t1),
                (rgb[i] = 255 * val);
            return rgb;
          }),
          (convert.hsl.hsv = function (hsl) {
            const h = hsl[0];
            let s = hsl[1] / 100;
            let l = hsl[2] / 100;
            let smin = s;
            const lmin = Math.max(l, 0.01);
            (l *= 2),
              (s *= l <= 1 ? l : 2 - l),
              (smin *= lmin <= 1 ? lmin : 2 - lmin);
            return [
              h,
              100 * (l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s)),
              100 * ((l + s) / 2),
            ];
          }),
          (convert.hsv.rgb = function (hsv) {
            const h = hsv[0] / 60;
            const s = hsv[1] / 100;
            let v = hsv[2] / 100;
            const hi = Math.floor(h) % 6;
            const f = h - Math.floor(h);
            const p = 255 * v * (1 - s);
            const q = 255 * v * (1 - s * f);
            const t = 255 * v * (1 - s * (1 - f));
            switch (((v *= 255), hi)) {
              case 0:
                return [v, t, p];
              case 1:
                return [q, v, p];
              case 2:
                return [p, v, t];
              case 3:
                return [p, q, v];
              case 4:
                return [t, p, v];
              case 5:
                return [v, p, q];
            }
          }),
          (convert.hsv.hsl = function (hsv) {
            const h = hsv[0];
            const s = hsv[1] / 100;
            const v = hsv[2] / 100;
            const vmin = Math.max(v, 0.01);
            let sl;
            let l;
            l = (2 - s) * v;
            const lmin = (2 - s) * vmin;
            return (
              (sl = s * vmin),
              (sl /= lmin <= 1 ? lmin : 2 - lmin),
              (sl = sl || 0),
              (l /= 2),
              [h, 100 * sl, 100 * l]
            );
          }),
          (convert.hwb.rgb = function (hwb) {
            const h = hwb[0] / 360;
            let wh = hwb[1] / 100;
            let bl = hwb[2] / 100;
            const ratio = wh + bl;
            let f;
            ratio > 1 && ((wh /= ratio), (bl /= ratio));
            const i = Math.floor(6 * h);
            const v = 1 - bl;
            (f = 6 * h - i), (1 & i) != 0 && (f = 1 - f);
            const n = wh + f * (v - wh);
            let r;
            let g;
            let b;
            switch (i) {
              default:
              case 6:
              case 0:
                (r = v), (g = n), (b = wh);
                break;
              case 1:
                (r = n), (g = v), (b = wh);
                break;
              case 2:
                (r = wh), (g = v), (b = n);
                break;
              case 3:
                (r = wh), (g = n), (b = v);
                break;
              case 4:
                (r = n), (g = wh), (b = v);
                break;
              case 5:
                (r = v), (g = wh), (b = n);
            }
            return [255 * r, 255 * g, 255 * b];
          }),
          (convert.cmyk.rgb = function (cmyk) {
            const c = cmyk[0] / 100;
            const m = cmyk[1] / 100;
            const y = cmyk[2] / 100;
            const k = cmyk[3] / 100;
            return [
              255 * (1 - Math.min(1, c * (1 - k) + k)),
              255 * (1 - Math.min(1, m * (1 - k) + k)),
              255 * (1 - Math.min(1, y * (1 - k) + k)),
            ];
          }),
          (convert.xyz.rgb = function (xyz) {
            const x = xyz[0] / 100;
            const y = xyz[1] / 100;
            const z = xyz[2] / 100;
            let r;
            let g;
            let b;
            return (
              (r = 3.2406 * x + -1.5372 * y + -0.4986 * z),
              (g = -0.9689 * x + 1.8758 * y + 0.0415 * z),
              (b = 0.0557 * x + -0.204 * y + 1.057 * z),
              (r = r > 0.0031308 ? 1.055 * r ** (1 / 2.4) - 0.055 : 12.92 * r),
              (g = g > 0.0031308 ? 1.055 * g ** (1 / 2.4) - 0.055 : 12.92 * g),
              (b = b > 0.0031308 ? 1.055 * b ** (1 / 2.4) - 0.055 : 12.92 * b),
              (r = Math.min(Math.max(0, r), 1)),
              (g = Math.min(Math.max(0, g), 1)),
              (b = Math.min(Math.max(0, b), 1)),
              [255 * r, 255 * g, 255 * b]
            );
          }),
          (convert.xyz.lab = function (xyz) {
            let x = xyz[0];
            let y = xyz[1];
            let z = xyz[2];
            (x /= 95.047),
              (y /= 100),
              (z /= 108.883),
              (x = x > 0.008856 ? x ** (1 / 3) : 7.787 * x + 16 / 116),
              (y = y > 0.008856 ? y ** (1 / 3) : 7.787 * y + 16 / 116),
              (z = z > 0.008856 ? z ** (1 / 3) : 7.787 * z + 16 / 116);
            return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
          }),
          (convert.lab.xyz = function (lab) {
            let x;
            let y;
            let z;
            (y = (lab[0] + 16) / 116),
              (x = lab[1] / 500 + y),
              (z = y - lab[2] / 200);
            const y2 = y ** 3;
            const x2 = x ** 3;
            const z2 = z ** 3;
            return (
              (y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787),
              (x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787),
              (z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787),
              (x *= 95.047),
              (y *= 100),
              (z *= 108.883),
              [x, y, z]
            );
          }),
          (convert.lab.lch = function (lab) {
            const l = lab[0];
            const a = lab[1];
            const b = lab[2];
            let h;
            (h = (360 * Math.atan2(b, a)) / 2 / Math.PI), h < 0 && (h += 360);
            return [l, Math.sqrt(a * a + b * b), h];
          }),
          (convert.lch.lab = function (lch) {
            const l = lch[0];
            const c = lch[1];
            const hr = (lch[2] / 360) * 2 * Math.PI;
            return [l, c * Math.cos(hr), c * Math.sin(hr)];
          }),
          (convert.rgb.ansi16 = function (args, saturation = null) {
            const [r, g, b] = args;
            let value =
              saturation === null ? convert.rgb.hsv(args)[2] : saturation;
            if (((value = Math.round(value / 50)), value === 0)) return 30;
            let ansi =
              30 +
              ((Math.round(b / 255) << 2) |
                (Math.round(g / 255) << 1) |
                Math.round(r / 255));
            return value === 2 && (ansi += 60), ansi;
          }),
          (convert.hsv.ansi16 = function (args) {
            return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
          }),
          (convert.rgb.ansi256 = function (args) {
            const r = args[0];
            const g = args[1];
            const b = args[2];
            if (r === g && g === b)
              return r < 8
                ? 16
                : r > 248
                ? 231
                : Math.round(((r - 8) / 247) * 24) + 232;
            return (
              16 +
              36 * Math.round((r / 255) * 5) +
              6 * Math.round((g / 255) * 5) +
              Math.round((b / 255) * 5)
            );
          }),
          (convert.ansi16.rgb = function (args) {
            let color = args % 10;
            if (color === 0 || color === 7)
              return (
                args > 50 && (color += 3.5),
                (color = (color / 10.5) * 255),
                [color, color, color]
              );
            const mult = 0.5 * (1 + ~~(args > 50));
            return [
              (1 & color) * mult * 255,
              ((color >> 1) & 1) * mult * 255,
              ((color >> 2) & 1) * mult * 255,
            ];
          }),
          (convert.ansi256.rgb = function (args) {
            if (args >= 232) {
              const c = 10 * (args - 232) + 8;
              return [c, c, c];
            }
            let rem;
            args -= 16;
            return [
              (Math.floor(args / 36) / 5) * 255,
              (Math.floor((rem = args % 36) / 6) / 5) * 255,
              ((rem % 6) / 5) * 255,
            ];
          }),
          (convert.rgb.hex = function (args) {
            const string = (
              ((255 & Math.round(args[0])) << 16) +
              ((255 & Math.round(args[1])) << 8) +
              (255 & Math.round(args[2]))
            )
              .toString(16)
              .toUpperCase();
            return '000000'.substring(string.length) + string;
          }),
          (convert.hex.rgb = function (args) {
            const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!match) return [0, 0, 0];
            let colorString = match[0];
            match[0].length === 3 &&
              (colorString = colorString
                .split('')
                .map((char) => char + char)
                .join(''));
            const integer = parseInt(colorString, 16);
            return [(integer >> 16) & 255, (integer >> 8) & 255, 255 & integer];
          }),
          (convert.rgb.hcg = function (rgb) {
            const r = rgb[0] / 255;
            const g = rgb[1] / 255;
            const b = rgb[2] / 255;
            const max = Math.max(Math.max(r, g), b);
            const min = Math.min(Math.min(r, g), b);
            const chroma = max - min;
            let grayscale;
            let hue;
            return (
              (grayscale = chroma < 1 ? min / (1 - chroma) : 0),
              (hue =
                chroma <= 0
                  ? 0
                  : max === r
                  ? ((g - b) / chroma) % 6
                  : max === g
                  ? 2 + (b - r) / chroma
                  : 4 + (r - g) / chroma),
              (hue /= 6),
              (hue %= 1),
              [360 * hue, 100 * chroma, 100 * grayscale]
            );
          }),
          (convert.hsl.hcg = function (hsl) {
            const s = hsl[1] / 100;
            const l = hsl[2] / 100;
            const c = l < 0.5 ? 2 * s * l : 2 * s * (1 - l);
            let f = 0;
            return (
              c < 1 && (f = (l - 0.5 * c) / (1 - c)), [hsl[0], 100 * c, 100 * f]
            );
          }),
          (convert.hsv.hcg = function (hsv) {
            const s = hsv[1] / 100;
            const v = hsv[2] / 100;
            const c = s * v;
            let f = 0;
            return c < 1 && (f = (v - c) / (1 - c)), [hsv[0], 100 * c, 100 * f];
          }),
          (convert.hcg.rgb = function (hcg) {
            const h = hcg[0] / 360;
            const c = hcg[1] / 100;
            const g = hcg[2] / 100;
            if (c === 0) return [255 * g, 255 * g, 255 * g];
            const pure = [0, 0, 0];
            const hi = (h % 1) * 6;
            const v = hi % 1;
            const w = 1 - v;
            let mg = 0;
            switch (Math.floor(hi)) {
              case 0:
                (pure[0] = 1), (pure[1] = v), (pure[2] = 0);
                break;
              case 1:
                (pure[0] = w), (pure[1] = 1), (pure[2] = 0);
                break;
              case 2:
                (pure[0] = 0), (pure[1] = 1), (pure[2] = v);
                break;
              case 3:
                (pure[0] = 0), (pure[1] = w), (pure[2] = 1);
                break;
              case 4:
                (pure[0] = v), (pure[1] = 0), (pure[2] = 1);
                break;
              default:
                (pure[0] = 1), (pure[1] = 0), (pure[2] = w);
            }
            return (
              (mg = (1 - c) * g),
              [
                255 * (c * pure[0] + mg),
                255 * (c * pure[1] + mg),
                255 * (c * pure[2] + mg),
              ]
            );
          }),
          (convert.hcg.hsv = function (hcg) {
            const c = hcg[1] / 100;
            const v = c + (hcg[2] / 100) * (1 - c);
            let f = 0;
            return v > 0 && (f = c / v), [hcg[0], 100 * f, 100 * v];
          }),
          (convert.hcg.hsl = function (hcg) {
            const c = hcg[1] / 100;
            const l = (hcg[2] / 100) * (1 - c) + 0.5 * c;
            let s = 0;
            return (
              l > 0 && l < 0.5
                ? (s = c / (2 * l))
                : l >= 0.5 && l < 1 && (s = c / (2 * (1 - l))),
              [hcg[0], 100 * s, 100 * l]
            );
          }),
          (convert.hcg.hwb = function (hcg) {
            const c = hcg[1] / 100;
            const v = c + (hcg[2] / 100) * (1 - c);
            return [hcg[0], 100 * (v - c), 100 * (1 - v)];
          }),
          (convert.hwb.hcg = function (hwb) {
            const w = hwb[1] / 100;
            const v = 1 - hwb[2] / 100;
            const c = v - w;
            let g = 0;
            return c < 1 && (g = (v - c) / (1 - c)), [hwb[0], 100 * c, 100 * g];
          }),
          (convert.apple.rgb = function (apple) {
            return [
              (apple[0] / 65535) * 255,
              (apple[1] / 65535) * 255,
              (apple[2] / 65535) * 255,
            ];
          }),
          (convert.rgb.apple = function (rgb) {
            return [
              (rgb[0] / 255) * 65535,
              (rgb[1] / 255) * 65535,
              (rgb[2] / 255) * 65535,
            ];
          }),
          (convert.gray.rgb = function (args) {
            return [
              (args[0] / 100) * 255,
              (args[0] / 100) * 255,
              (args[0] / 100) * 255,
            ];
          }),
          (convert.gray.hsl = function (args) {
            return [0, 0, args[0]];
          }),
          (convert.gray.hsv = convert.gray.hsl),
          (convert.gray.hwb = function (gray) {
            return [0, 100, gray[0]];
          }),
          (convert.gray.cmyk = function (gray) {
            return [0, 0, 0, gray[0]];
          }),
          (convert.gray.lab = function (gray) {
            return [gray[0], 0, 0];
          }),
          (convert.gray.hex = function (gray) {
            const val = 255 & Math.round((gray[0] / 100) * 255);
            const string = ((val << 16) + (val << 8) + val)
              .toString(16)
              .toUpperCase();
            return '000000'.substring(string.length) + string;
          }),
          (convert.rgb.gray = function (rgb) {
            return [((rgb[0] + rgb[1] + rgb[2]) / 3 / 255) * 100];
          });
      },
    './node_modules/@storybook/blocks/node_modules/color-convert/index.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        const conversions = __webpack_require__(
          './node_modules/@storybook/blocks/node_modules/color-convert/conversions.js'
        );
        const route = __webpack_require__(
          './node_modules/@storybook/blocks/node_modules/color-convert/route.js'
        );
        const convert = {};
        Object.keys(conversions).forEach((fromModel) => {
          (convert[fromModel] = {}),
            Object.defineProperty(convert[fromModel], 'channels', {
              value: conversions[fromModel].channels,
            }),
            Object.defineProperty(convert[fromModel], 'labels', {
              value: conversions[fromModel].labels,
            });
          const routes = route(fromModel);
          Object.keys(routes).forEach((toModel) => {
            const fn = routes[toModel];
            (convert[fromModel][toModel] = (function wrapRounded(fn) {
              const wrappedFn = function (...args) {
                const arg0 = args[0];
                if (arg0 == null) return arg0;
                arg0.length > 1 && (args = arg0);
                const result = fn(args);
                if (typeof result === 'object')
                  for (let len = result.length, i = 0; i < len; i++)
                    result[i] = Math.round(result[i]);
                return result;
              };
              return (
                'conversion' in fn && (wrappedFn.conversion = fn.conversion),
                wrappedFn
              );
            })(fn)),
              (convert[fromModel][toModel].raw = (function wrapRaw(fn) {
                const wrappedFn = function (...args) {
                  const arg0 = args[0];
                  return arg0 == null
                    ? arg0
                    : (arg0.length > 1 && (args = arg0), fn(args));
                };
                return (
                  'conversion' in fn && (wrappedFn.conversion = fn.conversion),
                  wrappedFn
                );
              })(fn));
          });
        }),
          (module.exports = convert);
      },
    './node_modules/@storybook/blocks/node_modules/color-convert/route.js':
      function (module, __unused_webpack_exports, __webpack_require__) {
        const conversions = __webpack_require__(
          './node_modules/@storybook/blocks/node_modules/color-convert/conversions.js'
        );
        function deriveBFS(fromModel) {
          const graph = (function buildGraph() {
            const graph = {};
            const models = Object.keys(conversions);
            for (let len = models.length, i = 0; i < len; i++)
              graph[models[i]] = { distance: -1, parent: null };
            return graph;
          })();
          const queue = [fromModel];
          for (graph[fromModel].distance = 0; queue.length; ) {
            const current = queue.pop();
            const adjacents = Object.keys(conversions[current]);
            for (let len = adjacents.length, i = 0; i < len; i++) {
              const adjacent = adjacents[i];
              const node = graph[adjacent];
              node.distance === -1 &&
                ((node.distance = graph[current].distance + 1),
                (node.parent = current),
                queue.unshift(adjacent));
            }
          }
          return graph;
        }
        function link(from, to) {
          return function (args) {
            return to(from(args));
          };
        }
        function wrapConversion(toModel, graph) {
          const path = [graph[toModel].parent, toModel];
          let fn = conversions[graph[toModel].parent][toModel];
          let cur = graph[toModel].parent;
          for (; graph[cur].parent; )
            path.unshift(graph[cur].parent),
              (fn = link(conversions[graph[cur].parent][cur], fn)),
              (cur = graph[cur].parent);
          return (fn.conversion = path), fn;
        }
        module.exports = function (fromModel) {
          const graph = deriveBFS(fromModel);
          const conversion = {};
          const models = Object.keys(graph);
          for (let len = models.length, i = 0; i < len; i++) {
            const toModel = models[i];
            graph[toModel].parent !== null &&
              (conversion[toModel] = wrapConversion(toModel, graph));
          }
          return conversion;
        };
      },
    './node_modules/@storybook/blocks/node_modules/color-name/index.js':
      function (module) {
        module.exports = {
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
      },
    './node_modules/lodash/_baseTrim.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      const trimmedEndIndex = __webpack_require__(
        './node_modules/lodash/_trimmedEndIndex.js'
      );
      const reTrimStart = /^\s+/;
      module.exports = function baseTrim(string) {
        return string
          ? string
              .slice(0, trimmedEndIndex(string) + 1)
              .replace(reTrimStart, '')
          : string;
      };
    },
    './node_modules/lodash/_trimmedEndIndex.js': function (module) {
      const reWhitespace = /\s/;
      module.exports = function trimmedEndIndex(string) {
        for (
          var index = string.length;
          index-- && reWhitespace.test(string.charAt(index));

        );
        return index;
      };
    },
    './node_modules/lodash/debounce.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      const isObject = __webpack_require__('./node_modules/lodash/isObject.js');
      const now = __webpack_require__('./node_modules/lodash/now.js');
      const toNumber = __webpack_require__('./node_modules/lodash/toNumber.js');
      const nativeMax = Math.max;
      const nativeMin = Math.min;
      module.exports = function debounce(func, wait, options) {
        let lastArgs;
        let lastThis;
        let maxWait;
        let result;
        let timerId;
        let lastCallTime;
        let lastInvokeTime = 0;
        let leading = !1;
        let maxing = !1;
        let trailing = !0;
        if (typeof func !== 'function')
          throw new TypeError('Expected a function');
        function invokeFunc(time) {
          const args = lastArgs;
          const thisArg = lastThis;
          return (
            (lastArgs = lastThis = void 0),
            (lastInvokeTime = time),
            (result = func.apply(thisArg, args))
          );
        }
        function shouldInvoke(time) {
          const timeSinceLastCall = time - lastCallTime;
          return (
            void 0 === lastCallTime ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && time - lastInvokeTime >= maxWait)
          );
        }
        function timerExpired() {
          const time = now();
          if (shouldInvoke(time)) return trailingEdge(time);
          timerId = setTimeout(
            timerExpired,
            (function remainingWait(time) {
              const timeWaiting = wait - (time - lastCallTime);
              return maxing
                ? nativeMin(timeWaiting, maxWait - (time - lastInvokeTime))
                : timeWaiting;
            })(time)
          );
        }
        function trailingEdge(time) {
          return (
            (timerId = void 0),
            trailing && lastArgs
              ? invokeFunc(time)
              : ((lastArgs = lastThis = void 0), result)
          );
        }
        function debounced() {
          const time = now();
          const isInvoking = shouldInvoke(time);
          if (
            ((lastArgs = arguments),
            (lastThis = this),
            (lastCallTime = time),
            isInvoking)
          ) {
            if (void 0 === timerId)
              return (function leadingEdge(time) {
                return (
                  (lastInvokeTime = time),
                  (timerId = setTimeout(timerExpired, wait)),
                  leading ? invokeFunc(time) : result
                );
              })(lastCallTime);
            if (maxing)
              return (
                clearTimeout(timerId),
                (timerId = setTimeout(timerExpired, wait)),
                invokeFunc(lastCallTime)
              );
          }
          return (
            void 0 === timerId && (timerId = setTimeout(timerExpired, wait)),
            result
          );
        }
        return (
          (wait = toNumber(wait) || 0),
          isObject(options) &&
            ((leading = !!options.leading),
            (maxWait = (maxing = 'maxWait' in options)
              ? nativeMax(toNumber(options.maxWait) || 0, wait)
              : maxWait),
            (trailing = 'trailing' in options ? !!options.trailing : trailing)),
          (debounced.cancel = function cancel() {
            void 0 !== timerId && clearTimeout(timerId),
              (lastInvokeTime = 0),
              (lastArgs = lastCallTime = lastThis = timerId = void 0);
          }),
          (debounced.flush = function flush() {
            return void 0 === timerId ? result : trailingEdge(now());
          }),
          debounced
        );
      };
    },
    './node_modules/lodash/now.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      const root = __webpack_require__('./node_modules/lodash/_root.js');
      module.exports = function () {
        return root.Date.now();
      };
    },
    './node_modules/lodash/throttle.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      const debounce = __webpack_require__('./node_modules/lodash/debounce.js');
      const isObject = __webpack_require__('./node_modules/lodash/isObject.js');
      module.exports = function throttle(func, wait, options) {
        let leading = !0;
        let trailing = !0;
        if (typeof func !== 'function')
          throw new TypeError('Expected a function');
        return (
          isObject(options) &&
            ((leading = 'leading' in options ? !!options.leading : leading),
            (trailing = 'trailing' in options ? !!options.trailing : trailing)),
          debounce(func, wait, { leading, maxWait: wait, trailing })
        );
      };
    },
    './node_modules/lodash/toNumber.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      const baseTrim = __webpack_require__(
        './node_modules/lodash/_baseTrim.js'
      );
      const isObject = __webpack_require__('./node_modules/lodash/isObject.js');
      const isSymbol = __webpack_require__('./node_modules/lodash/isSymbol.js');
      const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      const reIsBinary = /^0b[01]+$/i;
      const reIsOctal = /^0o[0-7]+$/i;
      const freeParseInt = parseInt;
      module.exports = function toNumber(value) {
        if (typeof value === 'number') return value;
        if (isSymbol(value)) return NaN;
        if (isObject(value)) {
          const other =
            typeof value.valueOf === 'function' ? value.valueOf() : value;
          value = isObject(other) ? `${other}` : other;
        }
        if (typeof value !== 'string') return value === 0 ? value : +value;
        value = baseTrim(value);
        const isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value)
          ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
          : reIsBadHex.test(value)
          ? NaN
          : +value;
      };
    },
  },
]);
