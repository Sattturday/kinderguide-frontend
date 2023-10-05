import { __commonJS, __require } from './chunk-RKFFWI2D.js';

const require_memoizerific = __commonJS({
  '../../node_modules/memoizerific/memoizerific.js': function (
    exports,
    module
  ) {
    (function (f) {
      if (typeof exports === 'object' && typeof module < 'u')
        module.exports = f();
      else if (typeof define === 'function' && define.amd) define([], f);
      else {
        let g;
        typeof window < 'u'
          ? (g = window)
          : typeof global < 'u'
          ? (g = global)
          : typeof self < 'u'
          ? (g = self)
          : (g = this),
          (g.memoizerific = f());
      }
    })(() => {
      let define2;
      let module2;
      let exports2;
      return (function e(t, n, r) {
        function s(o2, u) {
          if (!n[o2]) {
            if (!t[o2]) {
              const a = typeof __require === 'function' && __require;
              if (!u && a) return a(o2, !0);
              if (i) return i(o2, !0);
              const f = new Error(`Cannot find module '${o2}'`);
              throw ((f.code = 'MODULE_NOT_FOUND'), f);
            }
            const l = (n[o2] = { exports: {} });
            t[o2][0].call(
              l.exports,
              (e2) => {
                const n2 = t[o2][1][e2];
                return s(n2 || e2);
              },
              l,
              l.exports,
              e,
              t,
              n,
              r
            );
          }
          return n[o2].exports;
        }
        for (
          var i = typeof __require === 'function' && __require, o = 0;
          o < r.length;
          o++
        )
          s(r[o]);
        return s;
      })(
        {
          1: [
            function (_dereq_, module3, exports3) {
              module3.exports = function (forceSimilar) {
                if (typeof Map !== 'function' || forceSimilar) {
                  const Similar = _dereq_('./similar');
                  return new Similar();
                }
                return new Map();
              };
            },
            { './similar': 2 },
          ],
          2: [
            function (_dereq_, module3, exports3) {
              function Similar() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                );
              }
              (Similar.prototype.get = function (key) {
                let index;
                if (this.lastItem && this.isEqual(this.lastItem.key, key))
                  return this.lastItem.val;
                if (((index = this.indexOf(key)), index >= 0))
                  return (
                    (this.lastItem = this.list[index]), this.list[index].val
                  );
              }),
                (Similar.prototype.set = function (key, val) {
                  let index;
                  return this.lastItem && this.isEqual(this.lastItem.key, key)
                    ? ((this.lastItem.val = val), this)
                    : ((index = this.indexOf(key)),
                      index >= 0
                        ? ((this.lastItem = this.list[index]),
                          (this.list[index].val = val),
                          this)
                        : ((this.lastItem = { key, val }),
                          this.list.push(this.lastItem),
                          this.size++,
                          this));
                }),
                (Similar.prototype.delete = function (key) {
                  let index;
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, key) &&
                      (this.lastItem = void 0),
                    (index = this.indexOf(key)),
                    index >= 0)
                  )
                    return this.size--, this.list.splice(index, 1)[0];
                }),
                (Similar.prototype.has = function (key) {
                  let index;
                  return this.lastItem && this.isEqual(this.lastItem.key, key)
                    ? !0
                    : ((index = this.indexOf(key)),
                      index >= 0
                        ? ((this.lastItem = this.list[index]), !0)
                        : !1);
                }),
                (Similar.prototype.forEach = function (callback, thisArg) {
                  let i;
                  for (i = 0; i < this.size; i++)
                    callback.call(
                      thisArg || this,
                      this.list[i].val,
                      this.list[i].key,
                      this
                    );
                }),
                (Similar.prototype.indexOf = function (key) {
                  let i;
                  for (i = 0; i < this.size; i++)
                    if (this.isEqual(this.list[i].key, key)) return i;
                  return -1;
                }),
                (Similar.prototype.isEqual = function (val1, val2) {
                  return val1 === val2 || (val1 !== val1 && val2 !== val2);
                }),
                (module3.exports = Similar);
            },
            {},
          ],
          3: [
            function (_dereq_, module3, exports3) {
              const MapOrSimilar = _dereq_('map-or-similar');
              module3.exports = function (limit) {
                const cache = new MapOrSimilar(!1);
                const lru = [];
                return function (fn) {
                  const memoizerific = function () {
                    let currentCache = cache;
                    let newMap;
                    let fnResult;
                    const argsLengthMinusOne = arguments.length - 1;
                    const lruPath = Array(argsLengthMinusOne + 1);
                    let isMemoized = !0;
                    let i;
                    if (
                      (memoizerific.numArgs || memoizerific.numArgs === 0) &&
                      memoizerific.numArgs !== argsLengthMinusOne + 1
                    )
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      );
                    for (i = 0; i < argsLengthMinusOne; i++) {
                      if (
                        ((lruPath[i] = {
                          cacheItem: currentCache,
                          arg: arguments[i],
                        }),
                        currentCache.has(arguments[i]))
                      ) {
                        currentCache = currentCache.get(arguments[i]);
                        continue;
                      }
                      (isMemoized = !1),
                        (newMap = new MapOrSimilar(!1)),
                        currentCache.set(arguments[i], newMap),
                        (currentCache = newMap);
                    }
                    return (
                      isMemoized &&
                        (currentCache.has(arguments[argsLengthMinusOne])
                          ? (fnResult = currentCache.get(
                              arguments[argsLengthMinusOne]
                            ))
                          : (isMemoized = !1)),
                      isMemoized ||
                        ((fnResult = fn.apply(null, arguments)),
                        currentCache.set(
                          arguments[argsLengthMinusOne],
                          fnResult
                        )),
                      limit > 0 &&
                        ((lruPath[argsLengthMinusOne] = {
                          cacheItem: currentCache,
                          arg: arguments[argsLengthMinusOne],
                        }),
                        isMemoized
                          ? moveToMostRecentLru(lru, lruPath)
                          : lru.push(lruPath),
                        lru.length > limit && removeCachedResult(lru.shift())),
                      (memoizerific.wasMemoized = isMemoized),
                      (memoizerific.numArgs = argsLengthMinusOne + 1),
                      fnResult
                    );
                  };
                  return (
                    (memoizerific.limit = limit),
                    (memoizerific.wasMemoized = !1),
                    (memoizerific.cache = cache),
                    (memoizerific.lru = lru),
                    memoizerific
                  );
                };
              };
              function moveToMostRecentLru(lru, lruPath) {
                const lruLen = lru.length;
                const lruPathLen = lruPath.length;
                let isMatch;
                let i;
                let ii;
                for (i = 0; i < lruLen; i++) {
                  for (isMatch = !0, ii = 0; ii < lruPathLen; ii++)
                    if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
                      isMatch = !1;
                      break;
                    }
                  if (isMatch) break;
                }
                lru.push(lru.splice(i, 1)[0]);
              }
              function removeCachedResult(removedLru) {
                const removedLruLen = removedLru.length;
                let currentLru = removedLru[removedLruLen - 1];
                let tmp;
                let i;
                for (
                  currentLru.cacheItem.delete(currentLru.arg),
                    i = removedLruLen - 2;
                  i >= 0 &&
                  ((currentLru = removedLru[i]),
                  (tmp = currentLru.cacheItem.get(currentLru.arg)),
                  !tmp || !tmp.size);
                  i--
                )
                  currentLru.cacheItem.delete(currentLru.arg);
              }
              function isEqual(val1, val2) {
                return val1 === val2 || (val1 !== val1 && val2 !== val2);
              }
            },
            { 'map-or-similar': 1 },
          ],
        },
        {},
        [3]
      )(3);
    });
  },
});
export { require_memoizerific };
