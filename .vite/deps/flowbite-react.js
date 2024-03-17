import {
  GenIcon,
  HiArrowLeft,
  HiArrowRight,
  HiCalendar,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiMoon,
  HiOutlineChevronDown,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineChevronUp,
  HiOutlineX,
  HiStar,
  HiSun,
  HiX
} from "./chunk-EQSYN2ND.js";
import {
  require_react_dom
} from "./chunk-PXJLUKTU.js";
import {
  require_react
} from "./chunk-FQO5W7GE.js";
import {
  __commonJS,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React3 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s2 = sampleLines.length - 1;
              var c2 = controlLines.length - 1;
              while (s2 >= 1 && c2 >= 0 && sampleLines[s2] !== controlLines[c2]) {
                c2--;
              }
              for (; s2 >= 1 && c2 >= 0; s2--, c2--) {
                if (sampleLines[s2] !== controlLines[c2]) {
                  if (s2 !== 1 || c2 !== 1) {
                    do {
                      s2--;
                      c2--;
                      if (c2 < 0 || sampleLines[s2] !== controlLines[c2]) {
                        var _frame = "\n" + sampleLines[s2].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s2 >= 1 && c2 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a2) {
          return isArrayImpl(a2);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e2) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i2 = 0; i2 < node.length; i2++) {
                var child = node[i2];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i2 = 0; i2 < keys.length; i2++) {
              var key = keys[i2];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i2 = 0; i2 < children.length; i2++) {
                      validateChildKeys(children[i2], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/flowbite-react/lib/esm/components/Accordion/Accordion.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());

// node_modules/tailwind-merge/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  function getClassGroupId(className) {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  }
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
}
function createClassMap(config) {
  const {
    theme: theme2,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme2);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme2) {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme2), classPartObject, classGroupId, theme2);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme2);
    });
  });
}
function getPart(classPartObject, path) {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  }
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
  const separator = config.separator;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  return function splitModifiers(className) {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index3 = 0; index3 < className.length; index3++) {
      let currentCharacter = className[index3];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index3, index3 + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index3));
          modifierStart = index3 + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index3;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
}
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
}
function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}
var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  const {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = /* @__PURE__ */ new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map((originalClassName) => {
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(originalClassName);
    let classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId,
      classGroupId,
      originalClassName,
      hasPostfixModifier
    };
  }).reverse().filter((parsed) => {
    if (!parsed.isTailwindClass) {
      return true;
    }
    const {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = parsed;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach((group) => classGroupsInConflict.add(modifierId + group));
    return true;
  }).reverse().map((parsed) => parsed.originalClassName).join(" ");
}
function twJoin() {
  let index3 = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index3 < arguments.length) {
    if (argument = arguments[index3++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
function fromTheme(key) {
  const themeGetter = (theme2) => theme2[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
}
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isNumber(value) {
  return Boolean(value) && !Number.isNaN(Number(value));
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}
function isInteger(value) {
  return Boolean(value) && Number.isInteger(Number(value));
}
function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, sizeLabels, isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
function isArbitraryImage(value) {
  return getIsArbitraryValue(value, imageLabels, isImage);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function isAny() {
  return true;
}
function getIsArbitraryValue(value, label, testValue) {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
}
function isNever() {
  return false;
}
function isShadow(value) {
  return shadowRegex.test(value);
}
function isImage(value) {
  return imageRegex.test(value);
}
var validators = Object.defineProperty({
  __proto__: null,
  isAny,
  isArbitraryImage,
  isArbitraryLength,
  isArbitraryNumber,
  isArbitraryPosition,
  isArbitraryShadow,
  isArbitrarySize,
  isArbitraryValue,
  isInteger,
  isLength,
  isNumber,
  isPercent,
  isTshirtSize
}, Symbol.toStringTag, {
  value: "Module"
});
function getDefaultConfig() {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumber = () => [isNumber, isArbitraryNumber];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var twMerge = createTailwindMerge(getDefaultConfig);

// node_modules/flowbite-react/lib/esm/helpers/is-object.js
function isObject(item) {
  return item !== null && typeof item === "object" && item.constructor === Object;
}

// node_modules/flowbite-react/lib/esm/helpers/clone-deep.js
function cloneDeep(source) {
  if (!isObject(source)) {
    return source;
  }
  const output = {};
  for (const key in source) {
    output[key] = cloneDeep(source[key]);
  }
  return output;
}

// node_modules/flowbite-react/lib/esm/helpers/merge-deep.js
function mergeDeep(target, source) {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }
  const output = { ...target, ...source };
  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        output[key] = mergeDeep(target[key], source[key]);
      } else {
        output[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
      }
    }
  }
  return output;
}

// node_modules/flowbite-react/lib/esm/components/Accordion/theme.js
var accordionTheme = {
  root: {
    base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
    flush: {
      off: "rounded-lg border",
      on: "border-b"
    }
  },
  content: {
    base: "py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg"
  },
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180"
      }
    },
    base: "flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400",
    flush: {
      off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800",
      on: "bg-transparent dark:bg-transparent"
    },
    heading: "",
    open: {
      off: "",
      on: "text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Alert/theme.js
var alertTheme = {
  base: "flex flex-col gap-2 p-4 text-sm",
  borderAccent: "border-t-4",
  closeButton: {
    base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "w-5 h-5",
    color: {
      info: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      failure: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      success: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      blue: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      dark: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      light: "bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
    }
  },
  color: {
    info: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    gray: "text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300",
    failure: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    success: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    warning: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
    red: "text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800",
    green: "text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800",
    yellow: "text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800",
    blue: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    cyan: "text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800",
    pink: "text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800",
    lime: "text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800",
    dark: "text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300",
    indigo: "text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800",
    purple: "text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800",
    teal: "text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800",
    light: "text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200"
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-lg",
  wrapper: "flex items-center"
};

// node_modules/flowbite-react/lib/esm/components/Avatar/theme.js
var avatarTheme = {
  root: {
    base: "flex justify-center items-center space-x-4 rounded",
    bordered: "p-1 ring-2",
    rounded: "rounded-full",
    color: {
      dark: "ring-gray-800 dark:ring-gray-800",
      failure: "ring-red-500 dark:ring-red-700",
      gray: "ring-gray-500 dark:ring-gray-400",
      info: "ring-cyan-400 dark:ring-cyan-800",
      light: "ring-gray-300 dark:ring-gray-500",
      purple: "ring-purple-500 dark:ring-purple-600",
      success: "ring-green-500 dark:ring-green-500",
      warning: "ring-yellow-300 dark:ring-yellow-500",
      pink: "ring-pink-500 dark:ring-pink-500"
    },
    img: {
      base: "rounded",
      off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
      on: "",
      placeholder: "absolute w-auto h-auto text-gray-400 -bottom-1"
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    },
    stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
    statusPosition: {
      "bottom-left": "-bottom-1 -left-1",
      "bottom-center": "-bottom-1 center",
      "bottom-right": "-bottom-1 -right-1",
      "top-left": "-top-1 -left-1",
      "top-center": "-top-1 center",
      "top-right": "-top-1 -right-1",
      "center-right": "center -right-1",
      center: "center center",
      "center-left": "center -left-1"
    },
    status: {
      away: "bg-yellow-400",
      base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
      busy: "bg-red-400",
      offline: "bg-gray-400",
      online: "bg-green-400"
    },
    initials: {
      text: "font-medium text-gray-600 dark:text-gray-300",
      base: "inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600"
    }
  },
  group: {
    base: "flex -space-x-4"
  },
  groupCounter: {
    base: "relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500"
  }
};

// node_modules/flowbite-react/lib/esm/components/Badge/theme.js
var badgeTheme = {
  root: {
    base: "flex h-fit items-center gap-1 font-semibold",
    color: {
      info: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600",
      failure: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      success: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300",
      indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300",
      purple: "bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300",
      pink: "bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300",
      blue: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      cyan: "bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300",
      dark: "bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700",
      light: "bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500",
      green: "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300",
      lime: "bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300",
      red: "bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300",
      teal: "bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300",
      yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300"
    },
    href: "group",
    size: {
      xs: "p-1 text-xs",
      sm: "p-1.5 text-sm"
    }
  },
  icon: {
    off: "rounded px-2 py-0.5",
    on: "rounded-full p-1.5",
    size: {
      xs: "w-3 h-3",
      sm: "w-3.5 h-3.5"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Blockquote/theme.js
var blockquoteTheme = {
  root: {
    base: "text-xl italic font-semibold text-gray-900 dark:text-white"
  }
};

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/theme.js
var breadcrumbTheme = {
  root: {
    base: "",
    list: "flex items-center"
  },
  item: {
    base: "group flex items-center",
    chevron: "mx-1 h-4 w-4 text-gray-400 group-first:hidden md:mx-2",
    href: {
      off: "flex items-center text-sm font-medium text-gray-500 dark:text-gray-400",
      on: "flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    },
    icon: "mr-2 h-4 w-4"
  }
};

// node_modules/flowbite-react/lib/esm/components/Button/theme.js
var buttonTheme = {
  base: "group flex items-stretch items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none",
  fullSized: "w-full",
  color: {
    dark: "text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700",
    failure: "text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900",
    gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
    info: "text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800",
    light: "text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700",
    purple: "text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900",
    success: "text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800",
    warning: "text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900",
    blue: "text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    cyan: "text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700",
    green: "text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700",
    indigo: "text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700",
    lime: "text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 dark:bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700",
    pink: "text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700",
    red: "text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700",
    teal: "text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 dark:bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700",
    yellow: "text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700"
  },
  disabled: "cursor-not-allowed opacity-50",
  isProcessing: "cursor-wait",
  spinnerSlot: "absolute h-full top-0 flex items-center animate-fade-in",
  spinnerLeftPosition: {
    xs: "left-2",
    sm: "left-3",
    md: "left-4",
    lg: "left-5",
    xl: "left-6"
  },
  gradient: {
    cyan: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    failure: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800",
    info: "text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ",
    lime: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800",
    pink: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800",
    purple: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800",
    success: "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800",
    teal: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800"
  },
  gradientDuoTone: {
    cyanToBlue: "text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    greenToBlue: "text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
    pinkToOrange: "text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
    purpleToBlue: "text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800",
    purpleToPink: "text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800",
    redToYellow: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400",
    tealToLime: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
  },
  inner: {
    base: "flex items-stretch items-center transition-all duration-200",
    position: {
      none: "",
      start: "rounded-r-none",
      middle: "rounded-none",
      end: "rounded-l-none"
    },
    outline: "border border-transparent",
    isProcessingPadding: {
      xs: "pl-8",
      sm: "pl-10",
      md: "pl-12",
      lg: "pl-16",
      xl: "pl-20"
    }
  },
  label: "ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800",
  outline: {
    color: {
      gray: "border border-gray-900 dark:border-white",
      default: "border-0",
      light: ""
    },
    off: "",
    on: "flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full",
    pill: {
      off: "rounded-md",
      on: "rounded-full"
    }
  },
  pill: {
    off: "rounded-lg",
    on: "rounded-full"
  },
  size: {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2.5",
    xl: "text-base px-6 py-3"
  }
};
var buttonGroupTheme = {
  base: "inline-flex",
  position: {
    none: "focus:ring-2",
    start: "rounded-r-none",
    middle: "rounded-none border-l-0 pl-0",
    end: "rounded-l-none border-l-0 pl-0"
  }
};

// node_modules/flowbite-react/lib/esm/components/Card/theme.js
var cardTheme = {
  root: {
    base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
    children: "flex h-full flex-col justify-center gap-4 p-6",
    horizontal: {
      off: "flex-col",
      on: "flex-col md:max-w-xl md:flex-row"
    },
    href: "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  img: {
    base: "",
    horizontal: {
      off: "rounded-t-lg",
      on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Carousel/theme.js
var carouselTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800"
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: {
      off: "w-full flex-shrink-0 transform cursor-default snap-center",
      on: "w-full flex-shrink-0 transform cursor-grab snap-center"
    }
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x"
  }
};

// node_modules/flowbite-react/lib/esm/components/Checkbox/theme.js
var checkboxTheme = {
  root: {
    base: "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
    color: {
      default: "focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-cyan-600",
      dark: "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
      failure: "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
      gray: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
      info: "focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800",
      light: "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
      purple: "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
      success: "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
      warning: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
      blue: "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
      cyan: "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
      green: "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
      indigo: "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
      lime: "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
      pink: "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
      red: "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
      teal: "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
      yellow: "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/DarkThemeToggle/theme.js
var darkThemeToggleTheme = {
  root: {
    base: "rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
    icon: "h-5 w-5"
  }
};

// node_modules/flowbite-react/lib/esm/components/Datepicker/theme.js
var datePickerTheme = {
  root: {
    base: "relative"
  },
  popup: {
    root: {
      base: "absolute top-10 z-50 block pt-2",
      inline: "relative top-0 z-auto",
      inner: "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
    },
    header: {
      base: "",
      title: "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
      selectors: {
        base: "flex justify-between mb-2",
        button: {
          base: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
          prev: "",
          next: "",
          view: ""
        }
      }
    },
    view: {
      base: "p-1"
    },
    footer: {
      base: "flex mt-2 space-x-2",
      button: {
        base: "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300",
        today: "bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700",
        clear: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      }
    }
  },
  views: {
    days: {
      header: {
        base: "grid grid-cols-7 mb-1",
        title: "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
      },
      items: {
        base: "grid w-64 grid-cols-7",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    months: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    years: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    },
    decades: {
      items: {
        base: "grid w-64 grid-cols-4",
        item: {
          base: "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
          selected: "bg-cyan-700 text-white hover:bg-cyan-600",
          disabled: "text-gray-500"
        }
      }
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/theme.js
var dropdownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-gray-900 dark:bg-gray-700",
        light: "bg-white",
        auto: "bg-white dark:bg-gray-700"
      },
      placement: "-4px"
    },
    base: "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
    content: "py-1 text-sm text-gray-700 dark:text-gray-200",
    divider: "my-1 h-px bg-gray-100 dark:bg-gray-600",
    header: "block py-2 px-4 text-sm text-gray-700 dark:text-gray-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4"
    },
    style: {
      dark: "bg-gray-900 text-white dark:bg-gray-700",
      light: "border border-gray-200 bg-white text-gray-900",
      auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
    },
    target: "w-fit"
  },
  inlineWrapper: "flex items-center"
};

// node_modules/flowbite-react/lib/esm/components/FileInput/theme.js
var fileInputTheme = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-md"
      },
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/FloatingLabel/theme.js
var floatingLabelTheme = {
  input: {
    default: {
      filled: {
        sm: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500",
        md: "peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
      },
      outlined: {
        sm: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-xs text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
        md: "border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
      },
      standard: {
        sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
        md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      }
    },
    success: {
      filled: {
        sm: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
        md: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-green-600 dark:border-green-500 appearance-none dark:text-white dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
      },
      outlined: {
        sm: "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
        md: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
      },
      standard: {
        sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer",
        md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-600 appearance-none dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
      }
    },
    error: {
      filled: {
        sm: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-xs text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer",
        md: "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 appearance-none dark:text-white dark:border-red-500 focus:outline-none focus:ring-0 border-red-600 focus:border-red-600 dark:focus-border-red-500 peer"
      },
      outlined: {
        sm: "block px-2.5 pb-2.5 pt-4 w-full text-xs text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
        md: "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
      },
      standard: {
        sm: "block py-2.5 px-0 w-full text-xs text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
        md: "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer"
      }
    }
  },
  label: {
    default: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-gray-500  duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
      },
      standard: {
        sm: "absolute text-xs text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        md: "absolute text-sm text-gray-500 dark:text-gray-400  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      }
    },
    success: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-sm text-green-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-green-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-sm text-green-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-green-500"
      },
      standard: {
        sm: "absolute text-xs text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        md: "absolute text-sm text-green-600 dark:text-green-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      }
    },
    error: {
      filled: {
        sm: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500",
        md: "absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transition-transform text-xs text-red-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 dark:text-red-500"
      },
      outlined: {
        sm: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500",
        md: "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transition-transform bg-white px-2 text-xs text-red-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 dark:bg-gray-900 dark:text-red-500"
      },
      standard: {
        sm: "absolute text-xs text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
        md: "absolute text-sm text-red-600 dark:text-red-500  transition-transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] duration-300 peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      }
    }
  },
  helperText: {
    default: "mt-2 text-xs text-gray-600 dark:text-gray-400",
    success: "mt-2 text-xs text-green-600 dark:text-green-400",
    error: "mt-2 text-xs text-red-600 dark:text-red-400"
  }
};

// node_modules/flowbite-react/lib/esm/components/Footer/theme.js
var footerTheme = {
  root: {
    base: "w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between",
    container: "w-full p-6",
    bgDark: "bg-gray-800"
  },
  groupLink: {
    base: "flex flex-wrap text-sm text-gray-500 dark:text-white",
    link: {
      base: "last:mr-0 md:mr-6 me-4",
      href: "hover:underline"
    },
    col: "flex-col space-y-4"
  },
  icon: {
    base: "text-gray-500 dark:hover:text-white",
    size: "h-5 w-5"
  },
  title: {
    base: "mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white"
  },
  divider: {
    base: "w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  },
  copyright: {
    base: "text-sm text-gray-500 dark:text-gray-400 sm:text-center",
    href: "ml-1 hover:underline",
    span: "ml-1"
  },
  brand: {
    base: "mb-4 flex items-center sm:mb-0",
    img: "mr-3 h-8",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
  }
};

// node_modules/flowbite-react/lib/esm/components/HelperText/theme.js
var helperTextTheme = {
  root: {
    base: "mt-2 text-sm",
    colors: {
      gray: "text-gray-500 dark:text-gray-400",
      info: "text-cyan-700 dark:text-cyan-800",
      success: "text-green-600 dark:text-green-500",
      failure: "text-red-600 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Kbd/theme.js
var kbdTheme = {
  root: {
    base: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    icon: "inline-block"
  }
};

// node_modules/flowbite-react/lib/esm/components/Label/theme.js
var labelTheme = {
  root: {
    base: "text-sm font-medium",
    disabled: "opacity-50",
    colors: {
      default: "text-gray-900 dark:text-white",
      info: "text-cyan-500 dark:text-cyan-600",
      failure: "text-red-700 dark:text-red-500",
      warning: "text-yellow-500 dark:text-yellow-600",
      success: "text-green-700 dark:text-green-500"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/List/theme.js
var listTheme = {
  root: {
    base: "space-y-1 text-gray-500 list-inside dark:text-gray-400",
    ordered: {
      off: "list-disc",
      on: "list-decimal"
    },
    horizontal: "flex flex-wrap items-center space-x-4 space-y-0 justify-center list-none",
    unstyled: "list-none",
    nested: "ps-5 mt-2"
  }
};

// node_modules/flowbite-react/lib/esm/components/ListGroup/theme.js
var listGroupTheme = {
  root: {
    base: "list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left"
  },
  item: {
    base: "[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0",
    link: {
      base: "flex items-center w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600",
      active: {
        off: "hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500",
        on: "bg-cyan-700 text-white dark:bg-gray-800"
      },
      disabled: {
        off: "",
        on: "hover:bg-gray-100 text-gray-900 hover:text-gray-900 focus:text-gray-900 bg-gray-100 cursor-not-allowed"
      },
      href: {
        off: "",
        on: ""
      },
      icon: "mr-2 h-4 w-4 fill-current"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Modal/theme.js
var modalTheme = {
  root: {
    base: "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    show: {
      on: "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      off: "hidden"
    },
    sizes: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    positions: {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      center: "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  content: {
    base: "relative h-full w-full p-4 md:h-auto",
    inner: "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]"
  },
  body: {
    base: "p-6 flex-1 overflow-auto",
    popup: "pt-0"
  },
  header: {
    base: "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
    popup: "p-2 border-b-0",
    title: "text-xl font-medium text-gray-900 dark:text-white",
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      icon: "h-5 w-5"
    }
  },
  footer: {
    base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    popup: "border-t"
  }
};

// node_modules/flowbite-react/lib/esm/components/Navbar/theme.js
var navbarTheme = {
  root: {
    base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
    rounded: {
      on: "rounded",
      off: ""
    },
    bordered: {
      on: "border",
      off: ""
    },
    inner: {
      base: "mx-auto flex flex-wrap items-center justify-between",
      fluid: {
        on: "",
        off: "container"
      }
    }
  },
  brand: {
    base: "flex items-center"
  },
  collapse: {
    base: "w-full md:block md:w-auto",
    list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
    hidden: {
      on: "hidden",
      off: ""
    }
  },
  link: {
    base: "block py-2 pr-4 pl-3 md:p-0",
    active: {
      on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
      off: "border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
    },
    disabled: {
      on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
      off: ""
    }
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
    icon: "h-6 w-6 shrink-0"
  }
};

// node_modules/flowbite-react/lib/esm/components/Pagination/theme.js
var paginationTheme = {
  base: "",
  layout: {
    table: {
      base: "text-sm text-gray-700 dark:text-gray-400",
      span: "font-semibold text-gray-900 dark:text-white"
    }
  },
  pages: {
    base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px",
    showIcon: "inline-flex",
    previous: {
      base: "ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    next: {
      base: "rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      icon: "h-5 w-5"
    },
    selector: {
      base: "w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active: "bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      disabled: "opacity-50 cursor-normal"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Progress/theme.js
var progressTheme = {
  base: "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  label: "mb-1 flex justify-between font-medium dark:text-white",
  bar: "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
  color: {
    dark: "bg-gray-600 dark:bg-gray-300",
    blue: "bg-blue-600",
    red: "bg-red-600 dark:bg-red-500",
    green: "bg-green-600 dark:bg-green-500",
    yellow: "bg-yellow-400",
    indigo: "bg-indigo-600 dark:bg-indigo-500",
    purple: "bg-purple-600 dark:bg-purple-500",
    cyan: "bg-cyan-600",
    gray: "bg-gray-500",
    lime: "bg-lime-600",
    pink: "bg-pink-500",
    teal: "bg-teal-600"
  },
  size: {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
    xl: "h-6"
  }
};

// node_modules/flowbite-react/lib/esm/components/Radio/theme.js
var radioTheme = {
  root: {
    base: "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600"
  }
};

// node_modules/flowbite-react/lib/esm/components/RangeSlider/theme.js
var rangeSliderTheme = {
  root: {
    base: "flex"
  },
  field: {
    base: "relative w-full",
    input: {
      base: "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
      sizes: {
        sm: "h-1 range-sm",
        md: "h-2",
        lg: "h-3 range-lg"
      }
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Rating/theme.js
var ratingTheme = {
  root: {
    base: "flex items-center"
  },
  star: {
    empty: "text-gray-300 dark:text-gray-500",
    filled: "text-yellow-400",
    sizes: {
      sm: "w-5 h-5",
      md: "w-7 h-7",
      lg: "w-10 h-10"
    }
  }
};
var ratingAdvancedTheme = {
  base: "flex items-center",
  label: "text-sm font-medium text-cyan-600 dark:text-cyan-500",
  progress: {
    base: "mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700",
    fill: "h-5 rounded bg-yellow-400",
    label: "text-sm font-medium text-cyan-600 dark:text-cyan-500"
  }
};

// node_modules/flowbite-react/lib/esm/components/Select/theme.js
var selectTheme = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    select: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      },
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4"
      },
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      }
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Sidebar/theme.js
var sidebarTheme = {
  root: {
    base: "h-full",
    collapsed: {
      on: "w-16",
      off: "w-64"
    },
    inner: "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800"
  },
  collapse: {
    button: "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    icon: {
      base: "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900"
      }
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-6 w-6 transition ease-in-out delay-0",
        open: {
          on: "rotate-180",
          off: ""
        }
      }
    },
    list: "space-y-2 py-2"
  },
  cta: {
    base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-gray-700",
    collapsed: {
      insideCollapse: "group w-full pl-8 transition duration-75",
      noIcon: "font-bold"
    },
    content: {
      base: "px-3 flex-1 whitespace-nowrap"
    },
    icon: {
      base: "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      active: "text-gray-700 dark:text-gray-100"
    },
    label: "",
    listItem: ""
  },
  items: {
    base: ""
  },
  itemGroup: {
    base: "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  logo: {
    base: "mb-5 flex items-center pl-2.5",
    collapsed: {
      on: "hidden",
      off: "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    img: "mr-3 h-6 sm:h-7"
  }
};

// node_modules/flowbite-react/lib/esm/components/Spinner/theme.js
var spinnerTheme = {
  base: "inline animate-spin text-gray-200",
  color: {
    failure: "fill-red-600",
    gray: "fill-gray-600",
    info: "fill-cyan-600",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    success: "fill-green-500",
    warning: "fill-yellow-400"
  },
  light: {
    off: {
      base: "dark:text-gray-600",
      color: {
        failure: "",
        gray: "dark:fill-gray-300",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    },
    on: {
      base: "",
      color: {
        failure: "",
        gray: "",
        info: "",
        pink: "",
        purple: "",
        success: "",
        warning: ""
      }
    }
  },
  size: {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-10 h-10"
  }
};

// node_modules/flowbite-react/lib/esm/components/Table/theme.js
var tableTheme = {
  root: {
    base: "w-full text-left text-sm text-gray-500 dark:text-gray-400",
    shadow: "absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10",
    wrapper: "relative"
  },
  body: {
    base: "group/body",
    cell: {
      base: "group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4"
    }
  },
  head: {
    base: "group/head text-xs uppercase text-gray-700 dark:text-gray-400",
    cell: {
      base: "group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3"
    }
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-gray-50 dark:hover:bg-gray-600",
    striped: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
  }
};

// node_modules/flowbite-react/lib/esm/components/Tabs/theme.js
var tabTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    styles: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline: "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
      pills: "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
      fullWidth: "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
    },
    tabitem: {
      base: "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none",
      styles: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
          }
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-cyan-600 text-white",
            off: "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        fullWidth: {
          base: "ml-0 first:ml-0 w-full rounded-none flex",
          active: {
            on: "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
            off: "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none"
          }
        }
      },
      icon: "mr-2 h-5 w-5"
    }
  },
  tabitemcontainer: {
    base: "",
    styles: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: ""
    }
  },
  tabpanel: "py-3"
};

// node_modules/flowbite-react/lib/esm/components/TextInput/theme.js
var textInputTheme = {
  base: "flex",
  addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
  field: {
    base: "relative w-full",
    icon: {
      base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    rightIcon: {
      base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
      svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
    },
    input: {
      base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4"
      },
      colors: {
        gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
      },
      withRightIcon: {
        on: "pr-10",
        off: ""
      },
      withIcon: {
        on: "pl-10",
        off: ""
      },
      withAddon: {
        on: "rounded-r-lg",
        off: "rounded-lg"
      },
      withShadow: {
        on: "shadow-sm dark:shadow-sm-light",
        off: ""
      }
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Textarea/theme.js
var textareaTheme = {
  base: "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
  colors: {
    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
    failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
    warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
    success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
  },
  withShadow: {
    on: "shadow-sm dark:shadow-sm-light",
    off: ""
  }
};

// node_modules/flowbite-react/lib/esm/components/Timeline/theme.js
var timelineTheme = {
  root: {
    direction: {
      horizontal: "items-base sm:flex",
      vertical: "relative border-l border-gray-200 dark:border-gray-700"
    }
  },
  item: {
    root: {
      horizontal: "relative mb-6 sm:mb-0",
      vertical: "mb-10 ml-6"
    },
    content: {
      root: {
        base: "mt-3 sm:pr-8"
      },
      body: {
        base: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
      },
      time: {
        base: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
      },
      title: {
        base: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    },
    point: {
      horizontal: "flex items-center",
      line: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex",
      marker: {
        base: {
          horizontal: "absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700",
          vertical: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"
        },
        icon: {
          base: "h-3 w-3 text-cyan-600 dark:text-cyan-300",
          wrapper: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900"
        }
      },
      vertical: ""
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Toast/theme.js
var toastTheme = {
  root: {
    base: "flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
    closed: "opacity-0 ease-out"
  },
  toggle: {
    base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white",
    icon: "h-5 w-5 shrink-0"
  }
};

// node_modules/flowbite-react/lib/esm/components/ToggleSwitch/theme.js
var toggleSwitchTheme = {
  root: {
    base: "group relative flex items-center rounded-lg focus:outline-none",
    active: {
      on: "cursor-pointer",
      off: "cursor-not-allowed opacity-50"
    },
    label: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
  },
  toggle: {
    base: "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
    checked: {
      on: "after:translate-x-full after:border-white",
      off: "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
      color: {
        blue: " bg-cyan-700 border-cyan-700",
        dark: "bg-dark-700 border-dark-900",
        failure: "bg-red-700 border-red-900",
        gray: "bg-gray-500 border-gray-600",
        green: "bg-green-600 border-green-700",
        light: "bg-light-700 border-light-900",
        red: "bg-red-700 border-red-900",
        purple: "bg-purple-700 border-purple-900",
        success: "bg-green-500 border-green-500",
        yellow: "bg-yellow-400 border-yellow-400",
        warning: "bg-yellow-600 border-yellow-600",
        cyan: "bg-cyan-500 border-cyan-500",
        lime: "bg-lime-400 border-lime-400",
        indigo: "bg-indigo-400 border-indigo-400",
        teal: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
        info: "bg-cyan-600 border-cyan-600",
        pink: "bg-pink-600 border-pink-600"
      }
    },
    sizes: {
      sm: "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
      md: "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
      lg: "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
    }
  }
};

// node_modules/flowbite-react/lib/esm/components/Tooltip/theme.js
var tooltipTheme = {
  target: "w-fit",
  animation: "transition-opacity",
  arrow: {
    base: "absolute z-10 h-2 w-2 rotate-45",
    style: {
      dark: "bg-gray-900 dark:bg-gray-700",
      light: "bg-white",
      auto: "bg-white dark:bg-gray-700"
    },
    placement: "-4px"
  },
  base: "absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm",
  hidden: "invisible opacity-0",
  style: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-white text-gray-900",
    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
  },
  content: "relative z-20"
};

// node_modules/flowbite-react/lib/esm/theme.js
var theme = {
  accordion: accordionTheme,
  alert: alertTheme,
  avatar: avatarTheme,
  badge: badgeTheme,
  blockquote: blockquoteTheme,
  breadcrumb: breadcrumbTheme,
  button: buttonTheme,
  buttonGroup: buttonGroupTheme,
  card: cardTheme,
  carousel: carouselTheme,
  checkbox: checkboxTheme,
  datepicker: datePickerTheme,
  darkThemeToggle: darkThemeToggleTheme,
  dropdown: dropdownTheme,
  fileInput: fileInputTheme,
  floatingLabel: floatingLabelTheme,
  footer: footerTheme,
  helperText: helperTextTheme,
  kbd: kbdTheme,
  label: labelTheme,
  listGroup: listGroupTheme,
  list: listTheme,
  modal: modalTheme,
  navbar: navbarTheme,
  pagination: paginationTheme,
  progress: progressTheme,
  radio: radioTheme,
  rangeSlider: rangeSliderTheme,
  rating: ratingTheme,
  ratingAdvanced: ratingAdvancedTheme,
  select: selectTheme,
  textInput: textInputTheme,
  textarea: textareaTheme,
  toggleSwitch: toggleSwitchTheme,
  sidebar: sidebarTheme,
  spinner: spinnerTheme,
  table: tableTheme,
  tabs: tabTheme,
  timeline: timelineTheme,
  toast: toastTheme,
  tooltip: tooltipTheme
};

// node_modules/flowbite-react/lib/esm/theme-store/index.js
var store = {
  theme: cloneDeep(theme)
};
function setThemeMode(mode) {
  store.mode = mode;
}
function getThemeMode() {
  return store.mode;
}
function setTheme(theme2) {
  if (theme2)
    store.theme = mergeDeep(theme, theme2);
}
function getTheme() {
  return cloneDeep(store.theme);
}

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionContent.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionPanelContext.js
var import_react = __toESM(require_react());
var AccordionPanelContext = (0, import_react.createContext)(void 0);
function useAccordionContext() {
  const context = (0, import_react.useContext)(AccordionPanelContext);
  if (!context) {
    throw new Error("useAccordionContext should be used within the AccordionPanelContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionContent.js
var AccordionContent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { isOpen } = useAccordionContext();
  const theme2 = mergeDeep(getTheme().accordion.content, customTheme);
  return (0, import_jsx_runtime.jsx)("div", { className: twMerge(theme2.base, className), "data-testid": "flowbite-accordion-content", hidden: !isOpen, ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionPanel.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
var AccordionPanel = ({ children, ...props }) => {
  const { alwaysOpen } = props;
  const [isOpen, setOpen] = (0, import_react2.useState)(props.isOpen);
  const provider = alwaysOpen ? {
    ...props,
    isOpen,
    setOpen: () => setOpen(!isOpen)
  } : props;
  return (0, import_jsx_runtime2.jsx)(AccordionPanelContext.Provider, { value: provider, children });
};

// node_modules/flowbite-react/lib/esm/components/Accordion/AccordionTitle.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var AccordionTitle = ({ as: Heading = "h2", children, className, theme: customTheme = {}, ...props }) => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
  const onClick = () => typeof setOpen !== "undefined" && setOpen();
  const theme2 = mergeDeep(getTheme().accordion.title, customTheme);
  return (0, import_jsx_runtime3.jsxs)("button", { className: twMerge(theme2.base, theme2.flush[flush ? "on" : "off"], theme2.open[isOpen ? "on" : "off"], className), onClick, type: "button", ...props, children: [(0, import_jsx_runtime3.jsx)(Heading, { className: theme2.heading, "data-testid": "flowbite-accordion-heading", children }), ArrowIcon && (0, import_jsx_runtime3.jsx)(ArrowIcon, { "aria-hidden": true, className: twMerge(theme2.arrow.base, theme2.arrow.open[isOpen ? "on" : "off"]), "data-testid": "flowbite-accordion-arrow" })] });
};

// node_modules/flowbite-react/lib/esm/components/Accordion/Accordion.js
var AccordionComponent = ({ alwaysOpen = false, arrowIcon = HiChevronDown, children, flush = false, collapseAll = false, className, theme: customTheme = {}, ...props }) => {
  const [isOpen, setOpen] = (0, import_react3.useState)(collapseAll ? -1 : 0);
  const panels = (0, import_react3.useMemo)(() => import_react3.Children.map(children, (child, i2) => (0, import_react3.cloneElement)(child, {
    alwaysOpen,
    arrowIcon,
    flush,
    isOpen: isOpen === i2,
    setOpen: () => setOpen(isOpen === i2 ? -1 : i2)
  })), [alwaysOpen, arrowIcon, children, flush, isOpen]);
  const theme2 = mergeDeep(getTheme().accordion.root, customTheme);
  return (0, import_jsx_runtime4.jsx)("div", { className: twMerge(theme2.base, theme2.flush[flush ? "on" : "off"], className), "data-testid": "flowbite-accordion", ...props, children: panels });
};
AccordionComponent.displayName = "Accordion";
AccordionPanel.displayName = "Accordion.Panel";
AccordionTitle.displayName = "Accordion.Title";
AccordionContent.displayName = "Accordion.Content";
var Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent
});

// node_modules/flowbite-react/lib/esm/components/Alert/Alert.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var Alert = ({ additionalContent, children, className, color = "info", icon: Icon, onDismiss, rounded = true, theme: customTheme = {}, withBorderAccent, ...props }) => {
  const theme2 = mergeDeep(getTheme().alert, customTheme);
  return (0, import_jsx_runtime5.jsxs)("div", { className: twMerge(theme2.base, theme2.color[color], rounded && theme2.rounded, withBorderAccent && theme2.borderAccent, className), role: "alert", ...props, children: [(0, import_jsx_runtime5.jsxs)("div", { className: theme2.wrapper, "data-testid": "flowbite-alert-wrapper", children: [Icon && (0, import_jsx_runtime5.jsx)(Icon, { className: theme2.icon, "data-testid": "flowbite-alert-icon" }), (0, import_jsx_runtime5.jsx)("div", { children }), typeof onDismiss === "function" && (0, import_jsx_runtime5.jsx)("button", { "aria-label": "Dismiss", className: twMerge(theme2.closeButton.base, theme2.closeButton.color[color]), onClick: onDismiss, type: "button", children: (0, import_jsx_runtime5.jsx)(HiX, { "aria-hidden": true, className: theme2.closeButton.icon }) })] }), additionalContent && (0, import_jsx_runtime5.jsx)("div", { children: additionalContent })] });
};
Alert.displayName = "Alert";

// node_modules/flowbite-react/lib/esm/components/Avatar/Avatar.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Avatar/AvatarGroup.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var AvatarGroup = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().avatar.group, customTheme);
  return (0, import_jsx_runtime6.jsx)("div", { "data-testid": "avatar-group-element", className: twMerge(theme2.base, className), ...props, children });
};
AvatarGroup.displayName = "Avatar.Group";

// node_modules/flowbite-react/lib/esm/components/Avatar/AvatarGroupCounter.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var AvatarGroupCounter = ({ className, href, theme: customTheme = {}, total, ...props }) => {
  const theme2 = mergeDeep(getTheme().avatar.groupCounter, customTheme);
  return (0, import_jsx_runtime7.jsxs)("a", { href, className: twMerge(theme2.base, className), ...props, children: ["+", total] });
};
AvatarGroupCounter.displayName = "Avatar.GroupCounter";

// node_modules/flowbite-react/lib/esm/components/Avatar/Avatar.js
var AvatarComponent = ({ alt = "", bordered = false, children, className, color = "light", img, placeholderInitials = "", rounded = false, size: size3 = "md", stacked = false, status, statusPosition = "top-left", theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().avatar, customTheme);
  const imgClassName = twMerge(theme2.root.img.base, bordered && theme2.root.bordered, bordered && theme2.root.color[color], rounded && theme2.root.rounded, stacked && theme2.root.stacked, theme2.root.img.on, theme2.root.size[size3]);
  const imgProps = {
    className: twMerge(imgClassName, theme2.root.img.on),
    "data-testid": "flowbite-avatar-img"
  };
  return (0, import_jsx_runtime8.jsxs)("div", { className: twMerge(theme2.root.base, className), "data-testid": "flowbite-avatar", ...props, children: [(0, import_jsx_runtime8.jsxs)("div", { className: "relative", children: [img ? typeof img === "string" ? (0, import_jsx_runtime8.jsx)("img", { alt, src: img, ...imgProps }) : img({ alt, ...imgProps }) : placeholderInitials ? (0, import_jsx_runtime8.jsx)("div", { className: twMerge(theme2.root.img.off, theme2.root.initials.base, stacked && theme2.root.stacked, bordered && theme2.root.bordered, bordered && theme2.root.color[color], theme2.root.size[size3], rounded && theme2.root.rounded), "data-testid": "flowbite-avatar-initials-placeholder", children: (0, import_jsx_runtime8.jsx)("span", { className: twMerge(theme2.root.initials.text), "data-testid": "flowbite-avatar-initials-placeholder-text", children: placeholderInitials }) }) : (0, import_jsx_runtime8.jsx)("div", { className: twMerge(imgClassName, theme2.root.img.off), "data-testid": "flowbite-avatar-img", children: (0, import_jsx_runtime8.jsx)("svg", { className: theme2.root.img.placeholder, fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: (0, import_jsx_runtime8.jsx)("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) }), status && (0, import_jsx_runtime8.jsx)("span", { "data-testid": "flowbite-avatar-status", className: twMerge(theme2.root.status.base, theme2.root.status[status], theme2.root.statusPosition[statusPosition]) })] }), children && (0, import_jsx_runtime8.jsx)("div", { children })] });
};
AvatarComponent.displayName = "Avatar";
var Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarGroupCounter
});

// node_modules/flowbite-react/lib/esm/components/Badge/Badge.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var Badge = ({ children, color = "info", href, icon: Icon, size: size3 = "xs", className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().badge, customTheme);
  const Content = () => (0, import_jsx_runtime9.jsxs)("span", { className: twMerge(theme2.root.base, theme2.root.color[color], theme2.root.size[size3], theme2.icon[Icon ? "on" : "off"], className), "data-testid": "flowbite-badge", ...props, children: [Icon && (0, import_jsx_runtime9.jsx)(Icon, { "aria-hidden": true, className: theme2.icon.size[size3], "data-testid": "flowbite-badge-icon" }), children && (0, import_jsx_runtime9.jsx)("span", { children })] });
  return href ? (0, import_jsx_runtime9.jsx)("a", { className: theme2.root.href, href, children: (0, import_jsx_runtime9.jsx)(Content, {}) }) : (0, import_jsx_runtime9.jsx)(Content, {});
};
Badge.displayName = "Badge";

// node_modules/flowbite-react/lib/esm/components/Banner/Banner.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Banner/BannerCollapseButton.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Button/Button.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/helpers/generic-forward-ref.js
var import_react4 = __toESM(require_react());
var genericForwardRef = import_react4.forwardRef;
var generic_forward_ref_default = genericForwardRef;

// node_modules/flowbite-react/lib/esm/components/Spinner/Spinner.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var Spinner = ({ className, color = "info", light, size: size3 = "md", theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().spinner, customTheme);
  return (0, import_jsx_runtime10.jsx)("span", { role: "status", ...props, children: (0, import_jsx_runtime10.jsxs)("svg", { fill: "none", viewBox: "0 0 100 101", className: twMerge(theme2.base, theme2.color[color], theme2.light[light ? "on" : "off"].base, theme2.light[light ? "on" : "off"].color[color], theme2.size[size3], className), children: [(0, import_jsx_runtime10.jsx)("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }), (0, import_jsx_runtime10.jsx)("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })] }) });
};
Spinner.displayName = "Spinner";

// node_modules/flowbite-react/lib/esm/components/Button/ButtonBase.js
var import_react5 = __toESM(require_react());
var ButtonBaseComponent = ({ children, as: Component, href, type = "button", ...props }, ref) => {
  const BaseComponent = Component || (href ? "a" : "button");
  return (0, import_react5.createElement)(BaseComponent, { ref, href, type, ...props }, children);
};
var ButtonBase = generic_forward_ref_default(ButtonBaseComponent);

// node_modules/flowbite-react/lib/esm/components/Button/ButtonGroup.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var import_react6 = __toESM(require_react());
var ButtonGroup = ({ children, className, outline, pill, theme: customTheme = {}, ...props }) => {
  const items = (0, import_react6.useMemo)(() => import_react6.Children.map(children, (child, index3) => (0, import_react6.cloneElement)(child, {
    outline,
    pill,
    positionInGroup: index3 === 0 ? "start" : index3 === children.length - 1 ? "end" : "middle"
  })), [children, outline, pill]);
  const theme2 = mergeDeep(getTheme().buttonGroup, customTheme);
  return (0, import_jsx_runtime11.jsx)("div", { className: twMerge(theme2.base, className), role: "group", ...props, children: items });
};
ButtonGroup.displayName = "Button.Group";

// node_modules/flowbite-react/lib/esm/components/Button/Button.js
var ButtonComponentFn = ({ children, className, color = "info", disabled, fullSized, isProcessing = false, processingLabel = "Loading...", processingSpinner, gradientDuoTone, gradientMonochrome, label, outline = false, pill = false, positionInGroup = "none", size: size3 = "md", theme: customTheme = {}, ...props }, ref) => {
  const { buttonGroup: groupTheme, button: buttonTheme2 } = getTheme();
  const theme2 = mergeDeep(buttonTheme2, customTheme);
  const theirProps = props;
  return (0, import_jsx_runtime12.jsx)(ButtonBase, { ref, disabled, className: twMerge(theme2.base, disabled && theme2.disabled, !gradientDuoTone && !gradientMonochrome && theme2.color[color], gradientDuoTone && !gradientMonochrome && theme2.gradientDuoTone[gradientDuoTone], !gradientDuoTone && gradientMonochrome && theme2.gradient[gradientMonochrome], outline && (theme2.outline.color[color] ?? theme2.outline.color.default), theme2.pill[pill ? "on" : "off"], fullSized && theme2.fullSized, groupTheme.position[positionInGroup], className), ...theirProps, children: (0, import_jsx_runtime12.jsx)("span", { className: twMerge(theme2.inner.base, theme2.outline[outline ? "on" : "off"], theme2.outline.pill[outline && pill ? "on" : "off"], theme2.size[size3], outline && !theme2.outline.color[color] && theme2.inner.outline, isProcessing && theme2.isProcessing, isProcessing && theme2.inner.isProcessingPadding[size3], theme2.inner.position[positionInGroup]), children: (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [isProcessing && (0, import_jsx_runtime12.jsx)("span", { className: twMerge(theme2.spinnerSlot, theme2.spinnerLeftPosition[size3]), children: processingSpinner || (0, import_jsx_runtime12.jsx)(Spinner, { size: size3 }) }), typeof children !== "undefined" ? children : (0, import_jsx_runtime12.jsx)("span", { "data-testid": "flowbite-button-label", className: twMerge(theme2.label), children: isProcessing ? processingLabel : label })] }) }) });
};
ButtonComponentFn.displayName = "Button";
var ButtonComponent = generic_forward_ref_default(ButtonComponentFn);
var Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup
});

// node_modules/flowbite-react/lib/esm/components/Banner/BannerCollapseButton.js
var BannerCollapseButton = ({ children, ...props }) => {
  const onClick = (event) => {
    const collapseButton = event.target;
    const parentBanner = collapseButton.closest('[role="banner"]');
    parentBanner == null ? void 0 : parentBanner.remove();
  };
  return (0, import_jsx_runtime13.jsx)(Button, { onClick, ...props, children });
};
BannerCollapseButton.displayName = "Banner.CollapseButton";

// node_modules/flowbite-react/lib/esm/components/Banner/Banner.js
var BannerComponent = ({ children, ...props }) => {
  return (0, import_jsx_runtime14.jsx)("div", { "data-testid": "flowbite-banner", role: "banner", tabIndex: -1, ...props, children });
};
BannerComponent.displayName = "Banner";
var Banner = Object.assign(BannerComponent, {
  CollapseButton: BannerCollapseButton
});

// node_modules/flowbite-react/lib/esm/components/Blockquote/Blockquote.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var Blockquote = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().blockquote, customTheme);
  return (0, import_jsx_runtime15.jsx)("blockquote", { className: twMerge(theme2.root.base, className), "data-testid": "flowbite-blockquote", ...props, children });
};
Blockquote.displayName = "Blockquote";

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/Breadcrumb.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/BreadcrumbItem.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var import_react7 = __toESM(require_react());
var BreadcrumbItem = (0, import_react7.forwardRef)(({ children, className, href, icon: Icon, theme: customTheme = {}, ...props }, ref) => {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "span";
  const theme2 = mergeDeep(getTheme().breadcrumb.item, customTheme);
  return (0, import_jsx_runtime16.jsxs)("li", { className: twMerge(theme2.base, className), ...props, children: [(0, import_jsx_runtime16.jsx)(HiOutlineChevronRight, { "aria-hidden": true, className: theme2.chevron, "data-testid": "flowbite-breadcrumb-separator" }), (0, import_jsx_runtime16.jsxs)(Component, { ref, className: theme2.href[isLink ? "on" : "off"], "data-testid": "flowbite-breadcrumb-item", href, children: [Icon && (0, import_jsx_runtime16.jsx)(Icon, { "aria-hidden": true, className: theme2.icon }), children] })] });
});
BreadcrumbItem.displayName = "Breadcrumb.Item";

// node_modules/flowbite-react/lib/esm/components/Breadcrumb/Breadcrumb.js
var BreadcrumbComponent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().breadcrumb.root, customTheme);
  return (0, import_jsx_runtime17.jsx)("nav", { "aria-label": "Breadcrumb", className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime17.jsx)("ol", { className: theme2.list, children }) });
};
BreadcrumbComponent.displayName = "Breadcrumb";
var Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem
});

// node_modules/flowbite-react/lib/esm/components/Card/Card.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/helpers/omit.js
var omit = (keys) => (obj) => {
  const result = {};
  for (const key in obj) {
    if (keys.includes(key)) {
      continue;
    }
    result[key] = obj[key];
  }
  return result;
};

// node_modules/flowbite-react/lib/esm/components/Card/Card.js
var Card = (props) => {
  const { children, className, horizontal, href, theme: customTheme = {} } = props;
  const Component = typeof href === "undefined" ? "div" : "a";
  const theirProps = removeCustomProps(props);
  const theme2 = mergeDeep(getTheme().card, customTheme);
  return (0, import_jsx_runtime18.jsxs)(Component, { "data-testid": "flowbite-card", href, className: twMerge(theme2.root.base, theme2.root.horizontal[horizontal ? "on" : "off"], href && theme2.root.href, className), ...theirProps, children: [(0, import_jsx_runtime18.jsx)(Image, { ...props }), (0, import_jsx_runtime18.jsx)("div", { className: theme2.root.children, children })] });
};
var Image = ({ theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().card, customTheme);
  if (props.renderImage) {
    return props.renderImage(theme2, props.horizontal ?? false);
  }
  if (props.imgSrc) {
    return (0, import_jsx_runtime18.jsx)("img", { "data-testid": "flowbite-card-image", alt: props.imgAlt ?? "", src: props.imgSrc, className: twMerge(theme2.img.base, theme2.img.horizontal[props.horizontal ? "on" : "off"]) });
  }
  return null;
};
var removeCustomProps = omit([
  "renderImage",
  "imgSrc",
  "imgAlt",
  "children",
  "className",
  "horizontal",
  "href",
  "theme"
]);

// node_modules/flowbite-react/lib/esm/components/Carousel/Carousel.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var import_react9 = __toESM(require_react());

// node_modules/react-indiana-drag-scroll/dist/index.es.js
var import_react8 = __toESM(require_react());
var n = function(t2, e2) {
  return (n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
    t3.__proto__ = e3;
  } || function(t3, e3) {
    for (var n2 in e3)
      e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
  })(t2, e2);
};
var o;
var r;
var i = (function(t2) {
  !function() {
    var e2 = {}.hasOwnProperty;
    function n2() {
      for (var t3 = [], o2 = 0; o2 < arguments.length; o2++) {
        var r2 = arguments[o2];
        if (r2) {
          var i2 = typeof r2;
          if ("string" === i2 || "number" === i2)
            t3.push(r2);
          else if (Array.isArray(r2) && r2.length) {
            var s2 = n2.apply(null, r2);
            s2 && t3.push(s2);
          } else if ("object" === i2)
            for (var l2 in r2)
              e2.call(r2, l2) && r2[l2] && t3.push(l2);
        }
      }
      return t3.join(" ");
    }
    t2.exports ? (n2.default = n2, t2.exports = n2) : window.classNames = n2;
  }();
}(r = { path: o, exports: {}, require: function(t2, e2) {
  return function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  }(null == e2 && r.path);
} }, r.exports), r.exports);
function s(t2, e2, n2) {
  var o2, r2, i2, s2, l2;
  function a2() {
    var c3 = Date.now() - s2;
    c3 < e2 && c3 >= 0 ? o2 = setTimeout(a2, e2 - c3) : (o2 = null, n2 || (l2 = t2.apply(i2, r2), i2 = r2 = null));
  }
  null == e2 && (e2 = 100);
  var c2 = function() {
    i2 = this, r2 = arguments, s2 = Date.now();
    var c3 = n2 && !o2;
    return o2 || (o2 = setTimeout(a2, e2)), c3 && (l2 = t2.apply(i2, r2), i2 = r2 = null), l2;
  };
  return c2.clear = function() {
    o2 && (clearTimeout(o2), o2 = null);
  }, c2.flush = function() {
    o2 && (l2 = t2.apply(i2, r2), i2 = r2 = null, clearTimeout(o2), o2 = null);
  }, c2;
}
s.debounce = s;
var l = s;
!function(t2, e2) {
  void 0 === e2 && (e2 = {});
  var n2 = e2.insertAt;
  if (t2 && "undefined" != typeof document) {
    var o2 = document.head || document.getElementsByTagName("head")[0], r2 = document.createElement("style");
    r2.type = "text/css", "top" === n2 && o2.firstChild ? o2.insertBefore(r2, o2.firstChild) : o2.appendChild(r2), r2.styleSheet ? r2.styleSheet.cssText = t2 : r2.appendChild(document.createTextNode(t2));
  }
}(".indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n");
var a;
var c = (a = "indiana-scroll-container", function(t2, e2) {
  if (!t2)
    return a;
  var n2;
  "string" == typeof t2 ? n2 = t2 : e2 = t2;
  var o2 = a;
  return n2 && (o2 += "__" + n2), o2 + (e2 ? Object.keys(e2).reduce(function(t3, n3) {
    var r2 = e2[n3];
    return r2 && (t3 += " " + ("boolean" == typeof r2 ? o2 + "--" + n3 : o2 + "--" + n3 + "_" + r2)), t3;
  }, "") : "");
});
var p = function(e2) {
  function o2(n2) {
    var o3 = e2.call(this, n2) || this;
    return o3.onEndScroll = function() {
      o3.scrolling = false, !o3.pressed && o3.started && o3.processEnd();
    }, o3.onScroll = function(t2) {
      var e3 = o3.container.current;
      e3.scrollLeft === o3.scrollLeft && e3.scrollTop === o3.scrollTop || (o3.scrolling = true, o3.processScroll(t2), o3.onEndScroll());
    }, o3.onTouchStart = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      if (o3.isDraggable(t2.target))
        if (o3.internal = true, e3 && o3.scrolling)
          o3.pressed = true;
        else {
          var n3 = t2.touches[0];
          o3.processClick(t2, n3.clientX, n3.clientY), !e3 && o3.props.stopPropagation && t2.stopPropagation();
        }
    }, o3.onTouchEnd = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      o3.pressed && (!o3.started || o3.scrolling && e3 ? o3.pressed = false : o3.processEnd(), o3.forceUpdate());
    }, o3.onTouchMove = function(t2) {
      var e3 = o3.props.nativeMobileScroll;
      if (o3.pressed && (!e3 || !o3.isMobile)) {
        var n3 = t2.touches[0];
        n3 && o3.processMove(t2, n3.clientX, n3.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation();
      }
    }, o3.onMouseDown = function(t2) {
      o3.isDraggable(t2.target) && o3.isScrollable() && (o3.internal = true, -1 !== o3.props.buttons.indexOf(t2.button) && (o3.processClick(t2, t2.clientX, t2.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation()));
    }, o3.onMouseMove = function(t2) {
      o3.pressed && (o3.processMove(t2, t2.clientX, t2.clientY), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation());
    }, o3.onMouseUp = function(t2) {
      o3.pressed && (o3.started ? o3.processEnd() : (o3.internal = false, o3.pressed = false, o3.forceUpdate(), o3.props.onClick && o3.props.onClick(t2)), t2.preventDefault(), o3.props.stopPropagation && t2.stopPropagation());
    }, o3.container = import_react8.default.createRef(), o3.onEndScroll = l(o3.onEndScroll, 300), o3.scrolling = false, o3.started = false, o3.pressed = false, o3.internal = false, o3.getRef = o3.getRef.bind(o3), o3;
  }
  return function(t2, e3) {
    function o3() {
      this.constructor = t2;
    }
    n(t2, e3), t2.prototype = null === e3 ? Object.create(e3) : (o3.prototype = e3.prototype, new o3());
  }(o2, e2), o2.prototype.componentDidMount = function() {
    var t2 = this.props.nativeMobileScroll, e3 = this.container.current;
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onTouchMove, { passive: false }), window.addEventListener("touchend", this.onTouchEnd), e3.addEventListener("touchstart", this.onTouchStart, { passive: false }), e3.addEventListener("mousedown", this.onMouseDown, { passive: false }), t2 && (this.isMobile = this.isMobileDevice(), this.isMobile && this.forceUpdate());
  }, o2.prototype.componentWillUnmount = function() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
  }, o2.prototype.getElement = function() {
    return this.container.current;
  }, o2.prototype.isMobileDevice = function() {
    return void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf("IEMobile");
  }, o2.prototype.isDraggable = function(t2) {
    var e3 = this.props.ignoreElements;
    if (e3) {
      var n2 = t2.closest(e3);
      return null === n2 || n2.contains(this.getElement());
    }
    return true;
  }, o2.prototype.isScrollable = function() {
    var t2 = this.container.current;
    return t2 && (t2.scrollWidth > t2.clientWidth || t2.scrollHeight > t2.clientHeight);
  }, o2.prototype.processClick = function(t2, e3, n2) {
    var o3 = this.container.current;
    this.scrollLeft = o3.scrollLeft, this.scrollTop = o3.scrollTop, this.clientX = e3, this.clientY = n2, this.pressed = true;
  }, o2.prototype.processStart = function(t2) {
    void 0 === t2 && (t2 = true);
    var e3 = this.props.onStartScroll;
    this.started = true, t2 && document.body.classList.add("indiana-dragging"), e3 && e3({ external: !this.internal }), this.forceUpdate();
  }, o2.prototype.processScroll = function(t2) {
    if (this.started) {
      var e3 = this.props.onScroll;
      e3 && e3({ external: !this.internal });
    } else
      this.processStart(false);
  }, o2.prototype.processMove = function(t2, e3, n2) {
    var o3 = this.props, r2 = o3.horizontal, i2 = o3.vertical, s2 = o3.activationDistance, l2 = o3.onScroll, a2 = this.container.current;
    this.started ? (r2 && (a2.scrollLeft -= e3 - this.clientX), i2 && (a2.scrollTop -= n2 - this.clientY), l2 && l2({ external: !this.internal }), this.clientX = e3, this.clientY = n2, this.scrollLeft = a2.scrollLeft, this.scrollTop = a2.scrollTop) : (r2 && Math.abs(e3 - this.clientX) > s2 || i2 && Math.abs(n2 - this.clientY) > s2) && (this.clientX = e3, this.clientY = n2, this.processStart());
  }, o2.prototype.processEnd = function() {
    var t2 = this.props.onEndScroll;
    this.container.current && t2 && t2({ external: !this.internal }), this.pressed = false, this.started = false, this.scrolling = false, this.internal = false, document.body.classList.remove("indiana-dragging"), this.forceUpdate();
  }, o2.prototype.getRef = function(t2) {
    [this.container, this.props.innerRef].forEach(function(e3) {
      e3 && ("function" == typeof e3 ? e3(t2) : e3.current = t2);
    });
  }, o2.prototype.render = function() {
    var e3 = this.props, n2 = e3.children, o3 = e3.draggingClassName, r2 = e3.className, s2 = e3.style, l2 = e3.hideScrollbars, a2 = e3.component;
    return import_react8.default.createElement(a2, { className: i(r2, this.pressed && o3, c({ dragging: this.pressed, "hide-scrollbars": l2, "native-scroll": this.isMobile })), style: s2, ref: this.getRef, onScroll: this.onScroll }, n2);
  }, o2.defaultProps = { nativeMobileScroll: true, hideScrollbars: true, activationDistance: 10, vertical: true, horizontal: true, stopPropagation: false, style: {}, component: "div", buttons: [0] }, o2;
}(import_react8.PureComponent);
var index_es_default = p;

// node_modules/flowbite-react/lib/esm/helpers/is-client.js
var isClient = () => {
  return typeof window !== "undefined";
};

// node_modules/flowbite-react/lib/esm/components/Carousel/Carousel.js
var Carousel = ({ children, indicators = true, leftControl, rightControl, slide = true, draggable = true, slideInterval, className, theme: customTheme = {}, onSlideChange = null, pauseOnHover = false, ...props }) => {
  const theme2 = mergeDeep(getTheme().carousel, customTheme);
  const isDeviceMobile = isClient() && navigator.userAgent.indexOf("IEMobile") !== -1;
  const carouselContainer = (0, import_react9.useRef)(null);
  const [activeItem, setActiveItem] = (0, import_react9.useState)(0);
  const [isDragging, setIsDragging] = (0, import_react9.useState)(false);
  const [isHovering, setIsHovering] = (0, import_react9.useState)(false);
  const didMountRef = (0, import_react9.useRef)(false);
  const items = (0, import_react9.useMemo)(() => import_react9.Children.map(children, (child) => (0, import_react9.cloneElement)(child, {
    className: twMerge(theme2.item.base, child.props.className)
  })), [children, theme2.item.base]);
  const navigateTo = (0, import_react9.useCallback)((item) => () => {
    if (!items)
      return;
    item = (item + items.length) % items.length;
    if (carouselContainer.current) {
      carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
    }
    setActiveItem(item);
  }, [items]);
  (0, import_react9.useEffect)(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
    }
  }, [isDragging]);
  (0, import_react9.useEffect)(() => {
    if (slide && !(pauseOnHover && isHovering)) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3e3);
      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval, pauseOnHover, isHovering]);
  (0, import_react9.useEffect)(() => {
    if (didMountRef.current) {
      onSlideChange && onSlideChange(activeItem);
    } else {
      didMountRef.current = true;
    }
  }, [onSlideChange, activeItem]);
  const handleDragging = (dragging) => () => setIsDragging(dragging);
  const setHoveringTrue = (0, import_react9.useCallback)(() => setIsHovering(true), [setIsHovering]);
  const setHoveringFalse = (0, import_react9.useCallback)(() => setIsHovering(false), [setIsHovering]);
  return (0, import_jsx_runtime19.jsxs)("div", { className: twMerge(theme2.root.base, className), "data-testid": "carousel", onMouseEnter: setHoveringTrue, onMouseLeave: setHoveringFalse, onTouchStart: setHoveringTrue, onTouchEnd: setHoveringFalse, ...props, children: [(0, import_jsx_runtime19.jsx)(index_es_default, { className: twMerge(theme2.scrollContainer.base, (isDeviceMobile || !isDragging) && theme2.scrollContainer.snap), draggingClassName: "cursor-grab", innerRef: carouselContainer, onEndScroll: handleDragging(false), onStartScroll: handleDragging(draggable), vertical: false, horizontal: draggable, children: items == null ? void 0 : items.map((item, index3) => (0, import_jsx_runtime19.jsx)("div", { className: theme2.item.wrapper[draggable ? "on" : "off"], "data-active": activeItem === index3, "data-testid": "carousel-item", children: item }, index3)) }), indicators && (0, import_jsx_runtime19.jsx)("div", { className: theme2.indicators.wrapper, children: items == null ? void 0 : items.map((_, index3) => (0, import_jsx_runtime19.jsx)("button", { className: twMerge(theme2.indicators.base, theme2.indicators.active[index3 === activeItem ? "on" : "off"]), onClick: navigateTo(index3), "data-testid": "carousel-indicator", "aria-label": `Slide ${index3 + 1}` }, index3)) }), items && (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [(0, import_jsx_runtime19.jsx)("div", { className: theme2.root.leftControl, children: (0, import_jsx_runtime19.jsx)("button", { className: "group", "data-testid": "carousel-left-control", onClick: navigateTo(activeItem - 1), type: "button", "aria-label": "Previous slide", children: leftControl ? leftControl : (0, import_jsx_runtime19.jsx)(DefaultLeftControl, { theme: customTheme }) }) }), (0, import_jsx_runtime19.jsx)("div", { className: theme2.root.rightControl, children: (0, import_jsx_runtime19.jsx)("button", { className: "group", "data-testid": "carousel-right-control", onClick: navigateTo(activeItem + 1), type: "button", "aria-label": "Next slide", children: rightControl ? rightControl : (0, import_jsx_runtime19.jsx)(DefaultRightControl, { theme: customTheme }) }) })] })] });
};
var DefaultLeftControl = ({ theme: customTheme = {} }) => {
  const theme2 = mergeDeep(getTheme().carousel, customTheme);
  return (0, import_jsx_runtime19.jsx)("span", { className: theme2.control.base, children: (0, import_jsx_runtime19.jsx)(HiOutlineChevronLeft, { className: theme2.control.icon }) });
};
var DefaultRightControl = ({ theme: customTheme = {} }) => {
  const theme2 = mergeDeep(getTheme().carousel, customTheme);
  return (0, import_jsx_runtime19.jsx)("span", { className: theme2.control.base, children: (0, import_jsx_runtime19.jsx)(HiOutlineChevronRight, { className: theme2.control.icon }) });
};
Carousel.displayName = "Carousel";

// node_modules/flowbite-react/lib/esm/components/Checkbox/Checkbox.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
var import_react10 = __toESM(require_react());
var Checkbox = (0, import_react10.forwardRef)(({ className, color = "default", theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().checkbox, customTheme);
  return (0, import_jsx_runtime20.jsx)("input", { ref, type: "checkbox", className: twMerge(theme2.root.base, theme2.root.color[color], className), ...props });
});
Checkbox.displayName = "Checkbox";

// node_modules/flowbite-react/lib/esm/components/DarkThemeToggle/DarkThemeToggle.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/hooks/use-is-mounted.js
var import_react11 = __toESM(require_react());
function useIsMounted() {
  const [mounted, setMounted] = (0, import_react11.useState)(false);
  (0, import_react11.useEffect)(() => setMounted(true), []);
  return mounted;
}

// node_modules/flowbite-react/lib/esm/hooks/use-theme-mode.js
var import_react13 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/hooks/use-watch-localstorage-value.js
var import_react12 = __toESM(require_react());
var useWatchLocalStorageValue = ({ key: watchKey, onChange }) => {
  function handleStorageChange({ key, newValue }) {
    if (key === watchKey)
      onChange(newValue);
  }
  (0, import_react12.useEffect)(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
};

// node_modules/flowbite-react/lib/esm/hooks/use-theme-mode.js
var DEFAULT_MODE = "light";
var LS_THEME_MODE = "flowbite-theme-mode";
var SYNC_THEME_MODE = "flowbite-theme-mode-sync";
var useThemeMode = () => {
  const [mode, setMode] = (0, import_react13.useState)(getInitialMode(getThemeMode()));
  (0, import_react13.useEffect)(() => {
    setModeInLS(mode);
    setModeInDOM(mode);
  }, []);
  useWatchLocalStorageValue({
    key: LS_THEME_MODE,
    onChange(newValue) {
      if (newValue)
        return handleSetMode(newValue);
    }
  });
  useSyncMode((mode2) => setMode(mode2));
  const handleSetMode = (mode2) => {
    setMode(mode2);
    setModeInLS(mode2);
    setModeInDOM(mode2);
    document.dispatchEvent(new CustomEvent(SYNC_THEME_MODE, { detail: mode2 }));
  };
  const toggleMode = () => {
    let newMode = mode;
    if (newMode === "auto")
      newMode = computeModeValue(newMode);
    newMode = newMode === "dark" ? "light" : "dark";
    handleSetMode(newMode);
  };
  const clearMode = () => {
    const newMode = getThemeMode() ?? DEFAULT_MODE;
    handleSetMode(newMode);
  };
  return { mode, computedMode: computeModeValue(mode), setMode: handleSetMode, toggleMode, clearMode };
};
var useSyncMode = (onChange) => {
  (0, import_react13.useEffect)(() => {
    function handleSync(e2) {
      const mode = e2.detail;
      onChange(mode);
    }
    document.addEventListener(SYNC_THEME_MODE, handleSync);
    return () => document.removeEventListener(SYNC_THEME_MODE, handleSync);
  }, []);
};
var setModeInLS = (mode) => localStorage.setItem(LS_THEME_MODE, mode);
var setModeInDOM = (mode) => {
  const computedMode = computeModeValue(mode);
  if (computedMode === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};
var getInitialMode = (defaultMode) => {
  if (!isClient())
    return DEFAULT_MODE;
  const LSMode = localStorage.getItem(LS_THEME_MODE);
  return LSMode ?? defaultMode ?? DEFAULT_MODE;
};
var computeModeValue = (mode) => {
  return mode === "auto" ? prefersColorScheme() : mode;
};
var prefersColorScheme = () => {
  var _a;
  return ((_a = window.matchMedia) == null ? void 0 : _a.call(window, "(prefers-color-scheme: dark)").matches) ? "dark" : "light";
};

// node_modules/flowbite-react/lib/esm/components/DarkThemeToggle/DarkThemeToggle.js
var DarkThemeToggle = ({ className, theme: customTheme = {}, iconDark: IconDark = HiSun, iconLight: IconLight = HiMoon, ...props }) => {
  const isMounted = useIsMounted();
  const { computedMode, toggleMode } = useThemeMode();
  const theme2 = mergeDeep(getTheme().darkThemeToggle, customTheme);
  return (0, import_jsx_runtime21.jsxs)("button", { type: "button", "aria-label": "Toggle dark mode", "data-testid": "dark-theme-toggle", className: twMerge(theme2.root.base, className), onClick: toggleMode, ...props, children: [(0, import_jsx_runtime21.jsx)(IconDark, { "aria-label": "Currently dark mode", "data-active": isMounted && computedMode === "dark", className: twMerge(theme2.root.icon, "hidden dark:block") }), (0, import_jsx_runtime21.jsx)(IconLight, { "aria-label": "Currently light mode", "data-active": isMounted && computedMode === "light", className: twMerge(theme2.root.icon, "dark:hidden") })] });
};
DarkThemeToggle.displayName = "DarkThemeToggle";

// node_modules/flowbite-react/lib/esm/components/Datepicker/Datepicker.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var import_react16 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/TextInput/TextInput.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var import_react14 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/HelperText/HelperText.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var HelperText = ({ children, className, color = "default", theme: customTheme = {}, value, ...props }) => {
  const theme2 = mergeDeep(getTheme().helperText, customTheme);
  return (0, import_jsx_runtime22.jsx)("p", { className: twMerge(theme2.root.base, theme2.root.colors[color], className), ...props, children: value ?? children ?? "" });
};
HelperText.displayName = "HelperText";

// node_modules/flowbite-react/lib/esm/components/TextInput/TextInput.js
var TextInput = (0, import_react14.forwardRef)(({ addon, className, color = "gray", helperText, icon: Icon, rightIcon: RightIcon, shadow, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().textInput, customTheme);
  return (0, import_jsx_runtime23.jsxs)(import_jsx_runtime23.Fragment, { children: [(0, import_jsx_runtime23.jsxs)("div", { className: twMerge(theme2.base, className), children: [addon && (0, import_jsx_runtime23.jsx)("span", { className: theme2.addon, children: addon }), (0, import_jsx_runtime23.jsxs)("div", { className: theme2.field.base, children: [Icon && (0, import_jsx_runtime23.jsx)("div", { className: theme2.field.icon.base, children: (0, import_jsx_runtime23.jsx)(Icon, { className: theme2.field.icon.svg }) }), RightIcon && (0, import_jsx_runtime23.jsx)("div", { "data-testid": "right-icon", className: theme2.field.rightIcon.base, children: (0, import_jsx_runtime23.jsx)(RightIcon, { className: theme2.field.rightIcon.svg }) }), (0, import_jsx_runtime23.jsx)("input", { className: twMerge(theme2.field.input.base, theme2.field.input.colors[color], theme2.field.input.sizes[sizing], theme2.field.input.withIcon[Icon ? "on" : "off"], theme2.field.input.withRightIcon[RightIcon ? "on" : "off"], theme2.field.input.withAddon[addon ? "on" : "off"], theme2.field.input.withShadow[shadow ? "on" : "off"]), ...props, ref })] })] }), helperText && (0, import_jsx_runtime23.jsx)(HelperText, { color, children: helperText })] });
});
TextInput.displayName = "TextInput";

// node_modules/flowbite-react/lib/esm/components/Datepicker/DatepickerContext.js
var import_react15 = __toESM(require_react());
var DatepickerContext = (0, import_react15.createContext)(void 0);
function useDatePickerContext() {
  const context = (0, import_react15.useContext)(DatepickerContext);
  if (!context) {
    throw new Error("useDatePickerContext should be used within the DatePickerContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Datepicker/Views/Days.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Datepicker/helpers.js
var Views;
(function(Views2) {
  Views2[Views2["Days"] = 0] = "Days";
  Views2[Views2["Months"] = 1] = "Months";
  Views2[Views2["Years"] = 2] = "Years";
  Views2[Views2["Decades"] = 3] = "Decades";
})(Views || (Views = {}));
var WeekStart;
(function(WeekStart2) {
  WeekStart2[WeekStart2["Sunday"] = 0] = "Sunday";
  WeekStart2[WeekStart2["Monday"] = 1] = "Monday";
  WeekStart2[WeekStart2["Tuesday"] = 2] = "Tuesday";
  WeekStart2[WeekStart2["Wednesday"] = 3] = "Wednesday";
  WeekStart2[WeekStart2["Thursday"] = 4] = "Thursday";
  WeekStart2[WeekStart2["Friday"] = 5] = "Friday";
  WeekStart2[WeekStart2["Saturday"] = 6] = "Saturday";
})(WeekStart || (WeekStart = {}));
var isDateInRange = (date, minDate, maxDate) => {
  const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  if (minDate && maxDate) {
    const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime();
    const maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate()).getTime();
    return dateTime >= minDateTime && dateTime <= maxDateTime;
  }
  if (minDate) {
    const minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate()).getTime();
    return dateTime >= minDateTime;
  }
  if (maxDate) {
    const maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate()).getTime();
    return dateTime <= maxDateTime;
  }
  return true;
};
var isDateEqual = (date, selectedDate) => {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
  return date.getTime() === selectedDate.getTime();
};
var getFirstDateInRange = (date, minDate, maxDate) => {
  if (!isDateInRange(date, minDate, maxDate)) {
    if (minDate && date < minDate) {
      date = minDate;
    } else if (maxDate && date > maxDate) {
      date = maxDate;
    }
  }
  return date;
};
var getFirstDayOfTheMonth = (date, weekStart) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();
  let diff = dayOfWeek - weekStart;
  if (diff < 0) {
    diff += 7;
  }
  return addDays(firstDayOfMonth, -diff);
};
var getWeekDays = (lang, weekStart) => {
  const weekdays = [];
  const date = /* @__PURE__ */ new Date(0);
  date.setDate(date.getDate() - date.getDay() + weekStart);
  const formatter = new Intl.DateTimeFormat(lang, { weekday: "short" });
  for (let i2 = 0; i2 < 7; i2++) {
    weekdays.push(formatter.format(addDays(date, i2)));
  }
  return weekdays;
};
var addDays = (date, amount) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};
var addMonths = (date, amount) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + amount);
  return newDate;
};
var addYears = (date, amount) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + amount);
  return newDate;
};
var getFormattedDate = (language, date, options) => {
  let defaultOptions = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  if (options) {
    defaultOptions = options;
  }
  return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};
