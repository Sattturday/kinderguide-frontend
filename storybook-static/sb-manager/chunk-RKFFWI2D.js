const __create = Object.create;
const __defProp = Object.defineProperty;
const __getOwnPropDesc = Object.getOwnPropertyDescriptor;
const __getOwnPropNames = Object.getOwnPropertyNames;
const __getProtoOf = Object.getPrototypeOf;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __require = ((x) =>
  typeof require < 'u'
    ? require
    : typeof Proxy < 'u'
    ? new Proxy(x, { get: (a, b) => (typeof require < 'u' ? require : a)[b] })
    : x)(function (x) {
  if (typeof require < 'u') return require.apply(this, arguments);
  throw Error(`Dynamic require of "${x}" is not supported`);
});
const __esm = (fn, res) =>
  function () {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
const __commonJS = (cb, mod) =>
  function () {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod),
      mod.exports
    );
  };
const __export = (target, all) => {
  for (const name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};
const __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function')
    for (const key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) &&
        key !== except &&
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  return to;
};
const __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: !0 })
      : target,
    mod
  )
);
const __toCommonJS = (mod) =>
  __copyProps(__defProp({}, '__esModule', { value: !0 }), mod);
const __create2 = Object.create;
const __defProp2 = Object.defineProperty;
const __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
const __getOwnPropNames2 = Object.getOwnPropertyNames;
const __getProtoOf2 = Object.getPrototypeOf;
const __hasOwnProp2 = Object.prototype.hasOwnProperty;
const __commonJS2 = (cb, mod) =>
  function () {
    return (
      mod ||
        (0, cb[__getOwnPropNames2(cb)[0]])(
          (mod = { exports: {} }).exports,
          mod
        ),
      mod.exports
    );
  };
const __copyProps2 = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function')
    for (const key of __getOwnPropNames2(from))
      !__hasOwnProp2.call(to, key) &&
        key !== except &&
        __defProp2(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable,
        });
  return to;
};
const __toESM2 = (mod, isNodeMode, target) => (
  (target = mod != null ? __create2(__getProtoOf2(mod)) : {}),
  __copyProps2(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp2(target, 'default', { value: mod, enumerable: !0 })
      : target,
    mod
  )
);
export {
  __require,
  __esm,
  __commonJS,
  __export,
  __toESM,
  __toCommonJS,
  __commonJS2,
  __toESM2,
};
