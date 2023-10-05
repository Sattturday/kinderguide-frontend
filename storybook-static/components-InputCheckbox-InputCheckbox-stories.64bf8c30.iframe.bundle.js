/*! For license information please see components-InputCheckbox-InputCheckbox-stories.64bf8c30.iframe.bundle.js.LICENSE.txt */

(self.webpackChunkkinderguide_frontend =
  self.webpackChunkkinderguide_frontend || []).push([
  [63],
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
    './node_modules/@babel/runtime/helpers/esm/slicedToArray.js': function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(r, l) {
            let t =
              r == null
                ? null
                : (typeof Symbol !== 'undefined' && r[Symbol.iterator]) ||
                  r['@@iterator'];
            if (t != null) {
              let e;
              let n;
              let i;
              let u;
              const a = [];
              let f = !0;
              let o = !1;
              try {
                if (((i = (t = t.call(r)).next), l === 0)) {
                  if (Object(t) !== t) return;
                  f = !1;
                } else
                  for (
                    ;
                    !(f = (e = i.call(t)).done) &&
                    (a.push(e.value), a.length !== l);
                    f = !0
                  );
              } catch (r) {
                (o = !0), (n = r);
              } finally {
                try {
                  if (
                    !f &&
                    t.return != null &&
                    ((u = t.return()), Object(u) !== u)
                  )
                    return;
                } finally {
                  if (o) throw n;
                }
              }
              return a;
            }
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (o) {
              if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
              let n = Object.prototype.toString.call(o).slice(8, -1);
              return (
                n === 'Object' && o.constructor && (n = o.constructor.name),
                n === 'Map' || n === 'Set'
                  ? Array.from(o)
                  : n === 'Arguments' ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? _arrayLikeToArray(o, minLen)
                  : void 0
              );
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      __webpack_require__.d(__webpack_exports__, {
        Z() {
          return _slicedToArray;
        },
      });
    },
    './src/components/InputCheckbox/InputCheckbox.stories.jsx': function (
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
            return InputCheckbox_stories;
          },
        });
      let _Default$parameters;
      let _Default$parameters2;
      let _Default$parameters2$;
      const objectSpread2 = __webpack_require__(
        './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
      );
      const slicedToArray = __webpack_require__(
        './node_modules/@babel/runtime/helpers/esm/slicedToArray.js'
      );
      const react = __webpack_require__('./node_modules/react/index.js');
      const jsx_runtime = __webpack_require__(
        './node_modules/react/jsx-runtime.js'
      );
      function InputCheckbox_InputCheckbox() {
        const _useState = (0, react.useState)(!0);
        const _useState2 = (0, slicedToArray.Z)(_useState, 2);
        const isChecked = _useState2[0];
        const setIsChecked = _useState2[1];
        return (0, jsx_runtime.jsxs)('div', {
          className: 'checkbox',
          children: [
            (0, jsx_runtime.jsx)('label', {
              htmlFor: 'terms',
              className: 'checkbox__label '.concat(isChecked ? 'checked' : ''),
              children: (0, jsx_runtime.jsx)('input', {
                type: 'checkbox',
                className: 'checkbox__input',
                name: 'terms',
                id: 'terms',
                checked: isChecked,
                onChange: function onChange() {
                  setIsChecked(!isChecked);
                },
              }),
            }),
            (0, jsx_runtime.jsxs)('p', {
              className: 'checkbox__text',
              children: [
                'Соглашаюсь с условиями использования',
                (0, jsx_runtime.jsx)('br', {}),
                ' и политикой конфиденциальности',
              ],
            }),
          ],
        });
      }
      InputCheckbox_InputCheckbox.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'InputCheckbox',
      };
      var InputCheckbox_stories = {
        title: 'InputCheckbox',
        component: InputCheckbox_InputCheckbox,
        parameters: { layout: 'centered' },
        tags: ['autodocs'],
      };
      var Default = function Template(arg) {
        return (0, jsx_runtime.jsx)(
          InputCheckbox_InputCheckbox,
          (0, objectSpread2.Z)({}, arg)
        );
      }.bind({});
      (Default.args = {}),
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
                  { originalSource: 'arg => <InputCheckbox {...arg} />' },
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
