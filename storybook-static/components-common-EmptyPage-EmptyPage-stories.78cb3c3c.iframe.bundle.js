/*! For license information please see components-common-EmptyPage-EmptyPage-stories.78cb3c3c.iframe.bundle.js.LICENSE.txt */

(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [253],
  {
    './node_modules/@babel/runtime/helpers/esm/objectSpread2.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function _typeof(o) {
        return (
          (_typeof =
            typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    typeof Symbol === 'function' &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o;
                }),
          _typeof(o)
        );
      }
      function _toPropertyKey(arg) {
        const key = (function _toPrimitive(input, hint) {
          if (_typeof(input) !== 'object' || input === null) return input;
          const prim = input[Symbol.toPrimitive];
          if (void 0 !== prim) {
            const res = prim.call(input, hint || 'default');
            if (_typeof(res) !== 'object') return res;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return (hint === 'string' ? String : Number)(input);
        })(arg, 'string');
        return _typeof(key) === 'symbol' ? key : String(key);
      }
      function ownKeys(e, r) {
        const t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let o = Object.getOwnPropertySymbols(e);
          r &&
            (o = o.filter(
              (r) => Object.getOwnPropertyDescriptor(e, r).enumerable
            )),
            t.push.apply(t, o);
        }
        return t;
      }
      function _objectSpread2(e) {
        for (let r = 1; r < arguments.length; r++) {
          var t = arguments[r] != null ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(t), !0).forEach((r) => {
                let obj;
                let key;
                let value;
                (obj = e),
                  (key = r),
                  (value = t[r]),
                  (key = _toPropertyKey(key)) in obj
                    ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (obj[key] = value);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ownKeys(Object(t)).forEach((r) => {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(t, r)
                );
              });
        }
        return e;
      }
      __webpack_require__.d(__webpack_exports__, {
        Z() {
          return _objectSpread2;
        },
      });
    },
    './src/components/common/EmptyPage/EmptyPage.stories.jsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default() {
            return Default;
          },
          __namedExportsOrder() {
            return __namedExportsOrder;
          },
          default() {
            return EmptyPage_stories;
          },
        });
      let _Default$parameters;
      let _Default$parameters2;
      let _Default$parameters2$;
      const objectSpread2 = __webpack_require__(
        './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
      );
      const Button =
        (__webpack_require__('./node_modules/react/index.js'),
        __webpack_require__('./src/components/common/Button/Button.jsx'));
      const jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function EmptyPage_EmptyPage(_ref) {
        const { title } = _ref;
        const { text } = _ref;
        return (0, jsx_runtime.jsxs)('section', {
          className: 'empty-page',
          children: [
            (0, jsx_runtime.jsx)('h1', {
              className: 'empty-page__title '.concat(
                !text && 'empty-page__title_empty'
              ),
              children: title,
            }),
            text &&
              (0, jsx_runtime.jsx)('p', {
                className: 'empty-page__text',
                children: text,
              }),
            (0, jsx_runtime.jsx)(Button.z, {
              variant: 'square',
              children: 'Перейти в каталог',
            }),
          ],
        });
      }
      (EmptyPage_EmptyPage.defaultProps = { title: '', text: '' }),
        (EmptyPage_EmptyPage.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'EmptyPage',
          props: {
            title: {
              defaultValue: { value: "''", computed: !1 },
              description: '',
              type: { name: 'string' },
              required: !1,
            },
            text: {
              defaultValue: { value: "''", computed: !1 },
              description: '',
              type: { name: 'string' },
              required: !1,
            },
          },
        });
      var EmptyPage_stories = {
        title: 'EmptyPage',
        component: EmptyPage_EmptyPage,
        parameters: { layout: 'centered' },
        tags: ['autodocs'],
      };
      var Default = function Template(arg) {
        return (0, jsx_runtime.jsx)(
          EmptyPage_EmptyPage,
          (0, objectSpread2.Z)({}, arg)
        );
      }.bind({});
      (Default.args = {
        title: 'К сожалению, в этом разделе пусто',
        text: 'В ближайшее время мы обязательно добавить информацию',
      }),
        (Default.parameters = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Default.parameters),
          {},
          {
            docs: (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                (_Default$parameters = Default.parameters) === null ||
                  void 0 === _Default$parameters
                  ? void 0
                  : _Default$parameters.docs
              ),
              {},
              {
                source: (0, objectSpread2.Z)(
                  { originalSource: 'arg => <EmptyPage {...arg} />' },
                  (_Default$parameters2 = Default.parameters) === null ||
                    void 0 === _Default$parameters2 ||
                    (_Default$parameters2$ = _Default$parameters2.docs) ===
                      null ||
                    void 0 === _Default$parameters2$
                    ? void 0
                    : _Default$parameters2$.source
                ),
              }
            ),
          }
        ));
      var __namedExportsOrder = ['Default'];
    },
    './src/components/common/Button/Button.jsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.d(__webpack_exports__, {
        z() {
          return Button_Button;
        },
      });
      const jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      var Button_Button = function Button(_ref) {
        const { onClick } = _ref;
        const _ref$variant = _ref.variant;
        const variant = void 0 === _ref$variant ? 'primary' : _ref$variant;
        const _ref$size = _ref.size;
        const size = void 0 === _ref$size ? 'medium' : _ref$size;
        const _ref$type = _ref.type;
        const type = void 0 === _ref$type ? 'button' : _ref$type;
        const { children } = _ref;
        return (0, jsx_runtime.jsx)('button', {
          className: 'button button_size_'
            .concat(size, ' button_variant_')
            .concat(variant),
          type,
          onClick,
          children,
        });
      };
      (Button_Button.defaultProps = {
        variant: 'primary',
        type: 'button',
        size: 'medium',
        children: 'Press me',
        onClick: void 0,
      }),
        (Button_Button.__docgenInfo = {
          description:
            'Компонент кнопки.\nИспользуется для создания интерактивных кнопок.',
          methods: [],
          displayName: 'Button',
          props: {
            variant: {
              defaultValue: { value: "'primary'", computed: !1 },
              description: 'Вариант внешнего вида кнопки',
              type: {
                name: 'enum',
                value: [
                  { value: "'primary'", computed: !1 },
                  { value: "'square'", computed: !1 },
                  { value: "'link'", computed: !1 },
                ],
              },
              required: !1,
            },
            size: {
              defaultValue: { value: "'medium'", computed: !1 },
              description: 'Вариант размера кнопки',
              type: {
                name: 'enum',
                value: [
                  { value: "'medium'", computed: !1 },
                  { value: "'large'", computed: !1 },
                ],
              },
              required: !1,
            },
            type: {
              defaultValue: { value: "'button'", computed: !1 },
              description: 'Вариант типа кнопки',
              type: {
                name: 'enum',
                value: [
                  { value: "'button'", computed: !1 },
                  { value: "'submit'", computed: !1 },
                ],
              },
              required: !1,
            },
            children: {
              defaultValue: { value: "'Press me'", computed: !1 },
              description: 'Текст кнопки',
              type: { name: 'node' },
              required: !1,
            },
            onClick: {
              defaultValue: { value: 'undefined', computed: !0 },
              description: 'Действие, выполняемое при нажатии на кнопку',
              type: { name: 'func' },
              required: !1,
            },
          },
        });
    },
    './node_modules/react/cjs/react-jsx-runtime.production.min.js': function (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) {
      const f = __webpack_require__('./node_modules/react/index.js');
      const k = Symbol.for('react.element');
      const l = Symbol.for('react.fragment');
      const m = Object.prototype.hasOwnProperty;
      const n =
        f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      const p = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(c, a, g) {
        let b;
        const d = {};
        let e = null;
        let h = null;
        for (b in (void 0 !== g && (e = `${g}`),
        void 0 !== a.key && (e = `${a.key}`),
        void 0 !== a.ref && (h = a.ref),
        a))
          m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps)
          for (b in (a = c.defaultProps)) void 0 === d[b] && (d[b] = a[b]);
        return {
          $$typeof: k,
          type: c,
          key: e,
          ref: h,
          props: d,
          _owner: n.current,
        };
      }
      (exports.jsx = q), (exports.jsxs = q);
    },
    './node_modules/react/jsx-runtime.js': function (
      module,
      __unused_webpack_exports,
      __webpack_require__
    ) {
      module.exports = __webpack_require__(
        './node_modules/react/cjs/react-jsx-runtime.production.min.js'
      );
    },
  },
]);
