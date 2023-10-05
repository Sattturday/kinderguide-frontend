import { __commonJS } from './chunk-RKFFWI2D.js';

const require_object_assign = __commonJS({
  '../../node_modules/object-assign/index.js': function (exports, module) {
    const { getOwnPropertySymbols } = Object;
    const { hasOwnProperty } = Object.prototype;
    const propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val == null)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        );
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) return !1;
        const test1 = new String('abc');
        if (((test1[5] = 'de'), Object.getOwnPropertyNames(test1)[0] === '5'))
          return !1;
        for (var test2 = {}, i = 0; i < 10; i++)
          test2[`_${String.fromCharCode(i)}`] = i;
        const order2 = Object.getOwnPropertyNames(test2).map((n) => test2[n]);
        if (order2.join('') !== '0123456789') return !1;
        const test3 = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach((letter) => {
            test3[letter] = letter;
          }),
          Object.keys({ ...test3 }).join('') === 'abcdefghijklmnopqrst'
        );
      } catch {
        return !1;
      }
    }
    module.exports = shouldUseNative()
      ? Object.assign
      : function (target, source) {
          for (
            var from, to = toObject(target), symbols, s = 1;
            s < arguments.length;
            s++
          ) {
            from = Object(arguments[s]);
            for (const key in from)
              hasOwnProperty.call(from, key) && (to[key] = from[key]);
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (let i = 0; i < symbols.length; i++)
                propIsEnumerable.call(from, symbols[i]) &&
                  (to[symbols[i]] = from[symbols[i]]);
            }
          }
          return to;
        };
  },
});
const require_ReactPropTypesSecret = __commonJS({
  '../../node_modules/prop-types/lib/ReactPropTypesSecret.js': function (
    exports,
    module
  ) {
    const ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    module.exports = ReactPropTypesSecret;
  },
});
const require_has = __commonJS({
  '../../node_modules/prop-types/lib/has.js': function (exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  },
});
const require_checkPropTypes = __commonJS({
  '../../node_modules/prop-types/checkPropTypes.js': function (
    exports,
    module
  ) {
    let printWarning = function () {};
    (ReactPropTypesSecret = require_ReactPropTypesSecret()),
      (loggedTypeFailures = {}),
      (has = require_has()),
      (printWarning = function (text) {
        const message = `Warning: ${text}`;
        typeof console < 'u' && console.error(message);
        try {
          throw new Error(message);
        } catch {}
      });
    let ReactPropTypesSecret;
    let loggedTypeFailures;
    let has;
    function checkPropTypes(
      typeSpecs,
      values,
      location,
      componentName,
      getStack
    ) {
      for (const typeSpecName in typeSpecs)
        if (has(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              const err = Error(
                `${
                  componentName || 'React class'
                }: ${location} type \`${typeSpecName}\` is invalid; it must be a function, usually from the \`prop-types\` package, but received \`${typeof typeSpecs[
                  typeSpecName
                ]}\`.This often happens because of typos such as \`PropTypes.function\` instead of \`PropTypes.func\`.`
              );
              throw ((err.name = 'Invariant Violation'), err);
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret
            );
          } catch (ex) {
            error = ex;
          }
          if (
            (error &&
              !(error instanceof Error) &&
              printWarning(
                `${
                  componentName || 'React class'
                }: type specification of ${location} \`${typeSpecName}\` is invalid; the type checker function must return \`null\` or an \`Error\` but returned a ${typeof error}. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).`
              ),
            error instanceof Error && !(error.message in loggedTypeFailures))
          ) {
            loggedTypeFailures[error.message] = !0;
            const stack = getStack ? getStack() : '';
            printWarning(
              `Failed ${location} type: ${error.message}${stack ?? ''}`
            );
          }
        }
    }
    checkPropTypes.resetWarningCache = function () {
      loggedTypeFailures = {};
    };
    module.exports = checkPropTypes;
  },
});
const require_react_development = __commonJS({
  '../../node_modules/react/cjs/react.development.js': function (exports) {
    (function () {
      const _assign = require_object_assign();
      const checkPropTypes = require_checkPropTypes();
      const ReactVersion = '16.14.0';
      const hasSymbol = typeof Symbol === 'function' && Symbol.for;
      const REACT_ELEMENT_TYPE = hasSymbol
        ? Symbol.for('react.element')
        : 60103;
      const REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 60106;
      const REACT_FRAGMENT_TYPE = hasSymbol
        ? Symbol.for('react.fragment')
        : 60107;
      const REACT_STRICT_MODE_TYPE = hasSymbol
        ? Symbol.for('react.strict_mode')
        : 60108;
      const REACT_PROFILER_TYPE = hasSymbol
        ? Symbol.for('react.profiler')
        : 60114;
      const REACT_PROVIDER_TYPE = hasSymbol
        ? Symbol.for('react.provider')
        : 60109;
      const REACT_CONTEXT_TYPE = hasSymbol
        ? Symbol.for('react.context')
        : 60110;
      const REACT_CONCURRENT_MODE_TYPE = hasSymbol
        ? Symbol.for('react.concurrent_mode')
        : 60111;
      const REACT_FORWARD_REF_TYPE = hasSymbol
        ? Symbol.for('react.forward_ref')
        : 60112;
      const REACT_SUSPENSE_TYPE = hasSymbol
        ? Symbol.for('react.suspense')
        : 60113;
      const REACT_SUSPENSE_LIST_TYPE = hasSymbol
        ? Symbol.for('react.suspense_list')
        : 60120;
      const REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 60115;
      const REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 60116;
      const REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 60121;
      const REACT_FUNDAMENTAL_TYPE = hasSymbol
        ? Symbol.for('react.fundamental')
        : 60117;
      const REACT_RESPONDER_TYPE = hasSymbol
        ? Symbol.for('react.responder')
        : 60118;
      const REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 60119;
      const MAYBE_ITERATOR_SYMBOL =
        typeof Symbol === 'function' && Symbol.iterator;
      const FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object')
          return null;
        const maybeIterator =
          (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL];
        return typeof maybeIterator === 'function' ? maybeIterator : null;
      }
      const ReactCurrentDispatcher = { current: null };
      const ReactCurrentBatchConfig = { suspense: null };
      const ReactCurrentOwner = { current: null };
      const BEFORE_SLASH_RE = /^(.*)[\\\/]/;
      function describeComponentFrame(name, source, ownerName) {
        let sourceInfo = '';
        if (source) {
          const path = source.fileName;
          let fileName = path.replace(BEFORE_SLASH_RE, '');
          if (/^index\./.test(fileName)) {
            const match = path.match(BEFORE_SLASH_RE);
            if (match) {
              const pathBeforeSlash = match[1];
              if (pathBeforeSlash) {
                const folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
                fileName = `${folderName}/${fileName}`;
              }
            }
          }
          sourceInfo = ` (at ${fileName}:${source.lineNumber})`;
        } else ownerName && (sourceInfo = ` (created by ${ownerName})`);
        return `
    in ${name || 'Unknown'}${sourceInfo}`;
      }
      const Resolved = 1;
      function refineResolvedLazyComponent(lazyComponent) {
        return lazyComponent._status === Resolved
          ? lazyComponent._result
          : null;
      }
      function getWrappedName(outerType, innerType, wrapperName) {
        const functionName = innerType.displayName || innerType.name || '';
        return (
          outerType.displayName ||
          (functionName !== ''
            ? `${wrapperName}(${functionName})`
            : wrapperName)
        );
      }
      function getComponentName(type) {
        if (type == null) return null;
        if (
          (typeof type.tag === 'number' &&
            error(
              'Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.'
            ),
          typeof type === 'function')
        )
          return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';
          case REACT_PORTAL_TYPE:
            return 'Portal';
          case REACT_PROFILER_TYPE:
            return 'Profiler';
          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';
          case REACT_SUSPENSE_TYPE:
            return 'Suspense';
          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }
        if (typeof type === 'object')
          switch (type.$$typeof) {
            case REACT_CONTEXT_TYPE:
              return 'Context.Consumer';
            case REACT_PROVIDER_TYPE:
              return 'Context.Provider';
            case REACT_FORWARD_REF_TYPE:
              return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
              return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
              return getComponentName(type.render);
            case REACT_LAZY_TYPE: {
              const thenable = type;
              const resolvedThenable = refineResolvedLazyComponent(thenable);
              if (resolvedThenable) return getComponentName(resolvedThenable);
              break;
            }
          }
        return null;
      }
      const ReactDebugCurrentFrame = {};
      let currentlyValidatingElement = null;
      function setCurrentlyValidatingElement(element) {
        currentlyValidatingElement = element;
      }
      (ReactDebugCurrentFrame.getCurrentStack = null),
        (ReactDebugCurrentFrame.getStackAddendum = function () {
          let stack = '';
          if (currentlyValidatingElement) {
            const name = getComponentName(currentlyValidatingElement.type);
            const owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(
              name,
              currentlyValidatingElement._source,
              owner && getComponentName(owner.type)
            );
          }
          const impl = ReactDebugCurrentFrame.getCurrentStack;
          return impl && (stack += impl() || ''), stack;
        });
      const IsSomeRendererActing = { current: !1 };
      const ReactSharedInternals = {
        ReactCurrentDispatcher,
        ReactCurrentBatchConfig,
        ReactCurrentOwner,
        IsSomeRendererActing,
        assign: _assign,
      };
      _assign(ReactSharedInternals, {
        ReactDebugCurrentFrame,
        ReactComponentTreeHook: {},
      });
      function warn(format) {
        {
          for (
            var _len = arguments.length,
              args = new Array(_len > 1 ? _len - 1 : 0),
              _key = 1;
            _key < _len;
            _key++
          )
            args[_key - 1] = arguments[_key];
          printWarning('warn', format, args);
        }
      }
      function error(format) {
        {
          for (
            var _len2 = arguments.length,
              args = new Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          )
            args[_key2 - 1] = arguments[_key2];
          printWarning('error', format, args);
        }
      }
      function printWarning(level, format, args) {
        {
          const hasExistingStack =
            args.length > 0 &&
            typeof args[args.length - 1] === 'string' &&
            args[args.length - 1].indexOf(`
    in`) === 0;
          if (!hasExistingStack) {
            const ReactDebugCurrentFrame2 =
              ReactSharedInternals.ReactDebugCurrentFrame;
            const stack = ReactDebugCurrentFrame2.getStackAddendum();
            stack !== '' && ((format += '%s'), (args = args.concat([stack])));
          }
          const argsWithFormat = args.map((item) => `${item}`);
          argsWithFormat.unshift(`Warning: ${format}`),
            Function.prototype.apply.call(
              console[level],
              console,
              argsWithFormat
            );
          try {
            let argIndex = 0;
            const message = `Warning: ${format.replace(
              /%s/g,
              () => args[argIndex++]
            )}`;
            throw new Error(message);
          } catch {}
        }
      }
      const didWarnStateUpdateForUnmountedComponent = {};
      function warnNoop(publicInstance, callerName) {
        {
          const _constructor = publicInstance.constructor;
          const componentName =
            (_constructor && (_constructor.displayName || _constructor.name)) ||
            'ReactClass';
          const warningKey = `${componentName}.${callerName}`;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
          error(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            callerName,
            componentName
          ),
            (didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
        }
      }
      const ReactNoopUpdateQueue = {
        isMounted(publicInstance) {
          return !1;
        },
        enqueueForceUpdate(publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },
        enqueueReplaceState(
          publicInstance,
          completeState,
          callback,
          callerName
        ) {
          warnNoop(publicInstance, 'replaceState');
        },
        enqueueSetState(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        },
      };
      const emptyObject = {};
      Object.freeze(emptyObject);
      function Component(props, context, updater) {
        (this.props = props),
          (this.context = context),
          (this.refs = emptyObject),
          (this.updater = updater || ReactNoopUpdateQueue);
      }
      (Component.prototype.isReactComponent = {}),
        (Component.prototype.setState = function (partialState, callback) {
          if (
            !(
              typeof partialState === 'object' ||
              typeof partialState === 'function' ||
              partialState == null
            )
          )
            throw Error(
              'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
            );
          this.updater.enqueueSetState(
            this,
            partialState,
            callback,
            'setState'
          );
        }),
        (Component.prototype.forceUpdate = function (callback) {
          this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
        });
      {
        const deprecatedAPIs = {
          isMounted: [
            'isMounted',
            'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
          ],
          replaceState: [
            'replaceState',
            'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
          ],
        };
        const defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get() {
              warn(
                '%s(...) is deprecated in plain JavaScript React classes. %s',
                info[0],
                info[1]
              );
            },
          });
        };
        for (const fnName in deprecatedAPIs)
          deprecatedAPIs.hasOwnProperty(fnName) &&
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
      function ComponentDummy() {}
      ComponentDummy.prototype = Component.prototype;
      function PureComponent(props, context, updater) {
        (this.props = props),
          (this.context = context),
          (this.refs = emptyObject),
          (this.updater = updater || ReactNoopUpdateQueue);
      }
      const pureComponentPrototype = (PureComponent.prototype =
        new ComponentDummy());
      (pureComponentPrototype.constructor = PureComponent),
        _assign(pureComponentPrototype, Component.prototype),
        (pureComponentPrototype.isPureReactComponent = !0);
      function createRef() {
        const refObject = { current: null };
        return Object.seal(refObject), refObject;
      }
      const { hasOwnProperty } = Object.prototype;
      const RESERVED_PROPS = { key: !0, ref: !0, __self: !0, __source: !0 };
      let specialPropKeyWarningShown;
      let specialPropRefWarningShown;
      let didWarnAboutStringRefs;
      didWarnAboutStringRefs = {};
      function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
          const getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) return !1;
        }
        return config.ref !== void 0;
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
          const getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) return !1;
        }
        return config.key !== void 0;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        const warnAboutAccessingKey = function () {
          specialPropKeyWarningShown ||
            ((specialPropKeyWarningShown = !0),
            error(
              '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)',
              displayName
            ));
        };
        (warnAboutAccessingKey.isReactWarning = !0),
          Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: !0,
          });
      }
      function defineRefPropWarningGetter(props, displayName) {
        const warnAboutAccessingRef = function () {
          specialPropRefWarningShown ||
            ((specialPropRefWarningShown = !0),
            error(
              '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)',
              displayName
            ));
        };
        (warnAboutAccessingRef.isReactWarning = !0),
          Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: !0,
          });
      }
      function warnIfStringRefCannotBeAutoConverted(config) {
        if (
          typeof config.ref === 'string' &&
          ReactCurrentOwner.current &&
          config.__self &&
          ReactCurrentOwner.current.stateNode !== config.__self
        ) {
          const componentName = getComponentName(
            ReactCurrentOwner.current.type
          );
          didWarnAboutStringRefs[componentName] ||
            (error(
              'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref',
              getComponentName(ReactCurrentOwner.current.type),
              config.ref
            ),
            (didWarnAboutStringRefs[componentName] = !0));
        }
      }
      const ReactElement = function (
        type,
        key,
        ref,
        self,
        source,
        owner,
        props
      ) {
        const element = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          ref,
          props,
          _owner: owner,
        };
        return (
          (element._store = {}),
          Object.defineProperty(element._store, 'validated', {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(element, '_self', {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: self,
          }),
          Object.defineProperty(element, '_source', {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: source,
          }),
          Object.freeze &&
            (Object.freeze(element.props), Object.freeze(element)),
          element
        );
      };
      function createElement(type, config, children) {
        let propName;
        const props = {};
        let key = null;
        let ref = null;
        let self = null;
        let source = null;
        if (config != null) {
          hasValidRef(config) &&
            ((ref = config.ref), warnIfStringRefCannotBeAutoConverted(config)),
            hasValidKey(config) && (key = `${config.key}`),
            (self = config.__self === void 0 ? null : config.__self),
            (source = config.__source === void 0 ? null : config.__source);
          for (propName in config)
            hasOwnProperty.call(config, propName) &&
              !RESERVED_PROPS.hasOwnProperty(propName) &&
              (props[propName] = config[propName]);
        }
        const childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
          for (
            var childArray = Array(childrenLength), i = 0;
            i < childrenLength;
            i++
          )
            childArray[i] = arguments[i + 2];
          Object.freeze && Object.freeze(childArray),
            (props.children = childArray);
        }
        if (type && type.defaultProps) {
          const { defaultProps } = type;
          for (propName in defaultProps)
            props[propName] === void 0 &&
              (props[propName] = defaultProps[propName]);
        }
        if (key || ref) {
          const displayName =
            typeof type === 'function'
              ? type.displayName || type.name || 'Unknown'
              : type;
          key && defineKeyPropWarningGetter(props, displayName),
            ref && defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(
          type,
          key,
          ref,
          self,
          source,
          ReactCurrentOwner.current,
          props
        );
      }
      function cloneAndReplaceKey(oldElement, newKey) {
        const newElement = ReactElement(
          oldElement.type,
          newKey,
          oldElement.ref,
          oldElement._self,
          oldElement._source,
          oldElement._owner,
          oldElement.props
        );
        return newElement;
      }
      function cloneElement(element, config, children) {
        if (element == null)
          throw Error(
            `React.cloneElement(...): The argument must be a React element, but you passed ${element}.`
          );
        let propName;
        const props = _assign({}, element.props);
        let { key } = element;
        let { ref } = element;
        const self = element._self;
        const source = element._source;
        let owner = element._owner;
        if (config != null) {
          hasValidRef(config) &&
            ((ref = config.ref), (owner = ReactCurrentOwner.current)),
            hasValidKey(config) && (key = `${config.key}`);
          let defaultProps;
          element.type &&
            element.type.defaultProps &&
            (defaultProps = element.type.defaultProps);
          for (propName in config)
            hasOwnProperty.call(config, propName) &&
              !RESERVED_PROPS.hasOwnProperty(propName) &&
              (config[propName] === void 0 && defaultProps !== void 0
                ? (props[propName] = defaultProps[propName])
                : (props[propName] = config[propName]));
        }
        const childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
          for (
            var childArray = Array(childrenLength), i = 0;
            i < childrenLength;
            i++
          )
            childArray[i] = arguments[i + 2];
          props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      function isValidElement(object) {
        return (
          typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      const SEPARATOR = '.';
      const SUBSEPARATOR = ':';
      function escape(key) {
        const escapeRegex = /[=:]/g;
        const escaperLookup = { '=': '=0', ':': '=2' };
        const escapedString = `${key}`.replace(
          escapeRegex,
          (match) => escaperLookup[match]
        );
        return `$${escapedString}`;
      }
      let didWarnAboutMaps = !1;
      const userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return `${text}`.replace(userProvidedKeyEscapeRegex, '$&/');
      }
      const POOL_SIZE = 10;
      const traverseContextPool = [];
      function getPooledTraverseContext(
        mapResult,
        keyPrefix,
        mapFunction,
        mapContext
      ) {
        if (traverseContextPool.length) {
          const traverseContext = traverseContextPool.pop();
          return (
            (traverseContext.result = mapResult),
            (traverseContext.keyPrefix = keyPrefix),
            (traverseContext.func = mapFunction),
            (traverseContext.context = mapContext),
            (traverseContext.count = 0),
            traverseContext
          );
        }
        return {
          result: mapResult,
          keyPrefix,
          func: mapFunction,
          context: mapContext,
          count: 0,
        };
      }
      function releaseTraverseContext(traverseContext) {
        (traverseContext.result = null),
          (traverseContext.keyPrefix = null),
          (traverseContext.func = null),
          (traverseContext.context = null),
          (traverseContext.count = 0),
          traverseContextPool.length < POOL_SIZE &&
            traverseContextPool.push(traverseContext);
      }
      function traverseAllChildrenImpl(
        children,
        nameSoFar,
        callback,
        traverseContext
      ) {
        const type = typeof children;
        (type === 'undefined' || type === 'boolean') && (children = null);
        let invokeCallback = !1;
        if (children === null) invokeCallback = !0;
        else
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = !0;
              break;
            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = !0;
              }
          }
        if (invokeCallback)
          return (
            callback(
              traverseContext,
              children,
              nameSoFar === ''
                ? SEPARATOR + getComponentKey(children, 0)
                : nameSoFar
            ),
            1
          );
        let child;
        let nextName;
        let subtreeCount = 0;
        const nextNamePrefix =
          nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children))
          for (let i = 0; i < children.length; i++)
            (child = children[i]),
              (nextName = nextNamePrefix + getComponentKey(child, i)),
              (subtreeCount += traverseAllChildrenImpl(
                child,
                nextName,
                callback,
                traverseContext
              ));
        else {
          const iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === 'function') {
            iteratorFn === children.entries &&
              (didWarnAboutMaps ||
                warn(
                  'Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.'
                ),
              (didWarnAboutMaps = !0));
            for (
              var iterator = iteratorFn.call(children), step, ii = 0;
              !(step = iterator.next()).done;

            )
              (child = step.value),
                (nextName = nextNamePrefix + getComponentKey(child, ii++)),
                (subtreeCount += traverseAllChildrenImpl(
                  child,
                  nextName,
                  callback,
                  traverseContext
                ));
          } else if (type === 'object') {
            let addendum = '';
            addendum = ` If you meant to render a collection of children, use an array instead.${ReactDebugCurrentFrame.getStackAddendum()}`;
            const childrenString = `${children}`;
            throw Error(
              `Objects are not valid as a React child (found: ${
                childrenString === '[object Object]'
                  ? `object with keys {${Object.keys(children).join(', ')}}`
                  : childrenString
              }).${addendum}`
            );
          }
        }
        return subtreeCount;
      }
      function traverseAllChildren(children, callback, traverseContext) {
        return children == null
          ? 0
          : traverseAllChildrenImpl(children, '', callback, traverseContext);
      }
      function getComponentKey(component, index) {
        return typeof component === 'object' &&
          component !== null &&
          component.key != null
          ? escape(component.key)
          : index.toString(36);
      }
      function forEachSingleChild(bookKeeping, child, name) {
        const { func } = bookKeeping;
        const { context } = bookKeeping;
        func.call(context, child, bookKeeping.count++);
      }
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) return children;
        const traverseContext = getPooledTraverseContext(
          null,
          null,
          forEachFunc,
          forEachContext
        );
        traverseAllChildren(children, forEachSingleChild, traverseContext),
          releaseTraverseContext(traverseContext);
      }
      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        const { result } = bookKeeping;
        const { keyPrefix } = bookKeeping;
        const { func } = bookKeeping;
        const { context } = bookKeeping;
        let mappedChild = func.call(context, child, bookKeeping.count++);
        Array.isArray(mappedChild)
          ? mapIntoWithKeyPrefixInternal(
              mappedChild,
              result,
              childKey,
              (c) => c
            )
          : mappedChild != null &&
            (isValidElement(mappedChild) &&
              (mappedChild = cloneAndReplaceKey(
                mappedChild,
                keyPrefix +
                  (mappedChild.key && (!child || child.key !== mappedChild.key)
                    ? `${escapeUserProvidedKey(mappedChild.key)}/`
                    : '') +
                  childKey
              )),
            result.push(mappedChild));
      }
      function mapIntoWithKeyPrefixInternal(
        children,
        array,
        prefix,
        func,
        context
      ) {
        let escapedPrefix = '';
        prefix != null && (escapedPrefix = `${escapeUserProvidedKey(prefix)}/`);
        const traverseContext = getPooledTraverseContext(
          array,
          escapedPrefix,
          func,
          context
        );
        traverseAllChildren(
          children,
          mapSingleChildIntoContext,
          traverseContext
        ),
          releaseTraverseContext(traverseContext);
      }
      function mapChildren(children, func, context) {
        if (children == null) return children;
        const result = [];
        return (
          mapIntoWithKeyPrefixInternal(children, result, null, func, context),
          result
        );
      }
      function countChildren(children) {
        return traverseAllChildren(children, () => null, null);
      }
      function toArray(children) {
        const result = [];
        return (
          mapIntoWithKeyPrefixInternal(
            children,
            result,
            null,
            (child) => child
          ),
          result
        );
      }
      function onlyChild(children) {
        if (!isValidElement(children))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return children;
      }
      function createContext(defaultValue, calculateChangedBits) {
        calculateChangedBits === void 0
          ? (calculateChangedBits = null)
          : calculateChangedBits !== null &&
            typeof calculateChangedBits !== 'function' &&
            error(
              'createContext: Expected the optional second argument to be a function. Instead received: %s',
              calculateChangedBits
            );
        const context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        };
        context.Provider = { $$typeof: REACT_PROVIDER_TYPE, _context: context };
        let hasWarnedAboutUsingNestedContextConsumers = !1;
        let hasWarnedAboutUsingConsumerProvider = !1;
        {
          const Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits,
          };
          Object.defineProperties(Consumer, {
            Provider: {
              get() {
                return (
                  hasWarnedAboutUsingConsumerProvider ||
                    ((hasWarnedAboutUsingConsumerProvider = !0),
                    error(
                      'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                    )),
                  context.Provider
                );
              },
              set(_Provider) {
                context.Provider = _Provider;
              },
            },
            _currentValue: {
              get() {
                return context._currentValue;
              },
              set(_currentValue) {
                context._currentValue = _currentValue;
              },
            },
            _currentValue2: {
              get() {
                return context._currentValue2;
              },
              set(_currentValue2) {
                context._currentValue2 = _currentValue2;
              },
            },
            _threadCount: {
              get() {
                return context._threadCount;
              },
              set(_threadCount) {
                context._threadCount = _threadCount;
              },
            },
            Consumer: {
              get() {
                return (
                  hasWarnedAboutUsingNestedContextConsumers ||
                    ((hasWarnedAboutUsingNestedContextConsumers = !0),
                    error(
                      'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                    )),
                  context.Consumer
                );
              },
            },
          }),
            (context.Consumer = Consumer);
        }
        return (
          (context._currentRenderer = null),
          (context._currentRenderer2 = null),
          context
        );
      }
      function lazy(ctor) {
        const lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _ctor: ctor,
          _status: -1,
          _result: null,
        };
        {
          let defaultProps;
          let propTypes;
          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: !0,
              get() {
                return defaultProps;
              },
              set(newDefaultProps) {
                error(
                  'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                ),
                  (defaultProps = newDefaultProps),
                  Object.defineProperty(lazyType, 'defaultProps', {
                    enumerable: !0,
                  });
              },
            },
            propTypes: {
              configurable: !0,
              get() {
                return propTypes;
              },
              set(newPropTypes) {
                error(
                  'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                ),
                  (propTypes = newPropTypes),
                  Object.defineProperty(lazyType, 'propTypes', {
                    enumerable: !0,
                  });
              },
            },
          });
        }
        return lazyType;
      }
      function forwardRef(render) {
        return (
          render != null && render.$$typeof === REACT_MEMO_TYPE
            ? error(
                'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
              )
            : typeof render !== 'function'
            ? error(
                'forwardRef requires a render function but was given %s.',
                render === null ? 'null' : typeof render
              )
            : render.length !== 0 &&
              render.length !== 2 &&
              error(
                'forwardRef render functions accept exactly two parameters: props and ref. %s',
                render.length === 1
                  ? 'Did you forget to use the ref parameter?'
                  : 'Any additional parameter will be undefined.'
              ),
          render != null &&
            (render.defaultProps != null || render.propTypes != null) &&
            error(
              'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
            ),
          { $$typeof: REACT_FORWARD_REF_TYPE, render }
        );
      }
      function isValidElementType(type) {
        return (
          typeof type === 'string' ||
          typeof type === 'function' ||
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_CONCURRENT_MODE_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          (typeof type === 'object' &&
            type !== null &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_PROVIDER_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
              type.$$typeof === REACT_RESPONDER_TYPE ||
              type.$$typeof === REACT_SCOPE_TYPE ||
              type.$$typeof === REACT_BLOCK_TYPE))
        );
      }
      function memo(type, compare) {
        return (
          isValidElementType(type) ||
            error(
              'memo: The first argument must be a component. Instead received: %s',
              type === null ? 'null' : typeof type
            ),
          {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare,
          }
        );
      }
      function resolveDispatcher() {
        const dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null)
          throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.`);
        return dispatcher;
      }
      function useContext(Context, unstable_observedBits) {
        const dispatcher = resolveDispatcher();
        if (
          (unstable_observedBits !== void 0 &&
            error(
              'useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s',
              unstable_observedBits,
              typeof unstable_observedBits === 'number' &&
                Array.isArray(arguments[2])
                ? `

