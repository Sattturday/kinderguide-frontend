/*! For license information please see components-common-Button-Button-stories.2233e17c.iframe.bundle.js.LICENSE.txt */

(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [600],
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
    './src/components/common/Button/Button.stories.jsx': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Default() {
            return Default;
          },
          Link() {
            return Link;
          },
          Square() {
            return Square;
          },
          __namedExportsOrder() {
            return __namedExportsOrder;
          },
        });
      let _Default$parameters;
      let _Default$parameters2;
      let _Default$parameters2$;
      let _Square$parameters;
      let _Square$parameters2;
      let _Square$parameters2$d;
      let _Link$parameters;
      let _Link$parameters2;
      let _Link$parameters2$doc;
      const _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(
          './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
        );
      const _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        './src/components/common/Button/Button.jsx'
      );
      const react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__('./node_modules/react/jsx-runtime.js');
      __webpack_exports__.default = {
        title: 'Button',
        component: _Button__WEBPACK_IMPORTED_MODULE_0__.z,
        parameters: { layout: 'centered' },
        tags: ['autodocs'],
      };
      const Template = function Template(arg) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(
          _Button__WEBPACK_IMPORTED_MODULE_0__.z,
          (0,
          _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            arg
          )
        );
      };
      var Default = Template.bind({});
      Default.args = { children: 'Press me', variant: 'primary' };
      var Square = Template.bind({});
      Square.args = { children: 'Just a square', variant: 'square' };
      var Link = Template.bind({});
      (Link.args = { children: 'Just a link', variant: 'link' }),
        (Default.parameters = (0,
        _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Default.parameters
          ),
          {},
          {
            docs: (0,
            _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              (0,
              _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                (_Default$parameters = Default.parameters) === null ||
                  void 0 === _Default$parameters
                  ? void 0
                  : _Default$parameters.docs
              ),
              {},
              {
                source: (0,
                _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                  { originalSource: 'arg => <Button {...arg} />' },
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
        )),
        (Square.parameters = (0,
        _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Square.parameters
          ),
          {},
          {
            docs: (0,
            _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              (0,
              _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                (_Square$parameters = Square.parameters) === null ||
                  void 0 === _Square$parameters
                  ? void 0
                  : _Square$parameters.docs
              ),
              {},
              {
                source: (0,
                _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                  { originalSource: 'arg => <Button {...arg} />' },
                  (_Square$parameters2 = Square.parameters) === null ||
                    void 0 === _Square$parameters2 ||
                    (_Square$parameters2$d = _Square$parameters2.docs) ===
                      null ||
                    void 0 === _Square$parameters2$d
                    ? void 0
                    : _Square$parameters2$d.source
                ),
              }
            ),
          }
        )),
        (Link.parameters = (0,
        _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
          (0,
          _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
            {},
            Link.parameters
          ),
          {},
          {
            docs: (0,
            _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
              (0,
              _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                {},
                (_Link$parameters = Link.parameters) === null ||
                  void 0 === _Link$parameters
                  ? void 0
                  : _Link$parameters.docs
              ),
              {},
              {
                source: (0,
                _home_dima_work_kinderguide_frontend_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)(
                  { originalSource: 'arg => <Button {...arg} />' },
                  (_Link$parameters2 = Link.parameters) === null ||
                    void 0 === _Link$parameters2 ||
                    (_Link$parameters2$doc = _Link$parameters2.docs) === null ||
                    void 0 === _Link$parameters2$doc
                    ? void 0
                    : _Link$parameters2$doc.source
                ),
              }
            ),
          }
        ));
      var __namedExportsOrder = ['Default', 'Square', 'Link'];
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