var startOfYearPeriod = (date, years) => {
  const year = date.getFullYear();
  return Math.floor(year / years) * years;
};
var isDateInDecade = (date, startYear) => {
  const year = date.getFullYear();
  const endYear = startYear + 9;
  return year >= startYear && year <= endYear;
};

// node_modules/flowbite-react/lib/esm/components/Datepicker/Views/Days.js
var DatepickerViewsDays = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, weekStart, minDate, maxDate, viewDate, selectedDate, changeSelectedDate, language } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.days, customTheme);
  const weekDays = getWeekDays(language, weekStart);
  const startDate = getFirstDayOfTheMonth(viewDate, weekStart);
  return (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [(0, import_jsx_runtime24.jsx)("div", { className: theme2.header.base, children: weekDays.map((day, index3) => (0, import_jsx_runtime24.jsx)("span", { className: theme2.header.title, children: day }, index3)) }), (0, import_jsx_runtime24.jsx)("div", { className: theme2.items.base, children: [...Array(42)].map((_date, index3) => {
    const currentDate = addDays(startDate, index3);
    const day = getFormattedDate(language, currentDate, { day: "numeric" });
    const isSelected = isDateEqual(selectedDate, currentDate);
    const isDisabled = !isDateInRange(currentDate, minDate, maxDate);
    return (0, import_jsx_runtime24.jsx)("button", { disabled: isDisabled, type: "button", className: twMerge(theme2.items.item.base, isSelected && theme2.items.item.selected, isDisabled && theme2.items.item.disabled), onClick: () => {
      if (isDisabled)
        return;
      changeSelectedDate(currentDate, true);
    }, children: day }, index3);
  }) })] });
};