Did you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks`
                : ''
            ),
          Context._context !== void 0)
        ) {
          const realContext = Context._context;
          realContext.Consumer === Context
            ? error(
                'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
              )
            : realContext.Provider === Context &&
              error(
                'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
              );
        }
        return dispatcher.useContext(Context, unstable_observedBits);
      }
      function useState(initialState) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }
      function useReducer(reducer, initialArg, init) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }
      function useRef(initialValue) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }
      function useEffect(create, deps) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }
      function useLayoutEffect(create, deps) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }
      function useCallback(callback, deps) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }
      function useMemo(create, deps) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }
      function useImperativeHandle(ref, create, deps) {
        const dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }
      function useDebugValue(value, formatterFn) {
        {
          const dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      }
      let propTypesMisspellWarningShown;
      propTypesMisspellWarningShown = !1;
      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          const name = getComponentName(ReactCurrentOwner.current.type);
          if (name)
            return `

Check the render method of \`${name}\`.`;
        }
        return '';
      }
      function getSourceInfoErrorAddendum(source) {
        if (source !== void 0) {
          const fileName = source.fileName.replace(/^.*[\\\/]/, '');
          const { lineNumber } = source;
          return `

Check your code at ${fileName}:${lineNumber}.`;
        }
        return '';
      }
      function getSourceInfoErrorAddendumForProps(elementProps) {
        return elementProps != null
          ? getSourceInfoErrorAddendum(elementProps.__source)
          : '';
      }
      const ownerHasKeyUseWarning = {};
      function getCurrentComponentErrorInfo(parentType) {
        let info = getDeclarationErrorAddendum();
        if (!info) {
          const parentName =
            typeof parentType === 'string'
              ? parentType
              : parentType.displayName || parentType.name;
          parentName &&
            (info = `

Check the top-level render call using <${parentName}>.`);
        }
        return info;
      }
      function validateExplicitKey(element, parentType) {
        if (
          !(!element._store || element._store.validated || element.key != null)
        ) {
          element._store.validated = !0;
          const currentComponentErrorInfo =
            getCurrentComponentErrorInfo(parentType);
          if (!ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            ownerHasKeyUseWarning[currentComponentErrorInfo] = !0;
            let childOwner = '';
            element &&
              element._owner &&
              element._owner !== ReactCurrentOwner.current &&
              (childOwner = ` It was passed a child from ${getComponentName(
                element._owner.type
              )}.`),
              setCurrentlyValidatingElement(element),
              error(
                'Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.',
                currentComponentErrorInfo,
                childOwner
              ),
              setCurrentlyValidatingElement(null);
          }
        }
      }
      function validateChildKeys(node, parentType) {
        if (typeof node === 'object') {
          if (Array.isArray(node))
            for (let i = 0; i < node.length; i++) {
              const child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = !0);
          else if (node) {
            const iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function' && iteratorFn !== node.entries)
              for (
                var iterator = iteratorFn.call(node), step;
                !(step = iterator.next()).done;

              )
                isValidElement(step.value) &&
                  validateExplicitKey(step.value, parentType);
          }
        }
      }
      function validatePropTypes(element) {
        {
          const { type } = element;
          if (type == null || typeof type === 'string') return;
          const name = getComponentName(type);
          let propTypes;
          if (typeof type === 'function') propTypes = type.propTypes;
          else if (
            typeof type === 'object' &&
            (type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE)
          )
            propTypes = type.propTypes;
          else return;
          propTypes
            ? (setCurrentlyValidatingElement(element),
              checkPropTypes(
                propTypes,
                element.props,
                'prop',
                name,
                ReactDebugCurrentFrame.getStackAddendum
              ),
              setCurrentlyValidatingElement(null))
            : type.PropTypes !== void 0 &&
              !propTypesMisspellWarningShown &&
              ((propTypesMisspellWarningShown = !0),
              error(
                'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                name || 'Unknown'
              )),
            typeof type.getDefaultProps === 'function' &&
              !type.getDefaultProps.isReactClassApproved &&
              error(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
              );
        }
      }
      function validateFragmentProps(fragment) {
        {
          setCurrentlyValidatingElement(fragment);
          for (
            let keys = Object.keys(fragment.props), i = 0;
            i < keys.length;
            i++
          ) {
            const key = keys[i];
            if (key !== 'children' && key !== 'key') {
              error(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                key
              );
              break;
            }
          }
          fragment.ref !== null &&
            error('Invalid attribute `ref` supplied to `React.Fragment`.'),
            setCurrentlyValidatingElement(null);
        }
      }
      function createElementWithValidation(type, props, children) {
        const validType = isValidElementType(type);
        if (!validType) {
          let info = '';
          (type === void 0 ||
            (typeof type === 'object' &&
              type !== null &&
              Object.keys(type).length === 0)) &&
            (info +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          const sourceInfo = getSourceInfoErrorAddendumForProps(props);
          sourceInfo
            ? (info += sourceInfo)
            : (info += getDeclarationErrorAddendum());
          let typeString;
          type === null
            ? (typeString = 'null')
            : Array.isArray(type)
            ? (typeString = 'array')
            : type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE
            ? ((typeString = `<${getComponentName(type.type) || 'Unknown'} />`),
              (info =
                ' Did you accidentally export a JSX literal instead of a component?'))
            : (typeString = typeof type),
            error(
              'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
              typeString,
              info
            );
        }
        const element = createElement.apply(this, arguments);
        if (element == null) return element;
        if (validType)
          for (let i = 2; i < arguments.length; i++)
            validateChildKeys(arguments[i], type);
        return (
          type === REACT_FRAGMENT_TYPE
            ? validateFragmentProps(element)
            : validatePropTypes(element),
          element
        );
      }
      let didWarnAboutDeprecatedCreateFactory = !1;
      function createFactoryWithValidation(type) {
        const validatedFactory = createElementWithValidation.bind(null, type);
        return (
          (validatedFactory.type = type),
          didWarnAboutDeprecatedCreateFactory ||
            ((didWarnAboutDeprecatedCreateFactory = !0),
            warn(
              'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
            )),
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: !1,
            get() {
              return (
                warn(
                  'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
                ),
                Object.defineProperty(this, 'type', { value: type }),
                type
              );
            },
          }),
          validatedFactory
        );
      }
      function cloneElementWithValidation(element, props, children) {
        for (
          var newElement = cloneElement.apply(this, arguments), i = 2;
          i < arguments.length;
          i++
        )
          validateChildKeys(arguments[i], newElement.type);
        return validatePropTypes(newElement), newElement;
      }
      try {
        const frozenObject = Object.freeze({});
        const testMap = new Map([[frozenObject, null]]);
        const testSet = new Set([frozenObject]);
        testMap.set(0, 0), testSet.add(0);
      } catch {}
      const createElement$1 = createElementWithValidation;
      const cloneElement$1 = cloneElementWithValidation;
      const createFactory = createFactoryWithValidation;
      const Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray,
        only: onlyChild,
      };
      (exports.Children = Children),
        (exports.Component = Component),
        (exports.Fragment = REACT_FRAGMENT_TYPE),
        (exports.Profiler = REACT_PROFILER_TYPE),
        (exports.PureComponent = PureComponent),
        (exports.StrictMode = REACT_STRICT_MODE_TYPE),
        (exports.Suspense = REACT_SUSPENSE_TYPE),
        (exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
          ReactSharedInternals),
        (exports.cloneElement = cloneElement$1),
        (exports.createContext = createContext),
        (exports.createElement = createElement$1),
        (exports.createFactory = createFactory),
        (exports.createRef = createRef),
        (exports.forwardRef = forwardRef),
        (exports.isValidElement = isValidElement),
        (exports.lazy = lazy),
        (exports.memo = memo),
        (exports.useCallback = useCallback),
        (exports.useContext = useContext),
        (exports.useDebugValue = useDebugValue),
        (exports.useEffect = useEffect),
        (exports.useImperativeHandle = useImperativeHandle),
        (exports.useLayoutEffect = useLayoutEffect),
        (exports.useMemo = useMemo),
        (exports.useReducer = useReducer),
        (exports.useRef = useRef),
        (exports.useState = useState),
        (exports.version = ReactVersion);
    })();
  },
});
const require_react = __commonJS({
  '../../node_modules/react/index.js': function (exports, module) {
    module.exports = require_react_development();
  },
});
export {
  require_object_assign,
  require_ReactPropTypesSecret,
  require_has,
  require_checkPropTypes,
  require_react,
};
