/*! For license information please see components-common-Input-Input-stories.6d5d2ed2.iframe.bundle.js.LICENSE.txt */

(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [724],
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
    './src/components/common/Input/Input.stories.jsx': function (
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
          default() {
            return Input_stories;
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
      const objectSpread2 = __webpack_require__(
        './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
      );
      const jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      const Input_Input = function Input(_ref) {
        const { inputId } = _ref;
        const { labelText } = _ref;
        const { variant } = _ref;
        const { errorText } = _ref;
        const { name } = _ref;
        const { onChange } = _ref;
        const { value } = _ref;
        return (0, jsx_runtime.jsxs)('div', {
          className: 'input_kind_'.concat(variant, ' input'),
          children: [
            (0, jsx_runtime.jsx)('label', {
              htmlFor: inputId,
              className: 'input__label',
              children: labelText,
            }),
            (0, jsx_runtime.jsx)('input', {
              name,
              id: inputId,
              onChange,
              value,
              className: 'input__field_kind_'.concat(variant, ' input__field'),
            }),
            (0, jsx_runtime.jsx)('div', {
              className: 'input__errorWrapper input__errorWrapper_kind_'
                .concat(variant, ' ')
                .concat(errorText && 'active'),
              children: (0, jsx_runtime.jsx)('span', {
                className: ''
                  .concat(inputId, '-error input__error_kind_')
                  .concat(variant, ' input__error'),
                children: errorText,
              }),
            }),
          ],
        });
      };
      (Input_Input.defaultProps = {
        variant: 'form',
        onChange: void 0,
        inputId: void 0,
        labelText: void 0,
        errorText: void 0,
        name: void 0,
        value: void 0,
      }),
        (Input_Input.__docgenInfo = {
          description:
            'Компонент инпута.\nИспользуется для создания интерактивных инпутов.',
          methods: [],
          displayName: 'Input',
          props: {
            variant: {
              defaultValue: { value: "'form'", computed: !1 },
              description: 'Вариант внешнего вида инпута',
              type: {
                name: 'enum',
                value: [
                  { value: "'form'", computed: !1 },
                  { value: "'password'", computed: !1 },
                  { value: "'info'", computed: !1 },
                  { value: "'search'", computed: !1 },
                  { value: "'price'", computed: !1 },
                ],
              },
              required: !1,
            },
            onChange: {
              defaultValue: { value: 'undefined', computed: !0 },
              description:
                'Действие, выполняемое при изменении значения инпута',
              type: { name: 'func' },
              required: !1,
            },
            inputId: {
              defaultValue: { value: 'undefined', computed: !0 },
              description: 'Id инпута, используется также для привязки ярлыка',
              type: { name: 'string' },
              required: !1,
            },
            labelText: {
              defaultValue: { value: 'undefined', computed: !0 },
              description: 'Текст ярлыка',
              type: { name: 'string' },
              required: !1,
            },
            errorText: {
              defaultValue: { value: 'undefined', computed: !0 },
              description: 'Текст ошибки',
              type: { name: 'string' },
              required: !1,
            },
            name: {
              defaultValue: { value: 'undefined', computed: !0 },
              description: 'Имя инпута',
              type: { name: 'string' },
              required: !1,
            },
            value: {
              defaultValue: { value: 'undefined', computed: !0 },
              description: 'Значение инпута',
              type: { name: 'string' },
              required: !1,
            },
          },
        });
      var Input_stories = {
        title: 'Input',
        component: Input_Input,
        parameters: { layout: 'centered' },
        tags: ['autodocs'],
      };
      const Template = function Template(arg) {
        return (0, jsx_runtime.jsx)(Input_Input, (0, objectSpread2.Z)({}, arg));
      };
      var Default = Template.bind({});
      Default.args = { children: 'Press me', variant: 'primary' };
      var Square = Template.bind({});
      Square.args = { children: 'Just a square', variant: 'square' };
      var Link = Template.bind({});
      (Link.args = { children: 'Just a link', variant: 'link' }),
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
                  { originalSource: 'arg => <Input {...arg} />' },
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
        (Square.parameters = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Square.parameters),
          {},
          {
            docs: (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                (_Square$parameters = Square.parameters) === null ||
                  void 0 === _Square$parameters
                  ? void 0
                  : _Square$parameters.docs
              ),
              {},
              {
                source: (0, objectSpread2.Z)(
                  { originalSource: 'arg => <Input {...arg} />' },
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
        (Link.parameters = (0, objectSpread2.Z)(
          (0, objectSpread2.Z)({}, Link.parameters),
          {},
          {
            docs: (0, objectSpread2.Z)(
              (0, objectSpread2.Z)(
                {},
                (_Link$parameters = Link.parameters) === null ||
                  void 0 === _Link$parameters
                  ? void 0
                  : _Link$parameters.docs
              ),
              {},
              {
                source: (0, objectSpread2.Z)(
                  { originalSource: 'arg => <Input {...arg} />' },
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