// node_modules/flowbite-react/lib/esm/components/Datepicker/Views/Decades.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var DatepickerViewsDecades = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, viewDate, setViewDate, setView } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.decades, customTheme);
  return (0, import_jsx_runtime25.jsx)("div", { className: theme2.items.base, children: [...Array(12)].map((_year, index3) => {
    const first = startOfYearPeriod(viewDate, 100);
    const year = first - 10 + index3 * 10;
    const firstDate = new Date(year, 0, 1);
    const lastDate = addYears(firstDate, 9);
    const isSelected = isDateInDecade(viewDate, year);
    const isDisabled = !isDateInRange(viewDate, firstDate, lastDate);
    return (0, import_jsx_runtime25.jsx)("button", { disabled: isDisabled, type: "button", className: twMerge(theme2.items.item.base, isSelected && theme2.items.item.selected, isDisabled && theme2.items.item.disabled), onClick: () => {
      if (isDisabled)
        return;
      setViewDate(addYears(viewDate, year - selectedDate.getFullYear()));
      setView(Views.Years);
    }, children: year }, index3);
  }) });
};

// node_modules/flowbite-react/lib/esm/components/Datepicker/Views/Months.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var DatepickerViewsMonth = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, minDate, maxDate, selectedDate, viewDate, language, setViewDate, setView } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.months, customTheme);
  return (0, import_jsx_runtime26.jsx)("div", { className: theme2.items.base, children: [...Array(12)].map((_month, index3) => {
    const newDate = new Date(viewDate.getTime());
    newDate.setMonth(index3);
    const month = getFormattedDate(language, newDate, { month: "short" });
    const isSelected = isDateEqual(selectedDate, newDate);
    const isDisabled = !isDateInRange(newDate, minDate, maxDate);
    return (0, import_jsx_runtime26.jsx)("button", { disabled: isDisabled, type: "button", className: twMerge(theme2.items.item.base, isSelected && theme2.items.item.selected, isDisabled && theme2.items.item.disabled), onClick: () => {
      if (isDisabled)
        return;
      setViewDate(newDate);
      setView(Views.Days);
    }, children: month }, index3);
  }) });
};

// node_modules/flowbite-react/lib/esm/components/Datepicker/Views/Years.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var DatepickerViewsYears = ({ theme: customTheme = {} }) => {
  const { theme: rootTheme, selectedDate, minDate, maxDate, viewDate, setViewDate, setView } = useDatePickerContext();
  const theme2 = mergeDeep(rootTheme.views.years, customTheme);
  return (0, import_jsx_runtime27.jsx)("div", { className: theme2.items.base, children: [...Array(12)].map((_year, index3) => {
    const first = startOfYearPeriod(viewDate, 10);
    const year = first - 1 + index3 * 1;
    const newDate = new Date(viewDate.getTime());
    newDate.setFullYear(year);
    const isSelected = isDateEqual(selectedDate, newDate);
    const isDisabled = !isDateInRange(newDate, minDate, maxDate);
    return (0, import_jsx_runtime27.jsx)("button", { disabled: isDisabled, type: "button", className: twMerge(theme2.items.item.base, isSelected && theme2.items.item.selected, isDisabled && theme2.items.item.disabled), onClick: () => {
      if (isDisabled)
        return;
      setViewDate(newDate);
      setView(Views.Months);
    }, children: year }, index3);
  }) });
};

// node_modules/flowbite-react/lib/esm/components/Datepicker/Datepicker.js
var Datepicker = ({
  title,
  open,
  inline: inline3 = false,
  autoHide = true,
  // Hide when selected the day
  showClearButton = true,
  labelClearButton = "Clear",
  showTodayButton = true,
  labelTodayButton = "Today",
  defaultDate = /* @__PURE__ */ new Date(),
  minDate,
  maxDate,
  language = "en",
  weekStart = WeekStart.Sunday,
  className,
  theme: customTheme = {},
  onSelectedDateChanged,
  ...props
}) => {
  const theme2 = mergeDeep(getTheme().datepicker, customTheme);
  defaultDate = getFirstDateInRange(defaultDate, minDate, maxDate);
  const [isOpen, setIsOpen] = (0, import_react16.useState)(open);
  const [view, setView] = (0, import_react16.useState)(Views.Days);
  const [selectedDate, setSelectedDate] = (0, import_react16.useState)(defaultDate);
  const [viewDate, setViewDate] = (0, import_react16.useState)(defaultDate);
  const inputRef = (0, import_react16.useRef)(null);
  const datepickerRef = (0, import_react16.useRef)(null);
  const changeSelectedDate = (date, useAutohide) => {
    setSelectedDate(date);
    if (onSelectedDateChanged) {
      onSelectedDateChanged(date);
    }
    if (autoHide && view === Views.Days && useAutohide == true && !inline3) {
      setIsOpen(false);
    }
  };
  const renderView = (type) => {
    switch (type) {
      case Views.Decades:
        return (0, import_jsx_runtime28.jsx)(DatepickerViewsDecades, { theme: theme2.views.decades });
      case Views.Years:
        return (0, import_jsx_runtime28.jsx)(DatepickerViewsYears, { theme: theme2.views.years });
      case Views.Months:
        return (0, import_jsx_runtime28.jsx)(DatepickerViewsMonth, { theme: theme2.views.months });
      case Views.Days:
      default:
        return (0, import_jsx_runtime28.jsx)(DatepickerViewsDays, { theme: theme2.views.days });
    }
  };
  const getNextView = () => {
    switch (view) {
      case Views.Days:
        return Views.Months;
      case Views.Months:
        return Views.Years;
      case Views.Years:
        return Views.Decades;
    }
    return view;
  };
  const getViewTitle = () => {
    switch (view) {
      case Views.Decades:
        return `${startOfYearPeriod(viewDate, 100)} - ${startOfYearPeriod(viewDate, 100) + 90}`;
      case Views.Years:
        return `${startOfYearPeriod(viewDate, 10)} - ${startOfYearPeriod(viewDate, 10) + 9}`;
      case Views.Months:
        return getFormattedDate(language, viewDate, { year: "numeric" });
      case Views.Days:
      default:
        return getFormattedDate(language, viewDate, { month: "long", year: "numeric" });
    }
  };
  const getViewDatePage = (view2, date, value) => {
    switch (view2) {
      case Views.Days:
        return new Date(addMonths(date, value));
      case Views.Months:
        return new Date(addYears(date, value));
      case Views.Years:
        return new Date(addYears(date, value * 10));
      case Views.Decades:
        return new Date(addYears(date, value * 100));
      default:
        return new Date(addYears(date, value * 10));
    }
  };
  (0, import_react16.useEffect)(() => {
    const handleClickOutside = (event) => {
      var _a, _b;
      const clickedInsideDatepicker = (_a = datepickerRef == null ? void 0 : datepickerRef.current) == null ? void 0 : _a.contains(event.target);
      const clickedInsideInput = (_b = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _b.contains(event.target);
      if (!clickedInsideDatepicker && !clickedInsideInput) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef, datepickerRef, setIsOpen]);
  return (0, import_jsx_runtime28.jsx)(DatepickerContext.Provider, { value: {
    theme: theme2,
    language,
    minDate,
    maxDate,
    weekStart,
    isOpen,
    setIsOpen,
    view,
    setView,
    viewDate,
    setViewDate,
    selectedDate,
    setSelectedDate,
    changeSelectedDate
  }, children: (0, import_jsx_runtime28.jsxs)("div", { className: twMerge(theme2.root.base, className), children: [!inline3 && (0, import_jsx_runtime28.jsx)(TextInput, { theme: theme2.root.input, icon: HiCalendar, ref: inputRef, onFocus: () => {
    if (!isDateEqual(viewDate, selectedDate)) {
      setViewDate(selectedDate);
    }
    setIsOpen(true);
  }, value: selectedDate && getFormattedDate(language, selectedDate), readOnly: true, ...props }), (isOpen || inline3) && (0, import_jsx_runtime28.jsx)("div", { ref: datepickerRef, className: twMerge(theme2.popup.root.base, inline3 && theme2.popup.root.inline), children: (0, import_jsx_runtime28.jsxs)("div", { className: theme2.popup.root.inner, children: [(0, import_jsx_runtime28.jsxs)("div", { className: theme2.popup.header.base, children: [title && (0, import_jsx_runtime28.jsx)("div", { className: theme2.popup.header.title, children: title }), (0, import_jsx_runtime28.jsxs)("div", { className: theme2.popup.header.selectors.base, children: [(0, import_jsx_runtime28.jsx)("button", { type: "button", className: twMerge(theme2.popup.header.selectors.button.base, theme2.popup.header.selectors.button.prev), onClick: () => setViewDate(getViewDatePage(view, viewDate, -1)), children: (0, import_jsx_runtime28.jsx)(HiArrowLeft, {}) }), (0, import_jsx_runtime28.jsx)("button", { type: "button", className: twMerge(theme2.popup.header.selectors.button.base, theme2.popup.header.selectors.button.view), onClick: () => setView(getNextView()), children: getViewTitle() }), (0, import_jsx_runtime28.jsx)("button", { type: "button", className: twMerge(theme2.popup.header.selectors.button.base, theme2.popup.header.selectors.button.next), onClick: () => setViewDate(getViewDatePage(view, viewDate, 1)), children: (0, import_jsx_runtime28.jsx)(HiArrowRight, {}) })] })] }), (0, import_jsx_runtime28.jsx)("div", { className: theme2.popup.view.base, children: renderView(view) }), (showClearButton || showTodayButton) && (0, import_jsx_runtime28.jsxs)("div", { className: theme2.popup.footer.base, children: [showTodayButton && (0, import_jsx_runtime28.jsx)("button", { type: "button", className: twMerge(theme2.popup.footer.button.base, theme2.popup.footer.button.today), onClick: () => {
    const today = /* @__PURE__ */ new Date();
    changeSelectedDate(today, true);
    setViewDate(today);
  }, children: labelTodayButton }), showClearButton && (0, import_jsx_runtime28.jsx)("button", { type: "button", className: twMerge(theme2.popup.footer.button.base, theme2.popup.footer.button.clear), onClick: () => {
    changeSelectedDate(defaultDate, true);
    if (defaultDate) {
      setViewDate(defaultDate);
    }
  }, children: labelClearButton })] })] }) })] }) });
};
Datepicker.displayName = "Datepicker";

// node_modules/flowbite-react/lib/esm/components/Dropdown/Dropdown.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React2 = __toESM(require_react(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle2(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}

// node_modules/flowbite-react/node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function activeElement(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null || (_activeElement = _activeElement.shadowRoot) == null ? void 0 : _activeElement.activeElement) != null) {
    var _activeElement;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  if (isAndroid() && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM())
    return false;
  return !isAndroid() && event.width === 0 && event.height === 0 || isAndroid() && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function isAndroid() {
  const re = /android/i;
  return re.test(getPlatform()) || re.test(getUserAgent());
}
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
function isJSDOM() {
  return getUserAgent().includes("jsdom/");
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isRootElement(element) {
  return element.matches("html,body");
}
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e2 = event;
  return e2.target != null && node.contains(e2.target);
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isTypeableCombobox(element) {
  if (!element)
    return false;
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
  x: v,
  y: v
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i2 = 0; i2 < validMiddleware.length; i2++) {
    const {
      name,
      fn
    } = validMiddleware[i2];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter((placement) => getAlignment(placement) === alignment), ...allowedPlacements.filter((placement) => getAlignment(placement) !== alignment)] : allowedPlacements.filter((placement) => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter((placement) => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }
    return true;
  });
}
var autoPlacement = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "autoPlacement",
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform: platform2,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      const placements$1 = alignment !== void 0 || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [], {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map((d) => {
        const alignment2 = getAlignment(d.placement);
        return [d.placement, alignment2 && crossAxis ? (
          // Check along the mainAxis and main crossAxis side.
          d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0)
        ) : (
          // Check only the mainAxis.
          d.overflows[0]
        ), d.overflows];
      }).sort((a2, b) => a2[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d) => d[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        getAlignment(d[0]) ? 2 : 3
      ).every((v) => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a2, b) => a2.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b) => a2[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = currentWin.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = currentWin.frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(floating) {
  return topLayerSelectors.some((selector) => {
    try {
      return floating.matches(selector);
    } catch (e2) {
      return false;
    }
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const x = rect.left + scroll.scrollLeft - offsets.x;
  const y = rect.top + scroll.scrollTop - offsets.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element) || isTopLayer(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(data.floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e2) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var autoPlacement2 = autoPlacement;
var shift2 = shift;
var flip2 = flip;
var arrow2 = arrow;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React = __toESM(require_react(), 1);
var import_react17 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var arrow3 = (options) => {
  function isRef(value) {
    return {}.hasOwnProperty.call(value, "current");
  }
  return {
    name: "arrow",
    options,
    fn(state) {
      const {
        element,
        padding
      } = typeof options === "function" ? options(state) : options;
      if (element && isRef(element)) {
        if (element.current != null) {
          return arrow2({
            element: element.current,
            padding
          }).fn(state);
        }
        return {};
      }
      if (element) {
        return arrow2({
          element,
          padding
        }).fn(state);
      }
      return {};
    }
  };
};
var index = typeof document !== "undefined" ? import_react17.useLayoutEffect : import_react17.useEffect;
function deepEqual(a2, b) {
  if (a2 === b) {
    return true;
  }
  if (typeof a2 !== typeof b) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b.toString()) {
    return true;
  }
  let length;
  let i2;
  let keys;
  if (a2 && b && typeof a2 === "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length !== b.length)
        return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a2[i2], b[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b !== b;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var isInert = function isInert2(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && isInert2(node.parentNode);
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var getCandidatesIteratively = function getCandidatesIteratively2(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively2(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a2, b) {
  return a2.tabIndex === b.tabIndex ? a2.documentOrder - b.documentOrder : a2.tabIndex - b.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r2 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r2;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i2 = 0; i2 < nodes.length; i2++) {
    if (nodes[i2].checked && nodes[i2].form === form) {
      return nodes[i2];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i2 = 0; i2 < parentNode.children.length; i2++) {
          var child = parentNode.children.item(i2);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isValidShadowRootTabbable = function isValidShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var sortByOrder = function sortByOrder2(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i2) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? sortByOrder2(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i2,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isValidShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return sortByOrder(candidates);
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/flowbite-react/node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var import_react_dom3 = __toESM(require_react_dom(), 1);
function useMergeRefs(refs) {
  return React2.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var useInsertionEffect = React2["useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React2.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React2.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  const isDisabledIndex = disabledIndices ? (index4) => disabledIndices.includes(index4) : (index4) => {
    const element = list[index4];
    return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
  };
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabledIndex(index3));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset2 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset2 : offset2 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices,
          decrement: true
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i2 = 0; i2 < width; i2++) {
        for (let j = 0; j < height; j++) {
          targetCells.push(startIndex + i2 + j * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1)
    return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      return firstCellIndex + sizes[index3].width - 1;
    case "bl":
      return firstCellIndex + (sizes[index3].height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react18.useLayoutEffect : import_react18.useEffect;
function sortByDocumentPosition(a2, b) {
  const position = a2.compareDocumentPosition(b);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React2.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(_ref) {
  let {
    children,
    elementsRef,
    labelsRef
  } = _ref;
  const [map, setMap] = React2.useState(() => /* @__PURE__ */ new Map());
  const register = React2.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React2.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React2.createElement(FloatingListContext.Provider, {
    value: React2.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(_temp) {
  let {
    label
  } = _temp === void 0 ? {} : _temp;
  const [index$1, setIndex] = React2.useState(null);
  const componentRef = React2.useRef(null);
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React2.useContext(FloatingListContext);
  const ref = React2.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React2.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React2.cloneElement(render, computedProps);
  }
  return React2.createElement("div", computedProps);
}
var CompositeContext = React2.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React2.forwardRef(function Composite2(_ref, forwardedRef) {
  let {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices = [],
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...props
  } = _ref;
  const [internalActiveIndex, internalSetActiveIndex] = React2.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React2.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React2.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key))
      return;
    let nextIndex = activeIndex;
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !disabledIndices.includes(index3));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !(disabledIndices != null && disabledIndices.includes(index3)) ? cellIndex : foundIndex, -1);
      nextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices, void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
    }
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...props,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e2) {
      props.onKeyDown == null || props.onKeyDown(e2);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e2);
      handleKeyDown(e2);
    }
  };
  return React2.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React2.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React2.forwardRef(function CompositeItem2(_ref2, forwardedRef) {
  let {
    render,
    ...props
  } = _ref2;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React2.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...props,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e2) {
      props.onFocus == null || props.onFocus(e2);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e2);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + count++;
function useFloatingId() {
  const [id, setId] = React2.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React2.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
var useReactId = React2["useId".toString()];
var useId = useReactId || useFloatingId;
var FloatingArrow = React2.forwardRef(function FloatingArrow2(_ref, ref) {
  let {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = _ref;
  if (true) {
    if (!ref) {
      console.warn("Floating UI: The `ref` prop is required for the `FloatingArrow`", "component.");
    }
  }
  const clipPathId = useId();
  if (!floating) {
    return null;
  }
  strokeWidth *= 2;
  const halfStrokeWidth = strokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const [side, alignment] = placement.split("-");
  const isRTL2 = platform.isRTL(floating);
  const isCustomShape = !!d;
  const isVerticalSide = side === "top" || side === "bottom";
  const yOffsetProp = staticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = staticOffset && alignment === "end" ? "right" : "left";
  if (staticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? staticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? staticOffset || arrow4.y : "";
  const dValue = d || // biome-ignore lint/style/useTemplate: readability
  "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React2.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + strokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + strokeWidth / 2 + "px)",
      transform: "" + rotation + (transform != null ? transform : ""),
      ...restStyle
    }
  }), strokeWidth > 0 && React2.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: strokeWidth + (d ? 0 : 1),
    d: dValue
  }), React2.createElement("path", {
    stroke: strokeWidth && !d ? rest.fill : "none",
    d: dValue
  }), React2.createElement("clipPath", {
    id: clipPathId
  }, React2.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + strokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l2) => l2 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React2.createContext(null);
var FloatingTreeContext = React2.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React2.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React2.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
function useLatestRef2(value) {
  const ref = (0, import_react18.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
function useHover(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = props;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const pointerTypeRef = React2.useRef();
  const timeoutRef = React2.useRef();
  const handlerRef = React2.useRef();
  const restTimeoutRef = React2.useRef();
  const blockMouseMoveRef = React2.useRef(true);
  const performedPointerEventsMutationRef = React2.useRef(false);
  const unbindMouseMoveRef = React2.useRef(() => {
  });
  const isHoverOpen = React2.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onOpenChange2(_ref) {
      let {
        open: open2
      } = _ref;
      if (!open2) {
        clearTimeout(timeoutRef.current);
        clearTimeout(restTimeoutRef.current);
        blockMouseMoveRef.current = true;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [enabled, events]);
  React2.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave(event) {
      if (isHoverOpen()) {
        onOpenChange(false, event, "hover");
      }
    }
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, isHoverOpen]);
  const closeWithDelay = React2.useCallback(function(event, runElseBranch, reason) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    if (reason === void 0) {
      reason = "hover";
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false, event, reason), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false, event, reason);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = React2.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = React2.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true, event, "hover");
        }, openDelay);
      } else {
        onOpenChange(true, event, "hover");
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay(event, true, "safe-polygon");
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      const shouldClose = pointerTypeRef.current === "touch" ? !contains(floating, event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null || handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay(event);
        }
      })(event);
    }
    if (isElement(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null || floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null || floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement(domReference) && floating) {
        var _tree$nodesRef$curren;
        const ref = domReference;
        const parentFloating = tree == null || (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null || (_tree$nodesRef$curren = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React2.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, domReference, cleanupMouseMoveHandler, clearPointerEvents]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove(event) {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true, event.nativeEvent, "hover");
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave(event) {
          closeWithDelay(event.nativeEvent, false);
        }
      }
    };
  }, [enabled, restMs, open, onOpenChange, closeWithDelay]);
}
var FloatingDelayGroupContext = React2.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  });
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n2) => {
        var _node$context2;
        return node.parentId === n2.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    });
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
function getDeepestNode(nodes, id) {
  let deepestNodeId;
  let maxDepth = -1;
  function findDeepest(nodeId, depth) {
    if (depth > maxDepth) {
      deepestNodeId = nodeId;
      maxDepth = depth;
    }
    const children = getChildren(nodes, nodeId);
    children.forEach((child) => {
      findDeepest(child.id, depth + 1);
    });
  }
  findDeepest(id, 0);
  return nodes.find((node) => node.id === deepestNodeId);
}
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
var markerMap = {};
var lockCount = 0;
var supportsInert = () => typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
var unwrapHost = (node) => node && (node.host || unwrapHost(node.parentNode));
var correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x) => x != null);
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert) {
  const markerName = "data-floating-ui-inert";
  const controlAttribute = inert ? "inert" : ariaHidden ? "aria-hidden" : null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const elementsToKeep = /* @__PURE__ */ new Set();
  const elementsToStop = new Set(avoidElements);
  const hiddenElements = [];
  if (!markerMap[markerName]) {
    markerMap[markerName] = /* @__PURE__ */ new WeakMap();
  }
  const markerCounter = markerMap[markerName];
  avoidElements.forEach(keep);
  deep(body);
  elementsToKeep.clear();
  function keep(el) {
    if (!el || elementsToKeep.has(el)) {
      return;
    }
    elementsToKeep.add(el);
    el.parentNode && keep(el.parentNode);
  }
  function deep(parent) {
    if (!parent || elementsToStop.has(parent)) {
      return;
    }
    Array.prototype.forEach.call(parent.children, (node) => {
      if (elementsToKeep.has(node)) {
        deep(node);
      } else {
        const attr2 = controlAttribute ? node.getAttribute(controlAttribute) : null;
        const alreadyHidden = attr2 !== null && attr2 !== "false";
        const counterValue = (counterMap.get(node) || 0) + 1;
        const markerValue = (markerCounter.get(node) || 0) + 1;
        counterMap.set(node, counterValue);
        markerCounter.set(node, markerValue);
        hiddenElements.push(node);
        if (counterValue === 1 && alreadyHidden) {
          uncontrolledElementsSet.add(node);
        }
        if (markerValue === 1) {
          node.setAttribute(markerName, "");
        }
        if (!alreadyHidden && controlAttribute) {
          node.setAttribute(controlAttribute, "true");
        }
      }
    });
  }
  lockCount++;
  return () => {
    hiddenElements.forEach((element) => {
      const counterValue = (counterMap.get(element) || 0) - 1;
      const markerValue = (markerCounter.get(element) || 0) - 1;
      counterMap.set(element, counterValue);
      markerCounter.set(element, markerValue);
      if (!counterValue) {
        if (!uncontrolledElementsSet.has(element) && controlAttribute) {
          element.removeAttribute(controlAttribute);
        }
        uncontrolledElementsSet.delete(element);
      }
      if (!markerValue) {
        element.removeAttribute(markerName);
      }
    });
    lockCount--;
    if (!lockCount) {
      counterMap = /* @__PURE__ */ new WeakMap();
      counterMap = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSet = /* @__PURE__ */ new WeakSet();
      markerMap = {};
    }
  };
}
function markOthers(avoidElements, ariaHidden, inert) {
  if (ariaHidden === void 0) {
    ariaHidden = false;
  }
  if (inert === void 0) {
    inert = false;
  }
  const body = getDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements.concat(Array.from(body.querySelectorAll("[aria-live]"))), body, ariaHidden, inert);
}
var getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
});
function getTabbableIn(container, direction) {
  const allTabbable = tabbable(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React2.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React2.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React2.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React2.createContext(null);
var attr = createAttribute("portal");
function useFloatingPortalNode(_temp) {
  let {
    id,
    root
  } = _temp === void 0 ? {} : _temp;
  const [portalNode, setPortalNode] = React2.useState(null);
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const portalNodeRef = React2.useRef(null);
  index2(() => {
    return () => {
      portalNode == null || portalNode.remove();
      queueMicrotask(() => {
        portalNodeRef.current = null;
      });
    };
  }, [portalNode]);
  index2(() => {
    if (portalNodeRef.current)
      return;
    const existingIdRoot = id ? document.getElementById(id) : null;
    if (!existingIdRoot)
      return;
    const subRoot = document.createElement("div");
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, "");
    existingIdRoot.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, uniqueId]);
  index2(() => {
    if (portalNodeRef.current)
      return;
    let container = root || (portalContext == null ? void 0 : portalContext.portalNode);
    if (container && !isElement(container))
      container = container.current;
    container = container || document.body;
    let idWrapper = null;
    if (id) {
      idWrapper = document.createElement("div");
      idWrapper.id = id;
      container.appendChild(idWrapper);
    }
    const subRoot = document.createElement("div");
    subRoot.id = uniqueId;
    subRoot.setAttribute(attr, "");
    container = idWrapper || container;
    container.appendChild(subRoot);
    portalNodeRef.current = subRoot;
    setPortalNode(subRoot);
  }, [id, root, uniqueId, portalContext]);
  return portalNode;
}
function FloatingPortal(_ref) {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    root
  });
  const [focusManagerState, setFocusManagerState] = React2.useState(null);
  const beforeOutsideRef = React2.useRef(null);
  const afterOutsideRef = React2.useRef(null);
  const beforeInsideRef = React2.useRef(null);
  const afterInsideRef = React2.useRef(null);
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && // Don't render if unmount is transitioning.
    focusManagerState.open && preserveTabOrder && !!(root || portalNode)
  );
  React2.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return React2.createElement(PortalContext.Provider, {
    value: React2.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && React2.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null || _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null || prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && React2.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), portalNode && (0, import_react_dom3.createPortal)(children, portalNode), shouldRenderGuards && portalNode && React2.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null || _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null || nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false, event.nativeEvent));
      }
    }
  }));
}
var usePortalContext = () => React2.useContext(PortalContext);
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function addPreviouslyFocusedElement(element) {
  previouslyFocusedElements = previouslyFocusedElements.filter((el) => el.isConnected);
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(element);
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  return previouslyFocusedElements.slice().reverse().find((el) => el.isConnected);
}
var VisuallyHiddenDismiss = React2.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React2.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled = false,
    order = ["content"],
    guards: _guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = props;
  const {
    open,
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const guards = supportsInert() ? _guards : true;
  const orderRef = useLatestRef2(order);
  const initialFocusRef = useLatestRef2(initialFocus);
  const returnFocusRef = useLatestRef2(returnFocus);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const startDismissButtonRef = React2.useRef(null);
  const endDismissButtonRef = React2.useRef(null);
  const preventReturnFocusRef = React2.useRef(false);
  const isPointerDownRef = React2.useRef(false);
  const isInsidePortal = portalContext != null;
  const getTabbableContent = React2.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? tabbable(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React2.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React2.useEffect(() => {
    if (disabled || !modal)
      return;
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floating, activeElement(getDocument(floating))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [disabled, domReference, floating, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent, getTabbableElements]);
  React2.useEffect(() => {
    if (disabled || !closeOnFocusOut)
      return;
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      queueMicrotask(() => {
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute(createAttribute("focus-guard")) || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
          var _node$context, _node$context2;
          return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
        }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
          var _node$context3, _node$context4;
          return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
        })));
        if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        relatedTarget !== getPreviouslyFocusedElement()) {
          preventReturnFocusRef.current = true;
          onOpenChange(false, event);
        }
      });
    }
    if (floating && isHTMLElement(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [disabled, domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React2.useEffect(() => {
    var _portalContext$portal;
    if (disabled)
      return;
    const portalNodes = Array.from((portalContext == null || (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[" + createAttribute("portal") + "]")) || []);
    if (floating) {
      const insideElements = [floating, ...portalNodes, startDismissButtonRef.current, endDismissButtonRef.current, orderRef.current.includes("reference") || isUntrappedTypeableCombobox ? domReference : null].filter((x) => x != null);
      const cleanup = modal || isUntrappedTypeableCombobox ? markOthers(insideElements, guards, !guards) : markOthers(insideElements);
      return () => {
        cleanup();
      };
    }
  }, [disabled, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, guards]);
  index2(() => {
    if (disabled || !floating)
      return;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const focusableElements = getTabbableElements(floating);
      const initialFocusValue = initialFocusRef.current;
      const elToFocus = (typeof initialFocusValue === "number" ? focusableElements[initialFocusValue] : initialFocusValue.current) || floating;
      const focusAlreadyInsideFloatingEl = contains(floating, previouslyFocusedElement);
      if (!ignoreInitialFocus && !focusAlreadyInsideFloatingEl && open) {
        enqueueFocus(elToFocus, {
          preventScroll: elToFocus === floating
        });
      }
    });
  }, [disabled, open, floating, ignoreInitialFocus, getTabbableElements, initialFocusRef]);
  index2(() => {
    if (disabled || !floating)
      return;
    let preventReturnFocusScroll = false;
    const doc = getDocument(floating);
    const previouslyFocusedElement = activeElement(doc);
    const contextData = dataRef.current;
    addPreviouslyFocusedElement(previouslyFocusedElement);
    function onOpenChange2(_ref) {
      let {
        reason,
        event,
        nested
      } = _ref;
      if (reason === "escape-key" && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      if (reason === "hover" && event.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (reason !== "outside-press")
        return;
      if (nested) {
        preventReturnFocusRef.current = false;
        preventReturnFocusScroll = true;
      } else {
        preventReturnFocusRef.current = !(isVirtualClick(event) || isVirtualPointerEvent(event));
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
      const activeEl = activeElement(doc);
      const isFocusInsideFloatingTree = contains(floating, activeEl) || tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _node$context5;
        return contains((_node$context5 = node.context) == null ? void 0 : _node$context5.elements.floating, activeEl);
      });
      const shouldFocusReference = isFocusInsideFloatingTree || contextData.openEvent && ["click", "mousedown"].includes(contextData.openEvent.type);
      if (shouldFocusReference && refs.domReference.current) {
        addPreviouslyFocusedElement(refs.domReference.current);
      }
      const returnElement = getPreviouslyFocusedElement();
      if (returnFocusRef.current && !preventReturnFocusRef.current && isHTMLElement(returnElement) && // If the focus moved somewhere else after mount, avoid returning focus
      // since it likely entered a different element which should be
      // respected: https://github.com/floating-ui/floating-ui/issues/2607
      (returnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
        enqueueFocus(returnElement, {
          // When dismissing nested floating elements, by the time the rAF has
          // executed, the menus will all have been unmounted. When they try
          // to get focused, the calls get ignored — leaving the root
          // reference focused as desired.
          cancelPrevious: false,
          preventScroll: preventReturnFocusScroll
        });
      }
    };
  }, [disabled, floating, returnFocusRef, dataRef, refs, events, tree, nodeId]);
  index2(() => {
    if (disabled || !portalContext)
      return;
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange,
      refs
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled, portalContext, modal, open, onOpenChange, refs, closeOnFocusOut]);
  index2(() => {
    if (disabled || !floating || typeof MutationObserver !== "function" || ignoreInitialFocus) {
      return;
    }
    const handleMutation = () => {
      const tabIndex = floating.getAttribute("tabindex");
      if (orderRef.current.includes("floating") || activeElement(getDocument(floating)) !== refs.domReference.current && getTabbableContent().length === 0) {
        if (tabIndex !== "0") {
          floating.setAttribute("tabindex", "0");
        }
      } else if (tabIndex !== "-1") {
        floating.setAttribute("tabindex", "-1");
      }
    };
    handleMutation();
    const observer = new MutationObserver(handleMutation);
    observer.observe(floating, {
      childList: true,
      subtree: true,
      attributes: true
    });
    return () => {
      observer.disconnect();
    };
  }, [disabled, floating, refs, orderRef, getTabbableContent, ignoreInitialFocus]);
  function renderDismissButton(location) {
    if (disabled || !visuallyHiddenDismiss || !modal) {
      return null;
    }
    return React2.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: (event) => onOpenChange(false, event.nativeEvent)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss");
  }
  const shouldRenderGuards = !disabled && guards && (isInsidePortal || modal);
  return React2.createElement(React2.Fragment, null, shouldRenderGuards && React2.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null || nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null || _portalContext$before.focus();
        }
      }
    }
  }), !isUntrappedTypeableCombobox && renderDismissButton("start"), children, renderDismissButton("end"), shouldRenderGuards && React2.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        if (closeOnFocusOut) {
          preventReturnFocusRef.current = true;
        }
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null || prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null || _portalContext$afterO.focus();
        }
      }
    }
  }));
}
var activeLocks = /* @__PURE__ */ new Set();
var FloatingOverlay = React2.forwardRef(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  const lockId = useId();
  index2(() => {
    if (!lockScroll)
      return;
    activeLocks.add(lockId);
    const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
    const bodyStyle = document.body.style;
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.pageXOffset;
    const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.pageYOffset;
    bodyStyle.overflow = "hidden";
    if (scrollbarWidth) {
      bodyStyle[paddingProp] = scrollbarWidth + "px";
    }
    if (isIOS) {
      var _window$visualViewpor, _window$visualViewpor2;
      const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
      const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
      Object.assign(bodyStyle, {
        position: "fixed",
        top: -(scrollY - Math.floor(offsetTop)) + "px",
        left: -(scrollX - Math.floor(offsetLeft)) + "px",
        right: "0"
      });
    }
    return () => {
      activeLocks.delete(lockId);
      if (activeLocks.size === 0) {
        Object.assign(bodyStyle, {
          overflow: "",
          [paddingProp]: ""
        });
        if (isIOS) {
          Object.assign(bodyStyle, {
            position: "",
            top: "",
            left: "",
            right: ""
          });
          window.scrollTo(scrollX, scrollY);
        }
      }
    };
  }, [lockId, lockScroll]);
  return React2.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function isButtonTarget(event) {
  return isHTMLElement(event.target) && event.target.tagName === "BUTTON";
}
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
function useClick(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = props;
  const pointerTypeRef = React2.useRef();
  const didKeyDownRef = React2.useRef(false);
  return React2.useMemo(() => {
    if (!enabled)
      return {};
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === "click") {
            return;
          }
          if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
            onOpenChange(false, event.nativeEvent, "click");
          } else {
            event.preventDefault();
            onOpenChange(true, event.nativeEvent, "click");
          }
        },
        onClick(event) {
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open && toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
            onOpenChange(false, event.nativeEvent, "click");
          } else {
            onOpenChange(true, event.nativeEvent, "click");
          }
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0;
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event)) {
            return;
          }
          if (event.key === " " && !isSpaceIgnored(domReference)) {
            event.preventDefault();
            didKeyDownRef.current = true;
          }
          if (event.key === "Enter") {
            if (open && toggle) {
              onOpenChange(false, event.nativeEvent, "click");
            } else {
              onOpenChange(true, event.nativeEvent, "click");
            }
          }
        },
        onKeyUp(event) {
          if (event.defaultPrevented || !keyboardHandlers || isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === " " && didKeyDownRef.current) {
            didKeyDownRef.current = false;
            if (open && toggle) {
              onOpenChange(false, event.nativeEvent, "click");
            } else {
              onOpenChange(true, event.nativeEvent, "click");
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
}
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeProp = (normalizable) => {
  var _normalizable$escapeK, _normalizable$outside;
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : (_normalizable$escapeK = normalizable == null ? void 0 : normalizable.escapeKey) != null ? _normalizable$escapeK : false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : (_normalizable$outside = normalizable == null ? void 0 : normalizable.outsidePress) != null ? _normalizable$outside : true
  };
};
function useDismiss(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = context;
  const {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles,
    capture
  } = props;
  const tree = useFloatingTree();
  const outsidePressFn = useEffectEvent(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React2.useRef(false);
  const endedOrStartedInsideRef = React2.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const {
    escapeKey: escapeKeyCapture,
    outsidePress: outsidePressCapture
  } = normalizeProp(capture);
  const closeOnEscapeKeyDown = useEffectEvent((event) => {
    if (!open || !enabled || !escapeKey || event.key !== "Escape") {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      event.stopPropagation();
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context;
          if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    onOpenChange(false, isReactEvent(event) ? event.nativeEvent : event, "escape-key");
  });
  const closeOnEscapeKeyDownCapture = useEffectEvent((event) => {
    var _getTarget2;
    const callback = () => {
      var _getTarget;
      closeOnEscapeKeyDown(event);
      (_getTarget = getTarget(event)) == null || _getTarget.removeEventListener("keydown", callback);
    };
    (_getTarget2 = getTarget(event)) == null || _getTarget2.addEventListener("keydown", callback);
  });
  const closeOnPressOutside = useEffectEvent((event) => {
    const insideReactTree = insideReactTreeRef.current;
    insideReactTreeRef.current = false;
    const endedOrStartedInside = endedOrStartedInsideRef.current;
    endedOrStartedInsideRef.current = false;
    if (outsidePressEvent === "click" && endedOrStartedInside) {
      return;
    }
    if (insideReactTree) {
      return;
    }
    if (typeof outsidePress === "function" && !outsidePress(event)) {
      return;
    }
    const target = getTarget(event);
    const inertSelector = "[" + createAttribute("inert") + "]";
    const markers = getDocument(floating).querySelectorAll(inertSelector);
    let targetRootAncestor = isElement(target) ? target : null;
    while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
      const nextParent = getParentNode(targetRootAncestor);
      if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
        break;
      }
      targetRootAncestor = nextParent;
    }
    if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
    !contains(target, floating) && // If the target root element contains none of the markers, then the
    // element was injected after the floating element rendered.
    Array.from(markers).every((marker) => !contains(targetRootAncestor, marker))) {
      return;
    }
    if (isHTMLElement(target) && floating) {
      const canScrollX = target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
      const canScrollY = target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
      let xCond = canScrollY && event.offsetX > target.clientWidth;
      if (canScrollY) {
        const isRTL2 = getComputedStyle2(target).direction === "rtl";
        if (isRTL2) {
          xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
        }
      }
      if (xCond || canScrollX && event.offsetY > target.clientHeight) {
        return;
      }
    }
    const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
      var _node$context;
      return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
    });
    if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
      return;
    }
    const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
    if (children.length > 0) {
      let shouldDismiss = true;
      children.forEach((child) => {
        var _child$context2;
        if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
          shouldDismiss = false;
          return;
        }
      });
      if (!shouldDismiss) {
        return;
      }
    }
    onOpenChange(false, event, "outside-press");
  });
  const closeOnPressOutsideCapture = useEffectEvent((event) => {
    var _getTarget4;
    const callback = () => {
      var _getTarget3;
      closeOnPressOutside(event);
      (_getTarget3 = getTarget(event)) == null || _getTarget3.removeEventListener(outsidePressEvent, callback);
    };
    (_getTarget4 = getTarget(event)) == null || _getTarget4.addEventListener(outsidePressEvent, callback);
  });
  React2.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onScroll(event) {
      onOpenChange(false, event, "ancestor-scroll");
    }
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
    outsidePress && doc.addEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", escapeKeyCapture ? closeOnEscapeKeyDownCapture : closeOnEscapeKeyDown, escapeKeyCapture);
      outsidePress && doc.removeEventListener(outsidePressEvent, outsidePressCapture ? closeOnPressOutsideCapture : closeOnPressOutside, outsidePressCapture);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, escapeKeyCapture, closeOnEscapeKeyDownCapture, closeOnPressOutside, outsidePressCapture, closeOnPressOutsideCapture]);
  React2.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onKeyDown: closeOnEscapeKeyDown,
        [bubbleHandlerKeys[referencePressEvent]]: (event) => {
          if (referencePress) {
            onOpenChange(false, event.nativeEvent, "reference-press");
          }
        }
      },
      floating: {
        onKeyDown: closeOnEscapeKeyDown,
        onMouseDown() {
          endedOrStartedInsideRef.current = true;
        },
        onMouseUp() {
          endedOrStartedInsideRef.current = true;
        },
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, referencePress, outsidePressEvent, referencePressEvent, onOpenChange, closeOnEscapeKeyDown]);
}
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function useFloating2(options) {
  var _options$elements2;
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  if (true) {
    var _options$elements;
    const err = "Floating UI: Cannot pass a virtual element to the `elements.reference` option, as it must be a real DOM element. Use `refs.setPositionReference` instead.";
    if ((_options$elements = options.elements) != null && _options$elements.reference && !isElement(options.elements.reference)) {
      var _devMessageSet;
      if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(err))) {
        var _devMessageSet2;
        (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(err);
        console.error(err);
      }
    }
  }
  const [_domReference, setDomReference] = React2.useState(null);
  const domReference = ((_options$elements2 = options.elements) == null ? void 0 : _options$elements2.reference) || _domReference;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    if (open2) {
      dataRef.current.openEvent = event;
    }
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    unstable_onOpenChange == null || unstable_onOpenChange(open2, event, reason);
  });
  const domReferenceRef = React2.useRef(null);
  const dataRef = React2.useRef({});
  const events = React2.useState(() => createPubSub())[0];
  const floatingId = useId();
  const setPositionReference = React2.useCallback((node) => {
    const positionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React2.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React2.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React2.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React2.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    floatingId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, floatingId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React2.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
function useFocus(context, props) {
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    onOpenChange,
    events,
    refs,
    elements: {
      domReference
    }
  } = context;
  const {
    enabled = true,
    visibleOnly = true
  } = props;
  const blockFocusRef = React2.useRef(false);
  const timeoutRef = React2.useRef();
  const keyboardModalityRef = React2.useRef(true);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    const win = getWindow(domReference);
    function onBlur() {
      if (!open && isHTMLElement(domReference) && domReference === activeElement(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    win.addEventListener("blur", onBlur);
    win.addEventListener("keydown", onKeyDown, true);
    return () => {
      win.removeEventListener("blur", onBlur);
      win.removeEventListener("keydown", onKeyDown, true);
    };
  }, [domReference, open, enabled]);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onOpenChange2(_ref) {
      let {
        reason
      } = _ref;
      if (reason === "reference-press" || reason === "escape-key") {
        blockFocusRef.current = true;
      }
    }
    events.on("openchange", onOpenChange2);
    return () => {
      events.off("openchange", onOpenChange2);
    };
  }, [events, enabled]);
  React2.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(event) {
          if (isVirtualPointerEvent(event.nativeEvent))
            return;
          keyboardModalityRef.current = false;
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          if (blockFocusRef.current)
            return;
          const target = getTarget(event.nativeEvent);
          if (visibleOnly && isElement(target)) {
            try {
              if (isSafari() && isMac())
                throw Error();
              if (!target.matches(":focus-visible"))
                return;
            } catch (e2) {
              if (!keyboardModalityRef.current && !isTypeableElement(target)) {
                return;
              }
            }
          }
          onOpenChange(true, event.nativeEvent, "focus");
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = window.setTimeout(() => {
            const activeEl = activeElement(domReference ? domReference.ownerDocument : document);
            if (!relatedTarget && activeEl === domReference)
              return;
            if (contains(refs.floating.current, activeEl) || contains(domReference, activeEl) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false, event.nativeEvent, "focus");
          });
        }
      }
    };
  }, [enabled, visibleOnly, domReference, refs, onOpenChange]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React2.useCallback((userProps) => mergeProps(userProps, propsList, "reference"), deps);
  const getFloatingProps = React2.useCallback((userProps) => mergeProps(userProps, propsList, "floating"), deps);
  const getItemProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React2.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
var isPreventScrollSupported = false;
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key === " " || key === "";
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
  const {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference,
      floating
    }
  } = context;
  const {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = () => {
    },
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = true,
    virtualItemRef,
    itemSizes,
    dense = false
  } = props;
  if (true) {
    if (allowEscape) {
      if (!loop) {
        console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
      }
      if (!virtual) {
        console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
      }
    }
    if (orientation === "vertical" && cols > 1) {
      console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEffectEvent(unstable_onNavigate);
  const focusItemOnOpenRef = React2.useRef(focusItemOnOpen);
  const indexRef = React2.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React2.useRef(null);
  const isPointerModalityRef = React2.useRef(true);
  const previousOnNavigateRef = React2.useRef(onNavigate);
  const previousMountedRef = React2.useRef(!!floating);
  const forceSyncFocus = React2.useRef(false);
  const forceScrollIntoViewRef = React2.useRef(false);
  const disabledIndicesRef = useLatestRef2(disabledIndices);
  const latestOpenRef = useLatestRef2(open);
  const scrollItemIntoViewRef = useLatestRef2(scrollItemIntoView);
  const [activeId, setActiveId] = React2.useState();
  const [virtualId, setVirtualId] = React2.useState();
  const focusItem = useEffectEvent(function(listRef2, indexRef2, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item2 = listRef2.current[indexRef2.current];
    if (!item2)
      return;
    if (virtual) {
      setActiveId(item2.id);
      tree == null || tree.events.emit("virtualfocus", item2);
      if (virtualItemRef) {
        virtualItemRef.current = item2;
      }
    } else {
      enqueueFocus(item2, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        item2.scrollIntoView == null || item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      }
    });
  });
  index2(() => {
    document.createElement("div").focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        indexRef.current = selectedIndex;
        onNavigate(selectedIndex);
      }
    } else if (previousMountedRef.current) {
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, floating, selectedIndex, onNavigate]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open && floating) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }
        if (previousMountedRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }
        if (!previousMountedRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          let runs = 0;
          const waitForListPopulated = () => {
            if (listRef.current[0] == null) {
              if (runs < 2) {
                const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                scheduler(waitForListPopulated);
              }
              runs++;
            } else {
              indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
              keyRef.current = null;
              onNavigate(indexRef.current);
            }
          };
          waitForListPopulated();
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, floating, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
  index2(() => {
    var _nodes$find;
    if (!enabled || floating || !tree || virtual || !previousMountedRef.current) {
      return;
    }
    const nodes = tree.nodesRef.current;
    const parent = (_nodes$find = nodes.find((node) => node.id === parentId)) == null || (_nodes$find = _nodes$find.context) == null ? void 0 : _nodes$find.elements.floating;
    const activeEl = activeElement(getDocument(floating));
    const treeContainsActiveEl = nodes.some((node) => node.context && contains(node.context.elements.floating, activeEl));
    if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
      parent.focus({
        preventScroll: true
      });
    }
  }, [enabled, floating, tree, parentId, virtual]);
  index2(() => {
    if (!enabled || !tree || !virtual || parentId)
      return;
    function handleVirtualFocus(item2) {
      setVirtualId(item2.id);
      if (virtualItemRef) {
        virtualItemRef.current = item2;
      }
    }
    tree.events.on("virtualfocus", handleVirtualFocus);
    return () => {
      tree.events.off("virtualfocus", handleVirtualFocus);
    };
  }, [enabled, tree, virtual, parentId, virtualItemRef]);
  index2(() => {
    previousOnNavigateRef.current = onNavigate;
    previousMountedRef.current = !!floating;
  });
  index2(() => {
    if (!open) {
      keyRef.current = null;
    }
  }, [open]);
  const hasActiveIndex = activeIndex != null;
  const item = React2.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open)
        return;
      const index3 = listRef.current.indexOf(currentTarget);
      if (index3 !== -1) {
        onNavigate(index3);
      }
    }
    const props2 = {
      onFocus(_ref) {
        let {
          currentTarget
        } = _ref;
        syncCurrentTarget(currentTarget);
      },
      onClick: (_ref2) => {
        let {
          currentTarget
        } = _ref2;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...focusItemOnHover && {
        onMouseMove(_ref3) {
          let {
            currentTarget
          } = _ref3;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave(_ref4) {
          let {
            pointerType
          } = _ref4;
          if (!isPointerModalityRef.current || pointerType === "touch") {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          onNavigate(null);
          if (!virtual) {
            enqueueFocus(refs.floating.current, {
              preventScroll: true
            });
          }
        }
      }
    };
    return props2;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices2 = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false, event.nativeEvent, "list-navigation");
        if (isHTMLElement(domReference) && !virtual) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices2);
      const maxIndex = getMaxIndex(listRef, disabledIndices2);
      if (event.key === "Home") {
        stopEvent(event);
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === "End") {
        stopEvent(event);
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
      if (cols > 1) {
        const sizes = itemSizes || Array.from({
          length: listRef.current.length
        }, () => ({
          width: 1,
          height: 1
        }));
        const cellMap = buildCellMap(sizes, cols, dense);
        const minGridIndex = cellMap.findIndex((index3) => index3 != null && !(disabledIndices2 != null && disabledIndices2.includes(index3)));
        const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !(disabledIndices2 != null && disabledIndices2.includes(index3)) ? cellIndex : foundIndex, -1);
        indexRef.current = cellMap[getGridNavigatedIndex({
          current: cellMap.map((itemIndex) => itemIndex != null ? listRef.current[itemIndex] : null)
        }, {
          event,
          orientation,
          loop,
          cols,
          // treat undefined (empty grid spaces) as disabled indices so we
          // don't end up in them
          disabledIndices: getCellIndices([...disabledIndices2 || [], void 0], cellMap),
          minIndex: minGridIndex,
          maxIndex: maxGridIndex,
          prevIndex: getCellIndexOfCorner(
            indexRef.current,
            sizes,
            cellMap,
            cols,
            // use a corner matching the edge closest to the direction
            // we're moving in so we don't end up in the same item. Prefer
            // top/left over bottom/right.
            event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
          ),
          stopEvent: true
        })];
        onNavigate(indexRef.current);
        if (orientation === "both") {
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      "aria-activedescendant": virtualId || activeId
    };
    const activeItem = listRef.current.find((item2) => (item2 == null ? void 0 : item2.id) === activeId);
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf("Arrow") === 0;
          const isCrossOpenKey = isCrossOrientationOpenKey(event.key, orientation, rtl);
          const isCrossCloseKey = isCrossOrientationCloseKey(event.key, orientation, rtl);
          const isMainKey = isMainOrientationKey(event.key, orientation);
          const isNavigationKey = (nested ? isCrossOpenKey : isMainKey) || event.key === "Enter" || event.key.trim() === "";
          if (virtual && open) {
            const rootNode = tree == null ? void 0 : tree.nodesRef.current.find((node) => node.parentId == null);
            const deepestNode = tree && rootNode ? getDeepestNode(tree.nodesRef.current, rootNode.id) : null;
            if (isArrowKey && deepestNode && virtualItemRef) {
              const eventObject = new KeyboardEvent("keydown", {
                key: event.key,
                bubbles: true
              });
              if (isCrossOpenKey || isCrossCloseKey) {
                var _deepestNode$context, _deepestNode$context2;
                const isCurrentTarget = ((_deepestNode$context = deepestNode.context) == null ? void 0 : _deepestNode$context.elements.domReference) === event.currentTarget;
                const dispatchItem = isCrossCloseKey && !isCurrentTarget ? (_deepestNode$context2 = deepestNode.context) == null ? void 0 : _deepestNode$context2.elements.domReference : isCrossOpenKey ? activeItem : null;
                if (dispatchItem) {
                  stopEvent(event);
                  dispatchItem.dispatchEvent(eventObject);
                  setVirtualId(void 0);
                }
              }
              if (isMainKey && deepestNode.context) {
                if (deepestNode.context.open && deepestNode.parentId && event.currentTarget !== deepestNode.context.elements.domReference) {
                  var _deepestNode$context$;
                  stopEvent(event);
                  (_deepestNode$context$ = deepestNode.context.elements.domReference) == null || _deepestNode$context$.dispatchEvent(eventObject);
                  return;
                }
              }
            }
            return onKeyDown(event);
          }
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          if (isNavigationKey) {
            keyRef.current = nested && isMainKey ? null : event.key;
          }
          if (nested) {
            if (isCrossOpenKey) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices2);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true, event.nativeEvent, "list-navigation");
              }
            }
            return;
          }
          if (isMainKey) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true, event.nativeEvent, "list-navigation");
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...!isTypeableCombobox(domReference) && ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, virtualId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item, tree, virtualItemRef, itemSizes, dense]);
}
var componentRoleToAriaRoleMap = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
function useRole(context, props) {
  var _componentRoleToAriaR;
  if (props === void 0) {
    props = {};
  }
  const {
    open,
    floatingId
  } = context;
  const {
    enabled = true,
    role = "dialog"
  } = props;
  const ariaRole = (_componentRoleToAriaR = componentRoleToAriaRoleMap.get(role)) != null ? _componentRoleToAriaR : role;
  const referenceId = useId();
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  return React2.useMemo(() => {
    if (!enabled)
      return {};
    const floatingProps = {
      id: floatingId,
      ...ariaRole && {
        role: ariaRole
      }
    };
    if (ariaRole === "tooltip" || role === "label") {
      return {
        reference: {
          ["aria-" + (role === "label" ? "labelledby" : "describedby")]: open ? floatingId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
        "aria-controls": open ? floatingId : void 0,
        ...ariaRole === "listbox" && {
          role: "combobox"
        },
        ...ariaRole === "menu" && {
          id: referenceId
        },
        ...ariaRole === "menu" && isNested && {
          role: "menuitem"
        },
        ...role === "select" && {
          "aria-autocomplete": "none"
        },
        ...role === "combobox" && {
          "aria-autocomplete": "list"
        }
      },
      floating: {
        ...floatingProps,
        ...ariaRole === "menu" && {
          "aria-labelledby": referenceId
        }
      },
      item(_ref) {
        let {
          active,
          selected
        } = _ref;
        const commonProps = {
          role: "option",
          ...active && {
            id: floatingId + "-option"
          }
        };
        switch (role) {
          case "select":
            return {
              ...commonProps,
              "aria-selected": active && selected
            };
          case "combobox": {
            return {
              ...commonProps,
              ...active && {
                "aria-selected": true
              }
            };
          }
        }
        return {};
      }
    };
  }, [enabled, role, ariaRole, open, floatingId, referenceId, isNested]);
}
function useTypeahead(context, props) {
  var _ref;
  const {
    open,
    dataRef
  } = context;
  const {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch,
    onTypingChange: unstable_onTypingChange,
    enabled = true,
    findMatch = null,
    resetMs = 750,
    ignoreKeys = [],
    selectedIndex = null
  } = props;
  const timeoutIdRef = React2.useRef();
  const stringRef = React2.useRef("");
  const prevIndexRef = React2.useRef((_ref = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref : -1);
  const matchIndexRef = React2.useRef(null);
  const onMatch = useEffectEvent(unstable_onMatch);
  const onTypingChange = useEffectEvent(unstable_onTypingChange);
  const findMatchRef = useLatestRef2(findMatch);
  const ignoreKeysRef = useLatestRef2(ignoreKeys);
  index2(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = "";
    }
  }, [open]);
  index2(() => {
    if (open && stringRef.current === "") {
      var _ref2;
      prevIndexRef.current = (_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setTypingChange(value) {
      if (value) {
        if (!dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      } else {
        if (dataRef.current.typing) {
          dataRef.current.typing = value;
          onTypingChange(value);
        }
      }
    }
    function getMatchingIndex(list, orderedList, string) {
      const str = findMatchRef.current ? findMatchRef.current(orderedList, string) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(string.toLocaleLowerCase())) === 0);
      return str ? list.indexOf(str) : -1;
    }
    function onKeyDown(event) {
      const listContent = listRef.current;
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        if (getMatchingIndex(listContent, listContent, stringRef.current) === -1) {
          setTypingChange(false);
        } else if (event.key === " ") {
          stopEvent(event);
        }
      }
      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      if (open && event.key !== " ") {
        stopEvent(event);
        setTypingChange(true);
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        setTypingChange(false);
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const index3 = getMatchingIndex(listContent, [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)], stringRef.current);
      if (index3 !== -1) {
        onMatch(index3);
        matchIndexRef.current = index3;
      } else if (event.key !== " ") {
        stringRef.current = "";
        setTypingChange(false);
      }
    }
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown,
        onKeyUp(event) {
          if (event.key === " ") {
            setTypingChange(false);
          }
        }
      }
    };
  }, [enabled, open, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, onTypingChange]);
}
function isPointInPolygon(point, polygon) {
  const [x, y] = point;
  let isInside2 = false;
  const length = polygon.length;
  for (let i2 = 0, j = length - 1; i2 < length; j = i2++) {
    const [xi, yi] = polygon[i2] || [0, 0];
    const [xj, yj] = polygon[j] || [0, 0];
    const intersect = yi >= y !== yj >= y && x <= (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) {
      isInside2 = !isInside2;
    }
  }
  return isInside2;
}
function isInside(point, rect) {
  return point[0] >= rect.x && point[0] <= rect.x + rect.width && point[1] >= rect.y && point[1] <= rect.y + rect.height;
}
function safePolygon(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    buffer = 0.5,
    blockPointerEvents = false,
    requireIntent = true
  } = options;
  let timeoutId2;
  let hasLanded = false;
  let lastX = null;
  let lastY = null;
  let lastCursorTime = performance.now();
  function getCursorSpeed(x, y) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - lastCursorTime;
    if (lastX === null || lastY === null || elapsedTime === 0) {
      lastX = x;
      lastY = y;
      lastCursorTime = currentTime;
      return null;
    }
    const deltaX = x - lastX;
    const deltaY = y - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const speed = distance / elapsedTime;
    lastX = x;
    lastY = y;
    lastCursorTime = currentTime;
    return speed;
  }
  const fn = (_ref) => {
    let {
      x,
      y,
      placement,
      elements,
      onClose,
      nodeId,
      tree
    } = _ref;
    return function onMouseMove(event) {
      function close() {
        clearTimeout(timeoutId2);
        onClose();
      }
      clearTimeout(timeoutId2);
      if (!elements.domReference || !elements.floating || placement == null || x == null || y == null) {
        return;
      }
      const {
        clientX,
        clientY
      } = event;
      const clientPoint = [clientX, clientY];
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(elements.floating, target);
      const isOverReferenceEl = contains(elements.domReference, target);
      const refRect = elements.domReference.getBoundingClientRect();
      const rect = elements.floating.getBoundingClientRect();
      const side = placement.split("-")[0];
      const cursorLeaveFromRight = x > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
      const isOverReferenceRect = isInside(clientPoint, refRect);
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
      }
      if (isOverReferenceEl && !isLeave) {
        hasLanded = true;
        return;
      }
      if (isLeave && isElement(event.relatedTarget) && contains(elements.floating, event.relatedTarget)) {
        return;
      }
      if (tree && getChildren(tree.nodesRef.current, nodeId).some((_ref2) => {
        let {
          context
        } = _ref2;
        return context == null ? void 0 : context.open;
      })) {
        return;
      }
      if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
        return close();
      }
      let rectPoly = [];
      switch (side) {
        case "top":
          rectPoly = [[left, refRect.top + 1], [left, rect.bottom - 1], [right, rect.bottom - 1], [right, refRect.top + 1]];
          break;
        case "bottom":
          rectPoly = [[left, rect.top + 1], [left, refRect.bottom - 1], [right, refRect.bottom - 1], [right, rect.top + 1]];
          break;
        case "left":
          rectPoly = [[rect.right - 1, bottom], [rect.right - 1, top], [refRect.left + 1, top], [refRect.left + 1, bottom]];
          break;
        case "right":
          rectPoly = [[refRect.right - 1, bottom], [refRect.right - 1, top], [rect.left + 1, top], [rect.left + 1, bottom]];
          break;
      }
      function getPolygon(_ref3) {
        let [x2, y2] = _ref3;
        switch (side) {
          case "top": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 + buffer + 1];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.bottom - buffer : isFloatingWider ? rect.bottom - buffer : rect.top], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.bottom - buffer : rect.top : rect.bottom - buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "bottom": {
            const cursorPointOne = [isFloatingWider ? x2 + buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const cursorPointTwo = [isFloatingWider ? x2 - buffer / 2 : cursorLeaveFromRight ? x2 + buffer * 4 : x2 - buffer * 4, y2 - buffer];
            const commonPoints = [[rect.left, cursorLeaveFromRight ? rect.top + buffer : isFloatingWider ? rect.top + buffer : rect.bottom], [rect.right, cursorLeaveFromRight ? isFloatingWider ? rect.top + buffer : rect.bottom : rect.top + buffer]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
          case "left": {
            const cursorPointOne = [x2 + buffer + 1, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 + buffer + 1, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.right - buffer : isFloatingTaller ? rect.right - buffer : rect.left, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.right - buffer : rect.left : rect.right - buffer, rect.bottom]];
            return [...commonPoints, cursorPointOne, cursorPointTwo];
          }
          case "right": {
            const cursorPointOne = [x2 - buffer, isFloatingTaller ? y2 + buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const cursorPointTwo = [x2 - buffer, isFloatingTaller ? y2 - buffer / 2 : cursorLeaveFromBottom ? y2 + buffer * 4 : y2 - buffer * 4];
            const commonPoints = [[cursorLeaveFromBottom ? rect.left + buffer : isFloatingTaller ? rect.left + buffer : rect.right, rect.top], [cursorLeaveFromBottom ? isFloatingTaller ? rect.left + buffer : rect.right : rect.left + buffer, rect.bottom]];
            return [cursorPointOne, cursorPointTwo, ...commonPoints];
          }
        }
      }
      if (isPointInPolygon([clientX, clientY], rectPoly)) {
        return;
      }
      if (hasLanded && !isOverReferenceRect) {
        return close();
      }
      if (!isLeave && requireIntent) {
        const cursorSpeed = getCursorSpeed(event.clientX, event.clientY);
        const cursorSpeedThreshold = 0.1;
        if (cursorSpeed !== null && cursorSpeed < cursorSpeedThreshold) {
          return close();
        }
      }
      if (!isPointInPolygon([clientX, clientY], getPolygon([x, y]))) {
        close();
      } else if (!hasLanded && requireIntent) {
        timeoutId2 = window.setTimeout(close, 40);
      }
    };
  };
  fn.__options = {
    blockPointerEvents
  };
  return fn;
}

// node_modules/flowbite-react/lib/esm/components/Dropdown/Dropdown.js
var import_react24 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Floating/helpers.js
var getMiddleware = ({ arrowRef, placement }) => {
  const middleware = [];
  middleware.push(offset(8));
  middleware.push(placement === "auto" ? autoPlacement2() : flip2());
  middleware.push(shift2({ padding: 8 }));
  if (arrowRef == null ? void 0 : arrowRef.current) {
    middleware.push(arrow3({ element: arrowRef.current }));
  }
  return middleware;
};
var getPlacement = ({ placement }) => {
  return placement === "auto" ? void 0 : placement;
};
var getArrowPlacement = ({ placement }) => {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[placement.split("-")[0]];
};

// node_modules/flowbite-react/lib/esm/hooks/use-floating.js
var useBaseFLoating = ({ open, arrowRef, placement = "top", setOpen }) => {
  return useFloating2({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: getMiddleware({ placement, arrowRef })
  });
};
var useFloatingInteractions = ({ context, trigger, role = "tooltip", interactions = [] }) => {
  return useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useHover(context, {
      enabled: trigger === "hover",
      handleClose: safePolygon()
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions
  ]);
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownContext.js
var import_react21 = __toESM(require_react());
var DropdownContext = (0, import_react21.createContext)(void 0);
function useDropdownContext() {
  const context = (0, import_react21.useContext)(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext should be used within the DropdownContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownDivider.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
var DropdownDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme2 = customTheme.divider ?? rootTheme.floating.divider;
  return (0, import_jsx_runtime29.jsx)("div", { className: twMerge(theme2, className), ...props });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownHeader.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var DropdownHeader = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useDropdownContext();
  const theme2 = customTheme.header ?? rootTheme.floating.header;
  return (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [(0, import_jsx_runtime30.jsx)("div", { className: twMerge(theme2, className), ...props, children }), (0, import_jsx_runtime30.jsx)(DropdownDivider, {})] });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/DropdownItem.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var DropdownItem = ({ children, className, icon: Icon, onClick, theme: customTheme = {}, ...props }) => {
  const { ref, index: index3 } = useListItem({ label: typeof children === "string" ? children : void 0 });
  const { theme: rootTheme, activeIndex, dismissOnClick, getItemProps, handleSelect } = useDropdownContext();
  const isActive = activeIndex === index3;
  const theme2 = mergeDeep(rootTheme.floating.item, customTheme);
  const theirProps = props;
  return (0, import_jsx_runtime31.jsx)("li", { role: "menuitem", className: theme2.container, children: (0, import_jsx_runtime31.jsxs)(ButtonBase, { ref, className: twMerge(theme2.base, className), ...theirProps, ...getItemProps({
    onClick: () => {
      onClick && onClick();
      dismissOnClick && handleSelect(null);
    }
  }), tabIndex: isActive ? 0 : -1, children: [Icon && (0, import_jsx_runtime31.jsx)(Icon, { className: theme2.icon }), children] }) });
};

// node_modules/flowbite-react/lib/esm/components/Dropdown/Dropdown.js
var icons = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft
};
var Trigger = ({ refs, children, inline: inline3, theme: theme2, disabled, setButtonWidth, getReferenceProps, renderTrigger, ...buttonProps }) => {
  const ref = refs.reference;
  const a11yProps = getReferenceProps();
  (0, import_react24.useEffect)(() => {
    if (ref.current) {
      setButtonWidth == null ? void 0 : setButtonWidth(ref.current.clientWidth);
    }
  }, [ref, setButtonWidth]);
  if (renderTrigger) {
    const triggerElement = renderTrigger(theme2);
    return (0, import_react24.cloneElement)(triggerElement, { ref: refs.setReference, disabled, ...a11yProps, ...triggerElement.props });
  }
  return inline3 ? (0, import_jsx_runtime32.jsx)("button", { type: "button", ref: refs.setReference, className: theme2 == null ? void 0 : theme2.inlineWrapper, disabled, ...a11yProps, children }) : (0, import_jsx_runtime32.jsx)(Button, { ...buttonProps, disabled, type: "button", ref: refs.setReference, ...a11yProps, children });
};
var DropdownComponent = ({ children, className, dismissOnClick = true, theme: customTheme = {}, renderTrigger, ...props }) => {
  const [open, setOpen] = (0, import_react24.useState)(false);
  const [activeIndex, setActiveIndex] = (0, import_react24.useState)(null);
  const [selectedIndex, setSelectedIndex] = (0, import_react24.useState)(null);
  const [buttonWidth, setButtonWidth] = (0, import_react24.useState)(void 0);
  const elementsRef = (0, import_react24.useRef)([]);
  const labelsRef = (0, import_react24.useRef)([]);
  const theme2 = mergeDeep(getTheme().dropdown, customTheme);
  const theirProps = props;
  const dataTestId = props["data-testid"] || "flowbite-dropdown-target";
  const { placement = props.inline ? "bottom-start" : "bottom", trigger = "click", label, inline: inline3, arrowIcon = true, ...buttonProps } = theirProps;
  const handleSelect = (0, import_react24.useCallback)((index3) => {
    setSelectedIndex(index3);
    setOpen(false);
  }, []);
  const handleTypeaheadMatch = (0, import_react24.useCallback)((index3) => {
    if (open) {
      setActiveIndex(index3);
    } else {
      handleSelect(index3);
    }
  }, [open, handleSelect]);
  const { context, floatingStyles, refs } = useBaseFLoating({
    open,
    setOpen,
    placement
  });
  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex
  });
  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch
  });
  const { getReferenceProps, getFloatingProps, getItemProps } = useFloatingInteractions({
    context,
    role: "menu",
    trigger,
    interactions: [listNav, typeahead]
  });
  const Icon = (0, import_react24.useMemo)(() => {
    const [p2] = placement.split("-");
    return icons[p2] ?? HiOutlineChevronDown;
  }, [placement]);
  return (0, import_jsx_runtime32.jsxs)(DropdownContext.Provider, { value: { theme: theme2, activeIndex, dismissOnClick, getItemProps, handleSelect }, children: [(0, import_jsx_runtime32.jsxs)(Trigger, { ...buttonProps, refs, inline: inline3, theme: theme2, "data-testid": dataTestId, className: twMerge(theme2.floating.target, buttonProps.className), setButtonWidth, getReferenceProps, renderTrigger, children: [label, arrowIcon && (0, import_jsx_runtime32.jsx)(Icon, { className: theme2.arrowIcon })] }), open && (0, import_jsx_runtime32.jsx)(FloatingFocusManager, { context, modal: false, children: (0, import_jsx_runtime32.jsx)("div", { ref: refs.setFloating, style: { ...floatingStyles, minWidth: buttonWidth }, "data-testid": "flowbite-dropdown", "aria-expanded": open, ...getFloatingProps({
    className: twMerge(theme2.floating.base, theme2.floating.animation, "duration-100", !open && theme2.floating.hidden, theme2.floating.style.auto, className)
  }), children: (0, import_jsx_runtime32.jsx)(FloatingList, { elementsRef, labelsRef, children: (0, import_jsx_runtime32.jsx)("ul", { className: theme2.content, tabIndex: -1, children }) }) }) })] });
};
DropdownComponent.displayName = "Dropdown";
DropdownHeader.displayName = "Dropdown.Header";
DropdownDivider.displayName = "Dropdown.Divider";
var Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider
});

// node_modules/flowbite-react/lib/esm/components/FileInput/FileInput.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var import_react25 = __toESM(require_react());
var FileInput = (0, import_react25.forwardRef)(({ className, color = "gray", helperText, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().fileInput, customTheme);
  return (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [(0, import_jsx_runtime33.jsx)("div", { className: twMerge(theme2.root.base, className), children: (0, import_jsx_runtime33.jsx)("div", { className: theme2.field.base, children: (0, import_jsx_runtime33.jsx)("input", { className: twMerge(theme2.field.input.base, theme2.field.input.colors[color], theme2.field.input.sizes[sizing]), ...props, type: "file", ref }) }) }), helperText && (0, import_jsx_runtime33.jsx)(HelperText, { color, children: helperText })] });
});
FileInput.displayName = "FileInput";

// node_modules/flowbite-react/lib/esm/components/FloatingLabel/FloatingLabel.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var import_react26 = __toESM(require_react());
var FloatingLabel = (0, import_react26.forwardRef)(({ label, helperText, color = "default", sizing = "md", variant, disabled = false, theme: customTheme = {}, className, ...props }, ref) => {
  const randomId = (0, import_react26.useId)();
  const theme2 = mergeDeep(getTheme().floatingLabel, customTheme);
  return (0, import_jsx_runtime34.jsxs)("div", { children: [(0, import_jsx_runtime34.jsxs)("div", { className: twMerge("relative", variant === "standard" ? "z-0" : ""), children: [(0, import_jsx_runtime34.jsx)("input", { type: "text", id: props.id ? props.id : "floatingLabel" + randomId, "aria-describedby": "outlined_success_help", className: twMerge(theme2.input[color][variant][sizing], className), placeholder: " ", "data-testid": "floating-label", disabled, ...props, ref }), (0, import_jsx_runtime34.jsx)("label", { htmlFor: props.id ? props.id : "floatingLabel" + randomId, className: twMerge(theme2.label[color][variant][sizing], className), children: label })] }), (0, import_jsx_runtime34.jsx)("p", { id: "outlined_helper_text" + randomId, className: twMerge(theme2.helperText[color], className), children: helperText })] });
});
FloatingLabel.displayName = "FloatingLabel";

// node_modules/flowbite-react/lib/esm/components/Flowbite/Flowbite.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/theme-store/init/index.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/theme-store/init/client.js
function ThemeClientInit({ theme: theme2 }) {
  setTheme(theme2);
  return null;
}

// node_modules/flowbite-react/lib/esm/theme-store/init/mode.js
function ThemeModeInit({ mode }) {
  if (mode)
    setThemeMode(mode);
  useThemeMode();
  return null;
}

// node_modules/flowbite-react/lib/esm/theme-store/init/server.js
function ThemeServerInit({ theme: theme2 }) {
  setTheme(theme2);
  return null;
}

// node_modules/flowbite-react/lib/esm/theme-store/init/index.js
function ThemeInit({ mode, theme: theme2 }) {
  return (0, import_jsx_runtime35.jsxs)(import_jsx_runtime35.Fragment, { children: [(0, import_jsx_runtime35.jsx)(ThemeModeInit, { mode }), (0, import_jsx_runtime35.jsx)(ThemeServerInit, { theme: theme2 }), (0, import_jsx_runtime35.jsx)(ThemeClientInit, { theme: theme2 })] });
}

// node_modules/flowbite-react/lib/esm/components/Flowbite/Flowbite.js
var Flowbite = ({ children, theme: theme2 }) => {
  return (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [(0, import_jsx_runtime36.jsx)(ThemeInit, { mode: theme2 == null ? void 0 : theme2.mode, theme: theme2 == null ? void 0 : theme2.theme }), children] });
};
Flowbite.displayName = "Flowbite";

// node_modules/flowbite-react/lib/esm/components/Footer/Footer.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Footer/FooterBrand.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var FooterBrand = ({ alt, className, children, href, name, src, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.brand, customTheme);
  return (0, import_jsx_runtime37.jsx)("div", { children: href ? (0, import_jsx_runtime37.jsxs)("a", { "data-testid": "flowbite-footer-brand", href, className: twMerge(theme2.base, className), ...props, children: [(0, import_jsx_runtime37.jsx)("img", { alt, src, className: theme2.img }), (0, import_jsx_runtime37.jsx)("span", { "data-testid": "flowbite-footer-brand-span", className: theme2.span, children: name }), children] }) : (0, import_jsx_runtime37.jsx)("img", { alt, "data-testid": "flowbite-footer-brand", src, className: twMerge(theme2.img, className), ...props }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterCopyright.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var FooterCopyright = ({ by, className, href, theme: customTheme = {}, year, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.copyright, customTheme);
  return (0, import_jsx_runtime38.jsxs)("div", { "data-testid": "flowbite-footer-copyright", className: twMerge(theme2.base, className), ...props, children: ["© ", year, href ? (0, import_jsx_runtime38.jsx)("a", { href, className: theme2.href, children: by }) : (0, import_jsx_runtime38.jsx)("span", { "data-testid": "flowbite-footer-copyright-span", className: theme2.span, children: by })] });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterDivider.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var FooterDivider = ({ className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.divider, customTheme);
  return (0, import_jsx_runtime39.jsx)("hr", { "data-testid": "footer-divider", className: twMerge(theme2.base, className), ...props });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterIcon.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
var FooterIcon = ({ ariaLabel, className, href, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.icon, customTheme);
  return (0, import_jsx_runtime40.jsx)("div", { children: href ? (0, import_jsx_runtime40.jsx)("a", { "aria-label": ariaLabel, "data-testid": "flowbite-footer-icon", href, className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime40.jsx)(Icon, { className: theme2.size }) }) : (0, import_jsx_runtime40.jsx)(Icon, { "data-testid": "flowbite-footer-icon", className: theme2.size, ...props }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterLink.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var FooterLink = ({ as: Component = "a", children, className, href, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.groupLink.link, customTheme);
  return (0, import_jsx_runtime41.jsx)("li", { className: twMerge(theme2.base, className), children: (0, import_jsx_runtime41.jsx)(Component, { href, className: theme2.href, ...props, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterLinkGroup.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var FooterLinkGroup = ({ children, className, col = false, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.groupLink, customTheme);
  return (0, import_jsx_runtime42.jsx)("ul", { "data-testid": "footer-groupLink", className: twMerge(theme2.base, col && theme2.col, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Footer/FooterTitle.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var FooterTitle = ({ as: Component = "h2", className, theme: customTheme = {}, title, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer.title, customTheme);
  return (0, import_jsx_runtime43.jsx)(Component, { "data-testid": "flowbite-footer-title", className: twMerge(theme2.base, className), ...props, children: title });
};

// node_modules/flowbite-react/lib/esm/components/Footer/Footer.js
var FooterComponent = ({ bgDark = false, children, className, container = false, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().footer, customTheme);
  return (0, import_jsx_runtime44.jsx)("footer", { "data-testid": "flowbite-footer", className: twMerge(theme2.root.base, bgDark && theme2.root.bgDark, container && theme2.root.container, className), ...props, children });
};
FooterComponent.displayName = "Footer";
FooterCopyright.displayName = "Footer.Copyright";
FooterLink.displayName = "Footer.Link";
FooterBrand.displayName = "Footer.Brand";
FooterLinkGroup.displayName = "Footer.LinkGroup";
FooterIcon.displayName = "Footer.Icon";
FooterTitle.displayName = "Footer.Title";
FooterDivider.displayName = "Footer.Divider";
var Footer = Object.assign(FooterComponent, {
  Copyright: FooterCopyright,
  Link: FooterLink,
  LinkGroup: FooterLinkGroup,
  Brand: FooterBrand,
  Icon: FooterIcon,
  Title: FooterTitle,
  Divider: FooterDivider
});

// node_modules/flowbite-react/lib/esm/components/Kbd/Kbd.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var Kbd = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().kbd, customTheme);
  return (0, import_jsx_runtime45.jsxs)("span", { className: twMerge(theme2.root.base, className), "data-testid": "flowbite-kbd", ...props, children: [Icon && (0, import_jsx_runtime45.jsx)(Icon, { className: theme2.root.icon, "data-testid": "flowbite-kbd-icon" }), children] });
};
Kbd.displayName = "Kbd";

// node_modules/flowbite-react/lib/esm/components/Label/Label.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var Label = ({ children, className, color = "default", disabled = false, theme: customTheme = {}, value, ...props }) => {
  const theme2 = mergeDeep(getTheme().label, customTheme);
  return (0, import_jsx_runtime46.jsx)("label", { className: twMerge(theme2.root.base, theme2.root.colors[color], disabled && theme2.root.disabled, className), "data-testid": "flowbite-label", ...props, children: value ?? children ?? "" });
};
Label.displayName = "Label";

// node_modules/flowbite-react/lib/esm/components/List/List.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/List/ListItem.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var ListItem = ({ children, className, theme: customTheme = {} }) => {
  const theme2 = mergeDeep(getTheme().listGroup.item, customTheme);
  return (0, import_jsx_runtime47.jsx)("li", { className: twMerge(theme2.base, className), children });
};

// node_modules/flowbite-react/lib/esm/components/List/List.js
var ListComponent = ({ children, className, unstyled, nested, ordered, horizontal, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().list, customTheme);
  const Component = ordered ? "ol" : "ul";
  return (0, import_jsx_runtime48.jsx)(Component, { className: twMerge(theme2.root.base, theme2.root.ordered[ordered ? "on" : "off"], unstyled && theme2.root.unstyled, nested && theme2.root.nested, horizontal && theme2.root.horizontal, className), ...props, children });
};
ListComponent.displayName = "List";
ListItem.displayName = "List.Item";
var List = Object.assign(ListComponent, { Item: ListItem });

// node_modules/flowbite-react/lib/esm/components/ListGroup/ListGroup.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/ListGroup/ListGroupItem.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
var ListGroupItem = ({ active: isActive, children, className, href, icon: Icon, onClick, theme: customTheme = {}, disabled, ...props }) => {
  const theme2 = mergeDeep(getTheme().listGroup.item, customTheme);
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  return (0, import_jsx_runtime49.jsx)("li", { className: twMerge(theme2.base, className), children: (0, import_jsx_runtime49.jsxs)(Component, { href, onClick, type: isLink ? void 0 : "button", disabled, className: twMerge(theme2.link.active[isActive ? "on" : "off"], theme2.link.disabled[disabled ? "on" : "off"], theme2.link.base, theme2.link.href[isLink ? "on" : "off"]), ...props, children: [Icon && (0, import_jsx_runtime49.jsx)(Icon, { "aria-hidden": true, "data-testid": "flowbite-list-group-item-icon", className: theme2.link.icon }), children] }) });
};

// node_modules/flowbite-react/lib/esm/components/ListGroup/ListGroup.js
var ListGroupComponent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().listGroup, customTheme);
  return (0, import_jsx_runtime50.jsx)("ul", { className: twMerge(theme2.root.base, className), ...props, children });
};
ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";
var ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem
});

// node_modules/flowbite-react/lib/esm/components/Modal/Modal.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var import_react30 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Modal/ModalBody.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Modal/ModalContext.js
var import_react27 = __toESM(require_react());
var ModalContext = (0, import_react27.createContext)(void 0);
function useModalContext() {
  const context = (0, import_react27.useContext)(ModalContext);
  if (!context) {
    throw new Error("useModalContext should be used within the ModalContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Modal/ModalBody.js
var ModalBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme2 = mergeDeep(rootTheme.body, customTheme);
  return (0, import_jsx_runtime51.jsx)("div", { className: twMerge(theme2.base, popup && [theme2.popup], className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Modal/ModalFooter.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
var ModalFooter = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, popup } = useModalContext();
  const theme2 = mergeDeep(rootTheme.footer, customTheme);
  return (0, import_jsx_runtime52.jsx)("div", { className: twMerge(theme2.base, !popup && theme2.popup, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Modal/ModalHeader.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var import_react28 = __toESM(require_react());
var ModalHeader = ({ as: Component = "h3", children, className, theme: customTheme = {}, id, ...props }) => {
  const innerHeaderId = (0, import_react28.useId)();
  const headerId = id || innerHeaderId;
  const { theme: rootTheme, popup, onClose, setHeaderId } = useModalContext();
  const theme2 = mergeDeep(rootTheme.header, customTheme);
  (0, import_react28.useLayoutEffect)(() => {
    setHeaderId(headerId);
    return () => setHeaderId(void 0);
  }, [headerId, setHeaderId]);
  return (0, import_jsx_runtime53.jsxs)("div", { className: twMerge(theme2.base, popup && theme2.popup, className), ...props, children: [(0, import_jsx_runtime53.jsx)(Component, { id: headerId, className: theme2.title, children }), (0, import_jsx_runtime53.jsx)("button", { "aria-label": "Close", className: theme2.close.base, type: "button", onClick: onClose, children: (0, import_jsx_runtime53.jsx)(HiOutlineX, { "aria-hidden": true, className: theme2.close.icon }) })] });
};

// node_modules/flowbite-react/lib/esm/components/Modal/Modal.js
var ModalComponent = (0, import_react30.forwardRef)(({ children, className, dismissible = false, onClose, popup, position = "center", root, show, size: size3 = "2xl", theme: customTheme = {}, initialFocus, ...props }, theirRef) => {
  const [headerId, setHeaderId] = (0, import_react30.useState)(void 0);
  const theme2 = mergeDeep(getTheme().modal, customTheme);
  const { context } = useFloating2({
    open: show,
    onOpenChange: () => onClose && onClose()
  });
  const ref = useMergeRefs([context.refs.setFloating, theirRef]);
  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown", enabled: dismissible });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([click, dismiss, role]);
  if (!show) {
    return null;
  }
  return (0, import_jsx_runtime54.jsx)(ModalContext.Provider, { value: { theme: theme2, popup, onClose, setHeaderId }, children: (0, import_jsx_runtime54.jsx)(FloatingPortal, { root, children: (0, import_jsx_runtime54.jsx)(FloatingOverlay, { lockScroll: true, "data-testid": "modal-overlay", className: twMerge(theme2.root.base, theme2.root.positions[position], show ? theme2.root.show.on : theme2.root.show.off, className), ...props, children: (0, import_jsx_runtime54.jsx)(FloatingFocusManager, { context, initialFocus, children: (0, import_jsx_runtime54.jsx)("div", { ref, ...getFloatingProps(props), "aria-labelledby": headerId, className: twMerge(theme2.content.base, theme2.root.sizes[size3]), children: (0, import_jsx_runtime54.jsx)("div", { className: theme2.content.inner, children }) }) }) }) }) });
});
ModalComponent.displayName = "Modal";
ModalHeader.displayName = "Modal.Header";
ModalBody.displayName = "Modal.Body";
ModalFooter.displayName = "Modal.Footer";
var Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
});

// node_modules/flowbite-react/lib/esm/components/Navbar/Navbar.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var import_react32 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarBrand.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarContext.js
var import_react31 = __toESM(require_react());
var NavbarContext = (0, import_react31.createContext)(void 0);
function useNavbarContext() {
  const context = (0, import_react31.useContext)(NavbarContext);
  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarBrand.js
var NavbarBrand = ({ as: Component = "a", children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.brand, customTheme);
  return (0, import_jsx_runtime55.jsx)(Component, { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarCollapse.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
var NavbarCollapse = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.collapse, customTheme);
  return (0, import_jsx_runtime56.jsx)("div", { "data-testid": "flowbite-navbar-collapse", className: twMerge(theme2.base, theme2.hidden[!isOpen ? "on" : "off"], className), ...props, children: (0, import_jsx_runtime56.jsx)("ul", { className: theme2.list, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarLink.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var NavbarLink = ({ active, as: Component = "a", disabled, children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.link, customTheme);
  return (0, import_jsx_runtime57.jsx)("li", { children: (0, import_jsx_runtime57.jsx)(Component, { className: twMerge(theme2.base, active && theme2.active.on, !active && !disabled && theme2.active.off, theme2.disabled[disabled ? "on" : "off"], className), ...props, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarToggle.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime());

// node_modules/react-icons/fa/index.esm.js
function FaBars(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" } }] })(props);
}

// node_modules/flowbite-react/lib/esm/components/Navbar/NavbarToggle.js
var NavbarToggle = ({ barIcon: BarIcon = FaBars, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isOpen, setIsOpen } = useNavbarContext();
  const theme2 = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (0, import_jsx_runtime58.jsxs)("button", { "data-testid": "flowbite-navbar-toggle", onClick: handleClick, className: twMerge(theme2.base, className), ...props, children: [(0, import_jsx_runtime58.jsx)("span", { className: "sr-only", children: "Open main menu" }), (0, import_jsx_runtime58.jsx)(BarIcon, { "aria-hidden": true, className: theme2.icon })] });
};

// node_modules/flowbite-react/lib/esm/components/Navbar/Navbar.js
var NavbarComponent = ({ border, children, className, fluid = false, menuOpen, rounded, theme: customTheme = {}, ...props }) => {
  const [isOpen, setIsOpen] = (0, import_react32.useState)(menuOpen);
  const theme2 = mergeDeep(getTheme().navbar, customTheme);
  return (0, import_jsx_runtime59.jsx)(NavbarContext.Provider, { value: { theme: theme2, isOpen, setIsOpen }, children: (0, import_jsx_runtime59.jsx)("nav", { className: twMerge(theme2.root.base, theme2.root.bordered[border ? "on" : "off"], theme2.root.rounded[rounded ? "on" : "off"], className), ...props, children: (0, import_jsx_runtime59.jsx)("div", { className: twMerge(theme2.root.inner.base, theme2.root.inner.fluid[fluid ? "on" : "off"]), children }) }) });
};
NavbarComponent.displayName = "Navbar";
NavbarBrand.displayName = "Navbar.Brand";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarLink.displayName = "Navbar.Link";
NavbarToggle.displayName = "Navbar.Toggle";
var Navbar = Object.assign(NavbarComponent, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Link: NavbarLink,
  Toggle: NavbarToggle
});

// node_modules/flowbite-react/lib/esm/components/Pagination/Pagination.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Pagination/PaginationButton.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var PaginationButton = ({ active, children, className, onClick, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().pagination, customTheme);
  return (0, import_jsx_runtime60.jsx)("button", { type: "button", className: twMerge(active && theme2.pages.selector.active, className), onClick, ...props, children });
};
PaginationButton.displayName = "Pagination.Button";
var PaginationNavigation = ({ children, className, onClick, theme: customTheme = {}, disabled = false, ...props }) => {
  const theme2 = mergeDeep(getTheme().pagination, customTheme);
  return (0, import_jsx_runtime60.jsx)("button", { type: "button", className: twMerge(disabled && theme2.pages.selector.disabled, className), disabled, onClick, ...props, children });
};
PaginationNavigation.displayName = "Pagination.Navigation";

// node_modules/flowbite-react/lib/esm/components/Pagination/helpers.js
var range = (start, end) => {
  if (start >= end) {
    return [];
  }
  return [...Array(end - start + 1).keys()].map((key) => key + start);
};

// node_modules/flowbite-react/lib/esm/components/Pagination/Pagination.js
var PaginationComponent = ({ className, currentPage, layout = "pagination", nextLabel = "Next", onPageChange, previousLabel = "Previous", renderPaginationButton = (props2) => (0, import_jsx_runtime61.jsx)(PaginationButton, { ...props2 }), showIcons: showIcon = false, theme: customTheme = {}, totalPages, ...props }) => {
  const theme2 = mergeDeep(getTheme().pagination, customTheme);
  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);
  const goToNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };
  const goToPreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };
  return (0, import_jsx_runtime61.jsxs)("nav", { className: twMerge(theme2.base, className), ...props, children: [layout === "table" && (0, import_jsx_runtime61.jsxs)("div", { className: theme2.layout.table.base, children: ["Showing ", (0, import_jsx_runtime61.jsx)("span", { className: theme2.layout.table.span, children: firstPage }), " to ", (0, import_jsx_runtime61.jsx)("span", { className: theme2.layout.table.span, children: lastPage }), " of ", (0, import_jsx_runtime61.jsx)("span", { className: theme2.layout.table.span, children: totalPages }), " Entries"] }), (0, import_jsx_runtime61.jsxs)("ul", { className: theme2.pages.base, children: [(0, import_jsx_runtime61.jsx)("li", { children: (0, import_jsx_runtime61.jsxs)(PaginationNavigation, { className: twMerge(theme2.pages.previous.base, showIcon && theme2.pages.showIcon), onClick: goToPreviousPage, disabled: currentPage === 1, children: [showIcon && (0, import_jsx_runtime61.jsx)(HiChevronLeft, { "aria-hidden": true, className: theme2.pages.previous.icon }), previousLabel] }) }), layout === "pagination" && range(firstPage, lastPage).map((page) => (0, import_jsx_runtime61.jsx)("li", { "aria-current": page === currentPage ? "page" : void 0, children: renderPaginationButton({
    className: twMerge(theme2.pages.selector.base, currentPage === page && theme2.pages.selector.active),
    active: page === currentPage,
    onClick: () => onPageChange(page),
    children: page
  }) }, page)), (0, import_jsx_runtime61.jsx)("li", { children: (0, import_jsx_runtime61.jsxs)(PaginationNavigation, { className: twMerge(theme2.pages.next.base, showIcon && theme2.pages.showIcon), onClick: goToNextPage, disabled: currentPage === totalPages, children: [nextLabel, showIcon && (0, import_jsx_runtime61.jsx)(HiChevronRight, { "aria-hidden": true, className: theme2.pages.next.icon })] }) })] })] });
};
PaginationComponent.displayName = "Pagination";
var Pagination = Object.assign(PaginationComponent, {
  Button: PaginationButton
});

// node_modules/flowbite-react/lib/esm/components/Progress/Progress.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var import_react33 = __toESM(require_react());
var Progress = ({ className, color = "cyan", labelProgress = false, labelText = false, progress, progressLabelPosition = "inside", size: size3 = "md", textLabel = "progressbar", textLabelPosition = "inside", theme: customTheme = {}, ...props }) => {
  const id = (0, import_react33.useId)();
  const theme2 = mergeDeep(getTheme().progress, customTheme);
  return (0, import_jsx_runtime62.jsx)(import_jsx_runtime62.Fragment, { children: (0, import_jsx_runtime62.jsxs)("div", { id, "aria-label": textLabel, "aria-valuenow": progress, role: "progressbar", ...props, children: [(textLabel && labelText && textLabelPosition === "outside" || progress > 0 && labelProgress && progressLabelPosition === "outside") && (0, import_jsx_runtime62.jsxs)("div", { className: theme2.label, "data-testid": "flowbite-progress-outer-label-container", children: [textLabel && labelText && textLabelPosition === "outside" && (0, import_jsx_runtime62.jsx)("span", { "data-testid": "flowbite-progress-outer-text-label", children: textLabel }), labelProgress && progressLabelPosition === "outside" && (0, import_jsx_runtime62.jsxs)("span", { "data-testid": "flowbite-progress-outer-progress-label", children: [progress, "%"] })] }), (0, import_jsx_runtime62.jsx)("div", { className: twMerge(theme2.base, theme2.size[size3], className), children: (0, import_jsx_runtime62.jsxs)("div", { style: { width: `${progress}%` }, className: twMerge(theme2.bar, theme2.color[color], theme2.size[size3]), children: [textLabel && labelText && textLabelPosition === "inside" && (0, import_jsx_runtime62.jsx)("span", { "data-testid": "flowbite-progress-inner-text-label", children: textLabel }), progress > 0 && labelProgress && progressLabelPosition === "inside" && (0, import_jsx_runtime62.jsxs)("span", { "data-testid": "flowbite-progress-inner-progress-label", children: [progress, "%"] })] }) })] }) });
};
Progress.displayName = "Progress";

// node_modules/flowbite-react/lib/esm/components/Radio/Radio.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var import_react34 = __toESM(require_react());
var Radio = (0, import_react34.forwardRef)(({ className, theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().radio, customTheme);
  return (0, import_jsx_runtime63.jsx)("input", { ref, type: "radio", className: twMerge(theme2.root.base, className), ...props });
});
Radio.displayName = "Radio";

// node_modules/flowbite-react/lib/esm/components/RangeSlider/RangeSlider.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var import_react35 = __toESM(require_react());
var RangeSlider = (0, import_react35.forwardRef)(({ className, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().rangeSlider, customTheme);
  return (0, import_jsx_runtime64.jsx)(import_jsx_runtime64.Fragment, { children: (0, import_jsx_runtime64.jsx)("div", { "data-testid": "flowbite-range-slider", className: twMerge(theme2.root.base, className), children: (0, import_jsx_runtime64.jsx)("div", { className: theme2.field.base, children: (0, import_jsx_runtime64.jsx)("input", { ref, type: "range", className: twMerge(theme2.field.input.base, theme2.field.input.sizes[sizing]), ...props }) }) }) });
});
RangeSlider.displayName = "RangeSlider";

// node_modules/flowbite-react/lib/esm/components/Rating/Rating.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Rating/RatingAdvanced.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var RatingAdvanced = ({ children, className, percentFilled = 0, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().ratingAdvanced, customTheme);
  return (0, import_jsx_runtime65.jsxs)("div", { className: twMerge(theme2.base, className), ...props, children: [(0, import_jsx_runtime65.jsx)("span", { className: theme2.label, children }), (0, import_jsx_runtime65.jsx)("div", { className: theme2.progress.base, children: (0, import_jsx_runtime65.jsx)("div", { className: theme2.progress.fill, "data-testid": "flowbite-rating-fill", style: { width: `${percentFilled}%` } }) }), (0, import_jsx_runtime65.jsx)("span", { className: theme2.progress.label, children: `${percentFilled}%` })] });
};

// node_modules/flowbite-react/lib/esm/components/Rating/RatingContext.js
var import_react36 = __toESM(require_react());
var RatingContext = (0, import_react36.createContext)(void 0);
function useRatingContext() {
  const context = (0, import_react36.useContext)(RatingContext);
  if (!context) {
    throw new Error("useRatingContext should be used within the RatingContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Rating/RatingStar.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var RatingStar = ({ className, filled = true, starIcon: Icon = HiStar, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, size: size3 = "sm" } = useRatingContext();
  const theme2 = mergeDeep(rootTheme.star, customTheme);
  return (0, import_jsx_runtime66.jsx)(Icon, { "data-testid": "flowbite-rating-star", className: twMerge(theme2.sizes[size3], theme2[filled ? "filled" : "empty"], className), ...props });
};

// node_modules/flowbite-react/lib/esm/components/Rating/Rating.js
var RatingComponent = ({ children, className, size: size3 = "sm", theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().rating, customTheme);
  return (0, import_jsx_runtime67.jsx)(RatingContext.Provider, { value: { theme: theme2, size: size3 }, children: (0, import_jsx_runtime67.jsx)("div", { className: twMerge(theme2.root.base, className), ...props, children }) });
};
RatingComponent.displayName = "Rating";
RatingStar.displayName = "Rating.Star";
RatingAdvanced.displayName = "Rating.Advanced";
var Rating = Object.assign(RatingComponent, {
  Star: RatingStar,
  Advanced: RatingAdvanced
});

// node_modules/flowbite-react/lib/esm/components/Select/Select.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var import_react37 = __toESM(require_react());
var Select = (0, import_react37.forwardRef)(({ addon, children, className, color = "gray", helperText, icon: Icon, shadow, sizing = "md", theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().select, customTheme);
  return (0, import_jsx_runtime68.jsxs)("div", { className: twMerge(theme2.base, className), children: [addon && (0, import_jsx_runtime68.jsx)("span", { className: theme2.addon, children: addon }), (0, import_jsx_runtime68.jsxs)("div", { className: theme2.field.base, children: [Icon && (0, import_jsx_runtime68.jsx)("div", { className: theme2.field.icon.base, children: (0, import_jsx_runtime68.jsx)(Icon, { className: theme2.field.icon.svg }) }), (0, import_jsx_runtime68.jsx)("select", { className: twMerge(theme2.field.select.base, theme2.field.select.colors[color], theme2.field.select.sizes[sizing], theme2.field.select.withIcon[Icon ? "on" : "off"], theme2.field.select.withAddon[addon ? "on" : "off"], theme2.field.select.withShadow[shadow ? "on" : "off"]), ...props, ref, children }), helperText && (0, import_jsx_runtime68.jsx)(HelperText, { color, children: helperText })] })] });
});
Select.displayName = "Select";

// node_modules/flowbite-react/lib/esm/components/Sidebar/Sidebar.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCTA.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarContext.js
var import_react38 = __toESM(require_react());
var SidebarContext = (0, import_react38.createContext)(void 0);
function useSidebarContext() {
  const context = (0, import_react38.useContext)(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext should be used within the SidebarContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCTA.js
var SidebarCTA = ({ children, color = "info", className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.cta, customTheme);
  return (0, import_jsx_runtime69.jsx)("div", { "data-testid": "sidebar-cta", hidden: isCollapsed, className: twMerge(theme2.base, theme2.color[color], className), ...props, children });
};
SidebarCTA.displayName = "Sidebar.CTA";

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCollapse.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var import_react42 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Tooltip/Tooltip.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Floating/Floating.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var import_react40 = __toESM(require_react());
var Floating = ({ animation = "duration-300", arrow: arrow4 = true, children, className, content, placement = "top", style = "dark", theme: theme2, trigger = "hover", minWidth, ...props }) => {
  const arrowRef = (0, import_react40.useRef)(null);
  const [open, setOpen] = (0, import_react40.useState)(false);
  const floatingProperties = useBaseFLoating({
    open,
    placement,
    arrowRef,
    setOpen
  });
  const { context, middlewareData: { arrow: { x: arrowX, y: arrowY } = {} }, refs, strategy, update, x, y } = floatingProperties;
  const focus = useFocus(context);
  const { getFloatingProps, getReferenceProps } = useFloatingInteractions({
    context,
    role: "tooltip",
    trigger,
    interactions: [focus]
  });
  (0, import_react40.useEffect)(() => {
    if (refs.reference.current && refs.floating.current && open) {
      return autoUpdate(refs.reference.current, refs.floating.current, update);
    }
  }, [open, refs.floating, refs.reference, update]);
  return (0, import_jsx_runtime70.jsxs)(import_jsx_runtime70.Fragment, { children: [(0, import_jsx_runtime70.jsx)("div", { ref: refs.setReference, className: theme2.target, "data-testid": "flowbite-tooltip-target", ...getReferenceProps(), children }), (0, import_jsx_runtime70.jsxs)("div", { ref: refs.setFloating, "data-testid": "flowbite-tooltip", ...getFloatingProps({
    className: twMerge(theme2.base, animation && `${theme2.animation} ${animation}`, !open && theme2.hidden, theme2.style[style], className),
    style: {
      position: strategy,
      top: y ?? " ",
      left: x ?? " ",
      minWidth
    },
    ...props
  }), children: [(0, import_jsx_runtime70.jsx)("div", { className: theme2.content, children: content }), arrow4 && (0, import_jsx_runtime70.jsx)("div", { className: twMerge(theme2.arrow.base, style === "dark" && theme2.arrow.style.dark, style === "light" && theme2.arrow.style.light, style === "auto" && theme2.arrow.style.auto), "data-testid": "flowbite-tooltip-arrow", ref: arrowRef, style: {
    top: arrowY ?? " ",
    left: arrowX ?? " ",
    right: " ",
    bottom: " ",
    [getArrowPlacement({ placement: floatingProperties.placement })]: theme2.arrow.placement
  }, children: " " })] })] });
};

// node_modules/flowbite-react/lib/esm/components/Tooltip/Tooltip.js
var Tooltip = ({ animation = "duration-300", arrow: arrow4 = true, children, className, content, placement = "top", style = "dark", theme: customTheme = {}, trigger = "hover", ...props }) => {
  const theme2 = mergeDeep(getTheme().tooltip, customTheme);
  return (0, import_jsx_runtime71.jsx)(Floating, { animation, arrow: arrow4, content, placement, style, theme: theme2, trigger, className, ...props, children });
};
Tooltip.displayName = "Tooltip";

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItemContext.js
var import_react41 = __toESM(require_react());
var SidebarItemContext = (0, import_react41.createContext)(void 0);
function useSidebarItemContext() {
  const context = (0, import_react41.useContext)(SidebarItemContext);
  if (!context) {
    throw new Error("useSidebarItemContext should be used within the SidebarItemContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarCollapse.js
var SidebarCollapse = ({ children, className, icon: Icon, label, chevronIcon: ChevronIcon = HiChevronDown, renderChevronIcon, open = false, theme: customTheme = {}, ...props }) => {
  const id = (0, import_react42.useId)();
  const [isOpen, setOpen] = (0, import_react42.useState)(open);
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.collapse, customTheme);
  (0, import_react42.useEffect)(() => setOpen(open), [open]);
  const Wrapper = ({ children: children2 }) => (0, import_jsx_runtime72.jsx)("li", { children: isCollapsed && !isOpen ? (0, import_jsx_runtime72.jsx)(Tooltip, { content: label, placement: "right", children: children2 }) : children2 });
  return (0, import_jsx_runtime72.jsxs)(Wrapper, { children: [(0, import_jsx_runtime72.jsxs)("button", { id: `flowbite-sidebar-collapse-${id}`, onClick: () => setOpen(!isOpen), title: label, type: "button", className: twMerge(theme2.button, className), ...props, children: [Icon && (0, import_jsx_runtime72.jsx)(Icon, { "aria-hidden": true, "data-testid": "flowbite-sidebar-collapse-icon", className: twMerge(theme2.icon.base, theme2.icon.open[isOpen ? "on" : "off"]) }), isCollapsed ? (0, import_jsx_runtime72.jsx)("span", { className: "sr-only", children: label }) : (0, import_jsx_runtime72.jsxs)(import_jsx_runtime72.Fragment, { children: [(0, import_jsx_runtime72.jsx)("span", { "data-testid": "flowbite-sidebar-collapse-label", className: theme2.label.base, children: label }), renderChevronIcon ? renderChevronIcon(theme2, isOpen) : (0, import_jsx_runtime72.jsx)(ChevronIcon, { "aria-hidden": true, className: twMerge(theme2.label.icon.base, theme2.label.icon.open[isOpen ? "on" : "off"]) })] })] }), (0, import_jsx_runtime72.jsx)("ul", { "aria-labelledby": `flowbite-sidebar-collapse-${id}`, hidden: !isOpen, className: theme2.list, children: (0, import_jsx_runtime72.jsx)(SidebarItemContext.Provider, { value: { isInsideCollapse: true }, children }) })] });
};
SidebarCollapse.displayName = "Sidebar.Collapse";

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItem.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
var import_react43 = __toESM(require_react());
var ListItem2 = ({ id, theme: theme2, isCollapsed, tooltipChildren, children: wrapperChildren, ...props }) => (0, import_jsx_runtime73.jsx)("li", { ...props, children: isCollapsed ? (0, import_jsx_runtime73.jsx)(Tooltip, { content: (0, import_jsx_runtime73.jsx)(Children4, { id, theme: theme2, children: tooltipChildren }), placement: "right", children: wrapperChildren }) : wrapperChildren });
var Children4 = ({ id, theme: theme2, children }) => {
  return (0, import_jsx_runtime73.jsx)("span", { "data-testid": "flowbite-sidebar-item-content", id: `flowbite-sidebar-item-${id}`, className: twMerge(theme2.content.base), children });
};
var SidebarItem = (0, import_react43.forwardRef)(({ active: isActive, as: Component = "a", children, className, icon: Icon, label, labelColor = "info", theme: customTheme = {}, ...props }, ref) => {
  var _a, _b, _c, _d;
  const id = (0, import_react43.useId)();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const { isInsideCollapse } = useSidebarItemContext();
  const theme2 = mergeDeep(rootTheme.item, customTheme);
  return (0, import_jsx_runtime73.jsx)(ListItem2, { theme: theme2, className: theme2.listItem, id, isCollapsed, tooltipChildren: children, children: (0, import_jsx_runtime73.jsxs)(Component, { "aria-labelledby": `flowbite-sidebar-item-${id}`, ref, className: twMerge(theme2.base, isActive && theme2.active, !isCollapsed && isInsideCollapse && ((_a = theme2.collapsed) == null ? void 0 : _a.insideCollapse), className), ...props, children: [Icon && (0, import_jsx_runtime73.jsx)(Icon, { "aria-hidden": true, "data-testid": "flowbite-sidebar-item-icon", className: twMerge((_b = theme2.icon) == null ? void 0 : _b.base, isActive && ((_c = theme2.icon) == null ? void 0 : _c.active)) }), isCollapsed && !Icon && (0, import_jsx_runtime73.jsx)("span", { className: (_d = theme2.collapsed) == null ? void 0 : _d.noIcon, children: children.charAt(0).toLocaleUpperCase() ?? "?" }), !isCollapsed && (0, import_jsx_runtime73.jsx)(Children4, { id, theme: theme2, children }), !isCollapsed && label && (0, import_jsx_runtime73.jsx)(Badge, { color: labelColor, "data-testid": "flowbite-sidebar-label", hidden: isCollapsed, className: theme2.label, children: label })] }) });
});
SidebarItem.displayName = "Sidebar.Item";

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var SidebarItemGroup = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.itemGroup, customTheme);
  return (0, import_jsx_runtime74.jsx)("ul", { "data-testid": "flowbite-sidebar-item-group", className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime74.jsx)(SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children }) });
};
SidebarItemGroup.displayName = "Sidebar.ItemGroup";

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarItems.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var SidebarItems = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.items, customTheme);
  return (0, import_jsx_runtime75.jsx)("div", { className: twMerge(theme2.base, className), "data-testid": "flowbite-sidebar-items", ...props, children });
};
SidebarItems.displayName = "Sidebar.Items";

// node_modules/flowbite-react/lib/esm/components/Sidebar/SidebarLogo.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var import_react44 = __toESM(require_react());
var SidebarLogo = ({ children, className, href, img, imgAlt = "", theme: customTheme = {}, ...props }) => {
  const id = (0, import_react44.useId)();
  const { theme: rootTheme, isCollapsed } = useSidebarContext();
  const theme2 = mergeDeep(rootTheme.logo, customTheme);
  return (0, import_jsx_runtime76.jsxs)("a", { "aria-labelledby": `flowbite-sidebar-logo-${id}`, href, className: twMerge(theme2.base, className), ...props, children: [(0, import_jsx_runtime76.jsx)("img", { alt: imgAlt, src: img, className: theme2.img }), (0, import_jsx_runtime76.jsx)("span", { className: theme2.collapsed[isCollapsed ? "on" : "off"], id: `flowbite-sidebar-logo-${id}`, children })] });
};
SidebarLogo.displayName = "Sidebar.Logo";

// node_modules/flowbite-react/lib/esm/components/Sidebar/Sidebar.js
var SidebarComponent = ({ children, as: Component = "nav", collapseBehavior = "collapse", collapsed: isCollapsed = false, theme: customTheme = {}, className, ...props }) => {
  const theme2 = mergeDeep(getTheme().sidebar, customTheme);
  return (0, import_jsx_runtime77.jsx)(SidebarContext.Provider, { value: { theme: theme2, isCollapsed }, children: (0, import_jsx_runtime77.jsx)(Component, { "aria-label": "Sidebar", hidden: isCollapsed && collapseBehavior === "hide", className: twMerge(theme2.root.base, theme2.root.collapsed[isCollapsed ? "on" : "off"], className), ...props, children: (0, import_jsx_runtime77.jsx)("div", { className: theme2.root.inner, children }) }) });
};
SidebarComponent.displayName = "Sidebar";
var Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo
});

// node_modules/flowbite-react/lib/esm/components/Table/Table.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Table/TableBody.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Table/TableBodyContext.js
var import_react45 = __toESM(require_react());
var TableBodyContext = (0, import_react45.createContext)(void 0);
function useTableBodyContext() {
  const context = (0, import_react45.useContext)(TableBodyContext);
  if (!context) {
    throw new Error("useTableBodyContext should be used within the TableBodyContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Table/TableContext.js
var import_react46 = __toESM(require_react());
var TableContext = (0, import_react46.createContext)(void 0);
function useTableContext() {
  const context = (0, import_react46.useContext)(TableContext);
  if (!context) {
    throw new Error("useTableContext should be used within the TableContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Table/TableBody.js
var TableBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTableContext();
  const theme2 = mergeDeep(rootTheme.body, customTheme);
  return (0, import_jsx_runtime78.jsx)(TableBodyContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime78.jsx)("tbody", { className: twMerge(theme2.base, className), ...props, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableCell.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var TableCell = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: bodyTheme } = useTableBodyContext();
  const theme2 = mergeDeep(bodyTheme.cell, customTheme);
  return (0, import_jsx_runtime79.jsx)("td", { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableHead.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Table/TableHeadContext.js
var import_react47 = __toESM(require_react());
var TableHeadContext = (0, import_react47.createContext)(void 0);
function useTableHeadContext() {
  const context = (0, import_react47.useContext)(TableHeadContext);
  if (!context) {
    throw new Error("useTableHeadContext should be used within the TableHeadContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Table/TableHead.js
var TableHead = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTableContext();
  const theme2 = mergeDeep(rootTheme.head, customTheme);
  return (0, import_jsx_runtime80.jsx)(TableHeadContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime80.jsx)("thead", { className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime80.jsx)("tr", { children }) }) });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableHeadCell.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var TableHeadCell = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: headTheme } = useTableHeadContext();
  const theme2 = mergeDeep(headTheme.cell, customTheme);
  return (0, import_jsx_runtime81.jsx)("th", { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/TableRow.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var TableRow = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, hoverable, striped } = useTableContext();
  const theme2 = mergeDeep(rootTheme.row, customTheme);
  return (0, import_jsx_runtime82.jsx)("tr", { "data-testid": "table-row-element", className: twMerge(theme2.base, striped && theme2.striped, hoverable && theme2.hovered, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Table/Table.js
var TableComponent = ({ children, className, striped, hoverable, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().table, customTheme);
  return (0, import_jsx_runtime83.jsx)("div", { "data-testid": "table-element", className: twMerge(theme2.root.wrapper), children: (0, import_jsx_runtime83.jsxs)(TableContext.Provider, { value: { theme: theme2, striped, hoverable }, children: [(0, import_jsx_runtime83.jsx)("div", { className: twMerge(theme2.root.shadow, className) }), (0, import_jsx_runtime83.jsx)("table", { className: twMerge(theme2.root.base, className), ...props, children })] }) });
};
TableComponent.displayName = "Table";
TableHead.displayName = "Table.Head";
TableBody.displayName = "Table.Body";
TableRow.displayName = "Table.Row";
TableCell.displayName = "Table.Cell";
TableHeadCell.displayName = "Table.HeadCell";
var Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell
});

// node_modules/flowbite-react/lib/esm/components/Tabs/TabItem.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var TabItem = ({ children, className }) => (0, import_jsx_runtime84.jsx)("div", { className, children });
TabItem.displayName = "Tabs.Item";

// node_modules/flowbite-react/lib/esm/components/Tabs/Tabs.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var import_react48 = __toESM(require_react());
var TabsComponent = (0, import_react48.forwardRef)(({ children, className, onActiveTabChange, style = "default", theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().tabs, customTheme);
  const id = (0, import_react48.useId)();
  const tabs = (0, import_react48.useMemo)(() => import_react48.Children.map(import_react48.Children.toArray(children), ({ props: props2 }) => props2), [children]);
  const tabRefs = (0, import_react48.useRef)([]);
  const [activeTab, setActiveTab] = (0, import_react48.useState)(Math.max(0, tabs.findIndex((tab) => tab.active)));
  const [focusedTab, setFocusedTab] = (0, import_react48.useState)(-1);
  const setActiveTabWithCallback = (activeTab2) => {
    setActiveTab(activeTab2);
    if (onActiveTabChange)
      onActiveTabChange(activeTab2);
  };
  const handleClick = ({ target }) => {
    setActiveTabWithCallback(target);
    setFocusedTab(target);
  };
  const handleKeyboard = ({ event, target }) => {
    if (event.key === "ArrowLeft") {
      setFocusedTab(Math.max(0, focusedTab - 1));
    }
    if (event.key === "ArrowRight") {
      setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
    }
    if (event.key === "Enter") {
      setActiveTabWithCallback(target);
      setFocusedTab(target);
    }
  };
  const tabItemStyle = theme2.tablist.tabitem.styles[style];
  const tabItemContainerStyle = theme2.tabitemcontainer.styles[style];
  (0, import_react48.useEffect)(() => {
    var _a;
    (_a = tabRefs.current[focusedTab]) == null ? void 0 : _a.focus();
  }, [focusedTab]);
  (0, import_react48.useImperativeHandle)(ref, () => ({
    setActiveTab: setActiveTabWithCallback
  }));
  return (0, import_jsx_runtime85.jsxs)("div", { className: twMerge(theme2.base, className), children: [(0, import_jsx_runtime85.jsx)("div", { "aria-label": "Tabs", role: "tablist", className: twMerge(theme2.tablist.base, theme2.tablist.styles[style], className), ...props, children: tabs.map((tab, index3) => (0, import_jsx_runtime85.jsxs)("button", { type: "button", "aria-controls": `${id}-tabpanel-${index3}`, "aria-selected": index3 === activeTab, className: twMerge(theme2.tablist.tabitem.base, tabItemStyle.base, index3 === activeTab && tabItemStyle.active.on, index3 !== activeTab && !tab.disabled && tabItemStyle.active.off), disabled: tab.disabled, id: `${id}-tab-${index3}`, onClick: () => handleClick({ target: index3 }), onKeyDown: (event) => handleKeyboard({ event, target: index3 }), ref: (element) => tabRefs.current[index3] = element, role: "tab", tabIndex: index3 === focusedTab ? 0 : -1, style: { zIndex: index3 === focusedTab ? 2 : 1 }, children: [tab.icon && (0, import_jsx_runtime85.jsx)(tab.icon, { className: theme2.tablist.tabitem.icon }), tab.title] }, index3)) }), (0, import_jsx_runtime85.jsx)("div", { className: twMerge(theme2.tabitemcontainer.base, tabItemContainerStyle), children: tabs.map((tab, index3) => (0, import_jsx_runtime85.jsx)("div", { "aria-labelledby": `${id}-tab-${index3}`, className: theme2.tabpanel, hidden: index3 !== activeTab, id: `${id}-tabpanel-${index3}`, role: "tabpanel", tabIndex: 0, children: tab.children }, index3)) })] });
});
TabsComponent.displayName = "Tabs";
var Tabs = Object.assign(TabsComponent, {
  Item: TabItem
});

// node_modules/flowbite-react/lib/esm/components/Textarea/Textarea.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var import_react49 = __toESM(require_react());
var Textarea = (0, import_react49.forwardRef)(({ className, color = "gray", helperText, shadow, theme: customTheme = {}, ...props }, ref) => {
  const theme2 = mergeDeep(getTheme().textarea, customTheme);
  return (0, import_jsx_runtime86.jsxs)(import_jsx_runtime86.Fragment, { children: [(0, import_jsx_runtime86.jsx)("textarea", { ref, className: twMerge(theme2.base, theme2.colors[color], theme2.withShadow[shadow ? "on" : "off"], className), ...props }), helperText && (0, import_jsx_runtime86.jsx)(HelperText, { color, children: helperText })] });
});
Textarea.displayName = "Textarea";

// node_modules/flowbite-react/lib/esm/components/ThemeModeScript/ThemeModeScript.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var ThemeModeScript = ({ mode, ...others }) => {
  return (0, import_jsx_runtime87.jsx)("script", { ...others, "data-flowbite-theme-mode-script": true, dangerouslySetInnerHTML: {
    __html: getScript({ mode, defaultMode: "light", localStorageKey: "flowbite-theme-mode" })
  } });
};
function getScript({ mode, defaultMode, localStorageKey }) {
  return `
    try {
      const mode = window.localStorage.getItem('${localStorageKey}') ?? '${mode}' ?? '${defaultMode}';
      const computedMode =
        mode === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : mode;

      if (computedMode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  `;
}

// node_modules/flowbite-react/lib/esm/components/Timeline/Timeline.js
var import_jsx_runtime94 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineBody.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContentContext.js
var import_react50 = __toESM(require_react());
var TimelineContentContext = (0, import_react50.createContext)(void 0);
function useTimelineContentContext() {
  const context = (0, import_react50.useContext)(TimelineContentContext);
  if (!context) {
    throw new Error("useTimelineContentContext should be used within the TimelineContentContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineBody.js
var TimelineBody = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme2 = mergeDeep(contentTheme.body, customTheme);
  return (0, import_jsx_runtime88.jsx)("div", { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContent.js
var import_jsx_runtime89 = __toESM(require_jsx_runtime());

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContext.js
var import_react51 = __toESM(require_react());
var TimelineContext = (0, import_react51.createContext)(void 0);
function useTimelineContext() {
  const context = (0, import_react51.useContext)(TimelineContext);
  if (!context) {
    throw new Error("useTimelineContext should be used within the TimelineContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineItemContext.js
var import_react52 = __toESM(require_react());
var TimelineItemContext = (0, import_react52.createContext)(void 0);
function useTimelineItemContext() {
  const context = (0, import_react52.useContext)(TimelineItemContext);
  if (!context) {
    throw new Error("useTimelineItemContext should be used within the TimelineItemContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineContent.js
var TimelineContent = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme2 = mergeDeep(itemTheme.content, customTheme);
  return (0, import_jsx_runtime89.jsx)(TimelineContentContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime89.jsx)("div", { "data-testid": "timeline-content", className: twMerge(horizontal && theme2.root.base, className), ...props, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineItem.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var TimelineItem = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, horizontal } = useTimelineContext();
  const theme2 = mergeDeep(rootTheme.item, customTheme);
  return (0, import_jsx_runtime90.jsx)(TimelineItemContext.Provider, { value: { theme: theme2 }, children: (0, import_jsx_runtime90.jsx)("li", { "data-testid": "timeline-item", className: twMerge(horizontal && theme2.root.horizontal, !horizontal && theme2.root.vertical, className), ...props, children }) });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelinePoint.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var TimelinePoint = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const { horizontal } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const theme2 = mergeDeep(itemTheme.point, customTheme);
  return (0, import_jsx_runtime91.jsxs)("div", { "data-testid": "timeline-point", className: twMerge(horizontal && theme2.horizontal, !horizontal && theme2.vertical, className), ...props, children: [children, Icon ? (0, import_jsx_runtime91.jsx)("span", { className: twMerge(theme2.marker.icon.wrapper), children: (0, import_jsx_runtime91.jsx)(Icon, { "aria-hidden": true, className: twMerge(theme2.marker.icon.base) }) }) : (0, import_jsx_runtime91.jsx)("div", { className: twMerge(horizontal && theme2.marker.base.horizontal, !horizontal && theme2.marker.base.vertical) }), horizontal && (0, import_jsx_runtime91.jsx)("div", { className: twMerge(theme2.line) })] });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineTime.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var TimelineTime = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme2 = mergeDeep(contentTheme.time, customTheme);
  return (0, import_jsx_runtime92.jsx)("time", { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/TimelineTitle.js
var import_jsx_runtime93 = __toESM(require_jsx_runtime());
var TimelineTitle = ({ as: Tag = "h3", children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();
  const theme2 = mergeDeep(contentTheme.title, customTheme);
  return (0, import_jsx_runtime93.jsx)(Tag, { className: twMerge(theme2.base, className), ...props, children });
};

// node_modules/flowbite-react/lib/esm/components/Timeline/Timeline.js
var TimelineComponent = ({ children, className, horizontal, theme: customTheme = {}, ...props }) => {
  const theme2 = mergeDeep(getTheme().timeline, customTheme);
  return (0, import_jsx_runtime94.jsx)(TimelineContext.Provider, { value: { theme: theme2, horizontal }, children: (0, import_jsx_runtime94.jsx)("ol", { "data-testid": "timeline-component", className: twMerge(horizontal && theme2.root.direction.horizontal, !horizontal && theme2.root.direction.vertical, className), ...props, children }) });
};
TimelineComponent.displayName = "Timeline";
TimelineItem.displayName = "Timeline.Item";
TimelinePoint.displayName = "Timeline.Point";
TimelineContent.displayName = "Timeline.Content";
TimelineTime.displayName = "Timeline.Time";
TimelineTitle.displayName = "Timeline.Title";
TimelineBody.displayName = "Timeline.Body";
var Timeline = Object.assign(TimelineComponent, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
  Title: TimelineTitle,
  Body: TimelineBody
});

// node_modules/flowbite-react/lib/esm/components/Toast/Toast.js
var import_jsx_runtime96 = __toESM(require_jsx_runtime());
var import_react54 = __toESM(require_react());

// node_modules/flowbite-react/lib/esm/components/Toast/ToastContext.js
var import_react53 = __toESM(require_react());
var ToastContext = (0, import_react53.createContext)(void 0);
function useToastContext() {
  const context = (0, import_react53.useContext)(ToastContext);
  if (!context) {
    throw new Error("useToastContext should be used within the ToastContext provider!");
  }
  return context;
}

// node_modules/flowbite-react/lib/esm/components/Toast/ToastToggle.js
var import_jsx_runtime95 = __toESM(require_jsx_runtime());
var ToastToggle = ({ className, onClick, theme: customTheme = {}, xIcon: XIcon = HiX, onDismiss, ...props }) => {
  const { theme: rootTheme, duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme2 = mergeDeep(rootTheme.toggle, customTheme);
  const handleClick = (e2) => {
    if (onClick)
      onClick(e2);
    if (onDismiss) {
      onDismiss();
      return;
    }
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };
  return (0, import_jsx_runtime95.jsx)("button", { "aria-label": "Close", onClick: handleClick, type: "button", className: twMerge(theme2.base, className), ...props, children: (0, import_jsx_runtime95.jsx)(XIcon, { "aria-hidden": true, className: theme2.icon }) });
};

// node_modules/flowbite-react/lib/esm/components/Toast/Toast.js
var durationClasses = {
  75: "duration-75",
  100: "duration-100",
  150: "duration-150",
  200: "duration-200",
  300: "duration-300",
  500: "duration-500",
  700: "duration-700",
  1e3: "duration-1000"
};
var ToastComponent = ({ children, className, duration = 300, theme: customTheme = {}, ...props }) => {
  const [isClosed, setIsClosed] = (0, import_react54.useState)(false);
  const [isRemoved, setIsRemoved] = (0, import_react54.useState)(false);
  const theme2 = mergeDeep(getTheme().toast, customTheme);
  if (isRemoved) {
    return null;
  }
  return (0, import_jsx_runtime96.jsx)(ToastContext.Provider, { value: { theme: theme2, duration, isClosed, isRemoved, setIsClosed, setIsRemoved }, children: (0, import_jsx_runtime96.jsx)("div", { "data-testid": "flowbite-toast", role: "alert", className: twMerge(theme2.root.base, durationClasses[duration], isClosed && theme2.root.closed, className), ...props, children }) });
};
ToastComponent.displayName = "Toast";
ToastToggle.displayName = "Toast.Toggle";
var Toast = Object.assign(ToastComponent, {
  Toggle: ToastToggle
});

// node_modules/flowbite-react/lib/esm/components/ToggleSwitch/ToggleSwitch.js
var import_jsx_runtime97 = __toESM(require_jsx_runtime());
var import_react55 = __toESM(require_react());
var ToggleSwitch = ({ checked, className, color = "blue", sizing = "md", disabled, label, name, onChange, theme: customTheme = {}, ...props }) => {
  const id = (0, import_react55.useId)();
  const theme2 = mergeDeep(getTheme().toggleSwitch, customTheme);
  const toggle = () => onChange(!checked);
  const handleClick = () => {
    toggle();
  };
  const handleOnKeyDown = (event) => {
    if (event.code == "Enter") {
      event.preventDefault();
    }
  };
  return (0, import_jsx_runtime97.jsxs)(import_jsx_runtime97.Fragment, { children: [name && checked ? (0, import_jsx_runtime97.jsx)("input", { checked, hidden: true, name, readOnly: true, type: "checkbox", className: "sr-only" }) : null, (0, import_jsx_runtime97.jsxs)("button", { "aria-checked": checked, "aria-labelledby": `${id}-flowbite-toggleswitch-label`, disabled, id: `${id}-flowbite-toggleswitch`, onClick: handleClick, onKeyDown: handleOnKeyDown, role: "switch", tabIndex: 0, type: "button", className: twMerge(theme2.root.base, theme2.root.active[disabled ? "off" : "on"], className), ...props, children: [(0, import_jsx_runtime97.jsx)("div", { "data-testid": "flowbite-toggleswitch-toggle", className: twMerge(theme2.toggle.base, theme2.toggle.checked[checked ? "on" : "off"], checked && theme2.toggle.checked.color[color], theme2.toggle.sizes[sizing]) }), (label == null ? void 0 : label.length) ? (0, import_jsx_runtime97.jsx)("span", { "data-testid": "flowbite-toggleswitch-label", id: `${id}-flowbite-toggleswitch-label`, className: theme2.root.label, children: label }) : null] })] });
};
ToggleSwitch.displayName = "ToggleSwitch";
export {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Alert,
  Avatar,
  AvatarGroup,
  AvatarGroupCounter,
  Badge,
  Banner,
  BannerCollapseButton,
  Blockquote,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  Carousel,
  Checkbox,
  DarkThemeToggle,
  Datepicker,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  FileInput,
  FloatingLabel,
  Flowbite,
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  HelperText,
  Kbd,
  Label,
  List,
  ListGroup,
  ListGroupItem,
  ListItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Pagination,
  PaginationButton,
  Progress,
  Radio,
  RangeSlider,
  Rating,
  RatingAdvanced,
  RatingStar,
  Select,
  Sidebar,
  SidebarCTA,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
  Spinner,
  TabItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Tabs,
  TextInput,
  Textarea,
  ThemeModeScript,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
  Toast,
  ToastToggle,
  ToggleSwitch,
  Tooltip,
  WeekStart,
  getTheme,
  getThemeMode,
  theme,
  useThemeMode
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-indiana-drag-scroll/dist/index.es.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
  (*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=flowbite-react.js.map
